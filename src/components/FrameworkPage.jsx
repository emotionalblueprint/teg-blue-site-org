"use client";

import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import { getPhaseColor, FRAMEWORKS, MODELS } from "@/src/data/frameworks";

/**
 * FrameworkPage — Reusable template for individual framework pages.
 *
 * Renders the full page layout with navigation, header, content sections,
 * and footer. Content sections show placeholders until populated in Stages 2-5.
 */
export default function FrameworkPage({ framework, prevFramework, nextFramework, content = {} }) {
  const phaseColor = getPhaseColor(framework.phase);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath={`/frameworks/${framework.slug}`} />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {/* Top navigation */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            gap: 12,
          }}
        >
          <div style={{ flex: 1 }}>
            {prevFramework && (
              <Link
                href={`/frameworks/${prevFramework.slug}`}
                style={{
                  fontSize: 13,
                  color: TEXT.muted,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ fontSize: 11 }}>&larr;</span>
                <span>{prevFramework.id}: {prevFramework.name}</span>
              </Link>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
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
              }}
            >
              {framework.phase}
            </span>
            <span style={{ fontSize: 20, color: phaseColor }}>{framework.symbol}</span>
          </div>
          <div style={{ flex: 1, textAlign: "right" }}>
            {nextFramework && (
              <Link
                href={`/frameworks/${nextFramework.slug}`}
                style={{
                  fontSize: 13,
                  color: TEXT.muted,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>{nextFramework.id}: {nextFramework.name}</span>
                <span style={{ fontSize: 11 }}>&rarr;</span>
              </Link>
            )}
          </div>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                fontFamily: FONT.mono,
                color: phaseColor,
              }}
            >
              {framework.id}
            </span>
            <span style={{ fontSize: 13, color: TEXT.muted }}>
              {framework.subtitle}
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
            {framework.name}
          </h1>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: TEXT.secondary,
              margin: "0 0 20px",
              lineHeight: 1.4,
            }}
          >
            {framework.researcherTitle}
          </h2>
          <blockquote
            style={{
              margin: 0,
              padding: "16px 20px",
              borderLeft: `3px solid ${phaseColor}`,
              background: hexToRgba(phaseColor, 0.05),
              borderRadius: "0 6px 6px 0",
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            {framework.coreQuestion}
          </blockquote>
        </header>

        {/* Content sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {/* What This Framework Proposes */}
          <ContentSection title="What This Framework Proposes" color={phaseColor}>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
              {framework.summary}
            </p>
            {content.proposal ? content.proposal : <PlaceholderNote />}
          </ContentSection>

          {/* The Mechanism */}
          <ContentSection title="The Mechanism" color={phaseColor}>
            {content.mechanism ? content.mechanism : <PlaceholderNote />}
          </ContentSection>

          {/* What Happens When It Breaks */}
          <ContentSection title="What Happens When It Breaks" color={phaseColor}>
            {content.breakdown ? content.breakdown : <PlaceholderNote />}
          </ContentSection>

          {/* The Regulation Thread */}
          <ContentSection title="The Regulation Thread" color={phaseColor}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
                marginBottom: 20,
              }}
            >
              <ThreadItem
                label="What regulates"
                value={framework.regulationThread.whatRegulates}
                color={phaseColor}
              />
              <ThreadItem
                label="Scale"
                value={framework.regulationThread.scale}
                color={phaseColor}
              />
              <ThreadItem
                label="Cost"
                value={framework.regulationThread.cost}
                color={phaseColor}
              />
            </div>
            {/* Thread position indicator */}
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {FRAMEWORKS.map((f) => (
                <div
                  key={f.id}
                  style={{
                    flex: 1,
                    height: 4,
                    borderRadius: 2,
                    background:
                      f.id === framework.id
                        ? phaseColor
                        : hexToRgba(getPhaseColor(f.phase), 0.2),
                  }}
                  title={`${f.id}: ${f.name}`}
                />
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <span style={{ fontSize: 10, color: TEXT.micro, fontFamily: FONT.mono }}>
                F1
              </span>
              <span style={{ fontSize: 10, color: TEXT.micro, fontFamily: FONT.mono }}>
                F12
              </span>
            </div>
          </ContentSection>

          {/* Scientific Foundations */}
          <ContentSection title="Scientific Foundations" color={phaseColor}>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
              <strong style={{ color: TEXT.primary }}>Builds on:</strong>{" "}
              {framework.buildsOn}
            </p>
            {content.foundations ? content.foundations : <PlaceholderNote />}
          </ContentSection>

          {/* Connections */}
          <ContentSection title="Connections" color={phaseColor}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {framework.connections.buildsFrom.length > 0 && (
                <ConnectionList
                  label="Builds from"
                  ids={framework.connections.buildsFrom}
                  color={phaseColor}
                />
              )}
              {framework.connections.feedsInto.length > 0 && (
                <ConnectionList
                  label="Feeds into"
                  ids={framework.connections.feedsInto}
                  color={phaseColor}
                />
              )}
              {framework.connections.relatedModels.length > 0 && (
                <div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: FONT.mono,
                      color: TEXT.muted,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Related models:
                  </span>{" "}
                  {framework.connections.relatedModels.map((modelId, i) => {
                    const model = MODELS.find((m) => m.id === modelId);
                    if (!model) return null;
                    return (
                      <span key={modelId}>
                        {i > 0 && <span style={{ color: TEXT.micro }}>, </span>}
                        <Link
                          href={model.url}
                          style={{
                            fontSize: 13,
                            color: phaseColor,
                            textDecoration: "none",
                          }}
                        >
                          {model.name}
                        </Link>
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </ContentSection>

          {/* Testable Claims */}
          <ContentSection title="Testable Claims" color={phaseColor}>
            <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
              {framework.claims.map((claim, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 14,
                    color: TEXT.secondary,
                    lineHeight: 1.7,
                    marginBottom: 8,
                  }}
                >
                  {claim}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7 }}>
              <strong style={{ color: TEXT.secondary }}>
                Testable directions:
              </strong>{" "}
              {framework.testable}
            </p>
          </ContentSection>
        </div>

        {/* Bottom navigation */}
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
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            {prevFramework ? (
              <Link
                href={`/frameworks/${prevFramework.slug}`}
                style={{
                  fontSize: 14,
                  color: TEXT.secondary,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>&larr;</span>
                <span>
                  {prevFramework.id}: {prevFramework.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextFramework ? (
              <Link
                href={`/frameworks/${nextFramework.slug}`}
                style={{
                  fontSize: 14,
                  color: TEXT.secondary,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>
                  {nextFramework.id}: {nextFramework.name}
                </span>
                <span>&rarr;</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
          <div
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
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              All Frameworks &rarr;
            </Link>
            <Link
              href="/collaborate"
              style={{
                padding: "10px 20px",
                background: phaseColor,
                color: "#fff",
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Collaborate on this framework &rarr;
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

function PlaceholderNote() {
  return (
    <p
      style={{
        fontSize: 13,
        color: TEXT.hint,
        fontStyle: "italic",
        margin: "12px 0 0",
        padding: "12px 16px",
        background: hexToRgba(SPECTRUM.blue, 0.04),
        borderRadius: 6,
        border: `1px dashed ${hexToRgba(SPECTRUM.blue, 0.15)}`,
      }}
    >
      Full content for this section is being developed from the vault's Concept
      Architecture.
    </p>
  );
}

function ThreadItem({ label, value, color }) {
  return (
    <div
      style={{
        padding: "12px 16px",
        background: BG.card,
        borderRadius: 6,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontFamily: FONT.mono,
          color: color,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.5 }}>
        {value}
      </div>
    </div>
  );
}

function ConnectionList({ label, ids, color }) {
  return (
    <div>
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          fontFamily: FONT.mono,
          color: TEXT.muted,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {label}:
      </span>{" "}
      {ids.map((id, i) => {
        const fw = FRAMEWORKS.find((f) => f.id === id);
        if (!fw) return null;
        return (
          <span key={id}>
            {i > 0 && <span style={{ color: TEXT.micro }}>, </span>}
            <Link
              href={`/frameworks/${fw.slug}`}
              style={{
                fontSize: 13,
                color: getPhaseColor(fw.phase),
                textDecoration: "none",
              }}
            >
              {fw.id}: {fw.name}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
