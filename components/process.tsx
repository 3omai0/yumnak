"use client";
import { motion } from "motion/react";
import { Lightbulb, PenTool, Rocket, Headset } from "lucide-react";

const steps = [
  {
    title: "الاكتشاف والتخطيط",
    desc: "نحلل عملك، أهدافك وتحدياتك من خلال جلسات عصف ذهني لتحديد المتطلبات ووضع خارطة الطريق.",
    icon: Lightbulb,
  },
  {
    title: "التصميم والتطوير",
    desc: "نبدأ بتصميم النماذج الأولية واختبارها، ثم نطور المنتج وفقًا للمواصفات المعتمدة، مرورًا بمراحل التطوير المختلفة.",
    icon: PenTool,
  },
  {
    title: "الاختبار والإطلاق",
    desc: "نجري اختبارات جودة مكثفة لضمان جاهزية المنتج، ثم نقوم بإطلاقه في بيئة العمل الفعلية.",
    icon: Rocket,
  },
  {
    title: "الصيانة والدعم",
    desc: "نواصل تحسين المنتج، ونوفر الصيانة المستمرة، إلى جانب الدعم الفني لضمان أداء مستقر وفعّال.",
    icon: Headset,
  }
];

export function Process() {
  return (
    <section id="process" className="px-6 md:px-10 py-20 relative z-10 w-full max-w-[1200px] mt-10">
      <div className="mb-20 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight">كيف نعمل؟</h2>
        <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          منهجية عمل واضحة ومدروسة نتبعها خطوة بخطوة لتحويل رؤيتك إلى منتج رقمي متكامل بأعلى معايير الجودة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
        {/* Connecting Line for large screens */}
        <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-[1px] bg-neutral-200/60 z-0">
          <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-brand/40 to-transparent" />
        </div>

        {steps.map((step, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            key={i}
            className="bg-white border border-neutral-200/80 rounded-[1.25rem] p-8 relative z-10 hover:border-brand/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 group flex flex-col items-start"
          >
            {/* Step Number Badge */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center font-bold text-neutral-300 text-lg group-hover:text-brand group-hover:border-brand/20 transition-colors duration-500">
              0{i + 1}
            </div>

            <div className="w-14 h-14 bg-neutral-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-brand/5 transition-colors duration-500 border border-neutral-100/50 group-hover:border-brand/20">
              <step.icon className="w-7 h-7 text-brand" strokeWidth={1.5} />
            </div>

            <h3 className="text-base font-bold text-neutral-900 mb-3 group-hover:text-brand transition-colors duration-300">
              {step.title}
            </h3>

            <p className="text-sm text-neutral-500 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
