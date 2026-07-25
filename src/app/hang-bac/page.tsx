"use client";

import React from 'react';
import MemoryForm from '@/components/ui/MemoryForm';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';

export default function HangBac() {
  const { isPlaying, currentTime, duration, progress, togglePlay, seek, formatTime } = useAudioPlayer("https://upload.wikimedia.org/wikipedia/commons/1/15/Bicycle_bell.ogg");
  return (
    <>
      <main className="pt-0 md:pt-0">
        {/* Hero Section */}
        <section className="relative h-[819px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center scale-105 transform hover:scale-100 transition-transform duration-[10s]" 
            style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/5/50/Hano%C3%AF_-_Rue_des_Radeaux.jpg')" }}
          ></div>
          <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pb-24 px-margin-mobile text-center">
            <span className="font-label-sm text-on-primary tracking-[0.3em] uppercase mb-4 opacity-80">Phố Nghề Ngàn Năm</span>
            <h1 className="font-display-lg text-display-lg text-on-primary italic mb-6">Phố Hàng Bạc</h1>
            <div className="w-24 h-[1px] bg-on-primary/40"></div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-20 grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-start-3 md:col-span-8 text-center">
            <p className="text-xl md:text-2xl italic leading-relaxed text-on-surface-variant">
              &quot;Giữa lòng Hà Nội băm sáu phố phường, Hàng Bạc như một nốt trầm sâu lắng, nơi tiếng búa gõ nhịp nhàng lên những thỏi bạc nguyên chất đã vang vọng suốt nhiều thế kỷ.&quot;
            </p>
            <div className="mt-12 flex justify-center opacity-30">
              <span className="material-symbols-outlined text-4xl">flare</span>
            </div>
          </div>
        </section>

        {/* Stage Section: Unified Audio and Visual Experience */}
        <section className="bg-surface-container-low py-24 border-y border-outline-variant overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <span className="font-label-sm text-secondary uppercase tracking-widest block mb-2">Hành Trình Thính Giác &amp; Thị Giác</span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Sân Khấu Ký Ức</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Audio Controls & Context (Left) */}
              <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
                <div className="p-8 bg-surface-container/50 border border-outline-variant/30 backdrop-blur-sm">
                  <h3 className="font-headline-lg text-2xl text-primary mb-4" id="audio-title">Tiếng chạm khắc kim hoàn</h3>
                  <p className="text-on-surface-variant leading-loose mb-6" id="audio-desc">
                    Hãy nhắm mắt và lắng nghe nhịp điệu của lịch sử. Tiếng búa gõ nhỏ giọt trên đe đồng, tiếng mũi ve lướt nhẹ trên mặt bạc, tạo nên những đường vân mây, sóng nước tinh xảo.
                  </p>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-6">
                      <button onClick={togglePlay} id="play-btn" className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform active:scale-95 z-20">
                        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{isPlaying ? 'pause' : 'play_arrow'}</span>
                      </button>
                      <div className="flex-1 space-y-2">
                        <div className="relative h-6 flex items-center w-full">
                          <input 
                            type="range" 
                            className="w-full absolute inset-0 opacity-0 cursor-pointer z-10" 
                            value={duration ? (currentTime / duration) * 100 : 0} 
                            max="100" 
                            onChange={(e) => seek(Number(e.target.value) / 100 * duration)} 
                          />
                          <div className="relative h-[2px] bg-outline-variant w-full">
                            <div id="progress-bar" className="absolute top-0 left-0 h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }}></div>
                          </div>
                        </div>
                        <div className="flex justify-between font-label-sm text-on-surface-variant text-[10px]">
                          <span id="current-time">{formatTime(currentTime)}</span>
                          <span id="total-time">{formatTime(duration)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Playback Indicator */}
                <div className="flex items-center gap-4 opacity-40">
                  <div className="flex gap-1 h-8 items-end">
                    <div className="w-1 bg-primary animate-[bounce_1.2s_infinite]" style={{ height: '40%' }}></div>
                    <div className="w-1 bg-primary animate-[bounce_1.5s_infinite]" style={{ height: '80%' }}></div>
                    <div className="w-1 bg-primary animate-[bounce_1s_infinite]" style={{ height: '60%' }}></div>
                    <div className="w-1 bg-primary animate-[bounce_1.3s_infinite]" style={{ height: '30%' }}></div>
                  </div>
                  <span className="font-label-sm text-xs italic">Âm thanh đang được tái hiện...</span>
                </div>
              </div>

              {/* The Central 'Stage' Area (Right/Center) */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] vintage-frame bg-surface-dim overflow-hidden shadow-2xl">
                  {/* Image Layers (Synchronized via JS) */}
                  <div id="stage-viewport" className="relative w-full h-full">
                    {/* Image 1 */}
                    <div className="stage-image absolute inset-0 opacity-100 scale-100 stage-image-transition" style={{ background: "url('https://upload.wikimedia.org/wikipedia/commons/b/bf/H%C3%A0ng_%C4%90%C3%A0o%2C_one_of_36_streets_of_HaNoi.jpg') center/cover no-repeat" }}>
                      <div className="absolute inset-0 revealed-glow bg-primary/5"></div>
                    </div>
                  </div>
                  
                  {/* Caption overlay that appears with each image */}
                  <div className="absolute bottom-6 left-6 right-6 bg-primary/80 backdrop-blur-md p-4 translate-y-4 opacity-0 transition-all duration-700" id="stage-caption">
                    <p className="text-on-primary font-label-sm italic" id="caption-text">Nghệ nhân chạm bạc năm 1932</p>
                  </div>

                  {/* Reveal Overlay (Light Sweep) */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-on-primary/10 to-transparent -translate-x-full" id="reveal-sweep"></div>
                </div>
                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary stage-dot"></div>
                  <div className="w-2 h-2 rounded-full bg-outline-variant stage-dot"></div>
                  <div className="w-2 h-2 rounded-full bg-outline-variant stage-dot"></div>
                  <div className="w-2 h-2 rounded-full bg-outline-variant stage-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Memory Submission Form */}
        <section className="bg-surface-container-highest py-24">
          <div className="max-w-[800px] mx-auto px-margin-mobile">
            <div className="text-center mb-16">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">edit_note</span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Gửi gắm ký ức</h2>
              <p className="mt-4 text-on-surface-variant">Chia sẻ câu chuyện hoặc cảm xúc của bạn về tiếng chuông, tiếng gõ của Hàng Bạc để cùng chúng tôi bồi đắp kho tàng di sản này.</p>
            </div>
            <MemoryForm locationId="hang-bac" showPhotoUpload={true} />
          </div>
        </section>
      </main>
    </>
  );
}
