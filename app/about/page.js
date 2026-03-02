import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, PRIMARY } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

const tableCellStyle = {
  padding: "12px 16px",
  fontSize: 14,
  color: TEXT.secondary,
};

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
    "AI safety"
  ],
  alternates: {
    canonical: "https://teg-blue.org/about",
  },
  openGraph: {
    title: "About — TEG-Blue Research Consortium",
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
          padding: "32px 24px 60px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 12,
              letterSpacing: "-0.02em",
            }}
          >
            About
          </h1>
        </header>

        {/* What TEG-Blue is */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What TEG-Blue is
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12, maxWidth: 640 }}>
            TEG-Blue is a visual mapping system designed to make emotional patterns measurable, testable, and usable across individuals, relationships, institutions, and AI systems.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12, maxWidth: 640 }}>
            It builds on existing research across nervous system regulation, attachment, development, trauma, social psychology, and language.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, maxWidth: 640 }}>
            The originality is not in claiming a new theory for each domain. It is in building an integrated structure that makes the connections explicit, operational, and testable.
          </p>
        </section>

        {/* How TEG-Blue Began */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            How TEG-Blue began
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12, maxWidth: 640 }}>
            In April 2024, my life collapsed. I walked away from a deeply harmful relationship with nothing, while navigating trauma and emotional manipulation. What followed wasn't recovery. It was survival.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12, maxWidth: 640 }}>
            Fueled by trauma, ADHD, and a desperate need to understand what had happened to me, I fell into hyperfocus. I read everything I could find: psychology, neuroscience, trauma research, attachment, family systems, emotional abuse. And then something clicked. I started to see the hidden logic behind the patterns I had lived through. Not only in the relationship I'd left, but across my entire life.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12, maxWidth: 640 }}>
            I realized I'd been reading emotional patterns since childhood, fluent in a language I didn't even know had a name. What looked like personal chaos was often systemic. The patterns weren't unique to me. They were recognizable dynamics that show up everywhere, but rarely get mapped with precision.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, maxWidth: 640 }}>
            So I did what I've always done. I made it visible. I started mapping and reverse-engineering the patterns. What began as survival sketches became a structured system. Over a year of intensive, solitary work, it crystallized into TEG-Blue.
          </p>
        </section>

        {/* Two Sites */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Two sites
          </h2>
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
              <p style={{ fontSize: 12, fontFamily: FONT.mono, color: TEXT.tertiary }}>
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
              <p style={{ fontSize: 12, fontFamily: FONT.mono, color: TEXT.tertiary }}>
                For everyday people, coaches, therapists, and organizational professionals.
              </p>
            </div>
          </div>
        </section>

        {/* The Founder */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            The founder
          </h2>
          <div
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: 10,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
            }}
          >
            <h3 style={{ fontSize: 17, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              Anna Paretas-Artacho
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              Anna developed TEG-Blue over nearly two years of independent research, drawing on a lifetime of pattern observation, systems thinking, personal experience, and cross-disciplinary reading.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              The Four-Mode Gradient was not designed first and then explained. It emerged through building each Framework, one by one, to explain patterns she had lived through and witnessed. When the pieces were placed together, the gradient became visible.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              The theoretical mapping is a working hypothesis — a starting point for deeper scholarly validation. Human researchers are needed to verify accuracy, correct errors, and deepen the analysis.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 13 }}>
              <a
                href="https://orcid.org/0009-0005-2394-7162"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: PRIMARY, textDecoration: "none" }}
              >
                ORCID →
              </a>
              <a
                href="https://teg-blue.com/about-the-author"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: PRIMARY, textDecoration: "none" }}
              >
                Full bio on teg-blue.com →
              </a>
            </div>
          </div>
        </section>

        {/* Research identity */}
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
                <tr>
                  <td style={{ ...tableCellStyle, color: TEXT.tertiary, fontWeight: 500 }}>ORCID</td>
                  <td style={{ ...tableCellStyle }}>
                    <a
                      href="https://orcid.org/0009-0005-2394-7162"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: PRIMARY, textDecoration: "none" }}
                    >
                      0009-0005-2394-7162
                    </a>
                  </td>
                </tr>
                <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
                  <td style={{ ...tableCellStyle, color: TEXT.tertiary, fontWeight: 500 }}>Zenodo</td>
                  <td style={{ ...tableCellStyle }}>
                    <a
                      href="https://zenodo.org/records/18428907"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: PRIMARY, textDecoration: "none" }}
                    >
                      DOI: 10.5281/zenodo.18428907
                    </a>
                  </td>
                </tr>
                <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
                  <td style={{ ...tableCellStyle, color: TEXT.tertiary, fontWeight: 500 }}>GitHub</td>
                  <td style={{ ...tableCellStyle }}>
                    <a
                      href="https://github.com/emotionalblueprint"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: PRIMARY, textDecoration: "none" }}
                    >
                      github.com/emotionalblueprint
                    </a>
                  </td>
                </tr>
                <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
                  <td style={{ ...tableCellStyle, color: TEXT.tertiary, fontWeight: 500 }}>Contact</td>
                  <td style={{ ...tableCellStyle }}>
                    <a
                      href="mailto:research@teg-blue.org"
                      style={{ color: PRIMARY, textDecoration: "none" }}
                    >
                      research@teg-blue.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* License */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            License
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
            All content on this site is available under{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: PRIMARY }}
            >
              CC BY-NC-SA 4.0
            </a>{" "}
            unless otherwise noted. Attribution required. Non-commercial use only. Share-alike.
          </p>
        </section>

        {/* Footer note */}
        <footer style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.tertiary, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}
