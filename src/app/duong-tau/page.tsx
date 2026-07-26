"use client";

import React from 'react';
import MemoryForm from '@/components/ui/MemoryForm';
import AudioPlayer from '@/components/ui/AudioPlayer';

export default function DuongTau() {
  return (
    <>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        {/* Hero & Audio Stage Section */}
        <section className="mb-24 flex flex-col gap-12">
          {/* Central Stage Area */}
          <div id="visual-stage" className="relative w-full aspect-video md:h-[600px] ink-border-double p-2 overflow-hidden bg-surface-dim">
            {/* Background Pulse */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div id="stage-pulse" className="w-64 h-64 rounded-full border border-primary/20 hidden"></div>
            </div>

            {/* Display Images (Dynamic) */}
            <div id="image-container" className="relative w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                id="stage-image" 
                className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 reveal-active" 
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/Train_street_in_Hanoi.jpg" 
                alt="Phố Đường Tàu" 
              />
              
              <div id="stage-caption" className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-md bg-surface/90 p-6 ink-border shadow-2xl backdrop-blur-sm transform transition-all duration-700">
                <span className="font-label-sm text-secondary uppercase tracking-[0.2em] mb-2 block" id="caption-label">Phố Đường Tàu</span>
                <p className="font-body-md italic text-on-surface" id="caption-text">&quot;Điểm nhấn cao trào - Climax & Transit. Nơi cuộc sống sinh hoạt áp sát những thanh ray xình xịch rầm rập mỗi chuyến tàu qua.&quot;</p>
              </div>
            </div>

            {/* Stage Decorative Elements */}
            <div className="absolute top-6 right-6 flex gap-2">
              <span className="material-symbols-outlined text-primary/40 animate-pulse">settings_input_antenna</span>
              <span className="font-label-sm text-primary/40 uppercase">Sóng di sản - 90.0 MHz</span>
            </div>
          </div>

          {/* Integrated Audio Controls */}
          <div className="relative -mt-20 mx-4 md:mx-12 z-10 flex justify-center">
            <div className="max-w-3xl w-full">
              <AudioPlayer 
                audioSrc="" /* TODO: Chèn âm thanh: Tiếng tàu hỏa qua phố cổ Hà Nội sound */
                trackTitle="Thanh Âm Đường Tàu: Tiếng còi tàu và bánh sắt"
                subtitle="Đang trình chiếu • Điểm nhấn cao trào"
                description="Tiếng còi tàu hỏa vang dội, kéo dài vọng qua các vòm đá. Tiếng bánh xe sắt rầm rập nghiến trên đường ray (xình xịch... kít...). (Từ khóa Youtube: Hanoi train street audio ambiance)"
                albumArt="https://upload.wikimedia.org/wikipedia/commons/8/87/Train_street_in_Hanoi.jpg"
              />
            </div>
          </div>
        </section>

        {/* Descriptive Content */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <span className="font-label-sm text-secondary uppercase tracking-[0.2em]">Khám phá di sản</span>
            <h1 className="font-display-lg text-display-lg text-primary leading-none">Nhịp Đập Đường Tàu</h1>
            <p className="font-body-md text-on-surface leading-relaxed">
              Tiếng chuông cảnh báo xóm đường tàu kêu liên hồi (keng... keng... keng...) hòa cùng tiếng người dân vội vã dọn dẹp hàng quán thu gọn vào sát tường, tạo nên một nét sinh hoạt độc nhất vô nhị giữa lòng Hà Nội.
            </p>
            <div className="flex items-center gap-4 py-4 border-y border-outline-variant">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
              <span className="font-body-md font-semibold">Tài liệu lưu trữ: 1900 - 1945</span>
            </div>
          </div>
          <div className="md:col-span-7 space-y-6">
            <div className="ink-border p-6 bg-surface-container-low">
              <h3 className="font-headline-lg text-primary mb-4 text-2xl">Về dự án &quot;Thanh Âm Phố Cổ&quot;</h3>
              <p className="font-body-md text-on-surface-variant italic mb-4">
                &quot;Khi âm thanh vang lên, bức tranh quá khứ sẽ tự hiện hình.&quot;
              </p>
              <p className="font-body-md text-on-surface">
                Chúng tôi kết hợp những bản thu âm tiếng động thực địa tái tạo lại không gian xưa với những tấm ảnh quý hiếm từ kho lưu trữ. Khi bạn nhấn &apos;Nghe&apos;, hành trình thị giác sẽ tự động đồng bộ theo từng nốt nhạc của ký ức.
              </p>
            </div>
          </div>
        </section>

        {/* Memory Form Section */}
        <section className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">edit_note</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Gửi lại một mảnh ký ức</h2>
            <p className="font-body-md text-on-surface-variant mt-4 italic">&quot;Mỗi câu chuyện bạn chia sẻ là một viên gạch xây nên ngôi đền di sản của chúng ta.&quot;</p>
          </div>
          <MemoryForm locationId="duong-tau" showPhotoUpload={true} />
        </section>
      </main>
      
      {/* Location Banner Footer */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
        <div className="flex flex-col items-center justify-center gap-4 py-12 border-y border-outline-variant/30">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-2xl">location_on</span>
            <span className="font-label-sm uppercase tracking-[0.3em]">Địa điểm di sản</span>
          </div>
          <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface italic">Phố Đường Tàu, Hà Nội</h2>
          <div className="w-12 h-[1px] bg-primary/30 mt-2"></div>
        </div>
      </section>
    </>
  );
}
