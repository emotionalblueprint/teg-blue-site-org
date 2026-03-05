import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, RESEARCHER, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero } from "@/src/components";

export const metadata = {
  title: "About the Author | TEG-Blue Research",
  description: "Anna Paretas-Artacho — independent researcher and systems designer. Author and architect of TEG-Blue, an integrative framework connecting 139+ established theories from neuroscience, psychology, and trauma research.",
  keywords: [
    "Anna Paretas-Artacho",
    "TEG-Blue author",
    "emotional technology researcher",
    "systems designer",
    "independent researcher",
    "integrative framework",
    "open science",
  ],
  alternates: {
    canonical: "https://teg-blue.org/about/author",
  },
  openGraph: {
    title: "About the Author — TEG-Blue Research",
    description: "Anna Paretas-Artacho — independent researcher and systems designer. 25+ years in systems thinking. Author of TEG-Blue.",
    url: "https://teg-blue.org/about/author",
    siteName: "TEG-Blue Research",
    type: "profile",
    locale: "en_US",
  },
};

export default function AuthorPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/about" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${SPACING.pagePadding} 60px`,
        }}
      >
        <ResearcherHero
          badge="AUTHOR AND ARCHITECT"
          title="Anna Paretas-Artacho"
          description="Independent researcher and systems designer based in Barcelona, with 25+ years of professional experience in systems thinking and visual design."
        />

        {/* The research problem */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            The research problem
          </h2>
          <p style={bodyStyle}>
            TEG-Blue began as a research problem: existing emotional intelligence frameworks explained individual components well — nervous system states, attachment patterns, cognitive bias, social hierarchies — but no architecture connected them. There was no structure that showed how the same regulatory logic operating in one person&apos;s nervous system could scale into collective behavior, institutional dynamics, and intergenerational transmission. That gap is what TEG-Blue was built to fill.
          </p>
        </section>

        {/* Methodology */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Methodology
          </h2>
          <p style={bodyStyle}>
            The methodology reflects a systems design background rather than a disciplinary one. Rather than extending a single theoretical tradition, the approach was integrative from the start — mapping structural relationships across 139+ established theories from neuroscience, trauma psychology, developmental psychology, sociology, and systems science, and testing whether a coherent underlying architecture could be found. The resulting framework, developed over approximately two years of intensive research, is documented openly so that the structural claims can be examined, contested, and tested independently.
          </p>
        </section>

        {/* Working outside institutions */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Working outside institutional constraints
          </h2>
          <p style={bodyStyle}>
            Working outside institutional constraints made certain things possible that might otherwise have been difficult: following connections across disciplinary boundaries without defending departmental paradigms, integrating polyvagal theory alongside attachment research alongside dual-process cognition because the evidence warranted it, not because of departmental alignment.
          </p>
        </section>

        {/* Validation */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Empirical validation
          </h2>
          <p style={bodyStyle}>
            TEG-Blue&apos;s validation study — a computational analysis of 10,000+ natural conflict narratives — was conducted as an initial empirical test of the Four-Mode Gradient&apos;s detectability in unstructured text, yielding inter-rater reliability of &kappa;=0.74. This is a beginning, not a conclusion. Five open research questions and four research directions are documented in the{" "}
            <Link href="/research-entry" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              Research Entry
            </Link>{" "}
            section for researchers who want to build on, challenge, or independently test the framework.
          </p>
        </section>

        {/* Stance */}
        <section style={{ marginBottom: 32 }}>
          <div
            style={{
              padding: "20px 24px",
              background: BG.card,
              borderRadius: 10,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: TEXT.secondary,
                lineHeight: 1.8,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              The framework is designed to be interrogated. Independent verification, alternative interpretations, and direct critique are more useful to this research than acceptance.
            </p>
          </div>
        </section>

        {/* Links */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Research identity
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
              <tbody>
                <IdentityRow label="ORCID" href="https://orcid.org/0009-0005-2394-7162" text="0009-0005-2394-7162" />
                <IdentityRow label="Zenodo" href="https://zenodo.org/records/18428907" text="DOI: 10.5281/zenodo.18428907" />
                <IdentityRow label="GitHub" href="https://github.com/emotionalblueprint" text="github.com/emotionalblueprint" />
                <IdentityRow label="Contact" href="mailto:research@teg-blue.org" text="research@teg-blue.org" />
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation */}
        <section style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <NavLink href="/research-entry" label="Research Entry" />
            <NavLink href="/methodology" label="Methodology" />
            <NavLink href="/publications" label="Publications" />
            <NavLink href="/about" label="About TEG-Blue" />
          </div>
        </section>

        {/* Footer note */}
        <footer style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// ── Styles ──

const bodyStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  maxWidth: 640,
  margin: 0,
};

// ── Helper Components ──

function IdentityRow({ label, href, text }) {
  const isEmail = href.startsWith("mailto:");
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td
        style={{
          padding: "12px 16px",
          fontSize: 12,
          fontWeight: 600,
          color: TEXT.muted,
          fontFamily: FONT.mono,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </td>
      <td style={{ padding: "12px 16px", fontSize: 14, color: TEXT.secondary }}>
        <a
          href={href}
          {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
          style={{ color: SPECTRUM.blue, textDecoration: "none" }}
        >
          {text}
        </a>
      </td>
    </tr>
  );
}

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "10px 18px",
        background: hexToRgba(RESEARCHER.accent, 0.1),
        color: RESEARCHER.accent,
        borderRadius: 6,
        fontWeight: 500,
        fontSize: 13,
        textDecoration: "none",
        border: `1px solid ${hexToRgba(RESEARCHER.accent, 0.2)}`,
      }}
    >
      {label} →
    </Link>
  );
}
