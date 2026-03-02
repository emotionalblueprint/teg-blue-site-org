import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";
import { generateFrameworkJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";
import * as content from "@/src/content/f10-content";

const framework = getFramework("F10");
const prev = getPrevFramework("F10");
const next = getNextFramework("F10");

export const metadata = {
  title: "Rebuilding Generational Bridges — TEG-Blue Research",
  description: "F10 applies awareness teaches awareness at generational scale. Five transmission pathways, the mechanism of generational change, and why you don't have to heal everything — just enough that the next generation starts from a different place. Built on family systems theory, intergenerational trauma research, and epigenetics.",
  keywords: ["generational transmission", "intergenerational repair", "transmission pathways", "earned security", "epigenetics", "rupture and repair", "ACEs", "generational bridges"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f10" },
  openGraph: {
    title: "Rebuilding Generational Bridges — Generational Transmission & The Conditions for Change",
    description: "F10 applies awareness teaches awareness at generational scale. Five transmission pathways, the mechanism of generational change, and why you don't have to heal everything — just enough that the next generation starts from a different place. Built on family systems theory, intergenerational trauma research, and epigenetics.",
    url: "https://teg-blue.org/frameworks/f10",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F10Page() {
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
