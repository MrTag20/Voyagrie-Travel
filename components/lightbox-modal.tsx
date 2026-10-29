"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Play } from "lucide-react";
import { TravelStory } from "@/data/travel-content";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  story: TravelStory | null;
  stories: TravelStory[];
  onSelectStory: (story: TravelStory) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  story,
  stories,
  onSelectStory,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, story]);

  if (!isOpen || !story) return null;

  const currentIndex = stories.findIndex((s) => s.id === story.id);

  const navigate = (dir: number) => {
    const nextIdx = (currentIndex + dir + stories.length) % stories.length;
    onSelectStory(stories[nextIdx]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close media viewer"
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next navigation */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        aria-label="Previous story"
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors cursor-pointer z-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={() => navigate(1)}
        aria-label="Next story"
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors cursor-pointer z-50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Media Card */}
      <div className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden bg-[#082A24] border border-white/10 shadow-2xl flex flex-col">
        <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black flex items-center justify-center overflow-hidden">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-contain"
          />

          {story.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-16 h-16 rounded-full bg-[#BE6543] text-white flex items-center justify-center shadow-lg animate-pulse-glow">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Caption bar */}
        <div className="p-6 bg-[#092B25] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#BE6543] font-semibold mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{story.destination}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-white/60 uppercase">{story.category}</span>
            </div>
            <h3 className="font-editorial text-2xl text-white font-medium">
              {story.title}
            </h3>
            {story.caption && (
              <p className="text-sm text-white/70 mt-1 max-w-xl">
                {story.caption}
              </p>
            )}
          </div>

          {story.travellerName && (
            <div className="flex items-center gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
              {story.avatar && (
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/30">
                  <Image
                    src={story.avatar}
                    alt={story.travellerName}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-white">
                  {story.travellerName}
                </span>
                <span className="text-[10px] text-white/60">Verified Traveller</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
