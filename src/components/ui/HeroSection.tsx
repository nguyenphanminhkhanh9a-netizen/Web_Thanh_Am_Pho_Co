"use client";

import React, { useState } from 'react';

export default function HeroSection() {
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop py-12">
      {isPlayingTrailer ? (
        <div className="absolute inset-0 z-20 bg-background flex flex-col items-center justify-center animate-fade-in">
          <button 
            onClick={() => setIsPlayingTrailer(false)}
            className="absolute top-6 right-6 text-on-background hover:text-primary z-30 transition-colors"
            title="Đóng Video"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          
          {/* Placeholder cho Video */}
          <div className="w-full max-w-5xl aspect-video bg-surface-container-high border-2 border-outline-variant flex flex-col items-center justify-center text-on-surface-variant relative shadow-xl">
            <span className="material-symbols-outlined text-6xl mb-4 opacity-50">movie</span>
            <p className="font-headline-lg text-2xl">Khung chứa Video Trailer</p>
            <p className="font-body-md mt-2 opacity-70">Thay thế thẻ div này bằng thẻ &lt;iframe&gt; YouTube hoặc &lt;video&gt; mp4 của bạn</p>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center grayscale contrast-125 opacity-15" 
              style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/9/99/Chi%E1%BA%BFc_c%E1%BB%95ng_c%E1%BB%95_k%C3%ADnh_c%E1%BB%A7a_ng%C3%B4i_nh%C3%A0_s%E1%BB%91_29_ph%E1%BB%91_L%C3%AA_Ng%E1%BB%8Dc_H%C3%A2n_%28tr%C6%B0%E1%BB%9Bc_kia_l%C3%A0_ph%E1%BB%91_L%E1%BB%AF_Gia%29%2C_qu%E1%BA%ADn_Hai_B%C3%A0_Tr%C6%B0ng%2C_H%C3%A0_N%E1%BB%99i_%2802%29.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-primary mb-6 block">Dự Án Bảo Tồn Văn Hóa</span>
            <h2 className="font-display-lg text-[64px] md:text-[84px] leading-tight text-primary mb-8 animate-fade-in">
              Trailer Dự Án:<br/>Thanh Âm Phố Cổ
            </h2>
            
            {/* Play Button Container */}
            <div 
              className="relative group cursor-pointer mt-4" 
              onClick={() => setIsPlayingTrailer(true)}
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <button className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center ink-border bg-primary text-background rounded-full transition-transform duration-500 group-hover:scale-110 active:scale-95 shadow-2xl">
                <span className="material-symbols-outlined text-4xl md:text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </button>
            </div>
            
            <p className="font-body-md text-body-md text-on-surface-variant mt-12 max-w-xl italic">
              &quot;Lắng nghe nhịp thở của một Hà Nội xưa cũ qua từng thanh âm bình dị, từ tiếng tàu điện leng keng đến tiếng rao trưa hè...&quot;
            </p>
          </div>
        </>
      )}
    </section>
  );
}
