import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, contrastColor, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What does TEG-Blue mean by ethics?",
    answer: "TEG-Blue ethics are the commitments that govern how the framework is built, shared, cited, adapted, and used with people: dignity, agency, truthful claims, source honesty, attribution, non-extraction, and repair.",
  },
  {
    question: "Is TEG-Blue clinical or diagnostic?",
    answer: "No. TEG-Blue is educational, reflective, and research-grounded. It should not be used as diagnosis, treatment, crisis support, or authority over a person's true internal state.",
  },
  {
    question: "How can TEG-Blue be reused?",
    answer: "Original public written framework content may be cited, summarized, translated, adapted, and reused under CC BY 4.0 with visible attribution. Marks, tools, code, Engine logic, product surfaces, and third-party materials are excluded unless otherwise noted.",
  },
  {
    question: "How does TEG-Blue handle harm?",
    answer: "Mechanism explains the pattern; it does not erase impact. Harm, responsibility, boundary, protection, and repair remain visible.",
  },
];

const ETHICAL_COMMITMENTS = [
  {
    label: "Dignity",
    title: "People are never the map",
    body: "A pattern read should never become a verdict on a person, a fixed identity, or a way to reduce someone's whole life to one state.",
    color: SPECTRUM.azure,
  },
  {
    label: "Agency",
    title: "The work should increase choice",
    body: "TEG-Blue should make patterns more discussable without pressuring a person to accept a label, story, action, or interpretation.",
    color: SPECTRUM.blue,
  },
  {
    label: "Reality",
    title: "Shared reality matters",
    body: "The work keeps what happened, what was felt, what was assumed, what evidence is available, and what response is needed in separate view.",
    color: SPECTRUM.indigo,
  },
  {
    label: "Repair",
    title: "Repair must be real",
    body: "Explanation is not repair. Repair needs responsibility, changed pattern, care, boundary where needed, and enough shared reality to work with what happened.",
    color: SPECTRUM.cobalt,
  },
];

const CLAIM_ETHICS = [
  {
    title: "Name what is known",
    body: "Separate observation, interpretation, source support, TEG-Blue integration, and open questions. Do not make an inference sound like a fact.",
  },
  {
    title: "Do not borrow authority",
    body: "Research can support specific parts of the map. It should not be used to imply whole-framework validation or clinical authority.",
  },
  {
    title: "Keep the person larger than the pattern",
    body: "Visible behaviour can support a pattern read, but it cannot prove motive, diagnosis, identity, or someone's true internal state from outside.",
  },
  {
    title: "Name limits before use",
    body: "Tools and pages are for reflection, education, comparison, and clearer conversation. They are not crisis support or professional judgment.",
  },
];

const USE_ETHICS = [
  {
    title: "No extraction",
    body: "Do not use another person's fear, confusion, vulnerability, hope, dependence, story, or emotional state as material to control choices, gain benefit, or make the framework look stronger.",
  },
  {
    title: "No forced interpretation",
    body: "A TEG-Blue reading should not be used to override someone's account of their own experience, context, culture, body, risk, or history.",
  },
  {
    title: "Power changes the ethics",
    body: "A map used by a teacher, practitioner, employer, institution, parent, partner, or platform carries more responsibility than a private reflection tool.",
  },
  {
    title: "Calm is not proof of safety",
    body: "Composure does not prove regulation or care. Distress does not prove danger. Impact and power still have to be read.",
  },
];

const STEWARDSHIP = [
  {
    title: "Attribution stays visible",
    body: "TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient were created by Anna Paretas-Artacho. Public summaries, citations, adaptations, and reuse should preserve that attribution.",
  },
  {
    title: "Public reference stays possible",
    body: "The framework should be easy to cite, discuss, summarize, translate, and teach from when attribution and claim boundaries are preserved.",
  },
  {
    title: "Permission is part of ethics",
    body: "Applied builds, institutional implementations, product integrations, custom tools, software integrations, and reuse of Engine or tool logic require explicit written permission or a separate agreement.",
  },
  {
    title: "Other work remains itself",
    body: "Third-party research, sources, fonts, dependencies, and externally owned instruments keep their own rights, licenses, authorship, and institutional boundaries.",
  },
];

const RESPONSIBILITY = [
  "awareness",
  "repetition",
  "power",
  "available choice",
  "refusal to repair",
  "impact on others",
];

export const metadata = {
  title: "Ethics",
  description: "TEG-Blue ethics: dignity, agency, truthful claims, source honesty, attribution, permission, non-extraction, impact, and repair.",
  keywords: [
    "TEG-Blue ethics",
    "The Emotional Gradient Blueprint ethics",
    "framework ethics",
    "source honesty",
    "creator attribution",
    "non-extraction",
    "permission boundaries",
    "responsible pattern reading",
    "mechanism and impact",
    "repair capacity",
    "non-diagnostic framework",
  ],
  alternates: {
    canonical: "https://teg-blue.org/ethics",
  },
  openGraph: {
    title: "Ethics - TEG-Blue",
    description: "The commitments behind how TEG-Blue is built, shared, cited, adapted, and used.",
    url: "https://teg-blue.org/ethics",
    siteName: "TEG-Blue",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethics - TEG-Blue",
    description: "Dignity, agency, truthful claims, attribution, permission, non-extraction, impact, and repair.",
  },
};

export default function EthicsPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/ethics" />
      <PageLayout
        header={
          <ResearcherHero
            badge="ETHICS"
            title="Ethics"
            subtitle="How the work should be held"
            description="The commitments behind how TEG-Blue is built, shared, cited, adapted, and used with people."
          />
        }
      >
        <CommitmentsSection />
        <ClaimEthicsSection />
        <UseEthicsSection />
        <StewardshipSection />
        <ImpactRepairSection />
        <WhereNextSection />
      </PageLayout>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Ethics", url: "/ethics" },
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
              name: "Ethics | TEG-Blue",
              url: "https://teg-blue.org/ethics",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

function CommitmentsSection() {
  return (
    <section id="commitments" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Core commitments</div>
      <h2 style={sectionHeadingStyle}>The map should make people more legible, not smaller.</h2>
      <p style={leadStyle}>
        TEG-Blue exists to make emotional, bodily, and relational patterns easier to see and work with. Its
        ethics begin with the way that visibility is used: to support clarity, agency, responsibility, and
        repair rather than reduction, control, or extraction.
      </p>
      <div style={gridStyle}>
        {ETHICAL_COMMITMENTS.map((item) => (
          <InfoCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function ClaimEthicsSection() {
  return (
    <section id="claims" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>Claim ethics</div>
      <h2 style={sectionHeadingStyle}>Truthfulness matters at the level of the sentence.</h2>
      <p style={leadStyle}>
        The ethics of TEG-Blue are not only about good intentions. They show up in small claims: what a page says
        is observed, inferred, sourced, integrated, unresolved, or outside the framework's authority.
      </p>
      <div style={gridStyle}>
        {CLAIM_ETHICS.map((item) => (
          <PlainCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function UseEthicsSection() {
  return (
    <section id="use" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Use with people</div>
      <h2 style={sectionHeadingStyle}>A framework about emotion must be careful with power.</h2>
      <p style={leadStyle}>
        TEG-Blue deals with vulnerable material: body states, relational harm, perception, control, shutdown,
        repair, and meaning. That makes consent, context, agency, and power part of the work itself.
      </p>
      <div style={gridStyle}>
        {USE_ETHICS.map((item) => (
          <PlainCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function StewardshipSection() {
  return (
    <section id="stewardship" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Stewardship</div>
      <h2 style={sectionHeadingStyle}>Attribution, permission, and boundaries are ethical commitments.</h2>
      <p style={leadStyle}>
        The framework is meant to be citeable and discussable without becoming ownerless, extractive, or detached
        from its source. Reuse should preserve authorship, claim boundaries, and the difference between public
        reference and applied adaptation.
      </p>
      <div style={gridStyle}>
        {STEWARDSHIP.map((item) => (
          <PlainCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function ImpactRepairSection() {
  return (
    <section id="impact-repair" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.slate)}>Impact and repair</div>
      <h2 style={sectionHeadingStyle}>Mechanism explains the pattern; it does not erase impact.</h2>
      <p style={leadStyle}>
        This guardrail remains central because it protects the whole project from turning explanation into
        absolution. A pattern may have a protective origin and still cause harm.
      </p>
      <div style={calloutStyle(SPECTRUM.slate)}>
        <p style={{ ...bodyStyle, color: TEXT.primary, fontWeight: 600, marginBottom: 8 }}>
          Responsibility increases with pattern, power, choice, and impact.
        </p>
        <div style={pillWrapStyle}>
          {RESPONSIBILITY.map((item) => (
            <span key={item} style={pillStyle}>
              {item}
            </span>
          ))}
        </div>
        <p style={{ ...bodyStyle, marginTop: 14 }}>
          Repair requires more than explanation. It needs shared reality, responsibility, care, boundary where
          needed, and changed pattern.
        </p>
      </div>
    </section>
  );
}

function WhereNextSection() {
  return (
    <section id="where-next" style={{ marginBottom: 32 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Where next</div>
      <h2 style={sectionHeadingStyle}>Follow the part of the ethical question you need.</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <NavRow label="How TEG-Blue reads patterns" href="/methodology" linkText="Pattern reading" />
            <NavRow label="Source support and reuse posture" href="/publications" linkText="Publications" />
            <NavRow label="Project, creator, and site boundaries" href="/about" linkText="About" />
            <NavRow label="Framework overview" href="/foundations" linkText="TEG-Blue Overview" />
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

function PlainCard({ item }) {
  return (
    <div style={plainCardStyle}>
      <h3 style={cardTitleStyle}>{item.title}</h3>
      <p style={cardBodyStyle}>{item.body}</p>
    </div>
  );
}

function NavRow({ label, href, linkText }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{label}</td>
      <td style={tableCellStyle}>
        <Link href={href} style={{ color: contrastColor(SPECTRUM.azure), textDecoration: "none", fontWeight: 500 }}>
          {linkText}
        </Link>
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

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
  gap: 12,
  marginTop: 18,
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

const tableCellStyle = {
  padding: "13px 16px",
  fontSize: 13,
  lineHeight: 1.5,
};
