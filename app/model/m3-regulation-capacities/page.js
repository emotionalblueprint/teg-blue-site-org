import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, ModelAnchorStrip,
  ModelPurpose, OperationalStatement, DrawsFromPanel,
  ExpandableSection, PageLayout, CommonUnderstanding,
} from "@/src/components";
import OpenCycleExplorer from "@/src/components/OpenCycleExplorer";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

const MODEL_COLOR = SPECTRUM.indigo;

const ANCHOR_SECTIONS = [
  { label: "What the Word Means", href: "#what-the-word-means" },
  { label: "The Sequence", href: "#the-sequence" },
  { label: "Debris", href: "#debris" },
  { label: "When the Return Doesn't Complete", href: "#return-incomplete" },
  { label: "Biological Restoration", href: "#biological-restoration" },
  { label: "Regulation Through Others", href: "#regulation-through-others" },
  { label: "Regulation Substitutes", href: "#regulation-substitutes" },
  { label: "Why None of It Resolves", href: "#why-none-resolves" },
  { label: "The Thread Forward", href: "#thread-forward" },
  { label: "Draws From", href: "#relationship-to-frameworks" },
];

const DRAWS_FROM = [
  { id: "F1", title: "The Emotional Gradient", relation: "Primary source", description: "Names the process M3 maps physiologically. Biological Restoration — The Return Pathway.", href: "/framework/f1-emotional-gradient" },
  { id: "F2", title: "Awareness Calibration", relation: "Developmental origin", description: "Why restoration fails — the awareness capacities that should facilitate the return.", href: "/framework/f2-awareness-calibration" },
  { id: "F3", title: "False Coherence", relation: "Cognitive maintenance", description: "How cognition constructs coherence over unfinished cycles, hiding the residue.", href: "/framework/f3-false-coherence" },
  { id: "F12", title: "Two Information Systems", relation: "Architecture", description: "Why cognitive understanding cannot close a somatic cycle. The two-system explanation.", href: "/framework/f12-two-information-systems" },
  { id: "M1", title: "Emotions as Signals", relation: "Paired model", description: "The signal language — sixteen emotions as biological messages. M1 maps what the nervous system is delivering; M3 maps whether the cycle completes.", href: "/model/m1-emotions-as-signals" },
  { id: "M2", title: "Nervous System States", relation: "Paired model", description: "The compass that gets stuck when cycles don't complete. M3 explains the biology of why.", href: "/model/m2-nervous-system-states" },
  { id: "M4", title: "Awareness Capacities", relation: "Paired model", description: "The capacities that determine whether the cycle can be felt, read, and allowed to complete.", href: "/model/m4-awareness-capacities" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Regulation Capacities (M3) | TEG-Blue Research",
  description:
    "The full regulation landscape: what the body was designed to do after activation, what blocks it, what the nervous system reaches for instead, and why none of the substitutes close the cycle. Model M3 of the TEG-Blue system.",
  keywords: [
    "regulation capacities",
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
    "dorsal vagal",
    "regulation through others",
    "biological restoration",
    "regulation substitute",
    "activation sequence",
    "somatic debt",
    "debris",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m3-regulation-capacities",
  },
  openGraph: {
    title: "Regulation Capacities — M3 Model | TEG-Blue",
    description:
      "The full regulation landscape: the designed return, the override, what the body reaches for instead, and why none of the substitutes close the cycle.",
    url: "https://teg-blue.org/model/m3-regulation-capacities",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regulation Capacities — TEG-Blue M3",
    description:
      "What is the body doing to regulate — and is the cycle completing? The return pathway, the override, and the regulation substitutes the nervous system reaches for instead.",
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function M3RegulationCapacitiesPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/model/m3-regulation-capacities" />

      <PageLayout
        header={
          <>
            <ModelHero
              badge="MODEL M3"
              title="Regulation Capacities"
              subtitle="Restoration Capacities"
              description="The full regulation landscape: what the body was designed to do after activation, what blocks the return, what the nervous system reaches for instead, and why none of the substitutes close the cycle. The third stage of the three-model sequence — Return — mapping whether the activation cycle completes or stays open as accumulated debris."
              coreQuestion="What is the body doing to regulate — and is the cycle completing?"
              drawsFrom={[
                { label: "F1", href: "/framework/f1-emotional-gradient" },
                { label: "F2", href: "/framework/f2-awareness-calibration" },
                { label: "F3", href: "/framework/f3-false-coherence" },
                { label: "F12", href: "/framework/f12-two-information-systems" },
              ]}
              color={MODEL_COLOR}
            />
            <ModelAnchorStrip sections={ANCHOR_SECTIONS} color={MODEL_COLOR} />
          </>
        }
      >
        {/* ─── THE OPEN CYCLE ─────────────────────────────── */}
        <h2
          id="the-open-cycle"
          style={{
            ...sectionHeadingStyle,
            marginTop: 48,
          }}
        >
          The Open Cycle
        </h2>
        <OpenCycleExplorer />

        <article>
          {/* ─── THE COMMON UNDERSTANDING ──────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Regulation",
                commonUnderstanding: "Calming down. Managing your emotions. Getting yourself under control.",
                definition: "Physical cleanup. Stress hormones metabolized. Muscles unclenched. Inflammatory compounds cleared. Neural circuits recovered. The body returning to its baseline state — not through a skill applied, but through a biological sequence that was already running. Regulation is not what you do to your emotions. It is what the body does after them.",
              },
              {
                title: "Trauma",
                commonUnderstanding: "An overwhelming event that left lasting damage.",
                definition: "An incomplete biological response — activation the nervous system couldn't fully discharge or integrate, regardless of whether it felt like 'too much' or 'no emotion at all.' Trauma is not defined by the event. It is defined by what the body could not complete.",
              },
            ]}
          />

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
                  When the nervous system perceives a threat, a precise biological cascade activates — hormonal, neurochemical, and organ-level — before any conscious thought forms
                </li>
                <li style={propositionItemStyle}>
                  This cascade — the Activation Sequence — was designed to complete: activation → expression → parasympathetic return → cortisol clearance → baseline. The body has a built-in endpoint
                </li>
                <li style={propositionItemStyle}>
                  When cognition overrides the emotion — labelling it irrelevant, dangerous, or weak — the override reaches awareness, not biology. The cascade continues below the threshold of access
                </li>
                <li style={propositionItemStyle}>
                  The signal without return is not a suppressed feeling. It is an open biological cycle: cortisol still releasing, amygdala still sensitising, organs still in survival configuration
                </li>
                <li style={propositionItemStyle}>
                  When the return pathway is blocked, the nervous system does not wait. It redirects — through substances, through physical intensity, through controlling others, through any external input that produces the neurochemical shift the body is searching for
                </li>
                <li style={propositionItemStyle}>
                  Every regulation substitute produces real relief. None of them produce return to baseline. The distinction is biological: discharge is not completion
                </li>
                <li style={propositionItemStyle}>
                  The body has no mechanism for receiving philosophical decisions. Deciding an emotion is not important does not change the cortisol level. The cherry is there whether it is seen or not
                </li>
              </ul>
            </ModelPurpose>
          </section>

          {/* ─── S1: WHAT THE WORD MEANS ──────────────────── */}
          <section
            id="what-the-word-means"
            aria-labelledby="heading-what-the-word-means"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-what-the-word-means"
              style={sectionHeadingStyle}
            >
              1. What the Word Means
            </h2>

            <p style={proseStyle}>
              The word {"\""} regulation{"\""} carries a psychological frame — something you do, a skill you apply, a choice you make. The biology underneath it is different. The nervous system does not regulate the way a person controls a thermostat. It restores the way the body digests. Not by trying harder. By completing a sequence that was already running.
            </p>
            <p style={proseStyle}>
              This distinction matters because it changes everything that follows: what the return requires, why it does not always happen, and what the nervous system reaches for instead.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Regulation is not what you do to your emotions. It is what your body does after them.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Somatic completion:</strong> Levine (1997) — the body completing the stress response through discharge, not cognitive management. <strong style={{ color: TEXT.primary }}>Stress cycle:</strong> Nagoski &amp; Nagoski (2019) — the biological stress cycle requires completion, not suppression. <strong style={{ color: TEXT.primary }}>Vagal regulation:</strong> Porges (2011) — regulation as a function of the autonomic nervous system, not a psychological skill.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The reframe from regulation-as-skill to regulation-as-biological-process. The word carries a psychological assumption that changes what people look for. Looking for a skill to apply leads to management strategies. Looking for a sequence to complete leads to the biology of return.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── S2: THE SEQUENCE ─────────────────────────── */}
          <section
            id="the-sequence"
            aria-labelledby="heading-the-sequence"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-the-sequence"
              style={sectionHeadingStyle}
            >
              2. The Sequence
            </h2>

            <p style={proseStyle}>
              The nervous system perceives a threat. A precise sequence activates — before any conscious thought forms.
            </p>

            <h3 style={h3Style}>Threat</h3>
            <p style={proseStyle}>
              Something is detected. Physical, relational, social, or emotional. The amygdala fires within 12 milliseconds — faster than any thought. The system is already responding before the mind has decided whether this is real.
            </p>

            <h3 style={h3Style}>Alert</h3>
            <p style={proseStyle}>
              The HPA axis activates. Cortisol and adrenaline flood the bloodstream. Heart rate increases. Muscles brace. Digestion halts. Blood flow redirects to the limbs. Every organ system shifts to survival configuration. The body is doing exactly what it was designed to do.
            </p>

            <h3 style={h3Style}>Resources</h3>
            <p style={proseStyle}>
              The system uses what it mobilized. Fight, flight, freeze, fawn — whatever the threat requires. Energy is spent. The body acts.
            </p>

            <h3 style={h3Style}>Debris</h3>
            <p style={proseStyle}>
              The activation leaves physical residue. Cortisol still circulating. Muscles that braced but did not fully discharge. Neural circuits still mid-loop. Inflammatory compounds that were produced for the emergency. This is not metaphor. It is measurable, biological, and in the body.
            </p>

            <h3 style={h3Style}>Return to Baseline</h3>
            <p style={proseStyle}>
              The body was designed to complete the Activation Sequence. The debris clears. The hormones metabolize. The muscles release. The circuits recover. The nervous system returns to its home state. This is Biological Restoration.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The body was designed to complete the cycle. The sequence has an endpoint. The problem is not the alert — it is when the return never arrives.
            </OperationalStatement>

            <Link
              href="/framework/f1-emotional-gradient#the-fork"
              style={{
                display: "block",
                padding: "16px 20px",
                margin: "0 0 16px",
                background: hexToRgba(MODEL_COLOR, 0.06),
                border: `1px solid ${hexToRgba(MODEL_COLOR, 0.15)}`,
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: FONT.mono, color: MODEL_COLOR, marginBottom: 6 }}>
                F1 &middot; This process has a name
              </div>
              <div style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, marginBottom: 8 }}>
                F1 calls this Biological Restoration — The Return Pathway of all twelve frameworks. F1 maps the design and the pathways. M3 maps the physiology underneath.
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: MODEL_COLOR }}>
                Read the design &rarr;
              </div>
            </Link>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Threat detection:</strong> LeDoux (1996) — dual-pathway threat detection, amygdala firing before cortical processing. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) — the HPA axis, cortisol, and the whole-body reconfiguration of the stress response. <strong style={{ color: TEXT.primary }}>Neuroception:</strong> Porges (2011) — continuous subconscious evaluation preceding and faster than conscious awareness. <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — the body completing the cycle through discharge. <strong style={{ color: TEXT.primary }}>Stress cycle completion:</strong> Nagoski &amp; Nagoski (2019) — the biological stress cycle requires completion, not management.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The five-stage Activation Sequence as a single biological arc — from threat detection through alert through resource mobilization through debris through return — held together rather than described in separate literatures. The connection between the specific felt emotion and the specific biological cascade, not dissolved into generic {"\""} stress.{"\""} Making the designed endpoint explicit changes everything: the problem is never the activation. The problem is whether the return arrives.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── S3: DEBRIS ───────────────────────────────── */}
          <section
            id="debris"
            aria-labelledby="heading-debris"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-debris"
              style={sectionHeadingStyle}
            >
              3. Debris
            </h2>

            <p style={proseStyle}>
              Debris is what the activation leaves in the body when the return has not completed. It is not a feeling. It is not a memory. It is physical residue — measurable, biological, and still running.
            </p>

            <h3 style={h3Style}>What Debris Actually Is</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 20, maxWidth: 720 }}>
              <li style={listItemStyle}>Cortisol still circulating in the bloodstream. Half-life of 20–90 minutes; in chronic states, never fully clears before the next activation begins.</li>
              <li style={listItemStyle}>Adrenaline metabolites in the tissue.</li>
              <li style={listItemStyle}>Pro-inflammatory cytokines produced for the emergency response, not yet cleared.</li>
              <li style={listItemStyle}>Muscle fibers that braced and partially released, but never fully discharged the stored tension.</li>
              <li style={listItemStyle}>The amygdala still sensitized — threshold lowered, ready to fire faster at the next perceived threat.</li>
              <li style={listItemStyle}>The HPA axis still running — the hypothalamus still receiving no all-clear signal, so it continues producing CRH, which continues producing cortisol.</li>
              <li style={listItemStyle}>Neural circuits that activated mid-sequence, did not complete, and are still holding the activation pattern.</li>
              <li style={listItemStyle}>Serotonin depletion — the stabilizing neurotransmitter drawn down under sustained cortisol.</li>
              <li style={listItemStyle}>Oxytocin suppression — the trust and co-regulation chemistry unavailable.</li>
            </ul>

            <p style={proseStyle}>
              Debris is why a regulation attempt that does not complete the Activation Sequence does not work. The body is not waiting for a decision. It is waiting for a biological signal. Until the signal arrives, the debris stays.
            </p>
            <p style={proseStyle}>
              Debris is also why chronic activation compounds. Each incomplete Activation Sequence adds to what is already there. The next alert fires from an already-elevated baseline — which means it activates faster, reaches higher, and requires more to resolve. Over time, the system reorganizes around the debris as its normal state. What was designed as a temporary emergency configuration becomes the floor.
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

            <h3 style={h3Style}>The Accumulation Effect</h3>
            <p style={proseStyle}>
              One unprocessed cycle is recoverable. The body is resilient. A single override, with sufficient rest, movement, and co-regulation in the period that follows, leaves little permanent trace. The problem is not the single override. The problem is the pattern.
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
                <GridCell>The compass is stuck — the mode is the state the body is in</GridCell>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              Debris is not stress. It is the physical residue of incomplete cycles — still running, still accumulating, still shaping every activation that follows.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen &amp; Stellar (1993); McEwen (2000) — cumulative physiological cost of chronic activation. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) — organ-level consequences of sustained cortisol. <strong style={{ color: TEXT.primary }}>Interoception:</strong> Craig (2002); Damasio (1994) — how chronic activation impairs the body{"'"}s capacity to read its own internal state. <strong style={{ color: TEXT.primary }}>Epigenetics:</strong> Meaney (2001) — chronic stress changes gene expression patterns governing stress reactivity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The system-by-system account of what stays active after a single unfinished cycle and the progression from low load to structural reorganisation. This makes the cost concrete and immediate — not just accumulated over years but present in the hours after a single override. Each physiological residue connects directly to the felt experience: depleted serotonin is the irritability that appears hours later; suppressed oxytocin is the difficulty being comforted; the sensitised amygdala is the disproportionate reaction to the next small thing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── S4: WHEN THE RETURN DOESN'T COMPLETE ─────── */}
          <section
            id="return-incomplete"
            aria-labelledby="heading-return-incomplete"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-return-incomplete"
              style={sectionHeadingStyle}
            >
              4. When the Return Doesn{"'"}t Complete
            </h2>

            <p style={proseStyle}>
              The return to baseline is not guaranteed. It requires specific conditions: sufficient safety, time, and in many cases — another regulated nervous system nearby. When those conditions are absent, the Activation Sequence stays open.
            </p>
            <p style={proseStyle}>
              When the return does not complete, the body does not reset. It carries the activation forward. The baseline shifts upward. What was designed as a temporary emergency configuration becomes the operating state.
            </p>
            <p style={proseStyle}>
              The nervous system recalibrates. An amygdala that has fired repeatedly without full recovery learns to fire faster. A stress system that has never received the all-clear signal becomes calibrated to the assumption that threat is continuous. The system does not malfunction. It adapts — accurately, to the environment it is actually in.
            </p>

            <h3 style={h3Style}>The Consequences of Recalibration</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 20, maxWidth: 720 }}>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>The window of activation narrows.</strong> Smaller triggers produce larger responses.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Recovery time lengthens.</strong> What used to resolve in hours takes days, or does not fully resolve at all.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Perception narrows.</strong> The cognitive capacity to see the full picture reduces as the system prioritizes threat-relevant processing.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Relational capacity reduces.</strong> The awareness capacities — Reading Emotions (RE), Emotional Resonance (ER), Self-Emotional Awareness (SEA) — require biological safety resources; when those are chronically depleted, connection becomes biologically more expensive.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>The body loses access to itself.</strong> The interoceptive signals that would normally inform the person become harder to read accurately as chronic activation distorts the signal-to-noise ratio.</li>
            </ul>

            <p style={proseStyle}>
              This is the physiological substrate of the stuck compass. The person is not stuck because they lack insight or motivation. They are stuck because the nervous system has reorganized around an unresolved state. Everything from F2 to F7 describes what happens next — at different scales, through different mechanisms, with escalating costs. All of it starts here.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              When the return does not complete, the body does not fail. It adapts. Accurately. To an environment it has learned is never safe.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen (2000) — the cumulative cost of chronic adaptation, the body reorganizing around unresolved threat. <strong style={{ color: TEXT.primary }}>Body adaptation:</strong> van der Kolk (2014) — the body adapts to chronic threat by reorganizing, not by failing. <strong style={{ color: TEXT.primary }}>Neuroception:</strong> Porges (2011) — the threat-detection system recalibrates based on repeated experience, not single events.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The five-consequence pattern as the physiological substrate of the stuck compass — connecting McEwen{"'"}s load model to the specific recalibrations that produce each consequence. The person is not stuck because they lack insight. They are stuck because the nervous system reorganized around an unresolved state. This connects directly to F2–F7: each framework describes what the nervous system does instead, once the return has failed.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── S5: WHEN THE SIGNAL GOES SILENT ──────────── */}
          <section
            id="signal-collapse"
            aria-labelledby="heading-signal-collapse"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-signal-collapse"
              style={sectionHeadingStyle}
            >
              5. When the Signal Goes Silent
            </h2>

            <p style={proseStyle}>
              There is a second failure mode. Not escalation — collapse.
            </p>
            <p style={proseStyle}>
              When the return has not completed across enough Activation Sequences, across enough time, the nervous system can shift from chronic high-activation to something different: the disappearance of signal entirely. The body stops broadcasting. Not because the debris has cleared — it has not. But because the alert system, finding no resolution across repeated Activation Sequences, begins to suppress its own output.
            </p>

            <h3 style={h3Style}>What This Produces</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 20, maxWidth: 720 }}>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Emotional flatness.</strong> Not the absence of emotion — the absence of access to it. The signal is still present at the physiological level. The person cannot feel it.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Loss of interoceptive contact.</strong> The body{"'"}s internal communications — hunger, tension, desire, dread — become unreliable or absent. The person reports feeling nothing, or not knowing what they feel. This is not psychological resistance. It is the degradation of the signal channel itself.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Anhedonia.</strong> The dopaminergic system, chronically depleted by repeated activation-without-resolution, stops registering reward. Things that should produce response do not.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>Social withdrawal that does not register as withdrawal.</strong> Connection requires biological resources the system no longer has. The person is not avoiding others — they have lost the circuitry that makes contact feel like anything.</li>
              <li style={listItemStyle}><strong style={{ color: TEXT.primary }}>A body that is cold to itself.</strong> The person moves through their life without registering it from the inside. Functional. Present. Absent.</li>
            </ul>

            <p style={proseStyle}>
              This is the dorsal vagal state — the oldest branch of the vagus nerve, the immobilization response the nervous system reaches for when neither fight, flight, nor fawn has produced safety across sustained time. Not a choice. A reorganization.
            </p>
            <p style={proseStyle}>
              The person in this state is not without activation. The debris is still there, still accumulating. What is gone is the felt sense of it — and with that, the signal the body would need in order to begin the return.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The alarm does not always get louder. Sometimes the body stops letting itself hear it. The signal goes flat. The debris remains.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Dorsal vagal:</strong> Porges (2011) — the oldest vagal branch, immobilization as the final autonomic defence. <strong style={{ color: TEXT.primary }}>Dissociation:</strong> van der Kolk (2014) — disconnection from bodily experience as a survival response to overwhelming activation. <strong style={{ color: TEXT.primary }}>Anhedonia:</strong> Der-Avakian &amp; Markou (2012) — dopaminergic depletion under chronic stress as the neurobiological basis of reward insensitivity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The dorsal vagal shift as a regulation failure distinct from escalation — not louder alarm but signal collapse. The person who is emotionally flat is not calm. The person who has withdrawn is not choosing solitude. The debris is still accumulating while the system registers itself as having stopped responding. This matters for practitioners because the presentation is quiet. The distress is invisible. The allostatic load is not.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── S6: BIOLOGICAL RESTORATION ────────────────── */}
          <section
            id="biological-restoration"
            aria-labelledby="heading-biological-restoration"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-biological-restoration"
              style={sectionHeadingStyle}
            >
              6. Biological Restoration
            </h2>

            <p style={proseStyle}>
              There are two genuine return pathways — biological restoration processes that actually clear the debris and complete the Activation Sequence. And there are regulation substitutes that produce real relief without completing it. The distinction between restoration and substitution is the organizing principle of everything that follows.
            </p>

            <h3 style={h3Style}>Biological Restoration — Somatic</h3>
            <p style={proseStyle}>
              Somatic restoration addresses body-state activation — threat, boundary, startle, energy. The completion pathway runs through breathing, grounding, time, or co-regulation. This type can complete alone when conditions allow. The activation was about the body{"'"}s state, and the body can resolve it through somatic process.
            </p>

            <h3 style={h3Style}>Biological Restoration — Relational</h3>
            <p style={proseStyle}>
              Relational restoration addresses belonging-state activation — shame, guilt, rejection, abandonment. The completion pathway runs through co-regulation only — another person staying. This type cannot complete alone. It requires relational evidence: the presence of someone who remains, uncoerced, genuinely available. The activation was about belonging, and belonging cannot be restored in isolation.
            </p>

            <h3 style={h3Style}>Restoration by Mode</h3>
            <p style={proseStyle}>
              The four modes each require a distinct form of Biological Restoration:
            </p>

            {/* Mode Restoration table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "130px 1fr 1fr 120px", minWidth: 600 }}>
                <div style={gridHeaderStyle}>Mode</div>
                <div style={gridHeaderStyle}>Restoration</div>
                <div style={gridHeaderStyle}>What It Is</div>
                <div style={gridHeaderStyle}>Timescale</div>

                <GridCell first>Connection</GridCell>
                <GridCell>Connection Mode Biological Restoration</GridCell>
                <GridCell>Tending the system — preventive, not corrective</GridCell>
                <GridCell>Continuous</GridCell>

                <GridCell first>Protection</GridCell>
                <GridCell>Protection Mode Biological Restoration</GridCell>
                <GridCell>Completing the Activation Sequence</GridCell>
                <GridCell>20 min – 2 hours</GridCell>

                <GridCell first>Control</GridCell>
                <GridCell>Control Mode Biological Restoration</GridCell>
                <GridCell>Releasing the cognitive override</GridCell>
                <GridCell>2–8 hours</GridCell>

                <GridCell first>Domination</GridCell>
                <GridCell>Domination Mode Biological Restoration</GridCell>
                <GridCell>Full discharge arc from maximum activation</GridCell>
                <GridCell>24–72+ hours</GridCell>
              </div>
            </div>

            <h3 style={h3Style}>Somatic Debt</h3>
            <p style={proseStyle}>
              When cognition overrides the body{"'"}s emotional signals not temporarily (fluid Control) but chronically (Chronic Control), the suppression itself consumes physiological resources continuously. The prefrontal cortex maintains the override. Noradrenaline sustains the effort. The limbic signals continue to fire underneath. The override does not silence them — it outcompetes them. The competition is metabolically expensive.
            </p>
            <p style={proseStyle}>
              Somatic Debt is the accumulated cost of this override. It is distinct from debris (the residue of incomplete Activation Sequences) and from allostatic load (the systemic wear from chronic stress). A person can carry both — debris from past incomplete Activation Sequences, and ongoing Somatic Debt from the current override holding future sequences closed.
            </p>
            <p style={proseStyle}>
              Somatic Debt accumulates invisibly because the override is experienced as stability, not effort. The person in Chronic Control feels regulated, strategic, composed. What they do not feel is the progressive cost of holding the signals down. The debt surfaces eventually — and when it does, it does not arrive gradually. It arrives as collapse, physical illness, autoimmune flare, sudden breakdown, or emotional flooding that seems to come from nowhere.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The body has a designed return pathway. It requires specific conditions: sufficient safety, time, somatic discharge, and for relational emotions — another regulated nervous system. This pathway is not a technique. It is a biological sequence the body was built to run.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Somatic completion:</strong> Levine (1997) — the primary return pathway runs through the body, not through cognition. <strong style={{ color: TEXT.primary }}>Co-regulation:</strong> Schore (2001) — early co-regulation as the biological origin of relational restoration. <strong style={{ color: TEXT.primary }}>Attachment:</strong> Bowlby (1969) — attachment as a biological safety system, not a psychological preference. <strong style={{ color: TEXT.primary }}>Social engagement:</strong> Porges (2011) — the mammalian co-regulation mechanism as a vagally mediated system.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The somatic/relational distinction — that some activations can complete alone and others cannot, based on the type of threat (body-state vs belonging-state). The mode-specific restoration table, which maps what each position requires for genuine return and the timescale involved. And Somatic Debt as a distinct accumulation pattern: not the residue of past cycles but the ongoing cost of the override holding future cycles closed — invisible because the override is experienced as stability.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── S7: REGULATION THROUGH OTHERS ────────────── */}
          <section
            id="regulation-through-others"
            aria-labelledby="heading-regulation-through-others"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-regulation-through-others"
              style={sectionHeadingStyle}
            >
              7. Regulation Through Others
            </h2>

            <p style={proseStyle}>
              When the internal return pathway is blocked — when the nervous system cannot complete the Activation Sequence alone — it redirects. One direction: outward. Using control over others to discharge accumulated activation.
            </p>
            <p style={proseStyle}>
              This is not a description of dysfunctional behavior. It is a description of a biological mechanism.
            </p>

            <h3 style={h3Style}>Why Controlling Others Produces Real Relief</h3>
            <p style={proseStyle}>
              The nervous system perceives controllability as safety. When activation is uncontrollable, the stress response escalates. When the system perceives that it has restored control — over any outcome, including another person{"'"}s behaviour — cortisol partially suppresses. The amygdala calms, briefly. The body registers: threat becoming manageable.
            </p>
            <p style={proseStyle}>
              Dominant behaviour produces a measurable neurochemical shift: a temporary cortisol drop, a testosterone spike, brief relief. The body learns this. Three activations that resolved with that behaviour is enough for conditioning to begin.
            </p>
            <p style={proseStyle}>
              Expressing activation outward — criticizing, confronting, managing, punishing — also discharges some of the sympathetic energy that was mobilized for action. The stress response prepared the body to do something. Doing something uses some of that preparation.
            </p>

            <h3 style={h3Style}>What This Looks Like</h3>
            <p style={proseStyle}>
              Managing another person{"'"}s tone, behaviour, or emotional state in order to feel less activated. Criticizing to discharge the pressure of unresolved internal tension. Punishing to create a sense of consequence and control in a system that feels uncontrollable. Needing others to respond in specific ways before the body can settle.
            </p>

            <h3 style={h3Style}>The Shame Loop</h3>
            <p style={proseStyle}>
              When regulation is achieved through controlling, criticizing, or harming others, a shame signal is generated that cannot be metabolized in a chronic mode. The capacity to clearly feel and name the shame is not available — Emotional Resonance (ER) is offline, Self-Emotional Awareness (SEA) is offline. The shame accumulates as debris. It reinforces the mode that generated it. The Shame Loop is uncloseable from inside the mode that produces it.
            </p>

            <h3 style={h3Style}>The Mode Destroys Its Own Return Pathway</h3>
            <p style={proseStyle}>
              Genuine regulation for all chronic modes would ultimately require safe relational contact — real co-regulation with someone genuinely present. The relational regulation substitute systematically degrades the relational environment. Each episode of control, punishment, or harm makes the people in proximity less safe, less honest, and less genuinely available. The system progressively forecloses the only genuine option.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Controlling others produces a real neurochemical shift. The body learns to repeat it — not because the person is broken, but because it worked.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Controllability and stress:</strong> Maier &amp; Seligman (2016) — perceived controllability modulates the stress response at the neurochemical level. <strong style={{ color: TEXT.primary }}>Dominance and hormones:</strong> Archer (2006); Mazur &amp; Booth (1998) — testosterone-cortisol dynamics in dominant behaviour. <strong style={{ color: TEXT.primary }}>Conditioning:</strong> Pavlov; Skinner — classical and operant conditioning of arousal-reduction behaviours.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The specific neurochemical mechanism by which controlling others produces real physiological relief — not metaphorical relief, not psychological satisfaction, but a measurable cortisol drop and testosterone shift. The Shame Loop as a self-reinforcing trap: the shame signal generated by the behavior cannot be metabolized without the awareness capacities the mode has disabled. And the structural cost: each episode of relational regulation degrades the relational environment that would be required for genuine return.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── S8: NON-RELATIONAL REGULATION SUBSTITUTES ── */}
          <section
            id="regulation-substitutes"
            aria-labelledby="heading-regulation-substitutes"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-regulation-substitutes"
              style={sectionHeadingStyle}
            >
              8. Non-Relational Regulation Substitutes
            </h2>

            <p style={proseStyle}>
              The nervous system{"'"}s search for relief does not stop with other people. Any external input that produces the neurochemical shift becomes a potential regulation substitute. The mechanism is identical across all of them: temporary discharge, no resolution, escalating need.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Substances.</strong> Alcohol, stimulants, opioids, cannabis — each acts on a specific part of the stress response. Each works. Each requires more over time, because the underlying Activation Sequences are still open.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Physical intensity.</strong> Compulsive exercise, risk-taking, extreme sports, physical pain — high-intensity physical states produce the discharge the stress response was designed to complete through movement. The relief is real. The Activation Sequence stays open because the activation source — the accumulated debris — is not what the physical intensity is addressing.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Work, achievement, productivity.</strong> The nervous system experiences goal pursuit as controllability, and controllability as safety. When the work stops, the debris is still there.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Screens, food, consumption.</strong> Dopaminergic stimulation through novelty, reward, or sensory input provides brief modulation of the alert state. The Activation Sequence does not close.
            </p>

            <h3 style={h3Style}>Conscious Self-Soothing</h3>
            <p style={proseStyle}>
              The same mechanism runs through activities the person believes are resolving the problem. Exercise chosen for intensity rather than completion. Meditation extended past its natural endpoint, chased for the calm rather than entered for what is there. Breathwork, cold exposure, fasting, sensory silence — each one capable of producing real physiological shift. Each one, when the return pathway is blocked, used as discharge. The relief is real. The debris is untouched. Tomorrow the same dose is required, and the next day slightly more.
            </p>
            <p style={proseStyle}>
              The body does not distinguish the source of discharge. It distinguishes only whether the Activation Sequence completed. The person who runs daily and still cannot settle is not doing the wrong activity. The activity is doing the wrong job — covering the alarm rather than closing it.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The substitute changes. The mechanism does not. Temporary discharge. No resolution. The bar rises. The alarm stays on.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Substance mechanisms:</strong> Koob &amp; Le Moal (2001) — neurobiological mechanisms of addiction as failed regulation attempts. <strong style={{ color: TEXT.primary }}>Exercise and stress:</strong> Salmon (2001) — exercise as stress discharge without cycle completion. <strong style={{ color: TEXT.primary }}>Behavioural conditioning:</strong> Robinson &amp; Berridge (2003) — incentive salience and the escalation of wanting without liking.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The unified mechanism across all regulation substitutes — from substances through healthy exercise through intentional settling — as the same biological search at different intensity levels. The key insight is conscious self-soothing: the right activity doing the wrong job. This reframes the conversation from {"\""} good coping versus bad coping{"\""} to a single question: is the Activation Sequence completing? If the answer is no, the substitute will escalate regardless of how socially acceptable it appears.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── S9: TEMPORARY RELIEF MISTAKEN FOR RESTORATION */}
          <section
            id="temporary-relief"
            aria-labelledby="heading-temporary-relief"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-temporary-relief"
              style={sectionHeadingStyle}
            >
              9. Temporary Relief Mistaken for Restoration
            </h2>

            <p style={proseStyle}>
              At the far end of the regulation substitute arc, something different happens. Not discharge that falls short of resolution. A simulation of resolution itself.
            </p>
            <p style={proseStyle}>
              The combination of stimuli available at this end — domination, violation, taboo, the exercise of absolute power over another body — produces the most potent neurochemical event the nervous system can access. Dopamine surges. Testosterone spikes. Cortisol suppresses. Adrenaline floods and clears. The amygdala quiets. The pressure releases. The body registers: <em>finished.</em>
            </p>
            <p style={proseStyle}>
              The sequence did not run. The body just stopped feeling it running.
            </p>

            <h3 style={h3Style}>Why the Signature Is Wrong</h3>
            <p style={proseStyle}>
              The HPA axis never received the hippocampal all-clear. Cortisol was suppressed by intensity — not cleared by completion. It rebounds. Serotonin, drawn down across every prior Activation Sequence, depletes further in the crash. Oxytocin was never produced — this is a domination state, not a bonding state; the neurochemistry of safety and the neurochemistry of predation are not the same pathway. The neural circuits that were mid-loop at activation have not completed. They have been overridden by a signal strong enough to silence them. They are still running underneath.
            </p>

            <h3 style={h3Style}>What the Body Learns</h3>
            <p style={proseStyle}>
              Every other regulation substitute produces a discharge that falls short of return. The person can feel the gap — residual tension, unease, something unfinished. That gap is information. It points toward incompletion.
            </p>
            <p style={proseStyle}>
              The extreme substitute closes the gap. Not by resolving it. By producing a state that feels identical to resolution. The body learns: <em>this is what finished feels like.</em>
            </p>
            <p style={proseStyle}>
              Which means the actual conditions for biological return — safety, time, co-regulation, a regulated nervous system nearby — begin to produce nothing recognizable. They do not move the needle. They are too quiet. The body has been calibrated to an intensity that the real return sequence cannot match, and the real return sequence no longer registers as return.
            </p>

            <h3 style={h3Style}>The Evidence That Baseline Was Never Reached</h3>
            <p style={proseStyle}>
              The interval between episodes shortens even as intensity escalates. If the body had genuinely returned to baseline, reactivation would take longer. It would be starting from rest. The shortening interval is the proof the floor never reset. Each episode fires from a higher baseline than the last. What feels like rest between them is the debris continuing to accumulate while the system registers itself as recovered.
            </p>
            <p style={proseStyle}>
              This is also the mechanism that makes escalation inevitable rather than chosen. The body is not seeking more because more is wanted. It is seeking more because the previous dose no longer produces the same suppression. The tolerance is not psychological. It is biological. The system habituates. The threshold rises. The only direction available is more extreme, and there is no ceiling.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The body produces the signature of completion without running the sequence. The feeling of having arrived. The debris still there. The interval shortens. The dose rises.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Addiction neurobiology:</strong> Koob &amp; Le Moal (2001) — neurobiological mechanisms by which intensity produces the signature of resolution without the biological process. <strong style={{ color: TEXT.primary }}>Incentive salience:</strong> Robinson &amp; Berridge (2003) — the dissociation of wanting from liking as tolerance builds. <strong style={{ color: TEXT.primary }}>Cortisol dynamics:</strong> Sapolsky (2004) — cortisol suppression vs cortisol clearance as distinct physiological events with different downstream consequences.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The mechanism by which the body produces the felt signature of completion without running the biological sequence — and why this is the endpoint of the regulation substitute arc, not a separate category. The shortening interval as biological proof that baseline was never reached. The body has been calibrated past the real return sequence: the genuine conditions for restoration — quiet, relational, slow — produce nothing recognizable.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── S10: WHY NONE OF IT RESOLVES ─────────────── */}
          <section
            id="why-none-resolves"
            aria-labelledby="heading-why-none-resolves"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-why-none-resolves"
              style={sectionHeadingStyle}
            >
              10. Why None of It Resolves
            </h2>

            <p style={proseStyle}>
              Momentary relief can reduce intensity for a while, but it does not clear the stress chemicals already in the body. Restoration helps the body process and clear the excess activation left after a stress response. When that activation is not cleared, the body starts from a more activated state the next time. That means it has less room to handle new stress.
            </p>
            <p style={proseStyle}>
              Every regulation substitute produces discharge. None of them produce return to baseline. The distinction is biological.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Discharge</strong> is the release of mobilized energy. It reduces the felt pressure. It temporarily suppresses parts of the stress response. Discharge is real. It is not resolution.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Return to baseline</strong> requires the specific biological sequence to complete: the discharge phase, the parasympathetic return, the HPA negative feedback loop, cortisol clearance, the restoration of serotonin and oxytocin, the hippocampus encoding the event as finished. These are physiological events. They require specific inputs — somatic and relational.
            </p>

            <h3 style={h3Style}>Why the Alarm Stays On</h3>
            <p style={proseStyle}>
              The debris is still there. The cortisol was not cleared by the episode of criticism or the drink or the exercise session. The amygdala is still sensitized. The HPA axis never received the all-clear signal.
            </p>

            <h3 style={h3Style}>Why the Environment Becomes More Threatening</h3>
            <p style={proseStyle}>
              When the substitute involves controlling others, the response from others is typically defensiveness, resentment, distance, or escalation. The interpersonal environment becomes less predictable and more threatening. The strategy designed to reduce threat generates more of it.
            </p>

            <h3 style={h3Style}>Why the Bar Rises</h3>
            <p style={proseStyle}>
              Dopaminergic conditioning means the same input produces less relief over time. The nervous system habituates. More is required to achieve the same reduction in the stress response.
            </p>

            <h3 style={h3Style}>The Exit That Is Not Built In</h3>
            <p style={proseStyle}>
              None of these regulation substitutes contain their own stopping mechanism. The biological return sequence does — it has a built-in endpoint: cortisol clears, the hippocampus sends the all-clear, the HPA axis stands down. Regulation substitutes have no such endpoint. They have no signal that tells the system: <em>finished.</em>
            </p>

            <h3 style={h3Style}>Why There Is No Internal Brake</h3>
            <p style={proseStyle}>
              The brake that would slow the escalation — the somatic echo of what this is doing to another person — is offline. Emotional Resonance (ER) is absent. The other person{"'"}s pain does not arrive as felt experience. It registers as information about the environment: material to be managed, not suffering to be held. There is nothing internally that says <em>stop</em> — not because the person decided to ignore it, but because the signal that would carry it is not being received.
            </p>

            <h3 style={h3Style}>The Structural Pattern</h3>

            {/* Structural pattern table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>Type</div>
                <div style={gridHeaderStyle}>What It Does</div>
                <div style={gridHeaderStyle}>Completion Pathway</div>
                <div style={gridHeaderStyle}>Completes the Sequence?</div>

                <GridCell first>Biological Restoration — Somatic</GridCell>
                <GridCell>Clears debris from body-state activation</GridCell>
                <GridCell>Breathing, grounding, time, co-regulation</GridCell>
                <GridCell>Yes — when conditions allow</GridCell>

                <GridCell first>Biological Restoration — Relational</GridCell>
                <GridCell>Clears debris from belonging-state activation</GridCell>
                <GridCell>Co-regulation only — another person staying</GridCell>
                <GridCell>Not alone — requires relational evidence</GridCell>

                <GridCell first>Regulation through others</GridCell>
                <GridCell>Relief through another person</GridCell>
                <GridCell>Reassurance, contact, soothing, compliance, control</GridCell>
                <GridCell>No — increases load over time</GridCell>

                <GridCell first>Non-relational regulation substitutes</GridCell>
                <GridCell>Relief through objects or activities</GridCell>
                <GridCell>Substances, food, screens, work, stimulation</GridCell>
                <GridCell>No — increases load over time</GridCell>

                <GridCell first>Temporary relief mistaken for restoration</GridCell>
                <GridCell>Body produces signature of completion without running the sequence</GridCell>
                <GridCell>None — no stopping mechanism</GridCell>
                <GridCell>No — increases load over time</GridCell>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              Discharge is not return. The debris is still there. The alarm stays on. The substitute must repeat because the body is still waiting for what it was always waiting for: the completion the substitute cannot provide.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  The discharge/return distinction is implicit across stress physiology (Sapolsky), somatic experiencing (Levine), and polyvagal theory (Porges), but is not typically articulated as a single structural pattern across all regulation strategies.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The structural pattern table — the first unified account of all regulation strategies (from biological restoration through temporary relief) organized by a single question: does the Activation Sequence complete? This reframes the entire landscape from a moral hierarchy ({"\""} good coping versus bad coping{"\""}) to a biological one (completion vs non-completion). The mechanism is the same across every row. What differs is whether the debris clears.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── S11: THE THREAD FORWARD ───────────────────── */}
          <section
            id="thread-forward"
            aria-labelledby="heading-thread-forward"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-thread-forward"
              style={sectionHeadingStyle}
            >
              11. The Thread Forward
            </h2>

            <p style={proseStyle}>
              Every framework in TEG-Blue is organized around a single mechanism: the return to baseline, and what happens when it does not complete. F1 names the designed process and the fork. F2 through F7 describe what the nervous system does instead, at escalating scales and costs: developmental substitutes, cognitive replacements, collective rules, worth hierarchies, perceptual bias, domination. Each is a regulation attempt. Each produces discharge without resolution. Each traces to the same origin — a nervous system that never learned the return.
            </p>
            <p style={proseStyle}>
              The nervous system that has spent years running substitutes still contains the return sequence. It was not removed by chronic activation, by accumulated debris, by temporary relief mistaken for restoration, by any of the regulation substitutes the system learned to reach for. The pathway was outcompeted. It was not erased.
            </p>
            <p style={proseStyle}>
              The sequence runs when the conditions exist. Safety, sufficient time, somatic process, another regulated nervous system nearby — these are not psychological achievements. They are biological inputs. When they are present, the body runs what it was built to run. The debris clears. The HPA axis receives the all-clear. The hippocampus encodes the event as finished. The Activation Sequence closes.
            </p>
            <p style={proseStyle}>
              A nervous system that has learned the return does not only resolve its own Activation Sequences. It becomes the condition another nervous system needs. Co-regulation is not a technique. It is what one regulated nervous system provides to an unregulated one by proximity. The capacity, once built, transmits — to the next person in contact, to the next generation, instead of the substitutes.
            </p>
            <p style={proseStyle}>
              F8 through F10 describe what makes this possible: the conditions, the capacities, the structural environments in which the return can be learned rather than bypassed. They begin from where M3 ends.
            </p>
            <p style={proseStyle}>
              The pathway is still there. The body was built to come home. What changes is not the sequence — it is whether the conditions exist for it to run.
            </p>
          </section>

          {/* ─── THE REGULATION LANDSCAPE AND THE GRADIENT ── */}
          <section
            id="gradient"
            aria-labelledby="heading-gradient"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-gradient"
              style={sectionHeadingStyle}
            >
              The Regulation Landscape and the Gradient
            </h2>

            <p style={proseStyle}>
              M3 is the ground floor of the TEG-Blue architecture. It maps the full regulation landscape — the designed return, the override, the debris, the signal collapse, the regulation substitutes, temporary relief mistaken for restoration — and connects each to a specific position on the four-mode gradient.
            </p>
            <p style={proseStyle}>
              Each position on the gradient corresponds to a physiological state and a regulation strategy.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Connection Mode — Parasympathetic Dominance.</strong> The nervous system in parasympathetic dominance, with full cortisol clearance, restored oxytocin, and PFC blood flow at capacity. Cycles complete. The return pathway is available.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Protection Mode — The System on Emergency Fuel.</strong> Acute SNS activation — designed to be temporary, biologically expensive, and followed by return. The body is in the cycle. Completion is pending.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Control Mode.</strong> The nervous system in sustained SNS activation, with chronically elevated cortisol and norepinephrine, recruiting cognitive resources and regulation substitutes to manage a body that has not returned. Regulation through others begins here.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Domination Mode.</strong> The nervous system at maximum sympathetic load, with Emotional Resonance (ER) collapsed and the system running on urgency alone. Temporary relief mistaken for restoration occurs here — the only intensity level that still moves the needle.
            </p>

            {/* Gradient-physiology mapping */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "140px 1fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>Mode</div>
                <div style={gridHeaderStyle}>Physiological State</div>
                <div style={gridHeaderStyle}>Regulation Strategy</div>

                <GridCell first>Connection</GridCell>
                <GridCell>Parasympathetic dominance — cortisol cleared, oxytocin available, PFC at capacity</GridCell>
                <GridCell>Cycle complete or never opened. Biological return available.</GridCell>

                <GridCell first>Protection</GridCell>
                <GridCell>Acute SNS activation — designed to be temporary and followed by return</GridCell>
                <GridCell>Cycle open — completion pending. Body searching for discharge.</GridCell>

                <GridCell first>Control</GridCell>
                <GridCell>Sustained SNS activation — chronically elevated cortisol and norepinephrine</GridCell>
                <GridCell>Cycle chronically open. Regulation substitutes recruited. Regulation through others.</GridCell>

                <GridCell first>Domination</GridCell>
                <GridCell>Maximum sympathetic load — Emotional Resonance (ER) collapsed</GridCell>
                <GridCell>Multiple open cycles. Temporary relief mistaken for restoration. Only extreme intensity registers.</GridCell>
              </div>
            </div>

            <p style={proseStyle}>
              The regulation substitutes that F3 through F7 describe are not psychological choices made in a vacuum. They are what a nervous system with open cycles reaches for. When the internal return pathway is blocked — when the cycle cannot complete because Self-Emotional Awareness (SEA) is offline, because suppression is the habitual response, because the developmental environment never provided co-regulation — the nervous system finds external inputs to regulate what it cannot regulate internally.
            </p>
            <p style={proseStyle}>
              The return direction follows the same logic. Moving back toward Connection is not a matter of deciding to be different. It is a matter of creating the biological conditions for the cycle to complete: sufficient safety for discharge to begin, vagal engagement, cortisol clearance, the experience of co-regulation. These conditions are relational, somatic, and time-dependent. They cannot be rushed. They can only be allowed.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004); McEwen (2000) — physiological states without a gradient model connecting them as a developmental sequence. <strong style={{ color: TEXT.primary }}>Somatic and relational:</strong> van der Kolk (2014); Levine (1997); Herman (1992) — how unprocessed activation shapes identity and behaviour over time.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The full regulation landscape — from biological restoration through override through debris through signal collapse through regulation substitutes through temporary relief mistaken for restoration — mapped onto the four-mode gradient as a single, continuous physiological progression. The mode is a body in a specific physiological state, running a specific regulation strategy, shaped by the number and depth of its open cycles.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── DRAWS FROM ──────────────────────────────── */}
          <DrawsFromPanel items={DRAWS_FROM} color={MODEL_COLOR} />

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="m3-regulation-capacities" type="model" />

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
                    label="Understand the signal language"
                    href="/model/m1-emotions-as-signals"
                    linkText="M1: Emotions as Signals →"
                  />
                  <NavRow
                    label="Understand the instrument"
                    href="/model/m2-nervous-system-states"
                    linkText="M2: Nervous System States →"
                  />
                  <NavRow
                    label="Understand what determines whether the cycle is felt"
                    href="/model/m4-awareness-capacities"
                    linkText="M4: Awareness Capacities →"
                  />
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
                    label="Understand why insight alone cannot close the cycle"
                    href="/framework/f12-two-information-systems"
                    linkText="F12: The Two Information Systems →"
                  />
                  <NavRow
                    label="Explore the interactive tools"
                    href="https://teg-blue.com/emotional-tools"
                    linkText="Emotional Tools (teg-blue.com) →"
                    external
                  />
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
            "@id": "https://teg-blue.org/model/m3-regulation-capacities#article",
            headline: "Regulation Capacities: Restoration Capacities",
            description:
              "The full regulation landscape: what the body was designed to do after activation, what blocks the return, what the nervous system reaches for instead, and why none of the substitutes close the cycle. Model M3 of the TEG-Blue system.",
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
            dateModified: "2026-03-20",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue Model System",
              url: "https://teg-blue.org/models",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/model/m3-regulation-capacities",
            },
            about: [
              { "@type": "Thing", name: "Regulation Capacities" },
              { "@type": "Thing", name: "Stress Cycle Completion" },
              { "@type": "Thing", name: "Allostatic Load" },
              { "@type": "Thing", name: "HPA Axis" },
              { "@type": "Thing", name: "Cognitive Override" },
              { "@type": "Thing", name: "Regulation Through Others" },
              { "@type": "Thing", name: "Biological Restoration" },
              { "@type": "Thing", name: "Activation Sequence" },
              { "@type": "Thing", name: "Regulation Substitutes" },
              { "@type": "Thing", name: "Debris" },
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
              "regulation capacities",
              "stress cycle",
              "allostatic load",
              "HPA axis",
              "cortisol",
              "cognitive override",
              "signal submersion",
              "dorsal vagal",
              "regulation through others",
              "biological restoration",
              "regulation substitute",
              "activation sequence",
              "debris",
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
              { name: "M3: Regulation Capacities", url: "/model/m3-regulation-capacities" },
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
                question: "What are Regulation Capacities in the TEG-Blue system?",
                answer:
                  "Regulation Capacities (M3) maps the full regulation landscape: the body's designed return pathway after threat activation, what blocks that return, what the nervous system reaches for instead (substances, physical intensity, work, controlling others), and why none of the substitutes close the cycle. Regulation is not what you do to your emotions — it is what the body does after them.",
              },
              {
                question: "Why can't cognition close a biological stress cycle?",
                answer:
                  "The prefrontal cortex and the amygdala are separate circuits with no direct downregulation pathway from cognitive decision to hormonal cascade. Deciding an emotion is not important sends a signal through the cognitive system, but the HPA axis does not receive it. Completing the cycle requires somatic discharge — motor expression, breathing change, the body moving mobilised energy through its designed channels. Understanding the need for discharge is cognitive; the discharge itself is somatic. One cannot substitute for the other.",
              },
              {
                question: "What is temporary relief mistaken for restoration?",
                answer:
                  "At the extreme end of the regulation substitute arc, the combination of stimuli — domination, violation, the exercise of absolute power — produces the most potent neurochemical event the nervous system can access. The body produces the signature of completion without running the biological sequence. Cortisol is suppressed by intensity, not cleared by completion. The debris remains. The interval between episodes shortens because the floor never reset. The body has been calibrated past the real return sequence.",
              },
              {
                question: "What is signal submersion?",
                answer:
                  "Signal submersion is the TEG-Blue term for what happens when cognition overrides an emotional signal. The override removes access to the signal — not the signal itself. The person loses awareness of the emotion, but the biological cascade continues: cortisol keeps releasing, muscles stay braced, the HPA axis never receives the all-clear. The body holds everything the mind refuses to see. The cherry is there — declaring it invisible is not the same as it not being there.",
              },
              {
                question: "What is Biological Restoration by Mode?",
                answer:
                  "M3 maps two types of biological restoration — somatic (for body-state activation like threat and startle, which can complete alone through breathing, grounding, time, or co-regulation) and relational (for belonging-state activation like shame and rejection, which requires another person staying). Each of the four modes has a distinct restoration profile with different timescales: Connection (continuous tending), Protection (20 minutes to 2 hours), Control (2–8 hours for releasing the cognitive override), and Domination (24–72+ hours for full discharge from maximum activation).",
              },
            ])
          ),
        }}
      />

      {/* ─── JSON-LD: Speakable ──────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Regulation Capacities (M3) — TEG-Blue Research",
              url: "https://teg-blue.org/model/m3-regulation-capacities",
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

const propositionItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
};

const listItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 6,
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
  background: hexToRgba(MODEL_COLOR, 0.1),
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
