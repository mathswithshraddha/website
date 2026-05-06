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
      <div className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-5 flex justify-center w-full pointer-events-none">
        <nav className="w-full max-w-7xl pointer-events-auto"
          style={{
            background: "rgba(250, 237, 223, 0.55)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1.5px solid rgba(255,255,255,0.55)",
            boxShadow: "0 8px 40px 0 rgba(160,120,80,0.13), 0 1.5px 8px 0 rgba(200,150,80,0.08)",
            borderRadius: "2.5rem",
          }}
        >
          <div className="flex justify-between items-center px-5 sm:px-8 h-[5.5rem] md:h-24">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                <Image
                  src="/MWS_NOBG.png"
                  alt="Maths with Shraddha"
                  width={260}
                  height={90}
                  className="object-contain h-14 sm:h-16 md:h-20 w-auto drop-shadow-sm"
                  priority
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-primary hover:text-orange font-bold transition-colors text-sm lg:text-base">
                  {link.name}
                </Link>
              ))}

              <Link href="/enquire" className="bg-orange text-white px-6 py-3 rounded-full font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all shadow-md text-sm lg:text-base">
                Book Free Trial
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary focus:outline-none p-2 -mr-1"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl ${isOpen ? "translate-x-0" : "translate-x-full"
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
