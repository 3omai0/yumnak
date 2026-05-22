'use server'

import { cookies } from 'next/headers'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function loginAction(formData: FormData) {
  const username = (formData.get('username') as string | null)?.trim()
  const password = (formData.get('password') as string | null)?.trim()

  if (!username || !password) {
    return { error: 'الرجاء إدخال اسم المستخدم وكلمة المرور' }
  }

  // Find user in Supabase
  const { data: users, error } = await supabaseAdmin
    .from('admin_users')
    .select('*')
    .eq('username', username)
    .limit(1)

  if (error) {
    console.error('Admin login Supabase error:', {
      message: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
    })

    if (process.env.NODE_ENV !== 'production') {
      return { error: `خطأ في الاتصال بجدول الأدمن: ${error.message}` }
    }

    return { error: 'تعذر التحقق من بيانات الدخول حالياً' }
  }

  const user = users?.[0]

  if (!user || user.password !== password) {
    return { error: 'بيانات الدخول غير صحيحة' }
  }

  // Set auth cookie
  const cookieStore = await cookies()
  cookieStore.set('admin_auth', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  })

  return { success: true }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_auth')
}
