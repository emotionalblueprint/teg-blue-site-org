import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F5");
const prev = getPrevFramework("F5");
const next = getNextFramework("F5");

export const metadata = {
  title: "Worth Hierarchies Regulate — TEG-Blue Research",
  description: framework.summary,
  keywords: ["worth hierarchies", "filter of worth", "safety proxies", "social capital", "cultural capital", "economic capital", "shame research", "systemic worth sorting"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f5" },
  openGraph: {
    title: "Worth Hierarchies Regulate — How Rules Become Sorting Systems",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f5",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F5Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
