import Link from "next/link";
import dynamic from "next/dynamic";
import { generateResearchHubJsonLd } from "@/src/lib/jsonld";
import { BG, FONT, TEXT, BORDER, SPECTRUM, RESEARCHER, PATTERN_GRADIENT, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout } from "@/src/components";

const EmotionWaveSection = dynamic(() => import("@/src/components/EmotionWaveSection"), { ssr: false });

const REGULATION_THREAD = [
  { id: "F1", href: "/framework/f1-emotional-gradient", regulator: "Biological Restoration — the body completing its own cycle", cost: "No cost — this is the design" },
  { id: "F2", href: "/framework/f2-awareness-calibration", regulator: "Co-regulation → self-restoration (when learned). When not learned: the compass locks", cost: "The restoration path is never built" },
  { id: "F3", href: "/framework/f3-false-coherence", regulator: "False coherence — cognition replacing restoration", cost: "Truth" },
  { id: "F4", href: "/framework/f4-rules-regulate", regulator: "Rules regulate", cost: "Flexibility" },
  { id: "F5", href: "/framework/f5-worth-hierarchies", regulator: "Worth hierarchies regulate", cost: "Equity" },
  { id: "F6", href: "/framework/f6-bias-regulates", regulator: "Bias regulates", cost: "Accuracy" },
  { id: "F7", href: "/framework/f7-domination-regulates", regulator: "Domination regulates", cost: "Everything" },
  { id: "F8", href: "/framework/f8-repairing-awareness", regulator: "Awareness rebuilds — through safety, not instruction", restores: "The restoration path" },
  { id: "F9", href: "/framework/f9-neurodivergence-variation", regulator: "Variation is design, not deficit", restores: "Accuracy" },
  { id: "F10", href: "/framework/f10-generational-bridges", regulator: "What the adult processes, the child doesn't inherit", restores: "The bridge" },
  { id: "F11", href: "/framework/f11-emotional-paradoxes", regulator: "Paradox holds what logic cannot", restores: "Truth" },
  { id: "F12", href: "/framework/f12-two-information-systems", regulator: "Two information systems reunite — body and mind", restores: "The design" },
];

const SIDEBAR_SECTIONS = [
  { label: "The Regulation Thread", href: "#the-regulation-thread", description: "One mechanism running through all 12 frameworks — regulation substitutes at different scales, each at a cost. F8–F12 reverse the thread." },
  { label: "Empirical Evidence", href: "#empirical-evidence", description: "The four-mode gradient tested against 10,000+ natural conflict narratives. Key findings and validation metrics." },
  { label: "What TEG-Blue Is", href: "#what-teg-blue-is", description: "The first complete emotional technology system. 139+ theories connected into testable hypotheses about emotional regulation." },
  { label: "Work With the Material", href: "#work-with-the-material", description: "Cite it, use the data, test the claims, read the source theories. Open science, open access." },
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
        {/* Blueprint grid background */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundImage: [
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
              "radial-gradient(circle 1.5px at 0 0, rgba(255,255,255,0.22) 0%, transparent 100%)",
            ].join(", "),
            backgroundSize: "80px 80px",
            opacity: 0.45,
            pointerEvents: "none",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 70%)",
            zIndex: 0,
          }}
        />
        <SiteHeader currentPath="/" />

        <PageLayout
          header={
            <>
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
            </>
          }
          sidebarSections={SIDEBAR_SECTIONS}
        >
          {/* ── The Regulation Thread ── */}
          <section id="the-regulation-thread">
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
                color: SPECTRUM.cobalt,
                backgroundColor: hexToRgba(SPECTRUM.cobalt, 0.15),
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.3)}`,
                marginBottom: 16,
              }}
            >
              The Regulation Thread
            </div>

            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              When the body can't restore itself, something else steps in.
            </h2>

            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 640 }}>
              A single thread runs through all twelve frameworks. F1–F7: each describes a regulation substitute — at a different scale, at a different cost. F8–F12 reverse the thread — not by adding another substitute, but by building the original.
            </p>

            {/* Thread rows */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {REGULATION_THREAD.map((row, i) => {
                const isRepair = !!row.restores;
                const isFirstRepair = row.id === "F8";
                return (
                  <div key={row.id}>
                    {isFirstRepair && (
                      <div
                        style={{
                          padding: "8px 0",
                          marginTop: 4,
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <div style={{ flex: 1, height: 1, background: hexToRgba(SPECTRUM.blue, 0.25) }} />
                        <span style={{ fontSize: 10, fontFamily: FONT.mono, color: SPECTRUM.blue, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                          The reversal
                        </span>
                        <div style={{ flex: 1, height: 1, background: hexToRgba(SPECTRUM.blue, 0.25) }} />
                      </div>
                    )}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 12,
                        padding: "10px 0",
                        borderBottom: i < REGULATION_THREAD.length - 1 ? `1px solid ${BORDER.default}` : "none",
                        flexWrap: "wrap",
                      }}
                    >
                      <Link
                        href={row.href}
                        style={{
                          fontFamily: FONT.mono,
                          fontSize: 13,
                          fontWeight: 700,
                          color: isRepair ? SPECTRUM.blue : TEXT.primary,
                          minWidth: 28,
                          textDecoration: "none",
                        }}
                      >
                        {row.id}
                      </Link>
                      <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6, flex: 1, minWidth: 200 }}>
                        {row.regulator}
                      </span>
                      <span style={{ fontSize: 12, fontFamily: FONT.mono, color: isRepair ? SPECTRUM.blue : TEXT.muted, whiteSpace: "nowrap" }}>
                        {isRepair ? `Restores: ${row.restores}` : `Cost: ${row.cost}`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/frameworks-map#the-regulation-thread"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: SPECTRUM.cobalt,
                textDecoration: "none",
                fontWeight: 500,
                marginTop: 16,
              }}
            >
              See the full framework architecture →
            </Link>
          </section>

          {/* ── Separator: Spectrum ── */}
          <div aria-hidden="true" style={{ padding: "clamp(16px, 3vw, 28px) 0" }}>
            <div style={{
              height: 2,
              borderRadius: 1,
              background: `linear-gradient(90deg, ${hexToRgba(SPECTRUM.sky, 0)}, ${SPECTRUM.sky}, ${SPECTRUM.azure}, ${SPECTRUM.cobalt}, ${SPECTRUM.indigo}, ${hexToRgba(SPECTRUM.indigo, 0)})`,
            }} />
          </div>

          {/* ── Validation Evidence ── */}
          <section id="empirical-evidence">
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              Empirical evidence
            </h2>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 640 }}>
              The four-mode gradient has been tested against 10,000+ natural conflict narratives. Here are the key findings.
            </p>
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

          {/* ── Separator: Spectrum ── */}
          <div aria-hidden="true" style={{ padding: "clamp(16px, 3vw, 28px) 0" }}>
            <div style={{
              height: 2,
              borderRadius: 1,
              background: `linear-gradient(90deg, ${hexToRgba(SPECTRUM.sky, 0)}, ${SPECTRUM.sky}, ${SPECTRUM.azure}, ${SPECTRUM.cobalt}, ${SPECTRUM.indigo}, ${hexToRgba(SPECTRUM.indigo, 0)})`,
            }} />
          </div>

          {/* ── System Architecture ── */}
          <section id="what-teg-blue-is">
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

          {/* ── Separator: Spectrum ── */}
          <div aria-hidden="true" style={{ padding: "clamp(16px, 3vw, 28px) 0" }}>
            <div style={{
              height: 2,
              borderRadius: 1,
              background: `linear-gradient(90deg, ${hexToRgba(SPECTRUM.sky, 0)}, ${SPECTRUM.sky}, ${SPECTRUM.azure}, ${SPECTRUM.cobalt}, ${SPECTRUM.indigo}, ${hexToRgba(SPECTRUM.indigo, 0)})`,
            }} />
          </div>

          {/* ── Open Science ── */}
          <section id="work-with-the-material" style={{ marginBottom: "clamp(28px, 5vw, 48px)" }}>
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
