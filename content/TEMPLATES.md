# Content Templates

Use these templates when adding new content to the research platform.
Copy the relevant template, fill in the fields, and save as `slug-name.json` in the appropriate `/content/` subfolder.

---

## Publication Template
Save to: `/content/publications/your-slug.json`

```json
{
  "slug": "",
  "type": "publication",
  "title": "",
  "status": "published",

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
  "status": "published",
  "originAuthor": "",
  "domain": "",

  "summary": "",
  "tegBlueUsage": "",

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
  "status": "published",
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
