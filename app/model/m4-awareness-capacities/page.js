import Link from "next/link";
import dynamic from "next/dynamic";
import { BG, TEXT, FONT, SPECTRUM, AWARENESS, hexToRgba } from "@/src/styles/tokens";
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

const InteroceptiveArchitectureMap = dynamic(
  () => import("@/src/components/InteroceptiveArchitectureMap"),
  { ssr: false }
);
const EmpathicIntegrationExplorer = dynamic(
  () => import("@/src/components/EmpathicIntegrationExplorer"),
  { ssr: false }
);

const MODEL_COLOR = SPECTRUM.cobalt;

const ANCHOR_SECTIONS = [
  { label: "Architecture of Empathy", href: "#architecture-of-empathy" },
  { label: "Two Systems", href: "#awareness-architecture" },
  { label: "Interoceptive Access", href: "#interoceptive-access" },
  { label: "Three Capacities", href: "#three-capacities" },
  { label: "What SEA Determines", href: "#what-sea-determines" },
  { label: "Coherence", href: "#coherence" },
  { label: "Diagrams", href: "#diagrams" },
  { label: "Connections", href: "#connections" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Awareness Capacities (M4) | TEG-Blue Research",
  description:
    "What determines whether the person can perceive the Emotional Somatic Cycle while it is running. Two information systems, two biological substrates, three awareness capacities, and the interoceptive architecture that connects or separates them.",
  keywords: [
    "awareness capacities",
    "interoceptive self-awareness",
    "affective resonance",
    "interpersonal affect perception",
    "interoceptive access",
    "two substrates",
    "ESS CLS architecture",
    "coherence",
    "capacity configuration",
    "emotional somatic cycle",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m4-awareness-capacities",
  },
  openGraph: {
    title: "Awareness Capacities \u2014 M4 Model | TEG-Blue",
    description:
      "Two information systems, two biological substrates, three awareness capacities. What determines whether the person can perceive the Emotional Somatic Cycle while it is running.",
    url: "https://teg-blue.org/model/m4-awareness-capacities",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awareness Capacities \u2014 TEG-Blue M4",
    description:
      "Two information systems, two biological substrates, three awareness capacities. The architecture that determines whether the cycle can be observed.",
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function M4AwarenessCapacitiesPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/model/m4-awareness-capacities" />

      <PageLayout
        header={
          <>
            <ModelHero
              badge="MODEL M4"
              title="Awareness Capacities"
              subtitle="The Calibration"
              description="The body detected something. Hormones released. Muscles activated. Heart rate shifted. The entire nervous system reconfigured (M1, M2). Then the question: can the body reverse these physiological changes, or do they persist and accumulate (M3)? But throughout \u2014 from the first hormonal shift to the last substitute \u2014 one question has been running underneath: can the person feel any of these physiological changes while they are happening? What determines this is a biological architecture \u2014 two information systems operating through two separate substrates, producing three distinct channels of awareness."
              coreQuestion="Can the person perceive the Emotional Somatic Cycle while it is running \u2014 and what determines whether they can?"
              drawsFrom={[
                { label: "M1", href: "/model/m1-emotions-as-signals" },
                { label: "M2", href: "/model/m2-nervous-system-states" },
                { label: "M3", href: "/model/m3-regulation-capacities" },
                { label: "F2", href: "/framework/f2-awareness-calibration" },
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
                  Two information systems: the Emotional Somatic System (ESS) detects and generates physiological responses below conscious awareness; the Cognitive-Logical System (CLS) produces language, reasoning, and narrative from whatever data reaches it
                </li>
                <li style={propositionItemStyle}>
                  Two biological substrates: the interoceptive substrate reads the body from the inside; the external observation substrate reads other bodies from the outside. They do not share hardware.
                </li>
                <li style={propositionItemStyle}>
                  Three awareness capacities: Interpersonal Affect Perception (RE) identifies what others feel through observable signals; Affective Resonance (ER) feels what others feel in one{"'"}s own body; Interoceptive Self-Awareness (SEA) carries the ESS{"'"}s signals to the CLS
                </li>
                <li style={propositionItemStyle}>
                  Interoceptive access is the single upstream variable: substrate state determines which capacities can function, what data reaches the CLS, what coherence the CLS builds, and whether override is visible or invisible
                </li>
                <li style={propositionItemStyle}>
                  Interoceptive Self-Awareness (SEA) is the bridge between the two systems. Without it, the CLS operates disconnected from the body{"'"}s signals and builds coherence without them
                </li>
                <li style={propositionItemStyle}>
                  Three forms of coherence: aligned with the body (full data), without the body (bridge closed), contested by the body (bridge active but flooded or contradicted)
                </li>
                <li style={propositionItemStyle}>
                  The chain feeds itself in both directions: degradation amplifies degradation, restoration amplifies restoration. The architecture amplifies whichever direction it is running.
                </li>
              </ul>
            </ModelPurpose>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 1: WHAT AWARENESS RUNS ON                  */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 1" title="What Awareness Runs On" color={MODEL_COLOR} />

          {/* ─── C0: THE ARCHITECTURE OF EMPATHY ──────────── */}
          <section
            id="architecture-of-empathy"
            aria-labelledby="heading-architecture-of-empathy"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-architecture-of-empathy"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              The Architecture of Empathy
            </h2>

            <p style={proseStyle}>
              Some people read others with precision {"\u2014"} they identify emotional states in the room before anyone has spoken. The same people may have no access to what they themselves are feeling.
            </p>
            <p style={proseStyle}>
              Some people feel others intensely {"\u2014"} when someone nearby is in pain, they experience a version of that pain in their own body. The same people may be unable to distinguish that resonance from their own internal state.
            </p>
            <p style={proseStyle}>
              Some people can observe their own emotional responses while the responses are happening {"\u2014"} they notice the activation, name it, and hold it as information rather than being consumed by it. Others are inside the response with no observing position from which to see it.
            </p>
            <p style={proseStyle}>
              These are not variations of one capacity. They are three distinct awareness capacities, each accessing different information, each operating through different biological channels, and each with a different vulnerability under chronic activation. <Link href="/model/m2-nervous-system-states" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M2</Link> said: {"\u201C"}Some people feel the state shift. Some don{"'"}t.{"\u201D"} <Link href="/model/m3-regulation-capacities" style={{ color: MODEL_COLOR, textDecoration: "none" }}>M3</Link> said: {"\u201C"}Some people feel the activation running. Others cannot.{"\u201D"} The gap was visible. The mechanism was not yet named.
            </p>
            <p style={proseStyle}>
              Three awareness capacities {"\u2014"} <strong style={{ color: AWARENESS.RE }}>Interpersonal Affect Perception (RE)</strong>, <strong style={{ color: AWARENESS.ER }}>Affective Resonance (ER)</strong>, and <strong style={{ color: AWARENESS.SEA }}>Interoceptive Self-Awareness (SEA)</strong> {"\u2014"} each with a different biological basis, each with a different degradation pattern, and each developable through specific relational conditions.
            </p>
            <p style={proseStyle}>
              But the three capacities are not three independent dials. They are products of a biological architecture {"\u2014"} two information systems operating through two separate substrates. Before defining each capacity, this model maps what the capacities are built on. The architecture determines why they separate in specific, predictable patterns, why one survives when the other two degrade, and why the configuration a person carries determines whether they can observe the Emotional Somatic Cycle while it is running.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Empathy as three channels: one CLS capacity, one ESS capacity, and the bridge between them. A person can have one channel open and the other two closed {"\u2014"} producing a fundamentally different awareness architecture.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Decety & Jackson (2004) {"\u2014"} empathy as multi-component: cognitive empathy, affective empathy, and self-referential processing as distinguishable processes. Blair (2005) {"\u2014"} dissociable empathy components with independent degradation patterns, producing qualitatively different outcomes depending on which components are intact.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The identification of the three awareness capacities as the mechanism M2 and M3 described without naming {"\u2014"} the gap between the person who can feel the Emotional Somatic Cycle running and the person who cannot, now traced to three specific channels. The reframe from degree to structure: the question is not how much empathy a person has, but which specific capacities are present and which are absent {"\u2014"} and the answer lies in the biological architecture those capacities are built on.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C1: THE AWARENESS ARCHITECTURE ──────────── */}
          <section
            id="awareness-architecture"
            aria-labelledby="heading-awareness-architecture"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-awareness-architecture"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              The Awareness Architecture
            </h2>

            <p style={proseStyle}>
              The nervous system operates through two information systems.
            </p>
            <p style={proseStyle}>
              The <strong style={{ color: TEXT.primary }}>Emotional Somatic System (ESS)</strong> detects, evaluates, and generates physiological responses. It operates below conscious awareness. It is always running. When the ESS detects biologically relevant information {"\u2014"} a threat, a boundary crossed, a moment of safety, a relational signal {"\u2014"} it produces a specific physiological response: hormones release, muscles activate, heart rate shifts, neural circuits reorganize. The ESS does not need the person to be aware of it. It runs regardless.
            </p>
            <p style={proseStyle}>
              The <strong style={{ color: TEXT.primary }}>Cognitive-Logical System (CLS)</strong> produces language, reasoning, planning, and narrative construction. It constructs what the person experiences as {"\u201C"}reality{"\u201D"} {"\u2014"} the story about what is happening, what it means, who they are. The CLS needs data. It builds from whatever data it has access to. The CLS does not distinguish between a complete data set and an incomplete one. It builds coherence from whatever reaches it {"\u2014"} and the coherence feels true, whether or not it includes what the body is doing.
            </p>
            <p style={proseStyle}>
              The question that determines everything M4 maps is: <strong style={{ color: MODEL_COLOR }}>what data reaches the CLS?</strong>
            </p>

            {/* Data sources table */}
            <div style={{ overflowX: "auto", marginBottom: 20, marginTop: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 2fr 0.8fr", minWidth: 600 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Data Source</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Channel</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What It Provides</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Interoceptive?</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: AWARENESS.RE }}>External observation</div>
                <div style={gridCellStyle}>Interpersonal Affect Perception (RE)</div>
                <div style={gridCellStyle}>What other bodies are broadcasting {"\u2014"} faces, voices, behavior, postural changes</div>
                <div style={gridCellStyle}>No</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: AWARENESS.ER }}>Somatic resonance</div>
                <div style={gridCellStyle}>Affective Resonance (ER)</div>
                <div style={gridCellStyle}>What other bodies{"'"} states feel like in one{"'"}s own body {"\u2014"} the somatic echo</div>
                <div style={gridCellStyle}>Yes</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: AWARENESS.SEA }}>Own body{"'"}s signals</div>
                <div style={gridCellStyle}>Interoceptive Self-Awareness (SEA)</div>
                <div style={gridCellStyle}>What the ESS is doing right now {"\u2014"} hormonal shifts, muscular tension, autonomic state</div>
                <div style={gridCellStyle}>Yes</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Its own output</div>
                <div style={gridCellStyle}>(default {"\u2014"} no channel)</div>
                <div style={gridCellStyle}>Reasoning, narrative, abstraction, memory, pattern matching</div>
                <div style={gridCellStyle}>No</div>
              </div>
            </div>

            <h3 style={conceptHeadingStyle}>Two Substrates</h3>
            <p style={proseStyle}>
              The <strong style={{ color: TEXT.primary }}>interoceptive substrate</strong> {"\u2014"} the anterior insula, ventral vagal pathways, and visceral afferent nerves {"\u2014"} reads the body from the inside. It continuously maps visceral organ states, hormonal shifts, muscular tension changes, and autonomic activation levels.
            </p>
            <p style={proseStyle}>
              The <strong style={{ color: TEXT.primary }}>external observation substrate</strong> {"\u2014"} the amygdala and prefrontal cortex {"\u2014"} reads other bodies from the outside, through visible and audible signals. The amygdala extracts emotional information from faces, voices, and postures within milliseconds, before conscious awareness arrives. The prefrontal cortex integrates that rapid reading with context, history, and relationship.
            </p>
            <p style={proseStyle}>
              Two substrates. Two separate sets of biological hardware. They do not share components. This single structural fact makes a specific prediction: if one substrate degrades under chronic activation, the capacities built on it should degrade together, while the capacity built on the other substrate should be unaffected. The interoceptive substrate degrades under sustained cortisol elevation and sympathetic dominance. Both capacities that depend on it {"\u2014"} Affective Resonance (ER) and Interoceptive Self-Awareness (SEA) {"\u2014"} lose access. Interpersonal Affect Perception (RE) continues operating, often with greater precision. The separation is not random. It is hardware.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Two systems, two substrates, four data sources. What the CLS builds depends on which channels are reporting {"\u2014"} and which channels can report depends on which biological substrate they are built on.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Craig (2002, 2009) {"\u2014"} the anterior insula as the cortical seat of interoceptive awareness, mapping visceral, hormonal, and autonomic states into conscious experience. Porges (2011) {"\u2014"} polyvagal theory: ventral vagal pathways as the substrate for social engagement, suppressed under chronic sympathetic activation. Shamay-Tsoory, Aharon-Peretz & Perry (2009) {"\u2014"} double dissociation between cognitive empathy (external observation) and affective empathy (interoceptive resonance).
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The two-system, two-substrate architecture as the structural foundation for awareness. The ESS and CLS as two information systems, each operating through different biological hardware, producing a specific question: what data reaches the CLS? The four data sources {"\u2014"} three awareness channels plus the CLS{"'"}s own output {"\u2014"} mapped onto which substrate each requires. The prediction: when one substrate degrades, the capacities built on it degrade together while the capacity built on the other substrate is unaffected.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C2: INTEROCEPTIVE ACCESS ────────────────── */}
          <section
            id="interoceptive-access"
            aria-labelledby="heading-interoceptive-access"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-interoceptive-access"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Interoceptive Access
            </h2>

            <p style={proseStyle}>
              Interoceptive access is the state of the interoceptive substrate {"\u2014"} whether it is generating readable signals, whether those signals are reaching cortical processing, and whether the anterior insula can map them into conscious experience. Interoceptive access is not a capacity. It is a precondition. It is the ceiling that determines what Affective Resonance (ER) and Interoceptive Self-Awareness (SEA) can do. Neither capacity can exceed what the substrate can carry.
            </p>
            <p style={proseStyle}>
              Three states of interoceptive access produce three different downstream architectures {"\u2014"} and in each state, the ESS and CLS behave in predictably different ways.
            </p>

            <h3 style={conceptHeadingStyle}>Fully Available</h3>
            <p style={proseStyle}>
              The interoceptive substrate generates readable signals. The anterior insula maps visceral, hormonal, and autonomic changes clearly. The ventral vagal pathways are open. In this state, the ESS generates signals {"\u2014"} and the CLS knows. The person can feel the shift. The CLS receives data from all three awareness channels alongside its own narrative and reasoning. Override remains available, but it is a choice: the CLS knows there is a signal to intercept. The restoration sequence {"\u2014"} when the nervous system completes its activation and returns toward physiological baseline {"\u2014"} can be observed while it runs.
            </p>

            <h3 style={conceptHeadingStyle}>Absent</h3>
            <p style={proseStyle}>
              The interoceptive substrate is unavailable. Two distinct mechanisms produce this state. In developmental absence, the interoceptive channels were never adequately built {"\u2014"} the relational environment did not provide the conditions under which the anterior insula develops its mapping precision. In chronic degradation, sustained cortisol elevation reduces the signal-to-noise ratio and persistent sympathetic activation suppresses the ventral vagal pathways. In either case, the CLS receives data from one awareness channel only {"\u2014"} Interpersonal Affect Perception (RE) {"\u2014"} plus its own narrative output. The CLS does not know it is missing data. The coherence it builds feels complete. The override runs without being experienced as an override.
            </p>

            <h3 style={conceptHeadingStyle}>Partial {"\u2014"} Flooded or Contradicted</h3>
            <p style={proseStyle}>
              The interoceptive substrate is active. Signals are being generated. But they do not arrive at the CLS as usable information. In flooded access, the channels carry more signal than the cortex can process into distinct information {"\u2014"} the person feels intensely but cannot distinguish what they are feeling. In contradicted access, the signals reach cortical processing but the CLS{"'"}s own narrative disputes them: {"\u201C"}that doesn{"'"}t make sense, there{"'"}s no reason to feel this way.{"\u201D"} The body says one thing. The narrative says another. The external reading says a third.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The ESS does not change across any state of interoceptive access. It runs the same sequence regardless. Interoceptive access determines one thing only: whether the CLS knows the ESS is running.
            </OperationalStatement>

            <h3 style={conceptHeadingStyle}>The Degradation Order</h3>
            <p style={proseStyle}>
              Affective Resonance (ER) degrades before Interoceptive Self-Awareness (SEA) under chronic activation because ER places greater demands on the interoceptive substrate. ER requires the channels to translate signals across bodies {"\u2014"} the anterior insula performing a cross-referencing operation between external emotional data and internal somatic representation. This is the most demanding use of the substrate. SEA requires the channels to carry self-referential signals only {"\u2014"} less demanding. As the substrate degrades, the more demanding operation fails first. ER drops out while SEA may still carry enough signal to function partially. Interpersonal Affect Perception (RE) never degrades through this mechanism {"\u2014"} it operates through a substrate that chronic activation does not suppress.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Craig (2002, 2009) {"\u2014"} interoceptive accuracy as a measurable variable that differs across individuals and conditions. Khalsa et al. (2018) {"\u2014"} interoceptive accuracy as distinct from interoceptive sensibility and interoceptive awareness, establishing that substrate signal quality is separable from beliefs about that signal. van der Kolk (2014) {"\u2014"} chronic stress producing measurable reductions in interoceptive access. Porges (2011) {"\u2014"} ventral vagal suppression under sustained sympathetic activation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The identification of interoceptive access as a single upstream variable {"\u2014"} not one capacity among three, but the precondition that determines whether two of the three capacities can function, what data the CLS receives, and whether the person can observe the ESS running. The three states as functional consequences of what the substrate is doing, each producing a specific downstream architecture. The degradation order explained through substrate demand: ER requires the most demanding use of the interoceptive substrate and degrades first.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 2: THE THREE CAPACITIES                    */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 2" title="The Three Capacities" color={MODEL_COLOR} />

          {/* ─── C3: INTERPERSONAL AFFECT PERCEPTION (RE) ── */}
          <section
            id="three-capacities"
            aria-labelledby="heading-re"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-re"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Interpersonal Affect Perception (RE)
            </h2>

            <p style={proseStyle}>
              <strong style={{ color: AWARENESS.RE }}>Interpersonal Affect Perception (RE)</strong> is the capacity to identify what other people are feeling through observable signals {"\u2014"} facial expressions, tone of voice, body language, behavioral patterns. RE is a CLS capacity. The CLS reads what other bodies{"'"} emotional-somatic systems are broadcasting, from the outside, through observable signals. RE does not require the CLS to be connected to its own body{"'"}s internal state. It reads outward.
            </p>
            <p style={proseStyle}>
              The reading operates as a two-stage process. The first stage is rapid and automatic {"\u2014"} the amygdala and sensory processing regions extract emotional signals below conscious awareness, within milliseconds. The second stage is deliberate {"\u2014"} the prefrontal cortex integrates that reading with context, history, and relationship.
            </p>
            <p style={proseStyle}>
              RE is the most robust of the three awareness capacities. It survives chronic activation. It often sharpens under chronic states {"\u2014"} the reading becomes more precise. The structural reason: RE operates through the external observation substrate, which chronic activation does not suppress. When the interoceptive substrate degrades {"\u2014"} when Affective Resonance (ER) and Interoceptive Self-Awareness (SEA) lose access {"\u2014"} the CLS is no longer processing felt data that competes for cognitive resources. All processing concentrates on the one channel that remains open.
            </p>
            <p style={proseStyle}>
              What changes under chronic activation is not the accuracy of the reading but what the reading serves. The same capacity that in a state of safety reads for understanding, in a chronic state reads for survival, strategy, or control.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              A person with strong Interpersonal Affect Perception (RE) can walk into a room and identify what every person is feeling. This tells you nothing about whether they can feel what those people are feeling in their own body. And nothing about whether they can identify what they themselves are feeling.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Baron-Cohen (2003) {"\u2014"} cognitive empathy as a distinct, dissociable capacity. LeDoux (1996) {"\u2014"} amygdala processing emotional signals before conscious awareness. Shamay-Tsoory, Aharon-Peretz & Perry (2009) {"\u2014"} double dissociation between cognitive and affective empathy.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The identification of Interpersonal Affect Perception (RE) as a CLS capacity operating through the external observation substrate {"\u2014"} explaining structurally why it survives and sharpens under chronic activation. RE sharpens in chronic states not despite the loss of the other channels but because of it: with the interoceptive substrate degraded, all cognitive resources concentrate on the one remaining channel.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C4: AFFECTIVE RESONANCE (ER) ──────────────── */}
          <section
            id="affective-resonance"
            aria-labelledby="heading-er"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-er"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Affective Resonance (ER)
            </h2>

            <p style={proseStyle}>
              <strong style={{ color: AWARENESS.ER }}>Affective Resonance (ER)</strong> is the capacity to feel what other people are feeling {"\u2014"} not reading their state from outside, but experiencing a version of it in one{"'"}s own body. When someone nearby is in pain, and the body produces a somatic echo of that pain {"\u2014"} that is ER. It is the felt dimension of connection.
            </p>
            <p style={proseStyle}>
              ER is an ESS capacity. The ESS resonates with what other bodies are broadcasting {"\u2014"} directly, somatically, through the interoceptive substrate, before cognition arrives. The anterior insula maps the body{"'"}s internal state and translates others{"'"} expressions into felt somatic experience. The ventral vagal pathways carry the co-regulation signal.
            </p>
            <p style={proseStyle}>
              ER is the most fragile of the three awareness capacities. It is the first to degrade under chronic activation. The structural reason is substrate demand: ER requires the interoceptive channels to translate signals across bodies {"\u2014"} the most demanding use of the substrate. As chronic cortisol elevation degrades the anterior insula{"'"}s signal-to-noise ratio, the most demanding operation fails first.
            </p>
            <p style={proseStyle}>
              Sustainable ER means resonating with others while maintaining one{"'"}s own center. But the boundary between self and other is not maintained by ER alone. That boundary requires Interoceptive Self-Awareness (SEA) functioning simultaneously: ER registers what the other person is feeling; SEA tells the person that the feeling belongs to the other, not to themselves. When SEA is absent, ER has no anchor {"\u2014"} and what appears as deep empathy may be structural merger.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The difference between Interpersonal Affect Perception (RE) and Affective Resonance (ER) is not degree. It is kind. RE identifies: {"\u201C"}this person is afraid.{"\u201D"} ER produces: the body generates a version of that fear. One is information. The other is experience.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Singer & Klimecki (2014) {"\u2014"} distinction between empathic distress (flooding) and compassion (sustainable resonance). Porges (2011) {"\u2014"} ventral vagal pathways as the co-regulation circuit, suppressed under threat. Schore (2003) {"\u2014"} right-brain relational regulation and its developmental trajectory.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The identification of Affective Resonance (ER) as an ESS capacity operating through the interoceptive substrate {"\u2014"} explaining why it is the most fragile awareness capacity. The structural observation that the boundary between self and other is maintained by Interoceptive Self-Awareness (SEA), not by ER itself {"\u2014"} explaining why flooded ER (absorbing everything) co-occurs with absent SEA (no anchor to locate the boundary).
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C5: INTEROCEPTIVE SELF-AWARENESS (SEA) ───── */}
          <section
            id="interoceptive-self-awareness"
            aria-labelledby="heading-sea"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-sea"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Interoceptive Self-Awareness (SEA) {"\u2014"} The Bridge
            </h2>

            <p style={proseStyle}>
              <strong style={{ color: AWARENESS.SEA }}>Interoceptive Self-Awareness (SEA)</strong> occupies a structurally unique position. It operates through the interoceptive substrate {"\u2014"} the same hardware Affective Resonance (ER) uses {"\u2014"} but it does something neither RE nor ER can do: it connects the two systems.
            </p>
            <p style={proseStyle}>
              Interpersonal Affect Perception (RE) reads outward from the CLS. Affective Resonance (ER) resonates through the ESS. Neither system knows what the other is doing. SEA is what connects them. It operates through interoception {"\u2014"} the ESS{"'"}s substrate {"\u2014"} but carries the ESS{"'"}s signals to the CLS. When the bridge is open, the CLS knows what the ESS is doing: <em>my body is responding to something.</em> When the bridge is closed, the CLS continues operating in its own domain with no awareness that the ESS is running a physiological sequence underneath.
            </p>
            <p style={proseStyle}>
              SEA provides the <strong style={{ color: TEXT.primary }}>Interoceptive Channel</strong> {"\u2014"} the pathway through which the CLS receives the ESS{"'"}s physiological signals. SEA is the capacity. The Interoceptive Channel is the function SEA provides when it is present.
            </p>

            <h3 style={conceptHeadingStyle}>The Family Lineage</h3>
            <p style={proseStyle}>
              ER and SEA are not two unrelated capacities that happen to share hardware. They are two applications of the same interoceptive access {"\u2014"} one directed outward, one directed inward. The substrate is the parent. The capacities are the children.
            </p>
            <p style={proseStyle}>
              Having the substrate does not guarantee having the capacities built on it. The clearest demonstration: flooded ER with absent SEA. The interoceptive substrate is active {"\u2014"} ER is using it, the body resonates with everything. But the inward application was never built or was suppressed. The person feels what others feel but cannot feel what they themselves feel.
            </p>

            <h3 style={conceptHeadingStyle}>The SEA {"\u2192"} ER Developmental Link</h3>
            <p style={proseStyle}>
              When SEA becomes available {"\u2014"} when the inward application of interoceptive access comes online {"\u2014"} ER rises with it. SEA requires the person to register their own body{"'"}s signals as readable information. Once the substrate is active for self-referential mapping, the same substrate is available for other-referential mapping. The reverse is not symmetrical. Flooded ER {"\u2014"} the substrate active for outward resonance {"\u2014"} does not build SEA. The person who absorbs everything others feel does not thereby develop the capacity to identify their own internal state.
            </p>
            <p style={proseStyle}>
              SEA is the developmental entry point. A person cannot feel others accurately {"\u2014"} with boundaries, with differentiation {"\u2014"} if they cannot feel themselves.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Interoceptive Self-Awareness (SEA) is the only capacity that connects the two systems. Without the bridge, the CLS and ESS operate disconnected. Interpersonal Affect Perception (RE) reads, Affective Resonance (ER) resonates, neither system knows what the other is doing.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Craig (2002) {"\u2014"} interoceptive awareness as the substrate of emotional self-awareness. Damasio (1999) {"\u2014"} the feeling of what happens: self-referential emotional processing. Lane & Schwartz (1987) {"\u2014"} levels of emotional awareness as a developmental capacity. Schore (2003) {"\u2014"} right-hemisphere development of self-regulatory capacity through early relational experience.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The identification of SEA as the bridge between the two systems {"\u2014"} the only capacity that connects the CLS to the ESS. The family lineage as a hierarchical architecture: substrate as parent, interoceptive access as the state of the parent, ER and SEA as two applications (outward and inward). The SEA {"\u2192"} ER developmental direction: building the inward application activates the substrate for outward use, but flooding the outward application does not build the inward one.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 3: WHAT THE CHAIN DETERMINES                */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 3" title="What the Chain Determines" color={MODEL_COLOR} />

          {/* ─── C6: WHAT SEA DETERMINES ───────────────────── */}
          <section
            id="what-sea-determines"
            aria-labelledby="heading-what-sea-determines"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-what-sea-determines"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              What Interoceptive Self-Awareness (SEA) Determines
            </h2>

            <p style={proseStyle}>
              The connection between the two systems {"\u2014"} or its absence {"\u2014"} determines five things:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 3fr", minWidth: 500 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Function</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>What SEA Provides</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Activation observation</div>
                <div style={gridCellStyle}>The person notices: <em>my body is responding to something.</em> The signal{"'"}s content is accessible. Without SEA, the activation runs without observation.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Self-other distinction</div>
                <div style={gridCellStyle}>Affective Resonance (ER) registers what the other person is feeling. SEA tells the CLS that the feeling belongs to the other person, not to oneself. Without SEA, ER floods or shuts down entirely.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Override detection</div>
                <div style={gridCellStyle}>When the CLS overrides the ESS{"'"}s signals, SEA is the capacity that would allow the person to notice the replacement happening. Without SEA, the narrative feels like truth.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Substitute recognition</div>
                <div style={gridCellStyle}>SEA allows the person to feel the difference between temporary relief and the biological completion process that returns the body to physiological baseline {"\u2014"} to notice that the felt intensity dropped but the activation is still there.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Cycle observability</div>
                <div style={gridCellStyle}>Without SEA, the Emotional Somatic Cycle runs {"\u2014"} signals generate, states reconfigure, activation accumulates, substitutes repeat {"\u2014"} and the person has no awareness that any of it is happening.</div>
              </div>
            </div>

            <h3 style={conceptHeadingStyle}>The Paradox</h3>
            <p style={proseStyle}>
              Under chronic activation, the interoceptive channels SEA requires are progressively depleted. The bridge closes not because the person chose to close it, but because the chronic activation that produces the pattern also degrades the biological substrate the bridge needs to function. The bridge needed to see the pattern is the bridge the pattern closes.
            </p>
            <p style={proseStyle}>
              Two distinct mechanisms produce this closure. First {"\u2014"} under chronic activation, the ESS{"'"}s signals become habitual background noise. They are no longer flagged as information because the activated state has been continuous for so long that it registers as normal. Second {"\u2014"} the prefrontal cortex{"'"}s processing of interoceptive signals is blocked by persistent cortisol elevation and sympathetic dominance. In either case, the activated state stops being legible as an activated state. It is experienced as identity.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The bridge needed to see the pattern is the bridge the pattern closes. The capacity needed to observe the mode is the capacity the mode disables. Interoceptive Self-Awareness (SEA) is structurally absent in all four chronic positions {"\u2014"} including chronic Safety & Openness.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Craig (2002) {"\u2014"} interoceptive awareness as the substrate linking affective resonance and self-awareness. Damasio (1999) {"\u2014"} self-referential emotional processing as distinct from other-referential processing.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The five-function mapping of what SEA specifically determines. The paradox formulation: the bridge needed to see the pattern is the bridge the pattern closes. The two distinct mechanisms of bridge closure (habituation and channel blockage) as clinically relevant. The identification that the bridge is closed in all four chronic positions, including chronic Safety & Openness.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C7: COHERENCE FROM AVAILABLE DATA ─────────── */}
          <section
            id="coherence"
            aria-labelledby="heading-coherence"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-coherence"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Coherence From Available Data
            </h2>

            <p style={proseStyle}>
              The CLS builds a narrative from whatever data it has. Three states of interoceptive access produce three structurally different forms of coherence.
            </p>

            {/* Coherence table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr 1.5fr", minWidth: 600 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>{" "}</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Aligned with the body</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Without the body</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Contested by the body</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Data source</div>
                <div style={gridCellStyle}>All three channels open + restoration learned</div>
                <div style={gridCellStyle}>Incomplete channel access + cognitive replacement</div>
                <div style={gridCellStyle}>Active but flooded/contradicted channels + narrative opposition</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Feels like</div>
                <div style={gridCellStyle}>{"\u201C"}This is complex and I can hold it{"\u201D"}</div>
                <div style={gridCellStyle}>{"\u201C"}This is clear and I know who I am{"\u201D"}</div>
                <div style={gridCellStyle}>{"\u201C"}Something is wrong but I don{"'"}t know what{"\u201D"}</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Function</div>
                <div style={gridCellStyle}>Understanding</div>
                <div style={gridCellStyle}>Regulation</div>
                <div style={gridCellStyle}>Neither {"\u2014"} the person is caught between</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Cost</div>
                <div style={gridCellStyle}>Complexity (must hold more)</div>
                <div style={gridCellStyle}>Truth (must suppress more)</div>
                <div style={gridCellStyle}>Trust (cannot trust either source)</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Requires</div>
                <div style={gridCellStyle}>SEA open, ER sustainable, RE accurate</div>
                <div style={gridCellStyle}>Bridge closed or never built</div>
                <div style={gridCellStyle}>Bridge partially open but overridden or flooded</div>
              </div>
            </div>

            <p style={proseStyle}>
              Coherence without the body often appears more put-together than coherence aligned with the body. The person operating without the bridge has a clear narrative, a consistent identity, a well-articulated self-understanding. The person developing coherence aligned with the body is messy, contradictory, uncertain. The smooth narrative may be the CLS constructing clarity from incomplete data. The messy one may be someone whose bridge is opening for the first time.
            </p>
            <p style={proseStyle}>
              Coherence contested by the body may be the most clinically significant state. The substrate is still active. The signal is still arriving. The crack in the narrative is there. The person is not fully disconnected from their body {"\u2014"} they are in conflict with it. The bridge is not absent. It is contested.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The CLS does not wait for a complete data set before producing coherence. It builds from whatever data reaches it. When interoceptive data is missing, the coherence it produces may still feel complete {"\u2014"} because the CLS does not register the absence as absence.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Main & Goldwyn (1998) {"\u2014"} coherent narrative as a marker of earned security in the Adult Attachment Interview. Festinger (1957) {"\u2014"} cognitive dissonance and the drive toward coherent narrative. Kahneman (2011) {"\u2014"} coherence-seeking as a fundamental cognitive process that builds plausible stories from available data, regardless of completeness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Three forms of coherence mapped through the two-system architecture. The identification that contested coherence is the clinically significant entry point: the substrate is still active, the signal is still arriving, and the conflict between body and narrative indicates the bridge is reachable. The observation that coherence without the body often appears more coherent than coherence aligned with the body.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C8: FEELING-IDENTITY FUSION ───────────────── */}
          <section
            id="feeling-identity-fusion"
            aria-labelledby="heading-feeling-identity"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-feeling-identity"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Feeling-Identity Fusion
            </h2>

            <p style={proseStyle}>
              When the bridge between the two systems has never been built {"\u2014"} or has closed under chronic activation {"\u2014"} the CLS has no channel to separate {"\u201C"}what I feel{"\u201D"} from {"\u201C"}what I am.{"\u201D"}
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Feeling = being.</strong> The person does not experience {"\u201C"}I feel scared.{"\u201D"} They <em>are</em> scared. The ESS generates activation. Without the bridge, the CLS cannot register the activation as information about a state. The state is experienced as the person themselves.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Feedback = identity.</strong> External input reaches the CLS through Interpersonal Affect Perception (RE). Without SEA to anchor the CLS to its own internal state, the CLS has no reference point to hold {"\u201C"}what was said to me{"\u201D"} apart from {"\u201C"}what I am.{"\u201D"}
            </p>
            <p style={proseStyle}>
              Every human being begins here. Before cognition develops, there is no observing self. The question is whether the bridge develops {"\u2014"} whether the CLS eventually gains a channel to receive the ESS{"'"}s signals and say {"\u201C"}this is what I feel{"\u201D"} rather than {"\u201C"}this is what I am.{"\u201D"} When the bridge develops, the person gains an observing position. When it does not, this condition persists into adulthood.
            </p>
            <p style={proseStyle}>
              Two structurally different routes produce the same condition. <strong style={{ color: TEXT.primary }}>Chronic suppression</strong> {"\u2014"} the bridge developed and then closed under chronic activation. The pathway exists but is blocked. <strong style={{ color: TEXT.primary }}>Developmental absence</strong> {"\u2014"} the bridge was never built. The relational conditions that build it were never present. The distinction matters because unblocking an existing pathway and building a pathway that never existed are fundamentally different processes. How the bridge develops {"\u2014"} through what relational conditions {"\u2014"} is the territory of <Link href="/framework/f2-awareness-calibration" style={{ color: MODEL_COLOR, textDecoration: "none" }}>Framework 2</Link>.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The condition is invisible. The adult does not know the bridge is absent, because they have never experienced it being open.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata">
                <p style={expandedProseStyle}>
                  Winnicott (1960) {"\u2014"} the true self and false self as developmental outcomes of early relational conditions. Stern (1985) {"\u2014"} the development of the sense of self through stages. Fonagy, Gergely, Jurist & Target (2002) {"\u2014"} mentalization as a developmental achievement requiring specific relational conditions.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The condition reframed through the CLS-ESS architecture: the CLS operating without the bridge to its own ESS, producing Feeling = Being as a structural consequence of channel absence. The distinction between chronic suppression and developmental absence as two routes to the same operational condition {"\u2014"} with different repair implications.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* THE DIAGRAMS                                     */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="EXPLORE" title="The Diagrams" color={MODEL_COLOR} />

          <section
            id="diagrams"
            aria-labelledby="heading-diagrams"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-diagrams"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Interoceptive Architecture Map
            </h2>
            <p style={{ ...proseStyle, marginBottom: 24 }}>
              Explore the two systems, the interoceptive channel between them, and the three states of interoceptive access. Each state produces a different downstream architecture {"\u2014"} different capacities available, different data reaching the CLS, different coherence, different relationship to override and restoration.
            </p>

            <InteroceptiveArchitectureMap />
          </section>

          <section
            id="empathic-integration"
            aria-labelledby="heading-empathic-integration"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-empathic-integration"
              style={sectionHeadingStyle(MODEL_COLOR)}
            >
              Empathic Integration Explorer
            </h2>
            <p style={{ ...proseStyle, marginBottom: 24 }}>
              Adjust the three awareness capacities and see what each configuration produces {"\u2014"} what the CLS can and cannot do, what the ESS does, and where the nervous system tends to settle.
            </p>

            <EmpathicIntegrationExplorer />
          </section>

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={MODEL_COLOR}
            connections={[
              {
                id: "M1: Emotions as Signals",
                href: "/model/m1-emotions-as-signals",
                description: "Describes the signal the nervous system generates \u2014 the physiological response pattern that the awareness architecture determines whether the person can perceive.",
              },
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "Describes the state the nervous system reorganizes into after the signal. M4 maps whether the person can feel the state shift \u2014 whether they notice the perception narrowing, the cognitive capacity changing.",
              },
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "Describes whether the body completes the activation sequence or stays open. M4 maps whether the person can observe the restoration sequence running, catch the override engaging, and distinguish a substitute from genuine restoration.",
              },
              {
                id: "F1: The Emotional Gradient",
                href: "/framework/f1-emotional-gradient",
                description: "Provides the biological origin of the safety-threat gradient. The four gradient positions map to four different interoceptive access profiles.",
              },
              {
                id: "F2: The Developmental Blueprint",
                href: "/framework/f2-awareness-calibration",
                description: "Explains how the three awareness capacities develop through early relational conditions \u2014 and what happens when those conditions are absent. The developmental origin of the bridge.",
              },
              {
                id: "F3: Cognitive Override",
                href: "/framework/f3-false-coherence",
                description: "Explains how coherence without the body maintains itself \u2014 the self-reinforcing loop, signal replacement, and why it resists change.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={MODEL_COLOR}
            items={[
              {
                label: "Return to where the cycle begins \u2014 the sixteen signals the nervous system generates",
                href: "/model/m1-emotions-as-signals",
                linkText: "M1: Emotions as Signals \u2192",
              },
              {
                label: "See the four states the nervous system reorganizes into after the signal",
                href: "/model/m2-nervous-system-states",
                linkText: "M2: Nervous System States \u2192",
              },
              {
                label: "See whether the body completes the activation sequence or stays open",
                href: "/model/m3-regulation-capacities",
                linkText: "M3: Regulation Capacities \u2192",
              },
              {
                label: "Explore how the three awareness capacities develop through early relational conditions",
                href: "/framework/f2-awareness-calibration",
                linkText: "F2: The Developmental Blueprint \u2192",
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

      {/* JSON-LD structured data — all content is static/hardcoded */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/model/m4-awareness-capacities#article",
            headline: "Awareness Capacities: The Calibration",
            description:
              "What determines whether the person can perceive the Emotional Somatic Cycle while it is running. Two information systems, two biological substrates, three awareness capacities. Model M4 of the TEG-Blue system.",
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
            datePublished: "2026-03-06",
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
              "@id": "https://teg-blue.org/model/m4-awareness-capacities",
            },
            about: [
              { "@type": "Thing", name: "Awareness Capacities" },
              { "@type": "Thing", name: "Interoceptive Self-Awareness" },
              { "@type": "Thing", name: "Affective Resonance" },
              { "@type": "Thing", name: "Interpersonal Affect Perception" },
              { "@type": "Thing", name: "Interoceptive Access" },
              { "@type": "Thing", name: "ESS CLS Architecture" },
              { "@type": "Thing", name: "Coherence" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "A neuroevolutionary approach to empathy (Decety & Jackson, 2004)" },
              { "@type": "ScholarlyArticle", name: "Responding to the emotions of others (Blair, 2005)" },
              { "@type": "ScholarlyArticle", name: "How do you feel? Interoception (Craig, 2002)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Empathy and the Brain (Shamay-Tsoory et al., 2009)" },
              { "@type": "ScholarlyArticle", name: "Empathy and Compassion (Singer & Klimecki, 2014)" },
              { "@type": "ScholarlyArticle", name: "The feeling of what happens (Damasio, 1999)" },
              { "@type": "ScholarlyArticle", name: "Affect Regulation and the Origin of the Self (Schore, 2003)" },
            ],
            ...generateBreadcrumbJsonLd([
              { name: "TEG-Blue Research", url: "https://teg-blue.org" },
              { name: "Models", url: "https://teg-blue.org/models" },
              { name: "M4: Awareness Capacities", url: "https://teg-blue.org/model/m4-awareness-capacities" },
            ]),
            ...generateSpeakableJsonLd(
              ["heading-core-propositions", "heading-architecture-of-empathy", "heading-awareness-architecture"],
              "https://teg-blue.org/model/m4-awareness-capacities"
            ),
            ...generateFAQJsonLd([
              {
                question: "What are awareness capacities?",
                answer: "Three distinct biological processes that determine whether a person can perceive the Emotional Somatic Cycle while it is running: Interpersonal Affect Perception (RE), Affective Resonance (ER), and Interoceptive Self-Awareness (SEA).",
              },
              {
                question: "What is interoceptive access?",
                answer: "The state of the interoceptive substrate \u2014 whether it is generating readable signals and whether those signals reach conscious processing. It is the single upstream variable that determines which awareness capacities can function.",
              },
              {
                question: "What is the bridge between the two systems?",
                answer: "Interoceptive Self-Awareness (SEA) is the bridge. It operates through the interoceptive substrate but carries the ESS's signals to the CLS. When the bridge is open, the CLS knows what the body is doing. When closed, the CLS operates disconnected.",
              },
            ]),
          }),
        }}
      />
    </div>
  );
}
