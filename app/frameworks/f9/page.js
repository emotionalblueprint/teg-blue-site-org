import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";
import * as content from "@/src/content/f9-content";

const framework = getFramework("F9");
const prev = getPrevFramework("F9");
const next = getNextFramework("F9");

export const metadata = {
  title: "Neurodivergence as Nervous System Variation — TEG-Blue Research",
  description: "F9 reframes neurodivergence as nervous system variation, not deficit. System Mismatch as the gap between environment and configuration. Structural masking, threshold dynamics, and why genuine inclusion is structural intelligence, not accommodation. Built on the neurodiversity paradigm, social model of disability, and universal design.",
  keywords: ["neurodivergence", "nervous system variation", "system mismatch", "structural inclusion", "structural masking", "neurodiversity paradigm", "regulatory depletion", "variation-inclusive design"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f9" },
  openGraph: {
    title: "Neurodivergence as Nervous System Variation — System Mismatch & Structural Inclusion",
    description: "F9 reframes neurodivergence as nervous system variation, not deficit. System Mismatch as the gap between environment and configuration. Structural masking, threshold dynamics, and why genuine inclusion is structural intelligence, not accommodation. Built on the neurodiversity paradigm, social model of disability, and universal design.",
    url: "https://teg-blue.org/frameworks/f9",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F9Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} content={content} />;
}
