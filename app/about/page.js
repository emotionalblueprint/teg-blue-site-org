import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, MAIN_ORG, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "Who created TEG-Blue?",
    answer: "TEG-Blue was created by Anna Paretas-Artacho, an independent researcher and systems designer based in Barcelona with 25+ years of experience in systems thinking and visual design.",
  },
  {
    question: "What is the difference between teg-blue.org and teg-blue.com?",
    answer: "teg-blue.org is the open research hub for publications, methodology, frameworks, and collaboration. teg-blue.com is the application site with interactive tools and guided experiences for individuals and practitioners.",
  },
  {
    question: "Has TEG-Blue been validated?",
    answer: "An initial validation study analyzed 10,000+ natural conflict narratives, achieving inter-rater reliability of kappa = 0.74. De-escalators showed 78% higher rates of complexity markers than escalators. This is a beginning — five open research questions are documented for further validation.",
  },
  {
    question: "What scientific domains does TEG-Blue draw from?",
    answer: "TEG-Blue synthesizes established research from 47+ domains including polyvagal theory, attachment theory, affect regulation, social identity theory, moral development research, and neurodivergence research. The originality is in the integration, not the individual theories.",
  },
];

const SIDEBAR_SECTIONS = [
  { label: "The Core Premise", href: "#core-premise", description: "The foundational scientific claim and what makes it testable." },
  { label: "Validation", href: "#validation", description: "Initial empirical findings from 10,000+ natural conflict narratives." },
  { label: "Scientific Foundations", href: "#foundations", description: "47+ domains, 145+ source theories, and what the integration reveals." },
  { label: "Open Questions", href: "#open-questions", description: "Priority research directions for independent verification." },
  { label: "The Founder", href: "#the-founder", description: "Anna Paretas-Artacho — background and research identity." },
  { label: "Two Sites", href: "#two-sites", description: "Open research (.org) and interactive tools (.com)." },
];

export const metadata = {
  title: "About | TEG-Blue Research",
  description: "About TEG-Blue — an integrative architecture connecting 145+ theories from 47+ scientific domains into testable hypotheses about how the nervous system regulates. Initial validation on 10,000+ narratives.",
  keywords: [
    "TEG-Blue",
    "emotional technology",
    "Anna Paretas-Artacho",
    "emotional regulation",
    "open research",
    "integrative framework",
    "open science",
    "neuroscience psychology integration",
    "polyvagal theory",
    "attachment theory",
    "affect regulation",
    "emotional intelligence",
    "AI safety",
    "independent researcher",
    "validation study",
  ],
  alternates: {
    canonical: "https://teg-blue.org/about",
  },
  openGraph: {
    title: "About — TEG-Blue Research",
    description: "An integrative framework connecting 145+ theories from 47+ scientific domains. Initial validation on 10,000+ narratives. Open science, testable hypotheses, inviting collaboration.",
    url: "https://teg-blue.org/about",
    siteName: "TEG-Blue Research",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "About — TEG-Blue Research",
    description: "Open research developing an integrative emotional intelligence framework. 47+ domains. 145+ theories. 10,000+ narratives validated.",
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
            description="An integrative framework connecting 145+ theories from 47+ scientific domains into testable hypotheses about emotional regulation. The originality is not in the individual theories — it is in the connections between them."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Intro */}
        <section style={{ marginTop: 32, marginBottom: 32 }}>
          <p style={bodyStyle}>
            <strong style={{ color: TEXT.primary }}>TEG-Blue</strong> (The Emotional Gradient Blueprint) is a translation architecture that takes established research from neuroscience, psychology, sociology, and related fields and organizes it into a unified system for understanding emotional experience.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            It does not generate new theories. It reorganizes existing knowledge into a coherent, testable framework — accessible to researchers, practitioners, and AI systems alike.
          </p>
        </section>

        {/* Core Premise */}
        <section id="core-premise" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>The core premise</h2>

          <div
            style={{
              padding: "20px 24px",
              background: BG.card,
              borderRadius: 10,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.azure}`,
              marginBottom: 16,
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: TEXT.primary,
                lineHeight: 1.8,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Emotions are biological information about safety and threat — not irrational impulses to be managed or overcome.
            </p>
          </div>

          <p style={bodyStyle}>
            Applied consistently across individual, relational, institutional, and cultural scales, this premise reveals how living systems organize around perceived safety and threat.
          </p>

          <h3 style={{ ...subsectionHeading, marginTop: 20 }}>The core testable claim</h3>
          <div
            style={{
              padding: "16px 20px",
              background: hexToRgba(SPECTRUM.azure, 0.06),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.12)}`,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
              The key variable that predicts relational and behavioral outcomes is not a person&apos;s current nervous system state, but their <strong style={{ color: TEXT.primary }}>State Flexibility — capacity to return to physiological baseline when challenged</strong>. This capacity is measurable through complexity markers — signs of self-awareness, perspective-taking, and emotional differentiation in natural language.
            </p>
          </div>
        </section>

        {/* Validation */}
        <section id="validation" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Empirical validation</h2>

          <p style={bodyStyle}>
            An initial validation study — a computational analysis of 10,000+ natural conflict narratives (Reddit AITA posts) — tested whether the four nervous system states could be reliably detected in unstructured text.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
              marginTop: 16,
              marginBottom: 16,
            }}
          >
            {[
              { stat: "10,000+", label: "narratives analyzed" },
              { stat: "κ = 0.74", label: "inter-rater reliability" },
              { stat: "78%", label: "higher complexity markers in de-escalators" },
              { stat: "33.8%", label: "escalated toward Control/Domination" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: 16,
                  background: BG.card,
                  borderRadius: 8,
                  border: `1px solid ${BORDER.default}`,
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: 20, fontWeight: 700, color: SPECTRUM.azure, marginBottom: 4, fontFamily: FONT.mono }}>{item.stat}</p>
                <p style={{ fontSize: 11, color: TEXT.muted, lineHeight: 1.5 }}>{item.label}</p>
              </div>
            ))}
          </div>

          <p style={bodyStyle}>
            All four regulatory modes were successfully detected using polyvagal markers, contempt markers, and moral disengagement markers. Mode classifications correlated with independent community moral judgments.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            Published on Zenodo:{" "}
            <a href="https://zenodo.org/records/18428907" target="_blank" rel="noopener noreferrer" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              DOI: 10.5281/zenodo.18428907
            </a>
          </p>

          <div
            style={{
              padding: "16px 20px",
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
              marginTop: 16,
            }}
          >
            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
              This is a beginning, not a conclusion. The theoretical mapping is a working hypothesis — a starting point for deeper scholarly validation. Human researchers are needed to verify accuracy, correct errors, and deepen the analysis.
            </p>
          </div>
        </section>

        {/* Scientific Foundations */}
        <section id="foundations" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Scientific foundations</h2>

          <p style={bodyStyle}>
            The framework synthesizes established research from <strong style={{ color: TEXT.primary }}>47+ scientific domains</strong> into <strong style={{ color: TEXT.primary }}>12 integrative frameworks</strong> organized in three arcs:
          </p>

          <div style={{ marginTop: 16, marginBottom: 16 }}>
            {[
              {
                arc: "Individual (F1–F3)",
                desc: "How the nervous system evaluates safety, how identity forms through development, and how cognition compensates when the return path is missing.",
                domains: "Polyvagal theory, attachment theory, affect regulation, identity development, cognitive coherence",
              },
              {
                arc: "Collective (F4–F7)",
                desc: "How individual patterns become shared rules, worth hierarchies, perception biases, and how protection escalates to domination.",
                domains: "Social identity theory, implicit bias, moral development, power dynamics, institutional behavior",
              },
              {
                arc: "Repair & Complexity (F8–F12)",
                desc: "How awareness capacities rebuild, neurodivergent variation, generational transmission, paradox, and the two-system architecture underneath.",
                domains: "Neuroplasticity, neurodivergence research, epigenetics, dual-process theory, intergenerational transmission",
              },
            ].map((item) => (
              <div
                key={item.arc}
                style={{
                  padding: 16,
                  background: BG.card,
                  borderRadius: 8,
                  border: `1px solid ${BORDER.default}`,
                  marginBottom: 8,
                }}
              >
                <p style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>{item.arc}</p>
                <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 8 }}>{item.desc}</p>
                <p style={{ fontSize: 11, fontFamily: FONT.mono, color: TEXT.muted, lineHeight: 1.6 }}>{item.domains}</p>
              </div>
            ))}
          </div>

          <p style={bodyStyle}>
            Full theoretical mapping available at the{" "}
            <Link href="/scientific-foundations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              Scientific Foundations
            </Link>
            {" "}page, with 145+ source theories documented and cross-referenced.
          </p>
        </section>

        {/* Open Questions */}
        <section id="open-questions" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Open research questions</h2>

          <p style={{ ...bodyStyle, marginBottom: 16 }}>
            Five priority questions for independent researchers:
          </p>

          <div
            style={{
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
            }}
          >
            {[
              "Can complexity markers be standardized as a psychometric instrument?",
              "What do escalation pathways look like in natural language?",
              "Can the four-mode classification be reproduced by independent researchers?",
              "Does nervous system state shape moral perception?",
              "Can the emotional tools be validated as psychometric instruments?",
            ].map((q, i) => (
              <div
                key={i}
                style={{
                  padding: "12px 16px",
                  borderTop: i > 0 ? `1px solid ${BORDER.default}` : "none",
                  display: "flex",
                  gap: 12,
                  alignItems: "baseline",
                }}
              >
                <span style={{ fontSize: 11, fontFamily: FONT.mono, fontWeight: 700, color: SPECTRUM.azure, flexShrink: 0 }}>Q{i + 1}</span>
                <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>{q}</p>
              </div>
            ))}
          </div>

          <p style={{ ...bodyStyle, marginTop: 12 }}>
            Full details and four research directions at{" "}
            <Link href="/research-entry" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              Research Entry
            </Link>.
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
              marginBottom: 16,
            }}
          >
            <h3 style={{ fontSize: 17, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              Anna Paretas-Artacho
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
              Independent researcher and systems designer based in Barcelona, with 25+ years of professional experience in systems thinking and visual design. The Emotional Somatic System emerged through building each framework one by one — nearly two years of independent development creating an integrated system mapping how nervous system states shape behaviour.
            </p>
          </div>

          {/* Research identity */}
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

        {/* Two Sites */}
        <section id="two-sites" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Two sites, one mission</h2>
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
                The open research hub. Publications, methodology, frameworks, open questions, collaboration. All content freely available under CC-BY-NC-SA-4.0.
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
                The application site. 16+ interactive tools for pattern recognition — gradient scales, signal tests, discernment tools, and feelings navigators.
              </p>
              <p style={{ fontSize: 12, fontFamily: FONT.mono, color: TEXT.muted }}>
                For everyday people, coaches, therapists, and organizational professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <NavLink href="/research-entry" label="Research Entry" />
            <NavLink href="/methodology" label="Methodology" />
            <NavLink href="/publications" label="Publications" />
            <NavLink href="/scientific-foundations" label="Theory Map" />
            <NavLink href="/collaborate" label="Collaborate" />
            <a
              href="https://teg-blue.com/emotional-tools"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 18px",
                background: hexToRgba(SPECTRUM.azure, 0.1),
                color: SPECTRUM.azure,
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 13,
                textDecoration: "none",
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.2)}`,
              }}
            >
              Emotional Tools (teg-blue.com) →
            </a>
          </div>
        </section>
      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About TEG-Blue",
            url: "https://teg-blue.org/about",
            description: "About TEG-Blue — an integrative architecture connecting 145+ theories from 47+ scientific domains.",
            inLanguage: "en",
            mainEntity: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              jobTitle: "Founder & Lead Researcher",
              description: "Independent researcher and systems designer. Creator of TEG-Blue, an integrative emotional technology framework synthesizing 47+ scientific domains.",
              url: "https://teg-blue.org/about",
              sameAs: [
                "https://orcid.org/0009-0005-2394-7162",
                "https://github.com/emotionalblueprint",
                "https://zenodo.org/records/18428907",
              ],
              knowsAbout: [
                "Emotional Technology",
                "Nervous System Regulation",
                "Polyvagal Theory",
                "Attachment Theory",
                "Systems Design",
                "AI Safety",
              ],
              affiliation: {
                "@type": "Organization",
                name: "TEG-Blue Research",
                url: "https://teg-blue.org",
              },
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "About TEG-Blue | TEG-Blue Research",
              url: "https://teg-blue.org/about",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ── Styles ──

const sectionHeading = {
  fontSize: 18,
  fontWeight: 600,
  color: MAIN_ORG.accent,
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
        background: hexToRgba(MAIN_ORG.accent, 0.1),
        color: MAIN_ORG.accent,
        borderRadius: 6,
        fontWeight: 500,
        fontSize: 13,
        textDecoration: "none",
        border: `1px solid ${hexToRgba(MAIN_ORG.accent, 0.2)}`,
      }}
    >
      {label} →
    </Link>
  );
}
