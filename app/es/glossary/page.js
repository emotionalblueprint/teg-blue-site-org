import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, contrastColor, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";

const FAQ_ITEMS = [
  {
    question: "¿Para qué sirve el glosario de TEG-Blue?",
    answer: "El glosario define los términos públicos aprobados para TEG-Blue, The Emotional Gradient Blueprint y el Gradiente del Sistema Nervioso.",
  },
  {
    question: "¿Cómo deben usarse estos términos?",
    answer: "Úsalos para aclarar patrones observables, impacto, capacidad y respuesta sin diagnosticar a personas ni afirmar certeza sobre su estado interno.",
  },
];

const TERMS = [
  {
    term: "TEG-Blue",
    definition: "El nombre público del proyecto The Emotional Gradient Blueprint.",
    note: "Úsalo para nombrar el marco, su ecosistema y las herramientas que nacen de él.",
    color: SPECTRUM.azure,
  },
  {
    term: "The Emotional Gradient Blueprint",
    definition: "Un marco visual educativo, informado por investigación, para leer cómo se forman y cambian los patrones emocionales, corporales, relacionales y de reparación.",
    note: "Es el nombre fundacional y la puerta de entrada actual de .org. Puede ir acompañado de una explicación descriptiva, pero el nombre formal se mantiene.",
    color: SPECTRUM.azure,
  },
  {
    term: "El Gradiente del Sistema Nervioso",
    definition: "El mapa público central dentro de TEG-Blue: una forma visual de ver cómo los patrones emocionales, corporales y relacionales se mueven entre seguridad, amenaza, control, colapso, regulación y reparación.",
    note: "Mantén el mapa en el centro, pero no lo conviertas en toda la identidad del sitio.",
    color: SPECTRUM.blue,
  },
  {
    term: "TEG-Blue Engine",
    definition: "El sistema interno que ayuda a construir herramientas manteniendo conectadas las fuentes, la lógica del mapa y la lectura práctica de patrones.",
    note: "El Engine no es una herramienta pública de diagnóstico, inferencia de IA ni una fuente bruta para copiar en páginas públicas.",
    color: SPECTRUM.blue,
  },
  {
    term: "Deep Engine",
    definition: "La capa interna que guarda la trazabilidad del mapa: fuentes, estados, formaciones, organización aguda y crónica, elementos del sistema y líneas de investigación.",
    note: "Úsalo como lenguaje interno o de procedencia, salvo cuando una página pública explique explícitamente los límites del ecosistema.",
    color: SPECTRUM.cobalt,
  },
  {
    term: "Visible Engine",
    definition: "La versión compacta del mapa que organiza la lectura pública en cuatro modos: Connection, Protection, Control y Domination.",
    note: "Sirve para construir herramientas y orientar con rapidez. La trazabilidad completa sigue perteneciendo al Deep Engine.",
    color: SPECTRUM.cobalt,
  },
  {
    term: "Legibilidad de patrones emocionales",
    definition: "La capacidad de ver y hablar de patrones emocionales como información corporal, relacional y contextual.",
    note: "Es el marco de entrada público para .org. En prosa, a veces funciona mejor decir que el trabajo hace visibles los patrones.",
    color: SPECTRUM.cobalt,
  },
  {
    term: "Patrón del sistema nervioso",
    definition: "Una forma repetida en que el cuerpo se organiza bajo presión, y que puede moldear percepción, emoción, activación corporal, conducta, relación y capacidad de reparación.",
    note: "Úsalo como lenguaje de patrones, no como diagnóstico ni tipo de persona.",
    color: SPECTRUM.cobalt,
  },
  {
    term: "Formation / Formación",
    definition: "Una columna del Deep Engine o una posición de estado dentro del Gradiente.",
    note: "Una Formation no es un tipo de persona, un diagnóstico ni una categoría moral.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Condiciones reales",
    definition: "El campo inicial que el sistema lee: qué está ocurriendo, qué ha cambiado y si hay seguridad, amenaza o capacidad desbordada.",
    note: "Mantén las condiciones reales separadas del estado del sistema nervioso que se organiza alrededor de ellas.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Estado transitorio",
    definition: "Una configuración fluida del sistema nervioso que puede cambiar cuando las condiciones se actualizan y la persona recupera capacidad suficiente.",
    note: "Úsalo para nombrar movimiento de estado, no identidad fija.",
    color: SPECTRUM.azure,
  },
  {
    term: "Patrón crónico",
    definition: "Una organización sostenida, repetida o difícil de abandonar que sigue moldeando percepción, acceso, respuesta y reparación a lo largo del tiempo.",
    note: "Úsalo para patrones en el tiempo, no como tipología pública ni veredicto sobre una persona.",
    color: SPECTRUM.slate,
  },
  {
    term: "Percepción modulada por el estado",
    definition: "La idea de que los estados del sistema nervioso no solo cambian lo que una persona siente; también pueden cambiar lo que se siente verdadero, sobre todo cuando todavía no hay práctica de escuchar las señales corporales y emocionales del momento.",
    note: "Una sensación es real como experiencia, pero puede no contener todo el hecho de la situación. La práctica empieza por notar qué se siente, qué emoción está presente y qué datos faltan antes de tomarlo como realidad completa.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Regulación",
    definition: "El término público más claro para procesos corporales y relacionales que ayudan a un sistema a volver hacia más capacidad, flexibilidad y reparación.",
    note: "Úsalo en lenguaje compacto, de primera pantalla y de páginas generales.",
    color: SPECTRUM.azure,
  },
  {
    term: "Reparación",
    definition: "El retorno a realidad compartida, responsabilidad, cuidado, límite cuando haga falta y cambio de patrón después de una ruptura o daño.",
    note: "La reparación no es solo una disculpa.",
    color: SPECTRUM.blue,
  },
  {
    term: "Mecanismo e impacto",
    definition: "La distinción entre cómo se organiza un patrón y qué efecto o daño causa.",
    note: "El mecanismo explica el patrón; no borra el impacto.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Calma y seguridad",
    definition: "Una regla de cuidado: una presentación calmada no demuestra seguridad, y el malestar visible no demuestra peligro.",
    note: "El control puede presentarse con compostura mientras su impacto aparece en otro lugar.",
    color: SPECTRUM.slate,
  },
];

export const metadata = {
  title: "Glosario",
  description: "Términos públicos aprobados para TEG-Blue, The Emotional Gradient Blueprint y el Gradiente del Sistema Nervioso.",
  keywords: [
    "glosario TEG-Blue",
    "The Emotional Gradient Blueprint",
    "Gradiente del Sistema Nervioso",
    "TEG-Blue Engine",
    "Deep Engine",
    "Visible Engine",
    "Formation",
    "condiciones reales",
    "capacidad desbordada",
    "legibilidad de patrones emocionales",
    "percepción modulada por el estado",
    "reparación",
    "regulación",
  ],
  alternates: {
    canonical: "https://teg-blue.org/es/glossary",
    languages: {
      en: "https://teg-blue.org/glossary",
      es: "https://teg-blue.org/es/glossary",
      "x-default": "https://teg-blue.org/glossary",
    },
  },
  openGraph: {
    title: "Glosario - TEG-Blue",
    description: "Términos públicos actuales para TEG-Blue.",
    url: "https://teg-blue.org/es/glossary",
    siteName: "TEG-Blue",
    type: "article",
    locale: "es_ES",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glosario - TEG-Blue",
    description: "Términos públicos actuales para TEG-Blue.",
  },
};

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function SpanishGlossaryPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://teg-blue.org/es",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Glosario",
        item: "https://teg-blue.org/es/glossary",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const definedTermJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glosario de TEG-Blue",
    url: "https://teg-blue.org/es/glossary",
    inLanguage: "es",
    hasDefinedTerm: TERMS.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition,
      inDefinedTermSet: "https://teg-blue.org/es/glossary",
    })),
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Glosario | TEG-Blue",
    url: "https://teg-blue.org/es/glossary",
    inLanguage: "es",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article > p:first-of-type", "article h2", "article h2 + p"],
    },
  };

  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/es/glossary" />
      <PageLayout
        header={
          <ResearcherHero
            badge="GLOSARIO"
            title="Glosario"
            subtitle="Terminología pública actual"
            description="Términos públicos para TEG-Blue, el Blueprint, el mapa central, los límites del Engine y los compromisos éticos para leer patrones sin diagnosticar personas."
          />
        }
      >
        <OverviewSection />
        <TermsSection />
        <WhereNextSection />
      </PageLayout>
      <SiteFooter locale="es" />

      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={definedTermJsonLd} />
      <JsonLd data={speakableJsonLd} />
    </div>
  );
}

function OverviewSection() {
  return (
    <section id="overview" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Terminología</div>
      <h2 style={sectionHeadingStyle}>Un vocabulario compartido para el Blueprint, su mapa central y los límites del Engine.</h2>
      <p style={leadStyle}>
        Estos términos nombran el lenguaje público de TEG-Blue: el marco, el mapa central y los patrones que el
        mapa ayuda a ver y discutir. Buscan claridad, no diagnóstico; lectura de patrones, no certeza sobre
        motivos; orientación, no categorías morales fijas.
      </p>
    </section>
  );
}

function TermsSection() {
  return (
    <section id="terms" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>Términos públicos aprobados</div>
      <h2 style={sectionHeadingStyle}>Terminología actual para páginas generales.</h2>
      <div style={gridStyle}>
        {TERMS.map((item) => (
          <TermCard key={item.term} item={item} />
        ))}
      </div>
    </section>
  );
}

function WhereNextSection() {
  return (
    <section id="where-next" style={{ marginBottom: 32 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Dónde seguir</div>
      <h2 style={sectionHeadingStyle}>Usa este glosario junto con las páginas de ética y lectura de patrones.</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <NavRow label="Cómo TEG-Blue lee patrones" href="/methodology" linkText="Lectura de patrones" />
            <NavRow label="Ética y límites de uso" href="/ethics" linkText="Ética" />
            <NavRow label="Visión general del marco" href="/foundations" linkText="Visión general de TEG-Blue" />
            <NavRow label="Citas y registros públicos" href="/publications" linkText="Publicaciones" />
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TermCard({ item }) {
  return (
    <div style={termCardStyle(item.color)}>
      <div style={labelStyle(item.color)}>{item.term}</div>
      <p style={{ ...cardBodyStyle, color: TEXT.primary, fontWeight: 600, marginBottom: 8 }}>{item.definition}</p>
      <p style={cardBodyStyle}>{item.note}</p>
    </div>
  );
}

function NavRow({ label, href, linkText }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{label}</td>
      <td style={tableCellStyle}>
        <Link href={href} style={{ color: contrastColor(SPECTRUM.azure), textDecoration: "none", fontWeight: 500 }}>
          {linkText}
        </Link>
      </td>
    </tr>
  );
}

function labelStyle(color) {
  return {
    fontSize: 9,
    fontWeight: 700,
    fontFamily: FONT.mono,
    textTransform: "uppercase",
    letterSpacing: 0,
    color: contrastColor(color),
    marginBottom: 4,
  };
}

function termCardStyle(color) {
  return {
    padding: 16,
    minHeight: 176,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.16)}`,
    borderLeft: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  gap: 12,
  marginTop: 18,
};

const sectionHeadingStyle = {
  fontSize: 21,
  fontWeight: 700,
  color: TEXT.primary,
  lineHeight: 1.25,
  margin: "0 0 10px",
};

const leadStyle = {
  fontSize: 15,
  color: TEXT.secondary,
  lineHeight: 1.8,
  margin: 0,
  maxWidth: 790,
};

const cardBodyStyle = {
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.65,
  margin: 0,
};

const tableWrapStyle = {
  background: BG.card,
  borderRadius: RADIUS.md,
  border: `1px solid ${BORDER.default}`,
  overflow: "hidden",
  marginTop: 16,
};

const tableCellStyle = {
  padding: "13px 16px",
  fontSize: 13,
  lineHeight: 1.5,
};
