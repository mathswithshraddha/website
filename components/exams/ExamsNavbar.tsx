"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function ExamsNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image 
                src="/MWS_NOBG.png" 
                alt="Maths with Shraddha" 
                width={150} 
                height={50} 
                className="object-contain h-16 w-auto"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/exams" className="text-primary hover:text-accent font-medium transition-colors">
              All Exams
            </Link>
            <Link href="/exams/sasmo" className="text-primary hover:text-accent font-medium transition-colors">
              SASMO
            </Link>
            <Link href="/exams/sof" className="text-primary hover:text-accent font-medium transition-colors">
              SOF
            </Link>
            <Link href="/exams/ipm" className="text-primary hover:text-accent font-medium transition-colors">
              IPM
            </Link>
            <Link href="/exams/mental-maths" className="text-primary hover:text-accent font-medium transition-colors">
              Mental Maths
            </Link>
            
            <Link href="/enquire" className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold hover:bg-accent/90 transition-all shadow-md hover:shadow-lg">
              Book Free Trial
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <Link href="/exams" className="text-primary font-medium text-sm">
              Exams
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}