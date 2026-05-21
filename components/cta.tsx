"use client";
import { ArrowLeft } from "lucide-react";

export function CTA() {
  return (
    <section className="w-full bg-brand py-24 mt-20 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.20),transparent_38%),linear-gradient(45deg,rgba(255,255,255,0.08)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.08)_75%,transparent_75%,transparent)] bg-[size:auto,64px_64px] opacity-70 pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col items-start text-right relative z-10">
        
        <span className="text-white font-medium text-sm mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
          ابدأ اليوم
        </span>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          جاهز للبدء برحلة التحول الرقمي؟
        </h2>
        
        <p className="text-base text-white/90 mb-10 max-w-2xl leading-relaxed">
          دعنا نكون جزءاً من نجاح مشروعك القادم ونبني مستقبلاً رقمياً مذهلاً يليق بطموحاتك، خطوة بخطوة.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-brand font-bold text-sm hover:bg-neutral-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5">
            <span>تواصل معنا</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-transparent text-white font-bold text-sm border border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5">
            احجز استشارة مجانية
          </button>
        </div>
        
      </div>
    </section>
  );
}
