"use client";
// Force cache invalidation

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Exams", href: "/exams" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "International", href: "/international" },
  ];

  return (
    <>
      <div className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-5 flex justify-center w-full pointer-events-none">
        <nav className="w-full max-w-7xl pointer-events-auto transition-all duration-300 overflow-hidden"
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
                  src="/MWS_NOBG_NAV.png"
                  alt="Maths with Shraddha"
                  width={347}
                  height={322}
                  className="object-contain h-14 sm:h-16 md:h-20"
                  style={{ width: 'auto' }}
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
          
          {/* Expanded mobile menu within the pill */}
          <div 
            className={`md:hidden flex flex-col px-6 transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-[80vh] opacity-100 pb-8" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col space-y-4 pt-4 border-t border-primary/10 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 150px)' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold text-primary hover:text-accent transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="mt-4 pt-4 flex flex-col gap-3">
                <Link
                  href="/enquire"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-md"
                >
                  Book Your Free Trial
                </Link>
                <a
                  href="https://wa.me/919969174811?text=Hi%20Shraddha%20Ma'am%2C%20I'm%20interested%20in%20a%20free%20trial."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1ebd5c] transition-all shadow-md"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Click outside to close (optional, but good for UX) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
