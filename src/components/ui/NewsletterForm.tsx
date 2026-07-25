"use client";
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="luu-tru" className="py-24 bg-surface-container-high border-t border-outline-variant">
      <div className="max-w-xl mx-auto px-margin-mobile text-center">
        <div className="mb-8 flex justify-center">
          <span className="material-symbols-outlined text-primary text-5xl">mail</span>
        </div>
        <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Gửi Gắm Ký Ức</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-10">
          Bạn có câu chuyện hay âm thanh nào về Hà Nội xưa muốn chia sẻ? Hãy kết nối với chúng tôi để cùng gìn giữ những giá trị văn hóa này.
        </p>
        
        <form onSubmit={handleSubmit} className="relative">
          <input 
            className="w-full bg-transparent border-b-2 border-outline focus:border-primary outline-none py-3 font-label-sm text-label-sm uppercase transition-all" 
            placeholder="ĐỊA CHỈ EMAIL CỦA BẠN" 
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
          />
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="absolute right-0 bottom-3 text-primary hover:translate-x-1 transition-transform disabled:opacity-50"
          >
            <span className="material-symbols-outlined">
              {status === 'loading' ? 'hourglass_empty' : 'send'}
            </span>
          </button>
        </form>

        {status === 'success' && (
          <p className="text-primary mt-4 font-label-sm uppercase tracking-widest animate-fade-in">
            Cảm ơn bạn đã đăng ký!
          </p>
        )}
        {status === 'error' && (
          <p className="text-error mt-4 font-label-sm uppercase tracking-widest animate-fade-in">
            Có lỗi xảy ra, vui lòng thử lại.
          </p>
        )}
      </div>
    </section>
  );
}
