"use client";

import { FONT } from "../styles/tokens";

/**
 * ESSInformationSystems — Two Information Systems diagram
 *
 * Static visual comparing ESS and CLS across speed timeline, domain,
 * mechanism, output, learning, and closing substrates/interdependence pills.
 *
 * Design reference: teg-blue-vault/_animations/TIS-diagram.html
 * NOTE: This component intentionally uses hardcoded colors and dimensions
 * from the design prototype. The tokens.js update pass will formalise
 * the "diagram palette" later.
 */

// ─── HARDCODED DESIGN CONSTANTS (from TIS-diagram.html) ──
const BG        = "#000";
const WHITE     = "#fff";
const BLUE      = "#4062eb";
const MUTED     = "rgba(160,205,251,0.55)";
const MUTED_2   = "rgba(160,205,251,0.35)";
const BORDER    = "rgba(160,205,251,0.14)";
const ITEM_TEXT = "rgba(255,255,255,0.9)";
const ITEM_TEXT_ESS = "rgba(255,255,255,0.9)";

export default function ESSInformationSystems() {
  return (
    <div
      style={{
        background: BG,
        color: WHITE,
        fontFamily: FONT.diagram,
        maxWidth: 1080,
        margin: "0 auto",
        padding: "38px 42px 56px",
        border: `1px solid ${BORDER}`,
      }}
    >
      {/* ── HEADER ─────────────────────────────────────── */}
      <div
        style={{
          fontSize: 9,
          letterSpacing: "0.2em",
          color: MUTED,
          textTransform: "uppercase",
          fontWeight: 300,
          marginBottom: 6,
        }}
      >
        TEG-Blue · ESS + CLS
      </div>
      <div
        style={{
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: "0.01em",
          marginBottom: 5,
          color: WHITE,
        }}
      >
        Two Information Systems
      </div>
      <div
        style={{
          fontSize: 10.5,
          fontWeight: 300,
          color: "rgba(255,255,255,0.9)",
          letterSpacing: "0.04em",
          fontStyle: "italic",
        }}
      >
        Detection · Evaluation · Response — before conscious awareness arrives
      </div>

      <Divider />

      {/* ── SPEED TIMELINE ─────────────────────────────── */}
      <div style={{ marginBottom: 32 }}>
        <div
          style={{
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#0590e5",
            marginBottom: 14,
            fontWeight: 300,
          }}
        >
          Speed gap — before conscious thought begins
        </div>
        <svg
          viewBox="0 0 960 92"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", display: "block" }}
        >
          <defs>
            <marker
              id="ess-ah"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto"
            >
              <path
                d="M2 2L8 5L2 8"
                fill="none"
                stroke="context-stroke"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>

          {/* Track */}
          <line x1="0" y1="46" x2="950" y2="46" stroke="rgba(160,205,251,.15)" strokeWidth="1" />

          {/* ESS segment: 0 → 296 (500ms mark) */}
          <line x1="0" y1="46" x2="296" y2="46" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />

          {/* CLS segment: 296 → end */}
          <line
            x1="296"
            y1="46"
            x2="940"
            y2="46"
            stroke="rgba(160,205,251,.7)"
            strokeWidth="1.5"
            strokeLinecap="round"
            markerEnd="url(#ess-ah)"
          />

          {/* ESS tick: 10–50ms cue detection */}
          <line x1="18" y1="40" x2="18" y2="52" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
          <text x="18" y="34" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="8.5" fontWeight="400" fill={BLUE}>
            10–50ms
          </text>
          <text x="18" y="66" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fontWeight="300" fill="rgba(64,98,235,.6)">
            cue detection
          </text>

          {/* ESS tick: 50–200ms pattern matching */}
          <line x1="110" y1="40" x2="110" y2="52" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
          <text x="110" y="34" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="8.5" fontWeight="400" fill={BLUE}>
            50–200ms
          </text>
          <text x="110" y="66" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fontWeight="300" fill="rgba(64,98,235,.6)">
            pattern matching
          </text>

          {/* ESS tick: 200–500ms full response */}
          <line x1="228" y1="40" x2="228" y2="52" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
          <text x="228" y="34" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="8.5" fontWeight="400" fill={BLUE}>
            200–500ms
          </text>
          <text x="228" y="66" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fontWeight="300" fill="rgba(64,98,235,.6)">
            full physiological response
          </text>

          {/* Divider at 500ms */}
          <line x1="296" y1="30" x2="296" y2="62" stroke="rgba(160,205,251,.35)" strokeWidth="1" strokeDasharray="3 3" />
          <text x="296" y="22" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fontWeight="300" fill="rgba(160,205,251,.55)">
            500ms
          </text>

          {/* CLS ticks */}
          <line x1="350" y1="40" x2="350" y2="52" stroke="rgba(160,205,251,.7)" strokeWidth="1.5" strokeLinecap="round" />
          <text x="350" y="66" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fontWeight="300" fill="rgba(160,205,251,.75)">
            conscious awareness
          </text>

          <line x1="570" y1="40" x2="570" y2="52" stroke="rgba(160,205,251,.7)" strokeWidth="1.5" strokeLinecap="round" />
          <text x="570" y="66" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fontWeight="300" fill="rgba(160,205,251,.75)">
            analysis &amp; planning
          </text>

          <line x1="790" y1="40" x2="790" y2="52" stroke="rgba(160,205,251,.7)" strokeWidth="1.5" strokeLinecap="round" />
          <text x="790" y="66" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fontWeight="300" fill="rgba(160,205,251,.75)">
            narrative construction
          </text>

          {/* Labels */}
          <text x="148" y="86" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fontWeight="500" fill="rgba(64,98,235,.7)" letterSpacing="0.08em">
            ESS — complete
          </text>
          <text x="620" y="86" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fontWeight="400" fill="rgba(160,205,251,.6)" letterSpacing="0.08em">
            CLS — arrives here
          </text>
        </svg>
      </div>

      <Divider />

      {/* ── COMPARISON GRID ─────────────────────────────── */}
      <Section
        label="Domain"
        ess={[
          "Safety-threat evaluation via neuroception",
          "Relational cues — faces, voices, postures",
          "The body's own physiological state",
          "Survival, bonding, biological integrity",
        ]}
        cls={[
          "External facts, logical problems, causal relationships",
          "Abstract planning and sequential reasoning",
          "Language production and narrative construction",
          "Pattern matching against learned rules and models",
        ]}
      />
      <Section
        label="Mechanism"
        ess={[
          "Neuroception — subconscious environmental scan",
          "Autonomic nervous system state reorganisation",
          "Hormonal and neurochemical cascades",
          "Muscular and visceral reorganisation before thought",
        ]}
        cls={[
          "Conscious deliberation — attention and effort",
          "Linguistic analysis and abstract reasoning",
          "Narrative construction from available data",
          "Builds coherence — complete data or not",
        ]}
      />
      <Section
        label="Output"
        ess={[
          "Physiological response patterns — hormonal, neurochemical, muscular",
          "Nervous system state reconfiguration",
          "Behavioural impulses organised before awareness",
          "Biological information about what was detected",
        ]}
        cls={[
          "Explanations, plans, and conscious decisions",
          "Narratives about what is happening",
          "Coherent accounts — which feel true whether data is complete or not",
        ]}
      />
      <Section
        label="Learning"
        ess={[
          "Through experience, repetition, what happens",
          "Slow to update — slow to forget",
        ]}
        cls={[
          "Through explanation, insight, language",
          "Fast to update — fast to revise",
        ]}
      />

      <Divider />

      {/* ── FOOTER PILLS ─────────────────────────────────── */}
      <div
        style={{
          marginTop: 32,
          paddingTop: 18,
          borderTop: `1px solid ${BORDER}`,
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <Pill eyebrow="Two biological substrates">
          The two systems operate through <Strong>physically separate hardware</Strong>. The{" "}
          <Strong>interoceptive substrate</Strong> — anterior insula, ventral vagal pathways,
          visceral afferents — reads the body from the inside. The{" "}
          <Strong>external observation substrate</Strong> — amygdala, prefrontal cortex — reads
          other bodies from the outside. When one degrades, the capacities built on it degrade
          together. The other is unaffected.
        </Pill>
        <Pill eyebrow="Not competitors — interdependent">
          The ESS sets the nervous system&apos;s configuration. The CLS operates{" "}
          <Strong>within whatever state has been set</Strong>. State precedes capacity. The CLS
          can narrate, manage, or suppress the ESS&apos;s activation — but the physiological
          state remains. <Strong>Whether the CLS can feel what the ESS is doing</Strong>{" "}
          determines everything that follows. This is the central question the Emotional
          Somatic Cycle maps.
        </Pill>
      </div>
    </div>
  );
}

// ─── INTERNAL HELPERS ─────────────────────────────────

function Divider() {
  return <div style={{ height: 1, background: BORDER, margin: "24px 0" }} />;
}

function Section({ label, ess, cls }) {
  return (
    <div
      style={{
        padding: "16px 0",
        borderTop: `1px solid ${BORDER}`,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
        }}
      >
        <Cell ess label={label} items={ess} />
        <Cell label={label} items={cls} />
      </div>
    </div>
  );
}

function Cell({ ess, label, items }) {
  const eyebrow = ess ? "Emotional Somatic System" : "Cognitive Logical System";
  return (
    <div
      style={
        ess
          ? {
              padding: "0 28px 6px 0",
              borderRight: `1px solid ${BORDER}`,
            }
          : {
              padding: "0 0 6px 28px",
            }
      }
    >
      <div
        style={{
          fontSize: 8.5,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: ess ? BLUE : "#a0cdfb",
          fontWeight: 300,
          marginBottom: 10,
        }}
      >
        {eyebrow} · {label}
      </div>
      {items.map((item, i) => (
        <Item key={i} ess={ess}>
          {item}
        </Item>
      ))}
    </div>
  );
}

function Item({ ess, children }) {
  return (
    <div
      style={{
        fontSize: 10,
        fontWeight: 300,
        lineHeight: 1.72,
        color: ess ? ITEM_TEXT_ESS : ITEM_TEXT,
        padding: "2px 0",
        display: "flex",
        alignItems: "baseline",
        gap: 7,
      }}
    >
      <span style={{ color: MUTED_2, flexShrink: 0, fontSize: 9 }}>—</span>
      <span>{children}</span>
    </div>
  );
}

function Pill({ eyebrow, children }) {
  return (
    <div
      style={{
        background: "rgba(160,205,251,.05)",
        border: `1px solid ${BORDER}`,
        padding: "12px 16px",
        flex: "1 1 320px",
      }}
    >
      <div
        style={{
          fontSize: 8,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: MUTED,
          fontWeight: 300,
          marginBottom: 5,
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          fontSize: 9.5,
          fontWeight: 300,
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.9)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Strong({ children }) {
  return <strong style={{ fontWeight: 500, color: "rgba(160,205,251,.95)" }}>{children}</strong>;
}
