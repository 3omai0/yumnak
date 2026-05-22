"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpLeft, Edit2 } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

export function BlogSection() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('blog_posts')
        .select('slug, title, excerpt, image_url, category, created_at')
        .order('created_at', { ascending: false })
        .limit(3);
      if (data) setPosts(data);
    }
    load();
  }, []);

  if (posts.length === 0) return null;

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section className="relative w-full max-w-[1200px] px-6 py-20 md:px-10">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-12 gap-6">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/70 px-4 py-1.5 text-xs font-bold text-brand-dark shadow-sm backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            المدونة والمقالات
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-950 md:text-5xl leading-tight">
            أفكار نشاركها
            <br />
            <span className="text-brand">لتنمو أعمالك.</span>
          </h2>
        </div>
        <Link
          href="/blog"
          className="group hidden sm:inline-flex shrink-0 items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-6 py-3 text-sm font-bold text-neutral-700 shadow-sm transition-all duration-300 hover:border-brand/30 hover:text-brand hover:-translate-y-0.5"
        >
          <span>جميع المقالات</span>
          <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
        </Link>
      </div>

      {/* Grid: Featured + Two Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">

        {/* Featured Post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href={`/blog/${featured.slug}`} className="group block h-full">
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-[0_20px_60px_rgba(15,23,42,0.07)] border border-neutral-200/60 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)] hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                {featured.image_url ? (
                  <Image
                    src={featured.image_url}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                    <Edit2 className="w-12 h-12 text-neutral-300" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                <span className="absolute top-4 right-4 rounded-xl bg-brand px-3 py-1 text-[11px] font-bold text-white shadow">
                  {featured.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-extrabold text-neutral-900 leading-tight group-hover:text-brand transition-colors duration-300">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm text-neutral-500 leading-7 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span>{format(new Date(featured.created_at), 'd MMMM yyyy', { locale: ar })}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand group-hover:gap-2.5 transition-all">
                    اقرأ المقال
                    <ArrowUpLeft className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.article>

        {/* Two Smaller Cards */}
        <div className="flex flex-col gap-6">
          {rest.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1"
            >
              <Link href={`/blog/${post.slug}`} className="group flex h-full overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-400 hover:border-brand/25 hover:shadow-[0_16px_50px_rgba(15,23,42,0.07)] hover:-translate-y-0.5">
                {/* Thumbnail (Full Height Side) */}
                <div className="relative h-full w-[140px] sm:w-[180px] shrink-0 overflow-hidden bg-neutral-100 border-l border-neutral-100/50">
                  {post.image_url ? (
                    <Image
                      src={post.image_url}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Edit2 className="w-6 h-6 text-neutral-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/10 to-transparent pointer-events-none" />
                </div>
                {/* Text Content */}
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-7 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand/80 mb-2">{post.category}</span>
                  <h3 className="text-base font-extrabold text-neutral-900 leading-[1.4] line-clamp-2 group-hover:text-brand transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-neutral-400">
                    <span className="font-medium">{format(new Date(post.created_at), 'd MMMM yyyy', { locale: ar })}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 flex sm:hidden">
        <Link href="/blog" className="w-full text-center rounded-2xl border border-neutral-200 bg-white px-6 py-3 text-sm font-bold text-neutral-700 shadow-sm">
          جميع المقالات
        </Link>
      </div>
    </section>
  );
}

