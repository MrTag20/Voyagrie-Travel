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

export interface DestinationDetail {
  id: string;
  name: string;
  country: string;
  region: string;
  heroImage: string;
  galleryImages: string[];
  badge: string;
  duration: string;
  bestSeason: string;
  idealFor: string;
  visaPolicy: string;
  currency: string;
  language: string;
  rating: number;
  reviewsCount: string;
  startingPrice: number;
  tagline: string;
  overview: string[];
  highlights: {
    title: string;
    description: string;
    image: string;
    tag?: string;
  }[];
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];
  included: string[];
  travelTips: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
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
  heroVideoMobile: "/videos/hero-video-mobile.mp4",
  heroPoster: "/images/hero-poster.webp",
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
  {
    id: "thailand",
    name: "Thailand",
    region: "Southeast Asia",
    image: "/images/dest-thailand.webp",
    badge: "TROPICAL PARADISE",
    duration: "7-10 Days",
    rating: 4.93,
    reviewsCount: "520+",
    tagline: "Turquoise Andaman lagoons, golden Buddhist sanctuaries, and vibrant night markets.",
    startingPrice: 1290,
  },
];

export const destinationDetailsData: Record<string, DestinationDetail> = {
  bali: {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "Southeast Asia",
    heroImage: "/images/dest-bali.webp",
    galleryImages: ["/images/dest-bali.webp", "/images/travel-stories/story-bali.webp", "/images/contact-bg.jpg"],
    badge: "TROPICAL RETREAT",
    duration: "7 - 10 Days",
    bestSeason: "April to October (Dry & Sunny)",
    idealFor: "Couples, Honeymooners & Wellness",
    visaPolicy: "Visa on Arrival (30 Days)",
    currency: "Indonesian Rupiah (IDR)",
    language: "Balinese, Indonesian & English",
    rating: 4.95,
    reviewsCount: "420+ Verified Reviews",
    startingPrice: 1350,
    tagline: "Emerald rice terraces, sacred clifftop sanctuaries, and secluded luxury villas.",
    overview: [
      "Known affectionately as the 'Island of the Gods', Bali enchants with its dramatic volcanic landscapes, verdant jungle ravines of Ubud, world-class beach clubs of Seminyak, and sacred clifftop shrines overlooking the Indian Ocean.",
      "Voyagrie curates bespoke private villa stays, private chauffeur excursions, floating breakfasts, and skip-the-line VIP temple access designed exclusively around your style, pace, and passions.",
    ],
    highlights: [
      {
        title: "Ubud Sacred Monkey Forest & Tegallalang Terraces",
        description: "Stroll through centuries-old banyan trees and tiered emerald terraces with a dedicated local historian.",
        image: "/images/dest-bali.webp",
        tag: "CULTURE & NATURE",
      },
      {
        title: "Uluwatu Clifftop Temple & Sunset Kecak Fire Dance",
        description: "Witness rhythmic fire dancing against the backdrop of roaring ocean waves atop a 70-meter limestone cliff.",
        image: "/images/contact-bg.jpg",
        tag: "SACRED HERITAGE",
      },
      {
        title: "Private Nusa Penida Island Catamaran",
        description: "Sail across crystal waters to Kelingking T-Rex cliff and snorkel with wild manta rays in sheltered coral bays.",
        image: "/images/travel-stories/story-bali.webp",
        tag: "PRIVATE SAILING",
      },
      {
        title: "Seminyak & Canggu Sunset Dining",
        description: "Indulge in beachfront Mediterranean dining, private chef seafood barbecues, and reserved coastal cabanas.",
        image: "/images/services-bg.jpg",
        tag: "GASTRONOMY",
      },
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "VIP Arrival & Seminyak Sunset Welcome",
        description: "Private airport meet & greet with fast-track immigration. Chauffeur transfer to your 5-star beachfront suite, followed by a welcome sunset dinner overlooking the Indian Ocean.",
      },
      {
        day: "Day 02",
        title: "Tanah Lot Sea Temple & Coastal Discovery",
        description: "Morning wellness spa treatment. Afternoon private excursion to Tanah Lot offshore pagoda for an iconic sunset, followed by artisan cocktail tasting in Canggu.",
      },
      {
        day: "Day 03",
        title: "Transfer to Highland Ubud & Private Pool Villa",
        description: "Journey into the lush Ayung River valley. Check in to your private pool villa suspended over jungle foliage. Evening traditional Balinese gamelan dinner.",
      },
      {
        day: "Day 04",
        title: "Tegallalang Terraces & Tirta Empul Holy Water Blessing",
        description: "Dawn photography walk through emerald rice paddies. Participate in an authentic melukat water purification ceremony guided by a Balinese temple elder.",
      },
      {
        day: "Day 05",
        title: "Private Yacht Charter to Nusa Penida",
        description: "Board a luxury speedboat to explore Broken Beach, Angel's Billabong, and snorkel with majestic manta rays in crystal-clear azure waters.",
      },
      {
        day: "Day 06",
        title: "Mount Batur Sunrise Jeep & Organic Coffee Tasting",
        description: "4x4 sunrise drive over volcanic black lava fields with panoramic views of Lake Batur. Visit an organic single-origin coffee estate in Kintamani.",
      },
      {
        day: "Day 07",
        title: "Uluwatu Clifftop Fire Dance & Farewell Feast",
        description: "Afternoon drive to the southern peninsula. Reserved front-row seats for the sunset Kecak dance, concluding with a beachfront candlelit Jimbaran seafood feast.",
      },
      {
        day: "Day 08",
        title: "Floating Breakfast & Departure",
        description: "Enjoy a signature floating villa breakfast and leisurely morning swim before your private chauffeur transfers you to Denpasar International Airport.",
      },
    ],
    included: [
      "7 Nights in 5-Star Private Pool Villas & Beachfront Resorts",
      "Private Air-Conditioned Vehicle & Dedicated Chauffeur throughout",
      "English-Speaking Destination Expert & Licensed Cultural Guides",
      "Daily Gourmet Breakfasts & Curated Tasting Menus",
      "All VIP Attraction, Sanctuary & Fast-Track Entry Tickets",
      "Private Nusa Penida Speedboat Charter with Snorkeling Gear",
      "24/7 Dedicated Voyagrie Concierge & WhatsApp Travel Support",
    ],
    travelTips: [
      "Dress respectfully with a sarong when entering temples (provided on our private tours).",
      "US Dollars, Euros, and credit cards are widely accepted at resorts and restaurants.",
      "Tipping is customary and warmly appreciated for local drivers and villa attendants.",
      "Standard electrical plug type C and F (230V, 50Hz); international adaptors are provided.",
    ],
    faqs: [
      {
        question: "What is the best time of year to visit Bali?",
        answer: "The dry season from April through October offers the sunniest skies, calmest ocean conditions, and comfortable evening breezes.",
      },
      {
        question: "Do I need a visa before traveling to Bali?",
        answer: "Most passport holders can obtain a 30-day Visa on Arrival (VoA) online (e-VoA) or upon landing at Ngurah Rai International Airport for approximately $35 USD.",
      },
      {
        question: "Can itineraries be customized?",
        answer: "Every Voyagrie journey is 100% bespoke. Our destination curators will tailor dates, resort categories, and activity choices to your exact preferences.",
      },
    ],
  },
  thailand: {
    id: "thailand",
    name: "Thailand",
    country: "Thailand",
    region: "Southeast Asia",
    heroImage: "/images/dest-thailand.webp",
    galleryImages: ["/images/dest-thailand.webp", "/images/dest-thailand-islands.webp", "/images/contact-bg.jpg"],
    badge: "TROPICAL PARADISE",
    duration: "7 - 10 Days",
    bestSeason: "November to April (Cool & Dry)",
    idealFor: "Island Escapes, Culinary Lovers & Culture",
    visaPolicy: "Visa Exemption (60 Days)",
    currency: "Thai Baht (THB)",
    language: "Thai & English widely spoken",
    rating: 4.93,
    reviewsCount: "520+ Verified Reviews",
    startingPrice: 1290,
    tagline: "Turquoise Andaman lagoons, golden Buddhist sanctuaries, and vibrant night markets.",
    overview: [
      "From the glittering golden spires of Bangkok's Grand Palace to the surreal limestone monoliths rising out of Phuket and Krabi's emerald waters, Thailand offers an intoxicating blend of heritage, cuisine, and tropical bliss.",
      "Voyagrie crafts seamless journeys linking dynamic royal cities with serene hillside pool villas, private longtail island charters, and ethical wildlife sanctuaries.",
    ],
    highlights: [
      {
        title: "Phi Phi Islands & Maya Bay Private Catamaran",
        description: "Cruise through legendary limestone sea karsts, hidden emerald lagoons, and powdery coral beaches before crowd arrivals.",
        image: "/images/dest-thailand-islands.webp",
        tag: "ISLAND EXPEDITION",
      },
      {
        title: "Bangkok Royal Palace & Michelin Street Food",
        description: "Explore the sacred Temple of the Emerald Buddha followed by a guided evening tuk-tuk tasting of legendary Michelin-awarded stalls.",
        image: "/images/dest-japan.webp",
        tag: "HERITAGE & CUISINE",
      },
      {
        title: "Ethical Elephant Sanctuary Care Experience",
        description: "Walk alongside, prepare wholesome treats, and bathe rescued Asian elephants in a peaceful river valley sanctuary.",
        image: "/images/services-bg.jpg",
        tag: "WILDLIFE CONSERVATION",
      },
      {
        title: "Phuket Hillside Clifftop Villa Retreat",
        description: "Unwind in five-star suites overlooking the Andaman Sea, with private infinity pools and dedicated personal butler service.",
        image: "/images/dest-bali.webp",
        tag: "LUXURY RETREAT",
      },
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Bangkok & Chao Phraya River Cruise",
        description: "VIP Fast-Track airport assistance and private transfer to your riverside luxury hotel. Evening private cruise aboard a restored teak rice barge with dinner.",
      },
      {
        day: "Day 02",
        title: "Grand Palace, Wat Pho & Michelin Street Eats",
        description: "Morning private access to the Grand Palace and the Reclining Buddha. Afternoon traditional Thai massage, followed by an evening culinary safari through Chinatown.",
      },
      {
        day: "Day 03",
        title: "Flight to Phuket & Clifftop Villa Check-in",
        description: "Short domestic flight to Phuket. Private scenic transfer to your luxury villa overlooking Kamala Bay. Sunset cocktails and beachfront dining.",
      },
      {
        day: "Day 04",
        title: "Private Speedboat to Phi Phi & Bamboo Island",
        description: "Full-day charter to Maya Bay, Pi Leh Lagoon swimming, Viking Cave sightseeing, and snorkeling amidst colorful coral gardens.",
      },
      {
        day: "Day 05",
        title: "Ethical Elephant Sanctuary & Spa Afternoon",
        description: "Visit an accredited humane elephant reserve. Return to the resort for an afternoon of traditional herbal compresses and soothing oil massages.",
      },
      {
        day: "Day 06",
        title: "Phang Nga Bay Sea Caves & James Bond Island",
        description: "Explore towering limestone pinnacles by private longtail boat, kayaking through hidden sea caves and floating fishing villages.",
      },
      {
        day: "Day 07",
        title: "Old Phuket Town Heritage & Sunset Dinner",
        description: "Walking tour of Sino-Portuguese mansions and boutique cafes. Evening private candlelit dinner set directly on the sand.",
      },
      {
        day: "Day 08",
        title: "Leisure Morning & Departure",
        description: "Leisurely breakfast and last-minute beach relaxation before private transfer to Phuket International Airport for your return flight.",
      },
    ],
    included: [
      "7 Nights in 5-Star Luxury Hotels & Private Pool Villas",
      "Domestic Flights between Bangkok and Phuket (Business Class)",
      "Private Vehicle Transfers & Professional English-Speaking Guides",
      "Full-Day Private Speedboat Island Charter with Snorkel Gear",
      "All National Park Permits, Temple Admissions & VIP Access",
      "24/7 Dedicated Concierge Support throughout Thailand",
    ],
    travelTips: [
      "Shoulders and knees must be covered when visiting temples in Bangkok.",
      "The Thai Baht is the official currency; ATMs are widespread across the country.",
      "Thailand is celebrated for warm hospitality; a gentle wai greeting is always welcome.",
    ],
    faqs: [
      {
        question: "When is the best time to visit Thailand?",
        answer: "November to April offers dry, sunny conditions with calm seas, making it the peak season for exploring both Bangkok and the Andaman islands.",
      },
      {
        question: "Is Thailand safe for family and solo travellers?",
        answer: "Thailand is one of the safest and most welcoming travel destinations in the world, with exceptional medical facilities and tourist infrastructure.",
      },
    ],
  },
  switzerland: {
    id: "switzerland",
    name: "Switzerland",
    country: "Switzerland",
    region: "Central Europe",
    heroImage: "/images/dest-switzerland.webp",
    galleryImages: ["/images/dest-switzerland.webp", "/images/pkg-switzerland.webp", "/images/travel-stories/story-swiss.webp"],
    badge: "ALPINE WONDER",
    duration: "6 - 8 Days",
    bestSeason: "June to Sept (Lakes) & Dec to March (Ski)",
    idealFor: "Alpine Luxury, Scenic Rails & Mountain Lovers",
    visaPolicy: "Schengen Visa (Free for US, UK, EU)",
    currency: "Swiss Franc (CHF)",
    language: "German, French, Italian & English",
    rating: 4.95,
    reviewsCount: "510+ Verified Reviews",
    startingPrice: 2450,
    tagline: "Snow-capped peaks, panoramic rail journeys, and pristine glacial lakes.",
    overview: [
      "Switzerland represents the pinnacle of European alpine luxury. Glide through soaring mountain passes on panoramic first-class trains, gaze upon the legendary Matterhorn from a warm cedar hot tub in Zermatt, and cruise across crystal-clear Lake Lucerne surrounded by wildflower meadows.",
      "Voyagrie ensures flawless Swiss travel with private chauffeured transfers, Excellence Class Glacier Express rail bookings, and stays in iconic 5-star palace hotels.",
    ],
    highlights: [
      {
        title: "Glacier Express Excellence Class Journey",
        description: "Traverse 291 bridges and 91 tunnels through soaring mountain passes with a multi-course regional wine tasting menu.",
        image: "/images/pkg-switzerland.webp",
        tag: "PANORAMIC RAIL",
      },
      {
        title: "Matterhorn Glacier Paradise in Zermatt",
        description: "Ascend Europe's highest cable car station at 3,883m to view 38 alpine peaks and explore inside ice caves.",
        image: "/images/dest-switzerland.webp",
        tag: "ALPINE PEAKS",
      },
      {
        title: "Lake Lucerne & Mount Pilatus Golden Roundtrip",
        description: "Scenic steam cruise followed by the world's steepest cogwheel railway and aerial dragon gondola.",
        image: "/images/travel-stories/story-swiss.webp",
        tag: "LAKES & TRAILS",
      },
      {
        title: "Swiss Chocolate & Watchmaking Heritage",
        description: "Private masterclasses with master chocolatiers in Zurich and exclusive horology atelier viewings.",
        image: "/images/services-bg.jpg",
        tag: "ARTISAN LUXURY",
      },
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Zurich & Lake Promenade",
        description: "Private chauffeur transfer from Zurich Airport to your luxury lakeside hotel. Private old town walking tour and Swiss fondue dinner.",
      },
      {
        day: "Day 02",
        title: "Scenic Train to Lucerne & Mount Pilatus",
        description: "First-class rail to Lucerne. Steamboat cruise across Lake Lucerne followed by the cogwheel ascent of Mount Pilatus.",
      },
      {
        day: "Day 03",
        title: "Interlaken & Jungfraujoch 'Top of Europe'",
        description: "Travel to Interlaken and take the Eiger Express tri-cable gondola to Jungfraujoch ice palace at 3,454 meters altitude.",
      },
      {
        day: "Day 04",
        title: "Glacier Express to Car-Free Zermatt",
        description: "Board the legendary Glacier Express in panoramic Excellence Class. Check in to your luxury alpine chalet with Matterhorn views.",
      },
      {
        day: "Day 05",
        title: "Gornergrat Cogwheel & Alpine Hiking",
        description: "Ascend to Gornergrat summit for reflections of the Matterhorn in Lake Riffelsee. Evening alpine spa and raclette feast.",
      },
      {
        day: "Day 06",
        title: "Lake Geneva & Montreux Chillon Castle",
        description: "Travel to the Swiss Riviera on Lake Geneva. Visit medieval Chillon Castle and taste Lavaux vineyard wines.",
      },
      {
        day: "Day 07",
        title: "Geneva / Zurich Departure",
        description: "Leisurely Swiss chocolate shopping and private first-class transfer to the international airport.",
      },
    ],
    included: [
      "6 Nights in 5-Star Historic Swiss Palace Hotels & Luxury Chalets",
      "1st Class Swiss Travel Pass with Unlimited Rail, Boat & Bus Travel",
      "Glacier Express Excellence Class Reserved Seats & 5-Course Lunch",
      "All Mountain Excursion Passes (Jungfraujoch, Gornergrat, Pilatus)",
      "Daily Swiss Breakfasts & Selected Michelin-Recommended Dinners",
      "24/7 Dedicated Concierge & Swiss Travel Support",
    ],
    travelTips: [
      "Layered clothing is essential, as alpine summits are brisk even in midsummer.",
      "The Swiss Travel Pass covers admission to over 500 museums across the country.",
      "Switzerland operates on 230V Type J plugs; our concierge provides custom converters.",
    ],
    faqs: [
      {
        question: "Is summer or winter better for visiting Switzerland?",
        answer: "Both seasons are magical! June to September offers blooming alpine meadows and open hiking passes, while December to March transforms the country into a winter wonderland for skiing.",
      },
      {
        question: "How do we travel between Swiss cities?",
        answer: "The Swiss rail network is universally recognized as the cleanest, most punctual, and scenic train system in the world. All transfers are seamless.",
      },
    ],
  },
  japan: {
    id: "japan",
    name: "Japan",
    country: "Japan",
    region: "East Asia",
    heroImage: "/images/dest-japan.webp",
    galleryImages: ["/images/dest-japan.webp", "/images/pkg-japan.webp", "/images/travel-stories/story-kyoto.webp"],
    badge: "HERITAGE & FUTURE",
    duration: "9 - 12 Days",
    bestSeason: "March to May (Sakura) & Oct to Nov (Autumn)",
    idealFor: "Culture Seekers, Gastronomy & Photographers",
    visaPolicy: "Visa-Free for 68+ Countries",
    currency: "Japanese Yen (JPY)",
    language: "Japanese & English in key hubs",
    rating: 4.92,
    reviewsCount: "640+ Verified Reviews",
    startingPrice: 2890,
    tagline: "Kyoto ancient shrines, bamboo groves, and Tokyo Michelin culinary tours.",
    overview: [
      "Japan is a mesmerizing land of harmony where ancient Shinto shrines and zen stone gardens coexist with neon-lit futuristic skyscrapers and high-speed bullet trains.",
      "With Voyagrie, experience private tea ceremonies in Kyoto's Gion district, stay at authentic luxury ryokans with volcanic hot springs (onsen), and dine at private chef omakase counters across Tokyo.",
    ],
    highlights: [
      {
        title: "Kyoto Gion District & Fushimi Inari-Taisha",
        description: "Walk beneath 10,000 vermilion torii gates at dawn followed by a private evening tea masterclass in an ancient machiya.",
        image: "/images/travel-stories/story-kyoto.webp",
        tag: "SACRED HERITAGE",
      },
      {
        title: "Mount Fuji Private Onsen Ryokan Stay",
        description: "Relax in cedar volcanic hot spring baths overlooking snow-dusted Mount Fuji, accompanied by multi-course kaiseki banquets.",
        image: "/images/dest-japan.webp",
        tag: "ONSEN LUXURY",
      },
      {
        title: "Tokyo Modern Contrast & Michelin Omakase",
        description: "Experience teamLab borderless digital art, Shibuya sky views, and exclusive counter seats at 3-star sushi institutions.",
        image: "/images/pkg-japan.webp",
        tag: "URBAN WONDER",
      },
      {
        title: "Arashiyama Bamboo Grove & Sagano Scenic Rail",
        description: "Stroll through towering emerald bamboo groves, explore Zen Buddhist rock gardens, and cruise the gentle Hozu River.",
        image: "/images/services-bg.jpg",
        tag: "ZEN TRANQUILITY",
      },
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Tokyo & Shinjuku Neon Welcome",
        description: "VIP airport reception and private transfer to your luxury Ginza hotel. Evening private walking tour through Omoide Yokocho with artisan yakitori.",
      },
      {
        day: "Day 02",
        title: "Asakusa Senso-ji & Futuristic Shibuya",
        description: "Visit Tokyo's oldest temple in Asakusa, take a private water taxi down the Sumida River, and witness the iconic Shibuya Scramble from above.",
      },
      {
        day: "Day 03",
        title: "Hakone & Mount Fuji Onsen Ryokan",
        description: "Travel to Hakone. Board a private pirate boat on Lake Ashi, ride the Komagatake ropeway, and check in to your luxury onsen ryokan with kaiseki dinner.",
      },
      {
        day: "Day 04",
        title: "Shinkansen Bullet Train to Ancient Kyoto",
        description: "Ride the Shinkansen at 320 km/h to Kyoto. Check in to your boutique heritage hotel. Evening private stroll through the lantern-lit Gion geisha district.",
      },
      {
        day: "Day 05",
        title: "Fushimi Inari Torii Gates & Kinkaku-ji Gold Pavilion",
        description: "Early-morning access to Fushimi Inari's red gate pathways. Visit Kinkaku-ji Golden Pavilion and participate in a private matcha ceremony.",
      },
      {
        day: "Day 06",
        title: "Arashiyama Bamboo Forest & Nara Sacred Deer",
        description: "Explore the Arashiyama bamboo forest and Tenryu-ji temple. Afternoon excursion to Nara to meet free-roaming sacred sika deer.",
      },
      {
        day: "Day 07",
        title: "Osaka Castle & Dotonbori Street Food",
        description: "Day trip to vibrant Osaka. Tour the 16th-century castle and savor takoyaki and wagyu skewers along the lively Dotonbori canal.",
      },
      {
        day: "Day 08",
        title: "Return to Tokyo & Ginza Luxury Shopping",
        description: "Bullet train return to Tokyo. Afternoon private shopping in Ginza and farewell omakase sushi experience with a master chef.",
      },
      {
        day: "Day 09",
        title: "Departure from Tokyo",
        description: "Private chauffeur transfer to Haneda or Narita International Airport for departure.",
      },
    ],
    included: [
      "8 Nights in 5-Star Luxury Hotels & Traditional Onsen Ryokans",
      "7-Day Japan Rail Pass (Green Car First Class) for Shinkansen",
      "Private Licensed English-Speaking Cultural Historians",
      "Multi-Course Traditional Kaiseki & Omakase Dining Experiences",
      "All Private Temple Admissions & Exclusive Tea Ceremony Access",
      "24/7 Dedicated Concierge & Portable Pocket Wi-Fi Device",
    ],
    travelTips: [
      "Carry cash as many traditional shops and temples do not accept credit cards.",
      "Remove your shoes before entering homes, traditional ryokan, and temple halls.",
      "Tipping is not practiced in Japan and can often cause confusion.",
    ],
    faqs: [
      {
        question: "When is the cherry blossom (Sakura) season?",
        answer: "Sakura typically blooms from late March through mid-April across Tokyo and Kyoto, while autumn foliage peaks from late October through November.",
      },
      {
        question: "Are tattoos permitted in onsens?",
        answer: "Our curated ryokans offer private in-room onsens and reserved private baths where tattoos are completely unrestricted.",
      },
    ],
  },
  maldives: {
    id: "maldives",
    name: "Maldives",
    country: "Republic of Maldives",
    region: "Indian Ocean",
    heroImage: "/images/dest-maldives.webp",
    galleryImages: ["/images/dest-maldives.webp", "/images/pkg-maldives.webp", "/images/hero-poster.webp"],
    badge: "OVERWATER OASIS",
    duration: "5 - 8 Days",
    bestSeason: "November to April (Dry Season)",
    idealFor: "Honeymooners, Couples & Marine Enthusiasts",
    visaPolicy: "Free 30-Day Visa on Arrival for All",
    currency: "Maldivian Rufiyaa (MVR) & USD",
    language: "Dhivehi & English universally used",
    rating: 4.98,
    reviewsCount: "730+ Verified Reviews",
    startingPrice: 2950,
    tagline: "Secluded coral lagoons, private overwater bungalows, and vibrant reef life.",
    overview: [
      "The Maldives is the world's quintessential luxury paradise: an archipelago of 1,192 coral islands scattered across the turquoise expanse of the Indian Ocean.",
      "Voyagrie partners with the world's most prestigious private island resorts, featuring iconic overwater villas with water slides, underwater wine cellars, private sandbank dinners, and private marine biologist snorkeling tours.",
    ],
    highlights: [
      {
        title: "Overwater Villa Living with Private Pool",
        description: "Wake up suspended directly over sapphire lagoons, with private glass floor panels, direct ocean access, and personal butler service.",
        image: "/images/dest-maldives.webp",
        tag: "ICONIC LUXURY",
      },
      {
        title: "Sunset Dolphin Cruise & Sandbank Picnics",
        description: "Sail aboard a private wooden dhoni as pods of spinner dolphins leap alongside, stopping at an uninhabited sandbank for champagne.",
        image: "/images/pkg-maldives.webp",
        tag: "ROMANTIC ESCAPE",
      },
      {
        title: "Manta Ray & Sea Turtle Snorkeling Safari",
        description: "Explore UNESCO Biosphere Reserve coral atolls guided by resident marine biologists to swim alongside manta rays.",
        image: "/images/hero-poster.webp",
        tag: "MARINE WONDERS",
      },
      {
        title: "Subaquatic Underwater Dining Experience",
        description: "Savor a multi-course gourmet menu five meters below the sea surface while reef sharks and tropical fish glide overhead.",
        image: "/images/contact-bg.jpg",
        tag: "FINE DINING",
      },
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Seaplane Flight & Overwater Check-in",
        description: "VIP arrival lounge in Male. Scenic seaplane transfer over coral atolls directly to your private island resort. Welcome champagne and villa orientation.",
      },
      {
        day: "Day 02",
        title: "House Reef Snorkeling & Sunset Yoga",
        description: "Morning guided snorkeling along the house reef drop-off. Sunset pavilion yoga followed by barefoot fine dining on the sand.",
      },
      {
        day: "Day 03",
        title: "Private Sandbank Escape & Champagne Picnic",
        description: "Boat transfer to a deserted private sandbank setup with canopies, fresh seafood barbecue, and chilled vintage champagne.",
      },
      {
        day: "Day 04",
        title: "Underwater Spa & Dolphin Cruise",
        description: "Morning couple's massage in an underwater glass treatment room. Afternoon sunset dhoni cruise accompanied by leaping spinner dolphins.",
      },
      {
        day: "Day 05",
        title: "Coral Restoration & Underwater Dining",
        description: "Participate in planting coral fragments with the resident biologist. Evening reservation at the resort's iconic subaquatic glass restaurant.",
      },
      {
        day: "Day 06",
        title: "Seaplane Transfer & Farewell",
        description: "Floating lagoon breakfast and final morning swim before your scenic seaplane return transfer to Male International Airport.",
      },
    ],
    included: [
      "5 Nights in an Iconic Luxury Overwater Villa with Private Pool",
      "Roundtrip Scenic Seaplane or Luxury Speedboat Airport Transfers",
      "All-Inclusive Gourmet Dining (Breakfast, Lunch, Dinner & Premium Wine)",
      "Private Sandbank Picnic with Dedicated Chef & Butler",
      "Guided Marine Biologist Snorkel Excursions with Manta Rays",
      "Complimentary Non-Motorized Water Sports & Snorkel Equipment",
      "24/7 Dedicated Island Concierge Service",
    ],
    travelTips: [
      "Pack light reef-safe sunscreen to protect delicate coral ecosystems.",
      "US Dollars are accepted everywhere on private resort islands.",
      "Drones require prior resort permission to protect guest privacy.",
    ],
    faqs: [
      {
        question: "How do we get to our private island from Male airport?",
        answer: "Depending on your resort's location, you will be whisked away by either a scenic seaplane or a private high-speed luxury yacht directly from the terminal.",
      },
      {
        question: "Is all-inclusive worth it in the Maldives?",
        answer: "Yes! Since each resort is on its own private island, our curated all-inclusive packages include world-class dining, vintage wines, and excursions with zero unexpected costs.",
      },
    ],
  },
  dubai: {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    heroImage: "/images/dest-dubai.webp",
    galleryImages: ["/images/dest-dubai.webp", "/images/contact-bg.jpg", "/images/pkg-europe.webp"],
    badge: "MODERN LUXURY",
    duration: "5 - 7 Days",
    bestSeason: "October to April (Pleasant Warmth)",
    idealFor: "Luxury Shopping, Desert Safaris & Architecture",
    visaPolicy: "30-90 Day Free Visa on Arrival for 70+ Countries",
    currency: "UAE Dirham (AED)",
    language: "Arabic & English widely used",
    rating: 4.88,
    reviewsCount: "420+ Verified Reviews",
    startingPrice: 1750,
    tagline: "Desert glamping under starlight, futuristic architecture, and marina yachts.",
    overview: [
      "Dubai is a dazzling metropolis of architectural superlatives rising from the golden Arabian sands: home to the world's tallest tower, man-made palm islands, and the most opulent hotels on the planet.",
      "Voyagrie curates VIP desert safaris with vintage Land Rovers, private yacht cruises along the Dubai Marina, and priority access to world-renowned sky lounges.",
    ],
    highlights: [
      {
        title: "Burj Khalifa 'At The Top' Sky Lounge",
        description: "Ascend to level 148 for panoramic views over the Persian Gulf with private lounge service and champagne.",
        image: "/images/dest-dubai.webp",
        tag: "SKY HIGH",
      },
      {
        title: "Royal Desert Conservation Safari & Glamping",
        description: "Traverse rolling dunes in open-top vintage Land Rovers, watch falconry demonstrations, and dine under starlight.",
        image: "/images/contact-bg.jpg",
        tag: "ARABIAN NIGHTS",
      },
      {
        title: "Private Luxury Yacht Charter around Palm Jumeirah",
        description: "Cruise past Atlantis The Royal and the Burj Al Arab with a private captain, sun decks, and gourmet catering.",
        image: "/images/pkg-europe.webp",
        tag: "PRIVATE CRUISE",
      },
      {
        title: "Al Fahidi Old Dubai & Gold Souk Tour",
        description: "Cross Dubai Creek aboard a traditional wooden abra boat and explore historic wind-tower quarters and spice bazaars.",
        image: "/images/services-bg.jpg",
        tag: "HERITAGE",
      },
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "VIP Airport Arrival & Downtown Check-in",
        description: "VIP greeting at Dubai International Airport. Chauffeur transfer to your 5-star hotel in Downtown Dubai. Evening viewing of the Dubai Fountain.",
      },
      {
        day: "Day 02",
        title: "Old Dubai Heritage & Gold Souk",
        description: "Explore the historic Al Fahidi neighborhood, cross the Creek on a private abra, and discover rare perfumes and gold jewelry.",
      },
      {
        day: "Day 03",
        title: "Burj Khalifa Lounge & Dubai Mall Fashion",
        description: "Priority access to the 148th floor of the Burj Khalifa. Afternoon personal shopping experience at Fashion Avenue.",
      },
      {
        day: "Day 04",
        title: "VIP Desert Safari & Starlit Camp Feast",
        description: "Afternoon drive into the Dubai Desert Conservation Reserve. Falconry display, camel riding, and a 6-course royal Arabic feast under the stars.",
      },
      {
        day: "Day 05",
        title: "Palm Jumeirah & Private Marina Yacht Cruise",
        description: "Morning visit to The View at The Palm. 3-hour private yacht cruise along the Marina skyline and Ain Dubai.",
      },
      {
        day: "Day 06",
        title: "Leisure Day & Departure",
        description: "Morning poolside relaxation or museum visit before private chauffeur transfer to the airport.",
      },
    ],
    included: [
      "5 Nights in 5-Star Luxury Suites (Downtown / Palm Jumeirah)",
      "Private Chauffeur Driven Luxury Vehicles throughout your stay",
      "VIP Fast-Track Access to Burj Khalifa Level 148",
      "Private Royal Desert Safari with Falconry & 6-Course Dinner",
      "3-Hour Private Luxury Yacht Charter with Refreshments",
      "24/7 Dedicated Concierge & Assistance",
    ],
    travelTips: [
      "Credit cards and mobile payments (Apple Pay) are accepted everywhere.",
      "Light, airy clothing is recommended, with a light sweater for air-conditioned venues.",
    ],
    faqs: [
      {
        question: "When is the best time to visit Dubai?",
        answer: "From October to April, temperatures range between 24°C and 30°C, providing perfect beach weather and pleasant desert evenings.",
      },
    ],
  },
  turkey: {
    id: "turkey",
    name: "Turkey",
    country: "Republic of Türkiye",
    region: "Eurasia",
    heroImage: "/images/dest-turkey.webp",
    galleryImages: ["/images/dest-turkey.webp", "/images/cappadocia-balloons.jpg", "/images/travel-stories/story-cappadocia.webp"],
    badge: "ANATOLIAN MAGIC",
    duration: "7 - 9 Days",
    bestSeason: "April to June & Sept to Nov",
    idealFor: "Culture Buffs, Hot Air Ballooning & Romance",
    visaPolicy: "Online eVisa / Visa-Free for EU & UK",
    currency: "Turkish Lira (TRY)",
    language: "Turkish & English in hospitality",
    rating: 4.9,
    reviewsCount: "460+ Verified Reviews",
    startingPrice: 1650,
    tagline: "Cappadocia dawn hot air balloons, Bosphorus sunsets, and Byzantine history.",
    overview: [
      "Straddling two continents, Türkiye is a vibrant tapestry of Roman, Byzantine, and Ottoman history set against extraordinary natural landscapes.",
      "Float in a hot air balloon over Cappadocia's surreal fairy chimneys at dawn, wander through Istanbul's opulent Topkapi Palace, and cruise the Bosphorus Strait aboard a private yacht.",
    ],
    highlights: [
      {
        title: "Cappadocia Sunrise Hot Air Balloon Flight",
        description: "Soar over dramatic valleys, fairy chimneys, and cave dwellings as hundreds of colorful balloons fill the pastel dawn sky.",
        image: "/images/cappadocia-balloons.jpg",
        tag: "HOT AIR BALLOON",
      },
      {
        title: "Istanbul Bosphorus Sunset Yacht Cruise",
        description: "Glide between Europe and Asia aboard a private motor yacht, passing historic Ottoman waterfront palaces and illuminated bridges.",
        image: "/images/dest-turkey.webp",
        tag: "BOSPHORUS CRUISE",
      },
      {
        title: "Hagia Sophia & Blue Mosque VIP Historic Tour",
        description: "Explore world-renowned 6th-century Byzantine mosaics and Ottoman architecture accompanied by a senior art historian.",
        image: "/images/travel-stories/story-cappadocia.webp",
        tag: "BYZANTINE & OTTOMAN",
      },
      {
        title: "Authentic Luxury Cave Suite Living",
        description: "Stay in five-star carved stone cave suites in Cappadocia, complete with private plunge pools and heated marble hammams.",
        image: "/images/contact-bg.jpg",
        tag: "CAVE SUITE",
      },
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Istanbul & Bosphorus Check-in",
        description: "VIP airport reception and private transfer to your 5-star Bosphorus waterfront hotel. Welcome Turkish meze dinner.",
      },
      {
        day: "Day 02",
        title: "Historic Sultanahmet & Grand Bazaar",
        description: "Full-day private guided exploration of Hagia Sophia, Blue Mosque, Basilica Cistern, and the labyrinthine Grand Bazaar.",
      },
      {
        day: "Day 03",
        title: "Topkapi Palace & Private Bosphorus Yacht",
        description: "Morning tour of the Ottoman Sultans' royal quarters. Afternoon 2-hour private yacht cruise along the Bosphorus strait.",
      },
      {
        day: "Day 04",
        title: "Flight to Cappadocia & Luxury Cave Suite",
        description: "Morning flight to Cappadocia. Check in to your luxury carved cave suite in Uchisar. Sunset walk through Pigeon Valley.",
      },
      {
        day: "Day 05",
        title: "Dawn Hot Air Ballooning & Underground Cities",
        description: "At dawn, float over Cappadocia's valleys in a VIP small-group balloon. Later, explore Derinkuyu multi-level underground city.",
      },
      {
        day: "Day 06",
        title: "Goreme Open Air Museum & Pottery Masterclass",
        description: "Tour Byzantine rock-cut churches and frescoes. Visit an artisan pottery workshop in Avanos along the Red River.",
      },
      {
        day: "Day 07",
        title: "Return to Istanbul & Departure",
        description: "Morning flight back to Istanbul for last-minute spice market shopping and departure.",
      },
    ],
    included: [
      "6 Nights in 5-Star Luxury Istanbul Palaces & Cappadocia Cave Suites",
      "Domestic Flights between Istanbul and Cappadocia (Economy Plus)",
      "Guaranteed Sunrise Hot Air Balloon Flight in Cappadocia",
      "Private Bosphorus Sunset Yacht Cruise with Drinks & Canapés",
      "Private Air-Conditioned Vehicle & Professional Historian Guide",
      "24/7 Dedicated Voyagrie Concierge Support",
    ],
    travelTips: [
      "Women should bring a light scarf for entering active mosques in Istanbul.",
      "Cappadocia mornings can be chilly before sunrise; pack a warm jacket for the balloon flight.",
    ],
    faqs: [
      {
        question: "Is the hot air balloon flight in Cappadocia guaranteed?",
        answer: "Balloon flights depend on civil aviation weather clearance. We schedule flights on your first morning so that if weather postpones it, you can fly the following morning.",
      },
    ],
  },
};

export const trustStats = [
  { label: "Destinations", value: "50+" },
  { label: "Happy Travellers", value: "10,000+" },
  { label: "Average Rating", value: "4.8/5" },
  { label: "Trusted Travel Partner", value: "Global" },
  { label: "Dedicated Support", value: "24/7" },
];


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
