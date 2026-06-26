/**
 * TEG-Blue — JSON-LD Generators
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
  description: "A layered visual framework that maps how emotions, nervous systems, survival strategies, identity, and social patterns form and evolve. Its public framework and research-grounding home is teg-blue.org.",
  inLanguage: LANGUAGE,
};

const AUTHOR = {
  "@type": "Organization",
  name: "TEG-Blue",
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
    name: "Computational Applications — TEG-Blue",
    url: `${BASE_URL}/ai-safety`,
    description: "Exploratory computational applications of the Nervous System Gradient: structured emotional-pattern context, state-dependent language, and open research questions.",
    inLanguage: LANGUAGE,
    isPartOf: TEG_BLUE_PROJECT,
    about: [
      {
        "@type": "Thing",
        name: "Computational Applications",
        description: "Exploratory uses of structured emotional-pattern context in computational systems"
      },
      {
        "@type": "Thing",
        name: "State-Dependent Language",
        description: "Language patterns understood in relation to nervous-system state and available capacity"
      },
      {
        "@type": "Thing",
        name: "Structured Emotional Patterns",
        description: "Framework language for describing emotional and nervous-system patterns without reducing them to fixed labels"
      }
    ],
    keywords: [
      "computational applications",
      "emotional patterns",
      "nervous system gradient",
      "regulatory states",
      "gradient classification",
      "state-dependent language",
      "open research questions"
    ],
    mainEntity: {
      "@type": "CreativeWork",
      name: "Nervous System Gradient",
      description: "A research-grounded map for describing nervous-system states and their effects on perception, emotion, body activation, behaviour, and repair."
    }
  };
}

// ─── MODELS PAGE JSON-LD ────────────────────────────

export function generateModelsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Emotional Somatic System — TEG-Blue",
    url: `${BASE_URL}/emotional-somatic-cycle`,
    description: "The four foundational models of TEG-Blue: Emotions as Signals (the nervous system language), Nervous System States (physiological reorganization), Regulation Capacities (biological restoration), and Awareness Capacities (ESS awareness of CLS).",
    inLanguage: LANGUAGE,
    isPartOf: TEG_BLUE_PROJECT,
    about: [
      {
        "@type": "DefinedTerm",
        name: "Emotions as Signals (M1)",
        description: "The nervous system language — sixteen emotions mapped as biological signals delivering specific information about needs, safety, and constraint."
      },
      {
        "@type": "DefinedTerm",
        name: "Nervous System States (M2)",
        description: "Physiological reorganization — how the nervous system reorganizes and configures to respond to threat or safety through four modes on a continuous gradient."
      },
      {
        "@type": "DefinedTerm",
        name: "Regulation Capacities (M3)",
        description: "Biological restoration — the nervous system's designed process for completing the activation cycle and restoring physiological baseline."
      },
      {
        "@type": "DefinedTerm",
        name: "Awareness Capacities (M4)",
        description: "The three awareness capacities (RE, ER, SEA) — is the Emotional Somatic System aware of the Cognitive Linguistic System?"
      }
    ],
    keywords: [
      "emotions as signals",
      "nervous system states",
      "four-mode gradient",
      "awareness capacities",
      "regulation capacities",
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
    name: "System Overview — TEG-Blue",
    url: `${BASE_URL}/foundations`,
    description: "How the public framework, research grounding, practical tools, and applied Engine logic relate inside TEG-Blue.",
    inLanguage: LANGUAGE,
    isPartOf: TEG_BLUE_PROJECT,
    about: {
      "@type": "Thing",
      name: "TEG-Blue Architecture",
      description: "A layered visual framework for understanding emotional and nervous-system patterns"
    },
    mainEntity: {
      "@type": "ItemList",
      name: "TEG-Blue Ecosystem",
      description: "The current TEG-Blue ecosystem organized by public framework, research grounding, practical tools, and applied implementations",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Public Framework",
          description: "The Emotional Gradient Blueprint, currently centered publicly on the Nervous System Gradient.",
          url: BASE_URL
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Research Grounding",
          description: "Source traces, scientific foundations, publications, methodology, limitations, and working questions.",
          url: `${BASE_URL}/scientific-foundations`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Practical Public Tools",
          description: "Public tools on teg-blue.com that help people recognize emotional and nervous-system patterns in everyday situations.",
          url: "https://teg-blue.com/emotional-tools"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Applied Engine Logic",
          description: "Separate applied/licensable tool-building logic for bounded institutional and partner implementations.",
          url: "https://www.teg-blue.com/engine"
        }
      ]
    },
    keywords: [
      "TEG-Blue architecture",
      "emotional patterns",
      "nervous system gradient",
      "research grounding",
      "source traces",
      "practical tools",
      "nervous system regulation",
      "integrative architecture",
      "trauma-informed"
    ]
  };
}

// ─── SCIENTIFIC FOUNDATIONS PAGE JSON-LD ─────────────

export function generateScientificFoundationsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Established Research — TEG-Blue Research",
    url: `${BASE_URL}/scientific-foundations`,
    description: "The bodies of established research that underwrite specific parts of the TEG-Blue architecture. 145+ theoretical contributions from 41 research traditions — Plutchik, NVC, CBT, Polyvagal Theory, IFS, attachment, trauma, and more — each connected to its architectural function.",
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
      "established research",
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
    description: "The 12 Frameworks (F1-F12) that explain why regulatory patterns emerge, how they scale from individual to systemic, and what makes repair possible. Integrates 145+ theoretical contributions from 41 research traditions.",
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
          name: "Restoration Arc (F8-F10)",
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
      "restoration",
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
    publication: `/publications/${node.slug}`,
    "working-paper": `/publications/${node.slug}`,
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
