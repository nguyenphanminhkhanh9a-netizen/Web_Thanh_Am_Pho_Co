"use client";

import React from 'react';
import MemoryForm from '@/components/ui/MemoryForm';
import AudioPlayer from '@/components/ui/AudioPlayer';

export default function HangDao() {
  return (
    <>
      <main className="pt-0">
        <section className="relative w-full h-[716px] overflow-hidden">
          <div id="hero-img" className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms]" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/0/0d/H%C3%B4tel_de_la_Paix%2C_Hanoi.jpg')" }}></div>
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
                  <div className="stage-reveal active absolute inset-0 bg-cover bg-center flex items-end p-8" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/6/65/Khu_pho_co_Ha_Noi.png')" }}>
                    <div className="bg-black/40 backdrop-blur-sm p-4 border-l-4 border-primary">
                      <p className="text-white font-label-sm uppercase tracking-widest">Tiếng guốc mộc và lụa hồng</p>
                    </div>
                  </div>
                </div>

                {/* Overlay for Audio Reveal Interaction */}
                <div id="audio-reveal-effect" className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 transition-opacity duration-1000"></div>
              </div>

              {/* Synchronized Audio Player */}
              <div className="flex justify-center mt-8">
                <div className="w-full max-w-3xl">
                  <AudioPlayer 
                    audioSrc="https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg"
                    trackTitle="Tiếng vọng Hàng Đào"
                    description="Kéo thanh trượt để du hành qua các mốc thời gian của con phố."
                    albumArt="https://upload.wikimedia.org/wikipedia/commons/6/65/Khu_pho_co_Ha_Noi.png"
                  />
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Old_Quarter%2C_Hanoi_%2814%29_%2838464498712%29.jpg" alt="Tram tracks" className="grayscale hover:grayscale-0 transition-all duration-1000 w-full h-auto" />
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
            <MemoryForm locationId="hang-dao" showPhotoUpload={true} />
          </section>
        </div>
      </main>
    </>
  );
}
