import { SPECTRUM, TEXT, FONT, hexToRgba } from "@/src/styles/tokens";

// ─── SVG Constants ──────────────────────────────────────
const VW = 800, VH = 220;
const PL = 50, PR = 50;
const PW = VW - PL - PR; // 700

const NODE_Y = 108;
const SPACING = PW / 6; // ~116.7

function stepX(i) { return PL + i * SPACING; }

const STEPS = [
  { label: ["Signal", "Detection"],       fw: "F1, F2, F6",  zone: "pre" },
  { label: ["Emotion"],                  fw: "F1",           zone: "pre" },
  { label: ["Action"],                   fw: "F1, F2",       zone: "pre" },
  { label: ["Biological", "Restoration"], fw: "F1\u2013F3",  zone: "hinge" },
  { label: ["Behaviour"],                fw: "F3",           zone: "post" },
  { label: ["Social", "Structure"],      fw: "F4\u2013F6",   zone: "post" },
  { label: ["Escalation", "or Repair"],  fw: "F7\u2013F12",  zone: "post" },
];

function zoneColor(zone) {
  if (zone === "pre") return SPECTRUM.sky;
  if (zone === "hinge") return SPECTRUM.azure;
  return SPECTRUM.indigo;
}

export default function F1FullArcDiagram() {
  return (
    <svg
      role="img"
      aria-labelledby="arc-title arc-desc"
      viewBox={`0 0 ${VW} ${VH}`}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="arc-title">The seven-step arc from signal to structure</title>
      <desc id="arc-desc">
        Seven steps from Signal Detection to Escalation or Repair, with Biological
        Restoration as the central hinge at step four. Steps one through three
        represent the body&#39;s designed process. Steps five through seven
        depend on whether restoration completed.
      </desc>

      {/* ─── Annotations ─── */}
      <text x={stepX(1)} y={36} textAnchor="middle"
        style={{ fontFamily: FONT.mono, fontSize: "9px", fontWeight: 400,
          letterSpacing: "0.1em", fill: SPECTRUM.sky }}>
        {"the body\u2019s designed process"}
      </text>
      <line x1={stepX(0)} y1={46} x2={stepX(2)} y2={46}
        stroke={hexToRgba(SPECTRUM.sky, 0.3)} strokeWidth="1" />

      <text x={stepX(5)} y={36} textAnchor="middle"
        style={{ fontFamily: FONT.mono, fontSize: "9px", fontWeight: 400,
          letterSpacing: "0.1em", fill: SPECTRUM.indigo }}>
        depends on restoration
      </text>
      <line x1={stepX(4)} y1={46} x2={stepX(6)} y2={46}
        stroke={hexToRgba(SPECTRUM.indigo, 0.3)} strokeWidth="1" />

      {/* ─── Hinge Marker ─── */}
      <line x1={stepX(3)} y1={54} x2={stepX(3)} y2={NODE_Y - 22}
        stroke={hexToRgba(SPECTRUM.cobalt, 0.25)} strokeWidth="1"
        strokeDasharray="3,4" />

      {/* ─── Connecting Lines ─── */}
      {STEPS.slice(0, -1).map((step, i) => {
        const r1 = step.zone === "hinge" ? 16 : 9;
        const r2 = STEPS[i + 1].zone === "hinge" ? 16 : 9;
        const color = i < 2 ? SPECTRUM.sky
          : i < 4 ? SPECTRUM.azure
          : SPECTRUM.indigo;
        return (
          <line key={`c${i}`}
            x1={stepX(i) + r1 + 2} y1={NODE_Y}
            x2={stepX(i + 1) - r2 - 2} y2={NODE_Y}
            stroke={color} strokeWidth="1.5" />
        );
      })}

      {/* ─── Step Nodes ─── */}
      {STEPS.map((step, i) => {
        const x = stepX(i);
        const isHinge = step.zone === "hinge";
        const r = isHinge ? 16 : 9;
        const color = zoneColor(step.zone);

        // Label offset depends on number of label lines
        const labelBaseY = NODE_Y + r + 16;
        const fwY = labelBaseY + step.label.length * 12 + 2;

        return (
          <g key={i}>
            {/* Outer ring */}
            <circle cx={x} cy={NODE_Y} r={r}
              fill={hexToRgba(isHinge ? SPECTRUM.blue : color, isHinge ? 0.2 : 0.1)}
              stroke={isHinge ? SPECTRUM.blue : color}
              strokeWidth={isHinge ? 2.5 : 1.5} />

            {/* Hinge inner dot */}
            {isHinge && (
              <circle cx={x} cy={NODE_Y} r={5} fill={SPECTRUM.azure} />
            )}

            {/* Step number */}
            <text x={x} y={NODE_Y + (isHinge ? 4 : 3.5)} textAnchor="middle"
              style={{ fontFamily: FONT.mono,
                fontSize: isHinge ? "10px" : "8px", fontWeight: 700,
                fill: isHinge ? TEXT.primary : color }}>
              {i + 1}
            </text>

            {/* Step label */}
            <text x={x} y={labelBaseY} textAnchor="middle"
              style={{ fontFamily: FONT.mono,
                fontSize: isHinge ? "10px" : "9px",
                fontWeight: isHinge ? 700 : 500,
                letterSpacing: "0.06em",
                fill: isHinge ? TEXT.primary : color }}>
              {step.label.map((line, j) => (
                <tspan key={j} x={x} dy={j === 0 ? 0 : 12}>{line}</tspan>
              ))}
            </text>

            {/* Framework reference */}
            <text x={x} y={fwY} textAnchor="middle"
              style={{ fontFamily: FONT.mono, fontSize: "8px", fontWeight: 400,
                letterSpacing: "0.08em", fill: hexToRgba(color, 0.75) }}>
              {step.fw}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
