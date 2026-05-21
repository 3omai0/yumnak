"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpLeft,
  BrainCircuit,
  Cloud,
  Code2,
  DatabaseZap,
  Globe,
  Layers,
  Lightbulb,
  MessageCircle,
  PenTool,
  ShieldCheck,
  Smartphone,
  Terminal,
  Workflow
} from "lucide-react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";

const detailedServices = [
  {
    category: "تطوير البرمجيات",
    description: "نبني أنظمة تقنية متينة وقابلة للتوسع لتكون العمود الفقري لعملياتك اليومية.",
    features: [
      {
        title: "البرمجيات الخاصة (Custom Software)",
        desc: "تطوير أنظمة CRM و ERP مخصصة بالكامل لتناسب دورة حياة عملك المعقدة بدون أي قيود برمجية.",
        icon: Terminal
      },
      {
        title: "المنصات وتطبيقات الويب",
        desc: "بناء منصات سحابية، ولوحات تحكم (Dashboards) سريعة الاستجابة تعتمد على أحدث تقنيات الويب الحديثة.",
        icon: Globe
      },
      {
        title: "تطبيقات الجوال (iOS & Android)",
        desc: "تطبيقات هواتف ذكية مبنية بلمسة إبداعية وأداء يضاهي التطبيقات العالمية، لضمان أعلى تفاعل من المستخدمين.",
        icon: Smartphone
      }
    ]
  },
  {
    category: "البيانات والذكاء الاصطناعي",
    description: "نحول البيانات الخام إلى قرارات استراتيجية وأنظمة قادرة على التعلم والأتمتة.",
    features: [
      {
        title: "تطوير نماذج الذكاء الاصطناعي",
        desc: "دمج قدرات تعلم الآلة (Machine Learning) لتحليل البيانات العميقة وتحسين تجربة العميل بشكل ذكي.",
        icon: BrainCircuit
      },
      {
        title: "أتمتة العمليات التشغيلية",
        desc: "ربط الأنظمة المتباينة لخلق مسارات عمل (Workflows) تعمل تلقائياً وتقلل من الهدر الزمني والمالي.",
        icon: Workflow
      },
      {
        title: "هندسة قواعد البيانات",
        desc: "تصميم وإدارة قواعد بيانات ضخمة (Big Data) تضمن استرجاع المعلومات بسرعة فائقة وبلا تعطل.",
        icon: DatabaseZap
      }
    ]
  },
  {
    category: "البنية التحتية والأمان",
    description: "نضمن استقرار منتجاتك الرقمية وحمايتها من التهديدات لتنمو بثقة وبدون توقف.",
    features: [
      {
        title: "هندسة الخدمات السحابية",
        desc: "نقل، إدارة، وتوسيع بنيتك التحتية على خوادم سحابية رائدة (AWS, GCP, Azure) لضمان توفر الخدمة 99.9%.",
        icon: Cloud
      },
      {
        title: "الأمن السيبراني والمراجعة",
        desc: "إجراء اختبارات اختراق دورية وتطبيق معايير أمان صارمة لحماية بيانات شركتك وعملائك من أي تسريب.",
        icon: ShieldCheck
      },
      {
        title: "مراقبة الأداء (DevOps)",
        desc: "أتمتة عمليات النشر المستمر (CI/CD) ومراقبة صحة الخوادم استباقياً لمنع الأعطال قبل حدوثها.",
        icon: Code2
      }
    ]
  },
  {
    category: "الاستشارات وتجربة المستخدم",
    description: "لأن البرمجة وحدها لا تكفي، نصمم تجارب مستخدم تخطف الأنظار وتسهل الاستخدام.",
    features: [
      {
        title: "تخصيص أنظمة المؤسسات",
        desc: "استشارات ودمج لحلول عالمية مثل Odoo و Zoho لتقليل التكاليف وضمان الجودة في أسرع وقت.",
        icon: Layers
      },
      {
        title: "تصميم تجربة المستخدم (UI/UX)",
        desc: "بناء واجهات رقمية فاخرة ومدروسة نفسياً لتقليل الاحتكاك ورفع نسبة التحويل (Conversion Rate).",
        icon: PenTool
      },
      {
        title: "الاستشارات المعمارية للأنظمة",
        desc: "مساعدتك كشريك تقني في اختيار أفضل التقنيات والمسارات التي تناسب نموذج عملك الحالي والمستقبلي.",
        icon: Lightbulb
      }
    ]
  }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/70 px-4 py-1.5 text-xs font-bold text-brand-dark shadow-sm backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 overflow-x-hidden">
      <Navbar />

      <main className="relative">
        <PageHero
          label="الخدمات والحلول التقنية"
          title="نحول التعقيد التقني إلى ميزة تنافسية لأعمالك."
          description="في يمناك، لا نكتفي بكتابة الأكواد. نحن نبني منتجات وأنظمة مصممة بعناية فائقة لتكون المِحرك الأساسي لنمو الشركات التي تبحث عن الموثوقية والجودة."
          imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1400"
          imageAlt="تطوير واجهات وأنظمة معمارية متقدمة"
          imageOverlay={
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-x-6 bottom-6 md:w-[450px] rounded-[2rem] border border-white/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-white/50">Engineering Standard</p>
                    <h2 className="mt-1.5 text-xl font-extrabold">بناء لا يقبل المساومة</h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-sm border border-white/10">
                    <Code2 className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-7">
                  نحن نعتمد أحدث تقنيات الويب السحابية والممارسات الهندسية العالمية، لتسليم مشاريع تتسم بالسرعة، الأمان، وقابلية التوسع منذ اليوم الأول.
                </p>
              </div>
            </>
          }
        />

        {/* Detailed Services Sections - Alternating Sticky Layout */}
        <section className="relative mx-auto w-full max-w-[1200px] px-6 py-20 md:px-10 space-y-32">
          {detailedServices.map((section, index) => (
            <div 
              key={section.category} 
              className={`grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start ${
                index % 2 !== 0 ? 'lg:grid-cols-[1.2fr_0.8fr]' : ''
              }`}
            >
              {/* Sticky Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`lg:sticky lg:top-32 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand mb-6 border border-brand/20">
                  <span className="text-xl font-black">0{index + 1}</span>
                </div>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl text-neutral-900">
                  {section.category}
                </h2>
                <p className="mt-6 text-base leading-8 text-neutral-500 max-w-md">
                  {section.description}
                </p>
              </motion.div>

              {/* Cards Grid */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                {section.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`group rounded-[2rem] border border-neutral-200/80 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:border-brand/30 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col ${
                      featureIndex === 2 && section.features.length === 3 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-brand transition-all duration-500 group-hover:border-brand/20 group-hover:bg-brand/10">
                      <feature.icon className="h-6 w-6 stroke-[1.5px]" />
                    </div>
                    <h3 className="text-xl font-extrabold text-neutral-900 mb-3 group-hover:text-brand transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-7 text-neutral-500">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Development Process / Mindset Section */}
        <section className="relative mx-auto w-full max-w-[1200px] px-6 py-20 md:px-10">
          <div className="relative overflow-hidden rounded-[3rem] border border-neutral-200 bg-white shadow-xl shadow-brand/5 p-8 md:p-16 lg:p-20">
            {/* Minimal Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <SectionLabel>معايير التنفيذ</SectionLabel>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl mt-2">
                لماذا تبدو منتجاتنا مختلفة؟
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-500">
                لأننا لا نكتفي بتلبية المتطلبات الوظيفية. كل مشروع نلمسه يخضع لعملية مراجعة صارمة لتجربة المستخدم، نظافة الكود، الأداء تحت الضغط، والتصميم البصري الاستثنائي. النتيجة هي منتج يعكس فخامة علامتك التجارية.
              </p>
              
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {['High Performance', 'Scalable Architecture', 'Pixel Perfect UI', 'Secure by Design'].map((badge) => (
                  <span key={badge} className="px-5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-sm font-bold text-neutral-600 shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto w-full max-w-[1200px] px-6 py-20 md:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand/20 bg-brand p-8 text-white shadow-[0_30px_90px_rgba(117,140,129,0.28)] md:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.20),transparent_38%),linear-gradient(45deg,rgba(255,255,255,0.08)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.08)_75%,transparent_75%,transparent)] bg-[size:auto,64px_64px] opacity-70 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                  ابدأ مشروعك
                </span>
                <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  جاهز لبناء شيء استثنائي؟
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/82">
                  سواء كنت تؤسس لشركة ناشئة أو تقود تحولاً رقمياً في مؤسستك، فريقنا التقني جاهز لتصميم وتطوير الحل الذي يستحقه طموحك.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="mailto:hello@yomnak.com?subject=طلب%20استشارة%20لمشروع%20جديد"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-extrabold text-brand shadow-xl transition-all duration-500 hover:-translate-y-1 hover:bg-neutral-50"
                >
                  <span>تواصل معنا الآن</span>
                  <MessageCircle className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-sm font-extrabold text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/15"
                >
                  <span>تعرف على ثقافتنا</span>
                  <ArrowUpLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
