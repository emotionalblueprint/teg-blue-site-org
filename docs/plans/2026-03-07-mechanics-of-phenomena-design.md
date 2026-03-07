# Design: Mechanics of Phenomena Section

**Date:** 2026-03-07
**URL:** teg-blue.org/mechanics-of-phenomena
**Status:** Approved

---

## Summary

A new editorial section on teg-blue.org for long-form pieces that reveal structural patterns behind observable phenomena. Two-column reading layout with sticky sidebar. Visually distinct from the research pages through an amber/gold accent color and editorial spacing — signaling "essay collection" rather than "research database."

---

## Visual Identity — The Editorial Shift

The section lives on the same .org dark canvas but uses **amber/gold `#f59e0b`** as its accent instead of the blue spectrum.

### What changes

- **Accent color**: amber `#f59e0b` replaces cobalt/blue for links, markers, section header accent
- **Subtle amber tint** on surfaces (Go Deeper panel background at ~5% opacity)
- **More generous line-height** (1.8 vs 1.75) and strict 65-70ch reading width
- **Two-column editorial layout** (unique to this section — no other .org page uses it)
- **No research components**: no ResearcherHero, ExpandableSection, PropositionBox — just clean reading

### What stays the same

- `BG.page`, `TEXT.primary/secondary/muted` — dark canvas and text hierarchy
- Inter font (display) and JetBrains Mono (tags/labels)
- SiteHeader and SiteFooter — unchanged
- Inline styles from tokens.js — no CSS files

### New tokens

```js
export const EDITORIAL = {
  accent:      '#f59e0b',  // amber-500
  accentLight: '#fbbf24',  // amber-400 (hover)
  accentMuted: '#92400e',  // amber-900 (subtle bg tints)
};
```

---

## Layout

**Container**: ~1100px max (wider than the standard 820px `SPACING.containerMax`)

### Desktop (> 900px)

```
┌──────────────────────────────────────────────────────┐
│  SiteHeader                                           │
├──────────────────────────────────────────────────────┤
│  The Mechanics of Phenomena                    amber  │
│  [italic stance — 2 lines]                    accent  │
├──────────┬───────────────────────────────────────────┤
│ SIDEBAR  │  READING COLUMN                            │
│ ~240px   │  max-width: 70ch on body text              │
│ sticky   │                                            │
│ top:100  │  [series tag, small, muted]                │
│          │  [piece title — h1]                         │
│          │  [subtitle, italic]                         │
│          │  [opening paragraphs]                       │
│          │  [## 1. Q&A sections...]                    │
│          │  [framework reveal]                         │
│          │  [fine print]                               │
│          │  [Go Deeper panel — amber-tinted]           │
│          │  [series/date footer]                       │
├──────────┴───────────────────────────────────────────┤
│  SiteFooter                                           │
└──────────────────────────────────────────────────────┘
```

### Mobile (< 900px)

Single column. Section header → full piece → Go deeper → sidebar as compact section index below.

---

## Routes & URL Convention

| URL | Content |
|-----|---------|
| `/mechanics-of-phenomena` | Main page — featured piece embedded + sidebar |
| `/mechanics-of-phenomena/why-humans-are-so-frustrating/01-why-evidence-fails` | Piece #1 |
| `/mechanics-of-phenomena/why-humans-are-so-frustrating/02-why-people-change-by-context` | Piece #2 |
| `/mechanics-of-phenomena/proofs-by-nature/01-octopus-chromatophores` | Piece #3 |

Individual piece pages use the same reading column + sidebar layout. No section header on individual pages (piece title carries the page). Sidebar includes a "← Back to section" link at the top.

---

## Components

| Component | Purpose |
|-----------|---------|
| `MechanicsSidebar` | Sticky sidebar — series names, piece links, featured indicator. Shared across all pages. |
| `MechanicsArticle` | Renders a piece: title, series tag, subtitle, body sections, framework reveal. |
| `GoDeeper` | Amber-tinted panel with framework/model links. Reusable per piece. |

Content is stored directly in each page.js (inline JSX). A shared config file (`mechanics-config.js`) holds sidebar data and Go Deeper URL mappings.

---

## Go Deeper Link Mapping

| Reference | URL |
|-----------|-----|
| M1 — Inner Compass | `/model/m1-inner-compass` |
| M2 — Three Awareness Capacities | `/model/m2-three-awareness-capacities` |
| F1 — Emotional Gradient | `/framework/f1-emotional-gradient` |
| F2 — Awareness Calibration | `/framework/f2-awareness-calibration` |
| F3 — Cognitive Coherence | `/framework/f3-cognitive-coherence` |
| F4 — Rules Regulate | `/framework/f4-rules-regulate` |
| F5 — Filter of Worth | `/framework/f5-filter-of-worth` |
| F6 — Bias as Regulation | `/framework/f6-bias-as-regulation` |
| F8 — Repairing Awareness | `/framework/f8-repairing-awareness` |

---

## Navigation

Add "Mechanics of Phenomena" as a standalone nav item in SiteHeader.

---

## SEO

Each page gets:
- `metadata` export (title, description, keywords, canonical)
- OpenGraph tags
- JSON-LD `Article` schema with author, datePublished, series info

---

## Content Source

All content comes from vault files at:
```
teg-blue-vault/mechanics-of-phenomena/
├── Why-Humans-are-so-frustrating/
│   ├── 01-why-evidence-fails.md
│   └── 02-why-people-change-by-context.md
└── Proofs-by-Nature/
    └── 01-octopus-chromatophores.md
```

Featured piece on main page: `01-why-evidence-fails.md` (as specified in PAGE.md).

---

## What NOT to build

Per dev brief:
- No hero section, banner, or decorative header
- No article cards, thumbnails, or teaser grid
- No load more / pagination
- No share buttons (minimal copy-link at end is fine)
- No auto-generated related articles
- No newsletter signup in the piece
- No reading time / progress bar / back-to-top button
- Nothing that competes visually with the text
