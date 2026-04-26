import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { services, siteSettings } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Website design and build, redesigns, local business websites, digital cleanup, practical systems, and ongoing support from Szymik Digital.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Clear digital work, shaped around real business needs"
        intro="Szymik Digital helps businesses improve how they show up online and how they operate behind the scenes. The work stays practical, founder-led, and focused on what will actually help."
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
                "The website feels outdated or does not reflect the quality of the business",
                "The offer is harder to understand than it should be",
                "Digital touchpoints have become messy or inconsistent over time",
                "Too much repetitive admin is still being handled manually",
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
            title="Six practical service areas"
            intro="Each offer is designed to solve a real problem rather than force the business into a fixed agency package."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
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
                      What it can include
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
                      Good fit if
                    </h3>
                    <p className="mt-4 text-base leading-8 text-muted">
                      {service.fit}
                    </p>
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
                <span className="eyebrow text-accent">Need help choosing?</span>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  The right next step does not need to be overcomplicated
                </h2>
                <p className="panel-dark-copy mt-5 max-w-3xl text-lg leading-8">
                  If the problem is part website, part cleanup, and part
                  operational friction, that is fine. Start with what feels
                  messy now and the right scope can be shaped from there.
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
