'use client';

import { useCallback } from 'react';
import { TEXT, BORDER, FONT, RADIUS, hexToRgba } from '@/src/styles/tokens';

const SAFETY_COLOR = '#a0cdfb';
const THREAT_COLOR = '#6fabf8';

const GROUPS = [
  { key: 'safety', label: 'Safety & Openness', anchor: 'safety-openness', color: SAFETY_COLOR },
  { key: 'threat', label: 'Threat & Defence', anchor: 'threat-defence', color: THREAT_COLOR },
];

export default function M1EmotionNav() {
  const scrollTo = useCallback((anchor) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <nav
      aria-label="Signal group navigation"
      style={{
        borderBottom: `1px solid ${BORDER.default}`,
        padding: '16px 0 10px',
        marginBottom: 32,
        display: 'flex',
        gap: 12,
      }}
    >
      {GROUPS.map(group => (
        <button
          key={group.key}
          onClick={() => scrollTo(group.anchor)}
          style={{
            padding: '6px 16px',
            borderRadius: RADIUS.sm,
            border: `1px solid ${hexToRgba(group.color, 0.3)}`,
            background: hexToRgba(group.color, 0.06),
            cursor: 'pointer',
            transition: 'all 150ms ease',
            fontSize: 13,
            fontWeight: 500,
            color: group.color,
            fontFamily: FONT.display,
            lineHeight: 1.4,
          }}
        >
          {group.label}
        </button>
      ))}
    </nav>
  );
}
