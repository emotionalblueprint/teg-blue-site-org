# TEG-Blue .org

Public framework and research-grounding home for **TEG-Blue: The Emotional Gradient Blueprint** — a layered visual framework that maps how emotions, nervous systems, survival strategies, identity, and social patterns form and evolve.

The current public center of the site is **The Nervous System Gradient**: a research-grounded, read-first map of how nervous-system state changes reshape perception, emotion, body activation, behavior, and repair.

This repo keeps the framework and its research context close together: scientific foundations, source traces, methodology, working questions, citations, publication pages, glossary, and collaboration/research materials.

> **New here?** See the [TEG-Blue Overview](https://github.com/emotionalblueprint/teg-blue-overview) for a complete project map.

## License and Attribution

TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient were created by Anna Paretas-Artacho.

Original TEG-Blue framework content in this repository is published under CC BY-NC-SA 4.0 unless otherwise noted. Reuse must preserve visible attribution to Anna Paretas-Artacho and https://teg-blue.org. Commercial use, paid product integration, proprietary dataset or model integration, sublicensing, monetized reuse, or institutional implementation requires explicit written permission or a separate license.

See [LICENSE.md](./LICENSE.md) for the full repository notice.

## Two Sites, One Project

TEG-Blue uses two complementary sites:

| Site | URL | Purpose |
|------|-----|---------|
| **teg-blue.org** | This repo | Public framework and research-grounding home, currently centered on The Nervous System Gradient |
| **teg-blue.com** | [teg-blue-site-com](https://github.com/emotionalblueprint/teg-blue-site-com) | Practical public tools and application surfaces |

**.org** is the public framework and research-grounding home. It can describe methodology, source traces, publications, scientific foundations, working questions, and research grounding.

**.com** remains the practical public tools surface. The **TEG-Blue Engine** is separate applied/licensable tool-building logic for turning the architecture into specific tools and institutional implementations.

Both sites link to each other, with .org carrying the framework and research context, and .com carrying applied public tools.

## Architecture Overview

This is a Next.js App Router site. The homepage (`app/page.js`) leads with The Nervous System Gradient and mounts the interactive `EmotionalGradient` component. Supporting routes preserve the research grounding, foundations, methodology, publications, glossary, collaboration, working questions, and source-trace material.

```
teg-blue-site-org/
├── app/
│   ├── page.js                       <- Nervous System Gradient homepage
│   ├── about/
│   ├── foundations/
│   ├── scientific-foundations/
│   ├── methodology/
│   ├── publications/
│   ├── glossary/
│   ├── collaborate/
│   ├── model/                        <- supporting model/source-trace pages
│   └── framework/                    <- supporting framework/source-trace pages
│
├── content/                          <- JSON content files (git-versioned)
│   ├── TEMPLATES.md                  <- Blank templates for content types
│   ├── publications/
│   ├── theories/
│   └── frameworks/
│
├── src/
│   ├── components/                   <- Site UI, gradient, diagrams, research components
│   ├── lib/                          <- Gradient data, content loading, JSON-LD, routing helpers
│   ├── styles/
│   ├── templates/
│   └── types/
│
└── public/                           <- Static assets, fonts, verification files
```

## Design System

**Blue Spectrum** - blue-spectrum palette used across research and instrument surfaces:

| Name | Hex | Content Type |
|------|-----|-------------|
| Sky | `#7ABAEB` | Glossary |
| Azure | `#4A9BE8` | Source traces |
| Blue | `#3B7DE5` | Publications |
| Cobalt | `#3560CC` | Frameworks |
| Indigo | `#4A50B0` | Foundations |
| Slate | `#6B7A99` | Methodology |

**Rules:**
- Use flat color surfaces for research content; use gradients intentionally where they communicate the gradient/instrument itself
- Dark backgrounds: `#080C18` -> `#0C1222` -> `#111827` -> `#1A2234`
- Fonts: Inter (display) + JetBrains Mono (labels, DOIs, tags)
- `<details>/<summary>` for expandable sections where native disclosure fits
- JSON-LD for structured page context
- Max 7 expandable sections per page

## How to Add Content

1. Copy the relevant template from `content/TEMPLATES.md`
2. Fill in all fields
3. Save as `your-slug.json` in the appropriate `content/` subfolder
4. Add connections to/from existing content
5. Content-backed pages generate from JSON where the route uses the content loader

## Key Technical Decisions

| Decision | Rationale |
|----------|-----------|
| JSON content files (not MDX) | Simpler for non-developers, easy to validate, works with any renderer |
| `<details>/<summary>` | Native HTML, zero JS, accessible disclosure where content benefits from expansion |
| JSON-LD | Schema.org structured data for search, sharing, and entity context |
| Static generation | Pre-rendered where possible for speed |
| Blue-spectrum visual system | Keeps research, diagrams, and instrument surfaces visually connected |
| Connection system | Every node links to others via typed relationships, creating a knowledge graph |

## Deployment

This site is deployed on [Vercel](https://vercel.com) as a standalone site.

- **Production**: https://teg-blue.org
- **Preview**: Automatic for pull requests

### Tech Stack
- Next.js 14 (App Router)
- React 18
- Tailwind/PostCSS config
- Vercel Analytics, next-themes, lucide-react
- Fonts: Inter + JetBrains Mono

### Key Pages

| Page | Path | Purpose |
|------|------|---------|
| Nervous System Gradient | `/` | Public read-first framework homepage with the interactive gradient component |
| How It Works | `/how-it-works` | Short explanatory entry into the gradient |
| Scientific Foundations | `/scientific-foundations` | Research grounding and source traces |
| Foundations | `/foundations` | Foundational concepts and context |
| Methodology | `/methodology` | Research method and evidence orientation |
| Publications | `/publications` | Publications, working papers, and research materials |
| Glossary | `/glossary` | Key terms and definitions |
| Collaborate | `/collaborate` | Collaboration and research opportunities |

---

*TEG-Blue .org · The Nervous System Gradient · Anna Paretas-Artacho*
