import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F4");
const prev = getPrevFramework("F4");
const next = getNextFramework("F4");

export const metadata = {
  title: "Rules Regulate — TEG-Blue Research",
  description: framework.summary,
  keywords: ["rules regulate", "collective regulation", "rule internalization", "nervous system compliance", "social norms", "punishment vs accountability", "moral foundations", "collective substitutes"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f4" },
  openGraph: {
    title: "Rules Regulate — How Individual Patterns Scale to Collective Systems",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f4",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F4Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
