import { BG, TEXT, BORDER, FONT, SPACING, RADIUS, hexToRgba, SPECTRUM, ACCENT } from "@/src/styles/tokens";
import { SiteFooter, SiteHeader, EmotionalGradient } from "@/src/components";
import { positions, autonomic, scienceGrounding, faq } from "@/src/lib/gradient-data";
import { generateFAQJsonLd, generateSpeakableJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";

const TITLE = "The Emotional Gradient — a map of the nervous system's states";
const DESCRIPTION =
  "The nervous system continuously asks one question — is it safe, or is there danger? — and shifts the whole system into the state that fits, along a single gradient from rest, through connection and the defences, down to shutdown. An interactive map grounded in established science: Polyvagal Theory, stress physiology, cognitive science, interoception, trauma research and attachment.";

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
          <h1 style={{ margin: "0 auto", maxWidth: 820, fontSize: "clamp(32px, 6vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: TEXT.primary }}>
            The Emotional Gradient
          </h1>
          <p style={{ margin: "20px auto 0", maxWidth: 680, fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: 1.7, color: TEXT.secondary }}>
            We don’t stay the same person in every situation — open and trusting one moment, guarded or
            controlling the next. These shifts aren’t random — they follow a pattern in the nervous system.
          </p>
          <p id="gradient-intro" style={{ margin: "14px auto 0", maxWidth: 680, fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: 1.7, color: TEXT.secondary }}>
            Underneath everything, it is asking one question —{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>is it safe, or is there danger?</strong> — and it
            answers on its own, faster than thought. That answer moves it along a gradient:{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>connection and rest</strong> when it is safe,{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>fight · flight · fawn</strong> when it is threatened, and{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>freeze</strong> when nothing is left.
          </p>
        </section>

        {/* Interactive instrument */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }}>
          <EmotionalGradient />
        </section>

        {/* What the gradient explains — the payoff, directly under the instrument */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="explains-heading">
          <p style={eyebrowStyle}>What the gradient explains</p>
          <h2 id="explains-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
            From personal patterns to societal systems
          </h2>
          <p style={{ margin: "0 0 20px", maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
            The same shape repeats — from one nervous system to whole groups. Reading it makes four things visible.
          </p>
          <ul style={{ margin: "0 0 28px", padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
            {[
              ["Why people who care can still cause harm", "Under threat, empathy narrows — even in someone who means well."],
              ["How ordinary defence hardens into control, even oppression", "The same pattern, scaled from a person to a system."],
              ["Language for the shifts as they happen", "Recognised in ourselves and in others — not judged as character."],
              ["A way back to connection", "And a way to interrupt cycles of harm before they repeat."],
            ].map(([head, body]) => (
              <li key={head} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, marginTop: 9, width: 6, height: 6, borderRadius: "50%", background: SPECTRUM.azure }} aria-hidden="true" />
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
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.3)}`,
                background: hexToRgba(SPECTRUM.azure, 0.1),
                color: SPECTRUM.azure,
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
        </section>

        {/* The seven positions — static, crawlable reference */}
        <section style={{ ...sectionStyle, paddingTop: 8, paddingBottom: 56 }} aria-labelledby="positions-heading">
          <p style={eyebrowStyle}>The map</p>
          <h2 id="positions-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
            The seven positions, in order
          </h2>
          <p style={{ margin: "0 0 24px", maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
            One continuum, from rest through connection and the defences down to shutdown. Each position is a
            whole-system configuration, not a mood — and a passing response the system is built to move through and
            leave. When a position cannot be left, it hardens into the default.
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 12 }}>
            {positions.map((p) => (
              <li
                key={p.id}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "6px 14px",
                  padding: "14px 16px",
                  borderRadius: RADIUS.lg,
                  background: BG.diagram,
                  border: `1px solid ${BORDER.default}`,
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, minWidth: 190 }}>{p.mode}</span>
                <span style={{ fontFamily: FONT.mono, fontSize: 11, color: TEXT.muted }}>
                  {[p.familiar, autonomic[p.id]].filter(Boolean).join(" · ")}
                </span>
                <div style={{ flex: "1 1 280px", fontSize: 14, lineHeight: 1.55 }}>
                  <span style={{ color: TEXT.secondary }}>{p.mechanism}</span>
                  <span style={{ display: "block", marginTop: 4, color: TEXT.muted }}>
                    <strong style={{ fontWeight: 600, color: ACCENT.orange }}>Chronic</strong> — {p.mechanismChronic}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Grounded in established science — static, crawlable */}
        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="science-heading">
          <p style={eyebrowStyle}>Grounding</p>
          <h2 id="science-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
            Grounded in established science
          </h2>
          <p style={{ margin: "0 0 24px", maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
            The architecture leads; the following established research <em>converges with</em> and underwrites
            specific parts of it. The science traces the map — it does not frame it.
          </p>
          <div style={{ display: "grid", gap: 10 }}>
            {scienceGrounding.map((s) => (
              <div
                key={s.part}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "4px 14px",
                  paddingBottom: 10,
                  borderBottom: `1px solid ${BORDER.default}`,
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, minWidth: 190 }}>{s.part}</span>
                <span style={{ flex: "1 1 300px", fontSize: 14, lineHeight: 1.55, color: TEXT.secondary }}>
                  {s.science} <span style={{ color: TEXT.muted }}>· {s.authors}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ — static, crawlable (AEO / answer engines / voice) */}
        <section style={{ ...sectionStyle, paddingBottom: 40 }} aria-labelledby="faq-heading">
          <p style={eyebrowStyle}>Questions</p>
          <h2 id="faq-heading" style={{ margin: "0 0 24px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
            Common questions
          </h2>
          <div style={{ display: "grid", gap: 24 }}>
            {faq.map((q) => (
              <div key={q.question}>
                <h3 className="faq-question" style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 600, color: TEXT.primary }}>
                  {q.question}
                </h3>
                <p style={{ margin: 0, maxWidth: 760, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>{q.answer}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
