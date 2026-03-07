import { SPECTRUM, TEXT, hexToRgba } from "@/src/styles/tokens";

// ─── SVG Constants ──────────────────────────────────────
const VW = 800, VH = 200;
const PL = 40, PT = 16, PR = 40, PB = 40;
const PW = VW - PL - PR;
const PH = VH - PT - PB;

const BODY_Y = PT + PH * 0.18;
const COG_Y = PT + PH * 0.82;
const SIGNAL_Y = PT + PH * 0.52;

const NODES = [
  { x: PL + PW * 0.10, label: "gut" },
  { x: PL + PW * 0.25, label: "heart" },
  { x: PL + PW * 0.40, label: "vagus" },
  { x: PL + PW * 0.55, label: "amygdala" },
];

const EVAL_X = PL + PW * 0.65;
const COG_START = PL + PW * 0.72;

const MONO = "'JetBrains Mono', 'SF Mono', 'Consolas', monospace";

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

      {/* Body Evaluation Line */}
      <line x1={PL} y1={BODY_Y} x2={PL + PW} y2={BODY_Y}
        stroke={SPECTRUM.azure} strokeWidth="2" strokeOpacity="0.8" />

      {/* "BODY'S EVALUATION" label */}
      <text x={PL} y={BODY_Y - 10}
        style={{ fontFamily: MONO, fontSize: "10px", fontWeight: 600,
          letterSpacing: "0.08em", fill: SPECTRUM.azure }}>
        {"BODY\u2019S EVALUATION"}
      </text>

      {/* "continuous · below awareness" */}
      <text x={PL + PW} y={BODY_Y - 10} textAnchor="end"
        style={{ fontFamily: MONO, fontSize: "7.5px", fontWeight: 400,
          letterSpacing: "0.12em", fill: TEXT.hint }}>
        continuous · below awareness
      </text>

      {/* Sensing Nodes */}
      {NODES.map(({ x, label }) => (
        <g key={label}>
          <circle cx={x} cy={BODY_Y} r="3"
            fill={hexToRgba(SPECTRUM.azure, 0.25)} />
          <text x={x} y={BODY_Y + 16} textAnchor="middle"
            style={{ fontFamily: MONO, fontSize: "7.5px", fontWeight: 400,
              letterSpacing: "0.12em", fill: TEXT.hint }}>
            {label}
          </text>
        </g>
      ))}

      {/* Evaluation vertical connector */}
      <line x1={EVAL_X} y1={BODY_Y} x2={EVAL_X} y2={SIGNAL_Y - 14}
        stroke={SPECTRUM.cobalt} strokeWidth="1.5" />

      {/* "safe enough?" label */}
      <text x={EVAL_X + 10} y={BODY_Y + (SIGNAL_Y - BODY_Y) * 0.3}
        style={{ fontFamily: MONO, fontSize: "8.5px", fontWeight: 400,
          letterSpacing: "0.12em", fill: TEXT.muted, fontStyle: "italic" }}>
        safe enough?
      </text>

      {/* Signal Node */}
      <circle cx={EVAL_X} cy={SIGNAL_Y} r="6"
        fill={hexToRgba(SPECTRUM.cobalt, 0.15)}
        stroke={SPECTRUM.cobalt} strokeWidth="1.5" />
      <circle cx={EVAL_X} cy={SIGNAL_Y} r="2.5"
        fill={hexToRgba(SPECTRUM.cobalt, 0.5)} />

      {/* "SIGNAL" label */}
      <text x={EVAL_X + 14} y={SIGNAL_Y - 4}
        style={{ fontFamily: MONO, fontSize: "10px", fontWeight: 600,
          letterSpacing: "0.08em", fill: SPECTRUM.cobalt }}>
        SIGNAL
      </text>

      {/* "(emotion)" label */}
      <text x={EVAL_X + 14} y={SIGNAL_Y + 10}
        style={{ fontFamily: MONO, fontSize: "8.5px", fontWeight: 400,
          letterSpacing: "0.12em", fill: TEXT.muted }}>
        emotion
      </text>

      {/* Signal to Cognition connector */}
      <line x1={EVAL_X} y1={SIGNAL_Y + 14} x2={EVAL_X} y2={COG_Y}
        stroke={hexToRgba(SPECTRUM.cobalt, 0.3)}
        strokeWidth="1" strokeDasharray="3,4" />

      {/* Cognition Line */}
      <line x1={COG_START} y1={COG_Y} x2={PL + PW} y2={COG_Y}
        stroke={TEXT.hint} strokeWidth="1" strokeOpacity="0.5"
        strokeDasharray="4,6" />

      {/* "COGNITION" label */}
      <text x={COG_START} y={COG_Y - 10}
        style={{ fontFamily: MONO, fontSize: "10px", fontWeight: 600,
          letterSpacing: "0.08em", fill: TEXT.hint }}>
        COGNITION
      </text>

      {/* "arrives second" */}
      <text x={PL + PW} y={COG_Y - 10} textAnchor="end"
        style={{ fontFamily: MONO, fontSize: "7.5px", fontWeight: 400,
          letterSpacing: "0.12em", fill: TEXT.hint }}>
        arrives second
      </text>
    </svg>
  );
}
