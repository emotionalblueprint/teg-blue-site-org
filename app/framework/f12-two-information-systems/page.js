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
import EstablishesSection from "@/src/components/EstablishesSection";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F12 makes about the two information systems and why the species stopped listening." },
  { label: "Two Systems, One Sequence", href: "#two-systems", description: "The Emotional Somatic System and the Cognitive-Logical System — running in parallel, at different speeds, in a fixed order." },
  { label: "The Capacity Gap", href: "#capacity-gap", description: "What grew faster than what — and why the gap only became a problem when conditions changed." },
  { label: "The Conditions That Rewarded Override", href: "#conditions-rewarded-override", description: "How agriculture created conditions where suppressing the ESS became a survival advantage." },
  { label: "Cultural Inheritance of Override", href: "#cultural-inheritance", description: "How override transmits across generations until it becomes invisible — and identity." },
  { label: "What the Species Forgot", href: "#what-species-forgot", description: "The current measurable condition: a species with two information systems, one of which it has largely forgotten how to read." },
  { label: "Why Insight Alone Cannot Reverse the Override", href: "#why-insight-fails", description: "The timing problem, the domain mismatch, and what actually changes patterns." },
  { label: "One Mechanism, All Twelve Frameworks", href: "#one-mechanism", description: "Every framework describes the same mechanism from a different angle." },
  { label: "The Design Principle", href: "#design-principle", description: "What this framework prescribes at every scale." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Connections Map", href: "#connections", description: "How F12 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "The Two Information Systems — The Framework That Explains Why We Stopped Listening (F12) | TEG-Blue Research",
  description:
    "Why did a species with a functioning Emotional Somatic System stop listening to it? F12 traces the sequence — biological, then environmental, then cultural — that turned a functioning information system into one most of the species no longer knows how to read. The final framework in the TEG-Blue 12-framework system.",
  keywords: [
    "two information systems",
    "cognitive override",
    "emotional somatic system",
    "cognitive logical system",
    "agricultural transition",
    "cultural inheritance",
    "insight doesn't change behavior",
    "dual-process theory",
    "state precedes capacity",
    "nervous system organization",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f12-two-information-systems",
  },
  openGraph: {
    title: "The Two Information Systems — F12 Framework | TEG-Blue",
    description:
      "Why did a species with a functioning Emotional Somatic System stop listening to it? The biological, environmental, and cultural sequence that made override invisible.",
    url: "https://teg-blue.org/framework/f12-two-information-systems",
    siteName: "TEG-Blue Research",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Two Information Systems — TEG-Blue F12",
    description:
      "Why did a species with a functioning Emotional Somatic System stop listening to it? The origin story underneath all twelve frameworks.",
  },
  other: {
    'citation_title': 'The Two Information Systems: The Framework That Explains Why We Stopped Listening',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/03',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── FAQ ──────────────────────────────────────────────────

const faqItems = [
  {
    q: "Why did humans stop listening to the Emotional Somatic System?",
    a: "Not through a single event but through a sequence. The cognitive system scaled faster than the emotional system (the capacity gap). Agriculture created conditions where suppressing emotional-somatic signals became a survival advantage (the override). Over generations, the override transmitted culturally until it became invisible — it stopped feeling like override and started feeling like being a person.",
  },
  {
    q: "Why doesn't understanding your patterns automatically change them?",
    a: "Because the Emotional Somatic System and the Cognitive-Logical System operate at different speeds. The ESS detects cues in 10\u201350 milliseconds and organises a physiological response within 500ms. Conscious awareness arrives after 500ms. By the time insight is available, the body has already responded. The cognitive system narrates a process already underway \u2014 it does not direct it. The ESS updates through experience, not explanation.",
  },
  {
    q: "What actually changes emotional patterns?",
    a: "Since the Emotional Somatic System learns through experience, not explanation, pattern change requires: sustained safety (the nervous system recalibrates through accumulated safe experience), somatic awareness (reconnecting to the body\u2019s actual signals), co-regulation (another regulated nervous system provides a template), corrective experience (old patterns activated but different outcomes occur), and time and consistency (the ESS updates slowly through repeated experience).",
  },
  {
    q: "How does F12 relate to the other eleven frameworks?",
    a: "F12 reveals that TEG-Blue is not twelve separate frameworks \u2014 it is one mechanism (state-dependent nervous system organisation) described from twelve angles. Every substitution in F3\u2013F7 happens because the CLS cannot reach the ESS. Every repair in F8\u2013F10 works because it addresses the ESS through experience. Every paradox in F11 exists because two systems are producing different outputs simultaneously. F12 explains why the thread works the way it does.",
  },
];

// ─── PAGE ──────────────────────────────────────────────────

export default function F12TwoInformationSystemsPage() {

  function KeyStatement({ children }) {
    return (
      <blockquote style={{
        borderLeft: `3px solid ${SPECTRUM.blue}`,
        paddingLeft: 16, margin: "20px 0", fontStyle: "italic",
        fontSize: 14, lineHeight: 1.7, color: TEXT.primary,
      }}>
        {children}
      </blockquote>
    );
  }

  return (
    <>
      <SiteHeader />

      <PageLayout
        header={
          <FrameworkHero
              badge="FRAMEWORK F12"
              title="The Two Information Systems"
              subtitle="The Framework That Explains Why We Stopped Listening"
              description="If the Emotional Somatic System has been running for hundreds of millions of years, producing accurate signals about safety, threat, belonging, and loss — why did an entire species stop listening to it? F12 traces the sequence: biological, then environmental, then cultural. The answer is not a single event. It is a pathway that turned a functioning information system into one that most of the species no longer knows how to use."
              group="Repair"
              groupLabel="Repair Arc · F8–F12"
              threadLabel="The Architecture Underneath"
              threadLine="The architecture that explains why the thread works the way it does"
              informsModels={[
                { label: "M2", href: "/model/m2-nervous-system-states" },
                { label: "M3", href: "/model/m3-regulation-capacities" },
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
              concept: "The Regulation Thread",
              framework: "F1",
              description: "The governing architecture connecting all twelve frameworks — substitution at escalating scales when biological restoration is unavailable.",
              href: "/framework/f1-emotional-gradient#regulation-thread",
            },
            {
              concept: "Biological Restoration",
              framework: "F1",
              description: "The designed process of the entire system — what the two information systems must reunite to complete.",
              href: "/framework/f1-emotional-gradient#designed-process",
            },
            {
              concept: "Why experience changes the system and insight does not",
              framework: "F8",
              description: "Two systems, two substrates, different speeds. The CLS updates through information. The ESS updates through experience.",
              href: "/framework/f8-repairing-awareness",
            },
          ]} />

          {/* ── Core Claims ── */}
          <PropositionBox
            title="Core Propositions — F12"
            items={[
              "Two parallel information systems — the Emotional Somatic System (ESS) and the Cognitive-Logical System (CLS) — run simultaneously at different speeds, with the ESS arriving first and the CLS narrating a process already underway",
              "The cognitive system scaled faster than the emotional system — biologically first, then culturally. Agriculture created conditions where overriding the ESS became a survival advantage",
              "After enough generations, cognitive override does not feel like override. It feels like being a person. The override became invisible through cultural transmission",
              "Insight alone cannot reverse the override because insight is a cognitive operation — and cognition is the system running the replacement. Patterns change through experience, not explanation",
              "Every framework describes the same mechanism — state-dependent nervous system organisation — from a different angle. The scale changes. The mechanism does not",
            ]}
          />

          {/* ════════════════════════════════════════════════
              PART 1: HOW THE OVERRIDE BECAME POSSIBLE
             ════════════════════════════════════════════════ */}

          <PartDivider
            color={SPECTRUM.blue}
            label="Part 1"
            title="How the Override Became Possible"
          />

          {/* ── C1: Two Systems, One Sequence ── */}

          <section id="two-systems">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>Two Systems, One Sequence</h2>

            <p style={proseStyle}>
              Two information systems run in parallel. They cannot be separated. They process the same events through different architectures, at different speeds, in different languages.
            </p>

            <p style={proseStyle}>
              The first system — the <strong style={{ color: TEXT.primary }}>Emotional Somatic System (ESS)</strong> — is ancient. Its core circuitry is conserved across mammals. It detects cues below conscious awareness, matches them against stored patterns, and organises a physiological response in milliseconds. It speaks in sensation, emotion, impulse, and gut feeling. It learns through experience. It updates slowly and forgets slowly.
            </p>

            <p style={proseStyle}>
              The second system — the <strong style={{ color: TEXT.primary }}>Cognitive-Logical System (CLS)</strong> — is recent. The neocortex and prefrontal cortex expanded dramatically in primates, with marked amplification in humans. It processes through language, abstraction, and deliberate reasoning. It speaks in words, concepts, and narratives. It learns through explanation. It updates quickly and revises quickly.
            </p>

            <h3 style={conceptHeadingStyle}>The Fixed Sequence</h3>

            <p style={proseStyle}>
              These systems are not competitors. They run in a fixed sequence: the ESS detects a cue (10–50ms), matches it to stored patterns (50–200ms), organises a physiological response — heart rate, muscle tension, hormonal shift (200–500ms), the nervous system state shifts (within 500ms), conscious awareness arrives (500ms+), and the cognitive system engages — analysis, narrative, planning (seconds to minutes).
            </p>

            <p style={proseStyle}>
              By the time cognition is available, the body has already responded. The state has already shifted. The cognitive system does not direct this process. It narrates a process already underway.
            </p>

            <KeyStatement>
              The Emotional Somatic System determines what rational behaviour is available. State precedes capacity. The ESS sets the state. The cognitive system operates within whatever state has been set.
            </KeyStatement>

            <p style={proseStyle}>
              In genuine threat, the body needs to act before the mind deliberates. The speed that prevents cognition from overriding patterns in everyday life is the same speed that saves lives in emergencies.
            </p>

            {/* Section diagram: Two systems timeline — ESS processing in milliseconds, CLS arriving after */}
            {/* Diagram type: static */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Dual-process theory (Kahneman, Stanovich, Evans) describes two processing systems — fast/automatic and slow/deliberate. Affective neuroscience (Damasio, LeDoux) demonstrates that emotions precede and shape cognition through somatic markers. Polyvagal theory (Porges) maps how neuroception determines social capacity before conscious awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  F12 reframes dual-process theory: the two systems are not error-prone versus corrective, but sequential partners where the first determines what the second can do. This adds the regulatory state dimension — what determines which thinking is available — and integrates the temporal sequence with F1&#39;s principle that state precedes capacity.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ── C2: The Capacity Gap ── */}

          <section id="capacity-gap">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>The Capacity Gap</h2>

            <p style={proseStyle}>
              The Emotional Somatic System is old. Core emotion-related circuits — amygdala, hippocampus, hypothalamus, insula, cingulate — scale consistently across mammalian orders. Comparative studies show conservation, not reinvention. Humans refined this system. They did not replace it.
            </p>

            <p style={proseStyle}>
              The cognitive system is new — and it grew fast. The neocortex and prefrontal cortex show human-biased expansion compared to other primates. Association cortex, the part that handles abstraction, planning, and symbolic reasoning, amplified dramatically. The anatomy we call &#34;modern human&#34; appears only in the last few hundred thousand years. The cultural acceleration — symbolic art, ritual burials, complex language — concentrates in the last 100,000–50,000 years.
            </p>

            <KeyStatement>
              Culture sped up faster than biology. The reasoning tools scaled. The emotional hardware stayed largely the same.
            </KeyStatement>

            <p style={proseStyle}>
              This created a gap. Not between two systems that evolved together at the same pace, but between an ancient system that stayed largely the same and a new system that scaled rapidly — first biologically, then culturally. Agriculture, written language, institutions, technology — each built on the previous acceleration. The cognitive system gained tools, reach, and complexity at a rate the Emotional Somatic System was never designed to match.
            </p>

            <p style={proseStyle}>
              For most of human history, the gap did not matter. Both systems ran. Both were needed. In mobile, small-group life, the Emotional Somatic System was survival infrastructure. Reading signals — from the body, from others, from the environment — was not optional. There was no advantage to overriding it. The gap only became a problem when conditions changed in a way that made overriding the first system advantageous.
            </p>

            {/* Section diagram: Timeline — ESS conserved, CLS scaling, cultural acceleration */}
            {/* Diagram type: static */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Evolutionary psychology (Cosmides, Tooby, Dunbar) maps cognitive adaptations and the social brain hypothesis. Comparative neuroanatomy demonstrates human-biased expansion in association cortex. Cultural evolution research (Henrich, Boyd, Richerson) traces the acceleration of cultural transmission beyond biological rates.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The capacity gap as the structural precondition for override — not a flaw but a timing mismatch between how fast cultural complexity scaled and how slowly biological hardware changes. The gap only matters when conditions reward treating cognition as the primary system and the ESS as noise.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ── C3: The Conditions That Rewarded Override ── */}

          <section id="conditions-rewarded-override">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>The Conditions That Rewarded Override</h2>

            <p style={proseStyle}>
              Roughly 10,000 years ago, human life reorganised around agriculture. The shift was not sudden — it happened at different times in different regions, over centuries. But the structural consequences were consistent.
            </p>

            <p style={proseStyle}>
              Mobile, small-group life became settled, land-dependent life. Resources that had been dispersed became concentrated. Survival that had depended on movement and cooperation now depended on staying, accumulating, and defending. This created conditions that had never existed before:
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Dependency on fixed resources.</strong> When survival depends on land and what it produces, leaving is no longer a viable response to unsafe conditions. The nervous system&#39;s signal — &#34;this is not safe, move away&#34; — becomes a signal that, if followed, leads to death. The signal is accurate. Acting on it is no longer possible.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Concentration of control.</strong> Fixed resources can be accumulated and defended. In conditions where physical force determines access to resources, control concentrates in fewer hands.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Structural dependence.</strong> Within a few generations of settled agriculture, the knowledge and skills required for mobile life degrade. The dependency is not chosen — it is inherited.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Override as survival strategy.</strong> In these conditions, the ability to suppress Emotional Somatic signals becomes a survival advantage. Suppress the signal that says &#34;this is not safe&#34; — because leaving is not an option. Suppress the signal that says &#34;this person is suffering&#34; — because responding to it threatens position. Suppress the signal that says &#34;this is wrong&#34; — because acting on it means losing access to resources.
            </p>

            <KeyStatement>
              The signal is accurate. Acting on it is no longer possible. That is the condition agriculture created.
            </KeyStatement>

            <p style={proseStyle}>
              Not biologically selected — culturally. The communities that developed the strongest cognitive override capacities — rule systems, hierarchies, belief structures, compliance mechanisms — were the ones that accumulated resources, expanded, and absorbed others. The Y-chromosome evidence shows that during this period, male genetic diversity crashed while female genetic diversity continued increasing — consistent with extreme concentration of reproductive access in settled agricultural societies.
            </p>

            {/* Section diagram: The shift — mobile/dispersed to settled/concentrated, and what it did to ESS signals */}
            {/* Diagram type: static */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Archaeological genetics (Karmin et al., Zeng et al.) documents the Y-chromosome bottleneck coinciding with the agricultural transition. Comparative anthropology (Boehm, Woodburn, Kelly) describes egalitarian mechanisms in mobile foraging societies — the conditions that prevented override before agriculture. Polyvagal theory (Porges) maps state-dependent behaviour in conditions that prevent safe responses.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The environmental trigger connecting the capacity gap to the override: agriculture created conditions where the ESS&#39;s signals, while still accurate, could no longer be acted on — making the CLS&#39;s capacity for abstraction, narrative, and compliance the survival-critical system. The conditions did not just enable cognitive override. They rewarded it, transmitted it, and scaled it.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              PART 2: HOW THE OVERRIDE BECAME INVISIBLE
             ════════════════════════════════════════════════ */}

          <PartDivider
            color={SPECTRUM.blue}
            label="Part 2"
            title="How the Override Became Invisible"
          />

          {/* ── C4: Cultural Inheritance of Override ── */}

          <section id="cultural-inheritance">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>Cultural Inheritance of Override</h2>

            <p style={proseStyle}>
              Once cognitive override becomes the dominant survival strategy in a society, it transmits the same way any developmental pattern transmits (<Link href="/framework/f10-generational-bridges" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>F10</Link>). Not through instruction — through the conditions the next generation is born into.
            </p>

            <p style={proseStyle}>
              A generation that has learned to suppress Emotional Somatic signals raises the next generation in an environment where suppression is normal. The children do not learn to override their signals — they grow up in conditions where the signals are never validated, never named, never responded to as information. The override does not need to be taught. It is the water.
            </p>

            <p style={proseStyle}>
              Over centuries, this produces a cumulative effect:
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The signals get reclassified.</strong> What was biological information becomes &#34;emotion&#34; — something to manage, control, or overcome. The cultural narrative flips: the ancient system becomes the primitive one. The new system becomes the advanced one. Reason over feeling. Logic over instinct. Mind over body.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The vocabulary disappears.</strong> When a society stops treating Emotional Somatic signals as information, it stops developing language for them. The precision that the nervous system produces — distinct signals, each with a specific finding and a specific need (<Link href="/model/m1-emotions-as-signals" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>M1</Link>) — gets collapsed into a handful of words: happy, sad, angry, anxious. The resolution drops. The signals still fire. The capacity to read them degrades.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The body becomes background.</strong> In a culture that privileges cognition, the body becomes the thing that carries the brain around. Somatic signals — tension, fatigue, gut responses, activation patterns — become noise rather than data. The interoceptive capacity that <Link href="/model/m4-awareness-capacities" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>M4</Link> maps as Interoceptive Self-Awareness (SEA) has no cultural support. It is not developed because the culture does not recognise it as a capacity.
            </p>

            <KeyStatement>
              After enough generations, cognitive override does not feel like override. It feels like being a person.
            </KeyStatement>

            {/* Section diagram: The cumulative effect — signals reclassified, vocabulary lost, body backgrounded, override becomes identity */}
            {/* Diagram type: static */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Interpersonal neurobiology (Siegel, Schore) maps how co-regulation and relational regulation shape development — the mechanism through which override transmits. Cultural evolution research (Henrich, Boyd, Richerson) traces how norms, practices, and cognitive styles transmit across generations through cultural learning, not genetic inheritance.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The cultural transmission mechanism connecting the environmental trigger (C3) to the current condition (C5): override becoming invisible through generational inheritance, using the same developmental transmission pathways F10 describes — not through instruction but through the conditions the next generation is born into.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ── C5: What the Species Forgot ── */}

          <section id="what-species-forgot">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>What the Species Forgot</h2>

            <p style={proseStyle}>
              The condition is measurable:
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Most people cannot name what they feel with precision.</strong> The signals <Link href="/model/m1-emotions-as-signals" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>M1</Link> maps — each with a distinct somatic signature, a distinct finding, and a distinct need — are collapsed into broad categories. &#34;I feel bad&#34; covers everything from grief to shame to disgust to fear. The signal is still specific. The person receiving it has lost the resolution to read it.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Most people do not know what nervous system state they are in.</strong> The gradient <Link href="/model/m2-nervous-system-states" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>M2</Link> maps — from Safety &amp; Openness through Threat &amp; Defence and Strategy &amp; Management to Power &amp; Dominance — shifts continuously. Without Interoceptive Self-Awareness (SEA), the person does not perceive the shift. They experience the consequences — perception narrows, empathy collapses, thinking rigidifies — without understanding the cause.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Most people treat regulation as a cognitive task.</strong> &#34;Calm down.&#34; &#34;Think positive.&#34; &#34;Just breathe.&#34; These instructions address the cognitive system. The Emotional Somatic System does not take instructions. It responds to conditions — safety, co-regulation, somatic discharge, time. The mismatch between how the culture tells people to regulate and how regulation actually works (<Link href="/model/m3-regulation-capacities" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>M3</Link>) is itself a product of cognitive override.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Most people have never been taught that they have awareness capacities.</strong> Interpersonal Affect Perception (RE), Affective Resonance (ER), and Interoceptive Self-Awareness (SEA) are not personality traits. They are capacities with developmental conditions (<Link href="/model/m4-awareness-capacities" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>M4</Link>). A culture that does not recognise the Emotional Somatic System as a legitimate information source does not develop the capacities required to use it.
            </p>

            <KeyStatement>
              A species with two information systems — one of which it uses, one of which it has largely forgotten how to read.
            </KeyStatement>

            <p style={proseStyle}>
              Hunter-gatherer life had violence, hierarchy, and suffering. The ESS generates accurate signals about what the nervous system detects, which can include inaccurate neuroception. And the CLS gave the species language, cooperation, art, science, medicine, and the capacity to understand itself. The conditions of the last several thousand years rewarded treating cognition as the only legitimate information system and the ESS as noise to be managed.
            </p>

            {/* Section diagram: The current condition — what each model maps and what is not being read */}
            {/* Diagram type: static */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Emotion differentiation research (Barrett, 2017) documents that most people use broad categories rather than precise emotional labels. Interoception research documents wide individual variation in the capacity to perceive internal signals. Alexithymia research maps the clinical consequences of absent emotional vocabulary.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Connecting the measurable present-day condition — low emotional granularity, absent interoceptive awareness, regulation treated as cognitive task — to the historical sequence that produced it. The condition is not a deficiency in the individual. It is the predictable outcome of a species that built its cultural systems around one information system and forgot the other one.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ── C6: Why Insight Alone Cannot Reverse the Override ── */}

          <section id="why-insight-fails">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>Why Insight Alone Cannot Reverse the Override</h2>

            <p style={proseStyle}>
              A person reads this. Understands the history. Sees how the override developed, why it was rewarded, how it transmitted. They now have a complete cognitive map of why they are disconnected from their Emotional Somatic System.
            </p>

            <p style={proseStyle}>
              And the insight changes nothing. The mechanism proves itself. The cognitive system can understand the override perfectly — and the understanding itself is a cognitive operation. The Emotional Somatic System does not update through understanding. It updates through experience.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The timing problem.</strong> By the time insight is available (seconds), the ESS has already detected the cue (milliseconds), matched it to past patterns, organised a physiological response, and shifted the nervous system state. The insight arrives after the state has already shifted. Understanding happens after the fact, not before it.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The domain mismatch.</strong> The cognitive system can analyse patterns, construct narratives, and plan future responses. It cannot interrupt a nervous system state in real time, override an activation pattern, or change the underlying somatic response through explanation. These are different domains operating through different mechanisms.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The appropriate limitation.</strong> The ESS needs to respond faster than cognition can process. Genuine threat requires the body to act before the mind deliberates. The speed differential that prevents insight from changing patterns is the same speed differential that keeps the organism alive.
            </p>

            <h3 style={conceptHeadingStyle}>What Actually Changes the Override</h3>

            <p style={proseStyle}>
              Since the Emotional Somatic System learns through experience, not explanation, reversing the override requires providing what was missing — not as concept, but as condition:
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Sustained safety.</strong> The nervous system recalibrates through accumulated safe experience. Not through being told &#34;this is safe&#34; — through being in conditions where safety is the sustained reality.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Somatic awareness.</strong> Reconnecting to the body&#39;s signals. Not talking about the body — being in the body. Noticing sensation, activation, discharge, state shifts. Rebuilding the interoceptive capacity that the culture did not develop.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Co-regulation.</strong> Another regulated nervous system providing the template the person&#39;s system can borrow. Regulation learned through being regulated with, not through instruction in regulation techniques.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Corrective experience.</strong> Experiences where the old pattern activates but a different outcome occurs. The ESS updates through new data, not through new narratives.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Time and consistency.</strong> The ESS updates slowly. It needs repeated experience, not single events. The override took thousands of years to become cultural inheritance. Reversing it in an individual takes sustained, consistent conditions — not a breakthrough.
            </p>

            {/* Section diagram: The paradox — cognitive understanding of the override cannot reverse a somatic pattern */}
            {/* Diagram type: static */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Trauma research (van der Kolk, Levine, Ogden) demonstrates that the body keeps the score — somatic processing is required for change. Interpersonal neurobiology (Siegel, Schore) maps how integration, co-regulation, and relational regulation shape development and produce change through experience.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Three mechanisms explaining why insight-based approaches alone consistently underperform experience-based approaches: the timing problem (the ESS has already responded before insight arrives), the domain mismatch (cognition cannot reach the somatic substrate), and the appropriate limitation (the speed differential is a feature, not a flaw). This is not an argument against insight — it is an argument that insight addresses the CLS while the pattern lives in the ESS.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              PART 3: WHAT THIS MEANS
             ════════════════════════════════════════════════ */}

          <PartDivider
            color={SPECTRUM.blue}
            label="Part 3"
            title="What This Means"
          />

          {/* ── C7: One Mechanism, All Twelve Frameworks ── */}

          <section id="one-mechanism">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>One Mechanism, All Twelve Frameworks</h2>

            <p style={proseStyle}>
              Every framework in TEG-Blue describes the same mechanism from a different angle: behaviour organised by nervous system state, in a species that has largely lost access to the system that produces the state.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>F1</strong> — how the compass reads the current state, and what happens when the reading is not received. <strong style={{ color: TEXT.primary }}>F2</strong> — how awareness capacities develop through conditions, and what happens when conditions do not support development. <strong style={{ color: TEXT.primary }}>F3</strong> — how cognition compensates for what the ESS cannot complete, and why the compensation feels like truth. <strong style={{ color: TEXT.primary }}>F4</strong> — how state-dependent regulation becomes shared rules, and why the rules feel necessary. <strong style={{ color: TEXT.primary }}>F5</strong> — how rules produce worth hierarchies, and why they feel deserved. <strong style={{ color: TEXT.primary }}>F6</strong> — how worth hierarchies become perception, and why bias feels like observation. <strong style={{ color: TEXT.primary }}>F7</strong> — how protection escalates to domination, and where accountability lives. <strong style={{ color: TEXT.primary }}>F8</strong> — how the interoceptive substrate rebuilds through relational safety, and why different configurations strengthen the collective. <strong style={{ color: TEXT.primary }}>F9</strong> — how the same regulatory instrument runs with different inputs, and why the environment is the variable. <strong style={{ color: TEXT.primary }}>F10</strong> — how capacity configuration transmits across generations, and how processing changes what transmits. <strong style={{ color: TEXT.primary }}>F11</strong> — how contradictions are predictable outcomes of multi-need systems, and why holding is the developmental achievement. <strong style={{ color: TEXT.primary }}>F12</strong> — why all of this works this way, and how the override became invisible.
            </p>

            <KeyStatement>
              Every framework describes the same mechanism. The scale changes. The mechanism does not.
            </KeyStatement>

            <p style={proseStyle}>
              Every substitution in F3–F7 happens because the cognitive system cannot reach the Emotional Somatic System. Every repair in F8–F10 works because it addresses the ESS through experience. Every paradox in F11 exists because two systems are producing different outputs simultaneously. F12 is the reason.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The twelve-angle structure demonstrates internal coherence: every framework is a specific application of state-dependent nervous system organisation. This makes the system testable as a unified architecture rather than as twelve independent claims — if state-dependent organisation is the mechanism, then each framework&#39;s predictions should be consistent with the others.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ── C8: The Design Principle ── */}

          <section id="design-principle">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>The Design Principle</h2>

            <p style={proseStyle}>
              If all behaviour is state-dependent nervous system organisation, and the species has been running on cognitive override for thousands of years, then:
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>At the individual level:</strong> Reconnection to the Emotional Somatic System means restoring access to an information system that has been culturally suppressed. The work is not about &#34;getting in touch with feelings.&#34; It is about rebuilding the capacity to receive biological information that the nervous system never stopped producing.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>At the relational level:</strong> Relationships can be assessed by what nervous system state they produce, not just by what they provide. A relationship that chronically activates Threat &amp; Defence cannot also be the container for restoring somatic access.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>At the institutional level:</strong> Environments designed for regulation first, performance second, produce different behaviour than environments designed for compliance. The design determines what state it produces. The state determines what capacity is available.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>At the systemic level:</strong> The conditions that rewarded cognitive override are still operating. Education systems that train cognition and ignore the body. Healthcare systems that treat symptoms and ignore states. Workplaces that demand performance and produce chronic activation. Legal systems that require accountability from people in states where accountability is not neurologically available.
            </p>

            <p style={proseStyle}>
              These are not separate problems. They are the same pattern at different scales — a species that built its systems around one information system and forgot the other one.
            </p>

            <KeyStatement>
              The Emotional Somatic System never stopped working. We stopped listening. The conditions that made us stop are identifiable. The conditions that would let us start again are buildable.
            </KeyStatement>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={SPECTRUM.blue}
            items={[
              {
                term: "Two systems, one sequence",
                definition: "The Emotional Somatic System arrives first. The Cognitive-Logical System narrates a process already underway. It does not direct it.",
              },
              {
                term: "The capacity gap",
                definition: "Culture sped up faster than biology. The reasoning tools scaled. The emotional hardware stayed largely the same.",
              },
              {
                term: "The conditions that rewarded override",
                definition: "Agriculture created conditions where acting on the signal was no longer possible. The signal is accurate. The environment changed.",
              },
              {
                term: "Cultural inheritance of override",
                definition: "After enough generations, cognitive override does not feel like override. It feels like being a person.",
              },
              {
                term: "What the species forgot",
                definition: "A species with two information systems — one of which it uses, one of which it has largely forgotten how to read.",
              },
              {
                term: "Why insight alone cannot reverse the override",
                definition: "The insight arrives after the state has already shifted. Understanding happens after the fact, not before it.",
              },
              {
                term: "One mechanism, all twelve frameworks",
                definition: "Every framework describes the same mechanism. The scale changes. The mechanism does not.",
              },
              {
                term: "The design principle",
                definition: "The Emotional Somatic System never stopped working. We stopped listening. The conditions that made us stop are identifiable. The conditions that would let us start again are buildable.",
              },
            ]}
          />

          {/* ─── CONNECTIONS MAP ────────────────────────── */}
          <ConnectionsMap
            color={SPECTRUM.blue}
            connections={[
              { id: "F1", href: "/framework/f1-emotional-gradient", description: "F1 described the biological origin — why the Emotional Somatic Cycle exists. F12 describes the history — why the species stopped listening to the system F1 maps." },
              { id: "F8", href: "/framework/f8-repairing-awareness", description: "F8 describes how awareness rebuilds through safety. F12 explains why the rebuilding must be experiential — because the ESS updates through experience, not the explanation the CLS provides." },
              { id: "F10", href: "/framework/f10-generational-bridges", description: "F10 maps intergenerational transmission. F12 shows that the override itself transmitted through the same developmental mechanism — not through instruction, but through conditions." },
              { id: "M2", href: "/model/m2-nervous-system-states", description: "M2 maps the four states. F12 shows the two information systems that produce and maintain those states." },
              { id: "M4", href: "/model/m4-awareness-capacities", description: "M4 maps the awareness capacities. F12 shows why a cognitive-override culture does not reliably develop them." },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ──────────────────────── */}
          <NavSection
            color={SPECTRUM.blue}
            items={[
              { label: "Return to the beginning", href: "/framework/f1-emotional-gradient", linkText: "F1: The Emotional Gradient \u2192" },
              { label: "See the models the frameworks inform", href: "/models", linkText: "The Emotional Somatic System \u2192" },
              { label: "Explore all 12 frameworks", href: "/frameworks-map", linkText: "Framework Map \u2192" },
              { label: "Experience the tools", href: "https://teg-blue.com/emotional-tools", linkText: "Emotional Tools (teg-blue.com) \u2192", external: true },
            ]}
          />
        </article>

      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            headline: "The Two Information Systems \u2014 The Framework That Explains Why We Stopped Listening",
            description: metadata.description,
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
            url: "https://teg-blue.org/framework/f12-two-information-systems",
            datePublished: "2026-03-04",
            dateModified: "2026-04-05",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue 12-Framework Architecture",
              url: "https://teg-blue.org/frameworks-map",
            },
            keywords: metadata.keywords,
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "https://teg-blue.org" },
              { name: "12 Frameworks", url: "https://teg-blue.org/frameworks-map" },
              { name: "F12 \u2014 The Two Information Systems", url: "https://teg-blue.org/framework/f12-two-information-systems" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFAQJsonLd(
              faqItems.map((f) => ({ question: f.q, answer: f.a }))
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "The Two Information Systems (F12) \u2014 TEG-Blue Research",
              url: "https://teg-blue.org/framework/f12-two-information-systems",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </>
  );
}
