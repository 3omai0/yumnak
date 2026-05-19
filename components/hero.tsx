"use client";
import { motion } from "motion/react";
import { InteractiveNodes } from "./interactive-nodes";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex flex-col justify-center items-start py-20 overflow-hidden px-6 md:px-10">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_50%_-20%,var(--color-brand-light)_0%,transparent_50%)] opacity-30 pointer-events-none" />
      
      <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-right">
           <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-6"
           >
             <span className="w-2 h-2 rounded-full bg-brand"></span>
             <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark">نحن نبني المستقبل الرقمي</span>
           </motion.div>

           <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tight text-[#1a1a1a]"
           >
              حلول تقنية متكاملة<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-dark to-brand">
                 تقود نمو أعمالك
              </span>
           </motion.h1>

           <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-neutral-600 leading-relaxed max-w-xl mb-12"
           >
              بصفتنا خبراء في هندسة البرمجيات وتجربة المستخدم، نحول التحديات التقنية المعقدة إلى واجهات سلسة وأنظمة ذكية تضعك في المقدمة.
           </motion.p>
        </div>

        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="w-full h-full"
           >
              <InteractiveNodes />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
