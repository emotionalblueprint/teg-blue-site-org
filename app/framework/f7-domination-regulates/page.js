import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RESEARCHER, PATTERN_GRADIENT,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, PageLayout, ResearcherHero,
  PropositionBox, ExpandableSection,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Core Propositions", href: "#core-propositions", description: "Domination is built through reinforcement, not born. Causality and accountability are separable." },
  { label: "Overview", href: "#overview", description: "F6 explains why we see distortedly. F7 explains what happens when the system starts making others see its way." },
  { label: "Domination Built Through Reinforcement", href: "#core-claim", description: "When control consistently produces relief, the nervous system adopts control as its preferred solution." },
  { label: "The Crossroads", href: "#the-crossroads", description: "The critical transition: 'I am trying to feel safe' → 'I will make you behave so I can feel safe.'" },
  { label: "Early Escalation Markers", href: "#escalation-markers", description: "Ten observable signals indicating the compass is moving through the Crossroads." },
  { label: "Five-Stage Escalation", href: "#five-stage-pathway", description: "Fear Activation → Strategy Formation → Entitlement Loop → Empathy Collapse → Power Preservation." },
  { label: "Empathy Gating", href: "#empathy-gating", description: "What people call 'empathy' is three processes that diverge as escalation progresses." },
  { label: "Addiction Logic", href: "#addiction-logic", description: "External regulation through subjugation builds tolerance. There is no natural stopping point." },
  { label: "The Regulation Thread", href: "#regulation-thread", description: "One mechanism, seven scales, escalating costs. Biological return → developmental failure → domination." },
  { label: "What F7 Establishes", href: "#what-f7-establishes", description: "The escalation pathway, the Crossroads, the marker system, the empathy gating model." },
  { label: "Research Foundations", href: "#research-foundations", description: "Behavioural reinforcement, psychoanalytic theory, organisational psychology, neuroscience, abuse research." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Domination Regulates — How Defense Becomes Strategy Becomes Domination (F7) | TEG-Blue Research",
  description:
    "How defense becomes strategy, strategy becomes domination, and domination becomes the nervous system's primary regulation source — a five-stage escalation pathway with identifiable markers and intervention windows at each stage. Framework F7 of 12.",
  keywords: [
    "domination regulates",
    "escalation pathway",
    "the crossroads",
    "empathy gating",
    "addiction logic",
    "five-stage pathway",
    "intervention windows",
    "crossroads signals",
    "reinforcement not character",
    "regulation thread",
    "nervous system regulation",
    "emotional technology",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f7-domination-regulates",
  },
  openGraph: {
    title: "Domination Regulates — How Defense Becomes Strategy Becomes Domination — F7 Framework | TEG-Blue",
    description:
      "How defense becomes strategy, strategy becomes domination, and domination becomes the nervous system's primary regulation source. The final framework in the collective arc.",
    url: "https://teg-blue.org/framework/f7-domination-regulates",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domination Regulates — TEG-Blue F7",
    description:
      "How defense becomes strategy, strategy becomes domination. A five-stage escalation pathway with intervention windows at each stage.",
  },
  other: {
    'citation_title': 'Domination Regulates: How Defense Becomes Strategy Becomes Domination',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F7DominationRegulatesPage() {
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
          <ResearcherHero
            badge="FRAMEWORK F7"
            title="Domination Regulates"
            subtitle="How Defense Becomes Strategy Becomes Domination"
            description="How bias (F6) hardens into enforcement — through escalation driven by reinforcement, not character — producing a five-stage pathway from fear activation through power preservation, with identifiable markers and intervention windows at each stage. The final framework in the collective arc (F4–F7), completing the regulation thread from F1 through F7."
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
                  Domination is built through reinforcement, not born — the same learning mechanism that shapes all behavior, interruptible at specific stages with decreasing accessibility as escalation progresses
                </li>
                <li style={propositionItemStyle}>
                  The Crossroads is a named critical turning point where defense becomes strategy — the internal logic shifts from &ldquo;I am trying to feel safe&rdquo; to &ldquo;I will make you behave so I can feel safe&rdquo;
                </li>
                <li style={propositionItemStyle}>
                  Ten early escalation markers signal the compass moving through the Crossroads — warnings, not labels — the pattern of multiple markers with decreasing repair is the signal
                </li>
                <li style={propositionItemStyle}>
                  A five-stage escalation pathway from Fear Activation through Power Preservation, with internal logic, observable signs, compass position, and stage-appropriate interruption at each stage
                </li>
                <li style={propositionItemStyle}>
                  Empathy gating follows a three-capacity model: Reading Emotions redirects toward management, Emotional Resonance collapses, Self-Emotional Awareness was never there — the configuration that produces the most harm has the least visibility
                </li>
                <li style={propositionItemStyle}>
                  External regulation through subjugation builds tolerance — escalation required, no natural stopping point — &ldquo;there is no amount of domination that will make them feel safe because the safety they need is internal&rdquo;
                </li>
                <li style={propositionItemStyle}>
                  Causality and accountability are separable — understanding mechanism does not reduce responsibility — &ldquo;evil&rdquo; closes inquiry where mechanism enables recognition and interruption
                </li>
                <li style={propositionItemStyle}>
                  F7 completes the regulation thread: each framework from F1 through F7 describes a regulation substitute at a different scale, with escalating costs and a consistent intervention principle
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
              Overview — The Final Collective Framework
            </h2>

            <p style={proseStyle}>
              F6 explains how perception becomes protection — how the nervous system maintains beliefs that stabilize, regardless of accuracy — and why correction fails when safety is insufficient. Bias regulates. It provides perceptual certainty that reduces threat.
            </p>
            <p style={proseStyle}>
              But when bias becomes rigid and self-protective, and correction is experienced as threat, systems do not simply persist in distorted perception. They seek stronger stabilization. The system moves from <em>filtering</em> perception to <em>enforcing</em> it. F7 explains what happens next: how defense becomes strategy, strategy becomes domination, and domination becomes the nervous system&rsquo;s primary regulation source.
            </p>

            <KeyStatement>
              The regulation thread: F1 defines Biological Restoration as the return mechanism. F2 shows what happens when the return is never learned. F3 shows what cognition does in its place. F4 shows how individual patterns scale to collective rule systems. F5 shows what those rules sort — worth. F6 shows how sorting becomes invisible through perception itself. F7 shows what happens when all of these are insufficient: the system escalates to direct domination of others. This is regulation at maximum cost.
            </KeyStatement>

            <p style={proseStyle}>
              This is not a sudden transformation. It is built through reinforcement. When control reliably reduces fear, restores stability, or produces access and protection, the nervous system can adopt control as its default regulation strategy. If that strategy is socially rewarded and accountability is absent, it escalates — from self-protection through strategic management of others through entitlement through empathy collapse through full-spectrum domination. The pathway is recognizable. It follows reinforcement, not personality. And it is interruptible at specific points.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Ethical stance:</strong> F7 intentionally separates causality from accountability. Understanding how escalation forms does not reduce responsibility for the harm it produces. Causality and accountability are separable. The mechanism is understandable. The harm is real. The framework makes escalation legible early to interrupt it — not to excuse it.
            </p>

            <ExpandableSection title="How This Framework Emerged" type="framework">
              <p style={expandedProseStyle}>
                F7 emerged from recognizing that multiple frameworks all describe the same escalation mechanism: how self-protection hardens into strategy and escalates into domination. Psychoanalytic theory (Kohut, Kernberg) describes narcissistic pathology as escalation of self-protection. Trauma psychology (Van der Kolk, Herman) describes how threat shapes escalation pathways. Organizational psychology (Argyris &amp; Sch&ouml;n) shows how defensive routines escalate in systems. Behavioral reinforcement (Skinner) explains how reward patterns shape and escalate behavior. Neuroscience (Porges, Siegel) explains how threat physiology changes perception and empathy. Abuse research (Bancroft) documents empirical patterns of escalation in relationships. Addiction research describes tolerance, escalation, and the distinction between substance and underlying state. Systems theory explains how feedback loops drive escalation without deliberate design.
              </p>
              <p style={expandedProseStyle}>
                The synthesis: organizing these into a model showing that domination escalation is a predictable pathway driven by specific reinforcement patterns, with identifiable markers and interruption windows — not a character type, not a moral category, but a nervous system trajectory that can be recognized and interrupted.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── CORE CLAIM ───────────────────────────────── */}
          <section
            id="core-claim"
            aria-labelledby="heading-core-claim"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-core-claim" style={sectionHeadingStyle}>
              The Core Claim — Reinforcement, Not Character
            </h2>

            <p style={proseStyle}>
              Domination does not appear suddenly. It is not a personality type. It is not born. It is built — through reinforcement.
            </p>
            <p style={proseStyle}>
              The mechanism is specific: under sustained threat, the nervous system seeks to reduce vulnerability. When connection does not feel safe or reliable — when the return path (F1) was never learned and the compass is already stuck in threat-based modes (F2) — the system looks for another stabilizer. In some environments, the stabilizer that works fastest is control. When control consistently produces relief, compliance, or protection, the nervous system adopts control as its preferred solution — even when it harms others.
            </p>
            <p style={proseStyle}>
              If that strategy continues to work — if it is socially rewarded, if it produces access and protection, if accountability is absent — it escalates. Defense hardens into strategy. Strategy hardens into entitlement. Entitlement hardens into domination. Each step follows the same reinforcement logic: what works gets repeated, what gets repeated gets stronger, what gets stronger becomes default.
            </p>

            <KeyStatement>
              This is not character. This is not personality. This is reinforcement. The same learning mechanism that teaches a child to avoid a hot stove teaches a person in chronic threat that control works. The difference is not the mechanism. The difference is what gets reinforced — and whether anything interrupts the reinforcement before it escalates.
            </KeyStatement>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The connection to the regulation thread:</strong> domination is the final substitute. When Biological Restoration (F1) was never learned, and cognitive replacement (F3) is running, and rules (F4) and worth hierarchies (F5) and perceptual certainty (F6) are all insufficient to regulate — the system escalates to direct domination of others. The person is not choosing domination over connection. They do not experience connection as available. What they experience is: control works. Nothing else does.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Skinner (1953) — behavior shaped by reinforcement; rewarded behavior escalates. Psychoanalytic theory — defense mechanisms can escalate and rigidify. Trauma psychology — threat responses can become habitual. Polyvagal Theory (Porges, 2011) — defensive states promote control-seeking. Anxiety psychology — control reduces uncertainty. Attachment theory — when relational safety fails, alternatives are sought.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The explicit articulation of a defined escalation pathway — showing that domination is built through reinforcement across identifiable stages, not born as personality or character. While individual mechanisms are known (reinforcement, threat response, control-seeking), to our knowledge, no existing framework traces the complete pathway from defense through strategy through domination as a single reinforcement-driven trajectory with specific interruption windows at each stage.
              </p>
              <p style={expandedProseStyle}>
                The connection to the regulation thread positions domination as the <em>final</em> regulation substitute — the most costly version of the same mechanism that began with false coherence (F3) and scaled through rules (F4), worth hierarchies (F5), and bias (F6). This framing removes the othering that makes domination seem like a different phenomenon from the regulatory mechanisms described in earlier frameworks. It is the same mechanism. The same nervous system. The same thread. Just further along the gradient and at maximum cost.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── THE CROSSROADS ───────────────────────────── */}
          <section
            id="the-crossroads"
            aria-labelledby="heading-the-crossroads"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-the-crossroads" style={sectionHeadingStyle}>
              The Crossroads — Where Defense Becomes Strategy
            </h2>

            <p style={proseStyle}>
              There is a critical turning point in the escalation pathway. F7 names it <strong style={{ color: TEXT.primary }}>the Crossroads</strong>: the moment when defense stops being a state and becomes a strategy.
            </p>
            <p style={proseStyle}>
              Before the Crossroads, the person is in Protection mode (F1). They are trying to feel safe. Their responses — withdrawal, reactivity, vigilance, appeasement — are the body&rsquo;s emergency system doing what it was designed to do. These responses are state-based: the nervous system is activated, the person is reacting, and when the activation passes, the response can pass with it. This is where repair is still possible — because the person is still experiencing their responses as responses, not as strategies.
            </p>

            <p style={proseStyle}>
              At the Crossroads, something shifts. The internal logic changes from:
            </p>

            <blockquote style={{ ...keyStatementBase, fontStyle: "normal", marginBottom: 8 }}>
              &ldquo;I am trying to feel safe&rdquo;
            </blockquote>
            <p style={{ ...proseStyle, marginBottom: 4, textAlign: "center", fontSize: 13, color: TEXT.muted }}>to:</p>
            <blockquote style={{ ...keyStatementBase, fontStyle: "normal", marginBottom: 16 }}>
              &ldquo;I will make you behave so I can feel safe.&rdquo;
            </blockquote>

            <p style={proseStyle}>
              This is the transition from Protection to Control (F1). Defense stops being a response to threat and becomes a method for managing threat by managing others. Tactics begin replacing repair — because tactics work faster, produce more reliable results, and do not require the vulnerability that repair demands.
            </p>
            <p style={proseStyle}>
              The Crossroads is not a single moment. It is a transition zone — a period where the person begins deploying control strategies more consistently and repair less consistently. It is recognizable because the balance shifts: control increases while repair decreases. The person may still apologize, still show warmth, still appear connected — but the apologies begin serving image rather than relationship. The warmth begins serving management rather than connection.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Psychoanalytic theory — defense becomes strategic. Behavioral psychology — state-based response becomes deliberate strategy. Clinical observation — the turning point is recognized in relationship and abuse literature. Bancroft (2002) — patterns of intentionality in controlling behavior. Trauma psychology — threat prioritizes tactics over repair.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The explicit naming of &ldquo;the Crossroads&rdquo; as a recognizable critical moment — and its positioning within the Inner Compass model as the transition from Protection (state-based, body-first) to Control (strategy-based, cognition-first). This connects to F1&rsquo;s architectural break: Connection and Protection happen <em>to</em> you. Control and Domination are what cognition <em>does</em> when recruited into the threat response.
              </p>
              <p style={expandedProseStyle}>
                The naming serves early recognition. Before this terminology, the transition is often invisible — especially because the early stages of Control can look like competence, leadership, and responsibility. Naming the Crossroads makes the transition visible and teachable: repair is decreasing, control is increasing, tactics are replacing vulnerability. These are recognizable shifts.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── EARLY ESCALATION MARKERS ────────────────── */}
          <section
            id="escalation-markers"
            aria-labelledby="heading-escalation-markers"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-escalation-markers" style={sectionHeadingStyle}>
              Early Escalation Markers — Crossroads Signals
            </h2>

            <p style={proseStyle}>
              The transition through the Crossroads produces observable signals. F7 identifies ten markers — early warnings that defense is becoming control:
            </p>

            <ol style={orderedListStyle}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Repair disappears while control increases.</strong> Apologies become less frequent or become performative. Conflict resolution is replaced by conflict management. The goal shifts from &ldquo;how do we fix this&rdquo; to &ldquo;how do I ensure this doesn&rsquo;t happen again.&rdquo;
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Your reality becomes framed as the problem.</strong> The other person&rsquo;s perception, feelings, or boundaries are reframed as overreaction, instability, or unreasonableness. &ldquo;You&rsquo;re being too sensitive.&rdquo; &ldquo;That&rsquo;s not what happened.&rdquo;
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Accountability is replaced by performance.</strong> When confronted, the response is not genuine reflection but a rehearsed display of contrition — the right words without the felt resonance behind them. Reading Emotions (RE) sharp, Self-Emotional Awareness (SEA) offline.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Confusion is used to destabilize.</strong> Conversations become circular. Facts are disputed. The other person begins doubting their own memory and perception. This is emotional distortion (F3) operating relationally.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Empathy becomes selective.</strong> Emotional Resonance (ER) becomes available for those who serve the regulation strategy, withdrawn from those who challenge it. Reading Emotions stays sharp — because reading serves management. The person may appear deeply attuned. What has changed is not perception but resonance.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Boundaries trigger escalation.</strong> When the other person sets a boundary, the response is not respect but intensified pressure. The other person&rsquo;s self-protection becomes evidence of attack. This connects to F4&rsquo;s punishment rules: &ldquo;pain teaches lessons&rdquo; normalizes escalation in response to boundary-setting.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Relationships are managed rather than respected.</strong> Alliances are strategic. Information is controlled. People are positioned relative to the person&rsquo;s needs rather than their own. Social capital (F5) is deployed for insulation rather than connection.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Fear becomes a stabilizer.</strong> Others begin modifying their behavior to avoid the person&rsquo;s reactions. The person does not need to be explicitly threatening — the pattern of consequences has taught the environment to self-regulate around them. This is external regulation (F3) operating at scale.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Rules are used to avoid truth.</strong> Policies, procedures, norms, and &ldquo;fairness&rdquo; are invoked selectively — to control outcomes rather than to serve justice. This connects to F4&rsquo;s rule systems deployed as control tools.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Power-as-safety logic appears.</strong> Statements and behaviors begin reflecting the core F5 equation: power reduces vulnerability. &ldquo;I need to be in charge.&rdquo; &ldquo;If I&rsquo;m not on top of this, it falls apart.&rdquo; Position is treated as safety. Loss of position is treated as existential threat.
              </li>
            </ol>

            <KeyStatement>
              These are warnings, not labels. Any person under sustained threat may show some of these markers temporarily. The signal is the pattern: multiple markers, increasing frequency, decreasing repair. The pattern indicates that the compass is moving through the Crossroads — that defense is becoming strategy.
            </KeyStatement>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                Organizing individually known markers into a unified list positioned within the escalation framework — so each marker is understood not as an isolated behavior but as a signal of where the compass is moving. The connection to F3&rsquo;s emotional distortion (markers 2, 4), F3&rsquo;s external regulation (markers 1, 7, 8), F4&rsquo;s rule systems (markers 6, 9), and F5&rsquo;s worth logic (marker 10) shows that these markers are not new phenomena. They are the mechanisms described in earlier frameworks now serving escalation.
              </p>
              <p style={expandedProseStyle}>
                The framing as &ldquo;warnings, not labels&rdquo; prevents the markers from becoming diagnostic categories that pathologize individuals. The question is not &ldquo;is this person a controller?&rdquo; The question is &ldquo;is the compass moving through the Crossroads, and what would interrupt the reinforcement?&rdquo;
              </p>
            </ExpandableSection>
          </section>

          {/* ─── FIVE-STAGE PATHWAY ─────────────────────────── */}
          <section
            id="five-stage-pathway"
            aria-labelledby="heading-five-stage-pathway"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-five-stage-pathway" style={sectionHeadingStyle}>
              The Five-Stage Escalation Pathway
            </h2>

            <p style={proseStyle}>
              The escalation from defense to domination follows five identifiable stages. Each stage has an internal logic, observable signs, a compass position, and a specific interruption approach. The stages are not sudden. They follow reinforcement. And the earlier the interruption, the more accessible the return.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 24 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Stage</th>
                    <th style={thStyle}>Internal Logic</th>
                    <th style={thStyle}>Observable Signs</th>
                    <th style={thStyle}>Compass Position</th>
                    <th style={thStyle}>Interruption</th>
                  </tr>
                </thead>
                <tbody>
                  <FiveColRow cells={[
                    "1 — Fear Activation",
                    "\"If I can't control it, I lose safety\"",
                    "Threat scanning, catastrophic thinking, urgency, need for predictability",
                    "Protection — beginning to shift",
                    "Most accessible. Safety-based support, co-regulation, relational repair",
                  ]} />
                  <FiveColRow cells={[
                    "2 — Strategy Formation",
                    "\"Control creates stability\"",
                    "Behavior management of others, proliferating rules, selective self-presentation. Crossroads markers appear",
                    "Crossing the Crossroads — Protection into Control",
                    "Direct naming, loss of reinforcement, firm but relational accountability",
                  ]} />
                  <FiveColRow cells={[
                    "3 — Entitlement Loop",
                    "\"I'm safer when others obey\"",
                    "Obedience expected, blame reversed, rules selectively enforced, narrative control intensified",
                    "Locked in chronic Control. Mimics Connection from outside",
                    "Requires external consequences. Internal motivation low because the system is working — for the person running it",
                  ]} />
                  <FiveColRow cells={[
                    "4 — Empathy Collapse",
                    "\"Their pain is my threat\"",
                    "Minimization of suffering, contempt, dehumanization language, sophisticated justifications for harm",
                    "Moving from Control toward Domination. Resonance circuits offline",
                    "Requires external containment. Empathy appeals fail — the system needed to respond is the system that is offline",
                  ]} />
                  <FiveColRow cells={[
                    "5 — Power Preservation",
                    "\"I can't survive without control\"",
                    "Identity fused with dominance, escalated coercion, isolation of targets, elimination of dissent",
                    "Locked in chronic Domination. Connection feels like extinction",
                    "Protection is primary. Rehabilitation is not a safety plan. The priority is protecting others",
                  ]} />
                </tbody>
              </table>
            </div>

            <KeyStatement>
              What the pathway shows: escalation is stages, not a switch. It follows reinforcement, not personality. Each stage is interruptible — but the cost and difficulty of interruption increase as the pathway progresses. The question is always: what would interrupt the reinforcement at this stage?
            </KeyStatement>

            <h3 style={conceptHeadingStyle}>Stage-by-Stage Detail</h3>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Stage 3 — The Entitlement Loop</strong> deserves particular attention because it is the stage most likely to be invisible. The person does not experience themselves as controlling. They experience themselves as responsible, competent, and holding things together. This is the mode that most reliably mimics Connection (F3) — from outside, the person may appear warm, capable, and generous. From inside the inner circle, reality is managed. Interruption typically requires structural consequences: loss of position, legal accountability, or the managed system collapsing in a way the person cannot reframe.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Stage 4 — Empathy Collapse</strong> marks the point where empathy appeals become structurally futile. This is not moral failure. It is regulatory state reality. Telling a person at Stage 4 to &ldquo;think about how the other person feels&rdquo; is asking them to use Emotional Resonance — which is offline. They may be able to use Reading Emotions to <em>describe</em> what the other person feels, sometimes with remarkable accuracy. But describing is not feeling. The intervention at this stage is containment and protection, not resonance restoration.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Stage 5 — Power Preservation:</strong> losing control does not feel like losing a strategy. It feels like ceasing to exist. The person&rsquo;s entire regulatory architecture depends on maintaining dominance. Vulnerability is not experienced as an option — it is experienced as annihilation.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Developmental psychology — stage-based progressions. Escalation research — documented stages. Fear/anxiety psychology (Stage 1). Learning theory (Stage 2). Entitlement/narcissism research, Kohut (1977), Kernberg (1975) (Stage 3). Neuroscience of empathy, Porges (2011), Siegel (Stage 4). Power dynamics research, Herman (1992) (Stage 5). Clinical intervention research — early intervention is more effective.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The explicit five-stage pathway with named internal logic, observable signs, compass position, and specific interruption approaches at each stage. While clinical and abuse literature recognizes progression, to our knowledge, no existing framework maps the complete trajectory from fear activation through strategy formation through entitlement through empathy collapse through power preservation — and connects each stage to the Inner Compass model&rsquo;s regulatory concepts with stage-appropriate intervention.
              </p>
              <p style={expandedProseStyle}>
                The practical contribution: the pathway makes domination recognizable as a <em>process</em> rather than a <em>type</em>. This enables prevention (recognize Stages 1–2 and intervene), protection (recognize Stages 4–5 and prioritize containment), and appropriate intervention matching (different stages require fundamentally different approaches).
              </p>
            </ExpandableSection>
          </section>

          {/* ─── EMPATHY GATING ──────────────────────────── */}
          <section
            id="empathy-gating"
            aria-labelledby="heading-empathy-gating"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-empathy-gating" style={sectionHeadingStyle}>
              Empathy Gating — What Happens to the Three Awareness Capacities
            </h2>

            <p style={proseStyle}>
              What people call &ldquo;empathy&rdquo; collapses three distinct processes that TEG-Blue has already separated (F2). Understanding what happens in escalation requires tracking each one independently — because they do not move together.
            </p>

            <p style={proseStyle}>
              As the compass moves toward Domination, the three capacities do three different things:
            </p>

            <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Reading Emotions (RE) does not collapse. It redirects.</strong> RE stays sharp or sharpens as escalation progresses. In chronic Control, RE serves management: the person reads everyone with precision, tracking who is compliant, who is a threat, who can be useful. In chronic Domination, RE serves exploitation: others&rsquo; emotional states become data for leverage.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Emotional Resonance (ER) is what collapses.</strong> ER — the capacity to be affected by what others feel — progressively shuts down as the compass locks in threat-based modes. At Stage 3, ER becomes selective — available for those who serve the regulation strategy, performed for public consumption. At Stage 4, ER has been offline long enough that the person cannot feel the impact of their behavior on others. The natural brake on harm is structurally unavailable.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Self-Emotional Awareness (SEA) was never there.</strong> SEA is the <em>precondition</em> for the entire escalation pathway, not a consequence of it. The person at Stage 4–5 does not have SEA that has been gated out. They have SEA that was never fully built (F2). Without SEA, the internal activation that drives domination is never processed. The person cannot feel what is driving them — they can only act on it.
              </li>
            </ul>

            <KeyStatement>
              The dangerous configuration: sharp RE + collapsed ER + absent SEA. The person reads you perfectly. Cannot feel your pain. Has no internal signal telling them any of this is happening. This is the capacity configuration that produces the most harm with the least visibility — and the mode that most reliably mimics Connection.
            </KeyStatement>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Stage</th>
                    <th style={thStyle}>Reading Emotions (RE)</th>
                    <th style={thStyle}>Emotional Resonance (ER)</th>
                    <th style={thStyle}>Self-Emotional Awareness (SEA)</th>
                    <th style={thStyle}>What This Produces</th>
                  </tr>
                </thead>
                <tbody>
                  <FiveColRow cells={[
                    "1 — Fear Activation",
                    "Narrowing toward threat cues",
                    "Still partially available",
                    "If ever partially online, still accessible",
                    "Person is still reachable. Repair still possible.",
                  ]} />
                  <FiveColRow cells={[
                    "2 — Strategy Formation",
                    "Sharpening toward management data",
                    "Becoming selective",
                    "Offline",
                    "Reading others to manage, not understand.",
                  ]} />
                  <FiveColRow cells={[
                    "3 — Entitlement Loop",
                    "Instrumental — reads for compliance",
                    "Selective or performed",
                    "Offline",
                    "Appears empathic. Sharp RE + performed ER = convincing warmth. No felt experience behind it.",
                  ]} />
                  <FiveColRow cells={[
                    "4 — Empathy Collapse",
                    "Weaponized — reads for leverage",
                    "Collapsed",
                    "Absent",
                    "No corrective signal. Cannot feel impact. Cannot recognize own part.",
                  ]} />
                  <FiveColRow cells={[
                    "5 — Power Preservation",
                    "Weaponized",
                    "Absent",
                    "Absent",
                    "All three capacities either serving domination or offline.",
                  ]} />
                </tbody>
              </table>
            </div>

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
                Empathy appeals fail at later stages of escalation — not because the person is morally deficient, but because the empathy system they would need in order to respond to the appeal is the system that is offline. Telling a person at Stage 4–5 to &ldquo;think about how others feel&rdquo; is asking them to use ER, which is collapsed. They may use RE to <em>describe</em> what others feel with remarkable accuracy. But describing is not feeling. The appeal fails because the performance channel (RE) is intact while the felt connection channel (ER) is offline.
              </p>
            </div>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The decomposition of &ldquo;empathy&rdquo; into three capacity trajectories that diverge under escalation — replacing the single-channel model (empathy on/off) with a three-channel model (RE redirects, ER collapses, SEA was never there). This is clinically significant because it explains: why chronic Control mimics Connection (sharp RE + performed ER + absent SEA); why victims are not believed (they describe the gap between performance and felt reality, and the gap is invisible to outsiders); why &ldquo;empathy appeals&rdquo; fail at later stages; and why RE <em>sharpening</em> is itself a warning sign.
              </p>
              <p style={expandedProseStyle}>
                The stage-by-stage capacity table provides a precision tool: at any point in the escalation, the clinician or observer can assess which capacities are available, which are redirected, and which are offline — and match the intervention to what the system can actually support.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── ADDICTION LOGIC ─────────────────────────── */}
          <section
            id="addiction-logic"
            aria-labelledby="heading-addiction-logic"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-addiction-logic" style={sectionHeadingStyle}>
              Addiction Logic — Why Domination Escalates and Never Stops
            </h2>

            <p style={proseStyle}>
              F3 established that when SEA is offline, the system uses others to regulate — and that in chronic Domination, this takes the form of subjugation: others&rsquo; fear, submission, and diminishment provide temporary relief from internal activation. F7 adds the critical observation: <strong style={{ color: TEXT.primary }}>external regulation through subjugation builds tolerance</strong>.
            </p>
            <p style={proseStyle}>
              The first time the person dominates and feels the relief — the settling of internal activation, the brief moment where the fear quiets and the emptiness fills — it is enough. For a while. But the relief fades. The activation returns. The internal state that drove the domination is unchanged — because SEA is offline and the actual emotional processing never happened.
            </p>
            <p style={proseStyle}>
              So the person needs the regulation source again. But the same level of domination does not produce the same level of relief. The tolerance has built. They need more intense subjugation, more people subjected, more extreme acts of domination, more power to access more regulation sources.
            </p>

            <KeyStatement>
              This is addiction logic applied to relational domination. The mechanism is identical to substance addiction: the substance (others&rsquo; subjugation) provides temporary relief from an internal state. The internal state is never processed. Tolerance builds. Escalation is required. There is no natural stopping point.
            </KeyStatement>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Power and wealth amplify this mechanism.</strong> A person in chronic Domination with limited power has limited access — they can dominate their family, their employees, their immediate circle. The harm is real but contained by structural constraints. A person in chronic Domination with vast power has unlimited access. They can purchase compliance. They can enforce silence. They can create entire systems organized around their regulation needs. And because their power also protects them from consequences, there is no external check on the escalation.
            </p>

            <KeyStatement>
              There is no amount of domination that will make them feel safe. Because the safety they need is internal — it is SEA coming back online. And SEA cannot come back online through domination. It can only come back online through the conditions described in F2&rsquo;s healing account: safety, not power.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Addiction research — tolerance, escalation, the distinction between substance and underlying state. Kohut (1977) — narcissistic regulation through self-objects. Kernberg (1975) — narcissistic pathology as escalation. Bowlby (1969, 1988) — attachment as regulatory system. Porges (2011) — co-regulation; when self-regulation is not learned, the system continues to seek external regulatory input. Van der Kolk (2014) — trauma produces incomplete regulation stored somatically. Schore (2003) — right-brain regulation develops through relational experience.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The addiction-logic framing for chronic Domination — connecting relational domination to substance addiction through a shared mechanism: temporary relief from an internal state that is never processed because the processing channel is offline. The formulation &ldquo;there is no amount of domination that will make them feel safe — because the safety they need is internal&rdquo; captures the structural impossibility: the regulation source (domination) cannot address the regulation need (SEA restoration).
              </p>
              <p style={expandedProseStyle}>
                The power-and-wealth amplification explains why escalation patterns are most extreme where power is most concentrated. This is not because powerful people are morally worse. It is because power removes the structural constraints that would otherwise limit the escalation cycle — and provides unlimited access to regulation sources. The mechanism is the same. The scale is determined by access.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── CAUSALITY AND ACCOUNTABILITY ─────────────── */}
          <section
            id="causality-accountability"
            aria-labelledby="heading-causality-accountability"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-causality-accountability" style={sectionHeadingStyle}>
              Causality and Accountability — Why &ldquo;Evil&rdquo; Is Not the Frame
            </h2>

            <p style={proseStyle}>
              F7 does not use &ldquo;evil&rdquo; as a category. Not because the harm is not real or severe — it is. But because &ldquo;evil&rdquo; as a frame implies something fundamentally different about the person. It implies a character trait — something inherent, fixed, and moral. It implies that the person who dominates is a different kind of human from everyone else.
            </p>
            <p style={proseStyle}>
              The regulation thread shows they are not. They are running the same nervous system as everyone else. The same mechanisms. The same compass. The same modes. The same false coherence. The same external regulation. The same reinforcement logic. They are further along the gradient — further from the return — at higher cost to others. But the mechanism is the same mechanism.
            </p>

            <KeyStatement>
              Understanding mechanism does not reduce accountability. Causality and accountability are separable. Causality asks: how did this happen? Accountability asks: what must be named, stopped, repaired, and who must be protected? Both questions are necessary. Answering the first does not weaken the second.
            </KeyStatement>

            <p style={proseStyle}>
              Understanding the mechanism <em>increases</em> the precision of intervention:
            </p>

            <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Prevention:</strong> address the developmental conditions (F2) before the compass locks
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Early intervention:</strong> recognize Stages 1–2 and interrupt the reinforcement before it escalates
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Systemic design:</strong> build institutions that do not reward chronic Control or chronic Domination — that do not provide escalating access to regulation sources
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Victim protection:</strong> name the mechanism so victims can recognize what is happening, stop blaming themselves, and access support that believes them
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Accountability without demonization:</strong> hold the person responsible for impact while understanding the mechanism that produced it
              </li>
            </ul>

            <p style={proseStyle}>
              &ldquo;Evil&rdquo; prevents all of this. It closes inquiry. It makes the person incomprehensible — and therefore uninterruptible. It treats the harm as arising from a different kind of human rather than from a recognizable, traceable, interruptible mechanism operating in the same nervous system everyone shares.
            </p>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The explicit positioning of this ethical stance within the framework — not as a philosophical addendum, but as an integral part of the model. The regulation thread makes the case: if domination is the same mechanism as false coherence (F3), rule internalization (F4), worth-sorting (F5), and bias (F6) — operating at a different scale and at maximum cost — then treating it as a categorically different phenomenon is not just morally questionable. It is mechanistically inaccurate. The framework offers: accountability without demonization, understanding without excuse.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── REGULATION THREAD ──────────────────────── */}
          <section
            id="regulation-thread"
            aria-labelledby="heading-regulation-thread"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-regulation-thread" style={sectionHeadingStyle}>
              The Regulation Thread Complete — F1 Through F7
            </h2>

            <p style={proseStyle}>
              F7 is the final framework in the collective arc (F4–F7). With its completion, the regulation thread — the single throughline connecting all frameworks — is fully traced:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Framework</th>
                    <th style={thStyle}>What Regulates</th>
                    <th style={thStyle}>Scale</th>
                    <th style={thStyle}>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <FourColRow cells={[
                    "F1",
                    "Biological Restoration — the body completing the cycle",
                    "Individual biology",
                    "No cost — the system working as designed",
                  ]} />
                  <FourColRow cells={[
                    "F2",
                    "Co-regulation \u2192 self-restoration (when learned). When not learned: compass locks",
                    "Developmental / relational",
                    "The return path is never built",
                  ]} />
                  <FourColRow cells={[
                    "F3 (C1\u20138)",
                    "False coherence — cognition replacing the emotional return",
                    "Individual adult cognition",
                    "Truth",
                  ]} />
                  <FourColRow cells={[
                    "F3 (C9\u201311)",
                    "Emotional distortion + external regulation",
                    "Individual \u2192 relational",
                    "Relationships",
                  ]} />
                  <FourColRow cells={[
                    "F4",
                    "Rules regulate — collective rule systems",
                    "Collective — social systems",
                    "Flexibility",
                  ]} />
                  <FourColRow cells={[
                    "F5",
                    "Worth hierarchies — filtering by signal access",
                    "Collective — value systems",
                    "Equity",
                  ]} />
                  <FourColRow cells={[
                    "F6",
                    "Bias regulates — perceptual certainty",
                    "Collective — perceptual systems",
                    "Accuracy",
                  ]} />
                  <FourColRow cells={[
                    "F7",
                    "Domination regulates — direct control of others",
                    "Collective — power systems",
                    "Everything",
                  ]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Each framework describes a regulation substitute at a different scale. Each substitute works — it provides the nervous system with stability. Each comes at a cost. Each traces to the same origin: a nervous system that never learned the return path.
            </p>

            <KeyStatement>
              The costs escalate. From individual truth-loss (F3) through collective sorting (F5) to maximum harm (F7). The mechanism is the same at every scale. The intervention principle is consistent across all frameworks: restore safety first, then expect capacity. This is F1&rsquo;s principle. It operates at every scale.
            </KeyStatement>

            <p style={proseStyle}>
              The thread also reveals why late-stage domination is so resistant to intervention. Every previous framework&rsquo;s substitute is operating simultaneously: false coherence maintains the narrative. Rules enforce the structure. Worth hierarchies justify the position. Bias confirms the perception. And domination provides the direct regulation that all of these are serving. Interrupting one substitute while the others remain intact is insufficient. The system has redundancy built in — not by design, but because each substitute reinforced the next.
            </p>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>What the full thread shows:</strong> the distance from F1 (Biological Restoration) to F7 (domination) is long — but every point on the pathway is connected. Every framework describes the same nervous system failing to return and substituting something else. The substitutes work. They just are not the return.
            </p>
          </section>

          {/* ─── WHAT F7 ESTABLISHES ───────────────────────── */}
          <section
            id="what-f7-establishes"
            aria-labelledby="heading-what-f7-establishes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-what-f7-establishes" style={sectionHeadingStyle}>
              What F7 Establishes
            </h2>

            <p style={proseStyle}>
              F7 shows how self-protective regulation escalates into domination through reinforcement — and where that escalation can be recognized and interrupted. It completes the collective arc (F4–F7) and the regulation thread (F1–F7).
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
                    "Domination is built through reinforcement",
                    "Not born, not personality, not character. Built through the same reinforcement logic that shapes all behavior. Interruptible at specific points.",
                  ]} />
                  <TableRow cells={[
                    "The Crossroads",
                    "Named critical turning point: defense becomes strategy. \"I am trying to feel safe\" \u2192 \"I will make you behave so I can feel safe.\" Transition from Protection to Control.",
                  ]} />
                  <TableRow cells={[
                    "Early escalation markers",
                    "Ten observable signals that the compass is moving through the Crossroads. Warnings, not labels. Pattern matters more than individual markers.",
                  ]} />
                  <TableRow cells={[
                    "Five-stage escalation pathway",
                    "Fear Activation \u2192 Strategy Formation \u2192 Entitlement Loop \u2192 Empathy Collapse \u2192 Power Preservation. Each stage: internal logic, signs, compass position, interruption approach.",
                  ]} />
                  <TableRow cells={[
                    "Empathy gating",
                    "Three-capacity model: RE redirects (understanding \u2192 management \u2192 weaponization). ER collapses (felt connection shuts down). SEA was never there (precondition, not consequence). Sharp RE + collapsed ER + absent SEA = most harm with least visibility.",
                  ]} />
                  <TableRow cells={[
                    "Addiction logic",
                    "External regulation through subjugation builds tolerance. Escalation required. No natural stopping point. Power amplifies access and removes constraints. \"No amount of domination will make them feel safe.\"",
                  ]} />
                  <TableRow cells={[
                    "Causality and accountability",
                    "Same nervous system, same mechanism, same thread. Further along the gradient, at maximum cost. Understanding \u2260 excusing. \"Evil\" is not the frame because it is mechanistically inaccurate.",
                  ]} />
                  <TableRow cells={[
                    "The regulation thread complete",
                    "F1\u2013F7: biological return \u2192 developmental failure \u2192 cognitive replacement \u2192 rules \u2192 worth \u2192 bias \u2192 domination. Each = regulation substitute at different scale. Costs escalate. Intervention principle consistent: safety first.",
                  ]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>
              Key Formulations
            </h3>

            <ul style={{ paddingLeft: 20, margin: "0 0 24px" }}>
              {[
                "\"Domination is built through reinforcement, not born\"",
                "\"I am trying to feel safe\" \u2192 \"I will make you behave so I can feel safe\"",
                "\"Repair is decreasing, control is increasing, tactics are replacing vulnerability\"",
                "\"Empathy is state-dependent, not character-dependent\"",
                "\"There is no amount of domination that will make them feel safe \u2014 because the safety they need is internal\"",
                "\"Causality and accountability are separable\"",
                "\"Accountability without demonization, understanding without excuse\"",
                "\"The same nervous system. The same mechanism. The same thread. Further along the gradient and at maximum cost.\"",
                "\"The substitutes work. They just are not the return.\"",
                "\"At every scale, the same principle: restore safety first, then expect capacity\"",
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
                  <ThreeColRow cells={[
                    "Behavioral Reinforcement",
                    "Behavior shaped by reinforcement; rewarded behavior escalates",
                    "Skinner, 1953",
                  ]} />
                  <ThreeColRow cells={[
                    "Psychoanalytic Theory",
                    "Narcissistic development, escalation of self-protection",
                    "Kohut, 1977; Kernberg, 1975",
                  ]} />
                  <ThreeColRow cells={[
                    "Organizational Psychology",
                    "Defensive routines escalate in systems",
                    "Argyris & Sch\u00f6n, 1974",
                  ]} />
                  <ThreeColRow cells={[
                    "Neuroscience",
                    "Threat physiology, state-dependent perception and empathy",
                    "Porges, 2011; Siegel, 2012; Schore, 2003",
                  ]} />
                  <ThreeColRow cells={[
                    "Trauma Psychology",
                    "Threat shapes escalation; complex trauma",
                    "Van der Kolk, 2014; Herman, 1992",
                  ]} />
                  <ThreeColRow cells={[
                    "Abuse/Violence Research",
                    "Pattern recognition in abuse; escalation markers",
                    "Bancroft, 2002",
                  ]} />
                  <ThreeColRow cells={[
                    "Attachment Theory",
                    "Attachment as regulatory system; external regulation",
                    "Bowlby, 1969",
                  ]} />
                  <ThreeColRow cells={[
                    "Addiction Research",
                    "Tolerance, escalation, structural dependence",
                    "Established literature",
                  ]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── BRIDGE TO F8 ──────────────────────────────── */}
          <section
            id="bridge-to-f8"
            aria-labelledby="heading-bridge-to-f8"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bridge-to-f8" style={sectionHeadingStyle}>
              Bridge to F8: From Maximum Cost to the Return
            </h2>

            <p style={proseStyle}>
              F7 completes the collective arc (F4–F7) and the regulation thread (F1–F7). The pathway from Biological Restoration through domination is now fully traced — each framework describing the same nervous system substituting a different regulation source at a different scale, with escalating costs.
            </p>
            <p style={proseStyle}>
              But the framework also shows something else. At every stage of the escalation, the interruption principle is the same: restore safety first, then expect capacity. Even at F7&rsquo;s later stages — where protection takes precedence over restoration — the underlying principle has not changed. It is the same principle that F1 established. The question is whether the conditions for safety can be provided.
            </p>
            <p style={proseStyle}>
              This is what the healing arc addresses. F8 asks: what enables the return? Not the return from domination specifically — though that is the most dramatic version — but the return from any position where the compass has been stuck. How do awareness capacities that were never built begin to develop? How does the compass regain flexibility? What does repair look like when the patterns have been running for decades?
            </p>

            <KeyStatement>
              F7 is the final substitute. F8 begins the return.
            </KeyStatement>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="f7-domination-regulates" type="framework" />

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
                    <th style={navThStyle}>If you want to...</th>
                    <th style={navThStyle}>Go here</th>
                  </tr>
                </thead>
                <tbody>
                  <NavRow label="Read the healing framework (F8)" href="/framework/f8-repairing-awareness" linkText="Repairing Awareness \u2192" />
                  <NavRow label="Read the bias framework (F6)" href="/framework/f6-bias-regulates" linkText="Bias Regulates \u2192" />
                  <NavRow label="Read the worth-sorting framework (F5)" href="/framework/f5-worth-hierarchies" linkText="Worth Hierarchies Regulate \u2192" />
                  <NavRow label="Read the first collective framework (F4)" href="/framework/f4-rules-regulate" linkText="Rules Regulate \u2192" />
                  <NavRow label="Read the foundational framework (F1)" href="/framework/f1-emotional-gradient" linkText="Emotions as Biological Information \u2192" />
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
            "@id": "https://teg-blue.org/framework/f7-domination-regulates#article",
            headline: "Domination Regulates: How Defense Becomes Strategy Becomes Domination",
            description:
              "How defense becomes strategy, strategy becomes domination, and domination becomes the nervous system's primary regulation source. A five-stage escalation pathway with identifiable markers and intervention windows. Framework F7 of the TEG-Blue 12-framework system.",
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
              "@id": "https://teg-blue.org/framework/f7-domination-regulates",
            },
            about: [
              { "@type": "Thing", name: "Domination as Regulation" },
              { "@type": "Thing", name: "Five-Stage Escalation Pathway" },
              { "@type": "Thing", name: "The Crossroads" },
              { "@type": "Thing", name: "Empathy Gating" },
              { "@type": "Thing", name: "Addiction Logic" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Operant Conditioning (Skinner, 1953)" },
              { "@type": "ScholarlyArticle", name: "Narcissistic Pathology (Kohut, 1977; Kernberg, 1975)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (Van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Trauma and Recovery (Herman, 1992)" },
              { "@type": "ScholarlyArticle", name: "Why Does He Do That? (Bancroft, 2002)" },
              { "@type": "ScholarlyArticle", name: "Attachment Theory (Bowlby, 1969)" },
            ],
            keywords: [
              "domination regulates",
              "escalation pathway",
              "the crossroads",
              "empathy gating",
              "addiction logic",
              "intervention windows",
              "regulation thread",
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
              { name: "F7: Domination Regulates", url: "/framework/f7-domination-regulates" },
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
                question: "What does 'domination regulates' mean in the TEG-Blue system?",
                answer:
                  "F7 proposes that domination is not a character trait or personality type but a regulation strategy built through reinforcement. When the nervous system never learned Biological Restoration (F1), and all previous substitutes (false coherence, rules, worth hierarchies, bias) are insufficient, the system escalates to direct domination of others. The person is not choosing domination over connection — they do not experience connection as available. Domination provides temporary regulatory relief at maximum cost to others.",
              },
              {
                question: "What is the Crossroads in the TEG-Blue escalation model?",
                answer:
                  "The Crossroads is the named critical turning point where defense becomes strategy — the moment the internal logic shifts from 'I am trying to feel safe' to 'I will make you behave so I can feel safe.' It marks the transition from Protection (state-based, body-first) to Control (strategy-based, cognition-first). It is not a single moment but a transition zone where control increases while repair decreases, recognizable through ten early escalation markers.",
              },
              {
                question: "What is the five-stage escalation pathway?",
                answer:
                  "The five stages are: (1) Fear Activation — threat scanning, still reachable; (2) Strategy Formation — learning that managing others reduces distress, Crossroads markers appear; (3) Entitlement Loop — obedience expected, false coherence solidified, mimics Connection from outside; (4) Empathy Collapse — Emotional Resonance offline, empathy appeals fail; (5) Power Preservation — identity fused with dominance, protection of others is primary. Each stage has internal logic, observable signs, compass position, and stage-appropriate interruption.",
              },
              {
                question: "What is empathy gating?",
                answer:
                  "Empathy gating describes what happens to the three awareness capacities during escalation. Reading Emotions (RE) does not collapse — it redirects from understanding to management to weaponization. Emotional Resonance (ER) is what collapses — the felt connection channel progressively shuts down. Self-Emotional Awareness (SEA) was never there — it is the precondition, not the consequence. The configuration sharp RE + collapsed ER + absent SEA produces the most harm with the least visibility.",
              },
              {
                question: "How does F7 relate to the rest of the TEG-Blue system?",
                answer:
                  "F7 is the final framework in the collective arc (F4–F7) and completes the regulation thread (F1–F7). Each framework describes a regulation substitute at a different scale: F1 (biological return), F2 (developmental failure), F3 (cognitive replacement), F4 (rules), F5 (worth hierarchies), F6 (bias), F7 (domination). The costs escalate from truth-loss to everything. The intervention principle is consistent: restore safety first, then expect capacity. F7 is the final substitute. F8 begins the healing arc.",
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

const keyStatementBase = {
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
};

// ─── HELPER COMPONENTS ────────────────────────────────────

function KeyStatement({ children }) {
  return (
    <blockquote style={keyStatementBase}>
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

function ThreeColRow({ cells }) {
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

function FourColRow({ cells }) {
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

function FiveColRow({ cells }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      {cells.map((cell, i) => (
        <td
          key={i}
          style={{
            padding: "8px 10px",
            fontSize: 12,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400,
            lineHeight: 1.5,
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
