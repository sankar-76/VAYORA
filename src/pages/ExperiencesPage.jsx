import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import Icons from '../components/Icons';
import SafeImage from '../components/SafeImage';
import { DESTINATIONS, EXPERIENCES } from '../data/travelData';

const ExperiencesPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const filteredExp = useMemo(() => {
    return EXPERIENCES.filter(exp => {
      const matchesSearch = exp.title.toLowerCase().includes(search.toLowerCase()) ||
                            exp.destination.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || exp.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Specialized Adventures</span>
        <h1 className="editorial-heading text-4xl sm:text-6xl font-bold text-ivory-100 mt-2">
          Curated Experiences
        </h1>
        <p className="text-base text-ivory-300/80 max-w-2xl mt-3 font-light">
          Single-day and multi-day signature excursions designed for deep cultural connection and thrill.
        </p>
      </div>

      {/* Search & Category Tabs */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search experiences..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-forest-900 border border-sand-300/20 rounded-xl px-5 py-3 text-sm text-ivory-100 focus:outline-none focus:border-gold-400"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All", "Adventure", "Culture", "Luxury Escapes", "Beaches & Wellness", "Nature", "Food & Culture"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${category === cat ? "bg-gold-500 text-forest-950" : "bg-forest-900 text-ivory-300/70 hover:text-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExp.map((exp) => (
          <div
            key={exp.id}
            onClick={() => navigate(`/experiences/${exp.slug}`)}
            className="group bg-forest-900 rounded-2xl overflow-hidden border border-sand-300/10 cursor-pointer hover:border-gold-500/40 transition-all shadow-xl"
          >
            <div className="relative h-64">
              <SafeImage src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <span className="absolute top-4 left-4 bg-forest-950/80 backdrop-blur-md text-gold-400 text-xs px-3 py-1 rounded-full">
                {exp.category}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between text-xs text-sand-300/60">
                <span>{exp.destination}</span>
                <span>{exp.duration}</span>
              </div>

              <h3 className="editorial-heading text-xl font-bold text-ivory-100 group-hover:text-gold-400 transition-colors">
                {exp.title}
              </h3>

              <p className="text-xs text-ivory-300/70 line-clamp-2 leading-relaxed">
                {exp.shortDesc}
              </p>

              <div className="pt-4 border-t border-sand-300/10 flex justify-between items-center">
                <span className="text-xs text-ivory-300/60">From <strong className="text-base text-gold-400 font-semibold">${exp.price}</strong></span>
                <span className="text-xs font-semibold text-ivory-100 flex items-center gap-1">
                  Details <Icons.ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesPage;
