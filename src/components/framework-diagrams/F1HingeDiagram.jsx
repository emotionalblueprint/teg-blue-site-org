'use client';

import { useState, useEffect, useRef, useMemo } from "react";
import { FONT, TEXT, SPECTRUM, BORDER, hexToRgba } from "@/src/styles/tokens";
// FONT.mono used throughout for SVG text and HTML elements

// ─── Chart Constants ────────────────────────────────────
const VW = 800, VH = 280;
const PL = 50, PT = 28, PR = 50, PB = 50;
const PW = VW - PL - PR;
const PH = VH - PT - PB;
const DURATION = 7000;

// ─── Waveform Generator ─────────────────────────────────
function buildWaveform() {
  const N = 300;
  const pts = [];

  for (let i = 0; i <= N; i++) {
    const t = i / N;

    if (t <= 0.35) {
      // Rise: smooth exponential approach to peak
      const u = t / 0.35;
      const y = 0.88 * (1 - Math.exp(-5 * u));
      pts.push({ t, y: Math.max(0.01, y) });
    } else {
      // Restoration: smooth decay back to baseline
      const u = (t - 0.35) / (1 - 0.35);
      const ry = 0.88 * Math.exp(-4.5 * u) + 0.02;
      pts.push({ t, y: Math.max(0.02, ry) });
    }
  }

  return pts;
}

function toPath(pts, upTo) {
  const filtered = upTo != null ? pts.filter(p => p.t <= upTo + 0.003) : pts;
  return filtered.map(({ t, y }, i) => {
    const x = (PL + t * PW).toFixed(1);
    const yy = (PT + (1 - y) * PH).toFixed(1);
    return `${i === 0 ? "M" : "L"}${x},${yy}`;
  }).join("");
}

function yAtProgress(pts, p) {
  const idx = Math.min(Math.round(p * (pts.length - 1)), pts.length - 1);
  return pts[Math.max(0, idx)]?.y ?? 0;
}

// ─── Component ──────────────────────────────────────────
export default function F1HingeDiagram() {
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
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
    setDone(false);
    setStarted(true);
    runRef.current += 1;
  }

  // IntersectionObserver auto-play
  useEffect(() => {
    if (started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      setDone(true);
      setStarted(true);
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
  }, [started]);

  // RAF animation loop
  useEffect(() => {
    if (!started || done) return;
    const thisRun = runRef.current;
    const tick = (ts) => {
      if (thisRun !== runRef.current) return;
      if (!t0Ref.current) t0Ref.current = ts;
      const p = Math.min((ts - t0Ref.current) / DURATION, 1);
      setProgress(p);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setDone(true);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, done]);

  const cx = PL + progress * PW;
  const cursorY = PT + (1 - yAtProgress(waveform, progress)) * PH;

  return (
    <div ref={containerRef}>
      {/* ─── Legend + Replay ─── */}
      <div style={{
        display: "flex", gap: 16, marginBottom: 8,
        alignItems: "center", flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="18" height="6">
            <line x1="0" y1="3" x2="18" y2="3" stroke={SPECTRUM.sky} strokeWidth="1.5" />
          </svg>
          <span style={{
            fontFamily: FONT.mono, fontSize: 8.5, color: SPECTRUM.sky,
            letterSpacing: "0.1em",
          }}>
            Restoration
          </span>
        </div>

        {done && (
          <button
            onClick={play}
            aria-label="Replay animation"
            style={{
              marginLeft: "auto",
              display: "flex", alignItems: "center", gap: 5,
              padding: "3px 10px",
              border: `1px solid ${BORDER.default}`,
              background: "transparent",
              color: TEXT.muted,
              borderRadius: 5,
              fontFamily: FONT.mono, fontSize: 9,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
              <path d="M1 1v4h4" stroke={TEXT.muted} strokeWidth="1.3"
                strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1.5 5A5 5 0 1 1 2 8.5" stroke={TEXT.muted}
                strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Replay
          </button>
        )}
      </div>

      {/* ─── SVG Chart ─── */}
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
          An activation curve rises from baseline as the body mobilizes,
          peaks, then settles back to baseline as Biological Restoration completes
        </desc>

        {/* Y-axis label */}
        <text x={18} y={PT + PH / 2} textAnchor="middle"
          transform={`rotate(-90,18,${PT + PH / 2})`}
          style={{ fontFamily: FONT.mono, fontSize: 8, fill: TEXT.hint,
            letterSpacing: "0.12em" }}>
          ACTIVATION
        </text>

        {/* Baseline */}
        <line x1={PL} y1={PT + PH} x2={PL + PW} y2={PT + PH}
          stroke={hexToRgba(SPECTRUM.cobalt, 0.15)} strokeWidth="1" />

        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map(v => (
          <line key={v}
            x1={PL} y1={PT + (1 - v) * PH}
            x2={PL + PW} y2={PT + (1 - v) * PH}
            stroke={hexToRgba(SPECTRUM.cobalt, 0.05)} strokeWidth="1" />
        ))}

        {/* "time" label */}
        <text x={PL + PW} y={PT + PH + 20} textAnchor="end"
          style={{ fontFamily: FONT.mono, fontSize: 8, fill: TEXT.hint,
            letterSpacing: "0.08em" }}>
          {"time \u2192"}
        </text>

        {/* Ghost path */}
        <path d={toPath(waveform)} fill="none"
          stroke={SPECTRUM.sky} strokeWidth="1" strokeOpacity="0.08" />

        {/* Revealed path */}
        {started && (
          <path d={toPath(waveform, progress)} fill="none"
            stroke={SPECTRUM.sky}
            strokeWidth="2" strokeOpacity="0.9" />
        )}

        {/* Cursor dot */}
        {progress > 0.02 && (
          <>
            <circle cx={cx} cy={cursorY} r="4"
              fill={hexToRgba(SPECTRUM.sky, 0.15)} />
            <circle cx={cx} cy={cursorY} r="2" fill={SPECTRUM.sky} />
          </>
        )}

        {/* End label */}
        {done && (
          <text x={PL + PW + 8} y={cursorY + 4}
            style={{ fontFamily: FONT.mono, fontSize: 8.5, fill: SPECTRUM.sky }}>
            baseline
          </text>
        )}
      </svg>
    </div>
  );
}
