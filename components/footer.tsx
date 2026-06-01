import { Mail, MapPin, Phone, Twitter, Linkedin, Instagram, Github, Facebook, Youtube, Ghost, Music2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-200 pt-16 pb-8 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">يمناك<span className="text-brand">.</span></h2>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6 max-w-xs">
              شريكك التقني الموثوق في رحلة التحول الرقمي. نقدم حلولاً برمجية مبتكرة وتصاميم استثنائية لدعم نمو أعمالك.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://twitter.com/Yomnak_IT" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-brand/10 hover:text-brand transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/yomnak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-brand/10 hover:text-brand transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/yomnak_it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-brand/10 hover:text-brand transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/it.yomnak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-brand/10 hover:text-brand transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@YOMNAK_IT" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-brand/10 hover:text-brand transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@yomnak_it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-brand/10 hover:text-brand transition-colors">
                <Music2 className="w-4 h-4" />
              </a>
              <a href="https://www.snapchat.com/add/yomnak_it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-brand/10 hover:text-brand transition-colors">
                <Ghost className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-neutral-900 mb-6">روابط سريعة</h3>
            <ul className="flex flex-col gap-4 text-sm text-neutral-500">
              <li><Link href="#services" className="hover:text-brand transition-colors">خدماتنا</Link></li>
              <li><Link href="#sectors" className="hover:text-brand transition-colors">القطاعات</Link></li>
              <li><Link href="#projects" className="hover:text-brand transition-colors">أعمالنا</Link></li>
              <li><Link href="#process" className="hover:text-brand transition-colors">آلية العمل</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-neutral-900 mb-6">أبرز الخدمات</h3>
            <ul className="flex flex-col gap-4 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-brand transition-colors">تطوير تطبيقات الجوال</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">تصميم المواقع</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">تخصيص أنظمة ERP</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">الذكاء الاصطناعي</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-neutral-900 mb-6">تواصل معنا</h3>
            <ul className="flex flex-col gap-4 text-sm text-neutral-500">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand" />
                <span>السعودية، المدينة المنورة، حي القصواء</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand" />
                <span dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand" />
                <span>info@yomnak.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} شركة يمناك لتقنية المعلومات. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-neutral-600 transition-colors">سياسة الخصوصية</Link>
            <Link href="#" className="hover:text-neutral-600 transition-colors">شروط الاستخدام</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
