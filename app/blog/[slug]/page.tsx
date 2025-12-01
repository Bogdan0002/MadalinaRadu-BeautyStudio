import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Articol negăsit",
    };
  }

  return {
    title: `${post.title} | Blog Mădălina Radu`,
    description: post.metaDescription,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Dynamic related posts algorithm:
  // 1. Prioritize posts with same category
  // 2. Then posts with matching tags (more matches = higher priority)
  // 3. Finally, any other posts
  const relatedPosts = posts
    .filter((p) => p.id !== post.id)
    .map((p) => {
      const categoryMatch = p.category === post.category ? 3 : 0;
      const tagMatches = p.tags.filter(tag => post.tags.includes(tag)).length;
      return { post: p, score: categoryMatch + tagMatches };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ post }) => post);

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-brand-peach/30 dark:bg-brand-indigo/90">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-brand-purple dark:text-brand-teal mb-6 sm:mb-8 hover:text-brand-teal dark:hover:text-brand-blue transition-colors"
        >
          <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Înapoi la blog
        </Link>

        {/* Article Header */}
        <article>
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-brand-indigo/60 dark:text-white/60 mb-3 sm:mb-4 flex-wrap">
              <span className="px-2 sm:px-3 py-1 bg-brand-purple/10 dark:bg-brand-teal/20 text-brand-purple dark:text-brand-teal rounded-full font-semibold text-xs sm:text-sm">
                {post.category}
              </span>
              <span>{new Date(post.date).toLocaleDateString("ro-RO", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span>•</span>
              <span>{post.readingTime} min citire</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-indigo dark:text-white mb-4 sm:mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-brand-indigo/70 dark:text-white/80 leading-relaxed mb-4 sm:mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-purple to-brand-teal rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                MR
              </div>
              <div>
                <p className="font-semibold text-brand-indigo dark:text-white text-sm sm:text-base">{post.author}</p>
                <p className="text-xs sm:text-sm text-brand-indigo/60 dark:text-white/60">Specialist în micropigmentare</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 w-full mb-12 rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-brand-indigo dark:prose-headings:text-white prose-headings:font-bold prose-p:text-brand-indigo/80 dark:prose-p:text-white/80 prose-p:leading-relaxed prose-ul:text-brand-indigo/80 dark:prose-ul:text-white/80 prose-li:text-brand-indigo/80 dark:prose-li:text-white/80 prose-strong:text-brand-indigo dark:prose-strong:text-white prose-a:text-brand-purple dark:prose-a:text-brand-teal prose-a:no-underline hover:prose-a:text-brand-teal dark:hover:prose-a:text-brand-blue"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-brand-peach/50 dark:border-brand-teal/20">
              <h3 className="text-base sm:text-lg font-semibold text-brand-indigo dark:text-white mb-3 sm:mb-4">Tag-uri:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-brand-indigo/80 rounded-lg border border-brand-purple/20 dark:border-brand-teal/30 text-brand-indigo dark:text-white text-xs sm:text-sm font-medium hover:bg-brand-purple dark:hover:bg-brand-teal hover:text-white transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-brand-peach/50 dark:border-brand-teal/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-indigo dark:text-white mb-6 sm:mb-8">Articole similare</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-white dark:bg-brand-indigo/80 rounded-xl p-4 border border-brand-peach/30 dark:border-brand-teal/20 hover:border-brand-purple/50 dark:hover:border-brand-teal/40 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-brand-indigo dark:text-white mb-2 group-hover:text-brand-purple dark:group-hover:text-brand-teal transition-colors line-clamp-2 text-sm sm:text-base">
                    {relatedPost.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-indigo/70 dark:text-white/70 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

