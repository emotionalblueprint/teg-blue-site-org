'use client';

import { useState, useEffect, useCallback } from 'react';
import { BG, TEXT, BORDER, FONT, RADIUS, MODEL_COLORS, hexToRgba } from '@/src/styles/tokens';
import { NS_STATE_GROUPS, EMOTIONS } from '@/src/data/m1-data';

const MODEL_COLOR = MODEL_COLORS.M1;
const SAFETY_COLOR = '#a0cdfb';
const THREAT_COLOR = '#6fabf8';

function getGroupColor(stateKey) {
  return stateKey === 'safety' ? SAFETY_COLOR : THREAT_COLOR;
}

export default function M1EmotionNav() {
  const [activeKey, setActiveKey] = useState(null);

  // Track which emotion section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveKey(visible[0].target.id.replace('emotion-', ''));
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
    );

    EMOTIONS.forEach(em => {
      const el = document.getElementById(`emotion-${em.key}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((key) => {
    const el = document.getElementById(`emotion-${key}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <nav
      aria-label="Emotion navigation"
      style={{
        position: 'sticky',
        top: 64,
        zIndex: 20,
        background: BG.page,
        borderBottom: `1px solid ${BORDER.default}`,
        padding: '16px 0 10px',
        marginBottom: 32,
        marginTop: -8,
        boxShadow: `0 -16px 0 0 var(--bg-page)`,
      }}
    >
      {NS_STATE_GROUPS.map(group => {
        const color = getGroupColor(group.key);
        const emotions = group.emotions
          .map(ek => EMOTIONS.find(e => e.key === ek))
          .filter(Boolean);

        return (
          <div key={group.key} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            flexWrap: 'wrap',
            marginBottom: group.key === 'safety' ? 6 : 0,
          }}>
            {/* Group label */}
            <span style={{
              fontFamily: FONT.mono,
              fontSize: 8,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: color,
              minWidth: 58,
              flexShrink: 0,
            }}>
              {group.key === 'safety' ? 'Safety' : 'Threat'}
            </span>

            {/* Emotion buttons */}
            {emotions.map(em => {
              const isActive = activeKey === em.key;
              return (
                <button
                  key={em.key}
                  onClick={() => scrollTo(em.key)}
                  aria-label={`${em.name}: ${em.signal}`}
                  style={{
                    padding: '4px 10px',
                    borderRadius: RADIUS.sm,
                    border: `1px solid ${isActive ? hexToRgba(color, 0.5) : 'transparent'}`,
                    background: isActive ? hexToRgba(color, 0.1) : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                    fontSize: 12,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? color : TEXT.muted,
                    fontFamily: FONT.display,
                    lineHeight: 1.4,
                  }}
                >
                  {em.name}
                </button>
              );
            })}
          </div>
        );
      })}
    </nav>
  );
}
