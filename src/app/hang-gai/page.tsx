"use client";

import React from 'react';
import MemoryForm from '@/components/ui/MemoryForm';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';

export default function HangGai() {
  const { isPlaying, currentTime, duration, progress, togglePlay, seek, formatTime } = useAudioPlayer("https://upload.wikimedia.org/wikipedia/commons/1/15/Bicycle_bell.ogg");
  return (
    <>
      <main className="pt-0">
        {/* Immersive Header Section */}
        <section className="relative w-full h-[716px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/c/c6/Old_Quarter%2C_Hanoi_%285678877743%29.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 h-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col justify-end pb-16">
            <span className="font-label-sm text-primary mb-2 tracking-[0.2em] uppercase">Di Sản Thăng Long</span>
            <h1 className="font-display-lg text-display-lg md:text-[64px] text-primary max-w-2xl leading-tight mb-4 italic">
              Phố Hàng Gai: <br/>Nơi Dệt Tình Hà Nội
            </h1>
            <p className="font-body-md text-on-surface-variant max-w-xl text-lg italic">
              &quot;Tiếng thoi đưa lách cách đêm trường, đánh thức những ký ức rực rỡ của kinh kỳ xưa cũ.&quot;
            </p>
          </div>
        </section>

        {/* Synchronized Stage Area */}
        <section className="bg-surface-container py-20 overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              
              {/* Left: Audio Controls & Context */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="font-label-sm text-primary tracking-widest uppercase">Thanh Âm Đang Phát</span>
                  <h2 className="font-headline-lg text-primary leading-tight">Giai Điệu Của Lụa</h2>
                  <p className="font-body-md text-on-surface-variant italic">
                    Lắng nghe nhịp điệu của lịch sử. Các hình ảnh bên cạnh sẽ tự động hiện diện theo từng chương hồi của âm thanh.
                  </p>
                </div>

                {/* Synchronized Audio Player */}
                <div className="ink-bleed-border p-8 bg-background relative overflow-hidden group">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-6">
                      <button onClick={togglePlay} id="master-play" className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all shadow-lg btn-active z-20">
                        <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{isPlaying ? 'pause' : 'play_arrow'}</span>
                      </button>
                      <div>
                        <h3 id="current-track-title" className="font-headline-lg text-primary text-xl">Tiếng khung cửi &amp; Tiếng rao trưa</h3>
                        <div className="audio-wave mt-2 opacity-60">
                          <div className="wave-bar" style={{ animationDelay: '0.1s' }}></div>
                          <div className="wave-bar" style={{ animationDelay: '0.3s' }}></div>
                          <div className="wave-bar" style={{ animationDelay: '0.5s' }}></div>
                          <div className="wave-bar" style={{ animationDelay: '0.2s' }}></div>
                          <div className="wave-bar" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex-grow h-1.5 bg-outline-variant relative cursor-pointer" id="progress-bar">
                        <div className="absolute top-0 left-0 h-full bg-primary transition-all duration-300 pointer-events-none" id="progress-fill" style={{ width: `${progress}%` }}></div>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={duration ? (currentTime / duration) * 100 : 0}
                          onChange={(e) => seek(Number(e.target.value) / 100 * duration)} 
                          className="absolute inset-0 opacity-0 cursor-pointer w-full z-10" 
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-background shadow-md pointer-events-none transition-all duration-300" id="progress-knob" style={{ left: `${progress}%` }}></div>
                      </div>
                      <div className="flex justify-between font-label-sm text-on-surface-variant text-[10px]">
                        <span id="time-current">{formatTime(currentTime)}</span>
                        <span id="time-total">{formatTime(duration)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="decorative-frame p-6 bg-surface-container-low">
                  <h4 className="font-label-sm text-primary mb-4 border-b border-outline-variant pb-2">CHÚ THÍCH HIỆN TẠI</h4>
                  <p id="image-caption" className="font-body-md text-on-surface-variant italic text-sm transition-all duration-500">
                    &quot;Khung cảnh nhộn nhịp của phố Hàng Gai những năm 1920, nơi tơ lụa phủ kín các cửa hàng.&quot;
                  </p>
                </div>
              </div>

              {/* Right: Stage Images */}
              <div className="lg:col-span-7">
                <div id="heritage-stage" className="relative aspect-[4/3] decorative-frame bg-surface-dim overflow-hidden shadow-2xl">
                  {/* Image Layers */}
                  <div className="stage-image active" data-time="0" data-caption="Khung cảnh nhộn nhịp của phố Hàng Gai những năm 1920, nơi tơ lụa phủ kín các cửa hàng.">
                    <div className="w-full h-full bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/d/da/Old_Quarter_Street_Scene_-_Hanoi_-_Vietnam_%2848256301206%29.jpg')" }}></div>
                    <div className="reveal-sweep"></div>
                  </div>
                  
                  <div className="stage-overlay absolute inset-0 z-30"></div>
                  
                  {/* Navigation dots */}
                  <div className="absolute bottom-6 left-6 z-40 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-7 space-y-8">
            <div className="prose prose-stone prose-lg text-on-surface-variant italic leading-relaxed">
              <p>
                Nằm giữa lòng phố cổ, Hàng Gai không chỉ là trung tâm của tơ lụa và gấm vóc, mà còn là bản giao hưởng của những thanh âm lao động bình dị. Từ thuở xưa, nơi đây vang vọng tiếng khung cửi lách cách từ những xưởng dệt gia đình, hòa quyện với tiếng rao trưa ngọt ngào của những gánh hàng rong len lỏi qua từng con ngõ nhỏ.
              </p>
              <p>
                Mỗi mét lụa Hàng Gai không chỉ mang sắc màu của thiên nhiên, mà còn chứa đựng cả hơi thở của thời gian và tâm hồn người thợ dệt Hà thành hào hoa, tinh tế.
              </p>
            </div>
          </div>
          
          {/* Side Card: Information */}
          <div className="md:col-span-5 space-y-6">
            <div className="decorative-frame p-6 bg-surface">
              <h4 className="font-label-sm text-primary mb-4 border-b border-outline-variant pb-2">THÔNG TIN DI SẢN</h4>
              <dl className="space-y-4">
                <div>
                  <dt className="font-label-sm text-on-surface-variant uppercase text-[10px]">Tên gọi khác</dt>
                  <dd className="font-body-md text-primary">Phố Tơ Lụa (Silk Street)</dd>
                </div>
                <div>
                  <dt className="font-label-sm text-on-surface-variant uppercase text-[10px]">Thời kỳ hưng thịnh</dt>
                  <dd className="font-body-md text-primary">Cuối thế kỷ XIX - Đầu thế kỷ XX</dd>
                </div>
                <div>
                  <dt className="font-label-sm text-on-surface-variant uppercase text-[10px]">Sản vật đặc trưng</dt>
                  <dd className="font-body-md text-primary">Lụa tơ tằm, Gấm hoa, Đồ thêu tay</dd>
                </div>
                <div>
                  <dt className="font-label-sm text-on-surface-variant uppercase text-[10px]">Vị trí</dt>
                  <dd className="font-body-md text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    Quận Hoàn Kiếm, Hà Nội
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Memories Feedback Form */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <div className="max-w-3xl mx-auto border-t border-outline-variant pt-16 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background px-4 text-primary italic font-headline-lg">
              Gửi Ký Ức
            </div>
            <div className="text-center mt-8 mb-12">
              <p className="font-body-md text-on-surface-variant italic">
                Bạn có câu chuyện hay kỷ niệm nào về con phố này không? Hãy chia sẻ cùng chúng tôi để di sản này mãi luôn sống động.
              </p>
            </div>
            <MemoryForm locationId="hang-gai" showPhotoUpload={true} />
          </div>
        </section>

        {/* Footer Shell */}
        <section className="bg-surface-container-low py-12 border-t border-outline-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-2xl">location_on</span>
              <span className="font-label-sm uppercase tracking-[0.2em]">Vị trí di sản</span>
            </div>
            <h3 className="font-display-lg text-3xl md:text-4xl text-on-surface italic">
              Phố Hàng Gai, Quận Hoàn Kiếm, Hà Nội
            </h3>
            <div className="w-24 h-px bg-outline-variant mt-4"></div>
          </div>
        </section>
      </main>
    </>
  );
}
