"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

// Domain colors for visual grouping
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

// ─── GLOBAL MODELS DATA ─────────────────────────────────────────
const globalModels = [
  {
    id: 1,
    name: "Plutchik's Wheel of Emotions",
    author: "Robert Plutchik",
    consists: "The model describes 8 primary emotions (joy, trust, fear, surprise, sadness, disgust, anger, anticipation). These emotions can combine to form more complex feelings (e.g., anticipation + joy = optimism). It's often used visually, like a flower or color wheel, to show how emotions relate and intensify.",
    strengths: [
      "Clear visual map of primary emotions",
      "Shows intensity and blending (complex feelings built from simple ones)",
      "Useful for teaching emotional vocabulary"
    ],
    misses: [
      "Doesn't explain why an emotion 'shows up' distorted (e.g., anger as boundary vs anger as control)",
      "Ignores context — the same emotion can mean very different things depending on whether you're in Belonging or Defense mode",
      "No pathway for healing or relational repair",
      "Treats emotions as fixed, narrow buckets without showing the gradients inside each one"
    ],
    tegBlueAdds: [
      "Explains the systemic role of emotions (Connect vs Protect vs Control vs Oppression)",
      "Maps how emotions are interpreted differently inside the emotional gradient between Connect vs Protect",
      "Includes trauma-informed gradients (hurt, neglect, abuse, malicious intent)",
      "Offers tools for repair, not just classification"
    ]
  },
  {
    id: 2,
    name: "Nonviolent Communication (NVC)",
    author: "Marshall Rosenberg",
    consists: "A communication method and way of relating based on empathy. The core steps are: (1) Observation — what happened, without judgment, (2) Feeling — how you feel about it, (3) Need — what need of yours is connected, (4) Request — a clear, doable action you ask for.",
    strengths: [
      "Provides a language structure (observation, feeling, need, request)",
      "Promotes empathy and reduces blame",
      "Can transform conflict when used with goodwill"
    ],
    misses: [
      "Assumes people are emotionally safe enough to use it (not always true in abuse)",
      "Can be weaponized by manipulators (e.g., fake empathy to control)",
      "Doesn't explain why emotions distort under survival mode",
      "Lacks a map of patterns — it gives tools, but not the bigger system"
    ],
    tegBlueAdds: [
      "Shows why NVC fails in unsafe dynamics (e.g., manipulation, control, oppression)",
      "Adds emotional gradients to measure harm and distinguish discomfort vs real damage",
      "Places NVC inside a wider framework of survival/belonging — explaining when it works and when it breaks",
      "Provides visual tools that make feelings and patterns visible (helpful for neurodivergent users)"
    ]
  },
  {
    id: 3,
    name: "Cognitive Behavioral Therapy (CBT)",
    author: "Aaron Beck, Albert Ellis",
    consists: "A widely used form of psychotherapy that focuses on how thoughts, feelings, and behaviors are connected. The idea: if you change distorted thinking patterns, you can reduce painful emotions and change unhelpful behaviors. Often very structured and practical (worksheets, exercises, homework).",
    strengths: [
      "Practical, structured, evidence-based",
      "Helps challenge distorted thoughts",
      "Good for anxiety, depression, phobias"
    ],
    misses: [
      "Over-focuses on thoughts, sometimes minimizing the body and nervous system",
      "Can feel mechanical or invalidating if deeper trauma is present",
      "Doesn't address power, relational abuse, or systemic harm",
      "Healing is treated as an individual task, not relational or generational"
    ],
    tegBlueAdds: [
      "Integrates body, nervous system, and somatic patterns (not just thoughts)",
      "Places emotions in a relational + systemic context, not just inside the individual",
      "Brings in trauma-informed gradients that show the difference between hurt, survival responses, and deliberate abuse",
      "Connects personal healing with social repair (families, institutions, culture)"
    ]
  },
  {
    id: 4,
    name: "Polyvagal Theory",
    author: "Stephen Porges",
    consists: "A model of the autonomic nervous system (ANS). Describes how our body shifts between: Ventral vagal (safety/social connection), Sympathetic (fight/flight), and Dorsal vagal (shutdown/freeze). Shows how our sense of safety vs threat drives emotional and behavioral states.",
    strengths: [
      "Brings the body and nervous system into the emotional conversation",
      "Trauma-informed — explains why people react with shutdown or hyperarousal",
      "Very influential in therapy, somatics, and trauma research"
    ],
    misses: [
      "Focuses on physiology, not on the emotional meaning-patterns themselves",
      "Doesn't map relational dynamics (e.g., manipulation, power, abuse)",
      "No clear tools for communication or repair — it explains states but doesn't guide action",
      "Can feel technical for non-specialists"
    ],
    tegBlueAdds: [
      "Integrates nervous system states with emotional logic and meaning",
      "Explains how these states translate into patterns of connection, defense, manipulation, and oppression",
      "Provides visual, relational tools that make survival patterns understandable for everyday people",
      "Bridges somatic awareness with relational repair"
    ]
  },
  {
    id: 5,
    name: "Zones of Regulation",
    author: "Leah Kuypers",
    consists: "A color-coded tool widely used in schools. Groups emotional states into 4 zones: Blue Zone (low energy, sadness, tiredness), Green Zone (calm, ready to learn), Yellow Zone (heightened, anxious, silly, excited), Red Zone (anger, terror, out of control). Taught as a way for children to recognize and manage emotions.",
    strengths: [
      "Extremely simple and accessible",
      "Popular in education worldwide",
      "Gives children a shared language for feelings"
    ],
    misses: [
      "Oversimplifies — puts huge ranges of emotions into one 'zone'",
      "Often used as a behavior management tool rather than true emotional literacy",
      "Not trauma-informed — can shame children for being in 'red' instead of showing why",
      "No gradients or systemic understanding"
    ],
    tegBlueAdds: [
      "Provides gradients within each emotion, not just colors",
      "Trauma-aware: explains why emotions distort, not just how to label them",
      "Moves from behavior control to emotional understanding and repair",
      "Designed to be neurodivergent-friendly, avoiding shaming or simplification"
    ]
  },
  {
    id: 6,
    name: "Freud's Ego Model",
    author: "Sigmund Freud (1923)",
    consists: "Divides the psyche into three structures: id (instinctual drives), ego (rational mediator), and superego (moral authority). Emotions and behaviors are seen as the outcome of conflicts between these three forces.",
    strengths: [
      "Groundbreaking attempt to describe inner psychological conflict",
      "Recognized that part of the self works unconsciously",
      "Set the foundation for later theories of self and defense"
    ],
    misses: [
      "Frames conflict as mainly internal, without relational/systemic context",
      "Lacks trauma-informed understanding of survival states",
      "Rigid categories that don't account for gradients or social dynamics"
    ],
    tegBlueAdds: [
      "Ego is created by survival strategies, not inherent",
      "Expands beyond three parts into a spectrum of modes: Connect–Belonging, Protect–Defense, Manipulation, Tyranny",
      "Shows how survival states distort emotions, not just within the individual but in relationships and systems",
      "Provides visual maps and harm-measurement scales for repair"
    ]
  },
  {
    id: 7,
    name: "Winnicott's True/False Self",
    author: "Donald Winnicott",
    consists: "Explains how children develop a True Self when caregivers attune, but a False Self when they must comply with others' needs for survival.",
    strengths: [
      "Validates the pain of losing authenticity in early relationships",
      "Describes the survival value of a False Self",
      "Highly influential in developmental and trauma theory"
    ],
    misses: [
      "Doesn't show how masks escalate into manipulation or oppression",
      "Focuses mainly on childhood, less on lifelong systemic contexts",
      "Less visual/systemic for practical use"
    ],
    tegBlueAdds: [
      "Integrated into the Ego Persona Construct Framework",
      "Maps how masks form, shift, and distort across the gradient",
      "Offers tools to rebuild authenticity and restore belonging"
    ]
  },
  {
    id: 8,
    name: "Rogers' Organismic Valuing",
    author: "Carl Rogers",
    consists: "Posits that humans have an innate drive toward growth, healing, and authenticity if conditions of empathy, acceptance, and congruence are present.",
    strengths: [
      "Optimistic and empowering; highlights inner compass toward well-being",
      "Strong basis for person-centered therapy",
      "Emphasizes empathy and unconditional positive regard"
    ],
    misses: [
      "Doesn't map how trauma distorts or blocks the compass",
      "Assumes conditions of safety that may not exist",
      "Less explicit about systemic or relational harm"
    ],
    tegBlueAdds: [
      "Shows how survival modes override or distort the organismic compass",
      "Explains how repair reopens the path to belonging and growth",
      "Places authenticity inside a visual gradient, making distortions visible"
    ]
  },
  {
    id: 9,
    name: "Jung's Persona",
    author: "Carl Jung",
    consists: "The Persona is the 'mask' we present to society — a social role that allows us to adapt and be accepted, but can hide our deeper self.",
    strengths: [
      "Recognizes the adaptive function of masks",
      "Highlights the tension between public identity and inner reality",
      "Influenced modern understandings of role-play and identity"
    ],
    misses: [
      "Stays symbolic and less practical for trauma survivors",
      "Doesn't map gradients of protective vs manipulative masks",
      "Offers little guidance for repair or authenticity"
    ],
    tegBlueAdds: [
      "Places Persona inside the Role Mask Gradient",
      "Maps how masks shift from protection → manipulation → tyranny",
      "Provides concrete tools for reclaiming authenticity and belonging"
    ]
  },
  {
    id: 10,
    name: "Internal Family Systems (IFS)",
    author: "Richard Schwartz",
    consists: "A therapeutic model that views the mind as made of parts: protectors, managers, exiles, and the Self. Healing involves building trust and balance among parts.",
    strengths: [
      "Trauma-informed and compassionate",
      "Normalizes protective strategies instead of pathologizing them",
      "Gives people a language for inner dialogue"
    ],
    misses: [
      "Focuses inward, less on systemic oppression and malicious intent",
      "Parts are sometimes treated in isolation from social context"
    ],
    tegBlueAdds: [
      "Integrates parts into a relational/systemic gradient",
      "Explains how inner protectors mirror relational patterns (e.g., defense, control, tyranny)",
      "Adds harm-measurement scales to situate personal healing inside collective repair"
    ]
  },
  {
    id: 11,
    name: "Ego Development Theory",
    author: "Jane Loevinger & others",
    consists: "Maps stages of identity development, from pre-conventional to post-autonomous, showing how self-concept and meaning-making evolve.",
    strengths: [
      "Provides a structured roadmap of self-growth",
      "Useful for developmental psychology and leadership studies",
      "Recognizes higher levels of self-awareness and integration"
    ],
    misses: [
      "Largely cognitive; underplays trauma and emotional survival",
      "Assumes linear progression, not accounting for regression or trauma freeze",
      "Limited attention to relational abuse and systemic oppression"
    ],
    tegBlueAdds: [
      "Shows how trauma can stall or distort development",
      "Integrates identity growth with survival/belonging gradients",
      "Frames development as dynamic and relational, not only cognitive"
    ]
  },
  {
    id: 12,
    name: "Goffman's Dramaturgical Self",
    author: "Erving Goffman",
    consists: "Proposes that social life is like a stage, where people play roles depending on audience, context, and setting.",
    strengths: [
      "Brilliant metaphor of performance",
      "Shows adaptability of the self in different contexts",
      "Groundwork for Role Theory and social psychology"
    ],
    misses: [
      "Doesn't distinguish authentic roles from survival-driven ones",
      "Overlooks how trauma and power distort role-play",
      "Provides no path for repair or authenticity"
    ],
    tegBlueAdds: [
      "Expands into the Role Mask Gradient",
      "Distinguishes masks rooted in belonging vs defense vs manipulation",
      "Shows pathways for reclaiming authenticity and healing from role entrapment"
    ]
  },
  {
    id: 13,
    name: "Defense Mechanisms",
    author: "Sigmund Freud & Anna Freud",
    consists: "Explains unconscious strategies like denial, repression, projection, rationalization that the ego uses to avoid pain or conflict.",
    strengths: [
      "Early recognition of protective psychological strategies",
      "Still widely referenced in clinical psychology",
      "Shows how the mind adapts under stress"
    ],
    misses: [
      "Often pathologizes defenses without showing survival purpose",
      "Focused mainly on intrapsychic rather than relational dynamics",
      "Doesn't differentiate protective from harmful uses"
    ],
    tegBlueAdds: [
      "Reframes defenses as adaptive survival responses",
      "Places defenses on a gradient: protection → manipulation → tyranny",
      "Connects defenses to systemic harm and relational repair"
    ]
  },
  {
    id: 14,
    name: "Cognitive Dissonance Theory",
    author: "Leon Festinger",
    consists: "Explains the discomfort when beliefs, emotions, or actions conflict. People resolve dissonance by changing beliefs, justifying actions, or denying contradictions.",
    strengths: [
      "Shows how humans strive for consistency",
      "Applies across decision-making, morality, and identity",
      "Influential in psychology and behavioral economics"
    ],
    misses: [
      "Focuses on cognition, not somatic/emotional experience",
      "Underexplains how trauma shapes dissonance resolution",
      "Doesn't address manipulation or denial in abusive contexts"
    ],
    tegBlueAdds: [
      "Shows dissonance as felt somatically and emotionally",
      "Explains how unresolved dissonance pushes people into denial, defense, or manipulation",
      "Provides repair tools to face contradictions without harm"
    ]
  },
  {
    id: 15,
    name: "Disorganized Attachment & Complex PTSD",
    author: "Mary Main, Judith Herman, Bessel van der Kolk",
    consists: "Attachment theory expanded: Disorganized Attachment explains paradoxical push–pull dynamics of fear and desire for closeness. Complex PTSD describes long-term effects of chronic trauma, including emotional dysregulation and identity disturbance.",
    strengths: [
      "Trauma-informed and relationally focused",
      "Explains paradoxes survivors live with (closeness = danger)",
      "Connects childhood experiences to adult patterns"
    ],
    misses: [
      "Often focused narrowly on childhood or clinical trauma",
      "Doesn't fully map how patterns scale into systems",
      "Limited tools for visualizing harm and repair"
    ],
    tegBlueAdds: [
      "Integrates attachment and CPTSD into the Emotional Gradient Framework",
      "Shows how disorganized patterns map onto defense/manipulation cycles",
      "Offers gradients and tools for relational repair and nervous system healing"
    ]
  }
];

export default function ScientificFoundationsPage() {
  const [theories, setTheories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [groupBy, setGroupBy] = useState("domain"); // "domain" or "alphabetical"

  useEffect(() => {
    // Load theories from API route
    fetch("/api/theories")
      .then((res) => res.json())
      .then((data) => {
        setTheories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Group theories by domain
  const groupedByDomain = theories.reduce((acc, theory) => {
    const domain = theory.domain || "Other";
    if (!acc[domain]) acc[domain] = [];
    acc[domain].push(theory);
    return acc;
  }, {});

  // Sort domains alphabetically
  const sortedDomains = Object.keys(groupedByDomain).sort();

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
          padding: "32px 24px 60px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12, flexWrap: "wrap" }}>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: TEXT.primary,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Scientific Foundations
            </h1>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.indigo,
                padding: "4px 10px",
                background: hexToRgba(SPECTRUM.indigo, 0.1),
                borderRadius: 4,
              }}
            >
              15 global models + {theories.length} theories
            </span>
          </div>

          <p
            style={{
              fontSize: 16,
              color: TEXT.secondary,
              lineHeight: 1.7,
              marginBottom: 16,
              fontStyle: "italic",
            }}
          >
            TEG-Blue builds on and connects existing models, frameworks, and theories.
          </p>

          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            Each major model — Plutchik's Wheel, NVC, CBT, Polyvagal Theory, Zones of Regulation, IFS,
            Freud, Jung, Winnicott, Rogers, and more — has given us valuable ways to understand emotions.
            But each one also leaves spaces.
          </p>

          <div
            style={{
              padding: 20,
              background: hexToRgba(SPECTRUM.indigo, 0.05),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.15)}`,
              marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: TEXT.primary }}>TEG-Blue acts as connective tissue</strong> —
              bridging across psychology, education, and trauma-informed practice to give us one integrative,
              neurodivergent-friendly system for understanding emotions, harm, and repair.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "12px 0 0 0" }}>
              It <strong>connects what happens</strong> <em>inside each model</em> with what happens <em>between them</em>,
              and adds the missing layers that trauma and abuse survivors know are real — like the role of
              distorted emotions under survival, and the reality of malicious intent.
            </p>
          </div>

          <p style={{ fontSize: 13, color: TEXT.muted }}>
            See how these connect into frameworks:{" "}
            <Link href="/frameworks-map" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              12 Frameworks →
            </Link>
          </p>
        </header>

        {/* ─── GLOBAL MODELS SECTION ─────────────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: TEXT.primary,
                margin: 0,
              }}
            >
              How TEG-Blue Extends Global Models
            </h2>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.indigo,
                padding: "3px 8px",
                background: hexToRgba(SPECTRUM.indigo, 0.1),
                borderRadius: 4,
              }}
            >
              15 models
            </span>
          </div>

          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            For each established model, we show: what it consists of, its strengths, what it misses,
            and what TEG-Blue adds. Click any model to expand.
          </p>

          {/* Global Model Cards */}
          {globalModels.map((model) => (
            <GlobalModelCard key={model.id} model={model} />
          ))}

          {/* Comparison Table */}
          <div style={{ marginTop: 32 }}>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 12,
              }}
            >
              Quick Comparison Table
            </h3>
            <p style={{ fontSize: 13, color: TEXT.muted, marginBottom: 16 }}>
              Summary view showing the first key point for each category. Expand individual cards above for full details.
            </p>
            <ComparisonTable models={globalModels} />
          </div>
        </section>

        {/* ─── DIVIDER ─────────────────────────────────────────────────────── */}
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
            FULL THEORY DATABASE
          </span>
        </div>

        {/* ─── THEORY DATABASE SECTION ─────────────────────────────────────── */}
        <section>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: TEXT.primary,
                margin: 0,
              }}
            >
              139+ Established Theories
            </h2>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.azure,
                padding: "3px 8px",
                background: hexToRgba(SPECTRUM.azure, 0.1),
                borderRadius: 4,
              }}
            >
              {theories.length} indexed
            </span>
          </div>

          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            The complete database of research traditions TEG-Blue builds upon, grouped by domain.
            Each theory is credited with its core concept, how TEG-Blue integrates it, and key academic sources.
          </p>

          <div
            style={{
              padding: 16,
              background: hexToRgba(SPECTRUM.azure, 0.05),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
              marginBottom: 24,
            }}
          >
            <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: TEXT.primary }}>What's original:</strong> The originality is not in the individual theories —
              it is in the <em>connections between them</em>. These research traditions developed independently,
              within separate disciplines. TEG-Blue proposes specific cross-disciplinary connections that
              generate testable predictions.
            </p>
          </div>
        </section>

        {/* Loading state */}
        {loading && (
          <div style={{ textAlign: "center", padding: 40 }}>
            <p style={{ fontSize: 14, color: TEXT.muted }}>Loading theories...</p>
          </div>
        )}

        {/* Theories by Domain */}
        {!loading && sortedDomains.map((domain) => (
          <section key={domain} style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: TEXT.primary,
                  margin: 0,
                  textTransform: "capitalize",
                }}
              >
                {domain}
              </h2>
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
                {groupedByDomain[domain].length} {groupedByDomain[domain].length === 1 ? "theory" : "theories"}
              </span>
            </div>

            {groupedByDomain[domain].map((theory) => (
              <ExpandableTheoryCard key={theory.slug} theory={theory} />
            ))}
          </section>
        ))}

        {/* Empty state */}
        {!loading && theories.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: 60,
              background: BG.card,
              borderRadius: 12,
              border: `1px solid ${BORDER.default}`,
            }}
          >
            <p style={{ fontSize: 16, color: TEXT.secondary, marginBottom: 8 }}>
              No theories loaded yet.
            </p>
            <p style={{ fontSize: 13, color: TEXT.muted }}>
              Theory content is stored in /content/theories/
            </p>
          </div>
        )}

        {/* Attribution section */}
        <section
          style={{
            marginTop: 48,
            padding: 24,
            background: BG.card,
            borderRadius: 12,
            border: `1px solid ${BORDER.default}`,
          }}
        >
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Attribution & Methodology
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
            Every source theory is credited. The architecture was developed by Anna Paretas-Artacho
            through independent research. AI research tools (including the deep thinking models of Claude, Perplexity, and Microsoft Copilot) were
            used to systematically identify which established theories align with each framework's
            propositions.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Status:</strong> This theoretical mapping is a working hypothesis — a starting
            point for deeper scholarly validation. We explicitly invite corrections and critique.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/methodology"
              style={{
                padding: "8px 16px",
                background: "transparent",
                color: TEXT.secondary,
                border: `1px solid ${BORDER.default}`,
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              Methodology →
            </Link>
            <Link
              href="/collaborate"
              style={{
                padding: "8px 16px",
                background: SPECTRUM.blue,
                color: "#fff",
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              Collaborate →
            </Link>
          </div>
        </section>

        {/* Footer note */}
        <footer style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── EXPANDABLE THEORY CARD ─────────────────────────────────────

function ExpandableTheoryCard({ theory }) {
  const [isOpen, setIsOpen] = useState(false);
  const domainColor = getDomainColor(theory.domain);

  // Find content sections
  const coreConceptSection = theory.content?.find((s) => s.id === "core-concept" || s.title?.toLowerCase().includes("core"));
  const integrationSection = theory.content?.find((s) => s.id === "teg-blue-integration" || s.title?.toLowerCase().includes("teg-blue"));
  const sourcesSection = theory.content?.find((s) => s.id === "key-sources" || s.title?.toLowerCase().includes("source"));

  return (
    <div
      style={{
        marginBottom: 12,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${isOpen ? hexToRgba(domainColor, 0.3) : BORDER.default}`,
        borderLeft: `3px solid ${domainColor}`,
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      {/* Clickable Header */}
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
        {/* Top row: Title, Author, Status */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
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

        {/* Summary */}
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {theory.summary}
        </p>

        {/* Tags */}
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

        {/* Expand indicator */}
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

      {/* Expandable Content */}
      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px",
            borderTop: `1px solid ${BORDER.default}`,
          }}
        >
          {/* Core Concept */}
          {coreConceptSection && (
            <div style={{ marginTop: 16, marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
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

          {/* How TEG-Blue Integrates This */}
          {integrationSection && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
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

          {/* Key Sources */}
          {sourcesSection && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
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

          {/* Connections */}
          {theory.connections && theory.connections.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 8,
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

          {/* Link to framework that uses this theory */}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${BORDER.default}` }}>
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

// ─── GLOBAL MODEL CARD ─────────────────────────────────────────

function GlobalModelCard({ model }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        marginBottom: 12,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${isOpen ? hexToRgba(SPECTRUM.indigo, 0.3) : BORDER.default}`,
        borderLeft: `3px solid ${SPECTRUM.indigo}`,
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      {/* Clickable Header */}
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
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary }}>
            {model.name}
          </span>
          <span style={{ fontSize: 13, color: TEXT.muted }}>
            — {model.author}
          </span>
        </div>

        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {model.consists.length > 180 ? model.consists.substring(0, 180) + "..." : model.consists}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
          <span style={{ fontSize: 12, color: TEXT.muted }}>
            {isOpen ? "Hide analysis" : "Show strengths, gaps & TEG-Blue additions"}
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

      {/* Expandable Content */}
      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px",
            borderTop: `1px solid ${BORDER.default}`,
          }}
        >
          {/* What it consists of */}
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: TEXT.muted,
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontFamily: FONT.mono,
              }}
            >
              What it consists of
            </h4>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              {model.consists}
            </p>
          </div>

          {/* Three columns: Strengths, Misses, TEG-Blue Adds */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
              marginTop: 16,
            }}
          >
            {/* Strengths */}
            <div
              style={{
                padding: 16,
                background: hexToRgba(SPECTRUM.azure, 0.05),
                borderRadius: 8,
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
              }}
            >
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.azure,
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                Strengths
              </h4>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                {model.strengths.map((s, i) => (
                  <li key={i} style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 6 }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* What it misses */}
            <div
              style={{
                padding: 16,
                background: hexToRgba("#f97316", 0.05),
                borderRadius: 8,
                border: `1px solid ${hexToRgba("#f97316", 0.15)}`,
              }}
            >
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#f97316",
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                What it misses
              </h4>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                {model.misses.map((m, i) => (
                  <li key={i} style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 6 }}>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* What TEG-Blue adds */}
            <div
              style={{
                padding: 16,
                background: hexToRgba(SPECTRUM.indigo, 0.05),
                borderRadius: 8,
                border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.15)}`,
              }}
            >
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.indigo,
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                What TEG-Blue adds
              </h4>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                {model.tegBlueAdds.map((t, i) => (
                  <li key={i} style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 6 }}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── COMPARISON TABLE ─────────────────────────────────────────

function ComparisonTable({ models }) {
  return (
    <div style={{ overflowX: "auto", marginTop: 24 }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 13,
          background: BG.card,
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ background: hexToRgba(SPECTRUM.indigo, 0.08) }}>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: TEXT.primary, borderBottom: `1px solid ${BORDER.default}` }}>
              Model
            </th>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: SPECTRUM.azure, borderBottom: `1px solid ${BORDER.default}` }}>
              Strengths
            </th>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: "#f97316", borderBottom: `1px solid ${BORDER.default}` }}>
              What it misses
            </th>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: SPECTRUM.indigo, borderBottom: `1px solid ${BORDER.default}` }}>
              What TEG-Blue adds
            </th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, idx) => (
            <tr
              key={model.id}
              style={{
                background: idx % 2 === 0 ? "transparent" : hexToRgba(SPECTRUM.slate, 0.03),
              }}
            >
              <td style={{ padding: "12px 16px", borderBottom: `1px solid ${BORDER.default}`, verticalAlign: "top" }}>
                <strong style={{ color: TEXT.primary }}>{model.name}</strong>
                <br />
                <span style={{ fontSize: 11, color: TEXT.muted }}>{model.author}</span>
              </td>
              <td style={{ padding: "12px 16px", borderBottom: `1px solid ${BORDER.default}`, color: TEXT.secondary, verticalAlign: "top", lineHeight: 1.6 }}>
                {model.strengths[0]}
              </td>
              <td style={{ padding: "12px 16px", borderBottom: `1px solid ${BORDER.default}`, color: TEXT.secondary, verticalAlign: "top", lineHeight: 1.6 }}>
                {model.misses[0]}
              </td>
              <td style={{ padding: "12px 16px", borderBottom: `1px solid ${BORDER.default}`, color: TEXT.secondary, verticalAlign: "top", lineHeight: 1.6 }}>
                {model.tegBlueAdds[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
