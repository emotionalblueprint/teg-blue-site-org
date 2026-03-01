import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F3");
const prev = getPrevFramework("F3");
const next = getNextFramework("F3");

export const metadata = {
  title: "Adult Cognition & False Coherence — TEG-Blue Research",
  description: framework.summary,
  keywords: ["false coherence", "cognitive replacement", "motivated reasoning", "cognitive dissonance", "identity under pressure", "emotional distortion", "state-dependent cognition", "self-justification"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f3" },
  openGraph: {
    title: "Adult Cognition & False Coherence — How Cognition Maintains Identity Under Pressure",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f3",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F3Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
