import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPACING, SPECTRUM,
  hexToRgba, RESEARCHER, PATTERN_GRADIENT,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ResearcherHero,
  PropositionBox, ExpandableSection,
  FluidCompassExplorer,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/src/lib/jsonld";

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Inner Compass & Four-Mode Gradient (M1) | TEG-Blue Research",
  description:
    "The instrument that maps how the nervous system orients between safety and threat across four modes — Connection, Protection, Control, Domination — on a continuous gradient. Model M1 of the TEG-Blue system.",
  keywords: [
    "inner compass",
    "four-mode gradient",
    "nervous system regulation",
    "Connection Protection Control Domination",
    "emotional signalling",
    "safety-threat orientation",
    "stuck compass",
    "state determines capacity",
    "emotional technology",
    "regulatory states",
    "polyvagal theory",
    "two information systems",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m1-inner-compass",
  },
  openGraph: {
    title: "Inner Compass & Four-Mode Gradient — M1 Model | TEG-Blue",
    description:
      "The instrument that maps how the nervous system orients between safety and threat across four modes on a continuous gradient. The foundational model of the TEG-Blue system.",
    url: "https://teg-blue.org/model/m1-inner-compass",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inner Compass & Four-Mode Gradient — TEG-Blue M1",
    description:
      "How the nervous system orients between safety and threat. The foundational model behind the TEG-Blue system.",
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function M1InnerCompassPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/model/m1-inner-compass" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${SPACING.pagePadding} 60px`,
        }}
      >
        <ResearcherHero
          badge="MODEL M1"
          title="Inner Compass & Four-Mode Gradient"
          subtitle="The Instrument"
          description="How the nervous system orients between safety and threat, how emotions carry that orientation as signals, how four modes organise the response on a continuous gradient, and how the capacity to return determines whether the compass stays fluid or gets stuck. The foundational model of the TEG-Blue system."
        />

        {/* ─── FLUID COMPASS EXPLORER ──────────────────────── */}
        <FluidCompassExplorer />

        {/* ─── TABLE OF CONTENTS ─────────────────────────── */}
        <nav
          aria-label="Page contents"
          style={{
            margin: "32px 0",
            padding: 20,
            background: BG.card,
            borderRadius: 10,
            border: `1px solid ${BORDER.default}`,
          }}
        >
          <h2
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: TEXT.muted,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontFamily: FONT.mono,
              marginBottom: 12,
            }}
          >
            On this page
          </h2>
          <ol
            style={{
              paddingLeft: 20,
              margin: 0,
              columns: "2 240px",
              columnGap: 24,
            }}
          >
            {[
              ["#core-propositions", "Core Propositions"],
              ["#signalling-language", "Emotions as Signalling Language"],
              ["#safety-orientation", "The Safety Orientation Question"],
              ["#inner-compass", "The Inner Compass"],
              ["#four-modes", "The Four Modes"],
              ["#the-gradient", "The Gradient"],
              ["#state-determines-capacity", "State Determines Capacity"],
              ["#same-emotion-two-expressions", "Same Emotion, Two Expressions"],
              ["#regulation-the-return", "Regulation — The Return"],
              ["#stuck-compass", "The Stuck Compass"],
              ["#two-information-systems", "The Two Information Systems"],
              ["#relationship-to-frameworks", "Relationship to Frameworks"],
              ["#where-to-go-next", "Where to Go Next"],
            ].map(([href, label]) => (
              <li key={href} style={{ marginBottom: 6 }}>
                <a
                  href={href}
                  style={{
                    fontSize: 13,
                    color: SPECTRUM.azure,
                    textDecoration: "none",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

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
            <PropositionBox label="CORE PROPOSITIONS">
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={propositionItemStyle}>
                  Emotions are the nervous system's signalling language — the medium through which the body's continuous evaluation of safety and threat reaches the rest of the organism
                </li>
                <li style={propositionItemStyle}>
                  The nervous system continuously evaluates one question: <em>Is there enough safety to engage, or is protection needed?</em>
                </li>
                <li style={propositionItemStyle}>
                  The inner compass orients between safety and threat — health is not a position but the capacity of the needle to move
                </li>
                <li style={propositionItemStyle}>
                  Four modes on a continuous gradient: two body-first (Connection, Protection), two cognition-first (Control, Domination)
                </li>
                <li style={propositionItemStyle}>
                  What a person can perceive, think, feel, and do depends on their current gradient position
                </li>
                <li style={propositionItemStyle}>
                  The same emotion produces different outcomes depending on mode position — assess the mode, not the emotion
                </li>
                <li style={propositionItemStyle}>
                  Regulation is the return — the built-in mechanism by which the nervous system moves from threat back to safety
                </li>
                <li style={propositionItemStyle}>
                  When the return is missing, the compass gets stuck — what should have been temporary becomes permanent, and identity forms around the mode
                </li>
                <li style={propositionItemStyle}>
                  Two parallel information systems — emotional-somatic (fast, unconscious) and cognitive-logical (slower, conscious) — run simultaneously; understanding is cognitive, but the compass is somatic
                </li>
              </ul>
            </PropositionBox>
          </section>

          {/* ─── CONCEPT 1: SIGNALLING LANGUAGE ─────────── */}
          <section
            id="signalling-language"
            aria-labelledby="heading-signalling-language"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-signalling-language"
              style={sectionHeadingStyle}
            >
              Emotions as the Nervous System's Signalling Language
            </h2>

            <p style={proseStyle}>
              Emotions are not disruptions to clear thinking — they are the nervous system's signalling language. The medium through which the body's continuous evaluation of safety and threat reaches the rest of the organism. The body runs a distributed evaluation across the gut, heart, muscles, vagus nerve, amygdala — continuously, below conscious awareness. Emotions are how that evaluation gets delivered.
            </p>
            <p style={proseStyle}>
              Fear is the signal that the evaluation found threat. Joy is the signal that it found safety and connection. Anger signals a boundary crossed. Each emotion carries specific information about what the evaluation detected — and each orients the organism toward a specific response.
            </p>
            <p style={proseStyle}>
              This is the body's first language. It was running for millions of years before cognition evolved. When cognition arrived, it did not replace this language — it added a second one. The two systems — emotional signalling and cognitive reasoning — are separate but interdependent. Cognition can interpret emotional signals, override them, or replace them with its own narratives. But the emotional signals do not stop being generated. The body keeps talking whether cognition listens or not.
            </p>

            <KeyStatement>
              The clinical shift: from "emotion regulation" (emotions need controlling) to "signal interpretation" (emotions carry information that needs reading). The question is not "how do I manage this emotion?" but "what is this signal telling me?"
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Affective neuroscience:</strong> Panksepp (1998) — primary emotional systems as ancient biological processes; Damasio (1994) — somatic markers guide decision-making; LeDoux (1996) — threat detection before conscious processing. <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — the vagus nerve as bidirectional communication pathway, neuroception as continuous safety evaluation. <strong style={{ color: TEXT.primary }}>Emotion science:</strong> Frijda (1986) — emotions as action readiness, functional signals oriented toward environmental conditions.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  Emotions reframed as the body's first language — cognition is the second. Signal interpretation replaces emotion regulation as the primary clinical frame. The framing as "language" carries specific implications: a language can be listened to or ignored, interpreted accurately or misread, spoken fluently or suppressed. When cognition overrides the emotional signal, it is not correcting an error — it is silencing one language and replacing it with another.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 2: SAFETY ORIENTATION ──────────── */}
          <section
            id="safety-orientation"
            aria-labelledby="heading-safety-orientation"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-safety-orientation"
              style={sectionHeadingStyle}
            >
              The Safety Orientation Question
            </h2>

            <p style={proseStyle}>
              The single question the nervous system continuously evaluates: <strong style={{ color: TEXT.primary }}>"Is there enough safety to engage, or is protection needed?"</strong> Every emotional signal is an answer to this question. The question is the same across all contexts — personal, relational, systemic. The answers vary. The mechanism does not.
            </p>
            <p style={proseStyle}>
              This evaluation is automatic, continuous, and below conscious awareness. Porges (2011) named this process <em>neuroception</em> — the nervous system's subconscious detection of safety and danger cues. It evaluates <em>experienced safety</em>, not objective danger. This is why a person can feel threatened in an objectively safe room, or feel safe in an objectively dangerous situation. The compass reads what the nervous system has learned to recognise as safe or threatening, which may not match current reality.
            </p>

            <KeyStatement>
              Am I reacting to what is actually happening, or to what my nervous system learned to expect?
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — neuroception as continuous subconscious evaluation of safety and threat. <strong style={{ color: TEXT.primary }}>Attachment Theory:</strong> Bowlby (1969) — the attachment system scans for safety and threat; Schore (2003) — right-brain regulation shaped by early relational experience.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  A single question that generates all emotional diversity. Neuroceptive evaluation as the independent variable; compass position as the dependent variable. Every emotion — from empathy to defensiveness, from curiosity to withdrawal — is a variation on: <em>safe enough, or not yet.</em>
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 3: INNER COMPASS ───────────────── */}
          <section
            id="inner-compass"
            aria-labelledby="heading-inner-compass"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-inner-compass"
              style={sectionHeadingStyle}
            >
              The Inner Compass — A Moving Needle
            </h2>

            <p style={proseStyle}>
              The nervous system's continuous orientation between safety and threat can be understood through the metaphor of a compass. A compass with a moving needle that orients between safety and threat. The needle is constantly moving — there is no "correct" position. It points in a direction.
            </p>
            <p style={proseStyle}>
              A fluid compass moves between Connection and Protection as conditions change. It shifts toward Protection when threat appears and returns toward Connection when the threat passes. Fluid operation is not a state. It is the needle moving — responding, orienting, and coming back.
            </p>
            <p style={proseStyle}>
              A <strong style={{ color: TEXT.primary }}>stuck compass</strong> is one where the needle has lost its capacity to move. What should have been a temporary orientation becomes a chronic position. The person does not experience this as being stuck — they experience it as "just who I am." False coherence (F3) constructs identity around the locked position, making the stuckness invisible from the inside.
            </p>

            <KeyStatement>
              Health is not a state. Health is a capacity. Not where the needle is, but whether it can move.
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Dana (2018) — autonomic states as continuous orientation, polyvagal exercises for state awareness. <strong style={{ color: TEXT.primary }}>Developmental neuroscience:</strong> Siegel (2012) — window of tolerance as range of fluid movement; integration as the capacity to move between states. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) — stress response designed for acute activation, not chronic residence.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  The reframe of health from a state to a capacity. Compass fluidity as a continuous variable — not "are you in Connection?" but "can your needle move?" The compass makes "stuck" versus "fluid" the primary diagnostic question rather than "which state is the person in."
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 4: THE FOUR MODES ──────────────── */}
          <section
            id="four-modes"
            aria-labelledby="heading-four-modes"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-four-modes"
              style={sectionHeadingStyle}
            >
              The Four Modes
            </h2>

            <p style={proseStyle}>
              The compass has four modes on a continuous gradient. Two are body-first — automatic responses the nervous system has been running for millions of years. Two are cognition-first — deliberate responses that emerged when cognition evolved and the system gained range.
            </p>

            {/* Four Modes Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.5fr 1.5fr 1.2fr", minWidth: 700 }}>
                {/* Header row */}
                <div style={gridHeaderStyle}>Mode</div>
                <div style={gridHeaderStyle}>Type</div>
                <div style={gridHeaderStyle}>Activation</div>
                <div style={gridHeaderStyle}>Sequence</div>
                <div style={gridHeaderStyle}>Design Duration</div>
                {/* Connection */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Connection</div>
                <div style={gridCellStyle}>Body-first</div>
                <div style={gridCellStyle}>Automatic — safety perceived</div>
                <div style={gridCellStyle}>Engage, relate, repair, learn</div>
                <div style={gridCellStyle}>Indefinite — home base</div>
                {/* Protection */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Protection</div>
                <div style={gridCellStyle}>Body-first</div>
                <div style={gridCellStyle}>Automatic — threat perceived</div>
                <div style={gridCellStyle}>Fight/flight &rarr; freeze/fawn</div>
                <div style={gridCellStyle}>Minutes to hours</div>
                {/* Control */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Control</div>
                <div style={gridCellStyle}>Cognition-first</div>
                <div style={gridCellStyle}>Deliberate — cognition recruited</div>
                <div style={gridCellStyle}>Anticipate &rarr; Manage &rarr; Override</div>
                <div style={gridCellStyle}>Time-limited — tool</div>
                {/* Domination */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Domination</div>
                <div style={gridCellStyle}>Cognition-first</div>
                <div style={gridCellStyle}>Deliberate — cognition at maximum</div>
                <div style={gridCellStyle}>Override &rarr; Eliminate &rarr; Secure</div>
                <div style={gridCellStyle}>Rare — last resort</div>
              </div>
            </div>

            <h3 style={h3Style}>Connection</h3>
            <p style={proseStyle}>
              Connection is not relaxation or happiness. It is the mode in which the nervous system has enough safety to engage with complexity. A person in Connection can grieve, argue, problem-solve, and sit with discomfort — because the system has sufficient safety resources to hold these without treating them as threats. Perception broadens, empathy comes fully online, cognitive flexibility increases, repair becomes possible, and learning capacity opens. Connection is the system's home base — the only mode designed for sustained living.
            </p>

            <h3 style={h3Style}>Protection</h3>
            <p style={proseStyle}>
              Protection is an extraordinary emergency system. When threat is perceived, the entire system mobilises: attention narrows toward threat, emotions amplify, and the capacity to feel with others is filtered to survival-relevant data. Fight and flight are the primary responses — active, energised. When those are unavailable, freeze and fawn emerge as the body's fallback. Protection is not a flaw. It is intelligent design for genuine threat. The problem is when it becomes a permanent address — when what was designed for minutes to hours becomes a lifetime of vigilance.
            </p>

            <h3 style={h3Style}>Control</h3>
            <p style={proseStyle}>
              In a calibrated compass, Control is deliberate, time-limited, and returnable. The system registers that Protection is not enough — the situation requires structure, coordination, or strategic action under pressure. Cognition is recruited. The sequence is strategic: Anticipate, Manage, Override. When the situation resolves, cognition stands down. The compass moves back. Control was a tool. It was used. It was released.
            </p>

            <KeyStatement>
              Connection and Protection happen to you. Control and Domination are what cognition does when recruited into threat service.
            </KeyStatement>

            <h3 style={h3Style}>Domination</h3>
            <p style={proseStyle}>
              Domination is the rarest mode. In a designed-operation compass, it is entered deliberately, used briefly, and followed by return. The person enters it knowing exactly what they are doing. Emotional Resonance drops to near-zero — and the person chose to let it drop because the situation demanded decisive, unambiguous action. The sequence is final: Override, Eliminate, Secure. When the situation resolves, the person exits. The compass moves back. Emotional Resonance returns. The person feels the cost — the weight of having suspended resonance. In a designed-operation compass, this cost is felt and processed.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — hierarchical autonomic responses, social engagement system. <strong style={{ color: TEXT.primary }}>Evolutionary psychology:</strong> cognition evolved to solve survival problems the body alone could not. <strong style={{ color: TEXT.primary }}>Trauma research:</strong> van der Kolk (2014) — the body keeps the score; Levine (1997) — trauma as incomplete threat response, somatic experiencing.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  The four-mode gradient with two body-first and two cognition-first modes. The architectural break between body-first and cognition-first as a qualitative distinction — not just intensity but kind. Connection and Protection are biological responses running for millions of years. Control and Domination require cognition to exist. The presentation of designed-operation Control and Domination <em>before</em> their chronic versions — most clinical frameworks encounter these modes only as problems.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 5: THE GRADIENT ────────────────── */}
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
              The four modes are not four boxes — they are positions on a continuous gradient. There are no hard boundaries. There are shifts, transitions, degrees. The compass needle moves along the gradient. A fluid compass has access to the full range. A stuck compass is locked at one position.
            </p>
            <p style={proseStyle}>
              Transitions between modes follow a characteristic pattern. Connection to Protection is automatic — the nervous system shifts when threat is perceived. Protection to Control involves an architectural break — cognition is recruited into the response. This is the point where the system shifts from body-first to cognition-first. Control to Domination is the crossroads described in F7 — the threshold beyond which cognition is no longer managing threat but overriding the other person's reality entirely.
            </p>
            <p style={proseStyle}>
              The gradient makes the proportionality question visible. The question is not "which box?" but "where on the gradient, and moving in which direction?" A brief shift into Protection during an argument is proportionate. A permanent residence in Control that began in childhood is not. The gradient makes both visible — and makes the difference between them measurable.
            </p>

            <KeyStatement>
              The question is not "which box?" but "where on the gradient, and moving in which direction?"
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Emotion science:</strong> Fredrickson (2001) — broaden-and-build as directional state, positivity ratio as continuous variable. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> McEwen (2000) — allostatic load as cumulative measure of chronic activation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  The gradient as a continuous measure rather than categorical classification. Movement rate, range, and direction as primary variables — not "which state" but "how far, how fast, and can it come back." The gradient makes transitions, degrees, and proportionality visible in a way that categorical models cannot.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 6: STATE DETERMINES CAPACITY ───── */}
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
              What a person can perceive, think, feel, and do depends on their current gradient position. This is not metaphor — it is neurobiological reality. The current state literally shapes the capacities available.
            </p>

            {/* State-Capacity Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr 1.5fr 1.5fr", minWidth: 700 }}>
                {/* Header row */}
                <div style={gridHeaderStyle}>Capacity</div>
                <div style={gridHeaderStyle}>Connection</div>
                <div style={gridHeaderStyle}>Protection</div>
                <div style={gridHeaderStyle}>Control</div>
                <div style={gridHeaderStyle}>Domination</div>
                {/* Perception */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Perception</div>
                <div style={gridCellStyle}>Broad — sees the full field</div>
                <div style={gridCellStyle}>Narrowed — threat-relevant signals</div>
                <div style={gridCellStyle}>Strategic — what needs managing</div>
                <div style={gridCellStyle}>Tunnel — obstacles and resources</div>
                {/* Empathy */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Empathy</div>
                <div style={gridCellStyle}>Full — RE, ER, SEA online</div>
                <div style={gridCellStyle}>Filtered — resonance decreases</div>
                <div style={gridCellStyle}>Redirected — RE serving strategy</div>
                <div style={gridCellStyle}>Collapsed — ER offline; RE may be weaponised</div>
                {/* Cognition */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Cognition</div>
                <div style={gridCellStyle}>Flexible — holds complexity</div>
                <div style={gridCellStyle}>Simplified — binary thinking</div>
                <div style={gridCellStyle}>Strategic — planning, anticipation</div>
                <div style={gridCellStyle}>Locked — rigid, self-confirming</div>
                {/* Learning */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Learning</div>
                <div style={gridCellStyle}>Available</div>
                <div style={gridCellStyle}>Reduced</div>
                <div style={gridCellStyle}>Selective</div>
                <div style={gridCellStyle}>Unavailable</div>
                {/* Relational capacity */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Relational capacity</div>
                <div style={gridCellStyle}>Full — repair, vulnerability, trust</div>
                <div style={gridCellStyle}>Limited — vulnerability dangerous</div>
                <div style={gridCellStyle}>Managed — relationships serve strategy</div>
                <div style={gridCellStyle}>Absent — others are resources or threats</div>
              </div>
            </div>

            <KeyStatement>
              Restore safety first, then expect capacity. If a person cannot learn, cannot empathise, cannot think flexibly — the first question is not "what is wrong with this person?" The first question is: where is their compass?
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Broaden-and-build theory:</strong> Fredrickson (2001) — positive states broaden perception and build resources; threat states narrow both. <strong style={{ color: TEXT.primary }}>Stress and cognition:</strong> Sapolsky (2004) — chronic stress impairs hippocampal function, learning, and flexible cognition. <strong style={{ color: TEXT.primary }}>Developmental neuroscience:</strong> Siegel (2012) — state determines which neural circuits are available.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  State-capacity correspondence tracked across all four modes as a clinically actionable framework. The table maps five dimensions of capacity across four gradient positions — making visible that what looks like "unwillingness" may be neurobiological unavailability. The intervention principle follows directly: restore safety first, then expect capacity.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 7: SAME EMOTION, TWO EXPRESSIONS ─ */}
          <section
            id="same-emotion-two-expressions"
            aria-labelledby="heading-same-emotion"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-same-emotion"
              style={sectionHeadingStyle}
            >
              Same Emotion, Two Expressions
            </h2>

            <p style={proseStyle}>
              In a fluid compass — where RE, ER, and SEA are all online — the same emotion produces different but proportionate responses across all four modes. The person is responding to real conditions, knows what they are doing, and can return. The emotion serves a different function at each gradient position, but it remains a signal, not a distortion.
            </p>

            {/* Fluid Compass Table */}
            <p style={{ ...proseStyle, fontStyle: "italic", color: TEXT.muted, fontSize: 13 }}>
              RE + ER + SEA all online. Responding to real danger. Knows exactly what they{"'"}re doing and why.
            </p>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr 1.5fr 1.5fr", minWidth: 800 }}>
                {/* Header row */}
                <div style={gridHeaderStyle}></div>
                <div style={gridHeaderStyle}>Connection</div>
                <div style={gridHeaderStyle}>Protection</div>
                <div style={gridHeaderStyle}>Control</div>
                <div style={gridHeaderStyle}>Domination</div>
                {/* Duration */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Duration</div>
                <div style={gridCellStyle}>Baseline — designed for sustained living</div>
                <div style={gridCellStyle}>Minutes — activates fast, returns fast</div>
                <div style={gridCellStyle}>Hours to days — when Protection isn{"'"}t enough</div>
                <div style={gridCellStyle}>Hours to days, rare — most extreme response, highest cost</div>
                {/* Trigger logic */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Trigger logic</div>
                <div style={gridCellStyle}>Safety present</div>
                <div style={gridCellStyle}>Real threat activates the body automatically</div>
                <div style={gridCellStyle}>Threat persists beyond minutes — cognitive override kicks in deliberately</div>
                <div style={gridCellStyle}>Threat is extreme or unresolvable — maximum force chosen consciously</div>
                {/* Guilt */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Guilt</div>
                <div style={gridCellStyle}>Acknowledges impact, makes amends — Accountability</div>
                <div style={gridCellStyle}>Recognises shame signal, holds it</div>
                <div style={gridCellStyle}>Owns the harm, justifies nothing</div>
                <div style={gridCellStyle}>Takes decisive corrective action</div>
                {/* Fear */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Fear</div>
                <div style={gridCellStyle}>Reads real threat, stays alert and grounded</div>
                <div style={gridCellStyle}>Mobilises proportionally, body leads</div>
                <div style={gridCellStyle}>Consciously contains the danger</div>
                <div style={gridCellStyle}>Eliminates the threat, knows the cost</div>
                {/* Anger */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Anger</div>
                <div style={gridCellStyle}>Boundary signal — names and repairs</div>
                <div style={gridCellStyle}>Activates defence, proportional and clear</div>
                <div style={gridCellStyle}>Deploys anger strategically, no collateral damage</div>
                <div style={gridCellStyle}>Overrides with force — chosen, deliberate</div>
                {/* Shame */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Shame</div>
                <div style={gridCellStyle}>Vulnerability in service of repair</div>
                <div style={gridCellStyle}>Holds self-blame without losing self</div>
                <div style={gridCellStyle}>Owns the failure, doesn{"'"}t perform it</div>
                <div style={gridCellStyle}>Decisive course correction, no self-destruction</div>
                {/* Sadness */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Sadness</div>
                <div style={gridCellStyle}>Shared grief, genuine empathy</div>
                <div style={gridCellStyle}>Withdraws to process, knows why</div>
                <div style={gridCellStyle}>Uses sadness purposefully, returns</div>
                <div style={gridCellStyle}>Allows grief briefly, acts through it</div>
                {/* Envy */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Envy</div>
                <div style={gridCellStyle}>Turns envy into admiration and learning</div>
                <div style={gridCellStyle}>Feels the gap, uses it as signal</div>
                <div style={gridCellStyle}>Channels envy into strategic action</div>
                <div style={gridCellStyle}>Eliminates the obstacle with full awareness</div>
                {/* Joy */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Joy</div>
                <div style={gridCellStyle}>Play, celebration, full presence</div>
                <div style={gridCellStyle}>Allows joy cautiously, real threat nearby</div>
                <div style={gridCellStyle}>Uses joy deliberately, knows the context</div>
                <div style={gridCellStyle}>Intense, decisive — earned and conscious</div>
                {/* Love */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Love</div>
                <div style={gridCellStyle}>Deepens real closeness and care</div>
                <div style={gridCellStyle}>Protects the bond actively</div>
                <div style={gridCellStyle}>Holds love while managing real danger</div>
                <div style={gridCellStyle}>Protects at all costs — chosen sacrifice</div>
              </div>
            </div>

            <KeyStatement>
              Assess mode position, not the emotion. Anger in Connection and anger in Domination are the same signal producing entirely different outcomes.
            </KeyStatement>

            {/* Mode Lens — Social & Cultural Constructs */}
            <h3 style={h3Style}>Mode Lens — Social &amp; Cultural Constructs</h3>
            <p style={{ ...proseStyle, fontStyle: "italic", color: TEXT.muted, fontSize: 13 }}>
              The same social constructs refract differently at each gradient position. In a fluid compass, the person knows what they are doing and why.
            </p>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1.5fr 1.5fr 1.5fr 1.5fr", minWidth: 800 }}>
                <div style={gridHeaderStyle}></div>
                <div style={gridHeaderStyle}>Connection</div>
                <div style={gridHeaderStyle}>Protection</div>
                <div style={gridHeaderStyle}>Control</div>
                <div style={gridHeaderStyle}>Domination</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power</div>
                <div style={gridCellStyle}>Shared, mutual agency feels safe</div>
                <div style={gridCellStyle}>Feels dangerous — steps back or holds ground consciously</div>
                <div style={gridCellStyle}>Used deliberately to contain real threat</div>
                <div style={gridCellStyle}>Enforced fully aware of the cost — temporary and purposeful</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Virtue / Obedience</div>
                <div style={gridCellStyle}>Integrity means honesty + care</div>
                <div style={gridCellStyle}>Complies where necessary to stay safe, knows they{"'"}re doing it</div>
                <div style={gridCellStyle}>Performs virtue strategically, aware it{"'"}s a tool</div>
                <div style={gridCellStyle}>Drops performance entirely — acts from raw necessity</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Gender Roles</div>
                <div style={gridCellStyle}>Expressive and fluid, emotions are human</div>
                <div style={gridCellStyle}>Performs gender to navigate real danger, aware of the choice</div>
                <div style={gridCellStyle}>Uses gender roles deliberately to manage the situation</div>
                <div style={gridCellStyle}>Overrides gender norms entirely when survival demands it</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Success</div>
                <div style={gridCellStyle}>Sustainability, contribution, and joy</div>
                <div style={gridCellStyle}>Survival mode — focuses only on what keeps them safe</div>
                <div style={gridCellStyle}>Pursues achievement consciously to neutralise threat</div>
                <div style={gridCellStyle}>Dominates to secure survival — knows this is temporary</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Love</div>
                <div style={gridCellStyle}>Freedom, clarity, and mutual growth</div>
                <div style={gridCellStyle}>Protects the bond actively — pulls back to keep it safe</div>
                <div style={gridCellStyle}>Controls access to love deliberately, aware of the risk</div>
                <div style={gridCellStyle}>Holds love fiercely — protection justified by real danger</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Goodness</div>
                <div style={gridCellStyle}>Boundaries and compassion</div>
                <div style={gridCellStyle}>Complies to avoid harm, knows the difference</div>
                <div style={gridCellStyle}>Uses moral framing consciously as a tool</div>
                <div style={gridCellStyle}>Suspends goodness temporarily — acts from necessity</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Provider Role</div>
                <div style={gridCellStyle}>Care, presence, and reciprocity</div>
                <div style={gridCellStyle}>Provides out of obligation temporarily — knows why</div>
                <div style={gridCellStyle}>Providing becomes leverage, used deliberately</div>
                <div style={gridCellStyle}>Uses provision to secure safety — aware of the power dynamic</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Silence / Confrontation</div>
                <div style={gridCellStyle}>Silence means reflection, conflict brings repair</div>
                <div style={gridCellStyle}>Silence feels safer — chooses it deliberately, not from fear</div>
                <div style={gridCellStyle}>Silence is strategy — withholds truth to manage outcome</div>
                <div style={gridCellStyle}>Silence becomes law — enforced consciously to end the threat</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Emotion Expression</div>
                <div style={gridCellStyle}>Signals, shared to connect</div>
                <div style={gridCellStyle}>Hides emotions to stay safe — knows they{"'"}re doing it</div>
                <div style={gridCellStyle}>Uses emotions as tools deliberately, aware of the impact</div>
                <div style={gridCellStyle}>Suppresses emotion fully — chosen, temporary, high cost</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Belonging</div>
                <div style={gridCellStyle}>Authenticity</div>
                <div style={gridCellStyle}>Conforms where necessary — conscious and temporary</div>
                <div style={gridCellStyle}>Uses belonging as currency deliberately</div>
                <div style={gridCellStyle}>Enforces belonging — conscious use of exclusion to neutralise threat</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Progress</div>
                <div style={gridCellStyle}>Collective growth and learning together</div>
                <div style={gridCellStyle}>Pushes forward to survive — focused, temporary</div>
                <div style={gridCellStyle}>Pursues achievement to neutralise the threat consciously</div>
                <div style={gridCellStyle}>Advances through domination — knows the cost, chooses it</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Truth</div>
                <div style={gridCellStyle}>Shared — we seek understanding and repair</div>
                <div style={gridCellStyle}>Protects truth where necessary — aware of what they{"'"}re withholding</div>
                <div style={gridCellStyle}>Becomes selective — used deliberately to defend or persuade</div>
                <div style={gridCellStyle}>Rewrites truth consciously to end the threat — temporary</div>
              </div>
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Affective neuroscience:</strong> Panksepp (1998) — primary emotional systems as functional biological processes, each with distinct action tendencies. <strong style={{ color: TEXT.primary }}>Emotion science:</strong> Frijda (1986) — emotions as action readiness; the same emotion can serve different functions depending on context and state.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  The eight-emotion four-mode mapping showing that mode position, not emotion type, determines outcome. This inverts standard clinical practice: instead of classifying the emotion (anger = problem, joy = goal), the model classifies the mode and reads the emotion within it. The same emotion serves completely different functions depending on gradient position — and in a fluid compass, all four expressions are proportionate.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 8: REGULATION — THE RETURN ──────── */}
          <section
            id="regulation-the-return"
            aria-labelledby="heading-regulation"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-regulation"
              style={sectionHeadingStyle}
            >
              Regulation — The Return
            </h2>

            <p style={proseStyle}>
              Regulation is the built-in mechanism by which the nervous system returns from threat to safety. It is not a skill imposed from outside — it is a process the system was built to run. The body was designed to mobilise for threat and then complete the cycle: the breath that accelerated must slow, the muscles that braced must release, the hormones that flooded must clear. The body does not reason its way back to Connection. It restores through the same somatic channels it departed through.
            </p>
            <p style={proseStyle}>
              Regulation is closer to digestion than to exercise. You do not digest by trying harder. You digest because the system runs when it is not blocked. The body restores when conditions allow — when there is sufficient safety, when the activation is allowed to complete, when no one is interrupting the process with instructions to calm down.
            </p>

            <h3 style={h3Style}>Four Return Pathways</h3>

            {/* Return Pathways Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", minWidth: 500 }}>
                {/* Header row */}
                <div style={gridHeaderStyle}>Pathway</div>
                <div style={gridHeaderStyle}>How It Works</div>
                {/* Breathing */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Breathing</div>
                <div style={gridCellStyle}>Slow exhalation activates the vagal brake, signalling safety to the autonomic system</div>
                {/* Grounding */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Grounding</div>
                <div style={gridCellStyle}>Sensory contact with the present environment recalibrates the system from the threat that was to the reality that is</div>
                {/* Co-regulation */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Co-regulation</div>
                <div style={gridCellStyle}>Another person's regulated nervous system sends safety signals through tone, touch, rhythm, and presence — the most powerful pathway</div>
                {/* Time */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Time</div>
                <div style={gridCellStyle}>The body completing the activation cycle when given space to do so without interruption</div>
              </div>
            </div>

            <KeyStatement>
              When the return is missing, the compass gets stuck. What should have been temporary becomes permanent.
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Polyvagal Theory:</strong> Porges (2011) — ventral vagal system, co-regulation, vagal brake; Dana (2018) — polyvagal exercises. <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — trauma as incomplete threat response, the body completing the cycle. <strong style={{ color: TEXT.primary }}>Interpersonal neurobiology:</strong> Siegel (2012) — integration, window of tolerance, relationship shapes brain architecture.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  Regulation reframed as return, not control. The four return pathways as the nervous system's designed recovery channels — not techniques to be learned but processes to be allowed. The distinction separates regulation (the body completing its cycle) from cognitive management (cognition overriding the body's signals to produce apparent calm). What is commonly called "regulation" is often its opposite.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 9: THE STUCK COMPASS ───────────── */}
          <section
            id="stuck-compass"
            aria-labelledby="heading-stuck-compass"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-stuck-compass"
              style={sectionHeadingStyle}
            >
              The Stuck Compass — When Modes Become Chronic
            </h2>

            <p style={proseStyle}>
              When the return is absent — when the activation cycle never completes, when the compass needle never comes back — the mode that was meant to be temporary becomes permanent. Identity forms around the mode. False coherence (F3) constructs a self-narrative that makes the stuckness feel like character rather than position. The person does not experience being stuck. They experience being themselves.
            </p>

            <h3 style={h3Style}>Chronic Connection</h3>
            <p style={proseStyle}>
              Permanent appeasement. The nervous system locked in the mode designed for safety — but without the capacity to activate Protection when needed. The person in chronic Connection cannot say no, cannot feel anger, cannot set a boundary — not because they lack the knowledge but because the system has learned that activating Protection is more dangerous than staying fused. Emotional Resonance is flooded — the person feels everything everyone around them feels — while Self-Emotional Awareness is gone — they have no access to their own signals. Reading Emotions is locked outward, compulsively scanning others. Chronic Connection looks like healthy Connection from the outside. This is part of what makes it the hardest chronic mode to identify.
            </p>

            <h3 style={h3Style}>Chronic Protection</h3>
            <p style={proseStyle}>
              Permanent vigilance. The nervous system that never received the signal that the threat has passed. Approach-avoidance cycling — wanting connection but reading it as dangerous. Energy consumed by threat-scanning. The body running on emergency fuel indefinitely. Hypervigilance is not anxiety as a personality trait — it is a compass stuck in Protection, doing exactly what it was designed to do, without end.
            </p>

            <h3 style={h3Style}>Chronic Control</h3>
            <p style={proseStyle}>
              Permanent management. Strategic warmth, managed closeness, performed empathy. The person looks functional — often more than functional. They appear organised, competent, relationally skilled. But closeness is managed rather than felt. Vulnerability is performed rather than experienced. Relationships serve strategy rather than connection. Chronic Control is the mode that most reliably mimics Connection, making the stuckness invisible — to others and often to the person themselves.
            </p>

            <h3 style={h3Style}>Chronic Domination</h3>
            <p style={proseStyle}>
              Permanent override. Empathy collapsed or weaponised — Emotional Resonance used to read others for advantage rather than for connection. Tolerance builds — what produced safety yesterday requires more force today. Escalation follows (F7). The person has lost the experience of the cost. In a fluid compass, the cost is felt. In chronic Domination, it has been absorbed into identity. The person does not feel the weight of what they are doing because the weight has become who they believe they are.
            </p>

            {/* Chronic Modes — System Locked Table */}
            <p style={{ ...proseStyle, fontStyle: "italic", color: TEXT.muted, fontSize: 13 }}>
              Mode is the default. Self-Emotional Awareness gone. Emotional distortion runs. Repair degrades.
            </p>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr 1.5fr 1.5fr", minWidth: 800 }}>
                {/* Header row */}
                <div style={gridHeaderStyle}></div>
                <div style={gridHeaderStyle}>Chronic Connection</div>
                <div style={gridHeaderStyle}>Chronic Protection</div>
                <div style={gridHeaderStyle}>Chronic Control</div>
                <div style={gridHeaderStyle}>Chronic Domination</div>
                {/* Duration */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Duration</div>
                <div style={gridCellStyle}>Permanent — the only mode the system knows</div>
                <div style={gridCellStyle}>Permanent alert — alarm never switches off</div>
                <div style={gridCellStyle}>Permanent override — cognitive control is identity</div>
                <div style={gridCellStyle}>Permanent extreme — power is the only safety</div>
                {/* Trigger logic */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Trigger logic</div>
                <div style={gridCellStyle}>No trigger needed — appeasement runs regardless</div>
                <div style={gridCellStyle}>No trigger needed — threat assumed before it arrives</div>
                <div style={gridCellStyle}>No trigger needed — uncertainty itself is the threat</div>
                <div style={gridCellStyle}>No trigger needed — any challenge activates elimination</div>
                {/* Guilt */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Guilt</div>
                <div style={gridCellStyle}>Chronic apology — always the self{"'"}s fault</div>
                <div style={gridCellStyle}>Guilt as permanent shield, never resolved</div>
                <div style={gridCellStyle}>Guilt weaponised to manage others</div>
                <div style={gridCellStyle}>Remorse structurally erased</div>
                {/* Fear */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Fear</div>
                <div style={gridCellStyle}>Hypervigilant caretaking — fear of abandonment drives all</div>
                <div style={gridCellStyle}>Permanent anxiety, safety never trusted</div>
                <div style={gridCellStyle}>Fear of losing control drives all management</div>
                <div style={gridCellStyle}>Fear of exposure drives power — invisible to self</div>
                {/* Anger */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Anger</div>
                <div style={gridCellStyle}>Anger rerouted into guilt — forbidden, no outlet</div>
                <div style={gridCellStyle}>Permanent reactive defence, no stand-down</div>
                <div style={gridCellStyle}>Rage as management tool, framed as logic</div>
                <div style={gridCellStyle}>Rage and contempt as default — punishment and coercion</div>
                {/* Shame */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Shame</div>
                <div style={gridCellStyle}>Compulsive vulnerability — self-erasure as identity</div>
                <div style={gridCellStyle}>Self-blame is permanent identity</div>
                <div style={gridCellStyle}>Hidden permanently under superiority</div>
                <div style={gridCellStyle}>Humiliation projected outward — others carry it</div>
                {/* Sadness */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Sadness</div>
                <div style={gridCellStyle}>Invisible pain — repairs others, never self</div>
                <div style={gridCellStyle}>Permanently withdrawn, no reconnection</div>
                <div style={gridCellStyle}>Guilt-tripping as relational default</div>
                <div style={gridCellStyle}>Vulnerability weaponised — others{"'"} pain as leverage</div>
                {/* Envy */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Envy</div>
                <div style={gridCellStyle}>Chronic self-diminishment — admires, never claims</div>
                <div style={gridCellStyle}>Permanently less-than, no growth possible</div>
                <div style={gridCellStyle}>Compulsive competition, zero-sum always</div>
                <div style={gridCellStyle}>What is envied must be destroyed</div>
                {/* Joy */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Joy</div>
                <div style={gridCellStyle}>Performed happiness — exhausting, empty</div>
                <div style={gridCellStyle}>Joy inaccessible — calm feels dangerous</div>
                <div style={gridCellStyle}>Flaunted for status, never genuine</div>
                <div style={gridCellStyle}>Sadistic pleasure — others{"'"} suffering as the source</div>
                {/* Love */}
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Love</div>
                <div style={gridCellStyle}>Self-abandoning — love as complete merger</div>
                <div style={gridCellStyle}>Clinging, terror of loss, can never trust</div>
                <div style={gridCellStyle}>All love conditional and transactional</div>
                <div style={gridCellStyle}>Love as ownership and control</div>
              </div>
            </div>

            {/* Chronic Mode Lens — Social & Cultural Constructs */}
            <h3 style={h3Style}>Chronic Mode Lens — Social &amp; Cultural Constructs</h3>
            <p style={{ ...proseStyle, fontStyle: "italic", color: TEXT.muted, fontSize: 13 }}>
              When the compass is stuck, social constructs stop being tools and become prisons. Self-Emotional Awareness gone. The person no longer knows they are doing it.
            </p>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1.5fr 1.5fr 1.5fr 1.5fr", minWidth: 800 }}>
                <div style={gridHeaderStyle}></div>
                <div style={gridHeaderStyle}>Chronic Connection</div>
                <div style={gridHeaderStyle}>Chronic Protection</div>
                <div style={gridHeaderStyle}>Chronic Control</div>
                <div style={gridHeaderStyle}>Chronic Domination</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power</div>
                <div style={gridCellStyle}>Feels dangerous — compulsively yields to others</div>
                <div style={gridCellStyle}>Seeks safety through control or withdrawal — permanent</div>
                <div style={gridCellStyle}>A tool to dominate or avoid vulnerability</div>
                <div style={gridCellStyle}>Enforced — others{"'"} safety feels irrelevant</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Virtue / Obedience</div>
                <div style={gridCellStyle}>Integrity collapses into chronic compliance</div>
                <div style={gridCellStyle}>Obedience feels necessary to avoid rejection — always</div>
                <div style={gridCellStyle}>Virtue becomes performance, being {"\""}good{"\""}  for approval</div>
                <div style={gridCellStyle}>Virtue becomes performance, being {"\""}good{"\""}  for dominance</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Gender Roles</div>
                <div style={gridCellStyle}>Performs gender compulsively to remain acceptable</div>
                <div style={gridCellStyle}>Performs gender permanently to stay safe</div>
                <div style={gridCellStyle}>Weaponises or idealises gender roles to gain control</div>
                <div style={gridCellStyle}>Gender used to rank, suppress, or exploit</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Success</div>
                <div style={gridCellStyle}>Not failing others — self{"'"}s needs invisible</div>
                <div style={gridCellStyle}>Survival — fear of failure drives everything</div>
                <div style={gridCellStyle}>Validation and superiority</div>
                <div style={gridCellStyle}>Domination — others{"'"} failure ensures status</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Love</div>
                <div style={gridCellStyle}>Self-erasure — merger as the only safety</div>
                <div style={gridCellStyle}>Protection — fear of loss or rejection dominates</div>
                <div style={gridCellStyle}>Control — affection used to gain safety</div>
                <div style={gridCellStyle}>Possession — control justified as care</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Goodness</div>
                <div style={gridCellStyle}>Compliance — guilt for saying no</div>
                <div style={gridCellStyle}>Compliance — guilt for saying no</div>
                <div style={gridCellStyle}>Moral superiority — others are shamed</div>
                <div style={gridCellStyle}>Purity enforcement — fear as the tool</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Provider Role</div>
                <div style={gridCellStyle}>Compulsory self-sacrifice, no reciprocity</div>
                <div style={gridCellStyle}>Permanent obligation or self-sacrifice</div>
                <div style={gridCellStyle}>Proof of worth or leverage</div>
                <div style={gridCellStyle}>Control — dependence used as power</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Silence / Confrontation</div>
                <div style={gridCellStyle}>Self-erasure — conflict is forbidden</div>
                <div style={gridCellStyle}>Silence feels safer — conflict feels permanently dangerous</div>
                <div style={gridCellStyle}>Strategy — truth is permanently withheld</div>
                <div style={gridCellStyle}>Law — conflict becomes punishment</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Emotion Expression</div>
                <div style={gridCellStyle}>Hidden to keep others comfortable</div>
                <div style={gridCellStyle}>Hidden permanently to stay safe</div>
                <div style={gridCellStyle}>Tools — expressed only to manipulate outcomes</div>
                <div style={gridCellStyle}>Weakness — suppression is mandatory</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Belonging</div>
                <div style={gridCellStyle}>Permanent conformity — authenticity lost</div>
                <div style={gridCellStyle}>Conformity — any difference feels dangerous</div>
                <div style={gridCellStyle}>Currency — inclusion and exclusion as manipulation</div>
                <div style={gridCellStyle}>Submission — exclusion becomes control</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Progress</div>
                <div style={gridCellStyle}>Serving others{"'"} growth — self erased</div>
                <div style={gridCellStyle}>Survival — permanently pushing to stay safe</div>
                <div style={gridCellStyle}>Achievement for status and comparison — always</div>
                <div style={gridCellStyle}>Domination — others{"'"} erasure ensures advancement</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Truth</div>
                <div style={gridCellStyle}>Suppressed to protect others from discomfort</div>
                <div style={gridCellStyle}>Permanently risky — self-protection from consequences</div>
                <div style={gridCellStyle}>Selective — permanently used to defend or persuade</div>
                <div style={gridCellStyle}>Controlled — rewritten to maintain power</div>
              </div>
            </div>

            <KeyStatement>
              The person in chronic Control is not "a controlling person." They are a person whose compass has been stuck in Control — likely since childhood — because the return was never learned.
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Trauma research:</strong> van der Kolk (2014) — the body keeps the score; Herman (1992) — complex trauma and identity-level effects. <strong style={{ color: TEXT.primary }}>Attachment theory:</strong> Bowlby (1969) — internal working models shaped by early experience; Main & Hesse (1990) — disorganised attachment. <strong style={{ color: TEXT.primary }}>Schema therapy:</strong> Young, Klosko, & Weishaar (2003) — early maladaptive schemas as chronic patterns built from unmet needs.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  Chronic modes visible as positions, not personalities. The person is not "a controlling person" — they are a person stuck in Control. The identity built around the mode is false coherence (F3), not character. This reframe shifts the clinical question from "what kind of person is this?" to "where is their compass stuck, and why can't the needle move?"
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 10: TWO INFORMATION SYSTEMS ────── */}
          <section
            id="two-information-systems"
            aria-labelledby="heading-two-information-systems"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-two-information-systems"
              style={sectionHeadingStyle}
            >
              The Two Information Systems
            </h2>

            <p style={proseStyle}>
              Two parallel information systems run simultaneously at different speeds. They process different kinds of data, learn differently, and update at different rates. Both are always running. Neither can replace the other.
            </p>

            <h3 style={h3Style}>Emotional-Somatic System</h3>
            <p style={proseStyle}>
              Milliseconds. Unconscious. Experience-based. Slow to update. This is the system that runs the compass — the one that orients between safety and threat before conscious awareness begins. It learns from experience, not explanation. It updates through lived events, not insight. When someone understands cognitively that a situation is safe but their body still braces, this system is the reason. It has not received the update because the update it needs is experiential, not informational.
            </p>

            <h3 style={h3Style}>Cognitive-Logical System</h3>
            <p style={proseStyle}>
              Hundreds of milliseconds. Conscious. Explanation-based. Fast to update. This is the system that processes information, constructs narratives, plans, analyses. It can update instantly with new information. It can understand a concept in a single conversation. But it does not run the compass. Cognition can understand a pattern without being able to change it — because understanding is cognitive and the compass is somatic.
            </p>

            <KeyStatement>
              Understanding is cognitive. The compass is somatic. More cognition doesn't move a somatic compass. What moves the compass is experience.
            </KeyStatement>

            <p style={proseStyle}>
              This explains the insight-behaviour gap — the universal experience of understanding something clearly and being unable to act on it. The cognitive system has the information. The somatic system has not received it. They are running on different timescales, learning from different inputs. Cognitive insight moves the cognitive system. Only experience moves the somatic one.
            </p>
            <p style={proseStyle}>
              The clinical implication is direct: interventions that target the cognitive system (psychoeducation, cognitive reframing, insight-based therapy) can change understanding but may not change the compass position. Interventions that target the emotional-somatic system (body-based therapy, co-regulation, corrective relational experience) are predicted to produce more compass movement — because they speak the language the compass actually runs on.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Dual-process theory:</strong> Kahneman (2011) — System 1 (fast, automatic) and System 2 (slow, deliberate); Stanovich, Evans — dual-process frameworks in reasoning and decision-making. <strong style={{ color: TEXT.primary }}>Somatic markers:</strong> Damasio (1994) — the body's signals guide decisions below conscious awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  The insight-behaviour gap as a testable prediction: cognitive interventions should produce less compass movement than somatic/relational interventions. Interventions matched to the emotional-somatic system are predicted to produce more compass movement than those matched to the cognitive-logical system. The framing explains why "knowing better" does not automatically produce "doing differently" — and makes the mechanism for that gap clinically actionable.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── RELATIONSHIP TO FRAMEWORKS ──────────────── */}
          <section
            id="relationship-to-frameworks"
            aria-labelledby="heading-relationship-to-frameworks"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-relationship-to-frameworks"
              style={sectionHeadingStyle}
            >
              Relationship to Frameworks
            </h2>

            <p style={proseStyle}>
              M1 is the applied instrument. The frameworks provide the depth scientific architecture behind it. M1 draws most directly from these frameworks:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 12,
                marginBottom: 24,
              }}
            >
              {/* F1 Card */}
              <Link
                href="/framework/f1-emotional-gradient"
                style={{
                  padding: 16,
                  background: hexToRgba(SPECTRUM.azure, 0.06),
                  borderRadius: 8,
                  border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 600, color: SPECTRUM.azure, fontFamily: FONT.mono, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  F1
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 4 }}>
                  The Emotional Gradient
                </div>
                <div style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6 }}>
                  Primary source. The full scientific foundation for the compass, the four modes, and biological restoration. M1 is the applied tool; F1 is the depth account.
                </div>
              </Link>

              {/* F3 Card */}
              <Link
                href="/framework/f3-false-coherence"
                style={{
                  padding: 16,
                  background: hexToRgba(SPECTRUM.azure, 0.06),
                  borderRadius: 8,
                  border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 600, color: SPECTRUM.azure, fontFamily: FONT.mono, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  F3
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 4 }}>
                  False Coherence
                </div>
                <div style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6 }}>
                  What maintains a stuck compass. How identity forms around the mode, making the stuckness invisible from the inside.
                </div>
              </Link>

              {/* F7 Card */}
              <Link
                href="/framework/f7-domination-regulates"
                style={{
                  padding: 16,
                  background: hexToRgba(SPECTRUM.azure, 0.06),
                  borderRadius: 8,
                  border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 600, color: SPECTRUM.azure, fontFamily: FONT.mono, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  F7
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 4 }}>
                  Domination Regulates
                </div>
                <div style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6 }}>
                  Escalation across the gradient. How Control crosses into Domination, and how tolerance builds.
                </div>
              </Link>

              {/* F12 Card */}
              <Link
                href="/framework/f12-two-information-systems"
                style={{
                  padding: 16,
                  background: hexToRgba(SPECTRUM.azure, 0.06),
                  borderRadius: 8,
                  border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 600, color: SPECTRUM.azure, fontFamily: FONT.mono, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  F12
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 4 }}>
                  The Two Information Systems
                </div>
                <div style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6 }}>
                  The underlying architecture. Why understanding doesn't change the compass. Why experience does.
                </div>
              </Link>

              {/* M2 Card */}
              <Link
                href="/model/m2-three-awareness-capacities"
                style={{
                  padding: 16,
                  background: hexToRgba(SPECTRUM.azure, 0.06),
                  borderRadius: 8,
                  border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 600, color: SPECTRUM.azure, fontFamily: FONT.mono, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  M2
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 4 }}>
                  Three Awareness Capacities
                </div>
                <div style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6 }}>
                  Paired model — the calibration. What determines how well the compass works: the awareness capacities that develop (or don't) in the relational environment.
                </div>
              </Link>

              {/* M3 Card */}
              <Link
                href="/model/m3-the-open-cycle"
                style={{
                  padding: 16,
                  background: hexToRgba(SPECTRUM.indigo, 0.06),
                  borderRadius: 8,
                  border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.15)}`,
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 600, color: SPECTRUM.indigo, fontFamily: FONT.mono, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  M3
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 4 }}>
                  The Open Cycle
                </div>
                <div style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6 }}>
                  Paired model — the physiology. The biological cascade underneath the compass. What the body does when the return is blocked, why the needle gets stuck, and what completion actually requires.
                </div>
              </Link>
            </div>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="m1-inner-compass" type="model" />

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
                    label="Understand what determines how well the compass works"
                    href="/model/m2-three-awareness-capacities"
                    linkText="M2: Three Awareness Capacities &rarr;"
                  />
                  <NavRow
                    label="Understand the physiological foundation of the compass"
                    href="/model/m3-the-open-cycle"
                    linkText="M3: The Open Cycle &rarr;"
                  />
                  <NavRow
                    label="See all twelve frameworks"
                    href="/frameworks-map"
                    linkText="12 Frameworks Map &rarr;"
                  />
                  <NavRow
                    label="Understand the foundational theory behind this model"
                    href="/framework/f1-emotional-gradient"
                    linkText="F1: Emotions as Biological Information &rarr;"
                  />
                  <NavRow
                    label="Understand what maintains a stuck compass"
                    href="/framework/f3-false-coherence"
                    linkText="F3: False Coherence &rarr;"
                  />
                  <NavRow
                    label="Explore the interactive tools"
                    href="https://teg-blue.com/emotional-tools"
                    linkText="teg-blue.com &rarr;"
                    external
                  />
                  <NavRow
                    label="Collaborate on validating this model"
                    href="/collaborate"
                    linkText="Collaborate &rarr;"
                  />
                </tbody>
              </table>
            </div>
          </section>
        </article>

      </main>

      <SiteFooter />

      {/* ─── JSON-LD: ScholarlyArticle ──────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/model/m1-inner-compass#article",
            headline: "Inner Compass & Four-Mode Gradient: The Instrument",
            description:
              "How the nervous system orients between safety and threat across four modes on a continuous gradient. Model M1 of the TEG-Blue system.",
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
            datePublished: "2026-03-05",
            dateModified: "2026-03-05",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue Models & Frameworks",
              url: "https://teg-blue.org/frameworks-map",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/model/m1-inner-compass",
            },
            about: [
              { "@type": "Thing", name: "Inner Compass" },
              { "@type": "Thing", name: "Four-Mode Gradient" },
              { "@type": "Thing", name: "Nervous System Regulation" },
              { "@type": "Thing", name: "Polyvagal Theory" },
              { "@type": "Thing", name: "Safety-Threat Orientation" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Affective Neuroscience (Panksepp, 1998)" },
              { "@type": "ScholarlyArticle", name: "Descartes' Error (Damasio, 1994)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Waking the Tiger (Levine, 1997)" },
              { "@type": "ScholarlyArticle", name: "The Developing Mind (Siegel, 2012)" },
              { "@type": "ScholarlyArticle", name: "Thinking, Fast and Slow (Kahneman, 2011)" },
            ],
            keywords: [
              "inner compass",
              "four-mode gradient",
              "nervous system regulation",
              "safety-threat orientation",
              "stuck compass",
              "state determines capacity",
              "two information systems",
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
              { name: "Models", url: "/models" },
              { name: "M1: Inner Compass", url: "/model/m1-inner-compass" },
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
                question: "What is the Inner Compass model?",
                answer:
                  "The Inner Compass is a model for understanding how the nervous system continuously orients between safety and threat. It uses the metaphor of a compass with a moving needle — health is not a fixed position but the capacity of the needle to move fluidly across four modes (Connection, Protection, Control, Domination) and return to Connection.",
              },
              {
                question: "What are the four modes of the Inner Compass?",
                answer:
                  "The four modes are Connection (body-first, safety perceived — the home base), Protection (body-first, threat perceived — emergency system), Control (cognition-first, deliberate strategic response), and Domination (cognition-first, maximum override — rarest mode). They sit on a continuous gradient, not as discrete categories.",
              },
              {
                question: "What does 'state determines capacity' mean?",
                answer:
                  "State determines capacity means that what a person can perceive, think, feel, and do depends on their current position on the gradient. In Connection, perception is broad and empathy is full. In threat modes, these capacities progressively narrow. The inability to empathise in a given moment may not be unwillingness — the current state has literally reduced the neurobiological capacity to do so.",
              },
              {
                question: "What is a stuck compass?",
                answer:
                  "A stuck compass is one where the needle has lost its capacity to move — what should have been a temporary orientation (Protection, Control, or Domination) has become a chronic position. The person does not experience being stuck; they experience it as 'just who I am.' Identity forms around the mode through false coherence (F3), making the stuckness invisible from the inside.",
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
  letterSpacing: "-0.01em",
  marginBottom: 16,
  paddingBottom: 8,
  borderBottom: `2px solid ${hexToRgba(SPECTRUM.azure, 0.2)}`,
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

const keyStatementStyle = {
  margin: 0,
  padding: "16px 20px",
  borderLeft: `3px solid ${SPECTRUM.azure}`,
  background: hexToRgba(SPECTRUM.azure, 0.06),
  borderRadius: "0 6px 6px 0",
  fontSize: 15,
  fontWeight: 500,
  color: TEXT.primary,
  lineHeight: 1.6,
  marginBottom: 20,
};

const expandableRowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 6,
  marginTop: 4,
};

const gridHeaderStyle = {
  padding: "10px 12px",
  background: hexToRgba(SPECTRUM.azure, 0.1),
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

function KeyStatement({ children }) {
  return (
    <blockquote
      style={{
        padding: "16px 20px",
        margin: "0 0 16px",
        background: hexToRgba(SPECTRUM.azure, 0.06),
        borderRadius: 8,
        borderLeft: `4px solid ${SPECTRUM.azure}`,
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

function NavRow({ label, href, linkText, external }) {
  const linkStyle = {
    color: SPECTRUM.azure,
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
