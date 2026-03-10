import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RESEARCHER, PATTERN_GRADIENT,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, PageLayout, FrameworkHero,
  PropositionBox, ExpandableSection,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Core Propositions", href: "#core-propositions", description: "Rule-following is often a nervous system regulation strategy rather than a reasoning choice." },
  { label: "Overview", href: "#overview", description: "F3 completes the individual arc. F4 asks what happens when enough people running those mechanisms are in proximity." },
  { label: "The Scaling Mechanism", href: "#individual-to-collective", description: "How F3's three mechanisms aggregate into group structures." },
  { label: "How Rules Get Internalised", href: "#seven-step-mechanism", description: "The seven-step mechanism: attention narrows, ambiguity decreases, deviation costs, conformity rewarded." },
  { label: "Six Rule Categories", href: "#six-rule-systems", description: "Roles, Obedience, Performance, Dominance, Punishment, Entitlement — a regulatory taxonomy." },
  { label: "Rule Escalation", href: "#rule-escalation", description: "Four stages paralleling the four-mode gradient: from flexible norms through authoritarian control." },
  { label: "Cross-Theoretical Convergence", href: "#cross-theoretical-convergence", description: "Ten research traditions all describing the same mechanism. Rules as nervous system regulation at every scale." },
  { label: "What F4 Establishes", href: "#what-f4-establishes", description: "The scaling mechanism defined, the seven-step loop mapped, the six-category taxonomy available." },
  { label: "Research Foundations", href: "#research-foundations", description: "Sociology, social psychology, neuroscience, trauma studies, and political psychology." },
  { label: "Bridge to F5", href: "#bridge-to-f5", description: "Rule systems do not just organise behaviour. They organise value. Sorting formalises into worth hierarchies." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Rules Regulate — How Individual Patterns Scale to Collective Rule Systems (F4) | TEG-Blue Research",
  description:
    "How individual nervous system patterns aggregate into collective rule systems — through emotional distortion, external regulation, and false coherence operating at the group level. Framework F4 of 12.",
  keywords: [
    "collective rule systems",
    "rule internalization",
    "nervous system regulation",
    "conformity",
    "obedience",
    "social rules",
    "threat-based compliance",
    "rule escalation",
    "authoritarianism",
    "emotional distortion",
    "external regulation",
    "false coherence",
    "emotional technology",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f4-rules-regulate",
  },
  openGraph: {
    title: "Rules Regulate — How Individual Patterns Scale to Collective Rule Systems — F4 Framework | TEG-Blue",
    description:
      "How individual nervous system patterns aggregate into collective rule systems. The first framework in the collective arc of the TEG-Blue 12-framework system.",
    url: "https://teg-blue.org/framework/f4-rules-regulate",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rules Regulate — TEG-Blue F4",
    description:
      "How individual nervous system patterns aggregate into collective rule systems. The first framework in the collective arc.",
  },
  other: {
    'citation_title': 'Rules Regulate: How Individual Patterns Scale to Collective Rule Systems',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F4RulesRegulatePage() {
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
              description="How emotional distortion, external regulation, and false coherence — the individual mechanisms established in F3 — aggregate into collective rule systems when enough people run them in proximity. The first framework in the collective arc (F4–F7) of the TEG-Blue system."
              group="Collective"
              groupLabel="Collective · F4–F7"
              threadLine="Rules regulate · Cost: Flexibility"
              adjacent={{
                prev: { label: "F3 False Coherence", href: "/framework/f3-false-coherence" },
                next: { label: "F5 Worth Hierarchies", href: "/framework/f5-worth-hierarchies" },
              }}
            />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>
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
            <PropositionBox label="FOUNDATIONAL CLAIM">
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={propositionItemStyle}>
                  Rule-following is often a nervous system regulation strategy, not a reasoning choice — under threat, the nervous system prioritizes predictability, belonging protection, and risk minimization
                </li>
                <li style={propositionItemStyle}>
                  Individual nervous system patterns (F3's false coherence, emotional distortion, and external regulation) aggregate into collective rule systems when enough people run them in proximity
                </li>
                <li style={propositionItemStyle}>
                  Rules persist not because they are reasonable but because they are regulating — questioning rules activates the same threat response that created them
                </li>
                <li style={propositionItemStyle}>
                  Six categories of rules emerge from threat-based internalization, each defined by regulatory function: roles (identity), obedience (belonging), performance (worth), dominance (power), punishment (boundaries), entitlement (resources)
                </li>
                <li style={propositionItemStyle}>
                  Rule systems escalate under sustained threat through stages that parallel the four-mode gradient — from flexibility through enforcement to authoritarian control
                </li>
                <li style={propositionItemStyle}>
                  This framing does not remove responsibility — it explains why compliance becomes compelling, so intervention can address the regulation need and accountability can remain intact
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
              style={sectionHeadingStyle}
            >
              Overview — The First Collective Framework
            </h2>

            <p style={proseStyle}>
              F3 completes the individual arc. The biological return was never learned (F2), cognition stepped in to replace it (F3), and the replacement extends into relationships through emotional distortion and external regulation. F4 asks: what happens when enough people in a system are running those same mechanisms?
            </p>
            <p style={proseStyle}>
              The answer is <strong style={{ color: TEXT.primary }}>collective rule systems</strong>. Not rational agreements or social contracts — but nervous system regulation at the group level. When enough individuals need predictability, belonging protection, and conformity to stay regulated, groups generate structures that provide those needs. Rules emerge as the collective equivalent of false coherence: shared narratives that reduce uncertainty, manage belonging, and enforce conformity.
            </p>

            <KeyStatement>
              The regulation thread: F1 defines Biological Restoration as the return mechanism. F2 shows what happens when the return is never learned. F3 shows what cognition does in its place. F4 shows what happens when enough people running those mechanisms are in proximity: individual substitutes aggregate into collective rule systems.
            </KeyStatement>

            <p style={proseStyle}>
              F4 is the first framework in the collective arc (F4–F7). Each describes a progressively larger-scale substitute for the regulation that was never built:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Framework</th>
                    <th style={thStyle}>What Regulates</th>
                    <th style={thStyle}>The Regulation Thread</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "F1 — Biological Information",
                    "The body",
                    "The biological return mechanism — Biological Restoration.",
                  ]} />
                  <TableRow cells={[
                    "F2 — Awareness Calibration",
                    "Development",
                    "The developmental failure of the return. Cognition recruited into threat service.",
                  ]} />
                  <TableRow cells={[
                    "F3 — False Coherence",
                    "Cognition",
                    "The cognitive replacement of the return. Emotional distortion and external regulation.",
                  ]} />
                  <TableRow cells={[
                    "F4 — Rules Regulate",
                    "Collective rules",
                    "Individual substitutes aggregate into collective rule systems. Predictability + conformity.",
                  ]} />
                  <TableRow cells={[
                    "F5 — Worth Hierarchies",
                    "Worth sorting",
                    "Rules begin to sort people by value. Status + credibility.",
                  ]} />
                  <TableRow cells={[
                    "F6 — Bias",
                    "Group boundaries",
                    "Group protection through othering.",
                  ]} />
                  <TableRow cells={[
                    "F7 — Domination",
                    "Power override",
                    "Power through control and elimination.",
                  ]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              The regulation thread does not change at scale. The same nervous system logic that drives individual false coherence drives collective rule formation. The mechanism is the same. The scale changes.
            </p>

            <ExpandableSection title="How This Framework Emerged" type="framework">
              <p style={expandedProseStyle}>
                F4 emerged from recognizing that multiple frameworks all describe the same phenomenon: how collective threat creates rule-based systems that prioritize conformity over flexibility. Sociology (Bourdieu, Bernstein, Goffman) describes habitus, social reproduction, and dramaturgical performance. Social psychology (Milgram, Asch, Cialdini) describes obedience, conformity, and compliance under authority. Neuroscience (Porges, Siegel) describes how threat synchronizes nervous systems. Attachment theory (Bowlby) describes internal working models and belonging pressure. Systems theory (Bowen, Satir) describes anxiety spreading through systems. Trauma studies (van der Kolk, Herman, Walker) describes intergenerational transmission. Cultural analysis (hooks, Eisler) describes domination systems.
              </p>
              <p style={expandedProseStyle}>
                The synthesis: organizing these into a unified model showing that rule internalization is the mechanism through which individual nervous system threat (F1–F3) becomes collective regulation — producing identifiable rule categories, each serving a distinct regulatory function.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── FROM INDIVIDUAL TO COLLECTIVE ──────────────── */}
          <section
            id="individual-to-collective"
            aria-labelledby="heading-individual-to-collective"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-individual-to-collective" style={sectionHeadingStyle}>
              From Individual to Collective — How F3's Mechanisms Scale
            </h2>

            <p style={proseStyle}>
              F3 established the mechanisms. F4 shows how they scale.
            </p>

            <h3 style={conceptHeadingStyle}>
              Three Scaling Pathways
            </h3>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Emotional distortion scales.</strong> When a person in a position of authority runs emotional distortion — when their internal discomfort gets reclassified as others' wrongdoing — everyone around them must adapt. This can happen without deliberate intent — the person may sincerely experience discomfort as "wrongdoing" — but the impact is the same: the group is organized around their state. The team, the family, the organization learns: this person's discomfort is your emergency. Their internal state becomes your responsibility to manage.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>External regulation scales.</strong> When multiple people in a system are running external regulation — when each person's stability depends on others' compliance, approval, distance, or fear — the system develops structures to manage these competing regulation needs. Rules emerge. Not as conscious agreements, but as the collective equivalent of false coherence: shared narratives that stabilize the group by reducing unpredictability, managing belonging, and enforcing conformity.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>False coherence absorbs rules.</strong> The same cognitive system that maintains individual false coherence absorbs and maintains social rules. If cognition can replace an emotional signal with "I'm not angry — I'm being logical," it can just as easily replace it with "that's just how things are done" or "that's the policy" or "everyone knows that." Social rules that support the person's chronic mode are absorbed effortlessly. Social rules that challenge it are resisted or ignored.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Scaling Mechanism</th>
                    <th style={thStyle}>What It Does</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "False coherence absorbs rules",
                    "Rules are experienced as truth: \"that's just how it is.\"",
                  ]} />
                  <TableRow cells={[
                    "Emotional distortion makes violations feel like attacks",
                    "Rule-breaking triggers the same defensive response as personal attack.",
                  ]} />
                  <TableRow cells={[
                    "External regulation makes compliance a nervous system need",
                    "Following rules settles activation. Breaking them destabilizes.",
                  ]} />
                </tbody>
              </table>
            </div>

            <KeyStatement>
              Together, rules persist not because they are reasonable, but because they are regulating. The rules are not maintained by the threat that generated them. They are maintained by the regulatory function they now serve.
            </KeyStatement>

            <p style={proseStyle}>
              This is why rules persist long after the original conditions that created them have passed. Questioning the rules activates the same threat response that created them — because the rules have become part of the collective false coherence. They feel like truth. Challenging them feels like an attack on the group's regulation.
            </p>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                Providing the specific mechanism by which individual nervous system patterns become collective structures. The existing literature describes the phenomenon (Bourdieu's habitus, Bowen's family systems anxiety, Durkheim's collective consciousness) but does not trace the pathway from individual capacity gaps through the named mechanisms of emotional distortion and external regulation (F3) to collective rule formation (F4). F4 provides that pathway: SEA offline → emotional distortion → external regulation → collective rule systems. The chain is traceable from the individual's missing awareness capacity to the institution's rule structure.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── SEVEN-STEP MECHANISM ──────────────────────── */}
          <section
            id="seven-step-mechanism"
            aria-labelledby="heading-seven-step-mechanism"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-seven-step-mechanism" style={sectionHeadingStyle}>
              Threat-Based Rule Internalization — The Seven-Step Mechanism
            </h2>

            <p style={proseStyle}>
              Under perceived threat, individuals shift toward defensive regulation (F1). When this happens across a group, a seven-step mechanism produces internalized rules:
            </p>

            <ol style={orderedListStyle}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Attention narrows toward threat and social-risk cues.</strong> The nervous system prioritizes: who is dangerous, what is expected, what deviation costs.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Tolerance for ambiguity decreases.</strong> Uncertainty feels dangerous. Clear answers, even wrong ones, feel safer than open questions.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Deviation becomes costly.</strong> Difference signals potential threat. Standing out risks exclusion. The group begins to treat variation as risk.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Sameness becomes protective.</strong> Conformity reduces unpredictability. Matching the group signals safety. The group begins to reward uniformity.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Behaviors that reduce uncertainty are rewarded.</strong> Compliance receives belonging signals: approval, inclusion, reduced scrutiny, and often status.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>External enforcement gives way to self-policing.</strong> The person no longer needs someone else to enforce the rule. Belonging becomes conditional on rule adherence. The person polices themselves — and others. Fear of exclusion and shame become the self-policing engine.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Rules become invisible.</strong> Through repetition, rules transition from external enforcement → self-policing → experienced as truth. They are no longer perceived as rules. They are "how things are." "Common sense." "Just the way it works."
              </li>
            </ol>

            <KeyStatement>
              The loop closes at Step 7: rules regulate the threat that created them, so examining the rules recreates threat. Questioning rules activates the same nervous system response that installed them. The mechanism that created the rules is the mechanism that protects the rules.
            </KeyStatement>

            <p style={proseStyle}>
              This connects directly to F3's false coherence: Step 7 is collective false coherence. The rules are experienced as truth because they stabilize. The mechanism is the same at both scales — individual and collective — because the cognitive system running the replacement is the same system.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Milgram (1963) — obedience to authority. Asch (1951) — conformity under group pressure. Zimbardo (1971) — situational power of social systems. Bourdieu (1977) — habitus, embodied social structures. Bernstein — pedagogic codes, invisible pedagogies. Porges (2011) — neuroception-driven behavior, group threat response. Siegel (2012) — co-regulation and dysregulation. Van der Kolk (2014) — intergenerational trauma patterns. Herman (1992) — complex trauma and relational adaptation. Cialdini — compliance and influence. Greenberg, Pyszczynski — Terror Management Theory; mortality salience increases conformity.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                Organizing the full process from individual nervous system activation through collective rule formation into a single seven-step mechanism with a critical self-reinforcing element: Step 7 — questioning rules activates the same threat response that created them. The loop closure is the distinctive contribution. While conformity (Asch), obedience (Milgram), and social reproduction (Bourdieu) are all well-documented, to our knowledge, no existing model traces the complete pathway from individual threat activation through collective rule invisibility and back to the threat activation that prevents examination.
              </p>
              <p style={expandedProseStyle}>
                The reframe of rules as regulation rather than ideology changes the intervention logic. Critical theory treats rules as power structures to be dismantled. Psychology treats them as cognitive schemas to be corrected. F4 treats them as nervous system regulation strategies — and the intervention follows F1's principle: restore safety first, then expect flexibility.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── SIX RULE SYSTEMS ──────────────────────────── */}
          <section
            id="six-rule-systems"
            aria-labelledby="heading-six-rule-systems"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-six-rule-systems" style={sectionHeadingStyle}>
              The Six Rule Systems
            </h2>

            <p style={proseStyle}>
              Six categories of rules consistently emerge from threat-based internalization. Each category is defined by <strong style={{ color: TEXT.primary }}>regulatory function</strong> — not by moral content. The same surface rule can serve different functions depending on the mode and system.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 24 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Rule System</th>
                    <th style={thStyle}>Regulatory Function</th>
                    <th style={thStyle}>Core Pattern</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Roles",
                    "Identity stabilization",
                    "\"You are who others need you to be\"",
                  ]} />
                  <TableRow cells={[
                    "Obedience",
                    "Belonging protection",
                    "\"Safety comes from compliance\"",
                  ]} />
                  <TableRow cells={[
                    "Performance",
                    "Worth verification",
                    "\"Value is earned through image\"",
                  ]} />
                  <TableRow cells={[
                    "Dominance",
                    "Power establishment",
                    "\"Strength means control\"",
                  ]} />
                  <TableRow cells={[
                    "Punishment",
                    "Boundary enforcement",
                    "\"Pain teaches lessons\"",
                  ]} />
                  <TableRow cells={[
                    "Entitlement",
                    "Resource allocation",
                    "\"Some people are owed more\"",
                  ]} />
                </tbody>
              </table>
            </div>

            {/* Role Rules */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={conceptHeadingStyle}>Role Rules</h3>
              <p style={proseStyle}>
                Role rules assign fixed identity positions — The Helper, The Good One, The Achiever, The Strong One, The Quiet One. These are not personality types. They are nervous system solutions to the problem of conditional love: the child learns which version of themselves secures connection and adopts that version as identity. F2's capacity configuration determines which role gets adopted. F3's false coherence maintains it as "just who I am."
              </p>
              <KeyStatement>
                Diagnostic: if the role collapses when belonging is threatened — it is not "personality." It is attachment regulation.
              </KeyStatement>
            </div>

            {/* Obedience Rules */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={conceptHeadingStyle}>Obedience Rules</h3>
              <p style={proseStyle}>
                Obedience rules teach that safety comes from compliance. Question authority and lose belonging. The regulatory function is threat reduction through predictability: as long as everyone follows the authority, no one has to evaluate for themselves. This is why obedience persists even when the authority is visibly wrong — the nervous system prefers the certainty of compliance to the vulnerability of independent evaluation.
              </p>
            </div>

            {/* Performance Rules */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={conceptHeadingStyle}>Performance Rules</h3>
              <p style={proseStyle}>
                Performance rules teach that worth must be earned and displayed. Value is not inherent — it is conditional on meeting external standards. The regulatory function is worth verification: performing produces validation signals, and validation signals reduce the threat of worthlessness. F5 extends this into systemic worth hierarchies.
              </p>
            </div>

            {/* Dominance Rules */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={conceptHeadingStyle}>Dominance Rules</h3>
              <p style={proseStyle}>
                Dominance rules teach that strength means control and vulnerability means weakness. The regulatory function is power establishment: in a system where vulnerability was punished, control feels like the only safe position. This includes the <strong style={{ color: TEXT.primary }}>weaponization of neutrality</strong>: when "neutrality" in an asymmetric situation protects the side with more power, neutrality becomes a dominance rule.
              </p>
            </div>

            {/* Punishment Rules */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={conceptHeadingStyle}>Punishment Rules</h3>
              <p style={proseStyle}>
                Punishment rules teach that pain is a legitimate teaching tool. "Pain teaches lessons" normalizes harm as corrective. The regulatory function is boundary enforcement: the system uses pain to maintain compliance.
              </p>
              <p style={proseStyle}>
                The <strong style={{ color: TEXT.primary }}>punishment vs. accountability distinction</strong> is critical here. Punishment aims to cause suffering; accountability aims to create understanding. Accountability can include consequences — but the intent is learning and repair, not suffering. When punishment rules are internalized, the distinction becomes invisible and all correction feels like (and is delivered as) infliction of pain.
              </p>
              <p style={proseStyle}>
                This connects directly to F3's emotional distortion: the person whose discomfort is misread as external attack genuinely cannot tell the difference between "you hurt my feelings by setting a boundary" and "you are harming me." Punishment rules normalize this confusion at the collective level.
              </p>
            </div>

            {/* Entitlement Rules */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={conceptHeadingStyle}>Entitlement Rules</h3>
              <p style={proseStyle}>
                Entitlement rules teach that some people are inherently owed more — more resources, more attention, more protection, more benefit of the doubt. The regulatory function is resource allocation: entitlement rules determine who receives and who provides. At the nervous system level, entitlement often functions as external regulation: "others must absorb my discomfort so I can stay stable."
              </p>
            </div>

            {/* Gradient expression */}
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
                Each Rule System Expresses Differently Across the Gradient
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>
                In Connection, rules are held lightly — they serve the group and can be examined. In chronic Protection, rules are rigid — deviation feels dangerous. In chronic Control, rules serve management — they are selectively enforced to maintain the curated reality. In chronic Domination, rules are absolute — violation is met with punishment or elimination.
              </p>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT.primary }}>The taxonomy is exhaustive at the regulatory level.</strong> These six categories cover the basic regulatory needs: identity, belonging, worth, power, boundaries, resources. Every specific rule ("boys don't cry," "respect your elders," "nice girls don't argue," "winners don't quit") can be located within this taxonomy by identifying which regulatory need it serves.
              </p>
            </div>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Role Theory (sociology) — fixed identity positions in social systems. Milgram (1963), Asch (1951) — obedience and conformity under authority and group pressure. Goffman (1959), Hochschild — impression management, emotional labor. Sidanius &amp; Pratto — Social Dominance Theory. Kohut (1977), Kernberg (1975) — narcissistic entitlement as protective strategy. Restorative justice literature — punishment vs. accountability distinction. Gender socialization research (Fine, Connell, Fausto-Sterling) — gender differentiation as learned regulation. Bowlby (1969) — internal working models. Young, Klosko, &amp; Weishaar (2003) — early maladaptive schemas.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                Organizing six independently studied rule domains into a unified taxonomy where each category is defined by its regulatory function — not by its content but by what it does for the nervous system. The functional definition is original: Roles stabilize identity. Obedience protects belonging. Performance verifies worth. Dominance establishes power. Punishment enforces boundaries. Entitlement allocates resources.
              </p>
              <p style={expandedProseStyle}>
                The gradient expression of each rule system across four modes connects to the Inner Compass: rule expression changes depending on where the compass is. The same rule ("respect your elders") operates as flexible guidance in Connection and as absolute enforcement in Domination. The punishment vs. accountability distinction is clinically significant — when punishment rules are normalized, people lose the ability to distinguish between being hurt and causing harm.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── RULE ESCALATION ───────────────────────────── */}
          <section
            id="rule-escalation"
            aria-labelledby="heading-rule-escalation"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-rule-escalation" style={sectionHeadingStyle}>
              Rule Escalation Under Sustained Threat
            </h2>

            <p style={proseStyle}>
              When threat persists or intensifies, rule systems escalate through identifiable stages:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Stage</th>
                    <th style={thStyle}>Characteristics</th>
                    <th style={thStyle}>Compass Parallel</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Initial",
                    "Informal rules; social pressure; flexibility possible",
                    "Connection-like flexibility",
                  ]} />
                  <TableRow cells={[
                    "Intermediate",
                    "Rules proliferate; deviation increasingly costly; moralization begins",
                    "Protection-like narrowing",
                  ]} />
                  <TableRow cells={[
                    "Advanced",
                    "Reduced tolerance for deviation; increased punishment; obedience as virtue",
                    "Control-like enforcement",
                  ]} />
                  <TableRow cells={[
                    "Extreme",
                    "Authoritarian enforcement; rule-breaking as identity threat; violence normalized",
                    "Domination-like violence",
                  ]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              The escalation parallels the four-mode gradient at the collective level. This is not metaphor — it is the same nervous system logic operating at a different scale. As collective threat increases, the group's tolerance thresholds shift. What would be unacceptable at the Initial stage becomes normalized at Intermediate, then enforced at Advanced, then absolute at Extreme.
            </p>

            <KeyStatement>
              Not ideological anomalies, but predictable outcomes of prolonged collective threat. If escalation follows the same nervous system logic as individual compass movement, then every system is capable of it under sustained threat — and the question is always about conditions and safety, not about the moral character of the population.
            </KeyStatement>

            <p style={proseStyle}>
              The staged model allows recognition of where a system is in the escalation — and identification of intervention points before reaching extreme stages. The collective compass can move when the safety signal changes.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Altemeyer (1996) — right-wing authoritarianism. Adorno (1950) — authoritarian personality. Terror Management Theory (Greenberg, Pyszczynski) — mortality salience increases conformity. Systems theory — positive feedback loops. Conflict research — escalation patterns. Political psychology — authoritarian escalation under threat conditions.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                Framing rule escalation as the same nervous system logic operating at individual and collective levels — the gradient applied to groups. The escalation parallels the four-mode gradient: Initial (Connection-like flexibility) → Intermediate (Protection-like narrowing) → Advanced (Control-like enforcement) → Extreme (Domination-like violence). This parallel enables prediction (where is this system heading?) and intervention (what safety conditions would allow de-escalation?).
              </p>
              <p style={expandedProseStyle}>
                The reframe removes the othering that makes authoritarian patterns invisible in one's own systems. If escalation follows the same nervous system logic as individual compass movement, then every system is capable of it under sustained threat.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── CROSS-THEORETICAL CONVERGENCE ─────────────── */}
          <section
            id="cross-theoretical-convergence"
            aria-labelledby="heading-cross-theoretical-convergence"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-cross-theoretical-convergence" style={sectionHeadingStyle}>
              Cross-Theoretical Convergence — Ten Traditions Describing One Mechanism
            </h2>

            <p style={proseStyle}>
              Ten research traditions independently describe the same phenomenon — rule internalization as collective regulation under threat — from different angles:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Tradition</th>
                    <th style={thStyle}>What They Observe</th>
                    <th style={thStyle}>What F4 Names It</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Bourdieu (Sociology)",
                    "Habitus — embodied social structures reproduced below awareness",
                    "Rules as embodied regulation",
                  ]} />
                  <TableRow cells={[
                    "Bernstein (Education)",
                    "Pedagogic codes — invisible rules governing what can be said, thought, known",
                    "Rule invisibility (Step 7)",
                  ]} />
                  <TableRow cells={[
                    "Goffman (Sociology)",
                    "Dramaturgy — social performance maintained by unspoken rules",
                    "Performance rules",
                  ]} />
                  <TableRow cells={[
                    "Beck / Young (Clinical)",
                    "Core beliefs and schemas — rule-like structures governing perception",
                    "False coherence",
                  ]} />
                  <TableRow cells={[
                    "Bowlby / Ainsworth (Attachment)",
                    "Internal working models — relational rules formed in early experience",
                    "Belonging protection rules",
                  ]} />
                  <TableRow cells={[
                    "Schwartz (IFS)",
                    "Protective parts — internal rule-enforcers managing threat",
                    "Internal policing (Steps 6–7)",
                  ]} />
                  <TableRow cells={[
                    "Porges (Neuroscience)",
                    "Neuroception — nervous system evaluation that produces rule-like responses",
                    "Threat-based internalization (Steps 1–2)",
                  ]} />
                  <TableRow cells={[
                    "Haidt (Moral Psychology)",
                    "Moral foundations — intuitive moral rules that feel like truth",
                    "Rules experienced as truth",
                  ]} />
                  <TableRow cells={[
                    "Milgram (Social Psychology)",
                    "Obedience — rule-following under authority pressure",
                    "Compliance as regulation",
                  ]} />
                  <TableRow cells={[
                    "Van der Kolk / Herman (Trauma)",
                    "Intergenerational transmission — traumatic rules passed across generations",
                    "Rule replication across generations",
                  ]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              The framework proposes that these traditions are observing the same mechanism: when the nervous system is under threat, it produces regulation strategies that look like rules — and these rules operate at every scale from individual cognition to institutional structure.
            </p>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                Making explicit that these ten traditions are describing one mechanism, not ten separate phenomena. To our knowledge, no existing work maps Bourdieu's habitus, Milgram's obedience, IFS's protective parts, polyvagal neuroception, and moral foundations as variations on the same underlying process: nervous system regulation through rule internalization.
              </p>
              <p style={expandedProseStyle}>
                The convergence claim is testable: if all ten traditions are describing the same mechanism, then interventions that address the underlying regulation need (rather than the specific rule content) should be effective across domains.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── WHAT F4 ESTABLISHES ───────────────────────── */}
          <section
            id="what-f4-establishes"
            aria-labelledby="heading-what-f4-establishes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-what-f4-establishes" style={sectionHeadingStyle}>
              What F4 Establishes
            </h2>

            <p style={proseStyle}>
              F4 shows how individual nervous system patterns scale into collective rule systems — through the mechanisms F3 established operating at the group level. It is the first framework in the collective arc (F4–F7), each describing a progressively larger-scale substitute for the regulation that was never built.
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
                    "From individual to collective",
                    "F3's mechanisms scale: emotional distortion makes rule-violation feel like attack; external regulation makes compliance a nervous system need; false coherence absorbs rules as truth. Collective rules emerge from below, not imposed from above.",
                  ]} />
                  <TableRow cells={[
                    "Seven-step rule internalization",
                    "The mechanism: attention narrows → ambiguity decreases → deviation costs → conformity rewarded → self-policing → rules invisible → questioning activates threat. Self-reinforcing loop.",
                  ]} />
                  <TableRow cells={[
                    "Six rule systems",
                    "Roles (identity), Obedience (belonging), Performance (worth), Dominance (power), Punishment (boundaries), Entitlement (resources). Defined by regulatory function. Expressed across the gradient.",
                  ]} />
                  <TableRow cells={[
                    "Rule escalation",
                    "Four stages paralleling the four-mode gradient. Collective compass movement from flexibility through enforcement to authoritarian control. Predictable and interruptible.",
                  ]} />
                  <TableRow cells={[
                    "Cross-theoretical convergence",
                    "Ten traditions describing the same mechanism from different angles. Rules as nervous system regulation at every scale.",
                  ]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>
              Key Formulations
            </h3>

            <ul style={{ paddingLeft: 20, margin: "0 0 24px" }}>
              {[
                "\"Rule-following is often a nervous system regulation strategy, not a reasoning choice\"",
                "\"Rules persist because of the regulatory function they now serve\"",
                "\"Questioning rules recreates threat, because the rules are part of collective false coherence\"",
                "\"The mechanism that created the rules is the mechanism that protects the rules\"",
                "\"Not ideological anomalies, but predictable outcomes of prolonged collective threat\"",
                "\"Collective rules are not imposed from above — they emerge from below\"",
                "\"Every specific rule can be located within this taxonomy by identifying which regulatory need it serves\"",
                "\"Restore safety first, then expect flexibility\"",
                "\"Distinguish punishment (suffering) from accountability (understanding + repair)\"",
                "\"The collective compass can move when the safety signal changes\"",
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
            <h2 id="heading-research-foundations" style={sectionHeadingStyle}>
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
                    "Sociology",
                    "Habitus, social reproduction, dramaturgical performance",
                    "Bourdieu, 1977; Bernstein; Goffman, 1959",
                  ]} />
                  <TableRow cells={[
                    "Social Psychology",
                    "Obedience, conformity, compliance under authority",
                    "Milgram, 1963; Asch, 1951; Zimbardo, 1971; Cialdini",
                  ]} />
                  <TableRow cells={[
                    "Neuroscience",
                    "Nervous system synchronization, neuroception, co-regulation",
                    "Porges, 2011; Siegel, 2012",
                  ]} />
                  <TableRow cells={[
                    "Attachment Theory",
                    "Internal working models, belonging pressure, regulatory needs",
                    "Bowlby, 1969; Ainsworth, 1978",
                  ]} />
                  <TableRow cells={[
                    "Systems Theory",
                    "Anxiety propagation, family rule systems",
                    "Bowen; Satir",
                  ]} />
                  <TableRow cells={[
                    "Trauma Studies",
                    "Intergenerational transmission, fawn response, coercive control",
                    "Van der Kolk, 2014; Herman, 1992; Walker",
                  ]} />
                  <TableRow cells={[
                    "Cultural Analysis",
                    "Domination systems, partnership vs. domination",
                    "hooks; Eisler",
                  ]} />
                  <TableRow cells={[
                    "Political Psychology",
                    "Authoritarianism, terror management",
                    "Altemeyer, 1996; Greenberg, Pyszczynski",
                  ]} />
                  <TableRow cells={[
                    "Moral Psychology",
                    "Moral foundations as intuitive rules",
                    "Haidt, 2001",
                  ]} />
                  <TableRow cells={[
                    "Clinical Psychology",
                    "Core beliefs, schemas, protective parts",
                    "Beck; Young, 2003; Schwartz, 1995",
                  ]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── BRIDGE TO F5 ──────────────────────────────── */}
          <section
            id="bridge-to-f5"
            aria-labelledby="heading-bridge-to-f5"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bridge-to-f5" style={sectionHeadingStyle}>
              Bridge to F5: When Rules Become Worth
            </h2>

            <p style={proseStyle}>
              F4 explains how individual nervous system patterns scale into collective rule systems through the mechanisms F3 established.
            </p>
            <p style={proseStyle}>
              But rule systems do not just organize behavior. They organize value. When rule adherence becomes the social definition of safety, the system begins to sort people. Those who comply — who perform the right roles, follow the right rules, display the right markers — receive belonging, protection, and credibility. Those who do not — or cannot — receive less.
            </p>
            <p style={proseStyle}>
              This sorting is not a deliberate policy. It is the structural consequence of rule-based regulation. When rules determine belonging and protection, the markers of rule-compliance become markers of worth. Status signals emerge. Hierarchies form. The system begins to distribute not just safety but value — and the distribution tracks the rule structure.
            </p>

            <KeyStatement>
              F4 is rules. F5 is what rules sort.
            </KeyStatement>

            <p style={proseStyle}>
              F5 explains how threat-stabilized rule systems produce worth hierarchies, how those hierarchies formalize into institutions, and how the sorting becomes so deeply internalized that it feels like objective reality rather than the product of collective nervous system regulation.
            </p>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="f4-rules-regulate" type="framework" />

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
                    <th style={navThStyle}>If you want to…</th>
                    <th style={navThStyle}>Go here</th>
                  </tr>
                </thead>
                <tbody>
                  <NavRow label="Read the next collective framework (F5)" href="/framework/f5-worth-hierarchies" linkText="Worth Hierarchies Regulate →" />
                  <NavRow label="Read the foundational framework (F1)" href="/framework/f1-emotional-gradient" linkText="Emotions as Biological Information →" />
                  <NavRow label="Read the calibration framework (F2)" href="/framework/f2-awareness-calibration" linkText="Awareness Teaches Awareness →" />
                  <NavRow label="Read the cognitive maintenance framework (F3)" href="/framework/f3-false-coherence" linkText="Adult Cognition & False Coherence →" />
                  <NavRow label="See the applied models" href="/models" linkText="Core Models →" />
                  <NavRow label="Explore all 12 frameworks" href="/frameworks-map" linkText="12 Frameworks →" />
                  <NavRow label="Review the source theories" href="/scientific-foundations" linkText="Scientific Foundations →" />
                  <NavRow label="Look up key terms" href="/glossary" linkText="Glossary →" />
                  <NavRow label="See published research" href="/publications" linkText="Publications →" />
                  <NavRow label="Experience the tools" href="https://teg-blue.com/emotional-tools" linkText="Emotional Tools (teg-blue.com) →" external />
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
            "@id": "https://teg-blue.org/framework/f4-rules-regulate#article",
            headline: "Rules Regulate: How Individual Patterns Scale to Collective Rule Systems",
            description:
              "How individual nervous system patterns aggregate into collective rule systems through emotional distortion, external regulation, and false coherence operating at the group level. Framework F4 of the TEG-Blue 12-framework system.",
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
              "@id": "https://teg-blue.org/framework/f4-rules-regulate",
            },
            about: [
              { "@type": "Thing", name: "Collective Rule Systems" },
              { "@type": "Thing", name: "Rule Internalization" },
              { "@type": "Thing", name: "Conformity and Obedience" },
              { "@type": "Thing", name: "Rule Escalation" },
              { "@type": "Thing", name: "Social Regulation" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Reproduction in Education, Society and Culture (Bourdieu, 1977)" },
              { "@type": "ScholarlyArticle", name: "Obedience to Authority (Milgram, 1963)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Trauma and Recovery (Herman, 1992)" },
              { "@type": "ScholarlyArticle", name: "The Presentation of Self in Everyday Life (Goffman, 1959)" },
              { "@type": "ScholarlyArticle", name: "The Authoritarian Specter (Altemeyer, 1996)" },
            ],
            keywords: [
              "collective rule systems",
              "rule internalization",
              "conformity",
              "obedience",
              "rule escalation",
              "nervous system regulation",
              "emotional distortion",
              "external regulation",
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
              { name: "F4: Rules Regulate", url: "/framework/f4-rules-regulate" },
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
                question: "What does 'rules regulate' mean in the TEG-Blue system?",
                answer:
                  "F4 proposes that rule-following is often a nervous system regulation strategy, not primarily a reasoning choice. Under perceived threat, the nervous system prioritizes predictability, belonging protection, and conformity. Rules emerge as the collective equivalent of false coherence — shared narratives that reduce uncertainty and stabilize the group. Rules persist because they serve a regulatory function, not because they are rational.",
              },
              {
                question: "How do individual nervous system patterns become collective rule systems?",
                answer:
                  "Through three scaling mechanisms identified in F3: false coherence absorbs rules as truth ('that's just how it is'), emotional distortion makes rule-violation feel like personal attack, and external regulation makes rule-compliance a nervous system need. When enough individuals in proximity run these mechanisms, collective structures emerge without deliberate design.",
              },
              {
                question: "What are the six rule systems in TEG-Blue?",
                answer:
                  "Six categories of rules emerge from threat-based internalization, each defined by regulatory function: Roles (identity stabilization), Obedience (belonging protection), Performance (worth verification), Dominance (power establishment), Punishment (boundary enforcement), and Entitlement (resource allocation). Every specific rule can be located within this taxonomy by identifying which regulatory need it serves.",
              },
              {
                question: "How do rule systems escalate?",
                answer:
                  "Under sustained threat, rule systems escalate through four stages that parallel the four-mode gradient: Initial (informal rules, flexibility possible), Intermediate (rules proliferate, deviation costly), Advanced (reduced tolerance, obedience as virtue), and Extreme (authoritarian enforcement, violence normalized). This explains authoritarianism not as ideological anomaly but as a predictable outcome of prolonged collective threat.",
              },
              {
                question: "How does F4 connect to the rest of the TEG-Blue system?",
                answer:
                  "F4 is the first framework in the collective arc (F4–F7). It builds directly on F3's individual mechanisms — emotional distortion, external regulation, false coherence — showing how they aggregate into collective structures. F1 defines the biological return, F2 shows the developmental failure, F3 shows the cognitive replacement, and F4 shows what happens when enough people running those replacements are in proximity. F5 then explains how rule systems begin to sort people by worth.",
              },
            ])
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
  color: RESEARCHER.accent,
  marginBottom: 20,
  paddingBottom: 8,
  borderBottom: `2px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
};

const conceptHeadingStyle = {
  fontSize: 16,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 12,
};

const proseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 12,
  maxWidth: 720,
};

const expandedProseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  margin: "8px 0 0",
};

const propositionItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
};

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

function NavRow({ label, href, linkText, external }) {
  const linkStyle = {
    color: SPECTRUM.blue,
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
