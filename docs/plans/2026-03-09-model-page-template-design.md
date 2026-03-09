# Model Page Template Redesign

**Date:** 2026-03-09
**Scope:** All 3 model pages (M1, M2, M3) on teg-blue.org
**Goal:** Visually differentiate model pages from framework pages to reflect their distinct purpose — models are applied instruments, frameworks are theoretical architecture.

---

## Problem

Model pages and framework pages currently share the exact same template:
- Same `ResearcherHero` (badge + gradient title + accent bar)
- Same `PageLayout` with sticky right sidebar
- Same `PropositionBox`, `ExpandableSection`, `KeyStatement`
- Same typography (14px, 1.7-1.8 line height)
- Only differences: badge text ("MODEL M1" vs "FRAMEWORK F1") and accent color

Models should feel like **tools** — applied, operational, visual-first.
Frameworks should feel like **papers** — layered, academic, text-dense.

## Design Decisions

### 1. New ModelHero Component (replaces ResearcherHero on model pages)

**Key differences from ResearcherHero:**
- **Left border band** (4px) in the model's identity color — no bottom accent bar
- Badge pill uses model's color (not RESEARCHER.accent)
- Title is **bold white text** — not gradient text (cleaner, tool-like)
- **Core Question** displayed below description in a lightly tinted box with model's color
- **Draws From** tag row at bottom: small linked pills (F1, F3, etc.) in cobalt, linking to framework pages
- No PATTERN_GRADIENT accent bar (that's the framework signature)

**Props:** `badge`, `title`, `subtitle`, `description`, `coreQuestion`, `drawsFrom` (array of {label, href}), `color`

### 2. Horizontal Anchor Strip (replaces sidebar)

**Structure:**
- `<nav>` bar below ModelHero, becomes sticky on scroll
- Section labels as horizontally-scrollable pill links
- Model's identity color for text; filled background on hover/active
- Active section highlighted via IntersectionObserver
- On mobile: horizontal scroll with overflow, no wrapping

**Specs:**
- Client component (`'use client'`)
- Height: ~44px
- Font: FONT.mono, 11px, uppercase, 0.06em tracking
- Sticky top: ~56px (below SiteHeader)
- Background: BG.surface with subtle bottom border
- Active pill: model color at 15% opacity + 2px bottom indicator

### 3. Content Block Replacements

#### 3a. ModelPurpose (replaces PropositionBox)
- Label: "WHAT THIS MODEL MAPS" (not "CORE PROPOSITIONS")
- Left border in model's identity color
- Background tint using model's color at 4% opacity
- Same structural role (bulleted core claims)

#### 3b. OperationalStatement (replaces KeyStatement)
- **Not italic** — regular weight 500, reference-card feel
- Background: model color at 4% opacity
- Left border: 4px solid model color
- Optional small `OPERATIONAL INSIGHT` mono label above text (8px, muted)
- Reads as "here's what to use" rather than "here's a thought"

#### 3c. DrawsFromPanel (new — replaces inline "Relationship to Frameworks" sections)
- Grid of small cards linking to source frameworks
- Each card: framework ID pill (F1, F3, etc.) in cobalt, title, one-line description
- Reusable across all model pages
- Accepts `items` array of { id, title, description, href }

### 4. Per-Model Color Application

| Element | M1 (azure #5BADFF) | M2 (cobalt #4472EE) | M3 (indigo #5B62D4) |
|---------|---------------------|---------------------|---------------------|
| Hero left border | azure | cobalt | indigo |
| Badge pill | azure | cobalt | indigo |
| Anchor strip active pill | azure | cobalt | indigo |
| ModelPurpose border | azure | cobalt | indigo |
| OperationalStatement border | azure | cobalt | indigo |
| Section heading underline | azure | cobalt | indigo |
| Grid header background tint | azure | cobalt | indigo |
| DrawsFromPanel cards | cobalt (always) | cobalt | cobalt |

All components accept `color` as a prop — no hardcoded model colors in shared components.

### 5. Full-Width Single Column Layout

- Model pages use `PageLayout` **without** `sidebarSections`
- PageLayout already supports no-sidebar mode (renders full-width)
- Prose max-width remains 720px; tables/diagrams can go to 1100px
- ModelHero renders in the header slot
- Anchor strip sits between hero and content

## New Components

| Component | File | Type | Purpose |
|-----------|------|------|---------|
| ModelHero | `src/components/ModelHero.jsx` | Server | Hero with left border, plain title, core question, draws-from pills |
| ModelAnchorStrip | `src/components/ModelAnchorStrip.jsx` | Client | Sticky horizontal nav with active section tracking |
| ModelPurpose | `src/components/ModelPurpose.jsx` | Server | "What this model maps" callout box |
| OperationalStatement | `src/components/OperationalStatement.jsx` | Server | Non-italic reference-card blockquote |
| DrawsFromPanel | `src/components/DrawsFromPanel.jsx` | Server | Reusable framework-link grid |

## Modified Files

- `app/model/m1-inner-compass/page.js` — swap to new components, remove sidebar, pass color
- `app/model/m2-three-awareness-capacities/page.js` — same
- `app/model/m3-the-open-cycle/page.js` — same
- `src/components/index.js` — export new components

## Unchanged

- All framework pages (F1-F12) — untouched
- `PageLayout.jsx` — already supports no-sidebar
- `ResearcherHero.jsx` — still used by frameworks
- `tokens.js` — no new tokens needed

## Implementation Order

1. Create ModelHero component
2. Create ModelAnchorStrip component (client)
3. Create ModelPurpose component
4. Create OperationalStatement component
5. Create DrawsFromPanel component
6. Update index.js exports
7. Update M1 page (most content, good test case)
8. Verify M1 in browser
9. Update M2 page
10. Update M3 page
11. Final review across all 3 model pages
