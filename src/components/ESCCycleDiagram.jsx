'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FONT, TEXT, RADIUS, SPECTRUM,
  hexToRgba,
} from '@/src/styles/tokens';

// ─── LAYOUT ─────────────────────────────────────────────

const W = 700;
const H = 820;
const CX = W / 2;          // center x for shared stages
const PATH_A_X = CX - 130; // Path A column
const PATH_B_X = CX + 130; // Path B column

// ─── STAGE POSITIONS & DATA ─────────────────────────────

const STAGES = [
  {
    id: 'baseline',
    label: 'Physiological Baseline',
    x: CX, y: 30,
    zone: 'shared', model: null,
    description: 'The nervous system at rest. Cortisol at resting level. Muscles at resting tension. Heart rate at resting pace. The HPA axis standing down. Not numb, not inactive \u2014 ready. The body\u2019s resources available, not deployed.',
  },
  {
    id: 'evaluation',
    label: 'Safety-Threat Evaluation',
    x: CX, y: 110,
    zone: 'shared', model: { id: 'M1', href: '/model/m1-emotions-as-signals' },
    description: 'The sensory periphery detects, the nervous system evaluates for safety or threat. Five channels feed in simultaneously \u2014 eyes, ears, nose, gut, skin \u2014 below conscious awareness. The amygdala fires in 12 milliseconds. A full evaluation is complete before the CLS has assembled a single thought.',
  },
  {
    id: 'signal',
    label: 'Signal Generation',
    x: CX, y: 190,
    zone: 'shared', model: { id: 'M1', href: '/model/m1-emotions-as-signals' },
    description: 'The nervous system generates a physiological response pattern \u2014 hormonal, neurochemical, muscular \u2014 encoding a finding about what was detected. Each pattern is distinct. This is what the nervous system produces as an emotion \u2014 a physiological finding.',
  },
  {
    id: 'activation',
    label: 'State Activation',
    x: CX, y: 270,
    zone: 'shared', model: { id: 'M2', href: '/model/m2-nervous-system-states' },
    description: 'The nervous system reorganises into a different physiological configuration. Perception narrows or widens. Cognitive flexibility increases or decreases. Muscle tension redistributes. The current position on the gradient determines what the person can perceive, think, feel, and learn.',
  },
  {
    id: 'branching',
    label: 'Can the CLS feel the ESS?',
    x: CX, y: 370,
    zone: 'branching', model: { id: 'M4', href: '/model/m4-awareness-capacities' },
    description: 'Everything above happened in milliseconds. Whether the CLS can receive the physiological signals the ESS has generated determines everything that follows. When the CLS receives the signal, the body can complete its restoration sequence. When it cannot \u2014 the CLS overrides.',
  },
  // Path A
  {
    id: 'mobilisation',
    label: 'Mobilisation Response',
    x: PATH_A_X, y: 470,
    zone: 'pathA', model: { id: 'M3', href: '/model/m3-regulation-capacities' },
    description: 'The mobilised physiological resources are expended \u2014 through movement, action, expression, or holding. Stress hormones released to fuel action are used. Muscle tension organised for response is discharged.',
  },
  {
    id: 'restoration',
    label: 'Biological Restoration',
    x: PATH_A_X, y: 550,
    zone: 'pathA', model: { id: 'M3', href: '/model/m3-regulation-capacities' },
    description: 'Stress hormones metabolise. Muscles release. The HPA axis stands down. Inflammatory compounds clear. The nervous system returns toward physiological baseline. This is the body\u2019s designed completion process, operating at zero cost.',
  },
  {
    id: 'return',
    label: 'Return to Baseline',
    x: PATH_A_X, y: 630,
    zone: 'pathA', model: null,
    description: 'The activation resolves. The signal\u2019s information has landed \u2014 the person knows what fired, why it fired, and what it needed. The cycle does not need to repeat. The nervous system returns to physiological baseline, ready for the next signal.',
  },
  // Path B
  {
    id: 'override',
    label: 'Cognitive Override',
    x: PATH_B_X, y: 470,
    zone: 'pathB', model: { id: 'M3', href: '/model/m3-regulation-capacities' },
    description: 'The CLS overrides the ESS\u2019s physiological signals. It manages, plans, pushes through, constructs a narrative that replaces the signal. The activation does not disappear \u2014 cortisol still circulating, muscles still braced. The person no longer registers it as information.',
  },
  {
    id: 'incomplete',
    label: 'Incomplete Restoration',
    x: PATH_B_X, y: 535,
    zone: 'pathB', model: null,
    description: 'The restoration sequence runs partially or not at all. Hormone metabolism stalls. Muscle release does not occur. Neural recovery is interrupted. The body carries forward physiological activation that was mobilised but not completed.',
  },
  {
    id: 'debris',
    label: 'Debris Accumulation',
    x: PATH_B_X, y: 600,
    zone: 'pathB', model: null,
    description: 'Across repeated incomplete cycles, the physical residue accumulates \u2014 cortisol, muscle tension, sensitised neural circuits, inflammatory compounds. The measurable physiological residue of activation sequences that were mobilised but never completed.',
  },
  {
    id: 'elevation',
    label: 'Baseline Elevation',
    x: PATH_B_X, y: 665,
    zone: 'pathB', model: null,
    description: 'The nervous system adapts its resting activation level upward. The floor rises. States that require lower activation \u2014 parasympathetic-dominant states of safety and openness \u2014 become physiologically inaccessible.',
  },
  {
    id: 'substitutes',
    label: 'Restoration Substitutes',
    x: PATH_B_X, y: 730,
    zone: 'pathB', model: { id: 'M3', href: '/model/m3-regulation-capacities' },
    description: 'The nervous system searches for anything that produces the neurochemical shift that biological restoration would have provided. Each produces measurable short-term relief. Neither runs the restoration sequence. The activation rebounds.',
  },
  {
    id: 'elevated',
    label: 'Elevated Baseline',
    x: PATH_B_X, y: 795,
    zone: 'pathB', model: null,
    description: 'The cycle repeats from a higher floor. Each incomplete cycle raises the baseline. The next activation starts from a system already carrying unresolved load.',
  },
];

const STAGE_MAP = Object.fromEntries(STAGES.map(s => [s.id, s]));

// ─── FLOW CONNECTIONS ───────────────────────────────────

const SHARED_EDGES = [
  ['baseline', 'evaluation'],
  ['evaluation', 'signal'],
  ['signal', 'activation'],
  ['activation', 'branching'],
];

const PATH_A_EDGES = [
  ['mobilisation', 'restoration'],
  ['restoration', 'return'],
];

const PATH_B_EDGES = [
  ['override', 'incomplete'],
  ['incomplete', 'debris'],
  ['debris', 'elevation'],
  ['elevation', 'substitutes'],
  ['substitutes', 'elevated'],
];

// ─── COLORS ─────────────────────────────────────────────

const COLORS = {
  shared: SPECTRUM.cobalt,
  branching: SPECTRUM.cobalt,
  pathA: '#10b981',
  pathB: '#ef4444',
};

function zoneColor(zone) {
  return COLORS[zone] || COLORS.shared;
}

// ─── NODE DIMENSIONS ────────────────────────────────────

const NODE_W = 180;
const NODE_H = 32;
const DIAMOND_SIZE = 50;

// ─── COMPONENT ──────────────────────────────────────────

export default function ESCCycleDiagram() {
  const [selected, setSelected] = useState('baseline');
  const stage = STAGE_MAP[selected];
  const color = zoneColor(stage.zone);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* SVG Diagram */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}
          role="img"
          aria-label="The Emotional Somatic Cycle — interactive diagram showing the stages from physiological baseline through signal generation, state activation, the branching point, and the two paths"
        >
          {/* ─── FLOW LINES ────────────────────────── */}

          {/* Shared flow */}
          {SHARED_EDGES.map(([from, to]) => {
            const a = STAGE_MAP[from], b = STAGE_MAP[to];
            return (
              <line key={`${from}-${to}`}
                x1={a.x} y1={a.y + NODE_H / 2 + 4}
                x2={b.x} y2={b.y - NODE_H / 2 - 4}
                stroke={hexToRgba(COLORS.shared, 0.25)}
                strokeWidth={2}
              />
            );
          })}

          {/* Fork lines from branching */}
          <line
            x1={CX} y1={STAGE_MAP.branching.y + DIAMOND_SIZE / 2}
            x2={PATH_A_X} y2={STAGE_MAP.mobilisation.y - NODE_H / 2 - 4}
            stroke={hexToRgba(COLORS.pathA, 0.3)}
            strokeWidth={2}
          />
          <line
            x1={CX} y1={STAGE_MAP.branching.y + DIAMOND_SIZE / 2}
            x2={PATH_B_X} y2={STAGE_MAP.override.y - NODE_H / 2 - 4}
            stroke={hexToRgba(COLORS.pathB, 0.3)}
            strokeWidth={2}
          />

          {/* Path A flow */}
          {PATH_A_EDGES.map(([from, to]) => {
            const a = STAGE_MAP[from], b = STAGE_MAP[to];
            return (
              <line key={`${from}-${to}`}
                x1={a.x} y1={a.y + NODE_H / 2 + 4}
                x2={b.x} y2={b.y - NODE_H / 2 - 4}
                stroke={hexToRgba(COLORS.pathA, 0.3)}
                strokeWidth={2}
              />
            );
          })}

          {/* Path A return arrow back to baseline */}
          <path
            d={`M ${PATH_A_X} ${STAGE_MAP.return.y + NODE_H / 2 + 4}
                C ${PATH_A_X - 80} ${STAGE_MAP.return.y + 60},
                  ${CX - 180} ${STAGE_MAP.baseline.y},
                  ${CX - NODE_W / 2 - 6} ${STAGE_MAP.baseline.y}`}
            stroke={hexToRgba(COLORS.pathA, 0.2)}
            strokeWidth={1.5}
            strokeDasharray="4 3"
            fill="none"
          />
          {/* Arrow head */}
          <polygon
            points={`${CX - NODE_W / 2 - 6},${STAGE_MAP.baseline.y} ${CX - NODE_W / 2 - 14},${STAGE_MAP.baseline.y - 4} ${CX - NODE_W / 2 - 14},${STAGE_MAP.baseline.y + 4}`}
            fill={hexToRgba(COLORS.pathA, 0.3)}
          />

          {/* Path B flow */}
          {PATH_B_EDGES.map(([from, to]) => {
            const a = STAGE_MAP[from], b = STAGE_MAP[to];
            return (
              <line key={`${from}-${to}`}
                x1={a.x} y1={a.y + NODE_H / 2 + 4}
                x2={b.x} y2={b.y - NODE_H / 2 - 4}
                stroke={hexToRgba(COLORS.pathB, 0.25)}
                strokeWidth={2}
              />
            );
          })}

          {/* Path B loop arrow */}
          <path
            d={`M ${PATH_B_X + NODE_W / 2 + 6} ${STAGE_MAP.elevated.y}
                C ${PATH_B_X + 140} ${STAGE_MAP.elevated.y},
                  ${PATH_B_X + 140} ${STAGE_MAP.override.y - 40},
                  ${PATH_B_X + NODE_W / 2 + 6} ${STAGE_MAP.override.y - 10}`}
            stroke={hexToRgba(COLORS.pathB, 0.2)}
            strokeWidth={1.5}
            strokeDasharray="4 3"
            fill="none"
          />
          <polygon
            points={`${PATH_B_X + NODE_W / 2 + 6},${STAGE_MAP.override.y - 10} ${PATH_B_X + NODE_W / 2 + 14},${STAGE_MAP.override.y - 14} ${PATH_B_X + NODE_W / 2 + 14},${STAGE_MAP.override.y - 6}`}
            fill={hexToRgba(COLORS.pathB, 0.3)}
          />

          {/* ─── PATH LABELS ───────────────────────── */}
          <text
            x={PATH_A_X} y={STAGE_MAP.mobilisation.y - NODE_H / 2 - 14}
            textAnchor="middle"
            style={{ fontSize: 11, fontFamily: FONT.mono, fontWeight: 700, fill: COLORS.pathA, letterSpacing: '0.08em' }}
          >
            PATH A
          </text>
          <text
            x={PATH_A_X} y={STAGE_MAP.mobilisation.y - NODE_H / 2 - 3}
            textAnchor="middle"
            style={{ fontSize: 8, fontFamily: FONT.mono, fontWeight: 500, fill: hexToRgba(COLORS.pathA, 0.5), letterSpacing: '0.04em' }}
          >
            CLS receives signal
          </text>

          <text
            x={PATH_B_X} y={STAGE_MAP.override.y - NODE_H / 2 - 14}
            textAnchor="middle"
            style={{ fontSize: 11, fontFamily: FONT.mono, fontWeight: 700, fill: COLORS.pathB, letterSpacing: '0.08em' }}
          >
            PATH B
          </text>
          <text
            x={PATH_B_X} y={STAGE_MAP.override.y - NODE_H / 2 - 3}
            textAnchor="middle"
            style={{ fontSize: 8, fontFamily: FONT.mono, fontWeight: 500, fill: hexToRgba(COLORS.pathB, 0.5), letterSpacing: '0.04em' }}
          >
            CLS overrides signal
          </text>

          {/* ─── NODES ─────────────────────────────── */}
          {STAGES.map((s) => {
            const isSelected = selected === s.id;
            const c = zoneColor(s.zone);

            if (s.id === 'branching') {
              return <DiamondNode key={s.id} stage={s} isSelected={isSelected} color={c} onSelect={setSelected} />;
            }

            return <RectNode key={s.id} stage={s} isSelected={isSelected} color={c} onSelect={setSelected} />;
          })}

          {/* "cycle repeats" label */}
          <text
            x={PATH_B_X + NODE_W / 2 + 50} y={(STAGE_MAP.elevated.y + STAGE_MAP.override.y) / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            transform={`rotate(90, ${PATH_B_X + NODE_W / 2 + 50}, ${(STAGE_MAP.elevated.y + STAGE_MAP.override.y) / 2})`}
            style={{ fontSize: 8, fontFamily: FONT.mono, fontWeight: 500, fill: hexToRgba(COLORS.pathB, 0.35), letterSpacing: '0.06em' }}
          >
            CYCLE REPEATS FROM HIGHER FLOOR
          </text>
        </svg>
      </div>

      {/* ─── DETAIL PANEL ────────────────────────── */}
      <div
        style={{
          padding: '16px 20px',
          background: hexToRgba(color, 0.05),
          borderRadius: RADIUS.md,
          border: `1px solid ${hexToRgba(color, 0.15)}`,
          borderLeft: `3px solid ${hexToRgba(color, 0.4)}`,
          minHeight: 80,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color }}>
            {stage.label}
          </span>
          {stage.model && (
            <Link
              href={stage.model.href}
              style={{
                fontSize: 10,
                fontWeight: 600,
                fontFamily: FONT.mono,
                padding: '2px 8px',
                borderRadius: 100,
                background: hexToRgba(color, 0.12),
                color,
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {stage.model.id}
            </Link>
          )}
        </div>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
          {stage.description}
        </p>
      </div>
    </div>
  );
}

// ─── SVG NODE COMPONENTS ────────────────────────────────

function RectNode({ stage, isSelected, color, onSelect }) {
  const x = stage.x - NODE_W / 2;
  const y = stage.y - NODE_H / 2;

  return (
    <g
      onClick={() => onSelect(stage.id)}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      aria-label={stage.label}
    >
      <rect
        x={x} y={y}
        width={NODE_W} height={NODE_H}
        rx={6} ry={6}
        fill={isSelected ? hexToRgba(color, 0.15) : hexToRgba(color, 0.06)}
        stroke={isSelected ? hexToRgba(color, 0.5) : hexToRgba(color, 0.15)}
        strokeWidth={isSelected ? 1.5 : 1}
      />
      <text
        x={stage.model ? stage.x - 10 : stage.x}
        y={stage.y + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontSize: 11,
          fontWeight: isSelected ? 600 : 500,
          fill: isSelected ? color : TEXT.secondary,
          fontFamily: FONT.display,
          pointerEvents: 'none',
        }}
      >
        {stage.label}
      </text>
      {stage.model && (
        <text
          x={stage.x + NODE_W / 2 - 18}
          y={stage.y + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: 8,
            fontWeight: 600,
            fontFamily: FONT.mono,
            fill: hexToRgba(color, 0.5),
            pointerEvents: 'none',
          }}
        >
          {stage.model.id}
        </text>
      )}
    </g>
  );
}

function DiamondNode({ stage, isSelected, color, onSelect }) {
  const { x, y } = stage;
  const s = DIAMOND_SIZE / 2;

  return (
    <g
      onClick={() => onSelect(stage.id)}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      aria-label={stage.label}
    >
      <polygon
        points={`${x},${y - s} ${x + s + 20},${y} ${x},${y + s} ${x - s - 20},${y}`}
        fill={isSelected ? hexToRgba(color, 0.15) : hexToRgba(color, 0.06)}
        stroke={isSelected ? hexToRgba(color, 0.5) : hexToRgba(color, 0.2)}
        strokeWidth={isSelected ? 1.5 : 1}
      />
      <text
        x={x} y={y - 4}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontStyle: 'italic',
          fill: isSelected ? color : TEXT.secondary,
          fontFamily: FONT.display,
          pointerEvents: 'none',
        }}
      >
        Can the CLS
      </text>
      <text
        x={x} y={y + 9}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontStyle: 'italic',
          fill: isSelected ? color : TEXT.secondary,
          fontFamily: FONT.display,
          pointerEvents: 'none',
        }}
      >
        feel the ESS?
      </text>
      {stage.model && (
        <text
          x={x + s + 14}
          y={y - s + 6}
          textAnchor="middle"
          style={{
            fontSize: 8,
            fontWeight: 600,
            fontFamily: FONT.mono,
            fill: hexToRgba(color, 0.5),
            pointerEvents: 'none',
          }}
        >
          {stage.model.id}
        </text>
      )}
    </g>
  );
}
