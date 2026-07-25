import HeroSection from '@/components/ui/HeroSection';
import HeritageStage from '@/components/ui/HeritageStage';
import AudioPlayer from '@/components/ui/AudioPlayer';
import MemoryForm from '@/components/ui/MemoryForm';
import LocationBanner from '@/components/ui/LocationBanner';

export default function HangGai() {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsl1VgcUhi2i4-mOptgFg6lR8tf4wGYqtC-sb5avGmAexH2yjmfQ7Q6OujIXONwEaM07lMBbX7hcqnHoSCi1Nd6-ZiAyCHVquPA94W0Eo0Cgx2dwIPrDvsEwDGGZN8w2dMwuFLz22gL2aS6MSonn_7D09GDpwTBCELRDuvtmxhqnfoeadE1tLZpiqrWYcDzGuR0WNTW_tYI8XNbv2z7Vvuk8UZQy5xP6xnLpCZ__m9Kzge9ohNNdbc",
      caption: "Khung cảnh nhộn nhịp của phố Hàng Gai những năm 1920, nơi tơ lụa phủ kín các cửa hàng."
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0wBCP0n4xlbL7hTuuhqSUytKWW-5jerD5gU7J4k_PA6JpaMt9seCgJfKZRJHSwPtInbRQJ1p9CuAXmCrUhZ8JRuaCFbEBgf_pODc4vQTBV4jT6IQDQwA2Wvnez9jXOKHYaz3NmFzbgWs4JwL5fbRFGC5DNCfqAd0vbxpzq5wXzWhLAhDvtmhubvehqxIFCPIMUqWWNJSzxWZJBX9D-jkZbTvgWgBOCXjJite5KHVoovSSk2zH1pdV",
      caption: "Bàn tay người thợ dệt tỉ mỉ bên khung cửi, tạo nên những thước lụa tinh xảo gánh vác danh tiếng kinh kỳ."
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyeZ7mJi6zsdYF6rZFDCyeYSqZ48XriOmwrO0cCFWUvcxamMaNg74VahI5k17JCqqxWPbFMTqLl2DDwexnuYOqe7XtDWBhC6RtNMLByq5L96-jsfXe8iIshdiCcRuP6jJ6Y4iEu8citQa_Fmh9r51nDLaMQGCjIngTu98cXmWv2uN9a-rmvtNkAqd2qRUi44bMk5HGEJDfdos9HvdBWhfELzRW18JUkiHyXcJO9WyLhQU-GoNe3lmc",
      caption: "Chi tiết thêu tay phượng hoàng trên nền gấm đỏ, minh chứng cho sự xa hoa và khéo léo của nghệ nhân xưa."
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAafWE843qGtXQmZ_qTmYN-xN9zuqJRvuIgd3HsomjaopNZUj51NfC6P-g1v9_LXGOhNejiED29XE2JtT0qEBsCrA04oYl_CFlLrwWSMtyZnobv22mSBgs-9WIvQeopWKJ40M7-fklKXeePainw6zVVq0Gxxz4nXriIAWBYj1BFMi82F3Kn95ZzD5lH8nnOqx919oznezfGhcfWupmIR_8eaBohV8OETpwN2iK1SmlOeYlWGIwl70uX",
      caption: "Chân dung một tiểu thư Hà thành trong trang phục lụa Hàng Gai, toát lên vẻ đài các của một thời đã qua."
    }
  ];

  return (
    <>
      <HeroSection 
        title="Tiếng Lụa Là Vóc Vạc"
        subtitle='"Nhịp thoi đưa lách cách hòa cùng tiếng cười nói xôn xao, vẽ nên bức tranh phồn hoa của phố thị kinh kỳ..."'
        categoryLabel="Ký Ức Đời Sống"
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC60uYn8R8KkG_V2L86W8qF5eQ9tSvx9iNfL-5kK3W8t3wXlC7h0dY1qHqK5fF-fU2tqN0L5l5M7vP4k6vG7d9v5q9G6d9z6m5G6k9y0M3u5v9I2n4T8m4H7r9L6l1C5f7x6g5t9G3v1A2y4K5u7O8N9z3G1J7E0m5v1I8o7p5u6r9N6v5M8j8I4M3N8w4F9l9y9C5G6m5"
        align="left"
      />

      <section className="bg-surface-container-low py-24 border-y border-outline-variant overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Audio Controls & Context (Left) */}
                <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
                    <div className="text-left mb-8">
                        <span className="font-label-sm text-primary tracking-widest uppercase mb-2 block">Thanh Âm Đang Phát</span>
                        <h2 className="font-headline-lg text-primary text-4xl mb-4">Giai Điệu Của Lụa</h2>
                        <p className="font-body-md text-on-surface-variant italic leading-relaxed">
                            Lắng nghe nhịp điệu của lịch sử. Các hình ảnh bên cạnh sẽ tự động hiện diện theo từng chương hồi của âm thanh.
                        </p>
                    </div>
                    
                    <div className="ink-border p-6 bg-surface-container">
                        <AudioPlayer 
                          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
                          title="Tiếng khung cửi & Tiếng rao trưa" 
                          variant="standard" 
                        />
                    </div>
                </div>

                {/* The Central 'Stage' Area (Right) */}
                <div className="lg:col-span-8 order-1 lg:order-2">
                    <HeritageStage images={images} autoPlayInterval={7000} />
                </div>
            </div>
        </div>
      </section>

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
        <div className="md:col-span-5 space-y-6">
          <div className="ink-border-double p-6 bg-surface">
            <h4 className="font-label-sm text-primary mb-4 border-b border-outline-variant pb-2">THÔNG TIN DI SẢN</h4>
            <dl className="space-y-4">
              <div>
                <dt className="font-label-sm text-on-surface-variant uppercase text-xs">Tên gọi khác</dt>
                <dd className="font-body-md text-primary">Phố Tơ Lụa (Silk Street)</dd>
              </div>
              <div>
                <dt className="font-label-sm text-on-surface-variant uppercase text-xs">Thời kỳ hưng thịnh</dt>
                <dd className="font-body-md text-primary">Cuối thế kỷ XIX - Đầu thế kỷ XX</dd>
              </div>
              <div>
                <dt className="font-label-sm text-on-surface-variant uppercase text-xs">Sản vật đặc trưng</dt>
                <dd className="font-body-md text-primary">Lụa tơ tằm, Gấm hoa, Đồ thêu tay</dd>
              </div>
              <div>
                <dt className="font-label-sm text-on-surface-variant uppercase text-xs">Vị trí</dt>
                <dd className="font-body-md text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Quận Hoàn Kiếm, Hà Nội
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <MemoryForm 
        title="Gửi Ký Ức"
        subtitle="Bạn có câu chuyện hay kỷ niệm nào về con phố này không? Hãy chia sẻ cùng chúng tôi để di sản này mãi luôn sống động."
        fields={['name', 'timePeriod', 'story']}
      />

      <LocationBanner location="Phố Hàng Gai" district="Quận Hoàn Kiếm, Hà Nội" />
    </>
  );
}
