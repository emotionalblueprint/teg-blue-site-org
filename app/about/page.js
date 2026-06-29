import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, MAIN_ORG, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "Who created TEG-Blue?",
    answer: "TEG-Blue was created by Anna Paretas-Artacho, working independently from Barcelona, with 25+ years of professional practice in visual communication and systems thinking.",
  },
  {
    question: "What is the difference between teg-blue.org and teg-blue.com?",
    answer: "teg-blue.org is the public framework and research-grounding home for TEG-Blue. teg-blue.com is the practical tools site with interactive tools and guided experiences.",
  },
  {
    question: "What research evidence exists so far?",
    answer: "One initial computational study analyzed 10,000+ natural conflict narratives using markers drawn from established psychological constructs. It reported detectable regulatory-state patterns and higher complexity-marker rates in de-escalation patterns. This is a beginning, not validation of the whole framework; open research questions remain documented for further testing.",
  },
  {
    question: "What scientific domains does TEG-Blue draw from?",
    answer: "TEG-Blue draws from established research in affective neuroscience, polyvagal theory, attachment research, stress physiology, trauma studies, cognitive science, communication models, and educational regulation tools. The originality is in the Gradient-based organization, not the individual source fields.",
  },
];

const SIDEBAR_SECTIONS = [
  { label: "The Core Premise", href: "#core-premise", description: "The foundational working proposition and what makes it testable." },
  { label: "Research Status", href: "#research-status", description: "Initial computational findings from 10,000+ natural conflict narratives." },
  { label: "Established Research", href: "#foundations", description: "Source fields behind the public Nervous System Gradient." },
  { label: "Open Questions", href: "#open-questions", description: "Priority research directions for independent verification." },
  { label: "The Founder", href: "#the-founder", description: "Anna Paretas-Artacho — background and research identity." },
  { label: "Two Sites", href: "#two-sites", description: "Framework/research grounding (.org) and practical tools (.com)." },
];

export const metadata = {
  title: "About | TEG-Blue",
  description: "About TEG-Blue — The Emotional Gradient Blueprint, a layered visual framework mapping how emotions, nervous systems, survival strategies, identity, and social patterns form and evolve.",
  keywords: [
    "TEG-Blue",
    "emotional technology",
    "Anna Paretas-Artacho",
    "emotional regulation",
    "research grounding",
    "integrative framework",
    "source traces",
    "neuroscience psychology integration",
    "polyvagal theory",
    "attachment theory",
    "affect regulation",
    "emotional intelligence",
    "computational applications",
    "working questions",
  ],
  alternates: {
    canonical: "https://teg-blue.org/about",
  },
  openGraph: {
    title: "About — TEG-Blue",
    description: "The Emotional Gradient Blueprint: a layered visual framework with research grounding, source traces, and working questions.",
    url: "https://teg-blue.org/about",
    siteName: "TEG-Blue",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "About — TEG-Blue",
    description: "Public framework and research-grounding home for The Emotional Gradient Blueprint.",
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
            description="The Emotional Gradient Blueprint: a layered visual framework for mapping how emotions, nervous systems, survival strategies, identity, and social patterns form and evolve."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Intro */}
        <section style={{ marginTop: 32, marginBottom: 32 }}>
          <p style={bodyStyle}>
            <strong style={{ color: TEXT.primary }}>TEG-Blue</strong> (The Emotional Gradient Blueprint) is a layered visual framework that takes established research from neuroscience, psychology, sociology, and related fields and organizes it into a working map of emotional experience, nervous-system states, survival strategies, identity, and social patterns.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            It does not claim to replace the theories it draws from. It reorganizes existing knowledge into a coherent, testable framework with source traces, working questions, and research grounding.
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

          <h3 style={{ ...subsectionHeading, marginTop: 20 }}>The core working proposition</h3>
          <div
            style={{
              padding: "16px 20px",
              background: hexToRgba(SPECTRUM.azure, 0.06),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.12)}`,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
              TEG-Blue proposes that a key variable in relational and behavioral outcomes may be <strong style={{ color: TEXT.primary }}>State Flexibility — capacity to return to physiological baseline when challenged</strong>, not only a person&apos;s current nervous system state. Complexity markers may offer one language-based trace of self-awareness, perspective-taking, and emotional differentiation.
            </p>
          </div>
        </section>

        {/* Research Status */}
        <section id="research-status" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Research status</h2>

          <p style={bodyStyle}>
            An initial computational study analyzed 10,000+ natural conflict narratives (Reddit AITA posts) to test whether regulatory-state markers could be detected in unstructured text.
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
              { stat: "Pre-registered", label: "on OSF (osf.io/f4x6y)" },
              { stat: "+78%", label: "higher complexity markers in de-escalators" },
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
            The study reported detectable patterns using markers drawn from polyvagal theory, contempt research, and moral disengagement theory. Mode classifications correlated with independent community moral judgments.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            Published on Zenodo:{" "}
            <a href="https://zenodo.org/records/19472342" target="_blank" rel="noopener noreferrer" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              DOI: 10.5281/zenodo.19472342
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
              This is a beginning, not a conclusion. The theoretical mapping is a working hypothesis — a starting point for deeper scholarly testing. Human researchers are needed to verify accuracy, correct errors, replicate findings, and deepen the analysis.
            </p>
          </div>
        </section>

        {/* Established Research */}
        <section id="foundations" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Established research</h2>

          <p style={bodyStyle}>
            The public Gradient is grounded in established source fields. The page keeps those fields separate from TEG-Blue&apos;s original synthesis, so readers can see what comes from cited research and what is proposed as Gradient placement.
          </p>

          <div style={{ marginTop: 16, marginBottom: 16 }}>
            {[
              {
                arc: "Nervous-system grounding",
                desc: "How safety, threat, mobilisation, shutdown, interoception, and stress physiology shape available capacity.",
                domains: "Polyvagal theory, affective neuroscience, interoception, stress physiology, trauma research",
              },
              {
                arc: "Development and relationship",
                desc: "How early relational experience, attachment, identity adaptation, and repair conditions shape emotional patterns over time.",
                domains: "Attachment theory, developmental psychology, object relations, self psychology, interpersonal neurobiology",
              },
              {
                arc: "Cognition, communication, and tools",
                desc: "How naming, reframing, communication, emotional literacy, and state-dependent thinking become usable public tools.",
                domains: "CBT, NVC, Plutchik's taxonomy, Zones of Regulation, cognitive dissonance, emotion science",
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
            The current public source map is available at the{" "}
            <Link href="/scientific-foundations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              Scientific Foundations
            </Link>
            {" "}page, with framework-specific grounding held back until those pages return.
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
              "Can the emotional tools be psychometrically tested as instruments?",
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
            Full details and four research directions are documented in the research entry point.
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
              Founder and creator of TEG-Blue, working independently from Barcelona, with 25+ years of professional practice in visual communication and systems thinking. The Emotional Somatic System emerged through building each framework one by one — nearly two years of independent development creating an integrated system mapping how nervous system states shape behaviour.
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
                <IdentityRow label="Zenodo" href="https://zenodo.org/records/19472342" text="DOI: 10.5281/zenodo.19472342" />
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
              The public framework and research-grounding home. Methodology, source traces, scientific foundations, publications, working questions, and collaboration materials belong here when live.
              </p>
              <p style={{ fontSize: 12, fontFamily: FONT.mono, color: TEXT.muted }}>
                For researchers, academics, practitioners, and applied-tool collaborators.
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
                The practical tools site. Interactive tools for pattern recognition — gradient scales, signal tests, discernment tools, and feelings navigators.
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
            <NavLink href="/publications" label="Publications" />
            <NavLink href="/scientific-foundations" label="Established Research" />
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
            description: "About TEG-Blue — The Emotional Gradient Blueprint, a layered visual framework with research grounding and source traces.",
            inLanguage: "en",
            mainEntity: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              jobTitle: "Founder and creator of TEG-Blue",
              description: "Founder and creator of TEG-Blue, The Emotional Gradient Blueprint. Independent · Barcelona.",
              url: "https://teg-blue.org/about",
              sameAs: [
                "https://orcid.org/0009-0005-2394-7162",
                "https://github.com/emotionalblueprint",
                "https://zenodo.org/records/19472342",
              ],
              knowsAbout: [
                "Emotional Technology",
                "Nervous System Regulation",
                "Polyvagal Theory",
                "Attachment Theory",
                "Systems Design",
                "Computational Applications",
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
              name: "About TEG-Blue | TEG-Blue",
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
