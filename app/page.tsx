import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { Projects } from "@/components/projects";
import { BeforeAfter } from "@/components/before-after";
import { Sectors } from "@/components/sectors";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { VisionMission } from "@/components/vision-mission";
import { BlogSection } from "@/components/blog-section";

export default function HomePage() {
  return (
    <div className="bg-[#fafafa] min-h-screen text-[#1a1a1a] flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col items-center pt-12 relative w-full">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[linear-gradient(180deg,rgba(173,192,181,0.30),rgba(250,250,250,0)_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(117,140,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(117,140,129,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
        
        <div className="w-full max-w-[1200px] flex flex-col items-center relative z-10">
          <Hero />
          <Services />
          <Projects />
          <Process />
          <BeforeAfter />
          <Sectors />
          <WhyUs />
          <VisionMission />
          <BlogSection />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
