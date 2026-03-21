import Link from "next/link";
import dynamic from "next/dynamic";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, PATTERN_GRADIENT,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, ModelAnchorStrip,
  ModelPurpose, OperationalStatement,
  ExpandableSection, PageLayout,
} from "@/src/components";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

const EmotionSignalExplorer = dynamic(
  () => import("@/src/components/framework-diagrams/EmotionSignalExplorer"),
  { ssr: false }
);

const MODEL_COLOR = SPECTRUM.azure;

const ANCHOR_SECTIONS = [
  { label: "Signal Language", href: "#signalling-language" },
  { label: "Signal Anatomy", href: "#signal-anatomy" },
  { label: "Nine Signals", href: "#nine-signals" },
  { label: "Two Pathways", href: "#two-pathways" },
  { label: "Development", href: "#developmental-consequence" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Emotions as Signals (M1) | TEG-Blue Research",
  description:
    "The nine emotions mapped as biological signals — what each one detects, what the body does, and what completes the cycle. The input layer of M1 Nervous System Signaling.",
  keywords: [
    "emotions as signals",
    "nervous system signals",
    "fear anger disgust shame guilt sadness joy love envy",
    "somatic emotions",
    "relational emotions",
    "completion pathway",
    "co-regulation",
    "signal interpretation",
    "emotional technology",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m1-emotions-as-signals",
  },
  openGraph: {
    title: "Emotions as Signals — M1 Input Layer | TEG-Blue",
    description:
      "Nine emotions mapped as biological signals. What each one detects, what the body does, and what completes the cycle.",
    url: "https://teg-blue.org/model/m1-emotions-as-signals",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotions as Signals — TEG-Blue M1",
    description:
      "Nine emotions mapped as biological signals. The input layer of M1 Nervous System Signaling.",
  },
};

// ─── PAGE ──────────────────────────────────────────────────

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
        header={
          <>
            <ModelHero
              badge="MODEL M1"
              title="Emotions as Signals"
              subtitle="The Input Layer"
              description="Nine emotions. Each one is a biological message — a finding the nervous system is delivering about what it detected. Not about feeling. About information. The emotion is the delivery system; the signal is the content."
              coreQuestion="What is this signal telling me?"
              drawsFrom={[
                { label: "M1", href: "/model/m1-nervous-system-signaling" },
                { label: "F1", href: "/framework/f1-emotional-gradient" },
              ]}
              color={MODEL_COLOR}
            />
            <ModelAnchorStrip sections={ANCHOR_SECTIONS} color={MODEL_COLOR} />
          </>
        }
      >
        {/* ─── EMOTION SIGNAL EXPLORER ──────────────────── */}
        <EmotionSignalExplorer />

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
                  Emotions are the nervous system{"'"}s signal language — biological messages, not disruptions to clear thinking
                </li>
                <li style={propositionItemStyle}>
                  Every emotion has three components: signal (what was detected), body response (what the body does), completion pathway (what resolves it)
                </li>
                <li style={propositionItemStyle}>
                  Nine canonical emotions, each carrying a specific finding: Fear, Anger, Disgust, Shame, Guilt, Sadness, Joy, Love, Envy
                </li>
                <li style={propositionItemStyle}>
                  Somatic emotions can complete through the body{"'"}s own channels — relational emotions cannot, requiring co-regulation
                </li>
                <li style={propositionItemStyle}>
                  The same signal produces different outcomes depending on mode position — the gradient does not change the signal, it changes what the mode does to it
                </li>
                <li style={propositionItemStyle}>
                  When relational emotions are never co-regulated in development, the specific completion pathways for those emotions never build
                </li>
                <li style={propositionItemStyle}>
                  The question is not {"\u201C"}how do I manage this emotion?{"\u201D"} but {"\u201C"}what is this signal telling me?{"\u201D"}
                </li>
              </ul>
            </ModelPurpose>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 1: THE LANGUAGE                            */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 1" title="The Language" />

          {/* ─── C0: THE SIGNALLING LANGUAGE ─────────────── */}
          <section
            id="signalling-language"
            aria-labelledby="heading-signalling-language"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-signalling-language"
              style={sectionHeadingStyle}
            >
              The Signalling Language
            </h2>

            <p style={proseStyle}>
              Emotions are the nervous system{"'"}s signal language — the body{"'"}s first language. Each emotion carries a specific message: a finding about what is happening in the environment or inside the body. The signal fires below conscious awareness. What happens to it next depends on three things: what state it produces in the body (M1), whether it can be received by the awareness capacities (M2), and whether it can complete through the regulation cycle (M3).
            </p>
            <p style={proseStyle}>
              These are not three separate topics. They are three stages of the same sequence: signal, perception, return.
            </p>
            <p style={proseStyle}>
              Cognition is the second language. It arrived later. When cognition overrides an emotional signal, it is not correcting an error — it is silencing one language and replacing it with another. The signal does not stop being generated. The body keeps talking whether cognition listens or not.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The clinical shift: from {"\u201C"}emotion regulation{"\u201D"} (emotions need controlling) to {"\u201C"}signal interpretation{"\u201D"} (emotions carry information that needs reading).
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Affective neuroscience:</strong> Panksepp (1998) — primary emotional systems as ancient biological processes; Damasio (1994) — somatic markers guide decision-making; LeDoux (1996) — threat detection before conscious processing. <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — neuroception as continuous safety evaluation below awareness. <strong style={{ color: TEXT.primary }}>Emotion science:</strong> Frijda (1986) — emotions as action readiness, functional signals oriented toward environmental conditions.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Emotions reframed as the body{"'"}s first language — cognition is the second. Signal interpretation replaces emotion regulation as the primary clinical frame. The framing as {"\u201C"}language{"\u201D"} carries specific implications: a language can be listened to or ignored, interpreted accurately or misread, spoken fluently or suppressed.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C1: ANATOMY OF AN EMOTIONAL SIGNAL ──────── */}
          <section
            id="signal-anatomy"
            aria-labelledby="heading-signal-anatomy"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-signal-anatomy"
              style={sectionHeadingStyle}
            >
              Anatomy of an Emotional Signal
            </h2>

            <p style={proseStyle}>
              Every emotion has three components — a universal architecture that applies across all nine signals:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", minWidth: 400 }}>
                <div style={gridHeaderStyle}>Component</div>
                <div style={gridHeaderStyle}>What It Is</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>The Signal</div>
                <div style={gridCellStyle}>What the nervous system detected. The finding. What was evaluated and what the evaluation concluded.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Body Response</div>
                <div style={gridCellStyle}>What the body does with the finding. The somatic mobilisation that follows — automatic, below conscious awareness.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Completion Pathway</div>
                <div style={gridCellStyle}>What resolves the signal. What the nervous system needs in order to stand down and return to baseline. When unavailable, the signal stays open — activation accumulates as debris.</div>
              </div>
            </div>

            <p style={proseStyle}>
              This architecture is universal. Fear, joy, shame, envy — each carries a different message, but each follows the same three-component structure. The message varies. The delivery system does not.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The completion pathway is where the critical distinction appears: some emotions can complete through the body{"'"}s own channels (somatic). Others require relational evidence that only another person can provide (relational).
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Emotion science:</strong> Frijda (1986) — emotions as action tendencies with specific eliciting conditions and behavioural outcomes. <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — the activation cycle as a sequence that must complete. <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — the autonomic nervous system as a bidirectional communication system.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The three-component architecture applied uniformly across all nine emotions. The explicit identification of completion pathways — not just what triggers the emotion and what it feels like, but what the signal specifically needs in order to resolve.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 2: THE NINE SIGNALS                        */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 2" title="The Nine Signals" />

          <p id="nine-signals" style={{ ...proseStyle, fontStyle: "italic", color: TEXT.muted }}>
            Each emotion mapped as signal + body response + completion pathway + gradient behaviour across five positions. Use the explorer above for the interactive view.
          </p>

          {/* ─── C2: FEAR ────────────────────────────────── */}
          <EmotionSection
            id="fear"
            name="Fear"
            signal="Threat detected"
            type="Somatic"
            body="Sympathetic activation. Heart rate rises, muscles tense, sensory acuity sharpens. Fear is the fastest signal — it runs through the amygdala's fast pathway and mobilises the body in milliseconds."
            completion="The threat must resolve. Either the danger passes, or the person acts and the activation discharges, or safety is established and the system stands down. Fear that cannot resolve stays open — the accumulated activation becomes the new baseline, invisible from inside."
            gradientInsight="Fear does not disappear at higher modes; it becomes less visible. The most potent fear in the system (Chronic Domination) is the most completely unrecognised by the person carrying it."
            research="LeDoux (1996) — the amygdala's fast pathway, threat detection before conscious processing. Porges (2011) — sympathetic activation as part of the autonomic hierarchy. Sapolsky (2004) — stress physiology of the fear response."
            addition="Fear traced across all five gradient positions — from proportionate signal to invisible driver. The gradient reveals that the signal is present at every position; what changes is the person's capacity to recognise it."
          />

          {/* ─── C3: ANGER ───────────────────────────────── */}
          <EmotionSection
            id="anger"
            name="Anger"
            signal="Boundary crossed"
            type="Somatic"
            body="Sympathetic activation directed outward. Energy moves toward confrontation, assertion, or correction. Anger is a boundary-maintenance signal — it exists to protect what matters."
            completion="The boundary must be reasserted or acknowledged — through communication, action, or environmental change. Anger that cannot be expressed stays open. It does not disappear. It reroutes."
            gradientInsight="In Chronic Connection, anger converts to guilt before it can form. In Chronic Control, it becomes correction. In Chronic Domination, it becomes contempt. The same signal — rerouted differently depending on where the compass is stuck."
            research="Panksepp (1998) — RAGE system as primary emotional circuit. Tavris (1989) — anger as social signal for boundary maintenance. van der Kolk (2014) — anger as incomplete defensive response."
            addition="Anger reframed as a boundary-maintenance signal rather than a problem to manage. The gradient reveals what happens when the signal cannot complete: rerouting varies by mode position."
          />

          {/* ─── C4: DISGUST ─────────────────────────────── */}
          <EmotionSection
            id="disgust"
            name="Disgust"
            signal="Contamination detected"
            type="Somatic"
            body="Nausea, retching, the closing of the mouth and nose. The gustatory cortex and the insula activate. The body prepares to expel. Disgust runs through ancient contamination-avoidance circuits that predate social cognition by hundreds of millions of years."
            completion="Removal. Either the contaminant is expelled, the distance is established, or the environment is confirmed safe. Disgust that cannot complete — because the contaminant is a person, a group, or a part of the self — stays open as permanent aversion."
            gradientInsight="The biological mechanism is the same whether the contaminant is a toxin or a person. In Chronic Domination, disgust is the emotion that enables atrocity — through the activation of a contamination-avoidance circuit that was never designed to be directed at human beings."
            research="Rozin, Haidt &amp; McCauley (2008) — disgust as evolved contamination-avoidance expanding into moral domain. Chapman &amp; Anderson (2013) — shared neural substrates of physical and moral disgust."
            addition="Disgust traced across the gradient reveals its role in dehumanisation. The nervous system generates the same rejection response regardless of whether the target is a toxin or a person."
          />

          {/* ─── C5: SHAME ───────────────────────────────── */}
          <EmotionSection
            id="shame"
            name="Shame"
            signal="Belonging at risk"
            type="Relational"
            body="Withdrawal, shrinking, heat, the desire to disappear. Shame is a social survival signal — it evolved to preserve belonging by flagging when the self is at risk of being cast out."
            completion="Relational evidence. The cycle cannot close alone. The nervous system is waiting for another person to stay — to remain present without contempt after seeing the thing that feels shameful. That staying is the biological signal the cycle needs. No amount of breathing resolves shame."
            gradientInsight="In Chronic Connection, shame becomes identity. In Chronic Domination, it is projected outward — the most potent shame signal in the system and the most completely blocked, reinterpreted as evidence of others' deficiency."
            research="Schore (2003) — shame as a primary regulatory affect in early development. Tangney &amp; Dearing (2002) — shame vs guilt as distinct self-conscious emotions. Brown (2006) — shame resilience and the role of relational connection."
            addition="Shame identified as requiring a relational completion pathway — not as a clinical observation but as a biological constraint. Co-regulation is not optional but structurally necessary for shame to resolve."
          />

          {/* ─── C6: GUILT ───────────────────────────────── */}
          <EmotionSection
            id="guilt"
            name="Guilt"
            signal="Harm done"
            type="Relational"
            body="Discomfort, restlessness, the pull toward repair. Guilt is a corrective signal — it exists to prompt the person to address the impact and restore what was damaged."
            completion={<>Acknowledgment of the impact, genuine repair, and the other person{"'"}s experience being received — not just cognitively registered but felt through Emotional Resonance (ER). The repair closes the cycle. Guilt that is performed without being felt does not complete.</>}
            gradientInsight="In Chronic Domination, the guilt signal is structurally erased because vmPFC — which carries guilt, care, and consequence — is suppressed. The behaviour does not change because the signal that would drive change is not received."
            research="Tangney &amp; Dearing (2002) — guilt as behaviour-focused self-conscious emotion. Baumeister, Stillwell &amp; Heatherton (1994) — guilt as relational regulator. Koenigs et al. (2007) — vmPFC damage and impaired guilt processing."
            addition="Guilt identified as requiring relational completion — the other person's experience must be felt through Emotional Resonance (ER), not just cognitively registered. Performed apology does not resolve guilt because the somatic channel (ER) is not engaged."
          />

          {/* ─── C7: SADNESS ─────────────────────────────── */}
          <EmotionSection
            id="sadness"
            name="Sadness"
            signal="Loss"
            type="Somatic (relational when loss is relational)"
            body="Withdrawal, slowing, tears. Energy turns inward. Sadness is a conservation signal — it pulls the person away from engagement to allow the loss to be integrated."
            completion="Time, space, and — for relational losses — the presence of someone who can hold the grief without fixing it. The tears are part of the discharge. Interrupting sadness with activity or forced positivity prevents completion."
            gradientInsight="Ungrieved loss sits underneath Chronic Protection: the original loss that started the alarm was never processed because processing requires lowering the guard."
            research="Bowlby (1980) — grief as attachment behaviour. Panksepp (1998) — GRIEF/PANIC system as primary emotional circuit. Stroebe &amp; Schut (1999) — dual process model of bereavement."
            addition="Sadness mapped as both somatic and relational depending on the nature of the loss. Grief (relational sadness) requires the presence of someone who holds without fixing — a specific relational condition, not a general support need."
          />

          {/* ─── C8: JOY ─────────────────────────────────── */}
          <EmotionSection
            id="joy"
            name="Joy"
            signal="Safety confirmed"
            type="Somatic"
            body="Expansion, energy, approach. The body opens. Dopamine flows. The system moves toward the source of the signal. Joy is an approach signal — it evolved to move the person toward conditions that support survival and thriving."
            completion="Presence. Joy completes through being experienced — fully, in the body, without the mind already scanning for what will take it away. Interrupted joy prevents the signal from completing."
            gradientInsight="Joy is not absent in chronic modes — it is transformed. In Chronic Connection it becomes performance, in Chronic Protection it becomes threatening, in Chronic Domination it becomes power. The only joy available in each chronic mode is the joy that does not require vulnerability."
            research="Fredrickson (2001) — broaden-and-build theory. Panksepp (1998) — PLAY and SEEKING systems. Berridge &amp; Robinson (2003) — dopamine as wanting/approach signal."
            addition="Joy reframed as a safety-confirmation signal rather than a goal state. The gradient reveals the transformation: the signal is present at every position, but what the mode allows it to become changes completely."
          />

          {/* ─── C9: LOVE ────────────────────────────────── */}
          <EmotionSection
            id="love"
            name="Love"
            signal="Bond"
            type="Relational"
            body="Oxytocin, warmth, the pull toward closeness. The body orients toward the other person. The co-regulation circuit activates. Love is the most potent relational signal the nervous system generates."
            completion="Reciprocity — the signal received and returned. Love that is given without landing, or love that is demanded without being genuinely offered, does not complete. The cycle closes through mutual contact — genuine felt presence, not performance."
            gradientInsight="Love does not disappear in chronic modes — it transforms. In Chronic Connection it becomes fusion, in Chronic Control it becomes transaction, in Chronic Domination it becomes ownership. The signal is present in all positions. What changes is what the mode does to it."
            research="Bowlby (1969) — attachment as a primary biological system. Panksepp (1998) — CARE system. Uvnas-Moberg (2003) — oxytocin and the calm-and-connection system. Coan (2008) — social baseline theory."
            addition="Love traced across the gradient reveals that the signal persists at every position — what changes is the mode's transformation of it. In Chronic Domination, care exists but is indistinguishable from control."
          />

          {/* ─── C10: ENVY ───────────────────────────────── */}
          <EmotionSection
            id="envy"
            name="Envy"
            signal="Gap detected"
            type="Somatic"
            body="Tension, comparison, the pull toward either acquisition or diminishment. Envy is a gap-detection signal — it evolved to identify what is needed and motivate action to close the distance."
            completion="The gap must either close (the person acquires the resource or develops the quality) or be accepted (the person integrates the reality without it threatening belonging). Envy that cannot resolve stays open as chronic comparison."
            gradientInsight="In fluid operation, envy becomes admiration and growth. In Chronic Domination, envy becomes destruction — if the gap cannot be closed, what is envied must be eliminated. The same signal produces radically different outcomes depending on where the compass is."
            research="Smith &amp; Kim (2007) — envy as a social comparison emotion. Crusius, Gonzalez, Lange &amp; Cohen-Charash (2020) — envy as a functional emotion. Festinger (1954) — social comparison theory."
            addition="Envy reframed as a gap-detection signal rather than a moral failing. The gradient reveals the full transformation from admiration to destruction."
          />

          {/* ════════════════════════════════════════════════ */}
          {/* PART 3: THE ARCHITECTURE                        */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 3" title="The Architecture" />

          {/* ─── C11: SOMATIC VS RELATIONAL ──────────────── */}
          <section
            id="two-pathways"
            aria-labelledby="heading-two-pathways"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-two-pathways"
              style={sectionHeadingStyle}
            >
              Somatic vs Relational — Two Completion Pathways
            </h2>

            <p style={proseStyle}>
              Not all emotions can complete their cycle alone. This is not a weakness or a failure. It is biology.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Somatic emotions</strong> — those whose content is about the body{"'"}s own state (a physical threat, a boundary crossed, a startle, mobilised energy) — can complete through the body{"'"}s own channels when conditions allow. Breathing, movement, time. The cycle can close internally.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Relational emotions</strong> — Shame and Guilt primarily, with relational components in Sadness and Love — cannot complete this way. Their content is not about the body{"'"}s state. It is about belonging. The signal these emotions carry is: <em>something is wrong with me in relation to you.</em> The body is not waiting for somatic discharge. It is waiting for relational evidence.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              No amount of breathing resolves shame. The nervous system is waiting for another person to stay — to remain present without contempt after seeing the thing that feels shameful. That staying is the biological signal the cycle needs to close.
            </OperationalStatement>

            {/* Pathway table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", minWidth: 500 }}>
                <div style={gridHeaderStyle}>Emotion</div>
                <div style={gridHeaderStyle}>Type</div>
                <div style={gridHeaderStyle}>Completion Pathway</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Fear</div>
                <div style={gridCellStyle}>Somatic</div>
                <div style={gridCellStyle}>Threat resolves, safety established</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Anger</div>
                <div style={gridCellStyle}>Somatic</div>
                <div style={gridCellStyle}>Boundary reasserted or acknowledged</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Disgust</div>
                <div style={gridCellStyle}>Somatic</div>
                <div style={gridCellStyle}>Contaminant removed, distance established</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Shame</div>
                <div style={{ ...gridCellStyle, color: SPECTRUM.sky }}>Relational</div>
                <div style={gridCellStyle}>Another person stays without contempt</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Guilt</div>
                <div style={{ ...gridCellStyle, color: SPECTRUM.sky }}>Relational</div>
                <div style={gridCellStyle}>Impact acknowledged, other{"'"}s experience felt through Emotional Resonance (ER)</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Sadness</div>
                <div style={gridCellStyle}>Somatic / Relational</div>
                <div style={gridCellStyle}>Time and space; for relational loss, presence without fixing</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Joy</div>
                <div style={gridCellStyle}>Somatic</div>
                <div style={gridCellStyle}>Full presence, experienced in body</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Love</div>
                <div style={{ ...gridCellStyle, color: SPECTRUM.sky }}>Relational</div>
                <div style={gridCellStyle}>Signal received and returned — genuine felt presence</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Envy</div>
                <div style={gridCellStyle}>Somatic</div>
                <div style={gridCellStyle}>Gap closes or is accepted</div>
              </div>
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Affect regulation:</strong> Schore (2003) — co-regulation as the mechanism through which relational affects are processed. <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — the social engagement system as the pathway for relational completion. <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — completion of the activation cycle as a somatic process.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The explicit distinction between somatic and relational completion pathways as a structural feature of the emotional signal system — not a clinical observation but a design constraint. Somatic emotions have an internal exit. Relational emotions do not. This makes co-regulation not a therapeutic technique but a biological requirement for specific emotional states.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C12: THE DEVELOPMENTAL CONSEQUENCE ──────── */}
          <section
            id="developmental-consequence"
            aria-labelledby="heading-developmental-consequence"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-developmental-consequence"
              style={sectionHeadingStyle}
            >
              The Developmental Consequence
            </h2>

            <p style={proseStyle}>
              A child whose relational emotions are never co-regulated does not just fail to develop a general return capacity. They fail to develop the specific pathway for the emotions that are hardest to bear — the ones about belonging, worth, and whether they are safe in relationship.
            </p>
            <p style={proseStyle}>
              These are precisely the emotions most likely to be suppressed in environments where emotional expression is dangerous or unwelcome. The result: the child grows up with open cycles specifically in the relational domain. Shame cycles that never closed. Grief that never completed. Fear of abandonment that never received the relational evidence it was waiting for.
            </p>
            <p style={proseStyle}>
              These stay open — accumulating debris — because the completion pathway requires something the environment never provided.
            </p>
            <p style={proseStyle}>
              When relational emotions repeatedly cycle without completion — when the nervous system keeps sending the signal and the relational evidence never arrives — the system eventually stops sending. Not because the need disappears. Because the channel that was supposed to receive the signal has been consistently empty. Emotional Resonance (ER) and Self-Emotional Awareness (SEA) go down. The flatness is, in part, the accumulated effect of relational cycles that were never allowed to close.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The child does not fail to develop {"\u201C"}regulation{"\u201D"} in general — they fail to develop the completion pathway for the specific emotions that require relational evidence.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Right-brain development:</strong> Schore (2003) — co-regulation as the mechanism through which regulatory pathways build. <strong style={{ color: TEXT.primary }}>Mutual regulation:</strong> Tronick (2007) — the impact of chronic misattunement. <strong style={{ color: TEXT.primary }}>Developmental trauma:</strong> van der Kolk (2014) — consequences of emotional neglect on regulatory capacity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The developmental consequence mapped at the level of specific emotions rather than general regulatory capacity. This specificity explains why someone can regulate fear effectively (somatic pathway intact) while being unable to process shame at all (relational pathway never built). The flatness that results is not emotional absence. It is the accumulated effect of a channel that stopped sending because no one was receiving.
                </p>
              </ExpandableSection>
            </div>
          </section>

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
                    label="See the full M1 model — compass, modes, gradient, filters"
                    href="/model/m1-nervous-system-signaling"
                    linkText="M1: Nervous System Signaling &rarr;"
                  />
                  <NavRow
                    label="Understand what determines how well the compass works"
                    href="/model/m2-three-awareness-capacities"
                    linkText="M2: Three Awareness Capacities &rarr;"
                  />
                  <NavRow
                    label="Understand what happens when the activation cycle doesn't complete"
                    href="/model/m3-regulation-capacities"
                    linkText="M3: Regulation Capacities &rarr;"
                  />
                  <NavRow
                    label="Understand the foundational theory behind this model"
                    href="/framework/f1-emotional-gradient"
                    linkText="F1: Emotions as Biological Information &rarr;"
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

      {/* ─── JSON-LD: ScholarlyArticle ──────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/model/m1-emotions-as-signals#article",
            headline: "Emotions as Signals: The Input Layer",
            description:
              "Nine emotions mapped as biological signals — what each one detects, what the body does, and what completes the cycle. The input layer of M1 Nervous System Signaling.",
            author: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              url: "https://teg-blue.org/about",
            },
            publisher: {
              "@type": "Organization",
              name: "TEG-Blue Research Consortium",
              url: "https://teg-blue.org",
            },
            datePublished: "2026-03-21",
            dateModified: "2026-03-21",
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
            about: [
              { "@type": "Thing", name: "Emotions as Signals" },
              { "@type": "Thing", name: "Nervous System Signals" },
              { "@type": "Thing", name: "Somatic vs Relational Emotions" },
              { "@type": "Thing", name: "Co-regulation" },
            ],
            keywords: [
              "emotions as signals",
              "nervous system signals",
              "somatic emotions",
              "relational emotions",
              "completion pathway",
              "signal interpretation",
            ],
          }),
        }}
      />

      {/* ─── JSON-LD: BreadcrumbList ────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Models", url: "/models" },
              { name: "M1: Nervous System Signaling", url: "/model/m1-nervous-system-signaling" },
              { name: "Emotions as Signals", url: "/model/m1-emotions-as-signals" },
            ])
          ),
        }}
      />

      {/* ─── JSON-LD: FAQPage ───────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFAQJsonLd([
              {
                question: "What are the nine emotions in the TEG-Blue system?",
                answer:
                  "TEG-Blue maps nine canonical emotions as biological signals: Fear (threat detected), Anger (boundary crossed), Disgust (contamination detected), Shame (belonging at risk), Guilt (harm done), Sadness (loss), Joy (safety confirmed), Love (bond), and Envy (gap detected). Each carries a specific finding from the nervous system's continuous evaluation of the environment.",
              },
              {
                question: "What is the difference between somatic and relational emotions?",
                answer:
                  "Somatic emotions (Fear, Anger, Disgust, Joy, Envy) can complete their cycle through the body's own channels — breathing, movement, time. Relational emotions (Shame, Guilt, and aspects of Sadness and Love) cannot complete alone. Their content is about belonging, and the nervous system waits for relational evidence — another person staying present without contempt. Co-regulation is the only completion pathway.",
              },
              {
                question: "Why can't breathing resolve shame?",
                answer:
                  "Shame is a relational emotion — its signal is about belonging at risk. The nervous system is not waiting for somatic discharge. It is waiting for relational evidence: another person remaining present without contempt after seeing the thing that feels shameful. That staying is the biological signal the cycle needs to close. No somatic intervention reaches the relational completion pathway.",
              },
            ])
          ),
        }}
      />

      {/* ─── JSON-LD: Speakable ──────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Emotions as Signals (M1) — TEG-Blue Research",
              url: "https://teg-blue.org/model/m1-emotions-as-signals",
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

function EmotionSection({
  id,
  name,
  signal,
  type,
  body,
  completion,
  gradientInsight,
  research,
  addition,
}) {
  const isRelational = type.toLowerCase().includes("relational");

  return (
    <section
      id={id}
      aria-labelledby={`heading-${id}`}
      style={{ marginBottom: 48 }}
    >
      <h2 id={`heading-${id}`} style={sectionHeadingStyle}>
        {name} — {signal}
      </h2>

      {/* Type badge */}
      <span
        style={{
          display: "inline-block",
          fontFamily: FONT.mono,
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: isRelational ? SPECTRUM.sky : TEXT.muted,
          background: isRelational
            ? hexToRgba(SPECTRUM.sky, 0.12)
            : hexToRgba(SPECTRUM.azure, 0.08),
          padding: "3px 8px",
          borderRadius: 4,
          marginBottom: 16,
        }}
      >
        {type}
      </span>

      <h3 style={h3Style}>What the body does with it</h3>
      <p style={proseStyle}>{body}</p>

      <h3 style={h3Style}>What it needs to complete</h3>
      <p style={proseStyle}>{completion}</p>

      <OperationalStatement color={MODEL_COLOR}>
        {gradientInsight}
      </OperationalStatement>

      <div style={expandableRowStyle}>
        <ExpandableSection title="Research Traditions" type="opendata">
          <p
            style={expandedProseStyle}
            dangerouslySetInnerHTML={{ __html: research }}
          />
        </ExpandableSection>

        <ExpandableSection title="What TEG-Blue Adds" type="opendata">
          <p style={expandedProseStyle}>{addition}</p>
        </ExpandableSection>
      </div>
    </section>
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
