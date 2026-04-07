'use client';

import { useState, useEffect, useRef } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, RADIUS,
  hexToRgba, gradientCardBg,
} from '@/src/styles/tokens';
import { DISTORTIONS } from '@/src/data/m1-data';

// ─── Constants ──────────────────────────────────────────
const MODEL_COLOR = SPECTRUM.azure;
const ACCENT = '#2563eb';
const DISTORTION_COLOR = '#f97316'; // orange — signal couldn't land

const PATHWAYS = [
  {
    emotion: 'Admiration',
    signal: 'Value detected in another',
    distortion: DISTORTIONS.find(d => d.key === 'envy'),
    received: 'Recognition — the detection lands, inspires orientation toward what was seen',
    blocked: 'Comparison — cognition converts recognition into measurement of the gap',
  },
  {
    emotion: 'Pride',
    signal: 'Own value recognised',
    distortion: DISTORTIONS.find(d => d.key === 'arrogance'),
    received: 'Self-recognition — the detection lands through own awareness, no external validation needed',
    blocked: 'Elevation — own value can\'t be received internally, expressed as positioning above others',
  },
];

// ─── Component ──────────────────────────────────────────

export default function M1DistortionPathway() {
  const [revealed, setRevealed] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);
  const sectionRef = useRef(null);

  // Reveal on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ marginBottom: 32 }}>
      <style>{`
        .m1-dist-row {
          display: grid;
          grid-template-columns: 140px 24px 1fr;
          gap: 0;
          align-items: stretch;
          margin-bottom: 16px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .m1-dist-row.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .m1-dist-row:nth-child(2) {
          transition-delay: 0.2s;
        }
        .m1-dist-branches {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 8px;
        }
        .m1-dist-branch {
          padding: 12px 14px;
          border-radius: ${RADIUS.md}px;
          border: 1.5px solid ${BORDER.default};
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .m1-dist-branch:hover {
          border-color: ${hexToRgba(MODEL_COLOR, 0.35)};
        }
        .m1-dist-branch.received {
          border-left: 3px solid ${MODEL_COLOR};
        }
        .m1-dist-branch.distorted {
          border-left: 3px solid ${DISTORTION_COLOR};
        }
        .m1-dist-branch.active {
          background: ${hexToRgba(MODEL_COLOR, 0.05)};
        }
        @media (max-width: 640px) {
          .m1-dist-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .m1-dist-connector {
            display: none;
          }
        }
      `}</style>

      {/* ─── Header ──────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 16,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: TEXT.muted,
        }}>
          Same detection
        </span>
        <div style={{
          flex: 1, height: 1,
          background: `linear-gradient(90deg, ${hexToRgba(MODEL_COLOR, 0.2)}, transparent)`,
        }} />
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: TEXT.muted,
        }}>
          Different experience
        </span>
      </div>

      {/* ─── Pathway Rows ────────────────── */}
      {PATHWAYS.map((pw, i) => (
        <div key={pw.emotion}
          className={`m1-dist-row${revealed ? ' visible' : ''}`}
        >
          {/* Signal source */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '12px 16px 12px 0',
          }}>
            <span style={{
              fontSize: 15, fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 4,
            }}>
              {pw.signal}
            </span>
            <span style={{
              fontFamily: FONT.mono, fontSize: 7.5,
              letterSpacing: '0.08em',
              color: TEXT.hint,
            }}>
              The nervous system detects
            </span>
          </div>

          {/* Connector */}
          <div className="m1-dist-connector" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <div style={{
              width: 1, flex: 1,
              background: hexToRgba(MODEL_COLOR, 0.15),
            }} />
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: hexToRgba(MODEL_COLOR, 0.2),
              border: `1.5px solid ${hexToRgba(MODEL_COLOR, 0.4)}`,
              position: 'absolute',
              top: '50%', transform: 'translateY(-50%)',
            }} />
            <div style={{
              width: 1, flex: 1,
              background: hexToRgba(MODEL_COLOR, 0.15),
            }} />
          </div>

          {/* Two branches */}
          <div className="m1-dist-branches">
            {/* Received path */}
            <div
              className={`m1-dist-branch received${activeIdx === `${i}-r` ? ' active' : ''}`}
              onClick={() => setActiveIdx(prev => prev === `${i}-r` ? null : `${i}-r`)}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                marginBottom: 4,
              }}>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: MODEL_COLOR,
                }}>
                  Signal received
                </span>
                <span style={{
                  fontSize: 13, fontWeight: 600,
                  color: TEXT.primary,
                }}>
                  → {pw.emotion}
                </span>
              </div>
              <p style={{
                fontSize: 12.5, lineHeight: 1.6,
                color: TEXT.muted, margin: 0,
              }}>
                {pw.received}
              </p>
            </div>

            {/* Distorted path */}
            <div
              className={`m1-dist-branch distorted${activeIdx === `${i}-d` ? ' active' : ''}`}
              onClick={() => setActiveIdx(prev => prev === `${i}-d` ? null : `${i}-d`)}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                marginBottom: 4,
              }}>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: DISTORTION_COLOR,
                }}>
                  Signal blocked
                </span>
                <span style={{
                  fontSize: 13, fontWeight: 600,
                  color: TEXT.primary,
                }}>
                  → {pw.distortion?.name || 'Distortion'}
                </span>
              </div>
              <p style={{
                fontSize: 12.5, lineHeight: 1.6,
                color: TEXT.muted, margin: 0,
              }}>
                {pw.blocked}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* ─── Principle ───────────────────── */}
      <div style={{
        marginTop: 8,
        padding: '12px 16px',
        borderRadius: RADIUS.md,
        background: gradientCardBg(ACCENT, 0.04),
        border: `1px solid ${hexToRgba(ACCENT, 0.12)}`,
        opacity: revealed ? 1 : 0,
        transition: 'opacity 0.6s ease 0.5s',
      }}>
        <p style={{
          fontSize: 13, lineHeight: 1.65,
          color: TEXT.muted, margin: 0,
          fontStyle: 'italic',
        }}>
          When a signal cannot be received, it does not disappear — it distorts. The finding is the same. What changes is what the person experiences.
        </p>
      </div>
    </section>
  );
}
