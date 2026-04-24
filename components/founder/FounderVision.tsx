import { Target } from "lucide-react";

export default function FounderVision() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Target className="w-16 h-16 text-accent mx-auto mb-8" />
        <h2 className="text-primary text-3xl md:text-5xl font-bold mb-8">
          Beyond Exams
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-10">
          Our ultimate goal goes far beyond helping students score high marks. We are preparing them for life. By cultivating a highly logical, problem-solving mindset, we ensure that mathematics transitions from being their biggest fear to their greatest cognitive strength.
        </p>
        <div className="inline-block px-8 py-4 bg-white rounded-full shadow-md text-lg font-bold text-primary border border-gray-100">
          Building Thinkers for Tomorrow.
        </div>
      </div>
    </section>
  );
}
