import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ExpandableSection } from "@/src/components";

export const metadata = {
  title: "Collaborate",
  description: "Collaborate with TEG-Blue research. Opportunities for researchers, practitioners, and organizations.",
};

const collaborationTypes = [
  {
    id: "researchers",
    title: "For Researchers",
    defaultOpen: true,
    content: `We welcome collaboration with researchers in:

• Psychology and psychiatry
• Neuroscience and polyvagal research
• Attachment and developmental studies
• Natural language processing
• Computational approaches to mental health

**How to collaborate:**
1. Review our published methodology
2. Contact us with your research proposal
3. We can provide access to anonymized datasets
4. Co-authorship opportunities available for significant contributions

All collaborations follow open science principles with shared credit and open access publication.`,
  },
  {
    id: "practitioners",
    title: "For Practitioners",
    content: `Therapists, coaches, and mental health professionals can:

• Use TEG-Blue tools in clinical practice (free for individual use)
• Contribute case studies (anonymized) to validation research
• Provide feedback on tool usability and clinical relevance
• Join our practitioner advisory group

We particularly value input from practitioners working with:
- Trauma-informed care
- Couples and family therapy
- Somatic approaches
- Attachment-based interventions`,
  },
  {
    id: "organizations",
    title: "For Organizations",
    content: `Educational institutions, healthcare organizations, and research centers can:

• License TEG-Blue tools for organizational use
• Participate in multi-site validation studies
• Access custom training and implementation support
• Contribute to framework development

We offer research partnerships with:
- Universities and research institutes
- Mental health organizations
- Healthcare systems
- Educational institutions`,
  },
  {
    id: "developers",
    title: "For Developers",
    content: `The TEG-Blue research platform is built on open principles:

• This website is open source
• APIs for research data access (coming soon)
• Contribute to the codebase
• Build integrations with your applications

**Tech stack:**
- Next.js 14 (React)
- JSON-based content management
- Static generation for performance
- Tailwind CSS for styling

See our GitHub repository for contribution guidelines.`,
  },
];

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
          Collaborate
        </h1>
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            marginBottom: 32,
            maxWidth: 600,
          }}
        >
          TEG-Blue is an open research initiative. We welcome collaboration
          with researchers, practitioners, organizations, and developers.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {collaborationTypes.map((type) => (
            <ExpandableSection
              key={type.id}
              title={type.title}
              type="collaboration"
              defaultOpen={type.defaultOpen}
              id={type.id}
            >
              <div
                style={{
                  paddingTop: 8,
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.8,
                }}
              >
                {type.content}
              </div>
            </ExpandableSection>
          ))}
        </div>

        {/* Contact */}
        <div
          style={{
            marginTop: 40,
            padding: 24,
            background: BG.card,
            borderRadius: 8,
            border: `1px solid ${BORDER.default}`,
            borderLeft: `3px solid ${SPECTRUM.azure}`,
          }}
        >
          <h2
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            Get in Touch
          </h2>
          <p
            style={{
              fontSize: 13,
              color: TEXT.secondary,
              marginBottom: 16,
              lineHeight: 1.7,
            }}
          >
            Interested in collaborating? We'd love to hear from you.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:research@teg-blue.org"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                background: hexToRgba(SPECTRUM.blue, 0.1),
                border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.3)}`,
                borderRadius: 6,
                color: SPECTRUM.blue,
                fontWeight: 500,
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              research@teg-blue.org
            </a>
            <a
              href="https://teg-blue.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                background: "transparent",
                border: `1px solid ${BORDER.default}`,
                borderRadius: 6,
                color: TEXT.muted,
                fontWeight: 500,
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              teg-blue.com ↗
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
