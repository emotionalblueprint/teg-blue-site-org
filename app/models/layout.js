export const metadata = {
  title: "The Three Core Models | TEG-Blue Research",
  description:
    "Nervous System Signaling (the instrument), the Three Awareness Capacities (the calibration), and Regulation Capacities (the biological foundation). Three applied models that make the nervous system's safety-threat orientation visible, clinically usable, and personally recognisable.",
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
    title: "The Three Core Models — Instrument + Calibration + Biological Foundation | TEG-Blue",
    description:
      "Nervous System Signaling (what the nervous system does), the Three Awareness Capacities (what determines how well it does it), and Regulation Capacities (what happens when the cycle doesn't complete). Three applied models forming a complete assessment system.",
    url: "https://teg-blue.org/models",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Three Core Models — TEG-Blue Research",
    description:
      "Instrument + Calibration + Biological Foundation. Three applied models that make the nervous system's orientation visible and measurable.",
  },
};

export default function ModelsLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Three Core Models — TEG-Blue",
    url: "https://teg-blue.org/models",
    description:
      "The three applied models at the foundation of TEG-Blue: Nervous System Signaling (the instrument), the Three Awareness Capacities (the calibration system), and Regulation Capacities (the biological foundation).",
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
