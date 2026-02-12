# Content Templates

Use these templates when adding new content to the research platform.
Copy the relevant template, fill in the fields, and save as `slug-name.json` in the appropriate `/content/` subfolder.

---

## Content Status System

The `status` field indicates origin and verification level. This is displayed publicly as a badge on each page.

### Origin Status (for established research)

| Status | Badge Text | Meaning |
|--------|------------|---------|
| `established` | "Established" | Recognized research that TEG-Blue builds on |

Use for: theories by established researchers (Porges, Bowlby, etc.), standard terminology (neuroception, attachment, etc.)

### Verification Status (for TEG-Blue original content)

| Status | Badge Text | Meaning |
|--------|------------|---------|
| `draft` | "Draft" | Early work, structure may change |
| `open-review` | "Open for Review" | TEG-Blue synthesis — verification welcome |
| `source-verified` | "Source Verified" | Key sources manually checked |
| `community-reviewed` | "Community Reviewed" | Verified by external researcher |

Use for: TEG-Blue original terms (Four-Mode Gradient, Calibration, etc.), publications, our synthesis work.

**Philosophy:** This system tells the story: "Here's what exists (Established). Here's what we built from it (Open for Review). Here's the evidence (Source Verified)."

---

## Publication Template
Save to: `/content/publications/your-slug.json`

```json
{
  "slug": "",
  "type": "publication",
  "title": "",
  "status": "open-review",

  "summary": "",
  "keyFinding": "",

  "author": "Anna Paretas-Artacho",
  "date": "",
  "doi": "",
  "doiUrl": "",
  "preregistration": "",

  "tags": [],
  "glossaryTerms": [],

  "content": [
    {
      "id": "abstract",
      "title": "Abstract",
      "defaultOpen": true,
      "content": ""
    },
    {
      "id": "findings",
      "title": "Key Findings",
      "content": ""
    },
    {
      "id": "methodology",
      "title": "Methodology",
      "content": ""
    },
    {
      "id": "implications",
      "title": "Implications",
      "content": ""
    }
  ],

  "connections": [],
  "lastUpdated": ""
}
```

---

## Theory Template
Save to: `/content/theories/your-slug.json`

```json
{
  "slug": "",
  "type": "theory",
  "title": "",
  "status": "established",
  "originAuthor": "",
  "domain": "",

  "summary": "",

  "tags": [],

  "content": [
    {
      "id": "core-concept",
      "title": "Core Concept",
      "defaultOpen": true,
      "content": ""
    },
    {
      "id": "teg-blue-integration",
      "title": "How TEG-Blue Integrates This",
      "content": ""
    },
    {
      "id": "key-sources",
      "title": "Key Sources",
      "content": ""
    }
  ],

  "connections": [],
  "lastUpdated": ""
}
```

---

## Glossary Term Template
Save to: `/content/glossary/your-slug.json`

```json
{
  "slug": "",
  "type": "glossary",
  "title": "",
  "status": "open-review",
  "definition": "",

  "summary": "",

  "tags": [],
  "origin": "teg-blue-original",
  "relatedTerms": [],

  "content": [
    {
      "id": "what-it-is",
      "title": "What It Is",
      "defaultOpen": true,
      "content": ""
    },
    {
      "id": "how-teg-blue-maps-it",
      "title": "How TEG-Blue Maps It",
      "content": ""
    },
    {
      "id": "research-basis",
      "title": "Research Basis",
      "content": ""
    }
  ],

  "connections": [],
  "lastUpdated": ""
}
```

---

## Connection Types Reference

| Type | Meaning | Example |
|------|---------|---------|
| `cites` | References this source | Paper → Theory |
| `validates` | Empirically tests | Study → Framework |
| `defines` | Provides core definition | Glossary → Paper using it |
| `extends` | Builds upon | Framework → Framework |
| `contradicts` | Challenges or critiques | Critique → TEG-Blue claim |
| `replicates` | Reproduces results | External study → Your study |
| `part-of` | Belongs to larger work | Paper → Research project |
| `data-from` | Supplies data | Dataset → Study |
| `method` | Uses this methodology | Method → Study |
| `related` | General relationship | Theory → Theory |

## Domain Values (for theories)

`neuroscience` · `psychology` · `trauma` · `systems` · `sociology` · `developmental` · `cognitive` · `relational`
