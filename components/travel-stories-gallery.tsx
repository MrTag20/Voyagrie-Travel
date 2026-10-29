"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Play,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Camera,
} from "lucide-react";
import {
  travelStoriesData,
  storyCategories,
  TravelStory,
} from "@/data/travel-content";
import { LightboxModal } from "@/components/lightbox-modal";

export const TravelStoriesGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeStory, setActiveStory] = useState<TravelStory | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const featuredStory = travelStoriesData[0];
  const gridStories = travelStoriesData.slice(1);

  const filteredGrid =
    selectedCategory === "All"
      ? gridStories
      : selectedCategory === "Photos"
      ? gridStories.filter((s) => s.type === "photo")
      : selectedCategory === "Videos"
      ? gridStories.filter((s) => s.type === "video")
      : gridStories.filter((s) => s.category === selectedCategory);

  const openStory = (story: TravelStory) => {
    setActiveStory(story);
    setLightboxOpen(true);
  };

  return (
    <section
      id="stories"
      className="py-20 md:py-28 bg-[#082A24] text-[#F8F3E8] relative overflow-hidden"
    >
      {/* Background Subtle Organic Topography / Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#F8F3E8_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C8A66A]">
                OUR TRAVEL STORIES
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              Real Journeys. Real People.
              <br />
              <span className="italic font-normal text-[#C8A66A]">
                Unforgettable Memories.
              </span>
            </h2>

            <p className="text-white/70 text-xs sm:text-sm mt-3 max-w-xl">
              Moments captured by our travellers from around the world. See the
              destinations through their eyes.
            </p>
          </div>

          {/* Controls */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => openStory(featuredStory)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-[#C8A66A] transition-colors group cursor-pointer"
            >
              <span>View All Stories</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => openStory(gridStories[0])}
                aria-label="Previous story set"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => openStory(gridStories[1])}
                aria-label="Next story set"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10">
          {storyCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#C8A66A] text-[#082A24] font-semibold shadow-xs"
                    : "bg-white/5 hover:bg-white/10 text-white/80 border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Media Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Left Column: Big Featured Video Story */}
          <div
            onClick={() => openStory(featuredStory)}
            className="lg:col-span-5 group relative min-h-[380px] lg:min-h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl bg-black"
          >
            <Image
              src={featuredStory.image}
              alt={featuredStory.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Centered Play Button Circle with subtle pulsing glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-18 h-18 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-[#BE6543] transition-all duration-300">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>

            {/* Bottom floating badge with traveller info */}
            <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center gap-3 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/15">
              {featuredStory.avatar && (
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/40 shrink-0">
                  <Image
                    src={featuredStory.avatar}
                    alt={featuredStory.travellerName || "Traveller"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-white tracking-wide truncate">
                  {featuredStory.title}
                </span>
                <span className="text-xs text-[#C8A66A] truncate">
                  {featuredStory.caption}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Mosaic Media Tiles */}
          <div className="lg:col-span-7 relative">
            {/* Handwritten Script (Top Right Floating) */}
            <div className="hidden xl:block absolute -top-10 -right-2 pointer-events-none transform rotate-3">
              <span className="font-script text-3xl text-[#C8A66A] font-bold drop-shadow-md">
                Travel. Share. Inspire.
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 h-full">
              {filteredGrid.map((story, idx) => (
                <div
                  key={story.id}
                  onClick={() => openStory(story)}
                  className={`group relative h-[180px] sm:h-[240px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-md bg-black ${
                    idx >= 2 ? "hidden sm:block" : ""
                  }`}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Icon or Camera Icon Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-xs flex items-center justify-center text-white border border-white/20">
                      {story.type === "video" ? (
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      ) : (
                        <Camera className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Destination label */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="flex items-center gap-1 text-[11px] text-[#C8A66A] font-medium truncate">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate">{story.destination}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View All Stories Button (Placed right after images) */}
        <div className="mt-6 flex sm:hidden justify-center">
          <button
            type="button"
            onClick={() => openStory(featuredStory)}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#C8A66A] hover:bg-[#d8b87d] text-[#082A24] font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 cursor-pointer"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        story={activeStory}
        stories={travelStoriesData}
        onSelectStory={(s) => setActiveStory(s)}
      />
    </section>
  );
};
