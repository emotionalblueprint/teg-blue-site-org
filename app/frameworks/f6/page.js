import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F6");
const prev = getPrevFramework("F6");
const next = getNextFramework("F6");

export const metadata = {
  title: "Bias as Regulation — TEG-Blue Research",
  description: framework.summary,
  keywords: ["bias as regulation", "state-dependent perception", "perceptual certainty", "dehumanization gradient", "motivated reasoning", "identity threat", "update capacity", "bias correction"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f6" },
  openGraph: {
    title: "Bias as Regulation — How Perception Becomes Protection",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f6",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F6Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
