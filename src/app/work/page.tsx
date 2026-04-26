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
    "Honest example work from Szymik Digital, including clearly labelled internal projects and concept examples that show approach without fake proof.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Example work, shown honestly"
        intro="This page shows Szymik Digital's own internal work and a small number of clearly labelled concept pieces. The aim is to demonstrate structure, judgement, and build quality without pretending early public work is something else."
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
              How this page works
            </p>
            <div className="mt-4 grid gap-3">
              {[
                "Internal means real work created for Szymik Digital itself or for an internal operating tool.",
                "Concept means a deliberate example used to show approach, not a claimed client outcome.",
                "These entries are here to show judgement, structure, and build quality without inventing proof.",
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
          <div className="grid gap-5 xl:grid-cols-2">
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
            intro="For a founder-led studio, credibility comes from being direct about what is public, what is internal, and what is simply there to demonstrate thinking."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
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
              {
                title: "No borrowed credibility",
                description:
                  "This site does not use made-up clients, inflated results, or filler logos to make the portfolio look bigger than it is.",
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
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-end">
              <div>
                <span className="eyebrow text-accent">Next step</span>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Need work that fits your business rather than a generic showcase?
                </h2>
                <p className="panel-dark-copy mt-5 max-w-3xl text-lg leading-8">
                  Start with the actual problem: outdated pages, unclear
                  messaging, messy digital touchpoints, or admin that should be
                  smoother. The project can be shaped from there.
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
