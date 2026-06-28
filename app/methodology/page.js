import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, MAIN_ORG, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, AuthorBlock, PageLayout, ReviewStatusPanel } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const SIDEBAR_SECTIONS = [
  { label: "Review Status", href: "#review-status-heading", description: "Peer-reviewed source literature, original visual synthesis, and what remains open to testing." },
  { label: "Research Grounding Principles", href: "#research-grounding-principles", description: "Source traces, transparent methods, working questions, and open correction." },
  { label: "Status Ladder", href: "#status-ladder", description: "Where each component stands: established, proposed, preliminary, or open." },
  { label: "Testing Approach", href: "#testing-approach", description: "How TEG-Blue tests working claims — computational analysis, natural language data, independent replication." },
  { label: "How TEG-Blue Was Developed", href: "#how-teg-blue-was-developed", description: "The architecture, the literature mapping, AI-assisted research tools, and honest limitations." },
  { label: "Ethical Standards", href: "#ethical-standards", description: "Pattern-aware data architecture. What research ethics look like for emotional technology." },
  { label: "Structured Page Context", href: "#structured-page-context", description: "Structured metadata, semantic HTML, and consistent terminology for reuse and citation." },
  { label: "Where We Stand Honestly", href: "#where-we-stand-honestly", description: "A candid assessment of current methodology — what is strong, what needs work." },
];

export const metadata = {
  title: "Methodology | TEG-Blue",
  description: "How TEG-Blue documents research grounding: peer-reviewed source literature, original visual synthesis, source traces, transparent methods, working questions, and limitations.",
  keywords: [
    "research methodology",
    "research grounding",
    "source traces",
    "pre-registration",
    "Zenodo",
    "research ethics",
    "pattern-aware research",
    "inter-rater reliability",
    "replication",
    "working questions",
    "reproducible research",
    "transparent methodology"
  ],
  alternates: {
    canonical: "https://teg-blue.org/methodology",
  },
  openGraph: {
    title: "Methodology — TEG-Blue",
    description: "Source traces, transparent reporting, working questions, ethical standards, and pattern-aware design.",
    url: "https://teg-blue.org/methodology",
    siteName: "TEG-Blue",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Methodology — TEG-Blue",
    description: "Research-grounding principles, testing methods, and ethical standards.",
  },
};

// FAQ content for structured data
const FAQ_ITEMS = [
  {
    question: "What are TEG-Blue's research-grounding principles?",
    answer: "TEG-Blue documents source traces, methods, working questions, limitations, and updates so the framework can be reviewed, corrected, tested, and cited carefully. The source literature includes peer-reviewed research; the visual synthesis is original framework work open to independent testing."
  },
  {
    question: "How are TEG-Blue claims tested?",
    answer: "TEG-Blue uses and proposes multiple testing methods: inter-rater reliability, comparison with established instruments, differentiation between nervous-system states, replication, and naturalistic language samples. Not all methods have been completed."
  },
  {
    question: "How was TEG-Blue developed?",
    answer: "The architecture was developed by Anna Paretas-Artacho over nearly two years of independent research. AI research tools (including the deep thinking models of Claude, Perplexity, and Microsoft Copilot) were then used to systematically identify which established theories align with each framework's propositions. The theoretical mapping is a visual research synthesis and working hypothesis requiring deeper scholarly validation."
  },
  {
    question: "What ethical standards does TEG-Blue research follow?",
    answer: "All research involving human participants follows ethical guidelines including: informed consent, right to withdraw, data anonymization, no deception in study design, debriefing after participation, and mental health resources offered to all participants. The system uses pattern-aware data architecture principles."
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

      <PageLayout
        header={
          <ResearcherHero
            badge="METHODOLOGY"
            title="Research Methodology"
            description="How TEG-Blue documents research grounding: source traces, transparent methodology, working questions, and limitations."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <ReviewStatusPanel />

        {/* Research Grounding Principles */}
        <section id="research-grounding-principles" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Research grounding principles
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            TEG-Blue research aims to keep the framework traceable and correctable:
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Pre-registration of studies before data collection (where applicable)
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Source traces and method notes for framework claims
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Open access publication of selected findings and working papers where appropriate
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 6 }}>
              Transparent reporting of methodology and results
            </li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
              Reproducible analysis pipelines where a study makes empirical claims
            </li>
          </ul>
          <StatusNote>
            These are working standards. Not all work to date meets every standard. The site should be transparent about what is established, what is proposed, what has preliminary support, and what still needs testing.
          </StatusNote>
        </section>

        {/* Status Ladder */}
        <section id="status-ladder" style={{ marginBottom: 32 }}>
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
              title="Open to testing"
              color={SPECTRUM.slate}
              description="Constructs, tools, and claims that need independent replication, psychometric testing, cross-cultural testing, or external benchmarking."
            />
          </div>
        </section>

        {/* Testing Approach */}
        <section id="testing-approach" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Testing approach
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            The testing approach aims to use multiple methods:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginBottom: 16 }}>
            <MethodCard
              title="Inter-rater reliability"
              description="Independent raters assess the same samples to test consistent identification of nervous system states."
            />
            <MethodCard
              title="Convergent validity"
              description="New measures compared against established instruments (e.g., DERS, AAQ-II) to assess whether they capture related constructs."
            />
            <MethodCard
              title="Discriminant validity"
              description="Testing that measures differentiate between distinct nervous system states, not just general distress."
            />
            <MethodCard
              title="Ecological validity"
              description="Studies use naturalistic language samples and real-world contexts, not just laboratory settings."
            />
          </div>
          <StatusNote>
            The initial study used computational analysis of natural language. Formal psychometric studies using these methods are planned but not yet completed. We need collaborators to design and run these studies.
          </StatusNote>
        </section>

        {/* How TEG-Blue Was Developed */}
        <section id="how-teg-blue-was-developed" style={{ marginBottom: 32 }}>
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
                The theoretical mapping is a working hypothesis — a starting point for deeper scholarly testing, not a finished academic work. Human researchers are needed to verify accuracy, correct errors, and deepen the analysis.
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
        <section id="ethical-standards" style={{ marginBottom: 32 }}>
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
              Pattern-aware data architecture
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
              The system maps behavior as a function of nervous system state. When the nervous system learned that return was not safe, it organises around protection — and the data architecture tracks state, pattern, and position as independent dimensions, each of which can change when conditions change. This is an architectural constraint, not an aspiration.
            </p>
          </div>
        </section>

        {/* Structured Page Context */}
        <section id="structured-page-context" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Structured page context
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            Publications and framework pages are structured so they can be cited, reviewed, corrected, and reused carefully:
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
        <section id="where-we-stand-honestly" style={{ marginBottom: 32 }}>
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
                <StatusRow area="Research-grounding principles" status="Working standard; not all work meets full pre-registration yet" />
                <StatusRow area="Initial natural-language study (n=10,000+)" status="Completed; computational analysis of natural language" statusColor={SPECTRUM.azure} />
                <StatusRow area="Psychometric testing of tools" status="Not yet started; collaborators needed" statusColor={SPECTRUM.slate} />
                <StatusRow area="Cross-cultural replication" status="Not yet started; collaborators needed" statusColor={SPECTRUM.slate} />
                <StatusRow area="Independent replication of regulatory-state classification" status="Not yet started; collaborators needed" statusColor={SPECTRUM.slate} />
                <StatusRow area="Structured schema evaluation" status="Early implementation; needs formal evaluation" statusColor={SPECTRUM.indigo} isLast />
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14, color: TEXT.secondary, marginTop: 16 }}>
            If you can help with any of these, contact{" "}
            <a href="mailto:research@teg-blue.org" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              research@teg-blue.org
            </a>
          </p>
        </section>

        {/* Author */}
        <section style={{ marginBottom: 32 }}>
          <AuthorBlock />
        </section>

        {/* Cross-site link */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <Link href="/how-it-works" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            How It Works →
          </Link>
          <Link href="/publications" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            Publications →
          </Link>
          <a href="mailto:research@teg-blue.org" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            Research contact →
          </a>
          <a
            href="https://teg-blue.com/emotional-tools"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}
          >
            Emotional Tools (teg-blue.com) →
          </a>
        </div>

      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Methodology", url: "/methodology" },
            ])
          ),
        }}
      />

      {/* FAQ Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Methodology | TEG-Blue",
              url: "https://teg-blue.org/methodology",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
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
