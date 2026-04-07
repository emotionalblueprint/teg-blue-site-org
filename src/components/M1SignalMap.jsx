'use client';

import { useState, useCallback } from 'react';
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, MAIN_ORG,
  hexToRgba, gradientCardBg, diagramContainer,
} from '@/src/styles/tokens';
import { EMOTIONS, BODY_SIGNATURE_GROUPS } from '@/src/data/m1-data';

// ─── Constants ──────────────────────────────────────────
const SOMATIC_COLOR = SPECTRUM.cobalt;
const RELATIONAL_COLOR = SPECTRUM.indigo;
const CHART_BLUE = MAIN_ORG.accent;

// Detail card colors — same 3-step blues as the Signal Diagram
const DETAIL_COLORS = {
  Signal: SPECTRUM.azure,
  'Body Response': SPECTRUM.cobalt,
  Restoration: SPECTRUM.indigo,
};

// Body signature groups split naturally by restoration type
const SOMATIC_GROUPS = ['mobilization', 'expulsion', 'approach'];
const RELATIONAL_GROUPS = ['social-withdrawal', 'conservation', 'bonding'];

function getEmotionsByGroup(groupKey) {
  const group = BODY_SIGNATURE_GROUPS.find(g => g.key === groupKey);
  if (!group) return [];
  return group.emotions
    .map(ek => EMOTIONS.find(e => e.key === ek))
    .filter(Boolean);
}

// ─── Component ──────────────────────────────────────────

export default function M1SignalMap() {
  const [selectedKey, setSelectedKey] = useState(null);
  const selected = selectedKey ? EMOTIONS.find(e => e.key === selectedKey) : null;
  const selectedIsRelational = selected && (
    selected.type === 'relational' ||
    (selected.restorationType && selected.restorationType.includes('relational'))
  );
  const selectedColor = selectedIsRelational ? RELATIONAL_COLOR : SOMATIC_COLOR;

  const toggle = useCallback((key) => {
    setSelectedKey(prev => prev === key ? null : key);
  }, []);

  return (
    <section style={{
      marginBottom: 32,
      ...diagramContainer(),
    }}>
      <style>{`
        .m1-map-emotions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .m1-map-group-row {
          margin-bottom: 12px;
        }
        .m1-map-detail {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
          animation: m1MapFadeIn 0.3s ease;
        }
        @keyframes m1MapFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .m1-map-detail {
            grid-template-columns: 1fr;
          }
          .m1-map-emotions {
            gap: 6px;
          }
        }
      `}</style>

      {/* ─── Somatic Section ──────────────── */}
      <div style={{ marginBottom: 24 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 14,
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: SOMATIC_COLOR,
          }} />
          <span style={{
            fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: SOMATIC_COLOR,
          }}>
            Somatic Signals
          </span>
          <span style={{
            fontFamily: FONT.mono, fontSize: 8,
            letterSpacing: '0.06em',
            color: TEXT.hint,
          }}>
            Complete through the body{"'"}s own channels
          </span>
        </div>

        {SOMATIC_GROUPS.map(gk => {
          const group = BODY_SIGNATURE_GROUPS.find(g => g.key === gk);
          const emotions = getEmotionsByGroup(gk);
          if (!group || !emotions.length) return null;
          return (
            <div key={gk} className="m1-map-group-row">
              <div style={{
                display: 'flex', alignItems: 'baseline', gap: 8,
                marginBottom: 8,
              }}>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: TEXT.muted,
                }}>
                  {group.label}
                </span>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 7,
                  letterSpacing: '0.06em',
                  color: TEXT.hint,
                }}>
                  {group.signature}
                </span>
              </div>
              <div className="m1-map-emotions">
                {emotions.map(em => {
                  const isActive = selectedKey === em.key;
                  return (
                    <button
                      key={em.key}
                      onClick={() => toggle(em.key)}
                      aria-expanded={isActive}
                      aria-label={`${em.name}: ${em.signal}`}
                      style={{
                        padding: '10px 14px',
                        borderRadius: RADIUS.md,
                        border: `1.5px solid ${isActive ? SOMATIC_COLOR : BORDER.default}`,
                        background: isActive ? hexToRgba(SOMATIC_COLOR, 0.08) : 'transparent',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.15s ease',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        minWidth: 0,
                      }}
                    >
                      <span style={{
                        fontSize: 14, fontWeight: 600,
                        color: isActive ? SOMATIC_COLOR : TEXT.primary,
                        transition: 'color 0.2s ease',
                      }}>
                        {em.name}
                      </span>
                      <span style={{
                        fontFamily: FONT.mono, fontSize: 8.5,
                        letterSpacing: '0.04em',
                        color: TEXT.muted,
                      }}>
                        {em.signal}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Divider ─────────────────────── */}
      <div style={{
        height: 1,
        background: `linear-gradient(90deg, transparent, ${hexToRgba(SPECTRUM.slate, 0.25)}, transparent)`,
        marginBottom: 24,
      }} />

      {/* ─── Relational Section ───────────── */}
      <div style={{ marginBottom: 8 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 14,
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            border: `2px solid ${RELATIONAL_COLOR}`,
            boxSizing: 'border-box',
            backgroundColor: 'transparent',
          }} />
          <span style={{
            fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: RELATIONAL_COLOR,
          }}>
            Relational Signals
          </span>
          <span style={{
            fontFamily: FONT.mono, fontSize: 8,
            letterSpacing: '0.06em',
            color: TEXT.hint,
          }}>
            Require another person for completion
          </span>
        </div>

        {RELATIONAL_GROUPS.map(gk => {
          const group = BODY_SIGNATURE_GROUPS.find(g => g.key === gk);
          const emotions = getEmotionsByGroup(gk);
          if (!group || !emotions.length) return null;
          return (
            <div key={gk} className="m1-map-group-row">
              <div style={{
                display: 'flex', alignItems: 'baseline', gap: 8,
                marginBottom: 8,
              }}>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: TEXT.muted,
                }}>
                  {group.label}
                </span>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 7,
                  letterSpacing: '0.06em',
                  color: TEXT.hint,
                }}>
                  {group.signature}
                </span>
              </div>
              <div className="m1-map-emotions">
                {emotions.map(em => {
                  const isActive = selectedKey === em.key;
                  return (
                    <button
                      key={em.key}
                      onClick={() => toggle(em.key)}
                      aria-expanded={isActive}
                      aria-label={`${em.name}: ${em.signal}`}
                      style={{
                        padding: '10px 14px',
                        borderRadius: RADIUS.md,
                        border: `1.5px solid ${isActive ? RELATIONAL_COLOR : BORDER.default}`,
                        background: isActive ? hexToRgba(RELATIONAL_COLOR, 0.08) : 'transparent',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.15s ease',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        minWidth: 0,
                      }}
                    >
                      <span style={{
                        fontSize: 14, fontWeight: 600,
                        color: isActive ? RELATIONAL_COLOR : TEXT.primary,
                        transition: 'color 0.2s ease',
                      }}>
                        {em.name}
                      </span>
                      <span style={{
                        fontFamily: FONT.mono, fontSize: 8.5,
                        letterSpacing: '0.04em',
                        color: TEXT.muted,
                      }}>
                        {em.signal}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Expanded Detail Panel ────────── */}
      {selected && (
        <div key={selected.key} className="m1-map-detail">
          {[
            { label: 'Signal', content: selected.signal, sub: 'What the nervous system detected' },
            { label: 'Body Response', content: selected.bodyResponse, sub: 'How the body reorganizes' },
            { label: 'Restoration', content: selected.restorationNeeds, sub: 'What resolves the activation',
              badge: selectedIsRelational ? 'Relational' : 'Somatic' },
          ].map(card => {
            const cardColor = DETAIL_COLORS[card.label];
            return (
              <div key={card.label} style={{
                background: gradientCardBg(cardColor, 0.05),
                padding: '14px 14px 16px',
                borderRadius: RADIUS.lg,
                border: `1px solid ${hexToRgba(cardColor, 0.2)}`,
                borderTop: `2px solid ${cardColor}`,
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  marginBottom: 4,
                }}>
                  <span style={{
                    fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: cardColor,
                  }}>
                    {card.label}
                  </span>
                  {card.badge && (
                    <span style={{
                      fontFamily: FONT.mono, fontSize: 7, fontWeight: 600,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      padding: '2px 6px', borderRadius: 4,
                      background: hexToRgba(selectedColor, 0.1),
                      color: selectedColor,
                    }}>
                      {card.badge}
                    </span>
                  )}
                </div>
                <p style={{
                  fontSize: 13, lineHeight: 1.65,
                  color: TEXT.secondary,
                  margin: '0 0 4px',
                }}>
                  {card.content}
                </p>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 7,
                  letterSpacing: '0.06em',
                  color: TEXT.hint,
                }}>
                  {card.sub}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
