"use client";

import { useState } from "react";
import { BG, TEXT, BORDER, FONT, SPECTRUM, ACCENT, hexToRgba } from "../styles/tokens";

/**
 * ESCCycleDiagramV2 — The Emotional Somatic Cycle as two circular paths
 * Path A (blue): complete cycle, returns to baseline
 * Path B (orange): incomplete cycle, gap at top, baseline elevates
 *
 * Design reference: ESC-PATH-A.png, ESC-PATH-B-from-*.png
 */

const SIZE = 280;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 105;
const STROKE = 6;

// Stage positions around the circle (in degrees, 0 = top/12 o'clock, clockwise)
const STAGES = [
  { angle: 0,   label: "Physiological Baseline", short: "Baseline", model: null },
  { angle: 55,  label: "Safety-Threat Evaluation", short: "Evaluation", model: "M1" },
  { angle: 100, label: "Signal Generation", short: "Signal", model: "M1" },
  { angle: 150, label: "State Activation", short: "State", model: "M2" },
  { angle: 195, label: "The Branching Point", short: "Branching", model: "M4" },
  { angle: 260, label: "Mobilisation / Restoration", short: "Restoration", model: "M3" },
];

// Convert degrees to SVG coordinates (0 = top, clockwise)
function toXY(angleDeg, r = R) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

// SVG arc path from startAngle to endAngle
function arcPath(startDeg, endDeg, r = R) {
  const start = toXY(startDeg, r);
  const end = toXY(endDeg, r);
  const sweep = endDeg - startDeg;
  const largeArc = sweep > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

// Stage descriptions
const STAGE_INFO = {
  "Physiological Baseline": "The nervous system at rest. Cortisol at resting level. Muscles at resting tension. The start and endpoint of the cycle.",
  "Safety-Threat Evaluation": "The sensory periphery detects, the nervous system evaluates for safety or threat — below conscious awareness, at millisecond speed.",
  "Signal Generation": "The nervous system generates a physiological response pattern — hormonal, neurochemical, muscular — encoding what was detected.",
  "State Activation": "The nervous system reorganises into a different physiological configuration along the safety-threat gradient.",
  "The Branching Point": "Can the CLS feel what the ESS is doing? This determines whether the cycle completes (Path A) or remains unresolved (Path B).",
  "Mobilisation / Restoration": "Path A: the body completes its restoration sequence — stress hormones metabolise, muscles release, baseline returns. Path B: override, the sequence does not complete.",
};

export default function ESCCycleDiagramV2() {
  const [hoveredStage, setHoveredStage] = useState(null);
  const [activePath, setActivePath] = useState(null); // null = both, "a" or "b"

  const pathAColor = SPECTRUM.azure;
  const pathBColor = ACCENT.orange;
  const pathBDeep = '#c2553a';

  const containerStyle = {
    background: BG.primary,
    border: `1px solid ${BORDER.default}`,
    borderRadius: 12,
    padding: "32px 24px",
    fontFamily: FONT.display,
  };

  const toggleStyle = (path) => ({
    padding: "6px 16px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    border: `1px solid ${activePath === path
      ? (path === "a" ? pathAColor : pathBColor)
      : hexToRgba(SPECTRUM.slate, 0.3)}`,
    background: activePath === path
      ? hexToRgba(path === "a" ? pathAColor : pathBColor, 0.12)
      : "transparent",
    color: activePath === path
      ? (path === "a" ? pathAColor : pathBColor)
      : TEXT.muted,
    transition: "all 0.2s ease",
    letterSpacing: "0.02em",
  });

  const showA = activePath !== "b";
  const showB = activePath !== "a";

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <h3 style={{
          fontSize: 18,
          fontWeight: 700,
          color: TEXT.primary,
          letterSpacing: "-0.01em",
          marginBottom: 8,
          textTransform: "uppercase",
        }}>
          The Cycle
        </h3>
        <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.6, maxWidth: 500, margin: "0 auto" }}>
          The same biological sequence runs in every human body. Whether it completes determines everything that follows.
        </p>
      </div>

      {/* Toggle */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24 }}>
        <button
          style={toggleStyle(null)}
          onClick={() => setActivePath(activePath === null ? null : null)}
        >
          Both Paths
        </button>
        <button style={toggleStyle("a")} onClick={() => setActivePath(activePath === "a" ? null : "a")}>
          Path A — Completed
        </button>
        <button style={toggleStyle("b")} onClick={() => setActivePath(activePath === "b" ? null : "b")}>
          Path B — Incomplete
        </button>
      </div>

      {/* Circles */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 40,
        flexWrap: "wrap",
        marginBottom: 24,
      }}>
        {/* Path A */}
        {showA && (
          <div style={{ position: "relative", width: SIZE, height: SIZE, transition: "opacity 0.3s ease" }}>
            <div style={{
              position: "absolute", top: -20, left: 0, right: 0,
              textAlign: "center", fontSize: 11, fontWeight: 700,
              color: pathAColor, textTransform: "uppercase", letterSpacing: "0.1em",
            }}>
              Path A
            </div>

            <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
              {/* Background circle */}
              <circle cx={CX} cy={CY} r={R} fill="none" stroke={hexToRgba(SPECTRUM.slate, 0.1)} strokeWidth={STROKE} />

              {/* Path A: full circle, blue */}
              <path
                d={arcPath(0, 359.9)}
                fill="none"
                stroke={pathAColor}
                strokeWidth={STROKE}
                strokeLinecap="round"
                opacity={0.8}
              />

              {/* Stage dots */}
              {STAGES.map((s, i) => {
                const p = toXY(s.angle);
                const isHovered = hoveredStage === s.label;
                return (
                  <g key={i}>
                    <circle
                      cx={p.x} cy={p.y} r={isHovered ? 7 : 5}
                      fill={i === 0 ? "#fff" : pathAColor}
                      stroke={i === 0 ? pathAColor : "none"}
                      strokeWidth={2}
                      style={{ cursor: "pointer", transition: "r 0.2s ease" }}
                      onMouseEnter={() => setHoveredStage(s.label)}
                      onMouseLeave={() => setHoveredStage(null)}
                    />
                  </g>
                );
              })}

              {/* ESS-CLS Bridge indicator */}
              <line x1={CX} y1={CY + R + 12} x2={CX} y2={CY + R + 28} stroke={pathAColor} strokeWidth={1.5} opacity={0.5} />
              <text x={CX} y={CY + R + 40} textAnchor="middle" fontSize={9} fill={TEXT.muted} fontFamily={FONT.mono}>
                ESS → CLS Bridge
              </text>

              {/* Stage labels outside circle */}
              {STAGES.map((s, i) => {
                const labelR = R + 28;
                const p = toXY(s.angle, labelR);
                const isRight = s.angle > 10 && s.angle < 180;
                const isLeft = s.angle > 180 && s.angle < 350;
                return (
                  <text
                    key={i}
                    x={p.x}
                    y={p.y}
                    textAnchor={isRight ? "start" : isLeft ? "end" : "middle"}
                    fontSize={9}
                    fill={hoveredStage === s.label ? TEXT.primary : TEXT.muted}
                    fontFamily={FONT.display}
                    style={{ cursor: "pointer", transition: "fill 0.2s ease" }}
                    onMouseEnter={() => setHoveredStage(s.label)}
                    onMouseLeave={() => setHoveredStage(null)}
                  >
                    {s.short}
                    {s.model && (
                      <tspan fontSize={8} fill={hexToRgba(pathAColor, 0.6)}>{` (${s.model})`}</tspan>
                    )}
                  </text>
                );
              })}

              {/* Direction arrow */}
              {(() => {
                const arrowPos = toXY(30);
                return (
                  <polygon
                    points={`${arrowPos.x},${arrowPos.y - 4} ${arrowPos.x + 5},${arrowPos.y + 2} ${arrowPos.x - 1},${arrowPos.y + 4}`}
                    fill={pathAColor}
                    opacity={0.6}
                  />
                );
              })()}
            </svg>
          </div>
        )}

        {/* Path B */}
        {showB && (
          <div style={{ position: "relative", width: SIZE, height: SIZE, transition: "opacity 0.3s ease" }}>
            <div style={{
              position: "absolute", top: -20, left: 0, right: 0,
              textAlign: "center", fontSize: 11, fontWeight: 700,
              color: pathBColor, textTransform: "uppercase", letterSpacing: "0.1em",
            }}>
              Path B
            </div>

            <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
              {/* Background circle with gap at top */}
              <circle cx={CX} cy={CY} r={R} fill="none" stroke={hexToRgba(SPECTRUM.slate, 0.1)} strokeWidth={STROKE} />

              {/* Path B: activation half (blue→orange transition) */}
              <path
                d={arcPath(0, 195)}
                fill="none"
                stroke={pathAColor}
                strokeWidth={STROKE}
                strokeLinecap="round"
                opacity={0.6}
              />

              {/* Path B: incomplete restoration (orange) */}
              <path
                d={arcPath(195, 320)}
                fill="none"
                stroke={pathBColor}
                strokeWidth={STROKE}
                strokeLinecap="round"
                opacity={0.8}
              />

              {/* The gap — Path B doesn't close (320° to 360°) */}
              {/* Elevated baseline ring (inner, thicker) */}
              <circle
                cx={CX} cy={CY} r={R - 14}
                fill="none"
                stroke={pathBColor}
                strokeWidth={10}
                opacity={0.15}
              />

              {/* Stage dots */}
              {STAGES.map((s, i) => {
                const p = toXY(s.angle);
                const isHovered = hoveredStage === s.label;
                const isBranching = i === 4;
                const isPastBranch = i === 5;
                const dotColor = isPastBranch ? pathBColor : isBranching ? pathBDeep : (i === 0 ? "#fff" : pathAColor);
                return (
                  <g key={i}>
                    {i === 0 ? (
                      /* Baseline dot — shows the gap: dot is displaced downward */
                      <circle
                        cx={p.x} cy={p.y}
                        r={isHovered ? 7 : 5}
                        fill="none"
                        stroke={pathBColor}
                        strokeWidth={2}
                        strokeDasharray="3,3"
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setHoveredStage(s.label)}
                        onMouseLeave={() => setHoveredStage(null)}
                      />
                    ) : (
                      <circle
                        cx={p.x} cy={p.y} r={isHovered ? 7 : 5}
                        fill={dotColor}
                        stroke={isBranching ? pathBDeep : "none"}
                        strokeWidth={isBranching ? 2 : 0}
                        style={{ cursor: "pointer", transition: "r 0.2s ease" }}
                        onMouseEnter={() => setHoveredStage(s.label)}
                        onMouseLeave={() => setHoveredStage(null)}
                      />
                    )}
                  </g>
                );
              })}

              {/* Gap indicator — dashed line where cycle doesn't close */}
              <path
                d={arcPath(320, 359)}
                fill="none"
                stroke={pathBColor}
                strokeWidth={2}
                strokeDasharray="4,6"
                opacity={0.4}
              />

              {/* ESS-CLS Bridge — blocked */}
              <line x1={CX} y1={CY + R + 12} x2={CX} y2={CY + R + 28} stroke={pathBColor} strokeWidth={1.5} opacity={0.5} />
              <text x={CX} y={CY + R + 40} textAnchor="middle" fontSize={9} fill={TEXT.muted} fontFamily={FONT.mono}>
                Bridge unavailable
              </text>

              {/* Stage labels */}
              {STAGES.map((s, i) => {
                const labelR = R + 28;
                const p = toXY(s.angle, labelR);
                const isRight = s.angle > 10 && s.angle < 180;
                const isLeft = s.angle > 180 && s.angle < 350;
                return (
                  <text
                    key={i}
                    x={p.x}
                    y={p.y}
                    textAnchor={isRight ? "start" : isLeft ? "end" : "middle"}
                    fontSize={9}
                    fill={hoveredStage === s.label ? TEXT.primary : TEXT.muted}
                    fontFamily={FONT.display}
                    style={{ cursor: "pointer", transition: "fill 0.2s ease" }}
                    onMouseEnter={() => setHoveredStage(s.label)}
                    onMouseLeave={() => setHoveredStage(null)}
                  >
                    {s.short}
                    {s.model && (
                      <tspan fontSize={8} fill={hexToRgba(pathBColor, 0.6)}>{` (${s.model})`}</tspan>
                    )}
                  </text>
                );
              })}
            </svg>
          </div>
        )}
      </div>

      {/* Hovered stage info */}
      <div style={{
        minHeight: 60,
        padding: "12px 20px",
        borderRadius: 8,
        background: hexToRgba(SPECTRUM.cobalt, 0.04),
        border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.1)}`,
        textAlign: "center",
        transition: "all 0.2s ease",
      }}>
        {hoveredStage ? (
          <>
            <div style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, marginBottom: 4 }}>
              {hoveredStage}
            </div>
            <div style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.6 }}>
              {STAGE_INFO[hoveredStage]}
            </div>
          </>
        ) : (
          <div style={{ fontSize: 12, color: TEXT.hint, lineHeight: 1.6, paddingTop: 8 }}>
            Hover over a stage to see what happens at each point in the cycle.
          </div>
        )}
      </div>

      {/* Bottom summary */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        marginTop: 16,
      }}>
        <div style={{
          padding: "12px 16px",
          borderRadius: 8,
          borderLeft: `3px solid ${pathAColor}`,
          background: hexToRgba(pathAColor, 0.04),
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: pathAColor, marginBottom: 4 }}>Path A — Completed</div>
          <div style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.6 }}>
            The restoration sequence runs to its endpoint. Stress hormones metabolise. Muscles release. The nervous system returns to physiological baseline. The cycle closes.
          </div>
        </div>
        <div style={{
          padding: "12px 16px",
          borderRadius: 8,
          borderLeft: `3px solid ${pathBColor}`,
          background: hexToRgba(pathBColor, 0.04),
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: pathBColor, marginBottom: 4 }}>Path B — Incomplete</div>
          <div style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.6 }}>
            The restoration sequence does not complete. Activation remains unresolved. Across repeated incomplete cycles, the baseline elevates. The floor rises.
          </div>
        </div>
      </div>
    </div>
  );
}
