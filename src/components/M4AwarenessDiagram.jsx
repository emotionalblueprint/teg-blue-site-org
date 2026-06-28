'use client';

import { useState, useEffect, useRef } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, RADIUS, AWARENESS, PATTERN, ACCENT,
  hexToRgba, diagramContainer,
} from '@/src/styles/tokens';
import { CAPACITIES } from '@/src/data/m4-data';
import { MODES } from '@/src/data/m2-data';

// ─── Constants ──────────────────────────────────────────
const MODEL_COLOR = PATTERN.D.primary;

// Capacity meta
const CAPS = [
  { key: 'RE', label: 'Interpersonal Affect Perception', abbr: 'RE', color: AWARENESS.RE, substrate: 'external',
    what: 'Reads what others feel — faces, voices, behaviour' },
  { key: 'ER', label: 'Affective Resonance', abbr: 'ER', color: AWARENESS.ER, substrate: 'interoceptive',
    what: 'Feels what others feel — in one\'s own body' },
  { key: 'SEA', label: 'Interoceptive Self-Awareness', abbr: 'SEA', color: AWARENESS.SEA, substrate: 'interoceptive',
    what: 'The bridge — knows what the body is doing right now' },
];

const STATES = ['Connection', 'Protection', 'Control / Management', 'Domination'];

// Animation
const SWEEP_MS = 5000;

function lerp(a, b, t) { return a + (b - a) * t; }

// ─── Component ──────────────────────────────────────────

export default function M4AwarenessDiagram() {
  const [isChronicView, setIsChronicView] = useState(false);
  const [stateIdx, setStateIdx] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [phase, setPhase] = useState('sweep'); // sweep | done
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const t0Ref = useRef(null);

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

  // Auto-sweep: fluid → then chronic across all 4 states
  useEffect(() => {
    if (!hasStarted || phase !== 'sweep') return;

    // Phase 1: sweep fluid (0-40%), Phase 2: switch to chronic + sweep (40-100%)
    const tick = (ts) => {
      if (!t0Ref.current) t0Ref.current = ts;
      const p = Math.min((ts - t0Ref.current) / SWEEP_MS, 1);

      if (p < 0.4) {
        // Fluid sweep
        const fp = p / 0.4;
        setIsChronicView(false);
        setStateIdx(Math.min(3, Math.floor(fp * 4)));
      } else {
        // Chronic sweep
        const cp = (p - 0.4) / 0.6;
        setIsChronicView(true);
        setStateIdx(Math.min(3, Math.floor(cp * 4)));
      }

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase('done');
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hasStarted, phase]);

  // Get current capacity levels
  const dataset = isChronicView ? CAPACITIES.chronic : CAPACITIES.fluid;
  const current = dataset[stateIdx] || dataset[0];
  const mode = MODES[stateIdx];

  return (
    <section ref={sectionRef} style={{
      marginBottom: 32,
      ...diagramContainer(),
    }}>
      <style>{`
        .m4-substrate {
          padding: 16px;
          border-radius: ${RADIUS.lg}px;
          border: 1.5px solid ${BORDER.default};
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .m4-substrates {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }
        .m4-cap-node {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: ${RADIUS.md}px;
          margin-bottom: 6px;
          transition: opacity 0.4s ease, background 0.3s ease;
        }
        .m4-cap-bar {
          height: 6px;
          border-radius: 3px;
          transition: width 0.5s ease, background 0.3s ease;
          min-width: 4px;
        }
        .m4-state-row {
          display: flex;
          gap: 4px;
          margin-top: 8px;
        }
        .m4-state-btn {
          flex: 1;
          padding: 6px 8px;
          border-radius: ${RADIUS.sm}px;
          border: 1.5px solid ${BORDER.default};
          background: transparent;
          cursor: pointer;
          font-family: ${FONT.mono};
          font-size: 7.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: ${TEXT.hint};
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
          text-align: center;
        }
        .m4-state-btn.active {
          border-color: ${MODEL_COLOR};
          background: ${hexToRgba(MODEL_COLOR, 0.1)};
          color: ${MODEL_COLOR};
        }
        .m4-toggle {
          display: flex;
          border-radius: 20px;
          border: 1.5px solid ${BORDER.default};
          overflow: hidden;
        }
        .m4-toggle button {
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
        .m4-toggle button.active {
          background: ${hexToRgba(MODEL_COLOR, 0.12)};
          color: ${MODEL_COLOR};
        }
        @media (max-width: 640px) {
          .m4-substrates {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ─── Controls ────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 12, flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: mode?.hex || MODEL_COLOR,
          transition: 'color 0.2s ease',
        }}>
          {STATES[stateIdx]}
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8,
          letterSpacing: '0.06em',
          color: TEXT.hint,
        }}>
          {isChronicView ? 'Chronic — locked' : 'Fluid — temporary'}
        </span>
        <div style={{ marginLeft: 'auto' }}>
          <div className="m4-toggle">
            <button
              className={!isChronicView ? 'active' : ''}
              onClick={() => { setIsChronicView(false); setPhase('done'); }}
            >
              Fluid
            </button>
            <button
              className={isChronicView ? 'active' : ''}
              onClick={() => { setIsChronicView(true); setPhase('done'); }}
            >
              Chronic
            </button>
          </div>
        </div>
      </div>

      {/* ─── Two substrates ──────────────── */}
      <div className="m4-substrates">
        {/* Interoceptive substrate */}
        <div className="m4-substrate" style={{
          borderColor: isChronicView && stateIdx > 0
            ? hexToRgba(ACCENT.orange, 0.3)
            : hexToRgba(MODEL_COLOR, 0.2),
          background: isChronicView && stateIdx > 0
            ? hexToRgba(ACCENT.orange, 0.03)
            : 'transparent',
        }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: isChronicView && stateIdx > 0 ? ACCENT.orange : TEXT.muted,
            marginBottom: 10,
            transition: 'color 0.3s ease',
          }}>
            Interoceptive Substrate
            <span style={{ fontWeight: 400, color: TEXT.hint, marginLeft: 8 }}>
              reads the body from inside
            </span>
          </div>

          {/* ER */}
          {renderCapacity(CAPS[1], current.er)}
          {/* SEA */}
          {renderCapacity(CAPS[2], current.sea)}
        </div>

        {/* External substrate */}
        <div className="m4-substrate" style={{
          borderColor: hexToRgba(MODEL_COLOR, 0.2),
        }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: TEXT.muted,
            marginBottom: 10,
          }}>
            External Substrate
            <span style={{ fontWeight: 400, color: TEXT.hint, marginLeft: 8 }}>
              reads others from outside
            </span>
          </div>

          {/* RE */}
          {renderCapacity(CAPS[0], current.re)}
        </div>
      </div>

      {/* ─── State selector ──────────────── */}
      <div className="m4-state-row">
        {STATES.map((s, i) => (
          <button key={s}
            className={`m4-state-btn${stateIdx === i ? ' active' : ''}`}
            onClick={() => { setStateIdx(i); setPhase('done'); }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* ─── Insight ─────────────────────── */}
      {isChronicView && stateIdx >= 1 && (
        <div style={{
          marginTop: 14,
          padding: '10px 14px',
          borderRadius: RADIUS.md,
          background: hexToRgba(ACCENT.orange, 0.04),
          border: `1px solid ${hexToRgba(ACCENT.orange, 0.12)}`,
          animation: 'm4FadeIn 0.3s ease',
        }}>
          <style>{`
            @keyframes m4FadeIn {
              from { opacity: 0; transform: translateY(4px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <p style={{
            fontSize: 13, lineHeight: 1.6,
            color: TEXT.muted, margin: 0,
            fontStyle: 'italic',
          }}>
            {stateIdx === 1 && 'ER shuts down. SEA goes dark. RE sharpens into threat-scanning. The person reads everyone — and feels nothing.'}
            {stateIdx === 2 && 'RE becomes instrumental — reading for strategy, not understanding. The interoceptive substrate is offline. The coherence feels complete.'}
            {stateIdx === 3 && 'RE is weaponised. ER and SEA are absent. The bridge needed to see the pattern is the bridge the pattern closed.'}
          </p>
        </div>
      )}
    </section>
  );
}

// ─── Capacity node renderer ─────────────────────────────

function renderCapacity(cap, data) {
  const level = data?.level ?? 0;
  const label = data?.label ?? 'Unavailable';
  const isDead = level === 0;

  return (
    <div className="m4-cap-node" style={{
      opacity: isDead ? 0.3 : 1,
      background: isDead ? 'transparent' : hexToRgba(cap.color, 0.06),
    }}>
      {/* Abbr badge */}
      <div style={{
        width: 36, height: 36, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hexToRgba(cap.color, isDead ? 0.05 : 0.15),
        border: `1.5px solid ${hexToRgba(cap.color, isDead ? 0.1 : 0.4)}`,
        flexShrink: 0,
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 700,
          color: isDead ? TEXT.hint : cap.color,
          transition: 'color 0.3s ease',
        }}>
          {cap.abbr}
        </span>
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          marginBottom: 3,
        }}>
          <span style={{
            fontSize: 13, fontWeight: 600,
            color: isDead ? TEXT.hint : TEXT.primary,
            transition: 'color 0.3s ease',
          }}>
            {cap.what}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            flex: 1, height: 6, borderRadius: 3,
            background: hexToRgba(cap.color, 0.1),
          }}>
            <div className="m4-cap-bar" style={{
              width: `${Math.max(2, level * 100)}%`,
              background: cap.color,
              opacity: isDead ? 0.2 : 0.7,
            }} />
          </div>
          <span style={{
            fontFamily: FONT.mono, fontSize: 7.5,
            letterSpacing: '0.04em',
            color: isDead ? TEXT.hint : TEXT.muted,
            whiteSpace: 'nowrap',
            transition: 'color 0.3s ease',
          }}>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
