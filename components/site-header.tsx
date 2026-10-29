"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Plane, Search, Phone, Menu, X, ArrowRight } from "lucide-react";
import { siteConfig, navLinks } from "@/data/travel-content";

interface SiteHeaderProps {
  onOpenInquiry?: () => void;
  onOpenSearch?: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  onOpenInquiry,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F4EC]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#DCD4C6]/60"
          : "bg-black/15 backdrop-blur-[3px] py-4 md:py-5 border-b border-white/10"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                isScrolled
                  ? "bg-[#173B32] text-[#F7F4EC]"
                  : "bg-white/20 backdrop-blur-md text-white border border-white/30"
              }`}
            >
              <Plane className="w-4 h-4 transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-editorial text-2xl md:text-3xl font-medium tracking-tight leading-none transition-colors ${
                  isScrolled ? "text-[#152F29]" : "text-white drop-shadow-sm"
                }`}
              >
                {siteConfig.brand}
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.22em] font-medium mt-1 transition-colors ${
                  isScrolled ? "text-[#686B64]" : "text-[#C8A66A]"
                }`}
              >
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] tracking-wide font-medium transition-colors duration-200 relative py-1 ${
                  isScrolled
                    ? idx === 0
                      ? "text-[#152F29] font-semibold"
                      : "text-[#4A514B] hover:text-[#BE6543]"
                    : idx === 0
                    ? "text-white font-semibold drop-shadow-sm"
                    : "text-white/85 hover:text-[#C8A66A] drop-shadow-sm"
                }`}
              >
                {link.label}
                {idx === 0 && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full ${
                      isScrolled ? "bg-[#BE6543]" : "bg-[#C8A66A]"
                    }`}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search destinations or packages"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isScrolled
                  ? "border border-[#DCD4C6] text-[#152F29] hover:bg-[#EEE8DC]"
                  : "border border-white/30 text-white hover:bg-white/20 backdrop-blur-xs"
              }`}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Direct Phone / Local Expert */}
            <div
              className={`hidden sm:flex items-center gap-2 text-left border-l pl-4 ${
                isScrolled ? "border-[#DCD4C6]" : "border-white/20"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isScrolled
                    ? "bg-[#EEE8DC] text-[#173B32]"
                    : "bg-white/15 text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className={`text-xs font-semibold tracking-tight transition-colors ${
                    isScrolled
                      ? "text-[#152F29] hover:text-[#BE6543]"
                      : "text-white hover:text-[#C8A66A]"
                  }`}
                >
                  {siteConfig.phone}
                </a>
                <span
                  className={`text-[10px] font-medium leading-none ${
                    isScrolled ? "text-[#686B64]" : "text-white/75"
                  }`}
                >
                  {siteConfig.phoneDisplay}
                </span>
              </div>
            </div>

            {/* Plan Your Trip CTA */}
            <button
              type="button"
              onClick={onOpenInquiry}
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 ${
                isScrolled
                  ? "bg-[#173B32] text-[#F7F4EC] hover:bg-[#092B25]"
                  : "bg-[#BE6543] hover:bg-[#a85738] text-white shadow-md"
              }`}
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className={`lg:hidden w-9 h-9 rounded-full flex items-center justify-center ${
                isScrolled
                  ? "border border-[#DCD4C6] text-[#152F29] hover:bg-[#EEE8DC]"
                  : "border border-white/30 text-white hover:bg-white/20"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFCF5] border-b border-[#DCD4C6] px-6 py-6 shadow-xl animate-fadeIn text-[#152F29]">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#152F29] hover:text-[#BE6543] py-2 border-b border-[#EEE8DC]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2 text-xs text-[#152F29] font-medium"
              >
                <Phone className="w-4 h-4 text-[#BE6543]" />
                <span>
                  {siteConfig.phone} ({siteConfig.phoneDisplay})
                </span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry?.();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#173B32] text-[#F7F4EC] text-xs font-medium"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
