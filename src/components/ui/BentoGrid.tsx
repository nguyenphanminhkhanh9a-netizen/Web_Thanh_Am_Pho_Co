import React from 'react';
import Link from 'next/link';

interface StreetCard {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  href: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
}

interface BentoGridProps {
  items: StreetCard[];
}

export default function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 auto-rows-[300px]">
      {items.map((item, index) => (
        <Link 
          key={item.id} 
          href={item.href}
          className={`relative overflow-hidden group ink-border bg-tertiary
            ${item.colSpan === 2 ? 'md:col-span-2' : ''}
            ${item.rowSpan === 2 ? 'md:row-span-2' : ''}
          `}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100"
            style={{ backgroundImage: `url('${item.image}')` }}
          ></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/90 via-[#1c1b1b]/40 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-label-sm text-secondary-container font-bold tracking-widest border border-secondary-container px-2 py-1 rounded-sm text-[10px]">
                0{index + 1}
              </span>
            </div>
            <h3 className="font-display-lg text-3xl md:text-4xl text-on-primary mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
              {item.name}
            </h3>
            <p className="font-body-md text-on-surface-variant text-gray-300 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {item.subtitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
