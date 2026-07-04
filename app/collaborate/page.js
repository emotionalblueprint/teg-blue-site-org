import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, contrastColor, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What kinds of collaboration are relevant?",
    answer: "Research review, source-trace critique, public-interest tools, educational adaptations, applied builds, and licensing conversations may be relevant when the claim boundaries are clear.",
  },
  {
    question: "Does this page imply signed partnerships?",
    answer: "No. This page invites conversations. It does not imply institutional approval, signed partnerships, clinical readiness, or formal deployment.",
  },
  {
    question: "Is TEG-Blue available for clinical use?",
    answer: "TEG-Blue is educational, reflective, and research-facing. Any professional, institutional, or applied use needs context-specific boundaries, review, permissions, and professional judgment.",
  },
];

const COLLABORATION_AREAS = [
  {
    label: "Research",
    title: "Review and source-trace critique",
    body: "Questions about claim status, source grounding, research design, terminology, or how specific fields support parts of the map.",
    color: SPECTRUM.azure,
  },
  {
    label: "Practice",
    title: "Educational and professional adaptation",
    body: "Conversation about using public TEG-Blue language for teaching, reflection, discussion, or professional orientation within clear limits.",
    color: SPECTRUM.blue,
  },
  {
    label: "Public interest",
    title: "Applied tools for specific audiences",
    body: "Possible tools for NGOs, universities, prevention projects, education, public institutions, or social-impact contexts.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Licensing",
    title: "Permission for adapted or institutional use",
    body: "Applied builds, institutional implementations, product integrations, custom tools, software integrations, and reuse of Engine or tool logic require explicit permission or a separate agreement.",
    color: SPECTRUM.indigo,
  },
];

const BOUNDARIES = [
  {
    title: "No implied partnership",
    body: "A conversation, prototype, or public mention should not be described as a signed partnership, approved deployment, or institutional endorsement unless that becomes documented.",
  },
  {
    title: "No clinical substitution",
    body: "TEG-Blue does not replace therapy, diagnosis, treatment, legal support, medical care, crisis support, supervision, or safeguarding responsibilities.",
  },
  {
    title: "Risk and audience matter",
    body: "Applied builds need a clear audience, use case, risk context, rights boundary, claim level, and review route.",
  },
  {
    title: "The Engine is separate",
    body: "The TEG-Blue Engine may support licensed or commissioned tools, but it remains separate from public pages and is not a public diagnostic system or AI inference system.",
  },
];

const CONTACT_ROWS = [
  { label: "Research and collaboration", href: "mailto:research@teg-blue.org", text: "research@teg-blue.org" },
  { label: "Framework context", href: "/foundations", text: "TEG-Blue Overview" },
  { label: "Ethical use boundaries", href: "/ethics", text: "Ethics" },
  { label: "Terminology and Engine distinction", href: "/glossary", text: "Glossary" },
  { label: "Public records and citation notes", href: "/publications", text: "Publications" },
];

export const metadata = {
  title: "Collaborate",
  description: "Research, review, public-interest tool, applied build, and licensing conversations for TEG-Blue under clear boundaries.",
  keywords: [
    "TEG-Blue collaborate",
    "research collaboration",
    "public-interest tools",
    "applied builds",
    "licensing",
    "The Emotional Gradient Blueprint",
    "TEG-Blue Engine",
  ],
  alternates: {
    canonical: "https://teg-blue.org/collaborate",
  },
  openGraph: {
    title: "Collaborate - TEG-Blue",
    description: "Research, review, applied build, and licensing conversations under clear boundaries.",
    url: "https://teg-blue.org/collaborate",
    siteName: "TEG-Blue",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collaborate - TEG-Blue",
    description: "Research, review, applied build, and licensing conversations for TEG-Blue.",
  },
};

export default function CollaboratePage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/collaborate" />
      <PageLayout
        header={
          <ResearcherHero
            badge="COLLABORATE"
            title="Collaborate"
            subtitle="Research, review, and applied tools"
            description="A modest entry point for research review, public-interest tools, applied builds, and licensing conversations around TEG-Blue."
          />
        }
      >
        <OverviewSection />
        <CollaborationAreasSection />
        <BoundariesSection />
        <ContactSection />
      </PageLayout>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Collaborate", url: "/collaborate" },
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
              name: "Collaborate | TEG-Blue",
              url: "https://teg-blue.org/collaborate",
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
      <div style={labelStyle(SPECTRUM.azure)}>Collaboration posture</div>
      <h2 style={sectionHeadingStyle}>TEG-Blue is open to review, adaptation conversations, and public-interest tool building.</h2>
      <p style={leadStyle}>
        The public framework is educational, reflective, and research-facing. Collaboration should preserve the
        distinction between the public framework, the TEG-Blue Engine, practical public tools, and applied or
        licensed builds.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 790 }}>
        Good collaboration starts with a clear question: what audience, risk context, claim boundary, rights
        boundary, review route, and Engine layer does this use require?
      </p>
    </section>
  );
}

function CollaborationAreasSection() {
  return (
    <section id="areas" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>Relevant conversations</div>
      <h2 style={sectionHeadingStyle}>Different collaboration types need different boundaries.</h2>
      <div style={gridStyle}>
        {COLLABORATION_AREAS.map((item) => (
          <InfoCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function BoundariesSection() {
  return (
    <section id="boundaries" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Boundaries</div>
      <h2 style={sectionHeadingStyle}>Do not overstate status, readiness, approval, or permission.</h2>
      <p style={leadStyle}>
        TEG-Blue can support interpretation, education, dialogue, and tool-building. It should not be presented
        as a diagnostic system or as a substitute for professional care, legal support, or crisis response.
      </p>
      <div style={gridStyle}>
        {BOUNDARIES.map((item) => (
          <PlainCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" style={{ marginBottom: 32 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Contact</div>
      <h2 style={sectionHeadingStyle}>Start with the route that fits the question.</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {CONTACT_ROWS.map((item) => (
              <ContactRow key={item.label} item={item} />
            ))}
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

function ContactRow({ item }) {
  const isEmail = item.href.startsWith("mailto:");
  const isExternal = item.href.startsWith("http");
  const LinkEl = isEmail || isExternal ? "a" : Link;
  const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{item.label}</td>
      <td style={tableCellStyle}>
        <LinkEl href={item.href} {...extraProps} style={{ color: contrastColor(SPECTRUM.azure), textDecoration: "none", fontWeight: 500 }}>
          {item.text}
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
    minHeight: 178,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.16)}`,
    borderLeft: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
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
  overflow: "hidden",
  marginTop: 16,
};

const tableCellStyle = {
  padding: "13px 16px",
  fontSize: 13,
  lineHeight: 1.5,
};
