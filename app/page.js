import { BG, TEXT, BORDER, FONT, SPACING, RADIUS, hexToRgba, SPECTRUM, BLUE, MAIN_ORG, TONE } from "@/src/styles/tokens";
import SiteFooter from "@/src/components/SiteFooter";
import SiteHeader from "@/src/components/SiteHeader";
import EmotionalGradient from "@/src/components/EmotionalGradient";
import { positions, scienceGrounding, faq } from "@/src/lib/gradient-data";
import { generateFAQJsonLd, generateSpeakableJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";

const TITLE = "TEG-Blue — The Emotional Gradient Blueprint";
const HOME_HEADING = "The Nervous System Gradient";
const MAP_SUBTITLE =
  "A visual map of how emotional, bodily, and relational patterns shift across safety, threat, control, shutdown, regulation, and repair.";
const DESCRIPTION =
  "TEG-Blue is The Emotional Gradient Blueprint: a map that gathers established research into one visual framework for reading body state, emotion, relationship, protection, shutdown, regulation, and repair.";
const BASE_URL = "https://teg-blue.org";
const DATE_MODIFIED = "2026-07-12";
const RECOMMENDED_CITATION = "Paretas-Artacho, A. (2026). TEG-Blue: The Emotional Gradient Blueprint. https://teg-blue.org/";
const LICENSE_URL = "https://creativecommons.org/licenses/by/4.0/";
const ORCID_URL = "https://orcid.org/0009-0005-2394-7162";
const SCHEMA_IDS = {
  organization: `${BASE_URL}/#organization`,
  website: `${BASE_URL}/#website`,
  homepage: `${BASE_URL}/#homepage`,
  person: `${BASE_URL}/#anna-paretas-artacho`,
  gradient: `${BASE_URL}/#nervous-system-gradient`,
  states: `${BASE_URL}/#nervous-system-gradient-states`,
};

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
    "TEG-Blue",
    "The Emotional Gradient Blueprint",
    "Nervous System Gradient",
    "emotions as information",
    "body state",
    "emotional-pattern legibility",
    "emotional access",
    "nervous-system patterns",
    "state-shaped perception",
    "emotional regulation",
    "repair capacity",
    "responsible pattern reading",
    "scientific grounding",
    "biology and physiology",
    "autonomic neuroscience",
    "stress physiology",
    "affective neuroscience",
    "emotion science",
    "attachment research",
    "trauma research",
    "relational patterns",
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
  "@id": `${BASE_URL}/#nervous-system-gradient-state-order`,
  name: "Nervous-system states on the Nervous System Gradient",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: positions.length,
  itemListElement: positions.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@id": `${BASE_URL}/#nervous-system-gradient-state-${p.id}`,
    },
  })),
};

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": SCHEMA_IDS.homepage,
  url: BASE_URL,
  name: HOME_HEADING,
  headline: HOME_HEADING,
  description: DESCRIPTION,
  inLanguage: "en",
  dateModified: DATE_MODIFIED,
  isPartOf: { "@id": SCHEMA_IDS.website },
  author: { "@id": SCHEMA_IDS.person },
  creator: { "@id": SCHEMA_IDS.person },
  publisher: { "@id": SCHEMA_IDS.organization },
  mainEntity: { "@id": SCHEMA_IDS.gradient },
};

const gradientJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": SCHEMA_IDS.gradient,
  name: "The Nervous System Gradient",
  alternateName: "TEG-Blue: The Emotional Gradient Blueprint",
  url: BASE_URL,
  inLanguage: "en",
  description: MAP_SUBTITLE,
  dateModified: DATE_MODIFIED,
  mainEntityOfPage: { "@id": SCHEMA_IDS.homepage },
  author: { "@id": SCHEMA_IDS.person },
  creator: { "@id": SCHEMA_IDS.person },
  copyrightHolder: { "@id": SCHEMA_IDS.person },
  copyrightNotice: "TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient were created by Anna Paretas-Artacho. Original public written framework content is licensed CC BY 4.0 unless otherwise noted; marks, tools, code, Engine logic, and third-party materials are excluded.",
  license: LICENSE_URL,
  publisher: { "@id": SCHEMA_IDS.organization },
  isPartOf: {
    "@type": "ResearchProject",
    "@id": `${BASE_URL}/#research-project`,
    name: "TEG-Blue: The Emotional Gradient Blueprint",
    description: "A map that gathers established research into one visual framework for reading body state, emotion, relationship, protection, shutdown, regulation, and repair.",
    url: BASE_URL,
    creator: { "@id": SCHEMA_IDS.person },
    publisher: { "@id": SCHEMA_IDS.organization },
  },
  about: { "@id": SCHEMA_IDS.states },
  hasPart: positionsItemList,
  // Established research the architecture converges with — grounding, not derivation.
  citation: scienceGrounding.map((s) => ({
    "@type": "CreativeWork",
    name: s.science,
    creator: s.authors,
  })),
  keywords: metadata.keywords,
};

const gradientStatesJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": SCHEMA_IDS.states,
  name: "Nervous-system states on the Nervous System Gradient",
  url: BASE_URL,
  inLanguage: "en",
  description: "The ordered public state terms used by TEG-Blue to describe the Nervous System Gradient.",
  creator: { "@id": SCHEMA_IDS.person },
  publisher: { "@id": SCHEMA_IDS.organization },
  hasDefinedTerm: positions.map((p) => ({
    "@type": "DefinedTerm",
    "@id": `${BASE_URL}/#nervous-system-gradient-state-${p.id}`,
    name: p.mode,
    termCode: p.code,
    description: p.mechanism,
    ...(p.familiar ? { alternateName: p.familiar } : {}),
    inDefinedTermSet: { "@id": SCHEMA_IDS.states },
  })),
};

const faqJsonLd = generateFAQJsonLd(faq);
const speakableJsonLd = generateSpeakableJsonLd({
  name: HOME_HEADING,
  url: BASE_URL,
  cssSelectors: ["h1", "#entity-definition", "#gradient-intro", ".faq-question"],
});
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "TEG-Blue", url: "/" },
  { name: HOME_HEADING, url: "/" },
]);

const HOME_CSS = `
  .home-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    row-gap: clamp(18px, 3vw, 28px);
    align-items: start;
  }

  .home-hero-head {
    min-width: 0;
    max-width: 780px;
  }

  .home-hero-intro {
    min-width: 0;
    max-width: 760px;
  }

  .home-hero-title {
    max-width: min(100%, 760px);
    font-size: 58px;
    line-height: 1.02;
  }

  .home-hero-lead {
    font-size: 20px;
  }

  .home-gradient-heading {
    font-size: 34px;
  }

  .home-section-heading {
    font-size: 30px;
  }

  .home-hero-actions {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    justify-content: start;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
  }

  .home-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid var(--border-default);
    color: var(--text-secondary);
    background: var(--bg-primary);
    font-family: var(--font-mono);
    font-size: 11px;
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

  .home-state-strip {
    margin-top: 28px;
    max-width: 840px;
  }

  .home-state-strip-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .home-position-list {
    display: grid;
    gap: 0;
    max-width: 900px;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
  }

  .home-position-item {
    display: grid;
    grid-template-columns: 8px minmax(0, 1fr);
    gap: 12px;
    align-items: start;
    padding: 10px 0;
    border-bottom: 1px solid var(--border-default);
  }

  .home-position-bullet {
    width: 8px;
    height: 8px;
    margin-top: 7px;
    border-radius: 50%;
    background: var(--position-bullet-color);
  }

  .home-chronic-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: clamp(24px, 5vw, 56px);
    align-items: start;
  }

  .home-chronic-points {
    display: grid;
    gap: 14px;
  }

  @media (min-width: 1180px) {
    .home-hero-actions {
      gap: 10px;
    }

    .home-action {
      padding: 9px 13px;
      font-size: 12px;
    }
  }

  @media (max-width: 760px) {
    .home-hero {
      grid-template-columns: 1fr;
    }

    .home-hero-actions {
      grid-template-columns: repeat(2, minmax(0, max-content));
    }

    .home-state-strip {
      margin-top: 24px;
    }

    .home-hero-title {
      font-size: 52px;
    }

    .home-hero-lead {
      font-size: 18px;
    }

    .home-section-heading {
      font-size: 26px;
    }

    .home-gradient-heading {
      font-size: 30px;
    }

    .home-chronic-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 620px) {
    .home-hero-actions {
      grid-template-columns: 1fr;
      align-items: stretch;
    }

    .home-hero-title {
      font-size: 40px;
      line-height: 1.02;
    }

    .home-hero-lead {
      font-size: 17px;
    }

    .home-section-heading {
      font-size: 24px;
    }

    .home-gradient-heading {
      font-size: 27px;
    }

    .home-position-item {
      gap: 10px;
    }
  }
`;

function Ld({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const acutePositionSummaries = {
  baseline: "Restorative ground. Rest, digestion, recovery, and replenishment are available.",
  connection: "Non-defensive engagement. Presence, empathy, mutuality, and social connection are available.",
  calibration: "Safety or belonging is uncertain. Defensive organisation begins by checking what changed.",
  protection: "Immediate threat. Fight, flight, guarding, defence, or appeasement move forward.",
  strategic: "Persistent threat. Cognition organises around prediction, management, and control of variables.",
  domination: "Maximum protection. Force, power, and outcome become primary while empathy and impact may narrow.",
  shutdown: "Capacity exceeded. Mobilisation drops and conservation, withdrawal, or collapse become primary.",
};

const acutePositionIndex = positions.map((position) => ({
  ...position,
  summary: acutePositionSummaries[position.id],
}));

const chronicAccent = positions.find((position) => position.id === "protection")?.chronicColor;

const modeGroundingPrinciples = [
  {
    label: "Mode",
    body: "how the pattern feels and presents in lived experience.",
  },
  {
    label: "State",
    body: "how the nervous system is organizing attention, energy, and response.",
  },
  {
    label: "Configuration",
    body: "how mode and state appear together, either as a short-term shift or a pattern that keeps returning.",
  },
];

const attributionNotice = {
  title: "Authorship and use",
  body:
    "TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient were created by Anna Paretas-Artacho. Original public written framework content is published under CC BY 4.0: attribution is required, and reuse should link back to the source.",
  restriction:
    "Marks, logos, tools, code, Engine logic, product surfaces, and third-party materials are excluded unless otherwise noted. Applied builds, institutional implementation, product integration, and reuse of Engine or tool logic require written permission.",
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
  boxShadow: `0 18px 50px ${hexToRgba(BLUE[800], 0.06)}`,
};

function StateSpineStrip() {
  return (
    <div className="home-state-strip" aria-label="State spine from safety to shutdown">
      <div className="home-state-strip-list" role="list">
        {positions.map((p) => (
          <div
            role="listitem"
            key={p.id}
            style={{
              "--state-color": p.acuteColor,
              flex: "1 1 92px",
              minWidth: 92,
              borderRadius: RADIUS.md,
              border: `1px solid ${hexToRgba(BLUE[900], 0.18)}`,
              borderTop: `2px solid ${hexToRgba(BLUE[900], 0.32)}`,
              background: p.acuteColor,
              padding: "10px 10px 9px",
              color: BLUE[900],
              boxShadow: `inset 0 1px 0 ${hexToRgba(BLUE[50], 0.34)}`,
            }}
          >
            <span style={{ display: "block", fontFamily: FONT.diagram, fontSize: 12, fontWeight: 750, letterSpacing: 0, color: BLUE[900] }}>
              {p.code}
            </span>
            <span style={{ display: "block", marginTop: 3, fontSize: 11.5, lineHeight: 1.25, color: BLUE[900] }}>
              {p.atlasLabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AcuteGradientOrientation() {
  return (
    <div style={cardStyle}>
      <p style={{ ...sectionEyebrowStyle, margin: "0 0 8px" }}>How to read the acute Gradient</p>
      <h2 id="acute-gradient-heading" className="home-section-heading" style={{ margin: "0 0 10px", color: TEXT.primary }}>
        The seven core positions in the map
      </h2>
      <p style={{ margin: 0, maxWidth: 820, color: TEXT.secondary, fontSize: 16, lineHeight: 1.72 }}>
        The positions describe how emotional and nervous-system organisation may change as conditions are read as
        safe, uncertain, threatening, persistent, overwhelming, or beyond available capacity.
      </p>
      <p style={{ margin: "10px 0 0", maxWidth: 860, color: TEXT.secondary, fontSize: 14.5, lineHeight: 1.7 }}>
        Baseline and Connection are non-defensive. Safety Checking begins defensive organisation, which becomes more
        explicit through Protection, Strategic Management, and Power Mobilisation. Shutdown is a capacity-exceeded
        fallback.
      </p>

      <ul className="home-position-list" aria-label="Seven acute Gradient positions">
        {acutePositionIndex.map((position) => {
          const bulletColor = position.id === "baseline" ? BLUE[200] : position.acuteColor;
          return (
            <li
              className="home-position-item"
              key={position.id}
              style={{ "--position-bullet-color": bulletColor }}
            >
              <span className="home-position-bullet" aria-hidden="true" />
              <p style={{ margin: 0, color: TEXT.secondary, fontSize: 14, lineHeight: 1.62 }}>
                <strong style={{ color: TEXT.primary, fontWeight: 650 }}>{position.mode}</strong> — {position.summary}
              </p>
            </li>
          );
        })}
      </ul>

      <p style={{ margin: "16px 0 0", maxWidth: 870, color: TEXT.muted, fontSize: 13.5, lineHeight: 1.7 }}>
        Movement can happen quickly and may update as conditions change. Acute Shutdown may become accessible from the
        threat positions. These positions describe patterns—not fixed identities, diagnoses, or proof of another
        person&apos;s hidden internal state.
      </p>
    </div>
  );
}

function ChronicGradientOrientation() {
  return (
    <div
      style={{
        ...cardStyle,
        borderTop: `3px solid ${chronicAccent}`,
        background: homeSurface.primary,
      }}
    >
      <div className="home-chronic-grid">
        <div>
          <p style={{ ...sectionEyebrowStyle, margin: "0 0 8px", color: chronicAccent }}>Chronic organisation</p>
          <h2 id="chronic-gradient-heading" className="home-section-heading" style={{ margin: "0 0 10px", color: TEXT.primary }}>
            How chronic modes form
          </h2>
          <p style={{ margin: 0, color: TEXT.secondary, fontSize: 15, lineHeight: 1.72 }}>
            Chronic modes can develop when the body has to deal with danger, uncertainty, or overwhelm repeatedly or
            for a long time.
          </p>
          <p style={{ margin: "14px 0 0", color: TEXT.secondary, fontSize: 14.5, lineHeight: 1.7 }}>
            This can begin in childhood when care or safety is frightening, absent, inconsistent, or unpredictable. It
            can also develop later through repeated threat or prolonged stress without enough rest, support, or
            recovery.
          </p>
        </div>

        <div>
          <p style={{ ...sectionEyebrowStyle, margin: "0 0 10px", color: chronicAccent }}>Conditions that can contribute</p>
          <ul className="home-chronic-points" style={{ margin: 0, paddingLeft: 18, color: TEXT.secondary }}>
            <li style={{ fontSize: 13.5, lineHeight: 1.65 }}>Unsafe or unpredictable conditions during development.</li>
            <li style={{ fontSize: 13.5, lineHeight: 1.65 }}>Repeated threat, neglect, coercion, instability, loss, or overwhelm.</li>
            <li style={{ fontSize: 13.5, lineHeight: 1.65 }}>Prolonged stress with too little rest, safety, support, or recovery.</li>
          </ul>
          <p style={{ margin: "16px 0 0", color: TEXT.secondary, fontSize: 13.5, lineHeight: 1.68 }}>
            When protection is needed again and again, watchfulness, appeasement, control, force, or shutdown can
            become easier to reach than rest, open connection, or a flexible response.
          </p>
          <p
            style={{
              margin: "18px 0 0",
              padding: "12px 14px",
              borderLeft: `3px solid ${chronicAccent}`,
              background: hexToRgba(chronicAccent, 0.08),
              color: TEXT.primary,
              fontSize: 13.5,
              lineHeight: 1.65,
            }}
          >
            In chronic mode, every position is defensive. A person may look calm or connected while their body is
            still bracing, monitoring, pleasing, managing, or conserving energy. Shutdown can be reached from any
            chronic position.
          </p>
        </div>
      </div>

      <p
        style={{
          margin: "24px 0 0",
          paddingTop: 18,
          borderTop: `1px solid ${BORDER.default}`,
          color: TEXT.muted,
          fontSize: 13.5,
          lineHeight: 1.7,
        }}
      >
        Knowing how a chronic mode formed does not erase its effects. The practical questions remain: can impact be
        named, can another person&apos;s reality stay present, can responsibility be taken, and can the pattern change?
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Ld data={gradientJsonLd} />
      <Ld data={homePageJsonLd} />
      <Ld data={gradientStatesJsonLd} />
      <Ld data={faqJsonLd} />
      <Ld data={speakableJsonLd} />
      <Ld data={breadcrumbJsonLd} />
      <style dangerouslySetInnerHTML={{ __html: HOME_CSS }} />

      <SiteHeader currentPath="/" />

      <main id="main-content" style={{ position: "relative", zIndex: 1, background: "transparent", fontFamily: FONT.display, paddingBottom: 64 }}>
        {/* Hero — static, crawlable */}
        <section className="home-hero" style={{ ...sectionStyle, paddingTop: "clamp(42px, 7vw, 82px)", paddingBottom: "clamp(36px, 6vw, 64px)" }}>
          <div className="home-hero-head">
            <p style={{ ...eyebrowStyle, color: MAIN_ORG.accent }}>TEG-Blue · The Emotional Gradient Blueprint</p>
            <h1
              className="home-hero-title"
              style={{
                margin: 0,
                letterSpacing: 0,
                color: TEXT.primary,
              }}
            >
              The Nervous System Gradient
            </h1>
          </div>

          <div className="home-hero-intro">
            <p className="home-hero-lead" style={{ margin: "22px 0 0", maxWidth: 690, lineHeight: 1.65, color: TEXT.secondary }}>
              TEG-Blue is a visual map of how nervous-system state can shape emotion, perception, relationship,
              action, and repair.
            </p>
            <p id="entity-definition" style={{ margin: "16px 0 0", maxWidth: 720, fontSize: 15.5, lineHeight: 1.7, color: TEXT.secondary }}>
              The Nervous System Gradient brings established research together to show how these patterns may shift
              across safety, threat, control, shutdown, regulation, and repair.
            </p>
            <p id="gradient-intro" style={{ margin: "16px 0 0", maxWidth: 690, fontSize: 16, lineHeight: 1.75, color: TEXT.secondary }}>
              It makes linked changes visible: what the body prepares for, what draws attention, what feels possible,
              how another person is perceived, and whether repair can begin. It is a map for studying patterns, not a
              diagnosis or a claim of certainty about motive.
            </p>
            <div className="home-hero-actions" aria-label="Explore TEG-Blue">
              <a
                className="home-action primary"
                href="#gradient-map"
                style={{
                  color: MAIN_ORG.accent,
                  borderColor: hexToRgba(MAIN_ORG.accent, 0.48),
                  background: hexToRgba(MAIN_ORG.accent, 0.1),
                }}
              >
                Explore the map
              </a>
              <a className="home-action" href="#science-heading">Research basis</a>
              <a className="home-action" href="https://teg-blue.com/">Practical tools ↗</a>
            </div>
            <StateSpineStrip />
          </div>
        </section>

        {/* Acute orientation — the conceptual key before interaction */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="acute-gradient-heading">
          <AcuteGradientOrientation />
        </section>

        {/* Interactive instrument */}
        <section id="gradient-map" style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="gradient-map-heading">
          <div style={{ margin: "0 0 clamp(16px, 3vw, 24px)", maxWidth: 840 }}>
            <p style={{ ...sectionEyebrowStyle, margin: "0 0 8px" }}>Gradient Map</p>
            <h2
              className="home-gradient-heading"
              id="gradient-map-heading"
              style={{
                margin: 0,
                color: TEXT.primary,
                lineHeight: 1.12,
                letterSpacing: 0,
              }}
            >
              Move through the nervous-system Gradient.
            </h2>
            <p style={{ margin: "10px 0 0", maxWidth: 760, color: TEXT.secondary, fontSize: 15.5, lineHeight: 1.7 }}>
              Use the map to see how a shift in state changes what becomes available: body information, perception,
              emotion, empathy, repair, and the capacity to stay connected.
            </p>
          </div>
          <EmotionalGradient />
        </section>

        {/* Chronic organisation — introduced after the acute instrument */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="chronic-gradient-heading">
          <ChronicGradientOrientation />
        </section>

        {/* What the gradient explains — the payoff, directly under the instrument */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="explains-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>What the gradient explains</p>
            <h2 id="explains-heading" className="home-section-heading" style={{ margin: "0 0 8px", letterSpacing: 0, color: TEXT.primary }}>
              From state shifts to relationship patterns
            </h2>
            <p style={{ margin: "0 0 20px", maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              The Gradient connects changes that are often considered separately. It helps a reader examine what the
              body is preparing for, how attention and emotion change, what happens between people, and what conditions
              may allow repair—while keeping impact, accountability, and boundaries in view.
            </p>
            <ul style={{ margin: "0 0 28px", padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
              {[
                ["Emotion as information", "feelings can signal body state, need, boundary, impact, or repair without becoming automatic fact."],
                ["Why care is not always enough", "under threat, empathy and repair can narrow even when care is present."],
                ["How rupture repeats", "a short-term shift can become a familiar pattern of distance, defence, withdrawal, or pressure for certainty."],
                ["How protection can become control", "repeated protection may organize around managing, testing, pursuing, avoiding, or overriding another person's options."],
                ["What repair requires", "repair depends on enough capacity for impact, empathy, accountability, boundary, and changed pattern to become available."],
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
                href="/foundations"
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
                Learn how to read the Gradient
              </a>
              <span style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: 0, color: TEXT.muted }}>TEG-Blue Overview</span>
            </div>
          </div>
        </section>

        {/* Grounded in established science — static, crawlable */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="science-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Research</p>
            <h2 id="science-heading" className="home-section-heading" style={{ margin: "0 0 8px", letterSpacing: 0, color: TEXT.primary }}>
              What research supports—and where its limits are
            </h2>
            <p style={{ margin: "0 0 24px", maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              TEG-Blue organizes existing research into a visual framework. Established science grounds specific parts
              of the map; no single source is treated as proof of the whole architecture.
            </p>
            <p style={{ margin: "0 0 20px", maxWidth: 760, fontSize: 14.5, lineHeight: 1.7, color: TEXT.secondary }}>
              Each part of the map is checked separately: body state, perception, thinking, activation, emotion,
              access to other people, action, repeated patterns, and repair.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "14px 22px",
                marginBottom: 24,
                padding: "16px 0",
                borderTop: `1px solid ${BORDER.default}`,
                borderBottom: `1px solid ${BORDER.default}`,
              }}
            >
              {modeGroundingPrinciples.map((item) => (
                <div key={item.label}>
                  <p style={{ margin: 0, fontFamily: FONT.diagram, fontSize: 10, fontWeight: 650, textTransform: "uppercase", letterSpacing: 0, color: TONE.spectrum.azure }}>
                    {item.label}
                  </p>
                  <p style={{ margin: "5px 0 0", fontSize: 13.5, lineHeight: 1.6, color: TEXT.secondary }}>{item.body}</p>
                </div>
              ))}
            </div>
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
            <p style={{ margin: "22px 0 0", maxWidth: 760, fontSize: 14, lineHeight: 1.65, color: TEXT.secondary }}>
              The Scientific Grounding page explains which research areas support each part of the map and where each
              claim stops.{" "}
              <a href="/scientific-foundations" style={{ color: TONE.spectrum.indigo, textDecoration: "none", fontWeight: 600 }}>
                Read the scientific grounding
              </a>
              .
            </p>
          </div>
        </section>

        {/* Authorship and use — visible licensing boundary */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="rights-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Use and attribution</p>
            <h2 id="rights-heading" className="home-section-heading" style={{ margin: "0 0 8px", letterSpacing: 0, color: TEXT.primary }}>
              {attributionNotice.title}
            </h2>
            <p style={{ margin: "0 0 14px", maxWidth: 760, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              {attributionNotice.body}{" "}
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
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
            <div
              style={{
                marginTop: 18,
                paddingTop: 16,
                borderTop: `1px solid ${BORDER.default}`,
                display: "grid",
                gap: 8,
              }}
            >
              <p style={{ margin: 0, fontFamily: FONT.mono, fontSize: 11, fontWeight: 650, letterSpacing: 0, textTransform: "uppercase", color: TEXT.muted }}>
                Recommended citation
              </p>
              <p style={{ margin: 0, maxWidth: 820, fontSize: 14.5, lineHeight: 1.65, color: TEXT.secondary }}>
                {RECOMMENDED_CITATION}
              </p>
              <p style={{ margin: 0, display: "flex", flexWrap: "wrap", gap: "8px 14px", fontFamily: FONT.mono, fontSize: 11.5, lineHeight: 1.6, color: TEXT.muted }}>
                <a href={ORCID_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--spectrum-indigo)", textDecoration: "none", fontWeight: 650 }}>
                  ORCID
                </a>
                <a href={LICENSE_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--spectrum-indigo)", textDecoration: "none", fontWeight: 650 }}>
                  CC BY 4.0
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ — static, crawlable (AEO / answer engines / voice); native <details> */}
        <section style={{ ...sectionStyle, paddingBottom: 40 }} aria-labelledby="faq-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Questions</p>
            <h2 id="faq-heading" className="home-section-heading" style={{ margin: "0 0 24px", letterSpacing: 0, color: TEXT.primary }}>
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
