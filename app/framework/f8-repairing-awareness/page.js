import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RESEARCHER, PATTERN_GRADIENT,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, PageLayout, FrameworkHero,
  PropositionBox, ExpandableSection,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "The Turn Toward Repair", href: "#overview", description: "F7 completes the escalation arc. F8 turns the system around. How do you go back?" },
  { label: "The Regulation Thread Reversed", href: "#overview", description: "Each substitute becomes unnecessary as the original develops. Repair means building the original." },
  { label: "The Repair Question", href: "#core-propositions", description: "Developing what didn't have conditions to develop, not finding a hidden self beneath the adaptive one." },
  { label: "Assessing Your Configuration", href: "#assessing-configurations", description: "Which capacities had conditions to develop, which didn't, and what is each one currently doing?" },
  { label: "Common Configurations", href: "#assessing-configurations", description: "Five characteristic configurations, each producing a predictable chronic mode." },
  { label: "Why Repair Is Difficult", href: "#why-repair-is-difficult", description: "The nervous system resists repair because repair requires the same conditions of safety that were missing." },
  { label: "What Repair Requires", href: "#conditions-for-repair", description: "You cannot think your way into felt safety. You can only experience your way there." },
  { label: "The Process", href: "#repair-process", description: "Repair does not move in a straight line. The back-and-forth is not the problem — it is the process." },
  { label: "Why Everyone Masks", href: "#everyone-masks", description: "Masking is the predictable response to any system that regulates through enforced conformity." },
  { label: "The Cost of Conformity", href: "#everyone-masks", description: "Regulatory exhaustion. Developmental arrest. Identity confusion. Relational disconnection." },
  { label: "Different Configurations See Different Things", href: "#collective-strength", description: "What one configuration cannot see, another can. No single configuration is complete." },
  { label: "Collective Intelligence", href: "#collective-strength", description: "Different configurations are different sensors. Masked configurations mean shared blind spots." },
  { label: "Bridge to F9", href: "#bridge-to-f9", description: "What happens when difference becomes structural — when environments are designed for one neurological configuration." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Repairing Awareness — How the Three Capacities Develop and Why Difference Is Strength (F8) | TEG-Blue Research",
  description:
    "How the three awareness capacities can be assessed, why repair is difficult, what conditions enable it, and what the process looks like — and why different awareness configurations make the collective stronger than conformity allows. Framework F8 of 12.",
  keywords: [
    "repairing awareness",
    "awareness configuration",
    "capacity development",
    "conditions for repair",
    "felt safety",
    "oscillation",
    "repair process",
    "masking",
    "collective intelligence",
    "different configurations",
    "nervous system regulation",
    "emotional technology",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f8-repairing-awareness",
  },
  openGraph: {
    title: "Repairing Awareness — How the Three Capacities Develop — F8 Framework | TEG-Blue",
    description:
      "How the three awareness capacities can be assessed, repaired, and developed — and why different configurations make the collective stronger. The first framework in the healing arc.",
    url: "https://teg-blue.org/framework/f8-repairing-awareness",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Repairing Awareness — TEG-Blue F8",
    description:
      "How awareness capacities develop, why repair is difficult, and why different configurations make the collective stronger.",
  },
  other: {
    'citation_title': 'Repairing Awareness: How the Three Capacities Develop and Why Difference Is Strength',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/03',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F8RepairingAwarenessPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f8-repairing-awareness" />

      <PageLayout
        header={
          <FrameworkHero
              badge="FRAMEWORK F8"
              title="Repairing Awareness"
              subtitle="How the Three Capacities Develop — and Why Difference Makes the Collective Stronger"
              description="How the escalation arc (F1–F7) reverses — through developing the awareness capacities that never had conditions to form, learning the return path that was never taught, and recognizing that different awareness configurations make the collective stronger than conformity allows. The first framework in the healing arc (F8–F10)."
              arc="Repair and Complexity"
              arcLabel="Arc 3: Repair and Complexity · F8–F12"
              threadLabel="Reverses the Thread"
              threadLine="Builds the original — developing the awareness capacities that substitutes replaced"
              informsModels={[
                { label: "M2", href: "/model/m2-three-awareness-capacities" },
                { label: "M3", href: "/model/m3-the-open-cycle" },
              ]}
              adjacent={{
                prev: { label: "F7 Domination Regulates", href: "/framework/f7-domination-regulates" },
                next: { label: "F9 Neurodivergence", href: "/framework/f9-neurodivergence-variation" },
              }}
            />
        }
        sidebarSections={SIDEBAR_SECTIONS}
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
              style={sectionHeadingStyle}
            >
              Core Propositions
            </h2>
            <PropositionBox label="FOUNDATIONAL CLAIM">
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={propositionItemStyle}>
                  Repair is return, not construction — developing what didn&rsquo;t have conditions to develop and reconnecting what got disconnected, not finding a hidden self or removing a mask
                </li>
                <li style={propositionItemStyle}>
                  Each awareness capacity has a current state (online, offline, misdirected, collapsed, compensatory) — assessment is configuration, not diagnosis, and every configuration made sense given the original environment
                </li>
                <li style={propositionItemStyle}>
                  The system that needs repair defends against repair — false coherence treats the current configuration as truth, cognitive replacement has been working, and the repair process requires the very capacities that are offline
                </li>
                <li style={propositionItemStyle}>
                  Five conditions for repair: felt safety, accurate mirroring, discomfort tolerance, permission, and time — all necessary, none sufficient alone, and felt safety is experienced, not understood
                </li>
                <li style={propositionItemStyle}>
                  Seven pathways develop different capacities — somatic awareness for Emotional Resonance, relational attunement for Reading Emotions, reflective practice for Self-Emotional Awareness, grief work for all three
                </li>
                <li style={propositionItemStyle}>
                  Repair proceeds through five oscillating phases — the back-and-forth between new capacity and old configuration is the process, not failure
                </li>
                <li style={propositionItemStyle}>
                  Everyone masks their configuration — masking is a regulation strategy, not individual choice — and the cost is both individual (regulatory exhaustion, developmental arrest) and collective (shared blind spots, lost capacity)
                </li>
                <li style={propositionItemStyle}>
                  Different awareness configurations provide different capacities the collective needs — a team where everyone processes the same way has shared blind spots, not balance
                </li>
              </ul>
            </PropositionBox>
          </section>

          {/* ─── OVERVIEW ─────────────────────────────────── */}
          <section
            id="overview"
            aria-labelledby="heading-overview"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-overview"
              style={sectionHeadingStyle}
            >
              Overview — The First Repair Framework
            </h2>

            <p style={proseStyle}>
              F7 completes the escalation arc: F1 Biological Restoration &rarr; F2 developmental failure &rarr; F3 cognitive replacement &rarr; F4 collective rules &rarr; F5 worth hierarchies &rarr; F6 bias &rarr; F7 domination. Each framework describes a different substitute for the regulation that was never built.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>F8 turns the system around.</strong> It asks: how do you go back? The answer is specific: by reconnecting the awareness capacities that went offline. Not by finding a hidden self. Not by removing a mask. Not by building insight. By developing what didn&rsquo;t have conditions to develop — and learning the return path that was never taught.
            </p>

            <KeyStatement>
              Every substitute was built because the original was missing. Repair means building the original.
            </KeyStatement>

            <p style={proseStyle}>
              F8 operates in two movements. <strong style={{ color: TEXT.primary }}>Part 1</strong> — Individual repair: how to assess where the three awareness capacities currently sit, why repair is difficult, what conditions make it possible, and what the process looks like. <strong style={{ color: TEXT.primary }}>Part 2</strong> — Collective strength: why everyone masks aspects of their awareness configuration, what conformity costs, and why different configurations make the collective stronger. The two movements are one argument: repairing your own capacities and accepting that everyone&rsquo;s capacities are different are the same act of moving toward safety.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Escalation (F1–F7)</th>
                    <th style={thStyle}>Repair (F8)</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["F1: Biological Restoration fails", "Restore the return mechanism"]} />
                  <TableRow cells={["F2: Awareness capacities don\u2019t develop", "Develop the capacities now"]} />
                  <TableRow cells={["F3: Cognition replaces emotional signals", "Reconnect cognition to emotional truth"]} />
                  <TableRow cells={["F4: Rules substitute for regulation", "Regulation replaces need for rigid rules"]} />
                  <TableRow cells={["F5: Worth substitutes for safety", "Safety replaces need for worth-seeking"]} />
                  <TableRow cells={["F6: Bias substitutes for perception", "Perception updates as safety increases"]} />
                  <TableRow cells={["F7: Domination substitutes for all", "The earlier the intervention, the less escalation"]} />
                </tbody>
              </table>
            </div>

            <ExpandableSection title="Framework Position in the Regulation Thread" type="framework">
              <p style={expandedProseStyle}>
                F8 is the first framework in the repair arc. Not a new substitute — the development of what was missing. The regulation thread doesn&rsquo;t just describe how substitutes form. It also describes what genuine repair requires: the same thread, reversed. F8&rsquo;s goal is F2 Concept 4&rsquo;s destination — accurate RE, sustainable ER, online SEA, true coherence — arrived at by a different route. Not through the developmental conditions a child needs, but through the conditions an adult can seek, create, and sustain.
              </p>
            </ExpandableSection>
          </section>

          {/* ───────────────────────────────────────────────── */}
          {/* PART 1: REPAIRING AWARENESS                      */}
          {/* ───────────────────────────────────────────────── */}

          <div
            style={{
              padding: "12px 20px",
              background: hexToRgba(SPECTRUM.cobalt, 0.08),
              borderRadius: 8,
              marginBottom: 32,
              fontSize: 13,
              fontWeight: 600,
              color: SPECTRUM.cobalt,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontFamily: FONT.mono,
            }}
          >
            Part 1: Repairing Awareness
          </div>

          {/* ─── ASSESSING CONFIGURATIONS ─────────────────── */}
          <section
            id="assessing-configurations"
            aria-labelledby="heading-assessing-configurations"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-assessing-configurations" style={sectionHeadingStyle}>
              Assessing Awareness Configurations
            </h2>

            <p style={proseStyle}>
              The three awareness capacities are not binary (on/off). Each can be in different states:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>State</th>
                    <th style={thStyle}>What It Means</th>
                    <th style={thStyle}>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["Online", "Functioning and serving understanding", "RE reads emotions accurately and uses the data for connection"]} />
                  <ThreeColRow cells={["Offline", "Never developed or fully shut down", "SEA was never modeled; the person has no access to internal emotional data"]} />
                  <ThreeColRow cells={["Misdirected", "Functioning but serving the wrong purpose", "RE is sharp but serves control \u2014 reading others to manage them, not to connect"]} />
                  <ThreeColRow cells={["Collapsed", "Was developing but was overwhelmed", "ER was available but chronic flooding caused it to shut down"]} />
                  <ThreeColRow cells={["Compensatory", "One capacity doing another\u2019s job", "RE substituting for SEA \u2014 tracking others\u2019 responses to infer own emotional state"]} />
                </tbody>
              </table>
            </div>

            <KeyStatement>
              The assessment question is not &ldquo;What&rsquo;s wrong with me?&rdquo; but: &ldquo;Which capacities had conditions to develop, which didn&rsquo;t, and what is each one currently doing?&rdquo; This is a configuration, not a diagnosis.
            </KeyStatement>

            <h3 style={conceptHeadingStyle}>
              Common Configurations and Their Costs
            </h3>

            <p style={proseStyle}>
              The awareness configuration a person carries predicts where their compass tends to settle. This is not personality — it is the consequence of which capacities are available.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Configuration</th>
                    <th style={thStyle}>What It Produces</th>
                    <th style={thStyle}>Chronic Mode</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={[
                    "RE sharp + ER collapsed + SEA offline",
                    "Reads everything, feels nothing, doesn\u2019t know own state. Narrates emotions without experiencing them.",
                    "Chronic Control \u2014 \u201Cthe most psychologically literate people can be the most stuck\u201D",
                  ]} />
                  <ThreeColRow cells={[
                    "RE collapsed + ER flooded + SEA offline",
                    "Overwhelmed by feeling, can\u2019t read what\u2019s happening, doesn\u2019t know what\u2019s theirs vs. others\u2019.",
                    "Chronic Protection \u2014 flooded, reactive, confused",
                  ]} />
                  <ThreeColRow cells={[
                    "RE sharp + ER high + SEA offline",
                    "Reads and feels everything but can\u2019t locate self within it. Absorbs others\u2019 states as own.",
                    "Chronic Protection or fawn \u2014 hyperattuned, boundary-less",
                  ]} />
                  <ThreeColRow cells={[
                    "RE misdirected + ER collapsed + SEA offline",
                    "Reads others to manage outcomes, feels little, knows nothing about own internal state.",
                    "Chronic Control \u2014 strategic, effective, empty",
                  ]} />
                  <ThreeColRow cells={[
                    "All three offline",
                    "Can\u2019t read, can\u2019t feel, can\u2019t self-locate. Cognition runs everything.",
                    "Rigid false coherence \u2014 \u201Cthis is just who I am\u201D",
                  ]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              F7 Concept 5 describes the dangerous configuration: <strong style={{ color: TEXT.primary }}>sharp RE + collapsed ER + absent SEA = most harm, least visibility</strong>. This configuration can read a room perfectly, feels no resonance with what others experience, and has no self-awareness that any of this is happening. Not evil — a configuration. The same nervous system with different developmental conditions would have produced a different configuration.
            </p>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The five-state model for each awareness capacity (online, offline, misdirected, collapsed, compensatory) replaces the binary on/off framing with a clinically useful assessment. The configuration-predicts-mode table connects F2&rsquo;s developmental account to F1&rsquo;s mode model — making the link between which capacities are available and where the compass settles explicit and testable. The assessment reframe from diagnosis to configuration removes pathologizing while maintaining clinical precision.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── WHY REPAIR IS DIFFICULT ─────────────────── */}
          <section
            id="why-repair-is-difficult"
            aria-labelledby="heading-why-repair-is-difficult"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-why-repair-is-difficult" style={sectionHeadingStyle}>
              Why Repair Is Difficult
            </h2>

            <p style={proseStyle}>
              The central difficulty: the system that needs repair defends against repair. The awareness capacities that need developing are offline — and the systems that replaced them (F3 false coherence, F4 rules, F5 worth-seeking, F6 bias) actively defend against the capacities coming online.
            </p>

            <ol style={orderedListStyle}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>False coherence treats the current configuration as truth.</strong> &ldquo;This is who I am.&rdquo; &ldquo;I don&rsquo;t need to feel things — I understand them.&rdquo; &ldquo;Emotions are weakness.&rdquo; These are not preferences — they are regulatory structures. Questioning them feels like regulatory collapse, not growth.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Cognitive replacement has been working.</strong> F3&rsquo;s core mechanism: cognition tells the emotional system &ldquo;you&rsquo;re not needed.&rdquo; If the person has been successful, functional, admired — the replacement has been rewarded. Why would the system abandon what has been rewarded?
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>SEA coming online means feeling what was previously unfelt.</strong> Grief for what was lost. Anger about what happened. Confusion about who one actually is without the narrative. The system accurately predicts this cost and resists it.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Relationships were built around the current configuration.</strong> People who needed the person to be the reader, the manager, the strong one — those relationships may not survive a configuration change. The nervous system accurately assesses this relational risk.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>The repair process requires the very capacities that are offline.</strong> Developing SEA requires enough safety to tolerate what SEA will reveal. Developing ER requires enough resilience to handle feeling without collapsing. The system needs what it doesn&rsquo;t have in order to develop what it doesn&rsquo;t have.
              </li>
            </ol>

            <KeyStatement>
              The system is not resisting repair. It is assessing whether repair is safe. When it is, it will move.
            </KeyStatement>

            <p style={proseStyle}>
              Premature repair can escalate. Pushing for capacity development before sufficient safety exists can trigger defensive escalation — the compass moves further into Protection or Control, not toward Connection. This is not treatment resistance. It is the nervous system correctly assessing that the conditions are not yet safe enough.
            </p>
          </section>

          {/* ─── CONDITIONS FOR REPAIR ────────────────────── */}
          <section
            id="conditions-for-repair"
            aria-labelledby="heading-conditions-for-repair"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-conditions-for-repair" style={sectionHeadingStyle}>
              Conditions for Repair — Safety Before Capacity
            </h2>

            <p style={proseStyle}>
              The principle that organizes all of F8&rsquo;s repair work: <strong style={{ color: TEXT.primary }}>the nervous system must feel safe enough for capacities to come online</strong>. This is F1&rsquo;s foundational insight (restore safety first, then expect capacity) applied to the specific question of awareness development.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Condition</th>
                    <th style={thStyle}>What It Provides</th>
                    <th style={thStyle}>What Happens Without It</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={[
                    "Felt Safety",
                    "Nervous system regulation sufficient for new capacity to come online. Not the absence of discomfort \u2014 the presence of enough regulation to tolerate discomfort",
                    "Capacities stay offline. The system cannot afford the cost of development",
                  ]} />
                  <ThreeColRow cells={[
                    "Accurate Mirroring",
                    "Being seen as one actually is \u2014 not the performance, not the configuration, but what\u2019s underneath. Experienced through someone whose own awareness capacities are sufficiently online",
                    "The person has no data about who they are without the configuration. SEA cannot develop without external reflection",
                  ]} />
                  <ThreeColRow cells={[
                    "Discomfort Tolerance",
                    "Capacity to stay present with what arises when capacities begin coming online \u2014 grief, confusion, anger, vulnerability",
                    "The system retreats at the first wave of feeling. Development stalls at the threshold",
                  ]} />
                  <ThreeColRow cells={[
                    "Permission",
                    "Internal and external acceptance that imperfection, not-knowing, and process are legitimate. The opposite of F3\u2019s demand for coherence",
                    "Shame drives the person back into false coherence. Each failed attempt reinforces \u201Cthis is who I am\u201D",
                  ]} />
                  <ThreeColRow cells={[
                    "Time",
                    "Accumulated experience rather than single insight. The nervous system updates through repeated safe exposure, not breakthrough",
                    "Pressure for speed recreates the very conditions (performance, urgency, evaluation) that kept capacities offline",
                  ]} />
                </tbody>
              </table>
            </div>

            <KeyStatement>
              You cannot think your way into felt safety. You can only experience your way there. A person can intellectually understand everything in F1–F7 and still have zero felt safety. Insight operates in the cognitive system. Felt safety operates in the emotional-somatic system. These are different systems with different timelines.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Porges (2011) — safety as prerequisite for social engagement. Siegel (2012) — window of tolerance, integration. Bowlby (1969) — secure base for exploration. Schore (2003) — right-brain regulation through relational experience. Winnicott — holding environment. Edmondson (1999) — psychological safety. Fonagy &amp; Target — mentalization requires safety. Van der Kolk (2014) — somatic processing of trauma.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The five conditions organized as a unified model for awareness capacity development — connecting clinical safety research to the specific question of which conditions allow RE, ER, and SEA to come online. The distinction between felt safety and cognitive understanding addresses a common clinical error: treating insight as equivalent to safety. The emphasis on time as a necessary condition resists the urgency that most intervention contexts produce.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── PATHWAYS ────────────────────────────────── */}
          <section
            id="pathways-and-process"
            aria-labelledby="heading-pathways-and-process"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-pathways-and-process" style={sectionHeadingStyle}>
              Pathways to Capacity Development
            </h2>

            <p style={proseStyle}>
              Not every pathway works for every capacity. The specificity matters:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Pathway</th>
                    <th style={thStyle}>Primary Capacity</th>
                    <th style={thStyle}>How It Works</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={[
                    "Somatic awareness",
                    "ER \u2014 Emotional Resonance",
                    "The body learns to feel again. Not through understanding but through experiencing sensation without overwhelm. Reconnects the channel that was shut down",
                  ]} />
                  <ThreeColRow cells={[
                    "Relational attunement",
                    "RE \u2014 Reading Emotions",
                    "Accurate reading develops through being accurately read. A relationship where the person experiences being seen teaches the system what accurate reading looks like",
                  ]} />
                  <ThreeColRow cells={[
                    "Reflective practice",
                    "SEA \u2014 Self-Emotional Awareness",
                    "The person begins receiving their own internal data with support from someone whose SEA is online. SEA develops through SEA being modeled",
                  ]} />
                  <ThreeColRow cells={[
                    "Grief work",
                    "All three",
                    "Grief requires feeling (ER), recognizing what\u2019s being mourned (RE), and knowing it is one\u2019s own (SEA). Develops all three simultaneously",
                  ]} />
                  <ThreeColRow cells={[
                    "Values clarification",
                    "SEA primarily",
                    "Asks: \u201CWhat do I actually want \u2014 not what I\u2019ve been told to want, not what the configuration produces, but what is mine?\u201D",
                  ]} />
                  <ThreeColRow cells={[
                    "Creative expression",
                    "ER primarily",
                    "Bypasses cognitive replacement by working in domains where cognition is not the primary organizer. The emotional-somatic system can express when it\u2019s not being monitored",
                  ]} />
                  <ThreeColRow cells={[
                    "Corrective experience",
                    "All three",
                    "Experiences where authenticity is met with acceptance rather than rejection. The nervous system receives evidence that the old rules no longer apply. Updates through experience, not explanation",
                  ]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Most people need multiple pathways. Treatment identifies which pathways are most accessible — meaning least defended — for each person&rsquo;s current configuration. The person with collapsed ER may not begin with somatic work (too threatening). The person with misdirected RE may not begin with relational attunement (too activating). The person with offline SEA may not begin with reflective practice (no data to reflect on).
            </p>

            <KeyStatement>
              Follow the accessible pathway first. The other capacities come online as safety increases.
            </KeyStatement>
          </section>

          {/* ─── REPAIR PROCESS ──────────────────────────── */}
          <section
            id="repair-process"
            aria-labelledby="heading-repair-process"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-repair-process" style={sectionHeadingStyle}>
              The Repair Process — Five Phases
            </h2>

            <p style={proseStyle}>
              Repair does not proceed in a straight line. The nervous system tests new capacity, retreats to the familiar configuration, tests again. This oscillation is not resistance — it is the system checking whether the new territory is safe.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Phase</th>
                    <th style={thStyle}>What Happens</th>
                    <th style={thStyle}>What It Looks Like</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={[
                    "Unawareness",
                    "Configuration is invisible. False coherence is complete. \u201CThis is just who I am.\u201D",
                    "No distress about the configuration itself. May present with symptoms (burnout, relationship failure, emptiness) without connecting them to awareness gaps",
                  ]} />
                  <ThreeColRow cells={[
                    "Recognition",
                    "Configuration becomes visible. The person begins to see the gap between what they narrate and what they feel",
                    "Grief emerges. \u201CI\u2019ve been doing this my whole life.\u201D Relief and sadness simultaneously. Often the hardest phase",
                  ]} />
                  <ThreeColRow cells={[
                    "Oscillation",
                    "Movement between new capacity and old configuration. SEA comes online, then false coherence activates, then SEA again",
                    "Can feel like failure (\u201CI thought I was past this\u201D). The oscillation itself is progress \u2014 the compass is moving",
                  ]} />
                  <ThreeColRow cells={[
                    "Active Development",
                    "Experimenting with new capacity in real relationships. Authentic expression where there was performance. Feeling where there was numbness",
                    "Vulnerability. Risk. Some relationships deepen. Some strain. The configuration is changing and the relational system responds",
                  ]} />
                  <ThreeColRow cells={[
                    "Integration",
                    "New capacity becomes available \u2014 not permanent, not perfect, but accessible. The old configuration becomes a choice rather than a compulsion",
                    "The person can move through all four modes with more freedom. False coherence loosens. The compass moves. The return works",
                  ]} />
                </tbody>
              </table>
            </div>

            <KeyStatement>
              The back-and-forth is not the problem. The back-and-forth is the process. Each oscillation that doesn&rsquo;t result in catastrophe is a data point. The system is accumulating evidence that the new capacity is survivable.
            </KeyStatement>

            <p style={proseStyle}>
              The clinical error is interpreting oscillation as regression and pushing harder. The correct response is normalizing the oscillation and maintaining conditions.
            </p>
          </section>

          {/* ─── WHAT REPAIR LOOKS LIKE ──────────────────── */}
          <section
            id="what-repair-looks-like"
            aria-labelledby="heading-what-repair-looks-like"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-what-repair-looks-like" style={sectionHeadingStyle}>
              What Repair Looks Like — Movement, Not Perfection
            </h2>

            <p style={proseStyle}>
              Repair does not produce three perfectly balanced, permanently online awareness capacities. It produces a compass that can move.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Before Repair</th>
                    <th style={thStyle}>After Repair</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Compass stuck in one position", "Compass moves more freely across the gradient"]} />
                  <TableRow cells={["False coherence feels like truth", "False coherence is recognizable \u2014 \u201CI\u2019m doing the thing again\u201D"]} />
                  <TableRow cells={["One or two capacities doing all the work", "All three capacities available, even if unevenly developed"]} />
                  <TableRow cells={["Return mechanism absent or unreliable", "Return works \u2014 the person can come back from Protection, Control, even Domination"]} />
                  <TableRow cells={["Emotions bypassed or flooded", "Emotions experienced as information \u2014 sometimes overwhelming, sometimes quiet, but receivable"]} />
                  <TableRow cells={["Relationships built on configuration", "Relationships that can hold more of who the person actually is"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              The destination is F2 Concept 4&rsquo;s designed development: accurate RE, sustainable ER, online SEA, true coherence — narrative aligned with felt experience, not substituting for it. Arrived at by a different route: not through the developmental conditions a child needs, but through the conditions an adult can seek, create, and sustain.
            </p>

            <KeyStatement>
              Not becoming someone new — being able to be yourself more of the time. Like Connection itself, repair is not a place to arrive and stay. It is a capacity that gets stronger with use, weakens with chronic threat, and needs maintaining.
            </KeyStatement>
          </section>

          {/* ───────────────────────────────────────────────── */}
          {/* PART 2: THE POWER OF DIFFERENCE                  */}
          {/* ───────────────────────────────────────────────── */}

          <div
            style={{
              padding: "12px 20px",
              background: hexToRgba(SPECTRUM.cobalt, 0.08),
              borderRadius: 8,
              marginBottom: 32,
              fontSize: 13,
              fontWeight: 600,
              color: SPECTRUM.cobalt,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontFamily: FONT.mono,
            }}
          >
            Part 2: The Power of Difference
          </div>

          {/* ─── EVERYONE MASKS ──────────────────────────── */}
          <section
            id="everyone-masks"
            aria-labelledby="heading-everyone-masks"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-everyone-masks" style={sectionHeadingStyle}>
              The Universal Pattern — Everyone Masks Their Configuration
            </h2>

            <p style={proseStyle}>
              F2 describes how awareness configurations form: the adults&rsquo; capacity configuration creates the environment, the environment shapes the child&rsquo;s capacity configuration. F3 describes how cognition builds an identity around whatever configuration results. What F8 adds: <strong style={{ color: TEXT.primary }}>every configuration that doesn&rsquo;t match what the environment expects gets masked</strong>.
            </p>
            <p style={proseStyle}>
              This is not a neurodivergent-only phenomenon. It is universal. The child who feels too much learns to perform calm. The child who reads too accurately learns to pretend they didn&rsquo;t notice. The child who doesn&rsquo;t feel what they&rsquo;re &ldquo;supposed to&rdquo; feel learns to perform the expected emotion. The child who is internally aware learns that self-knowledge is threatening to adults who don&rsquo;t have it.
            </p>

            <p style={proseStyle}>
              Masking follows the same mechanism as every other substitute in the regulation thread: authentic capacity expression &rarr; environmental punishment &rarr; the nervous system learns authenticity is unsafe &rarr; a regulatory strategy forms &rarr; the mask becomes automatic &rarr; false coherence absorbs the mask as truth.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Configuration Feature</th>
                    <th style={thStyle}>Why It Gets Masked</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["High RE (reads too much)", "\"You\u2019re too sensitive.\" \"Stop analyzing everyone.\" \"Why can\u2019t you just relax?\""]} />
                  <TableRow cells={["High ER (feels too deeply)", "\"You\u2019re overreacting.\" \"Toughen up.\" \"It\u2019s not that serious.\""]} />
                  <TableRow cells={["Online SEA (knows too much about self)", "\"You\u2019re overthinking.\" \"Just be normal.\" Others uncomfortable with self-awareness they don\u2019t have"]} />
                  <TableRow cells={["Low ER (doesn\u2019t feel what\u2019s expected)", "\"Don\u2019t you care?\" \"What\u2019s wrong with you?\" Performs emotion to meet expectations"]} />
                  <TableRow cells={["Nonlinear processing", "\"Stay focused.\" \"That\u2019s off-topic.\" \"Pay attention.\""]} />
                  <TableRow cells={["Intense focus patterns", "\"You\u2019re obsessed.\" \"Why can\u2019t you be more balanced?\""]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>
              The Cost of Conformity
            </h3>

            <p style={proseStyle}>
              Homogeneity is a regulatory strategy. It follows the same logic as every F4–F7 mechanism: sameness feels safe (F4), difference feels threatening (F6), enforcing one configuration reduces uncertainty (F5), and the system becomes more rigid and less adaptive (F7).
            </p>

            <KeyStatement>
              The trap: the more homogeneous the system, the safer it feels — and the more fragile it actually is. A system where everyone reads the same way, feels the same way, and processes the same way has massive blind spots.
            </KeyStatement>

            <p style={proseStyle}>
              For the person masking their configuration: regulatory exhaustion (every hour of performing draws down reserves), developmental arrest (capacities that are suppressed don&rsquo;t develop), identity confusion (false coherence absorbs the mask), relational disconnection (relationships built on the performed configuration cannot hold the real person), and the regulation thread applies — masking is another substitute with escalating costs.
            </p>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The explicit naming of masking as a universal pattern — not limited to neurodivergent experience — positioned within the regulation thread. The masking mechanism follows the same structure as F3&rsquo;s false coherence, F4&rsquo;s rule internalization, and F5&rsquo;s worth-seeking: authentic expression &rarr; environmental punishment &rarr; regulatory strategy &rarr; automaticity &rarr; false coherence absorption. This positions masking not as a neurodivergent-specific phenomenon but as a universal consequence of environments that regulate through enforced conformity — with F9 then showing what happens when this universal pattern becomes structural.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── COLLECTIVE STRENGTH ─────────────────────── */}
          <section
            id="collective-strength"
            aria-labelledby="heading-collective-strength"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-collective-strength" style={sectionHeadingStyle}>
              Different Configurations, Collective Strength
            </h2>

            <p style={proseStyle}>
              Different awareness configurations produce different capacities. What one configuration cannot see, another can. What one configuration cannot feel, another does. What one configuration misses, another catches.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Configuration Strength</th>
                    <th style={thStyle}>What It Provides to the Collective</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["High RE \u2014 reads patterns, dynamics, unspoken signals", "Sees what\u2019s actually happening. Detects misalignment between what\u2019s said and what\u2019s meant. Identifies problems before they escalate"]} />
                  <TableRow cells={["High ER \u2014 deep emotional resonance", "Holds the emotional truth of the group. Knows when something is wrong even when metrics say everything is fine"]} />
                  <TableRow cells={["Strong SEA \u2014 accurate self-knowledge", "Names what\u2019s happening. Cuts through false coherence. Models the capacity for others"]} />
                  <TableRow cells={["Nonlinear processing", "Finds connections that sequential thinkers miss. Sees the whole pattern, not just the steps"]} />
                  <TableRow cells={["Detail-oriented processing", "Catches what broad thinkers skip. Identifies the one variable that changes everything"]} />
                  <TableRow cells={["Slow, deep processing", "Finds what fast processors overlook. Sits with complexity long enough for the real answer to emerge"]} />
                  <TableRow cells={["High sensory sensitivity", "Detects environmental signals others miss. Provides early warning when conditions shift"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              No single configuration is complete. Every configuration has blind spots. The complete picture requires multiple configurations contributing openly — not one &ldquo;correct&rdquo; configuration performing at its best, but different configurations in genuine exchange.
            </p>

            <KeyStatement>
              A team where everyone processes the same way is not a balanced team — it is a team with shared blind spots. The collective compass is more accurate when it has more sensors. Different configurations are different sensors.
            </KeyStatement>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>When Configurations Are Masked</th>
                    <th style={thStyle}>When Configurations Contribute Openly</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Group sees only what the dominant configuration can see", "Group sees what all configurations can see \u2014 wider field, more dimensions"]} />
                  <TableRow cells={["Emotional truth suppressed to maintain comfort", "Emotional truth available \u2014 the group knows what it actually feels"]} />
                  <TableRow cells={["Problems invisible until crisis", "Problems visible early \u2014 different configurations detect different signals"]} />
                  <TableRow cells={["\u201CGroupthink\u201D \u2014 false coherence at collective scale", "Genuine disagreement and integration \u2014 true coherence through difference"]} />
                  <TableRow cells={["Fragile \u2014 shared blind spots produce shared failures", "Resilient \u2014 different blind spots compensate for each other"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              This is not &ldquo;diversity for diversity&rsquo;s sake.&rdquo; This is a structural argument. Different awareness configurations provide different data. A collective that has access to more data makes better decisions. The argument is architectural, not just moral.
            </p>

            <KeyStatement>
              Safety through sameness is false coherence at collective scale. The systems that feel safest (homogeneous, predictable, conformity-enforced) are the ones most at risk. The systems that feel most uncomfortable (heterogeneous, unpredictable, difference-tolerant) are the ones most resilient.
            </KeyStatement>
          </section>

          {/* ─── WHAT F8 ESTABLISHES ───────────────────────── */}
          <section
            id="what-f8-establishes"
            aria-labelledby="heading-what-f8-establishes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-what-f8-establishes" style={sectionHeadingStyle}>
              What F8 Establishes
            </h2>

            <p style={proseStyle}>
              F8 is the first framework in the healing arc (F8–F10). It shows how the escalation arc reverses — through developing the awareness capacities that never had conditions to form — and why accepting different configurations is part of the same movement toward safety.
            </p>

            <h3 style={conceptHeadingStyle}>
              Core Concepts
            </h3>

            <div style={{ overflowX: "auto", marginBottom: 24 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Concept</th>
                    <th style={thStyle}>What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Repair is return, not construction",
                    "Developing what didn\u2019t have conditions to develop. Not finding a hidden self. The destination is F2\u2019s designed development \u2014 arrived at by a different route.",
                  ]} />
                  <TableRow cells={[
                    "Awareness configuration",
                    "Five capacity states (online, offline, misdirected, collapsed, compensatory). Configuration predicts chronic mode. Assessment, not diagnosis.",
                  ]} />
                  <TableRow cells={[
                    "The system defends against repair",
                    "False coherence, cognitive replacement, relational risk, and the bootstrap problem. Premature repair escalates. The system assesses safety before moving.",
                  ]} />
                  <TableRow cells={[
                    "Five conditions for repair",
                    "Felt safety, accurate mirroring, discomfort tolerance, permission, time. All necessary, none sufficient. Felt safety is experienced, not understood.",
                  ]} />
                  <TableRow cells={[
                    "Seven pathways",
                    "Different pathways develop different capacities. Somatic \u2192 ER. Relational \u2192 RE. Reflective \u2192 SEA. Grief \u2192 all three. Follow the accessible pathway first.",
                  ]} />
                  <TableRow cells={[
                    "Five repair phases",
                    "Unawareness \u2192 Recognition \u2192 Oscillation \u2192 Active Development \u2192 Integration. Non-linear. The back-and-forth is the process.",
                  ]} />
                  <TableRow cells={[
                    "Universal masking",
                    "Everyone masks. Masking is a regulation strategy, not individual choice. Cost is individual (exhaustion, arrest, confusion) and collective (blind spots, fragility).",
                  ]} />
                  <TableRow cells={[
                    "Collective strength through difference",
                    "Different configurations = different sensors. The collective compass is more accurate with more configurations contributing openly. Safety through sameness is false coherence at collective scale.",
                  ]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>
              Key Formulations
            </h3>

            <ul style={{ paddingLeft: 20, margin: "0 0 24px" }}>
              {[
                "\"Every substitute was built because the original was missing. Repair means building the original.\"",
                "\"Not undoing the past \u2014 developing what the past didn\u2019t provide conditions for.\"",
                "\"Which capacities had conditions to develop, which didn\u2019t, and what is each one currently doing?\"",
                "\"The system is not resisting repair. It is assessing whether repair is safe.\"",
                "\"You cannot think your way into felt safety. You can only experience your way there.\"",
                "\"The back-and-forth is not the problem. The back-and-forth is the process.\"",
                "\"Not becoming someone new \u2014 being able to be yourself more of the time.\"",
                "\"Masking is not individual choice \u2014 it is the predictable response to systems that regulate through enforced conformity.\"",
                "\"A team where everyone processes the same way is not a balanced team \u2014 it is a team with shared blind spots.\"",
                "\"Safety through sameness is false coherence at collective scale.\"",
              ].map((f, i) => (
                <li key={i} style={{ ...listItemStyle, fontStyle: "italic" }}>
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* ─── RESEARCH FOUNDATIONS ──────────────────────── */}
          <section
            id="research-foundations"
            aria-labelledby="heading-research-foundations"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-research-foundations" style={sectionHeadingStyle}>
              Research Foundations
            </h2>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Tradition</th>
                    <th style={thStyle}>Key Contribution</th>
                    <th style={thStyle}>Researchers</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["Attachment Theory", "Regulatory development through relational experience; secure base for exploration", "Bowlby, 1969; Ainsworth"]} />
                  <ThreeColRow cells={["Interpersonal Neurobiology", "Integration, window of tolerance, state-dependent capacity development", "Siegel, 2012"]} />
                  <ThreeColRow cells={["Polyvagal Theory", "Safety as prerequisite for social engagement and capacity", "Porges, 2011"]} />
                  <ThreeColRow cells={["Affect Regulation", "Right-brain regulation develops through relational experience", "Schore, 2003"]} />
                  <ThreeColRow cells={["Object Relations", "True/False Self; holding environment; development through relationship", "Winnicott"]} />
                  <ThreeColRow cells={["Mentalization", "Capacity to understand mental states in self and others", "Fonagy & Target"]} />
                  <ThreeColRow cells={["Somatic Experiencing", "Body-based trauma resolution; capacity through somatic awareness", "Levine"]} />
                  <ThreeColRow cells={["Emotion Differentiation", "Emotional granularity predicts regulatory capacity", "Barrett"]} />
                  <ThreeColRow cells={["Metacognition Research", "Self-awareness as developable capacity", "Flavell; Wells"]} />
                  <ThreeColRow cells={["Neurodiversity Paradigm", "Different neurological configurations as natural variation", "Singer; Walker"]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── BRIDGE TO F9 ──────────────────────────────── */}
          <section
            id="bridge-to-f9"
            aria-labelledby="heading-bridge-to-f9"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bridge-to-f9" style={sectionHeadingStyle}>
              Bridge to F9: From Universal Pattern to Structural Mismatch
            </h2>

            <p style={proseStyle}>
              F8 Part 2 describes a universal pattern: everyone masks, conformity has costs, difference is strength. F9 asks: <strong style={{ color: TEXT.primary }}>what happens when this pattern becomes structural?</strong>
            </p>
            <p style={proseStyle}>
              When environments — schools, workplaces, healthcare systems, social norms — are designed for one neurological configuration, the mismatch is not just social. It is architectural. The lighting, the seating, the pace, the communication style, the attention demands, the sensory environment — all built for one nervous system configuration.
            </p>
            <p style={proseStyle}>
              For neurodivergent people, the universal cost of masking becomes a structural, daily, inescapable cost. The system mismatch is not interpersonal (&ldquo;these people don&rsquo;t accept me&rdquo;). It is environmental (&ldquo;this world was not designed for how my nervous system works&rdquo;).
            </p>

            <KeyStatement>
              If difference is strength (F8), then structural exclusion of difference is structural loss of collective intelligence. If masking has costs (F8), then environments that make masking a daily survival requirement produce predictable burnout, threshold crossing, and developmental arrest.
            </KeyStatement>

            <p style={proseStyle}>
              F8 provides the foundation. F9 provides the most urgent application.
            </p>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="f8-repairing-awareness" type="framework" />

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
                  <NavRow label="Read the neurodivergence framework (F9)" href="/framework/f9-neurodivergence-variation" linkText="Neurodivergence as Nervous System Variation \u2192" />
                  <NavRow label="Read the escalation framework (F7)" href="/framework/f7-domination-regulates" linkText="Domination Regulates \u2192" />
                  <NavRow label="Read the bias framework (F6)" href="/framework/f6-bias-regulates" linkText="Bias Regulates \u2192" />
                  <NavRow label="Read the foundational framework (F1)" href="/framework/f1-emotional-gradient" linkText="Emotions as Biological Information \u2192" />
                  <NavRow label="Read the calibration framework (F2)" href="/framework/f2-awareness-calibration" linkText="Awareness Teaches Awareness \u2192" />
                  <NavRow label="Read the cognitive maintenance framework (F3)" href="/framework/f3-false-coherence" linkText="Adult Cognition & False Coherence \u2192" />
                  <NavRow label="Understand the physiological basis of what repair requires" href="/model/m3-the-open-cycle" linkText="The Biology of Unfinished Emotion (M3) \u2192" />
                  <NavRow label="Explore all 12 frameworks" href="/frameworks-map" linkText="12 Frameworks \u2192" />
                  <NavRow label="Review the source theories" href="/scientific-foundations" linkText="Scientific Foundations \u2192" />
                  <NavRow label="Look up key terms" href="/glossary" linkText="Glossary \u2192" />
                  <NavRow label="See published research" href="/publications" linkText="Publications \u2192" />
                  <NavRow label="Experience the tools" href="https://teg-blue.com/emotional-tools" linkText="Emotional Tools (teg-blue.com) \u2192" external />
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
            "@id": "https://teg-blue.org/framework/f8-repairing-awareness#article",
            headline: "Repairing Awareness: How the Three Capacities Develop and Why Difference Is Strength",
            description:
              "How the three awareness capacities can be assessed, why repair is difficult, what conditions enable it, and what the process looks like. Why different awareness configurations make the collective stronger. Framework F8 of the TEG-Blue 12-framework system.",
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
            datePublished: "2026-03-04",
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
              "@id": "https://teg-blue.org/framework/f8-repairing-awareness",
            },
            about: [
              { "@type": "Thing", name: "Awareness Configuration" },
              { "@type": "Thing", name: "Conditions for Repair" },
              { "@type": "Thing", name: "Capacity Development Pathways" },
              { "@type": "Thing", name: "Universal Masking" },
              { "@type": "Thing", name: "Collective Intelligence Through Difference" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Attachment Theory (Bowlby, 1969)" },
              { "@type": "ScholarlyArticle", name: "The Developing Mind (Siegel, 2012)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Affect Regulation (Schore, 2003)" },
              { "@type": "ScholarlyArticle", name: "True/False Self (Winnicott)" },
              { "@type": "ScholarlyArticle", name: "Mentalization (Fonagy & Target)" },
              { "@type": "ScholarlyArticle", name: "Somatic Experiencing (Levine)" },
            ],
            keywords: [
              "repairing awareness",
              "awareness configuration",
              "capacity development",
              "conditions for repair",
              "masking",
              "collective intelligence",
              "different configurations",
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
              { name: "F8: Repairing Awareness", url: "/framework/f8-repairing-awareness" },
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
                question: "What does 'repairing awareness' mean in the TEG-Blue system?",
                answer:
                  "F8 proposes that repair means developing the awareness capacities (Reading Emotions, Emotional Resonance, Self-Emotional Awareness) that never had conditions to develop — not finding a hidden self or removing a mask. The destination is the same designed development F2 describes, arrived at by a different route: through conditions an adult can seek, create, and sustain. The regulation thread reversed: every substitute from F3–F7 was built because the original was missing. Repair means building the original.",
              },
              {
                question: "What is an awareness configuration?",
                answer:
                  "An awareness configuration describes the current state of each of the three capacities: online (functioning for understanding), offline (never developed), misdirected (functioning but serving the wrong purpose), collapsed (was developing but overwhelmed), or compensatory (one capacity doing another's job). Configuration predicts chronic mode — for example, sharp RE + collapsed ER + offline SEA predicts chronic Control. This is assessment, not diagnosis: every configuration made sense given the original environment.",
              },
              {
                question: "What conditions are needed for repair?",
                answer:
                  "Five conditions, all necessary, none sufficient alone: (1) Felt safety — nervous system regulation sufficient for new capacity to come online; (2) Accurate mirroring — being seen as one actually is; (3) Discomfort tolerance — capacity to stay present with grief, confusion, and vulnerability; (4) Permission — acceptance that imperfection and process are legitimate; (5) Time — accumulated experience rather than single insight. Critically, felt safety is experienced, not understood — insight alone does not produce safety.",
              },
              {
                question: "Why does everyone mask their awareness configuration?",
                answer:
                  "F8 proposes that masking is universal, not limited to neurodivergent experience. Every configuration that doesn't match what the environment expects gets masked — the child who feels too much performs calm, the child who reads too accurately pretends they didn't notice. Masking follows the regulation thread: authentic expression → environmental punishment → the nervous system learns authenticity is unsafe → a regulatory strategy forms → false coherence absorbs the mask as truth. The cost is both individual (regulatory exhaustion, developmental arrest) and collective (shared blind spots, lost capacity).",
              },
              {
                question: "How does F8 connect to the rest of the TEG-Blue system?",
                answer:
                  "F8 is the first framework in the healing arc (F8–F10). It reverses the escalation arc: where F1–F7 each describe a regulation substitute at escalating scale and cost, F8 describes developing what was missing. Part 1 covers individual repair (assessment, conditions, pathways, process). Part 2 covers collective strength (universal masking, conformity costs, different configurations as collective intelligence). F9 then takes F8's universal insight and shows what happens at the structural extreme — when environments are designed for one neurological configuration.",
              },
            ])
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

const propositionItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
};

const orderedListStyle = {
  paddingLeft: 20,
  margin: "0 0 16px",
};

const listItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
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

function ThreeColRow({ cells }) {
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
