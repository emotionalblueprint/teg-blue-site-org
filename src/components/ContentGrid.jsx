"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, TRANSITION, SPECTRUM,
  getContentTypeColor, getContentTypeLabel, hexToRgba, gradientCardBg
} from "../styles/tokens";
import TypeTag from "./TypeTag";
import StatusBadge from "./StatusBadge";
import { SearchInput } from "./SharedComponents";

/**
 * ContentGrid — Filterable grid of all research content
 *
 * Used on the hub page. Shows all publications, theories, glossary terms.
 * Filters by type. Searches by title, summary, tags.
 */

const FILTER_OPTIONS = [
  { key: "all", label: "All", color: SPECTRUM.blue },
  { key: "publication", label: "Publications", color: SPECTRUM.blue },
  { key: "theory", label: "Foundations", color: SPECTRUM.indigo },
  { key: "glossary", label: "Glossary", color: SPECTRUM.sky },
  { key: "framework", label: "Frameworks", color: SPECTRUM.cobalt },
];

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

export default function ContentGrid({ items = [] }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = items.filter((item) => {
    // Type filter
    if (filter !== "all" && item.type !== filter) return false;

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      const inTitle = item.title?.toLowerCase().includes(searchLower);
      const inSummary = item.summary?.toLowerCase().includes(searchLower);
      const inTags = item.tags?.some(t => t.toLowerCase().includes(searchLower));
      if (!inTitle && !inSummary && !inTags) return false;
    }

    return true;
  });

  return (
    <div>
      {/* Search */}
      <div style={{ marginBottom: 20 }}>
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search publications, theories, terms..."
        />
      </div>

      {/* Filter Pills */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {FILTER_OPTIONS.map((opt) => {
          const isActive = filter === opt.key;
          const count = opt.key === "all"
            ? items.length
            : items.filter(i => i.type === opt.key).length;

          if (count === 0 && opt.key !== "all") return null;

          return (
            <button
              key={opt.key}
              onClick={() => setFilter(opt.key)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 6,
                border: `1px solid ${isActive ? hexToRgba(opt.color, 0.4) : BORDER.default}`,
                background: isActive ? hexToRgba(opt.color, 0.1) : "transparent",
                fontFamily: FONT.display,
                fontSize: 13,
                fontWeight: 500,
                color: isActive ? opt.color : TEXT.muted,
                cursor: "pointer",
                transition: `all ${TRANSITION.normal}`,
              }}
            >
              {opt.label}
              <span style={{
                fontFamily: FONT.mono,
                fontSize: 10,
                opacity: 0.7
              }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div style={{
        fontSize: 12,
        color: TEXT.hint,
        marginBottom: 16,
        fontFamily: FONT.mono,
      }}>
        {filtered.length} {filtered.length === 1 ? "result" : "results"}
        {search && ` for "${search}"`}
      </div>

      {/* Content Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {filtered.map((item) => (
          <ContentCard key={`${item.type}-${item.slug}`} item={item} />
        ))}

        {filtered.length === 0 && (
          <div style={{
            padding: 40,
            textAlign: "center",
            color: TEXT.muted,
            background: BG.card,
            borderRadius: 8,
            border: `1px solid ${BORDER.default}`,
          }}>
            No results found. Try a different search or filter.
          </div>
        )}
      </div>
    </div>
  );
}

function ContentCard({ item }) {
  const color = getContentTypeColor(item.type);
  const href = getHref(item);

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <article
        className="content-card"
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
          .content-card:hover {
            border-color: ${hexToRgba(color, 0.4)};
            background: ${hexToRgba(color, 0.06)};
            transform: translateX(2px);
          }
        `}</style>
      </article>
    </Link>
  );
}
