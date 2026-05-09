# Enquiry Form Requirements

This document defines the current Szymik Digital enquiry form baseline for Phase 2 Slice 2.

The form should stay simple and static-export friendly. At this stage it prepares an email draft to the main Szymik Digital enquiry inbox. It does not send data to a database, CRM, payment tool, or automation platform.

## Expected Website Form Fields

The website enquiry form should capture:

- Name
- Business name
- Email
- Phone
- Enquiry type
- Current website URL
- Project description
- Budget range
- Timescale
- Preferred contact method
- Consent checkbox

## Enquiry Type Options

Use these options:

- Website Refresh
- Starter Website
- Local Growth Website
- Automation / Custom Tool Discovery
- Not sure yet

These match the early offer pathways documented in `OFFER_PACKAGES.md`.

## Field-To-Tracker Mapping

| Website form field | Tracker column | Notes |
| --- | --- | --- |
| Name | Client name | Main person Hannah/Ric will contact. |
| Business name | Business name | Used for tracker row, folder naming, quote naming, and project references. |
| Email | Email | Main reply address. |
| Phone | Phone | Optional contact detail if supplied. |
| Enquiry type | Enquiry type | Use the selected offer pathway or "Not sure yet". |
| Current website URL | Hannah notes | Record in notes at this stage; add a dedicated website URL column later only if needed repeatedly. |
| Project description | Hannah notes / Ric notes | Hannah can summarise for triage; Ric can add scope or fit notes after review. |
| Budget range | Hannah notes | Do not treat this as quote value. `Quote value` should only contain a quote that Szymik Digital has sent. |
| Timescale | Due date / Hannah notes | If there is a real deadline, add it to `Due date`; otherwise summarise in notes. |
| Preferred contact method | Next action / Hannah notes | Helps Hannah decide whether to reply by email, suggest a call, or ask Ric to phone. |
| Consent checkbox | Hannah notes | Record that consent was included in the email enquiry if needed. |

## Manual Handoff

Current handoff:

1. Website form opens an email draft.
2. Client sends the email to the main Szymik Digital enquiry inbox.
3. Hannah reviews the inbox and checks whether enough information has been provided.
4. Hannah adds the enquiry to the tracker.
5. Hannah records notes, status, next action, and due date.
6. Ric reviews the enquiry and Hannah's notes.
7. Ric decides the next action: discovery questions, call, quote, hold, or decline.

## Current Routing Rule

All Szymik Digital website enquiries should go to the main Szymik Digital enquiry inbox for Hannah/shared review.

Do not introduce multi-recipient routing, CRM sync, database storage, payment handling, or client portal logic in this slice.

## Implementation Notes

- Keep the form compatible with static export.
- Keep the form visible and editable before sending by using the current email-draft approach.
- Keep the consent wording plain and tied to responding to the enquiry and managing the project conversation.
- If the form later moves away from mailto, update this document before adding automation.
