import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";

const framework = getFramework("F10");
const prev = getPrevFramework("F10");
const next = getNextFramework("F10");

export const metadata = {
  title: "Rebuilding Generational Bridges — TEG-Blue Research",
  description: framework.summary,
  keywords: ["generational transmission", "intergenerational repair", "transmission pathways", "earned security", "epigenetics", "rupture and repair", "ACEs", "generational bridges"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f10" },
  openGraph: {
    title: "Rebuilding Generational Bridges — Generational Transmission & The Conditions for Change",
    description: framework.summary,
    url: "https://teg-blue.org/frameworks/f10",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F10Page() {
  return <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} />;
}
