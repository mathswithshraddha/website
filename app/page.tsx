import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Sun, Cloud, Smile, ArrowRight, Users, Clock, Lightbulb } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import SchoolsSection from "@/components/SchoolsSection";
import ShortsCarousel from "@/components/ShortsCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 flex flex-col items-center text-center px-4 overflow-hidden">
        {/* Abstract Background Math Elements & Soft Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle warm gradient base */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange/5 via-background to-background" />

          {/* Soft floating glow orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow/20 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-green/10 rounded-full blur-3xl opacity-60 mix-blend-multiply" />

          {/* Floating Math Symbols (Subtle) 
          <div className="absolute top-20 left-[15%] text-primary/10 text-6xl font-black rotate-12">∑</div>
          <div className="absolute top-40 right-[15%] text-orange/10 text-5xl font-black -rotate-12">π</div>
          <div className="absolute bottom-20 left-[20%] text-green/10 text-5xl font-black rotate-45">∞</div>
          <div className="absolute bottom-32 right-[20%] text-primary/10 text-6xl font-black -rotate-6">∫</div>
          */}

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="math-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#math-grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full mt-8">

          {/* Refined Illustration / Logo Area */}
          <div className="relative mb-10 group">
            {/* Soft backdrop for illustration */}
            <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl transform scale-150" />

            <div className="relative flex justify-center items-center h-36 w-48 sm:h-44 sm:w-56 md:h-56 md:w-72 hover:-translate-y-2 transition-transform duration-300">
              <Image
                src="/sunandclouds.gif"
                alt="Sun and Clouds"
                fill
                unoptimized
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Typography Section */}
          <div className="flex flex-col items-center mb-10 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading text-primary font-black leading-[1.1] tracking-tight">
              Maths with <br className="md:hidden" />
              <span className="text-orange relative inline-block">
                Shraddha
                <svg className="absolute w-full h-3 md:h-4 -bottom-1 md:-bottom-2 left-0 text-yellow-400/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                </svg>
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-primary/90 font-bold">
              Conceptual Maths Classes for <span className="text-orange">Grade 1 to 10</span>
            </h2>

            <p className="text-lg md:text-xl font-sans text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Online & Offline Competitive Exam Preparation
            </p>
          </div>


          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/enquire" className="group w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-sans font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 border border-primary">
              Join Program
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/courses" className="group w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-sans font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 border border-gray-200 backdrop-blur-sm hover:border-primary/30">
              Explore Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-24 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-primary mb-4 md:mb-6 leading-tight">
            Hello, I&apos;m<br />Shraddha Panchal!
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-800 mb-4 md:mb-6 font-medium leading-relaxed">
            I am Shraddha Piyush Panchal, with over 30 years of teaching experience.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            In today&apos;s world, learning mathematics for competitive exams is not just about marks it&apos;s about building a powerful way of thinking. Math trains the brain to become logical, analytical, and sharp in problem-solving.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            As we move into a future where children will compete alongside advanced technology, including AI, it becomes essential for them to develop deep thinking skills and independent reasoning.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-medium italic">
            I strongly believe that every child can excel in math with the right guidance and approach. Teaching mathematics is not just my profession, it&apos;s my passion.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative w-full max-w-[500px] md:max-w-[600px] aspect-square">
            <Image src="/IMAGE2.png" alt="Shraddha Mam" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Exams We Teach For */}
      <section className="py-16 px-4 flex flex-col items-center">
        <div className="bg-green text-white px-6 sm:px-12 py-4 rounded-full text-2xl md:text-4xl font-heading font-bold mb-10 md:mb-16 shadow-lg text-center">
          Exams We Teach For
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl px-4">
          {[
            { title: "Mental Maths", desc: "Build lightning-fast calculation skills and mental agility.", img: "/exams-logos/MmcGmseLogo.jpeg", link: "/exams/mental-maths", imgBg: "bg-transparent" },
            { title: "SOF Maths Olympiad", desc: "Prepare for the Science Olympiad Foundation challenges.", img: "/exams-logos/SOF_IMO.jpeg", link: "/exams/sof", imgBg: "bg-transparent" },
            { title: "IPM", desc: "Intensive training for the Institute for Promotion of Mathematics.", img: "/exams-logos/IPM.png", link: "/exams/ipm", imgBg: "bg-[#0c4a6e] rounded-xl p-2" },
            { title: "SASMO", desc: "Singapore and Asian Schools Math Olympiad preparation.", img: "/exams-logos/SASMO.png", link: "/exams/sasmo", imgBg: "bg-transparent" },
          ].map((exam, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 w-full flex flex-col items-center text-center shadow-xl transform hover:-translate-y-2 transition-transform">
              <h3 className="text-2xl font-bold font-heading mb-4 text-primary">{exam.title}</h3>
              <p className="text-base text-gray-600 mb-6 flex-grow">{exam.desc}</p>
              <div className={`relative w-full h-32 mb-6 ${exam.imgBg}`}>
                <Image src={exam.img} alt={exam.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-contain" />
              </div>
              <Link href={exam.link} className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-accent transition-colors flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* School Slider Banner */}
      <SchoolsSection />

      {/* Our Principles */}
      <section className="py-16 flex flex-col items-center px-4">
        <div className="bg-orange text-white px-6 sm:px-12 py-4 rounded-full text-2xl md:text-4xl font-heading font-bold mb-10 md:mb-12 shadow-lg text-center">
          Our Principles
        </div>
        <div className="flex flex-col gap-4 w-full max-w-2xl">
          {[
            { text: "Olympiad Level Practice", bg: "bg-green" },
            { text: "Concept Clarity + Deep Thinking", bg: "bg-yellow" },
            { text: "Shortcut Techniques & Smart Tricks", bg: "bg-orange" },
            { text: "Problem Solving Mindset Technique", bg: "bg-purple" },
            { text: "Personalized Attention & Progress Tracking", bg: "bg-primary" }
          ].map((principle, i) => (
            <div key={i} className={`${principle.bg} text-white text-center py-4 px-4 rounded-2xl sm:rounded-full text-base sm:text-xl md:text-2xl font-bold shadow-md transform hover:scale-105 transition-transform`}>
              {principle.text}
            </div>
          ))}
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 md:py-24 flex flex-col items-center px-4 text-center">
        <div className="bg-green text-white px-6 sm:px-12 py-4 rounded-full text-2xl md:text-4xl font-heading font-bold mb-4 shadow-lg">
          Our Programs
        </div>
        <p className="text-xl font-bold text-white bg-green/90 px-6 py-2 rounded-full mb-6 shadow-sm">For Grade 1 - 10</p>
        <p className="text-base sm:text-xl md:text-2xl font-bold text-primary mb-10 md:mb-12 max-w-3xl">
          1 ½ Hour Weekly Focused Session Including All the Below Mention Exams
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10 md:mb-12">
          {[
            { text: "Mental Maths", bg: "bg-white", textClass: "text-primary" },
            { text: "SOF Maths Olympiad", bg: "bg-white", textClass: "text-primary" },
            { text: "IPM Olympiad", bg: "bg-white", textClass: "text-primary" }
          ].map((prog, i) => (
            <div key={i} className={`${prog.bg} ${prog.textClass} px-6 sm:px-10 py-3 sm:py-5 rounded-full text-base sm:text-xl md:text-2xl font-bold shadow-lg`}>
              {prog.text}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 w-full max-w-4xl relative z-20">
          <Link href="/international" className="group bg-green text-white px-6 py-5 rounded-[2rem] shadow-lg flex flex-col sm:flex-row items-center sm:justify-between gap-3 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer relative z-10 text-center sm:text-left">
            <span className="text-lg sm:text-xl md:text-2xl font-bold leading-snug">Special Batches for International Students</span>
            <div className="bg-white text-green px-6 py-2.5 rounded-full text-sm font-black flex items-center gap-2 group-hover:bg-primary group-hover:text-white transition-all shadow-md flex-shrink-0">
              Learn More <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/exams/sasmo" className="group bg-orange text-white px-6 py-5 rounded-[2rem] shadow-lg flex flex-col sm:flex-row items-center sm:justify-between gap-3 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer relative z-10 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-lg sm:text-xl md:text-2xl font-bold leading-snug">Intensive Special Batch For SASMO</span>
              <span className="text-xs sm:text-sm font-medium opacity-90 mt-0.5">( Singapore and Asian Schools Math Olympiad )</span>
            </div>
            <div className="bg-white text-orange px-6 py-2.5 rounded-full text-sm font-black flex items-center gap-2 group-hover:bg-primary group-hover:text-white transition-all shadow-md flex-shrink-0">
              Learn More <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* Shorts Carousel */}
      <ShortsCarousel />

      {/* Testimonials */}
      <Testimonials />

      <section className="py-16 md:py-24 pb-24 md:pb-40 text-center max-w-3xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-primary mb-8 md:mb-12">Ready to Start?</h2>
        <Link href="/enquire" className="bg-orange text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-2xl font-bold shadow-xl hover:-translate-y-1 transition-transform flex items-center justify-center gap-4 w-full sm:w-auto">
          Book a Free Trial <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </Link>
      </section>
    </main>
  );
}
