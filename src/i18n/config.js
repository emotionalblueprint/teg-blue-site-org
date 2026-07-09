export const BASE_URL = "https://teg-blue.org";

export const DEFAULT_LOCALE = "en";
export const SPANISH_LOCALE = "es";

export const SUPPORTED_LOCALES = [
  { code: DEFAULT_LOCALE, label: "EN", name: "English" },
  { code: SPANISH_LOCALE, label: "ES", name: "Español" },
];

export const ROUTE_TRANSLATIONS = {
  "/": {
    en: "/",
    es: "/es",
  },
  "/glossary": {
    en: "/glossary",
    es: "/es/glossary",
  },
};

export function normalizePath(pathname = "/") {
  if (!pathname) return "/";
  const path = pathname.split("?")[0].split("#")[0] || "/";
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function getLocaleFromPath(pathname = "/") {
  const path = normalizePath(pathname);
  if (path === "/es" || path.startsWith("/es/")) return SPANISH_LOCALE;
  return DEFAULT_LOCALE;
}

export function getSourcePath(pathname = "/") {
  const path = normalizePath(pathname);
  if (path === "/es") return "/";
  if (path.startsWith("/es/")) return path.slice(3) || "/";
  return path;
}
