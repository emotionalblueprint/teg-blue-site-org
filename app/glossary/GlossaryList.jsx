"use client";

import { useState } from "react";
import { BG, TEXT, BORDER, FONT, TRANSITION, SPECTRUM, getContentTypeColor, hexToRgba } from "@/src/styles/tokens";
import { SearchInput, TypeTag, ExpandableSection, StatusBadge } from "@/src/components";

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
const ARC_ORDER = ["Formation", "Scaling", "Turning Point", "Healing", "Integration", "General"];

// Sort options
const SORT_OPTIONS = [
  { value: "alphabetical", label: "Alphabetical (A-Z)" },
  { value: "framework", label: "By Framework (F1 → F12)" },
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
      term.tags?.some((t) => t.toLowerCase().includes(searchLower))
    );
  });

  // Sort based on selected option
  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "framework":
        // Sort by framework number, then alphabetically within
        const fwA = a.framework || 99;
        const fwB = b.framework || 99;
        if (fwA !== fwB) return fwA - fwB;
        return a.title.localeCompare(b.title);
      case "arc":
        // Sort by arc, then framework, then alphabetically
        const arcA = a.framework ? FRAMEWORK_ARC[a.framework] : "General";
        const arcB = b.framework ? FRAMEWORK_ARC[b.framework] : "General";
        const arcOrderA = ARC_ORDER.indexOf(arcA);
        const arcOrderB = ARC_ORDER.indexOf(arcB);
        if (arcOrderA !== arcOrderB) return arcOrderA - arcOrderB;
        const fwA2 = a.framework || 99;
        const fwB2 = b.framework || 99;
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
        const fw = term.framework ? `F${term.framework}` : "General";
        if (!groups[fw]) groups[fw] = [];
        groups[fw].push(term);
      });
      return groups;
    }
    if (sortBy === "arc") {
      const groups = {};
      sorted.forEach((term) => {
        const arc = term.framework ? FRAMEWORK_ARC[term.framework] : "General";
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
    <div>
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
      <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap", alignItems: "flex-end" }}>
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
              color: TEXT.tertiary,
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
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C4D0DC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
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
          color: TEXT.tertiary,
          marginBottom: 16,
          fontFamily: FONT.mono,
        }}
      >
        {sorted.length} {sorted.length === 1 ? "term" : "terms"}
        {search && ` matching "${search}"`}
      </div>

      {/* Terms List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                <span style={{ color: TEXT.tertiary, fontWeight: 400 }}>
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
              color: TEXT.secondary,
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
                marginBottom: 6,
              }}
            >
              {term.title}
            </h3>
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
            {term.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "2px 8px",
                  borderRadius: 4,
                  background: hexToRgba(color, 0.08),
                  fontSize: 10,
                  fontFamily: FONT.mono,
                  color: TEXT.tertiary,
                }}
              >
                {tag}
              </span>
            ))}
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
