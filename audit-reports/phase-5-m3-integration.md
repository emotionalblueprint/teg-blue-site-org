# Phase 5 — M3 Integration Report

**Date:** 2026-03-06

---

## Status: Partially Complete — Requires Human Decisions

M3 is significantly more integrated than the audit brief anticipated. Several Phase 5 tasks are already done. The remaining items require human approval.

---

## 5.1 Models Hub Update

**Status: BLOCKED — awaiting human review of models-hub-v2.md diff**

The current models hub page has the correct three-model skeleton but is missing ~60-70% of the v2 document content (see Phase 4, section 4.5 for full diff).

**Decision needed:** Should the models hub be updated to match models-hub-v2.md? The v2 document adds:
- Extended introduction distinguishing models from frameworks
- "Models vs. Frameworks" section
- Extended prose descriptions of what each model establishes
- Three-Layer Architecture section

**Cannot proceed without human approval.**

---

## 5.2 M3 Page Creation

**Status: ALREADY COMPLETE**

M3 page exists at `/model/m3-the-open-cycle/page.js` and includes:
- MODEL M3 badge
- Full "On this page" navigation
- 7 concept sections with paired expandable blocks ("What the field established" / "What M3 connects")
- "Where to Go Next" navigation table
- Relationship-to-frameworks section linking to F1, F2, F3, F8, F12
- OG image at `/model/m3-the-open-cycle/opengraph-image.js`
- Correct subtitle: "The Biology of Unfinished Emotion"

**No action needed.**

---

## 5.3 M3 Interactive Artifact

**Status: BLOCKED — source file not found**

The brief specifies `m3-interrupted-cycle.jsx` as the source for the interactive component. This file does not exist anywhere in the Projects directory.

**Decision needed:** Has this component been created? If not, this task cannot proceed.

---

## 5.4 Navigation Updates

**Status: MOSTLY COMPLETE**

| Navigation Location | M3 Present? | Action |
|--------------------|-------------|--------|
| SiteHeader dropdown | YES | None needed |
| Models Hub page | YES (card + badge count) | None needed |
| Models Hub layout/metadata | NO — says "Two Core Models" | **FIX: update to Three** |
| Models Hub OG image | NO — says "Two Core Models" | **FIX: update to Three** |
| Frameworks Map models section | NO — says "Two Core Models", missing M3 card | **FIX: add M3 card** |
| Home page models section | YES (M3 listed) | None needed |
| Sitemap | YES (auto-generated from routes) | None needed |

**3 fixes needed** — all are unambiguous text/count updates:
1. `models/layout.js` — 4 instances of "Two" → "Three"
2. `models/opengraph-image.js` — 2 instances of "Two" → "Three"
3. `frameworks-map/page.js` — heading + add M3 card

---

## 5.5 Cross-Reference Links

**Status: PARTIALLY COMPLETE — inline body references flagged for human review**

M3 NavRow links already present on: M1, M2, F1, F2, F3, F8, F12

Items from Phase 2 requiring human approval for inline body references:

| Page | Where to Add M3 Inline Link | Concept Being Referenced |
|------|----------------------------|------------------------|
| F2 | Where "return was never learned" appears | Open cycle as consequence of developmental failure |
| F3 | Where "cognition overrides" body signals | Open cycle as physiological reason for false coherence |
| F8 | Where repair physiology discussed | Open cycle as biological account of what repair does |
| F12 | Where insight-behaviour gap discussed | Open cycle as mechanism behind the gap |
| F7 | Where "Biological Restoration — body completing the cycle" named | Open cycle at system scale |

**Cannot add inline references without human approval on specific placement.**

---

## Additional Terminology Fixes (from Phase 3) — Ready to Execute

These are unambiguous fixes that can be made now without human approval:

### "Two Models" → "Three Models" (11 instances)
1. `models/layout.js:2` — title
2. `models/layout.js:23` — OG title
3. `models/layout.js:33` — Twitter title
4. `models/layout.js:43` — JSON-LD name
5. `models/opengraph-image.js:4` — alt text
6. `models/opengraph-image.js:75` — image text
7. `glossary/page.js:63` — term title
8. `glossary/page.js:66` — term definition (also add M3 description)
9. `frameworks-map/page.js:452` — section div
10. `frameworks-map/page.js:455` — heading text
11. `emotional-technology/page.js:324` — body text
12. `collaborate/page.js:72` — description ("2 models" → "3 models")

### Wrong Framework Names on Research Entry (3 fixes)
13. `research-entry/page.js:194` — F8 "Self-Awareness Under Stress" → "Repairing Awareness"
14. `research-entry/page.js:194` — F9 "Our True Self" → "Neurodivergence as Nervous System Variation"
15. `research-entry/page.js:194` — F10 "Repair and Relational Return" → "Rebuilding Generational Bridges"

---

*Phase 5 assessment complete. Ready to produce final audit report.*
