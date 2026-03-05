import { generateTheoreticalFoundationsJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "12 Frameworks | TEG-Blue Research",
  description: "12 interconnected frameworks mapping how emotions work, scale, break, and repair. From nervous system biology (F1) through identity and social structures (F2-F7) to healing and integration (F8-F12). Each framework includes core claims, source theories, and testable hypotheses.",
  keywords: [
    "TEG-Blue frameworks",
    "emotional regulation theory",
    "polyvagal theory application",
    "attachment theory integration",
    "trauma informed framework",
    "nervous system states",
    "emotional gradient",
    "ego persona construct",
    "social scaling patterns",
    "harm escalation",
    "repair and healing",
    "integrative psychology",
    "neuroscience framework",
    "emotional intelligence model"
  ],
  alternates: {
    canonical: "https://teg-blue.org/frameworks-map",
  },
  openGraph: {
    title: "12 Frameworks — The Explanatory Architecture Behind TEG-Blue",
    description: "One mechanism. Twelve angles. From individual (F1-F3) through collective (F4-F7) to repair and complexity (F8-F12). Built on 139+ established theories.",
    url: "https://teg-blue.org/frameworks-map",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "12 Frameworks — TEG-Blue Research",
    description: "The theoretical architecture connecting emotions, identity, social patterns, harm, and repair.",
  },
};

export default function FrameworksMapLayout({ children }) {
  const jsonLd = generateTheoreticalFoundationsJsonLd();

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
