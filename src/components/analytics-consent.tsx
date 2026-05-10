"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { siteSettings } from "@/lib/site";

const CONSENT_STORAGE_KEY = "szymik-analytics-consent";
const COOKIE_SETTINGS_EVENT = "szymik:open-cookie-settings";
const CONSENT_CHANGE_EVENT = "szymik:analytics-consent-changed";
const ACCEPTED = "accepted";
const DECLINED = "declined";

type ConsentChoice = typeof ACCEPTED | typeof DECLINED | null;

function isConsentChoice(
  value: string | null,
): value is Exclude<ConsentChoice, null> {
  return value === ACCEPTED || value === DECLINED;
}

function getCurrentPath() {
  return `${window.location.pathname}${window.location.search}`;
}

function setAnalyticsDisabled(measurementId: string, disabled: boolean) {
  window[`ga-disable-${measurementId}`] = disabled;
}

function readStoredConsent(): ConsentChoice {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return isConsentChoice(storedValue) ? storedValue : null;
  } catch {
    return null;
  }
}

function subscribeToConsentChanges(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  };
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}

export function AnalyticsConsent() {
  const pathname = usePathname();
  const measurementId = siteSettings.analytics.googleAnalyticsMeasurementId;
  const storedChoice = useSyncExternalStore(
    subscribeToConsentChanges,
    readStoredConsent,
    () => null,
  );
  const [sessionChoice, setSessionChoice] = useState<ConsentChoice>(null);
  const choice = storedChoice ?? sessionChoice;
  const [isReady, setIsReady] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    function handleOpenSettings() {
      setIsSettingsOpen(true);
    }

    window.addEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings);

    return () => {
      window.removeEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings);
    };
  }, []);

  useEffect(() => {
    if (choice !== ACCEPTED) {
      setAnalyticsDisabled(measurementId, true);
      return;
    }

    setAnalyticsDisabled(measurementId, false);

    if (lastTrackedPath.current === null) {
      lastTrackedPath.current = getCurrentPath();
    }
  }, [choice, measurementId]);

  useEffect(() => {
    if (
      choice !== ACCEPTED ||
      !isReady ||
      typeof window.gtag !== "function"
    ) {
      return;
    }

    const currentPath = getCurrentPath();

    if (lastTrackedPath.current === currentPath) {
      return;
    }

    lastTrackedPath.current = currentPath;
    window.gtag("config", measurementId, {
      page_path: currentPath,
      page_title: document.title,
    });
  }, [choice, isReady, measurementId, pathname]);

  function storeChoice(nextChoice: Exclude<ConsentChoice, null>) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, nextChoice);
    } catch {
      // If storage is unavailable, keep the choice for the current session.
    }

    setSessionChoice(nextChoice);
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    setIsSettingsOpen(false);
  }

  function acceptAnalytics() {
    setAnalyticsDisabled(measurementId, false);
    lastTrackedPath.current = getCurrentPath();
    storeChoice(ACCEPTED);

    if (typeof window.gtag === "function") {
      window.gtag("config", measurementId, {
        page_path: getCurrentPath(),
        page_title: document.title,
      });
    }
  }

  function declineAnalytics() {
    setAnalyticsDisabled(measurementId, true);
    storeChoice(DECLINED);
  }

  const isPanelOpen = choice === null || isSettingsOpen;

  return (
    <>
      {choice === ACCEPTED ? (
        <>
          <Script
            id="szymik-ga4-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script
            id="szymik-ga4-config"
            strategy="afterInteractive"
            onReady={() => setIsReady(true)}
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${measurementId}', {
                page_path: window.location.pathname + window.location.search,
                page_title: document.title
              });
            `}
          </Script>
        </>
      ) : null}

      {isPanelOpen ? (
        <div className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 sm:bottom-5 sm:left-auto sm:right-5 sm:max-w-md sm:px-0 sm:pb-0">
          <div
            role="dialog"
            aria-label="Analytics cookie settings"
            className="rounded-[1.4rem] border border-border bg-white p-5 text-foreground shadow-[0_24px_70px_rgba(9,18,13,0.2)]"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Analytics cookies
            </p>
            <h2 className="mt-2 text-xl font-semibold">
              Help us understand site usage
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Szymik Digital uses Google Analytics only if you accept it. It
              helps understand broad site usage so the website can be improved.
              You can decline analytics and still use the site normally.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-surface-strong transition hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                onClick={acceptAnalytics}
              >
                Accept analytics
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35"
                onClick={declineAnalytics}
              >
                Decline analytics
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
