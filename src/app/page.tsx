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
            style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/9/99/Chi%E1%BA%BFc_c%E1%BB%95ng_c%E1%BB%95_k%C3%ADnh_c%E1%BB%A7a_ng%C3%B4i_nh%C3%A0_s%E1%BB%91_29_ph%E1%BB%91_L%C3%AA_Ng%E1%BB%8Dc_H%C3%A2n_%28tr%C6%B0%E1%BB%9Bc_kia_l%C3%A0_ph%E1%BB%91_L%E1%BB%AF_Gia%29%2C_qu%E1%BA%ADn_Hai_B%C3%A0_Tr%C6%B0ng%2C_H%C3%A0_N%E1%BB%99i_%2802%29.jpg')" }}
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
                src="https://upload.wikimedia.org/wikipedia/commons/5/54/Den_Bach_Ma.jpg"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 md:block hidden">
              <div className="w-32 h-32 ink-border bg-background p-2 rotate-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  className="w-full h-full object-contain" 
                  alt="A detailed black and white pen and ink sketch of a traditional Vietnamese lantern" 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Hanoi_le_marche_aux_bronzes.jpg"
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
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Hanoi_old_quarter_shophouse.jpg"
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
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Hanoi_shophouse_2.jpg"
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
              src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Hano%C3%AF_-_Les_Halles.jpg"
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
              src="https://upload.wikimedia.org/wikipedia/commons/0/02/Hano%C3%AF_-_Promenade_du_Dragon%2C_rue_des_%C3%89ventails.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-background">
              <span className="font-label-sm text-xs opacity-80 mb-1">04</span>
              <h4 className="font-headline-lg text-2xl mb-2">Hàng Gai</h4>
              <p className="font-label-sm text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Tiếng rao đời thường</p>
            </div>
          </Link>
          
          {/* Street 5: Hàng Bạc */}
          <Link href="/hang-bac" className="md:col-span-3 group relative overflow-hidden ink-border cursor-pointer h-[300px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Silversmith's hands working" 
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/Hano%C3%AF_-_Rue_des_Chapeaux.jpg"
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
          <Link href="/#hanh-trinh" className="group flex items-center gap-4 px-12 py-5 bg-primary text-background ink-border-double transition-all hover:scale-105 active:scale-95 vintage-shadow">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] font-bold">Khám Phá Bản Đồ Âm Thanh</span>
            <span className="material-symbols-outlined group-hover:-translate-y-2 transition-transform">arrow_upward</span>
          </Link>
        </div>
      </section>

      {/* Newsletter / Contact Callout */}
      <NewsletterForm />
    </>
  );
}
