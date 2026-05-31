import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { createPageMetadata } from "@/lib/metadata";

const reviewChecks = [
  "Mobile experience",
  "First impression",
  "Service clarity",
  "Calls to action",
  "Trust signals",
  "Local search basics",
  "Contact routes",
  "Obvious content gaps",
];

const reviewFits = [
  "Your existing site feels outdated or weaker than the business behind it",
  "You are getting fewer useful enquiries than expected",
  "You are unsure whether to refresh, rebuild, or leave things alone for now",
  "You are using a Canva, Wix, or DIY site and want a calm second opinion",
  "You want a clearer online presence before investing in a bigger project",
];

const processSteps = [
  {
    title: "Send your website link",
    copy: "Share the current site, business name, and what feels unclear or underpowered.",
  },
  {
    title: "We review the obvious improvement areas",
    copy: "The review looks for practical issues, quick wins, and signs that a deeper refresh may help.",
  },
  {
    title: "We reply with practical notes",
    copy: "You get useful direction, not a full audit report or a hard-sell pitch.",
  },
  {
    title: "We suggest the best next step",
    copy: "If it makes sense, that might be a Website Refresh, a rebuild, or simply a smaller first move.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Free Website Review",
  description:
    "Request a low-pressure website review from Szymik Digital. Share your current website and get practical feedback on obvious improvements, clarity, trust, and next steps.",
  path: "/website-review",
});

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
      {children}
    </span>
  );
}

export default function WebsiteReviewPage() {
  return (
    <div className="bg-[#030504] text-white">
      <section className="relative -mt-[5.35rem] overflow-hidden border-b border-white/10 px-0 pb-14 pt-30 sm:-mt-[5.8rem] sm:pb-16 sm:pt-36 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,_rgba(87,214,129,0.2),_transparent_30%),linear-gradient(135deg,_#030504_0%,_#07100b_50%,_#090d0a_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(130deg,_transparent_0%,_transparent_58%,_rgba(87,214,129,0.28)_59%,_transparent_60%)]" />
        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.65fr)] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Website Review
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">
                Free website review.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Not sure whether your website is helping or holding you back?
                Send us your current website and we will look at the main things
                that could be improved.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58">
                No pressure, no hard sell. Just practical feedback on the
                obvious improvement areas and what a sensible next step could
                look like.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink
                  href="/contact#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Request a website review
                </CtaLink>
                <CtaLink
                  href="/services/"
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  View services
                </CtaLink>
              </div>
            </div>

            <aside className="rounded-[1.15rem] border border-accent/22 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Low-pressure first step
              </p>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-white/70">
                <p>
                  This is not a full technical audit, ranking promise, or
                  unlimited consultancy.
                </p>
                <p>
                  It is a useful way to understand whether a refresh, rebuild,
                  or smaller improvement path is worth discussing.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.62fr)_minmax(0,1.38fr)]">
            <div>
              <Eyebrow>What we check</Eyebrow>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                Practical checks for the parts visitors notice first.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/68">
                The review focuses on obvious improvement areas that affect
                trust, clarity, and whether a visitor knows what to do next.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {reviewChecks.map((item) => (
                <article
                  key={item}
                  className="rounded-[0.95rem] border border-white/12 bg-white/[0.055] p-4"
                >
                  <h3 className="text-sm font-semibold leading-7 text-white">
                    {item}
                  </h3>
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
                <Eyebrow>Who it is for</Eyebrow>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                  A calm starting point if the website feels uncertain.
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/68">
                  DIY sites and older sites can still be useful. The question is
                  whether the current version is giving customers enough clarity
                  and confidence.
                </p>
              </div>
              <div className="grid gap-3">
                {reviewFits.map((item) => (
                  <article
                    key={item}
                    className="rounded-[0.95rem] border border-white/12 bg-black/18 p-4"
                  >
                    <p className="text-sm font-semibold leading-7 text-white">
                      {item}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.62fr)_minmax(0,1.38fr)]">
            <div>
              <Eyebrow>What happens next</Eyebrow>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                Simple, useful, and not overcomplicated.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/68">
                The review is designed to help you decide whether a bigger
                conversation is worth having, not push you into a project before
                the need is clear.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
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
                    {step.copy}
                  </p>
                </article>
              ))}
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
                  Send your website link
                </span>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Want a practical second opinion?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                  Use the enquiry form, choose Website Review, and include your
                  current website link. If a wider project makes sense, the next
                  step can be shaped after review.
                </p>
                <p className="mt-3 text-sm leading-7 text-white/58">
                  You can also compare the main{" "}
                  <Link
                    href="/services/"
                    className="font-semibold text-accent transition hover:text-white"
                  >
                    service pathways
                  </Link>{" "}
                  or check the{" "}
                  <Link
                    href="/services/guide-prices/"
                    className="font-semibold text-accent transition hover:text-white"
                  >
                    guide prices
                  </Link>{" "}
                  before getting in touch.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <CtaLink
                  href="/contact#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Send your website link
                </CtaLink>
                <CtaLink
                  href="/services/"
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  Back to services
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
