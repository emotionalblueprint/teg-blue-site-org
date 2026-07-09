# Spanish Translation Inventory for teg-blue.org

Status: implementation started. First drafted preview route: `/es/glossary`.

Last audited: 2026-07-08.
Last implementation update: 2026-07-09.

This inventory adapts the `teg-blue.com` Spanish translation plan for
`teg-blue.org`. The `.com` plan is tool-surface-first. The `.org` plan should
be research/reference-surface-first: public route copy, glossary terms,
metadata, structured data, source posture, and the home Gradient vocabulary
must stay coherent before Spanish routes are exposed.

## Current Gate

`.org` does not currently use a broad `/es/:path*` redirect gate like `.com`.
The production gate is the live-route allowlist:

- `src/lib/live-paths.js`
- `middleware.js`
- `app/sitemap.js`
- `src/i18n/config.js`
- `src/i18n/routing.js`

Current Spanish scaffold:

- `app/es/page.js` exists, but it re-exports the staged route.
- `app/es/glossary/page.js` exists as a Spanish review route.
- `src/i18n/config.js` maps `/` to `/es` and `/glossary` to `/es/glossary`.
- `SiteHeader` calls `getLiveLocaleLinks(currentPath)` for language links and
  now has localized header copy for Spanish review routes.
- Locale links are hidden because `getLiveLocaleLinks` filters links through
  `isLive()`, and Spanish routes are not in `LIVE_PATHS`.

Do not add Spanish routes to `LIVE_PATHS`, the sitemap, or visible locale
navigation until the first Spanish public slice is coherent. Localhost
`next dev` remains the review surface for drafted Spanish routes because
`middleware.js` allows staged paths in development.

## First Public Slice

Translate only the current approved public surface first. Mirror
`src/lib/live-paths.js`, not every file under `app/`.

### Live Routes

| English route | Spanish first-slice route | Source file |
| --- | --- | --- |
| `/` | `/es` | `app/page.js` |
| `/about` | `/es/about` | `app/about/page.js` |
| `/foundations` | `/es/foundations` | `app/foundations/page.js` |
| `/methodology` | `/es/methodology` | `app/methodology/page.js` |
| `/scientific-foundations` | `/es/scientific-foundations` | `app/scientific-foundations/page.js` |
| `/ethics` | `/es/ethics` | `app/ethics/page.js` |
| `/publications` | `/es/publications` | `app/publications/page.js` |
| `/glossary` | `/es/glossary` | `app/glossary/page.js` |
| `/collaborate` | `/es/collaborate` | `app/collaborate/page.js` |

Open decision: use English slugs under `/es` for the first slice, or translate
slugs. Existing route helpers point toward English slugs under `/es`; translated
slugs would need a larger route map and redirect policy.

Progress:

- `/es/glossary` drafted for review, with Spanish metadata and Spanish
  glossary body copy.
- Shared header/footer copy now has a Spanish path, but untranslated Spanish
  nav targets intentionally fall back to the approved English live routes.
- `/es/glossary` is not in `LIVE_PATHS` or sitemap, so it remains unpublished
  outside localhost development review.

## Shared Surfaces In The First Slice

Translate these with the first slice so Spanish pages do not mix Spanish body
copy with an English shell.

- Header labels, Explore menu labels, and Explore descriptions.
- Footer link labels and license boundary text.
- Home page hero, actions, FAQ, authorship/reuse copy, and Gradient sections.
- `EmotionalGradient` UI labels, aria labels, and toggle copy.
- `GradientMap` labels and chronic-state copy.
- `src/lib/gradient-data.js`.
- `src/data/deep-engine-formations.js`.
- Public rows from `src/data/deep-engine-chronic-data.js` that appear on the
  live home map.
- `ReviewStatusPanel` defaults.
- `PageLayout` sidebar labels if any Spanish route uses sidebar navigation.
- `not-found.js` and the `middleware.js` 410 HTML if Spanish routes can reach
  those during review.
- Page metadata, Open Graph/Twitter metadata, canonical and alternate metadata.
- JSON-LD names, descriptions, FAQ answers, breadcrumb names, and `inLanguage`.
- OG image text and alt text in `app/**/opengraph-image.js`,
  `src/lib/og-template.js`, and `src/lib/og-render.js`.
- `app/manifest.js` description if Spanish install metadata is exposed.
- `app/feed.xml/route.js` only if a Spanish feed is added.

## Hold For Later

Do not translate staged, redirected, or non-live routes in the first slice:

- `/ai-safety`
- `/emotional-somatic-cycle`
- `/models`
- `/model/*`
- `/framework/*`
- `/frameworks-map`
- `/emotional-technology`
- `/research-entry`
- `/design-system`
- `/citations`
- `/how-it-works`
- `/explore/labels`
- all other staged placeholders

`public/llms.txt` and `public/llms-full.txt` are live English AI-readable files.
Do not modify them as part of the first route slice unless a separate Spanish
AI-readable guide is intentionally added.

## What Changes From The .com Plan

- `.com` first slice is driven by the public sitemap and tool route families.
  `.org` first slice is driven by `LIVE_PATHS`.
- `.com` needs practical tool UI, filters, cards, forms, and results. `.org`
  needs research/reference copy, citation posture, structured data, and the
  home Gradient vocabulary.
- `.com` can use plainer tool language. `.org` should preserve source posture:
  field, finding, function, position, claim status, source trace, review, and
  publication status.
- `.org` has a larger SEO/AEO layer: metadata, JSON-LD, OG images, FAQ schema,
  speakable schema, sitemap, canonical, hreflang, and language tags must be
  reviewed as part of translation.
- `.org` has an interactive home map backed by shared data files. Translation
  must include the data layer, not only route page files.
- `.org` has an allowlist middleware gate. Publication means adding Spanish
  routes to `LIVE_PATHS` and sitemap only when ready.

## Glossary Decisions To Use Now

Use `teg-blue-vault/_plans/spanish-glossary-decisions-org.md` before translating
page copy. The `/es/glossary` pass has locked the first set of defaults:

- `The Emotional Gradient Blueprint`
- `The Nervous System Gradient`
- `emotional-pattern legibility`
- `science-grounded` / `research-grounded`
- `source trace` / `source-traced`
- `claim status`
- `pattern reading`
- `state-shaped perception`
- `whole-person verdict`
- `TEG-Blue Engine`, `Deep Engine`, `Visible Engine`
- `Actual Conditions`
- `capacity exceeded`

Terms still open for real UI/map review:

- `Formation`
- `shutdown`
- `strategic management`
- `power mobilisation`
- `Chronic Survival View`
- `Rigid Gradient`

## Recommended Review Families

Translate page-by-page, but review in route families so terminology stays
consistent.

1. Core names, glossary, and public map:
   - `/glossary` (`/es/glossary` drafted for review)
   - `/foundations`
   - `/`
   - `src/lib/gradient-data.js`
   - `src/data/deep-engine-formations.js`
   - public rows from `src/data/deep-engine-chronic-data.js`

2. Method and ethics:
   - `/methodology`
   - `/ethics`
   - `src/components/ReviewStatusPanel.jsx`

3. Research, citation, and reuse:
   - `/scientific-foundations`
   - `/publications`
   - JSON-LD generators used by these pages

4. Project identity and collaboration:
   - `/about`
   - `/collaborate`
   - header/footer shared surfaces

5. SEO, route gate, and visual QA:
   - `src/i18n/config.js`
   - `src/i18n/routing.js`
   - `src/lib/live-paths.js`
   - `app/sitemap.js`
   - `app/layout.js`
   - `app/**/opengraph-image.js`
   - `src/lib/og-template.js`
   - `src/lib/og-render.js`

## Technical Launch Checklist

Do not expose Spanish routes publicly until all of these are true:

- First-slice route inventory is complete.
- Glossary decisions have been reviewed in real page copy.
- Spanish routes exist and render complete Spanish copy.
- Header, footer, shared UI, Gradient/map UI, 404, and 410 review surfaces are
  localized where reachable.
- `src/i18n/config.js` maps every translated route.
- `getLiveLocaleLinks()` shows only reviewed language pairs.
- Internal links on Spanish pages stay inside `/es` when the target exists.
- Links to `.com` point to Spanish `.com` routes only when that session has
  published them; otherwise the fallback should be intentional.
- Each Spanish page has correct title, description, canonical, Open Graph, and
  Twitter metadata.
- `hreflang` / `alternates.languages` include English, Spanish, and
  `x-default` where appropriate.
- JSON-LD uses Spanish names/descriptions for Spanish pages and
  `inLanguage: "es"`.
- Open Graph images and alt text have Spanish versions or an intentional
  fallback.
- The root `<html lang>` problem is solved before launch. Current
  `app/layout.js` hardcodes `lang="en"`, so the implementation must provide a
  reliable Spanish `lang` value for `/es` routes.
- Spanish routes are added to `LIVE_PATHS` only when ready.
- Spanish routes are added to `app/sitemap.js` only when ready to publish.
- Desktop and mobile QA cover the longest Spanish labels in the header, home
  hero actions, Gradient map, glossary cards, and OG image text.
- `npm run lint` and `npm run build` pass before release.

## Suggested Implementation Questions

Resolve these before writing route code:

- Do we want direct `/app/es/...` page files, or a shared content/dictionary
  layer that renders English and Spanish from one route component family?
- Should Spanish slugs stay as `/es/foundations` etc. for the first slice, or
  should SEO-friendly Spanish slugs be introduced now?
- Should the home Gradient data be duplicated per locale, or should the data
  model accept locale-specific labels/descriptions?
- Should Spanish OG images be separate files/routes or generated from shared
  localized metadata?
- Should `public/llms.txt` remain English-only for the first Spanish release,
  or should a Spanish AI-readable guide be added later?
