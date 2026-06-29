import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, PageLayout, ReviewStatusPanel, TEGBlueEnginePanel } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const SIDEBAR_SECTIONS = [
  { label: "Operating Model", href: "#operating-model", description: "Gradient, Engine, tools, and research questions." },
  { label: "Gradient", href: "#gradient", description: "The active map and shutdown fallback for state-dependent capacity." },
  { label: "TEG-Blue Engine", href: "#teg-blue-engine", description: "How the Gradient becomes applied tools." },
  { label: "Tool Surfaces", href: "#tool-surfaces", description: "Scales, behaviour maps, emotional tools, and applied views." },
  { label: "Example", href: "#worked-example", description: "How one dimension becomes a tool surface." },
  { label: "Source and Testing", href: "#source-testing", description: "How source grounding and research questions fit." },
  { label: "Domain Split", href: "#domain-split", description: ".org explains, .com applies." },
];

const FAQ_ITEMS = [
  {
    question: "How does TEG-Blue work?",
    answer: "TEG-Blue starts with the Nervous System Gradient: an active state map with shutdown held as an off-gradient fallback. The TEG-Blue Engine applies that map to one dimension at a time, such as empathy, accountability, behaviour, repair, or emotional signals. Tools make the resulting pattern visible.",
  },
  {
    question: "What is the TEG-Blue Engine?",
    answer: "The TEG-Blue Engine is the operational logic that translates the Nervous System Gradient into usable instruments. It asks how a specific dimension changes across nervous-system states.",
  },
  {
    question: "How do tools fit the Gradient?",
    answer: "Tools are applied surfaces generated from Gradient logic. They may appear as scales, maps, emotional tools, applied views, or practical schemas, but they keep the same underlying state logic.",
  },
  {
    question: "Where do the public tools live?",
    answer: "teg-blue.org explains the framework, source grounding, and method. teg-blue.com carries practical public tools and application surfaces.",
  },
];

const OPERATING_MODEL = [
  {
    title: "Source grounding",
    label: "Inputs",
    body: "Established research areas contribute source concepts, mechanisms, and comparison lenses.",
    color: SPECTRUM.sky,
  },
  {
    title: "Nervous System Gradient",
    label: "Map",
    body: "Seven states organize how capacity changes with safety, threat, connection, protection, and overwhelm.",
    color: SPECTRUM.azure,
  },
  {
    title: "TEG-Blue Engine",
    label: "Logic",
    body: "The Engine applies the Gradient to a specific dimension and maps how that dimension changes by state.",
    color: SPECTRUM.cobalt,
  },
  {
    title: "Tool surfaces",
    label: "Interface",
    body: "Scales, maps, emotional tools, and applied views make the pattern visible and usable.",
    color: SPECTRUM.indigo,
  },
  {
    title: "Research questions",
    label: "Testing",
    body: "Specific claims can be studied for reliability, usefulness, validity, and cross-context fit.",
    color: SPECTRUM.slate,
  },
];

const GRADIENT_STATES = [
  "Baseline",
  "Connection",
  "Safety Checking",
  "Protection",
  "Strategic Management",
  "Domination",
  "Shutdown",
];

const TOOL_SURFACES = [
  {
    title: "Gradient scales",
    body: "Show how a quality changes from availability through protection, control, overwhelm, or repair.",
    color: SPECTRUM.azure,
  },
  {
    title: "Behaviour maps",
    body: "Place observable patterns in relation to state, capacity, body activation, and relational direction.",
    color: SPECTRUM.cobalt,
  },
  {
    title: "Emotional tools",
    body: "Help name what an emotional signal is carrying and what kind of support or repair it points toward.",
    color: SPECTRUM.indigo,
  },
  {
    title: "Applied views",
    body: "Translate the same state logic into views for empathy, accountability, conflict, repair, or relational impact.",
    color: SPECTRUM.slate,
  },
];

const EXAMPLE_STEPS = [
  {
    title: "Choose one dimension",
    body: "Example: empathy. The question is not whether empathy exists in general, but how access to empathy changes by state.",
  },
  {
    title: "Apply the Gradient",
    body: "Connection supports openness and perspective-taking. Threat narrows attention. Chronic protection may route empathy through management, appeasement, or control.",
  },
  {
    title: "Create the surface",
    body: "A tool can show how empathy, accountability, repair, and relational impact shift across the active states and shutdown fallback.",
  },
  {
    title: "Name the research question",
    body: "Can the state-dependent shifts be identified reliably in language, behaviour, user reports, or applied settings?",
  },
];

export const metadata = {
  title: "How TEG-Blue Works | TEG-Blue",
  description: "How the Nervous System Gradient becomes the TEG-Blue Engine, practical tools, and research questions.",
  keywords: [
    "TEG-Blue Engine",
    "Nervous System Gradient",
    "state-dependent capacity",
    "emotional tools",
    "behaviour maps",
    "gradient scales",
    "research grounding",
    "teg-blue.org",
    "teg-blue.com",
  ],
  alternates: {
    canonical: "https://teg-blue.org/how-it-works",
  },
  openGraph: {
    title: "How TEG-Blue Works - TEG-Blue",
    description: "The Gradient is the map. The Engine is the logic. Tools are the interfaces.",
    url: "https://teg-blue.org/how-it-works",
    siteName: "TEG-Blue",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "How TEG-Blue Works - TEG-Blue",
    description: "Gradient, Engine, tools, and research questions.",
  },
};

export default function HowItWorksPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/how-it-works" />

      <PageLayout
        header={
          <ResearcherHero
            badge="HOW IT WORKS"
            title="How TEG-Blue Works"
            subtitle="Gradient, Engine, tools"
            description="TEG-Blue starts with the Nervous System Gradient. The Engine applies that Gradient to specific dimensions. Tools make the resulting patterns visible."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <ReviewStatusPanel
          title="The public operating model"
          description="The Gradient is the map of state-dependent capacity. The Engine is the logic that applies the map. The tools are interfaces generated from that logic."
        />

        <section id="operating-model" style={{ marginBottom: 44 }}>
          <div style={labelStyle(SPECTRUM.azure)}>Operating model</div>
          <h2 style={sectionHeadStyle}>One path from science to tools</h2>
          <p style={{ ...bodyStyle, marginBottom: 18 }}>
            The current public explanation is simple. Source areas ground ingredients. The Gradient
            organizes state-dependent capacity. The Engine translates the Gradient into dimensions.
            Tools turn those dimensions into usable surfaces.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))",
              gap: 10,
            }}
          >
            {OPERATING_MODEL.map((item, index) => (
              <SystemCard key={item.title} item={item} number={index + 1} />
            ))}
          </div>
        </section>

        <section id="gradient" style={{ marginBottom: 44 }}>
          <div style={labelStyle(SPECTRUM.cobalt)}>The Gradient</div>
          <h2 style={sectionHeadStyle}>The Gradient is the shared map</h2>
          <p style={{ ...bodyStyle, marginBottom: 18 }}>
            The Nervous System Gradient maps how state changes perception, emotion, body activation,
            behaviour, self-awareness, empathy, accountability, and repair. The Engine and tools keep
            returning to this same map, with Shutdown marked as the fallback outside the active gradient.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 130px), 1fr))",
              gap: 8,
            }}
          >
            {GRADIENT_STATES.map((state, index) => (
              <StatePill key={state} state={state} index={index} />
            ))}
          </div>
        </section>

        <TEGBlueEnginePanel intro="The Gradient is the map. The Engine is the translation logic. The tools are the public interfaces." />

        <section id="tool-surfaces" style={{ marginBottom: 44 }}>
          <div style={labelStyle(SPECTRUM.indigo)}>Tool surfaces</div>
          <h2 style={sectionHeadStyle}>Tools are different views of the same logic</h2>
          <p style={{ ...bodyStyle, marginBottom: 18 }}>
            A tool is not a separate theory. It is a surface that shows one part of the Gradient in a
            practical form.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
              gap: 12,
            }}
          >
            {TOOL_SURFACES.map((item) => (
              <ToolSurfaceCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="worked-example" style={{ marginBottom: 44 }}>
          <div style={labelStyle(SPECTRUM.cobalt)}>Worked example</div>
          <h2 style={sectionHeadStyle}>From one dimension to a tool</h2>
          <p style={{ ...bodyStyle, marginBottom: 18 }}>
            The Engine becomes concrete when it is applied to one dimension at a time.
          </p>
          <div
            style={{
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.lg,
              overflow: "hidden",
            }}
          >
            {EXAMPLE_STEPS.map((step, index) => (
              <ExampleStep
                key={step.title}
                step={step}
                number={index + 1}
                isLast={index === EXAMPLE_STEPS.length - 1}
              />
            ))}
          </div>
        </section>

        <section id="source-testing" style={{ marginBottom: 44 }}>
          <div style={labelStyle(SPECTRUM.slate)}>Source and testing</div>
          <h2 style={sectionHeadStyle}>Source grounding stays connected to research questions</h2>
          <p style={{ ...bodyStyle, marginBottom: 18 }}>
            The source map shows where the ingredients come from. Methodology shows how claims are
            separated. Tool surfaces give concrete places where future studies can test reliability,
            usefulness, and fit.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
              gap: 12,
            }}
          >
            <LinkCard
              title="Scientific Foundations"
              body="Source areas, model bridges, and Gradient placement."
              href="/scientific-foundations"
              color={SPECTRUM.azure}
            />
            <LinkCard
              title="Methodology"
              body="How sources, synthesis, tools, and testing stay distinct."
              href="/methodology"
              color={SPECTRUM.cobalt}
            />
            <LinkCard
              title="Publications"
              body="Working papers, studies, and research outputs."
              href="/publications"
              color={SPECTRUM.indigo}
            />
          </div>
        </section>

        <section id="domain-split" style={{ marginBottom: 32 }}>
          <div style={labelStyle(SPECTRUM.azure)}>Domain split</div>
          <h2 style={sectionHeadStyle}>.org explains, .com applies</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
              gap: 12,
            }}
          >
            <DomainCard
              domain="teg-blue.org"
              title="Framework and research grounding"
              body="Explains the Gradient, source map, method, publications, and how the public framework is organized."
              href="/foundations"
            />
            <DomainCard
              domain="teg-blue.com"
              title="Practical public tools"
              body="Carries applied tools generated from the same Gradient and Engine logic."
              href="https://teg-blue.com/emotional-tools"
              external
            />
          </div>
        </section>
      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "How TEG-Blue Works", url: "/how-it-works" },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "How TEG-Blue Works | TEG-Blue",
              url: "https://teg-blue.org/how-it-works",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

function SystemCard({ item, number }) {
  return (
    <div
      style={{
        padding: 15,
        minHeight: 178,
        background: gradientCardBg(item.color, 0.06),
        border: `1px solid ${hexToRgba(item.color, 0.16)}`,
        borderTop: `3px solid ${item.color}`,
        borderRadius: RADIUS.md,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <span
          style={{
            width: 24,
            height: 24,
            borderRadius: 999,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: hexToRgba(item.color, 0.14),
            color: item.color,
            fontFamily: FONT.mono,
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          {number}
        </span>
        <div style={labelStyle(item.color)}>{item.label}</div>
      </div>
      <h3 style={{ fontSize: 15, fontWeight: 650, color: TEXT.primary, margin: "0 0 8px" }}>
        {item.title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.62, margin: 0 }}>
        {item.body}
      </p>
    </div>
  );
}

function StatePill({ state, index }) {
  const isShutdown = state === "Shutdown";
  const colors = [
    SPECTRUM.sky,
    SPECTRUM.azure,
    SPECTRUM.blue,
    SPECTRUM.cobalt,
    SPECTRUM.indigo,
    SPECTRUM.lavender,
    SPECTRUM.slate,
  ];
  const color = colors[index] || SPECTRUM.azure;

  return (
    <div
      style={{
        minHeight: 58,
        display: "flex",
        alignItems: "center",
        padding: "10px 12px",
        background: hexToRgba(color, isShutdown ? 0.11 : 0.07),
        border: `1px solid ${hexToRgba(color, 0.16)}`,
        borderStyle: isShutdown ? "dashed" : "solid",
        borderRadius: RADIUS.md,
        color: TEXT.secondary,
        fontSize: 13,
        lineHeight: 1.35,
      }}
    >
      {state}
    </div>
  );
}

function ToolSurfaceCard({ item }) {
  return (
    <div
      style={{
        padding: 17,
        background: BG.card,
        border: `1px solid ${hexToRgba(item.color, 0.16)}`,
        borderLeft: `3px solid ${item.color}`,
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

function ExampleStep({ step, number, isLast }) {
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

function LinkCard({ title, body, href, color }) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        padding: 17,
        background: gradientCardBg(color, 0.055),
        border: `1px solid ${hexToRgba(color, 0.16)}`,
        borderRadius: RADIUS.md,
        textDecoration: "none",
      }}
    >
      <h3 style={{ fontSize: 15, fontWeight: 650, color: TEXT.primary, margin: "0 0 8px" }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: "0 0 10px" }}>
        {body}
      </p>
      <span style={{ fontSize: 12, fontFamily: FONT.mono, color }}>Open</span>
    </Link>
  );
}

function DomainCard({ domain, title, body, href, external }) {
  const LinkEl = external ? "a" : Link;
  const extraProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <LinkEl
      href={href}
      {...extraProps}
      style={{
        display: "block",
        padding: 18,
        background: BG.card,
        border: `1px solid ${BORDER.default}`,
        borderRadius: RADIUS.md,
        textDecoration: "none",
      }}
    >
      <div style={labelStyle(SPECTRUM.azure)}>{domain}</div>
      <h3 style={{ fontSize: 16, fontWeight: 650, color: TEXT.primary, margin: "0 0 8px" }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: 0 }}>
        {body}
      </p>
    </LinkEl>
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

const sectionHeadStyle = {
  fontSize: 20,
  fontWeight: 700,
  color: TEXT.primary,
  lineHeight: 1.25,
  margin: "0 0 10px",
};

const bodyStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  margin: 0,
};
