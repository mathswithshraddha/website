import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
import LearningModes from "@/components/LearningModes";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Courses | Maths with Shraddha",
  description: "Explore our math coaching batches for Grades 1-10 and Olympiad preparation.",
};

export default function CoursesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="pt-32 pb-12">
        <div className="flex flex-col items-center px-4 mb-16">
          <div className="bg-primary text-white px-12 py-4 rounded-full text-3xl md:text-5xl font-heading font-bold mb-6 shadow-lg text-center">
            Our Programs
          </div>
          <p className="text-xl text-primary font-medium max-w-2xl mx-auto text-center">
            Concept-driven mathematics courses designed to build confidence, logic, and exam readiness.
          </p>
        </div>
        <CoursesSection />
        <LearningModes />
      </div>
      <FinalCTA />
    </main>
  );
}
