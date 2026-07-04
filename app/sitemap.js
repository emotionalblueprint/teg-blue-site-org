import { isLive } from "@/src/lib/live-paths";

const BASE_URL = "https://teg-blue.org";

const STATIC_PAGES = [
  {
    path: "/",
    lastModified: "2026-07-04",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    lastModified: "2026-07-04",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/foundations",
    lastModified: "2026-07-04",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/methodology",
    lastModified: "2026-07-04",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/scientific-foundations",
    lastModified: "2026-07-04",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/ethics",
    lastModified: "2026-07-04",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/publications",
    lastModified: "2026-07-04",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/glossary",
    lastModified: "2026-07-04",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/collaborate",
    lastModified: "2026-07-04",
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
