# Szymik Digital V2 Final QA and Trust Asset Plan

## Purpose

This document controls what must be reviewed before the parked Szymik Digital v2 branch can be considered for production.

It exists so the v2 preview can stay useful and high-priority without being rushed onto the live site. The aim is to protect the current stable v1 website while keeping a clear path back to the stronger v2 direction when proof, trust assets, and final QA are ready.

Use `docs/V2_ROUTE_QA_CHECKLIST.md` as the route-by-route execution checklist for the manual browser QA pass.

## Current v2 status

- The v2 branch is a strong parked-good preview branch.
- The current live v1 site remains the public baseline.
- No merge to main should happen from the v2 branch yet.
- No Hostinger production upload should be prepared from the v2 branch yet.
- Future production requires explicit approval after full QA.
- Homepage direction and pricing/content direction are accepted as future v2 direction.
- Full production acceptance has not happened yet.

## Full Website Resource + Page QA Pass

Before production, complete an extensive pass across every page and resource, not just the main marketing pages.

The practical execution checklist for this pass lives in `docs/V2_ROUTE_QA_CHECKLIST.md`.

Checklist:

- [ ] Review all routes/pages.
- [ ] Review all header navigation, Services dropdowns, and mobile menus.
- [ ] Review all CTAs and internal links.
- [ ] Review all images, brand assets, screenshots, icons, and public resources.
- [ ] Review all metadata, Open Graph output, robots rules, and sitemap entries.
- [ ] Review all pricing references for consistency and quote-safe wording.
- [ ] Review all contact/enquiry behaviour, including the mailto/email-draft flow.
- [ ] Review cookie banner, cookie settings access, and analytics consent controls.
- [ ] Review Privacy Policy and Terms readability.
- [ ] Review mobile and desktop layouts.
- [ ] Review accessibility, contrast, labels, alt text, focus states, and readability.
- [ ] Review SEO structure and internal links.
- [ ] Run performance, build, and static export checks.
- [ ] Review final proof/work wording.
- [ ] Review final trust assets/photos.
- [ ] Review final social/profile/announcement readiness.
- [ ] Confirm no accidental test, draft, reference, or private assets are exposed publicly.

## Route checklist

Check these routes in browser before any production decision:

- [ ] `/`
- [ ] `/work/`
- [ ] `/services/`
- [ ] `/services/guide-prices/`
- [ ] `/services/automation-custom-tools/`
- [ ] `/website-review/`
- [ ] `/about/`
- [ ] `/contact/`
- [ ] `/privacy-policy/`
- [ ] `/terms/`

Also check sitemap output and any generated/static output routes, including metadata assets, robots, manifest, icons, and Open Graph output where applicable.

## Trust asset planning

Future human trust assets should support the small-studio story without making the site feel like a personal social page.

Plan for:

- Ric photo.
- Hannah photo.
- Ric/Hannah working model explanation.
- Possible Timmy light-touch human element if it feels tasteful and brand-appropriate.
- Professional, warm, local-feeling photography.
- Alt text for all approved trust images.
- Image sizing, cropping, and responsive behaviour that fit the v2 design.
- Consistent use across About, Contact, homepage trust sections, or other suitable v2 areas only after approval.

Guidance:

- Keep the tone professional and grounded.
- Avoid making the site look overly personal or casual.
- Avoid exposing private/home context unnecessarily.
- Use human trust assets to support credibility, not to replace proof or clear service positioning.

## Proof/work planning

Future improvements should strengthen proof while staying truthful.

- Add more recent confirmed client work when available.
- Keep a clear distinction between concept previews and live/client work.
- Add proof/data only where accurate and permissioned.
- Do not add fake testimonials.
- Do not overclaim results, rankings, leads, revenue, or performance.
- Keep Bent Burger and Country Pizza wording truthful unless project status changes.
- Keep Libra Support Services wording accurate, permission-aware, and professional.
- Review all selected work labels before production.

## Content and SEO planning

- Blog/guides remain parked.
- Future guides may help SEO, but only after the main site flow is complete.
- Future content should answer real local-business questions.
- No keyword stuffing.
- Pricing and service pages must stay clear, accurate, and easy to understand.
- Internal links should help visitors move naturally from interest to enquiry.
- SEO updates should support the real services and local-business focus without inventing claims.

## Production gate

The v2 branch must not be merged or uploaded until:

- [ ] Full route/resource QA is completed.
- [ ] Trust/proof asset decisions are made.
- [ ] Pricing and service wording are checked.
- [ ] Contact flow is tested.
- [ ] Cookie/analytics controls are visually checked.
- [ ] Final mobile QA is accepted.
- [ ] Final desktop QA is accepted.
- [ ] Static export/build checks pass.
- [ ] Final SEO/internal linking review is complete.
- [ ] Explicit merge approval is given.
- [ ] Explicit Hostinger upload approval is given.
