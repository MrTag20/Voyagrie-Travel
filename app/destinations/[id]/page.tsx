import React, { Suspense } from "react";
import type { Metadata } from "next";
import { destinationDetailsData, siteConfig } from "@/data/travel-content";
import { DestinationDetailView } from "@/components/destination-detail-view";

interface DestinationPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [
    { id: "bali" },
    { id: "thailand" },
    { id: "switzerland" },
    { id: "japan" },
    { id: "dubai" },
    { id: "maldives" },
    { id: "turkey" },
  ];
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { id } = await params;
  const destKey = (id || "bali").toLowerCase();
  const dest = destinationDetailsData[destKey] || destinationDetailsData["bali"];

  return {
    title: `${dest.name} Travel & Luxury Itineraries | ${siteConfig.brand}`,
    description: `${dest.tagline} Custom itineraries, 5-star private villas, and dedicated chauffeurs with ${siteConfig.brand}.`,
    openGraph: {
      title: `${dest.name} | ${siteConfig.brand}`,
      description: dest.tagline,
      images: [
        {
          url: dest.heroImage,
          alt: dest.name,
        },
      ],
    },
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { id } = await params;

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F7F4EC] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#BE6543] border-t-transparent animate-spin" />
        </div>
      }
    >
      <DestinationDetailView destinationId={id} />
    </Suspense>
  );
}
