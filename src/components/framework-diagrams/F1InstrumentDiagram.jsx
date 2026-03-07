'use client';

import { useState, useEffect } from "react";
import { FONT, TEXT, SPECTRUM, BORDER, BG, hexToRgba, MODE_ORANGE } from "@/src/styles/tokens";

// ─── Animation Constants ────────────────────────────────
const FLUID_POSITIONS = [0.18, 0.52, 0.28, 0.62, 0.12, 0.42, 0.35, 0.55, 0.22, 0.48];
const STUCK_POS = 0.78;
const MOVE_MS = 1800;

const BAR_GRADIENT = `linear-gradient(90deg, ${SPECTRUM.sky} 0%, ${SPECTRUM.azure} 40%, ${SPECTRUM.blue} 60%, ${SPECTRUM.indigo} 100%)`;

export default function F1InstrumentDiagram() {
  const [isStuck, setIsStuck] = useState(false);
  const [idx, setIdx] = useState(0);
  const [noMotion, setNoMotion] = useState(false);

  useEffect(() => {
    setNoMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (isStuck || noMotion) return;
    const t = setInterval(() => setIdx(i => (i + 1) % FLUID_POSITIONS.length), MOVE_MS);
    return () => clearInterval(t);
  }, [isStuck, noMotion]);

  const pos = isStuck ? STUCK_POS : (noMotion ? 0.25 : FLUID_POSITIONS[idx]);
  const inConn = pos < 0.5;
  const accent = isStuck ? MODE_ORANGE : (inConn ? SPECTRUM.sky : SPECTRUM.blue);

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
          border: isStuck
            ? `1px solid ${hexToRgba(MODE_ORANGE, 0.3)}`
            : "1px solid transparent",
          transition: "border-color 300ms ease",
        }}>
          {/* Center divider */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, left: "50%", width: 2,
            transform: "translateX(-50%)",
            background: hexToRgba("#000000", 0.35),
          }} />

          {/* Needle */}
          <div
            role="img"
            aria-label={isStuck
              ? "Compass needle frozen in Protection"
              : `Compass needle at ${inConn ? "Connection" : "Protection"}`}
            style={{
              position: "absolute", top: "50%",
              left: `${pos * 100}%`,
              transform: "translate(-50%, -50%)",
              width: 24, height: 24, borderRadius: "50%",
              background: BG.primary,
              border: `3px solid ${accent}`,
              boxShadow: isStuck
                ? `0 0 0 3px ${hexToRgba(MODE_ORANGE, 0.25)}`
                : `0 0 12px ${hexToRgba(accent, 0.4)}`,
              transition: noMotion ? "none"
                : `left ${MOVE_MS}ms ease-in-out, border-color 300ms ease, box-shadow 300ms ease`,
            }}
          />
        </div>
      </div>

      {/* ─── Controls Row ─── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 10, marginBottom: 14,
      }}>
        {/* Fluid / Stuck toggle */}
        <div style={{
          display: "flex", borderRadius: 100,
          border: `1px solid ${BORDER.default}`, overflow: "hidden",
        }}>
          {[
            { label: "Fluid", stuck: false, color: SPECTRUM.sky },
            { label: "Stuck", stuck: true, color: MODE_ORANGE },
          ].map(({ label, stuck, color }) => (
            <button
              key={label}
              onClick={() => setIsStuck(stuck)}
              aria-label={`Show ${label.toLowerCase()} compass`}
              aria-pressed={isStuck === stuck}
              style={{
                padding: "4px 14px", fontSize: 10,
                fontFamily: FONT.mono, fontWeight: 600,
                letterSpacing: "0.04em",
                border: "none", cursor: "pointer",
                borderLeft: stuck ? `1px solid ${BORDER.default}` : "none",
                transition: "all 200ms ease",
                background: isStuck === stuck
                  ? hexToRgba(color, 0.15) : "transparent",
                color: isStuck === stuck ? color : TEXT.muted,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* State description */}
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 400,
          letterSpacing: "0.06em", fontStyle: "italic",
          color: isStuck ? MODE_ORANGE : TEXT.muted,
          transition: "color 300ms ease",
        }}>
          {isStuck
            ? "needle frozen \u2014 lost capacity to move"
            : "needle moving \u2014 responding and returning"}
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
