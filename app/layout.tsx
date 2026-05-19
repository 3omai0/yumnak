import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({ subsets: ['latin', 'arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'يمناك للتقنية | Yemnak Tech',
  description: 'شريكك التقني الموثوق لتقديم أحدث الحلول البرمجية والذكاء الاصطناعي',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`}>
      <body className="font-sans antialiased selection:bg-brand-light/40 selection:text-brand-dark">
        {children}
      </body>
    </html>
  );
}
