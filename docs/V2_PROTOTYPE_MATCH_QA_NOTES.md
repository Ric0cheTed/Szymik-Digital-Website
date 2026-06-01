# Szymik Digital V2 Prototype Match QA Notes

## Purpose

This note controls the visual comparison pass between the parked Szymik Digital v2 branch and the accepted multi-page concept direction.

The prototype is a design reference, not a pixel-perfect technical target. The goal is to preserve the premium impression, visual rhythm, clarity, and quality bar that Ric accepted for the v2 direction while allowing the real site to evolve as proper responsive HTML/CSS/Next.js pages.

Primary reference:

- `docs/design-references/homepage-v2-concept-reference.png`

Before any future production decision, the v2 implementation should be checked against this reference so the branch does not slowly lose the dark/green premium local-studio feel that made the direction worth keeping.

## Whole-site prototype reference

The prototype should now be treated as the visual quality reference for the whole v2 site, not only the homepage.

The reference direction covers:

- Homepage.
- Services.
- Work.
- About.
- Contact.
- Shared header.
- Shared footer.
- Shared dark/green visual system.

This is the visual quality bar for the v2 preview branch. The goal is not pixel-perfect copying, and the production site should remain responsive, truthful, maintainable, and built from real page sections rather than a static image.

The real v2 site may include extra routes beyond the prototype, including:

- `/services/guide-prices/`
- `/services/automation-custom-tools/`
- `/website-review/`

Those extra routes should inherit the same premium dark/green polish, compact rhythm, clear hierarchy, and restrained local-studio feel from the prototype.

## Prototype qualities to preserve

- Dark black/charcoal premium base.
- Vivid Szymik green accents.
- Compact, high-impact homepage rhythm.
- Clear hero offer.
- Layered browser/project-preview collage.
- Strong selected-work proof area.
- Clean services cards.
- Wide trust/value panel.
- Simple process flow.
- Strong final CTA.
- Tidy, useful footer.
- Subtle digital glow/line accents.
- Readable, confident, and not cluttered.
- Polished local-studio feel.

## Visual comparison checklist

### Header

- [ ] Header feels dark, compact, and integrated with the page.
- [ ] Logo/wordmark is clear and readable.
- [ ] Navigation text is light/readable on the dark shell.
- [ ] Active state uses a clear green accent.
- [ ] Start a Project CTA is visible, readable, and not oversized.
- [ ] Services dropdown keeps the accepted dark/green treatment.
- [ ] Mobile header/menu remains readable and usable.

### Hero

- [ ] The hero keeps the accepted message: websites that make local businesses look ready for bigger things.
- [ ] Left-column label, headline, support copy, CTAs, and trust points feel balanced.
- [ ] Green headline emphasis is strong but not garish.
- [ ] Hero height feels premium without creating excess empty space.
- [ ] CTAs are easy to see and tap.
- [ ] The hero still reads as a high-quality studio homepage, not a generic dark page.

### Hero collage / work showcase

- [ ] Project-preview collage remains visually prominent.
- [ ] Bent Burger, Country Pizza, and Libra Support Services previews are clear enough to recognise.
- [ ] Layering/overlap feels intentional and close to the accepted concept.
- [ ] Browser-window framing remains polished.
- [ ] Collage does not crowd the headline on desktop.
- [ ] Collage stacks or simplifies cleanly on mobile.

### Static green accents and polish

- [ ] Green glows/line accents are visible enough to support the digital-studio feel.
- [ ] Accents remain tasteful and do not distract from copy or previews.
- [ ] Static visual polish still gives the page depth after the hero/collage motion experiments were trimmed.
- [ ] Cards and panels retain subtle hover/focus polish where useful.

### Recent Projects / Work proof

- [ ] Selected Work sits close enough under the hero to match the compact concept rhythm.
- [ ] Work cards use strong screenshots.
- [ ] Labels remain truthful: concept previews stay labelled as concepts/previews.
- [ ] Card heights, spacing, and CTA treatment feel consistent.
- [ ] The section points visitors naturally to `/work/` and project discussion routes.

### Services

- [ ] Services cards feel clean, dark, and premium.
- [ ] Four service pathways are easy to scan.
- [ ] Card icon/accent treatment uses green consistently.
- [ ] Services hub remains clear rather than crowded.
- [ ] Guide Prices and Automation / Custom Tools links support the hybrid Services structure without overwhelming the page.

### Trust panel

- [ ] Trust/value panel feels wide, anchored, and distinct from regular cards.
- [ ] Copy stays concise and practical.
- [ ] Ric/Hannah working model and future human trust assets can fit without making the page feel personal or cluttered.
- [ ] Values remain grounded: clear process, practical results, local focus, honest support.

### Process

- [ ] Process flow remains simple and visible.
- [ ] Concept Preview appears as a real workflow step where useful.
- [ ] Desktop process rhythm feels close to the accepted concept.
- [ ] Mobile process steps stack clearly.
- [ ] The process does not become too text-heavy.

### Final CTA

- [ ] Final CTA feels strong, dark, and premium.
- [ ] CTA copy is direct and low-pressure.
- [ ] Start a Project / enquiry route is clear.
- [ ] Secondary CTA is useful and not competing with the main action.

### Footer

- [ ] Footer is dark, compact, branded, and readable.
- [ ] Footer links are useful and not cluttered.
- [ ] Legal links remain visible.
- [ ] Cookie settings access remains available and readable.
- [ ] Footer can absorb future route growth without becoming messy.

### Mobile interpretation

- [ ] Mobile layout preserves the same premium feeling, not just the same content.
- [ ] Header, hero, collage, cards, process, CTA, and footer stack cleanly.
- [ ] No horizontal overflow.
- [ ] Tap targets are comfortable.
- [ ] Text remains readable without tiny copy.
- [ ] The page still feels high-quality on a phone.

## Homepage prototype checks

- [ ] Strong hero offer remains immediately clear.
- [ ] Large layered project collage stays prominent and polished.
- [ ] Trust points under the hero remain compact.
- [ ] Recent work proof sits close to the hero and feels image-led.
- [ ] Service cards stay clean and easy to scan.
- [ ] Trust/value panel feels wide and purposeful.
- [ ] Process flow is visible and simple.
- [ ] Final CTA has strong contrast and a clear next step.
- [ ] Footer handoff is compact, useful, and branded.

## Services prototype checks

- [ ] Services hub remains clean and not overloaded.
- [ ] Hero does not feel crowded by too much detail.
- [ ] Visual/icon treatment feels premium and consistent with the homepage.
- [ ] Service cards or rows are compact, scannable, and clearly separated.
- [ ] Deeper detail lives on subpages where needed.
- [ ] Guide Prices and Automation / Custom Tools pages reduce Services-page clutter rather than adding to it.

## Work prototype checks

- [ ] Work page remains proof-led.
- [ ] Project cards are image-led and visually strong.
- [ ] Category/filter direction can be used later if the work library grows.
- [ ] Concept previews are clearly labelled.
- [ ] No fake testimonials or overclaimed results are introduced.
- [ ] Bent Burger and Country Pizza wording remains truthful unless project status changes.

## About prototype checks

- [ ] Page can eventually include human trust assets without breaking the layout.
- [ ] Ric/Hannah imagery should feel professional, warm, and local.
- [ ] Team/working-model section should be clear and not too internal.
- [ ] Values should stay practical, not fluffy.
- [ ] Possible Timmy/dog touch remains tasteful, optional, and brand-appropriate.

## Contact prototype checks

- [ ] Contact info, enquiry form, and project CTA panel feel balanced.
- [ ] Enquiry route is clear.
- [ ] Website Review path supports Contact without cluttering it.
- [ ] Contact form remains readable and trustworthy.
- [ ] Mobile layout stays clean and easy to complete.

## Header/footer prototype checks

- [ ] Header remains compact.
- [ ] Services dropdown does not clutter the top nav.
- [ ] Process discoverability is reviewed because the prototype includes Process in the nav.
- [ ] Footer remains useful but not bloated.
- [ ] Legal and cookie/settings links remain findable.

## Possible gaps to watch

- Hero collage scale and overlap may need tuning against the prototype after final manual review.
- Static green accent strength may need a small bounded polish pass now that non-useful hero/collage motion has been removed.
- Homepage rhythm could loosen if more content is added without restraint.
- Services density should be watched carefully now that pricing and deeper service pages exist.
- Work proof layout should remain image-led as more projects are added.
- About trust imagery should improve credibility without making the site feel overly personal.
- Contact form layout should stay balanced against the support panels and Website Review route.
- Process visibility may need checking on mobile and narrower desktop widths.
- Header/process discoverability should be reviewed because the prototype includes Process in the nav while the current site uses Services dropdown depth.
- Footer clutter may increase as Services subpages and future content grow.
- Human trust assets should improve credibility later, but they must fit the v2 design and not make the site feel like a personal social page.
- Services hub density should be managed carefully as the hybrid Services structure grows.

## Production gate note

Prototype-match review is part of the future production gate.

The v2 branch should not be merged to main or uploaded to Hostinger until this prototype-match review has been completed alongside the route QA checklist, any visual gaps have been fixed in small bounded polish slices, and Ric gives explicit final production approval.
