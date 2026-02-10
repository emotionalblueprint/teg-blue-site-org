# Context for Claude Code: TEG-Blue Research Platform Implementation

This research platform is being integrated into the existing teg-blue.com Next.js project (already on Vercel). It lives under `/research/*`. Here's what matters beyond the README:

## Design intent

- This is the **open science wing** of TEG-Blue — visually related to the main site (same fonts, same dark-first approach) but intentionally distinct. The main site uses a full rainbow palette with gradients and glows. The research platform uses **only the Blue Spectrum (6 flat tones) and never uses gradients, glows, or the mode colors (teal/yellow/orange/pink)**. This separation is a deliberate brand decision.
- The backgrounds are **cooler and deeper** than the main site (`#080C18` vs `#0a0f1e`). This is intentional — the research space should feel quieter.
- The main TEG-Blue design system file is attached for reference but **do not pull rainbow colors, component colors, or mode colors into the research platform**. Only use what's defined in `src/styles/tokens.js`.

## The fractal principle

- Every page, card, and tooltip follows the same 5-part structure: IDENTITY → CONTEXT → CORE → CONNECTIONS → DEPTH. This is not just an organizational idea — it's the actual component architecture. The same `ExpandableSection` component renders inside a publication page, a theory card, and a glossary entry. One template, infinite content.

## AI crawlability is a first-class concern

- All expandable sections MUST use native `<details>/<summary>` HTML — not JavaScript-driven accordions. The content must be in the DOM whether expanded or not, so crawlers see everything.
- Every page needs JSON-LD structured data generated from the content JSON files. The generators are in `src/lib/jsonld.js`.
- Use semantic HTML: `<article>`, `<nav aria-label>`, `<aside>`, `<abbr title>` for glossary terms.
- Dublin Core meta tags on every page alongside Open Graph.

## Content system

- Content lives in `/content/` as flat JSON files — not MDX, not a CMS. This is intentional for simplicity and git-versioning.
- The `content.js` loader resolves connections between nodes at build time. When a publication references a theory, the connection card should show the theory's actual title and author pulled from its JSON file, not just the slug.
- Blank templates for each content type are in `content/TEMPLATES.md`.

## What's ready vs what needs building

- ✅ Ready: All components, tokens, types, content loader, JSON-LD generators, publication page template, 6 content files
- 🔨 Needs building: Research hub index page (`/research`), Foundations page with theory grid, Glossary page with search, Methodology/Citations/Collaborate pages (simpler static pages), sitemap integration, global CSS reset for the research section

## Priority order for page implementation

1. `/research` — Hub with filterable grid of all content nodes
2. `/research/publications/[slug]` — Already templated, wire it up
3. `/research/foundations` — Theory cards grouped by domain, expandable
4. `/research/glossary` — Searchable list, each term expandable
5. Static pages (methodology, citations, collaborate)
