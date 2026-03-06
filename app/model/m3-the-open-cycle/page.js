import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPACING, SPECTRUM,
  hexToRgba, RESEARCHER, PATTERN_GRADIENT,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ResearcherHero,
  PropositionBox, ExpandableSection,
} from "@/src/components";
import OpenCycleExplorer from "@/src/components/OpenCycleExplorer";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/src/lib/jsonld";

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "The Open Cycle (M3) | TEG-Blue Research",
  description:
    "The physiological sequence that runs when the nervous system perceives a threat, what the body does when that sequence is allowed to complete, and what happens when cognition overrides it instead. Model M3 of the TEG-Blue system.",
  keywords: [
    "open cycle",
    "stress cycle",
    "HPA axis",
    "cortisol",
    "allostatic load",
    "emotional suppression",
    "threat cascade",
    "biological completion",
    "signal submersion",
    "cognitive override",
    "emotional technology",
    "nervous system regulation",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m3-the-open-cycle",
  },
  openGraph: {
    title: "The Open Cycle — M3 Model | TEG-Blue",
    description:
      "The biology of unfinished emotion: what happens when a threat response activates and the cycle is not allowed to complete. The physiological foundation of the TEG-Blue system.",
    url: "https://teg-blue.org/model/m3-the-open-cycle",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Open Cycle — TEG-Blue M3",
    description:
      "The biology of unfinished emotion. Why the body cannot receive a philosophical decision. Why the signal does not stop when access to it does.",
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function M3TheOpenCyclePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/model/m3-the-open-cycle" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${SPACING.pagePadding} 60px`,
        }}
      >
        <ResearcherHero
          badge="MODEL M3"
          title="The Open Cycle"
          subtitle="The Biology of Unfinished Emotion"
          description="The physiological sequence that runs when the nervous system perceives a threat, what the body does when that sequence is allowed to complete, and what happens when cognition overrides it instead. Why the body cannot receive a philosophical decision. Why the signal does not stop when access to it does."
        />

        {/* ─── INTERACTIVE DIAGRAM ──────────────────────── */}
        <OpenCycleExplorer />

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
              ["#threat-cascade", "1. The Threat Cascade"],
              ["#completion", "2. What Completion Requires"],
              ["#override", "3. The Override Mechanism"],
              ["#stays-active", "4. What Stays Active"],
              ["#accumulation", "5. The Accumulation Effect"],
              ["#why-cognition-fails", "6. Why Cognition Cannot Close the Cycle"],
              ["#gradient", "7. The Open Cycle and the Gradient"],
              ["#relationship-to-frameworks", "Relationship to Frameworks"],
              ["#where-to-go-next", "Where to Go Next"],
            ].map(([href, label]) => (
              <li key={href} style={{ marginBottom: 6 }}>
                <a
                  href={href}
                  style={{
                    fontSize: 13,
                    color: SPECTRUM.indigo,
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
                  When the nervous system perceives a threat, a precise biological cascade activates — hormonal, neurochemical, and organ-level — before any conscious thought forms
                </li>
                <li style={propositionItemStyle}>
                  This cascade was designed to complete: activation → expression → parasympathetic return → cortisol clearance → baseline. The body has a built-in endpoint
                </li>
                <li style={propositionItemStyle}>
                  When cognition overrides the emotion — labelling it irrelevant, dangerous, or weak — the override reaches awareness, not biology. The cascade continues below the threshold of access
                </li>
                <li style={propositionItemStyle}>
                  The signal without return is not a suppressed feeling. It is an open biological cycle: cortisol still releasing, amygdala still sensitising, organs still in survival configuration
                </li>
                <li style={propositionItemStyle}>
                  Each unprocessed cycle adds to allostatic load — measurable cumulative wear on the body{"'"}s regulatory systems
                </li>
                <li style={propositionItemStyle}>
                  The body has no mechanism for receiving philosophical decisions. Deciding an emotion is not important does not change the cortisol level. The cherry is there whether it is seen or not
                </li>
                <li style={propositionItemStyle}>
                  This is the physiological substrate that explains why the gradient exists — why regulation substitutes multiply, why the compass gets stuck, why insight alone does not produce change
                </li>
              </ul>
            </PropositionBox>
          </section>

          {/* ─── CONCEPT 1: THE THREAT CASCADE ──────────── */}
          <section
            id="threat-cascade"
            aria-labelledby="heading-threat-cascade"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-threat-cascade"
              style={sectionHeadingStyle}
            >
              1. The Threat Cascade
            </h2>

            <p style={proseStyle}>
              Robert Sapolsky spent decades studying what stress does to the body. His central finding — documented across baboon populations and human physiology — is that the stress response is an extraordinarily precise biological machine, designed for short-term emergencies and genuinely destructive when it runs without end. Joseph LeDoux mapped exactly how that machine starts: the amygdala fires within twelve milliseconds of perceiving a threat, faster than any conscious thought can form. Stephen Porges showed that what the amygdala is responding to is not the objective situation but the nervous system{"'"}s continuous subconscious evaluation of safety — what he called neuroception.
            </p>
            <p style={proseStyle}>
              The HPA axis fires: the hypothalamus releases CRH, the pituitary releases ACTH, the adrenal glands release cortisol. Simultaneously, epinephrine and norepinephrine surge. Heart rate rises. Digestion stops. Muscles brace. Blood flow to the prefrontal cortex decreases as the brainstem and limbic system take priority. Every organ system shifts to survival configuration.
            </p>
            <p style={proseStyle}>
              What this literature did not do — because it was not its question — was connect this cascade to specific named emotions as the person lives them. {"\""} Stress activation{"\""} in the research literature dissolves shame, grief, rage, longing, and humiliation into a single undifferentiated category of threat response. The biology is precise. The felt experience disappears into it.
            </p>

            <KeyStatement>
              The body had already begun responding before the mind had decided whether the threat was real. This sequencing is not a design flaw. It is a survival feature. But it means the physiological response cannot simply be cancelled by deciding the emotion is unnecessary.
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Threat detection:</strong> LeDoux (1996) — dual-pathway threat detection, amygdala firing before cortical processing. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) — the HPA axis, cortisol, and the whole-body reconfiguration of the stress response. <strong style={{ color: TEXT.primary }}>Neuroception:</strong> Porges (2011) — continuous subconscious evaluation preceding and faster than conscious awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  The connection between the specific felt emotion and the specific biological cascade — held together, not dissolved into generic {"\""} stress.{"\""} The shame that gets overridden in a meeting and the cortisol pattern that follows are the same event described from two angles. Making that explicit changes what override means.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 2: WHAT COMPLETION REQUIRES ────── */}
          <section
            id="completion"
            aria-labelledby="heading-completion"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-completion"
              style={sectionHeadingStyle}
            >
              2. What Completion Requires
            </h2>

            <p style={proseStyle}>
              Peter Levine noticed something in his clinical work that the stress physiology literature had not fully theorised: animals that survive predator encounters shake. The shaking is not distress — it is the nervous system running a discharge sequence. The threat has passed; the body is completing what the activation started. Levine{"'"}s central insight was that humans have the same built-in completion sequence — and that trauma occurs specifically when that sequence is interrupted before it can finish.
            </p>
            <p style={proseStyle}>
              Emily and Amelia Nagoski extended this into everyday emotional life. Their contribution was showing that the stress cycle — not just traumatic activation but ordinary emotional arousal — has a biological endpoint that requires specific inputs to reach. The cycle does not complete because time passes or because the mind decides it is over. It completes because the body runs through the sequence it was designed to run.
            </p>

            <h3 style={h3Style}>The Return Sequence</h3>
            <p style={proseStyle}>
              The return sequence runs in order. Expression first: trembling, crying, movement, breath change, vocalisation. The body discharges the mobilised energy through the channels it was designed to use. Emotional tears contain stress hormones — this is not poetic, it is measurable. The discharge activates the parasympathetic return. The vagus nerve engages the ventral vagal complex. Heart rate slows. The gut re-engages. The face softens. Social engagement comes back online.
            </p>
            <p style={proseStyle}>
              Cortisol clearance follows — but only if the discharge has begun. The hippocampus sends feedback to the hypothalamus: the cascade can stop. This negative feedback loop is the biological all-clear. Without it, the hypothalamus continues producing CRH, which continues producing cortisol. The axis keeps running not because it is malfunctioning but because it never received the signal to stop.
            </p>

            <KeyStatement>
              Regulation is not a skill imposed from outside. It is a process the body was built to run. What is commonly called {"'"}regulation{"'"} is often its opposite — cognition overriding the body{"'"}s signals to produce apparent calm while the cycle runs on beneath it.
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — trauma as incomplete threat response; the body completing the cycle through discharge. <strong style={{ color: TEXT.primary }}>Stress cycle completion:</strong> Nagoski &amp; Nagoski (2019) — the biological stress cycle requires completion, not management. <strong style={{ color: TEXT.primary }}>Vagal pathways:</strong> Porges (2011) — the vagal brake, ventral vagal complex, co-regulation as the primary completion pathway.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  The stage-by-stage physiological mechanism of completion — why each stage is necessary for the next to occur, and specifically what the hippocampal feedback loop requires. Completion is not metaphorical. It is a biological sequence with identifiable conditions. Understanding those conditions precisely changes what {"'"}not completing{"'"} means.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 3: THE OVERRIDE MECHANISM ──────── */}
          <section
            id="override"
            aria-labelledby="heading-override"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-override"
              style={sectionHeadingStyle}
            >
              3. The Override Mechanism
            </h2>

            <p style={proseStyle}>
              James Gross at Stanford built a rigorous research programme around emotional regulation — specifically around what happens when people suppress emotional expression. His finding was counterintuitive and important: suppression reduces expressive behaviour while maintaining and often amplifying physiological arousal. The person looks calmer. The body is not calmer. The gap between the external presentation and the internal state is not resolved by suppression — it is widened.
            </p>
            <p style={proseStyle}>
              That architecture is this: cognitive override does not reach the body. When cognition decides an emotion is irrelevant, inappropriate, or dangerous, it overrides the person{"'"}s access to the signal. It does not override the signal. The amygdala does not receive the memo. The HPA axis does not pause mid-cascade to consult the prefrontal cortex. The cortisol already released does not reabsorb because the mind decided the threat was not worth responding to.
            </p>

            <h3 style={h3Style}>Parallel Tracks</h3>
            <p style={proseStyle}>
              The sequence of override runs on parallel tracks. The mind detects the emotion arising and labels it — as weakness, as overreaction, as something to manage later. Attention redirects to analysis or narrative construction. The mind concludes the emotion is handled. Meanwhile: epinephrine and norepinephrine sustain the arousal state. Muscles stay braced. The gut stays diverted. Cortisol keeps releasing. The hippocampus — which needs the discharge phase to have begun before it can send the all-clear — receives no discharge signal. The HPA negative feedback loop does not trigger. The cycle stays open.
            </p>

            <KeyStatement>
              What the override removes is access to the signal — not the signal itself. The body is already feeling it. There is no version of {"'"}deciding{"'"} an emotion is not there that changes the physiological fact of it. The cherry is there. Deciding it is invisible is not the same as it not being there.
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Emotion suppression:</strong> Gross (1998) — suppression reduces expressive behaviour while maintaining physiological arousal. <strong style={{ color: TEXT.primary }}>Somatic markers:</strong> Damasio (1994) — the body{"'"}s signals run below and faster than conscious awareness; cognition cannot cancel them. <strong style={{ color: TEXT.primary }}>Body memory:</strong> van der Kolk (2014) — unprocessed activation is stored somatically, not resolved cognitively.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  The step-by-step parallel-track account of override — what the mind does and what the body does simultaneously, and why the two tracks do not converge. The mechanism behind Gross{"'"}s finding: the body maintains arousal not despite the suppression but because the suppression intercepts the only pathway through which the arousal could end. Named for the first time as <em>signal submersion</em>: access collapses, the signal runs.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 4: WHAT STAYS ACTIVE ───────────── */}
          <section
            id="stays-active"
            aria-labelledby="heading-stays-active"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-stays-active"
              style={sectionHeadingStyle}
            >
              4. What Stays Active
            </h2>

            <p style={proseStyle}>
              Bruce McEwen coined the term allostatic load to describe what chronic stress activation costs the body — measurable, cumulative, physiological wear across cardiovascular, immune, metabolic, and neurological systems. The load is not metaphorical. It shows up in blood panels, in hippocampal MRI scans, in inflammatory markers, in cortisol receptor density.
            </p>

            <h3 style={h3Style}>System-by-System Residue</h3>

            {/* Residue table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>System</div>
                <div style={gridHeaderStyle}>What Stays Active</div>
                <div style={gridHeaderStyle}>What It Feels Like</div>

                <GridCell first>Cortisol</GridCell>
                <GridCell>Remains elevated — suppresses immune, disrupts sleep, impairs hippocampus, sensitises amygdala</GridCell>
                <GridCell>Wired but tired, difficulty sleeping, getting sick more often</GridCell>

                <GridCell first>Epinephrine / Norepinephrine</GridCell>
                <GridCell>Remain above baseline — sustained low-grade arousal</GridCell>
                <GridCell>Chronic anxiety, body cannot fully rest</GridCell>

                <GridCell first>Amygdala</GridCell>
                <GridCell>Sensitised — fires faster, lower threshold</GridCell>
                <GridCell>Overreacting to small things, disproportionate responses</GridCell>

                <GridCell first>Serotonin</GridCell>
                <GridCell>Depleted under sustained cortisol</GridCell>
                <GridCell>Irritability hours later, impulse control weakened</GridCell>

                <GridCell first>Oxytocin</GridCell>
                <GridCell>Suppressed — reduced safety signalling</GridCell>
                <GridCell>Difficulty being comforted, co-regulation feels impossible</GridCell>

                <GridCell first>Prefrontal Cortex</GridCell>
                <GridCell>Under-perfused — reduced blood flow</GridCell>
                <GridCell>Binary thinking, rigid, defensive, self-confirming</GridCell>

                <GridCell first>Gut-Brain Axis</GridCell>
                <GridCell>Disengaged — interoceptive signalling reduced</GridCell>
                <GridCell>The body knows less about itself, gut feelings go silent</GridCell>
              </div>
            </div>

            <KeyStatement>
              The accumulation is not in the mind. It is in the cortisol receptor density, the hippocampal volume, the vagal tone, the amygdala sensitivity threshold. Understanding the accumulation cognitively does not reverse it — because the understanding happens in the cognitive system and the accumulation happened in the biological one.
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen (2000) — cumulative physiological cost of chronic activation. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) — organ-level consequences of sustained cortisol. <strong style={{ color: TEXT.primary }}>Interoception:</strong> Craig (2002); Damasio (1994) — how chronic activation impairs the body{"'"}s capacity to read its own internal state.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  The system-by-system account of what stays active after a single unfinished cycle — not just accumulated over years but present in the hours after a single override. This makes the cost concrete and immediate rather than cumulative and abstract. And it connects each physiological residue directly to the felt experience: depleted serotonin is the irritability that appears hours later; suppressed oxytocin is the difficulty being comforted; the sensitised amygdala is the disproportionate reaction to the next small thing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 5: THE ACCUMULATION EFFECT ─────── */}
          <section
            id="accumulation"
            aria-labelledby="heading-accumulation"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-accumulation"
              style={sectionHeadingStyle}
            >
              5. The Accumulation Effect
            </h2>

            <p style={proseStyle}>
              McEwen{"'"}s allostatic load research was built on a crucial observation: the body is resilient. A single stress activation, followed by sufficient recovery, leaves little permanent trace. The problem is not the single event. The problem is the pattern — specifically, activation without recovery, repeated across time.
            </p>

            {/* Accumulation progression */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>Load Level</div>
                <div style={gridHeaderStyle}>Physiological State</div>
                <div style={gridHeaderStyle}>Consequence</div>

                <GridCell first>Low</GridCell>
                <GridCell>Baseline slightly elevated, recovery between activations still possible</GridCell>
                <GridCell>Resilient — recoverable with rest, movement, co-regulation</GridCell>

                <GridCell first>Medium</GridCell>
                <GridCell>HPA axis begins to dysregulate, amygdala sensitises progressively</GridCell>
                <GridCell>The next cycle fires faster and reaches higher from an already-elevated starting point</GridCell>

                <GridCell first>High</GridCell>
                <GridCell>Hippocampal volume decreases (measurable on MRI), chronic inflammation markers appear</GridCell>
                <GridCell>Contextual processing impaired, threat assessment less accurate</GridCell>

                <GridCell first>Structural</GridCell>
                <GridCell>The body has reorganised around the unresolved state — emergency response is now the default</GridCell>
                <GridCell>The compass is stuck — the mode is not a choice, it is the state the body is in</GridCell>
              </div>
            </div>

            <KeyStatement>
              The gradient moves in one direction under load not because people choose to become more controlling or more dominating, but because a nervous system running on an increasingly sensitised amygdala and increasingly depleted serotonin has a narrowing window of available response. The gradient is not a moral spectrum. It is a biological one.
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen &amp; Stellar (1993); McEwen (2000) — cumulative physiological cost, measured longitudinally. <strong style={{ color: TEXT.primary }}>Epigenetics:</strong> Meaney (2001) — chronic stress changes gene expression patterns governing stress reactivity. <strong style={{ color: TEXT.primary }}>Neuroplasticity:</strong> van der Kolk (2014); Bremner (2006) — hippocampal volume reduction under chronic cortisol exposure.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  Allostatic load mapped to the individual emotional cycle and to gradient position. The progression from a single open cycle to structural reorganisation is traced stage by stage — making visible that the gradient shift from Protection to chronic Control to chronic Domination is not a psychological trajectory but a biological one. Each gradient position corresponds to a specific physiological load level. The mode is not a choice. It is a body in a specific hormonal configuration.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 6: WHY COGNITION CANNOT CLOSE ──── */}
          <section
            id="why-cognition-fails"
            aria-labelledby="heading-why-cognition-fails"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-why-cognition-fails"
              style={sectionHeadingStyle}
            >
              6. Why Cognition Cannot Close the Cycle
            </h2>

            <p style={proseStyle}>
              Daniel Kahneman{"'"}s dual-process framework — System 1 (fast, automatic, emotional) and System 2 (slow, deliberate, cognitive) — gave psychology a language for the gap between knowing and doing. The insight-behaviour gap became a recognised phenomenon: people understand what they should do and cannot do it. The framing was enormously useful. It named the gap clearly.
            </p>
            <p style={proseStyle}>
              What it did not fully provide was the physiological mechanism — specifically, why cognitive understanding cannot update the emotional system, and what would be required to do so instead.
            </p>

            <h3 style={h3Style}>The Mechanism</h3>
            <p style={proseStyle}>
              The prefrontal cortex and the amygdala are separate circuits. They are connected — the PFC can modulate amygdala reactivity, and the amygdala can suppress PFC function under threat — but there is no direct downregulation pathway from cognitive decision to hormonal cascade. Deciding the emotion is not important sends a signal through the cognitive system. The HPA axis does not receive it.
            </p>
            <p style={proseStyle}>
              Completing the cycle requires the discharge phase to begin — motor expression, breathing change, the body moving mobilised energy through its designed channels. This is not a cognitive operation. Understanding the need for discharge is cognitive. The discharge itself is somatic. These are different actions in different systems, and one cannot substitute for the other.
            </p>
            <p style={proseStyle}>
              As allostatic load increases, the window in which cognition can engage before the response fires narrows. In high-load states, by the time the PFC has formed a thought about the situation, the body has already reconfigured. Cognition arrives late to a body that has already left.
            </p>

            <KeyStatement>
              Understanding is cognitive. The cycle is biological. More understanding does not close an open biological cycle. What closes it is what the body was always waiting for — completion.
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Dual-process theory:</strong> Kahneman (2011) — System 1 and System 2 as distinct processing systems with different update mechanisms. <strong style={{ color: TEXT.primary }}>Vagal completion:</strong> Porges (2011) — the vagus nerve as the completion pathway; co-regulation as the primary biological input for return. <strong style={{ color: TEXT.primary }}>Somatic completion:</strong> Levine (1997) — the body completing what the mind cannot finish for it.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  The precise physiological explanation for why the cognitive system cannot close a biological cycle — not as a limitation to be lamented but as a structural fact with direct implications. The insight-behaviour gap is not a failure of will or motivation. It is a correct description of two systems with different update requirements. Knowing this changes the intervention: not more insight, but the biological conditions the cycle was always waiting for.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 7: THE OPEN CYCLE AND THE GRADIENT ─ */}
          <section
            id="gradient"
            aria-labelledby="heading-gradient"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-gradient"
              style={sectionHeadingStyle}
            >
              7. The Open Cycle and the Gradient
            </h2>

            <p style={proseStyle}>
              M3 is the ground floor of the TEG-Blue architecture. It is the physiological substrate that the gradient sits on top of — the reason the gradient exists as a biological progression and not merely a behavioural one.
            </p>
            <p style={proseStyle}>
              Each position on the gradient corresponds to a physiological state. Connection is the nervous system in parasympathetic dominance — cortisol cleared, oxytocin available, PFC blood flow at capacity, gut-brain axis fully engaged. Protection is acute SNS activation — designed to be temporary, biologically expensive, and followed by return. Control is the nervous system in sustained SNS activation, with chronically elevated cortisol and norepinephrine, recruiting cognitive resources to manage a body that has not returned. Domination is the nervous system at maximum sympathetic load — emotional resonance collapsed, the system running on urgency alone.
            </p>

            {/* Gradient-physiology mapping */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "140px 1fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>Mode</div>
                <div style={gridHeaderStyle}>Physiological State</div>
                <div style={gridHeaderStyle}>Cycle Status</div>

                <GridCell first>Connection</GridCell>
                <GridCell>Parasympathetic dominance — cortisol cleared, oxytocin available, PFC at capacity</GridCell>
                <GridCell>Cycle complete or never opened</GridCell>

                <GridCell first>Protection</GridCell>
                <GridCell>Acute SNS activation — designed to be temporary and followed by return</GridCell>
                <GridCell>Cycle open — completion pending</GridCell>

                <GridCell first>Control</GridCell>
                <GridCell>Sustained SNS activation — chronically elevated cortisol and norepinephrine</GridCell>
                <GridCell>Cycle chronically open — completion blocked</GridCell>

                <GridCell first>Domination</GridCell>
                <GridCell>Maximum sympathetic load — emotional resonance collapsed</GridCell>
                <GridCell>Multiple open cycles — structural reorganisation</GridCell>
              </div>
            </div>

            <p style={proseStyle}>
              The external regulation substitutes that F3 through F7 describe are not psychological choices made in a vacuum. They are what a nervous system with an open cycle reaches for. When the internal return pathway is blocked — when the cycle cannot complete because SEA is offline, because suppression is the habitual response, because the developmental environment never provided co-regulation — the nervous system finds external inputs to regulate what it cannot regulate internally.
            </p>
            <p style={proseStyle}>
              The return direction follows the same logic. Moving back toward Connection is not a matter of deciding to be different. It is a matter of creating the biological conditions for the cycle to complete: sufficient safety for discharge to begin, vagal engagement, cortisol clearance, the experience of co-regulation. These conditions are relational, somatic, and time-dependent. They cannot be rushed. They can only be allowed.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004); McEwen (2000) — physiological states without a gradient model connecting them as a developmental sequence. <strong style={{ color: TEXT.primary }}>Trauma literature:</strong> van der Kolk (2014); Levine (1997); Herman (1992) — how unprocessed activation shapes identity and behaviour over time.
                </p>
              </ExpandableSection>

              <ExpandableSection title="TEG-Blue Contribution" type="opendata">
                <p style={expandedProseStyle}>
                  The gradient as a biological progression — each position corresponding to a specific hormonal configuration and cycle status. The gap between the stress physiology literature (which describes states) and the trauma literature (which describes trajectories) is exactly the space M3 and the gradient occupy together. The mode is not a choice. It is a body in a specific physiological state, shaped by the number and depth of its open cycles.
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
              M3 is the physiological foundation. The frameworks provide the depth architecture behind it.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <FrameworkCard
                id="F1"
                title="The Emotional Gradient"
                relation="Primary source"
                description="M3 is the mechanistic account of what F1 names: emotions as biological information, and the nervous system's designed return. F1 establishes what the signal is. M3 traces what happens to it."
                href="/framework/f1-emotional-gradient"
              />
              <FrameworkCard
                id="F2"
                title="Awareness Calibration"
                relation="Developmental origin"
                description="F2 explains how the capacity to receive the signal fails to develop. M3 explains what the signal does when access collapses: it does not stop."
                href="/framework/f2-awareness-calibration"
              />
              <FrameworkCard
                id="F3"
                title="False Coherence"
                relation="Cognitive consequence"
                description="F3 is what fills the space of an unprocessed open cycle — the cognitive framework built to make the unresolved state feel resolved."
                href="/framework/f3-false-coherence"
              />
              <FrameworkCard
                id="F8"
                title="Repairing Awareness"
                relation="Repair pathway"
                description="SEA is the gateway to biological completion. When SEA is offline, the cycle cannot begin to close because the person has no access to the discharge phase."
                href="/framework/f8-repairing-awareness"
              />
              <FrameworkCard
                id="F12"
                title="Two Information Systems"
                relation="Capstone explanation"
                description="F12 is why insight does not change the compass. M3 is the physiological mechanism: the cognitive system and the biological cycle are separate systems with different update requirements."
                href="/framework/f12-two-information-systems"
              />
              <FrameworkCard
                id="M1"
                title="Inner Compass"
                relation="Paired model"
                description="M1 is the instrument. M3 is what happens inside it when the return is missing. The stuck compass is a compass with a chronically open cycle."
                href="/model/m1-inner-compass"
              />
              <FrameworkCard
                id="M2"
                title="Three Awareness Capacities"
                relation="Paired model"
                description="M2 describes the calibration system. M3 explains what happens when the calibration fails: the signal runs without access, the cycle stays open."
                href="/model/m2-three-awareness-capacities"
              />
            </div>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="m3-the-open-cycle" type="model" />

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
                    label="Understand what the signal is before the cycle opens"
                    href="/framework/f1-emotional-gradient"
                    linkText="F1: The Emotional Gradient →"
                  />
                  <NavRow
                    label="Understand how access to the signal fails to develop"
                    href="/framework/f2-awareness-calibration"
                    linkText="F2: Awareness Calibration →"
                  />
                  <NavRow
                    label="Understand what fills the space of an unprocessed cycle"
                    href="/framework/f3-false-coherence"
                    linkText="F3: False Coherence →"
                  />
                  <NavRow
                    label="Understand the awareness capacity that enables cycle completion"
                    href="/model/m2-three-awareness-capacities"
                    linkText="M2: Three Awareness Capacities →"
                  />
                  <NavRow
                    label="Understand why insight alone cannot close the cycle"
                    href="/framework/f12-two-information-systems"
                    linkText="F12: The Two Information Systems →"
                  />
                  <NavRow
                    label="Understand the full gradient that the open cycle produces"
                    href="/model/m1-inner-compass"
                    linkText="M1: Inner Compass →"
                  />
                  <NavRow
                    label="Explore the interactive tools"
                    href="https://teg-blue.com/emotional-tools"
                    linkText="Emotional Tools (teg-blue.com) →"
                    external
                  />
                  <NavRow
                    label="Collaborate on validating this model"
                    href="/collaborate"
                    linkText="Collaborate →"
                  />
                </tbody>
              </table>
            </div>
          </section>
        </article>

        {/* Footer note */}
        <footer style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium &middot; Open Science &middot; CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />

      {/* ─── JSON-LD: ScholarlyArticle ──────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/model/m3-the-open-cycle#article",
            headline: "The Open Cycle: The Biology of Unfinished Emotion",
            description:
              "The physiological sequence that runs when the nervous system perceives a threat, what the body does when that sequence is allowed to complete, and what happens when cognition overrides it instead. Model M3 of the TEG-Blue system.",
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
            datePublished: "2026-03-06",
            dateModified: "2026-03-06",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue Model System",
              url: "https://teg-blue.org/models",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/model/m3-the-open-cycle",
            },
            about: [
              { "@type": "Thing", name: "Stress Cycle Completion" },
              { "@type": "Thing", name: "Allostatic Load" },
              { "@type": "Thing", name: "HPA Axis" },
              { "@type": "Thing", name: "Emotional Suppression" },
              { "@type": "Thing", name: "Cognitive Override" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Why Zebras Don't Get Ulcers (Sapolsky, 2004)" },
              { "@type": "ScholarlyArticle", name: "The Emotional Brain (LeDoux, 1996)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Waking the Tiger (Levine, 1997)" },
              { "@type": "ScholarlyArticle", name: "Burnout (Nagoski & Nagoski, 2019)" },
              { "@type": "ScholarlyArticle", name: "Antecedent- and Response-Focused Emotion Regulation (Gross, 1998)" },
              { "@type": "ScholarlyArticle", name: "Allostasis and Allostatic Load (McEwen, 2000)" },
              { "@type": "ScholarlyArticle", name: "Descartes' Error (Damasio, 1994)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Thinking, Fast and Slow (Kahneman, 2011)" },
            ],
            keywords: [
              "open cycle",
              "stress cycle",
              "allostatic load",
              "HPA axis",
              "cortisol",
              "emotional suppression",
              "cognitive override",
              "signal submersion",
              "threat cascade",
              "biological completion",
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
              { name: "M3: The Open Cycle", url: "/model/m3-the-open-cycle" },
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
                question: "What is the Open Cycle in the TEG-Blue system?",
                answer:
                  "The Open Cycle (M3) describes what happens physiologically when a threat response activates and the cycle is not allowed to complete. When the nervous system perceives a threat, a precise biological cascade fires — hormonal, neurochemical, and organ-level — before any conscious thought forms. This cascade was designed to complete through expression, parasympathetic return, and cortisol clearance. When cognition overrides the emotion, the cascade continues below the threshold of access. The cycle stays open.",
              },
              {
                question: "Why can't cognition close a biological stress cycle?",
                answer:
                  "The prefrontal cortex and the amygdala are separate circuits with no direct downregulation pathway from cognitive decision to hormonal cascade. Deciding an emotion is not important sends a signal through the cognitive system, but the HPA axis does not receive it. Completing the cycle requires somatic discharge — motor expression, breathing change, the body moving mobilised energy through its designed channels. Understanding the need for discharge is cognitive; the discharge itself is somatic. One cannot substitute for the other.",
              },
              {
                question: "What is allostatic load and how does it relate to the open cycle?",
                answer:
                  "Allostatic load is the measurable cumulative physiological wear from chronic stress activation — across cardiovascular, immune, metabolic, and neurological systems. Each unfinished emotional cycle adds a small residue: cortisol not cleared, amygdala sensitised, serotonin depleted. Over time, this accumulation produces structural reorganisation — the nervous system shifts its baseline, and what was an emergency response becomes the default state. This is the physiological mechanism behind the stuck compass.",
              },
              {
                question: "What is signal submersion?",
                answer:
                  "Signal submersion is the TEG-Blue term for what happens when cognition overrides an emotional signal. The override removes access to the signal — not the signal itself. The person loses awareness of the emotion, but the biological cascade continues: cortisol keeps releasing, muscles stay braced, the HPA axis never receives the all-clear. The body holds everything the mind refuses to see. The cherry is there — declaring it invisible is not the same as it not being there.",
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
  color: TEXT.primary,
  letterSpacing: "-0.01em",
  marginBottom: 16,
  paddingBottom: 8,
  borderBottom: `2px solid ${hexToRgba(SPECTRUM.indigo, 0.2)}`,
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

const propositionItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
};

const expandedProseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  margin: "8px 0 0",
};

const expandableRowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 6,
  marginTop: 4,
};

const gridHeaderStyle = {
  padding: "10px 12px",
  background: hexToRgba(SPECTRUM.indigo, 0.1),
  borderBottom: `1px solid ${BORDER.default}`,
  fontSize: 12,
  fontWeight: 600,
  color: TEXT.primary,
  fontFamily: FONT.mono,
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
        background: hexToRgba(SPECTRUM.indigo, 0.06),
        borderRadius: "0 6px 6px 0",
        borderLeft: `3px solid ${SPECTRUM.indigo}`,
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

function GridCell({ children, first }) {
  return (
    <div
      style={{
        padding: "10px 12px",
        borderBottom: `1px solid ${BORDER.default}`,
        fontSize: 13,
        color: first ? TEXT.primary : TEXT.secondary,
        fontWeight: first ? 600 : 400,
        lineHeight: 1.6,
      }}
    >
      {children}
    </div>
  );
}

function FrameworkCard({ id, title, relation, description, href }) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        padding: 16,
        background: hexToRgba(SPECTRUM.indigo, 0.06),
        border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.15)}`,
        borderRadius: 10,
        textDecoration: "none",
        transition: "border-color 200ms ease",
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontFamily: FONT.mono,
          color: SPECTRUM.indigo,
          marginBottom: 6,
        }}
      >
        {id}
      </div>
      <div
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 4,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: SPECTRUM.indigo,
          fontFamily: FONT.mono,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          marginBottom: 8,
        }}
      >
        {relation}
      </div>
      <div
        style={{
          fontSize: 13,
          color: TEXT.secondary,
          lineHeight: 1.6,
        }}
      >
        {description}
      </div>
    </Link>
  );
}

function NavRow({ label, href, linkText, external }) {
  const linkStyle = {
    color: SPECTRUM.indigo,
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
