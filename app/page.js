import Link from "next/link";
import { generateResearchHubJsonLd } from "@/src/lib/jsonld";
import { BG, SPACING, FONT, TEXT, BORDER, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

export const metadata = {
  title: "TEG-Blue Research Platform",
  description: "A research hub for testing, critiquing, and validating TEG-Blue. For researchers, academics, clinicians, and AI safety researchers.",
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
          <section style={{ marginBottom: 40 }}>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: TEXT.primary,
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              TEG-Blue Research Platform
            </h1>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: TEXT.secondary,
                maxWidth: 600,
                marginBottom: 20,
              }}
            >
              A research hub for testing, critiquing, and validating TEG-Blue.
            </p>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: TEXT.muted,
                maxWidth: 600,
                marginBottom: 24,
              }}
            >
              This space is built for researchers, academics, clinicians who value evidence, and AI safety researchers.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, marginBottom: 24 }}>
              If you are new here, start with the guided entry page.
            </p>
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
          </section>

          {/* What you can do here */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 20 }}>
              What you can do here
            </h2>

            {/* Understand the system */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                Understand the system
              </h3>
              <p style={{ fontSize: 14, color: TEXT.secondary, marginBottom: 12, lineHeight: 1.7 }}>
                See how the full structure fits together, without needing to read everything.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <NavLink href="/foundations" label="System Overview" description="How the parts connect" />
                <NavLink href="/four-mode-gradient" label="Four-Mode Gradient" description="The measurement layer" />
                <NavLink href="/frameworks-map" label="Frameworks" description="The explanatory layer (12 frameworks)" />
              </div>
            </div>

            {/* Review evidence and methods */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                Review evidence and methods
              </h3>
              <p style={{ fontSize: 14, color: TEXT.secondary, marginBottom: 12, lineHeight: 1.7 }}>
                We keep a clear separation between established foundations, proposed synthesis, preliminary evidence, and what is still open to validation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <NavLink href="/methodology" label="Methodology" />
                <NavLink href="/publications" label="Publications" />
                <NavLink href="/citations" label="How to Cite" />
              </div>
            </div>

            {/* Join a research lane */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                Join a research lane
              </h3>
              <p style={{ fontSize: 14, color: TEXT.secondary, marginBottom: 12, lineHeight: 1.7 }}>
                You do not need to validate the entire system. Pick one lane that matches your expertise: measurement, validation, theoretical review, or AI alignment.
              </p>
              <Link
                href="/research-entry"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: SPECTRUM.blue,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Start Here →
              </Link>
            </div>

            {/* Collaborate */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                Collaborate
              </h3>
              <p style={{ fontSize: 14, color: TEXT.secondary, marginBottom: 12, lineHeight: 1.7 }}>
                Clear attribution, clear authorship expectations, clear boundaries, open science when possible.
              </p>
              <Link
                href="/collaborate"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: SPECTRUM.blue,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Collaborate →
              </Link>
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

          {/* Footer note */}
          <footer style={{ marginTop: 32, textAlign: "center" }}>
            <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
              Open science hub for TEG-Blue · CC BY-NC-SA 4.0
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
