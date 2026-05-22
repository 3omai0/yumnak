'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { Plus, Edit2, Trash2, Eye, Tags, Calendar, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

export default function PostsDashboard() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoriesCount, setCategoriesCount] = useState(0);

  const fetchPosts = useCallback(async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
    setLoading(false);
  }, []);

  const fetchCategories = useCallback(async () => {
    const { count } = await supabase
      .from('blog_categories')
      .select('*', { count: 'exact', head: true });
    if (count !== null) setCategoriesCount(count);
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      void fetchPosts();
      void fetchCategories();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [fetchPosts, fetchCategories]);

  async function handleDelete(id: string, imageUrl: string | null, content: string | null) {
    if (!confirm('هل أنت متأكد من حذف هذا المقال وجميع الصور المرتبطة به؟ لا يمكن التراجع عن هذا الإجراء.')) return;
    
    // Delete images from Supabase Storage Bucket
    try {
      let pathsToDelete: string[] = [];

      // Add cover image to delete list
      if (imageUrl) {
        const parts = imageUrl.split('/blog-images/');
        if (parts.length > 1) pathsToDelete.push(parts[1]);
      }

      // Add all images inside the post content to delete list
      if (content) {
        const regex = /src="([^"]+)"/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
          const src = match[1];
          if (src.includes('/blog-images/')) {
            const parts = src.split('/blog-images/');
            if (parts.length > 1) pathsToDelete.push(parts[1]);
          }
        }
      }

      if (pathsToDelete.length > 0) {
        await supabase.storage.from('blog-images').remove(pathsToDelete);
      }
    } catch (error) {
      console.error('Failed to delete images from bucket:', error);
    }

    // Delete post from database
    await supabase.from('blog_posts').delete().eq('id', id);
    fetchPosts();
  }

  return (
    <div className="p-10 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-neutral-900 tracking-tight">إدارة المقالات</h1>
          <p className="text-neutral-500 mt-2 font-medium text-sm">التحكم الكامل في محتوى المدونة ونشر مقالات جديدة.</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-2xl font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:-translate-y-0.5 text-sm"
        >
          <Plus className="w-5 h-5" />
          مقال جديد
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-neutral-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
            <FileText className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">إجمالي المقالات</p>
            <h3 className="text-3xl font-black text-neutral-900 leading-none">{posts.length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-neutral-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
            <Tags className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">عدد التصنيفات</p>
            <h3 className="text-3xl font-black text-neutral-900 leading-none">{categoriesCount}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-neutral-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
            <Calendar className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">آخر نشر</p>
            <h3 className="text-lg font-black text-neutral-900 leading-none">{posts.length > 0 ? format(new Date(posts[0].created_at), 'd MMM yyyy', { locale: ar }) : '—'}</h3>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="bg-white rounded-[2.5rem] border border-neutral-200/60 shadow-[0_8px_40px_rgba(0,0,0,0.03)] overflow-hidden">
        <div className="p-8 border-b border-neutral-100 flex items-center justify-between bg-white/50 backdrop-blur-sm">
          <h2 className="text-xl font-black text-neutral-900">أحدث المقالات</h2>
        </div>
        <div className="p-4 sm:p-8">
          {loading ? (
            <div className="flex justify-center py-24">
              <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-8 text-neutral-300">
                <Edit2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-3">لا يوجد مقالات حتى الآن</h3>
              <p className="text-neutral-500 mb-10 max-w-sm mx-auto font-medium leading-relaxed">ابدأ بإنشاء أول مقال في مدونتك ليظهر للزوار على الموقع.</p>
              <Link
                href="/admin/posts/new"
                className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 hover:-translate-y-0.5"
              >
                <Plus className="w-5 h-5" />
                إنشاء المقال الأول
              </Link>
            </div>
          ) : (
            <div className="grid gap-3">
              {posts.map((post) => (
                <div key={post.id} className="bg-white border border-neutral-100 rounded-[1.5rem] p-4 flex items-center justify-between hover:border-brand/30 hover:shadow-[0_10px_40px_rgba(117,140,129,0.08)] transition-all duration-300 group">
                  <div className="flex items-center gap-6">
                    {post.image_url ? (
                      <div className="w-36 h-24 rounded-xl bg-neutral-100 overflow-hidden relative flex-shrink-0">
                        <img src={post.image_url} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                    ) : (
                      <div className="w-36 h-24 rounded-xl bg-neutral-50 flex items-center justify-center flex-shrink-0">
                        <Edit2 className="w-6 h-6 text-neutral-300" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-extrabold text-neutral-900 mb-2 line-clamp-1 group-hover:text-brand transition-colors duration-300">{post.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-neutral-500">
                        <span className="bg-brand/10 text-brand px-3 py-1 rounded-lg text-xs font-bold">{post.category}</span>
                        <span>•</span>
                        <span className="font-semibold text-neutral-400">{format(new Date(post.created_at), 'd MMMM yyyy', { locale: ar })}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-neutral-400 hover:text-brand hover:bg-brand/10 transition-colors"
                      title="عرض المقال"
                    >
                      <Eye className="w-5 h-5" />
                    </Link>
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-neutral-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      title="تعديل"
                    >
                      <Edit2 className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id, post.image_url, post.content)}
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      title="حذف"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
