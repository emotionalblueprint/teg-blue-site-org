# Search Console Audit Log

Tracking Google Search Console and Bing Webmaster Tools findings, actions taken, and results for teg-blue.org.

---

## 2026-03-09 — Full GSC Audit

### Overview

| Metric | Value |
|--------|-------|
| **Total indexed pages** | 77 |
| **Total not indexed** | 472 |
| **Performance (last 28 days)** | 84 clicks, 2.53K impressions, 3.3% CTR, avg position 13.2 |

### Page Indexing Breakdown

| Status | Count | Action |
|--------|-------|--------|
| Not found (404) | 203 | Analyzed — see below |
| Page with redirect | 128 | Expected (old URLs redirecting correctly) |
| Crawled - currently not indexed | 119 | Analyzed — see below |
| Duplicate without user-selected canonical | 17 | Old URLs covered by redirects |
| Alternate page with proper canonical tag | 4 | Normal behavior |
| Redirect error | 1 | `/four-modes` — stale, now works |

### 404 Analysis (203 URLs)

**Category A: Already has redirect (155 URLs)**
Existing redirect rules in `next.config.js` already cover these. They show as 404 in GSC because Google crawled them before the redirects were deployed. Will clear on next crawl.

Covered by existing patterns:
- `/map-levels/*` (68 URLs) → `/frameworks-map`
- `/science-behind/*` (44 URLs) → `/scientific-foundations`
- `/system-vision-invitation/*` (8 URLs) → `/collaborate`
- `/essays/*` (8 URLs) → `/publications`
- `/methodology/*/*` (8 URLs) → `/methodology`
- `/emotional-technology-tools/*` (6 URLs) → `/models`
- Various single-page redirects (13 URLs)

**Category B: Needed new redirects (33 URLs → 18 new rules)**
Added to `next.config.js`:

| Rule | Source | Destination | URLs fixed |
|------|--------|-------------|------------|
| 1 | `/frameworks/:path*` | `/framework/:path*` | 3 |
| 2 | `/the-map-levels-of-teg-blue/:path*` | `/frameworks-map` | 1 |
| 3 | `/ai-bridge`, `/ai-bridge/*` | `/ai-safety` | 2 |
| 4 | `/contact-collaboration`, `/contact-collaboration/*` | `/collaborate` | 2 |
| 5 | `/what-is-teg-blue`, `/what-is-teg-blue/*` | `/` | 3 |
| 6 | `/interactive-emotional-technology` | `/emotional-technology` | 1 |
| 7 | `/what-is-emotional-technology` | `/emotional-technology` | 1 |
| 8 | `/the-research-circle` | `/collaborate` | 1 |
| 9 | `/the-team-research-circle` | `/collaborate` | 1 |
| 10 | `/about-the-author` | `/about` | 1 |
| 11 | `/letter-from-the-author` | `/about` | 1 |
| 12 | `/rights-vision` | `/about` | 1 |
| 13 | `/mi-vision-personal-sobre-el-narcisismo` | `/about` | 1 |
| 14 | `/no-me-derrumbo-de-golpe` | `/publications` | 1 |
| 15 | `/my-personal-take-on-narcissism` | `/publications` | 1 |
| 16 | `/terminology-core-emotional-system-concepts` | `/glossary` | 1 |
| 17 | `/science/behind` | `/scientific-foundations` | 1 |
| 18 | `/emotional-technology-tools` (bare) | `/models` | 1 |

**Category C: Junk URLs (15 URLs)**
Notion hash IDs and placeholder slugs — already caught by the existing `/:hash([0-9a-f]{20,})` pattern rule.

### Crawled - Currently Not Indexed (119 URLs)

| Category | Count | Status |
|----------|-------|--------|
| Real pages (framework/f6, f8, f10) | 3 | Working — just new, awaiting Google indexing |
| Old URLs with existing redirects | ~80 | Expected — redirects working |
| Other subdomains (tools., herramientas.) | ~20 | Out of scope for .org |
| Static assets (CSS, fonts) | ~10 | Normal |
| Search/junk URLs | ~6 | Irrelevant |

### Other GSC Checks

| Check | Result |
|-------|--------|
| Sitemaps | Healthy — 82 pages, success status, read today |
| Core Web Vitals | Not enough traffic data (normal for low-traffic site) |
| HTTPS | All clear — 0 non-HTTPS pages |
| Breadcrumbs (structured data) | 0 invalid, 5 valid |
| Datasets (structured data) | 0 invalid, 1 valid |
| FAQ (structured data) | 0 invalid, 5 valid |
| Security issues | None |
| Manual actions | None |
| Redirect errors | 1 (`/four-modes`) — stale, now redirects correctly |

### Actions Taken

1. Added 18 new redirect rules to `next.config.js`
2. Verified all redirects locally (all return 308 to correct destinations)
3. Build passes successfully

### Next Steps

- [ ] Push changes to deploy redirects on Vercel
- [ ] Wait 1-2 weeks for Google to re-crawl
- [ ] Re-check GSC to verify 404 count drops
- [ ] Consider requesting re-indexing for key pages in GSC if 404s persist

---

## 2026-03-09 — Full Bing Webmaster Tools Audit

### Overview

| Metric | Value |
|--------|-------|
| **Total URLs known** | 588 |
| **Indexed** | 384 |
| **Warnings** | 133 |
| **Excluded** | 73 |
| **Errors** | 0 |
| **Performance (3 months)** | 20 clicks, 515 impressions, 3.88% CTR |
| **Backlinks** | 144 (from 4 referring domains, 78 referring pages) |

### Site Explorer Crawl Summary

| Status | Count | Notes |
|--------|-------|-------|
| Indexed | 384 | Healthy |
| Error | 0 | No crawl errors |
| Warning | 133 | Likely redirecting URLs (Site Explorer filtered views failed to load — Bing UI performance issue) |
| Excluded | 73 | Robots.txt disallowed, noindex, or duplicate content |

Note: Site Explorer filtered views (dead links, redirecting, etc.) had persistent loading issues during this audit — data spinners never resolved. The crawl overview chart did load successfully.

### Sitemaps

| Sitemap | Last Submitted | Last Crawled | Status | URLs Discovered |
|---------|---------------|--------------|--------|-----------------|
| `https://teg-blue.org/sitemap.xml` | 2/19/2026 | 3/7/2026 | Success | 78 |

No errors, no warnings.

### IndexNow

| Metric | Value |
|--------|-------|
| Total submitted URLs | 5.1K |
| URLs submitted in last 5 hours | 17 (from latest build) |
| Source | Self |

IndexNow integration is working correctly. Large spike in March from recent deployments.

### Backlinks

| Source Domain | Backlink Count |
|---------------|---------------|
| teg-blue.com | 61 |
| idealist.org | 10 |
| linkedin.com | 6 |
| annaparetas.cat | 1 |

Total: 4 referring domains, 78 referring pages, 7 anchor texts.

### URL Submission

6 URLs manually submitted on March 6, 2026:
- `/glossary`, `/ai-safety`, `/frameworks-map`, `/scientific-foundations`, `/models`, `/`
- Daily quota: 10,000 (0 used today)

### Recommendations

| Recommendation | Severity | Details |
|---------------|----------|---------|
| Not enough inbound links from high quality domains | Moderate | General authority signal — normal for newer site. 4 referring domains currently. |
| Missing title tag | Moderate | 1 page: `/how-global-frameworks-powers` — stale data, this URL already redirects to `/frameworks-map` |

### AI Performance

No data available yet — not enough traffic for Copilot/AI citation tracking.

### Actions Taken

No Bing-specific actions needed:
- 0 crawl errors — clean
- The 18 redirect rules added for GSC will also benefit Bing on next crawl
- IndexNow integration already notifying Bing of changes
- Both recommendations are either stale or general authority-building (not actionable in code)

### Next Steps

- [ ] Re-check after redirect deployment to verify warnings count drops
- [ ] Monitor if Site Explorer filtered views load in future audits
- [ ] Consider submitting new framework pages (f1–f12) via URL Submission if not indexed within 2 weeks

---

## Template for Future Audits

```
## YYYY-MM-DD — [Audit Type]

### Google Search Console
| Metric | Value |
|--------|-------|

### Bing Webmaster Tools
| Metric | Value |
|--------|-------|

### Findings

### Actions Taken

### Next Steps
```
