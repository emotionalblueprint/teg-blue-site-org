"use client";

import { useState } from "react";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS,
  hexToRgba, AWARENESS,
  MODE_TEAL, MODE_YELLOW, MODE_ORANGE, MODE_PINK,
} from "@/src/styles/tokens";

// ─── CONSTANTS ──────────────────────────────────────────────

const MAP_COLOR = SPECTRUM.cobalt;

const ACCESS_STATES = [
  {
    id: "full",
    label: "Fully Available",
    summary: "The interoceptive substrate generates readable signals. All three channels report to the CLS.",
    essRow: "Generates signals \u2014 and the CLS knows",
    clsRow: "Builds from the full data set: RE + ER + SEA + own output",
    coherence: "Coherence aligned with the body",
    coherenceDesc: "Complex, sometimes uncomfortable. The narrative matches what the body is doing. Override is a choice, not architecture.",
    override: "Visible \u2014 the CLS knows there is a signal to intercept",
    restoration: "Observable \u2014 the person can perceive the hormones metabolizing, muscles releasing, the HPA axis standing down",
    path: "Path A: restoration sequence can be observed and allowed to complete",
    reState: "Reading accurately for understanding",
    erState: "Somatic echo intact \u2014 feels what others feel in own body",
    seaState: "Bridge open \u2014 CLS receives what the ESS is doing",
    feelsLike: "\u201CThis is complex and I can hold it\u201D",
    color: MODE_TEAL,
  },
  {
    id: "absent",
    label: "Absent",
    summary: "The interoceptive substrate is unavailable \u2014 never built or degraded by chronic activation. Two channels are offline.",
    essRow: "Generates signals \u2014 and the CLS does not know",
    clsRow: "Builds from RE + own output only. Does not know it is missing data.",
    coherence: "Coherence without the body",
    coherenceDesc: "Clean, clear, confident. Internally consistent but not biologically accurate. The CLS does not register the absence as absence.",
    override: "Invisible \u2014 the CLS does not know the ESS is generating signals",
    restoration: "Runs unseen \u2014 whether the sequence completes or remains unresolved, the CLS does not register the difference",
    path: "Path B: restoration sequence runs without observation",
    reState: "Sharpened \u2014 all cognitive resources concentrate on the one remaining channel",
    erState: "Offline \u2014 no somatic echo of what others feel",
    seaState: "Bridge closed \u2014 CLS has no channel to the ESS",
    feelsLike: "\u201CThis is clear and I know who I am\u201D",
    color: MODE_PINK,
  },
  {
    id: "partial",
    label: "Partial (Flooded / Contradicted)",
    summary: "The interoceptive substrate is active but signals are either overwhelming or distrusted by the CLS\u2019s own narrative.",
    essRow: "Generates signals \u2014 and the CLS distrusts or overrides them",
    clsRow: "Builds from RE + noisy/contested somatic data + own output. The body says one thing, the narrative says another.",
    coherence: "Coherence contested by the body",
    coherenceDesc: "Confusing, self-doubting. The person senses something is happening but cannot resolve what it means.",
    override: "Intermittent \u2014 sometimes the signal gets through, sometimes the narrative wins",
    restoration: "The person senses activation but the narrative says \u201CI\u2019m fine\u201D",
    path: "The entry point \u2014 the substrate is still active, the signal is still arriving, the bridge is contested but reachable",
    reState: "Reading accurately \u2014 the external channel is clear and usable",
    erState: "Resonates but without boundaries (flooded) or with doubt (distrusted)",
    seaState: "Signals reach the CLS but are filtered, overridden, or not trusted",
    feelsLike: "\u201CSomething is wrong but I don\u2019t know what\u201D",
    color: MODE_YELLOW,
  },
];

const CHAIN_STEPS = [
  { label: "Interoceptive substrate", desc: "Biological hardware \u2014 anterior insula, ventral vagal pathways, visceral afferents" },
  { label: "Interoceptive access", desc: "Is the substrate generating readable signals?" },
  { label: "Which capacities can function", desc: "Affective Resonance (ER) needs it. Interoceptive Self-Awareness (SEA) needs it. Interpersonal Affect Perception (RE) does not." },
  { label: "What data reaches the CLS", desc: "Three awareness channels + the CLS\u2019s own output" },
  { label: "What the CLS builds", desc: "Coherence aligned with the body / coherence without the body / coherence contested by the body" },
  { label: "Whether the person can observe the ESS running", desc: "Can the person perceive the physiological sequence while it is happening?" },
  { label: "Whether restoration can be observed and allowed to complete", desc: "The sequence must be perceived to be consciously allowed" },
  { label: "Path A or Path B", desc: "Restoration completes \u2014 or override deepens and the cycle self-reinforces" },
];

// ─── COMPONENT ──────────────────────────────────────────────

export default function InteroceptiveArchitectureMap() {
  const [activeState, setActiveState] = useState(0);
  const [showChain, setShowChain] = useState(false);

  const current = ACCESS_STATES[activeState];

  return (
    <div style={{
      background: hexToRgba(MAP_COLOR, 0.03),
      border: `1px solid ${hexToRgba(MAP_COLOR, 0.15)}`,
      borderRadius: RADIUS.lg,
      padding: "clamp(16px, 4vw, 32px)",
      fontFamily: FONT.display,
    }}>
      {/* ─── TITLE ─────────────────────────────────────── */}
      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: MAP_COLOR,
          fontFamily: FONT.mono,
          marginBottom: 6,
        }}>
          Interoceptive Architecture Map
        </div>
        <div style={{
          fontSize: 15,
          color: TEXT.secondary,
          lineHeight: 1.6,
          maxWidth: 640,
        }}>
          The ESS runs the same sequence regardless. What changes is whether the CLS
          knows it is running. Select an interoceptive access state to see what each
          produces downstream.
        </div>
      </div>

      {/* ─── TWO SYSTEMS ──────────────────────────────── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        marginBottom: 24,
      }}>
        {/* ESS */}
        <div style={{
          background: hexToRgba(AWARENESS.SEA, 0.06),
          border: `1px solid ${hexToRgba(AWARENESS.SEA, 0.2)}`,
          borderRadius: RADIUS.md,
          padding: "14px 16px",
        }}>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            color: AWARENESS.SEA,
            fontFamily: FONT.mono,
            letterSpacing: "0.04em",
            marginBottom: 6,
          }}>
            ESS
          </div>
          <div style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.55 }}>
            Emotional Somatic System. Detects, evaluates, generates physiological responses.
            Operates below conscious awareness. Always running.
          </div>
          <div style={{
            fontSize: 12,
            color: current.color,
            lineHeight: 1.55,
            marginTop: 8,
            fontStyle: "italic",
          }}>
            {current.essRow}
          </div>
        </div>

        {/* CLS */}
        <div style={{
          background: hexToRgba(AWARENESS.RE, 0.06),
          border: `1px solid ${hexToRgba(AWARENESS.RE, 0.2)}`,
          borderRadius: RADIUS.md,
          padding: "14px 16px",
        }}>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            color: AWARENESS.RE,
            fontFamily: FONT.mono,
            letterSpacing: "0.04em",
            marginBottom: 6,
          }}>
            CLS
          </div>
          <div style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.55 }}>
            Cognitive-Logical System. Language, reasoning, narrative.
            Builds from whatever data it has access to. Does not distinguish between a complete data set and an incomplete one.
          </div>
          <div style={{
            fontSize: 12,
            color: current.color,
            lineHeight: 1.55,
            marginTop: 8,
            fontStyle: "italic",
          }}>
            {current.clsRow}
          </div>
        </div>
      </div>

      {/* ─── ACCESS STATE SELECTOR ─────────────────────── */}
      <div style={{
        display: "flex",
        gap: 8,
        marginBottom: 20,
        flexWrap: "wrap",
      }}>
        {ACCESS_STATES.map((state, i) => {
          const isActive = activeState === i;
          return (
            <button
              key={state.id}
              onClick={() => setActiveState(i)}
              style={{
                flex: "1 1 160px",
                padding: "10px 14px",
                background: isActive ? hexToRgba(state.color, 0.12) : hexToRgba(MAP_COLOR, 0.04),
                border: `1px solid ${isActive ? hexToRgba(state.color, 0.4) : hexToRgba(MAP_COLOR, 0.12)}`,
                borderRadius: RADIUS.md,
                cursor: "pointer",
                fontFamily: FONT.display,
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? state.color : TEXT.muted,
                textAlign: "left",
                lineHeight: 1.4,
                transition: "all 200ms ease",
              }}
            >
              {state.label}
            </button>
          );
        })}
      </div>

      {/* ─── ACCESS STATE DETAIL ───────────────────────── */}
      <div style={{
        background: hexToRgba(current.color, 0.04),
        border: `1px solid ${hexToRgba(current.color, 0.2)}`,
        borderRadius: RADIUS.md,
        padding: "18px 20px",
        marginBottom: 20,
      }}>
        <div style={{
          fontSize: 14,
          fontWeight: 600,
          color: current.color,
          marginBottom: 8,
        }}>
          Interoceptive Access: {current.label}
        </div>
        <div style={{
          fontSize: 13,
          color: TEXT.secondary,
          lineHeight: 1.65,
          marginBottom: 16,
        }}>
          {current.summary}
        </div>

        {/* Three capacity states */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
          marginBottom: 16,
        }}>
          {[
            { label: "Interpersonal Affect Perception (RE)", color: AWARENESS.RE, state: current.reState },
            { label: "Affective Resonance (ER)", color: AWARENESS.ER, state: current.erState },
            { label: "Interoceptive Self-Awareness (SEA)", color: AWARENESS.SEA, state: current.seaState },
          ].map((cap) => (
            <div key={cap.label} style={{
              background: hexToRgba(cap.color, 0.05),
              border: `1px solid ${hexToRgba(cap.color, 0.18)}`,
              borderRadius: RADIUS.sm,
              padding: "10px 12px",
            }}>
              <div style={{
                fontSize: 10,
                fontWeight: 700,
                color: cap.color,
                fontFamily: FONT.mono,
                letterSpacing: "0.04em",
                marginBottom: 4,
              }}>
                {cap.label.split("(")[1]?.replace(")", "") || cap.label}
              </div>
              <div style={{
                fontSize: 11,
                color: TEXT.secondary,
                lineHeight: 1.5,
              }}>
                {cap.state}
              </div>
            </div>
          ))}
        </div>

        {/* Downstream effects */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "6px 12px",
          fontSize: 12,
          lineHeight: 1.55,
        }}>
          {[
            ["Coherence", current.coherence],
            ["Override", current.override],
            ["Restoration", current.restoration],
            ["Feels like", current.feelsLike],
            ["Outcome", current.path],
          ].map(([label, value]) => (
            <div key={label} style={{ display: "contents" }}>
              <div style={{
                fontWeight: 600,
                color: TEXT.muted,
                fontFamily: FONT.mono,
                fontSize: 10,
                letterSpacing: "0.04em",
                paddingTop: 2,
                textTransform: "uppercase",
              }}>
                {label}
              </div>
              <div style={{ color: TEXT.secondary }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── RE OUTSIDE THE CHAIN ─────────────────────── */}
      <div style={{
        background: hexToRgba(AWARENESS.RE, 0.04),
        border: `1px solid ${hexToRgba(AWARENESS.RE, 0.15)}`,
        borderRadius: RADIUS.sm,
        padding: "12px 14px",
        marginBottom: 20,
        fontSize: 12,
        color: TEXT.secondary,
        lineHeight: 1.6,
      }}>
        <strong style={{ color: AWARENESS.RE }}>Interpersonal Affect Perception (RE) sits outside this chain entirely</strong>
        {" "}\u2014 on separate hardware, feeding the CLS regardless. When the interoceptive
        substrate degrades, all cognitive resources concentrate on the one channel that
        remains open. RE does not merely survive. It sharpens.
      </div>

      {/* ─── CHAIN OF POWER ───────────────────────────── */}
      <div>
        <button
          onClick={() => setShowChain(!showChain)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontFamily: FONT.display,
            fontSize: 13,
            fontWeight: 600,
            color: MAP_COLOR,
            padding: "8px 0",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{
            display: "inline-block",
            transform: showChain ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 200ms ease",
            fontSize: 11,
          }}>
            {"\u25B6"}
          </span>
          The Chain of Power
        </button>

        {showChain && (
          <div style={{
            marginTop: 8,
            paddingLeft: 4,
          }}>
            <div style={{
              fontSize: 12,
              color: TEXT.secondary,
              lineHeight: 1.6,
              marginBottom: 12,
              maxWidth: 600,
            }}>
              The interoceptive substrate sits at the top. Each step follows necessarily
              from the one above it. None of the downstream outcomes can be changed
              directly. They change when the substrate state changes.
            </div>

            {CHAIN_STEPS.map((step, i) => (
              <div key={i} style={{
                display: "flex",
                gap: 12,
                marginBottom: i < CHAIN_STEPS.length - 1 ? 4 : 0,
              }}>
                {/* Connector */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 20,
                  flexShrink: 0,
                }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: hexToRgba(MAP_COLOR, 0.4),
                    flexShrink: 0,
                    marginTop: 4,
                  }} />
                  {i < CHAIN_STEPS.length - 1 && (
                    <div style={{
                      width: 1,
                      flex: 1,
                      minHeight: 16,
                      background: hexToRgba(MAP_COLOR, 0.2),
                    }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingBottom: i < CHAIN_STEPS.length - 1 ? 8 : 0 }}>
                  <div style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: TEXT.primary,
                    lineHeight: 1.4,
                  }}>
                    {step.label}
                  </div>
                  <div style={{
                    fontSize: 11,
                    color: TEXT.muted,
                    lineHeight: 1.5,
                  }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}

            {/* Loop note */}
            <div style={{
              marginTop: 12,
              fontSize: 12,
              color: TEXT.secondary,
              lineHeight: 1.6,
              borderLeft: `2px solid ${hexToRgba(MAP_COLOR, 0.2)}`,
              paddingLeft: 12,
              maxWidth: 580,
            }}>
              The chain is not one-directional. It feeds itself in both directions.
              Chronic activation depletes the interoceptive channels, reducing access,
              degrading ER and SEA further. Restoration rebuilds the substrate, opens
              access, gives the CLS more data. The architecture amplifies whichever
              direction it is running.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
