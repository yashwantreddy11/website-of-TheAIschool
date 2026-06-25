"use client";

import React, { useRef, useState } from 'react';

interface Mentor {
  name: string;
  role: string;
  subRole: string;
  image: string;
}

const mentors: Mentor[] = [
  {
    name: "Ganta Srinath Reddy",
    role: "Founder",
    subRole: "Tech Startup Leader",
    image: "/assets/srinath.png"
  },
  {
    name: "Ranjan Relan",
    role: "Mentor",
    subRole: "AI / Tech Architecture Expert",
    image: "/assets/ranjan.png"
  },
  {
    name: "Arun Chinnachamy",
    role: "Mentor",
    subRole: "Ecosystem Innovator",
    image: "/assets/arun.png"
  },
  {
    name: "Gopi Krishna",
    role: "Mentor",
    subRole: "Industry Practitioner",
    image: "/assets/gopi.png"
  },
  {
    name: "Kiran Babu",
    role: "Mentor",
    subRole: "Ecosystem Leader",
    image: "/assets/kiran.png"
  },
  {
    name: "Raja Mamidi",
    role: "Mentor",
    subRole: "Tech Innovator",
    image: "/assets/raja.png"
  }
];

export default function MentorCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (idx: number) => {
    setImageErrors(prev => ({ ...prev, [idx]: true }));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE1C25] font-heading">Ecosystem Leadership</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mt-2 font-heading">
              Our Founders & Mentors
            </h2>
          </div>
          
          {/* Custom Navigation Elements for the Slider */}
          <div className="flex items-center space-x-3 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-xl border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors bg-white shadow-xs cursor-pointer"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-xl bg-gray-900 text-white hover:bg-[#EE1C25] transition-colors shadow-md cursor-pointer"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ================= MENTOR PROFILE MATRIX ================= */}
        <div 
          ref={scrollContainerRef}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 hide-scrollbar scroll-smooth"
        >
          {mentors.map((mentor, idx) => (
            <div 
              key={idx} 
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col min-w-[280px] sm:min-w-[340px] md:min-w-0 snap-start"
            >
              {/* Image Container with Subtle Zoom Layer */}
              <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                {!imageErrors[idx] ? (
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    onError={() => handleImageError(idx)}
                  />
                ) : (
                  /* Elegant typographic placeholder layout if image is missing */
                  <div className="absolute inset-0 bg-gray-50 flex items-center justify-center p-6 text-center font-mono text-gray-300 uppercase font-black tracking-wider text-sm select-none">
                    {mentor.name.split(' ')[0]} Profile Visual
                  </div>
                )}
              </div>

              {/* Text Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between border-t border-gray-50">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EE1C25] bg-red-50 px-2.5 py-0.5 rounded font-heading">
                    {mentor.role}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 pt-1 group-hover:text-[#EE1C25] transition-colors duration-200 font-heading">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium">
                    {mentor.subRole}
                  </p>
                </div>

                {/* Social Connect Layer */}
                <div className="flex items-center space-x-3 pt-6 mt-4 border-t border-gray-100">
                  <a href="#" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-[#EE1C25] hover:bg-red-50 transition-all">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
