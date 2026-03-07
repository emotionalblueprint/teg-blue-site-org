# Design System Unification

**Date:** 2026-03-07
**Status:** Approved
**Scope:** teg-blue-site-org — token realignment + hardcoded color cleanup

## Problem

The EmotionWaveSection ("Emotions are data" animated diagram) is the best-looking component on the .org site, but it hardcodes its own color palette instead of using `tokens.js`. 14 files across the site have 150+ hardcoded color values that bypass the token system, breaking theme switching and making maintenance harder.

The wave section uses Tailwind's Slate scale, while `tokens.js` uses a custom darker palette. The wave section's values produce a warmer, more atmospheric feel — that's the target.

## Decision

**Approach 1: Token Realignment.** Update `tokens.js` and `globals.css` to match the EmotionWaveSection's palette, then refactor all 14 files to use tokens exclusively.

## Design Spec

### 1. Background Tokens (Dark Mode)

| Token | Old | New | Source |
|---|---|---|---|
| `--bg-page` | `#080C18` | `#0f172a` | Slate 900 |
| `--bg-primary` | `#0C1222` | `#111827` | Slate 900/800 blend (header/nav) |
| `--bg-card` | `#111827` | `#1e293b` | Slate 800 |
| `--bg-surface` | `#1A2234` | `#334155` | Slate 700 |
| `--bg-inset` | `#0A0E1A` | `#0b1120` | Darker than page |

### 2. Text Tokens (Dark Mode)

| Token | Old | New | Source |
|---|---|---|---|
| `--text-primary` | `#F1F5F9` | `#f1f5f9` | No change |
| `--text-secondary` | `#CBD5E1` | `#cbd5e1` | No change |
| `--text-muted` | `#94A3B8` | `#94a3b8` | No change |
| `--text-hint` | `#8FA1B8` | `#64748b` | Slate 500 — more subdued |
| `--text-micro` | `#7C8EA4` | `#475569` | Slate 600 — dimmer |

### 3. Border Tokens (Dark Mode)

| Token | Old | New |
|---|---|---|
| `--border-default` | `rgba(148, 163, 184, 0.12)` | `rgba(148, 163, 184, 0.12)` (no change — works well) |
| `--border-hover` | `rgba(148, 163, 184, 0.20)` | No change |
| `--border-active` | `rgba(148, 163, 184, 0.30)` | No change |

### 4. Light Mode

No changes. Light mode values in `globals.css` `[data-theme="light"]` remain as-is.

### 5. Typography Updates

**TYPE_SCALE changes in tokens.js:**

| Role | Old | New |
|---|---|---|
| `body.size` | 14 | 15 |
| `body.lineHeight` | 1.7 | 1.75 |
| `summary.size` | 14 | 13 |
| `summary.lineHeight` | 1.7 | 1.72 |

**New TYPE_SCALE entries:**

```javascript
tagMicro:  { size: 8, weight: 600, tracking: "0.16em", lineHeight: 1.3, font: "mono" },
chartLabel: { size: 7.5, weight: 400, tracking: "0.12em", lineHeight: 1.3, font: "mono" },
micro:      { size: 8.5, weight: 400, tracking: "0.12em", lineHeight: 1.3, font: "mono" },
```

### 6. Component Patterns (Reference, Not Tokens)

These are composition patterns using existing tokens:

**Gradient Card:**
```
background: gradientCardBg(accentColor) // already in tokens.js
border-left: 3px solid {accentColor}
border: 1px solid {BORDER.default}
border-radius: 12px
padding: 20px 18px
```

**Badge Pill:**
```
padding: 4px 10px
border-radius: 6px
background: hexToRgba(accent, 0.12)
border: 1px solid hexToRgba(accent, 0.25)
font: tagLabel scale, mono, uppercase
```

**Ghost CTA Button:**
```
padding: 12px 24px
border: 1px solid hexToRgba(accent, 0.3)
background: hexToRgba(accent, 0.08)
border-radius: 8px
font: 11px mono, uppercase, 0.12em tracking
```

**Radial Glow (cinematic atmosphere):**
```
radial-gradient(ellipse, hexToRgba(accent, 0.04), transparent 70%)
```

### 7. New Tokens to Add

**Three Awareness Capacities (cross-site canonical — must match .com):**
```javascript
AWARENESS: {
  RE: '#a080ff',   // violet — Reading Emotions
  ER: '#22d3ee',   // cyan — Emotional Resonance
  SEA: '#a0e85a',  // green — Self-Emotional Awareness
}
```
These are identity colors shared with .com (`rainbow-palette-core.js`). Currently hardcoded in `app/model/m2-three-awareness-capacities/page.js`.

**Status colors (for StatusBadge.jsx):**
```javascript
STATUS: {
  draft: '#f59e0b',       // amber
  published: SPECTRUM.blue,
  reviewed: '#10b981',    // emerald
}
```

**Mode accent colors (canonical four-mode gradient — matches .com):**
```javascript
MODE: {
  connection:  '#14b8a6',  // teal
  protection:  '#f97316',  // orange — also used as "unprocessed" / "SEA offline"
  control:     '#f97316',  // orange (shares with protection in monochromatic contexts)
  domination:  '#ec4899',  // pink — also used as "RE chronic" / "precision without feedback"
}
```
These are **signal colors**, not theme colors. Each one means something specific. Used surgically — as semantic accent markers on a blue/dark base.

Shorthand exports for common usage:
```javascript
MODE_ORANGE: '#f97316',  // canonical unprocessed/protection accent
MODE_PINK:   '#ec4899',  // canonical domination/chronic accent
```

**Explorer accent colors (for OpenCycleExplorer, FluidCompassExplorer):**
These components use a 4-blue gradient matching the existing PATTERN constant. No new tokens needed — just import PATTERN from tokens.js.

**Visualization-specific colors (InterdependencyMatrix):**
Keep the 12-color rainbow palette component-local. It's visualization-specific data encoding, not part of the design system.

## Files to Refactor

### Phase 1 — Token Update (2 files)
- `globals.css` — update CSS custom properties
- `tokens.js` — update TYPE_SCALE, add STATUS colors

### Phase 2 — Critical Components (5 files)
- `EmotionWaveSection.jsx` — remove 9 local constants + 25 hardcoded values, import tokens
- `FluidCompassExplorer.jsx` — remove local BLUE/ORANGE, import PATTERN + tokens (M1 diagram)
- `OpenCycleExplorer.jsx` — same pattern (M3 diagram)
- `PatternGradientBar.jsx` — use PATTERN from tokens
- `app/model/m2-three-awareness-capacities/page.js` — replace RE_COLOR/ER_COLOR/SEA_COLOR with AWARENESS tokens

### Phase 3 — Gradient Components (4 files)
- `ResearcherHero.jsx` — replace hardcoded rgba() with gradientCardBg()
- `MechanismBox.jsx` — same
- `PropositionBox.jsx` — same
- `StatusBadge.jsx` — use STATUS tokens

### Phase 4 — Minor Cleanup (2-3 files)
- `SiteHeader.jsx` — replace #000 with token
- `GlossaryInline.jsx` — review and fix
- `PublicationPage.jsx` — review and fix

### Out of Scope
- `InterdependencyMatrix.jsx` — 12-color visualization stays component-local
- `InterdependencyMatrixVertical.jsx` — same
- Light mode palette — no changes
- Page layouts / spacing — not part of this effort

## Success Criteria

1. Zero hardcoded hex colors in component files (except InterdependencyMatrix visualization colors)
2. All components import from `tokens.js` exclusively
3. Theme toggle (dark/light) works on all components
4. No visual regression on the EmotionWaveSection
5. Rest of site adopts the warmer Slate-based palette consistently

## Risk

- **Visual shift:** Pages will look slightly different (warmer backgrounds, more subdued hint text). This is intentional — matching the wave section's atmosphere.
- **EmotionWaveSection theme support:** Currently dark-only with hardcoded values. After refactoring to use CSS variables, it will automatically support light mode. May need visual QA.
