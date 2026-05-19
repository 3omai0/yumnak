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
    <section id="sectors" className="px-6 md:px-10 py-16 relative z-10 w-full max-w-[1200px] mt-10">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3 tracking-tight">القطاعات التي نخدمها</h2>
        <p className="text-sm text-neutral-500 max-w-xl mx-auto">
          نقدم خدماتنا للعديد من القطاعات المختلفة، مستخدمين أحدث التقنيات المتكاملة لتلبية احتياجاتكم بجودة وكفاءة.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {sectors.map((sector, i) => (
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-10px" }}
             transition={{ duration: 0.4, delay: i * 0.05 }}
             key={i}
             className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all group flex flex-col items-center text-center"
           >
              <div className="w-14 h-14 bg-neutral-50 rounded-2xl mb-4 flex items-center justify-center group-hover:bg-brand group-hover:text-white text-brand-dark transition-colors duration-300 border border-neutral-100 group-hover:border-brand">
                  <sector.icon className="w-7 h-7 stroke-[1.5px]" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 group-hover:text-brand transition-colors">
                {sector.title}
              </h3>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
