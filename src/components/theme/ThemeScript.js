/**
 * ThemeScript - Blocking script to prevent theme flicker
 *
 * Runs synchronously before React hydrates to set the correct
 * theme on <html>, preventing flash of incorrect theme.
 */

const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem('theme');

    // Determine effective theme
    var effectiveTheme = theme;
    if (!theme || theme === 'system') {
      effectiveTheme = 'dark';
    }

    // Apply theme immediately
    document.documentElement.setAttribute('data-theme', effectiveTheme);
    document.documentElement.style.colorScheme = effectiveTheme;
  } catch (e) {
    // Fallback to dark if localStorage is unavailable
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.style.colorScheme = 'dark';
  }
})();
`;

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}

export default ThemeScript;
