import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";
import { generateFrameworkJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";
import * as content from "@/src/content/f2-content";

const framework = getFramework("F2");
const prev = getPrevFramework("F2");
const next = getNextFramework("F2");

export const metadata = {
  title: "Awareness Teaches Awareness — TEG-Blue Research",
  description: "F2 explains how the Inner Compass gets calibrated through three awareness capacities — Reading Emotions, Emotional Resonance, and Self-Emotional Awareness. Awareness teaches awareness: the capacities caregivers embody become the child's developmental environment. Built on attachment theory, developmental neuroscience, and polyvagal theory.",
  keywords: ["awareness teaches awareness", "three awareness capacities", "reading emotions", "emotional resonance", "self-emotional awareness", "attachment theory", "developmental neuroscience", "compass calibration"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f2" },
  openGraph: {
    title: "Awareness Teaches Awareness — How the Three Capacities Calibrate the Compass",
    description: "F2 explains how the Inner Compass gets calibrated through three awareness capacities — Reading Emotions, Emotional Resonance, and Self-Emotional Awareness. Awareness teaches awareness: the capacities caregivers embody become the child's developmental environment. Built on attachment theory, developmental neuroscience, and polyvagal theory.",
    url: "https://teg-blue.org/frameworks/f2",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F2Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFrameworkJsonLd(framework)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Frameworks", url: "/frameworks-map" },
          { name: `${framework.id}: ${framework.name}`, url: `/frameworks/${framework.slug}` },
        ])) }}
      />
      <FrameworkPage framework={framework} prevFramework={prev} nextFramework={next} content={content} />
    </>
  );
}
