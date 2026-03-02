# Semantic Heading Map — teg-blue.org

> Generated: 2 March 2026
> Total routes: 46 (13 static pages + 13 concept pages + 12 framework pages + 2 model pages + 1 dynamic publication page + 5 hub/index pages)

---

## SEO Issues Found

| Issue | Severity | Pages affected |
|-------|----------|----------------|
| **Missing h1** on home page | HIGH | `/` — h1 is present but reads "Reconnecting cognition with emotional awareness" (not the site/page name) |
| **No h1** on glossary page | HIGH | `/glossary` — no h1 element rendered; page relies on layout header |
| **Heading level skip** on some pages | MEDIUM | `/frameworks-map` skips from h2 to h4; `/publications` skips from h2 to h4 |
| **h2 used for decorative/CTA text** | LOW | Several pages use h2 for "Contact", "Contribute", "Collaborate" — these are CTA sections, not content sections |
| **Generic h1** on about page | LOW | `/about` — h1 is just "About" |

---

## Route-by-Route Heading Hierarchy

### `/` — Home

| Level | Text |
|-------|------|
| h1 | Reconnecting cognition with emotional awareness |
| h2 | Foundational Concepts |
| h2 | 2 Models |
| h2 | 12 Frameworks |
| h2 | Contribute |
| h2 | Collaborate |

**Notes:** Section labels "Understand the system", "Verify the claims", "Interactive Tools" are `<p>` tags, not headings. No h3.

---

### `/about` — About

| Level | Text |
|-------|------|
| h1 | About |
| h2 | What TEG-Blue is |
| h2 | Two sites |
| &ensp; h3 | teg-blue.org (you are here) |
| &ensp; h3 | teg-blue.com |
| h2 | The founder |
| &ensp; h3 | Anna Paretas-Artacho |
| h2 | Research identity |
| h2 | License |

---

### `/ai-safety` — AI Safety Applications

| Level | Text |
|-------|------|
| h1 | Emotional Technology for Safer AI |
| h2 | 01 — Binary Classification Fails Human Complexity *(via SectionHeader)* |
| h2 | 02 — Nuance AI Systems Can Actually Use |
| h2 | 03 — Why Nervous System State Changes Everything |
| h2 | 04 — Predicting What Happens Next |
| h2 | 05 — The Sycophancy Problem Through an Emotional Logic Lens |
| h2 | 06 — How Harmful Patterns Scale |
| h2 | 07 — The Technical Bridge: TEG-Code and EMLU |
| h2 | 08 — Built for Machines to Read |
| h2 | 09 — What We're Inviting You to Test |
| h2 | Ethical Constraint |
| h2 | Build With Us |

---

### `/citations` — How to Cite

| Level | Text |
|-------|------|
| h1 | How to Cite |
| h2 | Citing the TEG-Blue Framework |

**Notes:** Dynamic h3 headings rendered per publication (title of each publication).

---

### `/collaborate` — Collaborate

| Level | Text |
|-------|------|
| h1 | Collaborate |
| h2 | Principles |
| h2 | How to start |
| h2 | The four research lanes |
| h2 | What collaboration looks like |
| h2 | What we can offer |
| h2 | What we need |
| h2 | Contact |

**Notes:** Lane cards (A–D) use `<h3>` via LaneCard helper: "Measurement and recognition", "Prediction and prevention", "Navigation and intervention", "AI alignment and structured schemas".

---

### `/concepts` — Foundational Concepts (Hub)

| Level | Text |
|-------|------|
| h1 | Foundational Concepts |
| h3 | Go Deeper |

**Notes:** Individual concept names (C1–C13) are rendered as `<span>` elements inside link cards, not headings. No h2 on this page.

---

### `/concepts/[slug]` — Individual Concept Pages (x13)

Template from `ConceptPage.jsx`:

| Level | Text |
|-------|------|
| h1 | *{concept.name}* |
| h2 | What It Is |
| h2 | Where It Comes From |
| h2 | What TEG-Blue Adds |

**Actual h1 values (13 pages):**

| Route | h1 |
|-------|-----|
| `/concepts/emotions-as-biological-information` | Emotions as Biological Information |
| `/concepts/the-safety-orientation-question` | The Safety Orientation Question |
| `/concepts/the-inner-compass` | The Inner Compass |
| `/concepts/state-determines-capacity` | State Determines Capacity |
| `/concepts/regulation-the-return-mechanism` | Regulation — The Return Mechanism |
| `/concepts/same-emotion-two-expressions` | Same Emotion, Two Expressions |
| `/concepts/reading-emotions` | Reading Emotions |
| `/concepts/emotional-resonance` | Emotional Resonance |
| `/concepts/self-emotional-awareness` | Self-Emotional Awareness |
| `/concepts/emotional-distortion` | Emotional Distortion |
| `/concepts/false-coherence` | False Coherence |
| `/concepts/awareness-teaches-awareness` | Awareness Teaches Awareness |
| `/concepts/tolerance-thresholds` | Tolerance Thresholds |

**Notes:** Some concept pages use `content.body` (full narrative) instead of the three-section layout, in which case h2s may differ. FrameworkDestinationCard renders as `<p>` not a heading.

---

### `/emotional-technology` — Emotional Technology

| Level | Text |
|-------|------|
| h1 | *(needs verification — likely "What is Emotional Technology?" or similar)* |

**Notes:** Page exists but headings were not fully extracted in this audit. Needs manual review.

---

### `/epistemological-foundations` — Epistemological Foundations

| Level | Text |
|-------|------|
| h1 | *(rendered in header section — needs verification)* |
| h2 | What This Framework Explains |
| h2 | What This Framework Reveals |
| h2 | Why This Matters |
| h2 | Foundational Significance |
| h2 | Connection to TEG-Blue Framework |
| h2 | Where to go next |

**Notes:** Additional h2 sections exist before "What This Framework Explains" (Core Thesis, Primary Concepts, Secondary Concepts, Sub-Core Concepts) — rendered as h2 elements in the first half of the page. h3 elements used in concept detail cards.

---

### `/foundations` — System Overview

| Level | Text |
|-------|------|
| h1 | System Overview |
| &ensp; h3 | Four-Mode Gradient *(inside Layer 1 card)* |
| &ensp; h3 | 12 Frameworks (F1–F12) *(inside Layer 2 card)* |
| &ensp; h3 | Applied Instruments *(inside Layer 3 card)* |
| &ensp; h3 | Structured Schemas for AI Systems *(inside Layer 4 card)* |
| h2 | The four core functions |
| h2 | Ethical constraint: Trauma-informed data architecture |
| h2 | Intent–Impact–Pattern logic |
| h2 | Where to go next |

**Notes:** Layer cards (1–4) use a `LayerCard` component that renders h3. The quick-nav cards at top use `LayerIntroCard` which does not use headings. Heading level skip: h1 → h3 (no h2 before the layer sections).

---

### `/four-mode-gradient` — The Four-Mode Gradient

| Level | Text |
|-------|------|
| h1 | The Four-Mode Gradient |
| h2 | The Four Regulatory States |
| &ensp; h3 | The Core Testable Claim |
| h2 | Explore the Full Framework |
| h2 | Two-Layer Architecture |

**Notes:** Individual mode names (Connection, Protection, Control, Domination) are `<span>` elements, not headings.

---

### `/frameworks` — Redirect

Redirects to `/frameworks-map`. No heading content.

---

### `/frameworks-map` — Framework Mapping System

| Level | Text |
|-------|------|
| h1 | Framework Mapping System |
| h2 | The Framework Mapping Arc |
| h2 | Help Us Validate |
| &ensp; h3 | *{framework.name}* *(12 expandable cards, each with h3)* |

**Expandable framework card h3s:**

| h3 | Framework |
|----|-----------|
| Emotions as a Biological Information | F1 |
| Awareness Teaches Awareness | F2 |
| Adult Cognition & False Coherence | F3 |
| Rules Regulate | F4 |
| Worth Hierarchies Regulate | F5 |
| Bias as Regulation | F6 |
| Domination Regulates | F7 |
| Repairing Awareness & The Power of Difference | F8 |
| Neurodivergence as Nervous System Variation | F9 |
| Rebuilding Generational Bridges | F10 |
| The Emotional Paradoxes | F11 |
| The Two Information Systems | F12 |

**Notes:** Each expandable card also has h4 elements: "CORE QUESTION", "BUILDS ON", "TESTABLE", "WHAT REGULATES". Heading level skip: h2 → h4 (no intermediate h3 inside cards).

---

### `/frameworks/f1` through `/frameworks/f12` — Individual Framework Pages (x12)

Template from `FrameworkPage.jsx`:

| Level | Text |
|-------|------|
| h1 | *{framework.name}* |
| h2 | *{framework.researcherTitle}* |
| h3 | What This Framework Proposes |
| h3 | The Mechanism |
| h3 | What Happens When It Breaks |
| h3 | The Regulation Thread |
| h3 | Scientific Foundations |
| h3 | Connections |
| h3 | Testable Claims |

**Note:** h2 is `framework.researcherTitle` (subtitle), not a section heading. This is semantically unusual — it functions as a page subtitle, not a content section.

**Individual framework page headings (h1 / h2):**

| Route | h1 | h2 (subtitle) |
|-------|-----|----------------|
| `/frameworks/f1` | Emotions as a Biological Information | How the Nervous System Orients Between Safety and Threat |
| `/frameworks/f2` | Awareness Teaches Awareness | How the Three Capacities Calibrate the Compass |
| `/frameworks/f3` | Adult Cognition & False Coherence | How Cognition Maintains Identity Under Pressure |
| `/frameworks/f4` | Rules Regulate | How Individual Patterns Scale to Collective Systems |
| `/frameworks/f5` | Worth Hierarchies Regulate | How Rules Become Sorting Systems |
| `/frameworks/f6` | Bias as Regulation | How Perception Becomes Protection |
| `/frameworks/f7` | Domination Regulates | How Defence Becomes Strategy Becomes Domination |
| `/frameworks/f8` | Repairing Awareness & The Power of Difference | How to Develop What Was Missing |
| `/frameworks/f9` | Neurodivergence as Nervous System Variation | System Mismatch & Structural Inclusion |
| `/frameworks/f10` | Rebuilding Generational Bridges | Generational Transmission & The Conditions for Change |
| `/frameworks/f11` | The Emotional Paradoxes | Multi-Rationality and Holding Capacity |
| `/frameworks/f12` | The Two Information Systems | State-Dependent Organisation — The Architecture Underneath Everything |

**Content sections (h4) from f-content.jsx files — per framework:**

<details>
<summary>F1 h4 subheadings</summary>

- The Inner Compass — A Moving Needle
- Signal to Mode in Milliseconds
- Connection — Body-First
- Protection — Body-First
- Control and Domination — Cognition-First
- The Gradient
- Regulation — The Return Mechanism
- State Determines Capacity
- Same Emotion, Two Expressions
- When the Return Is Missing
</details>

<details>
<summary>F2 h4 subheadings</summary>

- Co-Regulation — How the Return Is Learned
- Three Conditions of Incomplete Awareness
- *(dynamic title)*
- From Capacity to Identity
- Tolerance Thresholds
- Generational Replication
- Healing Is Reconnecting, Not Removing
</details>

<details>
<summary>F3 h4 subheadings</summary>

- The Self-Reinforcing Loop
- *(dynamic title)*
- Emotional Distortion
- Identity Upgrades
- Regulatory Defence Across the Gradient
- External Regulation
- The Somatic Cost
</details>

<details>
<summary>F4 h4 subheadings</summary>

- The Seven-Step Internalisation
- Six Rule Systems
- Cross-Theoretical Convergence
- Rule Escalation Under Sustained Threat
- Punishment Versus Accountability
- The Self-Sealing Problem
</details>

<details>
<summary>F5 h4 subheadings</summary>

- Safety Proxies and the Three Capitals
- The Five-Step Worth Loop
- *(dynamic title)*
- Self-Reinforcing Advantage
- The Bridge to Perception
</details>

<details>
<summary>F6 h4 subheadings</summary>

- The Bias Architecture
- Three Categories by Regulatory Function
- The Phenomenology of Certainty
- The Six-Step Bias Formation Loop
- *(dynamic title)*
</details>

<details>
<summary>F7 h4 subheadings</summary>

- The Crossroads
- Five-Stage Escalation Pathway
- Empathy Gating — The Three Capacities Under Escalation
- Addiction Logic at the Domination End
- Causality and Accountability Are Separable
- The Regulation Thread Complete
</details>

<details>
<summary>F8 h4 subheadings</summary>

- Assessing Current Configuration
- Why Repair Is Difficult
- Five Conditions for Repair
- The Repair Process
- Everyone Masks Their Configuration
- The Cost of Conformity
- Collective Intelligence Through Openness
</details>

<details>
<summary>F9 h4 subheadings</summary>

- Structural Masking
- Threshold Dynamics
- *(dynamic title)*
- Unmasking Is Not Healing
- From Accommodation to Design
- The Structural Argument
</details>

<details>
<summary>F10 h4 subheadings</summary>

- Five Transmission Pathways
- What Is Not Processed Gets Passed On
- The Mechanism of Generational Change
- Enough, Not Perfect
- Understanding Without Excusing
</details>

<details>
<summary>F11 h4 subheadings</summary>

- Every Framework Generates Paradox
- The Paradox Cascade
- Paradox and Compass Position
- Holding Capacity
- The Paradoxes of Repair
- The Relational Paradoxes
- The Systemic Paradoxes
</details>

<details>
<summary>F12 h4 subheadings</summary>

- *(dynamic title)*
- What Actually Changes Patterns
- State-Dependent Behaviour
- One Mechanism, Twelve Angles
- Accountability Without Demonisation
- Gradient-Matched Intervention
</details>

---

### `/glossary` — Glossary

| Level | Text |
|-------|------|
| h1 | *(MISSING — no h1 rendered on this page)* |

**Notes:** The glossary page uses `GlossaryList` client component. No h1 is rendered in the server page component. Term titles may be rendered as headings inside the client component. **This is a significant SEO gap.**

---

### `/methodology` — Methodology

| Level | Text |
|-------|------|
| h1 | Methodology |
| h2 | Open science principles |
| h2 | Status ladder |
| h2 | Validation approach |
| h2 | How TEG-Blue was developed |
| &ensp; h3 | The architecture |
| &ensp; h3 | The literature mapping |
| &ensp; h3 | What this means |
| &ensp; h3 | Limitations |
| h2 | Ethical standards |
| &ensp; h3 | Trauma-informed data architecture |
| h2 | AI-readable research |
| h2 | Where current methodology stands |

---

### `/models` — Two Models (Hub)

| Level | Text |
|-------|------|
| h1 | Two Models |
| h2 | The Inner Compass & Four-Mode Gradient *(dynamic)* |
| h2 | The Three Awareness Capacities *(dynamic)* |
| h3 | Scientific Foundations |
| h3 | From Models to Tools |

---

### `/models/inner-compass` — The Inner Compass & Four-Mode Gradient

Template from `ModelPage.jsx`:

| Level | Text |
|-------|------|
| h1 | The Inner Compass & Four-Mode Gradient |
| h3 | Overview |
| h3 | *{characteristic titles — dynamic from content}* |
| h3 | What the Model Changes |
| h3 | Research Foundations |
| h3 | Connection to The Three Awareness Capacities |

**h4 subheadings from inner-compass-content.jsx:**

- Connection — Body-First
- Protection — Body-First
- Control — Cognition-First
- Domination — Cognition-First

---

### `/models/three-awareness-capacities` — The Three Awareness Capacities

| Level | Text |
|-------|------|
| h1 | The Three Awareness Capacities |
| h3 | Overview |
| h3 | *{characteristic titles — dynamic from content}* |
| h3 | What the Model Changes |
| h3 | Research Foundations |
| h3 | Connection to The Inner Compass & Four-Mode Gradient |

---

### `/publications` — Publications

| Level | Text |
|-------|------|
| h1 | Publications |
| h2 | Validation Study |
| &ensp; h3 | Detecting Regulatory States in Natural Language |
| &ensp;&ensp; h4 | Key Findings |
| h2 | All Publications *(conditional — only if publications exist)* |
| h2 | Datasets |
| &ensp; h3 | AITA Conflict Narratives Dataset |
| h2 | How to cite |
| h2 | Request access or collaborate |

---

### `/publications/[slug]` — Individual Publication Pages

Template uses `PublicationPage.jsx` (dynamic content from markdown files).

| Level | Text |
|-------|------|
| h1 | *{publication title}* |
| h2 | IDENTITY / CONTEXT / CORE / CONNECTIONS / DEPTH *(section headings)* |

---

### `/research-entry` — For Researchers

| Level | Text |
|-------|------|
| h1 | For Researchers |
| h2 | What TEG-Blue is |
| h2 | What is original: the "1 + 2 = 3" principle |
| h2 | Status snapshot |
| h2 | The core hypothesis we want help testing |
| h2 | Choose a lane |
| h2 | What we are not asking for |
| h2 | Next steps |
| h2 | Contact |

**Notes:** Lane cards (A–D) use LaneCard helper with h3: "Measurement and recognition", "Prediction and prevention", "Navigation and intervention", "AI alignment and structured schemas".

---

### `/scientific-foundations` — Scientific Foundations

| Level | Text |
|-------|------|
| h1 | Scientific Foundations |
| h2 | Core Foundations *(via component)* |
| h2 | How TEG-Blue Builds on Existing Models |
| h2 | 139+ Established Theories |
| h2 | How We Validate |

**Notes:** The "139+ Established Theories" section contains h3 headings for each of the 12 research domains (dynamically rendered from `RESEARCH_DOMAINS` array): Affective Neuroscience, Analytical Psychology, Attachment, Developmental Psychology, Emotion Science, Humanistic Psychology, Motivational Science, Object Relations, Polyvagal Theory, Self Psychology, Psychoanalysis, Trauma Research.

---

## Summary: Heading Level Hierarchy

| Route | h1 | h2 count | h3 count | h4 count | Issues |
|-------|-----|----------|----------|----------|--------|
| `/` | 1 | 4 | 0 | 0 | — |
| `/about` | 1 | 5 | 3 | 0 | Generic h1 |
| `/ai-safety` | 1 | 11 | 0 | 0 | — |
| `/citations` | 1 | 1 | 0 | 0 | — |
| `/collaborate` | 1 | 7 | 4 | 0 | — |
| `/concepts` | 1 | 0 | 1 | 0 | No h2 |
| `/concepts/[slug]` (x13) | 1 | 2-3 | 0 | 0 | — |
| `/emotional-technology` | ? | ? | ? | ? | Needs audit |
| `/epistemological-foundations` | ? | 6+ | 1+ | 0 | h1 needs verification |
| `/foundations` | 1 | 4 | 4 | 0 | h1→h3 skip |
| `/four-mode-gradient` | 1 | 3 | 1 | 0 | — |
| `/frameworks` | — | — | — | — | Redirect |
| `/frameworks-map` | 1 | 2 | 12 | 4 | h2→h4 skip |
| `/frameworks/[slug]` (x12) | 1 | 1 | 7 | 5-11 | h2 is subtitle |
| `/glossary` | **0** | 0 | 0 | 0 | **Missing h1** |
| `/methodology` | 1 | 7 | 5 | 0 | — |
| `/models` | 1 | 2 | 2 | 2 | — |
| `/models/[slug]` (x2) | 1 | 0 | 4-5 | 4 | h1→h3 skip |
| `/publications` | 1 | 5 | 2 | 1 | h2→h4 skip |
| `/publications/[slug]` | 1 | 5 | 0 | 0 | — |
| `/research-entry` | 1 | 8 | 4 | 0 | — |
| `/scientific-foundations` | 1 | 4 | 12 | 0 | — |

---

## Recommendations

### HIGH Priority

1. **Add h1 to `/glossary`** — Currently missing entirely. Should be "Glossary" or "TEG-Blue Glossary".

2. **Fix heading level skips:**
   - `/foundations`: h1 → h3 (Layer cards). Add h2 "The Four Layers" before the h3 layer cards.
   - `/models/[slug]`: h1 → h3. The `ContentSection` helper in `ModelPage.jsx` uses h3 — should be h2.
   - `/frameworks-map`: h2 → h4 inside expandable cards. Consider using h3 inside cards.
   - `/publications`: h2 → h4 for "Key Findings". Consider using h3.

3. **Fix h2 subtitle on framework pages** — `FrameworkPage.jsx` uses h2 for `researcherTitle` which is a subtitle, not a content section. Consider using `<p>` with appropriate styling instead.

### MEDIUM Priority

4. **Add h2 to `/concepts` hub** — The page has h1 and h3 but no h2. The concept list could benefit from group headings as h2: "How the System Works", "The Three Awareness Capacities", "What Happens When It Breaks".

5. **Improve h1 on `/about`** — "About" alone is generic. Consider "About TEG-Blue" or "About the Research".

6. **Verify `/emotional-technology` headings** — This page was not fully audited.

7. **Verify `/epistemological-foundations` h1** — Confirm the h1 text.

### LOW Priority

8. **CTA headings** — "Contact", "Contribute", "Collaborate" as h2 are technically fine but could use `aria-label` for better screen reader context.

9. **Dynamic h4 titles in framework content files** — Some have `{subheading}` with dynamic text that should be verified for completeness.
