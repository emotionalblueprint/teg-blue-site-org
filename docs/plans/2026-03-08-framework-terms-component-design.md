# FrameworkTerms Component — Design

## Purpose

A reusable definition-list layout for "Terms Used in This Framework" anchor blocks. Used across all 12 framework pages to introduce key terms before the Core Propositions section.

## Visual Design

Two-column definition list. Term on left, definition on right. Subtle cobalt separator between rows. No table borders, no card background — reads like a clean reference section, not a data table.

```
TERMS USED IN THIS FRAMEWORK              (title)

State            What the nervous system is doing
                 biologically — below awareness
─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
The Compass      The metaphor that makes the
                 orientation mechanism visible
─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
The Needle       Our intuition — the body's felt
                 signal of where the compass is pointing
```

## Component API

```jsx
<FrameworkTerms
  title="Terms Used in This Framework"   // optional, default value
  terms={[
    { term: "State", definition: "What the nervous system is doing biologically — below awareness" },
    { term: "The Compass", definition: "The metaphor that makes the orientation mechanism visible and navigable" },
  ]}
/>
```

## Styling Spec

All values from `tokens.js`. No hardcoded colors.

| Element | Token / Value |
|---------|---------------|
| Title | 16px, weight 600, `TEXT.primary` (matches `conceptHeadingStyle`) |
| Term column | ~140px fixed, 13px, weight 600, `TEXT.primary` |
| Definition column | flex/1fr, 13px, weight 400, `TEXT.secondary`, line-height 1.7 |
| Row separator | `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.08)}` |
| Row padding | 10px 0 (vertical rhythm) |
| Outer container | No border, no background, `marginBottom: 16` |
| Grid | `display: grid; grid-template-columns: 140px 1fr; gap: 0` |

## Responsive Behavior

- Desktop (>600px): Two-column grid layout
- Mobile (<=600px): Stacked — term above definition, definition with slight left indent

Since .org uses inline styles (no CSS files), responsive stacking uses a JS-based approach: the component renders with the two-column grid and the term column uses `minWidth: 140px` within a flex container that wraps naturally.

## File Location

- Component: `src/components/FrameworkTerms.jsx`
- Export: added to `src/components/index.js`

## What It Replaces

The `<table>` / `TableRow` markup currently in the F1 framework anchor block. Will be adopted across all 12 framework pages as anchor blocks are added.
