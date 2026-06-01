import type { Metadata } from "next";
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

type ContactOption = {
  label: string;
  value: string;
  detail: string;
  icon: string;
  href?: string;
  planned?: boolean;
};

const contactOptions: ContactOption[] = [
  {
    label: "Project enquiries",
    value: enquiryEmail,
    detail: "Best route for new projects, website reviews, and discovery.",
    href: `mailto:${enquiryEmail}?subject=${encodeURIComponent("Project enquiry for Szymik Digital")}`,
    icon: "@",
  },
  {
    label: "Primary email",
    value: contactEmail,
    detail: "General contact and follow-up messages.",
    href: `mailto:${contactEmail}`,
    icon: "EM",
  },
  ...(secondaryContactEmail
    ? [
        {
          label: "Secondary email",
          value: secondaryContactEmail,
          detail: "Alternative email route if needed.",
          href: `mailto:${secondaryContactEmail}`,
          icon: "2",
        },
      ]
    : []),
  {
    label: "Location / area",
    value: siteSettings.locationText,
    detail: "Local to Todmorden, remote-friendly across the UK.",
    icon: "LO",
  },
  {
    label: "WhatsApp / quick message",
    value: "Planned option",
    detail: "Confirm number and process before publishing.",
    icon: "WA",
    planned: true,
  },
];

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

function ContactOptionCard({
  option,
}: {
  option: ContactOption;
}) {
  const content = (
    <>
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.85rem] border text-xs font-bold ${
          option.planned
            ? "border-white/12 bg-white/[0.045] text-white/58"
            : "border-accent/25 bg-accent/10 text-accent"
        }`}
        aria-hidden
      >
        {option.icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-white">
          {option.label}
        </span>
        <span
          className={`mt-1 block break-words text-sm font-medium ${
            option.planned ? "text-white/58" : "text-accent"
          }`}
        >
          {option.value}
        </span>
        <span className="mt-1.5 block text-xs leading-5 text-white/54">
          {option.detail}
        </span>
      </span>
    </>
  );

  if (option.href) {
    return (
      <a
        href={option.href}
        className="group flex gap-3 rounded-[1rem] border border-white/12 bg-white/[0.055] p-4 transition duration-200 hover:border-accent/35 hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex gap-3 rounded-[1rem] border border-white/10 bg-white/[0.04] p-4">
      {content}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#030504] text-white">
      <section className="relative -mt-[5.35rem] overflow-hidden border-b border-white/10 px-0 pb-12 pt-30 sm:-mt-[5.8rem] sm:pb-14 sm:pt-36 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,_rgba(87,214,129,0.2),_transparent_30%),linear-gradient(135deg,_#030504_0%,_#07100b_50%,_#090d0a_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(130deg,_transparent_0%,_transparent_58%,_rgba(87,214,129,0.28)_59%,_transparent_60%)]" />
        <div className="site-container relative">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.58fr)] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Get in touch
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">
                Let&apos;s talk about your{" "}
                <span className="text-accent">project.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Have a question, want to start a project, or need a website
                review first? Send what you know and Szymik Digital will help
                shape the right next step.
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

            <aside className="rounded-[1.15rem] border border-accent/22 bg-[radial-gradient(circle_at_20%_0%,_rgba(87,214,129,0.18),_transparent_34%),rgba(255,255,255,0.055)] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:p-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Start a project
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">
                A clear route without the hard sell.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                You can start with the problem, the goal, or the thing that
                feels messy. Hannah and Ric review enquiries practically before
                any paid work begins.
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

      <section
        id="enquiry"
        className="scroll-mt-28 border-b border-white/10 bg-[#050806] py-10 sm:py-12"
      >
        <div className="site-container">
          <div className="grid gap-6 xl:grid-cols-[minmax(17rem,0.72fr)_minmax(27rem,1.16fr)_minmax(17rem,0.72fr)] xl:items-start">
            <aside className="space-y-5">
              <article className="rounded-[1.15rem] border border-accent/22 bg-[radial-gradient(circle_at_0%_0%,_rgba(87,214,129,0.13),_transparent_32%),rgba(255,255,255,0.055)] p-5 sm:p-6">
                <Eyebrow>Contact options</Eyebrow>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Pick the route that fits.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  Email is the confirmed enquiry route for now. WhatsApp is
                  noted as a future quick-message option, but it is not live on
                  this preview branch.
                </p>
                <div className="mt-5 grid gap-3">
                  {contactOptions.map((option) => (
                    <ContactOptionCard key={option.label} option={option} />
                  ))}
                </div>
              </article>

              <article className="rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5 sm:p-6">
                <Eyebrow>Project types</Eyebrow>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Choose the closest fit.
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

              {activeSocialLinks.length > 0 ? (
                <article className="rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5 sm:p-6">
                  <Eyebrow>Follow us</Eyebrow>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {activeSocialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="inline-flex min-h-10 items-center rounded-full border border-white/14 bg-black/18 px-4 text-sm font-medium text-white transition hover:border-accent/40 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ) : null}
            </aside>

            <EnquiryForm />

            <aside className="space-y-5">
              <article className="rounded-[1.15rem] border border-accent/25 bg-[linear-gradient(135deg,_rgba(87,214,129,0.14),_rgba(255,255,255,0.055)_42%,_rgba(5,8,6,0.92)),linear-gradient(130deg,_transparent_0%,_transparent_70%,_rgba(87,214,129,0.24)_72%,_transparent_77%)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:p-6">
                <Eyebrow>Start a project</Eyebrow>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Ready to shape the next step?
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  Use the form to explain the project, request a Website
                  Review, or ask which pathway makes most sense.
                </p>
                <div className="mt-5 grid gap-3">
                  <CtaLink
                    href="#enquiry"
                    className="min-h-12 w-full justify-center !text-surface-strong hover:!text-surface-strong"
                  >
                    Send an enquiry
                  </CtaLink>
                  <CtaLink
                    href="/website-review/"
                    variant="secondary"
                    className="min-h-12 w-full justify-center border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                  >
                    Website Review
                  </CtaLink>
                </div>
              </article>

              <article className="rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5 sm:p-6">
                <Eyebrow>What to include</Eyebrow>
                <div className="mt-5 grid gap-3">
                  {enquiryGuidance.map((item) => (
                    <p
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-white/70"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>

              <article className="rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5 sm:p-6">
                <Eyebrow>What happens next</Eyebrow>
                <div className="mt-5 grid gap-3">
                  {nextSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-[0.95rem] border border-white/10 bg-black/18 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-surface-strong">
                          {index + 1}
                        </span>
                        <h3 className="text-sm font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-xs leading-6 text-white/60">
                        {step.description}
                      </p>
                    </div>
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
                  build phase.
                </p>
              </article>

              <details className="rounded-[1.15rem] border border-white/12 bg-white/[0.045] p-5 sm:p-6">
                <summary className="cursor-pointer text-sm font-semibold text-white transition hover:text-accent">
                  Prefer to write the message yourself?
                </summary>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-[0.95rem] border border-white/10 bg-black/22 p-4 text-sm leading-7 text-white/64">
                  {enquiryTemplate}
                </pre>
              </details>
            </aside>
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
