import { BG, FONT } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import MechanicsLayout from "./MechanicsLayout";
import Piece02WhyPeopleChange from "./_pieces/Piece02WhyPeopleChange";

export const metadata = {
  title: "The Mechanics of Phenomena | TEG-Blue Research",
  description:
    "A growing collection where observable phenomena — from science, nature, and human behavior — reveal the structure underneath. Long-form essays by Anna Paretas-Artacho.",
  keywords: [
    "mechanics of phenomena",
    "emotional regulation",
    "pattern recognition",
    "human behavior",
    "systems thinking",
    "TEG-Blue",
    "nervous system",
    "regulatory systems",
  ],
  alternates: {
    canonical: "https://teg-blue.org/mechanics-of-phenomena",
  },
  openGraph: {
    title: "The Mechanics of Phenomena | TEG-Blue",
    description:
      "Observable phenomena reveal the structure underneath. Long-form essays on patterns in human behavior, nature, and systems.",
    url: "https://teg-blue.org/mechanics-of-phenomena",
    type: "website",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mechanics of Phenomena | TEG-Blue",
    description:
      "Observable phenomena reveal the structure underneath. Long-form essays by Anna Paretas-Artacho.",
  },
};

export default function MechanicsOfPhenomenaPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/mechanics-of-phenomena" />

      <MechanicsLayout
        showSectionHeader={true}
        activePiece="02-why-people-change-by-context"
      >
        <Piece02WhyPeopleChange />
      </MechanicsLayout>

      <SiteFooter />
    </div>
  );
}
