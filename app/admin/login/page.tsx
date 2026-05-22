'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight, Lock, User } from 'lucide-react';
import { loginAction } from '@/app/actions/auth';

export default function AdminLogin() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const res = await loginAction(formData);

    if (res?.error) {
      setError(res.error);
      setLoading(false);
    } else {
      router.push('/admin/posts');
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(117,140,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(117,140,129,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 p-8 sm:p-10">
          <div className="flex flex-col items-center mb-8">
            <Image src="/logo.png" alt="Yomnak Logo" width={120} height={40} className="h-10 w-auto object-contain mb-6" />
            <h1 className="text-2xl font-black tracking-tight text-neutral-900 mb-2">لوحة التحكم</h1>
            <p className="text-sm font-medium text-neutral-500">قم بتسجيل الدخول لإدارة محتوى المدونة</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 rounded-2xl bg-red-50 text-red-600 text-sm font-bold text-center border border-red-100">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-700 uppercase tracking-widest block mb-2">اسم المستخدم</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-neutral-400">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:ring-2 focus:ring-brand focus:border-brand block pr-11 p-3 transition-colors outline-none font-medium"
                  placeholder="admin"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-700 uppercase tracking-widest block mb-2">كلمة المرور</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-neutral-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:ring-2 focus:ring-brand focus:border-brand block pr-11 p-3 transition-colors outline-none font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-brand text-white font-extrabold py-3.5 px-4 rounded-2xl hover:bg-brand-dark transition-all shadow-[0_4px_15px_rgba(117,140,129,0.3)] hover:shadow-[0_6px_20px_rgba(117,140,129,0.4)] disabled:opacity-70"
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
              {!loading && <ArrowRight className="h-5 w-5 rotate-180" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
