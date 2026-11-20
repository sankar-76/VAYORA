import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import Icons from '../components/Icons';
import SafeImage from '../components/SafeImage';
import { DESTINATIONS, EXPERIENCES } from '../data/travelData';

const DestinationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("recommended");
  const navigate = useNavigate();

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter(dest => {
      const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dest.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || dest.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">The World Catalog</span>
        <h1 className="editorial-heading text-4xl sm:text-6xl font-bold text-ivory-100 mt-2">
          Explore Destinations
        </h1>
        <p className="text-base text-ivory-300/80 max-w-2xl mt-3 font-light">
          Filter through pristine islands, high alpine ridges, historic capitals, and tranquil ocean sanctuaries.
        </p>
      </div>

      {/* Search & Filters Toolbar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <div className="bg-forest-900 border border-sand-300/10 p-4 sm:p-6 rounded-2xl space-y-4 md:space-y-0 md:flex md:items-center md:justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory-300/60 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination, country, or keyword..."
              className="w-full bg-forest-950 border border-sand-300/20 rounded-xl pl-12 pr-4 py-3 text-sm text-ivory-100 placeholder-ivory-300/40 focus:outline-none focus:border-gold-400"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {["All", "Luxury Escapes", "Culture", "Adventure", "Beaches & Wellness", "Food & Culture"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${selectedCategory === cat ? "bg-gold-500 text-forest-950" : "bg-forest-950 text-ivory-300/70 hover:text-white hover:bg-forest-800"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Filter */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort Destinations By"
            className="bg-forest-950 border border-sand-300/20 text-ivory-200 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-gold-400"
          >
            <option value="recommended">Sort: Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-24 bg-forest-900/50 rounded-2xl border border-sand-300/10 space-y-4">
            <Icons.Compass className="w-12 h-12 text-gold-400 mx-auto opacity-50" />
            <h3 className="editorial-heading text-2xl font-bold text-ivory-100">No destinations found</h3>
            <p className="text-xs text-ivory-300/70">Try clearing search filters to see all travel sanctuaries.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="bg-gold-500 text-forest-950 font-bold text-xs uppercase px-6 py-2.5 rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => navigate(`/destinations/${dest.slug}`)}
                className="group bg-forest-900 rounded-2xl overflow-hidden border border-sand-300/10 cursor-pointer hover:border-gold-500/40 transition-all duration-500 shadow-xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <SafeImage
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-forest-950/80 backdrop-blur-md text-gold-400 text-xs px-3 py-1 rounded-full font-medium">
                    {dest.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex justify-between text-xs text-sand-300/70">
                    <span>{dest.country}</span>
                    <span>{dest.duration}</span>
                  </div>

                  <h3 className="editorial-heading text-2xl font-bold text-ivory-100 group-hover:text-gold-400 transition-colors">
                    {dest.name}
                  </h3>

                  <p className="text-xs text-ivory-300/70 line-clamp-2 leading-relaxed">
                    {dest.shortDesc}
                  </p>

                  <div className="pt-4 border-t border-sand-300/10 flex items-center justify-between">
                    <span className="text-xs text-ivory-300/60">From <strong className="text-base text-gold-400 font-semibold">${dest.price}</strong></span>
                    <span className="text-xs font-semibold text-ivory-100 flex items-center gap-1">
                      View Destination <Icons.ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsPage;
