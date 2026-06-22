import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, PATTERN,
  hexToRgba, MAIN_ORG,
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
  { label: "Core Propositions", href: "#core-propositions", description: "The claims F5 makes about how rules become sorting systems." },
  { label: "Why Worth-Seeking Is Regulation", href: "#worth-seeking", description: "When love, protection, or belonging were conditional, the nervous system orients toward whatever signals safety." },
  { label: "Three Capitals as Nervous System Stabilisers", href: "#three-capitals", description: "Economic, social, cultural capital — each reducing specific forms of activation." },
  { label: "How Hierarchies Distribute the Substrate", href: "#substrate-distribution", description: "Worth hierarchies determine which children get the conditions that build the interoceptive substrate." },
  { label: "Which Signals Get Suppressed Where", href: "#signal-suppression", description: "Signal-type-specific disruption distributed by position in the hierarchy." },
  { label: "The Filter of Worth", href: "#filter-of-worth", description: "Signal access mistaken for human value. Signal deprivation internalized as inadequacy." },
  { label: "How Worth Hierarchies Self-Reinforce", href: "#self-reinforcing", description: "Five steps from threat to sorting to self-justifying evidence." },
  { label: "Coherence Form by Position", href: "#coherence-by-position", description: "Top: coherence without the body. Subject: contested. Deprived: absent." },
  { label: "Structural Filtering and the Nervous System", href: "#structural-filtering", description: "How the filter holds the nervous system in a chronic state — measurable, not metaphorical." },
  { label: "What This Framework Establishes", href: "#establishes", description: "Consolidated reference: every core concept defined." },
  { label: "Bridge to F6", href: "#bridge", description: "When sorting becomes stable, it stops being experienced as a system. It becomes perception." },
  { label: "Connections Map", href: "#connections", description: "How F5 relates to models and other frameworks." },
  { label: "Where to Go Next", href: "#where-to-go-next", description: "Paths forward depending on what you need." },
  { label: "Common Understanding", href: "#common-understanding", description: "What most people think these words mean — and what the nervous system is actually doing." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "The Filter of Worth (F5) | TEG-Blue Research",
  description:
    "How rules become sorting systems — worth-seeking as nervous system regulation, three capitals as stabilizers, the Filter of Worth, and how hierarchies distribute the developmental conditions that build the interoceptive substrate. Framework F5 of the TEG-Blue 12-framework system.",
  keywords: [
    "worth hierarchies",
    "filter of worth",
    "nervous system regulation",
    "social capital",
    "cultural capital",
    "signal access",
    "structural inequality",
    "interoceptive substrate",
    "allostatic load",
    "system justification",
    "developmental conditions",
    "worth-seeking",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f5-worth-hierarchies",
  },
  openGraph: {
    title: "The Filter of Worth — F5 Framework | TEG-Blue",
    description:
      "How rules become sorting systems — worth hierarchies distribute who gets the conditions for biological restoration. Framework F5 of 12.",
    url: "https://teg-blue.org/framework/f5-worth-hierarchies",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Filter of Worth — TEG-Blue F5",
    description:
      "How worth hierarchies distribute the developmental conditions that build the interoceptive substrate — and produce the evidence that appears to justify the sorting.",
  },
  other: {
    'citation_title': 'Worth Hierarchies Regulate',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F5WorthHierarchiesPage() {
  const P = { A: PATTERN.A.primary, B: PATTERN.B.primary, C: PATTERN.C.primary, D: PATTERN.D.primary };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f5-worth-hierarchies" />

      <PageLayout
        header={
          <FrameworkHero
            badge="FRAMEWORK F5"
            title="The Filter of Worth"
            subtitle="How Rules Become Sorting Systems"
            description="Collective rule systems do not only organize behavior — they organize value. When rule adherence becomes the collective definition of safety, the system begins to sort: who gets belonging, protection, and credibility, and who does not. Worth hierarchies emerge when markers of compliance become markers of human value — and the sorting determines which children get the developmental conditions that build the capacity to perceive their own physiological signals. This framework maps how the sorting works, how it reproduces itself through biology, and how it produces the evidence that appears to justify it."
            group="Collective"
            groupLabel="Collective Arc · F4–F7"
            threadLine="Worth hierarchies regulate — position within the hierarchy as restoration substitute. Scale: value systems. Cost: equity"
            informsModels={[
              { label: "M2", href: "/model/m2-nervous-system-states" },
              { label: "M4", href: "/model/m4-awareness-capacities" },
            ]}
            adjacent={{
              prev: { label: "F4 Rules Regulate", href: "/framework/f4-rules-regulate" },
              next: { label: "F6 Bias Regulates", href: "/framework/f6-bias-regulates" },
            }}
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <article>

          {/* ─── PREREQUISITES ──────────────────────────── */}
          <PrerequisitesBlock items={[
            {
              concept: "Biological Restoration",
              framework: "F1",
              description: "The body's designed process for completing the activation sequence and returning to physiological baseline — the pivot of the entire framework system.",
              href: "/framework/f1-emotional-gradient#designed-process",
            },
            {
              concept: "Six Regulatory Functions",
              framework: "F4",
              description: "Rules serve identity, belonging, worth, power, boundary, and resource regulation — each defined by what the nervous system gets, not what the rule prescribes.",
              href: "/framework/f4-rules-regulate#six-functions",
            },
            {
              concept: "False Coherence",
              framework: "F3",
              description: "The CLS generating narrative that replaces the ESS's physiological signals — a restoration substitute operating through cognition.",
              href: "/framework/f3-false-coherence#false-coherence",
            },
          ]} />


          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <div id="core-propositions" style={{ marginBottom: 24 }}>
            <ExpandableSection title="Core Propositions" type="framework">
              <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
                <li style={propositionItemStyle}>
                  Worth-seeking is nervous system regulation — when love, protection, or belonging were conditional, the nervous system orients toward whatever reduces threat, and in systems where worth determines protection, worth signals are safety signals
                </li>
                <li style={propositionItemStyle}>
                  Three capitals — economic, social, cultural — function as nervous system stabilizers, each reducing specific forms of activation
                </li>
                <li style={propositionItemStyle}>
                  Worth hierarchies determine which children get the relational conditions that build the interoceptive substrate — the hierarchy distributes the developmental conditions differently
                </li>
                <li style={propositionItemStyle}>
                  Signal-type-specific disruption is distributed by position in the hierarchy — different populations receive different signal suppression, producing different substrate states
                </li>
                <li style={propositionItemStyle}>
                  The Filter of Worth is the process by which signal access is mistaken for human value and signal deprivation is internalized as inadequacy — maintained by double false coherence operating in both directions
                </li>
                <li style={propositionItemStyle}>
                  The filter produces the evidence that appears to justify it — accumulated advantage compounds inside, compounding barriers compound outside, and both positions are absorbed through false coherence as truth about the self
                </li>
                <li style={propositionItemStyle}>
                  Structural filtering holds the nervous system in a chronic state through sustained social threat — measurable as allostatic load and accelerated biological aging
                </li>
              </ul>
            </ExpandableSection>
          </div>

          {/* ─── PART 1: WHAT WORTH-SEEKING IS ──────────── */}
          <PartDivider label="PART 1" title="What Worth-Seeking Is" color={P.A} />

          {/* Concept 0: Why Worth-Seeking Is Regulation */}
          <section
            id="worth-seeking"
            aria-labelledby="heading-worth-seeking"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-worth-seeking" style={sectionHeadingStyle(P.B)}>
              Why Worth-Seeking Is Nervous System Regulation
            </h2>

            <p style={proseStyle}>
              When love, protection, or belonging were conditional early in life (<Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link>), the nervous system calibrates a specific equation: being valued reduces threat. Being powerless increases exposure. The system orients toward whatever signals safety — and in environments where worth determines who gets protected, worth signals are safety signals.
            </p>
            <p style={proseStyle}>
              In adulthood, this calibration scales. The person pursuing status, validation, or position is running the same regulation logic the nervous system has been running since the developmental environment calibrated it: find what reduces activation and move toward it. The pursuit does not feel like regulation. It feels like ambition, drive, or wanting to contribute. The CLS constructs a narrative that explains the pursuit in terms that do not reference the nervous system's need — the regulatory function is invisible because the narrative is self-consistent. This is false coherence (<Link href="/framework/f3-false-coherence#false-coherence" style={linkStyle}>F3</Link>) serving regulation.
            </p>
            <p style={proseStyle}>
              This is the direct extension of external regulation (<Link href="/framework/f3-false-coherence#restoration-substitutes" style={linkStyle}>F3</Link>). When biological restoration is structurally unavailable and the person cannot process physiological activation internally, external markers substitute. Worth signals — approval, status, influence, credibility — become regulation sources. Each produces measurable physiological effects: belonging signals activate oxytocin pathways and reduce cortisol; exclusion signals activate the same neural circuits as physical pain. The regulation is physiological, not abstract.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — conditional safety → worth-seeking as regulation */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Bowlby (1969, 1988) — conditional attachment produces seeking for alternative safety sources. Adler (1927) — power-seeking as compensation for experienced powerlessness. Keltner, Gruenfeld & Anderson — power and approach/inhibition theory: power reduces threat sensitivity. Eisenberger, Lieberman & Williams (2003) — social exclusion activating dorsal anterior cingulate cortex.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The explicit pathway from conditional safety (F2) through calibration to adult worth-seeking as nervous system regulation — traced through the regulation thread. The chain: early conditional safety → system calibrates to worth signals → adult worth-seeking functions as nervous system regulation → worth-seeking scales into institutional sorting. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 1: Three Capitals */}
          <section
            id="three-capitals"
            aria-labelledby="heading-three-capitals"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-three-capitals" style={sectionHeadingStyle(P.B)}>
              Three Capitals as Nervous System Stabilisers
            </h2>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Capital</th>
                    <th style={thStyle}>What the Nervous System Gets</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Economic", "Independence signals — \"I can absorb setbacks; I can leave if I need to.\" Reduced dependency on others' goodwill. The sympathetic activation that accompanies financial precarity settles when economic resources provide a buffer."]} />
                  <TableRow cells={["Social", "Alliance signals — \"People will protect me; I am connected to others who have resources.\" The ventral vagal system registers network connection as relational safety. Social isolation activates threat circuits."]} />
                  <TableRow cells={["Cultural", "Predictability signals — \"I know how this works; I belong in this space.\" Cultural fluency reduces cognitive load. The amygdala's threat-detection sensitivity decreases when the environment is legible."]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Each capital is compelling because it genuinely reduces nervous system activation in systems where these markers predict who gets protected and who gets exposed.
            </p>
            <p style={proseStyle}>
              Each expresses differently across the gradient. In Connection, capitals are shared — resources, relationships, and knowledge serve the group. In chronic Protection, capitals are hoarded — losing them activates the threat response. In chronic Strategic Management, capitals are deployed strategically — displayed and managed to maintain position. In chronic Domination, capitals are enforced — used to establish hierarchy and to exclude those who lack them.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — three capitals mapped to nervous system stabilisation */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Bourdieu (1986) — three forms of capital: economic, social, cultural. Weber — status and class as independent dimensions of stratification. Spence (1973) — signalling theory: how markers signal value in competitive systems. Sen (1999) — capability approach: what people can actually do and be, constrained by their access.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The nervous system translation of Bourdieu's three capitals — economic as independence signals, social as alliance signals, cultural as predictability signals. The gradient expression (shared → hoarded → deployed → enforced) connects capital dynamics to the nervous system states <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link> maps. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 2: HOW HIERARCHIES DISTRIBUTE ─────── */}
          <PartDivider label="PART 2" title="How Hierarchies Distribute the Substrate" color={P.B} />

          {/* Concept 2: How Hierarchies Determine Substrate */}
          <section
            id="substrate-distribution"
            aria-labelledby="heading-substrate-distribution"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-substrate-distribution" style={sectionHeadingStyle(P.B)}>
              How Hierarchies Determine Which Children's Substrates Get Built
            </h2>

            <p style={proseStyle}>
              Worth hierarchies do not only distribute resources. They determine who gets the relational conditions that build the interoceptive substrate.
            </p>
            <p style={proseStyle}>
              The interoceptive substrate develops through thousands of co-regulation repetitions (<Link href="/framework/f2-awareness-calibration" style={linkStyle}>F2</Link>). The caregiver's nervous system must be available — regulated enough to hold the child's activation, present enough to respond, flexible enough to move between states and return. This requires safety, time, and co-regulatory capacity in the caregiver.
            </p>
            <p style={proseStyle}>
              Worth hierarchies determine which caregivers have these conditions. A caregiver working three jobs, carrying chronic financial precarity, navigating unsafe housing, and absorbing the physiological cost of structural invisibility has less of all three — because the hierarchy has allocated less safety, less time, and more sustained activation. The caregiver's nervous system runs at elevated baseline. The co-regulation that would build the child's interoceptive substrate requires the caregiver to be in or near Connection. A caregiver whose nervous system is held in chronic Protection by structural conditions provides a different developmental environment.
            </p>
            <p style={proseStyle}>
              The claim is structural: when a hierarchy systematically allocates less safety to a population, that population's children develop under conditions that produce a different distribution of substrate states. The hierarchy reproduces the substrate state — not in every individual, but across the population.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — hierarchy distributing developmental conditions */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Schore (2001) — caregiver regulation as the mechanism through which neural architecture develops. Meaney (2001) — epigenetic effects of maternal care on offspring stress-response systems. Fonagy et al. (2002) — mentalization capacity as intergenerational. Wilkinson & Pickett (2009) — inequality as a determinant of health and developmental outcomes.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The specific pathway from worth hierarchy through caregiver conditions to offspring substrate state — traced through F2's developmental through-line. The mechanism: the hierarchy allocates the developmental conditions that determine the substrate state. The substrate state determines the capacity configuration. The capacity configuration determines which coherence form the next generation's CLS builds. The hierarchy reproduces itself through the biology. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 3: Which Signals Get Suppressed */}
          <section
            id="signal-suppression"
            aria-labelledby="heading-signal-suppression"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-signal-suppression" style={sectionHeadingStyle(P.B)}>
              Which Signals Get Suppressed in Which Populations
            </h2>

            <p style={proseStyle}>
              Developmental disruption does not suppress "emotions" as a global category. It targets specific signal types in specific populations (<Link href="/framework/f2-awareness-calibration#disruption-conditions" style={linkStyle}>F2</Link>). Worth hierarchies are the mechanism that distributes this targeting at population scale.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Populations socialized to suppress relational signals</strong> — sadness, grief, loneliness, longing, shame. The interoceptive substrate for these signals is never built. The person develops sharp Interpersonal Affect Perception (RE) — reading others with precision — without Affective Resonance (ER) and without Interoceptive Self-Awareness (SEA). The chain starts at absent interoceptive access. Coherence without the body. The override is invisible because it was never experienced as an override.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Populations socialized to contradict internal signals</strong> — the body's signals are active but the person is taught to distrust them. "You're overreacting." "That's not what happened." The interoceptive substrate is present (ER is online) but SEA was contradicted. The chain starts at contested interoceptive access. Coherence contested by the body. The person senses something is wrong and cannot trust the sensing.
            </p>
            <p style={proseStyle}>
              The worth hierarchy determines which populations receive which form of disruption. Populations at the top tend toward absent access (relational signals suppressed, external reading sharpened). Populations subject to the hierarchy tend toward contested access (signals active, sensing contradicted by the hierarchy's narrative that the sorting is fair). This extends beyond gender — racialized socialisation, class-based socialisation, and other structural sorting systems each produce their own signal-type-specific disruption patterns.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — signal-type-specific disruption by hierarchy position */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Fine (2010) — gendered socialisation as signal-specific. Connell (2005) — masculinities as socially constructed configurations. Krieger (2001) — embodiment: how social inequality gets under the skin through specific biological pathways. Collins (2000) — intersecting systems producing qualitatively different experiences at each intersection.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Signal-type-specific disruption at population scale — showing that worth hierarchies produce different substrate states in different populations, not uniform suppression. The hierarchy distributes specific forms of disruption that produce specific capacity configurations serving specific functions in maintaining the hierarchy. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 4: The Filter of Worth */}
          <section
            id="filter-of-worth"
            aria-labelledby="heading-filter-of-worth"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-filter-of-worth" style={sectionHeadingStyle(P.B)}>
              How Signal Access Gets Mistaken for Human Value
            </h2>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The Filter of Worth</strong> is the process by which external safety signals are mistaken for human value, and repeated signal deprivation is internalized as personal inadequacy.
            </p>
            <p style={proseStyle}>
              The filter operates through repeated allocation patterns — who gets believed, who gets resourced, who gets protected, whose version of events gets accepted — that stabilize into what feels like direct perception of people's value. The filter is not a belief system someone adopts. It operates below conscious evaluation: who gets taken seriously in a meeting, whose pain gets responded to, whose potential gets recognized, whose mistakes get forgiven.
            </p>
            <p style={proseStyle}>
              The connection to false coherence is direct. The person inside the filter absorbs the position through false coherence: "I earned this through merit." The person outside the filter absorbs a different narrative: "Something is wrong with me." Both narratives serve regulation — the CLS building a coherent account from available data that reduces activation. Neither reflects the structural operation of the filter.
            </p>
            <p style={proseStyle}>
              The connection to <Link href="/framework/f4-rules-regulate#six-functions" style={linkStyle}>F4's rule systems</Link> is structural. The filter formalizes through rules that appear meritocratic but measure signal access: hiring criteria that measure cultural capital, promotion systems that reward social capital, funding structures that require economic capital. Performance rules teach that worth must be earned. The Filter of Worth shows what "earning" measures: proximity to the markers the system already recognizes.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — the filter: signal access → perceived value */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Bourdieu & Passeron (1977) — social reproduction through credential systems. Jost & Banaji (1994) — system justification: defending existing arrangements as fair. Crenshaw (1989) — intersectionality: how multiple axes of structural filtering compound. Collins (2000) — the matrix of domination. Goffman (1963) — stigma: deviance from expected signals producing spoiled identity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The Filter of Worth as a named systemic mechanism — making visible how signal access becomes mistaken for human value. The double false coherence framing shows that both insider and outsider narratives serve regulation rather than accuracy. The connection to F4's rule systems shows that "merit" functions as a rule the CLS absorbs as truth, and the filter's outcomes become the evidence the rule is correct. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── PART 3: HOW HIERARCHIES SELF-REINFORCE ─── */}
          <PartDivider label="PART 3" title="How Hierarchies Self-Reinforce" color={P.C} />

          {/* Concept 5: Self-Reinforcing Loop */}
          <section
            id="self-reinforcing"
            aria-labelledby="heading-self-reinforcing"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-self-reinforcing" style={sectionHeadingStyle(P.B)}>
              How Worth Hierarchies Self-Reinforce
            </h2>

            <p style={proseStyle}>
              The mechanism by which threat produces worth sorting and worth sorting stabilizes itself operates through five steps:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 1:</strong> Threat increases dependency sensitivity. When the nervous system is under sustained activation, it becomes hypervigilant to ranking and exclusion signals. Where do I stand? Am I safe here?
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 2:</strong> Validation becomes a stabilizer. Belonging signals reduce cortisol and activate oxytocin pathways. When safety is unreliable, validation-seeking becomes a regulation strategy.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 3:</strong> Power becomes the highest safety proxy. Control over access, consequences, and protection provides the most reliable threat reduction. The three capitals converge on this.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 4:</strong> Proxies become sorting rules. The informal signals of who-is-safe formalise into criteria, metrics, and standards. This is <Link href="/framework/f4-rules-regulate#internalisation" style={linkStyle}>F4's internalisation loop</Link> operating at the worth level.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Step 5:</strong> The filter becomes internalized as self-worth. Inside the filter: success, competence, merit. Outside: failure, inadequacy, insufficient effort. Both positions are absorbed through false coherence as truth about the self rather than the structural outcome of signal access.
            </p>
            <p style={proseStyle}>
              The loop closes at Step 5. The outcomes appear to justify the original sorting. The people inside the filter have more resources, more visibility, more opportunities — and their accumulation is cited as evidence that the sorting was correct.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: animated — five-step self-reinforcing loop */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Gilbert & Price — social rank theory: hierarchical sensitivity under threat. Merton (1968) — Matthew effect: accumulated advantage in institutions. DiMaggio & Powell — institutional isomorphism: organizations converging on the same sorting criteria. Jost & Banaji (1994) — system justification: how the sorted defend the sorting.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The five steps as a unified mechanism with loop closure — Step 5 generating the evidence that appears to justify Step 1. The scale-invariant parallel to F4's internalisation loop demonstrates architectural consistency: the same mechanism operates at the level of rules (F4) and at the level of worth (F5). This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 6: Coherence Form by Position */}
          <section
            id="coherence-by-position"
            aria-labelledby="heading-coherence-by-position"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-coherence-by-position" style={sectionHeadingStyle(P.B)}>
              How Position Determines Coherence Form
            </h2>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Top of the hierarchy — coherence without the body.</strong> Those with maximum access to safety proxies carry the most complete false coherence. The CLS has RE, its own cognitive output, and the cultural narratives that confirm the position. The interoceptive substrate is absent or irrelevant — structural power provides enough data and environmental control that the CLS operates without the body's signals. "The system works. I earned my position. The sorting is fair." As external power increases, interoceptive access tends to decrease — because power replaces the need for it.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Subject to the hierarchy — coherence contested by the body.</strong> Those who lack safety proxies but whose interoceptive substrates are active carry a different relationship to the sorting. The body signals that something is wrong. The hierarchy's narrative says the sorting is fair: "Work harder." "You're being too sensitive." The person oscillates between the body's data and the collective narrative. The hierarchy invests in maintaining this oscillation — discrediting the sensing that would reveal the sorting as structural.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Bottom of the hierarchy — absent access through deprivation.</strong> When the hierarchy has systematically deprived a population of the conditions that build the interoceptive substrate across generations, the coherence form is absent access. The rules feel like reality. The sorting feels natural. The person does not sense the filter because the substrate that would signal "something doesn't match" was never built. This is the deepest structural effect: the hierarchy produces the biological condition that makes the hierarchy invisible from the inside.
            </p>
            <p style={proseStyle}>
              The hierarchy's stability depends on the distribution of these three forms. When most of the population carries either absent access or contested access with the sensing successfully discredited, the system is stable. When the contested group begins trusting the body's signals over the hierarchy's narrative, the system destabilizes.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — three positions, three coherence forms */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  Jost & Banaji (1994) — system justification operating differently at different positions. Freire (1970) — conscientização as moving from absorbed oppression to critical awareness. Festinger (1957) — cognitive dissonance when two data sources conflict.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Three coherence forms mapped to position in the worth hierarchy — showing that the same sorting system produces structurally different relationships to reality at different positions. Position determines substrate state, substrate state determines coherence form, coherence form determines the person's relationship to the hierarchy. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* Concept 7: Structural Filtering */}
          <section
            id="structural-filtering"
            aria-labelledby="heading-structural-filtering"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-structural-filtering" style={sectionHeadingStyle(P.B)}>
              How Structural Filtering Holds the Nervous System in Place
            </h2>

            <p style={proseStyle}>
              The Filter of Worth does not only distribute resources unevenly. It produces measurable physiological effects in the people it filters out. Chronic invisibility — the repeated experience of being unheard, dismissed, passed over, disbelieved, and excluded — functions as chronic social threat.
            </p>
            <p style={proseStyle}>
              The nervous system interprets these signals as it interprets any sustained threat: cortisol elevation is sustained, the HPA axis does not stand down, muscle tension is maintained, the perceptual field narrows. The ventral vagal system — which supports social engagement and co-regulation — withdraws. The nervous system shifts into chronic Protection. The filter is producing ongoing signals that hold the nervous system in a protective configuration.
            </p>
            <p style={proseStyle}>
              The cost is not only the events themselves. It is the anticipation. The nervous system that has learned to expect dismissal begins activating before the next interaction. The activation becomes the baseline. The person presents with chronic hypervigilance, fatigue, self-doubt, understating needs, overworking to prove worth, anticipatory bracing.
            </p>
            <p style={proseStyle}>
              The physiological consequences are documented as allostatic load (McEwen) — the cumulative cost of repeated stress adaptation — and the weathering hypothesis (Geronimus) — accelerated biological aging produced by sustained structural stress. These are not metaphors. They are measurable: elevated cortisol, inflammatory markers, cardiovascular strain, telomere shortening.
            </p>

            {/* Section diagram placeholder */}
            {/* Diagram type: static — structural filtering producing chronic state lock */}
            {/* Diagram pass — not implemented in content rewrite */}

            <div style={expandableRowStyle}>
              <ExpandableSection title="Established Research" type="framework">
                <p style={expandedProseStyle}>
                  McEwen (1998) — allostatic load: cumulative physiological cost of repeated stress adaptation. Geronimus (1992) — weathering hypothesis: accelerated biological aging from sustained structural stress. Krieger (2001) — embodiment: social inequality producing measurable biological effects. Porges (2011) — chronic social threat producing sustained defensive physiological states. Wilkinson & Pickett (2009) — inequality as a determinant of health outcomes.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Structural filtering as a mechanism that holds the nervous system in a chronic state — connecting documented health disparities (allostatic load, weathering) to the nervous system states <Link href="/model/m2-nervous-system-states" style={linkStyle}>M2</Link> maps. The person's chronic state is a physiological adaptation to the conditions the hierarchy provides. This is a working hypothesis, open to testing.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── WHAT THIS FRAMEWORK ESTABLISHES ─────────── */}
          <EstablishesSection
            color={P.B}
            items={[
              {
                term: "Worth-seeking as regulation",
                definition: "The nervous system orients toward worth signals because the developmental environment calibrated worth as safety. The pursuit is physiological, not abstract.",
              },
              {
                term: "Three capitals as nervous system stabilizers",
                definition: "Economic (independence signals), social (alliance signals), cultural (predictability signals). Each reduces specific forms of activation. Each expresses differently across the gradient.",
              },
              {
                term: "Hierarchy distributes substrate-building conditions",
                definition: "Worth hierarchies determine which caregivers have safety, time, and co-regulatory capacity — sorting who gets the interoceptive substrate. The hierarchy reproduces the substrate state across populations.",
              },
              {
                term: "Signal-type-specific disruption at population scale",
                definition: "Different populations receive different signal suppression — producing different substrate states serving different functions in maintaining the hierarchy.",
              },
              {
                term: "The Filter of Worth",
                definition: "Signal access mistaken for human value. Signal deprivation internalized as inadequacy. Maintained by double false coherence operating in both directions.",
              },
              {
                term: "The worth loop",
                definition: "Five-step self-reinforcing mechanism: threat → dependency sensitivity → validation as stabilizer → power as proxy → sorting formalizes → filter internalized as self-worth. Loop closes with the evidence appearing to justify the sorting.",
              },
              {
                term: "Three coherence forms by position",
                definition: "Top: coherence without the body (absent access, maximum false coherence). Subject to hierarchy: contested (body signals wrong, hierarchy says fair). Bottom: absent access through deprivation (rules feel like reality). Distribution determines stability.",
              },
              {
                term: "Structural filtering holds the nervous system",
                definition: "Chronic invisibility functions as chronic social threat. Measurable as allostatic load and accelerated biological aging. The person's chronic state is an adaptation to the conditions the hierarchy provides.",
              },
            ]}
          />

          {/* ─── BRIDGE ──────────────────────────────────── */}
          <BridgeSection
            color={P.B}
            established="F5 established how rules become sorting systems — how worth-seeking serves regulation, how three capitals stabilize the nervous system, how hierarchies distribute the conditions that build the substrate, how signal access gets mistaken for human value, and how the filter self-reinforces through the evidence it produces."
            question="When worth sorting becomes stable and internalized, it stops being experienced as a system. It becomes perception. Who 'looks' competent, who 'seems' trustworthy, who 'feels' credible — these assessments arrive before conscious evaluation begins, shaped by the same state-dependent sensory filtering that shapes individual perception, now operating across populations."
            nextFramework="F6"
            nextTitle="Bias Regulates"
            nextHref="/framework/f6-bias-regulates"
          />

          {/* ─── CONNECTIONS MAP ─────────────────────────── */}
          <ConnectionsMap
            color={P.D}
            connections={[
              {
                id: "M2: Nervous System States",
                href: "/model/m2-nervous-system-states",
                description: "The four states express through worth-seeking. In Connection, worth is recognized without conditions. In chronic states, worth must be defended, curated, or enforced. Structural filtering holds nervous systems in chronic states.",
              },
              {
                id: "M4: Awareness Capacities",
                href: "/model/m4-awareness-capacities",
                description: "F5 shows that worth hierarchies determine which caregivers can build the interoceptive substrate. The hierarchy distributes the three coherence forms by position and distributes signal-type-specific disruption at population scale.",
              },
              {
                id: "F4: Rules Regulate",
                href: "/framework/f4-rules-regulate",
                description: "F4 showed how rules organize behavior. F5 shows what rules sort — who gets the conditions that allow biological restoration to develop, and who does not. The worth loop is F4's internalisation loop operating at the worth level.",
              },
              {
                id: "F3: Adult Cognition & False Coherence",
                href: "/framework/f3-false-coherence",
                description: "Double false coherence maintains the filter from both sides — the insider's 'I earned this' and the outsider's 'something is wrong with me' both serve regulation rather than accuracy.",
              },
              {
                id: "F2: Developmental Calibration",
                href: "/framework/f2-awareness-calibration",
                description: "F2 established the developmental through-line. F5 shows that worth hierarchies operate on the first link: which children develop under safety and which develop under sustained threat.",
              },
              {
                id: "F6: Bias Regulates",
                href: "/framework/f6-bias-regulates",
                description: "F5 describes what the sorting produces. F6 describes how the sorting becomes invisible — how perception itself locks into the hierarchy's framing.",
              },
            ]}
          />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <NavSection
            color={P.D}
            items={[
              { label: "Continue to F6 — how the sorting becomes invisible through perception", href: "/framework/f6-bias-regulates", linkText: "F6: Bias Regulates \u2192" },
              { label: "See the nervous system states that structural filtering produces", href: "/model/m2-nervous-system-states", linkText: "M2: Nervous System States \u2192" },
              { label: "See how rules became the sorting system", href: "/framework/f4-rules-regulate", linkText: "F4: Rules Regulate \u2192" },
              { label: "See the awareness architecture the hierarchy distributes", href: "/model/m4-awareness-capacities", linkText: "M4: Awareness Capacities \u2192" },
              { label: "See where the repair arc begins", href: "/framework/f8-repairing-awareness", linkText: "F8: Awareness Rebuilds Through Safety \u2192" },
              { label: "Explore all 12 frameworks", href: "/frameworks-map", linkText: "Framework Map \u2192" },
              { label: "Look up key terms", href: "/glossary", linkText: "Glossary \u2192" },
            ]}
          />


          {/* ─── COMMON UNDERSTANDING ──────────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Merit",
                commonUnderstanding: "Earned achievement — the natural result of talent, effort, and hard work. The fair basis for distributing resources and opportunity.",
                definition: "Proximity to the signals the system already recognizes. Hiring criteria that measure cultural capital, promotion systems that reward social capital, funding structures that require economic capital. Performance rules teach that worth must be earned and displayed. The Filter of Worth shows what 'earning' measures: signal access, not intrinsic capacity.",
              },
              {
                title: "Self-worth",
                commonUnderstanding: "An internal quality you either have or lack — confidence, self-esteem, believing in yourself.",
                definition: "A regulation strategy. When love, protection, or belonging were conditional, the nervous system calibrates a specific equation: being valued reduces threat. Worth signals — approval, status, credibility — produce measurable physiological effects: belonging signals activate oxytocin pathways and reduce cortisol.",
              },
              {
                title: "Inequality",
                commonUnderstanding: "An unfortunate but natural outcome of different abilities and effort levels — or a political problem requiring redistribution.",
                definition: "The structural distribution of the developmental conditions that build the interoceptive substrate. The hierarchy determines which children develop under safety and which develop under sustained threat. The substrate state follows. The hierarchy reproduces itself through the biology.",
              },
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
            "@id": "https://teg-blue.org/framework/f5-worth-hierarchies#article",
            headline: "The Filter of Worth: How Rules Become Sorting Systems",
            description:
              "How worth hierarchies emerge from rule systems, distribute the developmental conditions that build the interoceptive substrate, and produce the evidence that appears to justify the sorting. Framework F5 of the TEG-Blue 12-framework system.",
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
              "@id": "https://teg-blue.org/framework/f5-worth-hierarchies",
            },
            about: [
              { "@type": "Thing", name: "Worth Hierarchies" },
              { "@type": "Thing", name: "Filter of Worth" },
              { "@type": "Thing", name: "Social Capital" },
              { "@type": "Thing", name: "Structural Inequality" },
              { "@type": "Thing", name: "Allostatic Load" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Distinction (Bourdieu, 1986)" },
              { "@type": "ScholarlyArticle", name: "Social Dominance (Sidanius & Pratto, 1999)" },
              { "@type": "ScholarlyArticle", name: "The Spirit Level (Wilkinson & Pickett, 2009)" },
              { "@type": "ScholarlyArticle", name: "Allostatic Load (McEwen, 1998)" },
              { "@type": "ScholarlyArticle", name: "Intersectionality (Crenshaw, 1989)" },
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
            ],
            keywords: [
              "worth hierarchies",
              "filter of worth",
              "social capital",
              "cultural capital",
              "structural inequality",
              "allostatic load",
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
              { name: "F5: The Filter of Worth", url: "/framework/f5-worth-hierarchies" },
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
                question: "What is the Filter of Worth?",
                answer:
                  "The process by which external safety signals are mistaken for human value, and repeated signal deprivation is internalized as personal inadequacy. The filter operates through allocation patterns — who gets believed, resourced, protected — that stabilize into what feels like direct perception of people's value. Maintained by double false coherence: both insider ('I earned this') and outsider ('something is wrong with me') narratives serve regulation.",
              },
              {
                question: "How do worth hierarchies reproduce across generations?",
                answer:
                  "The hierarchy determines which caregivers have safety, time, and co-regulatory capacity. Those conditions determine which children's interoceptive substrates get built. The substrate state determines which coherence form the next generation's CLS builds. The hierarchy reproduces the biological conditions that make the hierarchy feel natural — not in every individual, but across populations.",
              },
              {
                question: "What are the three capitals as nervous system stabilizers?",
                answer:
                  "Economic capital provides independence signals (reduced dependency on others' goodwill). Social capital provides alliance signals (network connection as relational safety). Cultural capital provides predictability signals (environmental legibility reducing threat detection). Each genuinely reduces nervous system activation in systems where these markers predict who gets protected.",
              },
              {
                question: "How does structural filtering affect the nervous system?",
                answer:
                  "Chronic invisibility — being unheard, dismissed, passed over — functions as chronic social threat. Cortisol stays elevated, the HPA axis does not stand down, the ventral vagal system withdraws. Documented as allostatic load and the weathering hypothesis. The person's chronic state is a physiological adaptation to the conditions the hierarchy provides.",
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
              name: "The Filter of Worth (F5) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f5-worth-hierarchies",
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
