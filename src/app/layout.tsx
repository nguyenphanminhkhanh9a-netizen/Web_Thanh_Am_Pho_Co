import type { Metadata } from "next";
import { EB_Garamond, Literata, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thanh Âm Phố Cổ - Lưu Giữ Ký Ức Hà Nội",
  description: "Trải nghiệm hình ảnh và âm thanh sống động về phố cổ Hà Nội. Gửi gắm và lưu giữ những ký ức đẹp về một thời đã qua.",
  keywords: ["Hà Nội", "Phố Cổ", "Thanh Âm Phố Cổ", "Ký Ức", "Lịch Sử", "Hoàn Kiếm"],
  openGraph: {
    title: "Thanh Âm Phố Cổ",
    description: "Lưu giữ ký ức và thanh âm của 36 phố phường Hà Nội.",
    url: "https://web-thanh-am-pho-co.vercel.app",
    siteName: "Thanh Âm Phố Cổ",
    locale: "vi_VN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${ebGaramond.variable} ${literata.variable} ${workSans.variable}`}>
      <body className="parchment-texture min-h-screen overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col bg-background text-on-surface">
        <div className="grain-overlay"></div>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
