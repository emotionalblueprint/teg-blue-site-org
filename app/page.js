import { BG, TEXT, BORDER, FONT, SPACING, RADIUS, hexToRgba, SPECTRUM } from "@/src/styles/tokens";
import { SiteFooter, SiteHeader, EmotionalGradient, GradientMap } from "@/src/components";
import { positions, scienceGrounding, faq } from "@/src/lib/gradient-data";
import { generateFAQJsonLd, generateSpeakableJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";

const TITLE = "The Emotional Gradient — a map of the nervous system's states";
const DESCRIPTION =
  "The nervous system continuously asks one question — is it safe, or is there danger? — and shifts the whole system into the state that fits. The seven states form one gradient from rest, through connection and the defences, down to shutdown.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://teg-blue.org" },
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
    siteName: "TEG-Blue Research",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// ─── JSON-LD — the logic (ordered ItemList) + the grounding (citations) ──────

const positionsItemList = {
  "@type": "ItemList",
  name: "Nervous-system states on the Emotional Gradient",
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
        name: "The Emotional Gradient",
        url: "https://teg-blue.org",
      },
    },
  })),
};

const gradientJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "The Emotional Gradient",
  alternateName: "The Emotional Gradient Blueprint",
  url: "https://teg-blue.org",
  inLanguage: "en",
  description: DESCRIPTION,
  author: { "@type": "Person", name: "Anna Paretas-Artacho", url: "https://teg-blue.org/about" },
  publisher: { "@type": "Organization", name: "TEG-Blue Research", url: "https://teg-blue.org" },
  isPartOf: {
    "@type": "ResearchProject",
    name: "TEG-Blue: The Emotional Gradient Blueprint",
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
  name: "The Emotional Gradient",
  url: "https://teg-blue.org",
  cssSelectors: ["#gradient-intro", "h1", ".faq-question"],
});
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "TEG-Blue", url: "/" },
  { name: "The Emotional Gradient", url: "/" },
]);

function Ld({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function StateSpineStrip() {
  return (
    <div
      aria-label="State spine from safety to shutdown"
      style={{
        margin: "28px auto 0",
        maxWidth: 820,
        padding: "2px",
      }}
    >
      <div role="list" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {positions.map((p) => (
          <div
            role="listitem"
            key={p.id}
            style={{
              flex: "1 1 92px",
              minWidth: 92,
              borderRadius: RADIUS.md,
              border: `1px solid ${BORDER.default}`,
              borderTop: `2px solid ${p.acuteColor}`,
              background: `linear-gradient(180deg, ${hexToRgba(p.acuteColor, 0.12)}, transparent)`,
              padding: "10px 10px 9px",
              textAlign: "left",
            }}
          >
            <span style={{ display: "block", fontFamily: FONT.diagram, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", color: p.acuteColor }}>
              {p.code}
            </span>
            <span style={{ display: "block", marginTop: 3, fontSize: 11.5, lineHeight: 1.25, color: TEXT.secondary }}>
              {p.atlasLabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: TEXT.muted,
};
// Section eyebrows lead in the blue "diagram voice"; the hero eyebrow stays muted.
const sectionEyebrowStyle = { ...eyebrowStyle, color: "var(--spectrum-indigo)" };
// Bordered instrument-surface card — the research register from the prototype.
const cardStyle = {
  background: BG.diagram,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.xl,
  padding: "clamp(20px, 3vw, 28px)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
};

export default function Home() {
  return (
    <>
      <Ld data={gradientJsonLd} />
      <Ld data={faqJsonLd} />
      <Ld data={speakableJsonLd} />
      <Ld data={breadcrumbJsonLd} />

      <SiteHeader />

      <main id="main-content" style={{ background: BG.page, fontFamily: FONT.display, paddingBottom: 64 }}>
        {/* Hero — static, crawlable */}
        <section style={{ ...sectionStyle, paddingTop: "clamp(48px, 8vw, 88px)", paddingBottom: 40, textAlign: "center" }}>
          <p style={eyebrowStyle}>The Emotional Gradient Blueprint</p>
          <h1 style={{ margin: "0 auto", maxWidth: 720, fontSize: "clamp(26px, 4vw, 34px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: TEXT.primary }}>
            The Emotional Gradient
          </h1>
          <p style={{ margin: "20px auto 0", maxWidth: 680, fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: 1.7, color: TEXT.secondary }}>
            We do not stay the same in every situation — open and trusting one moment, guarded or controlling
            the next. These shifts are not random. They are state changes in the nervous system.
          </p>
          <p id="gradient-intro" style={{ margin: "14px auto 0", maxWidth: 680, fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: 1.7, color: TEXT.secondary }}>
            The body keeps reading one question —{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>is it safe, or is there danger?</strong> — faster
            than thought. Its answer lands the whole system on one line:{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>rest and connection</strong> at the safe end,{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>defence and control</strong> as threat rises, and{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>shutdown</strong> when mobilisation cannot form.
          </p>
          <StateSpineStrip />
          <div style={{ width: 48, height: 2, borderRadius: 2, background: "var(--spectrum-azure)", opacity: 0.7, margin: "24px auto 0" }} aria-hidden="true" />
        </section>

        {/* What the gradient is — definitional note with its own convergent-science trace */}
        <section style={sectionStyle}>
          <div style={{ ...cardStyle, padding: "clamp(16px, 2.5vw, 22px)" }}>
            <p style={{ ...sectionEyebrowStyle, color: "var(--spectrum-azure)", margin: "0 0 8px" }}>What the gradient is</p>
            <div style={{ display: "grid", gap: 6, fontSize: 14, lineHeight: 1.6, color: TEXT.secondary }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: TEXT.primary, fontWeight: 600 }}>One continuous state-spine</strong> — not separate boxes.
              </p>
              <p style={{ margin: 0 }}>
                The seven states are whole-system configurations:
                perception, thinking, body activation, feeling, behaviour, and repair route move together.
              </p>
              <p style={{ margin: 0 }}>
                Fluid, the system moves through the line and leaves states again. Under chronic load, it stops
                flowing and snaps to fixed points.
              </p>
            </div>
            <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px solid ${BORDER.default}` }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                <p style={{ margin: 0, fontFamily: FONT.diagram, fontSize: 9, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--spectrum-azure)" }}>Atlas trace</p>
                <span style={{ fontFamily: FONT.diagram, fontSize: 9, letterSpacing: "0.06em", color: TEXT.muted }}>M2 + GC · F1</span>
              </div>
              <p style={{ margin: "6px 0 0", paddingLeft: 10, borderLeft: `2px solid ${BORDER.default}`, fontSize: 13, lineHeight: 1.6, color: TEXT.secondary }}>
                The state is the position on the line, and the line is the gradient. What selects the state is the
                body’s below-thought read for safe-or-dangerous.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive instrument */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }}>
          <EmotionalGradient />
        </section>

        {/* What the gradient explains — the payoff, directly under the instrument */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="explains-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>What the gradient explains</p>
            <h2 id="explains-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
              From personal patterns to societal systems
            </h2>
            <p style={{ margin: "0 0 20px", maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              The same shape can be read from one nervous system to whole groups. It makes four shifts easier to see.
            </p>
            <ul style={{ margin: "0 0 28px", padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
              {[
                ["Why people who care can still cause harm", "under threat, empathy narrows even when intent is good."],
                ["How defence hardens into control", "the same state logic can scale from a person to a system."],
                ["Language for shifts as they happen", "recognised as state changes, not judged as character."],
                ["A route back to connection", "repair begins with the state the system is actually in."],
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
                Put it to use — explore the tools ↗
              </a>
              <span style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.04em", color: TEXT.muted }}>teg-blue.com</span>
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
            <p style={sectionEyebrowStyle}>Grounding</p>
            <h2 id="science-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
              Grounded in established science
            </h2>
            <p style={{ margin: "0 0 24px", maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              The architecture leads — the following established research <em>converges with</em> and underwrites
              specific parts of it. The science traces the map, it does not frame it.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px 28px" }}>
              {scienceGrounding.map((s) => (
                <div key={s.part}>
                  <p style={{ margin: 0, fontFamily: FONT.diagram, fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--spectrum-indigo)" }}>{s.part}</p>
                  <p style={{ margin: "4px 0 0", fontSize: 13.5, lineHeight: 1.55, color: TEXT.secondary }}>
                    {s.science} <span style={{ color: TEXT.muted }}>· {s.authors}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — static, crawlable (AEO / answer engines / voice); native <details> */}
        <section style={{ ...sectionStyle, paddingBottom: 40 }} aria-labelledby="faq-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Questions</p>
            <h2 id="faq-heading" style={{ margin: "0 0 24px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
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
