import React from 'react';

export default function DemoNavbar() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <div>
          <h2 className="text-2xl font-bold mb-4 text-on-background">Phương án 1: Biển Hiệu Gỗ Sồi (Dark Wood & Gold)</h2>
          <div className="relative h-64 overflow-hidden border border-outline rounded-lg bg-surface-container">
            {/* Header PA 1 */}
            <header className="absolute top-0 w-full bg-[#2C241B] border-b-4 border-double border-[#D4AF37] z-10 shadow-xl">
              <nav className="flex justify-between items-center w-full px-6 py-4">
                <h1 className="font-display-lg text-[28px] text-[#F1E5CE] tracking-tighter">
                  Thanh Âm Phố Cổ
                </h1>
                <div className="flex gap-6">
                  <span className="font-label-sm uppercase text-[#D4AF37]">Hành Trình</span>
                  <span className="font-label-sm uppercase text-[#F1E5CE]/70">Ký Ức</span>
                </div>
              </nav>
            </header>
            <div className="pt-24 p-6">
              <p className="text-on-surface-variant font-body-lg">Cuộn để xem... (Nền này đặc khối và nổi bật)</p>
              <div className="h-40 bg-surface-variant/30 mt-4 rounded"></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-on-background">Phương án 2: Giấy Dó Xuyên Thấu (Vintage Glassmorphism)</h2>
          <div className="relative h-64 overflow-auto border border-outline rounded-lg bg-surface-container">
            {/* Header PA 2 */}
            <header className="sticky top-0 w-full bg-[#D5C3A5]/80 backdrop-blur-md border-b border-[#6B1B1B] z-10">
              <nav className="flex justify-between items-center w-full px-6 py-4">
                <h1 className="font-display-lg text-[28px] text-[#2C241B] tracking-tighter">
                  Thanh Âm Phố Cổ
                </h1>
                <div className="flex gap-6">
                  <span className="font-label-sm uppercase text-[#6B1B1B]">Hành Trình</span>
                  <span className="font-label-sm uppercase text-[#2C241B]/70">Ký Ức</span>
                </div>
              </nav>
            </header>
            <div className="pt-8 p-6">
              <p className="text-on-surface-variant font-body-lg">Cuộn trang lên xuống để thấy nội dung trượt mờ mờ qua thanh Navbar (Kính mờ).</p>
              <div className="h-20 bg-primary/20 mt-4 rounded"></div>
              <div className="h-20 bg-primary/40 mt-4 rounded"></div>
              <div className="h-20 bg-primary/60 mt-4 rounded"></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-on-background">Phương án 3: Gáy Sổ Thư Pháp (Classic Book Binding 3D)</h2>
          <div className="relative h-64 overflow-hidden border border-outline rounded-lg bg-surface-container">
            {/* Header PA 3 */}
            <header className="absolute top-0 w-full bg-gradient-to-b from-[#4A1212] via-[#6B1B1B] to-[#3A0E0E] border-b-2 border-[#220808] z-10 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              {/* Decorative book binding lines */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, #000 40px, #000 42px)' }}></div>
              <nav className="flex justify-between items-center w-full px-6 py-4 relative z-20">
                <h1 className="font-display-lg text-[28px] text-[#F1E5CE] tracking-tighter drop-shadow-md">
                  Thanh Âm Phố Cổ
                </h1>
                <div className="flex gap-6">
                  <span className="font-label-sm uppercase text-[#F1E5CE] drop-shadow-md">Hành Trình</span>
                  <span className="font-label-sm uppercase text-[#F1E5CE]/60">Ký Ức</span>
                </div>
              </nav>
            </header>
            <div className="pt-24 p-6">
              <p className="text-on-surface-variant font-body-lg">Cuộn để xem... (Có chiều sâu 3D và vân gáy sách)</p>
              <div className="h-40 bg-surface-variant/30 mt-4 rounded"></div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
