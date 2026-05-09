"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { CtaLink } from "@/components/cta-link";
import { primaryNavigation, siteName, siteSettings } from "@/lib/site";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[60]">
      <div className="site-container pt-4">
        <div className="rounded-full border border-black/6 bg-white/90 px-3 py-3 shadow-[0_24px_56px_rgba(9,18,13,0.12)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 rounded-full px-2.5 py-2 transition hover:bg-black/5"
              onClick={() => setIsOpen(false)}
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
                <span className="text-foreground">Szymik</span>
                <span className="text-accent-strong">Digital</span>
              </span>
              <span className="sr-only">{siteName}</span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {primaryNavigation.map((item) => {
                const active = isCurrentPath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35",
                      active
                        ? "bg-surface-strong !text-white hover:!text-white focus-visible:!text-white"
                        : "text-muted hover:bg-black/5 hover:text-foreground",
                    ]
                      .join(" ")
                      .trim()}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <CtaLink href="/contact#enquiry">
                {siteSettings.ctaLabels.primary}
              </CtaLink>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:border-accent/40 hover:text-accent-strong md:hidden"
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
          <div className="panel mt-3 p-4 md:hidden">
            <nav className="grid gap-2">
              {primaryNavigation.map((item) => {
                const active = isCurrentPath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "rounded-[1.3rem] px-4 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35",
                      active
                        ? "bg-surface-strong !text-white hover:!text-white focus-visible:!text-white"
                        : "bg-white text-foreground hover:border-accent/40 hover:bg-accent-soft",
                    ]
                      .join(" ")
                      .trim()}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4">
              <CtaLink
                href="/contact#enquiry"
                className="w-full"
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
