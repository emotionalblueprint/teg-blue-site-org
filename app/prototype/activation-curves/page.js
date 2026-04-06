import {
  BG, TEXT, FONT, TYPE_SCALE, SPACING,
} from '@/src/styles/tokens';
import { SiteHeader, SiteFooter, ActivationCurveExplorer } from '@/src/components';

export const metadata = {
  title: 'Activation-Restoration Curves — Prototype | TEG-Blue Research',
  description: 'Prototype: Parametric activation-restoration curves across the nervous system gradient.',
  robots: { index: false, follow: false },
};

export default function ActivationCurvesPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/prototype/activation-curves" />

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: '0 auto',
          padding: `40px ${SPACING.pagePadding} 80px`,
        }}
      >
        <div style={{ marginBottom: 8 }}>
          <span
            style={{
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              fontFamily: FONT.mono,
              textTransform: 'uppercase',
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.hint,
            }}
          >
            Prototype
          </span>
        </div>

        <h1
          style={{
            fontSize: TYPE_SCALE.pageTitle.size,
            fontWeight: TYPE_SCALE.pageTitle.weight,
            letterSpacing: TYPE_SCALE.pageTitle.tracking,
            lineHeight: TYPE_SCALE.pageTitle.lineHeight,
            color: TEXT.primary,
            marginBottom: 8,
          }}
        >
          Activation-Restoration Curves
        </h1>

        <p
          style={{
            fontSize: TYPE_SCALE.body.size,
            lineHeight: TYPE_SCALE.body.lineHeight,
            color: TEXT.muted,
            maxWidth: 640,
            marginBottom: 32,
          }}
        >
          How activation rises and falls across the nervous system gradient.
          Fluid curves return to baseline. Stuck curves do not.
        </p>

        <ActivationCurveExplorer />
      </main>

      <SiteFooter />
    </div>
  );
}
