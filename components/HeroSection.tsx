"use client";

import { Award, Users, GraduationCap, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="absolute top-1/4 right-10 opacity-5 md:opacity-10">
         <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
            Grades 1–10 Mathematics & Olympiad Coaching
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Building Mathematical <span className="text-accent">Thinkers</span>,<br /> Not Just High Scorers
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Helping students master concepts, excel in Olympiads, and develop lifelong problem-solving skills through structured, personalized teaching.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <a href="#free-trial" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
              Book Free Trial
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#contact" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
              Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 pt-10 border-t border-white/20">
            <div className="flex flex-col items-center justify-center">
              <Users className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold mb-1">2000+</div>
              <div className="text-sm text-gray-300">Students Taught</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Award className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold mb-1">80%+</div>
              <div className="text-sm text-gray-300">Olympiad Success Rate</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <GraduationCap className="w-8 h-8 text-accent mb-3" />
              <div className="text-lg font-bold mb-1 mt-2">Cambridge Certified</div>
              <div className="text-sm text-gray-300">Educator</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
