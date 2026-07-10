import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, contrastColor, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What is this glossary for?",
    answer: "This glossary gathers a few shared words for finding your way around TEG-Blue without turning them into labels for people.",
  },
  {
    question: "How should it be read?",
    answer: "As a simple orientation aid for understanding the map and talking about patterns with more care. It is not a diagnostic tool or a way to decide who someone is.",
  },
];

const TERMS = [
  {
    term: "TEG-Blue",
    definition: "The short name of the project.",
    note: "When we talk about TEG-Blue, we mean the framework, the map, and the tools that help people see emotional patterns more clearly.",
    color: SPECTRUM.azure,
  },
  {
    term: "The Emotional Gradient Blueprint",
    definition: "The full name of the framework.",
    note: "It is a visual way to explore how emotion, body state, relationship, and repair can change.",
    color: SPECTRUM.azure,
  },
  {
    term: "The Nervous System Gradient",
    definition: "The central map inside TEG-Blue.",
    note: "It helps show how a person or relationship may move between safety, protection, control, shutdown, regulation, and repair.",
    color: SPECTRUM.blue,
  },
  {
    term: "Emotional patterns",
    definition: "Repeated ways we feel, react, protect ourselves, or try to repair.",
    note: "A pattern is not a fixed identity. It is something that can be noticed carefully and can change when conditions change.",
    color: SPECTRUM.cobalt,
  },
  {
    term: "Nervous-system pattern",
    definition: "A way the body organizes under pressure or safety.",
    note: "It can influence what we feel, perceive, do, and can repair. It does not describe a person's worth.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Capacity",
    definition: "The available energy and flexibility to feel, think, listen, respond, or repair.",
    note: "When capacity drops, a response may become narrower or more protective. That can help explain the pattern without excusing harm.",
    color: SPECTRUM.azure,
  },
  {
    term: "Pattern reading",
    definition: "A way to notice what repeats, what impact it has, and what response may care for the situation better.",
    note: "Pattern reading does not guess motive or diagnose a person's inner state.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Regulation",
    definition: "Processes that help the body return toward more capacity, flexibility, and presence.",
    note: "This may include body resources, relationship, time, boundaries, rest, or support.",
    color: SPECTRUM.azure,
  },
  {
    term: "Repair",
    definition: "The work of returning to shared reality after rupture, mistake, or harm.",
    note: "It may include responsibility, care, boundaries, and a real change in the pattern. It is not apology alone.",
    color: SPECTRUM.blue,
  },
];

export const metadata = {
  title: "Glossary",
  description: "Simple definitions for TEG-Blue, The Emotional Gradient Blueprint, The Nervous System Gradient, state, repair, and related terms.",
  keywords: [
    "TEG-Blue glossary",
    "The Emotional Gradient Blueprint",
    "Nervous System Gradient",
    "emotional patterns",
    "nervous system patterns",
    "capacity",
    "pattern reading",
    "repair",
    "regulation",
  ],
  alternates: {
    canonical: "https://teg-blue.org/glossary",
  },
  openGraph: {
    title: "Glossary - TEG-Blue",
    description: "Simple definitions for the core TEG-Blue map language.",
    url: "https://teg-blue.org/glossary",
    siteName: "TEG-Blue",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glossary - TEG-Blue",
    description: "Simple definitions for the core TEG-Blue map language.",
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
            subtitle="Plain-language definitions"
            description="Understand the essential terms used in TEG-Blue and The Nervous System Gradient, with clear limits on what those terms can tell us about a person."
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
      <h2 style={sectionHeadingStyle}>The words you will see across TEG-Blue.</h2>
      <p style={leadStyle}>
        This glossary gathers the words that help most at the beginning. Use them to understand the map, not to
        label people. Context, impact, boundaries, and repair still matter.
      </p>
    </section>
  );
}

function TermsSection() {
  return (
    <section id="terms" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>Basic words</div>
      <h2 style={sectionHeadingStyle}>Clear definitions for reading the map.</h2>
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
      <h2 style={sectionHeadingStyle}>When you want more context, continue with these pages.</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <NavRow label="Ethical commitments and use limits" href="/ethics" linkText="Ethics" />
            <NavRow label="Framework overview" href="/foundations" linkText="TEG-Blue Overview" />
            <NavRow label="Research areas and source limits" href="/scientific-foundations" linkText="Scientific Grounding" />
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
