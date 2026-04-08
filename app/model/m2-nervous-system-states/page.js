import Link from "next/link";
import dynamic from "next/dynamic";
import { BG, TEXT, FONT, SPECTRUM, PATTERN, MODEL_COLORS, hexToRgba } from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, ModelPurpose, ExpandableSection,
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

const M2StateDiagram = dynamic(
  () => import("@/src/components/M2StateDiagram"),
  { ssr: false }
);
const M2SignalState = dynamic(
  () => import("@/src/components/M2SignalState"),
  { ssr: false }
);
const M2ReinforcingLoop = dynamic(
  () => import("@/src/components/M2ReinforcingLoop"),
  { ssr: false }
);
const M2SafetyEvaluation = dynamic(
  () => import("@/src/components/M2SafetyEvaluation"),
  { ssr: false }
);
const M2PhysiologicalBaseline = dynamic(
  () => import("@/src/components/M2PhysiologicalBaseline"),
  { ssr: false }
);
const M2FourStates = dynamic(
  () => import("@/src/components/M2FourStates"),
  { ssr: false }
);
const M2Gradient = dynamic(
  () => import("@/src/components/M2Gradient"),
  { ssr: false }
);

const MODEL_COLOR = MODEL_COLORS.M2;

const linkStyle = { color: MODEL_COLOR, textDecoration: "none" };

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
    "state flexibility",
    "state determines capacity",
    "chronic state organisation",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m2-nervous-system-states",
  },
  openGraph: {
    title: "Nervous System States — M2 Model | TEG-Blue",
    description:
      "Four nervous system states on a continuous gradient — how each reorganizes perception, cognition, and relational capacity.",
    url: "https://teg-blue.org/model/m2-nervous-system-states",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nervous System States — TEG-Blue M2",
    description:
      "Four nervous system states on a continuous gradient — how each reorganizes perception, cognition, and relational capacity.",
  },
  other: {
    "citation_title": "Nervous System States",
    "citation_author": "Anna Paretas-Artacho",
    "citation_publication_date": "2026/02",
    "citation_technical_report_institution": "TEG-Blue Research",
  },
};

export default function M2NervousSystemStatesPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/model/m2-nervous-system-states" />

      <PageLayout
        header={
          <ModelHero
            badge="MODEL M2"
            title="Nervous System States"
            subtitle="The Instrument"
            description="When something registers as safe or threatening, the nervous system does not simply detect it and move on. It reorganizes — muscle tension redistributes, heart rate shifts, hormonal balance changes, sensory filtering adjusts, cognitive access expands or contracts. The result is a state: a system-wide physiological configuration that determines what can be perceived, thought, felt, and done. This model maps four such states, what each one makes available or restricts, and whether the system can move between them."
            coreQuestion="What state is the nervous system in right now — and can it move?"
            drawsFrom={[
              { label: "M1", href: "/model/m1-emotions-as-signals" },
              { label: "M3", href: "/model/m3-regulation-capacities" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
              { label: "F1", href: "/framework/f1-emotional-gradient" },
            ]}
            color={MODEL_COLOR}
          />
        }
      >
        <M2StateDiagram />

        <article>

          {/* INTRODUCTION */}
          <section style={{ marginBottom: 48 }}>
            <p style={proseStyle}>
              The nervous system is continuously evaluating a core question: is there sufficient safety to engage, or is protection required? This evaluation is automatic, rapid, and based on experienced safety — not objective conditions alone. A person may feel threatened in an environment that appears objectively safe, or fail to detect danger in an environment that is objectively unsafe. The system responds to what it has learned to classify, whether or not that classification matches present reality.
            </p>
            <p style={proseStyle}>
              When this evaluation shifts, the entire system reorganizes. Muscle tension redistributes. Sensory filtering adjusts. Cognitive access expands or contracts. Heart rate and hormonal balance change. The result is not a mood or an emotion — it is a physiological configuration that determines what aspects of reality are likely to be registered in the first place. A threat-related signal narrows processing. A safety-related signal broadens it. This shift happens before conscious awareness has time to form an interpretation.
            </p>
            <p style={proseStyle}>
              All four states — including the safest — are designed to be temporary. The nervous system is built to return to physiological baseline after each activation. When it does not, any state can become chronic — and a chronic state reorganizes perception, cognition, and relational capacity so thoroughly that the reorganization may no longer be recognizable as a state at all.
            </p>
            <p style={proseStyle}>
              The key measure is not which state the system occupies. It is whether the system retains the capacity to move — to shift in response to changing conditions, and to return to rest.
            </p>
          </section>

          {/* CORE PROPOSITIONS */}
          <section id="core-propositions" aria-labelledby="heading-core-propositions" style={{ marginBottom: 48 }}>
            <h2 id="heading-core-propositions" style={sectionHeadingStyle(MODEL_COLOR)}>Core Propositions</h2>
            <ModelPurpose color={MODEL_COLOR}>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li style={propositionItemStyle}>The nervous system continuously evaluates whether conditions are safe enough for engagement or require protection. This evaluation is automatic, rapid, and based on experienced safety — not objective conditions alone.</li>
              <li style={propositionItemStyle}>Four nervous system states are grounded in two biological branches: parasympathetic regulation supports Safety & Openness; sympathetic activation supports Threat & Defence, Strategy & Management, and Power & Dominance.</li>
              <li style={propositionItemStyle}>State determines capacity. What a person can perceive, think, feel, learn, and tolerate depends on their current state position — resource allocation, not choice.</li>
              <li style={propositionItemStyle}>The state shapes what sensory information reaches the person before deliberate thought is formed. The world the person perceives is already filtered.</li>
              <li style={propositionItemStyle}>All four states — including Safety & Openness — are temporary activations designed to return to physiological baseline. No state is the destination.</li>
              <li style={propositionItemStyle}>The key measure is State Flexibility — whether the nervous system can shift state and return to physiological baseline. The current state position tells you where the system is. State Flexibility tells you whether it can leave.</li>
              <li style={propositionItemStyle}>Cognitive understanding and nervous system organization do not operate at the same speed. Insight supports recognition but does not guarantee that the nervous system will reorganize differently in real time.</li>
            </ul>
            </ModelPurpose>
          </section>

          {/* PART 1: THE STATES */}
          <PartDivider label="PART 1" title="The States" color={MODEL_COLOR} />

          {/* C0: CORE SAFETY EVALUATION */}
          <section id="core-safety-evaluation" aria-labelledby="heading-cse" style={{ marginBottom: 48 }}>
            <h2 id="heading-cse" style={sectionHeadingStyle(MODEL_COLOR)}>The Core Safety Evaluation</h2>
            <p style={proseStyle}>The nervous system is continuously evaluating a core question: <strong style={{ color: TEXT.primary }}>Is there sufficient safety to engage, or is protection required?</strong></p>
            <p style={proseStyle}>This evaluation operates continuously and outside conscious awareness. Emotional signals can be understood as outputs of this process, and nervous system states as the system-wide reorganization that follows from it.</p>
            <p style={proseStyle}>This process does not depend on deliberate reasoning. It is rapid, automatic, and based on experienced safety, not objective conditions alone. For that reason, a person may feel threatened in an environment that appears objectively safe, or may fail to detect danger in an environment that is objectively unsafe. The nervous system responds to what it has learned to classify as safe or threatening, whether or not that classification matches present reality.</p>
            <p style={proseStyle}>From a survival perspective, false negatives are more costly than false positives. Failing to detect danger may be fatal, while unnecessarily activating protection is usually less costly. For that reason, the system is biased toward protection under uncertainty.</p>

            <div style={{ margin: "24px 0" }}>
              <M2SafetyEvaluation />
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>Porges (2011) — neuroception as continuous below-awareness safety/threat evaluation. Damasio (1994) — somatic markers guiding cognition through body-state signals. LeDoux (1996) — threat detection running faster than conscious processing.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue frames this safety evaluation as the central organizing principle of the entire state architecture. The question M2 answers is what the nervous system is currently evaluating as safe or threatening.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* C1: PHYSIOLOGICAL BASELINE */}
          <section id="physiological-baseline" aria-labelledby="heading-baseline" style={{ marginBottom: 48 }}>
            <h2 id="heading-baseline" style={sectionHeadingStyle(MODEL_COLOR)}>Physiological Baseline</h2>
            <p style={proseStyle}>The nervous system at rest. Not numb, not inactive — ready. The body{"'"}s resources available, not deployed. Cortisol at resting level. Muscles at resting tension. Heart rate at resting pace. The HPA axis standing down.</p>
            <p style={proseStyle}>Physiological baseline is the condition the nervous system is designed to return to after activation. It is not one of the four states. It is the neutral ground from which the system enters a state when conditions require it, and returns when the body{"'"}s activation sequence has completed.</p>
            <p style={proseStyle}>This distinction matters because Safety & Openness — the state closest to baseline — is still a state. It is a parasympathetic-dominant activation that arises when conditions support engagement. Baseline is what exists before any activation, and what the system returns to when activation resolves. A person in Safety & Openness is engaged. A person at physiological baseline is at rest.</p>
            <p style={proseStyle}>If the nervous system never returns to this resting condition, any state — including Safety & Openness — can become the system{"'"}s chronic organizing mode. In Path A (<Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link>), activation resolves and the system returns to physiological baseline. In Path B (M3), the baseline itself shifts upward — baseline elevation, where resting cortisol, muscle tension, and inflammatory markers remain chronically elevated — and the system treats the elevated level as its new resting state.</p>

            <div style={{ margin: "24px 0" }}>
              <M2PhysiologicalBaseline />
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>McEwen (2000) — allostasis and the distinction between resting baseline and adapted set-point. Porges (2011) — autonomic flexibility measured relative to resting vagal tone. Thayer & Lane (2000) — heart rate variability as a marker of baseline autonomic regulation.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue distinguishes physiological baseline from all four states, including Safety & Openness. This establishes that the key measure of the state system is not which state a person occupies, but whether the nervous system retains the capacity to return to baseline — State Flexibility. All four states are designed to return to physiological baseline. When baseline is not restored, any state becomes chronic.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* C2: TWO BRANCHES, FOUR STATES */}
          <section id="four-states" aria-labelledby="heading-four-states" style={{ marginBottom: 48 }}>
            <h2 id="heading-four-states" style={sectionHeadingStyle(MODEL_COLOR)}>Two Biological Branches, Four Nervous System States</h2>
            <p style={proseStyle}>The state system is grounded in two primary biological branches of autonomic regulation. The <strong style={{ color: TEXT.primary }}>parasympathetic branch</strong>, particularly the ventral vagal system, supports safety, social engagement, and physiological settling. The <strong style={{ color: TEXT.primary }}>sympathetic branch</strong> supports mobilization, vigilance, and defensive action.</p>
            <p style={proseStyle}>From these biological foundations, four distinct states are described:</p>

            <h3 style={conceptHeadingStyle}>1. Safety & Openness</h3>
            <p style={proseStyle}>A parasympathetic-dominant state organized around engagement, connection, and broader perception. Heart rate settles. Vagal tone is high. The social engagement system activates — face, voice, middle ear orient toward connection. Perception broadens. Empathy comes fully online. Cognition can hold complexity, tolerate ambiguity, consider multiple perspectives. Learning, repair, and vulnerability become available. A person can experience grief, conflict, or difficulty while remaining in this state — what defines it is not the emotional content but the nervous system{"'"}s capacity to stay engaged without shifting into defensive narrowing.</p>

            <h3 style={conceptHeadingStyle}>2. Threat & Defence</h3>
            <p style={proseStyle}>A sympathetic state organized around immediate protection. Heart rate rises, muscles tense, cortisol and adrenaline release. Attention narrows toward threat-relevant cues. Emotional intensity increases. Cognition simplifies — binary thinking, speed over accuracy. The time horizon collapses to the immediate. Fight or flight as primary response; freeze or fawn as energy-depletion fallbacks when fight/flight is not available. This is an emergency system designed for minutes to hours.</p>

            <h3 style={conceptHeadingStyle}>3. Strategy & Management</h3>
            <p style={proseStyle}>A continued threat state in which cognitive resources are recruited into defensive organization. The system shifts from immediate survival response to strategic anticipation, control, and management. Cognition is not being used for open exploration — it is organizing around threat. The future is a threat landscape to be mapped, not an open space to inhabit. This state can appear highly functional from the outside. The person may seem composed, capable, and organized. But the underlying system is still operating under threat conditions.</p>

            <h3 style={conceptHeadingStyle}>4. Power & Dominance</h3>
            <p style={proseStyle}>A maximal threat state organized around control, suppression of resistance, and elimination of obstacle. The ventromedial prefrontal cortex — the region that carries guilt, care, empathy, and consequence — is suppressed. Other people are processed in terms of threat, utility, resistance, or obstacle value. In temporary and extreme situations, this state may serve survival. When it becomes chronic, the system loses access to the internal signals that would normally restrain harmful action.</p>

            <p style={proseStyle}>The first two states are primarily organised by the emotional-somatic system — the body{"'"}s detection and response architecture sets the state before conscious processing arrives. The latter two are states in which the cognitive-logical system is increasingly recruited into the threat response. This is not simply greater intensity. It is a shift in which system organises the response.</p>

            <div style={{ margin: "24px 0" }}>
              <M2FourStates />
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>Porges (2011) — polyvagal theory: ventral vagal (social engagement), sympathetic (mobilisation), dorsal vagal (immobilisation). Dana (2018) — clinical application of the autonomic hierarchy. Panksepp (1998) — primary emotional systems as biological processes.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue makes explicit the distinction between emotional-somatic-led and cognitive-logical-recruited states, treating this not as a simple escalation in intensity but as a qualitative shift in which system organises the response.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* C7: THE GRADIENT */}
          <section id="the-gradient" aria-labelledby="heading-gradient" style={{ marginBottom: 48 }}>
            <h2 id="heading-gradient" style={sectionHeadingStyle(MODEL_COLOR)}>The Nervous System Gradient</h2>
            <p style={proseStyle}>The four states are positions along a continuous gradient of nervous system organisation — a gradient of autonomic tone, from parasympathetic dominance through increasing sympathetic activation, with measurable shifts in heart rate variability, cortisol levels, muscle tension, and sensory filtering at each point.</p>
            <p style={proseStyle}>The system{"'"}s position on the gradient at any given moment is its <strong style={{ color: TEXT.primary }}>Current State Position</strong> — a continuously updated read-out of how the nervous system is currently organised, determined by the safety-threat evaluation running below conscious awareness. The position is never static unless the state has become chronic.</p>
            <p style={proseStyle}>Whether the system can move is the most important measure in M2. TEG-Blue calls this <strong style={{ color: TEXT.primary }}>State Flexibility</strong> — the nervous system{"'"}s capacity to shift state in response to changing conditions and return toward physiological baseline when activation has served its function. A person in Threat & Defence who can move back toward Safety & Openness when conditions change is fundamentally different from a person in Threat & Defence whose system has locked there. The Current State Position tells you where the system is. State Flexibility tells you whether it can leave.</p>
            <p style={proseStyle}>When State Flexibility is present, the system responds — it shifts into threat states when needed and returns to baseline when the threat has passed. When State Flexibility is lost, the system is locked. Restoration (<Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link>) is what restores flexibility — as biological completion lowers the baseline, states that were previously inaccessible become reachable again. State Flexibility is not built through insight. It is restored through the body completing what it started.</p>

            <div style={{ margin: "24px 0" }}>
              <M2Gradient />
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>Porges (2011) — the autonomic hierarchy as a graded response system. Dana (2018) — the autonomic ladder as a clinical tool. Ogden, Minton & Pain (2006) — the window of tolerance as a range, not a state.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue reframes the system from static categories to a movable range and introduces two measures that matter more than the states themselves: Current State Position (where the system is now) and State Flexibility (whether it can move). The system is better measured by flexibility and return capacity than by which state it occupies.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* PART 2: WHAT THE STATE DOES */}
          <PartDivider label="PART 2" title="What the State Does" color={MODEL_COLOR} />

          {/* C8: STATE DETERMINES CAPACITY */}
          <section id="state-determines-capacity" aria-labelledby="heading-sdc" style={{ marginBottom: 48 }}>
            <h2 id="heading-sdc" style={sectionHeadingStyle(MODEL_COLOR)}>State Determines Capacity</h2>
            <p style={proseStyle}>What a person can perceive, think, feel, learn, tolerate, and do depends on their Current State Position on the gradient. The nervous system configures what becomes available based on the level of safety or threat it has detected — resource allocation determined by state, not by choice.</p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr", minWidth: 900 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Capacity</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Baseline</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Safety & Openness</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Threat & Defence</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Strategy & Mgmt</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Power & Dominance</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Perception</div>
                <div style={gridCellStyle}>Open — available but not directed</div>
                <div style={gridCellStyle}>Broad — sees the full field</div>
                <div style={gridCellStyle}>Narrowed — threat-relevant signals</div>
                <div style={gridCellStyle}>Strategic — what needs managing</div>
                <div style={gridCellStyle}>Tunnel — obstacles and resources</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Empathy</div>
                <div style={gridCellStyle}>Available — not engaged</div>
                <div style={gridCellStyle}>Full — resonance online</div>
                <div style={gridCellStyle}>Filtered — resonance decreases</div>
                <div style={gridCellStyle}>Redirected — reading for strategy</div>
                <div style={gridCellStyle}>Collapsed — resonance offline</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Cognition</div>
                <div style={gridCellStyle}>Resting — capable, not mobilised</div>
                <div style={gridCellStyle}>Flexible — holds complexity</div>
                <div style={gridCellStyle}>Simplified — binary, speed over accuracy</div>
                <div style={gridCellStyle}>Strategic — narrowed to threat</div>
                <div style={gridCellStyle}>Locked — rigid, self-confirming</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Learning</div>
                <div style={gridCellStyle}>Receptive — open</div>
                <div style={gridCellStyle}>Available — integrates</div>
                <div style={gridCellStyle}>Reduced — contradictions filtered</div>
                <div style={gridCellStyle}>Selective — serves strategy only</div>
                <div style={gridCellStyle}>Unavailable — not open to revision</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Relational</div>
                <div style={gridCellStyle}>Present — not deployed</div>
                <div style={gridCellStyle}>Full — repair, trust available</div>
                <div style={gridCellStyle}>Limited — vulnerability dangerous</div>
                <div style={gridCellStyle}>Managed — relationships serve strategy</div>
                <div style={gridCellStyle}>Absent — others as obstacles</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Temporal</div>
                <div style={gridCellStyle}>Neutral — no orientation</div>
                <div style={gridCellStyle}>Full range — past, present, future</div>
                <div style={gridCellStyle}>Collapsed — immediate only</div>
                <div style={gridCellStyle}>Defensive future — next threat</div>
                <div style={gridCellStyle}>Compressed — no future beyond obstacle</div>
              </div>
            </div>

            <p style={proseStyle}>The mechanism is structurally different depending on whether the state is absent, temporary, or permanent. From <strong style={{ color: TEXT.primary }}>physiological baseline</strong>, capacities are available but not deployed. From <strong style={{ color: TEXT.primary }}>acute activation</strong>, the nervous system has shifted configuration — the person knows they are activated, the state is temporary, and when activation resolves capacity restrictions lift. From <strong style={{ color: TEXT.primary }}>chronic activation</strong>, three things converge: the capacity restrictions become the operating architecture, the biological substrate that awareness requires degrades over time, and the state becomes invisible to the person inside it.</p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>Fredrickson (2001) — broaden-and-build: safety broadens cognitive and perceptual capacity. Arnsten (2009) — prefrontal function degrades under stress. Sapolsky (2004) — chronic stress restricts learning, memory, and temporal horizon. Porges (2011) — social engagement system availability depends on autonomic state.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue tracks state-dependent change across multiple capacities simultaneously and distinguishes three conditions under which state determines capacity: from physiological baseline (available, not deployed), from acute activation (temporary, restrictions lift when the state resolves), and from chronic activation (permanent, substrate degradation progressive, invisible to the person inside it).</p>
              </ExpandableSection>
            </div>
          </section>

          {/* C9: SENSORY FILTERING */}
          <section id="sensory-filtering" aria-labelledby="heading-sf" style={{ marginBottom: 48 }}>
            <h2 id="heading-sf" style={sectionHeadingStyle(MODEL_COLOR)}>State-Dependent Sensory Filtering</h2>
            <p style={proseStyle}>The state does not only shape what the person does with reality. It also shapes what aspects of reality are most likely to be registered in the first place.</p>
            <p style={proseStyle}>Sensory input reaches the nervous system before conscious interpretation is assembled. Once a state is active, incoming information is filtered accordingly. In states of greater safety, sensory input is processed with more openness to context, nuance, tone, and relational meaning. In states of greater threat, sensory systems become increasingly tuned toward danger, instability, and threat-relevant cues.</p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", minWidth: 500 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>State</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What the Filter Delivers</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What the Person Experiences</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Channels wide open. Eyes reading faces, context, nuance. Ears picking up warmth, prosody. Gut relaxed, feeding accurate interoceptive data.</div>
                <div style={gridCellStyle}>The world looks like it is.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Threat & Defence</div>
                <div style={gridCellStyle}>Channels narrow toward threat detection. Pupils dilate. Peripheral vision sharpens. Ears tune to sudden sounds. Gut tightens.</div>
                <div style={gridCellStyle}>The world looks dangerous.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Strategy & Management</div>
                <div style={gridCellStyle}>Narrowing becomes strategic. Eyes scanning for power, concealment. Ears reading what people are really after. Gut suppressed.</div>
                <div style={gridCellStyle}>The world looks like a system to be managed.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power & Dominance</div>
                <div style={gridCellStyle}>Tunnel. Visual field narrows to the obstacle. Peripheral information drops. Ears hear only what confirms the threat assessment. Gut gone.</div>
                <div style={gridCellStyle}>The world looks full of people trying to take something.</div>
              </div>
            </div>

            <p style={proseStyle}>This is the mechanism behind {"\u201C"}State Determines Capacity.{"\u201D"} The state does not just limit what the person can do in response to input — it limits what input reaches the person in the first place.</p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>LeDoux (1996) — pre-conscious threat detection, amygdala processing before cortical awareness. Bar-Haim et al. (2007) — threat-related attentional bias. Porges (2011) — neuroception operating below conscious awareness through multiple sensory channels.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue makes sensory filtering central to the explanation of why state determines capacity. The state is not only a reaction to perception. It is also a mechanism that shapes perception itself.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* C10: STATE-MODIFIED SIGNAL EXPERIENCE */}
          <section id="state-modified-signal" aria-labelledby="heading-sms" style={{ marginBottom: 48 }}>
            <h2 id="heading-sms" style={sectionHeadingStyle(MODEL_COLOR)}>State-Modified Signal Experience</h2>
            <p style={proseStyle}>An emotional signal does not produce the same lived experience in every state. The signal itself may remain the same, but the state in which it arrives changes how it is processed, expressed, tolerated, and interpreted.</p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", minWidth: 500 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Signal</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>In Safety & Openness</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>In Threat States</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Anger</div>
                <div style={gridCellStyle}>Signals a boundary; motivates repair and clarity</div>
                <div style={gridCellStyle}>Mobilises defence; escalates; becomes attack, self-blame, cold correction, or contempt</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Fear</div>
                <div style={gridCellStyle}>Signals genuine threat; promotes appropriate caution</div>
                <div style={gridCellStyle}>Generalises; becomes hypervigilance; restricts engagement</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Sadness</div>
                <div style={gridCellStyle}>Processes loss; invites support and reflection</div>
                <div style={gridCellStyle}>Becomes withdrawal; deepens isolation; hardens into hopelessness</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Joy</div>
                <div style={gridCellStyle}>Celebrates; connects; broadens capacity</div>
                <div style={gridCellStyle}>Is distrusted; feels dangerous; may trigger threat</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Shame</div>
                <div style={gridCellStyle}>Signals misalignment; motivates repair</div>
                <div style={gridCellStyle}>Becomes identity; drives hiding; or is projected as contempt for others</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Guilt</div>
                <div style={gridCellStyle}>Signals harm done; motivates accountability</div>
                <div style={gridCellStyle}>Becomes paralysis; excessive self-blame; or is erased when vmPFC is suppressed</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Disgust</div>
                <div style={gridCellStyle}>Protects boundaries; signals contamination</div>
                <div style={gridCellStyle}>Dehumanises; creates othering; justifies exclusion</div>
              </div>
            </div>

            <p style={proseStyle}>For this reason, it is often insufficient to assess an emotion in isolation. What matters clinically and structurally is the combination of signal + state.</p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>Frijda (1986) — emotions as action tendencies shaped by context. Barrett (2017) — constructed emotion theory: the same physiological state producing different emotional experiences depending on context. Gross (2015) — emotion regulation as context-dependent process.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue proposes that outcomes depend on the interaction between the emotional signal and the nervous system state through which that signal is being processed — State-Modified Signal Experience.</p>
              </ExpandableSection>
            </div>

            <M2SignalState />
          </section>

          {/* PART 3: WHEN STATES BECOME CHRONIC */}
          <PartDivider label="PART 3" title="When States Become Chronic" color={MODEL_COLOR} />

          {/* C11: STATES AS TEMPORARY */}
          <section id="states-as-temporary" aria-labelledby="heading-temp" style={{ marginBottom: 48 }}>
            <h2 id="heading-temp" style={sectionHeadingStyle(MODEL_COLOR)}>States as Temporary Activations</h2>
            <p style={proseStyle}>All four nervous system states are designed as temporary activations, not permanent conditions. The nervous system is built to shift in response to changing conditions, organize around what is needed in the moment, and then return toward physiological baseline once the restoration sequence has run.</p>
            <p style={proseStyle}>Safety & Openness is the state closest to baseline, and it is often treated — implicitly or explicitly — as the destination: the place a person should try to reach and remain. It is not. It is a parasympathetic-dominant activation, not rest. A nervous system that remains perpetually organized around Safety & Openness — absorbing, engaging, resonating without returning to physiological rest — is as chronically activated as one organized around threat. The state is different. The structural problem is the same: the system is not returning to baseline.</p>
            <p style={proseStyle}>Any state that the nervous system cannot leave becomes chronic. The defining measure is not which state the system occupies. It is whether the system retains the capacity to move, respond, and return to physiological baseline.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>Porges (2011) — autonomic flexibility as a marker of health, not resting state. Thayer & Lane (2000) — heart rate variability as a measure of autonomic flexibility. Ogden, Minton & Pain (2006) — the window of tolerance as a flexible range.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue distinguishes physiological baseline from Safety & Openness: baseline is not the same as Safety & Openness, and no state is the destination. Chronicity is defined by one thing: whether the nervous system returns to physiological baseline.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* C12: CHRONIC STATE ORGANISATION */}
          <section id="chronic-states" aria-labelledby="heading-chronic" style={{ marginBottom: 48 }}>
            <h2 id="heading-chronic" style={sectionHeadingStyle(MODEL_COLOR)}>Chronic State Organisation</h2>
            <p style={proseStyle}>A state becomes chronic when the nervous system does not return to physiological baseline — when stress hormones remain elevated, muscles stay braced, the HPA axis does not stand down, and the restoration sequence does not run to its endpoint. The mechanism is the same for every state: baseline is not restored, and the temporary activation becomes the system{"'"}s default organization.</p>
            <p style={proseStyle}>When this happens, perception, behaviour, and relational patterns begin to organise around the chronic state. What began as a state-dependent physiological configuration becomes indistinguishable, from the inside, from who the person is.</p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", minWidth: 400 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Chronic State</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What It Looks Like</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Continual emotional absorption — resonating, engaging, taking in others{"'"} states without the nervous system ever returning to rest. Permanently available to others, permanently unavailable to self.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Threat & Defence</div>
                <div style={gridCellStyle}>The world as persistently unsafe — hypervigilance, constricted perception, relational withdrawal as a continuous condition rather than a temporary response.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Strategy & Management</div>
                <div style={gridCellStyle}>Highly functional appearance while remaining organized around vigilance, control, and defensive anticipation — cognition permanently recruited into threat service.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power & Dominance</div>
                <div style={gridCellStyle}>Increasingly structured around override, suppression of mutuality, and reduced access to guilt or relational impact — empathic constraint that should be temporary becomes a persistent absence.</div>
              </div>
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>van der Kolk (2014) — nervous systems calibrated to chronic threat; the body keeping score. Levine (1997) — activation that does not complete stays in the body. Schore (2003) — early relational conditions shaping regulatory capacity. McEwen (2000) — allostatic load as the cost of chronic adaptation.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue maps chronic states as stuck nervous system organizations across all four states equally — including Safety & Openness, which becomes another form of chronic activation when the nervous system stops returning to physiological baseline.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* C13: PROJECTION */}
          <section id="projection" aria-labelledby="heading-projection" style={{ marginBottom: 48 }}>
            <h2 id="heading-projection" style={sectionHeadingStyle(MODEL_COLOR)}>Projection as State-Locked Perceptual Bias</h2>
            <p style={proseStyle}>When a state becomes chronic, the perceptual filter associated with that state may also become chronic. At that point, the person is no longer only reacting to present conditions. They are perceiving new situations through a filter calibrated by past activation.</p>
            <p style={proseStyle}>Because the filtering occurs upstream of deliberate reasoning, cognition may simply build a coherent explanation around already-biased input. The person does not experience themselves as distorting reality. They experience themselves as perceiving it directly.</p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", minWidth: 500 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Chronic State</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What the Locked Filter Finds</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What the Person Experiences</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Everyone{"'"}s emotions at full volume, own signal absent</div>
                <div style={gridCellStyle}>The world is other people{"'"}s states. Own needs invisible.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Threat & Defence</div>
                <div style={gridCellStyle}>Threat signals everywhere, safety signals filtered out</div>
                <div style={gridCellStyle}>The world is dangerous. Trust is impossible.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Strategy & Management</div>
                <div style={gridCellStyle}>Everyone appears to have an agenda</div>
                <div style={gridCellStyle}>The world is a system of competing interests.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power & Dominance</div>
                <div style={gridCellStyle}>Everyone appears to be trying to cheat, undermine, or challenge</div>
                <div style={gridCellStyle}>The world is full of enemies.</div>
              </div>
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>Bar-Haim et al. (2007) — threat-related attentional bias as automatic, pre-conscious. Mathews & MacLeod (2005) — cognitive bias and emotional vulnerability. Beck (1976) — schema theory: pre-existing cognitive structures filtering incoming information.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue reframes projection as a consequence of locked state-dependent filtering. This makes it possible to understand why insight alone often does not correct it. The filter shaping the input is already active before reflective thought begins.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* C14: THE STATE-REINFORCING LOOP */}
          <section id="state-reinforcing-loop" aria-labelledby="heading-loop" style={{ marginBottom: 48 }}>
            <h2 id="heading-loop" style={sectionHeadingStyle(MODEL_COLOR)}>The State-Reinforcing Loop</h2>
            <p style={proseStyle}>Once a state becomes chronic, it can begin to sustain itself through a recursive loop: <strong style={{ color: TEXT.primary }}>state → filter → input → confirmation of state</strong>.</p>
            <p style={proseStyle}>The physiological configuration of the active state shapes what information reaches the person. That filtered input then appears to confirm the necessity of the state. The nervous system receives ongoing evidence that its current organisation is correct, and the physiological configuration that produced the filtering remains in place — even when the environment has changed.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>Beck (1976) — self-reinforcing cognitive schemas. Bowlby (1969, 1980) — attachment working models as self-confirming templates. Mikulincer & Shaver (2007) — attachment dynamics as self-reinforcing regulation patterns.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue locates the self-reinforcing loop not only at the level of belief, but at the level of state-shaped perception. This helps explain why interrupting the loop often requires experience that changes the state at the physiological level — not only cognitive reinterpretation of the filtered input.</p>
              </ExpandableSection>
            </div>

            <M2ReinforcingLoop />
          </section>

          {/* PART 4: TWO INFORMATION SYSTEMS */}
          <PartDivider label="PART 4" title="Two Information Systems" color={MODEL_COLOR} />

          {/* C15: THE UNDERSTANDING-CHANGE GAP */}
          <section id="understanding-change-gap" aria-labelledby="heading-gap" style={{ marginBottom: 48 }}>
            <h2 id="heading-gap" style={sectionHeadingStyle(MODEL_COLOR)}>The Understanding-Change Gap</h2>
            <p style={proseStyle}>A person can understand their pattern cognitively and still remain organized by the same state under stress.</p>
            <p style={proseStyle}>This is because cognitive understanding and nervous system organization do not operate at the same speed or through the same mechanisms. The emotional-somatic system activates rapidly, often before conscious thought has fully formed. Cognition comes later. It can describe, interpret, and reflect on the process, but it does not necessarily interrupt the state once it has been activated.</p>
            <p style={proseStyle}>Insight can support recognition, language, and meaning-making. But recognition alone does not guarantee that the nervous system will reorganize differently in real time.</p>
            <p style={proseStyle}>State change usually requires new experience, especially repeated experiences of sufficient safety, biological restoration running to its endpoint, or co-regulated contact. These experiences update the system at the level where the state is being generated. Understanding supports the process. It does not replace the need for nervous system change through lived experience.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>Kahneman (2011) — System 1 (fast, automatic) and System 2 (slow, deliberate). LeDoux (1996) — emotional processing preceding conscious awareness. van der Kolk (2014) — somatic memory operating independently of cognitive understanding.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue proposes an account of the gap between understanding and change through the distinction between two information systems: a faster emotional-somatic system and a slower cognitive-logical system. This clarifies why insight may be real and still not be enough.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* CONNECTIONS MAP */}
          <ConnectionsMap
            color={MODEL_COLOR}
            connections={[
              { id: "M1: Emotions as Signals", href: "/model/m1-emotions-as-signals", description: "Describes the signals that trigger state activation — M1 maps the signal, M2 maps the state the signal produces." },
              { id: "M3: Regulation Capacities", href: "/model/m3-regulation-capacities", description: "Describes whether activation resolves — whether the body completes the restoration sequence and the nervous system returns to baseline, or the activation persists and the state becomes chronic." },
              { id: "M4: Awareness Capacities", href: "/model/m4-awareness-capacities", description: "Describes what determines whether the person can perceive the state shift while it is happening — why some people notice the narrowing and others remain fully identified with the filtered output." },
              { id: "F1: The Emotional Gradient", href: "/framework/f1-emotional-gradient", description: "Provides the evolutionary origin of the autonomic architecture — why two biological branches produce four states and how the ESS and CLS co-evolved to produce this gradient." },
              { id: "F2: Developmental Calibration", href: "/framework/f2-awareness-calibration", description: "Explains how the relational environment during development shapes which states become chronic and whether State Flexibility develops." },
            ]}
          />

          {/* WHERE TO GO NEXT */}
          <NavSection
            color={MODEL_COLOR}
            items={[
              { label: "Understand how emotional signals are generated — the first stage of the cycle", href: "/model/m1-emotions-as-signals", linkText: "M1: Emotions as Signals \u2192" },
              { label: "See whether the activation sequence completes — and what accumulates when it does not", href: "/model/m3-regulation-capacities", linkText: "M3: Regulation Capacities \u2192" },
              { label: "Understand what determines whether the person can perceive the state shift", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "Explore the biological origin of the four-state gradient", href: "/framework/f1-emotional-gradient", linkText: "F1: The Emotional Gradient \u2192" },
              { label: "Explore the interactive tools", href: "https://teg-blue.com/emotional-tools", linkText: "teg-blue.com \u2192", external: true },
            ]}
          />
        </article>
      </PageLayout>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ScholarlyArticle",
        "@id": "https://teg-blue.org/model/m2-nervous-system-states#article",
        headline: "Nervous System States: The Instrument",
        description: "Four nervous system states on a continuous gradient — how each reorganizes perception, cognition, and relational capacity. Model M2 of the TEG-Blue system.",
        author: { "@type": "Person", name: "Anna Paretas-Artacho", url: "https://teg-blue.org/about" },
        publisher: { "@type": "Organization", name: "TEG-Blue Research", url: "https://teg-blue.org" },
        datePublished: "2026-03-21", dateModified: "2026-04-06", inLanguage: "en",
        license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
        isPartOf: { "@type": "CreativeWork", name: "TEG-Blue Models & Frameworks", url: "https://teg-blue.org/models" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://teg-blue.org/model/m2-nervous-system-states" },
        about: [
          { "@type": "Thing", name: "Nervous System States" },
          { "@type": "Thing", name: "State Flexibility" },
          { "@type": "Thing", name: "State Determines Capacity" },
        ],
        keywords: ["nervous system states", "state flexibility", "state determines capacity", "chronic state organisation", "inner compass"],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateBreadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "The Emotional Somatic System", url: "/models" },
          { name: "M2: Nervous System States", url: "/model/m2-nervous-system-states" },
        ])
      ) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateFAQJsonLd([
          { question: "What are the four nervous system states in TEG-Blue?", answer: "TEG-Blue describes four states on a continuous gradient: Safety & Openness (parasympathetic-dominant, broad perception, full empathy), Threat & Defence (sympathetic activation, narrowed attention, simplified cognition), Strategy & Management (cognition recruited into threat service), and Power & Dominance (maximal override, empathic constraint suppressed). The first two are led by the emotional-somatic system; the latter two recruit the cognitive-logical system into survival organization." },
          { question: "What is State Flexibility?", answer: "State Flexibility is the nervous system's capacity to shift state in response to changing conditions and return toward physiological baseline. It is the key measure in M2. A system locked in any state — including Safety & Openness — has lost State Flexibility." },
          { question: "Can Safety & Openness become chronic?", answer: "Yes. Safety & Openness is a temporary parasympathetic activation, not a permanent resting place. A person who remains perpetually in this state — absorbing, engaging, resonating without returning to physiological rest — is as chronically activated as someone stuck in a threat state." },
        ])
      ) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateSpeakableJsonLd({
          name: "Nervous System States (M2) — TEG-Blue Research",
          url: "https://teg-blue.org/model/m2-nervous-system-states",
          cssSelectors: ["article > section:first-of-type p", "article h2", "article h2 + p"],
        })
      ) }} />
    </div>
  );
}
