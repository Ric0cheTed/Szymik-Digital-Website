import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { createPageMetadata } from "@/lib/metadata";
import { services } from "@/lib/site";

const selectedWork = [
  {
    title: "Bent Burger",
    label: "Concept preview",
    category: "Takeaway website concept",
    image: "/images/work/bent-burger-preview.png",
    alt: "Bent Burger takeaway website concept preview",
    summary: "Takeaway website concept",
    detail:
      "Shown as a concept preview, not a claimed paid case study or measured result.",
  },
  {
    title: "Country Pizza",
    label: "Website refresh",
    category: "Restaurant website concept",
    image: "/images/work/country-pizza-preview.png",
    alt: "Country Pizza restaurant website concept preview",
    summary: "Restaurant website concept",
    detail:
      "Presented as restaurant website concept and refresh direction without invented metrics.",
  },
  {
    title: "Libra Support Services",
    label: "Local business website",
    category: "Home care website",
    image: "/images/work/libra-support-preview.png",
    alt: "Libra Support Services home care website preview",
    summary: "Home care website",
    detail:
      "Real local-business website work referenced cautiously without overstated case-study claims.",
  },
];

const heroTrust = [
  {
    title: "Local focus",
    copy: "Real businesses. Real context.",
    icon: "shield",
  },
  {
    title: "Modern & reliable",
    copy: "Websites built to look great and perform.",
    icon: "star",
  },
  {
    title: "Honest support",
    copy: "Clear advice before and after launch.",
    icon: "chat",
  },
];

const trustItems = [
  {
    title: "Modern Design",
    copy: "Clean, professional websites that reflect the quality of your business.",
    icon: "brush",
  },
  {
    title: "Clear Process",
    copy: "Straightforward steps, clear updates, and no jargon.",
    icon: "check",
  },
  {
    title: "Practical Results",
    copy: "Websites and tools built to help you get more enquiries and save time.",
    icon: "chart",
  },
  {
    title: "Local Focus",
    copy: "We understand local markets and what your customers value.",
    icon: "pin",
  },
  {
    title: "Honest Support",
    copy: "Reliable, approachable support before, during, and after launch.",
    icon: "heart",
  },
];

const processSteps = [
  {
    title: "Enquiry",
    copy: "You get in touch and share your goals.",
  },
  {
    title: "Review",
    copy: "We review your needs and current setup.",
  },
  {
    title: "Proposal",
    copy: "You receive a clear plan and quote.",
  },
  {
    title: "Build",
    copy: "We design and build your solution.",
  },
  {
    title: "Feedback",
    copy: "You review and we refine as needed.",
  },
  {
    title: "Launch",
    copy: "We go live and support your growth.",
  },
];

const serviceAccent: Record<string, string> = {
  "website-refresh": "screen",
  "starter-website": "rocket",
  "local-growth": "chart",
  "automation-tools": "gear",
};

const homepageServiceLinks: Record<string, string> = {
  "website-refresh": "/services/#website-refresh",
  "starter-website": "/services/#starter-website",
  "local-growth": "/services/#local-growth-website",
  "automation-tools": "/services/automation-custom-tools/",
};

function LineIcon({ name }: { name: string }) {
  const baseClassName = "h-8 w-8 text-accent";

  if (name === "shield") {
    return (
      <svg className={baseClassName} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 4 26 8v7c0 6.2-4 10.4-10 13-6-2.6-10-6.8-10-13V8l10-4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="m11 16 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "star") {
    return (
      <svg className={baseClassName} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="m16 4 3.4 7 7.6 1.1-5.5 5.4 1.3 7.5-6.8-3.6L9.2 25l1.3-7.5L5 12.1 12.6 11 16 4Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "chat") {
    return (
      <svg className={baseClassName} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M6 8h20v13H14l-6 5v-5H6V8Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M11 14h10M11 18h6" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "rocket") {
    return (
      <svg className={baseClassName} viewBox="0 0 32 32" aria-hidden="true">
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
      <svg className={baseClassName} viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 24h20M8 22l5-6 4 3 7-10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M23 9h3v3" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "gear") {
    return (
      <svg className={baseClassName} viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M24.5 7.5l-2.8 2.8M10.3 21.7l-2.8 2.8"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "brush") {
    return (
      <svg className={baseClassName} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M20 5 27 12 13 26H6v-7L20 5Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg className={baseClassName} viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="m10 16 4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg className={baseClassName} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 28s9-8.2 9-15A9 9 0 0 0 7 13c0 6.8 9 15 9 15Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="16" cy="13" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg className={baseClassName} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 26S6 20 6 12.5C6 8 11.5 6.5 16 11c4.5-4.5 10-3 10 1.5C26 20 16 26 16 26Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg className={baseClassName} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M6 8h20v16H6V8Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 25h12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function BrowserFrame({
  work,
  className = "",
  priority = false,
}: {
  work: (typeof selectedWork)[number];
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={[
        "overflow-hidden rounded-[0.9rem] border border-white/18 bg-[#111a14] shadow-[0_24px_70px_rgba(0,0,0,0.5)]",
        className,
      ]
        .join(" ")
        .trim()}
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-black/55 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-300/80" />
          <span className="h-2 w-2 rounded-full bg-accent" />
        </div>
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/46">
          {work.title}
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-black">
        <Image
          src={work.image}
          alt={work.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 76vw, 92vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

function WorkCard({ work }: { work: (typeof selectedWork)[number] }) {
  return (
    <Link
      href="/work/"
      aria-label={`View ${work.title} on the Work page`}
      className="group block overflow-hidden rounded-[1rem] border border-white/12 bg-white/[0.055] transition duration-300 hover:-translate-y-1 hover:border-accent/35"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-black">
        <Image
          src={work.image}
          alt={work.alt}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 92vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/10 bg-black/55 px-3 py-2 backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/80" />
            <span className="h-2 w-2 rounded-full bg-yellow-300/80" />
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/50">
            {work.label}
          </span>
        </div>
      </div>
      <div className="grid gap-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{work.title}</h3>
            <p className="mt-1 text-sm text-white/66">{work.summary}</p>
          </div>
          <span className="shrink-0 pt-1 text-sm font-semibold text-accent">
            View on Work page <span aria-hidden>{">"}</span>
          </span>
        </div>
        <p className="text-xs leading-6 text-white/46">{work.detail}</p>
      </div>
    </Link>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
      {children}
    </span>
  );
}

export const metadata: Metadata = createPageMetadata({
  description:
    "Websites that make local businesses look ready for bigger things. Website refreshes, starter websites, local growth websites, and concept preview work from Szymik Digital.",
  path: "/",
});

export default function Home() {
  return (
    <div className="bg-[#030504] text-white">
      <section className="relative -mt-[5.35rem] overflow-hidden border-b border-white/10 px-0 pb-10 pt-30 sm:-mt-[5.8rem] sm:pt-36 lg:pb-8 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,_rgba(87,214,129,0.24),_transparent_30%),linear-gradient(135deg,_#030504_0%,_#07100b_46%,_#090d0a_100%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(130deg,_transparent_0%,_transparent_46%,_rgba(87,214,129,0.32)_47%,_transparent_48%,_transparent_58%,_rgba(87,214,129,0.2)_59%,_transparent_60%)]" />
        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(34rem,1.22fr)] lg:items-center">
            <div className="space-y-7">
              <span className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Websites. Automation. Growth.
              </span>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-[4.55rem]">
                  Websites that make local businesses look ready for{" "}
                  <span className="text-accent">bigger things.</span>
                </h1>
                <p className="max-w-xl text-base leading-8 text-white/72">
                  Polished websites and digital solutions for local businesses
                  that want to stand out, win trust, and grow with confidence.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaLink
                  href="/contact#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Start a Project
                </CtaLink>
                <CtaLink
                  href="/work/"
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  View Our Work
                </CtaLink>
              </div>

              <div className="grid gap-5 pt-5 sm:grid-cols-3 lg:max-w-xl">
                {heroTrust.map((item) => (
                  <div key={item.title} className="grid gap-2">
                    <LineIcon name={item.icon} />
                    <h2 className="text-sm font-semibold text-white">
                      {item.title}
                    </h2>
                    <p className="text-xs leading-5 text-white/62">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[29rem] sm:min-h-[37rem] lg:min-h-[42rem]">
              <div className="absolute inset-x-8 top-16 h-64 rounded-full bg-accent/20 blur-3xl" />
              <BrowserFrame
                work={selectedWork[1]}
                className="absolute right-8 top-0 z-10 w-[76%] rotate-[-1deg] opacity-86"
              />
              <BrowserFrame
                work={selectedWork[0]}
                priority
                className="absolute left-0 top-[8.3rem] z-30 w-[92%] sm:top-[9.4rem]"
              />
              <BrowserFrame
                work={selectedWork[2]}
                className="absolute bottom-0 right-0 z-40 w-[76%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Selected Work</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-[0.75rem] border border-white/18 px-5 text-sm font-semibold text-white transition hover:border-accent/45 hover:text-accent"
            >
              View All Work <span aria-hidden>{">"}</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {selectedWork.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Our Services</Eyebrow>
              <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
                Digital solutions that help local businesses grow.
              </h2>
            </div>
            <Link
              href="/services/guide-prices/"
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-[0.75rem] border border-white/18 px-5 text-sm font-semibold text-white transition hover:border-accent/45 hover:text-accent"
            >
              View Guide Prices <span aria-hidden>{">"}</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={homepageServiceLinks[service.id] ?? "/services/"}
                className="group flex min-h-56 flex-col rounded-[1rem] border border-white/12 bg-white/[0.055] p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/35"
              >
                <LineIcon name={serviceAccent[service.id] ?? "screen"} />
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/66">
                  {service.teaser}
                </p>
                <span className="mt-5 text-sm font-semibold text-accent">
                  Learn more <span aria-hidden>{">"}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="rounded-[1.35rem] border border-accent/25 bg-[radial-gradient(circle_at_42%_0%,_rgba(87,214,129,0.13),_transparent_26%),linear-gradient(135deg,_rgba(255,255,255,0.07),_rgba(255,255,255,0.035))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.3fr)] lg:items-start">
              <div>
                <Eyebrow>Why Choose Szymik Digital</Eyebrow>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Your business.
                  <br />
                  Our focus.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
                  We partner with local businesses to deliver websites and
                  digital solutions that build trust, look professional, and
                  drive real outcomes.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-3 rounded-[0.75rem] border border-white/20 px-5 text-sm font-semibold text-white transition hover:border-accent/45 hover:text-accent"
                >
                  Learn More About Us <span aria-hidden>{">"}</span>
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
                {trustItems.map((item) => (
                  <article key={item.title} className="grid gap-3">
                    <LineIcon name={item.icon} />
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-6 text-white/64">{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <Eyebrow>Our Process</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Simple steps. Strong results.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/64">
            Concept Preview sits inside the review and proposal stage, helping
            lock the visual direction before the main build.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-[1rem] border border-white/12 bg-white/[0.055] p-5 text-center"
              >
                <span className="absolute -left-1 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-surface-strong">
                  {index + 1}
                </span>
                <LineIcon name={index === 5 ? "rocket" : index === 3 ? "screen" : "chat"} />
                <h3 className="mt-4 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-white/62">{step.copy}</p>
                {index < processSteps.length - 1 ? (
                  <span className="absolute left-full top-1/2 hidden h-px w-4 bg-accent/55 xl:block" />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050806] pb-10 sm:pb-12">
        <div className="site-container">
          <div className="overflow-hidden rounded-[1.35rem] border border-accent/25 bg-[linear-gradient(135deg,_rgba(87,214,129,0.13),_rgba(255,255,255,0.055)_38%,_rgba(5,8,6,0.95)),linear-gradient(130deg,_transparent_0%,_transparent_72%,_rgba(87,214,129,0.32)_73%,_transparent_77%)] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
              <div className="hidden h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] lg:flex">
                <LineIcon name="rocket" />
              </div>
              <div>
                <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Ready to make your online presence work harder?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
                  Let us build a website or digital solution that looks
                  professional and helps your business grow.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">
                  Not sure what your site needs?{" "}
                  <Link
                    href="/website-review/"
                    className="font-semibold text-accent transition hover:text-white"
                  >
                    Request a free website review
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <CtaLink
                  href="/contact#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Start a Project
                </CtaLink>
                <CtaLink
                  href="/contact"
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  Send an Enquiry
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
