import Link from "next/link";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { BG, BORDER, FONT, RADIUS, SPECTRUM, TEXT, hexToRgba } from "@/src/styles/tokens";

export const metadata = {
  title: "TEG-Blue Engine | Del marco a las herramientas aplicadas",
  description: "Cómo el TEG-Blue Engine convierte el Blueprint del Gradiente Emocional en herramientas públicas y aplicaciones digitales con una lógica estructurada y trazable.",
  alternates: {
    canonical: "https://teg-blue.org/es/engine",
    languages: {
      en: "https://teg-blue.org/engine",
      es: "https://teg-blue.org/es/engine",
      "x-default": "https://teg-blue.org/engine",
    },
  },
  openGraph: {
    title: "El TEG-Blue Engine",
    description: "El sistema de trazabilidad y construcción de herramientas que sostiene las aplicaciones de TEG-Blue.",
    url: "https://teg-blue.org/es/engine",
    type: "article",
    siteName: "TEG-Blue",
    locale: "es_ES",
    alternateLocale: ["en_US"],
  },
};

const layers = [
  {
    label: "Preservar",
    title: "Conservar las fuentes y las distinciones",
    body: "La capa más profunda registra de dónde viene una idea, qué sostiene la fuente, qué aporta TEG-Blue y dónde debe detenerse una afirmación.",
    color: SPECTRUM.azure,
  },
  {
    label: "Traducir",
    title: "Elegir el nivel de detalle que necesita la persona",
    body: "La misma arquitectura puede comprimirse en un mapa práctico sin presentar una etiqueta simplificada como si fuera toda la ciencia.",
    color: SPECTRUM.blue,
  },
  {
    label: "Construir",
    title: "Escribir la página pública de conducta",
    body: "Una herramienta empieza por lo que una persona puede reconocer: qué ocurrió, qué se repitió, qué cambió y qué opciones o rutas siguieron disponibles.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Comprobar",
    title: "Mantener juntos propósito, seguridad y autoría",
    body: "Cada aplicación necesita definir la tarea de su lector. Una herramienta de autoobservación y otra para reconocer violencia pueden compartir una fuente, pero no deben pedirle lo mismo a la persona.",
    color: SPECTRUM.indigo,
  },
];

const applications = [
  {
    title: "Una herramienta práctica de autoobservación",
    body: "teg-blue.com utiliza una compresión de cuatro modos para ayudar a una persona a observar su propia respuesta, su impacto y lo que puede requerir responsabilidad, regulación o reparación.",
    href: "https://teg-blue.com/es/emotional-tools",
    cta: "Explorar las herramientas prácticas ↗",
  },
  {
    title: "Una aplicación educativa centrada en el daño",
    body: "Una herramienta para reconocer violencia necesita otro lenguaje, rutas de seguridad, una revisión clara de autoría y una separación explícita entre comprender un mecanismo y excusar su impacto.",
  },
  {
    title: "Una aplicación institucional o de investigación",
    body: "El Engine puede orientar mapas educativos, páginas de conducta, sistemas de contenido o herramientas digitales cuando primero se definen la audiencia, los límites de la evidencia, las necesidades de protección y los derechos de uso.",
  },
];

const cardStyle = {
  padding: 24,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.lg,
  background: BG.card,
};
const headingStyle = { margin: 0, color: TEXT.primary, fontSize: "clamp(25px, 3vw, 36px)", lineHeight: 1.15 };
const bodyStyle = { margin: 0, color: TEXT.secondary, fontSize: 16, lineHeight: 1.75 };

export default function SpanishEnginePage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "El TEG-Blue Engine",
    url: "https://teg-blue.org/es/engine",
    inLanguage: "es",
    description: "Cómo el TEG-Blue Engine convierte el Blueprint del Gradiente Emocional en herramientas públicas y aplicaciones digitales con una lógica estructurada y trazable.",
    isPartOf: { "@type": "ResearchProject", name: "TEG-Blue: The Emotional Gradient Blueprint", url: "https://teg-blue.org" },
    creator: {
      "@type": "Person",
      name: "Anna Paretas-Artacho",
      url: "https://annaparetas.com",
      sameAs: "https://orcid.org/0009-0005-2394-7162",
    },
    mainEntity: { "@type": "Thing", name: "TEG-Blue Engine", description: "El sistema de trazabilidad y construcción que sostiene las herramientas públicas y aplicaciones de TEG-Blue." },
  };

  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/es/engine" />
      <PageLayout
        header={
          <ResearcherHero
            badge="SISTEMA PARA CONSTRUIR HERRAMIENTAS"
            title="El TEG-Blue Engine"
            subtitle="Cómo el marco se convierte en una herramienta pública"
            description="El Engine es el sistema de trazabilidad y construcción que sostiene las aplicaciones de TEG-Blue. Ayuda a conservar la profundidad del marco mientras cada página pública se escribe para la persona que realmente va a utilizarla."
          />
        }
      >
        <section style={{ marginBottom: 54 }}>
          <p style={{ ...bodyStyle, maxWidth: 820, fontSize: 19 }}>
            Cuando una página de conducta parece sencilla, gran parte del trabajo queda debajo. El Engine mantiene conectadas la fuente científica, la interpretación de TEG-Blue, la escritura pública, los límites éticos y el propósito de la herramienta sin tratarlos como si fueran lo mismo.
          </p>
          <div style={{ marginTop: 22, padding: 22, borderLeft: `3px solid ${SPECTRUM.azure}`, background: hexToRgba(SPECTRUM.azure, 0.07), borderRadius: RADIUS.md }}>
            <p style={bodyStyle}>
              <strong style={{ color: TEXT.primary }}>El Engine no es un sistema automático para juzgar personas.</strong> No diagnostica, no prueba intenciones ni convierte una respuesta en un veredicto. Es una forma disciplinada de construir herramientas educativas a partir de un marco con varias capas.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 58 }}>
          <p style={{ color: SPECTRUM.azure, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Cómo funciona</p>
          <h2 style={headingStyle}>Cuatro tipos de trabajo sostienen la página visible.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 16, marginTop: 24 }}>
            {layers.map((item) => (
              <article key={item.label} style={{ ...cardStyle, borderTop: `3px solid ${item.color}` }}>
                <p style={{ margin: "0 0 12px", color: item.color, fontFamily: FONT.mono, fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>{item.label}</p>
                <h3 style={{ margin: "0 0 12px", color: TEXT.primary, fontSize: 20, lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ ...bodyStyle, fontSize: 14 }}>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 58 }}>
          <p style={{ color: SPECTRUM.blue, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Una fuente, distintas tareas para quien lee</p>
          <h2 style={headingStyle}>La aplicación cambia según quién necesita la información.</h2>
          <p style={{ ...bodyStyle, maxWidth: 800, marginTop: 14 }}>
            Una persona que observa su propia reacción necesita una página distinta de alguien que intenta reconocer la violencia que recibe. El mapa de fondo puede estar relacionado. Las preguntas, las medidas de protección, el lenguaje y los siguientes pasos no son intercambiables.
          </p>
          <div style={{ display: "grid", gap: 14, marginTop: 24 }}>
            {applications.map((item) => (
              <article key={item.title} style={cardStyle}>
                <h3 style={{ margin: "0 0 8px", color: TEXT.primary, fontSize: 20 }}>{item.title}</h3>
                <p style={{ ...bodyStyle, fontSize: 15 }}>{item.body}</p>
                {item.href && <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 14, color: SPECTRUM.azure, fontWeight: 700 }}>{item.cta}</a>}
              </article>
            ))}
          </div>
        </section>

        <section style={{ ...cardStyle, marginBottom: 58, background: BG.elevated }}>
          <p style={{ color: SPECTRUM.cobalt, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Construir una aplicación relacionada</p>
          <h2 style={{ ...headingStyle, marginBottom: 16 }}>El punto de partida es la persona y la decisión que la herramienta debe ayudarle a tomar.</h2>
          <p style={{ ...bodyStyle, maxWidth: 820 }}>
            Organizaciones, ONG, equipos educativos, grupos de investigación e instituciones públicas pueden necesitar aplicaciones distintas. Una primera conversación útil define la audiencia, la conducta o patrón que se quiere hacer visible, la evidencia disponible, los requisitos de seguridad y accesibilidad, la autoría de las fuentes y aquello que la herramienta nunca debe afirmar.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
            <a href="mailto:contact@teg-blue.com?subject=Aplicación%20TEG-Blue" style={{ padding: "11px 16px", borderRadius: RADIUS.md, background: SPECTRUM.azure, color: "#07111f", fontWeight: 750, textDecoration: "none" }}>Hablar sobre una herramienta aplicada</a>
            <Link href="/scientific-foundations" style={{ padding: "11px 16px", border: `1px solid ${BORDER.default}`, borderRadius: RADIUS.md, color: TEXT.primary, fontWeight: 650, textDecoration: "none" }}>Examinar la fundamentación científica</Link>
          </div>
        </section>

        <section style={{ marginBottom: 28 }}>
          <p style={{ ...bodyStyle, fontSize: 14 }}>
            El TEG-Blue Engine y su lógica aplicada fueron creados por <a href="https://annaparetas.com" target="_blank" rel="noopener noreferrer" style={{ color: SPECTRUM.azure }}>Anna Paretas-Artacho</a>. Esta explicación pública no incluye la lógica privada del Engine, materiales de terceros ni instrumentos con otra autoría dentro de la licencia abierta.
          </p>
        </section>
      </PageLayout>
      <SiteFooter locale="es" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
    </div>
  );
}
