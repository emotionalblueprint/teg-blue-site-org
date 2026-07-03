# TEG-Blue .org

Public framework and research-grounding home for **TEG-Blue: The Emotional Gradient Blueprint** — a layered visual framework that maps how emotions, nervous systems, survival strategies, identity, social patterns, and repair capacity form and evolve.

The central public map inside the framework is **The Nervous System Gradient**: a visual map of how emotional, bodily, and relational patterns shift across safety, threat, control, shutdown, regulation, and repair.

This repo keeps the framework and its research context close together: scientific grounding, responsible pattern-reading guidance, working questions, publication records, citation guidance inside `/publications`, glossary, and collaboration/research materials.

> **New here?** See the [TEG-Blue Overview](https://github.com/emotionalblueprint/teg-blue-overview) for a complete project map.

## License and Attribution

TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient were created by Anna Paretas-Artacho.

Original TEG-Blue framework content in this repository is published under CC BY-NC-SA 4.0 unless otherwise noted. Reuse must preserve visible attribution to Anna Paretas-Artacho and https://teg-blue.org. Commercial use, paid product integration, proprietary dataset or model integration, sublicensing, monetized reuse, or institutional implementation requires explicit written permission or a separate license.

See [LICENSE.md](./LICENSE.md) for the full repository notice.

## Two Sites, One Project

TEG-Blue uses two complementary sites:

| Site | URL | Purpose |
|------|-----|---------|
| **teg-blue.org** | This repo | Public framework and research-grounding home for The Emotional Gradient Blueprint |
| **teg-blue.com** | [teg-blue-site-com](https://github.com/emotionalblueprint/teg-blue-site-com) | Practical public tools and application surfaces |

**.org** is the public framework and research-grounding home. It can describe responsible pattern reading, publications, citation guidance inside `/publications`, scientific grounding, working questions, and research grounding.

**.com** remains the practical public tools surface. The **TEG-Blue Engine** is separate applied/licensable tool-building logic for turning the architecture into specific tools and institutional implementations.

Both sites link to each other, with .org carrying the framework and research context, and .com carrying applied public tools.

## Architecture Overview

This is a Next.js App Router site. The homepage (`app/page.js`) leads with TEG-Blue: The Emotional Gradient Blueprint and mounts the interactive `EmotionalGradient` component for The Nervous System Gradient. Supporting routes preserve the research grounding, responsible pattern-reading guidance, ethics, publications and citation guidance, glossary, and collaboration material.

```
teg-blue-site-org/
├── app/
│   ├── page.js                       <- Emotional Gradient Blueprint homepage
│   ├── about/
│   ├── foundations/
│   ├── scientific-foundations/
│   ├── methodology/
│   ├── ethics/
│   ├── publications/
│   ├── glossary/
│   ├── collaborate/
│   ├── citations/                    <- staged; redirects to /publications for now
│   ├── model/                        <- staged older model placeholders
│   └── framework/                    <- staged older framework placeholders
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
| Sky | `#b6ebfc` | Glossary |
| Azure | `#76e2ff` | Source traces |
| Blue | `#00b1ff` | Publications |
| Cobalt | `#0590e5` | Frameworks |
| Indigo | `#7b7bff` | Foundations |
| Slate | `#808493` | Responsible pattern reading |

**Rules:**
- Use flat color surfaces for research content; use gradients intentionally where they communicate the gradient/instrument itself
- Dark backgrounds: `#111729` -> `#151c35` -> `#131a2f` -> `#1a2240` -> `#162035`
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
| Home | `/` | Public doorway for TEG-Blue: The Emotional Gradient Blueprint |
| About | `/about` | Project identity, founder, research stance, contact routes, and site distinction |
| TEG-Blue Overview | `/foundations` | Blueprint overview, Nervous System Gradient map, responsible pattern reading, scope, and research status |
| Pattern reading | `/methodology` | Observation, interpretation, impact, claim status, responsible use, and limits |
| Scientific Grounding | `/scientific-foundations` | Research areas, field boundaries, and claim discipline behind the Gradient |
| Ethics | `/ethics` | Dignity, agency, source honesty, attribution, permission, impact, and repair |
| Publications | `/publications` | Public records, release pointers, citation guidance, public description notes, and reuse posture |
| Glossary | `/glossary` | Current public terms for the Blueprint and the central map |
| Collaborate | `/collaborate` | Research review, applied builds, and licensing conversations |

---

*TEG-Blue .org · The Emotional Gradient Blueprint · Anna Paretas-Artacho*
