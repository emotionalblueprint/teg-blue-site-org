# TEG-Blue Research Platform (.org)

## Quick Start

**When the user says "working on teg-blue.org" or "the research platform":**
1. Navigate to `/Users/annaparetas/Projects/teg-blue-site-org`
2. Check if dev server is running: `lsof -i :3001` (uses port 3001)
3. If not running, start it: `npm run dev`
4. Open Chrome to http://localhost:3001

---

## Purpose

**teg-blue.org** is the open science platform for TEG-Blue research. It hosts:
- Publications and validation studies
- Theoretical foundations (139+ source theories)
- Open research questions
- Collaboration opportunities for researchers

All content is designed to be readable by both humans and AI systems.

---

## Relationship to .com

| Site | Purpose | Audience |
|------|---------|----------|
| **teg-blue.com** | Interactive tools & application | Everyday people, practitioners |
| **teg-blue.org** | Open science & research | Researchers, academics |

**.com links to .org** for open research, theoretical foundations, publications.
**.org links to .com** for interactive tools.

---

## Two-Layer Architecture

TEG-Blue is organized in two layers:

### 1. Measurement System: The Four-Mode Gradient
The observable, testable backbone. Measures nervous system regulatory states that shift in response to perceived threat and can be detected in natural language.

**Connection → Protection → Control → Domination**

These are not personality types or diagnostic categories. They are **nervous system states** — regulatory positions that shift in response to perceived threat, shaped by attachment history, social context, and current capacity.

### 2. Explanatory Architecture: 12 Frameworks
Sits behind the gradient. Explains:
- **Why** the four modes exist
- **How** individual regulation patterns scale into social structures
- **Where** protection tips into domination
- **What** makes change possible

The frameworks integrate 139+ established theories across neuroscience, psychology, sociology, and trauma studies.

---

## The Core Testable Claim

> The key variable that predicts relational and behavioral outcomes is not a person's current regulatory state, but their **capacity to return to Connection when challenged.**

This capacity is measurable. It shows up in language. It appears to be predicted by **complexity markers** — signs of self-awareness, perspective-taking, and emotional differentiation.

---

## What Is Original

The 12 frameworks draw on 139+ established theories. Every source theory is credited. **The originality is not in the individual theories — it is in the connections between them.**

These research traditions developed independently, within separate disciplines, often without reference to each other. TEG-Blue proposes specific cross-disciplinary connections:

| Connection | What It Means |
|------------|---------------|
| Nervous system regulation → moral perception | Regulatory state shapes which moral judgments a person makes |
| Attachment patterns → social stratification | Same protective mechanisms that organize individual identity also organize social hierarchies |
| Self-protection → domination as continuous gradient | From legitimate self-protection through ego protection through control to domination — with identifiable transition markers |
| Linguistic complexity → regulatory capacity | Specific linguistic markers indicate capacity to return to Connection |

---

## How TEG-Blue Was Developed

**The architecture:** Developed by Anna Paretas-Artacho over nearly two years of independent research, drawing on a lifetime of observing patterns in human behavior, systems thinking, personal experience, and cross-disciplinary reading.

**The literature mapping:** Once the architecture was established, AI research tools (Claude, ChatGPT Deep Research) were used to systematically identify which established theories and researchers align with each framework's propositions. The architecture determined the connections. The AI tools helped locate and organize the corresponding academic literature.

**The status:** The theoretical mapping is a working hypothesis — a starting point for deeper scholarly validation. Human researchers are needed to verify accuracy, correct errors, and deepen the analysis.

---

## Validation Study

DOI: 10.5281/zenodo.18428907

A computational analysis of 10,000+ natural conflict narratives (Reddit AITA posts) tested whether the four-mode gradient could be reliably detected in unstructured text.

**Key findings:**
- All four regulatory modes were successfully detected using polyvagal markers, contempt markers, and moral disengagement markers
- 33.8% of individuals escalated toward Control/Domination when challenged
- 22.2% de-escalated toward Connection
- De-escalators showed **78% higher rates of complexity markers** than escalators
- Mode classifications correlated with independent community moral judgments

---

## Site Structure

### Key Pages

| Page | Path | Purpose |
|------|------|---------|
| Hub | `/` | Content grid showing all publications, theories, etc. |
| For Researchers | `/research-entry` | Entry point explaining TEG-Blue structure, what's original, open questions |
| Publications | `/publications` | Published research and validation studies |
| Theory Map | `/theoretical-foundations` | 12 frameworks with 139+ source theories |
| Glossary | `/glossary` | Key terms and definitions |
| About | `/about` | About TEG-Blue and the research consortium |
| Collaborate | `/collaborate` | Collaboration opportunities |

### Navigation

```
Hub | For Researchers | Publications | Theory Map | Glossary | About | Collaborate
```

---

## The 12 Frameworks

Organized into five phases:

| Phase | Frameworks | What They Explain |
|-------|-----------|-------------------|
| **Formation** | F1-F3 | How nervous system states form, how identity organizes around them |
| **Scaling** | F4-F6 | How individual regulation patterns become social structures |
| **Turning Point** | F7 | How protection escalates into domination |
| **Healing** | F8-F10 | How patterns shift, including neurodivergent pathways |
| **Integration** | F11-F12 | The complete architecture and its internal logic |

---

## Open Research Questions

Five priority questions for researchers:

1. **Complexity markers** — Can they be standardized as a psychometric instrument?
2. **Escalation pathways** — What do they look like in natural language?
3. **Four-mode classification** — Can it be reproduced by independent researchers?
4. **Regulatory state → moral perception** — Does state shape moral judgment?
5. **Emotional Tools validation** — Can they be validated as psychometric instruments?

Full details at `/research-entry`.

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

## Voice & Style

- **Tone:** Academic but accessible, grounded, honest
- **Attribution:** Always credit source theories and researchers
- **Transparency:** Clear about AI-assisted literature mapping
- **Open science:** Invite corrections and collaboration

---

*Last updated: February 2026*
