import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, ModelAnchorStrip,
  ModelPurpose, OperationalStatement,
  ExpandableSection, FluidCompassExplorer, PageLayout,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

const MODEL_COLOR = SPECTRUM.azure;

const ANCHOR_SECTIONS = [
  { label: "The States", href: "#the-four-states" },
  { label: "The Gradient", href: "#the-gradient" },
  { label: "State & Capacity", href: "#state-determines-capacity" },
  { label: "Sensory Filtering", href: "#sensory-filtering" },
  { label: "Chronic States", href: "#chronic-states" },
  { label: "Two Systems", href: "#two-information-systems" },
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
    "stuck state",
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
              description="After a signal fires (M1), the nervous system shifts. The entire system — perception, cognition, empathy, relational capacity — reorganises around the finding. Four states grounded in two biological branches. What each state enables and restricts. And the mechanism that makes this consequential: the state changes what the person can see."
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
        {/* ─── FLUID COMPASS EXPLORER ──────────────────────── */}
        <FluidCompassExplorer />

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
            <ModelPurpose color={MODEL_COLOR}>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={propositionItemStyle}>
                  The nervous system continuously evaluates one question: <em>Is there enough safety to engage, or is protection needed?</em>
                </li>
                <li style={propositionItemStyle}>
                  Four states emerge from two biological branches — parasympathetic (Safety & Openness) and sympathetic (Threat & Defence, Strategy & Management, Power & Dominance)
                </li>
                <li style={propositionItemStyle}>
                  The first two states are body-first — automatic responses running for millions of years. The second two are cognition-first — what happened when cognition evolved and the system gained range
                </li>
                <li style={propositionItemStyle}>
                  What a person can perceive, think, feel, and do depends on their current state — restore safety first, then expect capacity
                </li>
                <li style={propositionItemStyle}>
                  Each state sets the sensory filter on all incoming data before cognition touches it — the person does not choose what they see, the state delivers it
                </li>
                <li style={propositionItemStyle}>
                  The same signal produces different outcomes depending on state position — assess the state, not the emotion
                </li>
                <li style={propositionItemStyle}>
                  Every state — including Safety & Openness — is a temporary activation. Health is not a state. Health is the capacity to move and return to rest
                </li>
                <li style={propositionItemStyle}>
                  When the return is absent, a temporary state becomes permanent. Identity forms around it. The filter locks. The loop self-reinforces
                </li>
                <li style={propositionItemStyle}>
                  Understanding is cognitive. The state is somatic. More cognition does not move a somatic system. What moves it is experience
                </li>
              </ul>
            </ModelPurpose>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 1: THE STATES                              */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 1" title="The States" />

          {/* ─── C0: THE QUESTION ─────────────────────────── */}
          <section
            id="safety-orientation"
            aria-labelledby="heading-safety-orientation"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-safety-orientation"
              style={sectionHeadingStyle}
            >
              The Question the Nervous System Asks
            </h2>

            <p style={proseStyle}>
              The nervous system continuously evaluates a single question: <strong style={{ color: TEXT.primary }}>{"\u201C"}Is there enough safety to engage, or is protection needed?{"\u201D"}</strong> Every emotional signal the body generates (M1) is, at root, an answer to this question. And every answer produces a shift in the nervous system{"'"}s state — a reorganisation of what the person can perceive, think, feel, and do.
            </p>
            <p style={proseStyle}>
              This evaluation is automatic, continuous, and below conscious awareness. Porges (2011) calls it <em>neuroception</em> — the nervous system{"'"}s assessment of safety and threat running underneath cognition. It does not wait for analysis. It evaluates <em>experienced safety</em>, not objective danger — which is why a person can feel threatened in an objectively safe room, or feel safe in an objectively dangerous situation. The nervous system reads what it has learned to recognise as safe or threatening, which may not match current reality.
            </p>
            <p style={proseStyle}>
              This is not a flaw. It is a design feature optimised for survival. The cost of being wrong about safety is higher than the cost of being wrong about threat. The system is biased toward protection. This bias is the reason the four states exist.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The question is not {"\u201C"}what is wrong with this person?{"\u201D"} but {"\u201C"}what is their nervous system evaluating as safe or threatening right now?{"\u201D"}
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — neuroception as continuous below-awareness safety/threat evaluation. <strong style={{ color: TEXT.primary }}>Somatic markers:</strong> Damasio (1994) — body-state signals guiding cognition. <strong style={{ color: TEXT.primary }}>Threat detection:</strong> LeDoux (1996) — threat processing running faster than conscious awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The safety orientation question as the single organising principle of the entire state system. Every state, every capacity change, every perceptual shift follows from the nervous system{"'"}s answer to this one question.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C1-C5: THE FOUR STATES ───────────────────── */}
          <section
            id="the-four-states"
            aria-labelledby="heading-the-four-states"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-the-four-states"
              style={sectionHeadingStyle}
            >
              Two Branches, Four States
            </h2>

            <p style={proseStyle}>
              The nervous system has two main branches that govern the body{"'"}s response to its safety evaluation. The <strong style={{ color: TEXT.primary }}>parasympathetic branch</strong> (ventral vagal complex) — the system of safety, openness, and social engagement. The <strong style={{ color: TEXT.primary }}>sympathetic branch</strong> — the system of mobilisation and defence. From these two branches, four states emerge:
            </p>

            {/* Four States Overview Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>State</div>
                <div style={gridHeaderStyle}>Biology</div>
                <div style={gridHeaderStyle}>Activation</div>
                <div style={gridHeaderStyle}>Design Duration</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Parasympathetic (ventral vagal) dominant</div>
                <div style={gridCellStyle}>Automatic — safety perceived</div>
                <div style={gridCellStyle}>Activates with genuine contact; returns to baseline</div>

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

            <h3 style={h3Style}>Safety & Openness</h3>
            <p style={proseStyle}>
              When the nervous system evaluates {"\u201C"}safe enough,{"\u201D"} the parasympathetic branch dominates and the body opens. Perception broadens — the person sees the full field. Empathy comes fully online. Cognition flexes — can hold complexity, tolerate ambiguity, consider multiple perspectives. Learning is available. Repair is possible. Vulnerability is available.
            </p>
            <p style={proseStyle}>
              Safety & Openness is not relaxation. It is not happiness. It is the state in which the nervous system has enough safety to engage with complexity — including painful complexity. Grief experienced in Safety & Openness is different from grief experienced in Threat & Defence. Conflict navigated from Safety & Openness produces different outcomes than conflict navigated from Strategy & Management.
            </p>

            <h3 style={h3Style}>Threat & Defence</h3>
            <p style={proseStyle}>
              When the nervous system evaluates {"\u201C"}threat,{"\u201D"} the sympathetic branch activates and the body mobilises. Heart rate rises, muscles tense, cortisol and adrenaline release. Attention narrows to threat-relevant signals. Emotions amplify. Cognition simplifies — binary thinking, speed over accuracy. Fight and flight are the primary responses; freeze and fawn emerge as fallbacks when fight/flight is unavailable.
            </p>
            <p style={proseStyle}>
              Threat & Defence is not pathology. It is an extraordinary emergency system. The narrowing, the amplification, the simplification — all functional. The system is prioritising survival over nuance. The problem is never that the person entered Threat & Defence. The problem is when what was designed for minutes to hours becomes a permanent address.
            </p>

            <h3 style={h3Style}>Strategy & Management</h3>
            <p style={proseStyle}>
              When body-first responses are insufficient — when fight/flight/freeze/fawn cannot resolve the threat — cognition gets recruited. The thinking mind enters the service of defence. This is the <strong style={{ color: TEXT.primary }}>architectural break</strong> between body-first and cognition-first: not just more intensity, but a different kind of response. Safety & Openness and Threat & Defence <em>happen to you</em>. Strategy & Management is what <em>cognition does</em> when recruited into threat service.
            </p>
            <p style={proseStyle}>
              In a healthy nervous system, Strategy & Management is deliberate, time-limited, and returnable. A parent managing a child{"'"}s medical emergency. A leader navigating an organisational crisis. An extraordinary survival tool — the intelligent upgrade that appeared when cognition evolved.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Safety & Openness and Threat & Defence happen to you. Strategy & Management and Power & Dominance are what cognition does when recruited into threat service.
            </OperationalStatement>

            <h3 style={h3Style}>Power & Dominance</h3>
            <p style={proseStyle}>
              When Strategy & Management is insufficient — when the threat is evaluated as requiring elimination or total override — cognition escalates to maximum threat response. The ventromedial prefrontal cortex (vmPFC) — the region that carries guilt, care, empathy, and consequence — is suppressed. Not failed, not overwhelmed: suppressed. A designed feature for extreme situations. Decisions that would be impossible with full empathy online become available.
            </p>
            <p style={proseStyle}>
              In a healthy nervous system, Power & Dominance is the rarest state: entered deliberately, used for the briefest time the situation demands, and followed by return. The person feels the cost — the weight of having suspended resonance. This cost is felt and processed. The return happens.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — ventral vagal (social engagement), sympathetic (mobilisation), autonomic hierarchy. Dana (2018) — clinical application. <strong style={{ color: TEXT.primary }}>Affective neuroscience:</strong> Panksepp (1998) — primary emotional systems as biological processes. <strong style={{ color: TEXT.primary }}>vmPFC and empathy:</strong> Koenigs et al. (2007) — vmPFC damage and impaired guilt processing. Blair (2007) — empathy suppression. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004, 2017) — chronic mobilisation and biology of behaviour at the extremes.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The four-state model grounded explicitly in two nervous system branches, with the sympathetic branch extending into two further states as cognition is recruited. The qualitative distinction between body-first states (automatic, pre-cognitive) and cognition-first states (deliberate, cognitive resources redirected to threat service) as an architectural break — not just a continuum of intensity but a different kind of response.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C6: THE GRADIENT ─────────────────────────── */}
          <section
            id="the-gradient"
            aria-labelledby="heading-the-gradient"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-the-gradient"
              style={sectionHeadingStyle}
            >
              The Gradient
            </h2>

            <p style={proseStyle}>
              The four states are not four boxes. They are positions on a continuous range — a gradient from full Safety & Openness to maximum Power & Dominance. The nervous system moves along this gradient, and any position on it has a specific, predictable effect on what the person can perceive, think, feel, and do.
            </p>
            <p style={proseStyle}>
              The transitions between states are recognisable. <strong style={{ color: TEXT.primary }}>Safety & Openness → Threat & Defence</strong> is automatic — the body responding to perceived threat. <strong style={{ color: TEXT.primary }}>Threat & Defence → Strategy & Management</strong> is the architectural break — cognition gets recruited into threat service. <strong style={{ color: TEXT.primary }}>Strategy & Management → Power & Dominance</strong> is the most consequential transition on the gradient — where defence becomes strategy and strategy becomes override.
            </p>
            <p style={proseStyle}>
              TEG-Blue uses the visual metaphor of a compass with a moving needle to make this gradient tangible — the <strong style={{ color: TEXT.primary }}>Inner Compass</strong>. The needle orients between safety and threat, moving along the four-state gradient. Health is not where the needle is. Health is whether the needle can move.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The question is not {"\u201C"}which box?{"\u201D"} but {"\u201C"}where on the gradient, and moving in which direction?{"\u201D"}
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — the autonomic hierarchy as a graded response system. Dana (2018) — the autonomic ladder as a clinical tool. <strong style={{ color: TEXT.primary }}>Window of tolerance:</strong> Ogden, Minton & Pain (2006) — a range, not a state.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The four-state gradient as a continuous range with a visual architecture (the Inner Compass) that makes the nervous system{"'"}s safety/threat orientation tangible and clinically usable. The reframe of health from a state to a capacity — not where the needle rests, but whether it can move and return.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 2: WHAT THE STATE DOES                     */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 2" title="What the State Does" />

          {/* ─── C7: STATE DETERMINES CAPACITY ───────────── */}
          <section
            id="state-determines-capacity"
            aria-labelledby="heading-state-determines-capacity"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-state-determines-capacity"
              style={sectionHeadingStyle}
            >
              State Determines Capacity
            </h2>

            <p style={proseStyle}>
              What a person can perceive, think, feel, and do depends on their current position on the gradient. This is not a metaphor. It is the operational consequence of how the nervous system allocates resources under different levels of perceived safety.
            </p>

            {/* State-Capacity Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr 1.5fr 1.5fr", minWidth: 700 }}>
                <div style={gridHeaderStyle}>Capacity</div>
                <div style={gridHeaderStyle}>Safety & Openness</div>
                <div style={gridHeaderStyle}>Threat & Defence</div>
                <div style={gridHeaderStyle}>Strategy & Management</div>
                <div style={gridHeaderStyle}>Power & Dominance</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Perception</div>
                <div style={gridCellStyle}>Broad — sees the full field</div>
                <div style={gridCellStyle}>Narrowed — threat-relevant signals</div>
                <div style={gridCellStyle}>Strategic — what needs managing</div>
                <div style={gridCellStyle}>Tunnel — obstacles and resources</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Empathy</div>
                <div style={gridCellStyle}>Full — resonance with others online</div>
                <div style={gridCellStyle}>Filtered — resonance decreases</div>
                <div style={gridCellStyle}>Redirected — reading others for strategy, not understanding</div>
                <div style={gridCellStyle}>Collapsed — resonance offline; reading others may be weaponised</div>

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
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              Restore safety first, then expect capacity. If a person cannot learn, cannot empathise, cannot think flexibly — the first question is not {"\u201C"}what is wrong with this person?{"\u201D"} The first question is: where is their nervous system?
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Broaden-and-build:</strong> Fredrickson (2001) — safety broadens cognitive and perceptual capacity. <strong style={{ color: TEXT.primary }}>Stress and cognition:</strong> Arnsten (2009) — prefrontal function degrades under stress. Sapolsky (2004) — chronic stress restricts learning and memory. <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — social engagement system availability depends on autonomic state.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  {"\u201C"}State Determines Capacity{"\u201D"} tracked systematically across all four states and five capacity dimensions as a clinically actionable framework. The reframe from {"\u201C"}what is wrong with this person?{"\u201D"} to {"\u201C"}what is their state?{"\u201D"} — making the capacity restriction visible as a state limitation rather than a personality one.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C8: SENSORY FILTERING ────────────────────── */}
          <section
            id="sensory-filtering"
            aria-labelledby="heading-sensory-filtering"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-sensory-filtering"
              style={sectionHeadingStyle}
            >
              Sensory Filtering — How the State Sets the Input
            </h2>

            <p style={proseStyle}>
              The state does not just change what the person <em>can</em> do. It changes what sensory input reaches them <em>before any thought forms</em>.
            </p>
            <p style={proseStyle}>
              The nervous system evaluates from the periphery in — not from the brain down. <strong style={{ color: TEXT.primary }}>Eyes</strong> — neural tissue, an extension of the brain outside the skull. <strong style={{ color: TEXT.primary }}>Ears</strong> — direct pathway to the brainstem. <strong style={{ color: TEXT.primary }}>Nose</strong> — the only sense with a direct pathway to the amygdala and hippocampus without going through the thalamus first. <strong style={{ color: TEXT.primary }}>Gut</strong> — approximately 100 million neurons, a second nervous system communicating upward through the vagus nerve. <strong style={{ color: TEXT.primary }}>Skin</strong> — touch receptors, temperature, pressure. All feeding in simultaneously, below conscious awareness.
            </p>
            <p style={proseStyle}>
              The amygdala fires in 12 milliseconds. The state is active before the mind has assembled a single thought about what is happening. Each state sets the filter on all incoming sensory data.
            </p>

            {/* Filter Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 2fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>State</div>
                <div style={gridHeaderStyle}>What the filter delivers</div>
                <div style={gridHeaderStyle}>What the person experiences</div>

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
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Threat detection:</strong> LeDoux (1996) — pre-conscious threat detection, amygdala processing before cortical awareness. <strong style={{ color: TEXT.primary }}>Attentional bias:</strong> Bar-Haim, Lamy, Pergamin, Bakermans-Kranenburg & van IJzendoorn (2007) — threat-related attentional bias. <strong style={{ color: TEXT.primary }}>Neuroception:</strong> Porges (2011) — operating below conscious awareness through multiple sensory channels.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Sensory filtering mapped systematically across all four states as the physical mechanism that explains why state determines capacity. Five sensory channels (eyes, ears, nose, gut, skin) all delivering filtered input simultaneously, below conscious awareness. The formulation: the world the person perceives is already filtered before cognition touches it.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C9: SAME SIGNAL, DIFFERENT EXPERIENCE ─────── */}
          <section
            id="same-signal-different-experience"
            aria-labelledby="heading-same-signal"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-same-signal"
              style={sectionHeadingStyle}
            >
              Same Signal, Different Experience
            </h2>

            <p style={proseStyle}>
              Every emotional signal from M1 produces a different experience depending on which state the nervous system is in when the signal arrives. The signal does not change. What the state does to it changes everything.
            </p>

            {/* Signal × State Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", minWidth: 500 }}>
                <div style={gridHeaderStyle}>Signal</div>
                <div style={gridHeaderStyle}>In Safety & Openness</div>
                <div style={gridHeaderStyle}>In Threat States</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Anger</div>
                <div style={gridCellStyle}>Signals a boundary; motivates repair and clarity</div>
                <div style={gridCellStyle}>Escalates; becomes self-blame, cold correction, or contempt depending on the state</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Fear</div>
                <div style={gridCellStyle}>Signals genuine threat; promotes appropriate caution</div>
                <div style={gridCellStyle}>Generalises; becomes hypervigilance; or becomes invisible (Power & Dominance)</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Sadness</div>
                <div style={gridCellStyle}>Processes loss; invites support and reflection</div>
                <div style={gridCellStyle}>Becomes withdrawal; deepens isolation; or becomes a cognitive description with no somatic substrate</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Joy</div>
                <div style={gridCellStyle}>Celebrates; connects; broadens capacity</div>
                <div style={gridCellStyle}>Is distrusted; feels dangerous; or becomes the rush of power</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Love</div>
                <div style={gridCellStyle}>Opens; deepens; sustains</div>
                <div style={gridCellStyle}>Attaches with desperation; becomes conditional; becomes ownership</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Shame</div>
                <div style={gridCellStyle}>Signals misalignment; motivates repair</div>
                <div style={gridCellStyle}>Becomes identity ({"\u201C"}I am wrong{"\u201D"}); or is projected outward as contempt for others</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Guilt</div>
                <div style={gridCellStyle}>Signals harm done; motivates accountability</div>
                <div style={gridCellStyle}>Becomes paralysis; excessive self-blame; or is structurally erased when vmPFC is suppressed</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Disgust</div>
                <div style={gridCellStyle}>Protects boundaries; signals contamination</div>
                <div style={gridCellStyle}>Dehumanises; creates othering; justifies exclusion</div>
              </div>
            </div>

            <p style={proseStyle}>
              The state does not just amplify or dampen the signal — it <strong style={{ color: TEXT.primary }}>reroutes</strong> it. Each state converts the signal through a state-specific mechanism. The clinical reframe follows: <em>assess the state, not the emotion.</em> Anger in Safety & Openness and anger in Power & Dominance are the same emotional signal producing entirely different outcomes. Treating {"\u201C"}anger{"\u201D"} as the problem misses the actual variable: where the nervous system is when the anger arrives.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Assess mode position, not the emotion. The same signal produces entirely different outcomes depending on where the nervous system is.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Emotion science:</strong> Frijda (1986) — emotions as action tendencies shaped by context. Barrett (2017) — constructed emotion theory: same physiological state producing different emotional experiences. Gross (2015) — emotion regulation as context-dependent process.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The systematic mapping of the same signal across all four states — showing that state position, not signal type, determines outcome. The identification of state-specific rerouting mechanisms. The reframe from {"\u201C"}assess the emotion{"\u201D"} to {"\u201C"}assess the state.{"\u201D"}
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 3: WHEN STATES BECOME CHRONIC              */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 3" title="When States Become Chronic" />

          {/* ─── C10: ALL STATES ARE TEMPORARY ────────────── */}
          <section
            id="all-states-temporary"
            aria-labelledby="heading-all-states-temporary"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-all-states-temporary"
              style={sectionHeadingStyle}
            >
              All States Are Temporary
            </h2>

            <p style={proseStyle}>
              Every state — including Safety & Openness — is a temporary activation. The nervous system returns to a neutral resting point, not to a particular state.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Baseline</strong> is the neutral, stable platform below all four states. Not happy. Not connected. Not calm in the therapeutic sense. Just — running. Functional. Present. The nervous system not in any particular state, ready to move into any of them when conditions call for it, and returning when they pass.
            </p>
            <p style={proseStyle}>
              In a healthy nervous system, all four states breathe — activating when needed, completing when done, and returning to baseline. Safety & Openness activates with genuine contact, fills, completes, returns. Threat & Defence activates when threat appears, mobilises, the threat passes, returns. Strategy & Management activates when a complex situation requires cognitive management, manages, resolves, returns. Power & Dominance activates in rare extreme situations, acts, the cost is felt, returns.
            </p>
            <p style={proseStyle}>
              This correction matters because {"\u201C"}Connection is home base{"\u201D"} language makes chronic Safety & Openness invisible. Someone who is always absorbing, always emotionally open, always in contact — whose needle never rests at baseline — is as stuck as someone always in Strategy & Management. The states differ. The stuckness is the same.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Health is not living in Safety & Openness. Health is the needle{"'"}s capacity to move — to shift into whatever state the situation requires and come back to rest when it is done.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Autonomic flexibility:</strong> Porges (2011) — flexibility as a marker of health, not resting state. Thayer & Lane (2000) — heart rate variability as a measure of autonomic flexibility. <strong style={{ color: TEXT.primary }}>Window of tolerance:</strong> Ogden, Minton & Pain (2006) — a flexible range.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The identification of baseline as distinct from Safety & Openness — a neutral resting platform, not a state. The correction of the {"\u201C"}Connection is home{"\u201D"} framing that made chronic Safety & Openness invisible. The reframe of health as autonomic flexibility: not where the needle rests, but whether it can move and return.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C11: THE STUCK STATE ─────────────────────── */}
          <section
            id="chronic-states"
            aria-labelledby="heading-chronic-states"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-chronic-states"
              style={sectionHeadingStyle}
            >
              The Stuck State — When Modes Become Chronic
            </h2>

            <p style={proseStyle}>
              When the return to baseline does not happen — when it was never learned through co-regulation in development, or when environmental conditions prevent it — the state becomes chronic. A mode that was designed to be temporary becomes a permanent position. Identity forms around it. The state stops feeling like a state and starts feeling like {"\u201C"}who I am.{"\u201D"}
            </p>

            <h3 style={h3Style}>Chronic Safety & Openness</h3>
            <p style={proseStyle}>
              Permanent absorption. Always feeling. Always in contact. Always emotionally present. The nervous system absorbs others{"'"} emotional states continuously and never empties. The needle never rests. Because the culture celebrates emotional openness, this stuckness is the hardest to see. It looks like empathy. It is exhaustion with no floor.
            </p>

            <h3 style={h3Style}>Chronic Threat & Defence</h3>
            <p style={proseStyle}>
              Permanent vigilance. The world is read as dangerous. Relationships are approach-avoidance. Energy consumed by threat-scanning. The body running on emergency fuel indefinitely. What should have been minutes of emergency became a lifetime of alarm.
            </p>

            <h3 style={h3Style}>Chronic Strategy & Management</h3>
            <p style={proseStyle}>
              Permanent management. Strategic warmth, managed closeness, performed empathy. The person appears functional — often high-functioning — because cognitive regulation is efficient. But closeness is managed rather than felt. Vulnerability is performed rather than experienced. This is the state that most reliably mimics healthy Safety & Openness, making the stuckness invisible — to others and often to the person themselves.
            </p>

            <h3 style={h3Style}>Chronic Power & Dominance</h3>
            <p style={proseStyle}>
              Permanent override. vmPFC chronically suppressed — guilt, care, and consequence are structurally unavailable, not just temporarily suspended. The system builds tolerance: the same level of control produces diminishing relief. Escalation follows. There is no natural stopping point. The person cannot feel the cost because the cost has been absorbed into identity.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Why the stuck state is self-maintaining:</strong> activation accumulates when the cycle does not complete. The baseline rises. The nervous system reaches for stronger inputs to move the needle above the new baseline. When those stop working, it reaches for the next state up the gradient. The gradient is not a moral spectrum. It is the escalation logic of activation that was never allowed to discharge.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The person in chronic Strategy & Management is not {"\u201C"}a controlling person.{"\u201D"} They are a person whose nervous system has been stuck — likely since childhood — because the return was never learned.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Trauma research:</strong> van der Kolk (2014) — nervous systems calibrated to chronic threat. <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — activation that does not complete stays in the body. <strong style={{ color: TEXT.primary }}>Developmental neuroscience:</strong> Schore (2003) — early relational conditions shaping regulatory capacity. <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen (2000) — the cost of chronic adaptation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The four chronic states mapped as positions, not personalities. The identity built around the state is a narrative constructed on filtered data, not character. This changes the intervention: not {"\u201C"}fix the personality{"\u201D"} but {"\u201C"}restore the return.{"\u201D"} The inclusion of chronic Safety & Openness as a stuck state — challenging the cultural assumption that emotional openness equals health.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C12: PROJECTION AS LOCKED FILTER ─────────── */}
          <section
            id="projection"
            aria-labelledby="heading-projection"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-projection"
              style={sectionHeadingStyle}
            >
              Projection — Accurate Perception Through a Locked Filter
            </h2>

            <p style={proseStyle}>
              When a state becomes chronic, the sensory filter that was designed to be temporary becomes permanent. The eyes that were supposed to widen — don{"'"}t. The ears that were supposed to soften back to warmth and prosody — don{"'"}t. The gut that was supposed to re-engage — stays suppressed.
            </p>
            <p style={proseStyle}>
              Projection is not a psychological defence mechanism layered on top of accurate perception. It is the stuck state reading the environment through its own filter and calling the output reality. The person is not imagining. They are reading real cues — through a filter calibrated to find exactly what the state expects to find. The threat feels real because the sensory system delivered it as real — before any thought formed.
            </p>

            {/* Projection Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 2fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>Chronic State</div>
                <div style={gridHeaderStyle}>What the locked filter finds</div>
                <div style={gridHeaderStyle}>What the person experiences</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Everyone{"'"}s emotions at full volume, own signal absent</div>
                <div style={gridCellStyle}>The world is other people{"'"}s states. Own needs invisible.</div>

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

            <h3 style={h3Style}>Why Cognition Cannot Correct It</h3>
            <p style={proseStyle}>
              The information that would correct the filter has to arrive through the same sensory channels the filter is already shaping. Cognition receives already-filtered data and builds a coherent narrative from it. The narrative feels true because the input it was built from felt accurate. The problem is upstream of cognition. The person cannot see the filter. They only see what comes through it.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Projection is accurate perception through a filter calibrated to a state that is no longer responding to the present environment.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Attentional bias:</strong> Bar-Haim et al. (2007) — threat-related attentional bias as automatic, pre-conscious. Mathews & MacLeod (2005) — cognitive bias and emotional vulnerability. <strong style={{ color: TEXT.primary }}>Schema theory:</strong> Beck (1976) — pre-existing cognitive structures filtering incoming information.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Projection reframed as the operational consequence of locked sensory filtering — not a defence mechanism but a pre-cognitive perceptual process. The identification of why cognition cannot correct it: the information that would correct the filter has to arrive through the same sensory channels the filter is already shaping.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C13: THE SELF-REINFORCING LOOP ───────────── */}
          <section
            id="self-reinforcing-loop"
            aria-labelledby="heading-self-reinforcing-loop"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-self-reinforcing-loop"
              style={sectionHeadingStyle}
            >
              The Self-Reinforcing Loop
            </h2>

            <p style={proseStyle}>
              The state determines the filter. The filter shapes the input. The input confirms the state. The loop has no natural exit.
            </p>
            <p style={proseStyle}>
              Each chronic state produces the environmental conditions that confirm its own necessity. Chronic Safety & Openness: over-absorbing depletes the self, producing more need for connection to replenish, producing more absorption. Chronic Threat & Defence: perpetual vigilance confirms the threat, producing more isolation, confirming the danger. Chronic Strategy & Management: permanent management generates resistance in the people being managed, confirming the instability, requiring more management. Chronic Power & Dominance: tyranny produces fear and opposition, confirming the sense of life peril, requiring more force.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>What can break the loop is not insight but experience</strong> — the nervous system receiving different inputs through the same sensory channels, repeatedly and consistently enough that the filter recalibrates. A regulation experience. A co-regulatory relationship. Genuine felt safety over time. This is experience, not understanding.
            </p>

            <h3 style={h3Style}>Attachment Patterns as a Worked Example</h3>
            <p style={proseStyle}>
              The anxious nervous system and the avoidant nervous system illustrate the loop in practice. The anxious system{"'"}s only available regulation pathway runs through the partner{"'"}s presence and responsiveness — the sensory filter is locked on abandonment signals. The avoidant system{"'"}s only available regulation pathway runs through distance — the sensory filter is locked on proximity as threat.
            </p>
            <p style={proseStyle}>
              Each regulation attempt is perfectly calibrated to dysregulate the other. The anxious partner reaches for connection; the avoidant reads it as encroachment and withdraws; the withdrawal lands as abandonment confirmed; the reaching intensifies. Both are running the only regulation pathway they have, through filters locked to detect exactly what the other is generating. The loop has no natural exit because both participants are running filtered perception that confirms the loop.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The exit is not insight but experience through the same sensory channels — repeatedly and consistently enough that the filter recalibrates.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Schema theory:</strong> Beck (1976) — self-reinforcing cognitive schemas. <strong style={{ color: TEXT.primary }}>Attachment theory:</strong> Bowlby (1969, 1980) — attachment working models as self-confirming templates. Mikulincer & Shaver (2007) — attachment dynamics as self-reinforcing regulation patterns. <strong style={{ color: TEXT.primary }}>Systems theory:</strong> Watzlawick, Weakland & Fisch (1974) — the persistence of problems through attempted solutions.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The self-reinforcing loop identified at the level of pre-cognitive sensory filtering, not cognitive distortion. The exit is not insight but experience through the same sensory channels. The attachment pairing as the clearest worked example: two nervous systems whose regulation attempts are perfectly calibrated to dysregulate each other — not from malice, but from locked filter settings running the only available pathway.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 4: TWO INFORMATION SYSTEMS                 */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 4" title="Two Information Systems" />

          {/* ─── C14: WHY UNDERSTANDING ≠ CHANGE ──────────── */}
          <section
            id="two-information-systems"
            aria-labelledby="heading-two-information-systems"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-two-information-systems"
              style={sectionHeadingStyle}
            >
              Why Understanding Doesn{"'"}t Equal Change
            </h2>

            <p style={proseStyle}>
              Underneath the states — underneath everything — are two parallel information systems running simultaneously at different speeds:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The emotional-somatic system:</strong> milliseconds. Unconscious. Experience-based. Slow to update, slow to forget. This is the system that runs the states — the one that orients between safety and threat before conscious awareness begins.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The cognitive-logical system:</strong> hundreds of milliseconds. Conscious. Explanation-based. Fast to update, fast to revise. This is the system that processes information, constructs narratives, plans, analyses.
            </p>
            <p style={proseStyle}>
              The emotional-somatic system arrives first. By the time cognition engages, the state has already shifted. Cognition does not direct the process — it narrates a process already underway.
            </p>
            <p style={proseStyle}>
              This is why a person can read M1 and M2, understand the entire architecture, see their own pattern clearly — and still react from the stuck state. Understanding is cognitive. The state is somatic. More cognition does not move a somatic system. What moves the system is experience — new experiences of safety, new experiences of co-regulation, new experiences of the return actually happening. Cognition supports. Experience changes.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Understanding is cognitive. The state is somatic. More cognition does not move a somatic system. What moves it is experience.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Dual-process theory:</strong> Kahneman (2011) — System 1 (fast, automatic) and System 2 (slow, deliberate). <strong style={{ color: TEXT.primary }}>Threat detection:</strong> LeDoux (1996) — emotional processing preceding conscious awareness. <strong style={{ color: TEXT.primary }}>Somatic memory:</strong> van der Kolk (2014) — somatic memory operating independently of cognitive understanding.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The two information systems as the explanation for the insight-behaviour gap: why understanding the pattern does not change it. The clinical implication: if the goal is state change, the intervention must include somatic and relational experience, not only cognitive understanding.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── THE FIRST HINT ──────────────────────────── */}
          <section
            id="the-first-hint"
            aria-labelledby="heading-first-hint"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-first-hint"
              style={sectionHeadingStyle}
            >
              What This Model Does Not Yet Answer
            </h2>

            <p style={proseStyle}>
              M2 has mapped what happens after a signal fires: the nervous system shifts into a state, that state changes what the person can perceive, and when the state becomes chronic, the filter locks and the loop self-reinforces.
            </p>
            <p style={proseStyle}>
              But each of these states was designed to resolve. Threat & Defence was designed for minutes to hours, then return. Strategy & Management was designed as a tool, then return. Even Power & Dominance was designed for the rarest situations, then return. The nervous system has a built-in mechanism for coming back to baseline. <strong style={{ color: TEXT.primary }}>So why doesn{"'"}t it?</strong> What accumulates when the return keeps not happening? What does the nervous system reach for instead? That is M3.
            </p>
            <p style={proseStyle}>
              And there is a second question — quieter, underneath the first. Some people feel the state shift. They notice the narrowing. They catch the filter engaging. Others do not. They are inside the state and have no awareness that they are inside it — they experience the filtered output as reality, not as a state-dependent perception. What determines this difference is the territory of M4.
            </p>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="m2-nervous-system-states" type="model" />

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
                  <NavRow
                    label="See the sixteen emotions mapped as biological signals — the input that triggers the state M2 describes"
                    href="/model/m1-emotions-as-signals"
                    linkText="M1: Emotions as Signals &rarr;"
                  />
                  <NavRow
                    label="Understand what happens when the activation cycle completes — and what happens when cognition blocks it"
                    href="/model/m3-regulation-capacities"
                    linkText="M3: Regulation Capacities &rarr;"
                  />
                  <NavRow
                    label="Understand what determines whether the person can feel the state shift at all"
                    href="/model/m4-awareness-capacities"
                    linkText="M4: Awareness Capacities &rarr;"
                  />
                  <NavRow
                    label="Explore the foundational theory behind the four-state gradient"
                    href="/framework/f1-emotional-gradient"
                    linkText="F1: The Emotional Gradient &rarr;"
                  />
                  <NavRow
                    label="Explore the interactive tools"
                    href="https://teg-blue.com/emotional-tools"
                    linkText="teg-blue.com &rarr;"
                    external
                  />
                </tbody>
              </table>
            </div>
          </section>
        </article>

      </PageLayout>

      <SiteFooter />

      {/* ─── JSON-LD ─────────────────────────────────────── */}
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
            dateModified: "2026-03-27",
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
            citation: [
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Affective Neuroscience (Panksepp, 1998)" },
              { "@type": "ScholarlyArticle", name: "Descartes' Error (Damasio, 1994)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Waking the Tiger (Levine, 1997)" },
              { "@type": "ScholarlyArticle", name: "Thinking, Fast and Slow (Kahneman, 2011)" },
            ],
            keywords: [
              "nervous system states",
              "four-mode gradient",
              "safety-threat orientation",
              "sensory filtering",
              "state determines capacity",
              "stuck state",
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
                  "The four states are Safety & Openness (parasympathetic dominant — perception broadens, empathy online), Threat & Defence (sympathetic activation — body mobilises for emergency), Strategy & Management (cognition recruited into threat service — strategic thinking, management), and Power & Dominance (cognition at maximum threat response — vmPFC suppressed, guilt and empathy structurally unavailable). The first two are body-first (automatic), the second two are cognition-first (deliberate). They sit on a continuous gradient, not as four separate boxes.",
              },
              {
                question: "What does 'state determines capacity' mean?",
                answer:
                  "State determines capacity means that what a person can perceive, think, feel, and do depends on their current nervous system state. In Safety & Openness, perception is broad and empathy is full. In threat states, these capacities progressively narrow — not through choice but through the nervous system's allocation of resources. The inability to empathise in a given moment is not unwillingness. It is a state limitation.",
              },
              {
                question: "What is sensory filtering in the TEG-Blue model?",
                answer:
                  "Each nervous system state sets specific filters on all incoming sensory data — eyes, ears, nose, gut, skin — before any conscious thought forms. The amygdala fires in 12 milliseconds. The state is active before the mind has assembled a coherent thought. In Safety & Openness the channels are wide open. In threat states they progressively narrow. When a state becomes chronic, the filter settings lock — the person perceives a pre-filtered version of reality calibrated to their chronic state.",
              },
              {
                question: "What is a stuck state?",
                answer:
                  "A stuck state is one where a temporary nervous system activation has become permanent — the return to baseline does not happen. The person does not experience being stuck; they experience it as 'just who I am.' Identity forms around the state. All four states can become chronic, including Safety & Openness — someone always absorbing, always emotionally open, whose nervous system never rests at baseline, is as stuck as someone always in Strategy & Management.",
              },
              {
                question: "How does TEG-Blue redefine projection?",
                answer:
                  "TEG-Blue redefines projection as locked sensory filtering rather than a psychological defence mechanism. The person is not imagining threat — they are reading real cues through a filter calibrated to a state that is no longer responding to the present environment. Cognition cannot correct it because the information that would correct the filter has to arrive through the same sensory channels the filter is already shaping. The exit is not insight but experience.",
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

// ─── STYLE CONSTANTS ──────────────────────────────────────

const sectionHeadingStyle = {
  fontSize: 20,
  fontWeight: 700,
  color: MODEL_COLOR,
  letterSpacing: "-0.01em",
  marginBottom: 16,
  paddingBottom: 8,
  borderBottom: `2px solid ${hexToRgba(MODEL_COLOR, 0.2)}`,
};

const h3Style = {
  fontSize: 16,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 12,
};

const proseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 16,
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

const expandableRowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 6,
  marginTop: 4,
};

const gridHeaderStyle = {
  padding: "10px 12px",
  background: hexToRgba(MODEL_COLOR, 0.1),
  borderBottom: `1px solid ${BORDER.default}`,
  fontSize: 12,
  fontWeight: 600,
  color: TEXT.primary,
  fontFamily: FONT.mono,
};

const gridCellStyle = {
  padding: "10px 12px",
  borderBottom: `1px solid ${BORDER.default}`,
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.6,
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

function PartDivider({ label, title }) {
  return (
    <div
      style={{
        marginBottom: 32,
        marginTop: 16,
        paddingTop: 24,
        borderTop: `1px solid ${BORDER.default}`,
      }}
    >
      <span
        style={{
          fontFamily: FONT.mono,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: MODEL_COLOR,
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "4px 0 0",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function NavRow({ label, href, linkText, external }) {
  const linkStyle = {
    color: MODEL_COLOR,
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
