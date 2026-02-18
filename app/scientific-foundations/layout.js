import { generateScientificFoundationsJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "Scientific Foundations | TEG-Blue Research",
  description: "How TEG-Blue extends 15 major psychological models (Plutchik, NVC, CBT, Polyvagal Theory, IFS, and more) plus 139+ established theories. See the strengths, gaps, and what TEG-Blue adds to each framework.",
  keywords: [
    "emotional regulation models",
    "Plutchik wheel of emotions",
    "nonviolent communication NVC",
    "cognitive behavioral therapy CBT",
    "polyvagal theory Stephen Porges",
    "zones of regulation",
    "internal family systems IFS",
    "attachment theory",
    "trauma informed care",
    "emotional intelligence frameworks",
    "TEG-Blue scientific foundations",
    "psychology integration",
    "neuroscience emotions",
    "Carl Rogers organismic valuing",
    "Winnicott true false self",
    "Jung persona",
    "Freud ego model",
    "defense mechanisms",
    "cognitive dissonance",
    "complex PTSD",
    "disorganized attachment"
  ],
  alternates: {
    canonical: "https://teg-blue.org/scientific-foundations",
  },
  openGraph: {
    title: "Scientific Foundations — How TEG-Blue Extends Major Psychological Models",
    description: "TEG-Blue acts as connective tissue between 15 major models (Plutchik, NVC, CBT, Polyvagal, IFS) and 139+ theories. See strengths, gaps, and additions for each.",
    url: "https://teg-blue.org/scientific-foundations",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Foundations — TEG-Blue Research",
    description: "How TEG-Blue extends Plutchik, NVC, CBT, Polyvagal Theory, IFS and 10+ other major psychological models.",
  },
};

export default function ScientificFoundationsLayout({ children }) {
  const jsonLd = generateScientificFoundationsJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
