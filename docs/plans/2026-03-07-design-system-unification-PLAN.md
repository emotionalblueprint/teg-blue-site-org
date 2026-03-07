# Design System Unification — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Align all .org site colors to the EmotionWaveSection's Tailwind Slate palette by updating tokens and refactoring 14 files to use them exclusively.

**Architecture:** Update `globals.css` (CSS custom properties) and `tokens.js` (JS token objects) first, then refactor components phase-by-phase to import from tokens instead of hardcoding. No new components or files — purely value changes and import fixes.

**Tech Stack:** Next.js 14, inline styles via `tokens.js`, CSS custom properties in `globals.css`

**Design doc:** `docs/plans/2026-03-07-design-system-unification.md`

---

## Task 1: Update CSS Custom Properties in globals.css

**Files:**
- Modify: `app/globals.css:1-34` (`:root` block)

**Step 1: Update dark mode background values**

Replace the `:root` custom properties block with:

```css
:root {
  /* Blue Spectrum */
  --spectrum-sky:    #7ABAEB;
  --spectrum-azure:  #4A9BE8;
  --spectrum-blue:   #3B7DE5;
  --spectrum-cobalt: #3560CC;
  --spectrum-indigo: #4A50B0;
  --spectrum-slate:  #6B7A99;

  /* Backgrounds — Tailwind Slate scale */
  --bg-page:    #0f172a;
  --bg-primary: #111827;
  --bg-card:    #1e293b;
  --bg-surface: #334155;
  --bg-inset:   #0b1120;

  /* Text */
  --text-primary:   #f1f5f9;
  --text-secondary: #cbd5e1;
  --text-muted:     #94a3b8;
  --text-hint:      #64748b;
  --text-micro:     #475569;

  /* Borders */
  --border-default: rgba(148, 163, 184, 0.12);
  --border-hover:   rgba(148, 163, 184, 0.20);
  --border-active:  rgba(148, 163, 184, 0.30);

  /* Fonts — loaded via next/font in layout.js */
  --font-display: var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: var(--font-jetbrains), 'SF Mono', 'Consolas', monospace;
}
```

**Step 2: Verify the body baseline font size matches**

Check that `globals.css` body rule keeps `line-height: 1.7` (the token TYPE_SCALE controls component-level sizes, not the CSS baseline).

**Step 3: Save and verify dev server shows no errors**

Run: `cd /Users/annaparetas/Projects/teg-blue-site-org && npm run dev -- -p 3001`

Open http://localhost:3001 — expect to see slightly warmer backgrounds across the site. The EmotionWaveSection won't change yet (it hardcodes its own values).

**Step 4: Commit**

```bash
git add app/globals.css
git commit -m "design-system: update dark mode tokens to Tailwind Slate scale

Aligns --bg-page, --bg-card, --bg-surface, --text-hint, --text-micro
to the values used by the EmotionWaveSection. Warmer, more atmospheric.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 2: Update tokens.js — TYPE_SCALE + New Token Groups

**Files:**
- Modify: `src/styles/tokens.js:87-96` (TYPE_SCALE)
- Modify: `src/styles/tokens.js:141-170` (add new exports after PATTERN section)

**Step 1: Update TYPE_SCALE body and summary sizes**

In `tokens.js`, change:
```javascript
body:    { size: 14, weight: 400, tracking: "normal",  lineHeight: 1.7 },
summary: { size: 14, weight: 400, tracking: "normal",  lineHeight: 1.7 },
```
to:
```javascript
body:    { size: 15, weight: 400, tracking: "normal",  lineHeight: 1.75 },
summary: { size: 13, weight: 400, tracking: "normal",  lineHeight: 1.72 },
```

**Step 2: Add new TYPE_SCALE entries**

After the existing `connectionType` entry, add:
```javascript
tagMicro:    { size: 8,   weight: 600, tracking: "0.16em", lineHeight: 1.3, font: "mono" },
chartLabel:  { size: 7.5, weight: 400, tracking: "0.12em", lineHeight: 1.3, font: "mono" },
micro:       { size: 8.5, weight: 400, tracking: "0.12em", lineHeight: 1.3, font: "mono" },
```

**Step 3: Add AWARENESS, STATUS, and MODE_ORANGE tokens**

After the `RESEARCHER` export block (around line 156), add:

```javascript
// ─── THREE AWARENESS CAPACITIES (cross-site canonical — matches .com) ───

export const AWARENESS = {
  RE:  '#a080ff',   // violet — Reading Emotions
  ER:  '#22d3ee',   // cyan — Emotional Resonance
  SEA: '#a0e85a',   // green — Self-Emotional Awareness
};

// ─── STATUS COLORS ──────────────────────────────────────

export const STATUS = {
  draft:    '#f59e0b',      // amber
  published: SPECTRUM.blue,
  reviewed: '#10b981',      // emerald
};

// ─── MODE ACCENT COLORS (surgical signal colors — matches .com) ──

export const MODE_ORANGE = '#f97316'; // unprocessed / protection / SEA offline
export const MODE_PINK   = '#ec4899'; // domination / chronic RE / precision without feedback
```

**Step 4: Commit**

```bash
git add src/styles/tokens.js
git commit -m "design-system: add AWARENESS, STATUS, MODE_ORANGE, MODE_PINK tokens + update TYPE_SCALE

Body text: 14px→15px, summary: 14px→13px. Three new micro scales
for chart/diagram labels. Cross-site canonical awareness capacity
colors (RE violet, ER cyan, SEA green). Signal accent colors
(orange, pink) for surgical semantic use.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 3: Refactor EmotionWaveSection.jsx

**Files:**
- Modify: `src/components/EmotionWaveSection.jsx:1-20` (imports + local constants)
- Modify: throughout file (replace hardcoded values with token references)

**Step 1: Replace local constants with token imports**

Remove lines 6–15 (the 9 local constant definitions: `BG_PAGE`, `BG_CARD`, `BG_SURFACE`, etc.) and lines 18–19 (`MAIN_BLUE`, `ORANGE`).

Replace the existing import of `Link` with:

```javascript
'use client';

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPACING,
  RESEARCHER, PATTERN, MODE_ORANGE, hexToRgba, gradientCardBg,
} from "@/src/styles/tokens";
```

**Step 2: Create mapping constants from tokens**

After the imports, add:

```javascript
// ─── Map token values to the names used throughout this component ──
const MAIN_BLUE = PATTERN.B.primary;   // #3b82f6
const ORANGE = MODE_ORANGE;            // #f97316
const ACCENT = RESEARCHER.accent;      // #2563eb
```

**Step 3: Replace all hardcoded background/text/border references**

Throughout the component, replace:
- `BG_PAGE` → `BG.page`
- `BG_CARD` → `BG.card`
- `BG_SURFACE` → `BG.surface`
- `TEXT_PRIMARY` → `TEXT.primary`
- `TEXT_SECONDARY` → `TEXT.secondary`
- `TEXT_MUTED` → `TEXT.muted`
- `TEXT_HINT` → `TEXT.hint`
- `BORDER_DEFAULT` → `BORDER.default`

**Step 4: Replace hardcoded rgba() values with hexToRgba()**

Search for all `rgba(37,99,235,` (the ACCENT rgb values) and replace with `hexToRgba(ACCENT, ...)`:
- `rgba(37,99,235,0.04)` → `hexToRgba(ACCENT, 0.04)`
- `rgba(37,99,235,0.06)` → `hexToRgba(ACCENT, 0.06)`
- `rgba(37,99,235,0.08)` → `hexToRgba(ACCENT, 0.08)`
- `rgba(37,99,235,0.12)` → `hexToRgba(ACCENT, 0.12)`
- `rgba(37,99,235,0.15)` → `hexToRgba(ACCENT, 0.15)`
- `rgba(37,99,235,0.25)` → `hexToRgba(ACCENT, 0.25)`
- `rgba(37,99,235,0.3)` → `hexToRgba(ACCENT, 0.3)`

Also replace:
- `rgba(59,130,246,0.25)` → `hexToRgba(MAIN_BLUE, 0.25)`
- `rgba(148,163,184,0.1)` → `hexToRgba('#94a3b8', 0.1)`

**Step 5: Replace hardcoded font-family strings**

Replace all instances of `"'JetBrains Mono', 'SF Mono', 'Consolas', monospace"` with `FONT.mono`.
Replace `"JetBrains Mono, monospace"` (in SVG text styles) with the same string — but note: SVG `style` objects may need the full string since they don't resolve CSS variables. Keep the hardcoded font string in SVG `<text>` elements only if they don't support CSS variable resolution.

**Step 6: Verify visually**

Open http://localhost:3001 — the EmotionWaveSection should look identical. The component now uses CSS variable-based tokens which will respond to the theme toggle.

**Step 7: Commit**

```bash
git add src/components/EmotionWaveSection.jsx
git commit -m "refactor: EmotionWaveSection uses tokens instead of hardcoded colors

Removes 9 local color constants and 25+ hardcoded rgba() values.
Now imports from tokens.js and responds to theme toggle.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 4: Refactor FluidCompassExplorer.jsx (M1 Diagram)

**Files:**
- Modify: `src/components/FluidCompassExplorer.jsx:1-20` (imports + local constants)
- Modify: throughout file

**Step 1: Replace local BLUE/ORANGE constants with token imports**

Remove the local `BLUE` object and `ORANGE` constant (lines 13–19). Update imports:

```javascript
import {
  BG, TEXT, BORDER, FONT, SPACING,
  PATTERN, PATTERN_GRADIENT, MODE_ORANGE, hexToRgba,
} from "@/src/styles/tokens";
```

After imports, create the mapping:

```javascript
const BLUE = {
  A: PATTERN.A.primary,   // #60a5fa
  B: PATTERN.B.primary,   // #3b82f6
  C: PATTERN.C.primary,   // #2563eb
  D: PATTERN.D.primary,   // #1d4ed8
};
const ORANGE = MODE_ORANGE;
```

**Step 2: Replace the hardcoded BAR_GRADIENT**

Replace the local `BAR_GRADIENT` string with `PATTERN_GRADIENT` from tokens (or rebuild it from PATTERN values if the segment stops differ).

If the gradient needs the specific stepped segments, build it from tokens:
```javascript
const BAR_GRADIENT = `linear-gradient(90deg, ${BLUE.A} 0%, ${BLUE.A} 20%, ${BLUE.B} 35%, ${BLUE.B} 45%, ${BLUE.C} 55%, ${BLUE.C} 70%, ${BLUE.D} 85%, ${BLUE.D} 100%)`;
```

**Step 3: Replace all hardcoded rgba() values**

Replace `rgba(0,0,0,0.6)` → `hexToRgba('#000000', 0.6)`
Replace `rgba(232,122,74,...)` (orange) → `hexToRgba(ORANGE, ...)`

Use `hexToRgba()` for all remaining inline rgba values that reference the BLUE or ACCENT colors.

**Step 4: Verify visually**

Open http://localhost:3001/model/m1-inner-compass — the compass explorer should look identical.

**Step 5: Commit**

```bash
git add src/components/FluidCompassExplorer.jsx
git commit -m "refactor: FluidCompassExplorer uses PATTERN tokens instead of hardcoded colors

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 5: Refactor OpenCycleExplorer.jsx (M3 Diagram)

**Files:**
- Modify: `src/components/OpenCycleExplorer.jsx`

Same pattern as Task 4. This component has the same local BLUE/ORANGE structure.

**Step 1:** Replace local BLUE/ORANGE with PATTERN/MODE_ORANGE imports
**Step 2:** Replace hardcoded rgba() values with hexToRgba()
**Step 3:** Verify at http://localhost:3001/model/m3-the-open-cycle
**Step 4:** Commit

```bash
git add src/components/OpenCycleExplorer.jsx
git commit -m "refactor: OpenCycleExplorer uses PATTERN tokens instead of hardcoded colors

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 6: Refactor PatternGradientBar.jsx

**Files:**
- Modify: `src/components/PatternGradientBar.jsx:6-14` (local MODES + BAR_GRADIENT)

**Step 1: Replace local constants with token imports**

Remove the local `MODES` array and `BAR_GRADIENT` constant. Import:

```javascript
import { PATTERN, PATTERN_GRADIENT, hexToRgba } from "@/src/styles/tokens";
```

Build MODES from PATTERN:
```javascript
const MODES = [
  { key: 'A', label: 'Connection', color: PATTERN.A.primary },
  { key: 'B', label: 'Protection', color: PATTERN.B.primary },
  { key: 'C', label: 'Control',    color: PATTERN.C.primary },
  { key: 'D', label: 'Domination', color: PATTERN.D.primary },
];
```

Use `PATTERN_GRADIENT` for the bar gradient.

**Step 2:** Replace any remaining hardcoded rgba() values
**Step 3:** Verify visually on any page that uses PatternGradientBar
**Step 4:** Commit

```bash
git add src/components/PatternGradientBar.jsx
git commit -m "refactor: PatternGradientBar uses PATTERN tokens

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 7: Refactor M2 Three Awareness Capacities Page

**Files:**
- Modify: `app/model/m2-three-awareness-capacities/page.js:16-20` (local capacity colors)

**Step 1: Replace local color constants with AWARENESS token import**

Remove:
```javascript
const RE_COLOR = '#a080ff';
const ER_COLOR = '#22d3ee';
const SEA_COLOR = '#a0e85a';
const RE_CHRONIC = '#ec4899';
```

Add `AWARENESS` and `MODE_PINK` to the existing import from tokens:
```javascript
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RESEARCHER, PATTERN_GRADIENT, RADIUS, gradientCardBg, AWARENESS, MODE_PINK } from "@/src/styles/tokens";
```

After imports, create the mapping:
```javascript
const RE_COLOR = AWARENESS.RE;
const ER_COLOR = AWARENESS.ER;
const SEA_COLOR = AWARENESS.SEA;
const RE_CHRONIC = MODE_PINK;  // pink — domination / precision without feedback
```

**Step 2:** Verify at http://localhost:3001/model/m2-three-awareness-capacities
**Step 3:** Commit

```bash
git add app/model/m2-three-awareness-capacities/page.js
git commit -m "refactor: M2 page uses AWARENESS tokens for capacity colors

Cross-site canonical: RE violet, ER cyan, SEA green (matches .com).

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 8: Refactor Gradient Components (ResearcherHero, MechanismBox, PropositionBox)

**Files:**
- Modify: `src/components/ResearcherHero.jsx:28` (hardcoded gradient)
- Modify: `src/components/MechanismBox.jsx:15-16` (hardcoded gradient + border)
- Modify: `src/components/PropositionBox.jsx:17-18` (hardcoded gradient + border)

**Step 1: Fix ResearcherHero.jsx**

Replace the hardcoded background gradient (line 28):
```javascript
background: "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0.02) 60%, transparent 100%)",
```
with:
```javascript
background: `linear-gradient(135deg, ${hexToRgba(RESEARCHER.accent, 0.06)} 0%, ${hexToRgba(RESEARCHER.accent, 0.02)} 60%, transparent 100%)`,
```

Ensure `hexToRgba` and `RESEARCHER` are in the import list (they likely already are).

**Step 2: Fix MechanismBox.jsx**

Replace hardcoded gradient and border:
```javascript
background: gradientCardBg(RESEARCHER.accent),
border: `1px solid ${hexToRgba(RESEARCHER.accent, 0.2)}`,
```

Ensure `gradientCardBg` is imported from tokens.

**Step 3: Fix PropositionBox.jsx**

Replace the hardcoded 3-color gradient:
```javascript
background: `linear-gradient(135deg, ${hexToRgba(PATTERN.A.primary, 0.1)}, ${hexToRgba(RESEARCHER.accent, 0.08)}, ${hexToRgba(PATTERN.D.primary, 0.06)})`,
border: `1px solid ${hexToRgba(RESEARCHER.accent, 0.25)}`,
```

Ensure `PATTERN` is imported from tokens.

**Step 4:** Verify visually — check `/research-entry` which uses all three
**Step 5:** Commit

```bash
git add src/components/ResearcherHero.jsx src/components/MechanismBox.jsx src/components/PropositionBox.jsx
git commit -m "refactor: gradient components use token-based colors

ResearcherHero, MechanismBox, PropositionBox now use hexToRgba()
with RESEARCHER.accent instead of hardcoded rgba values.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 9: Refactor StatusBadge.jsx

**Files:**
- Modify: `src/components/StatusBadge.jsx:23,26,90`

**Step 1: Import STATUS from tokens**

Add `STATUS` to the import from tokens.js.

**Step 2: Replace hardcoded status colors**

- `"#f59e0b"` → `STATUS.draft`
- `"#10b981"` → `STATUS.reviewed`
- `"rgba(255,255,255,0.7)"` → `hexToRgba('#ffffff', 0.7)` (or use `TEXT.primary` if semantically appropriate)

**Step 3:** Verify visually on any page with status badges
**Step 4:** Commit

```bash
git add src/components/StatusBadge.jsx
git commit -m "refactor: StatusBadge uses STATUS tokens

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 10: Minor Cleanup (SiteHeader, GlossaryInline, PublicationPage)

**Files:**
- Modify: `src/components/SiteHeader.jsx:198` (one `#000`)
- Modify: `src/components/GlossaryInline.jsx:63` (one `rgba(0,0,0,0.3)`)
- Modify: `src/templates/PublicationPage.jsx:87` (one `#4A9BE8`)

**Step 1: SiteHeader**

Replace `hexToRgba("#000", 0.25)` → `hexToRgba('#000000', 0.25)` (or define a shadow token — but for one usage, keeping the `hexToRgba` call is fine, just use the full hex).

**Step 2: GlossaryInline**

Replace `rgba(0,0,0,0.3)` → `hexToRgba('#000000', 0.3)`

**Step 3: PublicationPage**

Replace `"#4A9BE8"` → `SPECTRUM.azure` (import from tokens if not already).

**Step 4:** Quick visual check on glossary page and any publication page
**Step 5:** Commit

```bash
git add src/components/SiteHeader.jsx src/components/GlossaryInline.jsx src/templates/PublicationPage.jsx
git commit -m "refactor: minor hardcoded color cleanup in SiteHeader, GlossaryInline, PublicationPage

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 11: Final Verification + Build Check

**Step 1: Run production build**

```bash
cd /Users/annaparetas/Projects/teg-blue-site-org && npm run build
```

Fix any build errors.

**Step 2: Grep for remaining hardcoded colors**

Search for any remaining hardcoded hex or rgba values in component files (excluding InterdependencyMatrix):

```bash
grep -rn '#[0-9a-fA-F]\{6\}\|rgba(' src/components/ --include='*.jsx' | grep -v InterdependencyMatrix | grep -v node_modules
```

Any results besides SVG fill/stroke values in the EmotionWaveSection's SVG elements should be addressed.

**Step 3: Visual QA**

Check these key pages:
- `/` (home page — EmotionWaveSection)
- `/model/m1-inner-compass` (FluidCompassExplorer)
- `/model/m2-three-awareness-capacities` (awareness colors)
- `/model/m3-the-open-cycle` (OpenCycleExplorer)
- `/research-entry` (ResearcherHero, PropositionBox, MechanismBox)
- `/glossary` (GlossaryInline)
- Toggle theme (light/dark) on each page

**Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "design-system: final cleanup after token unification

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```
