"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { heroData, siteConfig } from "@/data/travel-content";

interface HeroVideoProps {
  onExplore?: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onExplore }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden bg-black"
    >
      {/* Background Full-Screen Cinematic Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
        {/* Subtle, soft cinematic dark overlay so video is clearly visible while text stays readable */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/35 to-black/20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 z-10 bg-gradient-to-t from-[#F7F4EC] via-[#F7F4EC]/30 to-transparent pointer-events-none" />

        {/* HTML5 Video Layer spanning the whole screen */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={siteConfig.heroVideo}
          poster={siteConfig.heroPoster}
          className="w-full h-full object-cover object-center scale-100"
        >
          <source src={siteConfig.heroVideo} type="video/mp4" />
          <source src={siteConfig.heroVideoRaw} type="video/mp4" />
          <source src={siteConfig.heroVideoAlt} type="video/mp4" />
          <source src={siteConfig.heroVideoFallback} type="video/mp4" />
        </video>
      </div>

      {/* Decorative Stamp (Upper Center Floating) */}
      <div className="hidden md:flex absolute top-24 left-[53%] transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="relative w-28 h-28 rounded-full border border-white/25 p-2 flex items-center justify-center animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              id="stampCircle"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[7.2px] tracking-[0.16em] uppercase fill-white/80 font-semibold">
              <textPath href="#stampCircle">
                TRAVEL • EXPLORE • EXPERIENCE • REPEAT •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#BE6543] text-xs font-serif font-bold">✈</span>
          </div>
        </div>
      </div>


      {/* Main Content Layout Container */}
      <div className="relative z-20 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-xl">
          {/* Eyebrow */}
          <div className="reveal-slide-left inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-4 md:mb-5 shadow-xs" style={{ transitionDelay: "150ms" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
            <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F8F3E8]">
              {heroData.eyebrow}
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="reveal-element font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[78px] leading-[1.04] font-medium tracking-tight text-white mb-5 md:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]" style={{ transitionDelay: "300ms" }}>
            <span>{heroData.headlinePrefix}</span>
            <br />
            <span>{heroData.headlineMiddle}</span>
            <br />
            <span className="italic font-normal text-[#BE6543]">
              {heroData.headlineHighlight}
            </span>
          </h1>

          {/* Description */}
          <p className="reveal-element text-white/90 text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed max-w-[50%] sm:max-w-lg mb-8 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style={{ transitionDelay: "450ms" }}>
            {heroData.description}
          </p>

          {/* CTA Row - Pause button removed as requested */}
          <div className="reveal-element flex flex-wrap items-center gap-4 sm:gap-5 mb-10" style={{ transitionDelay: "600ms" }}>
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#BE6543] hover:bg-[#a85738] text-white text-sm font-semibold tracking-wide shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{heroData.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Social Proof & Trust Row */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/20">
            {/* Avatar Stack */}
            <div className="flex -space-x-2.5">
              {heroData.avatars.map((avatar, i) => (
                <div
                  key={i}
                  className="relative w-9 h-9 rounded-full ring-2 ring-white/60 overflow-hidden"
                >
                  <Image
                    src={avatar}
                    alt={`Traveller ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Rating and review details */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-white">
                <span className="font-bold text-sm tracking-tight text-white">
                  {heroData.trustNumber}
                </span>
                <span className="text-white/80 font-medium">
                  {heroData.trustLabel}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="flex text-[#C8A66A]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-current text-[#C8A66A]"
                    />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-white">
                  {heroData.rating}
                </span>
                <span className="text-[11px] text-white/80">
                  ({heroData.reviewsCount})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
