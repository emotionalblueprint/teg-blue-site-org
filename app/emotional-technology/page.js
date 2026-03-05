import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, RESEARCHER, hexToRgba, RADIUS } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero } from "@/src/components";

export const metadata = {
  title: "What is Emotional Technology? — TEG-Blue",
  description: "Emotional technology refers to tools and systems that help measure, understand, and navigate human emotions — with the same clarity we expect from physical or digital technologies. TEG-Blue is the first complete emotional technology system.",
  keywords: [
    "emotional technology",
    "emotional intelligence tools",
    "emotional measurement",
    "emotional architecture",
    "emotional wiring",
    "nervous system regulation",
    "TEG-Blue"
  ],
  alternates: {
    canonical: "https://teg-blue.org/emotional-technology",
  },
};

// State colors from the Four-Mode Gradient
const STATE = {
  connection: "#14b8a6",  // Teal
  protection: "#eab308",  // Yellow
  control: "#f97316",     // Orange
  domination: "#ec4899",  // Pink
};

export default function EmotionalTechnologyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/emotional-technology" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `48px ${SPACING.pagePadding} 80px`,
        }}
      >
        <ResearcherHero
          badge="CONCEPT"
          title="What is Emotional Technology?"
          description="Tools and systems that help measure, understand, and navigate human emotions — with the same clarity we expect from physical or digital technologies."
        />

        {/* Featured Card — The Analogy */}
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

            <div style={{ padding: 28 }}>
              <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
                Like medical tools help diagnose illness, and digital tools organize information, emotional technology helps us:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 12,
                }}
              >
                <CapabilityMiniCard
                  color={STATE.connection}
                  title="Recognize"
                  desc="emotional states"
                />
                <CapabilityMiniCard
                  color={SPECTRUM.azure}
                  title="Predict"
                  desc="behavioral patterns"
                />
                <CapabilityMiniCard
                  color={SPECTRUM.cobalt}
                  title="Navigate"
                  desc="pathways out of distress"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Claim */}
        <section style={{ marginBottom: 56 }}>
          <div
            style={{
              padding: "28px 32px",
              background: hexToRgba(SPECTRUM.azure, 0.08),
              borderRadius: RADIUS.lg,
              borderLeft: `4px solid ${SPECTRUM.azure}`,
            }}
          >
            <p
              style={{
                fontSize: 18,
                color: TEXT.primary,
                fontWeight: 600,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              TEG-Blue is the first complete emotional technology system.
            </p>
            <p
              style={{
                fontSize: 15,
                color: TEXT.secondary,
                margin: "12px 0 0",
                lineHeight: 1.7,
              }}
            >
              It turns invisible emotional patterns into visible, structured, computationally legible tools — for healing, accountability, and emotional safety.
            </p>
          </div>
        </section>

        {/* Section 01: What It Does */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="01" title="What Emotional Technology Does" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            <CapabilityCard
              color={STATE.connection}
              title="Measurement & Recognition"
              items={[
                "Visual scales show position on gradients of empathy, control, accountability",
                "Emotional patterns become clear and trackable",
                "Abstract dynamics become concrete and usable",
              ]}
            />
            <CapabilityCard
              color={STATE.protection}
              title="Prediction & Prevention"
              items={[
                "Maps how emotional states shift and escalate",
                "Flags early warning signs before harm happens",
                "Reveals how self-protection can slide into harm",
              ]}
            />
            <CapabilityCard
              color={STATE.control}
              title="Navigation & Intervention"
              items={[
                "Provides steps back to safety, calm, and clarity",
                "Creates shared language for difficult dynamics",
                "Tools for de-escalation, repair, and regulation",
              ]}
            />
            <CapabilityCard
              color={STATE.domination}
              title="Pattern Breaking"
              items={[
                "Makes generational trauma patterns visible",
                "Explains how protective behaviors become harmful",
                "Interrupts cycles — with care, not shame",
              ]}
            />
          </div>
        </section>

        {/* Section 02: Relationship to Therapy */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="02" title="Doesn't Replace Therapy. Equips It." />

          <div style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 16 }}>
              Think of it like an <strong style={{ color: TEXT.primary }}>emotional thermometer</strong>.
            </p>
            <p style={{ marginBottom: 16 }}>
              If your body temperature is high, you go to the doctor. If your emotional state shows signs of distress — like fear, defense, or control — you can name it early, and bring that awareness into therapy.
            </p>
            <p style={{ marginBottom: 0 }}>
              This helps therapists go deeper, faster. It makes their work more effective, more accessible — and more emotionally precise.
            </p>
          </div>

          <div
            style={{
              marginTop: 24,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
            }}
          >
            <BenefitChip label="Instant emotional clarity" />
            <BenefitChip label="Shared language across settings" />
            <BenefitChip label="Prevention-first tools" />
            <BenefitChip label="Trauma-informed mapping" />
          </div>
        </section>

        {/* Section 03: Why This Name */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="03" title="Why 'Emotional Technology'?" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            We needed a term that didn't already carry the wrong assumptions:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            <ComparisonRow
              term="Emotional intelligence"
              issue="focuses on skills, not systems"
            />
            <ComparisonRow
              term="Mental health tools"
              issue="frames it as pathology"
            />
            <ComparisonRow
              term="SEL"
              issue="often stops short of trauma, power, and pattern mapping"
            />
          </div>

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT.primary }}>Emotional technology</strong> is a term for emotional tools that are practical, precise, and systemic. Because just like we don't expect people to intuitively know how to code or perform surgery — we shouldn't expect them to navigate complex emotional dynamics without tools.
          </p>
        </section>

        {/* Section 04: Key Vocabulary */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="04" title="Key Vocabulary" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            To build this field, we created precise language:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 12,
            }}
          >
            <VocabCard
              term="Emotional Architecture"
              definition="The structure of emotional patterns within people, families, and systems"
              color={STATE.connection}
            />
            <VocabCard
              term="Emotional Wiring"
              definition="How your nervous system learned to feel, respond, and protect"
              color={STATE.protection}
            />
            <VocabCard
              term="Emotional Miswiring"
              definition="Protective patterns that now create harm"
              color={STATE.control}
            />
            <VocabCard
              term="Emotional Infrastructure"
              definition="The larger systems that support — or fail to support — emotional safety"
              color={STATE.domination}
            />
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: 32,
            background: BG.card,
            borderRadius: RADIUS.lg,
            border: `1px solid ${BORDER.default}`,
            textAlign: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Top gradient stripe */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: `linear-gradient(90deg, ${STATE.connection}, ${STATE.protection}, ${STATE.control}, ${STATE.domination})`,
            }}
          />

          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            Explore the Framework
          </h2>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              marginBottom: 24,
              maxWidth: 500,
              margin: "0 auto 24px",
              lineHeight: 1.7,
            }}
          >
            See how emotional technology works in practice — from the two core models to the 12 explanatory frameworks.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/models"
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
              Core Models →
            </Link>
            <Link
              href="/frameworks-map"
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
              12 Frameworks
            </Link>
            <Link
              href="/ai-safety"
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
              AI Safety
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── COMPONENTS ─────────────────────────────────────────

function SectionHeader({ number, title }) {
  return (
    <div style={{ marginBottom: 20 }}>
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

function CapabilityMiniCard({ color, title, desc }) {
  return (
    <div
      style={{
        background: BG.surface,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
        borderTop: `3px solid ${color}`,
        padding: 16,
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "0 0 4px",
        }}
      >
        {title}
      </p>
      <p style={{ fontSize: 13, color: TEXT.muted, margin: 0 }}>
        {desc}
      </p>
    </div>
  );
}

function CapabilityCard({ color, title, items }) {
  return (
    <div
      style={{
        background: BG.card,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
        padding: 20,
      }}
    >
      <h3
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "0 0 12px",
        }}
      >
        {title}
      </h3>
      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13, color: TEXT.muted, lineHeight: 1.7 }}>
        {items.map((item, i) => (
          <li key={i} style={{ marginBottom: 6 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function BenefitChip({ label }) {
  return (
    <div
      style={{
        padding: "10px 14px",
        background: hexToRgba(STATE.connection, 0.1),
        borderRadius: RADIUS.sm,
        border: `1px solid ${hexToRgba(STATE.connection, 0.2)}`,
        fontSize: 13,
        fontWeight: 500,
        color: TEXT.secondary,
        textAlign: "center",
      }}
    >
      {label}
    </div>
  );
}

function ComparisonRow({ term, issue }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 8,
        padding: "8px 12px",
        background: BG.surface,
        borderRadius: RADIUS.sm,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <span style={{ fontSize: 13, fontWeight: 600, color: TEXT.secondary }}>"{term}"</span>
      <span style={{ fontSize: 13, color: TEXT.muted }}>— {issue}</span>
    </div>
  );
}

function VocabCard({ term, definition, color }) {
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
          fontSize: 14,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "0 0 6px",
        }}
      >
        {term}
      </p>
      <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
        {definition}
      </p>
    </div>
  );
}
