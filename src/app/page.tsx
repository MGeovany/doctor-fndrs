import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { StatsSection } from "@/components/sections/StatsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <DoctorsSection />
        <BenefitsSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}
