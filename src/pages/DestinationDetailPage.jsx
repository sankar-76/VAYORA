import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import Icons from '../components/Icons';
import SafeImage from '../components/SafeImage';
import { DESTINATIONS, EXPERIENCES } from '../data/travelData';

const DestinationDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const dest = useMemo(() => {
    return DESTINATIONS.find(d => d.slug === slug) || DESTINATIONS[0];
  }, [slug]);

  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Dynamic Hero */}
      <div className="relative h-[65vh] min-h-[500px]">
        <SafeImage src={dest.heroImage} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
        <div className="absolute bottom-12 left-0 right-0 max-w-7xl mx-auto px-6 sm:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold bg-forest-900/80 px-4 py-1.5 rounded-full border border-sand-300/10">
            {dest.country} • {dest.category}
          </span>
          <h1 className="editorial-heading text-5xl sm:text-7xl font-bold text-ivory-100">{dest.name}</h1>
          <p className="editorial-heading text-xl text-sand-300 italic max-w-2xl">{dest.tagline}</p>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Content Column */}
        <div className="lg:col-span-8 space-y-16">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="editorial-heading text-3xl font-bold text-ivory-100">About The Journey</h2>
            <p className="text-base text-ivory-200/90 leading-relaxed font-light">{dest.fullDesc}</p>
          </section>

          {/* Photo Gallery */}
          <section className="space-y-4">
            <h3 className="editorial-heading text-2xl font-bold text-ivory-100">Visual Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {dest.gallery.map((img, idx) => (
                <div key={idx} className="h-48 rounded-xl overflow-hidden border border-sand-300/10">
                  <SafeImage src={img} alt={`${dest.name} gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </section>

          {/* Key Information */}
          <section className="bg-forest-900 p-8 rounded-2xl border border-sand-300/10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gold-400 font-bold mb-2">Best Time to Visit</h4>
              <p className="text-sm text-ivory-200">{dest.bestTime}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gold-400 font-bold mb-2">Typical Duration</h4>
              <p className="text-sm text-ivory-200">{dest.duration}</p>
            </div>
          </section>

          {/* Suggested Itinerary */}
          <section className="space-y-6">
            <h3 className="editorial-heading text-3xl font-bold text-ivory-100">Curated Itinerary</h3>
            <div className="space-y-4">
              {dest.itinerary.map((item, idx) => (
                <div key={idx} className="bg-forest-900/60 p-6 rounded-2xl border border-sand-300/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gold-400 bg-forest-800 px-3 py-1 rounded-full">{item.day}</span>
                    <h4 className="editorial-heading text-xl font-bold text-ivory-100">{item.title}</h4>
                  </div>
                  <p className="text-xs text-ivory-300/80 leading-relaxed pl-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sticky Booking Panel */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-forest-900 p-8 rounded-3xl border border-gold-500/30 shadow-2xl space-y-6">
            <div className="border-b border-sand-300/10 pb-6 space-y-1">
              <span className="text-xs text-ivory-300/60 uppercase tracking-wider block">Starting Rate</span>
              <div className="flex items-baseline gap-2">
                <span className="editorial-heading text-4xl font-bold text-gold-400">${dest.price}</span>
                <span className="text-xs text-ivory-300/70">/ guest</span>
              </div>
            </div>

            <div className="space-y-4 text-xs text-ivory-200">
              <div className="flex justify-between py-2 border-b border-sand-300/10">
                <span className="text-ivory-300/60">Duration:</span>
                <span className="font-semibold">{dest.duration}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-sand-300/10">
                <span className="text-ivory-300/60">Included:</span>
                <span className="font-semibold">Bespoke Concierge</span>
              </div>
            </div>

            <button
              onClick={() => navigate(`/planner?destination=${dest.slug}`)}
              className="w-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl magnetic-btn"
            >
              Plan This Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
