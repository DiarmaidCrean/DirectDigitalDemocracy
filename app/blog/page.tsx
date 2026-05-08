import Link from "next/link";
import { getAllPosts } from "../lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Direct Digital Democracy",
  description:
    "Thoughts, updates, and ideas from the Direct Digital Democracy team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 bg-[#FFF5F2]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#FF7F50] mb-3">Blog</h1>
          <p className="text-lg text-[#505A5A]">
            Thoughts, updates and ideas from the DDD team.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#505A5A] text-lg mb-2">
                No posts published yet.
              </p>
              <p className="text-[#B1B4B6]">Check back soon.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-[#B1B4B6] p-6 hover:border-[#FF7F50] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <time className="text-sm text-[#505A5A]">{post.date}</time>
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#FFF5F2] text-[#FF7F50] px-2 py-0.5 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B0C0C] mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="no-underline hover:text-[#FF7F50] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p className="text-[#505A5A] leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#FF7F50] font-semibold no-underline hover:text-[#E66B3D] transition-colors"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
