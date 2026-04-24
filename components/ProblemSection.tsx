import { BrainCircuit, BookX, Target } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="math-pattern absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
            The Real Challenge in Learning Mathematics
          </h2>
          <p className="text-gray-600 text-lg">
            Many students struggle not because they lack potential, but because traditional methods focus on memorization rather than true understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
              <BookX className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Fear of Concepts</h3>
            <p className="text-gray-600">
              Students often develop a fear of math due to unclear foundational concepts, leading to a lifelong struggle with numbers.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
              <BrainCircuit className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Rote Memorization</h3>
            <p className="text-gray-600">
              Focusing on learning formulas by heart instead of developing real logical and analytical thinking skills.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Olympiad Readiness</h3>
            <p className="text-gray-600">
              School curriculum alone is often not enough to prepare bright minds for competitive and Olympiad-level problems.
            </p>
          </div>
        </div>

        <div className="bg-primary rounded-3xl p-10 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
           <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                 <path d="M-100 100 Q 150 -50 400 100 T 900 100" fill="none" stroke="currentColor" strokeWidth="2" />
                 <path d="M-100 150 Q 150 0 400 150 T 900 150" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
              </svg>
           </div>
           <h3 className="text-2xl md:text-3xl font-bold relative z-10 leading-relaxed max-w-4xl mx-auto">
             "Complex concepts are simplified through structured, personalized teaching."
           </h3>
        </div>
      </div>
    </section>
  );
}
