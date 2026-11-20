export const DESTINATIONS = [
  {
    id: "bali",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    tagline: "Island of Sacred Springs and Emerald Horizons",
    shortDesc: "Immerse in ancient terraced sanctuaries, spiritual ocean temples, and untouched private coastal retreats.",
    fullDesc: "Bali is a tapestry of vivid emerald rice terraces, cliffside sanctuaries, and deep spiritual heritage. Beyond the coastal pulse lies a quiet hinterland of volcanic ridges, sacred water temples, and world-class wellness sanctuaries designed for profound rest.",
    price: 2400,
    duration: "8 Days / 7 Nights",
    category: "Beaches & Wellness",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
    ],
    bestTime: "April to October (Dry Season)",
    attractions: ["Ubud Sacred Monkey Forest", "Uluwatu Sunset Temple", "Tegallalang Terraces", "Nusa Penida Coastal Cliffs"],
    experiences: ["Private Sound Healing Ritual", "Sunrise Mount Batur Helicopter Tour", "Organic Farm-to-Table Dining"],
    itinerary: [
      { day: "Day 1-2", title: "Arrival & Ubud Sacred Forest", desc: "Private check-in at luxury jungle villa, evening traditional welcome ritual." },
      { day: "Day 3-5", title: "Volcano Ridges & Water Temples", desc: "Sunrise helicopter excursion over Batur caldera and private blessing at Tirta Empul." },
      { day: "Day 6-8", title: "Uluwatu Cliffs & Coastal Farewell", desc: "Cliffside private pavilion relaxation and sunset seafood pairing." }
    ]
  },
  {
    id: "swiss-alps",
    slug: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    region: "Europe",
    tagline: "Majestic Peaks & Timeless Alpine Serenity",
    shortDesc: "Experience alpine luxury, glacier express journeys, and pristine snow-capped wilderness.",
    fullDesc: "The Swiss Alps offer an unmatched landscape of soaring peaks, crisp glacial lakes, and legendary hospitality. Experience historic alpine railways, Michelin-starred mountain dining, and private chalets overlooking Zermatt and St. Moritz.",
    price: 4200,
    duration: "7 Days / 6 Nights",
    category: "Luxury Escapes",
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573108037302-75778a87b508?auto=format&fit=crop&w=800&q=80"
    ],
    bestTime: "December to March (Ski) / June to September (Hiking)",
    attractions: ["Matterhorn Viewpoints", "Glacier Express Train", "Lake Lucerne Cruise", "Jungfraujoch Peak"],
    experiences: ["Helicopter Glacier Landing", "Private Fondue & Vintage Wine Tasting", "Alpine Spa Sanctuary"],
    itinerary: [
      { day: "Day 1-2", title: "Zurich to Zermatt Railway", desc: "Board the panoramic train through mountain valleys into luxury alpine lodge." },
      { day: "Day 3-4", title: "Glacier Excursions", desc: "Private ski instructor or guided high-altitude snowshoe trail." },
      { day: "Day 5-7", title: "Lake Lucerne & St. Moritz", desc: "Lakeside wellness retreat and private boat ride." }
    ]
  },
  {
    id: "kyoto",
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "Asia",
    tagline: "Poetry of Bamboo Groves & Ancient Zen Zeniths",
    shortDesc: "Wander through centuries-old wooden shrines, private tea masters' tea houses, and tranquil moss gardens.",
    fullDesc: "Kyoto is Japan’s cultural heartland, where ancient traditions endure in quiet alleyways of Gion and serene temple gardens. Discover private tea ceremonies, seasonal kaiseki gastronomy, and secluded Ryokan retreats.",
    price: 3600,
    duration: "9 Days / 8 Nights",
    category: "Culture",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&q=80"
    ],
    bestTime: "March to May (Sakura) / October to November (Autumn Leaves)",
    attractions: ["Arashiyama Bamboo Grove", "Fushimi Inari Shrine", "Kinkaku-ji Golden Pavilion", "Gion Historic District"],
    experiences: ["Private Master Tea Ceremony", "Zen Garden Meditation", "Kaiseki Dinner with Geiko Artistry"],
    itinerary: [
      { day: "Day 1-3", title: "Historic Gion & Ryokan Living", desc: "Check-in to historic luxury Ryokan with private onsen bath." },
      { day: "Day 4-6", title: "Temples & Bamboo Groves", desc: "Early morning private access to Arashiyama before public opening." },
      { day: "Day 7-9", title: "Culinary & Tea Master Heritage", desc: "Private multi-course Michelin dining and matcha crafting." }
    ]
  },
  {
    id: "santorini",
    slug: "santorini",
    name: "Santorini",
    country: "Greece",
    region: "Europe",
    tagline: "White-Washed Cycladic Haven Over Aegean Blue",
    shortDesc: "Cliffside suites, private catamaran sailing through calderas, and volcanic vineyard tastings.",
    fullDesc: "Perched dramatically above the shimmering Aegean Sea, Santorini is defined by white dome architecture, volcanic cliffs, and romantic sunsets. Experience private infinity pools in Oia and sun-drenched coastal cruising.",
    price: 3100,
    duration: "6 Days / 5 Nights",
    category: "Luxury Escapes",
    heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80"
    ],
    bestTime: "May to October",
    attractions: ["Oia Sunset Promenade", "Red Beach", "Akrotiri Ancient Ruins", "Imerovigli Cliff Walks"],
    experiences: ["Private Catamaran Sunset Cruise", "Assyrtiko Wine Tasting", "Cliffside Candlelight Dinner"],
    itinerary: [
      { day: "Day 1-2", title: "Oia Cliffside Suite Check-in", desc: "Private infinity pool welcome cocktail with panoramic caldera views." },
      { day: "Day 3-4", title: "Aegean Sailing & Volcanic Springs", desc: "Private catamaran charter with chef-prepared grilled seafood lunch." },
      { day: "Day 5-6", title: "Ancient Vineyards & Farewell", desc: "Private Sommelier guided tour through ancient volcanic soil wineries." }
    ]
  },
  {
    id: "cappadocia",
    slug: "cappadocia",
    name: "Cappadocia",
    country: "Turkey",
    region: "Middle East",
    tagline: "Land of Fairy Chimneys & Dawn Hot Air Balloons",
    shortDesc: "Drift over surreal subterranean valleys, cave suites carved in rock, and ancient silk-road history.",
    fullDesc: "Cappadocia feels like a fairy-tale realm sculpted by wind and time. Rise with sunrise hot air balloons float above whimsical rock pillars, sleep in restored cave hotels, and explore ancient underground cities.",
    price: 2100,
    duration: "5 Days / 4 Nights",
    category: "Adventure",
    heroImage: "https://images.unsplash.com/photo-1609831154562-b9e7d95368a5?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1570939624578-c8c2576b5394?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80"
    ],
    bestTime: "April to June / September to November",
    attractions: ["Göreme Open-Air Museum", "Kaymakli Underground City", "Love Valley Sunset Trail", "Uchisar Castle Peak"],
    experiences: ["Sunrise Private Hot Air Balloon", "Anatolian Clay Cooking Class", "Horseback Riding through Rose Valley"],
    itinerary: [
      { day: "Day 1-2", title: "Cave Sanctuary Arrival", desc: "Check-in to a luxury cave boutique suite carved in ancient volcanic tufa." },
      { day: "Day 3-4", title: "Dawn Ballooning & Subterranean Exploration", desc: "Sunrise flight over valleys followed by private guide through underground chambers." },
      { day: "Day 5", title: "Rose Valley Sunset & Departure", desc: "Golden hour horseback trek through sandstone canyons." }
    ]
  },
  {
    id: "maldives",
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    region: "Asia",
    tagline: "Pure Turquoise Atolls & Overwater Luxury",
    shortDesc: "Private overwater bungalows, coral reef diving, and serene oceanfront wellness.",
    fullDesc: "The Maldives is the quintessential paradise of endless turquoise lagoons, soft white powder beaches, and secluded luxury. Stay in private overwater villas with glass floor panels and direct ocean access.",
    price: 4900,
    duration: "7 Days / 6 Nights",
    category: "Beaches & Wellness",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80"
    ],
    bestTime: "November to April",
    attractions: ["Baa Atoll Biosphere Reserve", "Subterranean Coral Reefs", "Private Sandbank Islands", "Underwater Restaurants"],
    experiences: ["Private Sandbank Picnic by Helicopter", "Night Snorkeling with Manta Rays", "Overwater Spa Treatment"],
    itinerary: [
      { day: "Day 1-2", title: "Seaplane Transfer to Private Atoll", desc: "Arrive at overwater sanctuary with dedicated island butler." },
      { day: "Day 3-4", title: "Marine Sanctuary Excursion", desc: "Guided dive with marine biologists to observe whale sharks and sea turtles." },
      { day: "Day 5-7", title: "Uninhabited Island Escape", desc: "Private boat excursion to isolated sandbank for chef champagne dining." }
    ]
  },
  {
    id: "patagonia",
    slug: "patagonia",
    name: "Patagonia",
    country: "Chile & Argentina",
    region: "South America",
    tagline: "Untamed Glaciers & Dramatic Mountain Fjords",
    shortDesc: "Venture to the end of the earth where granite towers rise over turquoise glacial lakes.",
    fullDesc: "Patagonia is raw, majestic wilderness. Hike legendary trails in Torres del Paine, watch calving icebergs at Perito Moreno, and lodge in ultra-sustainable eco-villas integrated with nature.",
    price: 3800,
    duration: "10 Days / 9 Nights",
    category: "Adventure",
    heroImage: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80"
    ],
    bestTime: "November to March",
    attractions: ["Torres del Paine Peaks", "Perito Moreno Glacier", "Mount Fitz Roy", "Laguna de los Tres"],
    experiences: ["Ice Trekking on Perito Moreno", "Gaucho Horseback Ride", "Fjord Navigation"],
    itinerary: [
      { day: "Day 1-3", title: "Arrival in Punta Arenas to Torres", desc: "Luxury eco-lodge welcome with mountain vista views." },
      { day: "Day 4-7", title: "Granite Towers Trekking", desc: "Guided small group trek through French Valley." },
      { day: "Day 8-10", title: "Glacial Navigation", desc: "Catamaran cruise along icebergs." }
    ]
  },
  {
    id: "amalfi-coast",
    slug: "amalfi-coast",
    name: "Amalfi Coast",
    country: "Italy",
    region: "Europe",
    tagline: "Sun-Drenched Terraces & Lemon-Scented Coastlines",
    shortDesc: "Cliffside villas, private Riva yacht charters, and authentic Neapolitan coastal cuisine.",
    fullDesc: "The Amalfi Coast is a vertical landscape of pastel-colored towns clinging to dramatic cliffs above the Tyrrhenian Sea. Enjoy private lemon grove tastings in Ravello and yacht charters to Capri.",
    price: 3400,
    duration: "7 Days / 6 Nights",
    category: "Food & Culture",
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    ],
    bestTime: "May to September",
    attractions: ["Positano Cliff Walks", "Villa Cimbrone Ravello", "Path of the Gods", "Capri Blue Grotto"],
    experiences: ["Private Riva Boat to Capri", "Organic Lemon Farm Masterclass", "Michelin Star Terrace Dining"],
    itinerary: [
      { day: "Day 1-2", title: "Positano Arrival", desc: "Check-in to historic clifftop palace with private balcony." },
      { day: "Day 3-4", title: "Capri Yacht Charter", desc: "Full day private boat excursion to Faraglioni rocks." },
      { day: "Day 5-7", title: "Ravello Gardens & Culinary Art", desc: "Private pasta making class in ancient terrace orchard." }
    ]
  }
];

export const EXPERIENCES = [
  {
    id: "exp-1",
    slug: "swiss-glacier-heli",
    title: "Alpine Glacier Helicopter & Champagne Touchdown",
    destination: "Swiss Alps",
    category: "Adventure",
    duration: "1 Day (4 Hours)",
    price: 950,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Soar over the Eiger North Face before landing on pristine high-altitude ice fields for a gourmet private lunch.",
    highlights: ["Helicopter flight over Matterhorn", "Private glacier touchdown", "Vintage Dom Pérignon champagne service", "Alpine photo guide"]
  },
  {
    id: "exp-2",
    slug: "kyoto-tea-master",
    title: "Private Tea Master Sanctuary Experience",
    destination: "Kyoto",
    category: "Culture",
    duration: "3 Hours",
    price: 420,
    image: "https://images.unsplash.com/photo-1545042700-a5e3f6a45753?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Step inside a 400-year-old zen temple garden closed to the public for a meditative tea ritual led by a grandmaster.",
    highlights: ["Exclusive closed-door temple access", "15th generation tea master guidance", "Artisan matcha tasting", "Traditional kimono dressing"]
  },
  {
    id: "exp-3",
    slug: "santorini-catamaran",
    title: "Sunset Luxury Catamaran Charter through Volcanic Caldera",
    destination: "Santorini",
    category: "Luxury Escapes",
    duration: "5 Hours",
    price: 680,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Sail into the golden Aegean horizon, stop at subterranean thermal springs, and savor fresh grilled seafood on deck.",
    highlights: ["Private Lagoon 450 catamaran", "Secluded hot spring swimming", "Chef-cooked Aegean feast", "Premium Greek wine open bar"]
  },
  {
    id: "exp-4",
    slug: "cappadocia-balloon-dawn",
    title: "VIP Dawn Hot Air Balloon & Valley Breakfast",
    destination: "Cappadocia",
    category: "Adventure",
    duration: "4 Hours",
    price: 520,
    image: "https://images.unsplash.com/photo-1609831154562-b9e7d95368a5?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Rise above the fairy chimneys in a private basket as the sun illuminates the unique pink and gold canyons.",
    highlights: ["Private basket option", "Sunrise soaring over Rose Valley", "Champagne flight certificate ceremony", "Gourmet cave breakfast"]
  },
  {
    id: "exp-5",
    slug: "bali-jungle-sound-healing",
    title: "Sacred Water Blessing & Sound Healing Sanctuary",
    destination: "Bali",
    category: "Beaches & Wellness",
    duration: "Full Day",
    price: 380,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    shortDesc: "A transformative day of purification rituals led by an authentic Balinese priest followed by gong immersion in jungle canopy.",
    highlights: ["Holy spring water purification", "Private high priest blessing", "Acoustic gong bath in open bamboo dome", "Organic vegan feast"]
  },
  {
    id: "exp-6",
    slug: "maldives-manta-snorkeling",
    title: "Baa Atoll Night Snorkeling with Manta Rays",
    destination: "Maldives",
    category: "Nature",
    duration: "3 Hours",
    price: 490,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Guided by marine biologists, glide beneath moonlit waters alongside gentle ocean giants feeding on plankton.",
    highlights: ["UNESCO Reserve location", "Expert marine biologist guide", "Underwater fluorescent lighting equipment", "Private luxury speedboat transfer"]
  },
  {
    id: "exp-7",
    slug: "amalfi-lemon-farm",
    title: "Clifftop Organic Lemon Farm & Culinary Masterclass",
    destination: "Amalfi Coast",
    category: "Food & Culture",
    duration: "4 Hours",
    price: 340,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Walk through vertical lemon orchards in Ravello and craft handmade pasta under the guidance of a third-generation nonna.",
    highlights: ["Private orchard harvest tour", "Limoncello crafting demonstration", "3-course terrace lunch with ocean views", "Recipe souvenir book"]
  },
  {
    id: "exp-8",
    slug: "patagonia-glacier-trek",
    title: "Perito Moreno Ice Cave Expedition",
    destination: "Patagonia",
    category: "Adventure",
    duration: "Full Day",
    price: 610,
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Strap on crampons and explore deep sapphire ice caves and crevasses inside Patagonia's grandest living glacier.",
    highlights: ["Certified alpine guide", "Crampon ice trekking equipment", "Whisky with glacier ice toast", "Boating past calving ice walls"]
  }
];
