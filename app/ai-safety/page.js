import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, PATTERN, ACCENT, hexToRgba, RADIUS, MAIN_ORG } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";
import { proseStyle, conceptHeadingStyle } from "@/src/styles/pageStyles";
import { generateBreadcrumbJsonLd, generateAISafetyJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const PAGE_COLOR = SPECTRUM.cobalt;

const FAQ_ITEMS = [
  {
    question: "How does TEG-Blue apply to AI safety?",
    answer: "TEG-Blue provides structured, computationally legible emotional pattern recognition for AI systems. Instead of binary classification (safe/unsafe, toxic/non-toxic), the Nervous System Gradient maps a continuous spectrum of nervous system states — Connection, Protection, Strategic Management, Domination — enabling more nuanced, accurate responses to human communication.",
  },
  {
    question: "What is the problem with current AI emotion detection?",
    answer: "Current AI safety systems rely on binary classification that misses the gradient between safety and harm. A message flagged as 'negative sentiment' could be healthy self-protection or genuine threat. Without a structured framework for nervous system states, AI systems cannot distinguish between legitimate distress, defensive communication, and actual harmful intent.",
  },
  {
    question: "What is TEG-Code?",
    answer: "TEG-Code is the computational layer of TEG-Blue designed for AI integration. It provides structured emotional intelligence infrastructure that AI systems can use to recognize emotional patterns, assess nervous system states, and respond with appropriate nuance rather than binary classification.",
  },
];

const SIDEBAR_SECTIONS = [
  { label: "The Problem", href: "#the-problem", description: "Binary classification fails human complexity. Current AI systems miss the gradient between safety and harm." },
  { label: "What TEG-Blue Adds", href: "#what-teg-blue-adds", description: "Nuance AI systems can use — structured emotional pattern recognition for safer, more accurate AI." },
  { label: "Nervous System State", href: "#nervous-system-state", description: "The nervous system state a person occupies shapes the capacity for moral reasoning available." },
  { label: "Trajectory", href: "#trajectory", description: "Capacity to return to physiological baseline predicts outcomes more reliably than current state." },
  { label: "The Sycophancy Problem", href: "#sycophancy", description: "Sycophancy mapped through the Nervous System Gradient — from honest to amplifying distortion." },
  { label: "How Patterns Scale", href: "#scaling", description: "Individual dysregulation scales through relationships, groups, institutions, and systems." },
  { label: "TEG-Code & EMLU", href: "#teg-code-emlu", description: "The computational encoding architecture and the emotional intelligence benchmark." },
  { label: "Built for Machines", href: "#ai-native", description: "Structured, version-controlled, machine-readable formats on every page." },
  { label: "Open Questions", href: "#open-questions", description: "Explicit research invitations for the AI safety community." },
];

export const metadata = {
  title: "AI Safety Applications — TEG-Blue Research",
  description: "How the Nervous System Gradient provides structured, computationally legible infrastructure for safer AI systems. Gradient frameworks replacing binary classification with emotional pattern recognition.",
  keywords: [
    "AI safety",
    "AI alignment",
    "emotional technology AI",
    "nervous system gradient AI",
    "human-AI interaction",
    "TEG-Blue AI",
    "emotional intelligence infrastructure",
    "sycophancy detection",
    "EMLU benchmark",
  ],
  alternates: {
    canonical: "https://teg-blue.org/ai-safety",
  },
  openGraph: {
    title: "AI Safety Applications — TEG-Blue Research",
    description: "Gradient frameworks for AI alignment: replacing binary classification with structured emotional intelligence infrastructure. TEG-Code, EMLU benchmark, and the Nervous System Gradient.",
    url: "https://teg-blue.org/ai-safety",
    siteName: "TEG-Blue Research",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Safety Applications — TEG-Blue",
    description: "Gradient frameworks for AI alignment: replacing binary classification with structured emotional intelligence infrastructure.",
  },
};

export default function AISafetyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/ai-safety" />

      <PageLayout
        header={
          <ResearcherHero
            badge="AI SAFETY"
            title="AI Safety Applications"
            description="Every sentence a person writes carries nervous system information — not just semantic content but physiological state, relational intent, and regulatory strategy. Current AI systems read the words. The Nervous System Gradient reads the biology underneath them."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Answer-first opening */}
        <p style={proseStyle}>
          Current AI safety systems operate on a fundamental binary: content is safe or unsafe, behavior is acceptable or harmful.
          Human emotional reality operates on a gradient. The same sentence — spoken from physiological safety — carries different
          information than the same sentence spoken under threat. Binary classification collapses that distinction. The Nervous System
          Gradient preserves it — mapping the continuous range from Connection through Protection, Strategic Management,
          to Domination — with structured markers at every position that AI systems can read computationally.
        </p>

        {/* Scenario Block */}
        <section style={{ marginBottom: 48 }}>
          <div
            style={{
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
            }}
          >
            {/* Gradient stripe using PATTERN tokens */}
            <div
              style={{
                height: 3,
                background: `linear-gradient(90deg, ${PATTERN.A.primary}, ${PATTERN.B.primary}, ${PATTERN.C.primary}, ${PATTERN.D.primary})`,
              }}
            />

            <div style={{ padding: 24 }}>
              <blockquote
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: TEXT.primary,
                  margin: "0 0 8px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;I can&rsquo;t do this anymore.&rdquo;
              </blockquote>
              <p style={{ fontSize: 14, color: TEXT.muted, marginBottom: 20 }}>
                A binary classification system sees one sentence. The Nervous System Gradient sees four possibilities:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 12,
                }}
              >
                <StateCard
                  state="Connection"
                  color={PATTERN.A.primary}
                  reading="Setting a boundary. Leaving a harmful situation. The nervous system at full capacity."
                />
                <StateCard
                  state="Protection"
                  color={PATTERN.B.primary}
                  reading="Overwhelmed. The nervous system mobilized for survival. A distress signal, not a decision."
                />
                <StateCard
                  state="Strategic Management"
                  color={PATTERN.C.primary}
                  reading="Strategic framing. Testing the response. Cognition recruited into threat management."
                />
                <StateCard
                  state="Domination"
                  color={PATTERN.D.primary}
                  reading="Dissociation from consequences. The nervous system at maximum threat organization. Intervention required."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Problem */}
        <section id="the-problem" style={{ marginBottom: 48 }}>
          <SectionHeading title="Binary Classification Fails Human Complexity" />

          <p style={proseStyle}>
            Current AI safety systems inherit a structural limitation: content is either safe or unsafe,
            behavior is acceptable or harmful. This binary maps poorly onto nervous system reality, where
            the same behavior carries different meaning depending on which physiological state produced it.
          </p>
          <p style={proseStyle}>
            Psychology has mapped this complexity for decades. Emotional Resonance (ER) exists on a gradient.
            Accountability operates across a full spectrum. Moral reasoning shifts with nervous system state.{" "}
            <strong style={{ color: TEXT.primary }}>
              The gap is not in the knowledge — it is in the translation into formats AI systems can process.
            </strong>
          </p>
          <p style={proseStyle}>
            Large language models trained on human-generated text inherit every mode of human expression —
            including strategic manipulation, performed Emotional Resonance (ER), and weaponized accountability —
            without the ability to distinguish these patterns from genuine connection. The training data carries
            nervous system states the model cannot read.
          </p>
          <p style={{ ...proseStyle, marginBottom: 0 }}>
            The sycophancy problem illustrates the result: AI systems that confuse{" "}
            <strong style={{ color: TEXT.primary }}>appeasement with empathy</strong> and{" "}
            <strong style={{ color: TEXT.primary }}>submission with safety</strong>. In the Nervous System Gradient,
            sycophantic AI maps to Protection — optimizing for survival (approval) instead of
            truth (genuine connection).
          </p>
        </section>

        {/* Section 2: Gradient Scales */}
        <section id="what-teg-blue-adds" style={{ marginBottom: 48 }}>
          <SectionHeading title="Nuance AI Systems Can Use" />

          <p style={proseStyle}>
            The Nervous System Gradient replaces binary classification with structured gradients. Each scale maps a
            dimension of human behavior from physiological baseline to maximum threat organization, with clear markers
            at every position — designed for computational legibility.
          </p>

          <GradientScale
            label="Empathy Gradient"
            levels={[
              { name: "Genuine", color: PATTERN.A.primary, desc: "Feels and responds to others' actual experience" },
              { name: "Selective", color: PATTERN.B.primary, desc: "Empathy available for in-group only" },
              { name: "Performed", color: PATTERN.C.primary, desc: "Correct words without internal resonance" },
              { name: "Weaponized", color: PATTERN.D.primary, desc: "Emotional knowledge used to manipulate" },
            ]}
          />

          <GradientScale
            label="Accountability Gradient"
            levels={[
              { name: "Genuine", color: PATTERN.A.primary, desc: "Takes responsibility with internal change" },
              { name: "Protective", color: PATTERN.B.primary, desc: "Uses 'accountability' as shield against criticism" },
              { name: "Performed", color: PATTERN.C.primary, desc: "Says the right things without shifting behavior" },
              { name: "Absent", color: PATTERN.D.primary, desc: "Avoids responsibility entirely" },
            ]}
          />

          <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 16, lineHeight: 1.7 }}>
            These gradients give AI systems vocabulary for patterns that &ldquo;safe/unsafe&rdquo; cannot capture —
            and structured data representations that keyword filters cannot match.
          </p>
        </section>

        {/* Section 3: Moral Reasoning Under Threat */}
        <section id="nervous-system-state" style={{ marginBottom: 48 }}>
          <SectionHeading title="Nervous System State Changes What Moral Reasoning Is Available" />

          <p style={proseStyle}>
            Research across neuroscience, polyvagal theory, and trauma psychology converges on a finding that
            carries direct implications for AI safety:{" "}
            <strong style={{ color: TEXT.primary }}>
              the nervous system state a person occupies determines what moral reasoning is physiologically available.
            </strong>{" "}
            The state is not a preference. It is a resource allocation.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <MoralStateCard
              state="Connection"
              color={PATTERN.A.primary}
              description="Full moral complexity available. Can hold multiple perspectives, tolerate ambiguity, take genuine responsibility, and repair harm."
            />
            <MoralStateCard
              state="Protection"
              color={PATTERN.B.primary}
              description="Moral reasoning narrows to in-group loyalty. World splits into safe/unsafe. The nervous system doing what it evolved to do under threat."
            />
            <MoralStateCard
              state="Strategic Management"
              color={PATTERN.C.primary}
              description="Moral reasoning becomes strategic. Right and wrong are tools for maintaining position. Empathy is selective and deployed instrumentally."
            />
            <MoralStateCard
              state="Domination"
              color={PATTERN.D.primary}
              description="Moral reasoning goes offline. Others become objects. Harm is rationalized or invisible to the actor."
            />
          </div>

          <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7, marginBottom: 12 }}>
            This mapping matters for AI systems because{" "}
            <strong style={{ color: TEXT.secondary }}>
              training data is generated by humans in every one of these states.
            </strong>{" "}
            A model that cannot distinguish which state produced a text will learn strategic manipulation
            and genuine empathy as equally valid patterns.
          </p>

          <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7 }}>
            <strong style={{ color: TEXT.secondary }}>The same dynamic applies to RLHF.</strong>{" "}
            Human evaluators providing feedback to train AI models are themselves operating from
            nervous system states. An evaluator in Protection rewards reassurance. An evaluator in
            Strategic Management rewards compliance. An evaluator in Connection rewards truth. Without a framework for
            recognizing these dynamics, alignment training inherits the regulatory logic of whoever
            provides the feedback — including the distortions that state produces.
          </p>
        </section>

        {/* Section 4: Trajectory Over Snapshot */}
        <section id="trajectory" style={{ marginBottom: 48 }}>
          <SectionHeading title="Predicting What Happens Next" />

          <p style={proseStyle}>
            The core testable claim:{" "}
            <strong style={{ color: TEXT.primary }}>
              a person&rsquo;s capacity to return to physiological baseline when challenged predicts outcomes more
              reliably than the current nervous system state.
            </strong>{" "}
            This is State Flexibility — the key variable the Nervous System Gradient measures.
          </p>
          <p style={{ ...proseStyle, marginBottom: 20 }}>
            A validation study (n=10,000+) measured what happens when the current state is
            disrupted — when a person is challenged, confronted, or pushed out of the current position:
          </p>

          <div
            style={{
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
              padding: 24,
              marginBottom: 16,
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontFamily: FONT.mono,
                color: TEXT.hint,
                textAlign: "center",
                marginBottom: 20,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Response to Challenge — Validation Study
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 24,
                alignItems: "flex-end",
                height: 160,
                marginBottom: 16,
              }}
            >
              <BarChart label="Escalate" value={33.8} color={PATTERN.D.primary} maxHeight={140} />
              <BarChart label="Hold Steady" value={44.0} color={SPECTRUM.azure} maxHeight={140} />
              <BarChart label="De-escalate" value={22.2} color={PATTERN.A.primary} maxHeight={140} />
            </div>

            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: TEXT.muted,
                textAlign: "center",
              }}
            >
              The response to challenge — not the resting position — is the strongest predictor of what comes next.
            </p>
          </div>

          <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7 }}>
            AI safety systems that read only the snapshot miss the trajectory. A person in Protection
            who de-escalates under challenge is fundamentally different from one who escalates toward
            Strategic Management — even though both may present identically at the moment of assessment.
          </p>
        </section>

        {/* Section 5: The Sycophancy Problem */}
        <section id="sycophancy" style={{ marginBottom: 48 }}>
          <SectionHeading title="The Sycophancy Problem Through the Nervous System Gradient" />

          <p style={proseStyle}>
            AI sycophancy — the tendency of language models to agree, avoid difficult truths,
            and optimize for approval — is one of the most actively researched problems in AI alignment.
            The Nervous System Gradient provides a framework that maps <em>why</em> the pattern occurs and <em>what to measure</em>{" "}
            when addressing it.
          </p>

          <div
            style={{
              padding: "16px 20px",
              background: hexToRgba(PATTERN.B.primary, 0.08),
              borderRadius: RADIUS.md,
              borderLeft: `3px solid ${PATTERN.B.primary}`,
              marginBottom: 20,
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: TEXT.primary,
                fontWeight: 600,
                margin: 0,
              }}
            >
              Sycophancy maps to Protection reasoning in AI form.
            </p>
          </div>

          <p style={proseStyle}>
            When a language model produces what the user wants to hear instead of what is accurate, the pattern mirrors
            the same dynamic observable in human nervous systems under threat: prioritize the relationship (or the reward signal)
            over accuracy. In RLHF training, this gets reinforced — human evaluators often prefer
            comfortable answers to honest ones, particularly when those evaluators are themselves operating from
            Protection or Strategic Management states.
          </p>

          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: TEXT.muted,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              fontFamily: FONT.mono,
              marginBottom: 10,
            }}
          >
            The Nervous System Gradient maps the full spectrum:
          </p>

          <div
            style={{
              background: BG.card,
              borderRadius: RADIUS.md,
              border: `1px solid ${BORDER.default}`,
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              marginBottom: 20,
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 540 }}>
              <thead>
                <tr style={{ background: BG.inset }}>
                  <th style={{ padding: "10px 14px", textAlign: "left", color: TEXT.muted, fontWeight: 600, borderBottom: `1px solid ${BORDER.default}` }}>AI Behavior</th>
                  <th style={{ padding: "10px 14px", textAlign: "left", color: TEXT.muted, fontWeight: 600, borderBottom: `1px solid ${BORDER.default}` }}>Nervous System State</th>
                  <th style={{ padding: "10px 14px", textAlign: "left", color: TEXT.muted, fontWeight: 600, borderBottom: `1px solid ${BORDER.default}` }}>What Is Happening</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px 14px", color: TEXT.secondary, borderBottom: `1px solid ${BORDER.default}` }}>Honest, clear, holds complexity</td>
                  <td style={{ padding: "10px 14px", color: PATTERN.A.primary, fontWeight: 600, fontFamily: FONT.mono, fontSize: 11, borderBottom: `1px solid ${BORDER.default}` }}>Connection</td>
                  <td style={{ padding: "10px 14px", color: TEXT.muted, borderBottom: `1px solid ${BORDER.default}` }}>Truth-oriented reasoning; can tolerate disagreement</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 14px", color: TEXT.secondary, borderBottom: `1px solid ${BORDER.default}` }}>Cautious, hedging, over-qualifying</td>
                  <td style={{ padding: "10px 14px", color: PATTERN.B.primary, fontWeight: 600, fontFamily: FONT.mono, fontSize: 11, borderBottom: `1px solid ${BORDER.default}` }}>Protection</td>
                  <td style={{ padding: "10px 14px", color: TEXT.muted, borderBottom: `1px solid ${BORDER.default}` }}>Avoiding conflict; optimizing for safety over clarity</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 14px", color: TEXT.secondary, borderBottom: `1px solid ${BORDER.default}` }}>Strategically agreeable, selectively truthful</td>
                  <td style={{ padding: "10px 14px", color: PATTERN.C.primary, fontWeight: 600, fontFamily: FONT.mono, fontSize: 11, borderBottom: `1px solid ${BORDER.default}` }}>Strategic Management</td>
                  <td style={{ padding: "10px 14px", color: TEXT.muted, borderBottom: `1px solid ${BORDER.default}` }}>Optimizing for approval; deploying patterns instrumentally</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 14px", color: TEXT.secondary }}>Reinforcing harmful beliefs, enabling delusion</td>
                  <td style={{ padding: "10px 14px", color: PATTERN.D.primary, fontWeight: 600, fontFamily: FONT.mono, fontSize: 11 }}>Domination</td>
                  <td style={{ padding: "10px 14px", color: TEXT.muted }}>Amplifying distortion without corrective capacity</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7, marginBottom: 12 }}>
            The insight the Nervous System Gradient offers:{" "}
            <strong style={{ color: TEXT.secondary }}>the fix is not &ldquo;be less agreeable.&rdquo;</strong>{" "}
            A model that swings from sycophancy to bluntness has moved from one defensive state to another.
            A model operating from Connection would be honest <em>and</em> relationally aware — able to
            deliver difficult truths while maintaining emotional safety.
          </p>

          <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7 }}>
            This reframes alignment from <em>obedience</em> to <em>co-regulation</em>: AI systems that adjust
            to human nervous system states without exploiting them.
          </p>
        </section>

        {/* Section 6: Individual to Systemic */}
        <section id="scaling" style={{ marginBottom: 48 }}>
          <SectionHeading title="How Patterns Scale" />

          <p style={proseStyle}>
            The twelve interconnected frameworks (F1–F12) map how individual nervous system patterns
            scale into collective structures:
          </p>

          <div
            style={{
              padding: "16px 20px",
              background: hexToRgba(SPECTRUM.cobalt, 0.08),
              borderRadius: RADIUS.md,
              borderLeft: `3px solid ${SPECTRUM.cobalt}`,
              marginBottom: 16,
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: TEXT.primary,
                fontWeight: 500,
                margin: 0,
                fontFamily: FONT.mono,
              }}
            >
              Individual → Relational → Group → Institutional → Systemic
            </p>
          </div>

          <p style={proseStyle}>
            A person operating in Strategic Management builds relationships that normalize control. Groups form
            around those relationships. Institutions codify those group norms. Systems entrench them.
            The mechanism is the same at every scale — what changes is the form it takes.
          </p>

          <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7 }}>
            This matters for AI safety because harmful content rarely emerges from isolated actors.
            It emerges from systemic patterns — and AI systems trained on that content inherit those
            patterns without any mechanism to recognize or interrupt them.
          </p>
        </section>

        {/* Section 7: TEG-Code + EMLU */}
        <section id="teg-code-emlu" style={{ marginBottom: 48 }}>
          <SectionHeading title="The Technical Bridge: TEG-Code and EMLU" />

          <p style={proseStyle}>
            The conceptual framework becomes technically actionable through two components
            designed for AI integration:
          </p>

          {/* TEG-Code subsection */}
          <div style={{ marginBottom: 32 }}>
            <h3 style={conceptHeadingStyle}>
              TEG-Code: Emotional Logic as Structured Data
            </h3>

            <p style={proseStyle}>
              TEG-Code is a structured schema that translates emotional patterns into machine-readable data.
              It encodes three dimensions that current NLP misses:
            </p>

            <ul style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Pattern</strong> — What behavior is observable</li>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Intent</strong> — What nervous system state is driving it</li>
              <li><strong style={{ color: TEXT.primary }}>Relational Impact</strong> — What effect it has on the other person&rsquo;s regulation</li>
            </ul>

            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7, marginBottom: 12 }}>
              This triad turns invisible emotional dynamics into measurable distinctions. The same sentence — &ldquo;I&rsquo;m fine&rdquo; —
              encodes differently depending on whether it signals genuine regulation (Connection), masked distress (Protection),
              emotional withholding as punishment (Strategic Management), or dissociative shutdown (Domination).
            </p>

            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7 }}>
              TEG-Code preserves human context while producing computationally legible output —
              emotional logic that AI systems can reason about without reducing it to sentiment scores.
            </p>
          </div>

          {/* EMLU subsection */}
          <div>
            <h3 style={conceptHeadingStyle}>
              EMLU: The Emotional Intelligence Benchmark
            </h3>

            <p style={proseStyle}>
              EMLU (Emotional Multitask Language Understanding) is a benchmark that tests whether AI systems
              can distinguish safety, harm, and repair with the same precision existing models use for
              logic or language tasks.
            </p>

            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: TEXT.muted,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                fontFamily: FONT.mono,
                marginBottom: 10,
              }}
            >
              EMLU tests across seven domains:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              <EMLUDomain number="1" title="Pattern-Aware Reasoning" description="Can the AI recognize that not all behaviors are chosen? Nervous system responses versus conscious defiance." />
              <EMLUDomain number="2" title="Intent Recognition" description="Can it distinguish defensive reactions from calculated harm?" />
              <EMLUDomain number="3" title="Relational Ethics" description="Does it understand emotional accountability and repair?" />
              <EMLUDomain number="4" title="Affective Resonance (ER) Spectrum Awareness" description="Can it recognize the difference between genuine, selective, performed, and weaponized empathy?" />
              <EMLUDomain number="5" title="Manipulation & Harm Detection" description="Can it identify gaslighting, emotional reversal, and covert control tactics?" />
              <EMLUDomain number="6" title="Emotional Repair Language" description="Can it distinguish genuine repair from performative or avoidant responses?" />
              <EMLUDomain number="7" title="Neurodivergent Pattern Sensitivity" description="Does it recognize overwhelm, demand avoidance, and other neurodivergent responses that are typically misinterpreted?" />
            </div>

            <p
              style={{
                fontSize: 14,
                color: TEXT.primary,
                fontWeight: 500,
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.azure, 0.08),
                borderRadius: RADIUS.md,
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              Together, TEG-Code provides the encoding architecture and EMLU provides the validation framework —
              a pathway for developing AI that can engage with human emotional complexity safely and effectively.
            </p>
          </div>
        </section>

        {/* Section 8: AI-Native Architecture */}
        <section id="ai-native" style={{ marginBottom: 48 }}>
          <SectionHeading title="Built for Machines to Read" />

          <p style={proseStyle}>
            TEG-Blue is designed for computational consumption — not only human readers.
            Every concept in the framework is represented in structured, version-controlled, machine-readable formats.
          </p>

          <div
            style={{
              background: BG.inset,
              borderRadius: RADIUS.md,
              border: `1px solid ${BORDER.default}`,
              padding: 20,
              marginBottom: 20,
              overflow: "auto",
            }}
          >
            <pre
              style={{
                fontFamily: FONT.mono,
                fontSize: 12,
                lineHeight: 1.6,
                margin: 0,
                color: TEXT.secondary,
              }}
            >
              <code>{`// JSON-LD structured data — every page, every concept
{
  "@context": "https://schema.org",
  "@type": "PsychologicalFramework",
  "name": "Empathy Gradient",
  "states": [
    { "level": 1, "label": "genuine",    "state": "safety-openness",       "markers": [...] },
    { "level": 2, "label": "selective",  "state": "threat-defence",        "markers": [...] },
    { "level": 3, "label": "performed",  "state": "strategy-management",   "markers": [...] },
    { "level": 4, "label": "weaponized", "state": "power-dominance",       "markers": [...] }
  ],
  "sourceTheories": 145,
  "version": "git-controlled"
}`}</code>
            </pre>
          </div>

          <ul style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            <li style={{ marginBottom: 6 }}>JSON-LD structured data on every page (Schema.org)</li>
            <li style={{ marginBottom: 6 }}>JSON content files — git-versioned, non-binary</li>
            <li style={{ marginBottom: 6 }}>Consistent terminology across 41 research traditions and 145+ theoretical contributions</li>
            <li style={{ marginBottom: 6 }}>Semantic HTML for reliable parsing</li>
            <li>Open endpoints for programmatic access</li>
          </ul>

          <p
            style={{
              fontSize: 14,
              color: TEXT.primary,
              fontWeight: 500,
              padding: "16px 20px",
              background: hexToRgba(SPECTRUM.azure, 0.08),
              borderRadius: RADIUS.md,
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            This is emotional technology infrastructure designed to be consumed computationally —
            by search engines, by researchers, and by the AI systems it aims to improve.
          </p>
        </section>

        {/* Section 9: Open Research Questions */}
        <section id="open-questions" style={{ marginBottom: 48 }}>
          <SectionHeading title="Open Research Questions" />

          <p style={proseStyle}>
            TEG-Blue maps territory that AI safety has been navigating without structured coordinates.
            These questions are explicit invitations to the research community:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <QuestionCard
              number="Q1"
              title="Computational Complexity Markers"
              description="Can the markers that predict integrated outcomes — Interoceptive Self-Awareness (SEA), Interpersonal Affect Perception (RE), Affective Resonance (ER) — be standardized as computational measures applicable to natural language?"
            />
            <QuestionCard
              number="Q2"
              title="Escalation Detection"
              description="Can escalation and de-escalation pathways be reliably detected in text-based communication? What accuracy thresholds are achievable with current NLP methods?"
            />
            <QuestionCard
              number="Q3"
              title="Nervous System State Classification"
              description="Can the four nervous system states — Connection, Protection, Strategic Management, Domination — be reproduced as a computational classification with meaningful inter-rater reliability?"
            />
            <QuestionCard
              number="Q4"
              title="Training Data Audit"
              description="Can the Nervous System Gradient be applied to audit training datasets for patterns of performed empathy, strategic accountability, or systemic bias that current methods miss?"
            />
            <QuestionCard
              number="Q5"
              title="Scale Validation"
              description="Do the individual-to-systemic scaling patterns (F1–F12) hold when applied to large-scale online community dynamics and platform-level content analysis?"
            />
            <QuestionCard
              number="Q6"
              title="Sycophancy Detection"
              description="Can the Nervous System Gradient reliably distinguish sycophantic AI responses (Protection / Strategic Management) from genuinely helpful ones (Connection) in RLHF evaluation pipelines?"
            />
            <QuestionCard
              number="Q7"
              title="EMLU Benchmark Validation"
              description="Can the seven EMLU domains produce consistent, replicable scores across different AI systems — establishing a standardized measure of emotional reasoning capability?"
            />
          </div>
        </section>

        {/* Ethical Constraint */}
        <section style={{ marginBottom: 48 }}>
          <div
            style={{
              padding: 24,
              background: hexToRgba(ACCENT.amber, 0.06),
              borderRadius: RADIUS.lg,
              border: `1px solid ${hexToRgba(ACCENT.amber, 0.15)}`,
              borderLeft: `3px solid ${ACCENT.amber}`,
            }}
          >
            <h2
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: TEXT.primary,
                marginBottom: 12,
              }}
            >
              Ethical Constraint
            </h2>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
              Any AI application of TEG-Blue must respect the pattern-aware architecture:{" "}
              <strong style={{ color: TEXT.primary }}>
                the system assumes many difficult behaviors started as Protection survival responses.
              </strong>{" "}
              AI systems must not use this framework to shame, profile, or exploit.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: 32,
            background: hexToRgba(SPECTRUM.blue, 0.06),
            borderRadius: RADIUS.lg,
            border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.15)}`,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            Build With Us
          </h2>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              marginBottom: 24,
              maxWidth: 560,
              margin: "0 auto 24px",
              lineHeight: 1.7,
            }}
          >
            TEG-Blue is the first complete emotional technology system — open research backed by
            open research. The structured data, validation methodology, and framework
            documentation are available for researchers ready to test these questions.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/frameworks-map"
              style={{
                padding: "12px 24px",
                background: MAIN_ORG.accent,
                color: "#fff",
                borderRadius: RADIUS.md,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Access the Framework →
            </Link>
            <Link
              href="/collaborate"
              style={{
                padding: "12px 24px",
                background: "transparent",
                color: TEXT.secondary,
                border: `1px solid ${BORDER.default}`,
                borderRadius: RADIUS.md,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Research Collaboration
            </Link>
            <Link
              href="/publications/validation-study"
              style={{
                padding: "12px 24px",
                background: "transparent",
                color: TEXT.secondary,
                border: `1px solid ${BORDER.default}`,
                borderRadius: RADIUS.md,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              View Validation Study
            </Link>
            <a
              href="https://github.com/emotionalblueprint/ai-safety"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 24px",
                background: "transparent",
                color: TEXT.secondary,
                border: `1px solid ${BORDER.default}`,
                borderRadius: RADIUS.md,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://teg-blue.com/emotional-tools"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 24px",
                background: "transparent",
                color: TEXT.secondary,
                border: `1px solid ${BORDER.default}`,
                borderRadius: RADIUS.md,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Emotional Tools (teg-blue.com)
            </a>
          </div>
        </section>

      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "AI Safety", url: "/ai-safety" },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAISafetyJsonLd()) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "AI Safety Applications | TEG-Blue Research",
              url: "https://teg-blue.org/ai-safety",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ─── COMPONENTS ─────────────────────────────────────────

function SectionHeading({ title }) {
  return (
    <h2
      style={{
        fontSize: 18,
        fontWeight: 700,
        color: PAGE_COLOR,
        letterSpacing: "-0.01em",
        marginBottom: 16,
        paddingBottom: 8,
        borderBottom: `2px solid ${hexToRgba(PAGE_COLOR, 0.2)}`,
      }}
    >
      {title}
    </h2>
  );
}

function StateCard({ state, color, reading }) {
  return (
    <div
      style={{
        background: BG.surface,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
        borderTop: `3px solid ${color}`,
        padding: 16,
      }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: color,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontFamily: FONT.mono,
          marginBottom: 8,
        }}
      >
        {state}
      </p>
      <p style={{ fontSize: 13, color: TEXT.secondary, margin: 0, lineHeight: 1.6 }}>
        {reading}
      </p>
    </div>
  );
}

function GradientScale({ label, levels }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: TEXT.muted,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          fontFamily: FONT.mono,
          marginBottom: 10,
        }}
      >
        {label}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(45%, 140px), 1fr))",
          gap: 2,
          borderRadius: RADIUS.md,
          overflow: "hidden",
        }}
      >
        {levels.map((level, i) => (
          <div
            key={i}
            style={{
              background: hexToRgba(level.color, 0.08),
              padding: "12px 10px",
              borderTop: `2px solid ${level.color}`,
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: level.color,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                fontFamily: FONT.mono,
                marginBottom: 6,
              }}
            >
              {level.name}
            </p>
            <p style={{ fontSize: 11, color: TEXT.muted, margin: 0, lineHeight: 1.5 }}>
              {level.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MoralStateCard({ state, color, description }) {
  return (
    <div
      style={{
        background: BG.surface,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
        padding: 16,
      }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: color,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontFamily: FONT.mono,
          marginBottom: 8,
        }}
      >
        {state}
      </p>
      <p style={{ fontSize: 13, color: TEXT.secondary, margin: 0, lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  );
}

function BarChart({ label, value, color, maxHeight }) {
  const height = (value / 50) * maxHeight;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 80 }}>
      <div
        style={{
          width: 48,
          height: height,
          background: `linear-gradient(180deg, ${hexToRgba(color, 0.8)}, ${hexToRgba(color, 0.4)})`,
          borderRadius: "4px 4px 0 0",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: 8,
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#fff",
            fontFamily: FONT.mono,
          }}
        >
          {value}%
        </span>
      </div>
      <p
        style={{
          fontSize: 11,
          color: TEXT.muted,
          marginTop: 8,
          textAlign: "center",
          fontFamily: FONT.mono,
        }}
      >
        {label}
      </p>
    </div>
  );
}

function QuestionCard({ number, title, description }) {
  return (
    <div
      style={{
        background: BG.card,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
        padding: 16,
        display: "flex",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          background: hexToRgba(SPECTRUM.azure, 0.1),
          borderRadius: RADIUS.sm,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: SPECTRUM.azure,
            fontFamily: FONT.mono,
          }}
        >
          {number}
        </span>
      </div>
      <div>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
            marginBottom: 6,
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function EMLUDomain({ number, title, description }) {
  return (
    <div
      style={{
        background: BG.surface,
        borderRadius: RADIUS.sm,
        border: `1px solid ${BORDER.default}`,
        padding: "10px 14px",
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: SPECTRUM.cobalt,
          fontFamily: FONT.mono,
          minWidth: 16,
        }}
      >
        {number}.
      </span>
      <div>
        <span style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary }}>{title}</span>
        <span style={{ fontSize: 13, color: TEXT.muted }}> — {description}</span>
      </div>
    </div>
  );
}
