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
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="bg-primary text-white py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Concept-driven mathematics courses designed to build confidence, logic, and exam readiness.</p>
        </div>
        <CoursesSection />
        <LearningModes />
      </div>
      <FinalCTA />
    </main>
  );
}
