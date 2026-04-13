'use client';

import { useState, useCallback } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, RADIUS, PATTERN,
  hexToRgba, gradientCardBg, diagramContainer,
} from '@/src/styles/tokens';
import { MODES } from '@/src/data/m2-data';
import { EMOTIONS } from '@/src/data/m1-data';

// ─── Constants ──────────────────────────────────────────
const MODEL_COLOR = PATTERN.B.primary;

// Curated selection — mix of somatic and relational, high-contrast transformations
const FEATURED_KEYS = ['fear', 'anger', 'joy', 'shame', 'love', 'sadness', 'disgust', 'trust'];
const MODE_KEYS = ['connection', 'protection', 'control', 'domination'];

// ─── Component ──────────────────────────────────────────

export default function M2SignalState() {
  const [activeKey, setActiveKey] = useState('fear');

  const emotion = EMOTIONS.find(e => e.key === activeKey) || EMOTIONS[0];
  const compassData = emotion.fluidCompass;

  return (
    <section style={{
      marginBottom: 32,
      ...diagramContainer(),
    }}>
      <style>{`
        .m2-ss-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 16px;
        }
        .m2-ss-emotion-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }
        .m2-ss-pill {
          padding: 6px 12px;
          border-radius: 20px;
          border: 1.5px solid ${BORDER.default};
          background: transparent;
          cursor: pointer;
          font-family: inherit;
          font-size: 13px;
          font-weight: 500;
          color: ${TEXT.muted};
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .m2-ss-pill:hover {
          border-color: ${hexToRgba(MODEL_COLOR, 0.4)};
        }
        .m2-ss-pill.active {
          border-color: ${MODEL_COLOR};
          background: ${hexToRgba(MODEL_COLOR, 0.12)};
          color: ${MODEL_COLOR};
          font-weight: 600;
        }
        .m2-ss-toggle {
          display: flex;
          border-radius: 20px;
          border: 1.5px solid ${BORDER.default};
          overflow: hidden;
        }
        .m2-ss-toggle button {
          padding: 5px 14px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-family: ${FONT.mono};
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${TEXT.hint};
          transition: background 0.2s ease, color 0.2s ease;
        }
        .m2-ss-toggle button.active {
          background: ${hexToRgba(MODEL_COLOR, 0.12)};
          color: ${MODEL_COLOR};
        }
        .m2-ss-card {
          padding: 14px;
          border-radius: ${RADIUS.md}px;
          border: 1.5px solid ${BORDER.default};
          transition: border-color 0.3s ease;
          animation: m2SsFadeIn 0.3s ease;
        }
        @keyframes m2SsFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .m2-ss-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .m2-ss-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ─── Header row ──────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: MODEL_COLOR,
        }}>
          {emotion.name}
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8,
          letterSpacing: '0.06em',
          color: TEXT.hint,
        }}>
          {"\u201C"}{emotion.signal}{"\u201D"} — same signal, four states
        </span>
      </div>

      {/* ─── Four state cards ────────────── */}
      <div className="m2-ss-grid">
        {MODE_KEYS.map((mk, i) => {
          const mode = MODES[i];
          const text = compassData?.[mk];
          if (!text) return (
            <div key={mk} className="m2-ss-card" style={{
              borderColor: hexToRgba(mode.hex, 0.15),
              opacity: 0.4,
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: mode.hex, marginBottom: 6,
              }}>
                {mode.conditionShort}
              </div>
              <p style={{
                fontSize: 12.5, lineHeight: 1.6,
                color: TEXT.hint, margin: 0,
                fontStyle: 'italic',
              }}>
                —
              </p>
            </div>
          );

          return (
            <div key={mk} className="m2-ss-card" style={{
              borderColor: hexToRgba(mode.hex, 0.25),
              borderTop: `2px solid ${mode.hex}`,
              background: gradientCardBg(mode.hex, 0.04),
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: mode.hex, marginBottom: 6,
              }}>
                {mode.conditionShort}
              </div>
              <p style={{
                fontSize: 12.5, lineHeight: 1.65,
                color: TEXT.secondary, margin: 0,
              }}>
                {text}
              </p>
            </div>
          );
        })}
      </div>

      {/* ─── Emotion selector ────────────── */}
      <div className="m2-ss-emotion-row">
        {FEATURED_KEYS.map(ek => {
          const em = EMOTIONS.find(e => e.key === ek);
          if (!em) return null;
          return (
            <button
              key={ek}
              className={`m2-ss-pill${activeKey === ek ? ' active' : ''}`}
              onClick={() => setActiveKey(ek)}
            >
              {em.name}
            </button>
          );
        })}
        {/* Rest of emotions as smaller pills */}
        {EMOTIONS.filter(e => !FEATURED_KEYS.includes(e.key)).map(em => (
          <button
            key={em.key}
            className={`m2-ss-pill${activeKey === em.key ? ' active' : ''}`}
            onClick={() => setActiveKey(em.key)}
            style={{ fontSize: 11, padding: '4px 10px' }}
          >
            {em.name}
          </button>
        ))}
      </div>

      {/* ─── Insight ─────────────────────── */}
      <div style={{
        marginTop: 14,
        padding: '10px 14px',
        borderRadius: RADIUS.md,
        background: hexToRgba(MODEL_COLOR, 0.03),
        border: `1px solid ${hexToRgba(MODEL_COLOR, 0.1)}`,
      }}>
        <p style={{
          fontSize: 13, lineHeight: 1.6,
          color: TEXT.muted, margin: 0,
          fontStyle: 'italic',
        }}>
          The signal is the same. The state changes what it becomes. What a person experiences as {"\u201C"}their anger{"\u201D"} or {"\u201C"}their fear{"\u201D"} is always signal + state.
        </p>
      </div>
    </section>
  );
}
