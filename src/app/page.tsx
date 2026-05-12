import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { CtaLink } from "@/components/cta-link";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { services, siteSettings } from "@/lib/site";

const selectedWork = [
  {
    title: "Bent Burger",
    label: "Concept preview",
    category: "Food and local hospitality",
    accent: "from-[#57d681]/28 via-white/10 to-[#101713]",
    summary:
      "A bold restaurant website refresh direction shaped around appetite, fast scanning, and a clearer route from interest to order or visit.",
    detail:
      "Shown as concept preview work to demonstrate direction and judgement, not as a claimed paid case study or performance result.",
  },
  {
    title: "Country Pizza",
    label: "Website refresh",
    category: "Local food business",
    accent: "from-[#57d681]/20 via-[#f3f6f1]/12 to-[#172119]",
    summary:
      "A warmer local-business website direction for menu-led browsing, simple offers, trust cues, and easy customer action on mobile.",
    detail:
      "Presented as selected concept and refresh thinking, with no invented metrics, testimonials, or commercial claims.",
  },
  {
    title: "Libra Support Services",
    label: "Local business website",
    category: "Care and support services",
    accent: "from-[#57d681]/18 via-[#dfffe8]/10 to-[#0b1410]",
    summary:
      "A clearer service-led website foundation for explaining support, building trust, and helping people find the right contact route.",
    detail:
      "Real external website work referenced cautiously while permissioned proof, live links, and case-study details are confirmed.",
  },
];

const processSteps = [
  {
    title: "Brief",
    description:
      "We gather the business, audience, current site, goals, and practical constraints before deciding what should change.",
  },
  {
    title: "Concept Preview",
    description:
      "A visual direction step makes the look, structure, and tone easier to judge before the full build begins.",
  },
  {
    title: "Build",
    description:
      "Ric turns the agreed direction into a responsive website foundation with clear pages, calls to action, and technical hygiene.",
  },
  {
    title: "Review",
    description:
      "Hannah can help organise feedback while Ric works through the agreed changes and keeps the project practical.",
  },
  {
    title: "Launch",
    description:
      "After approval and launch checks, the site goes live with the right handover notes or support next steps.",
  },
];

const trustItems = [
  {
    title: "Clear process",
    description:
      "You know what happens next, what is needed from you, and when a decision or approval is required.",
  },
  {
    title: "Practical results",
    description:
      "The focus stays on clearer presentation, better enquiry paths, and a website that feels easier to trust.",
  },
  {
    title: "Local-business focus",
    description:
      "The work is shaped for small service businesses, trades, care/support providers, and local teams.",
  },
  {
    title: "Honest support",
    description:
      "No fake proof, inflated claims, or rushed scope. If a smaller step is the better move, we will say so.",
  },
];

export const metadata: Metadata = createPageMetadata({
  description:
    "Websites that make local businesses look ready for bigger things. Website refreshes, starter websites, local growth websites, and concept preview work from Szymik Digital.",
  path: "/",
});

export default function Home() {
  return (
    <div className="bg-[#050806] text-white">
      <section className="relative overflow-hidden px-0 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,_rgba(87,214,129,0.26),_transparent_34%),linear-gradient(135deg,_#050806_0%,_#0a120d_48%,_#101713_100%)]" />
        <div className="site-container relative">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(20rem,0.94fr)] lg:items-end xl:gap-12">
            <div className="max-w-5xl space-y-7 sm:space-y-8">
              <span className="pill max-w-full border-white/12 bg-white/10 text-white/78">
                Premium website v2 concept preview
              </span>
              <div className="space-y-5 sm:space-y-6">
                <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                  Websites that make local businesses look ready for bigger
                  things.
                </h1>
                <p className="max-w-3xl text-base leading-8 text-white/78 sm:text-xl">
                  Szymik Digital builds sharper website refreshes, starter
                  websites, and local growth websites for small businesses that
                  need to look clearer, more credible, and easier to choose.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CtaLink
                  href="/contact#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Start a project
                </CtaLink>
                <CtaLink
                  href="#selected-work"
                  variant="secondary"
                  className="min-h-12"
                >
                  View our work
                </CtaLink>
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.32)] backdrop-blur-sm sm:p-7 lg:mb-1">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] bg-white/10 p-2.5">
                  <BrandLogo
                    priority
                    variant="mark"
                    sizes="56px"
                    className="h-auto w-full"
                    alt={`${siteSettings.businessName} logo mark`}
                  />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                    Local studio
                  </p>
                  <p className="mt-1 text-base font-semibold text-white sm:text-lg">
                    Ric build, Hannah support
                  </p>
                </div>
              </div>
              <div className="mt-7 grid gap-3">
                {[
                  "Dark/green branded direction",
                  "Concept Preview before full build",
                  "Website refresh and local growth pathways",
                  "Truthful selected work, clearly labelled",
                ].map((item) => (
                  <p key={item} className="list-check text-white/78">
                    {item}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="selected-work" className="page-section bg-[#08100b]">
        <div className="site-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Concepts and local business examples with the claims kept honest"
              intro="These examples show the kind of direction Szymik Digital is building toward: sharper first impressions, stronger local-business positioning, and clearer next steps."
              surface="dark"
            />
            <Link className="link-arrow text-white hover:text-accent" href="/work">
              View more work <span aria-hidden>{">"}</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {selectedWork.map((work) => (
              <article
                key={work.title}
                className="flex h-full min-h-[27rem] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] transition duration-300 hover:-translate-y-1 hover:border-accent/35"
              >
                <div
                  className={`relative min-h-36 border-b border-white/10 bg-gradient-to-br ${work.accent} p-4 sm:min-h-40`}
                >
                  <div className="absolute inset-x-4 bottom-4 rounded-[1rem] border border-white/14 bg-black/24 p-3 shadow-[0_22px_50px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="mt-4 grid gap-2">
                      <span className="h-2 rounded-full bg-white/58" />
                      <span className="h-2 w-2/3 rounded-full bg-white/24" />
                      <span className="h-2 w-5/6 rounded-full bg-accent/42" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-accent/25 bg-accent/15 px-3 py-1.5 text-xs font-semibold text-accent">
                      {work.label}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                      {work.category}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {work.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/78">
                    {work.summary}
                  </p>
                  <p className="mt-6 border-t border-white/10 pt-4 text-sm font-medium leading-7 text-white/62">
                    {work.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[#050806]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Service pathways"
            title="Pick the route that matches the business problem"
            intro="The offer stays simple: improve an existing site, build a credible first site, grow a stronger local presence, or scope the admin/workflow problem before promising automation."
            surface="dark"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="flex h-full min-h-72 flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/35 sm:p-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  {service.shortLabel}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/72">
                  {service.teaser}
                </p>
                <span className="link-arrow mt-5 text-white hover:text-accent">
                  Explore pathway <span aria-hidden>{">"}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[#0b1410]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Process"
            title="A calm route from first idea to launch"
            intro="Concept Preview is now part of the Szymik Digital workflow because it gives everyone a clearer direction before the heavier build work starts."
            surface="dark"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.35rem] border border-white/10 bg-black/18 p-5 sm:min-h-64 lg:min-h-80"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[#050806]">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <SectionHeading
              eyebrow="Delivery style"
              title="Small-studio attention without making the project feel heavy"
              intro="The delivery style is direct and practical: Ric handles the build and technical judgement, while Hannah can help keep communication and feedback organised where useful."
              surface="dark"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-5 sm:min-h-44"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-[#08100b] pt-0">
        <div className="site-container">
          <div className="rounded-[1.75rem] border border-accent/20 bg-[linear-gradient(135deg,_rgba(87,214,129,0.18),_rgba(255,255,255,0.06)_42%,_rgba(255,255,255,0.04))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.34)] sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Ready for the next version?
                </span>
                <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                  Start with the website customers see first.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/76 sm:text-lg">
                  Tell us what feels dated, unclear, or too small for where the
                  business is going. We will help shape the right next step
                  before a quote or build commitment.
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
                  href="#selected-work"
                  variant="secondary"
                  className="min-h-12"
                >
                  View our work
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
