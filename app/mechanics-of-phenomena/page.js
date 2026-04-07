import Link from "next/link";
import { BG, TEXT, FONT, BORDER, ACCENT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What is the Mechanics of Phenomena series?",
    answer: "A growing collection of long-form essays by Anna Paretas-Artacho where observable phenomena — from science, nature, and human behavior — reveal the structure underneath. Each essay starts from a recognizable problem, not from the TEG-Blue framework, and shows the regulatory mechanisms operating in real situations.",
  },
  {
    question: "How do the Mechanics essays relate to the TEG-Blue frameworks?",
    answer: "The 12 frameworks explain the architecture. The Mechanics essays show it operating — starting from observable problems like why smart people make bad decisions, why evidence fails to change minds, or why people behave differently depending on who is watching. TEG-Blue concepts appear when the explanation calls for them, not before.",
  },
];
import MechanicsLayout from "./MechanicsLayout";
import { SERIES } from "./mechanics-config";

export const metadata = {
  title: "The Mechanics of Phenomena | TEG-Blue Research",
  description:
    "A growing collection where observable phenomena — from science, nature, and human behavior — reveal the structure underneath. Long-form essays by Anna Paretas-Artacho.",
  keywords: [
    "mechanics of phenomena",
    "emotional regulation",
    "pattern recognition",
    "human behavior",
    "systems thinking",
    "TEG-Blue",
    "nervous system",
    "regulatory systems",
  ],
  alternates: {
    canonical: "https://teg-blue.org/mechanics-of-phenomena",
  },
  openGraph: {
    title: "The Mechanics of Phenomena | TEG-Blue",
    description:
      "Observable phenomena reveal the structure underneath. Long-form essays on patterns in human behavior, nature, and systems.",
    url: "https://teg-blue.org/mechanics-of-phenomena",
    type: "website",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mechanics of Phenomena | TEG-Blue",
    description:
      "Observable phenomena reveal the structure underneath. Long-form essays by Anna Paretas-Artacho.",
  },
};

export default function MechanicsOfPhenomenaPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/mechanics-of-phenomena" />

      <MechanicsLayout showSectionHeader={true}>
        {/* Answer-first opening */}
        <h2
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: TEXT.primary,
            marginBottom: 16,
          }}
        >
          What are the Mechanics of Phenomena essays?
        </h2>
        <p style={{ fontSize: 15, color: TEXT.primary, lineHeight: 1.8, marginBottom: 32, fontWeight: 500 }}>
          The Mechanics of Phenomena is a collection of long-form essays where observable phenomena — from science, nature, and human behavior — reveal the regulatory structure underneath. Each essay starts from a recognizable problem, not from the TEG-Blue framework, and shows how nervous system mechanisms operate in real situations.
        </p>

        {/* Series index — cards grouped by series */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {SERIES.map((series) => (
            <section key={series.slug}>
              {/* Series header */}
              <div style={{ marginBottom: 16 }}>
                <h2
                  style={{
                    fontSize: 11,
                    fontFamily: FONT.mono,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: ACCENT.amber,
                    marginBottom: 6,
                  }}
                >
                  {series.name}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: TEXT.muted,
                    lineHeight: 1.65,
                  }}
                >
                  {series.description}
                </p>
              </div>

              {/* Piece cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {series.pieces.map((piece) => {
                  const href = `/mechanics-of-phenomena/${series.slug}/${piece.slug}`;
                  return (
                    <Link
                      key={piece.slug}
                      href={href}
                      style={{
                        display: "block",
                        padding: "20px 24px",
                        background: BG.card,
                        borderRadius: 10,
                        border: `1px solid ${BORDER.default}`,
                        borderLeft: `3px solid ${piece.featured ? ACCENT.amber : hexToRgba(ACCENT.amber, 0.3)}`,
                        textDecoration: "none",
                        transition: "border-color 0.2s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <span
                          style={{
                            fontFamily: FONT.mono,
                            fontSize: 11,
                            fontWeight: 600,
                            color: ACCENT.amber,
                            letterSpacing: "0.04em",
                          }}
                        >
                          No. {String(piece.number).padStart(2, "0")}
                        </span>
                        {piece.readingTime && (
                          <span
                            style={{
                              fontFamily: FONT.mono,
                              fontSize: 10,
                              color: TEXT.hint,
                              letterSpacing: "0.02em",
                            }}
                          >
                            {piece.readingTime} min read
                          </span>
                        )}
                        {piece.featured && (
                          <span
                            style={{
                              fontFamily: FONT.mono,
                              fontSize: 9,
                              fontWeight: 500,
                              color: TEXT.hint,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              padding: "2px 8px",
                              borderRadius: 4,
                              border: `1px solid ${BORDER.default}`,
                            }}
                          >
                            featured
                          </span>
                        )}
                      </div>
                      <h3
                        style={{
                          fontSize: 17,
                          fontWeight: 600,
                          color: piece.featured ? ACCENT.amber : TEXT.primary,
                          lineHeight: 1.3,
                          marginBottom: 8,
                        }}
                      >
                        {piece.title}
                      </h3>
                      {piece.subtitle && (
                        <p
                          style={{
                            fontSize: 13,
                            fontStyle: "italic",
                            color: TEXT.secondary,
                            lineHeight: 1.6,
                            marginBottom: 10,
                          }}
                        >
                          {piece.subtitle}
                        </p>
                      )}
                      {piece.connection && (
                        <p
                          style={{
                            fontFamily: FONT.mono,
                            fontSize: 10,
                            color: TEXT.hint,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {piece.connection}
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        {/* Cross-site link */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 32, paddingTop: 24, borderTop: `1px solid ${BORDER.default}` }}>
          <Link href="/frameworks-map" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            12 Frameworks →
          </Link>
          <a
            href="https://teg-blue.com/emotional-tools"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}
          >
            Emotional Tools (teg-blue.com) →
          </a>
        </div>
      </MechanicsLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Mechanics of Phenomena", url: "/mechanics-of-phenomena" },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "The Mechanics of Phenomena",
            url: "https://teg-blue.org/mechanics-of-phenomena",
            description: "A growing collection where observable phenomena — from science, nature, and human behavior — reveal the structure underneath. Long-form essays by Anna Paretas-Artacho.",
            inLanguage: "en",
            author: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
            },
            isPartOf: {
              "@type": "ResearchProject",
              name: "TEG-Blue: The Emotional Gradient Blueprint",
              url: "https://teg-blue.org",
            },
          }),
        }}
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
              name: "The Mechanics of Phenomena | TEG-Blue Research",
              url: "https://teg-blue.org/mechanics-of-phenomena",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}
