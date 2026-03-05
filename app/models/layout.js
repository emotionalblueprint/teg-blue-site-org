export const metadata = {
  title: "The Two Core Models | TEG-Blue Research",
  description:
    "The Inner Compass & Four-Mode Gradient (the instrument) and the Three Awareness Capacities (the calibration). Two applied models that make the nervous system's safety-threat orientation visible, clinically usable, and personally recognisable.",
  keywords: [
    "TEG-Blue models",
    "inner compass",
    "four-mode gradient",
    "three awareness capacities",
    "emotional technology",
    "nervous system regulation",
    "reading emotions",
    "emotional resonance",
    "self-emotional awareness",
    "connection protection control domination",
    "applied models",
    "calibration system",
  ],
  alternates: {
    canonical: "https://teg-blue.org/models",
  },
  openGraph: {
    title: "The Two Core Models — Instrument + Calibration | TEG-Blue",
    description:
      "The Inner Compass (what the nervous system does) and the Three Awareness Capacities (what determines how well it does it). Two applied models forming a complete assessment system.",
    url: "https://teg-blue.org/models",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Two Core Models — TEG-Blue Research",
    description:
      "Instrument + Calibration. Two applied models that make the nervous system's orientation visible and measurable.",
  },
};

export default function ModelsLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Two Core Models — TEG-Blue",
    url: "https://teg-blue.org/models",
    description:
      "The two applied models at the foundation of TEG-Blue: the Inner Compass & Four-Mode Gradient (the instrument) and the Three Awareness Capacities (the calibration system).",
    inLanguage: "en",
    isPartOf: {
      "@type": "ResearchProject",
      name: "TEG-Blue: The Emotional Gradient Blueprint",
      url: "https://teg-blue.org",
    },
  };

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
