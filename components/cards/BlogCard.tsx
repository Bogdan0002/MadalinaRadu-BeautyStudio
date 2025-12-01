import Link from "next/link";
import { BlogPost } from "@/data/posts";
import Card from "@/components/ui/Card";
import ImageWithFallback from "@/components/ImageWithFallback";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full flex flex-col group saas-card overflow-hidden">
        <div className="relative h-48 w-full flex-shrink-0 overflow-hidden">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-brand-purple">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-brand-indigo/60 dark:text-white/60 mb-3 flex-wrap">
            <span>{new Date(post.date).toLocaleDateString("ro-RO", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>•</span>
            <span>{post.readingTime} min citire</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-brand-indigo dark:text-white mb-3 group-hover:text-brand-purple dark:group-hover:text-brand-teal transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-brand-indigo/70 dark:text-white/70 leading-relaxed mb-4 flex-1 line-clamp-3 text-sm sm:text-base">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center text-brand-purple dark:text-brand-teal font-semibold group-hover:text-brand-teal dark:group-hover:text-brand-blue group-hover:translate-x-2 transition-all">
              <span className="text-xs sm:text-sm">Citește articolul</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            {post.tags.length > 0 && (
              <div className="flex gap-1">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-brand-purple/10 text-brand-purple text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}

