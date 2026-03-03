"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, TRANSITION, SPECTRUM,
  getContentTypeColor, hexToRgba, gradientCardBg
} from "../styles/tokens";
import TypeTag from "./TypeTag";
import StatusBadge from "./StatusBadge";
import ExpandableSection from "./ExpandableSection";

/**
 * HubContent — Two-section hub layout
 *
 * Separates established theoretical foundations from TEG-Blue's
 * original research contributions, giving proper weight to each.
 */

function isFoundation(item) {
  if (item.type === "theory") return true;
  if (item.type === "glossary" && item.origin === "established-term") return true;
  return false;
}

function getHref(item) {
  const routes = {
    publication: `/publications/${item.slug}`,
    "working-paper": `/publications/${item.slug}`,
    theory: `/foundations#${item.slug}`,
    glossary: `/glossary#${item.slug}`,
    framework: `/frameworks/${item.slug}`,
  };
  return routes[item.type] || `/${item.slug}`;
}

export default function HubContent({ items = [] }) {
  const foundations = items.filter(isFoundation);
  const tegBlue = items.filter((item) => !isFoundation(item));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
      {/* ─── Theoretical Foundations ─── */}
      <section>
        <SectionHeader
          title="Theoretical Foundations"
          color={SPECTRUM.indigo}
        />
        <p style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: TEXT.secondary,
          margin: "12px 0 24px",
          maxWidth: 600,
        }}>
          Established research that TEG-Blue builds on.
          These theories have been developed and validated by independent
          researchers across neuroscience, psychology, and related fields.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {foundations.map((item) => (
            item.type === "theory"
              ? <TheoryCard key={`${item.type}-${item.slug}`} item={item} />
              : <HubCard key={`${item.type}-${item.slug}`} item={item} />
          ))}
        </div>
      </section>

      {/* ─── TEG-Blue Research ─── */}
      <section>
        <SectionHeader
          title="TEG-Blue Research"
          color={SPECTRUM.blue}
        />
        <p style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: TEXT.secondary,
          margin: "12px 0 6px",
          maxWidth: 600,
        }}>
          Original contributions from the TEG-Blue project.
          This work proposes new connections between established theories
          and is in early stages of independent validation.
        </p>
        <p style={{
          fontSize: 12,
          lineHeight: 1.6,
          color: TEXT.muted,
          margin: "0 0 24px",
          maxWidth: 600,
          fontStyle: "italic",
        }}>
          The originality is not in the individual theories — it is in
          the connections between them.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {tegBlue.map((item) => (
            <HubCard key={`${item.type}-${item.slug}`} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

/* ─── Section Header ─── */

function SectionHeader({ title, color }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}>
      <div style={{
        width: 3,
        height: 20,
        background: color,
        borderRadius: 2,
      }} />
      <h2 style={{
        fontSize: 18,
        fontWeight: 600,
        color: TEXT.primary,
        letterSpacing: "-0.01em",
        margin: 0,
      }}>
        {title}
      </h2>
    </div>
  );
}

/* ─── Hub Card ─── */

function HubCard({ item }) {
  const color = getContentTypeColor(item.type);
  const href = getHref(item);

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <article
        className="hub-card"
        style={{
          padding: "16px 20px",
          borderRadius: 8,
          background: gradientCardBg(color),
          border: `1px solid ${BORDER.default}`,
          borderLeft: `3px solid ${color}`,
          transition: `all ${TRANSITION.normal}`,
          cursor: "pointer",
        }}
      >
        {/* Header Row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 8,
          flexWrap: "wrap",
        }}>
          <TypeTag type={item.type} size="small" />
          {item.status && <StatusBadge status={item.status} />}
          {item.originAuthor && (
            <span style={{
              fontSize: 11,
              color: TEXT.muted,
              fontFamily: FONT.mono,
            }}>
              {item.originAuthor}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: 15,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 6,
          lineHeight: 1.3,
        }}>
          {item.title}
        </h3>

        {/* Summary */}
        {item.summary && (
          <p style={{
            fontSize: 13,
            lineHeight: 1.6,
            color: TEXT.secondary,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {item.summary}
          </p>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div style={{
            display: "flex",
            gap: 6,
            marginTop: 10,
            flexWrap: "wrap",
          }}>
            {item.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "2px 8px",
                  borderRadius: 4,
                  background: hexToRgba(color, 0.08),
                  fontSize: 10,
                  fontFamily: FONT.mono,
                  color: TEXT.muted,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <style jsx>{`
          .hub-card:hover {
            border-color: ${hexToRgba(color, 0.4)};
            background: ${hexToRgba(color, 0.06)};
            transform: translateX(2px);
          }
        `}</style>
      </article>
    </Link>
  );
}

/* ─── Expandable Theory Card ─── */

function TheoryCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const color = getContentTypeColor(item.type);

  return (
    <article
      style={{
        borderRadius: 8,
        background: gradientCardBg(color),
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
        overflow: "hidden",
      }}
    >
      {/* Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ flex: 1 }}>
          {/* Header Row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 6,
            flexWrap: "wrap",
          }}>
            <TypeTag type={item.type} size="small" />
            {item.status && <StatusBadge status={item.status} />}
            {item.originAuthor && (
              <span style={{
                fontSize: 11,
                color: TEXT.muted,
                fontFamily: FONT.mono,
              }}>
                {item.originAuthor}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: 15,
            fontWeight: 600,
            color: TEXT.primary,
            margin: 0,
            lineHeight: 1.3,
          }}>
            {item.title}
          </h3>
        </div>

        {/* Expand Icon */}
        <span style={{
          fontSize: 18,
          color: TEXT.muted,
          transition: `transform ${TRANSITION.normal}`,
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}>
          ▾
        </span>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div style={{
          padding: "0 20px 20px",
          borderTop: `1px solid ${BORDER.default}`,
        }}>
          {/* Summary */}
          {item.summary && (
            <p style={{
              fontSize: 13,
              lineHeight: 1.7,
              color: TEXT.secondary,
              margin: "16px 0",
            }}>
              {item.summary}
            </p>
          )}

          {/* Content Sections */}
          {item.content && item.content.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {item.content.map((block) => (
                <ExpandableSection
                  key={block.id}
                  title={block.title}
                  type={item.type}
                  defaultOpen={block.defaultOpen}
                  id={`${item.slug}-${block.id}`}
                >
                  <p style={{ margin: 0, paddingTop: 8 }}>{block.content}</p>
                </ExpandableSection>
              ))}
            </div>
          )}

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div style={{
              display: "flex",
              gap: 6,
              marginTop: 16,
              flexWrap: "wrap",
            }}>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "2px 8px",
                    borderRadius: 4,
                    background: hexToRgba(color, 0.08),
                    fontSize: 10,
                    fontFamily: FONT.mono,
                    color: TEXT.muted,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
