"use client";
import { motion, AnimatePresence } from "motion/react";
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

const categories = [
  { id: "software", label: "تطوير البرمجيات" },
  { id: "ai", label: "الذكاء الاصطناعي والبيانات" },
  { id: "infra", label: "البنية التحتية والأمان" },
  { id: "consulting", label: "الاستشارات والتصميم" },
];

const services = [
  { title: "تصميم المواقع", desc: "بناء مواقع احترافية تعزز حضورك الرقمي وتدعم التجارة الإلكترونية.", icon: Globe, category: "software" },
  { title: "البرمجيات الخاصة", desc: "تطوير أنظمة CRM و ERP مخصصة لاحتياجات الشركات المتوسطة.", icon: Terminal, category: "software" },
  { title: "تطبيقات الجوال", desc: "تطبيقات iOS و Android بلمسة إبداعية وأداء فائق.", icon: Smartphone, category: "software" },
  { title: "الذكاء الاصطناعي", desc: "تحليل البيانات واتخاذ قرارات ذكية باستخدام خوارزميات متقدمة.", icon: BrainCircuit, category: "ai" },
  { title: "أتمتة العمليات", desc: "تحسين الكفاءة وتقليل التكاليف عبر أتمتة مهامك اليومية.", icon: Workflow, category: "ai" },
  { title: "الخدمات السحابية", desc: "بنية تحتية سحابية آمنة وإدارة تطبيقاتك بكفاءة عالية.", icon: Cloud, category: "infra" },
  { title: "الأمن السيبراني", desc: "حماية أنظمتك من التهديدات وتقييم الثغرات الأمنية بانتظام.", icon: ShieldCheck, category: "infra" },
  { title: "تخصيص الأنظمة", desc: "تخصيص ودمج أنظمة Odoo و Zoho لتناسب دورة عملك بدقة.", icon: Layers, category: "consulting" },
  { title: "الاستشارات", desc: "مساعدتك في اختيار أفضل الحلول والتقنيات لتحدياتك.", icon: Lightbulb, category: "consulting" },
  { title: "تجربة المستخدم", desc: "تصميم واجهات جذابة وسهلة الاستخدام تضمن رضا عملائك.", icon: PenTool, category: "consulting" }
];

export function Services() {
  const [highlighted, setHighlighted] = useState<{ label: string, color: string, border: string, activeBorder?: string, activeRing?: string } | null>(null);
  const [activeTab, setActiveTab] = useState("software");
  const sectionRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const handleHighlight = (e: any) => {
      const { label, color, border, activeBorder, activeRing } = e.detail;
      setHighlighted({ label, color, border, activeBorder, activeRing });

      // Automatically switch to the tab containing the highlighted service
      const targetService = services.find((s) => s.title === label);
      if (targetService) {
        setActiveTab(targetService.category);
      }

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

  const filteredServices = services.filter((s) => s.category === activeTab);

  return (
    <section id="services" ref={sectionRef as any} className="px-6 md:px-10 pb-20 relative z-10 w-full max-w-[1200px] mx-auto">
      {/* Tabs */}
      <div className="grid grid-cols-2 md:flex md:flex-wrap items-stretch md:items-center justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex items-center justify-center text-center w-full md:w-auto px-2 sm:px-4 md:px-6 py-3 md:py-3 rounded-xl md:rounded-full text-xs md:text-sm font-bold transition-all duration-500 ${
              activeTab === cat.id
                ? "bg-brand text-white shadow-lg shadow-brand/25 md:scale-105 scale-[1.02]"
                : "bg-white text-neutral-600 hover:bg-neutral-50 hover:text-brand border border-neutral-200/80 shadow-sm"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, i) => {
            const isHighlighted = highlighted?.label === service.title;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={service.title}
                className={`bg-white border-2 rounded-[2rem] p-8 transition-all duration-500 group flex flex-col ${isHighlighted
                  ? `${highlighted.activeBorder} shadow-2xl scale-105 z-20 relative ring-4 ring-opacity-30 ${highlighted.activeRing}`
                  : "border-neutral-200/80 hover:border-brand/30 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)] hover:-translate-y-1.5"
                  }`}
              >
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 border-2 ${isHighlighted
                  ? `bg-white shadow-md ${highlighted.activeBorder}`
                  : "bg-neutral-50 border-neutral-100 group-hover:bg-brand/10 group-hover:border-brand/20"
                  }`}>
                  <service.icon className={`w-7 h-7 stroke-[1.5px] transition-colors duration-500 ${isHighlighted ? highlighted.color : "text-brand-dark group-hover:text-brand"}`} />
                </div>
                <h3 className={`text-lg font-extrabold mb-3 transition-colors duration-500 ${isHighlighted ? highlighted.color : "text-neutral-900 group-hover:text-brand"}`}>
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-8">{service.desc}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
