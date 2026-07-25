import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b border-outline-variant bg-background/95 backdrop-blur-sm z-50">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-gutter">
          <Link href="/">
            <h1 className="font-display-lg text-[32px] md:text-[40px] text-primary tracking-tighter cursor-pointer">
              Thanh Âm Phố Cổ
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className="font-label-sm text-label-sm uppercase text-primary border-b-2 border-primary pb-1 font-bold"
          >
            Hành Trình
          </Link>
          <Link 
            href="#" 
            className="font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors pb-1"
          >
            Bản Đồ
          </Link>
          <Link 
            href="#" 
            className="font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors pb-1"
          >
            Ký Ức
          </Link>
          <Link 
            href="#" 
            className="font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors pb-1"
          >
            Lưu Trữ
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-variant/50 transition-colors rounded-full text-on-surface-variant flex items-center justify-center">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="p-2 hover:bg-surface-variant/50 transition-colors rounded-full text-on-surface-variant flex items-center justify-center md:hidden">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
