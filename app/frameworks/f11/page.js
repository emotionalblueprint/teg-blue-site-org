import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F11");
const prev = getPrevFramework("F11");
const next = getNextFramework("F11");

export const metadata = {
  title: "The Emotional Paradoxes — TEG-Blue Research",
  description: framework.summary,
  keywords: ["emotional paradoxes", "multi-rationality", "holding capacity", "paradox tolerance", "true coherence", "false coherence", "state-dependent cognition", "complexity emergence"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f11" },
  openGraph: {
    title: "The Emotional Paradoxes — Multi-Rationality and Holding Capacity",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f11",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F11Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
