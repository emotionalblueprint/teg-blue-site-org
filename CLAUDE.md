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
10. **Export all components from `src/components/index.js`.** Keep the barrel file up to date.

> **All plans, specs, strategy docs, audits, and page specifications live in the vault.** This folder contains only code, configs, and content JSON. If Anna might need to read it, it belongs in `teg-blue-vault/`.

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

---

## Site Structure

### Key Pages

| Page | Path | Purpose |
|------|------|---------|
| Hub | `/` | Content grid showing all publications, theories, etc. |
| For Researchers | `/research-entry` | Entry point explaining TEG-Blue structure, what's original, open questions |
| Publications | `/publications` | Published research and validation studies |
| Theory Map | `/theoretical-foundations` | 12 frameworks with 145+ source theories |
| Glossary | `/glossary` | Key terms and definitions |
| About | `/about` | About TEG-Blue and the research consortium |
| Collaborate | `/collaborate` | Collaboration opportunities |

### Navigation

```
Hub | For Researchers | Publications | Theory Map | Glossary | About | Collaborate
```

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Inline styles with design tokens (`src/styles/tokens.js`)
- **Content:** Markdown files in `content/` directory, loaded at build time
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
- `ContentGrid` — Grid display for content items
- `SpectrumBar` — Gradient bar at top of header

---

## Content Files

Content is stored in `content/` directory as markdown with YAML frontmatter:

```
content/
├── publications/     # Research papers, validation studies
├── theories/         # Theoretical foundation pages
└── glossary/         # Glossary terms
```

Each file has:
```yaml
---
title: "Title"
slug: "url-slug"
type: "publication" | "theory" | "glossary"
date: "2026-02-10"
status: "published" | "draft"
---

Content in markdown...
```

---

## Key Files

| File | Purpose |
|------|---------|
| `app/page.js` | Home page (Hub) |
| `app/research-entry/page.js` | Research Entry Point |
| `app/theoretical-foundations/page.js` | Theory Map with 12 frameworks |
| `app/publications/page.js` | Publications listing |
| `src/components/SiteHeader.jsx` | Main navigation |
| `src/components/SiteFooter.jsx` | Footer with .com links |
| `src/styles/tokens.js` | Design tokens |
| `src/lib/content.js` | Content loading utilities |

---

## Validation Study

DOI: 10.5281/zenodo.18428907

Kept here as reference for when the DOI needs to appear in code or metadata.
