"use client";

import React, { useState } from "react";
import {
  Palmtree,
  Plane,
  Building2,
  FileCheck,
  Compass,
  MapPin,
  Calendar,
  Users,
  Search,
  ChevronDown,
} from "lucide-react";
import { searchTabs, destinationsList } from "@/data/travel-content";

interface TravelSearchPanelProps {
  onSearch?: (searchParams: {
    tab: string;
    destination: string;
    date: string;
    travellers: string;
  }) => void;
}

export const TravelSearchPanel: React.FC<TravelSearchPanelProps> = ({
  onSearch,
}) => {
  const [activeTab, setActiveTab] = useState("packages");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("2 Travellers");
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);

  const getIcon = (id: string) => {
    switch (id) {
      case "packages":
        return <Palmtree className="w-4 h-4" />;
      case "flights":
        return <Plane className="w-4 h-4" />;
      case "hotels":
        return <Building2 className="w-4 h-4" />;
      case "visa":
        return <FileCheck className="w-4 h-4" />;
      case "custom":
        return <Compass className="w-4 h-4" />;
      default:
        return <Palmtree className="w-4 h-4" />;
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.({
      tab: activeTab,
      destination: destination || "Bali, Indonesia",
      date: date || "Next Month",
      travellers,
    });
  };

  return (
    <div className="relative z-30 max-w-[1320px] mx-auto px-4 sm:px-6 -mt-10 md:-mt-14 mb-8">
      <div className="reveal-element bg-[#FFFCF5] rounded-3xl shadow-[0_12px_40px_rgba(21,47,41,0.08)] border border-[#DCD4C6]/80 p-3 sm:p-5 md:p-6 transition-all duration-300">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 pb-4 mb-4 border-b border-[#EEE8DC] overflow-x-auto no-scrollbar">
          {searchTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#173B32] text-[#F7F4EC] shadow-sm"
                    : "text-[#686B64] hover:text-[#152F29] hover:bg-[#EEE8DC]/60"
                }`}
              >
                {getIcon(tab.id)}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Inputs Row */}
        <form
          onSubmit={handleSearchSubmit}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center"
        >
          {/* Where to? Input */}
          <div className="relative md:col-span-4">
            <div
              onClick={() => {
                setShowDestDropdown(!showDestDropdown);
                setShowTravellerDropdown(false);
              }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#F7F4EC]/80 border border-[#DCD4C6] hover:border-[#BE6543]/50 transition-colors cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#BE6543] shadow-2xs shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-[#686B64] font-semibold">
                  Where to?
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#152F29] truncate mt-0.5">
                  {destination || "Search Destination"}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-[#686B64] shrink-0" />
            </div>

            {/* Destination Dropdown */}
            {showDestDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#FFFCF5] border border-[#DCD4C6] rounded-2xl shadow-xl z-50 p-2 max-h-56 overflow-y-auto">
                <div className="text-[10px] uppercase font-bold text-[#686B64] px-3 py-1.5 tracking-wider">
                  Popular Destinations
                </div>
                {destinationsList.map((dest) => (
                  <button
                    key={dest}
                    type="button"
                    onClick={() => {
                      setDestination(dest);
                      setShowDestDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#152F29] hover:bg-[#EEE8DC] flex items-center justify-between"
                  >
                    <span>{dest}</span>
                    <span className="text-[10px] text-[#BE6543]">Explore</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* When? Input */}
          <div className="relative md:col-span-3">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F7F4EC]/80 border border-[#DCD4C6] hover:border-[#BE6543]/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#BE6543] shadow-2xs shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <label
                  htmlFor="travel-dates"
                  className="text-[10px] uppercase tracking-wider text-[#686B64] font-semibold"
                >
                  When?
                </label>
                <input
                  id="travel-dates"
                  type="text"
                  placeholder="Select Dates"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-[#152F29] bg-transparent outline-none placeholder:text-[#686B64]/70 mt-0.5"
                />
              </div>
            </div>
          </div>

          {/* Travellers Input */}
          <div className="relative md:col-span-3">
            <div
              onClick={() => {
                setShowTravellerDropdown(!showTravellerDropdown);
                setShowDestDropdown(false);
              }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#F7F4EC]/80 border border-[#DCD4C6] hover:border-[#BE6543]/50 transition-colors cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#BE6543] shadow-2xs shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-[#686B64] font-semibold">
                  Travellers
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#152F29] truncate mt-0.5">
                  {travellers}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-[#686B64] shrink-0" />
            </div>

            {/* Traveller Dropdown */}
            {showTravellerDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#FFFCF5] border border-[#DCD4C6] rounded-2xl shadow-xl z-50 p-2">
                {[
                  "1 Traveller (Solo)",
                  "2 Travellers (Couple)",
                  "3 - 4 Travellers (Small Family)",
                  "5+ Travellers (Group Tour)",
                ].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setTravellers(opt);
                      setShowTravellerDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-[#152F29] hover:bg-[#EEE8DC]"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Trips Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full h-[52px] rounded-2xl bg-[#173B32] text-[#F7F4EC] text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-[#092B25] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <span>Search Trips</span>
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
