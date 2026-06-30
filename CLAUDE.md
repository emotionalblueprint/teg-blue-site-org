# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

```bash
# Check if dev server is running (uses port 3001)
lsof -i :3001

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Session Protocol

### On Startup (beginning of any .org session)

Run `./teg-health.sh startup` from `/Users/annaparetas/Projects/`. Report results briefly. Flag any risks (unpushed commits, dirty working tree, console.logs).

### On Wrap-Up (when the user says "let's wrap up", "push", or session is ending)

1. Remove any console.logs you added during the session
2. Run `./teg-health.sh wrapup` from `/Users/annaparetas/Projects/`
3. If build passes and checks are clean, offer to commit and push
4. Update any active `_session-state.md` files in vault directories you worked in
5. Update `teg-blue-vault/_plans/pending-tasks.md` with all unfinished work, open decisions, and what the next session should start with
   Note: `teg-blue-vault/` is the promoted vault (was vault-2). Archive at `teg-blue-vault-archive/`.

### Debt Prevention Rules

1. **Remove console.logs before committing.** .org has no legitimate console.log locations — remove ALL of them.
2. **Never hardcode colors.** Always use `tokens.js` values (SPECTRUM, TEXT, BG, BORDER, MODE_*, etc.).
3. **No CSS files or Tailwind classes.** All styling is inline via tokens.js. If Tailwind classes appear, convert to inline styles.
4. **When removing a feature, delete all its files in the same commit.** Components, routes, content files — everything.
5. **When inlining a component, delete the old file.** Don't leave orphaned component files behind.
6. **When removing a package, also run `npm install`** to update the lockfile. Then update `ORG_DEP_BASELINE` in `teg-health.sh`.
7. **Only add `'use client'` to files that actually use hooks, event handlers, or browser APIs.**
8. **Commit frequently, push at end of session.** Don't let unpushed commits accumulate across sessions.
9. **When adding a dependency, note the new baseline** — update `ORG_DEP_BASELINE` in `teg-health.sh`.
10. **Import page components directly from their files.** Avoid `src/components/index.js` barrels for live pages so Next.js keeps client-component hydration boundaries explicit.

> **All plans, specs, strategy docs, audits, and page specifications live in the vault.** This folder contains only code, configs, live page source, and staged route placeholders. If Anna might need to read it, it belongs in `teg-blue-vault/`.

---

## System Context

For shared rules (core messaging, forbidden terms, voice, mode colors) → auto-memory (always loaded).
For content architecture and source-of-truth rules → `teg-blue-vault/CLAUDE.md`.
For .org site goals and writing principles → `teg-blue-vault/_system/writing-foundations.md` + `writing-style-org-pages.md`.

**.org links to .com** for interactive tools. **.com links to .org** for open research.

---

## Purpose

**teg-blue.org** is the academic and practitioner-facing platform for TEG-Blue research. Its audience is researchers, scientists, academics, and practitioners — not the general public (that's teg-blue.com).

All .org content falls under **Tier 3: Researcher & Frameworks**. All content is designed to be readable by both humans and AI systems.

> **Full writing reference:** `teg-blue-vault/_system/writing-foundations.md` — shared rules for all TEG-Blue writing. Style-specific: `writing-style-ca.md` (CAs), `writing-style-org-pages.md` (.org pages).

### Writing Guardrail: Moral/Capacity Frame

Keep impact, mechanism, capacity, and response separate. TEG-Blue does not collapse behavior into person-verdicts, and it does not use nervous-system state to explain harm away.

Base filter for behavior copy:

- Is this a nervous system defending against perceived threat?
- Is this a pattern of intentional harm where empathy, accountability, or repair is absent?
- What impact or harm occurred?
- What boundary, protection, accountability, repair, support, or further study fits the pattern?

Effect-over-time filter:

- Can impact be named?
- Can empathy stay present?
- Can accountability land?
- Can repair change the pattern?
- Can reality stay discussable?
- As safety increases, do these capacities return, or does the pattern keep reducing clarity, autonomy, or repair?

Use mechanism-effect language (`harmful pattern`, `coercive-control pattern`, `empathy-disabled regulation`, `protective organization`, `repair capacity unavailable`). Avoid person-verdict language (`bad`, `evil`, `toxic person`, `narcissist`, `abuser`, `manipulator`, `broken`, `flawed`) unless quoting or documenting source terminology with clear context.

Do not argue with the moral frame in public copy. Avoid phrases like `not a character flaw`, `not weakness`, `not an excuse`, or `just a nervous-system response`. Name the mechanism and impact directly.

---

## Site Structure

### Live Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Current Nervous System Gradient surface. |
| About | `/about` | Project identity, founder, research stance, contact routes, and site distinction. |
| TEG-Blue Overview | `/foundations` | The Nervous System Gradient, responsible pattern reading, scope, and research status. |
| Methodology | `/methodology` | Review status, claim calibration, testing roadmap, and limitations. |
| Scientific Foundations | `/scientific-foundations` | Research areas that illuminate the Gradient and wider synthesis. |

All other `app/**/page.js` routes are staged placeholders that re-export `src/lib/staged-route.js`. Keep them empty until Anna explicitly repopulates a route. Do not use non-live routes as source context for current .org work.

### Navigation

```
Home | Explore: About, TEG-Blue overview, Methodology, Scientific foundations | Tools ↗
```

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Inline styles with design tokens (`src/styles/tokens.js`)
- **Content:** Live pages are authored directly in `app/`. The old JSON content registry has been cleared.
- **Deployment:** Vercel (teg-blue.org)
- **SEO:** robots.js, sitemap.js, opengraph-image.js, JSON-LD structured data

---

## Design System

### Spectrum Colors
```javascript
SPECTRUM = {
  azure: '#4A9BE8',
  blue: '#3B82F6',
  cobalt: '#2563EB',
  indigo: '#4F46E5',
  slate: '#64748B'
}
```

### Key Components
- `SiteHeader` — Main navigation with spectrum bar
- `SiteFooter` — Footer with links to .com
- `PageLayout` — Page wrapper with optional sidebar navigation
- `ResearcherHero` — Standard live-page hero
- `EmotionalGradient` / `GradientMap` — Current home Gradient surfaces
- `SpectrumBar` — Gradient bar at top of header

---

## Staged Routes

The repo keeps route paths for future use, but the content has been cleared. A staged route should contain only:

```javascript
export { metadata } from "@/src/lib/staged-route";
export { default } from "@/src/lib/staged-route";
```

When repopulating a route later, rebuild the page from the current source-of-truth language and add it to `src/lib/live-paths.js` only after review.

---

## Key Files

| File | Purpose |
|------|---------|
| `app/page.js` | Home page |
| `app/about/page.js` | About page |
| `app/foundations/page.js` | TEG-Blue Overview |
| `app/methodology/page.js` | Methodology |
| `app/scientific-foundations/page.js` | Scientific Foundations |
| `src/lib/live-paths.js` | Public route allowlist |
| `src/lib/staged-route.js` | Shared placeholder for cleared routes |
| `src/components/SiteHeader.jsx` | Main navigation |
| `src/components/SiteFooter.jsx` | Footer with .com links |
| `src/styles/tokens.js` | Design tokens |

---
