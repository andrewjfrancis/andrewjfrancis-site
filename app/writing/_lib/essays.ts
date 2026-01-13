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
  tags?: string[];
  source?: "local"; // keep tight for now
  pinned?: boolean;
  pinOrder?: number;
};

const CONTENT_DIR = path.join(process.cwd(), "app", "writing", "_content");

export function getEssayFilePath(slug: string) {
  return path.join(CONTENT_DIR, `${slug}.mdx`);
}

export function readEssaySource(slug: string) {
  const filePath = getEssayFilePath(slug);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  return {
    frontmatter: parsed.data as EssayFrontmatter,
    content: parsed.content,
  };
}
