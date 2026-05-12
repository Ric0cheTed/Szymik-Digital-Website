# Roadmap

This roadmap keeps Szymik Digital focused on building a practical commercial foundation before expanding into automation and products.

## Current Control Position

### Stable Live V1

The current live Szymik Digital website is the stable v1 baseline.

It is already live on the public domain and has post-live analytics/cookie/privacy work completed. It should remain stable while major redesign work happens separately.

### Premium Website V2 Refresh

The next website direction is a premium v2 refresh.

The v2 redesign should use a separate branch / preview flow and should not be merged or uploaded to production until reviewed and approved.

The initial redesign order is:

1. Homepage first.
2. Work / Case Studies.
3. Services.
4. Contact / enquiry flow.

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

### Current Redesign Slice

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

### Next Recommended Slice

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
