# Spanish Localization Plan for TEG-Blue.org

## Summary

Build Spanish as a controlled `/es` edition, starting with the Spanish homepage only.

The core Spanish pages remain draft-only until explicitly approved: `/es/how-it-works`, `/es/scientific-foundations`, `/es/models`, `/es/model/m1-emotions-as-signals`, `/es/model/m2-nervous-system-states`, `/es/model/m3-regulation-capacities`, `/es/model/m4-awareness-capacities`, `/es/frameworks-map`, `/es/about`, `/es/methodology`, and `/es/collaborate`.

## Key Changes

- Add Spanish routing for `/es` without publishing any `/es/*` section pages.
- Remove or narrow the previous blanket `/es` redirect so `/es` can exist.
- Keep visibility controlled through `src/lib/live-paths.js`:
  - Add `/es` only when the Spanish homepage is approved.
  - Do not add `/es` to `LIVE_PREFIXES`.
  - Do not add draft Spanish core pages to `LIVE_PATHS`.
- Add locale-aware metadata for the Spanish homepage:
  - `lang="es"` for the Spanish route.
  - Spanish title and description.
  - canonical URL for `/es`.
  - `hreflang` alternates between `/` and `/es`.
  - JSON-LD `inLanguage: "es"`.
- Add a small language switcher that only links to live translated equivalents.
- Create a Spanish terminology/style guide before translating deeper pages.
- Keep creator, attribution, license scope, and excluded-material language visible on the Spanish homepage and consistent across future Spanish pages.

## Implementation Order

1. Create this plan at `docs/spanish-localization-plan.md`.
2. Add minimal i18n helpers for supported locales: `en` and `es`.
3. Add `/es` homepage route using neutral Spanish homepage copy.
4. Update redirects so `/es` is no longer forced to `/`, while hidden `/es/*` pages remain blocked by middleware.
5. Update sitemap and alternates so only live Spanish pages appear.
6. Add language switcher behavior that never links to hidden Spanish pages.
7. Prepare draft structure for future Spanish pages, but keep them unlisted and unpublished.

## Creator, Attribution, and License Language

Use this substance on Spanish public pages and related docs:

> TEG-Blue y el Gradiente del Sistema Nervioso fueron creados por Anna Paretas-Artacho. El contenido público escrito del marco se publica bajo CC BY 4.0: requiere atribución y enlace a la fuente. Las marcas, logotipos, herramientas, código, lógica del Engine, superficies de producto y materiales de terceros quedan excluidos salvo que se indique lo contrario.

Do not publish additional `/es/*` routes to expose this language. Add it only to pages that are explicitly approved and exact-listed in `LIVE_PATHS`.

## Test Plan

- Run `npm run build`.
- Verify `/` still renders and remains canonical English.
- Verify `/es` renders because it is explicitly listed in `LIVE_PATHS`.
- Verify hidden Spanish routes return the site's hidden/410 response and do not appear in sitemap.
- Verify sitemap includes `/es` only while it is live.
- Verify no `/es/*` broad prefix is present in `LIVE_PREFIXES`.
- Verify language switcher does not link to unpublished Spanish pages.
- Visual-check `/es` on desktop and mobile for Spanish text expansion.

## Assumptions

- Spanish uses stable mirrored slugs for now, not translated slugs.
- Spanish locale defaults to neutral international Spanish: `es`.
- The first public Spanish launch is homepage-only.
- Core Spanish pages may be drafted in the repo later, but publication requires explicit approval and exact `LIVE_PATHS` additions.
