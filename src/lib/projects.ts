import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDir = path.join(process.cwd(), "docs");

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image?: string;
  link?: string;
}

export function getAllProjects(): ProjectMeta[] {
  if (!fs.existsSync(docsDir)) return [];

  const files = fs
    .readdirSync(docsDir)
    .filter((f) => f.endsWith(".md") && fs.statSync(path.join(docsDir, f)).size > 0);

  return files
    .map((filename) => {
      const filePath = path.join(docsDir, filename);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      const slug = filename.replace(/\.md$/, "");
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        tags: data.tags ?? [],
        date: data.date ? String(data.date) : "",
        image: data.image ?? null,
        link: data.link ?? null,
      } as ProjectMeta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getProjectBySlug(slug: string): { meta: ProjectMeta; content: string } | null {
  const filePath = path.join(docsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      tags: data.tags ?? [],
      date: data.date ? String(data.date) : "",
      image: data.image ?? null,
      link: data.link ?? null,
    },
    content,
  };
}
