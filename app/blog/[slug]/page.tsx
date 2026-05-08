import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} - Direct Digital Democracy`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 bg-[#FFF5F2]">
        <div className="max-w-[680px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/blog"
              className="text-[#FF7F50] no-underline hover:text-[#E66B3D] font-medium text-sm"
            >
              ← Back to Blog
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-[#505A5A]">{post.date}</time>
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white text-[#FF7F50] px-2 py-0.5 font-medium border border-[#FF7F50]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-[#FF7F50] mb-4">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-lg text-[#505A5A]">{post.excerpt}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-6">
        <div
          className="max-w-[680px] mx-auto prose prose-lg max-w-none prose-p:leading-[1.8] prose-p:mb-5 prose-p:text-[#0B0C0C] prose-h2:text-[#FF7F50] prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-[#0B0C0C] prose-a:text-[#FF7F50] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#0B0C0C] prose-li:leading-[1.8] prose-li:text-[#0B0C0C]"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      {/* Back link */}
      <div className="px-6 pb-20 max-w-[680px] mx-auto">
        <Link
          href="/blog"
          className="text-[#FF7F50] no-underline hover:text-[#E66B3D] font-semibold"
        >
          ← Back to Blog
        </Link>
      </div>
    </>
  );
}
