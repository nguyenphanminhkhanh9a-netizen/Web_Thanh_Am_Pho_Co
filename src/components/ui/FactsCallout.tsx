import React from 'react';

interface FactsCalloutProps {
  title?: string;
  facts: string[];
  className?: string;
}

export default function FactsCallout({ title = "Bạn Có Biết?", facts, className = '' }: FactsCalloutProps) {
  return (
    <div className={`bg-surface-container-low border border-outline-variant p-6 md:p-8 vintage-shadow ${className}`}>
      <h4 className="font-headline-lg text-2xl text-primary mb-6 flex items-center gap-3">
        <span className="material-symbols-outlined">lightbulb</span>
        {title}
      </h4>
      <ul className="space-y-4">
        {facts.map((fact, index) => (
          <li key={index} className="flex gap-4 items-start">
            <span className="font-display-lg text-3xl text-secondary-container leading-none shrink-0">
              {index + 1}
            </span>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {fact}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
