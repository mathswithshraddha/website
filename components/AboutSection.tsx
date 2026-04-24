import { Award, BookOpen, Users } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-xl">
                <div className="rounded-2xl bg-white overflow-hidden relative">
                  <img src="/Shraddha Mam.jpg" alt="Mrs. Shraddha Panchal" className="w-full h-auto object-contain rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
              Meet Your Educator
            </h2>
            <h3 className="text-2xl text-accent font-semibold mb-6">Mrs. Shraddha Panchal</h3>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With a passion for demystifying mathematics, Mrs. Shraddha has dedicated her career to helping students build an unbreakable conceptual foundation. She believes that every child has the potential to be a mathematical thinker.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 mr-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Qualifications</h4>
                  <p className="text-gray-600">B.Com, B.Ed, CIDTT (Cambridge International Diploma for Teachers and Trainers)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 mr-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Experience</h4>
                  <p className="text-gray-600">2000+ students taught across India and internationally</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-2xl relative">
              <BookOpen className="w-8 h-8 text-white/20 absolute top-6 right-6" />
              <p className="text-lg italic font-light relative z-10">
                "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
