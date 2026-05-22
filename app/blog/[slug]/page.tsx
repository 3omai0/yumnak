import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowRight, ArrowUpLeft, Edit2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { supabase } from "@/lib/supabase/client";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

export async function generateStaticParams() {
  const { data: posts } = await supabase.from('blog_posts').select('slug');
  return (posts || []).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();
  if (!post) return {};
  return {
    title: `${post.title} | يمناك للتقنية`,
    description: post.excerpt,
  };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();
  
  if (!post) notFound();

  const { data: related } = await supabase
    .from('blog_posts')
    .select('*')
    .neq('slug', slug)
    .order('created_at', { ascending: false })
    .limit(2);

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full relative">
        {/* Subtle grid background to match home page */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(117,140,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(117,140,129,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        
        {/* ── Article Hero ── */}
        <section className="relative z-10 pt-32 pb-16 px-6 md:px-10 w-full max-w-[1200px]">
          <div className="mx-auto w-full max-w-[1000px]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
              <Link href="/" className="hover:text-brand transition-colors">الرئيسية</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-brand transition-colors">المدونة</Link>
              <span>/</span>
              <span className="text-neutral-600">{post.category}</span>
            </div>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="rounded-xl bg-brand/10 px-3 py-1 text-xs font-bold text-brand">{post.category}</span>
              <span className="text-xs text-neutral-400">{format(new Date(post.created_at), 'd MMMM yyyy', { locale: ar })}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-neutral-950">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 text-lg text-neutral-500 leading-8">{post.excerpt}</p>
          </div>
        </section>

        {/* ── Cover Image ── */}
        <section className="relative z-10 px-6 md:px-10 mb-16 w-full max-w-[1200px]">
          <div className="mx-auto w-full max-w-[1000px]">
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
              {post.image_url ? (
                <Image src={post.image_url} alt={post.title} fill className="object-cover" priority />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                  <Edit2 className="w-16 h-16 text-neutral-300" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* ── Article Content ── */}
        <section className="relative z-10 px-6 md:px-10 pb-24 w-full max-w-[1200px]">
          <div className="mx-auto w-full max-w-[1000px] prose-custom">
            <div 
              className="prose prose-lg md:prose-xl max-w-none prose-headings:font-black prose-headings:text-neutral-900 prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h2:leading-tight prose-p:text-base prose-p:leading-9 prose-p:text-neutral-600 prose-a:text-brand hover:prose-a:text-brand-dark prose-img:rounded-[2rem] prose-img:shadow-lg prose-img:my-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* ── CTA Inside Article ── */}
        <section className="relative z-10 px-6 md:px-10 pb-24 w-full max-w-[1200px]">
          <div className="mx-auto w-full max-w-[1000px]">
            <div className="relative overflow-hidden rounded-[2rem] border border-brand/20 bg-brand p-8 text-white shadow-[0_30px_90px_rgba(117,140,129,0.28)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.20),transparent_38%),linear-gradient(45deg,rgba(255,255,255,0.08)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.08)_75%,transparent_75%,transparent)] bg-[size:auto,64px_64px] opacity-70 pointer-events-none" />
              <div className="relative z-10">
                <p className="text-sm font-bold text-white/60 mb-2">هل وجدت هذا مفيداً؟</p>
                <h3 className="text-xl font-extrabold mb-2">دعنا نطبق هذا على مشروعك.</h3>
                <p className="text-sm text-white/75 leading-7 mb-6">فريقنا جاهز لتقييم وضعك الحالي وتقديم توصيات مخصصة لنموذج عملك.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-extrabold text-brand shadow-xl hover:-translate-y-0.5 transition-transform duration-300"
                >
                  تحدث مع فريقنا <ArrowUpLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Posts ── */}
        {related && related.length > 0 && (
          <section className="relative z-10 border-t border-neutral-200/60 px-6 md:px-10 py-20 w-full max-w-[1200px]">
            <div className="mx-auto w-full max-w-[1000px]">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-xl font-extrabold text-neutral-900">مقالات ذات صلة</h2>
                <Link href="/blog" className="flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark transition-colors">
                  <span>كل المقالات</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((rel: any) => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group block h-full">
                    <article className="h-full flex flex-col overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-400 hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)] hover:border-brand/25 hover:-translate-y-1">
                      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-neutral-100">
                        {rel.image_url ? (
                          <Image src={rel.image_url} alt={rel.title} fill className="object-cover transition-transform duration-600 group-hover:scale-105" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Edit2 className="w-6 h-6 text-neutral-400" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
                        <span className="absolute top-4 right-4 rounded-xl bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-neutral-700 shadow-sm">
                          {rel.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-6">
                        <h3 className="text-base font-extrabold text-neutral-900 leading-snug line-clamp-2 group-hover:text-brand transition-colors duration-300">
                          {rel.title}
                        </h3>
                        <div className="mt-5 flex items-center gap-2 text-xs text-neutral-400">
                          <span className="font-medium">{format(new Date(rel.created_at), 'd MMMM yyyy', { locale: ar })}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
