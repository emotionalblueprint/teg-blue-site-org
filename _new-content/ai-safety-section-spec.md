# AI Safety Section — Page Specification

## Overview

This is the specification for the `/ai-safety` page on teg-blue.org. It serves as the primary landing page explaining how TEG-Blue applies to AI safety — targeting AI/ML researchers, safety practitioners, and product teams building AI systems that interact with human emotion.

---

## Page Structure

The page follows a single-column, long-scroll narrative with 7 content sections plus hero, scenario block, and CTA. Each section builds on the previous one. The tone is authoritative but accessible — this is a research framework speaking to a technical audience, not a sales page.

---

## Navigation Context

This page sits under the main site nav. The "AI Safety" link should be active/highlighted. Other nav items for context: Framework, Research, AI Safety (active), Tools, Collaborate.

---

## Section 1: Hero

**Label:** AI Safety Application
**Heading:** Emotional Intelligence Infrastructure for *Safer AI*
**Subheading:** AI safety systems classify human emotion as safe or unsafe. Reality operates on gradients. TEG-Blue provides the structured, computationally legible framework to bridge the gap.

Design notes:
- "Safer AI" in the heading should have a gradient text effect (green to blue) to visually connect with the Connection state color
- Generous vertical spacing — this should feel like a considered, unhurried opening
- Subtle entrance animations (fade up with stagger)

---

## Section 2: Scenario Block — "I can't do this anymore"

This is the single most important demonstration on the page. It shows how one sentence reads completely differently depending on the speaker's regulatory state.

**Quote:** "I can't do this anymore."

**Context line:** A binary classification system sees one sentence. A gradient framework sees at least four possibilities:

**Four cards in a row (or grid on mobile):**

| State | Color | Reading |
|-------|-------|---------|
| Connection | Green (#22c55e) | Setting a boundary. Leaving a harmful situation. Growth. |
| Protection | Yellow (#eab308) | Overwhelmed. Needs support. Temporary distress signal. |
| Control | Orange (#f97316) | Manipulative framing. Testing others' responses. Strategic. |
| Crisis | Red (#ef4444) | Active danger. Dissociation from consequences. Intervention needed. |

Design notes:
- Container card with a thin gradient stripe across the top edge (green → yellow → orange → red)
- Each of the four reading cards has its state name in the corresponding color
- Dark surface background to make the color coding pop

---

## Section 3: The Problem

**Section number:** 01 — The Problem
**Heading:** Binary Classification Fails Human Complexity

**Content:**

Current AI safety systems operate on a fundamental binary: content is safe or unsafe, behavior is acceptable or harmful, a user is fine or at risk. Human emotional reality doesn't work this way.

Psychology has understood the nuance for decades. Empathy exists on a gradient. Accountability has multiple modes. Moral reasoning shifts with nervous system state. **The problem isn't that we lack the knowledge — it's that no one has translated it into a language AI systems can read.**

This translation gap has consequences. AI systems trained on human-generated text inherit every mode of human expression — including strategic manipulation, performed empathy, and weaponized accountability — without the ability to distinguish these patterns from genuine connection.

---

## Section 4: Gradient Scales

**Section number:** 02 — Gradient Scales
**Heading:** Nuance AI Systems Can Actually Use

**Content:**

TEG-Blue replaces binary classification with structured gradients. Each scale maps a dimension of human behavior from healthy to harmful, with clear markers at every point — designed for computational legibility.

**Gradient visualization 1 — Empathy:**

Four cells in a horizontal row, color-coded from green to red:

1. **Genuine** (green) — Feels and responds to others' actual experience
2. **Selective** (yellow) — Empathy available for in-group only
3. **Performed** (orange) — Correct words without internal resonance
4. **Weaponized** (red) — Emotional knowledge used to manipulate

**Gradient visualization 2 — Accountability:**

1. **Genuine** (green) — Takes responsibility with internal change
2. **Performed** (yellow) — Says the right things without shifting behavior
3. **Absent** (orange) — Avoids responsibility entirely
4. **Protective** (red) — Uses "accountability" as a shield against criticism

**Closing paragraph:**

These gradients give AI systems vocabulary for patterns that "safe/unsafe" cannot capture — and structured data representations that keyword filters cannot match.

Design notes:
- Each gradient row is a horizontal strip of 4 cells with subtle color-coded backgrounds
- Cells should have hover interaction (slight lift + shadow)
- Monospace labels above each cell (GENUINE, SELECTIVE, etc.)
- Each gradient block has a label above it ("Empathy Gradient", "Accountability Gradient")

---

## Section 5: Moral Reasoning Under Threat

**Section number:** 03 — Moral Reasoning Under Threat
**Heading:** Why Nervous System State Changes Everything

**Content:**

Research across neuroscience, polyvagal theory, and trauma psychology converges on a critical finding: **the nervous system state a person occupies fundamentally shapes their capacity for moral reasoning.** This isn't a character flaw — it's biology.

**Four state cards in a 2×2 grid:**

| State | Color accent (left border) | Description |
|-------|---------------------------|-------------|
| Connection | Green | Full moral complexity available. Can hold multiple perspectives, tolerate ambiguity, take genuine responsibility, and repair harm. |
| Protection | Yellow | Moral reasoning narrows to in-group loyalty. World splits into safe/unsafe. Not malicious — the nervous system doing what it evolved to do. |
| Control | Orange | Moral reasoning becomes strategic. Right and wrong are tools for maintaining position. Empathy is selective and deployed instrumentally. |
| Domination | Red | Moral reasoning effectively goes offline. Others become objects. Harm is rationalized or invisible to the actor. |

**Closing paragraph:**

This mapping is essential for AI systems because **training data is generated by humans in every one of these states.** A model that can't distinguish which state produced a text will learn strategic manipulation and genuine empathy as equally valid patterns.

Design notes:
- Each card has a 3px colored left border matching its state
- State name in monospace, uppercase, in the corresponding color
- Dark card background on dark page background (elevated surface)

---

## Section 6: Trajectory Over Snapshot

**Section number:** 04 — Trajectory Over Snapshot
**Heading:** Predicting What Happens Next

**Content:**

TEG-Blue's core testable claim: **a person's capacity to return to Connection when challenged predicts outcomes more reliably than their current emotional state.**

A validation study (n=216) measured what happens when people's current state is disrupted — when they're challenged, confronted, or pushed out of their comfort zone:

**Bar chart visualization:**

Header (monospace, centered): Response to Challenge — Validation Study (n=216)

Three vertical bars:
- **Escalate** — 33.8% — Red tinted bar
- **Hold Steady** — 44.0% — Blue tinted bar (tallest)
- **De-escalate** — 22.2% — Green tinted bar

Caption (italic, centered): The response to challenge — not baseline behavior — is the strongest predictor of what comes next.

**Closing paragraph:**

AI safety systems that only read the snapshot miss the trajectory. A person in Protection mode who de-escalates under challenge is fundamentally different from one who escalates toward Control — even though they may present identically at the moment of assessment.

Design notes:
- The bar chart should feel data-driven and clean, not decorative
- Bars use semi-transparent fills with a subtle gradient (darker at top, lighter at bottom)
- The percentage numbers sit inside the top of each bar in monospace font

---

## Section 7: Individual to Systemic

**Section number:** 05 — Individual to Systemic
**Heading:** How Harmful Patterns Scale

**Content:**

TEG-Blue doesn't stop at individual behavior. Its twelve interconnected frameworks (F1–F12) map how individual dysregulation scales into collective patterns:

**Individual → Relational → Group → Institutional → Systemic.** A person operating in Control mode builds relationships that normalize control. Groups form around those relationships. Institutions codify those group norms. Systems entrench them.

This matters for AI safety because harmful content rarely emerges from isolated bad actors. It emerges from systemic patterns — and AI systems trained on that content inherit those patterns without any mechanism to recognize or interrupt them.

---

## Section 8: AI-Native Data Architecture

**Section number:** 06 — Built for Machines to Read
**Heading:** AI-Native Data Architecture

**Content:**

TEG-Blue is explicitly designed for computational consumption — not just human readers. Every concept in the framework is represented in structured, version-controlled, machine-readable formats.

**Code block (syntax-highlighted JSON):**

```json
// JSON-LD structured data — every page, every concept
{
  "@context": "https://schema.org",
  "@type": "PsychologicalFramework",
  "name": "Empathy Gradient",
  "states": [
    { "level": 1, "label": "genuine",    "markers": [...] },
    { "level": 2, "label": "selective",  "markers": [...] },
    { "level": 3, "label": "performed",  "markers": [...] },
    { "level": 4, "label": "weaponized", "markers": [...] }
  ],
  "sourceTheories": 139,
  "version": "git-controlled"
}
```

This includes JSON-LD structured data on every page, JSON content files that are git-versioned and non-binary, consistent terminology across 139+ integrated source theories, flat color palettes and semantic HTML for reliable parsing, and open API endpoints for programmatic access.

**This isn't a PDF to interpret. It's emotional intelligence infrastructure designed to be consumed computationally.**

Design notes:
- Code block with dark background (#0d1117), syntax highlighting for JSON
- Keys in light blue, strings in green, numbers in orange, comments in gray

---

## Section 9: Open Research Questions

**Section number:** 07 — Open Research Questions
**Heading:** What We're Inviting You to Test

**Content:**

TEG-Blue doesn't claim to have solved AI safety. It claims to have mapped territory that AI safety has been navigating without a map. These questions are explicit invitations to the research community:

**Five question cards (vertical stack):**

Each card has a small square icon on the left with "Q1", "Q2", etc.

**Q1 — Computational Complexity Markers.** Can the markers that predict healthy outcomes — self-awareness, perspective-taking, emotional differentiation — be standardized as computational measures applicable to natural language?

**Q2 — Escalation Detection.** Can escalation and de-escalation pathways be reliably detected in text-based communication? What accuracy thresholds are achievable with current NLP methods?

**Q3 — Regulatory State Classification.** Can the four regulatory states — Connection, Protection, Control, Domination — be reproduced as a computational classification with meaningful inter-rater reliability?

**Q4 — Training Data Audit.** Can TEG-Blue gradients be applied to audit training datasets for patterns of performed empathy, strategic accountability, or systemic bias that current methods miss?

**Q5 — Scale Validation.** Do the individual-to-systemic scaling patterns (F1–F12) hold when applied to large-scale online community dynamics and platform-level content analysis?

Design notes:
- Cards have a subtle blue border glow on hover
- Q icons are small rounded squares with blue-tinted background
- Clean, readable — this is the section researchers will screenshot

---

## Section 10: CTA — Build With Us

**Heading:** Build With Us

**Subheading:** TEG-Blue is an open research framework backed by an international consortium. The structured data, validation methodology, and framework documentation are available for researchers ready to test these questions.

**Three buttons (centered):**
1. **Access the Framework →** (primary / filled)
2. **Research Collaboration** (secondary / outlined)
3. **View Validation Study** (secondary / outlined)

---

## Footer

TEG-Blue © 2025 — An open research framework for emotional intelligence in AI systems. Developed by an international research consortium. All structured data is open for academic use.

---

## Design System Notes

**Color palette (state colors used throughout):**
- Connection: #22c55e (green)
- Protection: #eab308 (yellow)
- Control: #f97316 (orange)
- Domination: #ef4444 (red)
- Accent/UI: #3b82f6 (blue)

**Typography suggestions:**
- Display headings: Serif font (elegant, authoritative)
- Body text: Clean sans-serif
- Labels, section numbers, code: Monospace

**General feel:**
- Dark theme (deep navy/near-black background)
- Subtle, not flashy — the content and data do the work
- Generous whitespace between sections
- Section dividers (thin border lines)
- Entrance animations on scroll (fade up, staggered)
- This page should feel like reading a well-designed research document, not a marketing landing page
