import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const theoriesDir = path.join(process.cwd(), "content", "theories");

  if (!fs.existsSync(theoriesDir)) {
    return NextResponse.json([]);
  }

  const files = fs.readdirSync(theoriesDir).filter((f) => f.endsWith(".json"));

  const theories = files.map((file) => {
    const filePath = path.join(theoriesDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  });

  // Sort alphabetically by title
  theories.sort((a, b) => a.title.localeCompare(b.title));

  return NextResponse.json(theories);
}
