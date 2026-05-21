"use client";
import { motion } from "motion/react";
import {
  ShoppingCart,
  GraduationCap,
  Landmark,
  Building2,
  Truck,
  Zap,
  Film,
  Building,
  Plane,
  HeartPulse
} from "lucide-react";

const sectors = [
  { title: "التجارة الإلكترونية", icon: ShoppingCart },
  { title: "التعليم والتدريب", icon: GraduationCap },
  { title: "الخدمات المالية", icon: Landmark },
  { title: "القطاع الحكومي", icon: Building2 },
  { title: "الرعاية الصحية", icon: HeartPulse },
  { title: "الخدمات اللوجستية", icon: Truck },
  { title: "الطاقة والمرافق", icon: Zap },
  { title: "الترفيه والإعلام", icon: Film },
  { title: "العقارات والإنشاءات", icon: Building },
  { title: "الضيافة والسياحة", icon: Plane }
];

export function Sectors() {
  return (
    <section id="sectors" className="px-6 md:px-10 py-20 relative z-10 w-full max-w-[1200px] mt-10">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight">القطاعات التي نخدمها</h2>
        <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          نقدم خدماتنا للعديد من القطاعات المختلفة، مستخدمين أحدث التقنيات المتكاملة لتلبية احتياجاتكم بجودة وكفاءة عالية.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {sectors.map((sector, i) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            key={i}
            className="bg-white border border-neutral-200/80 rounded-[1.25rem] p-6 hover:border-brand/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-neutral-50 rounded-2xl mb-5 flex items-center justify-center group-hover:bg-brand group-hover:text-white text-brand transition-colors duration-500 border border-neutral-100/50 group-hover:border-brand group-hover:shadow-md group-hover:shadow-brand/20">
              <sector.icon className="w-7 h-7 stroke-[1.5px]" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 group-hover:text-brand transition-colors duration-300">
              {sector.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
