import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, ModelAnchorStrip,
  ModelPurpose, OperationalStatement,
  ExpandableSection, PageLayout,
} from "@/src/components";
import OpenCycleExplorer from "@/src/components/OpenCycleExplorer";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

const MODEL_COLOR = SPECTRUM.indigo;

const ANCHOR_SECTIONS = [
  { label: "The Sequence", href: "#activation-sequence" },
  { label: "Debris", href: "#debris" },
  { label: "Restoration", href: "#biological-restoration" },
  { label: "Override", href: "#cognitive-override" },
  { label: "Substitutes", href: "#regulation-substitutes" },
  { label: "Shame Loop", href: "#shame-loop" },
  { label: "Thread Forward", href: "#thread-forward" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Regulation Capacities (M3) | TEG-Blue Research",
  description:
    "The third stage of the Emotional Somatic Cycle — what happens after the state activates. The body was designed to complete the cycle. Cognitive override can block it. When the cycle cannot complete, the nervous system searches for substitutes. None of them close the cycle.",
  keywords: [
    "regulation capacities",
    "activation sequence",
    "debris",
    "biological restoration",
    "cognitive override",
    "somatic debt",
    "regulation substitutes",
    "shame loop",
    "stress cycle completion",
    "cortisol clearance",
    "HPA axis",
    "allostatic load",
    "dorsal vagal",
    "co-regulation",
    "cycle completion",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m3-regulation-capacities",
  },
  openGraph: {
    title: "Regulation Capacities — M3 Model | TEG-Blue",
    description:
      "The body was designed to complete the cycle — to clear the activation and return to baseline. What happens when cognition blocks it, and what the nervous system reaches for instead.",
    url: "https://teg-blue.org/model/m3-regulation-capacities",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regulation Capacities — TEG-Blue M3",
    description:
      "The third stage of the Emotional Somatic Cycle. Can the body complete the cycle and return to baseline — or does cognition override the signal?",
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function M3RegulationCapacitiesPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/model/m3-regulation-capacities" />

      <PageLayout
        header={
          <>
            <ModelHero
              badge="MODEL M3"
              title="Regulation Capacities"
              subtitle="The Return Pathway"
              description="The signal fired (M1). The state shifted (M2). The body mobilised. Now: can the body complete the cycle and return to baseline? The nervous system was designed to complete what it started — a precise biological sequence from activation through to clearance. But there is a branching point. When cognition overrides the signal, the cycle stays open. The debris accumulates. And the nervous system begins searching for anything that produces relief."
              coreQuestion="Can the body complete the cycle and return to baseline — and what happens when cognition blocks it?"
              drawsFrom={[
                { label: "M1", href: "/model/m1-emotions-as-signals" },
                { label: "M2", href: "/model/m2-nervous-system-states" },
                { label: "M4", href: "/model/m4-awareness-capacities" },
                { label: "F1", href: "/framework/f1-emotional-gradient" },
              ]}
              color={MODEL_COLOR}
            />
            <ModelAnchorStrip sections={ANCHOR_SECTIONS} color={MODEL_COLOR} />
          </>
        }
      >
        {/* ─── OPEN CYCLE EXPLORER ──────────────────────── */}
        <OpenCycleExplorer />

        <article>
          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <section
            id="core-propositions"
            aria-labelledby="heading-core-propositions"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-core-propositions"
              style={sectionHeadingStyle}
            >
              Core Propositions
            </h2>
            <ModelPurpose color={MODEL_COLOR}>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={propositionItemStyle}>
                  Regulation is not a psychological skill. It is the body completing a sequence already running — stress hormones metabolised, muscles unclenched, neural circuits recovered, the system returning to baseline
                </li>
                <li style={propositionItemStyle}>
                  When the nervous system detects threat, a precise biological cascade runs — hormonal, neurochemical, organ-level — before any conscious thought forms. This cascade was designed to complete
                </li>
                <li style={propositionItemStyle}>
                  Four activation levels produce four distinct restoration requirements — each qualitatively different, not just longer. Mismatching the pathway to the activation level is why generic self-care often fails
                </li>
                <li style={propositionItemStyle}>
                  Some debris can complete alone through the body{"'"}s own processes (somatic). Some requires another regulated nervous system nearby (relational). The type of activation determines the completion channel
                </li>
                <li style={propositionItemStyle}>
                  When the cycle does not complete, the body does not fail. It adapts — accurately — to an environment it has learned is never safe. The baseline shifts. The activation compounds
                </li>
                <li style={propositionItemStyle}>
                  Cognitive override is the branching point. When cognition suppresses the body{"'"}s signal, the cycle stays open. The debris accumulates. M2 showed the state filters reality. M3 shows the override blocks the correction signal. Together they explain why people don{"'"}t know they don{"'"}t know
                </li>
                <li style={propositionItemStyle}>
                  Every regulation substitute — substances, physical intensity, work, screens, controlling others — produces real relief. None produce cycle completion. The distinction is biological: discharge is not completion
                </li>
                <li style={propositionItemStyle}>
                  The completion pathway is still there — outcompeted, not erased. When the conditions exist, the body runs what it was built to run
                </li>
              </ul>
            </ModelPurpose>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 1: HOW THE CYCLE COMPLETES                 */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 1" title="How the Cycle Completes" />

          {/* ─── C0: WHAT REGULATION ACTUALLY IS ──────────── */}
          <section
            id="what-regulation-is"
            aria-labelledby="heading-what-regulation-is"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-what-regulation-is"
              style={sectionHeadingStyle}
            >
              What Regulation Actually Is
            </h2>

            <p style={proseStyle}>
              Commonly understood as: calming down. Managing emotions. Getting oneself under control.
            </p>
            <p style={proseStyle}>
              What the nervous system is actually doing: physical cleanup. Stress hormones metabolised. Muscles unclenched. Inflammatory compounds cleared. Neural circuits recovered. The body returning to its baseline state.
            </p>
            <p style={proseStyle}>
              The word {"\u201C"}regulation{"\u201D"} carries a psychological frame — something done, a skill applied, a choice made. The biology underneath is different. The nervous system doesn{"'"}t regulate the way a person controls a thermostat. It restores the way the body digests. Not by trying harder. By completing a sequence that was already running.
            </p>
            <p style={proseStyle}>
              This distinction matters because it changes everything that follows: what cycle completion requires, why it doesn{"'"}t always happen, and what the nervous system reaches for instead.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Regulation is not what you do to your emotions. It is what your body does after them.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — the body{"'"}s completion mechanism. <strong style={{ color: TEXT.primary }}>Stress cycle completion:</strong> Nagoski & Nagoski (2019) — the stress cycle requires completion, not management. <strong style={{ color: TEXT.primary }}>Emotion suppression:</strong> Gross (1998) — suppression maintains physiological arousal even when expression stops.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The reframe from regulation-as-skill to regulation-as-sequence-completion as the foundational principle. Not {"\u201C"}teach the person to regulate{"\u201D"} but {"\u201C"}provide the conditions for the biological sequence to complete.{"\u201D"}
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C1: THE ACTIVATION SEQUENCE ───────────────── */}
          <section
            id="activation-sequence"
            aria-labelledby="heading-activation-sequence"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-activation-sequence"
              style={sectionHeadingStyle}
            >
              The Activation Sequence
            </h2>

            <p style={proseStyle}>
              The full biological arc — from activation through to cycle completion. Each step is physically real, not abstract.
            </p>

            <h3 style={h3Style}>Threat</h3>
            <p style={proseStyle}>
              Something is detected. Physical, relational, social, or emotional. The amygdala fires within twelve milliseconds — faster than any thought. The system is already responding before the mind has decided whether this is real.
            </p>

            <h3 style={h3Style}>Alert</h3>
            <p style={proseStyle}>
              The HPA axis activates. Cortisol and adrenaline flood the bloodstream. Heart rate increases. Muscles brace. Digestion halts. Blood flow redirects to the limbs. Every organ system shifts to survival configuration.
            </p>

            <h3 style={h3Style}>Resources</h3>
            <p style={proseStyle}>
              The system uses what it mobilised. Fight, flight, freeze, fawn — whatever the threat requires. Energy is spent. The body acts.
            </p>

            <h3 style={h3Style}>Debris</h3>
            <p style={proseStyle}>
              The activation leaves physical residue. Cortisol still circulating. Muscles that braced but didn{"'"}t fully discharge. Neural circuits still mid-loop. Inflammatory compounds produced for the emergency. Measurable, biological, in the body.
            </p>

            <h3 style={h3Style}>Return to Baseline</h3>
            <p style={proseStyle}>
              The body was designed to complete the sequence. The debris clears. The hormones metabolise. The muscles release. The circuits recover. The nervous system returns to its home state. This is biological restoration.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The body was designed to complete the cycle. The sequence has an endpoint. The problem is not the alert — it is when the cycle never completes.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) — the HPA axis and whole-body stress response. <strong style={{ color: TEXT.primary }}>Threat detection:</strong> LeDoux (1996) — amygdala timing: threat detection before conscious processing. <strong style={{ color: TEXT.primary }}>Somatic completion:</strong> Levine (1997) — the completion of the threat response as the substrate of recovery.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The five-stage Activation Sequence as a named, testable sequence with an explicit biological endpoint. Each stage has measurable physiological markers. The identification of cycle completion — not activation — as the clinically relevant variable.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C2: DEBRIS ─────────────────────────────────── */}
          <section
            id="debris"
            aria-labelledby="heading-debris"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-debris"
              style={sectionHeadingStyle}
            >
              Debris
            </h2>

            <p style={proseStyle}>
              What the activation leaves in the body when the cycle hasn{"'"}t completed. Not a feeling. Not a memory. Physical residue — measurable, biological, and still running.
            </p>

            <h3 style={h3Style}>What Debris Actually Is</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 20, maxWidth: 720 }}>
              <li style={listItemStyle}>Cortisol still circulating in the bloodstream (half-life of 20–90 minutes; in chronic states, never fully clears before the next activation)</li>
              <li style={listItemStyle}>Adrenaline metabolites in the tissue</li>
              <li style={listItemStyle}>Pro-inflammatory cytokines produced for the emergency response, not yet cleared</li>
              <li style={listItemStyle}>Muscle fibres that braced and partially released but never fully discharged the stored tension</li>
              <li style={listItemStyle}>The amygdala still sensitised — threshold lowered, ready to fire faster for the next perceived threat</li>
              <li style={listItemStyle}>The HPA axis still running — the hypothalamus still receiving no all-clear signal, so it keeps producing CRH, which keeps producing cortisol</li>
              <li style={listItemStyle}>Neural circuits that activated mid-sequence, didn{"'"}t complete, and are still holding the activation pattern</li>
              <li style={listItemStyle}>Serotonin depletion — the stabilising neurotransmitter drawn down under sustained cortisol</li>
              <li style={listItemStyle}>Oxytocin suppression — the trust and co-regulation chemistry not available</li>
            </ul>

            <p style={proseStyle}>
              Debris is why a regulation attempt that doesn{"'"}t complete the sequence doesn{"'"}t work. The body isn{"'"}t waiting for a decision. It{"'"}s waiting for a biological signal. Until the signal arrives, the debris stays.
            </p>
            <p style={proseStyle}>
              Debris is also why chronic activation compounds. Each incomplete cycle adds to what{"'"}s already there. The next alert fires from an already-elevated baseline — activates faster, reaches higher, requires more to resolve. Over time, the system reorganises around the debris as its normal state. What was designed as a temporary emergency configuration becomes the floor.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Debris is not stress. It is the physical residue of incomplete cycles — still running, still accumulating, still shaping every activation that follows.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen & Stellar (1993) — the cumulative cost of chronic stress adaptation. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) — cortisol dynamics and the HPA axis. <strong style={{ color: TEXT.primary }}>Somatic storage:</strong> van der Kolk (2014) — the body storing activation at the physiological level.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The naming of debris as the specific, measurable residue of incomplete Activation Sequences — not as metaphor but as a physiological inventory. Each component is separately addressable. Cortisol clearance requires time and parasympathetic activation. Muscle tension requires somatic discharge. Amygdala sensitisation requires repeated experiences of safety. This specificity changes the intervention from generic relaxation to targeted sequence completion.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C3: BIOLOGICAL RESTORATION BY MODE ──────────── */}
          <section
            id="biological-restoration"
            aria-labelledby="heading-biological-restoration"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-biological-restoration"
              style={sectionHeadingStyle}
            >
              Biological Restoration by Mode
            </h2>

            <p style={proseStyle}>
              Four activation levels produce four distinct restoration requirements. Each has a physiological mechanism, specific conditions, and a timescale. This maps what genuinely completing the cycle requires at each level — what the body needs, not what the mind thinks it needs.
            </p>

            <h3 style={h3Style}>Safety & Openness — Tending</h3>
            <p style={proseStyle}>
              When the nervous system is at functional baseline and safety is present, no activation sequence is in progress. Restoration at this level is not corrective; it is preventive. The system is being tended, not recovered. Sensory engagement, creative or absorptive activity, walking, making, resting, gentle co-presence. Low demand on the system. What cannot replace it: productivity, stimulation, and achievement are all activation states — substituting activity for tending creates a slow upward drift in baseline that becomes invisible over time.
            </p>

            <h3 style={h3Style}>Threat & Defence — Completing the Sequence</h3>
            <p style={proseStyle}>
              Genuine sympathetic activation — fight or flight engaged, cortisol and adrenaline spiked. The sequence was started. Restoration is its completion: full exhale, physical movement that allows discharge — shaking, walking, swimming. Co-regulation with a safe other. Time without new demands arriving before the current activation has cleared. What cannot replace it: returning to demands too fast restarts the sequence before it completes. The discharge cannot be accelerated — it can only be allowed.
            </p>

            <h3 style={h3Style}>Strategy & Management — Releasing the Override</h3>
            <p style={proseStyle}>
              Cognition has been deliberately suppressing the body{"'"}s emotional signals to enable strategic action. Debris accumulates during this override. Restoration is the release of that override — putting down the cognitive management, allowing the suppressed emotions to surface. Not managing or steering what comes up. What cannot replace it: this restoration cannot happen while the person is still managing. A person who plans their restoration is still in the managing state.
            </p>

            <h3 style={h3Style}>Power & Dominance — The Full Discharge Arc</h3>
            <p style={proseStyle}>
              The most extreme activation position — peak sympathetic arousal, full-body mobilisation, the circuits that carry guilt and care deliberately offline. The debris load is the heaviest. Restoration requires extended rest, minimal demand, full somatic discharge over time, re-engagement with others at low intensity. Allows guilt, grief, relief, and physical exhaustion to move through in sequence. What cannot replace it: returning to high engagement before full discharge restarts the sequence at an incomplete baseline.
            </p>

            {/* Restoration Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>State</div>
                <div style={gridHeaderStyle}>Restoration</div>
                <div style={gridHeaderStyle}>Timescale</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Tending — preventive, not corrective</div>
                <div style={gridCellStyle}>Continuous</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Threat & Defence</div>
                <div style={gridCellStyle}>Completing the sequence — discharge, co-regulation, time</div>
                <div style={gridCellStyle}>20 min – 2 hours</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Strategy & Management</div>
                <div style={gridCellStyle}>Releasing the cognitive override</div>
                <div style={gridCellStyle}>2–8 hours</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power & Dominance</div>
                <div style={gridCellStyle}>Full discharge arc from maximum activation</div>
                <div style={gridCellStyle}>24–72+ hours</div>
              </div>
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Vagal regulation:</strong> Porges (2011) — vagal brake and parasympathetic restoration. <strong style={{ color: TEXT.primary }}>Somatic completion:</strong> Levine (1997) — the completion of the threat response through somatic discharge. <strong style={{ color: TEXT.primary }}>Stress cycle:</strong> Nagoski & Nagoski (2019) — the stress cycle requiring completion, not suppression.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Biological Restoration by mode as a typology matching activation level to the conditions and timescale required for the cycle to complete — making precise what {"\u201C"}self-care{"\u201D"} leaves vague. Each restoration type is qualitatively different, not just longer. Mismatching the pathway to the activation level is why {"\u201C"}self-care{"\u201D"} often fails.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C4: TWO COMPLETION PATHWAYS ─────────────────── */}
          <section
            id="two-completion-pathways"
            aria-labelledby="heading-two-pathways"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-two-pathways"
              style={sectionHeadingStyle}
            >
              Two Completion Pathways
            </h2>

            <p style={proseStyle}>
              Not all debris clears through the same channel. Two distinct restoration pathways exist, and confusing them is one of the most common reasons the cycle fails to complete.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Somatic Restoration</strong> is about the body{"'"}s state — threat, boundary, startle, energy. This debris can complete alone, through the body{"'"}s own processes: movement, shaking, breathing, sleep, crying, stillness. No other person is required for the sequence to close.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Relational Restoration</strong> is about belonging — shame, guilt, rejection, abandonment. This debris cannot complete alone. It requires co-regulation: another nervous system that is present, regulated, and genuinely non-coercive. The body needs the same channel through which the activation arrived — another person.
            </p>
            <p style={proseStyle}>
              Safety & Openness restoration is entirely somatic. Threat & Defence is primarily somatic. Strategy & Management begins somatically but may require relational safety to complete if the suppressed content includes relational material. Power & Dominance almost always requires relational completion — the guilt, grief, and resonance re-engagement that constitute the full discharge arc cannot arrive without genuine relational contact.
            </p>
            <p style={proseStyle}>
              This is why relational restoration is both the most powerful form of completion and the most vulnerable. It requires what chronic states systematically destroy: genuine safety with another person.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Co-regulation:</strong> Porges (2011) — co-regulation as the mammalian primary regulation pathway. <strong style={{ color: TEXT.primary }}>Relational regulation:</strong> Schore (2003) — right-brain relational regulation in development. <strong style={{ color: TEXT.primary }}>Attachment:</strong> Bowlby (1969) — attachment as the relational regulation system.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The systematic distinction between somatic and relational restoration mapped onto the four activation levels. The identification that chronic states specifically degrade the relational pathway — the most powerful form of completion — through the very substitutes that replaced it.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 2: WHAT BLOCKS CYCLE COMPLETION             */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 2" title="What Blocks Cycle Completion" />

          {/* ─── C5: WHEN THE CYCLE DOESN'T COMPLETE ─────────── */}
          <section
            id="cycle-incomplete"
            aria-labelledby="heading-cycle-incomplete"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-cycle-incomplete"
              style={sectionHeadingStyle}
            >
              When the Cycle Doesn{"'"}t Complete
            </h2>

            <p style={proseStyle}>
              Completing the cycle and reaching baseline is not guaranteed. It requires specific conditions: sufficient safety, time, and in many cases, another regulated nervous system nearby. When those conditions are absent, the sequence stays open.
            </p>
            <p style={proseStyle}>
              When the cycle doesn{"'"}t complete, the body doesn{"'"}t reset. It carries the activation forward. The baseline shifts upward. What was designed as a temporary emergency configuration becomes the operating state.
            </p>
            <p style={proseStyle}>
              The nervous system recalibrates. An amygdala that has fired repeatedly without full recovery learns to fire faster. A stress system that has never received the all-clear signal becomes calibrated to the assumption that threat is continuous. The system doesn{"'"}t malfunction. It adapts — accurately, to the environment it{"'"}s actually in.
            </p>

            <h3 style={h3Style}>The Consequences of Recalibration</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 20, maxWidth: 720 }}>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>The window of activation narrows.</strong> Smaller triggers produce larger responses.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Recovery time lengthens.</strong> What used to resolve in hours takes days, or doesn{"'"}t fully resolve at all.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Perception narrows.</strong> Cognitive capacity to see the full picture reduces as the system prioritises threat-relevant processing.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Relational capacity reduces.</strong> The capacities that allow connection and repair require biological safety resources; when those are chronically depleted, connection becomes biologically more expensive.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>The body loses access to itself.</strong> The interoceptive signals that would normally inform the person become harder to read accurately as chronic activation distorts the signal-to-noise ratio.</li>
            </ul>

            <p style={proseStyle}>
              This is the physiological substrate of the stuck state — the nervous system locked on a single position, unable to move through the gradient and reach baseline. The person is not stuck because they lack insight or motivation. They are stuck because the nervous system has reorganised around an unresolved state.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              When the cycle doesn{"'"}t complete — when the body never reaches baseline — it doesn{"'"}t fail. It adapts. Accurately. To an environment it has learned is never safe.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen (2000) — the physiological cost of chronic adaptation. <strong style={{ color: TEXT.primary }}>Chronic stress:</strong> Sapolsky (2004) — chronic stress physiology and baseline recalibration. <strong style={{ color: TEXT.primary }}>Interoception:</strong> Craig (2002) — chronic activation impairing interoceptive accuracy.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The recalibration mapped as a specific five-consequence process — each consequence measurable and independently addressable. The reframe: the stuck state is not a failure of the person. It is the nervous system adapting accurately to conditions where the cycle was never allowed to complete.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C6: WHEN THE BODY GOES SILENT ───────────────── */}
          <section
            id="body-goes-silent"
            aria-labelledby="heading-body-goes-silent"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-body-goes-silent"
              style={sectionHeadingStyle}
            >
              When the Body Goes Silent
            </h2>

            <p style={proseStyle}>
              When the cycle has not completed across enough repetitions, across enough time, the nervous system can shift from chronic high-activation to something different: the disappearance of signal entirely.
            </p>
            <p style={proseStyle}>
              The body stops broadcasting. Not because the debris has cleared — it hasn{"'"}t. But because the alert system, finding no resolution across repeated cycles, begins to suppress its own output.
            </p>

            <h3 style={h3Style}>What This Produces</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 20, maxWidth: 720 }}>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Emotional flatness.</strong> Not the absence of emotion — the absence of access to it. The signal is still present at the physiological level. The person cannot feel it.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Loss of interoceptive contact.</strong> The body{"'"}s internal communications — hunger, tension, desire, dread — become unreliable or absent. The person reports feeling nothing, or not knowing what they feel. This is not resistance. It is the degradation of the signal channel itself.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Anhedonia.</strong> The dopaminergic system, chronically depleted by repeated activation-without-resolution, stops registering reward.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Social withdrawal that doesn{"'"}t register as withdrawal.</strong> Connection requires biological resources the system no longer has.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>A body that is cold to itself.</strong> The person moves through their life without registering it from the inside. Functional. Present. Absent.</li>
            </ul>

            <p style={proseStyle}>
              This is the dorsal vagal state — the oldest branch of the vagus nerve, the immobilisation response the nervous system reaches for when neither fight, flight, nor fawn has produced safety across sustained time.
            </p>
            <p style={proseStyle}>
              The person in this state is not without activation. The debris is still there, still accumulating. What{"'"}s gone is the felt sense of it — and with that, the signal the body would need in order to begin completing the cycle.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The alarm doesn{"'"}t always get louder. Sometimes the body stops letting itself hear it. The signal goes flat. The debris remains.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — dorsal vagal state as the immobilisation response. <strong style={{ color: TEXT.primary }}>Interoception:</strong> Craig (2002) — interoceptive accuracy degrading under chronic stress. <strong style={{ color: TEXT.primary }}>Dissociation:</strong> van der Kolk (2014) — dissociation and the disappearance of felt experience under chronic activation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The distinction between genuine baseline and dorsal vagal collapse as a clinically critical differential. The person who presents as calm, functional, and emotionally flat may have the highest debris load. The intervention is not activation (which adds to the load) but slow, safe re-contact with the body{"'"}s own signals.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C7: COGNITIVE OVERRIDE ──────────────────────── */}
          <section
            id="cognitive-override"
            aria-labelledby="heading-cognitive-override"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-cognitive-override"
              style={sectionHeadingStyle}
            >
              Cognitive Override — The Branching Point
            </h2>

            <p style={proseStyle}>
              The signal fired (M1). The state shifted (M2). The body mobilised. The body{"'"}s designed completion mechanism exists — the sequence knows how to run. Now: does the person allow it?
            </p>
            <p style={proseStyle}>
              Cognitive override is what happens when cognition decides the emotional signal is irrelevant and suppresses access to it. The mind says: {"\u201C"}I don{"'"}t have time for this.{"\u201D"} {"\u201C"}This isn{"'"}t important.{"\u201D"} {"\u201C"}I need to keep going.{"\u201D"} The signal is overridden. The cycle stays open. Cortisol continues releasing. The body receives no biological resolution.
            </p>
            <p style={proseStyle}>
              The override is not a single moment. It is a learned pattern — often developmental, often structural. A person who grew up in an environment where emotional signals were punished, ignored, or dangerous learns to override automatically. The suppression becomes invisible. It operates below conscious awareness, just like the original signal did.
            </p>
            <p style={proseStyle}>
              This is the mechanism that connects M2 and M3. M2 showed that the state changes what the person can see — the filter is pre-cognitive. M3 shows how the person learned to ignore the signal the body is generating to tell them the filter is engaged. The state filters reality. The override prevents the correction from arriving. Together they explain why people don{"'"}t know they don{"'"}t know.
            </p>

            <h3 style={h3Style}>Somatic Debt</h3>
            <p style={proseStyle}>
              The override has a physiological cost. Suppression is not free. When cognition overrides the body{"'"}s emotional signals chronically, the suppression itself consumes physiological resources continuously. The prefrontal cortex maintains the override. Noradrenaline sustains the effort. The limbic signals continue to fire underneath — the override doesn{"'"}t silence them, it outcompetes them. The competition is metabolically expensive.
            </p>
            <p style={proseStyle}>
              This cost — somatic debt — accumulates invisibly because the override is experienced as stability, not effort. It surfaces eventually as collapse, physical illness, or emotional flooding that seems to come from nowhere.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              What if the difficulty is not that the person cannot regulate — but that cognition learned to block the signal the body needs in order to begin?
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Emotion suppression:</strong> Gross (1998) — suppression maintains physiological arousal while reducing expression. <strong style={{ color: TEXT.primary }}>Dual-process theory:</strong> Kahneman (2011) — System 2 overriding System 1. <strong style={{ color: TEXT.primary }}>Somatic memory:</strong> van der Kolk (2014) — the body continuing to score what the mind has overridden.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Cognitive override identified as the specific branching point in the Emotional Somatic Cycle — the mechanism that determines whether the body{"'"}s designed completion sequence runs or stays open. Somatic debt as the named, measurable cost of sustained override — distinct from debris (residue of incomplete cycles) and from allostatic load (systemic wear from chronic stress). The M2+M3 connection: state filters reality (M2), override blocks the correction signal (M3), together explaining why people don{"'"}t know they don{"'"}t know.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 3: WHAT THE NERVOUS SYSTEM REACHES FOR      */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 3" title="What the Nervous System Reaches For Instead" />

          {/* ─── C8: REGULATION SUBSTITUTES ──────────────────── */}
          <section
            id="regulation-substitutes"
            aria-labelledby="heading-regulation-substitutes"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-regulation-substitutes"
              style={sectionHeadingStyle}
            >
              Regulation Substitutes
            </h2>

            <p style={proseStyle}>
              When the pathway for completing the cycle is blocked — whether by cognitive override, by conditions that were never safe enough, or by a nervous system that never learned to complete the cycle — the body doesn{"'"}t wait. It searches for anything that produces the neurochemical shift. The mechanism is identical across all substitutes: temporary discharge, no resolution, escalating need.
            </p>

            <h3 style={h3Style}>Non-Relational Substitutes</h3>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Substances.</strong> Alcohol, stimulants, opioids, cannabis — each acts on a specific part of the stress response. Each works. Each requires more over time, because the underlying sequences are still open.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Physical intensity.</strong> Compulsive exercise, risk-taking, extreme sports. High-intensity physical states produce the discharge the stress response was designed to complete through movement. The relief is real. The sequence stays open.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Work, achievement, productivity.</strong> The nervous system experiences goal pursuit as controllability, and controllability as safety. When the work stops, the debris is still there.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Conscious self-soothing.</strong> Exercise chosen for intensity rather than completion. Meditation chased for the calm rather than entered for what{"'"}s there. Breathwork, cold exposure. Each capable of producing real physiological shift. Each, when the pathway for completing the cycle is blocked, used as discharge. The body doesn{"'"}t distinguish the source. It distinguishes only whether the sequence completed.
            </p>

            <h3 style={h3Style}>Substitutes by Chronic State</h3>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 1.5fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>Chronic State</div>
                <div style={gridHeaderStyle}>Typical Substitutes</div>
                <div style={gridHeaderStyle}>Mechanism</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Chronic Safety & Openness</div>
                <div style={gridCellStyle}>Food, numbing substances, screens, over-availability, compulsive helping</div>
                <div style={gridCellStyle}>Mutes the alarm without addressing what triggered it</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Chronic Threat & Defence</div>
                <div style={gridCellStyle}>Stimulants, intense exercise, alcohol, withdrawal into controlled environments</div>
                <div style={gridCellStyle}>Overrides the alarm with a stronger sensation or removes inputs</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Chronic Strategy & Management</div>
                <div style={gridCellStyle}>Work, planning, information, substances that sharpen focus or dull the emotional register</div>
                <div style={gridCellStyle}>Maintains the suppression of limbic signals</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Chronic Power & Dominance</div>
                <div style={gridCellStyle}>Intense physical activity, substances that amplify certainty, risk, high-stimulus environments</div>
                <div style={gridCellStyle}>Channels sympathetic activation into output rather than discharge</div>
              </div>
            </div>

            <h3 style={h3Style}>Relational Substitutes — The Strongest Category</h3>
            <p style={proseStyle}>
              When the substitute involves other people — controlling, criticising, managing, punishing — the relief is stronger. The mechanism: the nervous system{"'"}s most potent regulation pathway is relational. Genuine co-regulation is the primary pathway through which mammalian nervous systems complete the cycle. When that pathway is co-opted into control, the system receives a high-potency activation of the co-regulation circuitry without the safety conditions that make it restorative. The relief is real and immediate. The cost is structural.
            </p>
            <p style={proseStyle}>
              Dominant behaviour produces a measurable neurochemical shift: a temporary cortisol drop, a testosterone spike, brief relief. The nervous system perceives controllability as safety. Three episodes of activation resolved through controlling others is enough for conditioning to begin.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The substitute changes. The mechanism doesn{"'"}t. Temporary discharge. No resolution. The bar rises. The alarm stays on.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Addiction neuroscience:</strong> Koob & Le Moal (2001) — neurobiological mechanisms of tolerance and escalation. <strong style={{ color: TEXT.primary }}>Dominance and hormones:</strong> Archer (2006); Mazur & Booth (1998) — testosterone-cortisol dynamics in dominant behaviour. <strong style={{ color: TEXT.primary }}>Controllability:</strong> Maier & Seligman (2016) — perceived controllability modulating the stress response. <strong style={{ color: TEXT.primary }}>Incentive sensitisation:</strong> Robinson & Berridge (2003) — incentive sensitisation in addiction.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The unified regulation substitute mechanism — showing substances, physical intensity, work, screens, conscious self-soothing, and domination as the same biological search at different intensity levels. The dissolution of the boundary between {"\u201C"}good coping{"\u201D"} and {"\u201C"}bad coping{"\u201D"} — the question is not whether the substitute is socially acceptable, but whether the sequence is completing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C9: THE SHAME LOOP ──────────────────────────── */}
          <section
            id="shame-loop"
            aria-labelledby="heading-shame-loop"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-shame-loop"
              style={sectionHeadingStyle}
            >
              The Shame Loop
            </h2>

            <p style={proseStyle}>
              When regulation is achieved through controlling, criticising, or harming others, a specific secondary mechanism activates that does not exist with non-relational substitutes.
            </p>
            <p style={proseStyle}>
              The action generates a shame signal. The person did something — controlled, criticised, punished — and the nervous system registers it. In a fluid state, shame is a useful signal: it says {"\u201C"}misalignment happened, repair is needed.{"\u201D"} The person feels it, names it, and uses it to correct.
            </p>
            <p style={proseStyle}>
              In a chronic state, the signal arrives but the equipment that would process it is not available. The capacity to feel what the harm did to the other person — to feel their experience from the inside — is offline. The capacity to feel one{"'"}s own role in it — to hold {"\u201C"}I did this{"\u201D"} without collapsing or defending — is offline. Without those two pathways, shame cannot move through the sequence it requires. It accumulates as debris.
            </p>
            <p style={proseStyle}>
              But it doesn{"'"}t just accumulate. It reinforces the mode that generated it. The unprocessed shame becomes background activation. That activation increases the pressure for relief. The person reaches for the same substitute — the only one strong enough to move the needle. The action generates more shame. The shame reinforces the need. The loop is self-sealing.
            </p>

            <h3 style={h3Style}>The Mode Destroys Its Own Return Pathway</h3>
            <p style={proseStyle}>
              Genuine restoration for all chronic states would ultimately require safe relational contact — real co-regulation with someone genuinely present. The relational substitute systematically degrades the relational environment. Each episode of control, punishment, or harm makes the people in proximity less safe, less honest, and less genuinely available. The system progressively forecloses the only genuine option.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The Shame Loop is uncloseable — not because the person won{"'"}t stop, but because the capacity to feel what the action costs is structurally unavailable.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Moral emotions:</strong> Tangney, Stuewig & Mashek (2007) — shame as a moral emotion requiring specific processing capacities. <strong style={{ color: TEXT.primary }}>Shame regulation:</strong> Schore (2003) — shame regulation requiring relational safety. <strong style={{ color: TEXT.primary }}>Co-regulation:</strong> Porges (2011) — co-regulation as the mammalian primary restoration pathway.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The Shame Loop as a named, self-reinforcing mechanism specific to relational regulation substitutes. The identification that the mode destroys the pathway it would need to complete the cycle: the strongest substitute progressively destroys the relational environment that would be needed for genuine restoration.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C10: TEMPORARY RELIEF VS RESTORATION ────────── */}
          <section
            id="temporary-relief"
            aria-labelledby="heading-temporary-relief"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-temporary-relief"
              style={sectionHeadingStyle}
            >
              Temporary Relief vs Restoration
            </h2>

            <p style={proseStyle}>
              One distinction runs through every regulation substitute the nervous system reaches for. It is the key to understanding why substitutes escalate.
            </p>
            <p style={proseStyle}>
              Momentary relief can reduce intensity for a while, but it does not clear the stress chemicals already in the body. Restoration helps the body process and clear the excess activation left after a stress response. When that activation is not cleared, the body starts from a more activated state the next time — less room to handle new stress.
            </p>
            <p style={proseStyle}>
              In fluid states, the two converge — the same action that produces relief also clears the debris and brings the baseline back down. Relief and restoration are the same process.
            </p>
            <p style={proseStyle}>
              In chronic states, they split permanently. Regulation substitutes produce genuine relief — felt intensity drops — but the accumulated activation continues to rise. The gap between resting activation and peak narrows. Over time, the system requires increasing doses of the substitute to produce the same relief from a progressively more activated starting point.
            </p>
            <p style={proseStyle}>
              At the extreme end of this trajectory, something different happens. The combination of stimuli available at the far end — domination, violation, the exercise of absolute power — produces the most potent neurochemical event the nervous system can access. Dopamine surges. Testosterone spikes. Cortisol suppresses. The body registers: <em>finished.</em>
            </p>
            <p style={proseStyle}>
              But the sequence did not run. Cortisol was suppressed by intensity — not cleared by completion. It rebounds. The HPA axis never received the hippocampal all-clear. The body produces the signature of completion without running the sequence. The interval between episodes shortens even as intensity escalates — the proof that baseline was never reached.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Momentary relief and genuine restoration feel the same in the moment. The difference is whether the stress chemicals are actually cleared.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Stress cycle completion:</strong> Nagoski & Nagoski (2019) — the stress cycle requiring completion, not reduction of felt intensity. <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen (2000) — the accumulation of uncleared activation. <strong style={{ color: TEXT.primary }}>Addiction neuroscience:</strong> Koob & Le Moal (2001) — the allostatic model of addiction: tolerance, escalation, rising baseline.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The temporary relief vs. restoration distinction as the single most precise diagnostic question for regulation assessment: after the strategy, does the baseline actually drop back — or is it slightly higher each time? Temporary relief mistaken for restoration as a named phenomenon at the extreme end: the body producing the signature of completion without running the sequence.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C11: WHY SUBSTITUTES ESCALATE ───────────────── */}
          <section
            id="why-substitutes-escalate"
            aria-labelledby="heading-why-substitutes-escalate"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-why-substitutes-escalate"
              style={sectionHeadingStyle}
            >
              Why Substitutes Escalate — And Why None Resolves
            </h2>

            <p style={proseStyle}>
              The escalation is not a moral failing. It is a physiological inevitability built into the mechanism.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Discharge is not cycle completion.</strong> Discharge is the release of mobilised energy. It reduces the felt pressure. It temporarily suppresses parts of the stress response. Discharge is real. It is not resolution.
            </p>
            <p style={proseStyle}>
              Completing the cycle and reaching baseline requires the specific biological sequence to run: the discharge phase, the parasympathetic restoration, the HPA negative feedback loop, cortisol clearance, the restoration of serotonin and oxytocin, the hippocampus encoding the event as finished. These are physiological events. They require specific inputs — somatic and relational.
            </p>

            <h3 style={h3Style}>Why the Alarm Stays On</h3>
            <p style={proseStyle}>
              The debris is still there. The cortisol wasn{"'"}t cleared. The amygdala is still sensitised. The HPA axis never received the all-clear signal.
            </p>

            <h3 style={h3Style}>Why the Bar Rises</h3>
            <p style={proseStyle}>
              Dopaminergic conditioning means the same input produces less relief over time. The nervous system habituates. More is required to achieve the same reduction.
            </p>

            <h3 style={h3Style}>Why There Is No Internal Brake</h3>
            <p style={proseStyle}>
              The brake that would slow the escalation — the felt sense of what this is costing the person and the people around them — is not available in chronic states. The cost doesn{"'"}t arrive as felt experience. It registers as information to be managed. There is nothing internally that says <em>stop</em> — not because the person decided to ignore it, but because the signal that would carry it is not being received.
            </p>

            <h3 style={h3Style}>The Exit That Isn{"'"}t Built In</h3>
            <p style={proseStyle}>
              The biological completion sequence has a built-in endpoint: cortisol clears, the hippocampus sends the all-clear, the HPA axis stands down. Regulation substitutes have no such endpoint. They have no signal that tells the system: <em>finished.</em> The substitute must repeat because the body is still waiting for what it was always waiting for: the completion the substitute cannot provide.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Discharge is not cycle completion. The body is still waiting for what it was always waiting for: the completion the substitute cannot provide.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Allostatic model:</strong> Koob & Le Moal (2001) — tolerance, escalation, dependence. <strong style={{ color: TEXT.primary }}>Incentive sensitisation:</strong> Robinson & Berridge (2003) — incentive sensitisation independent of subjective pleasure. <strong style={{ color: TEXT.primary }}>Controllability:</strong> Maier & Seligman (2016) — controllability as a modulator of the stress response.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The identification that no regulation substitute contains its own stopping mechanism — contrasted with the biological completion sequence, which does. The discharge-vs-completion distinction as the single question that determines whether a regulation strategy is completing cycles or covering them. The reframe: escalation is not a character deficit but a physiological inevitability when the body{"'"}s designed completion mechanism is unavailable.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 4: THE THREAD FORWARD                       */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 4" title="The Thread Forward" />

          {/* ─── C12: THE THREAD FORWARD ──────────────────────── */}
          <section
            id="thread-forward"
            aria-labelledby="heading-thread-forward"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-thread-forward"
              style={sectionHeadingStyle}
            >
              The Thread Forward
            </h2>

            <p style={proseStyle}>
              M3 sits at the precise point where the escalation arc meets the repair arc.
            </p>
            <p style={proseStyle}>
              The escalation arc: everything the nervous system does <em>instead</em> of completing the cycle, at escalating scales and costs. Developmental substitutes. Cognitive replacements. Collective rules. Worth hierarchies. Perceptual bias. Domination. Each is a regulation attempt. Each produces discharge without resolution. Each traces to the same origin — a nervous system that never learned to complete the cycle and reach baseline.
            </p>
            <p style={proseStyle}>
              The repair arc: everything that makes cycle completion possible again. Developing the capacities that allow the activation to be felt and completed. Creating structural conditions that support rather than suppress it. Transmitting the capacity to complete the cycle to the next generation instead of the substitutes.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The pathway is still there.</strong> The nervous system that has spent years running substitutes still contains the completion sequence — the biological mechanism for clearing the activation and reaching baseline. It was not removed by chronic activation, by accumulated debris, by temporary relief mistaken for restoration, by any of the regulation substitutes the system learned to reach for. The pathway was outcompeted. It was not erased.
            </p>
            <p style={proseStyle}>
              The sequence runs when the conditions exist. Safety, sufficient time, somatic process, another regulated nervous system nearby — these are not psychological achievements. They are biological inputs. When they are present, the body runs what it was built to run.
            </p>
            <p style={proseStyle}>
              A nervous system that has learned to complete the cycle does not only resolve its own activation. It becomes the condition another nervous system needs. Co-regulation is not a technique. It is what one regulated nervous system provides to an unregulated one by proximity. The capacity, once built, transmits — to the next person in contact, to the next generation, instead of the substitutes.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The pathway is still there. The body was built to come home. What changes is not the sequence — it is whether the conditions exist for it to run.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — the innate discharge capacity persisting despite chronic activation. <strong style={{ color: TEXT.primary }}>Co-regulation:</strong> Porges (2011) — co-regulation as the primary mammalian restoration pathway, transmitted relationally. <strong style={{ color: TEXT.primary }}>Intergenerational transmission:</strong> Schore (2003) — the intergenerational transmission of regulatory capacity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  M3{"'"}s position connecting the escalation arc and the repair arc around a single variable: whether the body can complete the cycle and reach baseline. The identification that the completion pathway is outcompeted, not erased — it persists and runs when conditions allow. The transmission principle: a nervous system that learns to complete the cycle becomes the condition another nervous system needs.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── THE FIRST HINT ──────────────────────────── */}
          <section
            id="the-first-hint"
            aria-labelledby="heading-first-hint"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-first-hint"
              style={sectionHeadingStyle}
            >
              What This Model Does Not Yet Answer
            </h2>

            <p style={proseStyle}>
              M3 has mapped the third stage of the Emotional Somatic Cycle — what happens after the state activates. The body was designed to complete the cycle — to clear the activation and reach baseline. Cognitive override can block it. When the cycle cannot complete, the nervous system searches for substitutes. Every substitute produces real relief. None complete the cycle. The debris accumulates. The substitutes escalate. The relational environment degrades.
            </p>
            <p style={proseStyle}>
              But there is a question M3 raises and does not answer:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Some people feel the activation running.</strong> They notice the debris accumulating. They catch the override engaging. They recognise the substitute for what it is — relief, not restoration. Something in them can observe the cycle while it{"'"}s happening.
            </p>
            <p style={proseStyle}>
              Others cannot. They are inside the cycle and have no awareness that they are inside it. The override runs automatically. The substitute feels like resolution. The shame loop operates below detection. They cannot feel what they are doing because the capacity to feel it — to perceive their own internal process while it is active — is not online.
            </p>
            <p style={proseStyle}>
              What determines this difference? What determines whether a person can read their own signals, feel what another person is feeling, and observe their own patterns while they are running? That is M4.
            </p>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="m3-regulation-capacities" type="model" />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <section
            id="where-to-go-next"
            aria-labelledby="heading-where-to-go-next"
            style={{ marginBottom: 32 }}
          >
            <h2 id="heading-where-to-go-next" style={sectionHeadingStyle}>
              Where to Go Next
            </h2>
            <div
              style={{
                background: BG.card,
                borderRadius: 8,
                border: `1px solid ${BORDER.default}`,
                overflow: "hidden",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: BG.surface }}>
                    <th style={navThStyle}>If you want to...</th>
                    <th style={navThStyle}>Go here</th>
                  </tr>
                </thead>
                <tbody>
                  <NavRow
                    label="See the sixteen emotions mapped as biological signals — the input that triggers the activation M3 describes"
                    href="/model/m1-emotions-as-signals"
                    linkText="M1: Emotions as Signals &rarr;"
                  />
                  <NavRow
                    label="Understand the state that shifts after the signal fires — and how it changes what the person can see"
                    href="/model/m2-nervous-system-states"
                    linkText="M2: Nervous System States &rarr;"
                  />
                  <NavRow
                    label="Understand what determines whether the person can feel the cycle running at all"
                    href="/model/m4-awareness-capacities"
                    linkText="M4: Awareness Capacities &rarr;"
                  />
                  <NavRow
                    label="Explore the foundational theory behind the four-state gradient"
                    href="/framework/f1-emotional-gradient"
                    linkText="F1: The Emotional Gradient &rarr;"
                  />
                  <NavRow
                    label="Explore the interactive tools"
                    href="https://teg-blue.com/emotional-tools"
                    linkText="teg-blue.com &rarr;"
                    external
                  />
                </tbody>
              </table>
            </div>
          </section>
        </article>

      </PageLayout>

      <SiteFooter />

      {/* ─── JSON-LD ─────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/model/m3-regulation-capacities#article",
            headline: "Regulation Capacities: The Return Pathway",
            description:
              "The third stage of the Emotional Somatic Cycle — what happens after the state activates. The body was designed to complete the cycle. Cognitive override can block it. When the cycle cannot complete, the nervous system searches for substitutes. None of them close the cycle. Model M3 of the TEG-Blue system.",
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
            datePublished: "2026-03-06",
            dateModified: "2026-03-27",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue Models & Frameworks",
              url: "https://teg-blue.org/models",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/model/m3-regulation-capacities",
            },
            about: [
              { "@type": "Thing", name: "Regulation Capacities" },
              { "@type": "Thing", name: "Activation Sequence" },
              { "@type": "Thing", name: "Debris" },
              { "@type": "Thing", name: "Biological Restoration" },
              { "@type": "Thing", name: "Cognitive Override" },
              { "@type": "Thing", name: "Regulation Substitutes" },
              { "@type": "Thing", name: "Shame Loop" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Why Zebras Don't Get Ulcers (Sapolsky, 2004)" },
              { "@type": "ScholarlyArticle", name: "The Emotional Brain (LeDoux, 1996)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Waking the Tiger (Levine, 1997)" },
              { "@type": "ScholarlyArticle", name: "Burnout (Nagoski & Nagoski, 2019)" },
              { "@type": "ScholarlyArticle", name: "Antecedent- and Response-Focused Emotion Regulation (Gross, 1998)" },
              { "@type": "ScholarlyArticle", name: "Allostasis and Allostatic Load (McEwen, 2000)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Thinking, Fast and Slow (Kahneman, 2011)" },
            ],
            keywords: [
              "regulation capacities",
              "activation sequence",
              "debris",
              "biological restoration",
              "cognitive override",
              "somatic debt",
              "regulation substitutes",
              "shame loop",
              "stress cycle completion",
              "cycle completion",
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
              { name: "The Emotional Somatic System", url: "/models" },
              { name: "M3: Regulation Capacities", url: "/model/m3-regulation-capacities" },
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
                question: "What are Regulation Capacities in the TEG-Blue system?",
                answer:
                  "Regulation Capacities (M3) maps the third stage of the Emotional Somatic Cycle — what happens after the state activates. Regulation is not a psychological skill but the body completing a biological sequence: stress hormones metabolised, muscles unclenched, neural circuits recovered. The model maps what the body was designed to do (the Activation Sequence), what blocks it (cognitive override), what the nervous system reaches for instead (regulation substitutes), and why none of the substitutes close the cycle.",
              },
              {
                question: "What is the Activation Sequence?",
                answer:
                  "The Activation Sequence is a five-stage biological arc: Threat (amygdala fires in 12 milliseconds), Alert (HPA axis activates, cortisol floods), Resources (the body acts — fight, flight, freeze, fawn), Debris (physical residue left behind), and Return to Baseline (the designed endpoint where the body clears the activation). Each stage has measurable physiological markers. The clinically relevant variable is not whether the person activates but whether the cycle completes.",
              },
              {
                question: "What is cognitive override?",
                answer:
                  "Cognitive override is the branching point in the Emotional Somatic Cycle. It is what happens when cognition decides the emotional signal is irrelevant and suppresses access to it. The signal is overridden, but the biological cascade continues — cortisol keeps releasing, the cycle stays open. The override has a physiological cost called somatic debt: the prefrontal cortex maintaining the suppression consumes resources continuously. M2 shows the state filters reality; M3 shows the override blocks the correction signal. Together they explain why people don't know they don't know.",
              },
              {
                question: "What is biological restoration by mode?",
                answer:
                  "M3 maps four qualitatively distinct restoration types matched to activation level. Safety & Openness requires tending (continuous, preventive). Threat & Defence requires completing the sequence — discharge, co-regulation, time (20 minutes to 2 hours). Strategy & Management requires releasing the cognitive override (2–8 hours). Power & Dominance requires the full discharge arc from maximum activation (24–72+ hours). Mismatching the pathway to the activation level is why generic self-care often fails.",
              },
              {
                question: "What is the difference between temporary relief and restoration?",
                answer:
                  "Momentary relief reduces felt intensity but does not clear the stress chemicals already in the body. Restoration clears the activation through the biological completion sequence. In fluid states, they converge. In chronic states, they split permanently — regulation substitutes produce genuine relief while the accumulated activation continues to rise. At the extreme end, the body produces the signature of completion without running the sequence. The shortening interval between episodes is the proof that baseline was never reached.",
              },
              {
                question: "What is the Shame Loop?",
                answer:
                  "The Shame Loop is a self-reinforcing mechanism specific to relational regulation substitutes. When regulation is achieved through controlling or harming others, the action generates a shame signal. In a chronic state, the capacity to feel what the harm did to the other person is offline — the shame cannot be processed. It accumulates as debris, increases activation, and drives the person back to the same substitute. The mode destroys the pathway it would need to complete the cycle: genuine relational safety.",
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
              name: "Regulation Capacities (M3) — TEG-Blue Research",
              url: "https://teg-blue.org/model/m3-regulation-capacities",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ─── STYLE CONSTANTS ──────────────────────────────────────

const sectionHeadingStyle = {
  fontSize: 20,
  fontWeight: 700,
  color: MODEL_COLOR,
  letterSpacing: "-0.01em",
  marginBottom: 16,
  paddingBottom: 8,
  borderBottom: `2px solid ${hexToRgba(MODEL_COLOR, 0.2)}`,
};

const h3Style = {
  fontSize: 16,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 12,
};

const proseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 16,
  maxWidth: 720,
};

const expandedProseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  margin: "8px 0 0",
};

const propositionItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
};

const listItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 6,
};

const expandableRowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 6,
  marginTop: 4,
};

const gridHeaderStyle = {
  padding: "10px 12px",
  background: hexToRgba(MODEL_COLOR, 0.1),
  borderBottom: `1px solid ${BORDER.default}`,
  fontSize: 12,
  fontWeight: 600,
  color: TEXT.primary,
  fontFamily: FONT.mono,
};

const gridCellStyle = {
  padding: "10px 12px",
  borderBottom: `1px solid ${BORDER.default}`,
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.6,
};

const navThStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: TEXT.muted,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontFamily: FONT.mono,
};

// ─── HELPER COMPONENTS ────────────────────────────────────

function PartDivider({ label, title }) {
  return (
    <div
      style={{
        marginBottom: 32,
        marginTop: 16,
        paddingTop: 24,
        borderTop: `1px solid ${BORDER.default}`,
      }}
    >
      <span
        style={{
          fontFamily: FONT.mono,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: MODEL_COLOR,
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "4px 0 0",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function NavRow({ label, href, linkText, external }) {
  const linkStyle = {
    color: MODEL_COLOR,
    textDecoration: "none",
    fontWeight: 500,
  };

  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ padding: "12px 16px", fontSize: 14, color: TEXT.secondary }}>
        {label}
      </td>
      <td style={{ padding: "12px 16px", fontSize: 14 }}>
        {external ? (
          <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            {linkText}
          </a>
        ) : (
          <Link href={href} style={linkStyle}>
            {linkText}
          </Link>
        )}
      </td>
    </tr>
  );
}
