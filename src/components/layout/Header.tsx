"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isJourneyDropdownOpen, setIsJourneyDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const locations = [
    { name: "Bờ Hồ", path: "/bo-ho", desc: "Hồ Gươm & Tháp Rùa" },
    { name: "Hàng Bạc", path: "/hang-bac", desc: "Phố nghề kim hoàn" },
    { name: "Hàng Gai", path: "/hang-gai", desc: "Con đường tơ lụa" },
    { name: "Hàng Đào", path: "/hang-dao", desc: "Phố nhuộm lụa hồng" },
    { name: "Ô Quan Chưởng", path: "/o-quan-chuong", desc: "Cửa ô cuối cùng" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsJourneyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 w-full border-b border-outline-variant bg-background/95 backdrop-blur-sm z-50">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto relative">
        <div className="flex items-center gap-gutter">
          <Link href="/">
            <h1 className="font-display-lg text-[32px] md:text-[40px] text-primary tracking-tighter cursor-pointer">
              Thanh Âm Phố Cổ
            </h1>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {/* Hành Trình with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsJourneyDropdownOpen(!isJourneyDropdownOpen)}
              className={`font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors pb-1 flex items-center gap-1 ${isJourneyDropdownOpen ? 'text-primary' : ''}`}
            >
              Hành Trình
              <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${isJourneyDropdownOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {/* Dropdown menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-background border border-outline-variant shadow-xl transition-all duration-200 origin-top ${isJourneyDropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              {/* Arrow */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-outline-variant rotate-45"></div>
              
              <div className="relative bg-background py-2">
                {/* Link to section on homepage */}
                <Link 
                  href="/#hanh-trinh" 
                  onClick={() => setIsJourneyDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-container transition-colors group"
                >
                  <span className="material-symbols-outlined text-lg text-primary/60 group-hover:text-primary">map</span>
                  <span className="font-label-sm text-on-surface-variant group-hover:text-primary uppercase tracking-wider text-[11px]">Tổng quan hành trình</span>
                </Link>

                <div className="h-px bg-outline-variant/50 mx-4 my-1"></div>

                {locations.map((loc, idx) => (
                  <Link 
                    key={idx} 
                    href={loc.path} 
                    onClick={() => setIsJourneyDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-container transition-colors group"
                  >
                    <span className="material-symbols-outlined text-lg text-secondary/60 group-hover:text-primary">headphones</span>
                    <div>
                      <span className="block font-label-sm text-on-surface group-hover:text-primary text-sm">{loc.name}</span>
                      <span className="block text-[10px] text-on-surface-variant/70 italic">{loc.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>


          <Link href="/#ky-uc" className="font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors pb-1">
            Ký Ức
          </Link>
          <Link href="/#luu-tru" className="font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors pb-1">
            Lưu Trữ
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="p-2 hover:bg-surface-variant/50 transition-colors rounded-full text-on-surface-variant flex items-center justify-center md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-outline-variant transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] border-b' : 'max-h-0 border-transparent'}`}>
         <div className="flex flex-col p-6 gap-6">
            <div className="space-y-4">
               <h3 className="font-label-sm text-secondary uppercase tracking-widest border-b border-outline-variant pb-2">Hành Trình Phố Cổ</h3>
               <div className="flex flex-col gap-3 pl-4">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-body-md text-on-surface hover:text-primary transition-colors">
                    Trang Chủ
                  </Link>
                  {locations.map((loc, idx) => (
                    <Link key={idx} href={loc.path} onClick={() => setIsMobileMenuOpen(false)} className="font-body-md text-on-surface hover:text-primary transition-colors">
                      {loc.name}
                    </Link>
                  ))}
               </div>
            </div>

            <Link href="/#ky-uc" className="font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors">Ký Ức</Link>
            <Link href="/#luu-tru" className="font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors">Lưu Trữ</Link>
         </div>
      </div>
    </header>
  );
}
