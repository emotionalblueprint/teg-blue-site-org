import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ExpandableSection } from "@/src/components";

export const metadata = {
  title: "About",
  description: "About TEG-Blue Research Consortium, founder Anna Paretas-Artacho, and our commitment to open science in emotional regulation research.",
};

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/about" />

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {/* Hero */}
        <section style={{ marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            About TEG-Blue Research
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: TEXT.secondary,
              maxWidth: 640,
            }}
          >
            TEG-Blue is a translation architecture that takes established research
            from 47+ scientific domains and organizes it into a unified, visual system
            for understanding emotional experience. Rather than generating new theories,
            it reorganizes existing knowledge into a coherent framework accessible to
            those without specialist training.
          </p>
        </section>

        {/* The Founder */}
        <section
          style={{
            marginBottom: 32,
            padding: 24,
            background: BG.card,
            borderRadius: 12,
            border: `1px solid ${BORDER.default}`,
            borderLeft: `3px solid ${SPECTRUM.indigo}`,
          }}
        >
          <h2
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: SPECTRUM.indigo,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: FONT.mono,
              marginBottom: 12,
            }}
          >
            The Founder
          </h2>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 8,
            }}
          >
            Anna Paretas-Artacho
          </h3>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: TEXT.secondary,
              marginBottom: 16,
            }}
          >
            Anna brings 25 years of experience in visual communications, transforming
            complex concepts into accessible visuals. Following an abusive relationship,
            she undertook intensive self-study to understand the patterns she'd missed—exploring
            polyvagal theory, attachment research, trauma, and family systems. Rather than
            keeping these insights personal, she applied her design expertise to create
            visual structures bridging these fields.
          </p>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: TEXT.secondary,
              marginBottom: 16,
            }}
          >
            The Four-Mode Gradient was not designed first and then explained. It emerged
            through building each Framework, one by one, to explain patterns she had lived
            through and witnessed. The result is nearly two years of independent development
            creating an integrated emotional intelligence system.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              fontSize: 12,
              fontFamily: FONT.mono,
            }}
          >
            <a
              href="https://orcid.org/0009-0005-2394-7162"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: SPECTRUM.azure,
                textDecoration: "none",
              }}
            >
              ORCID: 0009-0005-2394-7162
            </a>
            <span style={{ color: TEXT.micro }}>·</span>
            <a
              href="https://teg-blue.com/about-the-author"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: SPECTRUM.azure,
                textDecoration: "none",
              }}
            >
              Full bio on teg-blue.com ↗
            </a>
          </div>
        </section>

        {/* Why Open Science */}
        <section style={{ marginBottom: 32 }}>
          <ExpandableSection
            title="Why Open Science"
            type="methodology"
            defaultOpen={true}
            id="why-open-science"
          >
            <div style={{ paddingTop: 8, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 16 }}>
                Understanding emotions, behavior, and the nervous system helps people make
                sense of their lives. When this knowledge can be shared clearly and openly,
                it becomes something we can all learn from, question, and improve together.
              </p>
              <p style={{ marginBottom: 16 }}>
                We approach this work with a simple belief:
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                <li style={{ marginBottom: 8 }}>
                  <strong style={{ color: TEXT.primary }}>Shared knowledge grows stronger.</strong>{" "}
                  When ideas are accessible, more people can understand, test, and refine them.
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong style={{ color: TEXT.primary }}>Transparency supports trust.</strong>{" "}
                  Open methods and visible reasoning allow learning to stay grounded and verifiable.
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong style={{ color: TEXT.primary }}>Collaboration deepens insight.</strong>{" "}
                  Progress happens when researchers, practitioners, and individuals can contribute
                  from different perspectives.
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong style={{ color: TEXT.primary }}>Emotional understanding matters for the future.</strong>{" "}
                  As technology becomes part of daily life, it is important that emotional knowledge
                  can be understood by both people and the systems we build.
                </li>
              </ul>
              <p style={{ color: TEXT.muted, fontStyle: "italic" }}>
                Open science is not about replacing existing work. It is about adding clarity,
                connection, and continuity, so understanding can keep evolving.
              </p>
            </div>
          </ExpandableSection>
        </section>

        {/* Two Platforms */}
        <section style={{ marginBottom: 32 }}>
          <ExpandableSection
            title="Two Platforms, One Mission"
            type="publication"
            defaultOpen={true}
            id="two-platforms"
          >
            <div style={{ paddingTop: 8, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 16 }}>
                TEG-Blue operates through two complementary platforms:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    padding: 16,
                    background: BG.surface,
                    borderRadius: 8,
                    border: `1px solid ${BORDER.default}`,
                  }}
                >
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: TEXT.primary,
                      marginBottom: 8,
                    }}
                  >
                    teg-blue.org (you are here)
                  </h4>
                  <p style={{ fontSize: 13, color: TEXT.muted, marginBottom: 8 }}>
                    The open science platform. All research, publications, theories,
                    and methodology are freely available under CC-BY-NC-SA-4.0.
                  </p>
                  <p style={{ fontSize: 12, fontFamily: FONT.mono, color: SPECTRUM.blue }}>
                    For researchers, academics, and those building on the work.
                  </p>
                </div>
                <div
                  style={{
                    padding: 16,
                    background: BG.surface,
                    borderRadius: 8,
                    border: `1px solid ${BORDER.default}`,
                  }}
                >
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: TEXT.primary,
                      marginBottom: 8,
                    }}
                  >
                    teg-blue.com
                  </h4>
                  <p style={{ fontSize: 13, color: TEXT.muted, marginBottom: 8 }}>
                    The application platform. Interactive tools, the Circuit Board,
                    and guided experiences for personal exploration and practitioners.
                  </p>
                  <p style={{ fontSize: 12, fontFamily: FONT.mono, color: SPECTRUM.blue }}>
                    For individuals and practitioners applying the framework.
                  </p>
                </div>
              </div>
              <p style={{ fontSize: 13, color: TEXT.muted }}>
                The .org sustains the open research mission. The .com funds ongoing
                development and validation studies. Both exist to make emotional
                intelligence accessible.
              </p>
            </div>
          </ExpandableSection>
        </section>

        {/* Core Principle */}
        <section style={{ marginBottom: 32 }}>
          <ExpandableSection
            title="The Core Principle"
            type="theory"
            defaultOpen={false}
            id="core-principle"
          >
            <div style={{ paddingTop: 8, lineHeight: 1.8 }}>
              <blockquote
                style={{
                  margin: "0 0 16px 0",
                  padding: "16px 20px",
                  borderLeft: `3px solid ${SPECTRUM.indigo}`,
                  background: hexToRgba(SPECTRUM.indigo, 0.05),
                  borderRadius: "0 8px 8px 0",
                  fontStyle: "italic",
                  color: TEXT.primary,
                }}
              >
                "Emotions are biological information about safety and threat,
                not irrational impulses to be managed or overcome."
              </blockquote>
              <p>
                This single premise, when applied consistently across individual,
                relational, institutional, and cultural scales, reveals how living
                systems organize around perceived safety and threat. TEG-Blue creates
                a comprehensive map of emotional experience—from how the nervous system
                registers safety and threat, through identity formation, pattern scaling
                into social systems, escalation mechanisms, and healing pathways.
              </p>
            </div>
          </ExpandableSection>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: 24,
            background: hexToRgba(SPECTRUM.azure, 0.08),
            borderRadius: 12,
            border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.2)}`,
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 8,
            }}
          >
            Join the Research
          </h3>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              marginBottom: 16,
              maxWidth: 400,
              margin: "0 auto 16px",
            }}
          >
            Whether you're a researcher, practitioner, or curious individual—we
            welcome collaboration.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/collaborate"
              style={{
                padding: "10px 20px",
                background: SPECTRUM.blue,
                color: "#fff",
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              Collaborate with us
            </Link>
            <Link
              href="/methodology"
              style={{
                padding: "10px 20px",
                background: "transparent",
                color: TEXT.secondary,
                border: `1px solid ${BORDER.default}`,
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              Read our methodology
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
