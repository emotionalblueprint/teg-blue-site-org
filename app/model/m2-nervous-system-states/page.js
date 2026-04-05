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

const FluidCompassExplorer = dynamic(
  () => import("@/src/components/FluidCompassExplorer"),
  { ssr: false }
);

const MODEL_COLOR = SPECTRUM.azure;

const ANCHOR_SECTIONS = [
  { label: "The States", href: "#the-states" },
  { label: "The Gradient", href: "#the-gradient" },
  { label: "State & Capacity", href: "#state-determines-capacity" },
  { label: "Sensory Filtering", href: "#sensory-filtering" },
  { label: "Chronic States", href: "#chronic-states" },
  { label: "Two Systems", href: "#two-information-systems" },
  { label: "Compass", href: "#compass-explorer" },
  { label: "Connections", href: "#connections" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Nervous System States (M2) | TEG-Blue Research",
  description:
    "What happens after an emotion fires — the nervous system state it produces, how that state changes perception, and what happens when it becomes permanent. The second stage of the Emotional Somatic Cycle.",
  keywords: [
    "nervous system states",
    "four-mode gradient",
    "safety threat orientation",
    "Safety & Openness",
    "Threat & Defence",
    "Strategy & Management",
    "Power & Dominance",
    "state determines capacity",
    "sensory filtering",
    "chronic state organisation",
    "polyvagal theory",
    "two information systems",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m2-nervous-system-states",
  },
  openGraph: {
    title: "Nervous System States — M2 Model | TEG-Blue",
    description:
      "What happens after an emotion fires — the state it produces, how perception changes, and what happens when it becomes permanent. The second stage of the Emotional Somatic Cycle.",
    url: "https://teg-blue.org/model/m2-nervous-system-states",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nervous System States — TEG-Blue M2",
    description:
      "Four states grounded in two biological branches. How the nervous system shifts after a signal fires — and what the state does to perception.",
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function M2NervousSystemStatesPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/model/m2-nervous-system-states" />

      <PageLayout
        header={
          <>
            <ModelHero
              badge="MODEL M2"
              title="Nervous System States"
              subtitle="The Instrument"
              description="After a signal fires (M1), the nervous system does not simply register the finding and leave the rest of the system unchanged. It reorganizes — muscle tension redistributes, heart rate shifts, hormonal balance changes, sensory filtering adjusts, and cognitive access expands or contracts. Four states grounded in two biological branches. What each state enables and restricts. And the mechanism that makes this consequential: the state changes what the person can see."
              coreQuestion="What state is the nervous system in, and what can the person perceive, think, feel, and do from there?"
              drawsFrom={[
                { label: "M1", href: "/model/m1-emotions-as-signals" },
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
                  The nervous system continuously evaluates one question: <em>Is there enough safety to engage, or is protection needed?</em>
                </li>
                <li style={propositionItemStyle}>
                  Four states emerge from two biological branches — parasympathetic (Safety & Openness) and sympathetic (Threat & Defence, Strategy & Management, Power & Dominance)
                </li>
                <li style={propositionItemStyle}>
                  The first two states are organized by the emotional-somatic system — automatic responses running before conscious awareness. The second two are organized by the cognitive-logical system recruited into threat service
                </li>
                <li style={propositionItemStyle}>
                  What a person can perceive, think, feel, and do depends on their current state — the nervous system allocates resources based on its safety-threat evaluation
                </li>
                <li style={propositionItemStyle}>
                  Each state sets the sensory filter on all incoming data before cognition touches it — the person does not choose what they see, the state delivers it
                </li>
                <li style={propositionItemStyle}>
                  Every state — including Safety & Openness — is a temporary activation. The measure is not which state the system occupies. The measure is State Flexibility — the capacity to move and return to physiological baseline
                </li>
                <li style={propositionItemStyle}>
                  When the return to physiological baseline does not happen, a temporary state becomes the system{"\u2019"}s permanent organization. Identity forms around it. The filter locks. The loop self-reinforces
                </li>
              </ul>
            </ModelPurpose>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 1: THE STATES                              */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 1" title="The States" color={MODEL_COLOR} />

          {/* ─── C0: THE CORE SAFETY EVALUATION ──────────── */}
          <section
            id="the-states"
            aria-labelledby="heading-safety-evaluation"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-safety-evaluation"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              The Core Safety Evaluation
            </h2>

            <p style={proseStyle}>
              The nervous system continuously evaluates a single question: <strong style={{ color: TEXT.primary }}>{"\u201C"}Is there enough safety to engage, or is protection needed?{"\u201D"}</strong> Every emotional signal the body generates (<Link href="/model/m1-emotions-as-signals" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M1</Link>) is, at root, an answer to this question. And every answer produces a shift in the nervous system{"\u2019"}s state — a reorganization of what the person can perceive, think, feel, and do.
            </p>
            <p style={proseStyle}>
              This evaluation is automatic, continuous, and below conscious awareness. Porges (2011) calls it <em>neuroception</em> — the nervous system{"\u2019"}s assessment of safety and threat running underneath cognition. It does not wait for analysis. It evaluates <em>experienced safety</em>, not objective danger — which is why a person can feel threatened in an objectively safe room, or feel safe in an objectively dangerous situation. The nervous system reads what it has learned to recognize as safe or threatening, which may not match current reality.
            </p>
            <p style={proseStyle}>
              From a survival perspective, the cost of failing to detect danger is higher than the cost of unnecessary protection. The system is biased toward protection under uncertainty. This bias is the reason the four states exist.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The question is not {"\u201C"}what is wrong with this person?{"\u201D"} but {"\u201C"}what is their nervous system evaluating as safe or threatening right now?{"\u201D"}
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Porges (2011)</strong> — neuroception as continuous below-awareness safety/threat evaluation. <strong style={{ color: TEXT.primary }}>Damasio (1994)</strong> — body-state signals guiding cognition through somatic markers. <strong style={{ color: TEXT.primary }}>LeDoux (1996)</strong> — threat detection running faster than conscious processing.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  TEG-Blue frames the safety evaluation as the central organizing principle of the entire state architecture. Every state, every capacity change, every perceptual shift follows from the nervous system{"\u2019"}s answer to this one question.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C1: PHYSIOLOGICAL BASELINE ──────────────── */}
          <section
            id="physiological-baseline"
            aria-labelledby="heading-baseline"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-baseline"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Physiological Baseline
            </h2>

            <p style={proseStyle}>
              The nervous system at rest. Not numb, not inactive — ready. The body{"\u2019"}s resources available, not deployed. Cortisol at resting level. Muscles at resting tension. Heart rate at resting pace. The HPA axis standing down.
            </p>
            <p style={proseStyle}>
              What is commonly called regulation — calming down, managing emotion — is understood here as a biological completion process: stress hormones metabolize, muscles release, the HPA axis stands down. This is restoration, not management. The full account of how restoration works belongs to <Link href="/model/m3-regulation-capacities" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M3</Link>; M2 uses the term to describe what the system returns <em>to</em>.
            </p>
            <p style={proseStyle}>
              Physiological baseline is the condition the nervous system is designed to return to after activation. It is not one of the four states. It is the neutral ground from which the system enters a state when conditions require it, and returns when the body{"\u2019"}s restoration sequence has completed. This distinction matters because Safety & Openness — the state closest to baseline — is still a state. It is a parasympathetic-dominant activation that arises when conditions support engagement. Baseline is what exists before any activation, and what the system returns to when activation resolves.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Physiological baseline is not Safety & Openness. It is the resting condition beneath all four states — the neutral ground the system is designed to return to after every activation.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>McEwen (2000)</strong> — allostasis and the distinction between resting baseline and adapted set-point. <strong style={{ color: TEXT.primary }}>Porges (2011)</strong> — autonomic flexibility measured relative to resting vagal tone. <strong style={{ color: TEXT.primary }}>Thayer & Lane (2000)</strong> — heart rate variability as a marker of baseline autonomic regulation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  TEG-Blue distinguishes physiological baseline from all four states, including Safety & Openness. This establishes that the key measure of the state system is not which state a person occupies, but whether the nervous system retains the capacity to return to baseline — State Flexibility. A nervous system chronically organized around Safety & Openness, absorbing without returning to rest, is as structurally stuck as one chronically organized around threat.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C2: TWO BRANCHES, FOUR STATES ──────────── */}
          <section
            id="two-branches"
            aria-labelledby="heading-two-branches"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-two-branches"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Two Biological Branches, Four States
            </h2>

            <p style={proseStyle}>
              The state system is grounded in two primary biological branches of autonomic regulation. The <strong style={{ color: TEXT.primary }}>parasympathetic branch</strong> (ventral vagal system) supports safety, social engagement, and physiological settling. The <strong style={{ color: TEXT.primary }}>sympathetic branch</strong> supports mobilization, vigilance, and defensive action.
            </p>
            <p style={proseStyle}>
              From these two branches, four states emerge. The first two — Safety & Openness and Threat & Defence — are organized primarily by the emotional-somatic system. The body{"\u2019"}s detection and response architecture sets the state before conscious processing arrives. The second two — Strategy & Management and Power & Dominance — are states in which the cognitive-logical system is increasingly recruited into the threat response. This is not simply greater intensity. It is a shift in which system organizes the response.
            </p>

            {/* Four States Overview Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>State</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Biology</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Activation</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Design Duration</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Parasympathetic (ventral vagal) dominant</div>
                <div style={gridCellStyle}>Automatic — safety perceived</div>
                <div style={gridCellStyle}>Temporary — returns to baseline</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Threat & Defence</div>
                <div style={gridCellStyle}>Sympathetic activation</div>
                <div style={gridCellStyle}>Automatic — threat perceived</div>
                <div style={gridCellStyle}>Minutes to hours — emergency</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Strategy & Management</div>
                <div style={gridCellStyle}>Sympathetic + cognition recruited</div>
                <div style={gridCellStyle}>Deliberate — cognition enters threat service</div>
                <div style={gridCellStyle}>Time-limited — tool</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power & Dominance</div>
                <div style={gridCellStyle}>Sympathetic + cognition at maximum</div>
                <div style={gridCellStyle}>Deliberate — cognition at maximum</div>
                <div style={gridCellStyle}>Rare — last resort</div>
              </div>
            </div>

            <p style={proseStyle}>
              TEG-Blue also refers to these four states by shorthand names: <strong style={{ color: TEXT.primary }}>Connection</strong> (Safety & Openness), <strong style={{ color: TEXT.primary }}>Protection</strong> (Threat & Defence), <strong style={{ color: TEXT.primary }}>Control</strong> (Strategy & Management), and <strong style={{ color: TEXT.primary }}>Domination</strong> (Power & Dominance). The descriptive names say what the nervous system is doing. The shorthand names are handles the reader can carry.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Safety & Openness and Threat & Defence are organized by the emotional-somatic system — the body responds before cognition arrives. Strategy & Management and Power & Dominance are what the cognitive-logical system does when recruited into threat service.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Porges (2011)</strong> — ventral vagal (social engagement), sympathetic (mobilization), autonomic hierarchy. <strong style={{ color: TEXT.primary }}>Dana (2018)</strong> — clinical application. <strong style={{ color: TEXT.primary }}>Panksepp (1998)</strong> — primary emotional systems as biological processes. <strong style={{ color: TEXT.primary }}>Koenigs et al. (2007)</strong> — vmPFC damage and impaired guilt processing. <strong style={{ color: TEXT.primary }}>Blair (2007)</strong> — empathy suppression.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The four-state model grounded explicitly in two nervous system branches, with the distinction between emotional-somatic-led states (automatic, pre-cognitive) and cognitive-logical-recruited states (deliberate, cognitive resources redirected to threat service) as a qualitative architectural break — not just a continuum of intensity but a different kind of response.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 2: WHAT THE STATE DOES                     */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 2" title="What the State Does" color={MODEL_COLOR} />

          {/* ─── C7: THE GRADIENT ────────────────────────── */}
          <section
            id="the-gradient"
            aria-labelledby="heading-gradient"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-gradient"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              The Nervous System Gradient
            </h2>

            <p style={proseStyle}>
              The four states are not four boxes. They are positions along a continuous gradient of autonomic tone — from parasympathetic dominance through increasing sympathetic activation, with measurable shifts in heart rate variability, cortisol levels, muscle tension, and sensory filtering at each point. The nervous system moves along this gradient in response to changing evaluations of safety and threat.
            </p>
            <p style={proseStyle}>
              The system{"\u2019"}s position on the gradient at any given moment is its <strong style={{ color: TEXT.primary }}>Current State Position</strong> — a continuously updated readout of how the nervous system is currently organized, determined by the safety-threat evaluation running below conscious awareness. Whether the system can move is the more important measure. TEG-Blue calls this <strong style={{ color: TEXT.primary }}>State Flexibility</strong> — the nervous system{"\u2019"}s capacity to shift state in response to changing conditions and return toward physiological baseline when activation has served its function.
            </p>
            <p style={proseStyle}>
              A person in Threat & Defence who can move back toward Safety & Openness when conditions change is fundamentally different from a person in Threat & Defence whose system has locked there. Current State Position tells you where the system is. State Flexibility tells you whether it can leave.
            </p>
            <p style={proseStyle}>
              TEG-Blue uses the visual metaphor of the <strong style={{ color: TEXT.primary }}>Inner Compass</strong> to make this gradient tangible. The needle orients between safety and threat, moving along the four-state gradient. The measure is not where the needle is. The measure is whether the needle can move.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The question is not {"\u201C"}which state?{"\u201D"} but {"\u201C"}where on the gradient, moving in which direction, and can it return to rest?{"\u201D"}
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Porges (2011)</strong> — the autonomic hierarchy as a graded response system. <strong style={{ color: TEXT.primary }}>Dana (2018)</strong> — the autonomic ladder as a clinical tool. <strong style={{ color: TEXT.primary }}>Ogden, Minton & Pain (2006)</strong> — the window of tolerance as a range, not a state.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  TEG-Blue reframes the system from static categories to a movable range and introduces two measures that matter more than the states themselves: Current State Position (where the system is now) and State Flexibility (whether it can move and return to baseline). The system is better measured by flexibility and return capacity than by which state it occupies.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C8: STATE DETERMINES CAPACITY ──────────── */}
          <section
            id="state-determines-capacity"
            aria-labelledby="heading-state-capacity"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-state-capacity"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              State Determines Capacity
            </h2>

            <p style={proseStyle}>
              What a person can perceive, think, feel, and do depends on their Current State Position on the gradient. The nervous system configures what becomes available based on the level of safety or threat it has detected — resource allocation, not choice. In states of greater safety, perception broadens, cognition becomes more flexible, empathy becomes more available, and learning integrates more readily. In states of greater threat, each of these capacities progressively narrows.
            </p>
            <p style={proseStyle}>
              The mechanism is structurally different depending on whether the state is absent, temporary, or permanent. From <strong style={{ color: TEXT.primary }}>physiological baseline</strong>, capacities are available but not deployed — no state is organizing perception, cognition, or empathy. From <strong style={{ color: TEXT.primary }}>acute activation</strong>, the capacity restrictions are temporary — when activation resolves and the nervous system returns to baseline, restrictions lift. From <strong style={{ color: TEXT.primary }}>chronic activation</strong>, three things converge: the capacity restrictions become the operating architecture, the biological substrate that awareness requires degrades over time (<Link href="/model/m4-awareness-capacities" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M4</Link>), and the state becomes invisible to the person inside it.
            </p>

            {/* State-Capacity Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr 1.5fr 1.5fr", minWidth: 700 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Capacity</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Safety & Openness</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Threat & Defence</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Strategy & Management</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Power & Dominance</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Perception</div>
                <div style={gridCellStyle}>Broad — sees the full field</div>
                <div style={gridCellStyle}>Narrowed — threat-relevant signals</div>
                <div style={gridCellStyle}>Strategic — what needs managing</div>
                <div style={gridCellStyle}>Tunnel — obstacles and resources</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Empathy</div>
                <div style={gridCellStyle}>Full — resonance with others online</div>
                <div style={gridCellStyle}>Filtered — resonance decreases</div>
                <div style={gridCellStyle}>Redirected — reading others for strategy, not understanding</div>
                <div style={gridCellStyle}>Collapsed — resonance offline; reading others may be weaponized</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Cognition</div>
                <div style={gridCellStyle}>Flexible — holds complexity, tolerates ambiguity</div>
                <div style={gridCellStyle}>Simplified — binary thinking, speed over accuracy</div>
                <div style={gridCellStyle}>Strategic — planning and anticipation</div>
                <div style={gridCellStyle}>Locked — rigid, self-confirming</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Learning</div>
                <div style={gridCellStyle}>Available — new information integrates</div>
                <div style={gridCellStyle}>Reduced — threat-contradicting information filtered</div>
                <div style={gridCellStyle}>Selective — in service of the strategy only</div>
                <div style={gridCellStyle}>Unavailable — system not open to revision</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Relational capacity</div>
                <div style={gridCellStyle}>Full — repair, vulnerability, trust available</div>
                <div style={gridCellStyle}>Limited — vulnerability feels dangerous</div>
                <div style={gridCellStyle}>Managed — relationships serve the strategy</div>
                <div style={gridCellStyle}>Absent — others are resources, obstacles, or threats</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Temporal horizon</div>
                <div style={gridCellStyle}>Full range — past, present, distant future</div>
                <div style={gridCellStyle}>Collapsed to the immediate — solutions for now</div>
                <div style={gridCellStyle}>Defensive future — anticipating the next threat</div>
                <div style={gridCellStyle}>Maximum compression — no future beyond the obstacle</div>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              If a person cannot learn, cannot empathize, cannot think flexibly — the first question is: where is their nervous system on the gradient?
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Fredrickson (2001)</strong> — broaden-and-build: safety broadens cognitive and perceptual capacity. <strong style={{ color: TEXT.primary }}>Arnsten (2009)</strong> — prefrontal function degrades under stress, including temporal discounting. <strong style={{ color: TEXT.primary }}>Sapolsky (2004)</strong> — chronic stress restricts learning, memory, and temporal horizon. <strong style={{ color: TEXT.primary }}>Porges (2011)</strong> — social engagement system availability depends on autonomic state.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  State Determines Capacity tracked systematically across six dimensions and all four states, distinguishing three conditions under which state determines capacity: from physiological baseline (capacities available, not deployed), from acute activation (temporary resource allocation), and from chronic activation (capacity restrictions permanent, substrate degradation progressive, the state invisible to the person inside it).
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C9: SENSORY FILTERING ──────────────────── */}
          <section
            id="sensory-filtering"
            aria-labelledby="heading-sensory-filtering"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-sensory-filtering"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              State-Dependent Sensory Filtering
            </h2>

            <p style={proseStyle}>
              The state does not only shape what the person does with reality. It also shapes what aspects of reality are most likely to be registered in the first place. Sensory input reaches the nervous system before conscious interpretation is assembled. Once a state is active, incoming information is filtered accordingly.
            </p>
            <p style={proseStyle}>
              The nervous system evaluates from the periphery in — not from the brain down. <strong style={{ color: TEXT.primary }}>Eyes</strong> — neural tissue, an extension of the brain outside the skull. <strong style={{ color: TEXT.primary }}>Ears</strong> — direct pathway to the brainstem. <strong style={{ color: TEXT.primary }}>Nose</strong> — the only sense with a direct pathway to the amygdala and hippocampus without going through the thalamus first. <strong style={{ color: TEXT.primary }}>Gut</strong> — approximately 100 million neurons, a second nervous system communicating upward through the vagus nerve. <strong style={{ color: TEXT.primary }}>Skin</strong> — touch receptors, temperature, pressure. All feeding in simultaneously, below conscious awareness.
            </p>

            {/* Filter Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 2fr", minWidth: 600 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>State</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What the filter delivers</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What the person experiences</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Channels wide open — eyes reading faces, context, nuance. Ears picking up warmth, prosody. Gut relaxed, feeding accurate interoceptive data.</div>
                <div style={gridCellStyle}>The world looks like it is.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Threat & Defence</div>
                <div style={gridCellStyle}>Channels narrow toward threat detection. Pupils dilate. Peripheral vision sharpens for escape routes. Ears tune to sudden sounds and threat frequencies. Gut tightens.</div>
                <div style={gridCellStyle}>The world looks dangerous.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Strategy & Management</div>
                <div style={gridCellStyle}>Narrowing becomes strategic. Eyes scanning for who has power, what is concealed. Ears reading what people are really after. Gut suppressed — cognitive system has overridden the somatic signal.</div>
                <div style={gridCellStyle}>The world looks like a system to be managed.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power & Dominance</div>
                <div style={gridCellStyle}>Tunnel. Visual field narrows to the obstacle. Peripheral information drops. Ears hear only what confirms the threat assessment. Gut gone — completely overridden.</div>
                <div style={gridCellStyle}>The world looks full of enemies.</div>
              </div>
            </div>

            <p style={proseStyle}>
              These filter settings were designed to be temporary — activated when needed, released when the threat passed. When the state becomes chronic, the settings lock.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The state does not just limit what the person can do in response to input — it limits what input reaches the person in the first place. The world the person perceives is already filtered before cognition touches it.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>LeDoux (1996)</strong> — pre-conscious threat detection, amygdala processing before cortical awareness. <strong style={{ color: TEXT.primary }}>Bar-Haim et al. (2007)</strong> — threat-related attentional bias. <strong style={{ color: TEXT.primary }}>Porges (2011)</strong> — neuroception operating below conscious awareness through multiple sensory channels.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Sensory filtering mapped systematically across all four states as the physical mechanism that explains why state determines capacity. The state is not only a reaction to perception. It is also a mechanism that shapes perception itself.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C10: STATE-MODIFIED SIGNAL EXPERIENCE ──── */}
          <section
            id="signal-state-interaction"
            aria-labelledby="heading-signal-state"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-signal-state"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              State-Modified Signal Experience
            </h2>

            <p style={proseStyle}>
              An emotional signal does not produce the same lived experience in every state. The signal itself may remain the same, but the state in which it arrives changes how it is processed, expressed, tolerated, and interpreted. For this reason, it is often insufficient to assess an emotion in isolation. What matters clinically and structurally is the combination of signal + state.
            </p>

            {/* Signal x State Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", minWidth: 500 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Signal</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>In Safety & Openness</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>In Threat States</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Anger</div>
                <div style={gridCellStyle}>Signals a boundary; motivates repair and clarity</div>
                <div style={gridCellStyle}>Escalates; becomes self-blame, cold correction, or contempt depending on the state</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Fear</div>
                <div style={gridCellStyle}>Signals genuine threat; promotes appropriate caution</div>
                <div style={gridCellStyle}>Generalizes; becomes hypervigilance; restricts engagement</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Sadness</div>
                <div style={gridCellStyle}>Processes loss; invites support and reflection</div>
                <div style={gridCellStyle}>Becomes withdrawal; deepens isolation; hardens into hopelessness</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Joy</div>
                <div style={gridCellStyle}>Celebrates; connects; broadens capacity</div>
                <div style={gridCellStyle}>Is distrusted; feels dangerous; may trigger threat</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Shame</div>
                <div style={gridCellStyle}>Signals misalignment; motivates repair</div>
                <div style={gridCellStyle}>Becomes identity ({"\u201C"}I am wrong{"\u201D"}); or is projected outward as contempt</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Guilt</div>
                <div style={gridCellStyle}>Signals harm done; motivates accountability</div>
                <div style={gridCellStyle}>Becomes paralysis; or is erased when vmPFC is suppressed</div>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              Assess the state, not the emotion. The same signal produces entirely different outcomes depending on where the nervous system is when the signal arrives.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Frijda (1986)</strong> — emotions as action tendencies shaped by context. <strong style={{ color: TEXT.primary }}>Barrett (2017)</strong> — constructed emotion theory: the same physiological state producing different emotional experiences depending on context. <strong style={{ color: TEXT.primary }}>Gross (2015)</strong> — emotion regulation as context-dependent process.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  TEG-Blue proposes that outcomes depend on the interaction between the emotional signal and the nervous system state through which that signal is being processed — State-Modified Signal Experience. The same physiological signal produces different lived experience depending on the Current State Position.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 3: WHEN STATES BECOME CHRONIC              */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 3" title="When States Become Chronic" color={MODEL_COLOR} />

          {/* ─── C11: ALL STATES TEMPORARY ──────────────── */}
          <section
            id="chronic-states"
            aria-labelledby="heading-temporary"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-temporary"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              States as Temporary Activations
            </h2>

            <p style={proseStyle}>
              All four nervous system states are designed as temporary activations. The nervous system is built to shift in response to changing conditions, organize around what is needed in the moment, and then return toward physiological baseline — stress hormones metabolized, muscles released, the HPA axis standing down. This applies to every state without exception.
            </p>
            <p style={proseStyle}>
              Safety & Openness is the state closest to baseline, and it is often treated — implicitly or explicitly — as the destination. It is a parasympathetic-dominant activation, not rest. A nervous system that remains perpetually organized around Safety & Openness — absorbing, engaging, resonating without returning to physiological rest — is as chronically activated as one organized around threat. The state is different. The structural problem is the same: the system is not returning to baseline.
            </p>
            <p style={proseStyle}>
              Any state that the nervous system cannot leave becomes chronic. The defining measure is not which state the system occupies. It is whether the system retains the capacity to move, respond, and return to physiological baseline.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The measure is not which state the system occupies. The measure is State Flexibility — the capacity to move and return to physiological baseline after every activation.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Porges (2011)</strong> — autonomic flexibility as a marker of health, not resting state. <strong style={{ color: TEXT.primary }}>Thayer & Lane (2000)</strong> — heart rate variability as a measure of autonomic flexibility. <strong style={{ color: TEXT.primary }}>Ogden, Minton & Pain (2006)</strong> — the window of tolerance as a flexible range.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  TEG-Blue distinguishes physiological baseline from Safety & Openness and establishes that no state is the destination. Chronicity is defined by one thing: whether the nervous system returns to physiological baseline. When it does not — regardless of which state is active — the temporary activation becomes a permanent organization.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C12: CHRONIC STATE ORGANISATION ────────── */}
          <section
            id="chronic-state-organisation"
            aria-labelledby="heading-chronic-organisation"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-chronic-organisation"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Chronic State Organisation
            </h2>

            <p style={proseStyle}>
              A state becomes chronic when the nervous system does not return to physiological baseline — when stress hormones remain elevated, muscles stay braced, the HPA axis does not stand down, and the restoration sequence does not run to its endpoint. The mechanism is the same for every state: baseline is not restored, and the temporary activation becomes the system{"\u2019"}s default organization.
            </p>
            <p style={proseStyle}>
              When this happens, perception, behavior, and relational patterns begin to organize around the chronic state. What began as a state-dependent physiological configuration becomes indistinguishable, from the inside, from who the person is. The capacity restrictions described in State Determines Capacity stop being temporary responses and become the person{"\u2019"}s permanent operating configuration.
            </p>

            {/* Projection Table — what each chronic state delivers */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 2fr", minWidth: 600 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Chronic State</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What the locked filter finds</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What the person experiences</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Everyone{"\u2019"}s emotions at full volume, own signal absent</div>
                <div style={gridCellStyle}>The world is other people{"\u2019"}s states. Own needs invisible.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Threat & Defence</div>
                <div style={gridCellStyle}>Threat signals everywhere, safety signals filtered out</div>
                <div style={gridCellStyle}>The world is dangerous. Trust is impossible.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Strategy & Management</div>
                <div style={gridCellStyle}>Everyone appears to have an agenda, everything requires managing</div>
                <div style={gridCellStyle}>The world is a system of competing interests.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power & Dominance</div>
                <div style={gridCellStyle}>Everyone appears to be trying to cheat, undermine, or challenge</div>
                <div style={gridCellStyle}>The world is full of enemies. Preemptive attack as defence.</div>
              </div>
            </div>

            <p style={proseStyle}>
              When a state becomes chronic, the perceptual filter associated with that state also becomes chronic. The person is no longer only reacting to present conditions. They are perceiving new situations through a filter calibrated by past activation. Because the filtering occurs upstream of deliberate reasoning, cognition builds a coherent explanation around already-biased input. The person does not experience themselves as distorting reality. They experience themselves as perceiving it directly.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Any state that replaces physiological baseline becomes chronic. The defining structural problem is always the same: the system is not returning to rest.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>van der Kolk (2014)</strong> — nervous systems calibrated to chronic threat. <strong style={{ color: TEXT.primary }}>Levine (1997)</strong> — activation that does not complete stays in the body. <strong style={{ color: TEXT.primary }}>Schore (2003)</strong> — early relational conditions shaping regulatory capacity. <strong style={{ color: TEXT.primary }}>McEwen (2000)</strong> — allostatic load as the cost of chronic adaptation. <strong style={{ color: TEXT.primary }}>Bar-Haim et al. (2007)</strong> — threat-related attentional bias as automatic, pre-conscious.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  TEG-Blue maps chronic states as stuck nervous system organizations across all four states equally — including Safety & Openness, which becomes another form of chronic activation when the nervous system stops returning to physiological baseline. Projection is reframed as a consequence of locked state-dependent filtering, operating upstream of cognition.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C14: THE STATE-REINFORCING LOOP ────────── */}
          <section
            id="state-reinforcing-loop"
            aria-labelledby="heading-reinforcing-loop"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-reinforcing-loop"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              The State-Reinforcing Loop
            </h2>

            <p style={proseStyle}>
              Once a state becomes chronic, it can begin to sustain itself through a recursive loop: <strong style={{ color: TEXT.primary }}>state {"\u2192"} filter {"\u2192"} input {"\u2192"} confirmation of state</strong>. The physiological configuration of the active state — the hormonal balance, muscle tension, sensory filtering settings — shapes what information reaches the person. That filtered input then appears to confirm the necessity of the state. The nervous system receives ongoing evidence that its current organization is correct, even when the environment has changed.
            </p>
            <p style={proseStyle}>
              Each chronic state produces the environmental conditions that confirm its own necessity. Chronic Threat & Defence: perpetual vigilance confirms the threat, producing more isolation, confirming the danger. Chronic Strategy & Management: permanent management generates resistance in the people being managed, confirming the instability, requiring more management. Chronic Power & Dominance: tyranny produces fear and opposition, confirming the sense of peril, requiring more force.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The exit from the loop is not insight but experience — the nervous system receiving different inputs through the same sensory channels, repeatedly and consistently enough that the filter recalibrates.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Beck (1976)</strong> — self-reinforcing cognitive schemas. <strong style={{ color: TEXT.primary }}>Bowlby (1969, 1980)</strong> — attachment working models as self-confirming templates. <strong style={{ color: TEXT.primary }}>Watzlawick, Weakland & Fisch (1974)</strong> — the persistence of problems through attempted solutions. <strong style={{ color: TEXT.primary }}>Mikulincer & Shaver (2007)</strong> — attachment dynamics as self-reinforcing regulation patterns.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  TEG-Blue locates the self-reinforcing loop not only at the level of belief, but at the level of state-shaped perception. This helps explain why interrupting the loop often requires experience that changes the state at the physiological level — not only cognitive reinterpretation of the filtered input.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 4: TWO INFORMATION SYSTEMS                 */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 4" title="Two Information Systems" color={MODEL_COLOR} />

          {/* ─── C15: THE UNDERSTANDING-CHANGE GAP ─────── */}
          <section
            id="two-information-systems"
            aria-labelledby="heading-two-systems"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-two-systems"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              The Understanding-Change Gap
            </h2>

            <p style={proseStyle}>
              A person can understand their pattern cognitively and still remain organized by the same state under stress. This is because cognitive understanding and nervous system organization do not operate at the same speed or through the same mechanisms.
            </p>
            <p style={proseStyle}>
              The <strong style={{ color: TEXT.primary }}>emotional-somatic system</strong> activates in milliseconds, outside conscious awareness. It is experience-based, slow to update, slow to forget. This is the system that runs the states — the one that orients between safety and threat before conscious awareness begins.
            </p>
            <p style={proseStyle}>
              The <strong style={{ color: TEXT.primary }}>cognitive-logical system</strong> operates in hundreds of milliseconds. It is conscious, explanation-based, fast to update, fast to revise. This is the system that processes information, constructs narratives, plans, analyzes.
            </p>
            <p style={proseStyle}>
              The emotional-somatic system arrives first. By the time cognition engages, the state has already shifted. Cognition does not direct the process — it narrates a process already underway. State change usually requires new experience — repeated experiences of sufficient safety, biological restoration running to its endpoint, or co-regulated contact. These experiences update the system at the level where the state is being generated.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Understanding is cognitive. The state is somatic. More cognition does not move a somatic system. What moves it is experience.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Kahneman (2011)</strong> — System 1 (fast, automatic) and System 2 (slow, deliberate). <strong style={{ color: TEXT.primary }}>LeDoux (1996)</strong> — emotional processing preceding conscious awareness. <strong style={{ color: TEXT.primary }}>van der Kolk (2014)</strong> — somatic memory operating independently of cognitive understanding.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  TEG-Blue proposes an account of the gap between understanding and change through the distinction between two information systems operating at different speeds. Understanding supports the process. It does not replace the need for nervous system change through lived experience.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS MODEL DOES NOT YET ANSWER ─────── */}
          <section
            id="forward"
            aria-labelledby="heading-forward"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-forward"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              What This Model Does Not Yet Answer
            </h2>

            <p style={proseStyle}>
              M2 has mapped what happens after a signal fires: the nervous system shifts into a state, that state reorganizes perception and capacity, and when the state becomes chronic, the filter locks and the loop self-reinforces.
            </p>
            <p style={proseStyle}>
              But each of these states was designed to resolve. The nervous system has a built-in capacity to return toward physiological baseline once activation has served its function. So what interferes with that return? What accumulates when the restoration sequence does not run to its endpoint — when stress hormones remain, muscles stay braced, the nervous system does not return toward baseline? Those questions belong to{" "}
              <Link href="/model/m3-regulation-capacities" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M3</Link>.
            </p>
            <p style={proseStyle}>
              And there is a second question beneath the first. Some people feel the state shift. They notice the narrowing. They catch the filter engaging. Others do not. They are inside the state and have no awareness that they are inside it — they experience the filtered output as reality, not as a state-dependent perception. What determines this difference is the territory of{" "}
              <Link href="/model/m4-awareness-capacities" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M4</Link>.
            </p>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* THE DIAGRAM — Interactive Compass Explorer       */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="EXPLORE" title="The Inner Compass" color={MODEL_COLOR} />

          <section
            id="compass-explorer"
            aria-labelledby="heading-compass-explorer"
            style={{ marginBottom: 48 }}
          >
            <p style={{ ...proseStyle, marginBottom: 24 }}>
              Move through the four-state gradient below. Each position shows what the nervous system enables and restricts — perception, empathy, cognition, learning, relational capacity, and temporal horizon.
            </p>

            <FluidCompassExplorer />
          </section>

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={MODEL_COLOR}
            connections={[
              {
                id: "M1: Emotions as Signals",
                href: "/model/m1-emotions-as-signals",
                description: "Describes the signals that trigger M2's state shifts — what the nervous system detected and the physiological response it generated. The signal is the input; the state is the reorganization that follows.",
              },
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "Describes whether the activation sequence completes — whether the restoration pathway runs to its endpoint and the nervous system returns to physiological baseline, or the activation remains unresolved.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "Describes what determines whether the person can perceive the state shift at all — the interoceptive substrate, the awareness capacities, and why some people feel the shift while others experience filtered output as reality.",
              },
              {
                id: "F1: The Emotional Gradient",
                href: "/framework/f1-emotional-gradient",
                description: "Provides the biological origin of the architecture M2 describes — why the nervous system evaluates along a safety-threat gradient, and how this orientation shapes the four-state system.",
              },
              {
                id: "F2: The Developmental Blueprint",
                href: "/framework/f2-developmental-blueprint",
                description: "Explains how the relational environment during development determines whether State Flexibility builds or the system becomes organized around a chronic position.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={MODEL_COLOR}
            items={[
              {
                label: "Understand what happens when the activation cycle completes — and what happens when the restoration sequence does not run to its endpoint",
                href: "/model/m3-regulation-capacities",
                linkText: "M3: Regulation Capacities \u2192",
              },
              {
                label: "Understand what determines whether the person can feel the state shift at all",
                href: "/model/m4-awareness-capacities",
                linkText: "M4: Awareness Capacities \u2192",
              },
              {
                label: "See the sixteen emotions mapped as biological signals — the input that triggers the state M2 describes",
                href: "/model/m1-emotions-as-signals",
                linkText: "M1: Emotions as Signals \u2192",
              },
              {
                label: "Explore the foundational theory behind the four-state gradient",
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

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/model/m2-nervous-system-states#article",
            headline: "Nervous System States: The Instrument",
            description:
              "What happens after an emotion fires — four states grounded in two biological branches, how each state changes perception, and what happens when it becomes permanent. Model M2 of the TEG-Blue system.",
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
            datePublished: "2026-03-05",
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
              "@id": "https://teg-blue.org/model/m2-nervous-system-states",
            },
            about: [
              { "@type": "Thing", name: "Nervous System States" },
              { "@type": "Thing", name: "Four-Mode Gradient" },
              { "@type": "Thing", name: "Safety-Threat Orientation" },
              { "@type": "Thing", name: "Sensory Filtering" },
              { "@type": "Thing", name: "State Determines Capacity" },
            ],
            keywords: [
              "nervous system states",
              "four-mode gradient",
              "safety-threat orientation",
              "sensory filtering",
              "state determines capacity",
              "chronic state organisation",
              "two information systems",
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
              { name: "M2: Nervous System States", url: "/model/m2-nervous-system-states" },
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
                question: "What are the four nervous system states in the TEG-Blue model?",
                answer:
                  "The four states are Safety & Openness (parasympathetic dominant — perception broadens, empathy online), Threat & Defence (sympathetic activation — body mobilizes for emergency), Strategy & Management (cognition recruited into threat service — strategic thinking, management), and Power & Dominance (cognition at maximum threat response — vmPFC suppressed, guilt and empathy structurally unavailable). The first two are organized by the emotional-somatic system (automatic), the second two by the cognitive-logical system recruited into threat service. They sit on a continuous gradient, not as four separate boxes.",
              },
              {
                question: "What does 'state determines capacity' mean?",
                answer:
                  "State Determines Capacity means that what a person can perceive, think, feel, and do depends on their Current State Position on the nervous system gradient. In Safety & Openness, perception is broad and empathy is available. In threat states, these capacities progressively narrow — not through choice but through the nervous system's allocation of resources based on its safety-threat evaluation.",
              },
              {
                question: "What is sensory filtering in the TEG-Blue model?",
                answer:
                  "Each nervous system state sets specific filters on all incoming sensory data — eyes, ears, nose, gut, skin — before any conscious thought forms. In Safety & Openness the channels are wide open. In threat states they progressively narrow. When a state becomes chronic, the filter settings lock — the person perceives a pre-filtered version of reality calibrated to their chronic state.",
              },
              {
                question: "What is State Flexibility?",
                answer:
                  "State Flexibility is the nervous system's capacity to shift state in response to changing conditions and return toward physiological baseline when activation has served its function. It is the key measure of M2. The Current State Position tells you where the system is on the gradient. State Flexibility tells you whether it can leave. Any state — including Safety & Openness — becomes chronic when State Flexibility is lost.",
              },
              {
                question: "Why doesn't understanding a pattern change it?",
                answer:
                  "Because two information systems run simultaneously at different speeds. The emotional-somatic system (milliseconds, unconscious, experience-based) runs the nervous system states. The cognitive-logical system (hundreds of milliseconds, conscious, explanation-based) processes information and constructs narratives. Understanding is cognitive. The state is somatic. More cognition does not move a somatic system. What moves it is experience — new experiences of safety and co-regulation.",
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
              name: "Nervous System States (M2) — TEG-Blue Research",
              url: "https://teg-blue.org/model/m2-nervous-system-states",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}
