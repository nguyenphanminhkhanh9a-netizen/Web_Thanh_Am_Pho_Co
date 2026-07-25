"use client";

import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  title: string;
  subtitle?: string;
  variant?: 'standard' | 'gramophone';
}

export default function AudioPlayer({ src, title, subtitle, variant = 'standard' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (variant === 'gramophone') {
    return (
      <div className="flex flex-col items-center">
        {/* Gramophone variant UI */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
          <div className={`w-full h-full rounded-full border-8 border-[#1a1a1a] bg-[#111] shadow-2xl flex items-center justify-center transition-transform duration-[4s] ease-linear ${isPlaying ? 'rotate-[360deg] animate-spin' : ''}`}>
            {/* Vinyl grooves */}
            <div className="w-[90%] h-[90%] rounded-full border border-[#222] opacity-50"></div>
            <div className="absolute w-[70%] h-[70%] rounded-full border border-[#222] opacity-50"></div>
            <div className="absolute w-[50%] h-[50%] rounded-full border border-[#222] opacity-50"></div>
            {/* Center label */}
            <div className="absolute w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-background rounded-full"></div>
            </div>
          </div>
          {/* Tonearm (simplified) */}
          <div className={`absolute top-0 right-0 w-8 h-32 origin-top transition-transform duration-1000 z-10 ${isPlaying ? 'rotate-12' : '-rotate-12'}`}>
            <div className="w-2 h-24 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full mx-auto"></div>
            <div className="w-4 h-6 bg-gray-800 rounded-sm mx-auto -mt-2 shadow-lg"></div>
          </div>
        </div>
        
        <h4 className="font-headline-lg text-2xl text-primary">{title}</h4>
        {subtitle && <p className="font-body-md text-on-surface-variant italic mb-6 text-center">{subtitle}</p>}
        
        <button 
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-primary text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all vintage-shadow mt-4 z-20 relative"
        >
          <span className="material-symbols-outlined text-3xl">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>
      </div>
    );
  }

  // Standard Variant
  return (
    <div className="bg-surface-container border border-outline-variant p-6 max-w-xl mx-auto vintage-shadow w-full">
      <div className="flex items-center gap-6">
        <button 
          onClick={togglePlay}
          className="w-14 h-14 shrink-0 rounded-full bg-primary text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-3xl">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>
        <div className="flex-grow overflow-hidden">
          <h4 className="font-headline-lg text-xl text-primary m-0 truncate">{title}</h4>
          {subtitle && <p className="font-body-md text-on-surface-variant text-sm italic m-0 truncate">{subtitle}</p>}
          
          <div className="h-1 w-full bg-outline-variant mt-4 rounded-full overflow-hidden relative">
             <div className="absolute top-0 left-0 h-full bg-primary w-0 transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
