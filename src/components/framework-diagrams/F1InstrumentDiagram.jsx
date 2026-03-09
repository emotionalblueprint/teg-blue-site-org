'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import { FONT, TEXT, SPECTRUM, BORDER, BG, hexToRgba } from "@/src/styles/tokens";

// ─── Animation Keyframes ────────────────────────────────
// Each keyframe: { pos, dur (ms to reach THIS keyframe), ease, flash? }
// Loop: gentle drift in Connection → signal flash → snap to Protection →
// agitated → slow restoration back to Connection → repeat
const KEYFRAMES = [
  // Phase 1: Gentle drift in Connection (slow, ease-in-out)
  { pos: 0.22, dur: 2400, ease: "ease-in-out" },
  { pos: 0.15, dur: 2800, ease: "ease-in-out" },
  { pos: 0.28, dur: 2600, ease: "ease-in-out" },
  { pos: 0.18, dur: 2200, ease: "ease-in-out" },
  // Signal detected — flash on the needle, position holds
  { pos: 0.18, dur: 400,  ease: "ease-in-out", flash: true },
  // Phase 2: Snap to Protection (fast, ease-out)
  { pos: 0.78, dur: 180,  ease: "cubic-bezier(0.2, 0, 0.4, 1)" },
  // Phase 3: Agitated in Protection (quick jitter)
  { pos: 0.72, dur: 350,  ease: "ease-in-out" },
  { pos: 0.82, dur: 300,  ease: "ease-in-out" },
  { pos: 0.75, dur: 280,  ease: "ease-in-out" },
  { pos: 0.80, dur: 320,  ease: "ease-in-out" },
  // Phase 4: Very slow restoration back to Connection
  { pos: 0.65, dur: 2000, ease: "cubic-bezier(0.4, 0, 0.2, 1)" },
  { pos: 0.50, dur: 2400, ease: "cubic-bezier(0.4, 0, 0.2, 1)" },
  { pos: 0.38, dur: 2800, ease: "cubic-bezier(0.4, 0, 0.2, 1)" },
  { pos: 0.25, dur: 3200, ease: "cubic-bezier(0.4, 0, 0.2, 1)" },
  { pos: 0.20, dur: 2000, ease: "ease-in-out" },
  // Back to start position for seamless loop
];

const THREAT_COLOR = "#2563eb";
const BAR_GRADIENT = `linear-gradient(90deg, ${SPECTRUM.sky} 0%, ${SPECTRUM.azure} 50%, ${THREAT_COLOR} 100%)`;

export default function F1InstrumentDiagram() {
  const [pos, setPos] = useState(0.20);
  const [easing, setEasing] = useState("ease-in-out");
  const [dur, setDur] = useState(2400);
  const [flash, setFlash] = useState(false);
  const [noMotion, setNoMotion] = useState(false);
  const idxRef = useRef(0);
  const timerRef = useRef(null);
  const flashTimerRef = useRef(null);

  useEffect(() => {
    setNoMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const advance = useCallback(() => {
    const kf = KEYFRAMES[idxRef.current];
    setEasing(kf.ease);
    setDur(kf.dur);
    setPos(kf.pos);

    // Flash handling
    if (kf.flash) {
      setFlash(true);
      clearTimeout(flashTimerRef.current);
      flashTimerRef.current = setTimeout(() => setFlash(false), kf.dur);
    }

    idxRef.current = (idxRef.current + 1) % KEYFRAMES.length;
    timerRef.current = setTimeout(advance, kf.dur);
  }, []);

  useEffect(() => {
    if (noMotion) return;
    timerRef.current = setTimeout(advance, 1200);
    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(flashTimerRef.current);
    };
  }, [noMotion, advance]);

  const inSafety = pos < 0.5;
  const accent = inSafety ? SPECTRUM.sky : THREAT_COLOR;

  // Needle glow — amplified during flash
  const needleShadow = flash
    ? `0 0 20px ${hexToRgba("#ffffff", 0.7)}, 0 0 40px ${hexToRgba(SPECTRUM.sky, 0.5)}, 0 0 6px ${hexToRgba(accent, 0.6)}`
    : `0 0 12px ${hexToRgba(accent, 0.4)}`;

  const needleBorder = flash ? `3px solid #ffffff` : `3px solid ${accent}`;

  return (
    <div>
      <style>{`
        @media (max-width: 480px) {
          .f1-compass-desc-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ─── Header ─── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: 10, flexWrap: "wrap", gap: 4,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: TEXT.muted,
        }}>
          The Inner Compass
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 400,
          letterSpacing: "0.06em", fontStyle: "italic",
          color: TEXT.muted,
        }}>
          needle moving — responding and returning
        </span>
      </div>

      {/* ─── Safety / Threat Labels ─── */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "baseline", marginBottom: 8,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 11, fontWeight: 700,
          letterSpacing: "0.08em", color: SPECTRUM.sky,
        }}>
          SAFETY
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 11, fontWeight: 700,
          letterSpacing: "0.08em", color: THREAT_COLOR,
        }}>
          THREAT
        </span>
      </div>

      {/* ─── Gradient Bar + Needle ─── */}
      <div style={{ position: "relative", padding: "8px 0", marginBottom: 10 }}>
        <div style={{
          height: 14, borderRadius: 7, background: BAR_GRADIENT,
          position: "relative",
          border: "1px solid transparent",
        }}>
          {/* Center divider */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, left: "50%", width: 2,
            transform: "translateX(-50%)",
            background: hexToRgba(SPECTRUM.slate, 0.55),
          }} />

          {/* Signal flash ring — expands outward from needle */}
          {flash && (
            <div style={{
              position: "absolute", top: "50%",
              left: `${pos * 100}%`,
              transform: "translate(-50%, -50%)",
              width: 24, height: 24, borderRadius: "50%",
              background: "transparent",
              boxShadow: `0 0 0 0 ${hexToRgba("#ffffff", 0.6)}`,
              animation: "signal-ping 400ms ease-out forwards",
              pointerEvents: "none",
            }} />
          )}

          {/* Needle */}
          <div
            role="img"
            aria-label={`Compass needle at ${inSafety ? "Safety" : "Threat"}`}
            style={{
              position: "absolute", top: "50%",
              left: `${pos * 100}%`,
              transform: "translate(-50%, -50%)",
              width: 24, height: 24, borderRadius: "50%",
              background: flash ? hexToRgba("#ffffff", 0.15) : BG.primary,
              border: needleBorder,
              boxShadow: needleShadow,
              transition: noMotion ? "none"
                : `left ${dur}ms ${easing}, border-color 150ms ease, box-shadow 150ms ease, background 150ms ease`,
            }}
          />
        </div>
      </div>

      {/* ─── Inline keyframe for ping animation ─── */}
      <style>{`
        @keyframes signal-ping {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(255,255,255,0.6); }
          100% { transform: translate(-50%, -50%) scale(2.8); opacity: 0; box-shadow: 0 0 12px 8px rgba(255,255,255,0); }
        }
      `}</style>

      {/* ─── Safety / Threat Descriptions ─── */}
      <div className="f1-compass-desc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { name: "Safety", color: SPECTRUM.sky, active: inSafety,
            text: "Enough safety to engage \u2014 the nervous system\u2019s home base" },
          { name: "Threat", color: THREAT_COLOR, active: !inSafety,
            text: "Protection needed \u2014 the nervous system mobilises to respond" },
        ].map(({ name, color, text, active }) => (
          <div key={name} style={{
            padding: "10px 12px", borderRadius: 8,
            background: hexToRgba(color, active ? 0.12 : 0.04),
            border: `1px solid ${hexToRgba(color, active ? 0.35 : 0.1)}`,
            boxShadow: active ? `0 0 16px ${hexToRgba(color, 0.15)}` : "none",
            opacity: active ? 1 : 0.55,
            transition: "background 500ms ease, border-color 500ms ease, box-shadow 500ms ease, opacity 500ms ease",
          }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 10, fontWeight: 700,
              letterSpacing: "0.06em", color,
              textTransform: "uppercase", marginBottom: 4,
            }}>
              {name}
            </div>
            <div style={{ fontSize: 12, color: active ? TEXT.secondary : TEXT.hint, lineHeight: 1.5,
              transition: "color 500ms ease",
            }}>
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
