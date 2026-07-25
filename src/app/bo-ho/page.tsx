import HeroSection from '@/components/ui/HeroSection';
import HeritageStage from '@/components/ui/HeritageStage';
import AudioPlayer from '@/components/ui/AudioPlayer';
import MemoryForm from '@/components/ui/MemoryForm';
import LocationBanner from '@/components/ui/LocationBanner';

export default function BoHo() {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa7fiwG2W9q42n-jvgWZtraQ6GFnxKCoZJxrErXi9-kEtnnVfA1caOiY0weNcSS0TLaETwgGFANjj2vURwQHc0qED9QyNE40920T2AiivdtxbQAvF_gHt0jjVLfmy7pzErdcUR9UHjPiWCF8Cor1NC1K8McPgoQTDg0PdIuJ8OjdzGb4MsuhuVHUcDArTcFuxGj14sSsH2BZUOELY0U3G13RcqZvOCD7G3zXa9hyFaMU-Tvk2nDzsf",
      caption: "Bờ Hồ buổi sớm, sương giăng phủ lối cũ, nơi thời gian như ngừng lại bên Tháp Rùa cổ kính."
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRFmSYleRFOxKTPEYIq82uI086kaZ5WUH08ggNSFj7HQh546_9hAj_8NeBaVE6vaFLPP4btavXADDy7V_ROweTJkG_7JrIMG-5qPvZ1gX3uPZqU3NUtovpPEXpDU9fNIseQJSFQKa_HhZYK2X1e95dlGtnGQ_m4Ez15lH_j4-GzvJLuNXNB9GBjL6-BtMyl7rylixscTwAnWTMutzka3BDPmuakUnSo6RigawHLkBLBK3x4tyNYEBV",
      caption: "Người Hà Thành thanh tao dạo bước ven hồ trong tà áo dài truyền thống, khoảng năm 1925."
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-2p1m3brbixzEHHwtf6LiN2RYTTKutEDwS9V8Q9X_2mXycOwD7--WT4XdJw4ZIhimcCPHhI2jiN4iWh-P2eHl9YqH0Iz87QeYH846GYZRGgyFf70eF1LXo1evo5-XT1rOP5Fb9iTHSYdUU92S_W3CqFkERsipq7D10YBllPfly5Phpcpq16BklPgPNTkU0Ldxtda5mhfWsgDw38yZSSBJouSp_VpwyrSd1y5-uJBQWS0G3iy7Xhyk",
      caption: "Chuyến xe điện cuối ngày chạy dọc phố Đinh Tiên Hoàng, mang theo âm hưởng của một thời kỳ hiện đại sơ khai."
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIgORgxYYjbWV8yaIBh6TuVvIIuI9loYpUcRzun6LNNrFIPXYrRgw5Cjb-IBnR33asZBSIHIgWVUVd5HZzpwTDff08jWD5dU6_bDPAE9o6U3JBkGa7ILz_qtHAoFdc2FfM4NRX8lzJz6XftTsAG1XZ7Ii1JZizMzW8JF_tjVk0M4r4EnSd-C4ACTxGPWEDnhzVPXfy7tBLfxaSwAYaxhNEMotmXUh-k7Hoz_Srk9tmWRXFBMcyW701",
      caption: "Dưới bóng cổ thụ, tiếng trà rót và lời hỏi han tạo nên một nhịp sống chậm rãi và ấm áp."
    }
  ];

  return (
    <>
      <HeroSection 
        title="Nhịp Đập Hoàn Kiếm"
        categoryLabel="Sóng di sản - 90.0 MHz"
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuChs_tBMYdX_i20ak6pGGN_GEyJytx-U5Pvj4C5MDwzeIRdiw5W1ex370Q6TK7VcGnXqhaQdyaK0lwt3pQNd1230ZUmQkA5C1VnTYrcWnor0a89den9aLpCcT-3xvcA8o1mGzQSZb7UvLclHDlYNVTbkeRptq7FQFklwy3tVRnhhkyXraMW0YxjpEU06qdA00B0FHBn6HkB55EKDvtk7HLnY1x0p4QCiy3Jtvs_71x-nZqCG6cAVk28"
        align="center"
      />
      
      <section className="relative -mt-32 z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
        <HeritageStage images={images} autoPlayInterval={6000} />
        <div className="mt-8 w-full">
           <AudioPlayer 
             src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
             title="Thanh Âm Bờ Hồ: Tiếng chuông xe điện" 
             subtitle="Đang trình chiếu • Ký ức 1925" 
           />
        </div>
      </section>

      <section className="mb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
              <span className="font-label-sm text-secondary uppercase tracking-[0.2em]">Khám phá di sản</span>
              <h1 className="font-display-lg text-5xl text-primary leading-none">Nhịp Đập Hoàn Kiếm</h1>
              <p className="font-body-md text-on-surface leading-relaxed">
                  Không chỉ là một hồ nước, Hoàn Kiếm là điểm hội tụ của dòng chảy lịch sử. Qua âm thanh và hình ảnh, chúng tôi mời bạn ngược dòng thời gian, cảm nhận hơi thở của Hà Nội những năm đầu thế kỷ.
              </p>
              <div className="flex items-center gap-4 py-4 border-y border-outline-variant">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                  <span className="font-body-md font-semibold">Tài liệu lưu trữ: 1900 - 1945</span>
              </div>
          </div>
          <div className="md:col-span-7 space-y-6">
              <div className="ink-border p-6 bg-surface-container-low vintage-shadow">
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

      <MemoryForm 
        title="Gửi lại một mảnh ký ức"
        subtitle="Mỗi câu chuyện bạn chia sẻ là một viên gạch xây nên ngôi đền di sản của chúng ta."
        fields={['name', 'timePeriod', 'story']}
      />

      <LocationBanner location="Hoàn Kiếm" district="Hà Nội" />
    </>
  );
}
