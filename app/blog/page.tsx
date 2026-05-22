import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowUpLeft, Edit2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { supabase } from "@/lib/supabase/client";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

export const metadata = {
  title: "المدونة | يمناك للتقنية",
  description: "أفكار، دروس، وتجارب عملية من فريق يمناك التقني حول الذكاء الاصطناعي، تجربة المستخدم، والبنية التحتية السحابية."
};

export const revalidate = 60;

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  const blogPosts = posts || [];
  const featured = blogPosts.length > 0 ? blogPosts[0] : null;

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full relative">
        {/* Subtle grid background to match home page */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(117,140,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(117,140,129,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <PageHero
          label="المدونة والمقالات"
          title="نكتب لأن الفهم العميق يصنع الفرق."
          description="مقالات مكتوبة بعناية من فريقنا التقني، تناقش التحديات الحقيقية في بناء المنتجات الرقمية، وتقدم أفكاراً قابلة للتطبيق مباشرة في عملك."
          imageSrc="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1400"
          imageAlt="كتابة وأفكار تقنية"
          imageOverlay={
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-x-6 bottom-6 md:w-[400px] rounded-[2rem] border border-white/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-wider font-bold text-white/50 mb-2">Yomnak Blog</p>
                <p className="text-lg font-extrabold">أفكار، دروس، وتجارب</p>
                <p className="mt-2 text-sm text-white/70 leading-6">نشارك ما تعلمناه من بناء عشرات المنتجات الرقمية.</p>
              </div>
            </>
          }
        />

        {/* Posts Grid */}
        <section className="relative z-10 w-full max-w-[1200px] px-6 md:px-10 py-20 space-y-24">

          {/* Featured */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center overflow-hidden rounded-[2.5rem] border border-neutral-200/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] p-6 md:p-0 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(15,23,42,0.09)] hover:-translate-y-1">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[420px] overflow-hidden rounded-[2rem] lg:rounded-none lg:rounded-r-[2.5rem]">
                  {featured.image_url ? (
                    <Image src={featured.image_url} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                      <Edit2 className="w-16 h-16 text-neutral-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent" />
                  <span className="absolute top-5 right-5 rounded-xl bg-brand px-3 py-1 text-[11px] font-bold text-white">
                    {featured.category}
                  </span>
                </div>
                <div className="p-2 lg:p-12">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand/70">مقال مميز</span>
                  <h2 className="mt-3 text-2xl font-extrabold text-neutral-900 leading-tight group-hover:text-brand transition-colors duration-300 md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-sm leading-8 text-neutral-500 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-4 text-xs text-neutral-400">
                    <span>{format(new Date(featured.created_at), 'd MMMM yyyy', { locale: ar })}</span>
                    <span className="mr-auto inline-flex items-center gap-1.5 font-bold text-brand group-hover:gap-3 transition-all">
                      اقرأ المقال <ArrowUpLeft className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Remaining Posts */}
          {blogPosts.length > 0 && (
            <div>
              <h3 className="text-lg font-extrabold text-neutral-900 mb-8 pb-4 border-b border-neutral-200/60">جميع المقالات</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                    <article className="h-full overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-400 hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)] hover:border-brand/25 hover:-translate-y-1">
                      <div className="relative h-48 w-full overflow-hidden">
                        {post.image_url ? (
                          <Image src={post.image_url} alt={post.title} fill className="object-cover transition-transform duration-600 group-hover:scale-105" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                            <Edit2 className="w-8 h-8 text-neutral-300" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
                        <span className="absolute top-4 right-4 rounded-xl bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-neutral-700">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-base font-extrabold text-neutral-900 leading-snug line-clamp-2 group-hover:text-brand transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-xs text-neutral-500 leading-6 line-clamp-2">{post.excerpt}</p>
                        <div className="mt-5 flex items-center gap-2 text-xs text-neutral-400">
                          <span>{format(new Date(post.created_at), 'd MMMM yyyy', { locale: ar })}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
