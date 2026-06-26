import { generateScientificFoundationsJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "Scientific Foundations — 41 Research Traditions | TEG-Blue",
  description: "The bodies of established research that TEG-Blue draws from as source traces and research grounding. 41 research traditions across 24 domains, each connected to its proposed architectural function (F1-F12, M1-M4).",
  keywords: [
    "emotional regulation models",
    "Plutchik wheel of emotions",
    "nonviolent communication NVC",
    "cognitive behavioral therapy CBT",
    "polyvagal theory Stephen Porges",
    "zones of regulation",
    "internal family systems IFS",
    "attachment theory",
    "nervous system regulation",
    "emotional intelligence frameworks",
    "TEG-Blue established research",
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
    title: "Scientific Foundations — How TEG-Blue Draws From Cross-Disciplinary Research",
    description: "TEG-Blue draws from 41 research traditions — Plutchik, NVC, CBT, Polyvagal, IFS, attachment, trauma, and more — as source traces and research grounding for the proposed architecture.",
    url: "https://teg-blue.org/scientific-foundations",
    siteName: "TEG-Blue",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Foundations — TEG-Blue",
    description: "Research traditions and theoretical contributions that TEG-Blue draws from as source traces and grounding.",
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
