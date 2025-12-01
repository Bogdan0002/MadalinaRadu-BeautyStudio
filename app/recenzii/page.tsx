"use client";

import { useState } from "react";
import { reviews } from "@/data/reviews";
import ReviewCard from "@/components/cards/ReviewCard";
import { Metadata } from "next";

export default function RecenziiPage() {
  const [filter, setFilter] = useState<"all" | "studio" | "laserice">("all");

  const filteredReviews =
    filter === "all"
      ? reviews
      : reviews.filter((r) => r.category === filter);

  return (
    <div className="py-20 bg-brand-peach/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-indigo mb-4">
            Recenzii <span className="bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent">Clienți</span>
          </h1>
          <p className="text-lg text-brand-indigo/70 max-w-3xl mx-auto leading-relaxed">
            Peste 500 de cliente mulțumite de serviciile noastre de micropigmentare, epilare definitivă cu laser și tratamente estetice în București. Descoperă experiențele reale ale clienților noștri și rezultatele excepționale obținute.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-xl font-semibold transition-all ${
              filter === "all"
                ? "bg-gradient-to-r from-brand-purple to-brand-teal text-white shadow-lg"
                : "bg-white text-brand-indigo hover:bg-brand-peach/50 border border-brand-purple/20"
            }`}
          >
            Toate recenziile
          </button>
          <button
            onClick={() => setFilter("studio")}
            className={`px-6 py-2 rounded-xl font-semibold transition-all ${
              filter === "studio"
                ? "bg-gradient-to-r from-brand-purple to-brand-teal text-white shadow-lg"
                : "bg-white text-brand-indigo hover:bg-brand-peach/50 border border-brand-purple/20"
            }`}
          >
            Studio înfrumusețare
          </button>
          <button
            onClick={() => setFilter("laserice")}
            className={`px-6 py-2 rounded-xl font-semibold transition-all ${
              filter === "laserice"
                ? "bg-gradient-to-r from-brand-purple to-brand-teal text-white shadow-lg"
                : "bg-white text-brand-indigo hover:bg-brand-peach/50 border border-brand-purple/20"
            }`}
          >
            LaserICE
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review) => (
            <div key={review.id} className="h-full">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
