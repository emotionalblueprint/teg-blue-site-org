import { getConceptBySlug } from "@/src/data/concepts";
import ConceptPage from "@/src/components/ConceptPage";
import * as content from "@/src/content/concepts/c9-sea-content";

const concept = getConceptBySlug("self-emotional-awareness");

export const metadata = {
  title: `${concept.name} — TEG-Blue Open Knowledge`,
  description: concept.hook,
  keywords: [
    "TEG-Blue",
    "foundational concepts",
    concept.name.toLowerCase(),
    "emotional technology",
    "nervous system",
  ],
  alternates: {
    canonical: `https://teg-blue.org/concepts/${concept.slug}`,
  },
  openGraph: {
    title: `${concept.name} — TEG-Blue`,
    description: concept.hook,
    url: `https://teg-blue.org/concepts/${concept.slug}`,
    siteName: "TEG-Blue Open Knowledge",
    type: "article",
  },
};

export default function SelfEmotionalAwarenessPage() {
  return <ConceptPage concept={concept} content={content} />;
}
