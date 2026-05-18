import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MarkdownViewer from "@/components/MarkdownViewer";
import BlogPostPager from "@/components/BlogPostPager";
import { getBlogPostById, getAllBlogPosts } from "@/lib/blog";
import { extractHeadings } from "@/lib/markdownHeadings";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostById(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} | NAJWAN Blog`,
    description: post.meta.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostById(slug);
  if (!post) notFound();

  const { meta, content } = post;
  const tocItems = extractHeadings(content);
  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((item) => item.id === slug);
  const newerPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const olderPost = currentIndex >= 0 && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <NavBar active="Blog" />
      <main className="pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
        <article className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
          <aside className="hidden lg:block sticky top-28 rounded-xl bg-surface-container-low p-5">
            <p className="text-primary font-label text-[0.7rem] uppercase tracking-[0.12em] mb-4">On this page</p>
            {tocItems.length > 0 ? (
              <nav aria-label="Table of contents">
                <ul className="space-y-1">
                  {tocItems.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className={`block rounded-md px-3 py-2 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition ${
                          heading.level === 1
                            ? "font-semibold text-primary"
                            : heading.level === 2
                              ? "pl-4"
                              : "pl-7 text-on-surface-variant/80"
                        }`}
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : (
              <p className="text-on-surface-variant text-sm">No headings found in this post.</p>
            )}
            <div className="mt-6 border-t border-outline-variant/25 pt-5">
              <BlogPostPager newerPost={newerPost} olderPost={olderPost} />
            </div>
          </aside>

          <div className="space-y-7 min-w-0">
            <header className="rounded-xl bg-surface-container-low p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Link
                  href="/blog"
                  className="flex items-center gap-1 text-primary transition-colors font-label text-[0.6875rem] uppercase tracking-[0.1em]"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  All Posts
                </Link>
                <span className="text-primary/40">·</span>
                <span className="text-primary font-label text-[0.6875rem] uppercase tracking-[0.1em]">{meta.readTime}</span>
                <span className="text-primary/40">·</span>
                <span className="text-primary font-label text-[0.6875rem] uppercase tracking-[0.1em]">{meta.date}</span>
              </div>

              <h1 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface leading-tight mb-4">
                {meta.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-container-high text-primary font-label text-[0.6875rem] uppercase tracking-[0.1em] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="bg-surface-container-lowest rounded-xl p-6 md:p-8 border border-outline-variant/20">
              <MarkdownViewer content={content} />
            </div>

            <div className="lg:hidden">
              <BlogPostPager newerPost={newerPost} olderPost={olderPost} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
