# TEG-Blue .org — Site Audit Brief
**For:** Claude Code
**Vault:** `/Users/annaparetas/Projects/teg-blue-vault/`
**Site:** teg-blue.org
**Source documents referenced in this brief are in the outputs folder of the current session.**

---

## Instructions Before Starting

1. Read `CLAUDE-org-site-goals.md` in full before beginning. It contains the site goals, the governing writing principle (anchor-gap-contribution), tone guidelines, and the three-model architecture. Every audit decision should be made against that document.
2. Work through the five phases in order. Do not skip phases or run them in parallel.
3. For each phase: make changes that are unambiguous from the brief and the source documents. Flag everything else for human review. Do not make autonomous content decisions.
4. After each phase, write a phase report before moving to the next phase.
5. Produce a final audit report at the end listing: what was found, what was changed, what was flagged for human review and why.

---

## Phase 1 — Content Architecture Audit

Read every page on teg-blue.org. For each page, answer the following questions and record the result:

**1.1 Anchor-Gap-Contribution structure**
Does the page follow the anchor-gap-contribution structure throughout? That is: does each section open with what the relevant research tradition already established, name explicitly where that knowledge stopped, and then show what TEG-Blue does from that stopping point?
- If yes: mark as compliant.
- If partial: mark sections that are missing the structure.
- If no: mark entire page for rewrite.

**1.2 Research traditions — precision**
Are the research traditions cited accurately and specifically — named researchers, named works, precise claims? Or are citations generic ("research shows," "studies suggest," unnamed traditions)?
- Flag any citation that is approximate, generic, or unattributed.
- Flag any citation where the researcher's actual contribution is misrepresented.

**1.3 Contribution framing**
Is the TEG-Blue contribution framed as filling a specific named gap in existing knowledge? Or does it claim more than the evidence currently supports?
- Flag any overclaiming.
- Flag any page where the contribution is presented without first establishing the gap it fills.

**1.4 Falsifiable predictions**
Does the page make at least one falsifiable prediction explicit — something TEG-Blue predicts that existing frameworks do not predict, and that could in principle be tested?
- If yes: mark as compliant.
- If no: flag as missing testable claim. Do not add one — flag for human review.

---

## Phase 2 — Cross-Reference Audit

Check every framework and model page for the following. Make the listed changes where they are unambiguously missing. Flag anything requiring content judgment.

**2.1 M3 cross-references — Models**
- Does M1 reference M3 in its cross-references and relationship-to-frameworks section? If not, add it.
- Does M2 reference M3 in its cross-references and relationship-to-frameworks section? If not, add it.

**2.2 M3 cross-references — Frameworks**
- Does F1 reference M3 as its applied physiological model? If not, flag for human review.
- Does F2 reference M3 as the physiological consequence of developmental failure of access? If not, flag.
- Does F3 reference M3 as the physiological reason false coherence exists? If not, flag.
- Does F8 reference M3 as the biological account of why SEA enables cycle completion? If not, flag.
- Does F12 reference M3 explicitly as the physiological mechanism behind the insight-behaviour gap? If not, flag.
- Check F4–F7 and F9–F11 for any physiologically relevant content that should reference M3. Flag where relevant.

**2.3 Broken or missing links**
- Check every internal cross-reference link across all pages.
- List any that are broken, missing, or pointing to incorrect URLs.
- Fix broken links where the correct destination is unambiguous.
- Flag any where the correct destination is unclear.

**2.4 Models hub navigation**
- Is M3 present in the models hub navigation alongside M1 and M2? If not, add it.
- Does the models hub show the correct count of three models? If not, update.

---

## Phase 3 — Terminology Audit

Search every page for the following. Make the listed changes. Flag anything that requires judgment about surrounding context.

**3.1 "AI" → "Large Language Models"**
Any instance of "AI" in academic or research-register content on teg-blue.org should be "Large Language Models." Search all pages and replace where unambiguous. Flag any instance where the surrounding context makes the replacement unclear.

**3.2 Judgment-laden language**
Search for and flag any remaining instances of previously cleaned terminology:
- "healthy compass" — should be "fluid compass"
- "unhealthy" as a descriptor for any mode
- "designed operation" as a standalone descriptor
- Any language that implies a mode is morally inferior rather than positionally different
Do not replace — flag all instances for human review.

**3.3 Model and framework naming consistency**
- M3 should always be referred to as: **The Open Cycle — The Biology of Unfinished Emotion**
- Search all pages for any reference to M3 under a different name or without its subtitle.
- Search all pages for any reference to only two models where three now exist.
- Update model counts from 2 to 3 wherever they appear (badges, introductions, navigation).

**3.4 Framework naming**
- Check that all twelve frameworks are named consistently across all pages.
- Flag any inconsistency.

---

## Phase 4 — Structural Audit

For each page, check the following structural elements. Flag missing elements for human review — do not add structural sections without human approval unless specified below.

**4.1 "Where to Go Next" table**
Does every framework and model page have a "Where to Go Next" table at the bottom?
- If yes: check that the table includes M3 where relevant.
- If no: flag the page — do not add without human review.

**4.2 Research Traditions and TEG-Blue Contribution sections**
Does every framework and model page have collapsed Research Traditions and TEG-Blue Contribution sections within each major section?
- If yes: mark as compliant.
- If no: flag the page and list which sections are missing them.

**4.3 Blueprint derivation**
Each page on teg-blue.org should be derivable from a Blueprint source document. No page should appear to have been written directly without a Blueprint source.
- Flag any page where no corresponding Blueprint source document is evident in the vault.
- Do not modify content — flag only.

**4.4 About page — origin story**
Does the about page include the origin story paragraph from `CLAUDE-org-site-goals.md`? The paragraph begins: "TEG-Blue began with a single visual question..."
- If yes: mark as compliant.
- If no: flag for human review. Do not add without approval.

**4.5 Models hub page**
The models hub page should reflect the updated three-model architecture. Source document: `models-hub-v2.md`.
- Compare the current models hub page against `models-hub-v2.md`.
- List the differences.
- Flag for human review before making changes — this is a significant structural update.

---

## Phase 5 — M3 Integration

This phase adds M3 to the live site. Complete phases 1–4 before beginning this phase.

**5.1 Models hub update**
Update the models hub page at `/models` using `models-hub-v2.md` as the source.
- Only proceed if the human has reviewed and approved the diff produced in Phase 4.5.

**5.2 M3 page creation**
Create the M3 page at `/model/m3-open-cycle` using `m3-page-content-v2.md` as the source.
- Follow the same page structure as M1 and M2.
- Include the MODEL M3 badge.
- Include the full "On this page" navigation.
- Include all sections, collapsed Research Traditions, and TEG-Blue Contribution blocks.
- Include the "Where to Go Next" table.
- Include the relationship-to-frameworks section.

**5.3 M3 interactive artifact**
Add the M3 interactive component to the top of the M3 page, above the written content.
- Source file: `m3-interrupted-cycle.jsx`
- Follow the same placement pattern as the interactive components on M1 and M2.

**5.4 Navigation updates**
- Add M3 to the models navigation menu alongside M1 and M2.
- Add M3 to the models hub page navigation.
- Ensure M3 appears in any site map or index pages.

**5.5 Cross-reference links**
- Add the M3 page URL to all cross-reference links flagged in Phase 2 that are now confirmed as pointing to M3.

---

## Deliverable — Audit Report

After completing all five phases, produce a structured audit report with the following sections:

### Summary
Total pages audited. Total changes made. Total items flagged for human review.

### Phase 1 — Content Architecture
List every page audited. For each: compliant / partial / flagged, with specific notes.

### Phase 2 — Cross-References
List every cross-reference checked. For each: present / added / flagged, with specific notes.

### Phase 3 — Terminology
List every terminology issue found. For each: replaced / flagged, with page location and surrounding context.

### Phase 4 — Structural
List every structural element checked. For each: compliant / flagged, with specific notes.

### Phase 5 — M3 Integration
List every integration step completed. Note any issues encountered.

### Flagged for Human Review
Consolidated list of everything requiring Anna's decision before action. For each item: page location, what was found, why it was flagged rather than changed, and what the options are.

---

## Important Reminders

- Do not make content decisions autonomously. Flag judgment calls.
- Do not write new content. Flag gaps.
- Do not rewrite existing sections unless the page is explicitly marked for rewrite in Phase 1 and the rewrite follows anchor-gap-contribution structure precisely.
- When in doubt: flag, do not change.
- The audit report is as important as the changes. Anna needs a complete picture of the site's current state, not just a list of what was fixed.
