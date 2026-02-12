import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

export const metadata = {
  title: "Collaborate",
  description: "Collaborate with TEG-Blue research.",
};

export default function CollaboratePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/collaborate" />

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: TEXT.primary,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          Collaborate
        </h1>
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            marginBottom: 32,
            maxWidth: 600,
            lineHeight: 1.8,
          }}
        >
          We welcome researchers who want to work with TEG-Blue&apos;s theoretical architecture.
        </p>

        <div
          style={{
            padding: 24,
            background: BG.card,
            borderRadius: 8,
            border: `1px solid ${BORDER.default}`,
            borderLeft: `3px solid ${SPECTRUM.azure}`,
            maxWidth: 500,
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              marginBottom: 16,
              lineHeight: 1.8,
            }}
          >
            Collaboration requires clear agreements on authorship, attribution, and intellectual property from the start.
          </p>
          <a
            href="mailto:research@teg-blue.org"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              background: hexToRgba(SPECTRUM.blue, 0.1),
              border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.3)}`,
              borderRadius: 6,
              color: SPECTRUM.blue,
              fontWeight: 500,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            research@teg-blue.org
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
