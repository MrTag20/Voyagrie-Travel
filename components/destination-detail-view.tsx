"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  MapPin,
  Users,
  Clock,
  Star,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  Phone,
  Send,
  Sparkles,
  Compass,
  Info,
  Award,
  CreditCard,
  FileCheck,
  Sun,
  Languages,
} from "lucide-react";
import {
  destinationDetailsData,
  destinationCards,
  siteConfig,
} from "@/data/travel-content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingActionButtons } from "@/components/floating-action-buttons";

const InquiryModal = dynamic(
  () => import("@/components/inquiry-modal").then((mod) => mod.InquiryModal),
  { ssr: false }
);

interface DestinationDetailViewProps {
  destinationId: string;
}

export const DestinationDetailView: React.FC<DestinationDetailViewProps> = ({
  destinationId,
}) => {
  const destKey = (destinationId || "bali").toLowerCase();
  const dest = destinationDetailsData[destKey] || destinationDetailsData["bali"];

  // Interactive states
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  // On-page consultation form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDates: "",
    travellers: "2 Adults",
    travelStyle: "Luxury & Relaxation",
    notes: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const otherDestinations = destinationCards.filter(
    (item) => item.id.toLowerCase() !== dest.id.toLowerCase()
  );

  return (
    <main className="relative min-h-screen bg-[#F7F4EC] text-[#152F29] selection:bg-[#BE6543] selection:text-white">
      {/* Global Navigation Header */}
      <SiteHeader
        onOpenInquiry={() => setInquiryModalOpen(true)}
        onOpenSearch={() => setInquiryModalOpen(true)}
      />

      {/* Hero Banner Section */}
      <section className="relative min-h-[80vh] lg:min-h-[88vh] flex items-end pb-16 md:pb-24 pt-32 overflow-hidden bg-black">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={dest.heroImage}
            alt={dest.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transform scale-102 transition-transform duration-1000"
          />
          {/* Multi-layered cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-white/70 mb-5 font-medium">
            <Link
              href="/"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/#destinations" className="hover:text-white transition-colors">
              Destinations
            </Link>
            <span>/</span>
            <span className="text-[#C8A66A] font-semibold">{dest.name}</span>
          </div>

          <div className="max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#BE6543] text-white shadow-sm">
                {dest.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md text-white border border-white/25">
                {dest.region} • {dest.country}
              </span>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-[#C8A66A]/90 text-[#152F29]">
                <Star className="w-3.5 h-3.5 fill-[#152F29] text-[#152F29]" />
                <span>{dest.rating}</span>
                <span className="font-normal">({dest.reviewsCount})</span>
              </div>
            </div>

            {/* Main Destination Title */}
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] mb-4">
              {dest.name}
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-xl text-white/90 font-light max-w-2xl leading-relaxed mb-8">
              &ldquo;{dest.tagline}&rdquo;
            </p>

            {/* Key Trip Meta Strip & CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15">
                <Clock className="w-4 h-4 text-[#C8A66A]" />
                <span className="text-xs sm:text-sm font-medium text-white">
                  {dest.duration}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15">
                <span className="text-xs text-white/70">From</span>
                <span className="text-sm sm:text-base font-bold text-[#C8A66A]">
                  ${dest.startingPrice.toLocaleString()}
                </span>
                <span className="text-xs text-white/70">/ person</span>
              </div>

              {/* Action Buttons */}
              <a
                href="#destination-inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#BE6543] hover:bg-[#a85738] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#itinerary"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer"
              >
                <span>View Daily Itinerary</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Essentials & Fast Facts Bar */}
      <section className="relative z-20 -mt-8 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFCF5] rounded-3xl p-6 md:p-8 shadow-xl border border-[#DCD4C6]/80 grid grid-cols-2 md:grid-cols-5 gap-6">
          {/* Best Season */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#EEE8DC] flex items-center justify-center text-[#BE6543] shrink-0">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#686B64] block">
                Best Season
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#152F29] leading-tight block mt-0.5">
                {dest.bestSeason}
              </span>
            </div>
          </div>

          {/* Ideal For */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#EEE8DC] flex items-center justify-center text-[#173B32] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#686B64] block">
                Ideal For
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#152F29] leading-tight block mt-0.5">
                {dest.idealFor}
              </span>
            </div>
          </div>

          {/* Visa Requirements */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#EEE8DC] flex items-center justify-center text-[#BE6543] shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#686B64] block">
                Visa Entry
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#152F29] leading-tight block mt-0.5">
                {dest.visaPolicy}
              </span>
            </div>
          </div>

          {/* Local Currency */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#EEE8DC] flex items-center justify-center text-[#173B32] shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#686B64] block">
                Currency
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#152F29] leading-tight block mt-0.5">
                {dest.currency}
              </span>
            </div>
          </div>

          {/* Language */}
          <div className="col-span-2 md:col-span-1 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#EEE8DC] flex items-center justify-center text-[#BE6543] shrink-0">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#686B64] block">
                Language
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#152F29] leading-tight block mt-0.5">
                {dest.language}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Overview & Photo Showcase */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative & Voyagrie Promise */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8DC] border border-[#DCD4C6] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
                <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#173B32]">
                  DESTINATION PROFILE
                </span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#152F29] tracking-tight leading-tight mb-6">
                Experience the Unrivaled
                <br />
                <span className="italic text-[#BE6543] font-normal">
                  Magic of {dest.name}
                </span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#4A514B] leading-relaxed mb-8">
                {dest.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Voyagrie Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FFFCF5] border border-[#DCD4C6]/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#173B32] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-[#C8A66A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#152F29] uppercase tracking-wide">
                      Bespoke Luxury Stays
                    </h4>
                    <p className="text-xs text-[#686B64] mt-1">
                      Private pool villas, 5-star heritage suites, and iconic ocean resorts.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFFCF5] border border-[#DCD4C6]/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#173B32] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-[#C8A66A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#152F29] uppercase tracking-wide">
                      Private Chauffeur & Guides
                    </h4>
                    <p className="text-xs text-[#686B64] mt-1">
                      Dedicated vehicle and certified English-speaking destination experts.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFFCF5] border border-[#DCD4C6]/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#173B32] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-[#C8A66A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#152F29] uppercase tracking-wide">
                      VIP Fast-Track Access
                    </h4>
                    <p className="text-xs text-[#686B64] mt-1">
                      Skip general queues at temples, monuments, and marine charters.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFFCF5] border border-[#DCD4C6]/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#173B32] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#C8A66A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#152F29] uppercase tracking-wide">
                      24/7 Travel Concierge
                    </h4>
                    <p className="text-xs text-[#686B64] mt-1">
                      Live WhatsApp flight tracking, reservations, and emergency assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Gallery Collage */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="col-span-2 relative h-72 sm:h-80 rounded-3xl overflow-hidden border border-[#DCD4C6] shadow-md group">
                <Image
                  src={dest.galleryImages[0] || dest.heroImage}
                  alt={`${dest.name} gallery`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-semibold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {dest.name} Panorama
                </span>
              </div>

              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-[#DCD4C6] shadow-sm group">
                <Image
                  src={dest.galleryImages[1] || dest.heroImage}
                  alt={`${dest.name} highlight`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-[#DCD4C6] shadow-sm group">
                <Image
                  src={dest.galleryImages[2] || dest.heroImage}
                  alt={`${dest.name} experience`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Highlights & Encounters */}
      <section className="py-16 md:py-24 bg-[#FFFCF5] border-y border-[#DCD4C6]/60">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8DC] border border-[#DCD4C6] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#173B32]">
                CURATED EXPERIENCES
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#152F29] tracking-tight">
              Signature Highlights
              <br />
              <span className="italic text-[#BE6543] font-normal">
                Crafted for Discerning Travellers
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#4A514B] mt-3">
              Unmatched private moments that transcend standard tourism packages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dest.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="group bg-[#F7F4EC] rounded-3xl overflow-hidden border border-[#DCD4C6]/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {highlight.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#173B32]">
                      {highlight.tag}
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-editorial text-lg sm:text-xl font-medium text-[#152F29] group-hover:text-[#BE6543] transition-colors leading-tight mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-[#686B64] leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#DCD4C6]/50 flex items-center text-xs font-semibold text-[#173B32] group-hover:text-[#BE6543] transition-colors">
                    <span>VIP Private Access Included</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Curated Itinerary */}
      <section id="itinerary" className="py-16 md:py-24">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8DC] border border-[#DCD4C6] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
                <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#173B32]">
                  DAILY SCHEDULE
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#152F29] tracking-tight">
                Curated Day-by-Day
                <br />
                <span className="italic text-[#BE6543] font-normal">
                  Suggested Itinerary
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#4A514B] mt-3">
                This itinerary serves as our signature baseline. Every day, timing, and activity can be customized to match your individual preferences.
              </p>
            </div>

            <a
              href="#destination-inquiry"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#152F29] hover:text-[#BE6543] transition-colors group cursor-pointer"
            >
              <span>Request Customization</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Timeline List */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {dest.itinerary.map((item, idx) => {
              const isOpen = expandedDay === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFCF5] rounded-2xl border border-[#DCD4C6]/80 p-5 md:p-6 transition-all shadow-xs hover:border-[#BE6543]/40"
                >
                  <div
                    onClick={() => setExpandedDay(isOpen ? null : idx)}
                    className="flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className="px-3 py-1 rounded-lg bg-[#173B32] text-white text-xs font-bold tracking-wider uppercase shrink-0 mt-0.5">
                        {item.day}
                      </span>
                      <div>
                        <h3 className="font-editorial text-lg sm:text-xl font-medium text-[#152F29] hover:text-[#BE6543] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4A514B] mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="Toggle day itinerary"
                      className="text-[#686B64] hover:text-[#152F29] p-1 shrink-0"
                    >
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Expandable Extra Details */}
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-[#EEE8DC] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#686B64] animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#173B32]" />
                        <span>Private Chauffeur Included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#173B32]" />
                        <span>Gourmet Breakfast & Tasting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#173B32]" />
                        <span>All Entrance Permits Provided</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package Inclusions & Practical Travel Tips */}
      <section className="py-16 md:py-20 bg-[#EEE8DC]/50 border-t border-[#DCD4C6]/60">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Inclusions Card */}
            <div className="bg-[#FFFCF5] rounded-3xl p-6 sm:p-8 border border-[#DCD4C6] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#173B32] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A66A]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#686B64]">
                    COMPREHENSIVE PACKAGE
                  </span>
                  <h3 className="font-editorial text-2xl font-medium text-[#152F29]">
                    What&apos;s Included with Voyagrie
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                {dest.included.map((inc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#173B32] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4A514B] font-medium leading-relaxed">
                      {inc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Tips Card */}
            <div className="bg-[#FFFCF5] rounded-3xl p-6 sm:p-8 border border-[#DCD4C6] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#BE6543] text-white flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#686B64]">
                    LOCAL INSIGHTS
                  </span>
                  <h3 className="font-editorial text-2xl font-medium text-[#152F29]">
                    Essential Travel Advice
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                {dest.travelTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-[#BE6543] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4A514B] leading-relaxed">
                      {tip}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-[#173B32]/5 border border-[#173B32]/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#173B32] block">
                    Have questions about visas or flights?
                  </span>
                  <span className="text-[11px] text-[#686B64]">
                    Our concierge team handles worldwide flight and visa bookings.
                  </span>
                </div>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="px-4 py-2 rounded-full bg-[#173B32] text-white text-xs font-semibold hover:bg-[#092B25] transition-colors shrink-0"
                >
                  Call Specialist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Destination Consultation & Booking Form */}
      <section
        id="destination-inquiry"
        className="py-16 md:py-24 bg-[#0A1F1A] text-white relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#BE6543]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A66A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A66A]" />
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C8A66A]">
                START PLANNING
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Request Your Bespoke {dest.name} Itinerary
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-3 max-w-xl mx-auto">
              Tell us your preferred dates and travel wishes. Our dedicated {dest.name} destination specialist will craft your custom itinerary and exact quote within 24 hours.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-[#122A23] rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-10 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#173B32] border border-[#C8A66A] flex items-center justify-center mx-auto mb-4 text-[#C8A66A]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-white mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="text-[#C8A66A] font-semibold">{formData.fullName || "valued traveller"}</span>. Our senior destination specialist for {dest.name} has received your preferences and is curating your personalized quotation.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#BE6543] text-white text-xs font-semibold hover:bg-[#a85738] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Concierge Now</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        travelDates: "",
                        travellers: "2 Adults",
                        travelStyle: "Luxury & Relaxation",
                        notes: "",
                      });
                    }}
                    className="px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Preselected Destination Indicator */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <MapPin className="w-4 h-4 text-[#C8A66A]" />
                    <span>Destination Selected:</span>
                    <span className="font-bold text-white">
                      {dest.name}, {dest.country}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#C8A66A]">
                    Starting at ${dest.startingPrice.toLocaleString()}/pp
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm placeholder-white/30 focus:outline-none focus:border-[#C8A66A] transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="e.g. eleanor@luxurytravel.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm placeholder-white/30 focus:outline-none focus:border-[#C8A66A] transition-colors"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="e.g. +1 (555) 345-6789"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm placeholder-white/30 focus:outline-none focus:border-[#C8A66A] transition-colors"
                    />
                  </div>

                  {/* Preferred Travel Month / Dates */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                      Preferred Dates / Month *
                    </label>
                    <input
                      type="text"
                      name="travelDates"
                      required
                      value={formData.travelDates}
                      onChange={handleFormChange}
                      placeholder="e.g. October 2026 or Spring 2027"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm placeholder-white/30 focus:outline-none focus:border-[#C8A66A] transition-colors"
                    />
                  </div>

                  {/* Number of Travellers */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                      Number of Travellers
                    </label>
                    <select
                      name="travellers"
                      value={formData.travellers}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D241E] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#C8A66A] transition-colors"
                    >
                      <option value="1 Solo Traveller">1 Solo Traveller</option>
                      <option value="2 Adults (Couple / Friends)">2 Adults (Couple / Friends)</option>
                      <option value="Small Family (3-4 Members)">Small Family (3-4 Members)</option>
                      <option value="Large Family or Group (5+ Guests)">Large Family or Group (5+ Guests)</option>
                    </select>
                  </div>

                  {/* Travel Style */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                      Travel Style
                    </label>
                    <select
                      name="travelStyle"
                      value={formData.travelStyle}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D241E] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#C8A66A] transition-colors"
                    >
                      <option value="Luxury & Relaxation">Luxury & Relaxation</option>
                      <option value="Honeymoon / Romantic Escapes">Honeymoon / Romantic Escapes</option>
                      <option value="Cultural Heritage & Cuisine">Cultural Heritage & Cuisine</option>
                      <option value="Private Adventure & Sailing">Private Adventure & Sailing</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests / Notes */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    Special Wishes or Specific Inclusions (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleFormChange}
                    placeholder="Tell us about anniversary celebrations, dietary needs, specific excursions, or preferred flight class..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm placeholder-white/30 focus:outline-none focus:border-[#C8A66A] transition-colors"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#BE6543] hover:bg-[#a85738] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting Preferences...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Custom {dest.name} Itinerary & Quote</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-white/50 mt-3">
                    Strict privacy guaranteed. We never share your contact details. No obligations.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8DC] border border-[#DCD4C6] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#173B32]">
                COMMON QUESTIONS
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-[#152F29] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#4A514B] mt-2">
              Everything you need to prepare for your journey to {dest.name}.
            </p>
          </div>

          <div className="space-y-4">
            {dest.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFCF5] rounded-2xl border border-[#DCD4C6]/80 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-editorial text-base sm:text-lg font-medium text-[#152F29]">
                      {faq.question}
                    </span>
                    <span className="text-[#686B64] shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#BE6543]" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4A514B] leading-relaxed border-t border-[#EEE8DC] animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Other Destinations Strip */}
      <section className="py-16 md:py-24 bg-[#FFFCF5] border-t border-[#DCD4C6]/70">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8DC] border border-[#DCD4C6] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543]" />
                <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#173B32]">
                  WORLDWIDE PORTFOLIO
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-[#152F29] tracking-tight">
                Explore More Destinations
              </h2>
            </div>
            <Link
              href="/#destinations"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#152F29] hover:text-[#BE6543] transition-colors group cursor-pointer"
            >
              <span>View All Locations</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {otherDestinations.slice(0, 6).map((other) => (
              <Link
                key={other.id}
                href={`/destinations/${other.id}`}
                className="group bg-[#F7F4EC] rounded-2xl overflow-hidden border border-[#DCD4C6]/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={other.image}
                    alt={other.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 16vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                    {other.region}
                  </span>
                </div>
                <div className="p-3.5 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-editorial text-base font-medium text-[#152F29] group-hover:text-[#BE6543] transition-colors">
                      {other.name}
                    </h4>
                    <span className="text-[11px] text-[#686B64] block mt-0.5">
                      From ${(other.startingPrice || 1450).toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#DCD4C6]/50 flex items-center justify-between text-[11px] text-[#173B32] font-semibold group-hover:text-[#BE6543]">
                    <span>View Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <SiteFooter />

      {/* Floating Action Buttons */}
      <FloatingActionButtons />

      {/* Interactive Bespoke Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultDestination={`${dest.name}, ${dest.country}`}
        defaultPackage={`${dest.name} (${dest.duration})`}
      />
    </main>
  );
};
