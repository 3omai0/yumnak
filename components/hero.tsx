"use client";
import { motion } from "motion/react";
import { InteractiveNodes } from "./interactive-nodes";
import { ArrowLeft } from "lucide-react";

export function Hero() {
   return (
      <section className="relative min-h-[90vh] w-full flex flex-col justify-center items-start py-24 overflow-hidden px-6 md:px-10">
         <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_50%_-20%,var(--color-brand-light)_0%,transparent_60%)] opacity-40 pointer-events-none" />

         <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start text-right">
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-neutral-200/60 shadow-sm mb-8"
               >
                  <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-800">نحن نبني المستقبل الرقمي</span>
               </motion.div>

               <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.3] mb-8 tracking-tight text-neutral-900"
               >
                  حلول تقنية<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-dark via-brand to-brand-light">
                     تقود نمو أعمالك
                  </span>
               </motion.h1>

               <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-lg mb-10"
               >
                  بصفتنا خبراء في هندسة البرمجيات وتجربة المستخدم، نحول التحديات التقنية المعقدة إلى واجهات سلسة وأنظمة ذكية تضعك في المقدمة.
               </motion.p>

               <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
               >
                  <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand text-white font-bold text-sm hover:bg-brand-dark transition-all duration-500 flex items-center justify-center gap-3 group shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-brand/20 hover:shadow-brand/30 hover:-translate-y-1">
                     <span>ابدأ مشروعك الآن</span>
                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-500" />
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-neutral-800 font-bold text-sm hover:bg-neutral-50 hover:text-brand transition-all duration-500 border border-neutral-200 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1">
                     استكشف خدماتنا
                  </button>
               </motion.div>
            </div>

            <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
               >
                  <InteractiveNodes />
               </motion.div>
            </div>
         </div>
      </section>
   );
}
