import React from 'react';

interface LocationBannerProps {
  location: string;
  district?: string;
  className?: string;
}

export default function LocationBanner({ location, district = "Hà Nội", className = '' }: LocationBannerProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 ${className}`}>
      <div className="flex items-center gap-2 text-primary mb-4">
        <span className="material-symbols-outlined">location_on</span>
        <span className="font-label-sm uppercase tracking-widest font-bold">Vị Trí Di Sản</span>
      </div>
      <h2 className="font-display-lg text-4xl md:text-6xl text-on-surface text-center">
        {location}, <span className="text-on-surface-variant italic">{district}</span>
      </h2>
      <div className="h-[2px] w-24 bg-primary mt-8"></div>
    </div>
  );
}
