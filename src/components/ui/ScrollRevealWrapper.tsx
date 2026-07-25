"use client";
import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ScrollRevealWrapper({ 
  children, 
  delay = 0,
  className = '' 
}: { 
  children: React.ReactNode, 
  delay?: number,
  className?: string
}) {
  const { ref, className: revealClass } = useScrollReveal({ delay });

  return (
    <div ref={ref} className={`${revealClass} ${className}`}>
      {children}
    </div>
  );
}
