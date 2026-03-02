import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RADIUS } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
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
            Foundation Layer
          </p>
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
            Models
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
            A model is not a framework. The frameworks explain <em>why</em> — the
            theoretical architecture, the research foundations, the mechanisms.
            The models provide <em>what</em> — the visual-conceptual structures
            that practitioners, researchers, and individuals actually use.
          </p>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
            }}
          >
            TEG-Blue has two core models. They are inseparable in practice —
            one describes what the compass does, the other describes what
            determines how it does it.
          </p>
        </header>

        {/* The two models */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
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
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: FONT.mono,
                    color: SPECTRUM.azure,
                    background: hexToRgba(SPECTRUM.azure, 0.12),
                    padding: "3px 8px",
                    borderRadius: 4,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {model.subtitle}
                </span>
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

        {/* The relationship */}
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
              marginBottom: 12,
            }}
          >
            The Relationship
          </h3>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 12,
            }}
          >
            One describes what the compass does. The other describes what
            determines how it does it. They are inseparable in practice.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            A person's compass position (Inner Compass model) and their capacity
            configuration (Three Awareness Capacities model) are two dimensions
            of the same reality. The configuration explains <em>why</em> the
            compass is where it is. The compass explains <em>what</em> the
            configuration produces. Together, they provide a complete assessment:
            where is the needle, what configuration is holding it there, and what
            would need to develop for it to move?
          </p>
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
            href="/frameworks-map"
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
            All Frameworks &rarr;
          </Link>
          <Link
            href="/foundations"
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
            System Overview &rarr;
          </Link>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}
