import { generateTheoreticalFoundationsJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "12 Frameworks | TEG-Blue Research",
  description: "The 12 theoretical frameworks behind TEG-Blue: how emotions form (F1-F3), scale into social patterns (F4-F6), tip into harm (F7), and return to connection (F8-F10). Built on 139+ established theories.",
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
    description: "From formation (F1-F3) through scaling (F4-F6), turning point (F7), healing (F8-F10), to integration (F11-F12). Built on 139+ established theories.",
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
