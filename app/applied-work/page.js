import Link from "next/link";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { BG, BORDER, FONT, RADIUS, SPECTRUM, TEXT, contrastColor, hexToRgba } from "@/src/styles/tokens";

export const metadata = {
  title: "Applied Work | Build with TEG-Blue",
  description: "How organisations, NGOs, research teams and public institutions can explore a carefully scoped educational or digital application with TEG-Blue.",
  alternates: {
    canonical: "https://teg-blue.org/applied-work",
    languages: { en: "https://teg-blue.org/applied-work", es: "https://teg-blue.org/es/applied-work", "x-default": "https://teg-blue.org/applied-work" },
  },
  openGraph: { title: "Applied Work with TEG-Blue", description: "From a human question to a carefully scoped educational or digital tool.", url: "https://teg-blue.org/applied-work", type: "website", siteName: "TEG-Blue" },
};

const audiences = [
  ["NGOs and public-interest teams", "Tools that make a difficult pattern easier to recognise while protecting agency, dignity and safety."],
  ["Education and training", "Visual explanations, learning journeys and interactive materials for a defined audience and context."],
  ["Research groups", "Structured translations of a research question, with source boundaries and open questions kept visible."],
  ["Institutions and product teams", "Public information systems, behaviour pages or digital tools that need clear language, traceable logic and responsible limits."],
];

const process = [
  ["01", "Define the reader", "Who will use the work, what situation brings them to it, and which decision should become clearer?"],
  ["02", "Set the evidence boundary", "What is established, what is interpretation, what belongs to TEG-Blue, and what must remain an open question?"],
  ["03", "Design the public experience", "Choose the information structure, language, interaction and level of detail that fit the reader."],
  ["04", "Review safety and rights", "Check accessibility, safeguarding, attribution, ownership, permissions, privacy and claims before publication."],
];

const boundaries = [
  "A first conversation is exploratory. It does not imply partnership, endorsement, approval or permission to use Engine logic.",
  "Every application needs its own agreement, attribution, ownership boundaries and review process.",
  "TEG-Blue does not provide diagnosis, treatment, medical or legal advice, crisis support, or certainty about a person’s inner state.",
  "Where risk is material, relevant safeguarding, legal, clinical, subject-matter or lived-experience expertise may need to sit beside the build.",
];

const card = { padding: 22, border: `1px solid ${BORDER.default}`, borderRadius: RADIUS.lg, background: BG.card };
const body = { margin: 0, color: TEXT.secondary, fontSize: 15, lineHeight: 1.72 };
const heading = { margin: "0 0 14px", color: TEXT.primary, fontSize: "clamp(25px, 3vw, 35px)", lineHeight: 1.18 };

export default function AppliedWorkPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/applied-work" />
      <PageLayout header={<ResearcherHero badge="APPLIED WORK" title="Build a tool for a particular human question" subtitle="Applied work with TEG-Blue" description="Some patterns are difficult to explain without losing context. TEG-Blue can help organisations turn a defined question into a visual explanation, behaviour page, educational resource or digital tool." />}>
        <section style={{ marginBottom: 54 }}>
          <p style={{ ...body, maxWidth: 820, fontSize: 19 }}>The useful starting point is not a format. It is the person who needs the information and what they should be able to understand, distinguish or decide after using it.</p>
          <div style={{ marginTop: 22, padding: 20, borderLeft: `3px solid ${SPECTRUM.azure}`, borderRadius: RADIUS.md, background: hexToRgba(SPECTRUM.azure, 0.07) }}><p style={body}><strong style={{ color: TEXT.primary }}>Applied work is not a copy of the public framework.</strong> Each build selects and translates only what the audience and purpose require, while keeping the deeper source and ethical boundaries traceable.</p></div>
        </section>

        <section style={{ marginBottom: 58 }}>
          <p style={{ color: SPECTRUM.azure, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700 }}>WHO THIS MAY FIT</p>
          <h2 style={heading}>Different organisations bring different reader needs.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 15 }}>
            {audiences.map(([title, text]) => <article key={title} style={card}><h3 style={{ margin: "0 0 9px", color: TEXT.primary, fontSize: 19 }}>{title}</h3><p style={body}>{text}</p></article>)}
          </div>
        </section>

        <section style={{ marginBottom: 58 }}>
          <p style={{ color: SPECTRUM.blue, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700 }}>HOW A BUILD BEGINS</p>
          <h2 style={heading}>Scope comes before interface.</h2>
          <div style={{ display: "grid", gap: 13 }}>
            {process.map(([number, title, text]) => <article key={number} style={{ ...card, display: "grid", gridTemplateColumns: "48px minmax(0, 1fr)", gap: 15 }}><span style={{ color: SPECTRUM.azure, fontFamily: FONT.mono, fontWeight: 700 }}>{number}</span><div><h3 style={{ margin: "0 0 7px", color: TEXT.primary, fontSize: 19 }}>{title}</h3><p style={body}>{text}</p></div></article>)}
          </div>
        </section>

        <section style={{ marginBottom: 58 }}>
          <p style={{ color: SPECTRUM.cobalt, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700 }}>BEFORE PUBLICATION</p>
          <h2 style={heading}>The limits are part of the design.</h2>
          <div style={card}>{boundaries.map((item) => <p key={item} style={{ ...body, padding: "11px 0", borderBottom: `1px solid ${BORDER.default}` }}>{item}</p>)}</div>
        </section>

        <section style={{ ...card, marginBottom: 36, background: BG.diagram }}>
          <p style={{ color: SPECTRUM.indigo, fontFamily: FONT.mono, fontSize: 12, fontWeight: 700 }}>A USEFUL FIRST MESSAGE</p>
          <h2 style={heading}>Describe the reader, the problem and the intended use.</h2>
          <p style={{ ...body, maxWidth: 820 }}>Include who the work is for, what currently feels difficult to explain, where it would be used, the material already available, the people who need to review it, and any known safety, accessibility, privacy, timing or ownership requirements.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
            <a href="mailto:contact@teg-blue.com?subject=Applied%20work%20with%20TEG-Blue" style={{ padding: "11px 16px", borderRadius: RADIUS.md, background: SPECTRUM.azure, color: contrastColor(SPECTRUM.azure), fontWeight: 750, textDecoration: "none" }}>Discuss an applied project</a>
            <Link href="/engine" style={{ padding: "11px 16px", border: `1px solid ${BORDER.default}`, borderRadius: RADIUS.md, color: TEXT.primary, fontWeight: 650, textDecoration: "none" }}>How the Engine works</Link>
          </div>
        </section>
        <section><p style={{ ...body, fontSize: 13.5 }}>Applied TEG-Blue work is developed by <a href="https://annaparetas.com" target="_blank" rel="noopener noreferrer" style={{ color: SPECTRUM.azure }}>Anna Paretas-Artacho</a>. A public explanation of the process does not place private Engine logic, software, tools or third-party material under an open licence.</p></section>
      </PageLayout>
      <SiteFooter />
    </div>
  );
}
