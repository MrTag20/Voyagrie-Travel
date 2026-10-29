"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Clock,
  Star,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { destinationCards, Destination } from "@/data/travel-content";

interface DestinationStripProps {
  onSelectDestination?: (dest: Destination) => void;
  onViewAllDestinations?: () => void;
}

export const DestinationStrip: React.FC<DestinationStripProps> = ({
  onSelectDestination,
  onViewAllDestinations,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="destinations"
      className="pt-6 pb-14 md:py-22 bg-[#F7F4EC] relative overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <div className="max-w-2xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8DC] border border-[#DCD4C6] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#173B32]">
                CURATED LOCATIONS
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#152F29] tracking-tight">
              Popular Destinations
              <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#BE6543] ml-2 sm:ml-0">
                Across The Globe
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#4A514B] text-xs sm:text-sm mt-3 max-w-xl">
              Handpicked iconic cities, sun-drenched private islands, and serene alpine
              wonders tailored for extraordinary memories.
            </p>
          </div>

          {/* Right Header Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onViewAllDestinations}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#152F29] hover:text-[#BE6543] transition-colors group cursor-pointer"
            >
              <span>Explore All Destinations</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous destinations"
                className="w-9 h-9 rounded-full border border-[#DCD4C6] bg-white flex items-center justify-center text-[#152F29] hover:bg-[#EEE8DC] transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next destinations"
                className="w-9 h-9 rounded-full border border-[#DCD4C6] bg-white flex items-center justify-center text-[#152F29] hover:bg-[#EEE8DC] transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container — Sized like Popular Packages */}
        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[48%] lg:auto-cols-[calc(33.333%-16px)] xl:auto-cols-[calc(25%-18px)] gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {destinationCards.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination?.(dest)}
              className="group bg-[#FFFCF5] rounded-3xl overflow-hidden border border-[#DCD4C6]/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 48vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#173B32] shadow-2xs">
                    {dest.badge || dest.region}
                  </span>
                </div>

                {/* Region Pill Top Right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/45 backdrop-blur-xs text-white">
                    {dest.region}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#686B64] mb-2">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#BE6543]" />
                      <span>{dest.duration || "7-10 Days"}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-[#152F29]">
                      <Star className="w-3.5 h-3.5 fill-[#C8A66A] text-[#C8A66A]" />
                      <span>{dest.rating || 4.9}</span>
                      <span className="text-[#686B64] font-normal">
                        ({dest.reviewsCount || "350+"})
                      </span>
                    </div>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl font-medium text-[#152F29] group-hover:text-[#BE6543] transition-colors leading-tight mb-2">
                    {dest.name}
                  </h3>

                  <p className="text-xs text-[#686B64] line-clamp-2 leading-relaxed mb-4">
                    {dest.tagline ||
                      `Discover the iconic culture, luxury retreats, and bespoke wonders of ${dest.name}.`}
                  </p>
                </div>

                {/* Price and Action Button */}
                <div className="pt-4 border-t border-[#EEE8DC] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#686B64] block leading-none mb-1">
                      Starting from
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-[#152F29] tracking-tight">
                      ${(dest.startingPrice || 1450).toLocaleString()}
                    </span>
                    <span className="text-[11px] text-[#686B64] ml-1">
                      / person
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#173B32] text-white flex items-center justify-center group-hover:bg-[#BE6543] group-hover:scale-105 transition-all shadow-xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
