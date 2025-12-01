import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: "hero" | "service" | "product" | "portrait" | "blog";
  label?: string;
}

const variantGradients = {
  hero: "from-brand-purple via-brand-indigo to-brand-teal",
  service: "from-brand-teal via-brand-blue to-brand-purple",
  product: "from-brand-indigo via-brand-purple to-brand-teal",
  portrait: "from-brand-purple/80 via-brand-teal/80 to-brand-blue/80",
  blog: "from-brand-indigo/90 via-brand-purple/90 to-brand-teal/90",
};

export default function ImagePlaceholder({
  width,
  height,
  className,
  variant = "hero",
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-br",
        variantGradients[variant],
        className
      )}
      style={{ width, height }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      
      {/* Label */}
      {label && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-brand-indigo">
            {label}
          </div>
        </div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
}

