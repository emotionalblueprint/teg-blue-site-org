import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";
import * as content from "@/src/content/f8-content";

const framework = getFramework("F8");
const prev = getPrevFramework("F8");
const next = getNextFramework("F8");

export const metadata = {
  title: "Repairing Awareness & The Power of Difference — TEG-Blue Research",
  description: "F8 turns the system around: every substitute was built because the original was missing — repair means building the original. Assessing awareness capacity configuration, five conditions for repair, the oscillation process, and why the collective compass is more accurate with more sensors. Built on metacognition, emotion differentiation, and reflective functioning research.",
  keywords: ["repairing awareness", "capacity development", "conditions for repair", "collective compass", "emotion differentiation", "reflective functioning", "mentalization", "power of difference"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f8" },
  openGraph: {
    title: "Repairing Awareness & The Power of Difference — How to Develop What Was Missing",
    description: "F8 turns the system around: every substitute was built because the original was missing — repair means building the original. Assessing awareness capacity configuration, five conditions for repair, the oscillation process, and why the collective compass is more accurate with more sensors. Built on metacognition, emotion differentiation, and reflective functioning research.",
    url: "https://teg-blue.org/frameworks/f8",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F8Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} content={content} />;
}
