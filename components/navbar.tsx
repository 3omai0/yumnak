"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpLeft } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "الخدمات", href: "/services" },
  { label: "المشاريع", href: "/projects" },
  { label: "المدونة", href: "/blog" },
  { label: "المنهجية", href: "/#process" },
  { label: "عن الشركة", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuVars = {
    initial: { x: "-100%" },
    animate: { x: 0, transition: { type: "spring", damping: 25, stiffness: 200 } },
    exit: { x: "-100%", transition: { type: "spring", damping: 25, stiffness: 200 } },
  };

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
    exit: { opacity: 0 },
  };

  const linkVars = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, x: -10, transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-md flex justify-center"
      >
        <div className="w-full max-w-[1200px] flex items-center justify-between px-6 py-4 md:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-[60]">
            <Image src="/logo.png" alt="Yomnak Logo" width={150} height={48} className="h-10 md:h-12 w-auto object-contain" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-bold text-neutral-600">
            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="px-6 py-2.5 bg-brand text-white text-sm font-bold rounded-full hover:bg-brand-dark transition-colors shadow-[0_4px_15px_rgba(117,140,129,0.3)] hover:shadow-[0_6px_20px_rgba(117,140,129,0.4)] hover:-translate-y-0.5 inline-flex items-center gap-2 duration-300">
              ابدأ مشروعك
              <ArrowUpLeft className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[60] flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 transition-colors hover:bg-neutral-200"
            aria-label="Toggle Menu"
          >
            <motion.div animate={isOpen ? "open" : "closed"} className="relative h-5 w-5 flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-neutral-900/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col px-8 pb-10 md:hidden border-r border-neutral-100"
            >
              {/* Close Button Inside Drawer */}
              <div className="flex justify-end pt-6 mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 transition-colors hover:bg-neutral-200"
                  aria-label="Close Menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col gap-6"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.label} variants={linkVars}>
                    <Link
                      href={link.href}
                      className={`text-2xl font-black tracking-tight transition-colors ${
                        pathname === link.href ? "text-brand" : "text-neutral-900 hover:text-brand"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Menu Footer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-auto pt-8 border-t border-neutral-100"
              >
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">جاهز للبدء؟</p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-brand px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-brand/20 transition-all hover:bg-brand-dark hover:shadow-brand/30"
                >
                  ابدأ مشروعك الآن
                  <ArrowUpLeft className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
