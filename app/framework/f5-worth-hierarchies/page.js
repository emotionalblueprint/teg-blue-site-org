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
  { label: "Core Propositions", href: "#core-propositions", description: "Worth-seeking is a nervous system regulation strategy — the compass orienting toward whatever reduces threat." },
  { label: "Overview", href: "#overview", description: "F4 produces rule systems that determine belonging. F5 asks what those systems sort." },
  { label: "Power as Safety", href: "#power-as-safety", description: "When love or belonging were conditional early in life, power and status become regulation strategies." },
  { label: "Safety Proxies", href: "#safety-proxies", description: "Economic, social, and cultural capital function as nervous system stabilisers." },
  { label: "The Filter of Worth", href: "#filter-of-worth", description: "Signal access mistaken for human value. Signal deprivation internalised as inadequacy." },
  { label: "The Five-Step Worth Loop", href: "#five-step-worth-loop", description: "Threat → validation-seeking → power-as-proxy → formal sorting → internalised worth." },
  { label: "Chronic Invisibility", href: "#chronic-invisibility", description: "Structural filtering produces chronic social threat. The compass gets stuck in Protection." },
  { label: "Double False Coherence", href: "#self-reinforcing-advantage", description: "'I earned this' and 'something is wrong with me' are both false coherence serving regulation." },
  { label: "What F5 Establishes", href: "#what-f5-establishes", description: "The Filter of Worth as a named mechanism, the safety-proxy framework, the five-step loop." },
  { label: "Research Foundations", href: "#research-foundations", description: "Sociology, social psychology, behavioural economics, network science, neuroscience, critical theory." },
  { label: "Bridge to F6", href: "#bridge-to-f6", description: "When worth sorting becomes stable and internalised, it stops being experienced as a system. It becomes perception." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Worth Hierarchies Regulate — How Rules Become Sorting Systems (F5) | TEG-Blue Research",
  description:
    "How threat-stabilized rule systems produce worth hierarchies — through the nervous system's orientation toward whatever signals safety — and how those hierarchies formalize into self-reinforcing sorting systems. Framework F5 of 12.",
  keywords: [
    "worth hierarchies",
    "filter of worth",
    "safety proxies",
    "nervous system regulation",
    "social capital",
    "structural inequality",
    "chronic invisibility",
    "status signaling",
    "worth sorting",
    "cumulative advantage",
    "false coherence",
    "emotional technology",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f5-worth-hierarchies",
  },
  openGraph: {
    title: "Worth Hierarchies Regulate — How Rules Become Sorting Systems — F5 Framework | TEG-Blue",
    description:
      "How threat-stabilized rule systems produce worth hierarchies that distribute credibility, resources, and protection based on signal access rather than intrinsic worth. The second framework in the collective arc.",
    url: "https://teg-blue.org/framework/f5-worth-hierarchies",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Worth Hierarchies Regulate — TEG-Blue F5",
    description:
      "How threat-stabilized rule systems produce worth hierarchies that distribute credibility, resources, and protection based on signal access.",
  },
  other: {
    'citation_title': 'Worth Hierarchies Regulate: How Rules Become Sorting Systems',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F5WorthHierarchiesPage() {
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
              title="Worth Hierarchies Regulate"
              subtitle="How Rules Become Sorting Systems"
              description="How threat-stabilized rule systems (F4) produce worth hierarchies — through the nervous system's orientation toward whatever signals safety — and how those hierarchies formalize into self-reinforcing sorting systems that distribute credibility, resources, and protection based on signal access rather than intrinsic worth. The second framework in the collective arc (F4–F7), mapping how structural sorting determines access to the safety conditions that M2 development and M3 restoration require."
              group="Collective"
              groupLabel="Collective · F4–F7"
              threadLine="Worth hierarchies regulate · Cost: Equity"
              adjacent={{
                prev: { label: "F4 Rules Regulate", href: "/framework/f4-rules-regulate" },
                next: { label: "F6 Bias Regulates", href: "/framework/f6-bias-regulates" },
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
              style={sectionHeadingStyle(SPECTRUM.cobalt)}
            >
              Core Propositions
            </h2>
            <PropositionBox label="FOUNDATIONAL CLAIM">
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={propositionItemStyle}>
                  Worth-seeking is a nervous system regulation strategy — the compass orienting toward whatever reduces threat in environments where worth determines protection
                </li>
                <li style={propositionItemStyle}>
                  Safety proxies — economic, social, and cultural capital — function as nervous system stabilizers because they genuinely reduce threat in systems where these markers predict who gets protected
                </li>
                <li style={propositionItemStyle}>
                  The Filter of Worth is a systemic mechanism by which signal access is mistaken for human value and signal deprivation is internalized as personal inadequacy
                </li>
                <li style={propositionItemStyle}>
                  A five-step worth loop operates at both individual and institutional scales: threat increases dependency sensitivity, validation becomes regulatory, power becomes the highest safety proxy, proxies formalize into sorting rules, and the filter internalizes as self-worth
                </li>
                <li style={propositionItemStyle}>
                  Chronic invisibility — the repeated experience of being unheard, dismissed, and excluded — produces a structurally stuck compass, not a cognitive distortion
                </li>
                <li style={propositionItemStyle}>
                  Outcome gaps between insiders and outsiders are structural artifacts of proxy access, not evidence of intrinsic worth — maintained by double false coherence operating in both directions
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
              Overview — The Second Collective Framework
            </h2>

            <p style={proseStyle}>
              F4 explains how individual nervous system patterns scale into collective rule systems — through emotional distortion, external regulation, and false coherence operating at the group level. Rules regulate. They provide predictability, belonging protection, and conformity.
            </p>
            <p style={proseStyle}>
              But rule systems do not just organize behavior. They organize value. When rule adherence becomes the social definition of safety, the system begins to sort people. Those who comply — who perform the right roles, follow the right rules, display the right markers — receive more belonging, protection, and credibility. Those who do not — or cannot — receive less. Over time, the sorting formalizes. It stops looking like rules and starts looking like reality.
            </p>

            <KeyStatement>
              The regulation thread: F1 defines Biological Restoration as the return mechanism. F2 shows what happens when the return is never learned. F3 shows what cognition does in its place. F4 shows what happens when enough people running those mechanisms are in proximity: collective rule systems. F5 shows what those rule systems sort — belonging, protection, and credibility — distributed based on proximity to safety signals.
            </KeyStatement>

            <p style={proseStyle}>
              F5 is the second framework in the collective arc (F4–F7). Each describes a progressively larger-scale substitute for the regulation that was never built:
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
              Worth-seeking is a nervous system regulation strategy — the next substitute in the thread. When rules (F4) are not enough to regulate, position within the hierarchy provides an additional layer of stability. Naming the mechanism does not remove responsibility. It explains why status becomes regulating, so we can keep accountability while targeting the real drivers.
            </p>

            <ExpandableSection title="How This Framework Emerged" type="framework">
              <p style={expandedProseStyle}>
                F5 emerged from recognizing that multiple frameworks — sociology, economics, social psychology, neuroscience, attachment theory, critical theory — all describe the same phenomenon: how systems distribute resources and protection based on hierarchical sorting. Sociology (Bourdieu, Weber, Goffman) describes capital forms, status, stigma, and social reproduction. Social psychology (Sidanius &amp; Pratto, Jost &amp; Banaji) describes social dominance and system justification. Behavioral economics (Spence) describes signaling theory. Network science (Bonacich, Barab&aacute;si) describes eigenvector centrality and preferential attachment. Neuroscience (Porges, McEwen, Sapolsky) describes how power and status function as nervous system stabilizers. Attachment theory (Bowlby) describes how early validation deprivation creates validation-seeking. Critical theory (Crenshaw, Collins, Sen) describes intersectionality and structural exclusion. Health psychology (Wilkinson &amp; Pickett, Krieger, Geronimus) describes inequality and health outcomes.
              </p>
              <p style={expandedProseStyle}>
                The synthesis: organizing these into a model showing that hierarchy and worth-sorting are nervous system regulation mechanisms at the systemic level, not moral or ideological systems. When relational safety is unreliable, systems substitute position-based safety — producing sorting that appears meritocratic but measures signal access.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── POWER AS SAFETY ────────────────────────────── */}
          <section
            id="power-as-safety"
            aria-labelledby="heading-power-as-safety"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-power-as-safety" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              Power as Safety — Why Worth-Seeking Is Regulation
            </h2>

            <p style={proseStyle}>
              When love, protection, or belonging were conditional early in life (F2), the nervous system learns a specific equation: being valued often equals being safer. Being powerless often equals being exposed. In many systems, position does not just increase access — it increases immunity: mistakes are forgiven faster, boundaries are negotiated differently, and consequences are softer.
            </p>
            <p style={proseStyle}>
              In adulthood, this logic scales. Power becomes compelling — not because humans are shallow, but because power reduces vulnerability by increasing control over access, consequences, and protection. The person pursuing status, validation, or position is running the same regulation logic the nervous system has been running since childhood: find what reduces threat and move toward it.
            </p>
            <p style={proseStyle}>
              This is the direct extension of F3's external regulation. When internal emotional processing is structurally unavailable, external markers substitute. Worth signals — approval, status, influence, credibility — become the regulation source. The person does not experience this as seeking regulation. It feels like ambition, drive, pride, or wanting to contribute. The distinction is not having goals — it is whether the nervous system experiences position as <em>required for safety</em>. False coherence (F3) makes the regulation strategy invisible to the person running it.
            </p>

            <KeyStatement>
              The regulation thread at this scale: when the biological return (F1) was never learned, and cognitive replacement (F3) is running, and rules have been absorbed as truth (F4) — worth hierarchies provide an additional layer of stability. Position within the hierarchy becomes a regulation source: knowing where you stand reduces uncertainty, and reducing uncertainty reduces threat.
            </KeyStatement>

            <p style={proseStyle}>
              Worth sorting expresses differently across the four modes. In Connection, worth is recognized as inherent — all people have it. In chronic Protection, worth is something to defend — position feels fragile. In chronic Control, worth is managed — curated, displayed, strategically deployed. In chronic Domination, worth hierarchy is enforced as entitlement — some people simply matter more.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Bowlby (1969, 1988) — conditional attachment creates seeking for alternative safety sources. Adler (1927) — power-seeking as compensation for experienced powerlessness. Keltner, Gruenfeld, &amp; Anderson — power and approach/inhibition theory. Control theory — control reduces anxiety. Systems theory — local patterns scale to systemic patterns.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The explicit connection between conditional safety (F2), stuck compass positions (F1), and adult worth-seeking as regulation strategy. While both phenomena are known separately — conditional attachment produces validation-seeking, power compensates for powerlessness — F5's specific contribution is tracing the pathway through the regulation thread: early conditional safety → compass calibrates to worth signals → adult worth-seeking functions as nervous system regulation → worth-seeking scales into institutional sorting.
              </p>
              <p style={expandedProseStyle}>
                The reframe changes what worth-seeking <em>is</em>. It is not ambition, vanity, materialism, or personality. It is the nervous system doing what it was taught to do: orienting toward whatever reduces threat. In environments where worth determines protection, worth-seeking is adaptive. The problem is not the person. The problem is the environment that made worth the price of safety.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── SAFETY PROXIES ─────────────────────────────── */}
          <section
            id="safety-proxies"
            aria-labelledby="heading-safety-proxies"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-safety-proxies" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              Safety Proxies and the Three Capitals
            </h2>

            <p style={proseStyle}>
              A <strong style={{ color: TEXT.primary }}>safety proxy</strong> is a marker that signals reduced threat and increased protection within an environment. Safety proxies are compelling because they predict how protection will be allocated when conflict or scarcity arrives. Common proxies include status, proximity to decision-makers, resource access, institutional endorsement, network connections, and cultural fluency.
            </p>
            <p style={proseStyle}>
              They are compelling not because people are superficial, but because they genuinely reduce nervous system threat — in systems where these markers predict who gets protected and who gets exposed.
            </p>

            <h3 style={conceptHeadingStyle}>
              Bourdieu's Three Capitals Through a Nervous System Lens
            </h3>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Capital</th>
                    <th style={thStyle}>Sociological Function</th>
                    <th style={thStyle}>Nervous System Function</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Economic",
                    "Financial resources, property, income",
                    "Independence and protection signals — \"I can leave if I need to; I can absorb setbacks\"",
                  ]} />
                  <TableRow cells={[
                    "Social",
                    "Networks, relationships, alliances",
                    "Alliance and insulation signals — \"I have people who will protect me; I am connected to power\"",
                  ]} />
                  <TableRow cells={[
                    "Cultural",
                    "Education, accent, manners, knowledge",
                    "Predictability and familiarity signals — \"I know how this works; I belong in this space\"",
                  ]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Each capital expresses differently across the gradient. In Connection, capitals are shared — resources, relationships, and knowledge serve the group. In chronic Protection, capitals are hoarded — losing them feels like losing safety. In chronic Control, capitals are deployed strategically — displayed to maintain position and manage perception. In chronic Domination, capitals are enforced — used to establish hierarchy and punish those who lack them.
            </p>

            <h3 style={conceptHeadingStyle}>
              Eigenvector Centrality — The Limits of Proximity Metrics
            </h3>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Eigenvector centrality</strong> — the network science concept that a node's importance depends on the importance of its connections — applies directly to social capital. Social capital is not just who you know. It is who your connections know. Proximity to power multiplies safety signals.
            </p>
            <p style={proseStyle}>
              But the metric is incomplete in human systems because it cannot weight for emotional intelligence, manipulation, or harm. It measures proximity, not integrity. A person in chronic Control whose network reads as high-value may be running external regulation through management — and network centrality cannot distinguish between genuine connection and strategic positioning.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Bourdieu (1986) — three forms of capital. Weber — status and class. Spence (1973) — signaling theory in job markets. Bonacich — eigenvector centrality. Barab&aacute;si — scale-free networks, preferential attachment. Sen (1999) — capability approach. Porges (2011) — neuroception of safety. McEwen — allostatic load.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The unified terminology "safety proxies" — making explicit that economic, social, and cultural capital all function as nervous system stabilizers in threat-based systems. The sociological literature describes what capitals <em>are</em>. The neuroscience literature describes how threat works. F5 bridges them: capitals are compelling because they reduce nervous system threat, not because people are status-seeking by nature.
              </p>
              <p style={expandedProseStyle}>
                The nervous system translation of Bourdieu's three capitals — economic as independence signals, social as alliance signals, cultural as predictability signals — is the specific bridge between sociology and neuroscience. The gradient expression of each capital (shared in Connection through enforced in Domination) connects to the Inner Compass model. The eigenvector centrality critique — showing why proximity-to-power metrics are incomplete in human systems — is a distinctive application of network science to worth-sorting.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── THE FILTER OF WORTH ──────────────────────── */}
          <section
            id="filter-of-worth"
            aria-labelledby="heading-filter-of-worth"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-how-signal-access-becomes-value" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              How does signal access become mistaken for human value?
            </h2>

            <h2 id="heading-filter-of-worth" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              The Filter of Worth — How Signal Access Becomes Human Value
            </h2>

            <p style={proseStyle}>
              This is the central mechanism of F5. <strong style={{ color: TEXT.primary }}>The Filter of Worth</strong> is the process by which external safety signals are mistaken for human value, and repeated signal deprivation is internalized as personal inadequacy.
            </p>
            <p style={proseStyle}>
              This is not a belief system. It is not an ideology someone chooses. It is a repeated pattern of who is heard, believed, resourced, and protected — and who is not — that becomes felt as reality when stabilized. The filter operates below conscious awareness: who gets taken seriously in a meeting, whose pain gets responded to, whose version of events gets believed, whose potential gets recognized, whose mistakes get forgiven.
            </p>

            <KeyStatement>
              The Filter of Worth: signal access mistaken for human value. Signal deprivation internalized as inadequacy.
            </KeyStatement>

            <p style={proseStyle}>
              The filter consistently disadvantages people whose bodies, histories, or communication styles do not match the narrow set of signals the system recognizes as "credible." This often includes women, people of color, LGBTQIA+ communities, neurodivergent people, disabled people, survivors of abuse, poor and working-class people, immigrants and refugees — and anyone who disrupts the system's self-image.
            </p>

            <h3 style={conceptHeadingStyle}>
              Double False Coherence
            </h3>

            <p style={proseStyle}>
              The connection to F3's false coherence is direct. The person inside the filter — the person with access to safety proxies — generates false coherence around their position: "I earned this." "I got here on merit." "The system is fair — I'm proof." The person outside the filter generates different false coherence: "Something is wrong with me." "I'm not good enough." "If I just worked harder..." Both are false coherence serving regulation — the narrative that reduces threat and preserves identity stability. Neither reflects the structural reality of signal access.
            </p>

            <KeyStatement>
              Both "I earned this" and "something is wrong with me" can be false coherence — regulation strategies that absorb position as identity, rather than recognizing the structural filter.
            </KeyStatement>

            <p style={proseStyle}>
              The connection to F4's rule systems is structural. The filter formalizes through rules that appear meritocratic but measure signal access: hiring criteria that measure cultural capital, promotion systems that reward social capital, funding structures that require economic capital. Performance rules (F4) teach that worth must be earned. The Filter of Worth shows what "earning" actually measures: not ability, but proximity to the markers the system already recognizes.
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
                Diagnostic
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                If two people produce similar quality work but receive consistently different levels of belief, forgiveness, or funding — you are seeing the Filter of Worth in action.
              </p>
            </div>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Bourdieu &amp; Passeron (1977) — social reproduction. Jost &amp; Banaji — system justification theory. Crenshaw — intersectionality. Collins — matrix of domination. Silver, Sen — social exclusion. Attribution theory, labeling theory — internalization of disadvantage. Goffman — stigma.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The term "Filter of Worth" as a named systemic mechanism — making visible what is usually invisible. The term does four things: it names the entire system (not just individual beliefs about merit), it makes explicit that this is a <em>filter</em> (not a truth measurement), it shows it operates on <em>worth</em> (not competence), and it specifies the outcome: signal deprivation internalized as inadequacy.
              </p>
              <p style={expandedProseStyle}>
                The double false coherence framing — showing that both insider narratives ("I earned this") and outsider narratives ("something is wrong with me") are false coherence serving regulation — connects structural inequality to F3's individual mechanism. The filter is not maintained by bad people or bad policies alone. It is maintained by the cognitive regulatory system operating in everyone: false coherence absorbs the narrative that fits the person's position and presents it as truth.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── FIVE-STEP WORTH LOOP ───────────────────────── */}
          <section
            id="five-step-worth-loop"
            aria-labelledby="heading-five-step-worth-loop"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-five-step-worth-loop" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              The Five-Step Worth Loop
            </h2>

            <p style={proseStyle}>
              The mechanism by which threat produces worth sorting and worth sorting stabilizes itself:
            </p>

            <ol style={orderedListStyle}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Threat increases dependency sensitivity.</strong> When the nervous system is under sustained threat (individual or structural), it becomes hypervigilant to ranking and exclusion signals. Where do I stand? Am I safe here? Who has more? Who has less?
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Validation becomes a stabilizer.</strong> Approval can reduce threat because it predicts inclusion and protection. When safety is unreliable, validation-seeking becomes a regulation strategy — not vanity, but orientation toward whatever reduces threat.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Power becomes the highest safety proxy.</strong> Control over access, consequences, and protection provides the most reliable threat reduction. Economic, social, and cultural capital all converge on this: power — the capacity to determine outcomes — is the ultimate safety proxy because it reduces dependency on others' goodwill.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Proxies become sorting rules.</strong> Safety proxies formalize into criteria, metrics, and standards — hiring requirements, promotion tracks, funding criteria, credibility markers. The informal signals of who-is-safe become the formal rules of who-gets-in. This is F4's rule internalization operating at the worth level.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>The filter becomes internalized as self-worth.</strong> Inside the filter = success, competence, merit. Outside the filter = failure, inadequacy, insufficient effort. Both positions are absorbed through false coherence (F3) as truth about the self rather than as the structural outcome of signal access.
              </li>
            </ol>

            <KeyStatement>
              The loop is self-reinforcing. Step 5 outcomes appear to justify original sorting. The people inside the filter have more resources, more visibility, more opportunities — and their success is cited as evidence that the sorting was correct. The structural artifact is mistaken for intrinsic difference.
            </KeyStatement>

            <p style={proseStyle}>
              This is the same architecture as F4 at a higher layer: threat → narrowing → formalization → internalization → self-reinforcement. The scale-invariant parallel to F4's seven-step mechanism demonstrates architectural consistency: the same mechanism operates at the level of rule systems (F4) and at the level of worth systems (F5).
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Gilbert, Price — social rank theory; rejection sensitivity (Downey, Feldman). Coan, Sbarra — social baseline theory; contingent self-worth (Crocker, Wolfe). Keltner — power and approach/inhibition; Merton (1968) — Matthew effect. DiMaggio, Powell — institutional isomorphism; Collins — credentialism. Jost — system justification; David — internalized oppression.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                Articulating the five steps as a unified mechanism operating at both individual and institutional scales simultaneously. While each step is documented in existing literature, to our knowledge, no existing framework traces the complete loop from threat-driven dependency sensitivity through validation-seeking through power-as-proxy through formal sorting through internalized worth — and shows how Step 5 closes the loop by generating the evidence that appears to justify Step 1.
              </p>
              <p style={expandedProseStyle}>
                The scale-invariant parallel to F4's seven-step mechanism demonstrates the architectural consistency: the same mechanism — threat → interpretation → formalization → internalization → self-reinforcement — operates at the level of rule systems (F4) and at the level of worth systems (F5). This is the regulation thread continuing: each scale adds a layer of substitute regulation, and each layer uses the same underlying logic.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── CHRONIC INVISIBILITY ──────────────────────── */}
          <section
            id="chronic-invisibility"
            aria-labelledby="heading-chronic-invisibility"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-effects-chronic-exclusion" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              What are the physiological effects of chronic social exclusion?
            </h2>

            <h2 id="heading-chronic-invisibility" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              Chronic Invisibility — Structural Compass Lock
            </h2>

            <p style={proseStyle}>
              The Filter of Worth does not just distribute resources unevenly. It produces measurable physiological effects. <strong style={{ color: TEXT.primary }}>Chronic invisibility</strong> — the repeated experience of being unheard, dismissed, passed over, disbelieved, and excluded — functions as chronic social threat. The cost is not only the event itself — it is the anticipation: the nervous system learns to expect dismissal, so threat activation begins before the next interaction.
            </p>
            <p style={proseStyle}>
              This is the same mechanism F1 describes at the individual level, now operating structurally. The compass orients toward protection — not because the person is choosing a defensive posture, but because the environment is <em>holding</em> their compass there. Repeated non-response, dismissal, and exclusion are danger signals. The nervous system does what it was designed to do: it activates Protection mode (F1) and stays there.
            </p>

            <h3 style={conceptHeadingStyle}>
              Physiological Consequences
            </h3>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Domain</th>
                    <th style={thStyle}>Manifestation</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Nervous system",
                    "Chronic hypervigilance, shutdown",
                  ]} />
                  <TableRow cells={[
                    "Cognitive",
                    "Self-doubt, imposter experience",
                  ]} />
                  <TableRow cells={[
                    "Behavioral",
                    "Understating needs, overworking to prove worth",
                  ]} />
                  <TableRow cells={[
                    "Relational",
                    "Anticipatory rejection",
                  ]} />
                  <TableRow cells={[
                    "Physical",
                    "Chronic tension, fatigue, accelerated biological aging",
                  ]} />
                </tbody>
              </table>
            </div>

            <KeyStatement>
              The person is not "choosing" chronic Protection. The filter is producing ongoing signals that keep their compass oriented toward defense. This is a stuck compass (F1) — but the sticking force is structural, not only developmental.
            </KeyStatement>

            <p style={proseStyle}>
              These consequences connect to allostatic load (McEwen) — the cumulative physiological cost of repeated stress adaptation — and to the weathering hypothesis (Geronimus) — the accelerated biological aging produced by sustained structural stress.
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
                When a person presents with chronic self-doubt, imposter experience, hypervigilance, or somatic stress patterns, the assessment must include structural invisibility as a contributing factor. These presentations may be accurate adaptations to filtering environments — not cognitive distortions to be corrected. Individual support can still reduce load and expand choices — but without structural change, the nervous system may be asked to "relax" in conditions that keep proving threat.
              </p>
            </div>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Porges (2011) — chronic social threat activates defensive states. McEwen, Seeman — allostatic load, cumulative stress cost. Gilbert — social defeat, subordination stress. Wilkinson &amp; Pickett — inequality and health outcomes. Krieger — discrimination and health. Geronimus — weathering hypothesis.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                Framing chronic invisibility as producing a structurally stuck compass — connecting structural inequality directly to the Inner Compass model. The person is not running a distorted perception (which would be a cognitive problem). They are running an accurate perception that is holding their compass in a chronic mode (which is a structural problem). Existing frameworks describe allostatic load, weathering, and health disparities. F5 adds the specific mechanism: structural filtering → chronic social threat → compass stuck in Protection → the presentations that clinicians see.
              </p>
              <p style={expandedProseStyle}>
                This changes the intervention target. If the compass is stuck because the filter is holding it there, then individual therapy alone cannot unstick it — because the filter is still operating. The structural condition must be part of the assessment. This is consistent with F1's principle: assess the conditions, not just the person.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── SELF-REINFORCING ADVANTAGE ──────────────────── */}
          <section
            id="self-reinforcing-advantage"
            aria-labelledby="heading-self-reinforcing-advantage"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-self-reinforcing-advantage" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              Self-Reinforcing Advantage — Why Gaps Are Structural Artifacts
            </h2>

            <p style={proseStyle}>
              Once the Filter of Worth stabilizes, it produces compounding effects in both directions:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Position</th>
                    <th style={thStyle}>What Compounds</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Inside the filter",
                    "More validation, more resources, more visibility, more opportunities, more benefit of the doubt, more credibility, more forgiveness when failing. Each advantage compounds the next — producing a credibility surplus.",
                  ]} />
                  <TableRow cells={[
                    "Outside the filter",
                    "Compounding barriers, less visibility, more skepticism, fewer opportunities, less benefit of the doubt, less credibility, harsher consequences for the same failures. Each barrier compounds the next.",
                  ]} />
                </tbody>
              </table>
            </div>

            <KeyStatement>
              Outcome gaps are structural artifacts of proxy access, not evidence of intrinsic worth. The person inside the filter who has more publications, more funding, more awards did not necessarily produce better work. They had more access to the signals the system recognizes.
            </KeyStatement>

            <p style={proseStyle}>
              This connects to the Matthew effect — "to those who have, more will be given" — and adds the nervous system layer: position does not only accumulate resources; it accumulates regulatory stability, making the hierarchy feel deserved from the inside.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Double false coherence</strong> maintains the filter. The insider's narrative — "I earned this through merit" — is false coherence serving regulation. It stabilizes the identity and reduces the threat of examining one's position. The outsider's narrative — "something is wrong with me" — is also false coherence serving regulation. Both narratives are regulation strategies. Neither reflects the structural reality of how the filter operates.
            </p>
            <p style={proseStyle}>
              The filter is maintained not by conspiracy but by the cognitive regulatory system (F3) operating in every person the filter touches. The collective false coherence around merit is the F4 rule system operating at the worth level: "merit" becomes a rule that the cognitive system absorbs as truth, and the filter's outcomes become the evidence that the rule is correct.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Merton (1968) — Matthew effect in science. DiPrete &amp; Eirich — cumulative advantage/disadvantage. Salganik, Watts — success-breeds-success dynamics. Jost — system justification. Bourdieu — social reproduction.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The explicit claim that observed gaps are structural artifacts of proxy access, not evidence of intrinsic differences — connected to the double false coherence mechanism. While cumulative advantage is well-documented, F5 adds the regulatory mechanism: false coherence operates in both directions simultaneously, making the filter invisible to insiders ("I earned this") and self-blaming for outsiders ("something is wrong with me").
              </p>
              <p style={expandedProseStyle}>
                This connects the structural observation (inequality compounds) to the individual mechanism (false coherence absorbs position as identity) — showing that structural inequality is maintained partly through the same cognitive regulation process that F3 established at the individual level.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── WHAT F5 ESTABLISHES ───────────────────────── */}
          <section
            id="what-f5-establishes"
            aria-labelledby="heading-what-f5-establishes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-what-f5-establishes" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              What F5 Establishes
            </h2>

            <p style={proseStyle}>
              F5 shows how threat-stabilized rule systems (F4) produce worth hierarchies — through the nervous system's orientation toward whatever signals safety — and how those hierarchies formalize into self-reinforcing sorting systems that distribute credibility, resources, and protection based on signal access rather than intrinsic worth.
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
                    "Power as safety",
                    "Worth-seeking is nervous system regulation — the compass orienting toward whatever reduces threat. An adaptation to conditional safety.",
                  ]} />
                  <TableRow cells={[
                    "Safety proxies and three capitals",
                    "Economic, social, and cultural capital function as nervous system stabilizers. Compelling because they genuinely reduce threat in systems where these markers predict protection.",
                  ]} />
                  <TableRow cells={[
                    "The Filter of Worth",
                    "Signal access mistaken for human value. Signal deprivation internalized as inadequacy. Not a belief system — a repeated pattern of who gets heard, believed, resourced, protected.",
                  ]} />
                  <TableRow cells={[
                    "Five-step worth loop",
                    "Threat → validation-seeking → power-as-proxy → formal sorting → internalized worth. Self-reinforcing. Scale-invariant parallel to F4's seven-step mechanism.",
                  ]} />
                  <TableRow cells={[
                    "Chronic invisibility",
                    "Structural filtering produces chronic social threat → compass stuck in Protection. Not individual cognitive distortion — accurate adaptation to filtering environment. Clinical assessment must include structural conditions.",
                  ]} />
                  <TableRow cells={[
                    "Self-reinforcing advantage",
                    "Outcome gaps are structural artifacts of proxy access. Double false coherence: insider's \"I earned this\" and outsider's \"something is wrong with me\" are both regulation strategies.",
                  ]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>
              Key Formulations
            </h3>

            <ul style={{ paddingLeft: 20, margin: "0 0 24px" }}>
              {[
                "\"Worth-seeking is a regulation strategy — the compass orienting toward whatever reduces threat\"",
                "\"The compass reads worth signals as safety signals — because in these environments, they are\"",
                "\"The Filter of Worth: signal access mistaken for human value; signal deprivation internalized as inadequacy\"",
                "\"Both 'I earned this' and 'something is wrong with me' can be false coherence\"",
                "\"Outcome gaps are proxy-access artifacts, not evidence of intrinsic differences\"",
                "\"Merit is a rule the cognitive system absorbs as truth — and the filter's outcomes become the evidence\"",
                "\"Do not pathologize accurate adaptations to filtering environments\"",
                "\"Assess structural threat as part of nervous system load\"",
                "\"Restore safety first — including structurally — then expect flexibility\"",
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
                    "Sociology",
                    "Capital theory, habitus, social reproduction, stigma",
                    "Bourdieu, 1986; Weber; Goffman",
                  ]} />
                  <TableRow cells={[
                    "Social Psychology",
                    "Social dominance, system justification",
                    "Sidanius & Pratto; Jost & Banaji",
                  ]} />
                  <TableRow cells={[
                    "Behavioral Economics",
                    "Signaling theory",
                    "Spence, 1973",
                  ]} />
                  <TableRow cells={[
                    "Network Science",
                    "Eigenvector centrality, scale-free networks",
                    "Bonacich; Barab\u00e1si",
                  ]} />
                  <TableRow cells={[
                    "Neuroscience",
                    "Neuroception, allostatic load, stress and hierarchy",
                    "Porges, 2011; McEwen; Sapolsky",
                  ]} />
                  <TableRow cells={[
                    "Attachment Theory",
                    "Conditional attachment, validation-seeking",
                    "Bowlby, 1969; Adler, 1927",
                  ]} />
                  <TableRow cells={[
                    "Critical Theory",
                    "Intersectionality, structural exclusion, capability approach",
                    "Crenshaw; Collins; Sen, 1999",
                  ]} />
                  <TableRow cells={[
                    "Health Psychology",
                    "Inequality and health, weathering, discrimination",
                    "Wilkinson & Pickett; Krieger; Geronimus",
                  ]} />
                  <TableRow cells={[
                    "Cumulative Advantage",
                    "Matthew effect, success-breeds-success",
                    "Merton, 1968; DiPrete & Eirich",
                  ]} />
                  <TableRow cells={[
                    "Social Rank Theory",
                    "Subordination stress, rejection sensitivity",
                    "Gilbert; Downey & Feldman",
                  ]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── BRIDGE TO F6 ──────────────────────────────── */}
          <section
            id="bridge-to-f6"
            aria-labelledby="heading-bridge-to-f6"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bridge-to-f6" style={sectionHeadingStyle(SPECTRUM.cobalt)}>
              Bridge to F6: When Sorting Becomes Perception
            </h2>

            <p style={proseStyle}>
              F5 explains how rule systems produce worth hierarchies — and how those hierarchies formalize into self-reinforcing filters that distribute resources, credibility, and protection based on signal access rather than intrinsic worth.
            </p>
            <p style={proseStyle}>
              But there is a further step. When worth sorting becomes stable and internalized, it stops being experienced as a system. It becomes perception. Bias is what happens when a long-running filter becomes pre-attentive perception: credibility and competence feel inherent before evaluation begins. The person who has been repeatedly validated and resourced <em>looks</em> competent. The person who has been repeatedly dismissed and underfunded <em>looks</em> like they lack something. The sorting disappears from view because it aligns with what feels like direct perception.
            </p>

            <KeyStatement>
              F5 is what rules sort. F6 is how sorting becomes invisible.
            </KeyStatement>

            <p style={proseStyle}>
              F6 explains how this happens: how perception becomes protection, why bias resists correction even in intelligent, well-intentioned people, and what conditions allow perceptual flexibility to return.
            </p>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="f5-worth-hierarchies" type="framework" />

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
                  <NavRow label="Read the bias framework (F6)" href="/framework/f6-bias-regulates" linkText="Bias Regulates \u2192" />
                  <NavRow label="Read the first collective framework (F4)" href="/framework/f4-rules-regulate" linkText="Rules Regulate \u2192" />
                  <NavRow label="Read the foundational framework (F1)" href="/framework/f1-emotional-gradient" linkText="The Emotional Gradient \u2192" />
                  <NavRow label="Read the calibration framework (F2)" href="/framework/f2-awareness-calibration" linkText="Awareness Teaches Awareness \u2192" />
                  <NavRow label="Read the cognitive maintenance framework (F3)" href="/framework/f3-false-coherence" linkText="Adult Cognition & False Coherence \u2192" />
                  <NavRow label="See the applied models" href="/models" linkText="Core Models \u2192" />
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
            "@id": "https://teg-blue.org/framework/f5-worth-hierarchies#article",
            headline: "Worth Hierarchies Regulate: How Rules Become Sorting Systems",
            description:
              "How threat-stabilized rule systems produce worth hierarchies through the nervous system's orientation toward whatever signals safety, and how those hierarchies formalize into self-reinforcing sorting systems. Framework F5 of the TEG-Blue 12-framework system.",
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
              "@id": "https://teg-blue.org/framework/f5-worth-hierarchies",
            },
            about: [
              { "@type": "Thing", name: "Worth Hierarchies" },
              { "@type": "Thing", name: "Filter of Worth" },
              { "@type": "Thing", name: "Safety Proxies" },
              { "@type": "Thing", name: "Structural Inequality" },
              { "@type": "Thing", name: "Chronic Invisibility" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "The Forms of Capital (Bourdieu, 1986)" },
              { "@type": "ScholarlyArticle", name: "Signaling Theory (Spence, 1973)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
              { "@type": "ScholarlyArticle", name: "Intersectionality (Crenshaw)" },
              { "@type": "ScholarlyArticle", name: "The Spirit Level (Wilkinson & Pickett)" },
              { "@type": "ScholarlyArticle", name: "Matthew Effect in Science (Merton, 1968)" },
              { "@type": "ScholarlyArticle", name: "Weathering Hypothesis (Geronimus)" },
            ],
            keywords: [
              "worth hierarchies",
              "filter of worth",
              "safety proxies",
              "structural inequality",
              "chronic invisibility",
              "nervous system regulation",
              "cumulative advantage",
              "social capital",
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
              { name: "F5: Worth Hierarchies Regulate", url: "/framework/f5-worth-hierarchies" },
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
                question: "What are worth hierarchies in the TEG-Blue system?",
                answer:
                  "F5 proposes that worth hierarchies are nervous system regulation mechanisms at the systemic level. When individual rule systems (F4) stabilize, they begin to sort people — distributing belonging, protection, and credibility based on proximity to safety signals rather than intrinsic worth. Worth-seeking is a regulation strategy: the nervous system orienting toward whatever reduces threat in environments where worth determines protection.",
              },
              {
                question: "What is the Filter of Worth?",
                answer:
                  "The Filter of Worth is the central mechanism of F5: the process by which external safety signals are mistaken for human value, and repeated signal deprivation is internalized as personal inadequacy. It operates through repeated allocation patterns — who gets heard, believed, resourced, and protected — that become felt as reality. It is not an ideology but a structural process maintained by false coherence operating in everyone the filter touches.",
              },
              {
                question: "What are safety proxies?",
                answer:
                  "Safety proxies are markers that signal reduced threat and increased protection within an environment. F5 translates Bourdieu's three capitals through a nervous system lens: economic capital functions as independence signals, social capital as alliance signals, and cultural capital as predictability signals. They are compelling not because people are status-seeking by nature, but because they genuinely reduce nervous system threat in systems where these markers predict protection.",
              },
              {
                question: "What is chronic invisibility?",
                answer:
                  "Chronic invisibility is the repeated experience of being unheard, dismissed, and excluded — functioning as chronic social threat. F5 proposes that this produces a structurally stuck compass: the filter holds the person's nervous system in Protection mode not through cognitive distortion but through accurate perception of ongoing structural threat. Clinical assessment must include structural conditions, because individual therapy alone cannot unstick a compass that the filter is holding in place.",
              },
              {
                question: "How does F5 connect to the rest of the TEG-Blue system?",
                answer:
                  "F5 is the second framework in the collective arc (F4–F7). It extends the regulation thread: F1 defines the biological return, F2 shows the developmental failure, F3 shows the cognitive replacement, F4 shows how those replacements aggregate into collective rule systems, and F5 shows what those rule systems sort — worth. F6 then explains how sorting becomes invisible through bias. Each framework describes a progressively larger-scale substitute for the regulation that was never built.",
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

