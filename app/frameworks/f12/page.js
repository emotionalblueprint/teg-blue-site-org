import { getFramework, getNextFramework, getPrevFramework } from "@/src/data/frameworks";
import FrameworkPage from "@/src/components/FrameworkPage";
import { generateFrameworkJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";
import * as content from "@/src/content/f12-content";

const framework = getFramework("F12");
const prev = getPrevFramework("F12");
const next = getNextFramework("F12");

export const metadata = {
  title: "The Two Information Systems — TEG-Blue Research",
  description: "F12 reveals why insight alone doesn't change behaviour: two parallel information systems running at different speeds. The emotional-somatic system sets state before cognition arrives. State-dependent behaviour, one mechanism described from twelve angles, accountability without demonisation, and gradient-matched intervention. Built on dual process theory, affective neuroscience, and polyvagal theory.",
  keywords: ["two information systems", "emotional-somatic system", "cognitive-logical system", "state-dependent organisation", "dual-process theory", "somatic markers", "experience not explanation", "system architecture"],
  alternates: { canonical: "https://teg-blue.org/frameworks/f12" },
  openGraph: {
    title: "The Two Information Systems — State-Dependent Organisation",
    description: "F12 reveals why insight alone doesn't change behaviour: two parallel information systems running at different speeds. The emotional-somatic system sets state before cognition arrives. State-dependent behaviour, one mechanism described from twelve angles, accountability without demonisation, and gradient-matched intervention. Built on dual process theory, affective neuroscience, and polyvagal theory.",
    url: "https://teg-blue.org/frameworks/f12",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function F12Page() {
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
