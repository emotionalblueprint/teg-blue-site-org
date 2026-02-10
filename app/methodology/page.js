import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ExpandableSection } from "@/src/components";

export const metadata = {
  title: "Methodology",
  description: "Research methodology and standards used in TEG-Blue research, including validation approaches, data collection, and ethical considerations.",
};

const methodologyContent = [
  {
    id: "open-science",
    title: "Open Science Principles",
    defaultOpen: true,
    content: `All TEG-Blue research follows open science principles:

• Pre-registration of studies before data collection
• Open data sharing (anonymized) via Zenodo
• Open access publication of all findings
• Transparent reporting of methodology and results
• Reproducible analysis pipelines documented in public repositories

We believe that emotional regulation research should be accessible to everyone—researchers, practitioners, and individuals seeking self-understanding.`,
  },
  {
    id: "validation-framework",
    title: "Validation Framework",
    content: `Our validation approach uses multiple methods:

1. **Inter-rater Reliability**: Independent raters assess the same samples to ensure consistent identification of regulatory states.

2. **Convergent Validity**: New measures are compared against established instruments (e.g., DERS, AAQ-II) to verify they capture related constructs.

3. **Discriminant Validity**: We test that our measures differentiate between distinct regulatory states, not just general distress.

4. **Ecological Validity**: Studies use naturalistic language samples and real-world contexts, not just laboratory settings.`,
  },
  {
    id: "ethical-standards",
    title: "Ethical Standards",
    content: `All research involving human participants follows ethical guidelines:

• Informed consent obtained before participation
• Right to withdraw at any time without consequence
• Data anonymization before analysis and sharing
• No deception in study design
• Debriefing provided after participation
• Mental health resources offered to all participants

We take particular care with vulnerable populations and ensure appropriate support structures are in place.`,
  },
  {
    id: "ai-integration",
    title: "AI-Readable Research",
    content: `All publications are designed for both human and AI consumption:

• Structured JSON-LD metadata on every page
• Semantic HTML with proper heading hierarchy
• Dublin Core and Schema.org annotations
• Native HTML expandable sections (not JavaScript accordions)
• Clear, consistent terminology throughout

This ensures that AI systems can accurately understand and cite our research, while maintaining human readability.`,
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

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: TEXT.primary,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          Methodology
        </h1>
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            marginBottom: 32,
            maxWidth: 600,
          }}
        >
          How we conduct research at TEG-Blue. Our commitment to open science,
          rigorous validation, and ethical standards.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {methodologyContent.map((section) => (
            <ExpandableSection
              key={section.id}
              title={section.title}
              type="methodology"
              defaultOpen={section.defaultOpen}
              id={section.id}
            >
              <div
                style={{
                  paddingTop: 8,
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.8,
                }}
              >
                {section.content}
              </div>
            </ExpandableSection>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
