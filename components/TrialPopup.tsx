"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Video } from "lucide-react";

export default function TrialPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check if user has already closed it today or recently? 
    // Let's just always show it for now since it's temporary, or use sessionStorage
    const hasSeen = sessionStorage.getItem("trialPopupSeen");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsMounted(true);
        setTimeout(() => setIsOpen(true), 50);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("trialPopupSeen", "true");
    setTimeout(() => setIsMounted(false), 300);
  };

  if (!isMounted) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
      <div className={`bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden relative transition-all duration-300 ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`}>
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full text-white transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="bg-primary p-6 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-black font-heading flex items-center justify-center gap-2">
              ☀️ Maths with Shraddha
            </h2>
            <p className="mt-2 text-white/90 text-sm font-medium">
              Conceptual Math Programme | Online & Offline<br />
              For Grades 1 to 10
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl -ml-10 -mb-10" />
        </div>

        <div className="p-6">
          <div className="text-center mb-6">
            <span className="inline-flex items-center justify-center gap-2 bg-orange/10 text-orange font-bold px-4 py-1.5 rounded-full text-sm border border-orange/20">
              <Calendar className="w-4 h-4" />
              Free Trial Sessions
            </span>
          </div>

          <div className="space-y-4 text-sm mb-6">
            <div className="flex gap-4 items-start">
              <div className="w-1/3 font-bold text-gray-800">Fri, 5 June 2026</div>
              <div className="w-2/3 text-gray-600 font-medium">
                <div className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 mb-1">7:00 PM - Std 7</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1/3 font-bold text-gray-800">Sat, 6 June 2026</div>
              <div className="w-2/3 text-gray-600 font-medium space-y-1.5">
                <div className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">2:00 PM - Std 1</div>
                <div className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">3:00 PM - Std 2</div>
                <div className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">4:00 PM - Std 3</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1/3 font-bold text-gray-800">Sun, 7 June 2026</div>
              <div className="w-2/3 text-gray-600 font-medium space-y-1.5">
                <div className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">2:00 PM - Std 4</div>
                <div className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">3:00 PM - Std 5</div>
                <div className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">4:00 PM - Std 6</div>
              </div>
            </div>
          </div>

          <div className="bg-green/10 rounded-2xl p-4 text-center mb-6 border border-green/20">
            <p className="text-green font-bold text-[15px] mb-1">Weekly classes: Mid-June to April</p>
            <p className="text-gray-700 text-xs font-medium">
              Includes: Mental Math + SOF Olympiad + IPM Scholarship prep
            </p>
          </div>

          <p className="text-center font-medium text-gray-700 mb-6 text-sm">
            We build <span className="text-primary font-bold">deep understanding + love for math</span> 🤓<br />
            Give your child the gift of math love! ❤️
          </p>

          <a 
            href="https://us02web.zoom.us/j/9694115704?pwd=cWMxZVZhS2l0VWhTTmFqT3BUTlNEQT09" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            <Video className="w-5 h-5" />
            Join Free Trial Zoom
          </a>
        </div>
      </div>
    </div>
  );
}
