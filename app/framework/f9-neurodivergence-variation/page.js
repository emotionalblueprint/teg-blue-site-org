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
  PropositionBox, ExpandableSection, CommonUnderstanding,
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
  { label: "Framework Position", href: "#framework-position", description: "F8 describes a universal cost. F9 asks what happens when that cost is architectural, daily, and inescapable." },
  { label: "The Regulation Thread", href: "#framework-position", description: "What if the environment itself prevents the building? You cannot build what the environment keeps dismantling." },
  { label: "Nervous System Configuration", href: "#neurodivergence-as-configuration", description: "Neurodivergence is a difference in how the nervous system is configured. A variation in regulatory rhythm." },
  { label: "System Mismatch", href: "#system-mismatch", description: "The gap between what an environment requires and what a nervous system can sustainably provide." },
  { label: "Masking as Structural Survival", href: "#masking-as-structural-survival", description: "When every environment punishes authentic configuration, masking becomes the only available survival strategy." },
  { label: "Threshold Crossing and Burnout", href: "#threshold-dynamics", description: "The predictable outcome of a system running a design it was not built to run." },
  { label: "Unmasking", href: "#unmasking-is-not-restoration", description: "Unmasking into an environment that remains mismatched fails. The environment must be able to receive what becomes visible." },
  { label: "From Accommodation to Design", href: "#design-principles", description: "Seven core design principles: regulation first, sensory consideration, flexible pacing, and more." },
  { label: "The Structural Argument", href: "#the-structural-argument", description: "Systems designed for one configuration lose access to what other configurations provide." },
  { label: "Bridge to F10", href: "#bridge-to-f10", description: "What happens across generations when adults do this work — individual repair and structural repair simultaneously." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Neurodivergence as Nervous System Variation — When the Environment Is the Mismatch (F9) | TEG-Blue Research",
  description:
    "How neurodivergent nervous systems run the same compass with a different configuration, why system mismatch — not individual deficit — drives masking and burnout, and what variation-inclusive design looks like. Framework F9 of 12.",
  keywords: [
    "neurodivergence",
    "nervous system variation",
    "system mismatch",
    "neurodivergent masking",
    "masking costs",
    "threshold dynamics",
    "neurodivergent burnout",
    "variation-inclusive design",
    "unmasking",
    "awareness capacities",
    "emotional technology",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f9-neurodivergence-variation",
  },
  openGraph: {
    title: "Neurodivergence as Nervous System Variation — F9 Framework | TEG-Blue",
    description:
      "How neurodivergent nervous systems run the same compass with a different configuration, why system mismatch drives masking and burnout, and what variation-inclusive design looks like.",
    url: "https://teg-blue.org/framework/f9-neurodivergence-variation",
    siteName: "TEG-Blue Research",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurodivergence as Nervous System Variation — TEG-Blue F9",
    description:
      "How neurodivergent nervous systems run the same compass with a different configuration. Why system mismatch drives masking and burnout.",
  },
  other: {
    'citation_title': 'Neurodivergence as Nervous System Variation: When the Environment Is the Mismatch',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/03',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F9NeurodivergenceVariationPage() {

  /* ── local helpers ─────────────────────────────────── */


  function KeyStatement({ children }) {
    return (
      <blockquote style={{
        borderLeft: `3px solid ${SPECTRUM.cobalt}`,
        paddingLeft: 16, margin: "20px 0", fontStyle: "italic",
        fontSize: 14, lineHeight: 1.7, color: TEXT.primary,
      }}>
        {children}
      </blockquote>
    );
  }

  function TableRow({ cells }) {
    return (
      <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
        {cells.map((c, i) => (
          <td key={i} style={{
            padding: "10px 14px", fontSize: 13, lineHeight: 1.6,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400, verticalAlign: "top",
          }}>
            {c}
          </td>
        ))}
      </tr>
    );
  }

  function ThreeColRow({ cells }) {
    return (
      <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
        {cells.map((c, i) => (
          <td key={i} style={{
            padding: "10px 14px", fontSize: 13, lineHeight: 1.6,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400, verticalAlign: "top",
          }}>
            {c}
          </td>
        ))}
      </tr>
    );
  }

  function FourColRow({ cells }) {
    return (
      <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
        {cells.map((c, i) => (
          <td key={i} style={{
            padding: "8px 10px", fontSize: 12, lineHeight: 1.5,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400, verticalAlign: "top",
          }}>
            {c}
          </td>
        ))}
      </tr>
    );
  }


  const thStyle = {
    padding: "10px 14px", fontSize: 12, fontWeight: 600,
    color: TEXT.tertiary, textTransform: "uppercase",
    letterSpacing: "0.05em", textAlign: "left",
    borderBottom: `2px solid ${BORDER.default}`,
  };
  const narrowThStyle = {
    padding: "8px 10px", fontSize: 11, fontWeight: 600,
    color: TEXT.tertiary, textTransform: "uppercase",
    letterSpacing: "0.05em", textAlign: "left",
    borderBottom: `2px solid ${BORDER.default}`,
  };

  /* ── data ──────────────────────────────────────────── */

  const faqItems = [
    {
      q: "Is neurodivergence a deficit or disorder?",
      a: "No. F9 frames neurodivergence as a difference in how the nervous system is configured — how it processes information, rhythm, sensory input, attention, social signals, and emotion. The framework rejects diagnostic language that embeds pathology assumptions and uses configuration language instead. A neurodivergent nervous system in a well-matched environment can sit in Connection just as sustainably as any other.",
    },
    {
      q: "What is System Mismatch?",
      a: "System Mismatch is the gap between what an environment requires and what a nervous system can sustainably provide. It relocates the problem from 'the person is disordered' to 'the environment is mismatched.' The same person may function well in one context and struggle in another — the variable is context, not neurology.",
    },
    {
      q: "Why is unmasking alone not sufficient for repair?",
      a: "Unmasking means dropping neurotypical performance; repair means being received in authentic neurological expression. Unmasking into an environment that cannot hold authenticity can increase harm — triggering rejection, job loss, or more rigid masking afterward. Restoration requires an accommodating environment, accurate mirroring, internalized shame repair, grief work, identity reconstruction, and relational renegotiation.",
    },
    {
      q: "How does neurodivergent burnout differ from general burnout?",
      a: "Neurodivergent burnout involves skill regression (previously manageable tasks become impossible), increased sensitivity (lower threshold for all input), extended recovery (weeks to months), masking collapse (the mask drops by depletion), and identity confusion. It results from accumulated masking cost plus chronic mismatch, not overwork alone. Recovery requires environmental change, not just rest.",
    },
    {
      q: "What does variation-inclusive design look like?",
      a: "Rather than treating neurodivergent needs as exceptions requiring special accommodation, variation-inclusive design builds for neurological variation from the start. Seven core principles: regulation first (safety before performance), sensory consideration, flexible pacing, communication clarity, autonomy respect, multiple modalities, and rest integration.",
    },
  ];

  /* ── render ────────────────────────────────────────── */

  return (
    <>
      <SiteHeader />

      <PageLayout
        header={
          <FrameworkHero
              badge="FRAMEWORK F9"
              title="Neurodivergence as Nervous System Variation"
              subtitle="When the Environment Is the Mismatch"
              description="How neurodivergent nervous systems run the same compass with different configurations — and how the gap between what environments require and what a nervous system can sustainably provide produces masking, burnout, and developmental arrest. Maps variation as configuration — different regulatory rhythms running the same instrument. The second framework in the restoration arc (F8–F12)."
              group="The Reversal"
              groupLabel="The Reversal · F8–F12"
              threadLabel="Reverses the Thread"
              threadLine="Builds the original — maps variation as configuration"
              adjacent={{
                prev: { label: "F8 Repairing Awareness", href: "/framework/f8-repairing-awareness" },
                next: { label: "F10 Generational Bridges", href: "/framework/f10-generational-bridges" },
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
              description: "Awareness capacities rebuild through safety, not instruction — the conditions must precede the capacity.",
              href: "/framework/f8-repairing-awareness#safety-before-capacity",
            },
            {
              concept: "Developmental Calibration",
              framework: "F2",
              description: "How the nervous system gets configured through the relational environment — the same mechanism that produces variation.",
              href: "/framework/f2-awareness-calibration#developmental-calibration",
            },
          ]} />

          {/* ── Core Claims ── */}
          <PropositionBox
            title="Core Propositions — F9"
            items={[
              "Neurodivergence is a difference in nervous system configuration — the compass is the same, the configuration is different",
              "System Mismatch — the gap between what an environment requires and what a nervous system can sustainably provide — is the named mechanism that produces masking, burnout, and developmental arrest",
              "Masking has cumulative, compounding costs across energetic, cognitive, emotional, somatic, developmental, and identity domains",
              "Unmasking is not equivalent to restoration — dropping the mask without an accommodating environment can increase harm",
              "Variation-inclusive design is not accommodation but structural intelligence — different configurations see different things, and the collective benefits from that diversity",
            ]}
          />

          {/* ════════════════════════════════════════════════
              FRAMEWORK POSITION
             ════════════════════════════════════════════════ */}

          <section id="framework-position">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>Framework Position</h2>

            <p style={proseStyle}>
              F8 establishes two principles: awareness capacities can be repaired (Part 1), and different configurations make the collective stronger (Part 2). F8 describes a universal pattern — everyone masks, conformity costs, difference is capacity.
            </p>

            <KeyStatement>
              F9 asks: what happens when that pattern becomes structural?
            </KeyStatement>

            <p style={proseStyle}>
              When environments — schools, workplaces, healthcare systems, social norms — are designed around one neurological configuration, the cost of difference is no longer interpersonal. It is architectural. The pace, the sensory environment, the communication norms, the attention demands, the social rules — all built for one nervous system design. Everyone who does not match that design pays a daily, structural, inescapable regulatory cost.
            </p>

            <p style={proseStyle}>
              F9 is not a framework <em>about</em> neurodivergent people. It is a framework about what happens when systems are built for one configuration and nervous systems arrive that work differently. The neurodivergent experience is the most visible, most costly, most structurally entrenched case of the universal pattern F8 describes.
            </p>

            <h3 style={conceptHeadingStyle}>The Regulation Thread — F9's Position</h3>

            <p style={proseStyle}>
              The regulation thread through F1–F7 describes substitutes for regulation that was never built. F8 describes how to build what was missing. F9 adds a critical variable: <strong>what if the environment itself prevents the building?</strong>
            </p>

            <p style={proseStyle}>
              Individual repair (F8) has limited impact when the person returns daily to an environment that requires chronic masking, exceeds their nervous system's sustainable capacity, and treats their authentic configuration as deficient. For neurodivergent people, the regulation thread operates at two levels simultaneously:
            </p>

            <p style={{ ...proseStyle, paddingLeft: 16 }}>
              <strong>1. The internal thread</strong> — the same F1–F7 mechanisms operating in every nervous system<br />
              <strong>2. The structural thread</strong> — environments designed for a different configuration creating chronic mismatch that drives the internal thread harder
            </p>

            <KeyStatement>
              You cannot build what the environment keeps dismantling.
            </KeyStatement>
          </section>

          {/* ════════════════════════════════════════════════
              PART 1 DIVIDER
             ════════════════════════════════════════════════ */}

          <div style={{
            margin: "48px 0 40px", padding: "14px 20px",
            background: hexToRgba(SPECTRUM.cobalt, 0.10),
            borderRadius: 8, border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
          }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: SPECTRUM.cobalt, margin: 0 }}>
              Part 1: Variation, Not Deficit
            </p>
            <p style={{ fontSize: 13, color: TEXT.secondary, margin: "4px 0 0" }}>
              What neurodivergence is, what System Mismatch means, and why the problem is architectural.
            </p>
          </div>

          {/* ════════════════════════════════════════════════
              C1 — NEURODIVERGENCE AS CONFIGURATION
             ════════════════════════════════════════════════ */}

          <section id="neurodivergence-as-configuration">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>Neurodivergence as Nervous System Configuration</h2>

            <p style={proseStyle}>
              Neurodivergence is a difference in how the nervous system is configured — how it processes information, rhythm, sensory input, attention, social signals, and emotion. The framework rejects diagnostic language that embeds pathology assumptions ("disorder," "deficit," "symptom") and uses configuration language: <em>your nervous system works this way.</em>
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Dimension</th>
                    <th style={thStyle}>What Varies</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Attention", "Sustained vs. hyperfocus and diffuse states; variable intensity; interest-driven rather than demand-driven"]} />
                  <TableRow cells={["Sensory processing", "Low or high threshold; filtered vs. unfiltered input; seeking vs. avoiding"]} />
                  <TableRow cells={["Emotional intensity", "Amplitude varying from baseline; processing time longer or shorter; different recovery patterns"]} />
                  <TableRow cells={["Social processing", "Intuitive vs. explicit; implicit vs. systematic analysis; different signaling patterns"]} />
                  <TableRow cells={["Cognitive style", "Linear/sequential vs. associative/parallel/nonlinear; different speeds for different tasks"]} />
                  <TableRow cells={["Motor regulation", "Variable consistency; movement needs; stimming as regulation strategy"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>What Neurodivergence Is Not</h3>

            <p style={proseStyle}>
              Neurodivergence is a <strong>configuration</strong> — a different way the nervous system was built.
            </p>

            <h3 style={conceptHeadingStyle}>Connection to F1</h3>

            <p style={proseStyle}>
              F1 describes how every nervous system orients between safety and threat. Neurodivergent nervous systems run the same instrument — the compass — with a different configuration. The compass still moves between Connection, Protection, Control, and Domination. The modes still function the same way. But the inputs are different (sensory thresholds, processing patterns, attention allocation), and therefore the compass responds differently to the same environment.
            </p>

            <KeyStatement>
              A neurodivergent nervous system in a well-matched environment can sit in Connection just as sustainably as any other. When the compass cannot move, the variable may be the environment.
            </KeyStatement>

            <ExpandableSection title="The Sensory Filtering Mechanism" type="framework">
              <p style={proseStyle}>
                Perception begins at the periphery &mdash; eyes, ears, nose, gut, skin &mdash; all feeding in simultaneously, below conscious awareness. The amygdala fires in 12 milliseconds, before a single thought forms. In neurodivergent nervous systems, the baseline sensitivity of these channels varies &mdash; higher threshold, lower threshold, or differently calibrated. A nervous system with high sensory sensitivity is receiving more data through these channels before any filtering occurs. The compass is the same instrument. The inputs arriving at it are different. This is why the same environment can produce Connection in one nervous system and Protection in another.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                The neurodiversity paradigm (Singer, Walker, Silberman) frames neurodivergence as natural human variation rather than pathology. The Intense World Theory (Markram & Markram) describes heightened perception as a processing difference rather than a dysfunction. Polyvagal Theory (Porges) provides the mechanism: how safety detection shapes regulatory capacity differently across nervous system configurations.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                F9 integrates the neurodiversity paradigm with the four-mode gradient, showing that neurodivergent nervous systems run the same compass with different inputs. This connects what the neurodiversity movement describes (variation) with what Polyvagal Theory explains (how safety and threat are detected) and what F1 provides (a measurement system for regulatory states). The compass is universal; the configuration is variable.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C2 — SYSTEM MISMATCH
             ════════════════════════════════════════════════ */}

          <section id="system-mismatch">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>System Mismatch</h2>

            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>
              What is System Mismatch and how does it affect neurodivergent people?
            </h2>

            <p style={proseStyle}>
              <strong>System Mismatch</strong> is the gap between what an environment requires and what a nervous system can sustainably provide. This is not a metaphor. It is structural:
            </p>

            <p style={{ ...proseStyle, paddingLeft: 16 }}>
              A school that requires sustained seated attention for six hours is designed for one attention configuration. A nervous system with variable, interest-driven attention faces daily mismatch — not because the nervous system is broken, but because the school is designed for a different configuration.
            </p>
            <p style={{ ...proseStyle, paddingLeft: 16 }}>
              A workplace with open-plan offices, fluorescent lighting, and ambient noise is designed for one sensory configuration. A nervous system with high sensory sensitivity faces chronic sensory overload — not because the person is fragile, but because the workspace is designed for a different threshold.
            </p>

            <KeyStatement>
              The fish doesn't know it's in water. The person whose configuration matches the environment doesn't know the environment was designed for them.
            </KeyStatement>

            <h3 style={conceptHeadingStyle}>Relocation of the Problem</h3>

            <p style={proseStyle}>
              System Mismatch relocates the problem from "the person is disordered" to "the environment is mismatched." The same nervous system may function well in one context and struggle in another. The variable is context, not neurology. This is testable: place the same person in an environment designed for their configuration and observe what happens. The "symptoms" often reduce or disappear — not because the person was cured, but because the mismatch was removed.
            </p>

            <h3 style={conceptHeadingStyle}>Structural, Not Interpersonal</h3>

            <p style={proseStyle}>
              System Mismatch is not about individual acceptance. It is about how environments are designed: schools built for sustained attention, workplaces built for neurotypical sensory baselines, social norms built for implicit communication, healthcare systems built for neurotypical presentation, bureaucracies built for sequential processing. These are design decisions, embedded in architecture, policy, and norm. They are invisible to people whose configuration matches the design — because for them, the environment simply feels "normal."
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                The Social Model of Disability (Oliver, Shakespeare) locates disability in the environment rather than the individual. Universal Design (CAST, Rose) argues that systems should be built for variation from the start rather than retrofitted. F9 integrates these with Polyvagal Theory's mechanism: the nervous system's safety detection responds to environmental match or mismatch, not to the person's "disorder."
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                F9 names the specific mechanism — System Mismatch — and connects it to the four-mode gradient. When the environment matches the configuration, the compass can access Connection. When mismatch is chronic, the compass is pushed toward Protection or Control not by internal pathology but by structural demand. This makes the problem measurable and the intervention architectural rather than clinical.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C3 — MASKING AS STRUCTURAL SURVIVAL
             ════════════════════════════════════════════════ */}

          <section id="masking-as-structural-survival">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>Masking as Structural Survival</h2>

            <p style={proseStyle}>
              F8 describes the universal masking pattern: authentic configuration expression leads to environmental punishment, the nervous system learns authenticity is unsafe, a regulatory strategy forms, the mask becomes automatic, and false coherence absorbs it. For neurodivergent people, this pattern operates at structural scale. The punishment is not just interpersonal. It is environmental — built into every institution, every space, every norm. There is no environment to escape to. The masking must be sustained across all contexts, all day, every day.
            </p>

            <h3 style={conceptHeadingStyle}>What Neurodivergent Masking Requires</h3>

            <p style={proseStyle}>
              The mask has an additional layer beyond what F8 describes. It requires hiding not just vulnerability or social performance, but <strong>the rhythm of the nervous system itself</strong>: suppressing stims (the body's own regulation strategy), forcing eye contact (overriding the system's authentic processing), moderating expression (performing neurotypical emotional display), performing social fluency (running explicit analysis to mimic implicit processing), maintaining pace (forcing the system to process at a speed it was not built for), and filtering display (hiding sensory responses the environment treats as dramatic or weak).
            </p>

            <h3 style={conceptHeadingStyle}>Cumulative and Compounding Costs</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Domain</th>
                    <th style={thStyle}>What Masking Costs</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Energetic", "Chronic fatigue; extended recovery time needed; energy unavailable for anything else"]} />
                  <TableRow cells={["Cognitive", "Processing capacity consumed by performance; decision fatigue; reduced capacity for actual work"]} />
                  <TableRow cells={["Emotional", "Disconnection from authentic feeling; cannot tell what is real vs. performed; Emotional Resonance (ER) collapses under chronic load"]} />
                  <TableRow cells={["Somatic", "Chronic tension; pain; stress-related illness; the body carrying what the mask suppresses"]} />
                  <TableRow cells={["Developmental", "Capacities that are suppressed do not develop. Masking does not just hide — it prevents growth. The three awareness capacities (F8) cannot develop while being chronically overridden"]} />
                  <TableRow cells={["Identity", "False coherence absorbs the mask: 'I'm just bad at this.' 'Something is wrong with me.' 'If I were better, this wouldn't be so hard.'"]} />
                </tbody>
              </table>
            </div>

            <ExpandableSection title="Masking Prevents Activation Cycle Completion" type="framework">
              <p style={proseStyle}>
                Beyond regulatory exhaustion, masking has a specific biological consequence: it prevents the activation cycle from completing. Every suppressed stim, every forced expression, every overridden sensory response is an activation that was started and not allowed to finish. The expression was the body&rsquo;s attempt to complete the cycle &mdash; and masking stopped it mid-sequence. Open cycles accumulate. The person starts each new day from a progressively more activated baseline &mdash; less room to handle new stress, lower threshold for crossing.
              </p>
            </ExpandableSection>

            <h3 style={conceptHeadingStyle}>Connection to F3</h3>

            <p style={proseStyle}>
              F3's core mechanism — cognition tells the emotional system "you're not needed" — operates with particular intensity in neurodivergent masking. The false coherence is specific: <strong>"My authentic rhythm is wrong. My nervous system is defective. Safety requires performing neurotypicality."</strong> It is a regulatory structure — challenging it feels like regulatory collapse (F3 C4, cognitive dissonance as regulatory stress).
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Masking research (Price, Rose, Mate) documents the costs of camouflaging across autistic and ADHD populations. Trauma research (van der Kolk, Herman, Perry) shows how chronic threat calibrates the nervous system into protective states. F9 integrates these: structural masking is chronic threat at environmental scale, producing the same regulatory consequences that individual threat produces — but without escape.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                F9 connects F8's universal masking pattern to structural scale, showing that neurodivergent masking is not a separate phenomenon but the same mechanism operating under conditions of no escape. The six-domain cost model provides a measurable framework for what masking research describes qualitatively, and the connection to F3 explains why "just stop masking" fails: the false coherence is a regulatory structure, not a belief.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C4 — THRESHOLD DYNAMICS
             ════════════════════════════════════════════════ */}

          <section id="threshold-dynamics">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>Threshold Dynamics</h2>

            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>
              What causes neurodivergent burnout and how can it be predicted?
            </h2>

            <p style={proseStyle}>
              Every nervous system has a threshold — the point at which regulatory capacity is exceeded. F9 names the equation:
            </p>

            <div style={{
              padding: "16px 20px", margin: "16px 0 24px",
              background: hexToRgba(SPECTRUM.cobalt, 0.08),
              borderRadius: 8, border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
              fontFamily: "monospace", fontSize: 14, color: TEXT.primary,
              textAlign: "center",
            }}>
              Threshold = Baseline capacity − (Masking cost + Environmental demand + Accumulated stress)
            </div>

            <p style={proseStyle}>
              For a nervous system facing chronic mismatch and sustained masking, the threshold is under constant pressure. Crossing is not an anomaly — it is the predictable outcome when the equation turns negative.
            </p>

            <h3 style={conceptHeadingStyle}>What Threshold Crossing Looks Like</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Response</th>
                    <th style={thStyle}>Presentation</th>
                    <th style={thStyle}>Internal Experience</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["Meltdown", "Emotional explosion — tears, rage, panic", "Overwhelm; loss of regulatory control; shame afterward"]} />
                  <ThreeColRow cells={["Shutdown", "Withdrawal — silence, immobility, absence", "Numbness; disconnection; the system pulling the emergency brake"]} />
                  <ThreeColRow cells={["Mixed", "Oscillation between activation and withdrawal", "Dysregulation across all systems simultaneously"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              These responses are frequently misinterpreted — as manipulation, overreaction, drama, laziness, or attention-seeking. They are regulatory collapse following prolonged strain. The same responses that any nervous system would produce if run at unsustainable load for long enough.
            </p>

            <h3 style={conceptHeadingStyle}>Neurodivergent Burnout</h3>

            <p style={proseStyle}>
              Distinct from general burnout. Not exhaustion that recovery addresses. A shift in the nervous system's baseline: <strong>skill regression</strong> (previously manageable tasks become impossible — not unwillingness but incapacity), <strong>increased sensitivity</strong> (lower threshold for sensory, emotional, and social input), <strong>extended recovery</strong> (weeks to months, not days), <strong>masking collapse</strong> (inability to maintain the performance — the mask drops not by choice but by depletion), and <strong>identity confusion</strong> ("Is this my real capacity? Was I always this incapable? Or was the previous performance the real me?").
            </p>

            <h3 style={conceptHeadingStyle}>The Chronic Threshold State</h3>

            <p style={proseStyle}>
              When the system is persistently close to threshold — chronic Protection or chronic Control — the threshold itself lowers over time. Accumulated stress, sustained masking, and compounding environmental demand create a descending spiral. Recovery requires environmental change, not just individual intervention. Treating burnout as an individual problem (self-care, rest, resilience training) fails because the source is structural. Sustainable recovery requires lowering demands, reducing masking requirements, and environmental redesign.
            </p>

            <ExpandableSection title="Chronic Flatness as Masking Endpoint" type="framework">
              <p style={proseStyle}>
                When masking is sustained long enough, a specific configuration can emerge: Chronic Flatness. All three awareness capacities sit at baseline minimum &mdash; not as acute shutdown (which is temporary) but as the operating state. The biology is still generating activation, but the channels for accessing, expressing, and using that activation are at minimum or offline. Regulation signature: external or none. This is the endpoint of the descending spiral &mdash; not threshold crossing as crisis, but threshold crossing as new operating state.
              </p>
            </ExpandableSection>

            <KeyStatement>
              You cannot rest your way out of an environment that requires you to run a system your nervous system was not built to run.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Masking research (Price, Rose) documents the link between chronic masking and autistic burnout. Allostatic load theory (McEwen) provides the physiological mechanism for cumulative stress effects. F9 integrates these with the four-mode gradient: threshold crossing is the compass being pushed past its sustainable range by chronic mismatch, and burnout is the allostatic consequence of environments that hold the compass in Protection indefinitely.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                The threshold equation provides a testable, predictive model: when the right side exceeds the left, crossing is predicted. The chronic threshold state concept explains why burnout worsens over time even without new stressors — the equation becomes more negative as baseline capacity erodes. And the treatment principle follows directly: if the source is structural, the intervention must be structural.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              PART 2 DIVIDER
             ════════════════════════════════════════════════ */}

          <div style={{
            margin: "48px 0 40px", padding: "14px 20px",
            background: hexToRgba(SPECTRUM.cobalt, 0.10),
            borderRadius: 8, border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
          }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: SPECTRUM.cobalt, margin: 0 }}>
              Part 2: Repair in Context
            </p>
            <p style={{ fontSize: 13, color: TEXT.secondary, margin: "4px 0 0" }}>
              What repair requires for neurodivergent people, why unmasking without safety fails, and what genuine inclusion looks like.
            </p>
          </div>

          {/* ════════════════════════════════════════════════
              C5 — UNMASKING IS NOT RESTORATION
             ════════════════════════════════════════════════ */}

          <section id="unmasking-is-not-restoration">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>Unmasking Is Not Restoration</h2>

            <p style={proseStyle}>
              Growing awareness of masking's harm has created calls for unmasking. This is correct but incomplete. <strong>Unmasking</strong> means dropping the neurotypical performance. <strong>Repair</strong> means being received in authentic neurological expression. These are not equivalent. Unmasking into an environment that cannot hold authenticity can increase harm.
            </p>

            <h3 style={conceptHeadingStyle}>What Repair Actually Requires</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Requirement</th>
                    <th style={thStyle}>What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Accommodating environment", "Settings that do not require neurotypical performance for safety, belonging, or functioning"]} />
                  <TableRow cells={["Accurate mirroring", "Being seen as a person with a different configuration — not as defective, broken, or special"]} />
                  <TableRow cells={["Internalized shame repair", "Undoing the false coherence that says 'my authentic rhythm is wrong' — F3 repair at the deepest level"]} />
                  <TableRow cells={["Grief work", "Mourning what was lost to masking and mismatch — developmental time, authentic relationships, accurate self-understanding, embodied experience"]} />
                  <TableRow cells={["Identity reconstruction", "Discovering who one is without the mask — F8's repair process applied to the specific question of neurodivergent identity"]} />
                  <TableRow cells={["Relational renegotiation", "Updating relationships built on the masked presentation — some deepen, some cannot survive the change"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>The Clinical Danger of Premature Unmasking</h3>

            <p style={proseStyle}>
              Encouraging unmasking without environmental support can trigger rejection experiences that confirm the original assessment (authenticity is dangerous), cause job loss, relationship rupture, or social exclusion, lead to more rigid masking after the failed attempt (the nervous system now has fresh evidence that the mask is necessary), and retraumatize — the person risks again what they risked as a child and gets the same result.
            </p>

            <h3 style={conceptHeadingStyle}>The Sequence Matters</h3>

            <p style={proseStyle}>
              1. <strong>Assess available environments</strong> — Does the person have any context that can hold authentic expression? If not, build that first. 2. <strong>Build understanding of configuration</strong> — Does the person know who they are without the mask? This is F8 Part 1 applied to neurodivergent self-knowledge. 3. <strong>Develop skills for communicating needs</strong> — Can the person advocate for accommodation? 4. <strong>Create support network</strong> — Are there people who will welcome the unmasked self?
            </p>

            <KeyStatement>
              Unmasking into a vacuum fails. The environment must be ready before the mask comes off.
            </KeyStatement>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                F9 distinguishes unmasking from restoration and provides a sequenced model: assess environment, build self-understanding, develop communication capacity, create support, then unmask. This prevents the clinical error of encouraging authenticity into environments that will punish it — the same error F8 identifies for repair generally, applied to the specific structural conditions neurodivergent people face.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C6 — AWARENESS CAPACITIES IN NEURODIVERGENT EXPERIENCE
             ════════════════════════════════════════════════ */}

          <section id="awareness-capacities-in-neurodivergent-experience">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>Awareness Capacities in Neurodivergent Experience</h2>

            <p style={proseStyle}>
              A common clinical error: assuming neurodivergent people lack awareness capacities. In reality, the capacities are present but configured differently.
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Capacity</th>
                    <th style={narrowThStyle}>Neurotypical Norm</th>
                    <th style={narrowThStyle}>Common ND Configuration</th>
                    <th style={narrowThStyle}>What Gets Misread</th>
                  </tr>
                </thead>
                <tbody>
                  <FourColRow cells={[
                    "Reading Emotions (RE)",
                    "Implicit, automatic, moderate sensitivity",
                    "May be hyper-accurate (reads too much), systematically processed (explicit analysis vs. intuition), or differently channeled (reads patterns, not faces)",
                    "\"Lacks empathy\" — when Reading Emotions (RE) is actually very high but expressed differently",
                  ]} />
                  <FourColRow cells={[
                    "Emotional Resonance (ER)",
                    "Moderate intensity, socially calibrated display",
                    "May be intense (higher amplitude, longer processing), delayed (response arrives after the social moment has passed), or internally deep but externally flat",
                    "\"Doesn't care\" — when Emotional Resonance (ER) is actually flooded but not displayed",
                  ]} />
                  <FourColRow cells={[
                    "Self-Emotional Awareness (SEA)",
                    "Develops through standard co-regulation",
                    "May be highly developed (intense interoception, detailed self-knowledge) or significantly disrupted by chronic masking (cannot distinguish real from performed)",
                    "\"Not self-aware\" — when Self-Emotional Awareness (SEA) may be acute but expressed in non-standard language",
                  ]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>Masking Distorts the Capacities</h3>

            <p style={proseStyle}>
              The greatest damage to neurodivergent awareness capacities comes not from the configuration itself but from chronic masking. <strong>Reading Emotions (RE) gets misdirected</strong> — used to monitor social danger and maintain the mask rather than to connect. <strong>Emotional Resonance (ER) gets suppressed</strong> — because emotional intensity that does not match neurotypical norms gets punished; over time, the dampening becomes automatic. <strong>Self-Emotional Awareness (SEA) gets confused</strong> — the person cannot distinguish their authentic internal state from the performed state; after years of masking, the question becomes genuinely unanswerable without support.
            </p>

            <h3 style={conceptHeadingStyle}>Repair Requires Rhythm Authenticity</h3>

            <p style={proseStyle}>
              F8's repair pathways apply — but with a critical addition. For neurodivergent people, awareness capacity repair requires reconnection to <strong>neurodivergent rhythm</strong>. Not "learning to regulate like a neurotypical person with extra steps." Returning to the processing speed, sensory experience, emotional intensity, and attention patterns that are the person's authentic configuration.
            </p>

            <KeyStatement>
              You cannot develop your capacities while suppressing the system those capacities run on.
            </KeyStatement>

            <ExpandableSection title="Developmental Absence and Restoration Unavailability" type="framework">
              <p style={proseStyle}>
                F8&rsquo;s distinction between chronic suppression and developmental absence applies with particular force here. If the environment never provided the conditions for a capacity to develop &mdash; because the person&rsquo;s authentic rhythm was masked from childhood &mdash; the capacity was not suppressed. It was never built. Recovery means building, not unblocking.
              </p>
              <p style={proseStyle}>
                Chronic masking also forces a chronic mode &mdash; and the chronic mode blocks the specific restoration type that mode requires. Chronic Connection from masking needs genuine relational contact, but the connection being produced is performed, not real. Chronic Protection from masking needs safety long enough for the alarm to stand down, but the environment keeps requiring the very performance that sustains the alarm. Chronic Control from masking needs Control Restoration (releasing the cognitive override), but the mask IS the override. The structural mismatch does not just cost energy. It blocks the biological return pathway.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Attachment neurobiology (Bowlby, Schore) shows that safety shapes regulatory development. Mentalization theory (Fonagy, Target) explains how reflective capacity develops in conditions of emotional safety. F9 integrates these with F2's core insight (awareness teaches awareness): when the environment chronically punishes the nervous system's authentic processing, the awareness capacities that depend on that processing cannot develop.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                F9 applies F2's three-capacity model to neurodivergent experience, showing that the capacities are not absent but configured differently — and that the primary damage comes from masking rather than from the configuration itself. The principle of rhythm authenticity connects F8's repair pathways to the specific developmental requirement that the system those capacities run on must be operating authentically for repair to proceed.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C7 — DESIGN PRINCIPLES
             ════════════════════════════════════════════════ */}

          <section id="design-principles">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>Design Principles for Variation-Inclusive Systems</h2>

            <h3 style={conceptHeadingStyle}>From Accommodation to Design</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Accommodation Model</th>
                    <th style={thStyle}>Design Model</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Retrofit after failure", "Build for variation from the start"]} />
                  <TableRow cells={["Exception process required (stigma attached)", "Standard options available (variation normalized)"]} />
                  <TableRow cells={["Individual burden to request", "System responsibility to provide"]} />
                  <TableRow cells={["Reactive — responds to identified need", "Proactive — anticipates variation"]} />
                  <TableRow cells={["\"What special thing does this person need?\"", "\"What range of configurations will use this system?\""]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              The shift from accommodation to design is the shift from F4 thinking (one correct way, exceptions managed) to F8 Part 2 thinking (variation is expected, design includes it).
            </p>

            <h3 style={conceptHeadingStyle}>Core Design Principles</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Principle</th>
                    <th style={narrowThStyle}>What It Means</th>
                    <th style={narrowThStyle}>Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["Regulation First", "Environmental safety before performance demands", "When the environment supports regulation, the compass can access Connection. When it demands performance before safety, it pushes toward Protection or Control"]} />
                  <ThreeColRow cells={["Sensory Consideration", "Lighting, sound, space, temperature designed for variable sensitivity", "Removes chronic sensory mismatch — regulatory reserves are not consumed by environmental overload"]} />
                  <ThreeColRow cells={["Flexible Pacing", "Multiple timeline options; intensity variation allowed; interest-driven engagement accommodated", "Matches work to the nervous system's actual processing rhythm, not an arbitrary pace"]} />
                  <ThreeColRow cells={["Communication Clarity", "Explicit expectations; reduced hidden curriculum; say what is meant", "Removes the guessing that consumes processing capacity"]} />
                  <ThreeColRow cells={["Autonomy Respect", "Self-determined rhythms within broad parameters", "Respects that the person with the nervous system knows what that system needs"]} />
                  <ThreeColRow cells={["Multiple Modalities", "Various ways to engage, learn, contribute", "Different configurations engage differently — requiring one modality excludes every configuration that processes through a different one"]} />
                  <ThreeColRow cells={["Rest Integration", "Recovery built into structure, not punished", "When rest is designed in, threshold crossing is prevented rather than treated"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>Institutional Application</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Setting</th>
                    <th style={thStyle}>Design Changes</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Schools", "Movement options; sensory breaks; multiple learning modes; explicit instruction; interest-following alongside curriculum; pacing flexibility"]} />
                  <TableRow cells={["Workplaces", "Flexible scheduling; quiet spaces; written communication option; outcome focus over process control; meeting alternatives; sensory-friendly environments"]} />
                  <TableRow cells={["Healthcare", "Extended appointments; sensory-friendly environments; clear communication; recognition of atypical presentation; configuration-informed assessment"]} />
                  <TableRow cells={["Social Services", "Reduced bureaucratic complexity; multiple contact modes; accommodation by default rather than by request"]} />
                </tbody>
              </table>
            </div>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Universal Design for Learning (CAST, Rose) provides the educational framework for building systems that work for variation. The Social Model of Disability (Oliver, Shakespeare) provides the theoretical basis for locating the problem in the environment rather than the individual. F9 integrates these with the four-mode gradient: the seven design principles are specifications for environments that support the compass in accessing Connection rather than forcing it into Protection.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                F9 translates the universal design literature into seven testable principles grounded in nervous system regulation. Each principle can be evaluated by its effect on the compass: does this design feature make it easier or harder for a nervous system with this configuration to access Connection? This provides a measurable standard for genuine inclusion — one that goes beyond compliance to design.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C8 — THE STRUCTURAL ARGUMENT
             ════════════════════════════════════════════════ */}

          <section id="the-structural-argument">
            <h2 style={sectionHeadingStyle(SPECTRUM.blue)}>The Structural Argument</h2>

            <p style={proseStyle}>
              F9 is not only about neurodivergent wellbeing. It is about collective intelligence — F8's argument at institutional scale. When systems are designed for one configuration, they lose access to what other configurations provide: the pattern-seeing that nonlinear processing offers, the precision that detail-oriented processing provides, the depth that slow processing generates, the early-warning that sensory sensitivity detects. All excluded by design.
            </p>

            <p style={proseStyle}>
              They produce avoidable suffering — burnout, threshold crossing, developmental arrest, identity confusion — all predictable outcomes of chronic mismatch, all preventable through design. And they perpetuate the regulation thread: environments that demand masking create the same conditions F2 describes (authentic expression punished, false coherence built, capacities suppressed). Institutional design that excludes variation is F4 (rules regulate) applied at system level.
            </p>

            <h3 style={conceptHeadingStyle}>The False Economy</h3>

            <p style={proseStyle}>
              Systems designed for one configuration appear efficient — one process, one standard, one pace. This efficiency is false. It excludes the contributions that different configurations would make, it generates avoidable healthcare, disability, and turnover costs, it produces compliant surfaces over genuine capacity, and it makes the system fragile through shared blind spots.
            </p>

            <KeyStatement>
              Genuine inclusion is not charity. It is structural intelligence.
            </KeyStatement>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={proseStyle}>
                F9 connects F8's collective intelligence argument to institutional design, showing that variation-exclusion is not just an ethical failure but a structural intelligence failure. The false economy analysis provides a cost-benefit framework that goes beyond accommodation compliance to genuine design optimization — building systems that are more capable because they include the full range of human nervous system configurations.
              </p>
            </ExpandableSection>
          </section>

                    {/* ─── BRIDGE ────────────────────────────────── */}
          <BridgeSection
            color={SPECTRUM.blue}
            established="F9 established that variation is configuration — different nervous systems running the same architecture with different settings, not deficits requiring correction."
            question="When an adult begins to process what they carry, what changes for the next generation? F10 maps the intergenerational chain — how what the adult processes changes what transmits."
            nextFramework="F10"
            nextTitle="What the Adult Processes, the Child Does Not Inherit"
            nextHref="/framework/f10-generational-bridges"
          />

          {/* ─── CONNECTIONS MAP ────────────────────────── */}
          <ConnectionsMap
            color={SPECTRUM.blue}
            connections={[
              { id: "F8", href: "/framework/f8-repairing-awareness", description: "F8 describes how awareness rebuilds. F9 shows that the rebuilt awareness meets different configurations — not one correct version." },
              { id: "F2", href: "/framework/f2-awareness-calibration", description: "F2 describes developmental calibration. F9 maps what happens when the calibrating environment was designed for a different nervous system architecture." },
              { id: "M2", href: "/model/m2-nervous-system-states", description: "M2 maps the four states. F9 shows the same gradient operating with different regulatory rhythms and sensory profiles." },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ──────────────────────── */}
          <NavSection
            color={SPECTRUM.blue}
            items={[
              { label: "Continue to F10 — what changes across generations", href: "/framework/f10-generational-bridges", linkText: "F10: What the Adult Processes →" },
              { label: "See how awareness rebuilds", href: "/framework/f8-repairing-awareness", linkText: "F8: Awareness Rebuilds Through Safety →" },
              { label: "Explore all 12 frameworks", href: "/frameworks-map", linkText: "Framework Map →" },
              { label: "Experience the tools", href: "https://teg-blue.com/emotional-tools", linkText: "Emotional Tools (teg-blue.com) →", external: true },
            ]}
          />
        </article>

      </PageLayout>

      <SiteFooter />

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            headline: "Neurodivergence as Nervous System Variation — When the Environment Is the Mismatch",
            description: metadata.description,
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
            url: "https://teg-blue.org/framework/f9-neurodivergence-variation",
            datePublished: "2026-03-04",
            dateModified: "2026-03-04",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue 12-Framework Architecture",
              url: "https://teg-blue.org/frameworks-map",
            },
            keywords: metadata.keywords,
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "https://teg-blue.org" },
              { name: "12 Frameworks", url: "https://teg-blue.org/frameworks-map" },
              { name: "F9 — Neurodivergence as Nervous System Variation", url: "https://teg-blue.org/framework/f9-neurodivergence-variation" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFAQJsonLd(
              faqItems.map((f) => ({ question: f.q, answer: f.a }))
            )
          ),
        }}
      />
      {/* ─── JSON-LD: Speakable ──────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Neurodivergence as Nervous System Variation (F9) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f9-neurodivergence-variation",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </>
  );
}

const tableWrapStyle = { overflowX: "auto", marginBottom: 16 };
