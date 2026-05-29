import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { createPageMetadata } from "@/lib/metadata";

const guidePriceGroups = [
  {
    group: "Website projects",
    note: "For clearer online presence, stronger trust, and a more professional local-business website.",
    items: [
      { name: "Local Launch Page", price: "from \u00a3450" },
      { name: "Website Refresh", price: "from \u00a3650" },
      { name: "Starter Website", price: "from \u00a3850" },
      { name: "Local Growth Website", price: "from \u00a31,250" },
      { name: "Premium Service Website", price: "from \u00a31,950" },
    ],
  },
  {
    group: "E-commerce and migration",
    note: "For shops, product-led businesses, and stores that need a cleaner setup before launch.",
    items: [
      { name: "Shopify / E-commerce Setup", price: "from \u00a31,800" },
      { name: "Product / Migration Discovery", price: "from \u00a3250" },
    ],
  },
  {
    group: "Automation and custom tools",
    note: "For repeated admin, messy spreadsheets, disconnected workflows, and practical internal systems.",
    items: [
      {
        name: "Automation / Custom Tool Discovery",
        price: "from \u00a3250",
      },
      { name: "Custom Tools / CRM / Dashboards", price: "from \u00a32,500+" },
    ],
  },
  {
    group: "Ongoing care and support",
    note: "For keeping a website maintained, supported, and easier to manage after launch.",
    items: [
      { name: "Website Care Plans", price: "from \u00a349/month" },
      { name: "Standard Support", price: "\u00a345/hour" },
    ],
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Guide Prices",
  description:
    "Guide prices for Szymik Digital website projects, e-commerce setup, automation discovery, custom tools, care plans, and support for local businesses.",
  path: "/services/guide-prices",
});

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
      {children}
    </span>
  );
}

export default function GuidePricesPage() {
  return (
    <div className="bg-[#030504] text-white">
      <section className="relative -mt-[5.35rem] overflow-hidden border-b border-white/10 px-0 pb-14 pt-30 sm:-mt-[5.8rem] sm:pb-16 sm:pt-36 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,_rgba(87,214,129,0.2),_transparent_30%),linear-gradient(135deg,_#030504_0%,_#07100b_48%,_#090d0a_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(130deg,_transparent_0%,_transparent_54%,_rgba(87,214,129,0.28)_55%,_transparent_56%)]" />
        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.65fr)] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Services / Guide prices
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">
                Guide prices.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Every project is scoped properly before work starts, but these
                guide prices help you understand where most Szymik Digital
                projects usually begin.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58">
                Final quotes depend on page count, content, design complexity,
                integrations, product volume, and how much support is needed
                before launch.
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
                  Back to services
                </CtaLink>
              </div>
            </div>

            <aside className="rounded-[1.15rem] border border-accent/22 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Guide, not instant quote
              </p>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-white/70">
                <p>
                  The prices below are starting points for planning, not fixed
                  automatic packages.
                </p>
                <p>
                  A written quote confirms the scope, payment schedule, and
                  what is included before work begins.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050806] py-10 sm:py-12">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-2">
            {guidePriceGroups.map((group) => (
              <article
                key={group.group}
                className="rounded-[1.15rem] border border-white/12 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.2)] sm:p-6"
              >
                <div className="border-b border-white/10 pb-5">
                  <Eyebrow>{group.group}</Eyebrow>
                  <p className="mt-4 text-sm leading-7 text-white/64">
                    {group.note}
                  </p>
                </div>
                <dl className="mt-5 grid gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid gap-2 rounded-[0.9rem] border border-white/10 bg-black/18 p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                    >
                      <dt className="text-sm font-semibold text-white">
                        {item.name}
                      </dt>
                      <dd className="text-sm font-bold text-accent sm:text-right">
                        {item.price}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#030504] py-10 sm:py-12">
        <div className="site-container">
          <div className="rounded-[1.25rem] border border-accent/25 bg-[radial-gradient(circle_at_10%_0%,_rgba(87,214,129,0.16),_transparent_28%),linear-gradient(135deg,_rgba(255,255,255,0.07),_rgba(255,255,255,0.035))] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)] lg:items-start">
              <div>
                <Eyebrow>Flexible staged payments</Eyebrow>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                  Available on suitable projects.
                </h2>
              </div>
              <div className="grid gap-4 text-sm leading-7 text-white/68">
                <p>
                  Most website projects are split into a deposit before work
                  starts and a final balance before launch or handover. Larger
                  projects can be split into agreed milestones so the cost is
                  easier to manage.
                </p>
                <p>
                  Payment schedules are agreed before work begins and included
                  clearly in your quote.
                </p>
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
                  Ready to scope it properly?
                </span>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Tell us what you are building.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                  Share what you know about the project, current website,
                  timescale, and goals. The right next step can be shaped from
                  there.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <CtaLink
                  href="/contact#enquiry"
                  className="min-h-12 !text-surface-strong hover:!text-surface-strong"
                >
                  Start a project
                </CtaLink>
                <Link
                  href="/services"
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
