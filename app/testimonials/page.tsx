import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import ResultsSection from "@/components/ResultsSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Testimonials & Results | Maths with Shraddha",
  description: "Read what parents and students say about our math coaching and view our success stories.",
};

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="pt-20">
        <div className="bg-primary text-white py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Parent & Student Reviews</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Real stories from our community of 1000+ confident learners.</p>
        </div>

        {/* Parent Highlights Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10 text-primary">Key Highlights from Parents</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { text: "My daughter improved from 62% to 94% in just one semester.", tag: "Grade Improvement" },
                { text: "He used to cry before math exams. Now he looks forward to them.", tag: "Confidence Boost" },
                { text: "Successfully cleared the SASMO competitive round!", tag: "Olympiad Success" }
              ].map((highlight, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <p className="text-gray-700 text-lg italic mb-4">"{highlight.text}"</p>
                  <span className="text-sm font-bold text-accent uppercase tracking-wider">{highlight.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <ResultsSection />
      </div>
      <FinalCTA />
    </main>
  );
}
