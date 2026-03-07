# Design System Page

**Date:** 2026-03-07
**Status:** Approved
**Scope:** teg-blue-site-org — `/design-system` route

## Purpose

Internal reference page for development use. Renders all `tokens.js` values visually so you can see the complete design token set at a glance. Not linked from main nav. Renders in current theme (use theme toggle to compare dark/light).

## Architecture

- Single file: `app/design-system/page.js`
- Static page — no client-side state needed (except transitions section hover)
- All inline styles using `tokens.js` (consistent with .org conventions)
- Standard .org layout: 820px max-width container

## Sections

### 1. The Blue Spectrum
6 color swatches in a horizontal row. Each swatch: colored square, label (sky/azure/blue/cobalt/indigo/slate), hex value. Source: `SPECTRUM` object.

### 2. Semantic Color Groups
Four sub-groups:

- **Pattern** — 4 swatches (A/B/C/D) + gradient bar showing `PATTERN_GRADIENT`
- **Awareness** — 3 swatches (RE violet, ER cyan, SEA green) from `AWARENESS`
- **Mode Accents** — 2 swatches (orange, pink) from `MODE_ORANGE`, `MODE_PINK`
- **Status** — 3 swatches (draft amber, published blue, reviewed emerald) from `STATUS`

### 3. Backgrounds
5 horizontal bars stacked vertically. Each bar fills its background tier (page → primary → card → surface → inset) with the CSS variable name and token key labeled.

### 4. Text
5 lines of sample text, each rendered at its TEXT tier:
- primary: "Primary text — headings, emphasis"
- secondary: "Secondary text — body copy"
- muted: "Muted text — supporting content"
- hint: "Hint text — placeholders, labels"
- micro: "Micro text — footnotes, timestamps"

### 5. Borders
3 boxes side by side showing `BORDER.default`, `BORDER.hover`, `BORDER.active` with labels.

### 6. Typography
Two font family samples rendered at body size:
- Inter (display): "The quick brown fox jumps over the lazy dog"
- JetBrains Mono: "const emotion = 'biological information'"

Then all 10 `TYPE_SCALE` entries rendered at their actual size, weight, tracking, and line-height. Each shows: role name, rendered sample, size/weight/tracking specs.

### 7. Border Radius
4 boxes in a row, each with its radius applied: sm(6) / md(8) / lg(12) / xl(16). Labeled with name and px value.

### 8. Spacing
Key spacing values visualized as labeled measurement bars:
- containerMax: 820px
- gridGap: 12px
- cardPadding: desktop 24px / mobile 16px
- sectionGap: desktop 80px / mobile 48px
- contentGap: desktop 32px / mobile 24px

### 9. Opacity
7 swatches showing each OPACITY level applied to `SPECTRUM.cobalt`:
tint(0.02) → cardBg(0.07) → badgeBg(0.12) → borderSoft(0.15) → border(0.22) → borderHover(0.35) → borderActive(0.45)

### 10. Transitions
3 boxes that change background on hover, each using a different TRANSITION speed: fast(150ms), normal(200ms), slow(300ms). Requires `'use client'` for hover state — or use CSS transitions via inline style (no JS state needed, just `:hover` pseudo-class via a small injected style block).

## Implementation Notes

- Transitions section: use a small `<style>` block injected via `dangerouslySetInnerHTML` for hover pseudo-classes (same pattern as SiteHeader.jsx)
- Rest of the page can be a server component
- No navigation link needed — accessed directly via URL
- Color swatches: min 48x48px for readability, with 1px border so light colors are visible against light backgrounds
