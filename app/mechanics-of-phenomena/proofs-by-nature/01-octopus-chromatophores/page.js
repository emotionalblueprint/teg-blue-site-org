import { BG, FONT } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import MechanicsLayout from "../../MechanicsLayout";
import PiecePBN01Octopus from "../../_pieces/PiecePBN01Octopus";

export const metadata = {
  title: "Octopuses Change Color With Their Emotions | TEG-Blue",
  description:
    "The octopus chromatophore system as independent evidence that emotions function as information \u2014 not decoration. A Proof by Nature from TEG-Blue.",
  alternates: {
    canonical:
      "https://teg-blue.org/mechanics-of-phenomena/proofs-by-nature/01-octopus-chromatophores",
  },
  openGraph: {
    title: "Octopuses Change Color With Their Emotions | Proofs by Nature",
    description:
      "The octopus chromatophore system as independent evidence that emotions function as information, not decoration.",
    url: "https://teg-blue.org/mechanics-of-phenomena/proofs-by-nature/01-octopus-chromatophores",
    type: "article",
    siteName: "TEG-Blue Research",
  },
};

export default function PiecePBN01Page() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/mechanics-of-phenomena" />

      <MechanicsLayout
        activePiece="01-octopus-chromatophores"
        showBackLink={true}
      >
        <PiecePBN01Octopus />
      </MechanicsLayout>

      <SiteFooter />
    </div>
  );
}
