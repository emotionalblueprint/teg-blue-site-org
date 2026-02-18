import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RADIUS } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

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
          padding: "48px 24px 80px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 48 }}>
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
            Core Concept
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
            What is Emotional Technology?
          </h1>
          <p
            style={{
              fontSize: 17,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
            }}
          >
            <strong style={{ color: TEXT.primary }}>Emotional technology</strong> refers to tools and systems that help you measure, understand, and navigate human emotions — with the same clarity we expect from physical or digital technologies.
          </p>
        </header>

        {/* Analogy Section */}
        <section style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            Like medical tools help diagnose illness, and digital tools organize information, emotional technology helps us:
          </p>
          <ul style={{ paddingLeft: 24, fontSize: 15, color: TEXT.secondary, lineHeight: 2 }}>
            <li><strong style={{ color: TEXT.primary }}>Recognize</strong> emotional states</li>
            <li><strong style={{ color: TEXT.primary }}>Predict</strong> behavioral patterns</li>
            <li><strong style={{ color: TEXT.primary }}>Navigate</strong> safe pathways out of distress</li>
          </ul>
        </section>

        {/* TEG-Blue Claim */}
        <section style={{ marginBottom: 48 }}>
          <div
            style={{
              padding: "24px",
              background: hexToRgba(SPECTRUM.azure, 0.08),
              borderRadius: RADIUS.lg,
              borderLeft: `3px solid ${SPECTRUM.azure}`,
            }}
          >
            <p
              style={{
                fontSize: 17,
                color: TEXT.primary,
                fontWeight: 500,
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              TEG-Blue is the first complete emotional technology system. It turns invisible emotional patterns into visible, structured, computationally legible tools — for healing, accountability, and emotional safety.
            </p>
          </div>
        </section>

        {/* What It Does */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 20,
            }}
          >
            What Emotional Technology Does
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <CapabilityCard
              number="1"
              title="Measurement & Recognition"
              items={[
                "Visual scales show where someone is on gradients of empathy, control, or accountability",
                "Emotional patterns become clear and trackable",
                "Abstract dynamics become concrete, visible, and usable",
              ]}
            />
            <CapabilityCard
              number="2"
              title="Prediction & Prevention"
              items={[
                "Maps how emotional states shift and escalate",
                "Flags early warning signs before harm happens",
                "Reveals how self-protection can slide into harm",
              ]}
            />
            <CapabilityCard
              number="3"
              title="Navigation & Intervention"
              items={[
                "Provides steps back to safety, calm, and clarity",
                "Creates shared language for difficult emotional dynamics",
                "Gives tools for de-escalation, repair, and regulation",
              ]}
            />
            <CapabilityCard
              number="4"
              title="Pattern Breaking"
              items={[
                "Makes generational trauma patterns visible",
                "Explains how protective behaviors become harmful",
                "Offers tools to interrupt cycles — with care, not shame",
              ]}
            />
          </div>
        </section>

        {/* Relationship to Therapy */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 16,
            }}
          >
            Emotional Technology Doesn't Replace Therapy. It Equips It.
          </h2>
          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            Think of it like an emotional thermometer.
          </p>
          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            If your body temperature is high, you go to the doctor. If your emotional state shows signs of distress — like fear, defense, or control — you can name it early, and bring that awareness into therapy.
          </p>
          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8 }}>
            This helps therapists go deeper, faster. It makes their work more effective, more accessible — and more emotionally precise.
          </p>
        </section>

        {/* Why This Name */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 16,
            }}
          >
            Why "Emotional Technology"?
          </h2>
          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            We needed a term that didn't already carry the wrong assumptions:
          </p>
          <ul style={{ paddingLeft: 24, fontSize: 15, color: TEXT.muted, lineHeight: 2, marginBottom: 16 }}>
            <li><strong style={{ color: TEXT.secondary }}>"Emotional intelligence"</strong> — focuses on skills, not systems</li>
            <li><strong style={{ color: TEXT.secondary }}>"Mental health tools"</strong> — frames it as pathology</li>
            <li><strong style={{ color: TEXT.secondary }}>"SEL"</strong> — often stops short of trauma, power, and pattern mapping</li>
          </ul>
          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT.primary }}>Emotional technology</strong> is a term for emotional tools that are practical, precise, and systemic. Because just like we don't expect people to intuitively know how to code or perform surgery — we shouldn't expect them to navigate complex emotional dynamics without tools.
          </p>
        </section>

        {/* Key Vocabulary */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 20,
            }}
          >
            Key Vocabulary
          </h2>
          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            To build this field, we created precise language:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <VocabCard
              term="Emotional Architecture"
              definition="The structure of emotional patterns within people, families, and systems"
            />
            <VocabCard
              term="Emotional Wiring"
              definition="How your nervous system learned to feel, respond, and protect"
            />
            <VocabCard
              term="Emotional Miswiring"
              definition="Protective patterns that now create harm"
            />
            <VocabCard
              term="Emotional Infrastructure"
              definition="The larger systems that support — or fail to support — emotional safety"
            />
          </div>
        </section>

        {/* CTA */}
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
              fontSize: 20,
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
            See how emotional technology works in practice — from the Four-Mode Gradient to the 12 explanatory frameworks.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/four-mode-gradient"
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
              Four-Mode Gradient →
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
              AI Safety Application
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── COMPONENTS ─────────────────────────────────────────

function CapabilityCard({ number, title, items }) {
  return (
    <div
      style={{
        background: BG.card,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
        padding: 20,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <span
          style={{
            width: 28,
            height: 28,
            background: hexToRgba(SPECTRUM.azure, 0.15),
            borderRadius: RADIUS.sm,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 700,
            color: SPECTRUM.azure,
            fontFamily: FONT.mono,
          }}
        >
          {number}
        </span>
        <h3
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: TEXT.primary,
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
      <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14, color: TEXT.muted, lineHeight: 1.8 }}>
        {items.map((item, i) => (
          <li key={i} style={{ marginBottom: 4 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function VocabCard({ term, definition }) {
  return (
    <div
      style={{
        background: BG.surface,
        borderRadius: RADIUS.sm,
        border: `1px solid ${BORDER.default}`,
        padding: "14px 18px",
      }}
    >
      <p style={{ margin: 0 }}>
        <strong style={{ color: TEXT.primary, fontSize: 14 }}>{term}</strong>
        <span style={{ color: TEXT.muted, fontSize: 14 }}> — {definition}</span>
      </p>
    </div>
  );
}
