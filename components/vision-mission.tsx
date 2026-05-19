"use client";
import { motion } from "motion/react";
import { Target, Eye } from "lucide-react";

export function VisionMission() {
  return (
    <section id="vision-mission" className="px-6 md:px-10 py-16 relative z-10 w-full max-w-[1200px] mt-10">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3 tracking-tight">رؤيتنا ورسالتنا</h2>
        <p className="text-sm text-neutral-500 max-w-xl mx-auto">
          نطمح لأن نكون القوة الدافعة للابتكار، مبنيين على قيم راسخة وتطلعات مستقبلية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5 }}
          className="group relative bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500 flex flex-col justify-center min-h-[300px]"
        >
          {/* Subtle gradient blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-out z-0" />
          
          <div className="relative z-10 flex flex-col items-start">
            <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors duration-500 border border-neutral-100 group-hover:border-brand/20">
              <Target className="w-8 h-8 text-brand" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight group-hover:text-brand transition-colors duration-300">
              رسالتنا
            </h3>
            
            <p className="text-lg text-neutral-500 leading-relaxed max-w-md">
              تمكين الشركات وقطاع الأعمال من تحقيق التميز في رحلتها الرقمية من خلال حلول تقنية متكاملة تجمع بين الابتكار والتخصيص.
            </p>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 flex flex-col justify-center min-h-[300px]"
        >
          {/* Subtle gradient blob */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-out z-0" />
          
          <div className="relative z-10 flex flex-col items-start">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-500 border border-white/10">
              <Eye className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              رؤيتنا
            </h3>
            
            <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
              أن نصبح روادًا في بناء تقنيات متقدمة ومبتكرة تدفع بالأعمال نحو مستقبل مستدام وذكي.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
