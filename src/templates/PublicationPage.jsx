"use client";

/**
 * PublicationPage — Template for /publications/[slug]
 *
 * Renders any publication or working paper using the fractal DNA:
 * IDENTITY → CONTEXT → CORE → CONNECTIONS → DEPTH
 *
 * Receives a resolved ResearchNode as prop.
 */

import { BG, TEXT, FONT, SPACING, BORDER, SPECTRUM, getContentTypeColor } from "../styles/tokens";
import TypeTag from "../components/TypeTag";
import StatusBadge from "../components/StatusBadge";
import ContextBlock from "../components/ContextBlock";
import ExpandableSection from "../components/ExpandableSection";
import ConnectionCard from "../components/ConnectionCard";
import { DepthBar } from "../components/SharedComponents";
import { getConnectionHref } from "../lib/connections";

export default function PublicationPage({ node }) {
  const color = getContentTypeColor(node.type);

  // Build depth actions
  const depthActions = [
    node.doiUrl && { label: "View on Zenodo", href: node.doiUrl, external: true },
    node.preregistration && { label: "Pre-registration", href: node.preregistration, external: true },
    { label: "Cite This", href: "/citations" },
  ].filter(Boolean);

  // Group connections by type for display
  const connectionLabels = {
    cites: "Built on",
    validates: "Validates",
    "part-of": "Part of",
    defines: "Defines",
    extends: "Extends",
    related: "Related",
  };

  return (
    <article
      itemScope
      itemType="https://schema.org/ScholarlyArticle"
      style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${BORDER.default}` }}
    >
      {/* Accent line */}
      <div style={{ height: 3, background: color }} />

      <div style={{ padding: "24px 24px 28px", background: BG.card }}>
        {/* ─── IDENTITY ──────────────────────── */}
        <header style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <TypeTag type={node.type} />
            <StatusBadge status={node.status} />
          </div>
          <h1
            itemProp="name"
            style={{
              fontFamily: FONT.display,
              fontSize: 24,
              fontWeight: 700,
              color: TEXT.primary,
              lineHeight: 1.3,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {node.title}
          </h1>
          <div
            style={{
              marginTop: 8,
              fontFamily: FONT.mono,
              fontSize: 12,
              color: TEXT.hint,
            }}
          >
            <span itemProp="author">{node.author}</span>
            {node.date && <> · <span itemProp="datePublished">{node.date}</span></>}
            {node.doi && (
              <>
                {" · DOI: "}
                <a
                  href={node.doiUrl}
                  itemProp="doi"
                  style={{ color: SPECTRUM.azure, textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {node.doi}
                </a>
              </>
            )}
          </div>
          <meta itemProp="doi" content={node.doi} />
        </header>

        {/* ─── CONTEXT ───────────────────────── */}
        <section style={{ marginBottom: 24 }}>
          <ContextBlock type={node.type} keyFinding={node.keyFinding}>
            <p itemProp="abstract" style={{ margin: 0 }}>
              {node.summary}
            </p>
          </ContextBlock>
        </section>

        {/* ─── CORE ──────────────────────────── */}
        <section style={{ marginBottom: 24 }}>
          {node.content.map((block) => (
            <ExpandableSection
              key={block.id}
              title={block.title}
              type={node.type}
              defaultOpen={block.defaultOpen}
              id={block.id}
            >
              <div
                itemProp="text"
                style={{ paddingTop: 8 }}
                dangerouslySetInnerHTML={{ __html: `<p>${block.content}</p>` }}
              />
            </ExpandableSection>
          ))}
        </section>

        {/* ─── CONNECTIONS ────────────────────── */}
        {node.connections && node.connections.length > 0 && (
          <aside style={{ marginBottom: 24 }}>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 13,
                fontWeight: 600,
                color: TEXT.muted,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 14,
              }}
            >
              Connected Research
            </h2>
            <nav
              aria-label="Related research"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: SPACING.gridGap,
              }}
            >
              {node.connections.map((conn, i) => (
                <ConnectionCard
                  key={i}
                  type={conn.targetType}
                  title={conn.targetTitle || conn.label || conn.targetSlug}
                  subtitle={conn.targetAuthor}
                  connectionType={connectionLabels[conn.type] || conn.type}
                  href={getConnectionHref(conn)}
                />
              ))}
            </nav>
          </aside>
        )}

        {/* ─── DEPTH ─────────────────────────── */}
        <footer>
          <DepthBar actions={depthActions} />
        </footer>
      </div>
    </article>
  );
}
