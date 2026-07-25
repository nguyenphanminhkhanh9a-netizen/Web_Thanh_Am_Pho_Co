"use client";

import React from 'react';
import MemoryForm from '@/components/ui/MemoryForm';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';

export default function OQuanChuong() {
  const { isPlaying, currentTime, duration, progress, togglePlay, seek, formatTime } = useAudioPlayer("https://upload.wikimedia.org/wikipedia/commons/1/15/Bicycle_bell.ogg");
  return (
    <>
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center grayscale-[30%] brightness-[85%] transition-transform duration-[20s] ease-linear" 
              id="hero-image" 
              style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/2/27/Tonkin_-_Hano%C3%AF_-_Ph%E1%BB%91_H%C3%A0ng_M%E1%BA%AFm.jpg')" }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-margin-desktop max-w-container-max mx-auto pb-20">
            <span className="font-label-sm text-primary uppercase tracking-widest mb-4 bg-surface-container/60 px-3 py-1 backdrop-blur-md">Di tích lịch sử</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-4 italic">Ô Quan Chưởng</h1>
            <p className="max-w-2xl text-on-surface-variant font-body-md text-lg leading-relaxed italic">
              &quot;Tiếng vọng từ cửa ô duy nhất còn sót lại của kinh thành xưa...&quot;
            </p>
          </div>
        </section>

        {/* Synchronized Stage Section */}
        <section className="py-20 bg-surface-container-low border-y border-outline-variant">
          <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Audio Player: Left Side */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-headline-lg text-headline-lg text-primary italic">Sân Khấu Ký Ức</h2>
                <p className="text-on-surface-variant">Lắng nghe và quan sát những hình ảnh lịch sử hiện dần qua từng nhịp thở của thời gian. Mỗi âm thanh là một cánh cửa mở vào quá khứ.</p>
              </div>
              <div className="bg-background p-8 border border-outline-variant shadow-sm relative overflow-hidden group">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                <h3 className="font-label-sm uppercase text-secondary mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>volume_up</span>
                  Bản Ghi Di Sản
                </h3>
                <div className="flex flex-col items-center gap-8">
                  <div className="relative">
                    <div className={`w-32 h-32 rounded-full bg-primary-container flex items-center justify-center ring-8 ring-surface-container-high overflow-hidden shadow-inner ${isPlaying ? 'animate-spin-slow' : ''}`} id="record-player">
                      <div className="w-6 h-6 bg-background rounded-full z-10 border border-outline-variant"></div>
                      <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/aa/%C3%94_Quan_Ch%C6%B0%E1%BB%9Fng.jpg')" }}></div>
                    </div>
                    <div className={`absolute -right-4 top-0 w-2 h-16 bg-outline origin-top transition-transform duration-500 ${isPlaying ? 'rotate-12' : '-rotate-12'}`} id="stylus"></div>
                  </div>
                  <div className="w-full text-center">
                    <p className="font-headline-lg text-2xl text-primary italic mb-6 min-h-[40px]" id="track-title">Hà Nội nghìn năm văn vật</p>
                    <div className="flex items-center gap-4 text-on-surface-variant font-label-sm mb-6">
                      <span id="current-time">{formatTime(currentTime)}</span>
                      <div className="flex-1 h-1 bg-outline-variant relative cursor-pointer group/progress" id="progress-container">
                        <div className="absolute inset-y-0 left-0 bg-primary transition-all duration-300 pointer-events-none" id="progress-bar" style={{ width: `${progress}%` }}></div>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={duration ? (currentTime / duration) * 100 : 0}
                          onChange={(e) => seek(Number(e.target.value) / 100 * duration)} 
                          className="absolute inset-0 opacity-0 cursor-pointer w-full z-10" 
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-2 border-background rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-all pointer-events-none" id="progress-knob" style={{ left: `${progress}%` }}></div>
                      </div>
                      <span>{formatTime(duration)}</span>
                    </div>
                    <div className="flex justify-center gap-8">
                      <button className="hover:text-primary transition-colors active:scale-90" id="prev-btn"><span className="material-symbols-outlined text-4xl">skip_previous</span></button>
                      <button onClick={togglePlay} className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-primary-container transition-all shadow-md active:scale-95 z-20" id="play-btn">
                        <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{isPlaying ? 'pause' : 'play_arrow'}</span>
                      </button>
                      <button className="hover:text-primary transition-colors active:scale-90" id="next-btn"><span className="material-symbols-outlined text-4xl">skip_next</span></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="italic text-on-surface-variant text-sm border-l-2 border-primary pl-4 py-2 bg-background/50">
                &quot;Mỗi đoạn âm thanh mở ra một góc nhìn mới về Ô Quan Chưởng...&quot;
              </div>
            </div>
            
            {/* Visual Stage: Right Side */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[500px] relative">
              <div className="w-full max-w-2xl perspective-1000">
                {/* Stage Frame */}
                <div className="vintage-frame relative aspect-[4/3] w-full shadow-2xl bg-surface-dim overflow-hidden group">
                  {/* Placeholder for dynamic images */}
                  <div className="relative w-full h-full" id="stage-content">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="stage-image active absolute inset-0 w-full h-full object-cover reveal-sweep" id="img-0" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Chi%E1%BA%BFc_c%E1%BB%95ng_c%E1%BB%95_k%C3%ADnh_c%E1%BB%A7a_ng%C3%B4i_nh%C3%A0_s%E1%BB%91_29_ph%E1%BB%91_L%C3%AA_Ng%E1%BB%8Dc_H%C3%A2n_%28tr%C6%B0%E1%BB%9Bc_kia_l%C3%A0_ph%E1%BB%91_L%E1%BB%AF_Gia%29%2C_qu%E1%BA%ADn_Hai_B%C3%A0_Tr%C6%B0ng%2C_H%C3%A0_N%E1%BB%99i_%2802%29.jpg" alt="Image 0"/>
                  </div>
                  {/* Feedback overlay */}
                  <div className="absolute inset-0 pointer-events-none border-[12px] border-primary/5 opacity-0 group-[.active]:opacity-100 transition-opacity duration-1000"></div>
                  {/* Caption area */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-label-sm uppercase tracking-widest text-secondary-fixed mb-1" id="image-label">Tư liệu 1920</p>
                    <p className="font-body-md text-sm italic" id="image-caption">Hình ảnh hiếm hoi về cổng thành xưa với nhịp sống bình dị của người dân.</p>
                  </div>
                </div>
                {/* Stage Base/Shadow */}
                <div className="mt-8 flex justify-center gap-4">
                  <div className="h-1 w-8 bg-primary rounded-full indicator active" data-index="0"></div>
                  <div className="h-1 w-8 bg-outline-variant rounded-full indicator" data-index="1"></div>
                  <div className="h-1 w-8 bg-outline-variant rounded-full indicator" data-index="2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-20 px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 space-y-8">
              <h2 className="font-headline-lg text-headline-lg text-primary border-b border-outline-variant pb-4">Vết Tích Thời Gian</h2>
              <div className="prose prose-stone max-w-none">
                <p className="text-on-surface-variant leading-relaxed text-lg first-letter:text-6xl first-letter:font-headline-lg first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                  Ô Quan Chưởng hay còn gọi là cửa Đông Hà, là một cửa ô của Hà Nội xưa, nằm ở phía Đông của kinh thành Thăng Long. Đây là cửa ô duy nhất còn sót lại nguyên vẹn cho đến ngày nay. Được xây dựng vào năm Cảnh Hưng thứ 10 (1749), công trình mang đậm dấu ấn kiến trúc thời Lê với vọng lâu và mái vòm cuốn đặc trưng.
                </p>
                <p className="text-on-surface-variant leading-relaxed mt-4">
                  Tên gọi &quot;Quan Chưởng&quot; được đặt để tưởng nhớ một viên quan Chưởng vệ cùng các binh sĩ đã anh dũng hy sinh tại đây trong cuộc chiến đấu chống quân Pháp vào năm 1873. Sự hy sinh đó không chỉ bảo vệ cửa ngõ thủ đô mà còn khắc sâu vào lòng người dân Hà Nội một biểu tượng của lòng yêu nước.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container p-8 border-l-4 border-primary">
              <h3 className="font-headline-lg text-2xl text-primary mb-4 italic">Bạn có biết?</h3>
              <ul className="space-y-4 text-sm text-on-surface-variant">
                <li className="flex gap-3"><span className="text-primary font-bold">01.</span> Cửa ô này từng là nơi kiểm soát hàng hóa từ sông Hồng vào chợ Đồng Xuân.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">02.</span> Một tấm bia đá năm 1881 vẫn còn gắn trên tường cổng, cấm quân lính không được nhũng nhiễu dân.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">03.</span> Kiến trúc vọng lâu phía trên từng là nơi lính canh quan sát toàn bộ khu vực phía Đông.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="bg-surface-container-high py-16">
          <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Vị Trí Trong Lòng Phố</h2>
              <p className="text-on-surface-variant mb-8">Nằm ở đầu phố Hàng Chiếu, cửa ô này như một nút thắt nối liền quá khứ giao thương nhộn nhịp của bến sông Hồng với sự trầm mặc của khu phố cổ.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="font-label-sm uppercase">Phố Hàng Chiếu, Hoàn Kiếm, Hà Nội</span>
                </div>
                <div className="flex items-center gap-4 text-secondary">
                  <span className="material-symbols-outlined">schedule</span>
                  <span className="font-label-sm uppercase">Mở cửa tự do - Luôn luôn chào đón</span>
                </div>
              </div>
            </div>
            <div className="h-80 ink-bleed-border overflow-hidden bg-surface-dim relative">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
              <div className="w-full h-full bg-cover bg-center grayscale-[20%]" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/5/54/Den_Bach_Ma.jpg')" }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
                <div className="absolute w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* User Form: Story Submission */}
        <section className="py-24 px-margin-desktop max-w-2xl mx-auto text-center">
          <span className="material-symbols-outlined text-primary text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 0" }}>edit_note</span>
          <h2 className="font-display-lg text-display-lg text-primary mb-2 italic">Viết câu chuyện của bạn</h2>
          <p className="text-on-surface-variant mb-12 italic">Chia sẻ những ký ức hoặc cảm nhận của bạn khi đứng dưới vòm cổng này.</p>
          <MemoryForm locationId="o-quan-chuong" showPhotoUpload={true} />
        </section>
      </main>
    </>
  );
}
