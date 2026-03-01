import { generateTheoreticalFoundationsJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "12 Frameworks | TEG-Blue Research",
  description: "The 12 theoretical frameworks behind TEG-Blue: Foundation (F1-F3), Collective Scaling (F4-F7), Repair (F8-F10), and Meta-Integration (F11-F12). Built on 139+ established theories.",
  keywords: [
    "TEG-Blue frameworks",
    "emotional regulation theory",
    "polyvagal theory application",
    "attachment theory integration",
    "trauma informed framework",
    "nervous system states",
    "emotional gradient",
    "false coherence",
    "collective scaling patterns",
    "domination",
    "repair",
    "meta-integration",
    "integrative psychology",
    "neuroscience framework",
    "emotional intelligence model"
  ],
  alternates: {
    canonical: "https://teg-blue.org/frameworks-map",
  },
  openGraph: {
    title: "12 Frameworks — The Explanatory Architecture Behind TEG-Blue",
    description: "From Foundation (F1-F3) through Collective Scaling (F4-F7), Repair (F8-F10), to Meta-Integration (F11-F12). Built on 139+ established theories.",
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
