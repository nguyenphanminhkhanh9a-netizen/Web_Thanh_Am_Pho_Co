import Link from 'next/link';
import NewsletterForm from '@/components/ui/NewsletterForm';
import HeroSection from '@/components/ui/HeroSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

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
          {/* Street 1: Hàng Bạc */}
          <Link href="/hang-bac" className="md:col-span-4 group relative overflow-hidden ink-border cursor-pointer h-[300px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Hàng Bạc" 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e3/H%C3%A0ng_B%E1%BA%A1c.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-background">
              <span className="font-label-sm text-xs opacity-80 mb-1">01</span>
              <h4 className="font-headline-lg text-2xl mb-2">Hàng Bạc</h4>
              <p className="font-label-sm text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Giai điệu tinh xảo - Artisanal Metal</p>
            </div>
          </Link>
          
          {/* Street 2: Hàng Thiếc */}
          <Link href="/hang-thiec" className="md:col-span-8 group relative overflow-hidden ink-border cursor-pointer h-[300px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Hàng Thiếc" 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Hang_Thiec_Street_-_L%C3%A9on_Busy_%281874-1951%29.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 text-background">
              <span className="font-label-sm text-xs opacity-80 mb-1">02</span>
              <h4 className="font-headline-lg text-4xl mb-2">Hàng Thiếc</h4>
              <p className="font-label-sm text-[12px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Nhịp điệu dồn dập & Cơ khí - Rhythm & Hammering</p>
            </div>
          </Link>
          
          {/* Street 3: Hàng Mã */}
          <Link href="/hang-ma" className="md:col-span-5 group relative overflow-hidden ink-border cursor-pointer h-[300px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Hàng Mã" 
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Ph%E1%BB%91_H%C3%A0ng_M%C3%A3%2C_H%C3%A0_N%E1%BB%99i_001.JPG"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-background">
              <span className="font-label-sm text-xs opacity-80 mb-1">03</span>
              <h4 className="font-headline-lg text-2xl mb-2">Hàng Mã</h4>
              <p className="font-label-sm text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Không gian lễ hội - Festive & Paper</p>
            </div>
          </Link>
          
          {/* Street 4: Đường Tàu */}
          <Link href="/duong-tau" className="md:col-span-4 group relative overflow-hidden ink-border cursor-pointer h-[300px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Đường Tàu" 
              src="https://upload.wikimedia.org/wikipedia/commons/7/70/Train_street_in_Hanoi.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-background">
              <span className="font-label-sm text-xs opacity-80 mb-1">04</span>
              <h4 className="font-headline-lg text-2xl mb-2">Đường Tàu</h4>
              <p className="font-label-sm text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Điểm nhấn cao trào - Climax & Transit</p>
            </div>
          </Link>
          
          {/* Street 5: Chợ Đồng Xuân */}
          <Link href="/cho-dong-xuan" className="md:col-span-3 group relative overflow-hidden ink-border cursor-pointer h-[300px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Chợ Đồng Xuân" 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Dong_Xuan_market.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-background">
              <span className="font-label-sm text-xs opacity-80 mb-1">05</span>
              <h4 className="font-headline-lg text-2xl mb-2">Chợ Đồng Xuân</h4>
              <p className="font-label-sm text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Sinh hoạt cộng đồng - Ambient</p>
            </div>
          </Link>
        </div>
        
      </section>

      {/* Newsletter / Contact Callout */}
      <NewsletterForm />
    </>
  );
}
