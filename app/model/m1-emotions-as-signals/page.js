import dynamic from "next/dynamic";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, PATTERN, MODEL_COLORS, hexToRgba } from "@/src/styles/tokens";

const M1SignalDiagram = dynamic(() => import("@/src/components/M1SignalDiagram"), { ssr: false });
const M1SignalMap = dynamic(() => import("@/src/components/M1SignalMap"), { ssr: false });
const M1DistortionPathway = dynamic(() => import("@/src/components/M1DistortionPathway"), { ssr: false });
const M1DevelopmentalLoss = dynamic(() => import("@/src/components/M1DevelopmentalLoss"), { ssr: false });
const M1SpeedComparison = dynamic(() => import("@/src/components/M1SpeedComparison"), { ssr: false });
const M1RestorationPathways = dynamic(() => import("@/src/components/M1RestorationPathways"), { ssr: false });
const M1SignalLifecycle = dynamic(() => import("@/src/components/M1SignalLifecycle"), { ssr: false });
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
  other: {
    "citation_title": "Emotions as Signals",
    "citation_author": "Anna Paretas-Artacho",
    "citation_publication_date": "2026/02",
    "citation_technical_report_institution": "TEG-Blue Research",
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
          <ModelHero
            badge="MODEL M1"
            title="Emotions as Signals"
            subtitle="The Signal Language"
            description="Before a thought finishes forming, the body has already responded. The nervous system evaluates environmental conditions continuously — safety, threat, loss, connection — and generates a full physiological response in milliseconds. Heart rate shifts, hormones release, muscles brace or soften. These responses are emotions: biological signals carrying specific information about what was detected. This model maps what each signal detects, what the body does in response, and what conditions are needed for the response to resolve."
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
        <figure role="figure" aria-label="Signal lifecycle diagram">
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
              The nervous system continuously monitors internal and external conditions below conscious awareness. It evaluates for safety, threat, boundary violation, loss, and relational stability — and produces signals that orient the body toward response. Heart rate changes. Stress hormones release. Muscles reorganize. A full physiological response is organized before the first conscious thought has assembled a single sentence. Cognition arrives to find the body already responding.
            </p>
            <p style={proseStyle}>
              Emotion, in this model, is a functional output of that detection process — not opposed to reason, but operating through a different channel, one that is faster, older, and largely independent of conscious processing. Cognition shapes how the signal is interpreted, named, explained, suppressed, or overridden — but does not generate the original signal itself.
            </p>
            <p style={proseStyle}>
              Each emotion corresponds to a specific type of detection and carries a characteristic physiological response pattern. An emotional signal does not merely express a state. It indicates that the nervous system has registered something consequential and has begun reorganizing the body accordingly. The architecture is consistent across all signals: what was detected, how the body responds, and under what conditions the activation resolves.
            </p>
            <p style={proseStyle}>
              This reframes the central question. Not how emotion should be controlled, but what each signal is indicating — and whether the body has the conditions required to complete its response.
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
                The nervous system has two information systems. The first — and oldest — is emotion. The second is cognition. The signal does not stop being generated when cognition overrides or suppresses it.
              </li>
              <li style={propositionItemStyle}>
                Every emotion follows three steps: signal (what was detected), physiological response (what the body does), restoration pathway (what resolves it). The message varies. The sequence does not.
              </li>
              <li style={propositionItemStyle}>
                Somatic emotions can complete through the body{"'"}s own channels. Relational emotions require another person as a biological completion requirement — not a psychological preference.
              </li>
              <li style={propositionItemStyle}>
                The signal{"'"}s content determines which form of restoration the body requires. The pathway must match the content.
              </li>
              <li style={propositionItemStyle}>
                When a signal cannot be received, it does not disappear — it distorts. The finding is the same. What changes is what the person experiences.
              </li>
              <li style={propositionItemStyle}>
                When relational emotions are never co-regulated during development, the specific restoration pathways for those emotions never build. The nervous system stops generating those signals because no one was receiving them.
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
            id="emotion-precedes-cognition"
            aria-labelledby="heading-emotion-precedes-cognition"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-emotion-precedes-cognition"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Emotion Precedes Cognition
            </h2>

            <p style={proseStyle}>
              The nervous system operates through at least two interacting information systems.
            </p>
            <p style={proseStyle}>
              The first, and evolutionarily older, is emotion. Emotions function as biologically mediated signals that communicate the outcome of ongoing evaluations of environmental and relational conditions. These signals indicate findings such as threat, safety, social inclusion, exclusion, contamination, loss, or connection. They are generated rapidly and often outside conscious awareness.
            </p>
            <p style={proseStyle}>
              The second information system is cognition. Cognition supports reflection, interpretation, planning, and symbolic reasoning. However, cognition does not generate the original biological signal. It interprets, modulates, suppresses, or reorganizes it.
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
              When cognition overrides emotional signaling, the biological signal remains active at the physiological level. The signal is still being generated, whether or not it is consciously acknowledged.
            </p>
            <p style={proseStyle}>
              From this perspective, the central question is not {"\u201C"}How do I control this emotion?{"\u201D"} but {"\u201C"}What condition is this emotion signaling?{"\u201D"} The framework shifts from emotion management to signal identification.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Panksepp (1998) — primary emotional systems as ancient biological processes. Damasio (1994) — somatic markers as the body{"'"}s signal system guiding cognition. LeDoux (1996) — threat detection running faster than conscious processing. Porges (2011) — neuroception as continuous safety evaluation below awareness. Frijda (1986) — emotions as action readiness, functional signals oriented toward environmental conditions.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The reframe from {"\u201C"}emotion regulation{"\u201D"} to {"\u201C"}signal interpretation.{"\u201D"} The framing of emotions as the body{"'"}s first language — cognition is the second. The framing as {"\u201C"}language{"\u201D"} carries specific implications: a language can be listened to or ignored, interpreted accurately or misread, spoken fluently or suppressed.
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

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>1. The Signal</div>
                <div style={gridCellStyle}>What the nervous system detected. The finding. What was evaluated and what the evaluation concluded.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>2. Physiological Response</div>
                <div style={gridCellStyle}>How the body reorganizes in response to the finding. Hormonal, neurochemical, muscular changes that are automatic, below conscious awareness, and have been running for millions of years before cognition existed.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>3. Restoration Pathway</div>
                <div style={gridCellStyle}>The conditions required for the activation to resolve. The conditions under which the nervous system stands down and returns toward physiological baseline. When the restoration pathway is unavailable, the activation remains unresolved — and accumulates.</div>
              </div>
            </div>

            <figure role="figure" aria-label="Signal anatomy diagram" style={{ margin: "24px 0" }}>
              <M1SignalDiagram />
              <figcaption style={{ fontSize: 13, color: '#94a3b8', fontStyle: 'italic', padding: '8px 16px 0', lineHeight: 1.5 }}>
                The universal three-step anatomy: a signal fires, the body responds, and restoration begins. Each of the 16 emotions follows this same biological sequence.
              </figcaption>
              <noscript>
                <p style={{ padding: 16, color: '#94a3b8' }}>Interactive diagram: animated waveform showing the three-step signal anatomy (Signal, Response, Restoration) for each of the 16 emotions, selectable by emotion name.</p>
              </noscript>
            </figure>

            <p style={proseStyle}>
              This architecture is universal. Fear, joy, shame, compassion — each carries a different message, but each follows the same three-step sequence. The message varies. The sequence does not.
            </p>
            <p style={proseStyle}>
              The restoration pathway is where a critical distinction appears: some emotions can complete through the body{"'"}s own channels (somatic). Others cannot — their content is about belonging, and the restoration process requires relational evidence that only another person can provide (relational). This distinction is defined in the next section.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Frijda (1986) — emotions as action tendencies with specific eliciting conditions and behavioural outcomes. Levine (1997) — the activation cycle as a sequence that must complete. Porges (2011) — the autonomic nervous system as a bidirectional communication system.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The formalisation of the three-step sequence as a uniform anatomy applied across every emotion. Existing research describes each step separately — action tendencies (Frijda), completion cycles (Levine), autonomic communication (Porges) — but does not unify them into a single architecture that applies identically across all signals. TEG-Blue proposes that the restoration pathway is not a separate therapeutic concern but a structural third step built into the signal itself — and that the somatic/relational split at step 3 determines which pathway is needed for each emotion.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 2: THE SIGNAL SYSTEM                       */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 2" title="The Signal System" color={MODEL_COLOR} />

          {/* ─── C2: SOMATIC EMOTIONS ──────────────────── */}
          <section
            id="somatic-emotions"
            aria-labelledby="heading-somatic-emotions"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-somatic-emotions"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Somatic Emotions
            </h2>

            <p style={proseStyle}>
              Emotions whose signal content is about the body{"'"}s own state — a physical threat, a boundary crossed, a demand-resource mismatch, a contamination, a value detected, a safety confirmed. The finding is about conditions the body can evaluate and respond to through its own channels.
            </p>
            <p style={proseStyle}>
              Somatic emotions can restore through internal physiological processes when conditions allow: breathing, movement, time, stillness, crying, sleep. The body runs the restoration sequence — stress hormones metabolise, muscles release, the nervous system returns toward physiological baseline — without requiring input from another person.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Somatic emotions:</strong> Fear, Anger, Stress, Anxiety, Disgust, Joy, Happiness, Admiration, Pride.
            </p>

            <figure role="figure" aria-label="Somatic emotions signal map">
              <M1SignalMap filter="somatic" />
              <figcaption style={{ fontSize: 13, color: '#94a3b8', fontStyle: 'italic', padding: '8px 16px 0', lineHeight: 1.5 }}>
                Eight somatic emotions organised by body signature group — mobilisation, expulsion, approach and expansion. Each carries a specific signal, body response, and restoration need that completes through the body's own channels.
              </figcaption>
              <noscript>
                <p style={{ padding: 16, color: '#94a3b8' }}>Interactive diagram: grid of eight somatic emotions (Fear, Anger, Stress, Anxiety, Disgust, Joy, Happiness, Admiration) organised by body signature group. Select an emotion to see its signal, body response, and restoration need.</p>
              </noscript>
            </figure>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Levine (1997) — the activation cycle as a somatic process that must complete through the body. Porges (2011) — autonomic regulation as the substrate for somatic completion.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The classification of specific emotions as somatic based on signal content, not intensity or valence. What determines whether an emotion can restore through the body{"'"}s own channels is what the signal is about — not how strong it feels. In Path A — when the restoration sequence can run — somatic emotions restore through the Somatic Restoration Pathway. In Path B — when the restoration sequence cannot run — they drive the search for Non-Relational Restoration Substitutes.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C3: RELATIONAL EMOTIONS ───────────────── */}
          <section
            id="relational-emotions"
            aria-labelledby="heading-relational-emotions"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-relational-emotions"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Relational Emotions
            </h2>

            <p style={proseStyle}>
              Emotions whose signal content is about belonging, connection, or the state of the bond. The finding is not about the body{"'"}s own state. It is about what is happening between the person and another person. The signal carries: <em>something is happening between me and you.</em>
            </p>
            <p style={proseStyle}>
              Relational emotions cannot complete through the body{"'"}s own channels. The restoration process does not require somatic discharge. It requires relational evidence — the presence of another person who provides what the signal content requires. No amount of breathing resolves shame. The restoration sequence requires another person to stay — to remain present without contempt after seeing the thing that feels shameful. That staying is the biological signal the restoration pathway needs.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Relational emotions:</strong> Shame, Guilt, Sadness, Love, Trust, Gratitude, Compassion.
            </p>

            <figure role="figure" aria-label="Relational emotions signal map">
              <M1SignalMap filter="relational" />
              <figcaption style={{ fontSize: 13, color: '#94a3b8', fontStyle: 'italic', padding: '8px 16px 0', lineHeight: 1.5 }}>
                Seven relational emotions that require another person's nervous system for completion. The signal fires in one body; restoration requires a second.
              </figcaption>
              <noscript>
                <p style={{ padding: 16, color: '#94a3b8' }}>Interactive diagram: grid of seven relational emotions (Shame, Guilt, Sadness, Love, Trust, Gratitude, Compassion) organised by body signature group. Select an emotion to see its signal, body response, and restoration need.</p>
              </noscript>
            </figure>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Schore (2003) — co-regulation as the mechanism through which relational affects are processed. Porges (2011) — the social engagement system as the pathway for relational restoration. Bowlby (1969) — attachment as a primary biological system requiring reciprocity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The classification of specific emotions as relational based on signal content — a structural feature of the signal system, not a clinical observation. The signal content determines which restoration pathway is needed. In Path A — when the restoration sequence can run — relational emotions complete through the Relational Restoration Pathway — another person providing the co-regulatory signals the restoration sequence requires. In Path B — when the restoration sequence cannot run — they drive the search for Relational Restoration Substitutes.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 3: THE ARCHITECTURE                        */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 3" title="The Architecture" color={MODEL_COLOR} />

          {/* ─── C20: DISTORTED SIGNAL RECEPTION ─────────── */}
          <section
            id="distorted-signal-reception"
            aria-labelledby="heading-distorted-signal-reception"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-distorted-signal-reception"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Distorted Signal Reception
            </h2>

            <p style={proseStyle}>
              Envy and arrogance are not framed here as primary signals in the same way as the emotions above. They emerge as distortions in signal reception.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Envy</strong> can emerge when value is accurately detected in another person, but that perception cannot be metabolized as admiration. The original signal (value detected) is the same. What changed is whether the person could receive it — when cognition or defensive configuration prevents the finding from landing, the person experiences the gap instead of the recognition.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Arrogance</strong> can emerge when one{"'"}s own value cannot be stably received as pride and is instead expressed as elevation over others. The same self-recognition that would have landed as pride lands instead as positioning.
            </p>
            <p style={proseStyle}>
              Both distortions illustrate a general principle: when a signal cannot be received, it does not disappear — it distorts. The finding is the same. What changes is what the person experiences. What determines whether the signal can be received is the territory of <Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link>.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Crusius, Gonzalez, Lange & Cohen-Charash (2020) — envy as functional emotion with benign and malicious variants. Festinger (1954) — social comparison theory. Tracy & Robins (2007) — authentic vs hubristic pride. Smith & Kim (2007) — envy as social comparison emotion.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The Admiration → Envy and Pride → Arrogance pathways identified as structural consequences of the individual being unable to receive the signal — when cognition or defensive configuration prevents the finding from landing. The same detection mechanism, the same finding. What changed is whether the person could receive it.
                </p>
              </ExpandableSection>
            </div>

            <figure role="figure" aria-label="Distortion pathway diagram">
              <M1DistortionPathway />
              <figcaption style={{ fontSize: 13, color: '#94a3b8', fontStyle: 'italic', padding: '8px 16px 0', lineHeight: 1.5 }}>
                When admiration cannot be received, it distorts into envy. When pride cannot be received, it distorts into arrogance. The original signal remains underneath.
              </figcaption>
              <noscript>
                <p style={{ padding: 16, color: '#94a3b8' }}>Interactive diagram: two branching pathways. Admiration (value detected in another) branches to either recognition (signal received) or envy (signal blocked). Pride (own value recognised) branches to either self-recognition (signal received) or arrogance (signal blocked).</p>
              </noscript>
            </figure>
          </section>

          {/* ─── C21: WHAT RESTORATION IS ──────────────── */}
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
              Each emotion in the signal library carries a restoration pathway — the conditions required for the activation to resolve and the body to return toward physiological baseline. Restoration is not emotion management. It is not calming down, controlling a reaction, or thinking differently about what happened. It is a biological completion process: stress hormones metabolise, muscles unclench, the HPA axis stands down, inflammatory compounds clear, and the nervous system returns toward its pre-activation physiology.
            </p>
            <p style={proseStyle}>
              The signal{"'"}s content determines which form of restoration the body requires. Somatic emotions — those whose signal content is about the body{"'"}s own state — can complete through the body{"'"}s own channels: breathing, movement, time, stillness, crying, sleep. The nervous system runs the restoration sequence without requiring input from another person. Relational emotions — those whose signal content is about belonging, connection, or the state of the bond — cannot complete this way. The restoration process does not require somatic discharge. It requires relational evidence that only another person can provide.
            </p>
            <p style={proseStyle}>
              This is a structural constraint of the signal system, not a preference. The pathway must match the content. A person who attempts somatic restoration for relational content — exercising to clear shame, breathing techniques to process grief — produces discharge but does not complete the restoration sequence. The activation remains. The body carries it forward.
            </p>

            <figure role="figure" aria-label="Restoration pathways diagram" style={{ margin: "24px 0" }}>
              <M1RestorationPathways />
              <figcaption style={{ fontSize: 13, color: '#94a3b8', fontStyle: 'italic', padding: '8px 16px 0', lineHeight: 1.5 }}>
                Three restoration scenarios: somatic signals completing through the body, relational signals completing through co-regulation, and what happens when the restoration type mismatches the signal type.
              </figcaption>
              <noscript>
                <p style={{ padding: 16, color: '#94a3b8' }}>Interactive diagram: three togglable views showing restoration pathways. Somatic: signal fires, body runs the restoration sequence, activation resolves. Relational: signal fires, another person provides co-regulation, activation resolves. Mismatch: relational signal fires, somatic methods applied, activation persists.</p>
              </noscript>
            </figure>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Levine (1997) — the activation cycle as a somatic process that must complete through the body. Schore (2003) — co-regulation as the mechanism through which relational affects are processed. Porges (2011) — the social engagement system as the pathway for relational restoration.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The reframe from {"\u201C"}regulation{"\u201D"} to {"\u201C"}restoration{"\u201D"} — from managing emotional experience to completing a biological sequence. And the structural constraint that the form of restoration must match the signal content — a design feature of the signal system: somatic restoration for body-state signals, relational restoration for belonging-state signals.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C22: DEVELOPMENTAL LOSS ───────────────── */}
          <section
            id="developmental-loss"
            aria-labelledby="heading-developmental-loss"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-developmental-loss"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Developmental Loss of Restoration Pathways
            </h2>

            <p style={proseStyle}>
              When relational emotions repeatedly arise in environments where no co-regulating response is available, the person may not develop robust pathways for resolving those states.
            </p>
            <p style={proseStyle}>
              This means certain classes of emotional activation may remain chronically unresolved because the relational conditions required for completion were not consistently present during development.
            </p>
            <p style={proseStyle}>
              This helps explain why someone may regulate threat effectively in some contexts while remaining highly vulnerable to shame, abandonment signals, or relational loss in others.
            </p>
            <p style={proseStyle}>
              When the pathways never build, the system has no exit. The activation accumulates, the baseline elevates, and the window between resting activation and shutdown narrows. The physiological endpoint is described in <Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link>: dorsal shutdown — where resting activation has risen so high that shutdown is the only remaining response — the nervous system shuts down while unresolved activation (the cortisol, tension, and inflammation that remain when activation does not complete) remains.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Schore (2003) — right-brain development shaped by early relational experience. Tronick (2007) — mutual regulation model, chronic misattunement. van der Kolk (2014) — developmental consequences of emotional neglect.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The developmental consequence mapped at the level of specific emotions rather than general regulatory capacity. The child does not fail to develop {"\u201C"}regulation{"\u201D"} in general — they fail to develop the restoration pathway for the specific emotions that require relational evidence. This specificity explains why someone can regulate fear effectively (somatic pathway intact) while being unable to process shame at all (relational pathway never built). The nervous system stopped generating those signals because no one was receiving them.
                </p>
              </ExpandableSection>
            </div>

            <figure role="figure" aria-label="Developmental loss diagram">
              <M1DevelopmentalLoss />
              <figcaption style={{ fontSize: 13, color: '#94a3b8', fontStyle: 'italic', padding: '8px 16px 0', lineHeight: 1.5 }}>
                When restoration is unavailable early in life, resting activation rises and the available window between activation and shutdown narrows — until shutdown becomes the only available exit.
              </figcaption>
              <noscript>
                <p style={{ padding: 16, color: '#94a3b8' }}>Animated diagram: two lines over developmental time. Resting activation (baseline) rises steadily from early development through accumulation. Shutdown threshold remains constant. The gap between the two lines narrows, showing the shrinking window available before the nervous system shuts down.</p>
              </noscript>
            </figure>
          </section>

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={MODEL_COLOR}
            connections={[
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "Describes what happens after the signal is generated — how the nervous system reorganizes into a state that changes perception, cognition, and available behaviour.",
              },
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "Describes whether the activation sequence completes — whether the body runs the restoration sequence to its endpoint, or the activation persists as unresolved residue.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "Describes what determines whether the person can perceive the signal at all — the interoceptive substrate, the three awareness capacities, and why some signals never reach conscious awareness.",
              },
              {
                id: "F1: The Emotional Gradient",
                href: "/framework/f1-emotional-gradient",
                description: "Provides the biological origin of the architecture M1 describes — why the nervous system evaluates along a safety-threat gradient, and how the ESS and CLS co-evolved to produce the signal system.",
              },
              {
                id: "F2: Developmental Calibration",
                href: "/framework/f2-awareness-calibration",
                description: "Explains how the relational environment during development determines which restoration pathways build and which remain absent — the origin of the developmental consequence M1 describes.",
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
                label: "See what happens after the signal is generated — the nervous system state it produces and how it changes perception",
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
                label: "Explore the biological origin of the safety-threat gradient that drives signal generation",
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
            dateModified: "2026-04-06",
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
              description: "Interactive diagrams showing signal lifecycle, emotion map, speed comparison, distortion pathways, restoration pathways, and developmental loss of restoration capacity.",
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
                  "TEG-Blue maps emotions as biological signals — information the nervous system generates when it detects something in the environment that matters. Each signal carries a specific finding (threat, safety, boundary violation, loss, connection), triggers a characteristic physiological response, and has conditions under which it resolves.",
              },
              {
                question: "What is the difference between somatic and relational emotions?",
                answer:
                  "Somatic emotions (Fear, Anger, Stress, Anxiety, Disgust, Joy, Happiness, Admiration, Pride) can complete their restoration sequence through the body's own channels — breathing, movement, time, stillness, crying, sleep. Relational emotions (Shame, Guilt, Sadness, Love, Trust, Gratitude, Compassion) cannot complete alone. Their signal content is about belonging or the state of the bond, and the restoration pathway requires relational evidence — the presence of another person providing the co-regulatory signals the body needs.",
              },
              {
                question: "Why can't breathing resolve shame?",
                answer:
                  "Shame is a relational emotion — its signal content is about belonging at risk. The restoration pathway requires relational evidence: another person remaining present without contempt after seeing the thing that feels shameful. That staying is the biological signal the restoration pathway needs. No somatic intervention reaches the relational restoration pathway.",
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
