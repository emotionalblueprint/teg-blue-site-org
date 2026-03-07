# F1 Part 1: The Signal Diagram — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the static SVG diagram for F1 Part 1 "The Signal" section and integrate it into the F1 page with toggle-to-reveal layout.

**Architecture:** A new React component (`F1SignalDiagram`) renders a static inline SVG. A `DiagramToggle` wrapper handles the show/hide toggle and two-column layout. Both use tokens.js exclusively for styling. The SVG is server-rendered (no `'use client'`, no JS overhead).

**Tech Stack:** React (server component), inline SVG, tokens.js design tokens, Next.js App Router

---

### Task 1: Create the F1SignalDiagram SVG component

**Files:**
- Create: `src/components/framework-diagrams/F1SignalDiagram.jsx`

**Step 1: Create the component directory**

Run: `mkdir -p /Users/annaparetas/Projects/teg-blue-site-org/src/components/framework-diagrams`

**Step 2: Write the SVG component**

Create `src/components/framework-diagrams/F1SignalDiagram.jsx` with the complete static SVG:

```jsx
import { SPECTRUM, TEXT, FONT, hexToRgba } from "@/src/styles/tokens";

// ─── SVG Constants ──────────────────────────────────────
const VW = 800, VH = 200;
const PL = 40, PT = 16, PR = 40, PB = 40;
const PW = VW - PL - PR;  // 720
const PH = VH - PT - PB;  // 144

// Body evaluation line Y position (upper third)
const BODY_Y = PT + PH * 0.18;
// Cognition line Y position (lower third)
const COG_Y = PT + PH * 0.82;
// Signal node Y position (middle)
const SIGNAL_Y = PT + PH * 0.52;

// Sensing node positions (left two-thirds of body line)
const NODES = [
  { x: PL + PW * 0.10, label: "gut" },
  { x: PL + PW * 0.25, label: "heart" },
  { x: PL + PW * 0.40, label: "vagus" },
  { x: PL + PW * 0.55, label: "amygdala" },
];

// Evaluation/signal point (~65%)
const EVAL_X = PL + PW * 0.65;
// Cognition line starts (~72%)
const COG_START = PL + PW * 0.72;

// SVG font fallback (can't resolve CSS variables in SVG text)
const MONO = "'JetBrains Mono', 'SF Mono', 'Consolas', monospace";

export default function F1SignalDiagram() {
  return (
    <svg
      role="img"
      aria-labelledby="signal-title signal-desc"
      viewBox={`0 0 ${VW} ${VH}`}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="signal-title">How the body evaluates and signals</title>
      <desc id="signal-desc">
        A flow diagram showing the body's continuous evaluation process.
        The nervous system (gut, heart, vagus nerve, amygdala) evaluates
        safety and produces an emotional signal before cognition arrives.
      </desc>

      {/* ─── Body Evaluation Line (continuous, full-width) ─── */}
      <line
        x1={PL} y1={BODY_Y}
        x2={PL + PW} y2={BODY_Y}
        stroke={SPECTRUM.azure}
        strokeWidth="2"
        strokeOpacity="0.8"
      />

      {/* ─── "BODY'S EVALUATION" label ─── */}
      <text
        x={PL}
        y={BODY_Y - 10}
        style={{
          fontFamily: MONO,
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          fill: SPECTRUM.azure,
        }}
      >
        {"BODY\u2019S EVALUATION"}
      </text>

      {/* ─── "continuous · below awareness" annotation ─── */}
      <text
        x={PL + PW}
        y={BODY_Y - 10}
        textAnchor="end"
        style={{
          fontFamily: MONO,
          fontSize: "7.5px",
          fontWeight: 400,
          letterSpacing: "0.12em",
          fill: TEXT.hint,
        }}
      >
        continuous · below awareness
      </text>

      {/* ─── Sensing Nodes ─── */}
      {NODES.map(({ x, label }) => (
        <g key={label}>
          <circle
            cx={x} cy={BODY_Y}
            r="3"
            fill={hexToRgba(SPECTRUM.azure, 0.25)}
          />
          <text
            x={x} y={BODY_Y + 16}
            textAnchor="middle"
            style={{
              fontFamily: MONO,
              fontSize: "7.5px",
              fontWeight: 400,
              letterSpacing: "0.12em",
              fill: TEXT.hint,
            }}
          >
            {label}
          </text>
        </g>
      ))}

      {/* ─── Evaluation vertical connector ─── */}
      <line
        x1={EVAL_X} y1={BODY_Y}
        x2={EVAL_X} y2={SIGNAL_Y - 14}
        stroke={SPECTRUM.cobalt}
        strokeWidth="1.5"
      />

      {/* ─── "safe enough?" label ─── */}
      <text
        x={EVAL_X + 10}
        y={BODY_Y + (SIGNAL_Y - BODY_Y) * 0.3}
        style={{
          fontFamily: MONO,
          fontSize: "8.5px",
          fontWeight: 400,
          letterSpacing: "0.12em",
          fill: TEXT.muted,
          fontStyle: "italic",
        }}
      >
        safe enough?
      </text>

      {/* ─── Signal Node ─── */}
      <circle
        cx={EVAL_X} cy={SIGNAL_Y}
        r="6"
        fill={hexToRgba(SPECTRUM.cobalt, 0.15)}
        stroke={SPECTRUM.cobalt}
        strokeWidth="1.5"
      />
      <circle
        cx={EVAL_X} cy={SIGNAL_Y}
        r="2.5"
        fill={hexToRgba(SPECTRUM.cobalt, 0.5)}
      />

      {/* ─── "SIGNAL" label ─── */}
      <text
        x={EVAL_X + 14}
        y={SIGNAL_Y - 4}
        style={{
          fontFamily: MONO,
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          fill: SPECTRUM.cobalt,
        }}
      >
        SIGNAL
      </text>

      {/* ─── "(emotion)" label ─── */}
      <text
        x={EVAL_X + 14}
        y={SIGNAL_Y + 10}
        style={{
          fontFamily: MONO,
          fontSize: "8.5px",
          fontWeight: 400,
          letterSpacing: "0.12em",
          fill: TEXT.muted,
        }}
      >
        emotion
      </text>

      {/* ─── Signal to Cognition connector ─── */}
      <line
        x1={EVAL_X} y1={SIGNAL_Y + 14}
        x2={EVAL_X} y2={COG_Y}
        stroke={hexToRgba(SPECTRUM.cobalt, 0.3)}
        strokeWidth="1"
        strokeDasharray="3,4"
      />

      {/* ─── Cognition Line (dashed, starts late) ─── */}
      <line
        x1={COG_START} y1={COG_Y}
        x2={PL + PW} y2={COG_Y}
        stroke={TEXT.hint}
        strokeWidth="1"
        strokeOpacity="0.5"
        strokeDasharray="4,6"
      />

      {/* ─── "COGNITION" label ─── */}
      <text
        x={COG_START}
        y={COG_Y - 10}
        style={{
          fontFamily: MONO,
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          fill: TEXT.hint,
        }}
      >
        COGNITION
      </text>

      {/* ─── "arrives second" annotation ─── */}
      <text
        x={PL + PW}
        y={COG_Y - 10}
        textAnchor="end"
        style={{
          fontFamily: MONO,
          fontSize: "7.5px",
          fontWeight: 400,
          letterSpacing: "0.12em",
          fill: TEXT.hint,
        }}
      >
        arrives second
      </text>
    </svg>
  );
}
```

**Step 3: Verify the file was created correctly**

Run: `wc -c /Users/annaparetas/Projects/teg-blue-site-org/src/components/framework-diagrams/F1SignalDiagram.jsx`
Expected: under 5000 bytes

**Step 4: Commit**

```bash
git add src/components/framework-diagrams/F1SignalDiagram.jsx
git commit -m "Add F1 Signal diagram SVG component

Static SVG two-track flow: body evaluation (continuous, azure)
producing emotional signal before cognition (dashed, arrives second).
Follows Visual Graphics Protocol."
```

---

### Task 2: Create the DiagramToggle wrapper component

**Files:**
- Create: `src/components/framework-diagrams/DiagramToggle.jsx`

This component handles the toggle-to-reveal pattern defined in the protocol. It will be reused by all 6 F1 diagrams and future framework diagrams.

**Step 1: Write the DiagramToggle component**

Create `src/components/framework-diagrams/DiagramToggle.jsx`:

```jsx
'use client';

import { useState } from "react";
import { BG, TEXT, BORDER, FONT, hexToRgba, SPECTRUM } from "@/src/styles/tokens";

export default function DiagramToggle({ children, label = "diagram" }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: 16 }}>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? `Hide ${label}` : `Show ${label}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 14px",
          background: "transparent",
          border: `1px solid ${BORDER.default}`,
          borderRadius: 6,
          color: TEXT.muted,
          fontFamily: FONT.mono,
          fontSize: "9px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "border-color 0.2s ease, color 0.2s ease",
        }}
      >
        <svg
          width="8" height="8" viewBox="0 0 8 8"
          style={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path d="M2 1l4 3-4 3" stroke={TEXT.muted} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
        {open ? "Hide diagram" : "Show diagram"}
      </button>

      {/* Diagram container */}
      {open && (
        <div
          style={{
            marginTop: 16,
            padding: 16,
            background: BG.card,
            borderRadius: 8,
            border: `1px solid ${BORDER.default}`,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/framework-diagrams/DiagramToggle.jsx
git commit -m "Add DiagramToggle wrapper for framework diagrams

Reusable toggle-to-reveal component with show/hide button.
Client component (uses useState). aria-expanded for accessibility."
```

---

### Task 3: Create the barrel export for framework-diagrams

**Files:**
- Create: `src/components/framework-diagrams/index.js`

**Step 1: Write the barrel export**

```js
export { default as F1SignalDiagram } from "./F1SignalDiagram";
export { default as DiagramToggle } from "./DiagramToggle";
```

**Step 2: Commit**

```bash
git add src/components/framework-diagrams/index.js
git commit -m "Add barrel export for framework-diagrams"
```

---

### Task 4: Integrate diagram into F1 page

**Files:**
- Modify: `app/framework/f1-emotional-gradient/page.js` (lines 253-258, the Part 1 section start)

**Step 1: Add import at top of page**

After the existing imports (around line 11), add:

```jsx
import { F1SignalDiagram, DiagramToggle } from "@/src/components/framework-diagrams";
```

**Step 2: Add diagram toggle inside Part 1 section**

Find the Part 1 section start (the `<section id="the-signal">` around line 253). Insert the diagram toggle immediately after the `<h2>` heading (after line 260):

```jsx
<DiagramToggle label="signal flow diagram">
  <F1SignalDiagram />
</DiagramToggle>
```

The existing text content remains exactly as-is below the toggle.

**Step 3: Start dev server and verify**

Run: `cd /Users/annaparetas/Projects/teg-blue-site-org && npm run dev`

Navigate to `http://localhost:3001/framework/f1-emotional-gradient#the-signal`

Verify:
- Toggle button appears below the section heading
- Clicking shows the diagram in a card container
- SVG renders correctly with all elements
- Text content below is unchanged
- No layout shift when toggling
- Toggle text switches between "Show diagram" / "Hide diagram"

**Step 4: Commit**

```bash
git add app/framework/f1-emotional-gradient/page.js
git commit -m "Integrate F1 Signal diagram into framework page

Toggle-to-reveal in Part 1: The Signal section.
Static SVG, server-rendered, zero JS overhead for the diagram itself."
```

---

### Task 5: Run protocol checklist

**Step 1: Verify Visual checklist**

- [ ] Token colors only: check SPECTRUM.azure, SPECTRUM.cobalt, TEXT.hint, TEXT.muted — no hardcoded colors
- [ ] Stroke widths: 2px (body line = Primary), 1.5px (eval connector = Primary), 1px (cognition line = Fine)
- [ ] Opacity tiers: 0.8 (body line = Solid), 0.25 (nodes = Visible), 0.5 (signal node, cognition = Strong), 0.15 (signal outer = Subtle)
- [ ] Typography: all FONT.mono, sizes 7.5px (Micro), 8.5px (Label), 10px (Tag)
- [ ] ViewBox: 800x200 (Wide standard)

**Step 2: Verify Performance checklist**

Run: `wc -c /Users/annaparetas/Projects/teg-blue-site-org/src/components/framework-diagrams/F1SignalDiagram.jsx`
Expected: < 5KB

Count SVG elements in the component (should be < 50).
Count path points (should be < 200 — this diagram uses lines and circles, so essentially 0 complex paths).

**Step 3: Verify Accessibility checklist**

- [ ] `<title>` and `<desc>` present
- [ ] `role="img"` and `aria-labelledby` present
- [ ] No color-only information (all elements have text labels + position)

**Step 4: Verify Integration checklist**

- [ ] Toggle button works
- [ ] No layout shift
- [ ] Text content unchanged and crawlable
- [ ] Static SVG renders inline (view page source to confirm)

**Step 5: Final commit if any fixes were needed**

```bash
git add -u
git commit -m "Fix protocol compliance issues in F1 Signal diagram"
```
