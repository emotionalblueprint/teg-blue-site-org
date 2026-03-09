import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RESEARCHER, PATTERN_GRADIENT,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, FrameworkHero,
  PropositionBox, ExpandableSection, PageLayout,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Framework Position", href: "#framework-position", description: "F8 describes individual repair. F9 describes structural repair. F10 asks what happens across generations." },
  { label: "The Regulation Thread", href: "#framework-position", description: "What transmits differently when the original is present. The thread runs in both directions." },
  { label: "Awareness Across Generations", href: "#awareness-across-generations", description: "The child absorbs the configuration, not the aspiration. Develop the capacity, and what transmits changes." },
  { label: "Five Transmission Pathways", href: "#five-transmission-pathways", description: "Implicit learning, co-regulation modelling, environmental design, epigenetic modification, narrative inheritance." },
  { label: "What Isn't Processed Gets Passed On", href: "#what-isnt-processed", description: "The child doesn't inherit the event — the child inherits the regulatory consequence of the event." },
  { label: "Coherence, Not Content", href: "#what-isnt-processed", description: "It is not what happened that determines what is transmitted — it is whether the adult has made coherent sense of it." },
  { label: "Understanding Without Excusing", href: "#relationships-across-repair", description: "I understand why you became who you became — and I see what it cost me. Both are true." },
  { label: "Relationships Across Repair", href: "#relationships-across-repair", description: "Does this relationship create conditions for Connection, or does it re-expose to the original configuration?" },
  { label: "True Elderhood", href: "#true-elderhood", description: "Not automatic — what the elder becomes when the work F8 describes has been done." },
  { label: "Bridge to F11", href: "#bridge-to-f11", description: "When the adult begins to see clearly, contradictions emerge that survival previously kept hidden." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Rebuilding Generational Bridges — How Patterns Transmit and How Repair Changes What the Next Generation Inherits (F10) | TEG-Blue Research",
  description:
    "How emotional patterns transmit across generations through five simultaneous pathways, why single interventions often fail, and how adult repair genuinely changes the conditions the next generation develops within. Framework F10 of 12.",
  keywords: [
    "generational transmission",
    "intergenerational patterns",
    "five transmission pathways",
    "earned security",
    "awareness teaches awareness",
    "generational repair",
    "enough not perfect",
    "true elderhood",
    "co-regulation",
    "epigenetic modification",
    "narrative inheritance",
    "emotional technology",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f10-generational-bridges",
  },
  openGraph: {
    title: "Rebuilding Generational Bridges — F10 Framework | TEG-Blue",
    description:
      "How emotional patterns transmit across generations through five simultaneous pathways, and how adult repair changes what the next generation inherits.",
    url: "https://teg-blue.org/framework/f10-generational-bridges",
    siteName: "TEG-Blue Research",
    type: "article",
  },
  other: {
    'citation_title': 'Rebuilding Generational Bridges: How Patterns Transmit and How Repair Changes What the Next Generation Inherits',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/03',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F10GenerationalBridgesPage() {

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

  const faqItems = [
    {
      q: "How do emotional patterns transmit across generations?",
      a: "Through five simultaneous pathways: implicit learning (children absorb what adults model), co-regulation modeling (the adult's regulatory capacity becomes the child's template), environmental design (adults create the conditions requiring specific adaptations), epigenetic modification (stress exposure modifies gene expression in ways that affect offspring), and narrative inheritance (family stories and silences shape meaning-making). These pathways reinforce each other, which is why single interventions often fail.",
    },
    {
      q: "Does understanding the transmission mechanism mean excusing harm?",
      a: "No. F10 holds both truths simultaneously: understanding why a parent became who they became, and seeing what it cost. Understanding does not minimize impact. Accountability does not require demonization. Neither truth cancels the other. The integrative position enables grief for what was lost, release from waiting for acknowledgment that may never come, and agency in deciding how to relate going forward.",
    },
    {
      q: "What does 'enough, not perfect' mean for generational repair?",
      a: "The demand for perfection recreates the regulation thread. What matters is not being a perfect parent but being one whose compass moves — who can enter Protection when needed, return to Connection, and repair after rupture. The child needs to see the return, not the absence of difficulty. Enough capacity development that the child's nervous system reads a different signal than what the adult received.",
    },
    {
      q: "Can generational transmission patterns be interrupted?",
      a: "Yes. Earned security research (Main & Hesse) demonstrates that when adults process their own attachment history and develop awareness capacities, their children show more secure attachment — regardless of what that history contained. The processing itself changes what transmits, not because the adult performs better but because the configuration has genuinely changed.",
    },
    {
      q: "What is true elderhood?",
      a: "A developmental achievement — the result of having done the awareness work F8 describes. True elders use experience for guidance rather than age for control. They earn respect through embodied capacity, support evolution rather than resisting change, and can hold the family's truth rather than demanding the family hold their version. It requires SEA online, ER available, RE accurate, and a compass that moves.",
    },
  ];

  /* ── render ────────────────────────────────────────── */

  return (
    <>
      <SiteHeader />

      <PageLayout
        header={
          <FrameworkHero
              badge="FRAMEWORK F10"
              title="Rebuilding Generational Bridges"
              subtitle="How Patterns Transmit and How Repair Changes What the Next Generation Inherits"
              arc="Repair and Complexity"
              arcLabel="Arc 3: Repair and Complexity · F8–F12"
              threadLabel="Reverses the Thread"
              threadLine="Builds the original — what gets processed here changes what transmits next"
              informsModels={[
                { label: "M2", href: "/model/m2-three-awareness-capacities" },
              ]}
              adjacent={{
                prev: { label: "F9 Neurodivergence", href: "/framework/f9-neurodivergence-variation" },
                next: { label: "F11 Emotional Paradoxes", href: "/framework/f11-emotional-paradoxes" },
              }}
            />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>

          {/* ── Core Claims ── */}
          <PropositionBox
            title="Core Propositions — F10"
            items={[
              "Generational transmission operates through five simultaneous pathways (implicit learning, co-regulation modeling, environmental design, epigenetic modification, narrative inheritance) — single interventions fail because they address one while four continue",
              "What the adult embodies, the child absorbs — the child's nervous system reads the adult's nervous system, not the adult's intentions, knowledge, or aspirations",
              "What isn't processed gets passed on — but what is processed changes what transmits, as earned security research demonstrates",
              "Repair does not require perfection — it requires enough capacity development that the next generation starts from a different place",
              "True elderhood is a developmental achievement, not an automatic function of age — it requires awareness capacities online and a compass that moves",
            ]}
          />

          {/* ════════════════════════════════════════════════
              FRAMEWORK POSITION
             ════════════════════════════════════════════════ */}

          <section id="framework-position">
            <h2 style={sectionHeadingStyle}>Framework Position</h2>

            <p style={proseStyle}>
              F8 describes individual repair — how to develop the awareness capacities that did not have conditions to develop. F9 describes the structural dimension — how environments designed for one configuration prevent repair and what genuine inclusion requires.
            </p>

            <KeyStatement>
              F10 asks: what happens across generations when adults do this work?
            </KeyStatement>

            <p style={proseStyle}>
              The answer lives in F2's foundational insight: <strong>awareness teaches awareness.</strong> The adults' capacity configuration creates the environment. The environment shapes the child's capacity configuration. What the adult embodies — not says, not intends, not believes — is what the child absorbs.
            </p>

            <p style={proseStyle}>
              F10 is not about interrupting damage. It is about building conditions. When adults develop their own awareness capacities (F8), inhabit environments that support authentic configuration (F9), and learn the return path their own development did not provide — the next generation grows in a different world. Not a perfect world. A world where three awareness capacities have conditions to develop, where regulation is learned through being regulated with, and where the compass has room to move.
            </p>

            <h3 style={conceptHeadingStyle}>The Regulation Thread — F10's Position</h3>

            <p style={proseStyle}>
              F1–F7: substitutes for regulation, escalating across scales. F8–F9: building the original, individually and structurally. F10: <strong>transmitting the original instead of the substitutes.</strong>
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>What Transmitted Before (F2–F7)</th>
                    <th style={thStyle}>What Transmits After Repair (F10)</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Stuck compass \u2192 child calibrates to threat", "Moving compass \u2192 child calibrates to flexibility"]} />
                  <TableRow cells={["SEA offline \u2192 child's SEA has no model", "SEA online \u2192 child absorbs self-awareness as normal"]} />
                  <TableRow cells={["False coherence \u2192 child learns to narrate instead of feel", "True coherence \u2192 child learns that feeling and knowing can align"]} />
                  <TableRow cells={["Rules substitute for regulation \u2192 child internalizes rigid rules", "Regulation present \u2192 child learns to regulate, not just comply"]} />
                  <TableRow cells={["Worth-seeking substitutes for safety \u2192 child learns to perform for belonging", "Safety present \u2192 child belongs without performing"]} />
                </tbody>
              </table>
            </div>

            <KeyStatement>
              What the adult embodies, the child absorbs. What the adult has repaired, the child doesn't need to.
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
              Part 1: How Patterns Transmit
            </p>
            <p style={{ fontSize: 13, color: TEXT.secondary, margin: "4px 0 0" }}>
              The five pathways through which generational transmission operates, and why single interventions often fail.
            </p>
          </div>

          {/* ════════════════════════════════════════════════
              C1 — AWARENESS ACROSS GENERATIONS
             ════════════════════════════════════════════════ */}

          <section id="awareness-across-generations">
            <h2 style={sectionHeadingStyle}>Awareness Teaches Awareness Across Generations</h2>

            <p style={proseStyle}>
              F2's core insight at generational scale: the adults' capacity configuration <em>is</em> the child's environment. Children calibrate to what adults embody, not what adults say. This is the mechanism of generational transmission. Not genetics alone. Not instruction. Not intention. <strong>Embodiment.</strong> The child's nervous system reads the adult's nervous system — continuously, implicitly, below conscious awareness — and calibrates accordingly.
            </p>

            <p style={proseStyle}>
              A parent whose SEA is offline cannot provide conditions for a child's SEA to develop — regardless of how much they want to, how many parenting books they have read, or how sincere their intention is. The child absorbs the configuration, not the aspiration.
            </p>

            <p style={proseStyle}>
              A parent whose compass moves freely — who can enter Protection when needed, return to Connection, access Control under pressure without getting stuck — provides a child whose nervous system learns: the full gradient is available, and return is possible.
            </p>

            <h3 style={conceptHeadingStyle}>This Is Not Blame</h3>

            <p style={proseStyle}>
              The parent whose SEA is offline did not choose that configuration. Their own development did not provide conditions for SEA to develop (F2). Their own cognition built the best replacement it could (F3). Their own environment may have required chronic masking (F8–F9). They are transmitting what they have — which is what their parents transmitted to them.
            </p>

            <KeyStatement>
              Understanding the mechanism is not assigning blame. It is identifying where change is possible.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Family Systems Theory (Bowen, Satir, Minuchin) describes multigenerational transmission of relational patterns. Attachment Theory (Bowlby, Main, Hesse) demonstrates that attachment patterns transmit across generations but can be interrupted through earned security. Interpersonal Neurobiology (Porges, Siegel, Schore) shows that co-regulation patterns transmit through nervous system synchronization.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                F10 connects F2's three-capacity model to generational transmission, showing that what transmits is not behavior or belief but capacity configuration. The specific prediction: the adult's awareness configuration (which capacities are online, which are offline) predicts the conditions the child develops within — and therefore which capacities the child has conditions to develop. This makes the transmission mechanism specific and the intervention target clear.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C2 — FIVE TRANSMISSION PATHWAYS
             ════════════════════════════════════════════════ */}

          <section id="five-transmission-pathways">
            <h2 style={sectionHeadingStyle}>The Five Transmission Pathways</h2>

            <p style={proseStyle}>
              Transmission operates through five simultaneous pathways. They reinforce each other. When one is interrupted, others can still maintain transmission. This is why single interventions (a parenting course, a therapy session, a good intention) often fail — they address one pathway while four others continue operating.
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Pathway</th>
                    <th style={narrowThStyle}>What Transmits</th>
                    <th style={narrowThStyle}>How</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={[
                    "Implicit Learning",
                    "The child observes and absorbs the adult's emotional patterns — what emotions are expressed, which are suppressed, how distress is handled",
                    "Not through instruction. Through continuous, pre-verbal observation. The child watches what the adult does, not what the adult says to do",
                  ]} />
                  <ThreeColRow cells={[
                    "Co-Regulation Modeling",
                    "The adult's nervous system functions as the child's external regulator. The adult's regulatory capacity becomes the child's template",
                    "What the adult can hold, the child learns is holdable. What the adult cannot tolerate becomes intolerable. The adult's window of tolerance shapes the child's",
                  ]} />
                  <ThreeColRow cells={[
                    "Environmental Design",
                    "The adult creates the physical, emotional, and social environment in which development occurs",
                    "The home's emotional climate, the family's relational patterns, the permitted range of expression — all designed (usually unconsciously) by the adult's own configuration",
                  ]} />
                  <ThreeColRow cells={[
                    "Epigenetic Modification",
                    "Stress exposure can modify gene expression in ways that affect offspring's stress response, emotional reactivity, and regulatory capacity",
                    "Not permanent genetic change. Reversible modifications responsive to environment and experience. Chronic stress in one generation can raise the threat baseline in the next",
                  ]} />
                  <ThreeColRow cells={[
                    "Narrative Inheritance",
                    "Family stories, silences, and meaning-making frameworks shape how children understand themselves and their place in the world",
                    "Children inherit not just events but frameworks for understanding events. What is spoken about, what is silent, what is celebrated, what is shameful — all transmitted as the story of 'who we are'",
                  ]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>All Five Transmit F1–F7 Content</h3>

            <p style={proseStyle}>
              The transmission is not random. What crosses generations is the complete system: compass calibration (F1), awareness capacity configuration (F2), false coherence patterns (F3), rules (F4), worth hierarchies (F5), bias architecture (F6), and escalation patterns (F7).
            </p>

            <KeyStatement>
              The family is a complete nervous system. It transmits a complete regulatory system.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Epigenetics research (Yehuda, Meaney, Champagne) demonstrates that stress modifies gene expression across generations in reversible ways. Narrative Therapy (White, Epston, McAdams) shows how family stories shape identity and meaning-making. Interpersonal Neurobiology (Porges, Siegel, Schore) demonstrates co-regulation pattern transmission through nervous system synchronization. Each tradition describes one pathway; F10 integrates all five.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                F10 organizes five independently documented transmission pathways into a unified model showing they all transmit the same underlying content: the F1–F7 regulatory system. This explains why single-pathway interventions (parenting classes address narrative; therapy addresses the adult's processing) often fail: four other pathways continue transmitting. Effective intervention must address multiple pathways — which is why F10 requires F8 (individual repair) plus F9 (structural repair) plus pathway awareness.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C3 — WHAT ISN'T PROCESSED GETS PASSED ON
             ════════════════════════════════════════════════ */}

          <section id="what-isnt-processed">
            <h2 style={sectionHeadingStyle}>What Isn't Processed Gets Passed On</h2>

            <p style={proseStyle}>
              Unprocessed experience becomes the environment the next generation develops within. The specific claim: unprocessed grief becomes an emotional climate of suppression, unprocessed rage becomes volatility or rigid control, unprocessed shame becomes performance and conditional belonging, unprocessed trauma becomes hypervigilance or dissociation. The child does not inherit the event. The child inherits the <strong>regulatory consequence</strong> of the event — the configuration the adult built to survive it.
            </p>

            <h3 style={conceptHeadingStyle}>Processing Changes What Transmits</h3>

            <p style={proseStyle}>
              This is the hope in the mechanism. Earned security research (Main & Hesse) demonstrates it operationally: when adults process their own attachment history — make coherent sense of what happened and how it shaped them — their children show more secure attachment patterns. Regardless of what the history contained.
            </p>

            <p style={proseStyle}>
              The processing itself changes transmission. Not because the adult performs a better version. Because processing develops the awareness capacities (F8), which changes the configuration, which changes what the child's nervous system absorbs.
            </p>

            <KeyStatement>
              The shift is from content to coherence. Not "what happened to you" but "have you made sense of what happened?" Not "was your childhood good?" but "can you narrate your experience with emotional truth intact?"
            </KeyStatement>

            <h3 style={conceptHeadingStyle}>Why Knowing Better Does Not Stop Transmission</h3>

            <p style={proseStyle}>
              Intellectual understanding without nervous system processing does not interrupt transmission. A parent can read every parenting book, understand attachment theory, and articulate everything in F1–F10 — and still transmit their unprocessed patterns. Because the child's nervous system reads the adult's nervous system, not the adult's library.
            </p>

            <KeyStatement>
              Love does not override what the nervous system embodies.
            </KeyStatement>

            <p style={proseStyle}>
              The parent's conscious intention operates in the cognitive system. The child's calibration reads the emotional-somatic system. These are different systems (F12). Understanding this architectural mismatch is not discouraging — it redirects effort from trying harder to developing differently.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Attachment Theory (Main, Hesse, Lyons-Ruth) provides the empirical basis through earned security research. Intergenerational trauma research (van der Kolk, Herman, Danieli) documents how unprocessed trauma shapes the next generation's emotional environment. F10 integrates these with F2's capacity model: what processing actually develops is the awareness capacities that change the configuration that changes what transmits.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                F10 connects earned security to the three-capacity model: what processing develops is SEA, ER, and RE — the capacities that change the adult's configuration, which changes the environment, which changes what the child absorbs. This makes "processing" specific rather than vague. And it explains why cognitive understanding fails: the child's calibration reads the somatic-emotional system (where the capacities operate), not the cognitive system (where understanding lives).
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C4 — TRANSMISSION BY COMPASS POSITION
             ════════════════════════════════════════════════ */}

          <section id="transmission-by-compass-position">
            <h2 style={sectionHeadingStyle}>Transmission by Compass Position</h2>

            <p style={proseStyle}>
              The adult's compass position predicts what the child's nervous system absorbs. This is not diagnostic labeling — it is pattern recognition for where repair effort has the most leverage.
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Adult's Chronic Mode</th>
                    <th style={narrowThStyle}>What Primarily Transmits</th>
                    <th style={narrowThStyle}>Child's Common Adaptation</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={[
                    "Connection (moving compass)",
                    "Capacity for connection; flexible relating; repair after rupture; full emotional range",
                    "Secure base for exploration. Awareness capacities have conditions to develop. Child learns: the full gradient is available and return is possible",
                  ]} />
                  <ThreeColRow cells={[
                    "Chronic Protection",
                    "Anxiety patterns; threat sensitivity; hypervigilance; 'the world is dangerous'",
                    "Child absorbs: threat is the baseline. May develop hypervigilance, anxious attachment, parentification (monitoring the parent's state to manage own safety)",
                  ]} />
                  <ThreeColRow cells={[
                    "Chronic Control",
                    "Conditional relating; performance demands; emotional management as love; 'safety through being correct'",
                    "Child absorbs: belonging requires performance. May develop achievement orientation, perfectionism, sharp RE with collapsed ER and offline SEA",
                  ]} />
                  <ThreeColRow cells={[
                    "Chronic Domination",
                    "Power dynamics; submission patterns; reality distortion; 'safety through compliance'",
                    "Child absorbs: survival requires reading and complying. May develop trauma responses, dissociation, extreme adaptive strategies. The most costly transmission",
                  ]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>Capacity for Repair by Compass Position</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Adult's Position</th>
                    <th style={narrowThStyle}>Repair Capacity</th>
                    <th style={narrowThStyle}>What Makes It Possible or Difficult</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={[
                    "Connection",
                    "High",
                    "Can see patterns. Has resources for processing. Can tolerate what SEA reveals. Can hold grief",
                  ]} />
                  <ThreeColRow cells={[
                    "Chronic Protection",
                    "Moderate — possible with support",
                    "Needs safety first (F8). Can engage when supported. Expect oscillation. The compass wants to move — it needs conditions",
                  ]} />
                  <ThreeColRow cells={[
                    "Chronic Control",
                    "Limited without external catalyst",
                    "Control patterns resist self-examination because self-examination threatens the control strategy. May require external motivation — relationship crisis, child's suffering, health collapse",
                  ]} />
                  <ThreeColRow cells={[
                    "Chronic Domination",
                    "Very limited",
                    "Repair unlikely without sustained external intervention. The system has organized around power as regulation. Vulnerability feels like annihilation. Protection of others is primary (F7)",
                  ]} />
                </tbody>
              </table>
            </div>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                F10 connects the four-mode gradient to generational transmission prediction: the adult's chronic compass position predicts both what the child absorbs and how accessible repair is for the adult. This makes generational intervention plannable: identify the adult's compass position, assess repair capacity, and match intervention to what that position can accept. The most psychologically literate people can be the most stuck (F3) — understanding does not equal capacity.
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
              Part 2: Building Conditions
            </p>
            <p style={{ fontSize: 13, color: TEXT.secondary, margin: "4px 0 0" }}>
              How adults who develop awareness create different conditions for the next generation — and what "enough" looks like.
            </p>
          </div>

          {/* ════════════════════════════════════════════════
              C5 — MECHANISM OF CHANGE
             ════════════════════════════════════════════════ */}

          <section id="mechanism-of-change">
            <h2 style={sectionHeadingStyle}>The Mechanism of Generational Change</h2>

            <p style={proseStyle}>
              When an adult develops their awareness capacities (F8), the change is not in what they say or intend. It is in what they embody. And what they embody is what the child's nervous system reads.
            </p>

            <p style={{ ...proseStyle, paddingLeft: 16 }}>
              <strong>Step 1: Individual repair.</strong> The adult develops SEA, reconnects ER, calibrates RE. The compass begins to move. False coherence loosens. The return path works.<br /><br />
              <strong>Step 2: The adult's configuration changes.</strong> Not perfectly. Not completely. But enough that the nervous system the child reads is different from the one the adult's parents provided.<br /><br />
              <strong>Step 3: The child develops in a different environment.</strong> Not because the parent decided to parent differently (though they may). Because the parent <em>is</em> different. The emotional climate of the home changes because the nervous system generating that climate has changed.<br /><br />
              <strong>Step 4: The child's capacities have conditions to develop.</strong> SEA can come online because it is being modeled. ER can develop because it is being met. RE can calibrate accurately because the adult's signals are more coherent.<br /><br />
              <strong>Step 5: The child transmits differently to the next generation.</strong> Not because they were told to. Because their configuration is different.
            </p>

            <h3 style={conceptHeadingStyle}>The Compound Effect</h3>

            <p style={proseStyle}>
              One generation of repair does not produce perfection. It produces a <strong>shift in baseline.</strong> The child develops with slightly more capacity, slightly more flexibility, slightly more accurate calibration. That child, as an adult, transmits from that shifted baseline. The next generation shifts further. Generational change is compound interest. Small, sustained shifts accumulate across time.
            </p>

            <KeyStatement>
              You don't have to heal everything. You have to heal enough that the next generation starts from a different place.
            </KeyStatement>
          </section>

          {/* ════════════════════════════════════════════════
              C6 — ENOUGH, NOT PERFECT
             ════════════════════════════════════════════════ */}

          <section id="enough-not-perfect">
            <h2 style={sectionHeadingStyle}>Enough, Not Perfect</h2>

            <p style={proseStyle}>
              The most important word in F10 is <strong>enough.</strong> Not perfect awareness. Not complete repair. Not an ideal childhood. Enough loosening of false coherence that the child absorbs different possibilities. Enough SEA that the child sees self-awareness modeled. Enough return that the child learns: the compass comes back.
            </p>

            <h3 style={conceptHeadingStyle}>Why "Enough" Matters</h3>

            <p style={proseStyle}>
              The demand for perfection recreates the regulation thread. If the parent believes they must be perfectly healed before they can provide good conditions, they have replaced one false coherence ("I'm fine, everything is fine") with another ("I must be completely healed or I'm damaging my child"). The performance demands of F5 (worth through achievement) now operate in the domain of healing itself.
            </p>

            <h3 style={conceptHeadingStyle}>What "Enough" Looks Like</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Not Required</th>
                    <th style={thStyle}>What Is Required</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Never entering Protection", "Returning from Protection — and the child seeing the return"]} />
                  <TableRow cells={["Never experiencing false coherence", "Recognizing false coherence — 'I'm doing the thing again' — and the child witnessing that recognition"]} />
                  <TableRow cells={["Having all three capacities perfectly online", "Having enough capacity development that the child's nervous system reads a different signal than what the adult received"]} />
                  <TableRow cells={["Never making mistakes", "Repairing after mistakes — and the child learning that repair is possible"]} />
                  <TableRow cells={["Providing a perfect emotional environment", "Providing an environment where the compass can move, where feelings are received, and where the child's configuration is not punished"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>Rupture and Repair</h3>

            <p style={proseStyle}>
              The child does not need a parent who never ruptures. The child needs a parent who repairs. Repair teaches something rupture alone cannot: <strong>that relationships survive difficulty.</strong> That Connection can be lost and found again. That the compass returns.
            </p>

            <KeyStatement>
              The child doesn't need a perfect parent. The child needs a parent whose compass moves — and who comes back.
            </KeyStatement>
          </section>

          {/* ════════════════════════════════════════════════
              C7 — INTERVENTION POINTS
             ════════════════════════════════════════════════ */}

          <section id="intervention-points">
            <h2 style={sectionHeadingStyle}>The Five Pathways as Intervention Points</h2>

            <p style={proseStyle}>
              Each transmission pathway (C2) is also an intervention point. Repairing one pathway changes what transmits through it — even while others continue.
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Pathway</th>
                    <th style={narrowThStyle}>Intervention</th>
                    <th style={narrowThStyle}>What Changes</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={[
                    "Implicit Learning",
                    "Making patterns explicit. The adult becomes aware of what they model and begins developing alternatives through F8 repair",
                    "The child absorbs different patterns because the adult's patterns have actually changed",
                  ]} />
                  <ThreeColRow cells={[
                    "Co-Regulation Modeling",
                    "The adult expands their own regulatory capacity. Learns to hold more. Develops the return. Provides co-regulation the child can borrow",
                    "The child's nervous system template shifts. What is holdable expands. What is intolerable reduces",
                  ]} />
                  <ThreeColRow cells={[
                    "Environmental Design",
                    "Changing the conditions: the emotional climate, the permitted range of expression, the response to distress, the relational patterns",
                    "The child's adaptations are less extreme because the environment requires less defensive adaptation",
                  ]} />
                  <ThreeColRow cells={[
                    "Epigenetic",
                    "Stress reduction, positive experiences, therapeutic intervention, environmental safety. Epigenetic marks are responsive to experience — they can shift",
                    "The next generation's stress-response baseline shifts. Not erased — modified through sustained different experience",
                  ]} />
                  <ThreeColRow cells={[
                    "Narrative",
                    "Re-authoring family stories. Naming what was silenced. Replacing false coherence narratives with coherent, emotionally honest accounts",
                    "The child inherits a different story — one where difficulty is named, felt, and survived, rather than denied or performed around",
                  ]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>Why Single Interventions Fail</h3>

            <p style={proseStyle}>
              No single intervention addresses all five pathways. Parenting classes alone often fail (address narrative and perhaps implicit learning, but not co-regulation or environmental design). Individual therapy alone has limited generational impact (addresses the adult's processing, but the child needs to experience the change, not hear about it). Good intentions without capacity development fail (address narrative, but the nervous system the child reads has not changed).
            </p>

            <KeyStatement>
              The most effective generational intervention combines F8 individual repair (changes what the adult embodies) with F9 structural repair (changes the environment the family inhabits) with F10 awareness of transmission pathways (makes the mechanisms visible and addressable).
            </KeyStatement>
          </section>

          {/* ════════════════════════════════════════════════
              C8 — RELATIONSHIPS ACROSS REPAIR
             ════════════════════════════════════════════════ */}

          <section id="relationships-across-repair">
            <h2 style={sectionHeadingStyle}>Relationships Across Generational Repair</h2>

            <h3 style={conceptHeadingStyle}>Understanding Without Excusing</h3>

            <p style={proseStyle}>
              When adults begin to see the transmission mechanism — to understand that their parents transmitted what they had, which is what their parents transmitted to them — a complex emotional territory opens. F10 holds both truths simultaneously:
            </p>

            <p style={{ ...proseStyle, paddingLeft: 16 }}>
              <strong>Understanding:</strong> "I can see the system that shaped you. I can see what you never had conditions to develop. I can see that you transmitted what you had."<br /><br />
              <strong>Accountability:</strong> "And I can see what it cost me. The awareness capacities that did not develop. The false coherence I absorbed. The regulation I never learned. That cost is real."
            </p>

            <p style={proseStyle}>
              Neither truth cancels the other. Understanding does not minimize impact. Accountability does not require demonization.
            </p>

            <KeyStatement>
              I understand why you became who you became. And I see what it cost me. Both are true. Neither erases the other.
            </KeyStatement>

            <h3 style={conceptHeadingStyle}>Relationships Require Consent</h3>

            <p style={proseStyle}>
              Family relationships, like all relationships, require consent. F10 does not assume that understanding the mechanism means maintaining contact. Assessment considers: current safety (does the relationship create conditions for Connection?), caregiver capacity (has the parent developed?), what contact serves (growth, guilt, obligation, or genuine connection?), and alternatives (what becomes possible without contact?). The goal is clear-eyed assessment and genuine choice — neither guilt-driven contact nor reflexive cutoff.
            </p>

            <h3 style={conceptHeadingStyle}>Chosen Family</h3>

            <p style={proseStyle}>
              When the family of origin cannot provide safety, chosen family can provide what was missing: corrective relational experience, alternative configuration models, accurate mirroring from people whose capacities are online, and an environment where the person's authentic configuration is welcomed. Chosen family is not replacement or escape. It is legitimate relational ground where the three awareness capacities can develop.
            </p>
          </section>

          {/* ════════════════════════════════════════════════
              C9 — TRUE ELDERHOOD
             ════════════════════════════════════════════════ */}

          <section id="true-elderhood">
            <h2 style={sectionHeadingStyle}>True Elderhood</h2>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Positional Elderhood</th>
                    <th style={thStyle}>True Elderhood</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Uses age and experience for control", "Uses age and experience for guidance"]} />
                  <TableRow cells={["Demands deference", "Earns respect through embodied capacity"]} />
                  <TableRow cells={["Resists change — 'we survived, so should you'", "Supports evolution — 'I want you to have what I didn't'"]} />
                  <TableRow cells={["Requires the next generation to validate previous choices", "Allows the next generation to see clearly — even when what they see is painful"]} />
                  <TableRow cells={["Operates from chronic Control — managing how the family sees itself", "Operates from Connection — can hold complexity, grief, and truth"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>The Developmental Achievement</h3>

            <p style={proseStyle}>
              True elderhood is not automatic. It is a developmental achievement — the result of the adult having done the work F8 describes. It requires <strong>SEA online</strong> (the elder can see their own patterns, name their own limitations, and acknowledge what they transmitted), <strong>ER available</strong> (the elder can feel the grief of what they did not provide, without collapsing or defending), <strong>RE accurate</strong> (the elder can see the next generation clearly, not through the filter of their own needs), and <strong>compass moving</strong> (the elder can hold difficulty, tolerate being seen imperfectly, and return to Connection after the discomfort of truth).
            </p>

            <KeyStatement>
              An elder whose compass moves is an elder who can hold the family's truth. An elder whose compass is stuck demands the family hold the elder's version.
            </KeyStatement>
          </section>

          {/* ════════════════════════════════════════════════
              C10 — BRIDGE TO F11
             ════════════════════════════════════════════════ */}

          <section id="bridge-to-f11">
            <h2 style={sectionHeadingStyle}>Bridge to F11 — Emotional Paradoxes</h2>

            <p style={proseStyle}>
              F10 shows that generational transmission is not destiny. The mechanism — awareness teaches awareness — operates in both directions. It transmits whatever configuration the adult carries. When the adult develops, what transmits changes. When what transmits changes, the next generation starts from a different place.
            </p>

            <p style={proseStyle}>
              F10 surfaces a characteristic paradox: the adult who begins to see the mechanism clearly often experiences simultaneous gratitude and grief for the same people. Love for the parent who did their best and anger at what their best cost. Understanding of the system and heartbreak about its consequences. The desire to forgive and the need to be honest. These are not contradictions. They are the logical outcome of seeing clearly — of having SEA online while looking at a complex emotional reality.
            </p>

            <KeyStatement>
              F11 maps these paradoxes — and shows that holding them, rather than resolving them, is the developmental achievement.
            </KeyStatement>
          </section>

          {/* ════════════════════════════════════════════════
              KEY FORMULATIONS
             ════════════════════════════════════════════════ */}

          <section id="key-formulations">
            <h2 style={sectionHeadingStyle}>Key Formulations — F10</h2>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Formulation</th>
                    <th style={thStyle}>Concept</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["\"What the adult embodies, the child absorbs. What the adult has repaired, the child doesn't need to.\"", "Awareness Across Generations (C1)"]} />
                  <TableRow cells={["\"The family is a complete nervous system. It transmits a complete regulatory system.\"", "Five Pathways (C2)"]} />
                  <TableRow cells={["\"Love does not override what the nervous system embodies.\"", "Processing (C3)"]} />
                  <TableRow cells={["\"You don't have to heal everything. You have to heal enough that the next generation starts from a different place.\"", "Mechanism of Change (C5)"]} />
                  <TableRow cells={["\"The child doesn't need a perfect parent. The child needs a parent whose compass moves — and who comes back.\"", "Enough, Not Perfect (C6)"]} />
                  <TableRow cells={["\"I understand why you became who you became. And I see what it cost me. Both are true. Neither erases the other.\"", "Relationships (C8)"]} />
                  <TableRow cells={["\"An elder whose compass moves is an elder who can hold the family's truth.\"", "True Elderhood (C9)"]} />
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
              F10 integrates traditions that independently describe mechanisms of generational transmission:
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Tradition</th>
                    <th style={narrowThStyle}>Key Researchers</th>
                    <th style={narrowThStyle}>F10 Integration</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["Family Systems", "Bowen, Satir, Minuchin", "Multigenerational transmission of relational patterns — C1–C2 five-pathway model"]} />
                  <ThreeColRow cells={["Attachment Theory", "Bowlby, Main, Hesse, Lyons-Ruth", "Attachment patterns transmit; earned security interrupts transmission — C3"]} />
                  <ThreeColRow cells={["Intergenerational Trauma", "van der Kolk, Herman, Danieli", "Unprocessed trauma shapes the next generation's emotional environment — C3 central mechanism"]} />
                  <ThreeColRow cells={["Epigenetics", "Yehuda, Meaney, Champagne", "Stress modifies gene expression across generations; reversible through experience — C2, C7"]} />
                  <ThreeColRow cells={["Narrative Therapy", "White, Epston, McAdams", "Family stories shape identity and meaning-making — C2, C7"]} />
                  <ThreeColRow cells={["Interpersonal Neurobiology", "Porges, Siegel, Schore", "Co-regulation patterns transmit through nervous system synchronization — C2, C7"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              <strong>F10's contribution:</strong> organizing these into a unified model where all five pathways transmit the same underlying content (F1–F7 regulatory system), where the central mechanism is coherence not content, and where repair in one generation genuinely changes conditions for the next.
            </p>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="f10-generational-bridges" type="framework" />

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
                  <NavRow label="Read the emotional paradoxes framework (F11)" href="/framework/f11-emotional-paradoxes" linkText="The Emotional Logic Behind Paradoxes \u2192" />
                  <NavRow label="Read the neurodivergence framework (F9)" href="/framework/f9-neurodivergence-variation" linkText="Neurodivergence as Nervous System Variation \u2192" />
                  <NavRow label="Read the healing framework (F8)" href="/framework/f8-repairing-awareness" linkText="Repairing Awareness \u2192" />
                  <NavRow label="Read the domination framework (F7)" href="/framework/f7-domination-regulates" linkText="Domination Regulates \u2192" />
                  <NavRow label="Read the foundational framework (F1)" href="/framework/f1-emotional-gradient" linkText="Emotions as Biological Information \u2192" />
                  <NavRow label="Read the calibration framework (F2)" href="/framework/f2-awareness-calibration" linkText="Awareness Teaches Awareness \u2192" />
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
            headline: "Rebuilding Generational Bridges — How Patterns Transmit and How Repair Changes What the Next Generation Inherits",
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
            url: "https://teg-blue.org/framework/f10-generational-bridges",
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
              { name: "F10 — Rebuilding Generational Bridges", url: "https://teg-blue.org/framework/f10-generational-bridges" },
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
