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
  title: "Thanh Âm Phố Cổ - Hồn Cốt Hà Nội Xưa",
  description: "Dự án bảo tồn văn hóa, số hóa âm thanh và ký ức về phố cổ Hà Nội.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${ebGaramond.variable} ${literata.variable} ${workSans.variable}`}>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="parchment-texture min-h-screen overflow-x-hidden selection:bg-[#ffdad4] selection:text-[#410000] flex flex-col">
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
