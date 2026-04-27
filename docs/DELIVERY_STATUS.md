# Delivery Status

## Current Phase

Phase 2: Client Delivery Operations

## Current Focus

Enquiry form alignment and manual tracker handoff requirements for turning website enquiries into organised Hannah review and Ric follow-up.

## Completed

- Strategic direction agreed
- Szymik Digital positioned as a lean digital studio, not a generic web design agency
- Current wedge defined: websites and local visibility first, automation and custom systems second
- Future-facing product direction acknowledged under the Szymik Digital umbrella
- Source-of-truth docs created
- `STRATEGIC_DIRECTION.md` added as the broader strategic reference
- Phase 0: Source of Truth complete
- Phase 1 Slice 1 complete: homepage positioning and CTA structure aligned around websites, local visibility, and practical digital systems for small businesses
- Homepage now includes a simple conversion path for website, local visibility, website improvement, and automation/custom tool needs
- Primary CTA label aligned to "Start a project"
- Phase 1 Slice 2 complete: services overview and offer pathways aligned around Website Refresh, Starter Website, Local Growth Website, and Automation / Custom Tool Discovery
- Phase 1 Slice 3 complete: contact/enquiry route and client intake aligned around new websites, website refreshes, local visibility, and automation/custom tool enquiries
- Contact route now explains what to include, how email-based enquiries work, what happens next, and reassures visitors they do not need to know the exact package before getting in touch
- Phase 2 Slice 1 complete: client delivery operations baseline added for Ric and Hannah
- Phase 2 Slice 1 was docs-only; no website UI, runtime, form, dependency, package, route, or deployment changes were made
- Phase 2 Slice 2 complete: enquiry form aligned with the client delivery operations flow and tracker handoff requirements
- Contact form now captures name, business name, email, phone, enquiry type, current website URL, project description, budget range, timescale, preferred contact method, and consent
- Enquiry type options now match the early offer pathways: Website Refresh, Starter Website, Local Growth Website, Automation / Custom Tool Discovery, and Not sure yet
- Enquiries still route to the main Szymik Digital enquiry inbox using the existing email-draft approach for Hannah/shared review
- No automation, CRM, database, payment, client portal, or multi-recipient routing was added

## Files Changed In Latest Slice

- `src/components/enquiry-form.tsx`
- `src/app/contact/page.tsx`
- `docs/enquiry-form-requirements.md`
- `docs/DELIVERY_STATUS.md`

## Next Recommended Slice

Create the live tracker using the documented tracker structure.

## Open Decisions

- Final pricing numbers
- Case study permission and details for Libra Support Services
- Final package names if needed
- Whether pricing should be published publicly or handled through quote bands
- Whether Automation / Custom Tool Discovery should be a standalone page or a section under services

## Boundaries

- Current work is enquiry-form and tracker-handoff focused
- No backend form handling, automation, CRM, database, payment, client portal, package, dependency, route, deployment, or legal page changes were introduced
- Existing static email-draft enquiry architecture was preserved
