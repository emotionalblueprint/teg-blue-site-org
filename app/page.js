import { BG, TEXT, BORDER, FONT, SPACING, RADIUS, hexToRgba, SPECTRUM } from "@/src/styles/tokens";
import { SiteFooter, SiteHeader, EmotionalGradient, GradientMap } from "@/src/components";
import { positions, scienceGrounding, faq } from "@/src/lib/gradient-data";
import { generateFAQJsonLd, generateSpeakableJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";

const TITLE = "TEG-Blue — The Nervous System Gradient";
const DESCRIPTION =
  "The current public center of TEG-Blue: a research-grounded map of seven nervous-system states, showing how safety and threat reshape perception, emotion, body activation, behaviour, and repair.";

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
  author: { "@type": "Person", name: "Anna Paretas-Artacho", url: "https://teg-blue.org/about" },
  publisher: { "@type": "Organization", name: "TEG-Blue", url: "https://teg-blue.org" },
  isPartOf: {
    "@type": "ResearchProject",
    name: "TEG-Blue: The Emotional Gradient Blueprint",
    description: "A layered visual framework mapping how emotions, nervous systems, survival strategies, identity, and social patterns form and evolve.",
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

function Ld({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function StateSpineStrip() {
  return (
    <div
      className="state-spine-strip"
      aria-label="State spine from safety to shutdown"
      style={{
        margin: "28px auto 0",
        maxWidth: 820,
        padding: "2px",
        "--state-spine-border": BORDER.default,
      }}
    >
      <div className="state-spine-list" role="list" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {positions.map((p) => (
          <div
            className="state-spine-item"
            role="listitem"
            key={p.id}
            style={{
              "--state-color": p.acuteColor,
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
            <span className="state-spine-code" style={{ display: "block", fontFamily: FONT.diagram, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", color: p.acuteColor }}>
              {p.code}
            </span>
            <span className="state-spine-label" style={{ display: "block", marginTop: 3, fontSize: 11.5, lineHeight: 1.25, color: TEXT.secondary }}>
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
          <p style={eyebrowStyle}>TEG-Blue · The Emotional Gradient Blueprint</p>
          <h1 style={{ margin: "0 auto", maxWidth: 720, fontSize: "clamp(26px, 4vw, 34px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: TEXT.primary }}>
            The Nervous System Gradient
          </h1>
          <p style={{ margin: "20px auto 0", maxWidth: 680, fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: 1.7, color: TEXT.secondary }}>
            TEG-Blue is a layered visual framework for mapping how emotions, nervous systems, survival
            strategies, identity, and social patterns form and evolve. The Nervous System Gradient is its current public center.
          </p>
          <p style={{ margin: "14px auto 0", maxWidth: 680, fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: 1.7, color: TEXT.secondary }}>
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
                The gradient is the <strong style={{ color: TEXT.primary, fontWeight: 600 }}>continuous range</strong> of
                nervous system organisation the body moves through as it reads{" "}
                <strong style={{ color: TEXT.primary, fontWeight: 600 }}>safety, threat, and whether rest is possible</strong>.
              </p>
              <p style={{ margin: 0 }}>
                In <strong style={{ color: TEXT.primary, fontWeight: 600 }}>fluid movement</strong>, the system can{" "}
                <strong style={{ color: TEXT.primary, fontWeight: 600 }}>mobilise</strong> when danger is present,{" "}
                <strong style={{ color: TEXT.primary, fontWeight: 600 }}>return toward safety</strong> when danger has
                passed, and <strong style={{ color: TEXT.primary, fontWeight: 600 }}>settle into baseline</strong> when
                rest becomes possible.
              </p>
              <p style={{ margin: 0 }}>
                Wherever the system lands, <strong style={{ color: TEXT.primary, fontWeight: 600 }}>the whole organism
                reorganises</strong> around that state: body, mind, emotion, behaviour, perception, and the{" "}
                <strong style={{ color: TEXT.primary, fontWeight: 600 }}>capacity for repair</strong>.
              </p>
              <p style={{ margin: 0 }}>
                But when <strong style={{ color: TEXT.primary, fontWeight: 600 }}>threat has lasted too long</strong>, the
                organism can get <strong style={{ color: TEXT.primary, fontWeight: 600 }}>stuck operating from threat
                physiology</strong>, <strong style={{ color: TEXT.primary, fontWeight: 600 }}>scanning for danger</strong>{" "}
                even when the present moment is safe.
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
              The same shape can be read from one nervous system to families, institutions, and whole groups. It helps explain how harm forms without excusing the harm.
            </p>
            <ul style={{ margin: "0 0 28px", padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
              {[
                ["Why care is not always enough", "under threat, empathy narrows even when intent is good."],
                ["How harm can become normal", "when empathy stays offline for too long, the cost to others stops being fully registered."],
                ["How defence hardens into control", "repeated protection can become rule, punishment, exclusion, or system logic."],
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
              Research grounding and source traces
            </h2>
            <p style={{ margin: "0 0 24px", maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              The architecture leads, and the public framework shows where established research <em>converges with</em>
              specific parts of the map. These are source traces and grounding points, not a claim that the whole system
              has clinical validation.
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
