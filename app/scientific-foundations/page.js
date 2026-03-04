"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, RESEARCHER, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, SearchInput, ResearcherHero } from "@/src/components";

// ─── DOMAIN COLORS ──────────────────────────────────────────────
const domainColors = {
  "neuroscience": SPECTRUM.azure,
  "psychology": SPECTRUM.blue,
  "developmental": SPECTRUM.cobalt,
  "trauma": SPECTRUM.indigo,
  "clinical": SPECTRUM.slate,
  "social": SPECTRUM.blue,
  "emotion": SPECTRUM.azure,
};

function getDomainColor(domain) {
  const normalizedDomain = domain?.toLowerCase() || "";
  for (const [key, color] of Object.entries(domainColors)) {
    if (normalizedDomain.includes(key)) return color;
  }
  return SPECTRUM.blue;
}

// ─── 12 RESEARCH DOMAINS ───────────────────────────────────────
const RESEARCH_DOMAINS = [
  "Affective Neuroscience",
  "Analytical Psychology",
  "Attachment",
  "Developmental Psychology",
  "Emotion Science",
  "Humanistic Psychology",
  "Motivational Science",
  "Object Relations",
  "Polyvagal Theory",
  "Self Psychology",
  "Psychoanalysis",
  "Trauma Research",
];

// ─── CORE FOUNDATIONS ───────────────────────────────────────────
const coreFoundations = [
  {
    concept: "Nervous system states",
    explanation: "Safety and threat shift what we can feel, think, and do (Polyvagal Theory, Porges)",
  },
  {
    concept: "Emotion as information",
    explanation: "Emotions carry structured data about needs, boundaries, and danger (Affective Neuroscience, Panksepp; Appraisal Theory, Lazarus)",
  },
  {
    concept: "Regulation",
    explanation: "The capacity to shift between states is more predictive than any single state (self-regulation research, Gross)",
  },
  {
    concept: "Attachment",
    explanation: "Early relational patterns shape how we seek safety across the lifespan (Bowlby, Ainsworth, Main)",
  },
  {
    concept: "Identity under threat",
    explanation: "The self adapts, masks, and fragments under chronic stress (Winnicott, IFS, ego development)",
  },
  {
    concept: "Learning and development",
    explanation: "Emotional patterns are learned, reinforced, and can be changed (developmental psychology, neuroplasticity)",
  },
  {
    concept: "Culture and feedback loops",
    explanation: "Individual patterns scale into families, institutions, and social structures (Bronfenbrenner, systems theory)",
  },
  {
    concept: "Repair",
    explanation: "The path back to connection is measurable and specific, not abstract (repair research, complexity markers)",
  },
];

// ─── GLOBAL MODELS DATA ────────────────────────────────────────
const globalModels = [
  {
    id: 1,
    name: "Plutchik's Wheel of Emotions",
    author: "Robert Plutchik",
    coreContribution: "Maps 8 primary emotions and shows how they combine into complex feelings — one of the most widely used tools for teaching emotional vocabulary.",
    tegBlueAdds: [
      "Places each emotion inside a systemic context (Connection, Protection, Control, Domination) so the same emotion reads differently depending on the nervous system state it emerges from",
      "Adds trauma-informed gradients within each emotion — distinguishing hurt, neglect, abuse, and malicious intent",
      "Connects emotional identification to relational repair, not just classification",
    ],
    frameworks: ["F1", "F2"],
  },
  {
    id: 2,
    name: "Nonviolent Communication (NVC)",
    author: "Marshall Rosenberg",
    coreContribution: "Provides a clear language structure — observation, feeling, need, request — that promotes empathy and reduces blame in conflict.",
    tegBlueAdds: [
      "Maps the conditions under which NVC works well (Connection/Protection) and where it breaks down (Control/Domination dynamics)",
      "Adds emotional gradients that help distinguish discomfort from genuine harm",
      "Provides visual tools that make feelings and patterns visible — helpful for neurodivergent users and people in survival states",
    ],
    frameworks: ["F1", "F8"],
  },
  {
    id: 3,
    name: "Cognitive Behavioral Therapy (CBT)",
    author: "Aaron Beck, Albert Ellis",
    coreContribution: "Practical, evidence-based approach connecting thoughts, feelings, and behaviors — highly effective for anxiety, depression, and phobias.",
    tegBlueAdds: [
      "Integrates body and nervous system patterns alongside cognitive reframing",
      "Places individual thought patterns in relational and systemic context",
      "Adds trauma-informed gradients showing the difference between cognitive distortion and adaptive survival responses",
    ],
    frameworks: ["F1", "F8", "F9"],
  },
  {
    id: 4,
    name: "Polyvagal Theory",
    author: "Stephen Porges",
    coreContribution: "Explains how the autonomic nervous system shifts between safety (ventral vagal), fight/flight (sympathetic), and shutdown (dorsal vagal) — foundational for trauma-informed practice.",
    tegBlueAdds: [
      "Translates nervous system states into emotional logic and relational meaning",
      "Extends physiological states into observable patterns of connection, defense, manipulation, and oppression",
      "Bridges somatic awareness with relational repair through visual, accessible tools",
      "F4 applies neuroception to collective rule formation — group nervous system synchronization under threat produces rule systems",
      "F5 uses neuroception to explain how worth signals function as safety signals — and how chronic social threat from structural filtering holds the compass in Protection",
    ],
    frameworks: ["F1", "F2", "F3", "F4", "F5", "F12"],
  },
  {
    id: 5,
    name: "Zones of Regulation",
    author: "Leah Kuypers",
    coreContribution: "Simple, widely adopted color-coded system that gives children and educators a shared language for recognizing emotional states.",
    tegBlueAdds: [
      "Adds gradients within each zone — showing that 'red' contains everything from righteous anger to terror to rage, each needing different responses",
      "Reframes emotional states as information rather than behavior problems to manage",
      "Designed to be neurodivergent-friendly, avoiding shaming for being in any particular state",
    ],
    frameworks: ["F1", "F2"],
  },
  {
    id: 6,
    name: "Freud's Ego Model",
    author: "Sigmund Freud (1923)",
    coreContribution: "Groundbreaking attempt to describe inner psychological conflict through id, ego, and superego — recognized that much of the self works unconsciously.",
    tegBlueAdds: [
      "Reframes ego as shaped by survival strategies rather than inherent structure",
      "Expands beyond three parts into a continuous gradient of modes: Connection, Protection, Control, Domination",
      "Connects intrapsychic patterns to relational dynamics and systemic harm",
    ],
    frameworks: ["F3", "F5"],
  },
  {
    id: 7,
    name: "Winnicott's True/False Self",
    author: "Donald Winnicott",
    coreContribution: "Explains how children develop a True Self when caregivers attune, and a False Self when they must comply for survival — validates the pain of losing authenticity.",
    tegBlueAdds: [
      "Reframes True/False Self as awareness configuration: which capacities had conditions to develop and which didn't",
      "Maps how adaptive identities form around incomplete awareness sets and escalate across the gradient",
      "Provides tools to develop capacities that never had conditions to form, rather than 'finding' a hidden self",
    ],
    frameworks: ["F2", "F3", "F5", "F8"],
  },
  {
    id: 8,
    name: "Rogers' Organismic Valuing",
    author: "Carl Rogers",
    coreContribution: "Posits an innate drive toward growth, healing, and authenticity when conditions of empathy, acceptance, and congruence are present — the basis of person-centered therapy.",
    tegBlueAdds: [
      "Maps how survival modes override or distort the organismic compass",
      "Shows how repair reopens the path to belonging and growth",
      "Places authenticity inside a visual gradient, making distortions visible and addressable",
    ],
    frameworks: ["F1", "F8", "F11"],
  },
  {
    id: 9,
    name: "Jung's Persona",
    author: "Carl Jung",
    coreContribution: "Recognizes the adaptive function of the social mask — the tension between public identity and inner reality that shapes how we navigate belonging.",
    tegBlueAdds: [
      "Reframes the Persona as awareness configuration — identity built from whichever capacities were available",
      "Distinguishes adaptive identities rooted in belonging from those rooted in defense, control, or domination",
      "Provides concrete pathways for developing capacities and reclaiming authenticity",
    ],
    frameworks: ["F2", "F3", "F5"],
  },
  {
    id: 10,
    name: "Internal Family Systems (IFS)",
    author: "Richard Schwartz",
    coreContribution: "Compassionate, trauma-informed model that views the mind as made of parts (protectors, managers, exiles, Self) — normalizes protective strategies instead of pathologizing them.",
    tegBlueAdds: [
      "Integrates inner parts into a relational and systemic gradient",
      "Shows how inner protectors mirror relational patterns across Connection, Protection, Control, and Domination",
      "F4 maps IFS's protective parts as internal rule-enforcers — the self-policing mechanism (Steps 6–7 of rule internalization)",
      "Adds harm-measurement scales that connect personal healing to collective repair",
    ],
    frameworks: ["F3", "F4", "F5", "F8"],
  },
  {
    id: 11,
    name: "Ego Development Theory",
    author: "Jane Loevinger & others",
    coreContribution: "Maps stages of identity development — from pre-conventional to post-autonomous — showing how self-concept and meaning-making evolve over time.",
    tegBlueAdds: [
      "Shows how trauma can stall, distort, or reverse developmental progression",
      "Integrates identity growth with survival/belonging gradients",
      "Frames development as dynamic and relational, not only cognitive or linear",
    ],
    frameworks: ["F3", "F5", "F11"],
  },
  {
    id: 12,
    name: "Goffman's Dramaturgical Self",
    author: "Erving Goffman",
    coreContribution: "Reveals how social life operates like a stage — people play roles depending on audience, context, and setting — foundational for role theory and social psychology.",
    tegBlueAdds: [
      "Expands role-play into awareness configuration: roles formed around available capacities",
      "Distinguishes authentic roles from survival-driven ones across the four modes",
      "F4 maps Goffman's dramaturgical performance to performance rules — social maintenance through unspoken rules",
      "Shows pathways for healing from role entrapment and reclaiming genuine connection",
    ],
    frameworks: ["F2", "F3", "F4", "F5", "F6"],
  },
  {
    id: 13,
    name: "Defense Mechanisms",
    author: "Sigmund Freud & Anna Freud",
    coreContribution: "Early recognition that the mind develops protective strategies (denial, projection, rationalization) to manage pain — still widely referenced in clinical psychology.",
    tegBlueAdds: [
      "Reframes defenses as adaptive survival responses rather than pathology",
      "Places defenses on a gradient: protection, manipulation, tyranny — each requiring different responses",
      "Connects individual defense patterns to systemic harm and relational repair",
    ],
    frameworks: ["F3", "F7"],
  },
  {
    id: 14,
    name: "Cognitive Dissonance Theory",
    author: "Leon Festinger",
    coreContribution: "Explains the discomfort when beliefs, emotions, or actions conflict — and how people resolve it through changing beliefs, justifying actions, or denial.",
    tegBlueAdds: [
      "Shows how dissonance is experienced somatically and emotionally, not just cognitively",
      "Maps how unresolved dissonance can push people toward denial, defense, or manipulation",
      "Provides repair tools to face contradictions without causing further harm",
    ],
    frameworks: ["F3", "F7"],
  },
  {
    id: 15,
    name: "Disorganized Attachment & Complex PTSD",
    author: "Mary Main, Judith Herman, Bessel van der Kolk",
    coreContribution: "Explains paradoxical push-pull dynamics where closeness itself feels dangerous — connects childhood relational trauma to lifelong patterns of dysregulation and identity disturbance.",
    tegBlueAdds: [
      "Integrates attachment disruption and CPTSD into the Emotional Gradient Framework",
      "Maps how disorganized attachment produces specific awareness configurations and chronic modes",
      "F4 maps intergenerational trauma transmission as rule replication across generations — traumatic rules passed through families and institutions",
      "F5 traces how conditional safety produces worth-seeking as regulation — and how chronic invisibility from structural filtering produces allostatic load and weathering",
      "Provides gradients and tools for relational repair and nervous system healing",
    ],
    frameworks: ["F1", "F2", "F3", "F4", "F5", "F8", "F10"],
  },
];

// ─── PAGE COMPONENT ─────────────────────────────────────────────

export default function ScientificFoundationsPage() {
  const [theories, setTheories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDomain, setActiveDomain] = useState(null);

  useEffect(() => {
    fetch("/api/theories")
      .then((res) => res.json())
      .then((data) => {
        setTheories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filtered theories for Evidence Map
  const filteredTheories = useMemo(() => {
    let result = theories;
    if (activeDomain) {
      result = result.filter((t) => t.slug === activeDomain);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title?.toLowerCase().includes(q) ||
          t.summary?.toLowerCase().includes(q) ||
          t.originAuthor?.toLowerCase().includes(q) ||
          t.tags?.some((tag) => tag.toLowerCase().includes(q))
      );
    }
    return result;
  }, [theories, searchQuery, activeDomain]);

  // Group filtered theories by domain
  const groupedByDomain = useMemo(() => {
    const groups = filteredTheories.reduce((acc, theory) => {
      const domain = theory.domain || "Other";
      if (!acc[domain]) acc[domain] = [];
      acc[domain].push(theory);
      return acc;
    }, {});
    return groups;
  }, [filteredTheories]);

  const sortedDomains = Object.keys(groupedByDomain).sort();

  // CSV download
  const downloadCSV = useCallback(() => {
    const headers = ["Title", "Domain", "Author", "Summary", "Tags"];
    const rows = theories.map((t) => [
      t.title || "",
      t.domain || "",
      t.originAuthor || "",
      (t.summary || "").replace(/"/g, '""'),
      (t.tags || []).join("; "),
    ]);
    const csv = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "teg-blue-theory-database.csv";
    link.click();
    URL.revokeObjectURL(url);
  }, [theories]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/scientific-foundations" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${SPACING.pagePadding} 60px`,
        }}
      >
        {/* ─── 1. HEADER ─────────────────────────────────────────── */}
        <ResearcherHero
          badge="SCIENTIFIC FOUNDATIONS"
          title="Scientific Foundations"
          description="The established research that TEG-Blue builds on — 139+ theories across neuroscience, psychology, and related fields."
        />

        {/* ─── 2. CORE FOUNDATIONS ────────────────────────────────── */}
        <CoreFoundations />

        {/* ─── 3. HOW TEG-BLUE BUILDS ON EXISTING MODELS ─────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: TEXT.primary,
              margin: "0 0 12px 0",
            }}
          >
            How TEG-Blue Builds on Existing Models
          </h2>

          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            TEG-Blue does not replace these models. It works like a translation layer that
            helps them speak to each other inside one shared map. Each card shows what the
            model contributes and what TEG-Blue translates or adds.
          </p>

          {globalModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </section>

        {/* ─── 4. EVIDENCE MAP ───────────────────────────────────── */}
        <div
          style={{
            borderTop: `1px solid ${BORDER.default}`,
            margin: "48px 0",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              background: BG.page,
              padding: "0 16px",
              fontSize: 12,
              color: TEXT.muted,
              fontFamily: FONT.mono,
            }}
          >
            EVIDENCE MAP
          </span>
        </div>

        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: TEXT.primary,
              margin: "0 0 12px 0",
            }}
          >
            139+ Established Theories
          </h2>

          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            TEG-Blue integrates 139+ established theories organized into 12 research domain
            indexes. Each index groups the key theories, authors, and source traditions within
            that domain. This section exists for inspection — to show what the grounding is,
            how it was selected, and how to audit it.
          </p>

          {/* Method note */}
          <div
            style={{
              padding: 16,
              background: hexToRgba(SPECTRUM.slate, 0.06),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.slate, 0.12)}`,
              marginBottom: 24,
            }}
          >
            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: TEXT.secondary }}>How we selected these:</strong>{" "}
              Large language models with deep research capabilities were used to systematically
              identify theories that align with each framework. Each domain index groups the key
              traditions and authors — the detailed mapping of individual theories to specific
              frameworks is ongoing work. This is a working hypothesis, not a finished bibliography.
              We invite corrections.
            </p>
          </div>

          {/* Search + filters */}
          <div style={{ marginBottom: 20 }}>
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search theories by name, author, or keyword..."
            />
          </div>

          {/* Domain filter chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            <button
              onClick={() => setActiveDomain(null)}
              style={{
                padding: "6px 12px",
                fontSize: 12,
                fontFamily: FONT.mono,
                fontWeight: 500,
                borderRadius: 6,
                border: `1px solid ${!activeDomain ? hexToRgba(SPECTRUM.blue, 0.4) : BORDER.default}`,
                background: !activeDomain ? hexToRgba(SPECTRUM.blue, 0.12) : "transparent",
                color: !activeDomain ? SPECTRUM.blue : TEXT.muted,
                cursor: "pointer",
              }}
            >
              All domains
            </button>
            {RESEARCH_DOMAINS.map((domain) => {
              const domainKey = domain.toLowerCase().replace(/\s+/g, "-");
              const isActive = activeDomain === domainKey;
              return (
                <button
                  key={domain}
                  onClick={() => setActiveDomain(isActive ? null : domainKey)}
                  style={{
                    padding: "6px 12px",
                    fontSize: 12,
                    fontFamily: FONT.mono,
                    fontWeight: 500,
                    borderRadius: 6,
                    border: `1px solid ${isActive ? hexToRgba(SPECTRUM.azure, 0.4) : BORDER.default}`,
                    background: isActive ? hexToRgba(SPECTRUM.azure, 0.12) : "transparent",
                    color: isActive ? SPECTRUM.azure : TEXT.muted,
                    cursor: "pointer",
                  }}
                >
                  {domain}
                </button>
              );
            })}
          </div>

          {/* Results count + CSV download */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 13, color: TEXT.muted }}>
              {loading ? "Loading..." : `${filteredTheories.length} theories`}
              {(searchQuery || activeDomain) && !loading
                ? ` (filtered from ${theories.length})`
                : ""}
            </span>
            {theories.length > 0 && (
              <button
                onClick={downloadCSV}
                style={{
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 500,
                  borderRadius: 6,
                  border: `1px solid ${BORDER.default}`,
                  background: "transparent",
                  color: TEXT.muted,
                  cursor: "pointer",
                  fontFamily: FONT.mono,
                }}
              >
                Download CSV
              </button>
            )}
          </div>

          {/* Loading state */}
          {loading && (
            <div style={{ textAlign: "center", padding: 40 }}>
              <p style={{ fontSize: 14, color: TEXT.muted }}>Loading theories...</p>
            </div>
          )}

          {/* Theory cards by domain */}
          {!loading &&
            sortedDomains.map((domain) => (
              <section key={domain} style={{ marginBottom: 32 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: TEXT.primary,
                      margin: 0,
                      textTransform: "capitalize",
                    }}
                  >
                    {domain}
                  </h3>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: FONT.mono,
                      color: getDomainColor(domain),
                      padding: "3px 8px",
                      background: hexToRgba(getDomainColor(domain), 0.1),
                      borderRadius: 4,
                    }}
                  >
                    {groupedByDomain[domain].length}
                  </span>
                </div>

                {groupedByDomain[domain].map((theory) => (
                  <ExpandableTheoryCard key={theory.slug} theory={theory} />
                ))}
              </section>
            ))}

          {/* Empty state */}
          {!loading && filteredTheories.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: 48,
                background: BG.card,
                borderRadius: 12,
                border: `1px solid ${BORDER.default}`,
              }}
            >
              <p style={{ fontSize: 15, color: TEXT.secondary, marginBottom: 8 }}>
                {theories.length === 0
                  ? "No theories loaded yet."
                  : "No theories match your search."}
              </p>
              {theories.length > 0 && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveDomain(null);
                  }}
                  style={{
                    padding: "6px 14px",
                    fontSize: 13,
                    color: SPECTRUM.blue,
                    background: "transparent",
                    border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.3)}`,
                    borderRadius: 6,
                    cursor: "pointer",
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </section>

        {/* ─── 5. HOW WE VALIDATE ────────────────────────────────── */}
        <ValidationMethod />

        {/* ─── 6. FOOTER ──────────────────────────────────────────── */}
        <footer
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: `1px solid ${BORDER.default}`,
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 12, color: TEXT.muted, marginBottom: 12 }}>
            Research developed by Anna Paretas-Artacho · TEG-Blue Research Consortium
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <Link
              href="/methodology"
              style={{ fontSize: 13, color: TEXT.muted, textDecoration: "none" }}
            >
              Methodology
            </Link>
            <Link
              href="/collaborate"
              style={{ fontSize: 13, color: TEXT.muted, textDecoration: "none" }}
            >
              Collaborate
            </Link>
          </div>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── CORE FOUNDATIONS COMPONENT ──────────────────────────────────

function CoreFoundations() {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "0 0 16px 0",
        }}
      >
        Core Foundations
      </h2>

      <div
        style={{
          padding: 24,
          background: BG.card,
          borderRadius: 12,
          border: `1px solid ${BORDER.default}`,
          borderLeft: `3px solid ${SPECTRUM.indigo}`,
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            lineHeight: 1.8,
            marginTop: 0,
            marginBottom: 20,
          }}
        >
          The essential science TEG-Blue builds on, drawn from multiple disciplines:
        </p>

        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {coreFoundations.map((item, i) => (
            <li
              key={i}
              style={{
                padding: "10px 0",
                borderTop: i > 0 ? `1px solid ${hexToRgba(SPECTRUM.indigo, 0.08)}` : "none",
                fontSize: 14,
                color: TEXT.secondary,
                lineHeight: 1.7,
              }}
            >
              <strong style={{ color: TEXT.primary }}>{item.concept}</strong>
              {" — "}
              {item.explanation}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── MODEL CARD COMPONENT ───────────────────────────────────────

function ModelCard({ model }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        marginBottom: 10,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${isOpen ? hexToRgba(SPECTRUM.indigo, 0.3) : BORDER.default}`,
        borderLeft: `3px solid ${SPECTRUM.indigo}`,
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "14px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "block",
        }}
      >
        {/* Name + author + framework tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary }}>
            {model.name}
          </span>
          <span style={{ fontSize: 13, color: TEXT.muted }}>— {model.author}</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
            {model.frameworks.map((f) => (
              <span
                key={f}
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  fontFamily: FONT.mono,
                  padding: "2px 6px",
                  borderRadius: 3,
                  background: hexToRgba(SPECTRUM.cobalt, 0.12),
                  color: SPECTRUM.cobalt,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Core contribution as subtitle */}
        <p
          style={{
            fontSize: 13,
            color: TEXT.muted,
            lineHeight: 1.6,
            margin: "8px 0 0 0",
          }}
        >
          {model.coreContribution}
        </p>

        {/* Expand indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10 }}>
          <span style={{ fontSize: 12, color: TEXT.muted }}>
            {isOpen ? "Hide details" : "Show what TEG-Blue adds"}
          </span>
          <span
            style={{
              fontSize: 14,
              color: SPECTRUM.indigo,
              transition: "transform 0.2s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▼
          </span>
        </div>
      </button>

      {/* Expanded content: 2-column */}
      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px",
            borderTop: `1px solid ${BORDER.default}`,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginTop: 16,
            }}
          >
            {/* Core contribution */}
            <div
              style={{
                padding: 16,
                background: hexToRgba(SPECTRUM.azure, 0.05),
                borderRadius: 8,
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.12)}`,
              }}
            >
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.azure,
                  marginBottom: 10,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                Core contribution
              </h4>
              <p
                style={{
                  fontSize: 13,
                  color: TEXT.secondary,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {model.coreContribution}
              </p>
            </div>

            {/* What TEG-Blue translates / adds */}
            <div
              style={{
                padding: 16,
                background: hexToRgba(SPECTRUM.indigo, 0.05),
                borderRadius: 8,
                border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.12)}`,
              }}
            >
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.indigo,
                  marginBottom: 10,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                What TEG-Blue translates / adds
              </h4>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                {model.tegBlueAdds.map((t, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 13,
                      color: TEXT.secondary,
                      lineHeight: 1.7,
                      marginBottom: 6,
                    }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Framework references */}
          <div
            style={{
              marginTop: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12, color: TEXT.muted }}>Appears in:</span>
            {model.frameworks.map((f) => (
              <Link
                key={f}
                href="/frameworks-map"
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: FONT.mono,
                  padding: "3px 8px",
                  borderRadius: 4,
                  background: hexToRgba(SPECTRUM.cobalt, 0.1),
                  color: SPECTRUM.cobalt,
                  textDecoration: "none",
                }}
              >
                {f}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── EXPANDABLE THEORY CARD ─────────────────────────────────────

function ExpandableTheoryCard({ theory }) {
  const [isOpen, setIsOpen] = useState(false);
  const domainColor = getDomainColor(theory.domain);

  const coreConceptSection = theory.content?.find(
    (s) => s.id === "core-concept" || s.title?.toLowerCase().includes("core")
  );
  const integrationSection = theory.content?.find(
    (s) => s.id === "teg-blue-integration" || s.title?.toLowerCase().includes("teg-blue")
  );
  const sourcesSection = theory.content?.find(
    (s) => s.id === "key-sources" || s.title?.toLowerCase().includes("source")
  );

  return (
    <div
      style={{
        marginBottom: 10,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${isOpen ? hexToRgba(domainColor, 0.3) : BORDER.default}`,
        borderLeft: `3px solid ${domainColor}`,
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "block",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 6,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary }}>
            {theory.title}
          </span>
          {theory.originAuthor && (
            <span style={{ fontSize: 13, color: TEXT.muted }}>
              — {theory.originAuthor}
            </span>
          )}
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              fontFamily: FONT.mono,
              padding: "3px 8px",
              borderRadius: 4,
              background: hexToRgba(domainColor, 0.1),
              color: domainColor,
              marginLeft: "auto",
              textTransform: "capitalize",
            }}
          >
            {theory.status || "established"}
          </span>
        </div>

        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {theory.summary}
        </p>

        {theory.tags && theory.tags.length > 0 && (
          <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
            {theory.tags.slice(0, 5).map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: 10,
                  fontFamily: FONT.mono,
                  padding: "2px 6px",
                  background: hexToRgba(domainColor, 0.08),
                  color: TEXT.muted,
                  borderRadius: 3,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
          <span style={{ fontSize: 12, color: TEXT.muted }}>
            {isOpen ? "Hide details" : "Show details"}
          </span>
          <span
            style={{
              fontSize: 14,
              color: domainColor,
              transition: "transform 0.2s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▼
          </span>
        </div>
      </button>

      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px",
            borderTop: `1px solid ${BORDER.default}`,
          }}
        >
          {coreConceptSection && (
            <div style={{ marginTop: 16, marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                {coreConceptSection.title}
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                {coreConceptSection.content}
              </p>
            </div>
          )}

          {integrationSection && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                {integrationSection.title}
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                {integrationSection.content}
              </p>
            </div>
          )}

          {sourcesSection && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                {sourcesSection.title}
              </h4>
              <p
                style={{
                  fontSize: 13,
                  color: TEXT.muted,
                  lineHeight: 1.8,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                {sourcesSection.content}
              </p>
            </div>
          )}

          {theory.connections && theory.connections.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 8,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                Connections
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {theory.connections.map((conn, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 12,
                      padding: "4px 10px",
                      background: hexToRgba(domainColor, 0.08),
                      color: TEXT.secondary,
                      borderRadius: 4,
                      border: `1px solid ${hexToRgba(domainColor, 0.15)}`,
                    }}
                  >
                    {conn.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div
            style={{
              marginTop: 16,
              paddingTop: 16,
              borderTop: `1px solid ${BORDER.default}`,
            }}
          >
            <Link
              href="/frameworks-map"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 500,
                color: domainColor,
                textDecoration: "none",
              }}
            >
              See which frameworks use this theory →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── VALIDATION METHOD COMPONENT ────────────────────────────────

function ValidationMethod() {
  return (
    <section
      style={{
        marginBottom: 48,
        padding: 24,
        background: BG.card,
        borderRadius: 12,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "0 0 20px 0",
        }}
      >
        How We Validate
      </h2>

      {/* How the mapping was built */}
      <div style={{ marginBottom: 20 }}>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
            margin: "0 0 8px 0",
          }}
        >
          How the mapping was built
        </h3>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
          The architecture was developed first — through independent research, observation, and
          cross-disciplinary reading. Once the structure was established, AI research tools
          (Claude, Perplexity, Microsoft Copilot) were used to systematically identify which
          established theories align with each framework.{" "}
          <Link href="/methodology" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
            Full methodology →
          </Link>
        </p>
      </div>

      {/* What the 12 indexes are */}
      <div style={{ marginBottom: 20 }}>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
            margin: "0 0 8px 0",
          }}
        >
          The 12 research domain indexes
        </h3>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 0 10px 0" }}>
          The 139+ source theories are organized into 12 research domain groupings. Each is a
          JSON index file that can be audited, corrected, or extended:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {RESEARCH_DOMAINS.map((domain) => (
            <span
              key={domain}
              style={{
                fontSize: 11,
                fontFamily: FONT.mono,
                padding: "4px 10px",
                background: hexToRgba(SPECTRUM.azure, 0.08),
                color: TEXT.muted,
                borderRadius: 4,
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.1)}`,
              }}
            >
              {domain}
            </span>
          ))}
        </div>
      </div>

      {/* What's testable now vs later */}
      <div style={{ marginBottom: 20 }}>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
            margin: "0 0 10px 0",
          }}
        >
          What&rsquo;s testable now vs. later
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          <div
            style={{
              padding: 14,
              background: hexToRgba(SPECTRUM.azure, 0.05),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.12)}`,
            }}
          >
            <h4
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.azure,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                margin: "0 0 8px 0",
              }}
            >
              Testable now
            </h4>
            <ul
              style={{
                margin: 0,
                paddingLeft: 16,
                fontSize: 13,
                color: TEXT.secondary,
                lineHeight: 1.7,
              }}
            >
              <li>Four-mode detection in natural language</li>
              <li>Complexity markers as regulatory capacity signals</li>
              <li>Escalation / de-escalation patterns</li>
            </ul>
          </div>
          <div
            style={{
              padding: 14,
              background: hexToRgba(SPECTRUM.slate, 0.06),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.slate, 0.12)}`,
            }}
          >
            <h4
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.slate,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                margin: "0 0 8px 0",
              }}
            >
              Needs further work
            </h4>
            <ul
              style={{
                margin: 0,
                paddingLeft: 16,
                fontSize: 13,
                color: TEXT.secondary,
                lineHeight: 1.7,
              }}
            >
              <li>Psychometric validation of emotional tools</li>
              <li>Cross-cultural replication</li>
              <li>Longitudinal studies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Plan for review */}
      <div>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
            margin: "0 0 8px 0",
          }}
        >
          Plan for review
        </h3>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 0 12px 0" }}>
          We are preparing for pre-registration of the core testable claims, with open data
          and open methodology. We explicitly invite independent replication, correction, and
          critique.{" "}
          <Link href="/collaborate" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
            Collaborate with us →
          </Link>
        </p>
      </div>
    </section>
  );
}
