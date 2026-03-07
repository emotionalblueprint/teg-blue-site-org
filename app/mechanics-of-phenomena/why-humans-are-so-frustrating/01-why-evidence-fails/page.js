import { BG, FONT } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import MechanicsLayout from "../../MechanicsLayout";
import Piece01WhyEvidenceFails from "../../_pieces/Piece01WhyEvidenceFails";

export const metadata = {
  title: "Why Evidence Doesn\u2019t Work \u2014 And What Actually Does | TEG-Blue",
  description:
    "Why presenting evidence to someone in a threat-management mode produces defensiveness, not updating. A diagnostic for the frustrated and the rigorous.",
  alternates: {
    canonical:
      "https://teg-blue.org/mechanics-of-phenomena/why-humans-are-so-frustrating/01-why-evidence-fails",
  },
  openGraph: {
    title: "Why Evidence Doesn\u2019t Work | Mechanics of Phenomena",
    description:
      "Why presenting evidence to someone in a threat-management mode produces defensiveness, not updating.",
    url: "https://teg-blue.org/mechanics-of-phenomena/why-humans-are-so-frustrating/01-why-evidence-fails",
    type: "article",
    siteName: "TEG-Blue Research",
  },
};

export default function Piece01Page() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/mechanics-of-phenomena" />

      <MechanicsLayout
        activePiece="01-why-evidence-fails"
        showBackLink={true}
      >
        <Piece01WhyEvidenceFails />
      </MechanicsLayout>

      <SiteFooter />
    </div>
  );
}
