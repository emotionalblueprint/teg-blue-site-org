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
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "Core Propositions", href: "#core-propositions", description: "False coherence is regulation, not deception. The self-reinforcing loop maintains the stuck compass in adulthood." },
  { label: "Overview", href: "#overview", description: "F2 sets the calibration. F3 explains why it holds. Cognition replaces emotional signals with invented narratives." },
  { label: "The Core Mechanism", href: "#core-mechanism", description: "Emotional signals arrive, cognition intercepts and replaces them, the replacement produces physiological relief." },
  { label: "False Coherence", href: "#self-reinforcing-loop", description: "A coherent internal story that feels true, functions as identity, and resists correction." },
  { label: "Beliefs as Nervous System Events", href: "#cognitive-dissonance", description: "Cognitive dissonance is a regulatory response, not a logical error." },
  { label: "Identity Under Threat", href: "#regulatory-defense", description: "When false coherence is challenged, the nervous system responds in proportion to the regulatory threat." },
  { label: "The Self-Awareness Split", href: "#cognition-across-gradient", description: "Sharp pattern-reading capacity while SEA remains offline — intellectually sophisticated about everyone else." },
  { label: "Emotional Distortion", href: "#relational-turn", description: "Internal discomfort gets reclassified as external attack. Retaliation feels like self-defence." },
  { label: "External Regulation", href: "#external-regulation", description: "When internal processing is unavailable, others must provide regulation. Four modes, four strategies." },
  { label: "The Regulation Thread", href: "#what-f3-establishes", description: "The critical turn: from biological return through developmental failure to cognitive replacement." },
  { label: "What F3 Establishes", href: "#what-f3-establishes", description: "False coherence defined, the self-reinforcing loop mapped, emotional distortion and external regulation named." },
  { label: "Research Foundations", href: "#research-foundations", description: "Psychoanalytic theory, cognitive psychology, neuroscience, trauma studies, and attachment." },
  { label: "Bridge to F4", href: "#bridge-to-f4", description: "What happens when enough people running these mechanisms are in proximity." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Adult Cognition & False Coherence (F3) | TEG-Blue Research",
  description:
    "How cognition maintains what the body never learned to regulate — false coherence, the self-reinforcing loop, emotional distortion, and external regulation. Framework F3 of 12.",
  keywords: [
    "false coherence",
    "cognitive regulation",
    "emotional distortion",
    "external regulation",
    "self-reinforcing loop",
    "cognitive dissonance",
    "regulatory defense",
    "identity upgrades",
    "cognitive rigidity",
    "self-emotional awareness",
    "emotional technology",
    "nervous system regulation",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f3-false-coherence",
  },
  openGraph: {
    title: "Adult Cognition & False Coherence — F3 Framework | TEG-Blue",
    description:
      "How cognition maintains what the body never learned to regulate. False coherence, emotional distortion, and external regulation. Framework F3 of the TEG-Blue 12-framework system.",
    url: "https://teg-blue.org/framework/f3-false-coherence",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Cognition & False Coherence — TEG-Blue F3",
    description:
      "How cognition maintains what the body never learned to regulate. The cognitive maintenance framework of the TEG-Blue system.",
  },
  other: {
    'citation_title': 'Adult Cognition and False Coherence',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F3FalseCoherencePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f3-false-coherence" />

      <PageLayout
        header={
          <FrameworkHero
              badge="FRAMEWORK F3"
              title="Adult Cognition & False Coherence"
              subtitle="How Cognition Maintains What the Body Never Learned to Regulate"
              description="How the identity structures built in childhood maintain themselves in adulthood — through cognition actively replacing emotional signals with invented narratives — and what this system does to the people around it. The cognitive maintenance framework of the TEG-Blue system."
              group="Individual"
              groupLabel="Individual · F1–F3"
              threadLine="False coherence — cognition replacing restoration · Cost: Truth"
              informsModels={[
                { label: "M1", href: "/model/m1-inner-compass" },
                { label: "M2", href: "/model/m2-three-awareness-capacities" },
                { label: "M3", href: "/model/m3-the-open-cycle" },
              ]}
              adjacent={{
                prev: { label: "F2 Awareness Teaches Awareness", href: "/framework/f2-awareness-calibration" },
                next: { label: "F4 Rules Regulate", href: "/framework/f4-rules-regulate" },
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
                  Cognition recruited into threat service during childhood does not just miss emotional signals — it actively replaces them with invented narratives
                </li>
                <li style={propositionItemStyle}>
                  False coherence is regulatory success at the cost of emotional truth — not deception, not a reasoning error, but cognition regulating what the body was never taught to regulate
                </li>
                <li style={propositionItemStyle}>
                  The replacement process self-reinforces: each successful replacement teaches the system "this works" and deepens the disconnect from the biological return
                </li>
                <li style={propositionItemStyle}>
                  Cognitive dissonance is a regulatory stress response — safety must precede truth, not the other way around
                </li>
                <li style={propositionItemStyle}>
                  When Self-Emotional Awareness is structurally absent, internal discomfort becomes perceived external threat — emotional distortion is sincere misattribution, not conscious manipulation
                </li>
                <li style={propositionItemStyle}>
                  External regulation — using others to manage what cannot be processed internally — is a structural necessity, not a character flaw, expressed differently across each chronic mode
                </li>
                <li style={propositionItemStyle}>
                  Understanding the mechanism does not excuse harm — it explains why the system escalates, so accountability can be paired with accurate intervention
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
              Overview — The Cognitive Maintenance Framework
            </h2>

            <p style={proseStyle}>
              F1 defines the complete instrument — the Inner Compass with its four modes, the gradient, Biological Restoration. F2 explains how the instrument gets calibrated — and what happens when the calibration goes wrong. F3 explains what happens next: how the identity structure built in childhood <em>maintains itself</em> in adulthood — and why it is so hard to break.
            </p>
            <p style={proseStyle}>
              The central mechanism is <strong style={{ color: TEXT.primary }}>false coherence</strong>: cognition, still on threat duty from childhood, actively replacing emotional signals with its own invented narratives. The result is a stable internal story that feels true, functions as identity, and is experienced as "just who I am" — while the emotional truth it replaced continues to press from underneath.
            </p>

            <KeyStatement>
              The regulation thread: F1 defines Biological Restoration as the return mechanism. F2 shows what happens when the return path is never learned. F3 shows what cognition does in its place: false coherence.
            </KeyStatement>

            <p style={proseStyle}>
              False coherence is not "bad thinking." It is a <strong style={{ color: TEXT.primary }}>regulation strategy</strong>: cognition managing what the body was never taught to process. The person can feel stable — even "logical" — while the underlying activation remains unresolved. The cost is truth, not function.
            </p>
            <p style={proseStyle}>
              F3 also traces what this system <em>does to the people around it</em>. When internal emotional processing is structurally unavailable, two mechanisms emerge: <strong style={{ color: TEXT.primary }}>emotional distortion</strong> — where internal discomfort, unable to be identified as one's own, gets reclassified as external attack — and <strong style={{ color: TEXT.primary }}>external regulation</strong> — where the system recruits other people's emotional states, compliance, or fear to manage what Self-Emotional Awareness (SEA) cannot process internally.
            </p>
            <p style={proseStyle}>
              This is the critical turn in the regulation thread: from F1's biological return, through F2's developmental failure of that return, to F3's cognitive replacement of the return and its relational consequences. Every framework that follows — F4 through F7 — describes a different scale at which the substitutes operate. Rules regulate (F4). Worth hierarchies regulate (F5). Bias regulates (F6). Domination regulates (F7). Each is a substitute for the emotional regulation that was never built. The substitutes work. They just are not the return.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Framework</th>
                    <th style={thStyle}>The Regulation Thread</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "F1 — Biological Information",
                    "The biological return mechanism — Biological Restoration. How the body is designed to complete the activation cycle and come back to Connection.",
                  ]} />
                  <TableRow cells={[
                    "F2 — Awareness Calibration",
                    "The developmental failure of the return. When Biological Restoration is never learned, the compass gets stuck. Cognition is recruited into threat service and taught the absence of regulation is correct.",
                  ]} />
                  <TableRow cells={[
                    "F3 — False Coherence",
                    "The cognitive replacement of the return. Cognition replaces emotional signals with invented narratives. The replacement is itself regulation — but at the cost of truth. The system extends into relationships through emotional distortion and external regulation.",
                  ]} />
                </tbody>
              </table>
            </div>

            <ExpandableSection title="How This Framework Emerged" type="framework">
              <p style={expandedProseStyle}>
                F3 emerged from recognizing that multiple clinical and theoretical frameworks all describe the same adult phenomenon — how the mind protects identity through narrative control. Psychoanalytic theory (Freud, Winnicott) describes protective identity structures and defense mechanisms. Cognitive theory (Festinger, Beck, Kahneman) describes how beliefs are maintained despite contradictory evidence. Family systems (Bowen, Satir) describes how families maintain "accepted reality." Neuroscience (Siegel, Schore, Porges) describes how nervous system state gates cognition. Trauma studies (van der Kolk, Janet) describes narrative control. IFS (Schwartz) describes parts managing internal conflict. Attachment theory (Bowlby, Kohut, Kernberg) describes relational regulation strategies.
              </p>
              <p style={expandedProseStyle}>
                The synthesis: organizing these into a unified model showing that adult cognition — when recruited into threat service and never released — actively replaces emotional signals with invented narratives, and that this replacement process is the mechanism by which childhood identity structures maintain themselves across a lifetime.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── CORE MECHANISM ────────────────────────────── */}
          <section
            id="core-mechanism"
            aria-labelledby="heading-core-mechanism"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-core-mechanism" style={sectionHeadingStyle}>
              The Core Mechanism — Cognition Replaces Emotional Signals
            </h2>

            {/* Concept 1 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={conceptHeadingStyle}>
                Cognition Tells the Emotional System: "You're Not Needed Here"
              </h3>

              <p style={proseStyle}>
                This is the core mechanism of F3. When cognition was recruited into the threat response during childhood (F2) and never released, it does not just passively fail to receive emotional signals. It actively <em>replaces</em> them.
              </p>
              <p style={proseStyle}>
                The nervous system sends a signal: "I'm afraid." "This hurts." "Something is wrong." Cognition, still on threat duty, intercepts: "You're not needed here. I've got this." And then it generates a replacement: "I'm not afraid — I'm being strategic." "That didn't hurt — I'm fine." "Nothing is wrong — I'm in control."
              </p>
              <p style={proseStyle}>
                The person experiences the replacement as truth — because cognition is the system that constructs what the person experiences as "reality." When it generates a replacement for an emotional signal, the replacement feels as real as any other belief. More real, in fact — because it is accompanied by <strong style={{ color: TEXT.primary }}>physiological relief</strong>. The narrative holds together. The body calms. Cognition learns: <em>this works.</em>
              </p>
              <p style={proseStyle}>
                This is not integrative reframing — which updates meaning while keeping the emotional signal. This is <strong style={{ color: TEXT.primary }}>replacement</strong>: the narrative takes the place of the signal rather than integrating it. Often, underlying activation remains: tension stays, breath stays shallow, vigilance stays online — but the narrative reports, <em>I'm fine. I'm in control.</em>
              </p>
              <p style={proseStyle}>
                The emotional signal does not disappear. It is still being generated. It still demands regulation. But it has been told it is not needed. So it finds other doors — addiction, compulsion, somatic symptoms, external regulation through others. These are the emotional signals that cognition replaced, still knocking. They are not separate problems. They are the cost of running cognitive regulation where emotional regulation was never built.
              </p>

              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Freud — defense mechanisms (repression, denial, projection, rationalization) as automatic protective responses. Festinger (1957) — cognitive dissonance resolution. Haidt (2001) — moral reasoning as post-hoc justification. Kahneman (2011) — System 1/System 2, coherence-seeking. Porges (2011) — nervous system state gates cognition. Siegel (2012) — state-dependent processing capacity.
                </p>
              </ExpandableSection>
            </div>

            {/* Concept 2 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={conceptHeadingStyle}>
                False Coherence — Regulatory Success at the Cost of Emotional Truth
              </h3>

              <KeyStatement>
                False coherence is not deception. The person is not lying. They genuinely believe their constructed narrative because believing it reduces threat. It is regulatory success at the cost of emotional truth.
              </KeyStatement>

              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>False coherence</strong> occurs when cognition constructs a stable internal narrative that preserves identity consistency, suppresses emotional contradiction, and reduces nervous system stress — even when that narrative no longer reflects lived reality. It is experienced as certainty, moral clarity, being "right," and internal relief. This relief is <strong style={{ color: TEXT.primary }}>physiological</strong>, not epistemic — the body calms because the story holds together, not because the story is accurate.
              </p>
              <p style={proseStyle}>
                A belief can be <em>both</em> regulating and accurate — but under threat, the system prioritizes what is <strong style={{ color: TEXT.primary }}>stabilizing</strong> over what is <strong style={{ color: TEXT.primary }}>informative</strong>.
              </p>
              <p style={proseStyle}>
                This is what makes false coherence so hard to challenge. You are not confronting a lie. You are confronting a regulatory strategy that is actively keeping the person's nervous system stable. Challenging it directly increases threat — which triggers the system to produce <em>more</em> false coherence, not less.
              </p>
              <p style={proseStyle}>
                False coherence is the cognitive mechanism that keeps a stuck compass stuck. When the compass is locked in a chronic mode, cognition constructs a narrative around the locked position:
              </p>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Chronic Mode</th>
                      <th style={thStyle}>The Narrative</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={[
                      "Chronic Connection",
                      "\"I'm just a caring person. I put others first because that's who I am.\"",
                    ]} />
                    <TableRow cells={[
                      "Chronic Protection",
                      "\"The world really is dangerous. I'm not paranoid — I'm realistic.\"",
                    ]} />
                    <TableRow cells={[
                      "Chronic Control",
                      "\"I'm just being strategic. I'm the responsible one. Someone has to hold it together.\"",
                    ]} />
                    <TableRow cells={[
                      "Chronic Domination",
                      "\"They deserved it. I'm strong. If they can't handle me, that's their problem.\"",
                    ]} />
                  </tbody>
                </table>
              </div>

              <p style={proseStyle}>
                Each chronic mode has its own false coherence narrative. Each narrative makes the stuck compass feel like truth rather than a mode that got stuck. And each narrative <em>regulates</em> — it keeps the person stable within the mode. The cost is that the mode never releases because the narrative is doing the regulation that Biological Restoration was supposed to do.
              </p>

              <KeyStatement>
                Pattern indicator: if a story produces relief but consistently reduces nuance, empathy, or accountability, it is likely functioning as false coherence.
              </KeyStatement>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The term "false coherence" — capturing what no existing term does. It is not denial (which implies awareness of what is being denied). It is not rationalization (which implies a specific tactic). It is not defense mechanism (which implies a list). False coherence is the <em>outcome</em>: a narrative that works for stability but not for truth. Complete, coherent, felt as real — and wrong. The formulation "regulatory success at the cost of emotional truth" captures the non-pathologizing stance and connects directly to the regulation thread.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── SELF-REINFORCING LOOP ─────────────────────── */}
          <section
            id="self-reinforcing-loop"
            aria-labelledby="heading-self-reinforcing-loop"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-self-reinforcing-loop" style={sectionHeadingStyle}>
              The Self-Reinforcing Loop
            </h2>

            <p style={proseStyle}>
              False coherence does not just maintain itself passively. It gets stronger through use. The mechanism is a reinforcement loop:
            </p>

            <ol style={orderedListStyle}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>State shifts under stress</strong> — the nervous system moves toward protection
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Attention narrows</strong> — toward threat cues, away from contradictory data
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Cognition generates a stabilizing narrative</strong> — replacing the emotional signal with an invented explanation
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>The narrative holds</strong> — identity feels coherent, the body calms
                <p style={{ ...proseStyle, fontSize: 13, fontStyle: "italic", color: TEXT.muted, marginTop: 4, marginBottom: 0 }}>
                  Example: I feel shame → I reframe it as "they're disrespecting me" → anger rises → shame disappears from awareness → I feel coherent again.
                </p>
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Relief reinforces the pattern</strong> — cognition learns "this works"
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>The loop hardens</strong> — the replacement narrative becomes more automatic, more invisible, more "who I am"
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Over time, the replacement becomes the default</strong> — cognition no longer needs a trigger to generate it. It runs continuously. The emotional signal was replaced so long ago that its absence is invisible.
              </li>
            </ol>

            <p style={proseStyle}>
              Each cycle also deepens the disconnect from the biological return. Every time cognition successfully replaces an emotional signal, the body's own regulatory system gets less practice. The muscles that would release do not release. The breath that would deepen does not deepen. The tears that would come do not come. Cognitive regulation does not just replace emotional regulation — it prevents the conditions under which emotional regulation could develop.
            </p>

            <KeyStatement>
              This explains why insight alone often fails. Insight is a cognitive event — and cognition is the system running the replacement. The loop can absorb, narrate, and even agree with the insight without releasing the underlying state. More cognition often strengthens cognitive regulation.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Learning theory — reinforcement strengthens behavior. Hebb (1949) — "neurons that fire together wire together." Cognitive therapy — schema maintenance through confirmation bias. Trauma psychology — defensive patterns become automatic.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── COGNITIVE DISSONANCE ──────────────────────── */}
          <section
            id="cognitive-dissonance"
            aria-labelledby="heading-cognitive-dissonance"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-cognitive-dissonance" style={sectionHeadingStyle}>
              Cognitive Dissonance as Regulatory Stress
            </h2>

            <p style={proseStyle}>
              Within TEG-Blue, cognitive dissonance is redefined as a <strong style={{ color: TEXT.primary }}>regulatory stress response</strong>, not a reasoning error. Dissonance occurs when reality contradicts the narrative that cognition built — when what the body signals and what cognition invented fall out of alignment. The nervous system experiences this misalignment as threat.
            </p>
            <p style={proseStyle}>
              You can often see it in the body: <strong style={{ color: TEXT.primary }}>tightening, urgency, heat, collapse, narrowing attention</strong> — dissonance as an autonomic event, not a debate.
            </p>
            <p style={proseStyle}>
              The resolution strategies — denial, projection, blame, narrative revision, counterattack — are not thinking errors. They are the cognitive system doing its job under threat: generating a stable narrative as fast as possible to restore regulatory equilibrium.
            </p>

            <KeyStatement>
              You cannot out-think a regulatory response. You can only create conditions safe enough for the system to let truth in without collapsing.
            </KeyStatement>

            <p style={proseStyle}>
              Cognitive dissonance is particularly threatening when false coherence is the person's <em>only</em> regulatory system. If the biological return was never learned, and cognition is the only thing keeping the system stable, then challenging the cognitive narrative threatens the person's entire regulatory architecture. This is not stubbornness. It is a person clinging to the only regulation they have.
            </p>
            <p style={proseStyle}>
              The clinical implication is significant: if dissonance is a regulatory response to threat, then correcting the person's thinking <em>increases</em> threat. The standard cognitive therapy approach — identify the distortion, challenge it, replace it — can trigger defensive escalation precisely because the challenge is experienced as an attack on regulatory stability. F3 says: create safety first. Truth follows safety. Not the other way around.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Festinger (1957) — cognitive dissonance theory. Kunda (1990) — motivated reasoning. Haidt (2001) — moral reasoning as post-hoc justification. Kruglanski (1989) — need for cognitive closure. Porges (2011) — neuroception gating cognition. Freud — defense mechanisms as automatic protective responses.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── REGULATORY DEFENSE ────────────────────────── */}
          <section
            id="regulatory-defense"
            aria-labelledby="heading-regulatory-defense"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-regulatory-defense" style={sectionHeadingStyle}>
              Regulatory Defense
            </h2>

            <p style={proseStyle}>
              When external reality contradicts the identity that cognition built around the capacity gaps — when someone says something, does something, or presents evidence that the narrative cannot absorb — the system does not experience this as feedback. It experiences it as a <strong style={{ color: TEXT.primary }}>threat to its regulation</strong>.
            </p>
            <p style={proseStyle}>
              If false coherence is regulatory, and if it is the person's <em>only</em> regulatory system because the biological return was never learned, then challenging the narrative is not challenging a belief. It is threatening the mechanism that is keeping the person's nervous system stable. The response is proportionate to the regulatory threat, not to the external event. That is why it looks "disproportionate" from outside — and feels completely justified from inside.
            </p>

            <p style={proseStyle}>
              The defense looks different across the gradient — because each chronic mode has a different regulatory strategy, and what gets defended is different:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Chronic Mode</th>
                    <th style={thStyle}>How Defense Looks</th>
                    <th style={thStyle}>Regulatory Function</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Chronic Connection",
                    "Collapse, guilt, self-blame: \"I'm so sorry, I'm terrible, you're right, I'll do better.\"",
                    "Restores the narrative \"I am the caring one\" by absorbing the blame — because absorbing blame is less threatening than examining the narrative.",
                  ]} />
                  <TableRow cells={[
                    "Chronic Protection",
                    "Withdrawal, attack, shutdown: \"You're the problem. I knew I couldn't trust you. I'm done.\"",
                    "Restores stability by eliminating the source of the contradiction.",
                  ]} />
                  <TableRow cells={[
                    "Chronic Control",
                    "Strategic reframing, blame reversal, rational dismantling: \"Actually, if you look at the facts...\" \"I think you're projecting.\"",
                    "Restores coherence by out-narrating the challenge — using cognition's own tools to neutralize the threat cognitively.",
                  ]} />
                  <TableRow cells={[
                    "Chronic Domination",
                    "Rage, punishment, elimination: \"You will regret this.\" \"Who do you think you are?\"",
                    "Restores stability by destroying the challenge entirely — the narrative cannot tolerate any contradiction at all.",
                  ]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              The clinical reframe: these responses are often mislabeled as "manipulation," "bad character," or "toxicity." The regulation-based framing allows <strong style={{ color: TEXT.primary }}>accountability without demonization</strong>. The person is responsible for impact. The mechanism is understandable. Understanding the mechanism does not excuse the harm — it explains why the response is so intense and why challenging false coherence directly often escalates rather than resolves.
            </p>

            <KeyStatement>
              Accountability here means: name the impact, stop the behavior, repair where possible, and hold boundaries — without needing to label the person as monstrous in order to recognize the harm.
            </KeyStatement>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                Replacing the clinical framing of "ego injury" and "narcissistic wound" with a mechanistic account grounded in the regulation thread: the person is not defending an ego. They are defending their regulation. This reframe universalizes (any identity built around capacity gaps will produce defensive escalation when challenged), removes moral judgment without removing accountability, and connects directly to the regulation thread (the defense is so intense because the person has no fallback — no one ever taught them another way back).
              </p>
            </ExpandableSection>
          </section>

          {/* ─── IDENTITY UPGRADES ─────────────────────────── */}
          <section
            id="identity-upgrades"
            aria-labelledby="heading-identity-upgrades"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-identity-upgrades" style={sectionHeadingStyle}>
              Identity Upgrades — Growth Narratives Serving Regulation
            </h2>

            <p style={proseStyle}>
              The identity that cognition built around the capacity gaps does not stay static. It gets <em>upgraded</em> — refined through achievement, ideology, self-optimization, and spiritual or therapeutic narratives. These upgrades may resemble genuine growth while serving the same regulatory function as the original identity structure.
            </p>
            <p style={proseStyle}>
              Examples: the person in chronic Control who adds "mindful leader" to their identity through meditation practice — but uses mindfulness as a more sophisticated control strategy. The person in chronic Connection who adds "empowered empath" — but uses the language of empowerment to narrate continued self-erasure. The person in chronic Protection who adds "boundary expert" — but uses boundaries as walls that prevent connection rather than enable it.
            </p>
            <p style={proseStyle}>
              A person can gain <strong style={{ color: TEXT.primary }}>skills</strong> (language, techniques, status) while still missing <strong style={{ color: TEXT.primary }}>capacities</strong> (SEA, emotional tolerance, the return). Upgrades often improve performance without changing the internal configuration.
            </p>

            <KeyStatement>
              The diagnostic question is not "has this person changed?" but "is cognition serving truth or serving the mode?" Has the body learned anything new about coming back?
            </KeyStatement>

            <p style={proseStyle}>
              Growth that increases capacity for emotional truth — that brings SEA online, that teaches the body the return path, that allows the person to feel what they actually feel — is genuine development. Growth that gives cognition better language for the same replacement is an identity upgrade.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Rogers — conditions of worth and the "ideal self" as distorted aspiration. Psychoanalytic theory — sublimation and intellectualization as higher-order defenses. Spiritual bypassing literature — using spiritual frameworks to avoid emotional truth. Self-help culture — the "optimized self" as identity project.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── RIGIDITY ──────────────────────────────────── */}
          <section
            id="rigidity"
            aria-labelledby="heading-rigidity"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-rigidity" style={sectionHeadingStyle}>
              Rigidity Is State-Dependent, Not Character
            </h2>

            <p style={proseStyle}>
              Maintaining false coherence consumes substantial cognitive and physiological resources. When cognition is permanently replacing emotional signals with invented narratives, the cost is visible in the body: chronic tension, persistent fatigue, emotional numbing, cognitive fog, difficulty relaxing even in safe environments. These are the somatic markers of a system working overtime to maintain a narrative that no longer fits reality.
            </p>
            <p style={proseStyle}>
              Rigidity, defensiveness, and intolerance of contradiction are <strong style={{ color: TEXT.primary }}>state-dependent outcomes, not character traits</strong>. They are predictable results of a nervous system under sustained threat running a cognitive system that has been on replacement duty for years or decades.
            </p>
            <p style={proseStyle}>
              When safety increases, the system can begin to let go. Defensive activation decreases. Emotional signals become tolerable. Cognition regains flexibility. What becomes available is not new capacity but <em>existing capacity freed from defensive use.</em>
            </p>

            <KeyStatement>
              This is not "becoming someone new." It is existing capacity returning once the system is no longer paying the tax of constant replacement.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Psychoanalytic theory — defenses require energy. Cognitive psychology — maintaining incongruent beliefs requires cognitive load. Ego depletion research — regulatory resources are finite. Polyvagal Theory — sustained threat affects vagal state. Body-based psychology — emotional constriction shows somatically. Attachment theory — secure attachment increases flexibility.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── COGNITION ACROSS THE GRADIENT ──────────────── */}
          <section
            id="cognition-across-gradient"
            aria-labelledby="heading-cognition-across-gradient"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-cognition-across-gradient" style={sectionHeadingStyle}>
              Cognition Across the Gradient
            </h2>

            <p style={proseStyle}>
              The replacement process presents differently across the gradient. The mechanism is the same — cognition replacing emotional signals — but the content of the replacement and the regulatory function it serves vary by mode position:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Mode</th>
                    <th style={thStyle}>What Cognition Does</th>
                    <th style={thStyle}>What the Replacement Sounds Like</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Connection",
                    "Integrates, revises, tolerates ambiguity. Emotional signals received and used.",
                    "Minimal replacement needed. Cognition serves truth.",
                  ]} />
                  <TableRow cells={[
                    "Chronic Connection",
                    "Replaces own needs with others' needs. Self-signals overwritten by resonance data.",
                    "\"I'm fine. What do you need?\" \"I don't mind, really.\"",
                  ]} />
                  <TableRow cells={[
                    "Protection",
                    "Defends, simplifies, stabilizes. Temporary and proportionate.",
                    "Minimal replacement — system is responding to actual threat.",
                  ]} />
                  <TableRow cells={[
                    "Chronic Protection",
                    "Replaces vulnerability with threat narratives. Emotional signals reinterpreted as danger.",
                    "\"You can't trust anyone.\" \"I'm not anxious — I'm realistic.\"",
                  ]} />
                  <TableRow cells={[
                    "Chronic Control",
                    "Replaces feeling with strategy. Emotional signals overwritten by management narratives.",
                    "\"I'm not controlling — I'm responsible.\" \"I don't have a problem. I have a plan.\"",
                  ]} />
                  <TableRow cells={[
                    "Chronic Domination",
                    "Replaces fear with power narratives. Emotional signals fully overwritten.",
                    "\"They deserved it.\" \"I'm not angry — I'm right.\" \"If they can't handle me, that's their weakness.\"",
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
                The Self-Awareness / Emotional Awareness Split
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>
                A person in chronic Control can have extremely high self-awareness — they can describe their patterns, analyze their dynamics, narrate their history with precision. But this is cognition narrating <em>about</em> emotions without connecting <em>to</em> them. Reading Emotions (RE) is sharp — they read everything. SEA is offline — they feel nothing of their own.
              </p>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                This explains why highly articulate, psychologically literate people can stay deeply stuck. Their system can generate sophisticated narratives <em>about</em> emotion while the original signal remains unreceived. <strong style={{ color: TEXT.primary }}>The story can sound like processing — while functioning as replacement.</strong>
              </p>
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
                "Common Sense" as Pattern Imprint
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                What feels like obvious truth may be a coherence strategy calibrated in childhood. "That's just how the world works" is often false coherence from childhood conditions that cognition preserved and presents as universal wisdom. This connects to F2's tolerance thresholds: what the nervous system learned to endure becomes what cognition treats as "just how things are."
              </p>
            </div>

            <ExpandableSection title="What TEG-Blue Adds" type="framework">
              <p style={expandedProseStyle}>
                The gradient cognitive map showing how the same replacement mechanism produces different content at different positions — and serves different regulatory functions. The self-awareness / emotional awareness split as a direct consequence of capacity configuration: RE sharp, SEA offline = can narrate everything, feel nothing. This explains why insight fails differently in each mode — in chronic Connection, insight produces self-blame; in chronic Control, insight produces more sophisticated management; in chronic Domination, insight is weaponized as a tool for narrative control.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── THE RELATIONAL TURN ───────────────────────── */}
          <section
            id="relational-turn"
            aria-labelledby="heading-relational-turn"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-relational-turn" style={sectionHeadingStyle}>
              The Relational Turn — Emotional Distortion
            </h2>

            <p style={proseStyle}>
              Concepts 1–8 complete the individual <em>internal</em> account. The regulation thread is fully traced at the individual internal level: biological return (F1) → developmental failure (F2) → cognitive replacement (F3). But the internal system does not operate in isolation. It operates inside relationships. What does this system <em>do to the people around it?</em>
            </p>

            <h3 style={conceptHeadingStyle}>
              How Internal Discomfort Becomes Perceived External Threat
            </h3>

            <p style={proseStyle}>
              Every person has moments where internal discomfort gets misread as an external attack. Someone sets a reasonable boundary. The body reacts as if something much bigger happened. The response is disproportionate — sharper, more defensive, more retaliatory than the situation warrants. Usually, the person catches it. They feel the guilt or shame underneath and course-correct: "Sorry — that wasn't about you."
            </p>
            <p style={proseStyle}>
              This catching depends on SEA. The person can identify what they feel ("I feel defensive," "I feel guilty about what I said"), locate the source inside themselves, and separate their internal discomfort from the external situation. But when SEA is structurally absent — not temporarily offline under stress, but never fully developed — the catching never happens.
            </p>

            <KeyStatement>
              The sequence: (1) The feeling loses its name — shame, guilt, envy, fear all collapse into undifferentiated "I feel bad." (2) The body looks outward — "someone is making me feel bad" becomes "I am being attacked." (3) The body reacts — "someone hurt me, I need to hurt back." Retaliation feels like self-defense.
            </KeyStatement>

            <p style={proseStyle}>
              This is <strong style={{ color: TEXT.primary }}>emotional distortion</strong>. Internal discomfort, unable to be processed as one's own, gets reclassified as an external attack. The person genuinely believes they are defending themselves. They are not lying. They are not strategizing. The nervous system is reporting a threat that is not there — because the processing channel that would identify the signal as internal (SEA) is structurally unavailable.
            </p>
            <p style={proseStyle}>
              The connection to false coherence is direct. False coherence is the stable narrative that cognition builds. Emotional distortion is what happens in the <em>moments</em> when that narrative is challenged or when internal discomfort arises. The distortion produces the misread, and false coherence stabilizes it into the ongoing narrative.
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
                The Boundary-Evidence Loop
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>
                One person crosses a line. The other sets a boundary. The first person — unable to register their own part or feel the other person's pain — experiences the boundary as an unprovoked attack. They push back. A firmer boundary gets set. They experience this as escalation. The other person's self-protection becomes proof of being attacked. The more boundaries are set, the more "evidence" accumulates. The pattern feeds itself.
              </p>
              <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                Your boundaries become their evidence.
              </p>
            </div>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The spectrum matters.</strong> SEA can be partial. It might be present in calm moments and absent when stress rises or relational stakes increase. Each time someone catches the moment where "I feel bad" could actually be "I feel envious" or "I feel guilty," the loop loosens. When SEA is structurally absent across contexts, the loop tightens into the chronic patterns that external regulation describes.
            </p>

            <p style={proseStyle}>
              Often this is not conscious manipulation — it is <strong style={{ color: TEXT.primary }}>sincere misattribution</strong>. But the same distortion can still produce manipulative outcomes, and the impact still requires accountability.
            </p>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Porges (2011) — neuroception evaluates experienced safety, not objective danger. Damasio (1994) — somatic markers shape attribution before conscious awareness. Freud — projection as attribution of internal states to external sources. Cognitive therapy (Beck) — misattribution and cognitive distortion. Attachment theory — insecure attachment patterns produce threat-biased attribution. Schore (2003) — right-brain implicit processing shapes relational perception. Van der Kolk (2014) — trauma produces threat-biased perception and disproportionate response.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── EXTERNAL REGULATION ───────────────────────── */}
          <section
            id="external-regulation"
            aria-labelledby="heading-external-regulation"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-external-regulation" style={sectionHeadingStyle}>
              External Regulation — Using Others to Manage
            </h2>

            <p style={proseStyle}>
              Emotional distortion describes what happens in the <em>moment</em> — internal discomfort misread as external threat. External regulation describes the <em>structural consequence</em>: when internal emotional processing is permanently unavailable, the system recruits other people to perform the regulatory function.
            </p>

            <KeyStatement>
              External regulation is not a conscious strategy. It is a structural necessity. When internal regulation channels are offline, external regulation is not a choice — it is the only pathway the system has left.
            </KeyStatement>

            <p style={proseStyle}>
              Each chronic mode uses others differently:
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Chronic Mode</th>
                    <th style={thStyle}>Regulation Strategy</th>
                    <th style={thStyle}>How Others Are Used</th>
                    <th style={thStyle}>Cost to Others</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Chronic Connection — Fusion",
                    "Others' emotional states fill the void where self-awareness should be.",
                    "Others' calm makes them calm. Others' approval makes them okay. Others' distress destabilizes them — not empathy, but fusion.",
                    "Emotional exhaustion, guilt, feeling responsible for another person's entire regulation.",
                  ]} />
                  <TableRow cells={[
                    "Chronic Protection — Distance",
                    "Others' reliable distance serves as a buffer against activation.",
                    "Intimacy is the threat. Withdrawal is the regulation. Others kept at arm's length through anger, coldness, or performed self-sufficiency.",
                    "Rejection, confusion, walking on eggshells around unpredictable emotional availability.",
                  ]} />
                  <TableRow cells={[
                    "Chronic Control — Management",
                    "Others' compliance substitutes for the self-regulation that SEA would provide.",
                    "Steers conversations, manages information, corrects behavior, maintains curated reality — not for power, but for internal stability.",
                    "Loss of agency, questioning your own reality, performing compliance to avoid subtle punishment.",
                  ]} />
                  <TableRow cells={[
                    "Chronic Domination — Subjugation",
                    "Others' fear and submission directly settle internal activation.",
                    "When others submit, the activation settles — temporarily. The environment is organized around their emotional state.",
                    "Living in fear, loss of autonomy, systematic dehumanization.",
                  ]} />
                </tbody>
              </table>
            </div>

            {/* Chronic Control deep dive */}
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
                The Mode That Most Reliably Mimics Connection
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>
                Chronic Control is the mode most often invisible to outside observers. The performance of warmth <em>is</em> the regulation strategy. Apologies serve image. Generosity serves control. Vulnerability is offered strategically, never spontaneously. The person appears warm, competent, and caring in public — they perform empathy with precision (RE sharp, right words chosen, no felt resonance behind them). They manage their image with the same precision they manage everything else. They create a public narrative that directly contradicts the private reality.
              </p>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>
                The victim — the partner, the child, the employee who sees behind the performance — lives inside the managed reality. They experience subtle coercion, narrative control, emotional manipulation, and strategic withdrawal of warmth. They often cannot name what is happening because nothing visible has occurred. They appear "unstable," "emotional," or "not coping" — because chronic exposure to reality distortion produces exactly these symptoms. And they are not believed when they describe what is happening — because it contradicts what everyone else sees.
              </p>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT.primary }}>The system protects the person in chronic Control and pathologizes the victim.</strong> This is not a conspiracy. It is the structural outcome of: chronic Control's regulation strategy (performance of Connection); the worth filter (F5) — the person in chronic Control often has higher capital signals (composure, articulation, status); and bias architecture (F6) — the system sees what it expects to see.
              </p>
            </div>

            {/* Chronic Domination deep dive */}
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
                Addiction Logic Applied to Relational Domination
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>
                External regulation through subjugation has a specific property: <strong style={{ color: TEXT.primary }}>it builds tolerance</strong>. The first time the person dominates and feels the relief — the settling of internal activation — it is enough. For a while. But the relief fades. The activation returns — because SEA is offline and the actual emotional processing never happened. The same level of domination does not produce the same level of relief. They need more.
              </p>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>
                The mechanism is identical to substance addiction: the substance (others' subjugation) provides temporary relief from an internal state; the internal state is never processed (because SEA is offline); tolerance builds; escalation is required; the person is never satisfied; there is no natural stopping point. Power and wealth amplify this by providing access to more regulation sources and protection from consequences.
              </p>
              <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.7, margin: 0, fontWeight: 500, fontStyle: "italic" }}>
                There is no amount of domination that will make them feel safe — because the safety they need is internal. SEA cannot come back online through domination. It can only come back through the conditions described in F2's healing account: safety, not power.
              </p>
            </div>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={expandedProseStyle}>
                Bowlby (1969, 1988) — attachment as regulatory system. Porges (2011) — co-regulation as developmental pathway. Schore (2003) — right-brain regulation develops through relational experience. Winnicott (1960) — true self vs. false self, managing through others. Kohut (1977) — self-object needs. Kernberg (1975) — narcissistic pathology as escalation of external regulation needs. Addiction research — tolerance, escalation, and the distinction between the substance and the underlying state. Van der Kolk (2014) — trauma produces incomplete regulation stored somatically.
              </p>
            </ExpandableSection>
          </section>

          {/* ─── WHAT F3 ESTABLISHES ───────────────────────── */}
          <section
            id="what-f3-establishes"
            aria-labelledby="heading-what-f3-establishes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-what-f3-establishes" style={sectionHeadingStyle}>
              What F3 Establishes
            </h2>

            <p style={proseStyle}>
              F3 shows how the identity structures built in childhood maintain themselves in adulthood — through cognition actively replacing emotional signals with invented narratives — and what this system does to the people around it. It completes the individual arc and provides the bridge to collective scaling.
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
                    "Cognition tells the emotional system \"you're not needed\"",
                    "The core mechanism. Cognition on threat duty doesn't just miss emotional signals — it replaces them with invented narratives. The replacement feels like truth. The replacement is regulation.",
                  ]} />
                  <TableRow cells={[
                    "False coherence",
                    "Regulatory success at the cost of emotional truth. The narrative is complete, coherent, felt as real — and wrong. Not deception. Regulation.",
                  ]} />
                  <TableRow cells={[
                    "The self-reinforcing loop",
                    "Each successful replacement teaches the system \"this works.\" The loop hardens through use. Insight can be incorporated without breaking it.",
                  ]} />
                  <TableRow cells={[
                    "Cognitive dissonance as regulatory stress",
                    "Not a thinking error. A nervous system event. Challenging false coherence threatens the only regulatory system the person has. Safety must precede truth.",
                  ]} />
                  <TableRow cells={[
                    "Regulatory defense",
                    "Any identity built around capacity gaps will defend itself when challenged — because the person is defending their regulation, not their opinion. Intensity tracks the gradient.",
                  ]} />
                  <TableRow cells={[
                    "Identity upgrades",
                    "Growth narratives can serve regulation rather than development. The diagnostic: is cognition serving truth or serving the mode?",
                  ]} />
                  <TableRow cells={[
                    "Rigidity is state-dependent",
                    "Not character. Cognitive load from running the replacement process permanently. When the body learns an alternative regulatory path, rigidity can release.",
                  ]} />
                  <TableRow cells={[
                    "Cognition across the gradient",
                    "Same replacement mechanism, different content. Self-awareness without emotional awareness = cognition narrating about feelings without feeling them.",
                  ]} />
                  <TableRow cells={[
                    "Emotional distortion",
                    "When SEA is offline, internal discomfort becomes perceived external threat. Retaliation feels like self-defense. Operates on a spectrum — SEA can be partial.",
                  ]} />
                  <TableRow cells={[
                    "External regulation",
                    "When internal processing is unavailable, the system uses others to regulate. Four modes: fusion, distance, management, subjugation. Chronic Control mimics Connection. Chronic Domination follows addiction logic.",
                  ]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>
              Key Formulations
            </h3>

            <ul style={{ paddingLeft: 20, margin: "0 0 24px" }}>
              {[
                "\"Cognition tells the emotional system: you're not needed here\"",
                "\"False coherence is not deception — it is regulatory success at the cost of emotional truth\"",
                "\"Beliefs feel true because they restore nervous system stability, not because they are accurate\"",
                "\"A belief can be both regulating and accurate — but under threat, the system prioritizes what is stabilizing over what is informative\"",
                "\"You cannot out-think a regulatory response. You can only create conditions safe enough for the system to let truth in.\"",
                "\"The story can sound like processing — while functioning as replacement\"",
                "\"Common sense may be a coherence strategy calibrated in childhood and presented as universal wisdom\"",
                "\"This isn't becoming someone new. It's existing capacity returning once the system is no longer paying the tax of constant replacement.\"",
                "\"Often this is not conscious manipulation — it is sincere misattribution\"",
                "\"Retaliation feels like self-defense — because the nervous system is reporting a threat that is not there\"",
                "\"Your boundaries become their evidence\"",
                "\"External regulation is not a choice — it is the only pathway the system has left when the internal channel is offline\"",
                "\"The mode that most reliably mimics Connection\"",
                "\"Tolerance builds — the same level of domination does not produce the same level of relief\"",
                "\"There is no amount of domination that will make them feel safe — because the safety they need is internal\"",
                "\"The cognitive system that replaces personal emotional truth is the same system that absorbs and enforces social truth\"",
                "\"Every framework from F4 to F7 describes a different substitute for the regulation that was never built\"",
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

            <p style={proseStyle}>
              F3 explicitly states: "The phenomena we describe are not novel — they have been independently identified, named, and described across a century of psychological research." The contribution is synthesis and reframing, not discovery.
            </p>

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
                    "Psychoanalytic Theory",
                    "Defense mechanisms, protective identity structures, projection, self-object needs",
                    "Freud, 1923; Winnicott, 1960; Kohut, 1977; Kernberg, 1975",
                  ]} />
                  <TableRow cells={[
                    "Cognitive Psychology",
                    "Cognitive dissonance, motivated reasoning, coherence-seeking, misattribution",
                    "Festinger, 1957; Kahneman, 2011; Haidt, 2001; Beck",
                  ]} />
                  <TableRow cells={[
                    "Family Systems",
                    "Accepted reality, communication patterns, emotional process",
                    "Bowen; Satir",
                  ]} />
                  <TableRow cells={[
                    "Polyvagal-Informed Neuroscience",
                    "State-dependent cognition, neuroception gating, co-regulation, nervous system synchronization",
                    "Porges, 2011; Siegel, 2012; Schore, 2003",
                  ]} />
                  <TableRow cells={[
                    "Trauma Studies",
                    "Narrative fragmentation and control, body-based memory, incomplete regulation, threat-biased perception",
                    "Van der Kolk, 2014; Janet; Levine, 1997",
                  ]} />
                  <TableRow cells={[
                    "Internal Family Systems",
                    "Parts managing internal conflict, protective roles",
                    "Schwartz, 1995",
                  ]} />
                  <TableRow cells={[
                    "Attachment Theory",
                    "Attachment as regulatory system, insecure attachment patterns, relational regulation",
                    "Bowlby, 1969; Ainsworth, 1978",
                  ]} />
                  <TableRow cells={[
                    "Addiction Research",
                    "Tolerance, escalation, distinction between substance and underlying state",
                    "Established literature",
                  ]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── BRIDGE TO F4 ──────────────────────────────── */}
          <section
            id="bridge-to-f4"
            aria-labelledby="heading-bridge-to-f4"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bridge-to-f4" style={sectionHeadingStyle}>
              Bridge to F4: How Individual Patterns Become Collective Rule Systems
            </h2>

            <p style={proseStyle}>
              F3 completes the individual arc — both the internal mechanisms and their relational consequences. The regulation thread at the individual level is now fully traced: the biological return was never learned, cognition replaced it, the replacement produces emotional distortion and external regulation, and these mechanisms operate in every relationship the person is in.
            </p>
            <p style={proseStyle}>
              F4 asks: what happens when enough people in a system are running these mechanisms? When enough compasses are stuck in threat-based modes? When enough individuals are externally regulating through others, running emotional distortion, and absorbing rules as truth through false coherence?
            </p>
            <p style={proseStyle}>
              The answer is collective rule systems. Not rational agreements or social contracts. Nervous system regulation at the group level. When enough individuals in a system need predictability, belonging protection, and conformity to stay regulated, the group develops structures that provide these — and the structures become self-reinforcing because questioning them activates the same threat response that created them.
            </p>

            <KeyStatement>
              The same cognitive system that maintains individual false coherence is the system that absorbs and maintains social rules. Individual false coherence → collective rule systems. The mechanism is the same. The scale changes.
            </KeyStatement>

            <p style={proseStyle}>
              F3 is the individual. F4 is what the individuals produce together.
            </p>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="f3-false-coherence" type="framework" />

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
                  <NavRow label="Read the first collective framework (F4)" href="/framework/f4-rules-regulate" linkText="Rules Regulate →" />
                  <NavRow label="Read the foundational framework (F1)" href="/framework/f1-emotional-gradient" linkText="Emotions as Biological Information →" />
                  <NavRow label="Read the calibration framework (F2)" href="/framework/f2-awareness-calibration" linkText="Awareness Teaches Awareness →" />
                  <NavRow label="See the applied models" href="/models" linkText="Core Models →" />
                  <NavRow label="See what cognition overrides — the biology underneath false coherence" href="/model/m3-the-open-cycle" linkText="The Biology of Unfinished Emotion (M3) →" />
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
            "@id": "https://teg-blue.org/framework/f3-false-coherence#article",
            headline: "Adult Cognition & False Coherence: How Cognition Maintains What the Body Never Learned to Regulate",
            description:
              "How the identity structures built in childhood maintain themselves in adulthood through cognition actively replacing emotional signals with invented narratives. Framework F3 of the TEG-Blue 12-framework system.",
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
              "@id": "https://teg-blue.org/framework/f3-false-coherence",
            },
            about: [
              { "@type": "Thing", name: "False Coherence" },
              { "@type": "Thing", name: "Cognitive Regulation" },
              { "@type": "Thing", name: "Emotional Distortion" },
              { "@type": "Thing", name: "External Regulation" },
              { "@type": "Thing", name: "Cognitive Dissonance" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "A Theory of Cognitive Dissonance (Festinger, 1957)" },
              { "@type": "ScholarlyArticle", name: "Thinking, Fast and Slow (Kahneman, 2011)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Affect Regulation and the Origin of the Self (Schore, 2003)" },
              { "@type": "ScholarlyArticle", name: "The Maturational Processes (Winnicott, 1960)" },
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
              { "@type": "ScholarlyArticle", name: "The Restoration of the Self (Kohut, 1977)" },
            ],
            keywords: [
              "false coherence",
              "cognitive regulation",
              "emotional distortion",
              "external regulation",
              "self-reinforcing loop",
              "regulatory defense",
              "cognitive dissonance",
              "nervous system regulation",
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
              { name: "F3: False Coherence", url: "/framework/f3-false-coherence" },
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
                question: "What is false coherence in the TEG-Blue system?",
                answer:
                  "False coherence occurs when cognition constructs a stable internal narrative that preserves identity consistency and reduces nervous system stress — even when that narrative no longer reflects lived reality. It is experienced as certainty, moral clarity, and internal relief. The relief is physiological, not epistemic. False coherence is not deception — it is regulatory success at the cost of emotional truth.",
              },
              {
                question: "What is the self-reinforcing loop in false coherence?",
                answer:
                  "False coherence gets stronger through use via a reinforcement loop: stress triggers narrowed attention, cognition generates a stabilizing narrative, the narrative produces physiological relief, and relief teaches the system 'this works.' Each cycle makes the replacement more automatic and the original emotional signal harder to detect. The loop can absorb insight without breaking.",
              },
              {
                question: "What is emotional distortion in the TEG-Blue framework?",
                answer:
                  "Emotional distortion occurs when Self-Emotional Awareness (SEA) is structurally absent and internal discomfort cannot be identified as one's own. The feeling loses its name, the body attributes it to an external source, and the person genuinely perceives a threat that is not there. Retaliation feels like self-defense. This is sincere misattribution, not conscious manipulation.",
              },
              {
                question: "What is external regulation?",
                answer:
                  "External regulation is the use of other people's emotional states, compliance, or fear to manage internal activation that cannot be processed internally. Each chronic mode uses others differently: chronic Connection uses fusion, chronic Protection uses distance, chronic Control uses management, and chronic Domination uses subjugation. It is a structural necessity when internal regulation channels are offline.",
              },
              {
                question: "How does F3 connect to the rest of the TEG-Blue system?",
                answer:
                  "F3 completes the individual arc of the regulation thread: F1 establishes the biological return mechanism, F2 shows what happens when it is never learned, and F3 shows what cognition does in its place. F3 also bridges to the collective arc (F4–F7) by showing how individual false coherence extends into relationships through emotional distortion and external regulation, and scales into collective rule systems.",
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
              name: "Adult Cognition & False Coherence (F3) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f3-false-coherence",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
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
