import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voyagrie — Travel Beyond Borders | Premium International Travel Agency",
  description:
    "From iconic landmarks to hidden gems, we craft bespoke luxury journeys, holiday packages, flights, hotels, and custom travel experiences worldwide.",
  keywords: [
    "luxury travel agency",
    "international holiday packages",
    "custom itineraries",
    "honeymoon destinations",
    "visa assistance",
    "Voyagrie",
  ],
  openGraph: {
    title: "Voyagrie — Travel Beyond Borders",
    description: "Curated extraordinary journeys and bespoke travel across the globe.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#173B32",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${caveat.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F7F4EC] text-[#152F29] font-sans selection:bg-[#BE6543] selection:text-white">
        {children}
      </body>
    </html>
  );
}
