import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";
import * as content from "@/src/content/f7-content";

const framework = getFramework("F7");
const prev = getPrevFramework("F7");
const next = getNextFramework("F7");

export const metadata = {
  title: "Domination Regulates — TEG-Blue Research",
  description: "F7 traces the pathway from defence through strategy to domination. Built through reinforcement, not born. The Crossroads, five-stage escalation pathway, empathy gating model, and addiction logic at the domination end. Causality and accountability are separable. Built on abuse research, behavioural reinforcement, and trauma psychology.",
  keywords: ["domination regulates", "defence to domination", "escalation pathway", "the crossroads", "empathy gating", "coercive control", "moral disengagement", "intervention windows"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f7" },
  openGraph: {
    title: "Domination Regulates — How Defence Becomes Strategy Becomes Domination",
    description: "F7 traces the pathway from defence through strategy to domination. Built through reinforcement, not born. The Crossroads, five-stage escalation pathway, empathy gating model, and addiction logic at the domination end. Causality and accountability are separable. Built on abuse research, behavioural reinforcement, and trauma psychology.",
    url: "https://teg-blue.org/frameworks/f7",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F7Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} content={content} />;
}
