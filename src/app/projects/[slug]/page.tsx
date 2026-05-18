import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MarkdownViewer from "@/components/MarkdownViewer";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.meta.title} | NAJWAN`,
    description: project.meta.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { meta, content } = project;

  return (
    <>
      <NavBar active="Projects" />
      <main className="pt-24">
        {/* Article Header */}
        <header className="relative w-full max-w-7xl mx-auto px-8 mb-16">
          <div className="w-full">
            <div className="w-full">
              <div className="flex items-center gap-3 mb-6">
                <Link
                  href="/projects"
                  className="flex items-center gap-1 text-outline hover:text-primary transition-colors font-label text-[0.6875rem] uppercase tracking-[0.1em]"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  All Projects
                </Link>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-container-highest text-primary font-label text-[0.6875rem] uppercase tracking-[0.1em] px-3 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-[-0.04em] text-on-surface leading-tight mb-6">
                {meta.title}
              </h1>
              <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl">
                {meta.description}
              </p>
              <div className="flex items-center gap-6 mt-8">
                {meta.date && (
                  <p className="text-outline font-label text-xs uppercase tracking-widest">
                    {meta.date}
                  </p>
                )}
                {meta.link && (
                  <a
                    href={meta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-headline text-sm font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-0.5"
                  >
                    View Project
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Hero image */}
          {meta.image && (
            <div className="mt-16 relative aspect-[21/9] w-full rounded-xl overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                alt={meta.title}
                src={meta.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40" />
            </div>
          )}
        </header>

        {/* Content Body */}
        <article className="max-w-7xl mx-auto px-5 md:px-8 mb-24">
          <div className="w-full space-y-4">
             <MarkdownViewer content={content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
