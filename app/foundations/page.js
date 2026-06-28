import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, PageLayout, ReviewStatusPanel } from "@/src/components";
import { generateSystemOverviewJsonLd, generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What is TEG-Blue?",
    answer: "TEG-Blue is The Emotional Gradient Blueprint: a research-grounded visual synthesis for mapping how nervous-system states reshape perception, emotion, body activation, behaviour, and repair.",
  },
  {
    question: "What is the core insight?",
    answer: "The core insight is that nervous-system state shapes capacity, and capacity changes how behavior should be interpreted. The same outward behavior can carry different information depending on whether the system is available, checking for safety, protecting, controlling, or shutting down.",
  },
  {
    question: "What is the Gradient based on?",
    answer: "The Gradient is based on four organizing principles: a continuous body-level read of safety and threat, two survival problems, a graded perception scale, and two autonomic territories. TEG-Blue uses these principles to organize established source science into one visual map.",
  },
  {
    question: "How is TEG-Blue organized?",
    answer: "TEG-Blue brings together cited source science, the Nervous System Gradient, applied tools, and research/testing surfaces. The Gradient is the shared map; tools translate that map into practical views.",
  },
  {
    question: "What is the Nervous System Gradient?",
    answer: "The Nervous System Gradient is TEG-Blue's central map. It shows how nervous-system state changes reshape perception, emotion, body activation, behaviour, empathy, repair capacity, and tempo.",
  },
  {
    question: "Is TEG-Blue peer-reviewed?",
    answer: "The source literature includes peer-reviewed research and established scholarly work. The TEG-Blue architecture, diagrams, labels, and cross-disciplinary placement are an original visual synthesis, so they should be described as research-grounded, source-traced, and open to independent review and testing.",
  },
  {
    question: "How do TEG-Blue tools relate to the Gradient?",
    answer: "The tools are applied outputs of the Nervous System Gradient. The TEG-Blue Engine translates gradient logic into instruments by mapping how a dimension such as empathy, accountability, repair, behaviour, or relational impact changes across nervous-system states.",
  },
];

const SIDEBAR_SECTIONS = [
  { label: "What TEG-Blue Maps", href: "#what-teg-blue-maps", description: "A visual map of how nervous-system state changes capacity." },
  { label: "The Problem", href: "#the-problem", description: "Why state-blindness makes capacity look like character, intent, or truth." },
  { label: "Source Principles", href: "#gradient-principles", description: "The four principles that ground the Gradient." },
  { label: "The Gradient", href: "#nervous-system-gradient", description: "The seven states and what changes across them." },
  { label: "Review Status", href: "#review-status-heading", description: "Source science, original synthesis, and what still needs independent testing." },
  { label: "Where Next", href: "#where-next", description: "Selected routes for evidence, methodology, and tools." },
];

const OVERVIEW_POINTS = [
  {
    label: "Map",
    title: "The Nervous System Gradient",
    body: "Seven states show how safety, threat, control, and shutdown reshape available capacity.",
    color: SPECTRUM.azure,
  },
  {
    label: "Grounding",
    title: "Cited source science",
    body: "The framework draws from established research. The cross-disciplinary visual synthesis is TEG-Blue's original contribution.",
    color: SPECTRUM.indigo,
  },
  {
    label: "Application",
    title: "Tools and testing",
    body: "Applied tools translate the Gradient into usable instruments and create surfaces for future reliability and validity testing.",
    color: SPECTRUM.slate,
  },
];

const GRADIENT_PRINCIPLES = [
  {
    label: "Principle 1",
    title: "The body keeps reading safety and threat",
    body: "The Gradient starts with an always-on, below-awareness read of the body, environment, and relational field. The nervous system keeps asking whether it can stay open or must protect.",
    detail: "This is the neuroception lens in TEG-Blue language: one continuous read, with the state-specific filter belonging to the state being held.",
    color: SPECTRUM.azure,
  },
  {
    label: "Principle 2",
    title: "The read branches into two survival problems",
    body: "When enough safety is read, the survival problem is connection-preservation. When threat is read, the survival problem becomes organism-protection.",
    detail: "Connection-preservation is treated as a social-engagement capacity. Organism-protection moves through mobilisation first, with collapse as a fallback when mobilisation cannot resolve threat.",
    color: SPECTRUM.blue,
  },
  {
    label: "Principle 3",
    title: "Perception changes by position",
    body: "Each Gradient position describes what the body is perceiving: Safety, Safety and Connection, Ambivalent Safety, Threat, Increased Threat, Life Peril, or Overwhelm.",
    detail: "This is the perception face of the Gradient. It is distinct from the response-pattern face and from emotion categories.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Principle 4",
    title: "The same line crosses two autonomic territories",
    body: "The seven positions can also be read through the two autonomic branches: rest and engagement on the parasympathetic side, mobilisation on the sympathetic side, and shutdown as a parasympathetic fallback.",
    detail: "This gives the Gradient its branch-side map without turning the states into fixed person-types.",
    color: SPECTRUM.indigo,
  },
];

const GRADIENT_STATES = [
  {
    name: "Baseline",
    body: "Resting availability. No active problem signal; the system can repair, digest, perceive, and settle.",
    color: SPECTRUM.sky,
  },
  {
    name: "Connection / Belonging",
    body: "Safety with others; social engagement, bonding, reciprocity, and repair are available.",
    color: SPECTRUM.azure,
  },
  {
    name: "Safety Checking",
    body: "Belonging has become uncertain; the system checks whether it is still safe to stay open.",
    color: SPECTRUM.blue,
  },
  {
    name: "Protection / Defence",
    body: "Threat detected; the system mobilises to defend, escape, appease, set distance, or create a boundary.",
    color: SPECTRUM.cobalt,
  },
  {
    name: "Strategic Management",
    body: "Threat persists; the system anticipates, manages, contains risk, and stays ahead of what could happen.",
    color: SPECTRUM.indigo,
  },
  {
    name: "Domination",
    body: "Survival-level organisation around power or force when other routes are not trusted to work.",
    color: SPECTRUM.lavender,
  },
  {
    name: "Shutdown",
    body: "Mobilisation cannot form or has failed; the system conserves, withdraws, freezes, collapses, or reduces contact.",
    color: SPECTRUM.slate,
  },
];

const GRADIENT_DIMENSIONS = [
  "Perception",
  "Cognition",
  "Self-awareness",
  "Empathy",
  "Body activation",
  "Time horizon",
  "Emotional signals",
  "Behaviour",
  "Repair capacity",
  "Rush and tempo",
];

const GRADIENT_AXIS = `linear-gradient(90deg, ${SPECTRUM.sky} 0%, ${SPECTRUM.azure} 16%, ${SPECTRUM.blue} 32%, ${SPECTRUM.cobalt} 48%, ${SPECTRUM.indigo} 64%, ${SPECTRUM.lavender} 80%, ${SPECTRUM.slate} 100%)`;

export const metadata = {
  title: "TEG-Blue Overview | The Nervous System Gradient",
  description: "Overview of TEG-Blue: the Nervous System Gradient, cited source science, applied tools, research status, and what remains open to testing.",
  keywords: [
    "TEG-Blue overview",
    "TEG-Blue architecture",
    "emotional regulation system",
    "nervous system gradient",
    "research-grounded framework",
    "source-traced synthesis",
    "emotional tools status",
    "nervous system regulation",
    "research grounding",
    "source traces",
    "integrative architecture",
    "pattern-aware architecture",
    "TEG-Blue Engine",
    "applied coherence",
    "continuous neuroception",
    "autonomic nervous system",
    "graded perception scale",
    "polyvagal theory",
    "attachment theory",
  ],
  alternates: {
    canonical: "https://teg-blue.org/foundations",
  },
  openGraph: {
    title: "TEG-Blue Overview — The Nervous System Gradient",
    description: "A research-grounded visual synthesis for mapping how nervous-system states reshape capacity.",
    url: "https://teg-blue.org/foundations",
    type: "article",
    siteName: "TEG-Blue",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEG-Blue Overview — The Nervous System Gradient",
    description: "The Nervous System Gradient, cited source science, applied tools, and research status.",
  },
};

export default function FoundationsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/foundations" />

      <PageLayout
        header={
          <ResearcherHero
            badge="FRAMEWORK OVERVIEW"
            title="TEG-Blue Overview"
            subtitle="The Nervous System Gradient"
            description="A research-grounded visual synthesis for mapping how nervous-system states reshape perception, emotion, body activation, behaviour, and repair."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >

        <OverviewFrame />

        {/* ─── THE PROBLEM & SOLUTION ─────────────────────── */}
        <section id="the-problem" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What problem does TEG-Blue address?
          </h2>
          <div
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
              marginBottom: 20,
            }}
          >
            <p style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              The missing layer is state.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              In real conversations, the same behavior can come from different nervous-system states. Silence can be reflection, safety checking, threat, or shutdown. A sharp response can be protection, control, or learned survival. Without state, behavior is too easy to read as fixed character, pure intent, or the whole truth of a person.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              This matters across relationships, organizations, digital platforms, and AI-mediated communication, because emotional patterns scale faster than our ability to interpret them.
            </p>
            <p style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              What&apos;s missing is legibility.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              The science exists — decades of research across neuroscience, attachment theory, developmental psychology, and social psychology. But this knowledge is fragmented across disciplines, published in specialist language, inaccessible to those who need it most.
            </p>
            <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
              TEG-Blue makes state-dependent capacity legible. It treats emotions and behaviors not as noise or subjective chaos, but as structured biological and relational signals that change across the Gradient.
            </p>
          </div>

          {/* Core Insight + Testable Claim */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            <div
              style={{
                padding: 20,
                background: gradientCardBg(SPECTRUM.cobalt),
                borderRadius: RADIUS.md,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
                borderLeft: `3px solid ${SPECTRUM.cobalt}`,
              }}
            >
              <div style={labelStyle(SPECTRUM.cobalt)}>Core Insight</div>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: TEXT.primary }}>State shapes capacity; capacity changes meaning.</strong> What someone can perceive, feel, think, repair, or take responsibility for is shaped by nervous-system state. The same outward behavior can carry different information at different points on the Gradient.
              </p>
            </div>
            <div
              style={{
                padding: 20,
                background: gradientCardBg(SPECTRUM.indigo),
                borderRadius: RADIUS.md,
                border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.2)}`,
                borderLeft: `3px solid ${SPECTRUM.indigo}`,
              }}
            >
              <div style={labelStyle(SPECTRUM.indigo)}>The Core Testable Claim</div>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
                The key variable that may help explain relational and behavioral outcomes is not only a person&apos;s current nervous system state, but their <strong style={{ color: TEXT.primary }}>capacity to return to baseline when challenged</strong>. This capacity can be studied through &ldquo;complexity markers&rdquo; — signs of self-awareness, perspective-taking, and emotional differentiation in natural language.
              </p>
            </div>
          </div>
        </section>

        <GradientPrinciples />

        <GradientExplanation />

        <ReviewStatusPanel
          title="How to read the science status"
          description="The ingredients come from cited science and established scholarly work. The TEG-Blue architecture is the original visual synthesis: useful as a map, open to review, and not presented as independently validated as a whole."
        />

        {/* ─── WHERE TO GO NEXT ───────────────────────────── */}
        <section id="where-next" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Where to go next
          </h2>
          <div
            style={{
              background: BG.card,
              borderRadius: RADIUS.md,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: BG.surface }}>
                  <th style={tableHeaderStyle}>If you want to…</th>
                  <th style={tableHeaderStyle}>Go here</th>
                </tr>
              </thead>
              <tbody>
                <NavRow label="Review the source grounding" href="/scientific-foundations" linkText="Scientific Foundations →" />
                <NavRow label="Understand the methodology" href="/methodology" linkText="Methodology →" />
                <NavRow label="Review publications and study plans" href="/publications" linkText="Publications →" />
                <NavRow label="Inspect the reviewer architecture" href="/how-it-works" linkText="How It Works →" />
                <NavRow label="Explore applied tools" href="https://teg-blue.com/emotional-tools" linkText="teg-blue.com →" external />
              </tbody>
            </table>
          </div>
        </section>

      </PageLayout>

      <SiteFooter />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSystemOverviewJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "TEG-Blue Overview", url: "/foundations" },
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
              name: "TEG-Blue Overview | The Nervous System Gradient",
              url: "https://teg-blue.org/foundations",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────

function OverviewFrame() {
  return (
    <section id="what-teg-blue-maps" style={{ marginBottom: 40 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Overview</div>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: TEXT.primary, lineHeight: 1.25, margin: "0 0 10px" }}>
        TEG-Blue makes nervous-system state legible.
      </h2>
      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 0 18px", maxWidth: 720 }}>
        It organizes established science into a visual map of how safety, threat, control, and shutdown change what a person can perceive, feel, do, and repair.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
          gap: 10,
        }}
      >
        {OVERVIEW_POINTS.map((point) => (
          <div
            key={point.label}
            style={{
              padding: 14,
              background: gradientCardBg(point.color),
              border: `1px solid ${hexToRgba(point.color, 0.18)}`,
              borderTop: `2px solid ${point.color}`,
              borderRadius: RADIUS.md,
            }}
          >
            <div style={labelStyle(point.color)}>{point.label}</div>
            <h3 style={{ fontSize: 14, fontWeight: 650, color: TEXT.primary, margin: "0 0 6px" }}>
              {point.title}
            </h3>
            <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.62, margin: 0 }}>
              {point.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function GradientPrinciples() {
  return (
    <section id="gradient-principles" style={{ marginBottom: 40 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Gradient grounding</div>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: TEXT.primary, lineHeight: 1.25, margin: "0 0 10px" }}>
        What the Gradient rests on
      </h2>
      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 0 18px", maxWidth: 760 }}>
        The Gradient is built from four source principles. Together, they explain why TEG-Blue maps state as a continuous movement from availability, through protection, into overwhelm.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
          gap: 12,
          marginBottom: 16,
        }}
      >
        {GRADIENT_PRINCIPLES.map((principle) => (
          <div
            key={principle.title}
            style={{
              padding: 16,
              background: gradientCardBg(principle.color),
              borderRadius: RADIUS.md,
              border: `1px solid ${hexToRgba(principle.color, 0.18)}`,
              borderLeft: `3px solid ${principle.color}`,
            }}
          >
            <div style={labelStyle(principle.color)}>{principle.label}</div>
            <h3 style={{ fontSize: 14, fontWeight: 650, color: TEXT.primary, lineHeight: 1.35, margin: "0 0 8px" }}>
              {principle.title}
            </h3>
            <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: "0 0 10px" }}>
              {principle.body}
            </p>
            <p style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.55, margin: 0 }}>
              {principle.detail}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: 14,
          background: BG.surface,
          border: `1px solid ${BORDER.default}`,
          borderRadius: RADIUS.md,
        }}
      >
        <div style={labelStyle(SPECTRUM.cobalt)}>Perception scale</div>
        <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          <strong style={{ color: TEXT.primary }}>X</strong> Safety · <strong style={{ color: TEXT.primary }}>A</strong> Safety and Connection · <strong style={{ color: TEXT.primary }}>A&lt;-&gt;B</strong> Ambivalent Safety · <strong style={{ color: TEXT.primary }}>B</strong> Threat · <strong style={{ color: TEXT.primary }}>C</strong> Increased Threat · <strong style={{ color: TEXT.primary }}>D</strong> Life Peril · <strong style={{ color: TEXT.primary }}>Z</strong> Overwhelm
        </p>
      </div>
    </section>
  );
}

function GradientExplanation() {
  return (
    <section id="nervous-system-gradient" style={{ marginBottom: 40 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        <div>
          <div style={labelStyle(SPECTRUM.azure)}>The Gradient</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: TEXT.primary, lineHeight: 1.2, margin: "0 0 12px" }}>
            The central map is the Nervous System Gradient
          </h2>
          <p style={{ fontSize: 15, color: TEXT.primary, lineHeight: 1.8, fontWeight: 550, margin: "0 0 14px" }}>
            The Gradient explains the central move: state changes capacity. When the nervous system shifts, perception, reasoning, empathy, behaviour, and repair do not stay the same.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 0 18px" }}>
            This is why the tools can be generated from one shared structure. Each tool takes one dimension and asks how it changes across the same line of nervous-system organisation.
          </p>
          <div
            aria-hidden="true"
            style={{
              height: 16,
              borderRadius: 999,
              background: GRADIENT_AXIS,
              boxShadow: `0 0 22px ${hexToRgba(SPECTRUM.blue, 0.22)}`,
              marginBottom: 10,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 10,
              fontFamily: FONT.mono,
              fontSize: 10,
              color: TEXT.muted,
            }}
          >
            <span>Availability</span>
            <span>Protection</span>
            <span>Collapse</span>
          </div>
        </div>

        <div
          style={{
            background: BG.card,
            border: `1px solid ${BORDER.default}`,
            borderRadius: RADIUS.lg,
            overflow: "hidden",
          }}
        >
          {GRADIENT_STATES.map((state, index) => (
            <GradientStateRow
              key={state.name}
              state={state}
              number={index + 1}
              isLast={index === GRADIENT_STATES.length - 1}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: 22,
          paddingTop: 18,
          borderTop: `1px solid ${BORDER.default}`,
        }}
      >
        <div style={labelStyle(SPECTRUM.cobalt)}>What changes across the line</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 10,
          }}
        >
          {GRADIENT_DIMENSIONS.map((dimension) => (
            <span
              key={dimension}
              style={{
                padding: "7px 10px",
                borderRadius: RADIUS.sm,
                border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.18)}`,
                background: hexToRgba(SPECTRUM.blue, 0.055),
                color: TEXT.secondary,
                fontSize: 12,
                lineHeight: 1.3,
              }}
            >
              {dimension}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function GradientStateRow({ state, number, isLast }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "34px minmax(0, 1fr)",
        gap: 12,
        padding: "14px 16px",
        borderBottom: isLast ? "none" : `1px solid ${BORDER.default}`,
      }}
    >
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 999,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: hexToRgba(state.color, 0.14),
          color: state.color,
          fontFamily: FONT.mono,
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        {number}
      </div>
      <div>
        <h3 style={{ fontSize: 14, fontWeight: 650, color: TEXT.primary, margin: "0 0 5px" }}>
          {state.name}
        </h3>
        <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.62, margin: 0 }}>
          {state.body}
        </p>
      </div>
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
        <LinkEl href={href} {...extraProps} style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}>
          {linkText}
        </LinkEl>
      </td>
    </tr>
  );
}

// ─── SHARED STYLES ──────────────────────────────────────

function labelStyle(color) {
  return {
    fontSize: 9,
    fontWeight: 700,
    fontFamily: FONT.mono,
    textTransform: "uppercase",
    letterSpacing: 0,
    color: color,
    marginBottom: 4,
  };
}

const tableHeaderStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: TEXT.muted,
  textTransform: "uppercase",
  letterSpacing: 0,
  fontFamily: FONT.mono,
};

const tableCellStyle = {
  padding: "12px 16px",
  fontSize: 14,
};
