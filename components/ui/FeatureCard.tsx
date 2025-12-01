import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  const isDarkCard = className.includes("bg-white/10") || className.includes("bg-white/20");
  
  return (
    <div
      className={cn(
        "saas-card p-6 sm:p-8 group hover:scale-105 transition-all duration-300",
        className
      )}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-purple to-brand-teal rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
        <span className="text-2xl sm:text-3xl">{icon}</span>
      </div>
      <h3 className={cn(
        "text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors",
        isDarkCard ? "text-white group-hover:text-brand-teal" : "text-brand-indigo dark:text-white group-hover:text-brand-purple dark:group-hover:text-brand-teal"
      )}>
        {title}
      </h3>
      <p className={cn(
        "leading-relaxed text-sm sm:text-base",
        isDarkCard ? "text-white/80" : "text-brand-indigo/70 dark:text-white/80"
      )}>
        {description}
      </p>
    </div>
  );
}

