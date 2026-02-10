"use client";

import { SPECTRUM, hexToRgba, FONT } from "../styles/tokens";

/**
 * StatusBadge — Publication status indicator
 * 
 * Shows: Published, Preprint, Working Paper, In Progress, Planned
 */

const STATUS_MAP = {
  published:    { color: SPECTRUM.blue,   label: "Published" },
  preprint:     { color: SPECTRUM.azure,  label: "Preprint" },
  working:      { color: SPECTRUM.indigo, label: "Working Paper" },
  "in-progress": { color: SPECTRUM.slate, label: "In Progress" },
  planned:      { color: SPECTRUM.slate,  label: "Planned" },
};

export default function StatusBadge({ status }) {
  const s = STATUS_MAP[status] || STATUS_MAP.planned;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 8px",
        borderRadius: 6,
        background: hexToRgba(s.color, 0.1),
        border: `1px solid ${hexToRgba(s.color, 0.18)}`,
        fontFamily: FONT.mono,
        fontSize: 9,
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: s.color,
        lineHeight: 1.3,
      }}
    >
      {s.label}
    </span>
  );
}
