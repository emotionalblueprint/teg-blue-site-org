'use client';

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPACING,
  MAIN_ORG, DIAGRAM, hexToRgba, gradientCardBg,
} from "@/src/styles/tokens";
import { EMOTION_WAVE as MOMENTS } from "@/src/data/m1-data";

// ─── Diagram voice + break ─────────────────────────────
// Section consumes DIAGRAM tokens for chart content and MAIN_ORG for
// page-level accents (badge, CTA, card borders). Style system:
// teg-blue-vault/_system/diagram-style.md
const MAIN_BLUE = DIAGRAM.primary;     // #4062eb — voice
const ORANGE = DIAGRAM.break;          // #e05e2e — break
const ORG_ACCENT = MAIN_ORG.accent;    // #2563eb — page accent (badge, CTA, cards)

// ─── Chart Constants ──────────────────────────────────────────
const VW = 900, VH = 220;
const PL = 44, PT = 20, PR = 52, PB = 52;
const PW = VW - PL - PR;
const PH = VH - PT - PB;
const BRANCH_T = 0.365;
const DURATION = 9000;


function buildWaveforms() {
  const N = 600;
  const proc = [], unproc = [];
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
      const yc = Math.max(0.01, Math.min(1, y));
      proc.push({ t, y: yc }); unproc.push({ t, y: yc });
    } else {
      const u = (t - BRANCH_T) / (1 - BRANCH_T);
      const yB = 0.908;
      const py = yB * Math.exp(-4.9 * u) + 0.022;
      proc.push({ t, y: Math.max(0.02, py) });
      let uy;
      if (u < 0.19) { uy = yB - 0.07 * (u / 0.19) + 0.03 * Math.sin(u * 120); }
      else if (u < 0.52) {
        const v = (u - 0.19) / 0.33;
        uy = 0.835 - 0.25 * v + 0.052 * Math.sin(v * 58 + 0.5) + 0.025 * Math.sin(v * 118);
      } else {
        const v = (u - 0.52) / 0.48;
        uy = 0.512 - 0.075 * v + 0.062 * Math.sin(v * 42 + 1.3) + 0.03 * Math.sin(v * 84);
      }
      unproc.push({ t, y: Math.max(0.09, Math.min(1, uy)) });
    }
  }
  return { proc, unproc };
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

// ─── Component ────────────────────────────────────────────────
export default function EmotionWaveSection({
  badge = "Framework 1 · The biological substrate",
  heading = <>Emotions are data.<br/><span style={{ color: TEXT.muted, fontWeight: 400 }}>They are biological information.</span></>,
  description = "Before behavior, before belief, before pattern — there is a neurochemical arc with a precise biological window for integration. TEG-Blue begins here.",
  ctaText = "Four models map the full arc — from signal detection to nervous system state, from regulation capacity to awareness calibration.",
  ctaHref = "/models",
  ctaLabel = "Explore the Emotional Somatic System",
  showCta = true,
} = {}) {
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [activeMoment, setActiveMoment] = useState(null);
  const [done, setDone] = useState(false);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const t0Ref = useRef(null);
  const progressRef = useRef(0);
  const runRef = useRef(0);

  const { proc, unproc } = useMemo(() => buildWaveforms(), []);

  function play() {
    cancelAnimationFrame(rafRef.current);
    t0Ref.current = null;
    progressRef.current = 0;
    setProgress(0);
    setActiveMoment(null);
    setDone(false);
    setHasStarted(true);
    runRef.current += 1;
  }

  // Auto-play on scroll into view
  useEffect(() => {
    if (hasStarted) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { play(); obs.disconnect(); } },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);

  // Animation loop
  useEffect(() => {
    if (!hasStarted) return;
    const thisRun = runRef.current;
    const tick = (ts) => {
      if (thisRun !== runRef.current) return;
      if (!t0Ref.current) t0Ref.current = ts;
      const p = Math.min((ts - t0Ref.current) / DURATION, 1);
      progressRef.current = p;
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
  const showSplit = progress > BRANCH_T + 0.01;

  const procReveal = buildPath(proc, progress);
  const unprocReveal = buildPath(unproc, progress);
  const procGhost = buildPath(proc);
  const unprocGhost = buildPath(unproc);

  const pyAtCursor = PT + (1 - yAt(proc, progress)) * PH;
  const uyAtCursor = PT + (1 - yAt(unproc, progress)) * PH;

  return (
    <section ref={sectionRef} style={{
      background: DIAGRAM.bg,
      padding: "32px 0 36px",
      marginBottom: "clamp(20px, 4vw, 36px)",
      position: "relative",
      overflow: "hidden",
      marginLeft: "calc(-50vw + 50%)",
      marginRight: "calc(-50vw + 50%)",
      width: "100vw",
    }}>
      <style>{`
        .ew-section .moment-pill {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .ew-section .moment-pill.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .ew-cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
        }
        @media (max-width: 768px) {
          .ew-cards-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="ew-section">
        {/* Subtle radial glow */}
        <div style={{
          position: "absolute", top: "18%", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "300px",
          background: `radial-gradient(ellipse, ${hexToRgba(ORG_ACCENT, 0.04)} 0%, transparent 70%)`,
          pointerEvents: "none", zIndex: 0
        }}/>

        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px)", position: "relative", zIndex: 1 }}>

          {/* Section header */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{
              display: "inline-block",
              padding: "4px 10px",
              borderRadius: 6,
              background: hexToRgba(ORG_ACCENT, 0.12),
              border: `1px solid ${hexToRgba(ORG_ACCENT, 0.25)}`,
              marginBottom: "16px"
            }}>
              <span style={{
                fontFamily: FONT.diagram,
                fontSize: "10px", fontWeight: 600,
                letterSpacing: "0.12em", color: MAIN_BLUE, textTransform: "uppercase",
              }}>
                {badge}
              </span>
            </div>
            <h2 style={{
              fontFamily: "inherit",
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700, color: TEXT.primary, lineHeight: 1.2,
              letterSpacing: "-0.02em", marginBottom: "14px"
            }}>
{heading}
            </h2>
            <p style={{
              fontSize: "15px",
              color: TEXT.hint, lineHeight: 1.75, maxWidth: "520px"
            }}>
{description}
            </p>
          </div>

          {/* Legend + replay */}
          <div style={{ display: "flex", gap: "12px 22px", marginBottom: "10px", alignItems: "center", flexWrap: "wrap" }}>
            {[[MAIN_BLUE, "Processed"], [ORANGE, "Unprocessed"]].map(([color, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <svg width="22" height="8"><line x1="0" y1="4" x2="22" y2="4" stroke={color} strokeWidth="1.5"/></svg>
                <span style={{ fontFamily: FONT.diagram, fontSize: "8.5px", color, letterSpacing: "0.12em" }}>{label}</span>
              </div>
            ))}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontFamily: FONT.diagram, fontSize: "8px", color: TEXT.hint, letterSpacing: "0.08em" }}>
                x-axis: compressed time (ms → min)
              </span>
              {done && (
                <button
                  onClick={play}
                  aria-label="Replay animation"
                  style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    padding: "4px 12px",
                    border: `1px solid ${BORDER.default}`,
                    background: "transparent",
                    color: TEXT.muted,
                    borderRadius: "6px",
                    fontFamily: FONT.diagram,
                    fontSize: "9px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "color 0.2s ease, border-color 0.2s ease",
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

          {/* Chart */}
          <div style={{ position: "relative" }}>
            <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width: "100%", height: "auto", display: "block" }}>

              {/* Grid lines */}
              {[0.25, 0.5, 0.75, 1].map(v => (
                <line key={v}
                  x1={PL} y1={PT + (1 - v) * PH}
                  x2={PL + PW} y2={PT + (1 - v) * PH}
                  stroke={DIAGRAM.gridSoft} strokeWidth="1"/>
              ))}

              {/* Baseline */}
              <line x1={PL} y1={PT + PH} x2={PL + PW} y2={PT + PH}
                stroke={DIAGRAM.gridLine} strokeWidth="1"/>

              {/* Y-axis */}
              <line x1={PL} y1={PT} x2={PL} y2={PT + PH}
                stroke={DIAGRAM.gridLine} strokeWidth="1"/>
              <text x={14} y={PT + PH / 2} textAnchor="middle"
                transform={`rotate(-90,14,${PT + PH / 2})`}
                style={{ fontFamily: "'IBM Plex Mono', 'SF Mono', 'Consolas', monospace", fontSize: "7.5px", fill: DIAGRAM.textMuted, letterSpacing: "0.12em" }}>
                ACTIVATION
              </text>

              {/* Bifurcation line */}
              <line x1={branchX} y1={PT - 6} x2={branchX} y2={PT + PH}
                stroke={hexToRgba(MAIN_BLUE, 0.25)} strokeWidth="1" strokeDasharray="3,5"/>

              {/* Ghost paths */}
              <path d={unprocGhost} fill="none" stroke={ORANGE} strokeWidth="1" strokeOpacity="0.1"/>
              <path d={procGhost} fill="none" stroke={MAIN_BLUE} strokeWidth="1" strokeOpacity="0.1"/>

              {/* Revealed paths */}
              {hasStarted && (
                <>
                  <path d={unprocReveal} fill="none" stroke={ORANGE} strokeWidth="1.8" strokeOpacity="0.8"/>
                  <path d={procReveal} fill="none" stroke={MAIN_BLUE} strokeWidth="2" strokeOpacity="0.95"/>
                </>
              )}

              {/* Cursor */}
              {progress > 0.01 && (
                <line x1={cx} y1={PT - 4} x2={cx} y2={PT + PH}
                  stroke={DIAGRAM.textMicro} strokeWidth="1"/>
              )}

              {/* Cursor dots */}
              {progress > 0.01 && !showSplit && (
                <circle cx={cx} cy={pyAtCursor} r="2.5" fill={TEXT.secondary}/>
              )}
              {showSplit && (
                <>
                  <circle cx={cx} cy={pyAtCursor} r="5" fill={MAIN_BLUE} fillOpacity="0.15"/>
                  <circle cx={cx} cy={pyAtCursor} r="2.5" fill={MAIN_BLUE}/>
                  <circle cx={cx} cy={uyAtCursor} r="5" fill={ORANGE} fillOpacity="0.15"/>
                  <circle cx={cx} cy={uyAtCursor} r="2.5" fill={ORANGE}/>
                </>
              )}

              {/* End labels */}
              {done && (
                <>
                  <text x={PL + PW + 6} y={pyAtCursor + 4}
                    style={{ fontFamily: "'IBM Plex Mono', 'SF Mono', 'Consolas', monospace", fontSize: "8.5px", fill: MAIN_BLUE }}>
                    baseline
                  </text>
                  <text x={PL + PW + 6} y={uyAtCursor + 4}
                    style={{ fontFamily: "'IBM Plex Mono', 'SF Mono', 'Consolas', monospace", fontSize: "8.5px", fill: ORANGE }}>
                    chronic
                  </text>
                </>
              )}

              {/* Event tick marks */}
              {MOMENTS.map(m => {
                const mx = PL + m.t * PW;
                const reached = progress >= m.t;
                return (
                  <g key={m.id}>
                    <line x1={mx} y1={PT + PH} x2={mx} y2={PT + PH + 5}
                      stroke={reached ? m.color : DIAGRAM.gridLine} strokeWidth="1"/>
                    <text x={mx} y={PT + PH + 15} textAnchor="middle"
                      style={{ fontFamily: "'IBM Plex Mono', 'SF Mono', 'Consolas', monospace", fontSize: "7.5px",
                        fill: reached ? m.color : DIAGRAM.textMuted, letterSpacing: "0.05em" }}>
                      {m.sub}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Three moment cards — horizontal row below chart */}
          <div className="ew-cards-row">
            {MOMENTS.map((m) => {
              const reached = progress >= m.t;
              return (
                <div key={m.id} className={`moment-pill ${reached ? "visible" : ""}`}
                  style={{
                    background: `linear-gradient(135deg, ${hexToRgba(ORG_ACCENT, 0.06)}, transparent)`,
                    padding: "18px 16px",
                    borderRadius: "12px",
                    border: `1px solid ${reached ? hexToRgba(ORG_ACCENT, 0.2) : BORDER.default}`,
                    borderLeft: `3px solid ${reached ? m.color : BORDER.default}`,
                    transition: "border-color 0.5s ease, opacity 0.4s ease, transform 0.4s ease"
                  }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "8px" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: m.color, flexShrink: 0 }}/>
                      <span style={{ fontFamily: FONT.diagram, fontSize: "8px",
                        color: m.color, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>
                        {m.label}
                      </span>
                    </div>
                    <p style={{ fontSize: "13px",
                      color: reached ? TEXT.secondary : TEXT.hint, lineHeight: 1.72, marginBottom: "8px",
                      transition: "color 0.5s ease" }}>
                      {m.body}
                    </p>
                    <span style={{ fontFamily: FONT.diagram, fontSize: "7.5px",
                      color: TEXT.hint, letterSpacing: "0.04em" }}>
                      {m.ref}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          {showCta && (
            <div style={{
              marginTop: "40px", display: "flex", alignItems: "center",
              justifyContent: "space-between", flexWrap: "wrap", gap: "20px"
            }}>
              <p style={{
                fontSize: "14px",
                color: TEXT.hint, lineHeight: 1.65, maxWidth: "420px", fontStyle: "italic"
              }}>
                {ctaText}
              </p>
              <Link href={ctaHref} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 24px",
                border: `1px solid ${hexToRgba(ORG_ACCENT, 0.3)}`,
                background: hexToRgba(ORG_ACCENT, 0.08),
                color: MAIN_BLUE,
                borderRadius: "8px",
                fontFamily: FONT.diagram,
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 500,
              }}>
                {ctaLabel}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M8 1l5 4-5 4M13 5H1" stroke={MAIN_BLUE} strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
