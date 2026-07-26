"use client";

import React from 'react';
import MemoryForm from '@/components/ui/MemoryForm';
import AudioPlayer from '@/components/ui/AudioPlayer';

export default function HangBac() {
  return (
    <>
      <main className="pt-0 md:pt-0">
        {/* Hero Section */}
        <section className="relative h-[819px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-primary/40 z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center scale-105 transform hover:scale-100 transition-transform duration-[10s]" 
            style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/e3/H%C3%A0ng_B%E1%BA%A1c.jpg')" }}
          ></div>
          <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pb-24 px-margin-mobile text-center">
            <span className="font-label-sm text-on-primary tracking-[0.3em] uppercase mb-4 opacity-80">Giai điệu tinh xảo - Artisanal Metal</span>
            <h1 className="font-display-lg text-4xl md:text-5xl text-on-primary italic mb-6 drop-shadow-md">Phố Hàng Bạc</h1>
            <div className="w-24 h-[1px] bg-on-primary/40"></div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-20 grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-start-3 md:col-span-8 text-center">
            <p className="text-xl md:text-2xl italic leading-relaxed text-on-surface-variant">
              &quot;Tiếng gõ chạm khắc bạc lách cách, nhịp nhàng từ các đe nhỏ của thợ kim hoàn (lách cách... chát...). Kèm theo đó là tiếng quạt lò thổi than hồng xè xè và tiếng dội kim loại vào nước làm nguội. Đôi khi lại vẳng lên tiếng rao của các gánh hàng rong luồn lách qua ngõ nhỏ.&quot;
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
              <div className="lg:col-span-5 order-2 lg:order-1 flex items-center">
                <AudioPlayer 
                  audioSrc="" /* TODO: Chèn âm thanh: Tiếng gõ chạm khắc bạc Hàng Bạc ASMR */
                  trackTitle="Giai điệu tinh xảo"
                  description="Hãy nhắm mắt và lắng nghe nhịp điệu của lịch sử. Tiếng búa gõ nhỏ giọt trên đe đồng, tiếng mũi ve lướt nhẹ trên mặt bạc, tạo nên những đường vân mây, sóng nước tinh xảo. (Từ khóa Youtube: Nghề kim hoàn truyền thống Phố cổ Hà Nội sound)"
                  albumArt="https://upload.wikimedia.org/wikipedia/commons/8/81/Hanoi_-_H%C3%A0ng_B%E1%BA%A1c_Street_-_1.jpg"
                />
              </div>

              {/* The Central 'Stage' Area (Right/Center) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] vintage-frame bg-surface-dim overflow-hidden shadow-2xl">
                  {/* Image Layers (Synchronized via JS) */}
                  <div id="stage-viewport" className="relative w-full h-full">
                    {/* Image 1 */}
                    <div className="stage-image active absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://longvietarch.wordpress.com/wp-content/uploads/2024/04/2-6.jpg')" }}>
                      <div className="absolute inset-0 revealed-glow bg-primary/5"></div>
                    </div>
                  </div>
                  
                  {/* Caption overlay that appears with each image */}
                  <div className="absolute bottom-6 left-6 right-6 bg-primary/95 p-4 translate-y-4 opacity-0 transition-all duration-700" id="stage-caption">
                    <p className="text-on-primary font-label-sm italic" id="caption-text">Hàng Bạc - Nghề kim hoàn truyền thống</p>
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
