import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

import FounderHero from "@/components/founder/FounderHero";
import FounderStory from "@/components/founder/FounderStory";
import FounderPhilosophy from "@/components/founder/FounderPhilosophy";
import FounderDifferentiator from "@/components/founder/FounderDifferentiator";
import FounderExperience from "@/components/founder/FounderExperience";
import FounderApproach from "@/components/founder/FounderApproach";
import FounderParentConnection from "@/components/founder/FounderParentConnection";
import FounderVision from "@/components/founder/FounderVision";

export const metadata = {
  title: "Meet the Founder | Maths with Shraddha",
  description: "Learn about Mrs. Shraddha Panchal's journey, teaching philosophy, and her commitment to building mathematical thinkers.",
};

export default function FounderPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <FounderHero />
      <FounderStory />
      <FounderPhilosophy />
      <FounderDifferentiator />
      <FounderExperience />
      <FounderApproach />
      <FounderParentConnection />
      <FounderVision />
      
      {/* Reused from landing page */}
      <Testimonials />
      <FinalCTA />
      
    </main>
  );
}
