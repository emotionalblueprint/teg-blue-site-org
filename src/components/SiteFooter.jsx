import { FONT, SPACING, TEXT, TRANSITION } from "../styles/tokens";
import { SpectrumBar } from "./SharedComponents";
import { FOOTER_COPY, getSiteCopy } from "../i18n/site-copy";

export default function SiteFooter({ locale = "en" }) {
  const copy = getSiteCopy(FOOTER_COPY, locale);

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: SPACING.containerMax,
        margin: "0 auto",
        padding: `44px ${SPACING.pagePadding}`,
        textAlign: "center",
      }}
    >
      <SpectrumBar variant="pattern" />

      <nav
        style={{
          marginTop: 22,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px 22px",
        }}
        aria-label={copy.ariaLabel}
      >
        {copy.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{
              fontFamily: FONT.display,
              fontSize: 13,
              color: TEXT.secondary,
              textDecoration: "none",
              transition: `color ${TRANSITION.normal}`,
            }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <p style={{ marginTop: 22, fontSize: 12, color: TEXT.muted, lineHeight: 1.7 }}>
        © {new Date().getFullYear()} TEG-Blue · Anna Paretas-Artacho
      </p>

      <p style={{ marginTop: 8, fontFamily: FONT.mono, fontSize: 10, color: TEXT.micro, lineHeight: 1.6 }}>
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          rel="license noopener noreferrer"
          target="_blank"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          CC BY 4.0
        </a>
        {copy.licenseText}
      </p>

      <style>{`.footer-link:hover { color: var(--text-primary); }`}</style>
    </footer>
  );
}
