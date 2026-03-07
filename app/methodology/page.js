import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RESEARCHER, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, AuthorBlock, PageLayout } from "@/src/components";
import { generateFAQJsonLd } from "@/src/lib/jsonld";

const SIDEBAR_SECTIONS = [
  { label: "Open Science Principles", description: "Everything published, everything testable, everything open access. The governing research principles." },
  { label: "Status Ladder", description: "Where each component stands: validated, proposed, or open. Transparent about certainty levels." },
  { label: "Validation Approach", description: "How TEG-Blue tests its claims — computational analysis, natural language data, independent replication." },
  { label: "How TEG-Blue Was Developed", description: "The architecture, the literature mapping, AI-assisted research tools, and honest limitations." },
  { label: "Ethical Standards", description: "Trauma-informed data architecture. What research ethics look like for emotional technology." },
  { label: "AI-Readable Research", description: "Designed for both human and AI consumption. Structured for machine legibility." },
  { label: "Where We Stand Honestly", description: "A candid assessment of current methodology — what is strong, what needs work." },
];

export const metadata = {
  title: "Methodology | TEG-Blue Research",
  description: "How TEG-Blue research is conducted. Open science principles, pre-registration, open data (Zenodo), transparent methodology, ethical standards, and trauma-informed data architecture.",
  keywords: [
    "research methodology",
    "open science principles",
    "pre-registration",
    "open data Zenodo",
    "research ethics",
    "trauma informed research",
    "inter-rater reliability",
    "convergent validity",
    "ecological validity",
    "reproducible research",
    "transparent methodology"
  ],
  alternates: {
    canonical: "https://teg-blue.org/methodology",
  },
  openGraph: {
    title: "Methodology — TEG-Blue Research",
    description: "Open science commitment: pre-registration, open data, transparent reporting, ethical standards, trauma-informed design.",
    url: "https://teg-blue.org/methodology",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Methodology — TEG-Blue Research",
    description: "Our open science principles, validation methods, and ethical standards.",
  },
};

// FAQ content for structured data
const FAQ_ITEMS = [
  {
    question: "What are TEG-Blue's open science principles?",
    answer: "TEG-Blue follows open science principles including: pre-registration of studies before data collection, open data sharing via Zenodo, open access publication of all findings, transparent reporting of methodology and results, and reproducible analysis pipelines documented in public repositories."
  },
  {
    question: "How is TEG-Blue research validated?",
    answer: "TEG-Blue uses multiple validation methods: inter-rater reliability testing, convergent validity comparing against established instruments, discriminant validity testing between regulatory states, and ecological validity using naturalistic language samples and real-world contexts."
  },
  {
    question: "How was TEG-Blue developed?",
    answer: "The architecture was developed by Anna Paretas-Artacho over nearly two years of independent research. AI research tools (including the deep thinking models of Claude, Perplexity, and Microsoft Copilot) were then used to systematically identify which established theories align with each framework's propositions. The theoretical mapping is a working hypothesis requiring deeper scholarly validation."
  },
  {
    question: "What ethical standards does TEG-Blue research follow?",
    answer: "All research involving human participants follows ethical guidelines including: informed consent, right to withdraw, data anonymization, no deception in study design, debriefing after participation, and mental health resources offered to all participants. The system uses trauma-informed data architecture principles."
  },
];

export default function MethodologyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/methodology" />

      <PageLayout sidebarSections={SIDEBAR_SECTIONS}>
        <ResearcherHero
          badge="METHODOLOGY"
          title="Research Methodology"
          description="How TEG-Blue research is conducted. Open science principles, pre-registration, open data, transparent methodology."
        />

        {/* Open Science Principles */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Open science principles
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            TEG-Blue research aims to follow open science principles:
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Pre-registration of studies before data collection (where applicable)
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Open data sharing (anonymized) via Zenodo
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Open access publication of all findings
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Transparent reporting of methodology and results
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
              Reproducible analysis pipelines documented in public repositories
            </li>
          </ul>
          <StatusNote>
            These are our working standards. Not all studies to date have been fully pre-registered. We are transparent about where current work meets these standards and where it does not yet.
          </StatusNote>
        </section>

        {/* Status Ladder */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Status ladder
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            Every claim, tool, and result in TEG-Blue carries a status label:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <StatusCard
              title="Established"
              color={SPECTRUM.azure}
              description="Existing theories, measures, and findings from independent research across multiple fields. TEG-Blue builds on these but did not create them."
            />
            <StatusCard
              title="Proposed synthesis"
              color={SPECTRUM.indigo}
              description="The way TEG-Blue connects established theories into one interoperable map. This is the original contribution — and the part that most needs testing."
            />
            <StatusCard
              title="Preliminary evidence"
              color={SPECTRUM.cobalt}
              description="Initial studies, pilot data, and computational analyses completed to date."
              linkText="See Publications for details and limitations"
              linkHref="/publications"
            />
            <StatusCard
              title="Open to validation"
              color={SPECTRUM.slate}
              description="Constructs, tools, and claims that need independent replication, psychometric validation, cross-cultural testing, or external benchmarking."
            />
          </div>
        </section>

        {/* Validation Approach */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Validation approach
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            Our validation approach aims to use multiple methods:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginBottom: 16 }}>
            <MethodCard
              title="Inter-rater reliability"
              description="Independent raters assess the same samples to test consistent identification of regulatory states."
            />
            <MethodCard
              title="Convergent validity"
              description="New measures compared against established instruments (e.g., DERS, AAQ-II) to verify they capture related constructs."
            />
            <MethodCard
              title="Discriminant validity"
              description="Testing that measures differentiate between distinct regulatory states, not just general distress."
            />
            <MethodCard
              title="Ecological validity"
              description="Studies use naturalistic language samples and real-world contexts, not just laboratory settings."
            />
          </div>
          <StatusNote>
            The initial validation study used computational analysis of natural language. Formal psychometric validation studies using these methods are planned but not yet completed. We need collaborators to design and run these studies.
          </StatusNote>
        </section>

        {/* How TEG-Blue Was Developed */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            How TEG-Blue was developed
          </h2>
          <div
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: 10,
              border: `1px solid ${BORDER.default}`,
            }}
          >
            <div style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                The architecture
              </h3>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
                Developed by Anna Paretas-Artacho over nearly two years of independent research, drawing on a lifetime of observing patterns in human behavior, systems thinking, personal experience, and cross-disciplinary reading.
              </p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                The literature mapping
              </h3>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
                Once the architecture was established, AI research tools (including the deep thinking models of Claude, Perplexity, and Microsoft Copilot) were used to systematically identify which established theories and researchers align with each framework's propositions. The architecture determined the connections. The AI tools helped locate and organize the corresponding academic literature.
              </p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                What this means
              </h3>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
                The theoretical mapping is a working hypothesis — a starting point for deeper scholarly validation, not a finished academic work. Human researchers are needed to verify accuracy, correct errors, and deepen the analysis.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                Limitations
              </h3>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
                Some literature connections may be inaccurate or oversimplified. Researchers may disagree with how their work is represented. Corrections are welcomed and the mapping is updated based on scholarly feedback.
              </p>
            </div>
          </div>
        </section>

        {/* Ethical Standards */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Ethical standards
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            All research involving human participants follows ethical guidelines:
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 20 }}>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Informed consent obtained before participation
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Right to withdraw at any time without consequence
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Data anonymization before analysis and sharing
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              No deception in study design
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Debriefing provided after participation
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
              Mental health resources offered to all participants
            </li>
          </ul>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            We take particular care with vulnerable populations and ensure appropriate support structures are in place.
          </p>
          <div
            style={{
              padding: 20,
              background: hexToRgba(SPECTRUM.indigo, 0.08),
              borderRadius: 8,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
            }}
          >
            <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              Trauma-informed data architecture
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
              The system assumes many difficult behaviors started as Protection Mode survival responses. Data systems built on this framework should not be designed to shame, profile, or exploit. This is an architectural constraint, not just an aspiration.
            </p>
          </div>
        </section>

        {/* AI-Readable Research */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            AI-readable research
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            All publications are designed for both human and AI consumption:
          </p>
          <ul style={{ paddingLeft: 20 }}>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Structured JSON-LD metadata on every page
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Semantic HTML with proper heading hierarchy
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Dublin Core and Schema.org annotations
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
              Clear, consistent terminology throughout
            </li>
          </ul>
        </section>

        {/* Where Current Methodology Stands */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Where current methodology stands honestly
          </h2>
          <div
            style={{
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: BG.surface }}>
                  <th style={{ ...tableHeaderStyle }}>Area</th>
                  <th style={{ ...tableHeaderStyle }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <StatusRow area="Open science principles" status="Working standard; not all work meets full pre-registration yet" />
                <StatusRow area="Validation study (n=10,000+)" status="Completed; computational analysis of natural language" statusColor={SPECTRUM.azure} />
                <StatusRow area="Psychometric validation of tools" status="Not yet started; collaborators needed" statusColor={SPECTRUM.slate} />
                <StatusRow area="Cross-cultural replication" status="Not yet started; collaborators needed" statusColor={SPECTRUM.slate} />
                <StatusRow area="Independent replication of four-mode classification" status="Not yet started; collaborators needed" statusColor={SPECTRUM.slate} />
                <StatusRow area="AI schema evaluation" status="Early implementation; needs formal evaluation" statusColor={SPECTRUM.indigo} isLast />
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14, color: TEXT.secondary, marginTop: 16 }}>
            If you can help with any of these, see{" "}
            <Link href="/collaborate" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              Collaborate →
            </Link>
          </p>
        </section>

        {/* Author */}
        <section style={{ marginBottom: 32 }}>
          <AuthorBlock />
        </section>

      </PageLayout>

      <SiteFooter />

      {/* FAQ Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />
    </div>
  );
}

// ─── HELPER COMPONENTS ─────────────────────────────────────────

function StatusNote({ children }) {
  return (
    <div
      style={{
        padding: "12px 16px",
        background: hexToRgba(SPECTRUM.slate, 0.08),
        borderRadius: 6,
        borderLeft: `3px solid ${SPECTRUM.slate}`,
      }}
    >
      <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7, margin: 0 }}>
        <strong style={{ color: TEXT.secondary }}>Status note:</strong> {children}
      </p>
    </div>
  );
}

function StatusCard({ title, color, description, linkText, linkHref }) {
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
      <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
        {description}
        {linkText && linkHref && (
          <>
            {" "}
            <Link href={linkHref} style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              {linkText} →
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

function MethodCard({ title, description }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <h3 style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

const tableHeaderStyle = {
  padding: "12px 16px",
  fontSize: 12,
  fontWeight: 600,
  color: TEXT.muted,
  textAlign: "left",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  fontFamily: FONT.mono,
};

function StatusRow({ area, status, statusColor, isLast }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ padding: "12px 16px", fontSize: 14, color: TEXT.secondary }}>
        {area}
      </td>
      <td style={{ padding: "12px 16px", fontSize: 13, color: statusColor || TEXT.muted }}>
        {status}
      </td>
    </tr>
  );
}
