import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import { contactEmail, siteSettings } from "@/lib/site";

const lastUpdated = siteSettings.legal.lastUpdatedDisplay;

const proposalItems = [
  siteSettings.legal.quoteValidity,
  "A project starts only when scope, fees, timing, responsibilities, and payment terms have been confirmed in writing.",
  "If a written proposal, quote, or project agreement says something different from these website Terms, the project-specific written agreement takes priority for that project.",
];

const clientResponsibilityItems = [
  "Provide accurate business and project information",
  "Supply agreed content, brand assets, documents, images, and access details in reasonable time",
  "Give feedback, approvals, and decisions within agreed or reasonable timeframes",
  "Make sure any supplied content, images, assets, or third-party materials can be used legally",
  "Tell Szymik Digital promptly if priorities, deadlines, access, or requirements change",
];

const paymentItems = [
  siteSettings.legal.defaultDeposit,
  "The remaining balance is normally due before launch, transfer, or final handover unless agreed otherwise in writing.",
  "For larger or phased work, payments may be split into agreed milestones.",
  "Third-party costs such as hosting, domains, subscriptions, paid tools, stock assets, fonts, plugins, or platform fees are separate unless the written quote clearly includes them.",
  "Ongoing support, care plans, maintenance, or post-launch improvements are separate unless they are included in the written scope.",
];

const amendmentItems = [
  "Where a fixed-price website or redesign project includes amendment rounds, it normally includes up to two reasonable rounds of amendments unless the quote says otherwise.",
  "Amendments relate to the agreed scope. New pages, new features, major direction changes, or extra integrations may need a revised price or timeline.",
  "Szymik Digital will flag meaningful scope changes before continuing where they affect cost, timing, or deliverables.",
];

export const metadata: Metadata = createPageMetadata({
  title: "Terms",
  description:
    "Terms for the Szymik Digital website, covering use of the site and the basis on which services are discussed or agreed.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        intro={`These Terms explain the baseline for using ${siteSettings.siteUrl} and for discussing or agreeing website, digital presence, support, and practical systems work with ${siteSettings.businessName}.`}
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Last updated
            </p>
            <p className="mt-3 text-base leading-8 text-foreground">
              {lastUpdated}
            </p>
          </div>
        }
      />

      <section className="page-section pt-0">
        <div className="site-container">
          <article className="panel mb-6 max-w-4xl p-6 sm:p-8">
            <span className="eyebrow">Plain-English baseline</span>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              Project details are agreed in writing before work begins
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              {siteSettings.legal.businessDescription} The studio is based in{" "}
              {siteSettings.locationText}.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              These Terms give the public baseline. Project-specific details
              are confirmed through a written quote, proposal, email agreement,
              or statement of work covering scope, price, timeline, payment
              terms, and responsibilities.
            </p>
          </article>

          <article className="panel max-w-4xl p-6 sm:p-8 lg:p-10">
            <div className="space-y-10 text-base leading-8 text-muted">
              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  1. About these terms
                </h2>
                <p className="mt-4">
                  These Terms govern the use of the Szymik Digital website and,
                  where applicable, the discussion or engagement of services
                  offered under the Szymik Digital brand.
                </p>
                <p className="mt-4">
                  They are intended for small business website, redesign,
                  digital presence, support, and practical systems work. They do
                  not replace any clearer written agreement made for a specific
                  project.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  2. Website use
                </h2>
                <p className="mt-4">
                  The content on this website is provided for general
                  information. While reasonable care is taken to keep it
                  accurate and up to date, no guarantee is given that all
                  content is complete, current, or suitable for every purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  3. Services and proposals
                </h2>
                <p className="mt-4">
                  Any service described on this site is subject to availability,
                  fit, scope, and separate agreement. Projects begin only once
                  scope, fees, timelines, deliverables, and key
                  responsibilities have been confirmed in writing.
                </p>
                <div className="mt-4 grid gap-3">
                  {proposalItems.map((item) => (
                    <p key={item} className="list-check">
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  4. Client responsibilities
                </h2>
                <p className="mt-4">Clients are expected to provide:</p>
                <div className="mt-4 grid gap-3">
                  {clientResponsibilityItems.map((item) => (
                    <p key={item} className="list-check">
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  5. Fees and payment
                </h2>
                <p className="mt-4">
                  Fees and payment stages are confirmed in writing before work
                  begins. Unless a project agreement says otherwise, the
                  following approach applies:
                </p>
                <div className="mt-4 grid gap-3">
                  {paymentItems.map((item) => (
                    <p key={item} className="list-check">
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  6. Amendments and scope changes
                </h2>
                <p className="mt-4">
                  A clear scope protects both sides. Reasonable refinement is
                  part of good delivery, but extra work needs to be handled
                  clearly.
                </p>
                <div className="mt-4 grid gap-3">
                  {amendmentItems.map((item) => (
                    <p key={item} className="list-check">
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  7. Timelines
                </h2>
                <p className="mt-4">
                  Project timelines are estimates unless stated otherwise in a
                  written agreement. Delivery can be affected by feedback
                  delays, late access, missing content, third-party services, or
                  changes to scope after work has begun.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  8. Sign-off, launch, and handover
                </h2>
                <p className="mt-4">
                  Before launch or final handover, the agreed work is reviewed
                  against the written scope. Final launch, transfer, or
                  handover normally takes place after sign-off and once any
                  outstanding balance due at that stage has been paid.
                </p>
                <p className="mt-4">
                  Handover may include relevant files, access information,
                  guidance, or practical notes depending on the project. Ongoing
                  updates, monitoring, support, hosting oversight, or care plans
                  are only included where they have been agreed separately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  9. Intellectual property
                </h2>
                <p className="mt-4">
                  Unless agreed otherwise in writing, pre-existing tools,
                  methods, templates, internal systems, and reusable know-how
                  remain the property of Szymik Digital. Final deliverables
                  created specifically for a client project are transferred or
                  licensed according to the written agreement in place for that
                  project.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  10. Third-party tools and services
                </h2>
                <p className="mt-4">
                  Websites and systems may rely on third-party platforms such as
                  hosting providers, analytics tools, scheduling tools,
                  automation services, email providers, payment processors, or
                  other client systems. Szymik Digital is not responsible for
                  the independent terms, performance, pricing, availability, or
                  downtime of third-party providers outside its control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  11. Liability
                </h2>
                <p className="mt-4">
                  Nothing in these Terms is intended to exclude liability that
                  cannot legally be excluded or limited. Any more detailed
                  limitation wording can be set out in the written agreement
                  for the relevant project where appropriate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  12. Governing law
                </h2>
                <p className="mt-4">
                  {siteSettings.legal.governingLaw}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  13. Contact
                </h2>
                <p className="mt-4">
                  Questions about these Terms can be sent to{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="font-semibold text-accent-strong"
                  >
                    {contactEmail}
                  </a>
                  .
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
