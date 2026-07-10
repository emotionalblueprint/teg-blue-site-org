import { isLive } from "@/src/lib/live-paths";

const BASE_URL = "https://teg-blue.org";
const LAST_MODIFIED = "2026-07-10";

const STATIC_PAGES = [
  {
    path: "/",
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/foundations",
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/scientific-foundations",
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/ethics",
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/glossary",
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.65,
  },
];

export default function sitemap() {
  return STATIC_PAGES.filter(({ path }) => isLive(path)).map(
    ({ path, lastModified, changeFrequency, priority }) => ({
      url: path === "/" ? BASE_URL : `${BASE_URL}${path}`,
      lastModified: new Date(lastModified),
      changeFrequency,
      priority,
    })
  );
}
