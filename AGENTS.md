# AGENTS.md

Guidance for Codex and other coding agents working in this repository. This file is the repo-local source of truth for agent workflow, technical rules, live route structure, and `.org` writing guardrails.

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

### On Startup

Use the repo itself as the source of truth. Do not assume an external health script or agent-specific companion file exists.

1. Read this file for current writing, structure, and technical rules.
2. Run `git status --short --branch` and report the working-tree state briefly, including unrelated dirty files you will leave untouched.
3. Check for unpushed commits with the branch status output before requested commit or push work.
4. For code sessions, check for accidental debug output with `rg -n "console\\.log"`.
5. Inspect the files needed for the task before editing; prefer targeted diffs and existing repo patterns over broad refactors.

### On Wrap-Up

When the user says "let's wrap up", "push", or the session is ending:

1. Remove any `console.log` calls you added during the session.
2. Run `git diff --check` before committing.
3. Run verification scaled to the change: `npm run lint` for code changes, `npm run build` for route, layout, metadata, or behavior changes, and browser QA for visual or user-facing layout changes when feasible.
4. Review `git status --short` and stage only the intended files. Leave unrelated dirty files untouched and name them in the final note if relevant.
5. If checks pass and the user asked to commit or push, commit and push the intended changes. Otherwise, offer the next action.
6. Update any active `_session-state.md` files in vault directories you worked in.
7. Update `teg-blue-vault/_plans/pending-tasks.md` with unfinished work, open decisions, and what the next session should start with.

`teg-blue-vault/` is the promoted vault. Archive material may still exist at `teg-blue-vault-archive/`.

## Debt Prevention Rules

1. **Remove console.logs before committing.** `.org` has no legitimate `console.log` locations.
2. **Never hardcode colors.** Use `src/styles/tokens.js` values such as `SPECTRUM`, `TEXT`, `BG`, `BORDER`, mode tokens, and palette helpers.
3. **No new CSS files or Tailwind classes.** Styling should use inline styles with design tokens unless an existing global rule must be adjusted.
4. **When removing a feature, delete all its files in the same commit.** Components, routes, content files, and related helpers should not be left orphaned.
5. **When inlining a component, delete the old file.**
6. **When removing a package, also run `npm install`** to update the lockfile.
7. **Only add `'use client'` to files that actually use hooks, event handlers, or browser APIs.**
8. **Commit frequently, push at end of session.** Do not let unpushed commits accumulate across sessions.
9. **When adding a dependency, update the lockfile and call out the dependency change in the commit or final note.**
10. **Import page components directly from their files.** Avoid `src/components/index.js` barrels for live pages so Next.js keeps client-component hydration boundaries explicit.

All plans, specs, strategy docs, audits, and page specifications live in the vault. This repo contains only code, configs, live page source, and staged route placeholders. If Anna might need to read it as strategy or planning material, it belongs in `teg-blue-vault/`, not this repository.

## System Context

For shared writing rules, use the current auto-memory and the vault writing references:

- `teg-blue-vault/_system/writing-foundations.md`
- `teg-blue-vault/_system/writing-style-org-pages.md`

`.org` links to `.com` for interactive tools. `.com` links to `.org` for open research.

## Purpose

`teg-blue.org` is the academic and practitioner-facing platform for TEG-Blue research. Its audience is researchers, scientists, academics, and practitioners, not the general public.

All `.org` content falls under Tier 3: Researcher and Frameworks. Content should be readable by both humans and AI systems.

## Moral/Capacity Frame

TEG-Blue writing keeps impact, mechanism, capacity, and response separate.

When writing about behavior or harm, do not collapse the behavior into a person-verdict, and do not use nervous-system state to explain harm away. The base question is:

> Is this a nervous system defending against perceived threat, or is this a pattern of intentional harm where empathy, accountability, or repair is absent?

Write from observable mechanism:

- What happened?
- What impact or harm occurred?
- What state-dependent capacity was available or unavailable?
- What response fits the pattern: boundary, protection, accountability, repair, support, or further study?

Use the effect-over-time filter:

- Can impact be named?
- Can empathy stay present?
- Can accountability land?
- Can repair change the pattern?
- Can reality stay discussable?
- As safety increases, do these capacities return, or does the pattern keep reducing clarity, autonomy, or repair?

Allowed mechanism-effect language includes `harmful pattern`, `coercive-control pattern`, `empathy-disabled regulation`, `dominance-recruiting pattern`, `protective organization`, `collapse of available capacity`, and `repair capacity unavailable`.

Avoid person-verdict language such as `bad`, `evil`, `toxic person`, `narcissist`, `abuser`, `manipulator`, `broken`, `flawed`, `weak`, `lazy`, or `selfish` unless quoting or documenting source terminology with clear context.

Do not argue with the moral frame in public copy. Avoid phrases like `not a character flaw`, `not weakness`, `not an excuse`, `this does not make someone bad`, or `just a nervous-system response`. Instead, name the mechanism and the impact directly.

Preferred pattern:

> The base read is effect over time: can impact be named, can empathy stay present, can accountability land, can repair change the pattern, and can reality stay discussable? If those capacities return as safety increases, the pattern may be protective. If they remain absent and the pattern keeps reducing clarity, autonomy, or repair, the response moves toward boundary, protection, and accountability.

## Site Structure

### Live Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Public doorway for TEG-Blue: The Emotional Gradient Blueprint and the central Nervous System Gradient map. |
| About | `/about` | Project identity, founder, research stance, contact routes, and site distinction. |
| TEG-Blue Overview | `/foundations` | Blueprint overview, Nervous System Gradient map, responsible pattern reading, scope, and research status. |
| Scientific Grounding | `/scientific-foundations` | Research areas, field boundaries, and claim discipline behind the Gradient. |
| Ethics | `/ethics` | Dignity, agency, source honesty, attribution, permission, impact, and repair. |
| Glossary | `/glossary` | Current public terms for the Blueprint and the central map. |

All other `app/**/page.js` routes are staged placeholders that re-export `src/lib/staged-route.js` or are redirected by `next.config.js`. Keep them empty until Anna explicitly repopulates a route. `/collaborate`, `/publications`, and `/citations` are not public pages right now; only rebuild them later if the claim audit supports a reviewed public route. Do not use non-live routes as source context for current `.org` work.

### Navigation

```text
Home | Explore: About, TEG-Blue overview, Scientific grounding, Ethics, Glossary | Practical tools
```

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Inline styles with design tokens from `src/styles/tokens.js`
- **Content:** Live pages are authored directly in `app/`
- **Deployment:** Vercel at `teg-blue.org`
- **SEO:** `robots.js`, `sitemap.js`, `opengraph-image.js`, JSON-LD structured data

## Key Components

- `SiteHeader` - Main navigation with spectrum bar
- `SiteFooter` - Footer with links to `.com`
- `PageLayout` - Page wrapper with optional sidebar navigation
- `ResearcherHero` - Standard live-page hero
- `EmotionalGradient` / `GradientMap` - Current home Gradient surfaces
- `SpectrumBar` - Gradient bar at top of header

## Staged Routes

The repo keeps route paths for future use, but the content has been cleared. A staged route should contain only:

```javascript
export { metadata } from "@/src/lib/staged-route";
export { default } from "@/src/lib/staged-route";
```

When repopulating a route later, rebuild the page from current source-of-truth language and add it to `src/lib/live-paths.js` only after review.

## Key Files

| File | Purpose |
|------|---------|
| `app/page.js` | Home page |
| `app/about/page.js` | About page |
| `app/foundations/page.js` | TEG-Blue Overview |
| `app/scientific-foundations/page.js` | Scientific Foundations |
| `app/ethics/page.js` | Ethics |
| `app/glossary/page.js` | Glossary |
| `src/lib/live-paths.js` | Public route allowlist |
| `src/lib/staged-route.js` | Shared placeholder for cleared routes |
| `src/components/SiteHeader.jsx` | Main navigation |
| `src/components/SiteFooter.jsx` | Footer with `.com` links |
| `src/styles/tokens.js` | Design tokens |
