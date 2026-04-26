import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import {
  activeSocialLinks,
  contactEmail,
  enquiryEmail,
  secondaryContactEmail,
  siteSettings,
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Start a project with Szymik Digital using the enquiry form, direct email, and clear founder-led next-step guidance.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start your project"
        intro="If the website feels outdated, the messaging is unclear, or the setup behind the scenes is harder than it should be, this is the right place to begin. The process stays direct, practical, and founder-led from the start."
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Best fit for
            </p>
            <div className="mt-4 grid gap-3">
              {[
                "New websites and redesigns that need clear direction",
                "Businesses whose digital presence feels messy or inconsistent",
                "Teams dealing with repetitive admin or clunky workflows",
                "Founders or teams who want direct contact rather than an agency relay",
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
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="space-y-6">
              <article className="panel p-6 sm:p-8">
                <span className="eyebrow">Project fit</span>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">
                  A strong starting point is better than a polished brief
                </h2>
                <p className="mt-4 text-base leading-8 text-muted">
                  You do not need every detail figured out before getting in
                  touch. The most helpful starting point is a clear view of what
                  feels outdated, unclear, inconsistent, or heavier than it
                  should be.
                </p>
                <p className="mt-4 text-base leading-8 text-muted">
                  If there is a real business problem to solve and room to make
                  practical decisions, that is usually enough to begin a useful
                  conversation.
                </p>
              </article>

              <article className="panel p-6 sm:p-8">
                <span className="eyebrow">What happens next</span>
                <div className="mt-5 grid gap-4">
                  {[
                    {
                      title: "The form opens a prepared email draft",
                      description: `When you submit the form, your email app opens a draft addressed to ${enquiryEmail} with the enquiry details already structured.`,
                    },
                    {
                      title: `${siteSettings.founderName} reviews the enquiry personally`,
                      description:
                        "The first pass is about understanding the problem, the likely fit, and whether the next step should be a call, a proposal, or a simple recommendation.",
                    },
                    {
                      title: "The conversation stays practical",
                      description:
                        "If the project looks like a good fit, the next discussion focuses on goals, blockers, priorities, and what a sensible scope would actually look like.",
                    },
                    {
                      title: "You get a clear next step",
                      description:
                        "That might be a proposal, a phased recommendation, or a more focused direction on what should be fixed first.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[1.5rem] bg-background/80 p-5">
                      <h2 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-base leading-8 text-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="panel p-6 sm:p-8">
                <span className="eyebrow">Direct contact</span>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">
                  Prefer to contact {siteSettings.founderShortName} directly?
                </h2>
                <div className="mt-5 grid gap-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                      Primary email
                    </p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="mt-3 inline-block text-lg font-semibold text-accent-strong transition hover:text-foreground"
                    >
                      {contactEmail}
                    </a>
                  </div>
                  {secondaryContactEmail ? (
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                        Secondary email
                      </p>
                      <a
                        href={`mailto:${secondaryContactEmail}`}
                        className="mt-3 inline-block text-lg font-semibold text-accent-strong transition hover:text-foreground"
                      >
                        {secondaryContactEmail}
                      </a>
                    </div>
                  ) : null}
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                      Best inbox for project enquiries
                    </p>
                    <a
                      href={`mailto:${enquiryEmail}`}
                      className="mt-3 inline-block text-base font-semibold text-accent-strong transition hover:text-foreground"
                    >
                      {enquiryEmail}
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                      Location
                    </p>
                    <p className="mt-3 text-base leading-8 text-muted">
                      {siteSettings.locationText}
                    </p>
                  </div>
                  {activeSocialLinks.length > 0 ? (
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                        Public profiles
                      </p>
                      <p className="mt-3 text-base leading-8 text-muted">
                        LinkedIn and Facebook are there if you want a quick
                        public reference point before getting in touch.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {activeSocialLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent-strong"
                            target="_blank"
                            rel="noreferrer"
                          >
                            View {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
