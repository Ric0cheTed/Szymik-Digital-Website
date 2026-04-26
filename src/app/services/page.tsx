import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { services, siteSettings } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Website Refresh, Starter Website, Local Growth Website, and Automation / Custom Tool Discovery pathways from Szymik Digital.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical service pathways for websites, local visibility, and useful systems"
        intro="Start with the website and local visibility foundation. When the business has outgrown the basics, automation and custom tool discovery can help shape the next layer."
        actions={
          <>
            <CtaLink href="/contact">{siteSettings.ctaLabels.primary}</CtaLink>
            <CtaLink href="/work" variant="secondary">
              {siteSettings.ctaLabels.work}
            </CtaLink>
          </>
        }
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Typical starting points
            </p>
            <div className="mt-4 grid gap-3">
              {[
                "The current website needs a practical refresh",
                "The business needs its first credible website",
                "Local service pages and trust signals need a stronger structure",
                "Manual admin or scattered tools are starting to slow the business down",
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
          <SectionHeading
            eyebrow="Overview"
            title="Four clear pathways"
            intro="Each pathway maps to a common small-business starting point, from improving an existing site to building a stronger local foundation or exploring practical systems."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="panel block p-6 transition duration-300 hover:-translate-y-1 sm:p-8"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-strong">
                  {service.shortLabel}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-muted">
                  {service.teaser}
                </p>
                <span className="link-arrow mt-6">
                  Explore pathway <span aria-hidden>{">"}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container space-y-5">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="panel scroll-mt-28 p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-strong">
                    {service.shortLabel}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
                    {service.description}
                  </p>
                </div>

                <div className="grid gap-5 rounded-[1.6rem] bg-background/80 p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Who it is for
                    </h3>
                    <p className="mt-4 text-base leading-8 text-muted">
                      {service.bestFor}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      The problem it solves
                    </h3>
                    <p className="mt-4 text-base leading-8 text-muted">
                      {service.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      What Szymik Digital helps with
                    </h3>
                    <div className="mt-4 grid gap-3">
                      {service.includes.map((item) => (
                        <p key={item} className="list-check">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Practical outcome
                    </h3>
                    <p className="mt-4 text-base leading-8 text-muted">
                      {service.outcome}
                    </p>
                  </div>
                  <div>
                    <CtaLink href="/contact">
                      {siteSettings.ctaLabels.primary}
                    </CtaLink>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container">
          <div className="panel-dark px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-end">
              <div>
                <span className="eyebrow text-accent">
                  Not sure where to start?
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  You do not need to choose the package before the first conversation
                </h2>
                <p className="panel-dark-copy mt-5 max-w-3xl text-lg leading-8">
                  If the problem is part website, part local visibility, and
                  part operational friction, that is fine. Start with what
                  feels unclear now and the right scope can be shaped from
                  there.
                </p>
              </div>
              <div>
                <CtaLink href="/contact">{siteSettings.ctaLabels.primary}</CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
