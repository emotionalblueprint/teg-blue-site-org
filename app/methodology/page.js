import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, AuthorBlock, PageLayout, ReviewStatusPanel } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateMethodologyJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const SIDEBAR_SECTIONS = [
  { label: "Method Rule", href: "#method-rule", description: "The public rule for moving from source science to TEG-Blue synthesis." },
  { label: "Claim Layers", href: "#claim-layers", description: "Source literature, established models, original synthesis, tools, evidence, and open claims." },
  { label: "Translation Path", href: "#translation-path", description: "How a source contribution becomes a Gradient position, dimension, or tool surface." },
  { label: "Status Labels", href: "#status-labels", description: "How to describe what is established, proposed, implemented, preliminary, or open." },
  { label: "Testing Plan", href: "#testing-plan", description: "Reliability, validity, replication, user studies, and natural-language analysis." },
  { label: "Correction Loop", href: "#correction-loop", description: "How review, disagreement, and better sources update the framework." },
  { label: "Boundaries", href: "#ethical-boundaries", description: "What the method is not allowed to do." },
  { label: "Current Limits", href: "#current-limits", description: "A plain-language account of what still needs work." },
];

const FAQ_ITEMS = [
  {
    question: "What is the TEG-Blue methodology?",
    answer: "TEG-Blue separates peer-reviewed source literature, established models and tools, original synthesis, applied tool surfaces, preliminary evidence, and open research questions. The method is to trace what each source contributes, place it in the Gradient, and keep the status of each claim visible.",
  },
  {
    question: "Does source science prove the whole TEG-Blue framework?",
    answer: "No. Source science grounds the ingredients. TEG-Blue's cross-disciplinary placement, Gradient language, diagrams, and tool logic are original synthesis work that remains open to independent review, correction, and testing.",
  },
  {
    question: "How are TEG-Blue tools related to methodology?",
    answer: "The tools are applied outputs of Gradient logic. They translate dimensions such as perception, empathy, accountability, repair, body activation, and relational impact across nervous-system states. Tools demonstrate applied coherence and create testable surfaces; they do not validate the whole framework by themselves.",
  },
  {
    question: "What can be tested?",
    answer: "Testable areas include state-marker reliability, natural-language complexity markers, tool psychometrics, convergent and discriminant validity, cross-cultural replication, longitudinal outcomes, and whether applied tools improve naming, comparison, or repair.",
  },
  {
    question: "How does TEG-Blue handle corrections?",
    answer: "Corrections are expected. Source traces, model bridges, status labels, and claim boundaries are designed so researchers can identify errors, challenge interpretations, propose better sources, and update the synthesis without treating disagreement as failure.",
  },
];

const CLAIM_LAYERS = [
  {
    label: "Layer 1",
    title: "Source literature",
    status: "Established fields",
    body: "Peer-reviewed research and established scholarship in neuroscience, attachment research, trauma studies, stress physiology, cognitive science, interoception, emotion science, and related areas.",
    method: "Use sources for the mechanism or finding they actually support.",
    color: SPECTRUM.azure,
  },
  {
    label: "Layer 2",
    title: "Established models and tools",
    status: "Credited lenses",
    body: "CBT, NVC, Plutchik, Zones of Regulation, Polyvagal Theory, IFS, attachment models, narcissism research, and other traditions each make part of the pattern visible.",
    method: "Credit their strengths and name what TEG-Blue is organizing from them.",
    color: SPECTRUM.blue,
  },
  {
    label: "Layer 3",
    title: "TEG-Blue synthesis",
    status: "Original contribution",
    body: "The Nervous System Gradient, the seven-state public map, cross-disciplinary placement, diagrams, labels, and Engine logic are TEG-Blue's synthesis.",
    method: "Describe as research-grounded, source-traced, and open to independent review.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Layer 4",
    title: "Applied tool surfaces",
    status: "Implemented outputs",
    body: "Gradient scales, behaviour maps, emotional tools, and relational views translate the same state logic into practical instruments.",
    method: "Use tools as testable surfaces, not as proof that the whole synthesis is validated.",
    color: SPECTRUM.indigo,
  },
  {
    label: "Layer 5",
    title: "Empirical evidence",
    status: "Preliminary and future",
    body: "Published analyses, pilot work, future psychometrics, reliability checks, user studies, and replication work belong in this layer.",
    method: "Report what each study actually shows, with limitations attached.",
    color: SPECTRUM.lavender,
  },
  {
    label: "Layer 6",
    title: "Open claims",
    status: "Research questions",
    body: "Claims about reliability, validity, clinical utility, prediction, outcomes, and cross-cultural fit stay open until specifically tested.",
    method: "Use proposes, hypothesizes, may help explain, and needs testing.",
    color: SPECTRUM.slate,
  },
];

const TRANSLATION_STEPS = [
  {
    title: "Identify the source contribution",
    body: "Name the specific mechanism, finding, practice, or model. Avoid using a whole field as symbolic authority.",
  },
  {
    title: "Separate evidence from interpretation",
    body: "Ask what the source itself establishes, and what TEG-Blue is inferring from it.",
  },
  {
    title: "Place the function",
    body: "Map the contribution to what it helps explain: safety reading, perception, cognition, empathy, body activation, behaviour, repair, or relational impact.",
  },
  {
    title: "Locate it on the Gradient",
    body: "Ask how the function changes from Baseline and Connection through Protection, Strategic Management, Domination, and Shutdown.",
  },
  {
    title: "Create a usable surface",
    body: "Translate the mapped dimension into a tool, scale, schema, or explanation that can be inspected and tested.",
  },
  {
    title: "Attach a status",
    body: "State whether this is source-grounded, original synthesis, implemented tool logic, preliminary evidence, or an open research question.",
  },
];

const STATUS_LABELS = [
  {
    title: "Cited source",
    body: "A source, field, theory, or model with its own authors, methods, and evidence base.",
    safeLanguage: "draws from; grounded in; source area",
    color: SPECTRUM.azure,
  },
  {
    title: "Established model or tool",
    body: "A widely used clinical, educational, communication, or emotional-literacy framework.",
    safeLanguage: "contributes; helps make visible; provides a lens",
    color: SPECTRUM.blue,
  },
  {
    title: "Original synthesis",
    body: "The TEG-Blue placement, Gradient structure, cross-disciplinary connection, naming, and diagrammatic form.",
    safeLanguage: "TEG-Blue proposes; original visual synthesis",
    color: SPECTRUM.cobalt,
  },
  {
    title: "Applied implementation",
    body: "Tools generated from Gradient logic, including scales, maps, schemas, and practical public instruments.",
    safeLanguage: "applied output; tool surface; operationalizes",
    color: SPECTRUM.indigo,
  },
  {
    title: "Preliminary evidence",
    body: "Completed initial analyses or early observations that support further testing, without overextending the claim.",
    safeLanguage: "initial evidence; preliminary; limited by",
    color: SPECTRUM.lavender,
  },
  {
    title: "Open question",
    body: "A claim that should remain conditional until independent reliability, validity, replication, or outcome testing exists.",
    safeLanguage: "may; could; needs testing; open to review",
    color: SPECTRUM.slate,
  },
];

const TESTING_PLAN = [
  {
    area: "State-marker reliability",
    test: "Can trained reviewers or structured models consistently identify Gradient states from the same material?",
    methods: "Inter-rater reliability, annotation protocols, adjudication, replication samples.",
  },
  {
    area: "Complexity markers",
    test: "Do self-awareness, perspective-taking, differentiation, and repair markers vary with state-dependent capacity?",
    methods: "Natural-language analysis, blinded coding, benchmark comparison, longitudinal samples.",
  },
  {
    area: "Tool psychometrics",
    test: "Do Gradient scales and emotional tools measure coherent constructs rather than general distress?",
    methods: "Reliability, factor analysis, convergent and discriminant validity, user testing.",
  },
  {
    area: "Applied coherence",
    test: "Can the same Gradient logic generate usable tools across empathy, accountability, repair, perception, body activation, and relational impact?",
    methods: "Tool audits, expert review, user comprehension studies, misuse analysis.",
  },
  {
    area: "Outcome usefulness",
    test: "Do tools improve naming, comparison, conflict clarity, or repair planning in real contexts?",
    methods: "Pilot studies, pre/post measures, qualitative feedback, controlled comparisons.",
  },
  {
    area: "Generalization",
    test: "Does the map hold across culture, language, neurotype, age, clinical context, and social setting?",
    methods: "Cross-cultural replication, translation review, population-specific validation.",
  },
];

const BOUNDARIES = [
  "Do not describe TEG-Blue as a diagnostic system.",
  "Do not present a state label as a fixed personality label.",
  "Do not claim the whole synthesis is independently peer-reviewed.",
  "Do not use tool coherence as proof of clinical validity.",
  "Do not remove harm by explaining the nervous-system function behind it.",
  "Do not infer individual intent from a single state, phrase, or tool result.",
];

const CURRENT_LIMITS = [
  {
    area: "Strong now",
    status: "Public architecture, source separation, Gradient-first framing, model bridges, and crawler-facing status language.",
    color: SPECTRUM.azure,
  },
  {
    area: "In progress",
    status: "Tool surfaces, Engine explanation, reviewer architecture, source traces, and applied research questions.",
    color: SPECTRUM.indigo,
  },
  {
    area: "Needed next",
    status: "Independent review, psychometric testing, formal protocols, cross-cultural replication, and publication of clearer study plans.",
    color: SPECTRUM.slate,
  },
];

export const metadata = {
  title: "Methodology | TEG-Blue",
  description: "How TEG-Blue separates source science, established models, original synthesis, applied tools, evidence, and open research questions.",
  keywords: [
    "TEG-Blue methodology",
    "research grounding",
    "source traces",
    "original synthesis",
    "Nervous System Gradient",
    "Gradient methodology",
    "research status",
    "psychometric testing",
    "inter-rater reliability",
    "replication",
    "validity testing",
    "methodological transparency",
  ],
  alternates: {
    canonical: "https://teg-blue.org/methodology",
  },
  openGraph: {
    title: "Methodology - TEG-Blue",
    description: "How source science becomes the Gradient, the Engine, tools, and testable research questions.",
    url: "https://teg-blue.org/methodology",
    siteName: "TEG-Blue",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Methodology - TEG-Blue",
    description: "Source separation, synthesis rules, claim status, testing plan, and correction loop.",
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
            subtitle="How evidence becomes the Gradient"
            description="The method is source separation: keep established science, established models, TEG-Blue synthesis, applied tools, evidence, and open claims in different layers."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <ReviewStatusPanel
          title="The method protects the distinction between grounding and validation."
          description="Source science can ground the ingredients. It does not validate the entire TEG-Blue synthesis by itself. The TEG-Blue architecture, Gradient language, diagrams, and tools are original synthesis work that should be tested, corrected, and reviewed."
        />

        <section id="method-rule" style={{ marginBottom: 42 }}>
          <div style={labelStyle(SPECTRUM.azure)}>Method rule</div>
          <h2 style={sectionHeadingStyle}>Sources ground ingredients. Method controls placement.</h2>
          <p style={leadStyle}>
            TEG-Blue does not treat a citation as proof of the whole framework. Each source is used
            for a specific job: a mechanism, a condition, a pattern, a capacity shift, a repair
            process, or a limitation. The synthesis is the placement of those jobs inside one visual
            map.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
              gap: 12,
              marginTop: 18,
            }}
          >
            <RuleCard title="Do credit" body="Name what each source, model, or tool contributes." color={SPECTRUM.azure} />
            <RuleCard title="Do separate" body="Keep evidence, interpretation, synthesis, and tool logic visibly distinct." color={SPECTRUM.cobalt} />
            <RuleCard title="Do test" body="Turn tool surfaces and Gradient claims into reliability and validity questions." color={SPECTRUM.indigo} />
          </div>
        </section>

        <section id="claim-layers" style={{ marginBottom: 46 }}>
          <div style={labelStyle(SPECTRUM.indigo)}>Claim layers</div>
          <h2 style={sectionHeadingStyle}>Six layers that should not collapse into one another</h2>
          <p style={bodyStyle}>
            This is the most important methodological guardrail. When a page, tool, or citation is
            reviewed, the first question is which layer it belongs to.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 12, marginTop: 18 }}>
            {CLAIM_LAYERS.map((layer) => (
              <LayerCard key={layer.title} layer={layer} />
            ))}
          </div>
        </section>

        <section id="translation-path" style={{ marginBottom: 46 }}>
          <div style={labelStyle(SPECTRUM.cobalt)}>Translation path</div>
          <h2 style={sectionHeadingStyle}>How a source becomes part of the Gradient</h2>
          <p style={bodyStyle}>
            The path is sequential. It moves from source contribution to function, then to Gradient
            placement, then to an applied or testable surface.
          </p>
          <div style={{ marginTop: 18, border: `1px solid ${BORDER.default}`, borderRadius: RADIUS.lg, overflow: "hidden" }}>
            {TRANSLATION_STEPS.map((step, index) => (
              <StepRow key={step.title} step={step} number={index + 1} isLast={index === TRANSLATION_STEPS.length - 1} />
            ))}
          </div>
        </section>

        <section id="status-labels" style={{ marginBottom: 46 }}>
          <div style={labelStyle(SPECTRUM.azure)}>Status labels</div>
          <h2 style={sectionHeadingStyle}>Every claim needs a status</h2>
          <p style={bodyStyle}>
            The public site should make it difficult for a reader, reviewer, or AI crawler to confuse
            a source-backed ingredient with an original TEG-Blue claim.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: 12, marginTop: 18 }}>
            {STATUS_LABELS.map((item) => (
              <StatusLabelCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="testing-plan" style={{ marginBottom: 46 }}>
          <div style={labelStyle(SPECTRUM.indigo)}>Testing plan</div>
          <h2 style={sectionHeadingStyle}>What the method makes testable</h2>
          <p style={bodyStyle}>
            A visual synthesis becomes scientifically useful when its claims can be inspected. The
            current method treats each tool and dimension as a surface for future testing.
          </p>
          <div style={{ marginTop: 18, border: `1px solid ${BORDER.default}`, borderRadius: RADIUS.lg, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: BG.surface }}>
                  <th style={tableHeaderStyle}>Area</th>
                  <th style={tableHeaderStyle}>Question</th>
                  <th style={tableHeaderStyle}>Methods</th>
                </tr>
              </thead>
              <tbody>
                {TESTING_PLAN.map((row, index) => (
                  <TestingRow key={row.area} row={row} isLast={index === TESTING_PLAN.length - 1} />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="correction-loop" style={{ marginBottom: 46 }}>
          <div style={labelStyle(SPECTRUM.cobalt)}>Correction loop</div>
          <h2 style={sectionHeadingStyle}>Review is part of the method</h2>
          <p style={bodyStyle}>
            TEG-Blue should become more accurate when researchers disagree with it. Corrections can
            target source accuracy, status language, placement, tool design, or test design.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 12, marginTop: 18 }}>
            <CorrectionCard title="Source correction" body="A cited model or author is represented inaccurately." />
            <CorrectionCard title="Placement correction" body="A source belongs to a different mechanism, state, or dimension." />
            <CorrectionCard title="Status correction" body="A claim is phrased too strongly or too weakly for its evidence." />
            <CorrectionCard title="Testing correction" body="A proposed measure, dataset, or validation route needs a better design." />
          </div>
        </section>

        <section id="ethical-boundaries" style={{ marginBottom: 46 }}>
          <div style={labelStyle(SPECTRUM.indigo)}>Boundaries</div>
          <h2 style={sectionHeadingStyle}>What the method is not allowed to do</h2>
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

        <section id="current-limits" style={{ marginBottom: 42 }}>
          <div style={labelStyle(SPECTRUM.slate)}>Current limits</div>
          <h2 style={sectionHeadingStyle}>Where the methodology stands now</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))", gap: 12, marginTop: 18 }}>
            {CURRENT_LIMITS.map((item) => (
              <CurrentLimitCard key={item.area} item={item} />
            ))}
          </div>
          <p style={{ ...bodyStyle, marginTop: 18 }}>
            The next methodological milestone is not more certainty. It is better review: clearer
            protocols, better source traces, independent critique, and studies that can prove parts
            of the map wrong if the map is wrong.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <AuthorBlock />
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
          <Link href="/publications" style={linkStyle}>
            Publications
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

function RuleCard({ title, body, color }) {
  return (
    <div
      style={{
        padding: 16,
        background: gradientCardBg(color),
        border: `1px solid ${hexToRgba(color, 0.18)}`,
        borderRadius: RADIUS.md,
        borderTop: `2px solid ${color}`,
      }}
    >
      <h3 style={{ fontSize: 14, fontWeight: 650, color: TEXT.primary, margin: "0 0 7px" }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: 0 }}>
        {body}
      </p>
    </div>
  );
}

function LayerCard({ layer }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(layer.color, 0.18)}`,
        borderLeft: `3px solid ${layer.color}`,
      }}
    >
      <div style={labelStyle(layer.color)}>{layer.label}</div>
      <h3 style={{ fontSize: 15, fontWeight: 650, color: TEXT.primary, margin: "0 0 4px" }}>
        {layer.title}
      </h3>
      <p style={{ fontSize: 12, color: layer.color, fontFamily: FONT.mono, margin: "0 0 10px" }}>
        {layer.status}
      </p>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: "0 0 10px" }}>
        {layer.body}
      </p>
      <p style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.55, margin: 0 }}>
        <strong style={{ color: TEXT.secondary }}>Method:</strong> {layer.method}
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
        padding: "16px 18px",
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

function StatusLabelCard({ item }) {
  return (
    <div
      style={{
        padding: 16,
        background: gradientCardBg(item.color, 0.06),
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(item.color, 0.16)}`,
      }}
    >
      <div style={labelStyle(item.color)}>{item.title}</div>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: "0 0 10px" }}>
        {item.body}
      </p>
      <p style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.55, margin: 0 }}>
        <strong style={{ color: TEXT.secondary }}>Safe language:</strong> {item.safeLanguage}
      </p>
    </div>
  );
}

function TestingRow({ row, isLast }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}`, borderBottom: isLast ? "none" : undefined }}>
      <td style={tableCellStyle}>
        <strong style={{ color: TEXT.primary }}>{row.area}</strong>
      </td>
      <td style={tableCellStyle}>{row.test}</td>
      <td style={tableCellStyle}>{row.methods}</td>
    </tr>
  );
}

function CorrectionCard({ title, body }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <h3 style={{ fontSize: 14, fontWeight: 650, color: TEXT.primary, margin: "0 0 7px" }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: 0 }}>
        {body}
      </p>
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

function CurrentLimitCard({ item }) {
  return (
    <div
      style={{
        padding: 16,
        background: gradientCardBg(item.color, 0.06),
        border: `1px solid ${hexToRgba(item.color, 0.16)}`,
        borderRadius: RADIUS.md,
      }}
    >
      <div style={labelStyle(item.color)}>{item.area}</div>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: 0 }}>
        {item.status}
      </p>
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

const tableHeaderStyle = {
  padding: "12px 14px",
  fontSize: 11,
  fontWeight: 700,
  color: TEXT.muted,
  textAlign: "left",
  textTransform: "uppercase",
  letterSpacing: 0,
  fontFamily: FONT.mono,
};

const tableCellStyle = {
  padding: "13px 14px",
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.6,
  verticalAlign: "top",
};

const linkStyle = {
  fontSize: 13,
  fontFamily: FONT.mono,
  color: SPECTRUM.azure,
  textDecoration: "none",
};
