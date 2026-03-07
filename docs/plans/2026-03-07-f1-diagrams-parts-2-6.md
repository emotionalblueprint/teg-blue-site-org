# F1 Diagrams Parts 2–6 — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the remaining 5 diagrams for F1 framework page (Parts 2–6) and integrate them into the page.

**Architecture:** Each diagram is a separate component in `src/components/framework-diagrams/`. All use `DiagramToggle` wrapper (already built). All follow the Visual Graphics Protocol AND the refined conventions established with Part 1 (see `memory/framework-diagrams.md`).

**Tech Stack:** React, inline SVG, tokens.js, Next.js App Router. Animated/interactive components use `'use client'` + `dynamic()` import.

**Key references:**
- Visual Graphics Protocol: `docs/plans/2026-03-07-visual-graphics-protocol.md`
- Design tokens: `src/styles/tokens.js`
- Part 1 reference implementation: `src/components/framework-diagrams/F1SignalDiagram.jsx`
- DiagramToggle wrapper: `src/components/framework-diagrams/DiagramToggle.jsx`
- Existing compass component: `src/components/FluidCompassExplorer.jsx`
- Existing open cycle component: `src/components/OpenCycleExplorer.jsx`
- F1 page: `app/framework/f1-emotional-gradient/page.js`

---

## Visual Conventions (from Part 1 — apply to ALL diagrams)

### Typography
- Main labels: 12–14px, weight 700, FONT.mono
- Secondary labels: 10–11px, weight 400–500
- Node labels: 10px, weight 600
- Annotations: 10px, weight 400
- Font in SVG: use local constant `MONO = "'JetBrains Mono', 'SF Mono', 'Consolas', monospace"`

### Colors
- **White** (`TEXT.primary`) for key labels that need to pop
- **sky** (#7ABAEB) for primary lines, node labels, light annotations
- **azure** (#4A9BE8) for node fills, connectors, secondary labels
- **blue** (#3B7DE5) for focal elements
- **cobalt** (#3560CC) for container backgrounds (0.08), borders (0.18)
- **indigo** (#4A50B0) for deep connectors, dashed lines
- **slate** (#6B7A99) for deliberately muted elements
- No glow filters. Use opacity layers only.

### Container
- DiagramToggle handles the wrapper (cobalt-tinted bg, visible button)
- Pass `defaultOpen` for diagrams that should be open on load

### Performance
- Static SVGs: inline, server component (no `'use client'`)
- Animated/interactive: `'use client'` + `dynamic(() => import(...), { ssr: false })`
- Per-graphic: static < 5KB, animated < 20KB, interactive < 25KB

---

## Task 1: Part 2 — The Instrument (Animated)

**Brief:** The Inner Compass — a horizontal gradient bar showing Connection and Protection as the two body-first poles. A needle/marker moves between them, showing fluid movement. The key insight: "fluid operation is the needle moving — responding, orienting, and coming back."

**Type:** Animated (CSS transitions, not RAF — the movement is state-based, not narrative)

**What it must convey:**
1. Connection and Protection are the two fundamental orientations (body-first)
2. A fluid compass moves — it doesn't stay in one place
3. The needle responds to perceived safety/threat and comes back
4. A stuck compass is one where the needle has lost its capacity to move

**Primitives:** Gradient bar (from PatternGradientBar), compass needle

**Graphic concept:**
- Horizontal gradient bar showing Connection (left, sky/azure) ↔ Protection (right, blue/indigo)
- A marker/needle that oscillates between the two — showing fluid movement
- On click or toggle, show "stuck" state: needle frozen at one position, with visual indication of rigidity
- Labels: "CONNECTION" (left), "PROTECTION" (right), "fluid" / "stuck" states
- Two body-first mode descriptions below the bar

**Existing reference:** `FluidCompassExplorer.jsx` (621 lines) — this is the full 4-mode explorer. Part 2 should be a SIMPLIFIED version showing only Connection ↔ Protection (the body-first pair). Do NOT reuse FluidCompassExplorer directly — build a focused, lightweight version.

**Files:**
- Create: `src/components/framework-diagrams/F1InstrumentDiagram.jsx` ('use client')
- Modify: `src/components/framework-diagrams/index.js` (add export)
- Modify: `app/framework/f1-emotional-gradient/page.js` (add import, add toggle in Part 2 section after `<h2 id="heading-the-instrument">`, around line 382)

**Integration:** Use `dynamic(() => import(...), { ssr: false })` in the F1 page for this component since it's animated/interactive.

**Commit:** "Add F1 Instrument diagram: animated Connection ↔ Protection compass"

---

## Task 2: Part 3 — The Hinge (Animated)

**Brief:** Bifurcation diagram — an activation arc that reaches a peak, then splits into two paths: one that completes (Biological Restoration → back to baseline) and one that stays open (cycle never closes → chronic load).

**Type:** Animated (RAF for the path reveal — this is a narrative animation like EmotionWaveSection)

**What it must convey:**
1. Activation rises from baseline (threat perceived)
2. At the peak, there is a bifurcation point — the hinge
3. Path A: activation completes → body restores → returns to Connection (downward curve to baseline)
4. Path B: activation stays open → cycle never closes → chronic load (stays elevated, oscillating)
5. "Biological Restoration cannot be forced. It can only be allowed."

**Primitives:** Pathway line (ghost + revealed), bifurcation point (dashed vertical)

**Existing reference:** `EmotionWaveSection.jsx` (451 lines) uses this exact pattern — two diverging waveforms from a branch point. Part 3 should be a SIMPLIFIED, focused version. Key differences from EmotionWaveSection:
- No moment cards — just the paths and labels
- Simpler waveforms (fewer path points)
- Labels: "ACTIVATION", "RESTORATION" (path A), "CYCLE STAYS OPEN" (path B)
- Replay button when animation completes
- IntersectionObserver trigger (threshold 0.35)

**ViewBox:** `0 0 800 280` (Wide, matching Part 1 height)

**Files:**
- Create: `src/components/framework-diagrams/F1HingeDiagram.jsx` ('use client')
- Modify: `src/components/framework-diagrams/index.js` (add export)
- Modify: `app/framework/f1-emotional-gradient/page.js` (add dynamic import, add toggle in Part 3 section after `<h2 id="heading-the-hinge">`, around line 551)

**Integration:** `dynamic(() => import(...), { ssr: false })` — lazy-loaded, client-only.

**Animation specs:**
- Duration: 6–8 seconds (narrative)
- Easing: linear for path reveal
- Reduced motion: show final state immediately
- Viewport-gated: IntersectionObserver, threshold 0.35, disconnect after first trigger
- Replay button with `aria-label="Replay animation"`

**Commit:** "Add F1 Hinge diagram: animated bifurcation (restoration vs. open cycle)"

---

## Task 3: Part 4 — The Cognitive Upgrade (Interactive)

**Brief:** The full four-mode gradient with fluid vs. stuck toggle. Shows the architectural break: Connection and Protection (body-first) vs. Control and Domination (cognition-first).

**Type:** Interactive (draggable gradient bar with fluid/stuck toggle)

**What it must convey:**
1. Four modes on a continuous gradient: Connection → Protection → Control → Domination
2. The architectural break between body-first (A, B) and cognition-first (C, D)
3. Body-first modes "happen to you" — cognition-first modes are "what cognition does"
4. Fluid: all modes available, time-limited, returnable
5. Stuck: needle locked, mode becomes chronic

**Primitives:** Gradient bar (PatternGradientBar pattern), compass needle

**Existing reference:** `FluidCompassExplorer.jsx` (621 lines) — this is already very close to what's needed. Part 4 should be a SIMPLIFIED, focused version:
- Gradient bar with 4 mode zones
- Draggable thumb/needle
- Fluid/stuck toggle
- For each mode: name, pattern label (A/B/C/D), type (body-first/cognition-first)
- A clear visual divider between body-first (A, B) and cognition-first (C, D)
- No capacity dimension details (that's Part 5)

**ViewBox:** N/A — HTML-based interactive component (like FluidCompassExplorer)

**Files:**
- Create: `src/components/framework-diagrams/F1CognitiveUpgradeDiagram.jsx` ('use client')
- Modify: `src/components/framework-diagrams/index.js` (add export)
- Modify: `app/framework/f1-emotional-gradient/page.js` (add dynamic import, add toggle in Part 4 section after `<h2 id="heading-cognitive-upgrade">`, around line 736)

**Integration:** `dynamic(() => import(...), { ssr: false })`

**Accessibility:**
- Keyboard navigation: Arrow keys for position
- `role="slider"`, `aria-valuenow`, `aria-valuetext`
- `aria-label` on toggle and interactive elements

**Commit:** "Add F1 Cognitive Upgrade diagram: interactive four-mode gradient"

---

## Task 4: Part 5 — The Architecture (Static SVG)

**Brief:** The gradient bar with six capacity dimensions (Perception, Empathy, Cognition, Time horizon, Learning, Repair) that narrow/change per mode. Shows that state determines capacity.

**Type:** Static SVG

**What it must convey:**
1. The four modes as positions on the gradient (Connection → Domination)
2. Six capacity dimensions that change with each mode
3. Key insight: "What a person can perceive, think, feel, and do depends on their current regulatory state"
4. Capacities progressively narrow from Connection (broad/full/flexible) to Domination (binary/near-zero/unavailable)

**Content (from the F1 page table):**

| Dimension | Pattern A | Pattern B | Pattern C | Pattern D |
|-----------|-----------|-----------|-----------|-----------|
| Perception | Broad | Narrows to threat | Strategic variables | Binary |
| Empathy | Full | Filtered to survival data | Deprioritized | Near-zero |
| Cognition | Flexible | Simplified | Focused but rigid | Elimination only |
| Time horizon | Extended | Immediate | Instrumental | This moment only |
| Learning | Possible | Shut down | Strategic only | Unavailable |
| Repair | Available | Difficult | Deprioritized | Not available |

**Visual concept:**
- Four columns (one per mode) across the top, with gradient colors
- Six rows (one per dimension) below
- Each cell shows a horizontal bar whose width represents capacity level (full → narrow → minimal → near-zero)
- Text labels inside or beside each bar
- Clear visual progression from left (open, broad) to right (narrow, closed)

**ViewBox:** `0 0 800 360` (taller — needs room for 6 dimensions)

**Primitives:** Gradient bar, capacity dimension bar (new primitive from protocol)

**Files:**
- Create: `src/components/framework-diagrams/F1ArchitectureDiagram.jsx` (server component)
- Modify: `src/components/framework-diagrams/index.js` (add export)
- Modify: `app/framework/f1-emotional-gradient/page.js` (add import, add toggle in Part 5 section after `<h2 id="heading-the-architecture">`, around line 863)

**Commit:** "Add F1 Architecture diagram: state determines capacity across six dimensions"

---

## Task 5: Part 6 — The Full Arc (Static SVG)

**Brief:** The seven-step linear arc from Perception to Escalation or Repair, with Biological Restoration as the hinge at step 4 — three steps on each side.

**Type:** Static SVG

**What it must convey:**
1. Seven steps as a linear progression
2. Biological Restoration is step 4 — the exact center, the hinge
3. Steps 1–3 (before the hinge) are the body's designed process
4. Steps 5–7 (after the hinge) depend on whether restoration completed
5. The frameworks split at this point: F1–F2 describe the design, F3–F7 describe what happens without restoration, F8–F12 describe how to rebuild

**The seven steps:**
1. Perception
2. Emotion
3. Action
4. **Biological Restoration** (hinge)
5. Behavior
6. Social Structure
7. Escalation or Repair

**Visual concept:**
- Seven nodes connected by lines in a horizontal sequence
- Step 4 (Biological Restoration) visually distinct — larger node, different color (azure/white), vertical divider line
- Steps 1–3 colored with sky/azure (the designed process)
- Steps 5–7 colored with blue/indigo (what follows)
- Framework references below each step (F1, F1, F1-F2, F1-F2-F3, F3, F4-F5-F6, F7-F8-F12)
- Annotation: "the body's designed process" over steps 1–3, "depends on whether restoration completed" over steps 5–7

**ViewBox:** `0 0 800 220`

**Primitives:** Stage sequence (numbered nodes connected by lines)

**Files:**
- Create: `src/components/framework-diagrams/F1FullArcDiagram.jsx` (server component)
- Modify: `src/components/framework-diagrams/index.js` (add export)
- Modify: `app/framework/f1-emotional-gradient/page.js` (add import, add toggle in Part 6 section after `<h2 id="heading-the-full-arc">`, around line 976)

**Commit:** "Add F1 Full Arc diagram: seven-step arc with Biological Restoration as hinge"

---

## Task 6: Update barrel export and final integration check

**Files:**
- Verify: `src/components/framework-diagrams/index.js` has all 6 exports
- Run: `npm run build` — verify build passes
- Run protocol checklist for each new diagram (visual, performance, accessibility, integration)

**Commit:** "Complete F1 diagram suite: all 6 parts integrated"

---

## Summary

| Task | Part | Type | Component | Size Budget |
|------|------|------|-----------|-------------|
| 1 | Part 2: The Instrument | Animated | F1InstrumentDiagram | < 20KB |
| 2 | Part 3: The Hinge | Animated | F1HingeDiagram | < 20KB |
| 3 | Part 4: Cognitive Upgrade | Interactive | F1CognitiveUpgradeDiagram | < 25KB |
| 4 | Part 5: The Architecture | Static SVG | F1ArchitectureDiagram | < 5KB |
| 5 | Part 6: The Full Arc | Static SVG | F1FullArcDiagram | < 5KB |
| 6 | Final check | — | — | — |

**Execution order:** Tasks 4 and 5 (static SVGs) can be done in parallel. Tasks 1, 2, 3 are sequential (increasing complexity). Task 6 is last.

**Recommended order:** 5 → 4 → 1 → 2 → 3 → 6 (simplest first, build confidence)
