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
  description: "A layered visual framework for reading emotional, nervous-system, relational, and social patterns.",
  inLanguage: LANGUAGE,
};

const AUTHOR = {
  "@type": "Organization",
  name: "TEG-Blue",
  url: "https://teg-blue.org",
};

// ─── PUBLICATION JSON-LD ─────────────────────────────

export function generatePublicationJsonLd(node) {
  const publicDescription = node.publicSummary || node.summary;

  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    name: node.title,
    headline: node.title,
    ...(node.publicTitle && { alternativeHeadline: node.publicTitle }),
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
    abstract: publicDescription,
    description: publicDescription,
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
    description: "Exploratory computational applications of the Nervous System Gradient: structured emotional-pattern context, state-aware language, and open research questions.",
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
        name: "State-Aware Language",
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
      "state-aware language",
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
    description: "The four foundational models of TEG-Blue: Emotions as Signals (the nervous system language), Nervous System States (physiological reorganization), Regulation Capacities (body-level return), and Awareness Capacities (ESS awareness of CLS).",
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
        description: "Body-level return — the nervous system's designed process for completing the activation cycle and returning toward physiological baseline."
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
      "visual map",
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
    name: "TEG-Blue Overview",
    url: `${BASE_URL}/foundations`,
    description: "Public overview of TEG-Blue: The Emotional Gradient Blueprint and its central public map, The Nervous System Gradient.",
    inLanguage: LANGUAGE,
    isPartOf: TEG_BLUE_PROJECT,
    about: {
      "@type": "Thing",
      name: "The Nervous System Gradient",
      description: "A visual map of how emotional, bodily, and relational patterns shift across safety, threat, control, shutdown, regulation, and repair."
    },
    mainEntity: {
      "@type": "ItemList",
      name: "TEG-Blue Overview",
      description: "The overview introduces The Emotional Gradient Blueprint, responsible pattern reading, research foundations, and applied tools.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "The Emotional Gradient Blueprint",
          description: "A layered visual framework for reading emotional, nervous-system, relational, and social patterns.",
          url: BASE_URL
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Responsible Pattern Reading",
          description: "TEG-Blue reads patterns through organisation, impact, available capacity, and the response that fits.",
          url: `${BASE_URL}/foundations#reading-patterns`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Use and Limits",
          description: "The map supports pattern reading while requiring context, observation, and attention to impact.",
          url: `${BASE_URL}/foundations#scope`
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Scientific Grounding",
          description: "Research areas, field boundaries, and claim discipline behind the map.",
          url: `${BASE_URL}/scientific-foundations`
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Pattern Reading",
          description: "Pattern reading explains observation, interpretation, impact, claim status, limits, responsible use, and review needs.",
          url: `${BASE_URL}/methodology`
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Applied Tools",
          description: "Interactive tools on teg-blue.com translate the map into practical public use.",
          url: "https://teg-blue.com/"
        }
      ]
    },
    keywords: [
      "TEG-Blue architecture",
      "emotional patterns",
      "nervous system gradient",
      "research grounding",
      "practical tools",
      "nervous system regulation",
      "integrative architecture",
      "responsible pattern reading"
    ]
  };
}

// ─── SCIENTIFIC GROUNDING PAGE JSON-LD ───────────────

export function generateScientificFoundationsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Scientific Grounding - TEG-Blue",
    url: `${BASE_URL}/scientific-foundations`,
    description: "Research areas that support specific parts of the TEG-Blue map while each field remains itself.",
    inLanguage: LANGUAGE,
    isPartOf: TEG_BLUE_PROJECT,
    about: {
      "@type": "ItemList",
      name: "Research Areas Connected to the TEG-Blue Map",
      description: "Research areas that ground emotional, bodily, nervous-system, and relational pattern reading without claiming that any one field contains the whole framework.",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Biology and Physiology", description: "Survival, adaptation, arousal, shutdown, regulation, and repair capacity" },
        { "@type": "ListItem", position: 2, name: "Autonomic Neuroscience and Stress Physiology", description: "State organization, mobilisation, inhibition, chronic load, and return" },
        { "@type": "ListItem", position: 3, name: "Affective Neuroscience and Emotion Science", description: "Emotional salience, body signals, and action readiness" },
        { "@type": "ListItem", position: 4, name: "Psychology", description: "Attention, appraisal, interpretation, learning, behaviour, and relational dynamics" },
        { "@type": "ListItem", position: 5, name: "Attachment, Trauma, and Developmental Research", description: "Relational safety, rupture, protection, repair, expectation, and repeated patterns" },
        { "@type": "ListItem", position: 6, name: "Social, Cultural, and Contemplative Fields", description: "Context, social patterning, attention, awareness, and later-scale questions" }
      ]
    },
    keywords: [
      "TEG-Blue scientific foundations",
      "TEG-Blue scientific grounding",
      "Nervous System Gradient",
      "affective neuroscience",
      "autonomic physiology",
      "biology and physiology",
      "attachment research",
      "trauma research",
      "emotion science",
      "cognitive science",
      "psychology",
      "social psychology",
      "sociology",
      "state-shaped capacity",
      "repair capacity"
    ]
  };
}

// ─── METHODOLOGY PAGE JSON-LD ───────────────────────

export function generateMethodologyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How TEG-Blue Reads Patterns",
    url: `${BASE_URL}/methodology`,
    description: "How to read visible patterns responsibly: observation, pattern, impact, claim status, use, limits, and review.",
    inLanguage: LANGUAGE,
    isPartOf: TEG_BLUE_PROJECT,
    about: {
      "@type": "ItemList",
      name: "Responsible Pattern Reading",
      description: "The public guide for reading nervous-system patterns while keeping observation, interpretation, impact, and claim status separate.",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Observation", description: "Start with what can be seen: behaviour, context, repetition, and relational effect." },
        { "@type": "ListItem", position: 2, name: "Pattern Reading", description: "Use the map to ask whether a pattern is moving toward safety, threat, control, shutdown, regulation, or repair." },
        { "@type": "ListItem", position: 3, name: "Impact and Response", description: "Track effect on clarity, autonomy, safety, accountability, and repair before choosing support, boundary, protection, accountability, or further study." },
        { "@type": "ListItem", position: 4, name: "Claim Status", description: "Keep research support, TEG-Blue integration, applied tools, and review as separate layers." }
      ]
    },
    keywords: [
      "TEG-Blue pattern reading",
      "Nervous System Gradient",
      "responsible pattern reading",
      "claim status",
      "state-shaped capacity",
      "research integration",
      "visual map",
      "repair capacity",
      "framework limits"
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
          description: "How nervous-system states form and how self-organisation develops around them"
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
      "repair",
      "integration"
    ]
  };
}

// ─── META TAGS GENERATOR ─────────────────────────────

export function generateMetaTags(node) {
  const url = getNodeUrl(node);
  const pageTitle = node.publicTitle || node.title;
  const pageDescription = node.publicSummary || node.summary;

  return {
    title: `${pageTitle} — TEG-Blue Research`,
    description: pageDescription,
    canonical: url,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      type: "article",
      siteName: "TEG-Blue Research",
    },
    dublinCore: {
      "DC.title": node.title,
      "DC.creator": node.author || "TEG-Blue Research",
      "DC.subject": node.tags?.join(", "),
      "DC.description": pageDescription,
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
