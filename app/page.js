import { BG, TEXT, BORDER, FONT, SPACING, RADIUS, hexToRgba, SPECTRUM, BLUE, MAIN_ORG, PATTERN_GRADIENT, ACTIVE_REALITY_CHECK_STATES, FORMATION_META } from "@/src/styles/tokens";
import SiteFooter from "@/src/components/SiteFooter";
import SiteHeader from "@/src/components/SiteHeader";
import EmotionalGradient from "@/src/components/EmotionalGradient";
import GradientMap from "@/src/components/GradientMap";
import { positions, scienceGrounding, faq } from "@/src/lib/gradient-data";
import { generateFAQJsonLd, generateSpeakableJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";

const TITLE = "TEG-Blue — The Nervous System Gradient";
const DESCRIPTION =
  "Understand how nervous-system state changes perception, time and tempo, empathy, and repair across safety, threat, control, and shutdown.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://teg-blue.org",
    languages: {
      en: "https://teg-blue.org",
      "x-default": "https://teg-blue.org",
    },
  },
  keywords: [
    "emotional gradient", "nervous system states", "neuroception", "polyvagal theory",
    "parasympathetic", "sympathetic", "autonomic nervous system", "fight or flight",
    "rest and digest", "fawn", "freeze response", "ventral vagal", "dorsal vagal",
    "stress physiology", "allostatic load", "interoception", "trauma research",
    "co-regulation", "emotional regulation", "window of tolerance", "chronic stress",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://teg-blue.org",
    siteName: "TEG-Blue",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// ─── JSON-LD — the logic (ordered ItemList) + the grounding (citations) ──────

const positionsItemList = {
  "@type": "ItemList",
  name: "Nervous-system states on the Nervous System Gradient",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: positions.length,
  itemListElement: positions.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "DefinedTerm",
      name: p.mode,
      description: p.mechanism,
      ...(p.familiar ? { alternateName: p.familiar } : {}),
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "The Nervous System Gradient",
        url: "https://teg-blue.org",
      },
    },
  })),
};

const gradientJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "The Nervous System Gradient",
  alternateName: "TEG-Blue: The Emotional Gradient Blueprint",
  url: "https://teg-blue.org",
  inLanguage: "en",
  description: DESCRIPTION,
  author: { "@type": "Person", name: "Anna Paretas-Artacho", url: "https://orcid.org/0009-0005-2394-7162" },
  creator: { "@type": "Person", name: "Anna Paretas-Artacho", url: "https://orcid.org/0009-0005-2394-7162" },
  copyrightHolder: { "@type": "Person", name: "Anna Paretas-Artacho" },
  copyrightNotice: "TEG-Blue / The Nervous System Gradient was created by Anna Paretas-Artacho. Public framework content is licensed CC BY-NC-SA 4.0; commercial, institutional, product, model, or dataset integration requires explicit permission or a separate license.",
  license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  publisher: { "@type": "Organization", name: "TEG-Blue", url: "https://teg-blue.org" },
  isPartOf: {
    "@type": "ResearchProject",
    name: "TEG-Blue: The Emotional Gradient Blueprint",
    description: "A visual map for patterns we can already see across emotion, survival, identity, social patterns, accountability, and repair.",
    url: "https://teg-blue.org",
  },
  about: positionsItemList,
  // Established research the architecture converges with — grounding, not derivation.
  citation: scienceGrounding.map((s) => ({
    "@type": "CreativeWork",
    name: s.science,
    creator: s.authors,
  })),
  keywords: metadata.keywords,
};

const faqJsonLd = generateFAQJsonLd(faq);
const speakableJsonLd = generateSpeakableJsonLd({
  name: "The Nervous System Gradient",
  url: "https://teg-blue.org",
  cssSelectors: ["#gradient-intro", "h1", ".faq-question"],
});
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "TEG-Blue", url: "/" },
  { name: "The Nervous System Gradient", url: "/" },
]);

const HOME_CSS = `
  .home-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
    gap: clamp(28px, 6vw, 68px);
    align-items: center;
  }

  .home-hero-copy {
    min-width: 0;
  }

  .home-hero-title {
    max-width: min(100%, 920px);
  }

  .home-title-line {
    white-space: nowrap;
  }

  .home-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 24px;
  }

  .home-action {
    display: inline-flex;
    align-items: center;
    min-height: 40px;
    padding: 9px 13px;
    border-radius: 6px;
    border: 1px solid var(--border-default);
    color: var(--text-secondary);
    background: var(--bg-primary);
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 650;
    text-decoration: none;
  }

  .home-action.primary {
    border-color: color-mix(in srgb, var(--blue-500) 48%, transparent);
    color: var(--blue-500);
    background: color-mix(in srgb, var(--blue-500) 10%, var(--bg-primary));
  }

  .home-action:hover {
    color: var(--spectrum-azure);
    border-color: var(--border-hover);
    text-decoration: none;
  }

  .home-action.primary:hover {
    color: var(--blue-500);
    border-color: color-mix(in srgb, var(--blue-500) 58%, transparent);
    background: color-mix(in srgb, var(--blue-500) 14%, var(--bg-primary));
  }

  .home-calibration-plate {
    position: relative;
    overflow: hidden;
  }

  .home-formation-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .home-formation-system {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .home-shutdown-cell {
    min-height: 44px;
  }

  @media (max-width: 860px) {
    .home-hero {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 620px) {
    .home-title-line {
      white-space: normal;
    }

    .home-formation-system {
      grid-template-columns: 1fr;
    }
    .home-shutdown-cell {
      min-height: 44px;
    }
  }
`;

function Ld({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const patternRecognitionMoves = [
  {
    label: "Detects",
    title: "Safety, threat, and rest",
    body: "The body is continually reading conditions: is this safe, is there pressure, can I stay connected, can I rest?",
    color: SPECTRUM.azure,
  },
  {
    label: "Shows",
    title: "What becomes available",
    body: "State changes what can be perceived, felt, considered, expressed, interrupted, repaired, or protected.",
    color: SPECTRUM.indigo,
  },
  {
    label: "Tracks",
    title: "What repeats over time",
    body: "When threat or pressure lasts, a passing response can become a recurring pattern that shapes relationships and choices.",
    color: "var(--accent-amber, #e9a23b)",
  },
];

const attributionNotice = {
  title: "Authorship and use",
  body:
    "TEG-Blue and The Nervous System Gradient were created by Anna Paretas-Artacho. Public framework content is published under CC BY-NC-SA 4.0: attribution is required, use must be non-commercial, and adaptations must be shared under the same license.",
  restriction:
    "Commercial, institutional, product, model, or dataset integration requires explicit permission or a separate license.",
};

// ─── shared section styles ───────────────────────────────────────────────────

const sectionStyle = {
  width: "100%",
  maxWidth: SPACING.containerMax,
  margin: "0 auto",
  padding: `0 ${SPACING.pagePadding}`,
};
const eyebrowStyle = {
  margin: "0 0 12px",
  fontFamily: FONT.diagram,
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: 0,
  textTransform: "uppercase",
  color: TEXT.muted,
};
// Section eyebrows lead in the blue "diagram voice"; the hero eyebrow stays muted.
const sectionEyebrowStyle = { ...eyebrowStyle, color: "var(--spectrum-azure)" };
const homeSurface = {
  primary: "var(--bg-primary)",
  text: "var(--text-primary)",
  secondary: "var(--text-secondary)",
  muted: "var(--text-muted)",
  border: "var(--border-default)",
};
// Bordered instrument-surface card — the research register from the prototype.
const cardStyle = {
  background: BG.diagram,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.lg,
  padding: "clamp(20px, 3vw, 28px)",
  boxShadow: "0 18px 50px rgba(0, 41, 102, 0.06)",
};

const formationCells = ACTIVE_REALITY_CHECK_STATES;
const shutdownCell = FORMATION_META.Z;
const gradientLinePositions = positions.filter((p) => p.id !== "shutdown");
const shutdownPosition = positions.find((p) => p.id === "shutdown");
const formationDescriptionStyle = {
  fontFamily: FONT.mono,
  fontSize: 13,
  fontWeight: 750,
  lineHeight: 1.12,
  letterSpacing: 0,
  overflowWrap: "normal",
  wordBreak: "normal",
  hyphens: "none",
};
const formationCodeStyle = {
  alignSelf: "center",
  flex: "0 0 auto",
  fontFamily: FONT.mono,
  fontSize: 10.5,
  fontWeight: 800,
  lineHeight: 1,
  letterSpacing: 0,
  opacity: 0.68,
};

function HomeCalibrationPlate() {
  return (
    <aside
      className="home-calibration-plate"
      aria-label="Nervous System Gradient formation plate"
      style={{
        background: BG.diagram,
        border: `1px solid ${BORDER.default}`,
        borderRadius: RADIUS.lg,
        padding: "clamp(14px, 2.5vw, 18px)",
        boxShadow: "0 24px 70px rgba(0, 41, 102, 0.10)",
      }}
    >
      <div style={{ marginBottom: 12 }}>
        <p style={{ margin: 0, fontFamily: FONT.mono, fontSize: 12, fontWeight: 800, color: TEXT.primary }}>
          The Safety → threat Gradient
        </p>
      </div>

      <div className="home-formation-system">
        <div className="home-formation-grid" role="list" aria-label="Gradient formations">
          {formationCells.map((cell) => (
            <div
              key={cell.code}
              role="listitem"
              aria-label={`${cell.code}: ${cell.label}`}
              style={{
                minHeight: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "8px 12px",
                borderRadius: 7,
                background: cell.color,
                color: cell.ink,
                border: `1px solid ${hexToRgba(BLUE[900], 0.12)}`,
              }}
            >
              <span style={formationDescriptionStyle}>
                {cell.label}
              </span>
              <span style={formationCodeStyle}>{cell.code}</span>
            </div>
          ))}
        </div>
        <div
          className="home-shutdown-cell"
          aria-label="Shutdown off-gradient"
          style={{
            minHeight: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            padding: "8px 12px",
            borderRadius: 8,
            background: shutdownCell.color,
            color: shutdownCell.ink,
            border: `1px dashed ${hexToRgba(BLUE[100], 0.42)}`,
          }}
        >
          <span style={formationDescriptionStyle}>
            {shutdownCell.label}
          </span>
          <span style={formationCodeStyle}>{shutdownCell.code}</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          marginTop: 12,
          color: TEXT.muted,
          fontFamily: FONT.diagram,
          fontSize: 11,
          lineHeight: 1.4,
        }}
      >
        <span>Safe & at rest</span>
        <span>Life threat · overwhelm shutdown</span>
      </div>
    </aside>
  );
}

function WhatGradientIsCard() {
  return (
    <div
      style={{
        ...cardStyle,
        padding: 0,
        overflow: "hidden",
        background: homeSurface.primary,
        border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.16)}`,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            minHeight: "100%",
            flexDirection: "column",
            gap: 28,
            padding: "clamp(20px, 3vw, 30px)",
          }}
        >
          <div>
            <p style={{ ...sectionEyebrowStyle, color: "var(--spectrum-azure, #76e2ff)", margin: "0 0 10px" }}>Pattern recognition</p>
            <h2
              id="what-gradient-is-heading"
              style={{
                margin: 0,
                maxWidth: 620,
                color: homeSurface.text,
                fontSize: "clamp(21px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: 0,
                lineHeight: 1.16,
              }}
            >
              A continuous range of nervous-system organisation.
            </h2>
            <div style={{ display: "grid", gap: 10, margin: "14px 0 0", maxWidth: 680, color: homeSurface.secondary, fontSize: 15, lineHeight: 1.7 }}>
              <p style={{ margin: 0 }}>
                The gradient is the range the nervous system moves through as the body reads safety, threat, and whether
                rest is possible.
              </p>
              <p style={{ margin: 0 }}>
                When working well, it can mobilise for danger, return toward safety after danger has passed, and settle
                into baseline when rest becomes possible.
              </p>
              <p style={{ margin: 0 }}>
                Wherever it lands, the whole organism shifts with it: body, mind, emotion, behaviour, perception, and the
                capacity to repair.
              </p>
            </div>
          </div>

          <div>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 10, alignItems: "center" }} aria-hidden="true">
              <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                {gradientLinePositions.map((p) => (
                  <span
                    key={p.id}
                    style={{
                      flex: "1 1 0",
                      height: 5,
                      borderRadius: 999,
                      background: p.acuteColor,
                      opacity: 0.9,
                    }}
                  />
                ))}
              </div>
              {shutdownPosition && (
                <span
                  style={{
                    width: 22,
                    height: 5,
                    borderRadius: 999,
                    background: shutdownPosition.acuteColor,
                    outline: `1px dashed ${hexToRgba(BLUE[100], 0.4)}`,
                    outlineOffset: 3,
                  }}
                />
              )}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                marginTop: 8,
                color: homeSurface.muted,
                fontFamily: FONT.diagram,
                fontSize: 10,
                lineHeight: 1.4,
                letterSpacing: 0,
                textTransform: "uppercase",
              }}
            >
              <span>Rest + connection</span>
              <span>Defence + power · shutdown off-gradient</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            alignContent: "start",
            borderLeft: `1px solid ${homeSurface.border}`,
          }}
        >
          {patternRecognitionMoves.map((item, index) => (
            <div
              key={item.label}
              style={{
                display: "grid",
                gridTemplateColumns: "92px minmax(0, 1fr)",
                gap: 16,
                alignItems: "start",
                paddingBlockStart: index === 0 ? "clamp(24px, 3vw, 34px)" : "clamp(14px, 1.8vw, 18px)",
                paddingBlockEnd: "clamp(14px, 1.8vw, 18px)",
                paddingInline: "clamp(18px, 2.7vw, 24px)",
                borderTop: index === 0 ? 0 : `1px solid ${homeSurface.border}`,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: item.color,
                  fontFamily: FONT.diagram,
                  fontSize: 10,
                  fontWeight: 650,
                  letterSpacing: 0,
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    flex: "0 0 auto",
                    borderRadius: "50%",
                    background: item.color,
                    boxShadow: `0 0 0 4px color-mix(in srgb, ${item.color} 14%, transparent)`,
                  }}
                  aria-hidden="true"
                />
                {item.label}
              </span>
              <div>
                <p style={{ margin: 0, color: homeSurface.text, fontSize: 14.5, fontWeight: 650, lineHeight: 1.35 }}>{item.title}</p>
                <p style={{ margin: "5px 0 0", color: homeSurface.secondary, fontSize: 13.5, lineHeight: 1.6 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Ld data={gradientJsonLd} />
      <Ld data={faqJsonLd} />
      <Ld data={speakableJsonLd} />
      <Ld data={breadcrumbJsonLd} />
      <style dangerouslySetInnerHTML={{ __html: HOME_CSS }} />

      <SiteHeader currentPath="/" />

      <main id="main-content" style={{ position: "relative", zIndex: 1, background: "transparent", fontFamily: FONT.display, paddingBottom: 64 }}>
        {/* Hero — static, crawlable */}
        <section className="home-hero" style={{ ...sectionStyle, paddingTop: "clamp(42px, 7vw, 82px)", paddingBottom: "clamp(36px, 6vw, 64px)" }}>
          <div className="home-hero-copy">
            <p style={{ ...eyebrowStyle, color: MAIN_ORG.accent }}>TEG-Blue · Public framework</p>
            <h1
              className="home-hero-title"
              style={{
                margin: 0,
                fontSize: "clamp(42px, 8vw, 86px)",
                lineHeight: 0.96,
                letterSpacing: 0,
                color: TEXT.primary,
              }}
            >
              <span className="home-title-line" style={{ display: "block", color: TEXT.primary }}>The Nervous System</span>{" "}
              <span
                style={{
                  display: "inline-block",
                  color: MAIN_ORG.accent,
                  background: PATTERN_GRADIENT,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Gradient
              </span>
            </h1>
            <p style={{ margin: "22px 0 0", maxWidth: 690, fontSize: "clamp(16px, 2.2vw, 20px)", lineHeight: 1.65, color: TEXT.secondary }}>
              Understand how nervous-system state changes what perception, time, empathy, and repair can do.
              The same person can have a wide field in safety and a narrowed field under threat.
            </p>
            <p id="gradient-intro" style={{ margin: "16px 0 0", maxWidth: 690, fontSize: 16, lineHeight: 1.75, color: TEXT.secondary }}>
              The Gradient is a map of state-shaped capacity:{" "}
              <strong style={{ color: TEXT.primary, fontWeight: 650 }}>how wide perception is</strong>,{" "}
              <strong style={{ color: TEXT.primary, fontWeight: 650 }}>how rushed or open time feels</strong>,{" "}
              <strong style={{ color: TEXT.primary, fontWeight: 650 }}>whether empathy stays available</strong>, and{" "}
              <strong style={{ color: TEXT.primary, fontWeight: 650 }}>what kind of repair can land</strong>. It runs from rest
              and connection into protection, strategic management, and domination, with shutdown shown as a fallback when mobilisation cannot form.
            </p>
            <div className="home-hero-actions" aria-label="Primary routes">
              <a
                className="home-action primary"
                href="#positions-heading"
                style={{
                  color: MAIN_ORG.accent,
                  borderColor: hexToRgba(MAIN_ORG.accent, 0.48),
                  background: hexToRgba(MAIN_ORG.accent, 0.1),
                }}
              >
                See the pattern map
              </a>
              <a className="home-action" href="#science-heading">Research grounding</a>
              <a className="home-action" href="#rights-heading">Use and attribution</a>
            </div>
          </div>
          <HomeCalibrationPlate />
        </section>

        {/* What the gradient is — definitional note with its own convergent-science trace */}
        <section style={{ ...sectionStyle, paddingBottom: "clamp(28px, 4vw, 44px)" }} aria-labelledby="what-gradient-is-heading">
          <WhatGradientIsCard />
        </section>

        {/* Interactive instrument */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }}>
          <EmotionalGradient />
        </section>

        {/* What the gradient explains — the payoff, directly under the instrument */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="explains-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>What the gradient explains</p>
            <h2 id="explains-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: 0, color: TEXT.primary }}>
              From personal patterns to societal systems
            </h2>
            <p style={{ margin: "0 0 20px", maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              The same shape can be read from one nervous system to families, institutions, and whole groups. The route is cumulative: repeated state patterns become relational habits, then group norms, rules, and power arrangements. It helps explain how harm forms while keeping impact, accountability, and repair in view.
            </p>
            <ul style={{ margin: "0 0 28px", padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
              {[
                ["Why care is not always enough", "under threat, empathy narrows even when intent is good."],
                ["How harm can become normal", "when empathy stays offline for too long, the cost to others stops being fully registered."],
                ["How protection hardens into control", "repeated protection can become rule, punishment, exclusion, or system logic."],
                ["Language for shifts as they happen", "recognised as state changes without reducing people to character."],
                ["A route back to connection", "repair begins with the state the system is actually in, and with enough safety for empathy to return."],
              ].map(([head, body]) => (
                <li key={head} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, marginTop: 9, width: 6, height: 6, borderRadius: "50%", background: "var(--spectrum-indigo)" }} aria-hidden="true" />
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: TEXT.secondary }}>
                    <strong style={{ fontWeight: 600, color: TEXT.primary }}>{head}</strong> — {body}
                  </p>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
              <a
                href="https://teg-blue.com/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "10px 16px",
                  borderRadius: RADIUS.md,
                  border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.3)}`,
                  background: hexToRgba(SPECTRUM.indigo, 0.1),
                  color: "var(--spectrum-indigo)",
                  fontFamily: FONT.mono,
                  fontSize: 12,
                  fontWeight: 600,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Explore applied tools ↗
              </a>
              <span style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: 0, color: TEXT.muted }}>teg-blue.com</span>
            </div>
          </div>
        </section>

        {/* The seven states — colour-keyed map (client: theme-aware state colours) */}
        <GradientMap
          sectionStyle={{ ...sectionStyle, paddingTop: 8, paddingBottom: 56 }}
          cardStyle={cardStyle}
          eyebrowStyle={sectionEyebrowStyle}
        />

        {/* Grounded in established science — static, crawlable */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="science-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Research</p>
            <h2 id="science-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: 0, color: TEXT.primary }}>
              Research areas behind the map
            </h2>
            <p style={{ margin: "0 0 24px", maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              The public framework names the integration, then shows which research areas help illuminate
              specific parts of the map. Each field remains itself; TEG-Blue places the parts in relation.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px 28px" }}>
              {scienceGrounding.map((s) => (
                <div key={s.part}>
                  <p style={{ margin: 0, fontFamily: FONT.diagram, fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0, color: "var(--spectrum-indigo)" }}>{s.part}</p>
                  <p style={{ margin: "4px 0 0", fontSize: 13.5, lineHeight: 1.55, color: TEXT.secondary }}>
                    {s.science} <span style={{ color: TEXT.muted }}>· {s.authors}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authorship and use — visible licensing boundary */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="rights-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Use and attribution</p>
            <h2 id="rights-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: 0, color: TEXT.primary }}>
              {attributionNotice.title}
            </h2>
            <p style={{ margin: "0 0 14px", maxWidth: 760, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              {attributionNotice.body}{" "}
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--spectrum-indigo)", textDecoration: "none", fontWeight: 600 }}
              >
                View license
              </a>
              .
            </p>
            <p style={{ margin: 0, maxWidth: 760, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              {attributionNotice.restriction}
            </p>
          </div>
        </section>

        {/* FAQ — static, crawlable (AEO / answer engines / voice); native <details> */}
        <section style={{ ...sectionStyle, paddingBottom: 40 }} aria-labelledby="faq-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Questions</p>
            <h2 id="faq-heading" style={{ margin: "0 0 24px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: 0, color: TEXT.primary }}>
              Common questions
            </h2>
            <div style={{ display: "grid", gap: 10 }}>
              {faq.map((q) => (
                <details key={q.question}>
                  <summary className="faq-question">{q.question}</summary>
                  <div>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>{q.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
