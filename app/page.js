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

  .home-comparison-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    margin-top: 24px;
  }

  .home-vocabulary-grid,
  .home-distinction-grid,
  .home-repair-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .home-return-sequence {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    margin-top: 22px;
    overflow-x: auto;
  }

  .home-return-step {
    min-width: 150px;
    padding: 14px;
    border: 1px solid var(--border-default);
    border-right: 0;
  }

  .home-return-step:last-child {
    border-right: 1px solid var(--border-default);
  }

  .home-scan-anchor {
    color: var(--text-primary);
    font-weight: 650;
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

    .home-comparison-grid,
    .home-vocabulary-grid,
    .home-distinction-grid,
    .home-repair-grid {
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

  }
`;

function Ld({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const modeGroundingPrinciples = [
  {
    label: "Organisation",
    body: "how energy, attention, perception, feeling, connection, and action are coordinated.",
  },
  {
    label: "Position",
    body: "a coordinate in the Gradient, not a person, personality, diagnosis, or permanent identity.",
  },
  {
    label: "Claim boundary",
    body: "each part of the map is grounded and tested separately; no single source proves the whole architecture.",
  },
];

const vocabulary = [
  {
    label: "Nervous-system organisation",
    body: "How the nervous system coordinates energy, attention, perception, feeling, connection, and action under particular conditions.",
  },
  {
    label: "Inner Compass",
    body: "The body's changing access to internal signals, differentiated feeling, the situation around it, and what matters enough to guide action. It can provide important information, but it is not infallible intuition.",
  },
  {
    label: "Position",
    body: "One location in the Gradient, showing how the nervous system is organised there. It describes the organisation, not the person.",
  },
];

const returnSteps = [
  ["01", "Conditions change", "Danger, rupture, demand, loss, or uncertainty actually changes."],
  ["02", "Protection completes", "The required protective action succeeds, stops, or becomes unnecessary."],
  ["03", "The read updates", "The organism detects that present conditions are now different."],
  ["04", "Return opens", "Defensive organisation can begin to relinquish control of action."],
  ["05", "Capacities re-enter", "Reflection, awareness, empathy, and choice become usable again."],
  ["06", "Recovery continues", "Activation, depletion, pain, metabolic, or sleep costs may remain."],
  ["07", "Learning integrates", "Later organisation may change through repeated evidence and experience."],
];

const fluidAccent = positions.find((position) => position.id === "connection")?.acuteColor;
const chronicAccent = positions.find((position) => position.id === "protection")?.chronicColor;

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

function GradientOrientation() {
  return (
    <div style={cardStyle}>
      <p style={{ ...sectionEyebrowStyle, margin: "0 0 8px" }}>How to read the Gradient</p>
      <h2 id="gradient-orientation-heading" className="home-section-heading" style={{ margin: "0 0 10px", color: TEXT.primary }}>
        The same behaviour can arise through different forms of organisation
      </h2>
      <p style={{ margin: 0, maxWidth: 850, color: TEXT.secondary, fontSize: 15.5, lineHeight: 1.72 }}>
        Strong behaviour does not explain itself. Someone may become angry, withdraw, refuse, plan carefully, use force,
        or appear completely calm. One interaction cannot tell us whether the response is moving with present conditions,
        repeating a learned survival pattern, or being used deliberately to control another person. The Gradient looks
        at what happens after the pressure changes.
      </p>
      <div className="home-comparison-grid">
        {[
          {
            label: "Fluid Gradient",
            color: fluidAccent,
            body: "Organisation changes responsively with present conditions. Protection may temporarily narrow reflection, empathy, or relational access. As conditions change, the response can update, relinquish force, regain a wider view, and make repair possible.",
          },
          {
            label: "Chronic Survival",
            color: chronicAccent,
            body: "Defensive organisation remains active or is repeatedly reconstructed. Monitoring, pleasing, guarding, managing, pressuring, or withdrawing may continue when the present environment no longer corresponds to the pattern.",
          },
        ].map((item) => (
          <div key={item.label} style={{ padding: "18px 18px 20px", border: `1px solid ${BORDER.default}`, borderTop: `3px solid ${item.color}`, borderRadius: RADIUS.md, background: homeSurface.primary }}>
            <h3 style={{ margin: 0, color: TEXT.primary, fontSize: 18 }}>{item.label}</h3>
            <p style={{ margin: "8px 0 0", color: TEXT.secondary, fontSize: 14, lineHeight: 1.7 }}>{item.body}</p>
          </div>
        ))}
      </div>
      <p style={{ margin: "20px 0 0", padding: "14px 16px", borderLeft: `3px solid ${MAIN_ORG.accent}`, background: hexToRgba(MAIN_ORG.accent, 0.07), color: TEXT.secondary, fontSize: 13.5, lineHeight: 1.7 }}>
        <strong className="home-scan-anchor">A Position names the organisation, not the person.</strong> The map does not
        establish personality, diagnosis, permanent identity, or another person&apos;s hidden internal state.
      </p>
    </div>
  );
}

function VocabularyKey() {
  return (
    <div className="home-vocabulary-grid">
      {vocabulary.map((item) => (
        <div key={item.label} style={{ padding: "18px", border: `1px solid ${BORDER.default}`, borderRadius: RADIUS.md, background: homeSurface.primary }}>
          <h3 style={{ margin: 0, color: TEXT.primary, fontSize: 16 }}>{item.label}</h3>
          <p style={{ margin: "7px 0 0", color: TEXT.secondary, fontSize: 13.5, lineHeight: 1.65 }}>{item.body}</p>
        </div>
      ))}
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
              People do not respond in the same way under safety, uncertainty, pressure, and threat.
            </p>
            <p id="entity-definition" style={{ margin: "16px 0 0", maxWidth: 720, fontSize: 15.5, lineHeight: 1.7, color: TEXT.secondary }}>
              TEG-Blue maps how these changing conditions can reorganise attention, emotion, perception, relationship,
              action, and repair. The Nervous System Gradient brings these linked changes into one visual framework.
            </p>
            <p id="gradient-intro" style={{ margin: "16px 0 0", maxWidth: 690, fontSize: 16, lineHeight: 1.75, color: TEXT.secondary }}>
              Sometimes the response moves with what is happening now. Sometimes an organisation learned under earlier
              conditions continues into the present. Each Position describes that organisation—<strong className="home-scan-anchor">not
              a person, personality, diagnosis, or permanent identity.</strong>
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
          </div>
        </section>

        {/* The two organisational readings come before the seven positions. */}
        <section style={{ ...sectionStyle, paddingBottom: 32 }} aria-labelledby="gradient-orientation-heading">
          <GradientOrientation />
        </section>

        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-label="Key Gradient vocabulary">
          <VocabularyKey />
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
              Compare Fluid and Chronic organisation.
            </h2>
            <p style={{ margin: "10px 0 0", maxWidth: 760, color: TEXT.secondary, fontSize: 15.5, lineHeight: 1.7 }}>
              Move through the seven Positions, then switch the Gradient reading to see how present conditions and
              learned survival organisation may shape perception, emotion, empathy, action, and repair differently.
            </p>
            <StateSpineStrip />
          </div>
          <EmotionalGradient />
        </section>

        {/* Ethical information model and interpretive boundaries. */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="explains-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Ethical reading</p>
            <h2 id="explains-heading" className="home-section-heading" style={{ margin: "0 0 8px", letterSpacing: 0, color: TEXT.primary }}>
              What the Gradient helps distinguish
            </h2>
            <p style={{ margin: "0 0 8px", maxWidth: 760, fontSize: 17, lineHeight: 1.65, color: TEXT.primary }}>
              <strong>Emotion is real information, but not automatic fact.</strong>
            </p>
            <p style={{ margin: "0 0 22px", maxWidth: 790, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              A feeling may tell us that something changed in the body, a boundary was crossed, connection feels
              uncertain, harm occurred, or protection is needed. It does not tell us by itself exactly what happened,
              what another person intended, or who that person is. Disconnection from emotion is not objectivity, and a
              calm or coherent presentation is not complete evidence of safety or empathy.
            </p>
            <div className="home-distinction-grid">
              {[
                ["Feeling and fact", "Both matter, but they answer different questions."],
                ["Distress and danger", "Visible activation does not establish who or what is unsafe."],
                ["Calm and safety", "Control can look composed while its impact appears first in another person."],
                ["Protection and control", "A protective origin and a harmful or controlling effect can coexist."],
                ["Explanation and responsibility", "Understanding a mechanism does not complete accountability or repair."],
              ].map(([head, body]) => (
                <div key={head} style={{ paddingTop: 12, borderTop: `2px solid ${SPECTRUM.indigo}` }}>
                  <h3 style={{ margin: 0, color: TEXT.primary, fontSize: 15 }}>{head}</h3>
                  <p style={{ margin: "5px 0 0", color: TEXT.secondary, fontSize: 13.5, lineHeight: 1.6 }}>{body}</p>
                </div>
              ))}
            </div>
            <p style={{ margin: "24px 0 0", padding: "15px 16px", borderLeft: `3px solid ${chronicAccent}`, background: hexToRgba(chronicAccent, 0.08), color: TEXT.secondary, fontSize: 14, lineHeight: 1.7 }}>
              <strong className="home-scan-anchor">The Gradient cannot prove intent from one interaction.</strong> What
              happens over time tells us more. Does the pattern repeat after its impact is known, intensify when a
              boundary is set, change across audiences, remove another person&apos;s choices, or resist repair? These
              observations can clarify harm and responsibility without claiming access to another person&apos;s mind. A
              protective origin does not make harmful behaviour harmless.
            </p>
          </div>
        </section>

        {/* Return and repair are related but not interchangeable. */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="return-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Return</p>
            <h2 id="return-heading" className="home-section-heading" style={{ margin: "0 0 8px", color: TEXT.primary }}>
              How protection begins to release
            </h2>
            <p style={{ margin: 0, maxWidth: 800, color: TEXT.secondary, fontSize: 15, lineHeight: 1.7 }}>
              TEG-Blue calls this movement <strong className="home-scan-anchor">Return</strong>. It begins when the nervous
              system can register that the present protective response is no longer needed, or can be safely interrupted.
              Return is not simply calming down, complying, withdrawing, becoming exhausted, apologising, or reconnecting.
            </p>
            <div className="home-return-sequence" aria-label="A possible sequence of Return">
              {returnSteps.map(([number, label, body]) => (
                <div className="home-return-step" key={number}>
                  <span style={{ fontFamily: FONT.mono, color: MAIN_ORG.accent, fontSize: 10, fontWeight: 700 }}>{number}</span>
                  <h3 style={{ margin: "7px 0 0", color: TEXT.primary, fontSize: 14, lineHeight: 1.35 }}>{label}</h3>
                  <p style={{ margin: "6px 0 0", color: TEXT.secondary, fontSize: 12.5, lineHeight: 1.55 }}>{body}</p>
                </div>
              ))}
            </div>
            <p style={{ margin: "18px 0 0", color: TEXT.muted, fontSize: 13.5, lineHeight: 1.65 }}>
              These are gates, not fixed stages or a universal clock. Return can make accountability and repair more
              available; it does not establish that repair has happened.
            </p>
          </div>
        </section>

        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="repair-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>After rupture</p>
            <h2 id="repair-heading" className="home-section-heading" style={{ margin: "0 0 20px", color: TEXT.primary }}>
              Repair has three distinct territories
            </h2>
            <div className="home-repair-grid">
              {[
                ["Responsibility and reparation", "What can the person who caused harm stop, acknowledge, take responsibility for, restore, or change?"],
                ["Recovery after harm", "What safety, distance, support, justice, grief, or meaning belongs to the person affected?"],
                ["Relational rebuilding", "Do the people involved freely choose renewed contact, trust, or reconciliation?"],
              ].map(([head, body]) => (
                <div key={head} style={{ padding: "18px", border: `1px solid ${BORDER.default}`, borderRadius: RADIUS.md }}>
                  <h3 style={{ margin: 0, color: TEXT.primary, fontSize: 16 }}>{head}</h3>
                  <p style={{ margin: "7px 0 0", color: TEXT.secondary, fontSize: 13.5, lineHeight: 1.65 }}>{body}</p>
                </div>
              ))}
            </div>
            <p style={{ margin: "20px 0 0", color: TEXT.secondary, fontSize: 14, lineHeight: 1.65 }}>
              Reparation can continue without forgiveness or renewed access. Recovery does not require reconciliation.
            </p>
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
              TEG-Blue organizes existing research into a visual framework. Established science grounds{" "}
              <strong className="home-scan-anchor">specific parts of the map</strong>;{" "}
              <strong className="home-scan-anchor">no single source</strong> is treated as proof of the whole architecture.
            </p>
            <p style={{ margin: "0 0 20px", maxWidth: 760, fontSize: 14.5, lineHeight: 1.7, color: TEXT.secondary }}>
              <strong className="home-scan-anchor">Each part of the map is checked separately</strong>: body state,
              perception, thinking, activation, emotion, access to other people, action, repeated patterns, and repair.
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

        {/* Translation layer and applied work */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="engine-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>From map to public tool</p>
            <h2 id="engine-heading" className="home-section-heading" style={{ margin: "0 0 8px", color: TEXT.primary }}>
              The Engine keeps the translation traceable
            </h2>
            <p style={{ margin: 0, maxWidth: 820, color: TEXT.secondary, fontSize: 15, lineHeight: 1.7 }}>
              A public tool rarely needs every layer of the framework. The TEG-Blue Engine keeps the source, interpretation,
              public language, ethical limits and intended reader connected while selecting only the detail a particular use requires.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14, marginTop: 22 }}>
              <a href="/engine" style={{ padding: 20, border: `1px solid ${BORDER.default}`, borderTop: `3px solid ${SPECTRUM.azure}`, borderRadius: RADIUS.md, color: TEXT.primary, textDecoration: "none" }}>
                <strong style={{ display: "block", fontSize: 18 }}>How the Engine works</strong>
                <span style={{ display: "block", marginTop: 8, color: TEXT.secondary, fontSize: 13.5, lineHeight: 1.6 }}>See what sits behind a clear behaviour page and what the Engine does not claim.</span>
              </a>
              <a href="/applied-work" style={{ padding: 20, border: `1px solid ${BORDER.default}`, borderTop: `3px solid ${SPECTRUM.indigo}`, borderRadius: RADIUS.md, color: TEXT.primary, textDecoration: "none" }}>
                <strong style={{ display: "block", fontSize: 18 }}>Applied work with organisations</strong>
                <span style={{ display: "block", marginTop: 8, color: TEXT.secondary, fontSize: 13.5, lineHeight: 1.6 }}>Understand the questions, process, safeguards and rights involved in a new build.</span>
              </a>
            </div>
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
