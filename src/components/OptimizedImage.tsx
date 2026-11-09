import React, { useState } from 'react';

export interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder' | 'loading'> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
  quality?: number;
  format?: 'webp' | string;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  placeholder = 'blur',
  blurDataURL,
  fill = false,
  quality = 75,
  format = 'webp',
  sizes = '(max-width: 768px) 100vw, 50vw',
  style,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Micro placeholder blur SVG / base64 fallback
  const fallbackBlur =
    blurDataURL ||
    'data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"%3E%3Crect width="100%25" height="100%25" fill="%23E8F1FF"/%3E%3C/svg%3E';

  const numWidth = typeof width === 'number' ? width : undefined;
  const numHeight = typeof height === 'number' ? height : undefined;

  return (
    <div
      className={`relative overflow-hidden ${fill ? 'w-full h-full' : ''}`}
      style={{
        width: fill ? '100%' : width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
        height: fill ? '100%' : height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
        aspectRatio: !fill && numWidth && numHeight ? `${numWidth} / ${numHeight}` : undefined,
        ...style,
      }}
    >
      {/* Blur Placeholder */}
      {placeholder === 'blur' && !isLoaded && !hasError && (
        <img
          src={fallbackBlur}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover filter blur-md scale-105 transition-opacity duration-300 pointer-events-none select-none z-0"
        />
      )}

      {/* Main Lightweight WebP Image */}
      <img
        src={src}
        alt={alt}
        width={numWidth}
        height={numHeight}
        sizes={sizes}
        loading={priority ? 'eager' : loading}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-500 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${fill ? 'w-full h-full object-cover' : ''} relative z-1`}
        {...props}
      />
    </div>
  );
}

export { OptimizedImage as Image };
