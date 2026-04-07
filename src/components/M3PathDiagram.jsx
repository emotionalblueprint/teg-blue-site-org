'use client';

import { useState, useEffect, useRef } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, RADIUS, PATTERN, ACCENT,
  hexToRgba, gradientCardBg, diagramContainer,
} from '@/src/styles/tokens';

// ─── Constants ──────────────────────────────────────────
const MODEL_COLOR = PATTERN.C.primary;
const PATH_A_COLOR = ACCENT.green;
const PATH_B_COLOR = ACCENT.orange;

// Flow stages — sequential reveal
const SHARED = [
  { id: 'activation', label: 'Signal fires', sub: 'The body mobilises — stress hormones, muscles, heart rate' },
];

const BRANCH = {
  label: 'The Branching Point',
  sub: 'Does cognition override the signal?',
};

const PATH_A = [
  { id: 'a-mob', label: 'Mobilisation response', sub: 'Energy spent — movement, expression, discharge' },
  { id: 'a-restore', label: 'Biological restoration', sub: 'Cortisol clears, muscles release, HPA stands down' },
  { id: 'a-baseline', label: 'Physiological baseline', sub: 'The sequence completes. The signal does not need to repeat.' },
];

const PATH_B = [
  { id: 'b-override', label: 'Cognitive override', sub: '"I don\'t have time for this" — restoration cannot begin' },
  { id: 'b-debris', label: 'Debris accumulates', sub: 'Cortisol, tension, sensitised amygdala — still running' },
  { id: 'b-elevation', label: 'Baseline elevates', sub: 'Floor rises, ceiling drops. The window narrows.' },
  { id: 'b-substitute', label: 'Substitutes → escalation', sub: 'Relief without completion. The substitute changes. The mechanism does not.' },
];

const TOTAL_STEPS = 1 + 1 + Math.max(PATH_A.length, PATH_B.length); // shared + branch + max path length
const STEP_DELAY = 600;

// ─── Component ──────────────────────────────────────────

export default function M3PathDiagram() {
  const [step, setStep] = useState(-1);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  // Scroll trigger
  useEffect(() => {
    if (hasStarted) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);

  // Sequential reveal
  useEffect(() => {
    if (!hasStarted) return;
    let current = 0;
    const advance = () => {
      setStep(current);
      current++;
      if (current <= TOTAL_STEPS + 1) {
        timerRef.current = setTimeout(advance, STEP_DELAY);
      }
    };
    timerRef.current = setTimeout(advance, 200);
    return () => clearTimeout(timerRef.current);
  }, [hasStarted]);

  const branchRevealed = step >= 1;
  const pathStep = step - 2; // steps into the parallel paths

  return (
    <section ref={sectionRef} style={{
      marginBottom: 32,
      ...diagramContainer(),
    }}>
      <style>{`
        .m3-node {
          padding: 12px 16px;
          border-radius: ${RADIUS.md}px;
          border: 1.5px solid ${BORDER.default};
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s ease, transform 0.4s ease, border-color 0.3s ease;
        }
        .m3-node.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .m3-paths {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 12px;
        }
        .m3-path-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .m3-connector {
          width: 1.5px;
          height: 16px;
          margin: 0 auto;
          transition: background 0.4s ease;
        }
        @media (max-width: 640px) {
          .m3-paths {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ─── Shared: Activation ─────────── */}
      <div className={`m3-node${step >= 0 ? ' visible' : ''}`} style={{
        maxWidth: 500,
        margin: '0 auto',
        textAlign: 'center',
        borderColor: step >= 0 ? hexToRgba(MODEL_COLOR, 0.3) : BORDER.default,
        background: step >= 0 ? gradientCardBg(MODEL_COLOR, 0.04) : 'transparent',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: MODEL_COLOR,
        }}>
          {SHARED[0].label}
        </span>
        <p style={{
          fontSize: 13, lineHeight: 1.5, color: TEXT.muted,
          margin: '4px 0 0',
        }}>
          {SHARED[0].sub}
        </p>
      </div>

      {/* Connector */}
      <div className="m3-connector" style={{
        background: branchRevealed ? hexToRgba(MODEL_COLOR, 0.3) : hexToRgba(MODEL_COLOR, 0.08),
      }} />

      {/* ─── Branch Point ──────────────── */}
      <div className={`m3-node${branchRevealed ? ' visible' : ''}`} style={{
        maxWidth: 500,
        margin: '0 auto',
        textAlign: 'center',
        borderColor: branchRevealed ? MODEL_COLOR : BORDER.default,
        background: branchRevealed ? hexToRgba(MODEL_COLOR, 0.08) : 'transparent',
        borderWidth: 2,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 9, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: MODEL_COLOR,
        }}>
          {BRANCH.label}
        </span>
        <p style={{
          fontSize: 14, lineHeight: 1.5, color: TEXT.primary,
          margin: '4px 0 0', fontWeight: 500,
        }}>
          {BRANCH.sub}
        </p>
      </div>

      {/* ─── Two Paths ─────────────────── */}
      <div className="m3-paths">
        {/* Path A */}
        <div className="m3-path-col">
          <div style={{
            fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: PATH_A_COLOR,
            textAlign: 'center',
            padding: '8px 0',
            opacity: branchRevealed ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}>
            Path A — No
          </div>
          {PATH_A.map((node, i) => (
            <div key={node.id}
              className={`m3-node${pathStep >= i ? ' visible' : ''}`}
              style={{
                borderColor: pathStep >= i ? hexToRgba(PATH_A_COLOR, 0.3) : BORDER.default,
                borderLeft: `3px solid ${pathStep >= i ? PATH_A_COLOR : BORDER.default}`,
                background: node.id === 'a-baseline' && pathStep >= i
                  ? gradientCardBg(PATH_A_COLOR, 0.06) : 'transparent',
                transition: 'opacity 0.4s ease, transform 0.4s ease, border-color 0.3s ease, background 0.3s ease',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <span style={{
                fontSize: 14, fontWeight: 600,
                color: pathStep >= i ? TEXT.primary : TEXT.muted,
              }}>
                {node.label}
              </span>
              <p style={{
                fontSize: 12.5, lineHeight: 1.55, color: TEXT.muted,
                margin: '3px 0 0',
              }}>
                {node.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Path B */}
        <div className="m3-path-col">
          <div style={{
            fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: PATH_B_COLOR,
            textAlign: 'center',
            padding: '8px 0',
            opacity: branchRevealed ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}>
            Path B — Yes
          </div>
          {PATH_B.map((node, i) => (
            <div key={node.id}
              className={`m3-node${pathStep >= i ? ' visible' : ''}`}
              style={{
                borderColor: pathStep >= i ? hexToRgba(PATH_B_COLOR, 0.3) : BORDER.default,
                borderLeft: `3px solid ${pathStep >= i ? PATH_B_COLOR : BORDER.default}`,
                background: node.id === 'b-substitute' && pathStep >= i
                  ? gradientCardBg(PATH_B_COLOR, 0.06) : 'transparent',
                transition: 'opacity 0.4s ease, transform 0.4s ease, border-color 0.3s ease, background 0.3s ease',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <span style={{
                fontSize: 14, fontWeight: 600,
                color: pathStep >= i ? TEXT.primary : TEXT.muted,
              }}>
                {node.label}
              </span>
              <p style={{
                fontSize: 12.5, lineHeight: 1.55, color: TEXT.muted,
                margin: '3px 0 0',
              }}>
                {node.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
