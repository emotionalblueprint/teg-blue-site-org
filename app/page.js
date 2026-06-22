import { BG, BORDER, FONT, PATTERN_GRADIENT, SPACING, TEXT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteFooter, SiteHeader } from "@/src/components";

export const metadata = {
  title: "TEG-Blue.org is being rebuilt",
  description: "TEG-Blue.org is being rebuilt. The new Emotional Gradient Blueprint site is in progress.",
  alternates: {
    canonical: "https://teg-blue.org",
  },
  openGraph: {
    title: "TEG-Blue.org is being rebuilt",
    description: "The new Emotional Gradient Blueprint site is in progress.",
    url: "https://teg-blue.org",
    siteName: "TEG-Blue Research",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TEG-Blue.org is being rebuilt",
    description: "The new Emotional Gradient Blueprint site is in progress.",
  },
};

export default function ResearchHub() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        style={{
          minHeight: "calc(100vh - 220px)",
          display: "flex",
          alignItems: "center",
          background: BG.page,
          fontFamily: FONT.display,
          padding: `clamp(72px, 12vw, 120px) ${SPACING.pagePadding}`,
        }}
      >
        <section
          aria-labelledby="maintenance-title"
          style={{
            width: "100%",
            maxWidth: SPACING.containerMax,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "min(460px, 100%)",
              height: 4,
              borderRadius: 2,
              background: PATTERN_GRADIENT,
              marginBottom: 32,
            }}
            aria-hidden="true"
          />

          <p
            style={{
              margin: "0 0 18px",
              color: TEXT.muted,
              fontFamily: FONT.mono,
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Temporary page
          </p>

          <h1
            id="maintenance-title"
            style={{
              margin: "0 0 20px",
              color: TEXT.primary,
              fontSize: "clamp(32px, 6vw, 52px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 760,
            }}
          >
            TEG-Blue.org is being rebuilt.
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: 640,
              color: TEXT.secondary,
              fontSize: "clamp(16px, 2.4vw, 19px)",
              lineHeight: 1.7,
            }}
          >
            The new Emotional Gradient Blueprint site is in progress. The public site is paused while the new structure is prepared.
          </p>

          <div
            style={{
              marginTop: 36,
              paddingLeft: 18,
              borderLeft: `1px solid ${BORDER.hover}`,
            }}
          >
            <p
              style={{
                margin: 0,
                color: TEXT.muted,
                fontSize: 13,
                lineHeight: 1.7,
              }}
            >
              For now, only essential site files and deployment routes remain available.
            </p>
          </div>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 14,
            }}
          >
            <p
              style={{
                margin: 0,
                color: TEXT.secondary,
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              While this site is being rebuilt, you can use the tools on TEG-Blue.com.
            </p>
            <a
              href="https://teg-blue.com/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 16px",
                borderRadius: 8,
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.25)}`,
                background: hexToRgba(SPECTRUM.azure, 0.08),
                color: SPECTRUM.azure,
                fontFamily: FONT.mono,
                fontSize: 12,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Check out the tools
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
