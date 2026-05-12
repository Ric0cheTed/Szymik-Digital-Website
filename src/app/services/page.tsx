import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { createPageMetadata } from "@/lib/metadata";
import { services } from "@/lib/site";

const choosePath = [
  {
    need: "Existing site, but it feels weak",
    serviceId: "website-refresh",
    service: "Website Refresh",
  },
  {
    need: "No proper site yet",
    serviceId: "starter-website",
    service: "Starter Website",
  },
  {
    need: "Want more local enquiries",
    serviceId: "local-growth",
    service: "Local Growth Website",
  },
  {
    need: "Repeated admin or process pain",
    serviceId: "automation-tools",
    service: "Automation / Custom Tool Discovery",
  },
];

const deliverySteps = [
  "Brief",
  "Concept Preview",
  "Direction lock",
  "Build",
  "Review",
  "Launch / handover",
];

const trustItems = [
  "Clear process",
  "Honest guidance",
  "Practical outcomes",
  "Local-business focus",
  "Built to be manageable after launch",
];

const libraProofStats = [
  { value: "130", label: "UK active users" },
  { value: "396", label: "home page views" },
  { value: "98", label: "contact page views" },
  { value: "93", label: "Organic Search sessions" },
];

const serviceIcon: Record<string, string> = {
  "website-refresh": "screen",
  "starter-website": "rocket",
  "local-growth": "chart",
  "automation-tools": "gear",
};

export const metadata: Metadata = createPageMetadata({
  title: "Small Business Website Services",
  description:
    "Website refreshes, starter websites, local growth websites, and automation/custom tool discovery for small local businesses, based in Todmorden, West Yorkshire.",
  path: "/services",
});

function LineIcon({ name }: { name: string }) {
  const className = "h-8 w-8 text-accent";

  if (name === "rocket") {
    return (
      <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M20 5c-5 1-9 5-11 10l8 8c5-2 9-6 10-11l-7-7Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M10 22 6 26M19 11h.1" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 24h20M8 22l5-6 4 3 7-10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M23 9h3v3" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "gear") {
    return (
      <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M24.5 7.5l-2.8 2.8M10.3 21.7l-2.8 2.8"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M6 8h20v15H6V8Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M11 27h10M14 23v4M18 23v4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
      {children}
    </span>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[#030504] text-white">
      <section className="relative -mt-[5.35rem] overflow-hidden border-b border-white/10 px-0 pb-14 pt-30 sm:-mt-[5.8rem] sm:pb-16 sm:pt-36 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,_rgba(87,214,129,0.2),_transparent_30%),linear-gradient(135deg,_#030504_0%,_#07100b_48%,_#090d0a_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(130deg,_transparent_0%,_transparent_54%,_rgba(87,214,129,0.28)_55%,_transparent_56%)]" />
        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.72fr)] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Services
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">
                Websites and digital support built around{" "}
                <span className="text-accent">real business needs.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Szymik Digital helps local businesses improve their online
                presence, win trust, and make their digital setup easier to
                manage.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink
                  href="/contact#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Start a project
                </CtaLink>
                <CtaLink
                  href="/work"
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  View our work
                </CtaLink>
              </div>
            </div>

            <div className="grid gap-4">
              <article className="overflow-hidden rounded-[1.15rem] border border-accent/25 bg-[radial-gradient(circle_at_70%_0%,_rgba(87,214,129,0.18),_transparent_28%),linear-gradient(135deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.035))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      Real-world traction
                    </p>
                    <h2 className="mt-3 text-xl font-semibold text-white">
                      What better visibility can look like
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-white/68">
                      Libra Support Services - last 28 days. A clearer
                      local-facing website can create more visibility and more
                      chances for people to get in touch.
                    </p>
                  </div>

                  <div className="rounded-[0.95rem] border border-white/12 bg-black/24 p-2">
                    <Image
                      src="/images/proof/libra-analytics-overview.png"
                      alt="Libra Support Services analytics overview showing active users, page views, and traffic channels from the last 28 days."
                      width={920}
                      height={520}
                      className="h-auto w-full rounded-[0.7rem] border border-white/10 object-cover"
                      sizes="(min-width: 1024px) 32rem, 100vw"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {libraProofStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[0.85rem] border border-accent/18 bg-accent/10 p-3"
                      >
                        <p className="text-xl font-semibold text-accent">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/62">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs leading-6 text-white/46">
                    Analytics are a snapshot, not a guaranteed result. They are
                    used here as practical proof of visibility from real local
                    website work.
                  </p>
                </div>
              </article>

              <aside className="rounded-[1.15rem] border border-accent/22 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Start with the problem
                </p>
                <div className="mt-5 grid gap-3 text-sm leading-7 text-white/70">
                  <p>
                    Outdated website, no proper site yet, weak local enquiry
                    flow, or repeated admin that needs clarity.
                  </p>
                  <p>
                    You do not need to choose perfectly before getting in touch.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <Eyebrow>Service pathways</Eyebrow>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
            Four clear routes for different stages of a local business.
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.22)] sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="shrink-0 rounded-[0.9rem] border border-accent/20 bg-accent/10 p-3">
                    <LineIcon name={serviceIcon[service.id] ?? "screen"} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                      {service.shortLabel}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[0.95rem] border border-white/10 bg-black/18 p-4">
                    <h4 className="text-sm font-semibold text-white">Best for</h4>
                    <p className="mt-2 text-sm leading-7 text-white/64">
                      {service.bestFor}
                    </p>
                  </div>
                  <div className="rounded-[0.95rem] border border-white/10 bg-black/18 p-4">
                    <h4 className="text-sm font-semibold text-white">
                      Practical outcome
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-white/64">
                      {service.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-white">
                    What it can include
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.includes.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-accent/22 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xl text-sm leading-7 text-white/58">
                    {service.nextStep}
                  </p>
                  <Link
                    href="/contact#enquiry"
                    className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-[0.75rem] border border-white/16 px-4 text-sm font-semibold text-white transition hover:border-accent/45 hover:text-accent"
                  >
                    Discuss this path <span aria-hidden>{">"}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="rounded-[1.25rem] border border-accent/25 bg-[radial-gradient(circle_at_28%_0%,_rgba(87,214,129,0.15),_transparent_24%),linear-gradient(135deg,_rgba(255,255,255,0.07),_rgba(255,255,255,0.035))] p-6 sm:p-8 lg:p-10">
            <Eyebrow>How to choose</Eyebrow>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
              Match the pathway to what feels most urgent.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {choosePath.map((item) => (
                <Link
                  key={item.serviceId}
                  href={`#${item.serviceId}`}
                  className="rounded-[0.95rem] border border-white/12 bg-black/18 p-5 transition hover:border-accent/35"
                >
                  <p className="text-sm leading-7 text-white/68">{item.need}</p>
                  <p className="mt-4 text-base font-semibold text-accent">
                    {item.service} <span aria-hidden>{">"}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <Eyebrow>Delivery process</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Concept Preview before build where it helps.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/68">
                For visual direction and larger website decisions, Szymik
                Digital can use Concept Preview before build so the style,
                structure, and expectations are clear.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {deliverySteps.map((step, index) => (
                <article
                  key={step}
                  className="rounded-[0.95rem] border border-white/12 bg-white/[0.055] p-5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-surface-strong">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {step}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="rounded-[1.25rem] border border-accent/25 bg-[radial-gradient(circle_at_42%_0%,_rgba(87,214,129,0.13),_transparent_26%),linear-gradient(135deg,_rgba(255,255,255,0.07),_rgba(255,255,255,0.035))] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)]">
              <div>
                <Eyebrow>Practical support</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Built for local businesses that need the site to stay useful.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                {trustItems.map((item) => (
                  <article key={item} className="rounded-[0.95rem] border border-white/12 bg-black/18 p-4">
                    <h3 className="text-sm font-semibold text-white">{item}</h3>
                  </article>
                ))}
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
                  Not sure yet?
                </span>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Not sure which service fits?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                  Start with what feels outdated, unclear, or too manual. The
                  right pathway can be shaped after the enquiry is reviewed.
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
                  href="/contact"
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  Send an enquiry
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
