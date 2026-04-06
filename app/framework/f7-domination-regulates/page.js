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
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F7 makes about how defence becomes domination." },
  { label: "How Reinforcement Builds the Pathway", href: "#reinforcement", description: "What produces relief gets repeated. What gets repeated becomes default. The pathway follows reinforcement, not personality." },
  { label: "When Defence Becomes Strategy", href: "#transition", description: "The critical shift — repair decreasing, control increasing, tactics replacing vulnerability." },
  { label: "Five Stages from Fear to Power Preservation", href: "#five-stages", description: "Each stage identifiable, each interruptible — with decreasing accessibility as escalation progresses." },
  { label: "The Power-Interoception Inverse", href: "#power-interoception", description: "As external power increases, interoceptive access decreases — power replaces the need for it." },
  { label: "How Awareness Capacities Diverge", href: "#capacity-divergence", description: "RE redirects, ER collapses, SEA was never built — and why the brake is structurally absent." },
  { label: "Escalation Without a Stopping Point", href: "#escalation-logic", description: "Addiction logic: subjugation builds tolerance. No amount of domination completes biological restoration." },
  { label: "Institutions That Reproduce the Configuration", href: "#institutional-reproduction", description: "How institutions select for, reward, and reproduce the configuration that cannot feel impact." },
  { label: "The Complete Arc", href: "#complete-arc", description: "Seven restoration substitutes at escalating scale and escalating cost." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Bridge to F8", href: "#bridge", description: "The maximum cost — and the beginning of the return." },
  { label: "Connections Map", href: "#connections", description: "How F7 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Domination Regulates (F7) | TEG-Blue Research",
  description:
    "How defence becomes strategy becomes domination — reinforcement-driven escalation, the power-interoception inverse, three-capacity divergence, and why the mechanism that would stop the escalation is absent. Framework F7 of the TEG-Blue 12-framework system.",
  keywords: [
    "domination regulates",
    "nervous system escalation",
    "power and interoception",
    "empathy collapse",
    "coercive control",
    "institutional domination",
    "restoration substitute",
    "narcissistic escalation",
    "reinforcement pathway",
    "vmPFC suppression",
    "regulatory escalation",
    "collective arc",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f7-domination-regulates",
  },
  openGraph: {
    title: "Domination Regulates — F7 Framework | TEG-Blue",
    description:
      "How defence becomes strategy becomes domination — the final framework in the collective arc. Framework F7 of 12.",
    url: "https://teg-blue.org/framework/f7-domination-regulates",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domination Regulates — TEG-Blue F7",
    description:
      "The final substitute at maximum cost — how reinforcement builds the escalation pathway, and why the brake is structurally absent.",
  },
  other: {
    'citation_title': 'Domination Regulates',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F7DominationRegulatesPage() {
  const accent = SPECTRUM.cobalt;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f7-domination-regulates" />

      <PageLayout
        header={
          <FrameworkHero
            badge="FRAMEWORK F7"
            title="Domination Regulates"
            subtitle="How Defence Becomes Strategy Becomes Domination"
            description="When the nervous system cannot complete biological restoration and control reliably reduces activation, the system adopts control as its primary regulation strategy. Domination is built through reinforcement: what produces physiological relief gets repeated, what gets repeated gets stronger, what gets stronger becomes default. F7 maps this escalation pathway — how defense hardens into strategy, strategy into entitlement, entitlement into domination — and why the mechanism that would stop it is structurally absent."
            group="Collective"
            groupLabel="Collective Arc · F4–F7"
            threadLine="Domination regulates — direct control of others as restoration substitute. Scale: power systems. Cost: everything"
            informsModels={[
              { label: "M3", href: "/model/m3-regulation-capacities" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
            ]}
            adjacent={{
              prev: { label: "F6 Bias Regulates", href: "/framework/f6-bias-regulates" },
              next: { label: "F8 Awareness Rebuilds Through Safety", href: "/framework/f8-repairing-awareness" },
            }}
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>

          {/* ─── PREREQUISITES ──────────────────────────── */}
          <PrerequisitesBlock items={[
            {
              concept: "External Regulation",
              framework: "F3",
              description: "The nervous system recruiting others to perform the regulatory function — fusion, distance, management, or subjugation depending on the chronic state.",
              href: "/framework/f3-false-coherence#restoration-substitutes",
            },
            {
              concept: "Three Awareness Capacities",
              framework: "M4",
              description: "RE (reads others — CLS capacity), ER (resonates with others — ESS capacity), SEA (perceives own states — the bridge). Different substrates, different degradation patterns under chronic activation.",
              href: "/model/m4-awareness-capacities",
            },
            {
              concept: "Relational Substitute Escalation",
              framework: "M3",
              description: "The mechanism by which the nervous system requires progressively stronger neurochemical events to produce the same regulatory shift — tolerance building without an endpoint.",
              href: "/model/m3-regulation-capacities",
            },
          ]} />

          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Domination",
                commonUnderstanding: "A personality type — some people are just controlling, abusive, or power-hungry by nature.",
                definition: "A reinforcement-driven pathway. When control reliably reduces activation — when managing others' compliance settles the cortisol — the nervous system adopts control as its primary regulation strategy. If the strategy is socially rewarded and accountability is absent, it escalates. The pathway follows reinforcement, not personality.",
              },
              {
                title: "Lack of empathy",
                commonUnderstanding: "A single deficit — the person can't feel for others, full stop.",
                definition: "Three distinct processes diverging under escalation. RE (reading others) does not collapse — it redirects from understanding to leverage and sharpens as stakes increase. ER (resonating with others) collapses — the body no longer feels what others feel. SEA (perceiving one's own states) was never built — the person has no internal signal that anything is wrong.",
              },
              {
                title: "Strong leadership",
                commonUnderstanding: "Decisive action, tough decisions, not letting emotions get in the way — what organisations need at the top.",
                definition: "A description that can apply to genuine state flexibility — or to the configuration that produces the most control with the least felt impact: sharp RE, absent ER, absent SEA. The same words describe two fundamentally different nervous system architectures.",
              },
            ]}
          />

          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  Domination is built through reinforcement — what produces physiological relief gets repeated, what gets repeated becomes default — the pathway follows reinforcement, not personality
                </li>
                <li style={propositionItemStyle}>
                  The critical transition is from defence to strategy — from reacting to the environment to managing the environment, recognisable through repair decreasing and control increasing
                </li>
                <li style={propositionItemStyle}>
                  Five stages from fear to power preservation — each identifiable, each interruptible, with decreasing accessibility as escalation progresses
                </li>
                <li style={propositionItemStyle}>
                  As external power increases, interoceptive access decreases — power replaces the need for it, and access to power is itself a restoration substitute
                </li>
                <li style={propositionItemStyle}>
                  RE redirects, ER collapses, SEA was never built — the configuration that produces the most harm with the least visibility, and the configuration that reads as competence to the systems that select for it
                </li>
                <li style={propositionItemStyle}>
                  The escalation has no natural brake — the harm generates signals (shame, guilt, remorse) that would produce course correction, but the configuration that produces domination cannot process them
                </li>
                <li style={propositionItemStyle}>
                  Institutions select for, reward, and reproduce the configuration that cannot feel impact — suppressing the interoceptive substrate across the population they govern
                </li>
                <li style={propositionItemStyle}>
                  Causality and accountability coexist — the mechanism is traceable and the harm is real, both are true simultaneously
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: WHAT DOMINATION IS ─────────────── */}
          <PartDivider label="PART 1" title="What Domination Is" color={accent} />

          {/* Concept 0: Reinforcement */}
          <section
            id="reinforcement"
            aria-labelledby="heading-reinforcement"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-reinforcement" style={sectionHeadingStyle(accent)}>
              How Reinforcement Builds the Escalation Pathway
            </h2>

            <p style={proseStyle}>
              Under sustained threat, the nervous system seeks to reduce vulnerability. When the return path (<Link href="/framework/f1-emotional-gradient#designed-process" style={linkStyle}>F1</Link>) was never learned and the system is already locked in threat-based states (<Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link>), it looks for whatever stabiliser works. In some environments, the stabiliser that produces the fastest relief is control — managing others' behaviour to manage one's own activation.
            </p>
            <p style={proseStyle}>
              When control consistently produces physiological settling — when cortisol drops after others comply, when a brief period of stability arrives after submission — the nervous system encodes the pattern. What works gets repeated. What gets repeated gets refined. What gets refined becomes default. The same learning mechanism that teaches any organism to repeat rewarded behaviour teaches this: control works.
            </p>
            <p style={proseStyle}>
              If the strategy is socially rewarded — if the person's environment treats control as competence, leadership, or strength — and if accountability is absent — if the consequences of escalation never arrive — the reinforcement continues without interruption. Defence hardens into strategy. Strategy hardens into entitlement. Entitlement hardens into domination. The pathway is stages, not a switch. It follows reinforcement, not destiny. Each stage is interruptible — with decreasing accessibility as escalation progresses.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — reinforcement pathway from defence through domination */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Skinner (1953) — behaviour shaped by reinforcement: rewarded behaviour strengthens and repeats. Kohut (1977) — narcissistic regulation as escalation of self-protection. Porges (2011) — threat physiology promoting control-seeking through sympathetic activation and ventral vagal withdrawal. Bancroft (2002) — empirical patterns of escalation in controlling behaviour.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The explicit articulation of domination as a reinforcement-driven pathway — built through the same learning mechanism that shapes all behaviour, traceable through the regulation thread as the final substitute. The same mechanism, the same nervous system, the same thread as false coherence and rule absorption and worth-seeking — further along the gradient, at maximum cost. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 1: Defence Becomes Strategy */}
          <section
            id="transition"
            aria-labelledby="heading-transition"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-transition" style={sectionHeadingStyle(accent)}>
              When Defence Becomes Strategy
            </h2>

            <p style={proseStyle}>
              Before the transition, the person is in Threat & Defence (<Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link>). Cortisol is elevated, the amygdala is sensitised, the perceptual field has narrowed. The responses — withdrawal, reactivity, vigilance, appeasement — are state-based: the nervous system is activated, the person is reacting, and when the activation passes, the response can pass with it. Repair is still possible — because the person still experiences their responses as responses.
            </p>
            <p style={proseStyle}>
              At the transition, the internal logic shifts. The CLS is recruited into threat organisation — anticipation, planning, management. The person moves from reacting to the environment to managing the environment. From "I am trying to feel safe" to "I will make you behave so I can feel safe." This is the transition from Threat & Defence to Strategy & Management.
            </p>
            <p style={proseStyle}>
              Tactics begin replacing repair. Apologies begin serving image rather than relationship. Warmth begins serving management rather than connection. Observable signals: repair disappears while control increases. Others' reality is reframed as the problem. Accountability is replaced by performance. Confusion is used to destabilise. Boundaries trigger escalation. Relationships are managed rather than respected. Fear becomes a stabiliser — others modify their behaviour to avoid the person's reactions.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — transition from state-based defence to strategic control */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Bancroft (2002) — patterns of intentionality in controlling behaviour. Herman (1992) — coercive control patterns. Argyris & Schön (1974) — defensive routines: how organisations and individuals systematise self-protection.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The transition positioned within the nervous system gradient as the shift from Threat & Defence (state-based, ESS-driven) to Strategy & Management (strategy-based, CLS-recruited). The observable pattern — repair decreasing, control increasing — provides recognisable markers for early identification. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 3: Five Stages */}
          <section
            id="five-stages"
            aria-labelledby="heading-five-stages"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-five-stages" style={sectionHeadingStyle(accent)}>
              Five Stages from Fear to Power Preservation
            </h2>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Stage</th>
                    <th style={thStyle}>Internal Logic</th>
                    <th style={thStyle}>Interruption</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["1. Fear Activation", "\"If I can't control it, I lose safety.\" State-based. The person still recognises their state as distress.", "Most accessible: co-regulation, relational safety, repair."]} />
                  <TableRow cells={["2. Strategy Formation", "\"Control creates stability.\" The CLS recruited into managing others. Transition markers appear.", "Direct naming, loss of reinforcement, firm relational accountability."]} />
                  <TableRow cells={["3. Entitlement Loop", "\"I'm safer when others obey.\" Compliance expected, blame reversed, false coherence solidified around the control position.", "Consequences from outside the managed system. Internal motivation for change is low."]} />
                  <TableRow cells={["4. Empathy Collapse", "\"Their pain is my threat.\" Others' suffering minimised or justified. ER functionally offline. RE remains sharp for leverage.", "External containment. Empathy appeals fail — the capacity they target is offline. Protection of others takes precedence."]} />
                  <TableRow cells={["5. Power Preservation", "\"I can't survive without control.\" Identity fused with dominance. Connection feels like dissolution. Vulnerability experienced as annihilation.", "Protection — protecting others from the harm the system produces."]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Each stage is interruptible — but the cost and difficulty increase as the pathway progresses. Earlier intervention is most accessible. Late intervention requires structural containment.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — five stages with intervention at each */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Kohut (1977), Kernberg (1975) — narcissistic escalation through identifiable stages. Herman (1992) — patterns of coercive control. Bancroft (2002) — stage-recognisable escalation. Staub (1989) — collective escalation toward extreme group behaviour through identifiable stages.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The five stages with named internal logic and stage-appropriate interruption — making domination recognisable as a process rather than a type. The unified pathway connected to the nervous system gradient, with intervention matched to what the system can support at each stage. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: HOW DOMINATION ESCALATES ─────────── */}
          <PartDivider label="PART 2" title="How Domination Escalates" color={accent} />

          {/* Concept 4: Power-Interoception Inverse */}
          <section
            id="power-interoception"
            aria-labelledby="heading-power-interoception"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-power-interoception" style={sectionHeadingStyle(accent)}>
              The Power-Interoception Inverse
            </h2>

            <p style={proseStyle}>
              <Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link> established a pattern: as access to external power increases, interoceptive access decreases.
            </p>
            <p style={proseStyle}>
              The mechanism: when the CLS can control the environment through RE alone — reading others, managing situations, acquiring resources — the nervous system does not need the interoceptive substrate. RE provides sufficient data. The CLS builds coherence without the body and the coherence functions — the narrative is clean, clear, confident. The person never encounters the conditions where RE alone is insufficient.
            </p>
            <p style={proseStyle}>
              Access to external power is itself a restoration substitute. It provides the CLS with enough data (through RE) and enough environmental control to function without the ESS's signals. It produces the physiological settling that safety would provide — through control rather than through connection. The cortisol drops when the environment complies. The amygdala quiets when the threats are managed. The regulation is real. The source is not.
            </p>
            <p style={proseStyle}>
              This is F7's central structural mechanism. The configuration that produces the most control — sharp RE, absent ER, absent SEA — is the configuration most disconnected from the body's data. The hierarchy (<Link href="/framework/f5-worth-hierarchies" style={linkStyle}>F5</Link>) rewards this configuration because it produces results. The perceptual system (<Link href="/framework/f6-bias-regulates" style={linkStyle}>F6</Link>) confirms it because it reads as competence. The rule systems (<Link href="/framework/f4-rules-regulate" style={linkStyle}>F4</Link>) normalise it because "strong leadership" and "tough decisions" are dominance rules the CLS absorbs as truth.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — power increasing, interoceptive access decreasing */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Keltner, Gruenfeld & Anderson (2003) — approach/inhibition theory of power: power increases approach behaviour and decreases sensitivity to others' states. Koenigs et al. (2007) — vmPFC suppression in utilitarian decision-making. Galinsky et al. (2006) — power reduces perspective-taking and increases egocentric anchoring.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The power-interoception inverse traced through the awareness architecture: external power replaces the need for interoceptive data, making the substrate irrelevant rather than suppressing it. The configuration that accumulates power is the configuration that does not need the body's data — and the power ensures it will never encounter the conditions where the body's data becomes necessary. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concepts 5-6: Capacity Divergence + No Brake */}
          <section
            id="capacity-divergence"
            aria-labelledby="heading-capacity-divergence"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-capacity-divergence" style={sectionHeadingStyle(accent)}>
              How Awareness Capacities Diverge Along the Pathway
            </h2>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>RE does not collapse. It redirects.</strong> The CLS capacity that reads others' emotional states stays sharp or sharpens as escalation progresses. In Safety & Openness, RE serves understanding. In chronic Strategy & Management, RE serves management. In chronic Power & Dominance, RE serves leverage — others' emotional states become data for exploitation. The person at Stage 4-5 may read with more accuracy than anyone in the room. What they cannot do is feel what they read.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>ER collapses.</strong> The ESS capacity that resonates with others' states degrades along the gradient. In chronic Power & Dominance, the ventromedial prefrontal cortex (vmPFC) — which carries care, guilt, and empathic constraint — is suppressed. Others' pain registers as information about the environment, not shared experience. ER is offline.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>SEA was never there.</strong> The bridge between the CLS and the ESS is the precondition for the entire escalation pathway, not a consequence of it. The person at Stage 4-5 does not have SEA that was suppressed by the escalation. They have SEA that was never built (<Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link>). This is why the escalation has no internal brake: without SEA, the activation that drives domination is never processed. And without SEA, there is no internal signal telling the person that their reading of others (sharp RE) is serving leverage rather than understanding.
            </p>
            <p style={proseStyle}>
              The configuration at the far end: sharp RE + absent ER + absent SEA. Reads everyone in the room. Feels nothing of the impact. Has no internal signal that anything is wrong. This is the configuration that produces the most harm with the least visibility. It is also the configuration that most reliably mimics connection — because sharp RE provides the data and the CLS provides the performance script.
            </p>

            <h3 style={conceptHeadingStyle}>Why the Brake Is Structurally Absent</h3>
            <p style={proseStyle}>
              The escalation generates signals that would, in a complete system, produce course correction. Harm generates shame — the ESS producing a signal that something violated a relational boundary. Guilt fires — the ESS signalling that the action produced cost to another person. Remorse fires — the ESS signalling that repair is needed.
            </p>
            <p style={proseStyle}>
              In the configuration that produces domination, the signals fire in the ESS and have no channel to reach the CLS. ER is offline: there is no somatic echo of what the harm cost the other person. SEA is absent: there is no bridge to receive the shame, guilt, and remorse signals as information about the self. The signals become unresolved activation. The activation load increases. The nervous system requires a stronger neurochemical event to produce the same regulatory shift.
            </p>
            <p style={proseStyle}>
              This is <Link href="/model/m3-regulation-capacities" style={linkStyle}>M3's</Link> Relational Substitute Escalation operating without a brake. Escalation is structurally required. The harm-generated signals that would produce the brake are the signals the system cannot process.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — three capacities diverging along pathway */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Singer & Klimecki (2014) — distinction between empathic distress and compassion as separate resonance states. Blair (2007) — selective empathy deficits producing different outcomes depending on channel affected. Porges (2011) — ventral vagal suppression under chronic threat. Tangney & Dearing (2002) — shame and guilt as regulatory emotions with distinct functions. Koenigs et al. (2007) — vmPFC suppression and the absence of felt moral weight.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The three-capacity divergence model replacing the single-channel model (empathy on/off) with three trajectories. This explains why chronic control mimics connection (sharp RE + performed warmth + absent self-knowledge), why empathy appeals fail at late stages (the appeal targets ER which is offline while RE narrates empathy-language back), and why RE sharpening is a warning signal. The structural explanation for escalation without a brake: the harm generates the signals that would produce the brake, but the configuration that produces the harm is the configuration that cannot process those signals. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 7: Addiction Logic */}
          <section
            id="escalation-logic"
            aria-labelledby="heading-escalation-logic"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-escalation-logic" style={sectionHeadingStyle(accent)}>
              Escalation Without a Stopping Point
            </h2>

            <p style={proseStyle}>
              External regulation through subjugation — others' fear, submission, and compliance producing the neurochemical shift that biological restoration would have provided — builds tolerance. The mechanism is identical to substance tolerance.
            </p>
            <p style={proseStyle}>
              The first time the person dominates and the activation settles — cortisol drops, the amygdala quiets, the brief period of stability arrives — it is enough. For a while. But the relief fades. The activation returns. The internal state that drove the domination is unchanged — because SEA is absent and the physiological activation was never processed. The same level of domination does not produce the same relief. The nervous system requires more intense subjugation, more people subjected, more extreme acts, more power to access more regulation sources.
            </p>
            <p style={proseStyle}>
              There is no natural stopping point. The underlying activation is structural — it is the cumulative unresolved load from a lifetime of incomplete restoration sequences. No amount of domination completes the biological restoration that would resolve the load. The domination produces temporary discharge. The discharge fades. The load remains. The cycle repeats at higher intensity.
            </p>
            <p style={proseStyle}>
              Power and wealth amplify this mechanism. A person in chronic Power & Dominance with limited structural power has limited access — the harm is real but contained by structural constraints. A person in chronic Power & Dominance with vast structural power has unlimited access — unlimited regulation sources, unlimited capacity to enforce compliance, and structural protection from consequences.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — addiction-logic: tolerance, escalation, no endpoint */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Addiction research — tolerance, escalation, and the absence of a natural stopping point when the underlying condition is structural. Kohut (1977) — narcissistic regulation through self-objects. Bowlby (1969) — when internal regulation is unavailable, the system continues seeking external regulatory input.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The addiction-logic framing for domination — connecting relational domination to substance tolerance through a shared mechanism: temporary relief from an internal state that is never processed because the processing channel is absent. There is no amount of domination that produces actual safety — because the safety the person needs is internal, and domination moves in the opposite direction. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: WHAT DOMINATION PRODUCES AT SCALE ── */}
          <PartDivider label="PART 3" title="What Domination Produces at Scale" color={accent} />

          {/* Concepts 8-10: Institutions */}
          <section
            id="institutional-reproduction"
            aria-labelledby="heading-institutional-reproduction"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-institutional-reproduction" style={sectionHeadingStyle(accent)}>
              How Institutions Reproduce the Configuration
            </h2>

            <p style={proseStyle}>
              Domination structures do not only use power. They reproduce the substrate state that makes power the only regulation available — and that makes the structure invisible from the inside.
            </p>
            <p style={proseStyle}>
              When an institution is governed by the configuration that produces domination (sharp RE, absent ER, absent SEA), the institution selects for that configuration. It rewards decisive action (RE-driven), penalises emotional expression (ER-threatening), and treats interoceptive signals as weakness (SEA-irrelevant). Over time, the institution's selection pressures produce a leadership layer that carries the configuration the institution rewards.
            </p>
            <p style={proseStyle}>
              The institution then operates on the population it governs the way a developmental environment operates on a child (<Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link>). Condition 3 at institutional scale: emotional expression is blocked. The interoceptive channel is suppressed across the population. The people within the institution develop absent interoceptive access — and the rules the institution produces feel like reality (<Link href="/framework/f4-rules-regulate#three-coherence-forms" style={linkStyle}>F4</Link>).
            </p>
            <p style={proseStyle}>
              The vmPFC — the neural substrate that carries care, guilt, and empathic constraint — is suppressed at organisational scale. The institution processes others' distress as data. The decision-making produces outcomes that are simultaneously rational within the data set and blind to the felt dimension. This connects to <Link href="/framework/f4-rules-regulate#re-only-institutions" style={linkStyle}>F4's RE-only institutions</Link> at their most extreme expression — the institution not only running on cognitive data but actively selecting for and reproducing the configuration that ensures cognitive data is all it has.
            </p>
            <p style={proseStyle}>
              The loop runs in whichever direction the institution is currently running. The institution that suppresses the substrate produces the conditions that make further suppression invisible. The institution that rebuilds the substrate produces the conditions that make further rebuilding possible. A single intervention that shifts the institutional conditions operates on every nervous system in the system simultaneously.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — institutional selection loop */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Argyris & Schön (1974) — defensive routines becoming self-reinforcing. DiMaggio & Powell (1983) — institutional isomorphism. Pfeffer (1981) — how selection and reward systems reproduce particular configurations. Bazerman & Tenbrunsel (2011) — ethical blind spots. Senge (1990) — reinforcing feedback loops. Edmondson (1999) — psychological safety producing measurable differences.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The substrate-level explanation for how institutions self-reproduce: the institution's conditions suppress the interoceptive substrate across the population, producing the biological condition that makes the institution's operation invisible from the inside. The bidirectional loop showing that institutions amplify whichever direction they are running — degradation or restoration. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 4: THE ARC COMPLETES ──────────────── */}
          <PartDivider label="PART 4" title="The Arc Completes" color={accent} />

          {/* Concepts 11-12: Accountability + Complete Arc */}
          <section
            id="complete-arc"
            aria-labelledby="heading-complete-arc"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-complete-arc" style={sectionHeadingStyle(accent)}>
              Seven Restoration Substitutes at Escalating Scale
            </h2>

            <p style={proseStyle}>
              F7 has traced a mechanism: reinforcement driving escalation, capacity configurations enabling harm, institutions reproducing the conditions that produce more harm. The mechanism is understandable. The causality is traceable. Causality asks: how did this happen? Accountability asks: what must be named? What must be stopped? Who must be protected? Both questions are necessary. Understanding the mechanism increases the precision of intervention — without diminishing accountability.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Framework</th>
                    <th style={thStyle}>What Provides the Substitute</th>
                    <th style={thStyle}>Scale</th>
                    <th style={thStyle}>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["F1", "Biological restoration — the designed process", "Individual biology", "No cost"]} />
                  <TableRow cells={["F2", "Co-regulation → self-restoration (when learned)", "Developmental", "The return path"]} />
                  <TableRow cells={["F3", "False coherence — narrative replacing signals", "Individual cognition", "Truth"]} />
                  <TableRow cells={["F4", "Rules regulate — collective predictability", "Social systems", "Flexibility"]} />
                  <TableRow cells={["F5", "Worth hierarchies regulate — position as regulation", "Value systems", "Equity"]} />
                  <TableRow cells={["F6", "Bias regulates — perceptual certainty", "Perceptual systems", "Accuracy"]} />
                  <TableRow cells={["F7", "Domination regulates — direct control of others", "Power systems", "Everything"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Each substitute produces physiological settling — temporary relief without completing biological restoration. Each traces to the same origin: a nervous system that never learned the return path. The costs escalate. The mechanism is the same at every scale. The intervention principle is consistent: restore safety first, then expect capacity. At F7's early stages, safety enables return. At F7's late stages, protection takes precedence over restoration.
            </p>
            <p style={proseStyle}>
              The thread also reveals why late-stage domination is resistant to intervention. Every previous framework's substitute operates simultaneously: false coherence maintains the narrative. Rules enforce the structure. Worth hierarchies justify the position. Bias confirms the perception. And domination provides the direct regulation that all of these serve. The system has redundancy — not by design, but because each substitute reinforced the next.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — complete regulation thread F1-F7 */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  The foundations for each framework are documented in F1-F6 and the concepts above. Restorative justice literature — understanding context while maintaining accountability. Strawson (1962) — moral responsibility as compatible with causal explanation. Herman (1992) — naming the mechanism as essential to recovery.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The complete regulation thread as the connective tissue of F1-F7. No existing framework traces a single mechanism from individual biological restoration through developmental failure through cognitive replacement through collective rules through worth sorting through bias through domination — and shows that each level is the same nervous system substituting a different regulation source at a different scale, with escalating costs and a consistent intervention principle. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={accent}
            items={[
              {
                term: "Domination built through reinforcement",
                definition: "The same learning mechanism, the same nervous system, the same regulation thread — further along the gradient, at maximum cost. The pathway follows reinforcement, not personality.",
              },
              {
                term: "The transition from defence to strategy",
                definition: "Repair decreasing, control increasing, tactics replacing vulnerability. The shift from state-based reaction to CLS-recruited management of others.",
              },
              {
                term: "Five-stage pathway",
                definition: "Fear → Strategy → Entitlement → Empathy Collapse → Power Preservation. Each interruptible. Earlier = more accessible. Late = structural containment.",
              },
              {
                term: "Power-interoception inverse",
                definition: "As power increases, interoceptive access decreases — power replaces the need for it. Access to power is itself a restoration substitute.",
              },
              {
                term: "Three-capacity divergence",
                definition: "RE redirects (from understanding to leverage), ER collapses (impact unfelt), SEA was never built (no brake). The configuration that produces the most harm with the least visibility.",
              },
              {
                term: "Escalation without a brake",
                definition: "The harm generates signals (shame, guilt, remorse). ER absent, SEA absent — no channel to process them. Tolerance builds. No natural stopping point.",
              },
              {
                term: "Addiction logic",
                definition: "Subjugation builds tolerance. The same level of domination produces less relief. The cycle repeats at higher intensity. Power amplifies access.",
              },
              {
                term: "Institutions reproduce the substrate state",
                definition: "The institution suppresses the interoceptive substrate across the population — producing the biological condition that makes the institution invisible from the inside. The bidirectional loop amplifies whichever direction the institution is running.",
              },
              {
                term: "Causality and accountability coexist",
                definition: "The mechanism is traceable. The harm is real. Both are true simultaneously. Understanding increases the precision of intervention.",
              },
              {
                term: "The regulation thread complete",
                definition: "F1-F7: seven restoration substitutes at escalating scale and escalating cost. Each traces to the same origin. The intervention principle is consistent across all seven.",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={accent}
            established="F7 completed the collective arc — seven restoration substitutes at escalating scales and escalating costs, each tracing to the same origin: a nervous system that never learned the return path."
            question="The repair arc (F8-F12) maps what happens when the conditions change — when safety replaces threat, when the interoceptive channel begins to reopen, when the substrate rebuilds through the relational conditions that build it in the first place."
            nextFramework="F8"
            nextTitle="Awareness Rebuilds Through Safety"
            nextHref="/framework/f8-repairing-awareness"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={accent}
            connections={[
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "M3 maps Relational Substitute Escalation — tolerance building without endpoint. F7 shows this mechanism operating at maximum scale: domination through subjugation builds tolerance, escalation is structurally required.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "M4 established the capacity configuration that defines F7: sharp RE, absent ER, absent SEA. M4 established the power-interoception inverse. F7 maps what happens when this configuration occupies positions of institutional power.",
              },
              {
                id: "F6: Bias Regulates",
                href: "/framework/f6-bias-regulates",
                description: "F6 is perception as protection. F7 is perception as enforcement — what happens when the system moves from maintaining distorted perception to imposing it.",
              },
              {
                id: "F3: Adult Cognition & False Coherence",
                href: "/framework/f3-false-coherence",
                description: "F3's external regulation through subjugation is the individual-level mechanism that F7 maps at maximum scale. The self-sealing property operates throughout: the substitute destroys the conditions genuine restoration would require.",
              },
              {
                id: "F2: Developmental Calibration",
                href: "/framework/f2-awareness-calibration",
                description: "SEA was never built (F2). This is the precondition for the entire escalation pathway — not a consequence of it. Institutions reproduce the developmental conditions at population scale.",
              },
              {
                id: "F8: Awareness Rebuilds Through Safety",
                href: "/framework/f8-repairing-awareness",
                description: "F7 completes the collective arc. F8 begins the repair arc — how the interoceptive channel can reopen through safety, not instruction.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={accent}
            items={[
              { label: "Continue to F8 — how the repair arc begins", href: "/framework/f8-repairing-awareness", linkText: "F8: Awareness Rebuilds Through Safety \u2192" },
              { label: "See the restoration substitutes and escalation M3 maps", href: "/model/m3-regulation-capacities", linkText: "M3: Regulation Capacities \u2192" },
              { label: "See the awareness architecture that diverges along the pathway", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "Return to F6 — how perception becomes protection", href: "/framework/f6-bias-regulates", linkText: "F6: Bias Regulates \u2192" },
              { label: "Return to F1 — where the regulation thread begins", href: "/framework/f1-emotional-gradient", linkText: "F1: The Emotional Gradient \u2192" },
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
            "@id": "https://teg-blue.org/framework/f7-domination-regulates#article",
            headline: "Domination Regulates: How Defence Becomes Strategy Becomes Domination",
            description:
              "How reinforcement builds the escalation pathway, the power-interoception inverse, three-capacity divergence, and why the mechanism that would stop the escalation is structurally absent. Framework F7 of the TEG-Blue 12-framework system.",
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
              "@id": "https://teg-blue.org/framework/f7-domination-regulates",
            },
            about: [
              { "@type": "Thing", name: "Domination" },
              { "@type": "Thing", name: "Coercive Control" },
              { "@type": "Thing", name: "Power and Empathy" },
              { "@type": "Thing", name: "Institutional Harm" },
              { "@type": "Thing", name: "Narcissistic Escalation" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Affect Regulation and the Origin of the Self (Schore, 2003)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Trauma and Recovery (Herman, 1992)" },
              { "@type": "ScholarlyArticle", name: "Why Does He Do That? (Bancroft, 2002)" },
              { "@type": "ScholarlyArticle", name: "The Analysis of the Self (Kohut, 1977)" },
              { "@type": "ScholarlyArticle", name: "The Roots of Evil (Staub, 1989)" },
            ],
            keywords: [
              "domination regulates",
              "nervous system escalation",
              "coercive control",
              "power interoception",
              "empathy collapse",
              "narcissistic escalation",
              "institutional domination",
              "restoration substitute",
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
              { name: "F7: Domination Regulates", url: "/framework/f7-domination-regulates" },
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
                question: "How is domination built through reinforcement?",
                answer:
                  "When control reliably reduces nervous system activation — when cortisol drops after others comply — the nervous system adopts control as its primary regulation strategy. If the strategy is socially rewarded and accountability is absent, it escalates. Defence hardens into strategy, strategy into entitlement, entitlement into domination. The pathway follows reinforcement, not personality.",
              },
              {
                question: "What is the power-interoception inverse?",
                answer:
                  "As access to external power increases, interoceptive access decreases — because power replaces the need for it. When the CLS can control the environment through RE alone, the nervous system does not need the interoceptive substrate. Access to power is itself a restoration substitute, providing physiological settling through control rather than connection.",
              },
              {
                question: "Why does the escalation have no natural brake?",
                answer:
                  "The harm generates signals — shame, guilt, remorse — that would produce course correction in a complete system. But the configuration that produces domination (sharp RE, absent ER, absent SEA) is the configuration that cannot process those signals. ER is offline — the body does not feel others' pain. SEA is absent — no bridge to receive the shame. The brake is structurally absent.",
              },
              {
                question: "What are the five stages of escalation?",
                answer:
                  "1. Fear Activation (state-based, repair still possible). 2. Strategy Formation (CLS recruited, control increasing). 3. Entitlement Loop (compliance expected, blame reversed). 4. Empathy Collapse (impact unfelt, RE serves leverage). 5. Power Preservation (identity fused with dominance, connection feels like dissolution). Each is interruptible — earlier is more accessible.",
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
              name: "Domination Regulates (F7) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f7-domination-regulates",
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
