"use client";

import { openCookieSettings } from "@/components/analytics-consent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="inline-flex min-h-10 items-center text-left text-sm font-medium text-white/68 underline-offset-4 transition hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35"
      onClick={openCookieSettings}
    >
      Cookie settings
    </button>
  );
}
