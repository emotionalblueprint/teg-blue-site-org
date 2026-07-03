import { TEXT, FONT, MAIN_ORG, PATTERN_GRADIENT } from "../styles/tokens";
import BadgePill from "./BadgePill";

const HERO_CSS = `
  .researcher-hero {
    position: relative;
    padding: 50px 0 32px;
    margin-bottom: 34px;
    border-bottom: 1px solid var(--border-default);
  }

  .researcher-hero::before {
    content: "";
    position: absolute;
    inset: 18px 0 0;
    pointer-events: none;
    background:
      linear-gradient(90deg, color-mix(in srgb, var(--blue-200) 7%, transparent) 1px, transparent 1px),
      linear-gradient(0deg, color-mix(in srgb, var(--blue-200) 5%, transparent) 1px, transparent 1px);
    background-size: 72px 72px, 72px 72px;
    mask-image: linear-gradient(90deg, black, transparent 72%);
    -webkit-mask-image: linear-gradient(90deg, black, transparent 72%);
    opacity: 0.62;
  }

  .researcher-hero-grid {
    position: relative;
    max-width: 780px;
  }

  .researcher-hero-title {
    max-width: 780px;
    margin: 0 0 12px;
    color: var(--text-primary);
    font-size: 48px;
    font-weight: 760;
    line-height: 1.03;
    letter-spacing: 0;
  }

  .researcher-hero-accent {
    width: min(100%, 520px);
    height: 4px;
    margin-top: 22px;
    border-radius: 4px;
    background: var(--hero-accent-gradient);
  }

  @media (max-width: 860px) {
    .researcher-hero {
      padding-top: 38px;
    }

    .researcher-hero-title {
      font-size: 38px;
    }
  }

  @media (max-width: 520px) {
    .researcher-hero {
      padding-top: 32px;
      margin-bottom: 28px;
    }

    .researcher-hero-title {
      font-size: 31px;
      line-height: 1.08;
    }
  }
`;

/**
 * ResearcherHero — Standardized editorial hero section with badge pill,
 * precise title, and a quiet accent rule.
 *
 * @param {string} badge - Badge pill text (e.g., "FOR RESEARCHERS")
 * @param {string} title - Main title
 * @param {string} subtitle - Optional italic subtitle
 * @param {string} description - Body description
 * @param {boolean} showAccentBar - Whether to show the gradient accent bar (default true)
 */
export default function ResearcherHero({
  badge,
  title,
  subtitle,
  description,
  showAccentBar = true,
}) {
  return (
    <div className="researcher-hero" style={{ "--hero-accent-gradient": PATTERN_GRADIENT }}>
      <style dangerouslySetInnerHTML={{ __html: HERO_CSS }} />
      <div className="researcher-hero-grid">
        <div>
          {badge && (
            <div style={{ marginBottom: 16 }}>
              <BadgePill color={MAIN_ORG.accent}>{badge}</BadgePill>
            </div>
          )}

          <h1 className="researcher-hero-title">{title}</h1>

          {subtitle && (
            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: TEXT.muted,
                margin: "0 0 14px",
                fontFamily: FONT.diagram,
                letterSpacing: 0,
              }}
            >
              {subtitle}
            </p>
          )}

          {description && (
            <p
              style={{
                fontSize: 15,
                color: TEXT.secondary,
                lineHeight: 1.7,
                margin: 0,
                maxWidth: 690,
                position: "relative",
              }}
            >
              {description}
            </p>
          )}
          {showAccentBar && <div className="researcher-hero-accent" aria-hidden="true" />}
        </div>
      </div>
    </div>
  );
}
