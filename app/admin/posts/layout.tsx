import { AdminSidebar } from '@/components/admin-sidebar';

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex" dir="rtl">
      <AdminSidebar />
      <main className="flex-1 mr-72 flex flex-col min-h-screen">
        {children}
      </main>
    </div>
  );
}
