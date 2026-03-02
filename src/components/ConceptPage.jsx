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
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import { getNextConcept, getPrevConcept } from "@/src/data/concepts";
import { getFramework, getModel, getPhaseColor } from "@/src/data/frameworks";

const CONCEPT_COLOR = SPECTRUM.cobalt;

/**
 * ConceptPage — Reusable template for individual foundational concept pages.
 *
 * Renders: header with concept number + group label, title, subtitle,
 * What It Is, Where It Comes From, What TEG-Blue Adds, Go Deeper links,
 * and footer navigation (prev/next concept, back to hub).
 */
export default function ConceptPage({ concept, content = {} }) {
  const next = getNextConcept(concept.id);
  const prev = getPrevConcept(concept.id);

  const relatedFrameworks = (concept.drawsFrom?.frameworks || [])
    .map((id) => getFramework(id))
    .filter(Boolean);

  const relatedModels = (concept.drawsFrom?.models || [])
    .map((id) => getModel(id))
    .filter(Boolean);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath={`/concepts/${concept.slug}`} />

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
              Concept {concept.number}
            </span>
            <span style={{ fontSize: 12, color: TEXT.muted }}>
              {concept.group}
            </span>
          </div>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: TEXT.primary,
              letterSpacing: "-0.02em",
              margin: "0 0 6px",
              lineHeight: 1.2,
            }}
          >
            {concept.name}
          </h1>
          <p
            style={{
              fontSize: 15,
              color: TEXT.muted,
              margin: "0 0 16px",
              lineHeight: 1.5,
            }}
          >
            {concept.subtitle}
          </p>

          {/* Source mapping */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              fontSize: 12,
              color: TEXT.hint,
            }}
          >
            {relatedFrameworks.map((fw) => (
              <Link
                key={fw.id}
                href={`/frameworks/${fw.slug}`}
                style={{
                  color: getPhaseColor(fw.phase),
                  textDecoration: "none",
                  padding: "2px 8px",
                  borderRadius: 4,
                  background: hexToRgba(getPhaseColor(fw.phase), 0.1),
                  fontSize: 11,
                  fontFamily: FONT.mono,
                  fontWeight: 500,
                }}
              >
                {fw.id}
              </Link>
            ))}
            {relatedModels.map((m) => (
              <Link
                key={m.id}
                href={m.url}
                style={{
                  color: CONCEPT_COLOR,
                  textDecoration: "none",
                  padding: "2px 8px",
                  borderRadius: 4,
                  background: hexToRgba(CONCEPT_COLOR, 0.1),
                  fontSize: 11,
                  fontFamily: FONT.mono,
                  fontWeight: 500,
                }}
              >
                {m.subtitle}
              </Link>
            ))}
          </div>
        </header>

        {/* Content sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {/* What It Is — the core of the page */}
          {content.whatItIs && (
            <Section title="What It Is">{content.whatItIs}</Section>
          )}

          {/* Where It Comes From */}
          {content.whereItComesFrom && (
            <Section title="Where It Comes From">
              {content.whereItComesFrom}
            </Section>
          )}

          {/* What TEG-Blue Adds */}
          {content.whatTegBlueAdds && (
            <Section title="What TEG-Blue Adds">
              {content.whatTegBlueAdds}
            </Section>
          )}

          {/* Go Deeper */}
          <Section title="Go Deeper">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {relatedModels.map((m) => (
                <GoLink
                  key={m.id}
                  href={m.url}
                  label={m.name}
                  tag="Model"
                />
              ))}
              {relatedFrameworks.map((fw) => (
                <GoLink
                  key={fw.id}
                  href={`/frameworks/${fw.slug}`}
                  label={`${fw.id}: ${fw.name}`}
                  tag="Framework"
                />
              ))}
              {next && (
                <GoLink
                  href={`/concepts/${next.slug}`}
                  label={`Concept ${next.number}: ${next.name}`}
                  tag="Next"
                />
              )}
            </div>
          </Section>
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
                &larr; {prev.number}. {prev.name}
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
                {next.number}. {next.name} &rarr;
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
          </div>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────

function Section({ title, children }) {
  return (
    <section>
      <h2
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 12,
          paddingBottom: 8,
          borderBottom: `2px solid ${hexToRgba(CONCEPT_COLOR, 0.2)}`,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function GoLink({ href, label, tag }) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 16px",
        background: BG.card,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
        textDecoration: "none",
      }}
    >
      <span
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontFamily: FONT.mono,
          color: TEXT.hint,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          minWidth: 60,
        }}
      >
        {tag}
      </span>
      <span
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: CONCEPT_COLOR,
        }}
      >
        {label} &rarr;
      </span>
    </Link>
  );
}
