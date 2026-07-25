import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-12 gap-gutter max-w-container-max mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="font-headline-lg text-headline-lg text-primary">Thanh Âm Phố Cổ</h2>
          <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 Thanh Âm Phố Cổ - Dự án Bảo tồn Văn hóa Hà Nội.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all hover:underline decoration-dotted decoration-primary">
            Về Chúng Tôi
          </Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all hover:underline decoration-dotted decoration-primary">
            Chính Sách Bảo Mật
          </Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all hover:underline decoration-dotted decoration-primary">
            Liên Hệ
          </Link>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-secondary hover:text-primary transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">share</span>
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">language</span>
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">history_edu</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
