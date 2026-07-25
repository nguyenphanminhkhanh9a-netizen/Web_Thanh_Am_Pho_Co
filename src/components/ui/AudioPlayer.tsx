"use client";

import React from 'react';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';

interface AudioPlayerProps {
  audioSrc: string;
  trackTitle: string;
  subtitle?: string;
  albumArt?: string;
  description?: string;
}

export default function AudioPlayer({ audioSrc, trackTitle, subtitle = "Bản Ghi Di Sản", albumArt, description }: AudioPlayerProps) {
  const { isPlaying, currentTime, duration, progress, togglePlay, seek, formatTime } = useAudioPlayer(audioSrc);

  return (
    <div className="bg-background p-6 md:p-8 border border-outline-variant shadow-sm relative overflow-hidden group w-full">
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
      
      <h3 className="font-label-sm uppercase text-secondary mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>volume_up</span>
        {subtitle}
      </h3>
      
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
        
        {/* Vinyl Record Area */}
        <div className="relative shrink-0 flex justify-center w-full sm:w-auto h-32">
          <div 
            className={`w-32 h-32 rounded-full bg-[#111] flex items-center justify-center ring-4 ring-surface-container-high overflow-hidden shadow-inner ${isPlaying ? 'animate-spin-slow' : ''}`}
          >
            {/* Center Label */}
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center z-20 overflow-hidden border border-outline">
                {albumArt ? (
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${albumArt}')` }}></div>
                ) : (
                  <div className="w-full h-full bg-secondary-container"></div>
                )}
            </div>
            {/* Spindle hole */}
            <div className="absolute w-2 h-2 bg-background rounded-full z-30"></div>
            
            {/* Record Grooves */}
            <div className="absolute inset-2 rounded-full border border-white/5 z-10"></div>
            <div className="absolute inset-4 rounded-full border border-white/5 z-10"></div>
            <div className="absolute inset-6 rounded-full border border-white/10 z-10"></div>
            <div className="absolute inset-8 rounded-full border border-white/5 z-10"></div>
          </div>
          {/* Stylus / Tonearm */}
          <div 
            className={`absolute right-1/4 sm:-right-4 top-0 w-1.5 h-20 bg-outline origin-top transition-transform duration-500 z-30 ${isPlaying ? 'rotate-12' : '-rotate-[25deg]'}`} 
            style={{ boxShadow: '2px 2px 4px rgba(0,0,0,0.2)', borderRadius: '4px' }}
          >
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-secondary rounded-sm border border-outline-variant shadow-sm"></div>
             {/* Counterweight */}
             <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-outline-variant rounded-full shadow-sm"></div>
          </div>
        </div>

        {/* Player Controls & Info Area */}
        <div className="flex-1 w-full flex flex-col justify-center">
          <p className="font-headline-lg text-2xl text-primary italic mb-2 text-center sm:text-left">{trackTitle}</p>
          
          {description && (
            <p className="text-on-surface-variant font-label-sm mb-6 italic text-center sm:text-left">{description}</p>
          )}

          <div className="flex items-center gap-4 text-on-surface-variant font-label-sm mb-6 mt-auto pt-4">
            <span className="w-10 text-right">{formatTime(currentTime)}</span>
            <div className="flex-1 h-1.5 bg-outline-variant/30 rounded-full relative cursor-pointer group/progress flex items-center">
              <div className="absolute left-0 h-1.5 rounded-full bg-primary transition-all duration-300 pointer-events-none" style={{ width: `${progress}%` }}></div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={(e) => seek(Number(e.target.value) / 100 * duration)} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
              />
              <div 
                className="absolute w-4 h-4 bg-primary border-2 border-background rounded-full shadow-md opacity-0 group-hover/progress:opacity-100 transition-all pointer-events-none z-20" 
                style={{ left: `calc(${progress}% - 8px)` }}
              ></div>
            </div>
            <span className="w-10">{formatTime(duration)}</span>
          </div>

          <div className="flex justify-center sm:justify-start">
            <button 
              onClick={togglePlay} 
              className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-primary-container transition-all shadow-md active:scale-95 z-20 focus:outline-none focus:ring-4 focus:ring-primary/20"
            >
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
