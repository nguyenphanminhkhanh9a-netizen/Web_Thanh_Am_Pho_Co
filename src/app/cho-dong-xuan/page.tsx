"use client";

import React from 'react';
import MemoryForm from '@/components/ui/MemoryForm';
import AudioPlayer from '@/components/ui/AudioPlayer';

export default function ChoDongXuan() {
  return (
    <>
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center grayscale-[30%] brightness-[85%] transition-transform duration-[20s] ease-linear" 
              id="hero-image" 
              style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/a1/Cho_Dong_Xuan_ban_dem.jpg')" }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-margin-desktop max-w-container-max mx-auto pb-20">
            <span className="font-label-sm text-on-surface-variant uppercase tracking-widest mb-4 bg-surface px-3 py-1 shadow-sm">Sinh hoạt cộng đồng</span>
            <h1 className="font-display-lg text-4xl md:text-5xl text-primary mb-4 italic">Chợ Đồng Xuân</h1>
            <p className="max-w-2xl text-on-surface-variant font-body-md text-lg leading-relaxed italic">
              &quot;Không gian sinh hoạt cộng đồng & Ồn ào náo nhiệt - Ambient & Crowded Market.&quot;
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
              <div className="flex-1 w-full">
                <AudioPlayer 
                  audioSrc="" /* TODO: Chèn âm thanh: Tiếng rao chợ Đồng Xuân xưa */
                  trackTitle="Thanh âm Chợ Cổ"
                  description="Tiếng xô xát mua bán, mặc cả xôn xao của hàng trăm tiểu thương và khách mua hàng (tiếng nói chuyện râm ran). (Từ khóa Youtube: Hanoi market soundscape ASMR)"
                  albumArt="https://upload.wikimedia.org/wikipedia/commons/6/6b/Ch%E1%BB%A3_%C4%90%E1%BB%93ng_Xu%C3%A2n_-_NKS.jpg"
                />
              </div>
              <div className="italic text-on-surface-variant text-sm border-l-2 border-primary pl-4 py-2 bg-background/50">
                &quot;Mỗi đoạn âm thanh mở ra một góc nhìn mới về cuộc sống nhộn nhịp nơi Chợ Đồng Xuân...&quot;
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
                    <img className="stage-image active absolute inset-0 w-full h-full object-cover reveal-sweep" id="img-0" src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Dong_Xuan_market.jpg" alt="Image 0"/>
                  </div>
                  {/* Feedback overlay */}
                  <div className="absolute inset-0 pointer-events-none border-[12px] border-primary/5 opacity-0 group-[.active]:opacity-100 transition-opacity duration-1000"></div>
                  {/* Caption area */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-label-sm uppercase tracking-widest text-secondary-fixed mb-1" id="image-label">Tư liệu lịch sử</p>
                    <p className="font-body-md text-sm italic" id="image-caption">Hình ảnh khu chợ sầm uất bậc nhất Hà Thành xưa với nhịp sống bình dị của người dân.</p>
                  </div>
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
                  Tiếng xô xát mua bán, mặc cả xôn xao của hàng trăm tiểu thương và khách mua hàng. Tiếng rao chợ cổ đặc trưng ("Ai bánh chưng, bánh rợm nào...", "Táo tầu, kẹo lạc...").
                </p>
                <p className="text-on-surface-variant leading-relaxed mt-4">
                  Không chỉ vậy, tiếng đòn gánh gõ nhịp "sột soạt", tiếng chén đĩa va chạm tại các dãy hàng ăn uống cổng chợ cùng làm nên một không gian sinh hoạt cộng đồng ồn ào và đầy sức sống từ những ngày đầu.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container p-8 border-l-4 border-primary">
              <h3 className="font-headline-lg text-2xl text-primary mb-4 italic">Bạn có biết?</h3>
              <ul className="space-y-4 text-sm text-on-surface-variant">
                <li className="flex gap-3"><span className="text-primary font-bold">01.</span> Chợ Đồng Xuân là một trong những chợ lớn nhất tại Hà Nội.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">02.</span> Nơi đây từng là điểm giao thương sầm uất bậc nhất của kẻ chợ, nơi tập trung đủ mọi món hàng, từ sản vật địa phương đến hàng hóa nhập khẩu.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">03.</span> Không gian âm thanh tại đây luôn náo nhiệt từ tờ mờ sáng cho đến tận đêm khuya.</li>
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
                  <span className="font-label-sm uppercase">Đồng Xuân, Hoàn Kiếm, Hà Nội</span>
                </div>
                <div className="flex items-center gap-4 text-secondary">
                  <span className="material-symbols-outlined">schedule</span>
                  <span className="font-label-sm uppercase">Mở cửa tự do - Luôn luôn chào đón</span>
                </div>
              </div>
            </div>
            <div className="h-80 ink-bleed-border overflow-hidden bg-surface-dim relative">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
              <div className="w-full h-full bg-cover bg-center grayscale-[20%]" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/6/68/Cho_Dong_Xuan.jpg')" }}></div>
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
          <MemoryForm locationId="cho-dong-xuan" showPhotoUpload={true} />
        </section>
      </main>
    </>
  );
}
