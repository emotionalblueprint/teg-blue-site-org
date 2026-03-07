# Mechanics of Phenomena — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the editorial Mechanics of Phenomena section on teg-blue.org with amber/gold accent, two-column reading layout, and 3 content pieces.

**Architecture:** New section at `/mechanics-of-phenomena` with a two-column layout (sticky sidebar + 70ch reading column). Content stored as React components in `_pieces/` directory, shared across main page and individual piece pages. Amber `#f59e0b` accent color differentiates this from the blue-spectrum research pages.

**Tech Stack:** Next.js 14 App Router, inline styles from tokens.js, server components (no client-side JS needed)

---

## File Structure

```
app/mechanics-of-phenomena/
├── page.js                                              # Main page (section header + featured piece)
├── mechanics-config.js                                  # Sidebar data, reading styles, Go Deeper URLs
├── MechanicsLayout.jsx                                  # Two-column responsive layout
├── MechanicsSidebar.jsx                                 # Sticky sidebar with series/piece links
├── GoDeeper.jsx                                         # Amber-tinted panel for framework links
├── _pieces/
│   ├── Piece02WhyPeopleChange.jsx                       # Featured piece content
│   ├── Piece01WhyEvidenceFails.jsx                      # Piece #1 content
│   └── PiecePBN01Octopus.jsx                            # Proofs by Nature #1 content
├── why-humans-are-so-frustrating/
│   ├── 01-why-evidence-fails/page.js                    # Individual piece page
│   └── 02-why-people-change-by-context/page.js          # Individual piece page
└── proofs-by-nature/
    └── 01-octopus-chromatophores/page.js                # Individual piece page
```

**Modified files:**
- `src/styles/tokens.js` — add EDITORIAL color tokens
- `app/globals.css` — add editorial CSS custom properties + link color override
- `src/components/SiteHeader.jsx` — add "Phenomena" nav item

---

## Task 1: Add EDITORIAL tokens and CSS

**Files:**
- Modify: `src/styles/tokens.js` (after line 181, before the helper function)
- Modify: `app/globals.css` (add CSS custom properties + editorial link styles)

**Step 1: Add tokens**

In `src/styles/tokens.js`, add after the `MODE_PINK` line:

```javascript
// ─── EDITORIAL ACCENT (Mechanics of Phenomena section) ──

export const EDITORIAL = {
  accent:      '#f59e0b',  // amber-500 — primary editorial accent
  accentLight: '#fbbf24',  // amber-400 — hover/active
  accentMuted: '#92400e',  // amber-900 — subtle backgrounds
};
```

**Step 2: Add CSS custom properties**

In `app/globals.css`, add to `:root` block (after border variables):

```css
/* Editorial section */
--editorial-accent: #f59e0b;
--editorial-accent-light: #fbbf24;
```

In `[data-theme="light"]` block, add:

```css
--editorial-accent: #d97706;
--editorial-accent-light: #b45309;
```

**Step 3: Add editorial link styles**

In `app/globals.css`, add after the existing `a:hover` rule:

```css
/* ─── EDITORIAL SECTION LINK OVERRIDE ──────────────── */

.mop-reading a {
  color: var(--editorial-accent);
  text-decoration-color: color-mix(in srgb, var(--editorial-accent) 40%, transparent);
}

.mop-reading a:hover {
  color: var(--editorial-accent-light);
  text-decoration-color: var(--editorial-accent-light);
}
```

**Step 4: Commit**

```bash
git add src/styles/tokens.js app/globals.css
git commit -m "feat: add EDITORIAL tokens and CSS for Mechanics of Phenomena"
```

---

## Task 2: Create mechanics-config.js

**Files:**
- Create: `app/mechanics-of-phenomena/mechanics-config.js`

**Step 1: Write config file**

```javascript
/**
 * Mechanics of Phenomena — Section Configuration
 *
 * Sidebar data, reading column styles, and Go Deeper URL mappings.
 * Update this file when adding new pieces.
 */

import { TEXT, FONT, EDITORIAL, hexToRgba } from "@/src/styles/tokens";

// ─── SIDEBAR DATA ────────────────────────────────────────

export const SERIES = [
  {
    slug: "why-humans-are-so-frustrating",
    name: "Why Humans Are So Frustrating",
    description:
      "Patterns behind behaviors that are hard to understand — the ones experts keep encountering and can\u2019t fully resolve with their own tools.",
    pieces: [
      {
        number: 2,
        slug: "02-why-people-change-by-context",
        title: "Why People Are Completely Different Depending on Who\u2019s Watching",
        featured: true,
      },
      {
        number: 1,
        slug: "01-why-evidence-fails",
        title: "Why Evidence Doesn\u2019t Work",
      },
    ],
  },
  {
    slug: "proofs-by-nature",
    name: "Proofs by Nature",
    description:
      "Observable phenomena from the natural world that show TEG-Blue principles already running \u2014 in different hardware, long before we arrived to name them.",
    pieces: [
      {
        number: 1,
        slug: "01-octopus-chromatophores",
        title: "Octopuses Change Color With Their Emotions",
      },
    ],
  },
];

// ─── GO DEEPER URL MAPPING ───────────────────────────────
// Maps vault references to live .org URLs

export const GO_DEEPER_URLS = {
  "m1": "/model/m1-inner-compass",
  "m2": "/model/m2-three-awareness-capacities",
  "f1": "/framework/f1-emotional-gradient",
  "f2": "/framework/f2-awareness-calibration",
  "f3": "/framework/f3-false-coherence",
  "f4": "/framework/f4-rules-regulate",
  "f5": "/framework/f5-worth-hierarchies",
  "f6": "/framework/f6-bias-regulates",
  "f8": "/framework/f8-repairing-awareness",
};

// ─── READING COLUMN STYLES ──────────────────────────────

export const READING = {
  paragraph: {
    fontSize: 15,
    lineHeight: 1.8,
    color: TEXT.secondary,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    color: TEXT.primary,
    marginTop: 48,
    marginBottom: 16,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },
  sectionNumber: {
    fontWeight: 400,
    color: TEXT.muted,
    fontSize: 18,
    marginRight: 8,
  },
  seriesTag: {
    fontFamily: FONT.mono,
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.04em",
    color: EDITORIAL.accent,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    fontStyle: "italic",
    color: TEXT.muted,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: TEXT.primary,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    marginBottom: 8,
  },
  hr: {
    border: "none",
    borderTop: "1px solid var(--border-default)",
    margin: "32px 0",
  },
  finePrint: {
    fontSize: 13,
    fontStyle: "italic",
    color: TEXT.muted,
    lineHeight: 1.7,
  },
  seriesFooter: {
    fontSize: 12,
    fontStyle: "italic",
    color: TEXT.hint,
    marginTop: 4,
  },
};
```

**Step 2: Commit**

```bash
git add app/mechanics-of-phenomena/mechanics-config.js
git commit -m "feat: add Mechanics of Phenomena section config"
```

---

## Task 3: Create GoDeeper component

**Files:**
- Create: `app/mechanics-of-phenomena/GoDeeper.jsx`

**Step 1: Write component**

```jsx
import Link from "next/link";
import { BG, TEXT, FONT, BORDER, EDITORIAL, hexToRgba } from "@/src/styles/tokens";

/**
 * GoDeeper — Amber-tinted panel at the bottom of each piece.
 * Bridge into the rest of teg-blue.org.
 *
 * Props:
 *   items: Array of { description: string, label: string, href: string }
 */
export default function GoDeeper({ items }) {
  return (
    <div
      style={{
        marginTop: 48,
        padding: "32px 28px",
        background: hexToRgba(EDITORIAL.accentMuted, 0.15),
        border: `1px solid ${hexToRgba(EDITORIAL.accent, 0.15)}`,
        borderRadius: 8,
      }}
    >
      <h2
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: EDITORIAL.accent,
          marginBottom: 24,
          letterSpacing: "-0.01em",
        }}
      >
        Go deeper
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {items.map((item, i) => (
          <div key={i}>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 6,
                lineHeight: 1.5,
              }}
            >
              {item.description}
            </p>
            <Link
              href={item.href}
              style={{
                fontSize: 14,
                color: EDITORIAL.accent,
                textDecoration: "none",
                fontFamily: FONT.mono,
                letterSpacing: "0.01em",
              }}
            >
              {"\u2192 "}{item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add app/mechanics-of-phenomena/GoDeeper.jsx
git commit -m "feat: add GoDeeper component for Mechanics section"
```

---

## Task 4: Create MechanicsSidebar component

**Files:**
- Create: `app/mechanics-of-phenomena/MechanicsSidebar.jsx`

**Step 1: Write component**

```jsx
import Link from "next/link";
import { TEXT, FONT, BORDER, EDITORIAL, hexToRgba } from "@/src/styles/tokens";
import { SERIES } from "./mechanics-config";

/**
 * MechanicsSidebar — Sticky sidebar with series list and piece links.
 *
 * Props:
 *   activePiece: string — slug of the currently displayed piece (e.g. "02-why-people-change-by-context")
 *   showBackLink: boolean — show "← Back" link (true for individual piece pages)
 */
export default function MechanicsSidebar({ activePiece, showBackLink = false }) {
  return (
    <aside className="mop-sidebar">
      {showBackLink && (
        <Link
          href="/mechanics-of-phenomena"
          style={{
            display: "block",
            fontSize: 12,
            fontFamily: FONT.mono,
            color: EDITORIAL.accent,
            textDecoration: "none",
            marginBottom: 20,
            letterSpacing: "0.02em",
          }}
        >
          {"\u2190 The Mechanics of Phenomena"}
        </Link>
      )}

      <p
        style={{
          fontSize: 11,
          fontFamily: FONT.mono,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: TEXT.hint,
          marginBottom: 20,
        }}
      >
        In this section
      </p>

      {SERIES.map((series) => (
        <div key={series.slug} style={{ marginBottom: 28 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 4,
            }}
          >
            {series.name}
          </p>
          <p
            style={{
              fontSize: 11,
              fontStyle: "italic",
              color: TEXT.hint,
              marginBottom: 12,
              lineHeight: 1.5,
            }}
          >
            {series.description}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {series.pieces.map((piece) => {
              const isActive = activePiece === piece.slug;
              const href = `/mechanics-of-phenomena/${series.slug}/${piece.slug}`;

              return (
                <Link
                  key={piece.slug}
                  href={href}
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: isActive ? EDITORIAL.accent : TEXT.muted,
                    fontWeight: isActive ? 500 : 400,
                    textDecoration: "none",
                    lineHeight: 1.5,
                    paddingLeft: isActive ? 10 : 0,
                    borderLeft: isActive
                      ? `2px solid ${EDITORIAL.accent}`
                      : "2px solid transparent",
                    transition: "all 150ms ease",
                  }}
                >
                  No. {String(piece.number).padStart(2, "0")} {"\u2014"} {piece.title}
                  {piece.featured && (
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: FONT.mono,
                        color: TEXT.hint,
                        marginLeft: 6,
                        letterSpacing: "0.04em",
                      }}
                    >
                      featured
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      <p style={{ fontSize: 11, fontStyle: "italic", color: TEXT.micro, marginTop: 8 }}>
        More coming.
      </p>
    </aside>
  );
}
```

**Step 2: Commit**

```bash
git add app/mechanics-of-phenomena/MechanicsSidebar.jsx
git commit -m "feat: add MechanicsSidebar component"
```

---

## Task 5: Create MechanicsLayout component

**Files:**
- Create: `app/mechanics-of-phenomena/MechanicsLayout.jsx`

**Step 1: Write component**

```jsx
import { BG, TEXT, FONT, BORDER, EDITORIAL, SPACING, hexToRgba } from "@/src/styles/tokens";
import MechanicsSidebar from "./MechanicsSidebar";

const px = SPACING.pagePadding;

/**
 * Responsive CSS for two-column layout.
 * Injected as <style> tag — follows SiteHeader pattern.
 */
const RESPONSIVE_CSS = `
  .mop-columns {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 48px;
    align-items: start;
  }
  .mop-sidebar {
    position: sticky;
    top: 80px;
    align-self: start;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }
  .mop-mobile-index {
    display: none;
  }

  @media (max-width: 900px) {
    .mop-columns {
      display: block;
    }
    .mop-sidebar {
      display: none;
    }
    .mop-mobile-index {
      display: block;
    }
  }
`;

/**
 * MechanicsLayout — Two-column layout for the editorial section.
 *
 * Props:
 *   showSectionHeader: boolean — show h1 + stance text (main page only)
 *   activePiece: string — slug of the active piece for sidebar highlighting
 *   showBackLink: boolean — show back link in sidebar (individual pages)
 *   children: React node — the piece content for the reading column
 */
export default function MechanicsLayout({
  showSectionHeader = false,
  activePiece,
  showBackLink = false,
  children,
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />

      <main
        id="main-content"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: `0 ${px}`,
        }}
      >
        {/* ── SECTION HEADER (main page only) ── */}
        {showSectionHeader && (
          <div
            style={{
              paddingTop: 48,
              paddingBottom: 32,
              borderBottom: `1px solid ${hexToRgba(EDITORIAL.accent, 0.12)}`,
              marginBottom: 40,
            }}
          >
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: TEXT.primary,
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              The Mechanics of Phenomena
            </h1>
            <p
              style={{
                fontSize: 15,
                fontStyle: "italic",
                color: TEXT.muted,
                lineHeight: 1.7,
                maxWidth: "70ch",
              }}
            >
              I keep finding the same architecture running in different systems {"\u2014"} different
              fields, different hardware, different centuries. This is where I log it.
            </p>
          </div>
        )}

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="mop-columns" style={{ paddingBottom: 80 }}>
          {/* Sidebar */}
          <MechanicsSidebar activePiece={activePiece} showBackLink={showBackLink} />

          {/* Reading column */}
          <div className="mop-reading" style={{ maxWidth: "70ch", minWidth: 0 }}>
            {children}
          </div>
        </div>

        {/* ── MOBILE: Section index below piece ── */}
        <div
          className="mop-mobile-index"
          style={{
            borderTop: `1px solid ${BORDER.default}`,
            paddingTop: 32,
            paddingBottom: 48,
          }}
        >
          <MechanicsSidebar activePiece={activePiece} showBackLink={false} />
        </div>
      </main>
    </>
  );
}
```

**Step 2: Commit**

```bash
git add app/mechanics-of-phenomena/MechanicsLayout.jsx
git commit -m "feat: add MechanicsLayout two-column component"
```

---

## Task 6: Create piece content components

**Files:**
- Create: `app/mechanics-of-phenomena/_pieces/Piece02WhyPeopleChange.jsx`
- Create: `app/mechanics-of-phenomena/_pieces/Piece01WhyEvidenceFails.jsx`
- Create: `app/mechanics-of-phenomena/_pieces/PiecePBN01Octopus.jsx`

Each piece component is a server component that returns the article content as JSX.
It receives no props — it is pure content with shared styles from `mechanics-config.js`.

**Content source files (read these for the exact text):**
- Piece #02: `/Users/annaparetas/Projects/teg-blue-vault/mechanics-of-phenomena/Why-Humans-are-so-frustrating/02-why-people-change-by-context.md`
- Piece #01: `/Users/annaparetas/Projects/teg-blue-vault/mechanics-of-phenomena/Why-Humans-are-so-frustrating/01-why-evidence-fails.md`
- PBN #01: `/Users/annaparetas/Projects/teg-blue-vault/mechanics-of-phenomena/Proofs-by-Nature/01-octopus-chromatophores.md`

**JSX conversion pattern:**

Each piece component follows this structure:

```jsx
import Link from "next/link";
import { READING } from "../mechanics-config";
import GoDeeper from "../GoDeeper";

export default function PieceXX() {
  return (
    <article>
      {/* Series tag */}
      <p style={READING.seriesTag}>Series Name — No. XX</p>

      {/* Title */}
      <h1 style={READING.title}>Piece Title Here</h1>

      {/* TEG-Blue connection (metadata, small) */}
      <p style={READING.subtitle}>TEG-Blue connection: ...</p>

      {/* Audience subtitle */}
      <p style={READING.subtitle}>A diagnostic for...</p>

      <hr style={READING.hr} />

      {/* Opening paragraphs */}
      <p style={READING.paragraph}>First paragraph text...</p>
      <p style={READING.paragraph}>Second paragraph text...</p>

      {/* Q&A sections (for "Why Humans" series) */}
      <h2 style={READING.heading}>
        <span style={READING.sectionNumber}>1.</span> Question text?
      </h2>
      <p style={READING.paragraph}>Answer paragraph...</p>
      <p style={READING.paragraph}>
        Text with <strong>bold</strong> and <em>italic</em> inline.
      </p>

      <hr style={READING.hr} />

      {/* Framework reveal section */}
      <h2 style={{ ...READING.heading, marginTop: 32 }}>
        The framework behind these answers
      </h2>
      <p style={READING.paragraph}>Reveal text...</p>

      <hr style={READING.hr} />

      {/* Fine print */}
      <p style={READING.finePrint}>
        <em>TEG-Blue is an independent research framework...</em>
      </p>

      {/* Go deeper */}
      <GoDeeper
        items={[
          {
            description: "You want to understand X:",
            label: "M1 — The Inner Compass & Four-Mode Gradient",
            href: "/model/m1-inner-compass",
          },
          // ... more items
        ]}
      />

      <hr style={READING.hr} />

      {/* Series footer */}
      <p style={READING.seriesFooter}>Series: Why Humans Are So Frustrating · No. XX</p>
      <p style={READING.seriesFooter}>Last updated: 2026-03</p>
    </article>
  );
}
```

**Key conversion rules:**
- Every markdown paragraph → `<p style={READING.paragraph}>text</p>`
- `**bold**` → `<strong>bold</strong>`
- `*italic*` → `<em>italic</em>`
- `## N. Question` → `<h2 style={READING.heading}><span style={READING.sectionNumber}>N.</span> Question</h2>`
- `---` → `<hr style={READING.hr} />`
- Framework reveal heading → `<h2 style={{...READING.heading, marginTop: 32}}>The framework behind these answers</h2>`
- Go deeper section → `<GoDeeper items={[...]} />`
- For "Proofs by Nature" pieces: no Q&A structure — continuous prose with `<h2>` headings
- The `→` character in Go deeper entries is rendered inside the GoDeeper component
- Preserve all content exactly — do not edit, rewrite, or rephrase

**Go Deeper items per piece:**

Piece #02 (Why People Change):
```javascript
[
  { description: "You want to understand the four operating modes \u2014 what activates each one and what the system looks like from the inside:", label: "M1 \u2014 The Inner Compass & Four-Mode Gradient", href: "/model/m1-inner-compass" },
  { description: "You want to understand how collective rules and social structures do regulatory work \u2014 and what happens when those structures are removed:", label: "F4 \u2014 Collective Rules & Institutional Structures", href: "/framework/f4-rules-regulate" },
  { description: "You want to understand worth hierarchies \u2014 why social validation functions as regulation, and what it costs to destabilize it:", label: "F5 \u2014 Worth Hierarchies", href: "/framework/f5-worth-hierarchies" },
  { description: "You want to understand how the capacity to self-regulate develops \u2014 and why some systems became structurally dependent on external scaffolding:", label: "F2 \u2014 Developmental Failure of Regulation", href: "/framework/f2-awareness-calibration" },
  { description: "You want to understand what genuine repair looks like \u2014 the conditions under which systems can develop internal capacity rather than context-dependent performance:", label: "F8 \u2014 Individual Repair & The Power of Difference", href: "/framework/f8-repairing-awareness" },
]
```

Piece #01 (Why Evidence Fails):
```javascript
[
  { description: "You want to understand why the human mind prioritises stability over truth \u2014 and what the four operating modes actually look like:", label: "M1 \u2014 The Inner Compass & Four-Mode Gradient", href: "/model/m1-inner-compass" },
  { description: "You want to understand how beliefs become regulatory tools \u2014 replacing biological regulation when the nervous system couldn\u2019t find it elsewhere:", label: "F3 \u2014 Cognitive Replacement", href: "/framework/f3-false-coherence" },
  { description: "You want to understand why higher intelligence often strengthens motivated belief rather than protecting against it:", label: "F6 \u2014 Bias as Protection", href: "/framework/f6-bias-regulates" },
  { description: "You want to understand how institutional trust breaks in development \u2014 and why entire categories of evidence get pre-dismissed before they are processed:", label: "F2 \u2014 Developmental Failure of Regulation", href: "/framework/f2-awareness-calibration" },
  { description: "You want to understand how institutional trust breaks in development (continued):", label: "F4 \u2014 Collective Rules & Institutional Structures", href: "/framework/f4-rules-regulate" },
  { description: "You want to understand the mechanics of worth hierarchies \u2014 why \u201CI see what others can\u2019t\u201D functions as identity, not just opinion:", label: "F5 \u2014 Worth Hierarchies", href: "/framework/f5-worth-hierarchies" },
  { description: "You want to understand why confrontation produces entrenchment \u2014 and what the structural logic of the backfire effect actually is:", label: "M1 \u2014 Operating Modes Under Pressure", href: "/model/m1-inner-compass" },
  { description: "You want to understand why confrontation produces entrenchment (continued):", label: "F3 \u2014 Cognitive Replacement", href: "/framework/f3-false-coherence" },
  { description: "You want to understand what conditions genuinely allow change \u2014 and what the research says about the role of relationship over argument:", label: "F8 \u2014 Individual Repair & The Power of Difference", href: "/framework/f8-repairing-awareness" },
]
```

PBN #01 (Octopus):
```javascript
[
  { description: "You want to understand how emotional states function as information, not decoration:", label: "M2 \u2014 Three Awareness Capacities (RE, ER, SEA)", href: "/model/m2-three-awareness-capacities" },
  { description: "You want to understand what happens when the signal function breaks down \u2014 when inner state and outer transmission decouple:", label: "M1 \u2014 Four-Mode Gradient (Control / Domination modes)", href: "/model/m1-inner-compass" },
  { description: "You want to understand how the body carries information that the mind hasn\u2019t named yet:", label: "F1 \u2014 Biological Return", href: "/framework/f1-emotional-gradient" },
]
```

**Step 2: Commit each piece**

```bash
git add app/mechanics-of-phenomena/_pieces/
git commit -m "feat: add 3 piece content components for Mechanics section"
```

---

## Task 7: Create main page

**Files:**
- Create: `app/mechanics-of-phenomena/page.js`

**Step 1: Write main page**

```jsx
import { BG, FONT } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import MechanicsLayout from "./MechanicsLayout";
import Piece02WhyPeopleChange from "./_pieces/Piece02WhyPeopleChange";

export const metadata = {
  title: "The Mechanics of Phenomena | TEG-Blue Research",
  description:
    "A growing collection where observable phenomena \u2014 from science, nature, and human behavior \u2014 reveal the structure underneath. Long-form essays by Anna Paretas-Artacho.",
  keywords: [
    "mechanics of phenomena",
    "emotional regulation",
    "pattern recognition",
    "human behavior",
    "systems thinking",
    "TEG-Blue",
    "nervous system",
    "regulatory systems",
  ],
  alternates: {
    canonical: "https://teg-blue.org/mechanics-of-phenomena",
  },
  openGraph: {
    title: "The Mechanics of Phenomena | TEG-Blue",
    description:
      "Observable phenomena reveal the structure underneath. Long-form essays on patterns in human behavior, nature, and systems.",
    url: "https://teg-blue.org/mechanics-of-phenomena",
    type: "website",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mechanics of Phenomena | TEG-Blue",
    description:
      "Observable phenomena reveal the structure underneath. Long-form essays by Anna Paretas-Artacho.",
  },
};

export default function MechanicsOfPhenomenaPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/mechanics-of-phenomena" />

      <MechanicsLayout
        showSectionHeader={true}
        activePiece="02-why-people-change-by-context"
      >
        <Piece02WhyPeopleChange />
      </MechanicsLayout>

      <SiteFooter />
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add app/mechanics-of-phenomena/page.js
git commit -m "feat: add Mechanics of Phenomena main page"
```

---

## Task 8: Create individual piece pages

**Files:**
- Create: `app/mechanics-of-phenomena/why-humans-are-so-frustrating/01-why-evidence-fails/page.js`
- Create: `app/mechanics-of-phenomena/why-humans-are-so-frustrating/02-why-people-change-by-context/page.js`
- Create: `app/mechanics-of-phenomena/proofs-by-nature/01-octopus-chromatophores/page.js`

Each individual page follows the same structure. Example for piece #01:

```jsx
import { BG, FONT } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import MechanicsLayout from "../../MechanicsLayout";
import Piece01WhyEvidenceFails from "../../_pieces/Piece01WhyEvidenceFails";

export const metadata = {
  title: "Why Evidence Doesn\u2019t Work \u2014 And What Actually Does | TEG-Blue",
  description:
    "Why presenting evidence to someone in a threat-management mode produces defensiveness, not updating. A diagnostic for the frustrated and the rigorous.",
  alternates: {
    canonical:
      "https://teg-blue.org/mechanics-of-phenomena/why-humans-are-so-frustrating/01-why-evidence-fails",
  },
  openGraph: {
    title: "Why Evidence Doesn\u2019t Work | Mechanics of Phenomena",
    description:
      "Why presenting evidence to someone in a threat-management mode produces defensiveness, not updating.",
    url: "https://teg-blue.org/mechanics-of-phenomena/why-humans-are-so-frustrating/01-why-evidence-fails",
    type: "article",
    siteName: "TEG-Blue Research",
  },
};

export default function Piece01Page() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/mechanics-of-phenomena" />

      <MechanicsLayout
        activePiece="01-why-evidence-fails"
        showBackLink={true}
      >
        <Piece01WhyEvidenceFails />
      </MechanicsLayout>

      <SiteFooter />
    </div>
  );
}
```

**Repeat for piece #02** (import Piece02WhyPeopleChange, slug = "02-why-people-change-by-context")
**Repeat for PBN #01** (import PiecePBN01Octopus, slug = "01-octopus-chromatophores")

Update metadata title/description/canonical for each piece.

**Step 2: Commit**

```bash
git add app/mechanics-of-phenomena/why-humans-are-so-frustrating/ app/mechanics-of-phenomena/proofs-by-nature/
git commit -m "feat: add 3 individual piece pages for Mechanics section"
```

---

## Task 9: Update SiteHeader navigation

**Files:**
- Modify: `src/components/SiteHeader.jsx` (NAV_ITEMS array, around line 19-54)

**Step 1: Add nav item**

In the `NAV_ITEMS` array, add after the "Publications" entry (line 49):

```javascript
{ label: "Phenomena", href: "/mechanics-of-phenomena" },
```

The full array after modification:
```javascript
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Start Here", href: "/research-entry" },
  { label: "Models", href: "/models", children: [...] },
  { label: "Frameworks", href: "/frameworks-map", children: [...] },
  { label: "Publications", href: "/publications" },
  { label: "Phenomena", href: "/mechanics-of-phenomena" },  // ← NEW
  { label: "Scientific Foundations", href: "/scientific-foundations" },
  { label: "Glossary", href: "/glossary" },
  { label: "AI Safety", href: "/ai-safety" },
  { label: "About", href: "/about" },
];
```

**Step 2: Commit**

```bash
git add src/components/SiteHeader.jsx
git commit -m "feat: add Phenomena nav item to SiteHeader"
```

---

## Task 10: Build verification

**Step 1: Run build**

```bash
cd /Users/annaparetas/Projects/teg-blue-site-org && npm run build
```

Expected: Build succeeds. All routes compile.

**Step 2: Start dev server and verify**

```bash
npm run dev
```

Check:
- `/mechanics-of-phenomena` — section header, two-column layout, featured piece, sidebar
- `/mechanics-of-phenomena/why-humans-are-so-frustrating/01-why-evidence-fails` — individual piece with sidebar + back link
- `/mechanics-of-phenomena/why-humans-are-so-frustrating/02-why-people-change-by-context` — individual piece
- `/mechanics-of-phenomena/proofs-by-nature/01-octopus-chromatophores` — individual piece
- Navigation: "Phenomena" appears in header, highlights when on section pages
- Mobile (< 900px): single column, sidebar moves below piece
- Light mode toggle: amber accent adapts

**Step 3: Final commit**

If any fixes were needed:

```bash
git add -A && git commit -m "fix: resolve build issues in Mechanics section"
```

---

## Execution Notes

- **Featured piece is #02** (Why People Change by Context) — this is embedded on the main page per the dev brief
- **Content preservation is critical** — transcribe piece text exactly from vault files, do not edit or rephrase
- **Go deeper `→` is a text character** — it's rendered inside the GoDeeper component, not a UI arrow
- **No `"use client"` needed** — all components are server components
- **Sidebar on mobile** appears via the `.mop-mobile-index` div in MechanicsLayout — this renders a second MechanicsSidebar instance that's hidden on desktop and shown on mobile
- **Import paths for individual pages** use `../../` to reach the section root (e.g., `../../MechanicsLayout`)
