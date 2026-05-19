"use client";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import {
  Globe,
  Layers,
  Terminal,
  BrainCircuit,
  Cloud,
  Smartphone,
  Workflow,
  Lightbulb,
  ShieldCheck,
  PenTool
} from "lucide-react";

const services = [
  { title: "تصميم المواقع", desc: "بناء مواقع احترافية تعزز حضورك الرقمي وتدعم التجارة الإلكترونية.", icon: Globe },
  { title: "تخصيص الأنظمة", desc: "تخصيص ودمج أنظمة Odoo و Zoho لتناسب دورة عملك بدقة.", icon: Layers },
  { title: "البرمجيات الخاصة", desc: "تطوير أنظمة CRM و ERP مخصصة لاحتياجات الشركات المتوسطة.", icon: Terminal },
  { title: "الذكاء الاصطناعي", desc: "تحليل البيانات واتخاذ قرارات ذكية باستخدام خوارزميات متقدمة.", icon: BrainCircuit },
  { title: "الخدمات السحابية", desc: "بنية تحتية سحابية آمنة وإدارة تطبيقاتك بكفاءة عالية.", icon: Cloud },
  { title: "تطبيقات الجوال", desc: "تطبيقات iOS و Android بلمسة إبداعية وأداء فائق.", icon: Smartphone },
  { title: "الأمن السيبراني", desc: "حماية أنظمتك من التهديدات وتقييم الثغرات الأمنية بانتظام.", icon: ShieldCheck },
  { title: "أتمتة العمليات", desc: "تحسين الكفاءة وتقليل التكاليف عبر أتمتة مهامك اليومية.", icon: Workflow },
  { title: "الاستشارات", desc: "مساعدتك في اختيار أفضل الحلول والتقنيات لتحدياتك.", icon: Lightbulb },
  { title: "تجربة المستخدم", desc: "تصميم واجهات جذابة وسهلة الاستخدام تضمن رضا عملائك.", icon: PenTool }
];

export function Services() {
  const [highlighted, setHighlighted] = useState<{ label: string, color: string, border: string, activeBorder?: string, activeRing?: string } | null>(null);
  const sectionRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const handleHighlight = (e: any) => {
      const { label, color, border, activeBorder, activeRing } = e.detail;
      setHighlighted({ label, color, border, activeBorder, activeRing });

      const element = document.getElementById("services");
      if (element) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

      // Clear highlight after 3 seconds
      setTimeout(() => {
        setHighlighted((prev) => prev?.label === label ? null : prev);
      }, 3000);
    };

    window.addEventListener('highlight-service', handleHighlight);
    return () => window.removeEventListener('highlight-service', handleHighlight);
  }, []);

  return (
    <section id="services" ref={sectionRef as any} className="px-6 md:px-10 pb-6 relative z-10 w-full max-w-[1200px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {services.map((service, i) => {
          const isHighlighted = highlighted?.label === service.title;
          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              key={i}
              className={`bg-white border-2 rounded-2xl p-6 transition-all duration-500 group flex flex-col ${isHighlighted
                ? `${highlighted.activeBorder} shadow-xl scale-105 z-20 relative ring-4 ring-opacity-30 ${highlighted.activeRing}`
                : "border-neutral-200 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
                }`}
            >
              <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center transition-colors border-2 ${isHighlighted
                ? `bg-white shadow-md ${highlighted.activeBorder}`
                : "bg-neutral-50 border-neutral-100 group-hover:bg-brand/10 group-hover:border-brand/20"
                }`}>
                <service.icon className={`w-6 h-6 stroke-[1.5px] ${isHighlighted ? highlighted.color : "text-brand-dark"}`} />
              </div>
              <h3 className={`text-sm font-bold mb-2 transition-colors ${isHighlighted ? highlighted.color : "text-neutral-900"}`}>
                {service.title}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
