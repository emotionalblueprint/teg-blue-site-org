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
  { label: "Common Understanding", href: "#common-understanding", description: "What most people think these words mean — and what the nervous system is actually doing." },
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
  const P = { A: PATTERN.A.primary, B: PATTERN.B.primary, C: PATTERN.C.primary, D: PATTERN.D.primary };

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
            description="The nervous system's capacity to complete its own stress response is not innate — it is learned through the relational environment. When a caregiver's regulated nervous system stays present through a child's activation, it teaches the child's nervous system the path back to physiological rest. This framework describes what that learning builds, what happens when the relational environment cannot provide it, and what the nervous system carries forward when its signals have no completion pathway at all."
            group="Individual"
            groupLabel="Individual Arc · F1–F3"
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
                  The child needs a caregiver with State Flexibility — a nervous system that can access all four states when needed and return to physiological baseline after each — the child learns the movement, not one state
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
          <PartDivider label="PART 1" title="The Learning Pathway" color={P.A} />

          {/* Concept 0: The Pre-Reflective Starting Condition */}
          <section
            id="pre-reflective"
            aria-labelledby="heading-pre-reflective"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-pre-reflective" style={sectionHeadingStyle(P.B)}>
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

            {/* Section diagram placeholder */}
            {/* Diagram type: static — pre-reflective condition, signal as identity */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
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
            <h2 id="heading-co-regulation" style={sectionHeadingStyle(P.B)}>
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
              What the child needs is not a caregiver permanently in Safety & Openness. It is a caregiver with <strong style={{ color: TEXT.primary }}>State Flexibility</strong> — a nervous system that can access all four states when needed and return to physiological baseline after each. Safety & Openness to co-regulate and be present while the child's activation runs. Threat & Defence to protect the child from actual danger. Strategy & Management to navigate problems the child cannot handle alone. And the return to baseline after each — the system settling back, the body at rest.
            </p>
            <p style={proseStyle}>
              The child does not learn one state. The child learns the movement. A caregiver who can shift into Threat & Defence to protect, then settle back to co-regulate the child's fear — that nervous system teaches the child that activation resolves. That all states are temporary because the child witnesses a nervous system that moves through them and returns.
            </p>
            <p style={proseStyle}>
              A caregiver whose nervous system is chronically stuck in any state cannot provide this. A caregiver chronically in Strategy & Management may appear regulated — composed, controlled, competent — but the ventral vagal system is suppressed in that state. They can manage the child. They cannot co-regulate with the child. Each stuck caregiver offers only what one state allows, and critically, never models the return to physiological baseline. The child's nervous system never encounters the full range — and never learns that activation is temporary.
            </p>
            <p style={proseStyle}>
              Through thousands of repetitions, the child's nervous system encodes the somatic restoration sequence as an autonomous capacity. The child learns, at the level of the nervous system, that somatic activation resolves — that the body can complete the sequence and return.
            </p>

            <h3 style={conceptHeadingStyle}>Relational Restoration: Requires Another Person</h3>
            <p style={proseStyle}>
              When the infant's nervous system generates a relational signal — about belonging, connection, the state of the bond — the activation cannot complete through the body's own channels regardless of developmental stage. The signal's content is relational. The body generated activation about a relational condition. The designed resolution requires relational input: another person staying present, regulated, and available while the activation runs.
            </p>
            <p style={proseStyle}>
              The ventral vagal system — the evolutionary innovation <Link href="/framework/f1-emotional-gradient#autonomic-architecture" style={linkStyle}>F1</Link> described — evolved specifically to make this possible: safety-through-relationship as a biological pathway. Through co-regulation, the child's nervous system encodes that belonging signals complete when another person stays. That shame signals complete when another person remains present without withdrawing. That grief signals complete when another person holds the space while the activation runs.
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
            <p style={proseStyle}>
              The transmission channel is somatic and implicit. Schore (2003) describes it as right-brain-to-right-brain attunement — the caregiver's right hemisphere communicating with the child's right hemisphere through tone, rhythm, facial expression, and physical contact. Children calibrate to what caregivers' nervous systems embody, not to what caregivers say. A caregiver who says "it's okay" while their own cortisol is elevated and muscles are braced transmits the physiological state, not the verbal message.
            </p>
            <p style={proseStyle}>
              The caregiver does not need to be perfectly regulated. The caregiver needs to be regulated enough — their own nervous system capable of returning to physiological baseline after activation often enough that the child's nervous system encounters the restoration sequence as a repeatable experience. Repair matters as much as attunement. A caregiver who becomes dysregulated and returns models the full range of the restoration sequence — that activation can escalate and the system can still come back.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — two completion pathways, somatic and relational */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Porges (2011) — the ventral vagal system as the substrate for co-regulation; vagal tone entrainment between caregiver and infant. Schore (2003) — right-brain-to-right-brain attunement as the primary channel for affective transmission. Bowlby (1969) — the attachment system as a biological regulation mechanism. Ainsworth (1978) — the secure base: consistent co-regulation predicting regulatory capacity. Tronick (1998) — mutual regulation model. Levine (1997) — the body's activation sequence requires completion through discharge. Winnicott (1960) — "good enough" caregiving: sufficient, not perfect. McEwen (2000) — allostatic load: the cumulative cost of unresolved activation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The identification that co-regulation requires State Flexibility — not a caregiver permanently in Safety & Openness, but a nervous system that can access all states and return. The child learns the movement, not one state. The separation of co-regulation's developmental role by signal type: somatic signals learn restoration and eventually become autonomous; relational signals require co-regulation as their designed completion pathway and cannot become fully autonomous. When co-regulation is unavailable, somatic signals find partial completion while relational signals have no alternative pathway at all. The signal-specific learning principle: what the caregiver could hold is what the child learns to complete. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: WHAT DEVELOPS ───────────────────── */}
          <PartDivider label="PART 2" title="What Develops" color={P.B} />

          {/* Concept 2: Three Awareness Capacities */}
          <section
            id="awareness-capacities"
            aria-labelledby="heading-awareness-capacities"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-awareness-capacities" style={sectionHeadingStyle(P.B)}>
              Three Awareness Capacities as Developmental Products
            </h2>

            <p style={proseStyle}>
              Through the relational environment described above, three distinct awareness capacities develop — or fail to develop — in the child's nervous system. These capacities determine whether the person can perceive the Emotional Somatic Cycle while it is running. They also determine whether co-regulation can occur — whether two nervous systems can engage in the relational completion process that relational signals require.
            </p>
            <p style={proseStyle}>
              The three capacities operate through two separate biological substrates. Two of them share the interoceptive substrate: the anterior insula, ventral vagal pathways, and visceral afferents — the hardware that reads the body from the inside. The third operates through a separate substrate entirely: the amygdala and prefrontal cortex — the hardware that reads other bodies from the outside (<Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link> maps this architecture in full). What co-regulation builds, at the deepest level, is the interoceptive substrate.
            </p>

            <h3 style={conceptHeadingStyle}>Perceiving What Others Feel</h3>
            <p style={proseStyle}>
              The capacity to detect and interpret others' emotional states through external channels: facial expression, vocal prosody, body language, behavioral patterns. This is a cognitive capacity — it operates through observation and interpretation, not through the body's own felt experience. This is <strong style={{ color: TEXT.primary }}>Interpersonal Affect Perception (RE)</strong> — a CLS capacity operating through the external observation substrate.
            </p>
            <p style={proseStyle}>
              This capacity develops through the caregiver's own perceptual accuracy. A caregiver who reads the child's signals and responds to what the child is actually experiencing provides an environment where the child's affect perception calibrates toward accuracy. In an unpredictable environment, affect perception overdevelops into hypervigilance — the child reads everything because survival depends on detecting the change before it arrives. In an incongruent environment, it calibrates to surface performance rather than authenticity.
            </p>

            <h3 style={conceptHeadingStyle}>Resonating With What Others Feel</h3>
            <p style={proseStyle}>
              The somatic, pre-cognitive capacity to share another person's affective state. When someone nearby is in pain and the body produces a physiological echo of that pain — not a thought about their pain, but a felt version of it in one's own muscles, chest, gut — that is the second capacity. This operates through interoceptive channels — the anterior insula mapping others' expressions onto one's own internal felt experience, the ventral vagal pathways carrying the relational signal. This is <strong style={{ color: TEXT.primary }}>Affective Resonance (ER)</strong> — an ESS capacity operating through the interoceptive substrate.
            </p>
            <p style={proseStyle}>
              This capacity is what makes relational completion possible between two nervous systems. A caregiver who can feel with the child without being overwhelmed — who resonates with the child's distress while remaining regulated enough to provide co-regulation — models that resonance is survivable. A caregiver who floods teaches the child's nervous system that resonance is dangerous. A caregiver whose resonance is shut down cannot enter the shared physiological field that relational completion requires — the child's relational signals stay unresolved, not because the caregiver is absent, but because the biological substrate for relational completion is not available in the caregiver.
            </p>

            <h3 style={conceptHeadingStyle}>Perceiving One's Own Internal States</h3>
            <p style={proseStyle}>
              The capacity to perceive, differentiate, and identify one's own hormonal shifts, muscular tension, and autonomic changes while they are happening. The bridge between the body's signals and the person's awareness of those signals. When this capacity is online, the person can say: "I feel anger rising" — they can have the feeling without being consumed by it. This is the developmental resolution of the pre-reflective condition described above. This is <strong style={{ color: TEXT.primary }}>Interoceptive Self-Awareness (SEA)</strong> — the bridge between the ESS and the CLS, operating through the interoceptive substrate.
            </p>
            <p style={proseStyle}>
              This capacity develops through the caregiver's own interoceptive self-awareness — whether the caregiver can perceive, name, and tolerate their own internal states. A caregiver who treats their own physiological signals as information provides the conditions for the child's self-awareness to develop. The caregiver mirrors back what the child appears to be experiencing, providing a relational scaffold for the child's own interoceptive development. A caregiver who actively contradicts the child's experience — "You're not angry," "That didn't hurt," "Stop being so sensitive" — teaches the child that the signals the nervous system generates are unreliable, to be overridden rather than read. The pre-reflective condition persists: the person continues to operate without the capacity to separate what they feel from what they are.
            </p>

            <h3 style={conceptHeadingStyle}>What Co-Regulation Builds</h3>
            <p style={proseStyle}>
              RE operates through the external observation substrate — separate hardware from the other two capacities. It develops through the caregiver's perceptual accuracy and is unaffected by the state of the interoceptive substrate. RE survives every chronic state — and often sharpens under chronic activation, because with the interoceptive channels degraded, the CLS's cognitive resources concentrate on the one remaining data source.
            </p>
            <p style={proseStyle}>
              ER and SEA both operate through the interoceptive substrate. ER applies this substrate outward: translating another person's expressed state onto the body's own internal landscape — the most demanding use of the substrate. SEA applies it inward: registering the body's own hormonal shifts, muscular tension, and autonomic changes as readable information that reaches the CLS.
            </p>
            <p style={proseStyle}>
              What co-regulation builds is this interoceptive substrate. When the caregiver stays present through the child's activation — when one regulated nervous system entrains an activated one through thousands of repetitions — the anterior insula develops its mapping precision and the ventral vagal pathways develop their carrying capacity. The substrate comes online. The capacities built on it become available.
            </p>

            <h3 style={conceptHeadingStyle}>The Developmental Sequence</h3>
            <p style={proseStyle}>
              ER and SEA share the interoceptive substrate — but the developmental direction between them is specific. When the child's nervous system develops the capacity to register its own signals as information — when the anterior insula can map the body's own state into identifiable experience — the same substrate becomes available for mapping the somatic echo of another person's state. The inward mapping is the foundational use. Once it is active, the outward mapping can draw on it.
            </p>
            <p style={proseStyle}>
              The reverse does not hold. A child whose ER floods — whose body absorbs others' states without filter — does not thereby develop SEA. The substrate is active for outward resonance but the signals are not parsed, not differentiated, not held as self-referential information. This explains why SEA absence consistently co-occurs with flooded ER: without the inward application providing an anchor, the outward application has no reference point — the person resonates with everything and cannot locate which activation is theirs. And it explains why building SEA improves ER: the substrate, activated for inward use, becomes available for sustainable outward use.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — two substrates, three capacities, developmental direction */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Decety & Jackson (2004) — empathy as multi-component: cognitive empathy, affective empathy, and self-referential processing as dissociable capacities. Singer & Lamm (2009) — distinct neural substrates for cognitive and affective empathy. Blair (2005) — dissociable empathy components with independent developmental trajectories. Craig (2002) — interoceptive awareness as a developmental capacity with a maturing neural substrate. Schore (2003) — right-hemisphere development through attuned caregiving. Fonagy et al. (2002) — mentalization as a developmental product of contingent mirroring. Bandura (1977) — social modelling: the child calibrates to what is embodied, not what is instructed.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The identification that what co-regulation builds at the substrate level is the interoceptive hardware — and that the three capacities operate through two substrates, explaining structurally why specific separation patterns occur. The developmental mechanism for each capacity traced to a specific aspect of the caregiver's profile. The developmental sequence: SEA (inward application) is the entry point — building the inward channel activates the substrate for sustainable outward use (ER), but flooding the outward channel does not build the inward one. The connection between the three awareness capacities and the relational completion pathway: these capacities are the biological substrate that determines whether co-regulation can occur. The caregiver's capacity profile IS the child's developmental environment. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: WHEN DEVELOPMENT IS DISRUPTED ───── */}
          <PartDivider label="PART 3" title="When Development Is Disrupted" color={P.C} />

          {/* Concept 3: Three Developmental Disruption Conditions */}
          <section
            id="disruption-conditions"
            aria-labelledby="heading-disruption-conditions"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-disruption-conditions" style={sectionHeadingStyle(P.B)}>
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
              The caregiver's nervous system fluctuates unpredictably between Safety & Openness and Threat & Defence. Sometimes the ventral vagal system is online and co-regulation occurs. Sometimes sympathetic activation takes over and the caregiver becomes the source of threat. Their own RE is hyperactive — scanning for threat. Their ER is dysregulated — flooding or shutting down without pattern. Their SEA is absent — they do not perceive the fluctuation between states as fluctuation. Each state feels like "how things are right now." The caregiver does not experience themselves as shifting between configurations. They experience the world as changing around them.
            </p>
            <p style={proseStyle}>
              What develops in the child: RE overdevelops into hypervigilance — survival requires detecting the shift before it arrives. ER either floods or shuts down. SEA does not develop — all perceptual resources are directed outward. The relational completion pathway is disrupted: the same person who sometimes provides co-regulation sometimes provides threat. The child's nervous system cannot encode a reliable restoration sequence because the evidence is contradictory. The interoceptive substrate develops unstably — partially built, never consolidated.
            </p>

            <h3 style={conceptHeadingStyle}>Condition 2: The Incongruent Affective Environment</h3>
            <p style={proseStyle}>
              The caregiver's nervous system is organized around Strategy & Management while presenting Safety & Openness. Their RE is accurate — they read what the child is feeling. But their ER is disconnected from what they express — they know what the child feels without feeling it themselves. Their SEA is narrative-filtered: "I'm fine" while cortisol is elevated and muscles are braced. The surface says safe; the autonomic state is organized around threat management. The caregiver does not experience this divergence. They experience Strategy & Management as rationality, as calm competence.
            </p>
            <p style={proseStyle}>
              What develops in the child: RE calibrates to surface performance rather than authenticity. ER becomes confused and distrusted — the child's body resonates with the caregiver's underlying state while the caregiver's presentation declares that state does not exist. The child's felt sense is contradicted by authority. SEA is actively undermined — "You're not angry," "That didn't happen." The relational completion pathway is misdirected: the child learns to regulate toward what the caregiver's narrative requires, not toward their own physiological baseline. The body does not return. It learns to present as returned. The interoceptive substrate is active — ER develops because the hardware is generating signals — but SEA is contradicted. The interoceptive access is contested: signals arrive, the CLS has been taught to distrust them.
            </p>

            <h3 style={conceptHeadingStyle}>Condition 3: The Invalidating Affective Environment</h3>
            <p style={proseStyle}>
              The caregiver's RE is instrumental — reading the child for compliance and control. ER is shut down. SEA is absent. The caregiver's nervous system is chronically organized around Strategy & Management or Power & Dominance — experienced not as a stuck state but as competence, as maturity.
            </p>
            <p style={proseStyle}>
              The caregiver transmits their nervous system state while being unaware it is one. They cannot offer what they cannot perceive — and they cannot perceive it because perceiving their own autonomic configuration as a configuration would require the SEA their own developmental environment did not build. The structural output of a nervous system that has no channel to observe itself.
            </p>
            <p style={proseStyle}>
              What develops in the child: RE develops instrumentally — reading for what the environment demands. ER shuts down — affect was punished or treated as weakness. SEA never develops — internal experience is explicitly declared wrong: "Don't be so sensitive," "Stop crying." The relational completion pathway is blocked: the child learns to suppress activation rather than complete it. The interoceptive substrate is never built — the anterior insula never develops the mapping precision that co-regulation would have provided.
            </p>
            <p style={proseStyle}>
              When a culture teaches "logic over emotion" or "boys don't cry," it performs this invalidation across entire populations. The adults delivering these messages are themselves the product of the same developmental conditions. The culture does not produce the condition. The condition produces the culture. And the culture reproduces the condition.
            </p>

            <h3 style={conceptHeadingStyle}>Signal-Type-Specific Disruption</h3>
            <p style={proseStyle}>
              The developmental disruption does not suppress "emotions" as a global category. It targets specific signal types — and the targeting maps onto <Link href="/model/m1-emotions-as-signals" style={linkStyle}>M1's</Link> somatic/relational distinction. When socialization targets relational signals specifically — suppressing signals about belonging, connection, need, grief, shame — the interoceptive substrate is never built for those signal types. The child may still discharge somatic activation through the body's own channels. But the interoceptive access for relational content is absent. When socialization targets the trustworthiness of internal signals — contradicting what the body reports rather than suppressing which signals the body generates — the interoceptive substrate remains active, ER develops, but SEA is contradicted. These two patterns cut across the three conditions and gendered socialization applies them differentially.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — three conditions mapped to substrate states */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Van der Kolk (2014) — developmental environments and their long-term autonomic consequences. Linehan (1993) — the invalidating environment as a specific developmental condition. Porges (2011) — neuroception: the nervous system evaluating safety through physiological signals, not words. Schore (2003) — right-hemisphere development shaped by attuned caregiving. Main & Hesse (1990) — the caregiver as simultaneous source of safety and threat in disorganized attachment. Young (1990) — early maladaptive schemas as stable patterns produced by early relational conditions.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The mapping of three adverse conditions to three specific caregiver capacity profiles — each producing traceable outcomes. Each condition disrupts the relational completion pathway through a different mechanism (unreliable, misdirected, blocked) and sets the interoceptive substrate to a specific state (unstable, contested, absent). Signal-type-specific disruption: developmental conditions do not suppress "emotions" globally but target specific signal types. In each condition, the caregiver does not perceive their own state as a state — transmitting the condition while unaware they are in one. Cultural invalidation as Condition 3 operating at population scale. This is a working hypothesis, open to testing.
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
            <h2 id="heading-developmental-consequence" style={sectionHeadingStyle(P.B)}>
              The Developmental Consequence
            </h2>

            <p style={proseStyle}>
              When the body's restoration sequence cannot complete — because co-regulation was unavailable or insufficient — the consequences follow the distinction between somatic and relational signals. Somatic signals may find partial completion through the body's own channels. Relational signals accumulate without resolution. Every signal the nervous system generated about belonging, connection, rejection, shame — every signal whose designed completion required another person — remains physiologically unresolved. The cortisol did not metabolize. The muscular bracing did not release. The HPA axis did not receive the all-clear. The debris from those signals is carried forward — not as emotional memory, but as physiology. As elevated cortisol. As chronic muscular tension. As inflammatory compounds that never cleared. As baseline.
            </p>
            <p style={proseStyle}>
              This produces three sequential consequences.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>First: sustained activation.</strong> The child's nervous system remains in a defensive configuration after the activating event has passed. What <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link> describes as Baseline Elevation begins — resting cortisol, resting muscle tension, and resting inflammatory markers remain chronically elevated, and the nervous system treats this elevated state as its new resting point.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Second: a chronic defensive state.</strong> One nervous system state becomes the default operating position regardless of context — the only state the system has learned to sustain, because the biological restoration pathways that would allow the system to shift back to physiological baseline were never encoded through co-regulation.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Third: loss of state flexibility.</strong> The system that should shift fluidly across the gradient is locked. The pathways for biological restoration were never wired — and the relational signals whose resolution would require relational completion are still running, still unresolved.
            </p>
            <p style={proseStyle}>
              From inside, the locked state does not feel like a lock. It feels like accurate perception. The person whose nervous system is chronically organized around Strategy & Management — cortisol chronically elevated, cognitive systems organized around anticipation and control — experiences this as competence. Each locked state is invisible to the person inside it because perceiving one's own nervous system configuration as a configuration requires the SEA that the developmental conditions did not build.
            </p>

            <h3 style={conceptHeadingStyle}>What Development Sets</h3>
            <p style={proseStyle}>
              The three conditions produce different capacity profiles. But the profiles are products of something deeper: the state of the interoceptive substrate — the single upstream variable that <Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link> identifies as determining the entire downstream awareness architecture. The developmental conditions set this substrate's state — and the state determines what data the CLS receives, what coherence the CLS builds, and whether the person can observe the Emotional Somatic Cycle while it is running.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Developmental Path</th>
                    <th style={thStyle}>What Happens to the Substrate</th>
                    <th style={thStyle}>What the CLS Receives</th>
                    <th style={thStyle}>What the CLS Builds</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Sufficient co-regulation",
                    "Substrate built — anterior insula develops mapping precision, ventral vagal pathways develop carrying capacity. SEA comes online. ER sustainable.",
                    "The ESS's physiological data + external reading (RE) + own output",
                    "Narrative reflecting what the body is actually doing — complex, sometimes uncomfortable, biologically accurate",
                  ]} />
                  <TableRow cells={[
                    "Condition 3 (invalidating)",
                    "Substrate never built — anterior insula never develops mapping precision. SEA absent. ER absent or shut down.",
                    "External reading (RE) + own output only",
                    "Narrative without the body — structurally unaware the body's signals are missing",
                  ]} />
                  <TableRow cells={[
                    "Condition 2 (incongruent)",
                    "Substrate active — ER develops. SEA contradicted. Signals arrive but the CLS has been taught to distrust them.",
                    "Contested ESS data + external reading (RE) + own output",
                    "Narrative fighting the body — the person senses activation and cannot trust what it means",
                  ]} />
                  <TableRow cells={[
                    "Condition 1 (unpredictable)",
                    "Substrate partially and unstably developed. ER floods or shuts down. SEA absent.",
                    "Unstable or flooded ESS data + hypervigilant external reading (RE) + own output",
                    "Narrative organized around scanning — the CLS monitors externally because internal data is unreliable",
                  ]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              RE sits outside this chain — on separate hardware, feeding the CLS regardless. The CLS always has data. The question is not whether the CLS has data but whether the CLS has data from its own body. This is why the narrative the CLS builds when interoceptive access is absent can feel so complete — the CLS has RE, it has its own reasoning. It is missing the one source that would make the narrative biologically accurate.
            </p>

            <h3 style={conceptHeadingStyle}>Two Routes to the Same Condition</h3>
            <p style={proseStyle}>
              The interoceptive channel can be absent for two structurally different reasons. <strong style={{ color: TEXT.primary }}>Developmental absence:</strong> the channel was never built. The relational conditions that build SEA were never present. Change requires building — new relational experience that constructs the pathway for the first time, the conditions <Link href="/framework/f8-repairing-awareness" style={linkStyle}>F8</Link> describes. <strong style={{ color: TEXT.primary }}>Chronic suppression:</strong> the channel developed, partially or fully, and then closed under chronic activation. Sustained cortisol elevation reduced the anterior insula's signal-to-noise ratio. The pathway exists but is blocked. Change requires unblocking — sustained safety long enough for the existing pathway to reopen. Building a pathway that never existed and unblocking a pathway that has been suppressed are fundamentally different processes — requiring different conditions and different timeframes.
            </p>

            <h3 style={conceptHeadingStyle}>Intergenerational Transmission</h3>
            <p style={proseStyle}>
              The capacity profile replicates across generations without anyone choosing to transmit it. The transmission unit is not beliefs, intentions, or parenting philosophy. It is the caregiver's autonomic state and capacity profile — the same variables that shaped the child's development now operating one generation forward. The four nervous system states are the transmission mechanism: the caregiver's chronic state determines which awareness capacities are available in the co-regulatory environment, the child develops a capacity profile that produces a chronic state, and that state becomes the next child's developmental environment. Each link in the chain is invisible to the person carrying it — because each person experiences their chronic state as identity, not as a nervous system configuration.
            </p>
            <p style={proseStyle}>
              The chain replicates until the capacity profile changes. Not until behavior changes. Not until intention changes. Until the caregiver's own nervous system develops capacities it did not have — through the same relational conditions that would have built them in the first place.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — developmental through-line from substrate to path */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Van der Kolk (2014) — chronic autonomic states as products of developmental conditions. Porges (2011) — loss of autonomic flexibility under chronic activation. McEwen (2000) — allostatic load: the cumulative physiological cost of sustained activation without resolution. LeDoux (1996) — fear conditioning: the nervous system encoding threat thresholds through experience. Main & Hesse (1990) — unresolved attachment in parents predicting disorganized attachment in children. Levine (1997) — the body carrying unresolved activation forward when the completion sequence was never learned.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The developmental through-line: what the conditions set is the state of the interoceptive substrate, determining the chain from substrate through access through capacities through data through coherence through observability through Path A or Path B. Three developmental paths mapped to substrate states and coherence forms. Two routes to channel absence (developmental absence vs chronic suppression) as fundamentally different processes requiring different conditions. RE sitting outside the chain on separate hardware — explaining why the CLS always has data but the question is whether it has data from its own body. The intergenerational transmission mechanism as the same variables operating one generation forward — the four states as the transmission mechanism, each link invisible to the person carrying it. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={P.B}
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
                definition: "The child needs a caregiver who can access all states and return to physiological baseline after each. The child learns the movement, not one state. Each stuck caregiver offers only what one state allows and never models the return.",
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
                definition: "Unpredictable (unreliable completion, unstable substrate), incongruent (misdirected completion, contested substrate), invalidating (blocked completion, absent substrate). Each produced by a caregiver capacity profile, each setting the interoceptive substrate to a specific state.",
              },
              {
                term: "Signal-type-specific disruption",
                definition: "Developmental conditions do not suppress 'emotions' globally — they target specific signal types. Gendered socialization applies signal suppression and signal contradiction differentially.",
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
                term: "Two routes to channel absence",
                definition: "Developmental absence (never built — requires building) and chronic suppression (degraded — requires unblocking). Fundamentally different processes requiring different conditions and timeframes.",
              },
              {
                term: "Intergenerational transmission",
                definition: "The four states are the transmission mechanism. The caregiver's capacity profile IS the child's developmental environment. Each link invisible to the person carrying it. The chain replicates until the capacity profile changes.",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={P.B}
            established="F2 established how the system gets calibrated — the pre-reflective starting condition, co-regulation and the two completion pathways, three awareness capacities as developmental products, three adverse conditions that disrupt development, and the consequence: chronic states, unresolved relational signals, and intergenerational transmission."
            question="But childhood ends, and the calibration persists. When higher-order cognition arrives inside a nervous system already shaped by its developmental conditions — carrying the accumulated debris of every relational signal that never found completion — does cognition passively inherit the calibration, or does it actively maintain it?"
            nextFramework="F3"
            nextTitle="Adult Cognition & False Coherence"
            nextHref="/framework/f3-false-coherence"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={P.D}
            connections={[
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "F2 describes how states become chronic in the first place — when the body's restoration sequence was never learned through co-regulation. M2 maps the four states and what each enables and restricts.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "F2 describes how the three awareness capacities develop through the relational environment and identifies what co-regulation builds at the substrate level. M4 maps the architecture — two substrates, three capacities, and what each configuration produces.",
              },
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "F2 describes the developmental origin of what M3 maps as Path B — when co-regulation is unavailable, the M3 sequence runs on relational signals with no resolution.",
              },
              {
                id: "M1: Emotions as Signals",
                href: "/model/m1-emotions-as-signals",
                description: "M1 maps the sixteen signals and the somatic/relational distinction. F2 describes what happens developmentally when the relational completion pathway is or is not available — and why signal-specific learning means the caregiver determines which restoration pathways the child learns.",
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
                id: "F8: Awareness Rebuilds Through Safety",
                href: "/framework/f8-repairing-awareness",
                description: "F2 and F8 are structural counterparts on the regulation thread. F2 describes the restoration pathway not being built. F8 describes the restoration pathway being rebuilt — awareness restored through safety, not instruction.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={P.D}
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
                definition: "A cognitive structure built from whatever data the CLS receives. Which awareness capacities developed determines what data is available. The CLS constructs a coherent narrative from that data — whether the data set is complete or not.",
              },
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
