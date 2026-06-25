"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    
    // Calculate normalized position from center (-1 to 1)
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    
    // Cap movement between -10px and 10px
    setCoords({ x: x * 10, y: y * 10 });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  // Stagger variants for the text elements
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  // Continuous floating animation variants
  const floatTransition = shouldReduceMotion
    ? {}
    : {
        y: {
          duration: 3.5,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut",
        },
      };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen bg-[#020202] text-white flex items-center justify-center py-24 md:py-32 overflow-hidden select-none border-b border-white/5"
    >
      {/* 1. Micro-Noise Overlay Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] z-10 bg-repeat bg-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Ambient Lighting & Floating Blurred Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Red Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-red-900/10 blur-[120px] pointer-events-none" />

        {/* Ambient Blurred Circle 1 */}
        <motion.div
          animate={shouldReduceMotion ? {} : { x: [0, 15, 0], y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute -top-12 -left-12 w-96 h-96 rounded-full bg-red-950/20 blur-[80px]"
        />

        {/* Ambient Blurred Circle 2 */}
        <motion.div
          animate={shouldReduceMotion ? {} : { x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute bottom-12 right-12 w-80 h-80 rounded-full bg-indigo-950/10 blur-[90px]"
        />
      </div>

      {/* 3. Subtle Animated CSS Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Left Side: Cinematic Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE1C25] animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-neutral-400 font-sans">
              INDIA'S FIRST AI LEARNING ECOSYSTEM
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] font-heading bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent"
            >
              Building India's Next Generation of AI Engineers.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-[#EE1C25] font-heading font-extrabold text-sm md:text-base tracking-widest uppercase"
            >
              Where Intelligence Meets Innovation.
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-base md:text-lg leading-relaxed font-sans font-medium max-w-2xl"
          >
            At The AI School, we don't just teach Artificial Intelligence. We empower students, professionals and startup founders to build real AI products, solve real-world problems and shape the future of technology.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#who-we-are"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#EE1C25] hover:bg-[#D3131B] text-white text-sm font-black uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(238,28,37,0.25)] hover:shadow-[0_4px_25px_rgba(238,28,37,0.4)] active:scale-98"
            >
              <span>Explore Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#leadership"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-black uppercase tracking-wider rounded-full backdrop-blur-md transition-all duration-300 active:scale-98"
            >
              <Users className="w-4 h-4 text-neutral-400" />
              <span>Meet Our Leadership</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Artwork */}
        <div className="lg:col-span-5 flex justify-center items-center">
          {mounted && (
            <motion.div
              style={{
                x: coords.x,
                y: coords.y,
              }}
              animate={{
                y: shouldReduceMotion ? 0 : [0, -12, 0],
              }}
              transition={floatTransition as any}
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] aspect-square flex justify-center items-center"
            >
              {/* Subtle Red Ambient Glow behind artwork */}
              <div className="absolute inset-0 bg-[#EE1C25]/10 rounded-full blur-[60px] pointer-events-none mix-blend-screen scale-90" />

              {/* Artwork wrapper with soft shadow */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden p-6 filter drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                <Image
                  src="/assets/image.png"
                  alt="Official Company Logo Artwork"
                  fill
                  priority
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 500px"
                  className="object-contain pointer-events-none select-none transition-transform duration-500 scale-[1.02]"
                />
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
