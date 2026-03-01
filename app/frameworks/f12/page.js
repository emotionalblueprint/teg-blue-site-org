import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F12");
const prev = getPrevFramework("F12");
const next = getNextFramework("F12");

export const metadata = {
  title: "The Two Information Systems — TEG-Blue Research",
  description: framework.summary,
  keywords: ["two information systems", "emotional-somatic system", "cognitive-logical system", "state-dependent organisation", "dual-process theory", "somatic markers", "experience not explanation", "system architecture"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f12" },
  openGraph: {
    title: "The Two Information Systems — State-Dependent Organisation",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f12",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F12Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
