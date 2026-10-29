"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Plane,
  Ticket,
  Building2,
  FileCheck,
  Compass,
  Users,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface OurServicesProps {
  onSelectService?: (serviceName: string) => void;
  onViewAllServices?: () => void;
}

export const OurServices: React.FC<OurServicesProps> = ({
  onSelectService,
  onViewAllServices,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const services = [
    {
      id: "holiday-packages",
      title: "Holiday Packages",
      subtitle: "Domestic & International",
      icon: Plane,
      actionIcon: ArrowUpRight,
      image: "/images/services/service-holiday.jpg",
    },
    {
      id: "flight-bookings",
      title: "Flight Bookings",
      subtitle: "Best Deals Worldwide",
      icon: Ticket,
      actionIcon: ArrowUpRight,
      image: "/images/services/service-flight.jpg",
    },
    {
      id: "hotel-reservations",
      title: "Hotel Reservations",
      subtitle: "Comfortable Stays",
      icon: Building2,
      actionIcon: ArrowUpRight,
      image: "/images/services/service-hotel.jpg",
    },
    {
      id: "visa-assistance",
      title: "Visa Assistance",
      subtitle: "Hassle-free Process",
      icon: FileCheck,
      actionIcon: ArrowUpRight,
      image: "/images/services/service-visa.jpg",
    },
    {
      id: "curated-experiences",
      title: "Curated Experiences",
      subtitle: "Unique & Local Activities",
      icon: Compass,
      actionIcon: ArrowUpRight,
      image: "/images/services/service-curated.jpg",
    },
    {
      id: "group-corporate",
      title: "Group & Corporate",
      subtitle: "For Families & Businesses",
      icon: Users,
      actionIcon: ArrowUpRight,
      image: "/images/services/service-corporate.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#0A1F1A] overflow-hidden"
    >
      {/* Background Misty Mountain Rainforest Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services-bg.jpg"
          alt="Lush green rainforest and mist covered mountains"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Dark atmospheric gradient matching the screenshot */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E19]/92 via-[#0C241E]/85 to-[#081814]/95 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Left Column: Eyebrow + Main Title */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D1B48C]">
                OUR SERVICES
              </span>
              <span className="w-10 h-[1px] bg-[#D1B48C]/60" />
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] font-normal text-[#FAF7F2] tracking-tight">
              Complete Travel
              <br />
              Solutions for Every Journey
            </h2>
          </div>

          {/* Center Column: Supporting Paragraph */}
          <div className="lg:col-span-4">
            <p className="text-[#C8D4CE] text-sm sm:text-base leading-relaxed font-body">
              From iconic landmarks to hidden experiences, we handle every detail so
              you can travel with peace of mind.
            </p>
          </div>

          {/* Right Column: "All Services" CTA Button & Mobile Nav */}
          <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-3">
            <button
              type="button"
              onClick={onViewAllServices}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-[#FAF7F2] text-sm font-medium tracking-wide transition-all duration-300 group backdrop-blur-sm cursor-pointer shadow-sm hover:border-white/40"
            >
              <span>All Services</span>
              <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#BE6543] group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Mobile Carousel Arrows */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous services"
                className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next services"
                className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* 6 SERVICE CARDS ROW - One line & slidable on mobile like Curated Locations */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth md:grid md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 mt-8 sm:mt-10 pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {services.map((item) => {
            const Icon = item.icon;
            const ActionIcon = item.actionIcon;

            return (
              <div
                key={item.id}
                onClick={() => onSelectService?.(item.title)}
                className="w-[72vw] max-w-[280px] shrink-0 md:w-auto md:max-w-none md:shrink group relative bg-[#FAF7F2] rounded-2xl p-4 sm:p-5 flex flex-col justify-between min-h-[190px] sm:min-h-[210px] border border-[#E7E0D3] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden"
              >
                {/* Right-aligned scenic image with gradient mask blend */}
                <div className="absolute top-0 right-0 bottom-0 w-[55%] pointer-events-none overflow-hidden rounded-r-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 220px"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-85"
                  />
                  {/* Seamless gradient mask into ivory card background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/55 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/40 via-transparent to-transparent" />
                </div>

                {/* Top: Icon */}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-start text-[#142C25] group-hover:text-[#BE6543] transition-colors">
                    <Icon className="w-7 h-7 stroke-[1.5]" />
                  </div>
                </div>

                {/* Bottom: Title & Subtitle */}
                <div className="relative z-10 pt-4 max-w-[80%]">
                  <h3 className="font-editorial text-base sm:text-[17px] font-semibold text-[#142C25] leading-snug group-hover:text-[#BE6543] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#6F736C] leading-snug mt-1 font-body">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom-right dark circular arrow button */}
                <div className="absolute bottom-3.5 right-3.5 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#11241F] text-white flex items-center justify-center shadow-md group-hover:bg-[#BE6543] group-hover:scale-110 transition-all duration-300">
                  <ActionIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
