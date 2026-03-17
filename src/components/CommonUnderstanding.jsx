import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba } from "../styles/tokens";

/**
 * CommonUnderstanding — Entry-point reframe section for framework pages.
 *
 * Placed between FrameworkHero and Core Propositions. Shows one or more
 * reframed terms: what most people think the word means, and what the
 * nervous system is actually doing.
 *
 * @param {{ title: string, commonUnderstanding: string, definition: string }[]} terms
 */
export default function CommonUnderstanding({ terms = [] }) {
  if (!terms.length) return null;

  return (
    <section
      id="common-understanding"
      aria-labelledby="heading-common-understanding"
      style={{ marginBottom: 48 }}
    >
      <h2
        id="heading-common-understanding"
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: SPECTRUM.slate,
          marginBottom: 20,
          paddingBottom: 8,
          borderBottom: `2px solid ${hexToRgba(SPECTRUM.slate, 0.2)}`,
        }}
      >
        The Common Understanding
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {terms.map((term) => (
          <article
            key={term.title}
            style={{
              borderRadius: 8,
              background: BG.inset,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.slate}`,
              padding: "20px 24px",
            }}
          >
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 16,
              }}
            >
              {term.title}
            </h3>

            {/* Common understanding */}
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: FONT.mono,
                  fontWeight: 600,
                  color: TEXT.muted,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 6,
                }}
              >
                Commonly understood as
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: TEXT.secondary,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                {term.commonUnderstanding}
              </p>
            </div>

            {/* What the nervous system is actually doing */}
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: FONT.mono,
                  fontWeight: 600,
                  color: TEXT.muted,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 6,
                }}
              >
                What the nervous system is actually doing
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: TEXT.primary,
                  margin: 0,
                }}
              >
                {term.definition}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/reframes"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 13,
          fontFamily: FONT.mono,
          color: SPECTRUM.slate,
          textDecoration: "none",
          marginTop: 14,
        }}
      >
        See all reframes →
      </Link>
    </section>
  );
}
