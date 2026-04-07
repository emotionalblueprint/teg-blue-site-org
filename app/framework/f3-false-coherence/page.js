import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, PATTERN,
  hexToRgba, MAIN_ORG,
} from "@/src/styles/tokens";
import {
  proseStyle, expandedProseStyle, sectionHeadingStyle, expandableRowStyle,
  conceptHeadingStyle, propositionItemStyle,
} from "@/src/styles/pageStyles";
import {
  SiteHeader, SiteFooter, PageLayout, FrameworkHero,
  ExpandableSection, CommonUnderstanding,
  PartDivider, NavSection, ConnectionsMap,
} from "@/src/components";
import PrerequisitesBlock from "@/src/components/PrerequisitesBlock";
import BridgeSection from "@/src/components/BridgeSection";
import EstablishesSection from "@/src/components/EstablishesSection";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Common Understanding", href: "#common-understanding", description: "What most people think these words mean — and what the nervous system is actually doing." },
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F3 makes about how cognition maintains the developmental calibration." },
  { label: "The CLS Arrives Inside a Configured System", href: "#cls-arrives", description: "Three simultaneous conditions: no state flexibility, unresolved activation load, no interoceptive channel." },
  { label: "Cognitive Override as Default Architecture", href: "#override-architecture", description: "Override is not a choice — it is the only mode of operation the CLS has ever known." },
  { label: "False Coherence", href: "#false-coherence", description: "The CLS generating narrative that replaces the ESS's physiological signals — a restoration substitute operating through cognition." },
  { label: "The Self-Reinforcing Loop", href: "#self-reinforcing-loop", description: "Each narrative cycle strengthens the pattern. Why insight alone fails." },
  { label: "Cognitive Dissonance as Regulatory Threat", href: "#cognitive-dissonance", description: "Challenging the narrative threatens the mechanism keeping the system stable." },
  { label: "Growth Narratives Serving Regulation", href: "#growth-narratives", description: "Skills without capacities — the identity upgrades that change the narrative without changing the configuration." },
  { label: "Emotional Distortion", href: "#emotional-distortion", description: "Internal activation misattributed as external threat when SEA is absent." },
  { label: "Restoration Substitutes in Relationships", href: "#restoration-substitutes", description: "The nervous system recruiting others to perform the regulatory function." },
  { label: "From Individual to Collective", href: "#individual-to-collective", description: "The same CLS that maintains individual false coherence absorbs and enforces collective rules." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Bridge to F4", href: "#bridge", description: "The lock meets the rule system." },
  { label: "Connections Map", href: "#connections", description: "How F3 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
];

// ─── METADATA ───────────────────────────��──────────────────

export const metadata = {
  title: "Adult Cognition & False Coherence (F3) | TEG-Blue Research",
  description:
    "How cognition maintains the developmental calibration — cognitive override as default architecture, false coherence as restoration substitute, and why the locked state extends into relationships through emotional distortion and external regulation. Framework F3 of the TEG-Blue 12-framework system.",
  keywords: [
    "false coherence",
    "cognitive override",
    "restoration substitute",
    "emotional distortion",
    "external regulation",
    "self-reinforcing loop",
    "cognitive dissonance",
    "interoceptive self-awareness",
    "signal replacement",
    "nervous system regulation",
    "chronic state organization",
    "boundary-evidence loop",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f3-false-coherence",
  },
  openGraph: {
    title: "Adult Cognition & False Coherence — F3 Framework | TEG-Blue",
    description:
      "How cognition maintains what development set — cognitive override as architecture, false coherence as restoration substitute, and why the internal system extends into relationships. Framework F3 of 12.",
    url: "https://teg-blue.org/framework/f3-false-coherence",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Cognition & False Coherence — TEG-Blue F3",
    description:
      "How cognition maintains what development set. The cognitive maintenance framework — why the calibration persists and what it does to others.",
  },
  other: {
    'citation_title': 'Adult Cognition and False Coherence',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F3FalseCoherencePage() {
  const P = { A: PATTERN.A.primary, B: PATTERN.B.primary, C: PATTERN.C.primary, D: PATTERN.D.primary };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f3-false-coherence" />

      <PageLayout
        header={
          <FrameworkHero
            badge="FRAMEWORK F3"
            title="Adult Cognition & False Coherence"
            subtitle="The Lock"
            description="When higher-order cognition develops inside a nervous system with no channel to its own physiological signals, it does not passively inherit the disconnection — it actively maintains it. The cognitive system generates narratives that produce real physiological relief without the body's completion sequence running, reinforces the pattern through the relief those narratives provide, and makes the locked state invisible by constructing a coherent story around it. This framework describes why this lock resists insight, what it does inside relationships, and how individual narrative substitution scales to collective structures."
            group="Individual"
            groupLabel="Individual Arc · F1–F3"
            threadLine="False coherence — the CLS replacing the ESS's signals with narrative. Scale: individual cognition. Cost: truth"
            informsModels={[
              { label: "M3", href: "/model/m3-regulation-capacities" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
            ]}
            adjacent={{
              prev: { label: "F2 Developmental Calibration", href: "/framework/f2-awareness-calibration" },
              next: { label: "F4 Rules Regulate", href: "/framework/f4-rules-regulate" },
            }}
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>

          {/* ─── PREREQUISITES ──────────────────────────── */}
          <PrerequisitesBlock items={[
            {
              concept: "Biological Restoration",
              framework: "F1",
              description: "The body's designed process for completing the activation sequence and returning to physiological baseline — the pivot of the entire framework system.",
              href: "/framework/f1-emotional-gradient#designed-process",
            },
            {
              concept: "Interoceptive Self-Awareness (SEA)",
              framework: "F2",
              description: "The capacity to perceive one's own internal states while they are happening — the interoceptive channel between the ESS and the CLS. When never built, the CLS operates without the body's data.",
              href: "/framework/f2-awareness-calibration#awareness-capacities",
            },
            {
              concept: "Three Adverse Conditions",
              framework: "F2",
              description: "Unpredictable, incongruent, and invalidating developmental environments — each producing a different capacity profile and a different state of interoceptive access.",
              href: "/framework/f2-awareness-calibration#disruption-conditions",
            },
          ]} />

          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Self-deception",
                commonUnderstanding: "Lying to yourself — knowing the truth and choosing to deny it.",
                definition: "Cognitive regulation. The CLS, operating without the interoceptive channel, constructs narrative from its own output — reasoning, language, abstraction. The narrative coheres. The narrative regulates. The person is not denying truth. They have no channel through which to receive it.",
              },
              {
                title: "Insight",
                commonUnderstanding: "The breakthrough that changes everything — once you understand the pattern, you can stop it.",
                definition: "A cognitive event inside the system running the replacement. The CLS can describe the pattern with precision and still be living inside it — because understanding is a CLS operation, and the state is an ESS condition, and the interoceptive channel between them is absent.",
              },
              {
                title: "Projection",
                commonUnderstanding: "A defense mechanism — putting your unwanted feelings onto others.",
                definition: "Internal physiological activation misattributed as external threat when the interoceptive channel is absent. The body activates. The CLS, with no pathway to register the activation as internal, constructs the only explanation available from its data: someone did this to me. The reattribution is sincere.",
              },
            ]}
          />

          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  The CLS arrives inside a nervous system already configured — a chronic state already set, unresolved activation load already present, no interoceptive channel between the ESS and the CLS
                </li>
                <li style={propositionItemStyle}>
                  Cognitive override is not an event that happens at a specific moment — it is the permanent architecture of a system built without the interoceptive channel
                </li>
                <li style={propositionItemStyle}>
                  False coherence is a restoration substitute that operates through narrative — the CLS generating stable accounts that produce physiological relief without completing the body's restoration sequence
                </li>
                <li style={propositionItemStyle}>
                  Each chronic state produces its own characteristic false coherence — the narrative content is predictable from the state, the state is maintained by the narrative, and the lock is mutual
                </li>
                <li style={propositionItemStyle}>
                  Insight alone fails because cognition is inside the loop, not outside it — the exit is not more understanding but the conditions under which the body's restoration sequence can begin to run
                </li>
                <li style={propositionItemStyle}>
                  Cognitive dissonance is an autonomic event, not a debate — challenging the narrative threatens the mechanism keeping the system stable
                </li>
                <li style={propositionItemStyle}>
                  When SEA is absent, internal activation is misattributed as external threat — emotional distortion is a structural consequence, and the boundary-evidence loop makes the pattern self-reinforcing
                </li>
                <li style={propositionItemStyle}>
                  External regulation — the nervous system recruiting others to perform the regulatory function — is expressed differently through each chronic state, and the substitute destroys the conditions genuine restoration would require
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: WHAT COGNITION INHERITS ─────────── */}
          <PartDivider label="PART 1" title="What Cognition Inherits" color={P.A} />

          {/* Concept 0: The CLS Arrives Inside a Configured System */}
          <section
            id="cls-arrives"
            aria-labelledby="heading-cls-arrives"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-cls-arrives" style={sectionHeadingStyle(P.B)}>
              The CLS Arrives Inside a Configured System
            </h2>

            <p style={proseStyle}>
              Higher-order cognition does not develop in a vacuum. The prefrontal cortex matures, language emerges, abstract reasoning comes online — and all of it builds inside a nervous system that is already organized. By the time the Cognitive-Logical System (CLS) is operational, the Emotional Somatic System (ESS) has been running for years. The autonomic configuration is already set. The capacity profile — which awareness capacities developed and which did not — is already in place. The body is already carrying the unresolved activation load from every relational signal whose designed completion was never available.
            </p>
            <p style={proseStyle}>
              The CLS inherits three conditions simultaneously.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>A nervous system without State Flexibility.</strong> The body does not know what returning to physiological baseline feels like — because biological restoration was never learned through co-regulation. The nervous system cannot shift back after activation. It is stuck in whatever chronic state the developmental conditions produced. The person is not experiencing a state. The person is experiencing what feels like reality — because the chronic state is the only reality they have ever known.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>A body carrying unresolved activation load.</strong> Every relational signal the nervous system generated about belonging, connection, rejection, shame — signals whose designed completion required another person, and that person was not available — is still physiologically present. Not as narrative. Not as memory that can be recalled and reprocessed. As cortisol that never cleared. As muscle tension that never released. As an HPA axis that never received the all-clear. As a baseline that has been elevated since before the CLS came online.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>No interoceptive channel between the ESS and the CLS.</strong> Interoceptive Self-Awareness (SEA) — the capacity to perceive one's own internal states while they are happening — was never built. The interoceptive channel through which the CLS would receive the ESS's physiological signals does not exist. The CLS does not know the body is activated. It does not know the baseline is elevated. It has no information that the ESS is doing anything at all.
            </p>
            <p style={proseStyle}>
              The CLS builds with whatever data it receives. When the interoceptive channel is open, the CLS receives physiological data — and its narrative reflects what the body is actually doing. When the interoceptive channel is absent, the CLS receives no physiological data. It constructs from its own output: reasoning, language, abstraction, narrative. The story it builds may be internally coherent. It does not reflect the body's state. The CLS is constructing reality from the only source available — and that source does not include the body.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — three inherited conditions converging */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Damasio (1994, 1999) — the somatic marker hypothesis: emotion as bodily signal that informs cognition. Without access to somatic markers, decision-making loses its biological ground. Porges (2011) — neuroception: safety-threat evaluation below conscious awareness, gating what cognition has access to. Schore (2003) — right-hemisphere affect regulation developing before left-hemisphere language; when the right-hemisphere foundation is not built, the left hemisphere constructs narrative without it.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The specification of three conditions the CLS inherits simultaneously — not as separate deficits, but as a single configuration. The absent interoceptive channel (SEA), the chronic state, and the unresolved load are not three problems. They are one condition: a cognitive system built inside a body it cannot feel, carrying activation it does not know is there, stuck in a state it experiences as identity. This configuration follows predictably from the developmental conditions <Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link> described. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 1: Cognitive Override as Default Architecture */}
          <section
            id="override-architecture"
            aria-labelledby="heading-override-architecture"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-override-architecture" style={sectionHeadingStyle(P.B)}>
              Cognitive Override as Default Architecture
            </h2>

            <p style={proseStyle}>
              When the interoceptive channel was never built, the CLS does not experience itself as overriding anything. There is no moment of interception — no signal arriving that cognition then suppresses. The CLS operates in its own domain because it has no information that another domain exists. Override is the architecture the system was built with.
            </p>
            <p style={proseStyle}>
              <Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link> maps cognitive override as the branching point in the Emotional Somatic Cycle — the point where the CLS overrides the ESS's physiological signals and the restoration sequence cannot begin. <Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link> described the developmental conditions that produce this configuration. F3 adds: by the time the person is an adult, override is not an event that happens at a specific moment. It is the permanent condition of the system.
            </p>
            <p style={proseStyle}>
              The ESS generates a signal — cortisol releases, muscles brace, heart rate shifts. The signal carries information: what was detected, what was crossed, what is needed. In a system where SEA is functional, the CLS registers this activation as data. It feels the cortisol. It notices the bracing. It receives the finding. In a system where SEA was never built, the signal runs — the body activates — and the CLS does not register it. The CLS continues in its own domain: planning, narrating, reasoning, managing. Not because it chose to ignore the signal. Because it has no equipment to detect the signal.
            </p>
            <p style={proseStyle}>
              Where physiological data is absent, the CLS generates its own content. It produces narrative — explanations, interpretations, identity statements — that fill the space where somatic information would have been. "I'm not angry — I'm being logical." "That didn't hurt — I'm fine." "Nothing is wrong — I'm in control." These are not lies. They are the CLS's best construction from the data it has. The data it has does not include the body.
            </p>
            <p style={proseStyle}>
              The consequence is structural invisibility. The person does not experience themselves as disconnected from their body — because they have never experienced connection. They do not notice that physiological signals are being overridden — because they have never consciously received one. The override is invisible not because it is hidden but because it is the only mode of operation the CLS has ever known.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — override as permanent architecture, not event */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Freud (1915, 1926) — defense mechanisms: repression, denial, rationalization as automatic processes operating below awareness. Kahneman (2011) — System 1/System 2: fast automatic processing generating judgments that the slower deliberate system rationalizes post-hoc. Haidt (2001) — the social intuitionist model: moral reasoning as post-hoc justification for intuitive judgments already formed. Porges (2011) — neuroception gating cognition: the nervous system determining what information reaches conscious awareness before the person can choose.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The reframing of cognitive override from an event to an architecture. In most clinical and psychological frameworks, cognitive defense is something that happens — a mechanism that activates in response to threat. TEG-Blue proposes that when SEA was never built, override is not something that activates. It is the permanent structure. The CLS was built inside a system already running override and was never exposed to the alternative. The task is not stopping the override — the person is not aware it is happening. The task is building the interoceptive channel that was never built, which requires the conditions <Link href="/framework/f8-repairing-awareness" style={linkStyle}>F8</Link> describes. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: HOW COGNITION MAINTAINS ─────────── */}
          <PartDivider label="PART 2" title="How Cognition Maintains" color={P.B} />

          {/* Concept 2: False Coherence */}
          <section
            id="false-coherence"
            aria-labelledby="heading-false-coherence"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-false-coherence" style={sectionHeadingStyle(P.B)}>
              False Coherence
            </h2>

            <p style={proseStyle}>
              The CLS does not simply fail to receive the ESS's signals. It replaces them. Where the ESS generated a physiological finding — cortisol signalling threat, muscle tension carrying unresolved activation, shame signalling relational damage — the CLS generates a narrative that takes the place of the signal. The narrative provides an explanation for the body's state that does not require the person to feel the state. This operation — signal replacement — is the core mechanism inside cognitive override when it operates through narrative.
            </p>
            <p style={proseStyle}>
              The replacement produces physiological relief. When the narrative coheres — when the explanation holds together, when the identity feels stable — sympathetic activation decreases measurably. Cortisol dips. Muscle tension partially releases. The CLS registers the relief and encodes the strategy: this works. The substitution is reinforced. But the underlying activation — the unresolved activation load the body has been carrying — remains. The narrative suppressed the felt intensity without the restoration sequence running to its endpoint. The stress hormones rebound. The activation returns. The CLS generates another narrative.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>False coherence</strong> is the enduring narrative structure that repeated signal replacement produces. Not a single rationalization. Not a momentary defense. A complete, self-consistent account of who the person is, why they do what they do, and what the world is like — constructed entirely from the CLS's own output, without input from the body's physiological signals. The narrative feels like self-knowledge. It functions as a restoration substitute.
            </p>
            <p style={proseStyle}>
              Each chronic state produces its own characteristic false coherence:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Chronic State</th>
                    <th style={thStyle}>What the CLS Constructs</th>
                    <th style={thStyle}>What It Replaces</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Safety & Openness (as survival)", "\"I'm just a caring person. I put others first because that's who I am.\"", "The physiological signals of unresolved relational need — the body's signals that something is missing, overridden by a narrative of chosen selflessness"]} />
                  <TableRow cells={["Threat & Defence", "\"The world really is dangerous. I'm not paranoid — I'm realistic.\"", "The elevated baseline and narrowed perception produced by the chronic state — overridden by a narrative that the perception is accurate rather than state-locked"]} />
                  <TableRow cells={["Strategy & Management", "\"I'm just being strategic. I'm the responsible one. Someone has to hold this together.\"", "The activation load and need for control produced by the chronic state — overridden by a narrative of competence and necessity"]} />
                  <TableRow cells={["Power & Dominance", "\"They deserved it. I'm strong. If they can't handle me, that's their problem.\"", "The harm-generated signals — shame, guilt, remorse — overridden by a narrative that reframes harm as strength"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Each narrative makes the chronic state feel like accurate perception rather than a state that became the system's permanent configuration. Each narrative regulates — it stabilizes the person within the state by providing the explanation that makes the state feel correct. And each narrative prevents the return to physiological baseline — because the return would require the person to perceive their current state as a state, and the narrative is precisely what makes the state invisible.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — signal replacement cycle per chronic state */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Festinger (1957) — cognitive dissonance theory: the drive toward internal consistency producing motivated reasoning. Kahneman (2011) — coherence-seeking as a fundamental cognitive operation: the mind preferring a consistent story over an accurate one. Gazzaniga (1998) — the left-hemisphere interpreter: the brain constructing explanatory narratives for behaviors and states it did not generate. Nisbett & Wilson (1977) — people constructing plausible causal explanations for their own behavior without access to the actual causes.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The identification of false coherence as a specific type of restoration substitute — one that operates through narrative rather than through substances, activity, or other people. This places it within the same regulatory architecture as all Path B phenomena: the substitute produces temporary relief without completion, the underlying unresolved activation load remains, and the pattern self-reinforces through the relief it provides. The per-state narrative profiles show that false coherence is not a single phenomenon but four distinct patterns, each generated by the specific chronic state the person carries. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 3: The Self-Reinforcing Loop */}
          <section
            id="self-reinforcing-loop"
            aria-labelledby="heading-self-reinforcing-loop"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-self-reinforcing-loop" style={sectionHeadingStyle(P.B)}>
              The Self-Reinforcing Loop
            </h2>

            <p style={proseStyle}>
              False coherence strengthens through use. Each time the CLS generates a narrative that replaces a physiological signal, the replacement is reinforced by the relief it produces. The pattern consolidates: the ESS generates a signal, the CLS does not register it, the CLS generates a narrative, the narrative produces relief, the CLS encodes "this works," the replacement becomes more automatic, and the original signal is not processed. The body carries the unresolved activation load forward.
            </p>
            <p style={proseStyle}>
              Each cycle also deepens the disconnection from biological restoration. Every time the CLS successfully replaces a physiological signal, the body's restoration sequence gets no practice. Muscles do not release. Breathing does not deepen. Cortisol does not clear through the biological completion process. The CLS is not only substituting for restoration — it is preventing the conditions under which restoration could develop. The substitute blocks the pathway it imitates.
            </p>
            <p style={proseStyle}>
              This loop merges with the state-reinforcing loop that <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link> describes at the perceptual level. M2 describes the loop operating through perception: chronic state, sensory filter, biased input, confirmation of state. F3 adds the cognitive layer: the CLS takes the biased input and constructs a narrative around it. The narrative does not merely reflect the filter — it explains the filter, justifies it, and makes it feel like accurate perception. The perceptual loop and the narrative loop operate together: the state shapes what the person perceives, and the narrative shapes what the person believes about what they perceive.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>This is why insight alone fails.</strong> Insight is a cognitive event — and cognition is the system running the replacement. The loop can absorb, narrate, and even agree with the insight without releasing the underlying state. A person can understand that they are defensive and still be defensive. A person can describe their patterns with precision and still be living inside them. The understanding is a CLS operation. The state is an ESS condition. When the interoceptive channel between them is absent, the understanding does not reach the state.
            </p>
            <p style={proseStyle}>
              More cognition often strengthens cognitive regulation rather than undermining it. Each new insight becomes another narrative — another construction the CLS can use to maintain coherence. "I know I do this because of my childhood." The sentence is accurate. It changes nothing about the nervous system's configuration. The body is still carrying the same unresolved activation load. The baseline is still elevated. The chronic state still organizes perception. The insight sits on top of the architecture it describes — a new narrative layer that can even become its own form of false coherence.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: animated — the self-reinforcing cycle */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Hebb (1949) — neural consolidation: pathways that fire together strengthen through repetition. Beck (1979) — schema maintenance through confirmation bias: existing beliefs filter information to confirm themselves. Van der Kolk (2014) — the body keeps the score: insight does not discharge somatic activation. Levine (1997) — somatic experiencing: physiological completion requires bodily engagement, not cognitive processing alone.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The structural explanation for why insight frequently fails to produce change. The loop operates at a level that cognitive insight cannot reach because cognition is inside the loop, not outside it. The exit is not more understanding. It is the conditions under which the body's restoration sequence can begin to run — which requires safety sufficient for the nervous system to release what it is carrying, not analysis sufficient for the CLS to describe what it is carrying. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 4: Cognitive Dissonance as Regulatory Threat */}
          <section
            id="cognitive-dissonance"
            aria-labelledby="heading-cognitive-dissonance"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-cognitive-dissonance" style={sectionHeadingStyle(P.B)}>
              Cognitive Dissonance as Regulatory Threat
            </h2>

            <p style={proseStyle}>
              When reality contradicts the narrative the CLS built — when somatic signals and cognitive constructions fall out of alignment, or when external events cannot be absorbed by the existing story — the nervous system does not experience a reasoning error. It experiences a regulatory threat. Because the narrative IS the restoration substitute. Challenging the narrative threatens the mechanism keeping the system stable.
            </p>
            <p style={proseStyle}>
              The person in chronic Strategy & Management has built a narrative: "I am strategic. I am in control. I handle things." When someone sets a boundary, says no, or identifies a pattern the person cannot absorb — the CLS does not evaluate the information. The ESS fires first. Cortisol spikes. Muscles brace. Heart rate increases. The body responds to the challenge the way it responds to any threat — because the challenge threatens the only regulatory mechanism available.
            </p>
            <p style={proseStyle}>
              Observable somatic markers appear: tightening, urgency, heat, attentional narrowing, the chest constricting, breathing shallowing. These are the autonomic signature of a nervous system whose regulatory stability has been threatened. Cognitive dissonance is an autonomic event, not a debate.
            </p>
            <p style={proseStyle}>
              The resolution strategies that follow — denial, projection, blame, narrative revision, counterattack — are the CLS performing its regulatory function under threat: generating a stable narrative as rapidly as possible to restore autonomic equilibrium. The strategies are proportionate to the regulatory threat, not to the external event. This is why the response appears disproportionate from outside and feels completely justified from inside — the person is defending the mechanism that keeps their nervous system stable, not defending a belief.
            </p>
            <p style={proseStyle}>
              Cognitive dissonance is particularly destabilizing when false coherence is the person's only restoration substitute. When biological restoration was never learned, when the body has no pathway back to physiological baseline, and the narrative is the sole mechanism maintaining autonomic stability — then challenging the narrative threatens the person's entire regulatory architecture. The nervous system will defend the narrative until conditions are safe enough that the narrative is no longer the only mechanism between the person and destabilization.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — dissonance as regulatory threat, not reasoning error */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Festinger (1957) — cognitive dissonance: the psychological discomfort of holding contradictory cognitions, driving motivated resolution. Kunda (1990) — motivated reasoning: the tendency to arrive at desired conclusions, loosely constrained by plausibility. Kruglanski (1989) — need for cognitive closure: the preference for definite answers over ambiguity, especially under threat. Porges (2011) — neuroception gating cognition: safety-threat evaluation determining what processing is available.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The reframing of cognitive dissonance from a cognitive phenomenon to a regulatory one. The dissonance is not between two beliefs — it is between the narrative and the body's physiological state. The distress is the autonomic signature of a nervous system whose stability mechanism has been threatened. Standard cognitive restructuring — identify the distortion, challenge it, replace it — can trigger defensive escalation because the challenge is experienced as an attack on the regulatory architecture. The nervous system requires sufficient safety before it can tolerate information that threatens its regulatory architecture. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 5: Growth Narratives Serving Regulation */}
          <section
            id="growth-narratives"
            aria-labelledby="heading-growth-narratives"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-growth-narratives" style={sectionHeadingStyle(P.B)}>
              Growth Narratives Serving Regulation
            </h2>

            <p style={proseStyle}>
              The identity that false coherence constructed does not remain static. It gets upgraded — refined through achievement, ideology, self-optimization, therapeutic vocabulary, and spiritual frameworks. The person acquires new language, new skills, new narratives. The identity evolves. But the underlying configuration — the chronic state, the unresolved activation load, the absence of SEA — does not change. The CLS has added sophistication to the narrative without the body learning anything new about returning to physiological baseline.
            </p>
            <p style={proseStyle}>
              A person in chronic Strategy & Management who adds "mindful leader" to their identity through meditation practice — but uses mindfulness as a more refined control strategy, monitoring internal states with the same strategic vigilance that monitors external threats. The CLS gains a new language for what it was already doing.
            </p>
            <p style={proseStyle}>
              A person in chronic Safety & Openness who adds "empowered empath" to their identity — but uses the language of empowerment to narrate continued self-erasure. "I set boundaries now" while the nervous system still organizes around others' states. The vocabulary upgraded. The configuration did not.
            </p>
            <p style={proseStyle}>
              Each upgrade can be distinguished from genuine development by a single question: <strong style={{ color: TEXT.primary }}>has the body learned anything new about returning to physiological baseline?</strong> A person can acquire skills — language, techniques, credentials, insight, vocabulary — while the capacities that require biological change remain absent. Skills are CLS acquisitions. Capacities require the body's restoration sequence to have run — muscles releasing, cortisol clearing, the nervous system settling into a configuration it did not previously have access to. The skill can be acquired in any state. The capacity requires the state to shift.
            </p>
            <p style={proseStyle}>
              Growth that develops Interpersonal Affect Perception (RE), Affective Resonance (ER), or SEA — that teaches the body new pathways for restoration, that allows the person to feel what they previously overrode — is genuine development. Growth that gives the CLS better language for the same substitution is an identity upgrade. The difference is not in the vocabulary the person uses. It is in what their nervous system can do that it could not do before.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — skills vs capacities distinction */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Rogers (1959) — conditions of worth: the self-concept organized around approval rather than organismic experience. Welwood (2000) — spiritual bypassing: using spiritual practices to avoid psychological material. Illouz (2008) — the therapeutic culture: therapeutic language becoming a tool for self-presentation rather than self-knowledge.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  A structural criterion for distinguishing genuine development from identity upgrades: whether the body's restoration capacity has changed. This removes the distinction from the subjective domain — where the person's narrative about their growth is self-confirming — and places it in the physiological domain. Not "do you believe you have grown?" but "can your nervous system do something now that it could not do before?" Skills without capacities do not change the configuration. They change the narrative about the configuration. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: WHAT THE SYSTEM DOES TO OTHERS ──── */}
          <PartDivider label="PART 3" title="What the System Does to Others" color={P.C} />

          {/* Concept 6: Internal Activation Perceived as External Threat */}
          <section
            id="emotional-distortion"
            aria-labelledby="heading-emotional-distortion"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-emotional-distortion" style={sectionHeadingStyle(P.B)}>
              Internal Activation Perceived as External Threat
            </h2>

            <p style={proseStyle}>
              The internal architecture described in Part 2 does not operate in isolation. It operates inside relationships. When SEA is absent — when the person has no channel through which to perceive their own physiological states — the system has no mechanism for locating the source of its activation internally. This is the self-referential attribution default from <Link href="/framework/f2-awareness-calibration#pre-reflective" style={linkStyle}>F2</Link>, still operating in adulthood: internal discomfort, unable to be identified as one's own, gets reclassified as an external event.
            </p>
            <p style={proseStyle}>
              The sequence: someone sets a boundary, offers feedback, says no, or reveals something the narrative cannot absorb. The ESS fires — cortisol spikes, muscles brace, the body mobilizes a threat response. In a system where SEA is functional, the person catches the activation: "I feel defensive. This is mine." They locate the source internally, register the signal as information about their own state, and course-correct. The catching depends on SEA.
            </p>
            <p style={proseStyle}>
              When SEA is structurally absent, the catching never happens. The body is activated. The CLS, operating without the interoceptive channel, does not register the activation as internal. The CLS constructs the only explanation available from its data: someone did this to me. The internal physiological event — the cortisol, the bracing, the mobilization — is attributed to the other person's action. The other person's boundary becomes an attack. The other person's feedback becomes a threat. The reattribution is sincere.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The boundary-evidence loop.</strong> One person crosses a line. The other sets a boundary. The first person — unable to register their own activation as internal, unable to feel the impact of their action on the other — experiences the boundary as an unprovoked attack. They push back. A firmer boundary is set. They experience this as escalation. The other person's self-protection becomes evidence of being attacked. The more boundaries are set, the more "evidence" accumulates. The pattern is self-reinforcing: the other person's attempts to protect themselves confirm the narrative that they are the aggressor.
            </p>
            <p style={proseStyle}>
              This is emotional distortion — internal physiological activation misattributed as external threat when the interoceptive channel is absent. It is a structural consequence. As long as the interoceptive channel remains absent, the reattribution will continue — the equipment that would allow accurate attribution is not available.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: animated — the boundary-evidence loop */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Damasio (1994) — somatic markers shaping attribution before conscious awareness. Porges (2011) — neuroception evaluating experienced safety, not objective danger. Freud (1911) — projection: internal states attributed to external sources. Beck (1976) — cognitive distortion: threat-biased attribution patterns maintaining negative schemas. Van der Kolk (2014) — trauma-based perception: the body's memory shaping what the person sees in the present.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The reframing of what is commonly called projection or cognitive distortion as a structural consequence of an absent awareness capacity. The misattribution is not a thinking error that can be corrected through cognitive restructuring. It is the predictable output of a system operating without the interoceptive channel (SEA) that would allow internal states to be recognized as internal. The boundary-evidence loop describes the relational pattern this architecture produces — and explains why it is self-reinforcing. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 7: Restoration Substitutes in Adult Relationships */}
          <section
            id="restoration-substitutes"
            aria-labelledby="heading-restoration-substitutes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-restoration-substitutes" style={sectionHeadingStyle(P.B)}>
              Restoration Substitutes in Adult Relationships
            </h2>

            <p style={proseStyle}>
              When biological restoration is unavailable and the person cannot process physiological activation internally, the nervous system recruits other people to perform the regulatory function. This is external regulation — the nervous system using others' emotional states, compliance, or submission to produce the neurochemical shift that internal restoration would have provided. The mechanism follows directly from <Link href="/model/m3-regulation-capacities" style={linkStyle}>M3's</Link> account of restoration substitutes. The nervous system searches for anything that produces relief. When the activation is relational in content, the substitute the nervous system reaches for is relational. It recruits the co-regulation pathway. But the pathway runs under conditions of control, not safety. The relief is real. The completion is not.
            </p>
            <p style={proseStyle}>
              Each chronic state uses others differently:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Chronic Safety & Openness</strong> (as survival) — fusion. Others' emotional states fill the space where SEA would have provided self-knowledge. Others' calm produces calm. Others' approval produces stability. Others' distress produces destabilization — not affective resonance, but affective flooding where the other person's state becomes indistinguishable from one's own. The regulatory requirement: others must remain emotionally consistent.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Chronic Threat & Defence</strong> — distance. Intimacy is the threat. Others' reliable distance serves as a buffer against activation. Withdrawal, coldness, or performed self-sufficiency keeps the relational environment at a manageable distance. The regulatory requirement: others must not come too close.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Chronic Strategy & Management</strong> — management. Others' compliance substitutes for the internal regulation that SEA would have provided. Conversations are steered, information is managed, behavior is corrected — for internal stability. The regulatory requirement: others must behave predictably within the managed reality.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Chronic Power & Dominance</strong> — subjugation. Others' fear and submission directly settle the internal activation. When others submit, the physiological response settles — temporarily. The regulatory requirement: others must comply or face escalation.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The self-sealing property.</strong> The restoration substitute prevents the conditions that would allow genuine restoration. The person who needs co-regulation is using others for regulation — which degrades the relational environment. The people who could provide genuine co-regulation become less safe, less honest, and less genuinely available as the regulatory demands intensify. The substitute systematically forecloses the pathway it imitates. The system cannot reach the solution through the strategy it is using — because the strategy destroys the conditions the solution requires.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — four relational patterns + self-sealing property */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Bowlby (1969, 1988) — attachment as a regulatory system: adults continue using attachment figures for autonomic regulation. Kohut (1977) — self-object needs: others experienced as extensions of one's own regulatory system. Kernberg (1975) — narcissistic pathology as a relational regulatory strategy. Flores (2004) — attachment as the framework for understanding addictive patterns: tolerance, escalation, the distinction between the substance and the underlying state.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The mapping of external regulation as a restoration substitute — the nervous system's structural response to the absence of internal restoration capacity. This places it within the same architecture as substance use, compulsive activity, and all other Path B phenomena: temporary relief without completion. The per-state profiles show that what appears as four different relational styles — fusion, distance, management, subjugation — are the same mechanism expressed through different chronic states. The self-sealing property explains why these patterns resist change: the substitute destroys the conditions it would need to become genuine. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 4: BRIDGE ──────────────────────────── */}
          <PartDivider label="PART 4" title="From Individual to Collective" color={P.D} />

          {/* Concept 8: From Individual to Collective */}
          <section
            id="individual-to-collective"
            aria-labelledby="heading-individual-to-collective"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-individual-to-collective" style={sectionHeadingStyle(P.B)}>
              From Individual to Collective
            </h2>

            <p style={proseStyle}>
              The same CLS that maintains individual false coherence is the same CLS that absorbs and enforces social rules.
            </p>
            <p style={proseStyle}>
              The CLS does not have two modes — one for internal narrative and one for social participation. It has one mode: constructing coherent accounts from the data available to it. When the interoceptive channel to the ESS is absent, the CLS constructs internal coherence from its own output. It also constructs social coherence from the cultural narratives available to it — rules, norms, values, hierarchies, assumptions about how the world works. Both operations serve the same regulatory function: stability through narrative.
            </p>
            <p style={proseStyle}>
              A person in chronic Strategy & Management who has built "I'm the responsible one" as internal false coherence absorbs social rules that confirm this narrative: "Hard work is the only thing that matters." "Emotions are unprofessional." "If you can't handle the pressure, you don't belong." These are not evaluated as propositions. They are absorbed as regulatory material — narratives that stabilise the chronic state by confirming it from the outside. The individual lock and the collective lock reinforce each other.
            </p>
            <p style={proseStyle}>
              When enough people in a system carry chronic states — when enough individuals are running false coherence, external regulation, and emotional distortion simultaneously — the individual patterns consolidate into collective structures. Rules that regulate what individuals cannot regulate internally. Worth hierarchies that determine who deserves restoration and who does not. Perceptual biases that lock collective perception in the same way chronic states lock individual perception. Domination structures that run relational substitute escalation at institutional scale.
            </p>
            <p style={proseStyle}>
              The mechanism is the same. The CLS constructing narrative from available data, without the interoceptive channel to the body's physiological signals, producing coherence that regulates without resolving. The scale changes. <Link href="/framework/f4-rules-regulate" style={linkStyle}>F4</Link> picks up from here.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — individual patterns consolidating to collective structures */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Festinger (1957) — cognitive dissonance at the group level: shared beliefs maintained through mutual reinforcement. Haidt (2012) — moral foundations theory: moral reasoning as post-hoc justification for intuitions shaped by group identity. Jost & Banaji (1994) — system justification theory: the psychological tendency to defend existing social arrangements. Bourdieu (1977) — habitus: social structures internalized as dispositions that feel natural.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The proposal that collective rule systems, worth hierarchies, perceptual biases, and domination structures are regulatory phenomena — the same nervous system architecture that produces individual false coherence, operating at collective scale. The transition from F3 to F4 is not a metaphor. The same CLS operations, the same absent interoceptive channel, the same restoration substitute mechanism. What changes is the number of nervous systems running the pattern simultaneously and the structures that emerge when they do. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={P.B}
            items={[
              {
                term: "The CLS inherits a configured system",
                definition: "Three simultaneous conditions: no state flexibility (chronic state already set), unresolved activation load (relational signals that never completed, carried as physiology), and no interoceptive channel (SEA never built — the CLS has no pathway to receive the ESS's signals).",
              },
              {
                term: "Cognitive override as architecture",
                definition: "Override is not an event — it is the permanent structure. The CLS was built without the interoceptive channel and has never operated any other way. Where physiological data is absent, the CLS generates narrative.",
              },
              {
                term: "Signal replacement",
                definition: "The core operation inside cognitive override — the CLS generating a substitute narrative that takes the place of the ESS's physiological signals. The narrative produces temporary relief without completion.",
              },
              {
                term: "False coherence",
                definition: "The enduring narrative structure produced by repeated signal replacement — a restoration substitute operating through cognition. Each chronic state produces its own characteristic false coherence. The narrative content is predictable from the state. The state is maintained by the narrative.",
              },
              {
                term: "The self-reinforcing loop",
                definition: "Each narrative cycle strengthens the pattern: signal, no registration, narrative, relief, reinforcement, more automatic. Merges with M2's state-reinforcing loop at the cognitive level. The substitute blocks the pathway it imitates.",
              },
              {
                term: "Why insight fails",
                definition: "Insight is a cognitive event — cognition is inside the loop, not outside it. The exit is not more understanding. It is the conditions under which the body's restoration sequence can begin to run.",
              },
              {
                term: "Cognitive dissonance as regulatory threat",
                definition: "Challenging the narrative threatens the restoration substitute. The distress is the autonomic signature of a nervous system whose stability mechanism has been threatened — proportionate to the regulatory threat, not the external event.",
              },
              {
                term: "Skills vs capacities",
                definition: "Skills are CLS acquisitions. Capacities require the body's restoration sequence to have run. The diagnostic question: has the body learned anything new about returning to physiological baseline?",
              },
              {
                term: "Emotional distortion",
                definition: "Internal physiological activation misattributed as external threat when SEA is absent. The self-referential attribution default from F2, still operating in adulthood. The boundary-evidence loop: the other person's self-protection becomes evidence of being attacked.",
              },
              {
                term: "External regulation",
                definition: "The nervous system recruiting others to perform the regulatory function. Four patterns — fusion (chronic Safety & Openness), distance (chronic Threat & Defence), management (chronic Strategy & Management), subjugation (chronic Power & Dominance) — same mechanism, different chronic states.",
              },
              {
                term: "The self-sealing property",
                definition: "The restoration substitute destroys the relational conditions genuine restoration would require. The system cannot reach the solution through the strategy it is using.",
              },
              {
                term: "Individual to collective",
                definition: "The same CLS operations that maintain individual false coherence absorb and enforce collective narratives. The mechanism connecting individual cognition (F3) to collective rule systems (F4).",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={P.B}
            established="F3 completed the individual arc — the biological substrate, the developmental calibration, and the cognitive lock that maintains it through narrative substitution."
            question="What happens when enough nervous systems carrying these patterns inhabit the same social structure? The individual patterns consolidate into collective rule systems."
            nextFramework="F4"
            nextTitle="Rules Regulate"
            nextHref="/framework/f4-rules-regulate"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={P.D}
            connections={[
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "M3 maps cognitive override as the branching point and restoration substitutes as what replaces biological restoration. F3 describes why override persists as architecture in adulthood and identifies false coherence as a narrative restoration substitute — temporary relief without completion operating through cognition.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "M4 maps the three awareness capacities and the interoceptive channel. F3 uses the capacity profile to show why false coherence operates: when SEA is absent, the CLS has no channel to receive the ESS's signals, and override is the default architecture.",
              },
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "M2 describes the four states and the state-reinforcing loop. F3 adds the cognitive layer: each chronic state produces its own characteristic false coherence, and the narrative loop merges with the perceptual loop to lock both perception and belief.",
              },
              {
                id: "F1: The Emotional Gradient",
                href: "/framework/f1-emotional-gradient",
                description: "F1 is the instrument. F1 described biological restoration as the designed process, operating at no cost. F3 describes what happens when that process is permanently unavailable and the CLS substitutes narrative in its place — at the cost of truth.",
              },
              {
                id: "F2: Developmental Calibration",
                href: "/framework/f2-awareness-calibration",
                description: "F2 is the calibration. F3 is the lock. F2 described how the system gets configured — the developmental conditions that produced the capacity profile, the chronic state, and the unresolved relational signals. F3 describes why the calibration persists and how cognition maintains it.",
              },
              {
                id: "F4: Rules Regulate",
                href: "/framework/f4-rules-regulate",
                description: "F3 completes the individual arc. F4 picks up the mechanism at collective scale: individual narrative substitution becomes collective rule systems. The same CLS that maintains individual false coherence absorbs and enforces social rules.",
              },
              {
                id: "F8: Awareness Rebuilds Through Safety",
                href: "/framework/f8-repairing-awareness",
                description: "F3 and F8 are structural counterparts. F3 describes the lock — how cognition maintains the developmental calibration. F8 describes how the lock can open — awareness restored through safety, not instruction.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={P.D}
            items={[
              { label: "Continue to F4 — what happens when the mechanism operates at collective scale", href: "/framework/f4-rules-regulate", linkText: "F4: Rules Regulate \u2192" },
              { label: "See cognitive override and restoration substitutes mapped in detail", href: "/model/m3-regulation-capacities", linkText: "M3: Regulation Capacities \u2192" },
              { label: "See the awareness architecture that determines whether the interoceptive channel is open", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "Return to F2 — how the calibration was set", href: "/framework/f2-awareness-calibration", linkText: "F2: Developmental Calibration \u2192" },
              { label: "See the structural counterpart — how the lock opens", href: "/framework/f8-repairing-awareness", linkText: "F8: Awareness Rebuilds Through Safety \u2192" },
              { label: "Explore all 12 frameworks", href: "/frameworks-map", linkText: "Framework Map \u2192" },
              { label: "Look up key terms", href: "/glossary", linkText: "Glossary \u2192" },
            ]}
          />

        </article>
      </PageLayout>

      <SiteFooter />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/framework/f3-false-coherence#article",
            headline: "Adult Cognition & False Coherence: The Lock",
            description:
              "How cognition maintains the developmental calibration — cognitive override as default architecture, false coherence as restoration substitute, emotional distortion, and external regulation. Framework F3 of the TEG-Blue 12-framework system.",
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
            datePublished: "2026-03-04",
            dateModified: "2026-04-06",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue 12 Framework System",
              url: "https://teg-blue.org/frameworks-map",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/framework/f3-false-coherence",
            },
            about: [
              { "@type": "Thing", name: "False Coherence" },
              { "@type": "Thing", name: "Cognitive Override" },
              { "@type": "Thing", name: "Restoration Substitutes" },
              { "@type": "Thing", name: "Emotional Distortion" },
              { "@type": "Thing", name: "External Regulation" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Descartes' Error (Damasio, 1994)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "A Theory of Cognitive Dissonance (Festinger, 1957)" },
              { "@type": "ScholarlyArticle", name: "Thinking, Fast and Slow (Kahneman, 2011)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Waking the Tiger (Levine, 1997)" },
              { "@type": "ScholarlyArticle", name: "Affect Regulation and the Origin of the Self (Schore, 2003)" },
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
            ],
            keywords: [
              "false coherence",
              "cognitive override",
              "restoration substitute",
              "emotional distortion",
              "external regulation",
              "self-reinforcing loop",
              "cognitive dissonance",
              "interoceptive self-awareness",
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
              { name: "12 Frameworks", url: "/frameworks-map" },
              { name: "F3: Adult Cognition & False Coherence", url: "/framework/f3-false-coherence" },
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
                question: "What is false coherence in the TEG-Blue system?",
                answer:
                  "False coherence is the enduring narrative structure produced by repeated signal replacement — where the CLS generates narrative that takes the place of the ESS's physiological signals. It is a restoration substitute that operates through cognition: the narrative produces temporary relief without the body's restoration sequence completing. Each chronic state produces its own characteristic false coherence.",
              },
              {
                question: "Why doesn't insight alone change the pattern?",
                answer:
                  "Insight is a cognitive event — and cognition is the system running the replacement. The self-reinforcing loop operates at a level that cognitive insight cannot reach because cognition is inside the loop, not outside it. The exit is not more understanding but the conditions under which the body's restoration sequence can begin to run — safety sufficient for the nervous system to release what it is carrying.",
              },
              {
                question: "What is emotional distortion?",
                answer:
                  "Internal physiological activation misattributed as external threat when the interoceptive channel (SEA) is absent. The body activates. The CLS, with no pathway to register the activation as internal, constructs the only explanation available: someone did this to me. The boundary-evidence loop makes this self-reinforcing — the other person's self-protection becomes evidence of being attacked.",
              },
              {
                question: "What is the self-sealing property?",
                answer:
                  "The restoration substitute destroys the relational conditions that genuine restoration would require. The person using others for regulation degrades the relational environment — making the people who could provide genuine co-regulation less safe, less honest, and less available. The system cannot reach the solution through the strategy it is using.",
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
              name: "Adult Cognition & False Coherence (F3) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f3-false-coherence",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ─── STYLE CONSTANTS ──────────────────────────────────────

const linkStyle = {
  color: SPECTRUM.cobalt,
  textDecoration: "none",
  fontWeight: 500,
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

// ─── HELPER COMPONENTS ────────────────────────────────────

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
