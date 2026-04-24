import { MessageCircle, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Subtle math background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-small" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-small)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Give Your Child the Confidence to Solve <span className="text-accent border-b-4 border-accent">Any Problem</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 font-light">
          Join the community of 2000+ students who have discovered the joy of mathematics. Your child's journey to excellence starts here.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#contact" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd5c] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
            <MessageCircle className="w-6 h-6 mr-3" />
            Chat on WhatsApp
          </a>
          <a href="#free-trial" className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
            Book Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
