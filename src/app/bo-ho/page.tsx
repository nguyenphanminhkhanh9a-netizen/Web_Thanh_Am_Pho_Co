import MemoryForm from '@/components/ui/MemoryForm';

export default function BoHo() {
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa7fiwG2W9q42n-jvgWZtraQ6GFnxKCoZJxrErXi9-kEtnnVfA1caOiY0weNcSS0TLaETwgGFANjj2vURwQHc0qED9QyNE40920T2AiivdtxbQAvF_gHt0jjVLfmy7pzErdcUR9UHjPiWCF8Cor1NC1K8McPgoQTDg0PdIuJ8OjdzGb4MsuhuVHUcDArTcFuxGj14sSsH2BZUOELY0U3G13RcqZvOCD7G3zXa9hyFaMU-Tvk2nDzsf" 
                alt="Hồ Gươm sương sớm" 
              />
              
              <div id="stage-caption" className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-md bg-surface/90 p-6 ink-border shadow-2xl backdrop-blur-sm transform transition-all duration-700">
                <span className="font-label-sm text-secondary uppercase tracking-[0.2em] mb-2 block" id="caption-label">Cảnh 1: Khởi đầu</span>
                <p className="font-body-md italic text-on-surface" id="caption-text">&quot;Bờ Hồ buổi sớm, sương giăng phủ lối cũ, nơi thời gian như ngừng lại bên Tháp Rùa cổ kính.&quot;</p>
              </div>
            </div>

            {/* Stage Decorative Elements */}
            <div className="absolute top-6 right-6 flex gap-2">
              <span className="material-symbols-outlined text-primary/40 animate-pulse">settings_input_antenna</span>
              <span className="font-label-sm text-primary/40 uppercase">Sóng di sản - 90.0 MHz</span>
            </div>
          </div>

          {/* Integrated Audio Controls */}
          <div className="bg-surface-container p-8 md:p-12 ink-border relative overflow-hidden -mt-20 mx-4 md:mx-12 z-10 shadow-xl">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <h2 id="current-track-title" className="font-headline-lg text-headline-lg text-primary transition-all">Thanh Âm Bờ Hồ: Tiếng chuông xe điện</h2>
                <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Đang trình chiếu • Ký ức 1925</p>
              </div>

              <div className="flex items-center gap-8">
                <button id="master-play-btn" className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-all shadow-lg active:scale-95 group relative">
                  <div className="absolute inset-0 rounded-full border-4 border-primary/30 group-hover:scale-110 transition-transform"></div>
                  <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>

                <div className="flex-1 space-y-4">
                  <div className="relative h-12 flex items-center">
                    <input type="range" className="w-full audio-slider appearance-none bg-transparent cursor-pointer relative z-10" defaultValue="0" max="100" />
                    <div id="audio-progress-fill" className="absolute left-0 h-[2px] bg-primary pointer-events-none" style={{ width: '0%' }}></div>
                    <div className="absolute w-full h-[2px] bg-outline-variant pointer-events-none"></div>
                  </div>
                  <div className="flex justify-between font-label-sm text-on-surface-variant">
                    <span id="time-current">00:00</span>
                    <span id="time-total">05:30</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-12 border-t border-outline-variant pt-8">
                <div className="flex flex-col items-center gap-2 group cursor-help transition-all hover:scale-105">
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-12">waves</span>
                  <span className="font-label-sm text-secondary-fixed-dim">Tiếng Sóng</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-help transition-all hover:scale-105">
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:-rotate-12">notifications_active</span>
                  <span className="font-label-sm text-secondary-fixed-dim">Xe Điện</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-help transition-all hover:scale-105">
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:scale-110">groups</span>
                  <span className="font-label-sm text-secondary-fixed-dim">Phố Thị</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Descriptive Content */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <span className="font-label-sm text-secondary uppercase tracking-[0.2em]">Khám phá di sản</span>
            <h1 className="font-display-lg text-display-lg text-primary leading-none">Nhịp Đập Hoàn Kiếm</h1>
            <p className="font-body-md text-on-surface leading-relaxed">
              Không chỉ là một hồ nước, Hoàn Kiếm là điểm hội tụ của dòng chảy lịch sử. Qua âm thanh và hình ảnh, chúng tôi mời bạn ngược dòng thời gian, cảm nhận hơi thở của Hà Nội những năm đầu thế kỷ.
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
          <MemoryForm />
        </section>
      </main>
      
      {/* Location Banner Footer */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
        <div className="flex flex-col items-center justify-center gap-4 py-12 border-y border-outline-variant/30">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-2xl">location_on</span>
            <span className="font-label-sm uppercase tracking-[0.3em]">Địa điểm di sản</span>
          </div>
          <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface italic">Hoàn Kiếm, Hà Nội</h2>
          <div className="w-12 h-[1px] bg-primary/30 mt-2"></div>
        </div>
      </section>
    </>
  );
}
