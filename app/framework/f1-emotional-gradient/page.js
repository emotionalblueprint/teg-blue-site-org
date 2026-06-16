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
import BridgeSection from "@/src/components/BridgeSection";
import EstablishesSection from "@/src/components/EstablishesSection";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ─────────────────────────────────────���────────

const SIDEBAR_SECTIONS = [
  { label: "Common Understanding", href: "#common-understanding", description: "What most people think these words mean — and what the nervous system is actually doing." },
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F1 makes about the biological origin of the Emotional-Somatic Cycle." },
  { label: "The Biological Substrate", href: "#biological-substrate", description: "The neural, endocrine, autonomic, and neurochemical systems that produce emotion." },
  { label: "The Autonomic Architecture", href: "#autonomic-architecture", description: "Two branches, four states, and the co-evolution of the ESS and CLS." },
  { label: "Why the Cycle Needs to Complete", href: "#designed-process", description: "Biological restoration as the designed process — and the two completion pathways." },
  { label: "Cross-Disciplinary Convergence", href: "#convergence", description: "Independent research traditions describing parts of the same architecture." },
  { label: "The Regulation Thread", href: "#regulation-thread", description: "When restoration is unavailable, the nervous system substitutes — at escalating scales, at escalating costs." },
  { label: "The Signal-to-System Sequence", href: "#signal-to-system", description: "The seven-step arc with biological restoration as the central pivot." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Bridge to F2", href: "#bridge", description: "Why biological restoration must be learned, not just designed." },
  { label: "Connections Map", href: "#connections", description: "How F1 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "The Emotional Gradient (F1) | TEG-Blue Research",
  description:
    "The biological origin of the Emotional-Somatic Cycle. Why the nervous system generates emotional signals, why the autonomic architecture produces four states, and why biological restoration is the designed process around which all twelve frameworks are organized.",
  keywords: [
    "biological substrate of emotion",
    "autonomic architecture",
    "emotional-somatic cycle",
    "biological restoration",
    "polyvagal theory",
    "nervous system states",
    "regulation thread",
    "cross-disciplinary convergence",
    "affective neuroscience",
    "safety-threat orientation",
    "four nervous system states",
    "co-evolution ESS CLS",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f1-emotional-gradient",
  },
  openGraph: {
    title: "The Emotional Gradient — F1 Framework | TEG-Blue",
    description:
      "The biological origin of the Emotional-Somatic Cycle — why the nervous system produces emotional signals, why the autonomic architecture generates four states, and why biological restoration is the pivot of the entire framework system.",
    url: "https://teg-blue.org/framework/f1-emotional-gradient",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Emotional Gradient — TEG-Blue F1",
    description:
      "The biological origin of the Emotional-Somatic Cycle and the governing architecture that connects all twelve frameworks.",
  },
  other: {
    'citation_title': 'The Emotional Gradient',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F1EmotionalGradientPage() {
  const P = { A: PATTERN.A.primary, B: PATTERN.B.primary, C: PATTERN.C.primary, D: PATTERN.D.primary };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f1-emotional-gradient" />

      <PageLayout
        header={
          <FrameworkHero
            badge="FRAMEWORK F1"
            title="The Emotional Gradient"
            subtitle="The Biological Origin of the Emotional-Somatic Cycle"
            description="Every emotional response is a biological event — neural, endocrine, and autonomic systems generating physiological changes before conscious awareness begins. Independent research traditions across affective science, neuroscience, developmental psychology, and trauma studies converge on the same structure. This framework asks what biological architecture produces it, why the convergence occurs, and what governs the entire system when the body's designed completion process is unavailable."
            group="Individual"
            groupLabel="Individual Arc · F1–F3"
            threadLine="Biological restoration — the body completing its own cycle. Cost: none — the designed process"
            informsModels={[
              { label: "M2", href: "/model/m2-nervous-system-states" },
              { label: "M3", href: "/model/m3-regulation-capacities" },
            ]}
            adjacent={{
              next: { label: "F2 Developmental Calibration", href: "/framework/f2-awareness-calibration" },
            }}
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>

          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Emotions",
                commonUnderstanding: "Irrational feelings that interfere with clear thinking — something to manage, override, or push past.",
                definition: "Biological events produced by specific neural, endocrine, autonomic, and neurochemical systems. The nervous system generates these signals when it detects something in the environment that matters — carrying information about safety or threat. The signal arrives before conscious awareness begins.",
              },
              {
                title: "Regulation",
                commonUnderstanding: "Calming down, managing your emotions, getting yourself under control.",
                definition: "The body completing a biological sequence: stress hormones metabolize, muscles release, the HPA axis stands down, the parasympathetic nervous system re-engages, and the body returns toward physiological baseline. This biological completion process — not a psychological skill — is what the framework calls restoration.",
              },
              {
                title: "The stress response",
                commonUnderstanding: "An overreaction, a sign that something is wrong with you — being too sensitive or not resilient enough.",
                definition: "A coordinated mobilization across multiple physiological systems — cortisol and adrenaline release, heart rate accelerates, muscles brace, blood flow redirects — designed to be temporary. The body built to clear this activation once the threat has passed.",
              },
            ]}
          />

          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  Emotions are biological events — produced by specific neural, endocrine, autonomic, and neurochemical systems operating in parallel, generating signals before conscious awareness begins
                </li>
                <li style={propositionItemStyle}>
                  The autonomic nervous system developed in evolutionary stages, producing the architecture that generates four nervous system states as a continuous gradient from safety to maximum threat
                </li>
                <li style={propositionItemStyle}>
                  The Emotional-Somatic System (ESS) and the Cognitive-Logical System (CLS) co-evolved as parts of one organism — the emotional circuitry is ancient, the cognitive circuitry is newer, and the CLS extended the threat branch as it developed
                </li>
                <li style={propositionItemStyle}>
                  Biological restoration is the designed process of the entire system — it operates at no cost, and every other framework describes what happens when this process is unavailable
                </li>
                <li style={propositionItemStyle}>
                  The body has two designed completion pathways: somatic signals can complete through the body's own channels; relational signals require another person as a biological completion requirement
                </li>
                <li style={propositionItemStyle}>
                  When biological restoration is unavailable, the nervous system substitutes — at escalating scales, at escalating costs — and this regulation thread connects all twelve frameworks
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: THE BIOLOGICAL ORIGIN ────────────── */}
          <PartDivider label="PART 1" title="The Biological Origin" color={P.A} />

          {/* Concept 0: The Biological Substrate */}
          <section
            id="biological-substrate"
            aria-labelledby="heading-biological-substrate"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-biological-substrate" style={sectionHeadingStyle(P.B)}>
              The Biological Substrate of Emotion
            </h2>

            <p style={proseStyle}>
              Every mechanism described across the four models rests on a physical substrate. Emotions are not psychological events that happen to have physical symptoms. They are biological events — produced by specific systems, carried by specific molecules, and resolved through specific physiological processes.
            </p>
            <p style={proseStyle}>
              An emotion begins before awareness. The process is distributed across multiple systems working in parallel — not a single brain region generating a feeling, but a whole-body coordination between neural, endocrine, and autonomic systems producing a signal the organism can act on.
            </p>

            <h3 style={conceptHeadingStyle}>The Neural Architecture</h3>
            <p style={proseStyle}>
              The amygdala — the brain's primary threat-detection structure — fires within 12 milliseconds of a relevant stimulus, before the cortex has processed what it is. The amygdala evaluates incoming signals for threat relevance and initiates the response cascade. The insula translates the body's internal state into conscious feeling — bridging visceral sensation and subjective experience. The anterior cingulate cortex integrates emotional and cognitive signals, weighting attention. The prefrontal cortex arrives later — capable of modulating the response, but always downstream of the initial evaluation.
            </p>

            <h3 style={conceptHeadingStyle}>The Endocrine Cascade</h3>
            <p style={proseStyle}>
              When the nervous system detects threat, the amygdala activates the hypothalamic-pituitary-adrenal (HPA) axis: the hypothalamus signals the pituitary gland, which signals the adrenal glands to release cortisol and adrenaline. These flood the bloodstream within seconds. Cortisol sustains the mobilization; adrenaline initiates it. Both must metabolize for the body to return to physiological baseline — <Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link> maps the process through which the body completes this, and what accumulates when the process does not run to its endpoint.
            </p>

            <h3 style={conceptHeadingStyle}>The Autonomic Pathway</h3>
            <p style={proseStyle}>
              Simultaneously, the sympathetic nervous system activates — accelerating heart rate, dilating airways, tensing muscles, redirecting blood flow, suppressing digestion. The vagus nerve — a bidirectional highway between brain and body — carries signals of safety or threat in both directions. When safety is re-established, the vagal brake re-engages, the parasympathetic nervous system reasserts dominance, and the social engagement system comes back online. <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link> maps these as the four nervous system states and what each enables and restricts.
            </p>

            <h3 style={conceptHeadingStyle}>The Neurochemical Context</h3>
            <p style={proseStyle}>
              The emotional signal is shaped by neurotransmitter states. Serotonin modulates mood stability and threat sensitivity. Dopamine shapes approach motivation and reward anticipation. Noradrenaline drives arousal and attention. Oxytocin — released through safe social contact — reduces amygdala reactivity and supports co-regulation, the process through which one regulated nervous system helps another complete its restoration sequence. These are not background conditions. They are part of the signal.
            </p>
            <p style={proseStyle}>
              This substrate is what makes the Emotional-Somatic System (ESS) measurable. When a nervous system state broadens perception, the vagal brake is engaged and the prefrontal cortex has access to its full range. When activation stays open and the physical residue accumulates, specific molecules remain elevated in specific systems. When the ESS generates a signal and the body mobilizes before the Cognitive-Logical System (CLS) has formed a thought, the amygdala pathway has completed before the cortical pathway has begun.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — signal flow from detection through biological substrate */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  LeDoux (1996) — amygdala as primary threat-detection structure, subcortical threat pathway. Craig (2009) — insula as the substrate of interoceptive awareness and subjective feeling. Damasio (1994) — somatic markers; emotion as body-state. Porges (2011) — vagus nerve as bidirectional safety/threat signalling pathway; the vagal brake. McEwen (2000) — HPA axis, cortisol, allostatic load. Panksepp (1998) — primary emotional systems as neurobiological circuits. Sapolsky (2004) — stress hormones and their behavioural effects. Carter (1998) — oxytocin and social bonding. Berridge & Kringelbach (2015) — dopamine and motivational systems.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The positioning of the biological substrate as the measurable foundation underneath every mechanism the models describe — not "emotions have biological correlates" but "every mechanism in M1 through M4 describes a specific, measurable biological process." This substrate is what makes the system testable: each model describes events with identifiable neural, endocrine, autonomic, and neurochemical markers at every stage. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 1: The Autonomic Architecture */}
          <section
            id="autonomic-architecture"
            aria-labelledby="heading-autonomic-architecture"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-autonomic-architecture" style={sectionHeadingStyle(P.B)}>
              The Autonomic Architecture
            </h2>

            <p style={proseStyle}>
              The autonomic nervous system developed in evolutionary stages — each layer adding a new capacity on top of what came before, without replacing the older systems. These layers produced the architecture that generates the states described in <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2: Nervous System States</Link>.
            </p>
            <p style={proseStyle}>
              The ESS and CLS are not separate systems that developed independently. They co-evolved as parts of one organism. The emotional circuitry is ancient — core emotion-related circuits (amygdala, hippocampus, hypothalamus, insula, cingulate) are conserved across mammals, with human refinements rather than wholesale reinvention. The cognitive circuitry is newer — the neocortex and prefrontal cortex show human-biased expansion compared to other primates. But both evolved together, each shaping what the other could do.
            </p>

            <h3 style={conceptHeadingStyle}>The Two Branches</h3>
            <p style={proseStyle}>
              Two primary branches of the autonomic nervous system produce the gradient that M2 maps.
            </p>
            <p style={proseStyle}>
              The <strong style={{ color: TEXT.primary }}>parasympathetic branch</strong> — particularly the ventral vagal system — supports safety, social engagement, and physiological settling. The ventral vagal system is the most recent evolutionary development, found only in mammals. It operates through the myelinated branch of the vagus nerve and regulates the muscles of the face, the middle ear, the larynx, and the pharynx — the structures that enable facial expression, vocal prosody, and the detection of social safety signals. When this system is active, the nervous system can evaluate safety not only through threat detection, but through relational contact. The organism can use the presence of another regulated nervous system as a safety signal.
            </p>
            <p style={proseStyle}>
              This is the evolutionary innovation that made what M2 describes as Safety & Openness biologically possible. Before the ventral vagal system, there was no biological pathway for safety-through-relationship.
            </p>
            <p style={proseStyle}>
              The older parasympathetic pathway — the dorsal vagal system — operates through the unmyelinated branch of the vagus nerve and is associated with immobilization, conservation, and shutdown. Present in vertebrates for approximately 500 million years. When mobilization is not available or has failed, the dorsal vagal system produces the organism's last-resort response: freeze, collapse, metabolic conservation.
            </p>
            <p style={proseStyle}>
              The <strong style={{ color: TEXT.primary }}>sympathetic branch</strong> supports mobilization — the capacity to take action in response to threat. The sympathetic nervous system accelerates heart rate, releases cortisol and adrenaline, redirects blood flow to skeletal muscles, and prepares the organism for rapid defensive action.
            </p>

            <h3 style={conceptHeadingStyle}>How the CLS Extended the Threat Branch</h3>
            <p style={proseStyle}>
              The continuous evaluation between safety and threat — what Porges (2011) calls neuroception — runs automatically and below conscious awareness. It is a biological assessment, not a decision. For hundreds of millions of years, this evaluation produced two possible responses: mobilize or shut down.
            </p>
            <p style={proseStyle}>
              As the CLS developed — neocortex and prefrontal cortex expanding over millions of years, with marked amplification in humans — the threat branch gained new capacities. The CLS did not arrive as a separate system and get recruited. It grew alongside the ESS, and as it grew, the threat responses became more sophisticated. The sympathetic branch could now do more than fight or flee. With prefrontal involvement, the organism could anticipate threats that had not yet arrived, plan defensive strategies across time, manage complex social hierarchies, and coordinate group responses.
            </p>
            <p style={proseStyle}>
              This produced four states — not as two original states plus two later additions, but as a single co-evolved architecture:
            </p>
            <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
              <li style={propositionItemStyle}>
                <strong style={{ color: TEXT.primary }}>Safety & Openness</strong> — parasympathetic-dominant. The ventral vagal system at work. Perception broadens, social engagement activates.
              </li>
              <li style={propositionItemStyle}>
                <strong style={{ color: TEXT.primary }}>Threat & Defence</strong> — sympathetic activation. The ancient mobilization response. Under extreme or inescapable conditions, the dorsal vagal system may engage as a fallback.
              </li>
              <li style={propositionItemStyle}>
                <strong style={{ color: TEXT.primary }}>Strategy & Management</strong> — the CLS extends the threat response into anticipation, planning, and management. Cognition is organizing around threat.
              </li>
              <li style={propositionItemStyle}>
                <strong style={{ color: TEXT.primary }}>Power & Dominance</strong> — the CLS at maximum threat response. The neural systems that carry guilt, care, and empathic constraint — particularly the ventromedial prefrontal cortex — are suppressed.
              </li>
            </ul>
            <p style={proseStyle}>
              The cultural acceleration of the last 100,000–50,000 years — symbolic reasoning, language, complex social structures — amplified what the CLS could do without changing the ESS's biological pace. The emotional circuitry stayed largely the same. The cognitive tools scaled. This is the co-evolutionary context that <Link href="/framework/f12-two-information-systems" style={linkStyle}>F12</Link> picks up: when cultural conditions changed to make override of the ESS advantageous, the CLS had the capacity to do it.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — evolutionary layers, two branches, four states */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Porges (2011) — polyvagal theory: three-layered autonomic hierarchy, neuroception. Dana (2018) — clinical application of polyvagal principles. Jackson (1884) — dissolution: newer circuits inhibit older ones; under stress, older circuits re-emerge. Panksepp (1998) — primary emotional systems conserved across mammals. Preuss (2021) — PFC evolution in primates; human expansion of granular PFC and association cortex. Dunbar (1998) — social brain hypothesis: brain size expanded with group size. Arnsten (2009) — prefrontal cortex function under stress. Koenigs et al. (2007) — vmPFC damage and impaired guilt processing.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The framing of the four nervous system states as the product of co-evolution between the ESS and CLS — not as an ancient two-mode system that cognition was later recruited into, but as a single architecture that developed its full range as both systems grew together. The identification of the ventral vagal system as the specific evolutionary innovation that made Safety & Openness — and therefore co-regulation, relational restoration, and the relational branch of the entire framework system — biologically possible. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: THE DESIGNED PROCESS ──��──────────── */}
          <PartDivider label="PART 2" title="The Designed Process" color={P.B} />

          {/* Concept 2: Why the Cycle Needs to Complete */}
          <section
            id="designed-process"
            aria-labelledby="heading-designed-process"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-designed-process" style={sectionHeadingStyle(P.B)}>
              Why the Cycle Needs to Complete
            </h2>

            <p style={proseStyle}>
              The autonomic architecture produces activation — the body mobilizes resources in response to what the nervous system detects. This mobilization is designed to be temporary.
            </p>
            <p style={proseStyle}>
              When the ESS detects threat, the sympathetic branch activates. Cortisol and adrenaline release. Heart rate increases. Muscles tense. Blood flow redirects. Inflammatory compounds deploy. The body organizes for defensive action. The sum of this mobilized activation — the activation load — rises.
            </p>
            <p style={proseStyle}>
              The biological system is designed to clear this load. Once the threat has passed, the body completes the sequence: stress hormones metabolize, muscles release, heart rate settles, organ systems restore, the HPA axis receives the all-clear signal from the hippocampus and stands down, the parasympathetic nervous system re-engages. The activation load returns to zero. The system returns to physiological baseline.
            </p>
            <p style={proseStyle}>
              This completion process — not calming down, not emotion management, but the body running the second half of a sequence that began with activation — is what <Link href="/model/m3-regulation-capacities" style={linkStyle}>M3: Regulation Capacities</Link> maps in detail. M3 describes how the sequence works, what each stage requires, and what accumulates when the sequence does not complete.
            </p>
            <p style={proseStyle}>
              F1 establishes something different: <strong style={{ color: TEXT.primary }}>why the body needs to complete the cycle at all.</strong>
            </p>
            <p style={proseStyle}>
              The need is architectural. Every component of the stress response has a metabolic cost. Cortisol remaining elevated suppresses immune function, disrupts sleep architecture, and impairs hippocampal function. Sustained muscular bracing produces pain and reduces range of motion. Chronic inflammatory signalling damages tissue. Neural circuits held in threat configuration lose flexibility. The body is spending resources continuously — resources that were mobilized for a temporary event.
            </p>
            <p style={proseStyle}>
              Biological restoration is the designed process. It operates at no cost — it is the design specification, not an intervention. It is what the system was built to do. Every other framework in the system describes what happens when this process is unavailable.
            </p>

            <h3 style={conceptHeadingStyle}>Two Designed Completion Pathways</h3>
            <p style={proseStyle}>
              Not all activation resolves through the same pathway. The body has two designed routes for completing the restoration sequence, and which route a specific signal requires depends on what the signal is about.
            </p>
            <p style={proseStyle}>
              Emotions whose content concerns threat, boundary, demand, contamination, safety, or value — what <Link href="/model/m1-emotions-as-signals" style={linkStyle}>M1</Link> maps as somatic emotions — can move toward restoration through the body's own channels: movement, breathing, discharge, crying, sleep, time. The body can run the restoration sequence internally because the activation was about conditions the body can evaluate and respond to through its own physiology.
            </p>
            <p style={proseStyle}>
              Emotions whose content concerns belonging, connection, rejection, shame, or the state of the bond — what M1 maps as relational emotions — cannot complete through physiology alone. The nervous system generated a signal about a relational condition, and the restoration pathway for that signal requires relational input: another person staying present while the activation runs. The ventral vagal system — the evolutionary innovation described in the previous section — is the biological architecture that makes this possible. Co-regulation is not emotional support. It is the designed completion pathway for an entire class of signals.
            </p>
            <p style={proseStyle}>
              This distinction is architectural, not preferential. The need for another person in relational restoration is a biological completion requirement built into the signal itself. When that person is unavailable — or is the source of the activation — those signals have no completion pathway at all. Not a degraded pathway. No pathway. The signals remain permanently unresolved because the biological completion requirement cannot be met.
            </p>
            <p style={proseStyle}>
              The capacity for biological restoration is not innate in the sense of being automatically available. The biological mechanism is present from birth. But the ability to complete the sequence under the full range of activation conditions must be learned through experience — specifically, through co-regulation with another nervous system that can itself complete the sequence. <Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link> describes how this learning occurs, and what happens when it does not.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — two completion pathways, somatic and relational */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Levine (1997) — somatic experiencing: the body's completion mechanism. Nagoski & Nagoski (2019) — the stress cycle requires completion, not management. Porges (2011) — parasympathetic restoration through the vagal brake; co-regulation as the mammalian primary restoration pathway. Gross (1998) — emotion suppression maintains physiological arousal even when expression stops. McEwen (2000) — allostatic load: the cumulative cost of incomplete stress responses. Sapolsky (2004) — chronic cortisol elevation and its systemic effects.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The positioning of biological restoration as the designed process of the entire framework system — not one mechanism among many, but the central mechanism around which all twelve frameworks are organized. The two designed completion pathways — somatic and relational — with the identification that relational signals require another person as a biological completion requirement, not a psychological preference. The distinction between the mechanism being present from birth and the capacity to use it being learned through co-regulation. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: CONVERGENT EVIDENCE ──────────────── */}
          <PartDivider label="PART 3" title="Convergent Evidence" color={P.C} />

          {/* Concept 3: Cross-Disciplinary Convergence */}
          <section
            id="convergence"
            aria-labelledby="heading-convergence"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-convergence" style={sectionHeadingStyle(P.B)}>
              Cross-Disciplinary Convergence
            </h2>

            <p style={proseStyle}>
              The architecture described in the previous sections — a biological system that detects, signals, shifts state, and needs to complete — has been independently identified across multiple research traditions. Each describes a piece of the same system from a different angle. None reference each other when arriving at the same structure.
            </p>
            <p style={proseStyle}>
              TEG-Blue proposes that these traditions converge because they are all describing parts of the Emotional-Somatic Cycle. The ESC provides a unifying architecture that shows where each tradition's findings sit within the same biological process.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Tradition</th>
                    <th style={thStyle}>Key Researcher(s)</th>
                    <th style={thStyle}>What They Found</th>
                    <th style={thStyle}>Where It Sits in the ESC</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Polyvagal Theory", "Porges", "Autonomic states: ventral vagal (safety), sympathetic (mobilization), dorsal vagal (immobilization). Neuroception as continuous safety evaluation.", "The autonomic architecture that produces the gradient. The states M2 maps."]} />
                  <TableRow cells={["Affective Neuroscience", "Panksepp, Damasio, LeDoux", "Primary emotional systems as ancient neural circuits. Somatic markers. Pre-conscious threat detection.", "The biological substrate. The signal architecture M1 maps."]} />
                  <TableRow cells={["Stress Physiology", "Sapolsky, McEwen", "HPA axis, cortisol dynamics, allostatic load — the cumulative cost of chronic activation.", "The activation load and why the cycle needs to complete. What accumulates when restoration does not run."]} />
                  <TableRow cells={["Interoception Research", "Craig", "The body's internal signalling system — the insula as the substrate of subjective feeling.", "The biological substrate. The bridge between ESS activation and CLS awareness."]} />
                  <TableRow cells={["Somatic Experiencing", "Levine", "The body's completion mechanism — activation must discharge for the system to return to baseline.", "The designed process. The completion mechanism M3 maps."]} />
                  <TableRow cells={["Attachment Theory", "Bowlby, Ainsworth", "Secure base vs threat activation. How early relational environment shapes the system's calibration.", "Co-regulation as the learning pathway for restoration. The developmental origin F2 maps."]} />
                  <TableRow cells={["Developmental Neuroscience", "Siegel, Schore, Ogden", "Window of tolerance. Co-regulation shapes brain architecture. Interpersonal neurobiology.", "The gradient and the developmental conditions for restoration capacity."]} />
                  <TableRow cells={["Motivational Science", "Gray, Carver & Scheier", "Approach / avoidance systems — behavioural activation and inhibition.", "The two-branch orientation between safety and threat."]} />
                  <TableRow cells={["Broaden-and-Build", "Fredrickson", "Positive states broaden perception and build resources; negative states narrow.", "The state-dependent capacity shift. What M2 maps as Safety & Openness vs threat states."]} />
                  <TableRow cells={["Trauma & Body Research", "van der Kolk, Walker", "The body keeps the score. Fight-flight-freeze-fawn.", "The consequences of incomplete restoration. What M3 maps as Path B."]} />
                  <TableRow cells={["Dual-Process Theory", "Kahneman, Stanovich", "Two processing systems — fast/automatic and slow/deliberate.", "The ESS and CLS as two information systems with different speeds and mechanisms."]} />
                  <TableRow cells={["Emotion Regulation Research", "Gross, Eisenberg", "Regulatory strategies, their physiological effects, and the cost of suppression.", "The restoration mechanism. What M3 maps as the difference between completion and override."]} />
                  <TableRow cells={["Oxytocin Research", "Carter", "Oxytocin reduces amygdala reactivity and supports co-regulation through safe social contact.", "The biological substrate of co-regulation. The relational restoration pathway."]} />
                  <TableRow cells={["Reward Systems", "Berridge & Kringelbach", "Dopamine and motivational systems — wanting vs liking, reward anticipation.", "The neurochemical context of the ESS. What drives restoration substitutes when the designed process is unavailable."]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              The convergence extends beyond the basic architecture. Each tradition also identifies what happens when the system loses flexibility — when a temporary state becomes persistent. Polyvagal theory describes loss of autonomic flexibility. Motivational science describes chronic avoidance or chronic approach. Broaden-and-build describes narrowing without the broadening return. Developmental neuroscience describes falling outside the window of tolerance. Attachment theory describes insecure attachment patterns. Trauma research describes chronic freeze, chronic fawn, chronic fight. These are all descriptions of the same phenomenon: the nervous system locked on a single position, unable to move through the gradient and return to physiological baseline.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — convergence map, traditions mapped to ESC architecture */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Porges (2011). Gray (1970). Carver & Scheier (1990). Fredrickson (2001). Siegel (2012). Ogden, Minton & Pain (2006). Bowlby (1969). Walker (2013). van der Kolk (2014). Kahneman (2011). Gross (1998). Panksepp (1998). Damasio (1994). LeDoux (1996). Levine (1997). Craig (2009). McEwen (2000). Sapolsky (2004). Carter (1998). Berridge & Kringelbach (2015). Schore (2001).
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The systematic mapping of independent research traditions against the Emotional-Somatic Cycle to show that each describes a part of the same biological architecture. To the framework's knowledge, no existing work makes this unification explicit. The individual traditions are established. The integration — showing that polyvagal states, approach/avoidance, broaden-and-build, window of tolerance, secure base, fight-flight-freeze-fawn, dual-process theory, and somatic completion are all describing pieces of one cycle — is the framework's contribution, open to testing. The building blocks are established. The connections are the framework's hypothesis.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 4: THE GOVERNING ARCHITECTURE ──────── */}
          <PartDivider label="PART 4" title="The Governing Architecture" color={P.D} />

          {/* Concept 4: The Regulation Thread */}
          <section
            id="regulation-thread"
            aria-labelledby="heading-regulation-thread"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-regulation-thread" style={sectionHeadingStyle(P.B)}>
              The Regulation Thread
            </h2>

            <p style={proseStyle}>
              A single mechanism connects all twelve frameworks.
            </p>
            <p style={proseStyle}>
              When the nervous system cannot complete biological restoration — the body's designed process for clearing the activation load and returning to physiological baseline — the system reaches for a substitute. Something else that produces the neurochemical shift, the brief relief, the settling of activation — without completing the biological sequence that would allow the body to actually return.
            </p>
            <p style={proseStyle}>
              Each framework describes what the nervous system reaches for at a different scale. The substitute changes. The mechanism does not. The costs escalate.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Framework</th>
                    <th style={thStyle}>What Provides the Restoration Substitute</th>
                    <th style={thStyle}>Scale</th>
                    <th style={thStyle}>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["F1", "Biological restoration — the body completing its own cycle", "Individual biology", "No cost — the designed process"]} />
                  <TableRow cells={["F2", "Co-regulation to self-restoration (when learned). When not learned: the restoration pathway never builds", "Developmental", "The return path never develops"]} />
                  <TableRow cells={["F3", "False coherence — the CLS replacing the ESS's signals with narrative", "Individual cognition", "Truth"]} />
                  <TableRow cells={["F4", "Rules regulate at the collective level", "Collective — social systems", "Flexibility"]} />
                  <TableRow cells={["F5", "Worth hierarchies regulate", "Collective — value systems", "Equity"]} />
                  <TableRow cells={["F6", "Bias regulates", "Collective — perceptual systems", "Accuracy"]} />
                  <TableRow cells={["F7", "Domination regulates", "Collective — power systems", "Everything"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              The restoration arc (F8–F12) does not add another substitute. It builds the original.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Framework</th>
                    <th style={thStyle}>What It Restores</th>
                    <th style={thStyle}>What Returns</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["F8", "Awareness rebuilds through safety, not instruction", "The restoration pathway"]} />
                  <TableRow cells={["F9", "Variation is configuration, not deficit", "Accuracy"]} />
                  <TableRow cells={["F10", "What the adult processes, the child does not inherit", "The generational bridge"]} />
                  <TableRow cells={["F11", "Paradox holds what logic cannot", "Truth"]} />
                  <TableRow cells={["F12", "Two information systems reunite — body and mind", "The designed process"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Each framework in the reversal restores what a corresponding framework in the escalation cost. The thread runs in both directions.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — regulation thread, escalation and reversal */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  The individual mechanisms at each scale are established within their respective research traditions. No single tradition maps this trajectory end-to-end — from individual perception through biological restoration through collective structures. The integration is the framework's hypothesis, open to testing.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The regulation thread as the governing architecture connecting all twelve frameworks — showing that each framework describes the same nervous system substituting a different source at a different scale with a different cost. The reversal arc (F8–F12) as the structural counterpart: not adding substitutes but building the original. To the framework's knowledge, no existing work traces a single mechanism from individual signal through biological restoration through collective structure and shows that each level is the same nervous system running the same process at a different scale. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 5: The Signal-to-System Sequence */}
          <section
            id="signal-to-system"
            aria-labelledby="heading-signal-to-system"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-signal-to-system" style={sectionHeadingStyle(P.B)}>
              The Signal-to-System Sequence
            </h2>

            <p style={proseStyle}>
              The Emotional-Somatic Cycle operates at a scale larger than one activation event. The trajectory from a single signal to the structures that organize entire societies follows a biological arc — each step producing the conditions for the next.
            </p>

            <p
              style={{
                fontSize: 14,
                fontFamily: FONT.mono,
                color: TEXT.muted,
                padding: "12px 16px",
                background: hexToRgba(P.B, 0.08),
                borderRadius: 6,
                marginBottom: 16,
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              Signal Detection &rarr; Emotion &rarr; Action &rarr; <strong style={{ color: P.B }}>Biological Restoration</strong> &rarr; Behaviour &rarr; Social Structure &rarr; Escalation or Repair
            </p>

            <p style={proseStyle}>
              Everything before biological restoration is the mechanism described in the models — operating within a single nervous system. The ESS detects (<Link href="/model/m1-emotions-as-signals" style={linkStyle}>M1</Link>). The nervous system shifts state (<Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link>). The body mobilizes. The CLS catches up. These are milliseconds to seconds.
            </p>
            <p style={proseStyle}>
              Biological restoration is where the arc pivots. It is step four of seven — three steps on each side.
            </p>
            <p style={proseStyle}>
              When the body completes biological restoration and returns to physiological baseline, what follows is behaviour with access to the full gradient. The person can perceive broadly. The CLS can receive the ESS's signals. Social structures built by people with this access tend toward flexibility, repair, and inclusion.
            </p>
            <p style={proseStyle}>
              When the body cannot complete biological restoration, what follows is behaviour organized by the state the nervous system is locked in. Perception narrows. The CLS overrides the ESS's signals. Unresolved activation accumulates. Restoration substitutes emerge. Over time, individual substitution patterns scale to collective structures: rules that enforce regulation (<Link href="/framework/f4-rules-regulate" style={linkStyle}>F4</Link>), hierarchies that distribute worth (<Link href="/framework/f5-worth-hierarchies" style={linkStyle}>F5</Link>), biases that filter perception (<Link href="/framework/f6-bias-regulates" style={linkStyle}>F6</Link>), domination that replaces regulation with control (<Link href="/framework/f7-domination-regulates" style={linkStyle}>F7</Link>).
            </p>
            <p style={proseStyle}>
              The arc is biological. Each step is a measurable process with identifiable physiological markers. Signal detection has a timeline (milliseconds). State activation has autonomic signatures. Biological restoration has endocrine markers. The behaviour that follows has observable patterns. The social structures that emerge have structural characteristics.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — seven-step arc with biological restoration as pivot */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  The individual stages of the arc are established across their respective research traditions: signal detection (LeDoux, Panksepp), state activation (Porges), biological restoration (Levine, Nagoski), behaviour as state-dependent (Siegel, Ogden), social structures as emergent from individual regulation patterns (Bowen, established in family systems research). The end-to-end arc is the framework's hypothesis.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The seven-step arc with biological restoration as the central pivot. The framework proposes that the trajectory from an individual signal to collective structure is not metaphorical — it is the ESC biology operating at progressively larger scales. Each step produces the conditions for the next. The pivot point — biological restoration — determines whether the trajectory leads toward repair or escalation. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={P.B}
            items={[
              {
                term: "The biological substrate",
                definition: "Emotions are biological events — produced by specific neural, endocrine, autonomic, and neurochemical systems. Every mechanism in the four models rests on this measurable substrate.",
              },
              {
                term: "ESS and CLS co-evolution",
                definition: "Two information systems that grew together as parts of one organism. The emotional circuitry is ancient. The cognitive circuitry is newer. Both evolved together, each shaping what the other could do.",
              },
              {
                term: "The autonomic architecture",
                definition: "Two autonomic branches produce a continuous gradient of four states. The ventral vagal system is the specific innovation that made Safety & Openness — and therefore co-regulation and relational restoration — biologically possible.",
              },
              {
                term: "Neuroception",
                definition: "The continuous evaluation between safety and threat, running automatically and below conscious awareness. A biological assessment, not a decision.",
              },
              {
                term: "Biological restoration",
                definition: "The designed process of the entire system. Stress hormones metabolize, muscles release, the HPA axis stands down, the body returns toward physiological baseline. Operates at no cost. Every other framework describes what happens when this process is unavailable.",
              },
              {
                term: "Two completion pathways",
                definition: "Somatic signals can complete through the body's own channels. Relational signals require another person as a biological completion requirement. This is architectural, not preferential.",
              },
              {
                term: "Activation load",
                definition: "The total physiological activation the body is carrying. Rises during activation, must clear for restoration to complete.",
              },
              {
                term: "The regulation thread",
                definition: "When biological restoration is unavailable, the nervous system substitutes — at escalating scales, at escalating costs. Each framework describes a restoration substitute. F8–F12 reverse the thread by building the original.",
              },
              {
                term: "The signal-to-system sequence",
                definition: "Signal Detection to Emotion to Action to Biological Restoration to Behaviour to Social Structure to Escalation or Repair. Biological restoration is step four of seven. Everything that follows depends on whether the body completes.",
              },
              {
                term: "Cross-disciplinary convergence",
                definition: "Independent research traditions across affective science, neuroscience, developmental psychology, clinical psychology, and trauma studies describe parts of the same architecture. The unification is the framework's contribution, open to testing.",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={P.B}
            established="F1 established that the body has a designed restoration process — biological restoration — that clears the activation load and returns the nervous system to physiological baseline, operating at zero cost."
            question="But how does a person learn to let that process run? The biological mechanism is present from birth, but the capacity to complete the sequence must be learned through experience — specifically, through co-regulation with another nervous system that can itself complete the sequence."
            nextFramework="F2"
            nextTitle="Developmental Calibration"
            nextHref="/framework/f2-awareness-calibration"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={P.D}
            connections={[
              {
                id: "M1: Emotions as Signals",
                href: "/model/m1-emotions-as-signals",
                description: "F1 provides the biological substrate — why the ESS generates signals as biological events. M1 maps the sixteen signals themselves: what each carries and what each needs to resolve.",
              },
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "F1 provides the evolutionary origin — why the autonomic architecture produces four states, why the two branches produce a gradient, and why the CLS extended the threat branch. M2 maps the four states and what each enables and restricts.",
              },
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "F1 establishes biological restoration as the designed process. M3 maps the restoration mechanism in detail — what each stage requires and what accumulates when the sequence does not complete.",
              },
              {
                id: "F2: Developmental Calibration",
                href: "/framework/f2-awareness-calibration",
                description: "F1 is the instrument. F2 is the calibration. F1 describes why the system exists and what it was designed to do. F2 describes how each person's system gets tuned through the relational environment.",
              },
              {
                id: "F12: Two Information Systems",
                href: "/framework/f12-two-information-systems",
                description: "F1 describes the biology — why the ESC exists and how the ESS and CLS co-evolved. F12 describes the history — why the species stopped listening to the ESS and how the override became invisible.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={P.D}
            items={[
              { label: "Continue to F2 — how biological restoration gets learned or doesn't", href: "/framework/f2-awareness-calibration", linkText: "F2: Developmental Calibration \u2192" },
              { label: "See the applied model for nervous system states", href: "/model/m2-nervous-system-states", linkText: "M2: Nervous System States \u2192" },
              { label: "See the restoration mechanism mapped in detail", href: "/model/m3-regulation-capacities", linkText: "M3: Regulation Capacities \u2192" },
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
            "@id": "https://teg-blue.org/framework/f1-emotional-gradient#article",
            headline: "The Emotional Gradient: The Biological Origin of the Emotional-Somatic Cycle",
            description:
              "Why the nervous system generates emotional signals, why the autonomic architecture produces four states, and why biological restoration is the designed process around which all twelve frameworks are organized. Framework F1 of the TEG-Blue 12-framework system.",
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
            datePublished: "2026-03-03",
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
              "@id": "https://teg-blue.org/framework/f1-emotional-gradient",
            },
            about: [
              { "@type": "Thing", name: "Biological Substrate of Emotion" },
              { "@type": "Thing", name: "Autonomic Nervous System" },
              { "@type": "Thing", name: "Polyvagal Theory" },
              { "@type": "Thing", name: "Biological Restoration" },
              { "@type": "Thing", name: "Emotional-Somatic Cycle" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Affective Neuroscience (Panksepp, 1998)" },
              { "@type": "ScholarlyArticle", name: "Descartes' Error (Damasio, 1994)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Waking the Tiger (Levine, 1997)" },
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
              { "@type": "ScholarlyArticle", name: "The Developing Mind (Siegel, 2012)" },
              { "@type": "ScholarlyArticle", name: "Positivity (Fredrickson, 2001)" },
              { "@type": "ScholarlyArticle", name: "Why Zebras Don't Get Ulcers (Sapolsky, 2004)" },
            ],
            keywords: [
              "biological substrate of emotion",
              "autonomic architecture",
              "emotional-somatic cycle",
              "biological restoration",
              "polyvagal theory",
              "cross-disciplinary convergence",
              "regulation thread",
              "state-dependent capacity",
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
              { name: "F1: Emotional Gradient", url: "/framework/f1-emotional-gradient" },
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
                question: "What is the biological substrate of emotion?",
                answer:
                  "Emotions are biological events produced by specific neural, endocrine, autonomic, and neurochemical systems. The amygdala fires within 12 milliseconds of a relevant stimulus, before the cortex has processed what it is. The process is distributed across multiple systems working in parallel, not a single brain region generating a feeling.",
              },
              {
                question: "What is biological restoration?",
                answer:
                  "Biological restoration is the body's designed process for completing the activation sequence and returning to physiological baseline. Stress hormones metabolize, muscles release, the HPA axis stands down, and the parasympathetic nervous system re-engages. It operates at no cost — it is the design specification, not an intervention.",
              },
              {
                question: "What is the regulation thread?",
                answer:
                  "When biological restoration is unavailable, the nervous system substitutes — at escalating scales, at escalating costs. Each of the twelve frameworks describes what the nervous system reaches for at a different scale. The substitute changes. The mechanism does not. The costs escalate from truth (F3) to everything (F7). F8-F12 reverse the thread by building the original.",
              },
              {
                question: "Why do different research traditions converge on the same structure?",
                answer:
                  "TEG-Blue proposes that traditions across affective science, neuroscience, developmental psychology, clinical psychology, and trauma studies converge because they are all describing parts of the Emotional-Somatic Cycle. The individual traditions are established. The integration is the framework's contribution, open to testing.",
              },
              {
                question: "What are the two completion pathways?",
                answer:
                  "Somatic emotions — whose content concerns threat, boundary, or safety — can complete through the body's own channels. Relational emotions — whose content concerns belonging, connection, or shame — require another person present as a biological completion requirement. This is architectural, not preferential.",
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
              name: "The Emotional Gradient (F1) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f1-emotional-gradient",
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
