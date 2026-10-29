"use client";

import React from "react";
import { Globe, Users, Star, Award, Clock } from "lucide-react";
import { trustStats } from "@/data/travel-content";

export const TravelStatBar: React.FC = () => {
  const getStatIcon = (index: number) => {
    const iconClass = "w-3 h-3 sm:w-4 sm:h-4";
    switch (index) {
      case 0:
        return <Globe className={`${iconClass} text-[#BE6543]`} />;
      case 1:
        return <Users className={`${iconClass} text-[#BE6543]`} />;
      case 2:
        return <Star className={`${iconClass} text-[#C8A66A]`} />;
      case 3:
        return <Award className={`${iconClass} text-[#BE6543]`} />;
      case 4:
        return <Clock className={`${iconClass} text-[#BE6543]`} />;
      default:
        return <Globe className={`${iconClass} text-[#BE6543]`} />;
    }
  };

  return (
    <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
      <div className="bg-[#EEE8DC]/70 border border-[#DCD4C6] rounded-xl sm:rounded-2xl p-2.5 sm:p-6">
        <div className="grid grid-cols-4 md:grid-cols-5 gap-1.5 sm:gap-4 md:gap-6 divide-x divide-[#DCD4C6]/80">
          {trustStats.map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3.5 text-center sm:text-left ${
                idx !== 0 ? "pl-1.5 sm:pl-3 md:pl-5" : ""
              } ${idx === 4 ? "hidden md:flex" : "flex"}`}
            >
              <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-2xs">
                {getStatIcon(idx)}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-base font-bold text-[#152F29] tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="text-[9px] sm:text-[11px] text-[#686B64] font-medium leading-tight truncate mt-0.5">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
