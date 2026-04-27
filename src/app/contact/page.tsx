import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
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

const enquiryGuidance = [
  "Name, business name, email, and phone if useful",
  "Enquiry type: Website Refresh, Starter Website, Local Growth Website, Automation / Custom Tool Discovery, or Not sure yet",
  "Current website URL, if you already have one",
  "Project description, budget range, timescale, and preferred contact method",
  "Consent for Szymik Digital to respond to the enquiry",
];

const nextSteps = [
  {
    title: "Hannah reviews and logs the enquiry",
    description:
      "The enquiry lands in the main Szymik Digital inbox, then Hannah checks the details and adds it to the tracker for shared review.",
  },
  {
    title: `${siteSettings.founderShortName} reviews the next action`,
    description:
      "Ric reviews the enquiry and Hannah's notes, then decides whether the next step is discovery questions, a call, a quote, or a polite decline.",
  },
  {
    title: "A clear quote and scope are prepared",
    description:
      "The quote explains the outcome, what is included, what is excluded, content responsibilities, review rounds, and the payment approach before work begins.",
  },
  {
    title: "Deposit, build, review, and handover follow",
    description:
      "If you go ahead, the normal path is deposit, build, structured review, final balance, launch, handover, and support options where useful.",
  },
];

const enquiryTemplate = [
  "Name:",
  "Business name:",
  "Email:",
  "Phone:",
  "Enquiry type: Website Refresh / Starter Website / Local Growth Website / Automation / Custom Tool Discovery / Not sure yet",
  "Current website URL, if you have one:",
  "Project description:",
  "Budget range:",
  "Timescale:",
  "Preferred contact method:",
  "Consent: I consent to Szymik Digital using these details to respond to my enquiry.",
].join("\n");

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Start a project with Szymik Digital for a Website Refresh, Starter Website, Local Growth Website, or Automation / Custom Tool Discovery enquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a project"
        intro="Tell Szymik Digital what you need help with: a Website Refresh, Starter Website, Local Growth Website, or Automation / Custom Tool Discovery when the business needs more than a brochure site."
        actions={
          <>
            <CtaLink href="#enquiry">{siteSettings.ctaLabels.enquiry}</CtaLink>
            <CtaLink href={`mailto:${enquiryEmail}`} variant="secondary">
              Email directly
            </CtaLink>
          </>
        }
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Best fit for
            </p>
            <div className="mt-4 grid gap-3">
              {[
                "Small businesses that need a clearer website",
                "Local service businesses that need stronger visibility foundations",
                "Existing websites that feel dated, unclear, or hard to use",
                "Teams with repeated admin or workflow problems worth scoping properly",
              ].map((item) => (
                <p key={item} className="list-check">
                  {item}
                </p>
              ))}
            </div>
          </div>
        }
      />

      <section id="enquiry" className="page-section scroll-mt-28 pt-0">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="space-y-6">
              <article className="panel p-6 sm:p-8">
                <span className="eyebrow">What to include</span>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">
                  A useful enquiry is better than a perfect brief
                </h2>
                <p className="mt-4 text-base leading-8 text-muted">
                  You do not need the exact package name before getting in
                  touch. A few practical details are enough to make the first
                  reply useful.
                </p>
                <div className="mt-5 grid gap-3">
                  {enquiryGuidance.map((item) => (
                    <p key={item} className="list-check">
                      {item}
                    </p>
                  ))}
                </div>
              </article>

              <article className="panel p-6 sm:p-8">
                <span className="eyebrow">Not sure where to start?</span>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">
                  Start with the problem, not the package
                </h2>
                <p className="mt-4 text-base leading-8 text-muted">
                  It is fine if you are not sure whether the right route is a
                  Website Refresh, Starter Website, Local Growth Website, or
                  Automation / Custom Tool Discovery. Describe what feels messy
                  or important, and the first reply can point you toward a
                  sensible next step.
                </p>
              </article>

              <article className="panel p-6 sm:p-8">
                <span className="eyebrow">What happens next</span>
                <div className="mt-5 grid gap-4">
                  {nextSteps.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] bg-background/80 p-5"
                    >
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
                <span className="eyebrow">Email template</span>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">
                  Prefer to write the email yourself?
                </h2>
                <p className="mt-4 text-base leading-8 text-muted">
                  The form prepares a mail draft, but enquiries are handled by
                  email either way. You can copy this structure into your own
                  message if that is easier.
                </p>
                <pre className="mt-5 overflow-x-auto rounded-[1.5rem] border border-border bg-background/80 p-5 whitespace-pre-wrap text-sm leading-7 text-muted">
                  {enquiryTemplate}
                </pre>
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
                      href={`mailto:${enquiryEmail}?subject=${encodeURIComponent("Project enquiry for Szymik Digital")}`}
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
