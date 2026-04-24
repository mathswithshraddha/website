import { Globe2, MapPin } from "lucide-react";

export default function LearningModes() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
            Flexible Modes of Learning
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the format that best suits your child's learning style and your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Online Mode */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Globe2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Online Classes</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Interactive, live sessions designed to keep students engaged, no matter where they are.
            </p>
            <div className="inline-block px-6 py-2 bg-gray-50 rounded-full text-sm font-semibold text-primary border border-gray-200">
              Available across India & Internationally
            </div>
          </div>

          {/* Offline Mode */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <MapPin className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Offline Classes</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In-person learning for students who thrive in a traditional, highly focused classroom environment.
            </p>
            <div className="inline-block px-6 py-2 bg-gray-50 rounded-full text-sm font-semibold text-primary border border-gray-200">
              Kanjurmarg (East) & Nearby Areas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
