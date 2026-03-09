'use client';

import { useState, useEffect } from "react";
import { FONT, TEXT, SPECTRUM, BORDER, BG, hexToRgba } from "@/src/styles/tokens";

// ─── Animation Constants ────────────────────────────────
const FLUID_POSITIONS = [0.18, 0.52, 0.28, 0.62, 0.12, 0.42, 0.35, 0.55, 0.22, 0.48];
const MOVE_MS = 1800;

const BAR_GRADIENT = `linear-gradient(90deg, ${SPECTRUM.sky} 0%, ${SPECTRUM.azure} 40%, ${SPECTRUM.blue} 60%, ${SPECTRUM.indigo} 100%)`;

export default function F1InstrumentDiagram() {
  const [idx, setIdx] = useState(0);
  const [noMotion, setNoMotion] = useState(false);

  useEffect(() => {
    setNoMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (noMotion) return;
    const t = setInterval(() => setIdx(i => (i + 1) % FLUID_POSITIONS.length), MOVE_MS);
    return () => clearInterval(t);
  }, [noMotion]);

  const pos = noMotion ? 0.25 : FLUID_POSITIONS[idx];
  const inConn = pos < 0.5;
  const accent = inConn ? SPECTRUM.sky : SPECTRUM.blue;

  return (
    <div>
      {/* ─── Mode Labels ─── */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "baseline", marginBottom: 8,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 11, fontWeight: 700,
          letterSpacing: "0.08em", color: SPECTRUM.sky,
        }}>
          CONNECTION
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
          PROTECTION
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
                : `left ${MOVE_MS}ms ease-in-out, border-color 300ms ease, box-shadow 300ms ease`,
            }}
          />
        </div>
      </div>

      {/* ─── State Description ─── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "flex-end",
        marginBottom: 14,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 400,
          letterSpacing: "0.06em", fontStyle: "italic",
          color: TEXT.muted,
        }}>
          needle moving — responding and returning
        </span>
      </div>

      {/* ─── Body-First Descriptions ─── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { name: "Connection", color: SPECTRUM.sky,
            text: "Belonging, safety, relating \u2014 the system\u2019s home base" },
          { name: "Protection", color: SPECTRUM.indigo,
            text: "Threat response, survival \u2014 fight, flight, freeze" },
        ].map(({ name, color, text }) => (
          <div key={name} style={{
            padding: "10px 12px", borderRadius: 8,
            background: hexToRgba(color, 0.06),
            border: `1px solid ${hexToRgba(color, 0.15)}`,
          }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 10, fontWeight: 700,
              letterSpacing: "0.06em", color,
              textTransform: "uppercase", marginBottom: 4,
            }}>
              {name}
            </div>
            <div style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.5 }}>
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
