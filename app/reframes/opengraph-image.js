import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "The Common Understanding — What these words actually mean when you trace them back to the nervous system";
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
          backgroundColor: "#0a0f1a",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Spectrum bar */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "6px",
            background:
              "linear-gradient(90deg, #7ABAEB, #4A9BE8, #3B7DE5, #3560CC, #4A50B0, #6B7A99)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "60px 80px",
          }}
        >
          {/* Badge */}
          <div style={{ marginBottom: "24px", display: "flex" }}>
            <div
              style={{
                padding: "6px 16px",
                borderRadius: "100px",
                fontSize: "14px",
                fontWeight: 700,
                color: "#6B7A99",
                backgroundColor: "rgba(107, 122, 153, 0.15)",
                border: "1px solid rgba(107, 122, 153, 0.3)",
              }}
            >
              REFRAMES
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#e2e8f0",
              marginBottom: "16px",
            }}
          >
            The Common Understanding
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              fontStyle: "italic",
              marginBottom: "32px",
            }}
          >
            What these words actually mean when you trace them back to the nervous system
          </div>

          {/* Term pills */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              "Emotions",
              "Trauma",
              "Bias",
              "Empathy",
              "Domination",
              "Projection",
              "Entitlement",
            ].map((term) => (
              <div
                key={term}
                style={{
                  padding: "6px 14px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#94a3b8",
                  backgroundColor: "rgba(107, 122, 153, 0.1)",
                  border: "1px solid rgba(107, 122, 153, 0.2)",
                }}
              >
                {term}
              </div>
            ))}
            <div
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#64748b",
                backgroundColor: "rgba(107, 122, 153, 0.05)",
              }}
            >
              +8 more
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 80px 32px",
          }}
        >
          <div style={{ fontSize: "14px", color: "#475569" }}>
            teg-blue.org/reframes
          </div>
          <div style={{ fontSize: "14px", color: "#4A9BE8", fontWeight: 600 }}>
            TEG-Blue Research
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
