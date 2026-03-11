import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, SPACING, hexToRgba } from "@/src/styles/tokens";
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
        <section id="why-these-principles-exist" style={{ marginBottom: 48 }}>
          <h2 style={sectionHeading}>Why these principles exist</h2>
          <p style={body}>
            TEG-Blue was built from lived experience — from the need to see clearly inside situations designed to confuse. That origin is not incidental. It is the reason these commitments exist.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            A framework that maps emotional vulnerability — how the nervous system responds to safety and threat, how patterns form, how protection becomes harm — carries specific obligations. The same knowledge that makes this work useful could, in the wrong context, be used to exploit exactly what it describes.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            These principles are not aspirational. They are constraints on how this research is conducted, shared, and applied. Every commitment below flows from the honesty that started this work. To read more about TEG-Blue&apos;s origin, see the{" "}
            <Link href="/about" style={linkStyle}>
              About page
            </Link>.
          </p>
        </section>

        {/* No Exploitation of Pain */}
        <section id="no-exploitation-of-pain" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>No exploitation of pain</h2>
          <PrincipleQuote>
            This system started in pain. It will not profit from keeping people in it.
          </PrincipleQuote>
          <p style={body}>
            The framework maps suffering to create understanding, not products. Research findings will not be shaped to serve commercial outcomes. The distinction between mapping pain and monetizing it is one TEG-Blue takes seriously.
          </p>
          <ContextNote>
            The application site (teg-blue.com) offers paid tiers, but these fund the work — they do not create dependency loops or exploit emotional vulnerability for engagement.
          </ContextNote>
        </section>

        {/* No Weaponization */}
        <section id="no-weaponization" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>No weaponization</h2>
          <PrincipleQuote>
            This work maps vulnerability. That knowledge carries responsibility.
          </PrincipleQuote>
          <p style={body}>
            Emotional mapping has dual-use potential. A framework that describes how people protect themselves, how trust forms, how regulatory states shift — this knowledge could be applied to surveillance, behavioral profiling, coercive design, or manipulation.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            TEG-Blue will not license, sell, or make its models available for these purposes. Collaborators and researchers who engage with this work are expected to uphold the same boundary.
          </p>
          <WarningCard>
            Using TEG-Blue&apos;s framework to identify emotional vulnerabilities for exploitation is a violation of both the license and the intent of this research.
          </WarningCard>
        </section>

        {/* Data & Privacy */}
        <section id="data-and-privacy" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>Data and privacy</h2>
          <PrincipleQuote>
            People bring real pain here. We protect what they share.
          </PrincipleQuote>
          <p style={body}>
            No user data from the application site (teg-blue.com) feeds research without explicit consent. Emotional patterns explored through TEG-Blue&apos;s tools are not harvested for analysis, training data, or publication.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            The validation study used publicly available, anonymized data (Reddit AITA posts). Any future research involving user-generated data will require informed consent, ethical review, and transparent methodology documentation.
          </p>
        </section>

        {/* Accessibility */}
        <section id="accessibility" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>Accessibility</h2>
          <PrincipleQuote>
            Clarity should not be a luxury.
          </PrincipleQuote>
          <p style={body}>
            Knowledge stays open. The framework — the maps, the models, the science, the theoretical foundations — is public. This site exists to make it available to anyone who wants to read, test, critique, or build on it.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginTop: 20 }}>
            <CompactCard
              title="Research is open"
              description="Researchers, educators, and clinicians can access everything they need to evaluate the framework here."
              color={SPECTRUM.azure}
            />
            <CompactCard
              title="Tools fund the work"
              description="Paywalled tools on the application site fund ongoing development. The intellectual architecture is not behind a paywall."
              color={SPECTRUM.cobalt}
            />
          </div>
        </section>

        {/* Open Science */}
        <section id="open-science" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>Open science</h2>
          <PrincipleQuote>
            Honest work stays visible.
          </PrincipleQuote>
          <p style={body}>
            Methodology is visible. Claims are testable. Limitations are stated. This is how honest research works.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            TEG-Blue is a working hypothesis — not a settled framework. The validation study, the theoretical mapping, the open research questions, and the framework architecture are all published for independent verification. The{" "}
            <Link href="/methodology" style={linkStyle}>
              methodology
            </Link>{" "}
            documents how the work was done, including the use of AI-assisted literature mapping. The{" "}
            <Link href="/research-entry" style={linkStyle}>
              research entry
            </Link>{" "}
            lists five priority questions still open.
          </p>
          <ContextNote>
            Independent verification, alternative interpretations, and direct critique are more useful to this research than acceptance. The framework is designed to be interrogated.
          </ContextNote>
        </section>

        {/* Attribution & Licensing */}
        <section id="attribution-and-licensing" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>Attribution and licensing</h2>
          <PrincipleQuote>
            Shared work needs shared respect.
          </PrincipleQuote>
          <p style={body}>
            TEG-Blue is published under{" "}
            <strong style={{ color: TEXT.primary }}>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC-BY-NC-SA-4.0)</strong>.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
            <LicenseCard
              title="Attribution"
              color={SPECTRUM.azure}
              description={
                <>
                  Credit the source. Cite TEG-Blue and Anna Paretas-Artacho. Full citation formats are available on the{" "}
                  <Link href="/citations" style={linkStyle}>citations page</Link>.
                </>
              }
            />
            <LicenseCard
              title="Non-commercial"
              color={SPECTRUM.cobalt}
              description="The framework may not be used for commercial purposes without explicit permission. You cannot sell, license, or monetize TEG-Blue's frameworks, models, or content."
            />
            <LicenseCard
              title="Share-alike"
              color={SPECTRUM.indigo}
              description="Derivative works must use the same or a compatible license. If you build on this work, your contribution stays open too."
            />
          </div>

          <p style={{ ...body, marginTop: 20 }}>
            For collaborators: engaging with TEG-Blue means accepting both the license terms and the ethical commitments on this page. The framework is open for testing, critique, extension, and independent use — within these boundaries.
          </p>
        </section>

        {/* Cross-link to .com */}
        <section style={{ marginBottom: 32 }}>
          <div
            style={{
              padding: "20px 24px",
              background: hexToRgba(SPECTRUM.indigo, 0.06),
              borderRadius: 10,
              border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.15)}`,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.75, margin: 0 }}>
              These principles shape how our tools work. See how they apply to the people using TEG-Blue at{" "}
              <a
                href="https://teg-blue.com/ethics"
                style={{ ...linkStyle, fontWeight: 500 }}
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

// ── Shared Styles ──────────────────────────────────────

const sectionHeading = {
  fontSize: 20,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 16,
  letterSpacing: "-0.01em",
};

const body = {
  fontSize: 15,
  color: TEXT.secondary,
  lineHeight: 1.75,
  margin: 0,
};

const linkStyle = {
  color: SPECTRUM.blue,
  textDecoration: "none",
};

// ── Helper Components ──────────────────────────────────

function SectionDivider() {
  return (
    <div
      style={{
        height: 1,
        background: BORDER.default,
        marginBottom: 24,
      }}
    />
  );
}

function PrincipleQuote({ children }) {
  return (
    <div
      style={{
        padding: "14px 20px",
        marginBottom: 20,
        borderLeft: `3px solid ${SPECTRUM.cobalt}`,
        background: hexToRgba(SPECTRUM.cobalt, 0.05),
        borderRadius: "0 8px 8px 0",
      }}
    >
      <p style={{
        fontSize: 15,
        color: TEXT.primary,
        lineHeight: 1.7,
        margin: 0,
        fontWeight: 500,
      }}>
        {children}
      </p>
    </div>
  );
}

function ContextNote({ children }) {
  return (
    <div
      style={{
        padding: "14px 18px",
        marginTop: 20,
        background: hexToRgba(SPECTRUM.slate, 0.07),
        borderRadius: 8,
        borderLeft: `3px solid ${SPECTRUM.slate}`,
      }}
    >
      <p style={{
        fontSize: 13,
        color: TEXT.muted,
        lineHeight: 1.7,
        margin: 0,
      }}>
        {children}
      </p>
    </div>
  );
}

function WarningCard({ children }) {
  return (
    <div
      style={{
        padding: "16px 20px",
        marginTop: 20,
        background: hexToRgba(SPECTRUM.indigo, 0.07),
        borderRadius: 8,
        border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.2)}`,
      }}
    >
      <p style={{
        fontSize: 14,
        color: TEXT.primary,
        lineHeight: 1.75,
        margin: 0,
        fontWeight: 500,
      }}>
        {children}
      </p>
    </div>
  );
}

function CompactCard({ title, description, color }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderTop: `2px solid ${color}`,
      }}
    >
      <h3 style={{
        fontSize: 13,
        fontWeight: 600,
        color: TEXT.primary,
        marginBottom: 6,
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 13,
        color: TEXT.secondary,
        lineHeight: 1.65,
        margin: 0,
      }}>
        {description}
      </p>
    </div>
  );
}

function LicenseCard({ title, color, description }) {
  return (
    <div
      style={{
        padding: 20,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
      }}
    >
      <h3 style={{
        fontSize: 14,
        fontWeight: 600,
        color: TEXT.primary,
        marginBottom: 8,
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 14,
        color: TEXT.secondary,
        lineHeight: 1.7,
        margin: 0,
      }}>
        {description}
      </p>
    </div>
  );
}
