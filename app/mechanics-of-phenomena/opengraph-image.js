import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "The Mechanics of Phenomena — Observable phenomena reveal the structure underneath";
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
          backgroundColor: "#111729",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Dot grid overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            backgroundImage:
              "radial-gradient(circle at 0px 0px, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Spectrum bar */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "6px",
            background:
              "linear-gradient(90deg, #93CFFF, #5BADFF, #4B8FFF, #4472EE, #5B62D4, #7B8BB0)",
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
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div style={{ marginBottom: "24px", display: "flex" }}>
            <div
              style={{
                padding: "6px 16px",
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#f59e0b",
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
              }}
            >
              MECHANICS
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#f1f5f9",
              lineHeight: 1.2,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            The Mechanics of Phenomena
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              fontStyle: "italic",
              lineHeight: 1.4,
              marginBottom: "32px",
            }}
          >
            Observable phenomena reveal the structure underneath
          </div>

          {/* Detail */}
          <div
            style={{
              fontSize: "15px",
              color: "#64748b",
              lineHeight: 1.5,
            }}
          >
            Long-form essays by Anna Paretas-Artacho
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 80px 32px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "14px",
              color: "#475569",
              letterSpacing: "0.04em",
            }}
          >
            teg-blue.org/mechanics-of-phenomena
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#5BADFF",
              letterSpacing: "0.04em",
            }}
          >
            TEG-Blue Research
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
