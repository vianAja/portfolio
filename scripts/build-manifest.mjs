import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");
const projectsDir = path.join(process.cwd(), "project");
const timelinesDir = path.join(process.cwd(), "timelines");
const competitionDir = path.join(process.cwd(), "competition");
const outputDir = path.join(process.cwd(), "src/data");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function processBlog() {
  if (!fs.existsSync(postsDir)) return [];
  console.log("Processing blog posts...");
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md") && fs.statSync(path.join(postsDir, f)).size > 0);
  
  const data = files.map(filename => {
    const filePath = path.join(postsDir, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(raw);
    const id = filename.replace(/\.md$/, "");
    
    const tags = Array.isArray(frontmatter.tags) ? frontmatter.tags : [];
    const category = tags.length > 0 ? tags[0] : (frontmatter.category ?? "General");
    const image = frontmatter.image ?? frontmatter['thumbnail-img'] ?? frontmatter['cover-img'] ?? null;
    const coverImg = frontmatter['cover-img'] ?? null;
    
    let date = frontmatter.date ? String(frontmatter.date) : null;
    if (!date) {
      const dateMatch = id.match(/^(\d{4}-\d{1,2}-\d{1,2})/);
      if (dateMatch) date = dateMatch[1];
    }
    if (!date) date = "2000-01-01";

    return {
      meta: {
        id,
        title: frontmatter.title ?? id,
        excerpt: frontmatter.excerpt ?? frontmatter.subtitle ?? "",
        category,
        tags,
        readTime: frontmatter.readTime ?? "5 Min Read",
        date,
        image,
        featured: frontmatter.featured ?? false,
        color: frontmatter.color ?? "#5ED0D3",
        coverImg,
      },
      content
    };
  });
  
  fs.writeFileSync(path.join(outputDir, "generated-blog-data.json"), JSON.stringify(data, null, 2));
  console.log(`Successfully generated blog manifest with ${data.length} posts.`);
}

function processProjects() {
  if (!fs.existsSync(projectsDir)) return [];
  console.log("Processing projects...");
  const files = fs.readdirSync(projectsDir).filter(f => f.endsWith(".md") && fs.statSync(path.join(projectsDir, f)).size > 0);
  
  const data = files.map(filename => {
    const filePath = path.join(projectsDir, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(raw);
    const slug = filename.replace(/\.md$/, "");
    
    return {
      meta: {
        slug,
        title: frontmatter.title ?? slug,
        description: frontmatter.description ?? "",
        tags: frontmatter.tags ?? [],
        date: frontmatter.date ? String(frontmatter.date) : "",
        image: frontmatter.image ?? null,
        link: frontmatter.link ?? null,
      },
      content
    };
  });
  
  fs.writeFileSync(path.join(outputDir, "generated-projects-data.json"), JSON.stringify(data, null, 2));
  console.log(`Successfully generated projects manifest with ${data.length} projects.`);
}

function processTimelines() {
  if (!fs.existsSync(timelinesDir)) return [];
  console.log("Processing timelines...");
  const files = fs.readdirSync(timelinesDir).filter(f => f.endsWith(".md") && fs.statSync(path.join(timelinesDir, f)).size > 0);
  
  const data = files.map(filename => {
    const filePath = path.join(timelinesDir, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(raw);
    const id = filename.replace(/\.md$/, "");
    
    return {
      meta: {
        id,
        title: frontmatter.title ?? id,
        company: frontmatter.company ?? "",
        date: frontmatter.date ? String(frontmatter.date) : "2000-01-01",
        displayDate: frontmatter.displayDate ?? "",
        icon: frontmatter.icon ?? "work",
        image: frontmatter.image ?? null,
        tags: frontmatter.tags ?? [],
        projects: Array.isArray(frontmatter.projects)
          ? frontmatter.projects.filter((project) => typeof project === "string")
          : [],
      },
      content
    };
  });
  
  fs.writeFileSync(path.join(outputDir, "generated-timelines-data.json"), JSON.stringify(data, null, 2));
  console.log(`Successfully generated timelines manifest with ${data.length} entries.`);
}

function processCompetitions() {
  if (!fs.existsSync(competitionDir)) return [];
  console.log("Processing competitions...");
  const files = fs.readdirSync(competitionDir).filter(f => f.endsWith(".md") && fs.statSync(path.join(competitionDir, f)).size > 0);

  const data = files.map(filename => {
    const filePath = path.join(competitionDir, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(raw);
    const slug = filename.replace(/\.md$/, "");

    return {
      meta: {
        slug,
        title: frontmatter.title ?? slug,
        organizer: frontmatter.organizer ?? "",
        level: frontmatter.level ?? "",
        year: frontmatter.year ? String(frontmatter.year) : "",
        result: frontmatter.result ?? "",
        date: frontmatter.date ? String(frontmatter.date) : "2000-01-01",
        outline: Array.isArray(frontmatter.outline)
          ? frontmatter.outline.filter((item) => typeof item === "string")
          : [],
        certificateTitle: frontmatter.certificateTitle ?? frontmatter.title ?? slug,
        certificateImage: frontmatter.certificateImage ?? "/assets/img/thumb.png",
        certificateFile: frontmatter.certificateFile ?? null,
        certificateLink: frontmatter.certificateLink ?? null,
      },
      content
    };
  });

  fs.writeFileSync(path.join(outputDir, "generated-competition-data.json"), JSON.stringify(data, null, 2));
  console.log(`Successfully generated competition manifest with ${data.length} entries.`);
}

try {
  processBlog();
  processProjects();
  processTimelines();
  processCompetitions();
} catch (error) {
  console.error("Error generating manifests:", error);
  process.exit(1);
}
