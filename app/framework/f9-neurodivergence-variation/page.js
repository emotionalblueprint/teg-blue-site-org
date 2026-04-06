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
  ExpandableSection, CommonUnderstanding,
  PartDivider, NavSection, ConnectionsMap,
} from "@/src/components";
import PrerequisitesBlock from "@/src/components/PrerequisitesBlock";
import BridgeSection from "@/src/components/BridgeSection";
import EstablishesSection from "@/src/components/EstablishesSection";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Common Understanding", href: "#common-understanding", description: "What most people think these words mean — and what the nervous system is actually doing." },
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F9 makes about configuration variation and environmental mismatch." },
  { label: "Same Instrument, Different Inputs", href: "#different-inputs", description: "The ESC is universal. What varies is the sensory, attention, and processing inputs arriving at it." },
  { label: "System Mismatch", href: "#system-mismatch", description: "The gap between what the environment requires and what a nervous system can sustainably provide." },
  { label: "Masking at Structural Scale", href: "#structural-masking", description: "Each masked expression is an incomplete restoration sequence. Baseline rises." },
  { label: "Threshold Dynamics", href: "#threshold-dynamics", description: "Meltdown, shutdown, mixed — regulatory collapse when accumulated activation exceeds the remaining margin." },
  { label: "Neurodivergent Burnout", href: "#burnout", description: "Not exhaustion — baseline reorganisation. Different from general burnout." },
  { label: "How Capacities Present Differently", href: "#capacity-presentation", description: "RE, ER, SEA present but differently channelled, expressed, and reported." },
  { label: "How Masking Distorts Capacities", href: "#capacity-distortion", description: "RE misdirected, ER suppressed, SEA confused — distortion, not absence." },
  { label: "What Repair Requires", href: "#repair-requirements", description: "Unmasking is not restoration. Seven design principles for environments built for variation." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Bridge to F10", href: "#bridge", description: "What transmits when adults have done the work in environments that support it." },
  { label: "Connections Map", href: "#connections", description: "How F9 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Variation Is Configuration, Not Deficit (F9) | TEG-Blue Research",
  description:
    "When the environment is the mismatch — configuration variation through the ESC architecture, system mismatch as structural concept, masking through the restoration sequence, and environments designed for variation. Framework F9 of the TEG-Blue 12-framework system.",
  keywords: [
    "neurodivergence",
    "configuration variation",
    "system mismatch",
    "masking cost",
    "neurodivergent burnout",
    "sensory processing",
    "universal design",
    "nervous system variation",
    "interoceptive substrate",
    "structural accommodation",
    "capacity distortion",
    "environmental design",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f9-neurodivergence-variation",
  },
  openGraph: {
    title: "Variation Is Configuration, Not Deficit — F9 Framework | TEG-Blue",
    description:
      "When the environment is the mismatch — the second framework in the repair arc. Framework F9 of 12.",
    url: "https://teg-blue.org/framework/f9-neurodivergence-variation",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Variation Is Configuration — TEG-Blue F9",
    description:
      "The same regulatory instrument, different inputs. When the environment is designed for one configuration, every other configuration pays the cost.",
  },
  other: {
    'citation_title': 'Variation Is Configuration, Not Deficit',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F9VariationPage() {
  const accent = SPECTRUM.cobalt;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f9-neurodivergence-variation" />

      <PageLayout
        header={
          <FrameworkHero
            badge="FRAMEWORK F9"
            title="Variation Is Configuration, Not Deficit"
            subtitle="When the Environment Is the Mismatch"
            description="F8 established that repair requires safety before capacity, that every configuration gets masked when the environment cannot hold it, and that different configurations make the collective stronger. F9 asks: what happens when that pattern becomes structural? When environments are designed for one set of nervous system inputs, the mismatch is not interpersonal — it is architectural. For nervous systems configured differently, the cost of masking becomes structural, daily, and inescapable."
            group="Repair"
            groupLabel="Repair Arc · F8–F12"
            threadLine="Variation is configuration, not deficit — environments redesigned for variation. Restores: accuracy"
            informsModels={[
              { label: "M1", href: "/model/m1-emotions-as-signals" },
              { label: "M2", href: "/model/m2-nervous-system-states" },
            ]}
            adjacent={{
              prev: { label: "F8 Awareness Rebuilds Through Safety", href: "/framework/f8-repairing-awareness" },
              next: { label: "F10 What the Adult Processes", href: "/framework/f10-generational-repair" },
            }}
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>

          {/* ─── PREREQUISITES ──────────────────────────── */}
          <PrerequisitesBlock items={[
            {
              concept: "Safety Before Capacity",
              framework: "F8",
              description: "Felt safety (the ESS's assessment), not understood safety (the CLS's conclusion) — five conditions create the environment repair requires.",
              href: "/framework/f8-repairing-awareness#safety-before-capacity",
            },
            {
              concept: "State-Dependent Sensory Filtering",
              framework: "M2",
              description: "The nervous system's physiological configuration shaping what sensory input reaches the person before conscious thought — the same environment can produce different states in different nervous systems.",
              href: "/model/m2-nervous-system-states",
            },
            {
              concept: "The Bias Mechanism",
              framework: "F6",
              description: "If believing something reduces activation, the system keeps believing it — the regulatory equation that produces 'disorder' language when configuration variation is read as deficit.",
              href: "/framework/f6-bias-regulates#bias-regulation",
            },
          ]} />

          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Neurodivergence",
                commonUnderstanding: "A disorder — a brain that doesn't work correctly, needing treatment or correction to function normally.",
                definition: "A description of input variation across the universal system. The Emotional Somatic Cycle runs in every nervous system. What varies is the inputs: sensory thresholds, attention patterns, processing speeds, emotional intensity, communication channels. The regulatory instrument is the same. The data arriving at it is different.",
              },
              {
                title: "Accommodation",
                commonUnderstanding: "A special exception made for people with disabilities — an extra cost the system bears for individuals who can't keep up.",
                definition: "A retrofit that identifies individuals and modifies their experience. The alternative is design: environments built for the range of nervous system variation from the start — anticipating that inputs will vary, without requiring disclosure or exception.",
              },
              {
                title: "Meltdown",
                commonUnderstanding: "An overreaction, a tantrum, a failure of self-control — something the person should be able to manage.",
                definition: "Threshold crossing. The accumulated activation — from masking cost, environmental demand, and unresolved activation — exceeded the remaining regulatory margin. The nervous system shifted involuntarily. The response is proportional to the accumulated load, not to the triggering event.",
              },
            ]}
          />

          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  The Emotional Somatic Cycle is universal — the same signal architecture, the same state gradient, the same restoration sequence, the same awareness architecture — running with different sensory, attention, and processing inputs
                </li>
                <li style={propositionItemStyle}>
                  System Mismatch is the gap between what an environment requires and what a nervous system can sustainably provide — structural, testable, and invisible to people whose configuration matches the design
                </li>
                <li style={propositionItemStyle}>
                  Each masked expression is an incomplete restoration sequence — the body mobilised a response, the response was suppressed, and the activation remains unresolved, producing baseline elevation
                </li>
                <li style={propositionItemStyle}>
                  The internal thread (F1–F7) and the structural thread (environmental mismatch) operate simultaneously — the structural thread amplifies the internal thread through chronic sensory activation, masking as sustained override, and social evaluation as chronic threat
                </li>
                <li style={propositionItemStyle}>
                  Awareness capacities may be present but differently channelled (RE), differently expressed (ER), or differently reported (SEA) — assessment error follows F6's bias mechanism
                </li>
                <li style={propositionItemStyle}>
                  Masking distorts the capacities it hides — RE misdirected to surveillance, ER suppressed below expression, SEA confused by sustained incongruence between internal state and external performance
                </li>
                <li style={propositionItemStyle}>
                  Unmasking is not restoration — dropping the performance is not the same as the ESS receiving evidence that authenticity is safe — environments must be designed for variation, not retrofitted for exceptions
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: CONFIGURATION, NOT DEFICIT ─────── */}
          <PartDivider label="PART 1" title="Configuration, Not Deficit" color={accent} />

          {/* Concept 0: Same Instrument, Different Inputs */}
          <section
            id="different-inputs"
            aria-labelledby="heading-different-inputs"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-different-inputs" style={sectionHeadingStyle(accent)}>
              How the Same Regulatory Instrument Runs With Different Inputs
            </h2>

            <p style={proseStyle}>
              The Emotional Somatic Cycle runs in every nervous system. The four states are universal. The restoration sequence is universal. The awareness architecture is universal. What varies is the inputs.
            </p>
            <p style={proseStyle}>
              Nervous system configuration varies across multiple dimensions: sensory processing (threshold, filtering, seeking or avoiding), attention (sustained, variable, interest-driven, demand-driven), emotional intensity (amplitude, processing time, recovery pattern), social processing (implicit, explicit, intuitive, systematic), cognitive style (linear, associative, parallel, sequential), and motor regulation (consistency, movement needs, stimming as regulatory strategy).
            </p>
            <p style={proseStyle}>
              These are not personality traits. They are differences in how the nervous system is wired — how it receives sensory data, processes information, allocates attention, and generates physiological responses. The ESS in a nervous system with high sensory sensitivity receives more data through its sensory channels before any filtering occurs. The amygdala fires in 12 milliseconds — before a single thought forms. The amount and intensity of data arriving at the evaluation stage is different. The Safety-Threat Evaluation runs the same process on different inputs.
            </p>
            <p style={proseStyle}>
              This means the same environment can produce different states in different nervous systems — not because one is functioning correctly and another is not, but because the inputs arriving at the regulatory instrument are different. A nervous system in a well-matched environment can sit in Safety & Openness as sustainably as any other.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — same instrument, different inputs, different states */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Singer (1998) — the neurodiversity paradigm: neurological variation as natural human variation. Markram & Markram (2010) — Intense World Theory: heightened perception as processing difference. Porges (2011) — safety detection operates through sensory channels that vary in threshold and sensitivity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Configuration variation mapped through the ESC architecture — the same signal architecture (<Link href="/model/m1-emotions-as-signals" style={linkStyle}>M1</Link>), state gradient (<Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link>), restoration sequence (<Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link>), and awareness architecture (<Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link>) operate in every nervous system, with inputs that vary. This reframes "neurodivergence" from a category of people to a description of input variation across the universal system. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 1: System Mismatch */}
          <section
            id="system-mismatch"
            aria-labelledby="heading-system-mismatch"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-system-mismatch" style={sectionHeadingStyle(accent)}>
              When the Environment Is the Mismatch
            </h2>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>System Mismatch</strong> is the gap between what an environment requires and what a nervous system can sustainably provide. The concept is structural: it relocates the source of difficulty from the person's neurology to the relationship between the person's neurology and the environment's design.
            </p>
            <p style={proseStyle}>
              A school that requires sustained seated attention for six hours is designed for one attention configuration. A nervous system with variable, interest-driven attention faces daily mismatch. A workplace with open-plan offices, fluorescent lighting, and ambient noise is designed for one sensory configuration. A nervous system with high sensory sensitivity faces chronic overload.
            </p>
            <p style={proseStyle}>
              The mismatch is testable. Place the same nervous system in an environment designed for its configuration and observe what happens. When the sensory environment matches the sensory threshold, when the pacing matches the processing rhythm — the "symptoms" often reduce or disappear.
            </p>
            <p style={proseStyle}>
              System Mismatch is embedded in architecture, policy, and norm — not in individual attitudes. The lighting was chosen. The pacing was set. These are design decisions. They are invisible to people whose configuration matches the design — because for them, the environment feels normal. This is the structural equivalent of <Link href="/framework/f2-awareness-calibration#disruption-conditions" style={linkStyle}>F2's</Link> invisibility principle: the person inside the matched configuration does not know the environment was designed for them, just as the person inside a chronic state does not know it is a state.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — system mismatch: same environment, different inputs, different states */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Oliver (1990) — the Social Model of Disability: disability as environmental barrier. Shakespeare (2006) — the interactional model: disability as the relationship between individual and environment. Rose & Meyer (2002) — Universal Design for Learning: environments designed for the range of human variation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  System Mismatch grounded in the ESC architecture — the same environment produces different nervous system states because the inputs arriving at the regulatory instrument differ. The structural application of F2's invisibility principle. The testability: change the environment, observe the configuration's response. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: WHAT MISMATCH PRODUCES ────────── */}
          <PartDivider label="PART 2" title="What Mismatch Produces" color={accent} />

          {/* Concept 2: Structural Masking */}
          <section
            id="structural-masking"
            aria-labelledby="heading-structural-masking"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-structural-masking" style={sectionHeadingStyle(accent)}>
              Why Masking at Structural Scale Has Specific Biological Consequences
            </h2>

            <p style={proseStyle}>
              For nervous systems configured differently from the environmental default, the masking pattern <Link href="/framework/f8-repairing-awareness" style={linkStyle}>F8</Link> described operates at structural scale. The punishment is not interpersonal — it is environmental, built into every institution. There is no environment to escape to. The masking must be sustained across all contexts, all day, every day.
            </p>
            <p style={proseStyle}>
              Beyond what F8 describes, structural masking requires hiding the rhythm of the nervous system itself: suppressing stims (the body's own regulation strategy — movement that discharges activation), forcing eye contact (overriding authentic processing to perform neurotypical signalling), moderating expression (performing expected display when the authentic intensity differs), performing social fluency (running explicit cognitive analysis to replicate what implicit processing produces in other configurations), maintaining pace (forcing the system to process at a speed it was not built for).
            </p>
            <p style={proseStyle}>
              Each of these performances has a specific biological consequence. Every suppressed stim is an activation sequence that was started and not allowed to complete. Every forced expression is a physiological response overridden by cognitive control. These are the restoration sequence (<Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link>) interrupted at the mobilisation stage — the body mobilised a response, the response was suppressed, and the activation remains unresolved. Cortisol stays elevated. Muscle tension persists. The debris accumulates. The person starts each new day from a progressively more activated baseline.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — masking as interrupted restoration, debris accumulation */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Price (2022) — the physiological cost of sustained masking across neurodivergent populations. Van der Kolk (2014) — incomplete activation cycles as the mechanism of chronic stress accumulation. McEwen (1998) — allostatic load.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Masking's biological cost traced through the specific ESC mechanism: each masked expression is an incomplete restoration sequence. The debris accumulation (M3) applied to structural masking — the specific accumulation of unresolved activation from interrupted mobilisation responses. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concepts 3-4: Two Threads + Threshold Dynamics */}
          <section
            id="threshold-dynamics"
            aria-labelledby="heading-threshold-dynamics"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-threshold-dynamics" style={sectionHeadingStyle(accent)}>
              Threshold Dynamics and What Crossing Looks Like
            </h2>

            <p style={proseStyle}>
              For a nervous system facing chronic mismatch, the regulation thread operates at two levels simultaneously. The <strong style={{ color: TEXT.primary }}>internal thread</strong> — the F1–F7 mechanisms — runs in every nervous system regardless of configuration. The <strong style={{ color: TEXT.primary }}>structural thread</strong> — environmental mismatch — is an additional, external source of chronic activation that drives the internal thread harder. Chronic sensory activation raises the baseline, masking prevents discharge, social evaluation adds new activation. The structural thread amplifies the internal thread.
            </p>
            <p style={proseStyle}>
              Every nervous system has a threshold — the point at which regulatory capacity is exceeded and the system shifts involuntarily. For a nervous system under chronic mismatch and sustained masking, the threshold is under constant pressure:
            </p>

            <p
              style={{
                fontSize: 14,
                fontFamily: FONT.mono,
                color: TEXT.muted,
                padding: "12px 16px",
                background: hexToRgba(accent, 0.08),
                borderRadius: 6,
                marginBottom: 16,
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              Baseline capacity − (masking cost + environmental demand + accumulated unresolved activation) = remaining regulatory margin
            </p>

            <p style={proseStyle}>
              When the margin reaches zero, the system crosses. <strong style={{ color: TEXT.primary }}>Activation crossing (meltdown):</strong> sympathetic activation surges — cortisol spikes, the perceptual field narrows. The nervous system discharging activation it could no longer contain. <strong style={{ color: TEXT.primary }}>Withdrawal crossing (shutdown):</strong> dorsal vagal withdrawal — heart rate drops, sensory processing dims, cognitive access disconnects. The nervous system going offline. <strong style={{ color: TEXT.primary }}>Mixed crossing:</strong> rapid oscillation between activation and withdrawal — the regulatory instrument overwhelmed.
            </p>
            <p style={proseStyle}>
              These responses are frequently misinterpreted — as manipulation, overreaction, laziness — because the observer's nervous system does not experience the same activation in the same environment. The observer's configuration matches the environmental design. The threshold is not visible from outside.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — threshold equation and three crossing types */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Porges (2011) — the autonomic hierarchy: sympathetic activation, then dorsal vagal withdrawal when exceeded. Siegel (2012) — window of tolerance. Perry (2006) — dose-response in chronic stress: state-dependent functioning. McEwen (1998) — allostatic overload when cumulative cost exceeds capacity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The two-thread model — internal and structural as simultaneous, compounding sources. The threshold equation with three specific variables. Three crossing presentations traced through the nervous system gradient. The structural explanation for why the observer does not perceive the threshold: their configuration matches the environment. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 5: Neurodivergent Burnout */}
          <section
            id="burnout"
            aria-labelledby="heading-burnout"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-burnout" style={sectionHeadingStyle(accent)}>
              What Neurodivergent Burnout Is at the Substrate Level
            </h2>

            <p style={proseStyle}>
              Neurodivergent burnout is distinct from general burnout. It is not exhaustion that rest addresses. It is a shift in the nervous system's baseline organisation — the system has reorganised around a higher resting activation level and a lower threshold, and the reorganisation does not reverse with rest alone.
            </p>
            <p style={proseStyle}>
              The distinction is biological. General burnout depletes resources. Rest replenishes them. The system returns to its previous baseline. Neurodivergent burnout involves a shift in the baseline itself. The sustained masking and chronic mismatch produced enough unresolved activation, over enough time, that the nervous system's resting state has recalibrated upward (<Link href="/model/m3-regulation-capacities" style={linkStyle}>M3</Link>: Baseline Elevation). The floor has risen. The threshold has lowered. The window has narrowed — not temporarily, but as the new organisation.
            </p>
            <p style={proseStyle}>
              What this looks like: <strong style={{ color: TEXT.primary }}>Skill regression</strong> — tasks that were previously manageable become impossible, because regulatory margin has been consumed. <strong style={{ color: TEXT.primary }}>Increased sensitivity</strong> — lower threshold for sensory, emotional, and social input. <strong style={{ color: TEXT.primary }}>Extended recovery</strong> — weeks to months, not days, because the shift is in the baseline organisation, requiring sustained different conditions. <strong style={{ color: TEXT.primary }}>Masking collapse</strong> — the mask drops not by choice but by depletion, the person's authentic configuration becoming visible, often for the first time in years.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — general burnout (depletion) vs neurodivergent burnout (reorganisation) */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  McEwen (1998) — allostatic load leading to system reorganisation. Price (2022) — neurodivergent burnout as distinct from occupational burnout. Maté (2003) — physiological consequences of sustained self-suppression.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Neurodivergent burnout traced through M3's Baseline Elevation — the resting activation level rising through accumulated unresolved activation from masking-interrupted restoration sequences. The structural distinction from general burnout: resource depletion (rest helps) vs baseline reorganisation (sustained different conditions required). This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: CONFIGURATION DISTORTION ────────── */}
          <PartDivider label="PART 3" title="Configuration Distortion" color={accent} />

          {/* Concepts 6-7: Capacity Presentation + Distortion */}
          <section
            id="capacity-presentation"
            aria-labelledby="heading-capacity-presentation"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-capacity-presentation" style={sectionHeadingStyle(accent)}>
              How Capacities Present Differently — and How Masking Distorts Them
            </h2>

            <p style={proseStyle}>
              A common assessment error: concluding that a differently configured nervous system lacks awareness capacities. In many configurations, the capacities are present but expressed differently.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>RE</strong> may be hyper-accurate — reading system-level dynamics rather than individual facial expressions, identifying inconsistencies between verbal content and physiological signals, processing through explicit analysis rather than implicit detection. From outside: "missing social cues." The RE is present. The channel is different.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>ER</strong> may be intense — high amplitude, long processing time, deep physiological response — but externally flat. The resonance is happening in the body. The display is minimal because the configuration does not automatically translate internal experience into standard external expression. From outside: "doesn't care." The ER is present. The expression pathway is different.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>SEA</strong> may be highly developed — precise interoceptive signals, detailed awareness of internal states — but expressed in non-standard language. Sensory metaphor, body-location language, pattern description rather than standard emotion vocabulary. From outside: "not self-aware." The SEA is present. The reporting format is different.
            </p>
            <p style={proseStyle}>
              The assessment error follows <Link href="/framework/f6-bias-regulates#bias-regulation" style={linkStyle}>F6's bias mechanism</Link>: the assessor's perception is calibrated to one configuration's expression pattern. When expression arrives through a different pattern, the perceptual filter reads absence rather than difference.
            </p>

            <h3 style={conceptHeadingStyle}>How Masking Distorts the Capacities It Hides</h3>
            <p style={proseStyle}>
              Chronic masking does not merely conceal capacities. It distorts them. <strong style={{ color: TEXT.primary }}>RE gets misdirected</strong> — redirected from understanding and connection toward monitoring social danger. The capacity is intact. Its function has shifted from connection to surveillance. <strong style={{ color: TEXT.primary }}>ER gets suppressed</strong> — when emotional intensity is punished, the nervous system blocks the expression pathway. Over time, the person may no longer recognise the resonance as present. <strong style={{ color: TEXT.primary }}>SEA gets confused</strong> — after years of performing a configuration, SEA cannot distinguish authentic internal state from the physiological residue of the performance itself.
            </p>
            <p style={proseStyle}>
              The distortion compounds. Misdirected RE provides data about threat, reinforcing the assessment that the environment is unsafe. Suppressed ER means emotional responses are unavailable as information, impoverishing what SEA has to work with. Confused SEA makes the person more dependent on RE's social monitoring. Each distortion reinforces the others.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — three capacities: present differently + distorted by masking */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Milton (2012) — the double empathy problem: empathy difficulties between neurotypes as bidirectional. Crompton et al. (2020) — autistic-to-autistic communication is as effective as non-autistic-to-non-autistic. Barrett (2017) — emotion concepts as culturally constructed categories. Schore (2003) — affect regulation disrupted by sustained incongruence. Hull et al. (2017) — cognitive and emotional cost of camouflaging.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Awareness capacities mapped across configuration variation — what is assessed as absence may be different channelling (RE), different expression (ER), or different reporting (SEA). The assessment error traced through F6's bias architecture. Capacity distortion through masking — misdirection, suppression, confusion — as structural consequences, not properties of the configuration. The compounding cycle showing how each distortion reinforces the others. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 4: WHAT REPAIR REQUIRES ──────────── */}
          <PartDivider label="PART 4" title="What Repair Requires" color={accent} />

          {/* Concepts 8-9: Unmasking + Design */}
          <section
            id="repair-requirements"
            aria-labelledby="heading-repair-requirements"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-repair-requirements" style={sectionHeadingStyle(accent)}>
              Why Unmasking Is Not Restoration — and What Is
            </h2>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Unmasking</strong> means dropping the performance: expressing authentic rhythm, authentic intensity, authentic processing. <strong style={{ color: TEXT.primary }}>Restoration</strong> means being received in that authentic expression — another nervous system registering the authentic configuration without threat, without correction, without the signals that originally installed the mask. These are not equivalent.
            </p>
            <p style={proseStyle}>
              Unmasking into an environment that cannot hold the authentic configuration can increase harm. The person drops the mask, expresses authentically, and the environment responds with the same signals that installed the mask in the first place — rejection, correction, exclusion. The nervous system receives confirmation: authenticity is dangerous. The mask reinstalls, often more rigidly.
            </p>
            <p style={proseStyle}>
              The deeper structural answer is environments designed for variation from the start — not retrofitting for identified individuals but building for the range of nervous system configurations that will inhabit the space. The shift from accommodation (identifying individuals, modifying their experience) to design (modifying the environment, removing the mismatch for everyone).
            </p>

            <h3 style={conceptHeadingStyle}>Seven Design Principles</h3>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Regulation first.</strong> Environmental safety before performance demands. The design question: what conditions would allow this nervous system to access the state in which performance is available?
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Sensory consideration.</strong> Lighting, sound, spatial design for variable sensitivity. A nervous system not forced to process chronic sensory overload has more regulatory capacity available for everything else.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Flexible pacing.</strong> Multiple timeline options, engagement driven by actual processing rhythm rather than arbitrary standard.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Communication clarity.</strong> Explicit expectations, reduced hidden curriculum. When social rules are implicit, every nervous system that processes explicitly is running a translation operation on top of the actual task.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Autonomy respect.</strong> Self-determined rhythms within broad parameters. The person with the nervous system knows what that system needs.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Multiple modalities.</strong> Various ways to engage, learn, contribute, communicate. A single modality requirement excludes every configuration that processes through a different channel.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Rest integration.</strong> Recovery built into structure, not punished. When rest is available only as accommodation — requiring disclosure, requesting exception — the cost of accessing it may exceed the benefit.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — seven design principles mapped to regulatory mechanisms */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Rose & Meyer (2002) — Universal Design for Learning: proactive design for variation. Edmondson (1999) — psychological safety: team performance increases when members can contribute without performance risk. Oliver (1990) — the Social Model: removing environmental barriers rather than fixing individuals. Price (2022) — risks of unmasking without environmental support. Cage & Troxell-Whitman (2019) — masking, mental health, and environmental factors.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The unmasking-restoration distinction — dropping the performance (CLS stopping the override) is not the same as the nervous system updating (the ESS receiving evidence that authenticity is safe). Seven design principles traced through the specific regulatory mechanisms each addresses — each principle is a structural intervention in the nervous system's regulatory equation, not a preference or a kindness. The shift from accommodation to design, grounded in the ESC architecture. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={accent}
            items={[
              {
                term: "Same instrument, different inputs",
                definition: "The ESC is universal. What varies is sensory threshold, attention pattern, processing speed, emotional intensity. The regulatory instrument is the same. The data arriving at it is different.",
              },
              {
                term: "System Mismatch",
                definition: "The gap between what an environment requires and what a nervous system can sustainably provide. Structural, testable, invisible to the matched configuration.",
              },
              {
                term: "Masking as interrupted restoration",
                definition: "Each masked expression is an incomplete restoration sequence. The body mobilised, the response was suppressed, the activation remains. Baseline rises.",
              },
              {
                term: "Two-thread model",
                definition: "The internal thread (F1–F7) and the structural thread (environmental mismatch) as simultaneous, compounding sources of activation.",
              },
              {
                term: "Threshold dynamics",
                definition: "Baseline capacity minus (masking cost + environmental demand + accumulated activation) = remaining margin. Three crossing types: activation, withdrawal, mixed.",
              },
              {
                term: "Neurodivergent burnout",
                definition: "Baseline Elevation from accumulated masking — not exhaustion (rest helps) but reorganisation (sustained different conditions required).",
              },
              {
                term: "Capacities present differently",
                definition: "RE differently channelled, ER differently expressed, SEA differently reported. Assessment error as F6 bias.",
              },
              {
                term: "Capacity distortion through masking",
                definition: "RE misdirected (surveillance), ER suppressed (expression blocked), SEA confused (authentic vs performed). Compounding cycle.",
              },
              {
                term: "Unmasking is not restoration",
                definition: "Dropping performance ≠ ESS receiving evidence that authenticity is safe. The environment must be ready.",
              },
              {
                term: "Seven design principles",
                definition: "Regulation first, sensory consideration, flexible pacing, communication clarity, autonomy respect, multiple modalities, rest integration. Design, not accommodation.",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={accent}
            established="F9 established how configuration variation operates through the universal ESC architecture, how system mismatch produces structural activation, how masking interrupts the restoration sequence, and how environments can be designed for variation rather than retrofitted for exceptions."
            question="When adults repair their own capacities (F8) and inhabit environments that support their authentic configuration (F9), the next generation develops in different conditions. The caregiver's configuration IS the child's developmental environment. When the adult is different, the child develops differently — not because the adult decided to parent differently, but because the adult IS different."
            nextFramework="F10"
            nextTitle="What the Adult Processes"
            nextHref="/framework/f10-generational-repair"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={accent}
            connections={[
              {
                id: "M1: Emotions as Signals",
                href: "/model/m1-emotions-as-signals",
                description: "M1 maps the signal architecture. F9 shows that different nervous systems run the same architecture with different sensory inputs — different thresholds, different filtering, different processing speeds.",
              },
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "M2 maps the four states as a continuous gradient. F9 shows that the same environment can produce Safety & Openness in one configuration and Threat & Defence in another — because the inputs differ.",
              },
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "Each masked expression interrupts the restoration sequence at the mobilisation stage. Neurodivergent burnout is M3's Baseline Elevation from accumulated masking-interrupted restoration.",
              },
              {
                id: "F6: Bias Regulates",
                href: "/framework/f6-bias-regulates",
                description: "F6's bias mechanism produces the 'disorder' reading — the assessor's perceptual filter, calibrated to one configuration, reads absence where there is difference.",
              },
              {
                id: "F8: Awareness Rebuilds Through Safety",
                href: "/framework/f8-repairing-awareness",
                description: "F8 describes individual repair. F9 adds the structural dimension: individual repair has limited effect when the person returns daily to an environment that requires chronic masking.",
              },
              {
                id: "F10: What the Adult Processes",
                href: "/framework/f10-generational-repair",
                description: "When adults repair their capacities (F8) and inhabit matched environments (F9), the next generation develops in different conditions.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={accent}
            items={[
              { label: "Continue to F10 — what transmits when adults have done the work", href: "/framework/f10-generational-repair", linkText: "F10: What the Adult Processes \u2192" },
              { label: "See the signal architecture that runs with different inputs", href: "/model/m1-emotions-as-signals", linkText: "M1: Emotions as Signals \u2192" },
              { label: "See how individual repair works", href: "/framework/f8-repairing-awareness", linkText: "F8: Awareness Rebuilds Through Safety \u2192" },
              { label: "See the bias mechanism that produces the 'disorder' reading", href: "/framework/f6-bias-regulates", linkText: "F6: Bias Regulates \u2192" },
              { label: "Explore all 12 frameworks", href: "/frameworks-map", linkText: "Framework Map \u2192" },
              { label: "Look up key terms", href: "/glossary", linkText: "Glossary \u2192" },
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
            "@id": "https://teg-blue.org/framework/f9-neurodivergence-variation#article",
            headline: "Variation Is Configuration, Not Deficit: When the Environment Is the Mismatch",
            description:
              "How nervous system configuration variation operates through the universal ESC architecture, system mismatch as structural concept, masking through the restoration sequence, and environments designed for variation. Framework F9 of the TEG-Blue 12-framework system.",
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
            datePublished: "2026-03-07",
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
              "@id": "https://teg-blue.org/framework/f9-neurodivergence-variation",
            },
            about: [
              { "@type": "Thing", name: "Neurodivergence" },
              { "@type": "Thing", name: "System Mismatch" },
              { "@type": "Thing", name: "Universal Design" },
              { "@type": "Thing", name: "Masking" },
              { "@type": "Thing", name: "Configuration Variation" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "The Politics of Disablement (Oliver, 1990)" },
              { "@type": "ScholarlyArticle", name: "Universal Design for Learning (Rose & Meyer, 2002)" },
              { "@type": "ScholarlyArticle", name: "Neurodiversity (Singer, 1998)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Unmasking Autism (Price, 2022)" },
              { "@type": "ScholarlyArticle", name: "Allostatic Load (McEwen, 1998)" },
            ],
            keywords: [
              "neurodivergence",
              "system mismatch",
              "universal design",
              "configuration variation",
              "masking cost",
              "neurodivergent burnout",
              "sensory processing",
              "capacity distortion",
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
              { name: "F9: Variation Is Configuration", url: "/framework/f9-neurodivergence-variation" },
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
                question: "What is System Mismatch?",
                answer:
                  "The gap between what an environment requires and what a nervous system can sustainably provide. A school requiring six hours of seated attention is designed for one attention configuration. A nervous system with variable attention faces daily mismatch. The concept relocates the difficulty from the person's neurology to the relationship between neurology and environmental design. It is testable: change the environment, observe the response.",
              },
              {
                question: "Why is neurodivergent burnout different from general burnout?",
                answer:
                  "General burnout depletes resources — rest replenishes them. Neurodivergent burnout involves a shift in the nervous system's baseline organisation — accumulated masking-interrupted restoration sequences raise the resting activation level. Recovery requires sustained different conditions, not just rest, because the shift is in the baseline itself.",
              },
              {
                question: "Why is unmasking alone insufficient?",
                answer:
                  "Unmasking means dropping the performance. Restoration means being received in authentic expression — another nervous system registering the configuration without threat. Unmasking into an environment that cannot hold the authentic configuration can increase harm — the environment responds with the same signals that installed the mask. The mask reinstalls, often more rigidly.",
              },
              {
                question: "What are the seven design principles?",
                answer:
                  "Regulation first (environmental safety before performance demands), sensory consideration (design for variable sensitivity), flexible pacing (multiple timelines matching processing rhythms), communication clarity (explicit expectations), autonomy respect (self-determined rhythms), multiple modalities (various ways to engage), rest integration (recovery built in, not punished). Each is a structural intervention in the nervous system's regulatory equation.",
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
              name: "Variation Is Configuration, Not Deficit (F9) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f9-neurodivergence-variation",
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
