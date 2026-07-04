import Link from "next/link";
import {
  BG,
  TEXT,
  BORDER,
  FONT,
  SPECTRUM,
  BLUE,
  MAIN_ORG,
  RADIUS,
  contrastColor,
  hexToRgba,
} from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";

export const metadata = {
  title: "Page Not Found | TEG-Blue",
  description: "This TEG-Blue page is not part of the current public surface.",
};

const NAV_LINKS = [
  { label: "Home", href: "/", description: "The Emotional Gradient Blueprint public doorway." },
  { label: "TEG-Blue overview", href: "/foundations", description: "Blueprint scope, pattern reading, and research status." },
  { label: "Pattern reading", href: "/methodology", description: "Observation, interpretation, impact, claim status, and limits." },
  { label: "Scientific grounding", href: "/scientific-foundations", description: "Research areas, field boundaries, and claim discipline." },
  { label: "Ethics", href: "/ethics", description: "Dignity, agency, source honesty, attribution, permission, impact, and repair." },
  { label: "About", href: "/about", description: "Project background, founder, contact routes, and site distinction." },
];

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader />

      <PageLayout>
        <section style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: 12,
              fontWeight: 650,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: 0,
              color: contrastColor(SPECTRUM.azure),
            }}
          >
            404 · Page not found
          </p>
          <h1
            style={{
              margin: "0 0 14px",
              fontSize: 40,
              fontWeight: 700,
              color: TEXT.primary,
              letterSpacing: 0,
              lineHeight: 1.08,
            }}
          >
            This page is not published right now.
          </h1>
          <p
            style={{
              margin: "0 0 28px",
              maxWidth: 620,
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.75,
            }}
          >
            The public .org surface is focused on the Blueprint home page and the current core reference pages.
            Older routes have been cleared, parked, or redirected and may be rebuilt later.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
              gap: 12,
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  minHeight: 112,
                  padding: 18,
                  background: BG.card,
                  borderRadius: RADIUS.lg,
                  border: `1px solid ${BORDER.default}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "block",
                    marginBottom: 6,
                    fontSize: 15,
                    fontWeight: 650,
                    color: TEXT.primary,
                    lineHeight: 1.3,
                  }}
                >
                  {link.label}
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: TEXT.muted,
                    lineHeight: 1.55,
                  }}
                >
                  {link.description}
                </span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "11px 18px",
                background: MAIN_ORG.accent,
                color: BLUE[50],
                border: `1px solid ${hexToRgba(MAIN_ORG.accent, 0.48)}`,
                borderRadius: RADIUS.md,
                fontWeight: 650,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Go to home
            </Link>
          </div>
        </section>
      </PageLayout>

      <SiteFooter />
    </div>
  );
}
