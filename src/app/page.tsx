import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { CtaLink } from "@/components/cta-link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { services, siteSettings } from "@/lib/site";
import { projects } from "@/lib/work";

const trustItems = [
  {
    title: "No-pressure enquiry",
    description:
      "Tell us what feels unclear. The first step is review and guidance, not a rushed sale.",
  },
  {
    title: "Written quote first",
    description:
      "Suitable projects get a clear written quote before paid work starts.",
  },
  {
    title: "Scope agreed before build",
    description:
      "The work, responsibilities, payment steps, and review rounds are agreed before the build begins.",
  },
  {
    title: "Preview before launch",
    description:
      "Website projects include a preview and feedback stage before anything goes live.",
  },
  {
    title: "Hannah and Ric stay clear",
    description:
      "Hannah can help coordinate communication while Ric handles the build and technical decisions.",
  },
  {
    title: "Built for small local businesses",
    description:
      "The focus stays practical: clearer offers, stronger trust, easier enquiries, and sensible next steps.",
  },
];

const conversionPaths = [
  {
    title: "I need a website",
    description:
      "A clean, mobile-friendly site that explains the offer clearly and gives people a simple way to enquire.",
    href: "/services#starter-website",
  },
  {
    title: "I need help getting found locally",
    description:
      "Stronger local foundations around services, location signals, and the trust details customers look for.",
    href: "/services#local-growth",
  },
  {
    title: "I need my current website improved",
    description:
      "A practical refresh for dated, unclear, slow, or hard-to-use pages before committing to a bigger rebuild.",
    href: "/services#website-refresh",
  },
  {
    title: "I need automation or a custom tool",
    description:
      "Discovery for repeated admin, enquiry handling, follow-up, or internal workflows before any tool is scoped.",
    href: "/services#automation-tools",
  },
];

const processSteps = [
  {
    step: "Enquiry review",
    description:
      "You send the practical details. Hannah helps organise the enquiry, then Ric reviews the likely fit, scope, and next step.",
  },
  {
    step: "Quote and scope",
    description:
      "If the project is suitable, you receive a written quote with scope, assumptions, payment terms, and what is needed from you.",
  },
  {
    step: "Preview and feedback",
    description:
      "Once approved, Ric builds the preview. Hannah can help turn feedback into a clear list of agreed changes.",
  },
  {
    step: "Launch and handover",
    description:
      "After approval and launch checks, the site goes live and handover notes or support options are shared where useful.",
  },
];

const faqs = [
  {
    question: "What kind of businesses are the best fit?",
    answer:
      "Szymik Digital is best suited to small, local, service-led businesses that need a clearer website, stronger local visibility foundations, or practical systems once the basics are working.",
  },
  {
    question: "Can you help if we already have a website?",
    answer:
      "Yes. Redesigns, content restructuring, tidy-ups, and wider digital presence cleanup are a big part of the work.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "Websites and local visibility are the first focus. When a business has outgrown the basics, support can also include practical systems, lightweight automation, and custom tools behind the scenes.",
  },
  {
    question: "Who will we hear from during the project?",
    answer:
      `Szymik Digital stays small and direct. ${siteSettings.founderShortName} handles the build and technical delivery, and Hannah may help coordinate client communication, feedback, and admin steps where useful.`,
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Ongoing support can cover updates, landing pages, refinements, technical tidy-ups, and sensible next-step improvements once the site is live.",
  },
];

export const metadata: Metadata = createPageMetadata({
  description:
    "Websites, local visibility foundations, and practical digital systems for small businesses that want to look sharper online, get found locally, and run with less friction.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <section className="page-section pb-6 pt-10 sm:pb-8 sm:pt-14 lg:pt-20">
        <div className="site-container">
          <div className="panel-dark relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,_rgba(87,214,129,0.2),_transparent_55%)] lg:block" />
            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(20rem,0.7fr)] lg:items-end">
              <div className="space-y-8">
                <span className="pill border-white/15 bg-white/10 panel-dark-copy">
                  {siteSettings.tagline}
                </span>
                <div className="space-y-5">
                  <h1 className="max-w-4xl text-4xl font-semibold text-white sm:text-5xl lg:text-7xl">
                    Websites, local visibility, and practical digital systems for small businesses
                  </h1>
                  <p className="panel-dark-copy max-w-3xl text-lg leading-8 sm:text-xl">
                    Szymik Digital helps small businesses look sharper online,
                    get found locally, and make better digital decisions
                    without turning a first enquiry into a hard sell.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <CtaLink href="/contact#enquiry">
                    {siteSettings.ctaLabels.primary}
                  </CtaLink>
                  <CtaLink href="/services" variant="secondary">
                    {siteSettings.ctaLabels.services}
                  </CtaLink>
                </div>
              </div>

              <aside className="rounded-[1.75rem] border border-white/12 bg-white/12 p-6 backdrop-blur-sm sm:p-8">
                <p className="panel-dark-muted font-mono text-xs uppercase tracking-[0.22em]">
                  What we help with
                </p>
                <div className="mt-5 grid gap-4">
                  {[
                    "Clear websites that explain the offer and make enquiries easier",
                    "Local visibility foundations for service-led businesses",
                    "Website improvements for dated, unclear, or inconsistent sites",
                    "Discovery for practical automation and custom tools when repeated work needs scoping properly",
                  ].map((item) => (
                    <p key={item} className="list-check panel-dark-copy">
                      {item}
                    </p>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section py-8 sm:py-10">
        <div className="site-container">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item.title} className="panel p-5 sm:p-6">
                <h2 className="text-base font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section py-12 sm:py-16 lg:py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Start here"
            title="Choose the path that matches the problem in front of you"
            intro="Most projects begin with a simple need: a better website, stronger local visibility, a current site that needs fixing, or a workflow problem worth understanding before anything is built."
          />

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {conversionPaths.map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="panel flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 sm:p-7"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {path.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                  {path.description}
                </p>
                <span className="link-arrow mt-5">
                  Explore services <span aria-hidden>{">"}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container">
          <SectionHeading
            eyebrow="Services"
            title="Start with the website foundation, then add the systems that make sense"
            intro="The first layer is a clearer website and stronger local presence. If the problem is operational, discovery comes first so the right support can be scoped before any build work starts."
          />

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.id}
                className="panel flex h-full flex-col p-5 sm:p-8"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-strong">
                  {service.shortLabel}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground sm:mt-4 sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
                  {service.teaser}
                </p>
                <Link
                  className="link-arrow mt-5 sm:mt-6"
                  href={`/services#${service.id}`}
                >
                  Explore this service <span aria-hidden>{">"}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Featured work"
              title="A quick look at the kind of work behind the offer"
              intro="The homepage keeps this light: a few honest examples with fuller context on the Work page. No fake metrics, borrowed proof, or inflated claims."
            />
            <Link className="link-arrow" href="/work">
              View our work <span aria-hidden>{">"}</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 xl:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container">
          <div className="panel-dark overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <SectionHeading
              eyebrow="How it works"
              title="A clear path without pretending every project is identical"
              intro="The detail changes by project, but the shape stays calm: review the enquiry, agree the scope, build a preview, handle feedback, then launch with checks."
              surface="dark"
              className="max-w-4xl"
            />
            <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((item, index) => (
                <article
                  key={item.step}
                  className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5"
                >
                  <p className="panel-dark-muted font-mono text-xs uppercase tracking-[0.22em]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {item.step}
                  </h3>
                  <p className="panel-dark-copy mt-3 text-sm leading-7">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/contact#enquiry">
                {siteSettings.ctaLabels.enquiry}
              </CtaLink>
              <CtaLink href="/services" variant="secondary">
                {siteSettings.ctaLabels.services}
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="panel p-6 sm:p-8 lg:p-10">
              <span className="eyebrow">Founder-led</span>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                A practical studio led directly by {siteSettings.founderName}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8">
                <p>
                  Szymik Digital is built for small businesses that want direct
                  thinking, sharper online presentation, and practical digital
                  work that actually helps day to day.
                </p>
                <p>
                  That can mean a new website, a sharper refresh, stronger
                  local visibility foundations, or practical systems only when
                  they solve a real workflow problem.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink href="/about" variant="secondary">
                  Meet {siteSettings.founderShortName}
                </CtaLink>
                <CtaLink href="/contact#enquiry">
                  {siteSettings.ctaLabels.conversation}
                </CtaLink>
              </div>
            </div>

            <div className="panel-dark flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white/10 p-3">
                  <BrandLogo
                    variant="mark"
                    sizes="64px"
                    className="h-auto w-full"
                    alt={`${siteSettings.businessName} logo mark`}
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Built for long-term usefulness, not short-term polish alone
                </h3>
                <p className="panel-dark-copy mt-4 text-base leading-8">
                  Every project is shaped around clarity, trust, and keeping the
                  next stage easier rather than harder.
                </p>
              </div>
              <ul className="panel-dark-copy mt-8 grid gap-3 text-sm">
                {[
                  "No account-manager relay between strategy and delivery",
                  "A direct view of what matters now and what can wait",
                  "Design and systems choices made with the business in mind",
                ].map((item) => (
                  <li key={item} className="list-check panel-dark-copy">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions before a project starts"
            intro="If the current site feels unclear, dated, or held together by workarounds, these are usually the first things people want to know."
          />

          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="panel p-6 sm:p-8">
                <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                  {faq.question}
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container">
          <div className="panel-dark px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-end">
              <div>
                <span className="eyebrow text-accent">Not sure yet?</span>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                  Tell us what you need, and we will help shape the next step
                </h2>
                <p className="panel-dark-copy mt-5 max-w-3xl text-lg leading-8">
                  Start with a practical conversation about what feels outdated,
                  unclear, difficult to find, or harder than it should be. From
                  there, Hannah can help gather the right details and Ric can
                  review the scope before a quote or recommendation is
                  suggested.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <CtaLink href="/contact#enquiry">
                  {siteSettings.ctaLabels.primary}
                </CtaLink>
                <CtaLink href="/services" variant="secondary">
                  {siteSettings.ctaLabels.services}
                </CtaLink>
                <CtaLink href="/work" variant="secondary">
                  {siteSettings.ctaLabels.work}
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
