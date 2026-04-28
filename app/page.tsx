import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SchoolsSection from "@/components/SchoolsSection";
import MethodologySection from "@/components/MethodologySection";
import ResultsSection from "@/components/ResultsSection";
import Testimonials from "@/components/Testimonials";
import CoreStory from "@/components/CoreStory";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <SchoolsSection />
      <MethodologySection />
      <ResultsSection />
      <Testimonials />
      <CoreStory isShort={true} />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
