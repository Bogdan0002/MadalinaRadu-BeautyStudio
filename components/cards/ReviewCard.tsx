import { Review } from "@/data/reviews";
import Card from "@/components/ui/Card";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="h-full flex flex-col premium-card-hover overflow-hidden">
      <div className="p-8 lg:p-10 flex-1 flex flex-col">
        {/* Premium Rating Stars */}
        {review.rating && (
          <div className="flex mb-6 gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple dark:text-brand-teal transition-transform duration-300 hover:scale-125"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        )}
        
        {/* Premium Quote Styling */}
        <div className="relative mb-6 lg:mb-8 flex-1">
          <div className="absolute top-0 left-0 text-5xl lg:text-6xl text-brand-purple/15 dark:text-brand-teal/20 font-serif leading-none font-bold">&ldquo;</div>
          <p className="text-brand-indigo/80 dark:text-white/80 leading-relaxed italic relative z-10 pl-6 lg:pl-8 text-base lg:text-lg font-light">
            {review.content}
          </p>
        </div>
        
        {/* Premium Author Info */}
        <div className="flex items-center mt-auto pt-6 border-t border-brand-peach/30 dark:border-brand-teal/20">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-brand-purple via-brand-purple to-brand-teal rounded-full flex items-center justify-center text-white font-bold mr-4 text-base lg:text-lg flex-shrink-0 shadow-lg">
            {review.initials}
          </div>
          <p className="text-sm lg:text-base font-semibold text-brand-indigo dark:text-white">
            — {review.name}
          </p>
        </div>
      </div>
    </Card>
  );
}
