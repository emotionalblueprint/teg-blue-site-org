import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";
import * as content from "@/src/content/f4-content";

const framework = getFramework("F4");
const prev = getPrevFramework("F4");
const next = getNextFramework("F4");

export const metadata = {
  title: "Rules Regulate — TEG-Blue Research",
  description: "F4 explains how individual nervous system regulation patterns scale into collective rule systems. Rule-following is a regulation strategy, not a reasoning choice. The seven-step internalisation mechanism, six rule categories, and why questioning rules activates the same threat that created them. Built on sociology of norms, social psychology, and systems theory.",
  keywords: ["rules regulate", "collective regulation", "rule internalization", "nervous system compliance", "social norms", "punishment vs accountability", "moral foundations", "collective substitutes"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f4" },
  openGraph: {
    title: "Rules Regulate — How Individual Patterns Scale to Collective Systems",
    description: "F4 explains how individual nervous system regulation patterns scale into collective rule systems. Rule-following is a regulation strategy, not a reasoning choice. The seven-step internalisation mechanism, six rule categories, and why questioning rules activates the same threat that created them. Built on sociology of norms, social psychology, and systems theory.",
    url: "https://teg-blue.org/frameworks/f4",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F4Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} content={content} />;
}
