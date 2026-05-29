"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FocusEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { CtaLink } from "@/components/cta-link";
import { primaryNavigation, siteName, siteSettings } from "@/lib/site";

const servicesNavigation = [
  { href: "/services/#website-refresh", label: "Website Refresh" },
  { href: "/services/#starter-website", label: "Starter Website" },
  { href: "/services/#local-growth-website", label: "Local Growth Website" },
  {
    href: "/services/#automation-discovery",
    label: "Automation / Custom Tool Discovery",
  },
  { href: "/services/guide-prices/", label: "Guide Prices" },
  { href: "/services/#how-to-choose", label: "How to choose" },
  {
    href: "/services/#concept-preview-process",
    label: "Concept Preview process",
  },
];

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const usesV2Header =
    pathname === "/" ||
    pathname.startsWith("/work") ||
    pathname.startsWith("/services") ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/contact");
  const headerShellClassName = usesV2Header
    ? "border-b border-white/10 bg-[#030504]/94 shadow-none"
    : "border border-black/6 bg-white/90 shadow-[0_24px_56px_rgba(9,18,13,0.12)]";
  const brandHoverClassName = usesV2Header
    ? "hover:bg-white/10"
    : "hover:bg-black/5";
  const menuPanelClassName = usesV2Header
    ? "border-white/10 bg-[#030504]/96"
    : "border-border/80 bg-white/90";

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        servicesDropdownRef.current &&
        event.target instanceof Node &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsMobileServicesOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      if (servicesCloseTimeoutRef.current) {
        clearTimeout(servicesCloseTimeoutRef.current);
      }
    };
  }, []);

  function clearServicesCloseTimeout() {
    if (servicesCloseTimeoutRef.current) {
      clearTimeout(servicesCloseTimeoutRef.current);
      servicesCloseTimeoutRef.current = null;
    }
  }

  function openServicesDropdown() {
    clearServicesCloseTimeout();
    setIsServicesOpen(true);
  }

  function closeServicesDropdown() {
    clearServicesCloseTimeout();
    setIsServicesOpen(false);
  }

  function scheduleServicesDropdownClose() {
    clearServicesCloseTimeout();
    servicesCloseTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      servicesCloseTimeoutRef.current = null;
    }, 160);
  }

  function closeMenus() {
    setIsOpen(false);
    closeServicesDropdown();
    setIsMobileServicesOpen(false);
  }

  function handleServicesBlur(event: FocusEvent<HTMLDivElement>) {
    const nextTarget = event.relatedTarget;

    if (!nextTarget || !event.currentTarget.contains(nextTarget as Node)) {
      scheduleServicesDropdownClose();
    }
  }

  function desktopNavClassName(active: boolean) {
    return [
      "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45",
      active
        ? usesV2Header
          ? "border border-accent/45 bg-accent/16 !text-white shadow-[inset_0_-2px_0_#57d681] hover:!text-white focus-visible:!text-white"
          : "bg-surface-strong !text-white hover:!text-white focus-visible:!text-white"
        : usesV2Header
          ? "!text-white/78 hover:bg-white/10 hover:!text-white"
          : "text-muted hover:bg-black/5 hover:text-foreground",
    ]
      .join(" ")
      .trim();
  }

  function mobileNavClassName(active: boolean) {
    return [
      "rounded-[1.3rem] px-4 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35",
      active
        ? usesV2Header
          ? "border border-accent/45 bg-accent/16 !text-white shadow-[inset_3px_0_0_#57d681] hover:!text-white focus-visible:!text-white"
          : "bg-surface-strong !text-white hover:!text-white focus-visible:!text-white"
        : usesV2Header
          ? "bg-white/8 !text-white/82 hover:bg-white/12 hover:!text-white"
          : "bg-white text-foreground hover:border-accent/40 hover:bg-accent-soft",
    ]
      .join(" ")
      .trim();
  }

  const desktopServiceLinkClassName =
    "rounded-[0.9rem] px-4 py-3 text-sm font-semibold !text-white transition hover:bg-accent/12 hover:!text-white focus-visible:bg-accent/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45";
  const mobileServiceLinkClassName = usesV2Header
    ? "rounded-[1rem] border border-white/10 bg-black/22 px-4 py-3 text-sm font-medium text-white/78 transition hover:border-accent/35 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35"
    : "rounded-[1rem] border border-border bg-white px-4 py-3 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35";

  return (
    <header
      className={[
        "sticky top-0 z-[60]",
        usesV2Header ? "bg-[#030504]/94 backdrop-blur-xl" : "",
      ]
        .join(" ")
        .trim()}
    >
      <div
        className={usesV2Header ? "site-container" : "site-container pt-3 sm:pt-4"}
      >
        <div
          className={[
            usesV2Header
              ? "px-0 py-3 backdrop-blur-xl"
              : "rounded-[1.35rem] px-3 py-3 backdrop-blur-xl sm:rounded-full",
            headerShellClassName,
          ]
            .join(" ")
            .trim()}
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className={[
                "flex items-center gap-2.5 rounded-full px-2.5 py-2 transition",
                brandHoverClassName,
              ]
                .join(" ")
                .trim()}
              onClick={closeMenus}
            >
              <BrandLogo
                priority
                variant="mark"
                sizes="(min-width: 640px) 42px, 38px"
                className="h-auto w-[38px] sm:w-[42px]"
                alt=""
              />
              <span
                className="flex items-baseline text-[1.35rem] font-extrabold leading-none tracking-normal sm:text-[1.5rem]"
                aria-hidden="true"
              >
                <span className={usesV2Header ? "text-white" : "text-foreground"}>
                  Szymik
                </span>
                <span
                  className={usesV2Header ? "text-accent" : "text-accent-strong"}
                >
                  Digital
                </span>
              </span>
              <span className="sr-only">{siteName}</span>
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
              {primaryNavigation.map((item) => {
                const active = isCurrentPath(pathname, item.href);

                if (item.href === "/services") {
                  return (
                    <div
                      key={item.href}
                      ref={servicesDropdownRef}
                      className="relative"
                      onMouseEnter={openServicesDropdown}
                      onMouseLeave={scheduleServicesDropdownClose}
                      onFocus={openServicesDropdown}
                      onBlur={handleServicesBlur}
                    >
                      <Link
                        id="services-navigation-trigger"
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                        aria-controls="services-navigation-dropdown"
                        className={desktopNavClassName(active)}
                        onClick={closeMenus}
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={[
                            "text-xs transition-transform",
                            isServicesOpen ? "rotate-180" : "",
                          ]
                            .join(" ")
                            .trim()}
                        >
                          v
                        </span>
                      </Link>

                      {isServicesOpen ? (
                        <div
                          id="services-navigation-dropdown"
                          className="absolute left-1/2 top-full z-[80] w-[22rem] -translate-x-1/2 pt-3"
                        >
                          <div className="rounded-[1.15rem] border border-white/12 bg-[#030504]/98 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl">
                            <p className="px-4 pb-2 pt-1 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-accent">
                              Services
                            </p>
                            <nav
                              aria-label="Services sections"
                              className="grid gap-1"
                            >
                              {servicesNavigation.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className={desktopServiceLinkClassName}
                                  onClick={closeServicesDropdown}
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </nav>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={desktopNavClassName(active)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <CtaLink
                href="/contact#enquiry"
                className={
                  usesV2Header
                    ? "!text-surface-strong hover:!text-surface-strong"
                    : ""
                }
              >
                {siteSettings.ctaLabels.primary}
              </CtaLink>
            </div>

            <button
              type="button"
              className={[
                "inline-flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden",
                usesV2Header
                  ? "border-white/14 text-white hover:border-accent/40 hover:text-accent"
                  : "border-border text-foreground hover:border-accent/40 hover:text-accent-strong",
              ]
                .join(" ")
                .trim()}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-4 rounded-full bg-current" />
                <span className="h-0.5 w-4 rounded-full bg-current" />
                <span className="h-0.5 w-4 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>

        {isOpen ? (
          <div
            className={[
              "mt-3 rounded-[1.5rem] border p-4 shadow-[0_24px_56px_rgba(9,18,13,0.18)] backdrop-blur-xl md:hidden",
              menuPanelClassName,
            ]
              .join(" ")
              .trim()}
          >
            <nav className="grid gap-2">
              {primaryNavigation.map((item) => {
                const active = isCurrentPath(pathname, item.href);

                if (item.href === "/services") {
                  return (
                    <div key={item.href} className="grid gap-2">
                      <button
                        type="button"
                        aria-current={active ? "page" : undefined}
                        aria-expanded={isMobileServicesOpen}
                        aria-controls="mobile-services-navigation"
                        className={[
                          "flex w-full items-center justify-between text-left",
                          mobileNavClassName(active),
                        ]
                          .join(" ")
                          .trim()}
                        onClick={() =>
                          setIsMobileServicesOpen((open) => !open)
                        }
                      >
                        <span>{item.label}</span>
                        <span
                          aria-hidden="true"
                          className={[
                            "text-xs transition-transform",
                            isMobileServicesOpen ? "rotate-180" : "",
                          ]
                            .join(" ")
                            .trim()}
                        >
                          v
                        </span>
                      </button>

                      {isMobileServicesOpen ? (
                        <div
                          id="mobile-services-navigation"
                          className="grid gap-2 rounded-[1.2rem] border border-white/10 bg-[#030504]/92 p-3"
                        >
                          {servicesNavigation.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={mobileServiceLinkClassName}
                              onClick={closeMenus}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={mobileNavClassName(active)}
                    onClick={closeMenus}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4">
              <CtaLink
                href="/contact#enquiry"
                className="w-full !text-surface-strong hover:!text-surface-strong"
                variant="primary"
              >
                {siteSettings.ctaLabels.primary}
              </CtaLink>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
