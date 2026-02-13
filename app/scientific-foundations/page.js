"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

// Domain colors for visual grouping
const domainColors = {
  "neuroscience": SPECTRUM.azure,
  "psychology": SPECTRUM.blue,
  "developmental": SPECTRUM.cobalt,
  "trauma": SPECTRUM.indigo,
  "clinical": SPECTRUM.slate,
  "social": SPECTRUM.blue,
  "emotion": SPECTRUM.azure,
};

function getDomainColor(domain) {
  const normalizedDomain = domain?.toLowerCase() || "";
  for (const [key, color] of Object.entries(domainColors)) {
    if (normalizedDomain.includes(key)) return color;
  }
  return SPECTRUM.blue;
}

export default function ScientificFoundationsPage() {
  const [theories, setTheories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [groupBy, setGroupBy] = useState("domain"); // "domain" or "alphabetical"

  useEffect(() => {
    // Load theories from API route
    fetch("/api/theories")
      .then((res) => res.json())
      .then((data) => {
        setTheories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Group theories by domain
  const groupedByDomain = theories.reduce((acc, theory) => {
    const domain = theory.domain || "Other";
    if (!acc[domain]) acc[domain] = [];
    acc[domain].push(theory);
    return acc;
  }, {});

  // Sort domains alphabetically
  const sortedDomains = Object.keys(groupedByDomain).sort();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/scientific-foundations" />

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
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12, flexWrap: "wrap" }}>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: TEXT.primary,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Scientific Foundations
            </h1>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.azure,
                padding: "4px 10px",
                background: hexToRgba(SPECTRUM.azure, 0.1),
                borderRadius: 4,
              }}
            >
              {theories.length} established theories
            </span>
          </div>

          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            The research traditions TEG-Blue builds upon.
          </p>

          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            TEG-Blue integrates <strong>139+ established theories</strong> across neuroscience, psychology,
            sociology, and trauma studies. Each theory below is credited with its core concept,
            how TEG-Blue integrates it, and key academic sources.
          </p>

          <div
            style={{
              padding: 16,
              background: hexToRgba(SPECTRUM.azure, 0.05),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
              marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: TEXT.primary }}>What's original:</strong> The originality is not in the individual theories —
              it is in the <em>connections between them</em>. These research traditions developed independently,
              within separate disciplines. TEG-Blue proposes specific cross-disciplinary connections that
              generate testable predictions.
            </p>
          </div>

          <p style={{ fontSize: 13, color: TEXT.muted }}>
            See how these theories connect:{" "}
            <Link href="/frameworks-map" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              12 Frameworks →
            </Link>
          </p>
        </header>

        {/* Loading state */}
        {loading && (
          <div style={{ textAlign: "center", padding: 40 }}>
            <p style={{ fontSize: 14, color: TEXT.muted }}>Loading theories...</p>
          </div>
        )}

        {/* Theories by Domain */}
        {!loading && sortedDomains.map((domain) => (
          <section key={domain} style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: TEXT.primary,
                  margin: 0,
                  textTransform: "capitalize",
                }}
              >
                {domain}
              </h2>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: FONT.mono,
                  color: getDomainColor(domain),
                  padding: "3px 8px",
                  background: hexToRgba(getDomainColor(domain), 0.1),
                  borderRadius: 4,
                }}
              >
                {groupedByDomain[domain].length} {groupedByDomain[domain].length === 1 ? "theory" : "theories"}
              </span>
            </div>

            {groupedByDomain[domain].map((theory) => (
              <ExpandableTheoryCard key={theory.slug} theory={theory} />
            ))}
          </section>
        ))}

        {/* Empty state */}
        {!loading && theories.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: 60,
              background: BG.card,
              borderRadius: 12,
              border: `1px solid ${BORDER.default}`,
            }}
          >
            <p style={{ fontSize: 16, color: TEXT.secondary, marginBottom: 8 }}>
              No theories loaded yet.
            </p>
            <p style={{ fontSize: 13, color: TEXT.muted }}>
              Theory content is stored in /content/theories/
            </p>
          </div>
        )}

        {/* Attribution section */}
        <section
          style={{
            marginTop: 48,
            padding: 24,
            background: BG.card,
            borderRadius: 12,
            border: `1px solid ${BORDER.default}`,
          }}
        >
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Attribution & Methodology
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
            Every source theory is credited. The architecture was developed by Anna Paretas-Artacho
            through independent research. AI research tools (Claude, ChatGPT Deep Research) were
            used to systematically identify which established theories align with each framework's
            propositions.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Status:</strong> This theoretical mapping is a working hypothesis — a starting
            point for deeper scholarly validation. We explicitly invite corrections and critique.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/methodology"
              style={{
                padding: "8px 16px",
                background: "transparent",
                color: TEXT.secondary,
                border: `1px solid ${BORDER.default}`,
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              Methodology →
            </Link>
            <Link
              href="/collaborate"
              style={{
                padding: "8px 16px",
                background: SPECTRUM.blue,
                color: "#fff",
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              Collaborate →
            </Link>
          </div>
        </section>

        {/* Footer note */}
        <footer style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── EXPANDABLE THEORY CARD ─────────────────────────────────────

function ExpandableTheoryCard({ theory }) {
  const [isOpen, setIsOpen] = useState(false);
  const domainColor = getDomainColor(theory.domain);

  // Find content sections
  const coreConceptSection = theory.content?.find((s) => s.id === "core-concept" || s.title?.toLowerCase().includes("core"));
  const integrationSection = theory.content?.find((s) => s.id === "teg-blue-integration" || s.title?.toLowerCase().includes("teg-blue"));
  const sourcesSection = theory.content?.find((s) => s.id === "key-sources" || s.title?.toLowerCase().includes("source"));

  return (
    <div
      style={{
        marginBottom: 12,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${isOpen ? hexToRgba(domainColor, 0.3) : BORDER.default}`,
        borderLeft: `3px solid ${domainColor}`,
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      {/* Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "block",
        }}
      >
        {/* Top row: Title, Author, Status */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary }}>
            {theory.title}
          </span>
          {theory.originAuthor && (
            <span style={{ fontSize: 13, color: TEXT.muted }}>
              — {theory.originAuthor}
            </span>
          )}
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              fontFamily: FONT.mono,
              padding: "3px 8px",
              borderRadius: 4,
              background: hexToRgba(domainColor, 0.1),
              color: domainColor,
              marginLeft: "auto",
              textTransform: "capitalize",
            }}
          >
            {theory.status || "established"}
          </span>
        </div>

        {/* Summary */}
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {theory.summary}
        </p>

        {/* Tags */}
        {theory.tags && theory.tags.length > 0 && (
          <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
            {theory.tags.slice(0, 5).map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: 10,
                  fontFamily: FONT.mono,
                  padding: "2px 6px",
                  background: hexToRgba(domainColor, 0.08),
                  color: TEXT.muted,
                  borderRadius: 3,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Expand indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
          <span style={{ fontSize: 12, color: TEXT.muted }}>
            {isOpen ? "Hide details" : "Show details"}
          </span>
          <span
            style={{
              fontSize: 14,
              color: domainColor,
              transition: "transform 0.2s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▼
          </span>
        </div>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px",
            borderTop: `1px solid ${BORDER.default}`,
          }}
        >
          {/* Core Concept */}
          {coreConceptSection && (
            <div style={{ marginTop: 16, marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                {coreConceptSection.title}
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                {coreConceptSection.content}
              </p>
            </div>
          )}

          {/* How TEG-Blue Integrates This */}
          {integrationSection && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                {integrationSection.title}
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                {integrationSection.content}
              </p>
            </div>
          )}

          {/* Key Sources */}
          {sourcesSection && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                {sourcesSection.title}
              </h4>
              <p
                style={{
                  fontSize: 13,
                  color: TEXT.muted,
                  lineHeight: 1.8,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                {sourcesSection.content}
              </p>
            </div>
          )}

          {/* Connections */}
          {theory.connections && theory.connections.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                Connections
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {theory.connections.map((conn, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 12,
                      padding: "4px 10px",
                      background: hexToRgba(domainColor, 0.08),
                      color: TEXT.secondary,
                      borderRadius: 4,
                      border: `1px solid ${hexToRgba(domainColor, 0.15)}`,
                    }}
                  >
                    {conn.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Link to framework that uses this theory */}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${BORDER.default}` }}>
            <Link
              href="/frameworks-map"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 500,
                color: domainColor,
                textDecoration: "none",
              }}
            >
              See which frameworks use this theory →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
