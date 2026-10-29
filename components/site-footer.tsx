"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plane, ArrowRight, ArrowUp, CheckCircle2 } from "lucide-react";
import { siteConfig, footerData } from "@/data/travel-content";

export const SiteFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#092B25] text-[#F8F3E8] relative pt-10 md:pt-20 pb-6 md:pb-10 overflow-hidden border-t border-white/10">
      {/* Background Subtle Contour Map Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#F8F3E8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-8 md:pb-16 border-b border-white/10">
          {/* Column 1: Brand & Socials (Col Span 2 on mobile, 3 on lg) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <Link href="/" className="flex items-center gap-2.5 group mb-3 sm:mb-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#F8F3E8] group-hover:bg-[#BE6543] transition-colors">
                <Plane className="w-4 h-4 transform -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-2xl font-medium tracking-tight text-white leading-none">
                  {siteConfig.brand}
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#C8A66A] font-medium mt-1">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4 sm:mb-6 max-w-xs">
              {footerData.brandDescription}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-[#BE6543] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-[#BE6543] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-[#BE6543] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-[#BE6543] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Col Span 1 on mobile, 2 on lg) */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#C8A66A] mb-3 sm:mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (Col Span 1 on mobile, 2 on lg) */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#C8A66A] mb-3 sm:mb-5">
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerData.services.map((service) => (
                <li key={service}>
                  <a
                    href="#packages"
                    className="text-xs sm:text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Popular Destinations (Hidden on mobile) */}
          <div className="hidden md:block lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#C8A66A] mb-5">
              Destinations
            </h4>
            <ul className="space-y-2.5">
              {footerData.popularDestinations.map((dest) => (
                <li key={dest}>
                  <a
                    href="#destinations"
                    className="text-xs sm:text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Stay Inspired & Newsletter (Hidden on mobile) */}
          <div className="hidden md:block lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#C8A66A] mb-3">
              Stay Inspired
            </h4>
            <p className="text-xs text-white/70 mb-4">
              Get secret travel deals, curated inspirations and exclusive member
              offers.
            </p>

            {/* Newsletter Input */}
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/10 text-xs text-[#C8A66A] border border-white/20">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! You are now subscribed to Voyagrie.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address..."
                  required
                  className="w-full h-11 pl-4 pr-12 rounded-full bg-white/10 border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#C8A66A] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1 w-9 h-9 rounded-full bg-[#BE6543] hover:bg-[#a85738] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* 4 Destination Mini Thumbnails */}
            <div className="flex items-center gap-2.5">
              {footerData.thumbnails.map((thumb, i) => (
                <div
                  key={i}
                  className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/15"
                >
                  <Image
                    src={thumb}
                    alt={`Destination thumbnail ${i + 1}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Decorative script */}
            <div className="mt-4 text-right">
              <span className="font-script text-xl text-[#C8A66A]/80">
                Explore. Dream. Discover.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-white/60">
          <p>© 2024 Voyagrie. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#BE6543] text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
