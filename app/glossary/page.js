import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, contrastColor, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What is the TEG-Blue Glossary for?",
    answer: "The glossary defines approved public terms for TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient.",
  },
  {
    question: "How should these terms be used?",
    answer: "Use terms to clarify observable patterns, impact, capacity, and response without diagnosing people or claiming certainty about inner state.",
  },
];

const TERMS = [
  {
    term: "TEG-Blue",
    definition: "The project name for The Emotional Gradient Blueprint.",
    note: "Use as the public name of the framework and ecosystem.",
    color: SPECTRUM.azure,
  },
  {
    term: "The Emotional Gradient Blueprint",
    definition: "A science-grounded visual educational framework for reading how emotional, nervous-system, relational, and repair patterns form and change.",
    note: "This is the foundational name and current .org doorway.",
    color: SPECTRUM.azure,
  },
  {
    term: "The Nervous System Gradient",
    definition: "The current central public map inside TEG-Blue: a visual map of how emotional, bodily, and relational patterns shift across safety, threat, control, shutdown, regulation, and repair.",
    note: "Keep the map central, but do not make it the whole site identity.",
    color: SPECTRUM.blue,
  },
  {
    term: "TEG-Blue Engine",
    definition: "The internal tool-building system that keeps source-tracing logic and practical tool-compression logic connected.",
    note: "The Engine is not a public diagnostic system, AI inference system, or raw public copy source.",
    color: SPECTRUM.blue,
  },
  {
    term: "Deep Engine",
    definition: "The source-tracing layer behind the public map: states, Formations, acute and chronic organization, element ownership, and research-theory trace.",
    note: "Use as internal/provenance language unless a public page is explicitly explaining the ecosystem boundary.",
    color: SPECTRUM.cobalt,
  },
  {
    term: "Visible Engine",
    definition: "The practical 4-mode compression used for tool-building and fast orientation.",
    note: "Its modes are Connection, Protection, Control, and Domination; the compression stays traceable back to the Deep Engine.",
    color: SPECTRUM.cobalt,
  },
  {
    term: "Emotional-pattern legibility",
    definition: "The ability to see and discuss emotional patterns as structured biological and relational information.",
    note: "This is the public-entry frame for .org.",
    color: SPECTRUM.cobalt,
  },
  {
    term: "Nervous-system pattern",
    definition: "A pattern of whole-organism organization that may shape perception, emotion, body activation, behaviour, relationship, and repair capacity.",
    note: "Use for pattern language, not diagnosis.",
    color: SPECTRUM.cobalt,
  },
  {
    term: "Formation",
    definition: "A Deep Engine column or state coordinate across the Gradient.",
    note: "A Formation is not a person type, diagnosis, or moral category.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Actual Conditions",
    definition: "The starting field the system is reading: what is happening, what has changed, and whether safety, threat, or capacity exceeded is in play.",
    note: "Keep actual conditions distinct from the nervous-system state that organizes around them.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Acute state",
    definition: "A fluid nervous-system configuration that can move when conditions update and enough capacity returns.",
    note: "Use for passing state movement, not fixed identity.",
    color: SPECTRUM.azure,
  },
  {
    term: "Chronic pattern",
    definition: "A held, repeated, or difficult-to-leave organization that keeps shaping perception, access, response, and repair over time.",
    note: "Use for pattern-over-time language, not a public typology or person verdict.",
    color: SPECTRUM.slate,
  },
  {
    term: "State-shaped perception",
    definition: "The idea that nervous-system states do not only change what a person feels; they can also change what feels true, especially when there is not yet practice listening to body signals and emotions in the moment.",
    note: "A feeling is real as experience, but it may not contain the full fact of the situation. The practice begins by noticing what is felt, what emotion is present, and what information is missing before treating the feeling as complete reality.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Regulation",
    definition: "The clearer public term for body-level and relational processes that help a system return toward enough capacity, flexibility, and repair.",
    note: "Use regulation in compact, first-screen, and general-page language.",
    color: SPECTRUM.azure,
  },
  {
    term: "Repair",
    definition: "The return of shared reality, responsibility, care, boundary where needed, and changed pattern after rupture or harm.",
    note: "Repair is not apology alone.",
    color: SPECTRUM.blue,
  },
  {
    term: "Mechanism and impact",
    definition: "The distinction between how a pattern is organized and what effect or harm it caused.",
    note: "Mechanism explains the pattern; it does not erase impact.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Calm and safety",
    definition: "A guardrail that calm presentation is not proof of safety, and visible distress is not proof of danger.",
    note: "Control can look composed while its impact appears elsewhere.",
    color: SPECTRUM.slate,
  },
];

export const metadata = {
  title: "Glossary",
  description: "Approved public terms for TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient.",
  keywords: [
    "TEG-Blue glossary",
    "The Emotional Gradient Blueprint",
    "Nervous System Gradient",
    "TEG-Blue Engine",
    "Deep Engine",
    "Visible Engine",
    "Formation",
    "Actual Conditions",
    "emotional-pattern legibility",
    "state-shaped perception",
    "repair",
    "regulation",
  ],
  alternates: {
    canonical: "https://teg-blue.org/glossary",
  },
  openGraph: {
    title: "Glossary - TEG-Blue",
    description: "Current public terms for TEG-Blue.",
    url: "https://teg-blue.org/glossary",
    siteName: "TEG-Blue",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glossary - TEG-Blue",
    description: "Current public terms for TEG-Blue.",
  },
};

export default function GlossaryPage() {
  const definedTermJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "TEG-Blue Glossary",
    url: "https://teg-blue.org/glossary",
    inLanguage: "en",
    hasDefinedTerm: TERMS.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition,
      inDefinedTermSet: "https://teg-blue.org/glossary",
    })),
  };

  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/glossary" />
      <PageLayout
        header={
          <ResearcherHero
            badge="GLOSSARY"
            title="Glossary"
            subtitle="Approved public terminology"
            description="Public terms for TEG-Blue, the Blueprint, the central map, the Engine boundary, and the ethical commitments around pattern reading."
          />
        }
      >
        <OverviewSection />
        <TermsSection />
        <WhereNextSection />
      </PageLayout>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Glossary", url: "/glossary" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Glossary | TEG-Blue",
              url: "https://teg-blue.org/glossary",
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
      <div style={labelStyle(SPECTRUM.azure)}>Terminology</div>
      <h2 style={sectionHeadingStyle}>A shared vocabulary for the Blueprint, its central map, and the Engine boundary.</h2>
      <p style={leadStyle}>
        These terms name the public language of TEG-Blue: the framework, the central map, and the patterns the
        map makes easier to discuss. They are meant for clarity, not diagnosis, motive claims, or fixed moral
        categories.
      </p>
    </section>
  );
}

function TermsSection() {
  return (
    <section id="terms" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>Approved public terms</div>
      <h2 style={sectionHeadingStyle}>Current terminology for general pages.</h2>
      <div style={gridStyle}>
        {TERMS.map((item) => (
          <TermCard key={item.term} item={item} />
        ))}
      </div>
    </section>
  );
}

function WhereNextSection() {
  return (
    <section id="where-next" style={{ marginBottom: 32 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Where next</div>
      <h2 style={sectionHeadingStyle}>Use the glossary with the ethics and pattern-reading pages.</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <NavRow label="How TEG-Blue reads patterns" href="/methodology" linkText="Pattern reading" />
            <NavRow label="Ethical commitments and use boundaries" href="/ethics" linkText="Ethics" />
            <NavRow label="Framework overview" href="/foundations" linkText="TEG-Blue Overview" />
            <NavRow label="Citation guidance and public records" href="/publications" linkText="Publications" />
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TermCard({ item }) {
  return (
    <div style={termCardStyle(item.color)}>
      <div style={labelStyle(item.color)}>{item.term}</div>
      <p style={{ ...cardBodyStyle, color: TEXT.primary, fontWeight: 600, marginBottom: 8 }}>{item.definition}</p>
      <p style={cardBodyStyle}>{item.note}</p>
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

function termCardStyle(color) {
  return {
    padding: 16,
    minHeight: 176,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.16)}`,
    borderLeft: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
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

const cardBodyStyle = {
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.65,
  margin: 0,
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
