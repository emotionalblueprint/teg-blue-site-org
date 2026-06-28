import { SPECTRUM, TEXT, FONT, hexToRgba } from "@/src/styles/tokens";

// ─── SVG Constants ──────────────────────────────────────
const VW = 800, VH = 442;
const PL = 40, PR = 40;

// Column layout
const LABEL_W = 130;
const COL_START = PL + LABEL_W + 14;
const COL_GAP = 10;
const COL_W = (VW - PR - COL_START - COL_GAP * 3) / 4;
const BAR_MAX = COL_W - 16;

function colX(i) { return COL_START + i * (COL_W + COL_GAP); }

const MODES = [
  { letter: "A", name: "Connection",  conditionShort: "Connection",      color: SPECTRUM.sky },
  { letter: "B", name: "Protection",  conditionShort: "Protection",       color: SPECTRUM.azure },
  { letter: "C", name: "Control / Management", conditionShort: "Control / Management", color: SPECTRUM.blue },
  { letter: "D", name: "Domination",  conditionShort: "Domination",      color: SPECTRUM.cobalt },
];

const DIMENSIONS = [
  { name: "Signal Detection", caps: [0.95, 0.55, 0.38, 0.12], labels: ["broad",     "narrows",     "strategic",    "binary"] },
  { name: "Empathy",      caps: [0.95, 0.42, 0.18, 0.06], labels: ["full",      "filtered",    "deprioritized","near-zero"] },
  { name: "Cognition",    caps: [0.95, 0.50, 0.38, 0.10], labels: ["flexible",  "simplified",  "rigid",        "elimination"] },
  { name: "Time horizon", caps: [0.92, 0.22, 0.32, 0.08], labels: ["extended",  "immediate",   "instrumental", "now"] },
  { name: "Learning",     caps: [0.78, 0.10, 0.22, 0.05], labels: ["possible",  "shut down",   "strategic",    "unavailable"] },
  { name: "Repair",       caps: [0.85, 0.28, 0.15, 0.05], labels: ["available", "difficult",   "deprioritized","unavailable"] },
];

// Row layout
const HEADER_Y = 50;
const ROWS_START = 102;
const ROW_H = 54;

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
        A matrix showing how six capacity dimensions — signal detection, empathy,
        cognition, time horizon, learning, and repair — progressively narrow
        from Connection through Protection and Control to Domination.
      </desc>

      {/* ─── Mode Column Headers ─── */}
      {MODES.map((mode, i) => {
        const x = colX(i);
        const cx = x + COL_W / 2;
        return (
          <g key={mode.letter}>
            <text x={cx} y={HEADER_Y - 16} textAnchor="middle"
              style={{ fontFamily: FONT.mono, fontSize: "15px", fontWeight: 700,
                letterSpacing: "0.08em", fill: mode.color }}>
              {mode.letter}
            </text>
            <text x={cx} y={HEADER_Y + 1} textAnchor="middle"
              style={{ fontFamily: FONT.mono, fontSize: "11px", fontWeight: 500,
                letterSpacing: "0.06em", fill: hexToRgba(mode.color, 0.85) }}>
              {mode.name}
            </text>
            <text x={cx} y={HEADER_Y + 14} textAnchor="middle"
              style={{ fontFamily: FONT.display, fontSize: "9px", fontStyle: "italic",
                fill: hexToRgba(mode.color, 0.5) }}>
              {mode.conditionShort}
            </text>
            <rect x={x} y={HEADER_Y + 24} width={COL_W} height={3}
              rx={1.5} fill={mode.color} opacity={0.5} />
          </g>
        );
      })}

      {/* ─── Header Divider ─── */}
      <line
        x1={PL} y1={ROWS_START - 6}
        x2={VW - PR} y2={ROWS_START - 6}
        stroke={hexToRgba(SPECTRUM.cobalt, 0.15)} strokeWidth="1"
      />

      {/* ─── Dimension Rows ─── */}
      {DIMENSIONS.map((dim, di) => {
        const rowY = ROWS_START + di * ROW_H;
        return (
          <g key={dim.name}>
            {/* Alternating row background */}
            {di % 2 === 0 && (
              <rect x={PL} y={rowY} width={VW - PL - PR} height={ROW_H}
                rx={3} fill={hexToRgba(SPECTRUM.cobalt, 0.06)} />
            )}

            {/* Dimension name */}
            <text x={PL + 4} y={rowY + 20}
              style={{ fontFamily: FONT.mono, fontSize: "12px", fontWeight: 600,
                letterSpacing: "0.04em", fill: TEXT.secondary }}>
              {dim.name}
            </text>

            {/* Capacity bars + labels per mode */}
            {dim.caps.map((cap, mi) => {
              const x = colX(mi);
              const barW = Math.max(BAR_MAX * cap, 6);
              const color = MODES[mi].color;
              return (
                <g key={mi}>
                  <rect x={x} y={rowY + 10} width={barW} height={14}
                    rx={4} fill={hexToRgba(color, 0.5)} />
                  <rect x={x} y={rowY + 10} width={barW} height={14}
                    rx={4} fill="none"
                    stroke={hexToRgba(color, 0.55)} strokeWidth="1" />
                  <text x={x + 2} y={rowY + 40}
                    style={{ fontFamily: FONT.mono, fontSize: "10px", fontWeight: 500,
                      letterSpacing: "0.04em", fill: hexToRgba(color, 0.85) }}>
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
