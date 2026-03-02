import Link from "next/link";
import {
  BG,
  TEXT,
  BORDER,
  FONT,
  SPACING,
  SPECTRUM,
  hexToRgba,
  RADIUS,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, SectionSpectrumBar } from "@/src/components";
import { CONCEPTS, CONCEPT_COLORS } from "@/src/data/concepts";

export const metadata = {
  title: "Foundational Concepts — TEG-Blue Open Knowledge",
  description:
    "Thirteen foundational concepts that introduce the TEG-Blue framework system. Each reframes something you already experience. Together, they provide the conceptual foundation for the complete system.",
  keywords: [
    "TEG-Blue",
    "foundational concepts",
    "emotional technology",
    "nervous system",
    "inner compass",
    "emotional distortion",
    "false coherence",
  ],
  alternates: { canonical: "https://teg-blue.org/concepts" },
  openGraph: {
    title: "Foundational Concepts — TEG-Blue Open Knowledge",
    description:
      "Thirteen foundational concepts, drawn from across the full framework system, written for anyone. Each reframes something you already experience.",
    url: "https://teg-blue.org/concepts",
    siteName: "TEG-Blue Open Knowledge",
    type: "website",
  },
};

export default function ConceptsHubPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/concepts" />
      <SectionSpectrumBar section="concepts" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 56 }}>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 20,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Foundational Concepts
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
            Entry points into the system. They give immediate recognition,
            introduce the core architecture, and model the non-pathologising
            stance that runs through the entire system.
          </p>
        </header>

        {/* All Concepts */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            marginBottom: 64,
            borderRadius: RADIUS.lg,
            overflow: "hidden",
          }}
        >
          {CONCEPTS.map((concept, i) => (
            <ConceptRow
              key={concept.id}
              concept={concept}
              conceptColor={CONCEPT_COLORS[concept.number - 1]}
              isLast={i === CONCEPTS.length - 1}
            />
          ))}
        </div>

        {/* Go Deeper */}
        <section
          style={{
            padding: 28,
            background: hexToRgba(SPECTRUM.cobalt, 0.08),
            borderRadius: RADIUS.lg,
            border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
            marginBottom: 40,
          }}
        >
          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            Go Deeper
          </h3>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            The concepts name the patterns. The models make them visible. The
            frameworks explain where they come from and where they lead.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              href="/models"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "12px 22px",
                background: SPECTRUM.azure,
                color: TEXT.primary,
                borderRadius: RADIUS.md,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Models &rarr;
            </Link>
            <Link
              href="/frameworks-map"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "12px 22px",
                background: hexToRgba(SPECTRUM.cobalt, 0.1),
                color: SPECTRUM.cobalt,
                borderRadius: RADIUS.md,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
              }}
            >
              Frameworks &rarr;
            </Link>
            <Link
              href="/research-entry"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "12px 22px",
                background: "transparent",
                color: TEXT.secondary,
                borderRadius: RADIUS.md,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                border: `1px solid ${BORDER.default}`,
              }}
            >
              For Researchers &rarr;
            </Link>
          </div>
        </section>

        {/* Navigation footer */}
        <footer
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
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
            Home &rarr;
          </Link>
          <Link
            href="/models"
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
            Models &rarr;
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
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────

function ConceptRow({ concept, conceptColor, isLast }) {
  return (
    <Link
      href={`/concepts/${concept.slug}`}
      className="hover-card"
      style={{
        display: "block",
        padding: "12px 20px",
        background: BG.card,
        borderBottom: isLast ? "none" : `1px solid ${BORDER.default}`,
        borderRadius: isLast ? `0 0 ${RADIUS.lg}px ${RADIUS.lg}px` : 0,
        textDecoration: "none",
      }}
    >
      {/* Line 1: number pill + name + subtitle */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 10,
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            fontFamily: FONT.mono,
            color: conceptColor,
            background: hexToRgba(conceptColor, 0.12),
            padding: "2px 7px",
            borderRadius: 10,
            flexShrink: 0,
            letterSpacing: "0.02em",
          }}
        >
          {concept.number}
        </span>
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
            letterSpacing: "-0.01em",
          }}
        >
          {concept.name}
        </span>
        <span
          style={{
            fontSize: 13,
            color: TEXT.tertiary,
            flexShrink: 1,
            minWidth: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {concept.subtitle}
        </span>
      </div>

      {/* Line 2: key line with colored left border */}
      <div
        style={{
          borderLeft: `2px solid ${hexToRgba(conceptColor, 0.4)}`,
          paddingLeft: 12,
          marginLeft: 3,
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontStyle: "italic",
            color: hexToRgba(conceptColor, 0.85),
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {concept.keyLine}
        </p>
      </div>
    </Link>
  );
}
