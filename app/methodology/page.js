import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, PageLayout, ReviewStatusPanel } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateMethodologyJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const SIDEBAR_SECTIONS = [
  { label: "Reading Guide", href: "#method-rule", description: "How each layer of the work is used." },
  { label: "Four Layers", href: "#four-layers", description: "Sources, synthesis, tools, and testing." },
  { label: "Example", href: "#example", description: "One source-to-testing example." },
  { label: "Scope", href: "#boundaries", description: "How to read the limits of the method." },
];

const FAQ_ITEMS = [
  {
    question: "What is the TEG-Blue methodology?",
    answer: "TEG-Blue methodology shows how cited source areas are organized through the Nervous System Gradient, translated into applied tools, and opened into testable research questions.",
  },
  {
    question: "What is original in TEG-Blue?",
    answer: "The source areas are established. TEG-Blue's original contribution is the Gradient-based organization: how mechanisms, states, tools, and research questions are placed together in one visual system.",
  },
];

const SEPARATION_ITEMS = [
  {
    title: "Sources",
    label: "Established",
    body: "Peer-reviewed research, established scholarship, and widely used models or tools.",
    use: "Provides source concepts, mechanisms, and comparison lenses.",
    color: SPECTRUM.azure,
  },
  {
    title: "Synthesis",
    label: "Original",
    body: "The Gradient, cross-disciplinary placement, labels, diagrams, and state-dependent organization.",
    use: "Organizes source contributions through the Nervous System Gradient.",
    color: SPECTRUM.cobalt,
  },
  {
    title: "Tools",
    label: "Applied",
    body: "Gradient scales, behaviour maps, emotional tools, and practical views generated from the same logic.",
    use: "Turns Gradient logic into usable surfaces for naming, comparison, and reflection.",
    color: SPECTRUM.indigo,
  },
  {
    title: "Testing",
    label: "Research",
    body: "Reliability, validity, replication, outcome usefulness, and cross-context fit.",
    use: "Evaluates specific claims, tools, and applications.",
    color: SPECTRUM.slate,
  },
];

const WORKED_EXAMPLE = [
  {
    title: "Source",
    body: "Polyvagal neuroception describes a below-awareness read of safety and threat.",
  },
  {
    title: "Synthesis",
    body: "TEG-Blue places that read in the Gradient and links it to connection-preservation and organism-protection.",
  },
  {
    title: "Testing",
    body: "A later study can ask whether those state-dependent shifts can be identified reliably across real language and contexts.",
  },
];

const BOUNDARIES = [
  "Sources are cited for the specific concepts, mechanisms, or models they contribute.",
  "Tools are presented as applied surfaces for naming, comparison, reflection, and testing.",
  "State labels describe patterns of organization, not fixed identities.",
  "Clinical or diagnostic use requires its own standards, setting, and validation.",
];

export const metadata = {
  title: "Methodology | TEG-Blue",
  description: "How TEG-Blue moves from source science to Gradient synthesis, tools, and research questions.",
  keywords: [
    "TEG-Blue methodology",
    "research grounding",
    "source traces",
    "original synthesis",
    "Nervous System Gradient",
    "claim status",
    "validity testing",
    "replication",
  ],
  alternates: {
    canonical: "https://teg-blue.org/methodology",
  },
  openGraph: {
    title: "Methodology - TEG-Blue",
    description: "A reader-facing guide to source science, Gradient synthesis, applied tools, and research questions.",
    url: "https://teg-blue.org/methodology",
    siteName: "TEG-Blue",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Methodology - TEG-Blue",
    description: "Source science, Gradient synthesis, tools, and research questions.",
  },
};

export default function MethodologyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/methodology" />

      <PageLayout
        header={
          <ResearcherHero
            badge="METHODOLOGY"
            title="Methodology"
            subtitle="How source science becomes a visual method"
            description="TEG-Blue traces source areas into the Nervous System Gradient, then into tools and research questions."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <ReviewStatusPanel
          title="How to read this page"
          description="This page shows the route from cited source areas to Gradient synthesis, applied tools, and testable research questions. Each layer is named so the reader can see how it is being used."
        />

        <section id="method-rule" style={{ marginBottom: 40 }}>
          <div style={labelStyle(SPECTRUM.azure)}>Reading method</div>
          <h2 style={sectionHeadingStyle}>Each layer has a job.</h2>
          <p style={leadStyle}>
            Source science grounds ingredients. TEG-Blue organizes those ingredients through the
            Nervous System Gradient. Tools apply the Gradient. Testing evaluates specific claims.
          </p>
        </section>

        <section id="four-layers" style={{ marginBottom: 42 }}>
          <div style={labelStyle(SPECTRUM.indigo)}>What we separate</div>
          <h2 style={sectionHeadingStyle}>Four layers stay visible</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
              gap: 12,
              marginTop: 18,
            }}
          >
            {SEPARATION_ITEMS.map((item) => (
              <LayerCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="example" style={{ marginBottom: 42 }}>
          <div style={labelStyle(SPECTRUM.cobalt)}>Worked example</div>
          <h2 style={sectionHeadingStyle}>A compact example</h2>
          <p style={bodyStyle}>
            The full science belongs on the foundations pages. Methodology shows the route from source concept to TEG-Blue placement to research question.
          </p>
          <div style={{ marginTop: 18, border: `1px solid ${BORDER.default}`, borderRadius: RADIUS.lg, overflow: "hidden" }}>
            {WORKED_EXAMPLE.map((step, index) => (
              <StepRow
                key={step.title}
                step={step}
                number={index + 1}
                isLast={index === WORKED_EXAMPLE.length - 1}
              />
            ))}
          </div>
        </section>

        <section id="boundaries" style={{ marginBottom: 42 }}>
          <div style={labelStyle(SPECTRUM.slate)}>Scope</div>
          <h2 style={sectionHeadingStyle}>How to read scope</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: 10,
              marginTop: 18,
            }}
          >
            {BOUNDARIES.map((item) => (
              <BoundaryItem key={item}>{item}</BoundaryItem>
            ))}
          </div>
        </section>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <Link href="/foundations" style={linkStyle}>
            TEG-Blue Overview
          </Link>
          <Link href="/scientific-foundations" style={linkStyle}>
            Scientific Foundations
          </Link>
          <Link href="/how-it-works" style={linkStyle}>
            How It Works
          </Link>
        </div>
      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Methodology", url: "/methodology" },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateMethodologyJsonLd()) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Methodology | TEG-Blue",
              url: "https://teg-blue.org/methodology",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

function LayerCard({ item }) {
  return (
    <div
      style={{
        padding: 16,
        background: gradientCardBg(item.color, 0.06),
        border: `1px solid ${hexToRgba(item.color, 0.16)}`,
        borderRadius: RADIUS.md,
        borderTop: `3px solid ${item.color}`,
      }}
    >
      <div style={labelStyle(item.color)}>{item.label}</div>
      <h3 style={{ fontSize: 15, fontWeight: 650, color: TEXT.primary, margin: "0 0 8px" }}>
        {item.title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: "0 0 10px" }}>
        {item.body}
      </p>
      <p style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.55, margin: 0 }}>
        <strong style={{ color: TEXT.secondary }}>Use:</strong> {item.use}
      </p>
    </div>
  );
}

function StepRow({ step, number, isLast }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "42px minmax(0, 1fr)",
        gap: 14,
        padding: "15px 18px",
        background: BG.card,
        borderBottom: isLast ? "none" : `1px solid ${BORDER.default}`,
      }}
    >
      <span
        style={{
          width: 28,
          height: 28,
          borderRadius: 999,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: hexToRgba(SPECTRUM.cobalt, 0.14),
          color: SPECTRUM.cobalt,
          fontFamily: FONT.mono,
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        {number}
      </span>
      <div>
        <h3 style={{ fontSize: 14, fontWeight: 650, color: TEXT.primary, margin: "0 0 5px" }}>
          {step.title}
        </h3>
        <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: 0 }}>
          {step.body}
        </p>
      </div>
    </div>
  );
}

function BoundaryItem({ children }) {
  return (
    <div
      style={{
        padding: 13,
        background: hexToRgba(SPECTRUM.slate, 0.06),
        border: `1px solid ${hexToRgba(SPECTRUM.slate, 0.14)}`,
        borderRadius: RADIUS.md,
        color: TEXT.secondary,
        fontSize: 13,
        lineHeight: 1.6,
      }}
    >
      {children}
    </div>
  );
}

function labelStyle(color) {
  return {
    fontSize: 9,
    fontWeight: 700,
    fontFamily: FONT.mono,
    textTransform: "uppercase",
    letterSpacing: 0,
    color,
    marginBottom: 4,
  };
}

const sectionHeadingStyle = {
  fontSize: 20,
  fontWeight: 700,
  color: TEXT.primary,
  lineHeight: 1.25,
  margin: "0 0 10px",
};

const leadStyle = {
  fontSize: 15,
  color: TEXT.primary,
  lineHeight: 1.8,
  fontWeight: 520,
  margin: 0,
};

const bodyStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  margin: 0,
};

const linkStyle = {
  fontSize: 13,
  fontFamily: FONT.mono,
  color: SPECTRUM.azure,
  textDecoration: "none",
};
