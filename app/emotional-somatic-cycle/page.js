import Link from "next/link";
import dynamic from "next/dynamic";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, PATTERN, RADIUS,
  DIAGRAM, hexToRgba,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, PageLayout,
  ExpandableSection, ESCFlowDiagram,
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

const PAGE_COLOR = DIAGRAM.primary;
const BREAK_COLOR = DIAGRAM.break;
const linkStyle = { color: PAGE_COLOR, textDecoration: "none" };

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
    canonical: "https://teg-blue.org/emotional-somatic-cycle",
  },
  openGraph: {
    title: "The Emotional Somatic Cycle | TEG-Blue Research",
    description:
      "The repeating biological sequence the nervous system runs — from signal through state through restoration or incompletion.",
    url: "https://teg-blue.org/emotional-somatic-cycle",
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

export default function EmotionalSomaticCyclePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/emotional-somatic-cycle" />

      <PageLayout
        header={
          <ModelHero
            badge="THE EMOTIONAL SOMATIC CYCLE"
            title="The Emotional Somatic Cycle"
            subtitle="Detection → Signal → State → Restoration or Incompletion"
            subtitleStyle={{ fontFamily: FONT.diagram }}
            description="The Emotional Somatic System and the Cognitive-Logical System run a repeating biological sequence together. The nervous system detects, evaluates, generates a physiological response, and reorganises into a different configuration. Whether that sequence completes — or remains unresolved — determines what the person can perceive, think, feel, and do."
            color={PAGE_COLOR}
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
            PATHWAY OVERVIEW — all stages at a glance
            ════════════════════════════════════════════════════ */}

        <section style={{ marginBottom: 48 }}>
          <h3 style={{ ...conceptHeadingStyle, marginBottom: 12 }}>The Complete Pathway</h3>
          <p style={{ ...proseStyle, marginBottom: 20 }}>
            Every stage of the Emotional Somatic Cycle — from physiological baseline through detection, signal, and state activation to the branching point that determines whether the cycle completes or the activation remains unresolved.
          </p>
          <ESCFlowDiagram />
        </section>

        {/* ════════════════════════════════════════════════════
            TABLE OF CONTENTS
            ════════════════════════════════════════════════════ */}

        <nav style={{
          marginBottom: 48,
          padding: "16px 20px",
          background: hexToRgba(PAGE_COLOR, 0.03),
          borderRadius: RADIUS.md,
          border: `1px solid ${hexToRgba(PAGE_COLOR, 0.1)}`,
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <TOCItem number="0" title="Physiological Baseline" anchor="#baseline"
              desc="The nervous system at rest. Resources available, not deployed. The start and endpoint of the cycle." />
            <TOCItem number="1" title="Safety-Threat Evaluation" anchor="#safety-threat"
              desc="The sensory periphery detects, the nervous system evaluates for safety or threat. Automatic, continuous, and complete before the CLS registers anything changed." />
            <TOCItem number="2" title="Signal Generation" anchor="#signal-generation"
              desc="The nervous system generates a physiological response pattern encoding what was detected. Each pattern is distinct — a physiological finding, not an opinion." />
            <TOCItem number="3" title="State Activation" anchor="#state-activation"
              desc="The nervous system reorganises into a different physiological configuration. The current position on the gradient determines what the person can perceive, think, feel, and learn." />
            <TOCItem number="◇" title="The Branching Point" anchor="#branching-point"
              desc="Whether the CLS can feel what the ESS is doing. The biological architecture connecting the two systems determines which path the cycle follows." />
            <TOCDivider />
            <TOCItem number="A" title="Path A — Completion" anchor="#path-a" color={PAGE_COLOR}
              desc="The mobilised resources are expended and the restoration sequence runs to its endpoint. The nervous system returns to physiological baseline." />
            <TOCItem number="B" title="Path B — The Cascade" anchor="#path-b" color={BREAK_COLOR}
              desc="The CLS overrides the ESS signal. The restoration sequence does not complete. Unresolved activation accumulates, the baseline rises, and the cycle repeats from a higher floor." />
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════
            STAGE SECTIONS — anchor targets for the TOC
            ════════════════════════════════════════════════════ */}

        <section id="baseline" style={{ marginBottom: 24, scrollMarginTop: 80 }}>
          <StageSection number="0" title="Physiological Baseline">
            The nervous system at rest. Cortisol at resting level. Muscles at resting tension. Heart rate at resting pace. The HPA axis standing down. Not numb, not inactive — ready. The body{"'"}s resources available, not deployed. Physiological baseline is the start and endpoint of the Emotional Somatic Cycle. In Path A, the restoration sequence runs to its endpoint and the nervous system returns here. In Path B, the baseline shifts upward — the resting activation level itself changes as unresolved physiological activation accumulates.
          </StageSection>
        </section>

        <section id="safety-threat" style={{ marginBottom: 24, scrollMarginTop: 80 }}>
          <StageSection number="1" title="Safety-Threat Evaluation" model={{ id: "M1", href: "/model/m1-emotions-as-signals" }}>
            The sensory periphery detects, the nervous system evaluates for safety or threat. Five channels feed in simultaneously — eyes, ears, nose, gut, skin — below conscious awareness. The evaluation is automatic, continuous, and operates at millisecond speed: the amygdala fires in 12 milliseconds. A full safety-threat evaluation is complete before the CLS has assembled a single thought. This evaluation runs 100% of the time. It is not triggered by events — it is the nervous system{"'"}s ongoing read of the environment and the body{"'"}s own internal state.
          </StageSection>
        </section>

        <section id="signal-generation" style={{ marginBottom: 24, scrollMarginTop: 80 }}>
          <StageSection number="2" title="Signal Generation" model={{ id: "M1", href: "/model/m1-emotions-as-signals" }}>
            The nervous system generates a physiological response pattern — hormonal, neurochemical, muscular — encoding a finding about what was detected. This response pattern is biological information. It carries a specific message: what was detected, what matters, what the body should do. Each pattern is distinct. The hormonal, neurochemical, and muscular configuration the nervous system generates for a boundary crossing is different from the configuration it generates for a loss, a threat, or a moment of safety. This is what the nervous system produces as an emotion — a physiological finding. The feeling is the CLS{"'"}s registration of what the ESS already generated.
          </StageSection>
        </section>

        <section id="state-activation" style={{ marginBottom: 24, scrollMarginTop: 80 }}>
          <StageSection number="3" title="State Activation" model={{ id: "M2", href: "/model/m2-nervous-system-states" }}>
            The nervous system reorganises into a different physiological configuration in response to the signal. Perception narrows or widens. Cognitive flexibility increases or decreases. Empathic capacity opens or closes. Muscle tension redistributes. Sensory filtering adjusts. The body configures itself for what the evaluation determined the situation requires. The configuration moves along a continuous physiological gradient — from parasympathetic-dominant states of engagement and broader perception through sympathetic activation and defensive mobilisation. The current position on this gradient determines what the person can perceive, think, feel, and learn.
          </StageSection>
        </section>

        <section id="branching-point" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <StageSection number="◇" title="The Branching Point" model={{ id: "M4", href: "/model/m4-awareness-capacities" }}>
            Everything above happened in milliseconds. The ESS detected, evaluated, generated a physiological response, and shifted the nervous system{"'"}s configuration before the CLS registered that anything changed. Now the CLS catches up. Whether the CLS can feel what the ESS is doing — whether it can receive the physiological signals the ESS has generated — determines everything that follows. When the CLS receives the signal, the person knows what fired and why, and the body can complete its restoration sequence. When the CLS cannot receive the signal — when the biological architecture connecting the two systems is unavailable — the CLS overrides: it manages, plans, pushes through, narrates, without knowing there is a physiological signal to receive.
          </StageSection>
        </section>

        {/* ════════════════════════════════════════════════════
            PATH A — THE COMPLETED PATHWAY
            ════════════════════════════════════════════════════ */}

        <section id="path-a" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <PathHeader label="Path A" title="The Completed Pathway" color={PAGE_COLOR} />

          <div style={{ marginBottom: 32 }}>
            <h3 style={conceptHeadingStyle}>Mobilisation Response</h3>
            <ModelTag id="M3" href="/model/m3-regulation-capacities" />

            <p style={proseStyle}>
              The mobilised physiological resources are expended — through movement, action, expression, or holding. The body does what the activation mobilised it to do. Stress hormones that were released to fuel action are used. Muscle tension that was organised for response is discharged. The physiological resources deployed during state activation serve their intended function.
            </p>

            <p style={proseStyle}>
              The form depends on what was detected and what state was activated. A boundary crossing may mobilise confrontation or withdrawal. A loss may mobilise conservation and grief. A threat may mobilise flight or fight. A moment of safety may mobilise approach and engagement.
            </p>
          </div>

          <div>
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
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            PATH B — THE INCOMPLETE PATHWAY
            ════════════════════════════════════════════════════ */}

        <section id="path-b" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <PathHeader label="Path B" title="The Incomplete Pathway" color={BREAK_COLOR} />

          <div style={{ marginBottom: 32 }}>
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
          </div>

          <div style={{ marginBottom: 32 }}>
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
          </div>

          <div>
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
                color={PAGE_COLOR}
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
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            WHERE TO GO NEXT
            ════════════════════════════════════════════════════ */}

        <section
          style={{
            marginBottom: 48,
            padding: "20px 24px",
            background: hexToRgba(PAGE_COLOR, 0.04),
            borderRadius: RADIUS.md,
            border: `1px solid ${hexToRgba(PAGE_COLOR, 0.12)}`,
          }}
        >
          <h3 style={{ ...conceptHeadingStyle, marginBottom: 16 }}>Explore the System</h3>

          <p style={{ ...proseStyle, marginBottom: 16 }}>
            Each model maps a different part of the cycle. The frameworks explain why the cycle runs the way it does in a specific person.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
            <ModelLink id="M1" title="Emotions as Signals" role="The Signal Language" href="/model/m1-emotions-as-signals" color={SPECTRUM.azure} />
            <ModelLink id="M2" title="Nervous System States" role="The Instrument" href="/model/m2-nervous-system-states" color={SPECTRUM.azure} />
            <ModelLink id="M3" title="Regulation Capacities" role="The Return Pathway" href="/model/m3-regulation-capacities" color={SPECTRUM.indigo} />
            <ModelLink id="M4" title="Awareness Capacities" role="The Calibration" href="/model/m4-awareness-capacities" color={SPECTRUM.cobalt} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link href="/frameworks-map" style={{ ...linkStyle, fontSize: 13, fontWeight: 500 }}>
              The twelve frameworks — why the cycle runs this way →
            </Link>
            <Link href="/publications/validation-study" style={{ color: TEXT.muted, textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
              Validation study →
            </Link>
            <a href="https://teg-blue.com/compass-explorer" target="_blank" rel="noopener noreferrer" style={{ color: TEXT.muted, textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
              Inner Compass — interactive tool (teg-blue.com) →
            </a>
          </div>
        </section>

      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "The Emotional Somatic Cycle", url: "/emotional-somatic-cycle" },
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
              url: "https://teg-blue.org/emotional-somatic-cycle",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ─── HELPER COMPONENTS ────────────────────────────────────

function TOCItem({ number, title, anchor, desc, color = PAGE_COLOR }) {
  return (
    <a href={anchor} style={{
      display: "flex",
      gap: 12,
      padding: "10px 0",
      borderBottom: `1px solid ${hexToRgba(PAGE_COLOR, 0.06)}`,
      textDecoration: "none",
    }}>
      <span style={{
        width: 22,
        flexShrink: 0,
        textAlign: "center",
        fontSize: 11,
        fontWeight: 600,
        fontFamily: FONT.mono,
        color: hexToRgba(color, 0.6),
        paddingTop: 2,
      }}>
        {number}
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 500, color: TEXT.primary, marginBottom: 3 }}>
          {title}
        </div>
        <div style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.5 }}>
          {desc}
        </div>
      </div>
    </a>
  );
}

function TOCDivider() {
  return <div style={{ height: 1, background: hexToRgba(PAGE_COLOR, 0.12), margin: "4px 0" }} />;
}

function StageSection({ number, title, model, children }) {
  return (
    <div style={{
      display: "flex",
      gap: 14,
      padding: "14px 18px",
      background: hexToRgba(PAGE_COLOR, 0.03),
      borderRadius: RADIUS.md,
      borderLeft: `3px solid ${hexToRgba(PAGE_COLOR, 0.25)}`,
    }}>
      <div style={{
        flexShrink: 0,
        width: 26,
        height: 26,
        borderRadius: number === "◇" ? 4 : "50%",
        background: hexToRgba(PAGE_COLOR, 0.1),
        color: PAGE_COLOR,
        fontSize: 12,
        fontWeight: 700,
        fontFamily: FONT.mono,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {number}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, margin: 0 }}>
            {title}
          </h4>
          {model && (
            <Link href={model.href} style={{
              fontSize: 10, fontWeight: 600, fontFamily: FONT.mono,
              padding: "2px 8px", borderRadius: 100,
              background: hexToRgba(PAGE_COLOR, 0.1), color: PAGE_COLOR,
              textDecoration: "none", letterSpacing: "0.06em",
            }}>
              {model.id} →
            </Link>
          )}
        </div>
        <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {children}
        </p>
      </div>
    </div>
  );
}

function PathHeader({ label, title, color }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 24,
      paddingBottom: 12,
      borderBottom: `2px solid ${hexToRgba(color, 0.3)}`,
    }}>
      <span style={{
        fontSize: 11,
        fontWeight: 700,
        fontFamily: FONT.mono,
        padding: "3px 10px",
        borderRadius: 100,
        background: hexToRgba(color, 0.12),
        color: color,
        letterSpacing: "0.08em",
      }}>
        {label}
      </span>
      <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, margin: 0 }}>
        {title}
      </h2>
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
          background: hexToRgba(PAGE_COLOR, 0.1),
          color: PAGE_COLOR,
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
        background: hexToRgba(BREAK_COLOR, 0.03),
        borderRadius: RADIUS.sm,
        borderLeft: `2px solid ${hexToRgba(BREAK_COLOR, 0.2)}`,
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

function ModelLink({ id, title, role, href, color }) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 12px",
        borderRadius: RADIUS.sm,
        textDecoration: "none",
        background: hexToRgba(color, 0.04),
        border: `1px solid ${hexToRgba(color, 0.1)}`,
      }}
    >
      <span style={{ fontSize: 12, fontWeight: 700, fontFamily: FONT.mono, color }}>{id}</span>
      <span style={{ fontSize: 14, fontWeight: 500, color: TEXT.primary }}>{title}</span>
      <span style={{ fontSize: 11, color: TEXT.muted, fontStyle: "italic" }}>{role}</span>
      <span style={{ marginLeft: "auto", fontSize: 11, color: TEXT.hint }}>→</span>
    </Link>
  );
}
