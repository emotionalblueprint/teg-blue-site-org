import Link from "next/link";
import dynamic from "next/dynamic";
import { BG, TEXT, FONT, SPECTRUM, PATTERN, MODEL_COLORS, hexToRgba } from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, ModelPurpose, ExpandableSection,
  PageLayout, PartDivider, NavSection, ConnectionsMap, DeepEngineChronicMatrix,
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
  title: "Nervous System States (M2) | TEG-Blue",
  description:
    "A working model within the Nervous System Gradient: how nervous-system states change perception, capacity, and repair, and what happens when a state becomes chronic.",
  keywords: [
    "nervous system states",
    "nervous system gradient",
    "safety threat orientation",
    "Connection",
    "Protection",
    "Control / Management",
    "Domination",
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
      "A working model within the Nervous System Gradient — how each state reorganizes perception, cognition, and relational capacity.",
    url: "https://teg-blue.org/model/m2-nervous-system-states",
    type: "article",
    siteName: "TEG-Blue",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nervous System States — TEG-Blue M2",
    description:
      "A working model within the Nervous System Gradient — how each state reorganizes perception, cognition, and relational capacity.",
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
            subtitle="The Physiological Reorganization and Configuration to Respond to Threat or Safety"
            description="When something registers as safe or threatening, the nervous system does not simply detect it and move on. It reorganizes — muscle tension redistributes, heart rate shifts, hormonal balance changes, sensory filtering adjusts, cognitive access expands or contracts. The result is a state: a system-wide physiological configuration that determines what can be perceived, thought, felt, and done. This model maps four such states, what each one makes available or restricts, and whether the system can move between them."
            coreQuestion="What state is the nervous system in right now — and can it move?"
            drawsFrom={[
              { label: "M1: Emotions as Signals", href: "/model/m1-emotions-as-signals" },
              { label: "M3: Regulation Capacities", href: "/model/m3-regulation-capacities" },
              { label: "M4: Awareness Capacities", href: "/model/m4-awareness-capacities" },
              { label: "F1: The Nervous System Gradient", href: "/framework/f1-emotional-gradient" },
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
              In <Link href="/model/m1-emotions-as-signals" style={linkStyle}>Model 1 — Emotions as Signals</Link>, the nervous system evaluates for safety or threat and generates a signal carrying information about what was detected. In M2, that signal reorganizes the entire system. Muscle tension redistributes. Sensory filtering adjusts. Cognitive access expands or contracts. Heart rate and hormonal balance change. The result is not a mood or an emotion — it is a physiological configuration that determines what aspects of reality are likely to be registered in the first place.
            </p>
            <p style={proseStyle}>
              A threat-related signal narrows processing. A safety-related signal broadens it. This shift happens before conscious awareness has time to form an interpretation. The nervous system does not simply detect and move on. It reorganizes into a different state — and that state determines what the person can perceive, think, feel, and do.
            </p>
            <p style={proseStyle}>
              All four states — including the safest — are designed to be temporary. The nervous system is designed to restore Physiological Baseline after each activation. When it does not, any state can become chronic — and a chronic state reorganizes perception, cognition, and relational capacity so thoroughly that the reorganization may no longer be recognizable as a state at all.
            </p>
            <p style={proseStyle}>
              The key measure is not which state the system occupies. It is whether the system retains the capacity to move — to shift in response to changing conditions, and to restore Physiological Baseline.
            </p>
          </section>

          {/* CORE PROPOSITIONS */}
          <section id="core-propositions" aria-labelledby="heading-core-propositions" style={{ marginBottom: 48 }}>
            <h2 id="heading-core-propositions" style={sectionHeadingStyle(MODEL_COLOR)}>Core Propositions</h2>
            <ModelPurpose color={MODEL_COLOR}>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li style={propositionItemStyle}>When the nervous system generates an emotional signal (M1: Emotions as Signals), it does not simply detect and move on. It reorganizes into a different physiological configuration — a state that determines what becomes available in perception, cognition, and relational capacity.</li>
              <li style={propositionItemStyle}>Two biological branches produce two primary states: parasympathetic regulation supports Connection; sympathetic activation supports Protection. Both are automatic, rapid, and organised by the emotional-somatic system.</li>
              <li style={propositionItemStyle}>When threat is prolonged and body-level defence does not resolve it, the cognitive-logical system is recruited into the threat response — slower, not automatic. This produces two further states: Control / Management and Domination.</li>
              <li style={propositionItemStyle}>State determines capacity. What a person can perceive, think, feel, learn, and tolerate depends on their current state position — resource allocation, not choice.</li>
              <li style={propositionItemStyle}>The state shapes what sensory information reaches the person before deliberate thought is formed. The filter is calibrated by Somatic Contextual Memory (M1) — the body{"'"}s accumulated learning, not cognitive assessment.</li>
              <li style={propositionItemStyle}>All four states — including Connection — are temporary activations designed to restore Physiological Baseline. No state is the destination.</li>
              <li style={propositionItemStyle}>The key measure is State Flexibility — whether the nervous system can shift state and restore Physiological Baseline. The current state position tells you where the system is. State Flexibility tells you whether it can leave.</li>
            </ul>
            </ModelPurpose>
          </section>

          {/* PART 1: PHYSIOLOGICAL BASELINE */}
          <PartDivider label="PART 1" title="Physiological Baseline" color={MODEL_COLOR} />

          {/* C0: PHYSIOLOGICAL BASELINE */}
          <section id="physiological-baseline" aria-labelledby="heading-baseline" style={{ marginBottom: 48 }}>
            <h2 id="heading-baseline" style={sectionHeadingStyle(MODEL_COLOR)}>Physiological Baseline</h2>
            <p style={proseStyle}>The nervous system at rest. Not numb, not inactive — ready. The body{"'"}s resources available, not deployed. Cortisol at resting level. Muscles at resting tension. Heart rate at resting pace. The HPA axis standing down.</p>
            <p style={proseStyle}>Physiological baseline is the condition the nervous system is designed to return to after activation. It is not one of the four states. It is the neutral ground from which the system enters a state when conditions require it, and returns when the body{"'"}s activation sequence has completed.</p>
            <p style={proseStyle}>This distinction matters because Connection — the state closest to physiological baseline — is still a state. It is a parasympathetic-dominant activation that arises when conditions support engagement. Physiological baseline is what exists before any activation, and what the system returns to when activation resolves. A person in Connection is engaged. A person at physiological baseline is at rest.</p>
            <p style={proseStyle}>If the nervous system never returns to this resting condition, any state — including Connection — can become the system{"'"}s chronic organizing mode. In Path A (<Link href="/model/m3-regulation-capacities" style={linkStyle}>M3: Regulation Capacities</Link>), activation resolves and the system restores physiological baseline. In Path B (M3), the baseline itself shifts upward — baseline elevation, where resting cortisol, muscle tension, and inflammatory markers remain chronically elevated — and the system treats the elevated level as its new resting state.</p>

            <div style={{ margin: "24px 0" }}>
              <M2PhysiologicalBaseline />
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>McEwen (2000) — allostasis and the distinction between resting baseline and adapted set-point. Porges (2011) — autonomic flexibility measured relative to resting vagal tone. Thayer & Lane (2000) — heart rate variability as a marker of baseline autonomic regulation.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue distinguishes physiological baseline from all four states, including Connection. This establishes that the key measure of the state system is not which state a person occupies, but whether the nervous system retains the capacity to return to baseline — State Flexibility. All four states are designed to return to physiological baseline. When baseline is not restored, any state becomes chronic.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* PART 2: FOUR NERVOUS SYSTEM STATES */}
          <PartDivider label="PART 2" title="Four Nervous System States" color={MODEL_COLOR} />

          {/* C1: TWO BIOLOGICAL BRANCHES */}
          <section id="two-branches" aria-labelledby="heading-two-branches" style={{ marginBottom: 48 }}>
            <h2 id="heading-two-branches" style={sectionHeadingStyle(MODEL_COLOR)}>Two Biological Branches</h2>
            <p style={proseStyle}>The state system is grounded in two primary biological branches of autonomic regulation. The <strong style={{ color: TEXT.primary }}>parasympathetic branch</strong>, particularly the ventral vagal system, supports safety, social engagement, and physiological settling. The <strong style={{ color: TEXT.primary }}>sympathetic branch</strong> supports mobilization, vigilance, and defensive action.</p>
            <p style={proseStyle}>These two branches produce two primary nervous system states — both automatic, rapid, and organised by the emotional-somatic system before conscious processing arrives:</p>

            <h3 style={{ ...conceptHeadingStyle, color: '#93CFFF' }}>Connection</h3>
            <p style={proseStyle}>A parasympathetic-dominant state organized around engagement, connection, and broader perception. Heart rate settles. Vagal tone is high. The social engagement system activates — face, voice, middle ear orient toward connection. Perception broadens. Empathy comes fully online. Cognition can hold complexity, tolerate ambiguity, consider multiple perspectives. Learning, repair, and vulnerability become available. A person can experience grief, conflict, or difficulty while remaining in this state — what defines it is not the emotional content but the nervous system{"'"}s capacity to stay engaged without shifting into defensive narrowing.</p>

            <h3 style={{ ...conceptHeadingStyle, color: '#5BADFF' }}>Protection</h3>
            <p style={proseStyle}>A sympathetic state organized around immediate protection. Heart rate rises, muscles tense, cortisol and adrenaline release. Attention narrows toward threat-relevant cues. Emotional intensity increases. Cognition simplifies — binary thinking, speed over accuracy. The time horizon collapses to the immediate. Fight or flight as primary response; freeze or fawn as energy-depletion fallbacks when fight/flight is not available. This is an emergency system designed for minutes to hours.</p>

            <p style={proseStyle}>When threat persists and body-level defence alone does not resolve it, the cognitive-logical system can be recruited into the threat response, producing two further states.</p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>Porges (2011) — polyvagal theory: ventral vagal (social engagement), sympathetic (mobilisation), dorsal vagal (immobilisation). Dana (2018) — clinical application of the autonomic hierarchy. Panksepp (1998) — primary emotional systems as biological processes.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue grounds the state system in two biological branches and distinguishes two primary states that are automatic, rapid, and organised by the emotional-somatic system — before introducing the cognitive extensions that follow under prolonged threat.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* C4: THREAT EXTENSION STATES */}
          <section id="threat-extension-states" aria-labelledby="heading-threat-ext" style={{ marginBottom: 48 }}>
            <h2 id="heading-threat-ext" style={sectionHeadingStyle(MODEL_COLOR)}>Threat Extension States</h2>
            <p style={proseStyle}>Connection and Protection are automatic. The emotional-somatic system sets the state before conscious processing arrives — milliseconds, not deliberation. These are the two primary biological states.</p>
            <p style={proseStyle}>When threat becomes <strong style={{ color: TEXT.primary }}>prolonged</strong> and body-level defence alone does not resolve it, a qualitative shift occurs. The cognitive-logical system is recruited into the threat response — not for open reflection or exploration, but in service of survival. This recruitment is slower and not automatic. It represents a different kind of activation: cognition solving survival problems the body alone could not.</p>

            <h3 style={{ ...conceptHeadingStyle, color: '#346AEC' }}>Control / Management</h3>
            <p style={proseStyle}>A continued threat state in which cognitive resources are recruited into defensive organization. The system shifts from immediate survival response to strategic anticipation, control, and management. Cognition is not being used for open exploration — it is organizing around threat. The future is a threat landscape to be mapped, not an open space to inhabit. This state can appear highly functional from the outside. The person may seem composed, capable, and organized. But the underlying system is still operating under threat conditions.</p>

            <h3 style={{ ...conceptHeadingStyle, color: '#2563eb' }}>Domination</h3>
            <p style={proseStyle}>A maximal threat state organized around control, suppression of resistance, and elimination of obstacle. The ventromedial prefrontal cortex — the region that carries guilt, care, empathy, and consequence — is suppressed. Other people are processed in terms of threat, utility, resistance, or obstacle value. In temporary and extreme situations, this state may serve survival. When it becomes chronic, the system loses access to the internal signals that would normally restrain harmful action.</p>

            <div style={{ margin: "24px 0" }}>
              <M2FourStates />
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>Evolutionary psychology — cognition evolved to solve survival problems body-level responses alone could not. Arnsten (2009) — prefrontal cortex recruited under stress for threat-management, not open exploration. Kahneman (2011) — dual-process theory: System 2 recruited for effortful processing when automatic responses are insufficient.</p>
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
            <p style={proseStyle}>Whether the system can move is the most important measure in M2. TEG-Blue calls this <strong style={{ color: TEXT.primary }}>State Flexibility</strong> — the nervous system{"'"}s capacity to shift state in response to changing conditions and return toward physiological baseline when activation has served its function. A person in Protection who can move back toward Connection when conditions change is fundamentally different from a person in Protection whose system has locked there. The Current State Position tells you where the system is. State Flexibility tells you whether it can leave.</p>
            <p style={proseStyle}>When State Flexibility is present, the system responds — it shifts into threat states when needed and returns to baseline when the threat has passed. When State Flexibility is lost, the system is locked. Restoration (<Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link>) is what restores flexibility — as biological completion lowers the baseline, states that were previously inaccessible become reachable again. State Flexibility is not built through insight. It is restored through the body completing what it started.</p>

            <div style={{ margin: "24px 0" }}>
              <M2Gradient />
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>Porges (2011) — the autonomic hierarchy as a graded response system. Dana (2018) — the autonomic ladder as a clinical tool. Ogden, Minton & Pain (2006) — the window of tolerance as a range, not a state.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue reframes the system from static categories to a movable range and introduces two measures that matter more than the states themselves: Current State Position (where the system is now) and State Flexibility (whether it can move). The system is better measured by flexibility and return capacity than by which state it occupies.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* C8: STATES AS TEMPORARY ACTIVATIONS */}
          <section id="states-as-temporary" aria-labelledby="heading-temp" style={{ marginBottom: 48 }}>
            <h2 id="heading-temp" style={sectionHeadingStyle(MODEL_COLOR)}>States as Temporary Activations</h2>
            <p style={proseStyle}>All four nervous system states are designed as temporary activations, not permanent conditions. The nervous system is built to shift in response to changing conditions, organize around what is needed in the moment, and then return toward physiological baseline once the restoration sequence has run.</p>
            <p style={proseStyle}>Connection is the state closest to baseline, and it is often treated — implicitly or explicitly — as the destination: the place a person should try to reach and remain. It is not. It is a parasympathetic-dominant activation, not rest. A nervous system that remains perpetually organized around Connection — absorbing, engaging, resonating without returning to physiological rest — is as chronically activated as one organized around threat. The state is different. The structural problem is the same: the system is not returning to baseline.</p>
            <p style={proseStyle}>Any state that the nervous system cannot leave becomes chronic. The defining measure is not which state the system occupies. It is whether the system retains the capacity to move, respond, and return to physiological baseline.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>Porges (2011) — autonomic flexibility as a marker of health, not resting state. Thayer & Lane (2000) — heart rate variability as a measure of autonomic flexibility. Ogden, Minton & Pain (2006) — the window of tolerance as a flexible range.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue distinguishes physiological baseline from Connection: baseline is not the same as Connection, and no state is the destination. Chronicity is defined by one thing: whether the nervous system returns to physiological baseline.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* PART 3: WHAT THE STATE DOES */}
          <PartDivider label="PART 3" title="What the State Does" color={MODEL_COLOR} />

          {/* C9: STATE DETERMINES CAPACITY */}
          <section id="state-determines-capacity" aria-labelledby="heading-sdc" style={{ marginBottom: 48 }}>
            <h2 id="heading-sdc" style={sectionHeadingStyle(MODEL_COLOR)}>State Determines Capacity</h2>
            <p style={proseStyle}>What a person can perceive, think, feel, learn, tolerate, and do depends on their Current State Position on the gradient. The nervous system configures what becomes available based on the level of safety or threat it has detected — resource allocation determined by state, not by choice.</p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr", minWidth: 900 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Capacity</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Physiological Baseline</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Connection</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Protection</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Control / Management</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Domination</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Perception</div>
                <div style={gridCellStyle}>Open — available but not directed</div>
                <div style={gridCellStyle}>Broad — sees the full field</div>
                <div style={gridCellStyle}>Narrowed — threat-relevant signals</div>
                <div style={gridCellStyle}>Control — what needs managing</div>
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
                <div style={gridCellStyle}>Control — narrowed to threat</div>
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
              <ExpandableSection title="Established Research" type="opendata">
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

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Physiological Baseline</div>
                <div style={gridCellStyle}>Channels open, not directed. No state organizing perception. The system is at rest — available but not scanning for anything.</div>
                <div style={gridCellStyle}>The world as it is — no filter active.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Connection</div>
                <div style={gridCellStyle}>Channels broadened toward connection, nuance, relational meaning. Eyes reading faces for warmth. Ears picking up prosody. Safety cues amplified. Gut relaxed.</div>
                <div style={gridCellStyle}>The world looks safe. Approach feels available.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Protection</div>
                <div style={gridCellStyle}>Channels narrow toward threat detection. Pupils dilate. Peripheral vision sharpens. Ears tune to sudden sounds. Gut tightens.</div>
                <div style={gridCellStyle}>The world looks dangerous.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Control / Management</div>
                <div style={gridCellStyle}>Narrowing becomes strategic. Eyes scanning for power, concealment. Ears reading what people are really after. Gut suppressed.</div>
                <div style={gridCellStyle}>The world looks like a system to be managed.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Domination</div>
                <div style={gridCellStyle}>Tunnel. Visual field narrows to the obstacle. Peripheral information drops. Ears hear only what confirms the threat assessment. Gut gone.</div>
                <div style={gridCellStyle}>The world looks full of people trying to take something.</div>
              </div>
            </div>

            <p style={proseStyle}>The filter is not configured arbitrarily. It is calibrated by <strong style={{ color: TEXT.primary }}>Somatic Contextual Memory</strong> (<Link href="/model/m1-emotions-as-signals#somatic-contextual-memory" style={linkStyle}>M1</Link>) — the body{"'"}s accumulated learning about what has been safe or threatening. The safety-threat evaluation that produced the current state was already weighted by prior somatic experience. The state that resulted from that evaluation now reconfigures the same sensory channels that fed the evaluation in the first place. The instruments that detected are now being filtered by what they detected.</p>
            <p style={proseStyle}>This is why the same environment produces different perceptual worlds for different nervous systems. The sensory input may be identical. The Somatic Contextual Memory calibrating each nervous system{"'"}s evaluation is not. The state each system enters is different. The filter each state applies is different. The world each person perceives is already different before cognition touches it.</p>
            <p style={proseStyle}>This is the mechanism behind {"\u201C"}State Determines Capacity.{"\u201D"} The state does not just limit what the person can do in response to input — it limits what input reaches the person in the first place.</p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>LeDoux (1996) — pre-conscious threat detection, amygdala processing before cortical awareness. Bar-Haim et al. (2007) — threat-related attentional bias. Porges (2011) — neuroception operating below conscious awareness through multiple sensory channels. Phelps (2004) — amygdala-hippocampal interaction in contextual fear conditioning.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue makes sensory filtering central to the explanation of why state determines capacity, and links the filter to its origin: Somatic Contextual Memory (M1). The state is not only a reaction to perception. It is also a mechanism that shapes perception itself — and the calibration of that mechanism is set by the body{"'"}s accumulated learning, not by cognitive assessment of the current environment.</p>
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
                <div style={gridHeaderStyle(MODEL_COLOR)}>In Connection</div>
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

            <M2SignalState />

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>Frijda (1986) — emotions as action tendencies shaped by context. Barrett (2017) — constructed emotion theory: the same physiological state producing different emotional experiences depending on context. Gross (2015) — emotion regulation as context-dependent process.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue proposes that outcomes depend on the interaction between the emotional signal and the nervous system state through which that signal is being processed — State-Modified Signal Experience.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* PART 4: CHRONIC STATES */}
          <PartDivider label="PART 4" title="Chronic States" color={MODEL_COLOR} />

          {/* C12: CHRONIC STATE ORGANISATION */}
          <section id="chronic-states" aria-labelledby="heading-chronic" style={{ marginBottom: 48 }}>
            <h2 id="heading-chronic" style={sectionHeadingStyle(MODEL_COLOR)}>Chronic State Organisation</h2>
            <p style={proseStyle}>A state becomes chronic when the nervous system does not return to physiological baseline — when stress hormones remain elevated, muscles stay braced, the HPA axis does not stand down, and the restoration sequence does not run to its endpoint. The mechanism is the same for every state: baseline is not restored, and the temporary activation becomes the system{"'"}s default organization.</p>
            <p style={proseStyle}>When this happens, perception, behaviour, and relational patterns begin to organise around the chronic state. What began as a state-dependent physiological configuration becomes indistinguishable, from the inside, from who the person is.</p>

            <DeepEngineChronicMatrix variant="m2States" color={MODEL_COLOR} />

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>van der Kolk (2014) — nervous systems calibrated to chronic threat; the body keeping score. Levine (1997) — activation that does not complete stays in the body. Schore (2003) — early relational conditions shaping regulatory capacity. McEwen (2000) — allostatic load as the cost of chronic adaptation.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue maps chronic states as stuck nervous system organizations across the seven nervous-system positions — including baseline, connection, transition, and shutdown, not only the high-threat positions.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* C13: PROJECTION */}
          <section id="projection" aria-labelledby="heading-projection" style={{ marginBottom: 48 }}>
            <h2 id="heading-projection" style={sectionHeadingStyle(MODEL_COLOR)}>Projection as State-Locked Perceptual Bias</h2>
            <p style={proseStyle}>When a state becomes chronic, the perceptual filter associated with that state may also become chronic. At that point, the person is no longer only reacting to present conditions. They are perceiving new situations through a filter calibrated by past activation.</p>
            <p style={proseStyle}>Because the filtering occurs upstream of deliberate reasoning, cognition may simply build a coherent explanation around already-biased input. The person does not experience themselves as distorting reality. They experience themselves as perceiving it directly.</p>

            <DeepEngineChronicMatrix variant="m2Perception" color={MODEL_COLOR} />

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
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
            <M2ReinforcingLoop />

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="opendata">
                <p style={expandedProseStyle}>Beck (1976) — self-reinforcing cognitive schemas. Bowlby (1969, 1980) — attachment working models as self-confirming templates. Mikulincer & Shaver (2007) — attachment dynamics as self-reinforcing regulation patterns.</p>
              </ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>TEG-Blue locates the self-reinforcing loop not only at the level of belief, but at the level of state-shaped perception. This helps explain why interrupting the loop often requires experience that changes the state at the physiological level — not only cognitive reinterpretation of the filtered input.</p>
              </ExpandableSection>
            </div>
          </section>

          {/* CONNECTIONS MAP */}
          <ConnectionsMap
            color={MODEL_COLOR}
            connections={[
              { id: "The Emotional Somatic Cycle", href: "/model/emotional-somatic-cycle", description: "The full cycle that M2 is part of — from safety-threat evaluation (M1), through state activation (M2), to whether the restoration sequence completes or the activation persists (M3), and whether the person can perceive any of it (M4)." },
              { id: "M1: Emotions as Signals", href: "/model/m1-emotions-as-signals", description: "Describes the signals that trigger state activation — M1 maps the signal, M2 maps the state the signal produces. Somatic Contextual Memory (M1) calibrates the sensory filter M2 describes." },
              { id: "M3: Regulation Capacities", href: "/model/m3-regulation-capacities", description: "Describes whether activation resolves — whether the body completes the restoration sequence and restores Physiological Baseline, or the activation persists and the state becomes chronic." },
              { id: "M4: Awareness Capacities", href: "/model/m4-awareness-capacities", description: "Describes what determines whether the person can perceive the state shift while it is happening — why some people notice the narrowing and others remain fully identified with the filtered output." },
              { id: "F1: The Nervous System Gradient", href: "/framework/f1-emotional-gradient", description: "Provides the evolutionary origin of the autonomic architecture — why two biological branches produce four states and how the ESS and CLS co-evolved to produce this gradient." },
              { id: "F2: Developmental Calibration", href: "/framework/f2-awareness-calibration", description: "Explains how the relational environment during development shapes which states become chronic and whether State Flexibility develops." },
              { id: "F12: Two Information Systems", href: "/framework/f12-two-information-systems", description: "Maps the two-system architecture that operates through the four states — the ESS generating the state shift, the CLS interpreting it. State determines what data moves between the systems and what the CLS builds from it." },
            ]}
          />

          {/* WHERE TO GO NEXT */}
          <NavSection
            color={MODEL_COLOR}
            items={[
              { label: "See the full cycle M2 is part of — from detection to restoration or incompletion", href: "/model/emotional-somatic-cycle", linkText: "The Emotional Somatic Cycle \u2192" },
              { label: "Understand how emotional signals are generated — the first stage of the cycle", href: "/model/m1-emotions-as-signals", linkText: "M1: Emotions as Signals \u2192" },
              { label: "See whether the activation sequence completes — and what accumulates when it does not", href: "/model/m3-regulation-capacities", linkText: "M3: Regulation Capacities \u2192" },
              { label: "Understand what determines whether the person can perceive the state shift", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "Explore the biological origin of the nervous-system gradient", href: "/framework/f1-emotional-gradient", linkText: "F1: The Nervous System Gradient \u2192" },
              { label: "See the two-system architecture that operates through the four states", href: "/framework/f12-two-information-systems", linkText: "F12: Two Information Systems \u2192" },
              { label: "Explore the interactive tools", href: "https://teg-blue.com/emotional-tools", linkText: "teg-blue.com \u2192", external: true },
            ]}
          />
        </article>
      </PageLayout>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ScholarlyArticle",
        "@id": "https://teg-blue.org/model/m2-nervous-system-states#article",
        headline: "Nervous System States: The Physiological Reorganization and Configuration to Respond to Threat or Safety",
        description: "A working model within the Nervous System Gradient — how each state reorganizes perception, cognition, and relational capacity. Model M2 of the TEG-Blue system.",
        author: { "@type": "Person", name: "Anna Paretas-Artacho", url: "https://teg-blue.org/about" },
        publisher: { "@type": "Organization", name: "TEG-Blue", url: "https://teg-blue.org" },
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
          { question: "What are the four nervous system states in TEG-Blue?", answer: "TEG-Blue describes four states on a continuous gradient: Connection (parasympathetic-dominant, broad perception, full empathy), Protection (sympathetic activation, narrowed attention, simplified cognition), Control / Management (cognition recruited into threat service), and Domination (maximal override, empathic constraint suppressed). The first two are led by the emotional-somatic system; the latter two recruit the cognitive-logical system into survival organization." },
          { question: "What is State Flexibility?", answer: "State Flexibility is the nervous system's capacity to shift state in response to changing conditions and return toward physiological baseline. It is the key measure in M2. A system locked in any state — including Connection — has lost State Flexibility." },
          { question: "Can Connection become chronic?", answer: "Yes. Connection is a temporary parasympathetic activation, not a permanent resting place. A person who remains perpetually in this state — absorbing, engaging, resonating without returning to physiological rest — is as chronically activated as someone stuck in a threat state." },
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
