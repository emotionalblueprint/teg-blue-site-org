import { FONT, SPACING, TEXT, TRANSITION } from "../styles/tokens";
import { SpectrumBar } from "./SharedComponents";

const LINKS = [
  { label: "Tools ↗", href: "https://teg-blue.com/" },
  { label: "GitHub", href: "https://github.com/emotionalblueprint" },
  { label: "Zenodo", href: "https://zenodo.org/communities/teg-blue" },
  { label: "ORCID", href: "https://orcid.org/0009-0005-2394-7162" },
  { label: "X", href: "https://x.com/tegblue" },
];

export default function SiteFooter() {
  return (
    <footer
      style={{
        maxWidth: SPACING.containerMax,
        margin: "0 auto",
        padding: `40px ${SPACING.pagePadding}`,
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
        aria-label="Footer"
      >
        {LINKS.map((l) => (
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
        © {new Date().getFullYear()} TEG-Blue Research · Anna Paretas-Artacho
      </p>

      <p style={{ marginTop: 8, fontFamily: FONT.mono, fontSize: 10, color: TEXT.micro }}>
        CC-BY-NC-SA-4.0
      </p>

      <style>{`.footer-link:hover { color: var(--text-primary); }`}</style>
    </footer>
  );
}
