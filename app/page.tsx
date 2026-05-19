import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { VisionMission } from "@/components/vision-mission";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { Projects } from "@/components/projects";
import { Sectors } from "@/components/sectors";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="bg-[#fafafa] min-h-screen text-[#1a1a1a] flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col items-center pt-12">
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          <Hero />
          <Services />
          <Projects />
          <Process />
          <Sectors />
          <WhyUs />
          <VisionMission />

          {/* Call to action section */}
          <section className="py-20 relative z-10 border-t border-neutral-200 w-full mt-12 bg-white">
            <div className="px-6 md:px-10 text-center relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 tracking-tight">جاهز للبدء برحلة التحول الرقمي؟</h2>
              <p className="text-sm text-neutral-500 mb-8 max-w-lg mx-auto leading-relaxed">
                دعنا نكون جزءاً من نجاح مشروعك القادم ونبني مستقبلاً مذهلاً معاً.
              </p>
              <button className="px-6 py-3 rounded-full bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition-colors">
                تواصل معنا الآن
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
