import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";
import { generateFrameworkJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";
import * as content from "@/src/content/f6-content";

const framework = getFramework("F6");
const prev = getPrevFramework("F6");
const next = getNextFramework("F6");

export const metadata = {
  title: "Bias as Regulation — TEG-Blue Research",
  description: "F6 reframes bias as pattern recognition in service of regulation, not a reasoning error. Certainty is physiological stability, not epistemic accuracy. The Bias Architecture, threshold equation for update capacity, and why shame does not unlearn bias — safety does. Built on cognitive psychology, implicit cognition, and contact theory.",
  keywords: ["bias as regulation", "state-dependent perception", "perceptual certainty", "dehumanization gradient", "motivated reasoning", "identity threat", "update capacity", "bias correction"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f6" },
  openGraph: {
    title: "Bias as Regulation — How Perception Becomes Protection",
    description: "F6 reframes bias as pattern recognition in service of regulation, not a reasoning error. Certainty is physiological stability, not epistemic accuracy. The Bias Architecture, threshold equation for update capacity, and why shame does not unlearn bias — safety does. Built on cognitive psychology, implicit cognition, and contact theory.",
    url: "https://teg-blue.org/frameworks/f6",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F6Page() {
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
