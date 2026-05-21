"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  // Click to jump to position
  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section id="before-after" className="px-6 md:px-10 py-16 relative z-10 w-full max-w-[1200px] mt-10">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3 tracking-tight">من الفكرة إلى الواقع</h2>
        <p className="text-sm text-neutral-500 max-w-xl mx-auto">
          اسحب الخط لترى كيف نحوّل المخططات الأولية (Wireframes) إلى منصات وتطبيقات احترافية تفاعلية.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.6 }}
        className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize border border-neutral-200 shadow-xl shadow-brand/5 group bg-neutral-100"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onClick={handleClick}
      >
        {/* "Before" Image (Bottom layer) - Wireframe / Skeleton */}
        <Image
          src="/befor.png"
          alt="مرحلة التخطيط"
          fill
          className="object-cover select-none pointer-events-none"
          draggable={false}
          priority
        />



        {/* "After" Image (Top layer clipped) - Final UI */}
        <div
          className="absolute inset-0 z-10 select-none pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <Image
            src="/after.jpg"
            alt="المنتج النهائي"
            fill
            className="object-cover"
            draggable={false}
            priority
          />

        </div>

        {/* Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-20 pointer-events-none transition-transform"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-brand text-brand group-hover:scale-110 transition-transform duration-300">
            <MoveHorizontal className="w-6 h-6" strokeWidth={2} />
          </div>
        </div>



      </motion.div>
    </section>
  );
}
