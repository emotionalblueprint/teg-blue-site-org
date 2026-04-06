import Link from "next/link";
import dynamic from "next/dynamic";
import { BG, TEXT, FONT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, ExpandableSection,
  PageLayout, PartDivider, NavSection, ConnectionsMap,
} from "@/src/components";
import {
  proseStyle, expandedProseStyle, propositionItemStyle,
  sectionHeadingStyle, conceptHeadingStyle, expandableRowStyle,
  gridHeaderStyle, gridCellStyle,
} from "@/src/styles/pageStyles";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const OpenCycleExplorer = dynamic(() => import("@/src/components/OpenCycleExplorer"), { ssr: false });

const MODEL_COLOR = SPECTRUM.indigo;
const linkStyle = { color: MODEL_COLOR, textDecoration: "none" };

export const metadata = {
  title: "Regulation Capacities (M3) | TEG-Blue Research",
  description: "Whether the body completes what activation started — the branching point in the Emotional Somatic Cycle. Path A: biological restoration. Path B: cognitive override, debris accumulation, and escalation.",
  keywords: ["regulation capacities","biological restoration","cognitive override","debris accumulation","baseline elevation","restoration substitutes","somatic debt","relational substitute escalation"],
  alternates: { canonical: "https://teg-blue.org/model/m3-regulation-capacities" },
  openGraph: { title: "Regulation Capacities — M3 Model | TEG-Blue", description: "Whether the body completes what activation started. The branching point: biological restoration or cognitive override.", url: "https://teg-blue.org/model/m3-regulation-capacities", type: "article", siteName: "TEG-Blue Research" },
  twitter: { card: "summary_large_image", title: "Regulation Capacities — TEG-Blue M3", description: "Whether the body completes what activation started. Path A: restoration. Path B: override and escalation." },
  other: { "citation_title": "Regulation Capacities", "citation_author": "Anna Paretas-Artacho", "citation_publication_date": "2026/02", "citation_technical_report_institution": "TEG-Blue Research" },
};

export default function M3RegulationCapacitiesPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/model/m3-regulation-capacities" />
      <PageLayout
        header={
          <ModelHero badge="MODEL M3" title="Regulation Capacities" subtitle="The Return Pathway"
            description="M3 describes the third stage of the Emotional Somatic Cycle: whether the body completes what activation started — or carries it forward."
            coreQuestion="Did the body complete the restoration sequence — or is it still running?"
            drawsFrom={[
              { label: "M1", href: "/model/m1-emotions-as-signals" },
              { label: "M2", href: "/model/m2-nervous-system-states" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
              { label: "F1", href: "/framework/f1-emotional-gradient" },
            ]}
            color={MODEL_COLOR}
          />
        }
      >
        <article>

          <section style={{ marginBottom: 48 }}>
            <p style={proseStyle}>M3 addresses a question that follows directly from the first two models. M1 described the signal. M2 described the state the signal produces. The body mobilised — stress hormones released, muscles braced, heart rate increased. M3 begins here: with a body that has mobilised and needs to complete the sequence.</p>
            <p style={proseStyle}>The nervous system is organised to complete this sequence under the right conditions. Cortisol metabolises, muscles unclench, the HPA axis stands down, and the body returns toward physiological baseline. This is biological restoration — not emotion management, but a completion process with a measurable endpoint.</p>
            <p style={proseStyle}>This model maps two pathways. In Path A, the restoration sequence runs to its endpoint and the body reaches physiological baseline. In Path B, cognition overrides the signal, the restoration sequence remains unresolved, and the body carries the activation forward — debris accumulates, the baseline elevates, and the nervous system searches for anything that produces the neurochemical shift that completion would have provided.</p>
            <p style={proseStyle}>The branching point is not dramatic. It is a learned pattern, often running below awareness: cognition deciding the signal is irrelevant, the body receiving no biological resolution. The consequences unfold from there — measurable, progressive, and in chronic states, invisible to the person inside them.</p>
          </section>

          <section id="core-propositions" aria-labelledby="heading-cp" style={{ marginBottom: 48 }}>
            <h2 id="heading-cp" style={sectionHeadingStyle(MODEL_COLOR)}>Core Propositions</h2>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li style={propositionItemStyle}>Regulation is not a psychological skill. It is a biological completion process — the body running the second half of a sequence that began with activation.</li>
              <li style={propositionItemStyle}>The restoration sequence has two stages: the mobilisation response (energy spent) and biological restoration (residue cleared). The endpoint is physiological baseline.</li>
              <li style={propositionItemStyle}>Four activation levels produce four distinct restoration requirements — each qualitatively different, not just longer.</li>
              <li style={propositionItemStyle}>Cognitive override is the branching point. When cognition overrides the body{"'"}s signal, the restoration sequence cannot begin. The override has a measurable cost — somatic debt.</li>
              <li style={propositionItemStyle}>Debris is the physical residue of incomplete cycles — cortisol, adrenaline, sensitised amygdala, depleted serotonin, suppressed oxytocin. Measurable and compounding.</li>
              <li style={propositionItemStyle}>Baseline elevation narrows the operating window: higher resting activation, lower trigger threshold. At the extreme: dorsal shutdown — the body goes silent while debris remains.</li>
              <li style={propositionItemStyle}>Every restoration substitute produces real relief. None complete the restoration sequence. The substitute changes. The mechanism does not.</li>
            </ul>
          </section>

          <PartDivider label="PART 1" title="The Restoration Pathway" color={MODEL_COLOR} />

          <section id="what-restoration-is" aria-labelledby="heading-r" style={{ marginBottom: 48 }}>
            <h2 id="heading-r" style={sectionHeadingStyle(MODEL_COLOR)}>What Restoration Is</h2>
            <p style={proseStyle}>Regulation is often described as calming down, managing emotion, or bringing oneself back under control.</p>
            <p style={proseStyle}>In this model, regulation is understood differently. It is not primarily a psychological skill. It is a biological completion process. After activation, the body is organised to metabolise stress chemistry, release muscular bracing, restore organ-level functioning, and return toward physiological baseline.</p>
            <p style={proseStyle}>This matters because the word regulation often implies deliberate control. But much of what supports regulation is not produced by effort alone. It depends on whether the body is able to complete a sequence that has already been initiated.</p>
            <p style={proseStyle}>From this perspective, the central question is not simply how does a person regulate, but whether the body is able to complete what activation started.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata"><p style={expandedProseStyle}>Levine (1997) — somatic experiencing: the body{"'"}s completion mechanism. Nagoski & Nagoski (2019) — the stress cycle requires completion, not management. Gross (1998) — emotion suppression maintains physiological arousal even when expression stops.</p></ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata"><p style={expandedProseStyle}>TEG-Blue reframes regulation from emotion management to sequence completion. This shifts the focus from teaching control to identifying the conditions that allow biological restoration to occur.</p></ExpandableSection>
            </div>
          </section>

          <section id="restoration-sequence" aria-labelledby="heading-seq" style={{ marginBottom: 48 }}>
            <h2 id="heading-seq" style={sectionHeadingStyle(MODEL_COLOR)}>The Restoration Sequence</h2>
            <p style={proseStyle}>The nervous system generated a signal (<Link href="/model/m1-emotions-as-signals" style={linkStyle}>M1</Link>). The nervous system shifted state (<Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link>). The body mobilised. M3 begins here: with a body that has mobilised and needs to complete the sequence.</p>
            <h3 style={conceptHeadingStyle}>Mobilisation Response</h3>
            <p style={proseStyle}>The body uses what it mobilised. The energy that was deployed in the state shift is spent — through movement, action, expression, discharge. The mobilised resources are used for their intended purpose. This stage is the bridge between activation and restoration — the energy must be spent before the body can begin to clear the residue.</p>
            <h3 style={conceptHeadingStyle}>Biological Restoration</h3>
            <p style={proseStyle}>The body completes the sequence it started. Cortisol metabolises. Muscles unclench. Inflammatory compounds clear. Neural circuits recover. The HPA axis receives the all-clear signal from the hippocampus and stands down. The parasympathetic nervous system re-engages. The body returns to physiological baseline.</p>
            <p style={proseStyle}>This is not calming down. It is a biological completion process — the body running the second half of a sequence that began with activation. The sequence has an endpoint. The endpoint is physiological baseline.</p>
            <p style={proseStyle}>Biological restoration requires specific conditions: sufficient safety, sufficient time, and in many cases another regulated nervous system nearby. The capacity for biological restoration is not innate — it is learned through thousands of co-regulation cycles in early life. How this capacity develops is the territory of <Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link>.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata"><p style={expandedProseStyle}>Sapolsky (2004) — the HPA axis and whole-body stress response. LeDoux (1996) — amygdala timing: threat detection before conscious processing. Levine (1997) — the completion of the threat response as the substrate of recovery.</p></ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata"><p style={expandedProseStyle}>The completion sequence as a two-stage process: mobilisation response (energy spent) followed by biological restoration (residue cleared). The identification that the restoration sequence completing — not the activation itself — is the clinically relevant variable.</p></ExpandableSection>
            </div>
          </section>

          <section id="restoration-by-mode" aria-labelledby="heading-mode" style={{ marginBottom: 48 }}>
            <h2 id="heading-mode" style={sectionHeadingStyle(MODEL_COLOR)}>Restoration Requirements by Mode</h2>
            <p style={proseStyle}>Four activation levels produce four distinct restoration requirements. Each has a physiological mechanism, specific conditions, and a timescale.</p>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2.5fr 1fr", minWidth: 500 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>State</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Restoration</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Timescale</div>
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Tending — preventive, not corrective. Sensory engagement, creative activity, gentle co-presence. Substituting productivity for tending creates a slow upward drift in baseline.</div>
                <div style={gridCellStyle}>Continuous</div>
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Threat & Defence</div>
                <div style={gridCellStyle}>Completing the sequence — full exhale, physical movement that allows discharge, co-regulation with a safe other. Time without new demands before current activation has cleared.</div>
                <div style={gridCellStyle}>20 min – 2 hours</div>
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Strategy & Management</div>
                <div style={gridCellStyle}>Releasing the cognitive override — putting down the management, allowing overridden emotions to surface. The override does not release while cognition is still steering.</div>
                <div style={gridCellStyle}>2–8 hours</div>
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power & Dominance</div>
                <div style={gridCellStyle}>The full discharge arc — extended rest, minimal demand, full somatic discharge. Guilt, grief, relief, and physical exhaustion move through in sequence.</div>
                <div style={gridCellStyle}>24–72+ hours</div>
              </div>
            </div>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata"><p style={expandedProseStyle}>Porges (2011) — vagal brake and parasympathetic restoration. Levine (1997) — the completion of the threat response through somatic discharge. Nagoski & Nagoski (2019) — the stress cycle requiring completion, not suppression.</p></ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata"><p style={expandedProseStyle}>Biological Restoration by mode — showing that restoration must be matched to activation level rather than treated as a generic self-care process. Each restoration type is qualitatively different, not just longer.</p></ExpandableSection>
            </div>
          </section>

          <section id="two-pathways" aria-labelledby="heading-paths" style={{ marginBottom: 48 }}>
            <h2 id="heading-paths" style={sectionHeadingStyle(MODEL_COLOR)}>Two Restoration Pathways</h2>
            <p style={proseStyle}>Not all activation resolves through the same pathway. Some activation is primarily somatic in content and can move toward completion through internal physiological processes. Other activation is primarily relational in content and may not fully resolve through physiology alone — requiring relational input or co-regulation from another regulated person.</p>
            <p style={proseStyle}>This distinction matters because many failed attempts at regulation are actually pathway mismatches. The system is being given a somatic intervention for a relational burden, or a relational need is being approached as if it were only bodily activation.</p>
            <p style={proseStyle}>Relational restoration requires genuine safety with another person — and chronic states degrade exactly that capacity.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata"><p style={expandedProseStyle}>Porges (2011) — co-regulation as the mammalian primary regulation pathway. Schore (2003) — right-brain relational regulation in development. Bowlby (1969) — attachment as the relational regulation system.</p></ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata"><p style={expandedProseStyle}>The explicit distinction between the Somatic Restoration Pathway and the Relational Restoration Pathway as different restoration pathways rather than interchangeable processes. Chronic states specifically degrade the relational pathway through the very substitutes that replaced it.</p></ExpandableSection>
            </div>
          </section>

          <PartDivider label="PART 2" title="The Branching Point" color={MODEL_COLOR} />

          <section id="cognitive-override" aria-labelledby="heading-override" style={{ marginBottom: 48 }}>
            <h2 id="heading-override" style={sectionHeadingStyle(MODEL_COLOR)}>Cognitive Override</h2>
            <p style={proseStyle}>The branching point in the Emotional Somatic Cycle. The nervous system generated a signal. The nervous system shifted state. The body mobilised. The body{"'"}s designed restoration mechanism exists. Now: does cognition override the signal?</p>
            <p style={proseStyle}>Cognitive override is what happens when cognition decides the emotional signal is irrelevant and overrides access to it. The mind says: {"\u201C"}I don{"'"}t have time for this.{"\u201D"} {"\u201C"}This isn{"'"}t important.{"\u201D"} {"\u201C"}I need to keep going.{"\u201D"} Cognition overrides the signal. The restoration sequence remains unresolved.</p>
            <p style={proseStyle}>The override is not a single moment. It is a learned pattern. A person who grew up in an environment where emotional signals were punished, ignored, or dangerous learns to override automatically.</p>
            <p style={proseStyle}>This is the mechanism that connects <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link> and M3. M2 showed that the state changes what the person can see — the filter is pre-cognitive. M3 shows how the person learned to ignore the signal the body is generating to tell them the filter is engaged. The state filters reality. The override prevents the correction from arriving. Together they explain why people don{"'"}t know they don{"'"}t know.</p>
            <h3 style={conceptHeadingStyle}>Somatic Debt</h3>
            <p style={proseStyle}>The override has a physiological cost. The prefrontal cortex maintains the override. Noradrenaline sustains the effort. The limbic signals continue to fire underneath — the override does not silence them, it outcompetes them. The competition is metabolically expensive. This cost — somatic debt — accumulates without detection because the individual experiences the override as stability, not effort.</p>
            <h3 style={conceptHeadingStyle}>Override Under Three Conditions</h3>
            <p style={proseStyle}><strong style={{ color: TEXT.primary }}>From physiological baseline.</strong> No activation has occurred. The capacity to restore is available — the biological architecture exists, the conditions are not being tested.</p>
            <p style={proseStyle}><strong style={{ color: TEXT.primary }}>From acute activation.</strong> Override is an event — a moment where cognition intercepts a signal. The signal is still legible. The override is potentially visible. The sequence can still run if conditions change.</p>
            <p style={proseStyle}><strong style={{ color: TEXT.primary }}>From chronic activation.</strong> Three things change. First — the override is no longer an event but the architecture. Second — the baseline itself has moved. Third — substitutes feel indistinguishable from genuine restoration. Without interoceptive self-awareness (<Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link>), the person cannot feel the difference between a substitute that produces temporary neurochemical relief and genuine biological completion.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata"><p style={expandedProseStyle}>Gross (1998) — emotion suppression maintains physiological arousal while reducing expression. Kahneman (2011) — dual-process theory: System 2 overriding System 1. van der Kolk (2014) — the body continuing to score what the mind has overridden.</p></ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata"><p style={expandedProseStyle}>Cognitive override identified as the specific branching point. Somatic debt as the named cost of sustained override. The M2+M3 connection: state filters reality, override blocks the correction signal. The three-condition distinction: from acute activation (an event) vs from chronic activation (the architecture).</p></ExpandableSection>
            </div>
          </section>

          <PartDivider label="PART 3" title="What Happens Instead" color={MODEL_COLOR} />

          <section id="incomplete-restoration" aria-labelledby="heading-inc" style={{ marginBottom: 48 }}>
            <h2 id="heading-inc" style={sectionHeadingStyle(MODEL_COLOR)}>Incomplete Biological Restoration</h2>
            <p style={proseStyle}>When conditions are absent — or when cognition overrides the signal — the restoration sequence remains unresolved. The body{"'"}s completion mechanism runs partially or not at all. The HPA axis does not receive the all-clear signal. Cortisol continues releasing.</p>
            <p style={proseStyle}>The sequence requires the activation to be registered by cognition and not overridden, and for the conditions of completion to be present. When cognition neither registers the activation nor allows the restoration sequence to run, the sequence has no way to begin.</p>
            <p style={proseStyle}>When biological restoration does not complete, the body does not reset. It carries the activation forward. What was designed as a temporary emergency configuration becomes the operating state.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata"><p style={expandedProseStyle}>Levine (1997) — incomplete threat response as the substrate of chronic activation. Nagoski & Nagoski (2019) — the stress cycle requiring completion, not management. van der Kolk (2014) — unprocessed activation stored at the physiological level.</p></ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata"><p style={expandedProseStyle}>Incomplete biological restoration as the first consequence of cognitive override — the body{"'"}s restoration mechanism requires the activation to be registered by cognition and not overridden.</p></ExpandableSection>
            </div>
          </section>

          <section id="debris-accumulation" aria-labelledby="heading-debris" style={{ marginBottom: 48 }}>
            <h2 id="heading-debris" style={sectionHeadingStyle(MODEL_COLOR)}>Debris Accumulation</h2>
            <p style={proseStyle}>The physical residue of an incomplete restoration sequence stays in the body. This is not metaphor. It is measurable, biological, and still running:</p>
            <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
              <li style={propositionItemStyle}>Cortisol still circulating in the bloodstream</li>
              <li style={propositionItemStyle}>Adrenaline metabolites in the tissue</li>
              <li style={propositionItemStyle}>Pro-inflammatory cytokines not yet cleared</li>
              <li style={propositionItemStyle}>Muscle fibres that braced and never fully discharged</li>
              <li style={propositionItemStyle}>The amygdala still sensitised — threshold lowered, firing faster</li>
              <li style={propositionItemStyle}>The HPA axis still running — no all-clear signal received</li>
              <li style={propositionItemStyle}>Serotonin depletion under sustained cortisol</li>
              <li style={propositionItemStyle}>Oxytocin suppression — co-regulation chemistry not available</li>
            </ul>
            <p style={proseStyle}>Each incomplete restoration sequence adds to what is already there. The next alert fires from an already-elevated baseline — activates faster, reaches higher, requires more to resolve.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata"><p style={expandedProseStyle}>McEwen & Stellar (1993) — allostatic load: the cumulative cost of chronic stress adaptation. Sapolsky (2004) — cortisol dynamics and the HPA axis. van der Kolk (2014) — the body storing activation at the physiological level.</p></ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata"><p style={expandedProseStyle}>Debris as a specific physiological inventory rather than a metaphor. Each component is separately addressable. This specificity changes the intervention from generic relaxation to targeted sequence completion.</p></ExpandableSection>
            </div>
          </section>

          <section id="baseline-elevation" aria-labelledby="heading-elev" style={{ marginBottom: 48 }}>
            <h2 id="heading-elev" style={sectionHeadingStyle(MODEL_COLOR)}>Baseline Elevation</h2>
            <p style={proseStyle}>The nervous system adapts its resting level to the accumulated debris. Two variables define the operating window:</p>
            <p style={proseStyle}><strong style={{ color: TEXT.primary }}>The floor</strong> is the elevated baseline itself — the resting level of cortisol, muscle tension, heart rate, and HPA axis activation that the nervous system now treats as normal. With each incomplete sequence, the floor rises.</p>
            <p style={proseStyle}><strong style={{ color: TEXT.primary }}>The ceiling</strong> is the activation threshold — how little it takes to trigger the next response. With each incomplete sequence, the ceiling drops.</p>
            <p style={proseStyle}>The window between floor and ceiling narrows. Smaller triggers produce larger responses. Recovery time lengthens. Perception narrows. Relational capacity reduces. Interoceptive accuracy degrades.</p>
            <p style={proseStyle}><strong style={{ color: TEXT.primary }}>At the extreme: dorsal shutdown.</strong> When biological restoration has not completed across enough repetitions, the nervous system can shift from chronic high-activation to the disappearance of signal entirely. The body stops broadcasting — not because the debris has cleared, but because when no resolution arrives across repeated cycles, the alert system suppresses its own output. The person presents as calm, functional, emotionally flat. The activation remains.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata"><p style={expandedProseStyle}>McEwen (2000) — allostatic load and the physiological cost of chronic adaptation. Sapolsky (2004) — chronic stress physiology and baseline recalibration. Craig (2002) — chronic activation impairing interoceptive accuracy. Porges (2011) — dorsal vagal state as the immobilisation response.</p></ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata"><p style={expandedProseStyle}>Baseline elevation mapped through two variables — the floor and the ceiling — showing the narrowing window as a measurable, progressive process. The distinction between genuine physiological baseline and dorsal vagal collapse as a clinically critical differential.</p></ExpandableSection>
            </div>
          </section>

          <section id="restoration-substitutes" aria-labelledby="heading-subs" style={{ marginBottom: 48 }}>
            <h2 id="heading-subs" style={sectionHeadingStyle(MODEL_COLOR)}>Restoration Substitutes</h2>
            <p style={proseStyle}>When the restoration pathway is blocked, the nervous system searches for anything that produces the neurochemical shift that completion would have provided. The mechanism is identical across all substitutes: temporary discharge, no resolution, escalating need.</p>
            <h3 style={conceptHeadingStyle}>Non-Relational Substitutes</h3>
            <p style={proseStyle}>Substances, physical intensity, work and achievement, screens and consumption, conscious self-soothing — each acts on a specific part of the stress response. Each produces real relief. Each requires more over time, because the underlying sequences are still open.</p>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", minWidth: 500 }}>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Chronic State</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Typical Substitutes</div>
                <div style={gridHeaderStyle(MODEL_COLOR)}>Mechanism</div>
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety & Openness</div>
                <div style={gridCellStyle}>Food, numbing substances, screens, over-availability, compulsive helping</div>
                <div style={gridCellStyle}>Mutes the alarm without addressing what triggered it</div>
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Threat & Defence</div>
                <div style={gridCellStyle}>Stimulants, intense exercise, alcohol, withdrawal into controlled environments</div>
                <div style={gridCellStyle}>Overrides the alarm with a stronger sensation or removes inputs</div>
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Strategy & Management</div>
                <div style={gridCellStyle}>Work, planning, information, substances that sharpen focus</div>
                <div style={gridCellStyle}>Maintains the suppression of limbic signals</div>
                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Power & Dominance</div>
                <div style={gridCellStyle}>Intense physical activity, substances that amplify certainty, risk</div>
                <div style={gridCellStyle}>Channels sympathetic activation into output rather than discharge</div>
              </div>
            </div>
            <h3 style={conceptHeadingStyle}>Relational Substitutes</h3>
            <p style={proseStyle}>When the substitute involves other people — controlling, criticising, managing, punishing — the relief is stronger. The nervous system{"'"}s most potent regulation pathway is relational. Genuine co-regulation is the primary pathway through which mammalian nervous systems complete the restoration sequence. When that pathway is co-opted into control, the system receives a high-potency activation of the co-regulation circuitry without the safety conditions that make it restorative.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata"><p style={expandedProseStyle}>Koob & Le Moal (2001) — neurobiological mechanisms of tolerance and escalation. Archer (2006) & Mazur & Booth (1998) — testosterone-cortisol dynamics in dominant behaviour. Maier & Seligman (2016) — perceived controllability modulating the stress response.</p></ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata"><p style={expandedProseStyle}>The unified restoration substitute mechanism — substances, physical intensity, work, screens, self-soothing, and domination as the same biological search at different intensity levels.</p></ExpandableSection>
            </div>
          </section>

          <PartDivider label="PART 4" title="Where It Leads" color={MODEL_COLOR} />

          <section id="relational-escalation" aria-labelledby="heading-rse" style={{ marginBottom: 48 }}>
            <h2 id="heading-rse" style={sectionHeadingStyle(MODEL_COLOR)}>Relational Substitute Escalation</h2>
            <p style={proseStyle}>When restoration is sought through controlling, criticising, or harming others, a specific secondary mechanism activates. The action generates a shame signal. In a fluid state, shame is a useful signal — it says misalignment happened, repair is needed.</p>
            <p style={proseStyle}>In a chronic state, the signal arrives but the equipment that would process it is not available. The capacity to feel what the harm did to the other person is offline. The capacity to hold {"\u201C"}I did this{"\u201D"} without collapsing or defending is offline. Without those pathways, shame cannot move through the sequence it requires. It accumulates as debris.</p>
            <p style={proseStyle}>But it does not just accumulate. It reinforces the mode that generated it. The unprocessed shame becomes background activation. That activation increases the pressure for relief. The person reaches for the same substitute. The action generates more shame. The loop is self-sealing.</p>
            <p style={proseStyle}>The mode destroys the relational restoration pathway it would need for genuine completion. Each episode of control, punishment, or harm makes the people in proximity less safe, less honest, and less genuinely available.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata"><p style={expandedProseStyle}>Tangney, Stuewig & Mashek (2007) — shame as a moral emotion requiring specific processing capacities. Schore (2003) — shame regulation requiring relational safety. Porges (2011) — co-regulation as the mammalian primary restoration pathway.</p></ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata"><p style={expandedProseStyle}>Relational Substitute Escalation as a named, self-reinforcing mechanism. The identification that the mode destroys the relational restoration pathway it would need for genuine completion.</p></ExpandableSection>
            </div>
          </section>

          <section id="escalation-without-endpoint" aria-labelledby="heading-noe" style={{ marginBottom: 48 }}>
            <h2 id="heading-noe" style={sectionHeadingStyle(MODEL_COLOR)}>Escalation Without Endpoint</h2>
            <p style={proseStyle}>Discharge is the release of mobilised energy. It reduces the felt pressure. It temporarily suppresses parts of the stress response. Discharge is real. It is not resolution.</p>
            <p style={proseStyle}>Restoring physiological baseline requires the full biological sequence to run: the discharge phase, the parasympathetic restoration, the HPA negative feedback loop, cortisol clearance, the restoration of serotonin and oxytocin, the hippocampus encoding the event as finished.</p>
            <p style={proseStyle}>The alarm stays on because the debris is still there. The bar rises because dopaminergic conditioning means the same input produces less relief over time. There is no internal brake because the capacities that would make the cost felt are not online in chronic states.</p>
            <p style={proseStyle}>The biological completion sequence has a built-in endpoint: cortisol clears, the hippocampus sends the all-clear, the HPA axis stands down. Restoration substitutes have no such endpoint. They have no signal that tells the system: <em>finished</em>.</p>
            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="opendata"><p style={expandedProseStyle}>Koob & Le Moal (2001) — the allostatic model: tolerance, escalation, dependence. Robinson & Berridge (2003) — incentive sensitisation independent of subjective pleasure. Maier & Seligman (2016) — controllability as a modulator of the stress response.</p></ExpandableSection>
              <ExpandableSection title="What TEG-Blue Adds" type="opendata"><p style={expandedProseStyle}>No restoration substitute contains its own stopping mechanism — the biological completion sequence does. Escalation as a physiological inevitability when the body{"'"}s designed completion mechanism is unavailable.</p></ExpandableSection>
            </div>
          </section>

          <PartDivider label="EXPLORE" title="Path A and Path B" color={MODEL_COLOR} />

          <section id="path-explorer" style={{ marginBottom: 48 }}>
            <p style={{ ...proseStyle, marginBottom: 24 }}>Explore the two pathways: Path A where biological restoration completes and the nervous system returns to baseline, and Path B where cognitive override blocks the sequence and the body carries the activation forward.</p>
            <OpenCycleExplorer />
          </section>

          <ConnectionsMap color={MODEL_COLOR} connections={[
            { id: "M1: Emotions as Signals", href: "/model/m1-emotions-as-signals", description: "Describes the signal that triggered the activation — and the somatic/relational distinction that determines which restoration pathway is needed." },
            { id: "M2: Nervous System States", href: "/model/m2-nervous-system-states", description: "Describes the state the signal produced — M2 shows how the state filters reality, M3 shows how the override blocks the correction. Together: why people don\u2019t know they don\u2019t know." },
            { id: "M4: Awareness Capacities", href: "/model/m4-awareness-capacities", description: "Describes what determines whether the person can feel the activation running — whether they can detect the override and distinguish a substitute from genuine restoration." },
            { id: "F1: The Emotional Gradient", href: "/framework/f1-emotional-gradient", description: "Establishes biological restoration as the designed process of the entire system — the process around which all twelve frameworks are organised." },
            { id: "F2: Developmental Calibration", href: "/framework/f2-awareness-calibration", description: "Explains how the capacity for biological restoration develops through early co-regulation — and what happens when it does not." },
          ]} />

          <NavSection color={MODEL_COLOR} items={[
            { label: "Understand the signals that trigger activation — and which restoration pathway each requires", href: "/model/m1-emotions-as-signals", linkText: "M1: Emotions as Signals \u2192" },
            { label: "See how the state filters perception before cognition arrives", href: "/model/m2-nervous-system-states", linkText: "M2: Nervous System States \u2192" },
            { label: "Understand what determines whether the person can perceive the activation while it runs", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
            { label: "Explore the biological origin of the restoration architecture", href: "/framework/f1-emotional-gradient", linkText: "F1: The Emotional Gradient \u2192" },
            { label: "Explore the interactive tools", href: "https://teg-blue.com/emotional-tools", linkText: "teg-blue.com \u2192", external: true },
          ]} />
        </article>
      </PageLayout>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ScholarlyArticle", "@id": "https://teg-blue.org/model/m3-regulation-capacities#article",
        headline: "Regulation Capacities: The Return Pathway",
        description: "Whether the body completes what activation started — biological restoration or cognitive override. Model M3 of the TEG-Blue system.",
        author: { "@type": "Person", name: "Anna Paretas-Artacho", url: "https://teg-blue.org/about" },
        publisher: { "@type": "Organization", name: "TEG-Blue Research", url: "https://teg-blue.org" },
        datePublished: "2026-03-21", dateModified: "2026-04-06", inLanguage: "en", license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
        isPartOf: { "@type": "CreativeWork", name: "TEG-Blue Models & Frameworks", url: "https://teg-blue.org/models" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://teg-blue.org/model/m3-regulation-capacities" },
        about: [{ "@type": "Thing", name: "Biological Restoration" }, { "@type": "Thing", name: "Cognitive Override" }, { "@type": "Thing", name: "Debris Accumulation" }],
        keywords: ["biological restoration","cognitive override","debris accumulation","baseline elevation","restoration substitutes","somatic debt"],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "The Emotional Somatic System", url: "/models" }, { name: "M3: Regulation Capacities", url: "/model/m3-regulation-capacities" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd([
        { question: "What is biological restoration?", answer: "Biological restoration is the body completing a sequence that began with activation. Cortisol metabolises, muscles unclench, the HPA axis stands down, and the nervous system returns toward physiological baseline. It is not calming down or emotion management — it is a biological completion process with a measurable endpoint." },
        { question: "What is cognitive override?", answer: "Cognitive override is the branching point in the Emotional Somatic Cycle. When cognition decides the body's emotional signal is irrelevant and overrides access to it, the restoration sequence cannot begin. In chronic states, the override becomes the architecture — invisible and structurally locked." },
        { question: "What is the difference between temporary relief and genuine restoration?", answer: "Temporary relief reduces felt intensity. Genuine restoration clears the activation — stress hormones metabolise, the HPA axis stands down, physiological baseline is reached. Every restoration substitute produces real relief. None complete the restoration sequence." },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSpeakableJsonLd({ name: "Regulation Capacities (M3) — TEG-Blue Research", url: "https://teg-blue.org/model/m3-regulation-capacities", cssSelectors: ["article > section:first-of-type p", "article h2", "article h2 + p"] })) }} />
    </div>
  );
}
