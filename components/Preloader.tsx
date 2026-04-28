"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [render, setRender] = useState(true);

  useEffect(() => {
    // Start fading out after 2 seconds
    const timer1 = setTimeout(() => setShow(false), 1000);
    // Remove from DOM after fade out completes
    const timer2 = setTimeout(() => setRender(false), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!render) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ease-in-out ${show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <div className="animate-pulse transform scale-110 transition-transform duration-1000">
        <Image
          src="/MWS_NOBG.png"
          alt="Maths with Shraddha Loading"
          width={300}
          height={120}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
