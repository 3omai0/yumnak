"use client";
import { motion } from "motion/react";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  description: string;
  label?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  imageOverlay?: React.ReactNode;
}

export function PageHero({
  title,
  description,
  label,
  imageSrc,
  imageAlt,
  children,
  imageOverlay,
}: PageHeroProps) {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex flex-col items-center">
      {/* Background styling for all subpages - Unified clean look */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[linear-gradient(180deg,rgba(173,192,181,0.15),rgba(250,250,250,0)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(117,140,129,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(117,140,129,0.06)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)]" />

      <div className="relative z-10 w-full max-w-[1200px] px-6 md:px-10 flex flex-col items-center text-center">
        {label && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-extrabold text-brand-dark backdrop-blur-md"
          >
            {label}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-4xl font-extrabold leading-[1.2] tracking-tight text-neutral-950 md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500 md:text-xl"
        >
          {description}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex justify-center w-full"
          >
            {children}
          </motion.div>
        )}
      </div>

      {imageSrc && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mt-16 w-full max-w-[1200px] px-6 md:px-10"
        >
          <div className="relative aspect-[16/9] md:aspect-[2.5/1] w-full overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-neutral-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] group">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              priority
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {imageOverlay}
            {/* Soft inner glow/shadow */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem] pointer-events-none" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
