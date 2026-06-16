'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { BG, TEXT, BORDER, FONT, hexToRgba } from '@/src/styles/tokens'

/* ── Layout Constants ───────────────────────────────── */

const NODE_W = 148
const GAP_X = 60
const COL_W = NODE_W + GAP_X // 208px
const GAP_Y = 22

/* ── Node Colors (same as .com — rainbow spectrum) ──── */

const nodeColors = {
  1:  '#26C6DA', 2:  '#66BB6A', 3:  '#8BC34A',
  4:  '#FFCA28', 5:  '#FFA726', 6:  '#FF5722',
  7:  '#EF5350', 8:  '#EC407A', 9:  '#AB47BC',
  10: '#7E57C2', 11: '#5C6BC0', 12: '#1E88E5'
}

/* ── Arc Configuration ───────────────────────────────── */

const arcs = [
  { key: 'foundation',  name: 'Foundation',     levels: [1],        tag: 'Where emotion begins',           desc: 'Where emotion begins — how the nervous system orients between safety and threat' },
  { key: 'formation',   name: 'Formation',      levels: [2, 3],     tag: 'How the inner system forms',     desc: 'How identity crystallizes and how cognition maintains coherence' },
  { key: 'scaling',     name: 'Scaling',         levels: [4, 5, 6],  tag: 'How the inner becomes social',   desc: 'How individual patterns become social rules, worth hierarchies, and perception biases' },
  { key: 'turning',     name: 'Turning Point',   levels: [7],        tag: 'Where harm escalates or stops',  desc: 'How protection escalates through control into domination' },
  { key: 'restoration', name: 'Restoration',     levels: [8, 9, 10], tag: 'How capacity returns',           desc: 'Self-reconnection, neurodivergent pathways, and intergenerational repair' },
  { key: 'integration', name: 'Integration',     levels: [11],       tag: 'How it all fits together',       desc: 'How contradictions resolve when state logic is included' },
  { key: 'architecture',name: 'Architecture',    levels: [12],       tag: 'The operating system underneath', desc: 'The operating system underneath — two parallel information systems generating all behavior' },
]

/* ── Connection Definitions ──────────────────────────── */

const connections = [
  [1, 2], [1, 3],
  [2, 4], [2, 5], [2, 6],
  [3, 4], [3, 5], [3, 6],
  [4, 7], [5, 7], [6, 7],
  [7, 8], [7, 9], [7, 10],
  [8, 11], [9, 11], [10, 11],
  [11, 12]
]

/* ── Level Data ──────────────────────────────────────── */

const levelData = {
  1: {
    symbol: '◉',
    title: 'Emotions as Information (Emotions as Signals)',
    subtitle: 'Biological Information System',
    summary: 'Emotions are data systems that detect safety and organize regulation. Establishes the emotional circuit as the primary organizer of behavior and meaning — foundation for all subsequent frameworks.',
    buildsOn: 'Polyvagal Theory, affective neuroscience, trauma research, attachment theory, emotion science.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-1'
  },
  2: {
    symbol: '◐',
    title: 'Identity Formation (The Ego-Persona Construct)',
    subtitle: 'Identity as Adaptive Cognitive System',
    summary: 'Identity forms in response to the emotional data F1 establishes. The Real Self, Role Mask, and Logic Layer emerge because the nervous system detects that authenticity may not be safe.',
    buildsOn: 'Object relations theory, attachment research, developmental psychology, self-models, schema theory.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-2'
  },
  3: {
    symbol: '⬡',
    title: 'Adult Coherence (Our Three Inner Layers)',
    subtitle: 'Cognition & False Coherence',
    summary: 'Builds on F2: adults maintain identity coherence through false coherence — reinterpreting contradictions because the nervous system prioritizes identity safety over truth.',
    buildsOn: 'Cognitive dissonance theory, dual-process cognition, motivated reasoning, self-justification, state-dependent learning.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-3'
  },
  4: {
    symbol: '▦',
    title: 'Threat-Based Rules (Invisible Rules We Follow)',
    subtitle: 'Socio-Regulatory Structures',
    summary: 'The same identity maintenance mechanism from F3 scales to the collective. When individuals group under threat, they internalize rules that are socio-regulatory structures — not moral truths, but safety strategies.',
    buildsOn: 'Sociology of norms, cultural psychology, status dynamics, moral foundations, norm enforcement.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-4'
  },
  5: {
    symbol: '◈',
    title: 'Worth-Sorting Systems (The Filter of Worth)',
    subtitle: 'External Validation as Safety Proxy',
    summary: 'Builds on F4: when genuine safety is missing, systems create safety proxies. Worth hierarchies operate at group level the way the Role Mask operates at individual level.',
    buildsOn: 'Shame research, social evaluation threat, internalized stigma, conditional regard, social stratification.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-5'
  },
  6: {
    symbol: '◔',
    title: 'Bias Architecture (The Architecture of Bias)',
    subtitle: 'State-Dependent Perception',
    summary: 'Completes the scaling layer: bias is not a thinking error — it is a regulation strategy. Perception distortion makes hierarchies from F4–F5 feel natural, enabling unchecked escalation.',
    buildsOn: 'Social cognition, threat perception, intergroup emotion, motivated reasoning, dehumanization literature.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-6'
  },
  7: {
    symbol: '△',
    title: 'Escalation Pathways (Anatomy of a Tyrant)',
    subtitle: 'Defense-to-Domination Escalation',
    summary: 'When protection strategies from F1–F6 persist without feedback, defense escalates into domination. Five stages: fear activation, strategy formation, entitlement loop, empathy collapse, power preservation.',
    buildsOn: 'Power and dominance research, coercive control, moral disengagement, narcissism research, perpetrator psychology.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-7'
  },
  8: {
    symbol: '↺',
    title: 'Self-Reconnection (Return to the Real Self)',
    subtitle: 'Role Mask Loosening',
    summary: 'The reversal of F7: when nervous-system safety increases, the mask from F2 loosens, false coherence from F3 breaks down, and authentic emotional signals from F1 become accessible. Change requires safety, not willpower.',
    buildsOn: 'Metacognition, mindfulness research, emotion differentiation, reflective functioning, mentalization theory.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-8'
  },
  9: {
    symbol: '∿',
    title: 'Neurodivergent Integration (Costs of Forced Masking)',
    subtitle: 'Inborn Rhythm & Masking Cost',
    summary: 'Extends F8: masks include socially-imposed neurodivergent masking — particularly costly because it often goes unrecognized. Restoration requires honoring inborn rhythm, not adapting to neurotypical expectations.',
    buildsOn: 'Neurodiversity paradigm, sensory processing, autism and ADHD research, masking cost literature.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-9'
  },
  10: {
    symbol: '⧗',
    title: 'Intergenerational Repair (Rebuilding Generational Bridges)',
    subtitle: 'Transmission & Lineage Repair',
    summary: 'Scales restoration to family level: individual restoration (F8–F9) changes nervous-system state, which changes family-system state, creating new safety baselines. Breaking transmission requires understanding how patterns transmit (F4–F6) and reverse (F8–F9).',
    buildsOn: 'Intergenerational trauma research, family systems theory, epigenetics, ACEs literature.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-10'
  },
  11: {
    symbol: '∞',
    title: 'Emotional Logic (Making Sense of Contradiction)',
    subtitle: 'The Logic Behind Paradoxes',
    summary: 'All behavior is logically consistent from an emotional perspective. F1–F10 describe coherent emotional logic at different scales. What appears paradoxical is state-switching without awareness.',
    buildsOn: 'State-dependent cognition, dual-process work, trauma adaptation, motivated reasoning, self-justification.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-11'
  },
  12: {
    symbol: '⊜',
    title: 'Dual-Process Architecture (Two Information Systems)',
    subtitle: 'The Unifying Mechanism',
    summary: 'All frameworks F1–F11 describe state-dependent nervous-system organization. The Four-Mode Gradient is the unifying principle: Connection, Protection, Control, Domination — the same mechanism at every scale.',
    buildsOn: 'Dual-process theory, Polyvagal Theory, somatic marker hypothesis, state-dependent capacity.',
    link: 'https://teg-blue.com/mapping-system/understanding-emotions/level-12'
  },
}

/* ── Column Layout ───────────────────────────────────── */

const columns = [
  [1],
  [2, 3],
  [4, 5, 6],
  [7],
  [8, 9, 10],
  [11],
  [12],
]

/* ── Helpers ─────────────────────────────────────────── */

function getArcGradient(levels) {
  if (levels.length === 1) return nodeColors[levels[0]]
  return `linear-gradient(90deg, ${levels.map(l => nodeColors[l]).join(', ')})`
}

function arcLabel(levels) {
  return levels.length > 1
    ? `L${levels[0]}–${levels[levels.length - 1]}`
    : `L${levels[0]}`
}

function findArc(level) {
  return arcs.find(a => a.levels.includes(level))
}

function offsetFrom(el, ancestor) {
  let top = 0, left = 0
  let cur = el
  while (cur && cur !== ancestor) {
    top += cur.offsetTop
    left += cur.offsetLeft
    cur = cur.offsetParent
  }
  return {
    top, left,
    right: left + el.offsetWidth,
    bottom: top + el.offsetHeight,
    cx: left + el.offsetWidth / 2,
    cy: top + el.offsetHeight / 2,
  }
}

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════ */

export default function InterdependencyMatrix() {
  const [hoveredLevel, setHoveredLevel] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const diagramRef = useRef(null)
  const svgRef = useRef(null)
  const hideTimerRef = useRef(null)

  useEffect(() => { setMounted(true) }, [])

  /* ── Draw SVG connections ────────────────────────────── */
  const drawConnections = useCallback(() => {
    const svg = svgRef.current
    const diagram = diagramRef.current
    if (!svg || !diagram) return

    svg.setAttribute('width', diagram.scrollWidth)
    svg.setAttribute('height', diagram.scrollHeight)
    svg.innerHTML = ''

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')

    const uniqueTargets = [...new Set(connections.map(([, t]) => t))]
    uniqueTargets.forEach(toId => {
      const col = nodeColors[toId]
      const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker')
      marker.setAttribute('id', `arr-${toId}`)
      marker.setAttribute('viewBox', '0 0 8 8')
      marker.setAttribute('refX', '7')
      marker.setAttribute('refY', '4')
      marker.setAttribute('markerWidth', '5')
      marker.setAttribute('markerHeight', '5')
      marker.setAttribute('orient', 'auto')
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')
      poly.setAttribute('points', '0 0, 8 4, 0 8')
      poly.setAttribute('fill', col)
      poly.setAttribute('opacity', '0.8')
      marker.appendChild(poly)
      defs.appendChild(marker)
    })

    connections.forEach(([fromId, toId], i) => {
      const fromEl = document.getElementById(`node-${fromId}`)
      const toEl = document.getElementById(`node-${toId}`)
      if (!fromEl || !toEl) return

      const f = offsetFrom(fromEl, diagram)
      const t = offsetFrom(toEl, diagram)

      const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient')
      grad.setAttribute('id', `lg-${i}`)
      grad.setAttribute('gradientUnits', 'userSpaceOnUse')
      grad.setAttribute('x1', f.right)
      grad.setAttribute('y1', f.cy)
      grad.setAttribute('x2', t.left)
      grad.setAttribute('y2', t.cy)

      const s1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop')
      s1.setAttribute('offset', '0%')
      s1.setAttribute('stop-color', nodeColors[fromId])
      s1.setAttribute('stop-opacity', '0.6')
      const s2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop')
      s2.setAttribute('offset', '100%')
      s2.setAttribute('stop-color', nodeColors[toId])
      s2.setAttribute('stop-opacity', '0.6')

      grad.appendChild(s1)
      grad.appendChild(s2)
      defs.appendChild(grad)
    })

    svg.appendChild(defs)

    connections.forEach(([fromId, toId], i) => {
      const fromEl = document.getElementById(`node-${fromId}`)
      const toEl = document.getElementById(`node-${toId}`)
      if (!fromEl || !toEl) return

      const f = offsetFrom(fromEl, diagram)
      const t = offsetFrom(toEl, diagram)
      const mx = (f.right + t.left) / 2
      const d = `M ${f.right} ${f.cy} C ${mx} ${f.cy}, ${mx} ${t.cy}, ${t.left} ${t.cy}`

      // Glow
      const glow = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      glow.setAttribute('d', d)
      glow.setAttribute('fill', 'none')
      glow.setAttribute('stroke', `url(#lg-${i})`)
      glow.setAttribute('stroke-width', '5')
      glow.setAttribute('stroke-opacity', '0.15')
      glow.setAttribute('stroke-linecap', 'round')
      svg.appendChild(glow)

      // Main line
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttribute('d', d)
      path.setAttribute('fill', 'none')
      path.setAttribute('stroke', `url(#lg-${i})`)
      path.setAttribute('stroke-width', '1.5')
      path.setAttribute('stroke-linecap', 'round')
      path.setAttribute('marker-end', `url(#arr-${toId})`)
      svg.appendChild(path)
    })
  }, [])

  useEffect(() => {
    if (!mounted) return
    const timer = setTimeout(drawConnections, 200)
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(drawConnections, 200)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timer)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
    }
  }, [mounted, drawConnections])

  /* ── Tooltip handlers ───────────────────────────────── */
  const updateTooltipPos = useCallback((e) => {
    const tw = 320, th = 380
    const vw = window.innerWidth, vh = window.innerHeight
    let x = e.clientX + 18
    let y = e.clientY - 80
    if (x + tw > vw - 12) x = e.clientX - tw - 18
    if (y + th > vh - 12) y = vh - th - 12
    if (y < 8) y = 8
    setTooltipPos({ x, y })
  }, [])

  const handleNodeEnter = useCallback((level, e) => {
    clearTimeout(hideTimerRef.current)
    setHoveredLevel(level)
    updateTooltipPos(e)
  }, [updateTooltipPos])

  const handleNodeMove = useCallback((e) => {
    updateTooltipPos(e)
  }, [updateTooltipPos])

  const handleNodeLeave = useCallback(() => {
    hideTimerRef.current = setTimeout(() => setHoveredLevel(null), 120)
  }, [])

  const handleTooltipEnter = useCallback(() => {
    clearTimeout(hideTimerRef.current)
  }, [])

  const handleTooltipLeave = useCallback(() => {
    hideTimerRef.current = setTimeout(() => setHoveredLevel(null), 80)
  }, [])

  if (!mounted) return null

  return (
    <div style={{ paddingBottom: 40 }}>

      {/* ═══ SECTION HEADING ═══ */}
      <h2
        style={{
          fontSize: 24,
          fontWeight: 600,
          color: TEXT.primary,
          textAlign: 'center',
          marginBottom: 8,
          letterSpacing: '-0.01em',
        }}
      >
        Framework Interdependency Diagram
      </h2>
      <p
        style={{
          fontSize: 13,
          color: TEXT.muted,
          textAlign: 'center',
          marginBottom: 24,
        }}
      >
        12 frameworks across seven arcs — hover any node to explore
      </p>

      {/* ═══ ARC LEGEND BAR ═══ */}
      <div
        style={{
          margin: '0 0 24px',
          borderRadius: 10,
          padding: 14,
          background: BG.card,
          border: `1px solid ${BORDER.default}`,
          overflowX: 'auto',
        }}
      >
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', minWidth: 'max-content' }}>
          {arcs.map(arc => (
            <div key={arc.key} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', gap: 3 }}>
                {arc.levels.map(lvl => (
                  <div
                    key={lvl}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: nodeColors[lvl],
                    }}
                  />
                ))}
              </div>
              <span
                style={{
                  fontSize: 10,
                  fontFamily: FONT.mono,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: TEXT.muted,
                }}
              >
                {arc.name} · {arcLabel(arc.levels)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ INTERACTIVE DIAGRAM ═══ */}
      <div style={{ overflowX: 'auto', paddingBottom: 16 }}>
        <div
          ref={diagramRef}
          style={{ position: 'relative', minWidth: `${COL_W * 7}px` }}
        >
          {/* SVG connection lines */}
          <svg
            ref={svgRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              overflow: 'visible',
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
          />

          {/* Arc Headers */}
          <div style={{ display: 'flex', marginBottom: 28, gap: 0 }}>
            {arcs.map(arc => (
              <ArcHeader key={arc.key} arc={arc} />
            ))}
          </div>

          {/* Node Grid */}
          <div style={{ display: 'flex', gap: 0, alignItems: 'center', position: 'relative' }}>
            {columns.map((col, colIdx) => (
              <div
                key={colIdx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: `0 0 ${COL_W}px`,
                  padding: `0 ${GAP_X / 2}px`,
                  gap: `${GAP_Y}px`,
                }}
              >
                {col.map(level => (
                  <LevelNode
                    key={level}
                    level={level}
                    onMouseEnter={handleNodeEnter}
                    onMouseMove={handleNodeMove}
                    onMouseLeave={handleNodeLeave}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ TOOLTIP ═══ */}
      {hoveredLevel && (
        <Tooltip
          level={hoveredLevel}
          position={tooltipPos}
          onMouseEnter={handleTooltipEnter}
          onMouseLeave={handleTooltipLeave}
        />
      )}

      {/* ═══ CORE INSIGHT BOX ═══ */}
      <div style={{ maxWidth: 680, margin: '32px auto 0', padding: '0' }}>
        <div
          style={{
            borderRadius: 12,
            padding: 24,
            marginBottom: 20,
            background: 'linear-gradient(135deg, rgba(160,128,255,0.1), rgba(160,128,255,0.02))',
            border: '1px solid rgba(160,128,255,0.2)',
          }}
        >
          <p style={{ fontSize: 16, lineHeight: 1.7, color: TEXT.secondary, marginBottom: 20, marginTop: 0 }}>
            The frameworks are interdependent because humans do not experience life in separate categories.
          </p>

          {/* Chain sequence */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { from: 'Nervous system state', verb: 'shapes', to: 'perception', color: '#26C6DA' },
              { from: 'Perception', verb: 'shapes', to: 'meaning', color: '#66BB6A' },
              { from: 'Meaning', verb: 'shapes', to: 'identity', color: '#8BC34A' },
              { from: 'Identity', verb: 'shapes', to: 'behavior', color: '#FFCA28' },
              { from: 'Behavior', verb: 'shapes', to: 'what gets rewarded', color: '#FFA726' },
              { from: 'Reward', verb: 'shapes', to: 'the nervous system again', color: '#FF5722' },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: step.color,
                  }}
                />
                <span style={{ fontSize: 13, color: step.color, fontWeight: 600 }}>
                  {step.from}
                </span>
                <span style={{ fontSize: 13, color: TEXT.muted }}>
                  {step.verb}
                </span>
                <span style={{ fontSize: 13, color: TEXT.secondary }}>
                  {step.to}
                </span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4, marginLeft: 14 }}>
              <span style={{ fontSize: 11, fontFamily: FONT.mono, color: TEXT.muted }}>
                ↩ back to start
              </span>
            </div>
          </div>
        </div>

        {/* Key insight */}
        <div
          style={{
            borderRadius: 12,
            padding: 18,
            background: 'linear-gradient(135deg, rgba(239,68,68,0.08), rgba(239,68,68,0.02))',
            border: '1px solid rgba(239,68,68,0.2)',
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.6, color: TEXT.primary, margin: 0 }}>
            This loop is how <span style={{ color: '#ef4444' }}>trauma becomes culture</span>,
            and how <span style={{ color: '#ef4444' }}>culture becomes trauma</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   LEVEL NODE
   ══════════════════════════════════════════════════════════ */

function ArcHeader({ arc }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        flex: `0 0 ${COL_W}px`,
        padding: `0 ${GAP_X / 2}px`,
        position: 'relative',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          height: 2,
          borderRadius: 1,
          marginBottom: 8,
          background: getArcGradient(arc.levels),
        }}
      />
      <div
        style={{
          fontSize: 9,
          fontFamily: FONT.mono,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: TEXT.muted,
        }}
      >
        {arc.name} · {arcLabel(arc.levels)}
      </div>
      <div
        style={{
          fontSize: 11,
          fontStyle: 'italic',
          color: TEXT.hint,
        }}
      >
        {arc.tag}
      </div>

      {/* Hover tooltip with full description */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: GAP_X / 2,
            right: GAP_X / 2,
            marginTop: 6,
            padding: '10px 12px',
            borderRadius: 8,
            background: BG.surface,
            border: `1px solid ${BORDER.hover}`,
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            zIndex: 10,
            minWidth: 180,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontFamily: FONT.mono,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: getArcGradient(arc.levels),
              marginBottom: 4,
              background: arc.levels.length > 1 ? undefined : 'none',
            }}
          >
            {arc.name}
          </div>
          <div
            style={{
              fontSize: 12,
              lineHeight: 1.5,
              color: TEXT.secondary,
            }}
          >
            {arc.desc}
          </div>
        </div>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   LEVEL NODE
   ══════════════════════════════════════════════════════════ */

function LevelNode({ level, onMouseEnter, onMouseMove, onMouseLeave }) {
  const data = levelData[level]
  const color = nodeColors[level]

  return (
    <div
      id={`node-${level}`}
      style={{
        width: `${NODE_W}px`,
        minHeight: 80,
        padding: '12px 14px',
        zIndex: 2,
        position: 'relative',
        borderRadius: 8,
        cursor: 'pointer',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        background: `${color}47`,
        border: `1.5px solid ${color}B3`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = `0 8px 24px ${hexToRgba(color, 0.3)}`
        onMouseEnter(level, e)
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        onMouseLeave()
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontFamily: FONT.mono,
          letterSpacing: '0.08em',
          opacity: 0.6,
          color: '#fff',
        }}
      >
        L·{String(level).padStart(2, '0')}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1, margin: '4px 0', color: '#fff' }}>
        {data.symbol}
      </div>
      <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.3, color: '#fff' }}>
        {data.title}
      </div>
      <div
        style={{
          fontSize: 9,
          fontFamily: FONT.mono,
          opacity: 0.55,
          marginTop: 4,
          color: '#fff',
        }}
      >
        {data.subtitle}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   TOOLTIP
   ══════════════════════════════════════════════════════════ */

function Tooltip({ level, position, onMouseEnter, onMouseLeave }) {
  const data = levelData[level]
  const color = nodeColors[level]
  const arc = findArc(level)

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 9999,
        width: 320,
        borderRadius: 12,
        padding: 20,
        left: position.x,
        top: position.y,
        background: BG.surface,
        border: `1px solid ${BORDER.hover}`,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        pointerEvents: 'auto',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Header */}
      <div
        style={{
          fontSize: 10,
          fontFamily: FONT.mono,
          letterSpacing: '0.08em',
          marginBottom: 4,
          color: TEXT.hint,
        }}
      >
        Level {level} · {data.symbol}
      </div>
      <h4
        style={{
          fontSize: 17,
          fontWeight: 600,
          marginBottom: 8,
          marginTop: 0,
          color: TEXT.primary,
        }}
      >
        {data.title}
      </h4>
      <div
        style={{
          fontSize: 9.5,
          fontFamily: FONT.mono,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: 16,
          paddingBottom: 14,
          color,
          borderBottom: `1px solid ${BORDER.default}`,
        }}
      >
        {arc?.name} · Level {level} of 12
      </div>

      {/* Summary */}
      <div style={{ marginBottom: 12 }}>
        <div
          style={{
            fontSize: 9,
            fontFamily: FONT.mono,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: 6,
            color: TEXT.hint,
          }}
        >
          Summary
        </div>
        <p
          style={{
            fontSize: 12,
            lineHeight: 1.6,
            color: TEXT.secondary,
            margin: 0,
          }}
        >
          {data.summary}
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, margin: '12px 0', background: BORDER.default }} />

      {/* Established research */}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            fontSize: 9,
            fontFamily: FONT.mono,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: 6,
            color: TEXT.hint,
          }}
        >
          Established research
        </div>
        <p
          style={{
            fontSize: 12,
            lineHeight: 1.6,
            color: TEXT.secondary,
            margin: 0,
          }}
        >
          {data.buildsOn}
        </p>
      </div>

      {/* Link */}
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 11,
          fontFamily: FONT.mono,
          letterSpacing: '0.04em',
          padding: '8px 12px',
          borderRadius: 6,
          color: TEXT.secondary,
          border: `1px solid ${BORDER.default}`,
          textDecoration: 'none',
          transition: 'border-color 200ms ease',
        }}
      >
        View on teg-blue.com →
      </a>
    </div>
  )
}
