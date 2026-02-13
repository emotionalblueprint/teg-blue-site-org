/**
 * TEG-Blue Research Platform — JSON-LD Generators
 * 
 * Generates Schema.org structured data for every content type.
 * Called at build time (getStaticProps) or in page <head>.
 * 
 * Every page gets:
 * 1. Type-specific JSON-LD (ScholarlyArticle, DefinedTerm, etc.)
 * 2. BreadcrumbList
 * 3. ResearchProject (parent)
 */

const BASE_URL = "https://teg-blue.org";
const RESEARCH_BASE = BASE_URL;

// ─── PARENT PROJECT (always included) ────────────────

const TEG_BLUE_PROJECT = {
  "@type": "ResearchProject",
  name: "TEG-Blue: The Emotional Gradient Blueprint",
  url: RESEARCH_BASE,
  description: "An integrative framework synthesizing 65+ theories from neuroscience, psychology, and trauma research into a practical emotional intelligence system.",
};

const AUTHOR = {
  "@type": "Organization",
  name: "TEG-Blue Research Consortium",
  url: "https://teg-blue.org",
};

// ─── PUBLICATION JSON-LD ─────────────────────────────

export function generatePublicationJsonLd(node) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    name: node.title,
    author: AUTHOR,
    datePublished: node.date,
    doi: node.doi,
    url: `${RESEARCH_BASE}/publications/${node.slug}`,
    abstract: node.summary,
    keywords: node.tags,
    isPartOf: TEG_BLUE_PROJECT,
    ...(node.connections && {
      citation: node.connections
        .filter((c) => c.type === "cites")
        .map((c) => ({
          "@type": "ScholarlyArticle",
          name: c.label || c.targetSlug,
          url: `${RESEARCH_BASE}/${c.targetType === "theory" ? "foundations" : "publications"}/${c.targetSlug}`,
        })),
    }),
    ...(node.glossaryTerms && {
      about: node.glossaryTerms.map((term) => ({
        "@type": "DefinedTerm",
        name: term,
        url: `${RESEARCH_BASE}/glossary?term=${encodeURIComponent(term)}`,
      })),
    }),
  };
}

// ─── THEORY JSON-LD ──────────────────────────────────

export function generateTheoryJsonLd(node) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    name: node.title,
    author: {
      "@type": "Person",
      name: node.originAuthor,
    },
    url: `${RESEARCH_BASE}/foundations?theory=${node.slug}`,
    description: node.summary,
    keywords: node.tags,
    isReferencedBy: TEG_BLUE_PROJECT,
  };
}

// ─── GLOSSARY TERM JSON-LD ───────────────────────────

export function generateGlossaryJsonLd(node) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: node.title,
    description: node.definition || node.summary,
    url: `${RESEARCH_BASE}/glossary?term=${node.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "TEG-Blue Glossary",
      url: `${RESEARCH_BASE}/glossary`,
    },
    ...(node.connections && {
      subjectOf: node.connections
        .filter((c) => c.type === "defines")
        .map((c) => ({
          "@type": "ScholarlyArticle",
          name: c.label || c.targetSlug,
          url: `${RESEARCH_BASE}/publications/${c.targetSlug}`,
        })),
    }),
  };
}

// ─── FRAMEWORK JSON-LD ───────────────────────────────

export function generateFrameworkJsonLd(node) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: node.title,
    author: AUTHOR,
    url: `${RESEARCH_BASE}/frameworks/${node.slug}`,
    description: node.summary,
    isPartOf: TEG_BLUE_PROJECT,
    keywords: node.tags,
  };
}

// ─── BREADCRUMB JSON-LD ──────────────────────────────

export function generateBreadcrumbJsonLd(items) {
  // items: [{ name, url }]
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

// ─── RESEARCH HUB JSON-LD ────────────────────────────

export function generateResearchHubJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    ...TEG_BLUE_PROJECT,
    founder: AUTHOR,
  };
}

// ─── AI SAFETY PAGE JSON-LD ─────────────────────────

export function generateAISafetyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Safety Applications — TEG-Blue",
    url: `${BASE_URL}/ai-safety`,
    description: "How TEG-Blue provides structured, computationally legible emotional intelligence infrastructure for safer AI systems. Gradient frameworks for AI alignment, safety, and human-AI interaction.",
    isPartOf: TEG_BLUE_PROJECT,
    about: [
      {
        "@type": "Thing",
        name: "AI Safety",
        description: "Research and practices aimed at making AI systems safe and beneficial"
      },
      {
        "@type": "Thing",
        name: "AI Alignment",
        description: "Ensuring AI systems are aligned with human values and intentions"
      },
      {
        "@type": "Thing",
        name: "Emotional Intelligence Infrastructure",
        description: "Structured frameworks for AI systems to understand human emotional states"
      }
    ],
    keywords: [
      "AI safety",
      "AI alignment",
      "emotional intelligence",
      "harm detection",
      "regulatory states",
      "gradient classification",
      "moral reasoning",
      "computational social science",
      "NLP",
      "machine learning"
    ],
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "TEG-Blue Four-Mode Gradient",
      applicationCategory: "AI Safety Framework",
      description: "Computationally legible gradient framework for classifying human regulatory states: Connection, Protection, Control, Domination"
    }
  };
}

// ─── FOUR-MODE GRADIENT PAGE JSON-LD ────────────────

export function generateFourModeGradientJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Four-Mode Gradient — TEG-Blue",
    url: `${BASE_URL}/four-mode-gradient`,
    description: "The measurement system at the heart of TEG-Blue: four nervous system regulatory states that shape perception, behavior, and relational capacity.",
    isPartOf: TEG_BLUE_PROJECT,
    about: {
      "@type": "DefinedTermSet",
      name: "Four-Mode Gradient",
      description: "A continuous gradient of nervous system regulatory states detectable in natural language",
      hasDefinedTerm: [
        {
          "@type": "DefinedTerm",
          name: "Connection",
          description: "Safety perceived. Empathy fully available, flexibility high, repair possible.",
          termCode: "MODE_CONNECTION"
        },
        {
          "@type": "DefinedTerm",
          name: "Protection",
          description: "Threat perceived. Defensive but recoverable. Empathy partial, flexibility reduced.",
          termCode: "MODE_PROTECTION"
        },
        {
          "@type": "DefinedTerm",
          name: "Control",
          description: "Safety sought through controlling others. Empathy strategic, flexibility limited.",
          termCode: "MODE_CONTROL"
        },
        {
          "@type": "DefinedTerm",
          name: "Domination",
          description: "Power as only safety. Empathy offline, flexibility minimal, harm normalized.",
          termCode: "MODE_DOMINATION"
        }
      ]
    },
    keywords: [
      "four-mode gradient",
      "regulatory states",
      "nervous system",
      "polyvagal theory",
      "emotional regulation",
      "Connection",
      "Protection",
      "Control",
      "Domination",
      "complexity markers"
    ]
  };
}

// ─── SYSTEM OVERVIEW PAGE JSON-LD ────────────────────

export function generateSystemOverviewJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "System Overview — TEG-Blue Research",
    url: `${BASE_URL}/foundations`,
    description: "How the parts fit together. TEG-Blue is organized as a four-layer system: measurement (Four-Mode Gradient), explanatory frameworks (12 Frameworks), emotional tools, and AI safety infrastructure.",
    isPartOf: TEG_BLUE_PROJECT,
    about: {
      "@type": "Thing",
      name: "TEG-Blue Architecture",
      description: "A layered system for understanding and measuring emotional regulation patterns"
    },
    mainEntity: {
      "@type": "ItemList",
      name: "TEG-Blue Four-Layer Architecture",
      description: "The complete TEG-Blue system organized as four interconnected layers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Measurement Layer",
          description: "Four-Mode Gradient: Connection → Protection → Control → Domination. Observable nervous system states detectable in natural language.",
          url: `${BASE_URL}/four-mode-gradient`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Explanatory Layer",
          description: "12 Frameworks (F1-F12) explaining why patterns emerge, how they escalate, and how repair becomes possible. Integrates 139+ established theories.",
          url: `${BASE_URL}/theoretical-foundations`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Emotional Tools Layer",
          description: "16 gradient-based scales and assessments translating the system into practical instruments for individuals, practitioners, and clinical settings.",
          url: "https://teg-blue.com/emotional-tools"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "AI Safety Layer",
          description: "Structured schemas for AI systems: JSON-LD data, semantic HTML, gradient classifications replacing binary safe/unsafe models.",
          url: `${BASE_URL}/ai-safety`
        }
      ]
    },
    keywords: [
      "TEG-Blue architecture",
      "emotional regulation system",
      "four-mode gradient",
      "12 frameworks",
      "emotional tools",
      "AI safety",
      "nervous system regulation",
      "measurement system",
      "explanatory framework",
      "integrative architecture",
      "trauma-informed",
      "computational emotion"
    ]
  };
}

// ─── THEORETICAL FOUNDATIONS PAGE JSON-LD ────────────

export function generateTheoreticalFoundationsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Theoretical Foundations — TEG-Blue Research",
    url: `${BASE_URL}/theoretical-foundations`,
    description: "The 12 Frameworks (F1-F12) that explain why regulatory patterns emerge, how they scale from individual to systemic, and what makes repair possible. Integrates 139+ established theories.",
    isPartOf: TEG_BLUE_PROJECT,
    about: {
      "@type": "DefinedTermSet",
      name: "TEG-Blue 12 Frameworks",
      description: "A connected arc of frameworks explaining emotional regulation patterns",
      hasDefinedTerm: [
        {
          "@type": "DefinedTerm",
          name: "Formation Arc (F1-F3)",
          description: "How nervous system states form and how identity organizes around them"
        },
        {
          "@type": "DefinedTerm",
          name: "Scaling Arc (F4-F6)",
          description: "How individual regulation patterns become social structures"
        },
        {
          "@type": "DefinedTerm",
          name: "Turning Point (F7)",
          description: "How protection escalates into domination"
        },
        {
          "@type": "DefinedTerm",
          name: "Healing Arc (F8-F10)",
          description: "How patterns shift, including neurodivergent pathways"
        },
        {
          "@type": "DefinedTerm",
          name: "Integration Arc (F11-F12)",
          description: "The complete architecture and its internal logic"
        }
      ]
    },
    keywords: [
      "12 frameworks",
      "theoretical foundations",
      "emotional regulation theory",
      "polyvagal theory",
      "attachment theory",
      "trauma research",
      "nervous system",
      "formation",
      "scaling",
      "healing",
      "integration"
    ]
  };
}

// ─── META TAGS GENERATOR ─────────────────────────────

export function generateMetaTags(node) {
  const url = getNodeUrl(node);
  return {
    title: `${node.title} — TEG-Blue Research`,
    description: node.summary,
    canonical: url,
    openGraph: {
      title: node.title,
      description: node.summary,
      url,
      type: "article",
      siteName: "TEG-Blue Research",
    },
    dublinCore: {
      "DC.title": node.title,
      "DC.creator": node.author || "TEG-Blue Research Consortium",
      "DC.subject": node.tags?.join(", "),
      "DC.description": node.summary,
      "DC.type": node.type,
      ...(node.doi && { "DC.identifier": `doi:${node.doi}` }),
    },
  };
}

// ─── URL HELPERS ─────────────────────────────────────

function getNodeUrl(node) {
  const paths = {
    publication: `/research/publications/${node.slug}`,
    "working-paper": `/research/publications/${node.slug}`,
    theory: `/research/foundations?theory=${node.slug}`,
    glossary: `/research/glossary?term=${node.slug}`,
    framework: `/research/frameworks/${node.slug}`,
    methodology: `/research/methodology`,
  };
  return `${BASE_URL}${paths[node.type] || `/research/${node.slug}`}`;
}

// ─── AUTO-DETECT AND GENERATE ────────────────────────

export function generateJsonLd(node) {
  const generators = {
    publication: generatePublicationJsonLd,
    "working-paper": generatePublicationJsonLd,
    theory: generateTheoryJsonLd,
    glossary: generateGlossaryJsonLd,
    framework: generateFrameworkJsonLd,
  };

  const generator = generators[node.type];
  return generator ? generator(node) : null;
}
