import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, MAIN_ORG, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout } from "@/src/components";

const SIDEBAR_SECTIONS = [];

export const metadata = {
  title: "Page Not Found | TEG-Blue Research",
  description: "The page you're looking for may have moved during our recent site migration. Browse the TEG-Blue open science platform for emotional technology research.",
};

const FRAMEWORK_LINKS = [
  { id: "F1", label: "The Emotional Gradient", href: "/framework/f1-emotional-gradient" },
  { id: "F2", label: "Awareness Teaches Awareness", href: "/framework/f2-awareness-calibration" },
  { id: "F3", label: "Adult Cognition & False Coherence", href: "/framework/f3-false-coherence" },
  { id: "F4", label: "Rules Regulate", href: "/framework/f4-rules-regulate" },
  { id: "F5", label: "Worth Hierarchies Regulate", href: "/framework/f5-worth-hierarchies" },
  { id: "F6", label: "Bias Regulates", href: "/framework/f6-bias-regulates" },
  { id: "F7", label: "Domination Regulates", href: "/framework/f7-domination-regulates" },
  { id: "F8", label: "Repairing Awareness", href: "/framework/f8-repairing-awareness" },
  { id: "F9", label: "Neurodivergence as Variation", href: "/framework/f9-neurodivergence-variation" },
  { id: "F10", label: "Rebuilding Generational Bridges", href: "/framework/f10-generational-bridges" },
  { id: "F11", label: "The Emotional Paradoxes", href: "/framework/f11-emotional-paradoxes" },
  { id: "F12", label: "The Two Information Systems", href: "/framework/f12-two-information-systems" },
];

const NAV_LINKS = [
  { label: "Home", href: "/", description: "Research hub" },
  { label: "Start Here", href: "/research-entry", description: "Entry point for researchers" },
  { label: "Frameworks Map", href: "/frameworks-map", description: "12 frameworks overview" },
  { label: "Scientific Foundations", href: "/scientific-foundations", description: "41 research traditions, 145+ contributions" },
  { label: "Glossary", href: "/glossary", description: "Key terms and definitions" },
  { label: "Publications", href: "/publications", description: "Validation studies and papers" },
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

      <PageLayout sidebarSections={SIDEBAR_SECTIONS}>
        {/* 404 Header */}
        <div style={{ marginBottom: 40 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: SPECTRUM.slate,
              marginBottom: 12,
            }}
          >
            404 — Page Not Found
          </p>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: TEXT.primary,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            This page doesn&apos;t exist
          </h1>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            TEG-Blue recently migrated from its original platform. If you followed a link here, the content has likely moved to a new location. Try one of the pages below, or start from the research hub.
          </p>
        </div>

        {/* Quick navigation */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 16,
            }}
          >
            Main sections
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "16px 20px",
                  background: BG.card,
                  borderRadius: 8,
                  border: `1px solid ${BORDER.default}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 600,
                    color: TEXT.primary,
                    marginBottom: 4,
                  }}
                >
                  {link.label}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: TEXT.muted,
                  }}
                >
                  {link.description}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Model pages */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 8,
            }}
          >
            Looking for a model?
          </h2>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            The four models map what the nervous system does — signals, states, regulation, and awareness.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {[
              { id: "M1", label: "Emotions as Signals", href: "/model/m1-emotions-as-signals" },
              { id: "M2", label: "Nervous System States", href: "/model/m2-nervous-system-states" },
              { id: "M3", label: "Regulation Capacities", href: "/model/m3-regulation-capacities" },
              { id: "M4", label: "Awareness Capacities", href: "/model/m4-awareness-capacities" },
            ].map((m) => (
              <Link
                key={m.id}
                href={m.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 14px",
                  background: hexToRgba(SPECTRUM.azure, 0.08),
                  border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
                  borderRadius: 6,
                  textDecoration: "none",
                  fontSize: 13,
                  color: TEXT.secondary,
                }}
              >
                <span
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: 11,
                    fontWeight: 600,
                    color: SPECTRUM.azure,
                  }}
                >
                  {m.id}
                </span>
                {m.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Framework pages */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 8,
            }}
          >
            Looking for a specific framework?
          </h2>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            TEG-Blue&apos;s 12 frameworks explain how emotional patterns form, scale, break, and repair.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {FRAMEWORK_LINKS.map((fw) => (
              <Link
                key={fw.id}
                href={fw.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 14px",
                  background: hexToRgba(SPECTRUM.cobalt, 0.08),
                  border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
                  borderRadius: 6,
                  textDecoration: "none",
                  fontSize: 13,
                  color: TEXT.secondary,
                }}
              >
                <span
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: 11,
                    fontWeight: 600,
                    color: SPECTRUM.cobalt,
                  }}
                >
                  {fw.id}
                </span>
                {fw.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Back to home CTA */}
        <div style={{ marginTop: 40 }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              background: MAIN_ORG.accent,
              color: "#fff",
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Go to Research Hub
          </Link>
        </div>
      </PageLayout>

      <SiteFooter />
    </div>
  );
}
