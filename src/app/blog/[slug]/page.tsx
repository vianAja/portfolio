import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MarkdownViewer from "@/components/MarkdownViewer";
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

  return (
    <>
      <NavBar active="Blog" />
      <main className="pt-24">
        <article className="w-full max-w-7xl mx-auto px-5 md:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-8 xl:gap-12 items-start">
            <aside className="hidden lg:block sticky top-28 rounded-xl border border-outline-variant/20 bg-surface-container-low/40 p-5">
              <div className="pb-4 mb-4 border-b border-outline-variant/15">
                <p className="text-primary font-label text-[0.6875rem] uppercase tracking-[0.12em]">On this page</p>
              </div>
              {tocItems.length > 0 ? (
                <nav aria-label="Table of contents">
                  <ul className="space-y-1">
                    {tocItems.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className={`block rounded-md px-3 py-2 text-sm text-primary hover:text-primary hover:bg-surface-container-high transition ${
                            heading.level === 1
                              ? "font-semibold"
                              : heading.level === 2
                                ? "pl-4"
                                : "pl-7 text-primary/80"
                          }`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ) : (
                <p className="text-on-surface/70 text-sm">No headings found in this post.</p>
              )}
            </aside>

            <div className="space-y-8 min-w-0">
              <header className="rounded-2xl border border-outline-variant/20 bg-surface-container-low/40 p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <Link
                    href="/blog"
                    className="flex items-center gap-1 text-primary hover:text-primary transition-colors font-label text-[0.6875rem] uppercase tracking-[0.1em]"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    All Posts
                  </Link>
                  <span className="text-primary/40">·</span>
                  <span className="text-primary font-label text-[0.6875rem] uppercase tracking-[0.1em]">{meta.readTime}</span>
                  <span className="text-primary/40">·</span>
                  <span className="text-primary font-label text-[0.6875rem] uppercase tracking-[0.1em]">{meta.date}</span>
                </div>
                <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-[-0.03em] text-white leading-tight mb-5">
                  {meta.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-highest text-primary font-label text-[0.6875rem] uppercase tracking-[0.1em] px-3 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              <MarkdownViewer content={content} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
