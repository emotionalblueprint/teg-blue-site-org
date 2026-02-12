"use client";

import { SPECTRUM, hexToRgba, FONT } from "../styles/tokens";

/**
 * StatusBadge — Content origin and verification indicator
 *
 * Origin status (what kind of content):
 * - established: Recognized research we build on (no verification needed)
 *
 * Verification statuses (for TEG-Blue original content):
 * - draft: Early work, structure may change
 * - open-review: Our synthesis, awaiting verification
 * - source-verified: Key sources manually checked
 * - community-reviewed: Verified by external researcher
 */

const STATUS_MAP = {
  // Origin status (established research)
  "established":        { color: SPECTRUM.indigo, label: "Established", description: "Recognized research that TEG-Blue builds on" },

  // Verification statuses (for TEG-Blue original content)
  "draft":              { color: "#f59e0b", label: "Draft", description: "Early work — structure may change" },
  "open-review":        { color: SPECTRUM.azure, label: "Open for Review", description: "TEG-Blue synthesis — verification welcome" },
  "source-verified":    { color: SPECTRUM.blue, label: "Source Verified", description: "Key sources manually checked" },
  "community-reviewed": { color: "#10b981", label: "Community Reviewed", description: "Verified by external researcher" },

  // Publication statuses (legacy)
  "published":    { color: SPECTRUM.blue,   label: "Published" },
  "preprint":     { color: SPECTRUM.azure,  label: "Preprint" },
  "in-progress":  { color: SPECTRUM.slate,  label: "In Progress" },
  "planned":      { color: SPECTRUM.slate,  label: "Planned" },
};

export default function StatusBadge({ status, showDescription = false }) {
  // No badge for open-review (default state) — only show badges for verified content
  if (status === "open-review" || !status) return null;

  const s = STATUS_MAP[status];
  if (!s) return null;

  return (
    <span
      title={s.description || s.label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 10px",
        borderRadius: 6,
        background: hexToRgba(s.color, 0.1),
        border: `1px solid ${hexToRgba(s.color, 0.18)}`,
        fontFamily: FONT.mono,
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: s.color,
        lineHeight: 1.3,
        whiteSpace: "nowrap",
        cursor: s.description ? "help" : "default",
      }}
    >
      {s.label}
    </span>
  );
}

/**
 * StatusNote — Expanded explanation for page headers
 */
export function StatusNote({ status }) {
  // No note for open-review (default state)
  if (status === "open-review" || !status) return null;

  const s = STATUS_MAP[status];
  if (!s || !s.description) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        padding: "12px 16px",
        borderRadius: 8,
        background: hexToRgba(s.color, 0.05),
        border: `1px solid ${hexToRgba(s.color, 0.15)}`,
        fontSize: 13,
        color: "rgba(255,255,255,0.7)",
        marginTop: 16,
      }}
    >
      <span style={{ color: s.color, fontWeight: 600, flexShrink: 0 }}>Status:</span>
      <span>{s.description} <a href="/collaborate" style={{ color: s.color, textDecoration: "underline" }}>Corrections welcome.</a></span>
    </div>
  );
}
