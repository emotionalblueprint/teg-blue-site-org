import Link from "next/link";
import { generateResearchHubJsonLd } from "@/src/lib/jsonld";
import {
  BG,
  SPACING,
  FONT,
  TEXT,
  BORDER,
  SPECTRUM,
  PRIMARY,
  ACCENT,
  hexToRgba,
  RADIUS,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

export const metadata = {
  title: "TEG-Blue | Open Knowledge — Emotional Technology",
  description:
    "Understanding how the nervous system shapes everything — from a single emotion to a whole system. Thirteen foundational concepts, two models, twelve frameworks. Open science, open access.",
  alternates: {
    canonical: "https://teg-blue.org",
  },
};

export default function HomePage() {
  const jsonLd = generateResearchHubJsonLd();

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: BG.page,
          fontFamily: FONT.display,
        }}
      >
        <SiteHeader currentPath="/" />

        <main
          id="main-content"
          style={{
            maxWidth: SPACING.containerMax,
            margin: "0 auto",
            padding: "48px 24px 80px",
          }}
        >
          {/* ─── Hero ─── */}
          <section style={{ marginBottom: 56 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: SPECTRUM.cobalt,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 16,
                fontFamily: FONT.mono,
              }}
            >
              Emotional Technology Research
            </p>

            <h1
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 16,
                lineHeight: 1.4,
                maxWidth: 620,
              }}
            >
              Reconnecting cognition with emotional awareness
            </h1>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: TEXT.secondary,
                maxWidth: 620,
                marginBottom: 16,
              }}
            >
              The open science branch of TEG-Blue — where all research is
              transparent, all sources are credited, and all claims can be
              tested.
            </p>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: TEXT.secondary,
                maxWidth: 620,
                marginBottom: 12,
              }}
            >
              It is an integrative architecture for mapping emotional
              patterns — built on the principle that emotions are biological
              information, not irrational noise. By mapping how the nervous
              system organizes around perceived safety and threat, TEG-Blue
              provides a structured framework for identifying what is happening
              at the regulatory level, locating the current state, and
              determining what capacities are available from that position.
            </p>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: TEXT.secondary,
                maxWidth: 620,
                marginBottom: 24,
              }}
            >
              Built on 139+ established theories. Open to critique and
              validation.
            </p>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: TEXT.secondary,
                maxWidth: 620,
                fontWeight: 500,
              }}
            >
              The gap in emotional intelligence has never been a lack of good
              science. It has been a lack of architecture — a structure where
              the science connects, becomes visible, and becomes usable.
              That&rsquo;s what TEG-Blue is.
            </p>
          </section>

          {/* ─── One System, Three Zoom Levels ─── */}
          <section style={{ marginBottom: 56 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: TEXT.tertiary,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 20,
                fontFamily: FONT.mono,
              }}
            >
              Understand the system
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
            >
              {/* Concepts */}
              <Link
                href="/concepts"
                className="hover-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px 22px",
                  background: hexToRgba(SPECTRUM.sky, 0.06),
                  borderRadius: RADIUS.lg,
                  border: `1px solid ${hexToRgba(SPECTRUM.sky, 0.18)}`,
                  borderTop: `3px solid ${SPECTRUM.sky}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    fontFamily: FONT.mono,
                    color: SPECTRUM.sky,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 10,
                  }}
                >
                  Foundational Concepts
                </span>
                <h2
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: TEXT.primary,
                    margin: "0 0 10px",
                    lineHeight: 1.3,
                  }}
                >
                  Start here
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: TEXT.secondary,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Entry points into the system — ideas that make the
                  architecture accessible before the models and frameworks
                  begin.
                </p>
              </Link>

              {/* Models */}
              <Link
                href="/models"
                className="hover-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px 22px",
                  background: hexToRgba(SPECTRUM.azure, 0.06),
                  borderRadius: RADIUS.lg,
                  border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.18)}`,
                  borderTop: `3px solid ${SPECTRUM.azure}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    fontFamily: FONT.mono,
                    color: SPECTRUM.azure,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 10,
                  }}
                >
                  2 Models
                </span>
                <h2
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: TEXT.primary,
                    margin: "0 0 10px",
                    lineHeight: 1.3,
                  }}
                >
                  Make them visible
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: TEXT.secondary,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  One tells you where the needle is. The other tells you why it
                  is there.
                </p>
              </Link>

              {/* Frameworks */}
              <Link
                href="/frameworks-map"
                className="hover-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px 22px",
                  background: hexToRgba(SPECTRUM.cobalt, 0.06),
                  borderRadius: RADIUS.lg,
                  border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.18)}`,
                  borderTop: `3px solid ${SPECTRUM.cobalt}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    fontFamily: FONT.mono,
                    color: SPECTRUM.cobalt,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 10,
                  }}
                >
                  12 Frameworks
                </span>
                <h2
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: TEXT.primary,
                    margin: "0 0 10px",
                    lineHeight: 1.3,
                  }}
                >
                  Explain where they lead
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: TEXT.secondary,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  The full theoretical architecture — why modes exist, how
                  patterns scale into systems, where protection tips into
                  domination, and what makes repair possible.
                </p>
              </Link>
            </div>
          </section>

          {/* ─── The Evidence ─── */}
          <section className="section-break" style={{ marginBottom: 56 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: SPECTRUM.cobalt,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: FONT.mono,
                marginBottom: 8,
              }}
            >
              The Foundation
            </p>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 8,
                letterSpacing: "-0.01em",
              }}
            >
              Evidence &amp; Research
            </h2>
            <p
              style={{
                fontSize: 14,
                color: TEXT.secondary,
                lineHeight: 1.7,
                maxWidth: 600,
                marginBottom: 20,
              }}
            >
              Built on established research from polyvagal theory, affective
              neuroscience, attachment theory, and more.
            </p>

            <div
              style={{
                padding: "20px 24px",
                background: BG.card,
                borderRadius: RADIUS.lg,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `3px solid ${PRIMARY}`,
                marginBottom: 16,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.blue,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 8,
                  fontFamily: FONT.mono,
                }}
              >
                Validation Study
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: TEXT.primary,
                  marginBottom: 8,
                }}
              >
                Computational analysis of 10,000+ natural conflict narratives
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: TEXT.secondary,
                  lineHeight: 1.7,
                  marginBottom: 12,
                }}
              >
                De-escalators showed{" "}
                <span style={{ color: ACCENT.mint, fontWeight: 700 }}>
                  78% higher rates of complexity markers
                </span>{" "}
                than escalators — signs of self-awareness, perspective-taking,
                and emotional differentiation in natural language.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <StatBadge label="Source theories" value="139+" />
                <StatBadge label="Narratives analyzed" value="10,000+" />
                <StatBadge label="Frameworks" value="12" />
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link
                href="/publications"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: PRIMARY,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Publications &rarr;
              </Link>
              <Link
                href="/scientific-foundations"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: PRIMARY,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                139+ Source Theories &rarr;
              </Link>
              <Link
                href="/methodology"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: PRIMARY,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Methodology &rarr;
              </Link>
            </div>
          </section>

          {/* ─── For Researchers ─── */}
          <section
            style={{
              padding: 24,
              background: hexToRgba(PRIMARY, 0.06),
              borderRadius: RADIUS.lg,
              border: `1px solid ${hexToRgba(PRIMARY, 0.18)}`,
              marginBottom: 32,
            }}
          >
            <h2
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 8,
              }}
            >
              For Researchers
            </h2>
            <p
              style={{
                fontSize: 14,
                color: TEXT.secondary,
                lineHeight: 1.8,
                marginBottom: 16,
                maxWidth: 560,
              }}
            >
              Five open research questions, full methodology, and a standing
              invitation to critique. Every claim is designed to be tested.
            </p>
            <Link
              href="/research-entry"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: PRIMARY,
                color: TEXT.primary,
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Research Entry Point &rarr;
            </Link>
          </section>

          {/* ─── Bridge to .com ─── */}
          <section
            style={{
              padding: 24,
              background: hexToRgba(SPECTRUM.azure, 0.08),
              borderRadius: RADIUS.lg,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.22)}`,
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: SPECTRUM.azure,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 12,
                fontFamily: FONT.mono,
              }}
            >
              Interactive Tools
            </p>
            <p
              style={{
                fontSize: 15,
                color: TEXT.secondary,
                lineHeight: 1.7,
                marginBottom: 16,
                maxWidth: 440,
                margin: "0 auto 16px",
              }}
            >
              Want to use these ideas? Interactive tools built from these models
              are available on teg-blue.com.
            </p>
            <a
              href="https://teg-blue.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: SPECTRUM.azure,
                color: TEXT.primary,
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Visit teg-blue.com &rarr;
            </a>
          </section>

          {/* Footer note */}
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <p
              style={{
                fontSize: 11,
                color: TEXT.tertiary,
                fontFamily: FONT.mono,
              }}
            >
              TEG-Blue Open Knowledge &middot; CC BY-NC-SA 4.0
            </p>
          </div>
        </main>

        <SiteFooter />
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────

function StatBadge({ label, value }) {
  return (
    <div
      style={{
        background: hexToRgba(SPECTRUM.slate, 0.08),
        borderRadius: 6,
        padding: "6px 10px",
        display: "inline-block",
      }}
    >
      <p
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: TEXT.tertiary,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: 2,
          fontFamily: FONT.mono,
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: 14, fontWeight: 600, color: ACCENT.mint }}>
        {value}
      </p>
    </div>
  );
}
