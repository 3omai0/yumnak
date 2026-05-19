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
    <section id="process" className="px-6 md:px-10 py-16 relative z-10 w-full max-w-[1200px] mt-10">
      <div className="mb-16 text-center relative z-10">
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 tracking-tight">خطوات العمل</h2>
        <p className="text-sm text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          نمر بعدة خطوات مدروسة ومحكمة لتنفيذ المشروع على أكمل وجه، بدءًا من التخطيط وحتى التسليم، لضمان تحقيق النتائج المطلوبة بأعلى معايير الجودة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connecting Line for large screens */}
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-neutral-100 z-0">
          <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-brand/20 to-transparent" />
        </div>

        {steps.map((step, i) => (
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-20px" }}
             transition={{ duration: 0.5, delay: i * 0.15 }}
             key={i}
             className="bg-white border border-neutral-200 rounded-2xl p-6 relative z-10 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all group flex flex-col items-start"
           >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center font-bold text-neutral-300 text-lg group-hover:text-brand group-hover:border-brand/20 transition-colors">
                0{i + 1}
              </div>

              <div className="w-12 h-12 bg-neutral-50 rounded-xl mb-5 flex items-center justify-center group-hover:bg-brand/10 transition-colors border border-neutral-100 group-hover:border-brand/20">
                  <step.icon className="w-6 h-6 text-brand-dark" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-sm font-bold text-neutral-900 mb-2 group-hover:text-brand transition-colors">
                {step.title}
              </h3>
              
              <p className="text-xs text-neutral-500 leading-relaxed">
                {step.desc}
              </p>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
