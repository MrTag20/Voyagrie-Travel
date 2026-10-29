export interface Destination {
  id: string;
  name: string;
  region: string;
  image: string;
  badge?: string;
  duration?: string;
  rating?: number;
  reviewsCount?: string;
  tagline?: string;
  startingPrice?: number;
  packagesCount?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  category: "Honeymoon" | "Adventure" | "Cultural" | "Family" | "Luxury" | "Group Tours";
  duration: string;
  rating: number;
  reviewsCount: string;
  price: number;
  image: string;
  tagline: string;
}

export interface TravelStory {
  id: string;
  title: string;
  destination: string;
  type: "photo" | "video";
  category: "Couples" | "Families" | "Adventure" | "Culture";
  image: string;
  videoUrl?: string;
  caption?: string;
  travellerName?: string;
  avatar?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  trip: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const siteConfig = {
  brand: "Voyagrie",
  tagline: "TRAVEL BEYOND BORDERS",
  phone: "+1 (646) 870-9033",
  phoneDisplay: "Call local expert",
  heroVideo: "/videos/hero-video.mp4",
  heroVideoRaw: "/videos/Video%20Project%209.mp4",
  heroVideoAlt: "/videos/Video Project 9.mp4",
  heroVideoFallback: "/videos/hero-travel.mp4",
  heroPoster: "/images/hero-poster.webp",
  rotatingGlobeVideo: "/videos/download.mp4",
  rotatingGlobeVideoFallback: "/videos/rotating-earth.mp4",
  rotatingGlobeGif: "/images/rotating-earth.gif",
  rotatingGlobePoster: "/images/rotating-earth-poster.webp",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Destinations", href: "#destinations" },
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  eyebrow: "EXPLORE THE EXTRAORDINARY",
  headlinePrefix: "Your Next",
  headlineMiddle: "Adventure",
  headlineHighlight: "Awaits",
  description: "From iconic landmarks to hidden gems, we create personalised travel experiences across the globe.",
  primaryCta: "Explore Destinations",
  secondaryCta: "Watch Video",
  trustNumber: "10,000+",
  trustLabel: "Trusted by travellers worldwide",
  rating: "4.9/5",
  reviewsCount: "2.4k reviews",
  floatingStampText: "TRAVEL • EXPLORE • EXPERIENCE • REPEAT",
  floatingScript: "Collect Moments Not Things",
  destinationCard: {
    title: "Santorini, Greece",
    subtitle: "A dream in blue & white",
  },
  avatars: [
    "/images/avatar-1.webp",
    "/images/avatar-2.webp",
    "/images/avatar-3.webp",
    "/images/avatar-4.webp",
  ],
};

export const searchTabs = [
  { id: "packages", label: "Holiday Packages", icon: "Palmtree" },
  { id: "flights", label: "Flights", icon: "Plane" },
  { id: "hotels", label: "Hotels", icon: "Hotel" },
  { id: "visa", label: "Visa Assistance", icon: "FileText" },
  { id: "custom", label: "Custom Trip", icon: "Compass" },
];

export const destinationsList = [
  "Bali, Indonesia",
  "Swiss Alps, Switzerland",
  "Kyoto & Tokyo, Japan",
  "Dubai, United Arab Emirates",
  "Male, Maldives",
  "Cappadocia, Turkey",
  "Amalfi Coast, Italy",
  "Reykjavik, Iceland",
  "Maasai Mara, Kenya",
  "Santorini, Greece",
];

export const destinationCards: Destination[] = [
  {
    id: "bali",
    name: "Bali",
    region: "Indonesia",
    image: "/images/dest-bali.webp",
    badge: "TROPICAL RETREAT",
    duration: "7-10 Days",
    rating: 4.9,
    reviewsCount: "380+",
    tagline: "Emerald rice terraces, clifftop shrines, and private infinity villas.",
    startingPrice: 1350,
  },
  {
    id: "switzerland",
    name: "Switzerland",
    region: "Europe",
    image: "/images/dest-switzerland.webp",
    badge: "ALPINE WONDER",
    duration: "6-8 Days",
    rating: 4.95,
    reviewsCount: "510+",
    tagline: "Snow-capped peaks, panoramic rail journeys, and pristine glacial lakes.",
    startingPrice: 2450,
  },
  {
    id: "japan",
    name: "Japan",
    region: "Asia",
    image: "/images/dest-japan.webp",
    badge: "HERITAGE & FUTURE",
    duration: "9-12 Days",
    rating: 4.92,
    reviewsCount: "640+",
    tagline: "Kyoto ancient shrines, bamboo groves, and Tokyo Michelin culinary tours.",
    startingPrice: 2890,
  },
  {
    id: "dubai",
    name: "Dubai",
    region: "UAE",
    image: "/images/dest-dubai.webp",
    badge: "MODERN LUXURY",
    duration: "5-7 Days",
    rating: 4.88,
    reviewsCount: "420+",
    tagline: "Desert glamping under starlight, futuristic architecture, and marina yachts.",
    startingPrice: 1750,
  },
  {
    id: "maldives",
    name: "Maldives",
    region: "Indian Ocean",
    image: "/images/dest-maldives.webp",
    badge: "OVERWATER OASIS",
    duration: "5-8 Days",
    rating: 4.98,
    reviewsCount: "730+",
    tagline: "Secluded coral lagoons, private overwater bungalows, and vibrant reef life.",
    startingPrice: 2950,
  },
  {
    id: "turkey",
    name: "Turkey",
    region: "Europe",
    image: "/images/dest-turkey.webp",
    badge: "ANATOLIAN MAGIC",
    duration: "7-9 Days",
    rating: 4.9,
    reviewsCount: "460+",
    tagline: "Cappadocia dawn hot air balloons, Bosphorus sunsets, and Byzantine history.",
    startingPrice: 1650,
  },
];

export const trustStats = [
  { label: "Destinations", value: "50+" },
  { label: "Happy Travellers", value: "10,000+" },
  { label: "Average Rating", value: "4.8/5" },
  { label: "Trusted Travel Partner", value: "Global" },
  { label: "Dedicated Support", value: "24/7" },
];

export const whyVoyagrieData = {
  eyebrow: "WHY CHOOSE VOYAGRIE",
  headlinePrefix: "More Than a Trip,",
  headlineMiddle: "A Better Way to",
  headlineHighlight: "See the World.",
  description: "We don't just plan trips — we craft meaningful experiences with local expertise, personalised planning and a passion for exploration.",
  cta: "Our Story",
  handwrittenPhrase: "Different Places, New Stories, Same You",
  stampText: "EXPLORE • DREAM • DISCOVER",
  benefits: [
    {
      id: "planning",
      title: "Personalised Planning",
      description: "Itineraries tailored to your style, pace and budget.",
      icon: "CalendarDays",
    },
    {
      id: "partners",
      title: "Trusted Global Partners",
      description: "Reliable services and local expertise worldwide.",
      icon: "ShieldCheck",
    },
    {
      id: "curated",
      title: "Curated & Authentic Experiences",
      description: "Handpicked destinations and unique activities.",
      icon: "Mountain",
    },
    {
      id: "support",
      title: "24/7 Support",
      description: "Assistance before, during and after your trip.",
      icon: "Headphones",
    },
  ],
};

export const packageCategories = [
  "All",
  "Honeymoon",
  "Family",
  "Adventure",
  "Luxury",
  "Cultural",
  "Group Tours",
] as const;

export const packagesData: PackageItem[] = [
  {
    id: "maldives-escape",
    name: "Maldives Escape",
    category: "Honeymoon",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewsCount: "1.2k",
    price: 1299,
    image: "/images/pkg-maldives.webp",
    tagline: "Private overwater villa retreat with sunset dolphin cruise",
  },
  {
    id: "swiss-alps-explorer",
    name: "Swiss Alps Explorer",
    category: "Adventure",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviewsCount: "940",
    price: 1499,
    image: "/images/pkg-switzerland.webp",
    tagline: "Panoramic Glacier Express journey and alpine mountain peaks",
  },
  {
    id: "japan-discovery",
    name: "Japan Discovery",
    category: "Cultural",
    duration: "8 Days / 7 Nights",
    rating: 4.8,
    reviewsCount: "1.1k",
    price: 1799,
    image: "/images/pkg-japan.webp",
    tagline: "Ancient temples, cherry blossoms, and Tokyo culinary tours",
  },
  {
    id: "european-highlights",
    name: "European Highlights",
    category: "Family",
    duration: "10 Days / 9 Nights",
    rating: 4.7,
    reviewsCount: "890",
    price: 1999,
    image: "/images/pkg-europe.webp",
    tagline: "Scenic Mediterranean coastlines, historic villages, and castles",
  },
];

export const storyCategories = [
  "All",
  "Photos",
  "Videos",
  "Couples",
  "Families",
  "Adventure",
  "Culture",
] as const;

export const travelStoriesData: TravelStory[] = [
  {
    id: "story-maldives",
    title: "Our Maldives Trip",
    destination: "Maldives",
    type: "video",
    category: "Couples",
    image: "/images/travel-stories/story-featured.webp",
    caption: "A dream come true! Crystal turquoise lagoons and private sunsets.",
    travellerName: "Aarav & Maya",
    avatar: "/images/avatar-1.webp",
  },
  {
    id: "story-cappadocia",
    title: "Sunrise Over Fairy Chimneys",
    destination: "Cappadocia, Turkey",
    type: "photo",
    category: "Adventure",
    image: "/images/travel-stories/story-cappadocia.webp",
    caption: "Watching hundred balloons float in the morning glow.",
  },
  {
    id: "story-bali",
    title: "Morning Mist River Cruise",
    destination: "Bali, Indonesia",
    type: "photo",
    category: "Couples",
    image: "/images/travel-stories/story-bali.webp",
    caption: "Quiet sunrise paddle through emerald river channels.",
  },
  {
    id: "story-iceland",
    title: "Celestial Northern Lights",
    destination: "Iceland",
    type: "photo",
    category: "Adventure",
    image: "/images/travel-stories/story-iceland.webp",
    caption: "Dancing green aurora over glacial fjords.",
  },
  {
    id: "story-kenya",
    title: "Majestic Elephant Crossing",
    destination: "Kenya Safari",
    type: "photo",
    category: "Families",
    image: "/images/travel-stories/story-kenya.webp",
    caption: "Encountering wild elephant herds in the golden savannah.",
  },
  {
    id: "story-kyoto",
    title: "Cherry Blossoms of Gion",
    destination: "Kyoto, Japan",
    type: "photo",
    category: "Culture",
    image: "/images/travel-stories/story-kyoto.webp",
    caption: "Traditional wooden teahouses flanked by pink sakura blossoms.",
  },
  {
    id: "story-swiss",
    title: "Above the Alpine Clouds",
    destination: "Switzerland",
    type: "photo",
    category: "Adventure",
    image: "/images/travel-stories/story-swiss.webp",
    caption: "High alpine ridge hike overlooking the Lauterbrunnen valley.",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Arjun Mishra",
    trip: "Switzerland Trip",
    avatar: "/images/avatar-2.webp",
    rating: 5,
    quote: "Our Europe trip was perfectly planned, from flights to stays to local experiences, everything was taken care of. Truly a hassle-free and memorable journey!",
  },
  {
    id: "test-2",
    name: "Priya & Karan",
    trip: "Maldives Trip",
    avatar: "/images/avatar-3.webp",
    rating: 5,
    quote: "The team customized our honeymoon in the Maldives and it was beyond amazing. Every detail was perfect and the support was excellent.",
  },
  {
    id: "test-3",
    name: "Rohit & Sneha",
    trip: "Japan Trip",
    avatar: "/images/avatar-4.webp",
    rating: 5,
    quote: "Professional, responsive and genuinely caring. They made our family trip to Japan so special. Highly recommended!",
  },
];

export const finalCtaData = {
  eyebrow: "START YOUR JOURNEY",
  headlinePrefix: "Ready to Explore",
  headlineHighlight: "the World?",
  description: "Let us create a journey that's uniquely yours. Discover, explore and make memories for a lifetime.",
  primaryButton: "Plan Your Trip",
  secondaryButton: "Talk to Our Expert",
  videoButton: "Watch Full Video 1:30s",
  backgroundImage: "/images/cta-background.webp",
};

export const footerData = {
  brandDescription: "Crafting extraordinary travel experiences across the globe. Your trusted partner in exploring the world.",
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "Destinations", href: "#destinations" },
    { label: "Packages", href: "#packages" },
    { label: "Experiences", href: "#stories" },
    { label: "Visa & Support", href: "#contact" },
    { label: "About Us", href: "#stories" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    "Holiday Packages",
    "Flight Bookings",
    "Hotel Reservations",
    "Visa Assistance",
    "Custom Itineraries",
    "Group & Corporate Travel",
    "Travel Insurance",
  ],
  popularDestinations: [
    "Bali",
    "Maldives",
    "Switzerland",
    "Japan",
    "Dubai",
    "Turkey",
    "Italy",
  ],
  thumbnails: [
    "/images/dest-bali.webp",
    "/images/dest-switzerland.webp",
    "/images/dest-japan.webp",
    "/images/dest-maldives.webp",
  ],
};
