import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, contrastColor, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";

const FAQ_ITEMS = [
  {
    question: "¿Para qué sirve este glosario?",
    answer: "Este glosario reúne unas pocas palabras compartidas para orientarse en TEG-Blue sin convertirlas en etiquetas para personas.",
  },
  {
    question: "¿Cómo conviene leerlo?",
    answer: "Como una ayuda para entender el mapa y hablar de patrones con más cuidado. No es una herramienta de diagnóstico ni una forma de decidir quién es alguien.",
  },
];

const TERMS = [
  {
    term: "TEG-Blue",
    definition: "El nombre corto del proyecto.",
    note: "Cuando hablamos de TEG-Blue, hablamos del marco, el mapa y las herramientas que ayudan a leer patrones emocionales con más claridad.",
    color: SPECTRUM.azure,
  },
  {
    term: "The Emotional Gradient Blueprint",
    definition: "El nombre completo del marco.",
    note: "Es una forma visual y educativa de explorar cómo los patrones emocionales, corporales y relacionales pueden formarse, cambiar y repararse.",
    color: SPECTRUM.azure,
  },
  {
    term: "El Gradiente del Sistema Nervioso",
    definition: "El mapa central de TEG-Blue.",
    note: "Ayuda a ver cómo una persona o una relación puede moverse entre más seguridad, más protección, más control, colapso, regulación y reparación.",
    color: SPECTRUM.blue,
  },
  {
    term: "Patrones emocionales",
    definition: "Formas repetidas en que sentimos, reaccionamos, nos protegemos o intentamos reparar.",
    note: "Un patrón no es una identidad fija. Es algo que puede observarse con cuidado y cambiar con las condiciones adecuadas.",
    color: SPECTRUM.cobalt,
  },
  {
    term: "Patrón del sistema nervioso",
    definition: "Una forma en que el cuerpo se organiza bajo presión o seguridad.",
    note: "Puede influir en lo que sentimos, percibimos, hacemos y podemos reparar. No describe el valor de una persona.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Capacidad",
    definition: "La energía y flexibilidad disponibles para sentir, pensar, escuchar, responder o reparar.",
    note: "Cuando la capacidad baja, una respuesta puede volverse más estrecha o protectora. Eso ayuda a entender el patrón sin justificar el daño.",
    color: SPECTRUM.azure,
  },
  {
    term: "Lectura de patrones",
    definition: "Una forma de observar qué se repite, qué impacto tiene y qué respuesta podría cuidar mejor la situación.",
    note: "La lectura de patrones no intenta adivinar motivos ni diagnosticar estados internos.",
    color: SPECTRUM.indigo,
  },
  {
    term: "Regulación",
    definition: "Procesos que ayudan al cuerpo a volver hacia más capacidad, flexibilidad y presencia.",
    note: "Puede incluir recursos corporales, relación, tiempo, límites, descanso o apoyo.",
    color: SPECTRUM.azure,
  },
  {
    term: "Reparación",
    definition: "El trabajo de volver a la realidad compartida después de una ruptura, un error o un daño.",
    note: "Puede incluir responsabilidad, cuidado, límites y un cambio real del patrón. No es solo pedir perdón.",
    color: SPECTRUM.blue,
  },
];

export const metadata = {
  title: "Glosario",
  description: "Una guía breve y sencilla de palabras clave para orientarse en TEG-Blue y el Gradiente del Sistema Nervioso.",
  keywords: [
    "glosario TEG-Blue",
    "The Emotional Gradient Blueprint",
    "Gradiente del Sistema Nervioso",
    "patrones emocionales",
    "patrones del sistema nervioso",
    "capacidad",
    "lectura de patrones",
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
    description: "Palabras clave para orientarse en TEG-Blue.",
    url: "https://teg-blue.org/es/glossary",
    siteName: "TEG-Blue",
    type: "article",
    locale: "es_ES",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glosario - TEG-Blue",
    description: "Palabras clave para orientarse en TEG-Blue.",
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
            subtitle="Palabras clave para orientarse"
            description="Una guía breve para entender el lenguaje básico de TEG-Blue, el Blueprint y el Gradiente del Sistema Nervioso sin convertir los patrones en etiquetas para personas."
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
      <h2 style={sectionHeadingStyle}>Un vocabulario simple para entrar en TEG-Blue con cuidado.</h2>
      <p style={leadStyle}>
        Este glosario reúne las palabras que más ayudan al principio. La intención es orientar, no diagnosticar;
        nombrar patrones sin reducir a nadie a una etiqueta; y dejar espacio para contexto, impacto, límites y
        reparación.
      </p>
    </section>
  );
}

function TermsSection() {
  return (
    <section id="terms" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>Palabras básicas</div>
      <h2 style={sectionHeadingStyle}>Lo mínimo para leer el mapa sin perderse.</h2>
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
      <h2 style={sectionHeadingStyle}>Cuando quieras más contexto, sigue por estas páginas.</h2>
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
