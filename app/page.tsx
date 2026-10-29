"use client";

import React, { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { HeroVideo } from "@/components/hero-video";
import { TravelSearchPanel } from "@/components/travel-search-panel";
import dynamic from "next/dynamic";
import { DestinationStrip } from "@/components/destination-strip";
import { TravelStatBar } from "@/components/travel-stat-bar";
import { WhyTravelWithUs } from "@/components/why-travel-with-us";
import { OurServices } from "@/components/our-services";
import { PackageCarousel } from "@/components/package-carousel";
import { TravelStoriesGallery } from "@/components/travel-stories-gallery";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { FloatingActionButtons } from "@/components/floating-action-buttons";
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider";
import { Destination, PackageItem } from "@/data/travel-content";

const InquiryModal = dynamic(
  () => import("@/components/inquiry-modal").then((mod) => mod.InquiryModal),
  { ssr: false }
);

export default function HomePage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const handleOpenInquiry = (dest?: string, pkg?: string) => {
    if (dest) setSelectedDestination(dest);
    if (pkg) setSelectedPackage(pkg);
    setInquiryOpen(true);
  };

  const handleDestinationSelect = (dest: Destination) => {
    handleOpenInquiry(`${dest.name}, ${dest.region}`);
  };

  const handlePackageSelect = (pkg: PackageItem) => {
    handleOpenInquiry(pkg.name, `${pkg.name} (${pkg.duration})`);
  };

  const handleSearchSubmit = (params: {
    tab: string;
    destination: string;
    date: string;
    travellers: string;
  }) => {
    handleOpenInquiry(params.destination, `${params.tab} — ${params.travellers}`);
  };

  return (
    <main className="relative min-h-screen bg-[#F7F4EC] text-[#152F29] selection:bg-[#BE6543] selection:text-white">
      <ScrollRevealProvider>
        {/* Global Navigation Bar */}
        <SiteHeader
          onOpenInquiry={() => handleOpenInquiry()}
          onOpenSearch={() => handleOpenInquiry()}
        />

        {/* Cinematic Full-Screen Video Hero Section */}
        <HeroVideo
          onExplore={() => {
            const el = document.getElementById("packages");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Floating Trip Search Panel */}
        <TravelSearchPanel onSearch={handleSearchSubmit} />

        {/* Trust Metrics Bar */}
        <TravelStatBar />

        {/* Why Travel With Us (Editorial Visual & Pillars) */}
        <WhyTravelWithUs
          onOurStory={() => {
            const el = document.getElementById("contact");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          onExploreFeature={(feature) => handleOpenInquiry("", feature)}
        />

        {/* Curated Locations / Popular Destinations Strip */}
        <DestinationStrip
          onSelectDestination={handleDestinationSelect}
          onViewAllDestinations={() => handleOpenInquiry("", "All Global Destinations")}
        />

        {/* Our Services (Complete Travel Solutions Panoramic Banner) */}
        <OurServices
          onSelectService={(service) => handleOpenInquiry("", `Service: ${service}`)}
          onViewAllServices={() => handleOpenInquiry("", "All Services Inquiry")}
        />

        {/* Popular Packages Carousel */}
        <PackageCarousel
          onSelectPackage={handlePackageSelect}
          onViewAll={() => handleOpenInquiry("", "All Global Packages")}
        />

        {/* Real Journeys & Travel Stories (Dark Contrast Section) */}
        <TravelStoriesGallery />

        {/* Testimonials Carousel */}
        <TestimonialCarousel />

        {/* Unified 'START YOUR JOURNEY' & Contact Section */}
        <ContactSection />

        {/* Premium Dark Footer */}
        <SiteFooter />
      </ScrollRevealProvider>

      {/* Floating WhatsApp and AI Travel Concierge Assistant */}
      <FloatingActionButtons />

      {/* Interactive Bespoke Inquiry & Concierge Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => {
          setInquiryOpen(false);
          setSelectedDestination("");
          setSelectedPackage("");
        }}
        defaultDestination={selectedDestination}
        defaultPackage={selectedPackage}
      />
    </main>
  );
}
