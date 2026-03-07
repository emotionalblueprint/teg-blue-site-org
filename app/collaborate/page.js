import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RESEARCHER, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";

const SIDEBAR_SECTIONS = [
  { label: "Everything Is Open", description: "All research published, all data available. Open access, open science, open invitation." },
  { label: "How to Cite", description: "Citation format and attribution guidelines for academic and professional use." },
  { label: "Research Directions", description: "Five priority questions still open — where independent researchers can contribute most." },
  { label: "The Specific Ask", description: "What TEG-Blue needs from the research community right now." },
];

export const metadata = {
  title: "Use This Work | TEG-Blue Emotional Technology",
  description: "TEG-Blue is open access under CC BY-NC-SA 4.0. No gates, no applications. Take the framework, cite it, test it. Looking for a lead researcher or institution to carry validation forward.",
  keywords: [
    "open access research",
    "emotional technology",
    "TEG-Blue open science",
    "research collaboration",
    "CC BY-NC-SA",
    "emotional intelligence research",
    "validation research",
    "replication studies",
  ],
  alternates: {
    canonical: "https://teg-blue.org/collaborate",
  },
  openGraph: {
    title: "Use This Work — TEG-Blue Research",
    description: "Open access under CC BY-NC-SA 4.0. No gates, no applications. Take the framework and work with it independently.",
    url: "https://teg-blue.org/collaborate",
    siteName: "TEG-Blue Research",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Use This Work — TEG-Blue Research",
    description: "Open access. No gates. Take the framework, cite it, test it.",
  },
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

      <PageLayout
        header={
          <ResearcherHero
            badge="OPEN ACCESS"
            title="Use this work"
            description="Everything here is open. No gates, no applications, no required collaboration. Take what is useful. Cite the source. Test the claims."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Open access */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Everything is open
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16, maxWidth: 640 }}>
            TEG-Blue is published under <strong style={{ color: TEXT.primary }}>CC BY-NC-SA 4.0</strong>. The frameworks, models, datasets, methodology, and source theory documentation are all available for independent use. There is no application process, no approval needed, and no coordination required.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <OpenItem
              label="Frameworks and models"
              description="The full architecture — 12 frameworks, 3 models, system overview"
              href="/frameworks-map"
            />
            <OpenItem
              label="Publications and data"
              description="Validation study, datasets, methodology documentation"
              href="/publications"
            />
            <OpenItem
              label="Source theories"
              description="139+ established theories, credited and searchable"
              href="/scientific-foundations"
            />
          </div>
        </section>

        {/* How to cite */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            How to cite
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16, maxWidth: 640 }}>
            If you use TEG-Blue in your work — whether to test, critique, extend, or reference — citation formats are available for the framework, the validation study, and individual components.
          </p>
          <Link
            href="/citations"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              color: SPECTRUM.blue,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Full citation formats →
          </Link>
        </section>

        {/* Research directions */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Research directions still open
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 640 }}>
            The framework opens several lines of inquiry. Each can be pursued independently. These are documented in more detail on the{" "}
            <Link href="/research-entry" style={{ color: SPECTRUM.blue }}>Start Here</Link> page.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <DirectionCard
              letter="A"
              title="Measurement and recognition"
              description="Can the Four-Mode Gradient be reliably detected in natural language?"
            />
            <DirectionCard
              letter="B"
              title="Prediction and prevention"
              description="How do states shift and escalate? Can harm trajectories be mapped and predicted?"
            />
            <DirectionCard
              letter="C"
              title="Navigation and intervention"
              description="Which interventions support movement from Control back toward Connection?"
            />
            <DirectionCard
              letter="D"
              title="AI alignment and structured schemas"
              description="How can emotional pattern logic be translated into forms AI systems read safely?"
            />
          </div>
        </section>

        {/* The ask */}
        <section style={{ marginBottom: 32 }}>
          <div
            style={{
              padding: 24,
              background: gradientCardBg(SPECTRUM.azure),
              borderRadius: 10,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.azure}`,
            }}
          >
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              The specific ask
            </h2>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              I built this framework over nearly two years of independent research. The architecture is complete. The first validation study is published. The open questions are documented.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              What the framework needs now is a <strong style={{ color: TEXT.primary }}>lead researcher or institution</strong> to carry the next phase — systematic validation, replication across contexts, and dissemination into established research channels. There is real space here for someone to take the lead.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
              Disagreement is welcome. TEG-Blue is a working hypothesis, not a settled framework. The only requirement is willingness to engage seriously with the work.
            </p>
            <a
              href="mailto:research@teg-blue.org"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: SPECTRUM.azure,
                color: "#fff",
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              research@teg-blue.org
            </a>
          </div>
        </section>

      </PageLayout>

      <SiteFooter />
    </div>
  );
}

// Helper components
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

function DirectionCard({ letter, title, description }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${SPECTRUM.azure}`,
      }}
    >
      <h3 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
        {letter}. {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}
