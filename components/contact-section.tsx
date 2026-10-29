"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MessageCircle,
  Plane,
  UserCheck,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"book" | "enquiry" | "expert">(
    "book"
  );
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [travellers, setTravellers] = useState("2 Travellers");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Cinematic Panoramic Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.jpg"
          alt="Santorini Sunset Terrace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        {/* Soft Ambient Warm Lighting Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/25 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F7F4EC] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#092B25] to-transparent pointer-events-none" />
      </div>

      {/* Decorative Flight Trail in the Sky */}
      <div className="hidden lg:block absolute top-12 right-[15%] w-80 h-32 pointer-events-none z-10 opacity-70">
        <svg viewBox="0 0 320 120" className="w-full h-full">
          <path
            d="M10,80 Q140,20 280,40"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <circle cx="20" cy="78" r="3.5" fill="white" />
          <circle cx="150" cy="28" r="3.5" fill="white" />
          <circle cx="280" cy="40" r="4.5" fill="#BE6543" />
        </svg>
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* START YOUR JOURNEY - Main Header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
            <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F8F3E8]">
              START YOUR JOURNEY
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.06] font-medium text-white mb-4 tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            <span>Ready to Explore</span>
            <br />
            <span className="italic font-normal text-[#BE6543]">
              the World?
            </span>
          </h2>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Let us create a journey that&apos;s uniquely yours. Discover, explore
            and make memories for a lifetime.
          </p>
        </div>

        {/* Integrated Glassmorphism Contact & Consultation Card */}
        <div className="max-w-5xl rounded-2xl sm:rounded-[32px] bg-[#FFFCF5]/92 backdrop-blur-xl border border-white/70 shadow-[0_24px_70px_rgba(21,47,41,0.25)] p-4 sm:p-8 md:p-10 lg:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Heading, Copy, & Quick Contact Options */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full mb-2 lg:mb-0">
              <div>
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-[#686B64] block mb-1.5 md:mb-2">
                  GET IN TOUCH
                </span>

                <h3 className="font-editorial text-2xl sm:text-4xl font-medium text-[#152F29] tracking-tight leading-[1.1] mb-2 sm:mb-3">
                  Contact Us
                </h3>

                <p className="text-xs sm:text-base font-semibold text-[#152F29] mb-1 sm:mb-2">
                  Let&apos;s plan your next unforgettable journey.
                </p>

                <p className="text-xs sm:text-sm text-[#4A514B] leading-relaxed mb-3 sm:mb-8 max-w-sm">
                  Our travel experts are here to help you with customised
                  itineraries, bookings, and any questions you may have.
                </p>
              </div>

              {/* Desktop Contact Info Pills (Chat with us deleted) */}
              <div className="hidden lg:flex flex-col space-y-3 pt-2">
                {/* Phone */}
                <a
                  href="tel:+14156789003"
                  className="flex items-center gap-3.5 p-2.5 sm:p-3 rounded-2xl bg-white/70 hover:bg-white border border-[#DCD4C6]/60 transition-all duration-200 group shadow-2xs hover:shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#173B32] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-[#152F29] group-hover:text-[#BE6543] transition-colors">
                      +1 415 678 9003
                    </span>
                    <span className="text-[10px] text-[#686B64] font-medium">
                      Call Us Anytime
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@voyagrie.com"
                  className="flex items-center gap-3.5 p-2.5 sm:p-3 rounded-2xl bg-white/70 hover:bg-white border border-[#DCD4C6]/60 transition-all duration-200 group shadow-2xs hover:shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#173B32] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-[#152F29] group-hover:text-[#BE6543] transition-colors">
                      hello@voyagrie.com
                    </span>
                    <span className="text-[10px] text-[#686B64] font-medium">
                      Send us an Email
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Tabbed Enquiry & Consultation Form */}
            <div className="lg:col-span-7">
              {/* Form Category Navigation Tabs */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 overflow-x-auto no-scrollbar">
                <button
                  type="button"
                  onClick={() => setActiveTab("book")}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === "book"
                      ? "bg-[#173B32] text-[#F7F4EC] shadow-sm"
                      : "text-[#686B64] hover:text-[#152F29] hover:bg-white/50"
                  }`}
                >
                  <Plane className="w-3.5 h-3.5" />
                  <span>Book a Trip</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("enquiry")}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === "enquiry"
                      ? "bg-[#173B32] text-[#F7F4EC] shadow-sm"
                      : "text-[#686B64] hover:text-[#152F29] hover:bg-white/50"
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Make an Enquiry</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("expert")}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === "expert"
                      ? "bg-[#173B32] text-[#F7F4EC] shadow-sm"
                      : "text-[#686B64] hover:text-[#152F29] hover:bg-white/50"
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Plan with Expert</span>
                </button>
              </div>

              {/* Form Container */}
              <div className="bg-white/85 rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-[#DCD4C6]/80 shadow-xs">
                {submitted ? (
                  <div className="text-center py-10 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#173B32]/10 text-[#173B32] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-editorial text-2xl sm:text-3xl font-medium text-[#152F29] mb-2">
                      Consultation Request Sent
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4A514B] mb-6 max-w-sm mx-auto">
                      Thank you, {fullName || "traveller"}! A dedicated Voyagrie
                      concierge expert will review your destination preferences and
                      contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#173B32] text-white text-xs font-semibold hover:bg-[#092B25] transition-colors cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#152F29] mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        required
                        className="w-full h-10 sm:h-11 px-3.5 sm:px-4 rounded-xl bg-[#F7F4EC]/90 border border-[#DCD4C6] text-xs font-medium text-[#152F29] placeholder:text-[#686B64]/60 focus:outline-none focus:border-[#BE6543] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#152F29] mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          required
                          className="w-full h-10 sm:h-11 px-3.5 sm:px-4 rounded-xl bg-[#F7F4EC]/90 border border-[#DCD4C6] text-xs font-medium text-[#152F29] placeholder:text-[#686B64]/60 focus:outline-none focus:border-[#BE6543] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#152F29] mb-1">
                          Phone Number
                        </label>
                        <div className="flex gap-2">
                          <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="w-18 sm:w-20 h-10 sm:h-11 px-2 rounded-xl bg-[#F7F4EC]/90 border border-[#DCD4C6] text-xs font-semibold text-[#152F29] focus:outline-none focus:border-[#BE6543] transition-colors cursor-pointer"
                          >
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+33">+33</option>
                            <option value="+49">+49</option>
                            <option value="+91">+91</option>
                            <option value="+971">+971</option>
                            <option value="+81">+81</option>
                          </select>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Your number"
                            required
                            className="flex-1 h-10 sm:h-11 px-3.5 sm:px-4 rounded-xl bg-[#F7F4EC]/90 border border-[#DCD4C6] text-xs font-medium text-[#152F29] placeholder:text-[#686B64]/60 focus:outline-none focus:border-[#BE6543] focus:bg-white transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Destination */}
                    <div>
                      <label className="block text-xs font-semibold text-[#152F29] mb-1">
                        Destination
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder="Where do you want to go?"
                          required
                          className="w-full h-10 sm:h-11 pl-10 pr-4 rounded-xl bg-[#F7F4EC]/90 border border-[#DCD4C6] text-xs font-medium text-[#152F29] placeholder:text-[#686B64]/60 focus:outline-none focus:border-[#BE6543] focus:bg-white transition-colors"
                        />
                        <MapPin className="w-4 h-4 text-[#BE6543] absolute left-3.5 top-3" />
                      </div>
                    </div>

                    {/* Dates and Travellers */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#152F29] mb-1">
                          Travel Dates
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={travelDates}
                            onChange={(e) => setTravelDates(e.target.value)}
                            placeholder="Select dates"
                            className="w-full h-10 sm:h-11 pl-10 pr-4 rounded-xl bg-[#F7F4EC]/90 border border-[#DCD4C6] text-xs font-medium text-[#152F29] placeholder:text-[#686B64]/60 focus:outline-none focus:border-[#BE6543] focus:bg-white transition-colors"
                          />
                          <Calendar className="w-4 h-4 text-[#BE6543] absolute left-3.5 top-3" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#152F29] mb-1">
                          Number of Travellers
                        </label>
                        <div className="relative">
                          <select
                            value={travellers}
                            onChange={(e) => setTravellers(e.target.value)}
                            className="w-full h-10 sm:h-11 pl-10 pr-8 rounded-xl bg-[#F7F4EC]/90 border border-[#DCD4C6] text-xs font-medium text-[#152F29] focus:outline-none focus:border-[#BE6543] focus:bg-white transition-colors cursor-pointer"
                          >
                            <option>1 Traveller (Solo)</option>
                            <option>2 Travellers</option>
                            <option>3 - 4 Travellers</option>
                            <option>5+ Travellers (Group)</option>
                          </select>
                          <Users className="w-4 h-4 text-[#BE6543] absolute left-3.5 top-3 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1 sm:pt-2">
                      <button
                        type="submit"
                        className="w-full h-11 sm:h-12 rounded-xl bg-[#173B32] hover:bg-[#092B25] text-[#F7F4EC] text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>Get a Free Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Mobile Quick Contact: Call and Email after CTA button (Chat with us deleted) */}
                    <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#DCD4C6]/50 lg:hidden">
                      <a
                        href="tel:+14156789003"
                        className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#173B32]/10 hover:bg-[#173B32]/15 border border-[#173B32]/20 text-[#173B32] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#BE6543] shrink-0" />
                        <div className="flex flex-col text-left">
                          <span className="text-xs font-bold leading-tight">Call Us</span>
                          <span className="text-[10px] text-[#686B64] font-medium leading-none">+1 415 678</span>
                        </div>
                      </a>

                      <a
                        href="mailto:hello@voyagrie.com"
                        className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#173B32]/10 hover:bg-[#173B32]/15 border border-[#173B32]/20 text-[#173B32] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#BE6543] shrink-0" />
                        <div className="flex flex-col text-left">
                          <span className="text-xs font-bold leading-tight">Email Us</span>
                          <span className="text-[10px] text-[#686B64] font-medium leading-none">hello@voyagrie</span>
                        </div>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
