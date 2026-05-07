"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Generate array of 42 review image paths
  const reviews = Array.from({ length: 42 }, (_, i) => `/reviews/review${i + 1}.jpeg`);

  const [isHovered, setIsHovered] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const scrollAmount = window.innerWidth > 768 ? 320 + 24 : 280 + 24; // card width + gap
        
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          // If at the end, jump back to start
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll to next card
          scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 600 : 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 w-full overflow-hidden flex flex-col items-center">
        <div className="bg-purple text-white px-6 sm:px-12 py-3 sm:py-5 rounded-3xl sm:rounded-full text-xl sm:text-2xl md:text-4xl font-heading font-bold mb-12 md:mb-16 shadow-lg text-center mx-4 sm:mx-0 max-w-[90%] sm:max-w-none">
          What Students & Parents Say
        </div>

        <div 
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => {
            // small delay before resuming auto-scroll after touch
            setTimeout(() => setIsHovered(false), 2000);
          }}
        >
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 -mx-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((src, index) => (
              <div 
                key={index} 
                className="flex-none w-[280px] md:w-[320px] aspect-[9/16] relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white snap-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={`Parent Review ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 320px"
                  unoptimized // Since these are local screenshots, optimization might blur text
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center transition-all z-10 ${
              !canScrollLeft ? "opacity-0 pointer-events-none" : "opacity-100 text-primary hover:text-accent hover:border-accent"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center transition-all z-10 ${
              !canScrollRight ? "opacity-0 pointer-events-none" : "opacity-100 text-primary hover:text-accent hover:border-accent"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Fade gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none -ml-4" />
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none -mr-4" />
        </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
