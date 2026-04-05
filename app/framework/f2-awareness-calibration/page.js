import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RESEARCHER,
} from "@/src/styles/tokens";
import {
  proseStyle, expandedProseStyle, sectionHeadingStyle, expandableRowStyle,
  conceptHeadingStyle, propositionItemStyle,
} from "@/src/styles/pageStyles";
import {
  SiteHeader, SiteFooter, PageLayout, FrameworkHero,
  PropositionBox, ExpandableSection, CommonUnderstanding,
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
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F2 makes about how the relational environment calibrates the system." },
  { label: "The Pre-Reflective Starting Condition", href: "#pre-reflective", description: "Before self-observation matures, experience is identity. Every infant begins here." },
  { label: "Co-Regulation and the Two Completion Pathways", href: "#co-regulation", description: "How somatic and relational restoration are learned — and what happens when co-regulation is unavailable." },
  { label: "Three Awareness Capacities", href: "#awareness-capacities", description: "RE, ER, and SEA as developmental products of the relational environment, operating through two substrates." },
  { label: "Three Developmental Disruption Conditions", href: "#disruption-conditions", description: "Unpredictable, incongruent, and invalidating environments — three caregiver profiles, three outcomes." },
  { label: "The Developmental Consequence", href: "#developmental-consequence", description: "Chronic states, capacity profiles, tolerance thresholds, and intergenerational transmission." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Bridge to F3", href: "#bridge", description: "Why the calibration persists — what cognition inherits and actively maintains." },
  { label: "Connections Map", href: "#connections", description: "How F2 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Developmental Calibration (F2) | TEG-Blue Research",
  description:
    "How the relational environment calibrates the Emotional Somatic Cycle — co-regulation as the learning pathway, three awareness capacities as developmental products, and what happens when the designed completion pathway is unavailable. Framework F2 of the TEG-Blue 12-framework system.",
  keywords: [
    "developmental calibration",
    "co-regulation",
    "awareness capacities",
    "interoceptive self-awareness",
    "affective resonance",
    "interpersonal affect perception",
    "biological restoration",
    "intergenerational transmission",
    "attachment theory",
    "developmental neuroscience",
    "relational completion",
    "interoceptive substrate",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f2-awareness-calibration",
  },
  openGraph: {
    title: "Developmental Calibration — F2 Framework | TEG-Blue",
    description:
      "How the relational environment calibrates the Emotional Somatic Cycle — co-regulation, three awareness capacities, and what happens when the designed completion pathway is unavailable. Framework F2 of 12.",
    url: "https://teg-blue.org/framework/f2-awareness-calibration",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developmental Calibration — TEG-Blue F2",
    description:
      "How co-regulation calibrates the Emotional Somatic Cycle through three awareness capacities — and what happens when the relational environment cannot provide it.",
  },
  other: {
    'citation_title': 'Developmental Calibration',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F2AwarenessCalibrationPage() {
  const accent = SPECTRUM.cobalt;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f2-awareness-calibration" />

      <PageLayout
        header={
          <FrameworkHero
            badge="FRAMEWORK F2"
            title="Developmental Calibration"
            subtitle="How the Relational Environment Calibrates the System"
            description="F1 described the biological architecture — why the Emotional Somatic Cycle exists, why biological restoration is the designed process, and why relational signals require another person as a biological completion requirement. F2 describes what happens developmentally when that completion requirement is — or is not — met. The relational environment determines whether the restoration pathway is learned, which awareness capacities develop, and what the nervous system carries forward when relational signals have no completion pathway at all."
            group="Individual"
            groupLabel="Individual Arc · F1-F3"
            threadLine="Co-regulation to self-restoration (when learned). When not learned: the restoration pathway is never built. Cost: the return path"
            informsModels={[
              { label: "M2", href: "/model/m2-nervous-system-states" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
            ]}
            adjacent={{
              prev: { label: "F1 The Emotional Gradient", href: "/framework/f1-emotional-gradient" },
              next: { label: "F3 Adult Cognition & False Coherence", href: "/framework/f3-false-coherence" },
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
              concept: "Two Completion Pathways",
              framework: "F1",
              description: "Somatic signals can complete through the body's own channels. Relational signals require another person as a biological completion requirement.",
              href: "/framework/f1-emotional-gradient#designed-process",
            },
          ]} />

          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Co-regulation",
                commonUnderstanding: "Emotional support — comforting someone, helping them calm down, being there for them.",
                definition: "The biological completion pathway for relational signals. One regulated nervous system entrains an activated one through vagal tone, respiratory rhythm, and physiological presence — teaching the child's nervous system the path back to physiological baseline. The mechanism through which restoration capacity is learned.",
              },
              {
                title: "Empathy",
                commonUnderstanding: "A single trait you either have or lack — being a caring person, or not.",
                definition: "Three independent awareness capacities operating through two separate biological substrates. Interpersonal Affect Perception (RE) reads others through external channels — a cognitive capacity. Affective Resonance (ER) produces a somatic echo of another's state — an ESS capacity. Interoceptive Self-Awareness (SEA) perceives one's own internal states — the bridge between the ESS and the CLS. Different combinations produce different configurations.",
              },
              {
                title: "Identity",
                commonUnderstanding: "Who you really are underneath — a true self waiting to be discovered, or a personality type you were born with.",
                definition: "A cognitive structure built from whatever data the CLS receives. Which awareness capacities developed determines what data is available. The CLS constructs a coherent narrative from that data — whether the data set is complete or not. Configuration, not character.",
              },
            ]}
          />

          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  Before self-observation matures, experience is identity — the infant responds to physiological states without the capacity to observe them, and absorbs caregiver feedback as self-definition
                </li>
                <li style={propositionItemStyle}>
                  Co-regulation is the designed completion pathway for relational signals — not emotional support but one regulated nervous system teaching another the path back to physiological baseline
                </li>
                <li style={propositionItemStyle}>
                  Three awareness capacities develop through the relational environment, operating through two separate biological substrates — and what co-regulation builds at the deepest level is the interoceptive substrate
                </li>
                <li style={propositionItemStyle}>
                  Three caregiver profiles produce three distinct disruption patterns — unpredictable (unreliable completion), incongruent (misdirected completion), invalidating (blocked completion) — each setting the interoceptive substrate to a specific state
                </li>
                <li style={propositionItemStyle}>
                  When relational signals have no completion pathway, the activation accumulates as physiology — driving sustained activation, chronic defensive states, and loss of state flexibility
                </li>
                <li style={propositionItemStyle}>
                  The capacity profile replicates across generations through the same mechanism: the caregiver's nervous system state IS the child's developmental environment
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: THE LEARNING PATHWAY ────────────── */}
          <PartDivider label="PART 1" title="The Learning Pathway" color={accent} />

          {/* Concept 0: The Pre-Reflective Starting Condition */}
          <section
            id="pre-reflective"
            aria-labelledby="heading-pre-reflective"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-pre-reflective" style={sectionHeadingStyle(accent)}>
              The Pre-Reflective Starting Condition
            </h2>

            <p style={proseStyle}>
              The nervous system generates signals and shifts states from birth. The biological substrate for self-observation — the interoceptive pathway through which a person perceives their own hormonal shifts, muscular tension, and autonomic changes — has not yet matured. The infant responds to its own physiological states without the capacity to observe them.
            </p>
            <p style={proseStyle}>
              When the infant's nervous system generates a signal — cortisol releases, muscles brace, heart rate accelerates — the infant does not think "I am afraid." The infant IS fear. There is no observing position from which to notice "this is a state I am in." The signal is the infant's reality. Without the neural architecture for locating activation in the environment, the system defaults to the only attribution available: "something is wrong" registers as "something is wrong with me." This is not a cognitive error. It is the only attribution possible when the capacity to differentiate internal states from external conditions has not yet developed. Every infant begins here.
            </p>
            <p style={proseStyle}>
              Caregiver feedback enters this system not as information to be evaluated but as self-definition. When a caregiver responds with regulated presence — their own nervous system settled, their ventral vagal system engaged — the infant's nervous system receives a safety signal and the activation begins to settle. When a caregiver responds with their own dysregulation — cortisol spiking, muscles bracing — the infant's nervous system receives threat on top of the activation already running. The infant does not evaluate either response. The infant's nervous system absorbs it as part of its own state.
            </p>
            <p style={proseStyle}>
              The infant is also generating relational signals from the beginning — signals whose content concerns belonging, connection, the state of the bond. These signals require relational completion (<Link href="/framework/f1-emotional-gradient#designed-process" style={linkStyle}>F1</Link>). The infant cannot complete them alone. When the caregiver is present and regulated, the relational signal completes: the activation resolves, the body returns. When the caregiver is absent, withdrawn, or the source of the threat the signal is about, the relational signal has no completion pathway. The activation stays. And the infant — who cannot separate experience from identity — absorbs that unresolved activation as self.
            </p>

            {/* Section diagram: The pre-reflective condition — signal as identity, caregiver feedback as self-definition */}
            {/* Diagram type: static */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Stern (1985) — emergent self-experience before reflective self-awareness. Schore (2003) — right-hemisphere implicit processing precedes explicit cognition; early relational experience shapes the neural substrate of self-observation. Zajonc (1980) — affective primacy: emotional responses precede and operate independently of cognitive appraisal. Craig (2002) — interoceptive awareness as a developmental capacity with a maturing neural substrate. Winnicott (1960) — the infant as a unit inseparable from the caregiving environment.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The identification of the pre-reflective condition as the universal starting point that determines the developmental trajectory. The structural connection between the absence of interoceptive self-observation and the self-referential attribution default: without the capacity to locate activation in the environment, the nervous system attributes it to the self. The developmental intersection with relational signal architecture: the infant generates signals whose designed completion requires another person, and absorbs unresolved relational activation as identity because there is no observing position from which to do otherwise. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 1: Co-Regulation and the Two Completion Pathways */}
          <section
            id="co-regulation"
            aria-labelledby="heading-co-regulation"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-co-regulation" style={sectionHeadingStyle(accent)}>
              Co-Regulation and the Two Completion Pathways
            </h2>

            <p style={proseStyle}>
              <Link href="/framework/f1-emotional-gradient#designed-process" style={linkStyle}>F1</Link> established that the body has two designed completion pathways. Somatic emotions — whose content concerns threat, boundary, demand, safety — can move toward restoration through the body's own channels: movement, breathing, discharge, crying, sleep. Relational emotions — whose content concerns belonging, connection, rejection, shame, or the state of the bond — cannot complete through physiology alone. Their designed resolution pathway requires another person.
            </p>
            <p style={proseStyle}>
              Co-regulation is how both pathways get learned. The developmental stakes differ for each.
            </p>

            <h3 style={conceptHeadingStyle}>Somatic Restoration: Learned, Eventually Autonomous</h3>
            <p style={proseStyle}>
              When the infant's nervous system activates in response to a somatic signal and a caregiver whose own nervous system is settled holds the infant through the activation, the caregiver's physiological state provides a template. Heart rate variability, respiratory rhythm, vagal tone — the caregiver's biology directly influences the infant's activated biology. The infant's nervous system entrains toward the caregiver's. The activation sequence completes: stress hormones metabolize, muscles release, the body returns toward physiological baseline.
            </p>
            <p style={proseStyle}>
              What the child needs is not a caregiver permanently in Safety & Openness. It is a caregiver with State Flexibility — a nervous system that can access all four states when needed and return to physiological baseline after each. Safety & Openness to co-regulate and be present while the child's activation runs. Threat & Defence to protect the child from actual danger. Strategy & Management to navigate problems the child cannot handle alone. And the return to baseline after each — the system settling back, the body at rest.
            </p>
            <p style={proseStyle}>
              The child does not learn one state. The child learns the movement. A caregiver who can shift into Threat & Defence to protect, then settle back to co-regulate the child's fear — that nervous system teaches the child that activation resolves. That all states are temporary because the child witnesses a nervous system that moves through them and returns.
            </p>
            <p style={proseStyle}>
              Through thousands of repetitions, the child's nervous system encodes the somatic restoration sequence as an autonomous capacity. The child learns, at the level of the nervous system, that somatic activation resolves — that the body can complete the sequence and return.
            </p>

            <h3 style={conceptHeadingStyle}>Relational Restoration: Requires Another Person</h3>
            <p style={proseStyle}>
              When the infant's nervous system generates a relational signal — about belonging, connection, the state of the bond — the activation cannot complete through the body's own channels regardless of developmental stage. The signal's content is relational. The body generated activation about a relational condition. The designed resolution requires relational input: another person staying present, regulated, and available while the activation runs.
            </p>
            <p style={proseStyle}>
              This is not dependency. It is the design specification. The ventral vagal system — the evolutionary innovation <Link href="/framework/f1-emotional-gradient#autonomic-architecture" style={linkStyle}>F1</Link> described — evolved specifically to make this possible: safety-through-relationship as a biological pathway. Through co-regulation, the child's nervous system encodes that belonging signals complete when another person stays. That shame signals complete when another person remains present without withdrawing. That grief signals complete when another person holds the space while the activation runs.
            </p>

            <h3 style={conceptHeadingStyle}>When Co-Regulation Is Unavailable</h3>
            <p style={proseStyle}>
              For somatic signals: the child may still find partial completion through the body's own channels — crying, movement, discharge. The co-regulatory template that would teach the full sequence is missing, but the body's own mechanisms can partially clear somatic activation. The somatic pathway is degraded but not absent.
            </p>
            <p style={proseStyle}>
              For relational signals: there is no alternative pathway. The body generates signals about belonging, connection, rejection, shame — and the designed completion for those signals requires another person. When that person is unavailable, or is the source of the activation the signal is about, the relational signals have no completion pathway at all. The activation stays. The sequence that <Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link> maps runs with no resolution: incomplete biological restoration, unresolved activation load, the physical residue — cortisol, muscular tension, inflammatory compounds — accumulating. The system's resting point shifts upward.
            </p>
            <p style={proseStyle}>
              What the caregiver can hold determines which specific signals the child learns to complete. When the caregiver can stay present through the child's anger, the child's nervous system encodes that anger resolves. When the caregiver withdraws from grief, grief becomes a signal without a completion pathway. The learning is specific, not global.
            </p>

            {/* Section diagram: Two completion pathways — somatic (body's own channels, eventually autonomous) and relational (requires another person, cannot become fully autonomous) */}
            {/* Diagram type: static */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Porges (2011) — the ventral vagal system as the substrate for co-regulation; vagal tone entrainment between caregiver and infant. Schore (2003) — right-brain-to-right-brain attunement as the primary channel for affective transmission. Bowlby (1969) — the attachment system as a biological regulation mechanism. Ainsworth (1978) — the secure base: consistent co-regulation predicting regulatory capacity. Tronick (1998) — mutual regulation model. Levine (1997) — the body's activation sequence requires completion through discharge. Winnicott (1960) — "good enough" caregiving: sufficient, not perfect. McEwen (2000) — allostatic load: the cumulative cost of unresolved activation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The identification that co-regulation requires State Flexibility — not a caregiver permanently in Safety & Openness, but a nervous system that can access all states and return. The child learns the movement, not one state. The separation of co-regulation's developmental role by signal type: somatic signals learn restoration and eventually become autonomous; relational signals require co-regulation as their designed completion pathway and cannot become fully autonomous. When co-regulation is unavailable, somatic signals find partial completion while relational signals have no alternative pathway at all. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: WHAT DEVELOPS ───────────────────── */}
          <PartDivider label="PART 2" title="What Develops" color={accent} />

          {/* Concept 2: Three Awareness Capacities */}
          <section
            id="awareness-capacities"
            aria-labelledby="heading-awareness-capacities"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-awareness-capacities" style={sectionHeadingStyle(accent)}>
              Three Awareness Capacities as Developmental Products
            </h2>

            <p style={proseStyle}>
              Through the relational environment described above, three distinct awareness capacities develop — or fail to develop — in the child's nervous system. These capacities determine whether the person can perceive the Emotional Somatic Cycle while it is running. They also determine whether co-regulation can occur — whether two nervous systems can engage in the relational completion process that relational signals require.
            </p>
            <p style={proseStyle}>
              The three capacities operate through two separate biological substrates. Two of them share the interoceptive substrate: the anterior insula, ventral vagal pathways, and visceral afferents — the hardware that reads the body from the inside. The third operates through a separate substrate entirely: the amygdala and prefrontal cortex — the hardware that reads other bodies from the outside. What co-regulation builds, at the deepest level, is the interoceptive substrate.
            </p>

            <h3 style={conceptHeadingStyle}>Perceiving What Others Feel</h3>
            <p style={proseStyle}>
              The capacity to detect and interpret others' emotional states through external channels: facial expression, vocal prosody, body language, behavioral patterns. This is a cognitive capacity — it operates through observation and interpretation, not through the body's own felt experience. This is Interpersonal Affect Perception (RE) — a CLS capacity operating through the external observation substrate.
            </p>
            <p style={proseStyle}>
              This capacity develops through the caregiver's own perceptual accuracy. A caregiver who reads the child's signals and responds to what the child is actually experiencing provides an environment where the child's affect perception calibrates toward accuracy. In an unpredictable environment, affect perception overdevelops into hypervigilance — the child reads everything because survival depends on detecting the change before it arrives. In an incongruent environment, it calibrates to surface performance rather than authenticity.
            </p>

            <h3 style={conceptHeadingStyle}>Resonating With What Others Feel</h3>
            <p style={proseStyle}>
              The somatic, pre-cognitive capacity to share another person's affective state. When someone nearby is in pain and the body produces a physiological echo of that pain — not a thought about their pain, but a felt version of it in one's own muscles, chest, gut — that is the second capacity. This operates through interoceptive channels — the anterior insula mapping others' expressions onto one's own internal felt experience, the ventral vagal pathways carrying the relational signal. This is Affective Resonance (ER) — an ESS capacity operating through the interoceptive substrate.
            </p>
            <p style={proseStyle}>
              This capacity is what makes relational completion possible between two nervous systems. A caregiver who can feel with the child without being overwhelmed — who resonates with the child's distress while remaining regulated enough to provide co-regulation — models that resonance is survivable. A caregiver who floods teaches the child's nervous system that resonance is dangerous. A caregiver whose resonance is shut down cannot enter the shared physiological field that relational completion requires.
            </p>

            <h3 style={conceptHeadingStyle}>Perceiving One's Own Internal States</h3>
            <p style={proseStyle}>
              The capacity to perceive, differentiate, and identify one's own hormonal shifts, muscular tension, and autonomic changes while they are happening. The bridge between the body's signals and the person's awareness of those signals. When this capacity is online, the person can say: "I feel anger rising" — they can have the feeling without being consumed by it. This is the developmental resolution of the pre-reflective condition described above. This is Interoceptive Self-Awareness (SEA) — the bridge between the ESS and the CLS, operating through the interoceptive substrate.
            </p>
            <p style={proseStyle}>
              This capacity develops through the caregiver's own interoceptive self-awareness — whether the caregiver can perceive, name, and tolerate their own internal states. A caregiver who treats their own physiological signals as information provides the conditions for the child's self-awareness to develop. A caregiver who actively contradicts the child's experience — "You're not angry," "That didn't hurt" — teaches the child that the signals the nervous system generates are unreliable, to be overridden rather than read.
            </p>

            <h3 style={conceptHeadingStyle}>The Developmental Sequence</h3>
            <p style={proseStyle}>
              RE operates through the external observation substrate — separate hardware. It survives every chronic state and often sharpens under chronic activation, because with interoceptive channels degraded, the CLS concentrates on the one remaining data source.
            </p>
            <p style={proseStyle}>
              ER and SEA both operate through the interoceptive substrate. ER applies this substrate outward: translating another person's expressed state onto the body's own internal landscape. SEA applies it inward: registering the body's own shifts as readable information that reaches the CLS.
            </p>
            <p style={proseStyle}>
              The developmental direction between them is specific. When the child's nervous system develops the capacity to register its own signals as information — when the anterior insula can map the body's own state into identifiable experience — the same substrate becomes available for mapping the somatic echo of another person's state. The inward mapping is the foundational use. Once it is active, the outward mapping can draw on it.
            </p>
            <p style={proseStyle}>
              The reverse does not hold. A child whose ER floods — whose body absorbs others' states without filter — does not thereby develop SEA. The substrate is active for outward resonance but the signals are not parsed, not differentiated, not held as self-referential information. This explains why SEA absence consistently co-occurs with flooded ER: without the inward application providing an anchor, the outward application has no reference point — the person resonates with everything and cannot locate which activation is theirs.
            </p>

            {/* Section diagram: Two substrates, three capacities — RE on external observation substrate, ER and SEA on interoceptive substrate, with developmental direction from SEA (inward) to ER (outward) */}
            {/* Diagram type: static */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Decety & Jackson (2004) — empathy as multi-component: cognitive empathy, affective empathy, and self-referential processing as dissociable capacities. Singer & Lamm (2009) — distinct neural substrates for cognitive and affective empathy. Blair (2005) — dissociable empathy components with independent developmental trajectories. Craig (2002) — interoceptive awareness as a developmental capacity with a maturing neural substrate. Schore (2003) — right-hemisphere development through attuned caregiving. Fonagy et al. (2002) — mentalization as a developmental product of contingent mirroring.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The identification that what co-regulation builds at the substrate level is the interoceptive hardware — and that the three capacities operate through two substrates, explaining structurally why specific separation patterns occur. The developmental mechanism for each capacity traced to a specific aspect of the caregiver's profile. The developmental sequence: SEA (inward application) is the entry point — building the inward channel activates the substrate for sustainable outward use (ER), but flooding the outward channel does not build the inward one. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: WHEN DEVELOPMENT IS DISRUPTED ───── */}
          <PartDivider label="PART 3" title="When Development Is Disrupted" color={accent} />

          {/* Concept 3: Three Developmental Disruption Conditions */}
          <section
            id="disruption-conditions"
            aria-labelledby="heading-disruption-conditions"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-disruption-conditions" style={sectionHeadingStyle(accent)}>
              Three Developmental Disruption Conditions
            </h2>

            <p style={proseStyle}>
              When the caregiver's nervous system cannot provide sufficient co-regulation — because the caregiver's own restoration pathway was never built, because their own capacity profile carries the gaps their own developmental environment produced — the child's system develops under conditions that shape each awareness capacity in specific, traceable ways.
            </p>
            <p style={proseStyle}>
              Three conditions emerge from three distinct caregiver profiles. Each produces a different developmental outcome. These are not personality types of caregivers. They are capacity profiles — the predictable product of the caregiver's own developmental history operating through the same mechanism one generation earlier.
            </p>

            <h3 style={conceptHeadingStyle}>Condition 1: The Unpredictable Affective Environment</h3>
            <p style={proseStyle}>
              The caregiver's nervous system fluctuates unpredictably between Safety & Openness and Threat & Defence. Sometimes the ventral vagal system is online and co-regulation occurs. Sometimes sympathetic activation takes over and the caregiver becomes the source of threat. Their own RE is hyperactive — scanning for threat. Their ER is dysregulated — flooding or shutting down without pattern. Their SEA is absent — they do not perceive the fluctuation between states as fluctuation. Each state feels like "how things are right now."
            </p>
            <p style={proseStyle}>
              What develops in the child: RE overdevelops into hypervigilance — survival requires detecting the shift before it arrives. ER either floods or shuts down. SEA does not develop — all perceptual resources are directed outward. The relational completion pathway is disrupted: the same person who sometimes provides co-regulation sometimes provides threat. The child's nervous system cannot encode a reliable restoration sequence. The interoceptive substrate develops unstably — partially built, never consolidated.
            </p>

            <h3 style={conceptHeadingStyle}>Condition 2: The Incongruent Affective Environment</h3>
            <p style={proseStyle}>
              The caregiver's nervous system is organized around Strategy & Management while presenting Safety & Openness. Their RE is accurate — they read what the child is feeling. But their ER is disconnected from what they express — they know what the child feels without feeling it themselves. Their SEA is narrative-filtered: "I'm fine" while cortisol is elevated and muscles are braced. The surface says safe; the autonomic state is organized around threat management.
            </p>
            <p style={proseStyle}>
              What develops in the child: RE calibrates to surface performance rather than authenticity. ER becomes confused and distrusted — the child's body resonates with the caregiver's underlying state while the caregiver's presentation declares that state does not exist. SEA is actively undermined — "You're not angry," "That didn't happen." The relational completion pathway is misdirected: the child learns to regulate toward what the caregiver's narrative requires, not toward their own physiological baseline. The interoceptive substrate is active — ER develops because the hardware is generating signals — but SEA is contradicted. The interoceptive access is contested: signals arrive, the CLS has been taught to distrust them.
            </p>

            <h3 style={conceptHeadingStyle}>Condition 3: The Invalidating Affective Environment</h3>
            <p style={proseStyle}>
              The caregiver's RE is instrumental — reading the child for compliance and control. ER is shut down. SEA is absent. The caregiver's nervous system is chronically organized around Strategy & Management or Power & Dominance — experienced not as a stuck state but as competence, as maturity.
            </p>
            <p style={proseStyle}>
              The caregiver transmits their nervous system state while being unaware it is one. They cannot offer what they cannot perceive — and they cannot perceive it because perceiving their own autonomic configuration as a configuration would require the SEA their own developmental environment did not build.
            </p>
            <p style={proseStyle}>
              What develops in the child: RE develops instrumentally — reading for what the environment demands. ER shuts down — affect was punished or treated as weakness. SEA never develops — internal experience is explicitly declared wrong: "Don't be so sensitive," "Stop crying." The relational completion pathway is blocked: the child learns to suppress activation rather than complete it. The interoceptive substrate is never built — the anterior insula never develops the mapping precision that co-regulation would have provided.
            </p>
            <p style={proseStyle}>
              When a culture teaches "logic over emotion" or "boys don't cry," it performs this invalidation across entire populations. The adults delivering these messages are themselves the product of the same developmental conditions. The culture does not produce the condition. The condition produces the culture. And the culture reproduces the condition.
            </p>

            {/* Section diagram: Three conditions mapped to caregiver profiles and substrate states — unpredictable (unstable), incongruent (contested), invalidating (absent) */}
            {/* Diagram type: static */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Van der Kolk (2014) — developmental environments and their long-term autonomic consequences. Linehan (1993) — the invalidating environment as a specific developmental condition. Porges (2011) — neuroception: the nervous system evaluating safety through physiological signals, not words. Schore (2003) — right-hemisphere development shaped by attuned caregiving. Main & Hesse (1990) — the caregiver as simultaneous source of safety and threat in disorganized attachment.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The mapping of three adverse conditions to three specific caregiver capacity profiles — each producing traceable outcomes. Each condition disrupts the relational completion pathway through a different mechanism (unreliable, misdirected, blocked) and sets the interoceptive substrate to a specific state (unstable, contested, absent). In each condition, the caregiver does not perceive their own state as a state — transmitting the condition while unaware they are in one. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 4: The Developmental Consequence */}
          <section
            id="developmental-consequence"
            aria-labelledby="heading-developmental-consequence"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-developmental-consequence" style={sectionHeadingStyle(accent)}>
              The Developmental Consequence
            </h2>

            <p style={proseStyle}>
              When relational signals accumulate without resolution — every signal the nervous system generated about belonging, connection, rejection, shame — the consequences follow a specific sequence.
            </p>
            <p style={proseStyle}>
              First: sustained activation. The child's nervous system remains in a defensive configuration after the activating event has passed. What <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link> describes as Baseline Elevation begins — resting cortisol, resting muscle tension, and resting inflammatory markers remain chronically elevated.
            </p>
            <p style={proseStyle}>
              Second: a chronic defensive state. One nervous system state becomes the default operating position regardless of context — the only state the system has learned to sustain, because the return pathway was never encoded through co-regulation.
            </p>
            <p style={proseStyle}>
              Third: loss of state flexibility. The system that should shift fluidly across the gradient is locked. Not because the biological mechanism is broken. Because the return pathway was never wired — and the relational signals whose resolution would require relational completion are still running, still unresolved.
            </p>
            <p style={proseStyle}>
              From inside, the locked state does not feel like a lock. It feels like accurate perception. The person whose nervous system is chronically organized around Strategy & Management — cortisol chronically elevated, cognitive systems organized around anticipation and control — experiences this as competence. Each locked state is invisible to the person inside it because perceiving one's own nervous system configuration as a configuration requires the SEA that the developmental conditions did not build.
            </p>

            <h3 style={conceptHeadingStyle}>What Development Sets</h3>
            <p style={proseStyle}>
              The three conditions produce different capacity profiles. But the profiles are products of something deeper: the state of the interoceptive substrate — the single upstream variable that determines the entire downstream awareness architecture. The developmental conditions set this substrate's state — and the state determines what data the CLS receives, what coherence the CLS builds, and whether the person can observe the Emotional Somatic Cycle while it is running.
            </p>
            <p style={proseStyle}>
              With sufficient co-regulation, the substrate is built. SEA comes online. ER is sustainable. The CLS receives the ESS's physiological data and builds narrative that reflects what the body is actually doing — complex, sometimes uncomfortable, biologically accurate.
            </p>
            <p style={proseStyle}>
              Under invalidating conditions, the substrate is never built. The CLS receives only external reading through RE and its own cognitive output. It constructs narrative without the body — structurally unaware the body's signals are missing, because it has never received them.
            </p>
            <p style={proseStyle}>
              Under incongruent conditions, the substrate is active — ER develops — but SEA is contradicted. The CLS receives contested data: the body says one thing, the narrative built from years of "that's not really what's happening" says another.
            </p>
            <p style={proseStyle}>
              RE sits outside this chain — on separate hardware, feeding the CLS regardless. The CLS always has data. The question is not whether the CLS has data but whether the CLS has data from its own body. This is why the narrative the CLS builds when interoceptive access is absent can feel so complete — the CLS has RE, it has its own reasoning. It is missing the one source that would make the narrative biologically accurate.
            </p>

            <h3 style={conceptHeadingStyle}>Intergenerational Transmission</h3>
            <p style={proseStyle}>
              The capacity profile replicates across generations without anyone choosing to transmit it. The transmission unit is not beliefs, intentions, or parenting philosophy. It is the caregiver's autonomic state and capacity profile — the same variables that shaped the child's development now operating one generation forward. The four nervous system states are the transmission mechanism: the caregiver's chronic state determines which awareness capacities are available, the child develops a capacity profile that produces a chronic state, and that state becomes the next child's developmental environment.
            </p>
            <p style={proseStyle}>
              Each link in the chain is invisible to the person carrying it — because each person experiences their chronic state as identity, not as a nervous system configuration. The chain replicates until the capacity profile changes. Not until behavior changes. Not until intention changes. Until the caregiver's own nervous system develops capacities it did not have — through the same relational conditions that would have built them in the first place.
            </p>

            {/* Section diagram: The developmental through-line — from substrate state through interoceptive access through capacities through coherence form */}
            {/* Diagram type: static */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Van der Kolk (2014) — chronic autonomic states as products of developmental conditions. Porges (2011) — loss of autonomic flexibility under chronic activation. McEwen (2000) — allostatic load: the cumulative physiological cost of sustained activation without resolution. Main & Hesse (1990) — unresolved attachment in parents predicting disorganized attachment in children. Levine (1997) — the body carrying unresolved activation forward when the completion sequence was never learned.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The developmental through-line: what the conditions set is the state of the interoceptive substrate, determining the chain from substrate through access through capacities through data through coherence through observability through Path A or Path B. Three developmental paths mapped to substrate states and coherence forms. The intergenerational transmission mechanism as the same variables operating one generation forward — the four states as the transmission mechanism, each link invisible to the person carrying it. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={accent}
            items={[
              {
                term: "The pre-reflective starting condition",
                definition: "Before self-observation matures, experience is identity. The infant absorbs caregiver feedback as self-definition. Without the capacity to locate activation in the environment, the nervous system attributes it to the self.",
              },
              {
                term: "Co-regulation as designed completion pathway",
                definition: "Not emotional support — one regulated nervous system teaching another the path back to physiological baseline. The mechanism through which both somatic and relational restoration are learned.",
              },
              {
                term: "State Flexibility",
                definition: "The child needs a caregiver who can access all states and return to physiological baseline after each. The child learns the movement, not one state.",
              },
              {
                term: "Signal-specific learning",
                definition: "What the caregiver could hold is what the child learns to complete. The learning is specific, not global.",
              },
              {
                term: "Interpersonal Affect Perception (RE)",
                definition: "The capacity to perceive others' emotional states through external channels. A CLS capacity operating through the external observation substrate. Survives every chronic state.",
              },
              {
                term: "Affective Resonance (ER)",
                definition: "The somatic, pre-cognitive capacity to share another person's affective state. An ESS capacity operating through the interoceptive substrate. The biological substrate of co-regulation.",
              },
              {
                term: "Interoceptive Self-Awareness (SEA)",
                definition: "The capacity to perceive one's own internal states while they are happening. The bridge between the ESS and the CLS. The developmental entry point — building the inward channel activates the substrate for sustainable outward use.",
              },
              {
                term: "Three adverse conditions",
                definition: "Unpredictable (unreliable completion, unstable substrate), incongruent (misdirected completion, contested substrate), invalidating (blocked completion, absent substrate). Each produced by a caregiver capacity profile.",
              },
              {
                term: "The invisibility principle",
                definition: "In each condition, the caregiver transmits their state while unaware it is one — because perceiving it requires the SEA their state suppresses.",
              },
              {
                term: "The developmental through-line",
                definition: "What the conditions set is the state of the interoceptive substrate. The chain: substrate to access to capacities to data to coherence to observability to Path A or Path B. RE sits outside this chain on separate hardware.",
              },
              {
                term: "Intergenerational transmission",
                definition: "The four states are the transmission mechanism. The caregiver's capacity profile IS the child's developmental environment. Each link invisible to the person carrying it. The chain replicates until the capacity profile changes.",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={accent}
            established="F2 established how the system gets calibrated — the pre-reflective starting condition, co-regulation and the two completion pathways, three awareness capacities as developmental products, three adverse conditions that disrupt development, and the consequence: chronic states, unresolved relational signals, and intergenerational transmission."
            question="But childhood ends, and the calibration persists. When higher-order cognition arrives inside a nervous system already shaped by its developmental conditions — carrying the accumulated debris of every relational signal that never found completion — does cognition passively inherit the calibration, or does it actively maintain it?"
            nextFramework="F3"
            nextTitle="Adult Cognition & False Coherence"
            nextHref="/framework/f3-false-coherence"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={accent}
            connections={[
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "F2 describes how states become chronic in the first place — when the body's restoration sequence was never learned through co-regulation. M2 maps the four states and what each enables and restricts.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "F2 describes how the three awareness capacities develop through the relational environment and names them by their developmental mechanism. M4 maps the architecture — two substrates, three capacities, and what each configuration produces.",
              },
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "F2 describes the developmental origin of what M3 maps as Path B — when co-regulation is unavailable, the M3 sequence runs on relational signals with no resolution.",
              },
              {
                id: "F1: The Emotional Gradient",
                href: "/framework/f1-emotional-gradient",
                description: "F1 is the instrument. F2 is the calibration. F1 described the system's biological architecture and the two completion pathways. F2 describes how each person's instance gets configured through the relational environment.",
              },
              {
                id: "F3: Adult Cognition & False Coherence",
                href: "/framework/f3-false-coherence",
                description: "F2 describes how the calibration is set during development. F3 describes why it persists — how cognition actively maintains the configuration through narrative substitution.",
              },
              {
                id: "F8: Individual Repair",
                href: "/framework/f8-individual-repair",
                description: "F2 and F8 are structural counterparts on the regulation thread. F2 describes the restoration pathway not being built. F8 describes the restoration pathway being rebuilt — awareness restored through safety, not instruction.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={accent}
            items={[
              { label: "Continue to F3 — why the calibration persists into adulthood", href: "/framework/f3-false-coherence", linkText: "F3: Adult Cognition & False Coherence \u2192" },
              { label: "See the awareness architecture mapped in full", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "See the restoration mechanism in detail", href: "/model/m3-regulation-capacities", linkText: "M3: Regulation Capacities \u2192" },
              { label: "Return to the biological origin", href: "/framework/f1-emotional-gradient", linkText: "F1: The Emotional Gradient \u2192" },
              { label: "Explore all 12 frameworks", href: "/frameworks-map", linkText: "Framework Map \u2192" },
              { label: "Look up key terms", href: "/glossary", linkText: "Glossary \u2192" },
              { label: "Experience the tools", href: "https://teg-blue.com/emotional-tools", linkText: "Emotional Tools (teg-blue.com) \u2192", external: true },
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
            "@id": "https://teg-blue.org/framework/f2-awareness-calibration#article",
            headline: "Developmental Calibration: How the Relational Environment Calibrates the Emotional Somatic Cycle",
            description:
              "How co-regulation calibrates the Emotional Somatic Cycle — three awareness capacities as developmental products of the relational environment, three adverse conditions, and the intergenerational transmission mechanism. Framework F2 of the TEG-Blue 12-framework system.",
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
            dateModified: "2026-04-05",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue 12 Framework System",
              url: "https://teg-blue.org/frameworks-map",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/framework/f2-awareness-calibration",
            },
            about: [
              { "@type": "Thing", name: "Developmental Calibration" },
              { "@type": "Thing", name: "Co-Regulation" },
              { "@type": "Thing", name: "Awareness Capacities" },
              { "@type": "Thing", name: "Interoceptive Self-Awareness" },
              { "@type": "Thing", name: "Intergenerational Transmission" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
              { "@type": "ScholarlyArticle", name: "Affect Regulation and the Origin of the Self (Schore, 2003)" },
              { "@type": "ScholarlyArticle", name: "The Developing Mind (Siegel, 2012)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Waking the Tiger (Levine, 1997)" },
              { "@type": "ScholarlyArticle", name: "The Maturational Processes (Winnicott, 1960)" },
              { "@type": "ScholarlyArticle", name: "Patterns of Attachment (Ainsworth, 1978)" },
            ],
            keywords: [
              "developmental calibration",
              "co-regulation",
              "awareness capacities",
              "interoceptive self-awareness",
              "intergenerational transmission",
              "biological restoration",
              "relational completion",
              "attachment theory",
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
              { name: "F2: Developmental Calibration", url: "/framework/f2-awareness-calibration" },
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
                question: "What is co-regulation in the TEG-Blue system?",
                answer:
                  "Co-regulation is the designed completion pathway for relational signals — not emotional support, but one regulated nervous system teaching another the path back to physiological baseline. Through thousands of co-regulatory moments, the caregiver's physiological state provides a template the child's nervous system entrains toward, encoding the restoration sequence as a capacity.",
              },
              {
                question: "What are the three awareness capacities?",
                answer:
                  "Interpersonal Affect Perception (RE) perceives others' emotional states through external channels — a CLS capacity. Affective Resonance (ER) produces a somatic echo of another's state — an ESS capacity. Interoceptive Self-Awareness (SEA) perceives one's own internal states — the bridge between the ESS and the CLS. They operate through two separate biological substrates.",
              },
              {
                question: "How do emotional patterns transmit across generations?",
                answer:
                  "The caregiver's capacity profile IS the child's developmental environment. The four nervous system states are the transmission mechanism: the caregiver's chronic state determines which awareness capacities are available in the co-regulatory environment, the child develops a profile that produces a chronic state, and that state becomes the next child's environment. Each link is invisible to the person carrying it.",
              },
              {
                question: "What are the three developmental disruption conditions?",
                answer:
                  "Unpredictable environments (caregiver fluctuates between safety and threat — unreliable completion, unstable substrate). Incongruent environments (caregiver presents safety while autonomically organized around threat — misdirected completion, contested substrate). Invalidating environments (caregiver's affect perception is instrumental, resonance shut down — blocked completion, absent substrate).",
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
              name: "Developmental Calibration (F2) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f2-awareness-calibration",
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
