import Link from "next/link";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { BG, BORDER, FONT, RADIUS, SPECTRUM, TEXT, contrastColor, hexToRgba } from "@/src/styles/tokens";

export const metadata = {
  title: "Trabajo aplicado | Construir con TEG-Blue",
  description: "Cómo organizaciones, ONG, equipos de investigación e instituciones públicas pueden explorar una aplicación educativa o digital con TEG-Blue.",
  alternates: { canonical: "https://teg-blue.org/es/applied-work", languages: { en: "https://teg-blue.org/applied-work", es: "https://teg-blue.org/es/applied-work", "x-default": "https://teg-blue.org/applied-work" } },
  openGraph: { title: "Trabajo aplicado con TEG-Blue", description: "De una pregunta humana a una herramienta educativa o digital con un alcance claro.", url: "https://teg-blue.org/es/applied-work", type: "website", siteName: "TEG-Blue", locale: "es_ES" },
};

const audiences = [
  ["ONG y equipos de interés público", "Herramientas que hacen un patrón difícil más reconocible mientras protegen agencia, dignidad y seguridad."],
  ["Educación y formación", "Explicaciones visuales, recorridos de aprendizaje y materiales interactivos para una audiencia y un contexto definidos."],
  ["Grupos de investigación", "Traducciones estructuradas de una pregunta de investigación que mantienen visibles los límites de las fuentes y las preguntas abiertas."],
  ["Instituciones y equipos de producto", "Sistemas de información pública, páginas de conducta o herramientas digitales que necesitan lenguaje claro, lógica trazable y límites responsables."],
];
const process = [
  ["01", "Definir a la persona que leerá", "¿Quién utilizará el trabajo, qué situación le trae y qué decisión debería resultar más clara?"],
  ["02", "Establecer el límite de la evidencia", "¿Qué está establecido, qué es interpretación, qué aporta TEG-Blue y qué debe seguir siendo una pregunta abierta?"],
  ["03", "Diseñar la experiencia pública", "Elegir la estructura, el lenguaje, la interacción y el nivel de detalle que encajan con la audiencia."],
  ["04", "Revisar seguridad y derechos", "Comprobar accesibilidad, protección, atribución, autoría, permisos, privacidad y afirmaciones antes de publicar."],
];
const boundaries = [
  "Una primera conversación es exploratoria. No implica colaboración, respaldo, aprobación ni permiso para utilizar la lógica del Engine.",
  "Cada aplicación necesita su propio acuerdo, atribución, límites de autoría y proceso de revisión.",
  "TEG-Blue no ofrece diagnóstico, tratamiento, asesoramiento médico o legal, apoyo en crisis ni certeza sobre el estado interno de una persona.",
  "Cuando existe un riesgo material, el desarrollo puede necesitar revisión especializada en protección, derecho, clínica, contenido o experiencia vivida.",
];
const card = { padding: 22, border: `1px solid ${BORDER.default}`, borderRadius: RADIUS.lg, background: BG.card };
const body = { margin: 0, color: TEXT.secondary, fontSize: 15, lineHeight: 1.72 };
const heading = { margin: "0 0 14px", color: TEXT.primary, fontSize: "clamp(25px, 3vw, 35px)", lineHeight: 1.18 };

export default function SpanishAppliedWorkPage() {
  return <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
    <SiteHeader currentPath="/es/applied-work" />
    <PageLayout header={<ResearcherHero badge="TRABAJO APLICADO" title="Construir una herramienta para una pregunta humana concreta" subtitle="Trabajo aplicado con TEG-Blue" description="Algunos patrones son difíciles de explicar sin perder el contexto. TEG-Blue puede ayudar a convertir una pregunta definida en una explicación visual, página de conducta, recurso educativo o herramienta digital." />}>
      <section style={{ marginBottom: 54 }}><p style={{ ...body, maxWidth: 820, fontSize: 19 }}>El punto de partida útil no es el formato. Es la persona que necesita la información y lo que debería poder comprender, distinguir o decidir después de utilizarla.</p><div style={{ marginTop: 22, padding: 20, borderLeft: `3px solid ${SPECTRUM.azure}`, borderRadius: RADIUS.md, background: hexToRgba(SPECTRUM.azure, 0.07) }}><p style={body}><strong style={{ color: TEXT.primary }}>El trabajo aplicado no es una copia del marco público.</strong> Cada desarrollo selecciona y traduce solamente lo que requieren su audiencia y propósito, manteniendo trazables las fuentes y los límites éticos.</p></div></section>
      <section style={{ marginBottom: 58 }}><p style={{ color: SPECTRUM.azure, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700 }}>PARA QUIÉN PUEDE ENCAJAR</p><h2 style={heading}>Organizaciones distintas traen necesidades distintas.</h2><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 15 }}>{audiences.map(([title, text]) => <article key={title} style={card}><h3 style={{ margin: "0 0 9px", color: TEXT.primary, fontSize: 19 }}>{title}</h3><p style={body}>{text}</p></article>)}</div></section>
      <section style={{ marginBottom: 58 }}><p style={{ color: SPECTRUM.blue, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700 }}>CÓMO EMPIEZA UN DESARROLLO</p><h2 style={heading}>El alcance se define antes que la interfaz.</h2><div style={{ display: "grid", gap: 13 }}>{process.map(([number, title, text]) => <article key={number} style={{ ...card, display: "grid", gridTemplateColumns: "48px minmax(0, 1fr)", gap: 15 }}><span style={{ color: SPECTRUM.azure, fontFamily: FONT.mono, fontWeight: 700 }}>{number}</span><div><h3 style={{ margin: "0 0 7px", color: TEXT.primary, fontSize: 19 }}>{title}</h3><p style={body}>{text}</p></div></article>)}</div></section>
      <section style={{ marginBottom: 58 }}><p style={{ color: SPECTRUM.cobalt, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700 }}>ANTES DE PUBLICAR</p><h2 style={heading}>Los límites también forman parte del diseño.</h2><div style={card}>{boundaries.map((item) => <p key={item} style={{ ...body, padding: "11px 0", borderBottom: `1px solid ${BORDER.default}` }}>{item}</p>)}</div></section>
      <section style={{ ...card, marginBottom: 36, background: BG.diagram }}><p style={{ color: SPECTRUM.indigo, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700 }}>UN PRIMER MENSAJE ÚTIL</p><h2 style={heading}>Describe la audiencia, el problema y el uso previsto.</h2><p style={{ ...body, maxWidth: 820 }}>Incluye para quién es el trabajo, qué resulta difícil explicar ahora, dónde se utilizaría, el material ya disponible, quién debe revisarlo y cualquier requisito conocido de seguridad, accesibilidad, privacidad, calendario o autoría.</p><div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}><a href="mailto:contact@teg-blue.com?subject=Trabajo%20aplicado%20con%20TEG-Blue" style={{ padding: "11px 16px", borderRadius: RADIUS.md, background: SPECTRUM.azure, color: contrastColor(SPECTRUM.azure), fontWeight: 750, textDecoration: "none" }}>Hablar sobre un proyecto aplicado</a><Link href="/es/engine" style={{ padding: "11px 16px", border: `1px solid ${BORDER.default}`, borderRadius: RADIUS.md, color: TEXT.primary, fontWeight: 650, textDecoration: "none" }}>Cómo funciona el Engine</Link></div></section>
      <section><p style={{ ...body, fontSize: 13.5 }}>El trabajo aplicado de TEG-Blue es desarrollado por <a href="https://annaparetas.com" target="_blank" rel="noopener noreferrer" style={{ color: SPECTRUM.azure }}>Anna Paretas-Artacho</a>. La explicación pública del proceso no incluye la lógica privada del Engine, el software, las herramientas ni materiales de terceros dentro de la licencia abierta.</p></section>
    </PageLayout><SiteFooter locale="es" />
  </div>;
}
