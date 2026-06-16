import Link from "next/link";
import dynamic from "next/dynamic";
import { generateResearchHubJsonLd, generateSearchActionJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What is TEG-Blue?",
    answer: "TEG-Blue is an open-science emotional technology research platform that maps how nervous system states shape emotional behavior. It integrates 145+ theoretical contributions from 41 research traditions into testable hypotheses organized as 12 frameworks, 4 foundational models, emotional tools, and AI safety infrastructure.",
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

export const metadata = {
  title: "TEG-Blue | Emotional Technology Research",
  description: "Individual nervous systems. Collective patterns. One architecture. TEG-Blue makes it legible. Open science — 145+ theoretical contributions from 41 research traditions mapped into testable hypotheses about emotional regulation. Transparent research, credited sources, testable claims.",
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
    description: "Open science — 145+ theoretical contributions from 41 research traditions mapped into testable hypotheses about emotional regulation. 12 frameworks, 4 models, transparent research.",
    url: "https://teg-blue.org",
    siteName: "TEG-Blue Research",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEG-Blue | Emotional Technology Research",
    description: "Open science — 145+ theoretical contributions mapped into testable hypotheses about emotional regulation. 12 frameworks, 4 models, transparent research.",
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
                    margin: "0 0 16px",
                    maxWidth: 720,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    textWrap: "balance",
                    background: PATTERN_GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Individual nervous systems.<br />Collective patterns. One architecture.<br />TEG-Blue makes it legible.
                </h1>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                    color: TEXT.secondary,
                    lineHeight: 1.5,
                    margin: "0 0 10px",
                    maxWidth: 600,
                    letterSpacing: "0.01em",
                  }}
                >
                  An integrative architecture mapping emotional information, nervous system states, and biological restoration.
                </p>

                {/* Lead description */}
                <p
                  style={{
                    fontSize: 15,
                    color: TEXT.secondary,
                    lineHeight: 1.7,
                    margin: "0 0 10px",
                    maxWidth: 600,
                  }}
                >
                  Open science — built on 145+ theoretical contributions from 41 research traditions. Open to critique and validation.
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

            <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 720 }}>
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

          {/* ── What TEG-Blue Is ── */}
          <section id="what-teg-blue-is">
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
              What is TEG-Blue?
            </h2>

            <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 720 }}>
              An integrative architecture that maps how nervous system states shape emotional behavior — and what it takes to move between them. Organized as four connected parts:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              <PartCard
                color={SPECTRUM.azure}
                label="1 — Measurement"
                title="Four Foundational Models"
                description="Emotions as Signals (M1) maps what the nervous system delivers. Nervous System States (M2) maps where the nervous system is pointing. Regulation Capacities (M3) describes the body's designed return path. Awareness Capacities (M4) explain how accurately it reads — and what goes offline when it gets stuck."
                href="/emotional-somatic-cycle"
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
              The 145+ theoretical contributions across 41 research traditions are documented at{" "}
              <Link href="/scientific-foundations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>Established Research</Link>.
            </p>
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
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 auto 10px", maxWidth: 620 }}>
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
