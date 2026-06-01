"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Globe,
  Instagram,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  PenTool,
  Phone,
  ShieldCheck,
  Smartphone,
  Terminal,
  Twitter,
  Workflow,
  Facebook,
  Youtube,
  Ghost,
  Music2
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const contactChannels = [
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "info@yomnak.com",
    href: "mailto:info@yomnak.com",
    sub: "نرد خلال 24 ساعة عمل",
  },
  {
    icon: Phone,
    label: "رقم الجوال",
    value: "+966 50 000 0000",
    href: "tel:+966500000000",
    sub: "الأحد – الخميس، 9ص – 5م",
  },
  {
    icon: MapPin,
    label: "موقعنا",
    value: "السعودية، المدينة المنورة",
    href: "#",
    sub: "حي القصواء",
  },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com/Yomnak_IT" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/yomnak_it" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/yomnak" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/it.yomnak" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@YOMNAK_IT" },
  { icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@yomnak_it" },
  { icon: Ghost, label: "Snapchat", href: "https://www.snapchat.com/add/yomnak_it" },
];

const allServices = [
  { label: "تصميم المواقع", icon: Globe },
  { label: "البرمجيات الخاصة", icon: Terminal },
  { label: "تطبيقات الجوال", icon: Smartphone },
  { label: "الذكاء الاصطناعي", icon: BrainCircuit },
  { label: "أتمتة العمليات", icon: Workflow },
  { label: "الخدمات السحابية", icon: Cloud },
  { label: "الأمن السيبراني", icon: ShieldCheck },
  { label: "تخصيص الأنظمة", icon: Layers },
  { label: "الاستشارات", icon: Lightbulb },
  { label: "تجربة المستخدم", icon: PenTool },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 flex flex-col font-sans">
      <Navbar />

      {/* ─── Hero Strip ─── */}
      <section className="pt-36 pb-20 px-6 md:px-10 text-center relative overflow-hidden">
        {/* soft radial glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(117,140,129,0.10),transparent)]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-4 py-1.5 text-xs font-bold text-brand-dark shadow-sm backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            نحن هنا، لنسمعك أولاً
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] text-neutral-950 mt-4">
            كل مشروع عظيم<br />
            <span className="text-brand">بدأ بمحادثة</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-500 md:text-xl max-w-xl mx-auto">
            سواء كانت لديك فكرة مبدئية أو كراسة متطلبات كاملة، فريقنا التقني جاهز للاستماع والتقييم.
          </p>
        </motion.div>
      </section>

      {/* ─── Main Content ─── */}
      <main className="flex-1 mx-auto w-full max-w-[1200px] px-6 md:px-10 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 lg:gap-20 items-start">

        {/* ── Left Column ── */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 lg:sticky lg:top-32"
        >
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactChannels.map((ch, i) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-5 rounded-[1.75rem] border border-neutral-200/80 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:border-brand/30 hover:shadow-[0_12px_40px_rgba(15,23,42,0.07)] transition-all duration-400 hover:-translate-y-0.5"
              >
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-brand transition-all duration-400 group-hover:bg-brand group-hover:text-white group-hover:border-brand group-hover:shadow-md">
                  <ch.icon className="h-5 w-5 stroke-[1.6px]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-0.5">{ch.label}</p>
                  <p className="text-lg font-bold text-neutral-900 group-hover:text-brand transition-colors truncate">{ch.value}</p>
                  <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{ch.sub}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-neutral-200/60" />

          {/* Social */}
          <div>
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">تابعنا على</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-500 hover:border-brand/30 hover:bg-brand hover:text-white transition-all duration-400 shadow-sm"
                >
                  <s.icon className="h-4 w-4 stroke-[1.6px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Trust Badge */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-brand/20 bg-brand p-7 text-white shadow-[0_30px_90px_rgba(117,140,129,0.28)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.20),transparent_38%),linear-gradient(45deg,rgba(255,255,255,0.08)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.08)_75%,transparent_75%,transparent)] bg-[size:auto,64px_64px] opacity-70 pointer-events-none" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white border border-white/20">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-bold text-white">استشارة مبدئية مجانية</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  مكالمتنا الأولى ليست للبيع، بل لفهم تحديك بعمق وتقديم التوصية الصحيحة.
                </p>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* ── Right Column: Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <form className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200/80 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.06)] p-8 sm:p-12 space-y-10">
            {/* subtle glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />

            <div className="relative z-10 space-y-10">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Field label="الاسم الكريم" required>
                  <input type="text" placeholder="عبدالله محمد" className={inputCls} />
                </Field>
                <Field label="الشركة / الجهة">
                  <input type="text" placeholder="شركة التقنية" className={inputCls} />
                </Field>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Field label="البريد الإلكتروني" required>
                  <input type="email" placeholder="name@company.com" dir="ltr" className={inputCls + " text-left"} />
                </Field>
                <Field label="رقم الجوال" required>
                  <input type="tel" placeholder="+966 5X XXX XXXX" dir="ltr" className={inputCls + " text-left"} />
                </Field>
              </div>

              {/* Project Type - All Services */}
              <Field label="الخدمة أو الخدمات المطلوبة">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-1">
                  {allServices.map(({ label, icon: Icon }) => (
                    <label
                      key={label}
                      className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-neutral-200/80 bg-neutral-50 px-4 py-3.5 text-sm font-bold text-neutral-700 transition-all duration-300 hover:border-brand/40 hover:bg-brand/5 hover:text-brand has-[:checked]:border-brand has-[:checked]:bg-brand/8 has-[:checked]:text-brand has-[:checked]:shadow-sm"
                    >
                      <input type="checkbox" className="sr-only" />
                      <Icon className="h-4 w-4 flex-shrink-0 stroke-[1.5px] text-brand/60 group-hover:text-brand transition-colors" />
                      {label}
                    </label>
                  ))}
                </div>
              </Field>

              {/* Message */}
              <Field label="تفاصيل المشروع أو التحدي" required>
                <textarea
                  rows={5}
                  placeholder="أخبرنا عن المشكلة التي تحاول حلها، البيئة الحالية، وما تتوقعه من الحل المثالي..."
                  className={inputCls + " py-4 h-auto resize-none"}
                ></textarea>
              </Field>

              {/* Footer Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-neutral-500">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand" />
                  <span className="font-medium">بياناتك محمية ولن تُشارك مع أي طرف ثالث.</span>
                </div>

                <button
                  type="button"
                  className="group relative inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-brand px-10 py-4 text-base font-bold text-white shadow-lg shadow-brand/20 transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-brand/30"
                >
                  {/* sheen effect */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">إرسال الطلب</span>
                  <ArrowLeft className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </button>
              </div>

            </div>
          </form>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const inputCls =
  "w-full h-14 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 text-base font-medium text-neutral-900 placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2.5">
      <label className="block text-sm font-bold text-neutral-600">
        {label}
        {required && <span className="mr-1 text-brand">*</span>}
      </label>
      {children}
    </div>
  );
}
