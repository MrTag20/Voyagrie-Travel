"use client";

import React from "react";
import {
  CalendarDays,
  ShieldCheck,
  Mountain,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { whyVoyagrieData } from "@/data/travel-content";
import { RotatingGlobe } from "@/components/rotating-globe";

interface WhyVoyagrieProps {
  onOurStory?: () => void;
}

export const WhyVoyagrie: React.FC<WhyVoyagrieProps> = ({ onOurStory }) => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "CalendarDays":
        return <CalendarDays className="w-5 h-5 text-[#BE6543]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#BE6543]" />;
      case "Mountain":
        return <Mountain className="w-5 h-5 text-[#BE6543]" />;
      case "Headphones":
        return <Headphones className="w-5 h-5 text-[#BE6543]" />;
      default:
        return <CalendarDays className="w-5 h-5 text-[#BE6543]" />;
    }
  };

  return (
    <section
      id="why-voyagrie"
      className="relative py-16 md:py-24 bg-[#F7F4EC] overflow-hidden"
    >
      {/* Background Subtle Contour Map Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#173B32_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8DC] border border-[#DCD4C6] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#173B32]">
                {whyVoyagrieData.eyebrow}
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-[52px] leading-[1.08] font-medium text-[#152F29] mb-6">
              <span>{whyVoyagrieData.headlinePrefix}</span>
              <br />
              <span>{whyVoyagrieData.headlineMiddle}</span>
              <br />
              <span className="italic font-normal text-[#BE6543]">
                {whyVoyagrieData.headlineHighlight}
              </span>
            </h2>

            <p className="text-[#4A514B] text-sm sm:text-base leading-relaxed mb-8">
              {whyVoyagrieData.description}
            </p>

            <button
              type="button"
              onClick={onOurStory}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#173B32] text-[#F7F4EC] text-xs sm:text-sm font-medium tracking-wide shadow-xs hover:bg-[#092B25] hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>{whyVoyagrieData.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Center Column: Rotating 3D Realistic Globe */}
          <div className="lg:col-span-4 flex items-center justify-center my-4 lg:my-0">
            <RotatingGlobe />
          </div>

          {/* Right Column: 4 Benefits List */}
          <div className="lg:col-span-4 relative">
            {/* Decorative Handwritten Script (Top Right) */}
            <div className="hidden xl:block absolute -top-8 -right-4 pointer-events-none transform rotate-3">
              <span className="font-script text-2xl text-[#BE6543] font-bold">
                {whyVoyagrieData.handwrittenPhrase}
              </span>
            </div>

            <div className="space-y-5">
              {whyVoyagrieData.benefits.map((b) => (
                <div
                  key={b.id}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 hover:bg-white border border-[#DCD4C6]/60 hover:border-[#BE6543]/40 shadow-2xs hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EEE8DC] flex items-center justify-center shrink-0 shadow-2xs">
                    {getBenefitIcon(b.icon)}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm sm:text-base font-semibold text-[#152F29] tracking-tight">
                      {b.title}
                    </h3>
                    <p className="text-xs text-[#686B64] leading-relaxed mt-1">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Circular Compass/Explore Stamp (Bottom Right) */}
            <div className="hidden md:flex justify-end mt-6 pr-4 pointer-events-none">
              <div className="w-20 h-20 rounded-full border border-[#DCD4C6] p-1 flex items-center justify-center text-center opacity-75">
                <span className="text-[7.5px] uppercase tracking-widest font-semibold text-[#173B32]">
                  EXPLORE
                  <br />
                  DREAM
                  <br />
                  DISCOVER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
