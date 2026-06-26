/**
 * TEG-Blue — Content Loader
 * 
 * Reads JSON content files from /content/ directory.
 * Resolves connections between nodes.
 * Used by getStaticProps and getStaticPaths.
 */

import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

// ─── LOAD SINGLE NODE ────────────────────────────────

export function loadNode(type, slug) {
  const dirMap = {
    publication: "publications",
    "working-paper": "publications",
    theory: "theories",
    glossary: "glossary",
    framework: "frameworks",
  };

  const dir = dirMap[type] || type;
  const filePath = path.join(CONTENT_DIR, dir, `${slug}.json`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

// ─── LOAD ALL NODES OF A TYPE ────────────────────────

export function loadAllNodes(type) {
  const dirMap = {
    publication: "publications",
    "working-paper": "publications",
    theory: "theories",
    glossary: "glossary",
    framework: "frameworks",
  };

  const dir = dirMap[type] || type;
  const dirPath = path.join(CONTENT_DIR, dir);

  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dirPath, f), "utf-8");
      return JSON.parse(raw);
    })
    .sort((a, b) => {
      // Sort by date (newest first) if available, else by title
      if (a.date && b.date) return b.date.localeCompare(a.date);
      return a.title.localeCompare(b.title);
    });
}

// ─── LOAD ALL CONTENT (for hub page, search, sitemap) ─

export function loadAllContent() {
  const types = ["publications", "theories", "glossary", "frameworks"];
  const all = [];

  for (const type of types) {
    const dirPath = path.join(CONTENT_DIR, type);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".json"));
    for (const file of files) {
      const raw = fs.readFileSync(path.join(dirPath, file), "utf-8");
      all.push(JSON.parse(raw));
    }
  }

  return all;
}

// ─── RESOLVE CONNECTIONS ─────────────────────────────
// Enriches connection targets with title and summary from their content files.

export function resolveConnections(node) {
  if (!node.connections || node.connections.length === 0) return node;

  const enriched = node.connections.map((conn) => {
    const target = loadNode(conn.targetType, conn.targetSlug);
    return {
      ...conn,
      targetTitle: target?.title || conn.targetSlug,
      targetSummary: target?.summary || "",
      targetStatus: target?.status || "planned",
      targetAuthor: target?.originAuthor || target?.author || "",
    };
  });

  return { ...node, connections: enriched };
}

// ─── GET ALL SLUGS (for getStaticPaths) ──────────────

export function getAllSlugs(type) {
  const dirMap = {
    publication: "publications",
    theory: "theories",
    glossary: "glossary",
    framework: "frameworks",
  };

  const dir = dirMap[type] || type;
  const dirPath = path.join(CONTENT_DIR, dir);

  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}

// ─── GLOSSARY LOOKUP (for inline tooltips) ───────────

let glossaryCache = null;

export function getGlossaryLookup() {
  if (glossaryCache) return glossaryCache;

  const terms = loadAllNodes("glossary");
  glossaryCache = {};

  for (const term of terms) {
    glossaryCache[term.slug] = {
      title: term.title,
      definition: term.definition || term.summary,
      slug: term.slug,
    };
  }

  return glossaryCache;
}
