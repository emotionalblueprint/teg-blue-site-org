'use client';

import { useState, useEffect, useRef, useMemo } from "react";
import { FONT, TEXT, SPECTRUM, BORDER, RESEARCHER, hexToRgba } from "@/src/styles/tokens";

// ─── Constants ──────────────────────────────────────────
const MAIN_BLUE = "#3b82f6";
const ACCENT = RESEARCHER.accent; // #2563eb
const VW = 900, VH = 220;
const PL = 44, PT = 20, PR = 52, PB = 52;
const PW = VW - PL - PR;
const PH = VH - PT - PB;
const BRANCH_T = 0.365;
const DURATION = 9000;

const MOMENTS = [
  {
    t: 0.115, id: "fast", color: MAIN_BLUE,
    label: "Fast pathway",
    sub: "~12 ms",
    body: "The amygdala fires before the cortex knows what triggered it. The body responds before the mind understands.",
    ref: "LeDoux, 1996"
  },
  {
    t: BRANCH_T, id: "branch", color: ACCENT,
    label: "Integration window",
    sub: "300 ms – 5 s",
    body: "The point where processing becomes possible. Before this, the pathway is identical biology. After it, restoration begins.",
    ref: "Ochsner & Gross, 2005"
  },
  {
    t: 0.625, id: "w90", color: SPECTRUM.sky,
    label: "90-second window",
    sub: "~90 s",
    body: "If uninterrupted, the neurochemical cascade clears in roughly 90 seconds. The body completes the cycle and returns to baseline.",
    ref: "Bolte Taylor, 2008"
  }
];

// ─── Waveform (processed path only) ─────────────────────
function buildWaveform() {
  const N = 600;
  const pts = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    if (t <= BRANCH_T) {
      let y;
      if (t < 0.04) { y = (t / 0.04) * 0.12; }
      else {
        const u = (t - 0.04) / (BRANCH_T - 0.04);
        y = 0.12 + 0.785 * (1 - Math.exp(-7 * u));
        if (u > 0.2) y += 0.013 * Math.sin(u * 100) * Math.exp(-2.2 * u);
      }
      pts.push({ t, y: Math.max(0.01, Math.min(1, y)) });
    } else {
      const u = (t - BRANCH_T) / (1 - BRANCH_T);
      const yB = 0.908;
      const py = yB * Math.exp(-4.9 * u) + 0.022;
      pts.push({ t, y: Math.max(0.02, py) });
    }
  }
  return pts;
}

function buildPath(pts, upTo) {
  const filtered = upTo !== undefined ? pts.filter(p => p.t <= upTo + 0.002) : pts;
  return filtered.map(({ t, y }, i) => {
    const x = (PL + t * PW).toFixed(2);
    const yy = (PT + (1 - y) * PH).toFixed(2);
    return `${i === 0 ? "M" : "L"}${x},${yy}`;
  }).join("");
}

function yAt(pts, t) {
  const idx = Math.min(Math.round(t * (pts.length - 1)), pts.length - 1);
  return pts[Math.max(0, idx)]?.y ?? 0;
}

// ─── Component ──────────────────────────────────────────
export default function F1HingeDiagram() {
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [activeMoment, setActiveMoment] = useState(null);
  const [done, setDone] = useState(false);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const t0Ref = useRef(null);
  const runRef = useRef(0);

  const waveform = useMemo(() => buildWaveform(), []);

  function play() {
    cancelAnimationFrame(rafRef.current);
    t0Ref.current = null;
    setProgress(0);
    setActiveMoment(null);
    setDone(false);
    setHasStarted(true);
    runRef.current += 1;
  }

  useEffect(() => {
    if (hasStarted) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      setDone(true);
      setHasStarted(true);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { play(); obs.disconnect(); } },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const thisRun = runRef.current;
    const tick = (ts) => {
      if (thisRun !== runRef.current) return;
      if (!t0Ref.current) t0Ref.current = ts;
      const p = Math.min((ts - t0Ref.current) / DURATION, 1);
      setProgress(p);
      const hit = [...MOMENTS].reverse().find(m => m.t <= p);
      if (hit) setActiveMoment(hit);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setDone(true);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hasStarted, runRef.current]);

  const cx = PL + progress * PW;
  const branchX = PL + BRANCH_T * PW;
  const procReveal = buildPath(waveform, progress);
  const procGhost = buildPath(waveform);
  const pyAtCursor = PT + (1 - yAt(waveform, progress)) * PH;

  return (
    <div ref={containerRef}>
      <style>{`
        .f1-restore .moment-pill {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .f1-restore .moment-pill.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .f1-restore-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        @media (max-width: 768px) {
          .f1-restore-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="f1-restore">
        {/* Legend + Replay */}
        <div style={{
          display: "flex", gap: "12px 22px", marginBottom: 10,
          alignItems: "center", flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <svg width="22" height="8"><line x1="0" y1="4" x2="22" y2="4" stroke={MAIN_BLUE} strokeWidth="1.5"/></svg>
            <span style={{ fontFamily: FONT.mono, fontSize: 8.5, color: MAIN_BLUE, letterSpacing: "0.12em" }}>
              Biological Restoration
            </span>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint, letterSpacing: "0.08em" }}>
              x-axis: compressed time (ms → min)
            </span>
            {done && (
              <button
                onClick={play}
                aria-label="Replay animation"
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "4px 12px",
                  border: `1px solid ${BORDER.default}`,
                  background: "transparent", color: TEXT.muted,
                  borderRadius: 6,
                  fontFamily: FONT.mono, fontSize: 9,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  fontWeight: 500, cursor: "pointer",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1v4h4" stroke={TEXT.muted} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.5 5A5 5 0 1 1 2 8.5" stroke={TEXT.muted} strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                Replay
              </button>
            )}
          </div>
        </div>

        {/* SVG Chart */}
        <svg
          role="img"
          aria-labelledby="restoration-title restoration-desc"
          viewBox={`0 0 ${VW} ${VH}`}
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <title id="restoration-title">
            Biological Restoration — the body completing the cycle
          </title>
          <desc id="restoration-desc">
            An activation curve rises as the body mobilises for threat,
            then settles back to baseline as Biological Restoration completes.
          </desc>

          {/* Grid lines */}
          {[0.25, 0.5, 0.75, 1].map(v => (
            <line key={v}
              x1={PL} y1={PT + (1 - v) * PH}
              x2={PL + PW} y2={PT + (1 - v) * PH}
              stroke={hexToRgba(ACCENT, 0.06)} strokeWidth="1"/>
          ))}

          {/* Baseline */}
          <line x1={PL} y1={PT + PH} x2={PL + PW} y2={PT + PH}
            stroke={hexToRgba(ACCENT, 0.15)} strokeWidth="1"/>

          {/* Y-axis */}
          <line x1={PL} y1={PT} x2={PL} y2={PT + PH}
            stroke={hexToRgba(ACCENT, 0.15)} strokeWidth="1"/>
          <text x={14} y={PT + PH / 2} textAnchor="middle"
            transform={`rotate(-90,14,${PT + PH / 2})`}
            style={{ fontFamily: FONT.mono, fontSize: 7.5, fill: TEXT.hint, letterSpacing: "0.12em" }}>
            ACTIVATION
          </text>

          {/* Bifurcation line */}
          <line x1={branchX} y1={PT - 6} x2={branchX} y2={PT + PH}
            stroke={hexToRgba(MAIN_BLUE, 0.25)} strokeWidth="1" strokeDasharray="3,5"/>

          {/* Ghost path */}
          <path d={procGhost} fill="none" stroke={MAIN_BLUE} strokeWidth="1" strokeOpacity="0.1"/>

          {/* Revealed path */}
          {hasStarted && (
            <path d={procReveal} fill="none" stroke={MAIN_BLUE} strokeWidth="2" strokeOpacity="0.95"/>
          )}

          {/* Cursor line */}
          {progress > 0.01 && (
            <line x1={cx} y1={PT - 4} x2={cx} y2={PT + PH}
              stroke={hexToRgba('#94a3b8', 0.1)} strokeWidth="1"/>
          )}

          {/* Cursor dot */}
          {progress > 0.01 && (
            <>
              <circle cx={cx} cy={pyAtCursor} r="5" fill={MAIN_BLUE} fillOpacity="0.15"/>
              <circle cx={cx} cy={pyAtCursor} r="2.5" fill={MAIN_BLUE}/>
            </>
          )}

          {/* End label */}
          {done && (
            <text x={PL + PW + 6} y={pyAtCursor + 4}
              style={{ fontFamily: FONT.mono, fontSize: 8.5, fill: MAIN_BLUE }}>
              baseline
            </text>
          )}

          {/* Event tick marks */}
          {MOMENTS.map(m => {
            const mx = PL + m.t * PW;
            const reached = progress >= m.t;
            return (
              <g key={m.id}>
                <line x1={mx} y1={PT + PH} x2={mx} y2={PT + PH + 5}
                  stroke={reached ? m.color : hexToRgba(ACCENT, 0.15)} strokeWidth="1"/>
                <text x={mx} y={PT + PH + 15} textAnchor="middle"
                  style={{ fontFamily: FONT.mono, fontSize: 7.5,
                    fill: reached ? m.color : TEXT.hint, letterSpacing: "0.05em" }}>
                  {m.sub}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Moment cards */}
        <div className="f1-restore-cards">
          {MOMENTS.map((m) => {
            const reached = progress >= m.t;
            return (
              <div key={m.id} className={`moment-pill ${reached ? "visible" : ""}`}
                style={{
                  background: `linear-gradient(135deg, ${hexToRgba(ACCENT, 0.06)}, transparent)`,
                  padding: "14px 14px",
                  borderRadius: 10,
                  border: `1px solid ${reached ? hexToRgba(ACCENT, 0.2) : BORDER.default}`,
                  borderLeft: `3px solid ${reached ? m.color : BORDER.default}`,
                  transition: "border-color 0.5s ease, opacity 0.4s ease, transform 0.4s ease",
                }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: m.color, flexShrink: 0 }}/>
                    <span style={{
                      fontFamily: FONT.mono, fontSize: 8,
                      color: m.color, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600,
                    }}>
                      {m.label}
                    </span>
                  </div>
                  <p style={{
                    fontSize: 12, color: reached ? TEXT.secondary : TEXT.hint,
                    lineHeight: 1.7, marginBottom: 6,
                    transition: "color 0.5s ease",
                  }}>
                    {m.body}
                  </p>
                  <span style={{ fontFamily: FONT.mono, fontSize: 7.5, color: TEXT.hint, letterSpacing: "0.04em" }}>
                    {m.ref}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
