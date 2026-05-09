import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { siteSettings } from "@/lib/site";
import { projects } from "@/lib/work";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "Honest Szymik Digital work examples for small-business websites, local service website foundations, internal workflow support, and practical digital systems.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Practical work, shown honestly"
        intro="This page gives a small foundation for public examples: real client work where it can be described safely, internal Szymik Digital foundations, and clearly labelled concept work for small-business websites and useful systems. No fake clients, fake metrics, or borrowed proof."
        actions={
          <>
            <CtaLink href="/contact#enquiry">
              {siteSettings.ctaLabels.conversation}
            </CtaLink>
            <CtaLink href="/services" variant="secondary">
              {siteSettings.ctaLabels.services}
            </CtaLink>
          </>
        }
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              How this page works
            </p>
            <div className="mt-4 grid gap-3">
              {[
                "Client work is described carefully, without invented numbers or testimonials.",
                "Internal work shows the foundations behind Szymik Digital's own website and delivery process.",
                "Concept work is clearly labelled and used only to show approach for local service businesses, not claimed client delivery.",
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
          <div className="grid gap-4 sm:gap-5 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container">
          <SectionHeading
            eyebrow="Approach"
            title="Why the labels matter"
            intro="For a founder-led studio working with small local businesses, credibility comes from being direct about what is client work, what is internal, and what is simply there to demonstrate thinking."
          />

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {[
              {
                title: "Client work",
                description:
                  "Used only where the work can be described honestly. No fake results, revenue claims, or made-up testimonials are added.",
              },
              {
                title: "Internal work",
                description:
                  "Used when the project is real and genuinely built for Szymik Digital itself or for an internal working system.",
              },
              {
                title: "Concept work",
                description:
                  "Used when a project exists to demonstrate structure, design thinking, or service fit without pretending it is client delivery.",
              },
            ].map((item) => (
              <article key={item.title} className="panel p-5 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
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
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-end">
              <div>
                <span className="eyebrow text-accent">Next step</span>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Have a similar project?
                </h2>
                <p className="panel-dark-copy mt-5 max-w-3xl text-lg leading-8">
                  Start with the actual problem: outdated pages, unclear
                  messaging, messy digital touchpoints, or admin that should be
                  smoother. Not sure what fits? Start with a quick enquiry, then
                  Hannah can help gather the details before Ric reviews the next
                  step.
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
