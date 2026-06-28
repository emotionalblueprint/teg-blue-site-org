import { isLive } from "@/src/lib/live-paths";
import {
  getLocaleFromPath,
  getSourcePath,
  normalizePath,
  ROUTE_TRANSLATIONS,
  SUPPORTED_LOCALES,
} from "./config";

export function getLiveLocaleLinks(pathname = "/") {
  const path = normalizePath(pathname);
  const sourcePath = getSourcePath(path);
  const translated = ROUTE_TRANSLATIONS[sourcePath];

  if (!translated) return [];

  return SUPPORTED_LOCALES
    .map((locale) => {
      const href = translated[locale.code];
      return href
        ? {
            ...locale,
            href,
            active: locale.code === getLocaleFromPath(path),
          }
        : null;
    })
    .filter((link) => link && isLive(link.href));
}
