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

        {/* Parent Highlights Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-primary">Key Highlights from Parents</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "My daughter improved from 62% to 94% in just one semester.", tag: "Grade Improvement" },
                { text: "He used to cry before math exams. Now he looks forward to them.", tag: "Confidence Boost" },
                { text: "Successfully cleared the SASMO competitive round!", tag: "Olympiad Success" }
              ].map((highlight, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border-4 border-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col justify-between">
                  <p className="text-primary font-medium text-lg italic mb-6">"{highlight.text}"</p>
                  <span className="text-sm font-bold text-green uppercase tracking-wider bg-green/10 px-4 py-2 rounded-full inline-block w-max">{highlight.tag}</span>
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
