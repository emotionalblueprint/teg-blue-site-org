import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, PATTERN_GRADIENT,
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
  { label: "The Common Understanding", href: "#common-understanding" },
  { label: "The Designed Return", href: "#designed-return" },
  { label: "The Override", href: "#override" },
  { label: "What Stays Active", href: "#stays-active" },
  { label: "What the Body Reaches For", href: "#vehicles" },
  { label: "Draws From", href: "#relationship-to-frameworks" },
];

const DRAWS_FROM = [
  { id: "F1", title: "Emotions as Biological Information", relation: "Primary source", description: "Names the process M3 maps physiologically. Biological Restoration — The Fork.", href: "/framework/f1-emotional-gradient" },
  { id: "F2", title: "Awareness Calibration", relation: "Developmental origin", description: "Why restoration fails — the awareness capacities that should facilitate the return.", href: "/framework/f2-awareness-calibration" },
  { id: "F3", title: "False Coherence", relation: "Cognitive maintenance", description: "How cognition constructs coherence over unfinished cycles, hiding the residue.", href: "/framework/f3-false-coherence" },
  { id: "F12", title: "Two Information Systems", relation: "Architecture", description: "Why cognitive understanding cannot close a somatic cycle. The two-system explanation.", href: "/framework/f12-two-information-systems" },
  { id: "M1", title: "Nervous System Signaling", relation: "Paired model", description: "The compass that gets stuck when cycles don't complete. M3 explains the biology of why.", href: "/model/m1-inner-compass" },
  { id: "M2", title: "Three Awareness Capacities", relation: "Paired model", description: "The capacities that determine whether the cycle can be felt, read, and allowed to complete.", href: "/model/m2-three-awareness-capacities" },
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
    "counterfeit return",
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
      "What is the body doing to regulate — and is the cycle completing? The return pathway, the override, and the vehicles the nervous system reaches for instead.",
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
              subtitle="The Return Pathway"
              description="The full regulation landscape: what the body was designed to do after activation, what blocks the return, what the nervous system reaches for instead, and why none of the substitutes close the cycle. This is the physiological substrate that explains why the gradient exists, why the compass gets stuck, and why insight alone does not produce change."
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
        {/* ─── INTERACTIVE DIAGRAM ──────────────────────── */}
        <OpenCycleExplorer />

        <article>
          {/* ─── ANCHOR NOTE ───────────────────────────── */}
          <p
            style={{
              fontSize: 14,
              color: TEXT.muted,
              lineHeight: 1.8,
              maxWidth: 720,
              marginBottom: 32,
              padding: "16px 20px",
              borderLeft: `2px solid ${hexToRgba(MODEL_COLOR, 0.15)}`,
              fontStyle: "italic",
            }}
          >
            M3 maps the full regulation landscape — the body{"'"}s designed return pathway, what happens when it is blocked, and the escalating sequence of substitutes the nervous system reaches for instead. Regulation is not what you do to your emotions. It is what the body does after them. The distinction changes everything.
          </p>

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
                commonUnderstanding: "A terrible event that happened to you — something big enough to justify lasting pain.",
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
                  This cascade was designed to complete: activation → expression → parasympathetic return → cortisol clearance → baseline. The body has a built-in endpoint
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
                  Every vehicle produces real relief. None of them produce return to baseline. The distinction is biological: discharge is not completion
                </li>
                <li style={propositionItemStyle}>
                  The body has no mechanism for receiving philosophical decisions. Deciding an emotion is not important does not change the cortisol level. The cherry is there whether it is seen or not
                </li>
              </ul>
            </ModelPurpose>
          </section>

          {/* ─── CONNECTING SCIENCES FRAMING ──────────────── */}
          <p
            style={{
              fontSize: 14,
              color: TEXT.muted,
              lineHeight: 1.8,
              maxWidth: 720,
              marginBottom: 48,
              padding: "16px 20px",
              borderLeft: `2px solid ${hexToRgba(MODEL_COLOR, 0.15)}`,
              fontStyle: "italic",
            }}
          >
            Each section of M3 draws on research that has already documented these mechanisms in detail — stress physiology, polyvagal theory, somatic experiencing, suppression research, allostatic load science. These fields mapped the territory independently, across decades. What was missing was not the knowledge. It was the connection between them — and between the biology and the felt experience of being a person inside it. M3 holds both.
          </p>

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
              When the nervous system perceives a threat — physical, relational, social, or emotional — a biological sequence activates with a precision the mind cannot intercept. The amygdala fires within twelve milliseconds. This is not slow enough for thought to precede it. The signal is already in motion before a single word about it forms.
            </p>
            <p style={proseStyle}>
              The amygdala fires along two simultaneous pathways. The fast pathway — thalamus to amygdala — activates within twelve milliseconds: crude, immediate, and often imprecise. The slow pathway — thalamus to cortex to amygdala — activates within approximately two hundred milliseconds, adding contextual detail. By the time the slow pathway completes, the body has already begun responding. The emotional signal does not wait for permission.
            </p>
            <p style={proseStyle}>
              From the amygdala, the hypothalamic-pituitary-adrenal axis activates. The hypothalamus releases corticotropin-releasing hormone (CRH), which signals the pituitary to release ACTH, which signals the adrenal glands to release cortisol. Simultaneously, the adrenal medulla releases epinephrine and norepinephrine directly into the bloodstream. Blood glucose rises. Heart rate increases. Digestion halts. Muscles brace. Pupils dilate. Blood flow to the prefrontal cortex decreases as the brainstem and limbic system take priority.
            </p>
            <p style={proseStyle}>
              Every organ system shifts to survival configuration. This is not metaphor — it is measurable, systemic, and whole-body. The amygdala dominates. Working memory narrows. Serotonin and GABA — the nervous system{"'"}s brakes — reduce relative to the accelerators. Oxytocin, the chemistry of trust and co-regulation, suppresses.
            </p>
            <p style={proseStyle}>
              The body is doing exactly what it was designed to do. The problem is not the cascade. The problem is what happens — or does not happen — next.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The body had already begun responding before the mind had decided whether the threat was real. This sequencing is not a design flaw. It is a survival feature. But it means the physiological response cannot simply be cancelled by deciding the emotion is unnecessary.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Threat detection:</strong> LeDoux (1996) — dual-pathway threat detection, amygdala firing before cortical processing. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) — the HPA axis, cortisol, and the whole-body reconfiguration of the stress response. <strong style={{ color: TEXT.primary }}>Neuroception:</strong> Porges (2011) — continuous subconscious evaluation preceding and faster than conscious awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The connection between the specific felt emotion and the specific biological cascade — held together, not dissolved into generic {"\""} stress.{"\""} The shame that gets overridden in a meeting and the cortisol pattern that follows are the same event described from two angles. Making that explicit changes what override means.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 2: WHAT COMPLETION REQUIRES ────── */}
          <section
            id="designed-return"
            aria-labelledby="heading-designed-return"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-designed-return"
              style={sectionHeadingStyle}
            >
              2. What Completion Requires
            </h2>

            <p style={proseStyle}>
              The stress response was designed to complete. Every mammalian nervous system carries a built-in return sequence — not as an optional add-on but as the endpoint the cascade was always moving toward. The activation is stage one. The return is stage two. Without stage two, stage one never ends.
            </p>

            <h3 style={h3Style}>The Return Sequence</h3>
            <p style={proseStyle}>
              The return sequence runs in order. Expression first: trembling, crying, movement, breath change, vocalization. The body discharges the mobilized energy. Emotional tears contain stress hormones — this is not poetic; it is physiological. Trembling is the nervous system running the discharge sequence. Animals that survive predator encounters shake. The shaking is not distress; it is completion.
            </p>
            <p style={proseStyle}>
              Expression activates the parasympathetic return. The vagus nerve — the body{"'"}s primary parasympathetic pathway — engages the ventral vagal complex. Heart rate slows. The gut re-engages. The face softens. The voice recovers prosody. Social engagement — the capacity to read and respond to others — comes back online. This is the vagal brake: the body{"'"}s built-in signal that the threat has passed.
            </p>
            <p style={proseStyle}>
              Cortisol clearance follows. The hippocampus, once the SNS quiets sufficiently, sends feedback to the hypothalamus: the cascade can stop. This negative feedback loop is the biological {"'"}all clear.{"'"} Without it, the hypothalamus continues producing CRH, which continues producing ACTH, which continues producing cortisol. The axis keeps running not because it is malfunctioning but because it never received the signal to stop.
            </p>
            <p style={proseStyle}>
              The liver metabolizes the cortisol over twenty minutes to several hours. Serotonin, GABA, and oxytocin normalize. The prefrontal cortex receives restored blood flow. Executive function, flexibility, and language return. The hippocampus encodes the experience with context — not as raw threat but as a processed event with a before and after. The cycle closes. The body returns to baseline. Allostatic load: nothing added.
            </p>

            <h3 style={h3Style}>Why Cognition Cannot Close the Cycle</h3>
            <p style={proseStyle}>
              The prefrontal cortex and the amygdala are separate circuits. They are connected — the PFC can modulate amygdala reactivity, and the amygdala can suppress PFC function under threat — but they do not have a direct downregulation pathway from cognitive decision to hormonal cascade. Deciding the emotion is not important sends a signal through the cognitive system. The HPA axis does not receive it. The cortisol already in circulation does not respond to it.
            </p>
            <p style={proseStyle}>
              Completing the cycle requires the discharge phase to begin — motor expression, breathing change, or the body moving the mobilized energy through the channels it was designed to use. This is not a cognitive operation. It is a somatic one. Understanding the need for discharge is cognitive. The discharge itself is biological. These are different actions in different systems.
            </p>
            <p style={proseStyle}>
              A cognitively induced sense of calm can occur while the HPA axis continues running — the person feels calmer because their attention has shifted, while their cortisol level, immune function, and organ configuration remain in survival mode. The sensitized amygdala responds faster than the prefrontal cortex can intercept. As allostatic load increases, the window in which cognition can engage before the response fires narrows. Cognition is arriving late to a body that has already left.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The body does not reason its way back to baseline. It restores through the same somatic channels it departed through. Understanding is cognitive. The cycle is biological. More understanding does not close an open biological cycle. What closes it is what the body was always waiting for — completion.
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
                F1 calls this Biological Restoration — The Fork of all twelve frameworks. F1 maps the design and the pathways. M3 maps the physiology underneath.
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: MODEL_COLOR }}>
                Read the design &rarr;
              </div>
            </Link>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — trauma as incomplete threat response; the body completing the cycle through discharge. <strong style={{ color: TEXT.primary }}>Stress cycle completion:</strong> Nagoski &amp; Nagoski (2019) — the biological stress cycle requires completion, not management. <strong style={{ color: TEXT.primary }}>Vagal pathways:</strong> Porges (2011) — the vagal brake, ventral vagal complex, co-regulation as the primary completion pathway. <strong style={{ color: TEXT.primary }}>Dual-process theory:</strong> Kahneman (2011) — System 1 and System 2 as distinct processing systems with different update mechanisms.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The stage-by-stage physiological mechanism of completion — why each stage is necessary for the next to occur, and specifically what the hippocampal feedback loop requires — alongside the precise physiological explanation for why the cognitive system cannot close a biological cycle. The insight-behaviour gap is a correct description of two systems with different update requirements. Knowing this changes the intervention: not more insight, but the biological conditions the cycle was always waiting for.
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
              3. Cognitive Management — The Override
            </h2>

            <h2 id="heading-override-question" style={sectionHeadingStyle}>
              What happens in the body when an emotional response is suppressed?
            </h2>

            <p style={proseStyle}>
              Cognitive override does not reach the body. This is the central physiological fact of M3, and it is not intuitive — which is part of why it matters.
            </p>
            <p style={proseStyle}>
              When cognition decides an emotion is irrelevant, inappropriate, or dangerous, it overrides the person{"'"}s <em>access</em> to the signal. It does not override the signal. The amygdala does not receive the memo. The HPA axis does not pause mid-cascade to consult the prefrontal cortex about whether this emotion is acceptable. The cortisol already released does not reabsorb because the mind decided the threat was not worth responding to.
            </p>

            <h3 style={h3Style}>Parallel Tracks</h3>
            <p style={proseStyle}>
              The sequence of override unfolds in parallel tracks. The mind detects the emotion arising. The mind labels it — as weakness, as overreaction, as something to manage later, as something that should not exist. Attention redirects to analysis, narrative construction, or problem-solving. The mind concludes the emotion is handled.
            </p>
            <p style={proseStyle}>
              Meanwhile: the epinephrine and norepinephrine are sustaining the arousal state. The muscles are still braced. The gut is still diverted. The cortisol is still releasing. The hippocampus — which needs the discharge phase to have begun before it can send the all-clear — has not received the discharge signal. The HPA negative feedback loop does not trigger. The cycle stays open.
            </p>
            <p style={proseStyle}>
              The person returns to normal cognitive functioning. The body remains in partial sympathetic activation. The cycle is not resolved — it is invisible.
            </p>
            <p style={proseStyle}>
              The next time a threat is perceived, the response fires from an already-elevated baseline. It activates faster, reaches higher, and takes longer to subside. Each override makes the next one more likely and more costly.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              What the override removes is access to the signal — not the signal itself. The body is already feeling it. There is no version of {"'"}deciding{"'"} an emotion is not there that changes the physiological fact of it. The cherry is there. Deciding it is invisible is not the same as it not being there.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Emotion suppression:</strong> Gross (1998) — suppression reduces expressive behaviour while maintaining physiological arousal. <strong style={{ color: TEXT.primary }}>Somatic markers:</strong> Damasio (1994) — the body{"'"}s signals run below and faster than conscious awareness; cognition cannot cancel them. <strong style={{ color: TEXT.primary }}>Body memory:</strong> van der Kolk (2014) — unprocessed activation is stored somatically, not resolved cognitively.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
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
              4. What Stays Active — Debris and Accumulation
            </h2>

            <p style={proseStyle}>
              When the cycle is not completed, specific systems remain in activation — often indefinitely — because the biological conditions for their return were never met.
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
              The accumulation is not in the mind. It is in the cortisol receptor density, the hippocampal volume, the vagal tone, the amygdala sensitivity threshold. Understanding the accumulation cognitively does not reverse it — because the understanding happens in the cognitive system and the accumulation happened in the biological one.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen &amp; Stellar (1993); McEwen (2000) — cumulative physiological cost of chronic activation. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) — organ-level consequences of sustained cortisol. <strong style={{ color: TEXT.primary }}>Interoception:</strong> Craig (2002); Damasio (1994) — how chronic activation impairs the body{"'"}s capacity to read its own internal state. <strong style={{ color: TEXT.primary }}>Epigenetics:</strong> Meaney (2001) — chronic stress changes gene expression patterns governing stress reactivity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The system-by-system account of what stays active after a single unfinished cycle and the progression from low load to structural reorganisation — not just accumulated over years but present in the hours after a single override. This makes the cost concrete and immediate. It also connects each physiological residue directly to the felt experience: depleted serotonin is the irritability that appears hours later; suppressed oxytocin is the difficulty being comforted; the sensitised amygdala is the disproportionate reaction to the next small thing. Allostatic load mapped to gradient position: each position corresponding to a specific physiological load level.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 5: WHEN THE SIGNAL GOES SILENT ──── */}
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
              When the return has not completed across enough cycles, across enough time, the nervous system can shift from chronic high-activation to something different: the disappearance of signal entirely. The body stops broadcasting. Not because the debris has cleared — it has not. But because the alert system, finding no resolution across repeated cycles, begins to suppress its own output.
            </p>

            <h3 style={h3Style}>What This Produces</h3>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Emotional flatness.</strong> Not the absence of emotion — the absence of access to it. The signal is still present at the physiological level. The person cannot feel it.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Loss of interoceptive contact.</strong> The body{"'"}s internal communications — hunger, tension, desire, dread — become unreliable or absent. The person reports feeling nothing, or not knowing what they feel. This is not psychological resistance. It is the degradation of the signal channel itself.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Anhedonia.</strong> The dopaminergic system, chronically depleted by repeated activation-without-resolution, stops registering reward. Things that should produce response do not.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Social withdrawal that does not register as withdrawal.</strong> Connection requires biological resources the system no longer has. The person is not avoiding others — they have lost the circuitry that makes contact feel like anything.
            </p>
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

          {/* ─── CONCEPT 6: REGULATION THROUGH OTHERS ────── */}
          <section
            id="regulation-through-others"
            aria-labelledby="heading-regulation-through-others"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-regulation-through-others"
              style={sectionHeadingStyle}
            >
              6. Regulation Through Others
            </h2>

            <p style={proseStyle}>
              When the internal return pathway is blocked — when the nervous system cannot complete the cycle alone — it redirects. One direction: outward. Using control over others to discharge accumulated activation.
            </p>
            <p style={proseStyle}>
              This is not a description of dysfunctional behaviour. It is a description of a biological mechanism.
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

            <OperationalStatement color={MODEL_COLOR}>
              Controlling others produces a real neurochemical shift. The body learns to repeat it because it worked. Three episodes are enough for conditioning to begin.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Controllability and stress:</strong> Maier &amp; Seligman (2016) — perceived controllability modulates the stress response at the neurochemical level. <strong style={{ color: TEXT.primary }}>Dominance and hormones:</strong> Archer (2006); Mazur &amp; Booth (1998) — testosterone-cortisol dynamics in dominant behaviour. <strong style={{ color: TEXT.primary }}>Conditioning:</strong> Pavlov; Skinner — classical and operant conditioning of arousal-reduction behaviours.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The specific neurochemical mechanism by which controlling others produces real physiological relief — not metaphorical relief, not psychological satisfaction, but a measurable cortisol drop and testosterone shift. This explains why the behaviour repeats: it worked. It also explains why it escalates: the underlying debris is untouched, so the relief is temporary and the dose must increase. The nervous system is selecting what produced the only signal it could interpret as safety.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 7: EVERYTHING BECOMES A VEHICLE ── */}
          <section
            id="vehicles"
            aria-labelledby="heading-vehicles"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-vehicles"
              style={sectionHeadingStyle}
            >
              7. Everything Becomes a Vehicle
            </h2>

            <p style={proseStyle}>
              The nervous system{"'"}s search for relief does not stop with other people. Any external input that produces the neurochemical shift becomes a potential vehicle. The mechanism is identical across all of them: temporary discharge, no resolution, escalating need.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Substances.</strong> Alcohol, stimulants, opioids, cannabis — each acts on a specific part of the stress response. Each works. Each requires more over time, because the underlying cycles are still open.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Physical intensity.</strong> Compulsive exercise, risk-taking, extreme sports, physical pain — high-intensity physical states produce the discharge the stress response was designed to complete through movement. The relief is real. The cycle stays open because the activation source — the accumulated debris — is not what the physical intensity is addressing.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Work, achievement, productivity.</strong> The nervous system experiences goal pursuit as controllability, and controllability as safety. When the work stops, the debris is still there.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Screens, food, consumption.</strong> Dopaminergic stimulation through novelty, reward, or sensory input provides brief modulation of the alert state. The cycle does not close.
            </p>

            <h3 style={h3Style}>The Healthy Vehicle</h3>
            <p style={proseStyle}>
              The same mechanism runs through activities the person believes are resolving the problem. Exercise chosen for intensity rather than completion. Meditation extended past its natural endpoint, chased for the calm rather than entered for what is there. Breathwork, cold exposure, fasting, sensory silence — each one capable of producing real physiological shift. Each one, when the return pathway is blocked, used as discharge. The relief is real. The debris is untouched. Tomorrow the same dose is required, and the next day slightly more.
            </p>
            <p style={proseStyle}>
              The body does not distinguish the source of discharge. It distinguishes only whether the cycle completed. The person who runs daily and still cannot settle is not doing the wrong activity. The activity is doing the wrong job — covering the alarm rather than closing it.
            </p>

            <h3 style={h3Style}>The Counterfeit Return</h3>
            <p style={proseStyle}>
              At the far end of the vehicle arc, something different happens. Not discharge that falls short of resolution. A simulation of resolution itself.
            </p>
            <p style={proseStyle}>
              The combination of stimuli available at this end — domination, violation, taboo, the exercise of absolute power over another body — produces the most potent neurochemical event the nervous system can access. Dopamine surges. Testosterone spikes. Cortisol suppresses. Adrenaline floods and clears. The amygdala quiets. The pressure releases. The body registers: <em>finished.</em>
            </p>
            <p style={proseStyle}>
              The sequence did not run. The body just stopped feeling it running.
            </p>
            <p style={proseStyle}>
              The HPA axis never received the hippocampal all-clear. Cortisol was suppressed by intensity — not cleared by completion. It rebounds. Serotonin, drawn down across every prior cycle, depletes further in the crash. Oxytocin was never produced — this is a domination state, not a bonding state. The neural circuits that were mid-loop at activation have not completed. They have been overridden by a signal strong enough to silence them. They are still running underneath.
            </p>
            <p style={proseStyle}>
              Every other vehicle produces a discharge that falls short of return. The person can feel the gap — residual tension, unease, something unfinished. That gap is information. The extreme vehicle closes the gap. Not by resolving it. By producing a state that feels identical to resolution. The body learns: <em>this is what finished feels like.</em> Which means the actual conditions for biological return — safety, time, co-regulation — begin to produce nothing recognizable. They are too quiet. The body has been calibrated to an intensity that the real return sequence cannot match.
            </p>

            <h3 style={h3Style}>Why None of It Resolves</h3>
            <p style={proseStyle}>
              Every external regulation vehicle produces discharge. None of them produce return to baseline. The distinction is biological.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Discharge</strong> is the release of mobilized energy. It reduces the felt pressure. It temporarily suppresses parts of the stress response. Discharge is real. It is not resolution.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Return to baseline</strong> requires the specific biological sequence to complete: the discharge phase, the parasympathetic return, the HPA negative feedback loop, cortisol clearance, the restoration of serotonin and oxytocin, the hippocampus encoding the event as finished. These are physiological events. They require specific inputs — somatic and relational, not external-vehicle-shaped.
            </p>
            <p style={proseStyle}>
              None of these vehicles contain their own stopping mechanism. The biological return sequence does — it has a built-in endpoint: cortisol clears, the hippocampus sends the all-clear, the HPA axis stands down. External vehicles have no such endpoint. They have no signal that tells the system: <em>finished.</em>
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The vehicle changes. The mechanism does not. Temporary discharge. No resolution. The bar rises. The alarm stays on. The body is still waiting for what it was always waiting for: the completion the vehicle cannot provide.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Substance mechanisms:</strong> Koob &amp; Le Moal (2001) — neurobiological mechanisms of addiction as failed regulation attempts. <strong style={{ color: TEXT.primary }}>Exercise and stress:</strong> Salmon (2001) — exercise as stress discharge without cycle completion. <strong style={{ color: TEXT.primary }}>Behavioural conditioning:</strong> Robinson &amp; Berridge (2003) — incentive salience and the escalation of wanting without liking.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The unified mechanism across all vehicles — from substances through healthy exercise through domination — as the same biological search at different intensity levels. The key insight is the healthy vehicle: the right activity doing the wrong job. This reframes the conversation from {"'"}good coping versus bad coping{"'"} to a single question: is the cycle completing? If the answer is no, the vehicle will escalate regardless of how socially acceptable it appears. The counterfeit return explains why some vehicles produce the signature of completion while leaving the debris untouched — and why the interval between episodes shortens rather than lengthens.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 8: THE REGULATION LANDSCAPE ─────── */}
          <section
            id="gradient"
            aria-labelledby="heading-gradient"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-gradient"
              style={sectionHeadingStyle}
            >
              8. The Regulation Landscape and the Gradient
            </h2>

            <p style={proseStyle}>
              M3 is the ground floor of the TEG-Blue architecture. It maps the full regulation landscape — the designed return, the override, the debris, the signal collapse, the vehicles, the counterfeit return — and connects each to a specific position on the four-mode gradient.
            </p>
            <p style={proseStyle}>
              Each position on the gradient corresponds to a physiological state and a regulation strategy.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Connection Mode — The System{"'"}s Baseline.</strong> The nervous system in parasympathetic dominance, with full cortisol clearance, restored oxytocin, and PFC blood flow at capacity. Cycles complete. The return pathway is available.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Protection Mode — The System on Emergency Fuel.</strong> Acute SNS activation — designed to be temporary, biologically expensive, and followed by return. The body is in the cycle. Completion is pending.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Control Mode.</strong> The nervous system in sustained SNS activation, with chronically elevated cortisol and norepinephrine, recruiting cognitive resources and external vehicles to manage a body that has not returned. Regulation through others begins here.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Domination Mode.</strong> The nervous system at maximum sympathetic load, with emotional resonance collapsed and the system running on urgency alone. The counterfeit return lives here — the only intensity level that still moves the needle.
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
                <GridCell>Cycle chronically open. External vehicles recruited. Regulation through others.</GridCell>

                <GridCell first>Domination</GridCell>
                <GridCell>Maximum sympathetic load — emotional resonance collapsed</GridCell>
                <GridCell>Multiple open cycles. Counterfeit return. Only extreme intensity registers.</GridCell>
              </div>
            </div>

            <p style={proseStyle}>
              The external regulation substitutes that F3 through F7 describe are not psychological choices made in a vacuum. They are what a nervous system with open cycles reaches for. When the internal return pathway is blocked — when the cycle cannot complete because SEA (Self-Emotional Awareness) is offline, because suppression is the habitual response, because the developmental environment never provided co-regulation — the nervous system finds external inputs to regulate what it cannot regulate internally.
            </p>
            <p style={proseStyle}>
              The return direction follows the same logic. Moving back toward Connection is not a matter of deciding to be different. It is a matter of creating the biological conditions for the cycle to complete: sufficient safety for discharge to begin, vagal engagement, cortisol clearance, the experience of co-regulation. These conditions are relational, somatic, and time-dependent. They cannot be rushed. They can only be allowed.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004); McEwen (2000) — physiological states without a gradient model connecting them as a developmental sequence. <strong style={{ color: TEXT.primary }}>Trauma literature:</strong> van der Kolk (2014); Levine (1997); Herman (1992) — how unprocessed activation shapes identity and behaviour over time.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The full regulation landscape — from biological return through override through debris through signal collapse through vehicles through the counterfeit return — mapped onto the four-mode gradient as a single, continuous physiological progression. The gap between the stress physiology literature (which describes states) and the trauma literature (which describes trajectories) is exactly the space M3 and the gradient occupy together. The mode is a body in a specific physiological state, running a specific regulation strategy, shaped by the number and depth of its open cycles.
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
                    label="Understand the instrument"
                    href="/model/m1-inner-compass"
                    linkText="M1: Nervous System Signaling →"
                  />
                  <NavRow
                    label="Understand what determines whether the cycle is felt"
                    href="/model/m2-three-awareness-capacities"
                    linkText="M2: Three Awareness Capacities →"
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
            headline: "Regulation Capacities: The Return Pathway",
            description:
              "The full regulation landscape: what the body was designed to do after activation, what blocks the return, what the nervous system reaches for instead, and why none of the substitutes close the cycle. Model M3 of the TEG-Blue system.",
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
            dateModified: "2026-03-17",
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
              { "@type": "Thing", name: "Counterfeit Return" },
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
              "counterfeit return",
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
                question: "What is the counterfeit return?",
                answer:
                  "The counterfeit return occurs when extreme vehicles — domination, violation, the exercise of absolute power — produce the most potent neurochemical event the nervous system can access. The body registers the signature of completion, but the HPA axis never received the all-clear. Cortisol was suppressed by intensity, not cleared by completion. The debris is still there. The interval between episodes shortens because the floor never reset. The body has been calibrated past the real return sequence.",
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
