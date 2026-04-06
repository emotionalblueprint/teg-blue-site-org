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
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F4 makes about how individual patterns scale to collective rule systems." },
  { label: "How Individual Patterns Consolidate", href: "#consolidation", description: "Three mechanisms drive scaling: false coherence absorbs rules, emotional distortion makes violation feel like attack, external regulation makes compliance a need." },
  { label: "What Rules Are at the Biological Level", href: "#rules-biological", description: "A rule is material the CLS absorbs because it stabilises the chronic state." },
  { label: "From External Enforcement to Invisible Truth", href: "#internalisation", description: "Seven steps from imposed rule to experienced reality." },
  { label: "Six Regulatory Functions", href: "#six-functions", description: "Roles, obedience, performance, dominance, punishment, entitlement — each defined by what the nervous system gets." },
  { label: "How Rules Set the Next Generation's Substrate", href: "#substrate-reproduction", description: "Rules reproduce the biological conditions that make the rules feel true." },
  { label: "How Populations Relate to Rules", href: "#three-coherence-forms", description: "Absent, contested, and full interoceptive access produce different relationships to the same rule system." },
  { label: "Institutions on Cognitive Data Alone", href: "#re-only-institutions", description: "When the collective reads accurately, resonates with nothing, and cannot feel its own impact." },
  { label: "How Rules Escalate", href: "#escalation", description: "Four stages paralleling the nervous system gradient at collective scale." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Bridge to F5", href: "#bridge", description: "Rules organise behaviour. They also sort who gets the conditions for restoration." },
  { label: "Connections Map", href: "#connections", description: "How F4 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Rules Regulate (F4) | TEG-Blue Research",
  description:
    "How individual nervous system patterns scale to collective rule systems — three scaling mechanisms, the internalisation loop, six regulatory functions, and how rules reproduce the substrate state across generations. Framework F4 of the TEG-Blue 12-framework system.",
  keywords: [
    "rules regulate",
    "collective regulation",
    "rule internalisation",
    "nervous system regulation",
    "false coherence",
    "collective rule systems",
    "regulatory functions",
    "interoceptive substrate",
    "conformity",
    "obedience",
    "system justification",
    "authoritarian escalation",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f4-rules-regulate",
  },
  openGraph: {
    title: "Rules Regulate — F4 Framework | TEG-Blue",
    description:
      "How individual nervous system patterns scale to collective rule systems — the first framework in the collective arc. Framework F4 of 12.",
    url: "https://teg-blue.org/framework/f4-rules-regulate",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rules Regulate — TEG-Blue F4",
    description:
      "How individual nervous system patterns consolidate into collective rule systems — and how rules reproduce the biological conditions that make them feel true.",
  },
  other: {
    'citation_title': 'Rules Regulate',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F4RulesRegulatePage() {
  const accent = SPECTRUM.cobalt;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f4-rules-regulate" />

      <PageLayout
        header={
          <FrameworkHero
            badge="FRAMEWORK F4"
            title="Rules Regulate"
            subtitle="How Individual Patterns Scale to Collective Rule Systems"
            description="F3 completed the individual arc: the biological return was never learned, the CLS constructed a narrative substitute, and the substitute extended into relationships. F4 asks: what happens when enough people in a system are running those same mechanisms? The answer is collective rule systems — shared narratives that reduce uncertainty, manage belonging, and enforce conformity. The regulatory function is the same. The scale changes."
            group="Collective"
            groupLabel="Collective Arc · F4–F7"
            threadLine="Rules regulate — collective rule compliance as restoration substitute. Scale: social systems. Cost: flexibility"
            informsModels={[
              { label: "M2", href: "/model/m2-nervous-system-states" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
            ]}
            adjacent={{
              prev: { label: "F3 Adult Cognition & False Coherence", href: "/framework/f3-false-coherence" },
              next: { label: "F5 The Filter of Worth", href: "/framework/f5-filter-of-worth" },
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
              description: "The CLS generating narrative that replaces the ESS's physiological signals — a restoration substitute operating through cognition. Each chronic state produces its own characteristic narrative.",
              href: "/framework/f3-false-coherence#false-coherence",
            },
            {
              concept: "Emotional Distortion",
              framework: "F3",
              description: "Internal physiological activation misattributed as external threat when the interoceptive channel (SEA) is absent.",
              href: "/framework/f3-false-coherence#emotional-distortion",
            },
            {
              concept: "External Regulation",
              framework: "F3",
              description: "The nervous system recruiting others to perform the regulatory function it cannot perform internally — fusion, distance, management, or subjugation depending on the chronic state.",
              href: "/framework/f3-false-coherence#restoration-substitutes",
            },
          ]} />

          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Rules",
                commonUnderstanding: "Rational agreements made by reasonable people to organise society — social contracts that can be evaluated and changed through discussion.",
                definition: "Material the CLS absorbs because it stabilises the chronic state. The CLS cannot distinguish between a rule that is accurate and a rule that regulates. A rule that confirms the person's chronic state is absorbed without friction — it feels true because it stabilises.",
              },
              {
                title: "Conformity",
                commonUnderstanding: "Weakness — giving in to peer pressure, lacking the courage to be different.",
                definition: "A physiological event. Matching the group reduces unpredictability. The ventral vagal system registers group alignment as relational safety. The nervous system rewards sameness with reduced activation. Deviation signals unpredictability and triggers neuroception of threat.",
              },
              {
                title: "Common sense",
                commonUnderstanding: "Obvious truths that everyone can see — facts so basic they don't need justification.",
                definition: "Rules that have completed the internalisation loop — from external enforcement through self-policing to experienced truth. They are no longer perceived as rules. Questioning them activates the same threat response that installed them.",
              },
            ]}
          />

          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  When enough nervous systems carrying chronic states inhabit the same system, individual patterns consolidate into collective rule systems without deliberate design — through false coherence absorbing rules, emotional distortion making violation feel like attack, and external regulation making compliance a nervous system need
                </li>
                <li style={propositionItemStyle}>
                  A rule, at the biological level, is material the CLS absorbs because it stabilises — the same mechanism as individual false coherence, operating on collective material
                </li>
                <li style={propositionItemStyle}>
                  Rules move from external enforcement to experienced truth through a seven-step internalisation loop — and the loop is self-sealing: questioning the rules activates the threat that created them
                </li>
                <li style={propositionItemStyle}>
                  Six rule systems emerge from collective regulation needs — roles, obedience, performance, dominance, punishment, entitlement — each defined by its regulatory function, not its content
                </li>
                <li style={propositionItemStyle}>
                  Rule systems reproduce the interoceptive substrate state across generations — producing the caregiver profiles that produce the offspring substrate states that make the rules feel true
                </li>
                <li style={propositionItemStyle}>
                  Three collective coherence forms — absent, contested, and full interoceptive access — explain why the same rule system produces different relationships in different populations
                </li>
                <li style={propositionItemStyle}>
                  When collective threat increases, rule systems escalate through four stages paralleling the nervous system gradient — predictable and interruptible
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: HOW INDIVIDUAL PATTERNS SCALE ──── */}
          <PartDivider label="PART 1" title="How Individual Patterns Scale" color={accent} />

          {/* Concept 0: How Individual False Coherence Consolidates */}
          <section
            id="consolidation"
            aria-labelledby="heading-consolidation"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-consolidation" style={sectionHeadingStyle(accent)}>
              How Individual Patterns Consolidate Into Shared Narratives
            </h2>

            <p style={proseStyle}>
              The scaling does not require deliberate design. It requires proximity. When enough nervous systems in a group carry chronic states — when each person's CLS is constructing narrative from available data without the interoceptive channel to the body's physiological signals — the individual narratives begin to consolidate. Shared explanations emerge. Shared rules follow.
            </p>
            <p style={proseStyle}>
              Three mechanisms drive the consolidation. Each was established in <Link href="/framework/f3-false-coherence" style={linkStyle}>F3</Link> as an individual process. Each operates identically at collective scale.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>False coherence absorbs rules as truth.</strong> The CLS that maintains individual false coherence — "I'm the responsible one," "I don't do emotions" — absorbs collective narratives that confirm the chronic state. "Hard work is the only thing that matters." "Emotions are unprofessional." These are not evaluated as propositions. They are absorbed as regulatory material — narratives that stabilise the chronic state by confirming it from the outside. The individual lock and the collective lock reinforce each other.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Emotional distortion makes rule-violation feel like personal attack.</strong> When a person in a position of authority runs emotional distortion — when internal activation is misattributed as external threat — everyone around them adapts. The group learns: this person's discomfort is your emergency. At collective scale, questioning the rules activates the same misattribution in multiple people simultaneously. The challenge is experienced not as a question but as an attack.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>External regulation makes rule-compliance a nervous system need.</strong> When multiple people in a system are running external regulation — when each person's stability depends on others' compliance, approval, distance, or submission — the system develops structures to manage these competing regulation needs. Rules emerge as the collective equivalent of false coherence: shared narratives that stabilise the group by reducing unpredictability.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — three individual mechanisms scaling to collective */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Bourdieu (1977) — habitus as embodied social structure reproduced below awareness. Bowen — family systems theory: anxiety propagating through systems, producing rule-based stability. Porges (2011) — nervous system synchronisation under shared threat conditions. Goffman (1959) — dramaturgical performance and social maintenance through unspoken rules.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The specific mechanism by which individual nervous system patterns become collective structures — traced through three named processes (false coherence absorption, emotional distortion, external regulation) that F3 established at the individual level. The existing literature describes the phenomenon but does not trace the pathway from individual capacity gaps through the specific mechanisms to collective rule formation. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 1: What Rules Are at the Biological Level */}
          <section
            id="rules-biological"
            aria-labelledby="heading-rules-biological"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-rules-biological" style={sectionHeadingStyle(accent)}>
              What Rules Are at the Biological Level
            </h2>

            <p style={proseStyle}>
              A rule, at the biological level, is material the CLS absorbs because it stabilises the chronic state. The CLS does not have two modes — one for internal narrative and one for social participation. It has one mode: constructing coherent accounts from the data available to it. When the interoceptive channel to the ESS is absent, the CLS constructs internal coherence from its own output. It also constructs social coherence from the cultural narratives available to it. Both operations serve the same regulatory function: stability through narrative.
            </p>
            <p style={proseStyle}>
              This means the CLS cannot distinguish between a rule that is accurate and a rule that regulates. A social rule that confirms the chronic state is absorbed without friction — it feels true because it stabilises. A social rule that contradicts the chronic state is resisted or ignored — not because the person evaluated it and disagreed, but because absorbing it would threaten the regulatory structure.
            </p>
            <p style={proseStyle}>
              The mechanism is the same as F3's signal replacement, operating on collective material. The cultural rule "boys don't cry" and the individual false coherence "I don't do emotions" are the same operation — the CLS building stability from available data without the interoceptive channel to check whether the narrative matches the body's state.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — individual and collective false coherence as same operation */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Bernstein — pedagogic codes: invisible rules governing what can be said, thought, and known within a social system. Haidt (2001) — moral foundations as intuitive rules that feel like direct perception. Jost & Banaji (1994) — system justification: the psychological tendency to defend existing social arrangements because they provide regulatory stability.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Rules reframed as regulatory material rather than social contracts — absorbed by the same CLS mechanism that maintains individual false coherence. The functional definition: a rule is what the CLS absorbs because it stabilises, regardless of whether it is accurate. This changes the intervention logic: the question is not whether the rule is rational but what regulatory function the rule serves and what conditions would allow the nervous system to release it. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 2: From External Enforcement to Invisible Truth */}
          <section
            id="internalisation"
            aria-labelledby="heading-internalisation"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-internalisation" style={sectionHeadingStyle(accent)}>
              From External Enforcement to Invisible Truth
            </h2>

            <p style={proseStyle}>
              Under perceived threat, a seven-step mechanism moves rules from external enforcement to experienced truth:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 1:</strong> Attention narrows toward threat and social-risk cues. Cortisol elevation narrows the perceptual field. Social cues that signal risk — disapproval, exclusion signals, authority displeasure — receive disproportionate processing weight.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 2:</strong> Tolerance for ambiguity decreases. Uncertainty activates the same threat circuits as physical danger. Clear answers — even inaccurate ones — settle the activation. The CLS prioritises coherence over accuracy.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 3:</strong> Deviation becomes costly. Standing out risks exclusion. The group begins to treat variation as a threat signal.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 4:</strong> Conformity becomes protective. Matching the group reduces unpredictability. The ventral vagal system registers group alignment as relational safety.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 5:</strong> Compliance receives belonging signals. The group rewards rule-adherence with approval, inclusion, reduced scrutiny. Belonging signals activate oxytocin pathways and reduce cortisol. Exclusion signals activate the same neural circuits as physical pain.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 6:</strong> External enforcement gives way to self-policing. The person no longer needs someone else to enforce the rule. Shame, guilt, and fear of exclusion become the self-policing engine.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 7:</strong> Rules become invisible. Through repetition, rules transition from external enforcement through self-policing to experienced truth. They are no longer perceived as rules. They are "how things are." "Common sense." "Just the way it works."
            </p>
            <p style={proseStyle}>
              The loop closes at Step 7. Rules that have become invisible regulate the activation that would arise from examining them. Questioning the rules recreates the original threat — because the rules are now part of the collective false coherence. The mechanism that installed the rules is the mechanism that protects them from examination.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: animated — seven-step loop with self-sealing closure */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Milgram (1963) — obedience to authority under conditions that override individual judgment. Asch (1951) — conformity under group pressure even when the group is visibly wrong. Zimbardo (1971) — situational power of social systems to override individual disposition. Greenberg, Pyszczynski & Solomon — Terror Management Theory: mortality salience increases conformity and rule-adherence. Eisenberger, Lieberman & Williams (2003) — social exclusion activating the same neural circuit as physical pain.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The full pathway from individual nervous system activation through collective rule invisibility, with the self-sealing closure: questioning rules activates the same threat response that created them. The existing literature documents each step independently. No existing model traces the complete pathway from individual threat activation through seven steps to collective rule invisibility and back to the threat activation that prevents examination. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: WHAT RULE SYSTEMS PRODUCE ──────── */}
          <PartDivider label="PART 2" title="What Rule Systems Produce" color={accent} />

          {/* Concept 3: Six Regulatory Functions */}
          <section
            id="six-functions"
            aria-labelledby="heading-six-functions"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-six-functions" style={sectionHeadingStyle(accent)}>
              Six Regulatory Functions That Rule Systems Serve
            </h2>

            <p style={proseStyle}>
              Six categories of rules consistently emerge from the internalisation mechanism. Each is defined by the regulatory function it serves — not by its content.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Rule System</th>
                    <th style={thStyle}>Regulatory Function</th>
                    <th style={thStyle}>What the Nervous System Gets</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Roles", "Identity stabilisation", "A fixed position that secures belonging"]} />
                  <TableRow cells={["Obedience", "Belonging protection", "Reduced threat through compliance"]} />
                  <TableRow cells={["Performance", "Worth verification", "Validation signals that settle activation"]} />
                  <TableRow cells={["Dominance", "Power establishment", "Control that replaces internal regulation"]} />
                  <TableRow cells={["Punishment", "Boundary enforcement", "Pain as compliance mechanism"]} />
                  <TableRow cells={["Entitlement", "Resource allocation", "Guaranteed access to regulation sources"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Role rules</strong> assign fixed identity positions — The Helper, The Achiever, The Strong One. These are patterns in which awareness capacities developed or did not develop based on early relational conditions (<Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link>), then became chronic and were absorbed as identity through false coherence (<Link href="/framework/f3-false-coherence" style={linkStyle}>F3</Link>). The rule system formalises this at collective scale.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Obedience rules</strong> teach that safety comes from compliance. The nervous system under sustained activation prefers the certainty of compliance to the vulnerability of independent evaluation — because independent evaluation requires tolerating ambiguity, and ambiguity activates the same threat circuits.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Performance rules</strong> teach that worth must be earned and displayed. Performing produces validation signals — approval, recognition, status markers — and those signals activate oxytocin pathways and reduce cortisol.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Dominance rules</strong> teach that strength means control and vulnerability means weakness. This includes what appears as neutrality in asymmetric conditions — when "treating everyone the same" in unequal conditions protects the side with more power, the neutrality functions as a dominance rule.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Punishment rules</strong> teach that pain is a legitimate corrective tool. When internalised, the person whose internal activation is misattributed as external attack cannot distinguish between someone setting a boundary and someone causing harm. Punishment rules normalise this collapse at collective scale.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Entitlement rules</strong> teach that some people are inherently owed more. At the nervous system level, entitlement operates as external regulation — "others must absorb my activation so I can stay stable."
            </p>
            <p style={proseStyle}>
              Each rule system expresses differently across the gradient. In Safety & Openness, rules are held with flexibility. In chronic Threat & Defence, rules are rigid — deviation activates the threat response. In chronic Strategy & Management, rules are selectively enforced to maintain predictability. In chronic Power & Dominance, rules are absolute — violation is met with escalation.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — six rule systems by regulatory function */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Bourdieu (1977) — habitus and social reproduction through embodied rule systems. Goffman (1959) — impression management and emotional labour as rule-governed performance. Milgram (1963) — obedience as structural, not dispositional. Sidanius & Pratto (1999) — Social Dominance Theory: hierarchical rule systems maintaining group-based inequality. Kohut (1977), Kernberg (1975) — narcissistic entitlement as a protective regulatory strategy. Young, Klosko & Weishaar (2003) — early maladaptive schemas as internalised rule structures.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Six rule domains organised by regulatory function — what each does for the nervous system, not what it prescribes. The gradient expression connects collective rule dynamics to the nervous system states <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link> maps. The taxonomy is proposed as exhaustive at the regulatory level: these six categories cover the basic regulatory needs of identity, belonging, worth, power, boundaries, and resources. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 4: How Rules Set the Next Generation's Substrate */}
          <section
            id="substrate-reproduction"
            aria-labelledby="heading-substrate-reproduction"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-substrate-reproduction" style={sectionHeadingStyle(accent)}>
              How Rules Set the Next Generation's Interoceptive Substrate
            </h2>

            <p style={proseStyle}>
              Rules do not only regulate behaviour. They set the state of the interoceptive substrate across the population they govern.
            </p>
            <p style={proseStyle}>
              The interoceptive substrate develops through relational experience (<Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link>). What the caregiver could hold is what the child's substrate learns to process. Rule systems operate on this mechanism at population scale. A rule system that teaches "logic over emotion" — that rewards cognitive override and punishes emotional expression — produces caregivers whose interoceptive substrates are suppressed. Those caregivers cannot hold what they cannot feel. Their children's substrates develop in the absence of the co-regulation that would build the channels. The rule does not directly suppress the substrate. It produces the caregiver profile that produces the substrate state.
            </p>
            <p style={proseStyle}>
              Three rule-to-substrate pathways, mapping to <Link href="/framework/f2-awareness-calibration#disruption-conditions" style={linkStyle}>F2's three disruption conditions</Link>:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Rules that block emotional expression → Condition 3 at population scale.</strong> "Don't cry." "Be strong." "Emotions are weakness." These produce caregivers who override their own signals. The child encounters a caregiver who cannot feel — and the substrate is never built. The population carries absent interoceptive access.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Rules that contradict emotional experience → Condition 2 at population scale.</strong> "You're overreacting." "That's not what happened." These produce caregivers who override the child's signals. The substrate is active but SEA is contradicted. The population carries contested interoceptive access.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Rules that make emotional availability unpredictable → Condition 1 at population scale.</strong> Rules that shift depending on the authority's state produce caregivers whose availability is unreliable. The substrate develops partially, never consolidates. The population carries unstable interoceptive access.
            </p>
            <p style={proseStyle}>
              The rule system is a mechanism for reproducing the substrate state across generations. The rules that a generation absorbs determine which caregivers that generation produces. Which caregivers determine which substrates the next generation builds. The substrate state determines which rules that generation absorbs — because the CLS builds from whatever data it has, and the rules that feel true are the rules that match the substrate state.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — generational loop: rules → caregivers → substrates → rules */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Schore (2001) — right-brain-to-right-brain attunement: caregiver regulation as the mechanism through which neural architecture develops. Fonagy et al. (2002) — mentalization capacity as a product of relational environment, transmitted intergenerationally. Meaney (2001) — epigenetic programming: maternal care behaviour altering offspring stress-response architecture. Bourdieu (1977) — cultural reproduction: habitus transmitted through practice, not instruction.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The specific pathway from collective rules through caregiver profiles to offspring substrate state — traced through the three developmental disruption conditions operating at population scale. The contribution is the closed loop: rules produce the caregiver substrate state that produces the offspring substrate state that makes the rules feel true to the next generation. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 5: How Populations Relate to Rules */}
          <section
            id="three-coherence-forms"
            aria-labelledby="heading-three-coherence-forms"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-three-coherence-forms" style={sectionHeadingStyle(accent)}>
              How Different Populations Relate to the Same Rule System
            </h2>

            <p style={proseStyle}>
              Not everyone relates to the rules the same way. The relationship depends on the state of the interoceptive substrate.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Absent interoceptive access — rules feel like reality.</strong> When the interoceptive substrate was never built, the CLS has only its own output, what RE provides, and the cultural narratives available. The rules are absorbed into the same regulatory structure as individual false coherence. They feel true — not "believed" in the sense of a proposition the person could examine, but true in the sense that they constitute what the person experiences as reality. Correction is experienced as regulatory threat. This is typically the largest group in any established rule system.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Contested interoceptive access — something feels wrong but the group says otherwise.</strong> When the substrate is active but the CLS has learned to distrust its signals, the person oscillates. The body signals one thing. The rules say another. The system works to maintain this oscillation: "you're too sensitive," "that's not really happening," "everyone else is fine with it." These phrases target the contested access directly — they discredit the sensing that would reveal the rules as constructions.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Full interoceptive access — rules held as constructions.</strong> When all three awareness channels are delivering data, the rules can be held as what they are: collective regulatory material. The person can follow a rule while knowing it is a rule. This configuration is rare under chronic collective conditions — because the rule system itself suppresses the substrate state that would produce it.
            </p>
            <p style={proseStyle}>
              The stability of a rule system depends on the ratio of these three groups. When the majority carry absent access, the system is stable. When the contested-access group grows, the system must invest more in discrediting the sensing: more enforcement, more gaslighting of bodily signals, more punishment of those who name the mismatch. What the contested group needs is not more information but conditions safe enough to trust the body's signals over the collective narrative.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — three groups and system stability */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Jost & Banaji (1994) — system justification: why people defend systems that disadvantage them. Festinger (1957) — cognitive dissonance: the uncomfortable state when two cognitions conflict. Freire (1970) — conscientização: critical consciousness as recognising social structures as constructions. Kahneman (2011) — coherence-seeking: the CLS builds plausible stories regardless of completeness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Three collective coherence forms mapped through the interoceptive substrate state — showing them as three expressions of one variable. Absent access produces system justification. Contested access produces dissonance. Full access produces the capacity for critical evaluation. The substrate state determines the relationship to the rule. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 6: RE-Only Institutions */}
          <section
            id="re-only-institutions"
            aria-labelledby="heading-re-only-institutions"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-re-only-institutions" style={sectionHeadingStyle(accent)}>
              When Institutions Run on Cognitive Data Alone
            </h2>

            <p style={proseStyle}>
              When enough people in a system carry sharp Interpersonal Affect Perception (RE) with absent Affective Resonance (ER) and absent Interoceptive Self-Awareness (SEA), the collective operates through cognitive data without somatic data. The institution reads. It does not feel.
            </p>
            <p style={proseStyle}>
              RE — the CLS capacity that identifies what others are feeling through observable signals — survives and sharpens under chronic activation (<Link href="/model/m4-awareness-capacities" style={linkStyle}>M4</Link>). It redirects from understanding to strategy, from connection to management, from accuracy to leverage. But it remains precise. The institution staffed by people running redirected RE can read the room, track compliance, identify vulnerability, and manage performance with accuracy.
            </p>
            <p style={proseStyle}>
              ER — the ESS capacity that resonates with others' states in the body — degrades first because it places the greatest demands on the interoceptive substrate. When ER is offline across the institution, others' distress registers as information about the environment — a data point to be managed — not as felt experience that produces a somatic response in the perceiver.
            </p>
            <p style={proseStyle}>
              SEA is absent. The institution's members do not know what their own nervous systems are doing. The activation generated by the institution's impact on others — the shame, guilt, and remorse that would arise from harming — fires in the ESS and has no channel to reach the CLS. The institution operates without the signals that would produce course correction.
            </p>
            <p style={proseStyle}>
              The result is institutional logic that is genuinely rational — clear, precise, internally consistent — and not biologically accurate. The logic is constructed from RE data alone: what people display, how they comply, what the metrics show. The somatic data — what the institution's impact actually does to the nervous systems it touches — is not part of the information set. The decision-making process is sound within the data set it has access to. The data set is incomplete.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — RE-only institutional architecture */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Koenigs et al. (2007) — vmPFC suppression and utilitarian decision-making: precise, consequentialist, missing the felt dimension. Bazerman & Tenbrunsel (2011) — ethical blind spots in organisations: systematic inability to recognise ethical dimensions. Porges (2011) — collective neuroception: institutions composed of nervous systems running threat-based neuroception produce collective perceptual environments that filter out safety signals.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The structural explanation for rational-but-harmful institutional decision-making — traced through the awareness architecture. When the decision-making layer operates through RE alone — reading accurately, resonating with nothing, and disconnected from its own activation — the institution processes others' experience as data rather than felt impact. The logic is not flawed. The information set is incomplete. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: HOW RULES ESCALATE ──────────────── */}
          <PartDivider label="PART 3" title="How Rules Escalate" color={accent} />

          {/* Concept 7: How Rules Tighten */}
          <section
            id="escalation"
            aria-labelledby="heading-escalation"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-escalation" style={sectionHeadingStyle(accent)}>
              How Rules Tighten When Collective Threat Increases
            </h2>

            <p style={proseStyle}>
              When threat persists or intensifies across a population, rule systems escalate through identifiable stages. The escalation parallels the four nervous system states (<Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link>) operating at collective scale:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Stage</th>
                    <th style={thStyle}>What the Collective Does</th>
                    <th style={thStyle}>Rule Expression</th>
                    <th style={thStyle}>Parallel</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Initial", "Collective activation is low. State flexibility is available.", "Rules are informal. Deviation is tolerated. Flexibility is possible.", "Safety & Openness"]} />
                  <TableRow cells={["Intermediate", "Collective activation increases. Tolerance narrows.", "Rules proliferate. Deviation becomes costly. Moralisation begins — rule-breaking framed as character failure.", "Threat & Defence"]} />
                  <TableRow cells={["Advanced", "The collective CLS is recruited into threat organisation.", "Reduced tolerance. Surveillance increases. Obedience is framed as virtue.", "Strategy & Management"]} />
                  <TableRow cells={["Extreme", "Collective nervous system at maximum threat.", "Rule-breaking treated as existential threat. Enforcement becomes violent. Elimination of deviants normalised.", "Power & Dominance"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              The same physiological processes that shift an individual from Safety & Openness toward Power & Dominance — cortisol elevation, amygdala sensitisation, prefrontal narrowing, ventral vagal withdrawal — operate in the individuals who compose the group. When enough shift simultaneously, the collective system shifts.
            </p>
            <p style={proseStyle}>
              A population whose collective nervous system has been running at elevated activation — through war, economic collapse, displacement, pandemic — produces rule systems that tighten along this gradient. The content of the rules varies by culture. The escalation pattern does not.
            </p>
            <p style={proseStyle}>
              Each stage is identifiable and each is interruptible. The intervention logic follows the same principle across all twelve frameworks: restore safety conditions first, then the nervous system can release the regulatory strategy it no longer needs. At collective scale: reduce the activation that drives the escalation, and the rule system can loosen. Attempting to loosen rules while the collective activation remains elevated fails — because the rules are performing the regulatory function the population's nervous systems require.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — four escalation stages mapped to gradient */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Foundations" type="framework">
                <p style={expandedProseStyle}>
                  Altemeyer (1996) — right-wing authoritarianism as a response to perceived threat. Adorno et al. (1950) — the authoritarian personality and collective threat conditions. Greenberg, Pyszczynski & Solomon — Terror Management Theory: existential threat increases worldview defence and punishment of deviants. Staub (1989) — the roots of evil: collective threat producing increasingly extreme group behaviour through identifiable stages.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Rule escalation framed as the nervous system gradient operating at collective scale — each stage mapping to a specific collective physiological configuration. The parallel enables prediction (where is this system on the gradient?) and intervention (what safety conditions would allow de-escalation?). This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={accent}
            items={[
              {
                term: "Three-mechanism scaling",
                definition: "False coherence absorbs rules as truth. Emotional distortion makes rule-violation feel like attack. External regulation makes compliance a nervous system need. Collective patterns emerge from below, without deliberate design.",
              },
              {
                term: "Rules as regulatory material",
                definition: "The CLS absorbs rules that stabilise, not rules that are accurate. The CLS cannot distinguish between the two. A rule is what the CLS absorbs because it stabilises.",
              },
              {
                term: "The internalisation loop",
                definition: "Seven steps from external enforcement to invisible truth. Self-sealing: questioning the rules activates the threat that created them.",
              },
              {
                term: "Six regulatory functions",
                definition: "Roles (identity), Obedience (belonging), Performance (worth), Dominance (power), Punishment (boundaries), Entitlement (resources). Proposed as exhaustive at the regulatory level.",
              },
              {
                term: "Rules reproduce the substrate state",
                definition: "Rule systems produce the caregiver profiles that produce the offspring substrate states. The loop operates across generations. The rules reproduce the biological conditions that make them feel true.",
              },
              {
                term: "Three collective coherence forms",
                definition: "Absent access: rules feel like reality. Contested access: something feels wrong. Full access: rules held as constructions. System stability depends on the ratio.",
              },
              {
                term: "RE-only institutions",
                definition: "When the collective operates through cognitive data alone, institutional logic is rational and not biologically accurate. The data set is incomplete. The mechanism that would complete it is absent.",
              },
              {
                term: "Rule escalation",
                definition: "Four stages paralleling the nervous system gradient. Initial (informal), intermediate (moralisation), advanced (surveillance), extreme (elimination). Predictable and interruptible.",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={accent}
            established="F4 established how individual nervous system patterns consolidate into collective rule systems — how rules are absorbed as regulatory material, how they move from external enforcement to invisible truth, how six rule systems each serve a distinct regulatory function, and how rules reproduce the substrate state across generations."
            question="Rules organise behaviour. They also organise value. When rule adherence becomes the collective definition of safety, the system begins to sort people — who gets the conditions that allow biological restoration to develop, and who does not."
            nextFramework="F5"
            nextTitle="The Filter of Worth"
            nextHref="/framework/f5-filter-of-worth"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={accent}
            connections={[
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "F4 shows what happens when chronic states synchronise across a group. The four-stage escalation parallels the nervous system gradient. Each rule system expresses differently across the four states.",
              },
              {
                id: "M3: Regulation Capacities",
                href: "/model/m3-regulation-capacities",
                description: "F4 shows what happens when enough restoration sequences remain unresolved across a population: the collective generates structures that regulate what individuals cannot regulate internally. Rules are collective restoration substitutes.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "F4 shows what rule systems do to the interoceptive substrate at population scale — and what happens when institutions run on RE alone without ER or SEA.",
              },
              {
                id: "F3: Adult Cognition & False Coherence",
                href: "/framework/f3-false-coherence",
                description: "F3 C8 is the bridge: the same CLS that maintains individual false coherence absorbs and enforces social rules. F4 picks up from there — individual narrative substitution becomes collective rule systems.",
              },
              {
                id: "F2: Developmental Calibration",
                href: "/framework/f2-awareness-calibration",
                description: "F2's three developmental disruption conditions operate at population scale through rule systems: rules that block expression (Condition 3), rules that contradict experience (Condition 2), rules that make availability unpredictable (Condition 1).",
              },
              {
                id: "F5: The Filter of Worth",
                href: "/framework/f5-filter-of-worth",
                description: "F4 describes what rules do to populations. F5 describes what rules sort — who gets the conditions that allow biological restoration to develop, and who does not.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={accent}
            items={[
              { label: "Continue to F5 — how rules sort who gets the conditions for restoration", href: "/framework/f5-filter-of-worth", linkText: "F5: The Filter of Worth \u2192" },
              { label: "See the nervous system gradient that rules escalate along", href: "/model/m2-nervous-system-states", linkText: "M2: Nervous System States \u2192" },
              { label: "See the awareness architecture that institutions operate without", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "Return to F3 — how individual false coherence works", href: "/framework/f3-false-coherence", linkText: "F3: Adult Cognition & False Coherence \u2192" },
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
            "@id": "https://teg-blue.org/framework/f4-rules-regulate#article",
            headline: "Rules Regulate: How Individual Patterns Scale to Collective Rule Systems",
            description:
              "How individual nervous system patterns consolidate into collective rule systems — three scaling mechanisms, the internalisation loop, six regulatory functions, substrate reproduction, and rule escalation. Framework F4 of the TEG-Blue 12-framework system.",
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
            datePublished: "2026-03-05",
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
              "@id": "https://teg-blue.org/framework/f4-rules-regulate",
            },
            about: [
              { "@type": "Thing", name: "Collective Rule Systems" },
              { "@type": "Thing", name: "Rule Internalisation" },
              { "@type": "Thing", name: "Social Regulation" },
              { "@type": "Thing", name: "Conformity" },
              { "@type": "Thing", name: "Authoritarian Escalation" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Distinction (Bourdieu, 1977)" },
              { "@type": "ScholarlyArticle", name: "Obedience to Authority (Milgram, 1963)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "The Moral Animal (Haidt, 2001)" },
              { "@type": "ScholarlyArticle", name: "The Roots of Evil (Staub, 1989)" },
              { "@type": "ScholarlyArticle", name: "Social Dominance (Sidanius & Pratto, 1999)" },
            ],
            keywords: [
              "rules regulate",
              "collective regulation",
              "rule internalisation",
              "conformity",
              "obedience",
              "system justification",
              "authoritarian escalation",
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
              { name: "F4: Rules Regulate", url: "/framework/f4-rules-regulate" },
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
                question: "What is a rule at the biological level?",
                answer:
                  "A rule is material the CLS absorbs because it stabilises the chronic state. The CLS cannot distinguish between a rule that is accurate and a rule that regulates — a rule that confirms the person's chronic state is absorbed without friction because it feels true. The mechanism is the same as individual false coherence, operating on collective material.",
              },
              {
                question: "How do rules become invisible?",
                answer:
                  "Through a seven-step internalisation loop: attention narrows, ambiguity tolerance decreases, deviation becomes costly, conformity becomes protective, compliance receives belonging signals, external enforcement gives way to self-policing, and rules become experienced truth. The loop is self-sealing — questioning rules activates the same threat response that installed them.",
              },
              {
                question: "How do rule systems reproduce across generations?",
                answer:
                  "Rules produce the caregiver profiles that produce the offspring substrate states. A rule system that teaches 'logic over emotion' produces caregivers whose interoceptive substrates are suppressed. Those caregivers cannot hold what they cannot feel. Their children's substrates develop without the co-regulation that would build the channels. The rule reproduces the biological conditions that make the rules feel true.",
              },
              {
                question: "How do rules escalate under collective threat?",
                answer:
                  "Rule systems escalate through four stages paralleling the nervous system gradient: initial (informal, flexible), intermediate (deviation costly, moralisation), advanced (surveillance, obedience as virtue), extreme (elimination of deviants). Each stage is predictable and interruptible — the intervention is restoring safety conditions so the nervous system can release the regulatory strategy.",
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
              name: "Rules Regulate (F4) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f4-rules-regulate",
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
