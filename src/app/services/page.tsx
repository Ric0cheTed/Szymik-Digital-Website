import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { pricingGuidance, services, siteSettings } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Small Business Website Services",
  description:
    "Website refreshes, starter websites, local growth websites, and automation/custom tool discovery for small local businesses, based in Todmorden, West Yorkshire.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Website refreshes, starter websites, local growth support, and useful systems"
        intro="Practical website and digital support for small local businesses, service businesses, trades, care/support providers, sole traders, and local organisations. Each enquiry is reviewed before a clear quote is prepared, so the scope, next steps, and payment approach are agreed before work begins."
        actions={
          <>
            <CtaLink href="/contact#enquiry">
              {siteSettings.ctaLabels.primary}
            </CtaLink>
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
                "A sole trader or small team needs its first credible website",
                "Local service pages, service areas, and trust signals need a stronger structure",
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
            title="Four clear pathways, one simple starting point"
            intro="Each pathway maps to a common small-business problem: a tired site, no proper website yet, weak local visibility, or repeated admin that needs understanding. You do not need to pick perfectly before getting in touch."
          />

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="panel block p-5 transition duration-300 hover:-translate-y-1 sm:p-8"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-strong">
                  {service.shortLabel}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-foreground sm:mt-4 sm:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
                  {service.teaser}
                </p>
                <span className="link-arrow mt-5 sm:mt-6">
                  Explore pathway <span aria-hidden>{">"}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container space-y-4 sm:space-y-5">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="panel scroll-mt-28 p-5 sm:p-8 lg:p-10"
            >
              <div className="grid gap-6 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-7 xl:grid-cols-[minmax(18rem,0.66fr)_minmax(0,1.34fr)]">
                <div className="grid content-start gap-5 sm:gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-strong">
                      {service.shortLabel}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-foreground sm:mt-4 sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:mt-5 sm:text-base sm:leading-8">
                      {service.description}
                    </p>
                  </div>

                  <div className="border-t border-border pt-5 sm:pt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground sm:text-lg sm:normal-case sm:tracking-normal">
                      Practical outcome
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
                      {service.outcome}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 rounded-[1.4rem] bg-background/80 p-5 sm:gap-5 sm:rounded-[1.6rem] sm:p-6 lg:grid-cols-2 lg:items-start">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground sm:text-lg sm:normal-case sm:tracking-normal">
                      Who it is for
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
                      {service.bestFor}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground sm:text-lg sm:normal-case sm:tracking-normal">
                      The problem it solves
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
                      {service.problem}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground sm:text-lg sm:normal-case sm:tracking-normal">
                      What Szymik Digital helps with
                    </h3>
                    <div className="mt-3 grid gap-2 sm:mt-4 sm:gap-3 lg:grid-cols-2">
                      {service.includes.map((item) => (
                        <p key={item} className="list-check">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground sm:text-lg sm:normal-case sm:tracking-normal">
                      Best next step
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
                      {service.nextStep}
                    </p>
                  </div>
                  <div className="pt-1 lg:col-span-2">
                    <CtaLink href="/contact#enquiry">
                      {siteSettings.ctaLabels.conversation}
                    </CtaLink>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="page-section scroll-mt-28 pt-0">
        <div className="site-container">
          <SectionHeading
            eyebrow="Pricing guidance"
            title="Starting points before a written quote"
            intro="These are guide prices, not instant quotes or rigid packages. Website refreshes, starter websites, local growth projects, and discovery work all vary depending on scope, content, technical needs, and how much is already ready. Szymik Digital reviews each enquiry before confirming a clear written quote."
          />

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
            {pricingGuidance.map((item) => (
              <article key={item.serviceId} className="panel p-5 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-strong">
                      {item.title}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                      {item.startingFrom}
                    </h3>
                  </div>
                  <a
                    href={`#${item.serviceId}`}
                    className="link-arrow shrink-0"
                  >
                    View pathway <span aria-hidden>{">"}</span>
                  </a>
                </div>

                <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground sm:text-base sm:normal-case sm:tracking-normal">
                      Best fit
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.bestFit}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground sm:text-base sm:normal-case sm:tracking-normal">
                      What can affect price
                    </h4>
                    <div className="mt-2 grid gap-2">
                      {item.priceFactors.map((factor) => (
                        <p key={factor} className="list-check">
                          {factor}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.35rem] border border-border bg-background/80 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                    After enquiry
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {item.afterEnquiry}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-4 rounded-[1.5rem] border border-border bg-white/70 p-5 sm:mt-6 sm:grid-cols-3 sm:p-6">
            {[
              "Every suitable project gets a written quote before paid work starts.",
              "Deposit or payment terms are confirmed before build work begins.",
              "Extra work outside the agreed scope is discussed before being added.",
            ].map((item) => (
              <p key={item} className="list-check">
                {item}
              </p>
            ))}
          </div>
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
                  Not sure yet? Start with a quick enquiry
                </h2>
                <p className="panel-dark-copy mt-4 max-w-3xl text-sm leading-7 sm:mt-5 sm:text-lg sm:leading-8">
                  If the problem is part website, part local visibility, and
                  part operational friction, that is fine. Start with what
                  feels unclear now, whether you are local to Todmorden and
                  West Yorkshire or need remote-friendly support elsewhere in
                  the UK. Szymik Digital can review the enquiry, ask for any
                  missing details, and shape a written scope before any paid
                  work starts.
                </p>
              </div>
              <div>
                <CtaLink href="/contact#enquiry">
                  {siteSettings.ctaLabels.enquiry}
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
