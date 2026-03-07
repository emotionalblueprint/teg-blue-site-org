# F1 Part 1: The Signal — Static SVG Diagram Design

**Date:** 2026-03-07
**Status:** Approved
**Scope:** Single static SVG diagram for the F1 "The Signal — How the Body Evaluates" section
**Protocol:** Visual Graphics Protocol (`docs/plans/2026-03-07-visual-graphics-protocol.md`)

---

## Brief

The diagram visualises the flow: stimulus → nervous system → evaluation → signal. It must convey three insights that the text alone does not: (1) the evaluation sequence is pre-cognitive — the body evaluates and signals BEFORE cognition arrives, (2) emotions carry structured information — they are not noise, they are the output of evaluation, (3) the evaluation is continuous and automatic — always running, below awareness.

## Approach: Two-Track Flow

Two horizontal tracks — the body's evaluation track runs across the full width (always on, continuous). Cognition arrives as a second track that only begins after the signal has already been produced.

## Classification

- **Type:** Static SVG (inline, server-rendered, zero JS)
- **Primitives:** Pathway line (body evaluation track, cognition track)
- **ViewBox:** `0 0 800 200` (Wide format)
- **Internal padding:** PL:40, PT:16, PR:40, PB:40

---

## Layout

- **Placement:** Behind a "Show diagram" toggle in the Part 1 section
- **Desktop (>=768px):** Two-column — text left, diagram right (sticky)
- **Mobile (<768px):** Diagram stacked above text, full width
- **Background:** Transparent (inherits BG.page)
- **No layout shift (CLS)** when toggling

---

## Visual Structure

```
 ┌─────────────────────────────────────────────────────────────────┐
 │                                                                 │
 │  BODY'S EVALUATION              continuous · below awareness    │
 │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    │
 │    ·gut    ·heart    ·vagus    ·amygdala                        │
 │                                    │                            │
 │                                    ▼                            │
 │                              ┌──────────┐                       │
 │                              │ SIGNAL   │                       │
 │                              │ (emotion)│                       │
 │                              └────┬─────┘                       │
 │                                   │                             │
 │  COGNITION  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┼─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │
 │                          arrives second                         │
 │                                                                 │
 └─────────────────────────────────────────────────────────────────┘
```

### Elements

1. **Body evaluation line** — Full-width horizontal, Primary stroke (2px), SPECTRUM.azure, spans PL to PW. The continuous track.

2. **Sensing nodes** — 4 small circles (r=3) along the body line, evenly spaced in the left two-thirds. Labels below in Micro typography: `gut`, `heart`, `vagus`, `amygdala`.

3. **Evaluation marker** — At ~65% horizontal, a vertical connection drops from the body line. Label: `"safe enough?"` in Label typography, TEXT.muted.

4. **Signal output** — From evaluation point, a short vertical pathway to a highlighted node. Label: `SIGNAL` in Tag typography (10px, 600, FONT.mono, uppercase, SPECTRUM.cobalt). Below: `emotion` in Label typography.

5. **Cognition line** — Starts at ~70% horizontal, extends to right edge. Fine stroke (1px), dashed (strokeDasharray="4,6"), TEXT.hint. Label: `COGNITION` in Tag typography. Annotation: `"arrives second"` in Micro typography.

6. **"continuous" annotation** — Near right of body evaluation line: `continuous · below awareness` in Micro typography, TEXT.hint.

---

## Colors & Strokes (tokens only)

| Element | Color | Stroke | Opacity |
|---------|-------|--------|---------|
| Body evaluation line | SPECTRUM.azure | 2px (Primary) | 0.8 |
| Sensing nodes | SPECTRUM.azure | — | Fill 0.25 |
| Evaluation marker | SPECTRUM.cobalt | 1.5px | Solid |
| Signal node | SPECTRUM.cobalt | — | Fill 0.5 |
| Cognition line | TEXT.hint | 1px dashed (Fine) | 0.5 |
| All labels | TEXT.hint or TEXT.muted | — | — |
| "SIGNAL" label | SPECTRUM.cobalt | — | Solid |

---

## Typography

All text uses FONT.mono (JetBrains Mono):

| Text | Tier | Size | Weight | Tracking |
|------|------|------|--------|----------|
| gut, heart, vagus, amygdala | Micro | 7.5px | 400 | 0.12em |
| "safe enough?", "arrives second" | Label | 8.5px | 400 | 0.12em |
| SIGNAL, BODY'S EVALUATION, COGNITION | Tag | 10px | 600 | 0.08em, uppercase |
| continuous · below awareness | Micro | 7.5px | 400 | 0.12em |
| emotion | Label | 8.5px | 400 | 0.12em |

---

## Accessibility

```jsx
<svg role="img" aria-labelledby="signal-title signal-desc" viewBox="0 0 800 200">
  <title id="signal-title">How the body evaluates and signals</title>
  <desc id="signal-desc">
    A flow diagram showing the body's continuous evaluation process.
    The nervous system (gut, heart, vagus nerve, amygdala) evaluates
    safety and produces an emotional signal before cognition arrives.
  </desc>
</svg>
```

- Color independence: all information conveyed by position, labels, and line style (solid vs. dashed)
- No animation — no reduced-motion handling needed

---

## Performance Budget

| Metric | Estimate | Budget |
|--------|----------|--------|
| SVG elements | ~25 | < 50 |
| Path points | ~30 | < 200 |
| File size | ~2-3KB | < 5KB |
| JS overhead | 0 (inline static) | — |

---

## Integration

- Toggle button: "Show diagram" / "Hide diagram"
- Two-column on desktop, stacked on mobile
- No CLS when toggling
- Text content unchanged and fully crawlable
- Static SVG inlined in server-rendered page

---

## Protocol Checklist (pre-merge)

### Visual
- [ ] Uses only token colors (SPECTRUM, TEXT)
- [ ] Stroke widths follow 3-tier system (1px / 2px)
- [ ] Opacity follows 5-tier system
- [ ] Typography uses FONT.mono with standardized sizes
- [ ] ViewBox uses standard dimension (800x200)

### Performance
- [ ] Static SVG < 5KB
- [ ] Inline (no lazy loading needed for static)
- [ ] Path points within budget (< 200)

### Accessibility
- [ ] SVG has title and desc elements
- [ ] SVG has role="img" and aria-labelledby
- [ ] No color-only information

### Integration
- [ ] Toggle button works
- [ ] Two-column on desktop, stacked on mobile
- [ ] No layout shift when toggling
- [ ] Text content unchanged
