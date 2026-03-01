import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F7");
const prev = getPrevFramework("F7");
const next = getNextFramework("F7");

export const metadata = {
  title: "Domination Regulates — TEG-Blue Research",
  description: framework.summary,
  keywords: ["domination regulates", "defence to domination", "escalation pathway", "the crossroads", "empathy gating", "coercive control", "moral disengagement", "intervention windows"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f7" },
  openGraph: {
    title: "Domination Regulates — How Defence Becomes Strategy Becomes Domination",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f7",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F7Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
