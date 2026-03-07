import Link from "next/link";
import dynamic from "next/dynamic";
import { generateResearchHubJsonLd } from "@/src/lib/jsonld";
import { BG, FONT, TEXT, BORDER, SPECTRUM, RESEARCHER, PATTERN_GRADIENT, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout } from "@/src/components";

const EmotionWaveSection = dynamic(() => import("@/src/components/EmotionWaveSection"), { ssr: false });

const SIDEBAR_SECTIONS = [
  { label: "What TEG-Blue Is", description: "The first complete emotional technology system. 139+ theories connected into testable hypotheses about emotional regulation." },
  { label: "Empirical Evidence", description: "The four-mode gradient tested against 10,000+ natural conflict narratives. Key findings and validation metrics." },
  { label: "The 12 Frameworks", description: "Three arcs — Individual, Collective, Repair — explaining how emotional patterns form, scale, and change." },
  { label: "Work With the Material", description: "Cite it, use the data, test the claims, read the source theories. Open science, open access." },
];

export const metadata = {
  title: "TEG-Blue | Emotional Technology Research",
  description: "How does the nervous system shape what we feel, think, and do? TEG-Blue maps 12 frameworks connecting 139+ established theories from neuroscience, psychology, and trauma research. Open science — everything published, everything testable, everything open access.",
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

        <PageLayout sidebarSections={SIDEBAR_SECTIONS}>
          {/* ── Hero ── */}
          <section style={{ paddingTop: "clamp(20px, 4vw, 32px)", paddingBottom: "clamp(16px, 3vw, 24px)" }}>
            {/* Badge pill */}
            <div
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: 100,
                fontSize: 10,
                fontWeight: 700,
                fontFamily: FONT.mono,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: RESEARCHER.accent,
                backgroundColor: hexToRgba(RESEARCHER.accent, 0.15),
                border: `1px solid ${hexToRgba(RESEARCHER.accent, 0.3)}`,
                marginBottom: 24,
              }}
            >
              139+ Established Theories, One Integrative Framework
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(26px, 5vw, 36px)",
                fontWeight: 700,
                margin: "0 0 12px",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                background: PATTERN_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Connecting Cognition with Emotional Awareness
            </h1>

            {/* Lead description */}
            <p
              style={{
                fontSize: 15,
                color: TEXT.secondary,
                lineHeight: 1.7,
                margin: "0 0 10px",
                maxWidth: 640,
              }}
            >
              How does the nervous system shape what we feel, think, and do? TEG-Blue maps 12 frameworks into visual models that make emotional patterns visible, measurable, and testable — from individual regulation to systemic dynamics.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
              <Link
                href="/research-entry"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  background: RESEARCHER.accent,
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
                  background: hexToRgba(RESEARCHER.accent, 0.1),
                  color: RESEARCHER.accent,
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                  border: `1px solid ${hexToRgba(RESEARCHER.accent, 0.2)}`,
                }}
              >
                Read the Validation Study
              </Link>
            </div>

            {/* Accent bar separator */}
            <div
              style={{
                marginTop: "clamp(20px, 4vw, 32px)",
                height: 3,
                borderRadius: 2,
                background: PATTERN_GRADIENT,
              }}
              aria-hidden="true"
            />
          </section>

          {/* ── Emotion Wave Animation ── */}
          <EmotionWaveSection />

          {/* ── The Framework ── */}
          <section style={{ marginBottom: "clamp(28px, 5vw, 48px)" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
              What TEG-Blue is
            </h2>

            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 640 }}>
              The first complete emotional technology system. An integrative framework connecting 139+ theories into testable hypotheses about emotional regulation.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              <FrameworkCard
                color={SPECTRUM.indigo}
                label="3 MODELS"
                title="Compass, Calibration & Biology"
                description="The measurement instruments. M1 maps four nervous system states on a continuous gradient. M2 maps the three awareness capacities that calibrate the compass. M3 maps the physiological sequence that runs when the emotional cycle doesn't complete."
                href="/models"
                linkText="See the Models →"
              />
              <FrameworkCard
                color={SPECTRUM.cobalt}
                label="12 FRAMEWORKS"
                title="Individual · Collective · Repair"
                description="The explanatory architecture. Three arcs explaining why modes exist, how individual patterns scale into social structures, and what makes change possible. Each framework integrates established research traditions."
                href="/frameworks-map"
                linkText="See the Frameworks →"
              />
            </div>

            <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 16, lineHeight: 1.6 }}>
              The full system overview, including how the layers connect, is at{" "}
              <Link href="/foundations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>System Overview</Link>.
              The 139+ source theories are documented at{" "}
              <Link href="/scientific-foundations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>Scientific Foundations</Link>.
            </p>
          </section>

          {/* ── Validation Evidence ── */}
          <section style={{ marginBottom: "clamp(28px, 5vw, 48px)" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              Empirical evidence
            </h2>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 640 }}>
              The four-mode gradient has been tested against 10,000+ natural conflict narratives. Here are the key findings.
            </p>
          </section>

          <section style={{ marginBottom: "clamp(28px, 5vw, 48px)" }}>
            <div
              style={{
                background: gradientCardBg(RESEARCHER.accent),
                borderRadius: 10,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `3px solid ${RESEARCHER.accent}`,
                padding: "24px 28px",
              }}
            >
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
                Empirical Validation — Four-Mode Gradient Framework
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 16 }}>
                <MetricCard value="10,000+" label="natural conflict narratives analyzed" />
                <MetricCard value="κ = 0.74" label="inter-rater reliability" />
                <MetricCard value="+78%" label="complexity markers in de-escalators" />
              </div>

              <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
                Computational analysis of unstructured text. Four regulatory modes reliably detected. De-escalators showed significantly higher rates of self-awareness, perspective-taking, and emotional differentiation. Mode classifications correlated with independent community moral judgments.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  <Link
                    href="/publications"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "10px 18px",
                      background: RESEARCHER.accent,
                      color: "#fff",
                      borderRadius: 6,
                      fontWeight: 500,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    Read the study →
                  </Link>
                  <Link
                    href="/methodology"
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
                    See methodology
                  </Link>
                </div>
                <span style={{ fontSize: 12, color: TEXT.muted, fontFamily: FONT.mono }}>
                  DOI: 10.5281/zenodo.18428907
                </span>
              </div>
            </div>
          </section>

          {/* ── The 12 Frameworks with Entry Points ── */}
          <section style={{ marginBottom: "clamp(28px, 5vw, 48px)" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              The 12 frameworks
            </h2>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24, maxWidth: 640 }}>
              Three arcs explaining how emotional patterns form, scale into social structures, and how change becomes possible. Each framework connects to established research traditions — find your entry point below.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Arc 1: Individual */}
              <FrameworkArc
                label="ARC 1 · INDIVIDUAL"
                description="How the nervous system evaluates safety, calibrates through development, and what happens when cognition compensates"
                color={SPECTRUM.indigo}
                frameworks={[
                  { id: "F1", label: "Emotions as Biological Information", href: "/framework/f1-emotional-gradient", entry: "Polyvagal theory, affective neuroscience, interoception" },
                  { id: "F2", label: "Awareness Teaches Awareness", href: "/framework/f2-awareness-calibration", entry: "Attachment theory, developmental psychology, mentalization" },
                  { id: "F3", label: "Adult Cognition & False Coherence", href: "/framework/f3-false-coherence", entry: "Cognitive science, epistemic vigilance, motivated reasoning" },
                ]}
              />

              {/* Arc 2: Collective */}
              <FrameworkArc
                label="ARC 2 · COLLECTIVE"
                description="How individual protective patterns scale into shared rules, hierarchies, perception biases, and systemic domination"
                color={SPECTRUM.cobalt}
                frameworks={[
                  { id: "F4", label: "Rules Regulate", href: "/framework/f4-rules-regulate", entry: "Social norms, institutional theory, moral foundations" },
                  { id: "F5", label: "Worth Hierarchies Regulate", href: "/framework/f5-worth-hierarchies", entry: "Social hierarchy, power dynamics, social dominance theory" },
                  { id: "F6", label: "Bias Regulates", href: "/framework/f6-bias-regulates", entry: "Implicit bias, perception research, stereotype threat" },
                  { id: "F7", label: "Domination Regulates", href: "/framework/f7-domination-regulates", entry: "Coercive control, authoritarianism, moral disengagement" },
                ]}
              />

              {/* Arc 3: Repair and Complexity */}
              <FrameworkArc
                label="ARC 3 · REPAIR AND COMPLEXITY"
                description="How awareness rebuilds, how variation works, and the architecture underneath"
                color={SPECTRUM.blue}
                frameworks={[
                  { id: "F8", label: "Repairing Awareness", href: "/framework/f8-repairing-awareness", entry: "Trauma recovery, therapeutic process, post-traumatic growth" },
                  { id: "F9", label: "Neurodivergence as Variation", href: "/framework/f9-neurodivergence-variation", entry: "Neurodiversity, ADHD, autism, sensory processing differences" },
                  { id: "F10", label: "Rebuilding Generational Bridges", href: "/framework/f10-generational-bridges", entry: "Intergenerational trauma, epigenetics, family systems" },
                  { id: "F11", label: "The Emotional Paradoxes", href: "/framework/f11-emotional-paradoxes", entry: "Paradox theory, dialectical thinking, complexity science" },
                  { id: "F12", label: "The Two Information Systems", href: "/framework/f12-two-information-systems", entry: "Dual-process theory, embodied cognition, predictive processing" },
                ]}
              />
            </div>
          </section>

          {/* ── Open Science ── */}
          <section style={{ marginBottom: "clamp(28px, 5vw, 48px)" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
              Work with the material
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <OpenItem label="Cite it" description="Full citation format and examples" href="/citations" />
              <OpenItem label="Use the data" description="Anonymized conflict narratives, emotional gradient data" href="/publications" />
              <OpenItem label="Test the claims" description="Five open research questions, four research directions" href="/research-entry" />
              <OpenItem label="Read the source theories" description="139+ established theories, credited and documented" href="/scientific-foundations" />
            </div>
          </section>

        </PageLayout>

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

// ── Helper Components ──

function MetricCard({ value, label }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: TEXT.primary,
          fontFamily: FONT.mono,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 11,
          color: TEXT.muted,
          marginTop: 4,
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function FrameworkCard({ color, label, title, description, href, linkText }) {
  return (
    <div
      style={{
        background: gradientCardBg(color),
        borderRadius: 10,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
        padding: "20px 24px",
      }}
    >
      <p
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontFamily: FONT.mono,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: color,
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 14 }}>
        {description}
      </p>
      <Link
        href={href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 13,
          color: color,
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        {linkText}
      </Link>
    </div>
  );
}

function FrameworkArc({ label, description, color, frameworks }) {
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <p
          style={{
            fontSize: 10,
            fontWeight: 600,
            fontFamily: FONT.mono,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: color,
            marginBottom: 4,
          }}
        >
          {label}
        </p>
        <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {frameworks.map((fw) => (
          <Link
            key={fw.id}
            href={fw.href}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              padding: "10px 14px",
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${hexToRgba(color, 0.5)}`,
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: FONT.mono,
                fontSize: 11,
                fontWeight: 700,
                color: color,
                whiteSpace: "nowrap",
              }}
            >
              {fw.id}
            </span>
            <span style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, whiteSpace: "nowrap" }}>
              {fw.label}
            </span>
            <span style={{ fontSize: 12, color: TEXT.muted }}>
              — {fw.entry}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function OpenItem({ label, description, href }) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 10,
        padding: "12px 16px",
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        textDecoration: "none",
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, whiteSpace: "nowrap" }}>
        {label}
      </span>
      <span style={{ fontSize: 13, color: TEXT.muted }}>
        — {description}
      </span>
    </Link>
  );
}
