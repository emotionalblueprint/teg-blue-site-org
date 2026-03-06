import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, RESEARCHER, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero } from "@/src/components";

export const metadata = {
  title: "About | TEG-Blue Emotional Technology",
  description: "About TEG-Blue — the first complete emotional technology system. Founded by Anna Paretas-Artacho. An integrative framework connecting 139+ theories from neuroscience, psychology, and sociology into testable hypotheses about emotional regulation.",
  keywords: [
    "TEG-Blue",
    "emotional technology",
    "Anna Paretas-Artacho",
    "emotional regulation",
    "research consortium",
    "integrative framework",
    "open science",
    "neuroscience psychology integration",
    "trauma research",
    "emotional intelligence",
    "AI safety",
    "systems designer",
    "independent researcher",
  ],
  alternates: {
    canonical: "https://teg-blue.org/about",
  },
  openGraph: {
    title: "About — TEG-Blue Research",
    description: "An integrative framework connecting 139+ theories. Founded by Anna Paretas-Artacho. Open science, testable hypotheses, inviting collaboration.",
    url: "https://teg-blue.org/about",
    siteName: "TEG-Blue Research",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "About — TEG-Blue Research",
    description: "Research consortium developing an integrative emotional intelligence framework.",
  },
};

export default function AboutPage() {
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
          badge="ABOUT"
          title="About TEG-Blue"
          description="The first complete emotional technology system. An integrative framework connecting 139+ theories into testable hypotheses about emotional regulation. The originality is not in the individual theories — it is in the connections between them."
        />

        {/* Two Sites */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Two sites</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <div
              style={{
                padding: 20,
                background: BG.card,
                borderRadius: 8,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `3px solid ${SPECTRUM.azure}`,
              }}
            >
              <h3 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                teg-blue.org (you are here)
              </h3>
              <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, marginBottom: 8 }}>
                The open research hub. Publications, methodology, frameworks, open questions, collaboration.
              </p>
              <p style={{ fontSize: 12, fontFamily: FONT.mono, color: TEXT.muted }}>
                For researchers, academics, clinicians, and AI safety researchers.
              </p>
            </div>
            <div
              style={{
                padding: 20,
                background: BG.card,
                borderRadius: 8,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `3px solid ${SPECTRUM.indigo}`,
              }}
            >
              <h3 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                teg-blue.com
              </h3>
              <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, marginBottom: 8 }}>
                The application site. Interactive tools, guided experiences, and practical instruments for individuals and practitioners.
              </p>
              <p style={{ fontSize: 12, fontFamily: FONT.mono, color: TEXT.muted }}>
                For everyday people, coaches, therapists, and organizational professionals.
              </p>
            </div>
          </div>
        </section>

        {/* The Founder */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>The founder</h2>
          <div
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: 10,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
              marginBottom: 24,
            }}
          >
            <h3 style={{ fontSize: 17, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              Anna Paretas-Artacho
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
              Independent researcher and systems designer based in Barcelona, with 25+ years of professional experience in systems thinking and visual design.
            </p>
          </div>

          <h3 style={subsectionHeading}>The research problem</h3>
          <p style={bodyStyle}>
            TEG-Blue began as a research problem: existing emotional intelligence frameworks explained individual components well — nervous system states, attachment patterns, cognitive bias, social hierarchies — but no architecture connected them. There was no structure that showed how the same regulatory logic operating in one person&apos;s nervous system could scale into collective behavior, institutional dynamics, and intergenerational transmission. That gap is what TEG-Blue was built to fill.
          </p>

          <h3 style={{ ...subsectionHeading, marginTop: 24 }}>Methodology</h3>
          <p style={bodyStyle}>
            The methodology reflects a systems design background rather than a disciplinary one. Rather than extending a single theoretical tradition, the approach was integrative from the start — mapping structural relationships across 139+ established theories from neuroscience, trauma psychology, developmental psychology, sociology, and systems science, and testing whether a coherent underlying architecture could be found. The resulting framework, developed over approximately two years of intensive research, is documented openly so that the structural claims can be examined, contested, and tested independently.
          </p>

          <h3 style={{ ...subsectionHeading, marginTop: 24 }}>Working outside institutional constraints</h3>
          <p style={bodyStyle}>
            Working outside institutional constraints made certain things possible that might otherwise have been difficult: following connections across disciplinary boundaries without defending departmental paradigms, integrating polyvagal theory alongside attachment research alongside dual-process cognition because the evidence warranted it, not because of departmental alignment.
          </p>

          <h3 style={{ ...subsectionHeading, marginTop: 24 }}>Empirical validation</h3>
          <p style={bodyStyle}>
            TEG-Blue&apos;s validation study — a computational analysis of 10,000+ natural conflict narratives — was conducted as an initial empirical test of the Four-Mode Gradient&apos;s detectability in unstructured text, yielding inter-rater reliability of &kappa;=0.74. This is a beginning, not a conclusion. Five open research questions and four research directions are documented in the{" "}
            <Link href="/research-entry" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              Research Entry
            </Link>{" "}
            section for researchers who want to build on, challenge, or independently test the framework.
          </p>

          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginTop: 12, maxWidth: 640 }}>
            The Four-Mode Gradient was not designed first and then explained. It emerged through building each Framework, one by one, to explain patterns she had lived through and witnessed. When the pieces were placed together, the gradient became visible.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginTop: 12, maxWidth: 640 }}>
            The theoretical mapping is a working hypothesis — a starting point for deeper scholarly validation. Human researchers are needed to verify accuracy, correct errors, and deepen the analysis.
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

        {/* Research identity */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Research identity</h2>
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

        {/* License */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>License</h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
            All content on this site is available under{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: SPECTRUM.blue }}
            >
              CC BY-NC-SA 4.0
            </a>{" "}
            unless otherwise noted. Attribution required. Non-commercial use only. Share-alike.
          </p>
        </section>

        {/* Navigation */}
        <section style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <NavLink href="/research-entry" label="Research Entry" />
            <NavLink href="/methodology" label="Methodology" />
            <NavLink href="/publications" label="Publications" />
            <NavLink href="/collaborate" label="Collaborate" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

// ── Styles ──

const sectionHeading = {
  fontSize: 18,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 12,
};

const subsectionHeading = {
  fontSize: 15,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 8,
};

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
