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
  "Founder-led delivery from first call to launch",
  "Clear scope and direct communication",
  "Built for small, local, service-led businesses",
  "Website foundations made to be improved over time",
];

const conversionPaths = [
  {
    title: "I need a website",
    description:
      "A clean, mobile-friendly site that explains the offer clearly and makes the next step easy.",
    href: "/services#website-design-build",
  },
  {
    title: "I need help getting found locally",
    description:
      "Stronger local foundations around services, location signals, and the trust details customers look for.",
    href: "/services#local-business-websites",
  },
  {
    title: "I need my current website improved",
    description:
      "A practical refresh for dated, unclear, slow, or hard-to-use pages before committing to a bigger rebuild.",
    href: "/services#website-redesign",
  },
  {
    title: "I need automation or a custom tool",
    description:
      "Simple systems for repeated admin, enquiries, follow-up, or internal workflows when the website is no longer the only blocker.",
    href: "/services#digital-systems-automation",
  },
];

const whyChooseUs = [
  {
    title: "Founder-led from start to finish",
    description:
      "You work directly with the person planning, designing, and building the project. There is no handoff after the first conversation.",
  },
  {
    title: "Clear, practical priorities",
    description:
      "The focus stays on what the business actually needs first: a clearer offer, a sharper website, and stronger local foundations.",
  },
  {
    title: "Local visibility before clever extras",
    description:
      "Small businesses usually need to be easier to find and easier to trust before they need a complicated digital setup.",
  },
  {
    title: "Systems when they solve a real problem",
    description:
      "Automation and custom tools are introduced when they reduce repeated work, smooth out enquiries, or make the business easier to run.",
  },
];

const processSteps = [
  {
    step: "Discovery",
    description:
      "Understand the business, the offer, the audience, and the friction points getting in the way right now.",
  },
  {
    step: "Planning",
    description:
      "Map the structure, priorities, content flow, and practical requirements before the build starts moving.",
  },
  {
    step: "Build",
    description:
      "Design and develop the site or supporting system with clarity, responsiveness, and maintainability in mind.",
  },
  {
    step: "Refine",
    description:
      "Review the important details, tighten the copy, and improve the pages or flows that matter most.",
  },
  {
    step: "Launch & support",
    description:
      "Go live cleanly, then keep momentum with follow-up support, tidy-ups, and the next practical improvements.",
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
    question: `Will we work directly with ${siteSettings.founderShortName}?`,
    answer:
      `Yes. Szymik Digital is founder-led from first conversation to delivery, so you are working directly with ${siteSettings.founderShortName} throughout the project.`,
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
      <section className="page-section pb-8 pt-10 sm:pt-14 lg:pt-20">
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
                    get found locally, and build practical systems when they
                    outgrow a basic brochure site.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <CtaLink href="/contact">{siteSettings.ctaLabels.primary}</CtaLink>
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
                    "Practical automation and custom tools when the business needs more than a brochure site",
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
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item} className="panel p-5 sm:p-6">
                <p className="text-sm font-medium leading-7 text-foreground/90">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Start here"
            title="Choose the path that matches the problem in front of you"
            intro="Most projects begin with a simple need: a better website, stronger local visibility, a current site that needs fixing, or a practical system that removes repeated work."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {conversionPaths.map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="panel flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 sm:p-7"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {path.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                  {path.description}
                </p>
                <span className="link-arrow mt-6">
                  See how we help <span aria-hidden>{">"}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Services"
            title="Start with the website foundation, then add the systems that make sense"
            intro="The first layer is a clearer website and stronger local presence. When the business needs more than that, practical systems and automation can support the work behind the scenes."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="panel flex h-full flex-col p-6 sm:p-8"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-strong">
                  {service.shortLabel}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-muted">
                  {service.teaser}
                </p>
                <Link className="link-arrow mt-6" href={`/services#${service.id}`}>
                  Explore this service <span aria-hidden>{">"}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Featured work"
              title="Honest examples, clearly labelled"
              intro="Szymik Digital is building its public portfolio carefully. Until more client work can be shared openly, featured projects include internal and concept work and are labelled as such."
            />
            <Link className="link-arrow" href="/work">
              View all project examples <span aria-hidden>{">"}</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why choose Szymik Digital"
            title="Clear, practical work for small business websites and systems"
            intro="The aim is simple: direct communication, useful decisions, and digital work that helps the business look better, get found, and run more smoothly."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="panel p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div className="panel-dark overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <SectionHeading
              eyebrow="Process"
              title="A clear path from first conversation to launch"
              intro="Projects move with structure, but without unnecessary ceremony. Each step is there to reduce uncertainty and keep the work grounded in the real goal."
              surface="dark"
              className="max-w-4xl"
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-5">
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
              <div className="mt-6 space-y-5 text-base leading-8 text-muted">
                <p>
                  Szymik Digital is built for small businesses that want direct
                  thinking, sharper online presentation, and practical digital
                  work that actually helps day to day.
                </p>
                <p>
                  That can mean a new website, a sharper redesign, stronger
                  local visibility foundations, or practical systems that remove
                  friction behind the scenes.
                </p>
                <p>
                  The goal is not to add noise. It is to make the business look
                  sharper online, become easier to find, and run better
                  underneath when the basics are ready.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink href="/about" variant="secondary">
                  Meet {siteSettings.founderShortName}
                </CtaLink>
                <CtaLink href="/contact">{siteSettings.ctaLabels.conversation}</CtaLink>
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
                <span className="eyebrow text-accent">Final step</span>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                  Ready to make your website and local presence work harder?
                </h2>
                <p className="panel-dark-copy mt-5 max-w-3xl text-lg leading-8">
                  Start with a practical conversation about what feels outdated,
                  unclear, difficult to find, or harder than it should be. From
                  there, the next step can be shaped properly.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <CtaLink href="/contact">{siteSettings.ctaLabels.primary}</CtaLink>
                <CtaLink href="/services" variant="secondary">
                  {siteSettings.ctaLabels.services}
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
