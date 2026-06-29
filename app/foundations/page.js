import Link from "next/link";
import {
  BG,
  TEXT,
  BORDER,
  FONT,
  SPECTRUM,
  RADIUS,
  hexToRgba,
  gradientCardBg,
  REALITY_CHECK_STATES,
  REALITY_CHECK_GRADIENT,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, PageLayout, ReviewStatusPanel } from "@/src/components";
import { generateSystemOverviewJsonLd, generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What is TEG-Blue?",
    answer: "TEG-Blue is The Emotional Gradient Blueprint: a visual map for patterns we can already see across emotion, nervous systems, survival strategies, identity, social patterns, and repair.",
  },
  {
    question: "What does the Nervous System Gradient show?",
    answer: "It shows how safety, threat, control, shutdown, restoration, and repair shape perception, emotion, behaviour, empathy, accountability, and relational patterns.",
  },
  {
    question: "Why does state-shaped capacity matter?",
    answer: "Because visible behaviour often carries more than one layer. State, history, repetition, power, impact, and repair capacity all change how a pattern should be understood.",
  },
  {
    question: "How should harm be read in TEG-Blue?",
    answer: "Impact stays visible. TEG-Blue asks what happened, what effect it had, what capacity was available, and what response fits: support, repair, boundary, protection, accountability, further study, or a combination.",
  },
  {
    question: "What kind of framework is it?",
    answer: "TEG-Blue is an educational and research-facing visual map. It supports clearer pattern reading; clinical use, treatment claims, and formal validation require separate review.",
  },
];

const SIDEBAR_SECTIONS = [
  { label: "Overview", href: "#what-it-is", description: "The core identity of TEG-Blue." },
  { label: "The Gradient", href: "#gradient", description: "Safety, threat, control, shutdown, and repair." },
  { label: "Pattern Reading", href: "#reading-patterns", description: "Impact, capacity, and response." },
  { label: "Capacities", href: "#what-changes", description: "What shifts with state." },
  { label: "Use and Limits", href: "#scope", description: "How to hold the framework responsibly." },
  { label: "Explore More", href: "#where-next", description: "Research, method, and tools." },
];

const OVERVIEW_CARDS = [
  {
    label: "Body",
    title: "Patterns begin in the nervous system",
    body: "The body organises around safety, threat, connection, protection, control, shutdown, restoration, and repair.",
    color: SPECTRUM.azure,
  },
  {
    label: "Scale",
    title: "Patterns move through relationships and culture",
    body: "What begins as body-level organisation can shape habits, roles, group norms, institutions, and social meaning.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Repair",
    title: "Legibility creates room for response",
    body: "When a pattern becomes visible, support, interruption, protection, accountability, and repair can be chosen more clearly.",
    color: SPECTRUM.indigo,
  },
];

const STATE_COPY = {
  X: "Resting availability. No active problem signal; settling and repair are available.",
  A: "Safety with others. Engagement, reciprocity, perspective, and repair can stay online.",
  "A↔B": "Belonging is uncertain. The system checks whether it is safe to stay open.",
  B: "Threat is detected. The system mobilises to defend, escape, appease, set distance, or protect.",
  C: "Threat persists. Attention narrows toward anticipation, risk management, and control of variables.",
  D: "Life-peril organisation. Power or force becomes the trusted route when other routes are unavailable.",
  Z: "Mobilisation cannot form or has failed. The body conserves, withdraws, freezes, or collapses.",
};

const READING_POINTS = [
  {
    label: "Impact",
    title: "What happened, and what did it do?",
    body: "Name the effect on clarity, autonomy, safety, options, trust, and repair.",
    color: SPECTRUM.azure,
  },
  {
    label: "Capacity",
    title: "What capacity was available or unavailable?",
    body: "Track whether empathy, accountability, perspective, and reality-testing can stay present.",
    color: SPECTRUM.blue,
  },
  {
    label: "Return",
    title: "What returns as safety increases?",
    body: "If repair capacity returns, the pattern may be protective. If absence persists, response moves toward boundary, protection, and accountability.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Response",
    title: "What is needed now?",
    body: "Support, repair, interruption, boundary, protection, accountability, further study, or a combination.",
    color: SPECTRUM.indigo,
  },
];

const DIMENSIONS = [
  "Perception",
  "Emotion",
  "Body activation",
  "Cognition",
  "Empathy",
  "Accountability",
  "Repair capacity",
  "Behaviour",
  "Tempo",
  "Time horizon",
  "Reality-testing",
  "Relational direction",
];

const SCOPE_ITEMS = [
  {
    title: "It is a shared map",
    body: "The Gradient gives shared language for emotional and nervous-system patterns across safety, threat, control, shutdown, restoration, and repair.",
  },
  {
    title: "It supports pattern reading",
    body: "The framework helps readers connect visible behaviour with state, repetition, impact, available capacity, and possible response.",
  },
  {
    title: "It requires context",
    body: "A state label describes a pattern of organisation. Assessment, diagnosis, treatment, and clinical decisions require separate professional context.",
  },
  {
    title: "It keeps impact visible",
    body: "A protective origin can still cause harm. A composed pattern can still reduce another person's clarity, autonomy, safety, or repair.",
  },
];

export const metadata = {
  title: "TEG-Blue Overview",
  description: "A public overview of the visual map for nervous-system patterns: safety, threat, control, shutdown, impact, accountability, and repair.",
  keywords: [
    "TEG-Blue overview",
    "The Emotional Gradient Blueprint",
    "Nervous System Gradient",
    "state-shaped capacity",
    "nervous system states",
    "emotional regulation",
    "repair capacity",
    "accountability",
    "visual map",
    "emotional patterns",
  ],
  alternates: {
    canonical: "https://teg-blue.org/foundations",
  },
  openGraph: {
    title: "TEG-Blue Overview",
    description: "A visual map for reading nervous-system patterns across impact, capacity, accountability, and repair.",
    url: "https://teg-blue.org/foundations",
    type: "article",
    siteName: "TEG-Blue",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEG-Blue Overview",
    description: "A visual map for reading nervous-system patterns across impact, capacity, accountability, and repair.",
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
            description="A public overview of the visual map for patterns we can already see across safety, threat, control, shutdown, impact, accountability, and repair."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <WhatItIsSection />
        <GradientSection />
        <ReadingPatternsSection />
        <WhatChangesSection />
        <ScopeSection />

        <ReviewStatusPanel
          title="Research position"
          description="TEG-Blue draws from established research while offering its own visual integration. The framework is presented for study, discussion, application, and further review."
        />

        <WhereNextSection />
      </PageLayout>

      <SiteFooter />

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
              name: "TEG-Blue Overview",
              url: "https://teg-blue.org/foundations",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

function WhatItIsSection() {
  return (
    <section id="what-it-is" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Core identity</div>
      <h2 style={sectionHeadingStyle}>TEG-Blue makes state-shaped capacity legible.</h2>
      <p style={leadStyle}>
        TEG-Blue is The Emotional Gradient Blueprint: a visual map for patterns we can already see across
        emotion, nervous systems, survival strategies, identity, social patterns, and repair.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 760 }}>
        It shows how patterns that begin in the body can shape relationships, groups, institutions, and culture
        across safety, threat, control, shutdown, restoration, and repair.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 12,
          marginTop: 20,
        }}
      >
        {OVERVIEW_CARDS.map((card) => (
          <InfoCard key={card.title} item={card} />
        ))}
      </div>
    </section>
  );
}

function GradientSection() {
  return (
    <section id="gradient" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>The map</div>
      <h2 style={sectionHeadingStyle}>The Gradient runs from availability into protection, with shutdown as a fallback.</h2>
      <p style={leadStyle}>
        The Nervous System Gradient is the central map of TEG-Blue. It shows how the body moves from rest and
        connection into threat response, control, and shutdown, and where restoration or repair may become
        possible again.
      </p>

      <div
        aria-hidden="true"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 68px",
          gap: 10,
          alignItems: "center",
          marginTop: 22,
          marginBottom: 10,
        }}
      >
        <span
          style={{
            height: 18,
            borderRadius: 999,
            background: REALITY_CHECK_GRADIENT,
            boxShadow: `0 0 22px ${hexToRgba(SPECTRUM.azure, 0.22)}`,
          }}
        />
        <span
          style={{
            height: 18,
            borderRadius: 999,
            background: hexToRgba(SPECTRUM.slate, 0.45),
            border: `1px dashed ${hexToRgba(SPECTRUM.sky, 0.42)}`,
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 68px",
          gap: 10,
          fontFamily: FONT.mono,
          fontSize: 10,
          color: TEXT.muted,
          marginBottom: 18,
        }}
      >
        <span style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
          <span>Availability</span>
          <span>Protection</span>
        </span>
        <span style={{ textAlign: "right" }}>Shutdown</span>
      </div>

      <div
        style={{
          background: BG.card,
          border: `1px solid ${BORDER.default}`,
          borderRadius: RADIUS.lg,
          overflow: "hidden",
        }}
      >
        {REALITY_CHECK_STATES.map((state, index) => (
          <StateRow
            key={state.code}
            state={state}
            index={index}
            isLast={index === REALITY_CHECK_STATES.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function ReadingPatternsSection() {
  return (
    <section id="reading-patterns" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Pattern reading</div>
      <h2 style={sectionHeadingStyle}>Read the pattern, the impact, and the available response.</h2>
      <p style={leadStyle}>
        TEG-Blue helps separate the organisation of a pattern from its effect. A response may begin as protection,
        and it still needs to be read through impact, repetition, power, accountability, and repair capacity.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
          gap: 12,
          marginTop: 18,
        }}
      >
        {READING_POINTS.map((point) => (
          <InfoCard key={point.title} item={point} />
        ))}
      </div>

      <div
        style={{
          marginTop: 18,
          padding: 18,
          background: gradientCardBg(SPECTRUM.cobalt, 0.055),
          border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.18)}`,
          borderLeft: `3px solid ${SPECTRUM.cobalt}`,
          borderRadius: RADIUS.md,
        }}
      >
        <p style={{ ...bodyStyle, color: TEXT.primary, fontWeight: 600, marginBottom: 8 }}>
          Patterns are read by their effects over time.
        </p>
        <p style={bodyStyle}>
          If empathy, accountability, repair, and reality-testing return as safety increases, the pattern may be
          protective. If they remain absent and the pattern keeps reducing clarity, autonomy, or repair, the
          response moves toward boundary, protection, and accountability.
        </p>
      </div>
    </section>
  );
}

function WhatChangesSection() {
  return (
    <section id="what-changes" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>What shifts</div>
      <h2 style={sectionHeadingStyle}>State changes what is available.</h2>
      <p style={leadStyle}>
        The Gradient is useful because several capacities can shift together: what feels true, what can be
        considered, what the body prepares to do, and what kind of repair is possible.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginTop: 18,
        }}
      >
        {DIMENSIONS.map((dimension) => (
          <span
            key={dimension}
            style={{
              padding: "7px 10px",
              borderRadius: RADIUS.sm,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.20)}`,
              background: hexToRgba(SPECTRUM.azure, 0.06),
              color: TEXT.secondary,
              fontSize: 12,
              lineHeight: 1.3,
            }}
          >
            {dimension}
          </span>
        ))}
      </div>
    </section>
  );
}

function ScopeSection() {
  return (
    <section id="scope" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.slate)}>Scope</div>
      <h2 style={sectionHeadingStyle}>Use the framework as a map, not a verdict.</h2>
      <p style={leadStyle}>
        The Nervous System Gradient gives language for emotional and social patterns. It works best when it is
        held with context, observation, humility, and attention to impact.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: 12,
          marginTop: 18,
        }}
      >
        {SCOPE_ITEMS.map((item) => (
          <ScopeCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function WhereNextSection() {
  return (
    <section id="where-next" style={{ marginBottom: 32 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Where next</div>
      <h2 style={sectionHeadingStyle}>Explore the framework in more depth.</h2>
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
            <NavRow label="Research foundations" href="/scientific-foundations" linkText="Scientific Foundations" />
            <NavRow label="Method, claims, and limits" href="/methodology" linkText="Methodology" />
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
        minHeight: 148,
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

function StateRow({ state, index, isLast }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "44px minmax(0, 1fr)",
        gap: 12,
        padding: "14px 16px",
        borderBottom: isLast ? "none" : `1px solid ${BORDER.default}`,
        background: state.activeGradient ? "transparent" : hexToRgba(state.color, 0.08),
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 999,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: hexToRgba(state.color, state.activeGradient ? 0.18 : 0.12),
          border: state.activeGradient ? `1px solid ${hexToRgba(state.color, 0.22)}` : `1px dashed ${hexToRgba(SPECTRUM.sky, 0.38)}`,
          color: state.ink,
          fontFamily: FONT.mono,
          fontSize: 11,
          fontWeight: 800,
        }}
      >
        {index + 1}
      </div>
      <div>
        <h3 style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "baseline", fontSize: 14, fontWeight: 650, color: TEXT.primary, margin: "0 0 5px" }}>
          <span>{state.mode}</span>
          <span style={{ fontFamily: FONT.mono, fontSize: 10, color: TEXT.muted }}>
            {state.code}
          </span>
          {!state.activeGradient && (
            <span
              style={{
                fontFamily: FONT.mono,
                fontSize: 9,
                fontWeight: 650,
                lineHeight: 1.2,
                color: TEXT.hint,
                textTransform: "uppercase",
              }}
            >
              fallback
            </span>
          )}
        </h3>
        <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.62, margin: 0 }}>
          {STATE_COPY[state.code]}
        </p>
      </div>
    </div>
  );
}

function ScopeCard({ item }) {
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
