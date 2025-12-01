"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export default function ImageWithFallback({
  src,
  alt,
  fill = false,
  className = "",
  priority = false,
  width,
  height,
}: ImageWithFallbackProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className={`${className} bg-gradient-to-br from-brand-purple via-brand-indigo to-brand-teal relative overflow-hidden`}
        style={fill ? { position: "absolute", inset: 0 } : { width, height }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
      onError={() => setImgError(true)}
      quality={85}
    />
  );
}

