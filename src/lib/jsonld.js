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

// ─── SHARED PROPERTIES ───────────────────────────────

const LANGUAGE = "en";

// ─── PARENT PROJECT (always included) ────────────────

const TEG_BLUE_PROJECT = {
  "@type": "ResearchProject",
  name: "TEG-Blue: The Emotional Gradient Blueprint",
  url: RESEARCH_BASE,
  description: "An integrative framework synthesizing 145+ theories from neuroscience, psychology, and trauma research into a practical emotional intelligence system.",
  inLanguage: LANGUAGE,
};

const AUTHOR = {
  "@type": "Organization",
  name: "TEG-Blue Research",
  url: "https://teg-blue.org",
};

// ─── PUBLICATION JSON-LD ─────────────────────────────

export function generatePublicationJsonLd(node) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    name: node.title,
    headline: node.title,
    author: AUTHOR,
    datePublished: node.date,
    dateModified: node.dateModified || node.date,
    inLanguage: LANGUAGE,
    ...(node.doi && {
      identifier: {
        "@type": "PropertyValue",
        propertyID: "DOI",
        value: node.doi,
      },
      sameAs: `https://doi.org/${node.doi}`,
    }),
    url: `${RESEARCH_BASE}/publications/${node.slug}`,
    abstract: node.summary,
    description: node.summary,
    keywords: node.tags,
    isPartOf: TEG_BLUE_PROJECT,
    publisher: AUTHOR,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${RESEARCH_BASE}/publications/${node.slug}`,
    },
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
    headline: node.title,
    author: node.originAuthor ? {
      "@type": "Person",
      name: node.originAuthor,
    } : AUTHOR,
    url: `${RESEARCH_BASE}/foundations?theory=${node.slug}`,
    description: node.summary,
    abstract: node.summary,
    keywords: node.tags,
    inLanguage: LANGUAGE,
    isReferencedBy: TEG_BLUE_PROJECT,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${RESEARCH_BASE}/foundations?theory=${node.slug}`,
    },
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
    inLanguage: LANGUAGE,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "TEG-Blue Glossary",
      url: `${RESEARCH_BASE}/glossary`,
      inLanguage: LANGUAGE,
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
    headline: node.title,
    author: AUTHOR,
    url: `${RESEARCH_BASE}/frameworks/${node.slug}`,
    description: node.summary,
    isPartOf: TEG_BLUE_PROJECT,
    keywords: node.tags,
    inLanguage: LANGUAGE,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${RESEARCH_BASE}/frameworks/${node.slug}`,
    },
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
    inLanguage: LANGUAGE,
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

// ─── MODELS PAGE JSON-LD ────────────────────────────

export function generateModelsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Three Core Models — TEG-Blue",
    url: `${BASE_URL}/models`,
    description: "The three applied models at the foundation of TEG-Blue: Nervous System Signaling (the instrument), the Three Awareness Capacities (the calibration system), and Regulation Capacities (the return pathway).",
    inLanguage: LANGUAGE,
    isPartOf: TEG_BLUE_PROJECT,
    about: [
      {
        "@type": "DefinedTerm",
        name: "Nervous System Signaling (M1)",
        description: "The instrument — how the nervous system communicates through emotion across four modes on a continuous gradient. Primary tools: the Inner Compass and the Four-Mode Gradient."
      },
      {
        "@type": "DefinedTerm",
        name: "Three Awareness Capacities (M2)",
        description: "The calibration — the three awareness capacities (RE, ER, SEA) that determine what data the compass receives and how it is processed."
      }
    ],
    keywords: [
      "inner compass",
      "four-mode gradient",
      "three awareness capacities",
      "regulatory states",
      "nervous system",
      "emotional technology",
      "applied models",
      "reading emotions",
      "emotional resonance",
      "self-emotional awareness"
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
    inLanguage: LANGUAGE,
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
          description: "Three core models: Nervous System Signaling (the instrument), the Three Awareness Capacities (the calibration), and Regulation Capacities (the return pathway). Observable nervous system states, awareness configurations, and regulation biology.",
          url: `${BASE_URL}/models`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Explanatory Layer",
          description: "12 Frameworks (F1-F12) explaining why patterns emerge, how they escalate, and how repair becomes possible. Integrates 145+ established theories.",
          url: `${BASE_URL}/frameworks-map`
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

// ─── SCIENTIFIC FOUNDATIONS PAGE JSON-LD ─────────────

export function generateScientificFoundationsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Scientific Foundations — TEG-Blue Research",
    url: `${BASE_URL}/scientific-foundations`,
    description: "How TEG-Blue extends 15 major psychological models (Plutchik, NVC, CBT, Polyvagal Theory, IFS, and more) and integrates 145+ established theories into a unified system.",
    inLanguage: LANGUAGE,
    isPartOf: TEG_BLUE_PROJECT,
    about: {
      "@type": "ItemList",
      name: "Global Models Extended by TEG-Blue",
      description: "15 major psychological models showing strengths, gaps, and what TEG-Blue adds",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Plutchik's Wheel of Emotions", description: "8 primary emotions with intensity and blending" },
        { "@type": "ListItem", position: 2, name: "Nonviolent Communication (NVC)", description: "Marshall Rosenberg's empathy-based communication method" },
        { "@type": "ListItem", position: 3, name: "Cognitive Behavioral Therapy (CBT)", description: "Thought-feeling-behavior connection therapy" },
        { "@type": "ListItem", position: 4, name: "Polyvagal Theory", description: "Stephen Porges' autonomic nervous system model" },
        { "@type": "ListItem", position: 5, name: "Zones of Regulation", description: "Leah Kuypers' color-coded emotional states for education" },
        { "@type": "ListItem", position: 6, name: "Freud's Ego Model", description: "Id, ego, superego psychic structure" },
        { "@type": "ListItem", position: 7, name: "Winnicott's True/False Self", description: "Authentic vs adaptive self-development" },
        { "@type": "ListItem", position: 8, name: "Rogers' Organismic Valuing", description: "Innate drive toward growth and authenticity" },
        { "@type": "ListItem", position: 9, name: "Jung's Persona", description: "Social mask and identity adaptation" },
        { "@type": "ListItem", position: 10, name: "Internal Family Systems (IFS)", description: "Richard Schwartz's parts-based therapy model" },
        { "@type": "ListItem", position: 11, name: "Ego Development Theory", description: "Jane Loevinger's identity development stages" },
        { "@type": "ListItem", position: 12, name: "Goffman's Dramaturgical Self", description: "Social life as performance" },
        { "@type": "ListItem", position: 13, name: "Defense Mechanisms", description: "Freud's unconscious protective strategies" },
        { "@type": "ListItem", position: 14, name: "Cognitive Dissonance Theory", description: "Leon Festinger's belief-action conflict theory" },
        { "@type": "ListItem", position: 15, name: "Disorganized Attachment & Complex PTSD", description: "Trauma-informed attachment and chronic trauma models" }
      ]
    },
    keywords: [
      "scientific foundations",
      "emotional regulation models",
      "Plutchik wheel",
      "NVC nonviolent communication",
      "CBT cognitive behavioral therapy",
      "polyvagal theory",
      "zones of regulation",
      "IFS internal family systems",
      "attachment theory",
      "trauma informed",
      "psychological models comparison",
      "TEG-Blue integration"
    ]
  };
}

// ─── THEORETICAL FOUNDATIONS PAGE JSON-LD ────────────

export function generateTheoreticalFoundationsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Theoretical Foundations — TEG-Blue Research",
    url: `${BASE_URL}/frameworks-map`,
    description: "The 12 Frameworks (F1-F12) that explain why regulatory patterns emerge, how they scale from individual to systemic, and what makes repair possible. Integrates 145+ established theories.",
    inLanguage: LANGUAGE,
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
      "DC.creator": node.author || "TEG-Blue Research",
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

// ─── FAQ SCHEMA (for methodology, about pages) ───────

export function generateFAQJsonLd(questions) {
  // questions: [{ question: string, answer: string }]
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
    inLanguage: LANGUAGE,
  };
}

// ─── SPEAKABLE SCHEMA (for voice assistants) ─────────

export function generateSpeakableJsonLd({ name, url, cssSelectors }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors || [
        "article > p:first-of-type",
        "article h2",
        "article h2 + p",
      ],
    },
    inLanguage: LANGUAGE,
  };
}

// ─── SEARCH ACTION SCHEMA ────────────────────────────

export function generateSearchActionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TEG-Blue Research",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: LANGUAGE,
  };
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
