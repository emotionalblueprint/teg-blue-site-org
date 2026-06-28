import { BG, TEXT, BORDER, FONT, SPACING, RADIUS, hexToRgba, SPECTRUM } from "@/src/styles/tokens";
import { SiteFooter, SiteHeader } from "@/src/components";
import { positions } from "@/src/lib/gradient-data";
import { BASE_URL } from "@/src/i18n/config";

const TITLE = "TEG-Blue — El Gradiente del Sistema Nervioso";
const DESCRIPTION =
  "El centro público actual de TEG-Blue en español: un mapa del sistema nervioso que muestra cómo la seguridad y la amenaza reorganizan percepción, emoción, cuerpo, conducta y reparación.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${BASE_URL}/es`,
    languages: {
      en: BASE_URL,
      es: `${BASE_URL}/es`,
      "x-default": BASE_URL,
    },
  },
  keywords: [
    "gradiente emocional",
    "sistema nervioso",
    "regulación emocional",
    "neurocepción",
    "teoría polivagal",
    "interocepción",
    "trauma",
    "reparación",
    "TEG-Blue",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE_URL}/es`,
    siteName: "TEG-Blue",
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  other: {
    "content-language": "es",
  },
};

const stateCopy = {
  baseline: {
    label: "Base fisiológica",
    sub: "disponibilidad en reposo",
    mechanism: "Restauración y capacidad amplia disponibles.",
  },
  connection: {
    label: "Conexión",
    sub: "seguridad y reciprocidad",
    mechanism: "Seguridad con otras personas; el vínculo y la co-regulación pueden estar disponibles.",
  },
  calibration: {
    label: "Calibración",
    sub: "transición A-B",
    mechanism: "Incertidumbre relacional; el sistema comprueba si la seguridad sigue presente.",
  },
  protection: {
    label: "Protección",
    sub: "amenaza y defensa",
    mechanism: "La amenaza moviliza límite, distancia, escape o defensa.",
  },
  strategic: {
    label: "Control estratégico",
    sub: "amenaza sostenida",
    mechanism: "La cognición se organiza alrededor de gestión, predicción y control.",
  },
  domination: {
    label: "Dominación",
    sub: "poder y supervivencia",
    mechanism: "La movilización de poder supera el acceso relacional.",
  },
  shutdown: {
    label: "Apagamiento",
    sub: "conservación o colapso",
    mechanism: "La movilización cae y la conservación se vuelve primaria.",
  },
};

const gradientDefinitionMoves = [
  {
    label: "Lee",
    title: "Seguridad, amenaza y descanso",
    body: "El cuerpo está leyendo continuamente el entorno: ¿hay seguridad, hay amenaza, puedo descansar o conectar?",
    color: SPECTRUM.azure,
  },
  {
    label: "Se mueve",
    title: "Cambios fluidos de estado",
    body: "El sistema nervioso puede cambiar de configuración en milisegundos, o sostener una orientación durante días o meses.",
    color: SPECTRUM.sky,
  },
  {
    label: "Organiza",
    title: "Todo el organismo",
    body: "Cuando el sistema cambia de estado, también cambian cuerpo, mente, emoción, conducta, percepción y capacidad de reparación.",
    color: SPECTRUM.indigo,
  },
  {
    label: "Se endurece",
    title: "Cuando la amenaza dura",
    body: "Si la amenaza se prolonga, el patrón puede volverse crónico: el sistema sigue buscando peligro incluso cuando el presente es seguro.",
    color: "var(--accent-amber, #e9a23b)",
  },
];

const explains = [
  ["Por qué el cuidado no siempre basta", "bajo amenaza, la empatía se estrecha incluso cuando la intención es buena."],
  ["Cómo el daño puede volverse normal", "si la empatía queda fuera de línea demasiado tiempo, el coste para otras personas deja de registrarse del todo."],
  ["Cómo la defensa se endurece en control", "la protección repetida puede convertirse en regla, castigo, exclusión o lógica de sistema."],
  ["Un lenguaje para los cambios mientras ocurren", "los estados pueden nombrarse sin reducir a las personas a rasgos fijos de carácter."],
  ["Una ruta de vuelta a la conexión", "la reparación empieza en el estado real del sistema y necesita suficiente seguridad para que la empatía regrese."],
];

const grounding = [
  {
    part: "Jerarquía autonómica",
    science: "Teoría Polivagal y neurocepción",
    authors: "Porges",
  },
  {
    part: "Activación y carga crónica",
    science: "Fisiología del estrés y carga alostática",
    authors: "Sapolsky · McEwen",
  },
  {
    part: "Percepción y cognición dependientes del estado",
    science: "Ciencia cognitiva, interocepción y neurociencia afectiva",
    authors: "Barrett · Kahneman · Craig · Panksepp · Damasio",
  },
  {
    part: "Defensa, apego y reparación",
    science: "Investigación sobre trauma, apego y co-regulación",
    authors: "Levine · van der Kolk · Bowlby · Siegel",
  },
];

const attributionNotice = {
  title: "Autoría y uso",
  body:
    "TEG-Blue y el Gradiente del Sistema Nervioso fueron creados por Anna Paretas-Artacho. El contenido público del marco se publica bajo CC BY-NC-SA 4.0: requiere atribución, uso no comercial y compartir cualquier adaptación bajo la misma licencia.",
  restriction:
    "Cualquier uso comercial, institucional, de producto, o integración en modelos, conjuntos de datos o sistemas computacionales requiere permiso explícito o una licencia separada.",
};

const faq = [
  {
    question: "¿Qué es TEG-Blue?",
    answer:
      "TEG-Blue es el Blueprint del Gradiente Emocional: un marco visual por capas que mapea cómo se forman y evolucionan emociones, sistemas nerviosos, estrategias de supervivencia, identidad y patrones sociales.",
  },
  {
    question: "¿Qué es el Gradiente del Sistema Nervioso?",
    answer:
      "Es un mapa de estados del sistema nervioso. El cuerpo lee continuamente si hay seguridad o amenaza, más rápido que el pensamiento consciente, y organiza todo el sistema en una línea que va desde descanso y conexión hasta defensa, control y apagamiento.",
  },
  {
    question: "¿Es una teoría clínica validada?",
    answer:
      "No se presenta como validación clínica completa. La arquitectura de TEG-Blue muestra trazas de origen y puntos de convergencia con investigación establecida, mientras mantiene abiertas sus hipótesis para revisión y prueba.",
  },
  {
    question: "¿Por qué algunos estados se vuelven crónicos?",
    answer:
      "Cada posición puede ser una respuesta pasajera. Cuando el sistema no puede salir de una posición, esa respuesta deja de pasar y se endurece como configuración por defecto. Eso describe una restricción del sistema, no un juicio sobre la persona.",
  },
];

const sectionStyle = {
  width: "100%",
  maxWidth: SPACING.containerMax,
  margin: "0 auto",
  padding: `0 ${SPACING.pagePadding}`,
};

const eyebrowStyle = {
  margin: "0 0 12px",
  fontFamily: FONT.diagram,
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: TEXT.muted,
};

const sectionEyebrowStyle = { ...eyebrowStyle, color: "var(--spectrum-indigo)" };

const cardStyle = {
  background: BG.diagram,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.xl,
  padding: "clamp(20px, 3vw, 28px)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
};

const homeSurface = {
  primary: "var(--bg-primary, #151c35)",
  text: "var(--text-primary, #f1f5f9)",
  secondary: "var(--text-secondary, #cbd5e1)",
  muted: "var(--text-muted, #94a3b8)",
  border: "var(--border-default, rgba(148, 163, 184, 0.12))",
};

function Ld({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function StateSpineStrip() {
  return (
    <div
      className="state-spine-strip"
      aria-label="Estados desde seguridad hasta apagamiento"
      style={{ margin: "24px auto 0", maxWidth: 860, padding: 0 }}
    >
      <div className="state-spine-list" role="list" style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {positions.map((p) => (
          <div
            className="state-spine-item"
            role="listitem"
            key={p.id}
            style={{
              flex: "1 1 96px",
              minWidth: 96,
              borderRadius: RADIUS.md,
              border: `1px solid ${BORDER.default}`,
              borderTop: `2px solid ${p.acuteColor}`,
              background: BG.diagram,
              padding: "9px 10px 8px",
              textAlign: "left",
            }}
          >
            <span style={{ display: "block", fontFamily: FONT.diagram, fontSize: 11, fontWeight: 650, letterSpacing: "0.08em", color: p.acuteColor }}>
              {p.code}
            </span>
            <span style={{ display: "block", marginTop: 3, fontSize: 11, lineHeight: 1.25, color: TEXT.secondary }}>
              {stateCopy[p.id].label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GradientDefinitionCard() {
  return (
    <div
      style={{
        ...cardStyle,
        padding: 0,
        overflow: "hidden",
        background: homeSurface.primary,
        border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.16)}`,
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))" }}>
        <div style={{ display: "flex", minHeight: "100%", flexDirection: "column", gap: 28, padding: "clamp(20px, 3vw, 30px)" }}>
          <div>
            <p style={{ ...sectionEyebrowStyle, color: "var(--spectrum-azure, #76e2ff)", margin: "0 0 10px" }}>Qué es el gradiente</p>
            <h2
              id="what-gradient-is-heading"
              style={{
                margin: 0,
                maxWidth: 620,
                color: homeSurface.text,
                fontSize: "clamp(21px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.16,
              }}
            >
              Un continuo de organización del sistema nervioso.
            </h2>
            <p style={{ margin: "14px 0 0", maxWidth: 680, color: homeSurface.secondary, fontSize: 15, lineHeight: 1.7 }}>
              El gradiente mapea cómo el sistema nervioso se organiza al leer{" "}
              <strong style={{ color: homeSurface.text, fontWeight: 650 }}>seguridad, amenaza y posibilidad de descanso</strong>.
              Es un mapa de estado: cuando cambia la configuración, cambia lo que la persona puede percibir, sentir,
              pensar, hacer y reparar.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", gap: 5, alignItems: "center" }} aria-hidden="true">
              {positions.map((p) => (
                <span
                  key={p.id}
                  style={{
                    flex: p.id === "shutdown" ? "0.7 1 0" : "1 1 0",
                    height: 5,
                    borderRadius: 999,
                    background: p.acuteColor,
                    opacity: p.id === "shutdown" ? 0.58 : 0.9,
                  }}
                />
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                marginTop: 8,
                color: homeSurface.muted,
                fontFamily: FONT.diagram,
                fontSize: 10,
                lineHeight: 1.4,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              <span>Descanso + conexión</span>
              <span>Defensa + apagamiento</span>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", alignContent: "start", borderLeft: `1px solid ${homeSurface.border}` }}>
          {gradientDefinitionMoves.map((item, index) => (
            <div
              key={item.label}
              style={{
                display: "grid",
                gridTemplateColumns: "92px minmax(0, 1fr)",
                gap: 16,
                alignItems: "start",
                padding: "clamp(14px, 1.8vw, 18px) clamp(18px, 2.7vw, 24px)",
                borderTop: index === 0 ? 0 : `1px solid ${homeSurface.border}`,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: item.color,
                  fontFamily: FONT.diagram,
                  fontSize: 10,
                  fontWeight: 650,
                  letterSpacing: "0.1em",
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    flex: "0 0 auto",
                    borderRadius: "50%",
                    background: item.color,
                    boxShadow: `0 0 0 4px color-mix(in srgb, ${item.color} 14%, transparent)`,
                  }}
                  aria-hidden="true"
                />
                {item.label}
              </span>
              <div>
                <p style={{ margin: 0, color: homeSurface.text, fontSize: 14.5, fontWeight: 650, lineHeight: 1.35 }}>{item.title}</p>
                <p style={{ margin: "5px 0 0", color: homeSurface.secondary, fontSize: 13.5, lineHeight: 1.6 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const gradientJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "El Gradiente del Sistema Nervioso",
  alternateName: "TEG-Blue: The Emotional Gradient Blueprint",
  url: `${BASE_URL}/es`,
  inLanguage: "es",
  description: DESCRIPTION,
  author: { "@type": "Person", name: "Anna Paretas-Artacho", url: "https://orcid.org/0009-0005-2394-7162" },
  creator: { "@type": "Person", name: "Anna Paretas-Artacho", url: "https://orcid.org/0009-0005-2394-7162" },
  copyrightHolder: { "@type": "Person", name: "Anna Paretas-Artacho" },
  copyrightNotice: "TEG-Blue / The Nervous System Gradient created by Anna Paretas-Artacho. Public framework content is licensed CC BY-NC-SA 4.0; commercial, institutional, product, model, or dataset integration requires explicit permission or a separate license.",
  license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  publisher: { "@type": "Organization", name: "TEG-Blue", url: BASE_URL },
  isPartOf: {
    "@type": "ResearchProject",
    name: "TEG-Blue: The Emotional Gradient Blueprint",
    url: BASE_URL,
    inLanguage: "es",
  },
  about: {
    "@type": "ItemList",
    name: "Estados del sistema nervioso en el Gradiente del Sistema Nervioso",
    numberOfItems: positions.length,
    itemListElement: positions.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "DefinedTerm",
        name: stateCopy[p.id].label,
        description: stateCopy[p.id].mechanism,
      },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "es",
  mainEntity: faq.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "TEG-Blue",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "El Gradiente del Sistema Nervioso",
      item: `${BASE_URL}/es`,
    },
  ],
};

export default function SpanishHome() {
  return (
    <>
      <Ld data={gradientJsonLd} />
      <Ld data={faqJsonLd} />
      <Ld data={breadcrumbJsonLd} />

      <SiteHeader currentPath="/es" />

      <main id="main-content" style={{ background: BG.page, fontFamily: FONT.display, paddingBottom: 64 }}>
        <section style={{ ...sectionStyle, paddingTop: "clamp(48px, 8vw, 88px)", paddingBottom: 40, textAlign: "center" }}>
          <p style={eyebrowStyle}>TEG-Blue · The Emotional Gradient Blueprint</p>
          <h1 style={{ margin: "0 auto", maxWidth: 760, fontSize: "clamp(26px, 4vw, 34px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: TEXT.primary }}>
            El Gradiente del Sistema Nervioso
          </h1>
          <p style={{ margin: "14px auto 0", maxWidth: 700, fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: 1.7, color: TEXT.secondary }}>
            No permanecemos iguales en todas las situaciones: podemos estar abiertos y confiados en un momento,
            protegidos o controladores en el siguiente. Esos cambios no son aleatorios. Son cambios de estado en el sistema nervioso.
          </p>
          <p id="gradient-intro" style={{ margin: "14px auto 0", maxWidth: 700, fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: 1.7, color: TEXT.secondary }}>
            El cuerpo sigue leyendo una pregunta —{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>¿hay seguridad o hay peligro?</strong> — más rápido
            que el pensamiento. La respuesta coloca al sistema en una línea:{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>descanso y conexión</strong> en el extremo seguro,{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>defensa y control</strong> cuando aumenta la amenaza, y{" "}
            <strong style={{ color: TEXT.primary, fontWeight: 600 }}>apagamiento</strong> cuando la movilización no puede formarse.
          </p>
          <StateSpineStrip />
          <div style={{ width: 48, height: 2, borderRadius: 2, background: "var(--spectrum-azure)", opacity: 0.7, margin: "24px auto 0" }} aria-hidden="true" />
        </section>

        <section style={{ ...sectionStyle, paddingBottom: "clamp(28px, 4vw, 44px)" }} aria-labelledby="what-gradient-is-heading">
          <GradientDefinitionCard />
        </section>

        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="states-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Los siete estados</p>
            <h2 id="states-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
              Una línea de seguridad, defensa, control y conservación
            </h2>
            <p style={{ margin: "0 0 24px", maxWidth: 740, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              Cada posición describe una configuración completa del organismo. No es un estado de ánimo aislado:
              percepción, cognición, cuerpo, emoción, conducta y reparación se reorganizan juntos.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 12 }}>
              {positions.map((p) => (
                <div
                  key={p.id}
                  style={{
                    border: `1px solid ${BORDER.default}`,
                    borderTop: `3px solid ${p.acuteColor}`,
                    borderRadius: RADIUS.md,
                    background: BG.card,
                    padding: 16,
                  }}
                >
                  <p style={{ margin: "0 0 6px", fontFamily: FONT.diagram, fontSize: 11, fontWeight: 650, letterSpacing: "0.08em", color: p.acuteColor }}>
                    {p.code} · {stateCopy[p.id].sub}
                  </p>
                  <h3 style={{ margin: "0 0 8px", color: TEXT.primary, fontSize: 16, lineHeight: 1.3 }}>{stateCopy[p.id].label}</h3>
                  <p style={{ margin: 0, color: TEXT.secondary, fontSize: 13.5, lineHeight: 1.6 }}>{stateCopy[p.id].mechanism}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="explains-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Qué explica</p>
            <h2 id="explains-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
              De patrones personales a sistemas sociales
            </h2>
            <p style={{ margin: "0 0 20px", maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              La misma forma puede leerse en una persona, una familia, una institución o un grupo. Ayuda a explicar cómo se forma el daño sin justificar el daño.
            </p>
            <ul style={{ margin: "0 0 28px", padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
              {explains.map(([head, body]) => (
                <li key={head} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, marginTop: 9, width: 6, height: 6, borderRadius: "50%", background: "var(--spectrum-indigo)" }} aria-hidden="true" />
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: TEXT.secondary }}>
                    <strong style={{ fontWeight: 600, color: TEXT.primary }}>{head}</strong> — {body}
                  </p>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
              <a
                href="https://teg-blue.com/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "10px 16px",
                  borderRadius: RADIUS.md,
                  border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.3)}`,
                  background: hexToRgba(SPECTRUM.indigo, 0.1),
                  color: "var(--spectrum-indigo)",
                  fontFamily: FONT.mono,
                  fontSize: 12,
                  fontWeight: 600,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Explorar las herramientas ↗
              </a>
              <span style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.04em", color: TEXT.muted }}>teg-blue.com</span>
            </div>
          </div>
        </section>

        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="science-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Fundamento</p>
            <h2 id="science-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
              Investigación establecida y trazas de origen
            </h2>
            <p style={{ margin: "0 0 24px", maxWidth: 740, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              La arquitectura guía el mapa, y el marco público muestra dónde la investigación establecida converge con
              partes concretas del modelo. Son puntos de fundamento y trazas de origen, no una afirmación de validación clínica completa.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px 28px" }}>
              {grounding.map((s) => (
                <div key={s.part}>
                  <p style={{ margin: 0, fontFamily: FONT.diagram, fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--spectrum-indigo)" }}>{s.part}</p>
                  <p style={{ margin: "4px 0 0", fontSize: 13.5, lineHeight: 1.55, color: TEXT.secondary }}>
                    {s.science} <span style={{ color: TEXT.muted }}>· {s.authors}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ ...sectionStyle, paddingBottom: 56 }} aria-labelledby="rights-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Uso y atribución</p>
            <h2 id="rights-heading" style={{ margin: "0 0 8px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
              {attributionNotice.title}
            </h2>
            <p style={{ margin: "0 0 14px", maxWidth: 760, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              {attributionNotice.body}{" "}
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--spectrum-indigo)", textDecoration: "none", fontWeight: 600 }}
              >
                Ver licencia
              </a>
              .
            </p>
            <p style={{ margin: 0, maxWidth: 760, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
              {attributionNotice.restriction}
            </p>
          </div>
        </section>

        <section style={{ ...sectionStyle, paddingBottom: 40 }} aria-labelledby="faq-heading">
          <div style={cardStyle}>
            <p style={sectionEyebrowStyle}>Preguntas</p>
            <h2 id="faq-heading" style={{ margin: "0 0 24px", fontSize: "clamp(22px, 3.4vw, 30px)", letterSpacing: "-0.02em", color: TEXT.primary }}>
              Preguntas frecuentes
            </h2>
            <div style={{ display: "grid", gap: 10 }}>
              {faq.map((q) => (
                <details key={q.question}>
                  <summary className="faq-question">{q.question}</summary>
                  <div>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>{q.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
