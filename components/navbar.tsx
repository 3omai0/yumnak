"use client";
import { motion } from "motion/react";
import Link from "next/link";

import Image from "next/image";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md flex justify-center"
    >
      <div className="w-full max-w-[1200px] flex items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Yomnak Logo" width={150} height={48} className="h-12 w-auto object-contain" priority />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
          <Link href="#services" className="hover:text-brand transition-colors">الخدمات</Link>
          <Link href="#projects" className="hover:text-brand transition-colors">المشاريع</Link>
          <Link href="#methodology" className="hover:text-brand transition-colors">المنهجية</Link>
          <Link href="#about" className="hover:text-brand transition-colors">عن الشركة</Link>
        </nav>

        <button className="px-5 py-2 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand-dark transition-colors shadow-sm">
          ابدأ مشروعك
        </button>
      </div>
    </motion.header>
  );
}
