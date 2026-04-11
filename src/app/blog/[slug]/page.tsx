import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MarkdownViewer from "@/components/MarkdownViewer";
import { getBlogPostById, getAllBlogPosts } from "@/lib/blog";
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

  return (
    <>
      <NavBar active="Blog" />
      <main className="pt-24">
        {/* Article Header */}
        <header 
          className="relative w-full pt-6 pb-6 bg-cover bg-center border-b border-outline-variant/10"
          style={meta.coverImg ? { backgroundImage: `url(${meta.coverImg})` } : undefined}
        >
          {meta.coverImg && <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
            <div className="w-full relative flex flex-col lg:flex-row items-end justify-between">
              <div className="w-full">
                <div className="flex items-center gap-3 mb-6">
                  <Link
                    href="/blog"
                    className="flex items-center gap-1 text-outline hover:text-primary transition-colors font-label text-[0.6875rem] uppercase tracking-[0.1em]"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    All Posts
                  </Link>
                  <span className="text-outline/40">·</span>
                  <div className="flex flex-wrap gap-2">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-container-highest text-primary font-label text-[0.6875rem] uppercase tracking-[0.1em] px-3 py-1 rounded-sm shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-outline font-label text-[0.6875rem] uppercase tracking-[0.1em]">
                    {meta.readTime}
                  </span>
                </div>
                <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-white leading-tight mb-8">
                  {meta.title}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/20 shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover"
                      alt="Author portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHqr642FyWGJoOiZp-JrM_4jTdGgu4Pa6IUUVTJk5yGbpt2oQS--BENfMtgrKWDgY_8cvHEFl5rIZVh7ySDomdU0wT3NyVId8T7-z0FnIvUj_USKaVABQFeaOxeL4UFvQTbEHn6W9hFpb-k9Ims7nLVNFKZcafNkyDO0-9EMagi7vIcvXKywrKjT06m3tNxPeYb9poFso6A_GpU83Qn5ria04gCfHP39eF7OghBANpXj-WWGa12zM8SPcEdIJL4_iFUBpa0MPFs-xh"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm tracking-tight drop-shadow-md">Najwan Octavian Gerrard</p>
                    <p className="text-outline font-label text-[0.6875rem] uppercase tracking-wider drop-shadow-md">
                      Lead Curator • {meta.date}
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex w-auto justify-end pl-8">
                <div className="inline-flex flex-col items-end gap-4">
                  <div className="w-[2px] h-32 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
                  <p className="font-headline text-sm text-outline uppercase tracking-widest [writing-mode:vertical-rl] drop-shadow-md">
                    Scroll to Explore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="w-full max-w-7xl mx-auto px-5 md:px-8 mb-24">
          <div className="w-full space-y-8">
            <MarkdownViewer content={content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
