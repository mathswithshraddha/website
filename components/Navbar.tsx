"use client";
// Force cache invalidation

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Exams", href: "/exams" },
    { name: "About", href: "/about" },
    { name: "International", href: "/international" },
    { name: "Courses", href: "/courses" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={() => setIsOpen(false)}>
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
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-primary hover:text-accent font-medium transition-colors">
                {link.name}
              </Link>
            ))}
            
            <Link href="/enquire" className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold hover:bg-accent/90 transition-all shadow-md hover:shadow-lg">
              Book Free Trial
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary focus:outline-none p-2 -mr-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-30 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
          <div className="flex flex-col space-y-6 flex-grow">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-bold text-primary hover:text-accent transition-colors border-b border-gray-100 pb-4"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-4">
            <Link 
              href="/enquire" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-accent text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-lg"
            >
              Book Your Free Trial
            </Link>
            <a 
              href="https://wa.me/919969174811?text=Hi%20Shraddha%20Ma'am%2C%20I'm%20interested%20in%20a%20free%20trial."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-[#1ebd5c] transition-all shadow-lg flex items-center justify-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
