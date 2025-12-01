import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

interface ButtonAsButton extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  as?: "button";
  href?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  as: "link";
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-brand-purple via-brand-purple to-brand-teal text-white hover:from-brand-teal hover:via-brand-teal hover:to-brand-blue shadow-lg hover:shadow-glow-teal dark:from-brand-purple dark:via-brand-purple dark:to-brand-teal before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
  secondary: 
    "glass-effect-strong text-brand-indigo dark:text-white hover:bg-white/90 dark:hover:bg-brand-indigo/80 border-2 border-brand-indigo/10 dark:border-brand-teal/20 hover:border-brand-purple/30 dark:hover:border-brand-teal/40 shadow-md hover:shadow-xl",
  outline:
    "bg-transparent border-2 border-brand-indigo/30 dark:border-brand-teal/40 text-brand-indigo dark:text-brand-teal hover:bg-brand-indigo/5 dark:hover:bg-brand-teal/10 hover:border-brand-indigo dark:hover:border-brand-teal shadow-sm hover:shadow-md",
  ghost: 
    "bg-transparent text-brand-indigo dark:text-white hover:bg-brand-peach/30 dark:hover:bg-brand-teal/10 border border-transparent hover:border-brand-purple/20 dark:hover:border-brand-teal/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs sm:text-sm",
  md: "px-6 py-2.5 text-sm sm:text-base",
  lg: "px-7 py-3 text-sm sm:text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-2xl transition-premium transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:ring-offset-2";

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (props.as === "link") {
    const { href, as, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={combinedClassName} {...linkProps}>
        {icon && <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        {children}
      </Link>
    );
  }

  const { as, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={combinedClassName} {...buttonProps}>
      {icon && <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      {children}
    </button>
  );
}
