"use client";

import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RADIUS, PHASE } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import { getPhaseColor, getFramework, getPairedModel } from "@/src/data/frameworks";

/**
 * ModelPage — Reusable template for individual model pages.
 *
 * Renders the slim page layout: header, overview, key characteristics,
 * key reframes, research foundations, connection to paired model,
 * bridge to deeper content, and footer navigation.
 */
export default function ModelPage({ model, content = {} }) {
  const parentFramework = getFramework(model.parentFramework);
  const paired = getPairedModel(model.id);
  const phaseColor = parentFramework ? getPhaseColor(parentFramework.phase) : PHASE.foundation;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath={`/models/${model.slug}`} />

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
              marginBottom: 8,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                fontFamily: FONT.mono,
                padding: "3px 8px",
                borderRadius: 4,
                background: hexToRgba(phaseColor, 0.15),
                color: phaseColor,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Model
            </span>
            <span style={{ fontSize: 13, color: TEXT.secondary }}>
              {model.subtitle}
            </span>
          </div>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: TEXT.primary,
              letterSpacing: "-0.02em",
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            {model.name}
          </h1>

          {/* Paired model + parent framework links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginBottom: 20,
            }}
          >
            {paired && (
              <div style={{ fontSize: 13, color: TEXT.secondary }}>
                Paired with:{" "}
                <Link
                  href={paired.url}
                  style={{
                    color: phaseColor,
                    textDecoration: "none",
                  }}
                >
                  {paired.name} &rarr;
                </Link>
              </div>
            )}
            {parentFramework && (
              <div style={{ fontSize: 13, color: TEXT.secondary }}>
                Primary framework:{" "}
                <Link
                  href={`/frameworks/${parentFramework.slug}`}
                  style={{
                    color: getPhaseColor(parentFramework.phase),
                    textDecoration: "none",
                  }}
                >
                  {parentFramework.id}: {parentFramework.name} &rarr;
                </Link>
              </div>
            )}
          </div>
        </header>

        {/* Content sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {/* Overview */}
          {content.overview && (
            <ContentSection title="Overview" color={phaseColor}>
              {content.overview}
            </ContentSection>
          )}

          {/* Key Characteristics */}
          {content.characteristics && content.characteristics.map((char, i) => (
            <ContentSection key={i} title={char.title} color={phaseColor}>
              {char.body}
            </ContentSection>
          ))}

          {/* What the Model Changes */}
          {content.reframes && (
            <ContentSection title="What the Model Changes" color={phaseColor}>
              {content.reframes}
            </ContentSection>
          )}

          {/* Research Foundations */}
          {content.foundations && (
            <ContentSection title="Research Foundations" color={phaseColor}>
              {content.foundations}
            </ContentSection>
          )}

          {/* Connection to Paired Model */}
          {paired && content.connection && (
            <ContentSection
              title={`Connection to ${paired.name}`}
              color={phaseColor}
            >
              {content.connection}
              <div style={{ marginTop: 20 }}>
                <Link
                  href={paired.url}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 20px",
                    background: hexToRgba(phaseColor, 0.1),
                    color: phaseColor,
                    borderRadius: RADIUS.md,
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: "none",
                    border: `1px solid ${hexToRgba(phaseColor, 0.2)}`,
                  }}
                >
                  {paired.name} &rarr;
                </Link>
              </div>
            </ContentSection>
          )}

          {/* Bridge to deeper content */}
          <section
            style={{
              padding: "24px",
              background: hexToRgba(phaseColor, 0.04),
              borderRadius: RADIUS.md,
              border: `1px solid ${hexToRgba(phaseColor, 0.12)}`,
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: TEXT.secondary,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              This page introduces the model&rsquo;s core architecture and key
              principles. The full model &mdash; all concepts, application
              guides, and operational detail &mdash; is available for
              researchers and practitioners on{" "}
              <a
                href="https://teg-blue.com"
                style={{
                  color: phaseColor,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                teg-blue.com
              </a>
              .
            </p>
          </section>
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
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {paired && (
              <Link
                href={paired.url}
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
                {paired.subtitle}: {paired.name} &rarr;
              </Link>
            )}
            {parentFramework && (
              <Link
                href={`/frameworks/${parentFramework.slug}`}
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
                {parentFramework.id}: {parentFramework.name} &rarr;
              </Link>
            )}
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
              All Models &rarr;
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
              All Frameworks &rarr;
            </Link>
          </div>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────

function ContentSection({ title, color, children }) {
  return (
    <section>
      <h3
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
      </h3>
      {children}
    </section>
  );
}
