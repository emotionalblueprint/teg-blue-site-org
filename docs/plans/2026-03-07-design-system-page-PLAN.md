# Design System Page — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a `/design-system` internal reference page that renders all `tokens.js` values visually.

**Architecture:** Single page component (`app/design-system/page.js`) with 10 sections stacking vertically. All inline styles via tokens.js. A small injected `<style>` block handles hover pseudo-classes for the transitions section. No external nav link needed.

**Tech Stack:** Next.js 14 App Router, React server component (with `'use client'` only if needed for transitions hover), tokens.js imports.

---

### Task 1: Create the page file with layout shell and metadata

**Files:**
- Create: `app/design-system/page.js`

**Step 1: Create the page with metadata and layout shell**

Create `app/design-system/page.js` with:

```jsx
import {
  BG, TEXT, BORDER, FONT, SPACING, RADIUS, TRANSITION, OPACITY,
  SPECTRUM, PATTERN, PATTERN_GRADIENT, AWARENESS, STATUS,
  MODE_ORANGE, MODE_PINK, RESEARCHER,
  TYPE_SCALE, hexToRgba,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

export const metadata = {
  title: "Design System | TEG-Blue Research",
  description: "Internal design token reference for teg-blue.org.",
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/design-system" />
      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${SPACING.pagePadding} 60px`,
        }}
      >
        {/* Page header */}
        <h1 style={{
          fontSize: TYPE_SCALE.pageTitle.size,
          fontWeight: TYPE_SCALE.pageTitle.weight,
          letterSpacing: TYPE_SCALE.pageTitle.tracking,
          color: TEXT.primary,
          marginBottom: 4,
        }}>
          Design System
        </h1>
        <p style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.doi.size,
          color: TEXT.muted,
          marginBottom: SPACING.sectionGap.desktop,
          letterSpacing: TYPE_SCALE.doi.tracking,
        }}>
          Core tokens — teg-blue.org
        </p>

        {/* Sections will go here (Tasks 2-6) */}

      </main>
      <SiteFooter />
    </div>
  );
}
```

Key details:
- `robots: { index: false, follow: false }` — keeps it out of search engines (internal reference)
- Uses same page shell pattern as `about/page.js` and `methodology/page.js`
- Import path: `@/src/styles/tokens` and `@/src/components` (standard .org aliases)

**Step 2: Verify the page renders**

Run: `open http://localhost:3001/design-system` (dev server must be running on port 3001)
Expected: Page with header "Design System", subtitle, site header/footer. Empty content area.

**Step 3: Commit**

```bash
git add app/design-system/page.js
git commit -m "feat: add design-system page shell with metadata"
```

---

### Task 2: Add Sections 1-2 (Spectrum + Semantic Colors)

**Files:**
- Modify: `app/design-system/page.js`

**Step 1: Add a reusable swatch helper and section header helper**

Inside the page file, above the default export, add two local helpers:

```jsx
// ─── Local helpers (page-scoped, not exported) ─────────

const SWATCH_SIZE = 56;

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontSize: TYPE_SCALE.sectionHead.size,
      fontWeight: TYPE_SCALE.sectionHead.weight,
      letterSpacing: TYPE_SCALE.sectionHead.tracking,
      color: TEXT.primary,
      marginBottom: 20,
      paddingBottom: 10,
      borderBottom: `1px solid ${BORDER.default}`,
    }}>
      {children}
    </h2>
  );
}

function Swatch({ color, label, sublabel, size = SWATCH_SIZE }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div style={{
        width: size,
        height: size,
        borderRadius: RADIUS.sm,
        backgroundColor: color,
        border: `1px solid ${BORDER.default}`,
      }} />
      <span style={{
        fontFamily: FONT.mono,
        fontSize: TYPE_SCALE.tagLabel.size,
        fontWeight: TYPE_SCALE.tagLabel.weight,
        letterSpacing: TYPE_SCALE.tagLabel.tracking,
        color: TEXT.secondary,
        textTransform: "uppercase",
      }}>
        {label}
      </span>
      {sublabel && (
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.micro.size,
          color: TEXT.hint,
          letterSpacing: TYPE_SCALE.micro.tracking,
        }}>
          {sublabel}
        </span>
      )}
    </div>
  );
}

function SwatchRow({ children, label }) {
  return (
    <div style={{ marginBottom: 32 }}>
      {label && (
        <p style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.tagLabel.size,
          fontWeight: TYPE_SCALE.tagLabel.weight,
          letterSpacing: TYPE_SCALE.tagLabel.tracking,
          color: TEXT.muted,
          textTransform: "uppercase",
          marginBottom: 12,
        }}>
          {label}
        </p>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {children}
      </div>
    </div>
  );
}
```

**Step 2: Add Section 1 (The Blue Spectrum) inside the main element**

Replace the `{/* Sections will go here */}` comment with:

```jsx
{/* ─── 1. THE BLUE SPECTRUM ────────────────────── */}
<section style={{ marginBottom: SPACING.sectionGap.desktop }}>
  <SectionTitle>The Blue Spectrum</SectionTitle>
  <SwatchRow>
    {Object.entries(SPECTRUM).map(([name, hex]) => (
      <Swatch key={name} color={hex} label={name} sublabel={hex} />
    ))}
  </SwatchRow>
</section>

{/* ─── 2. SEMANTIC COLOR GROUPS ────────────────── */}
<section style={{ marginBottom: SPACING.sectionGap.desktop }}>
  <SectionTitle>Semantic Colors</SectionTitle>

  <SwatchRow label="Pattern (Four-Mode Blue Gradient)">
    {Object.entries(PATTERN).map(([name, { primary }]) => (
      <Swatch key={name} color={primary} label={name} sublabel={primary} />
    ))}
  </SwatchRow>
  {/* Pattern gradient bar */}
  <div style={{
    height: 8,
    borderRadius: RADIUS.sm,
    background: PATTERN_GRADIENT,
    marginTop: -20,
    marginBottom: 32,
  }} />

  <SwatchRow label="Awareness Capacities">
    <Swatch color={AWARENESS.RE} label="RE" sublabel={AWARENESS.RE} />
    <Swatch color={AWARENESS.ER} label="ER" sublabel={AWARENESS.ER} />
    <Swatch color={AWARENESS.SEA} label="SEA" sublabel={AWARENESS.SEA} />
  </SwatchRow>

  <SwatchRow label="Mode Accents">
    <Swatch color={MODE_ORANGE} label="Orange" sublabel={MODE_ORANGE} />
    <Swatch color={MODE_PINK} label="Pink" sublabel={MODE_PINK} />
  </SwatchRow>

  <SwatchRow label="Status">
    {Object.entries(STATUS).map(([name, hex]) => (
      <Swatch key={name} color={typeof hex === 'string' ? hex : hex} label={name} sublabel={typeof hex === 'string' ? hex : ''} />
    ))}
  </SwatchRow>

  <SwatchRow label="Researcher">
    <Swatch color={RESEARCHER.accent} label="accent" sublabel={RESEARCHER.accent} />
    <Swatch color={RESEARCHER.accentLight} label="light" sublabel={RESEARCHER.accentLight} />
    <Swatch color={RESEARCHER.accentLighter} label="lighter" sublabel={RESEARCHER.accentLighter} />
  </SwatchRow>
</section>
```

**Step 3: Verify in browser**

Expected: Two sections visible — 6 spectrum swatches in a row, then semantic groups (Pattern with gradient bar, Awareness, Mode, Status, Researcher).

**Step 4: Commit**

```bash
git add app/design-system/page.js
git commit -m "feat(design-system): add spectrum and semantic color sections"
```

---

### Task 3: Add Sections 3-5 (Backgrounds, Text, Borders)

**Files:**
- Modify: `app/design-system/page.js`

**Step 1: Add Section 3 (Backgrounds)**

After the semantic colors section, add:

```jsx
{/* ─── 3. BACKGROUNDS ──────────────────────────── */}
<section style={{ marginBottom: SPACING.sectionGap.desktop }}>
  <SectionTitle>Backgrounds</SectionTitle>
  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
    {Object.entries(BG).map(([name, cssVar]) => (
      <div
        key={name}
        style={{
          background: cssVar,
          padding: "14px 18px",
          borderRadius: name === "page" ? `${RADIUS.md}px ${RADIUS.md}px 0 0`
            : name === "inset" ? `0 0 ${RADIUS.md}px ${RADIUS.md}px`
            : 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: `1px solid ${BORDER.default}`,
        }}
      >
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.tagLabel.size,
          fontWeight: TYPE_SCALE.tagLabel.weight,
          letterSpacing: TYPE_SCALE.tagLabel.tracking,
          color: TEXT.secondary,
          textTransform: "uppercase",
        }}>
          BG.{name}
        </span>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.micro.size,
          color: TEXT.hint,
          letterSpacing: TYPE_SCALE.micro.tracking,
        }}>
          {cssVar}
        </span>
      </div>
    ))}
  </div>
</section>
```

**Step 2: Add Section 4 (Text)**

```jsx
{/* ─── 4. TEXT ──────────────────────────────────── */}
<section style={{ marginBottom: SPACING.sectionGap.desktop }}>
  <SectionTitle>Text</SectionTitle>
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    {[
      { name: "primary", sample: "Primary text — headings, emphasis" },
      { name: "secondary", sample: "Secondary text — body copy" },
      { name: "muted", sample: "Muted text — supporting content" },
      { name: "hint", sample: "Hint text — placeholders, labels" },
      { name: "micro", sample: "Micro text — footnotes, timestamps" },
    ].map(({ name, sample }) => (
      <div key={name} style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.tagLabel.size,
          fontWeight: TYPE_SCALE.tagLabel.weight,
          letterSpacing: TYPE_SCALE.tagLabel.tracking,
          color: TEXT.muted,
          textTransform: "uppercase",
          minWidth: 80,
          flexShrink: 0,
        }}>
          {name}
        </span>
        <span style={{
          color: TEXT[name],
          fontSize: TYPE_SCALE.body.size,
          lineHeight: TYPE_SCALE.body.lineHeight,
        }}>
          {sample}
        </span>
      </div>
    ))}
  </div>
</section>
```

**Step 3: Add Section 5 (Borders)**

```jsx
{/* ─── 5. BORDERS ──────────────────────────────── */}
<section style={{ marginBottom: SPACING.sectionGap.desktop }}>
  <SectionTitle>Borders</SectionTitle>
  <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
    {Object.entries(BORDER).map(([name, cssVar]) => (
      <div
        key={name}
        style={{
          width: 160,
          height: 80,
          border: `1px solid ${cssVar}`,
          borderRadius: RADIUS.md,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          background: BG.card,
        }}
      >
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.tagLabel.size,
          fontWeight: TYPE_SCALE.tagLabel.weight,
          letterSpacing: TYPE_SCALE.tagLabel.tracking,
          color: TEXT.secondary,
          textTransform: "uppercase",
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.micro.size,
          color: TEXT.hint,
          letterSpacing: TYPE_SCALE.micro.tracking,
        }}>
          {cssVar}
        </span>
      </div>
    ))}
  </div>
</section>
```

**Step 4: Verify in browser**

Expected: Stacked background bars (page through inset), text samples at each tier, three bordered boxes.

**Step 5: Commit**

```bash
git add app/design-system/page.js
git commit -m "feat(design-system): add backgrounds, text, and borders sections"
```

---

### Task 4: Add Section 6 (Typography)

**Files:**
- Modify: `app/design-system/page.js`

**Step 1: Add Section 6 (Typography)**

```jsx
{/* ─── 6. TYPOGRAPHY ───────────────────────────── */}
<section style={{ marginBottom: SPACING.sectionGap.desktop }}>
  <SectionTitle>Typography</SectionTitle>

  {/* Font families */}
  <div style={{ marginBottom: 32 }}>
    <p style={{
      fontFamily: FONT.mono,
      fontSize: TYPE_SCALE.tagLabel.size,
      fontWeight: TYPE_SCALE.tagLabel.weight,
      letterSpacing: TYPE_SCALE.tagLabel.tracking,
      color: TEXT.muted,
      textTransform: "uppercase",
      marginBottom: 12,
    }}>
      Font Families
    </p>
    <p style={{
      fontFamily: FONT.display,
      fontSize: TYPE_SCALE.body.size,
      color: TEXT.primary,
      marginBottom: 8,
    }}>
      Inter — The quick brown fox jumps over the lazy dog
    </p>
    <p style={{
      fontFamily: FONT.mono,
      fontSize: TYPE_SCALE.body.size,
      color: TEXT.primary,
    }}>
      JetBrains Mono — const emotion = &apos;biological information&apos;
    </p>
  </div>

  {/* Type scale */}
  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <p style={{
      fontFamily: FONT.mono,
      fontSize: TYPE_SCALE.tagLabel.size,
      fontWeight: TYPE_SCALE.tagLabel.weight,
      letterSpacing: TYPE_SCALE.tagLabel.tracking,
      color: TEXT.muted,
      textTransform: "uppercase",
    }}>
      Type Scale
    </p>
    {Object.entries(TYPE_SCALE).map(([role, spec]) => (
      <div key={role} style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        paddingBottom: 16,
        borderBottom: `1px solid ${BORDER.default}`,
      }}>
        <span style={{
          fontFamily: spec.font === "mono" ? FONT.mono : FONT.display,
          fontSize: spec.size,
          fontWeight: spec.weight,
          letterSpacing: spec.tracking,
          lineHeight: spec.lineHeight,
          color: TEXT.primary,
          ...(spec.font === "mono" ? {} : {}),
        }}>
          {role} — Sample text for this scale
        </span>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.micro.size,
          color: TEXT.hint,
          letterSpacing: TYPE_SCALE.micro.tracking,
        }}>
          {spec.size}px · {spec.weight} · {spec.tracking} tracking · {spec.lineHeight} line-height
          {spec.font === "mono" ? " · mono" : ""}
        </span>
      </div>
    ))}
  </div>
</section>
```

**Step 2: Verify in browser**

Expected: Two font family samples, then 10 type scale entries each rendered at their actual size/weight with specs below.

**Step 3: Commit**

```bash
git add app/design-system/page.js
git commit -m "feat(design-system): add typography section with font families and type scale"
```

---

### Task 5: Add Sections 7-10 (Radius, Spacing, Opacity, Transitions)

**Files:**
- Modify: `app/design-system/page.js`

**Step 1: Add Section 7 (Border Radius)**

```jsx
{/* ─── 7. BORDER RADIUS ────────────────────────── */}
<section style={{ marginBottom: SPACING.sectionGap.desktop }}>
  <SectionTitle>Border Radius</SectionTitle>
  <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
    {Object.entries(RADIUS).map(([name, px]) => (
      <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{
          width: 72,
          height: 72,
          borderRadius: px,
          border: `1px solid ${BORDER.hover}`,
          background: BG.card,
        }} />
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.tagLabel.size,
          fontWeight: TYPE_SCALE.tagLabel.weight,
          letterSpacing: TYPE_SCALE.tagLabel.tracking,
          color: TEXT.secondary,
          textTransform: "uppercase",
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.micro.size,
          color: TEXT.hint,
          letterSpacing: TYPE_SCALE.micro.tracking,
        }}>
          {px}px
        </span>
      </div>
    ))}
  </div>
</section>
```

**Step 2: Add Section 8 (Spacing)**

```jsx
{/* ─── 8. SPACING ──────────────────────────────── */}
<section style={{ marginBottom: SPACING.sectionGap.desktop }}>
  <SectionTitle>Spacing</SectionTitle>
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    {[
      { name: "containerMax", value: `${SPACING.containerMax}px`, width: "100%" },
      { name: "sectionGap (desktop)", value: `${SPACING.sectionGap.desktop}px`, width: `${(SPACING.sectionGap.desktop / SPACING.containerMax) * 100}%` },
      { name: "sectionGap (mobile)", value: `${SPACING.sectionGap.mobile}px`, width: `${(SPACING.sectionGap.mobile / SPACING.containerMax) * 100}%` },
      { name: "contentGap (desktop)", value: `${SPACING.contentGap.desktop}px`, width: `${(SPACING.contentGap.desktop / SPACING.containerMax) * 100}%` },
      { name: "cardPadding (desktop)", value: `${SPACING.cardPadding.desktop}px`, width: `${(SPACING.cardPadding.desktop / SPACING.containerMax) * 100}%` },
      { name: "gridGap", value: `${SPACING.gridGap}px`, width: `${(SPACING.gridGap / SPACING.containerMax) * 100}%` },
    ].map(({ name, value, width }) => (
      <div key={name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.tagLabel.size,
          fontWeight: TYPE_SCALE.tagLabel.weight,
          letterSpacing: TYPE_SCALE.tagLabel.tracking,
          color: TEXT.muted,
          textTransform: "uppercase",
          minWidth: 180,
          flexShrink: 0,
        }}>
          {name}
        </span>
        <div style={{
          height: 12,
          width,
          minWidth: 12,
          background: hexToRgba(SPECTRUM.cobalt, 0.3),
          borderRadius: RADIUS.sm,
          border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.5)}`,
        }} />
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.micro.size,
          color: TEXT.hint,
          letterSpacing: TYPE_SCALE.micro.tracking,
          flexShrink: 0,
        }}>
          {value}
        </span>
      </div>
    ))}
  </div>
</section>
```

**Step 3: Add Section 9 (Opacity)**

```jsx
{/* ─── 9. OPACITY ──────────────────────────────── */}
<section style={{ marginBottom: SPACING.sectionGap.desktop }}>
  <SectionTitle>Opacity Scale</SectionTitle>
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
    {Object.entries(OPACITY).map(([name, value]) => (
      <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <div style={{
          width: SWATCH_SIZE,
          height: SWATCH_SIZE,
          borderRadius: RADIUS.sm,
          backgroundColor: hexToRgba(SPECTRUM.cobalt, value),
          border: `1px solid ${BORDER.default}`,
        }} />
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.tagLabel.size,
          fontWeight: TYPE_SCALE.tagLabel.weight,
          letterSpacing: TYPE_SCALE.tagLabel.tracking,
          color: TEXT.secondary,
          textTransform: "uppercase",
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.micro.size,
          color: TEXT.hint,
          letterSpacing: TYPE_SCALE.micro.tracking,
        }}>
          {value}
        </span>
      </div>
    ))}
  </div>
</section>
```

**Step 4: Add Section 10 (Transitions)**

This section needs hover pseudo-classes. Use injected `<style>` block (same pattern as `SiteHeader.jsx`):

```jsx
{/* ─── 10. TRANSITIONS ─────────────────────────── */}
<section style={{ marginBottom: SPACING.sectionGap.desktop }}>
  <SectionTitle>Transitions</SectionTitle>
  <style dangerouslySetInnerHTML={{ __html: `
    .ds-transition-box { background: ${BG.card}; cursor: pointer; }
    .ds-transition-box:hover { background: ${hexToRgba(SPECTRUM.cobalt, 0.2)}; }
  `}} />
  <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
    {Object.entries(TRANSITION).map(([name, value]) => (
      <div
        key={name}
        className="ds-transition-box"
        style={{
          width: 160,
          height: 80,
          borderRadius: RADIUS.md,
          border: `1px solid ${BORDER.default}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          transition: `background ${value}`,
        }}
      >
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.tagLabel.size,
          fontWeight: TYPE_SCALE.tagLabel.weight,
          letterSpacing: TYPE_SCALE.tagLabel.tracking,
          color: TEXT.secondary,
          textTransform: "uppercase",
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.micro.size,
          color: TEXT.hint,
          letterSpacing: TYPE_SCALE.micro.tracking,
        }}>
          {value}
        </span>
      </div>
    ))}
  </div>
</section>
```

**Step 5: Verify in browser**

Expected: 4 rounded boxes (sm→xl), spacing bars with proportional widths, 7 opacity swatches from nearly invisible to solid, 3 hoverable transition boxes with different speeds.

**Step 6: Commit**

```bash
git add app/design-system/page.js
git commit -m "feat(design-system): add radius, spacing, opacity, and transitions sections"
```

---

### Task 6: Final visual QA and cleanup

**Files:**
- Modify: `app/design-system/page.js` (if needed)

**Step 1: Check all 10 sections in dark mode**

Run through each section in the browser (dark mode) and verify:
- All swatches render with correct colors
- Typography scale entries are visually distinct
- Background bars are distinguishable
- Opacity scale shows progression
- Transition boxes respond to hover

**Step 2: Toggle to light mode and verify**

Switch theme and verify all CSS variables resolve correctly. Swatches should adapt (BG, TEXT, BORDER sections), spectrum hex colors stay the same.

**Step 3: Check mobile viewport**

Resize to ~375px width. Verify:
- Swatch rows wrap naturally
- Spacing bars are readable
- Nothing overflows

**Step 4: Fix any issues found, then commit**

```bash
git add app/design-system/page.js
git commit -m "fix(design-system): visual QA cleanup"
```
