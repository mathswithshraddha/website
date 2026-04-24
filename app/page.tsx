import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import ResultsSection from "@/components/ResultsSection";
import CoursesSection from "@/components/CoursesSection";
import TeachingApproach from "@/components/TeachingApproach";
import LearningModes from "@/components/LearningModes";
import FreeTrialCTA from "@/components/FreeTrialCTA";
import AdmissionProcess from "@/components/AdmissionProcess";
import Testimonials from "@/components/Testimonials";
import GallerySection from "@/components/GallerySection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <WhyChooseUs />
      <AboutSection />
      <ResultsSection />
      <CoursesSection />
      <TeachingApproach />
      <LearningModes />
      <FreeTrialCTA />
      <AdmissionProcess />
      <Testimonials />
      <GallerySection />
      <FinalCTA />
    </main>
  );
}
