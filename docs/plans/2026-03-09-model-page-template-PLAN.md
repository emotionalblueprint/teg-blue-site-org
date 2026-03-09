# Model Page Template Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Visually differentiate model pages (M1, M2, M3) from framework pages by introducing model-specific components: ModelHero, ModelAnchorStrip, ModelPurpose, OperationalStatement, and DrawsFromPanel.

**Architecture:** 5 new shared components in `src/components/`, each accepting a `color` prop for per-model identity. Model pages switch from sidebar layout to full-width single column with a sticky horizontal anchor strip. Framework pages remain untouched.

**Tech Stack:** Next.js 14 App Router, React 18, inline styles via tokens.js (no CSS/Tailwind). One client component (ModelAnchorStrip) using IntersectionObserver.

**Design doc:** `docs/plans/2026-03-09-model-page-template-design.md`

---

### Task 1: Create ModelHero Component

**Files:**
- Create: `src/components/ModelHero.jsx`

**Step 1: Create the component**

```jsx
// src/components/ModelHero.jsx
import Link from "next/link";
import { TEXT, FONT, SPECTRUM, hexToRgba } from "../styles/tokens";

/**
 * ModelHero — Hero section for model pages.
 * Distinct from ResearcherHero: left border band, plain title,
 * core question callout, and framework-link pills.
 *
 * @param {string} badge - Badge text (e.g., "MODEL M1")
 * @param {string} title - Main title
 * @param {string} subtitle - Italic subtitle
 * @param {string} description - Body description
 * @param {string} coreQuestion - The model's defining question
 * @param {Array<{label: string, href: string}>} drawsFrom - Framework pills
 * @param {string} color - Model identity color (hex)
 */
export default function ModelHero({
  badge,
  title,
  subtitle,
  description,
  coreQuestion,
  drawsFrom = [],
  color,
}) {
  return (
    <div
      style={{
        padding: "28px 0",
        borderLeft: `4px solid ${color}`,
        paddingLeft: 20,
      }}
    >
      {/* Badge pill */}
      {badge && (
        <div
          style={{
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: 100,
            fontSize: 10,
            fontWeight: 700,
            fontFamily: FONT.mono,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: color,
            backgroundColor: hexToRgba(color, 0.15),
            border: `1px solid ${hexToRgba(color, 0.3)}`,
            marginBottom: 16,
          }}
        >
          {badge}
        </div>
      )}

      {/* Title — plain white, not gradient */}
      <h1
        style={{
          fontSize: 24,
          fontWeight: 700,
          margin: "0 0 8px",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          color: TEXT.primary,
        }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p
          style={{
            fontSize: 13,
            fontStyle: "italic",
            color: TEXT.muted,
            margin: "0 0 12px",
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p
          style={{
            fontSize: 15,
            color: TEXT.secondary,
            lineHeight: 1.7,
            margin: "0 0 16px",
            maxWidth: 640,
          }}
        >
          {description}
        </p>
      )}

      {/* Core Question */}
      {coreQuestion && (
        <div
          style={{
            padding: "12px 16px",
            background: hexToRgba(color, 0.06),
            borderRadius: 8,
            border: `1px solid ${hexToRgba(color, 0.15)}`,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: color,
              marginBottom: 6,
            }}
          >
            Core Question
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: TEXT.primary,
              lineHeight: 1.5,
              fontStyle: "italic",
            }}
          >
            {coreQuestion}
          </div>
        </div>
      )}

      {/* Draws From pills */}
      {drawsFrom.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: TEXT.muted,
              alignSelf: "center",
              marginRight: 2,
            }}
          >
            Draws from
          </span>
          {drawsFrom.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                display: "inline-block",
                padding: "2px 8px",
                borderRadius: 4,
                fontSize: 10,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.cobalt,
                backgroundColor: hexToRgba(SPECTRUM.cobalt, 0.1),
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/ModelHero.jsx
git commit -m "feat: add ModelHero component for model page template"
```

---

### Task 2: Create ModelAnchorStrip Component

**Files:**
- Create: `src/components/ModelAnchorStrip.jsx`

**Step 1: Create the client component**

```jsx
// src/components/ModelAnchorStrip.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import { BG, TEXT, FONT, BORDER, SPACING, hexToRgba } from "../styles/tokens";

const px = SPACING.pagePadding;

/**
 * ModelAnchorStrip — Sticky horizontal nav for model pages.
 * Replaces the sidebar. Tracks active section via IntersectionObserver.
 *
 * @param {Array<{label: string, href: string}>} sections - Anchor sections
 * @param {string} color - Model identity color (hex)
 */
export default function ModelAnchorStrip({ sections, color }) {
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef(null);

  useEffect(() => {
    const ids = sections.map((s) => s.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, [sections]);

  const handleClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update active immediately for responsiveness
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Page sections"
      style={{
        position: "sticky",
        top: 48,
        zIndex: 40,
        background: BG.surface,
        borderBottom: `1px solid ${BORDER.default}`,
        marginBottom: 32,
      }}
    >
      <div
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `0 ${px}`,
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {sections.map(({ label, href }) => {
          const id = href.replace("#", "");
          const isActive = activeId === id;
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "10px 14px",
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: isActive ? color : TEXT.muted,
                background: isActive ? hexToRgba(color, 0.08) : "transparent",
                borderBottom: isActive ? `2px solid ${color}` : "2px solid transparent",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "color 150ms ease, background 150ms ease, border-color 150ms ease",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {label}
            </a>
          );
        })}
      </div>
      {/* Hide scrollbar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            nav[aria-label="Page sections"] > div::-webkit-scrollbar { display: none; }
          `,
        }}
      />
    </nav>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/ModelAnchorStrip.jsx
git commit -m "feat: add ModelAnchorStrip — sticky horizontal nav for model pages"
```

---

### Task 3: Create ModelPurpose Component

**Files:**
- Create: `src/components/ModelPurpose.jsx`

**Step 1: Create the component**

```jsx
// src/components/ModelPurpose.jsx
import { TEXT, FONT, hexToRgba } from "../styles/tokens";

/**
 * ModelPurpose — Callout box for model pages.
 * Replaces PropositionBox. Label reads "WHAT THIS MODEL MAPS".
 * Left border in model's identity color.
 *
 * @param {string} label - Override label (default: "WHAT THIS MODEL MAPS")
 * @param {string} color - Model identity color (hex)
 * @param {ReactNode} children - Body content (typically a <ul>)
 */
export default function ModelPurpose({ label = "WHAT THIS MODEL MAPS", color, children }) {
  return (
    <div
      style={{
        borderRadius: 12,
        padding: 24,
        background: hexToRgba(color, 0.04),
        borderLeft: `4px solid ${color}`,
        border: `1px solid ${hexToRgba(color, 0.15)}`,
        borderLeftWidth: 4,
        borderLeftColor: color,
        borderLeftStyle: "solid",
      }}
    >
      {label && (
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontFamily: FONT.mono,
            color: color,
            marginBottom: 12,
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          fontSize: 14,
          color: TEXT.secondary,
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/ModelPurpose.jsx
git commit -m "feat: add ModelPurpose component — model-specific callout box"
```

---

### Task 4: Create OperationalStatement Component

**Files:**
- Create: `src/components/OperationalStatement.jsx`

**Step 1: Create the component**

```jsx
// src/components/OperationalStatement.jsx
import { TEXT, FONT, hexToRgba } from "../styles/tokens";

/**
 * OperationalStatement — Non-italic reference-card blockquote for model pages.
 * Replaces the local KeyStatement helper. Reads as "here's what to use"
 * rather than "here's a thought."
 *
 * @param {string} color - Model identity color (hex)
 * @param {ReactNode} children - Statement text
 */
export default function OperationalStatement({ color, children }) {
  return (
    <blockquote
      style={{
        padding: "16px 20px",
        margin: "0 0 20px",
        background: hexToRgba(color, 0.04),
        borderRadius: "0 8px 8px 0",
        borderLeft: `4px solid ${color}`,
        fontSize: 15,
        fontWeight: 500,
        color: TEXT.primary,
        lineHeight: 1.6,
        fontStyle: "normal",
      }}
    >
      <div
        style={{
          fontSize: 8,
          fontWeight: 700,
          fontFamily: FONT.mono,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: hexToRgba(color, 0.6),
          marginBottom: 8,
        }}
      >
        Operational Insight
      </div>
      {children}
    </blockquote>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/OperationalStatement.jsx
git commit -m "feat: add OperationalStatement — reference-card blockquote for models"
```

---

### Task 5: Create DrawsFromPanel Component

**Files:**
- Create: `src/components/DrawsFromPanel.jsx`

**Step 1: Create the component**

```jsx
// src/components/DrawsFromPanel.jsx
import Link from "next/link";
import { TEXT, FONT, SPECTRUM, hexToRgba, gradientCardBg } from "../styles/tokens";

/**
 * DrawsFromPanel — Reusable grid of framework/model link cards.
 * Used at the bottom of model pages to show theoretical connections.
 *
 * @param {Array<{id: string, title: string, relation: string, description: string, href: string}>} items
 * @param {string} color - Model identity color for section heading (hex)
 */
export default function DrawsFromPanel({ items, color }) {
  return (
    <section
      id="relationship-to-frameworks"
      aria-labelledby="heading-draws-from"
      style={{ marginBottom: 48 }}
    >
      <h2
        id="heading-draws-from"
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: color,
          letterSpacing: "-0.01em",
          marginBottom: 16,
          paddingBottom: 8,
          borderBottom: `2px solid ${hexToRgba(color, 0.2)}`,
        }}
      >
        Draws From
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 12,
        }}
      >
        {items.map(({ id, title, relation, description, href }) => (
          <Link
            key={id}
            href={href}
            style={{
              display: "block",
              padding: 16,
              background: gradientCardBg(SPECTRUM.cobalt, 0.06),
              border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
              borderRadius: 10,
              textDecoration: "none",
              transition: "border-color 200ms ease",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: FONT.mono,
                color: SPECTRUM.cobalt,
                marginBottom: 6,
              }}
            >
              {id}
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 4,
              }}
            >
              {title}
            </div>
            {relation && (
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: SPECTRUM.cobalt,
                  fontFamily: FONT.mono,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: 8,
                }}
              >
                {relation}
              </div>
            )}
            <div
              style={{
                fontSize: 13,
                color: TEXT.secondary,
                lineHeight: 1.6,
              }}
            >
              {description}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/DrawsFromPanel.jsx
git commit -m "feat: add DrawsFromPanel — reusable framework-link grid for models"
```

---

### Task 6: Update Component Exports

**Files:**
- Modify: `src/components/index.js`

**Step 1: Add exports for all 5 new components**

Add these lines after the existing "Researcher components" block (after line 24):

```javascript
// Model components
export { default as ModelHero } from "./ModelHero";
export { default as ModelAnchorStrip } from "./ModelAnchorStrip";
export { default as ModelPurpose } from "./ModelPurpose";
export { default as OperationalStatement } from "./OperationalStatement";
export { default as DrawsFromPanel } from "./DrawsFromPanel";
```

**Step 2: Commit**

```bash
git add src/components/index.js
git commit -m "feat: export model template components from index"
```

---

### Task 7: Update M1 Page

**Files:**
- Modify: `app/model/m1-inner-compass/page.js`

This is the largest model page (~1492 lines). The changes are:

**Step 1: Update imports**

Replace the current import block (lines 1-15) with:

```javascript
import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RESEARCHER, PATTERN_GRADIENT,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, ModelAnchorStrip,
  ModelPurpose, OperationalStatement, DrawsFromPanel,
  ExpandableSection, FluidCompassExplorer, PageLayout,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/src/lib/jsonld";
```

**Step 2: Define model constants and anchor sections**

Replace the current `SIDEBAR_SECTIONS` constant (lines 17-23) with:

```javascript
const MODEL_COLOR = SPECTRUM.azure;

const ANCHOR_SECTIONS = [
  { label: "The Compass", href: "#inner-compass" },
  { label: "Four Modes", href: "#four-modes" },
  { label: "The Gradient", href: "#the-gradient" },
  { label: "Mode Architecture", href: "#state-determines-capacity" },
  { label: "Regulation", href: "#regulation-the-return" },
  { label: "Draws From", href: "#relationship-to-frameworks" },
];

const DRAWS_FROM = [
  { id: "F1", title: "The Emotional Gradient", relation: "Primary source", description: "The full scientific foundation for the compass, the four modes, and biological restoration. M1 is the applied tool; F1 is the depth account.", href: "/framework/f1-emotional-gradient" },
  { id: "F3", title: "False Coherence", relation: "Maintains stuckness", description: "What maintains a stuck compass. How identity forms around the mode, making the stuckness invisible from the inside.", href: "/framework/f3-false-coherence" },
  { id: "F7", title: "Domination Regulates", relation: "Escalation", description: "Escalation across the gradient. How Control crosses into Domination, and how tolerance builds.", href: "/framework/f7-domination-regulates" },
  { id: "F12", title: "The Two Information Systems", relation: "Architecture", description: "The underlying architecture. Why understanding doesn't change the compass. Why experience does.", href: "/framework/f12-two-information-systems" },
  { id: "M2", title: "Three Awareness Capacities", relation: "Paired model", description: "What determines how well the compass works: the awareness capacities that develop (or don't) in the relational environment.", href: "/model/m2-three-awareness-capacities" },
  { id: "M3", title: "The Biology of Unfinished Emotion", relation: "Paired model", description: "The biological cascade underneath the compass. What the body does when the return is blocked.", href: "/model/m3-the-open-cycle" },
];
```

**Step 3: Update the page layout**

Replace the `<PageLayout>` wrapper (starting around line 77) to use the new components:

1. Replace `ResearcherHero` in the header with `ModelHero`:

```jsx
<PageLayout
  header={
    <>
      <ModelHero
        badge="MODEL M1"
        title="Inner Compass & Four-Mode Gradient"
        subtitle="The Instrument"
        description="How the nervous system orients between safety and threat, how emotions carry that orientation as signals, how four modes organise the response on a continuous gradient, and how the capacity to return determines whether the compass stays fluid or gets stuck. The foundational model of the TEG-Blue system."
        coreQuestion="Where is the needle, can it move, and what does the person have access to from where they are?"
        drawsFrom={[
          { label: "F1", href: "/framework/f1-emotional-gradient" },
          { label: "F3", href: "/framework/f3-false-coherence" },
          { label: "F7", href: "/framework/f7-domination-regulates" },
          { label: "F12", href: "/framework/f12-two-information-systems" },
        ]}
        color={MODEL_COLOR}
      />
      <ModelAnchorStrip sections={ANCHOR_SECTIONS} color={MODEL_COLOR} />
    </>
  }
>
```

2. Remove the `sidebarSections={SIDEBAR_SECTIONS}` prop from PageLayout.

3. Replace `<PropositionBox label="CORE PROPOSITIONS">` with `<ModelPurpose color={MODEL_COLOR}>`.

4. Replace every `<KeyStatement>` with `<OperationalStatement color={MODEL_COLOR}>`.

5. Replace the "Relationship to Frameworks" section (the manual FrameworkCard grid) with `<DrawsFromPanel items={DRAWS_FROM} color={MODEL_COLOR} />`.

6. Update all style constants that reference model color — change `sectionHeadingStyle` to use `MODEL_COLOR` instead of `RESEARCHER.accent`:

```javascript
const sectionHeadingStyle = {
  fontSize: 20,
  fontWeight: 700,
  color: MODEL_COLOR,
  letterSpacing: "-0.01em",
  marginBottom: 16,
  paddingBottom: 8,
  borderBottom: `2px solid ${hexToRgba(MODEL_COLOR, 0.2)}`,
};
```

7. Update `gridHeaderStyle` to use `MODEL_COLOR`:

```javascript
const gridHeaderStyle = {
  padding: "10px 12px",
  background: hexToRgba(MODEL_COLOR, 0.1),
  borderBottom: `1px solid ${BORDER.default}`,
  fontSize: 12,
  fontWeight: 600,
  color: TEXT.primary,
  fontFamily: FONT.mono,
};
```

8. Delete the local `KeyStatement` helper function (no longer needed).

9. Update `NavRow` link color to use `MODEL_COLOR`.

**Step 4: Verify in browser**

Run: `npm run dev` in the .org directory
Navigate to: `http://localhost:3001/model/m1-inner-compass`

Verify:
- [ ] ModelHero shows left border band in azure, plain white title, core question box, framework pills
- [ ] Anchor strip appears below hero, sticks on scroll
- [ ] Active section highlights as you scroll
- [ ] ModelPurpose box shows "WHAT THIS MODEL MAPS" label
- [ ] OperationalStatement blocks are non-italic with "OPERATIONAL INSIGHT" label
- [ ] DrawsFromPanel shows at bottom with framework/model cards
- [ ] FluidCompassExplorer still renders correctly
- [ ] No sidebar on right

**Step 5: Commit**

```bash
git add app/model/m1-inner-compass/page.js
git commit -m "refactor: M1 page uses new model template — ModelHero, anchor strip, no sidebar"
```

---

### Task 8: Update M2 Page

**Files:**
- Modify: `app/model/m2-three-awareness-capacities/page.js`

Apply the same pattern as M1:

**Step 1: Update imports** — swap ResearcherHero/PropositionBox for model components.

**Step 2: Define constants**

```javascript
const MODEL_COLOR = SPECTRUM.cobalt;

const ANCHOR_SECTIONS = [
  { label: "Three Capacities", href: "#capacities-online-offline" },
  { label: "How They Develop", href: "#awareness-teaches-awareness" },
  { label: "Configurations", href: "#capacity-configuration" },
  { label: "SEA as Keystone", href: "#sea-self-emotional-awareness" },
  { label: "Draws From", href: "#relationship-to-frameworks" },
];

const DRAWS_FROM = [
  { id: "F2", title: "Awareness Calibration", relation: "Primary source", description: "How awareness capacities develop — or fail to develop — in the relational environment.", href: "/framework/f2-awareness-calibration" },
  { id: "F3", title: "False Coherence", relation: "Maintains stuckness", description: "How cognition constructs identity around missing capacities, making the absence invisible.", href: "/framework/f3-false-coherence" },
  { id: "F8", title: "Repairing Awareness", relation: "Repair pathway", description: "How awareness capacities that didn't develop can be rebuilt in adult relational contexts.", href: "/framework/f8-repairing-awareness" },
  { id: "F10", title: "Generational Bridges", relation: "Transmission", description: "How capacity configurations replicate across generations through the relational environment.", href: "/framework/f10-generational-bridges" },
  { id: "M1", title: "Inner Compass", relation: "Paired model", description: "The instrument these capacities calibrate. M1 maps what the compass does; M2 maps what determines how well it works.", href: "/model/m1-inner-compass" },
  { id: "M3", title: "The Biology of Unfinished Emotion", relation: "Paired model", description: "The physiological cascade underneath. What happens in the body when awareness capacities can't process the signal.", href: "/model/m3-the-open-cycle" },
];
```

**Step 3: Swap components** — same pattern as Task 7 Steps 3.1-3.9, using `MODEL_COLOR = SPECTRUM.cobalt`.

**Step 4: Verify in browser**

Navigate to: `http://localhost:3001/model/m2-three-awareness-capacities`

Verify:
- [ ] ModelHero with cobalt accent
- [ ] Anchor strip works
- [ ] Degradation bar chart still renders (this is a visual element near the top)
- [ ] AWARENESS color badges (RE, ER, SEA) still display correctly
- [ ] No sidebar

**Step 5: Commit**

```bash
git add app/model/m2-three-awareness-capacities/page.js
git commit -m "refactor: M2 page uses new model template — cobalt accent, no sidebar"
```

---

### Task 9: Update M3 Page

**Files:**
- Modify: `app/model/m3-the-open-cycle/page.js`

**Step 1: Update imports** — same swap as M1/M2.

**Step 2: Define constants**

```javascript
const MODEL_COLOR = SPECTRUM.indigo;

const ANCHOR_SECTIONS = [
  { label: "The Cycle", href: "#threat-cascade" },
  { label: "Cognitive Management", href: "#override" },
  { label: "Stress Cycle Completion", href: "#completion" },
  { label: "System-by-System", href: "#stays-active" },
  { label: "Draws From", href: "#relationship-to-frameworks" },
];

const DRAWS_FROM = [
  { id: "F1", title: "Emotions as Biological Information", relation: "Primary source", description: "Names the process M3 maps physiologically. Biological Restoration — The Fork.", href: "/framework/f1-emotional-gradient" },
  { id: "F2", title: "Awareness Calibration", relation: "Developmental origin", description: "Why restoration fails — the awareness capacities that should facilitate the return.", href: "/framework/f2-awareness-calibration" },
  { id: "F3", title: "False Coherence", relation: "Cognitive maintenance", description: "How cognition constructs coherence over unfinished cycles, hiding the residue.", href: "/framework/f3-false-coherence" },
  { id: "F8", title: "Repairing Awareness", relation: "Repair pathway", description: "How unfinished cycles can begin completing in safe relational contexts.", href: "/framework/f8-repairing-awareness" },
  { id: "F12", title: "Two Information Systems", relation: "Architecture", description: "Why cognitive understanding cannot close a somatic cycle. The two-system explanation.", href: "/framework/f12-two-information-systems" },
  { id: "M1", title: "Inner Compass", relation: "Paired model", description: "The compass that gets stuck when cycles don't complete. M3 explains the biology of why.", href: "/model/m1-inner-compass" },
  { id: "M2", title: "Three Awareness Capacities", relation: "Paired model", description: "The capacities that determine whether the cycle can be felt, read, and allowed to complete.", href: "/model/m2-three-awareness-capacities" },
];
```

**Step 3: Swap components** — same pattern, using `MODEL_COLOR = SPECTRUM.indigo`.

**Step 4: Verify in browser**

Navigate to: `http://localhost:3001/model/m3-the-open-cycle`

Verify:
- [ ] ModelHero with indigo accent
- [ ] OpenCycleExplorer still renders
- [ ] Anchor strip works
- [ ] No sidebar

**Step 5: Commit**

```bash
git add app/model/m3-the-open-cycle/page.js
git commit -m "refactor: M3 page uses new model template — indigo accent, no sidebar"
```

---

### Task 10: Final Review & Build Check

**Step 1: Visual review all three model pages side by side**

Check each page for:
- [ ] Hero looks distinct from framework pages (left border, not gradient text, not accent bar)
- [ ] Anchor strip is sticky, highlights active section, scrolls horizontally on narrow viewports
- [ ] Per-model color is consistent throughout each page
- [ ] ModelPurpose, OperationalStatement, DrawsFromPanel all render correctly
- [ ] Existing interactive elements (FluidCompassExplorer, OpenCycleExplorer, degradation bars) still work
- [ ] No broken links in the DrawsFromPanel cards

**Step 2: Check a framework page hasn't changed**

Navigate to: `http://localhost:3001/framework/f1-emotional-gradient`
Verify: ResearcherHero, sidebar, PropositionBox all unchanged.

**Step 3: Build check**

Run: `npm run build` in the .org directory
Expected: Clean build, no errors.

**Step 4: Final commit and push**

```bash
git push origin main
```
