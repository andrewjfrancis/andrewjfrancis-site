// app/writing/_lib/essays.ts

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type EssayFrontmatter = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  year: number;
  excerpt?: string;
  description?: string;
  tags?: string[];
  source?: "local"; // keep tight for now
  pinned?: boolean;
  pinOrder?: number;
};

const CONTENT_DIR = path.join(process.cwd(), "app", "writing", "_content");

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    if (entry.isFile() && fullPath.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

export function getEssayFilePath(slug: string) {
  if (!fs.existsSync(CONTENT_DIR)) return null;

  const allFiles = walk(CONTENT_DIR);
  return (
    allFiles.find((filePath) => path.basename(filePath, ".mdx") === slug) ??
    null
  );
}

export function readEssaySource(slug: string) {
  const filePath = getEssayFilePath(slug);

  if (!filePath || !fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  return {
    frontmatter: parsed.data as EssayFrontmatter,
    content: parsed.content,
  };
}
