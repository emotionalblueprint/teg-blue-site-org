'use client';

import { useState } from 'react';
import { TEXT, BORDER, FONT, SPECTRUM, MODEL_COLORS, hexToRgba } from '../styles/tokens';

const MODEL_COLOR = MODEL_COLORS.M1;
const SOMATIC_COLOR = SPECTRUM.cobalt;
const RELATIONAL_COLOR = SPECTRUM.indigo;
const MISMATCH_COLOR = '#ef4444';

const VIEWS = {
  somatic: {
    label: 'Somatic',
    color: SOMATIC_COLOR,
    signalContent: 'Body state',
    signalExample: 'Threat, boundary, demand-resource mismatch',
    pathway: 'Somatic Restoration',
    pathwayDetail: 'Breathing, movement, time, stillness, crying, sleep',
    mechanism: 'Body runs the sequence — stress hormones metabolise, muscles release, HPA axis stands down',
    outcome: 'Activation resolves',
    outcomeDetail: 'Nervous system returns toward physiological baseline',
  },
  relational: {
    label: 'Relational',
    color: RELATIONAL_COLOR,
    signalContent: 'Belonging state',
    signalExample: 'Bond, connection, inclusion, recognition',
    pathway: 'Relational Restoration',
    pathwayDetail: 'Another person stays, provides relational evidence',
    mechanism: 'Co-regulation — the presence of another who provides what the signal content requires',
    outcome: 'Activation resolves',
    outcomeDetail: 'Nervous system returns toward physiological baseline',
  },
  mismatch: {
    label: 'Mismatch',
    color: MISMATCH_COLOR,
    signalContent: 'Belonging state',
    signalExample: 'e.g. Shame — belonging at risk',
    pathway: 'Somatic techniques applied',
    pathwayDetail: 'Breathing, exercise, grounding — discharge occurs',
    mechanism: 'Discharge happens but does not match signal content — the body has moved but the question remains unanswered',
    outcome: 'Activation remains',
    outcomeDetail: 'The signal is still active. The body carries it forward.',
  },
};

function Arrow({ color }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '6px 0',
    }}>
      <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
        <path d="M6 0 L6 14 M2 10 L6 16 L10 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function StepCard({ label, detail, color, filled }) {
  return (
    <div style={{
      padding: '12px 16px',
      borderRadius: 8,
      border: `1px solid ${hexToRgba(color, filled ? 0.4 : 0.2)}`,
      background: hexToRgba(color, filled ? 0.1 : 0.04),
    }}>
      <div style={{
        fontFamily: FONT.display,
        fontSize: 13,
        fontWeight: 600,
        color: color,
        marginBottom: detail ? 4 : 0,
      }}>
        {label}
      </div>
      {detail && (
        <div style={{
          fontFamily: FONT.mono,
          fontSize: 10,
          lineHeight: 1.5,
          color: TEXT.muted,
        }}>
          {detail}
        </div>
      )}
    </div>
  );
}

export default function M1RestorationPathways() {
  const [activeView, setActiveView] = useState('somatic');
  const view = VIEWS[activeView];
  const isMismatch = activeView === 'mismatch';

  return (
    <div style={{
      background: hexToRgba(MODEL_COLOR, 0.04),
      border: `1px solid ${hexToRgba(MODEL_COLOR, 0.15)}`,
      borderRadius: 10,
      padding: '24px 28px 20px',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <div style={{
          fontFamily: FONT.mono,
          fontSize: 10,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: TEXT.hint,
        }}>
          Restoration Pathways
        </div>

        {/* View toggle */}
        <div style={{ display: 'flex', gap: 6 }}>
          {Object.entries(VIEWS).map(([key, v]) => (
            <button
              key={key}
              onClick={() => setActiveView(key)}
              style={{
                fontFamily: FONT.mono,
                fontSize: 10,
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: 5,
                border: `1px solid ${activeView === key ? v.color : BORDER.default}`,
                background: activeView === key ? hexToRgba(v.color, 0.12) : 'transparent',
                color: activeView === key ? v.color : TEXT.muted,
                cursor: 'pointer',
                transition: 'all 150ms ease',
                letterSpacing: '0.02em',
              }}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Flow diagram */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 420,
        margin: '0 auto',
      }}>
        {/* Step 1: Signal fires */}
        <StepCard
          label="Signal fires"
          detail={view.signalExample}
          color={view.color}
          filled
        />

        <Arrow color={hexToRgba(view.color, 0.4)} />

        {/* Step 2: Signal content determines pathway */}
        <StepCard
          label={`Signal content: ${view.signalContent}`}
          color={view.color}
        />

        <Arrow color={hexToRgba(view.color, 0.4)} />

        {/* Step 3: Pathway */}
        <StepCard
          label={view.pathway}
          detail={view.pathwayDetail}
          color={view.color}
          filled
        />

        <Arrow color={hexToRgba(view.color, 0.4)} />

        {/* Step 4: Mechanism */}
        <div style={{
          padding: '10px 16px',
          borderLeft: `2px solid ${hexToRgba(view.color, 0.3)}`,
          marginLeft: 20,
        }}>
          <div style={{
            fontFamily: FONT.mono,
            fontSize: 10,
            lineHeight: 1.6,
            color: TEXT.secondary,
          }}>
            {view.mechanism}
          </div>
        </div>

        <Arrow color={hexToRgba(view.color, 0.4)} />

        {/* Step 5: Outcome */}
        <div style={{
          padding: '14px 16px',
          borderRadius: 8,
          border: `1.5px solid ${view.color}`,
          background: hexToRgba(view.color, isMismatch ? 0.06 : 0.12),
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: FONT.display,
            fontSize: 14,
            fontWeight: 700,
            color: view.color,
            marginBottom: 2,
          }}>
            {view.outcome}
          </div>
          <div style={{
            fontFamily: FONT.mono,
            fontSize: 9,
            color: isMismatch ? view.color : TEXT.muted,
            fontWeight: isMismatch ? 600 : 400,
          }}>
            {view.outcomeDetail}
          </div>
        </div>
      </div>
    </div>
  );
}
