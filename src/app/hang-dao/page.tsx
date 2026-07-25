import HeroSection from '@/components/ui/HeroSection';
import HeritageStage from '@/components/ui/HeritageStage';
import AudioPlayer from '@/components/ui/AudioPlayer';
import MemoryForm from '@/components/ui/MemoryForm';
import LocationBanner from '@/components/ui/LocationBanner';

export default function HangDao() {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNt5u9bE_pzHdJgAkjqX0yzW9XxO3YheYigDrpBarkm_CFe3WsCDwCFSxBDUyvzv3zrfIl69kuNnLiSk0fLjRgQ0JbiqSp0SKIZFql-AmIJshT72bWvln9bKvKscTQL1c6A1_Gaoy-krChFJBw4fXE2BE96mKJxCLAFT5UDAKmKdwMVn5rH8znosntoZAFirPo_82gAWuQ3HySrsIZ7C_zffBpcFIVYV9LOZz_2J7XWvJkeg6CkcAo",
      caption: "Tiếng guốc mộc và lụa hồng"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5730-BxdTW3LyUFbZI7QLJj3iTzOiQiQGlkZ8T16sGQdOb9vZvTqBlc56ZF5VgIcnJu83swnGHSrYs8r3xIdObZbqRw2mcuTY9jpptGer-34ha0gMICx9HiXuezAMo5QQd8ZRCBf1jOcxgvurZdbBaspRfDiNnXbKCdWsw8YZW8Os8xtagxbs8n_3Wa92ZZknaiFqEnz-UiSy0dUzojrV9-8xyci644Wy6BrTWIil0-xENXTGe8t1",
      caption: "Hiệu lụa tấp nập xưa"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcLYFRCoiRxaiuVaqGffC6rMcpVBpyarVhFrNILpJbZSm8mXeARdwDpxYUkndezQMGwJOWjuhTkWly0jEKdlvSzQOP5MiR4G0W7D6ufw_BCzQ9FR5vQVqED9OauFVX5yvmbGCyVC8lAs9Qvgop7OGJKlCNg4FUNGPtsArI5IR5KcWMRm2oabPKDybdXhpupx-xYt7H4BhGvoPAlCwjlkNaASQWRWyYFJbs1OXBnjbJ3ZMuJaR7neTK",
      caption: "Dấu chân trầm mặc"
    }
  ];

  return (
    <>
      <HeroSection 
        title={<>Tiếng Lụa<br/>Giao Thương</>}
        subtitle='"Từng sải lụa mượt mà trôi qua tay người thương khách, mang theo tiếng nói cười tấp nập của một thương cảng thu nhỏ..."'
        categoryLabel="Di Sản Thương Mại"
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBsl1VgcUhi2i4-mOptgFg6lR8tf4wGYqtC-sb5avGmAexH2yjmfQ7Q6OujIXONwEaM07lMBbX7hcqnHoSCi1Nd6-ZiAyCHVquPA94W0Eo0Cgx2dwIPrDvsEwDGGZN8w2dMwuFLz22gL2aS6MSonn_7D09GDpwTBCELRDuvtmxhqnfoeadE1tLZpiqrWYcDzGuR0WNTW_tYI8XNbv2z7Vvuk8UZQy5xP6xnLpCZ__m9Kzge9ohNNdbc"
        align="center"
      />

      <section className="bg-surface-container py-24 px-margin-mobile md:px-margin-desktop border-y border-outline-variant">
        <div className="max-w-container-max mx-auto text-center mb-16">
           <span className="font-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block">Hành trình thính giác</span>
           <h2 className="font-headline-lg text-primary text-4xl">Trình Diễn Thanh Âm</h2>
        </div>
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8 relative">
               <HeritageStage images={images} autoPlayInterval={5000} />
            </div>
            <div className="md:col-span-4">
               <AudioPlayer 
                 src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
                 title="Tiếng vọng Hàng Đào" 
                 subtitle="Tiếng guốc khua vang một góc lòng..."
                 variant="standard" 
               />
               <div className="mt-8 p-6 border-l-4 border-primary bg-surface-container-low italic text-on-surface-variant text-lg leading-relaxed">
                    &quot;Qua Hàng Đào ngắm lụa hồng,<br/>
                    Tiếng guốc khua vang một góc lòng...&quot;
               </div>
            </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-24 items-center">
        <div className="md:col-span-5 flex flex-col justify-center">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-6 relative inline-block">
                Dấu chân thời đại
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-primary"></div>
            </h3>
            <p className="mb-6 leading-relaxed font-body-md text-on-surface text-lg">
                Hàng Đào - con phố tấp nập bậc nhất đất Hà Thành xưa, nơi từng là cái nôi của nghề nhuộm điều, tơ lụa. Những tiếng rao trầm bổng hòa cùng tiếng guốc mộc khua trên vỉa hè lát gạch Bát Tràng đã tạo nên một bản hòa âm đặc trưng không thể nhầm lẫn. 
            </p>
        </div>
        <div className="md:col-span-7 flex items-center justify-center">
            <div className="relative w-full max-w-lg decorative-frame p-2 bg-surface-container-high shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA09aLT9xfsgUjCST4uiAqnAfWmfb2BAHfhhd7o58XPjxLTR4ONsn-SdSpsF2QNULepvvMUuYwx0xsqMtdkKakrLzpaKp9WbExD5o0JKewDD3MrvAvGUdDZj47vYN3MVvbkfd-OtnWFQ5iRRoOFRnxcicviHcDK0N3IpCmPKpfvqKEqxRiWOokhbN-UW5ykxbCPSMeihDeKY2arup8l0ykMSC6n2VuXbjIqZfEF1_G6K1WJd4q29Le1" 
                  alt="Tram tracks" 
                  className="grayscale hover:grayscale-0 transition-all duration-1000 w-full h-auto"
                />
                <p className="mt-2 text-center font-label-sm text-[10px] uppercase tracking-tighter opacity-60">Tiếng tàu điện vang bóng một thời</p>
            </div>
        </div>
      </section>

      <MemoryForm 
        title="Viết câu chuyện của bạn"
        subtitle="Gửi gắm những mảnh ký ức còn sót lại về tiếng guốc, về phố cũ trong tim bạn."
        fields={['name', 'email', 'story']}
      />

      <LocationBanner location="Phố Hàng Đào" district="Quận Hoàn Kiếm, Hà Nội" />
    </>
  );
}
