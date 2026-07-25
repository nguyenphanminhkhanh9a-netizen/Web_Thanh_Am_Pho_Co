import MemoryForm from '@/components/ui/MemoryForm';

export default function HangDao() {
  return (
    <>
      <main className="pt-0">
        <section className="relative w-full h-[716px] overflow-hidden">
          <div id="hero-img" className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWDY9g7kxLea-Pf3GgghMvB4-r44N5_gnvuGthoDxfLcwHnhgpUi5YlMXKB9rw3Ag8Rk2U-QhyZqrrJMwViABxgERjxnDDJhOs5bexWouYC5MW3bsVHIJrCaX8snq0MRLgf5jy7VHFi2ElWBlRA7y9EwpgvMpHROi1Pnl8om835vN7uJqlgyz_90_x4J3eilEc6tMtkFWQ1Tg1uzpGADwYnjCX5ZbgCYVF62aCnUOTG_pna91X6FyL')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-margin-desktop right-margin-desktop max-w-container-max mx-auto">
            <h1 className="font-display-lg text-display-lg text-primary mb-2 drop-shadow-sm">Phố Hàng Đào</h1>
            <p className="font-headline-lg text-headline-lg text-secondary italic">Nơi tơ lụa dệt nên hồn phố</p>
          </div>
        </section>

        <div className="max-w-container-max mx-auto px-margin-desktop py-16 paper-texture border-x border-outline-variant/30">
          {/* Heritage Stage & Audio Journey */}
          <section className="mb-24">
            <div className="flex flex-col gap-12">
              
              {/* Central Stage Area */}
              <div className="relative w-full aspect-video md:aspect-[21/9] border border-outline bg-surface-container shadow-2xl overflow-hidden group">
                {/* Background Layer */}
                <div className="absolute inset-0 paper-texture opacity-30"></div>
                
                {/* Dynamic Illustrations (Stage) */}
                <div id="stage-images" className="absolute inset-0">
                  {/* Image 1: Default/Start */}
                  <div className="stage-reveal active absolute inset-0 bg-cover bg-center flex items-end p-8" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNt5u9bE_pzHdJgAkjqX0yzW9XxO3YheYigDrpBarkm_CFe3WsCDwCFSxBDUyvzv3zrfIl69kuNnLiSk0fLjRgQ0JbiqSp0SKIZFql-AmIJshT72bWvln9bKvKscTQL1c6A1_Gaoy-krChFJBw4fXE2BE96mKJxCLAFT5UDAKmKdwMVn5rH8znosntoZAFirPo_82gAWuQ3HySrsIZ7C_zffBpcFIVYV9LOZz_2J7XWvJkeg6CkcAo')" }}>
                    <div className="bg-black/40 backdrop-blur-sm p-4 border-l-4 border-primary">
                      <p className="text-white font-label-sm uppercase tracking-widest">Tiếng guốc mộc và lụa hồng</p>
                    </div>
                  </div>
                </div>

                {/* Overlay for Audio Reveal Interaction */}
                <div id="audio-reveal-effect" className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 transition-opacity duration-1000"></div>
              </div>

              {/* Synchronized Audio Player */}
              <div className="p-10 border-2 border-outline bg-surface-container-low shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 decorative-frame bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-primary/40 animate-pulse" id="pulse-icon">graphic_eq</span>
                  </div>
                </div>
                <div className="flex-grow w-full">
                  <div className="mb-6">
                    <span className="font-label-sm text-secondary tracking-widest uppercase mb-1 block">Hành trình âm thanh</span>
                    <h2 className="font-headline-lg text-headline-lg text-primary">Tiếng vọng Hàng Đào</h2>
                    <p className="text-on-surface-variant italic">Kéo thanh trượt để du hành qua các mốc thời gian của con phố.</p>
                  </div>
                  
                  <div className="bg-surface-container-high/50 p-6 rounded-none border border-outline-variant">
                    <div className="flex items-center gap-4 mb-4">
                      <button className="w-14 h-14 flex items-center justify-center bg-primary text-on-primary border border-primary hover:bg-transparent hover:text-primary transition-all active:scale-90" id="play-btn">
                        <span className="material-symbols-outlined text-2xl">play_arrow</span>
                      </button>
                      <div className="flex-grow h-2 bg-outline-variant relative group cursor-pointer" id="seek-bar-container">
                        <div id="seek-bar-progress" className="absolute inset-y-0 left-0 bg-primary w-0 transition-all duration-300"></div>
                        <input type="range" min="0" max="100" defaultValue="0" className="absolute inset-0 opacity-0 cursor-pointer w-full" id="audio-seeker" />
                        <div id="seek-bar-handle" className="absolute top-1/2 -translate-y-1/2 left-0 w-4 h-4 bg-primary border-2 border-background rounded-full transition-all duration-300 shadow-md"></div>
                      </div>
                      <span className="font-label-sm text-on-surface-variant w-24 text-right" id="time-display">00:00 / 03:00</span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <div className="flex gap-6">
                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">shuffle</span></button>
                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">repeat</span></button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-sm">volume_up</span>
                        <div className="w-24 h-1 bg-outline-variant">
                          <div className="h-full bg-secondary w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Descriptive Content */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24">
            <div className="md:col-span-5 flex flex-col justify-center">
              <h3 className="font-headline-lg text-headline-lg text-primary mb-6 relative inline-block">
                Dấu chân thời đại
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-primary"></div>
              </h3>
              <p className="mb-6 leading-relaxed text-on-surface-variant">
                Hàng Đào - con phố tấp nập bậc nhất đất Hà Thành xưa, nơi từng là cái nôi của nghề nhuộm điều, tơ lụa. Những tiếng rao trầm bổng hòa cùng tiếng guốc mộc khua trên vỉa hè lát gạch Bát Tràng đã tạo nên một bản hòa âm đặc trưng không thể nhầm lẫn. 
              </p>
              <div className="p-6 border-l-4 border-primary bg-surface-container-low italic text-on-surface-variant">
                &quot;Qua Hàng Đào ngắm lụa hồng,<br />
                Tiếng guốc khua vang một góc lòng...&quot;
              </div>
            </div>
            <div className="md:col-span-7 flex items-center justify-center">
              <div className="relative w-full max-w-lg decorative-frame p-2 bg-surface-container-high shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA09aLT9xfsgUjCST4uiAqnAfWmfb2BAHfhhd7o58XPjxLTR4ONsn-SdSpsF2QNULepvvMUuYwx0xsqMtdkKakrLzpaKp9WbExD5o0JKewDD3MrvAvGUdDZj47vYN3MVvbkfd-OtnWFQ5iRRoOFRnxcicviHcDK0N3IpCmPKpfvqKEqxRiWOokhbN-UW5ykxbCPSMeihDeKY2arup8l0ykMSC6n2VuXbjIqZfEF1_G6K1WJd4q29Le1" alt="Tram tracks" className="grayscale hover:grayscale-0 transition-all duration-1000 w-full h-auto" />
                <p className="mt-2 text-center font-label-sm text-[10px] uppercase tracking-tighter opacity-60">Tiếng tàu điện vang bóng một thời</p>
              </div>
            </div>
          </section>

          {/* Story Sharing Form */}
          <section className="max-w-3xl mx-auto p-12 border-2 border-double border-outline bg-surface-container-lowest relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background px-4 text-primary">
              <span className="material-symbols-outlined text-4xl">edit_note</span>
            </div>
            <div className="text-center mb-10">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Viết câu chuyện của bạn</h2>
              <p className="text-on-surface-variant italic">Gửi gắm những mảnh ký ức còn sót lại về tiếng guốc, về phố cũ trong tim bạn.</p>
            </div>
            <MemoryForm />
          </section>
        </div>
      </main>
    </>
  );
}
