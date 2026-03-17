"use client";

import { useState, useEffect } from "react";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS,
  hexToRgba, AWARENESS, MODE_ORANGE,
} from "@/src/styles/tokens";

// ─── CAPACITY DEFINITIONS ────────────────────────────────────

const CAPACITIES = [
  {
    id: "RE",
    name: "Reading Emotions",
    abbr: "RE",
    color: AWARENESS.RE,
    tagline: "Perceiving what others feel",
    lowHint: "Emotional signals from others are missed or misread.",
    highHint: "Others' feelings are perceived clearly — even subtle or unspoken ones.",
  },
  {
    id: "ER",
    name: "Emotional Resonance",
    abbr: "ER",
    color: AWARENESS.ER,
    tagline: "Feeling it in your own body",
    lowHint: "Others' emotions are understood intellectually, but not felt.",
    highHint: "Others' emotions land in the body. Genuine resonance occurs.",
  },
  {
    id: "SEA",
    name: "Self-Emotional Awareness",
    abbr: "SEA",
    color: AWARENESS.SEA,
    tagline: "Knowing your own internal state",
    lowHint: "Internal state is difficult to locate or name.",
    highHint: "Internal signals are readable and trustworthy. What's yours is identifiable.",
  },
];

// ─── STATE DESCRIPTIONS ──────────────────────────────────────

function getStateText(re, er, sea) {
  const ei = re * er * sea;
  const seaZero = sea < 0.05;
  const allHigh = re > 0.75 && er > 0.75 && sea > 0.75;
  const allLow = re < 0.25 && er < 0.25 && sea < 0.25;
  const reOnly = re > 0.7 && er < 0.3 && sea > 0.7;
  const noER = er < 0.2 && re > 0.6 && sea > 0.6;
  const noRE = re < 0.2 && er > 0.6 && sea > 0.6;

  if (allHigh) return {
    headline: "This is full empathic integration.",
    body: "All three capacities are online. The system can read what others are feeling, resonate with it, and distinguish what belongs to self from what belongs to other. Connection is real, not performed.",
    color: SPECTRUM.sky,
  };

  if (seaZero) return {
    headline: "Empathic integration needs a self to return to.",
    body: "Even with RE and ER fully online — reading others clearly and feeling their emotions intensely — without access to one's own internal state, there is no anchor. The signal is live, but the return address is missing.",
    color: "#f87171",
    special: true,
  };

  if (allLow) return {
    headline: "Very little is getting through.",
    body: "This does not indicate coldness or indifference. Often it signals a nervous system in protection mode — or capacities that never had the conditions to fully develop.",
    color: SPECTRUM.slate,
  };

  if (noER) return {
    headline: "Clear reading, but from a distance.",
    body: "The situation is understood and the reading is accurate. But the body is not participating. Helpfulness without warmth — the other person may not feel truly met.",
    color: AWARENESS.RE,
  };

  if (noRE) return {
    headline: "Deep feeling, but less accurate reading.",
    body: "Resonance with emotions that may not actually be present, or missing the ones that are. The compassion is real — but it may not always land where it is needed.",
    color: AWARENESS.ER,
  };

  if (reOnly) return {
    headline: "Understanding without feeling.",
    body: "High RE and SEA with low ER: the situation is identified and internal state is clear — but the body is not participating. Present intellectually, not emotionally.",
    color: SPECTRUM.slate,
  };

  if (ei > 0.65) return {
    headline: "Empathic integration is mostly online.",
    body: "All three capacities are working to some degree. Connection is possible — there may be gaps in how fully it lands, but genuine presence with others is occurring.",
    color: AWARENESS.SEA,
  };

  if (ei > 0.3) return {
    headline: "Partial integration.",
    body: "Something is getting through, but at least one capacity is dampened enough to affect the quality of connection. The effort is real — it does not always land.",
    color: MODE_ORANGE,
  };

  return {
    headline: "Empathic integration is struggling to form.",
    body: "With one or more capacities very low, genuine connection becomes difficult. It is a signal that something in the system needs attention.",
    color: SPECTRUM.slate,
  };
}

// ─── PRESET EXPERIMENTS ──────────────────────────────────────

const EXPERIMENTS = [
  {
    label: "The distant helper",
    desc: "Turn ER all the way down. Leave RE and SEA high.",
    values: { re: 0.9, er: 0.05, sea: 0.9 },
  },
  {
    label: "The keystone collapse",
    desc: "Turn only SEA to zero. Leave RE and ER full.",
    values: { re: 1.0, er: 1.0, sea: 0.0 },
  },
  {
    label: "The anxious reader",
    desc: "High RE, high ER, low SEA.",
    values: { re: 0.9, er: 0.85, sea: 0.15 },
  },
  {
    label: "Full empathic integration",
    desc: "All three online.",
    values: { re: 1.0, er: 1.0, sea: 1.0 },
  },
];

// ─── SIGNAL BAR ─────────────────────────────────────────────

function EISignalBar({ ei, sea }) {
  const seaZero = sea < 0.05;
  const fillPct = Math.round(ei * 100);

  const fillColor = seaZero
    ? "transparent"
    : ei > 0.65
      ? SPECTRUM.sky
      : ei > 0.3
        ? SPECTRUM.azure
        : SPECTRUM.slate;

  const barGlow = (!seaZero && ei > 0.2)
    ? `0 0 ${6 + ei * 10}px ${hexToRgba(fillColor, ei * 0.35)}`
    : "none";

  return (
    <div style={{
      width: "100%",
      display: "flex", alignItems: "center", gap: 10,
    }}>
      <span style={{
        fontFamily: FONT.mono,
        fontSize: 11, fontWeight: 600,
        color: seaZero ? "#374151" : fillColor,
        letterSpacing: "0.1em",
        transition: "color 0.4s",
        flexShrink: 0,
      }}>EI</span>
      <div style={{
        flex: 1,
        position: "relative",
        height: 10,
        borderRadius: 5,
        background: BG.inset,
        border: `1px solid ${seaZero ? "rgba(239,68,68,0.3)" : BORDER.default}`,
        overflow: "hidden",
        transition: "border-color 0.4s",
      }}>
        <div style={{
          position: "absolute",
          top: 0, left: 0, bottom: 0,
          width: `${fillPct}%`,
          borderRadius: 5,
          background: fillColor,
          boxShadow: barGlow,
          transition: "width 0.3s ease, background 0.4s ease, box-shadow 0.4s ease",
        }} />
      </div>
      <span style={{
        fontFamily: FONT.mono,
        fontSize: 11, fontWeight: 600,
        color: seaZero ? "#374151" : TEXT.muted,
        letterSpacing: "0.04em",
        flexShrink: 0,
        minWidth: 32,
        textAlign: "right",
      }}>{fillPct}%</span>
    </div>
  );
}

// ─── CAPACITY SLIDER ────────────────────────────────────────

function CapacitySlider({ cap, value, onChange }) {
  const pct = Math.round(value * 100);
  const isZero = pct < 5;
  const isLow = pct < 35;

  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 10,
      padding: "16px 18px 14px",
      background: BG.surface,
      border: `1px solid ${isZero ? hexToRgba(cap.color, 0.1) : hexToRgba(cap.color, 0.08)}`,
      borderRadius: RADIUS.md,
      transition: "border-color 0.3s",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: 11, fontWeight: 700,
          padding: "3px 8px",
          borderRadius: RADIUS.sm,
          color: isZero ? TEXT.muted : cap.color,
          background: isZero ? BG.inset : hexToRgba(cap.color, 0.15),
          letterSpacing: "0.04em",
          transition: "all 0.4s",
        }}>{cap.abbr}</span>
        <div>
          <div style={{
            fontFamily: FONT.display,
            fontSize: 13, fontWeight: 600,
            color: isZero ? TEXT.muted : TEXT.primary,
            lineHeight: 1.3,
            transition: "color 0.4s",
          }}>{cap.name}</div>
          <div style={{
            fontFamily: FONT.mono,
            fontSize: 10, fontWeight: 400,
            color: isZero ? TEXT.muted : cap.color,
            letterSpacing: "0.04em",
            transition: "color 0.4s",
          }}>{cap.tagline}</div>
        </div>
      </div>

      {/* Slider */}
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", top: "50%", left: 0, right: 0,
          transform: "translateY(-50%)",
          height: 6, borderRadius: 3,
          background: BG.inset,
        }} />
        <div style={{
          position: "absolute", top: "50%", left: 0,
          width: `${pct}%`,
          transform: "translateY(-50%)",
          height: 6, borderRadius: 3,
          background: isZero
            ? TEXT.muted
            : `linear-gradient(to right, ${hexToRgba(cap.color, 0.5)}, ${cap.color})`,
          boxShadow: isZero ? "none" : `0 0 8px ${hexToRgba(cap.color, 0.35)}`,
          transition: "width 0.1s, background 0.3s, box-shadow 0.3s",
        }} />
        <input
          type="range" min={0} max={100} value={pct}
          onChange={e => onChange(parseInt(e.target.value) / 100)}
          aria-label={`${cap.name} capacity level`}
          style={{
            position: "relative", width: "100%",
            appearance: "none", background: "transparent",
            cursor: "pointer", height: 20,
            WebkitAppearance: "none",
          }}
        />
      </div>

      {/* Hint text */}
      <p style={{
        fontFamily: FONT.display,
        fontSize: 11.5, fontWeight: 400,
        color: TEXT.muted,
        lineHeight: 1.5, margin: 0,
        minHeight: 34,
        transition: "all 0.3s",
      }}>
        {isLow ? cap.lowHint : cap.highHint}
      </p>

      {/* SEA-specific zero state callout */}
      {cap.id === "SEA" && isZero && (
        <div style={{
          padding: "6px 10px",
          background: hexToRgba(AWARENESS.SEA, 0.06),
          border: `1px solid ${hexToRgba(AWARENESS.SEA, 0.2)}`,
          borderRadius: RADIUS.sm,
        }}>
          <p style={{
            fontFamily: FONT.display,
            fontSize: 11, color: AWARENESS.SEA,
            margin: 0, lineHeight: 1.5,
          }}>
            This takes everything else with it — no matter how high RE or ER are.
          </p>
        </div>
      )}
    </div>
  );
}

// ─── CONFIGURATION TAG ──────────────────────────────────────

function ConfigTag({ label, color, active }) {
  return (
    <span style={{
      fontSize: 11,
      fontFamily: FONT.mono,
      fontWeight: 600,
      padding: "3px 8px",
      borderRadius: RADIUS.sm,
      color: active ? color : TEXT.muted,
      background: active ? hexToRgba(color, 0.15) : "rgba(136, 136, 136, 0.08)",
      transition: "all 0.3s",
    }}>
      {label}
    </span>
  );
}

// ─── FORMULA DISPLAY ─────────────────────────────────────────

function Formula({ re, er, sea }) {
  const ei = re * er * sea;
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
      fontFamily: FONT.mono,
      fontSize: 12,
    }}>
      <span style={{ color: AWARENESS.RE, fontWeight: 600 }}>{Math.round(re * 100)}%</span>
      <span style={{ color: TEXT.muted }}>&times;</span>
      <span style={{ color: AWARENESS.ER, fontWeight: 600 }}>{Math.round(er * 100)}%</span>
      <span style={{ color: TEXT.muted }}>&times;</span>
      <span style={{ color: AWARENESS.SEA, fontWeight: 600 }}>{Math.round(sea * 100)}%</span>
      <span style={{ color: TEXT.hint }}>&rarr;</span>
      <span style={{ color: TEXT.primary, fontWeight: 600 }}>{Math.round(ei * 100)}%</span>
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────

export default function EmpathicIntegrationExplorer() {
  const [re, setRe] = useState(1.0);
  const [er, setEr] = useState(1.0);
  const [sea, setSea] = useState(1.0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const ei = re * er * sea;
  const vals = { RE: re, ER: er, SEA: sea };
  const setters = { RE: setRe, ER: setEr, SEA: setSea };

  const state = getStateText(re, er, sea);

  function getStatus(value) {
    if (value > 0.6) return "Active";
    if (value > 0.2) return "Low";
    return "Offline";
  }

  return (
    <div
      style={{
        margin: "32px 0 0",
        background: BG.card,
        borderRadius: RADIUS.lg,
        border: `1px solid ${BORDER.default}`,
        overflow: "hidden",
      }}
    >
      {/* Range thumb styles */}
      <style>{`
        .ei-explorer input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: #f8fafc;
          border: 2px solid rgba(255,255,255,0.3);
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
          cursor: pointer;
          transition: transform 0.15s;
        }
        .ei-explorer input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        .ei-explorer input[type="range"]::-moz-range-thumb {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: #f8fafc;
          border: 2px solid rgba(255,255,255,0.3);
          cursor: pointer;
        }
      `}</style>

      {/* Header row */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 24px",
        borderBottom: `1px solid ${BORDER.default}`,
      }}>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: 11, fontWeight: 700,
          color: SPECTRUM.sky,
          background: hexToRgba(SPECTRUM.cobalt, 0.15),
          padding: "4px 12px",
          borderRadius: RADIUS.sm,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}>
          Empathic Integration
        </span>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: 11,
          color: TEXT.hint,
          letterSpacing: "0.02em",
        }}>
          Drag sliders to explore
        </span>
      </div>

      {/* Main content */}
      <div className="ei-explorer" style={{ padding: "20px 24px 24px" }}>
        {/* Two-column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 20,
          alignItems: "start",
        }}>
          {/* Left column — Sliders */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {CAPACITIES.map(cap => (
              <CapacitySlider
                key={cap.id}
                cap={cap}
                value={vals[cap.id]}
                onChange={setters[cap.id]}
              />
            ))}
          </div>

          {/* Right column — Analysis panel */}
          <div style={{
            background: BG.surface,
            border: `1px solid ${hexToRgba(state.color, 0.2)}`,
            borderRadius: RADIUS.lg,
            padding: "20px 22px",
            transition: "border-color 0.4s",
          }}>
            {/* Configuration tags */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
              <ConfigTag
                label={`RE ${getStatus(re)}`}
                color={AWARENESS.RE}
                active={re > 0.2}
              />
              <ConfigTag
                label={`ER ${getStatus(er)}`}
                color={AWARENESS.ER}
                active={er > 0.2}
              />
              <ConfigTag
                label={`SEA ${getStatus(sea)}`}
                color={AWARENESS.SEA}
                active={sea > 0.2}
              />
            </div>

            {/* EI Signal bar */}
            <div style={{ marginBottom: 16 }}>
              <EISignalBar ei={ei} sea={sea} />
            </div>

            {/* Formula */}
            <div style={{ marginBottom: 16 }}>
              <Formula re={re} er={er} sea={sea} />
            </div>

            {/* State text */}
            <div style={{
              padding: "14px 16px",
              background: state.special ? "rgba(239,68,68,0.06)" : BG.card,
              border: `1px solid ${state.special ? "rgba(239,68,68,0.2)" : BORDER.default}`,
              borderRadius: RADIUS.md,
              transition: "all 0.4s",
              marginBottom: 14,
            }}>
              <p style={{
                fontFamily: FONT.display,
                fontSize: 14, fontWeight: 600,
                color: state.color,
                margin: "0 0 6px",
                lineHeight: 1.4,
                transition: "color 0.4s",
              }}>
                {state.headline}
              </p>
              <p style={{
                fontFamily: FONT.display,
                fontSize: 13, fontWeight: 400,
                color: TEXT.secondary, lineHeight: 1.65,
                margin: 0,
              }}>
                {state.body}
              </p>
            </div>

            {/* Multiplicative note */}
            <p style={{
              fontFamily: FONT.mono,
              fontSize: 11, color: TEXT.hint,
              margin: 0,
            }}>
              Multiplicative — if any one capacity goes offline, the output collapses.
            </p>
          </div>
        </div>

        {/* Experiments section */}
        <div style={{
          marginTop: 20,
          paddingTop: 16,
          borderTop: `1px solid ${BORDER.default}`,
        }}>
          <div style={{
            fontFamily: FONT.mono,
            fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
            color: TEXT.muted, textTransform: "uppercase", marginBottom: 10,
          }}>
            Try these
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(4, 1fr)",
            gap: 8,
          }}>
            {EXPERIMENTS.map(exp => (
              <button
                key={exp.label}
                onClick={() => {
                  setRe(exp.values.re);
                  setEr(exp.values.er);
                  setSea(exp.values.sea);
                }}
                style={{
                  background: BG.surface,
                  border: `1px solid ${BORDER.default}`,
                  borderRadius: RADIUS.md, padding: "10px 14px",
                  cursor: "pointer", textAlign: "left",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = hexToRgba(SPECTRUM.cobalt, 0.3);
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = BORDER.default;
                }}
              >
                <div style={{
                  fontFamily: FONT.display,
                  fontSize: 12, fontWeight: 600, color: TEXT.primary, marginBottom: 3,
                }}>
                  {exp.label}
                </div>
                <div style={{
                  fontFamily: FONT.display,
                  fontSize: 11, fontWeight: 400, color: TEXT.muted, lineHeight: 1.4,
                }}>
                  {exp.desc}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
