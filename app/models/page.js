import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RADIUS } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, SectionSpectrumBar } from "@/src/components";
import { MODELS } from "@/src/data/frameworks";


export const metadata = {
  title: "Models — TEG-Blue Research",
  description: "The two core models of TEG-Blue: The Inner Compass & Four-Mode Gradient (the instrument) and The Three Awareness Capacities (the calibration). Where theory becomes instrument.",
  keywords: ["TEG-Blue models", "inner compass", "three awareness capacities", "emotional technology models", "nervous system instrument", "calibration system"],
  alternates: { canonical: "https://teg-blue.org/models" },
  openGraph: {
    title: "Models — TEG-Blue Research",
    description: "The two core models of TEG-Blue: The Inner Compass (the instrument) and The Three Awareness Capacities (the calibration). Where theory becomes instrument.",
    url: "https://teg-blue.org/models",
    siteName: "TEG-Blue Research",
    type: "website",
  },
};

const SCIENTIFIC_FOUNDATIONS = [
  {
    modelId: "inner-compass",
    foundations: [
      "Polyvagal Theory (Porges)",
      "Approach/avoidance motivation (Elliot, Carver & Scheier)",
      "Broaden-and-build theory (Fredrickson)",
      "Window of tolerance (Siegel)",
      "Secure base theory (Bowlby)",
    ],
  },
  {
    modelId: "three-awareness-capacities",
    foundations: [
      "Attachment theory (Bowlby, Ainsworth)",
      "Polyvagal theory (Porges)",
      "Developmental neuroscience (Schore)",
      "Internal Family Systems (Schwartz)",
      "Relational neurobiology (Siegel)",
    ],
  },
];

export default function ModelsIndexPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/models" />
      <SectionSpectrumBar section="models" />
      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 16,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Two Models
          </h1>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
              marginBottom: 12,
            }}
          >
            The models are instruments. They answer: what is the nervous system
            doing right now, and what does that make available?
          </p>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
              marginBottom: 12,
            }}
          >
            They provide the visual-conceptual architecture that makes the
            nervous system&rsquo;s continuous safety/threat evaluation visible
            and usable. A single architecture for tracking where someone is on
            the gradient, which direction they&rsquo;re moving, and what
            capacity is available from that position.
          </p>
        </header>

        {/* The two models — side by side */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {MODELS.map((model) => (
            <Link
              key={model.id}
              href={model.url}
              style={{
                display: "block",
                padding: 24,
                background: BG.card,
                borderRadius: RADIUS.lg,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `4px solid ${SPECTRUM.azure}`,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: TEXT.tertiary,
                    fontFamily: FONT.mono,
                  }}
                >
                  {model.conceptCount} concepts
                </span>
              </div>
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: TEXT.primary,
                  margin: "0 0 8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {model.name}
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: TEXT.secondary,
                  lineHeight: 1.7,
                  margin: "0 0 12px",
                }}
              >
                {model.description}
              </p>
              <span
                style={{
                  fontSize: 13,
                  color: SPECTRUM.azure,
                  fontWeight: 500,
                }}
              >
                Read the full model &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* Scientific Foundations */}
        <section
          style={{
            padding: 24,
            background: hexToRgba(SPECTRUM.azure, 0.06),
            borderRadius: RADIUS.lg,
            border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
            marginBottom: 40,
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 8,
            }}
          >
            Scientific Foundations
          </h3>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            One describes what the compass does. The other describes what
            determines how it does it. They are inseparable in practice &mdash;
            and both build on established research traditions.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {SCIENTIFIC_FOUNDATIONS.map((sf) => {
              const model = MODELS.find((m) => m.id === sf.modelId);
              return (
                <div
                  key={sf.modelId}
                  style={{
                    padding: 16,
                    background: BG.card,
                    borderRadius: RADIUS.md,
                    border: `1px solid ${BORDER.default}`,
                  }}
                >
                  <h4
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: SPECTRUM.azure,
                      marginBottom: 10,
                    }}
                  >
                    {model?.name}
                  </h4>
                  <ul style={{ paddingLeft: 16, margin: 0 }}>
                    {sf.foundations.map((f, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: 13,
                          color: TEXT.secondary,
                          lineHeight: 1.6,
                          marginBottom: 4,
                        }}
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 16 }}>
            <Link
              href="/scientific-foundations"
              style={{
                fontSize: 13,
                color: SPECTRUM.azure,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Full scientific foundations &rarr;
            </Link>
          </div>
        </section>

        {/* Bridge to .com */}
        <section
          style={{
            padding: 24,
            background: BG.card,
            borderRadius: RADIUS.lg,
            border: `1px solid ${BORDER.default}`,
            marginBottom: 40,
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            From Models to Tools
          </h3>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            These models are the foundation for the interactive tools on
            teg-blue.com — including the Emotional Periodic Table, the Compass
            assessment, and the mapping system. The models describe the
            architecture. The tools make it usable.
          </p>
          <a
            href="https://teg-blue.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              background: SPECTRUM.azure,
              color: TEXT.primary,
              borderRadius: RADIUS.md,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Explore interactive tools on teg-blue.com &rarr;
          </a>
        </section>

        {/* Navigation */}
        <footer
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/concepts"
            className="hover-ghost"
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: TEXT.secondary,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Concepts &rarr;
          </Link>
          <Link
            href="/frameworks-map"
            className="hover-ghost"
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: TEXT.secondary,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Frameworks &rarr;
          </Link>
          <Link
            href="/research-entry"
            className="hover-ghost"
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: TEXT.secondary,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            For Researchers &rarr;
          </Link>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}
