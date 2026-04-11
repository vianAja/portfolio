import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export interface BlogPostMeta {
  id: string;
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

interface BlogPost {
  meta: BlogPostMeta;
  content: string;
}

// Hybrid Loader: Support for Edge (Cloudflare) via Build-time JSON
export function getAllBlogPosts(): BlogPostMeta[] {
  // Use FS for local development (Hot Reloading)
  if (process.env.NODE_ENV === "development") {
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
        const tags = Array.isArray(data.tags) ? data.tags : [];
        const category = tags.length > 0 ? tags[0] : (data.category ?? "General");
        const image = data.image ?? data['thumbnail-img'] ?? data['cover-img'] ?? null;
        
        const dateMatch = id.match(/^(\d{4}-\d{1,2}-\d{1,2})/);
        const date = data.date ? String(data.date) : (dateMatch ? dateMatch[1] : "2000-01-01");

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
          coverImg: data['cover-img'] ?? null,
        } as BlogPostMeta;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Use pre-built JSON for Production (Cloudflare Edge)
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const blogData = require("../data/generated-blog-data.json") as BlogPost[];
    return blogData
      .map((p) => p.meta)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (e) {
    console.error("Failed to load blog manifest, falling back to empty list.", e);
    return [];
  }
}

export function getBlogPostById(id: string): BlogPost | null {
  if (process.env.NODE_ENV === "development") {
    const filePath = path.join(postsDir, `${id}.md`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const tags = Array.isArray(data.tags) ? data.tags : [];
    const category = tags.length > 0 ? tags[0] : (data.category ?? "General");
    const image = data.image ?? data['thumbnail-img'] ?? data['cover-img'] ?? null;
    
    const dateMatch = id.match(/^(\d{4}-\d{1,2}-\d{1,2})/);
    const date = data.date ? String(data.date) : (dateMatch ? dateMatch[1] : "2000-01-01");

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

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const blogData = require("../data/generated-blog-data.json") as BlogPost[];
    return blogData.find((p) => p.meta.id === id) || null;
  } catch (e) {
    return null;
  }
}
