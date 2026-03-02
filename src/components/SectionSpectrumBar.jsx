import Link from "next/link";
import { SPACING } from "@/src/styles/tokens";
import { CONCEPT_COLORS, CONCEPTS } from "@/src/data/concepts";
import { FRAMEWORKS, getPhaseColor, MODELS } from "@/src/data/frameworks";

/**
 * SectionSpectrumBar — Shared horizontal bar of colored segments.
 *
 * Used below SiteHeader on concepts, models, and frameworks hub pages.
 * Each segment links to the corresponding item.
 *
 * Props:
 *   section: "concepts" | "models" | "frameworks"
 *   activeIndex: optional — highlights one segment (used on individual concept pages)
 */

const SECTION_CONFIG = {
  concepts: () =>
    CONCEPTS.map((c, i) => ({
      href: `/concepts/${c.slug}`,
      color: CONCEPT_COLORS[i],
      title: `${c.number}. ${c.name}`,
    })),
  models: () =>
    MODELS.map((m) => ({
      href: m.url,
      color: "#4A9BE8",
      title: m.name,
    })),
  frameworks: () =>
    FRAMEWORKS.map((fw) => ({
      href: `/frameworks/${fw.slug}`,
      color: getPhaseColor(fw.phase),
      title: `${fw.id} — ${fw.name}`,
    })),
};

export default function SectionSpectrumBar({ section, activeIndex }) {
  const segments = SECTION_CONFIG[section]?.() || [];

  return (
    <nav
      aria-label={`${section} overview`}
      style={{
        display: "flex",
        gap: 3,
        maxWidth: SPACING.containerMax,
        margin: "0 auto",
        padding: "12px 24px 0",
      }}
    >
      {segments.map((seg, i) => (
        <Link
          key={seg.href}
          href={seg.href}
          title={seg.title}
          style={{
            flex: 1,
            height: activeIndex != null && i === activeIndex ? 6 : 4,
            borderRadius: 2,
            background: seg.color,
            opacity: activeIndex != null ? (i === activeIndex ? 1 : 0.3) : 0.7,
            transition:
              activeIndex != null
                ? "opacity 150ms ease, height 150ms ease"
                : undefined,
            textDecoration: "none",
            display: "block",
          }}
        />
      ))}
    </nav>
  );
}
