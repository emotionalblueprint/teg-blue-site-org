import dynamic from "next/dynamic";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, MODEL_COLORS, hexToRgba } from "@/src/styles/tokens";

const M1SpeedComparison = dynamic(() => import("@/src/components/M1SpeedComparison"), { ssr: false });
const M1SignalLifecycle = dynamic(() => import("@/src/components/M1SignalLifecycle"), { ssr: false });
const M1EmotionNav = dynamic(() => import("@/src/components/M1EmotionNav"), { ssr: false });
const M1SafetyEvaluation = dynamic(() => import("@/src/components/M2SafetyEvaluation"), { ssr: false });
import {
  SiteHeader, SiteFooter, ModelHero, ModelPurpose, PageLayout,
  PartDivider, NavSection, ConnectionsMap, ExpandableSection,
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


const MODEL_COLOR = MODEL_COLORS.M1;

const linkStyle = { color: MODEL_COLOR, textDecoration: "none" };

// ─── Emotion section component ────────────────────────────
function EmotionSection({ id, name, signal, bodySignature, mechanism, activates, activatesColor, restorationType, restorationDetail, research, tegBlueAdds, distortion, children }) {
  return (
    <section
      id={`emotion-${id}`}
      aria-labelledby={`heading-${id}`}
      style={{ marginBottom: 48, scrollMarginTop: 140, paddingTop: 24, borderTop: `1px solid ${BORDER.default}` }}
    >
      <h3
        id={`heading-${id}`}
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: activatesColor,
          marginBottom: 14,
        }}
      >
        {name} — <span style={{ fontWeight: 400, color: TEXT.secondary }}>{signal}</span>
      </h3>

      <div style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr",
        gap: "6px 14px",
        marginBottom: 16,
        fontSize: 13,
        lineHeight: 1.7,
      }}>
        <span style={{ fontFamily: FONT.mono, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT.muted, paddingTop: 2 }}>Signal</span>
        <span style={{ color: TEXT.secondary }}>{signal}</span>

        <span style={{ fontFamily: FONT.mono, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT.muted, paddingTop: 2 }}>Body</span>
        <span style={{ color: TEXT.secondary }}>{bodySignature}</span>

        <span style={{ fontFamily: FONT.mono, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT.muted, paddingTop: 2 }}>Restoration</span>
        <span style={{ color: TEXT.secondary }}>
          <strong style={{ color: TEXT.primary }}>{restorationType}</strong> — {restorationDetail}
        </span>
      </div>

      <p style={proseStyle}>{mechanism}</p>

      {distortion && (
        <p style={{ ...proseStyle, borderLeft: `2px solid ${hexToRgba(MODEL_COLOR, 0.3)}`, paddingLeft: 14 }}>
          {distortion}
        </p>
      )}

      {children}

      <div style={expandableRowStyle}>
        <ExpandableSection title="Established Research" type="opendata">
          <p style={expandedProseStyle}>{research}</p>
        </ExpandableSection>
        <ExpandableSection title="What TEG-Blue Adds" type="opendata">
          <p style={expandedProseStyle}>{tegBlueAdds}</p>
        </ExpandableSection>
      </div>
    </section>
  );
}


// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Emotions as Signals (M1) | TEG-Blue Research",
  description:
    "Emotions mapped as biological signals — what each one detects, what the body does, and what conditions resolve the activation. The first stage of the Emotional Somatic Cycle.",
  keywords: [
    "emotions as signals",
    "nervous system signals",
    "safety-threat evaluation",
    "signal generation",
    "somatic emotions",
    "relational emotions",
    "co-regulation",
    "signal interpretation",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m1-emotions-as-signals",
  },
  openGraph: {
    title: "Emotions as Signals — M1 Model | TEG-Blue",
    description:
      "Emotions mapped as biological signals. What each one detects, what the body does, and what conditions resolve the activation.",
    url: "https://teg-blue.org/model/m1-emotions-as-signals",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotions as Signals — TEG-Blue M1",
    description:
      "Emotions mapped as biological signals. What each one detects, what the body does, and what conditions resolve the activation.",
  },
  other: {
    "citation_title": "Emotions as Signals",
    "citation_author": "Anna Paretas-Artacho",
    "citation_publication_date": "2026/02",
    "citation_technical_report_institution": "TEG-Blue Research",
  },
};

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Core Propositions", href: "#core-propositions", description: "The claims M1 makes about the signal system." },
  { label: "Continuous Evaluation", href: "#continuous-evaluation", description: "The nervous system monitors for safety and threat continuously, below conscious awareness." },
  { label: "Somatic Contextual Memory", href: "#somatic-contextual-memory", description: "The body's accumulated learning calibrates the evaluation before the current moment is fully processed." },
  { label: "Detection", href: "#detection", description: "The evaluation concludes. A specific condition is identified." },
  { label: "Signal Generation", href: "#signal-generation", description: "The detection becomes a physiological event." },
  { label: "The Speed", href: "#the-speed", description: "12 milliseconds vs 300 milliseconds. The body responds before thought arrives." },
  { label: "Somatic Signals", href: "#somatic-signals", description: "Signals that tell the nervous system to respond with the body — can complete through the body's own channels." },
  { label: "Relational Signals", href: "#relational-signals", description: "Signals that tell the nervous system to respond through connection — require another person for completion." },
];

// ─── PAGE ──────────────────────────────────────────────────

const SAFETY_COLOR = '#a0cdfb';
const THREAT_COLOR = '#6fabf8';

export default function M1EmotionsAsSignalsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/model/m1-emotions-as-signals" />

      <PageLayout
        sidebarSections={SIDEBAR_SECTIONS}
        header={
          <ModelHero
            badge="MODEL M1"
            title="Emotions as Signals"
            subtitle="The Nervous System Language"
            description="Before a thought finishes forming, the body has already responded. The nervous system evaluates environmental conditions continuously — safety, threat, loss, connection, contamination — and generates a full physiological response in milliseconds. Heart rate shifts, hormones release, muscles brace or soften. These responses are emotions: biological signals carrying specific information about what was detected. This model maps what the nervous system evaluates, how each signal is generated, and what each emotion detects."
            coreQuestion="What is this signal telling me?"
            drawsFrom={[
              { label: "M2", href: "/model/m2-nervous-system-states" },
              { label: "M3", href: "/model/m3-regulation-capacities" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
              { label: "F1", href: "/framework/f1-emotional-gradient" },
            ]}
            color={MODEL_COLOR}
          />
        }
      >
        <figure role="figure" aria-label="Signal lifecycle diagram" style={{ marginBottom: 40 }}>
          <M1SignalLifecycle />
          <figcaption style={{ fontSize: 13, color: '#94a3b8', fontStyle: 'italic', padding: '8px 16px 0', lineHeight: 1.5 }}>
            The three phases every emotional signal passes through: environmental evaluation, physiological detection, and conscious signal formation — complete in under 200 milliseconds.
          </figcaption>
          <noscript>
            <p style={{ padding: 16, color: '#94a3b8' }}>Interactive diagram: the three phases of signal formation — evaluating (continuous monitoring), detected (condition identified), and signal (body responds). Ten selectable emotions show how each signal varies in waveform shape and intensity.</p>
          </noscript>
        </figure>

        <article>

          {/* ─── INTRODUCTION ───────────────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <p style={proseStyle}>
              The nervous system continuously monitors internal and external conditions below conscious awareness. It evaluates for safety and threat — and produces signals that orient the body toward response. Heart rate changes. Stress hormones release. Muscles reorganize. A full physiological response is organized before the first conscious thought has assembled a single sentence. Cognition arrives to find the body already responding.
            </p>
            <p style={proseStyle}>
              Emotion, in this model, is a functional output of that detection process — not opposed to reason, but operating through a different channel, one that is faster, older, and largely independent of conscious processing. Cognition shapes how the signal is interpreted, named, explained, suppressed, or overridden — but does not generate the original signal itself.
            </p>
            <p style={proseStyle}>
              Each emotion corresponds to a specific type of detection and carries a characteristic physiological response pattern. An emotional signal does not merely express a feeling. It indicates that the nervous system has registered something consequential and has begun reorganizing the body accordingly. The architecture is consistent across all signals: what was detected and how the body responds.
            </p>
            <p style={proseStyle}>
              This reframes the central question. Not how emotion should be controlled, but what each signal is indicating.
            </p>
          </section>


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
                The nervous system continuously evaluates environmental conditions along a safety-threat axis. The evaluation is pre-cognitive — it completes before conscious processing begins.
              </li>
              <li style={propositionItemStyle}>
                The evaluation draws on multiple channels simultaneously — sensory input, interoceptive data, relational cues, contextual memory — all converging below conscious awareness to produce a finding.
              </li>
              <li style={propositionItemStyle}>
                Each detection produces a specific signal — a full physiological response pattern carrying information about what was found. The signal reaches the body at 12 milliseconds. Cognition reaches the cortex at 300 milliseconds. The body responds before thought arrives.
              </li>
              <li style={propositionItemStyle}>
                Signals divide into two groups based on what they tell the nervous system to do: somatic signals (respond with the body) and relational signals (respond through connection). This determines the restoration pathway.
              </li>
              <li style={propositionItemStyle}>
                Somatic signals can complete through the body{"'"}s own channels. Relational signals require another person as a biological completion requirement — not a psychological preference.
              </li>
              <li style={propositionItemStyle}>
                Relational signals that detect risk — shame, guilt, loneliness, disappointment, sadness, grief — are designed as connection signals. They distort into threat signals when interoceptive access is absent.
              </li>
              <li style={propositionItemStyle}>
                When a signal cannot be received, it does not disappear — it distorts. The finding is the same. What changes is what the person experiences.
              </li>
              <li style={propositionItemStyle}>
                The question is not {"\u201C"}how do I manage this emotion?{"\u201D"} but {"\u201C"}what is this signal telling me?{"\u201D"}
              </li>
            </ul>
            </ModelPurpose>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 1: SAFETY-THREAT EVALUATION                  */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 1" title="Safety-Threat Evaluation" color={MODEL_COLOR} />

          {/* ─── C1: CONTINUOUS EVALUATION ─────────────── */}
          <section
            id="continuous-evaluation"
            aria-labelledby="heading-continuous-evaluation"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-continuous-evaluation"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Continuous Evaluation
            </h2>

            <p style={proseStyle}>
              The nervous system evaluates environmental and relational conditions continuously, below conscious awareness. This is not an episodic process triggered by events. It runs all the time — a constant assessment of whether current conditions support safety or indicate threat.
            </p>
            <p style={proseStyle}>
              Porges (2011) named this process neuroception: the nervous system{"'"}s capacity to evaluate risk and safety without conscious involvement. The evaluation operates along a single axis — safety to threat — as a continuous gradient, not a binary switch. At one end, conditions support approach, openness, and connection. At the other, conditions indicate danger, violation, loss, or contamination. The nervous system{"'"}s position on that gradient determines which class of signal is generated.
            </p>
            <p style={proseStyle}>
              The evaluation produces two classes of output: safety or threat. Within each class, the detection carries nuance — threat includes boundary violation, loss, contamination; safety includes connection, belonging confirmed, conditions supporting approach — but the primary axis is binary in direction: the nervous system is evaluating whether current conditions are safe or threatening.
            </p>
            <p style={proseStyle}>
              The evaluation is the origin. The signal is the output.
            </p>
            <p style={proseStyle}>
              This process does not depend on deliberate reasoning. It is rapid, automatic, and based on experienced safety, not objective conditions alone. The nervous system responds to what it has learned to classify as safe or threatening, whether or not that classification matches present reality. A person may feel threatened in an environment that appears objectively safe, or may fail to detect danger in an environment that is objectively unsafe.
            </p>
            <p style={proseStyle}>
              From a survival perspective, false negatives are more costly than false positives. Failing to detect danger may be fatal, while unnecessarily activating protection is usually less costly. The system is biased toward protection under uncertainty.
            </p>

            <div style={{ margin: "24px 0" }}>
              <M1SafetyEvaluation />
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>
                  Porges (2011) — neuroception as continuous safety-threat evaluation below awareness. LeDoux (1996) — subcortical threat detection preceding cortical processing. Damasio (1994) — somatic markers as body-state information guiding evaluation. Adolphs (2002) — the amygdala{"'"}s role in evaluating biological significance of stimuli.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The explicit mapping of the safety-threat evaluation as the origin stage of every emotional signal — not a background process but the first step in the Emotional Somatic Cycle. The evaluation produces the signal. This positions the evaluation as the entry point of the entire system architecture.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C2: SOMATIC CONTEXTUAL MEMORY ──────────── */}
          <section
            id="somatic-contextual-memory"
            aria-labelledby="heading-somatic-contextual-memory"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-somatic-contextual-memory"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Somatic Contextual Memory
            </h2>

            <p style={proseStyle}>
              The safety-threat evaluation does not operate on the current moment alone. It is calibrated by the body{"'"}s accumulated learning — every prior experience of safety and threat encoded somatically, below conscious awareness.
            </p>
            <p style={proseStyle}>
              The hippocampus and amygdala encode prior experience as pattern data that shapes every subsequent evaluation. A room that was safe last time shifts the gradient toward safety. A person whose presence preceded pain shifts it toward threat. This calibration is not cognitive — it is not a belief about what is dangerous or a memory the person recalls. It is the body{"'"}s learned weighting, carried in the nervous system{"'"}s detection architecture and applied automatically before conscious processing begins.
            </p>
            <p style={proseStyle}>
              This is why two people in the same room, hearing the same voice, can have their nervous systems reach opposite conclusions. One nervous system learned that tone is safe. The other learned it precedes harm. The sensory input is identical. The somatic contextual memory is different. The evaluation — and the signal it produces — follows the body{"'"}s learning, not the objective conditions.
            </p>

            <p style={{ ...proseStyle, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              The sensory channels:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", minWidth: 400 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Channel</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What It Detects</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Eyes</div>
                <div style={gridCellStyle}>Neural tissue, an extension of the brain outside the skull. The retina sends light data to the amygdala before the visual cortex has assembled an image. Faces, movement, spatial configuration — all evaluated for safety or threat before conscious vision completes.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Ears</div>
                <div style={gridCellStyle}>Direct pathway to the brainstem. The cochlea transmits sound frequency data that the nervous system evaluates for threat (sharp, sudden) or safety (rhythmic, prosodic) before the auditory cortex identifies the source. Tone of voice, rhythm, sudden sounds — processed below conscious awareness before meaning forms.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Nose</div>
                <div style={gridCellStyle}>The only sense with a direct pathway to the amygdala and hippocampus without going through the thalamus first. The olfactory bulb — one synapse from the amygdala — delivers chemical information with almost no processing delay. A smell can trigger a full safety or threat response before any thought forms.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Skin</div>
                <div style={gridCellStyle}>Nociceptors and thermoreceptors report contact, temperature, and pressure. The body reading its physical environment continuously.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Gut</div>
                <div style={gridCellStyle}>Approximately 100 million neurons. A second nervous system evaluating the internal environment and communicating upward through the vagus nerve.</div>
              </div>
            </div>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Interoceptive data</strong> — the body{"'"}s internal state. Heart rate, muscle tension, hormonal levels, gut signals, breathing pattern. The nervous system reads its own physiology as information about current conditions.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Relational cues</strong> — facial expression, vocal prosody, postural orientation of others. The social engagement system reads other bodies for signals of safety or threat. A softened face, an open posture, a regulated vocal tone — biological safety signals. A rigid face, a raised voice, a turned back — threat signals the nervous system processes before conscious evaluation begins.
            </p>
            <p style={proseStyle}>
              These channels do not report sequentially. They converge. The body reaches a conclusion — a position on the safety-threat gradient — before the mind has formulated a question. Somatic Contextual Memory is what calibrates that conclusion. The sensory channels are the instruments. The body{"'"}s accumulated learning is what sets their weighting.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>
                  Craig (2002) — interoception as a primary information channel for evaluating internal conditions. Porges (2011) — the social engagement system as the pathway for reading relational safety signals. LeDoux (1996) — the amygdala integrating multiple sensory channels for threat evaluation. Phelps (2004) — amygdala-hippocampal interaction in contextual fear conditioning. van der Kolk (2014) — the body encoding traumatic experience as somatic memory independent of cognitive recall.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  TEG-Blue names the body{"'"}s accumulated learning as Somatic Contextual Memory — a somatic, pre-cognitive bias that calibrates the safety-threat evaluation before the current moment is fully processed. Existing research describes each input channel separately — interoception (Craig), neuroception (Porges), threat detection (LeDoux), contextual memory (Phelps). TEG-Blue proposes that these channels converge into a single evaluative process calibrated by somatic learning, and that this calibration — not the objective conditions — determines the position on the safety-threat gradient and the signal that follows. This is bias, but it is somatic bias, not cognitive bias. It operates in the body{"'"}s detection architecture, not in the mind{"'"}s reasoning.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C3: DETECTION ─────────────────────────── */}
          <section
            id="detection"
            aria-labelledby="heading-detection"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-detection"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Detection: Condition Identified
            </h2>

            <p style={proseStyle}>
              The evaluation concludes. A condition is identified. The nervous system has processed the converging channels and reached a finding: safety confirmed, threat present, boundary crossed, bond active, belonging at risk, contamination detected, loss registered.
            </p>
            <p style={proseStyle}>
              This finding is the output of the evaluation and the input to signal generation. The detection is specific — not a general sense of good or bad, but a particular category of condition that the nervous system has identified as biologically relevant. The specificity of the detection determines which signal is generated. A boundary violation produces a different signal than a loss detection. A safety confirmation produces a different signal than a contamination finding.
            </p>
            <p style={proseStyle}>
              The detection is pre-cognitive. It completes before conscious processing begins. The body has identified the condition and begun organizing a response before a single thought has formed about what is happening.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>
                  LeDoux (1996) — the amygdala completing threat evaluation before cortical processing. Porges (2011) — neuroception producing a finding below conscious awareness. Frijda (1986) — emotions as action readiness triggered by specific eliciting conditions.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The explicit identification of detection as a discrete stage — the bridge between evaluation (continuous monitoring) and signal generation (physiological response). Existing research describes evaluation and response but does not isolate the moment the evaluation concludes and a specific finding is produced. TEG-Blue proposes that the specificity of this finding — what category of condition was detected — is what determines which signal the nervous system generates.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 2: EMOTIONAL SIGNAL GENERATION               */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 2" title="Emotional Signal Generation" color={MODEL_COLOR} />

          {/* ─── C4: SIGNAL GENERATION ────────────────── */}
          <section
            id="signal-generation"
            aria-labelledby="heading-signal-generation"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-signal-generation"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Signal Generation
            </h2>

            <p style={proseStyle}>
              The detection becomes a physiological event. The nervous system has identified a condition — and now generates a signal carrying that finding. Hormones release, muscles reorganize, heart rate shifts, neurochemistry changes. The body is responding to what was detected.
            </p>
            <p style={proseStyle}>
              This is signal generation: the moment the evaluation{"'"}s conclusion becomes a full physiological response pattern. The response is not a reaction to a thought. It is a biologically generated output of the detection process. The hormonal profile changes, the muscular configuration shifts, the autonomic nervous system recalibrates — all before cognition has processed the event.
            </p>
            <p style={proseStyle}>
              Each signal carries a specific finding. Fear carries: threat detected. Shame carries: belonging at risk. Joy carries: safety confirmed. The physiological response pattern differs across signals — different hormones, different muscle groups, different autonomic profiles — because each signal is responding to a different category of detection. The message varies. The physiological architecture is consistent: detection produces signal, signal reorganizes the body.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>
                  Panksepp (1998) — primary emotional systems generating distinct physiological configurations. Frijda (1986) — emotions as action tendencies with specific eliciting conditions and characteristic response patterns. Levine (1997) — the activation cycle as a physiological sequence initiated by detection.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The positioning of signal generation as a discrete stage in the Emotional Somatic Cycle — the bridge between detection (what was found) and the physiological response the body organizes. The signal is not the emotion felt. It is the physiological event the nervous system generates in response to a specific detection. This reframes the central question from {"\u201C"}how do I manage this emotion?{"\u201D"} to {"\u201C"}what is this signal telling me?{"\u201D"}
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C5: THE SPEED ────────────────────────── */}
          <section
            id="the-speed"
            aria-labelledby="heading-the-speed"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-the-speed"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              The Speed
            </h2>

            <p style={proseStyle}>
              Emotional processing reaches the body before cognition arrives. The amygdala receives sensory input and generates a threat response in approximately 12 milliseconds. A full physiological response — hormonal release, muscular reorganization, autonomic reconfiguration — is organized by 150 milliseconds. Cognitive processing reaches the cortex at approximately 300 milliseconds.
            </p>

            <figure role="figure" aria-label="Speed comparison diagram" style={{ margin: "24px 0" }}>
              <M1SpeedComparison />
              <figcaption style={{ fontSize: 13, color: '#94a3b8', fontStyle: 'italic', padding: '8px 16px 0', lineHeight: 1.5 }}>
                Emotional processing reaches the body at 12 milliseconds and produces a full physiological response by 150 milliseconds. Cognitive processing reaches the cortex at 300 milliseconds. The body responds before thought arrives.
              </figcaption>
              <noscript>
                <p style={{ padding: 16, color: '#94a3b8' }}>Interactive diagram: dual timeline comparing emotional processing (12ms amygdala, 80ms physiological response, 150ms nervous system state) with cognitive processing (300ms cortex, 500ms evaluation complete).</p>
              </noscript>
            </figure>

            <p style={proseStyle}>
              The body has already responded before thought begins. Heart rate has shifted, stress hormones have released, muscles have braced or softened — and the cortex is only now receiving the data. Cognition arrives to find the body already in a different physiological configuration.
            </p>
            <p style={proseStyle}>
              This timing gap has a structural consequence. The signal is generated and the body responds through the older, faster system. Cognition processes the signal through the newer, slower system. Cognition can interpret, modulate, suppress, or override the signal — but it does not generate the original signal itself. The signal originates from the evaluation process, not from thought.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>
                  LeDoux (1996) — the amygdala{"'"}s fast pathway: threat detection at 12 milliseconds, before cortical processing at 300 milliseconds. Panksepp (1998) — primary emotional systems operating independently of cortical control. Damasio (1994) — somatic markers as body-state signals that precede and guide cognitive evaluation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The timing gap positioned as the structural basis for the entire signal system. The 12ms-to-300ms difference is not a curiosity of neuroscience but the reason emotions function as a separate information channel. The body{"'"}s first information system is faster, older, and largely independent of the second. This is why emotion precedes cognition — and why the signal does not stop being generated when cognition arrives to override or suppress it.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 3: THREAT SIGNALS AND SAFETY SIGNALS         */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 3" title="Somatic Signals and Relational Signals" color={MODEL_COLOR} />

          <p style={{ ...proseStyle, marginBottom: 8 }}>
            Each signal below is mapped through the same architecture: what the nervous system detected, how the body responds, and what conditions resolve the activation. How the body reorganises into a sustained nervous system state after the signal is generated is the territory of <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link>. Whether the restoration sequence completes or remains unresolved is the territory of <Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link>.
          </p>

          <M1EmotionNav />

          {/* ─── C6: SOMATIC VS RELATIONAL SIGNALS ── */}
          <section style={{ marginBottom: 48 }}>
            <p style={proseStyle}>
              The signals the nervous system generates divide into two groups based on what the signal tells the nervous system to do.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: SAFETY_COLOR }}>Somatic signals</strong> tell the nervous system to respond with the body. The detection is about conditions in the physical environment. Somatic signals can complete through the body{"'"}s own channels. Restoration does not require another person.
            </p>
            <ul style={{ paddingLeft: 20, margin: "8px 0 20px", fontSize: 14, lineHeight: 1.8, color: TEXT.secondary }}>
              <li>Joy — safety confirmed</li>
              <li>Happiness — sustained positive condition</li>
              <li>Admiration — value detected in another</li>
              <li>Pride — own value recognised</li>
              <li>Fear — threat detected</li>
              <li>Anger — boundary crossed</li>
              <li>Stress — demands exceed resources</li>
              <li>Anxiety — anticipatory threat</li>
              <li>Frustration — action blocked</li>
              <li>Resentment — accumulated unresolved boundary violations</li>
              <li>Disgust — contamination detected</li>
              <li>Contempt — other evaluated as beneath engagement</li>
              <li>Confusion — cannot process current information</li>
            </ul>
            <p style={proseStyle}>
              <strong style={{ color: THREAT_COLOR }}>Relational signals</strong> detect conditions in the belonging field. The detection is about whether belonging is present, at risk, ruptured, or absent. Relational signals require another person for completion — not as a psychological preference but as a biological design constraint.
            </p>
            <ul style={{ paddingLeft: 20, margin: "8px 0 20px", fontSize: 14, lineHeight: 1.8, color: TEXT.secondary }}>
              <li>Love — belonging is present</li>
              <li>Trust — belonging is confirmed in a specific person</li>
              <li>Gratitude — belonging was reinforced</li>
              <li>Compassion — belonging extends to the other{"'"}s experience</li>
              <li>Shame — belonging is at risk</li>
              <li>Guilt — belonging was ruptured by harm</li>
              <li>Loneliness — belonging is absent</li>
              <li>Disappointment — belonging was expected but not delivered</li>
              <li>Sadness — belonging was lost</li>
              <li>Grief — belonging is permanently gone</li>
            </ul>
            <p style={proseStyle}>
              Relational signals that detect risk or absence — shame, guilt, loneliness, disappointment, sadness, grief — are designed as connection signals. Each was designed to complete through relational contact, operating from Safety {"&"} Openness. Whether these signals stay connection signals or become threat signals depends on interoceptive access (<Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link>). When interoceptive access is present, the person registers the signal as information and the body opens toward repair. When it is absent, the nervous system escalates to Threat {"&"} Defence — the signal distorts from a connection signal into a threat signal.
            </p>
          </section>

          {/* ─── CONNECTION ──────────────────────── */}
          <section id="somatic-signals" style={{ marginBottom: 24, scrollMarginTop: 80 }}>
            <h2 style={{
              ...sectionHeadingStyle(SAFETY_COLOR),
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
              <span style={{
                width: 10, height: 10, borderRadius: "50%",
                background: SAFETY_COLOR, display: "inline-block", flexShrink: 0,
              }} />
              Somatic Signals
            </h2>
            <p style={proseStyle}>
              Somatic signals tell the nervous system to respond with the body. The detection is about conditions in the physical environment. The body{"'"}s own channels — movement, breathing, crying, sleep, temperature — can complete the restoration sequence without requiring another person.
            </p>
          </section>

          <p style={{ fontFamily: FONT.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: SAFETY_COLOR, marginBottom: 8, marginTop: 32 }}>
            Approach {"&"} Expansion — opening, energy moves outward
          </p>

          <EmotionSection
            id="joy"
            name="Joy"
            signal="Safety confirmed"
            bodySignature="Muscle tension releases, breathing deepens, posture opens. Dopamine flows, attention broadens, the body moves toward the source."
            mechanism="Joy is the signal the nervous system generates when conditions are evaluated as safe and the environment supports approach. The body expands — energy moves outward, sensory engagement broadens, and the system orients toward pleasurable contact. The dopaminergic system activates not as reward but as approach circuitry: the body moves toward what is safe. Joy is not an absence of threat. It is a positive detection — the nervous system has confirmed that conditions support openness."
            activates="Connection"
            activatesColor={SAFETY_COLOR}
            restorationType="Somatic"
            restorationDetail="Presence — fully experienced in the body without scanning for what will take it away"
            research="Fredrickson (2001) — broaden-and-build theory: positive emotions widen perception and build resources. Panksepp (1998) — PLAY and SEEKING systems as primary emotional circuits. Berridge & Robinson (2003) — dopamine as wanting/approach signal, not pleasure signal."
            tegBlueAdds="Joy mapped as a detection signal (safety confirmed) rather than a reward state. The distinction between dopamine-as-approach and dopamine-as-pleasure changes what it means when joy is absent: the nervous system is not failing to feel good — it is not detecting safety."
          />

          <EmotionSection
            id="happiness"
            name="Happiness"
            signal="Sustained positive condition"
            bodySignature="Serotonergic tone rises — general positive affect, body maintains openness without the urgency of approach, a settled sustained state."
            mechanism="Happiness is the signal generated when a stable condition of sufficiency or well-being is present. Unlike joy, which spikes in response to a specific safety confirmation, happiness operates through serotonergic rather than dopaminergic chemistry — the nervous system maintains an open, settled configuration over time. Positive affect is sustained rather than spiking. The body is not approaching a source; it is resting in a condition that continues to support openness."
            activates="Connection"
            activatesColor={SAFETY_COLOR}
            restorationType="Somatic"
            restorationDetail="Presence without interruption — continued contact with the condition that produced it"
            research="Seligman (2002) — authentic happiness and well-being theory. Diener (2000) — subjective well-being as sustained positive evaluation. Berridge & Kringelbach (2015) — distinction between wanting (dopamine) and liking (opioid/serotonergic systems)."
            tegBlueAdds="The serotonergic/dopaminergic distinction applied to signal classification: joy and happiness carry different neurochemical signatures because the detection is different. Joy detects a specific safety event. Happiness detects a sustained condition. Happiness is more vulnerable to disruption than joy because it depends on continued contact with the condition — chronic threat monitoring degrades it even when the condition is present."
          />

          <EmotionSection
            id="admiration"
            name="Admiration"
            signal="Value detected in another"
            bodySignature="Orientation toward the other — body opens, approach circuitry activates, attention focuses on what was detected. Sometimes a brief pause of recognition."
            mechanism="Admiration is the signal generated when the nervous system detects something valuable, skillful, or meaningful in another person. The body orients toward what was recognised — posture opens, attention focuses, and the system opens toward learning, inspiration, or appreciation. The detection is accurate: something of value is present. The signal completes when cognition allows the recognition to land without converting it into comparison or self-diminishment."
            activates="Connection"
            activatesColor={SAFETY_COLOR}
            restorationType="Somatic"
            restorationDetail="Presence with the recognition — allowing the detection to land without converting it into comparison, obligation, or self-diminishment"
            research="Algoe & Haidt (2009) — admiration as an other-praising emotion orienting toward excellence. Immordino-Yang, McColl, Damasio & Damasio (2009) — neural correlates of admiration and compassion."
            tegBlueAdds="Admiration mapped as a detection signal (value in another) with a specific distortion pathway. The detection is the same whether the signal lands as admiration or distorts into envy — what differs is whether the person can receive the finding."
            distortion={"When this signal cannot be received — when cognition or defensive configuration prevents the finding from landing — the detection does not disappear. It distorts. Value is still detected in the other person, but the recognition cannot be metabolised as admiration. The person experiences the gap instead of the recognition. This is envy: the same detection, unable to land."}
          />

          <EmotionSection
            id="pride"
            name="Pride"
            signal="Own value recognised"
            bodySignature="Expansion, warmth, upward energy — chest lifts, posture shifts, the body opens from the inside."
            mechanism="Pride is the signal generated when the nervous system registers one's own contribution, quality, or growth as meaningful or valuable. The body organizes toward internal expansion — warmth, uprightness, an opening from the inside. The signal completes through internal recognition. When the recognition depends entirely on external validation, the signal may remain unstable — the body generates the finding but cognition routes it outward rather than allowing it to settle internally."
            activates="Connection"
            activatesColor={SAFETY_COLOR}
            restorationType="Somatic"
            restorationDetail="Presence with the self-recognition, without requiring external validation — the signal completes through own awareness of contribution"
            research="Tracy & Robins (2007) — authentic vs hubristic pride as distinct self-conscious emotions. Williams & DeSteno (2008) — pride as functional social emotion."
            tegBlueAdds="Pride mapped as a detection signal (own value recognised) with a specific distortion pathway. The distinction between authentic pride (signal received) and hubristic pride (signal unable to land) reframed as a signal-reception question rather than a character distinction."
            distortion={"When this signal cannot be received — when one's own value cannot be stably held through internal recognition — the detection does not disappear. It distorts along two pathways. The same self-recognition that would have landed as pride may land as elevation over others — this is arrogance: own value expressed as positioning rather than settled recognition. Or it may land as guarding against others being valued — this is jealousy: the detection of own value cannot be held securely enough to tolerate value being recognized in others."}
          />

          <p style={{ fontFamily: FONT.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: SAFETY_COLOR, marginBottom: 8, marginTop: 32 }}>
            Mobilization — sympathetic activation, energy rises
          </p>




          <EmotionSection
            id="fear"
            name="Fear"
            signal="Threat detected"
            bodySignature="Sympathetic activation — heart rate rises, muscles tense, sensory acuity sharpens, breathing shifts to rapid and shallow."
            mechanism="Fear is the signal generated when the nervous system evaluates a condition as dangerous. The amygdala fires through the fast pathway — 12 milliseconds, before the cortex has begun processing — and the body mobilizes. Heart rate rises, adrenaline releases, muscles brace for action, and sensory acuity sharpens toward the source of threat. This is the fastest signal in the system: the body is already responding before a single conscious thought has formed. Fear is not irrational. It is the nervous system's most urgent mobilization signal, generated when the safety-threat evaluation concludes: danger present."
            activates="Protection"
            activatesColor={THREAT_COLOR}
            restorationType="Somatic"
            restorationDetail="Threat must resolve — danger passes, person acts, or safety is established"
            research="LeDoux (1996) — the amygdala's fast pathway: threat detection before conscious processing. Panksepp (1998) — FEAR system as primary emotional circuit. Porges (2011) — neuroception and the autonomic response to perceived danger."
            tegBlueAdds="Fear mapped as the fastest signal in the system — the amygdala fast pathway completing before cortical processing begins. This positions fear not as an overreaction but as the nervous system's most time-critical evaluation output. The 12ms amygdala vs 300ms cortex timing gap is the physiological basis for why emotion precedes cognition."
          />

          <EmotionSection
            id="anger"
            name="Anger"
            signal="Boundary crossed"
            bodySignature="Blood pressure rises, muscles in the jaw, arms, and shoulders brace. Energy directed outward — the body mobilises for assertion, interruption, or correction."
            mechanism="Anger is the signal generated when the nervous system detects that a limit, need, right, or territory has been violated. Energy is directed outward — the organism mobilises for assertion, interruption, or correction. The physiological signature is distinct: blood pressure rises, jaw and shoulder muscles brace, and the sympathetic system channels activation toward confrontation rather than flight. Anger is a boundary-maintenance signal. When the boundary is restored, acknowledged, or effectively defended, the activation resolves. When it does not, the activation may persist and become displaced or rerouted."
            activates="Protection"
            activatesColor={THREAT_COLOR}
            restorationType="Somatic"
            restorationDetail="Boundary must be reasserted or acknowledged — through communication, action, or environmental change"
            research="Panksepp (1998) — RAGE system as primary emotional circuit. Tavris (1989) — anger as social signal for boundary maintenance. van der Kolk (2014) — anger as incomplete defensive response when the boundary was never restored."
            tegBlueAdds="Anger mapped as a boundary-maintenance signal — what was detected is a violation, and the body mobilises toward correction. The distinction between anger-as-signal (boundary crossed) and anger-as-stuck-state (chronic rage) follows the same architecture as all other emotions: whether the restoration pathway can run."
          />

          <EmotionSection
            id="stress"
            name="Stress"
            signal="Demand-resource mismatch"
            bodySignature="HPA axis activation — cortisol rises, energy redirects toward the demand, non-essential functions suppress, attention narrows."
            mechanism="Stress is the signal generated when current demands exceed available physiological, cognitive, or emotional resources. The nervous system reallocates energy toward what is most urgent. Cortisol sustains alertness, non-essential functions suppress, and attention narrows toward the mismatch. Stress is an allocation signal: the body is reorganizing its resources to address a gap. The activation resolves when demands decrease, resources increase, or the mismatch is brought back within a tolerable range."
            activates="Protection"
            activatesColor={THREAT_COLOR}
            restorationType="Somatic"
            restorationDetail="Demand must be met or resource restored — the gap between what is required and what is available must close"
            research="Sapolsky (2004) — glucocorticoid stress response and the physiology of chronic activation. McEwen (1998) — allostatic load as the cumulative cost of sustained demand. Selye (1956) — general adaptation syndrome."
            tegBlueAdds="Stress mapped as a demand-resource mismatch signal — not a general state of feeling overwhelmed but a specific detection that resources are insufficient for current demands. This specificity changes intervention logic: the activation resolves when the gap closes, not when the person calms down."
          />

          <EmotionSection
            id="anxiety"
            name="Anxiety"
            signal="Anticipatory threat"
            bodySignature="Chronic cortisol elevation — BNST activates (sustained anxiety circuit, distinct from amygdala's acute fear), body scans continuously for unresolved future conditions."
            mechanism="Anxiety is the signal generated when the nervous system detects a possible future threat that remains unresolved. The BNST (bed nucleus of the stria terminalis) — a sustained anxiety circuit distinct from the amygdala's acute fear response — maintains readiness under uncertainty. Vigilance increases, scanning continues, and activation is sustained over time. Unlike fear, which responds to present danger, anxiety responds to unresolved future conditions. The body maintains mobilization for a threat that has not yet arrived and may not arrive."
            activates="Protection"
            activatesColor={THREAT_COLOR}
            restorationType="Somatic"
            restorationDetail="Uncertainty must resolve — future condition assessed and accepted, threat materialises and converts to actionable fear, or sufficient safety established"
            research="Davis, Walker, Miles & Grillon (2010) — BNST as the sustained anxiety circuit, distinct from amygdala's acute fear. Grillon (2008) — anticipatory anxiety and unpredictable threat. Barlow (2002) — anxiety as a future-oriented mood state."
            tegBlueAdds="The BNST/amygdala distinction applied to signal classification: fear and anxiety are generated through different circuits because the detection is different. Fear detects present danger (amygdala, fast). Anxiety detects unresolved future threat (BNST, sustained). This neuroanatomical distinction explains why anxiety does not resolve through the same pathway as fear — the circuit maintaining it is different."
          />

          <EmotionSection
            id="frustration"
            name="Frustration"
            signal="Action blocked"
            bodySignature="Sympathetic activation intensifies — heart rate rises, jaw tightens, muscles brace. Energy builds with no outlet. Noradrenaline sustains alertness toward the obstruction."
            mechanism="Frustration is the signal generated when a goal, path, or intended action is obstructed. The nervous system detects that effort is being expended without producing the expected result. Energy builds with no outlet — the body mobilizes for action but the action cannot complete. The activation is distinct from anger: anger detects a boundary crossed, frustration detects a path blocked. When the obstruction persists without resolution, the activation accumulates."
            activates="Protection"
            activatesColor={THREAT_COLOR}
            restorationType="Somatic"
            restorationDetail="The blocked action must complete — obstacle removed, alternative path found, or goal achieved"
            research="Dollard, Miller, Doob, Mowrer & Sears (1939) — frustration-aggression hypothesis. Amsel (1958) — frustrative nonreward as a primary motivational state. Berkowitz (1989) — frustration as aversive stimulation generating negative affect."
            tegBlueAdds="Frustration mapped as a distinct signal from anger — both mobilize, but the detection differs. Anger detects a boundary crossed (violation). Frustration detects a path blocked (obstruction). The distinction changes intervention logic: anger resolves through boundary restoration, frustration resolves through the obstruction clearing or an alternative route."
          />

          <EmotionSection
            id="resentment"
            name="Resentment"
            signal="Accumulated unresolved boundary violations"
            bodySignature="Sustained sympathetic tone — chronic cortisol and noradrenaline elevation, persistent muscle tension, narrowed attention. A low burn, not a spike."
            mechanism="Resentment is the signal generated when boundary violations have occurred repeatedly without resolution. The nervous system carries the accumulated activation from multiple anger signals that never completed their restoration pathway. The activation is not spiking — it is sustained at a low burn. The body maintains mobilization against a threat that is not acute but has never been resolved."
            activates="Protection"
            activatesColor={THREAT_COLOR}
            restorationType="Somatic"
            restorationDetail="The unresolved boundary violations must be addressed — the pattern itself must be interrupted or acknowledged"
            research="Worthington (2006) — unforgiveness and resentment as sustained stress response. Enright & Fitzgibbons (2000) — resentment as maintained emotional state with physiological consequences. Sapolsky (2004) — chronic stress activation from sustained unresolved threat."
            tegBlueAdds="Resentment mapped as accumulated anger — multiple boundary violations that never completed restoration. The cumulative nature explains why resentment feels different from anger: anger spikes in response to a specific violation, resentment sustains as a chronic load from many violations that never resolved."
          />

          <p style={{ fontFamily: FONT.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: THREAT_COLOR, marginBottom: 8, marginTop: 32 }}>
            Expulsion — visceral rejection, nausea, closure
          </p>

          <EmotionSection
            id="disgust"
            name="Disgust"
            signal="Contamination detected"
            bodySignature="Nausea, retching, mouth and nose closing — gustatory cortex and insula activate. The body organises toward rejection."
            mechanism="Disgust is the signal generated when the nervous system evaluates something as unsafe to take in, incorporate, or remain close to. The body organizes toward rejection and expulsion — nausea, aversion, withdrawal, and sensory closure. The insula and gustatory cortex activate, producing the visceral rejection response. Disgust originated as a contamination-avoidance mechanism (physical toxins, spoiled food) and expanded to evaluate social and moral contamination through shared neural substrates."
            activates="Protection"
            activatesColor={THREAT_COLOR}
            restorationType="Somatic"
            restorationDetail="Removal — contaminant expelled, distance established, or environment confirmed safe"
            research="Rozin, Haidt & McCauley (2008) — disgust as contamination-avoidance expanding into the moral domain. Chapman & Anderson (2013) — shared neural substrates of physical and moral disgust."
            tegBlueAdds="Disgust mapped as the most visceral rejection signal in the system, with the shared neural substrate between physical and moral disgust explaining how contamination-avoidance circuitry enables dehumanisation — when disgust is directed at people, the same expulsion mechanism that protects against physical toxins produces social exclusion and moral condemnation."
          />

          <EmotionSection
            id="contempt"
            name="Contempt"
            signal="Other evaluated as beneath engagement"
            bodySignature="Cold disengagement — one side of the upper lip raises (the only reliably asymmetric facial expression across cultures). Energy withdraws from the other, not toward them."
            mechanism="Contempt is the signal generated when another person or group is evaluated as not worth engaging with — inferior, incompetent, or beneath consideration. The body organizes toward dismissal and distancing. The nervous system withdraws engagement — not with the urgency of disgust's expulsion, but with cold disengagement. Energy does not mobilize toward the other. It withdraws from them. Chronic contempt in relationships is a strong predictor of relational breakdown because the withdrawal of engagement removes the conditions for relational restoration."
            activates="Protection"
            activatesColor={THREAT_COLOR}
            restorationType="Somatic"
            restorationDetail="Re-evaluation of the other — or recognition that the contempt is serving a regulatory function (maintaining distance, preserving superiority that stabilizes position)"
            research="Ekman (1992) — contempt as the only reliably asymmetric facial expression. Gottman (1994) — contempt as the strongest predictor of relationship dissolution. Fischer & Roseman (2007) — contempt as a distancing emotion distinct from anger and disgust."
            tegBlueAdds="Contempt mapped as a distinct signal from disgust — both reject, but the mechanism differs. Disgust expels (visceral, nausea, closure). Contempt withdraws engagement (cold, dismissive, distancing). Gottman's finding that contempt predicts relational breakdown more reliably than any other signal aligns with the signal architecture: contempt removes the conditions under which relational restoration can occur."
          />

          <p style={{ fontFamily: FONT.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: SAFETY_COLOR, marginBottom: 8, marginTop: 32 }}>
            Processing pause — slowing, freeze-adjacent, energy turns inward
          </p>

          <EmotionSection
            id="confusion"
            name="Confusion"
            signal="Cannot process current information"
            bodySignature="The body slows and turns inward. Cognitive processing loops. A freeze-adjacent quality — partial withdrawal from engagement while the system attempts to process."
            mechanism="Confusion is the signal generated when the nervous system detects that incoming information cannot be organized into a coherent evaluation. The data is contradictory, incomplete, or exceeds the system's current processing capacity. The safety-threat evaluation cannot conclude — the system cannot determine whether conditions are safe or threatening. Attention narrows inward rather than toward a specific external source. The body signals that action should be paused until the information becomes readable."
            activates="Somatic"
            activatesColor={SAFETY_COLOR}
            restorationType="Somatic"
            restorationDetail="Space and time to process — engagement reduced until the data becomes readable"
            research="Festinger (1957) — cognitive dissonance as the state produced by contradictory information. Schwartz (2004) — the paradox of choice: information overload degrading decision capacity. Kagan (2002) — uncertainty as a primary source of distress in development."
            tegBlueAdds="Confusion mapped as a somatic signal — not a cognitive failure but a nervous system detection that current information cannot be processed. The body's response (slow down, withdraw, pause action) is protective: rushing through confusion — forcing a conclusion before the evaluation can complete — may produce a false evaluation. The signal is telling the system to take space and time."
          />


          {/* ─── RELATIONAL SIGNALS ─────────────────────── */}
          <section id="relational-signals" style={{ marginBottom: 24, scrollMarginTop: 80 }}>
            <h2 style={{
              ...sectionHeadingStyle(THREAT_COLOR),
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
              <span style={{
                width: 10, height: 10, borderRadius: "50%",
                background: THREAT_COLOR, display: "inline-block", flexShrink: 0,
              }} />
              Relational Signals
            </h2>
            <p style={proseStyle}>
              Relational signals tell the nervous system to respond through connection. The detection is about conditions in the relational field — bond, belonging, harm, absence, loss. These signals require another person for completion: not as a psychological preference but as a biological design constraint. The nervous system evolved to complete relational activation through co-regulation.
            </p>
          </section>

          <p style={{ fontFamily: FONT.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: THREAT_COLOR, marginBottom: 8, marginTop: 32 }}>
            Bonding {"&"} Proximity — orientation toward the other
          </p>

          <EmotionSection
            id="love"
            name="Love"
            signal="Belonging is present"
            bodySignature="Oxytocin releases, warmth, pull toward closeness — the co-regulation circuit activates, the body orients toward the other."
            mechanism="Love is the signal generated when the nervous system detects a meaningful bond — present, real, and experienced in the body. The organism orients toward closeness, warmth, reciprocity, and co-regulated contact. Oxytocin mediates the approach — not as a feeling of affection but as the activation of the co-regulation circuitry that makes sustained proximity possible. The signal is relational in content: what was detected is something between two people, not a condition of the body alone."
            activates="Relational"
            activatesColor={THREAT_COLOR}
            restorationType="Relational"
            restorationDetail="Reciprocity — the signal received and returned through genuine felt presence, not performance"
            research="Bowlby (1969) — attachment as a primary biological system requiring reciprocity. Panksepp (1998) — CARE system as primary emotional circuit. Uvnas-Moberg (2003) — oxytocin and the calm-and-connection system. Coan (2008) — social baseline theory."
            tegBlueAdds="Love mapped as a relational signal requiring reciprocity for completion. The co-regulation circuit is the mechanism — oxytocin is not the feeling of love but the neurochemical substrate that enables sustained proximity. When the bond is one-sided, unavailable, or instrumentalised, the restoration sequence remains incomplete."
          />

          <EmotionSection
            id="trust"
            name="Trust"
            signal="Belonging confirmed in a specific person"
            bodySignature="Guard-dropping — vagal tone shifts, body moves from monitoring to open contact, muscles around eyes and throat soften."
            mechanism="Trust is the signal generated when repeated evidence indicates that a particular person is safe enough to lower defensive monitoring around. The body shifts from scanning to openness — muscles soften, guarding decreases, and the nervous system reallocates energy from vigilance to contact. Trust is not a decision. It is a physiological shift: the body has accumulated enough evidence to change its monitoring posture around a specific person. It builds slowly through consistent evidence and collapses rapidly when violated."
            activates="Relational"
            activatesColor={THREAT_COLOR}
            restorationType="Relational"
            restorationDetail="Reciprocity — openness met with equivalent openness, consistent evidence over time"
            research="Rempel, Holmes & Zanna (1985) — trust as a relationship-specific construct building through repeated interactions. Kosfeld, Heinrichs, Zak, Fischbacher & Fehr (2005) — oxytocin and trust."
            tegBlueAdds="Trust mapped as a person-specific safety evaluation, not a general disposition. The body changes its monitoring posture around a specific person — this is a physiological shift, not a cognitive decision. The asymmetry between building (slow, evidence-dependent) and collapse (fast, single-violation) reflects the nervous system's threat-detection bias."
          />

          <EmotionSection
            id="gratitude"
            name="Gratitude"
            signal="Belonging was reinforced"
            bodySignature="Warmth, orientation toward the other, brief vulnerability in receiving — the body opens toward the source with the settling of something received."
            mechanism="Gratitude is the signal generated when a needed resource, gesture, or act of care has been received. The body orients toward the source — warmth, relational approach, and a brief increase in receptive vulnerability. The signal is relational: something was given, and the receiving is a two-person event. Gratitude completes through acknowledgment that reaches the other person — not as performance but as genuine contact with what was received. Gratitude felt but unexpressed stays partially open."
            activates="Relational"
            activatesColor={THREAT_COLOR}
            restorationType="Relational"
            restorationDetail="Expression that reaches the other person — not performance but genuine contact with what was received"
            research="Emmons & McCullough (2003) — gratitude as a relational emotion strengthening social bonds. Algoe (2012) — find, remind, and bind theory of gratitude."
            tegBlueAdds="Gratitude mapped as a signal requiring expression for completion — felt gratitude that is not expressed stays partially open. The vulnerability of receiving is the mechanism: the body opens to take something in, and the signal completes when acknowledgment returns to the giver."
          />

          <EmotionSection
            id="compassion"
            name="Compassion"
            signal="Belonging extends to the other's experience"
            bodySignature="Movement toward the other — body orients, approaches, reaches. Resonance with the other's state while maintaining boundary."
            mechanism="Compassion is the signal generated when another person's suffering is detected and registers as relevant. The body orients toward approach and care — not fusion, not absorption, but contact with the other's state while maintaining self-other differentiation. The mechanism requires resonance (the other's state is felt in one's own body) and boundary (the person remains in their own physiological state while feeling what the other is experiencing). Compassion that absorbs — where the boundary dissolves — does not complete for either person."
            activates="Relational"
            activatesColor={THREAT_COLOR}
            restorationType="Relational"
            restorationDetail="Contact with the other's state without absorption — present with what the other is feeling while remaining in one's own body"
            research="Singer & Klimecki (2014) — compassion vs empathic distress as distinct neural and experiential states. Goetz, Keltner & Simon-Thomas (2010) — compassion as a distinct affective state orienting toward care. Neff (2003) — self-compassion."
            tegBlueAdds="Compassion mapped as a signal requiring maintained boundary during resonance. The resonance-boundary distinction separates compassion (sustainable, restorative) from empathic distress (absorptive, depleting). The mechanism requires two capacities: feeling the other's state (resonance) and remaining in one's own body (boundary)."
          />

          <p style={{ fontFamily: FONT.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: THREAT_COLOR, marginBottom: 8, marginTop: 32 }}>
            Connection signals — designed to repair, seek, or witness
          </p>

          <p style={proseStyle}>
            Each signal below was designed to complete through relational contact, operating from Safety {"&"} Openness. When interoceptive access is present, the person registers the signal as information and the body opens toward repair or seeking. When interoceptive access is absent, the nervous system escalates to Threat {"&"} Defence — the signal distorts from a connection signal into a threat signal.
          </p>

          <EmotionSection
            id="shame"
            name="Shame"
            signal="Belonging is at risk"
            bodySignature="Heat, shrinking, gaze aversion, the body contracts and makes itself smaller — vasodilation to skin surface (the blush). Mixed autonomic when distorted into threat."
            mechanism={"Shame is the signal generated when the nervous system detects that belonging is at risk. Its designed function is appeasement and repair — the body makes itself smaller, averts gaze, shows vulnerability. These are visible signals to the group: \"I know something went wrong, I'm not a threat, please don't exclude me.\" Designed to operate from Connection, with the body opening toward the other for repair. When the other person stays, belonging is confirmed, and the signal completes. When interoceptive access is absent, the content — \"I might lose belonging\" — hits the threat evaluation without being processed as readable information. The nervous system escalates to Protection. Now the body runs two contradictory programs: the signal says collapse, hide, make smaller (appeasement) while the state says mobilise, brace, defend (threat). The pain of shame as commonly experienced is this conflict — not the original signal."}
            activates="Relational"
            activatesColor={THREAT_COLOR}
            restorationType="Relational"
            restorationDetail="Another person who stays — present without contempt after seeing the thing that feels shameful. That staying is the biological signal the restoration pathway needs."
            research="Schore (2003) — shame as a primary regulatory affect requiring relational processing. Tangney & Dearing (2002) — shame vs guilt as distinct self-conscious emotions. Brown (2006) — shame resilience requiring relational connection."
            tegBlueAdds="Shame identified as a connection signal designed to complete through relational repair from Connection — not a threat signal. The pain of shame is the distortion: the signal and the threat state running in opposite autonomic directions simultaneously. The distortion occurs when interoceptive access is absent and the content hits the threat evaluation raw. This explains why shame is the most biologically expensive emotional signal — the body is fighting itself."
          />

          <EmotionSection
            id="guilt"
            name="Guilt"
            signal="Belonging was ruptured by harm"
            bodySignature="Weight or tension in the chest, restlessness, pull toward repair — the nervous system generates sustained discomfort that orients toward the person who was affected."
            mechanism={"Guilt is the signal generated when the nervous system detects that one's behaviour has negatively affected another person. Its designed function is repair — the body orients toward the person who was affected, generating sustained discomfort that pulls toward acknowledgment and action. Designed to operate from Connection, with the body moving toward the other to restore the bond. When repair occurs, the signal completes. When interoceptive access is absent, the content — \"I did harm\" — hits the threat evaluation. The signal says approach, repair, go toward the other. The state says defend, escape, protect. The weight, the churning, the self-punishment — that is the conflict between the designed function (repair) and the threat state (defence)."}
            activates="Relational"
            activatesColor={THREAT_COLOR}
            restorationType="Relational"
            restorationDetail="Acknowledgment of impact, genuine repair, and the other person's experience felt in the body — not just cognitively registered"
            research="Tangney & Dearing (2002) — guilt as behaviour-focused self-conscious emotion. Baumeister, Stillwell & Heatherton (1994) — guilt as relational regulator. Koenigs et al. (2007) — vmPFC damage and impaired guilt processing."
            tegBlueAdds="Guilt identified as a repair signal designed to complete through relational contact — the body moving toward the other to restore the bond. The distortion occurs when the repair signal hits a threat state: the approach-avoidance conflict (repair vs self-protection) produces the characteristic weight and self-punishment. Cognitive acknowledgment without embodied repair leaves the signal open."
          />

          <EmotionSection
            id="loneliness"
            name="Loneliness"
            signal="Belonging is absent"
            bodySignature="The body contracts and pulls inward. Cortisol rises, sleep architecture degrades, immune function suppresses. A characteristic ache — a felt absence that is physiological, not just psychological."
            mechanism={"Loneliness is the signal generated when the nervous system detects that meaningful connection is absent. Its designed function is seeking — the body orients toward others, scanning for someone safe and available. Designed to drive approach from Connection. When genuine connection is found, the signal completes. When interoceptive access is absent, the content — \"I am alone\" — hits the threat evaluation. The signal says seek, approach, find connection. The state says defend, withdraw, protect. The person is biologically driven toward connection while physiologically mobilised against approach. This is why loneliness isolates — the signal drives seeking while the state makes approach feel dangerous."}
            activates="Relational"
            activatesColor={THREAT_COLOR}
            restorationType="Relational"
            restorationDetail="Genuine connection — not proximity, not performance, but felt relational contact where the nervous system registers another person as safe and available"
            research="Cacioppo & Patrick (2008) — loneliness as a biological signal with distinct physiological consequences (cortisol, immune function, sleep). Hawkley & Cacioppo (2010) — loneliness and health: mechanisms and interventions. Holt-Lunstad, Smith & Layton (2010) — social relationships and mortality risk."
            tegBlueAdds="Loneliness identified as a seeking signal designed to drive approach — not a withdrawal signal. The isolation loneliness produces is the distortion: the seeking signal running inside a threat state that makes approach feel dangerous. The body distinguishes between proximity and connection — being around people does not resolve the signal."
          />

          <EmotionSection
            id="disappointment"
            name="Disappointment"
            signal="Belonging was expected but not delivered"
            bodySignature="The body withdraws — energy turns inward, posture drops, engagement decreases. A characteristic deflation distinct from sadness's conservation."
            mechanism={"Disappointment is the signal generated when something or someone that was expected to deliver did not. Its designed function is recalibration — updating expectations from Connection. Either the source re-proves trustworthiness through new evidence, or expectations adjust to match reality. When recalibration occurs, the signal completes. When interoceptive access is absent, the failed evaluation generalises — distrust spreads beyond the source. Deflation (the signal) and mobilisation (the threat state) run simultaneously."}
            activates="Relational"
            activatesColor={THREAT_COLOR}
            restorationType="Relational"
            restorationDetail="Updated evaluation — the source proves trustworthy through new evidence, or expectations recalibrate to match what the source can actually deliver"
            research="van Dijk & Zeelenberg (2002) — disappointment as outcome-related emotion distinct from regret. Bell (1985) — disappointment and decision theory. Zeelenberg, van Dijk, Manstead & van der Pligt (2000) — disappointment as distinct from other negative emotions."
            tegBlueAdds="Disappointment identified as a recalibration signal designed to update trustworthiness evaluations. The distortion occurs when the failed evaluation generalises — distrust spreads beyond the source because the content was not processed as specific information but as a general threat."
          />

          <p style={{ fontFamily: FONT.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: THREAT_COLOR, marginBottom: 8, marginTop: 32 }}>
            Conservation — slowing, tears, energy turns inward
          </p>

          <EmotionSection
            id="sadness"
            name="Sadness"
            signal="Belonging was lost"
            bodySignature="Activity slows, energy turns inward, tears, heaviness, withdrawal — the body enters conservation mode."
            mechanism={"Sadness is the signal generated when the nervous system detects that something valued has ended, is absent, or is no longer available. Its designed function is witnessing — the body enters conservation (slowing, tears, energy inward), designed to operate from Connection in the presence of someone who holds the loss without fixing it. The tears are part of the discharge mechanism (lacrimal-vagal pathway). When someone stays present with the loss, the signal completes. When interoceptive access is absent, the content hits the threat evaluation. The signal says slow down, yield, let someone be with this. The state says mobilise, brace, act. The autonomic conflict is strong — sadness is parasympathetic while Protection is sympathetic."}
            activates="Relational"
            activatesColor={THREAT_COLOR}
            restorationType="Relational"
            restorationDetail="The presence of someone who stays with the loss without trying to resolve it. Restoration requires relational evidence — someone present with what was lost."
            research="Bowlby (1980) — grief as attachment behaviour. Panksepp (1998) — GRIEF/PANIC system as primary emotional circuit. Stroebe & Schut (1999) — dual process model of bereavement."
            tegBlueAdds="Sadness identified as a witnessing signal designed to complete through relational presence — not a withdrawal signal. The tears are part of the biological discharge mechanism. Interrupting sadness prevents restoration. The restoration pathway does not require the loss to be resolved. It requires another person to be present with what was lost."
          />

          <EmotionSection
            id="grief"
            name="Grief"
            signal="Belonging is permanently gone"
            bodySignature="Deep conservation — activity slows profoundly, waves of activation alternate with periods of numbness. Sympathetic spikes occur when the loss is re-detected."
            mechanism={"Grief is the signal generated when a loss does not end. Its designed function is accompaniment — the body enters deep conservation, oscillating between active processing and shutdown, designed to be sustained in the presence of someone who stays over time. Grief has a characteristic oscillation that sadness does not: active processing (tears, ache, seeking) alternating with shutdown (numbness, withdrawal, depletion). When accompaniment is present, the nervous system gradually reorganises around the absence. When interoceptive access is absent, the waves of re-detection keep hitting the threat evaluation. The oscillation between parasympathetic depths and sympathetic spikes is the most biologically expensive autonomic pattern in the system."}
            activates="Relational"
            activatesColor={THREAT_COLOR}
            restorationType="Relational"
            restorationDetail="The presence of someone who stays with the loss over time — not once, but repeatedly, as the waves recur"
            research="Bowlby (1980) — grief as attachment behaviour persisting after the attachment figure is gone. Stroebe & Schut (1999) — dual process model: oscillation between loss-oriented and restoration-oriented coping. Shear (2015) — complicated grief as prolonged activation when the restoration process cannot complete."
            tegBlueAdds="Grief identified as an accompaniment signal — the most biologically expensive signal in the system when the designed pathway (sustained relational presence) is unavailable. The oscillation pattern is distinct from sadness. The restoration is not resolution of the loss but gradual reorganization of the nervous system around the absence, requiring repeated relational presence over time."
          />


          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={MODEL_COLOR}
            connections={[
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "Describes what happens after the signal is generated — how the nervous system reorganizes into a sustained state that changes perception, cognition, and available behaviour. M2 maps the full four-state gradient.",
              },
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "Describes whether the activation sequence completes — whether the body runs the restoration sequence to its endpoint, or the activation persists as unresolved residue. The somatic/relational distinction from M1 determines which restoration pathway is needed.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "Describes what determines whether the person can perceive the signal at all — the interoceptive substrate, the three awareness capacities, and why some signals never reach conscious awareness.",
              },
              {
                id: "F1: The Emotional Gradient",
                href: "/framework/f1-emotional-gradient",
                description: "Provides the biological origin of the safety-threat evaluation M1 describes — why the nervous system evaluates along a safety-threat gradient, and how the ESS and CLS co-evolved to produce the signal system.",
              },
              {
                id: "F2: Developmental Calibration",
                href: "/framework/f2-awareness-calibration",
                description: "Explains how the relational environment during development determines which restoration pathways build and which remain absent — the developmental origin of why some emotions never complete.",
              },
              {
                id: "F12: Two Information Systems",
                href: "/framework/f12-two-information-systems",
                description: "Maps the architecture underneath the signal system — two information systems (ESS and CLS) operating through two substrates at two speeds. The signals M1 describes are the ESS output. Whether they reach conscious awareness depends on the architecture F12 maps.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={MODEL_COLOR}
            items={[
              {
                label: "See what happens after the signal activates a state — the full four-state gradient and how it changes perception",
                href: "/model/m2-nervous-system-states",
                linkText: "M2: Nervous System States \u2192",
              },
              {
                label: "Understand whether the activation sequence completes — and what happens when it does not",
                href: "/model/m3-regulation-capacities",
                linkText: "M3: Regulation Capacities \u2192",
              },
              {
                label: "Understand what determines whether the person can receive the signal at all",
                href: "/model/m4-awareness-capacities",
                linkText: "M4: Awareness Capacities \u2192",
              },
              {
                label: "Explore the biological origin of the safety-threat evaluation that drives signal generation",
                href: "/framework/f1-emotional-gradient",
                linkText: "F1: The Emotional Gradient \u2192",
              },
              {
                label: "See the two-system architecture underneath — ESS and CLS, two substrates, two speeds",
                href: "/framework/f12-two-information-systems",
                linkText: "F12: Two Information Systems \u2192",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/model/m1-emotions-as-signals#article",
            headline: "Emotions as Signals: The Nervous System Language",
            description:
              "Emotions mapped as biological signals — what each one detects, what the body does, and what conditions resolve the activation. Model M1 of the TEG-Blue system.",
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
            datePublished: "2026-03-21",
            dateModified: "2026-04-12",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue Models & Frameworks",
              url: "https://teg-blue.org/models",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/model/m1-emotions-as-signals",
            },
            image: {
              "@type": "ImageObject",
              url: "https://teg-blue.org/model/m1-emotions-as-signals/opengraph-image",
              name: "Emotions as Signals — Model M1",
              description: "Interactive diagrams showing signal lifecycle, emotion map, speed comparison, and signal generation architecture.",
            },
            about: [
              { "@type": "Thing", name: "Emotions as Signals" },
              { "@type": "Thing", name: "Safety-Threat Evaluation" },
              { "@type": "Thing", name: "Signal Generation" },
              { "@type": "Thing", name: "Somatic vs Relational Emotions" },
            ],
            keywords: [
              "emotions as signals",
              "safety-threat evaluation",
              "signal generation",
              "nervous system signals",
              "somatic emotions",
              "relational emotions",
              "signal interpretation",
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
              { name: "M1: Emotions as Signals", url: "/model/m1-emotions-as-signals" },
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
                question: "What are emotions in the TEG-Blue system?",
                answer:
                  "TEG-Blue maps emotions as biological signals — information the nervous system generates when it detects something in the environment that matters. Each signal carries a specific finding (safety, threat, boundary violation, loss, contamination, connection) and triggers a characteristic physiological response. Signals divide into two groups: safety signals and threat signals.",
              },
              {
                question: "What is the difference between somatic and relational emotions?",
                answer:
                  "Somatic emotions (Fear, Anger, Stress, Anxiety, Disgust, Joy, Happiness, Admiration, Pride) can complete their restoration sequence through the body's own channels — breathing, movement, time, stillness, crying, sleep. Relational emotions (Shame, Guilt, Sadness, Love, Trust, Gratitude, Compassion) cannot complete alone. Their signal content is about belonging or the state of the bond, and the restoration pathway requires relational evidence — the presence of another person providing the co-regulatory signals the body needs.",
              },
              {
                question: "What is the safety-threat evaluation?",
                answer:
                  "The safety-threat evaluation is the continuous, pre-cognitive monitoring process through which the nervous system scans environmental and relational conditions for biologically relevant information. It draws on sensory input, interoceptive data, relational cues, and contextual memory — all converging below conscious awareness. The evaluation determines which emotional signal is generated.",
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
              name: "Emotions as Signals (M1) — TEG-Blue Research",
              url: "https://teg-blue.org/model/m1-emotions-as-signals",
              cssSelectors: ["article > section:first-of-type p", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}
