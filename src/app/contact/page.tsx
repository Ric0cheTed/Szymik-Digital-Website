import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { EnquiryForm } from "@/components/enquiry-form";
import { createPageMetadata } from "@/lib/metadata";
import {
  activeSocialLinks,
  contactEmail,
  enquiryEmail,
  secondaryContactEmail,
  siteSettings,
} from "@/lib/site";

const enquiryGuidance = [
  "Your business name, website link if you have one, and location or service area",
  "The closest pathway: Website Review, Website Refresh, Starter Website, Local Growth Website, Automation / Custom Tool Discovery, or Not sure yet",
  "What feels outdated, unclear, too manual, or important to improve",
  "Any rough timescale, budget range, goals, or practical constraints",
];

const nextSteps = [
  {
    title: "Send your enquiry",
    description:
      "Share what you know. It does not need to be a perfect brief, and it is fine to say you are not sure which pathway fits.",
  },
  {
    title: "Hannah and Ric review it",
    description:
      "Hannah helps triage the details, then Ric reviews the need, likely scope, technical shape, and best next step.",
  },
  {
    title: "We confirm the right route",
    description:
      "That might be a few follow-up questions, a call, a quote, discovery, or honest guidance if another route makes more sense.",
  },
  {
    title: "Quote, discovery, or project start",
    description:
      "No paid work starts from the form. Scope, terms, responsibilities, and next steps are agreed before anything begins.",
  },
];

const projectTypes = [
  "Website Review",
  "Website Refresh",
  "Starter Website",
  "Local Growth Website",
  "Automation / Custom Tool Discovery",
  "Not sure yet",
];

const enquiryTemplate = [
  "Name:",
  "Business name:",
  "Email:",
  "Phone:",
  "Enquiry type: Website Review / Website Refresh / Starter Website / Local Growth Website / Automation / Custom Tool Discovery / Not sure yet",
  "Current website URL, if you have one:",
  "Location or service area, if relevant:",
  "What do you want improved, fixed, clarified, or made easier?",
  "Project description:",
  "Budget range, if known:",
  "Timescale:",
  "Preferred contact method:",
  "Consent: I consent to Szymik Digital using these details to respond to my enquiry.",
].join("\n");

export const metadata: Metadata = createPageMetadata({
  title: "Contact Szymik Digital",
  description:
    "Send an enquiry for a website review, website refresh, starter website, local growth website, or automation/custom tool discovery with Szymik Digital in Todmorden, West Yorkshire.",
  path: "/contact",
});

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
      {children}
    </span>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#030504] text-white">
      <section className="relative -mt-[5.35rem] overflow-hidden border-b border-white/10 px-0 pb-14 pt-30 sm:-mt-[5.8rem] sm:pb-16 sm:pt-36 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,_rgba(87,214,129,0.2),_transparent_30%),linear-gradient(135deg,_#030504_0%,_#07100b_50%,_#090d0a_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(130deg,_transparent_0%,_transparent_58%,_rgba(87,214,129,0.28)_59%,_transparent_60%)]" />
        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.72fr)] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Contact / Enquiry
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">
                Tell us what you&apos;re{" "}
                <span className="text-accent">building.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Start a low-pressure conversation about a website refresh,
                starter website, local growth website, or practical digital
                tool. Szymik Digital helps local businesses look clearer, more
                trusted, and easier to work with online.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink
                  href="#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Start a project
                </CtaLink>
                <CtaLink
                  href={`mailto:${enquiryEmail}`}
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  Email directly
                </CtaLink>
              </div>
            </div>

            <aside className="rounded-[1.15rem] border border-accent/22 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                No pressure first step
              </p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                You can start with the problem, the goal, or the thing that
                feels messy. Hannah and Ric review enquiries practically and
                confirm a sensible next step before any paid work begins.
              </p>
              <div className="mt-5 grid gap-2">
                {["Clear next steps", "Honest guidance", "Local-business focus"].map(
                  (item) => (
                    <p key={item} className="flex items-center gap-3 text-sm text-white/74">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {item}
                    </p>
                  ),
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.62fr)_minmax(0,1.38fr)]">
            <div>
              <Eyebrow>What happens next</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                A clear enquiry flow, without the hard sell.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/68">
                The form creates an email draft so the message stays visible
                and editable. From there, Szymik Digital can review the details
                and recommend the right next step.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {nextSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[0.95rem] border border-white/12 bg-white/[0.055] p-5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-surface-strong">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="enquiry"
        className="scroll-mt-28 border-b border-white/10 bg-[#050806] py-10 sm:py-12"
      >
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
            <div className="space-y-5">
              <article className="rounded-[1.15rem] border border-accent/25 bg-[radial-gradient(circle_at_20%_0%,_rgba(87,214,129,0.13),_transparent_28%),linear-gradient(135deg,_rgba(255,255,255,0.07),_rgba(255,255,255,0.035))] p-5 sm:p-6">
                <Eyebrow>What to include</Eyebrow>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  A useful enquiry beats a perfect brief.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  Share enough practical context to make the first reply useful.
                  It is completely fine if the answer is still &quot;not sure
                  yet&quot;.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/64">
                  Already have a website? You can also{" "}
                  <Link
                    href="/website-review/"
                    className="font-semibold text-accent transition hover:text-white"
                  >
                    ask for a website review
                  </Link>{" "}
                  before choosing a larger project path.
                </p>
                <div className="mt-5 grid gap-3">
                  {enquiryGuidance.map((item) => (
                    <p key={item} className="flex gap-3 text-sm leading-7 text-white/70">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>

              <article className="rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5 sm:p-6">
                <Eyebrow>Project types</Eyebrow>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Choose the closest fit, or choose not sure yet.
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {projectTypes.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-accent/22 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              <article className="rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5 sm:p-6">
                <Eyebrow>Concept Preview</Eyebrow>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Direction can be aligned before build.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  For suitable projects, Szymik Digital may use a Concept
                  Preview to align style, structure, and expectations before the
                  build phase. It is a workflow benefit, not a promise that
                  every enquiry includes the same deliverable.
                </p>
              </article>

              <article className="rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5 sm:p-6">
                <Eyebrow>Direct contact</Eyebrow>
                <div className="mt-4 grid gap-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/48">
                      Project enquiries
                    </p>
                    <a
                      href={`mailto:${enquiryEmail}?subject=${encodeURIComponent("Project enquiry for Szymik Digital")}`}
                      className="mt-2 inline-block text-lg font-semibold text-accent transition hover:text-white"
                    >
                      {enquiryEmail}
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/48">
                      Primary email
                    </p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="mt-2 inline-block text-lg font-semibold text-accent transition hover:text-white"
                    >
                      {contactEmail}
                    </a>
                  </div>
                  {secondaryContactEmail ? (
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/48">
                        Secondary email
                      </p>
                      <a
                        href={`mailto:${secondaryContactEmail}`}
                        className="mt-2 inline-block text-lg font-semibold text-accent transition hover:text-white"
                      >
                        {secondaryContactEmail}
                      </a>
                    </div>
                  ) : null}
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/48">
                      Location
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/68">
                      {siteSettings.locationText}
                    </p>
                  </div>
                  {activeSocialLinks.length > 0 ? (
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/48">
                        Public profiles
                      </p>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {activeSocialLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="inline-flex min-h-10 items-center rounded-full border border-white/14 bg-black/18 px-4 text-sm font-medium text-white transition hover:border-accent/40 hover:text-accent"
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

              <article className="rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5 sm:p-6">
                <Eyebrow>Email template</Eyebrow>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Prefer to write the message yourself?
                </h2>
                <pre className="mt-4 overflow-x-auto rounded-[0.95rem] border border-white/10 bg-black/22 p-4 whitespace-pre-wrap text-sm leading-7 text-white/64">
                  {enquiryTemplate}
                </pre>
              </article>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="overflow-hidden rounded-[1.35rem] border border-accent/25 bg-[linear-gradient(135deg,_rgba(87,214,129,0.14),_rgba(255,255,255,0.055)_38%,_rgba(5,8,6,0.95)),linear-gradient(130deg,_transparent_0%,_transparent_72%,_rgba(87,214,129,0.32)_73%,_transparent_77%)] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Not sure yet?
                </span>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Send what you know. We&apos;ll help point you in the right
                  direction.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                  A first enquiry can simply describe the business, the problem,
                  and what would feel useful. The next step can be shaped after
                  review.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <CtaLink
                  href="#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Start a project
                </CtaLink>
                <CtaLink
                  href={`mailto:${enquiryEmail}`}
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  Email directly
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
