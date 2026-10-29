"use client";

import React from "react";
import Image from "next/image";
import { Mountain, CalendarDays, ShieldCheck, Headset, ArrowRight, Sparkles } from "lucide-react";

interface WhyTravelWithUsProps {
  onOurStory?: () => void;
  onExploreFeature?: (feature: string) => void;
}

export const WhyTravelWithUs: React.FC<WhyTravelWithUsProps> = ({
  onOurStory,
  onExploreFeature,
}) => {
  const features = [
    {
      id: "curated",
      title: "Curated Experiences",
      description: "handpicked destinations and unique activities.",
      icon: Mountain,
      bgColor: "bg-[#EAE3D6]",
      iconColor: "text-[#1C3830]",
    },
    {
      id: "personalised",
      title: "Personalised Planning",
      description: "itineraries tailored to your style, pace and budget.",
      icon: CalendarDays,
      bgColor: "bg-[#DDE4DB]",
      iconColor: "text-[#1C3830]",
    },
    {
      id: "partners",
      title: "Trusted Global Partners",
      description: "reliable services and local expertise worldwide.",
      icon: ShieldCheck,
      bgColor: "bg-[#F3DFD5]",
      iconColor: "text-[#BE6543]",
    },
    {
      id: "support",
      title: "Support at Every Step",
      description: "24/7 assistance before, during and after your trip.",
      icon: Headset,
      bgColor: "bg-[#D9E1D8]",
      iconColor: "text-[#1C3830]",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative pt-12 pb-6 md:py-20 lg:py-28 bg-[#FAF7F2] overflow-hidden"
    >
      {/* Subtle organic corner decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,rgba(190,101,67,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(ellipse_at_bottom_left,rgba(23,59,50,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Editorial Heading & Story CTA */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Eyebrow with hairline */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#666B64]">
                WHY TRAVEL WITH US
              </span>
              <span className="w-12 h-[1px] bg-[#C8A66A]/70" />
            </div>

            {/* Headline matching screenshot */}
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[46px] leading-[1.12] font-normal text-[#132A24] mb-6 tracking-tight">
              More Than a Trip,
              <br />
              <span className="text-[#BE6543] italic font-serif">
                A Better Way to See the World.
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#595E57] text-base leading-relaxed mb-8 max-w-md font-body">
              We create meaningful travel experiences with personalised planning,
              trusted partners and a passion for exploration.
            </p>

            {/* Bottom Row: Button & Stamp Badge */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <button
                type="button"
                onClick={onOurStory}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#132A24] text-[#FAF7F2] text-sm font-medium tracking-wide shadow-md hover:bg-[#1C3B33] hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Circular Stamp: PEOPLE • PLACES • CULTURES • CONNECTIONS */}
              <div className="relative w-28 h-28 shrink-0 flex items-center justify-center select-none group/stamp cursor-default">
                <svg
                  viewBox="0 0 160 160"
                  className="w-full h-full animate-spin-slow transition-transform"
                >
                  {/* Outer delicate dashed border */}
                  <circle
                    cx="80"
                    cy="80"
                    r="75"
                    fill="none"
                    stroke="#D9CBB7"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                  />
                  {/* Inner thin solid rings */}
                  <circle
                    cx="80"
                    cy="80"
                    r="71"
                    fill="none"
                    stroke="#BFAC93"
                    strokeWidth="1"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="47"
                    fill="none"
                    stroke="#D9CBB7"
                    strokeWidth="1"
                  />
                  {/* Circular text path */}
                  <defs>
                    <path
                      id="stampCirclePath"
                      d="M 80,80 m -59,0 a 59,59 0 1,1 118,0 a 59,59 0 1,1 -118,0"
                    />
                  </defs>
                  <text
                    fill="#7D705E"
                    fontSize="9.5"
                    fontWeight="600"
                    letterSpacing="0.22em"
                  >
                    <textPath href="#stampCirclePath" startOffset="50%" textAnchor="middle">
                      PEOPLE • PLACES • CULTURES • CONNECTIONS •
                    </textPath>
                  </text>
                </svg>

                {/* Central Leaf Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A89274"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Arched Cappadocia Visual Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[3.7/5] rounded-2xl rounded-tr-[110px] overflow-hidden shadow-2xl border border-[#E9E1D2] group">
              {/* Image */}
              <Image
                src="/images/cappadocia-balloons.jpg"
                alt="Traveller looking at Cappadocia hot air balloons at sunrise"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 400px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom gradient overlay for script text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Cursive handwritten overlay matching reference */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none select-none">
                <div className="transform -rotate-2">
                  <p className="font-script text-white text-2xl sm:text-3xl leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] font-normal">
                    Open People,
                    <br />
                    Gentle Places,
                    <br />
                    Brighter Stories
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 4 Feature Items */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-6 sm:space-y-7">
            {features.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onExploreFeature?.(item.title)}
                  className="flex items-start gap-4 group cursor-pointer transition-all duration-200"
                >
                  {/* Circular Icon Badge */}
                  <div
                    className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-108`}
                  >
                    <IconComponent className="w-6 h-6 stroke-[1.6]" />
                  </div>

                  {/* Title & Description */}
                  <div className="pt-1">
                    <h3 className="font-editorial text-lg sm:text-[19px] font-semibold text-[#132A24] leading-snug group-hover:text-[#BE6543] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#696D66] leading-relaxed mt-1 font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
