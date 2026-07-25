import React from 'react';

interface QuoteCalloutProps {
  quote: string;
  author?: string;
  className?: string;
}

export default function QuoteCallout({ quote, author, className = '' }: QuoteCalloutProps) {
  return (
    <div className={`border-l-4 border-primary pl-6 py-2 my-8 ${className}`}>
      <p className="font-body-md text-xl md:text-2xl italic text-on-surface leading-relaxed">
        "{quote}"
      </p>
      {author && (
        <p className="mt-4 font-label-sm uppercase tracking-widest text-primary font-bold">
          — {author}
        </p>
      )}
    </div>
  );
}
