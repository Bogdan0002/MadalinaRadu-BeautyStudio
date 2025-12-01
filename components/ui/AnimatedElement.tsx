"use client";

import { ReactNode, CSSProperties } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  animationDelay?: string;
  style?: CSSProperties;
}

export default function AnimatedElement({
  children,
  className = "",
  animationDelay,
  style,
}: AnimatedElementProps) {
  const combinedStyle: CSSProperties = {
    ...(animationDelay && { "--animation-delay": animationDelay } as CSSProperties),
    ...style,
  };

  return (
    <div className={className} style={combinedStyle}>
      {children}
    </div>
  );
}

