import { Inter } from 'next/font/google';

export const metadata = {
  title: 'لوحة التحكم | يمناك',
  description: 'إدارة المحتوى',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col" dir="rtl">
      {children}
    </div>
  );
}
