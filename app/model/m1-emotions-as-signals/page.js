import Link from "next/link";
import dynamic from "next/dynamic";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
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

const EmotionSignalExplorer = dynamic(
  () => import("@/src/components/framework-diagrams/EmotionSignalExplorer"),
  { ssr: false }
);

const EmotionWaveSection = dynamic(
  () => import("@/src/components/EmotionWaveSection"),
  { ssr: false }
);

const MODEL_COLOR = SPECTRUM.azure;

const ANCHOR_SECTIONS = [
  { label: "First Language", href: "#signalling-language" },
  { label: "Signal Anatomy", href: "#signal-anatomy" },
  { label: "Somatic & Relational", href: "#two-pathways" },
  { label: "Distortions", href: "#distortions" },
  { label: "Development", href: "#developmental-consequence" },
  { label: "Explorer", href: "#emotion-explorer" },
  { label: "Connections", href: "#connections" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Emotions as Signals (M1) | TEG-Blue Research",
  description:
    "Emotions mapped as biological signals — what each one detects, what the body does, and what restores the cycle. The first stage of the Emotional Somatic Cycle.",
  keywords: [
    "emotions as signals",
    "nervous system signals",
    "somatic emotions",
    "relational emotions",
    "restoration pathway",
    "co-regulation",
    "signal interpretation",
    "body signature groups",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m1-emotions-as-signals",
  },
  openGraph: {
    title: "Emotions as Signals — M1 Model | TEG-Blue",
    description:
      "Emotions mapped as biological signals. What each one detects, what the body does, and what restores the cycle.",
    url: "https://teg-blue.org/model/m1-emotions-as-signals",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotions as Signals — TEG-Blue M1",
    description:
      "Emotions mapped as biological signals. What each one detects, what the body does, and what restores the cycle.",
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
              description="The nervous system evaluates the environment continuously, below conscious awareness, and generates biological messages about what it found. Is there enough safety to engage, or is protection needed? Has a boundary been crossed? Has something been lost? These messages are emotions — the nervous system's first information system."
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
        {/* ─── EMOTION WAVE — The neurochemical arc ──────── */}
        <EmotionWaveSection
          badge="Model M1 · Signal Detection → Emotion"
          description="Before behavior, before belief, before pattern — there is a neurochemical arc. Every time an emotion fires, the nervous system runs a biological sequence with a precise window for integration. This is where the Emotional Somatic Cycle begins."
          showCta={false}
        />

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
                  The nervous system has two information systems. The first — and oldest — is emotion. The second is cognition. The body keeps communicating whether cognition listens or not.
                </li>
                <li style={propositionItemStyle}>
                  Every emotion has three components: signal (what was detected), physiological response (what the body does), restoration pathway (what resolves it)
                </li>
                <li style={propositionItemStyle}>
                  Emotions organized by body signature — each carrying a specific biological finding, from threat to bond
                </li>
                <li style={propositionItemStyle}>
                  Somatic emotions can complete through the body{"'"}s own channels — relational emotions cannot, requiring co-regulation from another person
                </li>
                <li style={propositionItemStyle}>
                  When a signal cannot be received, it does not disappear — it distorts. The finding is the same. What changes is what the person experiences.
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

          <PartDivider label="PART 1" title="The Language" color={MODEL_COLOR} />

          {/* ─── C0: EMOTION PRECEDES COGNITION ─────────── */}
          <section
            id="signalling-language"
            aria-labelledby="heading-signalling-language"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-signalling-language"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Emotion Precedes Cognition
            </h2>

            <p style={proseStyle}>
              The nervous system operates through at least two interacting information systems. The first — and evolutionarily older — is emotion. Emotions function as biologically generated signals that communicate what the nervous system has detected: threat, safety, social inclusion or exclusion, contamination, loss, connection. These signals are generated rapidly, often in milliseconds, and outside conscious awareness. A full physiological response is organized before cognition has assembled a single sentence.
            </p>
            <p style={proseStyle}>
              The second information system is cognition. It supports reflection, interpretation, planning, and symbolic reasoning. But cognition does not generate the original biological signal. It interprets, modulates, suppresses, or reorganizes it. When cognition overrides an emotional signal, the biological signal remains active at the physiological level — the signal is still being generated, whether or not it is consciously acknowledged.
            </p>
            <p style={proseStyle}>
              From this perspective, the central question shifts. Instead of {"\u201C"}How do I control this emotion?{"\u201D"} — which treats the signal as interference — the question becomes {"\u201C"}What condition is this emotion signaling?{"\u201D"} The reframe moves from emotion management to signal interpretation.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Emotions are the body{"'"}s first information system — cognition is the second. A language can be listened to or ignored, interpreted accurately or misread, spoken fluently or suppressed.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Panksepp (1998) — primary emotional systems as ancient biological processes predating cognition. Damasio (1994) — somatic markers as the body{"'"}s signal system guiding decision-making before conscious reasoning. LeDoux (1996) — threat detection running through the amygdala fast pathway before conscious processing. Porges (2011) — neuroception as continuous safety evaluation below awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The reframe from {"\u201C"}emotion regulation{"\u201D"} to {"\u201C"}signal interpretation.{"\u201D"} Existing research establishes that emotions precede cognition and operate through ancient biological circuits. TEG-Blue formalizes this as a language relationship: emotion is the first language, cognition the second. This framing carries specific implications — a language can be listened to or ignored, interpreted accurately or misread, spoken fluently or suppressed — that reshape the clinical question entirely.
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
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Anatomy of an Emotional Signal
            </h2>

            <p style={proseStyle}>
              Every emotion follows three steps — a universal sequence that applies across all signals:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", minWidth: 400 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Step</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What It Is</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>The Signal</div>
                <div style={gridCellStyle}>What the nervous system detected. The finding. What was evaluated and what the evaluation concluded.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Physiological Response</div>
                <div style={gridCellStyle}>How the body reorganizes in response to the finding. Hormonal, neurochemical, muscular changes — automatic, below conscious awareness, running for millions of years before cognition existed.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Restoration Pathway</div>
                <div style={gridCellStyle}>The conditions required for the activation to resolve and the nervous system to return toward physiological baseline. When the restoration pathway is unavailable, the activation remains unresolved — and accumulates.</div>
              </div>
            </div>

            <p style={proseStyle}>
              This architecture is universal. Fear, joy, shame, compassion — each carries a different message, but each follows the same three-step sequence. The message varies. The sequence does not.
            </p>
            <p style={proseStyle}>
              The restoration pathway is where a critical distinction appears: some emotions can complete through the body{"'"}s own channels — somatic emotions, whose signal content is about the body{"'"}s own state. Others cannot — relational emotions, whose content is about belonging, require relational evidence that only another person can provide.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Signal + physiological response + restoration pathway = the universal architecture of every emotion. The message varies. The delivery system does not.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Frijda (1986) — emotions as action tendencies with specific eliciting conditions and behavioral outcomes. Levine (1997) — the activation cycle as a sequence that must complete through the body. Porges (2011) — the autonomic nervous system as a bidirectional communication system.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Existing research describes each step separately — action tendencies (Frijda), completion cycles (Levine), autonomic communication (Porges) — but does not unify them into a single architecture that applies identically across all signals. TEG-Blue proposes the three-step sequence as a uniform anatomy, and identifies the restoration pathway as a structural third step built into the signal itself — not a separate therapeutic concern. The somatic/relational split at step three determines which pathway each emotion requires.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 2: THE SIGNAL SYSTEM                       */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 2" title="The Signal System" color={MODEL_COLOR} />

          {/* ─── C2/C3: SOMATIC VS RELATIONAL ──────────── */}
          <section
            id="two-pathways"
            aria-labelledby="heading-two-pathways"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-two-pathways"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Somatic and Relational Emotions
            </h2>

            <p style={proseStyle}>
              The signal{"'"}s content determines which form of restoration the body requires. This is a structural constraint of the signal system.
            </p>

            <h3 style={conceptHeadingStyle}>Somatic Emotions</h3>
            <p style={proseStyle}>
              Emotions whose signal content is about the body{"'"}s own state — a physical threat, a boundary crossed, a demand-resource mismatch, a contamination, a value detected, a safety confirmed. The finding is about conditions the body can evaluate and respond to through its own channels. Somatic emotions can restore through internal physiological processes when conditions allow: breathing, movement, time, stillness, crying, sleep. Stress hormones metabolize, muscles release, the nervous system returns toward physiological baseline — without requiring input from another person.
            </p>

            <h3 style={conceptHeadingStyle}>Relational Emotions</h3>
            <p style={proseStyle}>
              Emotions whose signal content is about belonging, connection, or the state of the bond. The finding is not about the body{"'"}s own state. It is about what is happening between the person and another person. The signal carries: <em>something is happening between me and you.</em>
            </p>
            <p style={proseStyle}>
              Relational emotions cannot complete through the body{"'"}s own channels. The restoration process does not require somatic discharge. It requires relational evidence — the presence of another person who provides what the signal content requires. No amount of breathing resolves shame. The restoration pathway requires another person to stay — to remain present without contempt after seeing the thing that feels shameful. That staying is the biological signal the restoration pathway needs.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The pathway must match the content. A person who attempts somatic restoration for relational content — exercising to clear shame, breathing techniques to process grief — produces discharge but does not complete the restoration sequence. The activation remains.
            </OperationalStatement>

            {/* Compact somatic/relational summary table */}
            <div style={{ overflowX: "auto", marginBottom: 20, marginTop: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", minWidth: 500 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Type</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Emotions</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Restoration</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Somatic</div>
                <div style={gridCellStyle}>Fear, Anger, Stress, Anxiety, Disgust, Joy, Happiness, Admiration, Pride</div>
                <div style={gridCellStyle}>Through the body{"'"}s own channels — breathing, movement, time, stillness, crying, sleep</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: SPECTRUM.sky }}>Relational</div>
                <div style={gridCellStyle}>Shame, Guilt, Sadness, Love, Trust, Gratitude, Compassion</div>
                <div style={gridCellStyle}>Requires relational evidence — another person providing the co-regulatory signals the restoration sequence requires</div>
              </div>
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Levine (1997) — the activation cycle as a somatic process that must complete through the body. Schore (2003) — co-regulation as the mechanism through which relational affects are processed. Porges (2011) — the social engagement system as the pathway for relational restoration.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The classification of specific emotions as somatic or relational based on signal content — a structural feature of the signal system, not a clinical observation. What determines whether an emotion can restore through the body{"'"}s own channels is what the signal is about, not how strong it feels. This makes co-regulation a biological requirement for specific emotional states, not a therapeutic technique.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── BODY SIGNATURE GROUPS ──────────────────── */}
          <section
            id="body-signatures"
            aria-labelledby="heading-body-signatures"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-body-signatures"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Body Signature Groups
            </h2>

            <p style={proseStyle}>
              Emotions are organized by what the body does when the nervous system generates the signal — the physiological response pattern, or body signature. Emotions within the same group share a characteristic pattern of physiological mobilization.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", minWidth: 500 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Body Signature</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What the Body Does</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Emotions</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Mobilization</div>
                <div style={gridCellStyle}>Sympathetic activation — heart rate rises, muscles tense, energy directs toward action</div>
                <div style={gridCellStyle}>Fear, Anger, Stress, Anxiety</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Expulsion</div>
                <div style={gridCellStyle}>Visceral rejection — nausea, aversion, sensory closure</div>
                <div style={gridCellStyle}>Disgust</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Approach & Expansion</div>
                <div style={gridCellStyle}>Opening — muscle tension releases, breathing deepens, posture opens, attention broadens</div>
                <div style={gridCellStyle}>Joy, Happiness, Admiration, Pride</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Social Withdrawal</div>
                <div style={gridCellStyle}>Shrinking — heat, gaze aversion, the urge to hide or disappear</div>
                <div style={gridCellStyle}>Shame, Guilt</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Conservation</div>
                <div style={gridCellStyle}>Slowing — tears, heaviness, energy turns inward</div>
                <div style={gridCellStyle}>Sadness</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Bonding & Proximity</div>
                <div style={gridCellStyle}>Orientation toward the other — warmth, co-regulated contact, approach</div>
                <div style={gridCellStyle}>Love, Trust, Gratitude, Compassion</div>
              </div>
            </div>

            <p style={proseStyle}>
              The body signature is the physiological channel through which the signal delivers its message. The signal content tells the nervous system what was detected. The body signature is how the nervous system responds. The restoration pathway is what completes the sequence. Each emotion in the explorer below shows all three.
            </p>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 3: THE ARCHITECTURE                        */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 3" title="The Architecture" color={MODEL_COLOR} />

          {/* ─── C20: DISTORTED SIGNAL RECEPTION ────────── */}
          <section
            id="distortions"
            aria-labelledby="heading-distortions"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-distortions"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Distorted Signal Reception
            </h2>

            <p style={proseStyle}>
              When a signal cannot be received, it does not disappear — it distorts. The finding is the same. What changes is what the person experiences.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Envy</strong> emerges when value is accurately detected in another person, but that perception cannot be metabolized as admiration. The original signal (value detected) is the same. What changed is whether the person could receive it — when cognition or defensive configuration prevents the finding from landing, the person experiences the gap instead of the recognition.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Arrogance</strong> emerges when one{"'"}s own value cannot be stably received as pride and is instead expressed as elevation over others. The same self-recognition that would have landed as pride lands instead as positioning — a substitute for internal recognition.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Both distortions illustrate a general principle of the signal system: the detection mechanism is the same, the finding is the same. What determines whether the signal can be received is the territory of{" "}
              <Link href="/model/m4-awareness-capacities" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M4</Link>.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Crusius, Gonzalez, Lange & Cohen-Charash (2020) — envy as a functional emotion with benign and malicious variants. Festinger (1954) — social comparison theory. Tracy & Robins (2007) — authentic versus hubristic pride.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The Admiration → Envy and Pride → Arrogance pathways identified as structural consequences of signal reception failure. Existing research describes envy and arrogance as separate phenomena. TEG-Blue traces them as distortions of specific signals — the same detection mechanism, the same finding, with the difference located in whether the person could receive what the nervous system generated.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C21: WHAT RESTORATION IS ──────────────── */}
          <section
            id="restoration"
            aria-labelledby="heading-restoration"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-restoration"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              What Restoration Is
            </h2>

            <p style={proseStyle}>
              Restoration is biological completion — not emotion management. When readers encounter the word {"\u201C"}regulation,{"\u201D"} they typically think of calming down, controlling reactions, thinking differently about what happened. Restoration means something different: stress hormones metabolize, muscles unclench, the HPA axis stands down, inflammatory compounds clear, and the nervous system returns toward its pre-activation physiology. This is how the body completes the activation sequence.
            </p>
            <p style={proseStyle}>
              The signal{"'"}s content determines which form of restoration the body requires. A person who attempts somatic restoration for relational content — exercising to clear shame, breathing techniques to process grief — produces discharge but does not complete the restoration sequence. The activation remains. The body carries it forward. The pathway must match the content.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Restoration is the biological completion process: stress hormones metabolize, muscles release, the HPA axis stands down. The form of restoration must match the signal content — somatic restoration for body-state signals, relational restoration for belonging-state signals.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Levine (1997) — the activation cycle as a somatic process that must complete through the body. Schore (2003) — co-regulation as the mechanism through which relational affects are processed. Porges (2011) — the social engagement system as the pathway for relational restoration.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The reframe from {"\u201C"}regulation{"\u201D"} to {"\u201C"}restoration{"\u201D"} — from managing emotional experience to completing a biological sequence. And the structural constraint that the form of restoration must match the signal content: somatic restoration for body-state signals, relational restoration for belonging-state signals. This is a design feature of the signal system, not a therapeutic recommendation.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C22: DEVELOPMENTAL LOSS ───────────────── */}
          <section
            id="developmental-consequence"
            aria-labelledby="heading-developmental-consequence"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-developmental-consequence"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Developmental Loss of Restoration Pathways
            </h2>

            <p style={proseStyle}>
              When relational emotions repeatedly arise in environments where no co-regulating response is available, the person may not develop robust pathways for resolving those states. The consequence is specific: the child does not fail to develop {"\u201C"}regulation{"\u201D"} in general — they fail to develop the restoration pathway for the specific emotions that require relational evidence.
            </p>
            <p style={proseStyle}>
              This specificity explains why someone can regulate fear effectively (the somatic restoration pathway is intact) while being unable to process shame at all (the relational restoration pathway was never built). The child who learned that anger was not safe to express may suppress that signal. The child whose grief was never witnessed may stop generating that signal. The nervous system stops sending because no one was receiving.
            </p>
            <p style={proseStyle}>
              When the pathways never build, the system has no exit for those specific activations. The activation accumulates — unmetabolized stress hormones, sustained muscle tension, elevated inflammatory compounds — the baseline elevates, and the window between resting activation and shutdown narrows. What happens when that window closes is the territory of{" "}
              <Link href="/model/m3-regulation-capacities" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M3</Link>. What determines whether the person can perceive any of these physiological changes while they are happening is the territory of{" "}
              <Link href="/model/m4-awareness-capacities" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M4</Link>.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The child does not fail to develop {"\u201C"}regulation{"\u201D"} in general — they fail to develop the restoration pathway for the specific emotions that require relational evidence. The nervous system stopped generating those signals because no one was receiving them.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Schore (2003) — right-brain development shaped by early relational experience, co-regulation as the mechanism through which regulatory pathways build. Tronick (2007) — mutual regulation model and the impact of chronic misattunement. van der Kolk (2014) — developmental consequences of emotional neglect on regulatory capacity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The developmental consequence mapped at the level of specific emotions rather than general regulatory capacity. Existing developmental research describes regulation as a general capacity that can be impaired. TEG-Blue specifies which emotions are affected and why — because each emotion has a specific restoration pathway, and pathways that require relational evidence can only build through relational experience. The specificity is the contribution.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* THE DIAGRAM — Interactive Explorer               */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="EXPLORE" title="The Signal Library" color={MODEL_COLOR} />

          <section
            id="emotion-explorer"
            aria-labelledby="heading-emotion-explorer"
            style={{ marginBottom: 48 }}
          >
            <p style={{ ...proseStyle, marginBottom: 24 }}>
              Select any signal below to see its full anatomy: what the nervous system detected, the physiological response pattern, what the signal needs to restore, and the body signature group it belongs to.
            </p>

            <EmotionSignalExplorer />
          </section>

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={MODEL_COLOR}
            connections={[
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "Describes what happens after the signal is generated — how the nervous system reorganizes into a different physiological state that changes perception, cognition, and available behavior.",
              },
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "Describes whether the activation sequence completes — whether the restoration pathway runs to its endpoint, or cognition overrides and the activation persists as unresolved debris.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "Describes what determines whether the person can perceive the signal at all — the interoceptive substrate, the three awareness capacities, and why some signals never reach conscious awareness.",
              },
              {
                id: "F1: The Emotional Gradient",
                href: "/framework/f1-emotional-gradient",
                description: "Provides the biological origin of the architecture M1 describes — why the nervous system evaluates along a safety-threat gradient, and how this orientation shapes all signal generation.",
              },
              {
                id: "F2: The Developmental Blueprint",
                href: "/framework/f2-awareness-calibration",
                description: "Explains how the relational environment during development determines which restoration pathways build and which remain absent — the origin of M1's developmental consequence.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={MODEL_COLOR}
            items={[
              {
                label: "See what happens after the signal is generated — the nervous system state it produces and how it changes perception",
                href: "/model/m2-nervous-system-states",
                linkText: "M2: Nervous System States \u2192",
              },
              {
                label: "Understand whether the activation sequence completes — and what happens when cognition overrides it",
                href: "/model/m3-regulation-capacities",
                linkText: "M3: Regulation Capacities \u2192",
              },
              {
                label: "Understand what determines whether the person can receive the signal at all",
                href: "/model/m4-awareness-capacities",
                linkText: "M4: Awareness Capacities \u2192",
              },
              {
                label: "Explore the biological origin of the safety-threat gradient that drives signal generation",
                href: "/framework/f1-emotional-gradient",
                linkText: "F1: The Emotional Gradient \u2192",
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
              "Emotions mapped as biological signals — what each one detects, what the body does, and what restores the cycle. Model M1 of the TEG-Blue system.",
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
                question: "What are emotions in the TEG-Blue system?",
                answer:
                  "TEG-Blue maps emotions as biological signals — information the nervous system generates when it detects something in the environment that matters. Each signal carries a specific finding (threat, safety, boundary violation, loss, connection), triggers a characteristic physiological response, and has conditions under which it resolves. Emotions organized by body signature group include Mobilization (Fear, Anger, Stress, Anxiety), Expulsion (Disgust), Approach & Expansion (Joy, Happiness, Admiration, Pride), Social Withdrawal (Shame, Guilt), Conservation (Sadness), and Bonding & Proximity (Love, Trust, Gratitude, Compassion).",
              },
              {
                question: "What is the difference between somatic and relational emotions?",
                answer:
                  "Somatic emotions (Fear, Anger, Stress, Anxiety, Disgust, Joy, Happiness, Admiration, Pride) can complete their restoration sequence through the body's own channels — breathing, movement, time, stillness, crying, sleep. Relational emotions (Shame, Guilt, Sadness, Love, Trust, Gratitude, Compassion) cannot complete alone. Their signal content is about belonging or the state of the bond, and the restoration pathway requires relational evidence — the presence of another person providing the co-regulatory signals the body needs.",
              },
              {
                question: "Why can't breathing resolve shame?",
                answer:
                  "Shame is a relational emotion — its signal content is about belonging at risk. The nervous system is not waiting for somatic discharge. It requires relational evidence: another person remaining present without contempt after seeing the thing that feels shameful. That staying is the biological signal the restoration pathway needs. No somatic intervention reaches the relational restoration pathway.",
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
