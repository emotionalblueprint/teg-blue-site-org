import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F8");
const prev = getPrevFramework("F8");
const next = getNextFramework("F8");

export const metadata = {
  title: "Repairing Awareness & The Power of Difference — TEG-Blue Research",
  description: framework.summary,
  keywords: ["repairing awareness", "capacity development", "conditions for repair", "collective compass", "emotion differentiation", "reflective functioning", "mentalization", "power of difference"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f8" },
  openGraph: {
    title: "Repairing Awareness & The Power of Difference — How to Develop What Was Missing",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f8",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F8Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
