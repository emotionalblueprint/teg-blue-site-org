import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";
import { generateFrameworkJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";
import * as content from "@/src/content/f3-content";

const framework = getFramework("F3");
const prev = getPrevFramework("F3");
const next = getNextFramework("F3");

export const metadata = {
  title: "Adult Cognition & False Coherence — TEG-Blue Research",
  description: "F3 reveals how cognition maintains identity under pressure through false coherence — replacing emotional signals with invented narratives that feel true because they restore stability, not because they are accurate. The self-reinforcing loop, emotional distortion, and why insight alone cannot produce change. Built on cognitive dissonance theory, motivated reasoning, and trauma studies.",
  keywords: ["false coherence", "cognitive replacement", "motivated reasoning", "cognitive dissonance", "identity under pressure", "emotional distortion", "state-dependent cognition", "self-justification"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f3" },
  openGraph: {
    title: "Adult Cognition & False Coherence — How Cognition Maintains Identity Under Pressure",
    description: "F3 reveals how cognition maintains identity under pressure through false coherence — replacing emotional signals with invented narratives that feel true because they restore stability, not because they are accurate. The self-reinforcing loop, emotional distortion, and why insight alone cannot produce change. Built on cognitive dissonance theory, motivated reasoning, and trauma studies.",
    url: "https://teg-blue.org/frameworks/f3",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F3Page() {
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
