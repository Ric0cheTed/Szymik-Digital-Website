# Roadmap

This roadmap keeps Szymik Digital focused on building a practical commercial foundation before expanding into automation and products.

## Current Control Position

### Stable Live V1

The current live Szymik Digital website is the stable v1 baseline.

It is already live on the public domain and has post-live analytics/cookie/privacy work completed. It should remain stable while major redesign work happens separately.

### Premium Website V2 Refresh

The next website direction is a premium v2 refresh.

The v2 redesign uses a separate branch / preview flow and should not be merged or uploaded to production until reviewed and explicitly approved.

Current status: preview / parked-good. The v2 branch is accepted as a strong future direction, but it is intentionally not the immediate production plan because the current live site launched recently and should remain stable for now.

The v2 branch now includes the main future site flow: Homepage v2, Work v2, Services hub, Guide Prices, Automation / Custom Tools, About v2, Contact v2, Website Review, Services dropdown/mobile accordion navigation, internal linking/conversion flow polish, and retained hover/dropdown motion polish. Homepage direction and pricing/content direction are accepted as the future v2 direction, but full production acceptance still requires manual final QA later.

The initial redesign order is:

1. Homepage first.
2. Work / Case Studies.
3. Services.
4. Contact / enquiry flow.

The v2 branch should be revisited when Szymik Digital has more recent confirmed client work, more real proof/performance data, and reviewed human trust assets such as approved photos of Ric and Hannah.

Main future return items are controlled by `docs/V2_FINAL_QA_AND_TRUST_ASSET_PLAN.md` and include:

1. Full Website Resource + Page QA Pass across every route, generated output, and public resource.
2. Manual full journey QA across the main v2 routes.
3. Mobile navigation QA.
4. Services dropdown hover/persistence QA.
5. Website Review to Contact handoff QA.
6. Contact form mailto/email-draft test.
7. Cookie banner and cookie settings visual check.
8. Ric/Hannah photo and trust asset pass.
9. Possible Timmy light-touch decision if it fits the brand and Ric approves it.
10. Final proof/work review with more real work, proof, and client examples where available.
11. Final SEO/internal linking review before any production decision.
12. Explicit final production decision before merge or Hostinger upload.

Blog/guides remain parked until the main site flow is finished and the production direction is clearer.

### Concept Preview Workflow

Concept Preview is now an official Szymik Digital process.

The workflow is:

```text
Brief
-> Concept Preview
-> Review / Direction Lock
-> Build
-> Internal Review
-> Client Preview
-> Refine
-> Launch / Handover
```

Concept Previews are visual direction tools. They help align style, structure, and expectations before build, but they are not pixel-perfect technical obligations.

### Completed Redesign Slice

Phase 3 Slice 1 - Website v2 Redesign Branch + Homepage Concept Build.

Goal:

Start the premium website redesign separately from the current live v1 by creating/using a redesign branch and building the homepage toward the approved dark/green Szymik Digital Concept Preview direction.

Status:

Implemented on `redesign/site-v2-homepage` as a homepage-first preview slice. The stable live v1 remains protected on main, and no Hostinger production upload should be prepared from this slice.

Scope:

- homepage-first
- Szymik Digital branding
- selected work previews for Bent Burger, Country Pizza, and Libra Support Services where suitable
- preserve existing live v1 until approved
- no Hostinger production upload
- no CRM integration
- no client portal
- no automation

### Completed Redesign Slice

Phase 3 Slice 2 - Review Homepage V2 Preview + Refine Responsiveness.

Goal:

Review the homepage v2 preview in browser across mobile and desktop, then make a bounded refinement pass for spacing, contrast, copy, and selected-work proof accuracy before moving to any wider route redesign.

Scope:

- homepage preview QA only
- mobile and desktop spacing review
- selected work wording/proof accuracy review
- CTA and route preservation check
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented as a bounded homepage v2 polish pass on `redesign/site-v2-homepage`. The pass improved hero responsiveness, selected work card presentation, CTA touch targets, and card rhythm while preserving static export compatibility and the branch/preview workflow.

### Completed Redesign Slice

Phase 3 Slice 3 - Manual Browser Acceptance + Selected Work Proof Assets.

Goal:

Bring the homepage closer to the approved dark/green Concept Preview direction by using real preview assets for Bent Burger, Country Pizza, and Libra Support Services in the hero and selected-work sections.

Scope:

- homepage concept-match polish only
- hero project-preview collage
- selected work preview assets
- homepage-only dark header treatment
- truthful wording for concept previews and real local-business website work
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage` as a homepage-first concept-match/assets pass. The hero now uses layered browser-window previews, selected work uses the provided real assets, and the homepage header has a dark/premium treatment while the stable live v1 remains protected.

### Completed Redesign Slice

Phase 3 Slice 4 - Manual Browser Acceptance + Homepage Asset QA.

Goal:

Fix the homepage header readability issue and polish the dark/green concept match without redesigning from scratch.

Scope:

- homepage/header polish only
- readable light nav text on dark homepage header
- green active Home state
- vivid readable Start a project CTA
- hero/header spacing and dark concept rhythm
- preserve selected-work preview assets and truthful wording
- preserve non-homepage header readability
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage` as a homepage/header readability and concept-match polish pass. The homepage header now uses explicit light navigation text on the dark premium shell, a green-accent active Home state, and preserved light-header behaviour on other routes.

### Completed Redesign Slice

Phase 3 Slice 5 - Homepage V2 Concept Reference Match Rebuild.

Goal:

Rebuild/refactor the homepage layout so it closely matches the approved concept reference image rather than reading like the old homepage with dark styling.

Scope:

- homepage-first concept-reference match
- compact dark header and dark homepage rhythm
- hero headline with green emphasis and trust points
- layered browser-window project collage
- selected work cards with real preview assets
- service cards, wide trust panel, process flow, final CTA banner, and compact dark footer handoff
- truthful selected-work wording
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage` using `docs/design-references/homepage-v2-concept-reference.png` as the visual direction reference. The homepage was rebuilt as real responsive sections using the existing project assets, with no new routes or dependencies.

Acceptance:

Ric manually accepted this homepage v2 direction on the redesign branch. The accepted visual standard for v2 is the dark/green premium local-studio style: black/charcoal base, vivid Szymik green accents, compact premium rhythm, strong project previews, clean dark cards, and truthful local-business messaging.

This acceptance is branch-only. The stable live v1 remains protected on main, and no Hostinger production upload should happen until the wider v2 review and approval process is complete.

### Completed Redesign Slice

Phase 3 Slice 6 - Homepage V2 Branch Acceptance Notes.

Goal:

Record Ric's manual acceptance of the homepage v2 concept-reference direction on the redesign branch.

Scope:

- docs-only acceptance note
- record accepted homepage visual direction
- confirm homepage v2 remains branch-only
- set accepted homepage style as the v2 visual standard for the next redesigned pages
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Complete. No source, runtime, UI, styling, route, package, asset, deployment, analytics, contact/enquiry, CRM, agreement pack, ops workspace, or folder structure changes were made for this acceptance slice.

### Completed Redesign Slice

Phase 3 Slice 7 - Work / Case Studies V2.

Goal:

Redesign the Work / Case Studies route using the accepted homepage v2 visual system while keeping production/main/Hostinger guarded until full v2 review and approval.

Scope:

- `/work` route v2 redesign
- dark/green premium local-studio styling from the accepted homepage
- real preview assets where suitable
- truthful proof, concept preview, and case-study wording
- preserve existing routes
- preserve contact/enquiry runtime
- preserve analytics/cookie/privacy setup
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage`. The Work / Case Studies route now uses the accepted dark/green v2 visual system with strong preview cards for Bent Burger, Country Pizza, and Libra Support Services, concise Concept Preview process explanation, and safe conversion CTAs.

### Completed Redesign Slice

Phase 3 Slice 7B - V2 Header Consistency Across Homepage and Work.

Goal:

Make the site header visually consistent between the accepted homepage v2 and redesigned Work / Case Studies v2 page before moving on to Services v2.

Scope:

- shared header consistency for `/` and `/work`
- dark/green premium v2 header on both accepted v2 pages
- route-aware active state for Home and Work
- readable mobile menu on both accepted v2 pages
- preserve readable header behaviour on other routes until their v2 slices
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage`. The accepted dark v2 header now applies to both homepage and Work, with light readable nav text, green active state, and route-safe behaviour for pages not yet redesigned.

### Completed Redesign Slice

Phase 3 Slice 8 - Services V2.

Goal:

Redesign the Services route using the accepted v2 visual system and the now-matched homepage/work direction while keeping the offer ladder truthful and route anchors intact.

Scope:

- `/services` route v2 redesign
- preserve Website Refresh, Starter Website, Local Growth Website, and Automation / Custom Tool Discovery anchors
- preserve pricing/quote guidance truthfulness
- preserve contact/enquiry flow
- preserve analytics/cookie/privacy setup
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage`. The Services route now uses the accepted dark/green v2 visual system with four clear service pathway cards, preserved anchors, a How to choose section, Concept Preview delivery process, practical support panel, and conversion CTA while keeping claims truthful and automation discovery-first.

### Completed Redesign Slice

Phase 3 Slice 8B - V2 Header Consistency Across Homepage, Work, and Services.

Goal:

Make the shared site header visually consistent across the accepted v2 pages before moving on to Contact V2.

Scope:

- shared header consistency for `/`, `/work`, and `/services`
- dark/green premium v2 header on all accepted v2 pages
- route-aware active state for Home, Work, and Services
- readable mobile menu on all accepted v2 pages
- preserve readable header behaviour on Contact, Privacy Policy, and Terms until their v2 slices
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage`. The accepted dark v2 header now applies to homepage, Work, and Services, with light readable nav text, green active state, readable CTA, and route-safe behaviour for pages not yet redesigned.

### Completed Redesign Slice

Phase 3 Slice 9 - Contact / Enquiry V2.

Goal:

Redesign the Contact / Enquiry route using the accepted v2 visual system while preserving the existing enquiry form behaviour and client-intake expectations.

Scope:

- `/contact` route v2 redesign
- preserve existing enquiry form fields and consent behaviour
- preserve email-draft/runtime behaviour
- preserve analytics/cookie/privacy setup
- preserve Hannah/Ric review expectation wording
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage`. The Contact / Enquiry route now uses the accepted dark/green v2 visual system with a premium hero, low-pressure enquiry flow, Hannah/Ric review explanation, support cards, Concept Preview note, dark-styled enquiry form, and closing reassurance CTA.

Runtime guardrail:

The existing enquiry form behaviour was preserved. The form still prepares a mail draft addressed to the Szymik Digital enquiry inbox and keeps the existing fields, field names, required fields, consent checkbox, status message, and client-side submit flow. No backend submission logic, CRM integration, email automation, new dependency, route change, merge to main, or Hostinger production upload was added.

### Completed Redesign Slice

Phase 3 Slice 9B - Services V2 Libra Analytics Proof Panel.

Goal:

Add a polished real-world proof panel to the Services hero area using the Libra Support Services analytics snapshot while preserving the accepted v2 visual system.

Scope:

- `/services` hero proof panel only
- use Libra analytics snapshot and cautious hardcoded metrics
- keep the existing "Start with the problem" panel
- preserve service pathway content and anchors
- no route changes
- no runtime/contact/form changes
- no analytics/cookie/privacy changes
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage`. The Services hero now includes a dark/green "Real-world traction" panel using the Libra Support Services analytics screenshot, compact metric chips, and careful wording that presents the snapshot as practical visibility proof without promising guaranteed results.

### Completed Redesign Slice

Phase 3 Slice 10 - About / Founder Story V2.

Goal:

Redesign the About / founder-story route using the accepted v2 visual standard so the public site tells the Ric/Hannah local-studio story with the same premium dark/green system.

Scope:

- `/about` or existing founder/about route only, if present
- keep route structure intact
- preserve analytics/cookie/privacy setup
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage`. The About route now uses the accepted dark/green v2 visual system with a stronger founder-led local-studio story, Ric/Hannah working model, differentiator cards, values/approach section, and a conversion CTA while avoiding claims about large team size, awards, guaranteed results, or guaranteed rankings/leads.

### Completed Redesign Slice

Phase 3 Slice 10B - Remove Services Analytics Proof Panel.

Goal:

Remove the Libra analytics proof panel from Services and restore the cleaner Services v2 hero composition.

Scope:

- `/services` proof-panel removal only
- keep the "Start with the problem" hero panel
- keep the four service pathways and Services v2 content intact
- keep About / Founder Story V2 intact
- remove the proof screenshot asset if unused
- no route changes
- no runtime/contact/form changes
- no analytics/cookie/privacy changes
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage`. The Services hero no longer includes the "Real-world traction" Libra analytics panel or screenshot; the clean Services v2 layout and original "Start with the problem" support card remain in place. About V2 was not changed by this removal slice.

### Completed Redesign Slice

Phase 3 Slice 11 - V2 Cross-Page Polish and Legal-Route/Header Safety Review.

Goal:

Review the full v2 branch experience across Homepage, Work, Services, About, and Contact, then confirm whether Privacy Policy and Terms should remain on the readable legacy/light shell or receive a minimal dark-header/readability polish.

Scope:

- cross-page v2 visual and mobile QA
- header active-state/readability checks across all public routes
- legal-route readability guardrails
- no content overclaiming
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage`. The v2 branch has reached a bounded cross-page polish and safety review stage: main v2 pages keep the accepted dark/green header, Privacy Policy and Terms remain readable on the light legal-page shell, footer links remain readable, cookie settings remain available, and the footer Start a project CTA now points directly to the enquiry anchor.

Cookie/analytics note:

The consent-based analytics approach was preserved. The root layout still mounts the analytics consent component, Google Analytics still loads only after acceptance, the cookie settings button remains in the footer, and no consent storage or analytics loading behaviour was changed.

### Completed Redesign Slice

Phase 3 Slice 12 - Park Website V2 Preview Branch.

Goal:

Record that the v2 redesign branch is accepted as a strong future direction but parked from production for now.

Scope:

- docs-only parking decision
- keep current live v1 stable as the public baseline
- keep v2 available as preview/future upgrade direction
- no Hostinger production upload
- no merge to main
- no source/runtime/UI/styling/package/route changes
- no CRM integration
- no client portal
- no automation

Status:

Complete. The v2 branch is parked-good / preview-hold. It remains the accepted future visual direction, but no merge to main and no Hostinger upload should happen yet.

Future return point:

1. Review the v2 branch against the then-current live site and business proof.
2. Add human trust/photo assets if approved.
3. Refresh Work and proof sections with newer confirmed examples.
4. Run final QA across desktop, mobile, static export, contact/enquiry, cookie consent, and legal routes.
5. Then decide whether to merge and prepare a Hostinger upload.

Production guard:

The current live site remains the stable public baseline. A future v2 relaunch can become part of the business story: Szymik Digital launched, learned, improved its own process, and upgraded the website to match the quality of work it now delivers.

### Completed Redesign Slice

Phase 3 Slice 13 - Services Anchors + Dropdown Navigation V2.

Goal:

Add a polished, accessible Services dropdown/accordion navigation pattern to the v2 preview branch and add stable Services page anchors.

Scope:

- Services dropdown in the shared header
- mobile Services accordion inside the header menu
- stable Services section anchors
- preserve legacy Services hash links where needed
- no Guide Prices item yet
- no pricing section
- no new routes/pages
- no contact/enquiry runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main
- no CRM integration
- no client portal
- no automation

Status:

Implemented on `redesign/site-v2-homepage`. The Services nav now opens as a click/keyboard-accessible desktop dropdown and a mobile accordion, linking to `website-refresh`, `starter-website`, `local-growth-website`, `automation-discovery`, `how-to-choose`, and `concept-preview-process`. The branch remains parked-good / preview-hold.

### Completed Redesign Slice

Phase 3 Slice 13B - Services Dropdown Hover/Readability Fix.

Goal:

Adjust the desktop Services dropdown so Services behaves like a normal link when clicked, while still revealing the anchor dropdown on hover and keyboard focus.

Scope:

- shared header Services dropdown behaviour
- desktop hover/focus dropdown open state
- keep the top-level Services item as a real `/services/` link
- improve dropdown item text contrast on the dark v2 panel
- keep mobile Services accordion behaviour
- no Guide Prices item
- no pricing section
- no new routes/pages
- no Services page content rewrite
- no contact/enquiry runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage`. The desktop Services nav item now navigates to `/services/` when clicked, while hover and keyboard focus reveal the Services anchor dropdown. Dropdown item text now uses explicit light/white text on the dark v2 menu, and the mobile Services accordion remains unchanged. The branch remains parked-good / preview-hold.

### Completed Redesign Slice

Phase 3 Slice 13C - Services Dropdown Hover Persistence Fix.

Goal:

Fix the desktop Services dropdown so visitors can move from the Services nav link into the dropdown panel and click service anchor links without the menu closing too quickly.

Scope:

- shared header Services dropdown persistence
- hover bridge between the Services link and dropdown panel
- short delayed close for steadier pointer movement
- keep the top-level Services item as a real `/services/` link
- keep dropdown links readable and clickable
- keep mobile Services accordion behaviour
- no Guide Prices item
- no pricing section
- no new routes/pages
- no Services page content rewrite
- no contact/enquiry runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage`. The desktop Services dropdown now stays open while moving from the Services nav link into the dropdown panel, and the anchor links remain clickable. The top-level Services item still navigates to `/services/`, and the mobile accordion remains unchanged. The branch remains parked-good / preview-hold.

### Completed Redesign Slice

Phase 3 Slice 14 - Services Guide Pricing V2.

Goal:

Add a polished Guide Prices section to the Services page on the v2 preview branch, and add a Guide Prices item to the existing Services dropdown navigation.

Scope:

- `/services` Guide Prices section
- stable `#guide-prices` anchor
- grouped guide pricing for website projects, e-commerce and migration, automation and custom tools, and ongoing care and support
- staged payment wording for suitable projects
- Guide Prices item in the desktop Services dropdown and mobile accordion
- preserve Slice 13C dropdown behaviour
- no new routes/pages
- no contact/enquiry runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage`. The Services page now includes guide pricing with clear starting points, scope caveats, and cautious staged payment wording. The Services dropdown and mobile accordion now include Guide Prices linking to `/services/#guide-prices`, while the top-level Services item remains a real `/services/` link. The branch remains parked-good / preview-hold.

### Completed Redesign Slice

Phase 3 Slice 15 - Services Guide Prices Subpage V2.

Goal:

Begin the agreed hybrid Services structure by moving full Guide Prices content into its own SEO-friendly subpage while keeping `/services` as a cleaner overview hub.

Scope:

- new `/services/guide-prices/` route
- full guide pricing moved to the pricing subpage
- `/services` reduced to a shorter pricing summary and CTA
- Services dropdown and mobile accordion Guide Prices link updated
- preserve Slice 13C Services dropdown behaviour
- no homepage, Work, Contact, or About redesign
- no contact/enquiry runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage`. `/services` now remains the overview hub, `/services/guide-prices/` holds the full guide pricing content, and `/services/automation-custom-tools/` remains a future candidate for deeper service explanation. The Services dropdown now sends Guide Prices to `/services/guide-prices/`. The branch remains parked-good / preview-hold.

### Completed Redesign Slice

Phase 3 Slice 16 - Automation / Custom Tools Subpage V2.

Goal:

Continue the hybrid Services structure by adding an SEO-friendly Automation / Custom Tools service page without cluttering the main Services overview.

Scope:

- new `/services/automation-custom-tools/` route
- discovery-first automation/custom tools explanation
- common admin/workflow pain points
- practical tool and dashboard examples
- simple process explanation
- guide pricing links
- Services overview hub link update
- Services dropdown and mobile accordion link update
- preserve Slice 13C Services dropdown behaviour
- no homepage, Work, Contact, About, or Guide Prices redesign
- no contact/enquiry runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage`. `/services` remains the overview hub, `/services/guide-prices/` holds full pricing, and `/services/automation-custom-tools/` now holds the deeper automation/custom tools explanation. The Services dropdown now sends Automation / Custom Tools to `/services/automation-custom-tools/`. The branch remains parked-good / preview-hold.

### Completed Redesign Slice

Phase 3 Slice 17 - V2 Internal Linking + Conversion Flow Review.

Goal:

Review and improve the internal linking, CTA flow, and page-to-page journey across the parked-good v2 preview site so visitors can move from interest to enquiry without adding pages or bloating content.

Scope:

- main v2 journey routes only
- homepage CTA and selected-work link polish
- Services hub, Guide Prices, and Automation / Custom Tools cross-links
- Work page Concept Preview process link
- About page Work/Services/Contact journey support
- preserve Services dropdown/mobile accordion behaviour
- preserve Contact form runtime and mailto/email-draft behaviour
- preserve analytics/cookie/privacy behaviour and legal route access
- no new pages/routes
- no blog/guides
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage`. The main v2 flow now links more clearly between Homepage, Work, Services, Guide Prices, Automation / Custom Tools, About, and Contact. The Services dropdown destinations remain intact, Contact stays the enquiry endpoint, and the branch remains parked-good / preview-hold.

### Completed Redesign Slice

Phase 3 Slice 18 - Website Review CTA V2.

Goal:

Add a polished, low-pressure Website Review enquiry route to the parked-good v2 preview branch without cluttering the main pages or changing contact runtime behaviour.

Scope:

- new `/website-review/` route
- premium dark v2 Website Review page
- concise review checks, fit guidance, process, and CTA into Contact
- subtle Homepage, Services, and Contact links only
- safe static `Website Review` enquiry type added to the existing email-draft form
- v2 dark header treatment applied to the new Website Review route
- manual sitemap updated for the new route and current Services subroutes
- no main header nav item
- no blog/guides
- no full page redesigns
- no backend/contact runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage`. `/website-review/` now gives existing-site visitors a low-pressure way to request practical feedback before choosing a larger service path. The existing Contact route remains the enquiry endpoint, and the branch remains parked-good / preview-hold.

### Completed Redesign Slice

Phase 3 Slice 18B - Website Review Navigation Visibility Fix.

Goal:

Make `/website-review/` discoverable without cluttering the top-level header navigation.

Scope:

- Website Review added to desktop Services dropdown
- Website Review added to mobile Services accordion
- subtle Website Review footer link added
- top-level header nav kept unchanged
- Services remains a real `/services/` link
- preserve Slice 13C dropdown behaviour
- no new routes
- no page redesigns
- no contact/runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage`. Website Review is now visible through the Services navigation group and footer while staying out of the main top-level nav. The branch remains parked-good / preview-hold.

### Completed Redesign Slice

Phase 3 Slice 19 - V2 Subtle Motion Polish Layer.

Goal:

Add restrained, premium motion to the accepted v2 preview site without turning it into a flashy redesign or adding JavaScript animation dependencies.

Scope:

- reusable CSS motion utilities
- reduced-motion support
- homepage hero background/glow/text/collage motion polish
- smoother card, panel, button, and link transitions
- subtle Services dropdown entrance polish
- preserve Slice 13C dropdown behaviour
- no new routes or sections
- no page redesigns
- no contact/runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage`. The v2 preview branch now has a restrained CSS-first motion layer with reduced-motion protection, while remaining parked-good / preview-hold and not intended for immediate production.

### Completed Redesign Slice

Phase 3 Slice 19B - Visible Motion Tuning Pass.

Goal:

Tune the v2 motion layer so the homepage hero movement is more noticeable while still feeling premium, calm, and performance-safe.

Scope:

- stronger transform-based homepage hero glow/background drift
- more visible but gentle hero project-preview collage float
- clearer staggered homepage hero entrance
- preserve card/button hover polish
- preserve Services dropdown behaviour and mobile accordion behaviour
- preserve reduced-motion support
- no page redesigns
- no new content/routes
- no dependencies
- no contact/runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage`. The branch remains parked-good / preview-hold, with the motion layer tuned to be visible enough for manual review without changing the accepted v2 layout or production guardrails.

### Completed Redesign Slice

Phase 3 Slice 19C - Homepage Motion Visibility Fix.

Goal:

Make the homepage hero motion visibly perceptible in normal browser settings while keeping the accepted v2 design restrained and reduced-motion safe.

Scope:

- confirm homepage motion classes are applied to visible elements
- stronger transform-based hero glow/background drift
- slow moving hero accent-line layer
- more visible but still gentle project-preview collage float
- clearer fade/settle hero entrance on page load
- keep button/card hover polish
- preserve Services dropdown and mobile nav behaviour
- preserve reduced-motion support
- no page redesigns
- no new content/routes
- no dependencies
- no contact/runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage` for manual normal-motion review, but later superseded by Slice 19D because the homepage hero/collage animation still was not visibly useful in Ric's browser review. The branch remains parked-good / preview-hold.

### Completed Redesign Slice

Phase 3 Slice 19D - Motion Scope Trim.

Goal:

Trim the v2 motion layer so it keeps only visible, reliable, restrained polish instead of continuing to chase homepage hero/collage animation that manual review did not show clearly.

Scope:

- remove homepage hero drift animation
- remove moving accent-line animation
- remove hero collage float animation
- remove hero entrance fade/settle classes
- keep button, card, link, and panel hover polish
- keep the Services dropdown entrance polish where it is already visible and useful
- preserve Slice 13C dropdown behaviour and mobile accordion behaviour
- preserve reduced-motion support
- no page redesigns
- no new content/routes
- no dependencies
- no contact/runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Implemented on `redesign/site-v2-homepage`. The homepage keeps its accepted static dark/green hero composition and project-preview collage, while the non-useful hero/collage animation layer has been removed. Retained motion is limited to visible hover/focus polish and the Services dropdown entrance.

### Completed Redesign Slice

Phase 3 Slice 20 - V2 Preview Branch Acceptance + Hold Notes.

Goal:

Create a clear checkpoint for the current v2 preview branch after the recent redesign, hybrid Services structure, pricing, automation/custom tools page, Website Review route, internal linking, dropdown navigation, and motion-scope trim work.

Scope:

- docs/status only
- record the v2 branch as parked-good / preview-hold
- record recent additions and the current route/content shape
- distinguish future direction acceptance from full production acceptance
- keep current live v1 as the stable public baseline
- no source/UI/styling changes
- no route changes
- no contact/runtime changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Complete. The v2 branch is a strong future direction and remains a priority to finish, but it is not production-approved yet. Future production consideration should wait for stronger proof, newer work, reviewed human trust assets, and final QA across navigation, contact handoff, cookie/consent UI, mobile behaviour, SEO/internal linking, and static export readiness.

### Completed Redesign Slice

Phase 3 Slice 21 - V2 Preview Final QA + Trust Asset Planning.

Goal:

Create a clear final QA and trust-asset planning checkpoint for the parked v2 preview branch before any future production decision.

Scope:

- docs/checklist only
- create dedicated v2 final QA and trust asset plan
- require full website resource and page QA, not just main-page review
- record route checklist and generated/static output checks
- record Ric/Hannah trust asset planning
- record possible Timmy light-touch decision
- record proof/work review guardrails
- keep blog/guides parked until the main site flow is fully ready
- no source/UI/styling changes
- no route changes
- no asset changes
- no runtime/contact changes
- no analytics/cookie/privacy behaviour changes
- no Hostinger production upload
- no merge to main

Status:

Complete. `docs/V2_FINAL_QA_AND_TRUST_ASSET_PLAN.md` is now the reference checklist before any future v2 production decision. The v2 branch remains parked-good / preview-hold, with current live v1 still the stable public baseline.

## Phase 0: Source Of Truth

### Goal

Lock the strategic direction so future website, offer, and client workflow decisions have a clear reference point.

### Key Deliverables

- Project truth document
- Roadmap
- Service ladder
- Early offer package definitions
- Client workflow
- Delivery status tracker

### Acceptance Criteria

- Core positioning is documented
- Service direction is clear
- Near-term and future-facing work are separated
- No app code changes are required

### Notes / Boundaries

- Docs-only phase
- No routes, components, styles, package files, or dependencies should change
- Pricing can remain directional until final numbers are chosen

## Phase 1: Website Foundation

### Goal

Turn the Szymik Digital website into a clear first impression for a lean digital studio focused on practical websites, local visibility, and digital systems.

### Key Deliverables

- Homepage positioning update
- Clear primary call to action
- Service summary content
- Proof-led references where available
- Basic contact path
- Messaging aligned with Project Truth

### Acceptance Criteria

- The site does not read like a generic web design agency
- Visitors can quickly understand who Szymik Digital helps
- Visitors can quickly understand what Szymik Digital sells
- The current strategic wedge is visible: websites and local visibility first, automation second

### Notes / Boundaries

- Keep the site focused and lightweight
- Avoid overbuilding before offers and proof are stronger
- Do not present future products as current services

## Phase 2: Service Pages + Offer Structure

### Goal

Create a clear service structure that makes it easier for small business clients to understand and buy.

### Key Deliverables

- Website Refresh service page
- Starter Website service page
- Local Growth Website service page
- Automation / Custom Tool Discovery service page or section
- Refined package names if needed
- Quote-ready scope definitions

### Acceptance Criteria

- Each offer has a clear client problem, outcome, and boundary
- Packages are distinct from each other
- Exclusions are clear enough to prevent scope drift
- Pricing direction is ready to become published pricing or quote bands

### Notes / Boundaries

- Keep the offer ladder simple
- Avoid too many packages
- Automation should be positioned as discovery-led, not as an open-ended build promise

## Phase 3: Client Starter Pack

### Goal

Create the repeatable materials needed to onboard and manage early clients professionally.

### Key Deliverables

- Discovery questionnaire
- Quote template
- Basic scope template
- Deposit and payment terms
- Client content checklist
- Handover checklist
- Support options outline

### Acceptance Criteria

- A new enquiry can move from discovery to quote without reinventing the process
- Scope, payment, review rounds, and client responsibilities are clear
- Client handover can happen consistently

### Notes / Boundaries

- Keep documents simple and usable
- Avoid heavy legal language unless reviewed properly
- Use plain English

## Phase 4: Libra Case Study

### Goal

Use Libra Support Services as practical proof of the Szymik Digital approach, if permission and suitable details are available.

### Key Deliverables

- Case study permission check
- Before / after or problem / solution summary
- Project goals
- Work delivered
- Outcome narrative
- Screenshots or live references where appropriate

### Acceptance Criteria

- Case study is accurate and permissioned
- Claims are specific and defensible
- The case study supports the local business website and visibility wedge

### Notes / Boundaries

- Do not invent metrics
- Do not publish confidential client details
- If measurable results are unavailable, focus on clarity, structure, and delivery

## Phase 5: Outreach + Lead Generation

### Goal

Create a simple, repeatable path for finding and converting early clients.

### Key Deliverables

- Ideal client list
- Local prospect criteria
- Outreach message templates
- Follow-up sequence
- Simple lead tracker
- Referral ask template

### Acceptance Criteria

- Outreach can begin without rewriting the pitch every time
- Target clients match the service ladder
- The offer is clear enough to start conversations

### Notes / Boundaries

- Keep outreach practical and respectful
- Avoid broad generic marketing
- Start with businesses where the website or local visibility gap is obvious

## Phase 6: Automation/Product Expansion

### Goal

Expand from website and support work into automation, custom systems, and eventually owned products once repeated client problems are validated.

### Key Deliverables

- Automation discovery framework
- List of repeated client problems
- Internal tool ideas
- Client-specific automation examples
- Future product opportunity notes
- CoreShift relationship clarified as part of the product direction

### Acceptance Criteria

- Automation work is tied to real operational problems
- Product ideas are based on repeated demand, not guesswork
- Future SaaS/product work remains clearly marked as future-facing until validated

### Notes / Boundaries

- Do not lead early sales with vague product promises
- Keep custom tools scoped tightly
- Treat product ideas as hypotheses until there is repeated evidence
