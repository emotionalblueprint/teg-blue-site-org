# TEG-Blue Research Platform

Open science platform for TEG-Blue research. Designed to be readable by both humans and AI systems.

> **New here?** See the [TEG-Blue Overview](https://github.com/emotionalblueprint/teg-blue-overview) for a complete project map.

## Two Sites, One Framework

TEG-Blue uses two complementary sites:

| Site | URL | Purpose |
|------|-----|---------|
| **teg-blue.com** | [teg-blue-site-com](https://github.com/emotionalblueprint/teg-blue-site-com) | Interactive tools and application for everyday users |
| **teg-blue.org** | This repo | Open science platform for researchers |

**.org** is for research — Publications, theoretical foundations, open research questions, collaboration opportunities.

**.com** is for application — Interactive tools, the Four-Mode Gradient, the 12 Map Levels. Accessible entry points for everyday people.

Both sites link to each other. The .org footer links to .com for interactive tools. The .com header links to .org for open research.

## Architecture Overview

Fractal architecture where every page follows the same structural DNA: **IDENTITY → CONTEXT → CORE → CONNECTIONS → DEPTH**.

## Architecture Overview

```
research-platform/
│
├── src/
│   ├── styles/
│   │   └── tokens.js              ← Design tokens (Blue Spectrum palette, typography, spacing)
│   │
│   ├── types/
│   │   └── research.ts            ← TypeScript types (ResearchNode, Connection, ContentBlock)
│   │
│   ├── lib/
│   │   ├── jsonld.js              ← JSON-LD generators (Schema.org structured data)
│   │   └── content.js             ← Content loader (reads JSON files, resolves connections)
│   │
│   ├── components/
│   │   ├── index.js               ← Component barrel export
│   │   ├── TypeTag.jsx            ← Content type identifier (● PUBLICATION, ● THEORY, etc.)
│   │   ├── StatusBadge.jsx        ← Publication status (Published, Preprint, etc.)
│   │   ├── ExpandableSection.jsx  ← Core content unit (<details>/<summary> for AI crawlability)
│   │   ├── ConnectionCard.jsx     ← Links between research nodes
│   │   ├── GlossaryInline.jsx     ← Inline term with tooltip (<abbr> for accessibility)
│   │   ├── ContextBlock.jsx       ← Summary + Key Finding callout
│   │   ├── ResearchLayout.jsx     ← Page wrapper (header, nav, footer)
│   │   └── SharedComponents.jsx   ← SpectrumBar, DepthBar, SearchInput
│   │
│   └── templates/
│       └── PublicationPage.jsx    ← Full page template for publications
│
├── content/                        ← JSON content files (git-versioned)
│   ├── TEMPLATES.md               ← Blank templates for each content type
│   ├── publications/
│   │   ├── validation-study.json
│   │   └── architecture-paper.json
│   ├── theories/
│   │   ├── polyvagal.json
│   │   └── attachment.json
│   ├── glossary/
│   │   ├── four-mode-gradient.json
│   │   └── regulatory-state.json
│   └── frameworks/                 ← Empty, ready for F1-F12
│
├── app/research/                   ← Next.js page routes
│   ├── publications/[slug]/
│   │   └── index.jsx              ← Dynamic publication pages
│   ├── foundations/
│   ├── glossary/
│   ├── methodology/
│   ├── citations/
│   └── collaborate/
│
└── public/research/                ← Static assets
```

## Design System

**Blue Spectrum** — six flat colors, no gradients:

| Name | Hex | Content Type |
|------|-----|-------------|
| Sky | `#7ABAEB` | Glossary |
| Azure | `#4A9BE8` | Open Data |
| Blue | `#3B7DE5` | Publications |
| Cobalt | `#3560CC` | Frameworks |
| Indigo | `#4A50B0` | Foundations |
| Slate | `#6B7A99` | Methodology |

**Rules:**
- No gradients anywhere
- Dark backgrounds: `#080C18` → `#0C1222` → `#111827` → `#1A2234`
- Fonts: Inter (display) + JetBrains Mono (labels, DOIs, tags)
- `<details>/<summary>` for all expandable sections (native HTML, AI-readable)
- JSON-LD on every page
- Max 7 expandable sections per page

Full design system spec: `teg-blue-research-design-system.md`

## How to Add Content

1. Copy the relevant template from `content/TEMPLATES.md`
2. Fill in all fields
3. Save as `your-slug.json` in the appropriate `content/` subfolder
4. Add connections to/from existing content
5. The page generates automatically — no code changes needed

## Key Technical Decisions

| Decision | Rationale |
|----------|-----------|
| JSON content files (not MDX) | Simpler for non-developers, easy to validate, works with any renderer |
| `<details>/<summary>` | Native HTML, zero JS, fully accessible, AI crawlers see all content |
| JSON-LD on every page | Schema.org structured data for AI comprehension |
| Static generation | Pre-rendered at build time for speed (Lighthouse 95+) |
| Flat colors only | Distinct from main TEG-Blue site, simpler rendering, cleaner feel |
| Connection system | Every node links to others via typed relationships, creating a knowledge graph |

## Deployment

This site is deployed on [Vercel](https://vercel.com) as a standalone site.

- **Production**: https://teg-blue.org
- **Preview**: Automatic for pull requests

### Tech Stack
- Next.js 14 (App Router)
- No additional packages required
- Fonts: Inter + JetBrains Mono

### Key Pages

| Page | Path | Purpose |
|------|------|---------|
| Hub | `/` | Content grid with all publications, theories, glossary |
| For Researchers | `/research-entry` | Entry point explaining TEG-Blue structure |
| Publications | `/publications` | Published research and validation studies |
| Theory Map | `/theoretical-foundations` | 12 frameworks with 145+ source theories |
| Glossary | `/glossary` | Key terms and definitions |
| Collaborate | `/collaborate` | Collaboration opportunities |

---

*TEG-Blue Research Platform · v1.0 · Anna Paretas-Artacho*
