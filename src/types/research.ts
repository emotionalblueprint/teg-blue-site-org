/**
 * TEG-Blue Research Platform — Data Types
 * 
 * Every piece of content is a ResearchNode.
 * Nodes connect to each other via typed Connections.
 * Content is structured as expandable ContentBlocks.
 */

// ─── CONTENT TYPES ───────────────────────────────────

export type ContentType =
  | "publication"
  | "working-paper"
  | "theory"
  | "glossary"
  | "framework"
  | "methodology"
  | "opendata"
  | "collaboration"
  | "citation";

export type ContentStatus =
  | "published"
  | "preprint"
  | "working"
  | "in-progress"
  | "planned";

// ─── CONNECTION TYPES ────────────────────────────────

export type ConnectionType =
  | "cites"        // Paper → Theory it references
  | "validates"    // Study → Framework it tests
  | "defines"      // Glossary term → Papers using it
  | "extends"      // Framework → Framework it builds on
  | "contradicts"  // External critique → TEG-Blue response
  | "replicates"   // External study → Your study
  | "part-of"      // Paper → Research project
  | "data-from"    // Dataset → Study it belongs to
  | "method"       // Methodology → Study using it
  | "related";     // Generic relationship

// ─── CORE DATA MODEL ─────────────────────────────────

export interface Connection {
  type: ConnectionType;
  targetSlug: string;
  targetType: ContentType;
  label?: string;           // Human-readable (e.g., "Built on")
}

export interface ContentBlock {
  id: string;
  title: string;
  content: string;          // Markdown content
  defaultOpen?: boolean;    // First block typically open
  connections?: Connection[];
}

export interface ResearchNode {
  // Identity
  slug: string;
  type: ContentType;
  title: string;
  status: ContentStatus;

  // Context
  summary: string;          // 1-2 sentences, always required
  keyFinding?: string;      // The one thing people remember

  // Metadata (type-specific)
  author?: string;
  date?: string;
  doi?: string;
  doiUrl?: string;
  preregistration?: string;
  externalUrl?: string;
  originAuthor?: string;    // For theories (e.g., "Stephen Porges")

  // Tags & categorization
  tags: string[];
  domain?: string;          // For theories: "neuroscience", "psychology", etc.

  // Content (expandable sections)
  content: ContentBlock[];

  // Connections to other nodes
  connections: Connection[];

  // TEG-Blue specific (for theories)
  tegBlueUsage?: string;    // How TEG-Blue integrates this theory

  // Related glossary terms (auto-linked in text)
  glossaryTerms?: string[];

  // Timestamps
  lastUpdated: string;
  createdAt?: string;
}

// ─── SPECIALIZED NODE TYPES ──────────────────────────
// These extend ResearchNode with type-specific required fields

export interface PublicationNode extends ResearchNode {
  type: "publication" | "working-paper";
  author: string;
  date: string;
  doi: string;
  doiUrl: string;
}

export interface TheoryNode extends ResearchNode {
  type: "theory";
  originAuthor: string;
  domain: string;
  tegBlueUsage: string;
}

export interface GlossaryNode extends ResearchNode {
  type: "glossary";
  definition: string;       // Short definition for tooltips
  relatedTerms?: string[];  // Slugs of related glossary entries
  origin?: string;          // "teg-blue-original" | "established-term"
}

export interface FrameworkNode extends ResearchNode {
  type: "framework";
  frameworkId: string;      // "F1", "F2", etc.
  scale?: string;           // "individual" | "relational" | "systemic"
}

// ─── JSON-LD TYPES ───────────────────────────────────

export interface JsonLdBase {
  "@context": "https://schema.org";
  "@type": string;
  name: string;
  description: string;
  url: string;
}

export interface ScholarlyArticleJsonLd extends JsonLdBase {
  "@type": "ScholarlyArticle";
  author: {
    "@type": "Person";
    name: string;
    affiliation?: string;
  };
  datePublished?: string;
  doi?: string;
  abstract?: string;
  keywords?: string[];
  isPartOf?: {
    "@type": "ResearchProject";
    name: string;
  };
  citation?: Array<{ "@type": string; name: string; url: string }>;
  about?: Array<{ "@type": "DefinedTerm"; name: string; url: string }>;
}

export interface DefinedTermJsonLd extends JsonLdBase {
  "@type": "DefinedTerm";
  inDefinedTermSet: {
    "@type": "DefinedTermSet";
    name: string;
    url: string;
  };
  subjectOf?: Array<{ "@type": string; name: string; url: string }>;
}
