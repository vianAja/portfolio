import fs from "fs";
import path from "path";
import matter from "gray-matter";

const timelinesDir = path.join(process.cwd(), "timelines");

export interface TimelineMeta {
  id: string;
  title: string;
  company: string;
  date: string;
  displayDate: string;
  icon: string;
  image?: string;
  tags: string[];
  projects: string[];
}

export interface TimelineEntry {
  meta: TimelineMeta;
  content: string;
}

// Hybrid Loader: Support for Edge (Cloudflare) via Build-time JSON
export function getAllTimelines(): TimelineEntry[] {
  if (process.env.NODE_ENV === "development") {
    if (!fs.existsSync(timelinesDir)) return [];
    const files = fs
      .readdirSync(timelinesDir)
      .filter((f) => f.endsWith(".md") && fs.statSync(path.join(timelinesDir, f)).size > 0);

    return files
      .map((filename) => {
        const filePath = path.join(timelinesDir, filename);
        const raw = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(raw);
        const id = filename.replace(/\.md$/, "");
        return {
          meta: {
            id,
            title: data.title ?? id,
            company: data.company ?? "",
            date: data.date ? String(data.date) : "2000-01-01",
            displayDate: data.displayDate ?? "",
            icon: data.icon ?? "work",
            image: data.image ?? null,
            tags: data.tags ?? [],
            projects: Array.isArray(data.projects)
              ? data.projects.filter((project): project is string => typeof project === "string")
              : [],
          },
          content
        } as TimelineEntry;
      })
      .sort((a, b) => (a.meta.date > b.meta.date ? 1 : -1)); // oldest first
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const timelinesData = require("../data/generated-timelines-data.json") as TimelineEntry[];
    return timelinesData.sort((a, b) => (a.meta.date > b.meta.date ? 1 : -1));
  } catch (e) {
    console.error("Failed to load timelines manifest, falling back to empty list.", e);
    return [];
  }
}
