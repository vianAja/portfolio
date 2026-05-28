import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          background:
            "linear-gradient(135deg, #06131a 0%, #0b1f2a 50%, #12313d 100%)",
          color: "#f7fbfb",
          fontFamily: "Manrope, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 760 }}>
            <div
              style={{
                display: "inline-flex",
                width: "fit-content",
                alignItems: "center",
                gap: 10,
                padding: "10px 16px",
                borderRadius: 9999,
                background: "rgba(94, 208, 211, 0.12)",
                color: "#8be7ea",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 0.5,
              }}
            >
              Najwan Portfolio
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 72,
                lineHeight: 1.02,
                letterSpacing: -2,
                fontWeight: 800,
              }}
            >
              Najwan Octavian Gerrard
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: 34,
                lineHeight: 1.3,
                color: "rgba(247, 251, 251, 0.82)",
                maxWidth: 840,
              }}
            >
              Cloud Infrastructure & DevOps Engineer. OpenStack, Kubernetes,
              Ansible, AWS, dan delivery pelatihan teknis.
            </p>
          </div>

          <div
            style={{
              width: 176,
              height: 176,
              borderRadius: 40,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 64,
              fontWeight: 800,
              color: "#8be7ea",
            }}
          >
            NJ
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 22,
            color: "rgba(247, 251, 251, 0.72)",
          }}
        >
          <span>Based in Kendal, Central Java</span>
          <span>·</span>
          <span>Open to remote</span>
          <span>·</span>
          <span>PT Boer Technology</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
