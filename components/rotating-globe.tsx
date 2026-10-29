"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/travel-content";

export const RotatingGlobe: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
      {/* Decorative Outer Flight Route Orbit Ring */}
      <div className="absolute inset-0 rounded-full border border-dashed border-[#BE6543]/40 animate-spin-slow pointer-events-none z-20" />

      {/* Orbiting Tiny Airplane SVG */}
      <div className="absolute inset-0 pointer-events-none animate-orbit z-20">
        <div className="w-8 h-8 rounded-full bg-[#173B32] text-white flex items-center justify-center shadow-md transform rotate-45">
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
      </div>

      {/* Atmospheric Ambient Glow Behind the Sphere */}
      <div className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full bg-[#2563eb]/20 blur-2xl pointer-events-none" />

      {/* Primary Globe Video Layer */}
      {!videoError ? (
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(23,59,50,0.28)] ring-2 ring-[#BE6543]/30 bg-black z-10 flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src={siteConfig.rotatingGlobeVideo}
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover object-center scale-105"
          >
            <source src={siteConfig.rotatingGlobeVideo} type="video/mp4" />
            <source src={siteConfig.rotatingGlobeVideoFallback} type="video/mp4" />
          </video>

          {/* Spherical Rim Lighting Overlay */}
          <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] border border-white/20" />
        </div>
      ) : (
        /* Fallback Still Image if video fails to load */
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-2xl z-10">
          <Image
            src={siteConfig.rotatingGlobePoster}
            alt="Voyagrie Destinations Globe"
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};
