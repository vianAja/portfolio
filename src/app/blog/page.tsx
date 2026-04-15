import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog | NAJWAN",
  description: "Thoughts on engineering, DevOps, Cloud Computing, and Machine Learning.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string; search?: string }>;
}) {
  const { page, category: selectedCategory, search } = await searchParams;
  const currentPage = Number(page) || 1;
  const postsPerPage = 4;

  const allPosts = getAllBlogPosts();

  // Dynamic Categories
  const categories = [
    { label: "All Streams", count: allPosts.length, value: "" },
    ...Array.from(new Set(allPosts.map((p) => p.category))).map((cat) => ({
      label: cat,
      count: allPosts.filter((p) => p.category === cat).length,
      value: cat,
    })),
  ];

  // Filtering logic
  const filteredPosts = allPosts.filter((p) => {
    const matchCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchSearch = search ? p.title.toLowerCase().includes(search.toLowerCase()) : true;
    return matchCategory && matchSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
      <NavBar active="Blog" />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 mb-20 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary mb-4 block">
                Knowledge Base
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-none text-white">
                Personal<br />
                <span className="text-primary">Blogs</span>
              </h1>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-20 opacity-5 select-none pointer-events-none">
            <span className="font-headline text-[12rem] font-bold uppercase text-white">
              INSIGHTS
            </span>
          </div>
        </section>

        {/* Content grid */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar (Desktop Only) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32 space-y-12">
                {/* Search Sidebar */}
                <div>
                  <h3 className="font-headline text-sm font-bold text-outline-variant mb-4 tracking-widest uppercase">
                    Search
                  </h3>
                  <form action="/blog" method="GET">
                    {selectedCategory && <input type="hidden" name="category" value={selectedCategory} />}
                    <div className="relative">
                      <input 
                        type="text" 
                        name="search"
                        defaultValue={search || ""}
                        placeholder="Search journals..." 
                        className="w-full bg-surface-container-highest text-white px-4 py-3 rounded-xl border border-outline-variant/10 focus:border-primary focus:outline-none font-body text-sm pl-11 shadow-inner focus:shadow-none transition-all placeholder-on-surface-variant"
                      />
                      <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors flex items-center">
                        <span className="material-symbols-outlined text-lg">search</span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Categories Sidebar */}
                <div>
                  <h3 className="font-headline text-sm font-bold text-outline-variant mb-4 tracking-widest uppercase">
                    Categories
                  </h3>
                  <nav className="flex flex-col space-y-1">
                    {categories.map(({ label, count, value }) => {
                      const isActive = (selectedCategory || "") === value;
                      return (
                        <Link
                          key={label}
                          className={`group flex items-center justify-between py-3 px-4 rounded-xl transition-all ${
                            isActive
                              ? "bg-primary/10 text-primary font-bold"
                              : "text-on-surface-variant hover:bg-surface-container-high hover:text-white"
                          }`}
                          href={value ? `/blog?category=${value}${search ? '&search=' + encodeURIComponent(search) : ''}` : `/blog${search ? '?search=' + encodeURIComponent(search) : ''}`}
                        >
                          <span className="font-body text-sm">{label}</span>
                          <span
                            className={`font-label text-[0.65rem] px-2 py-0.5 rounded transition-colors ${
                              isActive
                                ? "bg-primary text-on-primary-container"
                                : "bg-surface-container-highest text-on-surface"
                            } group-hover:bg-primary group-hover:text-on-primary-container`}
                          >
                            {String(count).padStart(2, "0")}
                          </span>
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-9">
              {/* Mobile Search & Categories (Hidden on Desktop) */}
              <div className="lg:hidden mb-12 space-y-8">
                <form action="/blog" method="GET">
                    {selectedCategory && <input type="hidden" name="category" value={selectedCategory} />}
                    <div className="relative">
                      <input 
                        type="text" 
                        name="search"
                        defaultValue={search || ""}
                        placeholder="Search journals..." 
                        className="w-full bg-surface-container-highest text-white px-6 py-4 rounded-2xl border border-outline-variant/10 focus:border-primary focus:outline-none font-body text-base pl-14 shadow-inner"
                      />
                      <button type="submit" className="absolute left-5 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors flex items-center">
                        <span className="material-symbols-outlined text-xl">search</span>
                      </button>
                    </div>
                </form>
                <div className="flex flex-wrap gap-2">
                  {categories.map(({ label, count, value }) => (
                    <Link
                      key={label}
                      className={`px-4 py-2 rounded-lg border font-body text-sm transition-all ${
                        (selectedCategory || "") === value
                          ? "bg-primary/10 border-primary text-primary"
                          : "bg-surface-container border-outline-variant/10 text-on-surface-variant"
                      }`}
                      href={value ? `/blog?category=${value}${search ? '&search=' + encodeURIComponent(search) : ''}` : `/blog${search ? '?search=' + encodeURIComponent(search) : ''}`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {paginatedPosts.length === 0 ? (
                <div className="text-center py-32 border-2 border-dashed border-outline-variant/10 rounded-3xl">
                   <p className="text-on-surface-variant font-body text-lg italic">
                      No matching journals found in the knowledge base.
                   </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Cards Mapping */}
                  {paginatedPosts.map((post) => (
                    <div
                      key={post.id}
                      className="group flex flex-col bg-surface-container-high rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-300 h-full border border-white/5 relative"
                    >
                      <div className="relative h-48 overflow-hidden bg-surface-container-lowest shrink-0">
                        {post.image && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            alt={post.title}
                            src={post.image}
                          />
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="font-label text-[0.6rem] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <h3 className="font-headline text-lg font-bold text-white mb-3 leading-snug hover:text-primary transition-colors cursor-pointer">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-on-surface-variant font-body text-xs mb-6 line-clamp-2 opacity-70">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10 mt-auto">
                          <span className="text-[0.65rem] text-outline font-label uppercase">
                            {post.date}
                          </span>
                          <Link href={`/blog/${post.id}`}>
                            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-lg">
                              trending_flat
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination UI */}
              {totalPages > 1 && (
                <div className="mt-16 flex items-center justify-center gap-2">
                  <Link
                    href={`/blog?page=${currentPage - 1}${selectedCategory ? `&category=${selectedCategory}` : ""}`}
                    className={`p-2 rounded-xl border border-outline-variant/10 transition-all ${
                      currentPage <= 1
                        ? "pointer-events-none opacity-30"
                        : "hover:bg-primary/10 hover:border-primary text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </Link>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <Link
                        key={p}
                        href={`/blog?page=${p}${selectedCategory ? `&category=${selectedCategory}` : ""}`}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl font-label text-sm transition-all ${
                          currentPage === p
                            ? "bg-primary text-on-primary-container font-bold"
                            : "text-on-surface-variant hover:text-white hover:bg-surface-container-high"
                        }`}
                      >
                        {p}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`/blog?page=${currentPage + 1}${selectedCategory ? `&category=${selectedCategory}` : ""}`}
                    className={`p-2 rounded-xl border border-outline-variant/10 transition-all ${
                      currentPage >= totalPages
                        ? "pointer-events-none opacity-30"
                        : "hover:bg-primary/10 hover:border-primary text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </Link>
                </div>
              )}
            </div>
          </div></section>
      </main>
      <Footer />
    </>
  );
}
