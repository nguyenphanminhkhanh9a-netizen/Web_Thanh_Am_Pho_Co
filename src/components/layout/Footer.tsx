import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant w-full py-12 px-margin-mobile md:px-margin-desktop mt-auto">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-semibold">
          Thanh Âm Phố Cổ
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-body-md text-on-surface-variant">
          <Link href="#" className="hover:text-primary transition-colors">Về chúng tôi</Link>
          <Link href="#" className="hover:text-primary transition-colors">Liên hệ</Link>
          <Link href="#" className="hover:text-primary transition-colors">Tài liệu</Link>
          <Link href="#" className="hover:text-primary transition-colors">Bản quyền</Link>
        </div>
        <p className="font-body-md text-on-surface-variant text-sm text-center md:text-right">
          © 1920-2024 Thanh Âm Phố Cổ. <br className="hidden md:block" /> Bảo tồn di sản văn hóa Hà Nội.
        </p>
      </div>
    </footer>
  );
}
