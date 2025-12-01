import Link from "next/link";
import { posts } from "@/data/posts";
import BlogCard from "@/components/cards/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Micropigmentare & Beauty Tips | Mădălina Radu",
  description: "Descoperă articole despre micropigmentare, tratamente estetice, epilare definitivă și sfaturi beauty în București. Ghiduri complete și informații profesionale.",
  keywords: "blog micropigmentare, beauty tips bucurești, tratamente estetice, epilare definitivă, beauty blog",
};

export default function BlogPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-brand-peach/30 dark:bg-brand-indigo/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 sm:px-4 py-2 bg-brand-purple/10 dark:bg-brand-teal/20 rounded-full border border-brand-purple/20 dark:border-brand-teal/30">
            <span className="text-brand-purple dark:text-brand-teal">📝</span>
            <p className="text-brand-purple dark:text-brand-teal font-semibold text-xs sm:text-sm uppercase tracking-wide">Blog & Ghiduri</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-brand-indigo dark:text-white mb-4 sm:mb-6">
            Blog <span className="bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent">Beauty</span>
          </h1>
          <p className="text-xl text-brand-indigo/70 max-w-3xl mx-auto leading-relaxed">
            Descoperă ghiduri complete, sfaturi profesionale și ultimele tendințe în micropigmentare, tratamente estetice și beauty
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={post.id} className="animate-slide-up h-full" style={{ animationDelay: `${index * 100}ms` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-brand-peach/50 dark:border-brand-teal/20">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-indigo dark:text-white mb-4 sm:mb-6 text-center">Categorii</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {Array.from(new Set(posts.map(p => p.category))).map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-brand-indigo/80 rounded-xl border border-brand-purple/20 dark:border-brand-teal/30 text-brand-indigo dark:text-white font-semibold hover:bg-brand-purple dark:hover:bg-brand-teal hover:text-white transition-all text-sm sm:text-base"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

