import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, contrastColor, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import ResearcherHero from "@/src/components/ResearcherHero";
import PageLayout from "@/src/components/PageLayout";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateMethodologyJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "Why does TEG-Blue explain pattern reading?",
    answer: "This page explains how TEG-Blue reads emotional and relational patterns responsibly: observation, interpretation, impact, and claim status stay separate.",
  },
  {
    question: "What is TEG-Blue's contribution?",
    answer: "Established research underwrites specific parts of the architecture. TEG-Blue's contribution is the integration: placing those parts into a visual, usable gradient.",
  },
  {
    question: "Can TEG-Blue diagnose people?",
    answer: "No. TEG-Blue supports pattern reading. It does not diagnose people, determine motive, or identify someone's true internal state from the outside.",
  },
  {
    question: "How does TEG-Blue handle harm?",
    answer: "Mechanism explains the pattern; it does not erase impact. A response may need support, repair, boundary, protection, accountability, or further study.",
  },
];

const METHOD_STEPS = [
  {
    label: "Observe",
    title: "Name what is visible",
    body: "Start with behaviour, context, repetition, and relational effect before assigning motive or whole-person meaning.",
    color: SPECTRUM.azure,
  },
  {
    label: "Interpret",
    title: "Treat interpretation as provisional",
    body: "Ask what pattern may be organizing state, perception, emotion, protection, control, shutdown, regulation, or repair.",
    color: SPECTRUM.blue,
  },
  {
    label: "Impact",
    title: "Keep effect in view",
    body: "Track what happened to clarity, autonomy, safety, options, empathy, accountability, and repair.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Response",
    title: "Choose the next response",
    body: "Support, interruption, boundary, protection, accountability, care, repair, or further study may each be appropriate.",
    color: SPECTRUM.indigo,
  },
];

const CLAIM_LAYERS = [
  {
    label: "Identity",
    title: "What TEG-Blue calls itself",
    body: "TEG-Blue is The Emotional Gradient Blueprint: a layered visual framework for reading emotional, nervous-system, relational, and social patterns.",
    status: "Identity claims need internal consistency and creator attribution.",
    color: SPECTRUM.azure,
  },
  {
    label: "Architecture",
    title: "How the framework organizes patterns",
    body: "The Nervous System Gradient is the central public map inside the Blueprint, not the whole identity.",
    status: "Architecture claims describe TEG-Blue's integration.",
    color: SPECTRUM.blue,
  },
  {
    label: "Source",
    title: "What established research supports",
    body: "Biology, physiology, psychology, attachment, trauma, developmental, social, and contemplative fields can each support specific parts.",
    status: "Source-grounded claims should name the part, not claim support for the whole system.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Application",
    title: "What a tool helps someone do",
    body: "Applied tools can support reflection, education, comparison, and clearer conversation.",
    status: "Tool claims should not promise outcomes or replace professional judgment.",
    color: SPECTRUM.indigo,
  },
];

const RESPONSIBLE_QUESTIONS = [
  "What happened?",
  "What was observed, and what is being inferred?",
  "What impact or harm occurred?",
  "What capacity was available or unavailable?",
  "What changed as safety increased or decreased?",
  "What response fits the pattern now?",
];

const PERCEPTION_POINTS = [
  {
    title: "Feeling and fact stay distinct",
    body: "A feeling is real as an experience. It may still need to be separated from what happened, what was assumed, and what evidence is available.",
  },
  {
    title: "Calm is not safety",
    body: "A composed pattern can still reduce another person's clarity, autonomy, or repair. Distress is not proof that someone is dangerous.",
  },
  {
    title: "Repair needs flexible perception",
    body: "Repair becomes more possible when a system can separate sensation, story, evidence, impact, and response.",
  },
];

const LIMITS = [
  {
    title: "Not diagnosis",
    body: "A pattern read is not a clinical category, assessment, treatment plan, or whole-person label.",
  },
  {
    title: "Not motive certainty",
    body: "Visible behaviour can support a pattern read, but it cannot prove a person's true internal state or intention.",
  },
  {
    title: "Not a shortcut around context",
    body: "History, power, repetition, support, safety, professional judgment, and lived evidence still matter.",
  },
  {
    title: "Not an excuse for harm",
    body: "A protective origin can coexist with harmful impact. Responsibility increases with awareness, repetition, power, available choice, refusal to repair, and impact on others.",
  },
];

export const metadata = {
  title: "How TEG-Blue Reads Patterns",
  description: "How TEG-Blue reads patterns responsibly: observation, interpretation, impact, claim status, and limits.",
  keywords: [
    "TEG-Blue pattern reading",
    "The Emotional Gradient Blueprint",
    "Nervous System Gradient",
    "claim status",
    "responsible pattern reading",
    "state-shaped perception",
    "research integration",
    "repair capacity",
  ],
  alternates: {
    canonical: "https://teg-blue.org/methodology",
  },
  openGraph: {
    title: "How TEG-Blue Reads Patterns - TEG-Blue",
    description: "Observation, interpretation, impact, claim status, and limits for responsible pattern reading.",
    url: "https://teg-blue.org/methodology",
    siteName: "TEG-Blue",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "How TEG-Blue Reads Patterns - TEG-Blue",
    description: "How TEG-Blue reads patterns responsibly.",
  },
};

export default function MethodologyPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/methodology" />

      <PageLayout
        header={
          <ResearcherHero
            badge="PATTERN READING"
            title="How TEG-Blue reads patterns"
            subtitle="Responsible use, claim status, and limits"
            description="A compact guide to reading visible patterns without turning the map into diagnosis, motive certainty, or authority over a person."
          />
        }
      >
        <OverviewSection />
        <MethodSection />
        <ClaimLayersSection />
        <PerceptionSection />
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
              { name: "How TEG-Blue reads patterns", url: "/methodology" },
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
              name: "How TEG-Blue Reads Patterns | TEG-Blue",
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
      <h2 style={sectionHeadingStyle}>This is the operating discipline behind the map.</h2>
      <p style={leadStyle}>
        TEG-Blue reads emotional patterns as structured biological and relational information. The discipline is
        simple: keep what was observed, what is being inferred, what effect occurred, and what kind of claim is
        being made in separate view.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 790 }}>
        That separation lets the Gradient remain useful without asking it to become diagnosis, motive certainty,
        a fixed identity, a clinical assessment, or a shortcut around context.
      </p>
    </section>
  );
}

function MethodSection() {
  return (
    <section id="method" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>How to read</div>
      <h2 style={sectionHeadingStyle}>Move from what happened toward what response fits.</h2>
      <p style={leadStyle}>
        A responsible reading starts with what can be seen and moves carefully toward what the pattern may mean.
        It does not jump straight to diagnosis, intention, or whole-person verdict.
      </p>
      <div style={gridStyle}>
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
      <h2 style={sectionHeadingStyle}>Know what kind of sentence is being made.</h2>
      <p style={leadStyle}>
        TEG-Blue does not ask one layer to do the work of another. A field may support one part of the map.
        The Blueprint places parts in relation. A tool applies the map to a specific task.
      </p>
      <div style={gridStyle}>
        {CLAIM_LAYERS.map((layer) => (
          <LayerCard key={layer.title} layer={layer} />
        ))}
      </div>
    </section>
  );
}

function PerceptionSection() {
  return (
    <section id="perception" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>State-shaped perception</div>
      <h2 style={sectionHeadingStyle}>Nervous-system states can change what feels true.</h2>
      <p style={leadStyle}>
        TEG-Blue treats perception as state-shaped. The question is not whether a feeling matters. The question
        is what kind of information the feeling is carrying, what evidence is available, and what response is
        needed.
      </p>
      <div style={gridStyle}>
        {PERCEPTION_POINTS.map((item) => (
          <PlainCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function ResponsibleUseSection() {
  return (
    <section id="responsible-use" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Responsible use</div>
      <h2 style={sectionHeadingStyle}>A Gradient position is a beginning, not a verdict.</h2>
      <p style={leadStyle}>
        A Gradient position is a starting point. Responsible use asks what the pattern is doing, what becomes
        possible or unavailable, and what response protects clarity, autonomy, safety, accountability, and repair.
      </p>
      <div style={questionGridStyle}>
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
      <h2 style={sectionHeadingStyle}>Use the map to support judgment, not replace it.</h2>
      <p style={leadStyle}>
        TEG-Blue can make patterns easier to discuss. It does not remove context, support, professional judgment,
        lived evidence, or the need to keep impact visible.
      </p>
      <div style={gridStyle}>
        {LIMITS.map((item) => (
          <PlainCard key={item.title} item={item} />
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
      <div style={tableWrapStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: BG.surface }}>
              <th style={tableHeaderStyle}>For</th>
              <th style={tableHeaderStyle}>Visit</th>
            </tr>
          </thead>
          <tbody>
            <NavRow label="The framework overview" href="/foundations" linkText="TEG-Blue Overview" />
            <NavRow label="Ethical commitments and use boundaries" href="/ethics" linkText="Ethics" />
            <NavRow label="Research areas and claim boundaries" href="/scientific-foundations" linkText="Scientific Grounding" />
            <NavRow label="Citation guidance and public records" href="/publications" linkText="Publications" />
            <NavRow label="Interactive public tools" href="https://teg-blue.com/" linkText="teg-blue.com" external />
          </tbody>
        </table>
      </div>
    </section>
  );
}

function InfoCard({ item }) {
  return (
    <div style={infoCardStyle(item.color)}>
      <div style={labelStyle(item.color)}>{item.label}</div>
      <h3 style={cardTitleStyle}>{item.title}</h3>
      <p style={cardBodyStyle}>{item.body}</p>
    </div>
  );
}

function LayerCard({ layer }) {
  return (
    <div style={layerCardStyle(layer.color)}>
      <div style={labelStyle(layer.color)}>{layer.label}</div>
      <h3 style={cardTitleStyle}>{layer.title}</h3>
      <p style={{ ...cardBodyStyle, marginBottom: 10 }}>{layer.body}</p>
      <p style={statusStyle}>{layer.status}</p>
    </div>
  );
}

function PlainCard({ item }) {
  return (
    <div style={plainCardStyle}>
      <h3 style={cardTitleStyle}>{item.title}</h3>
      <p style={cardBodyStyle}>{item.body}</p>
    </div>
  );
}

function QuestionCard({ question, number }) {
  return (
    <div style={questionCardStyle}>
      <span style={questionNumberStyle}>{number}</span>
      <span style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.5 }}>{question}</span>
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
        <LinkEl href={href} {...extraProps} style={{ color: contrastColor(SPECTRUM.azure), textDecoration: "none", fontWeight: 500 }}>
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
    color: contrastColor(color),
    marginBottom: 4,
  };
}

function infoCardStyle(color) {
  return {
    padding: 16,
    minHeight: 150,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.16)}`,
    borderLeft: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

function layerCardStyle(color) {
  return {
    padding: 16,
    minHeight: 220,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.16)}`,
    borderTop: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
  gap: 12,
  marginTop: 18,
};

const questionGridStyle = {
  marginTop: 18,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
  gap: 10,
};

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

const cardTitleStyle = {
  fontSize: 15,
  fontWeight: 650,
  color: TEXT.primary,
  lineHeight: 1.35,
  margin: "0 0 8px",
};

const cardBodyStyle = {
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.65,
  margin: 0,
};

const statusStyle = {
  fontSize: 12,
  color: TEXT.muted,
  lineHeight: 1.55,
  margin: 0,
};

const plainCardStyle = {
  padding: 16,
  background: BG.card,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.md,
};

const questionCardStyle = {
  display: "grid",
  gridTemplateColumns: "34px minmax(0, 1fr)",
  gap: 10,
  alignItems: "center",
  padding: 13,
  background: BG.card,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.md,
};

const questionNumberStyle = {
  width: 26,
  height: 26,
  borderRadius: 999,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: hexToRgba(SPECTRUM.azure, 0.12),
  color: contrastColor(SPECTRUM.azure),
  fontFamily: FONT.mono,
  fontSize: 11,
  fontWeight: 700,
};

const tableWrapStyle = {
  background: BG.card,
  borderRadius: RADIUS.md,
  border: `1px solid ${BORDER.default}`,
  overflow: "hidden",
  marginTop: 16,
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
