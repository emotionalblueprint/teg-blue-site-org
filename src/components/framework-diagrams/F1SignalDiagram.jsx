import { SPECTRUM, TEXT, FONT, hexToRgba } from "@/src/styles/tokens";

// ─── SVG Constants ──────────────────────────────────────
const VW = 800, VH = 280;
const PL = 40, PT = 28, PR = 40, PB = 28;
const PW = VW - PL - PR;
const PH = VH - PT - PB;

const BODY_Y = PT + PH * 0.14;
const COG_Y = PT + PH * 0.88;
const SIGNAL_Y = PT + PH * 0.52;

const NODES = [
  { x: PL + PW * 0.06, label: "gut" },
  { x: PL + PW * 0.20, label: "heart" },
  { x: PL + PW * 0.34, label: "vagus" },
  { x: PL + PW * 0.48, label: "amygdala" },
];

const EVAL_X = PL + PW * 0.60;
const COG_START = PL + PW * 0.68;

export default function F1SignalDiagram() {
  return (
    <svg
      role="img"
      aria-labelledby="signal-title signal-desc"
      viewBox={`0 0 ${VW} ${VH}`}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="signal-title">How the body evaluates and signals</title>
      <desc id="signal-desc">
        A flow diagram showing the body's continuous evaluation process.
        The nervous system (gut, heart, vagus nerve, amygdala) evaluates
        safety and produces an emotional signal before cognition arrives.
      </desc>

      {/* ─── Body Evaluation Line ─── */}
      <line x1={PL} y1={BODY_Y} x2={PL + PW} y2={BODY_Y}
        stroke={SPECTRUM.sky} strokeWidth="2.5" />

      {/* ─── "BODY'S EVALUATION" label ─── */}
      <text x={PL} y={BODY_Y - 16}
        style={{ fontFamily: FONT.mono, fontSize: "13px", fontWeight: 700,
          letterSpacing: "0.08em", fill: TEXT.primary }}>
        {"BODY\u2019S EVALUATION"}
      </text>

      {/* ─── "continuous · below awareness" ─── */}
      <text x={PL + PW} y={BODY_Y - 16} textAnchor="end"
        style={{ fontFamily: FONT.mono, fontSize: "10px", fontWeight: 400,
          letterSpacing: "0.1em", fill: SPECTRUM.sky }}>
        continuous · below awareness
      </text>

      {/* ─── Sensing Nodes ─── */}
      {NODES.map(({ x, label }) => (
        <g key={label}>
          <circle cx={x} cy={BODY_Y} r="6"
            fill={hexToRgba(SPECTRUM.azure, 0.5)}
            stroke={SPECTRUM.sky} strokeWidth="1.5" />
          <text x={x} y={BODY_Y + 24} textAnchor="middle"
            style={{ fontFamily: FONT.mono, fontSize: "10px", fontWeight: 600,
              letterSpacing: "0.08em", fill: SPECTRUM.sky }}>
            {label}
          </text>
        </g>
      ))}

      {/* ─── Evaluation vertical connector ─── */}
      <line x1={EVAL_X} y1={BODY_Y} x2={EVAL_X} y2={SIGNAL_Y - 18}
        stroke={SPECTRUM.azure} strokeWidth="2" />

      {/* ─── Arrow at bottom of connector ─── */}
      <path
        d={`M${EVAL_X - 5},${SIGNAL_Y - 22} L${EVAL_X},${SIGNAL_Y - 15} L${EVAL_X + 5},${SIGNAL_Y - 22}`}
        fill="none" stroke={SPECTRUM.azure} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* ─── "safe enough?" label ─── */}
      <text x={EVAL_X + 14} y={BODY_Y + (SIGNAL_Y - BODY_Y) * 0.28}
        style={{ fontFamily: FONT.mono, fontSize: "11px", fontWeight: 500,
          letterSpacing: "0.08em", fill: TEXT.primary, fontStyle: "italic" }}>
        safe enough?
      </text>

      {/* ─── Signal Node ─── */}
      <circle cx={EVAL_X} cy={SIGNAL_Y} r="12"
        fill={hexToRgba(SPECTRUM.blue, 0.2)}
        stroke={SPECTRUM.blue} strokeWidth="2" />
      <circle cx={EVAL_X} cy={SIGNAL_Y} r="5"
        fill={SPECTRUM.azure} />

      {/* ─── "SIGNAL" label ─── */}
      <text x={EVAL_X + 20} y={SIGNAL_Y - 6}
        style={{ fontFamily: FONT.mono, fontSize: "14px", fontWeight: 700,
          letterSpacing: "0.06em", fill: TEXT.primary }}>
        SIGNAL
      </text>

      {/* ─── "emotion" label ─── */}
      <text x={EVAL_X + 20} y={SIGNAL_Y + 12}
        style={{ fontFamily: FONT.mono, fontSize: "11px", fontWeight: 400,
          letterSpacing: "0.08em", fill: SPECTRUM.azure }}>
        emotion
      </text>

      {/* ─── Signal to Cognition connector ─── */}
      <line x1={EVAL_X} y1={SIGNAL_Y + 18} x2={EVAL_X} y2={COG_Y}
        stroke={SPECTRUM.indigo} strokeWidth="1" strokeDasharray="3,5" />

      {/* ─── Cognition Line ─── */}
      <line x1={COG_START} y1={COG_Y} x2={PL + PW} y2={COG_Y}
        stroke={SPECTRUM.slate} strokeWidth="1.5" strokeOpacity="0.6"
        strokeDasharray="5,7" />

      {/* ─── "COGNITION" label ─── */}
      <text x={COG_START} y={COG_Y - 14}
        style={{ fontFamily: FONT.mono, fontSize: "12px", fontWeight: 600,
          letterSpacing: "0.08em", fill: SPECTRUM.slate }}>
        COGNITION
      </text>

      {/* ─── "arrives second" ─── */}
      <text x={PL + PW} y={COG_Y - 14} textAnchor="end"
        style={{ fontFamily: FONT.mono, fontSize: "10px", fontWeight: 400,
          letterSpacing: "0.1em", fill: SPECTRUM.slate, fillOpacity: 0.7 }}>
        arrives second
      </text>
    </svg>
  );
}
