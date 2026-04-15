import fs from "fs";
import path from "path";
import matter from "gray-matter";

const competitionDir = path.join(process.cwd(), "competition");

export interface CompetitionMeta {
  slug: string;
  title: string;
  organizer: string;
  level: string;
  year: string;
  result: string;
  date: string;
  outline: string[];
  certificateTitle: string;
  certificateImage: string;
  certificateFile?: string;
  certificateLink?: string;
}

export interface CompetitionEntry {
  meta: CompetitionMeta;
  content: string;
}

export function getAllCompetitions(): CompetitionEntry[] {
  if (process.env.NODE_ENV === "development") {
    if (!fs.existsSync(competitionDir)) return [];

    const files = fs
      .readdirSync(competitionDir)
      .filter((f) => f.endsWith(".md") && fs.statSync(path.join(competitionDir, f)).size > 0);

    return files
      .map((filename) => {
        const filePath = path.join(competitionDir, filename);
        const raw = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(raw);
        const slug = filename.replace(/\.md$/, "");

        return {
          meta: {
            slug,
            title: data.title ?? slug,
            organizer: data.organizer ?? "",
            level: data.level ?? "",
            year: data.year ? String(data.year) : "",
            result: data.result ?? "",
            date: data.date ? String(data.date) : "2000-01-01",
            outline: Array.isArray(data.outline)
              ? data.outline.filter((item): item is string => typeof item === "string")
              : [],
            certificateTitle: data.certificateTitle ?? data.title ?? slug,
            certificateImage: data.certificateImage ?? "/assets/img/thumb.png",
            certificateFile: data.certificateFile ?? null,
            certificateLink: data.certificateLink ?? null,
          },
          content,
        } as CompetitionEntry;
      })
      .sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const competitionsData = require("../data/generated-competition-data.json") as CompetitionEntry[];
    return competitionsData.sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
  } catch (e) {
    console.error("Failed to load competition manifest, falling back to empty list.", e);
    return [];
  }
}
