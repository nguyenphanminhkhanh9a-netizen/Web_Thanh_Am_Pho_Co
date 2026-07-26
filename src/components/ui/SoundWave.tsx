import React from 'react';

interface SoundWaveProps {
  isPlaying: boolean;
}

export default function SoundWave({ isPlaying }: SoundWaveProps) {
  return (
    <div className="flex items-end gap-[3px] h-5 opacity-90" title={isPlaying ? "Âm thanh đang phát..." : ""}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-[3px] bg-on-primary rounded-full transition-all duration-300 origin-bottom`}
          style={{
            height: isPlaying ? '100%' : '3px',
            animation: isPlaying ? `soundwave 1.2s ease-in-out infinite` : 'none',
            animationDelay: `${i * -0.2}s`
          }}
        ></div>
      ))}
    </div>
  );
}
