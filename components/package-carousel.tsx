"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import {
  packagesData,
  packageCategories,
  PackageItem,
} from "@/data/travel-content";

interface PackageCarouselProps {
  onSelectPackage?: (pkg: PackageItem) => void;
  onViewAll?: () => void;
}

export const PackageCarousel: React.FC<PackageCarouselProps> = ({
  onSelectPackage,
  onViewAll,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredPackages =
    selectedCategory === "All"
      ? packagesData
      : packagesData.filter((p) => p.category === selectedCategory);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#F7F4EC] relative">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8DC] border border-[#DCD4C6] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#173B32]">
                POPULAR PACKAGES
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#152F29] tracking-tight">
              Handpicked Journeys
              <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#BE6543] ml-2 sm:ml-0">
                For Every Traveller
              </span>
            </h2>

            <p className="text-[#4A514B] text-xs sm:text-sm mt-3 max-w-xl">
              Whether you&apos;re seeking adventure, relaxation, culture or
              romance—we have the perfect journey for you.
            </p>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onViewAll}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#152F29] hover:text-[#BE6543] transition-colors group cursor-pointer"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous packages"
                className="w-9 h-9 rounded-full border border-[#DCD4C6] bg-white flex items-center justify-center text-[#152F29] hover:bg-[#EEE8DC] transition-colors shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next packages"
                className="w-9 h-9 rounded-full border border-[#DCD4C6] bg-white flex items-center justify-center text-[#152F29] hover:bg-[#EEE8DC] transition-colors shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
          {packageCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#173B32] text-[#F7F4EC] shadow-xs"
                    : "bg-white text-[#686B64] hover:text-[#152F29] border border-[#DCD4C6]/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Package Cards Grid / Carousel */}
        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[48%] lg:auto-cols-[calc(25%-18px)] gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => onSelectPackage?.(pkg)}
              className="group bg-[#FFFCF5] rounded-3xl overflow-hidden border border-[#DCD4C6]/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 48vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#173B32] shadow-2xs">
                    {pkg.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#686B64] mb-2">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#BE6543]" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-[#152F29]">
                      <Star className="w-3.5 h-3.5 fill-[#C8A66A] text-[#C8A66A]" />
                      <span>{pkg.rating}</span>
                      <span className="text-[#686B64] font-normal">
                        ({pkg.reviewsCount})
                      </span>
                    </div>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl font-medium text-[#152F29] group-hover:text-[#BE6543] transition-colors leading-tight mb-2">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-[#686B64] line-clamp-2 leading-relaxed mb-4">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price and Action Button */}
                <div className="pt-4 border-t border-[#EEE8DC] flex items-center justify-between">
                  <div>
                    <span className="text-lg sm:text-xl font-bold text-[#152F29] tracking-tight">
                      ${pkg.price.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-[#686B64] ml-1">
                      / per person
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#173B32] text-white flex items-center justify-center group-hover:bg-[#092B25] group-hover:scale-105 transition-all shadow-xs">
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
