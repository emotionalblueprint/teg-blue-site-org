# Site-Wide Layout Expansion + Right Sidebar

**Date:** 2026-03-07
**Status:** Approved

## Summary

Expand the entire .org site from 820px to 1100px max-width (matching the Mechanics of Phenomena section) and add a sticky right sidebar on every page with manually-written section descriptions.

## Design Decisions

1. **Width**: All pages → 1100px max-width (from 820px)
2. **Right sidebar**: 240px wide, sticky at top: 80px, manually curated content per page
3. **Mobile (< 900px)**: Sidebar hidden, content full-width
4. **Mechanics of Phenomena**: Keeps its own `MechanicsLayout` with LEFT sidebar (unchanged)
5. **Implementation**: Shared `PageLayout` component wrapping all pages

## PageLayout Component

**Location:** `src/components/PageLayout.jsx`

**Props:**
- `children` — page content (everything currently inside `<main>`)
- `sidebarSections` — array of `{ label, description }` objects
- If `sidebarSections` is empty/undefined, page renders at 1100px with no sidebar column

**Layout:**
```
┌──────────────────── 1100px ────────────────────┐
│                                                 │
│  ┌── Main Content (1fr) ──┐  ┌── Sidebar 240px ┐
│  │                         │  │                  │
│  │  Page content           │  │  Section label   │
│  │  (unchanged)            │  │  Description     │
│  │                         │  │                  │
│  │                         │  │  Section label   │
│  │                         │  │  Description     │
│  │                         │  │  (sticky)        │
│  └─────────────────────────┘  └──────────────────┘
│                                                 │
└─────────────────────────────────────────────────┘
```

**CSS Grid:** `grid-template-columns: 1fr 240px`, `gap: 48px`
**Sticky:** `position: sticky; top: 80px; max-height: calc(100vh - 100px); overflow-y: auto`
**Mobile:** `@media (max-width: 900px)` → sidebar `display: none`, grid becomes `display: block`

## Token Update

```js
// src/styles/tokens.js
SPACING.containerMax: 820 → 1100
```

## Pages to Update (36 total)

### Standard pages (currently 820px):
- Home (`app/page.js`)
- Glossary, Scientific Foundations, Publications, Citations
- Frameworks Map, Methodology, Models, Foundations
- Epistemological Foundations, Emotional Technology
- Collaborate, Research Entry, AI Safety, About
- Design System
- Publications/[slug]

### Framework pages (currently 900px):
- F1–F12 (12 pages)

### Model pages:
- M1, M2, M3

### Excluded:
- Mechanics of Phenomena (keeps own MechanicsLayout with left sidebar)

## Migration Pattern

**Before:**
```jsx
<main style={{ maxWidth: SPACING.containerMax, margin: "0 auto", padding: `32px ${SPACING.pagePadding} 60px` }}>
  {/* content */}
</main>
```

**After:**
```jsx
<PageLayout sidebarSections={[
  { label: "Section Name", description: "Brief description of this section" },
]}>
  {/* same content, unchanged */}
</PageLayout>
```

## What Stays Unchanged

- All existing prose width constraints (maxWidth on paragraphs, 70ch, etc.)
- SiteHeader and SiteFooter
- Mobile experience (sidebar just hides)
- Mechanics of Phenomena layout
- All inline styling patterns (tokens.js)
