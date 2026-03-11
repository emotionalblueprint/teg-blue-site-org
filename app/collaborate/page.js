import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";

const SIDEBAR_SECTIONS = [
  { label: "What We're Looking For", href: "#what-were-looking-for", description: "Types of collaboration — validation, cross-disciplinary, translation, critique." },
  { label: "How to Engage", href: "#how-to-engage", description: "Process, what to expect, and how to reach out." },
  { label: "Ethical Expectations", href: "#ethical-expectations", description: "What we ask of collaborators before engaging with this work." },
  { label: "Current Status", href: "#current-status", description: "Where the project is, what's active, and what's open." },
];

export const metadata = {
  title: "Collaborate | TEG-Blue",
  description: "How to collaborate with TEG-Blue. Validation studies, cross-disciplinary research, translation, and critique — what we're looking for, how to engage, and what to expect.",
  keywords: [
    "research collaboration",
    "emotional technology",
    "TEG-Blue",
    "open science collaboration",
    "validation research",
    "replication studies",
    "cross-disciplinary research",
  ],
  alternates: {
    canonical: "https://teg-blue.org/collaborate",
  },
  openGraph: {
    title: "Collaborate — TEG-Blue Research",
    description: "How to collaborate with TEG-Blue. Validation, cross-disciplinary research, translation, and critique.",
    url: "https://teg-blue.org/collaborate",
    siteName: "TEG-Blue Research",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Collaborate — TEG-Blue Research",
    description: "Research collaboration opportunities with TEG-Blue.",
  },
};

export default function CollaboratePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/collaborate" />

      <PageLayout
        header={
          <ResearcherHero
            badge="COLLABORATE"
            title="Collaborate"
            description="TEG-Blue is open access under CC-BY-NC-SA-4.0. The frameworks, models, datasets, and methodology are available for independent use. Here is how to work with us."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Ethics prerequisite */}
        <section style={{ marginBottom: 24 }}>
          <div
            style={{
              padding: "14px 20px",
              background: hexToRgba(SPECTRUM.indigo, 0.08),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.15)}`,
            }}
          >
            <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
              Before engaging, please read our{" "}
              <Link href="/ethics" style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}>
                ethics and principles
              </Link>. Collaboration with TEG-Blue means accepting both the license terms and the ethical commitments described there.
            </p>
          </div>
        </section>

        {/* What we're looking for */}
        <section id="what-were-looking-for" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>What we&apos;re looking for</h2>
          <p style={bodyStyle}>
            TEG-Blue is a working hypothesis. It needs testing, critique, and independent verification more than it needs agreement. The following types of collaboration are particularly valuable:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
            <CollabCard
              title="Validation studies"
              description="Independent replication of the Four-Mode Gradient detection, testing in new contexts (clinical, educational, organizational), cross-cultural validation."
            />
            <CollabCard
              title="Cross-disciplinary research"
              description="The framework proposes connections across neuroscience, psychology, sociology, and trauma studies. Researchers in any of these fields can test specific propositions within their own methods."
            />
            <CollabCard
              title="Translation and adaptation"
              description="Adapting the framework for specific populations, clinical contexts, or educational settings. Building on TEG-Blue's architecture for new applications."
            />
            <CollabCard
              title="Critique and challenge"
              description="Identifying where the framework overclaims, where the theoretical connections are weakest, or where alternative explanations are stronger. Rigorous disagreement is welcome."
            />
          </div>
        </section>

        {/* How to engage */}
        <section id="how-to-engage" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>How to engage</h2>
          <p style={bodyStyle}>
            There is no application process. The work is open. You can start by reading the{" "}
            <Link href="/research-entry" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              research entry point
            </Link>, reviewing the{" "}
            <Link href="/methodology" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              methodology
            </Link>, and exploring the{" "}
            <Link href="/frameworks-map" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              framework architecture
            </Link>.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            If you want to discuss potential collaboration, coordinate on a specific research direction, or have questions about the framework:
          </p>
          <a
            href="mailto:research@teg-blue.org"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              background: SPECTRUM.indigo,
              color: "#fff",
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
              marginTop: 16,
            }}
          >
            research@teg-blue.org
          </a>
          <p style={{ ...bodyStyle, marginTop: 16 }}>
            Citation formats for the framework, validation study, and individual components are available on the{" "}
            <Link href="/citations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              citations page
            </Link>.
          </p>
        </section>

        {/* Ethical expectations */}
        <section id="ethical-expectations" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Ethical expectations</h2>
          <p style={bodyStyle}>
            Collaborating with TEG-Blue means engaging with a framework that maps emotional vulnerability. That carries specific responsibilities:
          </p>
          <ul style={{ ...bodyStyle, marginTop: 12, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>The framework will not be used for surveillance, manipulation, or coercive applications.</li>
            <li style={{ marginBottom: 8 }}>Research involving human participants follows standard ethical review processes.</li>
            <li style={{ marginBottom: 8 }}>Findings are published openly — not shaped to serve commercial interests.</li>
            <li style={{ marginBottom: 8 }}>Attribution is maintained. The CC-BY-NC-SA-4.0 license applies to all derivative work.</li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            Full ethical principles are documented on the{" "}
            <Link href="/ethics" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              ethics page
            </Link>.
          </p>
        </section>

        {/* Current status */}
        <section id="current-status" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Current status</h2>
          <p style={bodyStyle}>
            TEG-Blue is in active development. The framework architecture (12 frameworks, 3 models) is complete. The first validation study is published. Five open research questions are documented.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            What the framework needs most is a lead researcher or institution to carry the next phase — systematic validation, replication across contexts, and dissemination into established research channels.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20 }}>
            <NavLink href="/research-entry" label="Research Entry" />
            <NavLink href="/publications" label="Publications" />
            <NavLink href="/scientific-foundations" label="Scientific Foundations" />
            <NavLink href="/frameworks-map" label="Framework Architecture" />
          </div>
        </section>
      </PageLayout>

      <SiteFooter />
    </div>
  );
}

// ── Styles ──

const sectionHeading = {
  fontSize: 18,
  fontWeight: 600,
  color: SPECTRUM.indigo,
  marginBottom: 12,
};

const bodyStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  maxWidth: 640,
  margin: 0,
};

// ── Helper Components ──

function CollabCard({ title, description }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${SPECTRUM.indigo}`,
      }}
    >
      <h3 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "10px 18px",
        background: hexToRgba(SPECTRUM.indigo, 0.1),
        color: SPECTRUM.indigo,
        borderRadius: 6,
        fontWeight: 500,
        fontSize: 13,
        textDecoration: "none",
        border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.2)}`,
      }}
    >
      {label} →
    </Link>
  );
}
