# Phase 4 — Structural Audit Report

**Date:** 2026-03-06

---

## 4.1 "Where to Go Next" Table

**Result: ALL 15 framework and model pages have "Where to Go Next" sections.** 100% compliance.

M3 inclusion in nav tables:

| Status | Pages |
|--------|-------|
| **M3 present** | M1, M2, F1, F2, F3, F8, F12 (7 pages) |
| **M3 absent** | F4, F5, F6, F7, F9, F10, F11 (7 pages) |

Most notable absences: F7 (discusses physiological escalation), F4-F5 (regulation thread references).

---

## 4.2 Research Traditions and TEG-Blue Contribution Sections

| Page | Compliance | Detail |
|------|-----------|--------|
| **M1** | FULL | 10/10 concept sections paired |
| **M2** | FULL | 10/10 concept sections paired |
| **M3** | FULL | 7/7 paired (uses "What the field established" / "What M3 connects" naming) |
| **F11** | FULL | 9/9 concept sections paired |
| **F4** | MOSTLY FULL | 2 sections unpaired |
| **F5** | MOSTLY FULL | All concept sections paired, overview standalone |
| **F6** | MOSTLY FULL | 6/6 concept sections paired |
| **F9** | MOSTLY FULL | 6 paired, 2 only TEG-Blue Contribution |
| **F12** | MOSTLY FULL | 4 paired, 2 only TEG-Blue, 2 empty |
| **F1** | PARTIAL | Complex nested structure, some sections missing one half |
| **F2** | PARTIAL | 4 instances of TEG-Blue Contribution without Research Traditions pair |
| **F3** | **WEAKEST** | Most sections have only ONE of the two blocks, rarely both |
| **F7** | PARTIAL | 3 sections only TEG-Blue, 1 with neither |
| **F8** | PARTIAL | 5/10 sections have blocks, 5 have NONE |
| **F10** | PARTIAL | 3 paired, 1 unpaired, 6 with NO blocks at all |

**Key finding:** F3, F8, and F10 have the most structural gaps. F8 and F10 (Repair and Complexity arc) were built with significantly less expandable section coverage than earlier frameworks.

---

## 4.3 Blueprint Derivation

### Frameworks and Models — ALL have vault sources

| Source Type | Coverage |
|-------------|----------|
| F1-F12 Concept Architecture | 12/12 vault blueprints present |
| M1-M3 Research docs | 3/3 vault blueprints present |
| Models Hub v2 | Present |

### Non-Framework Pages — Most LACK vault sources

| Page | Vault Source | Status |
|------|-------------|--------|
| `/research-entry` | `teg-blue-org-research-entry.md` | **Has source** |
| `/scientific-foundations` | `scientific-foundations/_index.md` (structural only) | **Partial** |
| `/about` | None | **No vault source** |
| `/emotional-technology` | None | **No vault source** |
| `/epistemological-foundations` | None | **No vault source** |
| `/ai-safety` | None (separate repo exists) | **No vault source** |
| `/methodology` | None | **No vault source** |
| `/foundations` | None | **No vault source** |

**FLAG FOR HUMAN REVIEW:** 6 of 8 non-framework pages were authored directly in page.js without vault blueprints. This is notable because the two pages flagged as non-compliant in Phase 1 (Epistemological Foundations, Emotional Technology) are both among the pages without vault sources — suggesting the vault-first workflow produces better-anchored content.

---

## 4.4 About Page — Origin Story

**Status: COMPLIANT** — The origin story is present and expanded.

The About page contains all three elements from the goals document:
1. Starting with Polyvagal Theory as a visual navigation question — PRESENT (lines 156-157)
2. Each framework following the research tradition that explained the next layer — PRESENT (lines 158-163, names IFS, Winnicott, cognitive dissonance, Goffman)
3. The gradient emerging, not being designed — PRESENT (lines 164-169, "The gradient was not designed. It emerged from following the evidence one layer at a time.")

The About page goes beyond the goals document with more detail about specific theoretical sources and naming Stephen Porges explicitly.

---

## 4.5 Models Hub Page vs. models-hub-v2.md

**Summary: The current page has the correct skeleton but is missing ~60-70% of v2 content.**

### What matches:
- Badge: "3 FOUNDATIONAL MODELS"
- Title: "The Three Core Models"
- Subtitle: "Instrument + Calibration + Biological Foundation = Complete System"
- Integration note (verbatim)
- Footer links (Validation Study, 12 Frameworks, Collaborate)

### What's missing from current page (present in v2):

| Missing Section | Description | Impact |
|----------------|-------------|--------|
| **Extended introduction** | 3-paragraph introduction distinguishing TEG-Blue from other EI frameworks, explaining models are "not summaries of frameworks" but "applied architecture" | HIGH — establishes why the page matters |
| **Models vs. Frameworks distinction** | Dedicated section explaining Layer 1 (Applied) vs Layer 2 (Theoretical), with multi-audience example | HIGH — critical structural framing |
| **Extended model prose** | For each model: "What this model establishes" with bold-lead paragraphs explaining mechanisms in depth | MEDIUM — current cards provide summaries but miss key content |
| **Three-Layer Architecture** | Section showing where models sit relative to frameworks | MEDIUM — structural context |

### Key content in v2 absent from current page:
- M1: "Chronic Connection is as structurally damaging as chronic Domination" (important nuance)
- M1: Insight-behaviour gap mechanistic detail with prediction about somatic vs. cognitive interventions
- M2: SEA as keystone explained in detail ("Without SEA, RE becomes unanchored...")
- M2: "Most consequential configuration for harm" (RE sharp + ER and SEA offline)
- M2: "Not damaged — not developed" reframe of repair
- M3: Full Anchor-Gap-Contribution opening (the one passage that follows the governing principle)
- M3: Specific measurable residue (cortisol, serotonin, oxytocin, prefrontal cortex, gut)
- M3: "The body has no mechanism for receiving philosophical decisions" (key formulation)

**FLAG FOR HUMAN REVIEW:** The models hub update is a significant content change. The v2 document transforms the page from a directory into an intellectual argument. Recommend reviewing v2 and approving before implementing in Phase 5.

---

## Summary of All Flagged Items

### Compliant (no action)
- 4.1 Where to Go Next: present on all pages
- 4.4 About page origin story: present and expanded
- 4.3 Framework/model blueprints: all present

### Flagged for Human Review
1. **4.2** — F3, F8, F10 need expandable section coverage added to match M1/M2/M3/F11 standard
2. **4.3** — 6 non-framework pages lack vault source documents (About, Emotional Technology, Epistemological Foundations, AI Safety, Methodology, Foundations)
3. **4.5** — Models hub v2 is substantially richer than current page — approve before implementing

---

*Phase 4 complete. Proceeding to Phase 5 — M3 Integration (requires human approval on 4.5 and 5.1 before changes).*
