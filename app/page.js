import { loadAllContent } from "@/src/lib/content";
import { generateResearchHubJsonLd } from "@/src/lib/jsonld";
import { BG, SPACING, FONT, TEXT } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, HubContent } from "@/src/components";

export const metadata = {
  title: "TEG-Blue Research Platform",
  description: "Open science publishing for emotional regulation research. Publications, theories, frameworks, and methodology.",
  alternates: {
    canonical: "https://teg-blue.org",
  },
};

export default function ResearchHub() {
  // Load all content at build time (Server Component)
  const allContent = loadAllContent();
  const jsonLd = generateResearchHubJsonLd();

  return (
    <>
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
          <section style={{ marginBottom: 48 }}>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: TEXT.secondary,
                maxWidth: 600,
              }}
            >
              Open science platform for understanding emotional regulation
              through the nervous system. Built on established research,
              proposing new connections between fields.
            </p>
          </section>

          {/* Two-Section Hub */}
          <HubContent items={allContent} />
        </main>

        <SiteFooter />
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
