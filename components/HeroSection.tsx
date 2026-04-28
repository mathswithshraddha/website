"use client";

import { Award, Users, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";
import UrgencyBadge from "@/components/UrgencyBadge";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Math Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 font-heading select-none">
        <div className="absolute top-[15%] left-[10%] text-6xl text-white animate-float">π</div>
        <div className="absolute top-[30%] right-[15%] text-7xl text-white animate-float-slow">∫</div>
        <div className="absolute bottom-[40%] left-[10%] text-5xl text-accent animate-float-delayed">∑</div>
        <div className="absolute top-[60%] right-[5%] text-6xl text-white animate-float">√</div>
        <div className="absolute top-[20%] right-[40%] text-4xl text-accent animate-float-slow">÷</div>
        <div className="absolute bottom-[15%] right-[20%] text-5xl text-white animate-float-delayed">×</div>
        <div className="absolute top-[50%] left-[5%] text-4xl text-white animate-float">∞</div>
        <div className="absolute bottom-[5%] left-[80%] text-5xl text-white animate-float-slow">θ</div>

        {/* Additional Mathematical Elements */}
        <div className="absolute top-[10%] left-[45%] text-5xl text-white animate-float-delayed">Δ</div>
        <div className="absolute top-[75%] left-[25%] text-6xl text-accent animate-float-slow">α</div>
        <div className="absolute bottom-[25%] left-[40%] text-4xl text-white animate-float">β</div>
        <div className="absolute top-[40%] left-[80%] text-5xl text-white animate-float-delayed">±</div>
        <div className="absolute bottom-[20%] right-[45%] text-4xl text-accent animate-float-slow">≈</div>
        <div className="absolute top-[80%] right-[15%] text-6xl text-white animate-float">x²</div>
        <div className="absolute top-[8%] right-[25%] text-4xl text-white animate-float-delayed">≠</div>
        <div className="absolute bottom-[12%] left-[60%] text-5xl text-accent animate-float-slow">μ</div>
        <div className="absolute top-[45%] right-[25%] text-4xl text-white animate-float">λ</div>
        <div className="absolute bottom-[60%] right-[10%] text-5xl text-white animate-float-delayed">Ω</div>
        <div className="absolute top-[25%] left-[25%] text-5xl text-white animate-float-slow">∈</div>
        <div className="absolute bottom-[35%] left-[70%] text-4xl text-white animate-float">∇</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6 animate-fade-in-up">
            Teaching Mathematics Since 1991
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6 leading-tight animate-fade-in-up-delay-1">
            Help your child stop fearing math and <span className="text-accent">start understanding it.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light animate-fade-in-up-delay-2">
            I teach math the way it actually makes sense to kids. No endless memorizing, just clear logic that builds confidence and improves grades.
          </p>


          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up-delay-3">
            <Link href="/enquire" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
              Book Free Trial for June Batch
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="https://wa.me/919969174811?text=Hi%20Shraddha%20Ma'am%2C%20I'm%20interested%20in%20a%20free%20trial." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
              Reserve Your Seat for June →
            </a>
          </div>
          <p className="text-sm text-gray-300 -mt-10 mb-16 animate-fade-in-up-delay-3">
            Only a few seats per batch
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-6 pt-10 border-t border-white/20 animate-fade-in-up-delay-3">
            <div className="flex flex-col items-center justify-center text-center px-1">
              <Users className="w-5 h-5 md:w-8 md:h-8 text-accent mb-2 md:mb-3" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 font-heading">1000+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 leading-tight">Students Taught</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-1">
              <Award className="w-5 h-5 md:w-8 md:h-8 text-accent mb-2 md:mb-3" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 font-heading">80%+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 leading-tight">Olympiad Success</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-1">
              <GraduationCap className="w-5 h-5 md:w-8 md:h-8 text-accent mb-2 md:mb-3" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 font-heading">Since 1991</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 leading-tight">Trusted Teaching Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
