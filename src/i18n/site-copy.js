export const HEADER_COPY = {
  en: {
    exploreLabel: "Explore",
    languageLabel: "Language",
    toolsLabel: "Practical tools ↗",
    exploreLinks: [
      {
        label: "About",
        href: "/about",
        description: "Project background, founder, research stance, contact routes, and site distinction.",
      },
      {
        label: "TEG-Blue overview",
        href: "/foundations",
        description: "The Emotional Gradient Blueprint and the central Nervous System Gradient map.",
      },
      {
        label: "Pattern reading",
        href: "/methodology",
        description: "How TEG-Blue separates observation, interpretation, impact, and claim status.",
      },
      {
        label: "Scientific grounding",
        href: "/scientific-foundations",
        description: "Research areas, field boundaries, and claim discipline behind the map.",
      },
      {
        label: "Ethics",
        href: "/ethics",
        description: "Dignity, agency, source honesty, attribution, permission, impact, and repair.",
      },
      {
        label: "Publications",
        href: "/publications",
        description: "Public records, release pointers, citation guidance, and source posture.",
      },
      {
        label: "Glossary",
        href: "/glossary",
        description: "Current public terms for the Blueprint and the central map.",
      },
      {
        label: "Collaborate",
        href: "/collaborate",
        description: "Research review, applied builds, and licensing conversations.",
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
        label: "Lectura de patrones",
        href: "/methodology",
        description: "Cómo TEG-Blue separa observación, interpretación, impacto y tipo de afirmación.",
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
        label: "Publicaciones",
        href: "/publications",
        description: "Registros públicos, publicaciones, orientación de cita y postura de fuentes.",
      },
      {
        label: "Glosario",
        href: "/glossary",
        description: "Términos públicos actuales para el Blueprint y el mapa central.",
      },
      {
        label: "Colaborar",
        href: "/collaborate",
        description: "Revisión de investigación, desarrollos aplicados y conversaciones de licencia.",
      },
    ],
  },
};

export const FOOTER_COPY = {
  en: {
    ariaLabel: "Footer",
    links: [
      { label: "Practical tools ↗", href: "https://teg-blue.com/" },
      { label: "Substack", href: "https://annaparetas.substack.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/teg-blue/" },
      { label: "TikTok", href: "https://www.tiktok.com/@emotionalblueprint" },
      { label: "GitHub", href: "https://github.com/emotionalblueprint" },
      { label: "Zenodo", href: "https://zenodo.org/communities/teg-blue" },
      { label: "ORCID", href: "https://orcid.org/0009-0005-2394-7162" },
    ],
    licenseText: " · Attribution required · Tools, marks, code, and Engine logic excluded",
  },
  es: {
    ariaLabel: "Pie de página",
    links: [
      { label: "Herramientas prácticas ↗", href: "https://teg-blue.com/" },
      { label: "Substack", href: "https://annaparetas.substack.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/teg-blue/" },
      { label: "TikTok", href: "https://www.tiktok.com/@emotionalblueprint" },
      { label: "GitHub", href: "https://github.com/emotionalblueprint" },
      { label: "Zenodo", href: "https://zenodo.org/communities/teg-blue" },
      { label: "ORCID", href: "https://orcid.org/0009-0005-2394-7162" },
    ],
    licenseText: " · Atribución requerida · Herramientas, marcas, código y lógica del Engine excluidos",
  },
};

export function getSiteCopy(copyMap, locale) {
  return copyMap[locale] || copyMap.en;
}
