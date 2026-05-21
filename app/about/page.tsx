"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  BadgeCheck,
  BrainCircuit,
  CloudCog,
  Code2,
  DatabaseZap,
  Eye,
  Fingerprint,
  Github,
  Handshake,
  Instagram,
  Layers,
  Lightbulb,
  LineChart,
  Linkedin,
  MessageCircle,
  Quote,
  Rocket,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";
import { VisionMission } from "@/components/vision-mission";



const differentiators = [
  {
    title: "استراتيجية قبل التنفيذ",
    text: "نبدأ من أهداف النمو، مؤشرات الأداء، ورحلة المستخدم قبل اختيار التقنية أو شكل الواجهة.",
    icon: LineChart,
  },
  {
    title: "تصميم يبيع ويطمئن",
    text: "واجهات عربية فاخرة، سهلة القراءة، ومتقنة التفاصيل لتدعم الثقة والقرار داخل المنتج.",
    icon: Layers,
  },
  {
    title: "هندسة قابلة للتوسع",
    text: "نبني بنية تقنية تسمح بالنمو، الربط، والتحسين المستمر دون إعادة بناء مكلفة.",
    icon: CloudCog,
  },
  {
    title: "تكاملات تشغيلية دقيقة",
    text: "نربط أنظمة CRM وERP والدفع والتحليلات لتصبح بياناتك قابلة للتشغيل لا مجرد تقارير.",
    icon: DatabaseZap,
  },
  {
    title: "أمان وموثوقية",
    text: "نطبّق معايير مراجعة، صلاحيات، مراقبة، واختبارات تقلل المخاطر قبل وبعد الإطلاق.",
    icon: ShieldCheck,
  },
  {
    title: "شراكة بعد التسليم",
    text: "نقيس، نحسن، ونطوّر خارطة المنتج بناءً على الاستخدام الحقيقي والفرص التجارية الجديدة.",
    icon: Handshake,
  },
];

const workflow = [
  {
    title: "نقرأ الواقع",
    text: "ورش اكتشاف، تحليل عمليات، وتحديد نقاط الاحتكاك التي تمنع الفريق من التحرك بسرعة.",
    icon: Lightbulb,
  },
  {
    title: "نصمم النظام",
    text: "نحوّل الأفكار إلى خرائط تجربة، نماذج تفاعلية، ومعمارية واضحة قبل بدء التطوير.",
    icon: Workflow,
  },
  {
    title: "نبني بإيقاع سريع",
    text: "سبرنتات قصيرة، مراجعات شفافة، ونسخ قابلة للاختبار تعطيك رؤية مستمرة لما يتشكل.",
    icon: Code2,
  },
  {
    title: "نطلق ونقيس",
    text: "إطلاق محسوب، مراقبة أداء، وتحسينات متتابعة لضمان أن المنتج يعمل في السوق لا في العرض فقط.",
    icon: Rocket,
  },
];



function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/70 px-4 py-1.5 text-xs font-bold text-brand-dark shadow-sm backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900">
      <Navbar />

      <main className="relative">
        <PageHero
          label="عن يمناك للتقنية"
          title="نبني منتجات رقمية تجعل الشركات تتحرك بثقة في عالم سريع."
          description="يمناك شركة تقنية سعودية تصمم وتطوّر منصات، أنظمة تشغيلية، وتجارب رقمية عالية الجودة للشركات التي تريد نموًا قابلًا للقياس، لا مجرد حضور رقمي."
          imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400"
          imageAlt="بيئة عمل احترافية حديثة"
          imageOverlay={
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-x-6 bottom-6 md:w-[400px] rounded-[2rem] border border-white/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-white/50">Product Operating System</p>
                    <h2 className="mt-1.5 text-xl font-extrabold">استراتيجية، تصميم، هندسة، نمو</h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                    <BrainCircuit className="h-6 w-6" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Discovery", "Design", "Build"].map((item, index) => (
                    <div key={item} className="rounded-[1.25rem] border border-white/5 bg-white/5 p-4 transition-colors duration-300 hover:bg-white/10">
                      <p className="text-[10px] font-bold text-white/40">0{index + 1}</p>
                      <p className="mt-2 text-sm font-extrabold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          }
        >
          <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
            <Link
              href="mailto:hello@yomnak.com?subject=استشارة%20تقنية%20لمشروع%20جديد"
              className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand text-white font-bold text-sm hover:bg-brand-dark transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-brand/20 hover:shadow-brand/30 hover:-translate-y-1"
            >
              <span>ابدأ محادثة استراتيجية</span>
              <ArrowLeft className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1" />
            </Link>

            <Link
              href="/#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-neutral-800 font-bold text-sm hover:bg-neutral-50 hover:text-brand transition-all duration-500 border border-neutral-200 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              شاهد طريقة تفكيرنا
            </Link>
          </div>
        </PageHero>



        <VisionMission 
          title="نعمل بعقلية المنتج لا عقلية التسليم فقط." 
          subtitle="تمكين وتميز في رحلتك الرقمية عبر حلول تجمع الابتكار والدقة والسرعة." 
          showLabel={true} 
        />



        <section className="relative mx-auto w-full max-w-[1200px] px-6 py-20 md:px-10">
          <div className="mb-14 text-center">
            <SectionLabel>لماذا نحن؟</SectionLabel>
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              لأن المنتج الجميل وحده لا يكفي، والبرمجية القوية وحدها لا تُباع.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-[2rem] border border-neutral-200/80 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_50px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-100/50 bg-neutral-50 text-brand transition-all duration-500 group-hover:border-brand/20 group-hover:bg-brand group-hover:text-white">
                  <item.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-extrabold text-neutral-900 group-hover:text-brand transition-colors duration-300">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-500">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-[1200px] px-6 py-20 md:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start relative">
            <div className="relative lg:sticky lg:top-32 min-h-[520px] overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400"
                alt="ورشة عمل لفريق تقني"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6 rounded-[1.5rem] border border-white/15 bg-white/12 p-5 text-white backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">غرفة عمل واحدة</p>
                    <p className="mt-1 text-xs text-white/60">فريق المنتج، التصميم، والهندسة يعملون على نفس السياق.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionLabel>الثقافة وطريقة العمل</SectionLabel>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                نخلق وضوحًا قبل أن نخلق واجهات.
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-500">
                ثقافتنا مبنية على الشفافية، التجريب السريع، واحترام التفاصيل. كل قرار في التصميم أو الكود يجب أن يخدم المستخدم، يقلل التعقيد، أو يرفع قيمة العمل.
              </p>

              <div className="mt-9 space-y-4">
                {workflow.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex gap-5 rounded-[1.75rem] border border-neutral-200/80 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/8 text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-neutral-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-neutral-500">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>



        <section className="relative mx-auto w-full max-w-[1200px] px-6 py-20 md:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-brand/20 bg-brand p-8 text-white shadow-[0_30px_90px_rgba(117,140,129,0.28)] md:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.20),transparent_38%),linear-gradient(45deg,rgba(255,255,255,0.08)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.08)_75%,transparent_75%,transparent)] bg-[size:auto,64px_64px] opacity-70" />
            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                  الخطوة القادمة
                </span>
                <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  لديك فكرة، نظام متعب، أو تجربة تحتاج أن تصبح أرقى؟ لنبنِ النسخة التي يستحقها عملك.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/82">
                  احجز جلسة اكتشاف قصيرة، نراجع فيها أهدافك الحالية، ونقترح خارطة طريق عملية لأول 30 يومًا.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="mailto:hello@yomnak.com?subject=جلسة%20اكتشاف%20لمشروع%20رقمي"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-extrabold text-brand shadow-xl transition-all duration-500 hover:-translate-y-1 hover:bg-neutral-50"
                >
                  <span>احجز جلسة اكتشاف</span>
                  <MessageCircle className="h-4 w-4" />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-sm font-extrabold text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/15"
                >
                  <span>استكشف الخدمات</span>
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
