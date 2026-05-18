import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

export default function BlogPostPager({
  newerPost,
  olderPost,
}: {
  newerPost: BlogPostMeta | null;
  olderPost: BlogPostMeta | null;
}) {
  if (!newerPost && !olderPost) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
        {newerPost && (
          <Link
            href={`/blog/${newerPost.id}`}
            aria-label={`Go to newer post from ${newerPost.date}`}
            title="Next newer post"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-lowest text-primary transition hover:border-primary/35 hover:bg-surface-container-low"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        )}

        {olderPost && (
          <Link
            href={`/blog/${olderPost.id}`}
            aria-label={`Go to older post from ${olderPost.date}`}
            title="Previous older post"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-lowest text-primary transition hover:border-primary/35 hover:bg-surface-container-low"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        )}
    </div>
  );
}
