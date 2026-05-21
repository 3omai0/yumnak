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
    <section id="why-us" className="px-6 md:px-10 py-20 relative z-10 w-full max-w-[1200px] mt-10">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight">لماذا يمناك خيارك الأفضل؟</h2>
        <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          نقدم قيمة حقيقية تتجاوز مجرد كتابة الأكواد، لنكون شركاء نجاحك في رحلة التحول الرقمي بفضل خبرتنا والتزامنا بالجودة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {features.map((feature, i) => (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            key={i}
            className="bg-white border border-neutral-200/80 rounded-[1.25rem] p-8 hover:border-brand/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 group flex flex-col"
          >
            <div className="w-14 h-14 bg-neutral-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-brand/5 transition-colors duration-500 border border-neutral-100/50 group-hover:border-brand/20">
              <feature.icon className="w-7 h-7 text-brand" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-neutral-900 group-hover:text-brand transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
