import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "project");

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image?: string;
  link?: string;
}

interface Project {
  meta: ProjectMeta;
  content: string;
}

// Hybrid Loader: Support for Edge (Cloudflare) via Build-time JSON
export function getAllProjects(): ProjectMeta[] {
  if (process.env.NODE_ENV === "development") {
    if (!fs.existsSync(projectsDir)) return [];
    const files = fs
      .readdirSync(projectsDir)
      .filter((f) => f.endsWith(".md") && fs.statSync(path.join(projectsDir, f)).size > 0);

    return files
      .map((filename) => {
        const filePath = path.join(projectsDir, filename);
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

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const projectsData = require("../data/generated-projects-data.json") as Project[];
    return projectsData
      .map((p) => p.meta)
      .sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch (e) {
    console.error("Failed to load projects manifest, falling back to empty list.", e);
    return [];
  }
}

export function getProjectBySlug(slug: string): Project | null {
  if (process.env.NODE_ENV === "development") {
    const filePath = path.join(projectsDir, `${slug}.md`);
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

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const projectsData = require("../data/generated-projects-data.json") as Project[];
    return projectsData.find((p) => p.meta.slug === slug) || null;
  } catch (e) {
    return null;
  }
}
