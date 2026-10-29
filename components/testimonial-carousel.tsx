"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/travel-content";

export const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const prev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
    setActiveIndex((current) =>
      current === 0 ? testimonialsData.length - 1 : current - 1
    );
  };

  const next = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
    setActiveIndex((current) =>
      current === testimonialsData.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="py-20 md:py-28 bg-[#F7F4EC] relative overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8DC] border border-[#DCD4C6] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#173B32]">
                TRAVELLERS LOVE US
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#152F29] tracking-tight">
              What Our Travellers Say
            </h2>

            <p className="text-[#4A514B] text-xs sm:text-sm mt-2 max-w-xl">
              Real stories from real travellers who explored the world with us.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#DCD4C6] bg-white flex items-center justify-center text-[#152F29] hover:bg-[#EEE8DC] transition-colors shadow-2xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#DCD4C6] bg-white flex items-center justify-center text-[#152F29] hover:bg-[#EEE8DC] transition-colors shadow-2xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Layout: Testimonial Cards & Right Photo Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3 Cards in one line / slidable on mobile like others sections */}
          <div className="lg:col-span-8">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto no-scrollbar scroll-smooth md:grid md:grid-cols-3 gap-5 pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {testimonialsData.map((item, idx) => (
                <div
                  key={item.id}
                  className={`w-[85vw] max-w-[340px] shrink-0 md:w-auto md:max-w-none md:shrink bg-[#FFFCF5] rounded-3xl p-6 border border-[#DCD4C6]/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                    activeIndex === idx
                      ? "ring-2 ring-[#BE6543]/40"
                      : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <div>
                    {/* 5 Stars */}
                    <div className="flex text-[#C8A66A] mb-3">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-current text-[#C8A66A]"
                        />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-xs sm:text-sm text-[#4A514B] leading-relaxed mb-6 italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Traveller Profile */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#EEE8DC]">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-1 ring-[#DCD4C6]">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold text-[#152F29]">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-[#BE6543] font-medium">
                        {item.trip}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Polaroids Collage with Script Tagline */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Polaroid Frame */}
              <div className="bg-white p-4 pb-8 rounded-2xl shadow-xl border border-[#DCD4C6] transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/images/testimonial-group.webp"
                    alt="Happy Voyagrie Travellers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-script text-2xl text-[#152F29] font-bold">
                    Happy Travellers,
                    <br />
                    <span className="text-[#BE6543]">Happier Stories</span>
                  </p>
                </div>
              </div>

              {/* Decorative Quote Icon Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#173B32] text-[#F7F4EC] flex items-center justify-center shadow-lg transform -rotate-12">
                <Quote className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
