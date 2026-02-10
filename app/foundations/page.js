import { loadAllNodes } from "@/src/lib/content";
import { BG, TEXT, BORDER, FONT, SPACING, getContentTypeColor, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, TypeTag, ExpandableSection, ConnectionCard } from "@/src/components";

export const metadata = {
  title: "Foundations",
  description: "Foundational theories that inform TEG-Blue's approach to emotional regulation, including Polyvagal Theory, Attachment Theory, and more.",
};

export default function FoundationsPage() {
  const theories = loadAllNodes("theory");

  // Group by domain if available
  const byDomain = theories.reduce((acc, theory) => {
    const domain = theory.domain || "general";
    if (!acc[domain]) acc[domain] = [];
    acc[domain].push(theory);
    return acc;
  }, {});

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/foundations" />

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
          Foundations
        </h1>
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            marginBottom: 32,
            maxWidth: 600,
          }}
        >
          The theoretical foundations that inform TEG-Blue's framework.
          Each theory is integrated and extended within our model.
        </p>

        {Object.entries(byDomain).map(([domain, domainTheories]) => (
          <section key={domain} style={{ marginBottom: 40 }}>
            {Object.keys(byDomain).length > 1 && (
              <h2
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: TEXT.hint,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: FONT.mono,
                  marginBottom: 16,
                  paddingBottom: 8,
                  borderBottom: `1px solid ${BORDER.default}`,
                }}
              >
                {domain}
              </h2>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {domainTheories.map((theory) => (
                <TheoryCard key={theory.slug} theory={theory} />
              ))}
            </div>
          </section>
        ))}

        {theories.length === 0 && (
          <div
            style={{
              padding: 40,
              textAlign: "center",
              color: TEXT.muted,
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
            }}
          >
            No foundations yet. Check back soon.
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

function TheoryCard({ theory }) {
  const color = getContentTypeColor(theory.type);

  const connectionLabels = {
    cites: "Referenced in",
    validates: "Validates",
    "part-of": "Part of",
    defines: "Defines",
    extends: "Extends",
    related: "Related",
  };

  return (
    <article
      id={theory.slug}
      style={{
        borderRadius: 8,
        background: BG.card,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ padding: "20px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <TypeTag type={theory.type} size="small" />
          {theory.originAuthor && (
            <span
              style={{
                fontSize: 11,
                fontFamily: FONT.mono,
                color: TEXT.muted,
              }}
            >
              {theory.originAuthor}
            </span>
          )}
        </div>

        <h3
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: TEXT.primary,
            marginBottom: 8,
          }}
        >
          {theory.title}
        </h3>

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            color: TEXT.secondary,
            marginBottom: 0,
          }}
        >
          {theory.summary}
        </p>
      </div>

      {/* TEG-Blue Usage */}
      {theory.tegBlueUsage && (
        <div
          style={{
            padding: "12px 24px",
            background: hexToRgba(color, 0.05),
            borderTop: `1px solid ${hexToRgba(color, 0.1)}`,
            fontSize: 13,
            color: TEXT.secondary,
          }}
        >
          <strong style={{ color: color, fontWeight: 600 }}>TEG-Blue Integration:</strong>{" "}
          {theory.tegBlueUsage}
        </div>
      )}

      {/* Expandable Content */}
      {theory.content && theory.content.length > 0 && (
        <div style={{ borderTop: `1px solid ${BORDER.default}` }}>
          {theory.content.map((block) => (
            <ExpandableSection
              key={block.id}
              title={block.title}
              type={theory.type}
              defaultOpen={block.defaultOpen}
              id={`${theory.slug}-${block.id}`}
            >
              <p style={{ margin: 0, paddingTop: 8 }}>{block.content}</p>
            </ExpandableSection>
          ))}
        </div>
      )}
    </article>
  );
}
