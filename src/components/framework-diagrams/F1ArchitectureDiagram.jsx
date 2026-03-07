import { SPECTRUM, TEXT, FONT, hexToRgba } from "@/src/styles/tokens";

// ─── SVG Constants ──────────────────────────────────────
const VW = 800, VH = 360;
const PL = 40, PR = 40;

// Column layout
const LABEL_W = 120;
const COL_START = PL + LABEL_W + 12; // 172
const COL_GAP = 8;
const COL_W = (VW - PR - COL_START - COL_GAP * 3) / 4; // ~141
const BAR_MAX = COL_W - 14;

function colX(i) { return COL_START + i * (COL_W + COL_GAP); }

const MODES = [
  { letter: "A", name: "Connection",  color: SPECTRUM.sky },
  { letter: "B", name: "Protection",  color: SPECTRUM.azure },
  { letter: "C", name: "Control",     color: SPECTRUM.blue },
  { letter: "D", name: "Domination",  color: SPECTRUM.cobalt },
];

const DIMENSIONS = [
  { name: "Perception",   caps: [0.95, 0.55, 0.38, 0.12], labels: ["broad",     "narrows",     "strategic",    "binary"] },
  { name: "Empathy",      caps: [0.95, 0.42, 0.18, 0.06], labels: ["full",      "filtered",    "deprioritized","near-zero"] },
  { name: "Cognition",    caps: [0.95, 0.50, 0.38, 0.10], labels: ["flexible",  "simplified",  "rigid",        "elimination"] },
  { name: "Time horizon", caps: [0.92, 0.22, 0.32, 0.08], labels: ["extended",  "immediate",   "instrumental", "now"] },
  { name: "Learning",     caps: [0.78, 0.10, 0.22, 0.05], labels: ["possible",  "shut down",   "strategic",    "unavailable"] },
  { name: "Repair",       caps: [0.85, 0.28, 0.15, 0.05], labels: ["available", "difficult",   "deprioritized","unavailable"] },
];

// Row layout
const HEADER_Y = 44;
const ROWS_START = 78;
const ROW_H = 44;

export default function F1ArchitectureDiagram() {
  return (
    <svg
      role="img"
      aria-labelledby="arch-title arch-desc"
      viewBox={`0 0 ${VW} ${VH}`}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="arch-title">State determines capacity across six dimensions</title>
      <desc id="arch-desc">
        A matrix showing how six capacity dimensions — perception, empathy,
        cognition, time horizon, learning, and repair — progressively narrow
        from Connection through Protection and Control to Domination.
      </desc>

      {/* ─── Mode Column Headers ─── */}
      {MODES.map((mode, i) => {
        const x = colX(i);
        const cx = x + COL_W / 2;
        return (
          <g key={mode.letter}>
            <text x={cx} y={HEADER_Y - 14} textAnchor="middle"
              style={{ fontFamily: FONT.mono, fontSize: "12px", fontWeight: 700,
                letterSpacing: "0.08em", fill: mode.color }}>
              {mode.letter}
            </text>
            <text x={cx} y={HEADER_Y} textAnchor="middle"
              style={{ fontFamily: FONT.mono, fontSize: "8.5px", fontWeight: 400,
                letterSpacing: "0.06em", fill: hexToRgba(mode.color, 0.7) }}>
              {mode.name}
            </text>
            <rect x={x} y={HEADER_Y + 8} width={COL_W} height={2.5}
              rx={1.25} fill={mode.color} opacity={0.4} />
          </g>
        );
      })}

      {/* ─── Header Divider ─── */}
      <line
        x1={PL} y1={ROWS_START - 8}
        x2={VW - PR} y2={ROWS_START - 8}
        stroke={hexToRgba(SPECTRUM.cobalt, 0.12)} strokeWidth="1"
      />

      {/* ─── Dimension Rows ─── */}
      {DIMENSIONS.map((dim, di) => {
        const rowY = ROWS_START + di * ROW_H;
        return (
          <g key={dim.name}>
            {/* Alternating row background */}
            {di % 2 === 0 && (
              <rect x={PL} y={rowY} width={VW - PL - PR} height={ROW_H}
                rx={3} fill={hexToRgba(SPECTRUM.cobalt, 0.04)} />
            )}

            {/* Dimension name */}
            <text x={PL + 4} y={rowY + 17}
              style={{ fontFamily: FONT.mono, fontSize: "10px", fontWeight: 600,
                letterSpacing: "0.04em", fill: TEXT.secondary }}>
              {dim.name}
            </text>

            {/* Capacity bars + labels per mode */}
            {dim.caps.map((cap, mi) => {
              const x = colX(mi);
              const barW = Math.max(BAR_MAX * cap, 4);
              const color = MODES[mi].color;
              return (
                <g key={mi}>
                  <rect x={x} y={rowY + 9} width={barW} height={8}
                    rx={4} fill={hexToRgba(color, 0.3)} />
                  <rect x={x} y={rowY + 9} width={barW} height={8}
                    rx={4} fill="none"
                    stroke={hexToRgba(color, 0.45)} strokeWidth="0.5" />
                  <text x={x + 2} y={rowY + 32}
                    style={{ fontFamily: FONT.mono, fontSize: "8px", fontWeight: 400,
                      letterSpacing: "0.04em", fill: hexToRgba(color, 0.7) }}>
                    {dim.labels[mi]}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}
