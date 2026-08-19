import Link from "next/link";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { BG, BORDER, FONT, RADIUS, SPECTRUM, TEXT, hexToRgba } from "@/src/styles/tokens";

export const metadata = {
  title: "TEG-Blue Engine | From Framework to Applied Tools",
  description: "How the TEG-Blue Engine turns The Emotional Gradient Blueprint into structured, traceable public tools and applied digital builds.",
  alternates: { canonical: "https://teg-blue.org/engine" },
  openGraph: {
    title: "The TEG-Blue Engine",
    description: "The source-tracing and tool-building system behind TEG-Blue public tools and applied builds.",
    url: "https://teg-blue.org/engine",
    type: "article",
    siteName: "TEG-Blue",
  },
};

const layers = [
  {
    label: "Preserve",
    title: "Keep the source and the distinctions",
    body: "The deeper layer records where an idea comes from, what the source supports, what TEG-Blue adds, and where a claim must stop.",
    color: SPECTRUM.azure,
  },
  {
    label: "Translate",
    title: "Choose the detail the reader needs",
    body: "The same architecture can be compressed into a practical map without presenting a simplified label as the whole science.",
    color: SPECTRUM.blue,
  },
  {
    label: "Build",
    title: "Write the public behaviour page",
    body: "A tool begins with what a person can recognise: what happened, what repeated, what it changed, and which choices or routes remained available.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Check",
    title: "Hold purpose, safety, and ownership together",
    body: "Each build needs its own reader contract. A self-reflection tool and a violence-recognition tool may share a source, but they must not give the reader the same task.",
    color: SPECTRUM.indigo,
  },
];

const applications = [
  {
    title: "A practical self-reflection tool",
    body: "teg-blue.com uses a four-mode compression to help a person examine their own response, impact, responsibility, regulation, and repair.",
    href: "https://teg-blue.com/emotional-tools",
    cta: "Explore practical tools ↗",
  },
  {
    title: "A harm-facing educational build",
    body: "A violence-recognition application needs different language, safety routes, ownership checks, and a clear separation between understanding a mechanism and excusing its impact.",
  },
  {
    title: "An institutional or research application",
    body: "The Engine can inform structured educational maps, behaviour pages, content systems, or digital tools when the audience, evidence boundary, safeguarding needs, and rights are defined first.",
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

export default function EnginePage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/engine" />
      <PageLayout
        header={
          <ResearcherHero
            badge="TOOL-BUILDING SYSTEM"
            title="The TEG-Blue Engine"
            subtitle="How the framework becomes a public tool"
            description="The Engine is the source-tracing and tool-building system behind TEG-Blue applications. It helps preserve the depth of the framework while writing each public page for the person who will actually use it."
          />
        }
      >
        <section style={{ marginBottom: 54 }}>
          <p style={{ ...bodyStyle, maxWidth: 820, fontSize: 19 }}>
            When a behaviour page feels simple, much of the work sits underneath it. The Engine keeps the scientific source, TEG-Blue interpretation, public wording, ethical boundary, and product purpose connected without treating them as the same thing.
          </p>
          <div style={{ marginTop: 22, padding: 22, borderLeft: `3px solid ${SPECTRUM.azure}`, background: hexToRgba(SPECTRUM.azure, 0.07), borderRadius: RADIUS.md }}>
            <p style={bodyStyle}>
              <strong style={{ color: TEXT.primary }}>The Engine is not an automated judge of people.</strong> It does not diagnose a person, prove motive, or turn one answer into a verdict. It is a disciplined way to build educational tools from a layered framework.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 58 }}>
          <p style={{ color: SPECTRUM.azure, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>How it works</p>
          <h2 style={headingStyle}>Four kinds of work sit behind the visible page.</h2>
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
          <p style={{ color: SPECTRUM.blue, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>One source, different reader tasks</p>
          <h2 style={headingStyle}>The application changes according to who needs the information.</h2>
          <p style={{ ...bodyStyle, maxWidth: 800, marginTop: 14 }}>
            A person looking at their own reaction needs a different page from someone trying to recognise violence directed at them. The underlying map may be related. The questions, safeguards, language, and next steps are not interchangeable.
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
          <p style={{ color: SPECTRUM.cobalt, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Building a related application</p>
          <h2 style={{ ...headingStyle, marginBottom: 16 }}>Start with the reader and the decision the tool should support.</h2>
          <p style={{ ...bodyStyle, maxWidth: 820 }}>
            Organisations, NGOs, educational teams, researchers, and public institutions may need different kinds of applied tools. A useful first conversation defines the audience, the behaviour or pattern to be made legible, the available evidence, safety and accessibility requirements, ownership of the source material, and what the tool must never claim.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
            <a href="mailto:contact@teg-blue.com?subject=Applied%20TEG-Blue%20tool" style={{ padding: "11px 16px", borderRadius: RADIUS.md, background: SPECTRUM.azure, color: "#07111f", fontWeight: 750, textDecoration: "none" }}>Discuss an applied tool</a>
            <Link href="/scientific-foundations" style={{ padding: "11px 16px", border: `1px solid ${BORDER.default}`, borderRadius: RADIUS.md, color: TEXT.primary, fontWeight: 650, textDecoration: "none" }}>Examine the scientific grounding</Link>
          </div>
        </section>

        <section style={{ marginBottom: 28 }}>
          <p style={{ ...bodyStyle, fontSize: 14 }}>
            The TEG-Blue Engine and its applied logic were created by <a href="https://annaparetas.com" target="_blank" rel="noopener noreferrer" style={{ color: SPECTRUM.azure }}>Anna Paretas-Artacho</a>. Public explanation does not place private Engine logic, third-party materials, or independently owned instruments under an open licence.
          </p>
        </section>
      </PageLayout>
      <SiteFooter />
    </div>
  );
}
