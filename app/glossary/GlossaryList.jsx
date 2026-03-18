"use client";

import { useState } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, getContentTypeColor, hexToRgba } from "@/src/styles/tokens";
import { SearchInput, TypeTag, ExpandableSection, StatusBadge } from "@/src/components";

// Framework URL mapping for internal linking
const FRAMEWORK_URLS = {
  F1: "/framework/f1-emotional-gradient",
  F2: "/framework/f2-awareness-calibration",
  F3: "/framework/f3-false-coherence",
  F4: "/framework/f4-rules-regulate",
  F5: "/framework/f5-worth-hierarchies",
  F6: "/framework/f6-bias-regulates",
  F7: "/framework/f7-domination-regulates",
  F8: "/framework/f8-repairing-awareness",
  F9: "/framework/f9-neurodivergence-variation",
  F10: "/framework/f10-generational-bridges",
  F11: "/framework/f11-emotional-paradoxes",
  F12: "/framework/f12-two-information-systems",
  M1: "/model/m1-nervous-system-signaling",
  M2: "/model/m2-three-awareness-capacities",
  M3: "/model/m3-regulation-capacities",
};

// Framework to Arc mapping
const FRAMEWORK_ARC = {
  1: "Formation",
  2: "Formation",
  3: "Formation",
  4: "Scaling",
  5: "Scaling",
  6: "Scaling",
  7: "Turning Point",
  8: "Healing",
  9: "Healing",
  10: "Healing",
  11: "Integration",
  12: "Integration",
};

// Arc order for sorting
const ARC_ORDER = ["Formation", "Scaling", "Turning Point", "Healing", "Integration", "Models", "General"];

// Sort options
const SORT_OPTIONS = [
  { value: "alphabetical", label: "Alphabetical (A-Z)" },
  { value: "framework", label: "By Framework (F1 → F12, M1 → M3)" },
  { value: "arc", label: "By Arc" },
  { value: "type", label: "By Type" },
];

export default function GlossaryList({ terms = [] }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("alphabetical");

  const filtered = terms.filter((term) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      term.title?.toLowerCase().includes(searchLower) ||
      term.definition?.toLowerCase().includes(searchLower) ||
      term.commonUnderstanding?.toLowerCase().includes(searchLower) ||
      term.tags?.some((t) => t.toLowerCase().includes(searchLower)) ||
      term.aliases?.some((a) => a.toLowerCase().includes(searchLower))
    );
  });

  // Helper: get a sortable value from framework (numeric or string like "M3")
  const fwSortKey = (fw) => {
    if (!fw) return 99;
    if (typeof fw === "number") return fw;
    // Model strings: M1=13, M2=14, M3=15
    const m = String(fw).match(/^M(\d+)$/);
    return m ? 12 + parseInt(m[1], 10) : 99;
  };

  // Helper: get display label from framework value
  const fwLabel = (fw) => {
    if (!fw) return "General";
    if (typeof fw === "string") return fw; // "M3" stays "M3"
    return `F${fw}`;
  };

  // Helper: get arc name from framework value
  const fwArc = (fw) => {
    if (!fw) return "General";
    if (typeof fw === "string") return "Models";
    return FRAMEWORK_ARC[fw] || "General";
  };

  // Sort based on selected option
  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "framework":
        // Sort by framework number, then alphabetically within
        const fwA = fwSortKey(a.framework);
        const fwB = fwSortKey(b.framework);
        if (fwA !== fwB) return fwA - fwB;
        return a.title.localeCompare(b.title);
      case "arc":
        // Sort by arc, then framework, then alphabetically
        const arcA = fwArc(a.framework);
        const arcB = fwArc(b.framework);
        const arcOrderA = ARC_ORDER.indexOf(arcA);
        const arcOrderB = ARC_ORDER.indexOf(arcB);
        if (arcOrderA !== arcOrderB) return arcOrderA - arcOrderB;
        const fwA2 = fwSortKey(a.framework);
        const fwB2 = fwSortKey(b.framework);
        if (fwA2 !== fwB2) return fwA2 - fwB2;
        return a.title.localeCompare(b.title);
      case "type":
        // Sort by type, then alphabetically
        const typeA = a.type || "zzz";
        const typeB = b.type || "zzz";
        if (typeA !== typeB) return typeA.localeCompare(typeB);
        return a.title.localeCompare(b.title);
      default:
        // Alphabetical
        return a.title.localeCompare(b.title);
    }
  });

  // Group terms for display when sorting by framework or arc
  const getGroupedTerms = () => {
    if (sortBy === "framework") {
      const groups = {};
      sorted.forEach((term) => {
        const fw = fwLabel(term.framework);
        if (!groups[fw]) groups[fw] = [];
        groups[fw].push(term);
      });
      return groups;
    }
    if (sortBy === "arc") {
      const groups = {};
      sorted.forEach((term) => {
        const arc = fwArc(term.framework);
        if (!groups[arc]) groups[arc] = [];
        groups[arc].push(term);
      });
      // Return in arc order
      const orderedGroups = {};
      ARC_ORDER.forEach((arc) => {
        if (groups[arc]) orderedGroups[arc] = groups[arc];
      });
      return orderedGroups;
    }
    if (sortBy === "type") {
      const groups = {};
      sorted.forEach((term) => {
        const type = term.type || "other";
        if (!groups[type]) groups[type] = [];
        groups[type].push(term);
      });
      return groups;
    }
    return null;
  };

  const groupedTerms = getGroupedTerms();

  return (
    <div id="glossary-terms">
      <h1
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: TEXT.primary,
          marginBottom: 8,
          letterSpacing: "-0.02em",
        }}
      >
        Glossary
      </h1>
      <p
        style={{
          fontSize: 14,
          color: TEXT.secondary,
          marginBottom: 24,
          maxWidth: 600,
        }}
      >
        Key terms and concepts used throughout TEG-Blue research.
        Each term includes its definition, context, and connections to other research.
      </p>

      {/* Search and Sort Controls */}
      <div id="glossary-search" style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap", alignItems: "flex-end" }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search terms..."
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: 11,
              fontFamily: FONT.mono,
              color: TEXT.muted,
              marginBottom: 6,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Sort by
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: "10px 32px 10px 12px",
              fontSize: 13,
              fontFamily: FONT.display,
              color: TEXT.primary,
              background: BG.card,
              border: `1px solid ${BORDER.default}`,
              borderRadius: 6,
              cursor: "pointer",
              appearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
              minWidth: 180,
            }}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div
        style={{
          fontSize: 12,
          color: TEXT.hint,
          marginBottom: 16,
          fontFamily: FONT.mono,
        }}
      >
        {sorted.length} {sorted.length === 1 ? "term" : "terms"}
        {search && ` matching "${search}"`}
      </div>

      {/* Terms List */}
      <div id="glossary-list" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {groupedTerms ? (
          // Grouped display
          Object.entries(groupedTerms).map(([groupName, groupTerms]) => (
            <div key={groupName} style={{ marginBottom: 24 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: FONT.mono,
                  color: SPECTRUM.blue,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "12px 0 8px",
                  borderBottom: `1px solid ${BORDER.default}`,
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>{groupName}</span>
                <span style={{ color: TEXT.hint, fontWeight: 400 }}>
                  ({groupTerms.length})
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {groupTerms.map((term) => (
                  <GlossaryTerm key={term.slug} term={term} />
                ))}
              </div>
            </div>
          ))
        ) : (
          // Flat display (alphabetical)
          sorted.map((term) => (
            <GlossaryTerm key={term.slug} term={term} />
          ))
        )}

        {sorted.length === 0 && (
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
            No terms found. Try a different search.
          </div>
        )}
      </div>
    </div>
  );
}

function GlossaryTerm({ term }) {
  const color = getContentTypeColor(term.type);

  return (
    <article
      id={term.slug}
      style={{
        borderRadius: 8,
        background: BG.card,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ padding: "16px 20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: term.aliases ? 2 : 6,
              }}
            >
              {term.title}
            </h3>
            {term.aliases && term.aliases.length > 0 && (
              <p
                style={{
                  fontSize: 11,
                  fontFamily: FONT.mono,
                  color: TEXT.muted,
                  margin: "0 0 6px 0",
                }}
              >
                Also: {term.aliases.join(", ")}{term.aliasNote ? ` — ${term.aliasNote}` : ""}
              </p>
            )}
            {term.commonUnderstanding ? (
              <div>
                <div style={{ marginBottom: 10 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontFamily: FONT.mono,
                      fontWeight: 600,
                      color: TEXT.muted,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Commonly understood as
                  </span>
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: TEXT.secondary,
                      fontStyle: "italic",
                      margin: "4px 0 0",
                    }}
                  >
                    {term.commonUnderstanding}
                  </p>
                </div>
                <div>
                  <span
                    style={{
                      fontSize: 10,
                      fontFamily: FONT.mono,
                      fontWeight: 600,
                      color: TEXT.muted,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    What the nervous system is actually doing
                  </span>
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: TEXT.secondary,
                      margin: "4px 0 0",
                    }}
                  >
                    {term.definition}
                  </p>
                </div>
              </div>
            ) : (
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: TEXT.secondary,
                  margin: 0,
                }}
              >
                {term.definition || term.summary}
              </p>
            )}
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <StatusBadge status={term.status} />
              <TypeTag type={term.type} size="micro" />
            </div>
        </div>

        {/* Tags */}
        {term.tags && term.tags.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: 6,
              marginTop: 10,
              flexWrap: "wrap",
            }}
          >
            {term.tags.map((tag) => {
              const fwUrl = FRAMEWORK_URLS[tag];
              if (fwUrl) {
                return (
                  <Link
                    key={tag}
                    href={fwUrl}
                    style={{
                      padding: "2px 8px",
                      borderRadius: 4,
                      background: hexToRgba(SPECTRUM.cobalt, 0.1),
                      fontSize: 10,
                      fontFamily: FONT.mono,
                      fontWeight: 600,
                      color: SPECTRUM.cobalt,
                      textDecoration: "none",
                    }}
                  >
                    {tag}
                  </Link>
                );
              }
              return (
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
              );
            })}
          </div>
        )}
      </div>

      {/* Expandable Content */}
      {term.content && term.content.length > 0 && (
        <div style={{ borderTop: `1px solid ${BORDER.default}` }}>
          {term.content.map((block) => (
            <ExpandableSection
              key={block.id}
              title={block.title}
              type={term.type}
              defaultOpen={block.defaultOpen}
              id={`${term.slug}-${block.id}`}
            >
              <p style={{ margin: 0, paddingTop: 8 }}>{block.content}</p>
            </ExpandableSection>
          ))}
        </div>
      )}
    </article>
  );
}
