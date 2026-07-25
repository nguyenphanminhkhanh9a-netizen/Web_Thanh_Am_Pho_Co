import React from 'react';

interface MemoryFormProps {
  title?: string;
  subtitle?: string;
  fields?: ('name' | 'email' | 'timePeriod' | 'story')[];
  showPhotoUpload?: boolean;
}

export default function MemoryForm({
  title = "Gửi Lại Một Mảnh Ký Ức",
  subtitle = "Có những câu chuyện chỉ còn đọng lại trong trí nhớ. Hãy kể cho chúng tôi nghe...",
  fields = ['name', 'timePeriod', 'story'],
  showPhotoUpload = false
}: MemoryFormProps) {
  return (
    <div className="bg-surface-container-low p-8 md:p-12 ink-border vintage-shadow max-w-3xl mx-auto my-16">
      <div className="text-center mb-10">
        <h3 className="font-headline-lg text-3xl text-primary mb-4">{title}</h3>
        <p className="font-body-md text-on-surface-variant italic">{subtitle}</p>
      </div>

      <form className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.includes('name') && (
            <div className="flex flex-col">
              <label className="font-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Tên của bạn</label>
              <input 
                type="text" 
                className="bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-2 font-body-md transition-colors"
                placeholder="Ví dụ: Nguyễn Văn A" 
              />
            </div>
          )}
          
          {fields.includes('email') && (
            <div className="flex flex-col">
              <label className="font-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Email (Tùy chọn)</label>
              <input 
                type="email" 
                className="bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-2 font-body-md transition-colors"
                placeholder="Email để nhận phản hồi" 
              />
            </div>
          )}

          {fields.includes('timePeriod') && (
            <div className="flex flex-col">
              <label className="font-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Thời gian ký ức</label>
              <input 
                type="text" 
                className="bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-2 font-body-md transition-colors"
                placeholder="Ví dụ: Những năm 1990" 
              />
            </div>
          )}
        </div>

        {fields.includes('story') && (
          <div className="flex flex-col mt-4">
            <label className="font-label-sm uppercase tracking-widest text-on-surface-variant mb-4">Câu chuyện của bạn</label>
            <textarea 
              rows={5}
              className="bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-2 font-body-md transition-colors resize-none leading-loose"
              style={{
                backgroundImage: 'linear-gradient(transparent, transparent 31px, var(--color-outline-variant) 31px, var(--color-outline-variant) 32px)',
                backgroundSize: '100% 32px',
                lineHeight: '32px'
              }}
              placeholder="Kể lại những gì bạn còn nhớ..."
            ></textarea>
          </div>
        )}

        {showPhotoUpload && (
          <div className="flex flex-col mt-4">
            <label className="font-label-sm uppercase tracking-widest text-on-surface-variant mb-4">Đính kèm ảnh (Nếu có)</label>
            <div className="border-2 border-dashed border-outline-variant p-8 text-center cursor-pointer hover:bg-surface-variant/30 transition-colors">
              <span className="material-symbols-outlined text-4xl text-outline mb-2">add_a_photo</span>
              <p className="font-body-md text-on-surface-variant">Nhấn để tải ảnh lên, hoặc kéo thả vào đây</p>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <button 
            type="button" 
            className="px-12 py-4 bg-primary text-background font-label-sm uppercase tracking-widest font-bold ink-border hover:bg-primary-container transition-colors active:scale-95 transform"
          >
            Gửi Ký Ức
          </button>
        </div>
      </form>
    </div>
  );
}
