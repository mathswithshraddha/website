import { Users, Award, BookOpen, GraduationCap } from "lucide-react";

export default function FounderExperience() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Experience That Reflects in Results
          </h2>
          <p className="text-gray-300 text-lg">
            Years of dedication translated into tangible, consistent success for students across various competitive platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-colors">
            <Users className="w-10 h-10 text-accent mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">2000+</div>
            <div className="text-gray-300 font-medium">Students Taught</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-colors">
            <Award className="w-10 h-10 text-accent mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">80%+</div>
            <div className="text-gray-300 font-medium">Olympiad Selection Rate</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-colors lg:col-span-2 flex flex-col justify-center">
            <div className="text-lg font-semibold text-gray-300 mb-4 text-left">Students Appearing & Excelling In:</div>
            <div className="flex flex-wrap gap-4">
              <span className="px-5 py-2 bg-white/20 rounded-full font-bold tracking-wider">SASMO</span>

              <span className="px-5 py-2 bg-white/20 rounded-full font-bold tracking-wider">SOF</span>
              <span className="px-5 py-2 bg-white/20 rounded-full font-bold tracking-wider">IPM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
