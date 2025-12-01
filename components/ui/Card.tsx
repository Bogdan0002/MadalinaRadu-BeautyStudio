import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
  variant?: "default" | "premium" | "glass";
}

export default function Card({
  children,
  className,
  hover = true,
  as: Component = "div",
  variant = "premium",
}: CardProps) {
  const variantStyles = {
    default: "bg-white dark:bg-brand-indigo/80 rounded-2xl shadow-lg border border-brand-peach/30 dark:border-brand-teal/20",
    premium: "premium-card",
    glass: "glass-effect rounded-3xl",
  };

  return (
    <Component
      className={cn(
        variantStyles[variant],
        hover && variant === "premium" && "premium-card-hover",
        hover && variant !== "premium" && "hover:shadow-2xl transition-all duration-500 hover:border-brand-teal/50 dark:hover:border-brand-teal/40 transform hover:-translate-y-2",
        className
      )}
    >
      {children}
    </Component>
  );
}
