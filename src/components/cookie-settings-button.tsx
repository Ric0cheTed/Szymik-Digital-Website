"use client";

import { openCookieSettings } from "@/components/analytics-consent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="text-left text-sm text-white/50 underline-offset-4 transition hover:text-accent hover:underline"
      onClick={openCookieSettings}
    >
      Cookie settings
    </button>
  );
}
