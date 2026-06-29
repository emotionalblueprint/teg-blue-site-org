import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What research does TEG-Blue draw from?",
    answer: "TEG-Blue draws from established research areas including affective neuroscience, autonomic physiology, attachment research, trauma research, developmental science, emotion science, cognitive science, social psychology, sociology, and related fields.",
  },
  {
    question: "Does this research validate TEG-Blue as a whole?",
    answer: "No. Research can support specific mechanisms and relationships inside the framework. The full TEG-Blue integration, diagrams, labels, tools, and applications require their own review and testing.",
  },
  {
    question: "What is TEG-Blue's contribution?",
    answer: "TEG-Blue places body, emotion, survival strategy, identity, social pattern, and repair into one visual gradient. The contribution is the integration and the usable map.",
  },
  {
    question: "How should this page be used?",
    answer: "Use it as a guide to which research areas help illuminate different parts of the Nervous System Gradient, not as a claim that any one field already contains the full framework.",
  },
];

const SIDEBAR_SECTIONS = [
  { label: "Overview", href: "#overview", description: "How research relates to the Gradient." },
  { label: "Research Lens", href: "#research-lens", description: "What research helps make visible." },
  { label: "Research Areas", href: "#research-areas", description: "Fields connected to the framework." },
  { label: "Claim Care", href: "#claim-care", description: "How not to overread the page." },
  { label: "Explore More", href: "#where-next", description: "Overview, method, and tools." },
];

const LENS_COLUMNS = [
  { key: "body", label: "Body" },
  { key: "relationship", label: "Relationship" },
  { key: "scale", label: "Scale" },
  { key: "repair", label: "Repair" },
];

const LENS_ROWS = [
  {
    area: "Affective neuroscience",
    body: "Emotion as biological signal",
    relationship: "Feeling as orientation",
    scale: "Shared emotional cues",
    repair: "Signals become nameable",
    color: SPECTRUM.azure,
  },
  {
    area: "Autonomic and stress physiology",
    body: "Activation, mobilisation, shutdown",
    relationship: "Capacity changes with state",
    scale: "Chronic threat costs accumulate",
    repair: "Return and restoration matter",
    color: SPECTRUM.blue,
  },
  {
    area: "Attachment and development",
    body: "Regulation develops in context",
    relationship: "Safety, proximity, rupture",
    scale: "Patterns can transmit",
    repair: "Co-regulation supports return",
    color: SPECTRUM.cobalt,
  },
  {
    area: "Trauma research",
    body: "Threat can remain organised",
    relationship: "Protection can repeat",
    scale: "Harm can structure environments",
    repair: "Safety precedes integration",
    color: SPECTRUM.indigo,
  },
  {
    area: "Social psychology and sociology",
    body: "State meets context",
    relationship: "Roles, norms, power",
    scale: "Groups and institutions pattern behaviour",
    repair: "Conditions shape what can change",
    color: SPECTRUM.slate,
  },
];

const RESEARCH_AREAS = [
  {
    title: "Emotion and affective neuroscience",
    body: "Helps explain emotion as a body-based signal system rather than noise, weakness, or a personal label.",
    contribution: "Supports the view that emotion carries information about safety, threat, need, boundary, value, and action readiness.",
    color: SPECTRUM.azure,
  },
  {
    title: "Autonomic physiology and stress research",
    body: "Helps explain why perception, cognition, body activation, tempo, and repair capacity change with state.",
    contribution: "Supports the Gradient's attention to activation, mobilisation, shutdown, chronic load, and return.",
    color: SPECTRUM.blue,
  },
  {
    title: "Attachment and developmental research",
    body: "Helps explain how relational safety, rupture, proximity, expectation, and regulation develop over time.",
    contribution: "Supports the link between body organisation, relationship patterns, identity, and repair.",
    color: SPECTRUM.cobalt,
  },
  {
    title: "Trauma and dissociation research",
    body: "Helps explain chronic threat adaptation, defensive organisation, collapse, hypervigilance, and fragmented capacity.",
    contribution: "Supports the distinction between protection, shutdown, harmful pattern, boundary, accountability, and repair.",
    color: SPECTRUM.indigo,
  },
  {
    title: "Cognitive science and emotion regulation",
    body: "Helps explain attention, prediction, cognitive load, meaning-making, and why insight alone may not shift a state.",
    contribution: "Supports the claim that state changes what can be perceived, considered, remembered, and revised.",
    color: SPECTRUM.azure,
  },
  {
    title: "Communication and repair frameworks",
    body: "Help explain the conditions under which language can name impact, restore clarity, support accountability, or fail.",
    contribution: "Supports the link between state, empathy, reality-testing, accountability, and repair capacity.",
    color: SPECTRUM.cobalt,
  },
  {
    title: "Social psychology, sociology, and power research",
    body: "Help explain how individual patterns become relational habits, group norms, institutional rules, and social harm.",
    contribution: "Supports TEG-Blue's scale claim: patterns that begin in the body can shape relationships, groups, institutions, and culture.",
    color: SPECTRUM.slate,
  },
  {
    title: "Biology, evolution, and social survival research",
    body: "Help explain belonging, hierarchy, status, care, threat detection, and organism-environment adaptation.",
    contribution: "Supports the Gradient's attention to survival strategies without reducing people to fixed categories.",
    color: SPECTRUM.indigo,
  },
];

const CLAIM_CARE = [
  {
    title: "A field supports a part",
    body: "A research area may help explain one mechanism, condition, capacity, or pattern. It should not be used to claim the whole framework is already established.",
  },
  {
    title: "TEG-Blue places parts in relation",
    body: "The framework's contribution is the integration: how body state, emotion, survival strategy, identity, social pattern, and repair are held together in one Gradient.",
  },
  {
    title: "Tools need their own review",
    body: "A practical tool can be useful as an educational map while still needing separate review for clinical, institutional, or research claims.",
  },
  {
    title: "Impact remains visible",
    body: "Mechanism never erases effect. Pattern reading still asks what happened, what impact occurred, and what response fits.",
  },
];

export default function ScientificFoundationsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/scientific-foundations" />

      <PageLayout
        header={
          <ResearcherHero
            badge="RESEARCH FOUNDATIONS"
            title="Scientific Foundations"
            subtitle="Research areas behind the map"
            description="A public map of the fields that help make emotional, nervous-system, relational, and social patterns visible."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <OverviewSection />
        <ResearchLensSection />
        <ResearchAreasSection />
        <ClaimCareSection />
        <WhereNextSection />
      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Scientific Foundations", url: "/scientific-foundations" },
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
              name: "Scientific Foundations | TEG-Blue",
              url: "https://teg-blue.org/scientific-foundations",
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
      <div style={labelStyle(SPECTRUM.azure)}>Research stance</div>
      <h2 style={sectionHeadingStyle}>Research helps make parts of the Gradient visible.</h2>
      <p style={leadStyle}>
        TEG-Blue does not treat research as a pile of citations or as a claim that one field already contains
        the whole framework. Each field remains itself. Each contributes something specific.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 800 }}>
        Affective neuroscience helps explain emotion as signal. Autonomic physiology helps explain state.
        Attachment and development help explain relational safety. Trauma research helps explain chronic
        adaptation. Social research helps explain how patterns scale. TEG-Blue places those parts in relation.
      </p>
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
          The established research supports parts. The integration is TEG-Blue's contribution.
        </p>
        <p style={bodyStyle}>
          This page names the research areas that help illuminate the map. It does not claim that TEG-Blue as a
          whole is clinically validated or that any source should be read as saying TEG-Blue in advance.
        </p>
      </div>
    </section>
  );
}

function ResearchLensSection() {
  return (
    <section id="research-lens" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Research lens</div>
      <h2 style={sectionHeadingStyle}>Different fields illuminate different parts of the same pattern.</h2>
      <p style={leadStyle}>
        The Gradient holds body, relationship, scale, and repair together. Research areas become useful when
        they clarify one of those parts without being stretched beyond what they can support.
      </p>
      <div
        style={{
          marginTop: 18,
          border: `1px solid ${BORDER.default}`,
          borderRadius: RADIUS.lg,
          overflowX: "auto",
          background: BG.card,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(150px, 1.1fr) repeat(4, minmax(120px, 1fr))",
            background: BG.surface,
          }}
        >
          <div style={matrixHeaderStyle}>Research area</div>
          {LENS_COLUMNS.map((column) => (
            <div key={column.key} style={matrixHeaderStyle}>
              {column.label}
            </div>
          ))}
        </div>
        {LENS_ROWS.map((row, index) => (
          <ResearchLensRow key={row.area} row={row} isLast={index === LENS_ROWS.length - 1} />
        ))}
      </div>
    </section>
  );
}

function ResearchAreasSection() {
  return (
    <section id="research-areas" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Research areas</div>
      <h2 style={sectionHeadingStyle}>The framework draws from fields with different jobs.</h2>
      <p style={leadStyle}>
        These areas are not collapsed into one theory. They help explain different mechanisms, conditions,
        capacities, patterns, and repair routes inside the Gradient.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
          gap: 12,
          marginTop: 18,
        }}
      >
        {RESEARCH_AREAS.map((area) => (
          <ResearchAreaCard key={area.title} area={area} />
        ))}
      </div>
    </section>
  );
}

function ClaimCareSection() {
  return (
    <section id="claim-care" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.slate)}>Claim care</div>
      <h2 style={sectionHeadingStyle}>Use research carefully, and only for the part it can support.</h2>
      <p style={leadStyle}>
        The clearest scientific page is not the page with the most names. It is the page where the reader can
        see what kind of support is being claimed and where the claim stops.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: 12,
          marginTop: 18,
        }}
      >
        {CLAIM_CARE.map((item) => (
          <ClaimCareCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function WhereNextSection() {
  return (
    <section id="where-next" style={{ marginBottom: 32 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Where next</div>
      <h2 style={sectionHeadingStyle}>Follow the question you are asking.</h2>
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
            <NavRow label="How to read claims responsibly" href="/methodology" linkText="Methodology" />
            <NavRow label="Project identity and research stance" href="/about" linkText="About" />
            <NavRow label="Interactive public tools" href="https://teg-blue.com/" linkText="teg-blue.com" external />
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ResearchLensRow({ row, isLast }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(150px, 1.1fr) repeat(4, minmax(120px, 1fr))",
        borderTop: `1px solid ${BORDER.default}`,
        borderBottom: isLast ? "none" : "none",
      }}
    >
      <div
        style={{
          ...matrixCellStyle,
          color: TEXT.primary,
          fontWeight: 650,
          borderLeft: `3px solid ${row.color}`,
          background: gradientCardBg(row.color, 0.045),
        }}
      >
        {row.area}
      </div>
      {LENS_COLUMNS.map((column) => (
        <div key={column.key} style={matrixCellStyle}>
          {row[column.key]}
        </div>
      ))}
    </div>
  );
}

function ResearchAreaCard({ area }) {
  return (
    <div
      style={{
        padding: 16,
        minHeight: 214,
        background: gradientCardBg(area.color, 0.055),
        border: `1px solid ${hexToRgba(area.color, 0.16)}`,
        borderTop: `3px solid ${area.color}`,
        borderRadius: RADIUS.md,
      }}
    >
      <h3 style={{ fontSize: 15, fontWeight: 650, color: TEXT.primary, lineHeight: 1.35, margin: "0 0 8px" }}>
        {area.title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: "0 0 10px" }}>
        {area.body}
      </p>
      <p style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.55, margin: 0 }}>
        {area.contribution}
      </p>
    </div>
  );
}

function ClaimCareCard({ item }) {
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

const matrixHeaderStyle = {
  padding: "12px 14px",
  fontSize: 10,
  fontFamily: FONT.mono,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 0,
  color: TEXT.muted,
  borderRight: `1px solid ${BORDER.default}`,
};

const matrixCellStyle = {
  padding: "13px 14px",
  fontSize: 12,
  lineHeight: 1.5,
  color: TEXT.secondary,
  borderRight: `1px solid ${BORDER.default}`,
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
