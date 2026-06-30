import { isLive } from "@/src/lib/live-paths";

const BASE_URL = "https://teg-blue.org";

const STATIC_PAGES = [
  {
    path: "/",
    lastModified: "2026-06-30",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    lastModified: "2026-06-30",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/foundations",
    lastModified: "2026-06-30",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/methodology",
    lastModified: "2026-06-30",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/scientific-foundations",
    lastModified: "2026-06-30",
    changeFrequency: "monthly",
    priority: 0.8,
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
