import { BG, FONT } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import MechanicsLayout from "../../MechanicsLayout";
import Piece02WhyPeopleChange from "../../_pieces/Piece02WhyPeopleChange";

export const metadata = {
  title: "Why People Are Completely Different Depending on Who\u2019s Watching | TEG-Blue",
  description:
    "How regulatory systems produce context-dependent behavior \u2014 why the same person can be genuinely kind at work and genuinely harmful at home. A diagnostic from TEG-Blue.",
  alternates: {
    canonical:
      "https://teg-blue.org/mechanics-of-phenomena/why-humans-are-so-frustrating/02-why-people-change-by-context",
  },
  openGraph: {
    title: "Why People Are Completely Different Depending on Who\u2019s Watching | Mechanics of Phenomena",
    description:
      "How regulatory systems produce context-dependent behavior. Why the same person can be genuinely kind at work and genuinely harmful at home.",
    url: "https://teg-blue.org/mechanics-of-phenomena/why-humans-are-so-frustrating/02-why-people-change-by-context",
    type: "article",
    siteName: "TEG-Blue Research",
  },
};

export default function Piece02Page() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/mechanics-of-phenomena" />

      <MechanicsLayout
        activePiece="02-why-people-change-by-context"
        showBackLink={true}
      >
        <Piece02WhyPeopleChange />
      </MechanicsLayout>

      <SiteFooter />
    </div>
  );
}
