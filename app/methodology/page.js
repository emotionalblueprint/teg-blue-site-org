import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, PageLayout } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateMethodologyJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const SIDEBAR_SECTIONS = [
  { label: "Overview", href: "#overview", description: "How to read the framework." },
  { label: "Method", href: "#method", description: "The core reading sequence." },
  { label: "Claim Layers", href: "#claim-layers", description: "Research, integration, tools, and testing." },
  { label: "Responsible Use", href: "#responsible-use", description: "Questions that keep impact visible." },
  { label: "Use and Limits", href: "#limits", description: "What the framework can and cannot do." },
  { label: "Explore More", href: "#where-next", description: "Overview, research, and tools." },
];

const FAQ_ITEMS = [
  {
    question: "What is the TEG-Blue methodology?",
    answer: "TEG-Blue methodology is a way of reading emotional and social patterns through the Nervous System Gradient while keeping observation, interpretation, impact, and claim status separate.",
  },
  {
    question: "What is TEG-Blue's contribution?",
    answer: "TEG-Blue integrates established research into a layered visual framework. The contribution is the placement of body, emotion, survival, identity, social patterns, and repair into one usable gradient.",
  },
  {
    question: "Is TEG-Blue clinically validated?",
    answer: "Not as a whole framework. Research can support specific parts of the architecture, while TEG-Blue's integration, tools, and applications require their own review and testing.",
  },
  {
    question: "Can TEG-Blue diagnose people?",
    answer: "No. The Gradient is an educational and research-facing map for pattern reading. It does not diagnose people or identify someone's internal state from the outside.",
  },
];

const METHOD_STEPS = [
  {
    label: "Observe",
    title: "Start with what can be seen",
    body: "Name the behaviour, context, pattern, or relational effect before assigning meaning.",
    color: SPECTRUM.azure,
  },
  {
    label: "Pattern",
    title: "Look for state-shaped organisation",
    body: "Ask whether the pattern is moving toward safety, threat, control, shutdown, restoration, or repair.",
    color: SPECTRUM.blue,
  },
  {
    label: "Impact",
    title: "Keep effect visible",
    body: "Track the effect on clarity, autonomy, safety, options, accountability, and repair.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Response",
    title: "Choose what fits",
    body: "Support, interruption, boundary, protection, accountability, further study, or repair may each be appropriate in different patterns.",
    color: SPECTRUM.indigo,
  },
];

const CLAIM_LAYERS = [
  {
    label: "Research",
    title: "Established fields support specific parts",
    body: "Neuroscience, attachment research, trauma research, developmental science, emotion science, social psychology, and related fields help explain different parts of the map.",
    status: "Use research for the part it can support, not as proof of the whole framework.",
    color: SPECTRUM.azure,
  },
  {
    label: "Integration",
    title: "TEG-Blue places those parts in relation",
    body: "The Gradient is the organising architecture: a way to see how body state, emotion, survival strategy, identity, social pattern, and repair connect.",
    status: "The integration is TEG-Blue's contribution.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Tools",
    title: "Applied tools make the map usable",
    body: "Tools translate the Gradient into practical views for reflection, education, comparison, and clearer conversation.",
    status: "A tool can be useful before it has validated every possible claim.",
    color: SPECTRUM.indigo,
  },
  {
    label: "Review",
    title: "Specific claims can be tested",
    body: "Studies can evaluate reliability, usefulness, cross-context fit, user interpretation, and whether a tool improves a specific task.",
    status: "Testing belongs to specific claims, tools, and contexts.",
    color: SPECTRUM.slate,
  },
];

const RESPONSIBLE_QUESTIONS = [
  "What happened?",
  "What pattern is repeating?",
  "What impact did it have?",
  "What capacity was available or unavailable?",
  "What changed as safety increased or decreased?",
  "What response fits the pattern now?",
];

const LIMITS = [
  {
    title: "It is not a diagnosis",
    body: "A Gradient position describes organisation, not a clinical category or whole-person meaning.",
  },
  {
    title: "It is not mind-reading",
    body: "The framework can help interpret patterns, but it cannot identify someone's true internal state from the outside.",
  },
  {
    title: "It does not validate itself",
    body: "Research can support specific mechanisms and relationships. It does not make the whole integration automatically validated.",
  },
  {
    title: "It does not excuse harm",
    body: "A protective origin can still produce harmful impact. Responsibility, boundary, protection, and repair remain part of the reading.",
  },
];

export const metadata = {
  title: "Methodology | TEG-Blue",
  description: "How to read TEG-Blue responsibly: observation, pattern, impact, claim status, use, limits, and review.",
  keywords: [
    "TEG-Blue methodology",
    "Nervous System Gradient",
    "claim status",
    "visual framework",
    "responsible pattern reading",
    "state-shaped capacity",
    "research integration",
    "repair capacity",
  ],
  alternates: {
    canonical: "https://teg-blue.org/methodology",
  },
  openGraph: {
    title: "Methodology - TEG-Blue",
    description: "A public guide to reading TEG-Blue responsibly: method, claim layers, use, limits, and review.",
    url: "https://teg-blue.org/methodology",
    siteName: "TEG-Blue",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Methodology - TEG-Blue",
    description: "How to read TEG-Blue responsibly: method, claim layers, use, limits, and review.",
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
            subtitle="How to read TEG-Blue responsibly"
            description="A guide to using the Nervous System Gradient without turning it into a diagnosis, a verdict, or a claim beyond its evidence."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <OverviewSection />
        <MethodSection />
        <ClaimLayersSection />
        <ResponsibleUseSection />
        <LimitsSection />
        <WhereNextSection />
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

function OverviewSection() {
  return (
    <section id="overview" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Reader guide</div>
      <h2 style={sectionHeadingStyle}>Methodology means knowing what kind of claim is being made.</h2>
      <p style={leadStyle}>
        TEG-Blue is The Emotional Gradient Blueprint: a layered visual framework that maps how emotions,
        nervous systems, survival strategies, identity, and social patterns form and evolve.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 790 }}>
        Its method is to read patterns through the Nervous System Gradient while keeping four things separate:
        what can be observed, how the pattern may be organised, what impact occurs, and what kind of claim is
        being made.
      </p>
    </section>
  );
}

function MethodSection() {
  return (
    <section id="method" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>The method</div>
      <h2 style={sectionHeadingStyle}>Read from observation toward response.</h2>
      <p style={leadStyle}>
        The Gradient helps make emotional and social patterns legible. It works best when interpretation stays
        close to observable effect and does not jump straight to identity, diagnosis, or intent.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 12,
          marginTop: 18,
        }}
      >
        {METHOD_STEPS.map((step) => (
          <InfoCard key={step.title} item={step} />
        ))}
      </div>
    </section>
  );
}

function ClaimLayersSection() {
  return (
    <section id="claim-layers" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Claim layers</div>
      <h2 style={sectionHeadingStyle}>Research support, TEG-Blue integration, applied tools, and review stay distinct.</h2>
      <p style={leadStyle}>
        The method does not ask one layer to do the work of another. A research field may support one mechanism.
        The Gradient places mechanisms in relation. A tool applies the map. Review tests specific claims.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: 12,
          marginTop: 18,
        }}
      >
        {CLAIM_LAYERS.map((layer) => (
          <LayerCard key={layer.title} layer={layer} />
        ))}
      </div>
    </section>
  );
}

function ResponsibleUseSection() {
  return (
    <section id="responsible-use" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Responsible use</div>
      <h2 style={sectionHeadingStyle}>The useful question is not only where a pattern sits.</h2>
      <p style={leadStyle}>
        A Gradient position is a starting point. Responsible use asks what the pattern is doing, what becomes
        possible or unavailable, and what response protects clarity, autonomy, safety, accountability, and repair.
      </p>
      <div
        style={{
          marginTop: 18,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 10,
        }}
      >
        {RESPONSIBLE_QUESTIONS.map((question, index) => (
          <QuestionCard key={question} question={question} number={index + 1} />
        ))}
      </div>
    </section>
  );
}

function LimitsSection() {
  return (
    <section id="limits" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.slate)}>Use and limits</div>
      <h2 style={sectionHeadingStyle}>Use the framework as a map, not as authority over a person.</h2>
      <p style={leadStyle}>
        TEG-Blue can make patterns easier to discuss. It does not remove context, professional judgement,
        lived evidence, or the need to keep impact visible.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: 12,
          marginTop: 18,
        }}
      >
        {LIMITS.map((item) => (
          <LimitCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function WhereNextSection() {
  return (
    <section id="where-next" style={{ marginBottom: 32 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Where next</div>
      <h2 style={sectionHeadingStyle}>Follow the part of the work you need.</h2>
      <div
        style={{
          background: BG.card,
          borderRadius: RADIUS.md,
          border: `1px solid ${BORDER.default}`,
          overflow: "hidden",
          marginTop: 16,
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: BG.surface }}>
              <th style={tableHeaderStyle}>For</th>
              <th style={tableHeaderStyle}>Visit</th>
            </tr>
          </thead>
          <tbody>
            <NavRow label="The core identity and Gradient overview" href="/foundations" linkText="TEG-Blue Overview" />
            <NavRow label="Research fields connected to the framework" href="/scientific-foundations" linkText="Scientific Foundations" />
            <NavRow label="Project identity and research stance" href="/about" linkText="About" />
            <NavRow label="Interactive public tools" href="https://teg-blue.com/" linkText="teg-blue.com" external />
          </tbody>
        </table>
      </div>
    </section>
  );
}

function InfoCard({ item }) {
  return (
    <div
      style={{
        padding: 16,
        minHeight: 150,
        background: gradientCardBg(item.color, 0.055),
        border: `1px solid ${hexToRgba(item.color, 0.16)}`,
        borderLeft: `3px solid ${item.color}`,
        borderRadius: RADIUS.md,
      }}
    >
      <div style={labelStyle(item.color)}>{item.label}</div>
      <h3 style={{ fontSize: 15, fontWeight: 650, color: TEXT.primary, lineHeight: 1.35, margin: "0 0 8px" }}>
        {item.title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: 0 }}>
        {item.body}
      </p>
    </div>
  );
}

function LayerCard({ layer }) {
  return (
    <div
      style={{
        padding: 16,
        minHeight: 216,
        background: gradientCardBg(layer.color, 0.055),
        border: `1px solid ${hexToRgba(layer.color, 0.16)}`,
        borderTop: `3px solid ${layer.color}`,
        borderRadius: RADIUS.md,
      }}
    >
      <div style={labelStyle(layer.color)}>{layer.label}</div>
      <h3 style={{ fontSize: 15, fontWeight: 650, color: TEXT.primary, lineHeight: 1.35, margin: "0 0 8px" }}>
        {layer.title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: "0 0 10px" }}>
        {layer.body}
      </p>
      <p style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.55, margin: 0 }}>
        {layer.status}
      </p>
    </div>
  );
}

function QuestionCard({ question, number }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "34px minmax(0, 1fr)",
        gap: 10,
        alignItems: "center",
        padding: 13,
        background: BG.card,
        border: `1px solid ${BORDER.default}`,
        borderRadius: RADIUS.md,
      }}
    >
      <span
        style={{
          width: 26,
          height: 26,
          borderRadius: 999,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: hexToRgba(SPECTRUM.azure, 0.12),
          color: SPECTRUM.azure,
          fontFamily: FONT.mono,
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        {number}
      </span>
      <span style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.5 }}>
        {question}
      </span>
    </div>
  );
}

function LimitCard({ item }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        border: `1px solid ${BORDER.default}`,
        borderRadius: RADIUS.md,
      }}
    >
      <h3 style={{ fontSize: 15, fontWeight: 650, color: TEXT.primary, margin: "0 0 8px" }}>
        {item.title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: 0 }}>
        {item.body}
      </p>
    </div>
  );
}

function NavRow({ label, href, linkText, external }) {
  const LinkEl = external ? "a" : Link;
  const extraProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{label}</td>
      <td style={tableCellStyle}>
        <LinkEl href={href} {...extraProps} style={{ color: SPECTRUM.azure, textDecoration: "none", fontWeight: 500 }}>
          {linkText}
        </LinkEl>
      </td>
    </tr>
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
  fontSize: 21,
  fontWeight: 700,
  color: TEXT.primary,
  lineHeight: 1.25,
  margin: "0 0 10px",
};

const leadStyle = {
  fontSize: 15,
  color: TEXT.secondary,
  lineHeight: 1.8,
  margin: 0,
  maxWidth: 790,
};

const bodyStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.75,
  margin: 0,
};

const tableHeaderStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 11,
  fontFamily: FONT.mono,
  textTransform: "uppercase",
  letterSpacing: 0,
  color: TEXT.muted,
};

const tableCellStyle = {
  padding: "13px 16px",
  fontSize: 13,
  lineHeight: 1.5,
};
