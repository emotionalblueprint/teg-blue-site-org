import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F1");
const prev = getPrevFramework("F1");
const next = getNextFramework("F1");

export const metadata = {
  title: "Emotions as a Biological Information — TEG-Blue Research",
  description: framework.summary,
  keywords: ["emotions biological information", "nervous system regulation", "inner compass", "four-mode gradient", "polyvagal theory", "safety threat detection", "emotional signalling", "state-dependent capacity"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f1" },
  openGraph: {
    title: "Emotions as a Biological Information — How the Nervous System Orients Between Safety and Threat",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f1",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F1Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
