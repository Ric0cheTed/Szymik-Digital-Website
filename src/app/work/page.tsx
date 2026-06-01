import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { createPageMetadata } from "@/lib/metadata";

const featuredWork = [
  {
    name: "Bent Burger",
    label: "Takeaway website concept",
    status: "Concept preview",
    group: "Concept previews",
    image: "/images/work/bent-burger-preview.png",
    alt: "Bent Burger takeaway website concept preview",
    description:
      "A bold local food website direction shaped around appetite, quick scanning, mobile action, and a stronger first impression.",
    focus: ["Mobile-first", "Brand polish", "Clear calls to action"],
    cta: "View concept direction",
    note:
      "Shown as a concept preview to demonstrate direction and judgement, not a claimed paid or live client case study.",
  },
  {
    name: "Country Pizza",
    label: "Restaurant website concept",
    status: "Concept preview",
    group: "Concept previews",
    image: "/images/work/country-pizza-preview.png",
    alt: "Country Pizza restaurant website concept preview",
    description:
      "A polished restaurant and takeaway website direction built around menu browsing, local trust, offers, and easy customer action.",
    focus: ["Menu clarity", "Local trust", "Visual polish"],
    cta: "View concept direction",
    note:
      "Presented as restaurant website concept and refresh direction without invented metrics, testimonials, or results.",
  },
  {
    name: "Libra Support Services",
    label: "Home care website",
    status: "Local business website",
    group: "Real local work",
    image: "/images/work/libra-support-preview.png",
    alt: "Libra Support Services home care website preview",
    description:
      "A care-sector website foundation focused on service clarity, trust signals, and helping families find the right contact route.",
    focus: ["Service clarity", "Local trust", "Clear calls to action"],
    cta: "Discuss something similar",
    note:
      "Real local-business website work referenced cautiously without overstated case-study or performance claims.",
  },
];

const proofFilters = ["All", "Websites", "Redesigns", "Local business", "Care", "Food & drink"];

const proofNotes = [
  {
    title: "Image-led proof",
    copy: "The Work page leads with real preview visuals so visitors can judge polish and direction quickly.",
  },
  {
    title: "Truthful status",
    copy: "Concept previews and real local work are labelled carefully, without fake results or case-study claims.",
  },
  {
    title: "Ready to grow",
    copy: "More client work, richer case studies, and filters can be added later when real examples are available.",
  },
];

const previewSteps = [
  {
    title: "Brief",
    copy: "Understand the business, audience, current site, and what needs to feel clearer.",
  },
  {
    title: "Concept Preview",
    copy: "Turn the direction into something visual before asking anyone to commit to a full build.",
  },
  {
    title: "Review / direction lock",
    copy: "Discuss what feels right, what needs changing, and what the build should protect.",
  },
  {
    title: "Build",
    copy: "Create the responsive website with the agreed structure, messaging, and calls to action.",
  },
  {
    title: "Launch / handover",
    copy: "Go live after approval, then hand over the essentials for the next stage.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "Selected Szymik Digital work and concept previews for local business websites, takeaway websites, restaurant websites, and home care website direction.",
  path: "/work",
});

function BrowserDots() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <span className="h-2 w-2 rounded-full bg-red-400/80" />
      <span className="h-2 w-2 rounded-full bg-yellow-300/80" />
      <span className="h-2 w-2 rounded-full bg-accent" />
    </div>
  );
}

function WorkCard({ work }: { work: (typeof featuredWork)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.1rem] border border-white/12 bg-[linear-gradient(145deg,_rgba(255,255,255,0.075),_rgba(255,255,255,0.035))] shadow-[0_28px_90px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-black">
        <Image
          src={work.image}
          alt={work.alt}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 92vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/10 bg-black/58 px-4 py-2 backdrop-blur-sm">
          <BrowserDots />
          <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-accent">
            {work.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="rounded-full border border-white/12 bg-black/20 px-3 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/58">
            {work.group}
          </p>
          <p className="rounded-full border border-accent/22 bg-accent/10 px-3 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-accent">
            {work.label}
          </p>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-white">{work.name}</h2>
        <p className="mt-3 flex-1 text-sm leading-7 text-white/70">
          {work.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {work.focus.map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent/22 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-white/48">
          {work.note}
        </p>
        <Link
          href="/contact#enquiry"
          className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.75rem] border border-white/16 px-4 text-sm font-semibold text-white transition hover:border-accent/45 hover:text-accent"
        >
          {work.cta} <span aria-hidden>{">"}</span>
        </Link>
      </div>
    </article>
  );
}

export default function WorkPage() {
  return (
    <div className="bg-[#030504] text-white">
      <section className="relative -mt-[5.35rem] overflow-hidden border-b border-white/10 px-0 pb-12 pt-30 sm:-mt-[5.8rem] sm:pb-14 sm:pt-36 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,_rgba(87,214,129,0.2),_transparent_30%),linear-gradient(135deg,_#030504_0%,_#07100b_48%,_#090d0a_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(130deg,_transparent_0%,_transparent_54%,_rgba(87,214,129,0.28)_55%,_transparent_56%)]" />
        <div className="site-container relative">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(22rem,0.74fr)] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Selected work
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">
                Selected work and concept previews built for{" "}
                <span className="text-accent">local businesses.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Szymik Digital creates polished websites and practical digital
                directions for local businesses that need to look clearer, more
                trustworthy, and easier to choose.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink
                  href="/contact#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Start a project
                </CtaLink>
                <CtaLink
                  href="/services"
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  View services
                </CtaLink>
              </div>
            </div>

            <aside className="overflow-hidden rounded-[1.15rem] border border-accent/22 bg-[radial-gradient(circle_at_20%_0%,_rgba(87,214,129,0.18),_transparent_34%),rgba(255,255,255,0.055)] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:p-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                How to read this page
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">
                Proof of polish, without overclaiming.
              </h2>
              <div className="mt-5 grid gap-3">
                {proofNotes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[0.95rem] border border-white/10 bg-black/18 p-4"
                  >
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-white/60">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Featured work
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Preview directions with real project visuals.
              </h2>
            </div>
            <Link
              href="/contact#enquiry"
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-[0.75rem] border border-white/18 px-5 text-sm font-semibold text-white transition hover:border-accent/45 hover:text-accent"
            >
              Discuss a project <span aria-hidden>{">"}</span>
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {proofFilters.map((filter) => (
              <span
                key={filter}
                className="rounded-full border border-white/12 bg-white/[0.045] px-3 py-1.5 text-xs font-semibold text-white/62"
              >
                {filter}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredWork.map((work) => (
              <WorkCard key={work.name} work={work} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {proofNotes.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.05rem] border border-white/12 bg-white/[0.045] p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[1.25rem] border border-accent/25 bg-[radial-gradient(circle_at_28%_0%,_rgba(87,214,129,0.15),_transparent_24%),linear-gradient(135deg,_rgba(255,255,255,0.07),_rgba(255,255,255,0.035))] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)]">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Concept Preview
                </span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Why previews appear on the Work page
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/68">
                  Some work is shown as concept preview or website direction
                  because that is an official Szymik Digital step. It helps
                  make style, structure, and expectations visible before build.
                </p>
                <Link
                  href="/services/#concept-preview-process"
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.75rem] border border-white/16 px-4 text-sm font-semibold text-white transition hover:border-accent/45 hover:text-accent"
                >
                  See the process <span aria-hidden>{">"}</span>
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-5">
                {previewSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[0.95rem] border border-white/12 bg-black/18 p-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-surface-strong">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-white/62">
                      {step.copy}
                    </p>
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
                  Next step
                </span>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Want your business to look this polished online?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                  Start with a practical conversation about the website,
                  message, or local-business direction that needs to feel
                  sharper.
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
                  href="/services"
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  View services
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
          </div>
        </div>
      </section>
    </div>
  );
}
