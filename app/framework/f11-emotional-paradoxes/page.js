import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RESEARCHER, PATTERN_GRADIENT,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ResearcherHero,
  PropositionBox, ExpandableSection, PageLayout,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Framework Position", description: "When the compass begins to move, contradictions emerge that were previously invisible. F11 maps these contradictions." },
  { label: "The Regulation Thread", description: "F1-F7 generate contradictions but false coherence hides them. F8-F10 loosen false coherence." },
  { label: "Multi-Rationality", description: "Paradoxical behaviour appears irrational only when assessed against a single set of values." },
  { label: "Each Framework's Paradox", description: "Every mechanism in F1-F10 creates characteristic contradictions. A map, not a personal failing." },
  { label: "The Paradox Cascade", description: "How contradictions go underground. The smooth story should worry you more than the messy one." },
  { label: "Compass Position and Holding", description: "The compass must be flexible enough to hold contradiction. Measurable consequence of repair." },
  { label: "Individual Paradoxes", description: "I am in more pain AND I am more alive. Not contradictions to resolve — contradictions to hold." },
  { label: "Relational Paradoxes", description: "Both sides are real. The paradox is not in either person — it is in the interaction." },
  { label: "Systemic Paradoxes", description: "Freedom-seeking authoritarianism. Institutions that perpetuate what they were designed to solve." },
  { label: "Integration Means Holding", description: "True coherence is not the absence of contradiction — it is the capacity to hold contradiction without collapsing." },
  { label: "Bridge to F12", description: "A person can see their configuration, name their paradoxes — and still do the thing. F12 explains why." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "The Emotional Logic Behind Paradoxes — Why Contradictions Are Logical When the Full Picture Becomes Visible (F11) | TEG-Blue Research",
  description:
    "Why human contradictions are not failures of consistency but predictable outcomes of a multi-need system. How each framework generates characteristic paradoxes, why holding capacity matters more than resolution, and what becomes visible when false coherence loosens. Framework F11 of 12.",
  keywords: [
    "emotional paradoxes",
    "multi-rationality",
    "holding capacity",
    "competing needs",
    "paradox cascade",
    "false coherence",
    "true coherence",
    "state-dependent capacity",
    "relational paradox",
    "systemic paradox",
    "integration versus resolution",
    "emotional technology",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f11-emotional-paradoxes",
  },
  openGraph: {
    title: "The Emotional Logic Behind Paradoxes — F11 Framework | TEG-Blue",
    description:
      "Why human contradictions are predictable outcomes of competing needs, and why holding paradox — rather than resolving it — is the developmental achievement.",
    url: "https://teg-blue.org/framework/f11-emotional-paradoxes",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F11EmotionalParadoxesPage() {

  /* ── local helpers ─────────────────────────────────── */

  const sectionHeadingStyle = {
    fontSize: 20, fontWeight: 700, color: RESEARCHER.accent,
    borderBottom: `2px solid ${SPECTRUM.cobalt}`,
    paddingBottom: 10, marginBottom: 20, marginTop: 48,
  };
  const conceptHeadingStyle = {
    fontSize: 16, fontWeight: 600, color: TEXT.primary,
    marginTop: 28, marginBottom: 10,
  };
  const proseStyle = {
    fontSize: 14, color: TEXT.secondary, lineHeight: 1.8,
    maxWidth: 720, marginBottom: 16,
  };

  function KeyStatement({ children }) {
    return (
      <blockquote style={{
        borderLeft: `3px solid ${SPECTRUM.cobalt}`,
        paddingLeft: 16, margin: "20px 0", fontStyle: "italic",
        fontSize: 14, lineHeight: 1.7, color: TEXT.primary,
      }}>
        {children}
      </blockquote>
    );
  }

  function TableRow({ cells }) {
    return (
      <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
        {cells.map((c, i) => (
          <td key={i} style={{
            padding: "10px 14px", fontSize: 13, lineHeight: 1.6,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400, verticalAlign: "top",
          }}>
            {c}
          </td>
        ))}
      </tr>
    );
  }

  function ThreeColRow({ cells }) {
    return (
      <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
        {cells.map((c, i) => (
          <td key={i} style={{
            padding: "10px 14px", fontSize: 13, lineHeight: 1.6,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400, verticalAlign: "top",
          }}>
            {c}
          </td>
        ))}
      </tr>
    );
  }

  function FourColRow({ cells }) {
    return (
      <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
        {cells.map((c, i) => (
          <td key={i} style={{
            padding: "8px 10px", fontSize: 12, lineHeight: 1.5,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400, verticalAlign: "top",
          }}>
            {c}
          </td>
        ))}
      </tr>
    );
  }

  function NavRow({ label, href, linkText, external }) {
    const El = external ? "a" : Link;
    const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
        <td style={{ padding: "10px 14px", fontSize: 13, color: TEXT.secondary }}>{label}</td>
        <td style={{ padding: "10px 14px", fontSize: 13 }}>
          <El href={href} {...extra} style={{ color: SPECTRUM.cobalt, textDecoration: "none" }}>{linkText}</El>
        </td>
      </tr>
    );
  }

  const thStyle = {
    padding: "10px 14px", fontSize: 12, fontWeight: 600,
    color: TEXT.tertiary, textTransform: "uppercase",
    letterSpacing: "0.05em", textAlign: "left",
    borderBottom: `2px solid ${BORDER.default}`,
  };
  const narrowThStyle = {
    padding: "8px 10px", fontSize: 11, fontWeight: 600,
    color: TEXT.tertiary, textTransform: "uppercase",
    letterSpacing: "0.05em", textAlign: "left",
    borderBottom: `2px solid ${BORDER.default}`,
  };
  const navThStyle = { ...thStyle };
  const tableWrapStyle = {
    overflowX: "auto", marginBottom: 24,
    border: `1px solid ${BORDER.default}`, borderRadius: 8,
  };

  /* ── data ──────────────────────────────────────────── */

  const tocItems = [
    ["#framework-position", "Framework Position"],
    ["#multi-rationality", "Multi-Rationality"],
    ["#paradox-map", "Each Framework Generates Paradox"],
    ["#paradox-cascade", "The Paradox Cascade"],
    ["#paradox-and-compass", "Paradox Intensity and Compass Position"],
    ["#holding-capacity", "Holding Capacity"],
    ["#paradoxes-of-repair", "The Paradoxes of Repair"],
    ["#relational-paradoxes", "The Relational Paradoxes"],
    ["#systemic-paradoxes", "The Systemic Paradoxes"],
    ["#integration-means-holding", "Integration Means Holding, Not Resolving"],
    ["#bridge-to-f12", "Bridge to F12"],
    ["#research-foundations", "Research Foundations"],
    ["#where-to-go-next", "Where to Go Next"],
  ];

  const faqItems = [
    {
      q: "Why do people contradict themselves?",
      a: "Because multiple valid needs are operating simultaneously. A person who wants connection but pushes it away is not irrational \u2014 they are serving both the need for connection (the system's home base) and the need for protection (the system's emergency response). When any two needs conflict, behavior serves multiple masters. The result looks contradictory from outside but is perfectly logical from inside.",
    },
    {
      q: "Is holding paradox the same as accepting contradiction?",
      a: "Not exactly. Holding means both truths remain present without one being eliminated for comfort. It is not passive acceptance \u2014 it is a developmental capacity requiring self-emotional awareness online, emotional resilience to tolerate tension, and the relational awareness to hold complexity with others. Many paradoxes are structurally unresolvable, so the goal is not resolution but developing enough capacity that both truths can coexist.",
    },
    {
      q: "How does compass position affect the ability to hold paradox?",
      a: "In Connection, a person can hold contradiction \u2014 both truths coexist because the system has enough safety for complexity. In Protection, paradox feels threatening and the system wants to simplify. In Control, false coherence constructs a narrative that appears to hold both truths but actually eliminates one. In Domination, paradox is not experienced \u2014 one truth is imposed and the other is erased.",
    },
    {
      q: "Why do contradictions become invisible?",
      a: "Through the paradox cascade: an initial contradiction emerges from competing needs, false coherence constructs an explanation that hides it, the adaptive identity absorbs the explanation, rules and worth systems reinforce it, generational transmission passes it forward, and the contradiction becomes experienced as normal. A contradiction that has cascaded through all levels cannot be addressed at one level alone.",
    },
    {
      q: "What does F11 mean by 'true coherence'?",
      a: "True coherence is not a smoother story \u2014 it is a more honest one. It includes the contradictions, names them, holds them, and does not pretend they resolve. False coherence (F3) eliminates complexity for regulatory comfort. True coherence holds complexity without needing it resolved. It is the capacity to contain contradiction without collapsing.",
    },
  ];

  /* ── render ────────────────────────────────────────── */

  return (
    <>
      <SiteHeader />

      <PageLayout
        header={
          <ResearcherHero
            badge="FRAMEWORK F11"
            title="The Emotional Logic Behind Paradoxes"
            subtitle="Why Contradictions Are Logical When the Full Picture Becomes Visible"
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>

          {/* ── Table of Contents ── */}
          <nav style={{
            margin: "32px 0", padding: 20,
            background: hexToRgba(SPECTRUM.cobalt, 0.06),
            borderRadius: 8, border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
          }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              In this framework
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 32px" }}>
              {tocItems.map(([href, label]) => (
                <a key={href} href={href} style={{
                  fontSize: 13, color: SPECTRUM.cobalt,
                  textDecoration: "none", lineHeight: 1.6,
                }}>
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* ── Core Claims ── */}
          <PropositionBox
            title="Core Propositions — F11"
            items={[
              "Paradoxical behavior is multi-rational \u2014 it serves multiple valid needs simultaneously, not a failure of consistency",
              "Every framework (F1\u2013F10) generates characteristic contradictions that follow predictably from each mechanism's specific logic",
              "False coherence hides paradox through a six-level cascade \u2014 from initial contradiction through identity absorption to generational transmission",
              "The capacity to hold paradox depends on compass position \u2014 Connection enables holding, Protection simplifies, Control manages by elimination, Domination erases",
              "Integration means holding, not resolving \u2014 true coherence is the capacity to contain contradiction without collapsing into a single story",
            ]}
          />

          {/* ════════════════════════════════════════════════
              FRAMEWORK POSITION
             ════════════════════════════════════════════════ */}

          <section id="framework-position">
            <h2 style={sectionHeadingStyle}>Framework Position</h2>

            <p style={proseStyle}>
              F8–F10 describe repair: individual capacity development (F8), structural inclusion (F9), generational transmission (F10). Repair is real. It works. And it surfaces something that surviving never did.
            </p>

            <KeyStatement>
              When the compass begins to move — when self-emotional awareness starts coming online, when false coherence loosens, when the person begins to see clearly — contradictions emerge that were previously invisible.
            </KeyStatement>

            <p style={proseStyle}>
              Wanting connection and fearing it. Loving someone and needing distance from them. Understanding a parent's limitations and grieving what those limitations cost. Knowing something is harmful and doing it anyway. Seeking freedom and craving structure.
            </p>

            <p style={proseStyle}>
              F11 maps these contradictions. Not to resolve them — many are structurally unresolvable — but to show that they are <strong>logical.</strong> Every apparent paradox is the predictable outcome of a system pursuing multiple valid needs simultaneously.
            </p>

            <KeyStatement>
              If you see contradictions everywhere after doing this work, you are not confused. You are seeing clearly for the first time.
            </KeyStatement>

            <h3 style={conceptHeadingStyle}>The Regulation Thread — F11's Position</h3>

            <p style={proseStyle}>
              F1–F7: each framework generates characteristic contradictions — but false coherence hides them. The person in chronic Control does not experience the contradiction between caring and controlling. The person with self-emotional awareness offline does not feel the gap between what they narrate and what they feel. False coherence makes paradox invisible by constructing a single story.
            </p>

            <p style={proseStyle}>
              F8–F10: repair loosens false coherence. Self-emotional awareness comes online. The single story breaks. And the contradictions that were always there become felt.
            </p>

            <KeyStatement>
              F11 maps the contradictions that become visible when the system starts working as designed. Paradox is not a sign of failure. It is a sign that the person can now hold complexity that false coherence previously flattened.
            </KeyStatement>
          </section>

          {/* ════════════════════════════════════════════════
              PART 1 DIVIDER
             ════════════════════════════════════════════════ */}

          <div style={{
            margin: "48px 0 40px", padding: "14px 20px",
            background: hexToRgba(SPECTRUM.cobalt, 0.10),
            borderRadius: 8, border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
          }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: SPECTRUM.cobalt, margin: 0 }}>
              Part 1: The Logic of Paradox
            </p>
            <p style={{ fontSize: 13, color: TEXT.secondary, margin: "4px 0 0" }}>
              Why humans contradict themselves, why it makes sense, and how each framework generates its own characteristic contradictions.
            </p>
          </div>

          {/* ════════════════════════════════════════════════
              C1 — MULTI-RATIONALITY
             ════════════════════════════════════════════════ */}

          <section id="multi-rationality">
            <h2 style={sectionHeadingStyle}>Multi-Rationality</h2>

            <p style={proseStyle}>
              Paradoxical behavior appears irrational only when assessed against a single set of values or goals. When multiple needs are recognized as simultaneously valid, behavior becomes <strong>multi-rational</strong> — serving several objectives at once.
            </p>

            <p style={proseStyle}>
              A person who wants connection but pushes it away is not irrational. Two needs are real: the need for connection (F1 — the system's home base, designed for sustained living) and the need for protection (F1 — the system's emergency response to perceived threat). The behavior oscillates or compromises because both needs are driving the system. Neither is wrong. Neither is the "real" need. Both are the nervous system pursuing valid regulatory goals.
            </p>

            <h3 style={conceptHeadingStyle}>Five Competing Needs</h3>

            <p style={proseStyle}>
              F11 identifies five needs whose conflicts generate the characteristic paradoxes:
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Need</th>
                    <th style={narrowThStyle}>Regulatory Function</th>
                    <th style={narrowThStyle}>Framework Source</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["Connection", "Belonging, attachment, being seen, co-regulation", "F1 (social engagement), F2 (attachment), F8 (relational repair)"]} />
                  <ThreeColRow cells={["Protection", "Safety, boundaries, threat avoidance, survival", "F1 (defensive states), F2 (adaptive identity), F7 (escalation)"]} />
                  <ThreeColRow cells={["Authenticity", "Genuine expression, configuration honesty, emotional truth", "F2 (capacity development), F8 (repair), F9 (unmasking)"]} />
                  <ThreeColRow cells={["Belonging", "Group membership, social acceptance, not being excluded", "F4 (rules), F5 (worth hierarchies), F8\u2013F9 (masking)"]} />
                  <ThreeColRow cells={["Coherence", "Making sense, predictability, internal consistency", "F3 (false coherence), F6 (bias architecture)"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              When any two of these conflict, behavior serves <strong>multiple masters.</strong> The result looks contradictory from outside but is perfectly logical from inside — each side of the contradiction is pursuing a real need.
            </p>

            <KeyStatement>
              The assessment shift: from "Why are you being inconsistent?" to "What competing needs is this behavior trying to serve?"
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Cognitive dissonance theory (Festinger) describes the discomfort of holding inconsistent beliefs. Motivational interviewing (Miller & Rollnick) works with ambivalence as a real state rather than resistance. Internal Family Systems (Schwartz) models the psyche as containing multiple parts with different needs. Dialectical behavior therapy (Linehan) builds tolerance for opposing truths.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F11 reframes dissonance as regulatory, not logical. The discomfort is the nervous system managing competing needs, not an error in reasoning. Resolution through elimination is false coherence. The multi-rationality framework identifies which specific needs are generating which specific paradox — making the intervention point visible rather than demanding the person "stop being contradictory."
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C2 — EACH FRAMEWORK GENERATES PARADOX
             ════════════════════════════════════════════════ */}

          <section id="paradox-map">
            <h2 style={sectionHeadingStyle}>Each Framework Generates Paradox</h2>

            <p style={proseStyle}>
              Every mechanism in F1–F10 creates characteristic contradictions. These are not random — they follow from each framework's specific logic:
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Framework</th>
                    <th style={narrowThStyle}>Mechanism</th>
                    <th style={narrowThStyle}>Paradox Generated</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["F1 — The Inner Compass", "Nervous system and conscious mind can be in different states", "Intending one thing, feeling another. Wanting to be brave while the body freezes"]} />
                  <ThreeColRow cells={["F2 — Awareness Teaches Awareness", "The three capacities can be in different states", "Reading everyone perfectly while having no idea what you feel. Understanding emotions intellectually while being unable to experience them"]} />
                  <ThreeColRow cells={["F3 — False Coherence", "Cognition maintains coherence regardless of evidence", "Believing what serves regulation while contradicting what the person can see. Knowing and not-knowing simultaneously"]} />
                  <ThreeColRow cells={["F4 — Rules Regulate", "Internalized rules conflict with authentic needs", "Following rules that harm. Breaking rules that help. Defending rules that hurt the person defending them"]} />
                  <ThreeColRow cells={["F5 — Worth Hierarchies", "Worth-seeking drives override stated values", "Pursuing status that contradicts professed values. Performing for belonging while claiming to value authenticity"]} />
                  <ThreeColRow cells={["F6 — Bias Regulates", "Perception serves protection, not accuracy", "Seeing what confirms existing beliefs while missing what challenges them. Certainty increasing as accuracy decreases"]} />
                  <ThreeColRow cells={["F7 — Domination Regulates", "Protection escalates beyond original intent", "Controlling what was meant to be cared for. Destroying what was meant to be protected"]} />
                  <ThreeColRow cells={["F8 — Repairing Awareness", "Repair surfaces previously managed contradictions", "Getting worse before getting better. Knowing but not yet being. Seeing the pattern clearly while still living it"]} />
                  <ThreeColRow cells={["F9 — Neurodivergence", "Masking versus authentic configuration", "Performing normal while being different. Succeeding by standards that cost the person everything"]} />
                  <ThreeColRow cells={["F10 — Generational Bridges", "Inherited patterns versus conscious values", "Repeating what was vowed never to repeat. Loving the people who caused the patterns. Understanding and grieving simultaneously"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              When a person can locate their contradiction on this map, it stops being a personal failing and becomes an identifiable pattern with a known mechanism. The shame reduces. The curiosity increases. And the intervention point becomes visible — not "stop being contradictory" but "which competing needs are generating this specific paradox?"
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Each paradox in the map corresponds to a documented phenomenon in existing literature. Body–mind splits (F1) are described in somatic experiencing (Levine) and sensorimotor psychotherapy (Ogden). Knowing-and-not-knowing (F3) appears in denial research and trauma dissociation literature. Role conflicts (F4–F5) are documented across sociology and organizational psychology. Escalation beyond intent (F7) appears in aggression research and power studies.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F11 organizes these into a single map showing that every paradox is generated by the same mechanism — multi-rationality at the scale specific to each framework. This makes the contradictions predictable rather than random, locatable rather than diffuse, and addressable at the level where they are operating rather than at whatever level the person or clinician happens to notice first.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C3 — THE PARADOX CASCADE
             ════════════════════════════════════════════════ */}

          <section id="paradox-cascade">
            <h2 style={sectionHeadingStyle}>The Paradox Cascade</h2>

            <h3 style={conceptHeadingStyle}>How Contradictions Become Invisible</h3>

            <p style={proseStyle}>
              Paradox does not stay visible. False coherence (F3) works to hide it. The cascade operates through six identifiable levels:
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Level</th>
                    <th style={narrowThStyle}>What Happens</th>
                    <th style={narrowThStyle}>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["1. Initial contradiction", "Competing needs generate the paradox", "Connection vs. protection \u2014 wanting closeness while fearing vulnerability"]} />
                  <ThreeColRow cells={["2. False coherence", "Cognition constructs an explanation that hides the contradiction", "\"I just prefer being alone\" (hides the desire for connection that protection blocks)"]} />
                  <ThreeColRow cells={["3. Identity absorption", "The person's self-concept incorporates the false coherence", "\"I'm an introvert\" becomes identity rather than description of a regulatory pattern"]} />
                  <ThreeColRow cells={["4. Social reinforcement", "Rules and worth systems (F4\u2013F5) reward the performance and punish the contradiction", "\"They're so independent\" is praised; vulnerability is seen as weakness"]} />
                  <ThreeColRow cells={["5. Generational transmission", "The pattern becomes \"how things are\" in the family (F10)", "\"We don't do emotions in this family\" passes as family culture"]} />
                  <ThreeColRow cells={["6. Invisible normal", "The contradiction is no longer experienced as contradiction", "Experienced as normal, natural, just \"the way I am\""]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>Why Single-Level Intervention Fails</h3>

            <p style={proseStyle}>
              A contradiction that has cascaded through all six levels cannot be addressed at one level. Cognitive insight (level 2) does not reach the identity level (level 3). Individual therapy (levels 1–3) does not address the social reinforcement (level 4). Personal healing (levels 1–5) does not interrupt the generational pattern (level 6).
            </p>

            <KeyStatement>
              Effective intervention meets the paradox at the level where it is operating. F11 makes these levels visible so the intervention can be matched.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Multi-level intervention models appear across clinical and systems literatures. Bronfenbrenner's ecological systems theory maps individual behavior within nested environmental contexts. Narrative therapy (White & Epston) addresses how stories become identity. Family systems theory (Bowen) tracks multigenerational pattern transmission. F11 integrates these into a single cascade model showing how the same contradiction moves through scales.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                The six-level cascade provides a diagnostic tool: where in the cascade is this particular paradox operating? The answer determines the intervention. Level 1 contradictions respond to awareness. Level 3 contradictions require identity work. Level 5 contradictions require family systems intervention. Matching the intervention to the level is the precondition for effectiveness.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C4 — PARADOX INTENSITY AND COMPASS POSITION
             ════════════════════════════════════════════════ */}

          <section id="paradox-and-compass">
            <h2 style={sectionHeadingStyle}>Paradox Intensity and Compass Position</h2>

            <h3 style={conceptHeadingStyle}>State Determines Holding Capacity</h3>

            <p style={proseStyle}>
              The capacity to hold paradox — to contain two contradictory truths without collapsing into one or the other — depends on compass position. State determines capacity (F1).
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Compass Position</th>
                    <th style={thStyle}>Relationship to Paradox</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Connection", "Can hold contradiction. Both truths coexist. The person can say \"I love them AND what they did hurt me\" without one canceling the other. Paradox is tolerable because the system has enough safety to hold complexity"]} />
                  <TableRow cells={["Protection", "Paradox feels threatening. The system wants to resolve \u2014 pick a side, simplify, decide. Binary thinking is not stupidity \u2014 it is the nervous system reducing cognitive load under threat"]} />
                  <TableRow cells={["Control", "Paradox is managed through narrative. False coherence constructs a story that appears to hold both truths but actually eliminates one. The narrative feels like integration but is actually resolution by elimination"]} />
                  <TableRow cells={["Domination", "Paradox is not experienced. One truth is imposed. The other is erased, denied, or punished in anyone who names it"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>Paradox as Diagnostic</h3>

            <p style={proseStyle}>
              How a person relates to their own contradictions reveals their compass position:
            </p>

            <p style={proseStyle}>
              A person who can name both sides without distress is likely accessing Connection. A person who oscillates between the two sides with anxiety is likely in Protection. A person who has a smooth, coherent narrative that eliminates one side is likely in chronic Control — and the narrative should be examined, not admired. A person who denies the contradiction exists and attacks anyone who names it is likely in Domination.
            </p>

            <KeyStatement>
              The smooth story should worry you more than the messy one. The messy one may be someone learning to hold complexity. The smooth one may be false coherence performing integration.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Polyvagal theory (Porges) describes how autonomic state constrains available cognitive and emotional capacities. Window of tolerance research (Siegel) maps how arousal states determine processing capacity. Attachment research (Main, Hesse) uses narrative coherence in the Adult Attachment Interview as a diagnostic tool — and notes that excessive coherence (dismissing classification) can indicate avoidance rather than integration.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F11 adds the paradox dimension to compass assessment. How someone holds contradiction is itself diagnostic — revealing not what they say about their state but what their state actually permits. This is clinically significant: the person who presents a perfectly coherent narrative may need more attention, not less, because the coherence itself may be the regulatory strategy.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              PART 2 DIVIDER
             ════════════════════════════════════════════════ */}

          <div style={{
            margin: "48px 0 40px", padding: "14px 20px",
            background: hexToRgba(SPECTRUM.cobalt, 0.10),
            borderRadius: 8, border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
          }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: SPECTRUM.cobalt, margin: 0 }}>
              Part 2: Holding, Not Resolving
            </p>
            <p style={{ fontSize: 13, color: TEXT.secondary, margin: "4px 0 0" }}>
              What it means to hold paradox, the specific capacities involved, and the paradoxes that emerge at every scale.
            </p>
          </div>

          {/* ════════════════════════════════════════════════
              C5 — HOLDING CAPACITY
             ════════════════════════════════════════════════ */}

          <section id="holding-capacity">
            <h2 style={sectionHeadingStyle}>Holding Capacity</h2>

            <p style={proseStyle}>
              F11's central clinical contribution: the goal is not resolving paradox. Many paradoxes are structurally unresolvable — the needs genuinely conflict, and no solution satisfies both completely. The goal is developing the <strong>capacity to hold</strong> paradox without collapse.
            </p>

            <p style={proseStyle}>
              Holding means: both truths remain present. Neither is eliminated for comfort. The person can sit with the tension without the nervous system forcing a resolution.
            </p>

            <h3 style={conceptHeadingStyle}>Five Components of Holding Capacity</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Component</th>
                    <th style={narrowThStyle}>What It Is</th>
                    <th style={narrowThStyle}>What It Requires</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["Both/and thinking", "The cognitive capacity to hold two contradictory truths as simultaneously valid", "Self-emotional awareness online \u2014 so the person can receive both truths without false coherence overriding one"]} />
                  <ThreeColRow cells={["Somatic tolerance", "The body's capacity to hold the tension of unresolved contradiction without flooding or numbing", "Emotional resonance developed \u2014 so the felt discomfort of paradox can be experienced without collapse"]} />
                  <ThreeColRow cells={["Temporal flexibility", "The capacity to hold that something can be true now and different later \u2014 or true from one perspective and false from another", "Reading emotions accurate \u2014 so the person can read context rather than demanding a single fixed truth"]} />
                  <ThreeColRow cells={["Part recognition", "The capacity to recognize that different needs are generating different pulls", "All three capacities working together \u2014 reading, feeling, and self-knowing"]} />
                  <ThreeColRow cells={["Grief capacity", "The capacity to mourn what cannot be reconciled \u2014 some paradoxes are permanent losses", "Emotional resonance and self-emotional awareness \u2014 the person must feel the grief and know it as their own"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>The Connection to F8</h3>

            <p style={proseStyle}>
              Holding capacity is not a separate skill. It is what the three awareness capacities produce when they are online. Self-emotional awareness provides the self-knowledge to see both truths. Emotional resonance provides the emotional resilience to tolerate the tension. Reading emotions provides the relational awareness to hold complexity in relationship with others.
            </p>

            <KeyStatement>
              F8 repair builds the infrastructure. F11 describes what that infrastructure enables.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Jungian analytical psychology (Jung) describes holding opposites as a developmental achievement — the "transcendent function" that emerges when conscious and unconscious positions are held in tension. Dialectical behavior therapy (Linehan) teaches distress tolerance and "both/and" thinking. Attachment research describes earned security as the capacity to hold complex narratives about one's own history without resolving them into simple stories.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F11 grounds holding capacity in the three awareness capacities rather than treating it as a separate cognitive skill or a spiritual achievement. This makes it developable through the same mechanisms F8 describes — not through willpower or insight alone, but through creating conditions where the capacities have room to come online. Holding paradox is not only a philosophical ideal. It is the measurable consequence of the three awareness capacities being online.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C6 — THE PARADOXES OF REPAIR
             ════════════════════════════════════════════════ */}

          <section id="paradoxes-of-repair">
            <h2 style={sectionHeadingStyle}>The Paradoxes of Repair</h2>

            <p style={proseStyle}>
              The repair arc (F8–F10) generates its own characteristic paradoxes. These are not signs of failure — they are signs that the work is reaching depth.
            </p>

            <h3 style={conceptHeadingStyle}>Getting Worse Before Getting Better</h3>

            <p style={proseStyle}>
              When false coherence loosens and self-emotional awareness comes online, previously unfelt pain becomes felt. The person is not getting worse — they are feeling what was always there. But the experience is one of deterioration. This paradox requires the holding capacity to say: "I am in more pain AND I am more alive."
            </p>

            <h3 style={conceptHeadingStyle}>Knowing and Not Yet Being</h3>

            <p style={proseStyle}>
              The person can see their patterns clearly — can describe their configuration, name their false coherence, identify their chronic mode — and still do the thing. Insight has arrived but the nervous system has not updated yet. This is F12's domain (the cognitive system narrates a process already underway), but F11 names the felt experience: the frustration of seeing clearly and not yet being able to act differently.
            </p>

            <h3 style={conceptHeadingStyle}>Grieving What You Never Had</h3>

            <p style={proseStyle}>
              You cannot mourn something you never knew existed. When awareness capacities come online and the person begins to see what they missed — the attunement, the safety, the mirroring, the regulation — grief arrives for something that was never there. This is paradoxical: mourning an absence. But the grief is real, and it requires holding.
            </p>

            <h3 style={conceptHeadingStyle}>Healing Changing Relationships</h3>

            <p style={proseStyle}>
              As the person's configuration shifts, relationships respond. Some deepen — they can now hold more of who the person actually is. Some strain — they were built on the old configuration and cannot accommodate the new one. The paradox: becoming healthier may cost relationships.
            </p>

            <KeyStatement>
              I am becoming more myself AND some people cannot be with who I actually am.
            </KeyStatement>

            <h3 style={conceptHeadingStyle}>Understanding and Grieving Simultaneously</h3>

            <p style={proseStyle}>
              F10's territory, but F11 names the felt experience: the simultaneous truth of "I understand why you became who you became" and "I grieve what it cost me." Neither truth cancels the other. Holding both is the work.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                The paradoxes of repair appear across clinical literatures. "Getting worse before better" is documented in exposure therapy, grief work, and trauma processing. The knowing-being gap appears in stages-of-change literature (Prochaska & DiClemente) and motivational interviewing. Ambiguous loss research (Boss) describes grieving what was never present. Relationship strain during personal growth is documented in family systems and couple therapy research.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F11 normalizes these paradoxes as predictable features of the repair arc rather than complications to be eliminated. When clinicians and individuals expect these contradictions — and understand that they indicate depth rather than failure — the work can continue through the discomfort rather than retreating to the comfort of false coherence.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C7 — THE RELATIONAL PARADOXES
             ════════════════════════════════════════════════ */}

          <section id="relational-paradoxes">
            <h2 style={sectionHeadingStyle}>The Relational Paradoxes</h2>

            <p style={proseStyle}>
              The same logic that generates individual paradox generates relational paradox — and at relational scale, both people's competing needs interact.
            </p>

            <h3 style={conceptHeadingStyle}>Connection-Protection Oscillation</h3>

            <p style={proseStyle}>
              One person moves toward connection; the other's nervous system reads vulnerability and activates protection; the first person reads the withdrawal and activates their own protection. Both want connection. Both are protecting. The paradox is not in either person — it is in the interaction. Both are right. Both are stuck.
            </p>

            <h3 style={conceptHeadingStyle}>Authenticity Demand, Honesty Punishment</h3>

            <p style={proseStyle}>
              "I want you to be honest with me" — followed by punishment when the honesty arrives. This is multi-rationality at relational scale: the need for authenticity is real AND the need for coherence (F3) makes truth threatening. The person genuinely wants honesty and genuinely cannot tolerate it. Both are true.
            </p>

            <h3 style={conceptHeadingStyle}>Love as Control</h3>

            <p style={proseStyle}>
              In chronic Control, the distinction between caring and managing collapses. Every act of love becomes an act of management. The person is not lying when they say they care — they are caring through the only mode available. The paradox is genuine care expressed through a mode that the recipient experiences as control.
            </p>

            <h3 style={conceptHeadingStyle}>Helping That Maintains the Problem</h3>

            <p style={proseStyle}>
              At relational and systemic scale — the helper whose identity depends on the person remaining in need. The parent whose anxiety requires the child to remain dependent. The system designed to solve a problem that would defund the system if solved. The helping is real. The maintenance of the problem is also real. Multi-rationality, not hypocrisy.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Double bind theory (Bateson) describes competing demands that create paradox in communication. Pursuer-withdrawer dynamics are documented extensively in couple therapy research (Gottman, Johnson). Codependency literature describes helping patterns that maintain the problem. Karpman's drama triangle maps the rescuer-persecutor-victim cycle.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F11 reframes relational paradoxes as multi-rationality operating across two nervous systems rather than as one person's pathology or communication failure. This shifts the intervention from "who is wrong" to "what competing needs are generating this interaction pattern" — making the dynamics visible without requiring blame.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C8 — THE SYSTEMIC PARADOXES
             ════════════════════════════════════════════════ */}

          <section id="systemic-paradoxes">
            <h2 style={sectionHeadingStyle}>The Systemic Paradoxes</h2>

            <p style={proseStyle}>
              The same mechanism operates at institutional and cultural scale. F4–F7 mechanisms generate paradoxes that are invisible from within the system.
            </p>

            <h3 style={conceptHeadingStyle}>Freedom-Seeking Authoritarianism</h3>

            <p style={proseStyle}>
              People claiming to want freedom supporting authoritarian leaders. This is not a failure of reasoning or deception. The nervous system equates structure with safety (F4). When uncertainty increases, the system reaches for predictability. The person genuinely wants freedom AND genuinely craves the regulation that authority provides.
            </p>

            <h3 style={conceptHeadingStyle}>Revolution Recreating Hierarchy</h3>

            <p style={proseStyle}>
              Liberation movements becoming what they opposed. Old patterns are the only available templates (F10). The revolutionaries carry the same configurations that the system they overthrew produced. The revolution succeeds. The patterns reproduce. Not because the ideals were false — because the nervous systems had not changed.
            </p>

            <h3 style={conceptHeadingStyle}>Institutions That Perpetuate What They Were Designed to Solve</h3>

            <p style={proseStyle}>
              Healthcare systems that maintain illness. Justice systems that produce injustice. Education systems that prevent learning. Not conspiracy — <strong>multi-rationality at institutional scale.</strong> The stated purpose is real. The unstated regulatory functions (employment, control, coherence, resource allocation) are also real. When these conflict, the regulatory functions usually win — because they are operating in the emotional-somatic system, below the level of stated purpose.
            </p>

            <h3 style={conceptHeadingStyle}>Diversity Initiatives That Enforce Conformity</h3>

            <p style={proseStyle}>
              The paradox of demanding that everyone value difference — in the same way. F8's insight applied here: genuine inclusion requires different configurations contributing differently. Inclusion programs that define one correct way to "be inclusive" have reproduced F4 (one correct way) in the language of diversity.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Systems theory (Bateson, von Bertalanffy) describes how systems develop self-maintaining patterns that resist change. Institutional isomorphism (DiMaggio & Powell) explains how organizations converge toward similar structures regardless of stated purpose. Michel Foucault's work on power shows how disciplinary systems reproduce the conditions they claim to address. Zimbardo's situational psychology demonstrates how institutional design shapes individual behavior.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F11 applies the multi-rationality framework at institutional and cultural scale, showing that systemic paradoxes follow the same mechanism as individual ones — competing needs generating contradictory behavior — but operating through F4–F7 mechanisms rather than individual nervous system states alone. This makes systemic contradictions analyzable rather than simply lamentable.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C9 — INTEGRATION MEANS HOLDING, NOT RESOLVING
             ════════════════════════════════════════════════ */}

          <section id="integration-means-holding">
            <h2 style={sectionHeadingStyle}>Integration Means Holding, Not Resolving</h2>

            <p style={proseStyle}>
              F11's deepest contribution is the reframe of what "integration" means across the entire system.
            </p>

            <p style={proseStyle}>
              Integration does not mean resolving every contradiction, arriving at a single coherent narrative that accounts for everything, finding the "right" answer to competing needs, or eliminating the tension between authenticity and belonging, connection and protection, understanding and accountability.
            </p>

            <p style={proseStyle}>
              Integration means: developing enough holding capacity that both truths can remain present. The compass being flexible enough to move between the needs without getting stuck in one. The three awareness capacities being online enough to receive the full complexity. Grief capacity sufficient to mourn what cannot be reconciled.
            </p>

            <h3 style={conceptHeadingStyle}>The Paradox of Coherence</h3>

            <p style={proseStyle}>
              F3 describes false coherence — a single narrative that eliminates complexity for regulatory comfort. F11 describes <strong>true coherence</strong> — the capacity to hold complexity without needing it resolved.
            </p>

            <p style={proseStyle}>
              True coherence is not a smoother story. It is a more honest one. It includes the contradictions. It names them. It holds them. And it does not pretend they resolve.
            </p>

            <KeyStatement>
              True coherence is not the absence of contradiction — it is the capacity to hold contradiction without collapsing.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Hegel's dialectics proposed thesis-antithesis-synthesis as the resolution of contradictions. Jungian individuation describes the integration of opposites as a developmental achievement. Dialectical behavior therapy (Linehan) teaches that two opposing truths can both be valid. Attachment research finds that the most secure narratives are not the simplest — they are the ones that hold complexity.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F11 reframes the Hegelian synthesis: true integration is not resolution into a third position that eliminates the contradiction. It is the capacity to hold both positions simultaneously. This is grounded in the three awareness capacities — holding paradox is what they produce when they are online — making integration a developmental capacity rather than a philosophical achievement.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C10 — BRIDGE TO F12
             ════════════════════════════════════════════════ */}

          <section id="bridge-to-f12">
            <h2 style={sectionHeadingStyle}>Bridge to F12 — Our Two Information Systems</h2>

            <p style={proseStyle}>
              F11 shows that paradox is the logical outcome of a multi-need system operating under real constraints. When the person can see the full picture — when self-emotional awareness is online, when false coherence has loosened, when the compass can move — contradictions become visible and holdable rather than invisible and rigid.
            </p>

            <p style={proseStyle}>
              But a person can read F1–F11. Can see their configuration, name their paradoxes, understand the mechanism, locate themselves on the gradient. And still do the thing. Still enter chronic Control under stress. Still mask. Still transmit.
            </p>

            <p style={proseStyle}>
              F12 explains why: because there are two information systems, and the one that produces understanding is not the one that organizes behavior. The cognitive system narrates. The emotional-somatic system drives. They operate at different speeds. Insight arrives after the state has already shifted.
            </p>

            <KeyStatement>
              F11 maps the complexity of being human. F12 explains the architecture that makes that complexity inevitable — and shows what actually produces change.
            </KeyStatement>
          </section>

          {/* ════════════════════════════════════════════════
              KEY FORMULATIONS
             ════════════════════════════════════════════════ */}

          <section id="key-formulations">
            <h2 style={sectionHeadingStyle}>Key Formulations — F11</h2>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Formulation</th>
                    <th style={thStyle}>Concept</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["\"Paradox is what truth looks like when you can finally see the whole picture.\"", "Framework Position"]} />
                  <TableRow cells={["\"What competing needs is this behavior trying to serve?\"", "Multi-Rationality (C1)"]} />
                  <TableRow cells={["\"The smooth story should worry you more than the messy one.\"", "Paradox and Compass Position (C4)"]} />
                  <TableRow cells={["\"I am in more pain AND I am more alive.\"", "Paradoxes of Repair (C6)"]} />
                  <TableRow cells={["\"I am becoming more myself AND some people cannot be with who I actually am.\"", "Paradoxes of Repair (C6)"]} />
                  <TableRow cells={["\"I understand why you became who you became. And I see what it cost me. Both are true. Neither erases the other.\"", "Paradoxes of Repair (C6)"]} />
                  <TableRow cells={["\"True coherence is not the absence of contradiction \u2014 it is the capacity to hold contradiction without collapsing.\"", "Integration (C9)"]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              RESEARCH FOUNDATIONS
             ════════════════════════════════════════════════ */}

          <section id="research-foundations">
            <h2 style={sectionHeadingStyle}>Research Foundations</h2>

            <p style={{ ...proseStyle, marginBottom: 8 }}>
              F11 integrates traditions that independently describe paradox, contradiction, and the capacity to hold opposing truths:
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Tradition</th>
                    <th style={narrowThStyle}>Key Researchers</th>
                    <th style={narrowThStyle}>F11 Integration</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["Cognitive Dissonance", "Festinger", "C1 \u2014 reframed: discomfort with inconsistency is regulatory, not logical. Resolution through elimination is false coherence"]} />
                  <ThreeColRow cells={["Analytical Psychology", "Jung", "C5 \u2014 holding capacity as developmental achievement. Union of opposites grounded in the three awareness capacities"]} />
                  <ThreeColRow cells={["Systems Theory", "Bateson", "C7\u2013C8 \u2014 double bind and systemic paradox through the same multi-rationality mechanism"]} />
                  <ThreeColRow cells={["Internal Family Systems", "Schwartz", "C1 \u2014 multi-rationality: each \"part\" is pursuing a valid regulatory goal"]} />
                  <ThreeColRow cells={["Dialectics", "Hegel", "C9 \u2014 reframed: synthesis is not resolution but holding capacity. True integration holds both, not eliminates one"]} />
                  <ThreeColRow cells={["Affective Neuroscience", "Damasio, Porges", "C4 \u2014 state-dependent processing and somatic markers encoding conflicting information. Compass position determines holding capacity"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              <strong>F11's contribution:</strong> showing that all these traditions describe the same mechanism — multi-rationality generating predictable paradox at every scale — and that the capacity to hold paradox is not wisdom literature but the measurable consequence of the three awareness capacities being online.
            </p>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="f11-emotional-paradoxes" type="framework" />

          {/* ════════════════════════════════════════════════
              WHERE TO GO NEXT
             ════════════════════════════════════════════════ */}

          <section id="where-to-go-next">
            <h2 style={sectionHeadingStyle}>Where to Go Next</h2>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={navThStyle}>If you want to…</th>
                    <th style={navThStyle}>Go here</th>
                  </tr>
                </thead>
                <tbody>
                  <NavRow label="Read the two information systems framework (F12)" href="/framework/f12-two-information-systems" linkText="Our Two Information Systems \u2192" />
                  <NavRow label="Read the generational bridges framework (F10)" href="/framework/f10-generational-bridges" linkText="Rebuilding Generational Bridges \u2192" />
                  <NavRow label="Read the healing framework (F8)" href="/framework/f8-repairing-awareness" linkText="Repairing Awareness \u2192" />
                  <NavRow label="Read the false coherence framework (F3)" href="/framework/f3-false-coherence" linkText="Adult Cognition and False Coherence \u2192" />
                  <NavRow label="Read the foundational framework (F1)" href="/framework/f1-emotional-gradient" linkText="Emotions as Biological Information \u2192" />
                  <NavRow label="Explore all 12 frameworks" href="/frameworks-map" linkText="12 Frameworks \u2192" />
                  <NavRow label="Review the source theories" href="/scientific-foundations" linkText="Scientific Foundations \u2192" />
                  <NavRow label="Look up key terms" href="/glossary" linkText="Glossary \u2192" />
                  <NavRow label="See published research" href="/publications" linkText="Publications \u2192" />
                  <NavRow label="Experience the tools" href="https://teg-blue.com/emotional-tools" linkText="Emotional Tools (teg-blue.com) \u2192" external />
                </tbody>
              </table>
            </div>
          </section>
        </article>

      </PageLayout>

      <SiteFooter />

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            headline: "The Emotional Logic Behind Paradoxes \u2014 Why Contradictions Are Logical When the Full Picture Becomes Visible",
            description: metadata.description,
            author: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              url: "https://teg-blue.com/about-the-author",
            },
            publisher: {
              "@type": "Organization",
              name: "TEG-Blue Research",
              url: "https://teg-blue.org",
            },
            url: "https://teg-blue.org/framework/f11-emotional-paradoxes",
            datePublished: "2026-03-04",
            dateModified: "2026-03-04",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue 12-Framework Architecture",
              url: "https://teg-blue.org/frameworks-map",
            },
            keywords: metadata.keywords,
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "https://teg-blue.org" },
              { name: "12 Frameworks", url: "https://teg-blue.org/frameworks-map" },
              { name: "F11 \u2014 The Emotional Logic Behind Paradoxes", url: "https://teg-blue.org/framework/f11-emotional-paradoxes" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFAQJsonLd(
              faqItems.map((f) => ({ question: f.q, answer: f.a }))
            )
          ),
        }}
      />
    </>
  );
}
