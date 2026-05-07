"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import shortsData from "@/data/shorts.json";

interface Short {
  id: string;
  label: string;
  channelName: string;
  channelUrl: string;
}

const shorts: Short[] = shortsData;

export default function ShortsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
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
    <section className="py-16 w-full overflow-hidden flex flex-col items-center">
      <div className="bg-orange text-white px-6 sm:px-12 py-4 rounded-2xl sm:rounded-full text-lg sm:text-3xl md:text-4xl font-heading font-bold mb-10 md:mb-16 shadow-lg text-center mx-4 sm:mx-0 max-w-[90vw]">
        Watch Our Students &amp; Parents in Action
      </div>

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => {
          setTimeout(() => setIsHovered(false), 2000);
        }}
      >
        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 -mx-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {shorts.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[280px] md:w-[320px] aspect-[9/16] relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white snap-center hover:shadow-2xl transition-all duration-300 bg-black group"
            >
              {/* Floating Info Header — wide pill covering the YouTube channel bar */}
              <div className="absolute top-0 left-0 right-0 z-20 px-3 pt-3">
                <a
                  href={item.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-orange/10 w-full transform transition-transform group-hover:scale-[1.02]"
                >
                  {/* YouTube icon — inline SVG since lucide-react doesn't export Youtube */}
                  <div className="bg-red-500 p-1.5 rounded-full flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.5 6.2a3.01 3.01 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3.01 3.01 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3.01 3.01 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3.01 3.01 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
                    </svg>
                  </div>

                  {/* Labels */}
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[11px] font-bold text-primary leading-tight truncate">{item.channelName}</span>
                    <span className="text-[9px] font-semibold text-orange uppercase tracking-widest leading-tight flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-orange text-orange inline-block" />
                      {item.label}
                    </span>
                  </div>

                  {/* External link icon */}
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                </a>
              </div>

              <iframe
                src={`https://www.youtube.com/embed/${item.id}?modestbranding=1&rel=0`}
                title={`${item.label} – ${item.channelName}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-none"
              ></iframe>
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
