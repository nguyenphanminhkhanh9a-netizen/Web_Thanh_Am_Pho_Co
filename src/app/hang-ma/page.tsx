"use client";

import React from 'react';
import MemoryForm from '@/components/ui/MemoryForm';
import AudioPlayer from '@/components/ui/AudioPlayer';

export default function HangMa() {
  return (
    <>
      <main className="pt-0">
        {/* Immersive Header Section */}
        <section className="relative w-full h-[716px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/1/1b/Hanoi_Street.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 h-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col justify-end pb-16">
            <span className="font-label-sm text-primary mb-2 tracking-[0.2em] uppercase">Không gian lễ hội</span>
            <h1 className="font-display-lg text-display-lg md:text-[64px] text-primary max-w-2xl leading-tight mb-4 italic">
              Phố Hàng Mã: <br/>Không gian lễ hội & Đồ chơi dân gian
            </h1>
            <p className="font-body-md text-on-surface-variant max-w-xl text-lg italic">
              &quot;Festive & Paper Sound - Nơi tuổi thơ lưu giữ qua những thanh âm rộn ràng.&quot;
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
                  <h2 className="font-headline-lg text-primary leading-tight">Âm Vang Lễ Hội</h2>
                  <p className="font-body-md text-on-surface-variant italic">
                    Lắng nghe nhịp điệu của lịch sử. Tiếng trống trung thu, tiếng chuông lắc hòa cùng nụ cười con trẻ.
                  </p>
                </div>

                {/* Synchronized Audio Player */}
                <AudioPlayer 
                  audioSrc="" /* TODO: Chèn âm thanh: Tiếng trống trung thu phố Hàng Mã */
                  trackTitle="Đồ chơi dân gian"
                  description="Tiếng sột soạt của giấy bổi, tiếng gõ trống tết Trung thu (tùng... xèng...), tiếng còi bóp tít tít của đồ chơi bằng sắt Tây. (Từ khóa Youtube: Hanoi Hang Ma street traditional toys sounds)"
                  albumArt="https://upload.wikimedia.org/wikipedia/commons/1/1b/Hanoi_Street.jpg"
                />

                <div className="decorative-frame p-6 bg-surface-container-low">
                  <h4 className="font-label-sm text-primary mb-4 border-b border-outline-variant pb-2">CHÚ THÍCH HIỆN TẠI</h4>
                  <p id="image-caption" className="font-body-md text-on-surface-variant italic text-sm transition-all duration-500">
                    &quot;Không gian lễ hội nhộn nhịp rực rỡ sắc đỏ tại phố Hàng Mã.&quot;
                  </p>
                </div>
              </div>

              {/* Right: Stage Images */}
              <div className="lg:col-span-7">
                <div id="heritage-stage" className="relative aspect-[4/3] decorative-frame bg-surface-dim overflow-hidden shadow-2xl">
                  {/* Image Layers */}
                  <div className="stage-image active" data-time="0" data-caption="Không gian lễ hội nhộn nhịp rực rỡ sắc đỏ tại phố Hàng Mã.">
                    <div className="w-full h-full bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/1/1b/Hanoi_Street.jpg')" }}></div>
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
                Tiếng sột soạt của giấy bổi, giấy gấp, tiếng cắt dán đồ mã và lồng đèn rộn ràng cả con phố nhỏ. Mỗi độ thu về, Hàng Mã lại khoác lên mình một màu sắc rực rỡ, nhưng điều lưu lại sâu nhất có lẽ là những thanh âm đặc trưng của các món đồ chơi truyền thống.
              </p>
              <p>
                Đó là tiếng gõ trống tết Trung thu (tùng... tùng... xèng... xèng...), tiếng trống quân, tiếng còi bóp tít tít của đồ chơi bằng sắt Tây thời xưa. Không chỉ vậy, tiếng chuông lắc lanh canh hòa lẫn với tiếng cười nói rộn rã của người đi sắm lễ làm cho không gian nơi đây lúc nào cũng đầy sức sống.
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
                  <dd className="font-body-md text-primary">Phố Hàng Mã (Paper Street)</dd>
                </div>
                <div>
                  <dt className="font-label-sm text-on-surface-variant uppercase text-[10px]">Thời kỳ hưng thịnh</dt>
                  <dd className="font-body-md text-primary">Các dịp lễ Tết, Trung Thu</dd>
                </div>
                <div>
                  <dt className="font-label-sm text-on-surface-variant uppercase text-[10px]">Sản vật đặc trưng</dt>
                  <dd className="font-body-md text-primary">Đồ chơi dân gian, Đồ hàng mã, Lồng đèn</dd>
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
            <MemoryForm locationId="hang-ma" showPhotoUpload={true} />
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
              Phố Hàng Mã, Quận Hoàn Kiếm, Hà Nội
            </h3>
            <div className="w-24 h-px bg-outline-variant mt-4"></div>
          </div>
        </section>
      </main>
    </>
  );
}
