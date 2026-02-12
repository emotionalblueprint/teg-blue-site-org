"use client";

import { useState } from "react";
import { BG, TEXT, BORDER, FONT, TRANSITION, getContentTypeColor, hexToRgba } from "@/src/styles/tokens";
import { SearchInput, TypeTag, ExpandableSection, StatusBadge } from "@/src/components";

export default function GlossaryList({ terms = [] }) {
  const [search, setSearch] = useState("");

  const filtered = terms.filter((term) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      term.title?.toLowerCase().includes(searchLower) ||
      term.definition?.toLowerCase().includes(searchLower) ||
      term.tags?.some((t) => t.toLowerCase().includes(searchLower))
    );
  });

  // Sort alphabetically
  const sorted = [...filtered].sort((a, b) => a.title.localeCompare(b.title));

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

      {/* Search */}
      <div style={{ marginBottom: 24 }}>
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search terms..."
        />
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
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {sorted.map((term) => (
          <GlossaryTerm key={term.slug} term={term} />
        ))}

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
                  color: TEXT.muted,
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
