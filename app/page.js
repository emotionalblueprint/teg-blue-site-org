import Link from "next/link";
import { generateResearchHubJsonLd } from "@/src/lib/jsonld";
import { BG, SPACING, FONT, TEXT, BORDER, SPECTRUM, RESEARCHER, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, PatternGradientBar } from "@/src/components";


export const metadata = {
  title: "TEG-Blue | Emotional Technology Research",
  description: "A trauma-informed map of emotions and the first complete emotional technology system. Open science — 139+ established theories, testable claims, open access. Built by one researcher. Looking for a lead institution to carry validation forward.",
  alternates: {
    canonical: "https://teg-blue.org",
  },
};

export default function ResearchHub() {
  const jsonLd = generateResearchHubJsonLd();

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: BG.page,
          fontFamily: FONT.display,
        }}
      >
        <SiteHeader currentPath="/" />

        <main
          id="main-content"
          style={{
            maxWidth: SPACING.containerMax,
            margin: "0 auto",
            padding: `32px ${SPACING.pagePadding} 60px`,
          }}
        >
          {/* ── Hero ── */}
          <section style={{ marginBottom: 48 }}>
            <ResearcherHero
              badge="EMOTIONAL TECHNOLOGY RESEARCH"
              title="Reconnecting Cognition with Emotional Awareness"
              subtitle="Open science — transparent research, credited sources, testable claims"
              description="TEG-Blue maps how emotional awareness connects cognition and feeling — and what happens when it goes offline. Built on 139+ established theories. Open to critique and validation."
            />

            <div style={{ marginTop: 20, maxWidth: 500 }}>
              <PatternGradientBar />
            </div>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: TEXT.secondary,
                maxWidth: 600,
                marginTop: 24,
                marginBottom: 24,
                fontWeight: 500,
              }}
            >
              The gap in emotional intelligence has never been a lack of good science. It has been a lack of architecture — a structure where the science connects, becomes visible, and becomes usable. That&apos;s what TEG-Blue is.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link
                href="/research-entry"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  background: RESEARCHER.accent,
                  color: "#fff",
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Start Here →
              </Link>
              <Link
                href="/frameworks-map"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  background: hexToRgba(RESEARCHER.accent, 0.1),
                  color: RESEARCHER.accent,
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                  border: `1px solid ${hexToRgba(RESEARCHER.accent, 0.2)}`,
                }}
              >
                See the Frameworks
              </Link>
            </div>
          </section>

          {/* ── The Framework ── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
              What TEG-Blue is
            </h2>

            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 640 }}>
              TEG-Blue is a two-layer system. The first layer measures where someone is emotionally — four nervous system states from Connection through Protection, Control, and Domination. The second layer explains why — 12 frameworks that map how emotions shape identity, relationships, and larger systems.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              <FrameworkCard
                color={SPECTRUM.indigo}
                label="LAYER 1"
                title="Four-Mode Gradient"
                description="Observable measurement system. Four nervous system regulatory states — Connection, Protection, Control, Domination. The core principle: health is mobility, not position. Getting stuck is the problem."
                href="/models"
                linkText="See the Models →"
              />
              <FrameworkCard
                color={SPECTRUM.cobalt}
                label="LAYER 2"
                title="12 Frameworks"
                description="Explanatory architecture. Three arcs — Individual, Collective, Repair and Complexity. Explains why modes exist, how patterns scale from one person to entire systems, and what enables change."
                href="/frameworks-map"
                linkText="See the Frameworks →"
              />
            </div>

            <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 16, lineHeight: 1.6 }}>
              The full system overview, including how the layers connect, is at{" "}
              <Link href="/foundations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>System Overview</Link>.
              The 139+ source theories are documented at{" "}
              <Link href="/scientific-foundations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>Scientific Foundations</Link>.
            </p>
          </section>

          {/* ── The Evidence ── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
              The evidence so far
            </h2>

            <div
              style={{
                background: gradientCardBg(RESEARCHER.accent),
                borderRadius: 10,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `3px solid ${RESEARCHER.accent}`,
                padding: "24px 28px",
                marginBottom: 16,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.blue,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 12,
                  fontFamily: FONT.mono,
                }}
              >
                Validation Study
              </p>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: TEXT.primary, marginBottom: 10 }}>
                Empirical Validation of the Four-Mode Gradient Framework
              </h3>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
                Computational analysis of 10,000+ natural conflict narratives. The four modes were reliably detected in unstructured text. De-escalators showed 78% higher rates of complexity markers — signs of self-awareness, perspective-taking, and emotional differentiation.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link
                  href="/publications"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 18px",
                    background: RESEARCHER.accent,
                    color: "#fff",
                    borderRadius: 6,
                    fontWeight: 500,
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  Read the study →
                </Link>
                <Link
                  href="/methodology"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 18px",
                    background: hexToRgba(RESEARCHER.accent, 0.1),
                    color: RESEARCHER.accent,
                    borderRadius: 6,
                    fontWeight: 500,
                    fontSize: 13,
                    textDecoration: "none",
                    border: `1px solid ${hexToRgba(RESEARCHER.accent, 0.2)}`,
                  }}
                >
                  See methodology
                </Link>
              </div>
            </div>

            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.6 }}>
              DOI: 10.5281/zenodo.18428907 · Mode classifications correlated with independent community moral judgments.
            </p>
          </section>

          {/* ── Open Science ── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
              Open science — no gates, no applications
            </h2>

            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16, maxWidth: 640 }}>
              Everything here is published under CC BY-NC-SA 4.0. There are no access restrictions, no required collaborations, no application process. A researcher can take the framework, the data, and the methodology and work with them independently.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <OpenItem label="Cite it" description="Full citation format and examples" href="/citations" />
              <OpenItem label="Use the data" description="Anonymized conflict narratives, emotional gradient data" href="/publications" />
              <OpenItem label="Test the claims" description="Five open research questions, four research directions" href="/research-entry" />
              <OpenItem label="Read the source theories" description="139+ established theories, credited and documented" href="/scientific-foundations" />
            </div>
          </section>

          {/* Footer note */}
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
              TEG-Blue · Open Science · CC BY-NC-SA 4.0
            </p>
          </div>
        </main>

        <SiteFooter />
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

// ── Helper Components ──

function FrameworkCard({ color, label, title, description, href, linkText }) {
  return (
    <div
      style={{
        background: gradientCardBg(color),
        borderRadius: 10,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
        padding: "20px 24px",
      }}
    >
      <p
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontFamily: FONT.mono,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: color,
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 14 }}>
        {description}
      </p>
      <Link
        href={href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 13,
          color: color,
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        {linkText}
      </Link>
    </div>
  );
}

function OpenItem({ label, description, href }) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 10,
        padding: "12px 16px",
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        textDecoration: "none",
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, whiteSpace: "nowrap" }}>
        {label}
      </span>
      <span style={{ fontSize: 13, color: TEXT.muted }}>
        — {description}
      </span>
    </Link>
  );
}
