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
  { label: "Common Understanding", href: "#common-understanding", description: "What most people think these words mean — and what the nervous system is actually doing." },
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F10 makes about intergenerational transmission and repair." },
  { label: "How Configuration Teaches Configuration", href: "#configuration-teaches", description: "The adult's capacity configuration IS the child's developmental environment." },
  { label: "Five Transmission Pathways", href: "#five-pathways", description: "Implicit learning, co-regulation, environmental design, epigenetic, narrative — simultaneously." },
  { label: "What Transmits When Activation Was Never Processed", href: "#unprocessed-transmission", description: "The child inherits the consequence, not the event." },
  { label: "How Processing Changes the Transmission", href: "#processing-changes", description: "Earned security. Love does not override what the nervous system embodies." },
  { label: "One Generation Shifts the Baseline", href: "#compound-interest", description: "Small sustained shifts accumulate. Compound interest across generations." },
  { label: "Enough, Not Perfect", href: "#enough-not-perfect", description: "The child needs a parent whose nervous system moves — and who comes back." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Bridge to F11", href: "#bridge", description: "Repair surfaces paradox. Holding, not resolving." },
  { label: "Connections Map", href: "#connections", description: "How F10 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "What the Adult Processes, the Child Does Not Inherit (F10) | TEG-Blue Research",
  description:
    "Intergenerational transmission and how adult repair changes developmental conditions — five transmission pathways, earned security, compound interest across generations, and enough not perfect. Framework F10 of the TEG-Blue 12-framework system.",
  keywords: [
    "intergenerational transmission",
    "generational repair",
    "earned security",
    "co-regulation",
    "epigenetic transmission",
    "developmental conditions",
    "capacity configuration",
    "compound interest",
    "good enough parent",
    "attachment transmission",
    "nervous system repair",
    "family systems",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f10-generational-bridges",
  },
  openGraph: {
    title: "What the Adult Processes, the Child Does Not Inherit — F10 Framework | TEG-Blue",
    description:
      "How adult repair changes developmental conditions across generations. Framework F10 of 12.",
    url: "https://teg-blue.org/framework/f10-generational-bridges",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "What the Adult Processes — TEG-Blue F10",
    description:
      "What the adult embodies, the child absorbs. What the adult has processed, the child does not need to carry.",
  },
  other: {
    'citation_title': 'What the Adult Processes, the Child Does Not Inherit',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F10GenerationalBridgesPage() {
  const P = { A: PATTERN.A.primary, B: PATTERN.B.primary, C: PATTERN.C.primary, D: PATTERN.D.primary };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f10-generational-bridges" />

      <PageLayout
        header={
          <FrameworkHero
            badge="FRAMEWORK F10"
            title="What the Adult Processes, the Child Does Not Inherit"
            subtitle="Intergenerational Transmission and How Adult Repair Changes Developmental Conditions"
            description="What the caregiver's nervous system carries — not what is said, intended, or believed — is what the child's nervous system absorbs. Children calibrate to the adult's autonomic state, physiological responses, and co-regulatory capacity, continuously, below conscious awareness. When adults develop their own capacities and the activation they carry begins to resolve, the next generation develops in different conditions — not because of a decision to parent differently, but because the adult is physiologically different. This framework maps the mechanism running in both directions: transmission of patterns and transmission of repair."
            group="Repair"
            groupLabel="Repair Arc · F8–F12"
            threadLine="What the adult processes, the child does not inherit — generational repair. Restores: the generational bridge"
            informsModels={[
              { label: "M1", href: "/model/m1-emotions-as-signals" },
              { label: "M2", href: "/model/m2-nervous-system-states" },
              { label: "M3", href: "/model/m3-regulation-capacities" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
            ]}
            adjacent={{
              prev: { label: "F9 Variation Is Configuration", href: "/framework/f9-neurodivergence-variation" },
              next: { label: "F11 Paradox Holds What Logic Cannot", href: "/framework/f11-emotional-paradoxes" },
            }}
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>

          {/* ─── PREREQUISITES ──────────────────────────── */}
          <PrerequisitesBlock items={[
            {
              concept: "Co-Regulation Builds the Substrate",
              framework: "F2",
              description: "What the caregiver could hold is what the child learns to complete — the biological pathway through which capacities transmit across generations.",
              href: "/framework/f2-awareness-calibration#co-regulation",
            },
            {
              concept: "The Repair Process",
              framework: "F8",
              description: "SEA as the developmental entry point, five oscillating phases, safety before capacity — how the adult's configuration changes.",
              href: "/framework/f8-repairing-awareness#sea-entry-point",
            },
            {
              concept: "Intergenerational Transmission",
              framework: "F2",
              description: "The four states are the transmission mechanism. The caregiver's capacity profile IS the child's developmental environment. Each link invisible to the person carrying it.",
              href: "/framework/f2-awareness-calibration#developmental-consequence",
            },
          ]} />

          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Breaking the cycle",
                commonUnderstanding: "Deciding to be different from your parents — choosing to parent better, making conscious changes in how you raise your children.",
                definition: "Changing what the nervous system embodies, not what the CLS intends. The child calibrates to the ESS channel — the adult's autonomic state, physiological response, co-regulatory capacity — not to the CLS channel — intention, words, decisions. Love does not override what the nervous system embodies.",
              },
              {
                title: "Generational trauma",
                commonUnderstanding: "A psychological inheritance — stories, memories, and pain passed down through families.",
                definition: "The transmission of the regulatory consequence of unprocessed experience. The child does not inherit the event. The child inherits the configuration the adult built to survive it — the chronic state, the capacity profile, the nervous system organization that becomes the child's developmental environment.",
              },
              {
                title: "Good enough parenting",
                commonUnderstanding: "Lowering the bar — accepting that you won't be perfect, doing your best.",
                definition: "A nervous system with State Flexibility — one that enters Threat & Defence when conditions require it and returns to Safety & Openness when the situation resolves. The child does not learn one state. The child learns the movement. Not never rupturing — repairing after rupture, and the child witnessing the return.",
              },
            ]}
          />

          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  The adult's capacity configuration IS the child's developmental environment — the child reads the adult's nervous system continuously, implicitly, below conscious awareness, and calibrates to what it embodies
                </li>
                <li style={propositionItemStyle}>
                  Five transmission pathways operate simultaneously — implicit learning, co-regulation modelling, environmental design, epigenetic modification, narrative inheritance — which is why single interventions often fail
                </li>
                <li style={propositionItemStyle}>
                  Unprocessed experience becomes the environment the next generation develops within — the child inherits the regulatory consequence, not the event
                </li>
                <li style={propositionItemStyle}>
                  Processing changes the transmission — when the adult's ESS processes what the CLS has understood, the activation that was shaping the relational environment begins to resolve
                </li>
                <li style={propositionItemStyle}>
                  One generation of repair shifts the baseline through compound interest — small, sustained shifts accumulate across time
                </li>
                <li style={propositionItemStyle}>
                  The child needs enough, not perfect — a nervous system that moves and comes back, not one that is permanently in Safety & Openness
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: THE CORE MECHANISM ─────────────── */}
          <PartDivider label="PART 1" title="The Core Mechanism" color={P.A} />

          {/* Concept 0: Configuration Teaches Configuration */}
          <section
            id="configuration-teaches"
            aria-labelledby="heading-configuration-teaches"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-configuration-teaches" style={sectionHeadingStyle(P.B)}>
              How Capacity Configuration Teaches Capacity Configuration
            </h2>

            <p style={proseStyle}>
              The child's nervous system reads the adult's nervous system through every available channel. The adult's vocal prosody — whether it carries ventral vagal warmth or sympathetic tension. The adult's body — whether it is settled or braced. The adult's responsiveness — whether it tracks the child's state or imposes the adult's. The adult's range — whether it can enter Threat & Defence and return to Safety & Openness, or whether it is stuck in one position. All of this is data the child's nervous system processes below conscious awareness, in milliseconds, continuously.
            </p>
            <p style={proseStyle}>
              A caregiver whose SEA is offline cannot provide conditions for the child's SEA to develop — regardless of intention, knowledge, or effort. "You can tell me anything" is a verbal message that operates through the CLS. The adult's nervous system state — whether it tenses or settles when the child expresses — is the somatic message that operates through the ESS. The child's nervous system calibrates to the somatic message.
            </p>
            <p style={proseStyle}>
              A caregiver whose nervous system moves freely — who enters defensive states when conditions require it and returns when the situation resolves — provides a child whose nervous system learns: the full gradient is available, and the return is possible. The child does not learn one state. The child learns the movement between states, and the return.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — CLS channel vs ESS channel, child calibrating to ESS */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Bowlby (1969/1988) — attachment patterns transmit through caregiver behavior, not intention. Main & Hesse (1990) — the adult's unresolved attachment history predicts the child's attachment classification. Schore (2003) — right-brain-to-right-brain communication: the caregiver's autonomic state shapes the child's autonomic development. Porges (2011) — co-regulation through the social engagement system operates below conscious awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The transmission mechanism traced through the capacity configuration — the adult's CLS output (what they say) and ESS state (what their nervous system is doing) as two separate channels, the child calibrating to the ESS channel. The ESS channel is the channel the adult often cannot observe — because SEA is what would enable that observation. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 1: Five Pathways */}
          <section
            id="five-pathways"
            aria-labelledby="heading-five-pathways"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-five-pathways" style={sectionHeadingStyle(P.B)}>
              Five Simultaneous Transmission Pathways
            </h2>

            <p style={proseStyle}>
              Transmission operates through five pathways simultaneously. They reinforce each other. When one is interrupted, the others can maintain the pattern. This is why single interventions often fail — they address one pathway while four continue transmitting.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>1. Implicit learning.</strong> The child observes and absorbs the adult's emotional patterns — which emotions are expressed, which suppressed, how distress is handled. Continuous, pre-verbal, below conscious awareness.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>2. Co-regulation modelling.</strong> The adult's nervous system functions as the child's external regulator. What the adult can hold, the child learns is holdable. The adult's window of tolerance shapes the child's.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>3. Environmental design.</strong> The home's emotional climate — whether expression is safe, whether activation is met with settling or escalation, whether repair follows rupture. Designed by the adult's configuration, usually below conscious awareness.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>4. Epigenetic modification.</strong> Chronic stress exposure can modify gene expression affecting the offspring's stress response, emotional reactivity, and regulatory capacity. These are reversible modifications — responsive to environment and experience. Sustained cortisol elevation in one generation can raise the cortisol baseline in the next. Sustained safety can lower it.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>5. Narrative inheritance.</strong> Family stories, silences, and meaning-making frameworks. What is spoken about, what is silenced, what is celebrated, what is shameful. Children inherit not just events but frameworks for interpreting events.
            </p>
            <p style={proseStyle}>
              Through these five pathways, the child absorbs the complete regulatory system: the adult's calibration on the gradient (<Link href="/framework/f1-emotional-gradient" style={linkStyle}>F1</Link>), the capacity configuration (<Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link>), the false coherence patterns (<Link href="/framework/f3-false-coherence" style={linkStyle}>F3</Link>), the rule systems (<Link href="/framework/f4-rules-regulate" style={linkStyle}>F4</Link>), the worth hierarchies (<Link href="/framework/f5-worth-hierarchies" style={linkStyle}>F5</Link>), the biases (<Link href="/framework/f6-bias-regulates" style={linkStyle}>F6</Link>), and the escalation patterns (<Link href="/framework/f7-domination-regulates" style={linkStyle}>F7</Link>). The family transmits a complete regulatory architecture.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — five pathways operating simultaneously */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Bowen (1978) — multigenerational transmission of relational patterns. Yehuda et al. (2005) — epigenetic transmission of stress response across generations. White & Epston (1990) — narrative therapy: family stories shape identity. Schore (2003) — co-regulation as the mechanism through which regulatory capacity shapes development.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The five-pathway model of simultaneous transmission — the pathways reinforce each other and single-pathway intervention is structurally limited. The framing that the family transmits the complete regulatory system (F1–F7), not just attachment patterns. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 2: What Transmits When Unprocessed */}
          <section
            id="unprocessed-transmission"
            aria-labelledby="heading-unprocessed-transmission"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-unprocessed-transmission" style={sectionHeadingStyle(P.B)}>
              What Transmits When the Activation Was Never Processed
            </h2>

            <p style={proseStyle}>
              Unprocessed experience does not stay in the adult. It becomes the environment the next generation develops within. The child does not inherit the event. The child inherits the regulatory consequence of the event — the configuration the adult built to survive it.
            </p>
            <p style={proseStyle}>
              Unprocessed grief produces an emotional climate of suppression — the adult's nervous system shifts when grief-related activation arises. The child's ESS learns: these signals are not safe to generate. Unprocessed rage produces volatility or rigid control — accumulated activation compounds with new activation, the response proportional to the total load. The child's nervous system reads: activation in this environment is unpredictable. Unprocessed shame produces performance and conditional belonging — the adult organizes around managing the shame. The child reads: belonging requires performance.
            </p>
            <p style={proseStyle}>
              In each case: the adult's unresolved activation produces a nervous system state. The state produces the relational environment. The child develops inside the environment. What transmits is the state — through the five pathways, continuously, below conscious awareness. The adult's intention — which operates through the CLS — does not override the transmission, which operates through the ESS.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — unprocessed experience → state → environment → child calibration */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Main & Hesse (1990) — unresolved loss predicts disorganized attachment in children. Van der Kolk (2014) — the body carries unprocessed experience as physiological organization. Herman (1992) — the impact of unprocessed experience on relational capacity and developmental conditions.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The mechanism traced through the two-system architecture: the adult's unresolved activation (ESS) produces the developmental conditions regardless of what the adult's CLS intends. Each form of unprocessed experience mapped to the specific state it produces and the specific calibration the child absorbs. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: WHY PROCESSING CHANGES WHAT TRANSMITS ── */}
          <PartDivider label="PART 2" title="Why Processing Changes What Transmits" color={P.B} />

          {/* Concept 4: Processing Changes Transmission */}
          <section
            id="processing-changes"
            aria-labelledby="heading-processing-changes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-processing-changes" style={sectionHeadingStyle(P.B)}>
              How Processing Changes the Transmission
            </h2>

            <p style={proseStyle}>
              Earned security research demonstrates a finding that changes everything about the generational transmission model: when adults make coherent sense of their own attachment history — processing what happened and how it shaped them — their children show more secure attachment patterns. Regardless of what the history contained.
            </p>
            <p style={proseStyle}>
              The shift is from content to coherence. Not "was your childhood good?" but "have you made sense of what happened?" Not "were your caregivers adequate?" but "can you narrate your experience with emotional data intact — grief where grief belongs, anger where anger belongs, the events named rather than suppressed?"
            </p>
            <p style={proseStyle}>
              The biological mechanism: processing changes the adult's nervous system state. When the adult makes sense of what happened — not cognitively (the CLS constructing an explanation) but somatically (the ESS processing the activation that was never discharged) — the activation that has been shaping the relational environment begins to resolve. Cortisol levels begin to lower. Muscle tension begins to release. The nervous system's resting state begins to shift. The child reads a different nervous system.
            </p>
            <p style={proseStyle}>
              This is why love does not override what the nervous system embodies. The parent who wants to be warm but whose nervous system tenses when the child expresses anger is transmitting two messages — the CLS message ("you can tell me anything") and the ESS message (tension, withdrawal, elevated cortisol). The child calibrates to the ESS message.
            </p>
            <p style={proseStyle}>
              Understanding this redirects effort from trying harder to developing differently. The question is not "how can I parent better?" (a CLS operation). The question is "what does my nervous system do when my child is activated?" (an ESS observation). <Link href="/framework/f8-repairing-awareness" style={linkStyle}>F8's</Link> repair process is not preparation for parenting. It IS the parenting intervention — because the adult's changed configuration is what the child reads.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — CLS intention vs ESS state, child calibrating to state */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Main & Hesse (1990) — earned security: coherent narrative of attachment history predicts secure attachment in offspring. Siegel (2012) — making sense of experience as the mechanism of intergenerational change. Van der Kolk (2014) — the body must process what the mind has understood. Fonagy & Target (2002) — reflective functioning in parents predicting child attachment security.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The processing mechanism traced through the two-system architecture: the CLS understanding and the ESS processing as two different operations, both necessary. The explanation for why love does not override embodiment: the CLS channel and the ESS channel transmit different messages, and the child calibrates to the ESS channel. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 5: Compound Interest */}
          <section
            id="compound-interest"
            aria-labelledby="heading-compound-interest"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-compound-interest" style={sectionHeadingStyle(P.B)}>
              How One Generation of Repair Shifts the Baseline
            </h2>

            <p style={proseStyle}>
              One generation of repair does not produce perfection. It produces a shift in baseline. The adult develops some capacity. The nervous system moves somewhat more freely. The restoration sequence works sometimes. False coherence loosens partially. And the child develops in conditions that are different from the conditions the adult developed in — not ideal, but shifted.
            </p>
            <p style={proseStyle}>
              The mechanism: the adult develops their capacities (<Link href="/framework/f8-repairing-awareness" style={linkStyle}>F8</Link>) — SEA comes partially online, ER becomes accessible, RE begins serving understanding. The adult's configuration changes. Not perfectly. But enough that the nervous system the child reads is different. The child's capacities have conditions to develop that the adult's did not. The child, as an adult, transmits from the shifted baseline.
            </p>
            <p style={proseStyle}>
              This is compound interest. Small, sustained shifts accumulate across time. One generation shifts the baseline by a small margin. The next generation starts from the shifted baseline and shifts it further. The change is not dramatic in any single generation — but across generations, the compound effect transforms the regulatory conditions.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — compound interest across generations */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Main & Hesse (1990) — earned security breaking the intergenerational chain. Siegel (2012) — intergenerational neural integration. Meaney (2001) — epigenetic evidence that caregiving behavior changes stress-response gene expression in offspring.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The compound interest model — the mechanism is not dramatic transformation in one generation but small, sustained shifts that accumulate. The framing eliminates the demand for perfection: the question is not "have I healed completely?" but "does my nervous system move differently than my parents' did?" This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: BUILDING CONDITIONS ────────────── */}
          <PartDivider label="PART 3" title="Building Conditions" color={P.C} />

          {/* Concept 6: Enough, Not Perfect */}
          <section
            id="enough-not-perfect"
            aria-labelledby="heading-enough-not-perfect"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-enough-not-perfect" style={sectionHeadingStyle(P.B)}>
              Enough, Not Perfect
            </h2>

            <p style={proseStyle}>
              Not perfect awareness. Not complete repair. Not an ideal developmental environment. Enough loosening of false coherence that the child absorbs different possibilities. Enough SEA that the child sees self-observation modelled. Enough return that the child learns: the nervous system comes back from activation.
            </p>
            <p style={proseStyle}>
              The demand for perfection recreates the regulation thread. If the adult believes they must be perfectly restored before they can provide adequate conditions, they have replaced one false coherence with another. The narrative has shifted from "I don't need to feel" to "I must feel perfectly" — and the regulatory function is the same.
            </p>
            <p style={proseStyle}>
              The child does not need a caregiver who never ruptures. The child needs a caregiver who repairs. Rupture and repair teaches what rupture alone cannot: that relationships survive difficulty. That activation arrives, the nervous system shifts, and the return happens. A caregiver who never ruptures has eliminated the data that would teach the child the most important capacity: the return is possible.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Not Required</th>
                    <th style={thStyle}>What Is Required</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Never entering defensive states", "Returning from defensive states — and the child witnessing the return"]} />
                  <TableRow cells={["Never experiencing false coherence", "Recognizing it — \"I'm doing the thing again\" — and the child witnessing that recognition"]} />
                  <TableRow cells={["All three capacities perfectly online", "Enough capacity development that the child's nervous system reads a different signal"]} />
                  <TableRow cells={["Never making mistakes", "Repairing after mistakes — and the child learning that repair is possible"]} />
                  <TableRow cells={["A perfect emotional environment", "An environment where the nervous system can move, expression is received, and the child's configuration is not punished"]} />
                </tbody>
              </table>
            </div>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — "enough" defined at the nervous system level */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Winnicott (1953) — the "good enough" mother: adequate, not perfect. Tronick (2007) — the still-face paradigm: disruption and repair as the mechanism of relational development. Main & Hesse (1990) — earned security does not require a perfect history — it requires processing of whatever history existed.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  "Enough" grounded in the ESC architecture: what "enough" means at the nervous system level is that the child reads a nervous system with State Flexibility — a system that moves and returns, not one permanently in Safety & Openness. The identification that the demand for perfection recreates the regulation thread. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={P.B}
            items={[
              {
                term: "Configuration teaches configuration",
                definition: "The adult's capacity configuration IS the child's developmental environment. The child calibrates to the ESS channel, not the CLS channel. Not one input among many — the environment.",
              },
              {
                term: "Five simultaneous pathways",
                definition: "Implicit learning, co-regulation modelling, environmental design, epigenetic modification, narrative inheritance. They reinforce each other. Single interventions fail because they address one pathway while four continue.",
              },
              {
                term: "Unprocessed experience transmits",
                definition: "The child inherits the regulatory consequence, not the event. The adult's unresolved activation produces the nervous system state that produces the relational environment.",
              },
              {
                term: "Processing changes the transmission",
                definition: "Earned security: when the adult's ESS processes what happened, the activation shaping the relational environment resolves. Love does not override embodiment — the CLS and ESS transmit different messages.",
              },
              {
                term: "Compound interest",
                definition: "One generation of partial repair shifts the baseline. The next starts from the shifted baseline. Small, sustained shifts accumulate across time.",
              },
              {
                term: "Enough, not perfect",
                definition: "State Flexibility: a nervous system that moves and comes back. Rupture and repair as developmental data. The demand for perfection recreates the regulation thread.",
              },
              {
                term: "Understanding and accountability coexist",
                definition: "I can see the system that shaped you. I see what it cost me. Both are true. Neither cancels the other. Relationships require consent, not obligation.",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={P.B}
            established="F10 established how adult repair changes developmental conditions across generations — five transmission pathways, earned security through processing, compound interest, and enough not perfect."
            question="With the interoceptive channel open, both truths arrive simultaneously — gratitude and grief for the same people, love for the parent who did their best and anger at what their best cost. Holding them, rather than resolving them, is the developmental achievement F11 maps."
            nextFramework="F11"
            nextTitle="Paradox Holds What Logic Cannot"
            nextHref="/framework/f11-emotional-paradoxes"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={P.D}
            connections={[
              {
                id: "F2: Developmental Calibration",
                href: "/framework/f2-awareness-calibration",
                description: "F2 is F10's foundation. Every mechanism F10 describes is F2's mechanism at generational scale. F10 shows F2's mechanism running in both directions — transmitting patterns when unrepaired, transmitting repair when the adult has done the work.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "M4 established that the interoceptive substrate is developable through relational experience. F10 extends: the developed substrate transmits. When the adult's channel is functioning, the child develops in the presence of a nervous system that is receiving its own signals.",
              },
              {
                id: "F8: Awareness Rebuilds Through Safety",
                href: "/framework/f8-repairing-awareness",
                description: "F8 maps how the adult's configuration changes. F10 maps what happens when that changed configuration becomes the child's developmental environment. F8's repair process IS the parenting intervention.",
              },
              {
                id: "F3: Adult Cognition & False Coherence",
                href: "/framework/f3-false-coherence",
                description: "F3 mapped false coherence. F10 shows what transmits when false coherence loosens: the child develops in the presence of a nervous system where the narrative and the body's state are less divergent.",
              },
              {
                id: "F9: Variation Is Configuration",
                href: "/framework/f9-neurodivergence-variation",
                description: "F9 mapped structural repair. F10 adds the generational dimension: when adults inhabit environments that support their configuration, the next generation develops in different structural conditions.",
              },
              {
                id: "F11: Paradox Holds What Logic Cannot",
                href: "/framework/f11-emotional-paradoxes",
                description: "F10 surfaces the paradox: gratitude and grief for the same people. Understanding and accountability simultaneously. F11 maps the capacity to hold contradictory truths without collapsing into one.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={P.D}
            items={[
              { label: "Continue to F11 — holding paradox when both truths arrive", href: "/framework/f11-emotional-paradoxes", linkText: "F11: Paradox Holds What Logic Cannot \u2192" },
              { label: "See how the adult's configuration changes", href: "/framework/f8-repairing-awareness", linkText: "F8: Awareness Rebuilds Through Safety \u2192" },
              { label: "See the developmental mechanism that transmits", href: "/framework/f2-awareness-calibration", linkText: "F2: Developmental Calibration \u2192" },
              { label: "See the awareness architecture that determines what transmits", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "Explore all 12 frameworks", href: "/frameworks-map", linkText: "Framework Map \u2192" },
              { label: "Look up key terms", href: "/glossary", linkText: "Glossary \u2192" },
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
            "@id": "https://teg-blue.org/framework/f10-generational-bridges#article",
            headline: "What the Adult Processes, the Child Does Not Inherit",
            description:
              "Intergenerational transmission and how adult repair changes developmental conditions — five pathways, earned security, compound interest, and enough not perfect. Framework F10 of the TEG-Blue 12-framework system.",
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
              "@id": "https://teg-blue.org/framework/f10-generational-bridges",
            },
            about: [
              { "@type": "Thing", name: "Intergenerational Transmission" },
              { "@type": "Thing", name: "Earned Security" },
              { "@type": "Thing", name: "Generational Repair" },
              { "@type": "Thing", name: "Co-Regulation" },
              { "@type": "Thing", name: "Epigenetic Transmission" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
              { "@type": "ScholarlyArticle", name: "Adult Attachment Interview (Main & Hesse, 1990)" },
              { "@type": "ScholarlyArticle", name: "Affect Regulation and the Origin of the Self (Schore, 2003)" },
              { "@type": "ScholarlyArticle", name: "The Developing Mind (Siegel, 2012)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Epigenetic Inheritance (Yehuda et al., 2005)" },
            ],
            keywords: [
              "intergenerational transmission",
              "earned security",
              "generational repair",
              "co-regulation",
              "epigenetic transmission",
              "good enough parenting",
              "compound interest",
              "capacity configuration",
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
              { name: "F10: What the Adult Processes", url: "/framework/f10-generational-bridges" },
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
                question: "How does intergenerational transmission work?",
                answer:
                  "The adult's capacity configuration IS the child's developmental environment. The child's nervous system reads the adult through five simultaneous pathways: implicit learning, co-regulation modelling, environmental design, epigenetic modification, and narrative inheritance. The child calibrates to the ESS channel (autonomic state, physiological response) not the CLS channel (intention, words). This is why single interventions often fail — they address one pathway while four continue.",
              },
              {
                question: "Why doesn't love override the pattern?",
                answer:
                  "The parent's conscious intention operates through the CLS. The child's calibration reads the ESS. These are different systems transmitting different messages. The parent who wants to be warm but whose nervous system tenses when the child expresses anger is transmitting two messages — the CLS message ('you can tell me anything') and the ESS message (tension, withdrawal). The child calibrates to the ESS message.",
              },
              {
                question: "How does one generation of repair change the next?",
                answer:
                  "Compound interest. The adult develops some capacity — SEA comes partially online, the restoration sequence works sometimes. The child develops in conditions that are different from what the adult had. The child, as an adult, transmits from the shifted baseline. Small sustained shifts accumulate. The question is not 'have I healed completely?' but 'does my nervous system move differently than my parents' did?'",
              },
              {
                question: "What does 'enough' mean at the nervous system level?",
                answer:
                  "State Flexibility — a nervous system that moves and comes back. Not never entering defensive states but returning from them. Not never rupturing but repairing. Not all three capacities perfectly online but enough development that the child reads a different signal. The demand for perfection recreates the regulation thread — replacing one false coherence with another.",
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
              name: "What the Adult Processes, the Child Does Not Inherit (F10) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f10-generational-bridges",
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
