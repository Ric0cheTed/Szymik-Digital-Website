# Szymik Digital Master Control

## Purpose

This document is the central control point for Szymik Digital direction, active workstreams, parked ideas, future ideas, and next-step decisions.

Its job is to stop useful ideas being lost across different chats and to stop active workstreams overlapping.

Use this document when deciding:

- what is active now
- what is parked for later
- what belongs in the website repo
- what belongs in the CRM repo
- what belongs in ops/agreement documents
- what the next Codex slice should be

## Current Business Direction

Szymik Digital is moving toward a professional small-studio model.

The direction is:

- polished websites for local businesses
- practical digital systems and automations
- clear client delivery process
- Hannah as client-facing coordinator / triage support
- Ric as technical/build lead
- local trust with big-agency polish

The aim is not to become a generic web design agency. The aim is to offer useful, trustworthy digital support that feels polished, practical, and easy for small businesses to work with.

## Current Stable Website Baseline

- The current live Szymik Digital website is stable v1.
- It is already live on the public domain.
- It has post-live analytics/cookie/privacy work already completed.
- It should not be edited directly for the premium redesign.
- Redesign work must happen on a separate branch / preview flow first.

The current site remains the stable baseline until a reviewed v2 preview is approved.

## Premium Website Redesign Direction

The next website direction is a premium v2 refresh.

The redesign should match the quality standard of recent preview/client concepts such as:

- Bent Burger
- Country Pizza
- Libra Support Services

The design direction is:

- dark/charcoal foundation
- white typography
- vivid green brand accents
- premium modern agency feel
- clean cards
- strong project previews
- clear conversion flow

The initial redesign should be:

1. Homepage first.
2. Work / Case Studies next.
3. Services next.
4. Contact / enquiry flow last.

The redesign should be built separately from the current live v1 and only merged/uploaded once reviewed and approved.

## Concept Preview Workflow

Concept Preview is now an official Szymik Digital workflow step.

The flow is:

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

Concept Previews are visual mockups used before build.

They help align:

- branding
- page structure
- visual style
- client expectations
- proposal direction
- internal planning

They are reference/direction tools, not exact pixel-perfect technical specs.

Concept Previews can be used for:

- websites
- internal tools
- dashboards
- CoreShift-style modules
- proposal previews

## Active Workstreams

Only these workstreams are active now.

### 1. Szymik Digital Website V2 Polish

Public-facing website quality upgrade.

Must remain separate from live v1 until approved.

### 2. Concept Preview Workflow

Official delivery and planning step for websites/tools.

### 3. Client Delivery Operations

Hannah/Ric process for:

- enquiries
- quotes
- previews
- feedback
- approvals
- launches
- handovers

### 4. Szymik Digital CRM

Internal local-first tool for managing:

- enquiries
- projects
- follow-ups
- notes
- links
- delivery state

The public website repo must stay separate from the CRM repo.

## Parked-Good Ideas

These are useful ideas, but they are not active build items yet.

- Website Factory / reusable starter kit
- Case File / Client Memory Timeline
- Advanced AI summaries of clients/prospects
- Gmail/calendar automation
- Client portal
- More advanced proposal automation
- Broader outreach campaigns beyond current warm/local targets
- Full automation of enquiry-to-CRM pipeline

## Later Lab Ideas

These ideas may become valuable later, but they should not distract from the active workstreams.

- Sellable internal business tools
- Client-facing dashboards
- Automation packs for local businesses
- AI-assisted website intake/research tools
- Szymik Digital productized service bundles

## Repo / Tool Ownership

### Public Website Repo

Owns:

- public Szymik Digital website
- marketing pages
- service positioning
- work/case-study pages
- contact/enquiry wording
- public trust/process copy

Does not own:

- CRM records
- internal client tracking
- agreement source material
- live automation pipelines
- private operational data

### Szymik Digital CRM Repo

Owns:

- enquiry/project tracking
- client records
- follow-ups
- notes
- internal operational workflow
- future local-network access with Basic Auth before sharing

The CRM repo must remain separate from the public website repo.

### Client Agreement Pack / Ops Docs

Owns:

- client-ready templates
- agreement wording
- quote/payment/approval/handover templates

Agreement-related material should stay in the agreement/ops pack and should not be casually rewritten inside website redesign work.

### ChatGPT / Planning

Owns:

- direction decisions
- slice planning
- copy review
- Codex prompt creation
- no broad repo guessing when current repo state is unknown

ChatGPT should help clarify decisions and prepare bounded slices. It should not assume the current repo state when it has not been checked.

### Codex

Owns:

- bounded implementation only
- docs/code edits only when a clear slice is locked
- reporting changed files, what changed, what stayed unchanged, verification, and next recommended slice

Codex should stay inside the agreed slice and avoid broad sweeps unless Ric explicitly asks for them.

## Workflow Rules

- Do not edit live/main directly for major redesign work.
- Use branch/preview flow for v2 redesign.
- Keep current v1 live site stable until the v2 preview is approved.
- Keep public website and CRM separate.
- New ideas must be classified as Active, Parked-Good, or Later Lab.
- Avoid broad sweeps unless explicitly requested.
- Prefer small, bounded slices.
- Record important decisions in docs before implementation when they affect workflow or direction.
- Do not let visual concepts become pixel-perfect obligations; use them as design direction.

## Recommended Next Slice

### Phase 3 Slice 1 - Website V2 Redesign Branch + Homepage Concept Build

Goal:

Start the premium website redesign separately from the current live v1 by creating/using a redesign branch and building the homepage toward the approved dark/green Szymik Digital Concept Preview direction.

Scope:

- homepage-first
- use Szymik Digital branding
- include selected work previews for Bent Burger, Country Pizza, and Libra Support Services where suitable
- preserve existing live v1 until approved
- no Hostinger production upload in the slice
- no CRM integration
- no client portal
- no automation
