import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import { contactEmail, siteSettings } from "@/lib/site";

const lastUpdated = siteSettings.legal.lastUpdatedDisplay;

const enquiryDataItems = [
  "Name, email address, business name, website URL, project details, and message content sent through the enquiry form or by email",
  "Any information shared during project discussions, calls, proposals, or support conversations",
  "Technical information that may be created by normal website hosting, such as IP address, device details, browser information, and basic security logs",
];

const projectDataItems = [
  "Website access details, hosting or domain information, and other logins where they are needed to deliver agreed work",
  "Brand assets, documents, copy, images, website content, and project files supplied by a client",
  "Notes, approvals, feedback, invoices, and other records needed to manage the project or keep business records",
];

const usageItems = [
  "Respond to enquiries and direct messages",
  "Prepare quotes, proposals, recommendations, and project scopes",
  "Deliver agreed website, digital presence, support, or systems work",
  "Keep business, accounting, project, and communication records",
  "Maintain the security, reliability, and basic operation of the website and services",
];

const lawfulBasisItems = [
  "Legitimate interests in responding to enquiries, running the business, improving services, and keeping appropriate records",
  "Steps requested before entering into a contract, such as discussing a project or preparing a quote",
  "Contract where information is needed to deliver agreed work",
  "Legal obligation where records need to be kept for tax, accounting, or regulatory reasons",
  "Consent where a specific optional activity requires it",
];

const sharingItems = [
  "Website hosting and infrastructure providers that keep the website available and secure",
  "Email providers used to receive, send, and store project communication",
  "Project, admin, storage, invoicing, accounting, or support tools where they are used to run the business or deliver work",
  "Professional advisers if needed for accounting, legal, insurance, or compliance reasons",
];

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for the Szymik Digital website, covering personal data, enquiries, and project communication.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`This Privacy Policy explains how ${siteSettings.businessName} handles personal information from website visitors, enquiries, project discussions, and client work through ${siteSettings.siteUrl}.`}
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
            <span className="eyebrow">Enquiry setup</span>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              The current website uses email-based enquiries, not a site database
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              The enquiry form prepares an email draft addressed to{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-semibold text-accent-strong"
              >
                {contactEmail}
              </a>
              . The current public website does not store enquiry submissions in
              a backend database controlled by the site.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              Once an email is sent, the information is handled through normal
              email and project communication tools so that Szymik Digital can
              respond, quote, and deliver services.
            </p>
          </article>

          <article className="panel max-w-4xl p-6 sm:p-8 lg:p-10">
            <div className="space-y-10 text-base leading-8 text-muted">
              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  1. Who this policy applies to
                </h2>
                <p className="mt-4">
                  {siteSettings.legal.businessDescription} The studio is based
                  in {siteSettings.locationText}.
                </p>
                <p className="mt-4">
                  This policy applies when someone visits the website, sends an
                  enquiry, discusses a project, becomes a client, or otherwise
                  communicates with Szymik Digital about its services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  2. Information collected through enquiries
                </h2>
                <p className="mt-4">
                  Depending on how someone uses the website or gets in touch,
                  Szymik Digital may collect:
                </p>
                <div className="mt-4 grid gap-3">
                  {enquiryDataItems.map((item) => (
                    <p key={item} className="list-check">
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  3. Client project information
                </h2>
                <p className="mt-4">
                  If a project moves forward, Szymik Digital may also receive
                  project information needed to deliver the agreed work. This
                  can include:
                </p>
                <div className="mt-4 grid gap-3">
                  {projectDataItems.map((item) => (
                    <p key={item} className="list-check">
                      {item}
                    </p>
                  ))}
                </div>
                <p className="mt-4">
                  Credentials and access details are requested only when they
                  are needed for delivery. Where practical, access is removed,
                  returned, or updated when the project ends unless ongoing
                  support has been agreed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  4. How information is used
                </h2>
                <p className="mt-4">Personal information may be used to:</p>
                <div className="mt-4 grid gap-3">
                  {usageItems.map((item) => (
                    <p key={item} className="list-check">
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  5. Lawful basis
                </h2>
                <p className="mt-4">
                  Where UK data protection law applies, Szymik Digital will
                  usually rely on one or more of the following lawful bases:
                </p>
                <div className="mt-4 grid gap-3">
                  {lawfulBasisItems.map((item) => (
                    <p key={item} className="list-check">
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  6. Sharing and processors
                </h2>
                <p className="mt-4">
                  Szymik Digital does not sell personal information. Personal
                  information may be shared with trusted service providers where
                  needed to operate the website, communicate with clients, or
                  deliver services. This may include:
                </p>
                <div className="mt-4 grid gap-3">
                  {sharingItems.map((item) => (
                    <p key={item} className="list-check">
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  7. Cookies and analytics
                </h2>
                <p className="mt-4">
                  The current public website uses Google Analytics only if a
                  visitor accepts analytics cookies. Google Analytics helps
                  Szymik Digital understand broad site usage, such as which
                  pages are visited, so the website can be improved over time.
                </p>
                <p className="mt-4">
                  Visitors can decline analytics and still use the website
                  normally. The cookie choice is stored in the browser using
                  local storage, and can be reopened using the Cookie settings
                  link in the footer.
                </p>
                <p className="mt-4">
                  The site does not use Google Ads tracking, Google Tag Manager,
                  marketing pixels, or a backend contact-form database. Basic
                  technical logs may still be created by website hosting and
                  security systems as part of normal operation. This section is
                  practical information about the current setup, not legal or
                  accounting advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  8. Retention and security
                </h2>
                <p className="mt-4">
                  Personal data is kept only for as long as necessary to
                  respond to enquiries, prepare quotes, deliver services, keep
                  business records, meet legal or accounting obligations, resolve
                  disputes, or provide agreed support.
                </p>
                <p className="mt-4">
                  Enquiry information that does not become a client project
                  is not kept longer than needed. Client project records
                  may be kept for longer where they are needed for accounting,
                  contractual, support, or record-keeping reasons.
                </p>
                <p className="mt-4">
                  Szymik Digital takes reasonable steps to protect personal
                  information, including limiting access to project information,
                  using appropriate account security, and handling credentials
                  carefully.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  9. Your rights
                </h2>
                <p className="mt-4">
                  Depending on the applicable law, individuals may have rights
                  to access, correct, delete, restrict, object to, or transfer
                  their personal data. They may also have the right to withdraw
                  consent where processing is based on consent.
                </p>
                <p className="mt-4">
                  If UK data protection law applies, individuals may also have
                  the right to complain to the Information Commissioner&apos;s
                  Office.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">
                  10. Contact
                </h2>
                <p className="mt-4">
                  Privacy-related questions or requests can be directed to{" "}
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
