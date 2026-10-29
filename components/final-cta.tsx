"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { finalCtaData } from "@/data/travel-content";

export const FinalCta: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0">
        <Image
          src={finalCtaData.backgroundImage}
          alt="Ready to Explore the World"
          fill
          className="object-cover object-center"
        />
        {/* Soft Warm Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EC]/95 via-[#F7F4EC]/85 to-[#F7F4EC]/50" />
      </div>

      <div className="relative max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#DCD4C6] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
            <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#173B32]">
              {finalCtaData.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] font-medium text-[#152F29] mb-5 tracking-tight">
            <span>{finalCtaData.headlinePrefix}</span>
            <br />
            <span className="italic font-normal text-[#BE6543]">
              {finalCtaData.headlineHighlight}
            </span>
          </h2>

          <p className="text-[#4A514B] text-base sm:text-lg leading-relaxed max-w-lg mb-6 font-normal">
            {finalCtaData.description}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173B32] hover:text-[#BE6543] transition-colors"
          >
            <span>Get in touch below</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
