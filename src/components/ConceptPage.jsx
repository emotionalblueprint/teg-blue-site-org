"use client";

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
  PHASE,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, SectionSpectrumBar } from "@/src/components";
import { getNextConcept, getPrevConcept, GROUP_COLORS, CONCEPTS, CONCEPT_COLORS, getConcept } from "@/src/data/concepts";
import { getFramework, getModel, getPhaseColor } from "@/src/data/frameworks";

/**
 * ConceptPage — Reusable template for individual foundational concept pages.
 *
 * Renders: header with concept number + group label,
 * H1 entry-point title, concept name label, subtitle,
 * key line, body content, and two bridge cards
 * (Understand The Model + Understand The Framework).
 */
export default function ConceptPage({ concept, content = {} }) {
  const next = getNextConcept(concept.id);
  const prev = getPrevConcept(concept.id);
  const CONCEPT_COLOR = CONCEPT_COLORS[concept.number - 1] || GROUP_COLORS[concept.group] || SPECTRUM.cobalt;
  const GROUP_COLOR = GROUP_COLORS[concept.group] || SPECTRUM.cobalt;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath={`/concepts/${concept.slug}`} />

      {/* Concept nav bar — 13 colored segments */}
      <SectionSpectrumBar section="concepts" activeIndex={concept.number - 1} />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                fontFamily: FONT.mono,
                padding: "3px 10px",
                borderRadius: 4,
                background: hexToRgba(CONCEPT_COLOR, 0.15),
                color: CONCEPT_COLOR,
                letterSpacing: "0.03em",
              }}
            >
              Foundational Concept {concept.number} of 13
            </span>
            <span
              style={{ fontSize: 12, color: GROUP_COLOR }}
            >
              {concept.group}
            </span>
          </div>

          {/* H1 — Entry-point title */}
          <h1
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: TEXT.primary,
              letterSpacing: "-0.02em",
              margin: "0 0 10px",
              lineHeight: 1.2,
            }}
          >
            {concept.title || concept.name}
          </h1>

          {/* Concept name label */}
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: CONCEPT_COLOR,
              margin: "0 0 6px",
              letterSpacing: "0.01em",
            }}
          >
            {concept.name}
          </p>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              margin: "0 0 16px",
              lineHeight: 1.5,
            }}
          >
            {concept.subtitle}
          </p>
        </header>

        {/* Pull quote — key line */}
        {concept.keyLine && (
          <div
            style={{
              borderLeft: `4px solid ${CONCEPT_COLOR}`,
              paddingLeft: 20,
              marginBottom: 40,
            }}
          >
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                fontStyle: "italic",
                color: TEXT.primary,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              &ldquo;{concept.keyLine}&rdquo;
            </p>
          </div>
        )}

        {/* Content — vision voice narrative or legacy three-section layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {content.body ? (
            <section>{content.body}</section>
          ) : (
            <>
              {content.whatItIs && (
                <Section title="What It Is" color={CONCEPT_COLOR}>{content.whatItIs}</Section>
              )}
              {content.whereItComesFrom && (
                <Section title="Where It Comes From" color={CONCEPT_COLOR}>
                  {content.whereItComesFrom}
                </Section>
              )}
              {content.whatTegBlueAdds && (
                <Section title="What TEG-Blue Adds" color={CONCEPT_COLOR}>
                  {content.whatTegBlueAdds}
                </Section>
              )}
            </>
          )}

          {/* Bridge Cards — Understand The Model + Understand The Framework */}
          <BridgeCards concept={concept} color={CONCEPT_COLOR} />
        </div>

        {/* Footer Navigation */}
        <footer
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: `1px solid ${BORDER.default}`,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 16,
            }}
          >
            {prev ? (
              <Link
                href={`/concepts/${prev.slug}`}
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
                &larr; {prev.number}. {prev.title || prev.name}
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/concepts/${next.slug}`}
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
                {next.number}. {next.title || next.name} &rarr;
              </Link>
            ) : (
              <div />
            )}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/concepts"
              style={{
                padding: "10px 20px",
                background: hexToRgba(CONCEPT_COLOR, 0.1),
                color: CONCEPT_COLOR,
                border: `1px solid ${hexToRgba(CONCEPT_COLOR, 0.2)}`,
                borderRadius: RADIUS.md,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              All Foundational Concepts &rarr;
            </Link>
            <Link
              href="/models"
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
          </div>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────

function Section({ title, children, color }) {
  return (
    <section>
      <h2
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 12,
          paddingBottom: 8,
          borderBottom: `2px solid ${hexToRgba(color, 0.2)}`,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

// ─── BRIDGE CARDS ───────────────────────────────────────────
// Two cards at the bottom of every concept page making the bridge
// to Models and Frameworks extremely clear.

function BridgeCards({ concept, color }) {
  const goDeeper = concept.goDeeper;
  const framework = goDeeper ? getFramework(goDeeper.framework) : null;
  const relatedModels = (concept.drawsFrom?.models || [])
    .map((id) => getModel(id))
    .filter(Boolean);
  const model = relatedModels[0] || null;

  if (!framework && !model) return null;

  const phaseColor = framework ? getPhaseColor(framework.phase) : SPECTRUM.cobalt;

  return (
    <section style={{ marginTop: 16 }}>
      {/* Section heading */}
      <h2
        style={{
          fontSize: 14,
          fontWeight: 700,
          fontFamily: FONT.mono,
          color: TEXT.tertiary,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        Go Deeper
      </h2>
      <p
        style={{
          fontSize: 14,
          color: TEXT.secondary,
          lineHeight: 1.6,
          marginBottom: 20,
          maxWidth: 560,
        }}
      >
        This concept is an entry point. The Model gives you the instrument. The Framework gives you the architecture.
      </p>

      {/* Two-card grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: model && framework ? "1fr 1fr" : "1fr",
          gap: 16,
        }}
      >
        {/* Understand The Model */}
        {model && (
          <Link
            href={model.url}
            style={{
              display: "block",
              padding: "24px",
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
              borderTop: `3px solid ${color}`,
              textDecoration: "none",
              transition: "border-color 150ms ease",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                fontFamily: FONT.mono,
                padding: "3px 10px",
                borderRadius: 4,
                background: hexToRgba(color, 0.12),
                color: color,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              Model
            </span>
            <h3
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: TEXT.primary,
                margin: "14px 0 6px",
                lineHeight: 1.3,
              }}
            >
              Understand The Model &rarr;
            </h3>
            <p
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: color,
                margin: "0 0 10px",
              }}
            >
              {model.name}
            </p>
            {concept.modelCard?.learn && (
              <p
                style={{
                  fontSize: 13,
                  color: TEXT.secondary,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {concept.modelCard.learn}
              </p>
            )}
          </Link>
        )}

        {/* Understand The Framework */}
        {framework && (
          <Link
            href={`/frameworks/${framework.slug}`}
            style={{
              display: "block",
              padding: "24px",
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
              borderTop: `3px solid ${phaseColor}`,
              textDecoration: "none",
              transition: "border-color 150ms ease",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                fontFamily: FONT.mono,
                padding: "3px 10px",
                borderRadius: 4,
                background: hexToRgba(phaseColor, 0.12),
                color: phaseColor,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              Framework {framework.id}
            </span>
            <h3
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: TEXT.primary,
                margin: "14px 0 6px",
                lineHeight: 1.3,
              }}
            >
              Understand The Framework &rarr;
            </h3>
            <p
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: phaseColor,
                margin: "0 0 10px",
              }}
            >
              {framework.name}
            </p>
            {concept.frameworkCard?.learn && (
              <p
                style={{
                  fontSize: 13,
                  color: TEXT.secondary,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {concept.frameworkCard.learn}
              </p>
            )}
          </Link>
        )}
      </div>
    </section>
  );
}
