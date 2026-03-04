/**
 * TEG-Blue Research Platform — Connection Utilities
 *
 * Routing helpers for the content connection graph.
 * No fs dependency — safe for both server and client components.
 */

export function getConnectionHref(conn) {
  const routes = {
    publication: `/publications/${conn.targetSlug}`,
    "working-paper": `/publications/${conn.targetSlug}`,
    theory: `/scientific-foundations#${conn.targetSlug}`,
    glossary: `/glossary#${conn.targetSlug}`,
    framework: `/framework/${conn.targetSlug}`,
  };
  return routes[conn.targetType] || `/${conn.targetSlug}`;
}

export const CONNECTION_LABELS = {
  cites: "Built on",
  validates: "Validates",
  "part-of": "Part of",
  defines: "Defines",
  extends: "Extends",
  related: "Related",
};
