import React, { useState } from 'react';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
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
  style,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Fallback blur color or tiny SVG if none provided
  const fallbackBlur =
    blurDataURL ||
    'data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"%3E%3Crect width="100%25" height="100%25" fill="%23E8F1FF"/%3E%3C/svg%3E';

  return (
    <div
      className={`relative overflow-hidden ${fill ? 'w-full h-full' : ''}`}
      style={{
        width: fill ? '100%' : width ? `${width}px` : undefined,
        height: fill ? '100%' : height ? `${height}px` : undefined,
        aspectRatio: !fill && width && height ? `${width} / ${height}` : undefined,
        ...style,
      }}
    >
      {/* Blur Placeholder */}
      {placeholder === 'blur' && !isLoaded && !hasError && (
        <img
          src={fallbackBlur}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover filter blur-md scale-105 transition-opacity duration-300 pointer-events-none select-none`}
        />
      )}

      {/* Main WebP / Optimized Image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-500 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${fill ? 'w-full h-full object-cover' : ''}`}
        {...props}
      />
    </div>
  );
}

export { OptimizedImage as Image };
