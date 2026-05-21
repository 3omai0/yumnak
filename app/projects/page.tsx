"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpLeft,
  ArrowUpRight,
  Code2,
  Database,
  Globe,
  Layout,
  MessageCircle,
  Smartphone,
  Zap
} from "lucide-react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";

const projects = [
  {
    id: "fintech-dashboard",
    title: "منصة تحليل المحافظ الاستثمارية",
    client: "شركة تقنية مالية (FinTech)",
    category: "الذكاء الاصطناعي وتحليل البيانات",
    description: "بناء منصة سحابية تتيح للمستثمرين إدارة محافظهم وتحليل الأداء باستخدام نماذج تعلّم الآلة لتوقع المخاطر المالية. واجهة المستخدم صُممت لتعرض بيانات معقدة بشكل نظيف ومفهوم لاتخاذ قرارات أسرع.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    stats: [
      { label: "دقة التوقعات", value: "94%" },
      { label: "وقت الاستجابة", value: "<200ms" }
    ],
    tags: ["React", "Python", "TensorFlow", "AWS"],
    color: "bg-blue-500"
  },
  {
    id: "logistics-erp",
    title: "أتمتة العمليات اللوجستية",
    client: "مؤسسة شحن وإمداد",
    category: "أنظمة المؤسسات (ERP)",
    description: "تخصيص شامل لنظام إدارة الموارد لتتبع الشحنات أوتوماتيكياً، أتمتة الفواتير، وربط مستودعات متعددة في شاشة واحدة، مما ألغى الحاجة للإدخال اليدوي وأوقف الهدر التشغيلي.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    stats: [
      { label: "تقليل الأخطاء", value: "85%" },
      { label: "تسريع العمليات", value: "3x" }
    ],
    tags: ["Odoo", "PostgreSQL", "API Integration"],
    color: "bg-orange-500"
  },
  {
    id: "healthtech-app",
    title: "تطبيق رعاية طبية متكامل",
    client: "مجمع عيادات طبية",
    category: "تطبيقات الجوال (Mobile)",
    description: "تصميم وتطوير تطبيق جوال يتيح حجز المواعيد، الاستشارات عن بعد (Telehealth)، والوصول السريع للسجلات الطبية. ركزنا في تجربة المستخدم على البساطة المطلقة لتناسب كبار السن.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
    stats: [
      { label: "مستخدم نشط", value: "+50K" },
      { label: "تقييم المتجر", value: "4.8" }
    ],
    tags: ["Flutter", "Node.js", "WebRTC", "Figma"],
    color: "bg-emerald-500"
  },
  {
    id: "b2b-ecommerce",
    title: "منصة تجارة جملة فائقة السرعة",
    client: "مورد تجزئة رئيسي",
    category: "التجارة الإلكترونية (E-Commerce)",
    description: "استبدال منصة قديمة بطيئة بنظام Headless Commerce حديث ومصمم خصيصاً لتحمل ضغط الطلبات العالية وتسهيل عمليات الشراء للشركات بتجربة تسوق لا تختلف عن أفضل منصات التجزئة.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    stats: [
      { label: "زيادة التحويل", value: "42%" },
      { label: "سرعة التحميل", value: "1.2s" }
    ],
    tags: ["Next.js", "Stripe", "Sanity CMS", "Tailwind"],
    color: "bg-brand"
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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 overflow-x-hidden">
      <Navbar />

      <main className="relative">
        <PageHero
          label="المشاريع وقصص النجاح"
          title="منتجات رقمية لا تُرى فقط، بل تصنع الأثر."
          description="نستعرض هنا نخبة من أعمالنا التي شاركنا في تصميمها وهندستها. من أتمتة العمليات المعقدة إلى بناء منصات مالية متقدمة، كل مشروع هو قصة شراكة نعتز بها."
          imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400"
          imageAlt="تخطيط استراتيجي لمشاريع تقنية"
          imageOverlay={
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-90 pointer-events-none" />
              <div className="absolute inset-x-6 bottom-6 md:w-[420px] rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white shadow-2xl backdrop-blur-2xl">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-white/50">Showcase</p>
                    <h2 className="mt-1.5 text-xl font-extrabold">النتائج لغة الأرقام</h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-sm border border-white/10">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-7">
                  لا نقيس نجاح مشاريعنا بجمال الكود فقط، بل بسرعة الأداء، زيادة الأرباح، تقليل الهدر الزمني، ورضا المستخدم النهائي.
                </p>
              </div>
            </>
          }
        />

        {/* Projects Showcase Layout */}
        <section className="relative mx-auto w-full max-w-[1200px] px-6 py-24 md:px-10 space-y-32 md:space-y-40">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col gap-10 lg:gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[55%] relative"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-[0_20px_60px_rgba(15,23,42,0.08)] group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-900/10 transition-opacity duration-500 group-hover:bg-transparent" />
                  
                  {/* Floating Tags inside image */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 z-10 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-xs font-bold text-neutral-900 shadow-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[45%] flex flex-col justify-center"
              >
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  {project.category}
                </span>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 leading-tight">
                  {project.title}
                </h2>
                
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm font-medium text-neutral-500">العميل:</span>
                  <span className="px-3 py-1 bg-neutral-100 rounded-lg text-xs font-bold text-neutral-700">
                    {project.client}
                  </span>
                </div>

                <p className="mt-8 text-base md:text-lg leading-8 text-neutral-600">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="p-5 rounded-[1.5rem] border border-neutral-200/80 bg-white shadow-sm">
                      <p className="text-2xl font-black text-brand mb-1">{stat.value}</p>
                      <p className="text-xs font-bold text-neutral-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href={`/contact?subject=مهتم بمشروع مشابه لـ ${project.title}`}
                    className="group inline-flex items-center gap-2 text-sm font-extrabold text-brand hover:text-brand-dark transition-colors"
                  >
                    <span>طلب استشارة لمشروع مشابه</span>
                    <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </section>

        {/* Clients/Partners Banner (Minimal) */}
        <section className="border-y border-neutral-200/60 bg-white py-16 mt-10">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10 text-center">
            <p className="text-sm font-bold text-neutral-400 mb-8 uppercase tracking-widest">نفتخر بالشراكة مع نخبة من القطاعات</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              {['SaaS', 'FinTech', 'E-Commerce', 'Healthcare', 'Logistics', 'GovTech'].map((partner) => (
                <div key={partner} className="text-lg font-black text-neutral-800">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto w-full max-w-[1200px] px-6 py-20 md:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-neutral-800 bg-neutral-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.20)] md:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_38%),linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.02)_75%,transparent_75%,transparent)] bg-[size:auto,64px_64px] opacity-75 pointer-events-none z-0" />
            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-bold text-brand-light">
                  المشروع القادم
                </span>
                <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  هل مشروعك هو قصة النجاح القادمة؟
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                  نحن لا نقبل كل المشاريع، بل نبحث عن التحديات التي تتطلب هندسة وتصميم بمستوى استثنائي. إذا كنت تبحث عن شريك وليس مجرد منفذ، فلنتحدث.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="mailto:hello@yomnak.com?subject=طلب%20اكتشاف%20مشروع%20جديد"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-brand px-8 py-4 text-sm font-extrabold text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:bg-brand-dark"
                >
                  <span>لنتحدث عن مشروعك</span>
                  <MessageCircle className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-extrabold text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/10"
                >
                  <span>تصفح الخدمات</span>
                  <Layout className="h-4 w-4" />
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
