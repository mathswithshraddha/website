import { Lightbulb } from "lucide-react";

export default function FounderPhilosophy() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative math elements */}
      <div className="absolute -left-20 -top-20 opacity-5">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
           <circle cx="12" cy="12" r="10" />
           <path d="M12 2v20M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20M2 12a15 15 0 0 1 20 0M2 12a15 15 0 0 0 20 0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-5xl font-bold mb-6">
            A Different Way of Learning Mathematics
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            Moving away from traditional memorization towards genuine comprehension.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="bg-primary text-white p-10 md:p-14 rounded-3xl shadow-xl relative">
            <Lightbulb className="absolute top-8 right-8 w-12 h-12 text-accent opacity-50" />
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">The Core Philosophy</h3>
            <p className="text-3xl md:text-4xl font-bold leading-tight relative z-10">
              "When a child truly understands a concept, confidence follows naturally."
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-primary mb-3">Clarity Over Confusion</h4>
              <p className="text-gray-600 leading-relaxed">
                Maths should build clarity. We break down the most intimidating topics into their simplest foundational blocks, ensuring no child feels left behind.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-primary mb-3">Thinking, Not Memorizing</h4>
              <p className="text-gray-600 leading-relaxed">
                The focus is strictly on how to think, not what to memorize. When students learn to derive formulas rather than just remembering them, they become true problem solvers.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-primary mb-3">Every Child Can Understand</h4>
              <p className="text-gray-600 leading-relaxed">
                We believe there is no such thing as a "non-math" person. Every child has the capacity to understand complex logic if it is presented in a way that resonates with their learning style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
