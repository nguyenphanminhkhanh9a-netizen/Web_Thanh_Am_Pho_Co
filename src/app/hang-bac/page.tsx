import HeroSection from '@/components/ui/HeroSection';
import AudioPlayer from '@/components/ui/AudioPlayer';
import MemoryForm from '@/components/ui/MemoryForm';
import LocationBanner from '@/components/ui/LocationBanner';
import QuoteCallout from '@/components/ui/QuoteCallout';

export default function HangBac() {
  return (
    <>
      <HeroSection 
        title="Tiếng Chạm Khắc Thời Gian"
        subtitle='"Từng nhát búa gõ xuống là một nhịp đập của quá khứ còn vọng lại, giữ lấy hồn cốt của nghề kim hoàn truyền thống..."'
        categoryLabel="Di Sản Nghề Truyền Thống"
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAHLsyd4gV0xwqnjmuVOyNRp2wM_-enG1bqlvrdTGy0pWA-QLetJSpjZVpV6dbUVpSa5ilmmZzQHO00W6rwuDS5pTvYvalqVvfo2p4IpaFlu__c93mmRSQnUjxNX77tgiMb5HhUVOe_wfbFXcqRObX9dotSyY8tkc1k6GTmUkyqSqJdAQevJUYi486m4jRmLHmwsTO50MHceeT6NOeySFWwAq1GUeaCkBnlJ89fMNT8rUf26bJQQjSZ"
        align="center"
      />

      <section className="bg-surface-container-low py-24 border-y border-outline-variant overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
                <span className="font-label-sm text-secondary uppercase tracking-widest block mb-2">Hành Trình Thính Giác & Thị Giác</span>
                <h2 className="font-headline-lg text-headline-lg text-primary">Sân Khấu Ký Ức</h2>
            </div>

            <div className="flex justify-center mb-12">
               <AudioPlayer 
                 src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
                 title="Thanh Âm Hàng Bạc" 
                 subtitle="Tiếng đục chạm bạc tỉ mỉ"
                 variant="gramophone" 
               />
            </div>
            
            <div className="max-w-3xl mx-auto">
               <QuoteCallout 
                 quote="Hãy nhắm mắt và lắng nghe nhịp điệu của lịch sử. Tiếng búa gõ nhỏ giọt trên đe đồng, tiếng mũi ve lướt nhẹ trên mặt bạc, tạo nên những đường vân mây, sóng nước tinh xảo."
                 author="Lưu trữ 1932"
               />
            </div>
        </div>
      </section>

      <MemoryForm 
        title="Gửi gắm ký ức"
        subtitle="Chia sẻ câu chuyện hoặc cảm xúc của bạn về tiếng chuông, tiếng gõ của Hàng Bạc để cùng chúng tôi bồi đắp kho tàng di sản này."
        fields={['name', 'story']}
        showPhotoUpload={true}
      />

      <LocationBanner location="Hàng Bạc" district="Quận Hoàn Kiếm, Hà Nội" />
    </>
  );
}
