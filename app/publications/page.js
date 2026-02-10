import Link from "next/link";
import { loadAllNodes } from "@/src/lib/content";
import { BG, TEXT, BORDER, FONT, SPACING, getContentTypeColor, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, TypeTag, StatusBadge } from "@/src/components";

export const metadata = {
  title: "Publications",
  description: "Peer-reviewed publications and working papers from TEG-Blue research on emotional regulation and nervous system states.",
};

export default function PublicationsPage() {
  const publications = loadAllNodes("publication");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/publications" />

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: TEXT.primary,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          Publications
        </h1>
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            marginBottom: 32,
            maxWidth: 600,
          }}
        >
          Peer-reviewed research, working papers, and validation studies.
          All publications include DOI links and are designed for both human and AI readability.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {publications.map((pub) => (
            <PublicationCard key={pub.slug} publication={pub} />
          ))}

          {publications.length === 0 && (
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
              No publications yet. Check back soon.
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function PublicationCard({ publication }) {
  const color = getContentTypeColor(publication.type);

  return (
    <Link
      href={`/publications/${publication.slug}`}
      style={{ textDecoration: "none" }}
    >
      <article
        style={{
          padding: "20px 24px",
          borderRadius: 8,
          background: BG.card,
          border: `1px solid ${BORDER.default}`,
          borderLeft: `3px solid ${color}`,
          transition: "all 200ms ease",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <TypeTag type={publication.type} size="small" />
          <StatusBadge status={publication.status} />
        </div>

        <h2
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: TEXT.primary,
            marginBottom: 6,
            lineHeight: 1.3,
          }}
        >
          {publication.title}
        </h2>

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            color: TEXT.secondary,
            marginBottom: 10,
          }}
        >
          {publication.summary}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 11,
            fontFamily: FONT.mono,
            color: TEXT.hint,
          }}
        >
          <span>{publication.author}</span>
          {publication.date && <span>{publication.date}</span>}
          {publication.doi && (
            <span style={{ color: hexToRgba(color, 0.8) }}>
              DOI: {publication.doi}
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}
