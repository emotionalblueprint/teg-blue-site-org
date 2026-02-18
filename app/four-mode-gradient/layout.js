import { generateFourModeGradientJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "Four-Mode Gradient | TEG-Blue Research",
  description: "The measurement backbone of TEG-Blue: Connection, Protection, Control, and Domination. Four nervous system regulatory states detectable in natural language, validated on 10,000+ conflict narratives.",
  keywords: [
    "four mode gradient",
    "nervous system states",
    "connection mode",
    "protection mode",
    "control mode",
    "domination mode",
    "polyvagal states",
    "regulatory state classification",
    "emotional regulation measurement",
    "natural language processing emotions",
    "harm detection",
    "conflict analysis",
    "TEG-Blue measurement",
    "ventral vagal",
    "sympathetic activation",
    "dorsal vagal"
  ],
  alternates: {
    canonical: "https://teg-blue.org/four-mode-gradient",
  },
  openGraph: {
    title: "Four-Mode Gradient — Connection, Protection, Control, Domination",
    description: "The measurement layer of TEG-Blue: four nervous system regulatory states detectable in natural language. Validated on 10,000+ narratives.",
    url: "https://teg-blue.org/four-mode-gradient",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Four-Mode Gradient — TEG-Blue Research",
    description: "Connection → Protection → Control → Domination. Nervous system states measurable in natural language.",
  },
};

export default function FourModeGradientLayout({ children }) {
  const jsonLd = generateFourModeGradientJsonLd();

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
