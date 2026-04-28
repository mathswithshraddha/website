import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import CoreStory from "@/components/CoreStory";

export const metadata = {
  title: "About | Maths with Shraddha",
  description: "Learn about Shraddha Panchal's teaching philosophy, mission, qualifications, and mathematics teaching experience since 1991.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <CoreStory isShort={false} />
      
      {/* Reused from landing page */}
      <Testimonials />
      <FinalCTA />
      
    </main>
  );
}
