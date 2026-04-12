import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Emotional Somatic System — TEG-Blue Research";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0f1a",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Spectrum bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            display: "flex",
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#7ABAEB" }} />
          <div style={{ flex: 1, backgroundColor: "#4A9BE8" }} />
          <div style={{ flex: 1, backgroundColor: "#3B7DE5" }} />
          <div style={{ flex: 1, backgroundColor: "#3560CC" }} />
          <div style={{ flex: 1, backgroundColor: "#4A50B0" }} />
          <div style={{ flex: 1, backgroundColor: "#6B7A99" }} />
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#6B7A99",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            TEG-Blue Architecture
          </div>

          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 20,
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            The Emotional Somatic System
          </div>

          <div
            style={{
              fontSize: 22,
              color: "#8892a6",
              textAlign: "center",
              maxWidth: 800,
              lineHeight: 1.5,
              marginBottom: 32,
            }}
          >
            Signal + State + Regulation + Perception
          </div>

          {/* Four model cards */}
          <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 20px",
                backgroundColor: "rgba(122, 186, 235, 0.1)",
                borderRadius: 8,
                border: "1px solid rgba(122, 186, 235, 0.25)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "#7ABAEB", marginBottom: 4, letterSpacing: "0.08em" }}>M1</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 4 }}>Emotions as Signals</div>
              <div style={{ fontSize: 12, color: "#7ABAEB" }}>The Nervous System Language</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 20px",
                backgroundColor: "rgba(74, 155, 232, 0.1)",
                borderRadius: 8,
                border: "1px solid rgba(74, 155, 232, 0.25)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "#4A9BE8", marginBottom: 4, letterSpacing: "0.08em" }}>M2</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 4 }}>Nervous System States</div>
              <div style={{ fontSize: 12, color: "#4A9BE8" }}>Physiological Reorganization</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 20px",
                backgroundColor: "rgba(59, 125, 229, 0.1)",
                borderRadius: 8,
                border: "1px solid rgba(59, 125, 229, 0.25)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "#3B7DE5", marginBottom: 4, letterSpacing: "0.08em" }}>M3</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 4 }}>Regulation Capacities</div>
              <div style={{ fontSize: 12, color: "#3B7DE5" }}>Biological Restoration</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 20px",
                backgroundColor: "rgba(53, 96, 204, 0.1)",
                borderRadius: 8,
                border: "1px solid rgba(53, 96, 204, 0.25)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "#3560CC", marginBottom: 4, letterSpacing: "0.08em" }}>M4</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 4 }}>Awareness Capacities</div>
              <div style={{ fontSize: 12, color: "#3560CC" }}>RE, ER, SEA</div>
            </div>
          </div>

          <div style={{ fontSize: 14, color: "#6B7A99" }}>
            Four foundational models for practitioners, researchers, and individuals
          </div>
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "#4A9BE8",
            fontFamily: "monospace",
          }}
        >
          teg-blue.org/emotional-somatic-cycle
        </div>
      </div>
    ),
    { ...size }
  );
}
