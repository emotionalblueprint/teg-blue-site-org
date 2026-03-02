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
                  Start here
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
                  Foundational Concepts
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: TEXT.secondary,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Entry points that give immediate recognition, introduce the
                  core architecture, and model the non-pathologising stance
                  that runs through the entire system.
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
                  Make them visible
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
                  2 Models
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: TEXT.secondary,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Instruments that answer: what is the nervous system doing
                  right now, and what does that make available?
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
                  Explain where they lead
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
                  12 Frameworks
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: TEXT.secondary,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Not twelve separate theories — one mechanism described from
                  twelve angles. The scale changes. The mechanism
                  doesn&rsquo;t.
                </p>
              </Link>
            </div>
          </section>

          {/* ─── Verify the Claims ─── */}
          <section className="section-break" style={{ marginBottom: 56 }}>
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
              Verify the claims
            </p>
            <p
              style={{
                fontSize: 14,
                color: TEXT.secondary,
                lineHeight: 1.7,
                maxWidth: 620,
                marginBottom: 24,
              }}
            >
              All sources credited. All methods documented. Clear separation
              between established science, proposed synthesis, and what&rsquo;s
              open to validation.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <Link
                href="/publications"
                className="hover-card"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  padding: "16px 20px",
                  background: BG.card,
                  borderRadius: RADIUS.md,
                  border: `1px solid ${BORDER.default}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: TEXT.primary,
                    whiteSpace: "nowrap",
                  }}
                >
                  Publications
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: TEXT.tertiary,
                  }}
                >
                  &mdash; Full research access
                </span>
              </Link>

              <Link
                href="/methodology"
                className="hover-card"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  padding: "16px 20px",
                  background: BG.card,
                  borderRadius: RADIUS.md,
                  border: `1px solid ${BORDER.default}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: TEXT.primary,
                    whiteSpace: "nowrap",
                  }}
                >
                  Methodology
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: TEXT.tertiary,
                  }}
                >
                  &mdash; How studies were conducted
                </span>
              </Link>

              <Link
                href="/scientific-foundations"
                className="hover-card"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  padding: "16px 20px",
                  background: BG.card,
                  borderRadius: RADIUS.md,
                  border: `1px solid ${BORDER.default}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: TEXT.primary,
                    whiteSpace: "nowrap",
                  }}
                >
                  139+ Source Theories
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: TEXT.tertiary,
                  }}
                >
                  &mdash; Every foundation credited
                </span>
              </Link>
            </div>
          </section>

          {/* ─── Contribute ─── */}
          <section style={{ marginBottom: 24 }}>
            <div
              style={{
                padding: 24,
                background: hexToRgba(PRIMARY, 0.06),
                borderRadius: RADIUS.lg,
                border: `1px solid ${hexToRgba(PRIMARY, 0.18)}`,
                marginBottom: 16,
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
                Contribute
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
                Open research questions. Pick a lane that matches your
                expertise: measurement, validation, theoretical review, or AI
                alignment.
              </p>
              <Link
                href="/research-entry"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  color: PRIMARY,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                See open questions &rarr;
              </Link>
            </div>

            <div
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
                Collaborate
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
                Clear attribution, clear authorship expectations, clear
                boundaries. Open science as default.
              </p>
              <Link
                href="/collaborate"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  color: PRIMARY,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Learn more &rarr;
              </Link>
            </div>
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
