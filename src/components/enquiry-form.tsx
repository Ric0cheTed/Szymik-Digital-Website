"use client";

import { type FormEvent, useState } from "react";
import { enquiryEmail, siteSettings } from "@/lib/site";

const helpOptions = [
  "Website Design & Build",
  "Website Redesign",
  "Local Business Website",
  "Digital Presence Cleanup",
  "Digital Systems & Automation",
  "Ongoing Support",
  "Not sure yet",
];

const budgetOptions = [
  "Under GBP 2,000",
  "GBP 2,000 - GBP 5,000",
  "GBP 5,000 - GBP 10,000",
  "GBP 10,000+",
  "Not sure yet",
];

const timelineOptions = [
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
    const businessName = getValue(formData, "businessName");
    const websiteUrl = getValue(formData, "websiteUrl");
    const helpWith = getValue(formData, "helpWith");
    const notWorking = getValue(formData, "notWorking");
    const success = getValue(formData, "success");
    const budget = getValue(formData, "budget");
    const timeline = getValue(formData, "timeline");
    const contactMethod = getValue(formData, "contactMethod");

    const subject = `Project enquiry from ${businessName || name || "Szymik Digital website"}`;
    const body = [
      "Project enquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Business name: ${businessName || "Not provided"}`,
      `Website URL: ${websiteUrl || "Not provided"}`,
      `Help needed: ${helpWith}`,
      `What is not working: ${notWorking}`,
      `Success looks like: ${success}`,
      `Budget range: ${budget}`,
      `Timeline: ${timeline}`,
      `Best contact method: ${contactMethod}`,
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
            Share the important details clearly
          </h2>
        </div>
        <p className="text-base leading-8 text-muted">
          This form prepares a draft email addressed to {enquiryEmail}. It keeps
          the enquiry process straightforward and gives you a chance to
          review everything before sending.
        </p>
        <div className="rounded-[1.35rem] border border-border bg-background/75 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Fit note
          </p>
          <p className="mt-2 text-sm leading-7 text-muted">
            The strongest enquiries usually come with a clear business problem,
            a main decision-maker involved, and enough room to improve the
            website or system properly rather than patching around the edges.
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

        <Field htmlFor="businessName" label="Business name">
          <input
            id="businessName"
            name="businessName"
            type="text"
            className={inputClassName}
            autoComplete="organization"
            placeholder="Business or organisation name"
          />
        </Field>

        <Field htmlFor="websiteUrl" label="Website URL">
          <input
            id="websiteUrl"
            name="websiteUrl"
            type="url"
            className={inputClassName}
            placeholder="https://"
          />
        </Field>

        <Field
          htmlFor="helpWith"
          label="What do you need help with?"
          required
          className="sm:col-span-2"
        >
          <select
            id="helpWith"
            name="helpWith"
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
          htmlFor="notWorking"
          label="What is not working right now?"
          required
          className="sm:col-span-2"
        >
          <textarea
            id="notWorking"
            name="notWorking"
            required
            rows={5}
            className={`${inputClassName} min-h-[8.5rem] resize-y`}
            placeholder="What feels outdated, unclear, inconsistent, or harder than it should be?"
          />
        </Field>

        <Field
          htmlFor="success"
          label="What would success look like?"
          required
          className="sm:col-span-2"
        >
          <textarea
            id="success"
            name="success"
            required
            rows={5}
            className={`${inputClassName} min-h-[8.5rem] resize-y`}
            placeholder="A stronger first impression, better enquiries, easier updates, less manual admin, or something else?"
          />
        </Field>

        <Field htmlFor="budget" label="Budget range" required>
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field htmlFor="timeline" label="Timeline" required>
          <select
            id="timeline"
            name="timeline"
            required
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              Select a timeline
            </option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          htmlFor="contactMethod"
          label="Best contact method"
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
                  name="contactMethod"
                  value={method}
                  defaultChecked={index === 0}
                  className="h-4 w-4 accent-[#0d7a33]"
                />
                {method}
              </label>
            ))}
          </div>
        </Field>
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
