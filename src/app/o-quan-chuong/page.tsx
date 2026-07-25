import HeroSection from '@/components/ui/HeroSection';
import HeritageStage from '@/components/ui/HeritageStage';
import AudioPlayer from '@/components/ui/AudioPlayer';
import MemoryForm from '@/components/ui/MemoryForm';
import LocationBanner from '@/components/ui/LocationBanner';
import FactsCallout from '@/components/ui/FactsCallout';
import ScrollRevealWrapper from '@/components/ui/ScrollRevealWrapper';

export default function OQuanChuong() {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv1GzSqsgHb2qsPe0_aXdmnPqVR6mrYylHJ9j0UWTgW40rcrQSRYGN8hv6XIdTS8V2U9MyCTWdrviXailrODmMuBmvqwO2zXd48-PlMU5ganTwMDn2doRjurmNeZSNZs4NnCceMdrMsaFsPZsH7gLJJaC6hXVK-ABY3y-73b8Rw1NJw6eaOVnZOt8QPPZEf5AUY7Se4Cf9lbBJTNcoGBZDs8BJHXQLiS3V1qxS9wuA1nmmBLJ_TqUc",
      caption: "Tư liệu 1920: Hình ảnh hiếm hoi về cổng thành xưa với nhịp sống bình dị của người dân."
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuASIvtozzjjQqUo6kF95pM8qpKeX3O_zgH88iQEqFwSDOq6HzEJM8BezIpszkUmafAH78rsksR75kpIEFFyfMiBKMlvoYcKq-1rPgYz7Jekv5ckQAdqaHMc6DgBgDr2oSSB3pD1CwtMBawodGoEmHJpUs7vE6BYnezNChxeTJXiS3BfivZX--WSkLLlWdXeSL6o81uX0q8opFVLBDwiQPiZqbZXxaVQ58m-qtKyYV_yZNm5r0XDSFu7",
      caption: "Vọng lâu Ô Quan Chưởng"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD09jmHH2sqfGkWtG0Q-hZPSZmLfUFekEQe-Zl5itq0b6qHT-jHaaKgFgGDW5rs1syXCWEcifdQ6mAXSSGcxP2iFMjPg7ea5s6c6UadMrQxZESKVwEmTDmg91C7cM4SI2ahgckHeBJXXSBgt-WN2mDFX3WXDfmZn2-fGRFzQiO_WG2tnBzhl8c2v_1EnmSf9k23Sv9m7_l99aVI5lARvZFbfjt4vO7V2rMgAg9zrbI0xKZv4gCZrJ20",
      caption: "Cổng vòm mang đậm kiến trúc thời Lê"
    }
  ];

  const facts = [
    "Cửa ô này từng là nơi kiểm soát hàng hóa từ sông Hồng vào chợ Đồng Xuân.",
    "Một tấm bia đá năm 1881 vẫn còn gắn trên tường cổng, cấm quân lính không được nhũng nhiễu dân.",
    "Kiến trúc vọng lâu phía trên từng là nơi lính canh quan sát toàn bộ khu vực phía Đông."
  ];

  return (
    <>
      <HeroSection 
        title={<>Ô Quan Chưởng</>}
        subtitle='"Tiếng vọng từ cửa ô duy nhất còn sót lại của kinh thành xưa..."'
        categoryLabel="Di tích lịch sử"
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCf64wHwcADOimWOSq3I0f88y9MDCVcxNp2acw49mVhi4-s1e5rdNGGMiQQDZe8k_r1ttuTYS3ie0Cs4xiJuy7g19h07TZLbzscZvvVJNGTqCaOJzRpioDjLyRIA1zpae9Uuk7YMQzsCvoCDpdsjfcw7mwtV4pcY9o452TfpR4HBFXIUqKcwMJOciRw0imucA4o6rfrU5e_l6xlS1hdU7YiOpGYj5UFgC8AtFpaHXYBHQd8qecgnwbU"
        align="center"
      />

      <section className="py-20 bg-surface-container-low border-y border-outline-variant overflow-hidden">
        <ScrollRevealWrapper delay={100} className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Audio Player: Left Side */}
            <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                    <h2 className="font-headline-lg text-headline-lg text-primary italic">Sân Khấu Ký Ức</h2>
                    <p className="text-on-surface-variant">Lắng nghe và quan sát những hình ảnh lịch sử hiện dần qua từng nhịp thở của thời gian. Mỗi âm thanh là một cánh cửa mở vào quá khứ.</p>
                </div>
                
                <div className="bg-background p-8 border border-outline-variant shadow-sm relative overflow-hidden group vintage-shadow">
                    <AudioPlayer 
                      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
                      title="Hà Nội nghìn năm văn vật" 
                      subtitle="Bản Ghi Di Sản"
                      variant="standard" 
                    />
                </div>
                <div className="italic text-on-surface-variant text-sm border-l-2 border-primary pl-4 py-2 bg-background/50">
                    "Mỗi đoạn âm thanh mở ra một góc nhìn mới về Ô Quan Chưởng..."
                </div>
            </div>
            
            {/* Visual Stage: Right Side */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[500px] relative">
                <div className="w-full max-w-2xl">
                    <HeritageStage images={images} autoPlayInterval={5000} />
                </div>
            </div>
        </ScrollRevealWrapper>
      </section>

      <section className="py-20 px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <ScrollRevealWrapper delay={200} className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 space-y-8">
                <h2 className="font-headline-lg text-headline-lg text-primary border-b border-outline-variant pb-4">Vết Tích Thời Gian</h2>
                <div className="prose prose-stone max-w-none">
                    <p className="text-on-surface-variant leading-relaxed text-lg first-letter:text-6xl first-letter:font-headline-lg first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                        Ô Quan Chưởng hay còn gọi là cửa Đông Hà, là một cửa ô của Hà Nội xưa, nằm ở phía Đông của kinh thành Thăng Long. Đây là cửa ô duy nhất còn sót lại nguyên vẹn cho đến ngày nay. Được xây dựng vào năm Cảnh Hưng thứ 10 (1749), công trình mang đậm dấu ấn kiến trúc thời Lê với vọng lâu và mái vòm cuốn đặc trưng.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed mt-4">
                        Tên gọi "Quan Chưởng" được đặt để tưởng nhớ một viên quan Chưởng vệ cùng các binh sĩ đã anh dũng hy sinh tại đây trong cuộc chiến đấu chống quân Pháp vào năm 1873. Sự hy sinh đó không chỉ bảo vệ cửa ngõ thủ đô mà còn khắc sâu vào lòng người dân Hà Nội một biểu tượng của lòng yêu nước.
                    </p>
                </div>
            </div>
            <div className="md:col-span-4 bg-surface-container mt-12 md:mt-0 p-2 vintage-shadow">
                <FactsCallout title="Bạn có biết?" facts={facts} />
            </div>
        </ScrollRevealWrapper>
      </section>

      <section className="bg-surface-container-high py-16 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <ScrollRevealWrapper delay={150} className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Vị Trí Trong Lòng Phố</h2>
                <p className="text-on-surface-variant mb-8">Nằm ở đầu phố Hàng Chiếu, cửa ô này như một nút thắt nối liền quá khứ giao thương nhộn nhịp của bến sông Hồng với sự trầm mặc của khu phố cổ.</p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-primary">
                        <span className="material-symbols-outlined">location_on</span>
                        <span className="font-label-sm uppercase">Phố Hàng Chiếu, Hoàn Kiếm, Hà Nội</span>
                    </div>
                    <div className="flex items-center gap-4 text-secondary">
                        <span className="material-symbols-outlined">schedule</span>
                        <span className="font-label-sm uppercase">Mở cửa tự do - Luôn luôn chào đón</span>
                    </div>
                </div>
            </div>
            <div className="h-80 mt-12 md:mt-0 ink-border overflow-hidden bg-surface-dim relative group cursor-crosshair">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
                <div 
                  className="w-full h-full bg-cover bg-center grayscale-[20%] transition-transform duration-1000 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuUZ6H28Oq03YkBp3ESX4nhhjyxamqnDCnSAqb0vM60lcKXu5nQmAF2usCRrPAx_Tg_QwuabGYTWhCTAGsk2i26OxNpvzJ8p151VrBcm1WEsqDfX7PiXJJEzsWAT79NsLji0z_JKcZNq1nb3QThsiv5owKwDQmaZ9CLAU1Ja-u-FRqiH2dUwyetw0dFne9tcbVcp2-0JzfVuTr7SyrOB3r9FV6qPZGd1ZtdAfMOucbYS_KFWFCB-VV')" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-12 h-12 bg-primary/20 rounded-full animate-ping absolute -top-4 -left-4"></div>
                      <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg relative z-10"></div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-surface-container-highest text-on-surface p-4 border border-outline-variant shadow-lg w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                         <h4 className="font-label-sm uppercase text-primary mb-1">Ô Quan Chưởng</h4>
                         <p className="font-body-md text-sm">Cửa ô duy nhất còn sót lại của Hà Nội.</p>
                         <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-surface-container-highest"></div>
                      </div>
                    </div>
                </div>
            </div>
        </ScrollRevealWrapper>
      </section>

      <ScrollRevealWrapper delay={200}>
        <MemoryForm 
          title="Viết câu chuyện của bạn"
          subtitle="Chia sẻ những ký ức hoặc cảm nhận của bạn khi đứng dưới vòm cổng này."
          fields={['name', 'story']}
        />
      </ScrollRevealWrapper>
    </>
  );
}
