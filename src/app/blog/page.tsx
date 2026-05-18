import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";
import CategoryDropdown from "@/components/CategoryDropdown";

export const metadata = {
  title: "Blog | NAJWAN",
  description: "Thoughts on engineering, DevOps, Cloud Computing, and Machine Learning.",
};

function createQuery(page: number, category?: string, search?: string) {
  const params = new URLSearchParams();
  params.set("page", String(page));
  if (category) params.set("category", category);
  if (search) params.set("search", search);
  return `/blog?${params.toString()}`;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string; search?: string }>;
}) {
  const { page, category: selectedCategory, search } = await searchParams;
  const currentPage = Number(page) || 1;
  const postsPerPage = 6;

  const allPosts = getAllBlogPosts();

  const categories = [
    { label: "All Streams", count: allPosts.length, value: "" },
    ...Array.from(new Set(allPosts.map((p) => p.category))).map((cat) => ({
      label: cat,
      count: allPosts.filter((p) => p.category === cat).length,
      value: cat,
    })),
  ];

  const filteredPosts = allPosts.filter((p) => {
    const matchCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchSearch = search ? p.title.toLowerCase().includes(search.toLowerCase()) : true;
    return matchCategory && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  return (
    <>
      <NavBar active="Blog" />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        <header className="mb-14 text-left">
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-5 leading-tight">
            Selected Essays
          </h1>
          <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
            Thoughts, explorations, and architecture notes on engineering and cloud systems.
          </p>
        </header>

        <section className="mb-12 grid gap-5 md:grid-cols-[minmax(0,1fr)_280px]">
          <form action="/blog" method="GET" className="bg-surface-container-lowest border border-outline-variant/25 rounded-xl p-4 md:p-5">
            {selectedCategory && <input type="hidden" name="category" value={selectedCategory} />}
            <label htmlFor="search" className="font-label text-[0.72rem] uppercase tracking-[0.12em] text-on-surface-variant block mb-2">
              Search
            </label>
            <div className="flex items-center gap-3">
              <input
                id="search"
                type="text"
                name="search"
                defaultValue={search || ""}
                placeholder="Search essays..."
                className="w-full bg-surface-container-low px-4 py-3 rounded-lg border border-outline-variant/30 focus:outline-none focus:border-primary text-on-surface"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-lg bg-primary text-on-primary font-label text-xs uppercase tracking-[0.08em]"
              >
                Find
              </button>
            </div>
          </form>

          <div className="bg-surface-container-lowest border border-outline-variant/25 rounded-xl p-4 md:p-5">
            <p className="font-label text-[0.72rem] uppercase tracking-[0.12em] text-on-surface-variant mb-3">Categories</p>
            <CategoryDropdown
              categories={categories}
              selectedCategory={selectedCategory}
              currentSearch={search}
            />
          </div>
        </section>

        {paginatedPosts.length === 0 ? (
          <div className="text-center py-24 bg-surface-container-low rounded-xl">
            <p className="text-on-surface-variant text-lg">No matching essays found.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {paginatedPosts.map((post) => (
              <article
                key={post.id}
                className="group relative grid grid-cols-1 gap-6 bg-surface-container-lowest p-6 md:grid-cols-[minmax(0,1fr)_220px] md:items-stretch md:gap-8 md:p-8 rounded-xl hover:bg-tertiary-fixed/45 transition-colors border border-outline-variant/25"
              >
                <div className="order-2 md:order-1 min-w-0">
                  <div className="flex items-center gap-3 text-xs font-label text-on-surface-variant mb-3 tracking-[0.09em] uppercase">
                    <span>Najwan Octavian Gerrard</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
                    <time>{post.date}</time>
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-on-surface mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="font-body text-on-surface-variant leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-medium rounded-full font-label"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    className="inline-flex items-center gap-2 text-primary font-label text-sm font-semibold tracking-wide uppercase hover:text-primary-container transition-colors"
                    href={`/blog/${post.id}`}
                  >
                    Read Essay
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>

                <div className="order-1 md:order-2">
                  <div className="h-44 w-full rounded-xl bg-surface-container-low flex items-center justify-center border border-outline-variant/20 overflow-hidden md:h-full md:min-h-[180px]">
                    {post.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="material-symbols-outlined text-5xl text-primary/60">article</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <Link
              href={createQuery(Math.max(1, currentPage - 1), selectedCategory, search)}
              className={`px-4 py-2 rounded-lg border border-outline-variant/30 text-sm ${
                currentPage <= 1 ? "pointer-events-none opacity-40" : "hover:bg-surface-container-low"
              }`}
            >
              Prev
            </Link>
            <span className="px-3 text-on-surface-variant text-sm">
              {currentPage} / {totalPages}
            </span>
            <Link
              href={createQuery(Math.min(totalPages, currentPage + 1), selectedCategory, search)}
              className={`px-4 py-2 rounded-lg border border-outline-variant/30 text-sm ${
                currentPage >= totalPages ? "pointer-events-none opacity-40" : "hover:bg-surface-container-low"
              }`}
            >
              Next
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
