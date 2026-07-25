import HeroSection from '@/components/ui/HeroSection';
import BentoGrid from '@/components/ui/BentoGrid';

export default function Home() {
  const bentoItems = [
    {
      id: 'hang-dao',
      name: 'Hàng Đào',
      subtitle: 'Tiếng lụa là vóc vạc',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWIycMjPDvAs7qtFap1Xz87kwKgWXsdvOmaYkssLtkiOGt5FiTgpUUPBxRTSqTYLMaU_rzuIc2IXhmG0UOGefGrLI5ZzuV-XVXhT0BFqwD54yxO_7Znd64oMtEv8FQNqHiHqzS2T0ut2MlYSVNSDUPRADGQvcFbVPEDc3Dmg6YpqiBjC_ScjVNJ3iqJfFTplEPamLps0V8nwvBxB8yozh5ryx9LhvasJybPa6rdmg_OX4zpYblAfZd',
      href: '/hang-dao',
    },
    {
      id: 'bo-ho',
      name: 'Bờ Hồ',
      subtitle: 'Tiếng tàu điện leng keng',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChs_tBMYdX_i20ak6pGGN_GEyJytx-U5Pvj4C5MDwzeIRdiw5W1ex370Q6TK7VcGnXqhaQdyaK0lwt3pQNd1230ZUmQkA5C1VnTYrcWnor0a89den9aLpCcT-3xvcA8o1mGzQSZb7UvLclHDlYNVTbkeRptq7FQFklwy3tVRnhhkyXraMW0YxjpEU06qdA00B0FHBn6HkB55EKDvtk7HLnY1x0p4QCiy3Jtvs_71x-nZqCG6cAVk28',
      href: '/bo-ho',
      colSpan: 2
    },
    {
      id: 'o-quan-chuong',
      name: 'Ô Quan Chưởng',
      subtitle: 'Tiếng bước chân lịch sử',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUgKRhLFSOd3gDFvQ2BO6o-VNfW8b4oRFFtfaIEO6XRWYbFWlwxHbbVpUrrWpFzrQBFI7zCRYdh8jXKqTACFXu5srDTRQei79GeJgx6XYgnAXkCM9SF9AN4NT3yuCV5J8RCctalgTjx1xVpr1Qzw9vnmN92FqILkaPucO3zLnZIUvGaXnD6PTtUY5QSnHlXAQdTw9KOdvQw4inEjTJ8vQOkqHckwJYjVYYRT7YY8maqlBDb74fb6Lt',
      href: '/o-quan-chuong',
    },
    {
      id: 'dong-xuan',
      name: 'Chợ Đồng Xuân',
      subtitle: 'Tiếng rao đời thường',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx2F0TzcsS_eDFSuz4I0bPo6RwcP4C4epE_sDptvH59bTu60sGr4aeT3phTqAIsFCvJLNpamYJGtfwru6Zx2cM46d759CWx13DFcsskPWUMjS5wd_djv3XzkBtg5mg3SkzG3OatE_9ykuIsC3duBAhiiE2gelXAWXHZ4LuqqMzpH-InoQ4dxrwejsNJ_14z8dxyOQkj70f0e9UdezQCIlxxfz6rAS3eqZndbypS-f-PybRtZfCZcvu',
      href: '#',
    },
    {
      id: 'hang-bac',
      name: 'Hàng Bạc',
      subtitle: 'Tiếng đục chạm bạc tỉ mỉ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHLsyd4gV0xwqnjmuVOyNRp2wM_-enG1bqlvrdTGy0pWA-QLetJSpjZVpV6dbUVpSa5ilmmZzQHO00W6rwuDS5pTvYvalqVvfo2p4IpaFlu__c93mmRSQnUjxNX77tgiMb5HhUVOe_wfbFXcqRObX9dotSyY8tkc1k6GTmUkyqSqJdAQevJUYi486m4jRmLHmwsTO50MHceeT6NOeySFWwAq1GUeaCkBnlJ89fMNT8rUf26bJQQjSZ',
      href: '/hang-bac',
    }
  ];

  return (
    <>
      <HeroSection 
        title={<>Trailer Dự Án:<br/>Thanh Âm Phố Cổ</>}
        subtitle='"Lắng nghe nhịp thở của một Hà Nội xưa cũ qua từng thanh âm bình dị, từ tiếng tàu điện leng keng đến tiếng rao trưa hè..."'
        categoryLabel="Dự Án Bảo Tồn Văn Hóa"
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBcQ0tnRYfejgG_WmPKFcKCaf4NHbNIZXAbxEFm9wk_nwu6YNcIuAYE8QHZPUpKlBo_Wwfpg9EBue9JUCEb1P6DKK01Z8hnQo67HoSd_766FJ2ZCAOD1wmYUH4hGWC5lNEuZQsDY0PynFgAG7I8IBNLJPYB8K4BCV02NphXlaEEp3pJ8J0RBuwlygfNW6G-FGuX2Hhe-GlCAz2d2zlDAyEDbU_lRsDrQy6OcPf1t_38N8PH4S1Ey9Qva8m6EXnBwo-5vQ"
      >
        <div className="relative group cursor-pointer mt-4">
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>
          <button className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center ink-border bg-primary text-background rounded-full transition-transform duration-500 group-hover:scale-110 active:scale-95 shadow-2xl">
            <span className="material-symbols-outlined text-4xl md:text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
          </button>
        </div>
      </HeroSection>

      <section className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop border-y border-outline-variant">
        <div className="max-w-container-max mx-auto grid md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 relative">
            <div className="ink-border-double p-4 bg-background vintage-shadow hover:-translate-y-2 transition-transform duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="w-full h-[500px] object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDizgqlXcEMF0pyvrEtgnz2vdYQd_FxuwBi3UPfTLQz0sYsqmkjm2FanOe-G7HZoGLWR34YD1QbJ7vOwyw-66C6EaQ-lwO5_xcgh3XPMuBWYSc1UnRQexnVJE1sGgnWwVo2FNrK_1ZP4Ult3B92i17bs4carjS3pT2qU6S27uVFCLFUPaqCq2SQX1ZHEnqWkM997omP6nfmZtNa3UTNhP5cvBtt3w3xS5eDxOjtlrBEfqhZFCkcQrH" 
                alt="Vintage Hanoi"
              />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center mt-12 md:mt-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary"></div>
              <h3 className="font-headline-lg text-headline-lg text-primary">Hồn Cốt Phố Cổ</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface mb-6 leading-relaxed first-letter:text-5xl first-letter:font-display-lg first-letter:text-primary first-letter:float-left first-letter:mr-3">
              Dự án Thanh Âm Phố Cổ ra đời với sứ mệnh số hóa và bảo tồn những giá trị văn hóa vô hình của Hà Nội. Chúng tôi tin rằng, mỗi thanh âm từ quá khứ đều mang trong mình một mảnh linh hồn của thành phố. Từ tiếng chuông tàu điện Bờ Hồ đến nhịp chày Yên Thái, tất cả được lưu giữ tỉ mỉ như những báu vật tinh thần.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant italic mb-8">
              Đây không chỉ là một hành trình nghe, mà là một hành trình cảm nhận sự tiếp nối của dòng chảy văn hóa ngàn năm văn hiến giữa lòng phố cổ.
            </p>
            <button className="w-fit px-8 py-3 bg-primary text-background font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary-container transition-all ink-border shadow-md active:translate-y-1">
              Xem Thêm Về Dự Án
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h3 className="font-display-lg text-[48px] text-primary mb-4">Dấu Chân Thanh Âm</h3>
          <p className="font-label-sm uppercase text-on-surface-variant tracking-[0.2em]">Hành trình qua 5 tuyến phố đặc trưng nhất</p>
        </div>
        <BentoGrid items={bentoItems} />
      </section>

      <section className="py-24 bg-surface-container-high border-t border-outline-variant">
        <div className="max-w-xl mx-auto px-margin-mobile text-center">
          <div className="mb-8 flex justify-center">
            <span className="material-symbols-outlined text-primary text-5xl">mail</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Đăng Ký Nhận Bản Tin</h3>
          <p className="font-body-md text-on-surface-variant mb-10">Cùng chúng tôi cập nhật những câu chuyện và thanh âm mới nhất từ dự án.</p>
          <div className="relative">
            <input 
              className="w-full bg-transparent border-b-2 border-outline focus:border-primary outline-none py-3 font-label-sm uppercase transition-all" 
              placeholder="ĐỊA CHỈ EMAIL CỦA BẠN" 
              type="email"
            />
            <button className="absolute right-0 bottom-3 text-primary hover:translate-x-1 transition-transform flex items-center justify-center">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
