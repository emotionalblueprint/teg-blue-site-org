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

/**
 * M1SignalMap — Interactive emotion explorer
 *
 * @param {'somatic' | 'relational'} filter — which category to show
 */
export default function M1SignalMap({ filter = 'somatic' }) {
  const [selectedKey, setSelectedKey] = useState(null);
  const selected = selectedKey ? EMOTIONS.find(e => e.key === selectedKey) : null;

  const isSomatic = filter === 'somatic';
  const accentColor = isSomatic ? SOMATIC_COLOR : RELATIONAL_COLOR;
  const groups = isSomatic ? SOMATIC_GROUPS : RELATIONAL_GROUPS;
  const sectionLabel = isSomatic ? 'Somatic Signals' : 'Relational Signals';
  const sectionSub = isSomatic
    ? "Complete through the body\u2019s own channels"
    : 'Require another person for completion';

  const allEmotions = groups.flatMap(gk => getEmotionsByGroup(gk));

  const toggle = useCallback((key) => {
    setSelectedKey(prev => prev === key ? null : key);
  }, []);

  return (
    <section style={{
      marginBottom: 32,
      ...diagramContainer(),
    }}>
      <style>{`
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
        }
      `}</style>

      {/* ─── Section Header ──────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 14,
      }}>
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: isSomatic ? accentColor : 'transparent',
          border: isSomatic ? 'none' : `2px solid ${accentColor}`,
          boxSizing: 'border-box',
        }} />
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: accentColor,
        }}>
          {sectionLabel}
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8,
          letterSpacing: '0.06em',
          color: TEXT.hint,
        }}>
          {sectionSub}
        </span>
      </div>

      {/* ─── Emotion Grid ────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: 8,
        marginBottom: 8,
      }}>
        {allEmotions.map(em => {
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
                border: `1.5px solid ${isActive ? accentColor : BORDER.default}`,
                background: isActive ? hexToRgba(accentColor, 0.08) : 'transparent',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease, background 0.2s ease',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <span style={{
                fontSize: 14, fontWeight: 600,
                color: isActive ? accentColor : TEXT.primary,
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

      {/* ─── Expanded Detail Panel ────────── */}
      {selected && (
        <div key={selected.key} className="m1-map-detail">
          {[
            { label: 'Signal', content: selected.signal, sub: 'What the nervous system detected' },
            { label: 'Body Response', content: selected.bodyResponse, sub: 'How the body reorganizes' },
            { label: 'Restoration', content: selected.restorationNeeds, sub: 'What resolves the activation',
              badge: isSomatic ? 'Somatic' : 'Relational' },
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
                      background: hexToRgba(accentColor, 0.1),
                      color: accentColor,
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
