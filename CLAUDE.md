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

---

## Purpose & Identity

**teg-blue.org** is the academic and practitioner-facing platform for TEG-Blue research. Its audience is researchers, clinicians, and serious practitioners — not the general public (that's teg-blue.com).

All content is designed to be readable by both humans and AI systems.

## Site Goals (in priority order)

> **Full reference:** `CLAUDE-org-site-goals.md` — complete goals, writing principles, model positioning, and origin framing.

1. **Build academic credibility and research partnerships** — Demonstrate precise, accurate handling of existing literature with appropriate humility. Make falsifiable claims visible and explicit. Function as a research invitation, not just a presentation.
2. **Convert practitioners into users of the framework** — Answer: "Does this change how I work tomorrow?" Entry point is always a problem they already have. Show TEG-Blue has a precise account of exactly those situations.
3. **Establish TEG-Blue as a citable theoretical contribution** — Earned by doing goals 1 and 2 well enough that the field begins citing independently. The site creates conditions for this — it does not claim it.

### Governing Writing Principle: Anchor — Gap — Contribution

Every section of every page follows this structure:
- **Anchor:** Name what existing research established — precisely, with correct attribution
- **Gap:** Name where that research stopped — specific, not general, not criticism
- **Contribution:** Show what TEG-Blue does from exactly that stopping point — not competing, picking up where it left off

### What the Site Must Not Do

- Do not convince through volume — precision over quantity
- Do not front-run legitimacy — demonstrate, let the field decide
- Do not write for the general public — assume readers who know the literature
- Do not bury testable claims — make predictions explicit and testable

---

## Emotional Technology

**Emotional technology** is our term for tools and systems that help measure, understand, and navigate human emotions — with the same clarity we expect from physical or digital technologies.

TEG-Blue is the first complete emotional technology system. It turns invisible emotional patterns into visible, structured, computationally legible tools.

**Key vocabulary:**
- **Emotional Architecture**: The structure of emotional patterns within people, families, and systems
- **Emotional Wiring**: How the nervous system learned to feel, respond, and protect
- **Emotional Miswiring**: Protective patterns that now create harm
- **Emotional Infrastructure**: The larger systems that support — or fail to support — emotional safety

### "Emotional Technology" — Term History

The term **"Emotional Technology"** was first documented in **September 2025**:

| Date | Source | Usage |
|------|--------|-------|
| **Sept 2025** | `tegblue-backbone.md` | "Emotional Technology Infrastructure" — technical foundations for AI, research, education |
| **Nov 2025** | Research Matrix | "TEG-Blue™ — Emotional Technology" (tagline) |
| **Feb 18, 2026** | Full integration | Implemented across all sites, GitHub repos, and documentation |

---

## Relationship to .com

| Site | Purpose | Audience |
|------|---------|----------|
| **teg-blue.com** | Interactive tools & application | Anyone seeking clarity about patterns |
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

The frameworks integrate 145+ established theories across neuroscience, psychology, sociology, and trauma studies.

---

## The Core Testable Claim

> The key variable that predicts relational and behavioral outcomes is not a person's current regulatory state, but their **capacity to return to baseline when challenged.**

This capacity is measurable. It shows up in language. It appears to be predicted by **complexity markers** — signs of self-awareness, perspective-taking, and emotional differentiation.

---

## What Is Original

The 12 frameworks draw on 145+ established theories. Every source theory is credited. **The originality is not in the individual theories — it is in the connections between them.**

These research traditions developed independently, within separate disciplines, often without reference to each other. TEG-Blue proposes specific cross-disciplinary connections:

| Connection | What It Means |
|------------|---------------|
| Nervous system regulation → moral perception | Regulatory state shapes which moral judgments a person makes |
| Attachment patterns → social stratification | Same protective mechanisms that organize individual identity also organize social hierarchies |
| Self-protection → domination as continuous gradient | From legitimate self-protection through ego protection through control to domination — with identifiable transition markers |
| Linguistic complexity → regulatory capacity | Specific linguistic markers indicate capacity to return to baseline |

---

## How TEG-Blue Was Developed

**The architecture:** Developed by Anna Paretas-Artacho over nearly two years of independent research, drawing on a lifetime of observing patterns in human behavior, systems thinking, personal experience, and cross-disciplinary reading.

**The literature mapping:** Once the architecture was established, AI research tools (including ChatGPT Deep Research, Claude, Perplexity, and Microsoft Copilot) were used to systematically identify which established theories and researchers align with each framework's propositions. The architecture determined the connections. The AI tools helped locate and organize the corresponding academic literature.

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
| Theory Map | `/theoretical-foundations` | 12 frameworks with 145+ source theories |
| Glossary | `/glossary` | Key terms and definitions |
| About | `/about` | About TEG-Blue and the research consortium |
| Collaborate | `/collaborate` | Collaboration opportunities |

### Navigation

```
Hub | For Researchers | Publications | Theory Map | Glossary | About | Collaborate
```

---

## The 12 Frameworks

Organized into three arcs:

| Arc | Frameworks | What They Explain |
|-----|-----------|-------------------|
| **Individual** | F1–F3 | The instrument. How the nervous system evaluates safety, how the compass calibrates through development, and how cognition steps in when the return path is missing |
| **Collective** | F4–F7 | The scaling. How individual patterns become shared rules, worth hierarchies, perception biases, and how protection escalates all the way to domination |
| **Repair and Complexity** | F8–F12 | The return. How awareness capacities rebuild, neurodivergent variation, generational transmission, paradox, and the two-information-system architecture underneath |

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

> **Full reference:** `../writing-guidelines.md` (Projects root) — single source of truth for all TEG-Blue writing.
> All .org content falls under **Tier 3: Researcher & Frameworks**.

### Core Principles

1. **Never enter the moral frame.** Never refute moral judgments ("not a character flaw", "not evil"). Never defend. Stay in mechanism. The reader arrives at the reframe without being told.
2. **Anchor — Gap — Contribution.** Every section: name what research established, where it stopped, what TEG-Blue does from that point.
3. **Mechanism-first.** How does this operate? Explain the mechanism. Not what it feels like — how it works.

### Awareness Capacity Naming (MANDATORY)

**Always write full name + initial:** Reading Emotions (RE), Emotional Resonance (ER), Self-Emotional Awareness (SEA) — every mention, every page. Never bare initials. Same format on both sites. Readers build recognition gradually through repeated full-name exposure.

### Quick Rules

- **Never use:** "TEG-Blue proves", "the only framework", "cures/fixes", "diagnosis", "type" (as personality type), therapeutic outcome claims
- **Never use:** "trauma-informed", "victim", "abuse", "trauma" (as noun), "toxic", "healing"
- **Always use:** "working hypothesis", "proposes connections", "synthesizes established research", "nervous system states", "patterns"
- **Always use:** "return to baseline" (not "return to Connection"), "capacity rebuilding", "restoration", "incomplete biological response"
- Avoid "you/your" in explanatory text — use "the framework", "the system", first person plural

### Key Guidelines

- **Mechanistic:** Inputs → mechanisms → outcomes, not just what it feels like
- **Plain-first language:** Simple words first. Technical terms only when they add accuracy
- **Precise:** Define technical terms once, clearly, use consistently
- **Referenced:** Anchor in research traditions without becoming a literature review
- **Professional:** Clinically compatible, calm, practitioner-friendly
- **Integrative:** Show how TEG-Blue maps to existing frameworks (no "we replace them" vibe)
- **Baseline is home:** All modes return to baseline, not to Connection. Chronic Connection is a stuck compass too.

### .org-Specific Rules

- **Attribution:** Always credit source theories and researchers
- **Transparency:** Clear about AI-assisted literature mapping
- **Open science:** Invite corrections and collaboration

---

*Last updated: March 2026*
