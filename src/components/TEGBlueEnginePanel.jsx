import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba } from "@/src/styles/tokens";

const ENGINE_FLOW = [
  {
    label: "Source science",
    title: "Established fields",
    body: "Neuroscience, attachment, trauma research, stress physiology, emotion science, interoception, social psychology, narcissism research, coercive-control research, and related literatures.",
    color: SPECTRUM.sky,
  },
  {
    label: "Gradient",
    title: "The shared map",
    body: "The Nervous System Gradient organizes state-dependent changes in perception, emotion, body activation, behaviour, empathy, accountability, and repair.",
    color: SPECTRUM.azure,
  },
  {
    label: "Engine",
    title: "Translation rules",
    body: "The TEG-Blue Engine applies the gradient logic to a specific dimension, then maps how that dimension changes across nervous-system states.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Tools",
    title: "Usable interfaces",
    body: "Gradient scales, behaviour maps, emotional tools, and applied views make the underlying pattern visible without changing the underlying logic.",
    color: SPECTRUM.indigo,
  },
  {
    label: "Testing",
    title: "Research surfaces",
    body: "The tools create concrete surfaces for reliability, validity, replication, usefulness, and user-study testing.",
    color: SPECTRUM.slate,
  },
];

const ENGINE_MAPS = [
  "Emotional signals",
  "Perception under safety or threat",
  "Body activation and tempo",
  "Behavioural pattern",
  "Empathy, accountability, and repair",
  "Relational impact and direction of movement",
];

export default function TEGBlueEnginePanel({
  intro = "The Gradient is the map. The Engine is the logic. The tools are the interfaces.",
  compact = false,
}) {
  return (
    <section id="teg-blue-engine" aria-labelledby="teg-blue-engine-heading" style={{ marginBottom: 40 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: 20,
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              marginBottom: 10,
              fontFamily: FONT.mono,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 0,
              textTransform: "uppercase",
              color: SPECTRUM.azure,
            }}
          >
            TEG-Blue Engine
          </div>
          <h2
            id="teg-blue-engine-heading"
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(20px, 2.8vw, 26px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: TEXT.primary,
            }}
          >
            How the gradient becomes tools
          </h2>
          <p
            style={{
              margin: "0 0 14px",
              fontSize: 15,
              lineHeight: 1.75,
              color: TEXT.primary,
              fontWeight: 550,
            }}
          >
            {intro}
          </p>
          <p style={{ margin: "0 0 14px", fontSize: 14, lineHeight: 1.75, color: TEXT.secondary }}>
            The Engine is the operational layer that turns the Nervous System Gradient into usable instruments. It asks: if state changes capacity, what happens to this one dimension across the gradient?
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: TEXT.secondary }}>
            That is why the tools can feel clear without being separate inventions. They are generated from the same state logic, so each tool shows a different view of the same Gradient.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 8,
          }}
        >
          {ENGINE_MAPS.map((item) => (
            <div
              key={item}
              style={{
                minHeight: 66,
                display: "flex",
                alignItems: "center",
                padding: "12px 13px",
                background: BG.card,
                border: `1px solid ${BORDER.default}`,
                borderRadius: RADIUS.md,
                color: TEXT.secondary,
                fontSize: 13,
                lineHeight: 1.35,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
          gap: 8,
          marginTop: 20,
        }}
      >
        {ENGINE_FLOW.map((step, index) => (
          <div
            key={step.label}
            style={{
              position: "relative",
              padding: compact ? 14 : 16,
              background: hexToRgba(step.color, 0.06),
              border: `1px solid ${hexToRgba(step.color, 0.2)}`,
              borderTop: `2px solid ${step.color}`,
              borderRadius: RADIUS.md,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: hexToRgba(step.color, 0.14),
                  color: step.color,
                  fontFamily: FONT.mono,
                  fontSize: 11,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </span>
              <div
                style={{
                  fontFamily: FONT.mono,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  color: step.color,
                }}
              >
                {step.label}
              </div>
            </div>
            <h3 style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 650, color: TEXT.primary }}>
              {step.title}
            </h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.62, color: TEXT.secondary }}>
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 14,
          padding: "12px 14px",
          background: hexToRgba(SPECTRUM.slate, 0.07),
          borderRadius: RADIUS.sm,
          borderLeft: `3px solid ${SPECTRUM.slate}`,
        }}
      >
        <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: TEXT.muted }}>
          <strong style={{ color: TEXT.secondary }}>Research use:</strong> because the tools are generated from the same state logic, they give concrete surfaces for studying reliability, usefulness, validity, and generalizability.
        </p>
      </div>
    </section>
  );
}
