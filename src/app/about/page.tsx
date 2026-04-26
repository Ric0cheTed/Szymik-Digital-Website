import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import { siteSettings } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    'Meet Richard "Ric" Szymik and learn why Szymik Digital exists, how founder-led delivery works, and why the studio focuses on practical, long-term digital improvements.',
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A founder-led digital studio built around useful work"
        intro={`Szymik Digital is led by ${siteSettings.founderName} and exists to give growing businesses a more practical kind of digital partner: direct, modern, and focused on work that actually helps.`}
        actions={
          <>
            <CtaLink href="/contact">{siteSettings.ctaLabels.primary}</CtaLink>
            <CtaLink href="/services" variant="secondary">
              {siteSettings.ctaLabels.services}
            </CtaLink>
          </>
        }
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              In practice, that means
            </p>
            <div className="mt-4 grid gap-3">
              {[
                `Working directly with ${siteSettings.founderShortName} from first conversation to delivery`,
                "Keeping decisions grounded in the real business problem",
                "Building for clarity, maintainability, and long-term usefulness",
              ].map((item) => (
                <p key={item} className="list-check">
                  {item}
                </p>
              ))}
            </div>
          </div>
        }
      />

      <section className="page-section pt-0">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <article className="panel p-6 sm:p-8 lg:p-10">
              <span className="eyebrow">Why it exists</span>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                Too many businesses sit between an outdated site and a messy digital setup
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-muted">
                <p>
                  Often the problem is not a lack of ambition. It is that the
                  website no longer reflects the quality of the business, the
                  messaging has become muddled, and too much small admin is still
                  being handled manually behind the scenes.
                </p>
                <p>
                  Szymik Digital exists to be a clearer alternative. The work
                  focuses on modern websites, better structure, cleaner digital
                  touchpoints, and practical systems that remove friction rather
                  than add more complexity.
                </p>
                <p>
                  The studio is built around a simple idea: many businesses do
                  not need an agency layer to get useful results. They need
                  direct thinking, careful execution, and someone close enough
                  to the work to make sensible decisions quickly.
                </p>
              </div>
            </article>

            <article className="panel p-6 sm:p-8 lg:p-10">
              <span className="eyebrow">Founder-led</span>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                You work directly with {siteSettings.founderName}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-muted">
                <p>
                  Szymik Digital is intentionally founder-led. There is no sales
                  layer, no handoff, and no disconnect between the conversation
                  about the project and the person doing the work.
                </p>
                <p>
                  That helps keep decisions faster, clearer, and closer to the
                  actual business need from start to finish.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Clear over clever",
                description:
                  "The site should make the offer easier to understand and the next action easier to take. Complexity only earns its place when it is genuinely useful.",
              },
              {
                title: "Modern, but grounded",
                description:
                  "The goal is a clean, credible presence that feels current without slipping into trend-chasing or overdesigned agency theatrics.",
              },
              {
                title: "Long-term thinking",
                description:
                  "Pages, design systems, and supporting workflows are shaped so the business can extend them over time rather than rebuild from scratch later.",
              },
            ].map((item) => (
              <article key={item.title} className="panel p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container">
          <div className="panel-dark px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
              <div className="flex flex-col items-start gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-[1.8rem] bg-white/10 p-4">
                  <BrandLogo
                    variant="mark"
                    sizes="96px"
                    className="h-auto w-full"
                    alt={`${siteSettings.businessName} logo mark`}
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    {siteSettings.founderName}
                  </p>
                  <p className="panel-dark-muted text-sm">{siteSettings.founderRole}</p>
                </div>
              </div>
              <div>
                <span className="eyebrow text-accent">Founder note</span>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  The aim is simple: make the business look better online and run better behind the scenes
                </h2>
                <p className="panel-dark-copy mt-5 max-w-4xl text-lg leading-8">
                  That is the thinking behind Szymik Digital. Clear delivery,
                  useful design, and practical systems work, led directly by
                  {siteSettings.founderShortName} and built with the long term
                  in mind.
                </p>
                <div className="mt-8">
                  <CtaLink href="/contact">{siteSettings.ctaLabels.primary}</CtaLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
