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
  { label: "The Common Understanding", href: "#common-understanding", description: "What most people think bias means — and what the nervous system is actually doing." },
  { label: "Core Propositions", href: "#core-propositions", description: "Bias is pattern recognition in service of regulation, not a reasoning error." },
  { label: "Overview", href: "#overview", description: "F5 describes the Filter of Worth. F6 describes what happens when that structure gets absorbed into perception itself." },
  { label: "Bias as Regulation", href: "#bias-as-regulation", description: "If believing something reduces threat, the nervous system keeps believing it — below conscious awareness." },
  { label: "The Bias Architecture", href: "#bias-architecture", description: "Eight interacting constructs: Bias Architecture, Emotional Logic, State-Dependent Perception, and more." },
  { label: "Three Categories of Bias", href: "#three-categories", description: "Cognitive biases provide certainty. Social biases provide belonging. Internalised biases provide identity coherence." },
  { label: "The Formation Loop", href: "#formation-loop", description: "Uncertainty → rapid interpretation → identity fusion → social reinforcement → challenge triggers defence." },
  { label: "Phenomenology of Certainty", href: "#phenomenology-of-certainty", description: "Certainty is physiological stability, not epistemic accuracy. Why bias feels like truth." },
  { label: "The Revision Pathway", href: "#revision-pathway", description: "Shame does not unlearn bias. Safety does. Five specific conditions for bias revision." },
  { label: "What F6 Establishes", href: "#what-f6-establishes", description: "The regulatory reframe, the eight-construct architecture, the formation loop, the revision pathway." },
  { label: "Research Foundations", href: "#research-foundations", description: "Cognitive psychology, social psychology, neuroscience, clinical psychology, implicit cognition research." },
  { label: "Bridge to F7", href: "#bridge-to-f7", description: "When bias becomes rigid, systems seek stronger stabilisation. From filtering perception to enforcing it." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Bias Regulates — How Perception Becomes Protection (F6) | TEG-Blue Research",
  description:
    "How perception becomes protection under threat conditions — bias as nervous system regulation rather than reasoning error — and why it resists correction even in intelligent, well-intentioned people. Framework F6 of 12.",
  keywords: [
    "bias as regulation",
    "bias architecture",
    "state-dependent perception",
    "emotional logic",
    "identity filter",
    "empathy collapse",
    "update failure",
    "emotional safety threshold",
    "felt certainty",
    "bias revision",
    "nervous system regulation",
    "emotional technology",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f6-bias-regulates",
  },
  openGraph: {
    title: "Bias Regulates — How Perception Becomes Protection — F6 Framework | TEG-Blue",
    description:
      "How perception becomes protection under threat conditions. Bias as nervous system regulation rather than reasoning error. The third framework in the collective arc.",
    url: "https://teg-blue.org/framework/f6-bias-regulates",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bias Regulates — TEG-Blue F6",
    description:
      "How perception becomes protection under threat conditions. Bias as nervous system regulation rather than reasoning error.",
  },
  other: {
    'citation_title': 'Bias Regulates: How Perception Becomes Protection',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F6BiasRegulatesPage() {
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
              description="How worth-sorting (F5) becomes perceptual default — through bias operating as nervous system regulation rather than reasoning error — and why the resulting perceptual system resists correction even in intelligent, well-intentioned people. The third framework in the collective arc (F4–F7), explaining why M2 perception capacities produce distorted readings when M1 mode position is chronic."
              group="Collective"
              groupLabel="Collective · F4–F7"
              threadLine="Bias regulates · Cost: Accuracy"
              adjacent={{
                prev: { label: "F5 Worth Hierarchies", href: "/framework/f5-worth-hierarchies" },
                next: { label: "F7 Domination Regulates", href: "/framework/f7-domination-regulates" },
              }}
            />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>
          {/* ─── THE COMMON UNDERSTANDING ──────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Bias",
                commonUnderstanding: "Prejudice, unfairness, a moral failing — something correctable through education, awareness, or shame.",
                definition: "Perceptual regulation — the nervous system filtering information to protect a regulation pathway it depends on. The filtering operates below conscious awareness. It is the mode's scanner running without SEA (Self-Emotional Awareness). If believing something reduces threat, the nervous system keeps believing it — below conscious awareness.",
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
              style={sectionHeadingStyle(SPECTRUM.cobalt)}
            >
              Core Propositions
            </h2>
            <PropositionBox label="FOUNDATIONAL CLAIM">
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={propositionItemStyle}>
                  Bias is not primarily a reasoning error — it is pattern recognition in service of regulation, maintaining beliefs that stabilize the nervous system regardless of accuracy
                </li>
                <li style={propositionItemStyle}>
                  A layered bias architecture of eight interacting constructs produces felt certainty — with a threshold equation predicting when revision is structurally possible
                </li>
                <li style={propositionItemStyle}>
                  Three categories of bias serve three different regulatory functions — certainty, belonging, and identity coherence — each requiring a different intervention direction
                </li>
                <li style={propositionItemStyle}>
                  Bias forms and stabilizes through a six-step self-reinforcing loop, with a scale-invariant architecture paralleling F4's rule internalization and F5's worth loop
                </li>
                <li style={propositionItemStyle}>
                  Certainty is physiological stability, not epistemic accuracy — bias feels like truth because threat reduction produces physiological relief that is mistaken for confirmation
                </li>
                <li style={propositionItemStyle}>
                  Shame does not unlearn bias — safety does. Five conditions for genuine revision, with a testable prediction that safety-based approaches outperform education-based or shame-based correction
                </li>
              </ul>
            </PropositionBox>
          </section>

          {/* ─── OVERVIEW ─────────────────────────────────── */}
          <section
            id="overview"
            aria-labelledby="heading-overview"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-overview"
              style={sectionHeadingStyle(SPECTRUM.cobalt)}
            >
              Overview — The Third Collective Framework
            </h2>

            <p style={proseStyle}>
              F5 explains how rule systems produce worth hierarchies — how safety signals get mistaken for human value, how that mistake formalizes into filters, and how the filters distribute resources, credibility, and protection based on signal access rather than intrinsic worth.
            </p>
            <p style={proseStyle}>
              But worth sorting does not stay visible as a system. When sorting becomes stable and internalized, it stops being experienced as sorting. It becomes perception. Credibility, competence, and trust begin to feel <em>inherent</em> to certain people — not assigned by a filter but simply obvious. The Filter of Worth (F5) disappears from view because it aligns with what feels like direct perception.
            </p>

            <KeyStatement>
              The regulation thread: F1 defines Biological Restoration as the return mechanism. F2 shows what happens when the return is never learned. F3 shows what cognition does in its place. F4 shows how individual patterns scale to collective rule systems. F5 shows what those rules sort — worth. F6 shows how sorting becomes invisible through perception itself. Bias regulates.
            </KeyStatement>

            <p style={proseStyle}>
              The felt sense of certainty is physiological, not epistemic. Bias feels like truth because it stabilizes the nervous system — not because it is accurate. This is F3's false coherence operating at the perceptual level: the same mechanism that makes "I'm not angry — I'm being logical" feel true also makes "those people are just less competent" feel true. The narrative reduces threat. The reduction feels like accuracy. The feeling hardens into perception.
            </p>

            <ExpandableSection title="How This Framework Emerged" type="framework">
              <p style={expandedProseStyle}>
                F6 emerged from recognizing that multiple scientific traditions all describe the same phenomenon from different angles: how perception becomes protection under threat conditions. Cognitive psychology (Kahneman &amp; Tversky, Kruglanski, Kunda) describes heuristics, biases, and motivated reasoning. Social psychology (Festinger, Tajfel &amp; Turner, Jost &amp; Banaji, Haidt) describes dissonance, social identity, and system justification. Neuroscience (Friston, Porges, Damasio, LeDoux) describes predictive coding, neuroception, and somatic markers. Clinical psychology (Beck, Young, Schwartz) describes core beliefs, schemas, and protective parts. Implicit cognition (Greenwald &amp; Banaji) describes implicit bias. Terror management theory (Greenberg, Solomon, Pyszczynski) describes worldview defense under mortality salience.
              </p>
              <p style={expandedProseStyle}>
                The synthesis: recognizing these traditions are observing the same mechanism — bias as nervous system regulation scaled to perception — and organizing them into a unified model with named constructs, formation pathways, and revision conditions.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── BIAS AS REGULATION ───────────────────────── */}
          <section
            id="bias-as-regulation"
            aria-labelledby="heading-bias-as-regulation"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bias-as-regulation" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              Bias as Regulation, Not Reasoning Error
            </h2>

            <p style={proseStyle}>
              Under stable conditions — when the compass is flexible and the nervous system has enough safety — bias functions as rapid pattern recognition. The system efficiently categorizes: this is familiar, this is novel; this person is similar, this person is different. This is adaptive. It is fast, low-cost, and usually accurate enough for the situation.
            </p>
            <p style={proseStyle}>
              Under threat conditions — when the compass is stuck and the nervous system needs stability — the same efficiency becomes rigid certainty. The system is no longer just categorizing. It is <em>regulating</em>. Beliefs that reduce threat are maintained. Beliefs that increase threat are rejected. The criterion is not accuracy. It is stability.
            </p>

            <KeyStatement>
              The regulatory equation: if believing something reduces threat, the nervous system keeps believing it — below conscious awareness. By the time the person is "thinking about it," the perceptual system has already delivered a conclusion that feels like observation.
            </KeyStatement>

            <p style={proseStyle}>
              This connects directly to F3's false coherence. False coherence is the mechanism by which cognition produces stable narratives that serve regulation rather than truth. Bias is that mechanism operating at the perceptual level: the narrative is so deeply embedded that it is no longer experienced as a narrative. It is experienced as what you see.
            </p>
            <p style={proseStyle}>
              This connects to F5's Filter of Worth. The filter distributes resources and credibility based on signal access. Bias is the perceptual system that makes this distribution feel like direct observation of difference rather than a product of sorting. What F5 describes structurally — who gets filtered in and who gets filtered out — F6 describes perceptually: how the filtering becomes invisible because it is absorbed into what feels like seeing.
            </p>

            <div
              style={{
                padding: 20,
                background: hexToRgba(SPECTRUM.cobalt, 0.06),
                borderRadius: 8,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
                marginBottom: 16,
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                Clinical Implication
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                The intervention target shifts. The standard approach — educate people about their biases, show them the data, correct the distortion — treats bias as a reasoning error to be fixed by better reasoning. F6 proposes: bias is regulation. It persists because it stabilizes. Correction requires safety conditions that allow the perceptual system to tolerate the instability of revision — not better arguments. This is F1's principle operating at the perceptual level: restore safety first, then expect flexibility.
              </p>
            </div>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Kunda (1990) — motivated reasoning. Friston — predictive coding, free energy principle. Slovic, Finucane — affect heuristic. Damasio (1994) — somatic marker hypothesis. Kahneman &amp; Tversky — heuristics and biases program. Porges (2011) — neuroception and state-dependent perception.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The explicit unification: bias is regulation, not reasoning error. While motivated reasoning, the affect heuristic, predictive coding, and somatic markers are all documented individually, to our knowledge, no existing framework unifies them under a single formulation that names the regulatory function as primary. The regulatory equation — "if believing this reduces threat, keep believing it" — makes the mechanism explicit and connects it to F3's false coherence and the regulation thread.
              </p>
              <p style={expandedProseStyle}>
                The clinical implication — shifting from correction to safety — is consistent across the entire framework: F1 (restore safety first), F3 (you cannot out-think a regulatory response), F4 (rules-as-regulation changes intervention from dismantling to creating safety), F5 (structural conditions must be part of assessment). F6 extends the same principle to perception.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── BIAS ARCHITECTURE ──────────────────────────── */}
          <section
            id="bias-architecture"
            aria-labelledby="heading-bias-architecture"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bias-architecture" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              Bias Architecture — The Eight Constructs and the Threshold Equation
            </h2>

            <p style={proseStyle}>
              Bias is not a single phenomenon. It is a <strong style={{ color: TEXT.primary }}>layered architecture</strong> — a system of interacting constructs that together produce the felt certainty that people experience as "just seeing clearly."
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Construct</th>
                    <th style={thStyle}>What It Does</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "1. Bias Architecture",
                    "The overarching system: perceptual filters, emotional associations, identity commitments, and reinforcement loops working together.",
                  ]} />
                  <TableRow cells={[
                    "2. Emotional Logic",
                    "Beliefs feel true when they stabilize the nervous system. A belief that reduces threat feels accurate — independent of whether it is.",
                  ]} />
                  <TableRow cells={[
                    "3. State-Dependent Perception",
                    "What you perceive depends on your regulatory state. In Connection, the field broadens. In chronic Protection, it narrows toward threat. In chronic Control, toward management data.",
                  ]} />
                  <TableRow cells={[
                    "4. Identity Filter",
                    "When beliefs fuse with identity structure. \"What I think\" becomes \"who I am.\" Contradiction becomes identity threat, not information.",
                  ]} />
                  <TableRow cells={[
                    "5. Social Reward Loop",
                    "Bias reinforced through belonging. Agreement signals safety. Dissent signals threat. Shared beliefs function as obedience rules (F4).",
                  ]} />
                  <TableRow cells={[
                    "6. Empathy Collapse",
                    "State-dependent shutdown of Emotional Resonance (ER). Reading Emotions (RE) may remain sharp — serving strategy rather than understanding. The person can describe what others feel without being affected by it.",
                  ]} />
                  <TableRow cells={[
                    "7. Update Failure",
                    "When Identity Filter + Empathy Collapse interact, the system loses capacity to revise. Information is filtered out. Sources are discredited. Correction backfires.",
                  ]} />
                  <TableRow cells={[
                    "8. Emotional Safety Threshold",
                    "The minimum safety level required for revision. The equation: Update capacity = (Internal safety + Relational safety) \u2212 (Identity threat + Belonging threat).",
                  ]} />
                </tbody>
              </table>
            </div>

            <KeyStatement>
              The critical interaction: Identity Filter + Empathy Collapse = Update Failure. When beliefs are fused with identity AND the capacity to feel others' experience is offline, the system has no mechanism to update. It is structural inability to revise.
            </KeyStatement>

            <p style={proseStyle}>
              Each construct expresses differently across the four modes. In Connection, all eight constructs are flexible — perception is open, identity is held lightly, empathy is online, revision is possible. In chronic Domination, all eight are locked — perception is rigid, identity is fused with beliefs, empathy is collapsed, revision is experienced as existential threat.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Schema theory (Bartlett, Piaget), associative learning (Pavlov) — Bias Architecture. Damasio (1994), Slovic — Emotional Logic. Porges (2011), Fredrickson, Easterbrook — State-Dependent Perception. Swann, Festinger, Kahan, Greenberg et al. — Identity Filter. Tajfel &amp; Turner, Brewer, Asch, Cialdini — Social Reward Loop. Porges, Haslam, Bandura — Empathy Collapse. Nyhan &amp; Reifler, Ross &amp; Anderson, Brehm — Update Failure. Edmondson (1999), Siegel — Emotional Safety Threshold.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The organization of eight individually documented phenomena into a unified architecture with named constructs, explicit interactions, and a threshold equation. The interaction model is the critical contribution: Identity Filter + Empathy Collapse = Update Failure. This is not just "bias is hard to change." It is a specific mechanism showing <em>why</em> it is hard to change and <em>what conditions</em> would allow it.
              </p>
              <p style={expandedProseStyle}>
                The threshold equation — Update capacity = (Internal safety + Relational safety) &minus; (Identity threat + Belonging threat) — formalizes what clinicians observe intuitively: revision requires net safety exceeding net threat. The gradient expression of all eight constructs across the four modes connects the architecture to the Inner Compass model — making prediction possible.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── THREE CATEGORIES ───────────────────────────── */}
          <section
            id="three-categories"
            aria-labelledby="heading-three-categories"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-three-categories" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              Three Bias Categories by Regulatory Function
            </h2>

            <p style={proseStyle}>
              F6 organizes biases into three categories — not by type (cognitive vs. social) or by domain (political, racial, gender) — but by <strong style={{ color: TEXT.primary }}>what they regulate</strong>:
            </p>

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
                  <TableRow cells={[
                    "Cognitive biases",
                    "Certainty, control",
                    "Safety-to-revise: reduce the cost of being wrong",
                  ]} />
                  <TableRow cells={[
                    "Social and cultural biases",
                    "Belonging, status",
                    "Alternative-belonging: provide group identity that doesn't require shared bias",
                  ]} />
                  <TableRow cells={[
                    "Internalized emotional biases",
                    "Identity coherence",
                    "Relational repair: address the developmental conditions that installed the bias",
                  ]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>
              Cognitive Biases — Certainty and Control
            </h3>
            <p style={proseStyle}>
              Confirmation bias, authority bias, negativity bias, sunk cost fallacy, fundamental attribution error. These biases reduce uncertainty. They provide the nervous system with clear answers in ambiguous situations. Under threat, clear answers — even wrong ones — feel safer than open questions (connecting to F4: tolerance for ambiguity decreases under threat).
            </p>

            <h3 style={conceptHeadingStyle}>
              Social and Cultural Biases — Belonging and Status
            </h3>
            <p style={proseStyle}>
              In-group bias, racism, sexism, ableism, classism, homophobia, xenophobia. These biases maintain group cohesion. They signal who is "us" and who is "them." Under threat, belonging becomes survival-critical. Shared bias provides shared identity — and shared identity provides protection (connecting to F4's obedience rules and F5's safety proxies).
            </p>

            <h3 style={conceptHeadingStyle}>
              Internalized Emotional Biases — Identity Coherence
            </h3>
            <p style={proseStyle}>
              "I'm not good enough." "People can't be trusted." "If I'm not useful, I'll be abandoned." These are not cognitive distortions in the standard clinical sense. They are bias absorbed into the compass itself — perceptual defaults about the self and the world that were calibrated during development (F2) and maintained through false coherence (F3). They feel like observations about reality because they have been running since before the person had language to question them.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Kahneman &amp; Tversky, Kruglanski — cognitive biases. Tajfel &amp; Turner, Jost &amp; Banaji, Sidanius &amp; Pratto — social and cultural biases. Beck — core beliefs. Young — early maladaptive schemas. Bowlby — internal working models. Schwartz — parts and protectors.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                Organizing the entire bias literature into three categories defined by regulatory function rather than by type or domain. The traditional organization — cognitive biases in one chapter, social biases in another, clinical beliefs in a third — treats them as separate phenomena studied by separate disciplines. F6 shows they are the same mechanism — perceptual regulation — serving three different regulatory needs. The organization changes intervention: instead of one correction strategy, there are three intervention directions matched to what the bias is actually regulating.
              </p>
              <p style={expandedProseStyle}>
                The connection to F2's developmental account for internalized emotional biases is clinically significant. These biases are not "irrational beliefs" to be corrected through cognitive restructuring. They are the perceptual system faithfully reproducing what the nervous system learned during development. The compass was calibrated in conditions where "people can't be trusted" was an accurate assessment. The bias persists because the calibration persists — not because the person is thinking incorrectly.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── SIX-STEP FORMATION LOOP ──────────────────── */}
          <section
            id="formation-loop"
            aria-labelledby="heading-formation-loop"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-formation-loop" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              The Six-Step Bias Formation Loop
            </h2>

            <p style={proseStyle}>
              Bias forms and stabilizes through a self-reinforcing loop:
            </p>

            <ol style={orderedListStyle}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Uncertainty or difference detected.</strong> The nervous system encounters something novel, ambiguous, or contradictory. This generates increased alertness — not necessarily threat, but activation.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Fast interpretation selected.</strong> The system pattern-matches against past experience and selects the fastest available interpretation. Binary, complexity-reduced, efficiency-optimized.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Interpretation fuses with identity.</strong> "What I think" becomes "who I am." The interpretation is absorbed into the identity structure. Challenging the interpretation now challenges the person.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Social reinforcement stabilizes.</strong> The group approves of the interpretation. Agreement signals belonging. The belief is socially maintained through the Social Reward Loop.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Challenge triggers defense.</strong> New information contradicting the stabilized interpretation is treated as threat — to identity and to belonging. The source is discredited. The challenge is reframed.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Revision requires safety return.</strong> The loop cannot be broken by information alone. It can only be broken when the nervous system has enough safety to tolerate the instability of being wrong — when the Emotional Safety Threshold conditions are met.
              </li>
            </ol>

            <KeyStatement>
              The loop self-seals: Step 6 (revision requires safety) means that the conditions for breaking the loop are the opposite of the conditions the loop produces (threat, rigidity, identity defense).
            </KeyStatement>

            <p style={proseStyle}>
              This parallels F3's self-reinforcing loop, F4's seven-step rule internalization, and F5's five-step worth loop at a different scale — demonstrating the scale-invariant architecture: threat → narrowing → identity fusion → social reinforcement → defense → safety-dependent revision.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Kahneman &amp; Tversky — heuristics (Steps 1–2). Berger &amp; Calabrese — uncertainty reduction. Kahan — identity-protective cognition (Step 3). Swann — self-consistency motivation. Tajfel &amp; Turner — social identity theory (Step 4). Myers — group polarization. Nyhan &amp; Reifler — backfire effect (Step 5). Brehm — reactance. Edmondson (1999) — psychological safety (Step 6). Siegel — window of tolerance.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                Articulating the six steps as a unified self-reinforcing loop and showing how it self-seals: the conditions for breaking the loop are the opposite of the conditions the loop produces. The scale-invariant parallel to F4's seven-step rule internalization and F5's five-step worth loop demonstrates the architectural consistency: the same mechanism — threat → interpretation → identity → reinforcement → defense — operates at different scales because each is generated by the same nervous system responding to the same safety-threat orientation.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── PHENOMENOLOGY OF CERTAINTY ─────────────────── */}
          <section
            id="phenomenology-of-certainty"
            aria-labelledby="heading-phenomenology-of-certainty"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-why-bias-feels-like-truth" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              Why does bias feel like seeing clearly?
            </h2>

            <h2 id="heading-phenomenology-of-certainty" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              The Phenomenology of Certainty — Why Bias Feels Like Truth
            </h2>

            <p style={proseStyle}>
              The most important question F6 answers is not "what are people biased about?" but "why does bias feel like seeing clearly?"
            </p>
            <p style={proseStyle}>
              The answer is physiological, not epistemic. Certainty feels like accuracy because certainty produces stability — and stability is the nervous system's goal:
            </p>

            <ol style={orderedListStyle}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Stimulus triggers uncertainty.</strong> Novel information, contradiction, ambiguity — anything that disrupts the current model.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Interpretation reduces threat.</strong> The system selects an explanation that restores coherence. What matters is not accuracy but that it reduces the activation.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Threat reduction produces physiological relief.</strong> The body settles. Cortisol decreases. The muscles relax slightly. The nervous system registers: the threat has been managed.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Relief is experienced as "rightness."</strong> The physiological settling feels like confirmation. The interpretation doesn't just <em>seem</em> right — it <em>feels</em> right. The body has endorsed it.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>"Rightness" is mistaken for accuracy.</strong> The felt sense of rightness — which is actually the nervous system reporting threat reduction — is interpreted as epistemic confirmation. "I feel certain" becomes "this is true."
              </li>
            </ol>

            <KeyStatement>
              The person is not stubbornly maintaining a wrong belief. They are experiencing physiological confirmation that the belief is correct. Their body is telling them it is true. Telling them they are wrong contradicts their somatic experience.
            </KeyStatement>

            <h3 style={conceptHeadingStyle}>
              Everyday Expressions of This Mechanism
            </h3>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>What It Feels Like</th>
                    <th style={thStyle}>What It Actually Is</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Certainty",
                    "Physiological stability, not epistemic accuracy",
                  ]} />
                  <TableRow cells={[
                    "Intuition",
                    "Pattern-matching from past experience (which may be biased experience)",
                  ]} />
                  <TableRow cells={[
                    "\"Gut feeling\"",
                    "Somatic marker from emotional conditioning (Damasio), not truth-detection",
                  ]} />
                  <TableRow cells={[
                    "\"Common sense\"",
                    "Normalized cultural bias",
                  ]} />
                  <TableRow cells={[
                    "\"Obviously true\"",
                    "No contradiction with existing model — which says nothing about accuracy",
                  ]} />
                </tbody>
              </table>
            </div>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Damasio (1994) — somatic marker hypothesis. Gigerenzer — ecological rationality, intuition. Schwarz &amp; Clore — affect-as-information. Phenomenological tradition — first-person experience of belief states.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The explicit five-step mapping from stimulus through threat reduction through physiological relief to false epistemic confirmation. While affect-as-information is documented (Schwarz &amp; Clore) and somatic markers are established (Damasio), to our knowledge, no existing framework maps the complete sequence that produces the felt certainty of bias — and connects it to the same mechanism (false coherence) that F3 identified at the individual narrative level.
              </p>
              <p style={expandedProseStyle}>
                The practical implication: if certainty is physiological rather than epistemic, then arguments that target the content of the belief miss the mechanism. The person does not need better information. They need enough safety to tolerate the physiological disorientation of being wrong — which is the loss of the stability their belief was providing. This is why intelligent, well-informed, well-intentioned people maintain biases: their intelligence is a cognitive resource, but the bias is operating at the somatic level.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── REVISION PATHWAY ──────────────────────────── */}
          <section
            id="revision-pathway"
            aria-labelledby="heading-revision-pathway"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-how-biases-revised" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              How can deeply held biases actually be revised?
            </h2>

            <h2 id="heading-revision-pathway" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              The Revision Pathway — Safety Before Correction
            </h2>

            <KeyStatement>
              Shame does not unlearn bias. Safety does.
            </KeyStatement>

            <p style={proseStyle}>
              Shame fails as a bias-correction mechanism — not because it is too harsh, but because it triggers the wrong system. Shame activates threat. Threat activates defense. Defense activates the Identity Filter and the Social Reward Loop. The person under shame-based correction does not revise their bias. They perform revision — publicly adjusting their language while the bias architecture remains intact.
            </p>
            <p style={proseStyle}>
              Shame produces performance, not revision. And performance is itself a regulation strategy. The person who has been shamed into updating their language without updating their perception is running a new form of false coherence: "I said the right thing" serving the same regulatory function as "I believe the right thing."
            </p>

            <h3 style={conceptHeadingStyle}>
              Five Conditions for Genuine Revision
            </h3>

            <ol style={orderedListStyle}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Internal safety.</strong> The nervous system must be regulated enough to tolerate the disorientation of being wrong. If the person is already in a threat state, correction will be processed as attack.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Relational safety.</strong> The correction must come from — or be supported by — a relational context that the person trusts. If the source is perceived as hostile, the Identity Filter engages automatically.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Identity flexibility.</strong> The person must have enough identity space that being wrong about this does not threaten who they are. When beliefs are fused with identity, revision requires identity loosening first.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Alternative meaning.</strong> There must be a replacement interpretation available that provides <em>enough</em> regulation to replace what the old belief provided. The system cannot simply drop a stabilizing belief — it needs something to stabilize with instead.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Gradual exposure.</strong> The perceptual system revises incrementally, not in sudden conversions. Gradual exposure to contradiction — in safe conditions — allows the architecture to update without collapse.
              </li>
            </ol>

            <div
              style={{
                padding: 20,
                background: hexToRgba(SPECTRUM.cobalt, 0.06),
                borderRadius: 8,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
                marginBottom: 16,
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                Testable Prediction
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                Bias-correction programs that rely on education, shame, or moral argument are predicted to fail. Safety-based approaches — which create conditions meeting the five revision requirements — are predicted to succeed. This is empirically testable and differentiates the model from standard diversity-training approaches.
              </p>
            </div>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Edmondson (1999) — psychological safety. Siegel — window of tolerance. Allport (1954) — contact hypothesis (intergroup contact reduces prejudice under specific conditions). Miller &amp; Rollnick — motivational interviewing (non-confrontational change). Gilbert — compassion-focused therapy (safety as prerequisite for change).
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The unified five-condition model applied specifically to bias revision — connecting clinical safety research (Edmondson, Siegel) to the bias literature. The formulation "shame does not unlearn bias — safety does" captures the reframe in a testable principle.
              </p>
              <p style={expandedProseStyle}>
                The connection to the full regulation thread: bias revision follows the same logic as every other revision in the framework — safety must precede flexibility. F1's "restore safety first, then expect capacity." F3's "you cannot out-think a regulatory response." F4's reframe of rules as regulation. F5's structural assessment changing the clinical target. F6 extends the principle to perception: the perceptual system revises under safety conditions, not under correction conditions.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── WHAT F6 ESTABLISHES ───────────────────────── */}
          <section
            id="what-f6-establishes"
            aria-labelledby="heading-what-f6-establishes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-what-f6-establishes" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              What F6 Establishes
            </h2>

            <p style={proseStyle}>
              F6 shows how worth-sorting (F5) becomes perceptual default — through bias operating as nervous system regulation rather than reasoning error — and why the resulting perceptual system resists correction even in intelligent, well-intentioned people.
            </p>

            <h3 style={conceptHeadingStyle}>
              Core Concepts
            </h3>

            <div style={{ overflowX: "auto", marginBottom: 24 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Concept</th>
                    <th style={thStyle}>What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Bias as regulation",
                    "The regulatory equation: if believing something reduces threat, the system keeps believing it. Not a thinking problem — a regulation strategy. Intervention target shifts from correction to safety.",
                  ]} />
                  <TableRow cells={[
                    "Bias Architecture",
                    "Eight interacting constructs. Critical interaction: Identity Filter + Empathy Collapse = Update Failure. Threshold equation formalizes revision conditions.",
                  ]} />
                  <TableRow cells={[
                    "Three categories",
                    "Cognitive biases provide certainty. Social biases provide belonging. Internalized biases provide identity coherence. Different regulatory functions require different interventions.",
                  ]} />
                  <TableRow cells={[
                    "Six-step formation loop",
                    "Uncertainty \u2192 fast interpretation \u2192 identity fusion \u2192 social reinforcement \u2192 defense \u2192 revision requires safety. Self-reinforcing. Scale-invariant parallel to F4 and F5 loops.",
                  ]} />
                  <TableRow cells={[
                    "Phenomenology of certainty",
                    "Certainty is physiological stability, not epistemic accuracy. Threat reduction \u2192 relief \u2192 \"rightness\" \u2192 mistaken for accuracy. Why bias feels like seeing clearly.",
                  ]} />
                  <TableRow cells={[
                    "Revision pathway",
                    "\"Shame does not unlearn bias \u2014 safety does.\" Five conditions: internal safety, relational safety, identity flexibility, alternative meaning, gradual exposure.",
                  ]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>
              Key Formulations
            </h3>

            <ul style={{ paddingLeft: 20, margin: "0 0 24px" }}>
              {[
                "\"Bias is pattern recognition in service of regulation, not a reasoning error\"",
                "\"If believing something reduces threat, the nervous system keeps believing it \u2014 below conscious awareness\"",
                "\"Certainty is physiological stability, not epistemic accuracy\"",
                "\"Shame does not unlearn bias. Safety does.\"",
                "\"Update capacity = (Internal safety + Relational safety) \u2212 (Identity threat + Belonging threat)\"",
                "\"The person is not stubbornly maintaining a wrong belief \u2014 they are experiencing physiological confirmation\"",
                "\"Common sense is normalized cultural bias\"",
                "\"Bias-correction programs that rely on education, shame, or moral argument are predicted to fail\"",
              ].map((f, i) => (
                <li key={i} style={{ ...listItemStyle, fontStyle: "italic" }}>
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* ─── RESEARCH FOUNDATIONS ──────────────────────── */}
          <section
            id="research-foundations"
            aria-labelledby="heading-research-foundations"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-research-foundations" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              Research Foundations
            </h2>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Tradition</th>
                    <th style={thStyle}>Key Contribution</th>
                    <th style={thStyle}>Researchers</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Cognitive Psychology",
                    "Heuristics, biases, motivated reasoning, need for closure",
                    "Kahneman & Tversky; Kunda, 1990; Kruglanski",
                  ]} />
                  <TableRow cells={[
                    "Social Psychology",
                    "Dissonance, social identity, system justification, moral foundations",
                    "Festinger; Tajfel & Turner; Jost & Banaji; Haidt",
                  ]} />
                  <TableRow cells={[
                    "Neuroscience",
                    "Predictive coding, neuroception, somatic markers, threat detection",
                    "Friston; Porges, 2011; Damasio, 1994; LeDoux",
                  ]} />
                  <TableRow cells={[
                    "Clinical Psychology",
                    "Core beliefs, schemas, parts and protectors",
                    "Beck; Young; Schwartz",
                  ]} />
                  <TableRow cells={[
                    "Implicit Cognition",
                    "Implicit bias, implicit associations",
                    "Greenwald & Banaji",
                  ]} />
                  <TableRow cells={[
                    "Terror Management",
                    "Worldview defense under mortality salience",
                    "Greenberg, Solomon, Pyszczynski",
                  ]} />
                  <TableRow cells={[
                    "Psychological Safety",
                    "Safety as prerequisite for learning and revision",
                    "Edmondson, 1999",
                  ]} />
                  <TableRow cells={[
                    "Interpersonal Neurobiology",
                    "Window of tolerance, integration",
                    "Siegel",
                  ]} />
                  <TableRow cells={[
                    "Positive Psychology",
                    "Broaden-and-build theory",
                    "Fredrickson",
                  ]} />
                  <TableRow cells={[
                    "Moral Disengagement",
                    "How systems justify harm",
                    "Bandura",
                  ]} />
                  <TableRow cells={[
                    "Dehumanization Research",
                    "How empathy collapse becomes structural",
                    "Haslam",
                  ]} />
                  <TableRow cells={[
                    "Contact Theory",
                    "Conditions for prejudice reduction",
                    "Allport, 1954",
                  ]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── BRIDGE TO F7 ──────────────────────────────── */}
          <section
            id="bridge-to-f7"
            aria-labelledby="heading-bridge-to-f7"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bridge-to-f7" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              Bridge to F7: When Perception Becomes Enforcement
            </h2>

            <p style={proseStyle}>
              F6 explains how perception becomes protection — how the nervous system maintains beliefs that stabilize, regardless of accuracy — and why correction fails when safety is insufficient.
            </p>
            <p style={proseStyle}>
              But there is a further step. When bias becomes rigid and self-protective, and correction is experienced as threat, systems do not simply persist in distorted perception. They seek stronger stabilization. The system moves from <em>filtering</em> perception to <em>enforcing</em> it.
            </p>
            <p style={proseStyle}>
              When the compass is locked in chronic Control or Domination, distorted perception is not just maintained — it is imposed. The person does not simply believe their version of reality. They require others to share it. Disagreement is not tolerated as difference. It is experienced as threat — and managed through emotional distortion, external regulation, and false coherence hardening the arrangement into "just how things are."
            </p>

            <KeyStatement>
              F6 is perception as protection. F7 is perception as enforcement.
            </KeyStatement>

            <p style={proseStyle}>
              F7 explains how defense becomes strategy, strategy becomes domination, and domination becomes the nervous system's primary regulation source. This is regulation at maximum cost — to others, to the system, and to the person themselves.
            </p>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="f6-bias-regulates" type="framework" />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <section
            id="where-to-go-next"
            aria-labelledby="heading-where-to-go-next"
            style={{ marginBottom: 32 }}
          >
            <h2 id="heading-where-to-go-next" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
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
                  <NavRow label="Read the next collective framework (F7)" href="/framework/f7-domination-regulates" linkText="Domination Regulates \u2192" />
                  <NavRow label="Read the worth-sorting framework (F5)" href="/framework/f5-worth-hierarchies" linkText="Worth Hierarchies Regulate \u2192" />
                  <NavRow label="Read the first collective framework (F4)" href="/framework/f4-rules-regulate" linkText="Rules Regulate \u2192" />
                  <NavRow label="Read the foundational framework (F1)" href="/framework/f1-emotional-gradient" linkText="The Emotional Gradient \u2192" />
                  <NavRow label="Read the calibration framework (F2)" href="/framework/f2-awareness-calibration" linkText="Awareness Teaches Awareness \u2192" />
                  <NavRow label="Read the cognitive maintenance framework (F3)" href="/framework/f3-false-coherence" linkText="Adult Cognition & False Coherence \u2192" />
                  <NavRow label="Explore all 12 frameworks" href="/frameworks-map" linkText="12 Frameworks \u2192" />
                  <NavRow label="Review the source theories" href="/scientific-foundations" linkText="Scientific Foundations \u2192" />
                  <NavRow label="Look up key terms" href="/glossary" linkText="Glossary \u2192" />
                  <NavRow label="See published research" href="/publications" linkText="Publications \u2192" />
                  <NavRow label="Experience the tools" href="https://teg-blue.com/emotional-tools" linkText="Emotional Tools (teg-blue.com) \u2192" external />
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
            "@id": "https://teg-blue.org/framework/f6-bias-regulates#article",
            headline: "Bias Regulates: How Perception Becomes Protection",
            description:
              "How perception becomes protection under threat conditions — bias as nervous system regulation rather than reasoning error — and why it resists correction. Framework F6 of the TEG-Blue 12-framework system.",
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
            datePublished: "2026-03-04",
            dateModified: "2026-03-04",
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
              { "@type": "Thing", name: "Bias as Regulation" },
              { "@type": "Thing", name: "Bias Architecture" },
              { "@type": "Thing", name: "State-Dependent Perception" },
              { "@type": "Thing", name: "Phenomenology of Certainty" },
              { "@type": "Thing", name: "Bias Revision" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Motivated Reasoning (Kunda, 1990)" },
              { "@type": "ScholarlyArticle", name: "Somatic Marker Hypothesis (Damasio, 1994)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Heuristics and Biases (Kahneman & Tversky)" },
              { "@type": "ScholarlyArticle", name: "Social Identity Theory (Tajfel & Turner)" },
              { "@type": "ScholarlyArticle", name: "Psychological Safety (Edmondson, 1999)" },
              { "@type": "ScholarlyArticle", name: "Contact Hypothesis (Allport, 1954)" },
              { "@type": "ScholarlyArticle", name: "Implicit Bias (Greenwald & Banaji)" },
            ],
            keywords: [
              "bias as regulation",
              "bias architecture",
              "state-dependent perception",
              "emotional logic",
              "identity filter",
              "empathy collapse",
              "phenomenology of certainty",
              "bias revision",
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
              { name: "12 Frameworks", url: "/frameworks-map" },
              { name: "F6: Bias Regulates", url: "/framework/f6-bias-regulates" },
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
                question: "What does 'bias regulates' mean in the TEG-Blue system?",
                answer:
                  "F6 proposes that bias is not primarily a reasoning error but pattern recognition in service of nervous system regulation. Under threat conditions, the criterion for maintaining beliefs is not accuracy but stability: if believing something reduces threat, the nervous system keeps believing it. This explains why bias persists even in intelligent, well-intentioned people — it is not a thinking problem but a regulation strategy operating below conscious awareness.",
              },
              {
                question: "What is the Bias Architecture?",
                answer:
                  "The Bias Architecture is a layered system of eight interacting constructs that together produce felt certainty: Bias Architecture (overarching system), Emotional Logic (beliefs feel true when stabilizing), State-Dependent Perception (perception shifts with regulatory state), Identity Filter (beliefs fuse with identity), Social Reward Loop (bias reinforced through belonging), Empathy Collapse (resonance shuts down under threat), Update Failure (system loses capacity to revise), and Emotional Safety Threshold (minimum safety for revision). The critical interaction: Identity Filter + Empathy Collapse = Update Failure.",
              },
              {
                question: "Why does bias feel like truth?",
                answer:
                  "F6 proposes that certainty is physiological stability, not epistemic accuracy. When the nervous system selects an interpretation that reduces threat, the threat reduction produces physiological relief. That relief is experienced as 'rightness' — which is then mistaken for accuracy. The person is not stubbornly maintaining a wrong belief; they are experiencing physiological confirmation. This is why intelligent, well-informed people maintain biases: intelligence is cognitive, but the bias operates at the somatic level.",
              },
              {
                question: "How can bias be revised?",
                answer:
                  "F6's central principle: 'Shame does not unlearn bias — safety does.' Shame triggers threat, which activates defense, which locks the bias architecture. Five conditions enable genuine revision: internal safety (regulated enough to tolerate being wrong), relational safety (trusted source), identity flexibility (being wrong doesn't threaten who you are), alternative meaning (replacement interpretation that also stabilizes), and gradual exposure (incremental contradiction within tolerance).",
              },
              {
                question: "How does F6 connect to the rest of the TEG-Blue system?",
                answer:
                  "F6 is the third framework in the collective arc (F4–F7). The regulation thread: F3's false coherence operates at the narrative level, F4 absorbs it into rules, F5 absorbs it into worth sorting, and F6 absorbs it into perception itself. Each scale makes the substitute harder to see because each feels more like 'just how things are.' F6 extends the core principle — restore safety first, then expect flexibility — to the perceptual system. F7 then explains what happens when distorted perception is not just maintained but enforced.",
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
              name: "Bias as Regulation (F6) — TEG-Blue Research",
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


const orderedListStyle = {
  paddingLeft: 20,
  margin: "0 0 16px",
};

const listItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
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

function KeyStatement({ children }) {
  return (
    <blockquote
      style={{
        padding: "16px 20px",
        margin: "0 0 16px",
        background: hexToRgba(SPECTRUM.cobalt, 0.06),
        borderRadius: 8,
        borderLeft: `4px solid ${SPECTRUM.cobalt}`,
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

