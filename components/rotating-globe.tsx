"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Plane } from "lucide-react";

interface RotatingGlobeProps {
  className?: string;
}

export const RotatingGlobe: React.FC<RotatingGlobeProps> = ({ className = "" }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className={`relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center select-none ${className}`}
    >
      {/* Decorative Outer Flight Route Orbit Ring */}
      <div className="absolute inset-0 rounded-full border border-dashed border-[#BE6543]/40 animate-spin-slow pointer-events-none z-20" />

      {/* Orbiting Plane Ring */}
      <div className="absolute inset-0 pointer-events-none animate-orbit z-20">
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#173B32] text-white border border-[#C8A66A]/60 flex items-center justify-center shadow-md transform rotate-90">
          <Plane className="w-3.5 h-3.5 transform -rotate-45 text-[#C8A66A]" />
        </div>
      </div>

      {/* Atmospheric Ambient Glow Behind the Sphere */}
      <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#173B32]/15 blur-2xl pointer-events-none" />

      {/* Primary Globe Video / Sphere */}
      <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(23,59,50,0.32)] ring-2 ring-[#BE6543]/30 bg-black z-10 flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/rotating-earth-poster.webp"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src="/videos/rotating-earth.mp4" type="video/mp4" />
        </video>

        {/* Spherical Rim Lighting Overlay */}
        <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_45px_rgba(0,0,0,0.7)] border border-white/20" />
      </div>

      {/* Floating Badge: Curated Global Journeys */}
      <div className="absolute -bottom-2 z-20 px-3.5 py-1.5 rounded-full bg-[#173B32] text-white border border-[#C8A66A]/40 shadow-md flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#BE6543] animate-pulse" />
        <span className="text-[10px] font-semibold tracking-wider uppercase">
          100+ Global Destinations
        </span>
      </div>
    </div>
  );
};

