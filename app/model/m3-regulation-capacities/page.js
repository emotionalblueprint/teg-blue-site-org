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
  { label: "The Threat Cascade", href: "#threat-cascade" },
  { label: "Biological Restoration", href: "#designed-return" },
  { label: "The Override", href: "#override" },
  { label: "What Stays Active", href: "#stays-active" },
  { label: "When Signal Goes Silent", href: "#signal-collapse" },
  { label: "What the Body Reaches For", href: "#vehicles" },
  { label: "The Thread Forward", href: "#thread-forward" },
];

const SIDEBAR_SECTIONS = [
  { label: "The Common Understanding", href: "#common-understanding", description: "What most people think regulation and trauma mean — and what the nervous system is actually doing." },
  { label: "The Threat Cascade", href: "#threat-cascade", description: "What the body does in the first milliseconds of a stress response — before thought can intervene." },
  { label: "Biological Restoration", href: "#designed-return", description: "The biological sequence the body was built to complete — and why cognition cannot close it." },
  { label: "The Override", href: "#override", description: "What happens when we push through an emotion — what the mind removes and what the body keeps running." },
  { label: "What Stays Active", href: "#stays-active", description: "System-by-system residue from an unfinished response — and what accumulation looks like over time." },
  { label: "When Signal Goes Silent", href: "#signal-collapse", description: "The second failure mode: not escalation but collapse. The body stops broadcasting." },
  { label: "Regulation Through Others", href: "#regulation-through-others", description: "Why controlling others produces real neurochemical relief — and why the relief never lasts." },
  { label: "What the Body Reaches For", href: "#vehicles", description: "Substances, intensity, work, healthy habits — the same mechanism at different intensity levels." },
  { label: "The Four Modes", href: "#four-modes", description: "How the full regulation landscape maps onto the four nervous system positions." },
  { label: "The Thread Forward", href: "#thread-forward", description: "The three-model emotion sequence — and why the restoration pathway is still there." },
];

const DRAWS_FROM = [
  { id: "F1", title: "Emotions as Biological Information", relation: "Primary source", description: "Names the Biological Restoration process that M3 maps physiologically — the fork between completion and what replaces it.", href: "/framework/f1-emotional-gradient" },
  { id: "F2", title: "Awareness Calibration", relation: "Developmental origin", description: "Why Biological Restoration fails to develop — the awareness capacities that should facilitate completion.", href: "/framework/f2-awareness-calibration" },
  { id: "F3", title: "False Coherence", relation: "Cognitive maintenance", description: "How cognition constructs coherence over unfinished cycles, hiding what the body is still carrying.", href: "/framework/f3-false-coherence" },
  { id: "F12", title: "Two Information Systems", relation: "Architecture", description: "Why cognitive understanding cannot close a somatic cycle — the two-system explanation.", href: "/framework/f12-two-information-systems" },
  { id: "M1", title: "Nervous System Signaling", relation: "Paired model", description: "Maps the four regulatory states the nervous system moves through. M3 explains the biology of why those states persist.", href: "/model/m1-inner-compass" },
  { id: "M2", title: "Three Awareness Capacities", relation: "Paired model", description: "Maps the capacities that determine whether a stress cycle can be felt, read, and allowed to complete.", href: "/model/m2-three-awareness-capacities" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Regulation Capacities (M3) | TEG-Blue Research",
  description:
    "A working model of the full regulation landscape: what the body was designed to do after stress activation, what blocks the return to baseline, what the nervous system reaches for instead, and why none of the substitutes close the cycle.",
  keywords: [
    "regulation capacities",
    "stress cycle",
    "HPA axis",
    "cortisol",
    "allostatic load",
    "emotional suppression",
    "threat cascade",
    "biological completion",
    "cognitive override",
    "emotional technology",
    "nervous system regulation",
    "dorsal vagal",
    "regulation through others",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m3-regulation-capacities",
  },
  openGraph: {
    title: "Regulation Capacities — M3 Model | TEG-Blue",
    description:
      "What the body was designed to do after stress activation, what blocks Biological Restoration, what the nervous system reaches for instead, and why none of the substitutes close the cycle.",
    url: "https://teg-blue.org/model/m3-regulation-capacities",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regulation Capacities — TEG-Blue M3",
    description:
      "What is the body doing to regulate — and is the cycle completing? Biological Restoration, the override, and what the nervous system reaches for instead.",
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
        sidebarSections={SIDEBAR_SECTIONS}
        header={
          <>
            <ModelHero
              badge="MODEL M3"
              title="Regulation Capacities"
              subtitle="The Return Pathway"
              description="When something stressful happens, the body responds — heart rate up, muscles braced, everything shifting to handle the moment. That response was designed to finish. The body was supposed to come back down. Most of the time, it doesn't. We push through, override it, move on. The body keeps running what it started — underneath, where we can no longer feel it. This model maps what happens next: what stays active when the response doesn't complete, what the body reaches for instead, and why the substitutes produce real relief but never resolve what started them."
              coreQuestion="What is the body still running — and has it actually finished?"
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
        <article>
          {/* ─── FRAMING NOTE ─────────────────────────────── */}
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
            Most people know the feeling: something stressful happens, the body reacts, and hours later there is still a residue — tension that will not settle, a reaction bigger than the situation seemed to warrant, a restlessness with no clear source. This page presents a working model of what is happening physiologically in those moments — drawing on established research in stress physiology, polyvagal theory, somatic experiencing, and suppression science. These fields have mapped these mechanisms independently, across decades. What this model proposes is the connection between them — and between the biology and the felt experience of being a person inside it.
          </p>

          {/* ─── THE COMMON UNDERSTANDING ──────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Regulation",
                commonUnderstanding: "Calming down. Managing your emotions. Getting yourself under control.",
                definition: "Physical cleanup. Stress hormones metabolised. Muscles unclenched. Inflammatory compounds cleared. Neural circuits recovered. The body returning to its baseline state — not through a skill applied, but through a biological sequence that was already running. Regulation is not what a person does to their emotions. It is what the body does after them.",
              },
              {
                title: "Trauma",
                commonUnderstanding: "An overwhelming event that left lasting damage.",
                definition: "An incomplete biological response — activation the nervous system could not fully discharge or integrate, regardless of whether the experience felt overwhelming or produced no felt emotion at all. What matters is not the event. It is what the body could not complete.",
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
            <p style={{ ...proseStyle, marginBottom: 20 }}>
              M3 rests on the following propositions, each drawn from established research traditions and connected by this model into a single account:
            </p>
            <ModelPurpose color={MODEL_COLOR}>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={propositionItemStyle}>
                  When the nervous system perceives a threat, a precise biological cascade activates — hormonal, neurochemical, and organ-level — before any conscious thought forms
                </li>
                <li style={propositionItemStyle}>
                  This cascade has a built-in completion sequence: activation → expression → parasympathetic return → cortisol clearance → baseline. The body has a designed endpoint
                </li>
                <li style={propositionItemStyle}>
                  When cognition overrides the emotion — labelling it irrelevant, dangerous, or weak — the override reaches awareness, not biology. The cascade continues below the threshold of conscious access
                </li>
                <li style={propositionItemStyle}>
                  The signal without completion is not a suppressed feeling. It is an open biological cycle: cortisol still releasing, amygdala still sensitising, organs still in survival configuration
                </li>
                <li style={propositionItemStyle}>
                  When the restoration pathway is blocked, the nervous system does not wait. It redirects — through substances, through physical intensity, through controlling others, through any external input that produces the neurochemical shift the body is searching for
                </li>
                <li style={propositionItemStyle}>
                  Every such input produces real relief. None of them produce return to baseline. The distinction is biological: discharge is not completion
                </li>
                <li style={propositionItemStyle}>
                  The body has no mechanism for receiving philosophical decisions. Deciding an emotion is not important does not change the cortisol level. The biological signal persists whether or not the person has access to it
                </li>
              </ul>
            </ModelPurpose>
          </section>

          {/* ─── THE OPEN CYCLE ─────────────────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={sectionHeadingStyle}>
              The Open Cycle
            </h2>
            <p style={{ ...proseStyle, marginBottom: 16 }}>
              The interactive below maps the three phases of an emotional activation: the initial cascade, the completion pathway, and what happens when cognition overrides the signal. Each phase can be explored step by step. The sections that follow explain each in detail.
            </p>
            <OpenCycleExplorer />
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
              When the nervous system perceives a threat — physical, relational, social, or emotional — a biological sequence activates with a precision the mind cannot intercept. The amygdala fires within approximately twelve milliseconds. This is not slow enough for thought to precede it. The signal is already in motion before a single word about it forms.
            </p>
            <p style={proseStyle}>
              The amygdala fires along two simultaneous pathways. The fast pathway — thalamus to amygdala — activates within milliseconds: crude, immediate, and often imprecise. The slow pathway — thalamus to cortex to amygdala — activates within approximately two hundred milliseconds, adding contextual detail. By the time the slow pathway completes, the body has already begun responding.
            </p>
            <p style={proseStyle}>
              From the amygdala, the hypothalamic-pituitary-adrenal (HPA) axis activates. The hypothalamus releases corticotropin-releasing hormone (CRH), which signals the pituitary to release ACTH, which signals the adrenal glands to release cortisol. Simultaneously, the adrenal medulla releases epinephrine and norepinephrine directly into the bloodstream. Blood glucose rises. Heart rate increases. Digestion halts. Muscles brace. Blood flow to the prefrontal cortex decreases as the brainstem and limbic system take priority.
            </p>
            <p style={proseStyle}>
              Every organ system shifts to survival configuration. The amygdala dominates. Working memory narrows. Serotonin and GABA — the nervous system{"'"}s brakes — reduce relative to the accelerators. Oxytocin, the chemistry of trust and co-regulation, suppresses.
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
                  <strong style={{ color: TEXT.primary }}>Threat detection:</strong> LeDoux (1996) documented the dual-pathway threat detection system, with the amygdala firing before cortical processing. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) mapped the HPA axis, cortisol dynamics, and the whole-body reconfiguration of the stress response. <strong style={{ color: TEXT.primary }}>Neuroception:</strong> Porges (2011) described the continuous subconscious evaluation of safety that operates faster than conscious awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What this model proposes" type="opendata">
                <p style={expandedProseStyle}>
                  That the specific felt emotion and the specific biological cascade are the same event described from two angles — and that holding them together, rather than dissolving the emotion into generic {"\""} stress,{"\""} changes what suppression means and what intervention requires. Existing fields typically describe the cascade in general terms; M3 proposes mapping specific emotional signals to specific physiological sequences.
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
              2. What Completion Requires — Biological Restoration
            </h2>

            <p style={proseStyle}>
              The stress response was designed to complete. Every mammalian nervous system carries a built-in restoration sequence — not as an optional add-on but as the endpoint the cascade was always moving toward. The activation is stage one. Biological Restoration is stage two. Without stage two, stage one never ends.
            </p>

            <h3 style={h3Style}>The Restoration Sequence</h3>
            <p style={proseStyle}>
              The restoration sequence runs in order. Expression first: trembling, crying, movement, breath change, vocalisation. The body discharges the mobilised energy. Trembling, which appears across mammalian species after predator encounters, appears to function as the nervous system running a discharge sequence — a mechanism described in detail by Levine (1997).
            </p>
            <p style={proseStyle}>
              Expression activates the parasympathetic return. The vagus nerve — the body{"'"}s primary parasympathetic pathway — engages the ventral vagal complex. Heart rate slows. The gut re-engages. The face softens. The voice recovers prosody. Social engagement — the capacity to read and respond to others — comes back online. This is the vagal brake: the body{"'"}s built-in signal that the threat has passed.
            </p>
            <p style={proseStyle}>
              Cortisol clearance follows. The hippocampus, once the sympathetic nervous system quiets sufficiently, sends feedback to the hypothalamus: the cascade can stop. This negative feedback loop is the biological {"'"}all clear.{"'"} Without it, the hypothalamus continues producing CRH, which continues producing ACTH, which continues producing cortisol. The axis keeps running — not because it is malfunctioning, but because it never received the signal to stop.
            </p>
            <p style={proseStyle}>
              The liver metabolises the cortisol over twenty minutes to several hours. Serotonin, GABA, and oxytocin normalise. The prefrontal cortex receives restored blood flow. Executive function, flexibility, and language return. The hippocampus encodes the experience with context — not as raw threat but as a processed event with a before and after. The cycle closes. The body returns to baseline. Allostatic load: nothing added.
            </p>

            <h3 style={h3Style}>Why Cognition Cannot Close the Cycle</h3>
            <p style={proseStyle}>
              The prefrontal cortex and the amygdala are connected but operate through different circuits. The prefrontal cortex can modulate amygdala reactivity over time, and the amygdala can suppress prefrontal function under threat — but there is no direct downregulation pathway from a cognitive decision to the hormonal cascade already in progress. Deciding the emotion is not important sends a signal through the cognitive system. The HPA axis does not receive it.
            </p>
            <p style={proseStyle}>
              Completing the cycle requires the discharge phase to begin — motor expression, breathing change, or the body moving the mobilised energy through the channels it was designed to use. Understanding the need for discharge is cognitive. The discharge itself is somatic. These are different actions in different systems.
            </p>
            <p style={proseStyle}>
              A cognitively induced sense of calm can occur while the HPA axis continues running — the person feels calmer because their attention has shifted, while their cortisol level, immune function, and organ configuration remain in survival mode. As allostatic load increases, the window in which cognition can engage before the stress response fires narrows further.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The body does not reason its way back to baseline. It restores through the same somatic channels it departed through. Understanding is cognitive. The cycle is biological. One cannot substitute for the other. What closes the cycle is what the body was always waiting for — completion.
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
                In the TEG-Blue framework, F1 calls this process Biological Restoration — the fork between a cycle that completes and a cycle that stays open. F1 maps the design and the pathways. M3 maps the physiology underneath.
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: MODEL_COLOR }}>
                Read the design &rarr;
              </div>
            </Link>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) documented incomplete threat responses and the body completing cycles through discharge. <strong style={{ color: TEXT.primary }}>Stress cycle completion:</strong> Nagoski &amp; Nagoski (2019) described the biological stress cycle as requiring completion, not management. <strong style={{ color: TEXT.primary }}>Vagal pathways:</strong> Porges (2011) mapped the vagal brake, ventral vagal complex, and co-regulation as the primary completion pathway. <strong style={{ color: TEXT.primary }}>Dual-process theory:</strong> Kahneman (2011) described System 1 and System 2 as distinct processing systems with different update mechanisms.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What this model proposes" type="opendata">
                <p style={expandedProseStyle}>
                  The stage-by-stage physiological mechanism of completion — why each stage is necessary for the next to occur, and what the hippocampal feedback loop specifically requires — alongside a precise account of why the cognitive system cannot close a biological cycle. Existing research has documented each mechanism; M3 proposes the sequence as a single integrated pathway and connects the insight-behaviour gap to the two-system architecture: not a failure of willpower, but two systems with different update requirements.
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
              3. Cognitive Override — What Happens When an Emotional Response Is Suppressed
            </h2>

            <p style={proseStyle}>
              Cognitive override does not reach the body. This is the central physiological claim of M3, and it is not intuitive — which is part of why it matters.
            </p>
            <p style={proseStyle}>
              When cognition decides an emotion is irrelevant, inappropriate, or dangerous, it overrides the person{"'"}s <em>access</em> to the signal. It does not override the signal itself. The amygdala does not receive the decision. The HPA axis does not pause mid-cascade to consult the prefrontal cortex about whether this emotion is acceptable. The cortisol already released does not reabsorb because the mind decided the threat was not worth responding to.
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
              What the override removes is access to the signal — not the signal itself. The body is already responding. There is no version of deciding an emotion is not there that changes the physiological fact of it. The biological signal persists whether or not the person has access to it.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Emotion suppression:</strong> Gross (1998) demonstrated that suppression reduces expressive behaviour while maintaining or even increasing physiological arousal. <strong style={{ color: TEXT.primary }}>Somatic markers:</strong> Damasio (1994) described the body{"'"}s signals as running below and faster than conscious awareness, with cognition unable to cancel them. <strong style={{ color: TEXT.primary }}>Body memory:</strong> van der Kolk (2014) documented unprocessed activation as stored somatically, not resolved cognitively.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What this model proposes" type="opendata">
                <p style={expandedProseStyle}>
                  A step-by-step parallel-track account of override — what the mind does and what the body does simultaneously, and why the two tracks do not converge. The mechanism behind Gross{"'"}s finding: the body maintains arousal not despite the suppression but because the suppression intercepts the only pathway through which the arousal could end. M3 names this <em>signal submersion</em>: conscious access collapses, the biological signal runs.
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
              When the cycle does not complete, specific systems remain in activation — often indefinitely — because the biological conditions for their return to baseline were never met. M3 uses the term <em>debris</em> for this residue: not a feeling, not a memory, but physical material still present in the body.
            </p>

            <h3 style={h3Style}>System-by-System Residue</h3>

            {/* Residue table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>System</div>
                <div style={gridHeaderStyle}>What Stays Active</div>
                <div style={gridHeaderStyle}>What It Feels Like</div>

                <GridCell first>Cortisol</GridCell>
                <GridCell>Remains elevated — suppresses immune function, disrupts sleep, impairs hippocampus, sensitises amygdala</GridCell>
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
                <GridCell>The nervous system is stuck — what was temporary has become the operating state</GridCell>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              The accumulation is not in the mind. It is in the cortisol receptor density, the hippocampal volume, the vagal tone, the amygdala sensitivity threshold. Understanding the accumulation cognitively does not reverse it — because the understanding happens in the cognitive system and the accumulation happened in the biological one.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen &amp; Stellar (1993); McEwen (2000) documented the cumulative physiological cost of chronic activation. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) mapped the organ-level consequences of sustained cortisol. <strong style={{ color: TEXT.primary }}>Interoception:</strong> Craig (2002); Damasio (1994) described how chronic activation impairs the body{"'"}s capacity to read its own internal state. <strong style={{ color: TEXT.primary }}>Epigenetics:</strong> Meaney (2001) demonstrated that chronic stress changes gene expression patterns governing stress reactivity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What this model proposes" type="opendata">
                <p style={expandedProseStyle}>
                  A system-by-system account of what stays active after a single unfinished cycle — not just accumulated over years but present in the hours after a single override. M3 proposes connecting each physiological residue directly to the felt experience: depleted serotonin is the irritability that appears hours later; suppressed oxytocin is the difficulty being comforted; the sensitised amygdala is the disproportionate reaction to the next small thing. The accumulation levels propose a mapping from physiological load to the specific functional impairments each level produces.
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
              When Biological Restoration has not completed across enough cycles, across enough time, the nervous system can shift from chronic high-activation to something different: the disappearance of signal entirely. The body stops broadcasting. Not because the debris has cleared — it has not. But because the alert system, finding no resolution across repeated cycles, begins to suppress its own output.
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
              This is the dorsal vagal state — what Porges (2011) described as the oldest branch of the vagus nerve, the immobilisation response the nervous system reaches for when neither fight, flight, nor appeasement has produced safety across sustained time. Not a choice. A reorganisation.
            </p>
            <p style={proseStyle}>
              The person in this state is not without activation. The debris is still there, still accumulating. What is gone is the felt sense of it — and with that, the signal the body would need in order to begin the return to baseline.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The alarm does not always get louder. Sometimes the body stops letting itself hear it. The signal goes flat. The debris remains.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Dorsal vagal:</strong> Porges (2011) described the oldest vagal branch and immobilisation as the final autonomic defence. <strong style={{ color: TEXT.primary }}>Dissociation:</strong> van der Kolk (2014) documented disconnection from bodily experience as a survival response to overwhelming activation. <strong style={{ color: TEXT.primary }}>Anhedonia:</strong> Der-Avakian &amp; Markou (2012) identified dopaminergic depletion under chronic stress as the neurobiological basis of reward insensitivity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What this model proposes" type="opendata">
                <p style={expandedProseStyle}>
                  The dorsal vagal shift as a regulation failure distinct from escalation — not louder alarm but signal collapse. M3 proposes this distinction as clinically significant: the person who is emotionally flat is not calm; the person who has withdrawn is not choosing solitude. The debris is still accumulating while the system registers itself as having stopped responding. The presentation is quiet. The distress is invisible. The physiological load is not.
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
              When the Biological Restoration pathway is blocked — when the nervous system cannot complete the cycle alone — it redirects. One direction: outward. Using control over others to discharge accumulated activation.
            </p>
            <p style={proseStyle}>
              This is a description of a biological mechanism. M3 maps the physiology, not the morality. The nervous system does not distinguish between socially acceptable and socially destructive regulation strategies — it distinguishes only between what produces a neurochemical shift and what does not.
            </p>

            <h3 style={h3Style}>Why Controlling Others Produces Real Relief</h3>
            <p style={proseStyle}>
              Research on controllability and stress (Maier &amp; Seligman, 2016) demonstrates that the nervous system perceives controllability as safety. When activation is uncontrollable, the stress response escalates. When the system perceives that it has restored control — over any outcome, including another person{"'"}s behaviour — cortisol partially suppresses. The amygdala calms, briefly. The body registers: threat becoming manageable.
            </p>
            <p style={proseStyle}>
              Dominant behaviour produces a measurable neurochemical shift: a temporary cortisol drop, a testosterone spike, brief relief (Archer, 2006; Mazur &amp; Booth, 1998). The body learns this. When a behaviour produces felt relief repeatedly, operant conditioning is sufficient to establish the pattern.
            </p>
            <p style={proseStyle}>
              Expressing activation outward — criticising, confronting, managing, punishing — also discharges some of the sympathetic energy that was mobilised for action. The stress response prepared the body to do something. Doing something uses some of that preparation.
            </p>

            <h3 style={h3Style}>What This Looks Like</h3>
            <p style={proseStyle}>
              Managing another person{"'"}s tone, behaviour, or emotional state in order to feel less activated. Criticising to discharge the pressure of unresolved internal tension. Punishing to create a sense of consequence and control in a system that feels uncontrollable. Needing others to respond in specific ways before the body can settle.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Controlling others produces a real neurochemical shift. The body learns to repeat what produced relief. The mechanism is conditioning, not character.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Controllability and stress:</strong> Maier &amp; Seligman (2016) demonstrated that perceived controllability modulates the stress response at the neurochemical level. <strong style={{ color: TEXT.primary }}>Dominance and hormones:</strong> Archer (2006); Mazur &amp; Booth (1998) documented testosterone-cortisol dynamics in dominant behaviour. <strong style={{ color: TEXT.primary }}>Conditioning:</strong> Operant conditioning research (Skinner) established how behaviours that reduce aversive states are selectively repeated.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What this model proposes" type="opendata">
                <p style={expandedProseStyle}>
                  The specific neurochemical mechanism by which controlling others produces real physiological relief — not metaphorical relief, not psychological satisfaction, but a measurable cortisol drop and testosterone shift. M3 proposes that this explains both why the behaviour repeats (it worked) and why it escalates (the underlying debris is untouched, so the relief is temporary and the dose must increase). The nervous system selects what produced the only signal it could interpret as safety.
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
              7. What the Body Reaches For — External Regulation
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
              The same mechanism runs through activities the person believes are resolving the problem. Exercise chosen for intensity rather than completion. Meditation extended past its natural endpoint, chased for the calm rather than entered for what is there. Breathwork, cold exposure, fasting, sensory silence — each one capable of producing real physiological shift. Each one, when the restoration pathway is blocked, used as discharge. The relief is real. The debris is untouched. Tomorrow the same dose is required, and the next day slightly more.
            </p>
            <p style={proseStyle}>
              The body does not distinguish the source of discharge. It distinguishes only whether the cycle completed. The person who runs daily and still cannot settle is not doing the wrong activity. The activity is doing the wrong job — covering the alarm rather than closing it.
            </p>

            <h3 style={h3Style}>The Escalation Endpoint</h3>
            <p style={proseStyle}>
              At the far end of this continuum, the vehicles become more extreme. When lower-intensity discharge no longer produces sufficient relief — because the debris has accumulated, because the amygdala has sensitised, because dopaminergic tolerance has raised the threshold — the nervous system searches for higher-intensity inputs.
            </p>
            <p style={proseStyle}>
              M3 proposes that the most extreme forms of interpersonal harm — domination, violation, the exercise of absolute power over another person — function at the neurochemical level as the highest-intensity version of the same regulation mechanism. The dopamine surge, the testosterone spike, the cortisol suppression through intensity rather than through completion. The body registers the signature of completion. But the HPA axis never received the hippocampal all-clear. Cortisol was suppressed by intensity — not cleared by the return sequence. It rebounds. The debris remains.
            </p>
            <p style={proseStyle}>
              This produces a specific consequence: the actual conditions for Biological Restoration — safety, time, co-regulation — begin to register as insufficient. They are too quiet. The body has been conditioned to an intensity level that the real restoration sequence cannot match. The interval between episodes shortens rather than lengthens.
            </p>

            <h3 style={h3Style}>Why None of It Resolves</h3>
            <p style={proseStyle}>
              Every external regulation vehicle produces discharge. None of them produce return to baseline. The distinction is biological.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Discharge</strong> is the release of mobilised energy. It reduces the felt pressure. It temporarily suppresses parts of the stress response. Discharge is real. It is not resolution.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Return to baseline</strong> requires the specific biological sequence to complete: the discharge phase, the parasympathetic return, the HPA negative feedback loop, cortisol clearance, the restoration of serotonin and oxytocin, the hippocampus encoding the event as finished. These are physiological events. They require specific inputs — somatic and relational.
            </p>
            <p style={proseStyle}>
              None of these vehicles contain their own stopping mechanism. The Biological Restoration sequence does — it has a built-in endpoint: cortisol clears, the hippocampus sends the all-clear, the HPA axis stands down. External vehicles have no such endpoint. They have no signal that tells the system: <em>finished.</em>
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The vehicle changes. The mechanism does not. Temporary discharge. No resolution. The bar rises. The alarm stays on. The body is still waiting for what it was always waiting for: the completion the vehicle cannot provide.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Substance mechanisms:</strong> Koob &amp; Le Moal (2001) documented neurobiological mechanisms of addiction as failed regulation attempts. <strong style={{ color: TEXT.primary }}>Exercise and stress:</strong> Salmon (2001) examined exercise as stress discharge without cycle completion. <strong style={{ color: TEXT.primary }}>Behavioural conditioning:</strong> Robinson &amp; Berridge (2003) described incentive salience and the escalation of wanting without liking.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What this model proposes" type="opendata">
                <p style={expandedProseStyle}>
                  A unified mechanism across all vehicles — from substances through healthy exercise through interpersonal harm — as the same biological search at different intensity levels. The key insight M3 proposes is the healthy vehicle: the right activity doing the wrong job. This reframes the conversation from {"\""} good coping versus bad coping{"\""} to a single question: is the cycle completing? If the answer is no, the vehicle will escalate regardless of how socially acceptable it appears. The escalation endpoint proposes that the most extreme forms produce a false signature of completion while leaving the debris untouched — and that this is why the interval between episodes shortens.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 8: HOW TEG-BLUE MAPS THIS ─────── */}
          <section
            id="four-modes"
            aria-labelledby="heading-four-modes"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-four-modes"
              style={sectionHeadingStyle}
            >
              8. The Four Modes — A Regulation Map
            </h2>

            <p style={proseStyle}>
              The TEG-Blue framework organises these physiological states into a gradient of four modes — not personality types, but nervous system positions that shift based on current activation, accumulated load, and available regulation capacity. These modes are described fully in M1 (Nervous System Signaling). Here, M3 maps the regulation landscape to each position.
            </p>
            <p style={proseStyle}>
              Each position on the gradient corresponds to a physiological state and a regulation strategy:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: "#14b8a6" }}>Connection.</strong> The nervous system in parasympathetic dominance, with cortisol cleared, oxytocin available, and prefrontal cortex blood flow at capacity. Cycles complete. Biological Restoration is available. This is not a permanently safe state — it is a state in which the stress response can activate and return to baseline.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: "#eab308" }}>Protection.</strong> Acute sympathetic activation — the body in an active stress response. Designed to be temporary, biologically expensive, and followed by return to baseline. The body is in the cycle. Completion is pending.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: "#f97316" }}>Control.</strong> The nervous system in sustained sympathetic activation, with chronically elevated cortisol and norepinephrine. Cognitive resources and external vehicles are recruited to manage a body that has not returned. This is where regulation through others typically begins.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: "#ec4899" }}>Domination.</strong> The nervous system at maximum sympathetic load, with emotional resonance collapsed and the system running on urgency alone. The escalation endpoint described in Section 7 operates here — the only intensity level that still moves the needle.
            </p>

            {/* Gradient-physiology mapping */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "140px 1fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>Mode</div>
                <div style={gridHeaderStyle}>Physiological State</div>
                <div style={gridHeaderStyle}>Regulation Strategy</div>

                <GridCell first>Connection</GridCell>
                <GridCell>Parasympathetic dominance — cortisol cleared, oxytocin available, PFC at capacity</GridCell>
                <GridCell>Cycle complete or never opened. Biological Restoration available.</GridCell>

                <GridCell first>Protection</GridCell>
                <GridCell>Acute SNS activation — designed to be temporary and followed by return to baseline</GridCell>
                <GridCell>Cycle open — completion pending. Body searching for discharge.</GridCell>

                <GridCell first>Control</GridCell>
                <GridCell>Sustained SNS activation — chronically elevated cortisol and norepinephrine</GridCell>
                <GridCell>Cycle chronically open. External vehicles recruited. Regulation through others.</GridCell>

                <GridCell first>Domination</GridCell>
                <GridCell>Maximum sympathetic load — emotional resonance collapsed</GridCell>
                <GridCell>Multiple open cycles. Only extreme intensity registers.</GridCell>
              </div>
            </div>

            <p style={proseStyle}>
              The external regulation substitutes described in Sections 6 and 7 are not psychological choices made in a vacuum. M3 proposes that they are what a nervous system with open cycles reaches for. When the restoration pathway is blocked — when the cycle cannot complete because self-awareness is offline, because suppression is the habitual response, because the developmental environment never provided co-regulation — the nervous system finds external inputs to regulate what it cannot regulate internally.
            </p>
            <p style={proseStyle}>
              Biological Restoration follows the same logic. Moving back toward Connection is not a matter of deciding to be different. It is a matter of creating the biological conditions for the cycle to complete: sufficient safety for discharge to begin, vagal engagement, cortisol clearance, the experience of co-regulation. These conditions are relational, somatic, and time-dependent. They cannot be rushed. They can only be allowed.
            </p>
            <p style={proseStyle}>
              The key principle across all four modes: health is not a position on the gradient. It is mobility — the capacity to return to baseline when challenged.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004); McEwen (2000) described physiological states without a gradient model connecting them as a developmental sequence. <strong style={{ color: TEXT.primary }}>Polyvagal theory:</strong> Porges (2011) described three autonomic states but without the regulation-strategy mapping. <strong style={{ color: TEXT.primary }}>Trauma literature:</strong> van der Kolk (2014); Levine (1997); Herman (1992) described how unprocessed activation shapes identity and behaviour over time.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What this model proposes" type="opendata">
                <p style={expandedProseStyle}>
                  The full regulation landscape — from Biological Restoration through override through debris through signal collapse through vehicles — mapped onto a four-mode gradient as a single, continuous physiological progression. The stress physiology literature describes states; the trauma literature describes trajectories. M3 and the gradient propose occupying the space between them: the mode as a body in a specific physiological state, running a specific regulation strategy, shaped by the number and depth of its open cycles.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CARD: BIOLOGICAL RESTORATION ──────────── */}
          <Link
            href="/framework/f1-emotional-gradient#the-fork"
            style={{
              display: "block",
              padding: "20px 24px",
              margin: "0 0 48px",
              background: hexToRgba(MODEL_COLOR, 0.06),
              border: `1px solid ${hexToRgba(MODEL_COLOR, 0.15)}`,
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: FONT.mono, color: MODEL_COLOR, marginBottom: 8 }}>
              Biological Restoration
            </div>
            <div style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 10 }}>
              The body has a designed restoration pathway. It requires specific conditions: sufficient safety, time, somatic discharge, and for relational emotions — another regulated nervous system. This pathway is not a technique. It is a biological sequence the body was built to run.
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: MODEL_COLOR }}>
              F1: The Emotional Gradient &rarr;
            </div>
          </Link>

          {/* ─── THE THREAD FORWARD ──────────────────────── */}
          <section
            id="thread-forward"
            aria-labelledby="heading-thread-forward"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-thread-forward"
              style={sectionHeadingStyle}
            >
              The Thread Forward
            </h2>

            <p style={proseStyle}>
              The TEG-Blue framework is organised around twelve interconnected frameworks (F1–F12) and three models (M1–M3). Every framework traces to a single mechanism: the return to baseline, and what happens when it does not complete.
            </p>
            <p style={proseStyle}>
              F1 names the designed process and the fork. F2 through F7 describe what the nervous system does instead, at escalating scales and costs: developmental substitutes, cognitive replacements, collective rules, worth hierarchies, perceptual bias, domination. Each is a regulation attempt. Each produces discharge without resolution.
            </p>
            <p style={proseStyle}>
              F8 through F10 describe what makes Biological Restoration possible again: developing the awareness capacities that allow the cycle to be felt and completed, creating structural conditions that support rather than suppress it, and transmitting the restoration capacity to the next generation instead of the substitutes.
            </p>
            <p style={proseStyle}>
              M3 is where both arcs meet.
            </p>

            <h3 style={h3Style}>The Three-Model Emotion Sequence</h3>
            <p style={proseStyle}>
              Emotions are not just the starting point of the system. They are what all three models are describing — from three different angles.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>M1 (Nervous System Signaling)</strong> maps what the emotion is and what state it produces — which of the four modes activates, what the person can perceive, think, feel, and do from that position.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>M2 (Three Awareness Capacities)</strong> maps whether the emotion can be received — whether Reading Emotions (RE) can read it, Emotional Resonance (ER) can feel it, Self-Emotional Awareness (SEA) can access it. These three awareness capacities determine whether the signal reaches conscious awareness at all.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>M3 (Regulation Capacities)</strong> maps whether the emotion can complete — whether the activation cycle discharges, returns to baseline, and clears the debris.
            </p>
            <p style={proseStyle}>
              All three models describe the same emotion moving through the nervous system. The models are not separate topics. They are three stages of the same sequence.
            </p>

            <h3 style={h3Style}>The Pathway Is Still There</h3>
            <p style={proseStyle}>
              The nervous system that has spent years running substitutes still contains the Biological Restoration sequence. It was not removed by chronic activation, by accumulated debris, by any of the vehicles the system learned to reach for. The pathway was outcompeted. It was not erased.
            </p>
            <p style={proseStyle}>
              The sequence runs when the conditions exist. Safety, sufficient time, somatic process, another regulated nervous system nearby — these are not psychological achievements. They are biological inputs. When they are present, the body runs what it was built to run. The debris clears. The HPA axis receives the all-clear. The hippocampus encodes the event as finished. The cycle closes.
            </p>
            <p style={proseStyle}>
              A nervous system that has learned Biological Restoration does not only resolve its own cycles. It becomes the condition another nervous system needs. Co-regulation is not a technique. It is what one regulated nervous system provides to an unregulated one by proximity. The capacity, once built, transmits — to the next person in contact, to the next generation, instead of the substitutes.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The pathway is still there. The body was built to come home. What changes is not the sequence — it is whether the conditions exist for it to run.
            </OperationalStatement>
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
                    label="Understand the four nervous system states in detail"
                    href="/model/m1-inner-compass"
                    linkText="M1: Nervous System Signaling →"
                  />
                  <NavRow
                    label="Understand the three awareness capacities that determine whether a cycle can be felt"
                    href="/model/m2-three-awareness-capacities"
                    linkText="M2: Three Awareness Capacities →"
                  />
                  <NavRow
                    label="Understand the biological signal that starts the cycle"
                    href="/framework/f1-emotional-gradient"
                    linkText="F1: Emotions as Biological Information →"
                  />
                  <NavRow
                    label="Understand how awareness of the signal develops — or fails to"
                    href="/framework/f2-awareness-calibration"
                    linkText="F2: Awareness Calibration →"
                  />
                  <NavRow
                    label="Understand what cognition builds over unprocessed cycles"
                    href="/framework/f3-false-coherence"
                    linkText="F3: False Coherence →"
                  />
                  <NavRow
                    label="Understand why insight alone cannot close a biological cycle"
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
              "A working model of the full regulation landscape: what the body was designed to do after stress activation, what blocks the return to baseline, what the nervous system reaches for instead, and why none of the substitutes close the cycle. Model M3 of the TEG-Blue system.",
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
            dateModified: "2026-03-19",
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
                  "Regulation Capacities (M3) is a working model that maps the full regulation landscape: the body's designed Biological Restoration pathway after threat activation, what blocks that restoration, what the nervous system reaches for instead (substances, physical intensity, work, controlling others), and why none of the substitutes close the cycle. M3 proposes that regulation is not what a person does to their emotions — it is what the body does after them.",
              },
              {
                question: "Why can't cognition close a biological stress cycle?",
                answer:
                  "The prefrontal cortex and the amygdala are connected but operate through different circuits, with no direct downregulation pathway from cognitive decision to hormonal cascade. Deciding an emotion is not important sends a signal through the cognitive system, but the HPA axis does not receive it. M3 proposes that completing the cycle requires somatic discharge — motor expression, breathing change, the body moving mobilised energy through its designed channels. Understanding the need for discharge is cognitive; the discharge itself is somatic. One cannot substitute for the other.",
              },
              {
                question: "What is signal submersion?",
                answer:
                  "Signal submersion is the term M3 uses for what happens when cognition overrides an emotional signal. The override removes access to the signal — not the signal itself. The person loses awareness of the emotion, but the biological cascade continues: cortisol keeps releasing, muscles stay braced, the HPA axis never receives the all-clear. The biological signal persists whether or not the person has access to it.",
              },
              {
                question: "What is the difference between discharge and return to baseline?",
                answer:
                  "Discharge is the release of mobilised energy — it reduces felt pressure and temporarily suppresses parts of the stress response. Return to baseline requires the specific biological sequence to complete: discharge, parasympathetic return, HPA negative feedback loop, cortisol clearance, restoration of serotonin and oxytocin, and the hippocampus encoding the event as finished. Every external regulation vehicle produces discharge. None of them produce return to baseline. The distinction is biological.",
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
