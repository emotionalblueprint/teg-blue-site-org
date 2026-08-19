export const HEADER_COPY = {
  en: {
    exploreLabel: "Explore",
    languageLabel: "Language",
    toolsLabel: "Practical tools ↗",
    exploreLinks: [
      {
        label: "About",
        href: "/about",
        description: "Creator, project purpose, public resources, contact information, and use limits.",
      },
      {
        label: "How to read the Gradient",
        href: "/foundations",
        description: "Modes, states, positions, acute shifts, chronic configurations, impact, and response.",
      },
      {
        label: "TEG-Blue Engine",
        href: "/engine",
        description: "How the framework becomes traceable public tools and applied digital builds.",
      },
      {
        label: "Applied work",
        href: "/applied-work",
        description: "How organisations can explore a carefully scoped educational or digital tool with TEG-Blue.",
      },
      {
        label: "Scientific grounding",
        href: "/scientific-foundations",
        description: "The research supporting each part of the map and the limits of those claims.",
      },
      {
        label: "Ethics",
        href: "/ethics",
        description: "Dignity, agency, source honesty, attribution, permission, impact, and repair.",
      },
      {
        label: "Glossary",
        href: "/glossary",
        description: "Key words for finding your way around the map.",
      },
    ],
  },
  es: {
    exploreLabel: "Explorar",
    languageLabel: "Idioma",
    toolsLabel: "Herramientas prácticas ↗",
    exploreLinks: [
      {
        label: "Sobre TEG-Blue",
        href: "/about",
        description: "Contexto del proyecto, creadora, postura de investigación, contacto y límites del sitio.",
      },
      {
        label: "Visión general de TEG-Blue",
        href: "/foundations",
        description: "The Emotional Gradient Blueprint y el Gradiente del Sistema Nervioso como mapa central.",
      },
      {
        label: "TEG-Blue Engine",
        href: "/es/engine",
        description: "Cómo el marco se convierte en herramientas públicas y aplicaciones digitales con una lógica trazable.",
      },
      {
        label: "Trabajo aplicado",
        href: "/es/applied-work",
        description: "Cómo una organización puede explorar una herramienta educativa o digital con un alcance claro.",
      },
      {
        label: "Fundamentación científica",
        href: "/scientific-foundations",
        description: "Áreas de investigación, límites de cada campo y disciplina de afirmaciones detrás del mapa.",
      },
      {
        label: "Ética",
        href: "/ethics",
        description: "Dignidad, agencia, honestidad de fuentes, atribución, permiso, impacto y reparación.",
      },
      {
        label: "Glosario",
        href: "/glossary",
        description: "Palabras clave para orientarse en el mapa.",
      },
    ],
  },
};

export const FOOTER_COPY = {
  en: {
    ariaLabel: "Footer",
    links: [
      { label: "Practical tools ↗", href: "https://teg-blue.com/" },
      { label: "TEG-Blue Engine", href: "/engine" },
      { label: "Applied work", href: "/applied-work" },
      { label: "Anna Paretas-Artacho", href: "https://annaparetas.com" },
      { label: "Substack", href: "https://annaparetas.substack.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/teg-blue/" },
      { label: "TikTok", href: "https://www.tiktok.com/@emotionalblueprint" },
      { label: "GitHub", href: "https://github.com/emotionalblueprint" },
      { label: "Zenodo", href: "https://zenodo.org/communities/teg-blue" },
      { label: "ORCID", href: "https://orcid.org/0009-0005-2394-7162" },
    ],
    licenseText: " · Attribution required · Does not include tools, marks, code, or internal logic",
  },
  es: {
    ariaLabel: "Pie de página",
    links: [
      { label: "Herramientas prácticas ↗", href: "https://teg-blue.com/" },
      { label: "TEG-Blue Engine", href: "/es/engine" },
      { label: "Trabajo aplicado", href: "/es/applied-work" },
      { label: "Anna Paretas-Artacho", href: "https://annaparetas.com" },
      { label: "Substack", href: "https://annaparetas.substack.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/teg-blue/" },
      { label: "TikTok", href: "https://www.tiktok.com/@emotionalblueprint" },
      { label: "GitHub", href: "https://github.com/emotionalblueprint" },
      { label: "Zenodo", href: "https://zenodo.org/communities/teg-blue" },
      { label: "ORCID", href: "https://orcid.org/0009-0005-2394-7162" },
    ],
    licenseText: " · Atribución requerida · No incluye herramientas, marcas, código ni lógica interna",
  },
};

export function getSiteCopy(copyMap, locale) {
  return copyMap[locale] || copyMap.en;
}
