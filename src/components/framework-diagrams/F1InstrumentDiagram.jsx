'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import { FONT, TEXT, SPECTRUM, BORDER, BG, hexToRgba } from "@/src/styles/tokens";

// ─── Animation Keyframes ────────────────────────────────
// Each keyframe: { pos, duration (ms to reach THIS keyframe), easing }
// Loop: gentle drift in Connection → snap to Protection → agitated →
// slow restoration back to Connection start → repeat
const KEYFRAMES = [
  // Phase 1: Gentle drift in Connection (slow, ease-in-out)
  { pos: 0.22, dur: 2400, ease: "ease-in-out" },
  { pos: 0.15, dur: 2800, ease: "ease-in-out" },
  { pos: 0.28, dur: 2600, ease: "ease-in-out" },
  { pos: 0.18, dur: 2200, ease: "ease-in-out" },
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

const BAR_GRADIENT = `linear-gradient(90deg, ${SPECTRUM.sky} 0%, ${SPECTRUM.azure} 40%, ${SPECTRUM.blue} 60%, ${SPECTRUM.indigo} 100%)`;

export default function F1InstrumentDiagram() {
  const [pos, setPos] = useState(0.20);
  const [easing, setEasing] = useState("ease-in-out");
  const [dur, setDur] = useState(2400);
  const [noMotion, setNoMotion] = useState(false);
  const idxRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    setNoMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const advance = useCallback(() => {
    const kf = KEYFRAMES[idxRef.current];
    setEasing(kf.ease);
    setDur(kf.dur);
    setPos(kf.pos);
    idxRef.current = (idxRef.current + 1) % KEYFRAMES.length;
    timerRef.current = setTimeout(advance, kf.dur);
  }, []);

  useEffect(() => {
    if (noMotion) return;
    // Start the first keyframe after a brief pause
    timerRef.current = setTimeout(advance, 1200);
    return () => clearTimeout(timerRef.current);
  }, [noMotion, advance]);

  const inConn = pos < 0.5;
  const accent = inConn ? SPECTRUM.sky : SPECTRUM.blue;

  return (
    <div>
      {/* ─── Header ─── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: 10,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: TEXT.muted,
        }}>
          Inner Compass + Four-Mode Gradient
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 400,
          letterSpacing: "0.06em", fontStyle: "italic",
          color: TEXT.muted,
        }}>
          needle moving — responding and returning
        </span>
      </div>

      {/* ─── Mode Labels ─── */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "baseline", marginBottom: 8,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 11, fontWeight: 700,
          letterSpacing: "0.08em", color: SPECTRUM.sky,
        }}>
          PATTERN A
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, fontWeight: 400,
          letterSpacing: "0.12em", color: TEXT.hint, textTransform: "uppercase",
        }}>
          body-first orientations
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 11, fontWeight: 700,
          letterSpacing: "0.08em", color: SPECTRUM.indigo,
        }}>
          PATTERN B
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

          {/* Needle */}
          <div
            role="img"
            aria-label={`Compass needle at ${inConn ? "Connection" : "Protection"}`}
            style={{
              position: "absolute", top: "50%",
              left: `${pos * 100}%`,
              transform: "translate(-50%, -50%)",
              width: 24, height: 24, borderRadius: "50%",
              background: BG.primary,
              border: `3px solid ${accent}`,
              boxShadow: `0 0 12px ${hexToRgba(accent, 0.4)}`,
              transition: noMotion ? "none"
                : `left ${dur}ms ${easing}, border-color 300ms ease, box-shadow 300ms ease`,
            }}
          />
        </div>
      </div>

      {/* ─── Body-First Descriptions ─── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { name: "Connection Mode", color: SPECTRUM.sky, active: inConn,
            text: "Belonging, safety, relating \u2014 the system\u2019s home base" },
          { name: "Protection Mode", color: SPECTRUM.indigo, active: !inConn,
            text: "Threat response, survival \u2014 fight, flight, freeze" },
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
