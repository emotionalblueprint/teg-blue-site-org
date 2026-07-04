import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, contrastColor } from "@/src/styles/tokens";
import { StateBand } from "./StateBand";

const DEFAULT_POINTS = [
  {
    label: "Source literature",
    title: "Includes peer-reviewed research",
    body: "The scientific grounding draws from established fields such as neuroscience, psychology, attachment research, trauma research, stress physiology, interoception, and emotion science.",
    color: SPECTRUM.azure,
  },
  {
    label: "TEG-Blue synthesis",
    title: "Original visual framework",
    body: "The architecture, diagrams, labels, and cross-disciplinary placement are TEG-Blue's integrative contribution, open to scholarly review, correction, replication, and independent testing.",
    color: SPECTRUM.indigo,
  },
];

export default function ReviewStatusPanel({
  eyebrow = "Review status",
  title = "A visual research synthesis grounded in cited science.",
  description = "The underlying source fields are established and cited. The TEG-Blue architecture is an original integrative map, so it should be described as research-grounded and source-traced, not as independently peer-reviewed unless referring to a specific reviewed publication.",
  points = DEFAULT_POINTS,
}) {
  return (
    <section
      aria-labelledby="review-status-heading"
      style={{
        marginBottom: 32,
        padding: "clamp(18px, 3vw, 24px)",
        background: BG.diagram,
        border: `1px solid ${BORDER.default}`,
        borderTop: `4px solid ${SPECTRUM.azure}`,
        borderRadius: RADIUS.lg,
        boxShadow: "0 18px 50px rgba(0, 41, 102, 0.06)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: 18,
        }}
      >
        <div>
          <div style={{ maxWidth: 420, marginBottom: 14 }}>
            <StateBand compact />
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 10,
              fontFamily: FONT.mono,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 0,
              textTransform: "uppercase",
              color: contrastColor(SPECTRUM.azure),
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                background: SPECTRUM.azure,
                boxShadow: "none",
              }}
            />
            {eyebrow}
          </div>
          <h2
            id="review-status-heading"
            style={{
              margin: 0,
              maxWidth: 720,
              fontSize: 22,
              fontWeight: 700,
              lineHeight: 1.18,
              color: TEXT.primary,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              maxWidth: 820,
              margin: "10px 0 0",
              fontSize: 14,
              lineHeight: 1.75,
              color: TEXT.secondary,
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: 1,
            border: `1px solid ${BORDER.default}`,
            borderRadius: RADIUS.md,
            overflow: "hidden",
            background: BORDER.default,
          }}
        >
          {points.map((point) => (
            <div
              key={point.label}
              style={{
                padding: 16,
                background: BG.inset,
                borderTop: `2px solid ${point.color}`,
              }}
            >
              <div
                style={{
                  marginBottom: 7,
                  fontFamily: FONT.mono,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  color: contrastColor(point.color),
                }}
              >
                {point.label}
              </div>
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: 14,
                  fontWeight: 650,
                  color: TEXT.primary,
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: TEXT.secondary,
                }}
              >
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
