# Visual Graphics Protocol — teg-blue.org

**Date:** 2026-03-07
**Status:** Approved
**Scope:** All SVG diagrams, animated visuals, and interactive graphics on teg-blue.org
**Depends on:** Design System Unification (completed) — `tokens.js` + `globals.css`

---

## Purpose

This protocol governs how visual graphics are designed, built, and integrated across teg-blue.org. It ensures all diagrams — from the home page's "Emotions are data" animation to framework section graphics — feel like parts of one coherent visual system.

The existing visual components (EmotionWaveSection, FluidCompassExplorer, OpenCycleExplorer, PatternGradientBar) were built independently. They now share tokens for colors, but lack a unified visual design language. This protocol fills that gap.

---

## 1. Canvas Rules

### Standard SVG ViewBox Sizes

| Format | ViewBox | Aspect Ratio | Use |
|--------|---------|--------------|-----|
| **Wide** | `0 0 800 200` | 4:1 | Framework section graphics (two-column layout) |
| **Standard** | `0 0 400 300` | 4:3 | Square diagrams, compass-style visuals |
| **Compact** | `0 0 600 180` | 10:3 | Inline diagrams, gradient bars with labels |

### SVG Internal Padding

```
PL: 40   PT: 16   PR: 40   PB: 40
```

Bottom padding is larger to accommodate axis labels and micro-text.

### Container Rules

- Max width: matches `SPACING.containerMax` (820px) when full-width, or ~50% in two-column layout
- Responsive: viewBox scales naturally — never pixel-lock widths
- Mobile stacking: graphic goes above text, full container width
- Background: `transparent` or `BG.card` with border — never introduce new background colors

### Reference

The EmotionWaveSection uses `900 x 220` (PL:44, PT:20, PR:52, PB:52). New graphics should prefer the standardized dimensions above, but existing components are not required to migrate.

---

## 2. Stroke and Fill Vocabulary

### Stroke Widths (3 tiers)

| Tier | Width | Use |
|------|-------|-----|
| **Fine** | `1px` | Grid lines, reference lines, axis lines, dashed guides |
| **Primary** | `1.5–2px` | Pathway lines, connections, compass needle, main visual elements |
| **Emphasis** | `2.5–3px` | Active state borders, highlighted segments, focal elements |

### Fill Opacity Tiers

| Level | Opacity | Use |
|-------|---------|-----|
| **Tint** | `0.03–0.06` | Background areas, zone fills, hover states |
| **Subtle** | `0.10–0.15` | Ghost paths, inactive elements, guide markers |
| **Visible** | `0.20–0.25` | Borders, label backgrounds, dividers |
| **Strong** | `0.40–0.50` | Active highlights, glow effects |
| **Solid** | `0.80–1.0` | Primary path lines, active elements, text |

All opacity applied via `hexToRgba()` from tokens or SVG `strokeOpacity`/`fillOpacity` attributes.

### Path Complexity Budget

| Type | Max Points | Target File Size |
|------|-----------|-----------------|
| Static SVG | 200 path points | < 5KB |
| Animated SVG | 600 path points | < 15KB component JS |

---

## 3. Color Usage Rules

### Which Color Set to Use

| Color Set | When to Use | Token Source |
|-----------|------------|-------------|
| **PATTERN.A–D** | Anything representing the four modes or the gradient | `tokens.js: PATTERN` |
| **SPECTRUM** | Structural elements, reference lines, neutral diagrams, labels | `tokens.js: SPECTRUM` |
| **AWARENESS** (RE violet, ER cyan, SEA green) | Anything representing the three awareness capacities | `tokens.js: AWARENESS` |
| **RESEARCHER.accent** (#2563eb) | Generic accent when no specific mode applies | `tokens.js: RESEARCHER` |
| **MODE_ORANGE, MODE_PINK** | Surgical signal colors for stuck/chronic/harm states | `tokens.js: MODE_ORANGE, MODE_PINK` |
| **TEXT.hint, TEXT.muted** | Neutral labels and annotations inside SVGs | `tokens.js: TEXT` |

### The No-New-Colors Rule

Never introduce a new color. Every visual element uses an existing token value. If a concept seems to need a color that doesn't exist, reconsider the visual approach — the token palette is complete.

### Mode Color Reference

| Mode | Token | Hex | Semantic |
|------|-------|-----|----------|
| Connection | `PATTERN.A.primary` | `#14b8a6` | Teal — safety, engagement |
| Protection | `PATTERN.B.primary` | `#3b82f6` | Blue — alert, mobilized |
| Control | `PATTERN.C.primary` / `MODE_ORANGE` | `#f97316` | Orange — strategic, overriding |
| Domination | `PATTERN.D.primary` / `MODE_PINK` | `#ec4899` | Pink — power, suspension of resonance |

---

## 4. Typography Inside Visuals

### Design Preference: Monospace-Forward

The .org site uses `FONT.mono` (JetBrains Mono) extensively for structural, technical, and label typography — as seen in the M1 Inner Compass page and FluidCompassExplorer. This creates the precise, instrument-like quality that matches the research site's identity.

**All text inside SVG graphics and interactive visual components should default to `FONT.mono`** unless there is a specific reason to use the display font (e.g., a narrative paragraph within a visual).

### Typography Tiers for Graphics

| Tier | Size | Weight | Tracking | Font | Use |
|------|------|--------|----------|------|-----|
| **Micro** | 7.5px | 400 | 0.12em | `FONT.mono` | Axis labels, tick marks, timestamps, measurement annotations |
| **Label** | 8.5px | 400–600 | 0.12em | `FONT.mono` | End labels, legend text, small annotations, pathway labels |
| **Tag** | 10px | 600–700 | 0.06–0.08em | `FONT.mono`, uppercase | Category headers, mode identifiers, badge text |
| **Title** | 11px | 600–700 | 0.04–0.06em | `FONT.mono`, uppercase | Section titles inside visuals, capacity names |

These correspond to existing TYPE_SCALE entries: `chartLabel`, `micro`, `tagLabel`.

### M1 Pattern to Follow

The FluidCompassExplorer sets the standard:
- Mode badges: `10px, 700, FONT.mono, uppercase, 0.1em tracking`
- Type pills: `10px, 600, FONT.mono, 0.06em tracking`
- Capacity labels: `11px, 700, FONT.mono, uppercase, 0.04em tracking`
- Data values: `12px, FONT.mono`
- Sequence text: `12px, FONT.mono, 0.06em tracking`

New graphics should match this visual language.

### Text Colors Inside SVGs

- Neutral labels: `TEXT.hint` or `TEXT.muted`
- Semantic labels (mode-specific): the relevant `PATTERN` or `SPECTRUM` color
- Active/highlighted: `TEXT.primary`

### Font Family in SVGs

Always use `FONT.mono` from tokens. SVG `<text>` elements that cannot resolve CSS variables should use the full fallback: `"'JetBrains Mono', 'SF Mono', 'Consolas', monospace"` — but this should be defined once as a constant, not repeated inline.

---

## 5. Animation Rules

### Duration Standards (3 tiers)

| Type | Duration | Use |
|------|----------|-----|
| **Micro-transition** | 200ms | Hover states, opacity changes, color shifts, thumb glow |
| **State transition** | 300ms | Mode switching, panel reveals, expand/collapse, border color |
| **Narrative animation** | 5–9 seconds | Scroll-triggered path reveals, process animations, timeline playback |

### Animation Engine

| Scenario | Engine | Rationale |
|----------|--------|-----------|
| Hover/toggle/mode switch | CSS `transition` | Declarative, GPU-accelerated, no JS overhead |
| Path drawing, timeline reveals | `requestAnimationFrame` | Smooth 60fps, frame-precise control |
| Sequential stage reveals | `requestAnimationFrame` with steps | Consistent timing, cancelable |

**Never use `setTimeout` for visual animation.** The existing OpenCycleExplorer uses setTimeout — new graphics should use RAF instead.

### Trigger Behavior

- **Scroll-triggered animations:** `IntersectionObserver` with `threshold: 0.35` (35% visible)
- **Observer disconnects after first trigger** (no re-triggering on re-scroll)
- **Replay:** All narrative animations include a small replay button with `aria-label="Replay animation"`

### Easing

| Animation type | Easing |
|---------------|--------|
| Timeline/progress | Linear (constant speed for process visualization) |
| State transitions | `ease` (natural acceleration/deceleration) |
| Emphasis moments | `ease-out` (fast start, gentle landing) |

### Reduced Motion (Mandatory)

Every animated or transitioning component must respect the user's motion preference:

```javascript
const prefersReducedMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// If true: show final state immediately, skip RAF loop, disable CSS transitions
```

This is non-negotiable for all new graphics. Existing components should be retrofitted when touched.

---

## 6. Shared Visual Primitives

These are the reusable building blocks, extracted from existing components and available for composition in new graphics:

| Primitive | Source | Visual Language | Reuse In |
|-----------|--------|-----------------|----------|
| **Gradient Bar** | Design System (`CompassBar`) | Canonical four-mode bar — see full spec below | Any diagram showing the four-mode spectrum |
| **Pathway Line** | EmotionWaveSection | SVG `<path>`, 1.5–2px stroke, ghost + revealed versions, progressive reveal | Bifurcation diagrams, timeline flows |
| **Compass Needle** | FluidCompassExplorer | Draggable position on gradient, thumb with glow, mode-colored border | Any fluid-vs-stuck visualization |
| **Bifurcation Point** | EmotionWaveSection | Dashed vertical line, two paths diverging, moment markers | Hinge/split visualizations |
| **Stage Sequence** | OpenCycleExplorer | Numbered nodes connected by arrows, click-to-select, play-through | Linear process flows, arc visualizations |
| **Capacity Dimension Bar** | New (follows gradient bar pattern) | Horizontal bar that narrows or changes opacity per mode | State-determines-capacity visualizations |

### Gradient Bar — Canonical Specification

The gradient bar is the primary visual representation of the Four-Mode Gradient across all diagrams. Its design is defined in the design system (`/design-system` → `CompassBar`) and must be referenced by any SVG or interactive graphic that shows the four-mode spectrum.

#### Colors

The bar uses a continuous gradient with four zones:

```
#93CFFF → #5BADFF → #4B8FFF → #346AEC → #2563eb
```

This matches the design system section separator gradient exactly. The four mode zones map to:

| Zone | Mode | Hex | Zone Position |
|------|------|-----|---------------|
| 1 | Connection | `#93CFFF` | 0%–25% |
| 2 | Protection | `#5BADFF` | 25%–50% |
| 3 | Control | `#346AEC` | 50%–75% |
| 4 | Domination | `#2563eb` | 75%–100% |

Zone dividers at 25%, 50%, 75% — `1.5px`, `rgba(0,0,0,0.45)`.

#### Bar Dimensions

- Height: 14px, fully rounded (`border-radius: 100`)
- Needle: 28px circle, white fill, 3px mode-colored border, glow shadow
- Mode center markers: 1px white at 12.5%, 37.5%, 62.5%, 87.5%

#### Signal Labels

Each mode has a **signal label** displayed above the bar:

| Mode | Signal Label |
|------|-------------|
| Connection | **Safety** |
| Protection | **Threat** |
| Control | **Danger** |
| Domination | **Life peril** |

Typography: `FONT.mono`, 9px, weight 500, uppercase, `0.06em` tracking. Color: active mode hex when selected, `TEXT.hint` when inactive.

#### Fluid vs. Stuck State

Below each signal label, a single descriptor word communicates the compass state:

| Compass State | Descriptor (all four modes) | Meaning |
|---------------|---------------------------|---------|
| **Fluid** | *perceived* | The signal is temporary — the needle entered this zone in response to conditions and can return |
| **Stuck** | *chronic* | The signal has become a fixed position — the needle no longer moves freely |

Typography: `FONT.mono`, 9px, italic, `0.04em` tracking. Color: active mode hex at 0.6 opacity when selected, `TEXT.micro` when inactive.

**In diagrams:** When a diagram depicts a fluid compass (designed operation, healthy movement), all four zones show "perceived." When a diagram depicts a stuck compass (chronic pattern, lost mobility), all four zones show "chronic." This is a binary toggle — a compass is either fluid or stuck — and the label communicates which state is being shown.

#### Mode Labels

Below the bar, each zone has a mode name:

| Position | Label | Sub-label |
|----------|-------|-----------|
| 12.5% | **CONNECTION** | MODE |
| 37.5% | **PROTECTION** | MODE |
| 62.5% | **CONTROL** | MODE |
| 87.5% | **DOMINATION** | MODE |

Typography: mode name at `FONT.mono`, 10px, weight 700, `0.08em` tracking. "MODE" sub-label at `FONT.mono`, 9px, italic, `0.04em` tracking.

#### Usage in SVG Diagrams

When incorporating the gradient bar into an SVG diagram (not as a React component), use a `<linearGradient>` definition:

```xml
<defs>
  <linearGradient id="four-mode-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#93CFFF" />
    <stop offset="20%" stop-color="#93CFFF" />
    <stop offset="35%" stop-color="#5BADFF" />
    <stop offset="50%" stop-color="#4B8FFF" />
    <stop offset="70%" stop-color="#346AEC" />
    <stop offset="100%" stop-color="#2563eb" />
  </linearGradient>
</defs>
<rect fill="url(#four-mode-gradient)" rx="7" ... />
```

Signal labels and mode labels should be positioned as `<text>` elements above and below the rect respectively, using the typography specs above.

### Composition Principle

New graphics should compose from these primitives whenever possible. A framework section graphic might combine a Gradient Bar with Capacity Dimension Bars, or a Pathway Line with a Bifurcation Point. Building from shared pieces ensures visual coherence and reduces code.

---

## 7. Accessibility Requirements

### Every SVG Graphic Must Have

```jsx
<svg
  role="img"
  aria-labelledby="graphic-title graphic-desc"
  viewBox="0 0 800 200"
>
  <title id="graphic-title">Brief title of what the graphic shows</title>
  <desc id="graphic-desc">
    Detailed description of the visual content for screen readers.
    Include the key information the graphic conveys.
  </desc>
  {/* ... visual elements ... */}
</svg>
```

### Every Interactive Graphic Must Have

1. Appropriate ARIA role (`role="slider"`, `role="tablist"`, etc.)
2. Keyboard navigation: Arrow keys for position, Home/End for extremes, Tab for focus
3. `aria-valuenow`, `aria-valuetext` for current state (sliders)
4. `aria-selected` for tab-like selections
5. `aria-label` on all clickable elements

### Color Independence

Never rely solely on color to convey information. Always pair with:
- Text labels
- Symbols or markers (dots, dashes, stars)
- Position or size differences

### Reduced Motion

Mandatory. See Section 5.

---

## 8. Performance Budget

### Per-Graphic Limits

| Metric | Static SVG | Animated SVG | Interactive Component |
|--------|-----------|-------------|----------------------|
| **File/component size** | < 5KB | < 20KB (gzipped < 7KB) | < 25KB (gzipped < 9KB) |
| **Path points** | < 200 | < 600 | N/A |
| **SVG elements** | < 50 | < 100 | N/A |

### Per-Page Limits

| Metric | Limit |
|--------|-------|
| Total JS added by all graphics on one page | < 60KB (gzipped < 20KB) |
| Active `requestAnimationFrame` loops simultaneously | 1 (viewport-gated) |
| `IntersectionObserver` instances per page | 1 per animated graphic (max 3) |

### Loading Strategy

- **Static SVGs:** Inline in the server-rendered page (zero JS overhead)
- **Animated/interactive:** `dynamic(() => import(...), { ssr: false })` — lazy-loaded, client-only
- **Viewport gating:** Only the graphic currently in view runs its animation. Others are paused or show their final state.
- **Progressive disclosure:** Framework section graphics behind "Show graphic" toggle — zero JS until user requests it

---

## 9. Framework Section Graphics — Specific Rules

### Layout: Toggle-to-Reveal

Each framework Part section includes an optional graphic revealed by a toggle button:

```
Part 1: The Signal
┌──────────────────────────────────┐
│ [▸ Show diagram]                 │
└──────────────────────────────────┘
  [text content as normal...]
```

When toggled open:

```
Desktop (≥768px):
┌───────────────┬──────────────────┐
│ Text content  │  Graphic         │
│ scrolls here  │  (sticky)        │
│               │                  │
└───────────────┴──────────────────┘

Mobile (<768px):
┌──────────────────────────────────┐
│ Graphic (full width)             │
├──────────────────────────────────┤
│ Text content follows             │
└──────────────────────────────────┘
```

### F1 Classification Matrix

| Section | Type | Graphic Concept |
|---------|------|----------------|
| Part 1: The Signal | **Static SVG** | Flow: stimulus → nervous system → evaluation → signal |
| Part 2: The Instrument | **Animated** | Inner Compass — needle moving between Connection/Protection (existing reference) |
| Part 3: The Hinge | **Animated** | Bifurcation — activation completes (restores) or stays open |
| Part 4: The Cognitive Upgrade | **Interactive** | 4-mode gradient — fluid vs. stuck toggle (existing reference) |
| Part 5: The Architecture | **Static SVG** | Gradient bar with capacity dimensions narrowing per mode |
| Part 6: The Full Arc | **Static SVG** | 7-step linear arc, Biological Restoration as hinge at step 4 |

### Design Workflow Per Graphic

1. **Brief:** 2–3 sentences describing what the graphic must convey
2. **Primitive selection:** Which shared primitives does it compose from?
3. **Classification:** Static, animated, or interactive?
4. **Sketch:** ASCII or verbal description of the visual layout
5. **Build:** Implement against this protocol
6. **Check:** Run against the protocol checklist (below)
7. **Measure:** Lighthouse before/after, verify performance budget

---

## 10. Protocol Checklist

Before any graphic is merged, verify:

### Visual
- [ ] Uses only token colors (PATTERN, SPECTRUM, AWARENESS, TEXT, RESEARCHER)
- [ ] Stroke widths follow the 3-tier system (1px / 1.5–2px / 2.5–3px)
- [ ] Opacity levels follow the 5-tier system
- [ ] Typography uses `FONT.mono` with standardized sizes
- [ ] ViewBox uses a standard dimension or has documented rationale

### Performance
- [ ] Static SVGs < 5KB, animated components < 20KB
- [ ] Lazy-loaded with `dynamic(() => import(...), { ssr: false })`
- [ ] Animation viewport-gated (IntersectionObserver, threshold 0.35)
- [ ] Path points within budget (static < 200, animated < 600)

### Accessibility
- [ ] SVG has `<title>` and `<desc>` elements
- [ ] SVG has `role="img"` and `aria-labelledby`
- [ ] Interactive elements have keyboard navigation
- [ ] Reduced motion respected (`prefers-reduced-motion`)
- [ ] No color-only information — text/symbol pairs

### Integration
- [ ] Toggle button works ("Show diagram" / "Hide diagram")
- [ ] Two-column layout on desktop, stacked on mobile
- [ ] No layout shift (CLS) when toggling
- [ ] Text content unchanged and fully crawlable

---

## Appendix: Existing Component Audit

| Component | Lines | Bundle | Canvas | Animation | Accessibility Gaps |
|-----------|-------|--------|--------|-----------|-------------------|
| EmotionWaveSection | 451 | ~18KB | SVG 900×220 | RAF, 9s | No `<title>`/`<desc>`, no reduced motion |
| FluidCompassExplorer | 632 | ~24KB | HTML divs | CSS 200–300ms | No reduced motion |
| OpenCycleExplorer | 875 | ~32KB | HTML divs | setTimeout (should migrate to RAF) | No reduced motion |
| PatternGradientBar | 161 | ~6KB | HTML divs | CSS 200ms | ARIA handled by parent |

These components predate this protocol. They should be brought into compliance when next modified, but do not require immediate migration.
