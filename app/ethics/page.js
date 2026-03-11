import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";

const SIDEBAR_SECTIONS = [
  { label: "Why These Principles Exist", href: "#why-these-principles-exist", description: "The origin that makes these commitments non-negotiable." },
  { label: "No Exploitation of Pain", href: "#no-exploitation-of-pain", description: "Research findings will not be shaped to serve commercial outcomes." },
  { label: "No Weaponization", href: "#no-weaponization", description: "TEG-Blue's position on dual-use potential and what collaborators must commit to." },
  { label: "Data & Privacy", href: "#data-and-privacy", description: "Research ethics around emotional data and user consent." },
  { label: "Accessibility", href: "#accessibility", description: "The framework stays public. Knowledge is not paywalled." },
  { label: "Open Science", href: "#open-science", description: "Methodology is visible. Claims are testable. Limitations are stated." },
  { label: "Attribution & Licensing", href: "#attribution-and-licensing", description: "CC-BY-NC-SA-4.0 explained. How to cite. What collaborators should know." },
];

export const metadata = {
  title: "Ethics | TEG-Blue",
  description: "TEG-Blue's research ethics and collaboration principles. How this work is conducted, what it commits to, and what collaborators should know before engaging.",
  keywords: [
    "research ethics",
    "open science",
    "emotional technology ethics",
    "collaboration principles",
    "CC-BY-NC-SA-4.0",
    "TEG-Blue",
    "data ethics",
    "dual-use research",
  ],
  alternates: {
    canonical: "https://teg-blue.org/ethics",
  },
  openGraph: {
    title: "Ethics — TEG-Blue Research",
    description: "Research ethics and collaboration principles. How this work is conducted and what it commits to.",
    url: "https://teg-blue.org/ethics",
    siteName: "TEG-Blue Research",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Ethics — TEG-Blue Research",
    description: "Research ethics and collaboration principles for TEG-Blue.",
  },
};

export default function EthicsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/ethics" />

      <PageLayout
        header={
          <ResearcherHero
            badge="ETHICS"
            title="Ethics"
            description="How this work is conducted, what it commits to, and what we ask of anyone who builds on it. These principles protect the honesty this system was built on."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Why These Principles Exist */}
        <section id="why-these-principles-exist" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Why these principles exist</h2>
          <p style={bodyStyle}>
            TEG-Blue was built from lived experience — from the need to see clearly inside situations designed to confuse. That origin is not incidental. It is the reason these commitments exist.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            A framework that maps emotional vulnerability — how the nervous system responds to safety and threat, how patterns form, how protection becomes harm — carries specific obligations. The same knowledge that makes this work useful could, in the wrong context, be used to exploit exactly what it describes.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            These principles are not aspirational. They are constraints on how this research is conducted, shared, and applied. Every commitment below flows from the honesty that started this work. To read more about TEG-Blue&apos;s origin, see the{" "}
            <Link href="/about" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              About page
            </Link>.
          </p>
        </section>

        {/* No Exploitation of Pain */}
        <section id="no-exploitation-of-pain" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>No exploitation of pain</h2>
          <div
            style={{
              padding: "16px 20px",
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
              marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
              This system started in pain. It will not profit from keeping people in it.
            </p>
          </div>
          <p style={bodyStyle}>
            The framework maps suffering to create understanding, not products. Research findings will not be shaped to serve commercial outcomes. The distinction between mapping pain and monetizing it is one TEG-Blue takes seriously.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            The application site (teg-blue.com) offers paid tiers, but these fund the work — they do not create dependency loops or exploit emotional vulnerability for engagement.
          </p>
        </section>

        {/* No Weaponization */}
        <section id="no-weaponization" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>No weaponization</h2>
          <div
            style={{
              padding: "16px 20px",
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
              marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
              This work maps vulnerability. That knowledge carries responsibility.
            </p>
          </div>
          <p style={bodyStyle}>
            Emotional mapping has dual-use potential. A framework that describes how people protect themselves, how trust forms, how regulatory states shift — this knowledge could be applied to surveillance, behavioral profiling, coercive design, or manipulation.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            TEG-Blue will not license, sell, or make its models available for these purposes. Collaborators and researchers who engage with this work are expected to uphold the same boundary. Using TEG-Blue&apos;s framework to identify emotional vulnerabilities for exploitation is a violation of both the license and the intent of this research.
          </p>
        </section>

        {/* Data & Privacy */}
        <section id="data-and-privacy" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Data and privacy</h2>
          <div
            style={{
              padding: "16px 20px",
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
              marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
              People bring real pain here. We protect what they share.
            </p>
          </div>
          <p style={bodyStyle}>
            No user data from the application site (teg-blue.com) feeds research without explicit consent. Emotional patterns explored through TEG-Blue&apos;s tools are not harvested for analysis, training data, or publication.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            The validation study used publicly available, anonymized data (Reddit AITA posts). Any future research involving user-generated data will require informed consent, ethical review, and transparent methodology documentation.
          </p>
        </section>

        {/* Accessibility */}
        <section id="accessibility" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Accessibility</h2>
          <div
            style={{
              padding: "16px 20px",
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
              marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
              Clarity should not be a luxury.
            </p>
          </div>
          <p style={bodyStyle}>
            Knowledge stays open. The framework — the maps, the models, the science, the theoretical foundations — is public. This site exists to make it available to anyone who wants to read, test, critique, or build on it.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            Paywalled tools on the application site fund the ongoing development work. But the intellectual architecture of TEG-Blue is not behind a paywall. Researchers, educators, and clinicians can access everything they need to evaluate the framework here.
          </p>
        </section>

        {/* Open Science */}
        <section id="open-science" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Open science</h2>
          <div
            style={{
              padding: "16px 20px",
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
              marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
              Honest work stays visible.
            </p>
          </div>
          <p style={bodyStyle}>
            Methodology is visible. Claims are testable. Limitations are stated. This is how honest research works.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            TEG-Blue is a working hypothesis — not a settled framework. The validation study, the theoretical mapping, the open research questions, and the framework architecture are all published for independent verification. The{" "}
            <Link href="/methodology" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              methodology
            </Link>{" "}
            documents how the work was done, including the use of AI-assisted literature mapping. The{" "}
            <Link href="/research-entry" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              research entry
            </Link>{" "}
            lists five priority questions still open.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            Independent verification, alternative interpretations, and direct critique are more useful to this research than acceptance. The framework is designed to be interrogated.
          </p>
        </section>

        {/* Attribution & Licensing */}
        <section id="attribution-and-licensing" style={{ marginBottom: 32 }}>
          <h2 style={sectionHeading}>Attribution and licensing</h2>
          <div
            style={{
              padding: "16px 20px",
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
              marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
              Shared work needs shared respect.
            </p>
          </div>
          <p style={bodyStyle}>
            TEG-Blue is published under{" "}
            <strong style={{ color: TEXT.primary }}>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC-BY-NC-SA-4.0)</strong>.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            This means:
          </p>
          <ul style={{ ...bodyStyle, marginTop: 8, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong style={{ color: TEXT.primary }}>Attribution</strong> — Credit the source. Cite TEG-Blue and Anna Paretas-Artacho. Full citation formats are available on the <Link href="/citations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>citations page</Link>.</li>
            <li style={{ marginBottom: 8 }}><strong style={{ color: TEXT.primary }}>Non-commercial</strong> — The framework may not be used for commercial purposes without explicit permission. &ldquo;Non-commercial&rdquo; means you cannot sell, license, or monetize TEG-Blue&apos;s frameworks, models, or content.</li>
            <li style={{ marginBottom: 8 }}><strong style={{ color: TEXT.primary }}>Share-alike</strong> — Derivative works must use the same or a compatible license. If you build on this work, your contribution stays open too.</li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: 16 }}>
            For collaborators: engaging with TEG-Blue means accepting both the license terms and the ethical commitments on this page. The framework is open for testing, critique, extension, and independent use — within these boundaries.
          </p>
        </section>

        {/* Cross-link to .com */}
        <section style={{ marginBottom: 32 }}>
          <div
            style={{
              padding: "20px 24px",
              background: hexToRgba(SPECTRUM.indigo, 0.08),
              borderRadius: 10,
              border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.2)}`,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
              These principles shape how our tools work. See how they apply to the people using TEG-Blue at{" "}
              <a
                href="https://teg-blue.com/ethics"
                style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                teg-blue.com/ethics
              </a>.
            </p>
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
