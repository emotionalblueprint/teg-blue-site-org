'use client';

import { useState, useEffect, useRef, useMemo } from "react";
import { FONT, TEXT, SPECTRUM, BORDER, hexToRgba, MODE_ORANGE } from "@/src/styles/tokens";

// ─── Chart Constants ────────────────────────────────────
const VW = 800, VH = 280;
const PL = 50, PT = 28, PR = 50, PB = 50;
const PW = VW - PL - PR;
const PH = VH - PT - PB;
const BRANCH_T = 0.35;
const DURATION = 7000;
const MONO = "'JetBrains Mono', 'SF Mono', 'Consolas', monospace";

// ─── Waveform Generators ────────────────────────────────
function buildWaveforms() {
  const N = 300;
  const shared = [], restore = [], stuck = [];

  for (let i = 0; i <= N; i++) {
    const t = i / N;

    if (t <= BRANCH_T) {
      // Shared rise: smooth exponential approach to peak
      const u = t / BRANCH_T;
      const y = 0.88 * (1 - Math.exp(-5 * u));
      shared.push({ t, y: Math.max(0.01, y) });
    } else {
      const u = (t - BRANCH_T) / (1 - BRANCH_T);

      // Path A: restoration — smooth decay back to baseline
      const ry = 0.88 * Math.exp(-4.5 * u) + 0.02;
      restore.push({ t, y: Math.max(0.02, ry) });

      // Path B: open cycle — stays elevated with oscillation
      const sy = 0.52 + 0.15 * Math.sin(u * 24) * Math.exp(-0.6 * u)
                       + 0.08 * Math.sin(u * 48 + 1);
      stuck.push({ t, y: Math.max(0.25, Math.min(0.85, sy)) });
    }
  }

  return {
    fullRestore: [...shared, ...restore],
    fullStuck: [...shared, ...stuck],
  };
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

  const { fullRestore, fullStuck } = useMemo(() => buildWaveforms(), []);

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

  const branchX = PL + BRANCH_T * PW;
  const showSplit = progress > BRANCH_T + 0.01;
  const cx = PL + progress * PW;

  const restoreY = PT + (1 - yAtProgress(fullRestore, progress)) * PH;
  const stuckY = PT + (1 - yAtProgress(fullStuck, progress)) * PH;

  return (
    <div ref={containerRef}>
      {/* ─── Legend + Replay ─── */}
      <div style={{
        display: "flex", gap: 16, marginBottom: 8,
        alignItems: "center", flexWrap: "wrap",
      }}>
        {[
          [SPECTRUM.sky, "Restoration"],
          [MODE_ORANGE, "Cycle stays open"],
        ].map(([color, label]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="18" height="6">
              <line x1="0" y1="3" x2="18" y2="3" stroke={color} strokeWidth="1.5" />
            </svg>
            <span style={{
              fontFamily: MONO, fontSize: 8.5, color,
              letterSpacing: "0.1em",
            }}>
              {label}
            </span>
          </div>
        ))}

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
              fontFamily: MONO, fontSize: 9,
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
        aria-labelledby="hinge-title hinge-desc"
        viewBox={`0 0 ${VW} ${VH}`}
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <title id="hinge-title">
          The hinge: bifurcation between restoration and open cycle
        </title>
        <desc id="hinge-desc">
          An activation curve rises from baseline. At the peak it bifurcates:
          one path completes biological restoration and returns to baseline,
          the other stays elevated as the cycle never closes.
        </desc>

        {/* Y-axis label */}
        <text x={18} y={PT + PH / 2} textAnchor="middle"
          transform={`rotate(-90,18,${PT + PH / 2})`}
          style={{ fontFamily: MONO, fontSize: 8, fill: TEXT.hint,
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

        {/* Bifurcation dashed line */}
        <line x1={branchX} y1={PT - 4} x2={branchX} y2={PT + PH}
          stroke={hexToRgba(SPECTRUM.azure, 0.2)} strokeWidth="1"
          strokeDasharray="3,5" />

        {/* "the hinge" label */}
        <text x={branchX} y={PT + PH + 20} textAnchor="middle"
          style={{ fontFamily: MONO, fontSize: 9, fontWeight: 600,
            letterSpacing: "0.08em", fill: SPECTRUM.azure }}>
          the hinge
        </text>

        {/* "time" label */}
        <text x={PL + PW} y={PT + PH + 20} textAnchor="end"
          style={{ fontFamily: MONO, fontSize: 8, fill: TEXT.hint,
            letterSpacing: "0.08em" }}>
          {"time \u2192"}
        </text>

        {/* Ghost paths */}
        <path d={toPath(fullRestore)} fill="none"
          stroke={SPECTRUM.sky} strokeWidth="1" strokeOpacity="0.08" />
        <path d={toPath(fullStuck)} fill="none"
          stroke={MODE_ORANGE} strokeWidth="1" strokeOpacity="0.08" />

        {/* Revealed paths */}
        {started && (
          <>
            <path d={toPath(fullStuck, progress)} fill="none"
              stroke={showSplit ? MODE_ORANGE : SPECTRUM.azure}
              strokeWidth="1.8" strokeOpacity="0.8" />
            <path d={toPath(fullRestore, progress)} fill="none"
              stroke={showSplit ? SPECTRUM.sky : SPECTRUM.azure}
              strokeWidth="2" strokeOpacity="0.9" />
          </>
        )}

        {/* Cursor dots */}
        {progress > 0.02 && !showSplit && (
          <circle cx={cx} cy={restoreY} r="2.5" fill={SPECTRUM.azure} />
        )}
        {showSplit && (
          <>
            <circle cx={cx} cy={restoreY} r="4"
              fill={hexToRgba(SPECTRUM.sky, 0.15)} />
            <circle cx={cx} cy={restoreY} r="2" fill={SPECTRUM.sky} />
            <circle cx={cx} cy={stuckY} r="4"
              fill={hexToRgba(MODE_ORANGE, 0.15)} />
            <circle cx={cx} cy={stuckY} r="2" fill={MODE_ORANGE} />
          </>
        )}

        {/* End labels */}
        {done && (
          <>
            <text x={PL + PW + 8} y={restoreY + 4}
              style={{ fontFamily: MONO, fontSize: 8.5, fill: SPECTRUM.sky }}>
              baseline
            </text>
            <text x={PL + PW + 8} y={stuckY + 4}
              style={{ fontFamily: MONO, fontSize: 8.5, fill: MODE_ORANGE }}>
              chronic
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
