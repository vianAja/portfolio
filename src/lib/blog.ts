import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export interface BlogPostMeta {
  id: string; // slug
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  image?: string;
  featured?: boolean;
  color?: string;
  coverImg?: string;
}

export function getAllBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDir)) return [];

  const files = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md") && fs.statSync(path.join(postsDir, f)).size > 0);

  return files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      const id = filename.replace(/\.md$/, "");

      // Handle tags as category
      const tags = Array.isArray(data.tags) ? data.tags : [];
      const category = tags.length > 0 ? tags[0] : (data.category ?? "General");

      // Handle image fallbacks
      const image = data.image ?? data['thumbnail-img'] ?? data['cover-img'] ?? null;
      const coverImg = data['cover-img'] ?? null;

      // Extract date from filename if missing
      let date = data.date ? String(data.date) : null;
      if (!date) {
        const dateMatch = id.match(/^(\d{4}-\d{1,2}-\d{1,2})/);
        if (dateMatch) {
          date = dateMatch[1];
        }
      }
      if (!date) date = "2000-01-01"; // Fallback for very old/unknown

      return {
        id,
        title: data.title ?? id,
        excerpt: data.excerpt ?? data.subtitle ?? "",
        category,
        tags,
        readTime: data.readTime ?? "5 Min Read",
        date,
        image,
        featured: data.featured ?? false,
        color: data.color ?? "#5ED0D3",
        coverImg,
      } as BlogPostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostById(id: string): { meta: BlogPostMeta; content: string } | null {
  const filePath = path.join(postsDir, `${id}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  // Handle tags as category
  const tags = Array.isArray(data.tags) ? data.tags : [];
  const category = tags.length > 0 ? tags[0] : (data.category ?? "General");

  // Handle image fallbacks
  const image = data.image ?? data['thumbnail-img'] ?? data['cover-img'] ?? null;

  // Extract date from filename if missing
  let date = data.date ? String(data.date) : null;
  if (!date) {
    const dateMatch = id.match(/^(\d{4}-\d{1,2}-\d{1,2})/);
    if (dateMatch) {
      date = dateMatch[1];
    }
  }
  if (!date) date = "2000-01-01";

  return {
    meta: {
      id,
      title: data.title ?? id,
      excerpt: data.excerpt ?? data.subtitle ?? "",
      category,
      tags,
      readTime: data.readTime ?? "5 Min Read",
      date,
      image,
      featured: data.featured ?? false,
      color: data.color ?? "primary",
    },
    content,
  };
}
