"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
}

export default function CTASection({ 
  headline = "Start Early. Build Strong Mathematical Thinking.", 
  subheadline = "Join thousands of students preparing for maths olympiads with expert guidance." 
}: CTASectionProps) {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{headline}</h2>
        <p className="text-xl text-gray-300 mb-10 font-light">{subheadline}</p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="https://wa.me/919819123456" 
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd5c] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Chat on WhatsApp
          </a>
          <Link 
            href="/#free-trial" 
            className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
          >
            Book Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}