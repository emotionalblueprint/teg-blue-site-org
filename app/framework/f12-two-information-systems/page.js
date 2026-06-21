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
import EstablishesSection from "@/src/components/EstablishesSection";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F12 makes about why the species stopped listening." },
  { label: "Two Systems, One Sequence", href: "#two-systems", description: "The ESS detects in milliseconds. The CLS narrates a process already underway." },
  { label: "The Capacity Gap", href: "#capacity-gap", description: "Culture scaled faster than biology. The reasoning tools expanded. The emotional hardware stayed." },
  { label: "The Conditions That Rewarded Override", href: "#conditions-rewarded", description: "Agriculture created conditions where acting on the ESS's accurate signals became dangerous." },
  { label: "How the Override Became Invisible", href: "#override-invisible", description: "The signals got reclassified. The vocabulary disappeared. The body became background. The override became identity." },
  { label: "What the Species Forgot", href: "#species-forgot", description: "A species with two information systems — one of which it uses, one of which it has largely forgotten." },
  { label: "Why Insight Cannot Reverse the Override", href: "#insight-cannot-reverse", description: "The cognitive system can understand the override perfectly. The understanding is itself a cognitive operation." },
  { label: "One Mechanism, All Twelve Frameworks", href: "#one-mechanism", description: "Every framework describes the same mechanism from a different angle." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Connections Map", href: "#connections", description: "How F12 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward." },
  { label: "Common Understanding", href: "#common-understanding", description: "What most people think these words mean — and what the nervous system is actually doing." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Two Information Systems (F12) | TEG-Blue Research",
  description:
    "Why the species stopped listening — two information systems, the capacity gap, the conditions that rewarded override, and why the Emotional-Somatic System never stopped working. Framework F12 of the TEG-Blue 12-framework system.",
  keywords: [
    "two information systems",
    "emotional-somatic system",
    "cognitive logical system",
    "cognitive override",
    "species history",
    "agricultural transition",
    "somatic awareness",
    "dual process theory",
    "interoceptive capacity",
    "biological restoration",
    "cultural inheritance",
    "nervous system regulation",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f12-two-information-systems",
  },
  openGraph: {
    title: "Two Information Systems — F12 Framework | TEG-Blue",
    description:
      "The framework that explains why we stopped listening — and what conditions would let us start again. Framework F12 of 12.",
    url: "https://teg-blue.org/framework/f12-two-information-systems",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Two Information Systems — TEG-Blue F12",
    description:
      "The Emotional-Somatic System never stopped working. We stopped listening. The conditions that made us stop are identifiable. The conditions that would let us start again are buildable.",
  },
  other: {
    'citation_title': 'Two Information Systems',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F12TwoInformationSystemsPage() {
  const P = { A: PATTERN.A.primary, B: PATTERN.B.primary, C: PATTERN.C.primary, D: PATTERN.D.primary };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f12-two-information-systems" />

      <PageLayout
        header={
          <FrameworkHero
            badge="FRAMEWORK F12"
            title="Two Information Systems"
            subtitle="The Framework That Explains Why We Stopped Listening"
            description="If the body's emotional signaling system has been running for hundreds of millions of years, producing accurate signals about safety, threat, belonging, and loss — why did an entire species stop listening to it? The answer is not a single event. It is a sequence — biological, then environmental, then cultural — that turned a functioning information system into one that most of the species no longer knows how to use. This framework closes the system."
            group="Repair"
            groupLabel="Repair Arc · F8–F12"
            threadLine="Two information systems reunite — body and mind. Restores: the designed process"
            informsModels={[
              { label: "M1", href: "/model/m1-emotions-as-signals" },
              { label: "M2", href: "/model/m2-nervous-system-states" },
              { label: "M3", href: "/model/m3-regulation-capacities" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
            ]}
            adjacent={{
              prev: { label: "F11 Paradox Holds What Logic Cannot", href: "/framework/f11-emotional-paradoxes" },
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
              description: "The body's designed process for completing the activation sequence — the process the species largely stopped being able to complete.",
              href: "/framework/f1-emotional-gradient#designed-process",
            },
            {
              concept: "The Regulation Thread",
              framework: "F1",
              description: "When biological restoration is unavailable, the nervous system substitutes at escalating scales. F12 explains why it became unavailable for the species.",
              href: "/framework/f1-emotional-gradient#regulation-thread",
            },
          ]} />


          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  Two information systems run in parallel — the ESS (ancient, fast, somatic) detects and responds in milliseconds before the CLS (recent, slower, cognitive) is available
                </li>
                <li style={propositionItemStyle}>
                  A capacity gap developed — biology sped up cognition, culture accelerated it further, and the cognitive tools scaled at a rate the emotional hardware was never designed to match
                </li>
                <li style={propositionItemStyle}>
                  Agriculture created conditions that had never existed before — where acting on the ESS's accurate signals became dangerous, and the ability to suppress those signals became a survival advantage
                </li>
                <li style={propositionItemStyle}>
                  Over generations, cognitive override became invisible — the signals got reclassified as "emotion," the vocabulary disappeared, the body became background, and the override became identity
                </li>
                <li style={propositionItemStyle}>
                  The ESS never stopped working — the signals still fire, the states still shift, the restoration sequence still needs to complete — but the species has largely forgotten how to read them
                </li>
                <li style={propositionItemStyle}>
                  Insight cannot reverse the override — the cognitive system can understand the problem perfectly, and the understanding is itself a cognitive operation that does not reach the ESS
                </li>
                <li style={propositionItemStyle}>
                  Every framework describes the same mechanism from a different angle — behavior organized by nervous system state, in a species that has largely lost access to the system that produces the state
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: HOW THE OVERRIDE BECAME POSSIBLE ── */}
          <PartDivider label="PART 1" title="How the Override Became Possible" color={P.A} />

          {/* Concept 1: Two Systems, One Sequence */}
          <section
            id="two-systems"
            aria-labelledby="heading-two-systems"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-two-systems" style={sectionHeadingStyle(P.B)}>
              Two Systems, One Sequence
            </h2>

            <p style={proseStyle}>
              Two information systems run in parallel. They cannot be separated. They process the same events through different architectures, at different speeds, in different languages.
            </p>
            <p style={proseStyle}>
              The first — the Emotional-Somatic System (ESS) — is ancient. Its core circuitry is conserved across mammals. It detects cues below conscious awareness, matches them against stored patterns, and organizes a physiological response in milliseconds. It speaks in sensation, emotion, impulse, and gut feeling. It learns through experience. It updates slowly and forgets slowly.
            </p>
            <p style={proseStyle}>
              The second — the Cognitive-Logical System (CLS) — is recent. The neocortex and prefrontal cortex expanded dramatically in primates, with marked amplification in humans. It processes through language, abstraction, and deliberate reasoning. It speaks in words, concepts, and narratives. It learns through explanation. It updates quickly and revises quickly.
            </p>
            <p style={proseStyle}>
              These two systems run in a fixed sequence: the ESS detects a cue (10–50ms), matches it against stored patterns (50–200ms), organizes a physiological response (200–500ms), and the nervous system state shifts (within 500ms). Conscious awareness arrives after 500ms. The cognitive system engages — analysis, narrative, planning — in seconds to minutes. By the time cognition is available, the body has already responded. The state has already shifted. The cognitive system does not direct this process. It narrates a process already underway.
            </p>
            <p style={proseStyle}>
              In genuine threat, the body needs to act before the mind deliberates. The speed that prevents cognition from overriding patterns in everyday life is the same speed that saves lives in emergencies. The ESS determines what rational behavior is available. State precedes capacity.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — two systems, fixed sequence, timing */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Kahneman (2011) — System 1/System 2: fast automatic and slow deliberate processing. Damasio (1994) — somatic markers: emotions precede and shape cognition. LeDoux (1996) — the amygdala pathway completing before the cortical pathway. Porges (2011) — neuroception: autonomic state determining social capacity before conscious awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The two systems reframed: not error-prone vs corrective (Kahneman's framing), but sequential partners where the first determines what the second can do. The ESS does not make mistakes the CLS corrects. The ESS sets the state. The CLS operates within whatever state has been set. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 2: The Capacity Gap */}
          <section
            id="capacity-gap"
            aria-labelledby="heading-capacity-gap"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-capacity-gap" style={sectionHeadingStyle(P.B)}>
              The Capacity Gap
            </h2>

            <p style={proseStyle}>
              The ESS is old. Core emotion-related circuits scale consistently across mammalian orders. Comparative studies show conservation, not reinvention. Humans refined this system. They did not replace it.
            </p>
            <p style={proseStyle}>
              The CLS is new — and it grew fast. Association cortex, the part that handles abstraction, planning, and symbolic reasoning, amplified dramatically. The anatomy called "modern human" appears only in the last few hundred thousand years. The cultural acceleration — symbolic art, ritual burials, complex language — concentrates in the last 100,000–50,000 years.
            </p>
            <p style={proseStyle}>
              This created a gap. Not between two systems that evolved at the same pace, but between an ancient system that stayed largely the same and a new system that scaled rapidly — first biologically, then culturally. Agriculture, written language, institutions, technology — each built on the previous acceleration. The cognitive system gained tools, reach, and complexity at a rate the ESS was never designed to match.
            </p>
            <p style={proseStyle}>
              For most of human history, the gap did not matter. Both systems ran. Both were needed. In mobile, small-group life, the ESS was survival infrastructure. Reading signals — from the body, from others, from the environment — was not optional. There was no advantage to overriding it. The gap only became a problem when conditions changed in a way that made overriding the first system advantageous.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — timeline: ESS conservation vs CLS acceleration */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Preuss (2021) — PFC evolution in primates; human expansion of association cortex. Dunbar (1998) — social brain hypothesis: brain size expanding with group size. Panksepp (1998) — primary emotional systems conserved across mammals. McBrearty & Brooks (2000), Henrich (2016) — cultural acceleration outpacing biological change.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The capacity gap framed as the structural precondition for override — not as a failure of the ESS but as the consequence of differential scaling between two systems that had always operated together. The identification that the gap only became consequential when environmental conditions changed to make override advantageous. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 3: Conditions That Rewarded Override */}
          <section
            id="conditions-rewarded"
            aria-labelledby="heading-conditions-rewarded"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-conditions-rewarded" style={sectionHeadingStyle(P.B)}>
              The Conditions That Rewarded Override
            </h2>

            <p style={proseStyle}>
              Roughly 10,000 years ago, human life reorganized around agriculture. The shift was not sudden — it happened at different times in different regions, over centuries. But the structural consequences were consistent.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Dependency on fixed resources.</strong> When survival depends on land and what it produces, leaving is no longer a viable response to unsafe conditions. The nervous system's signal — "this is not safe, move away" — becomes a signal that, if followed, leads to death. The signal is accurate. Acting on it is no longer possible.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Concentration of control.</strong> Fixed resources can be accumulated and defended. In conditions where physical force determines access to resources, control concentrates in fewer hands.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Structural dependence.</strong> Within a few generations of settled agriculture, the knowledge and skills required for mobile life degrade. People born into agricultural communities cannot return to foraging. The dependency is inherited.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Override as survival strategy.</strong> In these conditions, the ability to suppress ESS signals becomes a survival advantage. Suppress the signal that says "this is not safe" — because leaving is not an option. Suppress the signal that says "this person is suffering" — because responding threatens position. Suppress the signal that says "this is wrong" — because acting on it means losing access to resources.
            </p>
            <p style={proseStyle}>
              The ESS keeps generating accurate signals. But the environment has changed so that acting on those signals is dangerous. The CLS — with its capacity for abstraction, planning, and narrative — becomes the tool that manages the gap between what the body knows and what the environment allows.
            </p>
            <p style={proseStyle}>
              Not biologically selected — culturally selected. The communities that developed the strongest cognitive override capacities — rule systems, hierarchies, belief structures, compliance mechanisms — were the ones that accumulated resources, expanded, and absorbed others.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — agricultural transition creating conditions for override */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Karmin et al., Zeng et al. — Y-chromosome bottleneck coinciding with cultural transition: genetic evidence for extreme concentration of power. Boehm (2001) — egalitarian mechanisms in mobile foraging societies. Woodburn (1982) — immediate-return vs delayed-return societies. Diamond (1997) — the structural consequences of the agricultural transition.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The conditions traced through the ESC architecture — the ESS still generating accurate signals while the environment changed to make acting on them dangerous. The identification that cognitive override was not a cognitive achievement but a survival strategy culturally selected under specific conditions. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: HOW THE OVERRIDE BECAME INVISIBLE ── */}
          <PartDivider label="PART 2" title="How the Override Became Invisible" color={P.B} />

          {/* Concept 4: Cultural Inheritance */}
          <section
            id="override-invisible"
            aria-labelledby="heading-override-invisible"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-override-invisible" style={sectionHeadingStyle(P.B)}>
              How Override Became Identity
            </h2>

            <p style={proseStyle}>
              Once cognitive override becomes the dominant survival strategy in a society, it transmits the same way any developmental pattern transmits (<Link href="/framework/f10-generational-bridges" style={linkStyle}>F10</Link>). Not through instruction — through the conditions the next generation is born into. A generation that has learned to suppress ESS signals raises the next generation in an environment where suppression is normal. The override does not need to be taught. It is the water.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The signals get reclassified.</strong> What was biological information becomes "emotion" — something to manage, control, or overcome. The cultural narrative flips: the ancient system becomes the primitive one. The new system becomes the advanced one. Reason over feeling. Logic over instinct. Mind over body.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The vocabulary disappears.</strong> When a society stops treating ESS signals as information, it stops developing language for them. The precision the nervous system produces — distinct signals, each with a specific finding and a specific need — gets collapsed into a handful of words: happy, sad, angry, anxious. The signals still fire. The capacity to read them degrades.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The body becomes background.</strong> In a culture that privileges cognition, the body becomes the thing that carries the brain around. Somatic signals — tension, fatigue, gut responses, activation patterns — become noise rather than data. Interoceptive Self-Awareness (SEA) has no cultural support. It is not developed because the culture does not recognize it as a capacity.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The override becomes identity.</strong> After enough generations, cognitive override does not feel like override. It feels like being a person. "I think, therefore I am" is not a philosophical observation — it is the cultural endpoint of a species that has been running on cognitive override for so long that it has forgotten there is another system.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — generational cascade: override → reclassification → vocabulary loss → identity */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Henrich (2016), Boyd & Richerson — cultural transmission of norms, practices, and cognitive styles. Siegel (2012), Schore (2003) — interpersonal neurobiology: how override transmits developmentally. Barrett (2017) — how emotion concepts are culturally constructed rather than biologically fixed.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The four-stage invisibility process — signals reclassified, vocabulary lost, body backgrounded, override absorbed as identity — traced through the generational transmission mechanism F10 established. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 5: What the Species Forgot */}
          <section
            id="species-forgot"
            aria-labelledby="heading-species-forgot"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-species-forgot" style={sectionHeadingStyle(P.B)}>
              What the Species Forgot
            </h2>

            <p style={proseStyle}>
              The condition is measurable. Most people cannot name what they feel with precision — the signals <Link href="/model/m1-emotions-as-signals" style={linkStyle}>M1</Link> maps, each with a distinct somatic signature, are collapsed into broad categories. Most people do not know what nervous system state they are in — the gradient <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link> maps shifts continuously, invisible without SEA. Most people treat regulation as a cognitive task — "calm down," "think positive" — when the ESS does not take instructions but responds to conditions. Most people have never been taught that they have awareness capacities — RE, ER, and SEA are not personality traits but capacities with developmental conditions (<Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link>).
            </p>
            <p style={proseStyle}>
              Every model in the Emotional-Somatic System describes the cost. <Link href="/model/m1-emotions-as-signals" style={linkStyle}>M1</Link>: signals that are not read do not stop — they accumulate, distort, or redirect. <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link>: without awareness of state shifts, the person experiences the outputs without understanding the input. <Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link>: when override prevents completion, debris accumulates and the baseline rises. <Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link>: the awareness capacities require developmental conditions a cognitive-override culture does not reliably provide. The capacities are not lost. They are undeveloped. The difference matters: what was not built can be built.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — four models, each describing a specific cost of the override */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Barrett (2017) — emotional granularity: most people lack precision in naming internal states. Porges (2011) — most people do not know what autonomic state they are in. Van der Kolk (2014) — the body keeps the score: the consequences of treating regulation as a cognitive task.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The current condition mapped through all four models — showing that each model describes a specific, measurable consequence of the override. The distinction between lost (unrecoverable) and undeveloped (buildable) as the structural basis for the entire repair arc. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 6: Why Insight Cannot Reverse */}
          <section
            id="insight-cannot-reverse"
            aria-labelledby="heading-insight-cannot-reverse"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-insight-cannot-reverse" style={sectionHeadingStyle(P.B)}>
              Why Insight Alone Cannot Reverse the Override
            </h2>

            <p style={proseStyle}>
              A person reads this. Understands the history. Sees how the override developed, why it was rewarded, how it transmitted. They now have a complete cognitive map of why they are disconnected from their ESS. And the insight changes nothing. The mechanism proves itself.
            </p>
            <p style={proseStyle}>
              Three mechanisms explain why. <strong style={{ color: TEXT.primary }}>The timing problem:</strong> by the time insight is available (seconds), the ESS has already detected the cue (milliseconds), matched it, organized a response, and shifted the state. The insight arrives after the state has already shifted. <strong style={{ color: TEXT.primary }}>The domain mismatch:</strong> the CLS can analyse patterns and plan responses. It cannot interrupt a nervous system state in real time or change the underlying somatic response through explanation. Different domains, different mechanisms. <strong style={{ color: TEXT.primary }}>The appropriate limitation:</strong> the ESS needs to respond faster than cognition can process. The speed differential that prevents insight from changing patterns is the same speed differential that keeps the organism alive.
            </p>
            <p style={proseStyle}>
              Since the ESS learns through experience, not explanation, reversing the override requires providing what was missing — not as concept, but as condition: <strong style={{ color: TEXT.primary }}>sustained safety</strong> (the nervous system recalibrating through accumulated safe experience), <strong style={{ color: TEXT.primary }}>somatic awareness</strong> (rebuilding interoceptive capacity — being in the body, not talking about it), <strong style={{ color: TEXT.primary }}>co-regulation</strong> (another regulated nervous system providing the template), <strong style={{ color: TEXT.primary }}>corrective experience</strong> (the old pattern activating but a different outcome occurring), and <strong style={{ color: TEXT.primary }}>time and consistency</strong> (the ESS updates slowly through repeated experience, not single events).
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — three reasons insight fails + five conditions for reversal */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Van der Kolk (2014) — the body keeps the score: physiological patterns persist regardless of cognitive understanding. Porges (2011) — the social engagement system responds to safety cues, not cognitive conclusions. Damasio (1994) — somatic markers operate through channels cognitive reasoning cannot access. Levine (1997) — somatic experiencing: the body requires conditions, not explanation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The three mechanisms (timing, domain mismatch, appropriate limitation) as the structural explanation for why understanding the framework does not produce change — connecting F3's account (insight fails at the individual level) to F12's account (insight fails at the species level) through the same two-system architecture. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: WHAT THIS MEANS ────────────────── */}
          <PartDivider label="PART 3" title="What This Means" color={P.C} />

          {/* Concept 7: One Mechanism, All Twelve */}
          <section
            id="one-mechanism"
            aria-labelledby="heading-one-mechanism"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-one-mechanism" style={sectionHeadingStyle(P.B)}>
              One Mechanism, All Twelve Frameworks
            </h2>

            <p style={proseStyle}>
              Every framework in TEG-Blue describes the same mechanism from a different angle: behavior organized by nervous system state, in a species that has largely lost access to the system that produces the state.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Framework</th>
                    <th style={thStyle}>What It Describes</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["F1", "How the system reads the current state — and what happens when the reading is not received"]} />
                  <TableRow cells={["F2", "How awareness capacities develop through conditions — and what happens when conditions do not support development"]} />
                  <TableRow cells={["F3", "How cognition compensates for what the ESS cannot complete — and why the compensation feels like truth"]} />
                  <TableRow cells={["F4", "How state-dependent regulation becomes shared rules — and why the rules feel necessary"]} />
                  <TableRow cells={["F5", "How rules produce worth hierarchies — and why they feel deserved"]} />
                  <TableRow cells={["F6", "How worth hierarchies become perception — and why bias feels like observation"]} />
                  <TableRow cells={["F7", "How protection escalates to domination — and where accountability lives"]} />
                  <TableRow cells={["F8", "How the interoceptive substrate rebuilds through relational safety — and why different configurations strengthen the collective"]} />
                  <TableRow cells={["F9", "How the same regulatory instrument runs with different inputs — and why the environment is the variable"]} />
                  <TableRow cells={["F10", "How capacity configuration transmits across generations — and how processing changes what transmits"]} />
                  <TableRow cells={["F11", "How contradictions are predictable outcomes of multi-need systems — and why holding is the developmental achievement"]} />
                  <TableRow cells={["F12", "Why all of this works this way — and how the override became invisible"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Every substitution in F3–F7 happens because the CLS cannot reach the ESS. Every repair in F8–F10 works because it addresses the ESS through experience. Every paradox in F11 exists because two systems are producing different outputs simultaneously. F12 is the reason.
            </p>
            <p style={proseStyle}>
              If this framework had to be reduced to one sentence: <strong style={{ color: TEXT.primary }}>The Emotional-Somatic System never stopped working. We stopped listening. The conditions that made us stop are identifiable. The conditions that would let us start again are buildable.</strong>
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — all twelve frameworks as one mechanism at different scales */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Each tradition documented across F1–F11. The convergence — that all twelve frameworks describe one mechanism at different scales — is TEG-Blue's architectural hypothesis.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Connecting the biological timeline (conserved emotional circuitry vs rapidly scaled cognition), the environmental trigger (agricultural transition creating conditions that rewarded override), and the cultural transmission mechanism (override becoming invisible through generational inheritance) into a single framework that explains why a species with a functioning Emotional-Somatic System largely stopped using it — and what conditions would be required to reverse that. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={P.B}
            items={[
              {
                term: "Two systems, one sequence",
                definition: "The ESS detects in milliseconds. The CLS narrates a process already underway. The cognitive system does not direct the process. It operates within whatever state the ESS has set.",
              },
              {
                term: "The capacity gap",
                definition: "Biology sped up cognition. Culture accelerated it further. The cognitive tools scaled at a rate the emotional hardware was never designed to match. The gap only became consequential when conditions changed.",
              },
              {
                term: "Conditions that rewarded override",
                definition: "Agriculture created dependency on fixed resources, concentration of control, structural dependence, and override as survival strategy. The ESS's signals were still accurate. Acting on them became dangerous.",
              },
              {
                term: "The override became invisible",
                definition: "Signals reclassified as 'emotion.' Vocabulary lost. Body backgrounded. Override absorbed as identity. 'I think, therefore I am' is the cultural endpoint.",
              },
              {
                term: "What the species forgot",
                definition: "The ESS never stopped working. Signals still fire. States still shift. Restoration still needs to complete. The awareness capacities are not lost — they are undeveloped. What was not built can be built.",
              },
              {
                term: "Insight cannot reverse",
                definition: "Three mechanisms: timing (insight arrives after the state shifted), domain mismatch (the CLS cannot interrupt a nervous system state), appropriate limitation (the speed differential keeps the organism alive).",
              },
              {
                term: "What actually changes the override",
                definition: "Sustained safety, somatic awareness, co-regulation, corrective experience, time and consistency. The ESS updates through experience, not explanation.",
              },
              {
                term: "One mechanism, twelve frameworks",
                definition: "Every framework describes behavior organized by nervous system state, in a species that has largely lost access to the system that produces the state. The scale changes. The mechanism does not.",
              },
            ]}
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={P.D}
            connections={[
              {
                id: "F1: The Emotional Gradient",
                href: "/framework/f1-emotional-gradient",
                description: "F1 describes the biology — why the ESC exists and how the ESS and CLS co-evolved. F12 describes the history — why the species stopped listening to the ESS and how the override became invisible.",
              },
              {
                id: "F3: Adult Cognition & False Coherence",
                href: "/framework/f3-false-coherence",
                description: "F3 maps cognitive override at the individual level. F12 maps it at the species level — the same mechanism, the same two-system architecture, operating across a different timescale.",
              },
              {
                id: "F8: Awareness Rebuilds Through Safety",
                href: "/framework/f8-repairing-awareness",
                description: "F8 maps how what was lost can rebuild — through the same conditions the ESS has always required: safety, co-regulation, experience, time. F12 explains why those conditions were removed.",
              },
              {
                id: "F10: What the Adult Processes",
                href: "/framework/f10-generational-bridges",
                description: "F10 maps the transmission mechanism. F12 shows the same mechanism operating across thousands of years — cognitive override transmitting as invisible normal through the same pathways F10 identifies.",
              },
              {
                id: "M1–M4: The Four Models",
                href: "/emotional-somatic-cycle",
                description: "Each model describes a different dimension of the system that F12 explains is largely unused: signals not read (M1), states not perceived (M2), restoration not completed (M3), awareness capacities not developed (M4).",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={P.D}
            items={[
              { label: "Return to the beginning — biological restoration as the designed process", href: "/framework/f1-emotional-gradient", linkText: "F1: The Emotional Gradient \u2192" },
              { label: "See where the repair arc begins", href: "/framework/f8-repairing-awareness", linkText: "F8: Awareness Rebuilds Through Safety \u2192" },
              { label: "See the signal architecture the species stopped reading", href: "/model/m1-emotions-as-signals", linkText: "M1: Emotions as Signals \u2192" },
              { label: "See the awareness capacities that can be rebuilt", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "Explore all 12 frameworks", href: "/frameworks-map", linkText: "Framework Map \u2192" },
              { label: "Look up key terms", href: "/glossary", linkText: "Glossary \u2192" },
              { label: "Experience the tools", href: "https://teg-blue.com/emotional-tools", linkText: "Emotional Tools (teg-blue.com) \u2192", external: true },
            ]}
          />


          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Reason vs emotion",
                commonUnderstanding: "Two opposing forces — reason is reliable, emotion is irrational, and maturity means choosing the first over the second.",
                definition: "Two information systems running in sequence. The ESS detects and responds in milliseconds — before cognition is available. The CLS narrates a process already underway. The cognitive system does not direct this process. It operates within whatever state the ESS has already set.",
              },
              {
                title: "Getting in touch with feelings",
                commonUnderstanding: "A soft skill — something nice to do for wellbeing, but not essential for functioning in the real world.",
                definition: "Rebuilding access to a biological information system that the nervous system never stopped producing signals through. The interoceptive capacity the culture did not develop. The designed process the species forgot it had.",
              },
              {
                title: "Human progress",
                commonUnderstanding: "The triumph of reason — civilization as the achievement of overcoming our animal nature.",
                definition: "A species that built its systems around one information system and forgot the other one. The cognitive tools scaled. The conditions that rewarded treating cognition as the only legitimate system are still operating. The cost is measurable in every model.",
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
            "@id": "https://teg-blue.org/framework/f12-two-information-systems#article",
            headline: "Two Information Systems: Why We Stopped Listening",
            description:
              "Why the species stopped listening to the Emotional-Somatic System — two information systems, the capacity gap, the agricultural transition, and what conditions would let us start again. Framework F12 of the TEG-Blue 12-framework system.",
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
            datePublished: "2026-03-09",
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
              "@id": "https://teg-blue.org/framework/f12-two-information-systems",
            },
            about: [
              { "@type": "Thing", name: "Two Information Systems" },
              { "@type": "Thing", name: "Emotional-Somatic System" },
              { "@type": "Thing", name: "Cognitive Override" },
              { "@type": "Thing", name: "Agricultural Transition" },
              { "@type": "Thing", name: "Species History" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Thinking, Fast and Slow (Kahneman, 2011)" },
              { "@type": "ScholarlyArticle", name: "Descartes' Error (Damasio, 1994)" },
              { "@type": "ScholarlyArticle", name: "The Emotional Brain (LeDoux, 1996)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Affective Neuroscience (Panksepp, 1998)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
            ],
            keywords: [
              "two information systems",
              "emotional-somatic system",
              "cognitive override",
              "agricultural transition",
              "dual process theory",
              "interoceptive capacity",
              "somatic awareness",
              "species history",
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
              { name: "F12: Two Information Systems", url: "/framework/f12-two-information-systems" },
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
                question: "Why did the species stop listening to the Emotional-Somatic System?",
                answer:
                  "Agriculture created conditions where acting on the ESS's accurate signals became dangerous. Suppress the signal that says 'this is not safe' — because leaving is not an option. Over generations, cognitive override became the dominant survival strategy and transmitted as invisible normal. The signals got reclassified as 'emotion,' the vocabulary disappeared, the body became background, and the override became identity.",
              },
              {
                question: "What is the capacity gap?",
                answer:
                  "The gap between an ancient emotional system that stayed largely the same and a cognitive system that scaled rapidly — first biologically, then culturally. The cognitive tools gained complexity at a rate the ESS was never designed to match. For most of human history this did not matter. It only became consequential when conditions changed to make overriding the ESS advantageous.",
              },
              {
                question: "Why can't insight reverse the override?",
                answer:
                  "Three mechanisms: timing (insight arrives after the state has shifted), domain mismatch (the CLS cannot interrupt a nervous system state through explanation), and appropriate limitation (the speed differential that prevents insight from changing patterns is the same speed that saves lives). The ESS updates through experience — sustained safety, somatic awareness, co-regulation, corrective experience, time.",
              },
              {
                question: "What connects all twelve frameworks?",
                answer:
                  "Every framework describes behavior organized by nervous system state, in a species that has largely lost access to the system that produces the state. Every substitution in F3-F7 happens because the CLS cannot reach the ESS. Every repair in F8-F10 works because it addresses the ESS through experience. Every paradox in F11 exists because two systems produce different outputs simultaneously. F12 is the reason.",
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
              name: "Two Information Systems (F12) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f12-two-information-systems",
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
