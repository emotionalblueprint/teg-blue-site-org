# Phase 2 — Cross-Reference Audit Report

**Date:** 2026-03-06

---

## 2.1 M3 Cross-References on Model Pages

| Page | M3 Referenced? | Location | Quality |
|------|---------------|----------|---------|
| **M1** | YES | Dedicated card + NavRow | Strong |
| **M2** | YES | FrameworkCard + NavRow | Strong |

**No action needed** — both model pages have well-placed M3 cross-references.

---

## 2.2 M3 Cross-References on Framework Pages

### Priority Frameworks

| Page | M3 Referenced? | Location | Quality | Action |
|------|---------------|----------|---------|--------|
| **F1** | YES | 6 references (callout box, 3 inline, regulation thread, NavRow) | **Excellent — gold standard** | None |
| **F2** | YES | NavRow only | Minimal | FLAG: body should link inline where "return was never learned" |
| **F3** | YES | NavRow only | Minimal | FLAG: body should link inline where "cognition overrides" |
| **F8** | YES | NavRow only | Minimal | FLAG: body should link inline where repair physiology discussed |
| **F12** | YES | NavRow only | Minimal | FLAG: body should link inline where insight-behaviour gap discussed |

### Secondary Frameworks

| Page | M3 Referenced? | Relevant Content? | Action |
|------|---------------|-------------------|--------|
| **F4** | NO | Moderate — regulation thread mentions "Biological Restoration" | FLAG: consider inline link |
| **F5** | NO | Moderate — "stuck compass", regulation thread | FLAG: consider inline link |
| **F6** | NO | Low — "certainty is physiological" | No strong case |
| **F7** | NO | Moderate-to-strong — names "Biological Restoration — the body completing the cycle" | FLAG: inline link recommended |
| **F9** | NO | None | Not needed |
| **F10** | NO | None | Not needed |
| **F11** | NO | None | Not needed |

**Key finding:** F1 is the gold standard for M3 integration — woven into body content in 6 places. F2, F3, F8, and F12 all have M3 in NavRow but NOT in body content where the concepts directly connect. F7 should reference M3 where it names "the body completing the cycle."

---

## 2.3 Broken or Missing Links

**80+ internal links checked across 7 key pages. Result: ALL internal links valid.** No broken links found.

Cross-site links to teg-blue.com noted but not verified:
- `https://teg-blue.com/emotional-tools` (from M1, M2, M3 pages)
- `https://teg-blue.com/mapping-system/following-nervous-system/{fid}` (from frameworks-map expanded cards)

One anchor link noted: `/framework/f1-emotional-gradient#the-hinge` — page exists, anchor ID not verified at section level.

---

## 2.4 Models Hub Navigation

| Check | Status |
|-------|--------|
| Models Hub shows 3 models? | **YES** — badge says "3 FOUNDATIONAL MODELS", title "The Three Core Models" |
| M3 card present on Models Hub? | **YES** — with correct link to `/model/m3-the-open-cycle` |
| SiteHeader nav includes M3? | **YES** — all three models in dropdown |
| **Frameworks Map page models section?** | **OUT OF DATE** — says "Two Core Models", only M1 and M2 |

### Issue Found: Frameworks Map Models Section

**File:** `app/frameworks-map/page.js` (lines 452-531)
- Heading says "The Two Core Models" → should be "The Three Core Models"
- Only includes M1 and M2 cards → M3 card is missing
- This is the **only** structural inconsistency found across the site's model navigation

**Recommendation:** This is an unambiguous fix — add M3 card to match Models Hub and SiteHeader. Will address in Phase 5 (M3 Integration) or can be fixed immediately.

---

## Summary of All Flagged Items

### Unambiguous Fixes (can do now)
1. **Frameworks Map** — Update "Two Core Models" to "Three Core Models" and add M3 card

### Flagged for Human Review (inline M3 body references)
2. F2 — Add inline M3 link where "return was never learned" concept appears
3. F3 — Add inline M3 link where "cognition overrides" the body's signals
4. F8 — Add inline M3 link where repair physiology is discussed
5. F12 — Add inline M3 link where insight-behaviour gap is discussed
6. F7 — Add inline M3 link where "Biological Restoration — the body completing the cycle" is named
7. F4 — Consider inline M3 link in regulation thread summary
8. F5 — Consider inline M3 link in regulation thread summary

---

*Phase 2 complete. Proceeding to Phase 3 — Terminology Audit.*
