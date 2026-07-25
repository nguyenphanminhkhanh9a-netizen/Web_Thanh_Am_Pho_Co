import React from 'react';

interface VintagePhotoFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export default function VintagePhotoFrame({ src, alt, caption, className = '' }: VintagePhotoFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="ink-border-double p-4 bg-background vintage-shadow group cursor-pointer transition-transform duration-500 hover:-translate-y-2">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto object-cover grayscale brightness-90 sepia-[.3] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100" 
        />
        {caption && (
          <p className="mt-4 font-body-md text-on-surface-variant italic text-center text-sm">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
