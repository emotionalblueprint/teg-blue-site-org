import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba } from "@/src/styles/tokens";

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
        background: `linear-gradient(135deg, ${hexToRgba(SPECTRUM.azure, 0.08)}, ${hexToRgba(SPECTRUM.indigo, 0.05)}), ${BG.diagram}`,
        border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.18)}`,
        borderRadius: RADIUS.lg,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.025)",
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
              color: SPECTRUM.azure,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                background: SPECTRUM.azure,
                boxShadow: `0 0 16px ${hexToRgba(SPECTRUM.azure, 0.45)}`,
              }}
            />
            {eyebrow}
          </div>
          <h2
            id="review-status-heading"
            style={{
              margin: 0,
              maxWidth: 720,
              fontSize: "clamp(18px, 2.4vw, 22px)",
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
                background: BG.card,
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
                  color: point.color,
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
