import { loadAllNodes } from "@/src/lib/content";
import { BG, FONT, SPACING } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import GlossaryList from "./GlossaryList";

export const metadata = {
  title: "Glossary",
  description: "Key terms and concepts used in TEG-Blue research on emotional regulation and nervous system states.",
};

export default function GlossaryPage() {
  const terms = loadAllNodes("glossary");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/glossary" />

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        <GlossaryList terms={terms} />
      </main>

      <SiteFooter />
    </div>
  );
}
