import React from 'react';

export default function AutoScrollGallery() {
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    ...Array.from({ length: 10 }, (_, i) => {
      if (i < 2) return `/photo_${i + 1}_2026-05-08_22-05-44.jpg`;
      return `/photo_${i + 1}_2026-05-08_22-06-10.jpg`;
    }),
    ...Array.from({ length: 30 }, (_, i) =>
      `/Maths with Shraddha Students Gallery ${i + 1}. .jpg`
    )
  ];

  return (
    <section className="py-12 bg-white overflow-hidden relative w-full">
      <div className="text-center mb-10 px-4">
        <h2 className="text-primary text-2xl md:text-3xl font-bold font-heading">
          Student Success Gallery
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients for smooth edge fading */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-marquee [animation-duration:120s] hover:[animation-play-state:paused] flex gap-4 md:gap-6 py-4">
          {/* Render images twice for seamless loop */}
          {[...images, ...images].map((src, index) => (
            <div key={index} className="flex-none w-56 md:w-72 h-48 md:h-60 relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group bg-gray-50">
              <img
                src={encodeURI(src)}
                alt={`Maths with Shraddha Student ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
