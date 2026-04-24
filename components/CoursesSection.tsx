import { Calculator, Globe, Laptop, BookOpen, CheckCircle2 } from "lucide-react";

export default function CoursesSection() {
  const features = [
    "Concept-based teaching",
    "Regular tests",
    "Doubt-solving",
    "Study material"
  ];

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
            Grades 1–10
          </div>
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
            Our Comprehensive Programs
          </h2>
          <p className="text-gray-600 text-lg">
            Structured curriculums designed to build a deep understanding of mathematics at every stage of a student's journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <Calculator className="w-10 h-10 text-accent mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">Mental Maths Curriculum</h3>
            <p className="text-gray-600 mb-8 relative z-10">
              Master the school curriculum with deep conceptual clarity. Perfect for building a rock-solid foundation.
            </p>
            <ul className="space-y-3 mb-8 relative z-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Course 2 */}
          <div className="bg-primary rounded-3xl p-8 shadow-xl transition-all border border-primary relative group overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <Globe className="w-10 h-10 text-accent mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Olympiad Preparation</h3>
            <p className="text-gray-300 mb-8 relative z-10">
              Rigorous training for SASMO, SOF, and IPM. Develop advanced problem-solving skills to compete globally.
            </p>
            <ul className="space-y-3 mb-8 relative z-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Course 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <Laptop className="w-10 h-10 text-accent mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">Adaptive Digital Assessments</h3>
            <p className="text-gray-600 mb-8 relative z-10">
              Technology-driven practice that adapts to the student's level, ensuring targeted improvement and mastery.
            </p>
            <ul className="space-y-3 mb-8 relative z-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
