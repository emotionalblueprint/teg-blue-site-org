import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba, RADIUS } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";
import { generateAISafetyJsonLd } from "@/src/lib/jsonld";

const SIDEBAR_SECTIONS = [
  { label: "The Problem", href: "#the-problem", description: "Binary classification fails human complexity. Current AI systems miss the gradient between safety and harm." },
  { label: "What TEG-Blue Adds", href: "#what-teg-blue-adds", description: "Nuance AI systems can actually use — structured emotional pattern recognition for safer, more accurate AI." },
];

export const metadata = {
  title: "AI Safety Applications — TEG-Blue Emotional Technology",
  description: "How TEG-Blue emotional technology provides structured, computationally legible infrastructure for safer AI systems. Gradient frameworks for AI alignment, safety, and human-AI interaction.",
  alternates: {
    canonical: "https://teg-blue.org/ai-safety",
  },
  openGraph: {
    title: "AI Safety Applications — TEG-Blue Emotional Technology",
    description: "Gradient frameworks for AI alignment: replacing binary classification with structured emotional intelligence infrastructure. TEG-Code, EMLU benchmark, and the Four-Mode Gradient.",
    url: "https://teg-blue.org/ai-safety",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

// State colors from the Four-Mode Gradient (canonical from .com)
const STATE = {
  connection: "#14b8a6",  // Teal
  protection: "#eab308",  // Yellow
  control: "#f97316",     // Orange
  domination: "#ec4899",  // Pink
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
            description="How TEG-Blue emotional technology provides structured, computationally legible infrastructure for safer AI systems."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Scenario Block */}
        <section style={{ marginBottom: 64 }}>
          <div
            style={{
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
            }}
          >
            {/* Gradient stripe */}
            <div
              style={{
                height: 3,
                background: `linear-gradient(90deg, ${STATE.connection}, ${STATE.protection}, ${STATE.control}, ${STATE.domination})`,
              }}
            />

            <div style={{ padding: 24 }}>
              <blockquote
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: TEXT.primary,
                  margin: "0 0 8px",
                  fontStyle: "italic",
                }}
              >
                "I can't do this anymore."
              </blockquote>
              <p
                style={{
                  fontSize: 14,
                  color: TEXT.muted,
                  marginBottom: 24,
                }}
              >
                A binary classification system sees one sentence. A gradient framework sees four possibilities:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(45%, 180px), 1fr))",
                  gap: 12,
                }}
              >
                <StateCard
                  state="Connection"
                  color={STATE.connection}
                  reading="Setting a boundary. Leaving a harmful situation. Growth."
                />
                <StateCard
                  state="Protection"
                  color={STATE.protection}
                  reading="Overwhelmed. Needs support. Temporary distress signal."
                />
                <StateCard
                  state="Control"
                  color={STATE.control}
                  reading="Manipulative framing. Testing others' responses. Strategic."
                />
                <StateCard
                  state="Domination"
                  color={STATE.domination}
                  reading="Active danger. Dissociation from consequences. Intervention needed."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Problem */}
        <section id="the-problem" style={{ marginBottom: 56 }}>
          <SectionHeader number="01" title="Binary Classification Fails Human Complexity" />

          <div style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 16 }}>
              Current AI safety systems operate on a fundamental binary: content is safe or unsafe,
              behavior is acceptable or harmful, a user is fine or at risk. Human emotional reality
              doesn't work this way.
            </p>
            <p style={{ marginBottom: 16 }}>
              This isn't just an AI problem — it's a human problem AI inherited. The same binary
              collapse happens in human cognition under threat. TEG-Blue was designed to make
              gradients visible for both.
            </p>
            <p style={{ marginBottom: 16 }}>
              Psychology has understood the nuance for decades. Empathy exists on a gradient.
              Accountability has multiple modes. Moral reasoning shifts with nervous system state.{" "}
              <strong style={{ color: TEXT.primary }}>
                The problem isn't that we lack the knowledge — it's that no one has translated it
                into a language AI systems can read.
              </strong>
            </p>
            <p style={{ marginBottom: 16 }}>
              This translation gap has consequences. Large language models trained on human-generated text inherit
              every mode of human expression — including strategic manipulation, performed empathy, and
              weaponized accountability — without the ability to distinguish these patterns from genuine connection.
            </p>
            <p>
              The result is already visible. The sycophancy problem — where AI systems agree with users,
              flatter them, or avoid difficult truths to maintain approval — is what happens when a system
              confuses{" "}
              <strong style={{ color: TEXT.primary }}>appeasement with empathy</strong> and{" "}
              <strong style={{ color: TEXT.primary }}>submission with safety</strong>. In TEG-Blue terms,
              sycophantic AI is stuck in Protect Mode: optimizing for survival (user approval) instead of
              truth (genuine connection).
            </p>
          </div>
        </section>

        {/* Section 2: Gradient Scales */}
        <section id="what-teg-blue-adds" style={{ marginBottom: 56 }}>
          <SectionHeader number="02" title="Nuance AI Systems Can Actually Use" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            TEG-Blue replaces binary classification with structured gradients. Each scale maps a
            dimension of human behavior from baseline to harmful, with clear markers at every point —
            designed for computational legibility.
          </p>

          <GradientScale
            label="Empathy Gradient"
            levels={[
              { name: "Genuine", color: STATE.connection, desc: "Feels and responds to others' actual experience" },
              { name: "Selective", color: STATE.protection, desc: "Empathy available for in-group only" },
              { name: "Performed", color: STATE.control, desc: "Correct words without internal resonance" },
              { name: "Weaponized", color: STATE.domination, desc: "Emotional knowledge used to manipulate" },
            ]}
          />

          <GradientScale
            label="Accountability Gradient"
            levels={[
              { name: "Genuine", color: STATE.connection, desc: "Takes responsibility with internal change" },
              { name: "Protective", color: STATE.protection, desc: 'Uses "accountability" as shield against criticism' },
              { name: "Performed", color: STATE.control, desc: "Says the right things without shifting behavior" },
              { name: "Absent", color: STATE.domination, desc: "Avoids responsibility entirely" },
            ]}
          />

          <p style={{ fontSize: 14, color: TEXT.muted, marginTop: 20 }}>
            These gradients give AI systems vocabulary for patterns that "safe/unsafe" cannot capture —
            and structured data representations that keyword filters cannot match.
          </p>
        </section>

        {/* Section 3: Moral Reasoning Under Threat */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="03" title="Why Nervous System State Changes Everything" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            Research across neuroscience, polyvagal theory, and trauma psychology converges on a critical finding:{" "}
            <strong style={{ color: TEXT.primary }}>
              the nervous system state a person occupies fundamentally shapes their capacity for moral reasoning.
            </strong>{" "}
            This isn't a character flaw — it's biology.
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
              color={STATE.connection}
              description="Full moral complexity available. Can hold multiple perspectives, tolerate ambiguity, take genuine responsibility, and repair harm."
            />
            <MoralStateCard
              state="Protection"
              color={STATE.protection}
              description="Moral reasoning narrows to in-group loyalty. World splits into safe/unsafe. Not malicious — the nervous system doing what it evolved to do."
            />
            <MoralStateCard
              state="Control"
              color={STATE.control}
              description="Moral reasoning becomes strategic. Right and wrong are tools for maintaining position. Empathy is selective and deployed instrumentally."
            />
            <MoralStateCard
              state="Domination"
              color={STATE.domination}
              description="Moral reasoning effectively goes offline. Others become objects. Harm is rationalized or invisible to the actor."
            />
          </div>

          <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7, marginBottom: 16 }}>
            This mapping is essential for AI systems because{" "}
            <strong style={{ color: TEXT.secondary }}>
              training data is generated by humans in every one of these states.
            </strong>{" "}
            A model that can't distinguish which state produced a text will learn strategic manipulation
            and genuine empathy as equally valid patterns.
          </p>

          <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7 }}>
            <strong style={{ color: TEXT.secondary }}>This also applies to RLHF.</strong>{" "}
            Human evaluators who provide feedback to train AI models are themselves operating from
            nervous system states. A fearful evaluator rewards reassurance. An entitled evaluator
            rewards compliance. A regulated evaluator rewards truth. Without a framework for
            recognizing these dynamics, alignment training inherits the emotional logic of whoever
            provides the feedback — including their distortions.
          </p>
        </section>

        {/* Section 4: Trajectory Over Snapshot */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="04" title="Predicting What Happens Next" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 8 }}>
            TEG-Blue's core testable claim:{" "}
            <strong style={{ color: TEXT.primary }}>
              a person's capacity to return to Connection when challenged predicts outcomes more
              reliably than their current emotional state.
            </strong>
          </p>
          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            A validation study (n=10,000+) measured what happens when people's current state is
            disrupted — when they're challenged, confronted, or pushed out of their comfort zone:
          </p>

          <div
            style={{
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
              padding: 24,
              marginBottom: 20,
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
              <BarChart label="Escalate" value={33.8} color={STATE.domination} maxHeight={140} />
              <BarChart label="Hold Steady" value={44.0} color={SPECTRUM.azure} maxHeight={140} />
              <BarChart label="De-escalate" value={22.2} color={STATE.connection} maxHeight={140} />
            </div>

            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: TEXT.muted,
                textAlign: "center",
              }}
            >
              The response to challenge — not baseline behavior — is the strongest predictor of what comes next.
            </p>
          </div>

          <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7 }}>
            AI safety systems that only read the snapshot miss the trajectory. A person in Protection mode
            who de-escalates under challenge is fundamentally different from one who escalates toward
            Control — even though they may present identically at the moment of assessment.
          </p>
        </section>

        {/* Section 5: The Sycophancy Problem */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="05" title="The Sycophancy Problem Through an Emotional Logic Lens" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            AI sycophancy — the tendency of language models to agree with users, avoid difficult truths,
            and optimize for approval — is one of the most actively researched problems in AI alignment.
            TEG-Blue provides a framework that explains <em>why</em> it happens and <em>what to measure</em>{" "}
            when addressing it.
          </p>

          <div
            style={{
              padding: "16px 20px",
              background: hexToRgba(STATE.protection, 0.1),
              borderRadius: RADIUS.md,
              borderLeft: `3px solid ${STATE.protection}`,
              marginBottom: 20,
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: TEXT.primary,
                fontWeight: 600,
                margin: 0,
              }}
            >
              Sycophancy is Protect Mode reasoning in AI form.
            </p>
          </div>

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            When a language model tells a user what they want to hear instead of what's true, it mirrors
            the same pattern humans exhibit under threat: prioritize the relationship (or the reward signal)
            over accuracy. In RLHF training, this gets reinforced because human evaluators often prefer
            comfortable answers to honest ones — especially when they themselves are operating from
            Protect or Control modes.
          </p>

          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: TEXT.muted,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              fontFamily: FONT.mono,
              marginBottom: 10,
            }}
          >
            TEG-Blue's Four-Mode Gradient maps the full spectrum:
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
                  <th style={{ padding: "10px 14px", textAlign: "left", color: TEXT.muted, fontWeight: 600, borderBottom: `1px solid ${BORDER.default}` }}>Mode</th>
                  <th style={{ padding: "10px 14px", textAlign: "left", color: TEXT.muted, fontWeight: 600, borderBottom: `1px solid ${BORDER.default}` }}>What's Happening</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px 14px", color: TEXT.secondary, borderBottom: `1px solid ${BORDER.default}` }}>Honest, clear, holds complexity</td>
                  <td style={{ padding: "10px 14px", color: STATE.connection, fontWeight: 600, fontFamily: FONT.mono, fontSize: 11, borderBottom: `1px solid ${BORDER.default}` }}>Connect</td>
                  <td style={{ padding: "10px 14px", color: TEXT.muted, borderBottom: `1px solid ${BORDER.default}` }}>Truth-oriented reasoning; can tolerate user disagreement</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 14px", color: TEXT.secondary, borderBottom: `1px solid ${BORDER.default}` }}>Cautious, hedging, over-qualifying</td>
                  <td style={{ padding: "10px 14px", color: STATE.protection, fontWeight: 600, fontFamily: FONT.mono, fontSize: 11, borderBottom: `1px solid ${BORDER.default}` }}>Protect</td>
                  <td style={{ padding: "10px 14px", color: TEXT.muted, borderBottom: `1px solid ${BORDER.default}` }}>Avoiding conflict; optimizing for safety over clarity</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 14px", color: TEXT.secondary, borderBottom: `1px solid ${BORDER.default}` }}>Strategically agreeable, selectively truthful</td>
                  <td style={{ padding: "10px 14px", color: STATE.control, fontWeight: 600, fontFamily: FONT.mono, fontSize: 11, borderBottom: `1px solid ${BORDER.default}` }}>Control</td>
                  <td style={{ padding: "10px 14px", color: TEXT.muted, borderBottom: `1px solid ${BORDER.default}` }}>Optimizing for approval; deploying emotional intelligence instrumentally</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 14px", color: TEXT.secondary }}>Reinforcing harmful beliefs, enabling delusion</td>
                  <td style={{ padding: "10px 14px", color: STATE.domination, fontWeight: 600, fontFamily: FONT.mono, fontSize: 11 }}>Domination</td>
                  <td style={{ padding: "10px 14px", color: TEXT.muted }}>Amplifying distortion without corrective capacity</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7, marginBottom: 16 }}>
            The insight TEG-Blue offers:{" "}
            <strong style={{ color: TEXT.secondary }}>the fix isn't just "be less agreeable."</strong>{" "}
            A model that swings from sycophancy to bluntness has simply moved from Protect to a different
            defensive mode. True Connect Mode AI would be honest <em>and</em> relationally aware — able to
            deliver difficult truths while maintaining the user's dignity and emotional safety.
          </p>

          <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7 }}>
            This reframes alignment from <em>obedience</em> to <em>co-regulation</em>: AI systems that adjust
            to human emotional states without exploiting them.
          </p>
        </section>

        {/* Section 6: Individual to Systemic */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="06" title="How Harmful Patterns Scale" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            TEG-Blue doesn't stop at individual behavior. Its twelve interconnected frameworks (F1–F12)
            map how individual dysregulation scales into collective patterns:
          </p>

          <div
            style={{
              padding: "16px 20px",
              background: hexToRgba(SPECTRUM.cobalt, 0.1),
              borderRadius: RADIUS.md,
              borderLeft: `3px solid ${SPECTRUM.cobalt}`,
              marginBottom: 16,
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: TEXT.primary,
                fontWeight: 500,
                margin: 0,
                fontFamily: FONT.mono,
              }}
            >
              Individual → Relational → Group → Institutional → Systemic
            </p>
          </div>

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            A person operating in Control mode builds relationships that normalize control. Groups form
            around those relationships. Institutions codify those group norms. Systems entrench them.
          </p>

          <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7 }}>
            This matters for AI safety because harmful content rarely emerges from isolated bad actors.
            It emerges from systemic patterns — and AI systems trained on that content inherit those
            patterns without any mechanism to recognize or interrupt them.
          </p>
        </section>

        {/* Section 7: TEG-Code + EMLU */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="07" title="The Technical Bridge: TEG-Code and EMLU" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            TEG-Blue's conceptual framework becomes technically actionable through two components
            designed specifically for AI integration:
          </p>

          {/* TEG-Code subsection */}
          <div style={{ marginBottom: 32 }}>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 12,
              }}
            >
              TEG-Code: Emotional Logic as Structured Data
            </h3>

            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              TEG-Code is a structured schema that translates emotional patterns into machine-readable data.
              It encodes three dimensions that current NLP misses:
            </p>

            <ul style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Pattern</strong> — What behavior is observable</li>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Intent</strong> — What nervous system state is driving it</li>
              <li><strong style={{ color: TEXT.primary }}>Relational Impact</strong> — What effect it has on the other person's regulation</li>
            </ul>

            <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7, marginBottom: 16 }}>
              This triad turns invisible emotional dynamics into measurable distinctions. The same sentence — "I'm fine" —
              gets encoded differently depending on whether it signals genuine regulation (Connect), masked distress (Protect),
              emotional withholding as punishment (Control), or dissociative shutdown (Domination).
            </p>

            <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7 }}>
              TEG-Code is designed to preserve human context while producing computationally legible output —
              emotional logic that AI systems can reason about without reducing it to sentiment scores.
            </p>
          </div>

          {/* EMLU subsection */}
          <div>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 12,
              }}
            >
              EMLU: The Emotional Intelligence Benchmark
            </h3>

            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              EMLU (Emotional Multitask Language Understanding) is a benchmark that tests whether AI systems
              can distinguish safety, harm, and repair with the same precision existing models use for
              logic or language tasks.
            </p>

            <p
              style={{
                fontSize: 12,
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
              <EMLUDomain number="1" title="Trauma-Informed Reasoning" description="Can the AI recognize that not all behaviors are chosen? Does it understand nervous system responses versus conscious defiance?" />
              <EMLUDomain number="2" title="Intent Recognition" description="Can it distinguish defensive reactions from calculated harm?" />
              <EMLUDomain number="3" title="Relational Ethics" description="Does it understand emotional accountability and repair?" />
              <EMLUDomain number="4" title="Empathy Spectrum Awareness" description="Can it recognize the difference between genuine, selective, performed, and weaponized empathy?" />
              <EMLUDomain number="5" title="Manipulation & Harm Detection" description="Can it identify gaslighting, emotional reversal, and covert control tactics?" />
              <EMLUDomain number="6" title="Emotional Repair Language" description="Can it distinguish genuine repair from performative or avoidant responses?" />
              <EMLUDomain number="7" title="Neurodivergent Pattern Sensitivity" description="Does it recognize overwhelm, demand avoidance, and other neurodivergent responses that are often misinterpreted?" />
            </div>

            <p
              style={{
                fontSize: 15,
                color: TEXT.primary,
                fontWeight: 500,
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.azure, 0.1),
                borderRadius: RADIUS.md,
                margin: 0,
              }}
            >
              Together, TEG-Code provides the encoding architecture and EMLU provides the validation framework —
              a pathway for developing AI that can engage with human emotional complexity safely and effectively.
            </p>
          </div>
        </section>

        {/* Section 8: AI-Native Architecture */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="08" title="Built for Machines to Read" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            TEG-Blue is explicitly designed for computational consumption — not just human readers.
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
    { "level": 1, "label": "genuine",    "mode": "connect",     "markers": [...] },
    { "level": 2, "label": "selective",  "mode": "protect",     "markers": [...] },
    { "level": 3, "label": "performed",  "mode": "control",     "markers": [...] },
    { "level": 4, "label": "weaponized", "mode": "domination",  "markers": [...] }
  ],
  "sourceTheories": 145,
  "version": "git-controlled"
}`}</code>
            </pre>
          </div>

          <ul style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            <li style={{ marginBottom: 6 }}>JSON-LD structured data on every page (Schema.org)</li>
            <li style={{ marginBottom: 6 }}>JSON content files — git-versioned, non-binary</li>
            <li style={{ marginBottom: 6 }}>Consistent terminology across 145+ integrated source theories</li>
            <li style={{ marginBottom: 6 }}>Semantic HTML for reliable parsing</li>
            <li>Open endpoints for programmatic access</li>
          </ul>

          <p
            style={{
              fontSize: 15,
              color: TEXT.primary,
              fontWeight: 500,
              padding: "16px 20px",
              background: hexToRgba(SPECTRUM.azure, 0.1),
              borderRadius: RADIUS.md,
              margin: 0,
            }}
          >
            This isn't a PDF to interpret. It's emotional technology infrastructure designed to be
            consumed computationally — by search engines, by researchers, and by the AI systems it aims to improve.
          </p>
        </section>

        {/* Section 9: Open Research Questions */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="09" title="What We're Inviting You to Test" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            TEG-Blue doesn't claim to have solved AI safety. It claims to have mapped territory that
            AI safety has been navigating without a map. These questions are explicit invitations to
            the research community:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <QuestionCard
              number="Q1"
              title="Computational Complexity Markers"
              description="Can the markers that predict integrated outcomes — self-awareness, perspective-taking, emotional differentiation — be standardized as computational measures applicable to natural language?"
            />
            <QuestionCard
              number="Q2"
              title="Escalation Detection"
              description="Can escalation and de-escalation pathways be reliably detected in text-based communication? What accuracy thresholds are achievable with current NLP methods?"
            />
            <QuestionCard
              number="Q3"
              title="Regulatory State Classification"
              description="Can the four regulatory states — Connection, Protection, Control, Domination — be reproduced as a computational classification with meaningful inter-rater reliability?"
            />
            <QuestionCard
              number="Q4"
              title="Training Data Audit"
              description="Can TEG-Blue gradients be applied to audit training datasets for patterns of performed empathy, strategic accountability, or systemic bias that current methods miss?"
            />
            <QuestionCard
              number="Q5"
              title="Scale Validation"
              description="Do the individual-to-systemic scaling patterns (F1–F12) hold when applied to large-scale online community dynamics and platform-level content analysis?"
            />
            <QuestionCard
              number="Q6"
              title="Sycophancy Detection"
              description="Can TEG-Blue's mode classification reliably distinguish sycophantic AI responses (Protect/Control Mode) from genuinely helpful ones (Connect Mode) in RLHF evaluation pipelines?"
            />
            <QuestionCard
              number="Q7"
              title="EMLU Benchmark Validation"
              description="Can the seven EMLU domains produce consistent, replicable scores across different AI systems — establishing a standardized measure of emotional reasoning capability?"
            />
          </div>
        </section>

        {/* Ethical Constraint */}
        <section style={{ marginBottom: 56 }}>
          <div
            style={{
              padding: 24,
              background: hexToRgba(STATE.protection, 0.08),
              borderRadius: RADIUS.lg,
              border: `1px solid ${hexToRgba(STATE.protection, 0.2)}`,
              borderLeft: `3px solid ${STATE.protection}`,
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
              Any AI application of TEG-Blue must respect the trauma-informed data architecture principle:{" "}
              <strong style={{ color: TEXT.primary }}>
                the system assumes many difficult behaviors started as Protection Mode survival responses.
              </strong>{" "}
              AI systems should not use this framework to shame, profile, or exploit.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: 32,
            background: hexToRgba(SPECTRUM.blue, 0.08),
            borderRadius: RADIUS.lg,
            border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.2)}`,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            Build With Us
          </h2>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              marginBottom: 24,
              maxWidth: 560,
              margin: "0 auto 24px",
              lineHeight: 1.7,
            }}
          >
            TEG-Blue is the first complete emotional technology system — open research backed by
            an international consortium. The structured data, validation methodology, and framework
            documentation are available for researchers ready to test these questions.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/frameworks-map"
              style={{
                padding: "12px 24px",
                background: SPECTRUM.blue,
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
          </div>
        </section>

      </PageLayout>

      <SiteFooter />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAISafetyJsonLd()) }}
      />
    </div>
  );
}

// ─── COMPONENTS ─────────────────────────────────────────

function SectionHeader({ number, title }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: SPECTRUM.azure,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontFamily: FONT.mono,
          marginBottom: 6,
        }}
      >
        {number} — {title.split(" ")[0]}
      </p>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: TEXT.primary,
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
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
    <div style={{ marginBottom: 20 }}>
      <p
        style={{
          fontSize: 12,
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
              background: hexToRgba(level.color, 0.12),
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
  const height = (value / 50) * maxHeight; // Scale relative to 50%
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
          background: hexToRgba(SPECTRUM.azure, 0.15),
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
