import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { CtaLink } from "@/components/cta-link";
import {
  activeSocialLinks,
  contactEmail,
  footerNavigation,
  secondaryContactEmail,
  siteName,
  siteSettings,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-surface-strong text-white">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
          <div className="max-w-2xl">
            <BrandLogo
              variant="horizontal"
              sizes="220px"
              className="h-auto w-[200px] sm:w-[220px]"
            />
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Modern websites and practical digital systems, delivered directly.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/78">
              Szymik Digital helps businesses improve how they look online and
              how they run behind the scenes, without the waffle, handoffs, or
              overbuilt process.
            </p>
            <div className="mt-8">
              <CtaLink
                href="/contact"
                className="!text-surface-strong hover:!text-surface-strong"
              >
                {siteSettings.ctaLabels.primary}
              </CtaLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
              Pages
            </h3>
            <nav className="mt-5 grid gap-3">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base text-white/78 transition hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
              Business details
            </h3>
            <div className="mt-5 grid gap-5">
              <div className="grid gap-1 text-sm leading-7 text-white/78">
                <p className="font-semibold text-white">
                  {siteSettings.founderName}, {siteSettings.founderRole}
                </p>
                <p>
                  {siteSettings.tagline}. {siteSettings.locationText}.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/45">
                  Primary email
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-3 inline-block text-base font-semibold text-white transition hover:text-accent"
                >
                  {contactEmail}
                </a>
                {secondaryContactEmail ? (
                  <>
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-white/45">
                      Secondary email
                    </p>
                    <a
                      href={`mailto:${secondaryContactEmail}`}
                      className="mt-3 inline-block text-base font-semibold text-white transition hover:text-accent"
                    >
                      {secondaryContactEmail}
                    </a>
                  </>
                ) : null}
                <p className="mt-3 text-sm leading-7 text-white/68">
                  Project enquiries are handled directly, without a sales layer
                  or handoff.
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/45">
                  Public profiles
                </p>
                {activeSocialLinks.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {activeSocialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-accent/35 hover:text-accent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    Public profile links can be added here when they are ready
                    to share.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {siteName}. All rights
            reserved.
          </p>
          <p>
            Founder-led websites, redesigns, cleanup, and practical systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
