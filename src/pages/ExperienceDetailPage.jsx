import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import Icons from '../components/Icons';
import SafeImage from '../components/SafeImage';
import { DESTINATIONS, EXPERIENCES } from '../data/travelData';

const ExperienceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const exp = useMemo(() => {
    return EXPERIENCES.find(e => e.slug === slug) || EXPERIENCES[0];
  }, [slug]);

  return (
    <div className="min-h-screen pt-28 pb-24 max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
      <div className="relative h-[450px] rounded-3xl overflow-hidden border border-sand-300/10 shadow-2xl">
        <SafeImage src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 space-y-2">
          <span className="bg-gold-500 text-forest-950 text-xs font-bold px-3 py-1 rounded-full uppercase">
            {exp.category}
          </span>
          <h1 className="editorial-heading text-4xl sm:text-5xl font-bold text-ivory-100">{exp.title}</h1>
          <p className="text-sm text-sand-300">{exp.destination} • {exp.duration}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-8">
          <section className="space-y-3">
            <h2 className="editorial-heading text-2xl font-bold text-ivory-100">Overview</h2>
            <p className="text-base text-ivory-200/90 leading-relaxed font-light">{exp.shortDesc}</p>
          </section>

          <section className="space-y-4">
            <h3 className="editorial-heading text-xl font-bold text-ivory-100">Highlights</h3>
            <ul className="space-y-3">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-ivory-200 bg-forest-900 p-4 rounded-xl border border-sand-300/10">
                  <Icons.Check className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="md:col-span-4">
          <div className="bg-forest-900 p-6 rounded-2xl border border-gold-500/30 space-y-6">
            <div>
              <span className="text-xs text-ivory-300/60 uppercase block">Investment</span>
              <span className="editorial-heading text-4xl font-bold text-gold-400">${exp.price}</span>
              <span className="text-xs text-ivory-300/60 block">per participant</span>
            </div>

            <button
              onClick={() => navigate(`/planner?experience=${exp.slug}`)}
              className="w-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest shadow-lg"
            >
              Plan This Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetailPage;
