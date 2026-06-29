import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What is TEG-Blue?",
    answer: "TEG-Blue is The Emotional Gradient Blueprint: a visual map for patterns we can already see across emotion, nervous systems, survival strategies, identity, social patterns, and repair.",
  },
  {
    question: "Who created TEG-Blue?",
    answer: "TEG-Blue was created by Anna Paretas-Artacho, working independently from Barcelona with long professional experience in visual communication, systems thinking, and applied pattern design.",
  },
  {
    question: "What is the difference between teg-blue.org and teg-blue.com?",
    answer: "teg-blue.org holds the framework, methodology, and research foundations. teg-blue.com holds practical interactive tools for reading emotional and nervous-system patterns.",
  },
  {
    question: "Is TEG-Blue a clinical system?",
    answer: "No. TEG-Blue is an educational and research-facing visual map. It does not diagnose, treat, or replace professional care.",
  },
];

const SIDEBAR_SECTIONS = [
  { label: "Overview", href: "#overview", description: "What TEG-Blue is." },
  { label: "Purpose", href: "#purpose", description: "Why the framework exists." },
  { label: "Founder", href: "#founder", description: "Anna Paretas-Artacho." },
  { label: "Two Sites", href: "#two-sites", description: "Framework and tools." },
  { label: "Research Stance", href: "#research-stance", description: "How to read the work." },
  { label: "Contact", href: "#contact", description: "Routes into the project." },
];

const PURPOSE_CARDS = [
  {
    label: "Legibility",
    title: "Make patterns easier to see",
    body: "The Gradient gives shared language for emotional and nervous-system patterns that are often felt before they are understood.",
    color: SPECTRUM.azure,
  },
  {
    label: "Scale",
    title: "Connect body and society",
    body: "TEG-Blue tracks how patterns that begin in the body can shape relationships, groups, institutions, and culture.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Response",
    title: "Support clearer action",
    body: "When a pattern is visible, support, interruption, boundary, protection, accountability, and repair can be chosen more carefully.",
    color: SPECTRUM.indigo,
  },
];

const SITE_CARDS = [
  {
    title: "teg-blue.org",
    subtitle: "Framework and research",
    body: "The .org site holds the public framework: overview, methodology, and scientific foundations.",
    href: "/foundations",
    linkText: "Start with the overview",
    color: SPECTRUM.azure,
  },
  {
    title: "teg-blue.com",
    subtitle: "Practical tools",
    body: "The .com site holds interactive public tools for exploring emotional and nervous-system patterns in everyday situations.",
    href: "https://teg-blue.com/",
    linkText: "Open the tools site",
    color: SPECTRUM.indigo,
    external: true,
  },
];

const STANCE_ITEMS = [
  {
    title: "A framework, not a diagnosis",
    body: "The Gradient gives language for pattern reading. It does not identify a person's internal state from the outside or replace clinical judgement.",
  },
  {
    title: "Research supports parts",
    body: "Established research helps illuminate specific mechanisms, conditions, capacities, and patterns. The full integration remains TEG-Blue's contribution.",
  },
  {
    title: "Impact remains visible",
    body: "Mechanism does not erase effect. The framework keeps behaviour, impact, capacity, accountability, boundary, protection, and repair distinct.",
  },
  {
    title: "The work remains open",
    body: "TEG-Blue is presented for study, application, critique, correction, and independent review.",
  },
];

const CONTACT_LINKS = [
  { label: "ORCID", href: "https://orcid.org/0009-0005-2394-7162", text: "0009-0005-2394-7162" },
  { label: "Zenodo", href: "https://zenodo.org/records/19472342", text: "TEG-Blue publication record" },
  { label: "GitHub", href: "https://github.com/emotionalblueprint", text: "github.com/emotionalblueprint" },
  { label: "Email", href: "mailto:research@teg-blue.org", text: "research@teg-blue.org" },
];

export const metadata = {
  title: "About",
  description: "About TEG-Blue, the project behind a visual map of nervous-system patterns across safety, threat, control, shutdown, accountability, and repair.",
  keywords: [
    "TEG-Blue",
    "The Emotional Gradient Blueprint",
    "Nervous System Gradient",
    "Anna Paretas-Artacho",
    "emotional patterns",
    "nervous system patterns",
    "state-shaped capacity",
    "repair capacity",
    "visual map",
  ],
  alternates: {
    canonical: "https://teg-blue.org/about",
  },
  openGraph: {
    title: "About — TEG-Blue",
    description: "The project behind a visual map of nervous-system patterns across safety, threat, control, shutdown, accountability, and repair.",
    url: "https://teg-blue.org/about",
    siteName: "TEG-Blue",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — TEG-Blue",
    description: "The project behind a visual map of nervous-system patterns.",
  },
};

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/about" />

      <PageLayout
        header={
          <ResearcherHero
            badge="ABOUT"
            title="About TEG-Blue"
            subtitle="The Emotional Gradient Blueprint"
            description="The project behind a visual map for patterns we can already see across nervous systems, relationships, groups, harm, accountability, and repair."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <OverviewSection />
        <PurposeSection />
        <FounderSection />
        <TwoSitesSection />
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
            description: "About TEG-Blue, the project behind a visual map of nervous-system patterns across safety, threat, control, shutdown, accountability, and repair.",
            inLanguage: "en",
            mainEntity: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              jobTitle: "Founder and creator of TEG-Blue",
              description: "Founder and creator of TEG-Blue, The Emotional Gradient Blueprint.",
              url: "https://teg-blue.org/about",
              sameAs: [
                "https://orcid.org/0009-0005-2394-7162",
                "https://github.com/emotionalblueprint",
                "https://zenodo.org/records/19472342",
              ],
              knowsAbout: [
                "The Emotional Gradient Blueprint",
                "Nervous System Gradient",
                "Visual frameworks",
                "Systems thinking",
                "Emotional patterns",
                "Nervous-system patterns",
                "Repair capacity",
              ],
              affiliation: {
                "@type": "Organization",
                name: "TEG-Blue",
                url: "https://teg-blue.org",
              },
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
      <h2 style={sectionHeadingStyle}>TEG-Blue makes emotional and social patterns legible.</h2>
      <p style={leadStyle}>
        TEG-Blue is The Emotional Gradient Blueprint: a visual map for patterns we can already see across
        emotion, nervous systems, survival strategies, identity, social patterns, and repair.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 790 }}>
        It shows how patterns that begin in the body can shape relationships, groups, institutions, and culture
        across safety, threat, control, shutdown, restoration, and repair.
      </p>
    </section>
  );
}

function PurposeSection() {
  return (
    <section id="purpose" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>Purpose</div>
      <h2 style={sectionHeadingStyle}>The work is built for clearer pattern reading.</h2>
      <p style={leadStyle}>
        TEG-Blue gives people a way to discuss emotional and nervous-system patterns without collapsing them
        into personality labels, moral rankings, or vague feeling language.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 12,
          marginTop: 18,
        }}
      >
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
      <div
        style={{
          padding: 18,
          background: gradientCardBg(SPECTRUM.indigo, 0.055),
          border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.18)}`,
          borderLeft: `3px solid ${SPECTRUM.indigo}`,
          borderRadius: RADIUS.md,
        }}
      >
        <p style={bodyStyle}>
          Anna Paretas-Artacho is the founder and creator of TEG-Blue, working independently from Barcelona.
          Her background is in visual communication, systems thinking, and applied pattern design.
        </p>
        <p style={{ ...bodyStyle, marginTop: 12 }}>
          TEG-Blue developed as a visual architecture for making emotional, nervous-system, relational, and
          social patterns easier to see, discuss, study, and work with.
        </p>
      </div>
    </section>
  );
}

function TwoSitesSection() {
  return (
    <section id="two-sites" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Two sites</div>
      <h2 style={sectionHeadingStyle}>One framework, two public surfaces.</h2>
      <p style={leadStyle}>
        The .org and .com sites serve different readers. They should stay connected, but not collapsed into the
        same job.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: 12,
          marginTop: 18,
        }}
      >
        {SITE_CARDS.map((site) => (
          <SiteCard key={site.title} site={site} />
        ))}
      </div>
    </section>
  );
}

function ResearchStanceSection() {
  return (
    <section id="research-stance" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.slate)}>Research stance</div>
      <h2 style={sectionHeadingStyle}>The framework is public so it can be used, questioned, and refined.</h2>
      <p style={leadStyle}>
        TEG-Blue draws from established research areas while offering its own visual integration. Its claims
        should be read with care: specific parts may be supported by existing research, while the full
        integration needs its own review and testing.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: 12,
          marginTop: 18,
        }}
      >
        {STANCE_ITEMS.map((item) => (
          <StanceCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" style={{ marginBottom: 32 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Contact</div>
      <h2 style={sectionHeadingStyle}>Routes into the work.</h2>
      <div
        style={{
          background: BG.card,
          borderRadius: RADIUS.md,
          border: `1px solid ${BORDER.default}`,
          overflow: "hidden",
          marginTop: 16,
          marginBottom: 18,
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {CONTACT_LINKS.map((link) => (
              <ContactRow key={link.label} item={link} />
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <NavLink href="/foundations" label="TEG-Blue Overview" />
        <NavLink href="/methodology" label="Methodology" />
        <NavLink href="/scientific-foundations" label="Scientific Foundations" />
      </div>
    </section>
  );
}

function InfoCard({ item }) {
  return (
    <div
      style={{
        padding: 16,
        minHeight: 150,
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

function SiteCard({ site }) {
  const LinkEl = site.external ? "a" : Link;
  const extraProps = site.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <div
      style={{
        padding: 18,
        minHeight: 220,
        background: gradientCardBg(site.color, 0.055),
        border: `1px solid ${hexToRgba(site.color, 0.16)}`,
        borderTop: `3px solid ${site.color}`,
        borderRadius: RADIUS.md,
      }}
    >
      <div style={labelStyle(site.color)}>{site.subtitle}</div>
      <h3 style={{ fontSize: 17, fontWeight: 700, color: TEXT.primary, margin: "0 0 8px" }}>
        {site.title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.65, margin: "0 0 14px" }}>
        {site.body}
      </p>
      <LinkEl href={site.href} {...extraProps} style={{ color: site.color, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>
        {site.linkText}
      </LinkEl>
    </div>
  );
}

function StanceCard({ item }) {
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

function ContactRow({ item }) {
  const isEmail = item.href.startsWith("mailto:");
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={tableLabelStyle}>{item.label}</td>
      <td style={tableCellStyle}>
        <a
          href={item.href}
          {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
          style={{ color: SPECTRUM.azure, textDecoration: "none", fontWeight: 500 }}
        >
          {item.text}
        </a>
      </td>
    </tr>
  );
}

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 14px",
        background: hexToRgba(SPECTRUM.azure, 0.08),
        color: SPECTRUM.azure,
        borderRadius: RADIUS.sm,
        fontWeight: 500,
        fontSize: 13,
        textDecoration: "none",
        border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.18)}`,
      }}
    >
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
