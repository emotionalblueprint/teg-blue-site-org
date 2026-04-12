import { DIAGRAM, DIAGRAM_STROKE, FONT, hexToRgba } from "@/src/styles/tokens";

/* ═══════════════════════════════════════════════════════
   ESCFlowDiagram — static overview of the full ESC
   showing all stages and both pathways at once.
   Complement to the interactive ESCCycleDiagram.

   viewBox width matches ESCCycleDiagram (880) so text
   renders at the same visual size in both diagrams.
   ═══════════════════════════════════════════════════════ */

/* ─── Layout ─────────────────────────────────────────── */
const W  = 880;
const CX = 440;
const AX = 224;
const BX = 656;
const FF = FONT.diagram;

/* Box dimensions — compact */
const SB = { w: 278, h: 30, r: 5 };
const EB = { w: 292, h: 34, r: 6 };
const BB = { w: 390, h: 30, r: 5 };
const ML = { w: 38,  h: 19 };

/* Y coordinates — element center-y */
const EYE = 16;
const L = [50, 104, 158, 212];
const BRY = 264;
const FKY = 287;
const PLY = 315;
const A = [350, 400, 458];
const B = [350, 400, 434, 458, 482, 506, 530, 578];
const H = 620;

/* ─── Component ──────────────────────────────────────── */
export default function ESCFlowDiagram() {
  const p   = DIAGRAM.primary;
  const brk = DIAGRAM.break;
  const ln  = DIAGRAM.connector;
  const sw  = DIAGRAM_STROKE.fine;

  return (
    <div style={{
      background: "#131a2f",
      border: `1px solid ${DIAGRAM.frame}`,
      borderRadius: 12,
      padding: "20px 16px 16px",
      overflowX: "auto",
    }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ display: "block", minWidth: 480 }}
        role="img"
        aria-label="The Emotional Somatic Cycle — full pathway overview showing all stages, the branching point at M4, and both Path A and Path B"
      >
        {/* ═══ EYEBROW ═══ */}
        <text x={CX} y={EYE} textAnchor="middle" dominantBaseline="central"
          fill={DIAGRAM.textMuted} fontSize={9} fontWeight={300} fontFamily={FF}
          letterSpacing="0.18em">
          THE EMOTIONAL SOMATIC CYCLE
        </text>

        {/* ═══ CONNECTING LINES ═══ */}

        {/* Linear section */}
        <VLine x={CX} y1={L[0]+EB.h/2} y2={L[1]-SB.h/2} c={ln} w={sw} />
        <VLine x={CX} y1={L[1]+SB.h/2} y2={L[2]-SB.h/2} c={ln} w={sw} />
        <VLine x={CX} y1={L[2]+SB.h/2} y2={L[3]-SB.h/2} c={ln} w={sw} />
        <VLine x={CX} y1={L[3]+SB.h/2} y2={BRY-BB.h/2}  c={ln} w={sw} />

        {/* Fork from branch box */}
        <VLine x={CX} y1={BRY+BB.h/2} y2={FKY} c={ln} w={sw} />
        <line x1={CX} y1={FKY} x2={AX} y2={PLY} stroke={ln} strokeWidth={sw} />
        <line x1={CX} y1={FKY} x2={BX} y2={PLY} stroke={ln} strokeWidth={sw} />

        {/* Yes / No on fork */}
        <text x={(CX+AX)/2 - 10} y={(FKY+PLY)/2 - 3}
          textAnchor="middle" dominantBaseline="central"
          fill={hexToRgba(p, 0.45)} fontSize={8} fontWeight={300}
          fontFamily={FF} fontStyle="italic">Yes</text>
        <text x={(CX+BX)/2 + 10} y={(FKY+PLY)/2 - 3}
          textAnchor="middle" dominantBaseline="central"
          fill={hexToRgba(brk, 0.45)} fontSize={8} fontWeight={300}
          fontFamily={FF} fontStyle="italic">No</text>

        {/* Path A */}
        <VLine x={AX} y1={PLY+11}       y2={A[0]-SB.h/2}    c={ln} w={sw} />
        <VLine x={AX} y1={A[0]+SB.h/2}  y2={A[1]-SB.h/2}    c={ln} w={sw} />
        <VLine x={AX} y1={A[1]+SB.h/2}  y2={A[2]-EB.h/2-10} c={ln} w={sw} />
        <Arrow x={AX} y={A[2]-EB.h/2} color={p} />

        {/* Path B — model steps */}
        <VLine x={BX} y1={PLY+11}       y2={B[0]-SB.h/2}    c={hexToRgba(brk,0.4)} w={sw} />
        <VLine x={BX} y1={B[0]+SB.h/2}  y2={B[1]-SB.h/2}    c={hexToRgba(brk,0.4)} w={sw} />

        {/* Path B — cascade chain */}
        <VLine x={BX} y1={B[1]+SB.h/2} y2={B[2]-9} c={hexToRgba(brk,0.25)} w={sw} />
        {[2,3,4,5,6].map(i => (
          <VLine key={i} x={BX}
            y1={B[i]+9}
            y2={i === 6 ? B[7]-EB.h/2-10 : B[i+1]-9}
            c={hexToRgba(brk,0.25)} w={sw} />
        ))}
        <Arrow x={BX} y={B[7]-EB.h/2} color={brk} />

        {/* ═══ SHAPES ═══ */}

        {/* Linear section */}
        <EmphBox x={CX} y={L[0]} label="Physiological Baseline" color={p} />
        <StepBox x={CX} y={L[1]} label="Safety-Threat Evaluation" model="M1" color={p} />
        <StepBox x={CX} y={L[2]} label="Signal Generation" model="M1" color={p} />
        <StepBox x={CX} y={L[3]} label="State Activation" model="M2" color={p} />

        {/* Branch question */}
        <g>
          <rect x={CX-BB.w/2} y={BRY-BB.h/2} width={BB.w} height={BB.h} rx={BB.r}
            fill={hexToRgba(p, 0.04)} stroke={DIAGRAM.divider} strokeWidth={sw} />
          <text x={CX-20} y={BRY+1} textAnchor="middle" dominantBaseline="central"
            fill={DIAGRAM.textStrong} fontSize={10.5} fontWeight={300} fontFamily={FF}>
            Can the CLS feel the ESS?
          </text>
          <rect x={CX+BB.w/2-52} y={BRY-ML.h/2} width={ML.w} height={ML.h} rx={ML.h/2}
            fill={hexToRgba(p, 0.15)} />
          <text x={CX+BB.w/2-33} y={BRY+1} textAnchor="middle" dominantBaseline="central"
            fill={p} fontSize={9} fontWeight={500} fontFamily={FF} letterSpacing="0.06em">
            M4
          </text>
        </g>

        {/* Path labels */}
        <text x={AX} y={PLY} textAnchor="middle" dominantBaseline="central"
          fill={p} fontSize={10.5} fontWeight={500} fontFamily={FF}
          letterSpacing="0.14em">PATH A</text>
        <text x={BX} y={PLY} textAnchor="middle" dominantBaseline="central"
          fill={brk} fontSize={10.5} fontWeight={500} fontFamily={FF}
          letterSpacing="0.14em">PATH B</text>

        {/* Path A */}
        <StepBox x={AX} y={A[0]} label="Mobilisation Response"  model="M3" color={p} />
        <StepBox x={AX} y={A[1]} label="Biological Restoration" model="M3" color={p} />
        <EmphBox x={AX} y={A[2]} label="Physiological Baseline" color={p} />
        <text x={AX} y={A[2]+EB.h/2+14} textAnchor="middle" dominantBaseline="central"
          fill={hexToRgba(p, 0.4)} fontSize={8.5} fontWeight={300} fontFamily={FF}
          fontStyle="italic">cycle complete</text>

        {/* Path B */}
        <StepBox x={BX} y={B[0]} label="Cognitive Override"      model="M3" color={brk} />
        <StepBox x={BX} y={B[1]} label="Incomplete Restoration"  model="M3" color={brk} />
        <CascadeText x={BX} y={B[2]} label="Unresolved Activation Load" color={brk} />
        <CascadeText x={BX} y={B[3]} label="Debris Accumulation"        color={brk} />
        <CascadeText x={BX} y={B[4]} label="Baseline Elevation"         color={brk} />
        <CascadeText x={BX} y={B[5]} label="Restoration Substitutes"    color={brk} />
        <CascadeText x={BX} y={B[6]} label="Temporary Relief"           color={brk} />
        <EmphBox x={BX} y={B[7]} label="Elevated Baseline" color={brk} />
        <text x={BX} y={B[7]+EB.h/2+14} textAnchor="middle" dominantBaseline="central"
          fill={hexToRgba(brk, 0.4)} fontSize={8.5} fontWeight={300} fontFamily={FF}
          fontStyle="italic">cycle repeats from higher floor</text>

      </svg>
    </div>
  );
}

/* ─── SVG Helpers ────────────────────────────────────── */

function VLine({ x, y1, y2, c, w }) {
  return <line x1={x} y1={y1} x2={x} y2={y2} stroke={c} strokeWidth={w} />;
}

function Arrow({ x, y, color }) {
  return (
    <polygon
      points={`${x-5},${y-10} ${x+5},${y-10} ${x},${y}`}
      fill={color} fillOpacity={0.6}
    />
  );
}

function EmphBox({ x, y, label, color }) {
  return (
    <g>
      <rect x={x-EB.w/2} y={y-EB.h/2} width={EB.w} height={EB.h} rx={EB.r}
        fill={hexToRgba(color, 0.08)}
        stroke={hexToRgba(color, 0.25)}
        strokeWidth={DIAGRAM_STROKE.fine} />
      <text x={x} y={y+1} textAnchor="middle" dominantBaseline="central"
        fill={color} fontSize={10.5} fontWeight={500} fontFamily={FF}
        letterSpacing="0.08em">
        {label.toUpperCase()}
      </text>
    </g>
  );
}

function StepBox({ x, y, label, model, color }) {
  const pillCX = x + SB.w/2 + 10 + ML.w/2;
  return (
    <g>
      <rect x={x-SB.w/2} y={y-SB.h/2} width={SB.w} height={SB.h} rx={SB.r}
        fill={hexToRgba(color, 0.05)}
        stroke={hexToRgba(color, 0.15)}
        strokeWidth={DIAGRAM_STROKE.fine} />
      <text x={x} y={y+1} textAnchor="middle" dominantBaseline="central"
        fill={DIAGRAM.textStrong} fontSize={10.5} fontWeight={300} fontFamily={FF}>
        {label}
      </text>
      {model && (
        <g>
          <rect x={pillCX-ML.w/2} y={y-ML.h/2} width={ML.w} height={ML.h} rx={ML.h/2}
            fill={hexToRgba(color, 0.15)} />
          <text x={pillCX} y={y+1} textAnchor="middle" dominantBaseline="central"
            fill={color} fontSize={9} fontWeight={500} fontFamily={FF}
            letterSpacing="0.06em">
            {model}
          </text>
        </g>
      )}
    </g>
  );
}

function CascadeText({ x, y, label, color }) {
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central"
      fill={hexToRgba(color, 0.65)} fontSize={10} fontWeight={300} fontFamily={FF}>
      {label}
    </text>
  );
}
