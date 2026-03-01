import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F2");
const prev = getPrevFramework("F2");
const next = getNextFramework("F2");

export const metadata = {
  title: "Awareness Teaches Awareness — TEG-Blue Research",
  description: framework.summary,
  keywords: ["awareness teaches awareness", "three awareness capacities", "reading emotions", "emotional resonance", "self-emotional awareness", "attachment theory", "developmental neuroscience", "compass calibration"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f2" },
  openGraph: {
    title: "Awareness Teaches Awareness — How the Three Capacities Calibrate the Compass",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f2",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F2Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
