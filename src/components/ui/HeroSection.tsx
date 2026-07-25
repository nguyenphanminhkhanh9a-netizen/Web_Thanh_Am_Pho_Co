import React from 'react';

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  categoryLabel?: string;
  backgroundImage: string;
  children?: React.ReactNode;
  className?: string;
  align?: 'center' | 'left';
}

export default function HeroSection({
  title,
  subtitle,
  categoryLabel,
  backgroundImage,
  children,
  className = '',
  align = 'center',
}: HeroSectionProps) {
  return (
    <section className={`relative min-h-[85vh] flex items-center ${align === 'center' ? 'justify-center' : 'justify-start'} overflow-hidden px-margin-mobile md:px-margin-desktop py-12 ${className}`}>
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center grayscale contrast-125 opacity-40 mix-blend-multiply transition-transform duration-[10s] hover:scale-105" 
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl ${align === 'center' ? 'text-center flex flex-col items-center' : 'flex flex-col items-start'} animate-fade-in`}>
        {categoryLabel && (
          <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-primary mb-6 block">
            {categoryLabel}
          </span>
        )}
        
        <h2 className={`font-display-lg text-[48px] md:text-[84px] leading-tight text-primary mb-8`}>
          {title}
        </h2>
        
        {children}
        
        {subtitle && (
          <p className="font-body-md text-body-md text-on-surface-variant mt-12 max-w-xl italic">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
