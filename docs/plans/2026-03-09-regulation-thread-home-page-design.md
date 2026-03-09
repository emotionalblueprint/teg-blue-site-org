# Regulation Thread — Home Page Section

**Date:** 2026-03-09
**Status:** Approved

## What

Add a new section to the .org home page that introduces the Regulation Thread — the single unifying mechanism across all 12 frameworks: when the body's natural return path (Biological Restoration) is missing, the nervous system recruits substitutes at increasing scale, each at a cost.

## Placement

After the EmotionWaveSection ("Emotions are data"), before the "What TEG-Blue is" section. This creates the narrative flow: *here's what emotion is* → *here's what happens when it can't complete* → *here's what TEG-Blue maps*.

## Design Decisions

- **Core intent:** Conceptual insight — a thesis statement, not a narrative
- **Visual format:** Inline stepped list — 7 rows, clean and scannable
- **Scope:** F1–F7 only, with a one-line reversal note for F8–F12
- **No animation, no interactivity** — pure static content

## Section Structure

1. Badge pill: `THE REGULATION THREAD`
2. Heading: "When the body can't restore itself, something else steps in."
3. Subtext: "A single thread runs through all twelve frameworks. Each one describes a regulation substitute — at a different scale, at a different cost."
4. Seven rows (F1–F7), each with: monospace F-ID | regulator text | cost
5. Reversal note (italic, muted): "F8–F12 reverse the thread — not by adding another substitute, but by building the original."
6. CTA link: "See the full framework architecture →" → `/frameworks-map#the-regulation-thread`

## Data

Inline, matching the `REGULATION_THREAD` array from `frameworks-map/page.js`:

| ID | What Regulates | Scale | Cost |
|----|---------------|-------|------|
| F1 | Biological Restoration — the body completing its own cycle | Individual biology | No cost — this is the design |
| F2 | Co-regulation → self-restoration (when learned). When not learned: the compass locks | Developmental / relational | The restoration path is never built |
| F3 | False coherence — cognition replacing restoration | Individual adult cognition | Truth |
| F4 | Rules regulate | Collective — social systems | Flexibility |
| F5 | Worth hierarchies regulate | Collective — value systems | Equity |
| F6 | Bias regulates | Collective — perceptual systems | Accuracy |
| F7 | Domination regulates | Collective — power systems | Everything |

## Styling

- Same max-width container as other home page sections
- Badge: existing pattern (monospace, uppercase, subtle border, small font) using `SPECTRUM.cobalt`
- Rows: ~10-12px vertical padding, `BORDER.default` dividers
- Fonts: F-ID 13px mono bold, regulator 14px display, cost 12px mono
- Responsive: on mobile, rows stack (F-ID + regulator on one line, cost below)
- Separator after section matches existing patterns (spectrum gradient or breathing dots)

## Sidebar

Add entry to `SIDEBAR_SECTIONS`: `{ label: "The Regulation Thread", href: "#the-regulation-thread", description: "..." }`
