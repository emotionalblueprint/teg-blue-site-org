import { DIAGRAM, DIAGRAM_STROKE, FONT, hexToRgba } from "@/src/styles/tokens";

/* ═══════════════════════════════════════════════════════
   ESCFlowDiagram — static overview of the full ESC
   showing all stages and both pathways at once.

   Numbered stages, path boxes, L-shaped fork, cascade
   sub-steps. Stage names link to section anchors.
   ═══════════════════════════════════════════════════════ */

/* ─── Layout ─────────────────────────────────────────── */
const W  = 880;
const CX = 440;
const AX = 250;
const BX = 630;
const FF = FONT.diagram;

/* Box dimensions */
const SB = { w: 220, h: 30, r: 5 };
const EB = { w: 230, h: 34, r: 6 };
const BB = { w: 310, h: 30, r: 5 };
const PB = { w: 240, h: 42, r: 6 };   /* Path label boxes */

/* Y coordinates */
const EYE = 16;
const L = [50, 104, 158, 212];
const BRY = 264;
const FKY = 292;         /* horizontal bar Y */
const PLY = 332;         /* path box center Y */
const A = [380, 430, 488];
const B = [380, 430, 464, 488, 512, 536, 584];
const H = 626;

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
        aria-label="The Emotional Somatic Cycle — full pathway overview showing all numbered stages, the branching point, and both Path A and Path B"
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

        {/* L-shaped fork from branch box */}
        <VLine x={CX} y1={BRY+BB.h/2} y2={FKY} c={ln} w={sw} />
        {/* Horizontal bar */}
        <line x1={AX} y1={FKY} x2={BX} y2={FKY} stroke={ln} strokeWidth={sw} />
        {/* Vertical drops to path boxes */}
        <VLine x={AX} y1={FKY} y2={PLY-PB.h/2} c={ln} w={sw} />
        <VLine x={BX} y1={FKY} y2={PLY-PB.h/2} c={hexToRgba(brk,0.4)} w={sw} />

        {/* Yes / No labels on horizontal bar */}
        <text x={AX + (CX-AX)/2} y={FKY - 7}
          textAnchor="middle" dominantBaseline="central"
          fill={hexToRgba(p, 0.45)} fontSize={8} fontWeight={300}
          fontFamily={FF} fontStyle="italic">Yes</text>
        <text x={CX + (BX-CX)/2} y={FKY - 7}
          textAnchor="middle" dominantBaseline="central"
          fill={hexToRgba(brk, 0.45)} fontSize={8} fontWeight={300}
          fontFamily={FF} fontStyle="italic">No</text>

        {/* Path A lines */}
        <VLine x={AX} y1={PLY+PB.h/2}  y2={A[0]-SB.h/2}    c={ln} w={sw} />
        <VLine x={AX} y1={A[0]+SB.h/2} y2={A[1]-SB.h/2}    c={ln} w={sw} />
        <VLine x={AX} y1={A[1]+SB.h/2} y2={A[2]-EB.h/2-10} c={ln} w={sw} />
        <Arrow x={AX} y={A[2]-EB.h/2} color={p} />

        {/* Path B lines */}
        <VLine x={BX} y1={PLY+PB.h/2}  y2={B[0]-SB.h/2}    c={hexToRgba(brk,0.4)} w={sw} />
        <VLine x={BX} y1={B[0]+SB.h/2} y2={B[1]-SB.h/2}    c={hexToRgba(brk,0.4)} w={sw} />

        {/* Path B cascade chain */}
        <VLine x={BX} y1={B[1]+SB.h/2} y2={B[2]-9} c={hexToRgba(brk,0.25)} w={sw} />
        {[2,3,4,5].map(i => (
          <VLine key={i} x={BX}
            y1={B[i]+9}
            y2={i === 5 ? B[6]-EB.h/2-10 : B[i+1]-9}
            c={hexToRgba(brk,0.25)} w={sw} />
        ))}
        <Arrow x={BX} y={B[6]-EB.h/2} color={brk} />

        {/* ═══ SHAPES ═══ */}

        {/* Linear section */}
        <EmphBox x={CX} y={L[0]} label="Physiological Baseline" color={p} href="#baseline" />
        <StepBox x={CX} y={L[1]} num="1" label="Safety-Threat Evaluation" color={p} href="#safety-threat" />
        <StepBox x={CX} y={L[2]} num="2" label="Signal Generation" color={p} href="#signal-generation" />
        <StepBox x={CX} y={L[3]} num="3" label="State Activation" color={p} href="#state-activation" />

        {/* Branch question */}
        <a href="#branching-point" style={{ textDecoration: "none" }}>
          <rect x={CX-BB.w/2} y={BRY-BB.h/2} width={BB.w} height={BB.h} rx={BB.r}
            fill={hexToRgba(p, 0.04)} stroke={DIAGRAM.divider} strokeWidth={sw} />
          <text x={CX} y={BRY+1} textAnchor="middle" dominantBaseline="central"
            fill={DIAGRAM.textStrong} fontSize={10.5} fontWeight={300} fontFamily={FF}
            textDecoration="none">
            <tspan fill={hexToRgba(DIAGRAM.textMuted, 0.6)} fontSize={9}>4 · </tspan>
            Can the CLS feel the ESS?
          </text>
        </a>

        {/* Path A box */}
        <a href="#path-a" style={{ textDecoration: "none" }}>
          <rect x={AX-PB.w/2} y={PLY-PB.h/2} width={PB.w} height={PB.h} rx={PB.r}
            fill={hexToRgba(p, 0.08)}
            stroke={hexToRgba(p, 0.3)}
            strokeWidth={DIAGRAM_STROKE.fine} />
          <text x={AX} y={PLY-6} textAnchor="middle" dominantBaseline="central"
            fill={p} fontSize={11} fontWeight={600} fontFamily={FF}
            letterSpacing="0.12em" textDecoration="none">
            PATH A
          </text>
          <text x={AX} y={PLY+10} textAnchor="middle" dominantBaseline="central"
            fill={hexToRgba(p, 0.55)} fontSize={8} fontWeight={300} fontFamily={FF}
            textDecoration="none">
            Biological Restoration Available
          </text>
        </a>

        {/* Path B box */}
        <a href="#path-b" style={{ textDecoration: "none" }}>
          <rect x={BX-PB.w/2} y={PLY-PB.h/2} width={PB.w} height={PB.h} rx={PB.r}
            fill={hexToRgba(brk, 0.08)}
            stroke={hexToRgba(brk, 0.3)}
            strokeWidth={DIAGRAM_STROKE.fine} />
          <text x={BX} y={PLY-6} textAnchor="middle" dominantBaseline="central"
            fill={brk} fontSize={11} fontWeight={600} fontFamily={FF}
            letterSpacing="0.12em" textDecoration="none">
            PATH B
          </text>
          <text x={BX} y={PLY+10} textAnchor="middle" dominantBaseline="central"
            fill={hexToRgba(brk, 0.55)} fontSize={8} fontWeight={300} fontFamily={FF}
            textDecoration="none">
            Cognitive Override of Emotional Signal
          </text>
        </a>

        {/* Path A steps */}
        <StepBox x={AX} y={A[0]} num="5" label="Mobilisation Response"  color={p} href="#path-a" />
        <StepBox x={AX} y={A[1]} num="6" label="Biological Restoration" color={p} href="#path-a" />
        <EmphBox x={AX} y={A[2]} label="Physiological Baseline" color={p} href="#baseline" />
        <text x={AX} y={A[2]+EB.h/2+14} textAnchor="middle" dominantBaseline="central"
          fill={hexToRgba(p, 0.4)} fontSize={8.5} fontWeight={300} fontFamily={FF}
          fontStyle="italic">cycle complete</text>

        {/* Path B steps */}
        <StepBox x={BX} y={B[0]} num="7" label="Cognitive Override"       color={brk} href="#path-b" />
        <StepBox x={BX} y={B[1]} num="8" label="Restoration Substitutes"  color={brk} href="#path-b" />
        <CascadeText x={BX} y={B[2]} num="8.1" label="Temporary Relief"              color={brk} />
        <CascadeText x={BX} y={B[3]} num="8.2" label="Unresolved Activation Load"    color={brk} />
        <CascadeText x={BX} y={B[4]} num="8.3" label="Load Accumulation (Debris)"    color={brk} />
        <CascadeText x={BX} y={B[5]} num="8.4" label="Incomplete Restoration"        color={brk} />
        <EmphBox x={BX} y={B[6]} num="9" label="Elevated Baseline" color={brk} />
        <text x={BX} y={B[6]+EB.h/2+14} textAnchor="middle" dominantBaseline="central"
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

function EmphBox({ x, y, label, color, href, num }) {
  const inner = (
    <g>
      <rect x={x-EB.w/2} y={y-EB.h/2} width={EB.w} height={EB.h} rx={EB.r}
        fill={hexToRgba(color, 0.08)}
        stroke={hexToRgba(color, 0.25)}
        strokeWidth={DIAGRAM_STROKE.fine} />
      <text x={x} y={y+1} textAnchor="middle" dominantBaseline="central"
        fill={color} fontSize={10.5} fontWeight={500} fontFamily={FF}
        letterSpacing="0.08em" textDecoration="none">
        {num && <tspan fill={hexToRgba(color, 0.6)} fontSize={9} letterSpacing="0">{num} · </tspan>}
        {label.toUpperCase()}
      </text>
    </g>
  );
  if (href) return <a href={href} style={{ textDecoration: "none" }}>{inner}</a>;
  return inner;
}

function StepBox({ x, y, num, label, color, href }) {
  const inner = (
    <g>
      <rect x={x-SB.w/2} y={y-SB.h/2} width={SB.w} height={SB.h} rx={SB.r}
        fill={hexToRgba(color, 0.05)}
        stroke={hexToRgba(color, 0.15)}
        strokeWidth={DIAGRAM_STROKE.fine} />
      <text x={x} y={y+1} textAnchor="middle" dominantBaseline="central"
        fill={DIAGRAM.textStrong} fontSize={10.5} fontWeight={300} fontFamily={FF}
        textDecoration="none">
        {num && <tspan fill={hexToRgba(color, 0.5)} fontSize={9}>{num} · </tspan>}
        {label}
      </text>
    </g>
  );
  if (href) return <a href={href} style={{ textDecoration: "none" }}>{inner}</a>;
  return inner;
}

function CascadeText({ x, y, num, label, color }) {
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central"
      fill={hexToRgba(color, 0.65)} fontSize={10} fontWeight={300} fontFamily={FF}>
      {num && <tspan fill={hexToRgba(color, 0.4)} fontSize={8.5}>{num} · </tspan>}
      {label}
    </text>
  );
}
