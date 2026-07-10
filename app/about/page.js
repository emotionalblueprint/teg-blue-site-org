import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, contrastColor, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What is TEG-Blue?",
    answer: "TEG-Blue is The Emotional Gradient Blueprint: a visual framework for seeing how body state, emotion, relationship, protection, shutdown, and repair can change across safety and threat.",
  },
  {
    question: "Who created TEG-Blue?",
    answer: "TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient were created by Anna Paretas-Artacho.",
  },
  {
    question: "What is the difference between teg-blue.org and teg-blue.com?",
    answer: "teg-blue.org explains the framework and its research links. teg-blue.com carries practical tools for reading emotional and nervous-system patterns in everyday situations.",
  },
  {
    question: "Is TEG-Blue a clinical system?",
    answer: "No. TEG-Blue is educational and research-facing. It is not therapy, diagnosis, treatment, medical care, legal support, or crisis support.",
  },
];

const PURPOSE_CARDS = [
  {
    label: "Creator",
    title: "Who made the work",
    body: "TEG-Blue, The Emotional Gradient Blueprint, and The Nervous System Gradient were created by Anna Paretas-Artacho.",
    color: SPECTRUM.azure,
  },
  {
    label: "Routes",
    title: "Where each public page fits",
    body: "teg-blue.org explains the framework, source limits, ethics, glossary, and contact routes. teg-blue.com carries practical public tools.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Limits",
    title: "What the work does not claim",
    body: "TEG-Blue is not therapy, diagnosis, treatment, legal support, medical care, or crisis support.",
    color: SPECTRUM.indigo,
  },
];

const ECOSYSTEM_LAYERS = [
  {
    title: "Public site",
    body: "teg-blue.org explains The Emotional Gradient Blueprint, The Nervous System Gradient, source limits, ethics, glossary terms, and contact routes.",
    color: SPECTRUM.azure,
  },
  {
    title: "TEG-Blue Engine",
    body: "The Engine is the private tool-building system used to trace sources and shape structured tools for specific audiences.",
    color: SPECTRUM.blue,
  },
  {
    title: "Practical tools",
    body: "teg-blue.com carries public tools for reading emotional and nervous-system patterns in real situations.",
    color: SPECTRUM.cobalt,
  },
  {
    title: "Applied builds",
    body: "Licensed or commissioned builds may be made for a specific audience, institution, risk context, or public-interest need.",
    color: SPECTRUM.indigo,
  },
];

const STANCE_ITEMS = [
  {
    title: "Framework, not diagnosis",
    body: "TEG-Blue maps visible patterns. It does not determine motive, assign clinical categories, or identify a person's true internal state from the outside.",
  },
  {
    title: "Science with limits",
    body: "Research areas support specific parts of the map. Each field keeps its own methods and limits.",
  },
  {
    title: "Mechanism and impact stay separate",
    body: "A pattern may have a protective origin and still cause harm. Explanation does not remove the need for boundary, accountability, or repair.",
  },
  {
    title: "Open to review",
    body: "The public work is available for study, critique, correction, adaptation conversations, and future research.",
  },
];

const CONTACT_LINKS = [
  { label: "Email", href: "mailto:research@teg-blue.org", text: "research@teg-blue.org" },
  { label: "ORCID", href: "https://orcid.org/0009-0005-2394-7162", text: "0009-0005-2394-7162" },
  { label: "Zenodo", href: "https://zenodo.org/communities/teg-blue", text: "TEG-Blue community" },
  { label: "GitHub", href: "https://github.com/emotionalblueprint", text: "github.com/emotionalblueprint" },
  { label: "Personal site", href: "https://www.annaparetas.cat", text: "annaparetas.cat" },
];

export const metadata = {
  title: "About",
  description: "About TEG-Blue, The Emotional Gradient Blueprint, its creator, public pages, contact routes, and use limits.",
  keywords: [
    "TEG-Blue",
    "The Emotional Gradient Blueprint",
    "Nervous System Gradient",
    "Anna Paretas-Artacho",
    "emotional patterns",
    "nervous system patterns",
    "layered visual framework",
    "repair capacity",
  ],
  alternates: {
    canonical: "https://teg-blue.org/about",
  },
  openGraph: {
    title: "About TEG-Blue",
    description: "The project, creator, public pages, contact routes, and use limits behind The Emotional Gradient Blueprint.",
    url: "https://teg-blue.org/about",
    siteName: "TEG-Blue",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About TEG-Blue",
    description: "The project, creator, public pages, and use limits behind The Emotional Gradient Blueprint.",
  },
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/about" />

      <PageLayout
        header={
          <ResearcherHero
            badge="ABOUT"
            title="About TEG-Blue"
            subtitle="The Emotional Gradient Blueprint"
            description="Who created TEG-Blue, what each public page is for, how to contact the project, and what the work does not claim."
          />
        }
      >
        <OverviewSection />
        <PurposeSection />
        <FounderSection />
        <EcosystemSection />
        <ResearchStanceSection />
        <ContactSection />
      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About TEG-Blue",
            url: "https://teg-blue.org/about",
            description: "About TEG-Blue, The Emotional Gradient Blueprint, its creator, public pages, contact routes, and use limits.",
            inLanguage: "en",
            mainEntity: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              jobTitle: "Founder and creator of TEG-Blue",
              description: "Barcelona-based founder and creator of TEG-Blue, The Emotional Gradient Blueprint.",
              url: "https://teg-blue.org/about",
              sameAs: [
                "https://orcid.org/0009-0005-2394-7162",
                "https://github.com/emotionalblueprint",
                "https://zenodo.org/communities/teg-blue",
                "https://www.annaparetas.cat",
              ],
              knowsAbout: [
                "The Emotional Gradient Blueprint",
                "The Nervous System Gradient",
                "Visual frameworks",
                "Systems thinking",
                "Emotional patterns",
                "Nervous-system patterns",
                "Public-interest tool building",
              ],
            },
          }),
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
              name: "About TEG-Blue",
              url: "https://teg-blue.org/about",
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
      <div style={labelStyle(SPECTRUM.azure)}>Core identity</div>
      <h2 style={sectionHeadingStyle}>TEG-Blue is The Emotional Gradient Blueprint.</h2>
      <p style={leadStyle}>
        This page is about the project: creator, public pages, contact routes, and use limits.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 790 }}>
        For the map itself, use the TEG-Blue Overview. That page explains what the framework is, what the
        Nervous System Gradient maps, how to read it, and what it does not claim.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
        <NavLink href="/foundations" label="TEG-Blue Overview" />
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section id="purpose" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>This page covers</div>
      <h2 style={sectionHeadingStyle}>Use About for project identity and contact.</h2>
      <p style={leadStyle}>
        About is the place for authorship, site differences, contact, and use limits. The overview page is the
        place for the framework and the map.
      </p>
      <div style={gridStyle}>
        {PURPOSE_CARDS.map((card) => (
          <InfoCard key={card.title} item={card} />
        ))}
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section id="founder" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Founder</div>
      <h2 style={sectionHeadingStyle}>Created by Anna Paretas-Artacho.</h2>
      <div style={calloutStyle(SPECTRUM.indigo)}>
        <p style={bodyStyle}>
          Anna Paretas-Artacho is the Barcelona-based founder and creator of TEG-Blue, The Emotional Gradient
          Blueprint. Working independently, she develops visual maps and practical tools for seeing emotional,
          nervous-system, relational, and social patterns more clearly.
        </p>
        <p style={{ ...bodyStyle, marginTop: 12 }}>
          Her work brings together visual communication, systems thinking, cross-disciplinary research, and
          public-interest tool building. It is not a clinical, medical, legal, or crisis-support service.
        </p>
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section id="ecosystem" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Project parts</div>
      <h2 style={sectionHeadingStyle}>The public site, tools, Engine, and licensed builds do different jobs.</h2>
      <p style={leadStyle}>
        TEG-Blue has connected parts, but they should not be treated as one thing. A public page, a practical
        tool, a private source system, and a licensed build carry different claims.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 790 }}>
        The public site is not a raw Engine export. It uses public language and keeps source support, attribution,
        use limits, and applied tool use separate.
      </p>
      <div style={gridStyle}>
        {ECOSYSTEM_LAYERS.map((item) => (
          <InfoCard key={item.title} item={{ label: item.title, ...item }} />
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
        <NavLink href="/glossary" label="Glossary terms" />
        <NavLink href="/scientific-foundations" label="Source limits" />
      </div>
    </section>
  );
}

function ResearchStanceSection() {
  return (
    <section id="research-stance" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.slate)}>Research stance</div>
      <h2 style={sectionHeadingStyle}>The work is public so it can be studied, questioned, and corrected.</h2>
      <p style={leadStyle}>
        Research areas support specific parts of the map. No single source proves the whole framework. The
        public wording should make that clear.
      </p>
      <div style={gridStyle}>
        {STANCE_ITEMS.map((item) => (
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
      <h2 style={sectionHeadingStyle}>Use these routes.</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {CONTACT_LINKS.map((link) => (
              <ContactRow key={link.label} item={link} />
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <NavLink href="/scientific-foundations" label="Scientific Grounding" />
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
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={tableLabelStyle}>{item.label}</td>
      <td style={tableCellStyle}>
        <a
          href={item.href}
          {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
          style={{ color: contrastColor(SPECTRUM.azure), textDecoration: "none", fontWeight: 500 }}
        >
          {item.text}
        </a>
      </td>
    </tr>
  );
}

function NavLink({ href, label }) {
  return (
    <Link href={href} style={navLinkStyle}>
      {label}
    </Link>
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
    minHeight: 160,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.16)}`,
    borderLeft: `3px solid ${color}`,
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

const tableWrapStyle = {
  background: BG.card,
  borderRadius: RADIUS.md,
  border: `1px solid ${BORDER.default}`,
  overflow: "hidden",
  marginTop: 16,
  marginBottom: 18,
};

const tableLabelStyle = {
  padding: "13px 16px",
  fontSize: 11,
  fontFamily: FONT.mono,
  textTransform: "uppercase",
  letterSpacing: 0,
  color: TEXT.muted,
  whiteSpace: "nowrap",
};

const tableCellStyle = {
  padding: "13px 16px",
  fontSize: 13,
  lineHeight: 1.5,
};

const navLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  padding: "10px 14px",
  background: hexToRgba(SPECTRUM.azure, 0.08),
  color: contrastColor(SPECTRUM.azure),
  borderRadius: RADIUS.sm,
  fontWeight: 500,
  fontSize: 13,
  textDecoration: "none",
  border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.18)}`,
};
