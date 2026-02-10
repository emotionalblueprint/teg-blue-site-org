import { loadAllContent } from "@/src/lib/content";
import { BG, SPACING, FONT } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ContentGrid } from "@/src/components";

export const metadata = {
  title: "TEG-Blue Research Platform",
  description: "Open science publishing for emotional regulation research. Publications, theories, frameworks, and methodology.",
};

export default function ResearchHub() {
  // Load all content at build time (Server Component)
  const allContent = loadAllContent();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/" />

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {/* Hero Section */}
        <section style={{ marginBottom: 40 }}>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              maxWidth: 600,
            }}
          >
            Peer-reviewed publications, foundational theories, and open methodology
            for understanding emotional regulation through the nervous system.
            All content is designed to be readable by both humans and AI systems.
          </p>
        </section>

        {/* Content Grid */}
        <ContentGrid items={allContent} />
      </main>

      <SiteFooter />
    </div>
  );
}
