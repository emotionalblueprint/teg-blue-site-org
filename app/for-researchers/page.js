import { loadAllContent } from "@/src/lib/content";
import { BG, SPACING, FONT, TEXT } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, HubContent } from "@/src/components";

export const metadata = {
  title: "For Researchers",
  description: "Publications, theoretical foundations, and research resources for the TEG-Blue framework.",
  alternates: {
    canonical: "https://teg-blue.org/for-researchers",
  },
};

export default function ForResearchersPage() {
  const allContent = loadAllContent();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/for-researchers" />

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        <header style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}
          >
            For Researchers
          </h1>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            Publications, theoretical foundations, and resources for working with the TEG-Blue framework.
          </p>
        </header>

        <HubContent items={allContent} />
      </main>

      <SiteFooter />
    </div>
  );
}
