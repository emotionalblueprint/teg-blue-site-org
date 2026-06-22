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
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F8 makes about how awareness rebuilds through safety." },
  { label: "The Regulation Thread Reversed", href: "#thread-reversed", description: "The same thread traces escalation and repair. The direction depends on conditions." },
  { label: "Two Routes to the Same Condition", href: "#two-routes", description: "Chronic suppression (unblocking) vs developmental absence (building). Both require safety. The second requires more." },
  { label: "Why the System Defends Against Repair", href: "#repair-defense", description: "Five mechanisms — not resistance, but the nervous system accurately assessing costs." },
  { label: "Safety Before Capacity", href: "#safety-before-capacity", description: "Felt safety, not understood safety. Five conditions for the environment repair requires." },
  { label: "What Replaces Repair in Each State", href: "#repair-substitutes", description: "Self-blame, defense, performance, image management — each invisible from inside." },
  { label: "SEA as the Entry Point", href: "#sea-entry-point", description: "The multiplicative system: SEA's return transforms what the other capacities produce." },
  { label: "Five Oscillating Phases", href: "#five-phases", description: "Unawareness → Recognition → Oscillation → Active Development → Integration." },
  { label: "Why Experience Changes the System", href: "#experience-not-insight", description: "Two systems, two substrates, different speeds. The CLS updates through information. The ESS through experience." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Bridge to F9", href: "#bridge", description: "When the universal pattern of masking becomes structural." },
  { label: "Connections Map", href: "#connections", description: "How F8 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
  { label: "Common Understanding", href: "#common-understanding", description: "What most people think these words mean — and what the nervous system is actually doing." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Awareness Rebuilds Through Safety (F8) | TEG-Blue Research",
  description:
    "How the interoceptive channel reopens and capacities develop — two routes to the same condition, safety before capacity, SEA as the developmental entry point, and why experience changes the system while insight does not. Framework F8 of the TEG-Blue 12-framework system.",
  keywords: [
    "awareness repair",
    "interoceptive channel",
    "safety before capacity",
    "nervous system repair",
    "co-regulation",
    "interoceptive self-awareness",
    "earned security",
    "somatic experiencing",
    "repair oscillation",
    "felt safety",
    "developmental repair",
    "configuration diversity",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f8-repairing-awareness",
  },
  openGraph: {
    title: "Awareness Rebuilds Through Safety — F8 Framework | TEG-Blue",
    description:
      "How the interoceptive channel reopens — the first framework in the repair arc. Framework F8 of 12.",
    url: "https://teg-blue.org/framework/f8-repairing-awareness",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awareness Rebuilds Through Safety — TEG-Blue F8",
    description:
      "The repair arc begins — how safety enables the interoceptive substrate to rebuild, and why experience changes the system while insight does not.",
  },
  other: {
    'citation_title': 'Awareness Rebuilds Through Safety',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F8RepairingAwarenessPage() {
  const P = { A: PATTERN.A.primary, B: PATTERN.B.primary, C: PATTERN.C.primary, D: PATTERN.D.primary };

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
            title="Awareness Rebuilds Through Safety"
            subtitle="How the Interoceptive Channel Reopens and Capacities Develop"
            description="When safety replaces threat, the biological channels that connect the body's signals to conscious awareness can rebuild. Capacities that were never built can develop. The return path becomes available — not because of a decision to take it, but because the conditions that would support it become present. This framework maps how the channel between body and awareness reopens, why the system that needs repair defends against it, what conditions allow capacities to develop, and why experience changes the nervous system while insight alone does not."
            group="Repair"
            groupLabel="Repair Arc · F8–F12"
            threadLine="Awareness rebuilds through safety — the restoration pathway reopens. Restores: the return path"
            informsModels={[
              { label: "M3", href: "/model/m3-regulation-capacities" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
            ]}
            adjacent={{
              prev: { label: "F7 Domination Regulates", href: "/framework/f7-domination-regulates" },
              next: { label: "F9 Variation Is Configuration", href: "/framework/f9-neurodivergence-variation" },
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
              concept: "False Coherence",
              framework: "F3",
              description: "The CLS generating narrative that replaces the ESS's physiological signals — the cognitive maintenance that repair must work through, not argue against.",
              href: "/framework/f3-false-coherence#false-coherence",
            },
            {
              concept: "Interoceptive Self-Awareness (SEA)",
              framework: "F2",
              description: "The bridge between the ESS and the CLS — the capacity that must come online for the other capacities to function sustainably.",
              href: "/framework/f2-awareness-calibration#awareness-capacities",
            },
          ]} />


          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  The regulation thread runs in both directions — every substitute was built because the original was missing, and when the original becomes available, the need for the substitute diminishes
                </li>
                <li style={propositionItemStyle}>
                  Two routes to the same condition require different repair: chronic suppression (the pathway exists but is blocked — unblocking through sustained safety) and developmental absence (the pathway was never built — building through co-regulation)
                </li>
                <li style={propositionItemStyle}>
                  The system that needs repair defends against repair through five structural mechanisms — not resistance but the nervous system accurately assessing costs
                </li>
                <li style={propositionItemStyle}>
                  Safety before capacity: felt safety (the ESS's assessment), not understood safety (the CLS's conclusion) — five conditions create the environment repair requires
                </li>
                <li style={propositionItemStyle}>
                  SEA is the developmental entry point — the multiplicative system means SEA's return does not add a capacity but transforms what the other two produce
                </li>
                <li style={propositionItemStyle}>
                  The repair process oscillates through five phases — the oscillation IS the process, not a sign of failure
                </li>
                <li style={propositionItemStyle}>
                  Experience changes the system and insight does not — the CLS updates through information, the ESS updates through physiological conditions sustained long enough for the substrate to change
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: WHAT REPAIR MEANS ──────────────── */}
          <PartDivider label="PART 1" title="What Repair Means in This System" color={P.A} />

          {/* Concept 0: Regulation Thread Reversed */}
          <section
            id="thread-reversed"
            aria-labelledby="heading-thread-reversed"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-thread-reversed" style={sectionHeadingStyle(P.B)}>
              What the Regulation Thread Reversed Looks Like
            </h2>

            <p style={proseStyle}>
              The regulation thread (<Link href="/framework/f1-emotional-gradient#regulation-thread" style={linkStyle}>F1</Link>, completed in <Link href="/framework/f7-domination-regulates#complete-arc" style={linkStyle}>F7</Link>) traces how the nervous system substitutes — at escalating scales and costs — when biological restoration is never learned. The thread runs in both directions. Every substitute was built because the original was missing. When the original becomes available, the need for the substitute diminishes — not through argument or correction, but through the conditions that built the substitute changing underneath it.
            </p>
            <p style={proseStyle}>
              What "the original" means, biologically: the restoration sequence runs to its endpoint. Stress hormones metabolize. Muscles release. The HPA axis stands down. The nervous system returns toward physiological baseline. The entire escalation arc — from individual false coherence through institutional domination — traces what happens when this biological completion is structurally unavailable.
            </p>
            <p style={proseStyle}>
              The repair arc does not undo the escalation arc. It does not argue against the mechanisms <Link href="/framework/f4-rules-regulate" style={linkStyle}>F4</Link>–<Link href="/framework/f7-domination-regulates" style={linkStyle}>F7</Link> describe. It maps what happens when the conditions underneath those mechanisms change: when the interoceptive substrate begins to rebuild, when the bridge between the ESS and CLS begins to carry signal, when the restoration sequence becomes available — and the substitutes begin to loosen because the system no longer needs them in the same way. The reversal is not symmetrical. The substitutes developed over years or decades. The nervous system tests new conditions cautiously, retreats to the familiar, tests again.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — regulation thread running in both directions */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Porges (2011) — the nervous system's capacity to shift from defensive to social engagement states when safety cues are sustained. Levine (1997) — the body's capacity to complete interrupted activation sequences at any point in life. Bowlby (1969/1988) — earned security: adults can develop secure attachment representations regardless of their history. Siegel (2012) — neural integration as a lifelong developmental capacity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The regulation thread as a bidirectional architecture — the same thread that traces escalation also traces repair, and the direction depends on conditions, not on the person's decision. Repair framed not as undoing the past but as making the designed biological process available for the first time. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 1: Two Routes */}
          <section
            id="two-routes"
            aria-labelledby="heading-two-routes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-two-routes" style={sectionHeadingStyle(P.B)}>
              Two Routes to the Same Condition
            </h2>

            <p style={proseStyle}>
              The interoceptive channel can be absent for two structurally different reasons. The distinction determines what repair requires.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Chronic suppression.</strong> The bridge developed, partially or fully, and then closed under chronic activation. The interoceptive pathway exists. The channels are degraded — sustained cortisol elevation, sympathetic dominance, cortical suppression of visceral signals. But the architecture was built. Repair requires unblocking: sustained safety long enough for the existing pathway to reopen.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Developmental absence.</strong> The bridge was never built. The relational conditions that build the interoceptive substrate — being regulated with, having signals received, having activation sequences complete through co-regulation (<Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link>) — were never present. Repair requires building: new relational experience that constructs the pathway for the first time. Not instruction, not explanation — the same relational process that builds the substrate in childhood, operating in adulthood.
            </p>
            <p style={proseStyle}>
              Both routes produce the same operational condition: the CLS operates without its own ESS's data. The person may be cognitively sophisticated, professionally successful, psychologically literate — and still running without the interoceptive channel. The distinction matters because unblocking an existing pathway and building a pathway that never existed are fundamentally different biological processes — requiring different conditions, different relational inputs, and different timeframes.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — two routes, different repair requirements */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Schore (2003) — right-brain regulation develops through relational experience and can rebuild in adulthood. Fonagy & Target (2002) — mentalization as a developmental achievement acquirable through therapeutic relationships. Van der Kolk (2014) — physiological patterns persist until the body has conditions to complete what was interrupted.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The two-route distinction mapped through the interoceptive substrate architecture — not as clinical typology but as structural consequence of which system needs to change. Both routes produce identical conditions from outside, making the distinction invisible without assessment. What repair requires is determined by the route, not by the presenting condition. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 2: Why the System Defends */}
          <section
            id="repair-defense"
            aria-labelledby="heading-repair-defense"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-repair-defense" style={sectionHeadingStyle(P.B)}>
              Why the System That Needs Repair Defends Against Repair
            </h2>

            <p style={proseStyle}>
              The central difficulty is structural, not motivational. The awareness capacities that need developing are offline — and the systems that replaced them actively defend against the capacities coming online. Five mechanisms maintain the defense:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>False coherence treats the current configuration as truth.</strong> "This is who I am." The narrative stabilizes the chronic state. Questioning it threatens the only stability the system has.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The cognitive substitute has been rewarded.</strong> If the person has been successful and functional — and many people running Path B are — RE sharpened, the CLS built sophisticated models, the strategy has been producing results. Why would the nervous system abandon what has been reinforced?
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>SEA coming online means feeling what was previously unfelt.</strong> Grief for what was lost. Anger about what happened. Confusion about who one actually is without the narrative. The nervous system accurately predicts this cost.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Relationships were built around the current configuration.</strong> Partners, colleagues, family — all structured around who the person has been. A configuration change threatens every relationship that depended on the previous configuration.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The bootstrap problem.</strong> Developing SEA requires enough safety to tolerate what SEA will reveal. Developing ER requires enough resilience to handle feeling without collapsing. The system needs what it doesn't have in order to develop what it doesn't have. The system cannot start from inside itself. It requires external conditions to initiate the process.
            </p>
            <p style={proseStyle}>
              Each mechanism is the nervous system doing what it is designed to do: assessing conditions, predicting costs, and organizing to minimize threat. The defense dissolves when the conditions change — when the nervous system accumulates enough evidence that the new territory is survivable.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — five defense mechanisms */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Festinger (1957) — cognitive dissonance as regulatory threat to maintaining coherence. Bowlby (1980) — the attachment system's resistance to reorganization even when existing patterns are costly. Porges (2011) — neuroception: safety-threat assessment below conscious awareness. Levine (1997) — the body's resistance to discharge as protective until conditions support completion.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The five-mechanism model traced through specific systems (false coherence, cognitive substitution, the interoceptive channel, relational structures, and the bootstrap problem) rather than as generalized resistance. The reframing from motivational language ("they're not ready") to structural language: the system is assessing conditions, and the assessment is accurate given the current configuration. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: CONDITIONS ─────────────────────── */}
          <PartDivider label="PART 2" title="Conditions" color={P.B} />

          {/* Concept 3: Safety Before Capacity */}
          <section
            id="safety-before-capacity"
            aria-labelledby="heading-safety-before-capacity"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-safety-before-capacity" style={sectionHeadingStyle(P.B)}>
              Safety Before Capacity — The Organizing Principle
            </h2>

            <p style={proseStyle}>
              The nervous system must assess conditions as safe enough for capacities to come online. Not cognitive safety — the person understanding that they are safe. Felt safety — the ESS registering the sustained absence of threat through its own channels: ventral vagal activation, cortisol clearance, muscle release, autonomic settling.
            </p>
            <p style={proseStyle}>
              The distinction matters because the two systems operate on different data. The CLS can conclude "I am safe" from information. The ESS concludes "safe" from physiological signals: vocal prosody, pace of interaction, absence of sudden movement, sustained predictability. A person can understand they are safe and have a nervous system that has not updated. This is why insight does not produce repair.
            </p>
            <p style={proseStyle}>
              Five conditions create the environment in which capacities can begin developing. Each is necessary. None is sufficient alone:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Felt safety.</strong> Not the absence of discomfort — the presence of enough regulation to tolerate discomfort. Cortisol clearing. Ventral vagal tone increasing. The window within which new experience can be processed widening.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Accurate mirroring.</strong> Being perceived as one actually is — not the performance, not the configuration. This requires another person whose own awareness capacities are sufficiently online. SEA cannot develop without external reflection — because the channel that would provide internal data is the channel that is absent.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Discomfort tolerance.</strong> The capacity to remain present with what arises when capacities begin coming online — grief, confusion, anger, vulnerability. This develops through the process, not before it.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Permission.</strong> Internal and external acceptance that imperfection, not-knowing, and process are legitimate states. The opposite of false coherence's demand for coherence.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Time.</strong> Accumulated experience rather than single insight. The interoceptive substrate rebuilds through sustained different conditions — across weeks and months. Pressure for speed recreates the very conditions that kept capacities offline.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — five conditions for repair */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Porges (2011) — safety as prerequisite for social engagement. Siegel (2012) — window of tolerance. Bowlby (1988) — the secure base: relational conditions for exploration. Winnicott (1965) — the holding environment.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The five conditions traced through the two-system architecture. Each mapped to whether it operates through the ESS (felt safety, discomfort tolerance), the CLS (permission), or the relational environment (accurate mirroring, time). The distinction between cognitive safety and felt safety as the explanation for why understanding the framework does not produce repair. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 4: What Replaces Repair */}
          <section
            id="repair-substitutes"
            aria-labelledby="heading-repair-substitutes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-repair-substitutes" style={sectionHeadingStyle(P.B)}>
              What Replaces Repair in Each Chronic State
            </h2>

            <p style={proseStyle}>
              Repair — holding accountability for one's impact on another person — requires three capacities working together: SEA to feel one's own role, ER to feel the other person's experience, and RE to read the situation accurately. Where SEA is absent, genuine repair is replaced by a substitute that follows the logic of the chronic state. The substitute feels like repair from inside — because SEA is the capacity that would recognize the difference.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Chronic State</th>
                    <th style={thStyle}>What Replaces Repair</th>
                    <th style={thStyle}>What's Missing</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Connection (as survival)", "Self-blame. Accountability is indiscriminate — the person takes responsibility for everything, including what was done to them.", "The discrimination between 'this was mine' and 'this was not mine.' SEA would provide that discrimination."]} />
                  <TableRow cells={["Protection", "Defence. 'You caused harm' registers as 'you are threatening me.' The state filters all incoming signals through threat detection.", "The capacity to process the request as anything other than danger."]} />
                  <TableRow cells={["Strategic Management", "Performance. The right words arrive. The apology sounds correct. Behavior does not change.", "The physiological shift that genuine repair requires: feeling the impact in the body."]} />
                  <TableRow cells={["Domination", "Image management. Remorse is performed for the audience that matters. The nervous system is not processing impact.", "ER is offline, SEA was never built. The image of repair is a regulatory tool."]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Each substitute persists because it is invisible from inside. The capacity that would distinguish the substitute from genuine repair — SEA — is the capacity that is absent. The person inside the substitute believes they are repairing.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — per-state repair substitutes */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Herman (2015) — stages of trauma recovery: safety before processing. Gottman (1999) — repair attempts and conditions for success or failure. Fonagy & Target (2002) — mentalization failure under emotional arousal.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The per-state mapping of repair substitutes — showing that the substitute follows the logic of the chronic state, not random variation. SEA as the discriminating capacity whose absence makes the substitute self-maintaining. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: THE REPAIR PROCESS ─────────────── */}
          <PartDivider label="PART 3" title="The Repair Process" color={P.C} />

          {/* Concept 5: SEA as Entry Point */}
          <section
            id="sea-entry-point"
            aria-labelledby="heading-sea-entry-point"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-sea-entry-point" style={sectionHeadingStyle(P.B)}>
              SEA as the Developmental Entry Point
            </h2>

            <p style={proseStyle}>
              <Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link> established the awareness architecture as a multiplicative system: RE × ER × SEA. The product is zero if any one is absent — no matter how developed the other two are. SEA — Interoceptive Self-Awareness — is the developmental entry point. Building the inward channel activates the substrate for outward use. A person cannot feel others accurately — with boundaries, with differentiation — if they cannot feel themselves.
            </p>
            <p style={proseStyle}>
              What happens as SEA begins to come online:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>RE shifts what it serves.</strong> The reading was always accurate — RE operates through the external observation substrate, unaffected by chronic activation. What changes is what the reading is used for. With SEA absent, RE serves the chronic state: surveillance, management, leverage. With SEA present, the person can observe what the reading is being used for — and the observation itself begins to shift the function.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>ER can function without flooding or absence.</strong> The boundary between self and other, which SEA maintains, starts to hold. The person can feel with another person — resonance — without merging (absorbing the other's state as their own) or shutting down (blocking resonance to prevent overwhelm).
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The nervous system's position on the gradient shifts as a biological consequence.</strong> Not because the person decided to change, but because the capacity configuration changed. When SEA opens, the CLS begins receiving data from the ESS. The data updates the CLS's model. Physiological baseline begins to shift — not through insight, but through the restoration sequence running more frequently because the conditions now support it.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — multiplicative system: SEA returning transforms RE and ER */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Levine (1997) — somatic experiencing: completing interrupted activation through interoceptive awareness. Barrett (2017) — emotional granularity: the more precisely a person can differentiate internal states, the more effective regulatory capacity. Fonagy & Target (2002) — mentalization develops through being mentalized.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The multiplicative architecture applied to repair — showing that the entry point matters because the system is not additive. SEA's return does not just add a third capacity; it transforms what the other two produce. Each capacity shift traced through the interoceptive substrate architecture. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 6: Five Phases */}
          <section
            id="five-phases"
            aria-labelledby="heading-five-phases"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-five-phases" style={sectionHeadingStyle(P.B)}>
              Five Oscillating Phases
            </h2>

            <p style={proseStyle}>
              The repair process does not proceed in a straight line. The nervous system tests new capacity, retreats to the familiar, tests again. The oscillation is the nervous system checking whether the new territory is survivable.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Phase 1: Unawareness.</strong> The configuration is invisible from inside. False coherence is complete — the narrative accounts for everything. The chronic state feels like identity. This is not denial. The channel that would carry the information is absent.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Phase 2: Recognition.</strong> Something shifts — a relationship, a crisis, a repeated failure the narrative can no longer absorb — and the person begins to see the gap between what they narrate and what they feel. This often surfaces as grief. The recognition itself is evidence that the interoceptive channel is beginning to carry signal.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Phase 3: Oscillation.</strong> Movement between new capacity and old configuration. SEA comes online — the person catches the override in progress — and then false coherence activates and the familiar configuration returns. This phase can last months or years. It can feel like failure. But the oscillation itself IS the process. Each oscillation that lands safely extends the range of movement.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Phase 4: Active development.</strong> Experimenting with new capacity in real relationships. Authentic expression where there was performance. Feeling where there was numbness. This phase carries genuine risk: some relationships deepen, and some strain.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Phase 5: Integration.</strong> New capacity becomes available — not permanent, not perfect, but accessible. The old configuration becomes recognizable rather than invisible: "I'm doing the thing again." The return to physiological baseline works. Integration is not a destination. It is the capacity to move — and to recognize when movement has stalled.
            </p>
            <p style={proseStyle}>
              The phases are not linear stages passed through once. The system revisits earlier phases under new stress, new relational configurations, new challenges.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: animated — five phases with oscillation between them */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Prochaska & DiClemente (1983) — stages of change: oscillation between contemplation and action. Bowlby (1980) — attachment system's gradual reorganization through repeated safe experience. Siegel (2012) — neural integration as ongoing process. Levine (1997) — pendulation: the body's natural oscillation between activation and settling.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The five phases mapped through the interoceptive channel architecture — each defined by what the CLS is receiving from the ESS, not by behavioral presentation. The reframing of oscillation from treatment difficulty to biological mechanism: the nervous system's designed process for testing new conditions before committing to reorganization. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 7: Experience vs Insight */}
          <section
            id="experience-not-insight"
            aria-labelledby="heading-experience-not-insight"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-experience-not-insight" style={sectionHeadingStyle(P.B)}>
              Why Experience Changes the System and Insight Does Not
            </h2>

            <p style={proseStyle}>
              A person can read F1 through F7. Can identify their capacity configuration, name their chronic state, trace the regulation thread through their own history. And still do the thing. Still enter the chronic state under pressure. Still run the substitute.
            </p>
            <p style={proseStyle}>
              The explanation is architectural. Insight is a CLS operation. The CLS produces understanding through language and reasoning. The configuration is an ESS condition — maintained by the interoceptive substrate and the physiological state the nervous system has organized around. The system that produces understanding and the system that organizes behavior operate through separate biological substrates. They process at different speeds. They update through different mechanisms. The CLS updates through information. The ESS updates through experience — through physiological conditions sustained long enough for the substrate to change.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Relational conditions, not cognitive conditions.</strong> The restoration sequence runs because the nervous system assesses conditions as safe enough — not because the person understands that it should. The assessment is pre-cognitive: ventral vagal tone, cortisol levels, autonomic settling. Established through sustained relational experience.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Time at physiological scale.</strong> The CLS can update in a conversation. The interoceptive substrate changes over weeks and months of sustained different conditions. This timeline is biological, not motivational.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Experience of completion.</strong> The restoration sequence must actually run. The stress hormones must metabolize. The muscles must release. The experience of completion — not the understanding of completion — is what rebuilds the substrate. Each time the sequence runs to its endpoint, the substrate registers: the return is possible. Each completion makes the next one more likely. The loop runs in the restoration direction.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — CLS updates through information, ESS through experience */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Van der Kolk (2014) — physiological patterns persist until the body has conditions to complete what was interrupted. Porges (2011) — the social engagement system responds to safety cues, not cognitive conclusions. Damasio (1994) — somatic markers: the body's role operates through channels cognitive reasoning cannot access.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The structural explanation for why insight fails at the repair level — not as clinical observation but as consequence of the two-system, two-substrate architecture. The specific mechanism: the CLS and ESS operate through separate substrates, process at different speeds, and update through different mechanisms. What rebuilds the substrate is experiencing restoration, not understanding it. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={P.B}
            items={[
              {
                term: "The regulation thread reversed",
                definition: "The same thread traces escalation and repair. Every substitute was built because the original was missing. Building the original is repair. The direction depends on conditions.",
              },
              {
                term: "Two routes to the same condition",
                definition: "Chronic suppression (pathway exists, blocked — unblocking through sustained safety) and developmental absence (pathway never built — building through co-regulation). Both produce the same operational condition. Different repair requirements.",
              },
              {
                term: "Five mechanisms of repair defense",
                definition: "False coherence as truth, rewarded substitution, pain of SEA online, relational risk, bootstrap problem. Not resistance — the nervous system accurately assessing costs.",
              },
              {
                term: "Safety before capacity",
                definition: "Felt safety (ESS), not understood safety (CLS). Five conditions: felt safety, accurate mirroring, discomfort tolerance, permission, time.",
              },
              {
                term: "Per-state repair substitutes",
                definition: "Self-blame (Connection), defense (Protection), performance (Strategic Management), image management (Domination). SEA's absence makes each invisible from inside.",
              },
              {
                term: "SEA as the developmental entry point",
                definition: "The multiplicative system (RE × ER × SEA). SEA's return transforms what the other capacities produce — RE shifts what it serves, ER gains boundaries, the gradient position shifts as biological consequence.",
              },
              {
                term: "Five oscillating phases",
                definition: "Unawareness → Recognition → Oscillation → Active Development → Integration. The oscillation IS the process. Phases revisited under new conditions.",
              },
              {
                term: "Experience changes, insight does not",
                definition: "Two systems, two substrates, two update mechanisms. The CLS updates through information. The ESS updates through sustained physiological conditions. What rebuilds the substrate is experiencing restoration, not understanding it.",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={P.B}
            established="F8 established how awareness rebuilds through safety — two routes to repair, safety before capacity, SEA as the entry point, and why experience changes the system while insight does not."
            question="Every awareness configuration that does not match what the environment expects gets masked. When environments are designed for one neurological configuration, the mismatch is architectural — and individual repair has limited effect when the structural conditions keep dismantling what the person is trying to build."
            nextFramework="F9"
            nextTitle="Variation Is Configuration, Not Deficit"
            nextHref="/framework/f9-neurodivergence-variation"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={P.D}
            connections={[
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "M3 maps the branching point — Path A (restoration completes) vs Path B (override persists). F8 maps the Path B → Path A transition: how the conditions that enable biological restoration can be established in a system that has been running Path B.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "M4 maps the multiplicative system (RE × ER × SEA) and the bidirectional loop. F8 maps what happens when the loop runs in the restoration direction — how each capacity comes online, in what order, through what conditions.",
              },
              {
                id: "F2: Developmental Calibration",
                href: "/framework/f2-awareness-calibration",
                description: "F2 maps how the substrate gets built — or doesn't — through the relational environment. F8 maps the same mechanism in adulthood: same biology, same requirements, same specificity. F2 is the calibration. F8 is the recalibration.",
              },
              {
                id: "F3: Adult Cognition & False Coherence",
                href: "/framework/f3-false-coherence",
                description: "F3 maps cognitive override as permanent architecture. F8 maps what happens when the override begins to loosen — when the channel opens and the CLS begins receiving data it has never had.",
              },
              {
                id: "F7: Domination Regulates",
                href: "/framework/f7-domination-regulates",
                description: "F7 completed the collective arc at maximum cost. F8 begins the repair arc — the bidirectional loop running in the restoration direction.",
              },
              {
                id: "F9: Variation Is Configuration",
                href: "/framework/f9-neurodivergence-variation",
                description: "F8 establishes that repair requires safety. F9 asks what happens when the environment itself prevents the safety — when structures are designed for one configuration and treat all others as deficient.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={P.D}
            items={[
              { label: "Continue to F9 — when the environment prevents the safety repair requires", href: "/framework/f9-neurodivergence-variation", linkText: "F9: Variation Is Configuration \u2192" },
              { label: "See the awareness architecture and the multiplicative system", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "See the restoration sequence mapped in detail", href: "/model/m3-regulation-capacities", linkText: "M3: Regulation Capacities \u2192" },
              { label: "Return to F2 — how the calibration was set in the first place", href: "/framework/f2-awareness-calibration", linkText: "F2: Developmental Calibration \u2192" },
              { label: "Return to F1 — biological restoration as the designed process", href: "/framework/f1-emotional-gradient", linkText: "F1: The Emotional Gradient \u2192" },
              { label: "Explore all 12 frameworks", href: "/frameworks-map", linkText: "Framework Map \u2192" },
              { label: "Look up key terms", href: "/glossary", linkText: "Glossary \u2192" },
            ]}
          />


          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Healing",
                commonUnderstanding: "A breakthrough moment — the insight that changes everything, the therapy session that unlocks it all.",
                definition: "A biological process with a biological timeline. The interoceptive substrate rebuilds through sustained different conditions — cortisol levels that stay lower for longer, ventral vagal tone sustained across interactions, relational environments that are predictably safe across weeks and months. The nervous system tests new conditions cautiously, retreats to the familiar, tests again.",
              },
              {
                title: "Resistance",
                commonUnderstanding: "Unwillingness to change — being stubborn, in denial, not ready.",
                definition: "The nervous system accurately assessing costs. False coherence treats the current configuration as truth. The cognitive substitute has been rewarded. SEA coming online means feeling what was previously unfelt. Relationships were built around the current configuration. The system is not resisting repair. It is assessing whether repair is safe.",
              },
              {
                title: "Self-awareness",
                commonUnderstanding: "Knowing your patterns — being able to describe what you do and why.",
                definition: "Two different things. The CLS can describe patterns with precision (a cognitive skill). The ESS can perceive its own physiological states while they are happening (a biological capacity requiring the interoceptive substrate). A person can have the first without the second — and believe they have both.",
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
            "@id": "https://teg-blue.org/framework/f8-repairing-awareness#article",
            headline: "Awareness Rebuilds Through Safety: How the Interoceptive Channel Reopens",
            description:
              "How awareness capacities rebuild through safety — two routes to repair, the bootstrap problem, SEA as developmental entry point, five oscillating phases, and why experience changes the system while insight does not. Framework F8 of the TEG-Blue 12-framework system.",
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
            datePublished: "2026-03-07",
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
              "@id": "https://teg-blue.org/framework/f8-repairing-awareness",
            },
            about: [
              { "@type": "Thing", name: "Awareness Repair" },
              { "@type": "Thing", name: "Interoceptive Self-Awareness" },
              { "@type": "Thing", name: "Safety Before Capacity" },
              { "@type": "Thing", name: "Earned Security" },
              { "@type": "Thing", name: "Somatic Experiencing" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "The Developing Mind (Siegel, 2012)" },
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
              { "@type": "ScholarlyArticle", name: "Affect Regulation and the Origin of the Self (Schore, 2003)" },
              { "@type": "ScholarlyArticle", name: "Waking the Tiger (Levine, 1997)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
            ],
            keywords: [
              "awareness repair",
              "interoceptive channel",
              "safety before capacity",
              "co-regulation",
              "earned security",
              "somatic experiencing",
              "repair oscillation",
              "configuration diversity",
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
              { name: "F8: Awareness Rebuilds Through Safety", url: "/framework/f8-repairing-awareness" },
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
                question: "Why doesn't insight produce repair?",
                answer:
                  "Insight is a CLS operation. The configuration is an ESS condition. The two systems operate through separate biological substrates, process at different speeds, and update through different mechanisms. The CLS updates through information. The ESS updates through experience — physiological conditions sustained long enough for the interoceptive substrate to change.",
              },
              {
                question: "What are the two routes to channel absence?",
                answer:
                  "Chronic suppression: the pathway exists but is blocked under sustained activation — repair requires unblocking through sustained safety. Developmental absence: the pathway was never built — repair requires building through co-regulation, the same relational process that builds the substrate in childhood. Both produce the same condition from outside. Different repair requirements.",
              },
              {
                question: "Why does the system defend against repair?",
                answer:
                  "Five structural mechanisms: false coherence treats the configuration as truth, the cognitive substitute has been rewarded, SEA coming online means feeling what was previously unfelt, relationships were built around the current configuration, and the bootstrap problem — the system needs what it doesn't have to develop what it doesn't have. These are not resistance. They are the nervous system accurately assessing costs.",
              },
              {
                question: "What is the oscillation phase in repair?",
                answer:
                  "Phase 3 of five. SEA comes online, the person catches the override — and then false coherence activates and the old configuration returns. This can last months or years and feel like failure. But the oscillation IS the process — the nervous system testing whether new conditions are survivable. Each oscillation that lands safely extends the range of movement.",
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
              name: "Awareness Rebuilds Through Safety (F8) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f8-repairing-awareness",
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
