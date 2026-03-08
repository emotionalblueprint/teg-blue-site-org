import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RESEARCHER, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";

const SIDEBAR_SECTIONS = [
  { label: "Two Sites", href: "#two-sites", description: "How teg-blue.com (interactive tools) and teg-blue.org (open science) work together." },
  { label: "The Founder", href: "#the-founder", description: "Anna Paretas-Artacho — how TEG-Blue started, the empirical validation, and the research approach." },
  { label: "Research Identity", href: "#research-identity", description: "Open science, testable claims, invited corrections. What TEG-Blue is and is not." },
  { label: "Navigation", href: "#navigation", description: "Where to go next depending on what you need." },
];

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

      <PageLayout
        header={
          <ResearcherHero
            badge="ABOUT"
            title="About TEG-Blue"
            description="The first complete emotional technology system. An integrative framework connecting 139+ theories into testable hypotheses about emotional regulation. The originality is not in the individual theories — it is in the connections between them."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Intro */}
        <section style={{ marginTop: 32, marginBottom: 32 }}>
          <p style={bodyStyle}>
            <strong style={{ color: TEXT.primary }}>TEG-Blue</strong> stands for The Emotional Gradient Blueprint.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            And builds on the understanding that emotion is biological information — our nervous system communicating what matters, what&apos;s safe, and what needs to be seen.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            We track where it starts in the body, how it shapes identity, enters relationships, scales into systems, and how to understand it.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            It&apos;s a visual system: maps to see the pattern, tools to work with it, and a framework that connects what psychology, neuroscience, and sociology have been studying in fragments into one coherent architecture.
          </p>
        </section>

        {/* Two Sites */}
        <section id="two-sites" style={{ marginBottom: 32 }}>
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
        <section id="the-founder" style={{ marginBottom: 32 }}>
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

          <h3 style={subsectionHeading}>How it started</h3>
          <p style={bodyStyle}>
            TEG-Blue began with a single visual question: could Polyvagal Theory — Stephen Porges&apos; account of the nervous system&apos;s continuous orientation between safety and threat — be made into a navigable tool? The Inner Compass and the Four-Mode Gradient were the first answer. A needle. Four positions. Safety and threat as the poles.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            But explaining what Protection and Connection actually meant required more context than a model could hold. That context became Framework 1 — the biological foundation of the gradient, the nervous system&apos;s signalling language, the designed return.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            From there, each framework followed the research tradition that explained the next layer. Framework 2 drew from Internal Family Systems and Winnicott&apos;s True and False Self — the developmental account of how access to one&apos;s own emotional signal fails to form. Framework 3 drew from cognitive dissonance theory, psychoanalytic defense mechanisms, and Goffman&apos;s dramaturgical self — the architecture of false coherence, how identity forms around a stuck compass to make the stuckness invisible. Building that framework required connecting the nervous system state map to what psychology calls narcissism, the dark triad, and coercive control — not as personality categories but as gradient positions.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            One by one, each framework was built to explain a different layer of the same question: why does the nervous system lose its capacity to return? When the twelve frameworks were placed together, something that had not been visible in any single research tradition became visible across all of them: a gradient. A single continuous arc from biological regulation through developmental failure through cognitive replacement through collective systems — all the way to domination and back.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            The gradient was not designed. It emerged from following the evidence one layer at a time.
          </p>

          <h3 style={{ ...subsectionHeading, marginTop: 24 }}>Empirical validation</h3>
          <p style={bodyStyle}>
            TEG-Blue&apos;s validation study — a computational analysis of 10,000+ natural conflict narratives — was conducted as an initial empirical test of the Four-Mode Gradient&apos;s detectability in unstructured text, yielding inter-rater reliability of &kappa;=0.74. This is a beginning, not a conclusion. Five open research questions and four research directions are documented in the{" "}
            <Link href="/research-entry" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              Research Entry
            </Link>{" "}
            section for researchers who want to build on, challenge, or independently test the framework.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
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
        <section id="research-identity" style={{ marginBottom: 32 }}>
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

        {/* Navigation */}
        <section id="navigation" style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <NavLink href="/research-entry" label="Research Entry" />
            <NavLink href="/methodology" label="Methodology" />
            <NavLink href="/publications" label="Publications" />
            <NavLink href="/collaborate" label="Collaborate" />
          </div>
        </section>
      </PageLayout>

      <SiteFooter />
    </div>
  );
}

// ── Styles ──

const sectionHeading = {
  fontSize: 18,
  fontWeight: 600,
  color: RESEARCHER.accent,
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
