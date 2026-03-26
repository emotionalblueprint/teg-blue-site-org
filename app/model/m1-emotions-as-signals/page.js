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
  { label: "Signal Reception", href: "#signal-reception" },
  { label: "Sixteen Signals", href: "#sixteen-signals" },
  { label: "Somatic vs Relational", href: "#two-pathways" },
  { label: "Development", href: "#developmental-consequence" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Emotions as Signals (M1) | TEG-Blue Research",
  description:
    "Sixteen emotions mapped as biological signals — what each one detects, what the body does, and what restores the cycle. Model M1 of the TEG-Blue system.",
  keywords: [
    "emotions as signals",
    "nervous system signals",
    "fear anger stress anxiety disgust shame guilt sadness joy happiness admiration pride love trust gratitude compassion",
    "somatic emotions",
    "relational emotions",
    "restoration pathway",
    "co-regulation",
    "signal interpretation",
    "emotional technology",
    "body signature groups",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m1-emotions-as-signals",
  },
  openGraph: {
    title: "Emotions as Signals — M1 Model | TEG-Blue",
    description:
      "Sixteen emotions mapped as biological signals. What each one detects, what the body does, and what restores the cycle.",
    url: "https://teg-blue.org/model/m1-emotions-as-signals",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotions as Signals — TEG-Blue M1",
    description:
      "Sixteen emotions mapped as biological signals. What each one detects, what the body does, and what restores the cycle.",
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
              subtitle="The Signal Language"
              description="Sixteen emotions. Each one is a biological message — a finding the nervous system is delivering about what it detected. Not about feeling. About information. The emotion is the delivery system; the signal is the content."
              coreQuestion="What is this signal telling me?"
              drawsFrom={[
                { label: "M2", href: "/model/m2-nervous-system-states" },
                { label: "M3", href: "/model/m3-regulation-capacities" },
                { label: "M4", href: "/model/m4-awareness-capacities" },
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
                  Every emotion has three components: signal (what was detected), body response (what the body does), restoration pathway (what resolves it)
                </li>
                <li style={propositionItemStyle}>
                  Sixteen emotions organized by body signature — each carrying a specific finding. The nervous system{"'"}s signal vocabulary, from threat to bond
                </li>
                <li style={propositionItemStyle}>
                  Every signal is designed to be received — when Self-Emotional Awareness (SEA) is present, the signal is felt and informing; when absent, the signal distorts and memory stores inaccurately
                </li>
                <li style={propositionItemStyle}>
                  Somatic emotions can complete through the body{"'"}s own channels — relational emotions cannot, requiring co-regulation
                </li>
                <li style={propositionItemStyle}>
                  The same signal produces different outcomes depending on mode position — the compass does not change the signal, it changes what the mode does to it
                </li>
                <li style={propositionItemStyle}>
                  When relational emotions are never co-regulated in development, the specific restoration pathways for those emotions never build
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
              Every emotion has three components — a universal architecture that applies across all sixteen signals:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", minWidth: 400 }}>
                <div style={gridHeaderStyle}>Component</div>
                <div style={gridHeaderStyle}>What It Is</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>The Signal</div>
                <div style={gridCellStyle}>What the nervous system detected. The finding. What was evaluated and what the evaluation concluded.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Body Response</div>
                <div style={gridCellStyle}>What the body does with the finding. The somatic mobilisation that follows — automatic, below conscious awareness.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Restoration Pathway</div>
                <div style={gridCellStyle}>What resolves the signal. What the nervous system needs in order to stand down and return to baseline. When unavailable, the signal stays open — activation accumulates as debris.</div>
              </div>
            </div>

            <p style={proseStyle}>
              This architecture is universal. Fear, joy, shame, compassion — each carries a different message, but each follows the same three-component structure. The message varies. The delivery system does not.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The restoration pathway is where the critical distinction appears: some emotions can complete through the body{"'"}s own channels (somatic). Others require relational evidence that only another person can provide (relational).
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Emotion science:</strong> Frijda (1986) — emotions as action tendencies with specific eliciting conditions and behavioural outcomes. <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — the activation cycle as a sequence that must complete. <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — the autonomic nervous system as a bidirectional communication system.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The three-component architecture applied uniformly across all sixteen emotions. The explicit identification of restoration pathways — not just what triggers the emotion and what it feels like, but what the signal specifically needs in order to resolve.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C1.5: EVERY SIGNAL IS DESIGNED TO BE RECEIVED ── */}
          <section
            id="signal-reception"
            aria-labelledby="heading-signal-reception"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-signal-reception"
              style={sectionHeadingStyle}
            >
              Every Signal Is Designed to Be Received
            </h2>

            <p style={proseStyle}>
              An emotion at any position — including Safety & Openness — fires and delivers its finding. When Self-Emotional Awareness (SEA) is present, the signal is felt, known, and informing. The system stays responsive. This is baseline: not the absence of feeling, but the presence of awareness.
            </p>
            <p style={proseStyle}>
              Received signals are stored accurately. We remember who gives us love, with whom we feel safe, where we belong and where we don{"'"}t. The emotional memory maps our world.
            </p>
            <p style={proseStyle}>
              When the compass is stuck and Self-Emotional Awareness (SEA) is absent, the signals distort. The emotion keeps running without the person{"'"}s knowledge — and memory gets stored distorted. Love without awareness becomes enmeshment. Joy without awareness becomes compulsive positivity. The emotion has not changed. Whether it can be seen has.
            </p>
            <p style={proseStyle}>
              The accumulated activation becomes invisible from inside, and the distorted memory reinforces the chronic mode. This is how chronic modes form and self-reinforce: not only from unresolved threat, but from any emotion that was never received.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Baseline is not the absence of feeling — it is the presence of awareness. The signal is the same at every compass position. What changes is whether Self-Emotional Awareness (SEA) can receive it.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Interoception:</strong> Craig (2009) — awareness of internal bodily states as the foundation of emotional self-awareness. <strong style={{ color: TEXT.primary }}>Memory consolidation:</strong> Phelps (2004) — emotional states shape how memories are encoded and consolidated. <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — neuroception as continuous evaluation below conscious awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The principle that signal reception — not signal type — determines whether an emotion builds accurate memory or reinforces distortion. This applies at every compass position including Safety & Openness. Self-Emotional Awareness (SEA) is identified as the specific variable that determines reception, linking the emotions layer (M1) directly to the awareness capacities layer (M2).
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 2: THE NINE SIGNALS                        */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 2" title="The Sixteen Signals" />

          <p id="sixteen-signals" style={{ ...proseStyle, fontStyle: "italic", color: TEXT.muted }}>
            Each emotion mapped as signal + body response + restoration pathway + compass behaviour across the four mode positions. Organized by body signature group — what the body does with each signal. Use the explorer above for the interactive view.
          </p>

          {/* ═══ MOBILIZATION ═══════════════════════════ */}
          <BodySignatureHeading
            label="Mobilization"
            signature="Sympathetic activation, energy rises"
          />

          {/* ─── FEAR ──────────────────────────────────── */}
          <EmotionSection
            id="fear"
            name="Fear"
            signal="Threat detected"
            type="Somatic"
            body="Sympathetic activation. Heart rate rises, muscles tense, sensory acuity sharpens. Fear is the fastest signal — it runs through the amygdala's fast pathway and mobilises the body in milliseconds."
            restoration="The threat must resolve. Either the danger passes, or the person acts and the activation discharges, or safety is established and the system stands down. Fear that cannot resolve stays open — the accumulated activation becomes the new baseline, invisible from inside."
            compassInsight="Fear at Safety & Openness is felt and shared. The same signal at Power & Dominance becomes terrorizing. The signal is present at every compass position — what changes is the person's capacity to recognise it."
            research="LeDoux (1996) — the amygdala's fast pathway, threat detection before conscious processing. Porges (2011) — sympathetic activation as part of the autonomic hierarchy. Sapolsky (2004) — stress physiology of the fear response."
            addition="Fear traced across all four compass positions in both fluid and stuck states. The compass reveals that the signal is present at every position; what changes is whether the person can return to baseline or the signal distorts."
          />

          {/* ─── C3: ANGER ───────────────────────────────── */}
          <EmotionSection
            id="anger"
            name="Anger"
            signal="Boundary crossed"
            type="Somatic"
            body="Sympathetic activation directed outward. Energy moves toward confrontation, assertion, or correction. Anger is a boundary-maintenance signal — it exists to protect what matters."
            restoration="The boundary must be reasserted or acknowledged — through communication, action, or environmental change. Anger that cannot be expressed stays open. It does not disappear. It reroutes."
            compassInsight="At Safety & Openness, anger is a clean boundary signal. When the compass is stuck, the same signal suppresses (stuck Connection), becomes chronic rage (stuck Protection), turns cold and strategic (stuck Control), or becomes destruction (stuck Domination)."
            research="Panksepp (1998) — RAGE system as primary emotional circuit. Tavris (1989) — anger as social signal for boundary maintenance. van der Kolk (2014) — anger as incomplete defensive response."
            addition="Anger reframed as a boundary-maintenance signal rather than a problem to manage. The compass reveals what happens when the signal cannot complete: rerouting varies by mode position."
          />

          {/* ─── STRESS ───────────────────────────────── */}
          <EmotionSection
            id="stress"
            name="Stress"
            signal="Demand-resource mismatch detected"
            type="Somatic"
            body="HPA axis activation. Cortisol rises, energy redirects toward the demand. The body prioritises the mismatch and mobilises toward resolution. Stress is an allocation signal — it evolved to concentrate resources on whatever is currently exceeding capacity."
            restoration="The demand must be met or the resource must be restored. When the gap closes, the activation discharges. When it does not close — when the demands remain permanently above resources — the signal becomes chronic and cortisol remains elevated."
            compassInsight="At Safety & Openness, stress is an honest signal — demands are felt and addressed. When the compass is stuck, stress becomes invisible from inside: the person operates in permanent demand-resource mismatch without recognising it as a signal."
            research="Sapolsky (2004) — glucocorticoid stress response and chronic activation. McEwen (1998) — allostatic load and the cost of chronic stress adaptation. Selye (1956) — general adaptation syndrome."
            addition="Stress reframed as a demand-resource mismatch signal rather than a general state. The three-component architecture applies: what was detected, what the body does, what resolves it."
          />

          {/* ─── ANXIETY ───────────────────────────────── */}
          <EmotionSection
            id="anxiety"
            name="Anxiety"
            signal="Anticipatory threat"
            type="Somatic (relational when chronic)"
            body={<>Chronic cortisol elevation. The bed nucleus of the stria terminalis (BNST) activates — the sustained anxiety circuit, distinct from the amygdala{"'"}s acute fear response. The body scans continuously, preparing for something that has not arrived. Anxiety is an anticipatory signal — it evolved to maintain readiness for unresolved conditions.</>}
            restoration={<>The uncertainty must resolve. Either the future condition is assessed and accepted, the threat materialises and is addressed (converting anxiety to fear, which has a clear discharge pathway), or the person{"'"}s capacity to tolerate uncertainty is supported relationally. Chronic relational anxiety — the kind that centers on whether connection will be maintained or lost — requires relational evidence, not somatic discharge.</>}
            compassInsight="The distinction between acute and chronic anxiety maps onto the compass: acute anxiety is a mobilisation signal that resolves when the uncertainty is addressed. Chronic relational anxiety — will I be left, will the connection survive — is a stuck compass signal. The body cannot discharge what it is waiting for another nervous system to resolve."
            research="Davis, Walker, Miles &amp; Grillon (2010) — BNST as sustained anxiety circuit distinct from amygdala fear. Grillon (2008) — anticipatory anxiety and unpredictable threat. Barlow (2002) — anxiety as future-oriented mood state."
            addition="Anxiety distinguished from Fear by temporal orientation and neural substrate — anticipatory vs immediate, BNST vs amygdala. The somatic/relational boundary applies: acute anxiety can discharge somatically; chronic relational anxiety requires relational evidence."
          />

          {/* ═══ EXPULSION ═══════════════════════════════ */}
          <BodySignatureHeading
            label="Expulsion"
            signature="Visceral rejection, nausea, closure"
          />

          {/* ─── DISGUST ───────────────────────────────── */}
          <EmotionSection
            id="disgust"
            name="Disgust"
            signal="Contamination detected"
            type="Somatic"
            body="Nausea, retching, the closing of the mouth and nose. The gustatory cortex and the insula activate. The body prepares to expel. Disgust runs through ancient contamination-avoidance circuits that predate social cognition by hundreds of millions of years."
            restoration="Removal. Either the contaminant is expelled, the distance is established, or the environment is confirmed safe. Disgust that cannot complete — because the contaminant is a person, a group, or a part of the self — stays open as permanent aversion."
            compassInsight="The biological mechanism is the same whether the contaminant is a toxin or a person. At Power & Dominance, disgust is the emotion that enables atrocity — through the activation of a contamination-avoidance circuit that was never designed to be directed at human beings."
            research="Rozin, Haidt &amp; McCauley (2008) — disgust as evolved contamination-avoidance expanding into moral domain. Chapman &amp; Anderson (2013) — shared neural substrates of physical and moral disgust."
            addition="Disgust traced across the compass reveals its role in dehumanisation. The nervous system generates the same rejection response regardless of whether the target is a toxin or a person."
          />

          {/* ═══ SOCIAL WITHDRAWAL ═════════════════════ */}
          <BodySignatureHeading
            label="Social Withdrawal"
            signature="Shrinking, heat, pull inward"
          />

          {/* ─── SHAME ─────────────────────────────────── */}
          <EmotionSection
            id="shame"
            name="Shame"
            signal="Belonging at risk"
            type="Relational"
            body="Withdrawal, shrinking, heat, the desire to disappear. Shame is a social survival signal — it evolved to preserve belonging by flagging when the self is at risk of being cast out."
            restoration="Relational evidence. The cycle cannot close alone. The nervous system is waiting for another person to stay — to remain present without contempt after seeing the thing that feels shameful. That staying is the biological signal the cycle needs. No amount of breathing resolves shame."
            compassInsight="At Safety & Openness, shame is felt and witnessed — vulnerability in service of repair. When the compass is stuck at Power & Dominance, the signal is projected outward — the most potent shame in the system, reinterpreted as evidence of others' deficiency."
            research="Schore (2003) — shame as a primary regulatory affect in early development. Tangney &amp; Dearing (2002) — shame vs guilt as distinct self-conscious emotions. Brown (2006) — shame resilience and the role of relational connection."
            addition="Shame identified as requiring a relational restoration pathway — not as a clinical observation but as a biological constraint. Co-regulation is not optional but structurally necessary for shame to resolve."
          />

          {/* ─── C6: GUILT ───────────────────────────────── */}
          <EmotionSection
            id="guilt"
            name="Guilt"
            signal="Harm done"
            type="Relational"
            body="Discomfort, restlessness, the pull toward repair. Guilt is a corrective signal — it exists to prompt the person to address the impact and restore what was damaged."
            restoration={<>Acknowledgment of the impact, genuine repair, and the other person{"'"}s experience being received — not just cognitively registered but felt through Emotional Resonance (ER). The repair closes the cycle. Guilt that is performed without being felt does not restore.</>}
            compassInsight="At Power & Dominance, the guilt signal is structurally erased because vmPFC — which carries guilt, care, and consequence — is suppressed. The behaviour does not change because the signal that would drive change is not received."
            research="Tangney &amp; Dearing (2002) — guilt as behaviour-focused self-conscious emotion. Baumeister, Stillwell &amp; Heatherton (1994) — guilt as relational regulator. Koenigs et al. (2007) — vmPFC damage and impaired guilt processing."
            addition="Guilt identified as requiring relational restoration — the other person's experience must be felt through Emotional Resonance (ER), not just cognitively registered. Performed apology does not resolve guilt because the somatic channel (ER) is not engaged."
          />

          {/* ═══ CONSERVATION ══════════════════════════ */}
          <BodySignatureHeading
            label="Conservation"
            signature="Slowing, tears, energy turns inward"
          />

          {/* ─── SADNESS ───────────────────────────────── */}
          <EmotionSection
            id="sadness"
            name="Sadness"
            signal="Loss"
            type="Somatic (relational when loss is relational)"
            body="Withdrawal, slowing, tears. Energy turns inward. Sadness is a conservation signal — it pulls the person away from engagement to allow the loss to be integrated."
            restoration="Time, space, and — for relational losses — the presence of someone who can hold the grief without fixing it. The tears are part of the discharge. Interrupting sadness with activity or forced positivity prevents restoration."
            compassInsight="Ungrieved loss sits underneath stuck Threat & Defence: the original loss that started the alarm was never processed because processing requires lowering the guard."
            research="Bowlby (1980) — grief as attachment behaviour. Panksepp (1998) — GRIEF/PANIC system as primary emotional circuit. Stroebe &amp; Schut (1999) — dual process model of bereavement."
            addition="Sadness mapped as both somatic and relational depending on the nature of the loss. Grief (relational sadness) requires the presence of someone who holds without fixing — a specific relational condition, not a general support need."
          />

          {/* ═══ APPROACH & EXPANSION ══════════════════ */}
          <BodySignatureHeading
            label="Approach & Expansion"
            signature="Opening, energy moves outward"
          />

          {/* ─── JOY ───────────────────────────────────── */}
          <EmotionSection
            id="joy"
            name="Joy"
            signal="Safety confirmed"
            type="Somatic"
            body="Expansion, energy, approach. The body opens. Dopamine flows. The system moves toward the source of the signal. Joy is an approach signal — it evolved to move the person toward conditions that support survival and thriving."
            restoration="Presence. Joy restores through being experienced — fully, in the body, without the mind already scanning for what will take it away. Interrupted joy prevents the signal from restoring."
            compassInsight="Joy is not absent when the compass is stuck — it is transformed. At stuck Safety & Openness it becomes compulsive positivity, at stuck Threat & Defence it becomes threatening, at stuck Power & Dominance it becomes manic dominance. The only joy available in each stuck position is joy that does not require vulnerability."
            research="Fredrickson (2001) — broaden-and-build theory. Panksepp (1998) — PLAY and SEEKING systems. Berridge &amp; Robinson (2003) — dopamine as wanting/approach signal."
            addition="Joy reframed as a safety-confirmation signal rather than a goal state. The compass reveals the transformation: the signal is present at every position, but what the mode allows it to become changes completely."
          />

          {/* ─── HAPPINESS ─────────────────────────────── */}
          <EmotionSection
            id="happiness"
            name="Happiness"
            signal="Sustained positive condition present"
            type="Somatic"
            body="General positive affect. Serotonergic tone rises. The body maintains openness without the urgency of approach — a settled, sustained state rather than a mobilisation toward something. Happiness is a condition signal — it registers that things are as they should be."
            restoration="Presence without interruption. The signal completes through continued contact with the condition that produced it. Happiness that must be performed, defended, or justified cannot complete."
            compassInsight={<>Unlike Joy{"'"}s acute spike, Happiness is a sustained state — and therefore more vulnerable to the compass. At stuck Safety & Openness it becomes performed positivity. At stuck Strategy & Management it becomes a maintained image. The sustained signal requires sustained awareness to receive it.</>}
            research="Seligman (2002) — authentic happiness and well-being theory. Diener (2000) — subjective well-being as ongoing state. Berridge &amp; Kringelbach (2015) — distinction between wanting (dopamine) and liking (opioid/serotonergic)."
            addition="Happiness distinguished from Joy by temporal profile and neural substrate — sustained serotonergic tone vs acute dopaminergic approach. Both are approach-and-expansion signals, but Happiness registers an ongoing condition rather than an event."
          />

          {/* ─── ADMIRATION ─────────────────────────────── */}
          <EmotionSection
            id="admiration"
            name="Admiration"
            signal="Value detected in another"
            type="Somatic"
            body="Orientation toward the other. The body opens in the direction of what was detected — approach, inspiration, sometimes a brief pause of recognition. Admiration is a detection signal — it evolved to identify what is valuable in the environment and orient the person toward it."
            restoration="Presence with the recognition. The signal completes through allowing the detection to land — feeling the recognition without converting it into comparison, obligation, or self-diminishment."
            compassInsight={<>When Self-Emotional Awareness (SEA) is present, Admiration is received: the person feels the recognition, orients toward what was detected, and the signal completes. <strong style={{ color: TEXT.primary }}>When SEA is absent and the compass is stuck, the same detection cannot be received as Admiration. What the person experiences instead is Envy</strong> — the signal has distorted. The original finding (value detected in another) is the same. What changed is whether the person could receive it.</>}
            research="Algoe &amp; Haidt (2009) — admiration as an other-praising emotion. Immordino-Yang, McColl, Damasio &amp; Damasio (2009) — neural correlates of admiration and compassion."
            addition="Admiration identified as a distinct signal with its own body signature and restoration pathway. The Admiration → Envy distortion is traced as a structural consequence of SEA being offline — not a moral failing but a perceptual one."
          />

          {/* ─── PRIDE ──────────────────────────────────── */}
          <EmotionSection
            id="pride"
            name="Pride"
            signal="Own value or contribution recognized"
            type="Somatic"
            body="Expansion, warmth, upward energy. The body opens from the inside — chest lifts, posture shifts. Pride is a self-recognition signal — it evolved to reinforce behaviours and qualities that serve survival and group contribution."
            restoration={<>Presence with the recognition, without requiring external validation. The signal completes through the person{"'"}s own awareness of their contribution. Pride that depends on others confirming it, or Pride that requires positioning above others, has not completed — it has been routed through Control or Domination.</>}
            compassInsight={<>When Self-Emotional Awareness (SEA) is present, Pride is received as internal recognition. <strong style={{ color: TEXT.primary }}>When SEA is absent and the compass is stuck, the same self-recognition cannot be received as Pride. What the person experiences instead is Arrogance</strong> — elevation over others as a substitute for internal recognition. The original signal (own value detected) is the same. What changed is whether the person could receive it.</>}
            research="Tracy &amp; Robins (2007) — authentic vs hubristic pride. Williams &amp; DeSteno (2008) — pride as a functional social emotion. Tangney (1999) — pride and self-conscious emotion."
            addition="Pride identified as a distinct signal with its own restoration pathway. The Pride → Arrogance distortion is traced as a structural consequence of SEA being offline — the same mechanism as Admiration → Envy."
          />

          {/* ═══ BONDING & PROXIMITY ════════════════════ */}
          <BodySignatureHeading
            label="Bonding & Proximity"
            signature="Orientation toward the other"
          />

          {/* ─── LOVE ──────────────────────────────────── */}
          <EmotionSection
            id="love"
            name="Love"
            signal="Bond"
            type="Relational"
            body="Oxytocin, warmth, the pull toward closeness. The body orients toward the other person. The co-regulation circuit activates. Love is the most potent relational signal the nervous system generates."
            restoration="Reciprocity — the signal received and returned. Love that is given without landing, or love that is demanded without being genuinely offered, does not restore. The cycle closes through mutual contact — genuine felt presence, not performance."
            compassInsight="Love does not disappear when the compass is stuck — it transforms. At stuck Safety & Openness it becomes enmeshment, at stuck Strategy & Management it becomes conditional, at stuck Power & Dominance it becomes ownership. The signal is present at every position. What changes is what the mode does to it."
            research="Bowlby (1969) — attachment as a primary biological system. Panksepp (1998) — CARE system. Uvnas-Moberg (2003) — oxytocin and the calm-and-connection system. Coan (2008) — social baseline theory."
            addition="Love traced across the compass reveals that the signal persists at every position — what changes is the mode's transformation of it. At stuck Power & Dominance, care exists but is indistinguishable from control."
          />

          {/* ─── TRUST ─────────────────────────────────── */}
          <EmotionSection
            id="trust"
            name="Trust"
            signal="Safety confirmed in a specific person"
            type="Relational"
            body="Guard-dropping. Vagal tone shifts — the body moves from monitoring to open contact. The muscles around the eyes and throat soften. Openness extends toward the specific source of the signal. Trust is one of the slowest signals to build and the fastest to collapse — it accumulates through repeated evidence and can be destroyed by a single violation."
            restoration={<>Reciprocity — the signal met with equivalent openness. Trust completes when the person{"'"}s openness is matched by the other{"'"}s. Trust that is extended without being met — or that is met with exploitation — does not complete.</>}
            compassInsight="Trust is the most specific of the bonding signals — it narrows openness to where the evidence supports it. When the compass is stuck, Trust either extends indiscriminately (stuck Connection) or cannot extend at all (stuck Protection, Control, Domination). The specificity that makes Trust functional is the first thing chronicity destroys."
            research="Rempel, Holmes &amp; Zanna (1985) — trust as a relationship-specific construct. Kosfeld, Heinrichs, Zak, Fischbacher &amp; Fehr (2005) — oxytocin and trust. Balliet &amp; Van Lange (2013) — trust as social signal."
            addition="Trust identified as a distinct relational signal — not a general disposition but a nervous system evaluation of specific safety. The slow-build/fast-collapse asymmetry mapped as a structural feature of the signal."
          />

          {/* ─── GRATITUDE ──────────────────────────────── */}
          <EmotionSection
            id="gratitude"
            name="Gratitude"
            signal="Something needed was received"
            type="Relational"
            body="Warmth, orientation toward the other, brief vulnerability in receiving. The body opens in the direction of the source — not with the approach energy of Joy, but with the settling of something received. Gratitude requires a moment of asymmetry: the person is in the position of having received, which activates a brief vulnerability."
            restoration="Expression — the signal completing through acknowledgment. Gratitude that is felt but unexpressed stays partially open. The cycle closes through the recognition reaching the other person — not as performance, but as genuine contact with what was received."
            compassInsight="Gratitude requires receiving — and receiving requires vulnerability. When the compass is stuck at Strategy & Management or Power & Dominance, receiving is structurally unavailable because it positions the person as the one who needed something. The signal cannot fire when the mode prevents the position it requires."
            research="Emmons &amp; McCullough (2003) — gratitude as relational emotion. Algoe (2012) — find, remind, and bind theory of gratitude. McCullough, Kilpatrick, Emmons &amp; Larson (2001) — gratitude as moral affect."
            addition="Gratitude identified as requiring relational completion — not through internal appreciation but through expression that reaches the other. The vulnerability inherent in receiving mapped as the mechanism that chronic modes suppress."
          />

          {/* ─── COMPASSION ─────────────────────────────── */}
          <EmotionSection
            id="compassion"
            name="Compassion"
            signal={<>The other{"'"}s state resonates and calls for approach</>}
            type="Relational"
            body={<>Movement toward the other. The body orients, approaches, reaches. There is resonance with the other{"'"}s state — the person feels something of what the other is feeling — but without merger. Compassion maintains the boundary between the person{"'"}s own state and the other{"'"}s. When the boundary collapses, Compassion becomes absorption (stuck Connection).</>}
            restoration={<>Contact with the other{"'"}s state without absorption. The signal completes through presence with the other — not fixing, not taking on their pain, but being in contact with their state while remaining in one{"'"}s own body. Compassion that absorbs does not complete for either person.</>}
            compassInsight="Compassion requires both Emotional Resonance (ER) and a maintained boundary — feeling what the other feels without becoming it. When the compass is stuck at Safety & Openness, the boundary dissolves and Compassion becomes absorption. When stuck at Strategy & Management or Power & Dominance, the resonance is suppressed and what appears as compassion is strategic care."
            research="Singer &amp; Klimecki (2014) — compassion vs empathic distress, distinct neural pathways. Goetz, Keltner &amp; Simon-Thomas (2010) — compassion as a distinct affective state. Neff (2003) — self-compassion as a construct."
            addition="Compassion identified as a relational signal that requires maintained boundary — distinguishing it from absorption (boundary collapse) and strategic care (resonance suppression). The ER + boundary requirement maps directly to M2 capacity states."
          />

          {/* ═══ DISTORTIONS ════════════════════════════ */}
          <section
            id="distortions"
            aria-labelledby="heading-distortions"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-distortions"
              style={sectionHeadingStyle}
            >
              Distortions: Envy and Arrogance
            </h2>

            <p style={proseStyle}>
              Envy and Arrogance are not emotions in the same sense as the sixteen signals above. They are what occupies the space where Admiration and Pride would have been — when Self-Emotional Awareness (SEA) is absent and the compass is stuck.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Envy</strong> is the distortion of Admiration. When a person detects value in another but cannot receive that detection through Self-Emotional Awareness (SEA), the signal does not land as recognition. What the person experiences instead is the gap — the distance between what was detected in the other and what is absent in the self. The original signal (value detected) is the same. What changed is whether it could be received.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Arrogance</strong> is the distortion of Pride. When a person{"'"}s own value or contribution cannot be received through Self-Emotional Awareness (SEA), the signal does not land as self-recognition. What the person experiences instead is elevation — positioning above others as a substitute for internal recognition.
            </p>

            <p style={proseStyle}>
              Both distortions appear only in the stuck compass, and only in Strategy & Management and Power & Dominance positions — they cannot exist at Safety & Openness or Threat & Defence because those positions do not generate the strategic or power-based response that the distortions require.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The Admiration → Envy and Pride → Arrogance pathways are the clearest illustration of a general principle: when Self-Emotional Awareness (SEA) is absent, the signal does not disappear — it distorts. The finding is the same. Whether it can be received determines what the person experiences.
            </OperationalStatement>
          </section>

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
              Somatic vs Relational — Two Restoration Pathways
            </h2>

            <p style={proseStyle}>
              Not all emotions can complete their cycle alone. This is not a weakness or a failure. It is biology.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Somatic emotions</strong> — those whose content is about the body{"'"}s own state (a physical threat, a boundary crossed, a startle, mobilised energy, a demand-resource mismatch, a value detected) — can complete through the body{"'"}s own channels when conditions allow. Breathing, movement, time. The cycle can close internally.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Relational emotions</strong> — Shame, Guilt, Love, Trust, Gratitude, Compassion, with relational components in Sadness and Anxiety — cannot complete this way. Their content is not about the body{"'"}s state. It is about belonging, connection, or the state of the bond. The signal these emotions carry is: <em>something is happening between me and you.</em> The body is not waiting for somatic discharge. It is waiting for relational evidence.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              No amount of breathing resolves shame. The nervous system is waiting for another person to stay — to remain present without contempt after seeing the thing that feels shameful. That staying is the biological signal the restoration pathway needs to close.
            </OperationalStatement>

            {/* Pathway table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", minWidth: 500 }}>
                <div style={gridHeaderStyle}>Emotion</div>
                <div style={gridHeaderStyle}>Type</div>
                <div style={gridHeaderStyle}>Restoration Pathway</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Fear</div>
                <div style={gridCellStyle}>Somatic</div>
                <div style={gridCellStyle}>Threat resolves, safety established</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Anger</div>
                <div style={gridCellStyle}>Somatic</div>
                <div style={gridCellStyle}>Boundary reasserted or acknowledged</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Stress</div>
                <div style={gridCellStyle}>Somatic</div>
                <div style={gridCellStyle}>Demand met or resource restored</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Anxiety</div>
                <div style={gridCellStyle}>Somatic / Relational</div>
                <div style={gridCellStyle}>Uncertainty resolves; chronic relational anxiety needs relational evidence</div>

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

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Happiness</div>
                <div style={gridCellStyle}>Somatic</div>
                <div style={gridCellStyle}>Presence without interruption</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Admiration</div>
                <div style={gridCellStyle}>Somatic</div>
                <div style={gridCellStyle}>Presence with recognition, without comparison</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Pride</div>
                <div style={gridCellStyle}>Somatic</div>
                <div style={gridCellStyle}>Presence with self-recognition, without external validation</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Love</div>
                <div style={{ ...gridCellStyle, color: SPECTRUM.sky }}>Relational</div>
                <div style={gridCellStyle}>Signal received and returned — genuine felt presence</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Trust</div>
                <div style={{ ...gridCellStyle, color: SPECTRUM.sky }}>Relational</div>
                <div style={gridCellStyle}>Openness matched by equivalent openness</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Gratitude</div>
                <div style={{ ...gridCellStyle, color: SPECTRUM.sky }}>Relational</div>
                <div style={gridCellStyle}>Expression reaching the other — genuine contact with what was received</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Compassion</div>
                <div style={{ ...gridCellStyle, color: SPECTRUM.sky }}>Relational</div>
                <div style={gridCellStyle}>Contact with other{"'"}s state without absorption</div>
              </div>
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Affect regulation:</strong> Schore (2003) — co-regulation as the mechanism through which relational affects are processed. <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — the social engagement system as the pathway for relational restoration. <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — completion of the activation cycle as a somatic process.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The explicit distinction between somatic and relational restoration pathways as a structural feature of the emotional signal system — not a clinical observation but a design constraint. Somatic emotions have an internal exit. Relational emotions do not. This makes co-regulation not a therapeutic technique but a biological requirement for specific emotional states.
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
              These stay open — accumulating debris — because the restoration pathway requires something the environment never provided.
            </p>
            <p style={proseStyle}>
              When relational emotions repeatedly cycle without restoration — when the nervous system keeps sending the signal and the relational evidence never arrives — the system eventually stops sending. Not because the need disappears. Because the channel that was supposed to receive the signal has been consistently empty. Emotional Resonance (ER) and Self-Emotional Awareness (SEA) go down. The flatness is, in part, the accumulated effect of relational cycles that were never allowed to close.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The child does not fail to develop {"\u201C"}regulation{"\u201D"} in general — they fail to develop the restoration pathway for the specific emotions that require relational evidence.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Right-brain development:</strong> Schore (2003) — co-regulation as the mechanism through which regulatory pathways build. <strong style={{ color: TEXT.primary }}>Mutual regulation:</strong> Tronick (2007) — the impact of chronic misattunement. <strong style={{ color: TEXT.primary }}>Developmental trauma:</strong> van der Kolk (2014) — consequences of emotional neglect on regulatory capacity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The developmental consequence mapped at the level of specific emotions rather than general regulatory capacity. This specificity explains why someone can regulate fear effectively (somatic restoration pathway intact) while being unable to process shame at all (relational restoration pathway never built). The flatness that results is not emotional absence. It is the accumulated effect of a channel that stopped sending because no one was receiving.
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
                    label="See the full M2 model — compass, modes, gradient, filters"
                    href="/model/m2-nervous-system-states"
                    linkText="M2: Nervous System States &rarr;"
                  />
                  <NavRow
                    label="Understand what happens when the activation cycle doesn't complete"
                    href="/model/m3-regulation-capacities"
                    linkText="M3: Regulation Capacities &rarr;"
                  />
                  <NavRow
                    label="Understand what determines how well the compass works"
                    href="/model/m4-awareness-capacities"
                    linkText="M4: Awareness Capacities &rarr;"
                  />
                  <NavRow
                    label="Understand the foundational theory behind this model"
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

      {/* ─── JSON-LD: ScholarlyArticle ──────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/model/m1-emotions-as-signals#article",
            headline: "Emotions as Signals: The Signal Language",
            description:
              "Sixteen emotions mapped as biological signals — what each one detects, what the body does, and what restores the cycle. Model M1 of the TEG-Blue system.",
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
            dateModified: "2026-03-24",
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
              "restoration pathway",
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
              { name: "The Emotional Somatic System", url: "/models" },
              { name: "M1: Emotions as Signals", url: "/model/m1-emotions-as-signals" },
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
                question: "What are the sixteen emotions in the TEG-Blue system?",
                answer:
                  "TEG-Blue maps sixteen emotions as biological signals, organized by body signature group: Mobilization (Fear, Anger, Stress, Anxiety), Expulsion (Disgust), Social Withdrawal (Shame, Guilt), Conservation (Sadness), Approach & Expansion (Joy, Happiness, Admiration, Pride), and Bonding & Proximity (Love, Trust, Gratitude, Compassion). Each carries a specific finding from the nervous system's continuous evaluation of the environment. Envy and Arrogance are mapped as distortions — what occupies the space where Admiration and Pride would have been when SEA is absent.",
              },
              {
                question: "What is the difference between somatic and relational emotions?",
                answer:
                  "Somatic emotions (Fear, Anger, Stress, Disgust, Joy, Happiness, Admiration, Pride) can complete their cycle through the body's own channels — breathing, movement, time. Relational emotions (Shame, Guilt, Love, Trust, Gratitude, Compassion) cannot complete alone. Their content is about belonging or the state of the bond. Anxiety and Sadness have both somatic and relational components. Co-regulation is the only restoration pathway for relational emotions.",
              },
              {
                question: "Why can't breathing resolve shame?",
                answer:
                  "Shame is a relational emotion — its signal is about belonging at risk. The nervous system is not waiting for somatic discharge. It is waiting for relational evidence: another person remaining present without contempt after seeing the thing that feels shameful. That staying is the biological signal the cycle needs to close. No somatic intervention reaches the relational restoration pathway.",
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

function BodySignatureHeading({ label, signature }) {
  return (
    <div
      style={{
        marginBottom: 20,
        marginTop: 8,
        paddingTop: 16,
        paddingBottom: 8,
        paddingLeft: 14,
        borderLeft: `3px solid ${hexToRgba(MODEL_COLOR, 0.3)}`,
      }}
    >
      <span
        style={{
          fontFamily: FONT.mono,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: MODEL_COLOR,
        }}
      >
        {label}
      </span>
      <p
        style={{
          fontFamily: FONT.display,
          fontSize: 12,
          color: TEXT.muted,
          margin: "2px 0 0",
          fontStyle: "italic",
        }}
      >
        {signature}
      </p>
    </div>
  );
}

function EmotionSection({
  id,
  name,
  signal,
  type,
  body,
  restoration,
  compassInsight,
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
        Restoration: {type}
      </span>

      <h3 style={h3Style}>What the body does with it</h3>
      <p style={proseStyle}>{body}</p>

      <h3 style={h3Style}>What it needs to restore</h3>
      <p style={proseStyle}>{restoration}</p>

      <OperationalStatement color={MODEL_COLOR}>
        {compassInsight}
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
