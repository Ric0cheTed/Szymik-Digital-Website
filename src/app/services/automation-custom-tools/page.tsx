import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { createPageMetadata } from "@/lib/metadata";

const painPoints = [
  "Repeated admin that eats into useful work",
  "Messy spreadsheets that are hard to trust",
  "Enquiry or project tracking problems",
  "Follow-ups that have to be chased manually",
  "Scattered notes, files, and links",
  "Unclear project or payment status",
  "Copied-and-pasted processes",
  "Business owners losing time to avoidable admin",
];

const practicalExamples = [
  "Enquiry trackers",
  "Local CRM-style tools",
  "Project dashboards",
  "Follow-up systems",
  "Quote and payment status trackers",
  "Content or asset checklists",
  "Internal admin tools",
  "Website intake workflows",
  "Migration or project tracking tools",
];

const discoveryPoints = [
  "Understand the current workflow",
  "Map the real problem",
  "Identify what should stay manual",
  "Find what could be automated or turned into a tool",
  "Scope a small useful first version",
  "Avoid overbuilding too early",
];

const processSteps = [
  "Tell us where the admin is messy",
  "We map the workflow",
  "We suggest a practical first version",
  "We build and test in stages",
  "You use it and improve it over time",
];

export const metadata: Metadata = createPageMetadata({
  title: "Automation and Custom Tools",
  description:
    "Discovery-first automation and custom tool support for small local businesses, including enquiry trackers, dashboards, workflow mapping, and practical admin tools.",
  path: "/services/automation-custom-tools",
});

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
      {children}
    </span>
  );
}

export default function AutomationCustomToolsPage() {
  return (
    <div className="bg-[#030504] text-white">
      <section className="relative -mt-[5.35rem] overflow-hidden border-b border-white/10 px-0 pb-14 pt-30 sm:-mt-[5.8rem] sm:pb-16 sm:pt-36 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,_rgba(87,214,129,0.2),_transparent_30%),linear-gradient(135deg,_#030504_0%,_#07100b_48%,_#090d0a_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(130deg,_transparent_0%,_transparent_54%,_rgba(87,214,129,0.28)_55%,_transparent_56%)]" />
        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.65fr)] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Services / Automation
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">
                Automation and custom tools for{" "}
                <span className="text-accent">smoother business admin.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Szymik Digital helps small and local businesses explore
                practical tools, dashboards, CRM-style systems, automations, and
                workflow improvements that make everyday admin easier to manage.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58">
                This is discovery-first work. The goal is to understand the
                problem clearly, then shape a small useful version before
                anything becomes bigger than it needs to be.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink
                  href="/contact#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Start a project
                </CtaLink>
                <CtaLink
                  href="/services/guide-prices/"
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  View guide prices
                </CtaLink>
              </div>
            </div>

            <aside className="rounded-[1.15rem] border border-accent/22 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Built around the workflow
              </p>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-white/70">
                <p>
                  Not every process should be automated, and not every business
                  needs a custom system.
                </p>
                <p>
                  The useful work is deciding what should change, what should
                  stay simple, and what first version would actually help.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <Eyebrow>Common problems</Eyebrow>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                The signs that admin is starting to cost too much time.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/68">
                These projects usually begin with a business owner, team member,
                or project lead repeating the same manual work more often than
                they should have to.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {painPoints.map((item) => (
                <article
                  key={item}
                  className="rounded-[0.95rem] border border-white/12 bg-white/[0.055] p-4"
                >
                  <p className="text-sm font-semibold leading-7 text-white">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#030504] py-10 sm:py-12">
        <div className="site-container">
          <div className="rounded-[1.25rem] border border-accent/25 bg-[radial-gradient(circle_at_10%_0%,_rgba(87,214,129,0.16),_transparent_28%),linear-gradient(135deg,_rgba(255,255,255,0.07),_rgba(255,255,255,0.035))] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)]">
              <div>
                <Eyebrow>What this can include</Eyebrow>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                  Practical tools for the jobs your website alone cannot do.
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/68">
                  The right answer might be a simple tracker, a clearer intake
                  flow, a dashboard, or a more joined-up admin process. The
                  shape depends on the problem.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {practicalExamples.map((item) => (
                  <article
                    key={item}
                    className="rounded-[0.95rem] border border-white/12 bg-black/18 p-4"
                  >
                    <h3 className="text-sm font-semibold text-white">{item}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <Eyebrow>Discovery first</Eyebrow>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                Start by mapping the work before building the tool.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/68">
                Automation and custom tools are scoped separately from standard
                website projects. The first job is to understand the workflow so
                the solution stays useful and manageable.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {discoveryPoints.map((item) => (
                <article
                  key={item}
                  className="rounded-[0.95rem] border border-white/12 bg-white/[0.055] p-4"
                >
                  <p className="text-sm font-semibold leading-7 text-white">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.62fr)_minmax(0,1.38fr)]">
            <div>
              <Eyebrow>Process</Eyebrow>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                Simple steps for turning a messy process into something usable.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {processSteps.map((step, index) => (
                <article
                  key={step}
                  className="rounded-[0.95rem] border border-white/12 bg-white/[0.055] p-5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-surface-strong">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold leading-6 text-white">
                    {step}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#030504] py-10 sm:py-12">
        <div className="site-container">
          <div className="rounded-[1.25rem] border border-accent/25 bg-[radial-gradient(circle_at_78%_0%,_rgba(87,214,129,0.14),_transparent_28%),linear-gradient(135deg,_rgba(255,255,255,0.07),_rgba(255,255,255,0.035))] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-center">
              <div>
                <Eyebrow>Guide pricing</Eyebrow>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                  Discovery starts from{" "}
                  <span className="text-accent">{"\u00a3250"}</span>.
                </h2>
              </div>
              <div className="grid gap-4 text-sm leading-7 text-white/68">
                <p>
                  Automation / Custom Tool Discovery starts from{" "}
                  <span className="font-semibold text-white">{"\u00a3250"}</span>.
                  Custom Tools / CRM / Dashboards start from{" "}
                  <span className="font-semibold text-white">
                    {"\u00a32,500+"}
                  </span>
                  .
                </p>
                <p>
                  Final quotes depend on the workflow, integrations, data,
                  testing, and support needed. The guide prices page explains
                  the wider pricing context.
                </p>
                <Link
                  href="/services/guide-prices/"
                  className="inline-flex min-h-11 items-center justify-center rounded-[0.8rem] border border-white/16 px-4 text-sm font-semibold text-white transition hover:border-accent/45 hover:text-accent sm:w-fit"
                >
                  View guide prices <span aria-hidden>{">"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="overflow-hidden rounded-[1.35rem] border border-accent/25 bg-[linear-gradient(135deg,_rgba(87,214,129,0.14),_rgba(255,255,255,0.055)_38%,_rgba(5,8,6,0.95)),linear-gradient(130deg,_transparent_0%,_transparent_72%,_rgba(87,214,129,0.32)_73%,_transparent_77%)] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Automation / Custom Tools
                </span>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Got a messy process you want to simplify?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                  Send the rough problem, where the admin gets stuck, and what
                  you wish was easier. The first step is working out whether a
                  small tool or workflow change is worth scoping.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <CtaLink
                  href="/contact#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Start a project
                </CtaLink>
                <CtaLink
                  href="/services/guide-prices/"
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  View guide prices
                </CtaLink>
                <Link
                  href="/services/"
                  className="inline-flex min-h-12 items-center justify-center rounded-[0.85rem] border border-white/22 px-5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Back to services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
