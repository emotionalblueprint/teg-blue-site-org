import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What belongs on Publications?",
    answer: "Publications holds citable releases, public records, DOI pointers, recommended citation language, reuse notes, and publication-status information for TEG-Blue.",
  },
  {
    question: "Where should citation guidance live?",
    answer: "For now, citation guidance lives inside Publications in plain language: cite the page or record you used, attribute the creator, and do not imply more review or authority than the record carries.",
  },
  {
    question: "Who should be attributed?",
    answer: "TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient were created by Anna Paretas-Artacho.",
  },
];

const RECORDS = [
  {
    label: "Zenodo community",
    title: "TEG-Blue public records",
    body: "The Zenodo community is the public place for TEG-Blue release records and citable materials when they are published there.",
    href: "https://zenodo.org/communities/teg-blue",
    linkText: "Open Zenodo community",
    color: SPECTRUM.azure,
  },
  {
    label: "Framework record",
    title: "TEG-Blue publication record",
    body: "This record is used by current site metadata as a public TEG-Blue record pointer. Cite the record directly only when that is the source you used.",
    href: "https://zenodo.org/records/19472342",
    linkText: "Open Zenodo record",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Creator identifier",
    title: "Anna Paretas-Artacho ORCID",
    body: "Use ORCID to identify the creator where author identity matters for citation, public records, or research correspondence.",
    href: "https://orcid.org/0009-0005-2394-7162",
    linkText: "Open ORCID",
    color: SPECTRUM.indigo,
  },
];

const STATUS_ITEMS = [
  {
    title: "Records are not decorative authority",
    body: "A public record should point to a real release, DOI, archive, or publication status. It should not be used to imply more review than the record carries.",
  },
  {
    title: "Cite the item you actually used",
    body: "If you used a Zenodo record, cite that record. If you used the public framework site, cite TEG-Blue: The Emotional Gradient Blueprint.",
  },
  {
    title: "Publication status stays visible",
    body: "A record can make something citeable without turning it into institutional approval, clinical authority, or review of the whole framework.",
  },
  {
    title: "Engine source and public copy stay distinct",
    body: "Public pages may be translated from Engine source structure, but they are not raw Engine exports or permission to use the Engine as a diagnostic or inference system.",
  },
];

const CITATION_GUIDANCE = [
  {
    label: "Use",
    title: "Cite the source you used",
    body: "Use the website citation for the public framework. Use a DOI, archive, or publication record only when that is the item you actually consulted.",
    color: SPECTRUM.azure,
  },
  {
    label: "Credit",
    title: "Keep creator attribution visible",
    body: "TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient were created by Anna Paretas-Artacho.",
    color: SPECTRUM.blue,
  },
  {
    label: "Describe",
    title: "Use modest public language",
    body: "Describe TEG-Blue as an educational, reflective, research-grounded visual framework, not as therapy, diagnosis, treatment, or clinical assessment.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Permission",
    title: "Check reuse boundaries",
    body: "Commercial, institutional, product, model, dataset, sublicensed, translated, or adapted-tool use requires explicit written permission or a separate license.",
    color: SPECTRUM.indigo,
  },
];

const PUBLIC_DESCRIPTION_NOTES = [
  {
    title: "Short description",
    body: "TEG-Blue is The Emotional Gradient Blueprint: a layered visual framework for reading emotional, nervous-system, relational, and social patterns.",
  },
  {
    title: "Central public map",
    body: "The Nervous System Gradient is the central public map inside the framework, not the whole identity.",
  },
  {
    title: "Research posture",
    body: "Research areas support specific parts of the map. Each field remains itself, and TEG-Blue places the parts in relation.",
  },
  {
    title: "Engine boundary",
    body: "The public framework, Deep Engine source trace, Visible Engine tool compression, practical tools, and licensed builds should not be collapsed into one another.",
  },
  {
    title: "Use boundary",
    body: "Do not describe TEG-Blue as able to diagnose people, prove motive, identify someone's true internal state, or replace professional care.",
  },
];

const REUSE_LINES = [
  "Short quotations, commentary, academic citation, press reference, and non-commercial educational reference may cite public pages with attribution.",
  "Commercial use, product integration, institutional implementation, proprietary dataset or model use, adapted tools, and sublicensing require explicit permission or a separate license.",
  "Third-party sources, research, fonts, dependencies, and externally owned instruments remain under their own licenses and rights.",
];

export const metadata = {
  title: "Publications",
  description: "Public records, citable releases, DOI pointers, citation guidance, reuse notes, and publication-status information for TEG-Blue.",
  keywords: [
    "TEG-Blue publications",
    "The Emotional Gradient Blueprint",
    "Zenodo",
    "ORCID",
    "Anna Paretas-Artacho",
    "public records",
    "citation",
    "citation guidance",
    "reuse guidance",
    "TEG-Blue Engine",
    "Deep Engine",
    "Visible Engine",
  ],
  alternates: {
    canonical: "https://teg-blue.org/publications",
  },
  openGraph: {
    title: "Publications - TEG-Blue",
    description: "Public records, citable release pointers, and citation guidance for TEG-Blue.",
    url: "https://teg-blue.org/publications",
    siteName: "TEG-Blue",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Publications - TEG-Blue",
    description: "Public records, citable release pointers, and citation guidance for TEG-Blue.",
  },
};

export default function PublicationsPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/publications" />
      <PageLayout
        header={
          <ResearcherHero
            badge="PUBLICATIONS"
            title="Publications"
            subtitle="Public records, citation guidance, and reuse notes"
            description="Citable records, publication-status notes, official public pointers, and citation guidance for TEG-Blue materials."
          />
        }
      >
        <OverviewSection />
        <RecordsSection />
        <StatusSection />
        <CitationGuidanceSection />
        <PublicDescriptionSection />
        <CitationSection />
        <ReuseSection />
        <WhereNextSection />
      </PageLayout>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Publications", url: "/publications" },
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
              name: "Publications | TEG-Blue",
              url: "https://teg-blue.org/publications",
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
      <div style={labelStyle(SPECTRUM.azure)}>Publication posture</div>
      <h2 style={sectionHeadingStyle}>Publications make the work easier to cite and verify.</h2>
      <p style={leadStyle}>
        This page points to public TEG-Blue records and release locations. A publication record says where a
        citable item lives, how to attribute it, and what its status is. It does not imply more review,
        approval, or authority than the record itself carries.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 790 }}>
        The public site is a filtered public explanation of the framework. Engine-derived language should be
        cited as public TEG-Blue material only when it appears on public pages or public records.
      </p>
    </section>
  );
}

function RecordsSection() {
  return (
    <section id="records" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>Current public records</div>
      <h2 style={sectionHeadingStyle}>Use these links for official public pointers.</h2>
      <div style={gridStyle}>
        {RECORDS.map((record) => (
          <RecordCard key={record.title} record={record} />
        ))}
      </div>
    </section>
  );
}

function StatusSection() {
  return (
    <section id="status" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Status discipline</div>
      <h2 style={sectionHeadingStyle}>Publication status should stay visible.</h2>
      <div style={gridStyle}>
        {STATUS_ITEMS.map((item) => (
          <PlainCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function CitationGuidanceSection() {
  return (
    <section id="citation-guidance" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>Citation guidance</div>
      <h2 style={sectionHeadingStyle}>Cite what you used, and describe it plainly.</h2>
      <p style={leadStyle}>
        Public citation guidance should be simple enough for readers, journalists, researchers, educators, and
        answer systems to follow without learning internal TEG-Blue review language.
      </p>
      <div style={gridStyle}>
        {CITATION_GUIDANCE.map((item) => (
          <InfoCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function PublicDescriptionSection() {
  return (
    <section id="public-description" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Public description notes</div>
      <h2 style={sectionHeadingStyle}>Use language that preserves the scope of the work.</h2>
      <div style={gridStyle}>
        {PUBLIC_DESCRIPTION_NOTES.map((item) => (
          <PlainCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function CitationSection() {
  return (
    <section id="citation" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Framework citation</div>
      <h2 style={sectionHeadingStyle}>For the public framework, cite the Blueprint.</h2>
      <div style={calloutStyle(SPECTRUM.azure)}>
        <p style={citationStyle}>Paretas-Artacho, A. (2026). TEG-Blue: The Emotional Gradient Blueprint. https://teg-blue.org/</p>
        <p style={{ ...bodyStyle, marginTop: 12 }}>
          If you cite a specific Zenodo record, cite that record directly. If you summarize the public framework,
          preserve creator attribution and the non-diagnostic, educational status of the work.
        </p>
      </div>
    </section>
  );
}

function ReuseSection() {
  return (
    <section id="reuse" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.slate)}>Reuse and permission</div>
      <h2 style={sectionHeadingStyle}>Public reference is welcome; adapted or institutional use needs boundaries.</h2>
      <div style={plainListStyle}>
        {REUSE_LINES.map((line) => (
          <p key={line} style={bodyStyle}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}

function WhereNextSection() {
  return (
    <section id="where-next" style={{ marginBottom: 32 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Where next</div>
      <h2 style={sectionHeadingStyle}>Use records together with the right context.</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <NavRow label="Research context for the framework" href="/scientific-foundations" linkText="Scientific Grounding" />
            <NavRow label="Creator and ecosystem context" href="/about" linkText="About" />
            <NavRow label="Terms for the Engine boundary" href="/glossary" linkText="Glossary" />
            <NavRow label="Collaboration and review conversations" href="/collaborate" linkText="Collaborate" />
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

function RecordCard({ record }) {
  return (
    <div style={infoCardStyle(record.color)}>
      <div style={labelStyle(record.color)}>{record.label}</div>
      <h3 style={cardTitleStyle}>{record.title}</h3>
      <p style={{ ...cardBodyStyle, marginBottom: 12 }}>{record.body}</p>
      <a href={record.href} target="_blank" rel="noopener noreferrer" style={{ color: record.color, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>
        {record.linkText}
      </a>
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
        <Link href={href} style={{ color: SPECTRUM.azure, textDecoration: "none", fontWeight: 500 }}>
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
    color,
    marginBottom: 4,
  };
}

function infoCardStyle(color) {
  return {
    padding: 16,
    minHeight: 196,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.16)}`,
    borderTop: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

function calloutStyle(color) {
  return {
    padding: 18,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.18)}`,
    borderLeft: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
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

const tableWrapStyle = {
  background: BG.card,
  borderRadius: RADIUS.md,
  border: `1px solid ${BORDER.default}`,
  overflowX: "auto",
  marginTop: 16,
};

const tableCellStyle = {
  padding: "13px 16px",
  fontSize: 13,
  lineHeight: 1.5,
};

const plainListStyle = {
  display: "grid",
  gap: 10,
  padding: 16,
  background: BG.card,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.md,
  marginTop: 16,
};

const citationStyle = {
  margin: 0,
  fontFamily: FONT.mono,
  fontSize: 13,
  lineHeight: 1.7,
  color: TEXT.primary,
};
