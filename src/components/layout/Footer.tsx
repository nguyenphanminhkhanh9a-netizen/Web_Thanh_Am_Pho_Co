import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary border-t-4 border-primary-container w-full py-12 px-margin-mobile md:px-margin-desktop mt-auto">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary font-semibold">
          Thanh Âm Phố Cổ
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-body-md text-on-primary/80">
          <Link href="/#hanh-trinh" className="hover:text-on-primary transition-colors">Về chúng tôi</Link>
          <Link href="/#luu-tru" className="hover:text-on-primary transition-colors">Liên hệ</Link>
          <Link href="/#ky-uc" className="hover:text-on-primary transition-colors">Ký ức</Link>
        </div>
        <p className="font-body-md text-on-primary/60 text-sm text-center md:text-right">
          © 1920-2024 Thanh Âm Phố Cổ. <br className="hidden md:block" /> Bảo tồn di sản văn hóa Hà Nội.
        </p>
      </div>
    </footer>
  );
}
