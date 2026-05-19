"use client";
import { motion } from "motion/react";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "منصة تجارة إلكترونية متكاملة",
    category: "تطوير ويب",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1 md:row-span-2",
  },
  {
    title: "تطبيق توصيل طلبات",
    category: "تطبيقات الجوال",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1000",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "نظام إدارة الموارد (ERP)",
    category: "أنظمة الشركات",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "إعادة تصميم الهوية البصرية",
    category: "تصميم UI/UX",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
  }
];

export function Projects() {
  return (
    <section id="projects" className="px-6 md:px-10 py-16 relative z-10 w-full max-w-[1200px] mt-10">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3 tracking-tight">أعمالنا ومشاريعنا</h2>
        <p className="text-sm text-neutral-500 max-w-xl mx-auto">
          نفتخر بتقديم حلول تقنية مبتكرة لعملائنا. تصفح أحدث المشاريع التي قمنا بتنفيذها في مختلف القطاعات.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={i}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer ${project.colSpan} ${project.rowSpan} bg-neutral-100 border border-neutral-200/50 shadow-sm`}
          >
            {/* Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Top Right Arrow Button */}
            <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 border border-white/30">
              <ArrowUpLeft className="w-5 h-5 text-white" />
            </div>

            {/* Content Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col justify-end">
              <span className="text-[11px] font-semibold tracking-wider text-white/80 mb-2 block px-2.5 py-1 bg-white/20 backdrop-blur-sm w-fit rounded-lg border border-white/20">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white leading-tight">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
