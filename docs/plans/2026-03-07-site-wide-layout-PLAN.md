# Site-Wide Layout Expansion + Right Sidebar — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Expand every .org page to 1100px max-width and add a sticky right sidebar with manually-written section descriptions.

**Architecture:** Create a shared `PageLayout` component that wraps every page's content in a CSS Grid (1fr + 240px sidebar). Each page passes `sidebarSections` prop with curated `{ label, description }` entries. Sidebar is sticky, hidden on mobile. Mechanics of Phenomena keeps its own layout unchanged.

**Tech Stack:** React inline styles + injected `<style>` tag (matching existing MechanicsLayout pattern), tokens.js for all values.

---

### Task 1: Update SPACING.containerMax token

**Files:**
- Modify: `src/styles/tokens.js:104`

**Step 1: Change containerMax from 820 to 1100**

In `src/styles/tokens.js`, line 104, change:
```js
containerMax: 820,
```
to:
```js
containerMax: 1100,
```

This automatically widens all pages that reference `SPACING.containerMax`.

**Step 2: Verify no regressions**

Run: `npm run build` in the .org directory.
Expected: Build succeeds with no errors.

**Step 3: Commit**

```bash
git add src/styles/tokens.js
git commit -m "chore: widen containerMax from 820px to 1100px"
```

---

### Task 2: Create PageLayout component

**Files:**
- Create: `src/components/PageLayout.jsx`
- Modify: `src/components/index.js`

**Step 1: Create the PageLayout component**

Create `src/components/PageLayout.jsx` with this content:

```jsx
import { BG, TEXT, FONT, BORDER, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";

const px = SPACING.pagePadding;

const RESPONSIVE_CSS = `
  .page-layout-columns {
    display: grid;
    grid-template-columns: 1fr 240px;
    gap: 48px;
    align-items: start;
  }
  .page-layout-sidebar {
    position: sticky;
    top: 80px;
    align-self: start;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }

  @media (max-width: 900px) {
    .page-layout-columns {
      display: block;
    }
    .page-layout-sidebar {
      display: none;
    }
  }
`;

/**
 * PageLayout — Site-wide layout wrapper.
 *
 * Provides 1100px max-width container with optional sticky right sidebar.
 * Replaces per-page <main> container pattern.
 *
 * Props:
 *   children: React node — the page content
 *   sidebarSections: array of { label, description } — right sidebar content
 *     If empty or undefined, renders without sidebar column
 *   currentPath: string — passed to SiteHeader
 */
export default function PageLayout({ children, sidebarSections }) {
  const hasSidebar = sidebarSections && sidebarSections.length > 0;

  return (
    <>
      {hasSidebar && <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />}

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${px} 60px`,
        }}
      >
        {hasSidebar ? (
          <div className="page-layout-columns">
            <div style={{ minWidth: 0 }}>
              {children}
            </div>
            <aside className="page-layout-sidebar">
              <nav style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                {sidebarSections.map((section, i) => (
                  <div key={i} style={{
                    paddingBottom: i < sidebarSections.length - 1 ? 20 : 0,
                    borderBottom: i < sidebarSections.length - 1
                      ? `1px solid ${BORDER.default}`
                      : "none",
                  }}>
                    <div style={{
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: FONT.mono,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: SPECTRUM.cobalt,
                      marginBottom: 6,
                    }}>
                      {section.label}
                    </div>
                    <div style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: TEXT.secondary,
                    }}>
                      {section.description}
                    </div>
                  </div>
                ))}
              </nav>
            </aside>
          </div>
        ) : (
          children
        )}
      </main>
    </>
  );
}
```

**Step 2: Export from component index**

In `src/components/index.js`, add this line after the existing Page components section (after line 35):

```js
export { default as PageLayout } from "./PageLayout";
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/components/PageLayout.jsx src/components/index.js
git commit -m "feat: add PageLayout component with optional right sidebar"
```

---

### Task 3: Migrate standard pages (Group A — 16 pages)

These pages all follow the same pattern: outer `<div>` with `minHeight/BG/FONT`, then `<SiteHeader>`, then `<main>` with `maxWidth: SPACING.containerMax`, then content, then `<SiteFooter>`.

**Files to modify:**
1. `app/page.js` (Home)
2. `app/about/page.js`
3. `app/glossary/page.js`
4. `app/scientific-foundations/page.js`
5. `app/publications/page.js`
6. `app/publications/[slug]/page.js`
7. `app/citations/page.js`
8. `app/frameworks-map/page.js`
9. `app/methodology/page.js`
10. `app/models/page.js`
11. `app/foundations/page.js`
12. `app/epistemological-foundations/page.js`
13. `app/emotional-technology/page.js`
14. `app/collaborate/page.js`
15. `app/research-entry/page.js`
16. `app/ai-safety/page.js`

**Migration pattern for each page:**

For each page, the transformation is:

**Before:**
```jsx
import { SiteHeader, SiteFooter } from "@/src/components";

export default function SomePage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/path" />
      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${SPACING.pagePadding} 60px`,
        }}
      >
        {/* content */}
      </main>
      <SiteFooter />
    </div>
  );
}
```

**After:**
```jsx
import { SiteHeader, SiteFooter, PageLayout } from "@/src/components";

export default function SomePage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/path" />
      <PageLayout sidebarSections={[]}>
        {/* same content, unchanged */}
      </PageLayout>
      <SiteFooter />
    </div>
  );
}
```

**Key changes per page:**
1. Add `PageLayout` to the import from `@/src/components`
2. Replace `<main id="main-content" style={{ maxWidth: SPACING.containerMax, margin: "0 auto", padding: ... }}>` with `<PageLayout sidebarSections={[]}>`
3. Replace closing `</main>` with `</PageLayout>`
4. `SPACING` can be removed from import if no longer used elsewhere on the page

Pass `sidebarSections={[]}` (empty array) for now. Sidebar content will be added per-page later by Anna.

**Step 1: Migrate all 16 pages**

Apply the pattern above to each page. Each page is independent — can be done in parallel.

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add app/page.js app/about/page.js app/glossary/page.js app/scientific-foundations/page.js app/publications/page.js "app/publications/[slug]/page.js" app/citations/page.js app/frameworks-map/page.js app/methodology/page.js app/models/page.js app/foundations/page.js app/epistemological-foundations/page.js app/emotional-technology/page.js app/collaborate/page.js app/research-entry/page.js app/ai-safety/page.js
git commit -m "refactor: migrate 16 standard pages to PageLayout component"
```

---

### Task 4: Migrate framework pages (Group B — F1-F8, use SPACING.containerMax)

These 8 framework pages use `SPACING.containerMax` and follow the standard pattern.

**Files:**
- `app/framework/f1-emotional-gradient/page.js`
- `app/framework/f2-awareness-calibration/page.js`
- `app/framework/f3-false-coherence/page.js`
- `app/framework/f4-rules-regulate/page.js`
- `app/framework/f5-worth-hierarchies/page.js`
- `app/framework/f6-bias-regulates/page.js`
- `app/framework/f7-domination-regulates/page.js`
- `app/framework/f8-repairing-awareness/page.js`

**Same migration pattern as Task 3.** Add `PageLayout` to imports, replace `<main>` wrapper.

**Step 1: Migrate all 8 pages**

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add app/framework/f1-emotional-gradient/page.js app/framework/f2-awareness-calibration/page.js app/framework/f3-false-coherence/page.js app/framework/f4-rules-regulate/page.js app/framework/f5-worth-hierarchies/page.js app/framework/f6-bias-regulates/page.js app/framework/f7-domination-regulates/page.js app/framework/f8-repairing-awareness/page.js
git commit -m "refactor: migrate F1-F8 framework pages to PageLayout"
```

---

### Task 5: Migrate framework pages (Group C — F9-F12, hardcoded maxWidth: 900)

These 4 pages hardcode `maxWidth: 900` instead of using the token. They also use `SPACING.xl` and `SPACING.md` which are undefined in tokens.js.

**Files:**
- `app/framework/f9-neurodivergence-variation/page.js`
- `app/framework/f10-generational-bridges/page.js`
- `app/framework/f11-emotional-paradoxes/page.js`
- `app/framework/f12-two-information-systems/page.js`

**Migration pattern — slightly different:**

Find the `<main>` tag with `maxWidth: 900` and replace with `<PageLayout>`. The padding fix (removing undefined SPACING.xl/SPACING.md) is handled automatically since PageLayout uses its own padding.

**Before (F9-F12 pattern):**
```jsx
<main
  id="main-content"
  style={{
    maxWidth: 900, margin: "0 auto",
    padding: `${SPACING.xl} ${SPACING.md} 80px`,
  }}
>
```

**After:**
```jsx
<PageLayout sidebarSections={[]}>
```

**Step 1: Migrate all 4 pages**

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add app/framework/f9-neurodivergence-variation/page.js app/framework/f10-generational-bridges/page.js app/framework/f11-emotional-paradoxes/page.js app/framework/f12-two-information-systems/page.js
git commit -m "refactor: migrate F9-F12 to PageLayout, fix undefined SPACING refs"
```

---

### Task 6: Migrate model pages (Group D — M1, M2, M3)

**Files:**
- `app/model/m1-inner-compass/page.js`
- `app/model/m2-three-awareness-capacities/page.js`
- `app/model/m3-the-open-cycle/page.js`

**Same migration pattern as Task 3.**

**Step 1: Migrate all 3 pages**

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add app/model/m1-inner-compass/page.js app/model/m2-three-awareness-capacities/page.js app/model/m3-the-open-cycle/page.js
git commit -m "refactor: migrate M1-M3 model pages to PageLayout"
```

---

### Task 7: Migrate remaining pages (design-system, not-found)

**Files:**
- `app/design-system/page.js`
- `app/not-found.js`

**Same migration pattern as Task 3.**

**Step 1: Migrate both pages**

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors.

**Step 3: Commit**

```bash
git add app/design-system/page.js app/not-found.js
git commit -m "refactor: migrate design-system and not-found to PageLayout"
```

---

### Task 8: Final verification

**Step 1: Full build**

Run: `npm run build`
Expected: Build succeeds, all pages compile.

**Step 2: Visual check**

Start dev server (`npm run dev`) and spot-check these pages in browser:
- Home page (/)
- A framework page (/framework/f1-emotional-gradient)
- Glossary (/glossary)
- Mechanics of Phenomena (/mechanics-of-phenomena) — should be UNCHANGED

Expected: All pages render at 1100px width. No sidebar visible yet (empty arrays). Mechanics of Phenomena still has its left sidebar. Mobile responsive (narrow the browser) — content fills width.

**Step 3: Final commit if any fixes needed**

---

## Notes

- **Sidebar content**: All pages start with `sidebarSections={[]}`. Anna will add custom descriptions per page over time. When populated, the right sidebar will appear automatically.
- **Mechanics of Phenomena**: Completely excluded from this migration. It keeps its own `MechanicsLayout` with left sidebar at 1100px.
- **Prose widths**: Existing `maxWidth` constraints on paragraphs (640px, 720px, 70ch) are untouched — they still constrain reading width within the wider container.
