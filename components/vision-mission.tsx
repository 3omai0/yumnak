"use client";
import { motion } from "motion/react";
import { Target, Eye, Fingerprint } from "lucide-react";

const principles = [
  {
    title: "رسالتنا",
    text: "تمكين الشركات الطموحة من إطلاق منتجات وأنظمة رقمية تعمل بكفاءة، تبدو راقية، وتخلق أثرًا تجاريًا ملموسًا.",
    icon: Target,
  },
  {
    title: "رؤيتنا",
    text: "أن تصبح يمناك الشريك التقني الأكثر ثقة للشركات التي تريد تحويل التقنية من تكلفة تشغيلية إلى ميزة استراتيجية.",
    icon: Eye,
  },
  {
    title: "قيمتنا الأساسية",
    text: "نوازن بين السرعة والدقة، وبين جمال الواجهة وصلابة البنية، لأن المنتج الممتاز يحتاج الاثنين معًا.",
    icon: Fingerprint,
  },
];

interface VisionMissionProps {
  title?: string;
  subtitle?: string;
  showLabel?: boolean;
}

export function VisionMission({
  title = "رؤيتنا ورسالتنا",
  subtitle = "نطمح لأن نكون القوة الدافعة للابتكار، مبنيين على قيم راسخة وتطلعات مستقبلية.",
  showLabel = false,
}: VisionMissionProps) {
  return (
    <section id="vision-mission" className="px-6 md:px-10 py-20 relative z-10 w-full max-w-[1200px] mt-10 mx-auto">
      <div className="mb-16 text-center">
        {showLabel && (
          <span className="mb-4 inline-flex rounded-full bg-brand/8 px-4 py-1.5 text-xs font-bold text-brand-dark">
            الرسالة والرؤية
          </span>
        )}
        <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight leading-tight max-w-3xl mx-auto">
          {title}
        </h2>
        <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {principles.map((item, index) => {
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white p-10 hover:border-brand/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-700 flex flex-col min-h-[340px]"
            >
              {/* Glowing concentric rings */}
              <div className={`absolute inset-0 bg-[radial-gradient(${
                index === 0 ? "circle_at_top_right" : index === 1 ? "circle_at_bottom_left" : "circle_at_top_left"
              },rgba(117,140,129,0.06),transparent_50%)] pointer-events-none z-0`} />
              <div className={`absolute w-72 h-72 rounded-full border border-brand/10 pointer-events-none z-0 ${
                index === 0 ? "-top-16 -right-16" : index === 1 ? "-bottom-16 -left-16" : "-top-16 -left-16"
              }`} />
              <div className={`absolute w-[24rem] h-[24rem] rounded-full border border-brand/[0.05] pointer-events-none z-0 ${
                index === 0 ? "-top-32 -right-32" : index === 1 ? "-bottom-32 -left-32" : "-top-32 -left-32"
              }`} />
              
              <div className="relative z-10 flex flex-col items-start h-full justify-between">
                <div>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-100/50 bg-neutral-50 text-brand transition-all duration-500 group-hover:bg-brand/10 group-hover:border-brand/20">
                    <item.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-neutral-900 group-hover:text-brand transition-colors duration-300">{item.title}</h3>
                </div>
                <p className="mt-6 text-base leading-8 text-neutral-500">{item.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
