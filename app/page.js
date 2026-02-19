import Link from "next/link";
import { generateResearchHubJsonLd } from "@/src/lib/jsonld";
import { BG, SPACING, FONT, TEXT, BORDER, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

export const metadata = {
  title: "TEG-Blue | Emotional Technology Research",
  description: "The first complete emotional technology system. Open science research on tools that measure, understand, and navigate human emotions — with the same clarity we expect from physical or digital technologies.",
  alternates: {
    canonical: "https://teg-blue.org",
  },
};

export default function ResearchHub() {
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
            padding: "32px 24px 60px",
          }}
        >
          {/* Hero Section */}
          <section style={{ marginBottom: 48 }}>
            {/* Eyebrow */}
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: SPECTRUM.blue,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 16,
                fontFamily: FONT.mono,
              }}
            >
              Emotional Technology Research
            </p>

            {/* Main statement */}
            <h1
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 16,
                lineHeight: 1.4,
                maxWidth: 600,
              }}
            >
              Reconnecting cognition with emotional awareness
            </h1>

            {/* Open science promise */}
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: TEXT.secondary,
                maxWidth: 600,
                marginBottom: 16,
              }}
            >
              The open science branch of TEG-Blue — where all research is transparent, all sources are credited, and all claims can be tested.
            </p>

            {/* Context */}
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: TEXT.muted,
                maxWidth: 600,
                marginBottom: 12,
              }}
            >
              TEG-Blue maps how emotional awareness connects cognition and feeling — and what happens when it goes offline. The same mechanism operates at every scale: individual, relational, organizational, societal.
            </p>

            {/* Built on */}
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: TEXT.muted,
                maxWidth: 600,
                marginBottom: 24,
              }}
            >
              Built on 139+ established theories. Open to critique and validation.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
              <Link
                href="/research-entry"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  background: SPECTRUM.blue,
                  color: "#fff",
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Start Here →
              </Link>
              <Link
                href="/publications"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  background: hexToRgba(SPECTRUM.blue, 0.1),
                  color: SPECTRUM.blue,
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                  border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.2)}`,
                }}
              >
                See Publications
              </Link>
            </div>

            {/* Link to .com */}
            <a
              href="https://teg-blue.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: SPECTRUM.azure,
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: SPECTRUM.azure,
                  boxShadow: `0 0 8px ${hexToRgba(SPECTRUM.azure, 0.6)}`,
                }}
              />
              Experience the tools at teg-blue.com →
            </a>
          </section>

          {/* What you can do here */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 24 }}>
              What you can do here
            </h2>

            <div style={{ display: "grid", gap: 16 }}>
              {/* Understand the framework */}
              <ActionCard
                color={SPECTRUM.indigo}
                title="Understand the framework"
                description="TEG-Blue maps emotional awareness — the key variable that connects cognition and feeling. See how the full structure fits together."
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <NavLink href="/foundations" label="System Overview" description="How the parts connect" />
                  <NavLink href="/four-mode-gradient" label="Four-Mode Gradient" description="Measuring emotional awareness" />
                  <NavLink href="/frameworks-map" label="12 Frameworks" description="Why the disconnection happens" />
                </div>
              </ActionCard>

              {/* Verify the claims */}
              <ActionCard
                color={SPECTRUM.blue}
                title="Verify the claims"
                description="All sources credited. All methods documented. Clear separation between established science, proposed synthesis, and what's open to validation."
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <NavLink href="/publications" label="Publications" description="Full research access" />
                  <NavLink href="/methodology" label="Methodology" description="How studies were conducted" />
                  <NavLink href="/citations" label="139+ Source Theories" description="Every foundation credited" />
                </div>
              </ActionCard>

              {/* Two-column row for smaller cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {/* Contribute */}
                <ActionCard
                  color={SPECTRUM.cobalt}
                  title="Contribute"
                  description="Open research questions. Pick a lane that matches your expertise: measurement, validation, theoretical review, or AI alignment."
                  compact
                >
                  <Link
                    href="/research-entry"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      color: SPECTRUM.cobalt,
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    See open questions →
                  </Link>
                </ActionCard>

                {/* Collaborate */}
                <ActionCard
                  color={SPECTRUM.azure}
                  title="Collaborate"
                  description="Clear attribution, clear authorship expectations, clear boundaries. Open science as default."
                  compact
                >
                  <Link
                    href="/collaborate"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      color: SPECTRUM.azure,
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    Learn more →
                  </Link>
                </ActionCard>
              </div>
            </div>
          </section>

          {/* The Research */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 24 }}>
              The research
            </h2>

            <div
              style={{
                background: BG.card,
                borderRadius: 10,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `3px solid ${SPECTRUM.blue}`,
                padding: "24px 28px",
                marginBottom: 16,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.blue,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 12,
                  fontFamily: FONT.mono,
                }}
              >
                Featured Study
              </p>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: TEXT.primary, marginBottom: 10 }}>
                Empirical Validation of the Four-Mode Gradient Framework
              </h3>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
                Computational analysis of 10,000+ natural conflict narratives testing whether the four-mode gradient can be reliably detected in unstructured text.
              </p>

              <div
                style={{
                  background: hexToRgba(SPECTRUM.indigo, 0.08),
                  borderRadius: 8,
                  padding: "16px 20px",
                  marginBottom: 16,
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: SPECTRUM.indigo,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 8,
                    fontFamily: FONT.mono,
                  }}
                >
                  Key Finding
                </p>
                <p style={{ fontSize: 15, color: TEXT.primary, lineHeight: 1.6, fontWeight: 500 }}>
                  De-escalators showed <span style={{ color: SPECTRUM.azure, fontWeight: 700 }}>78% higher rates of complexity markers</span> than escalators — signs of self-awareness, perspective-taking, and emotional differentiation in natural language.
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                <StatBadge label="Narratives analyzed" value="10,000+" />
                <StatBadge label="Escalated toward Control/Domination" value="33.8%" />
                <StatBadge label="De-escalated toward Connection" value="22.2%" />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link
                  href="/publications"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 18px",
                    background: SPECTRUM.blue,
                    color: "#fff",
                    borderRadius: 6,
                    fontWeight: 500,
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  Read the full study →
                </Link>
                <Link
                  href="/methodology"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 18px",
                    background: hexToRgba(SPECTRUM.blue, 0.1),
                    color: SPECTRUM.blue,
                    borderRadius: 6,
                    fontWeight: 500,
                    fontSize: 13,
                    textDecoration: "none",
                    border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.2)}`,
                  }}
                >
                  See methodology
                </Link>
              </div>
            </div>

            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.6 }}>
              DOI: 10.5281/zenodo.18428907 · Mode classifications correlated with independent community moral judgments.
            </p>
          </section>

          {/* Contributors */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 24 }}>
              Contributors
            </h2>

            <div
              style={{
                background: BG.card,
                borderRadius: 10,
                border: `1px solid ${BORDER.default}`,
                padding: "24px 28px",
              }}
            >
              <div style={{ marginBottom: 24 }}>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: SPECTRUM.cobalt,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                    fontFamily: FONT.mono,
                  }}
                >
                  Founder & Lead Researcher
                </p>
                <p style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                  Anna Paretas-Artacho
                </p>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7 }}>
                  Developed the TEG-Blue architecture over nearly two years of independent research, drawing on systems thinking, cross-disciplinary reading, and direct observation of human relational patterns.
                </p>
              </div>

              <div
                style={{
                  background: hexToRgba(SPECTRUM.slate, 0.08),
                  borderRadius: 8,
                  padding: "16px 20px",
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: SPECTRUM.slate,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 8,
                    fontFamily: FONT.mono,
                  }}
                >
                  How TEG-Blue Was Developed
                </p>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 10 }}>
                  <strong style={{ color: TEXT.primary }}>The architecture:</strong> Developed through independent research — observing patterns, connecting disciplines, testing against lived experience.
                </p>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 10 }}>
                  <strong style={{ color: TEXT.primary }}>The literature mapping:</strong> AI research tools (including the deep thinking models of Claude, Perplexity, and Microsoft Copilot) helped identify which of 139+ established theories align with each framework. The architecture determined the connections. The AI located the academic literature.
                </p>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7 }}>
                  <strong style={{ color: TEXT.primary }}>The status:</strong> A working hypothesis — open to critique, correction, and deeper validation by human researchers.
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link
                  href="/about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: SPECTRUM.cobalt,
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  About TEG-Blue →
                </Link>
                <Link
                  href="/collaborate"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: SPECTRUM.azure,
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  Join as a contributor →
                </Link>
              </div>
            </div>
          </section>

          {/* Site map */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
              Site map
            </h2>
            <div
              style={{
                background: BG.card,
                borderRadius: 8,
                border: `1px solid ${BORDER.default}`,
                overflow: "hidden",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: BG.surface }}>
                    <th style={{ ...tableHeaderStyle }}>Page</th>
                    <th style={{ ...tableHeaderStyle }}>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <SiteMapRow href="/research-entry" label="Start Here" description="2-minute orientation + choose a lane" />
                  <SiteMapRow href="/foundations" label="System Overview" description="How the 4 layers fit together" />
                  <SiteMapRow href="/four-mode-gradient" label="Four-Mode Gradient" description="The measurement layer (technical anchor)" />
                  <SiteMapRow href="/frameworks-map" label="Frameworks" description="The 12 explanatory frameworks" />
                  <SiteMapRow href="/publications" label="Publications" description="Evidence, datasets, validation studies" />
                  <SiteMapRow href="/methodology" label="Methodology" description="How we conduct and report research" />
                  <SiteMapRow href="/ai-safety" label="AI Safety" description="Applications for AI alignment and safety" />
                  <SiteMapRow href="/collaborate" label="Collaborate" description="How to work with us" />
                  <SiteMapRow href="/glossary" label="Glossary" description="Key terms and definitions" />
                  <SiteMapRow href="/about" label="About" description="About TEG-Blue and the founder" />
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact */}
          <section
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.azure}`,
            }}
          >
            <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              Contact
            </h2>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
              If you want to collaborate, send a short message with your background, which lane you want to contribute to, and what you would test or critique first.
            </p>
            <a
              href="mailto:research@teg-blue.org"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                background: hexToRgba(SPECTRUM.blue, 0.1),
                border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.3)}`,
                borderRadius: 6,
                color: SPECTRUM.blue,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              research@teg-blue.org
            </a>
          </section>

          {/* Experience the Application */}
          <section
            style={{
              padding: 24,
              background: hexToRgba(SPECTRUM.azure, 0.05),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
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
              The Application
            </p>
            <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16, maxWidth: 400, margin: "0 auto 16px" }}>
              Want to experience what reconnecting cognition with emotional awareness feels like? Try the interactive tools.
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
                color: "#fff",
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Visit teg-blue.com →
            </a>
          </section>

          {/* Footer note */}
          <footer style={{ marginTop: 32, textAlign: "center" }}>
            <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
              TEG-Blue Open Science · CC BY-NC-SA 4.0
            </p>
          </footer>
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

// Helper components
function ActionCard({ color, title, description, children, compact = false }) {
  return (
    <div
      style={{
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
        padding: compact ? "16px 20px" : "20px 24px",
      }}
    >
      <h3
        style={{
          fontSize: compact ? 14 : 15,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 6,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 13,
          color: TEXT.muted,
          lineHeight: 1.6,
          marginBottom: children ? 14 : 0,
        }}
      >
        {description}
      </p>
      {children}
    </div>
  );
}

function NavLink({ href, label, description }) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 14,
        color: SPECTRUM.blue,
        textDecoration: "none",
      }}
    >
      <span style={{ fontWeight: 500 }}>{label}</span>
      {description && (
        <span style={{ color: TEXT.muted }}>— {description}</span>
      )}
    </Link>
  );
}

function SiteMapRow({ href, label, description }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle }}>
        <Link
          href={href}
          style={{
            color: SPECTRUM.blue,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          {label}
        </Link>
      </td>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>
        {description}
      </td>
    </tr>
  );
}

function StatBadge({ label, value }) {
  return (
    <div
      style={{
        background: hexToRgba(SPECTRUM.slate, 0.08),
        borderRadius: 6,
        padding: "8px 12px",
        display: "inline-block",
      }}
    >
      <p
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: TEXT.muted,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: 2,
          fontFamily: FONT.mono,
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary }}>
        {value}
      </p>
    </div>
  );
}

const tableHeaderStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: TEXT.muted,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontFamily: FONT.mono,
};

const tableCellStyle = {
  padding: "12px 16px",
  fontSize: 14,
};
