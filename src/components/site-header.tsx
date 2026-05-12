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
  const isHome = pathname === "/";
  const headerShellClassName = isHome
    ? "border-b border-white/10 bg-[#030504]/94 shadow-none"
    : "border border-black/6 bg-white/90 shadow-[0_24px_56px_rgba(9,18,13,0.12)]";
  const brandHoverClassName = isHome ? "hover:bg-white/10" : "hover:bg-black/5";
  const menuPanelClassName = isHome
    ? "border-white/10 bg-[#030504]/96"
    : "border-border/80 bg-white/90";

  return (
    <header
      className={[
        "sticky top-0 z-[60]",
        isHome ? "bg-[#030504]/94 backdrop-blur-xl" : "",
      ]
        .join(" ")
        .trim()}
    >
      <div className={isHome ? "site-container" : "site-container pt-3 sm:pt-4"}>
        <div
          className={[
            isHome
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
                <span className={isHome ? "text-white" : "text-foreground"}>
                  Szymik
                </span>
                <span className={isHome ? "text-accent" : "text-accent-strong"}>
                  Digital
                </span>
              </span>
              <span className="sr-only">{siteName}</span>
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
              {primaryNavigation.map((item) => {
                const active = isCurrentPath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45",
                      active
                        ? isHome
                          ? "border border-accent/45 bg-accent/16 !text-white shadow-[inset_0_-2px_0_#57d681] hover:!text-white focus-visible:!text-white"
                          : "bg-surface-strong !text-white hover:!text-white focus-visible:!text-white"
                        : isHome
                          ? "!text-white/78 hover:bg-white/10 hover:!text-white"
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
              <CtaLink
                href="/contact#enquiry"
                className={isHome ? "!text-surface-strong hover:!text-surface-strong" : ""}
              >
                {siteSettings.ctaLabels.primary}
              </CtaLink>
            </div>

            <button
              type="button"
              className={[
                "inline-flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden",
                isHome
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

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "rounded-[1.3rem] px-4 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35",
                      active
                        ? isHome
                          ? "border border-accent/45 bg-accent/16 !text-white shadow-[inset_3px_0_0_#57d681] hover:!text-white focus-visible:!text-white"
                          : "bg-surface-strong !text-white hover:!text-white focus-visible:!text-white"
                        : isHome
                          ? "bg-white/8 !text-white/82 hover:bg-white/12 hover:!text-white"
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
