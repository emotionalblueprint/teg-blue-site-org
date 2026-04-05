import Link from "next/link";
import dynamic from "next/dynamic";
import { BG, TEXT, FONT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, ModelAnchorStrip,
  ModelPurpose, OperationalStatement, ExpandableSection,
  PageLayout, PartDivider, NavSection, ConnectionsMap,
} from "@/src/components";
import {
  proseStyle, expandedProseStyle, propositionItemStyle,
  sectionHeadingStyle, conceptHeadingStyle, expandableRowStyle,
  gridHeaderStyle, gridCellStyle,
} from "@/src/styles/pageStyles";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

const OpenCycleExplorer = dynamic(
  () => import("@/src/components/OpenCycleExplorer"),
  { ssr: false }
);

const MODEL_COLOR = SPECTRUM.indigo;

const ANCHOR_SECTIONS = [
  { label: "What Restoration Is", href: "#what-restoration-is" },
  { label: "The Sequence", href: "#restoration-sequence" },
  { label: "By Mode", href: "#restoration-by-mode" },
  { label: "Two Pathways", href: "#two-pathways" },
  { label: "Override", href: "#cognitive-override" },
  { label: "What Happens Instead", href: "#what-happens-instead" },
  { label: "Explorer", href: "#open-cycle-explorer" },
  { label: "Connections", href: "#connections" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Regulation Capacities (M3) | TEG-Blue Research",
  description:
    "The third stage of the Emotional Somatic Cycle — whether the body completes the activation sequence or stays open. The nervous system is designed to complete what it started. Cognitive override can block it. When the restoration sequence remains unresolved, the nervous system searches for substitutes.",
  keywords: [
    "regulation capacities",
    "biological restoration",
    "restoration sequence",
    "cognitive override",
    "somatic debt",
    "restoration substitutes",
    "relational substitute escalation",
    "debris accumulation",
    "baseline elevation",
    "stress cycle completion",
    "cortisol clearance",
    "HPA axis",
    "co-regulation",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m3-regulation-capacities",
  },
  openGraph: {
    title: "Regulation Capacities — M3 Model | TEG-Blue",
    description:
      "The nervous system is designed to complete the activation sequence and restore physiological baseline. What happens when cognition overrides the signal, and what the nervous system reaches for instead.",
    url: "https://teg-blue.org/model/m3-regulation-capacities",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regulation Capacities — TEG-Blue M3",
    description:
      "The third stage of the Emotional Somatic Cycle. Whether the body completes the activation sequence or stays open — and what happens when cognition blocks it.",
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
              description="The nervous system generated a signal (M1). The signal reorganized the nervous system into a state (M2). The body mobilized — stress hormones released, muscles braced, heart rate increased. M3 begins here: with a body that has mobilized and needs to complete the sequence. The nervous system is organized to complete this sequence under the right conditions. M3 maps two pathways. In Path A, the restoration sequence runs to its endpoint and the body reaches physiological baseline. In Path B, cognition overrides the signal, the restoration sequence remains unresolved, and the body carries the activation forward."
              coreQuestion="Can the body complete the activation sequence and return to physiological baseline — or does cognition override the signal?"
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
        <article>
          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <section
            id="core-propositions"
            aria-labelledby="heading-core-propositions"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-core-propositions"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Core Propositions
            </h2>
            <ModelPurpose color={MODEL_COLOR}>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={propositionItemStyle}>
                  Regulation is not a psychological skill. It is the body completing a biological sequence already running — stress hormones metabolized, muscles unclenched, the HPA axis standing down, the nervous system returning toward physiological baseline
                </li>
                <li style={propositionItemStyle}>
                  The restoration sequence is a two-stage process: mobilization response (the energy deployed in the state shift is spent) followed by biological restoration (stress chemistry clears, the body returns toward physiological baseline)
                </li>
                <li style={propositionItemStyle}>
                  Four activation levels produce four qualitatively distinct restoration requirements — each with specific conditions and timescales. Mismatching the pathway to the activation level is why generic self-care often fails
                </li>
                <li style={propositionItemStyle}>
                  Some activation can complete through the body{"'"}s own processes (somatic pathway). Some requires another regulated nervous system nearby (relational pathway). The type of activation determines the completion channel
                </li>
                <li style={propositionItemStyle}>
                  Cognitive override is the branching point. When cognition overrides the body{"'"}s signal, the restoration sequence remains unresolved. The state filters reality (M2). The override blocks the correction signal (M3). Together they explain why people don{"'"}t know they don{"'"}t know
                </li>
                <li style={propositionItemStyle}>
                  When biological restoration does not complete, the body carries the activation forward — debris accumulates, the baseline elevates, and the nervous system searches for anything that produces the neurochemical shift that completion would have provided
                </li>
                <li style={propositionItemStyle}>
                  Every restoration substitute — substances, physical intensity, work, screens, controlling others — produces real relief. None complete the restoration sequence. The distinction is biological: discharge is not biological restoration
                </li>
                <li style={propositionItemStyle}>
                  The completion pathway is still there — outcompeted, not erased. When the conditions exist, the body runs what it was built to run
                </li>
              </ul>
            </ModelPurpose>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 1: THE RESTORATION PATHWAY                 */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 1" title="The Restoration Pathway" color={MODEL_COLOR} />

          {/* ─── C0: WHAT RESTORATION IS ──────────────── */}
          <section
            id="what-restoration-is"
            aria-labelledby="heading-what-restoration-is"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-what-restoration-is"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              What Restoration Is
            </h2>

            <p style={proseStyle}>
              Readers encountering the word {"\u201C"}regulation{"\u201D"} typically think of calming down, managing emotions, or bringing oneself back under control. The biology underneath is different.
            </p>
            <p style={proseStyle}>
              After activation, the body is organized to metabolize stress chemistry, release muscular bracing, restore organ-level functioning, and return toward physiological baseline. This is not primarily a psychological skill. It is a biological completion process — the body running the second half of a sequence that began with activation.
            </p>
            <p style={proseStyle}>
              The word {"\u201C"}regulation{"\u201D"} implies deliberate control. But much of what supports biological completion is not produced by effort alone. It depends on whether the body is able to complete a sequence that has already been initiated. From this perspective, the central question shifts: not {"\u201C"}how does a person regulate,{"\u201D"} but whether the body is able to complete what activation started.
            </p>
            <p style={proseStyle}>
              This is restoration — biological completion. The term appears throughout this page because it names what the body is doing: stress hormones metabolize, muscles unclench, the HPA axis stands down, inflammatory compounds clear, and the nervous system returns toward its pre-activation physiology. Where readers expect {"\u201C"}regulation,{"\u201D"} the biology shows restoration.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Restoration is not what you do to your emotions. It is what your body does after them — a biological completion process with a measurable endpoint.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Levine (1997) — the body{"'"}s completion mechanism as the substrate of recovery. Nagoski & Nagoski (2019) — the stress cycle requires completion, not management. Gross (1998) — emotion suppression maintains physiological arousal even when expression stops.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The reframe from regulation-as-skill to regulation-as-sequence-completion as the foundational principle. Existing research establishes that the body{"'"}s stress response requires completion. TEG-Blue formalizes this as the governing principle of the model: the focus shifts from teaching control to identifying the conditions that allow biological restoration to occur.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C1: THE RESTORATION SEQUENCE ──────────── */}
          <section
            id="restoration-sequence"
            aria-labelledby="heading-restoration-sequence"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-restoration-sequence"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              The Restoration Sequence
            </h2>

            <p style={proseStyle}>
              The nervous system generated a signal (M1). The nervous system shifted state (M2). The body mobilized — stress hormones released, muscles braced, heart rate increased, organ systems reconfigured for what the situation required. M3 begins here: with a body that has mobilized and needs to complete the sequence.
            </p>

            <h3 style={conceptHeadingStyle}>Mobilization Response</h3>
            <p style={proseStyle}>
              The body uses what it mobilized. The energy that was deployed in the state shift is spent — through movement, action, expression, discharge. Whatever the situation required: fight, flight, freeze, fawn. Or, in safety: engagement, tending, creative action, rest. The mobilized resources are used for their intended purpose. This stage is the bridge between activation and restoration — the energy must be spent before the body can begin to clear the residue.
            </p>

            <h3 style={conceptHeadingStyle}>Biological Restoration</h3>
            <p style={proseStyle}>
              The body completes the sequence it started. Cortisol metabolizes. Muscles unclench. Inflammatory compounds clear. Neural circuits recover. The HPA axis receives the all-clear signal from the hippocampus and stands down. The parasympathetic nervous system re-engages. The body returns to physiological baseline.
            </p>
            <p style={proseStyle}>
              Biological restoration requires specific conditions: sufficient safety, sufficient time, and in many cases another regulated nervous system nearby — and the process cannot be accelerated, only allowed when those conditions are present. The capacity for biological restoration is not innate — it develops through thousands of co-regulation cycles in early life. How this capacity develops — what builds it and what fails to build it — is the territory of{" "}
              <Link href="/framework/f2-developmental-blueprint" style={{ color: MODEL_COLOR, textDecoration: "none" }}>F2</Link>.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The restoration sequence is a two-stage process: mobilization response (energy spent) followed by biological restoration (residue cleared). The endpoint is physiological baseline, and the sequence has measurable markers at each stage.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Sapolsky (2004) — the HPA axis and whole-body stress response. LeDoux (1996) — amygdala timing: threat detection before conscious processing. Levine (1997) — the completion of the threat response as the substrate of recovery.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The completion sequence as a two-stage process within M3: mobilization response (energy spent) followed by biological restoration (residue cleared). The identification that the restoration sequence completing — not the activation itself — is the clinically relevant variable.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C2: RESTORATION REQUIREMENTS BY MODE ────── */}
          <section
            id="restoration-by-mode"
            aria-labelledby="heading-restoration-by-mode"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-restoration-by-mode"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Restoration Requirements by Mode
            </h2>

            <p style={proseStyle}>
              Four activation levels produce four distinct restoration requirements. Each has a physiological mechanism, specific conditions, and a timescale. This maps what genuinely completing the restoration sequence requires at each level.
            </p>

            <h3 style={conceptHeadingStyle}>Safety & Openness — Tending</h3>
            <p style={proseStyle}>
              When the nervous system is at functional baseline and safety is present, no activation sequence is in progress. Restoration at this level is not corrective; it is preventive. The system is being tended, not recovered. Sensory engagement, creative or absorptive activity, walking, making, resting, gentle co-presence. Low demand on the system. Productivity, stimulation, and achievement are all activation states — substituting activity for tending creates a slow upward drift in baseline that the person does not detect because each increment is too small to register. Timescale: continuous — not event-bounded.
            </p>

            <h3 style={conceptHeadingStyle}>Threat & Defence — Completing the Sequence</h3>
            <p style={proseStyle}>
              Genuine sympathetic activation — fight or flight engaged, cortisol and adrenaline spiked. The sequence was started. Restoration is its completion: full exhale, physical movement that allows discharge — shaking, walking, swimming. Co-regulation with a safe other. Time without new demands arriving before the current activation has cleared. Returning to demands too fast restarts the sequence before it completes. The discharge cannot be accelerated — it completes only when the conditions are present. Timescale: 20 minutes to 2 hours.
            </p>

            <h3 style={conceptHeadingStyle}>Strategy & Management — Releasing the Override</h3>
            <p style={proseStyle}>
              Cognition has been overriding the body{"'"}s emotional signals to enable strategic action. Debris accumulates during this override. Restoration is the release of that override — putting down the cognitive management, allowing the overridden emotions to surface. Not managing or steering what comes up. This restoration cannot happen while the person is still managing. Planning the restoration maintains the cognitive management state — the override does not release while cognition is still steering. Timescale: 2{"\u2013"}8 hours, often requiring overnight.
            </p>

            <h3 style={conceptHeadingStyle}>Power & Dominance — The Full Discharge Arc</h3>
            <p style={proseStyle}>
              The most extreme activation position — peak sympathetic arousal, full-body mobilization, the circuits that carry guilt and care deliberately offline. The debris load is the heaviest. Restoration requires extended rest, minimal demand, full somatic discharge over time, re-engagement with others at low intensity. Allows guilt, grief, relief, and physical exhaustion to move through in sequence. Returning to high engagement before full discharge restarts the sequence at an incomplete baseline. Timescale: 24{"\u2013"}72+ hours.
            </p>

            {/* Restoration Table */}
            <div style={{ overflowX: "auto", marginBottom: 20, marginTop: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>State</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Restoration</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Timescale</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Tending — preventive, not corrective</div>
                <div style={gridCellStyle}>Continuous</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Threat & Defence</div>
                <div style={gridCellStyle}>Completing the sequence — discharge, co-regulation, time</div>
                <div style={gridCellStyle}>20 min {"\u2013"} 2 hours</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Strategy & Management</div>
                <div style={gridCellStyle}>Releasing the cognitive override</div>
                <div style={gridCellStyle}>2{"\u2013"}8 hours</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power & Dominance</div>
                <div style={gridCellStyle}>Full discharge arc from maximum activation</div>
                <div style={gridCellStyle}>24{"\u2013"}72+ hours</div>
              </div>
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Porges (2011) — vagal brake and parasympathetic restoration. Levine (1997) — the completion of the threat response through somatic discharge. Nagoski & Nagoski (2019) — the stress cycle requiring completion, not suppression.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Biological Restoration by mode — showing that restoration must be matched to activation level rather than treated as a generic self-care process. Each restoration type is qualitatively different, not just longer. Mismatching the pathway to the activation level is why {"\u201C"}self-care{"\u201D"} often fails.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C3: TWO RESTORATION PATHWAYS ─────────────── */}
          <section
            id="two-pathways"
            aria-labelledby="heading-two-pathways"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-two-pathways"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Two Restoration Pathways
            </h2>

            <p style={proseStyle}>
              Not all activation resolves through the same pathway. The content of the activation determines which form of restoration the body requires.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Somatic Restoration Pathway.</strong> Some activation is primarily somatic in content — organized around threat, exertion, startle, or boundary defense. This activation can often move toward completion through internal physiological processes: movement, breathing, sleep, crying, shaking, or time. No other person is required for the sequence to complete.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Relational Restoration Pathway.</strong> Other activation is primarily relational in content — organized around belonging, shame, rejection, abandonment, guilt, or attachment disruption. These states may not fully resolve through physiology alone. They often require co-regulation from another regulated person. The body needs the same channel through which the activation arrived — another person.
            </p>
            <p style={proseStyle}>
              This distinction matters because many failed attempts at restoration are pathway mismatches. The system is being given a somatic intervention for a relational burden, or a relational need is being approached as if it were only bodily activation. Safety & Openness restoration is entirely somatic. Threat & Defence is primarily somatic. Strategy & Management begins somatically but may require relational safety to complete if the overridden content includes relational material. Power & Dominance almost always requires relational restoration — the guilt, grief, and resonance re-engagement that constitute the full discharge arc cannot arrive without genuine relational contact.
            </p>
            <p style={proseStyle}>
              Relational restoration requires genuine safety with another person — and chronic states degrade exactly that capacity.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The pathway must match the content. A person who attempts somatic restoration for relational content — exercising to clear shame, breathing techniques to process grief — produces discharge but does not complete the restoration sequence. The activation remains.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Porges (2011) — co-regulation as the mammalian primary regulation pathway. Schore (2003) — right-brain relational regulation in development. Bowlby (1969) — attachment as the relational regulation system.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The explicit distinction between the Somatic Restoration Pathway and the Relational Restoration Pathway as different restoration pathways rather than interchangeable processes. The systematic mapping onto the four activation levels shows that chronic states specifically degrade the relational pathway — the most powerful form of completion — through the very substitutes that replaced it.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 2: THE BRANCHING POINT                      */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 2" title="The Branching Point" color={MODEL_COLOR} />

          {/* ─── C4: COGNITIVE OVERRIDE ──────────────────── */}
          <section
            id="cognitive-override"
            aria-labelledby="heading-cognitive-override"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-cognitive-override"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Cognitive Override
            </h2>

            <p style={proseStyle}>
              The nervous system generated a signal (M1). The nervous system shifted state (M2). The body mobilized. The body{"'"}s designed restoration mechanism exists — the nervous system is organized to complete the sequence under the right conditions. Now: does cognition override the signal?
            </p>
            <p style={proseStyle}>
              Cognitive override is what happens when cognition decides the emotional signal is irrelevant and overrides access to it. The mind says: {"\u201C"}I don{"'"}t have time for this.{"\u201D"} {"\u201C"}This isn{"'"}t important.{"\u201D"} {"\u201C"}I need to keep going.{"\u201D"} Cognition overrides the signal. The restoration sequence remains unresolved. Cortisol continues releasing. The body receives no biological resolution.
            </p>
            <p style={proseStyle}>
              The override is not a single moment. It is a learned pattern. A person who grew up in an environment where emotional signals were punished, ignored, or dangerous learns to override automatically. It operates below conscious awareness, just like the original signal did. How cognition came to operate this way — what developmental conditions produced the override — is the territory of{" "}
              <Link href="/framework/f2-developmental-blueprint" style={{ color: MODEL_COLOR, textDecoration: "none" }}>F2</Link> and{" "}
              <Link href="/framework/f3-cognitive-override" style={{ color: MODEL_COLOR, textDecoration: "none" }}>F3</Link>.
            </p>
            <p style={proseStyle}>
              This is the mechanism that connects M2 and M3.{" "}
              <Link href="/model/m2-nervous-system-states" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M2</Link> showed that the state changes what the person can see — the filter is pre-cognitive. M3 shows how the person learned to ignore the signal the body is generating to tell them the filter is engaged. The state filters reality. The override prevents the correction from arriving. Together they explain why people don{"'"}t know they don{"'"}t know.
            </p>

            <h3 style={conceptHeadingStyle}>Somatic Debt</h3>
            <p style={proseStyle}>
              The override has a physiological cost. When cognition overrides the body{"'"}s emotional signals chronically, the override itself consumes physiological resources continuously. The prefrontal cortex maintains the override. Noradrenaline sustains the effort. The limbic signals continue to fire underneath — the override does not silence them, it outcompetes them. The competition is metabolically expensive.
            </p>
            <p style={proseStyle}>
              This cost — somatic debt — accumulates without detection because the individual experiences the override as stability, not effort. It surfaces eventually as collapse, physical illness, or emotional flooding that seems to come from nowhere.
            </p>

            <h3 style={conceptHeadingStyle}>Override Across Conditions</h3>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>From acute activation:</strong> The body has mobilized. The restoration sequence is available. When conditions are present — sufficient safety, time, and in many cases another regulated nervous system — the sequence runs. Override may occur, but it is an event — a moment where cognition intercepts a signal. The signal is still legible as a signal. The override is potentially visible. The sequence can still run if conditions change.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>From chronic activation:</strong> Three things change that make chronic override structurally different. First, the override is no longer an event — it is the architecture. The person does not override a signal in the moment; the body{"'"}s signals have become habitual background noise. Second, the baseline itself has moved. The endpoint the restoration sequence would return to no longer exists at its designed level. Third, substitutes feel indistinguishable from genuine restoration. Without the capacity to perceive the difference between temporary neurochemical relief and genuine biological completion, the person registers the relief as resolution.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Cognitive override is the branching point in the Emotional Somatic Cycle — the mechanism that determines whether the body{"'"}s designed completion sequence runs or remains unresolved.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Gross (1998) — emotion suppression maintains physiological arousal while reducing expression. Kahneman (2011) — dual-process theory: System 2 overriding System 1. van der Kolk (2014) — the body continuing to score what the mind has overridden.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Cognitive override identified as the specific branching point in the Emotional Somatic Cycle. Somatic debt as the named, measurable cost of sustained override — distinct from debris (residue of incomplete restoration sequences) and from allostatic load (systemic wear from chronic stress). The three-condition distinction: override from acute activation is an event (visible, interruptible); override from chronic activation is the architecture (invisible, structurally locked, with no signal to intercept and no endpoint to return to).
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 3: WHAT HAPPENS INSTEAD                     */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 3" title="What Happens Instead" color={MODEL_COLOR} />

          {/* ─── C5-C7: INCOMPLETE RESTORATION, DEBRIS, BASELINE ── */}
          <section
            id="what-happens-instead"
            aria-labelledby="heading-what-happens-instead"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-what-happens-instead"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              When the Restoration Sequence Does Not Complete
            </h2>

            <p style={proseStyle}>
              When cognition overrides the signal — or when the conditions for biological restoration are absent — the restoration sequence remains unresolved. The body{"'"}s completion mechanism runs partially or not at all. The biological sequence that would clear the activation — hormone metabolism, muscle release, neural circuit recovery, parasympathetic re-engagement — does not reach its endpoint. The HPA axis does not receive the all-clear signal. Cortisol continues releasing. The parasympathetic nervous system does not fully re-engage.
            </p>
            <p style={proseStyle}>
              What was designed as a temporary emergency configuration becomes the operating state.
            </p>

            <h3 style={conceptHeadingStyle}>Debris Accumulation</h3>
            <p style={proseStyle}>
              The physical residue of an incomplete restoration sequence stays in the body. This is measurable, biological, and still running:
            </p>
            <ul style={{ paddingLeft: 20, marginBottom: 20, maxWidth: 720 }}>
              <li style={propositionItemStyle}>Cortisol still circulating in the bloodstream (half-life of 20{"\u2013"}90 minutes; in chronic states, never fully clears before the next activation)</li>
              <li style={propositionItemStyle}>Adrenaline metabolites in the tissue</li>
              <li style={propositionItemStyle}>Pro-inflammatory cytokines produced for the emergency response, not yet cleared</li>
              <li style={propositionItemStyle}>Muscle fibers that braced and partially released but never fully discharged the stored tension</li>
              <li style={propositionItemStyle}>The amygdala still sensitized — threshold lowered, firing faster for the next perceived threat</li>
              <li style={propositionItemStyle}>The HPA axis still running — the hypothalamus receiving no all-clear signal, continuing to produce CRH, which continues producing cortisol</li>
              <li style={propositionItemStyle}>Neural circuits that activated mid-sequence, did not complete, and are still holding the activation pattern</li>
              <li style={propositionItemStyle}>Serotonin depletion — the stabilizing neurotransmitter drawn down under sustained cortisol</li>
              <li style={propositionItemStyle}>Oxytocin suppression — the trust and co-regulation chemistry not available</li>
            </ul>
            <p style={proseStyle}>
              Each incomplete restoration sequence adds to what is already there. The residue from one activation compounds with the next. The next alert fires from an already-elevated baseline — activates faster, reaches higher, requires more to resolve. The body carries the accumulation forward.
            </p>

            <h3 style={conceptHeadingStyle}>Baseline Elevation</h3>
            <p style={proseStyle}>
              The nervous system adapts its resting level to the accumulated debris. Two variables define the operating window:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The floor</strong> is the elevated baseline itself — the resting level of cortisol, muscle tension, heart rate, and HPA axis activation that the nervous system now treats as normal. With each incomplete restoration sequence, the floor rises. The person does not notice the shift because the floor moved gradually — each increment felt like the current normal.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The ceiling</strong> is the activation threshold — how little it takes to trigger the next response. With each incomplete restoration sequence, the ceiling drops. An amygdala that has been repeatedly sensitized fires at smaller and smaller inputs.
            </p>
            <p style={proseStyle}>
              The window between floor and ceiling narrows. The person lives in a progressively smaller range — higher resting activation, lower trigger threshold. Smaller triggers produce larger responses. Recovery time lengthens. Perception narrows as the system prioritizes threat-relevant processing. Relational capacity reduces as the biological resources that connection requires are chronically depleted. Interoceptive signals become harder to read accurately as chronic activation distorts the signal-to-noise ratio.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>At the extreme: dorsal shutdown.</strong> When biological restoration has not completed across enough repetitions, across enough time, the nervous system can shift from chronic high-activation to the disappearance of signal entirely. The body stops broadcasting — not because the debris has cleared, but because the alert system suppresses its own output when no resolution arrives across repeated activations. This is the dorsal vagal state. The person presents as calm, functional, emotionally flat. The activation remains — the debris load may be the highest — but the individual has no access to it.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              When the body never reaches physiological baseline, the nervous system recalibrates its resting state to match the conditions — higher floor, lower ceiling, narrower range.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  McEwen & Stellar (1993) — allostatic load: the cumulative cost of chronic stress adaptation. Sapolsky (2004) — cortisol dynamics and the HPA axis. van der Kolk (2014) — the body storing activation at the physiological level. Craig (2002) — chronic activation impairing interoceptive accuracy. Porges (2011) — dorsal vagal state as the immobilization response.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Debris as a specific physiological inventory rather than metaphor — each component separately addressable. Baseline elevation mapped through two variables — the floor (elevated resting level) and the ceiling (lowered activation threshold) — showing the narrowing window as a measurable, progressive process. The distinction between genuine physiological baseline and dorsal vagal collapse as a clinically critical differential.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C9: RESTORATION SUBSTITUTES ────────────────── */}
          <section
            id="restoration-substitutes"
            aria-labelledby="heading-restoration-substitutes"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-restoration-substitutes"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Restoration Substitutes
            </h2>

            <p style={proseStyle}>
              When the restoration pathway is blocked — whether by cognitive override, by conditions that were never safe enough, or by a nervous system that never learned to complete the restoration sequence — the nervous system searches for anything that produces the neurochemical shift that completion would have provided. The mechanism is identical across all substitutes: temporary discharge, no resolution, escalating need.
            </p>

            <h3 style={conceptHeadingStyle}>Non-Relational Substitutes</h3>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Substances.</strong> Alcohol, stimulants, opioids, cannabis — each acts on a specific part of the stress response. Each produces real relief. Each requires more over time, because the underlying sequences are still open.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Physical intensity.</strong> Compulsive exercise, risk-taking, extreme sports. High-intensity physical states produce the discharge the stress response was designed to complete through movement. The relief is real. The restoration sequence stays open.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Work, achievement, productivity.</strong> The nervous system experiences goal pursuit as controllability, and controllability as safety. When the work stops, the debris is still there.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Conscious self-soothing.</strong> Exercise chosen for intensity rather than completion. Meditation chased for the calm rather than entered for what is there. Breathwork, cold exposure. Each capable of producing real physiological shift. Each, when the restoration pathway is blocked, used as discharge. The nervous system does not distinguish the source — only whether the restoration sequence completed.
            </p>

            <h3 style={conceptHeadingStyle}>Substitutes by Chronic State</h3>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 1.5fr", minWidth: 600 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Chronic State</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Typical Substitutes</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Mechanism</div>

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

            <h3 style={conceptHeadingStyle}>Relational Substitutes</h3>
            <p style={proseStyle}>
              When the substitute involves other people — controlling, criticizing, managing, punishing — the relief is stronger. The nervous system{"'"}s most potent restoration pathway is relational. Genuine co-regulation is the primary pathway through which mammalian nervous systems complete the restoration sequence. When that pathway is co-opted into control, the system receives a high-potency activation of the co-regulation circuitry without the safety conditions that make it restorative. The relief is real and immediate. The cost is structural.
            </p>
            <p style={proseStyle}>
              Dominant behavior produces a measurable neurochemical shift: a temporary cortisol drop, a testosterone spike, brief relief. The nervous system perceives controllability as safety. Three episodes of activation resolved through controlling others is enough for conditioning to begin.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The substitute changes. The mechanism does not. Temporary discharge. No resolution. The bar rises. The alarm stays on.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Koob & Le Moal (2001) — neurobiological mechanisms of tolerance and escalation. Archer (2006); Mazur & Booth (1998) — testosterone-cortisol dynamics in dominant behavior. Maier & Seligman (2016) — perceived controllability modulating the stress response. Robinson & Berridge (2003) — incentive sensitization in addiction.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The unified restoration substitute mechanism — showing substances, physical intensity, work, screens, conscious self-soothing, and domination as the same biological search at different intensity levels. The question shifts from whether the substitute is socially acceptable to whether the restoration sequence is completing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C10-C12: RELIEF, ESCALATION, RELATIONAL ──── */}
          <section
            id="escalation"
            aria-labelledby="heading-escalation"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-escalation"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Temporary Relief, Escalation, and the Relational Cost
            </h2>

            <h3 style={conceptHeadingStyle}>Temporary Relief Without Completion</h3>
            <p style={proseStyle}>
              Momentary relief can reduce intensity for a while, but it does not clear the stress chemicals already in the body. Biological restoration is the body completing the sequence — stress hormones metabolizing, muscles releasing, the HPA axis standing down. When that activation is not cleared, the body starts from a more activated state the next time.
            </p>
            <p style={proseStyle}>
              In fluid states, the two converge — the same action that produces relief also clears the debris and brings the baseline back down. Relief and restoration are the same process. In chronic states, they split permanently. Restoration substitutes produce genuine relief — felt intensity drops — but the accumulated activation continues to rise. The gap between resting activation and peak narrows. Over time, the system requires increasing doses of the substitute to produce the same relief from a progressively more activated starting point.
            </p>
            <p style={proseStyle}>
              At the extreme end of this trajectory, the combination of stimuli available at the far end — domination, violation, the exercise of absolute power — produces the most potent neurochemical event the nervous system can access. Dopamine surges. Testosterone spikes. Cortisol suppresses. The body registers: <em>finished.</em> But the sequence did not run. Cortisol was suppressed by intensity — not cleared by completion. It rebounds. The HPA axis never received the hippocampal all-clear. The body produces the signature of completion without running the sequence. The interval between episodes shortens even as intensity escalates — the proof that baseline was never reached.
            </p>

            <h3 style={conceptHeadingStyle}>Relational Substitute Escalation</h3>
            <p style={proseStyle}>
              When restoration is sought through controlling, criticizing, or harming others, a specific secondary mechanism activates. The action generates signals — shame, guilt, remorse. In a fluid state, shame is a useful signal: it communicates that misalignment happened and repair is needed. The person feels it, names it, and uses it to correct.
            </p>
            <p style={proseStyle}>
              In a chronic state, the signal arrives but the equipment that would process it is not available. The capacity to feel what the harm did to the other person — to feel their experience from the inside — is offline. The capacity to feel one{"'"}s own role in it — to hold {"\u201C"}I did this{"\u201D"} without collapsing or defending — is offline. Without those two pathways, shame cannot move through the sequence it requires. It accumulates as debris.
            </p>
            <p style={proseStyle}>
              The unprocessed shame becomes background activation. That activation increases the pressure for relief. The person reaches for the same substitute — the only one strong enough to move the needle. The action generates more shame. The shame reinforces the need. The loop is self-sealing. The mode destroys the relational restoration pathway it would need for genuine completion — each episode of control, punishment, or harm makes the people in proximity less safe, less honest, and less genuinely available.
            </p>

            <h3 style={conceptHeadingStyle}>Escalation Without Endpoint</h3>
            <p style={proseStyle}>
              Discharge is not biological restoration. Discharge is the release of mobilized energy. It reduces the felt pressure. It temporarily suppresses parts of the stress response. Discharge is real. It is not resolution. Restoring physiological baseline requires the full biological sequence to run: the discharge phase, the parasympathetic restoration, the HPA negative feedback loop, cortisol clearance, the restoration of serotonin and oxytocin, the hippocampus encoding the event as finished.
            </p>
            <p style={proseStyle}>
              The biological completion sequence has a built-in endpoint: cortisol clears, the hippocampus sends the all-clear, the HPA axis stands down. Restoration substitutes have no such endpoint. They have no signal that tells the system: <em>finished.</em> The substitute must repeat because the nervous system has not received the conditions required for biological restoration — the completion the substitute cannot provide.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Momentary relief and genuine restoration feel the same in the moment. The difference is whether the stress chemicals are actually cleared.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Nagoski & Nagoski (2019) — the stress cycle requiring completion, not reduction of felt intensity. Koob & Le Moal (2001) — the allostatic model of addiction: tolerance, escalation, rising baseline. Tangney, Stuewig & Mashek (2007) — shame as a moral emotion requiring specific processing capacities. Schore (2003) — shame regulation requiring relational safety.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The temporary relief vs. restoration distinction as the single most precise diagnostic question: after the strategy, does the baseline actually drop back — or is it slightly higher each time? Relational Substitute Escalation as a named, self-reinforcing mechanism that destroys the relational restoration pathway the mode would need for genuine completion. No restoration substitute contains its own stopping mechanism — the biological completion sequence does.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS MODEL DOES NOT YET ANSWER ───────── */}
          <section
            id="thread-forward"
            aria-labelledby="heading-thread-forward"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-thread-forward"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              What This Model Does Not Yet Answer
            </h2>

            <p style={proseStyle}>
              M3 has mapped whether the body completes the activation sequence or stays open. The nervous system is organized to complete the restoration sequence and restore physiological baseline. Cognitive override blocks it. When biological restoration does not complete, the nervous system searches for substitutes. Every substitute produces real relief. None complete the restoration sequence. The debris accumulates. The baseline elevates. The substitutes escalate. The relational environment degrades.
            </p>
            <p style={proseStyle}>
              Some people feel the activation running. They notice the debris accumulating. They catch the override engaging. They recognize the substitute for what it is — relief, not restoration. Something in them can observe the sequence while it is running.
            </p>
            <p style={proseStyle}>
              Others cannot. They are inside the sequence and have no awareness that they are inside it. The override runs automatically. The substitute feels like resolution. The relational substitute escalation operates below detection.
            </p>
            <p style={proseStyle}>
              What determines whether a person can read their own signals, feel what another person is feeling, and observe their own patterns while they are running? That is{" "}
              <Link href="/model/m4-awareness-capacities" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M4</Link>.
            </p>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* THE DIAGRAM — OpenCycleExplorer                  */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="EXPLORE" title="The Restoration Explorer" color={MODEL_COLOR} />

          <section
            id="open-cycle-explorer"
            aria-labelledby="heading-open-cycle-explorer"
            style={{ marginBottom: 48 }}
          >
            <p style={{ ...proseStyle, marginBottom: 24 }}>
              Explore what each mode requires to complete the restoration sequence — the conditions, the timescale, and what happens when completion is unavailable.
            </p>

            <OpenCycleExplorer />
          </section>

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={MODEL_COLOR}
            connections={[
              {
                id: "M1: Emotions as Signals",
                href: "/model/m1-emotions-as-signals",
                description: "Describes the signal the nervous system generates — the input that triggers the activation M3 describes. The signal\u2019s content (somatic or relational) determines which restoration pathway the body requires.",
              },
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "Describes the state the nervous system reorganizes into after the signal. The four activation levels map to M3\u2019s four restoration requirements. The state filters reality (M2); the override blocks the correction signal (M3).",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "Describes what determines whether the person can perceive the activation sequence while it is running — whether they can feel the debris accumulating, catch the override engaging, and recognize the substitute for what it is.",
              },
              {
                id: "F1: The Emotional Gradient",
                href: "/framework/f1-emotional-gradient",
                description: "Provides the biological origin of the safety-threat gradient that determines the four activation levels and their distinct restoration requirements.",
              },
              {
                id: "F2: The Developmental Blueprint",
                href: "/framework/f2-developmental-blueprint",
                description: "Explains how the capacity for biological restoration develops through early co-regulation — and what happens when that developmental environment is absent.",
              },
              {
                id: "F3: Cognitive Override",
                href: "/framework/f3-cognitive-override",
                description: "Explains how cognition comes to replace biological restoration as the dominant strategy — the developmental and maintenance mechanisms that produce the override M3 describes.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={MODEL_COLOR}
            items={[
              {
                label: "Understand what determines whether the person can perceive the activation sequence while it is running",
                href: "/model/m4-awareness-capacities",
                linkText: "M4: Awareness Capacities \u2192",
              },
              {
                label: "See the sixteen signals the nervous system generates — the input that triggers the activation M3 describes",
                href: "/model/m1-emotions-as-signals",
                linkText: "M1: Emotions as Signals \u2192",
              },
              {
                label: "Understand the state that shifts after the signal — and how it changes perception and available capacity",
                href: "/model/m2-nervous-system-states",
                linkText: "M2: Nervous System States \u2192",
              },
              {
                label: "Explore how the capacity for biological restoration develops through early co-regulation",
                href: "/framework/f2-developmental-blueprint",
                linkText: "F2: The Developmental Blueprint \u2192",
              },
              {
                label: "Explore the interactive tools",
                href: "https://teg-blue.com/emotional-tools",
                linkText: "teg-blue.com \u2192",
                external: true,
              },
            ]}
          />
        </article>

      </PageLayout>

      <SiteFooter />

      {/* JSON-LD structured data for SEO - all content is static/hardcoded */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/model/m3-regulation-capacities#article",
            headline: "Regulation Capacities: The Return Pathway",
            description:
              "The third stage of the Emotional Somatic Cycle — whether the body completes the activation sequence or stays open. The nervous system is designed to complete the restoration sequence. Cognitive override can block it. When biological restoration does not complete, the nervous system searches for substitutes. Model M3 of the TEG-Blue system.",
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
            dateModified: "2026-04-05",
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
              { "@type": "Thing", name: "Biological Restoration" },
              { "@type": "Thing", name: "Restoration Sequence" },
              { "@type": "Thing", name: "Cognitive Override" },
              { "@type": "Thing", name: "Restoration Substitutes" },
              { "@type": "Thing", name: "Debris Accumulation" },
              { "@type": "Thing", name: "Baseline Elevation" },
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
              "biological restoration",
              "restoration sequence",
              "cognitive override",
              "somatic debt",
              "restoration substitutes",
              "relational substitute escalation",
              "debris accumulation",
              "baseline elevation",
              "stress cycle completion",
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
                  "Regulation Capacities (M3) maps the third stage of the Emotional Somatic Cycle — whether the body completes the activation sequence or stays open. Regulation is not a psychological skill but the body completing a biological sequence: stress hormones metabolized, muscles unclenched, the HPA axis standing down. The model maps what the body is designed to do (the restoration sequence), what blocks it (cognitive override), what the nervous system reaches for instead (restoration substitutes), and why none of the substitutes complete the restoration sequence.",
              },
              {
                question: "What is the restoration sequence?",
                answer:
                  "The restoration sequence is a two-stage biological process. First, the mobilization response: the energy deployed in the state shift is spent through movement, action, expression. Second, biological restoration: cortisol metabolizes, muscles unclench, inflammatory compounds clear, neural circuits recover, the HPA axis receives the all-clear signal and stands down. The endpoint is physiological baseline. The clinically relevant variable is not whether the person activates but whether the restoration sequence completes.",
              },
              {
                question: "What is cognitive override?",
                answer:
                  "Cognitive override is the branching point in the Emotional Somatic Cycle. Cognition decides the emotional signal is irrelevant and overrides access to it. The restoration sequence remains unresolved — cortisol continues releasing, the body receives no biological resolution. The override has a physiological cost called somatic debt: the prefrontal cortex maintaining the override consumes resources continuously. M2 shows the state filters reality; M3 shows the override blocks the correction signal. Together they explain why people don't know they don't know.",
              },
              {
                question: "What is biological restoration by mode?",
                answer:
                  "M3 maps four qualitatively distinct restoration types matched to activation level. Safety & Openness requires tending (continuous, preventive). Threat & Defence requires completing the sequence — discharge, co-regulation, time (20 minutes to 2 hours). Strategy & Management requires releasing the cognitive override (2-8 hours). Power & Dominance requires the full discharge arc from maximum activation (24-72+ hours). Mismatching the pathway to the activation level is why generic self-care often fails.",
              },
              {
                question: "What is the difference between temporary relief and restoration?",
                answer:
                  "Momentary relief reduces felt intensity but does not clear the stress chemicals already in the body. Biological restoration clears the activation through the completion sequence. In fluid states, they converge. In chronic states, they split permanently — restoration substitutes produce genuine relief while the accumulated activation continues to rise. At the extreme end, the body produces the signature of completion without running the sequence. The shortening interval between episodes is the proof that baseline was never reached.",
              },
              {
                question: "What is Relational Substitute Escalation?",
                answer:
                  "Relational Substitute Escalation is a self-reinforcing mechanism specific to relational restoration substitutes. When restoration is sought through controlling or harming others, the action generates shame and guilt signals. In a chronic state, the capacity to feel what the harm did to the other person is offline — the signals cannot be processed. They accumulate as debris, increase activation, and drive the person back to the same substitute. The mode destroys the relational restoration pathway it would need for genuine completion.",
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
