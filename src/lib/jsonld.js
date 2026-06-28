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
    name: "TEG-Blue Overview — The Nervous System Gradient",
    url: `${BASE_URL}/foundations`,
    description: "Overview of TEG-Blue: the Nervous System Gradient, cited source science, original synthesis status, applied tools, and future testing.",
    inLanguage: LANGUAGE,
    isPartOf: TEG_BLUE_PROJECT,
    about: {
      "@type": "Thing",
      name: "The Nervous System Gradient",
      description: "TEG-Blue's central map: a research-grounded map of state-dependent capacity."
    },
    mainEntity: {
      "@type": "ItemList",
      name: "TEG-Blue Overview",
      description: "TEG-Blue brings together cited source science, the Nervous System Gradient, applied tools, and testing surfaces.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Cited Source Science",
          description: "Established scientific and scholarly fields that ground the framework, including neuroscience, attachment research, trauma research, stress physiology, interoception, emotion science, and related literatures.",
          url: `${BASE_URL}/scientific-foundations`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Nervous System Gradient",
          description: "The central map of state-dependent capacity: how nervous-system state changes perception, emotion, body activation, behaviour, empathy, repair, and tempo.",
          url: BASE_URL
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Gradient Source Principles",
          description: "The Gradient is grounded in four public source principles: a continuous body-level read of safety and threat, two survival problems, a graded perception scale, and two autonomic territories.",
          url: `${BASE_URL}/foundations#gradient-principles`
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Original Visual Synthesis",
          description: "The TEG-Blue architecture, diagrams, labels, and cross-disciplinary placement are original synthesis work: research-grounded, source-traced, and open to independent review and testing.",
          url: `${BASE_URL}/methodology`
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Applied Tools",
          description: "Public tools on teg-blue.com are applied outputs generated from gradient logic. They demonstrate applied coherence and provide surfaces for future testing; they do not validate the whole framework.",
          url: "https://teg-blue.com/emotional-tools"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Future Testing",
          description: "Reliability, validity, replication, user studies, and independent review remain necessary for testing the broader synthesis and applied instruments.",
          url: `${BASE_URL}/publications`
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
    name: "Scientific Foundations — TEG-Blue Research",
    url: `${BASE_URL}/scientific-foundations`,
    description: "The source grounding behind the Nervous System Gradient: established research traditions, clinical models, communication frameworks, educational tools, and TEG-Blue's original visual synthesis.",
    inLanguage: LANGUAGE,
    isPartOf: TEG_BLUE_PROJECT,
    about: {
      "@type": "ItemList",
      name: "Scientific and Applied Models Organized by TEG-Blue",
      description: "Widely used models and source areas, their contributions, and how the Nervous System Gradient places them in relation.",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Plutchik's Wheel of Emotions", description: "Emotion taxonomy and emotional vocabulary" },
        { "@type": "ListItem", position: 2, name: "Nonviolent Communication (NVC)", description: "Empathy-based communication method" },
        { "@type": "ListItem", position: 3, name: "Cognitive Behavioral Therapy (CBT)", description: "Thought-feeling-behavior clinical approach" },
        { "@type": "ListItem", position: 4, name: "Polyvagal Theory", description: "Stephen Porges' autonomic nervous system model" },
        { "@type": "ListItem", position: 5, name: "Zones of Regulation", description: "Leah Kuypers' color-coded educational regulation tool" },
        { "@type": "ListItem", position: 6, name: "Freud's Ego Model", description: "Id, ego, superego psychic structure" },
        { "@type": "ListItem", position: 7, name: "Winnicott's True/False Self", description: "Authentic vs adaptive self-development" },
        { "@type": "ListItem", position: 8, name: "Rogers' Organismic Valuing", description: "Innate drive toward growth and authenticity" },
        { "@type": "ListItem", position: 9, name: "Jung's Persona", description: "Social mask and identity adaptation" },
        { "@type": "ListItem", position: 10, name: "Internal Family Systems (IFS)", description: "Richard Schwartz's parts-based therapy model" },
        { "@type": "ListItem", position: 11, name: "Ego Development Theory", description: "Jane Loevinger's identity development stages" },
        { "@type": "ListItem", position: 12, name: "Goffman's Dramaturgical Self", description: "Social life as performance" },
        { "@type": "ListItem", position: 13, name: "Defense Mechanisms", description: "Freud's unconscious protective strategies" },
        { "@type": "ListItem", position: 14, name: "Cognitive Dissonance Theory", description: "Leon Festinger's belief-action conflict theory" },
        { "@type": "ListItem", position: 15, name: "Disorganized Attachment & Complex PTSD", description: "Trauma-informed attachment and chronic trauma models" },
        { "@type": "ListItem", position: 16, name: "Narcissism Research", description: "Self-structure, narcissistic injury, empathy disruption, accountability, and relational harm" }
      ]
    },
    keywords: [
      "scientific foundations",
      "research grounding",
      "emotional regulation models",
      "Plutchik wheel",
      "NVC nonviolent communication",
      "CBT cognitive behavioral therapy",
      "polyvagal theory",
      "zones of regulation",
      "narcissism research",
      "complex PTSD",
      "disorganized attachment",
      "IFS internal family systems",
      "attachment theory",
      "trauma informed",
      "psychological models comparison",
      "TEG-Blue integration"
    ]
  };
}

// ─── METHODOLOGY PAGE JSON-LD ───────────────────────

export function generateMethodologyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Methodology - TEG-Blue",
    url: `${BASE_URL}/methodology`,
    description: "How TEG-Blue moves from source science to Gradient synthesis, applied tools, and research questions.",
    inLanguage: LANGUAGE,
    isPartOf: TEG_BLUE_PROJECT,
    about: {
      "@type": "ItemList",
      name: "TEG-Blue Method Claim Layers",
      description: "The four methodological layers that label how source material, synthesis, tools, and testing are used.",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sources", description: "Peer-reviewed research, established scholarship, and widely used models or tools that ground specific ingredients." },
        { "@type": "ListItem", position: 2, name: "Synthesis", description: "The Nervous System Gradient, diagrams, labels, and cross-disciplinary placement as original visual synthesis." },
        { "@type": "ListItem", position: 3, name: "Tools", description: "Gradient scales, behaviour maps, schemas, and practical tools generated from Gradient logic." },
        { "@type": "ListItem", position: 4, name: "Testing", description: "Reliability, validity, replication, usefulness, and cross-context fit evaluated as specific claims." }
      ]
    },
    keywords: [
      "TEG-Blue methodology",
      "source separation",
      "source traces",
      "original synthesis",
      "Nervous System Gradient",
      "research grounding",
      "inter-rater reliability",
      "validity testing",
      "replication",
      "psychometric testing",
      "open research questions"
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
