import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";
import * as content from "@/src/content/f5-content";

const framework = getFramework("F5");
const prev = getPrevFramework("F5");
const next = getNextFramework("F5");

export const metadata = {
  title: "Worth Hierarchies Regulate — TEG-Blue Research",
  description: "F5 reveals how rules become sorting systems through the Filter of Worth — signal access mistaken for human value, signal deprivation internalised as inadequacy. Worth-seeking as nervous system regulation, safety proxies, chronic invisibility as structural compass lock. Built on capital theory, social dominance research, and health psychology.",
  keywords: ["worth hierarchies", "filter of worth", "safety proxies", "social capital", "cultural capital", "economic capital", "shame research", "systemic worth sorting"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f5" },
  openGraph: {
    title: "Worth Hierarchies Regulate — How Rules Become Sorting Systems",
    description: "F5 reveals how rules become sorting systems through the Filter of Worth — signal access mistaken for human value, signal deprivation internalised as inadequacy. Worth-seeking as nervous system regulation, safety proxies, chronic invisibility as structural compass lock. Built on capital theory, social dominance research, and health psychology.",
    url: "https://teg-blue.org/frameworks/f5",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F5Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} content={content} />;
}
