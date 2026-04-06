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
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F6 makes about how perception becomes protection." },
  { label: "How Bias Serves Regulation", href: "#bias-regulation", description: "Not a reasoning error — a regulation strategy. If believing it reduces activation, keep believing it." },
  { label: "The Architecture of Perceptual Filtering", href: "#filtering-architecture", description: "Seven constructs, three categories, and the threshold equation for revision." },
  { label: "How Bias Forms and Locks", href: "#bias-formation", description: "Six steps from uncertainty to experienced truth — and why it feels like direct perception." },
  { label: "Collective State-Locked Perception", href: "#collective-perception", description: "When enough nervous systems share the same filter, the collective sees the same thing — and it feels like reality." },
  { label: "Three Collective Perceptual Architectures", href: "#three-architectures", description: "Absent, contested, and full interoceptive access — three relationships to the same bias." },
  { label: "Why Correction Fails and What Works", href: "#correction", description: "The substrate, not the narrative, is the lock. Five conditions for genuine revision." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Bridge to F7", href: "#bridge", description: "From maintaining the filter to imposing it." },
  { label: "Connections Map", href: "#connections", description: "How F6 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Bias Regulates (F6) | TEG-Blue Research",
  description:
    "How perception becomes protection — bias as regulation rather than reasoning error, the architecture of perceptual filtering, collective state-locked perception, and why correction fails when it targets the narrative while the substrate maintains the bias. Framework F6 of the TEG-Blue 12-framework system.",
  keywords: [
    "bias regulates",
    "perceptual filtering",
    "nervous system regulation",
    "implicit bias",
    "state-dependent perception",
    "cognitive bias",
    "collective perception",
    "interoceptive substrate",
    "false coherence",
    "system justification",
    "bias correction",
    "perceptual revision",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f6-bias-regulates",
  },
  openGraph: {
    title: "Bias Regulates — F6 Framework | TEG-Blue",
    description:
      "How perception becomes protection — bias as regulation, collective state-locked perception, and why correction fails at the narrative level. Framework F6 of 12.",
    url: "https://teg-blue.org/framework/f6-bias-regulates",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bias Regulates — TEG-Blue F6",
    description:
      "How perception becomes protection — why bias resists correction and what conditions allow genuine perceptual revision.",
  },
  other: {
    'citation_title': 'Bias Regulates',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F6BiasRegulatesPage() {
  const accent = SPECTRUM.cobalt;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f6-bias-regulates" />

      <PageLayout
        header={
          <FrameworkHero
            badge="FRAMEWORK F6"
            title="Bias Regulates"
            subtitle="How Perception Becomes Protection"
            description="F5 described how rule systems produce worth hierarchies — sorting who gets belonging, protection, and credibility. When that sorting becomes stable and internalised, it stops being experienced as a system. It becomes perception. F6 maps how this happens. Bias is pattern recognition in service of regulation. Under threat, the same efficiency that serves rapid categorisation becomes rigid certainty — beliefs maintained because they settle the nervous system, not because they are accurate."
            group="Collective"
            groupLabel="Collective Arc · F4–F7"
            threadLine="Bias regulates — perceptual certainty as restoration substitute. Scale: collective perceptual systems. Cost: accuracy"
            informsModels={[
              { label: "M2", href: "/model/m2-nervous-system-states" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
            ]}
            adjacent={{
              prev: { label: "F5 The Filter of Worth", href: "/framework/f5-worth-hierarchies" },
              next: { label: "F7 Domination Regulates", href: "/framework/f7-domination-regulates" },
            }}
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>

          {/* ─── PREREQUISITES ──────────────────────────── */}
          <PrerequisitesBlock items={[
            {
              concept: "False Coherence",
              framework: "F3",
              description: "The CLS generating narrative that replaces the ESS's physiological signals — producing stability at the cost of truth.",
              href: "/framework/f3-false-coherence#false-coherence",
            },
            {
              concept: "The Filter of Worth",
              framework: "F5",
              description: "Signal access mistaken for human value — the structural sorting that F6 shows becoming invisible through perception itself.",
              href: "/framework/f5-worth-hierarchies#filter-of-worth",
            },
            {
              concept: "State-Dependent Sensory Filtering",
              framework: "M2",
              description: "The nervous system's physiological configuration shaping what sensory input reaches the person before conscious thought begins.",
              href: "/model/m2-nervous-system-states",
            },
          ]} />

          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Bias",
                commonUnderstanding: "A reasoning error that education can fix — prejudice based on ignorance, correctable through exposure and information.",
                definition: "Pattern recognition in service of regulation. Under stable conditions, rapid and efficient. Under threat, rigid and self-protective. The nervous system maintains beliefs that reduce activation — below conscious awareness, before reasoning begins. The criterion is stability, not accuracy.",
              },
              {
                title: "Objectivity",
                commonUnderstanding: "Seeing things as they really are — perceiving without the distortion of emotion or personal agenda.",
                definition: "A perceptual configuration, not a neutral default. The nervous system's physiological state shapes what reaches perception before conscious processing. What feels like 'seeing clearly' may be the perceptual filter operating so smoothly it is invisible to the person running it.",
              },
              {
                title: "Being corrected",
                commonUnderstanding: "Receiving new information that updates your thinking — an intellectual event.",
                definition: "A regulatory threat. When the belief being challenged is part of the regulatory architecture — when it stabilises the chronic state — the correction threatens the mechanism keeping the system stable. The nervous system responds as to threat. The correction activates defence, not revision.",
              },
            ]}
          />

          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  Bias is a regulation strategy, not a reasoning error — the nervous system maintains beliefs that reduce activation, and the regulatory function operates below the level of conscious reasoning
                </li>
                <li style={propositionItemStyle}>
                  Seven constructs maintain perceptual filtering — emotional logic, state-dependent perception, identity filter, social reward loop, empathy collapse, update failure, and an emotional safety threshold that formalises revision conditions
                </li>
                <li style={propositionItemStyle}>
                  Three categories of bias serve different regulatory functions — cognitive biases regulate certainty, social biases regulate belonging, internalised biases regulate identity coherence — requiring different intervention directions
                </li>
                <li style={propositionItemStyle}>
                  Bias forms and locks through a six-step self-reinforcing loop — and it feels like direct perception because physiological relief from threat reduction is experienced as epistemic confirmation
                </li>
                <li style={propositionItemStyle}>
                  When enough nervous systems share the same chronic state, collective perception locks — pre-cognitive in each individual, self-reinforcing across the group
                </li>
                <li style={propositionItemStyle}>
                  Three collective perceptual architectures produce different relationships to the same bias — absent access (bias feels like reality), contested (body senses mismatch, group discredits sensing), full (bias held as construction)
                </li>
                <li style={propositionItemStyle}>
                  Correction fails because it targets the CLS while the bias is maintained by the substrate state — revision requires safety, not information
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: WHAT BIAS IS ───────────────────── */}
          <PartDivider label="PART 1" title="What Bias Is" color={accent} />

          {/* Concept 0: How Bias Serves Regulation */}
          <section
            id="bias-regulation"
            aria-labelledby="heading-bias-regulation"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bias-regulation" style={sectionHeadingStyle(accent)}>
              How Bias Serves Regulation Rather Than Reasoning
            </h2>

            <p style={proseStyle}>
              Under stable conditions — when cortisol is low, the prefrontal cortex has full access, the perceptual field is broad — bias operates as rapid pattern recognition. The nervous system efficiently categorises: familiar or novel, similar or different, this situation matches a past experience or it does not. Fast, low-cost, and usually accurate enough.
            </p>
            <p style={proseStyle}>
              Under threat conditions — when cortisol is elevated, the amygdala's detection sensitivity is heightened, the perceptual field has narrowed — the same efficiency becomes rigid certainty. The nervous system is no longer categorising for understanding. It is categorising for stability. Beliefs that reduce activation are maintained. Beliefs that would increase activation are filtered out, reframed, or rejected. The criterion shifts from accuracy to threat reduction.
            </p>
            <p style={proseStyle}>
              The regulatory equation: if believing something reduces nervous system activation, the system keeps believing it — below conscious awareness. By the time the person is "thinking about it," the perceptual system has already delivered a conclusion that feels like observation.
            </p>
            <p style={proseStyle}>
              This connects to false coherence (<Link href="/framework/f3-false-coherence#false-coherence" style={linkStyle}>F3</Link>). False coherence is the mechanism by which the CLS produces stable narratives that serve regulation rather than truth. Bias is that mechanism operating at the perceptual level: the narrative is so deeply embedded that it is no longer experienced as a narrative. It is experienced as what the person sees. What <Link href="/framework/f5-worth-hierarchies#filter-of-worth" style={linkStyle}>F5</Link> describes structurally — who gets filtered in and out — F6 describes perceptually: how the filtering becomes invisible because it is absorbed into what feels like seeing.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — regulation equation, stability vs accuracy */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Kunda (1990) — motivated reasoning: directional goals shape which beliefs are maintained. Friston — predictive coding: the brain as a prediction machine that minimises surprise, treating belief-confirmation as physiological relief. Damasio (1994) — somatic marker hypothesis: bodily states guiding decision-making below awareness. Kahneman & Tversky — heuristics and biases: systematic patterns serving efficiency over accuracy.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The explicit unification: bias is regulation, not reasoning error. The regulatory equation — "if believing this reduces activation, keep believing it" — making the mechanism explicit and connecting it to F3's false coherence and the regulation thread. The intervention shifts from correcting the content of the belief to creating conditions safe enough for the perceptual system to tolerate flexibility. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concepts 1-2: The Architecture + Three Categories */}
          <section
            id="filtering-architecture"
            aria-labelledby="heading-filtering-architecture"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-filtering-architecture" style={sectionHeadingStyle(accent)}>
              The Architecture of Perceptual Filtering
            </h2>

            <p style={proseStyle}>
              Bias operates as a layered architecture — interacting constructs that together produce the felt certainty people experience as seeing clearly:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Emotional Logic</strong> — beliefs feel true when they settle the nervous system. A belief that reduces cortisol feels accurate, independent of whether it is. <strong style={{ color: TEXT.primary }}>State-Dependent Perception</strong> — what the person perceives depends on their nervous system state. In Safety & Openness, nuance is available. In threat states, the field narrows toward threat-relevant data. <strong style={{ color: TEXT.primary }}>Identity Filter</strong> — when beliefs fuse with identity. Contradiction is no longer disagreement about facts. It is identity threat. <strong style={{ color: TEXT.primary }}>Social Reward Loop</strong> — bias reinforced through belonging. Agreement signals safety. Dissent signals threat. Shared beliefs function as obedience rules (<Link href="/framework/f4-rules-regulate#six-functions" style={linkStyle}>F4</Link>). <strong style={{ color: TEXT.primary }}>Empathy Collapse</strong> — Affective Resonance (ER) degrades under chronic activation (<Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link>). The person cannot feel the impact of their perceptual distortion on others. RE may remain sharp — reading others with precision — but the reading serves strategy rather than understanding. <strong style={{ color: TEXT.primary }}>Update Failure</strong> — when the Identity Filter is engaged AND Empathy Collapse has occurred, the system has no mechanism to update. Information that contradicts existing perception is filtered out. The source is discredited. <strong style={{ color: TEXT.primary }}>Emotional Safety Threshold</strong> — the minimum safety level required for revision:
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
              Update capacity = (Internal safety + Relational safety) − (Identity threat + Belonging threat)
            </p>

            <p style={proseStyle}>
              When the right side exceeds the left, the system cannot update. The nervous system is structurally unable to revise because the cost would exceed what it can absorb.
            </p>

            <h3 style={conceptHeadingStyle}>Three Categories by Regulatory Function</h3>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>What It Regulates</th>
                    <th style={thStyle}>Intervention Direction</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Cognitive biases", "Certainty", "Reduce the cost of being wrong — create safety to tolerate ambiguity"]} />
                  <TableRow cells={["Social and cultural biases", "Belonging", "Provide group identity that does not require shared bias"]} />
                  <TableRow cells={["Internalised emotional biases", "Identity coherence", "Address the developmental conditions that installed the bias — relational repair"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Cognitive biases — confirmation bias, authority bias, negativity bias — reduce uncertainty. Social and cultural biases — in-group bias, racism, sexism, classism — maintain group cohesion. Internalised emotional biases — "I'm not good enough," "People can't be trusted" — are perceptual defaults about the self and the world, calibrated during development (<Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link>) and maintained through false coherence. They have been running since before the person had language to question them.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — seven constructs, interaction model, threshold */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Damasio (1994), Slovic & Finucane — affect heuristic, somatic markers. Porges (2011), Fredrickson — neuroception, broaden-and-build. Festinger (1957), Kahan — cognitive dissonance, identity-protective cognition. Tajfel & Turner, Asch — social identity, conformity. Blair (2007) — selective empathy deficits. Nyhan & Reifler — backfire effect. Edmondson (1999) — psychological safety. Kahneman & Tversky, Kruglanski — heuristics, need for closure. Jost & Banaji, Sidanius & Pratto — system justification, social dominance. Beck — core beliefs. Young — early maladaptive schemas.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Seven individually documented phenomena organised into a unified architecture with named constructs and explicit interactions. The interaction model — Identity Filter + Empathy Collapse = Update Failure — shows the specific mechanism by which bias becomes structurally uncorrectable. The threshold equation formalises revision conditions. The three-category organisation by regulatory function changes intervention from one correction strategy (educate, expose, challenge) to three directions matched to what the bias actually regulates. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: HOW BIAS FORMS AND LOCKS ────────── */}
          <PartDivider label="PART 2" title="How Bias Forms and Locks" color={accent} />

          {/* Concepts 3-4: Formation Loop + Why It Feels Like Perception */}
          <section
            id="bias-formation"
            aria-labelledby="heading-bias-formation"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bias-formation" style={sectionHeadingStyle(accent)}>
              How Bias Forms, Locks, and Feels Like Direct Perception
            </h2>

            <p style={proseStyle}>
              Bias forms and stabilises through a six-step self-reinforcing loop:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 1:</strong> Uncertainty detected. The amygdala registers novelty. Mild activation. <strong style={{ color: TEXT.primary }}>Step 2:</strong> Fast interpretation selected. The CLS pattern-matches and selects the fastest available explanation — binary, complexity-reduced. <strong style={{ color: TEXT.primary }}>Step 3:</strong> Interpretation fuses with identity. "What I think" becomes "who I am." Challenging it now feels like challenging the person. <strong style={{ color: TEXT.primary }}>Step 4:</strong> Social reinforcement stabilises. The group rewards the shared interpretation with belonging signals. The bias is no longer individually held — it is socially maintained. <strong style={{ color: TEXT.primary }}>Step 5:</strong> Challenge triggers defence. New information is processed as threat — to identity and to belonging simultaneously. The source is discredited. The challenge is reframed. <strong style={{ color: TEXT.primary }}>Step 6:</strong> Revision requires safety. The nervous system must have enough safety to tolerate the physiological disorientation of being wrong — which is the loss of the stability the belief was providing.
            </p>
            <p style={proseStyle}>
              Each cycle strengthens the architecture. Over time, the bias becomes automatic, invisible, and experienced as direct perception rather than interpretation. The architecture parallels <Link href="/framework/f4-rules-regulate#internalisation" style={linkStyle}>F4's internalisation loop</Link> and <Link href="/framework/f5-worth-hierarchies#self-reinforcing" style={linkStyle}>F5's worth loop</Link> — the same mechanism operating at the level of rules, worth, and perception.
            </p>

            <h3 style={conceptHeadingStyle}>Why Bias Feels Like Direct Perception</h3>
            <p style={proseStyle}>
              The sequence: a stimulus triggers uncertainty. The CLS selects an interpretation that restores coherence. The interpretation reduces activation — cortisol decreases, muscles relax, the HPA axis begins to stand down. The nervous system registers: the disruption has been resolved. The physiological settling feels like the interpretation was correct. "I feel certain about this" becomes "this is true."
            </p>
            <p style={proseStyle}>
              The felt sense of certainty tracks physiological stability rather than epistemic accuracy. The person is experiencing physiological confirmation that the belief is correct. Their body is signalling truth. Information that contradicts the belief does not just contradict their thinking — it contradicts their somatic experience.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: animated — six-step formation loop with felt certainty */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Kahneman & Tversky — heuristics. Kahan — identity-protective cognition. Tajfel & Turner — social identity theory. Nyhan & Reifler — backfire effect. Edmondson (1999) — psychological safety. Damasio (1994) — somatic marker hypothesis. Schwarz & Clore (1983) — affect-as-information. Friston — predictive coding: belief-confirmation as physiological relief.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The six steps as a unified self-reinforcing loop with self-sealing closure: Step 6 (revision requires safety) means the conditions for breaking the loop are the opposite of what the loop produces. The five-step phenomenology of certainty — from stimulus through activation reduction through relief to false epistemic confirmation — connecting it to F3's false coherence operating at the perceptual level. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 5: Collective State-Locked Perception */}
          <section
            id="collective-perception"
            aria-labelledby="heading-collective-perception"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-collective-perception" style={sectionHeadingStyle(accent)}>
              Collective State-Locked Perception
            </h2>

            <p style={proseStyle}>
              <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link> maps State-Dependent Sensory Filtering — the nervous system's physiological configuration shaping what sensory input reaches the person before conscious processing begins. F6 shows what happens when these individual mechanisms synchronise across a population.
            </p>
            <p style={proseStyle}>
              When enough nervous systems in a system share the same chronic state — when a population has been running at elevated activation long enough for the perceptual field to narrow collectively — the group shares the same perceptual filter. The filter is pre-cognitive in each individual and self-reinforcing across the group. Each person's biased perception confirms every other person's biased perception. The collective sees the same thing — and what the collective sees feels like reality because everyone confirms it.
            </p>
            <p style={proseStyle}>
              The mechanism is physiological, not ideological. Cortisol elevation narrows the perceptual field in each nervous system. Amygdala sensitisation increases threat-detection sensitivity. Prefrontal narrowing reduces nuance-processing capacity. When these shifts occur across a population — through shared threat, shared structural conditions, shared developmental environments — the population develops a shared perceptual filter that is upstream of any individual's conscious reasoning.
            </p>
            <p style={proseStyle}>
              The person is not maintaining a wrong belief against evidence. They are perceiving through a filter that the entire group shares — and the filter pre-selects what counts as evidence.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — individual filters synchronising to collective lock */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Porges (2011) — neuroception operating below awareness across populations sharing threat conditions. Easterbrook (1959) — attentional narrowing under arousal. Janis (1972) — groupthink: collective convergence under pressure. Moscovici (1985) — social representations: shared interpretive frameworks below individual awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  M2's State-Dependent Sensory Filtering extended to collective scale — showing that the collective filter is not a cognitive agreement but the physiological consequence of enough nervous systems running the same state-dependent filter simultaneously. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: THREE PERCEPTUAL ARCHITECTURES ─── */}
          <PartDivider label="PART 3" title="Three Collective Perceptual Architectures" color={accent} />

          {/* Concepts 6-8: Three Architectures */}
          <section
            id="three-architectures"
            aria-labelledby="heading-three-architectures"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-three-architectures" style={sectionHeadingStyle(accent)}>
              Three Relationships to the Same Bias
            </h2>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Absent interoceptive access — bias feels like reality.</strong> When the interoceptive substrate was never built, the CLS has only its own output, what RE provides, and the cultural narratives available. The bias feels true — not "believed" but constitutive of what the person experiences as reality. "Those people are less competent." "The system is fair." "I earned my position." The interoceptive substrate that would signal "something doesn't match" is not available. Correction is experienced as regulatory threat. The Identity Filter engages. The source is discredited. The bias hardens. This is typically the largest group — because the system itself produces the conditions that suppress the substrate (<Link href="/framework/f4-rules-regulate#substrate-reproduction" style={linkStyle}>F4</Link>).
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Contested interoceptive access — the body senses mismatch but the group says otherwise.</strong> When the substrate is active but the CLS has learned to distrust its signals, the person oscillates. The ESS generates activation around the mismatch. But the collective narrative reinforces the override: "You're too sensitive." "That's not really happening." "Everyone else is fine with it." These phrases target the contested access directly — discrediting the sensing that would reveal the bias as a construction. This population carries the crack in the system. The substrate is still active. The signals are still arriving. What they need is not more information but conditions safe enough to trust the body's signals over the collective narrative.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Full interoceptive access — bias held as construction.</strong> When all three awareness channels are delivering data, the person can evaluate the bias against felt experience. Can notice the perceptual filter operating. Can hold a collective narrative as a construction rather than absorbing it as reality. Can follow a rule while knowing it is a rule. This configuration is rare under chronic collective conditions — because the rule systems that govern most populations suppress the substrate state that would produce it. Full access is a perceptual capacity. It is not immunity to the system's regulatory pressures — the social cost of naming the construction can be high enough that the person perceives accurately and stays silent.
            </p>
            <p style={proseStyle}>
              The system's stability depends on the distribution. When the majority carry absent access, the system is stable. When the contested-access group grows — when more people sense something is wrong — the system must invest more in discrediting the sensing: more enforcement, more gaslighting of bodily signals, more punishment of those who name the mismatch.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — three architectures and system stability */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Jost & Banaji (1994) — system justification at different positions. Greenwald & Banaji (1995) — implicit bias as perceptual defaults. Kahan — cultural cognition. Festinger (1957) — cognitive dissonance. Herman (1992) — sustained contradiction under coercive conditions. Freire (1970) — conscientização. Main & Goldwyn (1998) — coherent narrative as integration of felt experience with articulated understanding. Fonagy et al. (2002) — mentalization as holding multiple perspectives.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Three collective perceptual architectures mapped through the interoceptive substrate state — showing system justification (absent access), sustained dissonance (contested access), and critical consciousness (full access) as expressions of one variable. The mechanism is not cognitive (bad reasoning) but architectural (the substrate state). The contested group is the structural entry point for change — because the substrate is reachable — but the system is structured to prevent the group from trusting its own signals. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 4: WHY CORRECTION FAILS ───────────── */}
          <PartDivider label="PART 4" title="Why Correction Fails and What Works" color={accent} />

          {/* Concepts 9-10: Correction Failure + Revision Conditions */}
          <section
            id="correction"
            aria-labelledby="heading-correction"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-correction" style={sectionHeadingStyle(accent)}>
              Why Education Fails and What Conditions Allow Revision
            </h2>

            <p style={proseStyle}>
              Standard bias-correction approaches — education, awareness campaigns, diversity training, moral argument — target the CLS. They present information. They make arguments. They ask the person to think differently. The bias is maintained by the interoceptive substrate state — not by the narrative.
            </p>
            <p style={proseStyle}>
              When the substrate is absent, the CLS has no channel that would signal "the bias doesn't match the body's data." The correction is evaluated within the biased framework. It is absorbed, reframed, or rejected — because the mechanism that would produce genuine revision is structurally unavailable.
            </p>
            <p style={proseStyle}>
              Shame-based correction produces a specific failure mode. Shame activates threat. Threat activates defence. The person under shame-based correction does not revise the bias. They perform revision — publicly adjusting language while the perceptual architecture remains intact. Performance of revision is itself a regulation strategy — a new form of false coherence: "I said the right thing" serving the same regulatory function as "I believe the right thing."
            </p>

            <h3 style={conceptHeadingStyle}>Five Conditions for Genuine Perceptual Revision</h3>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>1. Internal safety.</strong> The nervous system must be regulated enough to tolerate the physiological disorientation of being wrong. The person must be in or near Safety & Openness.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>2. Relational safety.</strong> The correction must come from a relational context the person trusts. When the source is perceived as hostile, the Identity Filter engages automatically.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>3. Identity flexibility.</strong> The person must have enough identity space that being wrong about this specific belief does not threaten who they are.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>4. Alternative meaning.</strong> The perceptual system cannot drop a stabilising belief without a replacement that provides enough regulation. An alternative interpretation that settles the activation — while being more accurate — allows the system to update without regulatory collapse.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>5. Gradual exposure.</strong> The perceptual system revises incrementally, not in sudden conversions. Gradual exposure to contradiction — in safe conditions — allows the architecture to update without overwhelming the nervous system's capacity.
            </p>
            <p style={proseStyle}>
              The deepest revision — of internalised emotional biases — requires the relational conditions <Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link> describes: co-regulatory experience that provides what the original developmental environment could not. Perceptual defaults calibrated before language cannot be revised through language. They can be revised through relational experience that provides the safety the original environment lacked.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — why correction fails + five conditions */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Paluck & Green (2009) — meta-analysis: most prejudice-reduction interventions produce attitude change that does not translate to behavioural change. Forscher et al. (2019) — meta-analysis of implicit bias interventions: small effects, poor durability. Devine et al. (2012) — awareness alone insufficient without sustained practice. Edmondson (1999) — psychological safety as prerequisite for learning. Allport (1954) — contact hypothesis: prejudice reduction under specific conditions. Siegel — window of tolerance. Miller & Rollnick — motivational interviewing: non-confrontational change through safety and autonomy.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The structural explanation for why bias-correction programmes consistently underperform: they target the CLS while the bias is maintained by the substrate state. The five conditions as a unified model for perceptual revision — connecting clinical safety research to the bias literature. The consistency with the regulation thread across all twelve frameworks: safety precedes flexibility — at the individual narrative level (F3), at the rule level (F4), at the structural level (F5), and at the perceptual level (F6). This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={accent}
            items={[
              {
                term: "Bias as regulation",
                definition: "The regulatory equation — beliefs maintained because they settle the nervous system, not because they are accurate. The criterion is stability, not accuracy.",
              },
              {
                term: "Seven constructs",
                definition: "The layered architecture: emotional logic, state-dependent perception, identity filter, social reward loop, empathy collapse, update failure, emotional safety threshold. Interaction model: Identity Filter + Empathy Collapse = Update Failure.",
              },
              {
                term: "Three categories by regulatory function",
                definition: "Cognitive (certainty), social (belonging), internalised (identity coherence) — different functions requiring different intervention directions.",
              },
              {
                term: "Six-step formation loop",
                definition: "Uncertainty → fast interpretation → identity fusion → social reinforcement → defence → safety-dependent revision. Self-reinforcing and self-sealing. Scale-invariant architecture.",
              },
              {
                term: "Felt certainty as physiological relief",
                definition: "Threat reduction → relief → 'rightness' → mistaken for accuracy. The mechanism that makes bias invisible to the person running it.",
              },
              {
                term: "Collective state-locked perception",
                definition: "When enough nervous systems share the same chronic state, collective perception locks — pre-cognitive in each individual, self-reinforcing across the group.",
              },
              {
                term: "Three collective perceptual architectures",
                definition: "Absent access: bias feels like reality. Contested: body senses mismatch, group discredits sensing. Full: bias held as construction. System stability depends on the distribution.",
              },
              {
                term: "The substrate as the lock",
                definition: "Correction targets the CLS. The bias is maintained by the substrate state. Education and moral argument miss the level where the bias operates.",
              },
              {
                term: "Five conditions for revision",
                definition: "Internal safety, relational safety, identity flexibility, alternative meaning, gradual exposure. The deepest biases require relational, not cognitive, revision.",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={accent}
            established="F6 established how perception becomes protection — bias as regulation rather than reasoning error, the architecture of perceptual filtering, collective state-locked perception, three perceptual architectures through the interoceptive substrate, and why correction fails when it targets the narrative while the substrate maintains the bias."
            question="When bias becomes rigid and self-protective, and correction is experienced as threat, the system does not simply persist in filtered perception. It seeks stronger stabilisation. The system moves from maintaining the perceptual filter to imposing it — requiring others to share the perception, treating disagreement as threat, managing through escalation."
            nextFramework="F7"
            nextTitle="Domination Regulates"
            nextHref="/framework/f7-domination-regulates"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={accent}
            connections={[
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "M2 maps State-Dependent Sensory Filtering at the individual level. F6 shows what happens when enough nervous systems share the same chronic state — collective perception locks through the same physiological mechanism operating across a population.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "M4 mapped the three coherence forms. F6 gives each its own perceptual treatment — showing how absent, contested, and full interoceptive access produce three structurally different relationships to bias. RE sharpens while ER degrades, producing populations that read accurately without feeling impact.",
              },
              {
                id: "F3: Adult Cognition & False Coherence",
                href: "/framework/f3-false-coherence",
                description: "False coherence is the mechanism. Bias is that mechanism at the perceptual level — the narrative so deeply embedded it is experienced as what the person sees, not what the person believes.",
              },
              {
                id: "F5: The Filter of Worth",
                href: "/framework/f5-worth-hierarchies",
                description: "F5 describes the structural sorting. F6 describes the perceptual mechanism that makes the sorting feel like direct observation of difference. What F5 maps structurally, F6 maps perceptually.",
              },
              {
                id: "F7: Domination Regulates",
                href: "/framework/f7-domination-regulates",
                description: "F6 is perception as protection. F7 is perception as enforcement — what happens when the system moves from maintaining distorted perception to imposing it.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={accent}
            items={[
              { label: "Continue to F7 — when the system moves from filtered perception to enforcement", href: "/framework/f7-domination-regulates", linkText: "F7: Domination Regulates \u2192" },
              { label: "See the state-dependent filtering that operates in each individual", href: "/model/m2-nervous-system-states", linkText: "M2: Nervous System States \u2192" },
              { label: "See the awareness architecture that determines the perceptual relationship", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "Return to F5 — the structural sorting that perception makes invisible", href: "/framework/f5-worth-hierarchies", linkText: "F5: The Filter of Worth \u2192" },
              { label: "See where the repair arc begins", href: "/framework/f8-repairing-awareness", linkText: "F8: Awareness Rebuilds Through Safety \u2192" },
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
            "@id": "https://teg-blue.org/framework/f6-bias-regulates#article",
            headline: "Bias Regulates: How Perception Becomes Protection",
            description:
              "How bias serves regulation rather than reasoning — the architecture of perceptual filtering, collective state-locked perception, three perceptual architectures, and what conditions allow genuine revision. Framework F6 of the TEG-Blue 12-framework system.",
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
              "@id": "https://teg-blue.org/framework/f6-bias-regulates",
            },
            about: [
              { "@type": "Thing", name: "Perceptual Bias" },
              { "@type": "Thing", name: "Collective Perception" },
              { "@type": "Thing", name: "Implicit Bias" },
              { "@type": "Thing", name: "State-Dependent Perception" },
              { "@type": "Thing", name: "Bias Correction" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Thinking, Fast and Slow (Kahneman, 2011)" },
              { "@type": "ScholarlyArticle", name: "Descartes' Error (Damasio, 1994)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "A Theory of Cognitive Dissonance (Festinger, 1957)" },
              { "@type": "ScholarlyArticle", name: "Pedagogy of the Oppressed (Freire, 1970)" },
              { "@type": "ScholarlyArticle", name: "Implicit Social Cognition (Greenwald & Banaji, 1995)" },
            ],
            keywords: [
              "bias regulates",
              "perceptual filtering",
              "implicit bias",
              "state-dependent perception",
              "collective perception",
              "bias correction",
              "system justification",
              "interoceptive substrate",
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
              { name: "F6: Bias Regulates", url: "/framework/f6-bias-regulates" },
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
                question: "Why is bias a regulation strategy rather than a reasoning error?",
                answer:
                  "The nervous system maintains beliefs that reduce activation — below conscious awareness, before reasoning begins. Under threat, pattern recognition becomes rigid certainty. Beliefs that reduce threat are maintained. Beliefs that increase threat are rejected. The criterion is stability, not accuracy. By the time the person is 'thinking about it,' the perceptual system has already delivered a conclusion that feels like observation.",
              },
              {
                question: "Why does bias correction often fail?",
                answer:
                  "Standard approaches — education, awareness campaigns, diversity training — target the CLS with information. But the bias is maintained by the interoceptive substrate state, not the narrative. When the substrate is absent, the CLS has no channel that would signal 'the bias doesn't match.' The correction is evaluated within the biased framework. Shame-based correction activates threat, which activates defence, producing performed revision rather than genuine revision.",
              },
              {
                question: "What conditions allow genuine perceptual revision?",
                answer:
                  "Five conditions: internal safety (regulated enough to tolerate being wrong), relational safety (correction from a trusted source), identity flexibility (being wrong doesn't threaten identity), alternative meaning (a replacement that provides enough regulation), and gradual exposure (incremental revision in safe conditions). The deepest biases — calibrated before language — require relational, not cognitive, revision.",
              },
              {
                question: "What are the three collective perceptual architectures?",
                answer:
                  "Absent interoceptive access: bias feels like reality — the substrate that would signal mismatch was never built. Contested access: the body senses something is wrong but the group discredits the sensing. Full access: bias can be held as a construction. The system's stability depends on the ratio — when the contested group starts trusting their signals, the system destabilises.",
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
              name: "Bias Regulates (F6) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f6-bias-regulates",
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
