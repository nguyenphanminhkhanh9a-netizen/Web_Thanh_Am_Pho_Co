import Link from 'next/link';
import NewsletterForm from '@/components/ui/NewsletterForm';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop py-12">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center grayscale contrast-125 opacity-40 mix-blend-multiply" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcQ0tnRYfejgG_WmPKFcKCaf4NHbNIZXAbxEFm9wk_nwu6YNcIuAYE8QHZPUpKlBo_Wwfpg9EBue9JUCEb1P6DKK01Z8hnQo67HoSd_766FJ2ZCAOD1wmYUH4hGWC5lNEuZQsDY0PynFgAG7I8IBNLJPYB8K4BCV02NphXlaEEp3pJ8J0RBuwlygfNW6G-FGuX2Hhe-GlCAz2d2zlDAyEDbU_lRsDrQy6OcPf1t_38N8PH4S1Ey9Qva8m6EXnBwo-5vQ')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-primary mb-6 block">Dự Án Bảo Tồn Văn Hóa</span>
          <h2 className="font-display-lg text-[64px] md:text-[84px] leading-tight text-primary mb-8 animate-fade-in">
            Trailer Dự Án:<br/>Thanh Âm Phố Cổ
          </h2>
          
          {/* Play Button Container */}
          <div className="relative group cursor-pointer mt-4">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>
            <button className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center ink-border bg-primary text-background rounded-full transition-transform duration-500 group-hover:scale-110 active:scale-95 shadow-2xl">
              <span className="material-symbols-outlined text-4xl md:text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </button>
          </div>
          
          <p className="font-body-md text-body-md text-on-surface-variant mt-12 max-w-xl italic">
            &quot;Lắng nghe nhịp thở của một Hà Nội xưa cũ qua từng thanh âm bình dị, từ tiếng tàu điện leng keng đến tiếng rao trưa hè...&quot;
          </p>
        </div>
      </section>

      {/* About Section: Hồn Cốt Phố Cổ */}
      <section id="ky-uc" className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop border-y border-outline-variant">
        <div className="max-w-container-max mx-auto grid md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 relative">
            <div className="ink-border-double p-4 bg-background vintage-shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="w-full h-[500px] object-cover grayscale brightness-90" 
                alt="A vintage, sepia-toned high-resolution photograph of an old Hanoi street scene" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDizgqlXcEMF0pyvrEtgnz2vdYQd_FxuwBi3UPfTLQz0sYsqmkjm2FanOe-G7HZoGLWR34YD1QbJ7vOwyw-66C6EaQ-lwO5_xcgh3XPMuBWYSc1UnRQexnVJE1sGgnWwVo2FNrK_1ZP4Ult3B92i17bs4carjS3pT2qU6S27uVFCLFUPaqCq2SQX1ZHEnqWkM997omP6nfmZtNa3UTNhP5cvBtt3w3xS5eDxOjtlrBEfqhZFCkcQrH"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 md:block hidden">
              <div className="w-32 h-32 ink-border bg-background p-2 rotate-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  className="w-full h-full object-contain" 
                  alt="A detailed black and white pen and ink sketch of a traditional Vietnamese lantern" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Ypu661IucxYc7v-nnwSeGo1gT9DFkFa59sLrUwqFdE0fbH4t0RFjbEiOjxIsaugG5njw7ygCN7cqVlzJBZIbsIVSkzCIlhDKsmtk7kEF36PXFFAD9xfnriTjA1mXqT5A5io1uBJcwKIJ07VbOq3YXGiesgV_03FyMepdmMj0vroN-HAretJScB2nOrnXE3ONxmuJn2hB4HoBTZN4IWaedN9Dqy3jYy51mkiFwVkbC6pdBVb4G-1N"
                />
              </div>
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
            <button className="w-fit px-8 py-3 bg-primary text-background font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-all ink-border shadow-md active:translate-y-1">
              Xem Thêm Về Dự Án
            </button>
          </div>
        </div>
      </section>

      {/* Preview Section: Famous Streets */}
      <section id="hanh-trinh" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h3 className="font-display-lg text-[48px] text-primary mb-4">Dấu Chân Thanh Âm</h3>
          <p className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-[0.2em]">Hành trình qua 5 tuyến phố đặc trưng nhất</p>
        </div>
        
        {/* Bento-style Grid for Streets */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[800px]">
          {/* Street 1: Hàng Đào */}
          <Link href="/hang-dao" className="md:col-span-4 group relative overflow-hidden ink-border cursor-pointer h-[300px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Silk merchants on Hang Dao street" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWIycMjPDvAs7qtFap1Xz87kwKgWXsdvOmaYkssLtkiOGt5FiTgpUUPBxRTSqTYLMaU_rzuIc2IXhmG0UOGefGrLI5ZzuV-XVXhT0BFqwD54yxO_7Znd64oMtEv8FQNqHiHqzS2T0ut2MlYSVNSDUPRADGQvcFbVPEDc3Dmg6YpqiBjC_ScjVNJ3iqJfFTplEPamLps0V8nwvBxB8yozh5ryx9LhvasJybPa6rdmg_OX4zpYblAfZd"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-background">
              <span className="font-label-sm text-xs opacity-80 mb-1">01</span>
              <h4 className="font-headline-lg text-2xl mb-2">Hàng Đào</h4>
              <p className="font-label-sm text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Tiếng lụa là vóc vạc</p>
            </div>
          </Link>
          
          {/* Street 2: Bờ Hồ */}
          <Link href="/bo-ho" className="md:col-span-8 group relative overflow-hidden ink-border cursor-pointer h-[300px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Panoramic view of Hoan Kiem Lake" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChs_tBMYdX_i20ak6pGGN_GEyJytx-U5Pvj4C5MDwzeIRdiw5W1ex370Q6TK7VcGnXqhaQdyaK0lwt3pQNd1230ZUmQkA5C1VnTYrcWnor0a89den9aLpCcT-3xvcA8o1mGzQSZb7UvLclHDlYNVTbkeRptq7FQFklwy3tVRnhhkyXraMW0YxjpEU06qdA00B0FHBn6HkB55EKDvtk7HLnY1x0p4QCiy3Jtvs_71x-nZqCG6cAVk28"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 text-background">
              <span className="font-label-sm text-xs opacity-80 mb-1">02</span>
              <h4 className="font-headline-lg text-4xl mb-2">Bờ Hồ</h4>
              <p className="font-label-sm text-[12px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Tiếng tàu điện leng keng</p>
            </div>
          </Link>
          
          {/* Street 3: Ô Quan Chưởng */}
          <Link href="/o-quan-chuong" className="md:col-span-5 group relative overflow-hidden ink-border cursor-pointer h-[300px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="O Quan Chuong city gate" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUgKRhLFSOd3gDFvQ2BO6o-VNfW8b4oRFFtfaIEO6XRWYbFWlwxHbbVpUrrWpFzrQBFI7zCRYdh8jXKqTACFXu5srDTRQei79GeJgx6XYgnAXkCM9SF9AN4NT3yuCV5J8RCctalgTjx1xVpr1Qzw9vnmN92FqILkaPucO3zLnZIUvGaXnD6PTtUY5QSnHlXAQdTw9KOdvQw4inEjTJ8vQOkqHckwJYjVYYRT7YY8maqlBDb74fb6Lt"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-background">
              <span className="font-label-sm text-xs opacity-80 mb-1">03</span>
              <h4 className="font-headline-lg text-2xl mb-2">Ô Quan Chưởng</h4>
              <p className="font-label-sm text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Tiếng bước chân lịch sử</p>
            </div>
          </Link>
          
          {/* Street 4: Chợ Đồng Xuân (Currently links to Hang Gai) */}
          <Link href="/hang-gai" className="md:col-span-4 group relative overflow-hidden ink-border cursor-pointer h-[300px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Lively scene inside Dong Xuan market" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx2F0TzcsS_eDFSuz4I0bPo6RwcP4C4epE_sDptvH59bTu60sGr4aeT3phTqAIsFCvJLNpamYJGtfwru6Zx2cM46d759CWx13DFcsskPWUMjS5wd_djv3XzkBtg5mg3SkzG3OatE_9ykuIsC3duBAhiiE2gelXAWXHZ4LuqqMzpH-InoQ4dxrwejsNJ_14z8dxyOQkj70f0e9UdezQCIlxxfz6rAS3eqZndbypS-f-PybRtZfCZcvu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-background">
              <span className="font-label-sm text-xs opacity-80 mb-1">04</span>
              <h4 className="font-headline-lg text-2xl mb-2">Chợ Đồng Xuân / Hàng Gai</h4>
              <p className="font-label-sm text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Tiếng rao đời thường</p>
            </div>
          </Link>
          
          {/* Street 5: Hàng Bạc */}
          <Link href="/hang-bac" className="md:col-span-3 group relative overflow-hidden ink-border cursor-pointer h-[300px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Silversmith's hands working" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHLsyd4gV0xwqnjmuVOyNRp2wM_-enG1bqlvrdTGy0pWA-QLetJSpjZVpV6dbUVpSa5ilmmZzQHO00W6rwuDS5pTvYvalqVvfo2p4IpaFlu__c93mmRSQnUjxNX77tgiMb5HhUVOe_wfbFXcqRObX9dotSyY8tkc1k6GTmUkyqSqJdAQevJUYi486m4jRmLHmwsTO50MHceeT6NOeySFWwAq1GUeaCkBnlJ89fMNT8rUf26bJQQjSZ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-background">
              <span className="font-label-sm text-xs opacity-80 mb-1">05</span>
              <h4 className="font-headline-lg text-2xl mb-2">Hàng Bạc</h4>
              <p className="font-label-sm text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Tiếng đục chạm bạc tỉ mỉ</p>
            </div>
          </Link>
        </div>
        
        <div id="ban-do" className="mt-16 flex flex-col items-center">
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl text-center mb-10 italic">
            Khám phá mỗi góc phố, mỗi con đường qua những âm thanh đặc trưng đã làm nên bản sắc của Thăng Long - Hà Nội.
          </p>
          <button className="group flex items-center gap-4 px-12 py-5 bg-primary text-background ink-border-double transition-all hover:scale-105 active:scale-95 vintage-shadow">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] font-bold">Khám Phá Bản Đồ Âm Thanh</span>
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Newsletter / Contact Callout */}
      <NewsletterForm />
    </>
  );
}
