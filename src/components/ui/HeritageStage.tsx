"use client";

import React, { useState, useEffect } from 'react';

interface StageImage {
  src: string;
  caption: string;
}

interface HeritageStageProps {
  images: StageImage[];
  autoPlayInterval?: number;
}

export default function HeritageStage({ images, autoPlayInterval = 5000 }: HeritageStageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [images, autoPlayInterval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#1c1b1b] overflow-hidden ink-border-double vintage-shadow">
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div 
            className={`w-full h-full bg-cover bg-center grayscale sepia-[.2] transition-transform duration-[10s] ease-linear ${index === currentIndex ? 'scale-110' : 'scale-100'}`}
            style={{ backgroundImage: `url('${img.src}')` }}
          ></div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-12 pt-24">
            <p className="font-body-md text-on-primary italic md:text-xl max-w-4xl text-shadow">
              {img.caption}
            </p>
          </div>
        </div>
      ))}
      
      {/* Indicators */}
      <div className="absolute top-6 right-6 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-outline-variant hover:bg-outline'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
