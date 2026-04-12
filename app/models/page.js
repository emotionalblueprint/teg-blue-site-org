import Link from "next/link";
import dynamic from "next/dynamic";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, PATTERN, RADIUS,
  hexToRgba,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, PageLayout,
  PartDivider, ExpandableSection,
} from "@/src/components";

import {
  proseStyle, expandedProseStyle, expandableRowStyle,
  conceptHeadingStyle,
} from "@/src/styles/pageStyles";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

// ─── DYNAMIC IMPORTS ────────────────────────────────────

const ESCCycleDiagram = dynamic(
  () => import("@/src/components/ESCCycleDiagram"),
  { ssr: false }
);

// ─── CONSTANTS ────────────────────────────────────────────

const P = { A: PATTERN.A.primary, B: PATTERN.B.primary, C: PATTERN.C.primary, D: PATTERN.D.primary };
const linkStyle = { color: P.B, textDecoration: "none" };

// ─── METADATA ─────────────────────────────────────────────

export const metadata = {
  title: "The Emotional Somatic Cycle | TEG-Blue Research",
  description:
    "The Emotional Somatic Cycle (ESC) — the repeating biological sequence two information systems run together. From detection through activation to restoration or incompletion.",
  keywords: [
    "emotional somatic cycle",
    "nervous system",
    "biological restoration",
    "signal generation",
    "state activation",
    "cognitive override",
    "ESS",
    "CLS",
    "physiological baseline",
  ],
  alternates: {
    canonical: "https://teg-blue.org/models",
  },
  openGraph: {
    title: "The Emotional Somatic Cycle | TEG-Blue Research",
    description:
      "The repeating biological sequence the nervous system runs — from signal through state through restoration or incompletion.",
    url: "https://teg-blue.org/models",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Emotional Somatic Cycle | TEG-Blue Research",
    description:
      "The repeating biological sequence the nervous system runs — from signal through state through restoration or incompletion.",
  },
  other: {
    "citation_title": "The Emotional Somatic Cycle",
    "citation_author": "Anna Paretas-Artacho",
    "citation_publication_date": "2026/02",
    "citation_technical_report_institution": "TEG-Blue Research",
  },
};

const FAQ_ITEMS = [
  {
    question: "What is the Emotional Somatic Cycle?",
    answer: "The Emotional Somatic Cycle (ESC) is the repeating biological sequence that two information systems — the Emotional Somatic System (ESS) and the Cognitive-Logical System (CLS) — run together. The nervous system detects something in the environment, evaluates it for safety or threat, generates a physiological response, reorganises into a different configuration, and then either the restoration sequence runs to its endpoint or the activation remains unresolved.",
  },
  {
    question: "What are the four TEG-Blue models?",
    answer: "The four models each map a different stage of the Emotional Somatic Cycle. M1: Emotions as Signals maps what the nervous system detects and the physiological response it generates. M2: Nervous System States maps how the nervous system reorganises into different configurations along a continuous gradient. M3: Regulation Capacities maps whether the restoration sequence completes or the activation remains unresolved. M4: Awareness Capacities maps the biological architecture that determines whether the CLS can receive the ESS's physiological signals.",
  },
  {
    question: "What determines whether the cycle completes?",
    answer: "Whether the CLS can feel what the ESS is doing — whether the biological architecture connecting the two systems is available. When it is, the body completes its restoration sequence: stress hormones metabolise, muscles release, the HPA axis stands down, and the nervous system returns toward physiological baseline. When it is not, the CLS overrides the physiological activation, the restoration sequence does not run to its endpoint, and the activation remains unresolved.",
  },
  {
    question: "How do the four TEG-Blue models relate to each other?",
    answer: "The four models describe one process: the nervous system detects and evaluates (M1), reorganises into a different physiological configuration (M2), either completes the restoration sequence or the activation remains unresolved (M3), and whether the person can perceive any of these physiological changes while they are happening depends on the state of the biological architecture connecting the two information systems (M4). Every concept in every model maps a part of this cycle.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────

export default function ModelsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: FONT.display,
        // Force dark "exhibit" palette on this page regardless of user theme.
        // Same convention as /emotional-somatic-system — gives ESS / ESC /
        // Models a visually distinct surface from the rest of the site.
        "--bg-page": "#0a0d17",
        "--bg-primary": "#111729",
        "--bg-card": "#151c35",
        "--bg-surface": "#162035",
        "--bg-inset": "#0a0d17",
        "--text-primary": "#f1f5f9",
        "--text-secondary": "#cbd5e1",
        "--text-muted": "#94a3b8",
        "--text-hint": "#64748b",
        "--text-micro": "#475569",
        "--border-default": "rgba(148, 163, 184, 0.12)",
        "--border-hover": "rgba(148, 163, 184, 0.20)",
        "--border-active": "rgba(148, 163, 184, 0.30)",
        background: "#0a0d17",
      }}
    >
      <SiteHeader currentPath="/models" />

      <PageLayout
        header={
          <ModelHero
            badge="THE EMOTIONAL SOMATIC CYCLE"
            title="The Emotional Somatic Cycle"
            subtitle="Detection → Signal → State → Restoration or Incompletion"
            subtitleStyle={{ fontFamily: FONT.diagram }}
            description="The Emotional Somatic System and the Cognitive-Logical System run a repeating biological sequence together. The nervous system detects, evaluates, generates a physiological response, and reorganises into a different configuration. Whether that sequence completes — or remains unresolved — determines what the person can perceive, think, feel, and do."
            color={P.B}
          />
        }
      >

        {/* ════════════════════════════════════════════════════
            ESS POINTER + CYCLE DIAGRAM
            ════════════════════════════════════════════════════ */}

        <section style={{ marginBottom: 32 }}>
          <p style={proseStyle}>
            This page maps the cycle these{" "}
            <Link href="/emotional-somatic-system" style={linkStyle}>two information systems</Link>
            {" "}run together — the Emotional Somatic System (ESS) and the Cognitive-Logical System (CLS).
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <ESCCycleDiagram />
        </section>

        {/* ════════════════════════════════════════════════════
            PART 1: THE CYCLE
            ════════════════════════════════════════════════════ */}

        <PartDivider label="Part 1" title="The Cycle" color={P.A} />

        {/* ─── The Emotional Somatic Cycle ────────────────── */}
        <section style={{ marginBottom: 40 }}>
          <h3 style={conceptHeadingStyle}>The Emotional Somatic Cycle</h3>

          <p style={proseStyle}>
            The Emotional Somatic Cycle is the repeating biological sequence that the ESS and CLS run together. It begins at physiological baseline — the nervous system at rest, resources available but not deployed. The nervous system detects something in the environment, evaluates it for safety or threat, generates a physiological response encoding what was detected, and reorganises into a different physiological configuration. The CLS catches up — arriving to find the body already mobilised.
          </p>

          <p style={proseStyle}>
            The cycle has two possible paths. When the CLS can receive the ESS{"'"}s physiological signals — when the biological architecture connecting the two systems is available — the body completes its restoration sequence: stress hormones metabolise, muscles release, the HPA axis stands down, and the nervous system returns toward physiological baseline. The activation resolves. The person knows what fired, why it fired, and what it needed. The cycle does not need to repeat.
          </p>

          <p style={proseStyle}>
            When the CLS cannot receive the ESS{"'"}s signals — when it overrides the physiological activation with narrative, management, or suppression — the restoration sequence does not run to its endpoint. The physiological activation remains unresolved. Cortisol continues circulating. Muscles stay braced. Neural circuits remain organised for threat. Across repeated incomplete cycles, the residue accumulates, the resting activation level shifts upward, and the nervous system searches for anything that produces the neurochemical relief that biological restoration would have provided.
          </p>

          <div style={expandableRowStyle}>
            <ExpandableSection title="Research Foundations" type="opendata">
              <p style={expandedProseStyle}>
                Porges (2011) — polyvagal theory: the autonomic nervous system organises physiological state through hierarchical neural circuits. Damasio (1994) — somatic marker hypothesis: the body{"'"}s physiological responses inform decision-making before conscious reasoning arrives. Levine (1997) — somatic experiencing: the body{"'"}s stress response requires completion, not management. Nagoski & Nagoski (2019) — the stress cycle requires physiological completion independent of the stressor.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="opendata">
              <p style={expandedProseStyle}>
                The complete sequence mapped as a single biological architecture involving both information systems — from detection through activation through branching to completion or incompletion. The branching point identified as a biological condition: whether the architecture connecting the ESS and CLS is available. The CLS placed as a participant in the cycle, not an observer — what the CLS does when it arrives determines the cycle{"'"}s outcome.
              </p>
            </ExpandableSection>
          </div>
        </section>

        {/* ─── The Stages ─────────────────────────────────── */}
        <section style={{ marginBottom: 40 }}>
          <h3 style={conceptHeadingStyle}>The Stages</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <StageStep
              number="1"
              title="Physiological Baseline"
              model={null}
            >
              The nervous system at rest. Cortisol at resting level. Muscles at resting tension. Heart rate at resting pace. The HPA axis standing down. Not numb, not inactive — ready. The body{"'"}s resources available, not deployed. The state the nervous system is designed to return to after activation. Physiological baseline is the start and endpoint of the Emotional Somatic Cycle. In Path A, the restoration sequence runs to its endpoint and the nervous system returns here. In Path B, the baseline shifts upward — the resting activation level itself changes as unresolved physiological activation accumulates.
            </StageStep>

            <StageStep
              number="2"
              title="Safety-Threat Evaluation"
              model={{ id: "M1", href: "/model/m1-emotions-as-signals" }}
            >
              The sensory periphery detects, the nervous system evaluates for safety or threat. Five channels feed in simultaneously — eyes, ears, nose, gut, skin — below conscious awareness. The evaluation is automatic, continuous, and operates at millisecond speed: the amygdala fires in 12 milliseconds. A full safety-threat evaluation is complete before the CLS has assembled a single thought. This evaluation runs 100% of the time. It is not triggered by events — it is the nervous system{"'"}s ongoing read of the environment and the body{"'"}s own internal state.
            </StageStep>

            <StageStep
              number="3"
              title="Signal Generation"
              model={{ id: "M1", href: "/model/m1-emotions-as-signals" }}
            >
              The nervous system generates a physiological response pattern — hormonal, neurochemical, muscular — encoding a finding about what was detected. This response pattern is biological information. It carries a specific message: what was detected, what matters, what the body should do. Each pattern is distinct. The hormonal, neurochemical, and muscular configuration the nervous system generates for a boundary crossing is different from the configuration it generates for a loss, a threat, or a moment of safety. This is what the nervous system produces as an emotion — a physiological finding. The feeling is the CLS{"'"}s registration of what the ESS already generated.
            </StageStep>

            <StageStep
              number="4"
              title="State Activation"
              model={{ id: "M2", href: "/model/m2-nervous-system-states" }}
            >
              The nervous system reorganises into a different physiological configuration in response to the signal. Perception narrows or widens. Cognitive flexibility increases or decreases. Empathic capacity opens or closes. Muscle tension redistributes. Sensory filtering adjusts. The body configures itself for what the evaluation determined the situation requires. The configuration moves along a continuous physiological gradient — from parasympathetic-dominant states of engagement and broader perception through sympathetic activation and defensive mobilisation. The current position on this gradient determines what the person can perceive, think, feel, and learn.
            </StageStep>

            <StageStep
              number="5"
              title="The Branching Point"
              model={{ id: "M4", href: "/model/m4-awareness-capacities" }}
            >
              Everything above happened in milliseconds. The ESS detected, evaluated, generated a physiological response, and shifted the nervous system{"'"}s configuration before the CLS registered that anything changed. Now the CLS catches up. Whether the CLS can feel what the ESS is doing — whether it can receive the physiological signals the ESS has generated — determines everything that follows. When the CLS receives the signal, the person knows what fired and why, and the body can complete its restoration sequence. When the CLS cannot receive the signal — when the biological architecture connecting the two systems is unavailable — the CLS overrides: it manages, plans, pushes through, narrates, without knowing there is a physiological signal to receive.
            </StageStep>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            PART 2: PATH A — THE COMPLETED PATHWAY
            ════════════════════════════════════════════════════ */}

        <PartDivider label="Part 2" title="Path A — The Completed Pathway" color={P.B} />

        <section style={{ marginBottom: 40 }}>
          <h3 style={conceptHeadingStyle}>Mobilisation Response</h3>
          <ModelTag id="M3" href="/model/m3-regulation-capacities" />

          <p style={proseStyle}>
            The mobilised physiological resources are expended — through movement, action, expression, or holding. The body does what the activation mobilised it to do. Stress hormones that were released to fuel action are used. Muscle tension that was organised for response is discharged. The physiological resources deployed during state activation serve their intended function.
          </p>

          <p style={proseStyle}>
            The form depends on what was detected and what state was activated. A boundary crossing may mobilise confrontation or withdrawal. A loss may mobilise conservation and grief. A threat may mobilise flight or fight. A moment of safety may mobilise approach and engagement.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h3 style={conceptHeadingStyle}>Biological Restoration</h3>
          <ModelTag id="M3" href="/model/m3-regulation-capacities" />

          <p style={proseStyle}>
            The body{"'"}s stress response requires physical completion — stress hormones need to metabolise, muscles need to unclench, inflammatory compounds need to clear, neural circuits need to recover. This biological completion is how the nervous system returns toward physiological baseline. The restoration sequence runs to its endpoint. The HPA axis stands down. The nervous system returns toward physiological baseline.
          </p>

          <p style={proseStyle}>
            This is the body{"'"}s designed completion process. It operates at zero cost — this is the design specification, not an intervention.
          </p>

          <p style={proseStyle}>
            Two designed completion pathways exist. Somatic emotions — those whose signal content is about the body{"'"}s own state — can complete through the body{"'"}s own channels: movement, discharge, physiological settling. Relational emotions — those whose signal content is about belonging, connection, or the state of the bond — require another person. Relational completion is a biological requirement built into the signal architecture.
          </p>

          <p style={proseStyle}>
            When the restoration sequence completes: the activation resolves. The signal{"'"}s information has landed — the person knows what fired, why it fired, and what it needed. The cycle does not need to repeat. The nervous system returns to physiological baseline, ready for the next signal.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════
            PART 3: PATH B — THE INCOMPLETE PATHWAY
            ════════════════════════════════════════════════════ */}

        <PartDivider label="Part 3" title="Path B — The Incomplete Pathway" color={P.C} />

        <section style={{ marginBottom: 40 }}>
          <h3 style={conceptHeadingStyle}>Cognitive Override</h3>
          <ModelTag id="M3" href="/model/m3-regulation-capacities" />

          <p style={proseStyle}>
            The CLS overrides the ESS{"'"}s physiological signals. The branching point has resolved to Path B. The CLS cannot feel the ESS{"'"}s activation — or it can feel it but the activation is too threatening to the current narrative — and it intercepts: manages, plans, pushes through, controls, constructs a narrative that replaces the physiological signal with an invented account.
          </p>

          <p style={proseStyle}>
            The physiological activation does not disappear. The nervous system still carries it — cortisol still circulating, muscles still braced, neural circuits still organised for threat. What changes is that the person no longer registers it as information. The CLS is operating without data from the ESS.
          </p>

          <p style={proseStyle}>
            When the biological architecture connecting the two systems was never built — when the interoceptive substrate was never developed during early relational experience — cognitive override is not an event. It is the permanent structure the CLS was built with. The CLS has never operated any other way.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h3 style={conceptHeadingStyle}>The Cascade</h3>
          <ModelTag id="M3" href="/model/m3-regulation-capacities" />

          <p style={proseStyle}>
            When cognitive override occurs, the restoration sequence does not run to its endpoint. A cascade of physiological consequences follows — each stage producing the conditions for the next.
          </p>

          <CascadeItem title="Incomplete Biological Restoration">
            The restoration sequence runs partially or not at all. Hormone metabolism stalls. Muscle release does not occur. Neural recovery is interrupted. The body carries forward physiological activation that was mobilised but not completed.
          </CascadeItem>

          <CascadeItem title="Unresolved Activation Load">
            The physiological activation that remains when the restoration sequence does not reach its endpoint. Stress hormones still circulating. Muscles still braced. Neural circuits still organised for threat. This is the load the body carries forward into the next cycle.
          </CascadeItem>

          <CascadeItem title="Debris Accumulation">
            Across repeated incomplete cycles, the physical residue accumulates — cortisol, muscle tension, sensitised neural circuits, inflammatory compounds. This is the measurable physiological residue of activation sequences that were mobilised but never completed.
          </CascadeItem>

          <CascadeItem title="Baseline Elevation">
            The nervous system adapts its resting activation level upward to reflect the unresolved load. The floor rises. States that require lower activation — parasympathetic-dominant states of safety and openness — become physiologically inaccessible. The person is stuck because their resting level of activation already places them in a state that was designed for temporary use.
          </CascadeItem>

          <CascadeItem title="Restoration Substitutes">
            The nervous system searches for anything that produces the neurochemical shift that biological restoration would have provided. Non-relational restoration substitutes alter internal state directly — substances, intensity, work, distraction — producing a slow upward drift of the resting activation level. Relational restoration substitutes act through another nervous system — fusion, control, subjugation — producing an accelerated rise. Each produces measurable short-term relief. Neither runs the restoration sequence.
          </CascadeItem>

          <p style={{ ...proseStyle, marginTop: 8 }}>
            The substitute suppresses felt intensity but the restoration sequence does not run. The activation rebounds. The cycle repeats from a higher baseline. Each incomplete cycle raises the floor. The next activation starts from a system already carrying unresolved load.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h3 style={conceptHeadingStyle}>What Chronic Activation Produces</h3>

          <p style={proseStyle}>
            The cascade described the biological consequences of the incomplete pathway. Each consequence is measurable and progressive. Together they produce a condition in which the nervous system{"'"}s state configuration, the restoration sequence, and the awareness architecture converge — and the convergence produces something none of the three describes alone.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <ConditionCard
              title="From physiological baseline"
              color={P.B}
            >
              The nervous system is at rest. Capacities are available but not deployed. The restoration sequence is not running — the architecture exists, the conditions are not being tested. The body{"'"}s internal signals are reaching conscious processing as readable information — the full data set is reporting. The person can enter any state and return.
            </ConditionCard>

            <ConditionCard
              title="From acute activation"
              color={SPECTRUM.azure}
            >
              The nervous system has shifted configuration. Capacities have shifted with it — temporary resource reallocation, the whole system reorganised for the current demand. The restoration sequence is available — when conditions are present, the body completes and returns to physiological baseline. The person can feel the state shift. The restrictions are temporary. This is the system working as designed.
            </ConditionCard>

            <ConditionCard
              title="From chronic activation"
              color={SPECTRUM.indigo}
            >
              The person operates from a nervous system that has reorganised permanently. Perception has narrowed or tunnelled — delivering a filtered version of reality that confirms the state. Cognition has simplified, locked into strategic or threat-based processing. Empathy has redirected or collapsed — reading others for strategy, threat, or control rather than understanding. The temporal horizon has compressed — the person cannot hold long-term consequences. The restoration sequence cannot complete — the resting activation level has shifted upward, cognitive override is automatic and invisible, substitutes feel like resolution. The person does not experience themselves as compromised. They experience narrowed perception as accurate perception. Locked cognition as clear thinking. Collapsed empathy as rational detachment. The narrative is internally consistent.
            </ConditionCard>
          </div>

          <p style={proseStyle}>
            The capacity restrictions are permanent. The restoration pathway is blocked. And the instrument that would detect either condition is the instrument that chronic activation disables.
          </p>

          <div style={expandableRowStyle}>
            <ExpandableSection title="Research Foundations" type="opendata">
              <p style={expandedProseStyle}>
                Fredrickson (2001) — broaden-and-build theory and capacity restriction under sustained negative affect. Arnsten (2009) — prefrontal cortex degradation under chronic stress. Sapolsky (2004) — glucocorticoid cascade and hippocampal damage. Levine (1997) — somatic completion and what happens when it cannot occur. Gross (1998) — suppression maintaining physiological arousal. Craig (2002) — interoceptive substrate architecture. Porges (2011) — neuroception and autonomic state detection. Damasio (1999) — somatic marker hypothesis and the role of body-state data in decision-making.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="opendata">
              <p style={expandedProseStyle}>
                The assembly of state configuration, restoration sequence, and awareness architecture into a single picture of what chronic activation produces — not three separate deficits but one condition in which capacity is restricted, restoration is blocked, and the instrument that would detect either is offline. The three-condition frame — physiological baseline, acute activation, chronic activation — as structurally different relationships between the nervous system and the person operating inside it.
              </p>
            </ExpandableSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            PART 4: THE SYSTEM
            ════════════════════════════════════════════════════ */}

        <PartDivider label="Part 4" title="The System" color={P.D} />

        {/* ─── The Four Models ────────────────────────────── */}
        <section style={{ marginBottom: 40 }}>
          <h3 style={conceptHeadingStyle}>The Four Models</h3>

          <p style={proseStyle}>
            Each model maps a different part of the Emotional Somatic Cycle. Together they describe one process — from the signal the nervous system generates through the state it produces through whether the cycle completes to whether the person can perceive any of it happening.
          </p>

          <p style={proseStyle}>
            Every concept in every model maps a part of this cycle. Every framework explains why the cycle runs the way it does in a specific person.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
            <ModelEntryCard
              id="M1"
              title="Emotions as Signals"
              role="The Signal Language"
              question="What is this signal telling me?"
              stage="Safety-Threat Evaluation and Signal Generation"
              description="What the ESS detects and the physiological response it generates — sixteen emotions, each with a distinct finding, grouped by somatic (can complete through the body's own channels) and relational (requires another person)."
              color={SPECTRUM.azure}
              href="/model/m1-emotions-as-signals"
            />
            <ModelEntryCard
              id="M2"
              title="Nervous System States"
              role="The Instrument"
              question="Where is the needle?"
              stage="State Activation and the nervous system gradient"
              description="How the nervous system reorganises into four configurations along a continuous physiological range — what each state enables and restricts, how states become chronic, how the return to physiological baseline restores flexibility."
              color={SPECTRUM.azure}
              href="/model/m2-nervous-system-states"
            />
            <ModelEntryCard
              id="M3"
              title="Regulation Capacities"
              role="The Return Pathway"
              question="Is the cycle completing?"
              stage="Path A and Path B"
              description="Whether the restoration sequence completes — mobilisation response, biological restoration, return to baseline — or the activation remains unresolved. What completion looks like at each state. What replaces it when it cannot happen."
              color={SPECTRUM.indigo}
              href="/model/m3-regulation-capacities"
            />
            <ModelEntryCard
              id="M4"
              title="Awareness Capacities"
              role="The Calibration"
              question="What determines which path?"
              stage="The Branching Point"
              description="The biological architecture that determines whether the CLS can receive the ESS's physiological signals. Whether that architecture is available determines which path the cycle follows."
              color={SPECTRUM.cobalt}
              href="/model/m4-awareness-capacities"
            />
          </div>
        </section>

        {/* ─── The Twelve Frameworks ─────────────────────── */}
        <section style={{ marginBottom: 40 }}>
          <h3 style={conceptHeadingStyle}>The Twelve Frameworks</h3>

          <p style={proseStyle}>
            The models describe <em>what is happening</em> — the mechanism as it operates right now, in any person. The frameworks describe <em>why it is happening this way</em> — the origin, development, and scaling of the mechanism. Where it comes from, how a specific person got their specific configuration, and what happens when the mechanism operates at collective scale.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 8,
              marginTop: 16,
            }}
          >
            <FrameworkArcCard
              arc="Individual"
              range="F1 – F3"
              description="The mechanism inside one nervous system — the biological origin, how the awareness architecture develops through relational experience, and how the CLS maintains the incomplete pathway through narrative."
              color={SPECTRUM.azure}
            />
            <FrameworkArcCard
              arc="Collective"
              range="F4 – F7"
              description="The same mechanism at social and institutional scales — rules, worth hierarchies, perceptual bias, and domination as escalating forms of regulation substitution."
              color={SPECTRUM.indigo}
            />
            <FrameworkArcCard
              arc="Repair"
              range="F8 – F12"
              description="Reversal and restoration at every scale — how the awareness capacities rebuild through safety, how variation is configuration, how processing breaks the intergenerational chain, and why understanding alone does not change the architecture."
              color={SPECTRUM.cobalt}
            />
          </div>

          <div style={{ marginTop: 16 }}>
            <Link href="/frameworks-map" style={{ ...linkStyle, fontSize: 13, fontWeight: 500 }}>
              See the twelve frameworks →
            </Link>
          </div>
        </section>

        {/* ─── Where to Go Next ──────────────────────────── */}
        <section
          style={{
            marginBottom: 48,
            padding: "20px 24px",
            background: hexToRgba(P.B, 0.04),
            borderRadius: RADIUS.md,
            border: `1px solid ${hexToRgba(P.B, 0.12)}`,
          }}
        >
          <h3 style={{ ...conceptHeadingStyle, marginBottom: 16 }}>Where to Go Next</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            <NavItem href="/model/m1-emotions-as-signals" color={SPECTRUM.azure}>
              Start with what the nervous system detects — M1: Emotions as Signals
            </NavItem>
            <NavItem href="/model/m2-nervous-system-states" color={SPECTRUM.azure}>
              See how the nervous system reorganises in response — M2: Nervous System States
            </NavItem>
            <NavItem href="/model/m3-regulation-capacities" color={SPECTRUM.indigo}>
              Follow the two paths — M3: Regulation Capacities
            </NavItem>
            <NavItem href="/model/m4-awareness-capacities" color={SPECTRUM.cobalt}>
              Understand what determines the branching point — M4: Awareness Capacities
            </NavItem>
            <NavItem href="/frameworks-map" color={P.B}>
              Explore why the cycle runs this way — The Twelve Frameworks
            </NavItem>
            <NavItem href="/publications/validation-study" color={TEXT.muted}>
              Read the validation study
            </NavItem>
            <NavItem href="https://teg-blue.com/compass-explorer" color={TEXT.muted} external>
              Explore the Inner Compass interactively (teg-blue.com)
            </NavItem>
          </ul>
        </section>

      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Models", url: "/models" },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "The Emotional Somatic Cycle | TEG-Blue Research",
              url: "https://teg-blue.org/models",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ─── HELPER COMPONENTS ────────────────────────────────────

function StageStep({ number, title, model, children }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        padding: "16px 20px",
        background: hexToRgba(P.B, 0.03),
        borderRadius: RADIUS.md,
        borderLeft: `3px solid ${hexToRgba(P.B, 0.25)}`,
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: hexToRgba(P.B, 0.1),
          color: P.B,
          fontSize: 13,
          fontWeight: 700,
          fontFamily: FONT.mono,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {number}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <h4 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, margin: 0 }}>
            {title}
          </h4>
          {model && (
            <Link
              href={model.href}
              style={{
                fontSize: 10,
                fontWeight: 600,
                fontFamily: FONT.mono,
                padding: "2px 8px",
                borderRadius: 100,
                background: hexToRgba(P.B, 0.1),
                color: P.B,
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {model.id}
            </Link>
          )}
        </div>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
          {children}
        </p>
      </div>
    </div>
  );
}

function ModelTag({ id, href }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <Link
        href={href}
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontFamily: FONT.mono,
          padding: "3px 10px",
          borderRadius: 100,
          background: hexToRgba(P.B, 0.1),
          color: P.B,
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {id}
      </Link>
    </div>
  );
}

function CascadeItem({ title, children }) {
  return (
    <div
      style={{
        padding: "12px 16px",
        marginBottom: 8,
        background: hexToRgba(P.B, 0.03),
        borderRadius: RADIUS.sm,
        borderLeft: `2px solid ${hexToRgba(P.B, 0.2)}`,
      }}
    >
      <p style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, margin: "0 0 4px" }}>
        {title}
      </p>
      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
        {children}
      </p>
    </div>
  );
}

function ConditionCard({ title, color, children }) {
  return (
    <div
      style={{
        padding: "16px 20px",
        background: hexToRgba(color, 0.04),
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(color, 0.12)}`,
        borderLeft: `3px solid ${hexToRgba(color, 0.4)}`,
      }}
    >
      <p style={{ fontSize: 13, fontWeight: 600, color: color, margin: "0 0 8px" }}>
        {title}
      </p>
      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
        {children}
      </p>
    </div>
  );
}

function ModelEntryCard({ id, title, role, question, stage, description, color, href }) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        textDecoration: "none",
        padding: "16px 20px",
        background: hexToRgba(color, 0.04),
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(color, 0.12)}`,
        borderLeft: `4px solid ${color}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 700, fontFamily: FONT.mono, color }}>
          {id}
        </span>
        <span style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary }}>
          {title}
        </span>
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            fontFamily: FONT.mono,
            padding: "2px 8px",
            borderRadius: 100,
            background: hexToRgba(color, 0.1),
            color,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {role}
        </span>
      </div>
      <p style={{ fontSize: 12, fontWeight: 500, fontFamily: FONT.mono, color: TEXT.muted, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        Maps: {stage}
      </p>
      <p style={{ fontSize: 14, fontWeight: 500, color, fontStyle: "italic", margin: "0 0 8px" }}>
        {question}
      </p>
      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
        {description}
      </p>
    </Link>
  );
}

function FrameworkArcCard({ arc, range, description, color }) {
  return (
    <div
      style={{
        padding: "14px 16px",
        background: hexToRgba(color, 0.04),
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(color, 0.12)}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <span style={{ fontSize: 11, fontWeight: 600, fontFamily: FONT.mono, color }}>
          {range}
        </span>
        <span style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary }}>
          {arc}
        </span>
      </div>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

function NavItem({ href, color, external, children }) {
  const style = {
    fontSize: 13,
    color,
    textDecoration: "none",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 8,
  };

  const arrow = <span style={{ fontSize: 11, opacity: 0.6 }}>→</span>;

  return (
    <li>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
          {arrow} {children}
        </a>
      ) : (
        <Link href={href} style={style}>
          {arrow} {children}
        </Link>
      )}
    </li>
  );
}
