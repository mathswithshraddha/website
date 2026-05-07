import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import ResultsSection from "@/components/ResultsSection";
import ShortsCarousel from "@/components/ShortsCarousel";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Testimonials & Results | Maths with Shraddha",
  description: "Read what parents and students say about our math coaching and view our success stories.",
};

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="pt-32">
        <div className="flex flex-col items-center px-4 mb-16">
          <div className="bg-primary text-white px-12 py-4 rounded-full text-3xl md:text-5xl font-heading font-bold mb-6 shadow-lg text-center">
            Parent & Student Reviews
          </div>
          <p className="text-xl text-primary font-medium max-w-2xl mx-auto text-center">
            Real stories from our community of 1000+ confident learners.
          </p>
        </div>

        <ShortsCarousel />

        <Testimonials />
        <ResultsSection />
      </div>
      <FinalCTA />
    </main>
  );
}
