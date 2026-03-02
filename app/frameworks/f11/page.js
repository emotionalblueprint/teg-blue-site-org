import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";
import { generateFrameworkJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";
import * as content from "@/src/content/f11-content";

const framework = getFramework("F11");
const prev = getPrevFramework("F11");
const next = getNextFramework("F11");

export const metadata = {
  title: "The Emotional Paradoxes — TEG-Blue Research",
  description: "F11 maps the paradoxes that emerge when repair loosens false coherence. Multi-rationality as the source of contradiction, the paradox cascade, compass position as predictor of paradox tolerance, and holding capacity as the product of the three awareness capacities. True coherence redefined as capacity to hold contradiction, not eliminate it. Built on dialectical theory, post-formal reasoning, and internal family systems.",
  keywords: ["emotional paradoxes", "multi-rationality", "holding capacity", "paradox tolerance", "true coherence", "false coherence", "state-dependent cognition", "complexity emergence"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f11" },
  openGraph: {
    title: "The Emotional Paradoxes — Multi-Rationality and Holding Capacity",
    description: "F11 maps the paradoxes that emerge when repair loosens false coherence. Multi-rationality as the source of contradiction, the paradox cascade, compass position as predictor of paradox tolerance, and holding capacity as the product of the three awareness capacities. True coherence redefined as capacity to hold contradiction, not eliminate it. Built on dialectical theory, post-formal reasoning, and internal family systems.",
    url: "https://teg-blue.org/frameworks/f11",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F11Page() {
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
