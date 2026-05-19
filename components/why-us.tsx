"use client";
import { motion } from "motion/react";
import { Puzzle, LifeBuoy, LineChart, Users, Blocks, Cpu } from "lucide-react";

const features = [
  {
    title: "حلول مخصصة لاحتياجاتك",
    desc: "نطور برمجيات مصممة خصيصًا لتناسب متطلبات عملك الفريدة، مما يمنحك ميزة تنافسية مستدامة.",
    icon: Puzzle,
  },
  {
    title: "دعم فني مستمر",
    desc: "خدمات دعم وصيانة مستمرة للحفاظ على استقرار أداء منتجاتك.",
    icon: LifeBuoy,
  },
  {
    title: "استشارات متقدمة",
    desc: "توجيه استراتيجي لمساعدتك في اتخاذ قرارات تقنية ذكية.",
    icon: LineChart,
  },
  {
    title: "تجربة مستخدم متميزة",
    desc: "نركز على تحسين تجربة المستخدم في كل منتج نقوم بتطويره لضمان سهولة الاستخدام ورضا العملاء.",
    icon: Users,
  },
  {
    title: "تكامل سلس للأنظمة",
    desc: "تخصيص وربط الأنظمة الجاهزة لتتوافق مع بيئة عملك بكفاءة عالية.",
    icon: Blocks,
  },
  {
    title: "أتمتة ذكية للعمليات",
    desc: "تحسين الكفاءة وتقليل التكاليف من خلال أتمتة العمليات.",
    icon: Cpu,
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="px-6 md:px-10 py-16 relative z-10 w-full max-w-[1200px] mt-10">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3 tracking-tight">لماذا يمناك خيارك الأفضل؟</h2>
        <p className="text-sm text-neutral-500 max-w-xl mx-auto">
          نقدم قيمة حقيقية تتجاوز مجرد كتابة الأكواد، لنكون شركاء نجاحك في رحلة التحول الرقمي.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, i) => (
           <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-10px" }}
             transition={{ duration: 0.4, delay: i * 0.1 }}
             key={i}
             className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all group flex flex-col"
           >
              <div className="w-12 h-12 bg-neutral-50 rounded-xl mb-5 flex items-center justify-center group-hover:bg-brand/10 transition-colors border border-neutral-100 group-hover:border-brand/20">
                  <feature.icon className="w-6 h-6 text-brand-dark" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold mb-2 text-neutral-900 group-hover:text-brand transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {feature.desc}
              </p>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
