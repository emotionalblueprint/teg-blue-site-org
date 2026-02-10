"use client";

import Link from "next/link";
import { BG, TEXT, BORDER, FONT, TRANSITION, getContentTypeColor } from "../styles/tokens";
import TypeTag from "./TypeTag";

/**
 * ConnectionCard — Links between research nodes
 * 
 * Shows content type via top border color.
 * Displays connection type label (Built on, Validates, etc.)
 * 
 * @param {string} type - Target content type (for color)
 * @param {string} title - Target node title
 * @param {string} subtitle - Optional secondary info
 * @param {string} connectionType - Relationship label
 * @param {string} href - Link to target node
 */

export default function ConnectionCard({ 
  type, 
  title, 
  subtitle, 
  connectionType,
  href = "#",
}) {
  const color = getContentTypeColor(type);

  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
    >
      <div
        className="connection-card"
        style={{
          borderRadius: 8,
          padding: "14px 16px",
          background: BG.card,
          border: `1px solid ${BORDER.default}`,
          borderTop: `3px solid ${color}`,
          cursor: "pointer",
          transition: `all ${TRANSITION.normal}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <TypeTag type={type} size="micro" />
          <span
            style={{
              fontFamily: FONT.mono,
              fontSize: 10,
              fontWeight: 500,
              color: TEXT.muted,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {connectionType}
          </span>
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
            fontFamily: FONT.display,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: 12, color: TEXT.muted, marginTop: 3 }}>
            {subtitle}
          </div>
        )}
      </div>

      <style jsx>{`
        .connection-card:hover {
          border-color: ${BORDER.hover};
          transform: translateY(-1px);
        }
      `}</style>
    </Link>
  );
}
