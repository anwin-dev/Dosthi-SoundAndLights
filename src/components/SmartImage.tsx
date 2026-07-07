import { memo, useState } from 'react';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  fallbackSeed?: string;
  priority?: boolean;
};

export const SmartImage = memo(
  ({ src, alt, className, wrapperClassName, fallbackSeed = 'dosthi', priority = false }: SmartImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const fallback = `https://picsum.photos/seed/${fallbackSeed}/1400/900`;

    return (
      <div className={`relative overflow-hidden ${wrapperClassName ?? ''}`}>
        {!isLoaded && <div className="absolute inset-0 animate-pulse bg-white/[0.07]" />}
        <img
          src={hasError ? fallback : src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          className={`${className ?? ''} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        />
      </div>
    );
  },
);

SmartImage.displayName = 'SmartImage';
