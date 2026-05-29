import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { CtaLink } from "@/components/cta-link";
import { createPageMetadata } from "@/lib/metadata";
import { siteSettings } from "@/lib/site";

const storyPoints = [
  "Ric builds websites, digital systems, and practical tools for small businesses that need clearer online presentation and better ways of working.",
  "Szymik Digital grew from real local-business website work and the need for a more organised client workflow behind it.",
  "The focus is simple: local trust, practical outcomes, clear communication, and polished delivery without pretending to be a large agency.",
];

const workingModel = [
  {
    title: "Ric",
    role: "Build quality, technical direction, websites, and practical digital systems.",
  },
  {
    title: "Hannah",
    role: "Client flow, communication support, enquiry triage, and keeping project conversations organised where appropriate.",
  },
];

const differenceCards = [
  {
    title: "Concept Preview where useful",
    description:
      "Visual direction can be aligned before build, so the look, structure, and expectations are clearer before deeper work starts.",
  },
  {
    title: "Clear process",
    description:
      "Projects are shaped around enquiry, review, scope, build, feedback, and launch rather than vague promises or messy handoffs.",
  },
  {
    title: "Local-business understanding",
    description:
      "The work is designed for businesses that need trust, clarity, service explanation, and easy enquiry routes more than agency theatre.",
  },
  {
    title: "Practical pathways",
    description:
      "Website Refresh, Starter Website, Local Growth Website, and Automation / Custom Tool Discovery give visitors a simple way to start.",
  },
  {
    title: "Honest advice",
    description:
      "If a smaller fix, staged approach, or different route makes more sense, the recommendation should say that clearly.",
  },
  {
    title: "Design that reflects quality",
    description:
      "The aim is a website that makes the business feel more credible, polished, and easier for customers to trust.",
  },
];

const approachItems = [
  "Build things properly",
  "Keep communication clear",
  "Make websites easier for customers to trust",
  "Avoid unnecessary jargon",
  "Focus on useful outcomes",
];

export const metadata: Metadata = createPageMetadata({
  title: "About Szymik Digital",
  description:
    'Meet Richard "Ric" Szymik and learn how Szymik Digital builds practical websites, digital systems, and clearer online foundations for local businesses.',
  path: "/about",
});

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#030504] text-white">
      <section className="relative -mt-[5.35rem] overflow-hidden border-b border-white/10 px-0 pb-14 pt-30 sm:-mt-[5.8rem] sm:pb-16 sm:pt-36 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,_rgba(87,214,129,0.2),_transparent_30%),linear-gradient(135deg,_#030504_0%,_#07100b_50%,_#090d0a_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(130deg,_transparent_0%,_transparent_58%,_rgba(87,214,129,0.28)_59%,_transparent_60%)]" />
        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.72fr)] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                About Szymik Digital
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">
                A small digital studio building sharper websites for{" "}
                <span className="text-accent">local businesses.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Szymik Digital helps local businesses look more credible
                online, improve the way enquiries flow, and simplify practical
                digital work around the website.
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

            <aside className="rounded-[1.15rem] border border-accent/22 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1rem] border border-accent/20 bg-accent/10 p-3">
                  <BrandLogo
                    variant="mark"
                    sizes="64px"
                    className="h-auto w-full"
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    Founder-led
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {siteSettings.founderName}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/70">
                Direct, practical website and digital systems work from a small
                studio built around clarity, care, and useful delivery.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)]">
            <div>
              <Eyebrow>Founder story</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Built from practical local-business work.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/68">
                This is intentionally small-studio work: close to the client,
                close to the build, and focused on what makes the business look
                clearer and more trustworthy online.
              </p>
            </div>
            <div className="grid gap-4">
              {storyPoints.map((point) => (
                <article
                  key={point}
                  className="rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5"
                >
                  <p className="text-base leading-8 text-white/72">{point}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="rounded-[1.25rem] border border-accent/25 bg-[radial-gradient(circle_at_28%_0%,_rgba(87,214,129,0.15),_transparent_24%),linear-gradient(135deg,_rgba(255,255,255,0.07),_rgba(255,255,255,0.035))] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)]">
              <div>
                <Eyebrow>How the studio works</Eyebrow>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Founder-led build, organised client flow.
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/68">
                  Szymik Digital stays lean by keeping responsibility close to
                  the work while still making enquiries, feedback, and next
                  steps feel clear.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {workingModel.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[0.95rem] border border-white/12 bg-black/18 p-5"
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {item.role}
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
          <Eyebrow>What makes it different</Eyebrow>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
            Premium website work, shaped around real local-business needs.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {differenceCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/66">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <Eyebrow>Values and approach</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Straightforward standards for useful work.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/68">
                The aim is not to add more noise. It is to make the business
                easier to understand, easier to trust, and easier to contact.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {approachItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[0.95rem] border border-accent/18 bg-accent/10 p-4"
                >
                  <p className="text-sm font-semibold text-white">{item}</p>
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
                  Work with Szymik Digital
                </span>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Want a website that feels more like your business?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                  Start with what needs to look clearer, feel more credible, or
                  work better for customers. The right pathway can be shaped
                  after review.
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
                  href="/work/"
                  variant="secondary"
                  className="min-h-12 border-white/22 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
                >
                  View work
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
