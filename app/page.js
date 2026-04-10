import Link from "next/link";
import dynamic from "next/dynamic";
import { generateResearchHubJsonLd, generateSearchActionJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What is TEG-Blue?",
    answer: "TEG-Blue is an open-science emotional technology research platform that maps how nervous system states shape emotional behavior. It integrates 145+ established theories into testable hypotheses organized as 12 frameworks, 4 foundational models, emotional tools, and AI safety infrastructure.",
  },
  {
    question: "What are the four nervous system states?",
    answer: "TEG-Blue maps four nervous system states along a continuous physiological gradient: Safety & Openness, Threat & Defence, Strategy & Management, and Power & Dominance. The key measure is State Flexibility — whether the nervous system can shift between states, not which state it occupies.",
  },
  {
    question: "Is TEG-Blue open access?",
    answer: "Yes. All research, frameworks, models, and methodology are published under CC BY-NC-SA 4.0. No access restrictions. Researchers can independently use the framework, data, and methodology.",
  },
];
import { BG, FONT, TEXT, BORDER, SPECTRUM, MAIN_ORG, PATTERN_GRADIENT, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, BadgePill } from "@/src/components";

const EmotionWaveSection = dynamic(() => import("@/src/components/EmotionWaveSection"), { ssr: false });

const REGULATION_THREAD = [
  { id: "F1", href: "/framework/f1-emotional-gradient", regulator: "Biological Restoration — the body completing its own cycle", cost: "No cost — this is the design" },
  { id: "F2", href: "/framework/f2-awareness-calibration", regulator: "Co-regulation → self-restoration (when learned). When not learned: the state locks", cost: "The restoration pathway is never built" },
  { id: "F3", href: "/framework/f3-false-coherence", regulator: "False coherence — cognition replacing restoration", cost: "Truth" },
  { id: "F4", href: "/framework/f4-rules-regulate", regulator: "Rules regulate", cost: "Flexibility" },
  { id: "F5", href: "/framework/f5-worth-hierarchies", regulator: "Worth hierarchies regulate", cost: "Equity" },
  { id: "F6", href: "/framework/f6-bias-regulates", regulator: "Bias regulates", cost: "Accuracy" },
  { id: "F7", href: "/framework/f7-domination-regulates", regulator: "Domination regulates", cost: "Everything" },
  { id: "F8", href: "/framework/f8-repairing-awareness", regulator: "Awareness rebuilds — through safety, not instruction", restores: "The restoration path" },
  { id: "F9", href: "/framework/f9-neurodivergence-variation", regulator: "Variation is configuration", restores: "Accuracy" },
  { id: "F10", href: "/framework/f10-generational-bridges", regulator: "What the adult processes, the child doesn't inherit", restores: "The bridge" },
  { id: "F11", href: "/framework/f11-emotional-paradoxes", regulator: "Paradox holds what logic cannot", restores: "Truth" },
  { id: "F12", href: "/framework/f12-two-information-systems", regulator: "Two information systems reunite — body and mind", restores: "The design" },
];

const SIDEBAR_SECTIONS = [
  { label: "The Regulation Thread", href: "#the-regulation-thread", description: "One mechanism running through all 12 frameworks — regulation substitutes at different scales, each at a cost. F8–F12 reverse the thread." },
  { label: "Empirical Evidence", href: "#empirical-evidence", description: "The nervous system gradient tested against 10,000+ natural conflict narratives. Key findings and validation metrics." },
  { label: "What Is TEG-Blue?", href: "#what-teg-blue-is", description: "Four interconnected parts: measurement, explanatory frameworks, emotional tools, and AI safety." },
  { label: "Work With the Material", href: "#work-with-the-material", description: "Cite it, use the data, test the claims, read the source theories. Open science, open access." },
];

export const metadata = {
  title: "TEG-Blue | Emotional Technology Research",
  description: "Emotions are structured biological signals. TEG-Blue makes them legible. Open science — 145+ established theories mapped into testable hypotheses about emotional regulation. Transparent research, credited sources, testable claims.",
  keywords: [
    "emotional technology",
    "emotional regulation research",
    "nervous system gradient",
    "nervous system regulation",
    "pattern-aware research",
    "TEG-Blue",
    "open science",
  ],
  alternates: {
    canonical: "https://teg-blue.org",
  },
  openGraph: {
    title: "TEG-Blue | Emotional Technology Research",
    description: "Open science — 145+ established theories mapped into testable hypotheses about emotional regulation. 12 frameworks, 4 models, transparent research.",
    url: "https://teg-blue.org",
    siteName: "TEG-Blue Research",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEG-Blue | Emotional Technology Research",
    description: "Open science — 145+ theories mapped into testable hypotheses about emotional regulation. 12 frameworks, 4 models, transparent research.",
  },
};

export default function ResearchHub() {
  const jsonLd = generateResearchHubJsonLd();
  const searchActionJsonLd = generateSearchActionJsonLd();

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

        <PageLayout
          header={
            <>
              {/* ── Hero ── */}
              <section style={{ paddingTop: "clamp(20px, 4vw, 32px)", paddingBottom: "clamp(16px, 3vw, 24px)" }}>
                {/* Badge pill */}
                <div style={{ marginBottom: 24 }}>
                  <BadgePill color={MAIN_ORG.accent}>Emotional Technology Research</BadgePill>
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
                  Emotions are structured biological signals.<br />TEG-Blue makes them legible.
                </h1>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                    color: TEXT.secondary,
                    lineHeight: 1.5,
                    margin: "0 0 6px",
                    maxWidth: 680,
                    letterSpacing: "0.01em",
                  }}
                >
                  An Integrative Architecture Mapping Nervous System States, Signals, and Restoration
                </p>

                {/* Lead description */}
                <p
                  style={{
                    fontSize: 15,
                    color: TEXT.secondary,
                    lineHeight: 1.7,
                    margin: "0 0 10px",
                    maxWidth: 680,
                  }}
                >
                  Open science — built on 145+ established theories. Open to critique and validation.
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
                      background: MAIN_ORG.accent,
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
                    href="/frameworks-map"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 24px",
                      background: hexToRgba(MAIN_ORG.accent, 0.1),
                      color: MAIN_ORG.accent,
                      borderRadius: 8,
                      fontWeight: 500,
                      fontSize: 14,
                      textDecoration: "none",
                      border: `1px solid ${hexToRgba(MAIN_ORG.accent, 0.2)}`,
                    }}
                  >
                    See the Frameworks
                  </Link>
                </div>

                {/* Epistemological position */}
                <p
                  style={{
                    marginTop: "clamp(24px, 4vw, 36px)",
                    marginBottom: 0,
                    fontSize: "clamp(12px, 1.8vw, 14px)",
                    fontFamily: FONT.mono,
                    fontWeight: 500,
                    color: TEXT.secondary,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.6,
                    maxWidth: 680,
                  }}
                >
                  The building blocks are validated science.{" "}
                  <span style={{ color: TEXT.primary }}>The connections are the hypothesis.</span>
                </p>

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
            <div style={{ marginBottom: 16 }}>
              <BadgePill color={SPECTRUM.cobalt}>The Regulation Thread</BadgePill>
            </div>

            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              When the body can&apos;t restore itself, something else steps in.
            </h2>

            <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
              A single thread runs through all twelve frameworks. Describing a regulation substitute — at a different scale, at a different cost, and a way to reverse the thread — not by adding another substitute, but by building the original.
            </p>

            {/* Thread cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {REGULATION_THREAD.map((row) => {
                const isRepair = !!row.restores;
                const isFirstIndividual = row.id === "F1";
                const isFirstCollective = row.id === "F4";
                const isFirstRepair = row.id === "F8";
                const accent = isRepair ? SPECTRUM.blue : SPECTRUM.cobalt;
                return (
                  <div key={row.id}>
                    {isFirstIndividual && (
                      <ThreadDivider label="Individual" color={SPECTRUM.cobalt} />
                    )}
                    {isFirstCollective && (
                      <ThreadDivider label="Collective" color={SPECTRUM.cobalt} />
                    )}
                    {isFirstRepair && (
                      <ThreadDivider label="The reversal" color={SPECTRUM.blue} />
                    )}
                    <Link
                      href={row.href}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 12,
                        padding: "10px 14px",
                        background: hexToRgba(accent, 0.06),
                        borderLeft: `3px solid ${accent}`,
                        borderRadius: 6,
                        textDecoration: "none",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: FONT.mono,
                          fontSize: 13,
                          fontWeight: 700,
                          color: accent,
                          minWidth: 28,
                        }}
                      >
                        {row.id}
                      </span>
                      <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6, flex: 1, minWidth: 200 }}>
                        {row.regulator}
                      </span>
                      <span style={{ fontSize: 12, fontFamily: FONT.mono, color: isRepair ? SPECTRUM.blue : TEXT.muted, whiteSpace: "nowrap" }}>
                        {isRepair ? `Restores: ${row.restores}` : `Cost: ${row.cost}`}
                      </span>
                    </Link>
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
          <SpectrumSeparator />

          {/* ── Validation Evidence ── */}
          <section id="empirical-evidence">
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              What evidence supports the nervous system gradient?
            </h2>
            <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
              The nervous system gradient has been tested against 10,000+ natural conflict narratives. Here are the key findings.
            </p>
            <div
              style={{
                background: gradientCardBg(MAIN_ORG.accent),
                borderRadius: 10,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `3px solid ${MAIN_ORG.accent}`,
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
                Empirical Validation — Nervous System Gradient
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 16 }}>
                <MetricCard value="10,000+" label="natural conflict narratives analyzed" />
                <MetricCard value="Pre-registered" label="on OSF (osf.io/f4x6y)" />
                <MetricCard value="+78%" label="complexity markers in de-escalators" />
              </div>

              <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
                Computational analysis of unstructured text. Four nervous system states reliably detected. De-escalators showed significantly higher rates of self-awareness, perspective-taking, and emotional differentiation. State classifications correlated with independent community moral judgments.
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
                      background: MAIN_ORG.accent,
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
                      background: hexToRgba(MAIN_ORG.accent, 0.1),
                      color: MAIN_ORG.accent,
                      borderRadius: 6,
                      fontWeight: 500,
                      fontSize: 13,
                      textDecoration: "none",
                      border: `1px solid ${hexToRgba(MAIN_ORG.accent, 0.2)}`,
                    }}
                  >
                    See methodology
                  </Link>
                </div>
                <span style={{ fontSize: 12, color: TEXT.muted, fontFamily: FONT.mono }}>
                  DOI: 10.5281/zenodo.19472342
                </span>
              </div>
            </div>
          </section>

          {/* ── Separator: Spectrum ── */}
          <SpectrumSeparator />

          {/* ── What TEG-Blue Is ── */}
          <section id="what-teg-blue-is">
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
              What is TEG-Blue?
            </h2>

            <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
              An integrative architecture that maps how nervous system states shape emotional behavior — and what it takes to move between them. Organized as four connected parts:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              <PartCard
                color={SPECTRUM.azure}
                label="1 — Measurement"
                title="Four Foundational Models"
                description="Emotions as Signals (M1) maps what the nervous system delivers. Nervous System States (M2) maps where the nervous system is pointing. Regulation Capacities (M3) describes the body's designed return path. Awareness Capacities (M4) explain how accurately it reads — and what goes offline when it gets stuck."
                href="/models"
                linkText="Core Models →"
              />
              <PartCard
                color={SPECTRUM.cobalt}
                label="2 — Explanatory"
                title="12 Frameworks"
                description="Why these patterns exist, how they escalate from one person into social systems, and what makes repair possible. One mechanism runs through all twelve: when the body's natural return path is missing, something else steps in."
                href="/frameworks-map"
                linkText="12 Frameworks →"
              />
              <PartCard
                color={SPECTRUM.indigo}
                label="3 — Applied"
                title="Emotional Tools"
                description="Gradient-based scales that map behavioral dimensions from regulated to dysregulated, with observable markers at every point. Empathy, accountability, integrity, boundary dynamics, and more."
                href="https://teg-blue.com/emotional-tools"
                linkText="Explore Tools →"
                external
              />
              <PartCard
                color={SPECTRUM.slate}
                label="4 — AI Safety"
                title="Structured Schemas"
                description="A computationally legible translation of the system for AI alignment — designed to replace binary safe/unsafe classifications with contextual, state-aware assessments."
                href="/ai-safety"
                linkText="AI Safety →"
              />
            </div>

            <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 16, lineHeight: 1.6 }}>
              The full architecture, including how the parts connect, is at{" "}
              <Link href="/foundations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>System Overview</Link>.
              The 145+ source theories are documented at{" "}
              <Link href="/scientific-foundations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>Scientific Foundations</Link>.
            </p>
          </section>

          {/* ── Separator: Spectrum ── */}
          <SpectrumSeparator />

          {/* ── Open Science ── */}
          <section id="work-with-the-material" style={{ marginBottom: "clamp(28px, 5vw, 48px)" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
              Open science — no gates, no applications
            </h2>

            <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              Everything here is published under CC BY-NC-SA 4.0. Use it, test it, build on it.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <OpenItem label="Cite it" description="Full citation format and examples" href="/citations" />
              <OpenItem label="Use the data" description="Anonymized conflict narratives, emotional gradient data" href="/publications" />
              <OpenItem label="Test the claims" description="Five open research questions, four research directions" href="/research-entry" />
              <OpenItem label="Read the source theories" description="145+ established theories, credited and documented" href="/scientific-foundations" />
              <OpenItem label="Read the reframes" description="15 common terms traced back to the nervous system" href="/reframes" />
              <OpenItem label="Explore the labels" description="19 psychology labels mapped to 3 awareness capacities" href="/explore/labels" />
            </div>
          </section>

          {/* Trust — How this work is sustained */}
          <section style={{ marginBottom: 32 }}>
            <div
              style={{
                padding: "20px 24px",
                background: hexToRgba(SPECTRUM.indigo, 0.06),
                borderRadius: 10,
                border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.15)}`,
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: SPECTRUM.indigo, marginBottom: 10 }}>
                How this work is sustained
              </h3>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0, marginBottom: 10 }}>
                The application site (teg-blue.com) offers paid tools to fund ongoing research and development. These tiers do not create dependency loops or exploit emotional vulnerability for engagement. The research — the frameworks, the models, the data — stays open.
              </p>
              <p style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.6, margin: 0 }}>
                <Link href="/ethics" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
                  Read our ethics →
                </Link>
              </p>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionJsonLd) }}
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
              name: "TEG-Blue | Emotional Technology Research",
              url: "https://teg-blue.org",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
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
      <div style={{ fontSize: 11, color: TEXT.muted, marginTop: 4, lineHeight: 1.4 }}>
        {label}
      </div>
    </div>
  );
}

function PartCard({ color, label, title, description, href, linkText, external }) {
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
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
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
        </a>
      ) : (
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
      )}
    </div>
  );
}

function ThreadDivider({ label, color }) {
  return (
    <div
      style={{
        padding: "10px 0 6px",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div style={{ flex: 1, height: 1, background: hexToRgba(color, 0.25) }} />
      <span style={{ fontSize: 10, fontFamily: FONT.mono, color, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: hexToRgba(color, 0.25) }} />
    </div>
  );
}

function SpectrumSeparator() {
  return (
    <div aria-hidden="true" style={{ padding: "clamp(16px, 3vw, 28px) 0" }}>
      <div style={{
        height: 2,
        borderRadius: 1,
        background: `linear-gradient(90deg, ${hexToRgba(SPECTRUM.sky, 0)}, ${SPECTRUM.sky}, ${SPECTRUM.azure}, ${SPECTRUM.cobalt}, ${SPECTRUM.indigo}, ${hexToRgba(SPECTRUM.indigo, 0)})`,
      }} />
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
