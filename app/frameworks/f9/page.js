import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F9");
const prev = getPrevFramework("F9");
const next = getNextFramework("F9");

export const metadata = {
  title: "Neurodivergence as Nervous System Variation — TEG-Blue Research",
  description: framework.summary,
  keywords: ["neurodivergence", "nervous system variation", "system mismatch", "structural inclusion", "structural masking", "neurodiversity paradigm", "regulatory depletion", "variation-inclusive design"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f9" },
  openGraph: {
    title: "Neurodivergence as Nervous System Variation — System Mismatch & Structural Inclusion",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f9",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F9Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
