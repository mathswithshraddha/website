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
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-heading font-bold mb-6">
            Trusted by Parents, Loved by Students
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what parents are saying about their child's transformation.
          </p>
        </div>

        <div 
          className="relative"
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
                className="flex-none w-[280px] md:w-[320px] aspect-[9/16] relative rounded-2xl overflow-hidden shadow-md border-4 border-white snap-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none -ml-4" />
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none -mr-4" />
        </div>
        
        <div className="mt-12 text-center">
           <a href="https://wa.me/919969174811?text=Hi%20Shraddha%20Ma'am%2C%20I'm%20interested%20in%20a%20free%20trial." target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
             Book Free Trial for June Batch
           </a>
           <p className="mt-4 text-sm text-gray-500">Only a few seats per batch</p>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
