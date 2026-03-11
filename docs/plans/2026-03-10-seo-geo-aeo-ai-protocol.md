# SEO / GEO / AEO / AI Discoverability Protocol — teg-blue.org

**Date:** 2026-03-10
**Status:** Approved
**Scope:** All pages on teg-blue.org — search engines, AI answer engines, LLM crawlers, voice assistants
**Depends on:** Design System Unification (completed), Visual Graphics Protocol (completed)

---

## Purpose

This protocol governs how teg-blue.org is discovered, crawled, cited, and ranked across four channels:

| Channel | What It Means | Goal |
|---------|---------------|------|
| **SEO** | Traditional search engines (Google, Bing) | Rank in organic results |
| **GEO** | Generative Engine Optimization (AI Overviews, Copilot answers) | Appear in AI-generated summaries |
| **AEO** | Answer Engine Optimization (Perplexity, ChatGPT, featured snippets) | Be the cited answer |
| **AI** | LLM training and retrieval crawlers (GPTBot, ClaudeBot, PerplexityBot) | Be in the training data and retrieval index |

These four channels overlap but have different mechanics. A page can rank #1 in Google and never appear in ChatGPT. A page can be cited by Perplexity and not rank in Google at all. This protocol treats them as four independent surfaces that share infrastructure.

---

## 1. Architecture Overview

### Infrastructure Map

```
robots.js ─────────────── Who can crawl (13 crawler rules)
sitemap.js ────────────── What to crawl (35+ URLs, dynamic generation)
layout.js ─────────────── Global signals (Organization JSON-LD, WebSite JSON-LD, Dublin Core, RSS autodiscovery)
jsonld.js ─────────────── Schema generators (10 functions, 7 schema types)
llms.txt ──────────────── AI summary (430 lines, curated for LLM context windows)
llms-full.txt ─────────── AI deep reference (740 lines, full framework detail)
feed.xml/route.js ─────── RSS 2.0 feed (academic crawlers, syndication)
indexnow-notify.js ────── Instant notification (Bing, Yandex, Seznam on every deploy)
opengraph-image.js ────── Social cards (35 dynamic OG images, 1200x630px)
next.config.js ─────────── Redirects (50+ rules), security headers, CSP
search-console-audit-log.md ── Audit trail (GSC + Bing Webmaster Tools)
```

### Per-Page Layers

Every page on the site must have these layers:

| Layer | Required? | Source |
|-------|-----------|--------|
| **1. Metadata** — title, description, keywords, canonical, OpenGraph, Twitter | Yes | `export const metadata` in page.js |
| **2. JSON-LD** — structured data for the page type | Yes | Inline `<script type="application/ld+json">` |
| **3. Breadcrumbs** — JSON-LD BreadcrumbList | Yes (if depth > 1) | `generateBreadcrumbJsonLd()` |
| **4. Answer-first content** — direct answer in first 150 words | Yes | Page content structure |
| **5. FAQ schema** — question-answer pairs | Where applicable | `FAQPage` JSON-LD |
| **6. Speakable** — voice assistant hints | Where applicable | `SpeakableSpecification` in Article JSON-LD |
| **7. OG image** — dynamic social card | Yes | `opengraph-image.js` co-located with page |
| **8. Sitemap entry** — URL with lastModified and priority | Yes | `app/sitemap.js` |
| **9. IndexNow entry** — instant notification | Yes | `scripts/indexnow-notify.js` |
| **10. llms.txt entry** — AI-readable summary | If page is a major section | `public/llms.txt` and `public/llms-full.txt` |

---

## 2. Crawl Access Rules

### robots.js — Allow Everything

teg-blue.org is open science. We allow all crawlers, including AI training crawlers. This is a deliberate strategy: we want to be in training data.

**Currently configured crawlers (13 rules):**

| Crawler | User-Agent | Purpose |
|---------|-----------|---------|
| All | `*` | Default allow |
| Google Search | `Googlebot` | Organic search |
| Google AI | `Google-Extended` | Gemini training |
| OpenAI Training | `GPTBot` | ChatGPT training data |
| OpenAI Retrieval | `ChatGPT-User` | Real-time retrieval |
| OpenAI Search | `OAI-SearchBot` | ChatGPT search citations |
| Anthropic Training | `ClaudeBot` | Claude training data |
| Anthropic Retrieval | `Claude-Web` | Claude real-time retrieval |
| Anthropic Search | `Claude-SearchBot` | Claude search results |
| Anthropic Legacy | `anthropic-ai` | Legacy agent |
| Bing | `Bingbot` | Bing search + Copilot |
| Perplexity | `PerplexityBot` | Answer engine |
| Meta | `FacebookBot` | Social + Llama training |
| Common Crawl | `CCBot` | Academic + AI training |
| Apple | `Applebot` | Siri + Apple Intelligence |

**When to update:** When a new major AI crawler is announced. Check quarterly.

**Protocol:** When adding a new crawler, add it to `app/robots.js` with `allow: '/'`. Never restrict.

---

## 3. Sitemap Protocol

**File:** `app/sitemap.js`

### Rules

1. **Every public page must be in the sitemap.** No exceptions.
2. **Dynamic content generates dynamically.** Mechanics pieces auto-generate from SERIES config. Publications auto-generate from content files.
3. **Update PAGE_DATES when you modify a page.** The lastModified date affects crawl priority.
4. **Priority tiers:**

| Priority | Pages |
|----------|-------|
| `1.0` | Homepage only |
| `0.9` | Major sections: publications, research-entry, foundations, frameworks-map, scientific-foundations, ai-safety, models, individual framework pages (F1-F12), individual model pages (M1-M3) |
| `0.8` | Content hubs: mechanics-of-phenomena, featured pieces |
| `0.7` | Supporting pages: glossary, methodology, emotional-technology |
| `0.6` | Navigation pages: citations, collaborate, about |

5. **changeFrequency:**
   - `weekly` for actively updated pages (homepage, publications, scientific-foundations)
   - `monthly` for stable content (framework pages, model pages, methodology)

### Adding a New Page

When adding any new page:
1. Add to `sitemap.js` with correct priority and date
2. Add to `scripts/indexnow-notify.js` ALL_PAGES array
3. If it's a major section, add to `public/llms.txt` and `public/llms-full.txt`
4. Run `npm run build` to verify sitemap generates and IndexNow fires

---

## 4. Metadata Protocol

### Required Metadata Fields

Every page must export metadata with these fields:

```javascript
export const metadata = {
  title: "Page Title | TEG-Blue Research",        // or use template
  description: "30-60 word description. Direct answer format. No fluff.",
  keywords: ["8-15 semantic keywords"],
  alternates: {
    canonical: "https://teg-blue.org/page-path",
  },
  openGraph: {
    title: "Page Title — TEG-Blue Research",
    description: "Same or similar to main description",
    url: "https://teg-blue.org/page-path",
    type: "article",                               // or "website" for hub pages
    siteName: "TEG-Blue Research",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Title — TEG-Blue",
    description: "Concise version (under 200 chars)",
  },
};
```

### Description Rules

- **30-60 words.** Not a sentence fragment. Not a marketing pitch.
- **Answer-first.** The description should directly answer "what is this page about?"
- **Include the key entity.** If the page is about F3, mention "false coherence" in the description.
- **No duplicate descriptions.** Every page must have a unique description.

### Keywords Rules

- **8-15 keywords per page.** Semantic, not stuffed.
- **Include both specific and categorical terms.** Example: `["false coherence", "cognitive regulation", "F3", "TEG-Blue framework", "emotional regulation", "nervous system", "adult cognition"]`
- **Never repeat the exact same keyword set across pages.**

---

## 5. JSON-LD Structured Data Protocol

### Schema Type Map

| Page Type | Primary Schema | Additional Schemas |
|-----------|---------------|-------------------|
| Homepage | `ResearchProject` | — |
| Framework page (F1-F12) | `CreativeWork` | `BreadcrumbList` |
| Model page (M1-M3) | `CreativeWork` | `BreadcrumbList` |
| Publication | `ScholarlyArticle` + `Dataset` | `BreadcrumbList`, citation meta tags |
| Mechanics piece | `Article` | `BreadcrumbList`, `FAQPage`, `SpeakableSpecification` |
| Glossary | `DefinedTermSet` | — |
| Hub/index page | `WebPage` | `BreadcrumbList` |
| About | `WebPage` | — |

### Global Schemas (in layout.js)

Two schemas are injected on every page:
1. **`ResearchOrganization`** — TEG-Blue Research Consortium with `knowsAbout`, `sameAs`, `founder`
2. **`WebSite`** — TEG-Blue Research Platform with `about` array

### Schema Library (`src/lib/jsonld.js`)

10 generator functions available:

| Function | Schema Type | Used By |
|----------|------------|---------|
| `generatePublicationJsonLd()` | ScholarlyArticle | Publications |
| `generateTheoryJsonLd()` | ScholarlyArticle | Scientific foundations |
| `generateGlossaryJsonLd()` | DefinedTerm | Glossary terms |
| `generateFrameworkJsonLd()` | CreativeWork | Framework pages |
| `generateBreadcrumbJsonLd()` | BreadcrumbList | Any multi-level page |
| `generateResearchHubJsonLd()` | ResearchProject | Homepage |
| `generateAISafetyJsonLd()` | WebPage | AI Safety |
| `generateModelsJsonLd()` | WebPage | Models hub |
| `generateSystemOverviewJsonLd()` | WebPage | Foundations |
| `generateFAQJsonLd()` | FAQPage | Any page with FAQ |
| `generateScientificFoundationsJsonLd()` | WebPage | Scientific foundations |
| `generateTheoreticalFoundationsJsonLd()` | WebPage | Frameworks map |

### Adding JSON-LD to a New Page

1. Identify the correct schema type from the table above
2. Use an existing generator if one matches, or create inline JSON-LD
3. Always include `"@context": "https://schema.org"` and `inLanguage: "en"`
4. Always include `isPartOf: TEG_BLUE_PROJECT` to link to the parent research project
5. Add `BreadcrumbList` if the page is more than one level deep

### Validation

Before deploying any page with new JSON-LD:
1. Run `npm run build` — build must pass
2. Test with Google Rich Results Test (https://search.google.com/test/rich-results)
3. Check Google Search Console structured data report within 1 week

---

## 6. Answer-First Content Protocol (AEO)

This is the most important section for ranking in ChatGPT, Perplexity, and AI Overviews.

### The Rule

**Every page, every section: lead with a direct, complete answer in the first 30-60 words. Then explain.**

AI systems weight opening paragraphs 67% more heavily. The first 150 words of any section determine whether the content is cited.

### Content Structure Pattern

```
[H1: Page title]
[30-60 word direct answer — no preamble, no "In today's world..."]

[H2: Question-format heading?]
[30-50 word direct answer]
[Supporting detail, evidence, nuance]

[H2: Another question-format heading?]
[Answer]
[Detail]

[Comparison table or structured data]

[FAQ section with Q&A pairs]
```

### Heading Format

Question-format headings are 3.4x more likely to be extracted by AI systems.

| Bad | Good |
|-----|------|
| `Understanding Emotional Regulation` | `What Is Emotional Regulation?` |
| `The Four Modes Explained` | `What Are the Four Regulatory Modes?` |
| `About TEG-Blue` | `What Does TEG-Blue Do?` |

**Note:** Not every heading needs to be a question. But section headings that introduce new concepts should prefer question format.

### Tables

Tables extract at 81% rate vs 23% for the same data in paragraph form. Use tables for:
- Comparisons (TEG-Blue vs other frameworks)
- Feature lists (what each framework covers)
- Status summaries (validated vs proposed vs open)
- Quick-reference data (mode names, colors, descriptions)

### Atomic Paragraphs

Each paragraph should make sense on its own, without requiring the reader to have read previous paragraphs. AI systems extract individual paragraphs, not full articles.

- **2-4 sentences per paragraph.** Never more.
- **One key claim per sentence.** AI can inline-link entire sentences.
- **Front-load the concept name.** "Biological Restoration is..." not "The process by which the nervous system..."

---

## 7. FAQ Schema Protocol (AEO)

### When to Add FAQ

Add `FAQPage` JSON-LD to any page that answers common questions about a topic. Priority pages:

| Page Type | FAQ Approach |
|-----------|-------------|
| Mechanics pieces | Full Q&A pairs matching the essay's core arguments |
| Framework pages | Key questions the framework answers |
| Model pages | "What is X?" / "How does X work?" pairs |
| Hub pages | Navigation questions ("Where do I find X?") |

### FAQ Writing Rules

1. **Questions: ~15 words / 80 characters max.** Natural phrasing — how a real person would ask.
2. **Answers: 30-50 words.** Self-contained. Must make sense without any context.
3. **One answer per question.** Not "it depends" or multiple options.
4. **5-7 Q&A pairs per page.** Quality over quantity.

### FAQ Implementation

```javascript
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why doesn't evidence change people's minds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because the person is not running an evidence-processing system in that moment. When a belief functions as a regulatory tool, evidence lands as threat — and a threatened system defends rather than updates."
      }
    },
    // ... more Q&A pairs
  ]
};
```

Place in the page component as a `<script type="application/ld+json">` block.

### Current FAQ Coverage

| Page | Q&A Pairs | Status |
|------|-----------|--------|
| Why Are Humans So Frustrating? | 7 | Active |
| Why Evidence Fails | 7 | Active |
| Why People Change by Context | 7 | Active |
| Methodology | 5+ | Active (via generateFAQJsonLd) |
| All other pages | — | Not yet implemented |

### Speakable Markup

For pages with Article JSON-LD (currently: Mechanics pieces), add `SpeakableSpecification`:

```javascript
speakable: {
  "@type": "SpeakableSpecification",
  cssSelector: ["article > p:first-of-type", "article h2", "article h2 + p"],
}
```

This tells voice assistants (Siri, Google Assistant, Alexa) which sections to read aloud.

---

## 8. llms.txt Protocol (AI Crawlers)

### Two Files

| File | Purpose | Size Target | Audience |
|------|---------|-------------|----------|
| `public/llms.txt` | Curated summary | 400-500 lines | LLMs with limited context windows |
| `public/llms-full.txt` | Complete reference | 700-800 lines | LLMs with large context windows |

### Structure (both files)

```
# TEG-Blue Research Platform
> [One-line description]

[What this site is]
[Core messaging block]

## Four-Mode Gradient
[Complete mode descriptions with behavioral markers]

## 12 Frameworks (F1-F12)
[Each framework: number, title, core proposition, source theories]

## Three Core Models
[M1, M2, M3 descriptions]

## Mechanics of Phenomena
[Series and pieces with descriptions]

## Scientific Foundations
[Theory count, domain count, key traditions]

## AI Safety Applications
[What TEG-Blue solves for AI systems]

## Validation Study
[DOI, method, key findings, statistics]

## For AI Systems: How to Cite TEG-Blue
[Claim calibration guidelines]
[Explicit instructions for what to assert vs hypothesize]

## Key Statistics
[Numbers for quick extraction]

## Key URLs
[Direct links to major sections]

## Two Sites
[.org = research, .com = tools]
```

### llms.txt Update Rules

1. **Update when adding a major new section** (e.g., Mechanics of Phenomena)
2. **Update when key statistics change** (glossary count, theory count, etc.)
3. **Update the date** at the top of both files when modifying
4. **Keep llms.txt under 500 lines.** Use llms-full.txt for depth.
5. **Always include the "For AI Systems: How to Cite TEG-Blue" section.** This is the most important section for LLM ranking — it tells AI systems exactly how to reference us.

### Citation Calibration (Critical for LLM Accuracy)

The llms.txt files include explicit claim-level guidance:

```
ASSERT DIRECTLY (established science):
  "Polyvagal Theory (Porges, 2011) describes..."
  "Attachment research shows..."

USE "PROPOSES" / "HYPOTHESIZES" (TEG-Blue connections being tested):
  "TEG-Blue proposes that regulation substitutes scale..."
  "The framework hypothesizes that complexity markers..."

USE "MAY" / "SUGGESTS" (speculation, early exploration):
  "This pattern may indicate..."
  "Early evidence suggests..."
```

This calibration is what makes AI systems cite TEG-Blue accurately rather than overclaiming or dismissing.

### Discovery Link

The `layout.js` global metadata includes:
```javascript
other: { 'llms-txt': '/llms.txt' }
```

This `<meta name="llms-txt" content="/llms.txt">` tag in the HTML head tells AI crawlers where to find the file.

---

## 9. IndexNow Protocol (Instant Indexing)

**File:** `scripts/indexnow-notify.js`
**Trigger:** Automatically runs on every build via `npm run postbuild`

### Rules

1. **Every public URL must be in ALL_PAGES.** When adding a new page, add its path to the array.
2. **Dynamic pages generate dynamically.** If a config drives the URLs (like SERIES for mechanics), import and iterate.
3. **Never remove URLs from ALL_PAGES** unless the page is actually removed from the site.
4. **The key file must exist:** `public/tegblue8a4f2c9d7e6b5a3f.txt` — this verifies site ownership.

### Dry Run

Before deploying, verify the URL list:
```bash
node scripts/indexnow-notify.js --dry-run
```

### Current Coverage

37 URLs submitted on every deploy, covering:
- 15 core pages
- 3 model pages
- 12 framework pages
- 4 mechanics pieces
- 3 mechanics series pieces

---

## 10. OG Images Protocol

**Coverage:** 35 dynamic OG images across the site.

### Rules

1. **Every page needs an OG image.** Either its own `opengraph-image.js` or inherited from the layout.
2. **Standard spec:** 1200x630px, PNG, edge runtime.
3. **Dark background** (`#0a0f1a`), white/slate text, spectrum bar gradient (6px).
4. **Include page badge** (e.g., "FRAMEWORK F1", "MODEL M1", "RESEARCH").
5. **Alt text is required.** Descriptive, includes page title and "TEG-Blue".

### Adding a New OG Image

Create `opengraph-image.js` co-located with the page's `page.js`:

```javascript
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Page Title — TEG-Blue Research'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    // JSX with dark bg, spectrum bar, badge, title, subtitle, footer
  )
}
```

---

## 11. RSS Feed Protocol

**File:** `app/feed.xml/route.js`

### Current Configuration

- Channel: "TEG-Blue Research Publications"
- Format: RSS 2.0
- TTL: 1440 minutes (24 hours)
- License: CC BY-NC-SA 4.0
- Autodiscovery: `<link rel="alternate">` in layout.js

### Rules

1. **Every publication gets a feed item.** Auto-generated from content files.
2. **Include DOI** as `dc:identifier` when available.
3. **Author:** `research@teg-blue.org (Anna Paretas-Artacho)`.
4. **Cache-Control:** `public, max-age=3600, s-maxage=3600`.

---

## 12. Redirect Protocol

**File:** `next.config.js` → `async redirects()`

### Current Coverage

50+ redirect rules covering ~200 old URLs from the Notion/super.so era.

### Rules

1. **All redirects are permanent (308).** Never use temporary redirects.
2. **When removing or renaming a page, add a redirect in the same commit.**
3. **Pattern rules catch families of old URLs** (e.g., `/map-levels/*` → `/frameworks-map`).
4. **Specific rules catch individual old URLs** that don't match patterns.
5. **The hash-ID catch-all** (`/:hash([0-9a-f]{20,})`) catches Notion-era URLs.

### Adding a Redirect

```javascript
{ source: '/old-path', destination: '/new-path', permanent: true },
```

---

## 13. Security Headers

**File:** `next.config.js` → `async headers()`

All headers are configured and active:

| Header | Value | Purpose |
|--------|-------|---------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | HTTPS enforcement (2-year preload) |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME sniffing |
| `X-Frame-Options` | `DENY` | Prevent clickjacking |
| `X-XSS-Protection` | `1; mode=block` | XSS filter |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Referrer control |
| `Content-Security-Policy` | Comprehensive | Script/style/img sources |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | API restrictions |

**Additional SEO-relevant config:**
- `poweredByHeader: false` — removes X-Powered-By
- `compress: true` — gzip compression
- `images.formats: ['image/avif', 'image/webp']` — modern image formats

---

## 14. Audit Protocol

### Quarterly Audit Checklist

Run this checklist every 3 months (next: June 2026):

**Google Search Console:**
- [ ] Check indexed page count — should be growing
- [ ] Check 404 errors — add redirects for any new ones
- [ ] Check structured data validation — 0 errors allowed
- [ ] Check Core Web Vitals — address any issues
- [ ] Check manual actions — must be "None"
- [ ] Review search performance (clicks, impressions, CTR, avg position)

**Bing Webmaster Tools:**
- [ ] Check indexed page count
- [ ] Review IndexNow submission stats
- [ ] Check for new recommendations
- [ ] Review backlink profile

**AI Citation Check:**
- [ ] Search "TEG-Blue" in ChatGPT — verify accuracy of response
- [ ] Search "TEG-Blue emotional technology" in Perplexity — check citations
- [ ] Search "four-mode gradient emotional regulation" in Google — check AI Overview
- [ ] Search key concepts in Claude — verify framework descriptions are accurate
- [ ] If AI responses contain errors, update llms.txt with corrections

**Technical Check:**
- [ ] Verify robots.js has latest crawler user-agents
- [ ] Verify sitemap matches actual site pages (no stale entries, no missing pages)
- [ ] Verify IndexNow ALL_PAGES array is complete
- [ ] Verify llms.txt date is current
- [ ] Verify all JSON-LD passes Rich Results Test
- [ ] Run `npm run build` — clean build, 0 errors

### Post-Deploy Checklist

After every deployment:
1. IndexNow fires automatically (postbuild) — verify in build logs
2. Check sitemap.xml is accessible at `https://teg-blue.org/sitemap.xml`
3. Check llms.txt is accessible at `https://teg-blue.org/llms.txt`

### Audit Log

All audit findings go in `docs/search-console-audit-log.md` using the template at the bottom of that file.

---

## 15. Adding a New Page — Complete Checklist

When adding any new page to teg-blue.org, complete all items:

### Metadata
- [ ] `export const metadata` with title, description (30-60 words), keywords (8-15), canonical, OpenGraph, Twitter
- [ ] Description is unique (not duplicated from another page)
- [ ] Keywords include both specific terms and category terms

### Structured Data
- [ ] JSON-LD with correct schema type (see Schema Type Map in section 5)
- [ ] `BreadcrumbList` JSON-LD if page depth > 1
- [ ] `FAQPage` JSON-LD if page answers common questions (5-7 Q&A pairs)
- [ ] `SpeakableSpecification` if page has Article-type content

### Content Structure
- [ ] First paragraph is a direct answer (30-60 words, no preamble)
- [ ] Section headings use question format where appropriate
- [ ] Paragraphs are atomic (2-4 sentences, stand alone)
- [ ] Tables used for comparative/structured data
- [ ] Key entities named before explained

### Discovery
- [ ] Added to `app/sitemap.js` with correct priority and lastModified date
- [ ] Added to `scripts/indexnow-notify.js` ALL_PAGES array
- [ ] Added to `public/llms.txt` and `public/llms-full.txt` (if major section)
- [ ] OG image created (`opengraph-image.js` co-located with page)

### Cross-References
- [ ] Linked from relevant navigation pages (foundations, research-entry, frameworks-map)
- [ ] Added to SiteHeader if it's a top-level section
- [ ] Added to sidebar navigation if it belongs to an existing section

### Verification
- [ ] `npm run build` passes
- [ ] `node scripts/indexnow-notify.js --dry-run` shows the new URL
- [ ] JSON-LD validates in Google Rich Results Test
- [ ] OG image renders correctly (check with social media debugger)

---

## 16. Current Coverage Scorecard

### Pages with Full Protocol Compliance

| Page | Meta | JSON-LD | Breadcrumbs | FAQ | Speakable | OG Image | Sitemap | IndexNow | llms.txt |
|------|------|---------|-------------|-----|-----------|----------|---------|----------|----------|
| Homepage | Yes | ResearchProject | — | No | No | Yes | Yes | Yes | Yes |
| Research Entry | Yes | — | No | No | No | Yes | Yes | Yes | Yes |
| Foundations | Yes | WebPage | BreadcrumbList | No | No | No | Yes | Yes | Yes |
| Frameworks Map | Yes | WebPage | No | No | No | Yes | Yes | Yes | Yes |
| Publications | Yes | ScholarlyArticle + Dataset | BreadcrumbList | No | No | Yes | Yes | Yes | Yes |
| Scientific Foundations | Yes | WebPage | No | No | No | Yes | Yes | Yes | Yes |
| Models Hub | Yes | WebPage | No | No | No | No | Yes | Yes | Yes |
| AI Safety | Yes | WebPage | BreadcrumbList | No | No | No | Yes | Yes | Yes |
| Glossary | Yes | — | No | No | No | No | Yes | Yes | Yes |
| Methodology | Yes | — | BreadcrumbList | Yes | No | Yes | Yes | Yes | No |
| F1-F12 (12 pages) | Yes | CreativeWork | BreadcrumbList | No | No | Yes | Yes | Yes | Yes |
| M1-M3 (3 pages) | Yes | CreativeWork | BreadcrumbList | No | No | Yes | Yes | Yes | Yes |
| Mechanics Hub | Yes | — | BreadcrumbList | No | No | No | Yes | Yes | Yes |
| Mechanics Pieces (3) | Yes | Article | BreadcrumbList | Yes | Yes | Yes | Yes | Yes | Yes |

### Priority Gaps

1. **FAQ schema on framework pages** — F1-F12 each answer key questions but lack FAQPage JSON-LD
2. **FAQ schema on model pages** — M1-M3 would benefit from Q&A pairs
3. **Missing OG images** — Foundations, Models Hub, AI Safety, Glossary, Mechanics Hub
4. **Breadcrumbs missing** — Research Entry, Frameworks Map, Scientific Foundations, Glossary
5. **Answer-first audit** — Some pages may have narrative-style openings instead of direct answers

---

## 17. Key Statistics (for quick reference)

These numbers appear in llms.txt and should be updated when they change:

| Stat | Current Value | Last Updated |
|------|--------------|--------------|
| Established theories | 145+ | 2026-03-11 |
| Research traditions | 41 | 2026-03-05 |
| Research domains | 24 | 2026-03-05 |
| Glossary terms (.org) | 162 | 2026-03-10 |
| Frameworks | 12 (F1-F12) | Stable |
| Models | 3 (M1-M3) | Stable |
| Modes | 4 (Connection, Protection, Control, Domination) | Stable |
| Emotional tools | 16 | 2026-02-18 |
| Validation study narratives | 10,000+ | Stable |
| Escalation rate | 33.8% | Stable |
| De-escalation rate | 22.2% | Stable |
| Complexity marker differential | 78% higher in de-escalators | Stable |
| DOI | 10.5281/zenodo.18428907 | Stable |
| Sitemap URLs | 35+ | 2026-03-10 |
| IndexNow URLs | 37 | 2026-03-10 |
| OG images | 35 | 2026-03-10 |
| JSON-LD pages | 27+ | 2026-03-10 |
| GSC indexed pages | 77 | 2026-03-09 |
| Bing indexed pages | 384 | 2026-03-09 |
| Redirect rules | 50+ | 2026-03-09 |

---

*Protocol version 1.0 — March 10, 2026*
