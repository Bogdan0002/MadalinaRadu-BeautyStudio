import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Card from "./Card";

interface StatsCardProps {
  value: string | number;
  label: string;
  description?: string;
  icon?: ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export default function StatsCard({
  value,
  label,
  description,
  icon,
  trend,
  className,
}: StatsCardProps) {
  return (
    <Card variant="premium" className={cn("p-8 lg:p-10 text-center group", className)}>
      {icon && (
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-brand-purple via-brand-purple to-brand-teal rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-glow-teal">
          {icon}
        </div>
      )}
      <div className="text-5xl lg:text-6xl font-heading font-bold text-brand-indigo dark:text-white mb-3 gradient-text">
        {value}
      </div>
      <div className="text-lg lg:text-xl font-semibold text-brand-indigo dark:text-white mb-3">{label}</div>
      {description && (
        <p className="text-sm lg:text-base text-brand-indigo/70 dark:text-white/70 leading-relaxed font-light">
          {description}
        </p>
      )}
      {trend && (
        <div
          className={cn(
            "text-sm font-semibold mt-4",
            trend.isPositive ? "text-brand-teal" : "text-red-500"
          )}
        >
          {trend.isPositive ? "↑" : "↓"} {trend.value}
        </div>
      )}
    </Card>
  );
}
