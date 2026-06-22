"use client";

import { FONT, SPACING, TEXT } from "../styles/tokens";
import { SpectrumBar } from "./SharedComponents";

export default function SiteFooter() {
  return (
    <footer
      style={{
        maxWidth: SPACING.containerMax,
        margin: "0 auto",
        padding: `32px ${SPACING.pagePadding}`,
        textAlign: "center",
      }}
    >
      <SpectrumBar variant="pattern" />

      <p style={{ fontSize: 11, color: TEXT.micro, marginTop: 16 }}>
        TEG-Blue Research is being rebuilt.
      </p>

      <p
        style={{
          marginTop: 14,
          fontSize: 10,
          fontFamily: FONT.mono,
          color: TEXT.micro,
        }}
      >
        CC-BY-NC-SA-4.0
      </p>
    </footer>
  );
}
