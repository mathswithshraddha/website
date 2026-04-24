"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
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
              Exams
            </Link>
            <Link href="/about" className="text-primary hover:text-accent font-medium transition-colors">About</Link>
            <a href="#courses" className="text-primary hover:text-accent font-medium transition-colors">Courses</a>
            <a href="#testimonials" className="text-primary hover:text-accent font-medium transition-colors">Testimonials</a>
            <Link href="/enquire" className="text-primary hover:text-accent font-medium transition-colors">Enquire</Link>
            
            <a href="#contact" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors font-medium">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
            
            <a href="#free-trial" className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold hover:bg-accent/90 transition-all shadow-md hover:shadow-lg">
              Book Free Trial
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/exams" className="text-primary font-medium text-sm">
              Exams
            </Link>
            <Link href="/about" className="text-primary font-medium text-sm">
              About
            </Link>
            <Link href="/enquire" className="text-primary font-medium text-sm">
              Enquire
            </Link>
            <a href="#free-trial" className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent/90 transition-all shadow-md">
              Free Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
