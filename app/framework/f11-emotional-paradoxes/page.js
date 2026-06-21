import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, PATTERN,
  hexToRgba, MAIN_ORG,
} from "@/src/styles/tokens";
import {
  proseStyle, expandedProseStyle, sectionHeadingStyle, expandableRowStyle,
  conceptHeadingStyle, propositionItemStyle,
} from "@/src/styles/pageStyles";
import {
  SiteHeader, SiteFooter, PageLayout, FrameworkHero,
  ExpandableSection, CommonUnderstanding,
  PartDivider, NavSection, ConnectionsMap,
} from "@/src/components";
import PrerequisitesBlock from "@/src/components/PrerequisitesBlock";
import BridgeSection from "@/src/components/BridgeSection";
import EstablishesSection from "@/src/components/EstablishesSection";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F11 makes about paradox, holding, and integration." },
  { label: "Why Contradictions Are Multi-Rational", href: "#multi-rationality", description: "Five competing regulatory needs generate paradoxes that are rational when all needs are visible." },
  { label: "Each Framework's Characteristic Paradox", href: "#framework-paradoxes", description: "F1–F10 each produces specific contradictions from its specific mechanism." },
  { label: "How Contradictions Become Invisible", href: "#paradox-cascade", description: "Six levels from initial tension to invisible normal." },
  { label: "State Determines Holding Capacity", href: "#state-and-holding", description: "Safety holds both truths. Threat simplifies. Control manages through narrative. Domination erases one." },
  { label: "What Holding Capacity Is", href: "#holding-capacity", description: "Five components mapped to awareness capacities — not a separate skill but what the capacities produce." },
  { label: "The Repair Arc's Own Paradoxes", href: "#repair-paradoxes", description: "Feeling worse while getting better. Knowing and not yet being. Signs of depth, not failure." },
  { label: "Integration as Holding, Not Resolving", href: "#integration", description: "False coherence: complexity eliminated. Somatic-cognitive alignment: complexity held." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Bridge to F12", href: "#bridge", description: "Two information systems — the one that understands is not the one that organizes behavior." },
  { label: "Connections Map", href: "#connections", description: "How F11 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
  { label: "Common Understanding", href: "#common-understanding", description: "What most people think these words mean — and what the nervous system is actually doing." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Paradox Holds What Logic Cannot (F11) | TEG-Blue Research",
  description:
    "Why human contradictions are predictable outcomes of multi-need systems — five competing regulatory needs, per-framework paradoxes, the six-level cascade, holding capacity through the awareness architecture, and integration as holding rather than resolving. Framework F11 of the TEG-Blue 12-framework system.",
  keywords: [
    "paradox",
    "multi-rationality",
    "holding capacity",
    "emotional complexity",
    "somatic-cognitive alignment",
    "false coherence",
    "integration",
    "dialectical thinking",
    "nervous system states",
    "repair paradoxes",
    "ambivalence",
    "both/and thinking",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f11-emotional-paradoxes",
  },
  openGraph: {
    title: "Paradox Holds What Logic Cannot — F11 Framework | TEG-Blue",
    description:
      "Why human contradictions are predictable — and why holding them is the developmental achievement. Framework F11 of 12.",
    url: "https://teg-blue.org/framework/f11-emotional-paradoxes",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paradox Holds What Logic Cannot — TEG-Blue F11",
    description:
      "Integration is not the absence of contradiction — it is the capacity to hold contradiction without collapsing.",
  },
  other: {
    'citation_title': 'Paradox Holds What Logic Cannot',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F11ParadoxPage() {
  const P = { A: PATTERN.A.primary, B: PATTERN.B.primary, C: PATTERN.C.primary, D: PATTERN.D.primary };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f11-emotional-paradoxes" />

      <PageLayout
        header={
          <FrameworkHero
            badge="FRAMEWORK F11"
            title="Paradox Holds What Logic Cannot"
            subtitle="Why Human Contradictions Are Predictable Outcomes of Multi-Need Systems"
            description="People want connection and push it away. Understand a pattern and repeat it. Love someone and grieve what that love cost. These contradictions are not failures of logic — they are the predictable output of a nervous system pursuing multiple valid needs simultaneously. This framework maps why contradictions are predictable, how they become invisible, what capacity is required to hold them, and why integration means holding complexity rather than resolving it."
            group="Repair"
            groupLabel="Repair Arc · F8–F12"
            threadLine="Paradox holds what logic cannot — holding complexity. Restores: truth"
            informsModels={[
              { label: "M4", href: "/model/m4-awareness-capacities" },
            ]}
            adjacent={{
              prev: { label: "F10 What the Adult Processes", href: "/framework/f10-generational-bridges" },
              next: { label: "F12 Two Information Systems", href: "/framework/f12-two-information-systems" },
            }}
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>

          {/* ─── PREREQUISITES ──────────────────────────── */}
          <PrerequisitesBlock items={[
            {
              concept: "False Coherence",
              framework: "F3",
              description: "The CLS constructing a single narrative that eliminates complexity for regulatory comfort — what F11 maps the opposite of.",
              href: "/framework/f3-false-coherence#false-coherence",
            },
            {
              concept: "SEA as the Developmental Entry Point",
              framework: "F8",
              description: "When the interoceptive channel opens, the CLS begins receiving data it has never had — including contradictory signals that false coherence previously flattened.",
              href: "/framework/f8-repairing-awareness#sea-entry-point",
            },
          ]} />


          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  Paradoxical behavior is multi-rational — five competing regulatory needs (connection, protection, authenticity, belonging, coherence) generate contradictions that are rational when all needs are visible
                </li>
                <li style={propositionItemStyle}>
                  Each framework F1–F10 generates its own characteristic paradox — predictable from the mechanism, not random
                </li>
                <li style={propositionItemStyle}>
                  Contradictions become invisible through a six-level cascade — from initial tension through false coherence, identity, social reinforcement, generational transmission, to invisible normal
                </li>
                <li style={propositionItemStyle}>
                  Nervous system state determines holding capacity — Safety & Openness holds both truths, threat simplifies, Strategy & Management manages through narrative, Power & Dominance erases one
                </li>
                <li style={propositionItemStyle}>
                  Holding capacity is what the three awareness capacities produce when online — not a separate skill but both/and thinking, somatic tolerance, temporal flexibility, part recognition, and grief capacity
                </li>
                <li style={propositionItemStyle}>
                  The repair arc generates its own paradoxes — feeling worse while getting better, knowing and not yet being, grieving what was never there — signs of depth, not failure
                </li>
                <li style={propositionItemStyle}>
                  Integration means holding complexity, not resolving it — false coherence eliminates complexity, somatic-cognitive alignment holds it
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: THE LOGIC OF PARADOX ──────────── */}
          <PartDivider label="PART 1" title="The Logic of Paradox" color={P.A} />

          {/* Concept 0: Multi-Rationality */}
          <section
            id="multi-rationality"
            aria-labelledby="heading-multi-rationality"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-multi-rationality" style={sectionHeadingStyle(P.B)}>
              Why Human Contradictions Are Multi-Rational
            </h2>

            <p style={proseStyle}>
              Paradoxical behavior appears irrational only when assessed against a single set of values. When multiple regulatory needs are recognized as simultaneously valid, behavior becomes multi-rational — it serves multiple masters because the system pursuing the regulation has multiple legitimate goals operating at the same time.
            </p>
            <p style={proseStyle}>
              A person who wants connection but pushes it away is not irrational. Two regulatory needs are both real: the need for connection — the social engagement system designed for belonging and co-regulation — and the need for protection — the defensive system responding to perceived threat. The behavior oscillates because both needs are driving the nervous system.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Need</th>
                    <th style={thStyle}>Regulatory Function</th>
                    <th style={thStyle}>Where It Originates</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Connection", "Belonging, co-regulation, being perceived", "F1 (social engagement), F2 (co-regulation), F8 (relational repair)"]} />
                  <TableRow cells={["Protection", "Safety, boundaries, threat avoidance", "F1 (defensive states), F2 (calibration to threat), F7 (escalation)"]} />
                  <TableRow cells={["Authenticity", "Genuine expression, configuration honesty", "F2 (capacity development requires authentic conditions), F8–F9 (repair, unmasking)"]} />
                  <TableRow cells={["Belonging", "Group membership, social acceptance", "F4 (rule compliance), F5 (worth in hierarchy), F8–F9 (the cost of masking)"]} />
                  <TableRow cells={["Coherence", "Making sense, predictability, internal consistency", "F3 (false coherence), F6 (bias as perceptual certainty)"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              When any two of these needs conflict, the nervous system serves both — and the result looks contradictory from outside while being perfectly rational from inside. The assessment shift: from "why are you being inconsistent?" to "which competing needs is this behavior trying to serve?"
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — five competing needs generating paradox */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Festinger (1957) — cognitive dissonance as the discomfort of holding contradictory cognitions. Miller & Rollnick (2002) — ambivalence as a natural product of competing motivations. Schwartz (1995) — Internal Family Systems: parts with different needs as the structure of the mind.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Multi-rationality grounded in five regulatory needs traced through F1–F10 — each need with a specific biological function and a specific origin in the framework sequence. The reframing from irrationality to multi-rationality, with the five-need architecture explaining which specific needs are competing in any given paradox. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 1: Per-Framework Paradoxes */}
          <section
            id="framework-paradoxes"
            aria-labelledby="heading-framework-paradoxes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-framework-paradoxes" style={sectionHeadingStyle(P.B)}>
              Each Framework's Characteristic Paradox
            </h2>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Framework</th>
                    <th style={thStyle}>What the Mechanism Produces</th>
                    <th style={thStyle}>The Paradox</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["F1", "ESS and CLS in different physiological states", "Intending one response while the body produces another"]} />
                  <TableRow cells={["F2", "Three capacities in different states", "Reading everyone with precision while having no access to one's own internal state"]} />
                  <TableRow cells={["F3", "CLS maintains coherence regardless of data", "Knowing and not-knowing simultaneously"]} />
                  <TableRow cells={["F4", "Internalized rules conflict with authentic needs", "Defending norms that restrict the person defending them"]} />
                  <TableRow cells={["F5", "Worth-seeking overrides stated values", "Pursuing status that contradicts professed values"]} />
                  <TableRow cells={["F6", "Perception serves protection, not accuracy", "Certainty increasing as accuracy decreases"]} />
                  <TableRow cells={["F7", "Protection escalates beyond the original need", "Controlling what was meant to be cared for"]} />
                  <TableRow cells={["F8", "Repair surfaces previously managed contradictions", "Feeling worse while getting better"]} />
                  <TableRow cells={["F9", "Masking and authentic configuration coexist", "Succeeding by standards that cost everything"]} />
                  <TableRow cells={["F10", "Inherited patterns and conscious values operate through different systems", "Loving the people who carried the patterns that produced the harm"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              The map does not resolve the contradictions. It makes them legible. When a person can see that their oscillation is a specific paradox generated by a specific mechanism, the contradiction becomes an identifiable pattern rather than a personal failure.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — per-framework paradox map */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Bateson (1972) — the double bind: contradictory messages producing paradoxical responses as predictable systemic outcomes. Watzlawick, Weakland & Fisch (1974) — paradoxes of change: the attempted solution that maintains the problem.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Each framework's characteristic paradox traced through that framework's specific mechanism — showing that the contradictions are predictable products of the regulatory architecture, not random inconsistency. The mapping function allows locating specific contradictions and identifying the generating mechanism. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 2: Six-Level Cascade */}
          <section
            id="paradox-cascade"
            aria-labelledby="heading-paradox-cascade"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-paradox-cascade" style={sectionHeadingStyle(P.B)}>
              How Contradictions Become Invisible Through Six Levels
            </h2>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Level 1: Initial contradiction.</strong> Two competing needs generate the paradox. The person experiences the tension — if the interoceptive channel is carrying any signal. <strong style={{ color: TEXT.primary }}>Level 2: False coherence.</strong> The CLS constructs an explanation that absorbs the contradiction. "I just prefer being alone" eliminates the connection need from the narrative. <strong style={{ color: TEXT.primary }}>Level 3: Identity absorption.</strong> The explanation becomes self-concept. "I'm an introvert" is identity. Questioning it now threatens identity (<Link href="/framework/f3-false-coherence#cognitive-dissonance" style={linkStyle}>F3</Link>). <strong style={{ color: TEXT.primary }}>Level 4: Social reinforcement.</strong> The norms of <Link href="/framework/f4-rules-regulate" style={linkStyle}>F4</Link> and <Link href="/framework/f5-worth-hierarchies" style={linkStyle}>F5</Link> reward the performed identity and punish the contradiction. <strong style={{ color: TEXT.primary }}>Level 5: Generational transmission.</strong> The pattern becomes family culture (<Link href="/framework/f10-generational-bridges" style={linkStyle}>F10</Link>). "We handle things ourselves." <strong style={{ color: TEXT.primary }}>Level 6: Invisible normal.</strong> The contradiction is experienced as reality. Not a contradiction. Just how things are.
            </p>
            <p style={proseStyle}>
              A contradiction that has cascaded through all six levels cannot be addressed at one level. Cognitive insight (Level 2) does not reach identity (Level 3). Individual work (Levels 1–3) does not address social reinforcement (Level 4). Personal repair (Levels 1–5) does not interrupt the generational pattern (Level 6). Effective intervention meets the paradox at the level where it is operating.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — six-level cascade */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Bronfenbrenner (1979) — ecological systems theory: influence across nested levels. White & Epston (1990) — narrative therapy: stories becoming lived realities. Bowen (1978) — multigenerational transmission: patterns becoming family identity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The six-level cascade with each level traced through the framework that operates at that scale (F3 at Level 2, F4–F5 at Level 4, F10 at Level 5). The structural implication: intervention at the wrong level does not reach the paradox. Level 6 is the condition the person begins from — the repair arc (F8–F10) traverses the levels in reverse. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 3: State and Holding */}
          <section
            id="state-and-holding"
            aria-labelledby="heading-state-and-holding"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-state-and-holding" style={sectionHeadingStyle(P.B)}>
              How Nervous System State Determines Holding Capacity
            </h2>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Safety & Openness:</strong> The nervous system has the resources to hold both truths simultaneously. Cortisol is low. The prefrontal cortex is online. The perceptual field is wide. "I love them AND what they did produced real harm" — both truths present, neither cancelling the other. Paradox is tolerable because the system has enough regulatory margin for the complexity.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Chronic Threat & Defence:</strong> Paradox feels threatening. The system wants to simplify — to identify which truth is the danger and which is safe. Binary thinking is the nervous system reducing cognitive load under threat conditions.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Chronic Strategy & Management:</strong> Paradox is managed through narrative. The CLS constructs a story that appears to hold both truths but actually eliminates one. "I understand why they did it — and I've moved past the anger." The narrative sounds like integration. It may be coherence without the body.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Chronic Power & Dominance:</strong> Paradox is not experienced. One truth is asserted. The other is erased, denied, or punished in anyone who names it.
            </p>
            <p style={proseStyle}>
              Paradox can function as a diagnostic. A person who can name both sides without urgency to resolve is likely accessing Safety & Openness. A person with a smooth, coherent narrative that elegantly eliminates one side is likely in chronic Strategy & Management — and the narrative should be examined, not admired.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — four states, four relationships to paradox */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Porges (2011) — autonomic state determines available cognitive and social responses. Siegel (2012) — window of tolerance: the zone within which complexity can be processed. Main & Hesse (1990) — narrative coherence in the Adult Attachment Interview as a measure of paradox-holding.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Holding capacity mapped across the four nervous system states — showing that paradox tolerance is a physiological resource, not a cognitive skill. The diagnostic function: how the person relates to their contradictions reveals the state. The smooth narrative (Strategy & Management) is more likely performing holding than the messy narrative (the channel opening). This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: HOLDING, NOT RESOLVING ────────── */}
          <PartDivider label="PART 2" title="Holding, Not Resolving" color={P.B} />

          {/* Concept 4: What Holding Capacity Is */}
          <section
            id="holding-capacity"
            aria-labelledby="heading-holding-capacity"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-holding-capacity" style={sectionHeadingStyle(P.B)}>
              What Holding Capacity Is and What It Requires
            </h2>

            <p style={proseStyle}>
              Holding capacity is not a separate skill to be learned. It is what the three awareness capacities produce when they are online. <Link href="/framework/f8-repairing-awareness" style={linkStyle}>F8</Link> builds the infrastructure. F11 describes what that infrastructure enables.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Both/and thinking.</strong> The cognitive capacity to hold two contradictory truths as simultaneously valid. Requires SEA online — the CLS receiving the body's data rather than constructing a single narrative.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Somatic tolerance.</strong> The body's capacity to hold the tension of unresolved contradiction without flooding or numbing. Requires ER developed — the resonance channel functioning within a sustainable range.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Temporal flexibility.</strong> The capacity to hold that something can be true now and different later — that the present tension does not require permanent resolution. Requires RE accurate — able to read context and change.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Part recognition.</strong> The capacity to recognize that different regulatory needs are generating different pulls — without requiring one to defeat the other. Requires all three capacities working together.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Grief capacity.</strong> The capacity to mourn what cannot be reconciled — some paradoxes are permanent losses. The understanding that will never fully cancel the grief. Requires ER and SEA — the person must feel the grief and recognize it as their own.
            </p>
            <p style={proseStyle}>
              Each paradox held without collapse builds the capacity to hold the next. The nervous system accumulates evidence that the complexity is survivable.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — five components mapped to RE, ER, SEA */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Jung (1960) — the transcendent function: holding opposites until a third position emerges. Linehan (1993) — distress tolerance and dialectical thinking. Main & Hesse (1990) — earned security as the capacity to narrate complexity with emotional truth intact.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Holding capacity decomposed into five components, each mapped to the specific awareness capacity that provides it — showing that holding is a physiological achievement, not a cognitive one. The connection to F8: F8 builds the capacities, F11 describes what they produce. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 5: Repair Paradoxes */}
          <section
            id="repair-paradoxes"
            aria-labelledby="heading-repair-paradoxes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-repair-paradoxes" style={sectionHeadingStyle(P.B)}>
              The Repair Arc's Own Paradoxes
            </h2>

            <p style={proseStyle}>
              The repair arc (<Link href="/framework/f8-repairing-awareness" style={linkStyle}>F8</Link>–<Link href="/framework/f10-generational-bridges" style={linkStyle}>F10</Link>) generates characteristic paradoxes that indicate depth, not failure.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Feeling worse while getting better.</strong> When false coherence loosens and the interoceptive channel begins carrying signal, previously unfelt activation becomes felt. Grief, anger, confusion arrive. "I am in more pain AND I am more aware" are the same event described from two sides of the interoceptive channel.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Knowing and not yet being.</strong> The person can see their patterns with precision — and the pattern still runs. The CLS has updated. The ESS has not. Insight arrives at CLS speed, change happens at ESS speed (<Link href="/framework/f8-repairing-awareness#experience-not-insight" style={linkStyle}>F8</Link>).
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Grieving what was never there.</strong> When capacities develop and the person perceives what they missed — the attunement that was not available, the co-regulation that was never present — grief arrives for an absence. The capacity to grieve what was never available is itself evidence that the capacities are developing.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Restoration changing relationships.</strong> As the configuration shifts, some relationships deepen and some strain. "I am becoming more myself AND some people cannot be with who I actually am."
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Understanding and grieving simultaneously.</strong> "I understand why you became who you became. And I grieve what it cost me. Both are true. Neither erases the other."
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — repair paradoxes as developmental markers */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Prochaska & DiClemente (1983) — the knowing-being gap as a predictable phase. Boss (2006) — ambiguous loss: grief for what was never available. Bowlby (1980) — the mourning process in attachment reorganization.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Each repair paradox traced through the specific mechanism that produces it — feeling worse (the channel carrying previously unfelt activation), knowing-not-being (two systems updating at different speeds), grieving absence (the capacity to perceive the absence requires the channel that was absent). The reframing from difficulty to developmental marker. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 8-9: Integration + Smooth vs Messy */}
          <section
            id="integration"
            aria-labelledby="heading-integration"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-integration" style={sectionHeadingStyle(P.B)}>
              Integration as Holding, Not Resolving
            </h2>

            <p style={proseStyle}>
              <Link href="/framework/f3-false-coherence" style={linkStyle}>F3</Link> described false coherence — the CLS constructing a single narrative that eliminates complexity. F11 maps the other end: somatic-cognitive alignment — the CLS receiving the full data from the ESS and constructing a narrative that holds the complexity rather than flattening it.
            </p>
            <p style={proseStyle}>
              False coherence is not a smoother story. It is a narrower one. The narrative is clean and confident because the contradictory information is not arriving. Remove the contradictions, and coherence is easy. Somatic-cognitive alignment is a more honest story. It is messier because more information is present. Include the contradictions, and coherence requires holding.
            </p>
            <p style={proseStyle}>
              Integration does not mean resolving every contradiction, arriving at a single coherent narrative, or eliminating the tension. Integration means developing enough holding capacity that both truths can remain present, the nervous system being flexible enough to move between the needs, the three capacities being online enough to receive the full complexity, and grief capacity sufficient to mourn what cannot be reconciled.
            </p>
            <p style={proseStyle}>
              The diagnostic reversal: the smooth narrative should prompt examination, not admiration. Is the story smooth because both truths are genuinely held — or because one truth has been eliminated? Does the narrative include grief, anger, and contradiction — or has it been cleaned of them? The messy narrative may be someone in Phase 3 of <Link href="/framework/f8-repairing-awareness#five-phases" style={linkStyle}>F8's repair process</Link> — the interoceptive channel carrying signal, the CLS receiving data it has never had, the narrative not yet able to organize it. The mess is the channel opening.
            </p>
            <p style={proseStyle}>
              The diagnostic question is not "is the narrative coherent?" but "what is the narrative coherent from?" Coherence from the CLS alone is false coherence. Coherence from the full data is somatic-cognitive alignment. The first is cleaner. The second is truer.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — false coherence vs somatic-cognitive alignment */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Jung (1960) — individuation: the integration of opposites as the central developmental task. Linehan (1993) — dialectical behavior therapy: holding opposing truths as simultaneously valid. Main & Hesse (1990) — coherence of mind in the Adult Attachment Interview. Dismissing narratives score high on surface coherence and low on integration of affect and memory.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Integration reframed through the two coherence forms: false coherence (complexity eliminated, story clean because data is absent) and somatic-cognitive alignment (complexity held, story messy because data is present). The diagnostic reversal grounded in the two-coherence-form architecture. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={P.B}
            items={[
              {
                term: "Multi-rationality",
                definition: "Five competing regulatory needs (connection, protection, authenticity, belonging, coherence) generate paradoxes. The behavior is not irrational — it serves multiple valid goals simultaneously.",
              },
              {
                term: "Per-framework paradoxes",
                definition: "Each F1–F10 mechanism generates its own characteristic contradiction — predictable from the mechanism, not random.",
              },
              {
                term: "The six-level cascade",
                definition: "Initial contradiction → false coherence → identity → social reinforcement → generational → invisible normal. Intervention must meet the paradox at the level where it operates.",
              },
              {
                term: "State determines holding",
                definition: "Safety holds both truths. Threat simplifies. Control manages through narrative. Domination erases one. Paradox tolerance is a physiological resource, not a cognitive skill.",
              },
              {
                term: "Five components of holding capacity",
                definition: "Both/and thinking (SEA), somatic tolerance (ER), temporal flexibility (RE), part recognition (all three), grief capacity (ER + SEA). What the capacities produce when online.",
              },
              {
                term: "Repair paradoxes as developmental markers",
                definition: "Feeling worse/getting better, knowing/not-yet-being, grieving absence, relationships changing. Signs of depth, not failure.",
              },
              {
                term: "Integration as holding",
                definition: "False coherence: complexity eliminated (clean story, absent data). Somatic-cognitive alignment: complexity held (messy story, full data). The question: what is the narrative coherent from?",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={P.B}
            established="F11 established why human contradictions are predictable, how paradox becomes invisible, what holding capacity requires, and why integration means holding complexity rather than resolving it."
            question="A person can hold all of this — can see their configuration, name their paradoxes, develop holding capacity — and still enter the chronic state under stress. There are two information systems, and the one that produces understanding is not the one that organizes behavior."
            nextFramework="F12"
            nextTitle="Two Information Systems"
            nextHref="/framework/f12-two-information-systems"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={P.D}
            connections={[
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "M4 established the three coherence forms. F11 shows what somatic-cognitive alignment actually contains: not a smoother story but a story that holds contradictions. Holding capacity is what the multiplicative system produces.",
              },
              {
                id: "F3: Adult Cognition & False Coherence",
                href: "/framework/f3-false-coherence",
                description: "F3 mapped false coherence — the CLS flattening complexity. F11 maps the opposite: what the CLS produces when it receives the full data and holds the complexity rather than eliminating it.",
              },
              {
                id: "F8: Awareness Rebuilds Through Safety",
                href: "/framework/f8-repairing-awareness",
                description: "F8 builds the infrastructure. F11 describes what that infrastructure enables. The repair paradoxes are the predictable products of the repair process F8 describes.",
              },
              {
                id: "F10: What the Adult Processes",
                href: "/framework/f10-generational-bridges",
                description: "F10's characteristic paradox — understanding and grieving simultaneously — is the specific content F11 maps. The capacity to hold it requires the holding architecture F11 describes.",
              },
              {
                id: "F12: Two Information Systems",
                href: "/framework/f12-two-information-systems",
                description: "F11 mapped the complexity of being human. F12 explains the architecture that makes it inevitable — two systems, two substrates, two speeds.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={P.D}
            items={[
              { label: "Continue to F12 — the architecture underneath", href: "/framework/f12-two-information-systems", linkText: "F12: Two Information Systems \u2192" },
              { label: "See the awareness architecture that produces holding capacity", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "See how the repair arc builds the infrastructure", href: "/framework/f8-repairing-awareness", linkText: "F8: Awareness Rebuilds Through Safety \u2192" },
              { label: "See false coherence — what F11 maps the opposite of", href: "/framework/f3-false-coherence", linkText: "F3: Adult Cognition & False Coherence \u2192" },
              { label: "Explore all 12 frameworks", href: "/frameworks-map", linkText: "Framework Map \u2192" },
              { label: "Look up key terms", href: "/glossary", linkText: "Glossary \u2192" },
            ]}
          />


          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Contradictory behavior",
                commonUnderstanding: "Inconsistency — hypocrisy, confusion, or a failure to commit to one position.",
                definition: "Multi-rationality. The nervous system pursuing multiple valid regulatory goals simultaneously — connection AND protection, authenticity AND belonging, understanding AND grief. The behavior oscillates because both needs are driving the system. Neither is the 'real' need. Neither is pathological.",
              },
              {
                title: "Integration",
                commonUnderstanding: "Resolving contradictions — finding the single truth, reaching clarity, getting to the other side.",
                definition: "Developing enough holding capacity that both truths can remain present. The nervous system flexible enough to move between competing needs without getting stuck in one. Not the absence of contradiction — the capacity to contain it.",
              },
              {
                title: "A smooth story",
                commonUnderstanding: "A sign of integration — the person has made sense of their experience and can tell it coherently.",
                definition: "May be coherence without the body — the CLS constructing clarity from incomplete data. The messy story may be someone whose interoceptive channel is opening for the first time. The question is not 'is the narrative coherent?' but 'what is the narrative coherent from?'",
              },
            ]}
          />

        </article>
      </PageLayout>

      <SiteFooter />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/framework/f11-emotional-paradoxes#article",
            headline: "Paradox Holds What Logic Cannot: Why Human Contradictions Are Predictable",
            description:
              "Why contradictions are multi-rational, how paradox becomes invisible, what holding capacity requires, and why integration means holding complexity rather than resolving it. Framework F11 of the TEG-Blue 12-framework system.",
            author: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              url: "https://teg-blue.org/about",
            },
            publisher: {
              "@type": "Organization",
              name: "TEG-Blue Research",
              url: "https://teg-blue.org",
            },
            datePublished: "2026-03-08",
            dateModified: "2026-04-06",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue 12 Framework System",
              url: "https://teg-blue.org/frameworks-map",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/framework/f11-emotional-paradoxes",
            },
            about: [
              { "@type": "Thing", name: "Paradox" },
              { "@type": "Thing", name: "Multi-Rationality" },
              { "@type": "Thing", name: "Holding Capacity" },
              { "@type": "Thing", name: "Integration" },
              { "@type": "Thing", name: "Dialectical Thinking" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "A Theory of Cognitive Dissonance (Festinger, 1957)" },
              { "@type": "ScholarlyArticle", name: "The Archetypes and the Collective Unconscious (Jung, 1960)" },
              { "@type": "ScholarlyArticle", name: "Steps to an Ecology of Mind (Bateson, 1972)" },
              { "@type": "ScholarlyArticle", name: "Cognitive-Behavioral Treatment of Borderline Personality Disorder (Linehan, 1993)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Adult Attachment Interview (Main & Hesse, 1990)" },
            ],
            keywords: [
              "paradox",
              "multi-rationality",
              "holding capacity",
              "integration",
              "somatic-cognitive alignment",
              "false coherence",
              "dialectical thinking",
              "ambivalence",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "12 Frameworks", url: "/frameworks-map" },
              { name: "F11: Paradox Holds What Logic Cannot", url: "/framework/f11-emotional-paradoxes" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFAQJsonLd([
              {
                question: "Why are human contradictions predictable?",
                answer:
                  "Five competing regulatory needs — connection, protection, authenticity, belonging, coherence — generate paradoxes that are rational when all needs are visible. A person who wants connection but pushes it away is not irrational. Two regulatory needs are driving the nervous system simultaneously. The behavior oscillates because both needs are real.",
              },
              {
                question: "What is holding capacity?",
                answer:
                  "What the three awareness capacities produce when they are online — not a separate skill. Five components: both/and thinking (SEA), somatic tolerance (ER), temporal flexibility (RE), part recognition (all three), and grief capacity (ER + SEA). Holding capacity develops through the same process F8 describes. Each paradox held without collapse builds the capacity to hold the next.",
              },
              {
                question: "Why does a smooth narrative warrant examination?",
                answer:
                  "The smooth narrative may be coherence without the body — the CLS constructing clarity from incomplete data. The messy narrative may be someone whose interoceptive channel is opening for the first time. The diagnostic question is not 'is the narrative coherent?' but 'what is the narrative coherent from?' Coherence from the CLS alone is false coherence. Coherence from the full data is somatic-cognitive alignment.",
              },
              {
                question: "What is the difference between false coherence and somatic-cognitive alignment?",
                answer:
                  "False coherence: the narrative is clean and confident because the contradictory information is not arriving — complexity eliminated. Somatic-cognitive alignment: the narrative is messier because more information is present — complexity held. The first is cleaner. The second is truer. Integration is not the absence of contradiction but the capacity to contain it.",
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Paradox Holds What Logic Cannot (F11) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f11-emotional-paradoxes",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ─── STYLE CONSTANTS ──────────────────────────────────────

const linkStyle = {
  color: SPECTRUM.cobalt,
  textDecoration: "none",
  fontWeight: 500,
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  background: BG.card,
  borderRadius: 8,
  overflow: "hidden",
  border: `1px solid ${BORDER.default}`,
  fontSize: 13,
};

const thStyle = {
  padding: "10px 14px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: TEXT.muted,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontFamily: FONT.mono,
  background: BG.surface,
  borderBottom: `1px solid ${BORDER.default}`,
};

// ─── HELPER COMPONENTS ────────────────────────────────────

function TableRow({ cells }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      {cells.map((cell, i) => (
        <td
          key={i}
          style={{
            padding: "10px 14px",
            fontSize: 13,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400,
            lineHeight: 1.6,
            verticalAlign: "top",
          }}
        >
          {cell}
        </td>
      ))}
    </tr>
  );
}
