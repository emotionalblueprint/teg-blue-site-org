import { DIAGRAM, DIAGRAM_STROKE, FONT, hexToRgba } from "@/src/styles/tokens";

/* ═══════════════════════════════════════════════════════
   ESCFlowDiagram — static overview of the full ESC
   showing all stages and both pathways at once.

   Numbered stages, path boxes, L-shaped fork, parallel
   somatic/relational sub-branches. Stage names link to
   section anchors.
   ═══════════════════════════════════════════════════════ */

/* ─── Layout ─────────────────────────────────────────── */
const W  = 900;
const CX = 450;
const AX = 240;
const BX = 660;
const FF = FONT.diagram;

/* Box dimensions */
const SB = { w: 260, h: 30, r: 5 };
const EB = { w: 230, h: 34, r: 6 };
const BB = { w: 400, h: 30, r: 5 };
const PB = { w: 260, h: 56, r: 6 };

/* Y coordinates — linear section */
const EYE = 16;
const L = [50, 104, 158, 212];
const BRY = 268;
const FKY = 298;
const PLY = 340;

/* Y coordinates — Path A */
const A0 = 392;
const A1 = 442;
const A_FKY = 468;
const A_SUB = 492;
const A_BASE = 540;

/* Path A sub-columns */
const AL = AX - 60;
const AR = AX + 60;

/* Y coordinates — Path B */
const B0 = 392;
const B1 = 442;
const B_FKY = 468;
const B_R1 = 494;
const B_R2 = 518;
const B_R3 = 542;
const B_MERGE = 566;
const B4 = 594;
const B5 = 642;
const B6 = 694;

/* Path B sub-columns */
const BL = BX - 80;
const BR = BX + 80;

const H = 736;

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
        aria-label="The Emotional Somatic Cycle — full pathway overview showing all numbered stages, the branching point, and both Path A and Path B with somatic and relational sub-branches"
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
        <line x1={AX} y1={FKY} x2={BX} y2={FKY} stroke={ln} strokeWidth={sw} />
        <VLine x={AX} y1={FKY} y2={PLY-PB.h/2} c={ln} w={sw} />
        <VLine x={BX} y1={FKY} y2={PLY-PB.h/2} c={hexToRgba(brk,0.4)} w={sw} />

        {/* Yes / No labels */}
        <text x={AX + (CX-AX)/2} y={FKY - 7}
          textAnchor="middle" dominantBaseline="central"
          fill={hexToRgba(p, 0.45)} fontSize={8} fontWeight={300}
          fontFamily={FF} fontStyle="italic">Yes</text>
        <text x={CX + (BX-CX)/2} y={FKY - 7}
          textAnchor="middle" dominantBaseline="central"
          fill={hexToRgba(brk, 0.45)} fontSize={8} fontWeight={300}
          fontFamily={FF} fontStyle="italic">No</text>

        {/* ─── Path A lines ─── */}
        <VLine x={AX} y1={PLY+PB.h/2}  y2={A0-SB.h/2}   c={ln} w={sw} />
        <VLine x={AX} y1={A0+SB.h/2}   y2={A1-SB.h/2}   c={ln} w={sw} />
        {/* Sub-fork from step 6 */}
        <VLine x={AX} y1={A1+SB.h/2} y2={A_FKY} c={ln} w={sw} />
        <line x1={AL} y1={A_FKY} x2={AR} y2={A_FKY} stroke={ln} strokeWidth={sw} />
        <VLine x={AL} y1={A_FKY} y2={A_SUB-8} c={ln} w={sw} />
        <VLine x={AR} y1={A_FKY} y2={A_SUB-8} c={ln} w={sw} />
        {/* Merge back */}
        <VLine x={AL} y1={A_SUB+8} y2={A_SUB+22} c={ln} w={sw} />
        <VLine x={AR} y1={A_SUB+8} y2={A_SUB+22} c={ln} w={sw} />
        <line x1={AL} y1={A_SUB+22} x2={AR} y2={A_SUB+22} stroke={ln} strokeWidth={sw} />
        <VLine x={AX} y1={A_SUB+22} y2={A_BASE-EB.h/2-10} c={ln} w={sw} />
        <Arrow x={AX} y={A_BASE-EB.h/2} color={p} />

        {/* ─── Path B lines ─── */}
        <VLine x={BX} y1={PLY+PB.h/2}  y2={B0-SB.h/2}   c={hexToRgba(brk,0.4)} w={sw} />
        <VLine x={BX} y1={B0+SB.h/2}   y2={B1-SB.h/2}   c={hexToRgba(brk,0.4)} w={sw} />
        {/* Sub-fork from step 8 */}
        <VLine x={BX} y1={B1+SB.h/2} y2={B_FKY} c={hexToRgba(brk,0.4)} w={sw} />
        <line x1={BL} y1={B_FKY} x2={BR} y2={B_FKY} stroke={hexToRgba(brk,0.3)} strokeWidth={sw} />
        <VLine x={BL} y1={B_FKY} y2={B_R1-8} c={hexToRgba(brk,0.25)} w={sw} />
        <VLine x={BR} y1={B_FKY} y2={B_R1-8} c={hexToRgba(brk,0.25)} w={sw} />
        {/* Parallel cascade lines */}
        <VLine x={BL} y1={B_R1+8} y2={B_R2-8} c={hexToRgba(brk,0.25)} w={sw} />
        <VLine x={BR} y1={B_R1+8} y2={B_R2-8} c={hexToRgba(brk,0.25)} w={sw} />
        <VLine x={BL} y1={B_R2+8} y2={B_R3-8} c={hexToRgba(brk,0.25)} w={sw} />
        <VLine x={BR} y1={B_R2+8} y2={B_R3-8} c={hexToRgba(brk,0.25)} w={sw} />
        {/* Merge back */}
        <VLine x={BL} y1={B_R3+8} y2={B_MERGE} c={hexToRgba(brk,0.25)} w={sw} />
        <VLine x={BR} y1={B_R3+8} y2={B_MERGE} c={hexToRgba(brk,0.25)} w={sw} />
        <line x1={BL} y1={B_MERGE} x2={BR} y2={B_MERGE} stroke={hexToRgba(brk,0.25)} strokeWidth={sw} />
        {/* Continue to bottom steps */}
        <VLine x={BX} y1={B_MERGE} y2={B4-SB.h/2} c={hexToRgba(brk,0.4)} w={sw} />
        <VLine x={BX} y1={B4+SB.h/2} y2={B5-SB.h/2} c={hexToRgba(brk,0.4)} w={sw} />
        <VLine x={BX} y1={B5+SB.h/2} y2={B6-EB.h/2-10} c={hexToRgba(brk,0.4)} w={sw} />
        <Arrow x={BX} y={B6-EB.h/2} color={brk} />

        {/* ═══ SHAPES ═══ */}

        {/* Linear section */}
        <EmphBox x={CX} y={L[0]} label="Physiological Baseline" color={p} href="#baseline" />
        <StepBox x={CX} y={L[1]} num="1" label="Safety-Threat Evaluation" color={p} href="#safety-threat" />
        <StepBox x={CX} y={L[2]} num="2" label="Emotional Signal Generation" color={p} href="#signal-generation" />
        <StepBox x={CX} y={L[3]} num="3" label="Nervous System State Activation" color={p} href="#state-activation" />

        {/* Branch question */}
        <a href="#branching-point" style={{ textDecoration: "none" }}>
          <rect x={CX-BB.w/2} y={BRY-BB.h/2} width={BB.w} height={BB.h} rx={BB.r}
            fill={hexToRgba(p, 0.04)} stroke={DIAGRAM.divider} strokeWidth={sw} />
          <text x={CX} y={BRY+1} textAnchor="middle" dominantBaseline="central"
            fill={DIAGRAM.textStrong} fontSize={10.5} fontWeight={300} fontFamily={FF}
            textDecoration="none">
            <tspan fill={hexToRgba(DIAGRAM.textMuted, 0.6)} fontSize={9}>4 · </tspan>
            Interoceptive Access (Can the CLS access the ESS?)
          </text>
        </a>

        {/* Path A box */}
        <a href="#path-a" style={{ textDecoration: "none" }}>
          <rect x={AX-PB.w/2} y={PLY-PB.h/2} width={PB.w} height={PB.h} rx={PB.r}
            fill={hexToRgba(p, 0.08)}
            stroke={hexToRgba(p, 0.3)}
            strokeWidth={DIAGRAM_STROKE.fine} />
          <text x={AX} y={PLY-14} textAnchor="middle" dominantBaseline="central"
            fill={p} fontSize={11} fontWeight={600} fontFamily={FF}
            letterSpacing="0.12em" textDecoration="none">
            PATH A
          </text>
          <text x={AX} y={PLY+1} textAnchor="middle" dominantBaseline="central"
            fill={hexToRgba(p, 0.45)} fontSize={7.5} fontWeight={300} fontFamily={FF}
            textDecoration="none">
            (Interoceptive Access)
          </text>
          <text x={AX} y={PLY+14} textAnchor="middle" dominantBaseline="central"
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
          <text x={BX} y={PLY-14} textAnchor="middle" dominantBaseline="central"
            fill={brk} fontSize={11} fontWeight={600} fontFamily={FF}
            letterSpacing="0.12em" textDecoration="none">
            PATH B
          </text>
          <text x={BX} y={PLY+1} textAnchor="middle" dominantBaseline="central"
            fill={hexToRgba(brk, 0.45)} fontSize={7.5} fontWeight={300} fontFamily={FF}
            textDecoration="none">
            (No Interoceptive Access)
          </text>
          <text x={BX} y={PLY+14} textAnchor="middle" dominantBaseline="central"
            fill={hexToRgba(brk, 0.55)} fontSize={8} fontWeight={300} fontFamily={FF}
            textDecoration="none">
            Cognitive Override of Emotional Signal
          </text>
        </a>

        {/* ─── Path A steps ─── */}
        <StepBox x={AX} y={A0} num="5" label="Mobilisation Response" color={p} href="#path-a" />
        <StepBox x={AX} y={A1} num="6" label="Biological Restoration" color={p} href="#path-a" />
        {/* 6.1 / 6.2 sub-branches */}
        <CascadeText x={AL} y={A_SUB} num="6.1" label="Somatic Restoration" color={p} />
        <CascadeText x={AR} y={A_SUB} num="6.2" label="Relational Restoration" color={p} />
        <EmphBox x={AX} y={A_BASE} label="Physiological Baseline" color={p} href="#baseline" />
        <text x={AX} y={A_BASE+EB.h/2+14} textAnchor="middle" dominantBaseline="central"
          fill={hexToRgba(p, 0.4)} fontSize={8.5} fontWeight={300} fontFamily={FF}
          fontStyle="italic">cycle complete</text>

        {/* ─── Path B steps ─── */}
        <StepBox x={BX} y={B0} num="7" label="Cognitive Override" color={brk} href="#path-b" />
        <StepBox x={BX} y={B1} num="8" label="Restoration Substitutes (Regulation)" color={brk} href="#path-b" />
        {/* Parallel somatic / relational sub-branches */}
        <CascadeText x={BL} y={B_R1} num="8.1" label="Somatic Substitutes" color={brk} />
        <CascadeText x={BR} y={B_R1} num="8.2" label="Relational Substitutes" color={brk} />
        <CascadeText x={BL} y={B_R2} label="Temporary Relief" color={brk} />
        <CascadeText x={BR} y={B_R2} label="Counterfeit Relief" color={brk} />
        <CascadeText x={BL} y={B_R3} num="9.1" label="Somatic Debt" color={brk} />
        <CascadeText x={BR} y={B_R3} num="9.2" label="Relational Debt" color={brk} />
        {/* Bottom steps */}
        <StepBox x={BX} y={B4} num="10" label="Unresolved Activation Load" color={brk} href="#path-b" />
        <StepBox x={BX} y={B5} num="11" label="Load Accumulation (Debris)" color={brk} href="#path-b" />
        <EmphBox x={BX} y={B6} num="12" label="Elevated Baseline" color={brk} />
        <text x={BX} y={B6+EB.h/2+14} textAnchor="middle" dominantBaseline="central"
          fill={hexToRgba(brk, 0.4)} fontSize={8.5} fontWeight={300} fontFamily={FF}
          fontStyle="italic">cycle repeats with load still active</text>

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
