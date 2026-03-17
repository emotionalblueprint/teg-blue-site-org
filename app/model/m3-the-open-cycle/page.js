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
  { label: "The Cycle", href: "#threat-cascade" },
  { label: "Cognitive Management", href: "#override" },
  { label: "Stress Cycle Completion", href: "#completion" },
  { label: "System-by-System", href: "#stays-active" },
  { label: "Draws From", href: "#relationship-to-frameworks" },
];

const DRAWS_FROM = [
  { id: "F1", title: "Emotions as Biological Information", relation: "Primary source", description: "Names the process M3 maps physiologically. Biological Restoration — The Fork.", href: "/framework/f1-emotional-gradient" },
  { id: "F2", title: "Awareness Calibration", relation: "Developmental origin", description: "Why restoration fails — the awareness capacities that should facilitate the return.", href: "/framework/f2-awareness-calibration" },
  { id: "F3", title: "False Coherence", relation: "Cognitive maintenance", description: "How cognition constructs coherence over unfinished cycles, hiding the residue.", href: "/framework/f3-false-coherence" },
  { id: "F8", title: "Repairing Awareness", relation: "Repair pathway", description: "How unfinished cycles can begin completing in safe relational contexts.", href: "/framework/f8-repairing-awareness" },
  { id: "F12", title: "Two Information Systems", relation: "Architecture", description: "Why cognitive understanding cannot close a somatic cycle. The two-system explanation.", href: "/framework/f12-two-information-systems" },
  { id: "M1", title: "Inner Compass", relation: "Paired model", description: "The compass that gets stuck when cycles don't complete. M3 explains the biology of why.", href: "/model/m1-inner-compass" },
  { id: "M2", title: "Three Awareness Capacities", relation: "Paired model", description: "The capacities that determine whether the cycle can be felt, read, and allowed to complete.", href: "/model/m2-three-awareness-capacities" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "The Biology of Unfinished Emotion (M3) | TEG-Blue Research",
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
    title: "The Biology of Unfinished Emotion — M3 Model | TEG-Blue",
    description:
      "The biology of unfinished emotion: what happens when a threat response activates and the cycle is not allowed to complete. The physiological foundation of the TEG-Blue system.",
    url: "https://teg-blue.org/model/m3-the-open-cycle",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Biology of Unfinished Emotion — TEG-Blue M3",
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

      <PageLayout
        header={
          <>
            <ModelHero
              badge="MODEL M3"
              title="The Biology of Unfinished Emotion"
              subtitle="Biological Restoration — The Fork"
              description="The physiological sequence that runs when the nervous system perceives a threat, what the body does when that sequence is allowed to complete, and what happens when cognition overrides it instead. Why the body cannot receive a philosophical decision. Why the signal does not stop when access to it does."
              coreQuestion="What happens to the body when the emotional cycle is not allowed to complete — and what would completion require?"
              drawsFrom={[
                { label: "F1", href: "/framework/f1-emotional-gradient" },
                { label: "F2", href: "/framework/f2-awareness-calibration" },
                { label: "F3", href: "/framework/f3-false-coherence" },
                { label: "F8", href: "/framework/f8-repairing-awareness" },
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
            M3 is the physiological account of what F1 names <strong style={{ color: TEXT.primary }}>Biological Restoration — The Fork</strong>: the body{"'"}s designed completion process, what happens when it runs, and what happens when Cognitive Management overrides it instead. The Open Cycle is the name for the unfinished state that results.
          </p>

          {/* ─── THE COMMON UNDERSTANDING ──────────────────── */}
          <CommonUnderstanding
            terms={[
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
                  Each unprocessed cycle adds to allostatic load — measurable cumulative wear on the body{"'"}s regulatory systems
                </li>
                <li style={propositionItemStyle}>
                  The body has no mechanism for receiving philosophical decisions. Deciding an emotion is not important does not change the cortisol level. The cherry is there whether it is seen or not
                </li>
                <li style={propositionItemStyle}>
                  This is the physiological substrate that explains why the gradient exists — why regulation substitutes multiply, why the compass gets stuck, why insight alone does not produce change
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
            id="completion"
            aria-labelledby="heading-completion"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-completion"
              style={sectionHeadingStyle}
            >
              2. Stress Cycle Completion — What the Body Needs
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

            <OperationalStatement color={MODEL_COLOR}>
              The body does not reason its way back to baseline. It restores through the same somatic channels it departed through. What is commonly called {"\""}regulation{"\""} is often its opposite — see <Link href="/framework/f1-emotional-gradient#the-fork" style={{ color: MODEL_COLOR }}>F1: The Fork</Link> for the full account of this distinction.
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
                  <strong style={{ color: TEXT.primary }}>Somatic experiencing:</strong> Levine (1997) — trauma as incomplete threat response; the body completing the cycle through discharge. <strong style={{ color: TEXT.primary }}>Stress cycle completion:</strong> Nagoski &amp; Nagoski (2019) — the biological stress cycle requires completion, not management. <strong style={{ color: TEXT.primary }}>Vagal pathways:</strong> Porges (2011) — the vagal brake, ventral vagal complex, co-regulation as the primary completion pathway.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
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
              3. Cognitive Management — The Override
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
              4. What Stays Active
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

            <OperationalStatement color={MODEL_COLOR}>
              The accumulation is not in the mind. It is in the cortisol receptor density, the hippocampal volume, the vagal tone, the amygdala sensitivity threshold. Understanding the accumulation cognitively does not reverse it — because the understanding happens in the cognitive system and the accumulation happened in the biological one.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen (2000) — cumulative physiological cost of chronic activation. <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004) — organ-level consequences of sustained cortisol. <strong style={{ color: TEXT.primary }}>Interoception:</strong> Craig (2002); Damasio (1994) — how chronic activation impairs the body{"'"}s capacity to read its own internal state.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
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
              5. Allostatic Load — The Accumulation Effect
            </h2>

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
                <GridCell>The compass is stuck — the mode is not a choice, it is the state the body is in</GridCell>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              The gradient moves in one direction under load not because people choose to become more controlling or more dominating, but because a nervous system running on an increasingly sensitised amygdala and increasingly depleted serotonin has a narrowing window of available response. The gradient is not a moral spectrum. It is a biological one.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Allostatic load:</strong> McEwen &amp; Stellar (1993); McEwen (2000) — cumulative physiological cost, measured longitudinally. <strong style={{ color: TEXT.primary }}>Epigenetics:</strong> Meaney (2001) — chronic stress changes gene expression patterns governing stress reactivity. <strong style={{ color: TEXT.primary }}>Neuroplasticity:</strong> van der Kolk (2014); Bremner (2006) — hippocampal volume reduction under chronic cortisol exposure.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
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
              This is the physiological foundation of F12{"'"}s core insight — that the two information systems cannot resolve each other through insight alone. It is not a philosophical position. It is a circuit map.
            </p>

            <h3 style={h3Style}>The Mechanism</h3>
            <p style={proseStyle}>
              The prefrontal cortex and the amygdala are separate circuits. They are connected — the PFC can modulate amygdala reactivity, and the amygdala can suppress PFC function under threat — but they do not have a direct downregulation pathway from cognitive decision to hormonal cascade. Deciding the emotion is not important sends a signal through the cognitive system. The HPA axis does not receive it. The cortisol already in circulation does not respond to it.
            </p>
            <p style={proseStyle}>
              Completing the cycle requires the discharge phase to begin — motor expression, breathing change, or the body moving the mobilized energy through the channels it was designed to use. This is not a cognitive operation. It is a somatic one. Understanding the need for discharge is cognitive. The discharge itself is biological. These are different actions in different systems.
            </p>
            <p style={proseStyle}>
              The HPA negative feedback loop requires the hippocampus to detect that cortisol levels are falling — which requires the discharge to have begun, the parasympathetic return to have engaged, and sufficient time for cortisol to metabolize. A cognitive reframe does not produce any of these conditions. A cognitively induced sense of calm can occur while the HPA axis continues running — the person feels calmer because their attention has shifted, while their cortisol level, immune function, and organ configuration remain in survival mode.
            </p>
            <p style={proseStyle}>
              The sensitized amygdala responds faster than the prefrontal cortex can intercept. As allostatic load increases, the window in which cognition can engage before the response fires narrows. In high-load states, by the time the prefrontal cortex has formed a thought about the situation, the body has already reconfigured. Cognition is arriving late to a body that has already left.
            </p>
            <p style={proseStyle}>
              What moves the cycle is what the cycle was designed to respond to: somatic discharge, parasympathetic engagement, cortisol clearance, co-regulation. These are biological inputs for a biological process. Cognition can support the conditions for these inputs — it can choose to rest, to move, to be with a regulated other. But it cannot substitute for them.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Understanding is cognitive. The cycle is biological. More understanding does not close an open biological cycle. What closes it is what the body was always waiting for — completion.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Dual-process theory:</strong> Kahneman (2011) — System 1 and System 2 as distinct processing systems with different update mechanisms. <strong style={{ color: TEXT.primary }}>Vagal completion:</strong> Porges (2011) — the vagus nerve as the completion pathway; co-regulation as the primary biological input for return. <strong style={{ color: TEXT.primary }}>Somatic completion:</strong> Levine (1997) — the body completing what the mind cannot finish for it.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
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
              The existing stress physiology literature — Sapolsky, McEwen, Porges — describes physiological states without a gradient model connecting them to each other as a developmental and behavioral sequence. The trauma literature — van der Kolk, Levine, Herman — describes how unprocessed activation shapes identity and behavior over time, but without the specific hormonal and organ-level mapping of each stage. The gap between them is exactly the space M3 and the TEG-Blue gradient occupy together.
            </p>
            <p style={proseStyle}>
              Each position on the gradient corresponds to a physiological state.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Connection Mode — System{"'"}s Home Base.</strong> The nervous system in parasympathetic dominance, with full cortisol clearance, restored oxytocin, and PFC blood flow at capacity.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Protection Mode — The System on Emergency Fuel.</strong> Acute SNS activation — designed to be temporary, biologically expensive, and followed by return.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Control Mode.</strong> The nervous system in sustained SNS activation, with chronically elevated cortisol and norepinephrine, recruiting cognitive resources to manage a body that has not returned.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Domination Mode.</strong> The nervous system at maximum sympathetic load, with emotional resonance collapsed and the system running on urgency alone.
            </p>
            <p style={proseStyle}>
              This is why Biological Restoration is <strong style={{ color: TEXT.primary }}>The Fork</strong> — the point in the cycle where the path splits. When the cycle completes, the compass returns to Connection. When Cognitive Management overrides it, The Open Cycle begins — and everything from F2 to F7 describes what happens next.
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
              <ExpandableSection title="What the field established" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Stress physiology:</strong> Sapolsky (2004); McEwen (2000) — physiological states without a gradient model connecting them as a developmental sequence. <strong style={{ color: TEXT.primary }}>Trauma literature:</strong> van der Kolk (2014); Levine (1997); Herman (1992) — how unprocessed activation shapes identity and behaviour over time.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What M3 connects" type="opendata">
                <p style={expandedProseStyle}>
                  The gradient as a biological progression — each position corresponding to a specific hormonal configuration and cycle status. The gap between the stress physiology literature (which describes states) and the trauma literature (which describes trajectories) is exactly the space M3 and the gradient occupy together. The mode is not a choice. It is a body in a specific physiological state, shaped by the number and depth of its open cycles.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── DRAWS FROM ──────────────────────────────── */}
          <DrawsFromPanel items={DRAWS_FROM} color={MODEL_COLOR} />

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

      </PageLayout>

      <SiteFooter />

      {/* ─── JSON-LD: ScholarlyArticle ──────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/model/m3-the-open-cycle#article",
            headline: "The Biology of Unfinished Emotion: Biological Restoration — The Fork",
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
              { name: "M3: The Biology of Unfinished Emotion", url: "/model/m3-the-open-cycle" },
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
      {/* ─── JSON-LD: Speakable ──────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "The Open Cycle (M3) — TEG-Blue Research",
              url: "https://teg-blue.org/model/m3-the-open-cycle",
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
