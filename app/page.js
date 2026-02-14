import Link from "next/link";
import { generateResearchHubJsonLd } from "@/src/lib/jsonld";
import { BG, SPACING, FONT, TEXT, BORDER, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

export const metadata = {
  title: "TEG-Blue Research Platform | Understanding How Harm Scales",
  description: "We confuse hurt with harm — and it costs us everything. TEG-Blue maps how emotional dysregulation scales from individual to systemic. Open research for academics, clinicians, and AI safety researchers.",
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
              TEG-Blue Research Platform
            </p>

            {/* Headline - the hook */}
            <h1
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: TEXT.primary,
                marginBottom: 16,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                maxWidth: 600,
              }}
            >
              We confuse hurt with harm — and it costs us everything.
            </h1>

            {/* Subhead - the reveal */}
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: TEXT.secondary,
                maxWidth: 600,
                marginBottom: 20,
              }}
            >
              This is the research to understand why.
            </p>

            {/* Context */}
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: TEXT.muted,
                maxWidth: 600,
                marginBottom: 24,
              }}
            >
              TEG-Blue maps how emotional dysregulation scales — from individual nervous system states through relationships, groups, institutions, and systems. Built on 139+ established theories. Open to critique and validation.
            </p>

            {/* Audience */}
            <p style={{ fontSize: 13, color: TEXT.muted, marginBottom: 24 }}>
              For researchers, academics, clinicians, and AI safety researchers.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
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
          </section>

          {/* What you can do here */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 24 }}>
              What you can do here
            </h2>

            <div style={{ display: "grid", gap: 16 }}>
              {/* Understand the system */}
              <ActionCard
                color={SPECTRUM.indigo}
                title="Understand the system"
                description="See how the full structure fits together, without needing to read everything."
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <NavLink href="/foundations" label="System Overview" description="How the parts connect" />
                  <NavLink href="/four-mode-gradient" label="Four-Mode Gradient" description="The measurement layer" />
                  <NavLink href="/frameworks-map" label="Frameworks" description="The explanatory layer (12 frameworks)" />
                </div>
              </ActionCard>

              {/* Review evidence and methods */}
              <ActionCard
                color={SPECTRUM.blue}
                title="Review evidence and methods"
                description="Clear separation between established foundations, proposed synthesis, preliminary evidence, and what's open to validation."
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <NavLink href="/methodology" label="Methodology" />
                  <NavLink href="/publications" label="Publications" />
                  <NavLink href="/citations" label="How to Cite" />
                </div>
              </ActionCard>

              {/* Two-column row for smaller cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {/* Join a research lane */}
                <ActionCard
                  color={SPECTRUM.cobalt}
                  title="Join a research lane"
                  description="Pick one lane that matches your expertise: measurement, validation, theoretical review, or AI alignment."
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
                    Choose a lane →
                  </Link>
                </ActionCard>

                {/* Collaborate */}
                <ActionCard
                  color={SPECTRUM.azure}
                  title="Collaborate"
                  description="Clear attribution, clear authorship expectations, clear boundaries, open science when possible."
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
