import { Calendar, UserCheck, HeartHandshake } from "lucide-react";

export default function FreeTrialCTA() {
  return (
    <section id="free-trial" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Experience the Difference with a Free Trial
              </h2>
              <p className="text-red-100 text-lg md:text-xl mb-8 font-light">
                See firsthand how our concept-driven approach can transform your child's relationship with mathematics.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-white font-medium text-lg">
                  <Calendar className="w-6 h-6 mr-4 opacity-80" />
                  1 Free Trial Class
                </li>
                <li className="flex items-center text-white font-medium text-lg">
                  <UserCheck className="w-6 h-6 mr-4 opacity-80" />
                  Comprehensive Student Evaluation
                </li>
                <li className="flex items-center text-white font-medium text-lg">
                  <HeartHandshake className="w-6 h-6 mr-4 opacity-80" />
                  Detailed Parent Consultation
                </li>
              </ul>
              
            </div>
            
            <div className="w-full md:w-2/5 flex justify-center">
               <a href="#contact" className="bg-white text-accent hover:bg-gray-50 px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl hover:shadow-2xl flex flex-col items-center justify-center text-center transform hover:-translate-y-1 w-full max-w-sm">
                 Book Your Trial Now
                 <span className="text-sm font-normal text-gray-500 mt-2">Limited slots available</span>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
