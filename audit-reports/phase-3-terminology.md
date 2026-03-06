# Phase 3 — Terminology Audit Report

**Date:** 2026-03-06

---

## 3.1 "AI" → "Large Language Models"

The brief specifies: any "AI" in academic/research-register content should be "Large Language Models."

**Finding:** "AI" appears ~100+ times across the site. Most instances fall into categories where replacement is NOT appropriate:

### Do NOT Replace (field names, established terms)
- "AI Safety" — recognized field name (page title, nav, badges)
- "AI alignment" — established research term
- "AI-readable research" — general capability term
- SEO metadata keywords ("AI safety", "AI alignment")
- OG image text
- JSON-LD structured data

### FLAG FOR HUMAN REVIEW — Replacement May Be Appropriate

| Location | Current Text | Context | Recommendation |
|----------|-------------|---------|----------------|
| `research-entry/page.js:64` | "usable across humans and AI" | Academic description | FLAG: "AI" is vague — could be "large language models" or kept broad |
| `research-entry/page.js:90` | "usable across individuals, relationships, institutions, and AI systems" | Academic description | FLAG: same ambiguity |
| `research-entry/page.js:234-235` | "AI alignment and structured schemas" / "forms AI systems can read safely" | Research direction | FLAG: "AI systems" could be specified as "large language models" |
| `ai-safety/page.js:132` | "Current AI safety systems" | Academic content | FLAG: refers to safety systems broadly, not just LLMs |
| `ai-safety/page.js:146` | "language AI systems can read" | Academic content | FLAG: specifically about language models |
| `ai-safety/page.js:155-160` | "AI systems agree with users" / "sycophantic AI" | Research content | FLAG: specifically about LLMs — replacement would be accurate |
| `ai-safety/page.js:197` | "AI systems vocabulary" | Research content | FLAG |
| `ai-safety/page.js:255` | "feedback to train AI models" | Research content | FLAG: RLHF context — specifically about LLMs |
| `ai-safety/page.js:341-342` | "AI sycophancy" / "language models" | Research content | Already says "language models" in part of this sentence |
| `ai-safety/page.js:437-442` | "Connect Mode AI" / "AI systems that adjust" | Research content | FLAG |
| `methodology/page.js:52` | "AI research tools" | Methodology description | Accurate — refers to LLMs (Claude, Perplexity, Copilot) |
| `methodology/page.js:206` | "AI research tools" | Methodology description | Same — could be "large language model research tools" |
| `methodology/page.js:282` | "AI consumption" | Technical context | FLAG |
| `scientific-foundations/page.js:879,1682` | "AI research tools" | Development process | Same as methodology |
| `collaborate/page.js:140-141` | "AI systems read safely" | Research direction | FLAG |
| `epistemological-foundations/page.js:367-373` | "AI Development" / "Human-AI Collaboration" / "AI systems" | Application section | FLAG: broad "AI" use in epistemological context |

**Summary:** The AI Safety page is where most "AI" references live. Many specifically describe LLM behavior (sycophancy, RLHF, language model responses) and could accurately use "large language models." However, some refer to broader AI systems (computer vision, robotics) where "LLM" would be incorrect.

**Recommendation:** FLAG ENTIRE SECTION FOR HUMAN REVIEW. This requires Anna's judgment on a case-by-case basis. The replacement is not unambiguous enough for autonomous action across the board.

---

## 3.2 Judgment-Laden Language

### "Healthy compass" → should be "fluid compass"
**Result: NO INSTANCES FOUND.** The site consistently uses "fluid compass" throughout. The term "fluid compass" appears in:
- `glossary/page.js` — defined correctly
- `model/m1-inner-compass/page.js` — used 8+ times
- `framework/f1-emotional-gradient/page.js` — used 10+ times

**Status: COMPLIANT** — "healthy compass" has been fully replaced.

### "Unhealthy" as a mode descriptor
**Result: NO INSTANCES FOUND.** No instance of "unhealthy" as a descriptor for any mode.

**Status: COMPLIANT**

### "Designed operation" as a standalone descriptor
**Result: 4 INSTANCES FOUND — all in appropriate context:**
1. `f2-awareness-calibration/page.js:276` — "F1 establishes the four modes in their designed operation" (within regulation thread explanation)
2. `f1-emotional-gradient/page.js:235` — "what does the complete four-mode compass look like in designed operation" (core question)
3. `f1-emotional-gradient/page.js:241` — "F1 provides...the complete four-mode compass in its designed operation" (framework relationship)
4. `f1-emotional-gradient/page.js:1100` — "In designed operation: deliberate, time-limited, returnable" (table cell for Control/Domination)

**FLAG FOR HUMAN REVIEW:** All 4 instances use "designed operation" to describe how modes function when the compass is fluid. This is descriptive rather than judgment-laden, but the term implies a "correct" way for the system to operate, which could be read as normative. Flagging per brief instructions — do not replace.

### Language implying moral inferiority of modes
**Result: NO INSTANCES FOUND** of "morally inferior" or "morally superior." The site consistently frames modes as positional rather than moral.

**Status: COMPLIANT**

---

## 3.3 Model and Framework Naming Consistency

### M3 Naming
**Canonical name:** "The Open Cycle — The Biology of Unfinished Emotion"

| Location | Name Used | Status |
|----------|-----------|--------|
| `model/m3-the-open-cycle/page.js` | "The Open Cycle" + subtitle "The Biology of Unfinished Emotion" | Compliant |
| `model/m3-the-open-cycle/opengraph-image.js` | "The Biology of Unfinished Emotion" | Compliant |
| `models/page.js` | "The Open Cycle" with subtitle "The Biology of Unfinished Emotion" | Compliant |
| `model/m1-inner-compass/page.js` | "M3: The Open Cycle" | Compliant |
| `model/m2-three-awareness-capacities/page.js` | "M3" with description | Compliant |
| `SiteHeader.jsx` | "M3 — The Open Cycle" | Compliant (missing subtitle) |
| `page.js` (Home) | "M3 — The Open Cycle" | Compliant |
| `framework/f1-emotional-gradient/page.js` | "The Open Cycle (M3)" | Compliant |

**Status: COMPLIANT** — M3 naming is consistent across the site.

### "Two Models" → Should Be "Three Models"

**ISSUES FOUND — model count out of date in these locations:**

| Location | Current Text | Line | Action |
|----------|-------------|------|--------|
| `models/opengraph-image.js:4` | `alt = "The Two Core Models — TEG-Blue Research"` | 4 | **REPLACE**: "The Three Core Models" |
| `models/opengraph-image.js:75` | `The Two Core Models` | 75 | **REPLACE**: "The Three Core Models" |
| `models/layout.js:2` | `title: "The Two Core Models | TEG-Blue Research"` | 2 | **REPLACE** |
| `models/layout.js:23` | `title: "The Two Core Models — Instrument + Calibration | TEG-Blue"` | 23 | **REPLACE**: add "+ Biological Foundation" |
| `models/layout.js:33` | `title: "The Two Core Models — TEG-Blue Research"` | 33 | **REPLACE** |
| `models/layout.js:43` | `name: "The Two Core Models — TEG-Blue"` | 43 | **REPLACE** |
| `glossary/page.js:63` | `title: "Two Core Models"` | 63 | **REPLACE**: "Three Core Models" |
| `glossary/page.js:66` | `"Two models: the Inner Compass..."` | 66 | **REPLACE**: add M3 |
| `frameworks-map/page.js:452,455` | "The Two Core Models" heading | 452-455 | **REPLACE** + add M3 card (identified in Phase 2) |
| `emotional-technology/page.js:324` | "the two core models" | 324 | **REPLACE** |
| `collaborate/page.js:72` | "12 frameworks, 2 models" | 72 | **REPLACE**: "3 models" |

**11 instances need updating.** These are all unambiguous — the site has 3 models, not 2. Can be fixed directly.

---

## 3.4 Framework Naming Consistency

### Critical Issues (wrong names)

**File:** `research-entry/page.js` line 194

| Framework | Current Name (research-entry) | Correct Name | Severity |
|-----------|------------------------------|--------------|----------|
| **F8** | "Self-Awareness Under Stress" | "Repairing Awareness" | **HIGH** |
| **F9** | "Our True Self" | "Neurodivergence as Nervous System Variation" | **HIGH** |
| **F10** | "Repair and Relational Return" | "Rebuilding Generational Bridges" | **HIGH** |

These are old/wrong names from before the framework rename. **Fix directly** — the correct names are unambiguous from the framework pages themselves.

### Minor Variations (shortened forms)

| Framework | Full Title (framework page) | Shortened Form (home page, 404) | Severity |
|-----------|---------------------------|--------------------------------|----------|
| **F9** | "Neurodivergence as Nervous System Variation" | "Neurodivergence as Variation" | LOW |
| **F11** | "The Emotional Logic Behind Paradoxes" | "The Emotional Paradoxes" | LOW |
| **F12** | "Our Two Information Systems" | "The Two Information Systems" | LOW |

**FLAG FOR HUMAN REVIEW:** These are display-context shortenings. The full titles appear on framework pages; shortened forms appear in navigation/overview contexts. Not necessarily wrong — just inconsistent. Anna should decide whether to standardize.

### F8 Expanded Name on Frameworks Map
- **Frameworks Map:** "Repairing Awareness & The Power of Difference"
- **Framework page:** "Repairing Awareness"

**FLAG FOR HUMAN REVIEW:** The frameworks map adds a subtitle. Is this intentional?

---

## Summary of Changes Needed

### Unambiguous Fixes (can do now)
1. **11 instances of "Two Models" / "2 models"** → update to three (listed above)
2. **3 wrong framework names on research-entry** → fix F8, F9, F10 names

### Flagged for Human Review
3. **AI → LLM terminology** — entire category needs case-by-case review
4. **4 instances of "designed operation"** — descriptive but potentially normative
5. **3 minor framework name shortenings** — standardize or accept variation?
6. **F8 expanded name on frameworks map** — intentional subtitle?

---

*Phase 3 complete. Proceeding to Phase 4 — Structural Audit.*
