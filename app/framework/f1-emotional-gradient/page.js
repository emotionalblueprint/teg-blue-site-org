import Link from "next/link";
import dynamic from "next/dynamic";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, PATTERN,
  hexToRgba, RESEARCHER,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, PageLayout, ResearcherHero,
  PropositionBox, ExpandableSection, FrameworkTerms,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  F1SignalDiagram, F1ArchitectureDiagram, F1FullArcDiagram, DiagramToggle,
} from "@/src/components/framework-diagrams";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/src/lib/jsonld";

const F1InstrumentDiagram = dynamic(
  () => import("@/src/components/framework-diagrams/F1InstrumentDiagram"),
  { ssr: false }
);
const F1HingeDiagram = dynamic(
  () => import("@/src/components/framework-diagrams/F1HingeDiagram"),
  { ssr: false }
);
const F1CognitiveUpgradeDiagram = dynamic(
  () => import("@/src/components/framework-diagrams/F1CognitiveUpgradeDiagram"),
  { ssr: false }
);

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Core Propositions", href: "#core-propositions", description: "The six foundational claims the entire F1 framework rests on." },
  { label: "Biological Substrate", href: "#the-signal", description: "The biological systems that produce emotion — neural, endocrine, autonomic, neurochemical." },
  { label: "Compass & Needle", href: "#the-instrument", description: "The compass as a working model: the instrument and how it moves." },
  { label: "Connection & Protection", href: "#connection-protection", description: "The two body-first modes — the nervous system's original configurations." },
  { label: "Biological Restoration", href: "#the-fork", description: "The body's designed process for completing the activation cycle and settling back to Connection." },
  { label: "Control & Domination", href: "#the-cognitive-upgrade", description: "How cognition added two new modes — Control and Domination — to the body's original two." },
  { label: "Gradient & Mode", href: "#the-architecture", description: "How mode position determines what a person can perceive, think, feel, and do." },
  { label: "The Full Arc", href: "#the-full-arc", description: "The complete seven-step sequence laid out in full, with each step mapped to the framework that elaborates it." },
  { label: "What F1 Establishes", href: "#what-f1-establishes", description: "A consolidated reference: every core concept defined, every key formulation stated." },
  { label: "Research Foundations", href: "#research-foundations", description: "The established theories F1 draws from, listed by tradition." },
  { label: "Bridge to F2", href: "#bridge-to-f2", description: "Why Biological Restoration must be learned, not just designed." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Emotions as Biological Information (F1) | TEG-Blue Research",
  description:
    "How the nervous system evaluates safety, how emotions carry that evaluation, how the response organizes across four modes, and how threat states need biological restoration. Framework F1 of 12.",
  keywords: [
    "emotions as biological information",
    "safety-threat orientation",
    "emotional gradient",
    "nervous system regulation",
    "polyvagal theory",
    "autonomic nervous system",
    "regulatory states",
    "four-mode gradient",
    "affective neuroscience",
    "emotional technology",
    "biological restoration",
    "state-dependent capacity",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f1-emotional-gradient",
  },
  openGraph: {
    title: "Emotions as Biological Information — F1 Framework | TEG-Blue",
    description:
      "How the nervous system evaluates safety, how emotions carry that evaluation, how the response organizes across four modes. The foundational framework of the TEG-Blue 12-framework system.",
    url: "https://teg-blue.org/framework/f1-emotional-gradient",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotions as Biological Information — TEG-Blue F1",
    description:
      "How the nervous system orients between safety and threat. The foundational framework behind the TEG-Blue system.",
  },
  other: {
    'citation_title': 'Emotions as Biological Information',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F1EmotionalGradientPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f1-emotional-gradient" />

      <PageLayout
        header={
          <ResearcherHero
            badge="FRAMEWORK F1"
            title="Emotions as Biological Information"
            subtitle="The Safety-Threat Orientation System"
            description="How the nervous system evaluates safety, how emotions carry that evaluation, how the response organizes across four modes, and how threat states need biological restoration. The foundational framework of the TEG-Blue system."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>
          {/* ─── FRAMEWORK ANCHOR ──────────────────────────── */}
          <section
            id="framework-anchor"
            style={{ marginBottom: 48 }}
          >
            <PropositionBox label="ORIGIN" title="Origin of the Inner Compass and the Four-Mode Gradient">
              F1 is where two constructs originate that run through the entire TEG-Blue system: the <strong>Inner Compass</strong> — the nervous system's orientation mechanism — and the <strong>Four-Mode Gradient</strong> — the continuous range of modes it moves through. Both are introduced and explained here for the first time. M1: Inner Compass &amp; Four-Mode Gradient packages them into an applied model.
            </PropositionBox>

            <InnerDivider />

            <FrameworkTerms
              terms={[
                { term: "State", definition: "What the nervous system is doing biologically — below awareness" },
                { term: "The Compass", definition: "The metaphor that makes the orientation mechanism visible and navigable" },
                { term: "The Needle", definition: "Our intuition — the body's felt signal of where the compass is pointing" },
                { term: "The Gradient", definition: "The continuous range the needle moves through — from Connection to Domination" },
                { term: "4-Mode", definition: "The four positions on that gradient — the way the person is operating in this particular moment: Connection Mode (Pattern A), Protection Mode (Pattern B), Control Mode (Pattern C), Domination Mode (Pattern D)" },
              ]}
            />
          </section>

          <SectionDivider />

          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={listItemStyle}>
                  Emotions are the nervous system's signalling language — structured signals about safety, threat, and need
                </li>
                <li style={listItemStyle}>
                  The nervous system continuously evaluates one question: <em>Is there enough safety to engage, or is protection needed?</em>
                </li>
                <li style={listItemStyle}>
                  A fluid compass does not stay in Connection permanently — fluid operation is the ability to move through the gradient and come back
                </li>
                <li style={listItemStyle}>
                  What a person can perceive, think, feel, and do depends on their current regulatory state
                </li>
                <li style={listItemStyle}>
                  The same emotion produces different outcomes depending on where the compass is pointing when it arrives
                </li>
                <li style={listItemStyle}>
                  Biological Restoration cannot be forced. It can only be allowed
                </li>
              </ul>
            </ExpandableSection>
          </div>

          <SectionDivider />

          {/* ─── STATE & EMOTION ──────────────────────────── */}
          <section
            id="the-signal"
            aria-labelledby="heading-the-signal"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-the-signal" style={sectionHeadingStyle}>
              The Biological Substrate of Emotion
            </h2>

            <CycleBox highlight={["Signal Detection", "Neuroception", "Emotion", "Autonomic Response"]} />

            <p style={proseStyle}>
              F1 defines the <strong style={{ color: TEXT.primary }}>complete system</strong>: how the body detects and signals threat, how the compass orients across four modes, how Biological Restoration completes the cycle, and what the full trajectory looks like from signal to social structure. Every concept named here is elaborated across the remaining eleven frameworks.
            </p>
            <p style={{
              ...proseStyle,
              marginBottom: 20,
            }}>
              The complete seven-step arc — from Signal Detection to Escalation or Repair — is mapped in{" "}
              <a href="#the-full-arc" style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}>
                The Full Arc →
              </a>
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Relationship to the Inner Compass Model" type="framework">
                <p style={expandedProseStyle}>
                  F1 provides the depth scientific foundation and introduces the complete four-mode compass in its designed operation. The Inner Compass & Four-Mode Gradient model provides the applied tool — making the same architecture usable across individual, clinical, and research contexts. F1 explains <em>why</em>. The model provides <em>what to use</em>.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Relationship to F2" type="framework">
                <p style={expandedProseStyle}>
                  F1 is the instrument. F2 is the calibration. F1 describes what the compass does — including the complete Biological Restoration process in its designed form. F2 explains how each person's compass gets tuned — through the awareness capacities that develop (or don't) in the relational environment — and what happens when Biological Restoration is never learned.
                </p>
              </ExpandableSection>
            </div>

            <InnerDivider margin="20px 0" />

            {/* Concept 0 */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="biological-substrate" style={conceptHeadingStyle}>
                How the Body Produces an Emotional Signal
              </h3>

              <KeyStatement>
                Emotions are not psychological events that happen to have physical symptoms. They are biological events — produced by specific systems, carried by specific molecules, and resolved through specific physiological processes.
              </KeyStatement>

              <h4 style={subheadingStyle}>What It Is</h4>
              <p style={proseStyle}>
                An emotion <strong style={{ color: TEXT.primary }}>begins before awareness</strong>. The process is distributed across multiple systems working in parallel — not a single brain region generating a feeling, but a <strong style={{ color: TEXT.primary }}>whole-body coordination</strong> between neural, endocrine, and autonomic systems producing a signal the organism can act on.
              </p>

              <h4 style={subheadingStyle}>The neural architecture</h4>
              <p style={proseStyle}>
                The <strong style={{ color: TEXT.primary }}>amygdala</strong> — the brain's primary threat-detection structure — fires within 12 milliseconds of a relevant stimulus, before the cortex has processed what it is. It evaluates incoming signals for threat relevance and initiates the response cascade. The <strong style={{ color: TEXT.primary }}>insula</strong> translates the body's internal state into conscious feeling — it is the bridge between visceral sensation and subjective experience. The <strong style={{ color: TEXT.primary }}>anterior cingulate cortex</strong> integrates emotional and cognitive signals, weighting what to attend to. The <strong style={{ color: TEXT.primary }}>prefrontal cortex</strong> arrives later — capable of modulating the response, but always downstream of the initial evaluation.
              </p>

              <h4 style={subheadingStyle}>The endocrine cascade</h4>
              <p style={proseStyle}>
                When threat is detected, the amygdala activates the <strong style={{ color: TEXT.primary }}>hypothalamic-pituitary-adrenal (HPA) axis</strong>: the hypothalamus signals the pituitary gland, which signals the adrenal glands to release <strong style={{ color: TEXT.primary }}>cortisol</strong> — the primary stress hormone — and <strong style={{ color: TEXT.primary }}>adrenaline (epinephrine)</strong>. These flood the bloodstream within seconds. Cortisol sustains the mobilisation; adrenaline initiates it. Both are necessary for Protection Mode to function. Both must clear for the body to return to baseline.
              </p>

              <h4 style={subheadingStyle}>The autonomic pathway</h4>
              <p style={proseStyle}>
                Simultaneously, the <strong style={{ color: TEXT.primary }}>sympathetic nervous system</strong> activates — accelerating heart rate, dilating airways, tensing muscles, redirecting blood flow to limbs, suppressing digestion. This is the body preparing to act. Running in the opposite direction, the <strong style={{ color: TEXT.primary }}>vagus nerve</strong> — a bidirectional highway between brain and body — carries signals of safety or threat in both directions. When safety is re-established, the <strong style={{ color: TEXT.primary }}>vagal brake</strong> re-engages: heart rate slows, the social engagement system comes back online, the parasympathetic nervous system reasserts dominance.
              </p>

              <h4 style={subheadingStyle}>The neurochemical context</h4>
              <p style={proseStyle}>
                The emotional signal is also shaped by neurotransmitter states. <strong style={{ color: TEXT.primary }}>Serotonin</strong> modulates mood stability and threat sensitivity. <strong style={{ color: TEXT.primary }}>Dopamine</strong> shapes approach motivation and reward anticipation. <strong style={{ color: TEXT.primary }}>Noradrenaline</strong> drives arousal and attention. <strong style={{ color: TEXT.primary }}>Oxytocin</strong> — released through safe social contact — reduces amygdala reactivity and supports co-regulation. These are not background conditions. They are part of the signal.
              </p>

              <h4 style={subheadingStyle}>What this means for F1</h4>
              <p style={proseStyle}>
                Every concept in this framework describes a <strong style={{ color: TEXT.primary }}>biological event</strong>. When Connection broadens perception, it is because the vagal brake is engaged and the prefrontal cortex has access to its full range. When Protection narrows attention, it is because cortisol and adrenaline have reorganised the system for speed, not nuance. When Biological Restoration completes, specific molecules clear, specific systems re-engage, and the body physically returns to its baseline state. The metaphors in this framework are not approximations — they are descriptions of <strong style={{ color: SPECTRUM.cobalt }}>measurable biological processes</strong>.
              </p>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    LeDoux (1996) — amygdala as primary threat-detection structure, subcortical threat pathway. Craig (2009) — insula as the substrate of interoceptive awareness and subjective feeling. Damasio (1994) — somatic markers; emotion as body-state. Porges (2011) — vagus nerve as bidirectional safety/threat signalling pathway; the vagal brake. McEwen (2000) — HPA axis, cortisol, allostatic load. Cannon (1915) — adrenaline and sympathetic activation. Panksepp (1998) — primary emotional systems as neurobiological circuits. Sapolsky (2004) — stress hormones and their behavioural effects. Carter (1998) — oxytocin and social bonding. Berridge & Kringelbach (2015) — dopamine and motivational systems.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    The explicit framing of emotion as a biological event — not a psychological one with biological correlates, but a coordinated multi-system biological process that produces a signal. This positions everything that follows — the compass, the modes, Biological Restoration — as descriptions of measurable physiology, not metaphor. It also prepares the ground for Biological Restoration: if Protection is a specific biological state produced by specific molecules, then returning to baseline requires those specific molecules to clear and those specific systems to re-engage. Restoration is not a concept. It is a biological sequence.
                  </p>
                </ExpandableSection>
              </div>
            </div>

            <hr style={conceptDividerStyle} />

            {/* Concept 1 */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="biological-information" style={conceptHeadingStyle}>
                Emotions as the Nervous System's Signalling Language
              </h3>

              <KeyStatement>
                Emotions are not disruptions to clear thinking. They are the nervous system's signalling language — the medium through which the body's continuous evaluation of safety and threat gets communicated to the rest of the organism.
              </KeyStatement>

              <DiagramToggle label="signal flow diagram" defaultOpen>
                <F1SignalDiagram />
              </DiagramToggle>

              <p style={proseStyle}>
                The nervous system runs a <strong style={{ color: TEXT.primary }}>distributed evaluation process</strong> — across the gut, the heart, the muscles, the vagus nerve, the amygdala — that assesses the environment continuously, below conscious awareness. This evaluation produces a finding: safe enough, or threat. Emotions are how the finding gets delivered. They are the <strong style={{ color: TEXT.primary }}>signal</strong> that carries the evaluation from the body's detection systems to the organism's response systems.
              </p>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>Fear</strong> is the nervous system's signal that its evaluation found threat. <strong style={{ color: TEXT.primary }}>Joy</strong> is the signal that the evaluation found safety and connection. <strong style={{ color: TEXT.primary }}>Anger</strong> signals that a boundary has been crossed. Each emotion carries <strong style={{ color: TEXT.primary }}>specific information</strong> about what the evaluation detected — and each orients the organism toward a specific response.
              </p>
              <p style={proseStyle}>
                This is the <strong style={{ color: SPECTRUM.cobalt }}>body's first language</strong>. It was running for millions of years before cognition evolved. When cognition arrived, it did not replace this language — it <strong style={{ color: TEXT.primary }}>added a second one</strong>. The two systems — emotional signalling and cognitive reasoning — are separate but interdependent. Cognition can interpret emotional signals, override them, or replace them with its own narratives. But the emotional signals do not stop being generated. <strong style={{ color: TEXT.primary }}>The body keeps talking whether cognition listens or not</strong> — <Link href="/model/m3-the-open-cycle" style={{ color: SPECTRUM.indigo, textDecoration: "none", fontWeight: 500 }}>the cycle stays open</Link>.
              </p>
              <p style={proseStyle}>
                This shifts the foundational stance from "emotion regulation" (implying emotions need controlling) to "signal interpretation" (implying emotions carry information that needs reading). The question is not "how do I manage this emotion?" but <strong style={{ color: TEXT.primary }}>"what is this signal telling me?"</strong>
              </p>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    <strong>Emotions as functional signals:</strong> Frijda (1986) — action readiness; Ekman (1992) — basic emotions as functional responses; Plutchik (1980) — emotions relate to survival conditions. <strong>Affect-as-information:</strong> Schwarz & Clore (1983); Damasio (1994) — somatic markers guide decision-making. <strong>Evolutionary primacy:</strong> LeDoux (1996) — amygdala responds before cortex; Panksepp (1998) — primary emotional systems are ancient. <strong>Interoception:</strong> Craig (2009) — the body's internal signalling system. <strong>Distributed processing:</strong> Porges (2011) — the vagus nerve as a bidirectional communication pathway.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    F1 positions emotions explicitly as the <em>signalling language</em> of the nervous system — not just "information" in the abstract, but the specific medium through which the body's evaluation reaches the organism. The framing as "language" carries specific implications: a language can be listened to or ignored, interpreted accurately or misread, spoken fluently or suppressed. When cognition overrides the emotional signal (F3), it is not correcting an error — it is silencing one language and replacing it with another.
                  </p>
                </ExpandableSection>
              </div>
            </div>

            <hr style={conceptDividerStyle} />

            {/* Concept 2 */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="safety-orientation" style={conceptHeadingStyle}>
                The Safety Orientation Question
              </h3>

              <p style={proseStyle}>
                Concept 1 establishes that emotions are the signalling language through which the nervous system delivers its evaluation. Concept 2 identifies the question that evaluation is answering.
              </p>

              <KeyStatement>
                The nervous system continuously evaluates one question: "Is there enough safety to engage, or is protection needed?" Every emotional signal the body generates is an answer to this question.
              </KeyStatement>

              <p style={proseStyle}>
                This evaluation is <strong style={{ color: TEXT.primary }}>automatic, continuous, and below conscious awareness</strong>. It determines whether learning is possible or defense is required, whether trust is available or verification is needed, whether vulnerability is safe or control is necessary.
              </p>
              <p style={proseStyle}>
                The evaluation assesses <strong style={{ color: SPECTRUM.cobalt }}><em>experienced safety</em></strong>, not objective danger — which is why a person can feel threatened in an objectively safe room, or feel safe in an objectively dangerous situation. The compass reads what the nervous system has <strong style={{ color: TEXT.primary }}>learned to recognize</strong> as safe or threatening, which may not match current reality. This is not a flaw. It is a <strong style={{ color: TEXT.primary }}>design feature optimized for survival</strong>.
              </p>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    Porges (2011) — neuroception evaluates safety/threat continuously. Bowlby (1969) — attachment system scans for safety/threat. Maslow (1943) — safety as foundational need. Siegel (2012) — safety enables integration and development.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    Distilling the entire evaluation-and-signalling process to one clear question that explains why different responses occur. The framework positions the safety question as the single question that generates all emotional diversity — from empathy to defensiveness, from curiosity to withdrawal. Every emotion is a variation on: <em>safe enough, or not yet.</em>
                  </p>
                </ExpandableSection>
              </div>
            </div>

            <hr style={conceptDividerStyle} />

            {/* Concept 3 */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="cross-theoretical-convergence" style={conceptHeadingStyle}>
                Cross-Theoretical Convergence
              </h3>

              <p style={proseStyle}>
                The two-mode orientation between Connection and Protection has been <strong style={{ color: TEXT.primary }}>independently identified across six research traditions</strong>. Each describes the <strong style={{ color: SPECTRUM.cobalt }}>same fundamental mechanism</strong> from a different angle:
              </p>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Tradition</th>
                      <th style={thStyle}>Key Researcher(s)</th>
                      <th style={thStyle}>How It Describes the Orientation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={["Polyvagal Theory", "Porges", "Autonomic states"]} />
                    <TableRow cells={["Motivational Science", "Gray, Carver & Scheier", "Approach / avoidance"]} />
                    <TableRow cells={["Positive Psychology", "Fredrickson", "Broaden-and-build vs. narrow-and-defend"]} />
                    <TableRow cells={["Trauma Theory", "Siegel, Ogden", "Window of tolerance"]} />
                    <TableRow cells={["Attachment Theory", "Bowlby", "Secure base vs. threat activation"]} />
                    <TableRow cells={["Trauma Research", "Walker, van der Kolk", "Fight-flight-freeze-fawn"]} />
                  </tbody>
                </table>
              </div>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  While these traditions exist independently, to our knowledge, no existing work maps them systematically against each other to show they describe the same mechanism. F1's contribution is integration: making visible that polyvagal states, approach/avoidance, broaden-and-build, window of tolerance, secure base, and fight-flight-freeze-fawn are all describing the same two-mode orientation.
                </p>
              </ExpandableSection>
            </div>
          </section>

          <SectionDivider />

          {/* ─── PART 2: THE INSTRUMENT ──────────────────── */}
          <section
            id="the-instrument"
            aria-labelledby="heading-the-instrument"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-the-instrument" style={sectionHeadingStyle}>
              The Compass & The Needle — The Instrument and How It Moves
            </h2>

            <CycleBox highlight={["Mode Activation"]} />

            {/* Concept 4 */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="inner-compass" style={conceptHeadingStyle}>
                The Inner Compass
              </h3>

              <KeyStatement>
                A fluid compass does not stay pointed at safety permanently. Fluid operation is the needle moving — responding to threat when it appears, and coming back when it passes.
              </KeyStatement>

              <DiagramToggle label="compass diagram" defaultOpen>
                <F1InstrumentDiagram />
              </DiagramToggle>

              <p style={proseStyle}>
                The nervous system's continuous orientation between safety and threat can be understood through the metaphor of a compass. Like a fluid working compass, the needle is <strong style={{ color: SPECTRUM.cobalt }}>constantly moving</strong>. It does not have a "correct" position — it points in a direction. A fluid compass moves between safety and threat as conditions change. It shifts toward threat when danger is perceived and <strong style={{ color: TEXT.primary }}>returns toward safety when the threat passes</strong>.
              </p>
              <p style={proseStyle}>
                These two poles map directly to what the human nervous system has always done. <strong style={{ color: TEXT.primary }}>Feeling safe</strong> is belonging to the community — gathering, caring, cooperating, relating. <strong style={{ color: TEXT.primary }}>Feeling threatened</strong> is defending yourself and feeding yourself — fighting, fleeing, hunting, surviving. These are the two fundamental orientations that the nervous system has been navigating for hundreds of thousands of years. What happens at each pole — the specific configurations the system enters — is described in the next section: Connection Mode and Protection Mode.
              </p>
              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    Porges (2011) — autonomic states as continuous orientation. Bowlby (1969) — attachment system as safety-seeking orientation. Fredrickson (2001) — broaden-and-build as directional state. Siegel (2012) — window of tolerance as range of fluid movement. Ogden (2006) — sensorimotor psychotherapy, tracking body-level orientation.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    The compass as a visual-conceptual tool that makes the safety-threat orientation tangible and clinically usable. Most models describe states. The compass describes <em>movement between states</em> — and makes the question "where is the needle, and can it move?" clinically actionable rather than "which state is the person in." The compass reframes the diagnostic question — from state to capacity: not where the needle is, but whether it can move.
                  </p>
                </ExpandableSection>
              </div>
            </div>

            <hr style={conceptDividerStyle} />

            {/* Concept 5 */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="how-the-compass-moves" style={conceptHeadingStyle}>
                How the Compass Moves
              </h3>

              <p style={proseStyle}>
                The compass needle moves through a five-step sequence that typically completes before conscious awareness begins:
              </p>

              <ol style={orderedListStyle}>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Signal Detection</strong> — exteroceptive, interoceptive, and memory-based signals arrive continuously
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Neuroception</strong> — the nervous system evaluates: safe, dangerous, or life-threatening? Based on pattern-matching from past experience, not objective analysis
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Emotion</strong> — the evaluation generates its <em>affective signal</em>. In this framework, Emotion means the felt meaning of the safety-threat evaluation (distinct from the autonomic mobilization that follows). Each emotion carries specific information about what the system detected and orients the organism toward a response
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Autonomic Response</strong> — cardiovascular, respiratory, muscular, hormonal, and attentional preparation occurs before conscious awareness
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Mode Activation</strong> — the system organizes into a safety or threat configuration
                </li>
              </ol>

              <p style={proseStyle}>
                By the time conscious awareness registers "an emotion," the system has <strong style={{ color: TEXT.primary }}>already acted</strong>. The compass needle has <strong style={{ color: TEXT.primary }}>already moved</strong>. A neutral text arrives. Your system pattern-matches past abandonment. Neuroception flags threat. Emotion signals fear. Protection mobilizes. Your mind then explains the feeling as "they don't care." If restoration completes, you regain nuance and can check reality. If it doesn't, the interpretation <strong style={{ color: TEXT.primary }}>hardens into identity and relationship strategy</strong>. The system is fast by design — evolution solved the survival question by building an embodied evaluation system that orients the organism before conscious awareness begins. The system operates in milliseconds, uses pattern-matching, and prioritizes speed over precision. This is a design feature, not a flaw.
              </p>
              <p style={proseStyle}>
                The cost of speed: the system can orient to learned patterns rather than current reality. When the system responds to a pattern from the past as though it is happening now, the person is not "overreacting." The compass is working exactly as designed — it just learned its patterns in conditions that no longer apply. <strong style={{ color: TEXT.primary }}>The problem is never the mechanism. The problem is what the mechanism learned.</strong>
              </p>

              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Porges (2011) — continuous scanning, neuroception; Craig (2009) — interoception; LeDoux (1996) — threat detection before conscious processing; Barrett (2017) — predictive processing; Frijda (1986) — emotion as action readiness; Damasio (1994) — somatic markers; Panksepp (1998) — primary emotional systems; Cannon (1915) — autonomic preparation; Fredrickson (2001), Siegel (2012) — states organize perception and behavior.
                </p>
              </ExpandableSection>
            </div>

          </section>

          <SectionDivider />

          {/* ─── PART 3: CONNECTION & PROTECTION ─────────── */}
          <section
            id="connection-protection"
            aria-labelledby="heading-connection-protection"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-connection-protection" style={sectionHeadingStyle}>
              Connection & Protection — The Two Body-First Modes
            </h2>

            <CycleBox highlight={["Mode Activation", "Threat Response"]} />

            {/* Concept 6 */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="connection-and-protection" style={conceptHeadingStyle}>
                Connection and Protection
              </h3>

              <p style={proseStyle}>
                Connection and Protection are the <strong style={{ color: SPECTRUM.cobalt }}>two fundamental configurations</strong> of the nervous system — not as binary states, but as the two poles the compass needle orients between. These are the <strong style={{ color: TEXT.primary }}>body-first modes</strong>: they happen <em>to</em> you. They have been running for millions of years before cognition evolved.
              </p>

              <div
                style={{
                  padding: 20,
                  background: hexToRgba(PATTERN.A.primary, 0.06),
                  borderRadius: 8,
                  border: `1px solid ${hexToRgba(PATTERN.A.primary, 0.2)}`,
                  marginBottom: 16,
                }}
              >
                <h4 style={{ fontSize: 15, fontWeight: 600, color: PATTERN.A.primary, marginBottom: 8 }}>
                  Connection Mode — System's Home Base <span style={{ fontSize: 12, color: TEXT.muted, fontWeight: 400 }}>(Ventral Vagal Dominant)</span>
                </h4>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                  The system's home base — the only mode designed for sustained living. When sufficient safety is perceived, perception broadens, the full empathy set comes online, cognitive flexibility increases, repair becomes possible, and learning capacity opens. Connection is not "calm." It is the state where the system has sufficient safety resources to engage with challenge, complexity, and even distress without the nervous system treating them as threats. A person in Connection can grieve, argue, problem-solve, and sit with discomfort.
                </p>
              </div>

              <div
                style={{
                  padding: 20,
                  background: hexToRgba(PATTERN.B.primary, 0.06),
                  borderRadius: 8,
                  border: `1px solid ${hexToRgba(PATTERN.B.primary, 0.2)}`,
                  marginBottom: 16,
                }}
              >
                <h4 style={{ fontSize: 15, fontWeight: 600, color: PATTERN.B.primary, marginBottom: 8 }}>
                  Protection Mode — The System on Emergency Fuel <span style={{ fontSize: 12, color: TEXT.muted, fontWeight: 400 }}>(Sympathetic/Dorsal Dominant)</span>
                </h4>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 12 }}>
                  The system on emergency fuel — designed to last from a few minutes to a few hours, maximum days. When threat is perceived, the entire system mobilizes: attention narrows toward threat, emotions amplify, and the capacity to feel with others is filtered to survival-relevant data.
                </p>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: TEXT.primary }}>Fight, flight first</strong> — the system's primary threat responses, active and energized. <strong style={{ color: TEXT.primary }}>Freeze, fawn when energy depletes</strong> — the body's fallback when active responses are unavailable. Not weakness — the system conserving resources when it cannot fight or flee.
                </p>
              </div>

              <p style={proseStyle}>
                Neither mode is "better." Protection is <strong style={{ color: TEXT.primary }}>intelligent design for genuine threat</strong>. The question is always whether the current mode is <strong style={{ color: TEXT.primary }}>proportionate to actual present conditions</strong> — and whether the system can come back.
              </p>

              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Porges (2011) — three autonomic states, social engagement system, vagal brake. Cannon (1915) — fight/flight response. Walker (2013), van der Kolk (2014) — fight/flight/freeze/fawn as body-level threat responses. Fredrickson (2001) — broaden-and-build theory. Siegel (2012) — window of tolerance. Sapolsky (2004) — stress response designed for acute activation. McEwen (2000) — allostatic load.
                </p>
              </ExpandableSection>

              <Link
                href="/model/m1-inner-compass"
                style={{
                  display: "block",
                  padding: "16px 20px",
                  margin: "16px 0 0",
                  background: hexToRgba(SPECTRUM.azure, 0.06),
                  border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: FONT.mono, color: SPECTRUM.azure, marginBottom: 6 }}>
                  M1 &middot; The applied model for this
                </div>
                <div style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, marginBottom: 8 }}>
                  M1: The Inner Compass turns everything described here into a usable instrument — the four modes on a single gradient, the stuck-versus-fluid distinction, and what each position enables and restricts.
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: SPECTRUM.azure }}>
                  Read the model &rarr;
                </div>
              </Link>
            </div>
          </section>

          <SectionDivider />

          {/* ─── PART 4: THE FORK ────────────────────────── */}
          <section
            id="the-fork"
            aria-labelledby="heading-the-fork"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-the-fork" style={sectionHeadingStyle}>
              Biological Restoration
            </h2>

            <CycleBox highlight={["Biological Restoration", "Connection"]} />

            {/* Concept 7 */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="biological-restoration" style={conceptHeadingStyle}>
                The Body's Designed Completion
              </h3>

              <KeyStatement>
                Biological Restoration cannot be forced. It can only be allowed. It is not a skill, not a technique, not something the person does — it is what the body does when conditions allow.
              </KeyStatement>

              <DiagramToggle label="restoration diagram" defaultOpen>
                <F1HingeDiagram />
              </DiagramToggle>

              <p style={proseStyle}>
                By <em>forced</em>, this means top-down suppression — overriding activation so it <em>looks</em> calm while the body remains loaded. Biological Restoration can be <strong style={{ color: TEXT.primary }}>supported</strong> (through safety, time, breath, movement, warmth, connection). But it cannot be commanded into completion by cognition.
              </p>

              <p style={proseStyle}>
                This is the mechanism on which the entire twelve-framework system turns. When the nervous system mobilizes for threat — when Protection activates, when the heart accelerates, when hormones flood, when muscles brace — all of this was designed to be temporary. The body was built to complete the cycle: mobilise, respond, and restore. <strong style={{ color: TEXT.primary }}>Biological Restoration is the body's designed process for completing the activation cycle and settling back to Connection.</strong>
              </p>
              <p style={proseStyle}>
                The activation that was mobilized must <strong style={{ color: TEXT.primary }}>discharge</strong>. The breath that accelerated must <strong style={{ color: TEXT.primary }}>slow</strong>. The muscles that braced must <strong style={{ color: TEXT.primary }}>release</strong>. The hormones that flooded must <strong style={{ color: TEXT.primary }}>clear</strong>. The body does not reason its way back to Connection. It restores through the <strong style={{ color: SPECTRUM.cobalt }}>same somatic channels it departed through</strong>.
              </p>
              <p style={proseStyle}>
                Biological Restoration is <strong style={{ color: TEXT.primary }}>closer to digestion than to exercise</strong>. You do not digest by trying harder. You digest because the system runs when it is not blocked. The body restores when conditions allow — when there is sufficient safety, when the activation is allowed to complete, when no one is interrupting the process with instructions to calm down.
              </p>

              <h4 style={subheadingStyle}>The biological sequence of restoration</h4>
              <p style={proseStyle}>
                Biological Restoration is not metaphorical. It is a specific sequence of physiological events that returns the body from its mobilised state to its baseline:
              </p>
              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>System</th>
                      <th style={thStyle}>What Happens During Restoration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={[
                      "Vagal brake",
                      "Re-engages — slowing heart rate, signalling safety to the autonomic system, bringing the social engagement system back online",
                    ]} />
                    <TableRow cells={[
                      "HPA axis",
                      "Down-regulates — the hypothalamus reduces cortisol signalling; cortisol levels fall over 20–60 minutes as the molecule clears the bloodstream",
                    ]} />
                    <TableRow cells={[
                      "Adrenaline",
                      "Clears rapidly — half-life of approximately 2–3 minutes in the bloodstream; the acute mobilisation phase resolves quickly when the system is allowed to complete",
                    ]} />
                    <TableRow cells={[
                      "Sympathetic nervous system",
                      "Stands down — heart rate decreases, airways narrow back to resting diameter, blood flow redistributes from limbs back to organs",
                    ]} />
                    <TableRow cells={[
                      "Parasympathetic nervous system",
                      "Reasserts dominance — digestion resumes, immune function normalises, the body's maintenance systems come back online",
                    ]} />
                    <TableRow cells={[
                      "Muscle tension",
                      "Releases — the bracing that mobilised for action discharges through movement, trembling, or simply settling",
                    ]} />
                    <TableRow cells={[
                      "Respiratory rate",
                      "Slows — extended exhalation directly activates the vagal brake, making breath the most immediately accessible restoration pathway",
                    ]} />
                    <TableRow cells={[
                      "Neurotransmitter baseline",
                      "Restores — serotonin, dopamine, and noradrenaline return to resting states as the acute demand resolves",
                    ]} />
                  </tbody>
                </table>
              </div>

              <p style={proseStyle}>
                This sequence takes time. Adrenaline clears in minutes; cortisol takes longer. This is why the body cannot be rushed back to baseline by an act of will. The molecules must clear. The systems must re-engage in sequence. <strong style={{ color: TEXT.primary }}>Biological Restoration cannot be forced because it is a physiological process — not a decision.</strong>
              </p>
              <p style={proseStyle}>
                When the cycle is interrupted before completion — by cognitive override, by environmental pressure to appear calm, by the absence of safety conditions — the hormones remain partially elevated, the autonomic system remains partially mobilised, and the body carries the unresolved activation forward. This is the <Link href="/model/m3-the-open-cycle" style={{ color: SPECTRUM.indigo, textDecoration: "none", fontWeight: 500 }}>open cycle (M3)</Link>.
              </p>

              <Link
                href="/model/m3-the-open-cycle"
                style={{
                  display: "block",
                  padding: "16px 20px",
                  margin: "0 0 24px",
                  background: hexToRgba(SPECTRUM.indigo, 0.06),
                  border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.15)}`,
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: FONT.mono, color: SPECTRUM.indigo, marginBottom: 6 }}>
                  M3 &middot; The physiology beneath this
                </div>
                <div style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, marginBottom: 8 }}>
                  M3: The Biology of Unfinished Emotion traces the exact biological sequence — what happens step by step when the body completes, and what happens when cognition overrides it instead.
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: SPECTRUM.indigo }}>
                  Read the biology &rarr;
                </div>
              </Link>

              <h4 style={subheadingStyle}>Restoration Pathways</h4>
              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Pathway</th>
                      <th style={thStyle}>How It Works</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={[
                      "Breathing",
                      "Slow exhalation activates the vagal brake, signalling safety to the autonomic system. The body reads its own breath as a safety cue.",
                    ]} />
                    <TableRow cells={[
                      "Grounding",
                      "Sensory contact with the present environment helps the system recalibrate from the threat that was to the reality that is.",
                    ]} />
                    <TableRow cells={[
                      "Co-regulation",
                      "Another person's regulated nervous system sending safety signals through tone, touch, rhythm, presence. The most powerful pathway — and the one through which the capacity for Biological Restoration is originally learned.",
                    ]} />
                    <TableRow cells={[
                      "Time",
                      "The body completing the activation cycle when given space to do so without interruption.",
                    ]} />
                  </tbody>
                </table>
              </div>
              <p style={proseStyle}>
                These are <strong style={{ color: TEXT.primary }}>not therapeutic techniques</strong>. They are the pathways the nervous system was designed to use.
              </p>
            </div>

            <hr style={conceptDividerStyle} />

            <div style={{ marginBottom: 32 }}>
              <h3 id="somatic-vs-relational" style={conceptHeadingStyle}>
                Somatic vs. Relational Restoration
              </h3>

              <KeyStatement>
                Some emotions can't complete through physiology alone — because their content is about belonging.
              </KeyStatement>

              <p style={proseStyle}>
                Not all activations complete through the same channels. <strong style={{ color: TEXT.primary }}>Somatic restoration</strong> is the body completing the cycle through its own channels — activations whose content is about the body's own state, such as a boundary crossed or a physical threat perceived. Breathing, grounding, and time are sufficient. The body can do this alone when conditions allow.
              </p>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>Relational restoration</strong> addresses emotions whose content is about belonging — shame, guilt, fear of rejection, fear of abandonment. Their signal is not "something happened to me." Their signal is "something is wrong with me in relation to you." These emotions often don't resolve just because the body discharges energy. The nervous system is waiting for relational evidence: a sign that belonging is intact, that the bond can hold, that repair is possible.
              </p>
              <p style={proseStyle}>
                Breath and grounding can reduce intensity — they can help a person stay present — but they rarely provide the specific evidence these emotions are asking for. <strong style={{ color: TEXT.primary }}>Shame softens when someone stays connected without contempt.</strong> <strong style={{ color: TEXT.primary }}>Guilt settles when there is repair and the bond survives.</strong> <strong style={{ color: TEXT.primary }}>Fear of rejection calms when the nervous system receives evidence of continued belonging.</strong>
              </p>
              <p style={proseStyle}>
                Over time, humans can <strong style={{ color: TEXT.primary }}>internalize co-regulation</strong> — learning to offer themselves a form of steady presence — but the original pathway is relational, and many people can't access an internal version until they've experienced it externally. This is not weakness. It is <strong style={{ color: TEXT.primary }}>social biology</strong>: the nervous system developed in relationship, and some signals require relationship to complete.
              </p>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Activation Type</th>
                      <th style={thStyle}>Content</th>
                      <th style={thStyle}>Completion Pathway</th>
                      <th style={thStyle}>Can Complete Alone?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={[
                      "Somatic",
                      "About the body's state — threat, boundary, startle, energy",
                      "Breathing, grounding, time, or co-regulation",
                      "Yes — when conditions allow",
                    ]} />
                    <TableRow cells={[
                      "Relational",
                      "About belonging — shame, guilt, rejection, abandonment",
                      "Co-regulation only — another person staying",
                      "No — requires relational evidence",
                    ]} />
                  </tbody>
                </table>
              </div>

              <p style={proseStyle}>
                The complete cycle:
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontFamily: FONT.mono,
                  color: TEXT.muted,
                  padding: "12px 16px",
                  background: hexToRgba(SPECTRUM.cobalt, 0.08),
                  borderRadius: 6,
                  marginBottom: 16,
                  textAlign: "center",
                  lineHeight: 1.6,
                }}
              >
                Signal Detection → Neuroception → Emotion → Autonomic Response → Mode Activation → Threat Response → <strong style={{ color: SPECTRUM.cobalt }}>Biological Restoration</strong> → Connection
              </p>
              <p style={proseStyle}>
                Fluid operation is not the absence of Protection. It is the <strong style={{ color: TEXT.primary }}>full cycle</strong> — the ability to move into threat response when needed and come back when the threat has passed. <strong style={{ color: TEXT.primary }}>Biological Restoration is the mechanism of coming back.</strong>
              </p>

              <h4 style={subheadingStyle}>Biological Restoration across the Full Gradient</h4>
              <p style={proseStyle}>
                The restoration applies across all four modes. In a fluid compass:
              </p>
              <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
                <li style={listItemStyle}>
                  The restoration from <strong style={{ color: TEXT.primary }}>Protection</strong> is somatic — the body completing the activation cycle. The energy that was mobilized discharges. The system settles.
                </li>
                <li style={listItemStyle}>
                  The restoration from <strong style={{ color: TEXT.primary }}>Control</strong> is cognitive and somatic — cognition standing down and the body releasing the strategic activation. The mind stops managing and the body resolves.
                </li>
                <li style={listItemStyle}>
                  The restoration from <strong style={{ color: TEXT.primary }}>Domination</strong> is the most costly — the person must re-engage resonance that was deliberately dropped, process the weight of what they did, and allow the body's full activation to discharge. In a fluid compass, this cost is felt and processed.
                </li>
              </ul>
              <p style={proseStyle}>
                In each case, the mechanism is the same: the system <strong style={{ color: TEXT.primary }}>completing the cycle and coming back</strong>. The difference is the depth of the activation that must resolve. <strong style={{ color: TEXT.primary }}>The deeper the compass moves along the gradient, the more the restoration costs</strong> — and the more the system needs to complete. When it does not, <Link href="/model/m3-the-open-cycle" style={{ color: SPECTRUM.indigo, textDecoration: "none", fontWeight: 500 }}>the cycle stays open</Link>.
              </p>

              <ExpandableSection title="A Note on 'Regulation'" type="framework">
                <p style={expandedProseStyle}>
                  What is commonly called "regulation" encompasses two fundamentally different processes. The first is Biological Restoration — the body completing its own activation cycle and settling back to its designed state. This is a biological process that cannot be forced, does not require cognition, and is cost-free. The second is cognitive management — cognition overriding, suppressing, or controlling the body's emotional signals to produce a state of apparent calm. This is effortful, comes at the cost of emotional truth, and is precisely what F3 describes as false coherence — while the body continues running what M3 calls <Link href="/model/m3-the-open-cycle" style={{ color: SPECTRUM.indigo, textDecoration: "none", fontWeight: 500 }}>the open cycle</Link> underneath.
                </p>
                <p style={expandedProseStyle}>
                  The cultural understanding of "regulation" overwhelmingly refers to the second process — manage your feelings, calm down, control yourself. This framing treats the body's signals as problems to be managed rather than processes to be completed. TEG-Blue uses "Biological Restoration" to distinguish the body's designed process from the cultural misunderstanding.
                </p>
              </ExpandableSection>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    Porges (2011) — ventral vagal system, co-regulation, vagal brake. Levine (1997) — Somatic Experiencing, trauma as incomplete threat response. Siegel (2012) — integration, window of tolerance. Schore (2003) — right-brain regulation through early relational experience. Van der Kolk (2014) — the body keeps the score. Dana (2018) — polyvagal exercises. Sapolsky (2004) — stress response designed for acute activation.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    The naming of Biological Restoration as the body's designed completion process — distinguishing it from cognitive management and from the cultural misunderstanding of "regulation." The positioning as the central mechanism of the entire twelve-framework system: the mechanism whose presence or absence determines everything that follows. The distinction between somatic and relational restoration — recognising that relational emotions can only complete through another nervous system providing relational evidence.
                  </p>
                </ExpandableSection>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* ─── PART 5: CONTROL & DOMINATION ──────────────── */}
          <section
            id="the-cognitive-upgrade"
            aria-labelledby="heading-cognitive-upgrade"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-cognitive-upgrade" style={sectionHeadingStyle}>
              Control & Domination — The Cognitive Modes
            </h2>

            <CycleBox highlight={["Threat Response"]} />

            <div style={{ marginBottom: 32 }}>
              <h3 id="control-and-domination" style={conceptHeadingStyle}>
                Control and Domination
              </h3>

              <DiagramToggle label="four-mode gradient diagram" defaultOpen>
                <F1CognitiveUpgradeDiagram />
              </DiagramToggle>

              <p style={proseStyle}>
                For millions of years, the body had two modes — Connection and Protection — and the restoration process between them was sufficient. Then <strong style={{ color: SPECTRUM.cobalt }}>cognition evolved</strong>. And the compass gained range.
              </p>
              <p style={proseStyle}>
                When body-level responses are not enough — when the threat is too complex, too sustained, or too strategic for fight/flight/freeze/fawn to resolve, and when Biological Restoration has not resolved the activation — the system recruits the next tool available: cognition. Two additional modes emerge where cognition is not just present but <em>steering</em>. This is not pathology. It is an upgrade — the most sophisticated survival tool the species ever developed. In a <strong style={{ color: TEXT.primary }}>fluid compass</strong>, these modes can be time-limited: entered with awareness, used proportionally, and exited when the situation resolves. But when restoration capacity is missing — when activation never fully completes — when <Link href="/model/m3-the-open-cycle" style={{ color: SPECTRUM.indigo, textDecoration: "none", fontWeight: 500 }}>the cycle stays open</Link> — cognition-first strategies can become compulsive. What looks like "choice" may be the only available pathway to regain control.
              </p>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>The architectural break:</strong> Connection and Protection are body-first — they happen <em>to</em> you. Control and Domination are cognition-first — they are what cognition <em>does</em> when recruited into the threat response. This is a qualitative distinction, not just a quantitative one. The first two modes are biological responses that the nervous system has been running for millions of years. The second two require cognition to exist and are often entered through cognitive strategy — sometimes conscious, sometimes automatic.
              </p>

              <div
                style={{
                  padding: 20,
                  background: hexToRgba(PATTERN.C.primary, 0.06),
                  borderRadius: 8,
                  border: `1px solid ${hexToRgba(PATTERN.C.primary, 0.2)}`,
                  marginBottom: 16,
                }}
              >
                <h4 style={{ fontSize: 15, fontWeight: 600, color: PATTERN.C.primary, marginBottom: 8 }}>
                  Control Mode — Pattern C <span style={{ fontSize: 12, color: TEXT.muted, fontWeight: 400 }}>Instability → Strategy (time-limited)</span>
                </h4>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>
                  The system registers that Protection is not enough. The situation requires structure, coordination, or strategic action under pressure. Control appears briefly when it is needed — it is entered deliberately and consciously.
                </p>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>
                  The sequence is strategic: <strong style={{ color: TEXT.primary }}>Anticipate → Manage → Override.</strong> Assess the situation, organize the response, override what needs overriding. This is conscious and time-limited. When the situation resolves, cognition stands down. The compass moves back. Control was a tool. It was used. It was released.
                </p>
                <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                  Evolutionary basis: Cognition solving survival problems the body alone could not — coordinating hunts, planning migration, managing group dynamics, navigating complex social hierarchies.
                </p>
              </div>

              <p style={proseStyle}>
                A key distinction inside these cognition-first modes is <strong style={{ color: TEXT.primary }}>proportionality and accountability</strong>: strategy can be used to protect life and boundaries without dehumanizing others. Domination begins when the system shifts from self-protection to override, where the other person's reality, needs, or rights stop mattering.
              </p>

              <div
                style={{
                  padding: 20,
                  background: hexToRgba(PATTERN.D.primary, 0.06),
                  borderRadius: 8,
                  border: `1px solid ${hexToRgba(PATTERN.D.primary, 0.2)}`,
                  marginBottom: 16,
                }}
              >
                <h4 style={{ fontSize: 15, fontWeight: 600, color: PATTERN.D.primary, marginBottom: 8 }}>
                  Domination Mode — Pattern D <span style={{ fontSize: 12, color: TEXT.muted, fontWeight: 400 }}>Power = Safety → Dominance (time-limited)</span>
                </h4>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>
                  The most extreme response — used only when immediate control is required to prevent harm. This mode is rare and time-limited in a fluid compass. The person enters it deliberately, knowing exactly what they are doing. Emotional Resonance has dropped to near-zero — and the person chose to let it drop because the situation demanded decisive, unambiguous action.
                </p>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>
                  The sequence is final: <strong style={{ color: TEXT.primary }}>Override → Eliminate → Secure.</strong> Override the obstacle, eliminate the threat, secure what matters. When the situation resolves, the person exits. The compass moves back. Emotional Resonance returns. The person may feel the weight of what they did — the cost of having suspended resonance. In a fluid compass, this is felt and processed. Biological Restoration happens — though the restoration from Domination costs more than from any other mode.
                </p>
                <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                  Evolutionary basis: Situations requiring the capacity to act without empathic constraint — protecting offspring from a predator, defending the group against existential threat, making triage decisions where not everyone can be saved.
                </p>
              </div>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Mode</th>
                      <th style={thStyle}>Type</th>
                      <th style={thStyle}>Activation</th>
                      <th style={thStyle}>Sequence</th>
                      <th style={thStyle}>Design Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={[
                      "Connection (Pattern A)", "Body-first", "Automatic — safety perceived",
                      "Engage, relate, repair, learn", "Indefinite — the home base",
                    ]} />
                    <TableRow cells={[
                      "Protection (Pattern B)", "Body-first", "Automatic — threat perceived",
                      "Fight/flight → freeze/fawn", "Minutes to hours",
                    ]} />
                    <TableRow cells={[
                      "Control (Pattern C)", "Cognition-first", "Deliberate — cognition recruited",
                      "Anticipate → Manage → Override", "Time-limited — tool",
                    ]} />
                    <TableRow cells={[
                      "Domination (Pattern D)", "Cognition-first", "Deliberate — cognition at maximum",
                      "Override → Eliminate → Secure", "Rare — last resort",
                    ]} />
                  </tbody>
                </table>
              </div>

              <p style={proseStyle}>
                In a fluid compass, all four modes are available, all are time-limited (except Connection, which is the home base), and all are returnable — through Biological Restoration. The needle can go anywhere it needs to go — and come back. <strong style={{ color: TEXT.primary }}>The goal is not to eliminate Control or Domination — the goal is to restore the capacity for Biological Restoration</strong> so the person can use these modes when needed and come back when done, rather than living in them permanently. What makes them chronic is not the modes themselves — it is the developmental conditions that prevented Biological Restoration from ever being learned. That is the subject of F2.
              </p>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    Porges (2011) — hierarchical autonomic responses. Siegel (2012) — integration of cognitive and emotional processing. Evolutionary psychology — cognition evolved to solve survival problems body-level responses alone could not. Sapolsky (2004) — stress response and strategic planning. LeDoux (1996) — cognitive appraisal interacting with emotional circuits.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    The explicit naming of Control and Domination as <em>cognitive</em> modes — distinct from Connection and Protection not just in intensity but in kind. The evolutionary framing: the body had two modes for millions of years; cognition added two more. The presentation of fluid-compass Control and Domination <em>before</em> their chronic versions. Most clinical frameworks encounter these modes only as problems. F1 introduces them as adaptive, time-limited, and extraordinary survival tools.
                  </p>
                </ExpandableSection>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* ─── PART 6: THE GRADIENT & MODE ─────────────── */}
          <section
            id="the-architecture"
            aria-labelledby="heading-the-architecture"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-the-architecture" style={sectionHeadingStyle}>
              The Gradient & Mode — How the Compass Reads
            </h2>

            <CycleBox highlight={["Mode Activation"]} />

            {/* Concept 9 */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="the-gradient" style={conceptHeadingStyle}>
                The Gradient
              </h3>

              <DiagramToggle label="capacity dimensions diagram" defaultOpen>
                <F1ArchitectureDiagram />
              </DiagramToggle>

              <p style={proseStyle}>
                The four modes are not four boxes. They are positions on a <strong style={{ color: SPECTRUM.cobalt }}>continuous gradient</strong> from full Connection to maximum Domination. The compass needle moves along this gradient. A fluid compass has access to the full range.
              </p>
              <p style={proseStyle}>
                The gradient makes the <strong style={{ color: TEXT.primary }}>proportionality question</strong> visible. The question is not "is this person in Protection?" but "<strong style={{ color: TEXT.primary }}>how deep into Protection, for how long, in response to what, and can the needle move?</strong>" A brief shift into Protection during an argument is proportionate. A permanent residence in Control that began in childhood is not. The gradient makes both visible — and makes the difference between them measurable.
              </p>
            </div>

            <hr style={conceptDividerStyle} />

            {/* Concept 10 */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="state-determines-capacity" style={conceptHeadingStyle}>
                State Determines Capacity
              </h3>

              <KeyStatement>
                What a person can perceive, think, feel, and do depends on their current regulatory state. You are not dealing with a person. You are dealing with a person in a state.
              </KeyStatement>

              <p style={proseStyle}>
                This is not metaphor — it is <strong style={{ color: TEXT.primary }}>neurobiological reality</strong>. The framework tracks this principle across six dimensions:
              </p>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Dimension</th>
                      <th style={thStyle}>Pattern A</th>
                      <th style={thStyle}>Pattern B</th>
                      <th style={thStyle}>Pattern C</th>
                      <th style={thStyle}>Pattern D</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={["Signal Detection", "Broad", "Narrows to threat", "Strategic variables", "Binary (threat/not-threat)"]} />
                    <TableRow cells={["Empathy", "Full", "Filtered to survival data", "Deprioritized", "Near-zero"]} />
                    <TableRow cells={["Cognition", "Flexible", "Simplified — fast decisions", "Focused but rigid", "Elimination only"]} />
                    <TableRow cells={["Time horizon", "Extended", "Immediate", "Instrumental", "This moment only"]} />
                    <TableRow cells={["Learning", "Possible", "Shut down", "Strategic only", "Unavailable"]} />
                    <TableRow cells={["Repair", "Available", "Difficult", "Deprioritized", "Not available"]} />
                  </tbody>
                </table>
              </div>

              <p style={proseStyle}>
                The inability to understand another person in a given moment may not be unwillingness. The current state has literally reduced the neurobiological capacity to do so. <strong style={{ color: TEXT.primary }}>Restore safety first, then expect capacity.</strong>
              </p>

              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Bower (1981) — state-dependent learning. Easterbrook (1959) — emotional arousal narrows attention. Kahneman (2011) — cognitive load reduces flexibility. Porges (2011), Keltner (2016) — social engagement goes offline under threat.
                </p>
              </ExpandableSection>
            </div>

            <hr style={conceptDividerStyle} />

            {/* Concept 11 */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="same-emotion-two-expressions" style={conceptHeadingStyle}>
                Same Emotion, Two Expressions
              </h3>

              <KeyStatement>
                The same emotion produces different outcomes depending on where the compass is pointing when it arrives. Assess mode position, not the emotion.
              </KeyStatement>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Emotion</th>
                      <th style={thStyle}>In Connection</th>
                      <th style={thStyle}>In Threat Modes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={["Anger", "Signals a boundary has been crossed; motivates repair and clarity", "Mobilizes defense; escalates conflict; becomes attack"]} />
                    <TableRow cells={["Fear", "Signals genuine threat; promotes appropriate caution", "Generalizes; becomes hypervigilance; restricts engagement"]} />
                    <TableRow cells={["Sadness", "Processes loss; invites support and reflection", "Becomes withdrawal; deepens isolation; hardens into hopelessness"]} />
                    <TableRow cells={["Joy", "Celebrates; connects; broadens capacity", "Is distrusted; feels dangerous; may trigger threat"]} />
                    <TableRow cells={["Love", "Opens; deepens; sustains", "Attaches with desperation; becomes possession; masks control"]} />
                    <TableRow cells={["Shame", "Signals misalignment; motivates repair", "Becomes identity ('I am wrong'); drives hiding, self-punishment"]} />
                    <TableRow cells={["Guilt", "Signals harm done; motivates accountability", "Becomes paralysis; drives excessive self-blame or defensive denial"]} />
                    <TableRow cells={["Disgust", "Protects boundaries; signals contamination", "Dehumanizes; creates othering; justifies exclusion"]} />
                    <TableRow cells={["Curiosity", "Explores; learns; builds understanding", "Becomes surveillance; information-gathering for control"]} />
                    <TableRow cells={["Grief", "Processes what was lost; creates space for what comes next", "Becomes stuck mourning; blocked by false coherence"]} />
                  </tbody>
                </table>
              </div>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The systematic side-by-side comparison across ten core emotions — including "positive" emotions (joy, love, curiosity) which most clinical models omit. The diagnostic reframe: "assess mode position, not the emotion" inverts standard clinical practice.
                </p>
              </ExpandableSection>
            </div>
          </section>

          <SectionDivider />

          {/* ─── PART 7: THE FULL ARC ────────────────────── */}
          <section
            id="the-full-arc"
            aria-labelledby="heading-the-full-arc"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-the-full-arc" style={sectionHeadingStyle}>
              The Full Arc — Where Each Framework Begins
            </h2>

            <CycleBox highlight={CYCLE_STEPS} />

            <div style={{ marginBottom: 32 }}>
              <h3 id="seven-step-arc" style={conceptHeadingStyle}>
                The Seven-Step Arc
              </h3>

              <DiagramToggle label="seven-step arc diagram" defaultOpen>
                <F1FullArcDiagram />
              </DiagramToggle>

              <p style={proseStyle}>
                F1 names a <strong style={{ color: TEXT.primary }}>complete trajectory</strong> from biological signal to social structure. Biological Restoration is the <strong style={{ color: SPECTRUM.cobalt }}>central mechanism</strong> — step four of seven, three steps on each side:
              </p>

              <p
                style={{
                  fontSize: 14,
                  fontFamily: FONT.mono,
                  color: TEXT.muted,
                  padding: "12px 16px",
                  background: hexToRgba(SPECTRUM.cobalt, 0.08),
                  borderRadius: 6,
                  marginBottom: 16,
                  textAlign: "center",
                  lineHeight: 1.6,
                }}
              >
                Signal Detection → Emotion → Action → <strong style={{ color: SPECTRUM.cobalt }}>Biological Restoration</strong> → Behaviour → Social Structure → Escalation or Repair
              </p>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Step</th>
                      <th style={thStyle}>What Happens</th>
                      <th style={thStyle}>Elaborated In</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={["Signal Detection", "The nervous system perceives the environment through all available channels", "F1, F2, F6"]} />
                    <TableRow cells={["Emotion", "The nervous system generates the signal — the body's first language", "F1"]} />
                    <TableRow cells={["Action", "The organism responds from its current mode", "F1, F2"]} />
                    <TableRow cells={["Biological Restoration", "The body completes the activation cycle — or doesn't", "F1, F2, F3"]} />
                    <TableRow cells={["Behaviour", "What the person produces relationally", "F3"]} />
                    <TableRow cells={["Social Structure", "Individual patterns aggregate into collective systems", "F4, F5, F6"]} />
                    <TableRow cells={["Escalation or Repair", "The system escalates or the original restoration is rebuilt", "F7, F8–F12"]} />
                  </tbody>
                </table>
              </div>

              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>Everything before Biological Restoration is the body's designed process. Everything after depends on whether that process completed.</strong> The frameworks split at this exact point: F1–F2 describe the designed system and its calibration; F3–F7 describe what happens when Biological Restoration is missing; F8–F12 describe how to build it back.
              </p>
            </div>

            <hr style={conceptDividerStyle} />

            <div style={{ marginBottom: 32 }}>
              <h3 id="regulation-thread" style={conceptHeadingStyle}>
                The Regulation Thread
              </h3>

              <p style={proseStyle}>
                Each framework describes a <strong style={{ color: TEXT.primary }}>regulation substitute</strong> at a different scale. Each substitute works, each comes at a cost, and each traces to the same origin: a nervous system that <strong style={{ color: TEXT.primary }}>never learned Biological Restoration</strong> — running on <Link href="/model/m3-the-open-cycle" style={{ color: SPECTRUM.indigo, textDecoration: "none", fontWeight: 500 }}>permanently open cycles</Link>.
              </p>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Framework</th>
                      <th style={thStyle}>What Regulates Instead</th>
                      <th style={thStyle}>Scale</th>
                      <th style={thStyle}>Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={["F1", "Biological Restoration", "Individual biology", "None — the design"]} />
                    <TableRow cells={["F2", "Co-regulation → self-restoration (when learned)", "Developmental", "Restoration path never built"]} />
                    <TableRow cells={["F3", "False coherence — cognition replacing restoration", "Individual cognition", "Truth"]} />
                    <TableRow cells={["F3 (ext)", "Emotional distortion + external regulation", "Relational", "Relationships"]} />
                    <TableRow cells={["F4", "Rules regulate", "Collective — social systems", "Flexibility"]} />
                    <TableRow cells={["F5", "Worth hierarchies regulate", "Collective — value systems", "Equity"]} />
                    <TableRow cells={["F6", "Bias regulates", "Collective — perceptual systems", "Accuracy"]} />
                    <TableRow cells={["F7", "Domination regulates", "Collective — power systems", "Everything"]} />
                  </tbody>
                </table>
              </div>

              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>The costs escalate</strong> — from truth (F3) to everything (F7). The mechanism is the same at every scale. The intervention principle is the same at every scale: <strong style={{ color: TEXT.primary }}>restore safety first, then expect capacity</strong>.
              </p>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The seven-step arc as the organising trajectory of the entire framework system, with Biological Restoration as the central mechanism. The regulation thread as the connective tissue of F1–F12, showing that each framework describes the same nervous system failing to restore and substituting something else at a different scale with a different cost. To our knowledge, no existing framework traces a single mechanism from perception through emotional signalling through biological restoration through collective structures through domination — and shows that each level is the same nervous system substituting a different source at a different scale.
                </p>
              </ExpandableSection>
            </div>
          </section>

          <SectionDivider />

          {/* ─── WHAT F1 ESTABLISHES ──────────────────────── */}
          <section
            id="what-f1-establishes"
            aria-labelledby="heading-what-f1-establishes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-what-f1-establishes" style={sectionHeadingStyle}>
              What F1 Establishes
            </h2>

            <p style={proseStyle}>
              F1 defines the complete safety-threat orientation system — and names the full arc that the remaining eleven frameworks elaborate.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 24 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Concept</th>
                    <th style={thStyle}>What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Emotions as biological information", "The nervous system's signalling language — the medium through which the body's evaluation of safety and threat gets delivered. The body's first language. Interpret, don't suppress."]} />
                  <TableRow cells={["The safety orientation question", "One question generates all emotional diversity: \"Is there enough safety?\""]} />
                  <TableRow cells={["Cross-theoretical convergence", "Six traditions describe the same two-mode orientation."]} />
                  <TableRow cells={["The Inner Compass", "The compass orients between Connection and Protection. Fluid operation is not a position — it is the needle moving freely."]} />
                  <TableRow cells={["How the compass moves", "Five-step sequence from signal detection to mode, completing before awareness. Fast by design, not broken by error. The problem is never the mechanism — it is what the mechanism learned."]} />
                  <TableRow cells={["Connection and Protection", "Two body-first modes. Connection is the mode designed for sustained living. Protection is the emergency system."]} />
                  <TableRow cells={["Biological Restoration", "The body's designed process for completing the activation cycle and settling back to Connection. Cannot be forced. Can only be allowed. Operates through somatic and relational pathways. The central mechanism of the entire twelve-framework system."]} />
                  <TableRow cells={["Control and Domination", "Two cognition-first modes. The intelligent upgrade. In designed operation: deliberate, time-limited, returnable."]} />
                  <TableRow cells={["The gradient", "The four modes are positions on a continuous gradient, not four boxes."]} />
                  <TableRow cells={["State determines capacity", "What you can perceive, think, and do depends on your current state. Restore safety first, then expect capacity."]} />
                  <TableRow cells={["Same emotion, two expressions", "Mode position determines whether an emotion serves connection or defense. Assess mode position, not the emotion."]} />
                  <TableRow cells={["The seven-step arc", "Signal Detection → Emotion → Action → Biological Restoration → Behaviour → Social Structure → Escalation or Repair. Step four of seven, three on each side."]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>Key Formulations</h3>
            <div
              style={{
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.cobalt, 0.06),
                borderRadius: 8,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
                marginBottom: 16,
              }}
            >
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                {[
                  "Emotions are the nervous system's signalling language — the body talking to itself and to the brain",
                  "The nervous system evaluates, emotions signal, the organism orients",
                  "The body's first language — cognition is the second",
                  "The question is not 'how do I manage this emotion?' but 'what is this signal telling me?'",
                  "A fluid compass does not stay in Connection permanently — fluid operation is the ability to move through the gradient and come back",
                  "Biological Restoration is the mechanism of coming back",
                  "Biological Restoration cannot be forced. It can only be allowed.",
                  "What is commonly called 'regulation' is often its opposite",
                  "Some emotions can't complete through physiology alone — the nervous system is waiting for relational evidence",
                  "For relational emotions, co-regulation is the only pathway that completes the cycle",
                  "The completion pathway for relational emotions can only be built through the experience the person most fears: being seen in the emotion that says they don't belong — and not being excluded.",
                  "State determines capacity",
                  "You are not dealing with a person. You are dealing with a person in a state. Change the state, and the person who shows up is different.",
                  "Restore safety first, then expect capacity",
                  "Assess mode position, not the emotion",
                  "The problem is never the mechanism — it is what the mechanism learned",
                  "Connection and Protection happen to you — Control and Domination are what cognition does when recruited into threat service",
                  "The goal is not to eliminate Control or Domination — the goal is to restore Biological Restoration",
                  "Protection was designed for minutes to hours — not a lifetime",
                ].map((f, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 13,
                      color: TEXT.secondary,
                      lineHeight: 1.7,
                      marginBottom: 6,
                      fontStyle: "italic",
                    }}
                  >
                    "{f}"
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <SectionDivider />

          {/* ─── RESEARCH FOUNDATIONS ─────────────────────── */}
          <section
            id="research-foundations"
            aria-labelledby="heading-research-foundations"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-research-foundations" style={sectionHeadingStyle}>
              Research Foundations
            </h2>

            <p style={{ ...proseStyle, marginBottom: 16 }}>
              F1 integrates established research from the following traditions. The individual theories are well-documented. <strong style={{ color: TEXT.primary }}>The integration — and the connections between them</strong> — is TEG-Blue's contribution, open to testing.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Tradition</th>
                    <th style={thStyle}>Key Contribution</th>
                    <th style={thStyle}>Researchers</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Polyvagal Theory", "Neuroception, autonomic states, social engagement, vagal brake, co-regulation", "Porges, 2011; Dana, 2018"]} />
                  <TableRow cells={["Affective Neuroscience", "Emotions as functional biological systems; somatic markers", "Panksepp, 1998; Damasio, 1994; LeDoux, 1996"]} />
                  <TableRow cells={["Trauma Research", "Calibration to chronic threat; incomplete threat response; restoration as cycle completion", "van der Kolk, 2014; Levine, 1997"]} />
                  <TableRow cells={["Attachment Theory", "Safety shapes development and restoration capacity", "Bowlby, 1969; Schore, 2003"]} />
                  <TableRow cells={["Emotion Science", "State shapes capacity; broaden-and-build; action readiness", "Fredrickson, 2001; Frijda, 1986; Barrett, 2017"]} />
                  <TableRow cells={["Developmental Neuroscience", "Relationship shapes brain architecture and restoration capacity", "Siegel, 2012; Schore, 2003"]} />
                  <TableRow cells={["Stress Physiology", "Acute vs. chronic activation; allostatic load", "Sapolsky, 2004; McEwen, 2000"]} />
                  <TableRow cells={["Evolutionary Psychology", "Cognition evolved for survival problems the body alone could not solve", "Established literature"]} />
                  <TableRow cells={["Interoception", "The body's internal signalling system", "Craig, 2009"]} />
                  <TableRow cells={["Cognitive Science", "State-dependent learning; cognitive load; predictive processing", "Bower, 1981; Kahneman, 2011; Barrett, 2017"]} />
                </tbody>
              </table>
            </div>
          </section>

          <SectionDivider />

          {/* ─── BRIDGE TO F2 ─────────────────────────────── */}
          <section
            id="bridge-to-f2"
            aria-labelledby="heading-bridge-to-f2"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bridge-to-f2" style={sectionHeadingStyle}>
              Bridge to F2: How Biological Restoration Gets Learned — or Doesn't
            </h2>

            <p style={proseStyle}>
              F1 describes the <strong style={{ color: TEXT.primary }}>complete designed system</strong> — including Biological Restoration in its designed form. The body mobilizes, responds, and restores. The cycle completes. The compass moves and comes back. This is the design.
            </p>
            <p style={proseStyle}>
              But Biological Restoration is not automatic. It is designed — but it must be <strong style={{ color: SPECTRUM.cobalt }}><em>learned</em></strong>. The body has the biological capacity for restoration from birth. It does not have the ability to restore until that capacity is developed through experience. The mechanism through which it is learned is <strong style={{ color: TEXT.primary }}>co-regulation</strong> — another person's regulated nervous system teaching the child's nervous system the path back to Connection.
            </p>
            <p style={proseStyle}>
              This is especially true for <strong style={{ color: TEXT.primary }}>relational emotions</strong>. Somatic activations can complete through the body's own channels when conditions allow. But shame, guilt, fear of rejection, fear of abandonment — the emotions whose content is about belonging — can only complete when another person stays. A child whose relational emotions are never co-regulated does not just lack a general restoration capacity. They lack the <strong style={{ color: TEXT.primary }}>specific pathway for the specific emotions that are hardest to bear</strong>. The chain is emotion-specific: <strong style={{ color: TEXT.primary }}>what the adults could hold is what the child learns to complete</strong>.
            </p>
            <p style={proseStyle}>
              This requires caregivers whose own Biological Restoration is functioning — whose own compass can move and come back. <strong style={{ color: TEXT.primary }}>The awareness capacities the caregivers carry determine whether the child's restoration capacity develops.</strong> When the adults' awareness is complete, the child learns restoration through being restored with. When the adults' awareness is incomplete — when their own Biological Restoration was never learned — the child's system develops <strong style={{ color: TEXT.primary }}>without ever learning the path back</strong>.
            </p>

            <KeyStatement>
              F1 is the instrument. F2 is the calibration. The mechanism is F1. The calibration is F2.
            </KeyStatement>

            <p style={proseStyle}>
              <Link
                href="/framework/f2-awareness-calibration"
                style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}
              >
                Read F2: Awareness Teaches Awareness →
              </Link>
            </p>
          </section>

          <SectionDivider />

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="f1-emotional-gradient" type="framework" />

          <SectionDivider />

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
                    <th style={navThStyle}>If you want to…</th>
                    <th style={navThStyle}>Go here</th>
                  </tr>
                </thead>
                <tbody>
                  <NavRow label="Continue to F2 — how the compass gets calibrated" href="/framework/f2-awareness-calibration" linkText="Awareness Teaches Awareness (F2) →" />
                  <NavRow label="See the applied model for this framework" href="/model/m1-inner-compass" linkText="Inner Compass (M1) →" />
                  <NavRow label="See the physiological model — the biology of unfinished emotion" href="/model/m3-the-open-cycle" linkText="The Biology of Unfinished Emotion (M3) →" />
                  <NavRow label="Explore all 12 frameworks" href="/frameworks-map" linkText="12 Frameworks →" />
                  <NavRow label="Review the source theories" href="/scientific-foundations" linkText="Scientific Foundations →" />
                  <NavRow label="Understand the epistemological stance" href="/epistemological-foundations" linkText="Epistemological Foundations →" />
                  <NavRow label="See the full system architecture" href="/foundations" linkText="System Overview →" />
                  <NavRow label="Look up key terms" href="/glossary" linkText="Glossary →" />
                  <NavRow label="See published research" href="/publications" linkText="Publications →" />
                  <NavRow label="Experience the tools" href="https://teg-blue.com/emotional-tools" linkText="Emotional Tools (teg-blue.com) →" external />
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
            "@id": "https://teg-blue.org/framework/f1-emotional-gradient#article",
            headline: "Emotions as Biological Information: The Safety-Threat Orientation System",
            description:
              "How the nervous system orients between safety and threat, generating emotional signals that determine perception, capacity, and behavior. Framework F1 of the TEG-Blue 12-framework system.",
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
            datePublished: "2026-03-03",
            dateModified: "2026-03-04",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue 12 Framework System",
              url: "https://teg-blue.org/frameworks-map",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/framework/f1-emotional-gradient",
            },
            about: [
              { "@type": "Thing", name: "Emotional Regulation" },
              { "@type": "Thing", name: "Autonomic Nervous System" },
              { "@type": "Thing", name: "Polyvagal Theory" },
              { "@type": "Thing", name: "Biological Restoration" },
              { "@type": "Thing", name: "Safety-Threat Orientation" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Affective Neuroscience (Panksepp, 1998)" },
              { "@type": "ScholarlyArticle", name: "Descartes' Error (Damasio, 1994)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Waking the Tiger (Levine, 1997)" },
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
              { "@type": "ScholarlyArticle", name: "The Developing Mind (Siegel, 2012)" },
              { "@type": "ScholarlyArticle", name: "Positivity (Fredrickson, 2001)" },
              { "@type": "ScholarlyArticle", name: "Why Zebras Don't Get Ulcers (Sapolsky, 2004)" },
            ],
            keywords: [
              "emotions as biological information",
              "safety-threat orientation",
              "emotional gradient",
              "nervous system regulation",
              "polyvagal theory",
              "biological restoration",
              "four-mode gradient",
              "state-dependent capacity",
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
              { name: "12 Frameworks", url: "/frameworks-map" },
              { name: "F1: Emotional Gradient", url: "/framework/f1-emotional-gradient" },
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
                question: "What does it mean that emotions are biological information?",
                answer:
                  "Emotions are the nervous system's signalling language — the medium through which the body's continuous evaluation of safety and threat gets communicated to the rest of the organism. They are not disruptions to clear thinking but structured signals carrying specific information about what the evaluation detected.",
              },
              {
                question: "What is the safety-threat orientation system?",
                answer:
                  "The nervous system continuously evaluates one question: 'Is there enough safety to engage, or is protection needed?' This evaluation is automatic, continuous, and below conscious awareness. Every emotional signal the body generates is an answer to this question.",
              },
              {
                question: "What is the difference between Connection and Protection modes?",
                answer:
                  "Connection is the system's home base — the only mode designed for sustained living, where perception broadens, empathy is fully available, and repair is possible. Protection is the emergency system — designed for minutes to hours — where the nervous system mobilizes fight, flight, freeze, or fawn responses in response to perceived threat.",
              },
              {
                question: "What is Biological Restoration?",
                answer:
                  "Biological Restoration is the body's designed process for completing the activation cycle and settling back to Connection after a threat response. It cannot be forced — it can only be allowed. It is what the body does when conditions allow: the breath slows, muscles release, hormones clear, and the system settles back.",
              },
              {
                question: "How does regulatory state determine capacity?",
                answer:
                  "What a person can perceive, think, feel, and do depends on their current regulatory state. In Connection, perception is broad and empathy is full. In Protection, perception narrows to threat and cognition simplifies. This is neurobiological reality — the current state has literally shaped the capacities available.",
              },
            ])
          ),
        }}
      />
    </div>
  );
}

// ─── CONSTANTS ───────────────────────────────────────────────

const GRADIENT_5 = "linear-gradient(to right, #93CFFF, #5BADFF, #4B8FFF, #346AEC, #2563eb)";

// ─── STYLE CONSTANTS ──────────────────────────────────────

const conceptDividerStyle = {
  border: "none",
  borderTop: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.06)}`,
  margin: "0 auto 0 0",
  maxWidth: 120,
};

const sectionHeadingStyle = {
  fontSize: 20,
  fontWeight: 700,
  color: RESEARCHER.accent,
  marginBottom: 20,
  paddingBottom: 8,
  borderBottom: `2px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
};

const conceptHeadingStyle = {
  fontSize: 16,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 12,
};

const subheadingStyle = {
  fontSize: 14,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 8,
  marginTop: 16,
};

const proseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 12,
  maxWidth: 720,
};

const expandedProseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  margin: "8px 0 0",
};

const listItemStyle = {
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

const orderedListStyle = {
  paddingLeft: 20,
  margin: "0 0 16px",
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

function SectionDivider() {
  return <div style={{ height: 2, borderRadius: 1, background: GRADIENT_5, margin: "8px 0 24px" }} />;
}

function InnerDivider({ margin = "16px 0" }) {
  return <div style={{ height: 1, borderRadius: 1, background: GRADIENT_5, margin }} />;
}

function KeyStatement({ children }) {
  return (
    <blockquote
      style={{
        padding: "16px 20px",
        margin: "0 0 16px",
        background: hexToRgba(SPECTRUM.cobalt, 0.06),
        borderRadius: 8,
        borderLeft: `4px solid ${SPECTRUM.cobalt}`,
        fontSize: 15,
        fontWeight: 500,
        color: TEXT.primary,
        lineHeight: 1.6,
        fontStyle: "italic",
      }}
    >
      {children}
    </blockquote>
  );
}

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

const CYCLE_STEPS = [
  "Signal Detection", "Neuroception", "Emotion", "Autonomic Response",
  "Mode Activation", "Threat Response", "Biological Restoration", "Connection",
];

function CycleBox({ highlight = [] }) {
  return (
    <div
      style={{
        padding: "14px 20px",
        margin: "0 0 24px",
        background: hexToRgba(SPECTRUM.cobalt, 0.06),
        border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.12)}`,
        borderRadius: 8,
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: FONT.mono, color: SPECTRUM.cobalt, marginBottom: 8 }}>
        The complete cycle
      </div>
      <p style={{ fontSize: 13, fontFamily: FONT.mono, color: TEXT.muted, lineHeight: 1.6, margin: 0, textAlign: "center" }}>
        {CYCLE_STEPS.map((step, i) => {
          const isHighlight = highlight.includes(step);
          return (
            <span key={step} style={{ whiteSpace: "nowrap" }}>
              {i > 0 && <span style={{ whiteSpace: "normal" }}>{" "}</span>}
              {i > 0 && "→ "}
              <span style={{
                color: isHighlight ? SPECTRUM.cobalt : undefined,
                fontWeight: isHighlight ? 600 : undefined,
              }}>
                {step}
              </span>
            </span>
          );
        })}
      </p>
    </div>
  );
}

function NavRow({ label, href, linkText, external }) {
  const linkStyle = {
    color: SPECTRUM.blue,
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
