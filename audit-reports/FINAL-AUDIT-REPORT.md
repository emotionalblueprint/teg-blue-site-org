# TEG-Blue .org — Final Audit Report

**Date:** 2026-03-06
**Auditor:** Claude Code
**Reference:** `teg-blue-org-audit-brief.md`, `CLAUDE-org-site-goals.md`

---

## Summary

| Metric | Count |
|--------|-------|
| **Pages audited** | 31 |
| **Total changes made** | 0 (all flagged — none autonomous per brief instructions) |
| **Unambiguous fixes ready to execute** | 15 |
| **Items flagged for human review** | 28 |
| **Pages marked for rewrite** | 2 (Epistemological Foundations, Emotional Technology) |

---

## Phase 1 — Content Architecture

### Systemic Findings

**1. The gap is structurally absent across the entire site.** The governing writing principle requires Anchor → Gap → Contribution. In practice, the site consistently delivers Anchor → Contribution, skipping the gap. Of ~150+ content sections, fewer than 10 explicitly name where existing research stopped.

**Best examples (use as templates):**
- M3 Concept 7: "The existing stress physiology literature — Sapolsky, McEwen, Porges — describes physiological states without a gradient model connecting them..."
- F4 Seven-Step Mechanism: "to our knowledge, no existing model traces the complete pathway..."
- F6 Bias as Regulation: "to our knowledge, no existing framework unifies them under a single formulation..."

**2. Citation precision degrades from models to later frameworks.** M3, F1-F2 have named researchers with years. F8-F12 have names only (no years, no works). Epistemological Foundations and Emotional Technology have zero citations.

**3. Falsifiable predictions present on only 7 of 31 pages.** Compliant: Research Entry, M1, M3, F4, F6, Frameworks Map, AI Safety. Missing on all other framework pages.

**4. "The first complete emotional technology system" — recurring overclaim** on Home, About, Emotional Technology, AI Safety. No prior system named, no definition of "complete."

**5. Two pages need fundamental rework:**
- **Epistemological Foundations** — zero citations, overclaiming by omission
- **Emotional Technology** — zero citations, reads as marketing not scholarship

### Page-Level Ratings

| Rating | Pages |
|--------|-------|
| **Compliant** | Methodology |
| **Mostly compliant** | M3, F4, F6, Research Entry, Frameworks Map, About |
| **Partial** | M1, M2, F1, F2, F5, F7, F9, F11, F12, Scientific Foundations, AI Safety, Foundations |
| **Needs attention** | F3, F8, F10 (weak expandable sections + weak citations) |
| **Non-compliant** | Epistemological Foundations, Emotional Technology |
| **N/A (appropriate for type)** | Home, Collaborate, Glossary, Publications, Citations |

---

## Phase 2 — Cross-References

**All 80+ internal links are valid.** Zero broken links found.

### M3 Cross-References

| Status | Detail |
|--------|--------|
| **Strong** | M1, M2 (dedicated cards), F1 (6 inline references — gold standard) |
| **NavRow only** | F2, F3, F8, F12 — present in navigation but not woven into body text |
| **Absent** | F4, F5, F6, F7 — no reference at all |
| **Not needed** | F9, F10, F11 — content doesn't directly engage with cycle physiology |

**One structural issue:** Frameworks Map page says "The Two Core Models" and only lists M1 and M2. M3 card is missing.

---

## Phase 3 — Terminology

### Issues Found

| Issue | Count | Action |
|-------|-------|--------|
| **"Two Models" / "2 models"** | 12 instances | Unambiguous fix → "Three" / "3" |
| **Wrong framework names (research-entry)** | 3 (F8, F9, F10) | Unambiguous fix |
| **"AI" → "Large Language Models"** | ~100+ instances | FLAG: case-by-case human review needed |
| **"Designed operation"** | 4 instances | FLAG: descriptive but potentially normative |
| **Minor framework name shortenings** | 3 (F9, F11, F12) | FLAG: standardize or accept? |

### Clean (no issues)
- "Healthy compass" → "fluid compass": **fully replaced**, zero instances of old term
- "Unhealthy" as mode descriptor: **zero instances**
- Morally inferior/superior language: **zero instances**
- M3 naming: **consistent** across site ("The Open Cycle — The Biology of Unfinished Emotion")

---

## Phase 4 — Structural

### 4.1 Where to Go Next: **100% compliant** — present on all 15 framework/model pages

### 4.2 Expandable Sections:

| Tier | Pages |
|------|-------|
| **Full** | M1, M2, M3, F11 |
| **Mostly full** | F4, F5, F6, F9, F12 |
| **Partial** | F1, F2, F7 |
| **Weak** | F3 (mostly unpaired), F8 (5/10 empty), F10 (6/10 empty) |

### 4.3 Blueprint Derivation:
- Frameworks F1-F12: **all 12 have vault sources**
- Models M1-M3: **all 3 have vault sources**
- Non-framework pages: **6 of 8 lack vault sources** (About, Emotional Technology, Epistemological Foundations, AI Safety, Methodology, Foundations)

### 4.4 About Page Origin Story: **COMPLIANT** — present and expanded

### 4.5 Models Hub vs. v2: **Current page missing ~60-70% of v2 content.** Major gaps: extended introduction, Models vs. Frameworks distinction, extended model prose, Three-Layer Architecture section. FLAG for human review before updating.

---

## Phase 5 — M3 Integration

| Task | Status |
|------|--------|
| 5.1 Models hub update | **BLOCKED** — awaiting human approval of v2 diff |
| 5.2 M3 page creation | **ALREADY COMPLETE** — page exists with full structure |
| 5.3 M3 interactive artifact | **BLOCKED** — source file `m3-interrupted-cycle.jsx` not found |
| 5.4 Navigation updates | **MOSTLY COMPLETE** — 3 fixes needed (model counts) |
| 5.5 Cross-reference links | **PARTIALLY COMPLETE** — NavRow links present; inline body links need human approval |

---

## Flagged for Human Review — Consolidated

### Priority 1: Decisions Required Before Any Changes

| # | Item | Location | Why Flagged | Options |
|---|------|----------|-------------|---------|
| 1 | **Models hub v2 update** | `models/page.js` | Significant content change — v2 adds ~60-70% new content | Approve v2 as source → implement; or keep current skeleton |
| 2 | **M3 interactive artifact** | Phase 5.3 | Source file `m3-interrupted-cycle.jsx` not found anywhere | Provide file; or defer this task |
| 3 | **Epistemological Foundations rewrite** | `epistemological-foundations/page.js` | Non-compliant on all 4 criteria — zero citations, overclaiming | Write vault blueprint first → rebuild page from source |
| 4 | **Emotional Technology rewrite** | `emotional-technology/page.js` | Non-compliant on all 4 criteria — zero citations, marketing tone | Write vault blueprint first → rebuild page from source |

### Priority 2: Content Additions Needing Human Judgment

| # | Item | Location | Why Flagged |
|---|------|----------|-------------|
| 5 | **Add explicit gap sentences to all framework/model sections** | All 15 pages | Systemic: gap step missing from anchor-gap-contribution. ~140+ sections need "Where this tradition stopped was..." sentences. Content judgment required for each. |
| 6 | **Add falsifiable predictions to F1, F2, F3, F5, F7, F8, F9, F10, F11, F12, M2** | 11 pages | Each page should have at least one explicit "Testable Prediction" box (F6 is the template). Content must come from Anna. |
| 7 | **Add inline M3 body references** | F2, F3, F8, F12, F7 | NavRow present but body text should link to M3 where physiological concepts discussed |
| 8 | **Bring F8 and F10 expandable section coverage up to standard** | F8, F10 | F8: 5 sections have no blocks. F10: 6 sections have no blocks. Need Research Traditions + TEG-Blue Contribution for each. |
| 9 | **Bring F3 expandable sections into paired format** | F3 | Most sections have only one of the two blocks. Need both on each section. |
| 10 | **Improve citation precision on F8-F12** | 5 pages | Names only (no years, no works). Need years and specific publications added. |
| 11 | **"The first complete emotional technology system"** | Home, About, Emotional Technology, AI Safety | Overclaim — either anchor with gap (name prior systems, define "complete") or soften language |
| 12 | **AI → LLM terminology audit** | Primarily AI Safety page | ~100+ instances of "AI" — some should be "large language models", some are field names. Case-by-case review needed. |
| 13 | **F12 "all human behavior" overclaim** | F12 page | Universal claim with no hedge — needs qualification |

### Priority 3: Minor Standardization

| # | Item | Location | Why Flagged |
|---|------|----------|-------------|
| 14 | **F9 name: "Variation" vs "Nervous System Variation"** | Home page, 404, frameworks-map vs framework page | Shortened form on some pages — standardize? |
| 15 | **F11 name: "Emotional Paradoxes" vs "Emotional Logic Behind Paradoxes"** | Same pattern | Shortened vs full — standardize? |
| 16 | **F12 name: "The" vs "Our" Two Information Systems** | Same pattern | Article difference |
| 17 | **F8 expanded name on Frameworks Map** | frameworks-map/page.js | "Repairing Awareness & The Power of Difference" — is subtitle intentional? |
| 18 | **"Designed operation" phrasing** | F1, F2 (4 instances) | Descriptive but potentially normative — review needed? |
| 19 | **6 non-framework pages lack vault blueprints** | About, Emotional Technology, Epistemological Foundations, AI Safety, Methodology, Foundations | Vault-first workflow produces better-anchored content. Create blueprints for these? |

---

## Ready to Execute (15 Unambiguous Fixes)

These require no content judgment — they are factual corrections:

### Model Count Fixes (12)
1. `models/layout.js:2` — "Two Core Models" → "Three Core Models"
2. `models/layout.js:23` — same
3. `models/layout.js:33` — same
4. `models/layout.js:43` — same
5. `models/opengraph-image.js:4` — alt text
6. `models/opengraph-image.js:75` — image text
7. `glossary/page.js:63` — term title
8. `glossary/page.js:66` — definition (add M3)
9. `frameworks-map/page.js:452` — section ID
10. `frameworks-map/page.js:455` — heading text + add M3 card
11. `emotional-technology/page.js:324` — "two core models" → "three core models"
12. `collaborate/page.js:72` — "2 models" → "3 models"

### Framework Name Fixes (3)
13. `research-entry/page.js:194` — F8 → "Repairing Awareness"
14. `research-entry/page.js:194` — F9 → "Neurodivergence as Nervous System Variation"
15. `research-entry/page.js:194` — F10 → "Rebuilding Generational Bridges"

---

## What Works Well

1. **M3 is the gold standard page** — best citation precision, best gap naming, no overclaiming, 3 falsifiable predictions
2. **F6 is the strongest framework page** — explicit Testable Prediction box, all contributions tied to named gaps
3. **F1 is the gold standard for M3 integration** — 6 inline references woven into body content
4. **Methodology page sets the epistemic standard** — honest limitations, status ladder, appropriate hedging
5. **The expandable section pattern is well-designed** — just needs the gap step and consistent coverage
6. **Zero broken links across the entire site**
7. **"Fluid compass" fully adopted** — old "healthy compass" terminology completely replaced
8. **All framework/model pages have vault blueprint sources**
9. **Where to Go Next navigation: 100% coverage**
10. **M3 already integrated into site navigation and key pages**

---

**Detailed phase reports:** See `audit-reports/phase-1-content-architecture.md` through `phase-5-m3-integration.md`
