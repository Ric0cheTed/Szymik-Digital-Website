"use client";

import { type FormEvent, useState } from "react";
import { enquiryEmail, siteSettings } from "@/lib/site";

const helpOptions = [
  "Website Refresh",
  "Starter Website",
  "Local Growth Website",
  "Automation / Custom Tool Discovery",
  "Not sure yet",
];

const budgetOptions = [
  "Under GBP 2,000",
  "GBP 2,000 - GBP 5,000",
  "GBP 5,000 - GBP 10,000",
  "GBP 10,000+",
];

const timescaleOptions = [
  "As soon as possible",
  "Within the next month",
  "Within 1 to 3 months",
  "Flexible",
];

const contactMethods = ["Email", "Phone", "Video call"];

const inputClassName =
  "mt-2 w-full rounded-[1.35rem] border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted/70 focus:border-accent/40 focus:ring-4 focus:ring-accent-soft";

function getValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

type FieldProps = {
  htmlFor: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
};

function Field({
  htmlFor,
  label,
  required = false,
  children,
  className = "",
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-foreground">
        {label}
        {required ? <span className="text-accent-strong"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

export function EnquiryForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = getValue(formData, "name");
    const email = getValue(formData, "email");
    const phone = getValue(formData, "phone");
    const businessName = getValue(formData, "businessName");
    const currentWebsiteUrl = getValue(formData, "currentWebsiteUrl");
    const enquiryType = getValue(formData, "enquiryType");
    const projectDescription = getValue(formData, "projectDescription");
    const budgetRange = getValue(formData, "budgetRange");
    const timescale = getValue(formData, "timescale");
    const preferredContactMethod = getValue(formData, "preferredContactMethod");
    const consent = formData.get("consent") === "yes" ? "Yes" : "No";

    const subject = `Project enquiry from ${businessName || name || "Szymik Digital website"}`;
    const body = [
      "Project enquiry",
      "",
      `Name: ${name}`,
      `Business name: ${businessName}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Enquiry type: ${enquiryType}`,
      `Current website URL: ${currentWebsiteUrl || "Not provided"}`,
      `Project description: ${projectDescription}`,
      `Budget range: ${budgetRange || "Not provided"}`,
      `Timescale: ${timescale}`,
      `Preferred contact method: ${preferredContactMethod}`,
      `Consent confirmed: ${consent}`,
    ].join("\n");

    window.location.href = `mailto:${enquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus(
      `Your email app should open with a draft addressed to ${enquiryEmail}. If it does not, send the details manually to that address.`,
    );
  }

  return (
    <form className="panel p-6 sm:p-8" onSubmit={handleSubmit}>
      <div className="mb-8 space-y-4">
        <div>
          <span className="eyebrow">Project enquiry</span>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            Prepare a clear project email
          </h2>
        </div>
        <p className="text-base leading-8 text-muted">
          This form prepares a draft email addressed to {enquiryEmail}. It keeps
          the enquiry process straightforward and gives you a chance to review
          everything before sending. Enquiries go to the main Szymik Digital
          inbox for Hannah to triage before Ric reviews the next step.
        </p>
        <div className="rounded-[1.35rem] border border-border bg-background/75 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Fit note
          </p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Start with the practical need: a website refresh, a starter
            website, a local growth website, or a repeated workflow problem
            that may need automation or custom tool discovery.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field htmlFor="name" label="Name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClassName}
            autoComplete="name"
            placeholder="Your name"
          />
        </Field>

        <Field htmlFor="businessName" label="Business name" required>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            className={inputClassName}
            autoComplete="organization"
            placeholder="Business or organisation name"
          />
        </Field>

        <Field htmlFor="email" label="Email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClassName}
            autoComplete="email"
            placeholder="name@business.com"
          />
        </Field>

        <Field htmlFor="phone" label="Phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClassName}
            autoComplete="tel"
            placeholder="Optional"
          />
        </Field>

        <Field
          htmlFor="currentWebsiteUrl"
          label="Current website URL"
          className="sm:col-span-2"
        >
          <input
            id="currentWebsiteUrl"
            name="currentWebsiteUrl"
            type="url"
            className={inputClassName}
            placeholder="https://"
          />
        </Field>

        <Field
          htmlFor="enquiryType"
          label="Enquiry type"
          required
          className="sm:col-span-2"
        >
          <select
            id="enquiryType"
            name="enquiryType"
            required
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              Select the closest fit
            </option>
            {helpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          htmlFor="projectDescription"
          label="Project description"
          required
          className="sm:col-span-2"
        >
          <textarea
            id="projectDescription"
            name="projectDescription"
            required
            rows={7}
            className={`${inputClassName} min-h-[11rem] resize-y`}
            placeholder="Tell us what you need help with, what is not working right now, and what a good outcome would look like."
          />
        </Field>

        <Field htmlFor="budgetRange" label="Budget range">
          <select
            id="budgetRange"
            name="budgetRange"
            defaultValue=""
            className={inputClassName}
          >
            <option value="">
              Not sure yet
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field htmlFor="timescale" label="Timescale" required>
          <select
            id="timescale"
            name="timescale"
            required
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              Select a timescale
            </option>
            {timescaleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          htmlFor="preferredContactMethod"
          label="Preferred contact method"
          required
          className="sm:col-span-2"
        >
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {contactMethods.map((method, index) => (
              <label
                key={method}
                className="flex cursor-pointer items-center gap-3 rounded-[1.35rem] border border-border bg-white px-4 py-3 text-sm font-medium text-foreground transition hover:border-accent/40 hover:bg-accent-soft"
              >
                <input
                  type="radio"
                  name="preferredContactMethod"
                  value={method}
                  defaultChecked={index === 0}
                  className="h-4 w-4 accent-[#0d7a33]"
                />
                {method}
              </label>
            ))}
          </div>
        </Field>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 rounded-[1.35rem] border border-border bg-white px-4 py-4 text-sm leading-7 text-muted transition hover:border-accent/40 hover:bg-accent-soft">
            <input
              type="checkbox"
              name="consent"
              value="yes"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-[#0d7a33]"
            />
            <span>
              I consent to Szymik Digital using these details to respond to my
              enquiry and manage the project conversation.
            </span>
          </label>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <p className="text-sm leading-7 text-muted">
          There is no black-box submission here. The enquiry details open in
          your own email app so the message is visible, editable, and easy to
          send directly.
        </p>
        <p className="text-sm leading-7 text-muted">
          If your device does not open an email app automatically, you can send
          the same details directly to{" "}
          <a
            href={`mailto:${enquiryEmail}`}
            className="font-semibold text-accent-strong transition hover:text-foreground"
          >
            {enquiryEmail}
          </a>
          .
        </p>
        <button type="submit" className="btn-primary">
          {siteSettings.ctaLabels.enquiry}
          <span aria-hidden>{">"}</span>
        </button>
        {status ? (
          <p className="text-sm leading-7 text-accent-strong" aria-live="polite">
            {status}
          </p>
        ) : null}
      </div>
    </form>
  );
}
