"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isJourneyDropdownOpen, setIsJourneyDropdownOpen] = useState(false);

  const locations = [
    { name: "Trang Chủ", path: "/" },
    { name: "Bờ Hồ", path: "/bo-ho" },
    { name: "Hàng Bạc", path: "/hang-bac" },
    { name: "Hàng Gai", path: "/hang-gai" },
    { name: "Hàng Đào", path: "/hang-dao" },
    { name: "Ô Quan Chưởng", path: "/o-quan-chuong" }
  ];

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
          <div 
            className="relative group"
            onMouseEnter={() => setIsJourneyDropdownOpen(true)}
            onMouseLeave={() => setIsJourneyDropdownOpen(false)}
          >
            <button 
              className="font-label-sm text-label-sm uppercase text-primary border-b-2 border-primary pb-1 font-bold flex items-center gap-1"
            >
              Hành Trình
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            
            {/* Dropdown */}
            <div 
              className={`absolute top-full left-0 mt-2 w-48 bg-surface-container-high border border-outline-variant shadow-lg transition-all duration-300 origin-top-left ${isJourneyDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
              <ul className="py-2">
                {locations.map((loc, idx) => (
                  <li key={idx}>
                    <Link href={loc.path} className="block px-4 py-2 font-label-sm uppercase text-on-surface hover:bg-primary/10 hover:text-primary transition-colors">
                      {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="/#ban-do" className="font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors pb-1">
            Bản Đồ
          </Link>
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
                  {locations.map((loc, idx) => (
                    <Link key={idx} href={loc.path} onClick={() => setIsMobileMenuOpen(false)} className="font-body-md text-on-surface hover:text-primary transition-colors">
                      {loc.name}
                    </Link>
                  ))}
               </div>
            </div>
            <Link href="/#ban-do" className="font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors">Bản Đồ</Link>
            <Link href="/#ky-uc" className="font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors">Ký Ức</Link>
            <Link href="/#luu-tru" className="font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors">Lưu Trữ</Link>
         </div>
      </div>
    </header>
  );
}
