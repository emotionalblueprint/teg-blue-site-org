import Link from "next/link";
import {
  BG,
  TEXT,
  BORDER,
  FONT,
  SPECTRUM,
  ACCENT,
  RADIUS,
  contrastColor,
  hexToRgba,
  gradientCardBg,
  REALITY_CHECK_STATES,
  REALITY_CHECK_GRADIENT,
} from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import ResearcherHero from "@/src/components/ResearcherHero";
import PageLayout from "@/src/components/PageLayout";
import ReviewStatusPanel from "@/src/components/ReviewStatusPanel";
import { generateSystemOverviewJsonLd, generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const MAP_SUBTITLE =
  "A visual map of how body state, emotion, perception, relationship, protection, shutdown, regulation, and repair can shift across safety and threat.";

const FAQ_ITEMS = [
  {
    question: "What is TEG-Blue?",
    answer: "TEG-Blue is The Emotional Gradient Blueprint: a map that gathers research from different fields into one visual framework for reading body state, emotion, relationship, protection, shutdown, and repair.",
  },
  {
    question: "What is The Nervous System Gradient?",
    answer: `The Nervous System Gradient is the central public map inside TEG-Blue. ${MAP_SUBTITLE}`,
  },
  {
    question: "How should the framework be used?",
    answer: "Use it as a map for reading patterns, impact, capacity, and possible response. It is educational and research-facing, not diagnostic or clinical.",
  },
  {
    question: "How does TEG-Blue handle harm?",
    answer: "Mechanism explains the pattern; it does not erase impact. TEG-Blue keeps behaviour, harm, capacity, accountability, boundary, protection, and repair distinct.",
  },
];

const OVERVIEW_CARDS = [
  {
    label: "Body state",
    title: "What the body is doing",
    body: "The body is continually reading conditions: can I connect, protect, act, rest, or repair?",
    color: SPECTRUM.azure,
  },
  {
    label: "Emotion",
    title: "What the feeling is carrying",
    body: "Emotion can signal safety, threat, need, boundary, impact, connection, or repair.",
    color: SPECTRUM.indigo,
  },
  {
    label: "Reality",
    title: "What feels true",
    body: "State changes what feels real. It can hold body signals, facts, and context together, or make one signal feel like the whole situation.",
    color: ACCENT.green,
  },
  {
    label: "Chronic",
    title: "What repeats",
    body: "When threat or pressure lasts, a response can become a pattern. The system may read the world through what it has learned to expect.",
    color: ACCENT.orange,
  },
];

const READING_POINTS = [
  {
    label: "Observe",
    title: "What happened?",
    body: "Begin with behaviour, context, repetition, and relational effect before assigning motive or diagnosis.",
    color: SPECTRUM.azure,
  },
  {
    label: "Impact",
    title: "What did it do?",
    body: "Name the effect on clarity, autonomy, safety, options, trust, boundaries, and repair.",
    color: SPECTRUM.blue,
  },
  {
    label: "Capacity",
    title: "What was available?",
    body: "Track whether empathy, accountability, perspective, reality-testing, and repair can stay present.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Response",
    title: "What fits now?",
    body: "Support, interruption, boundary, protection, accountability, care, repair, or further study may each fit different patterns.",
    color: SPECTRUM.indigo,
  },
];

const STATE_COPY = {
  X: "Resting availability. No active problem signal; regulation and repair can remain available.",
  A: "Safety with others. Engagement, reciprocity, perspective, and repair can stay online.",
  "A↔B": "Belonging is uncertain. The system checks whether it is safe to stay open.",
  B: "Threat is detected. The system mobilizes to defend, escape, appease, set distance, or protect.",
  C: "Persistent threat. Attention narrows toward strategic management, anticipation, and control of variables.",
  D: "Life-threat organization. Power or force becomes the available route when other routes are unavailable.",
  Z: "Capacity exceeded. Active mobilisation cannot form or continue, so the body conserves, withdraws, freezes, or collapses.",
};

const SCOPE_ITEMS = [
  {
    title: "A map, not a verdict",
    body: "A Gradient position describes a possible organization of a pattern. It is not a fixed identity, moral category, or clinical label.",
  },
  {
    title: "A pattern read, not mind-reading",
    body: "TEG-Blue can help interpret observable patterns and effects, but it cannot prove inner state, intention, or whole identity.",
  },
  {
    title: "A mechanism with impact",
    body: "A protective origin can still cause harm when a pattern becomes rigid, repeated, controlling, or unrepaired.",
  },
  {
    title: "A framework with research limits",
    body: "Research supports specific parts of the map. TEG-Blue's contribution is the way those parts are placed together.",
  },
];

export const metadata = {
  title: "TEG-Blue Overview",
  description: "A public overview of TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient as its central public map.",
  keywords: [
    "TEG-Blue overview",
    "The Emotional Gradient Blueprint",
    "Nervous System Gradient",
    "emotional patterns",
    "nervous system patterns",
    "state-shaped perception",
    "repair capacity",
    "responsible pattern reading",
  ],
  alternates: {
    canonical: "https://teg-blue.org/foundations",
  },
  openGraph: {
    title: "TEG-Blue Overview",
    description: "The Emotional Gradient Blueprint and its central public map, The Nervous System Gradient.",
    url: "https://teg-blue.org/foundations",
    type: "article",
    siteName: "TEG-Blue",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEG-Blue Overview",
    description: "A public overview of The Emotional Gradient Blueprint.",
  },
};

export default function FoundationsPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/foundations" />

      <PageLayout
        header={
          <ResearcherHero
            badge="FRAMEWORK OVERVIEW"
            title="TEG-Blue Overview"
            subtitle="The Emotional Gradient Blueprint"
            description="What the framework is, what the Gradient maps, how to read patterns, and what the map does not claim."
          />
        }
      >
        <WhatItIsSection />
        <GradientSection />
        <ReadingPatternsSection />
        <StateShiftsSection />
        <ScopeSection />

        <ReviewStatusPanel
          title="Grounded in science, with the parts kept distinct."
          description="Research areas support specific parts of the map. Each field keeps its own methods and limits. TEG-Blue places the parts together."
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
      <div style={labelStyle(SPECTRUM.azure)}>Core frame</div>
      <h2 style={sectionHeadingStyle}>TEG-Blue shows what can change when state changes.</h2>
      <p style={leadStyle}>
        TEG-Blue is The Emotional Gradient Blueprint: a map that gathers research from different fields into one
        visual framework for reading body state, emotion, relationship, protection, shutdown, and repair.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 790 }}>
        In the current public phase, the Blueprint is expressed most directly through The Nervous System
        Gradient. The map shows how shifts that begin in the body can change what feels true, what becomes
        possible, what repeats, and what repair may require.
      </p>
      <div style={calloutStyle(SPECTRUM.cobalt)}>
        <p style={{ ...bodyStyle, color: TEXT.primary, fontWeight: 600, marginBottom: 8 }}>
          In plain language: TEG-Blue puts separate research areas into one map.
        </p>
        <p style={bodyStyle}>
          Emotion science, body-state research, stress physiology, attachment, trauma, relationship, and repair
          are often studied separately. TEG-Blue arranges those parts so a reader can see how they may move
          together in one pattern.
        </p>
        <p style={{ ...bodyStyle, marginTop: 10 }}>
          This does not mean one field proves the whole framework. It means each part of the map should stay
          connected to the research area that supports it.
        </p>
      </div>
      <div style={gridStyle}>
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
      <div style={labelStyle(SPECTRUM.cobalt)}>Central public map</div>
      <h2 style={sectionHeadingStyle}>The Nervous System Gradient sits inside the Blueprint.</h2>
      <p style={leadStyle}>{MAP_SUBTITLE}</p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 790 }}>
        The Gradient does not reveal a person's hidden truth. It gives a shared way to ask what pattern may be
        shaping perception, emotion, body activation, what feels real, behaviour, relationship, and repair.
      </p>

      <div aria-hidden="true" style={gradientBarWrapStyle}>
        <span style={activeGradientStyle} />
        <span style={shutdownGradientStyle} />
      </div>
      <div style={gradientLabelStyle}>
        <span style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
          <span>Safety</span>
          <span>Threat, management, force</span>
        </span>
        <span style={{ textAlign: "right" }}>Capacity exceeded</span>
      </div>

      <div style={stateListStyle}>
        {REALITY_CHECK_STATES.map((state, index) => (
          <StateRow key={state.code} state={state} index={index} isLast={index === REALITY_CHECK_STATES.length - 1} />
        ))}
      </div>
    </section>
  );
}

function ReadingPatternsSection() {
  return (
    <section id="reading-patterns" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Pattern reading</div>
      <h2 style={sectionHeadingStyle}>Read observation, impact, capacity, and response separately.</h2>
      <p style={leadStyle}>
        Start with what can be seen and what effect occurred. Then ask what capacity was available and what
        response fits now.
      </p>
      <div style={gridStyle}>
        {READING_POINTS.map((point) => (
          <InfoCard key={point.title} item={point} />
        ))}
      </div>
      <div style={calloutStyle(SPECTRUM.cobalt)}>
        <p style={{ ...bodyStyle, color: TEXT.primary, fontWeight: 600, marginBottom: 8 }}>
          The base read is effect over time.
        </p>
        <p style={bodyStyle}>
          Can impact be named, can empathy stay present, can accountability land, can repair change the pattern,
          and can reality stay discussable? If those capacities return as safety increases, the pattern may be
          protective. If they remain absent and the pattern keeps reducing clarity, autonomy, or repair, the
          response moves toward boundary, protection, and accountability.
        </p>
      </div>
    </section>
  );
}

function StateShiftsSection() {
  return (
    <section id="state-shifts" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>What shifts</div>
      <h2 style={sectionHeadingStyle}>State changes what feels true, possible, and repeatable.</h2>
      <p style={leadStyle}>
        The Gradient is useful because several things can shift together: what the system notices, what feels
        true, what the body prepares to do, whether empathy can stay present, and whether repair can begin. When
        threat or pressure lasts, a response can become a recurring pattern.
      </p>
      <div style={pillWrapStyle}>
        {["Perception", "Emotion", "Body activation", "What feels true", "Empathy", "Accountability", "Repair", "Repetition"].map((dimension) => (
          <span key={dimension} style={pillStyle}>
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
      <div style={labelStyle(SPECTRUM.slate)}>Scope and limits</div>
      <h2 style={sectionHeadingStyle}>Use the framework as a map, not as authority over a person.</h2>
      <p style={leadStyle}>
        TEG-Blue works best when it starts with observation and impact. Calm is not the same as safety. Distress
        is not the same as danger.
      </p>
      <div style={gridStyle}>
        {SCOPE_ITEMS.map((item) => (
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
            <NavRow label="Ethical commitments and use limits" href="/ethics" linkText="Ethics" />
            <NavRow label="Research areas and source limits" href="/scientific-foundations" linkText="Scientific Grounding" />
            <NavRow label="Basic terms and map language" href="/glossary" linkText="Glossary" />
            <NavRow label="Practical tools for applying the map" href="https://teg-blue.com/" linkText="teg-blue.com" external />
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

function StateRow({ state, index, isLast }) {
  return (
    <div style={stateRowStyle(state, isLast)}>
      <div style={stateNumberStyle(state)}>{index + 1}</div>
      <div>
        <h3 style={stateTitleStyle}>
          <span>{state.mode}</span>
          <span style={stateCodeStyle}>{state.code}</span>
          {!state.activeGradient && <span style={stateFallbackStyle}>fallback</span>}
        </h3>
        <p style={cardBodyStyle}>{STATE_COPY[state.code]}</p>
      </div>
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
    minHeight: 156,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.16)}`,
    borderLeft: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

function calloutStyle(color) {
  return {
    marginTop: 18,
    padding: 18,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.18)}`,
    borderLeft: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

function stateRowStyle(state, isLast) {
  return {
    display: "grid",
    gridTemplateColumns: "44px minmax(0, 1fr)",
    gap: 12,
    padding: "14px 16px",
    borderBottom: isLast ? "none" : `1px solid ${BORDER.default}`,
    background: state.activeGradient ? "transparent" : hexToRgba(state.color, 0.08),
  };
}

function stateNumberStyle(state) {
  return {
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
  };
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
  gap: 12,
  marginTop: 18,
};

const gradientBarWrapStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 68px",
  gap: 10,
  alignItems: "center",
  marginTop: 22,
  marginBottom: 10,
};

const activeGradientStyle = {
  height: 18,
  borderRadius: 999,
  background: REALITY_CHECK_GRADIENT,
  boxShadow: `0 0 22px ${hexToRgba(SPECTRUM.azure, 0.22)}`,
};

const shutdownGradientStyle = {
  height: 18,
  borderRadius: 999,
  background: hexToRgba(SPECTRUM.slate, 0.45),
  border: `1px dashed ${hexToRgba(SPECTRUM.sky, 0.42)}`,
};

const gradientLabelStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 68px",
  gap: 10,
  fontFamily: FONT.mono,
  fontSize: 10,
  color: TEXT.muted,
  marginBottom: 18,
};

const stateListStyle = {
  background: BG.card,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.lg,
  overflow: "hidden",
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

const plainCardStyle = {
  padding: 16,
  background: BG.card,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.md,
};

const pillWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 18,
};

const pillStyle = {
  padding: "7px 10px",
  borderRadius: RADIUS.sm,
  border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.20)}`,
  background: hexToRgba(SPECTRUM.azure, 0.06),
  color: TEXT.secondary,
  fontSize: 12,
  lineHeight: 1.3,
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

const stateTitleStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  alignItems: "baseline",
  fontSize: 14,
  fontWeight: 650,
  color: TEXT.primary,
  margin: "0 0 5px",
};

const stateCodeStyle = {
  fontFamily: FONT.mono,
  fontSize: 10,
  color: TEXT.muted,
};

const stateFallbackStyle = {
  fontFamily: FONT.mono,
  fontSize: 9,
  fontWeight: 650,
  lineHeight: 1.2,
  color: TEXT.hint,
  textTransform: "uppercase",
};
