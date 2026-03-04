/**
 * ConnectedResearch — Server component for rendering connection cards
 *
 * Takes a content node's slug and type, loads it from JSON,
 * resolves connections, and renders ConnectionCard grid.
 *
 * Usage:
 *   <ConnectedResearch slug="f1-emotional-gradient" type="framework" />
 */

import { loadNode, resolveConnections } from "@/src/lib/content";
import { getConnectionHref, CONNECTION_LABELS } from "@/src/lib/connections";
import { TEXT, FONT, SPACING } from "@/src/styles/tokens";
import ConnectionCard from "./ConnectionCard";

const GROUP_ORDER = ["theory", "glossary", "publication", "working-paper", "framework"];
const GROUP_TITLES = {
  theory: "Research Traditions",
  glossary: "Key Terms",
  publication: "Publications",
  "working-paper": "Working Papers",
  framework: "Related Frameworks",
};

export default function ConnectedResearch({ slug, type }) {
  const node = loadNode(type, slug);
  if (!node) return null;

  const resolved = resolveConnections(node);
  if (!resolved.connections || resolved.connections.length === 0) return null;

  // Group connections by target type
  const groups = {};
  for (const conn of resolved.connections) {
    const key = conn.targetType;
    if (!groups[key]) groups[key] = [];
    groups[key].push(conn);
  }

  // Render groups in defined order
  const orderedKeys = GROUP_ORDER.filter((k) => groups[k]);

  return (
    <section style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontFamily: FONT.display,
          fontSize: 13,
          fontWeight: 600,
          color: TEXT.muted,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          marginBottom: 20,
        }}
      >
        Connected Research
      </h2>

      {orderedKeys.map((key) => (
        <div key={key} style={{ marginBottom: 24 }}>
          <h3
            style={{
              fontFamily: FONT.mono,
              fontSize: 11,
              fontWeight: 600,
              color: TEXT.hint,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: 12,
            }}
          >
            {GROUP_TITLES[key] || key}
          </h3>
          <nav
            aria-label={`${GROUP_TITLES[key] || key} connections`}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: SPACING.gridGap,
            }}
          >
            {groups[key].map((conn, i) => (
              <ConnectionCard
                key={i}
                type={conn.targetType}
                title={conn.targetTitle || conn.label || conn.targetSlug}
                subtitle={conn.targetAuthor}
                connectionType={CONNECTION_LABELS[conn.type] || conn.type}
                href={getConnectionHref(conn)}
              />
            ))}
          </nav>
        </div>
      ))}
    </section>
  );
}
