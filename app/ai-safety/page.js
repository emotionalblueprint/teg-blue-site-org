import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RADIUS } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import { generateAISafetyJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "AI Safety Applications — TEG-Blue Research Platform",
  description: "How TEG-Blue provides structured, computationally legible emotional intelligence infrastructure for safer AI systems. Gradient frameworks for AI alignment, safety, and human-AI interaction.",
  alternates: {
    canonical: "https://teg-blue.org/ai-safety",
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

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Hero Section */}
        <header style={{ marginBottom: 64 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: SPECTRUM.azure,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: FONT.mono,
              marginBottom: 12,
            }}
          >
            AI Safety Application
          </p>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 16,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Emotional Intelligence Infrastructure for{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${STATE.connection}, ${SPECTRUM.azure})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Safer AI
            </span>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
            }}
          >
            AI safety systems classify human emotion as safe or unsafe. Reality operates on gradients.
            TEG-Blue provides the structured, computationally legible framework to bridge the gap.
          </p>
        </header>

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
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
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
                  state="Crisis"
                  color={STATE.domination}
                  reading="Active danger. Dissociation from consequences. Intervention needed."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Problem */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="01" title="Binary Classification Fails Human Complexity" />

          <div style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 16 }}>
              Current AI safety systems operate on a fundamental binary: content is safe or unsafe,
              behavior is acceptable or harmful, a user is fine or at risk. Human emotional reality
              doesn't work this way.
            </p>
            <p style={{ marginBottom: 16 }}>
              Psychology has understood the nuance for decades. Empathy exists on a gradient.
              Accountability has multiple modes. Moral reasoning shifts with nervous system state.{" "}
              <strong style={{ color: TEXT.primary }}>
                The problem isn't that we lack the knowledge — it's that no one has translated it
                into a language AI systems can read.
              </strong>
            </p>
            <p>
              This translation gap has consequences. AI systems trained on human-generated text inherit
              every mode of human expression — including strategic manipulation, performed empathy, and
              weaponized accountability — without the ability to distinguish these patterns from genuine connection.
            </p>
          </div>
        </section>

        {/* Section 2: Gradient Scales */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="02" title="Nuance AI Systems Can Actually Use" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            TEG-Blue replaces binary classification with structured gradients. Each scale maps a
            dimension of human behavior from healthy to harmful, with clear markers at every point —
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
              { name: "Performed", color: STATE.protection, desc: "Says the right things without shifting behavior" },
              { name: "Absent", color: STATE.control, desc: "Avoids responsibility entirely" },
              { name: "Protective", color: STATE.domination, desc: 'Uses "accountability" as shield against criticism' },
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

          <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7 }}>
            This mapping is essential for AI systems because{" "}
            <strong style={{ color: TEXT.secondary }}>
              training data is generated by humans in every one of these states.
            </strong>{" "}
            A model that can't distinguish which state produced a text will learn strategic manipulation
            and genuine empathy as equally valid patterns.
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

        {/* Section 5: Individual to Systemic */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="05" title="How Harmful Patterns Scale" />

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

        {/* Section 6: AI-Native Architecture */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="06" title="Built for Machines to Read" />

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
    { "level": 1, "label": "genuine",    "markers": [...] },
    { "level": 2, "label": "selective",  "markers": [...] },
    { "level": 3, "label": "performed",  "markers": [...] },
    { "level": 4, "label": "weaponized", "markers": [...] }
  ],
  "sourceTheories": 139,
  "version": "git-controlled"
}`}</code>
            </pre>
          </div>

          <ul style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            <li style={{ marginBottom: 6 }}>JSON-LD structured data on every page (Schema.org)</li>
            <li style={{ marginBottom: 6 }}>JSON content files — git-versioned, non-binary</li>
            <li style={{ marginBottom: 6 }}>Consistent terminology across 139+ integrated source theories</li>
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
            This isn't a PDF to interpret. It's emotional intelligence infrastructure designed to be consumed computationally.
          </p>
        </section>

        {/* Section 7: Open Research Questions */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="07" title="What We're Inviting You to Test" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            TEG-Blue doesn't claim to have solved AI safety. It claims to have mapped territory that
            AI safety has been navigating without a map. These questions are explicit invitations to
            the research community:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <QuestionCard
              number="Q1"
              title="Computational Complexity Markers"
              description="Can the markers that predict healthy outcomes — self-awareness, perspective-taking, emotional differentiation — be standardized as computational measures applicable to natural language?"
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
            TEG-Blue is an open research framework backed by an international consortium.
            The structured data, validation methodology, and framework documentation are
            available for researchers ready to test these questions.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/theoretical-foundations"
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
          </div>
        </section>

        {/* Footer note */}
        <footer style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

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
          gridTemplateColumns: "repeat(4, 1fr)",
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
