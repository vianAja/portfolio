export type HeadingLevel = 1 | 2 | 3;

export interface MarkdownHeading {
  id: string;
  level: HeadingLevel;
  text: string;
}

function removeInlineMarkdown(input: string): string {
  return input
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[*_~]/g, "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function createSlugger() {
  const counts = new Map<string, number>();

  return (text: string): string => {
    const fallback = "section";
    const base = slugifyHeading(text) || fallback;
    const count = counts.get(base) ?? 0;

    counts.set(base, count + 1);

    return count === 0 ? base : `${base}-${count}`;
  };
}

export function extractHeadings(content: string): MarkdownHeading[] {
  const getSlug = createSlugger();
  const headings: MarkdownHeading[] = [];

  for (const rawLine of content.split(/\r?\n/)) {
    const match = rawLine.match(/^(#{1,3})\s+(.+)$/);
    if (!match) {
      continue;
    }

    const level = match[1].length as HeadingLevel;
    const cleanedText = removeInlineMarkdown(match[2]);

    if (!cleanedText) {
      continue;
    }

    headings.push({
      id: getSlug(cleanedText),
      level,
      text: cleanedText,
    });
  }

  return headings;
}
