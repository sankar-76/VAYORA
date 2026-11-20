import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import Icons from '../components/Icons';
import SafeImage from '../components/SafeImage';
import { DESTINATIONS, EXPERIENCES } from '../data/travelData';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Editorial Manifesto</span>
          <h1 className="editorial-heading text-5xl sm:text-7xl font-bold text-ivory-100">
            Travel Is More Than The Places You Go.
          </h1>
        </div>

        <div className="relative h-[400px] rounded-3xl overflow-hidden border border-sand-300/10 shadow-2xl">
          <SafeImage src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="VAYORA Philosophy" className="w-full h-full object-cover" />
        </div>

        <div className="space-y-8 text-base text-ivory-200/90 font-light leading-relaxed">
          <h2 className="editorial-heading text-3xl font-bold text-ivory-100">Our Story</h2>
          <p>
            Founded on the premise that true luxury is silence, space, and authenticity, VAYORA exists to connect discerning travelers with extraordinary corners of the world. We reject cookie-cutter itineraries in favor of deeply resonant encounters.
          </p>

          <h2 className="editorial-heading text-3xl font-bold text-ivory-100">Thoughtful Travel Philosophy</h2>
          <p>
            Every destination in our portfolio is chosen for its unique identity and commitment to environmental stewardship. We work directly with local families, master craftsmen, and private conservationists to ensure your presence supports the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
