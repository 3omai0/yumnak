'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, PlusCircle, LogOut, Tags } from 'lucide-react';

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-l border-neutral-200 flex flex-col fixed inset-y-0 right-0 z-50 shadow-[0_0_40px_rgba(0,0,0,0.02)]">
      <div className="h-24 flex items-center px-8 border-b border-neutral-100/80">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-brand/20">
            Y
          </div>
          <div>
            <h1 className="text-2xl font-black text-neutral-900 leading-none tracking-tight">يمناك</h1>
            <p className="text-[10px] font-bold text-neutral-400 mt-1.5 uppercase tracking-widest">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-10 px-6 space-y-2">
        <p className="px-2 text-[11px] font-extrabold text-neutral-400 uppercase tracking-widest mb-6">القائمة الرئيسية</p>
        <Link href="/admin/posts" className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group ${pathname === '/admin/posts' ? 'bg-brand/5 text-brand' : 'text-neutral-500 hover:bg-neutral-50 hover:text-brand'}`}>
          <div className="flex items-center gap-3.5 font-bold text-sm">
            <FileText className={`w-5 h-5 ${pathname === '/admin/posts' ? 'text-brand' : 'text-neutral-400 group-hover:text-brand transition-colors'}`} />
            إدارة المقالات
          </div>
        </Link>
        <Link href="/admin/categories" className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group ${pathname === '/admin/categories' ? 'bg-brand/5 text-brand' : 'text-neutral-500 hover:bg-neutral-50 hover:text-brand'}`}>
          <div className="flex items-center gap-3.5 font-bold text-sm">
            <Tags className={`w-5 h-5 ${pathname === '/admin/categories' ? 'text-brand' : 'text-neutral-400 group-hover:text-brand transition-colors'}`} />
            التصنيفات
          </div>
        </Link>
        <Link href="/admin/posts/new" className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group ${pathname === '/admin/posts/new' ? 'bg-brand/5 text-brand' : 'text-neutral-500 hover:bg-neutral-50 hover:text-brand'}`}>
          <div className="flex items-center gap-3.5 font-bold text-sm">
            <PlusCircle className={`w-5 h-5 ${pathname === '/admin/posts/new' ? 'text-brand' : 'text-neutral-400 group-hover:text-brand transition-colors'}`} />
            مقال جديد
          </div>
        </Link>
      </nav>

      <div className="p-6 border-t border-neutral-100/80">
        <button onClick={async () => {
          const { logoutAction } = await import('@/app/actions/auth');
          await logoutAction();
          window.location.href = '/admin/login';
        }} className="flex w-full items-center gap-3.5 px-4 py-3.5 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-bold text-sm">
          <LogOut className="w-5 h-5" />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}
